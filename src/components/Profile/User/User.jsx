import React from 'react';
import style from "./User.module.css";

const User = (props) => {
    console.log('User props: ', props);
    return (
        <div className={style.user}>
            <div className={style.profile}>
            <img className={style.avatar} src={props.profile.photos.large} alt="Avatar" />
            <div className={style.info}>
                <div className={style.name}> {props.profile.fullName} </div>
                <div className={style.sity}> Sity </div>
                <div className={style.about}> {props.profile.aboutMe} </div>
            </div>
            </div>
            
        </div>
    );
}

export default User;