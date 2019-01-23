import React, { Component } from 'react';
import css from './dropdown.module.css';

class Dropdown extends Component {
    state = {
        open: false
    }
    componentWillUnmount () {
        const body = document.querySelector('body');
        body.removeEventListener('click', this._closeDropdown);
    }

    toggleDropdown = e => this.setState({open: !this.state.open})

    closeDropdown = e => {
        const body = document.querySelector('body');
        body.addEventListener('click', this._closeDropdown);
    }

    _closeDropdown = (e) =>{
        const body = document.querySelector('body');
        const _this = this;
        const thisDropdown = document.getElementById(this.props.name);
        if (!thisDropdown.contains(e.target)) {
            _this.setState({open: false});
            body.removeEventListener('click', this._closeDropdown);
        }
    }

    render() {
        return (
            <div onClick={this.closeDropdown} className={`${css.dropdown} ${this.props.className}`} id={this.props.name}>
                <div className={`${css.toggleDropdown}`} onClick={this.toggleDropdown}>
                    {this.props.component}
                </div>
                {this.state.open
                    ?<div className={css.contentWrapper}>
                        {this.props.children}
                    </div>
                    : null
                    }
            </div>
        )
    }
}

export default Dropdown;