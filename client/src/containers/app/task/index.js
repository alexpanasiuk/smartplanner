import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../../../components/app/task/task';
import { deleteTask, updateTask } from '../../../actions';
class TaskContainer extends Component {

    state = {
        date: new Date(),
        time: '',
        isValidTime: true
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
            <Task
                handleCalendarChange={this.handleCalendarChange}
                handleTimeChange={this.handleTimeChange}
                updateTaskTime={this.updateTaskTime}
                finishTask={this.finishTask}
                deleteTask={this.deleteTask}
                prepareToUpdateTask={this.props.prepareToUpdateTask}
                task={this.props.task}
                hiddenTasks={this.props.hiddenTasks}
                i={this.props.i}
                {...this.state}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(TaskContainer);