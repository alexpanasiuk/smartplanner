import React from 'react';
import css from './header.module.css';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <div className={css.menuWrapper}>
            <div className={css.container}>
                <div className={css.menu}>
                <FontAwesome 
                        name={props.showMobileMenu ? 'close' : 'bars'}
                        className={css.mobileMenuBtn}
                        onClick={props.toggleMobileMenu}
                    />
                    <Link to='/' className={css.menuLogo}>SmartPlanner</Link>
                    <ul className={css.menuList}>
                        <li className={css.menuItem} onClick={props.logOut}>
                            <FontAwesome name='sign-out'/>
                            <span className={css.menuText}>Выход</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>  
    )
}

