import React from 'react';
import style from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={style.nav}>
            <a href='/point' className={style.item}>Point</a>
            <a href='/point' className={style.item}>Point</a>
            <a href='/point' className={style.item}>Point</a>
            <a href='/point' className={style.item}>Point</a>
            <a href='/point' className={style.item}>Point</a>
        </nav>
    );
}

export default Sidebar;