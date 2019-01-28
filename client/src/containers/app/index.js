import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProjects, addTask, updateTask , deleteTask, logOut, connectToSocket} from '../../actions';
import css from './index.module.css';
import AddTask from '../../components/forms/addTask';
import FontAwesome from 'react-fontawesome';
import ProjectsContainer from '../projects';
import Tasks from '../../components/app/tasks/tasks';

class AppContainer extends Component {

    state = {
        showAddTask: false,
        currentProject: '',
        updatedTask: null,
        showMobileMenu: false,
        date: new Date(),
        time: '',
        isValidTime: true
    }

    componentWillMount() {
        if (this.props.user.isAuth) {
            console.log('connect');
            this.props.dispatch(connectToSocket(this.props.user));
        }
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

        let parent = e.target.parentNode;
        while (!parent.dataset.taskid){
            parent = parent.parentNode;
        }
        const taskId = parent.dataset.taskid;
        const currentProject = this.state.currentProject;
        const task = currentProject.tasks.find(task => task._id === taskId);
        this.updateTask(e, null, task, newDate);
        document.querySelector('body').click(); // Close dropdown
    }

    toggleMobileMenu = () => {
        this.setState({showMobileMenu: !this.state.showMobileMenu});
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

    prepareToUpdateTask = (e) => {
        let parent = e.target.parentNode;
        while (!parent.dataset.taskid){
            parent = parent.parentNode;
        }
        const taskId = parent.dataset.taskid;
        const currentProject = this.state.currentProject;
        const task = currentProject.tasks.find(task => task._id === taskId);
        const tempProject = currentProject;
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

    updateTask = (e, name, task, finishTime) => {
        const isUpdateDate = name ? false : true;
        let timeSetted = false;

        if (isUpdateDate) {
            name = task.name
            timeSetted = true;
        } else {
            task = this.state.updatedTask;
            finishTime = task.finishTime;
            timeSetted = task.timeSetted;
        } 

        this.props.dispatch(updateTask({
            projectId: this.state.currentProject._id,
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
        let parent = e.target.parentNode;
        while (!parent.dataset.taskid){
            parent = parent.parentNode;
        }
        let taskId = parent.dataset.taskid;
        let projectId = this.state.currentProject._id;
        this.props.dispatch(deleteTask({taskId, projectId}));
    }

    toggleAddTask = () => {
        this.setState({showAddTask: !this.state.showAddTask});
    }

    renderProject = (project) => (
        <div className={css.project}>
            <div className={css.project__title}>
                {project.name}
            </div>
            <Tasks
                tasks={project.tasks}
                {...this.state}
                finishTask={this.finishTask}
                handleCalendarChange={this.handleCalendarChange}
                handleTimeChange={this.handleTimeChange}
                updateTaskTime={this.updateTaskTime}
                prepareToUpdateTask={this.prepareToUpdateTask}
                deleteTask={this.deleteTask}
            />
        </div>
    )

    renderHeader =  () => (
        <div className={css.menuWrapper}>
            <div className={css.container}>
                <div className={css.menu}>
                   <FontAwesome 
                        name={this.state.showMobileMenu ? 'close' : 'bars'}
                        className={css.mobileMenuBtn}
                        onClick={this.toggleMobileMenu}
                    />
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
                {this.renderHeader()}
                <div id="app_holder" className={`${css.app_holder} ${css.container}`}>
                    <div className={`${css.left_menu} ${this.state.showMobileMenu ? css.open : null}`}>
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
                        {this.state.currentProject
                            ? <div className={css.addTask} onClick={this.toggleAddTask}>
                                <span className={css.plus}>+</span>Добавить задачу
                            </div>
                            : null 
                        }
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
