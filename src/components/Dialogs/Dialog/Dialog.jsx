import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/Dialogs/' + props.id} activeClassName={s.active}> {props.name} </NavLink>
        </div>
    )
}


export default Dialog;