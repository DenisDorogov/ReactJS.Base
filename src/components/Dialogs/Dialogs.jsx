import React from 'react';
import style from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';


const Dialogs = () => {
    return(
        <div className={style.feed}>
            <div className={style.dialogs_list}>
                <div className={style.board}>
                    <NavLink to="/dialogs/name" className={style.name}>Name</NavLink>
                </div>
                <div className={style.board}>
                    <NavLink to="/dialogs/name" className={style.name}>Name</NavLink>
                </div>
                <div className={style.board}>
                    <NavLink to="/dialogs/name"  className={style.name}>Name</NavLink>
                </div>
               
            </div>

            <div className={style.dialog}>
                <p className={style.title}>Name</p>
                <div className={style.message_in}>
                    <img src="" alt="ava" className={style.avatar} />
                    <div className={style.message}>Hello! <br/>Hello<br/>Hell</div>
                </div>
                <div className={style.message_out}>
                    <img src="" alt="ava" className={style.avatar} />
                    <div className={style.message}>Hello! <br/>Hello<br/>Hell</div>
                </div>

            
            </div>
           

        </div>
    );
}

export default Dialogs;