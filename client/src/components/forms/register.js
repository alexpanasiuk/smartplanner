import React, { Component} from 'react';
import css from './forms.module.css';

// TODO: Rewrite validation

export default class Register extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        success: false,
        errors: ''
    }

    handleInputEmail = (event) => {
        this.setState( {email: event.target.value} );
    }
    
    handleInputPassword = (event) => {
        this.setState( {password: event.target.value} );
    }

    handleInputConfirmPassword = (event) => {
        this.setState( {confirmPassword: event.target.value} );
    }

    handleInputName = (event) => {
        this.setState( {name: event.target.value} );
    }

    submitForm = (event) => {
        event.preventDefault();
        let errors = this.validateForm();
        if (errors.length !== 0) {
            this.setState({ errors });
        } else {
            this.setState({ errors: '' });
            this.props.submitForm(event, this.state.email, this.state.password, this.state.name);
        }   
    }

    validateForm = () => {
        let errors = [];
        
        //check email
        let email = this.state.email.match(/[a-z]+([a-z0-9-_.])*@[a-z]+\.[a-z]+/gi);
        if (!email && this.state.email) {
            errors.push('Введите реальный email адрес');
        } else if (email && email[0] !== this.state.email) {
            errors.push('Введите реальный email адрес');
        }

        // check password
        let password = this.state.password.match(/[a-z0-9-_]+/gi);
        if (password && password[0] !== this.state.password) {
            errors.push('Недопустимые символы в пароле');
        } else if (password[0].length <= 6) {
            errors.push('Минимальная длина пароля 6 символов');
        } else if (password[0] !== this.state.confirmPassword) {
            errors.push('Пароли не совпадают');
        }

        //check name 
        let name = this.state.name.match(/[a-z0-9]+/gi);
        if (name && name[0] !== this.state.name) {
            errors.push('Недопустимые символы в имени');
        }

        return errors;
    }

    showErrors = (errors) => (
        errors.map( (item, i) => <p key={i} className={css.error}>{item}</p> ) 
    )

    render(){
        return (
            <div>
                {this.props.user.activated === false
                    ? <p className={css.activationText}>{this.props.user.msg}</p>
                     
                    :<form onSubmit={this.submitForm} className={css.popupForm}>
                        <input
                            className={css.input}
                            type="email"
                            placeholder="Введите вашу почту"
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                            required="required"
                        />
                        <input
                            className={css.input}
                            type="text"
                            placeholder="Введите ваше имя"
                            value={this.state.name}
                            onChange={this.handleInputName}
                            required="required"
                        />
                        <input
                            className={css.input}
                            type="password"
                            placeholder="Введите ваш пароль"
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                            required="required"
                        />
                        <input
                            className={css.input}
                            type="password"
                            placeholder="Повторите пароль"
                            value={this.state.confirmPassword}
                            onChange={this.handleInputConfirmPassword}
                            required="required"
                        />
                        <button type="submit" className={css.submit}>Зарегистрироваться</button>

                        <p className={css.txt}>
                            Уже зарегистрированы?
                            <a 
                                href='/login' 
                                onClick={this.props.showLogin}
                                className={css.link}
                                > Вход
                            </a>
                        </p>

                        {this.props.user && this.props.user.msg 
                            ? <p className={css.error}>{this.props.user.msg}</p>
                            : null
                        }

                        {this.state.errors
                            ? this.showErrors(this.state.errors)
                            : null}

                    </form>
                }
            </div>
        );
    }
}
