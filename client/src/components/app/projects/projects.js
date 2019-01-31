import React, { Component} from 'react';
import FontAwesome from 'react-fontawesome';
import css from './projects.module.css';
import AddProject from '../../../components/forms/addProject'
import AddUser from '../../forms/addUser';
import axios from 'axios';

export default class Projects extends Component {
    state = {
        showAddProject: false,
        updatedProject: null,
        openAddUser: false,
        workWithProject: ''
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

    openAddUser = (e) => {
        e.stopPropagation();
        let parent = e.target.parentNode;
        while (!parent.dataset.projectid){
            parent = parent.parentNode;
        }
        const projectId = parent.dataset.projectid;
        this.setState({
            openAddUser: !this.state.openAddUser,
            workWithProject: projectId
        });
    }

    toggleAddUser = (e) => {
        this.setState({openAddUser: !this.state.openAddUser});
    }

    addUserToProject = (e, userEmail) => {
        const projectId = this.state.workWithProject;
        axios.post('/api/sendInviteLink', {projectId, userEmail})
            .then(res => console.log(res))
            .catch(err => console.log(err));
            this.setState({
                openAddUser: false,
                workWithProject: ''
            });
    }

    setProject = (e) => this.props.setContent(e, 'PROJECT');

    renderProjects = (projects) => {
        let updatedProject = this.state.updatedProject;
        return projects.length !== 0
            ? projects.map( (project , i) => (
                !updatedProject || (updatedProject._id !== project._id)
                    ? <li key={i} className={css.project} data-projectid={project._id} onClick={this.setProject}>
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
                icon: 'user-plus',
                text: 'Добавить пользователя',
                protected: false,
                callback: this.openAddUser
            },
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
                {this.state.openAddUser
                    ? <AddUser
                        onClose={this.toggleAddUser}
                        addUserToProject={this.addUserToProject}
                    />
                    : null}
            </div>
        )
    }
}
