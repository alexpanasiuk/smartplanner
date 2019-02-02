import React, { Component } from 'react';
import css from './task.module.css'
import Dropdown from '../../../hoc/dropdown/dropdown';
import FontAwesome from 'react-fontawesome';
import Time from '../../time/time';
import Calendar from 'react-calendar/dist/entry.nostyle';

export default class Task extends Component {
    render() {
        const {task, i} = this.props;
        const hidden = this.props.hiddenTasks.filter(hiddenTask => hiddenTask._id === task._id).length;
        return (
            !hidden
                ?   <div className={`${css.task} ${task.finished ? css.taskFinished : ''}`} data-taskid={task._id}>
                        <FontAwesome name='check-circle'
                            className={`${css.finished} ${task.finished ? css.finishedTrue : ''}`} 
                            onClick={this.props.finishTask}/>
                        <span className={css.taskText}>
                            {task.name}
                            <FontAwesome name='commenting-o' className={css.icon} onClick={this.props.toggleComments} />
                        </span>
                        <div className={css.taskIconsWrapper}>
                            <FontAwesome name='trash' className={css.icon} onClick={this.props.deleteTask} />                           
                            <Dropdown
                                name={`task-calendar${i}`}
                                component={task.timeSetted
                                    ?   <span className={css.timeSetted}>         
                                            {new Date(task.finishTime).toLocaleDateString().slice(0, -5)}
                                        </span> 
                                    :   <FontAwesome name='calendar-o' className={css.icon}/>}
                                className={css.inline}>
                                <Calendar
                                    minDate={new Date()}
                                    onChange={this.props.handleCalendarChange}
                                    value={this.props.date}
                                />
                                <Time
                                    time={this.props.time}
                                    handleTimeChange={this.props.handleTimeChange}
                                    isValidTime={this.props.isValidTime} 
                                />
                                <div className={css.timeSubmitWrapper}>
                                    <button 
                                        onClick={this.props.updateTaskTime}
                                        className={`${css.timeSubmit} ${this.props.isValidTime ? null : css.disabled}`}
                                        disabled={this.props.isValidTime ? false : true}>
                                            Задать
                                        </button>
                                </div>       
                            </Dropdown>
                            <Dropdown
                                name={`taskActions${i}`}
                                component={<FontAwesome name='ellipsis-h' className={css.icon}/>}
                                className={css.inline}
                                >
                                <div className={css.dropdownItem} onClick={this.props.prepareToUpdateTask}>
                                    <FontAwesome name='edit' className={css.icon}/>
                                    <span className={css.dropdownText}>Редактировать</span>
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                : null
        )
    }
}
