import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects, logOut, connectToSocket } from '../../actions';
import css from './index.module.css';
import Header from '../../components/app/header/header';
import Sidebar from '../../components/app/sidebar/sidebar';
import ContentWrapper from '../../components/app/contentwrapper/content_wrapper';

class AppContainer extends Component {

    state = {
        content: '',
        showMobileMenu: false,
        contentType: null
    }

    componentWillMount() {
        if (this.props.user.isAuth) {
            this.props.dispatch(connectToSocket(this.props.user));
        }
        this.props.dispatch(getProjects());
    }

    componentWillReceiveProps(nextProps) {
        const currentContent = this.state.content;
        const nextContent = nextProps.projects.find(project => project._id === currentContent._id);
        if (nextContent) {
            this.setState({
                content: nextContent,
                contentType: 'PROJECT'
            })
        } else {
            this.setState({
                content: nextProps.projects[0] ?  nextProps.projects[0] : '',
                contentType: nextProps.projects[0] ? 'PROJECT' : null
            })
        }
    }

    toggleMobileMenu = () => {
        this.setState({showMobileMenu: !this.state.showMobileMenu});
    }

    logOut = () => {
        this.props.dispatch(logOut());
    }

    setContent = (e, contentType) => {
        const projectId = e.target.dataset.projectid;
        this.setState({
            content: this.props.projects.find(project => project._id === projectId),
            showMobileMenu: false,
            contentType
        })
    }

    render() {
        return (
            <div className={css.bg}>
                <Header showMobileMenu={this.state.showMobileMenu} toggleMobileMenu={this.toggleMobileMenu} logOut={this.logOut}/>
                <div id="app_holder" className={`${css.app_holder} ${css.container}`}>
                    <Sidebar
                        projects={this.props.projects} 
                        dispatch={this.props.dispatch} 
                        user={this.props.user}
                        setContent={this.setContent}
                        showMobileMenu={this.state.showMobileMenu}
                    />
                    <ContentWrapper
                        content={this.state.content}
                        contentType={this.state.contentType}
                        user={this.props.user}
                    />                    
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
