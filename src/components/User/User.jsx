import React from 'react';
import style from "./User.module.css";

const User = () => {
    return (
        <div className={style.user}>
            <div className={style.profile}>
            <img className={style.avatar} src="https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg" alt="Avatar" />
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