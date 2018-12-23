import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../actions';
import Login from '../../components/forms/login';
import Popup from '../../hoc/popup/popup';

class LoginContainer extends Component {
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.user.isAuth){
            this.props.history.push('/app');
        }
    }

    submitForm = (e, email, password) => {
        e.preventDefault();
        this.props.dispatch(loginUser({email, password}));
    }

    render() {
        return (
            <Popup close={this.props.close} title={'Вход'}>
                <Login
                    showRegister={this.props.showRegister}
                    submitForm={this.submitForm}
                    user={this.props.user}
                />
            </Popup>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(LoginContainer);

