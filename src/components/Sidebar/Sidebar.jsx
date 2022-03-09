import React from 'react';
import style from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={style.nav}>
            <a href='/profile' className={style.item}>Profile</a>
            <a href='/dialogs' className={style.item}>Dialogs</a>
            <a href='/news' className={style.item}>News</a>
            <a href='/music' className={style.item}>Music</a>
            <a href='/settings' className={style.item}>Settings</a>
        </nav>
    );
}

export default Sidebar;