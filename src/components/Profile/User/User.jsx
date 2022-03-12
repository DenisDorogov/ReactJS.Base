import React from 'react';
import style from "./User.module.css";

const User = (props) => {
    return (
        <div className={style.user}>
            <div className={style.profile}>
            <img className={style.avatar} src={props.img} alt="Avatar" />
            <div className={style.info}>
                <div className={style.name}> Name Surmane</div>
                <div className={style.sity}> Sity </div>
                <div className={style.about}> About </div>
            </div>
            </div>
            
        </div>
    );
}

export default User;