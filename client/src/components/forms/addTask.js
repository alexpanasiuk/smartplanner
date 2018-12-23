import React, { Component } from 'react'
import css from './forms.module.css';

export default class AddTask extends Component {
    state = {
        taskName: this.props.task ? this.props.task.name : ''
    }

    handleTaskName = (e) => {
        this.setState({taskName: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.task 
            ? this.props.updateTask(e, this.state.taskName)
            : this.props.submitAddTask(e, this.state.taskName, this.props.user.id, Date.now() + 20000);
        this.props.onClose();
    }

    render() {
        return (
            <form className={css.addTaskForm} onSubmit={this.handleSubmit}>
                <input type="text" 
                    className={css.input}
                    value={this.state.taskName}
                    required 
                    onChange={this.handleTaskName} 
                    placeholder="Текст задачи"
                />
                <input type="submit" className={`${css.smallSubmit} ${css.submit}`} value={this.props.task ? 'Обновить задачу' : "Добавить задачу"}/>
                <div className={css.cansel} onClick={this.props.onClose}>
                    Отмена
                </div>
            </form>
        )
    }
}
