import React, { Component } from 'react';
import Popup from '../../hoc/popup/popup';
import css from './forms.module.css';

export default class AddUser extends Component {
    state = {
        userEmail: ''
    }

    handleUserEmail = (e) => {
        this.setState({userEmail: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUserToProject(e, this.state.userEmail);
    }

    render() {
        return (
            <Popup close={this.props.onClose} title={'Добавить пользователя'}>
                <form className={css.addUserForm} onSubmit={this.handleSubmit}>
                    <input 
                        type="email" 
                        className={css.input}
                        value={this.state.userEmail}
                        required 
                        onChange={this.handleUserEmail} 
                        placeholder="Email пользователя"
                    />
                    <input type="submit" className={css.submit} value="Добавить"/>
                </form>
            </Popup>
        )
    }
}
