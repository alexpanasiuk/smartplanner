import React, { Component } from 'react';
import Projects from '../../components/projects/projects';
import {addProject, updateProject, deleteProject} from '../../actions'

export default class ProjectsContainer extends Component {
    
    addProject = (name) => {
        let creator = this.props.user.id;
        this.props.dispatch(addProject({name, creator}));
    }

    updateProject = (projectId, name) => {
        this.props.dispatch(updateProject({projectId, name}));
    }

    deleteProject = (e) => {
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
        this.props.dispatch(deleteProject({projectId}));
    }
    
    render() {
        return (
            <Projects projects={this.props.projects}
            user={this.props.user}
            addProject={this.addProject} 
            updateProject={this.updateProject}
            deleteProject={this.deleteProject}
            setProject={this.props.setProject}/>
        )
    }
}


