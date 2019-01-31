import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentProject from '../../../components/app/contentproject/content_project';
import {addTask, updateTask} from '../../../actions';

class ContentProjectContainer extends Component {

    state = {
        showAddTask: false,
        updatedTask: null,
        hiddenTasks: []
    }

    toggleAddTask = () => {
        this.setState({showAddTask: !this.state.showAddTask});
    }

    submitAddTask = (e, name, creator, finishTime) => {
        this.props.dispatch(addTask({
            projectId: this.props.project._id,
            name,
            creator,
            finishTime
        }));
    }

    prepareToUpdateTask = (e) => {
        let parent = e.target.parentNode;
        while (!parent.dataset.taskid){
            parent = parent.parentNode;
        }
        const taskId = parent.dataset.taskid;
        const currentProject = this.props.project;
        const task = currentProject.tasks.find(task => task._id === taskId);
        
        this.setState({
            updatedTask: task,
            hiddenTasks: [...this.state.hiddenTasks, task]
        })
    }

    updateTask = (e, name, task, finishTime) => {
        const isUpdateDate = name ? false : true;
        let timeSetted = false;

        if (isUpdateDate) {
            name = task.name;
            timeSetted = true;
        } else {
            task = this.state.updatedTask;
            finishTime = task.finishTime;
            timeSetted = task.timeSetted;
        } 

        this.props.dispatch(updateTask({
            projectId: this.props.project._id,
            taskId: task._id,
            creator: task.creator,
            timeSetted: timeSetted,
            finishTime: finishTime,
            name: name, 
            finished: task.finished
        }));

        if (!isUpdateDate) this.setState({ updatedTask: null})
    }

    canselUpdatingTask = () => {
        this.setState({
            updatedTask: null,
            hiddenTasks: this.state.hiddenTasks.filter(task => task._id !== this.state.updatedTask._id)
        })
    }

    render() {
        return (
            <ContentProject
                project={this.props.project}
                user={this.props.user}
                submitAddTask={this.submitAddTask}
                toggleAddTask={this.toggleAddTask}
                prepareToUpdateTask={this.prepareToUpdateTask}
                updateTask={this.updateTask}
                canselUpdatingTask={this.canselUpdatingTask}
                showAddTask={this.state.showAddTask}
                updatedTask={this.state.updatedTask}
                hiddenTasks={this.state.hiddenTasks}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(ContentProjectContainer);