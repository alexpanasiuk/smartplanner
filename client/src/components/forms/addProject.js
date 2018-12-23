import React, { Component } from 'react'
import css from './forms.module.css';

export default class AddProject extends Component {
    state = {
        projectName: this.props.project ? this.props.project.name : ''
    }

    handleProjectName = (e) => {
        this.setState({projectName: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.project 
            ? this.props.updateProject(this.props.project._id, this.state.projectName)
            : this.props.addProject(this.state.projectName);
        this.props.onClose();
    }

    render() {
        return (
            <form className={css.addTaskForm} onSubmit={this.handleSubmit}>
                <input type="text" 
                    className={css.input}
                    value={this.state.projectName}
                    required 
                    onChange={this.handleProjectName} 
                    placeholder="Текст задачи"
                />
                <input type="submit" className={`${css.smallSubmit} ${css.submit}`} value={this.props.project ? 'Обновить проект' : "Добавить проект"}/>
                <div className={css.cansel} onClick={this.props.onClose}>
                    Отмена
                </div>
            </form>
        )
    }
}
