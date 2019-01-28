import React from 'react';
import css from './tasks.module.css';
import Dropdown from '../../../hoc/dropdown/dropdown';
import FontAwesome from 'react-fontawesome';
import Time from '../../time/time';
import Calendar from 'react-calendar/dist/entry.nostyle';

export default function Tasks(props) {

    return (
        props.tasks.map((task, i) => (
            !task.hidden
                ?   <div key={i} className={`${css.task} ${task.finished ? css.taskFinished : ''}`} data-taskid={task._id}>
                        <FontAwesome name='check-circle'
                        className={`${css.finished} ${task.finished ? css.finishedTrue : ''}`} 
                        onClick={props.finishTask}/>
                        <span className={css.taskText}>{task.name}</span>
                        <div className={css.taskIconsWrapper}>
                            <FontAwesome name='trash' className={css.icon} onClick={props.deleteTask} />                           
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
                                    onChange={props.handleCalendarChange}
                                    value={props.date}
                                />
                                <Time
                                    time={props.time}
                                    handleTimeChange={props.handleTimeChange}
                                    isValidTime={props.isValidTime} 
                                />
                                <div className={css.timeSubmitWrapper}>
                                    <button 
                                        onClick={props.updateTaskTime}
                                        className={`${css.timeSubmit} ${props.isValidTime ? null : css.disabled}`}
                                        disabled={props.isValidTime ? false : true}>
                                            Задать
                                        </button>
                                </div>       
                            </Dropdown>
                            <Dropdown
                                name={`taskActions${i}`}
                                component={<FontAwesome name='ellipsis-h' className={css.icon}/>}
                                className={css.inline}
                                >
                                <div className={css.dropdownItem} onClick={props.prepareToUpdateTask}>
                                    <FontAwesome name='edit' className={css.icon}/>
                                    <span className={css.dropdownText}>Редактировать</span>
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                : null
        ))    
    )
}
