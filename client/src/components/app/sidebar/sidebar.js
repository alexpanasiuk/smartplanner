import React, { Component } from 'react';
import ProjectsContainer from '../../../containers/app/projects';
import css from './sidebar.module.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div className={`${css.left_menu} ${this.props.showMobileMenu ? css.open : null}`}>
                <ProjectsContainer
                    projects={this.props.projects} 
                    dispatch={this.props.dispatch} 
                    user={this.props.user}
                    setContent={this.props.setContent}
                />
            </div>
        )
    }
}
