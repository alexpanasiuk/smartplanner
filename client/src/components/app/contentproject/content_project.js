import React, { Component } from 'react';
import css from './content_project.module.css';
import TaskContainer from '../../../containers/app/task';
import AddTask from '../../forms/addTask';


export default class ContentProject extends Component {
    render() {
        return (
            <div>
                <div className={css.project}>
                    <div className={css.project__title}>
                        {this.props.project.name}
                    </div>
                    {this.props.project.tasks.map((task, i) =>
                        <TaskContainer
                            project={this.props.project}
                            task={task}
                            i={i}
                            updateTask={this.props.updateTask}
                            prepareToUpdateTask={this.props.prepareToUpdateTask}
                            key={i}
                            hiddenTasks={this.props.hiddenTasks}
                        />
                    )}
                    
                </div>
                {this.props.updatedTask
                    ? <AddTask
                        updateTask={this.props.updateTask}
                        user={this.props.user}
                        task={this.props.updatedTask}
                        onClose={this.props.canselUpdatingTask}
                    />
                    : null}
                {this.props.showAddTask
                    ? <AddTask
                        onClose={this.props.toggleAddTask}
                        submitAddTask={this.props.submitAddTask}
                        user={this.props.user}
                    />
                    : null}
                <div className={css.addTask} onClick={this.props.toggleAddTask}>
                    <span className={css.plus}>+</span>Добавить задачу
                </div>
            </div>
        )
    }
}