import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProjects, addTask, updateTask , deleteTask, logOut} from '../../actions';
import css from './index.module.css';
import AddTask from '../../components/forms/addTask';
import FontAwesome from 'react-fontawesome';
import ProjectsContainer from '../projects';


class AppContainer extends Component {

    state = {
        showAddTask: false,
        currentProject: '',
        updatedTask: null
    }

    componentWillMount() {
        this.props.dispatch(getProjects());
    }

    componentWillReceiveProps(nextProps) {
        let currentProject = this.state.currentProject;
        if (currentProject) {
            this.setState({
                currentProject: nextProps.projects.find(project => project._id === currentProject._id)
            })
        } else {
            this.setState({
                currentProject: nextProps.projects[0] ?  nextProps.projects[0] : ''
            })
        }

    }

    logOut = () => {
        this.props.dispatch(logOut());
    }

    setCurrentProject = (e) => {
        let projectId = e.target.dataset.projectid;
        this.setState({
            currentProject: this.props.projects.find(project => project._id === projectId)
        })
    }

    submitAddTask = (e, name, creator, finishTime) => {
        this.props.dispatch(addTask({
            projectId: this.state.currentProject._id,
            name,
            creator,
            finishTime
        }));
    }

    finishTask = (e) => {
        let taskId = e.target.parentNode.dataset.taskid;
        let task = this.state.currentProject.tasks.find(task => task._id === taskId);
        this.props.dispatch(updateTask({
            projectId: this.state.currentProject._id,
            taskId: task._id,
            creator: task.creator,
            finishTime: task.finishTime,
            name: task.name, 
            finished: !task.finished
        }));
    }

    prepereToUpdateTask = (e) => {
        let taskId = e.target.parentNode.dataset.taskid;
        let currentProject = this.state.currentProject;
        let task = currentProject.tasks.find(task => task._id === taskId);
        let tempProject = currentProject;
        tempProject.tasks = currentProject.tasks.map(task => {
            if (task._id === taskId) {
                task.hidden = true
            }
            return task
        });
        this.setState({
            currentProject: tempProject,
            updatedTask: task
        })
    }

    updateTask = (e, name) => {
        let task = this.state.updatedTask;
        this.props.dispatch(updateTask({
            projectId: this.state.currentProject._id,
            taskId: task._id,
            creator: task.creator,
            finishTime: task.finishTime,
            name: name, 
            finished: task.finished
        }));
        this.setState({ updatedTask: null})
    }

    canselUpdatingTask = () => {
        let project = this.props.projects.find(project => project._id === this.state.currentProject._id);
        project.tasks = project.tasks.map(task => {
            task.hidden = false;
            return task;
        });
        this.setState({
            currentProject: project,
            updatedTask: null
        })
    }

    deleteTask = (e) => {
        let taskId = e.target.parentNode.dataset.taskid;
        let projectId = this.state.currentProject._id;
        this.props.dispatch(deleteTask({taskId, projectId}));
    }

    toggleAddTask = () => {
        this.setState({showAddTask: !this.state.showAddTask});
    }

    renderTasks = (tasks) => (
        tasks.map((task, i) => (
            !task.hidden
                ?   <div key={i} className={`${css.task} ${task.finished ? css.taskFinished : ''}`} data-taskid={task._id}>
                        <FontAwesome name='check-circle'
                        className={`${css.finished} ${task.finished ? css.finishedTrue : ''}`} 
                        onClick={this.finishTask}/>
                        <span>{task.name}</span>
                        <FontAwesome name='edit' className={`${css.icon} ${css.editIcon}`} onClick={this.prepereToUpdateTask}/>
                        <FontAwesome name='trash' className={css.icon} onClick={this.deleteTask}/>
                    </div>
                : null
        ))    
    )

    renderProject = (project) => (
        <div className={css.project}>
            <div className={css.project__title}>
                {project.name}
            </div>
            {this.renderTasks(project.tasks)}
        </div>
    )

    header = (
        <div className={css.menuWrapper}>
            <div className={css.container}>
                <div className={css.menu}>
                    <Link to='/' className={css.menuLogo}>SmartPlanner</Link>
                    <ul className={css.menuList}>
                        <li className={css.menuItem} onClick={this.logOut}>
                            <FontAwesome name='sign-out'/>
                            <span className={css.menuText}>Выход</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>  
    )

    render() {
        return (
            <div className={css.bg}>
                {this.header}
                <div id="app_holder" className={`${css.app_holder} ${css.container}`}>
                    <div className={css.left_menu}>
                        <ProjectsContainer 
                            projects={this.props.projects} 
                            dispatch={this.props.dispatch} 
                            user={this.props.user}
                            setProject={this.setCurrentProject}
                        />
                    </div>
                    <div className={css.content}>
                        {this.state.currentProject
                                ? this.renderProject(this.state.currentProject)
                                : null
                            }
                        {this.state.updatedTask
                            ? <AddTask
                                updateTask={this.updateTask}
                                user={this.props.user}
                                task={this.state.updatedTask}
                                onClose={this.canselUpdatingTask}
                            />
                            : null}
                        {this.state.showAddTask
                            ? <AddTask
                                onClose={this.toggleAddTask}
                                submitAddTask={this.submitAddTask}
                                user={this.props.user}
                            />
                            : null}
                        <div className={css.addTask} onClick={this.toggleAddTask}>
                            <i className={css.plus}>+</i>Добавить задачу
                        </div>
                    </div>                       
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(AppContainer);
