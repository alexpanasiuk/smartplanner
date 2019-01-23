import React from 'react';
import css from './time.module.css';
import FontAwesome from 'react-fontawesome';

export default function Time(props) {
    return (
        <div className={css.inputWrapper}>
            <label htmlFor='time-input' className={css.label}>Время: </label>
            <input
                id='time-input'
                value={props.time} 
                placeholder="Напр. 9:23"
                onChange={props.handleTimeChange}
                className={css.input}
            />
            {props.isValidTime
                ? null
                : <FontAwesome
                    className={css.warning}
                    name='warning'
                />
                }
            
        </div>
    )
}
