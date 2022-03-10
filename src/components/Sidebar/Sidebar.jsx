import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={style.nav}>
            <NavLink to='/profile' className={style.item} >Profile</NavLink>
            <NavLink to='/dialogs' className={style.item} >Dialogs</NavLink>
            <NavLink to='/news' className={style.item} >News</NavLink>
            <NavLink to='/music' className={style.item} >Music</NavLink>
            <NavLink to='/settings' className={style.item} >Settings</NavLink>
        </nav>
    );
}

export default Sidebar;