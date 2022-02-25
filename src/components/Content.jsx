import React from 'react';
import Profile from './Profile';
import style from "./Content.module.css";

const Content = () => {
    return (
        <div className={style.content}>
            <Profile/>
        </div>
    );
}

export default Content;