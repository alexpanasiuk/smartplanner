import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../../containers/login';
import RegisterContainer from '../../containers/register';
import css from './home.module.css';

export default class Home extends Component {
    state = {
        openLogin: false,
        openRegister: false
    }

    toggleOpenLogin = (event) => {
        event.preventDefault();
        this.setState({ openLogin: !this.state.openLogin })
    }
    
    toggleOpenRegister = (event) => {
        event.preventDefault();
        this.setState({ openRegister: !this.state.openRegister })
    }

    showRegister = (event) => {
        event.preventDefault();
        this.setState({ 
            openLogin: false,
            openRegister: true
        })
    }

    showLogin = (event) => {
        event.preventDefault();
        this.setState({ 
            openLogin: true,
            openRegister: false
        })
    }

    menu = (
        <div className={css.menuWrapper}>
            <div className={css.container}>
                <nav className={css.menu}>
                    <Link to='/' className={css.logo}>SmartPlanner</Link>
                    <ul className={css.menuList}>
                        <li className={css.menuItem}>
                            <a href='/login' onClick={this.toggleOpenLogin} className={css.menuButton}>Вход</a>
                        </li>
                        <li className={css.menuItem}>
                            <a href='/register' onClick={this.toggleOpenRegister} className={css.menuButton}>Регистрация</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>  
    )

    firstScreen = (
        <section className={css.firstScreen}>
            <div className={css.container}>
                <div className={css.textWrapper}>
                    <h1 className={css.title}>
                        Организуй задачи
                    </h1>
                    <p className={css.subtitle}>
                        И наслаждайся отдыхом
                    </p>
                    <p className={css.text}>
                        Мы поможем отслеживать Ваши задачи. А вместе с этим экономить время и не держать все в голове. 
                    </p>
                    <a href="/register" className={css.cta} onClick={this.toggleOpenRegister}>
                        Начните сейчас
                    </a>
                </div>
            </div>
        </section>
    )

    render() {
        return (
            <div>
                {this.menu}
                {this.firstScreen}
                {this.state.openLogin
                    ? <LoginContainer close={this.toggleOpenLogin} showRegister={this.showRegister} history={this.props.history}/>
                    : null}
                {this.state.openRegister
                    ? <RegisterContainer close={this.toggleOpenRegister} showLogin={this.showLogin}/>
                    : null}
            </div>
        )
    }
}
