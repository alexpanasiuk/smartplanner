import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerUser } from '../../actions';
import Register from '../../components/forms/register';
import Popup from '../../hoc/popup/popup';

class RegisterContainer extends Component {
    
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    submitForm = (e, email, password, name) => {
        e.preventDefault();
        this.props.dispatch(registerUser({email, password, name}));
    }

    render() {
        return (
            <Popup close={this.props.close} title={'Создайте его за пару секунд!'}>
                <Register
                    showLogin={this.props.showLogin}
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

export default connect(mapStateToProps)(RegisterContainer);

