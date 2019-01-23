import React, { Component} from 'react';
import FontAwesome from 'react-fontawesome';
import css from './projects.module.css';
import AddProject from '../../components/forms/addProject'

export default class Projects extends Component {
    state = {
        showAddProject: false,
        updatedProject: null
    }


    prepereToUpdateProject = (e) => {
        e.stopPropagation();
        let projectId = '';
        let elem = e.target.parentNode;
        while (!projectId) {
            if (elem.dataset.projectid) {
                projectId = elem.dataset.projectid;
                break;
            }
            elem = elem.parentNode;
        }
        const tempProject = this.props.projects.find(project => project._id === projectId);
        this.setState({
            updatedProject: tempProject
        })
    }

    canselUpdatingProject = () => {
        this.setState({
            updatedProject: ''
        })
    }
    
    renderDropdown = (dropdown) => {
        return dropdown.map( (item, i) => (
            (item.protected && (item.creator === this.props.user._id) ) || !item.protected
                ?   <li key={i} className={css.dropdownItem} onClick={item.callback}>
                        <FontAwesome name={item.icon}/>
                        <span className={css.dropdownText}>{item.text}</span>
                    </li>
                : null
        ))
    }

    toggleAddProject = () => {
        this.setState({
            showAddProject: !this.state.showAddProject
        })
    }

    showDropdown = (e) => {
        e.stopPropagation();
        let dropdown = e.target.nextSibling;
        let body = document.querySelector('body');
        dropdown.style = 'display: block;';

        body.addEventListener('click', function _closeDropdown(event) {
            dropdown.style = '';
            body.removeEventListener('click', _closeDropdown);
        });
    }

    renderProjects = (projects) => {
        let updatedProject = this.state.updatedProject;
        return projects.length !== 0
            ? projects.map( (project , i) => (
                !updatedProject || (updatedProject._id !== project._id)
                    ? <li key={i} className={css.project} data-projectid={project._id} onClick={this.props.setProject}>
                        {project.name}
                        <FontAwesome name='ellipsis-h' className={css.ellipsis} onClick={this.showDropdown}/>
                        <ul className={css.dropdown}>
                            {this.renderDropdown(this.dropdown, project)}
                        </ul>
                      </li>
                    : null ))
            : null
        }

    dropdown = [
        {
            icon: 'edit',
            text: 'Редактировать проект',
            protected: false,
            callback: this.prepereToUpdateProject
        },
        {
            icon: 'trash',
            text: 'Удалить проект',
            protected: true,
            callback: this.props.deleteProject
        }
    ]

    render() {
        return (
            <div>
                <div className={css.projects}>
                    <FontAwesome name='angle-right' className={css.r_angle}/>
                    <span className={css.projectsTitle}>Проекты:</span>
                    <span className={css.plus} onClick={this.toggleAddProject}>+</span>
                </div>
                <ul>
                    {this.renderProjects(this.props.projects)}
                </ul>
                {this.state.updatedProject
                        ? <AddProject
                            updateProject={this.props.updateProject}
                            user={this.props.user}
                            project={this.state.updatedProject}
                            onClose={this.canselUpdatingProject}
                        />
                        : null}
                {this.state.showAddProject
                        ? <AddProject
                            onClose={this.toggleAddProject}
                            addProject={this.props.addProject}
                            user={this.props.user}
                        />
                        : null}
                <div className={css.addProject} onClick={this.toggleAddProject}>
                    <span className={css.plus}>+</span>
                    <span className={css.addProjectText}>Добавить проект</span>
                </div>
            </div>
        )
    }
}
