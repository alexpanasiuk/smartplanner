import React from 'react';
import css from './popup.module.css';

export default function Popup(props) {
    return (
        <div className={css['popup']}>
            <div className={css['popup-content']}>
                <table className={css['popup-header']}>
                    <tbody>
                        <tr>
                            <td className={css['popup-title']}>
                                {props.title}
                            </td>
                            <td>
                                <div 
                                    className={css['popup-close']}
                                    onClick={props.close}>
                                    X
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {props.children}
            </div>
        </div>
    )
}
