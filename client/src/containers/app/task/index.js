import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../../../components/app/task/task';
import { deleteTask, updateTask, addComment } from '../../../actions';
import Popup from '../../../hoc/popup/popup';
import Comments from '../../../components/app/comments/comments';

class TaskContainer extends Component {

    state = {
        date: new Date(),
        time: '',
        isValidTime: true,
        showComments: false,
        commentText: ''
    }

    toggleComments = () => this.setState({showComments: !this.state.showComments})

    handleCommentText = (e) => this.setState({commentText: e.target.value});

    addComment = (e) => {
        e.preventDefault();
        let text = this.state.commentText;
        text = text.trim();
        this.props.dispatch(addComment({
            projectId: this.props.project._id,
            taskId: this.props.task._id,
            text
        }));
        this.setState({commentText: ''});
    }

    handleCalendarChange = (date) => this.setState({ date })

    handleTimeChange = (e) => {
        const time = e.target.value;
        const isValidTime = this.isValidTime(time);
        this.setState({time, isValidTime});
    }

    isValidTime = (time) => {
        if (!time) return true;

        const re = /[^0-9: ]/;
        if (time.match(re)) return false;

        const splitedTime = time.split(':');
        if (splitedTime.length !== 2 || !splitedTime[1]) return false;

        const hours = splitedTime[0].trim();
        const minutes = splitedTime[1].trim();
        
        if (parseInt(hours) > 24 || parseInt(minutes) > 59) return false;
        
        return true;
    }

    updateTaskTime = (e) => {
        let {date, time}  = this.state;
        let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        let [hours, minutes] = time.split(':');
        if (time) {
            hours = parseInt(hours);
            minutes = parseInt(minutes);
            newDate.setMinutes(newDate.getMinutes() + hours * 60 + minutes);
        } else {
            newDate.setMinutes(newDate.getMinutes() + 720);
        }

        const task = this.props.task;
        this.props.updateTask(e, null, task, newDate);
        document.querySelector('body').click(); // Close dropdown
    }

    finishTask = (e) => {
        const project = this.props.project;
        const task = this.props.task;
        this.props.dispatch(updateTask({
            projectId: project._id,
            taskId: task._id,
            creator: task.creator,
            finishTime: task.finishTime,
            name: task.name, 
            finished: !task.finished
        }));
    }

    deleteTask = (e) => {
        const task = this.props.task;
        let projectId = this.props.project;
        this.props.dispatch(deleteTask({
            taskId: task._id,
            projectId
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Task
                    handleCalendarChange={this.handleCalendarChange}
                    handleTimeChange={this.handleTimeChange}
                    updateTaskTime={this.updateTaskTime}
                    finishTask={this.finishTask}
                    deleteTask={this.deleteTask}
                    toggleComments={this.toggleComments}
                    prepareToUpdateTask={this.props.prepareToUpdateTask}
                    task={this.props.task}
                    hiddenTasks={this.props.hiddenTasks}
                    i={this.props.i}
                    {...this.state}
                />
                {this.state.showComments
                    ?   <Popup title="Комментарии" close={this.toggleComments}>
                            <Comments 
                                task={this.props.task}
                                handleCommentText={this.handleCommentText}
                                commentText={this.state.commentText}
                                addComment={this.addComment}
                            />
                        </Popup>
                    :   null
                }
                
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(TaskContainer);