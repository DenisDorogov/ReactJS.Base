import React from 'react';
import style from './dialogs.module.css'

const Dialog = (props) => {
    let inOut = props.in ? style.message_in : style.message_out;
    return (<div className={inOut} key={props.id}>
        <img src={props.src} alt={props.alt} className={style.avatar} />
        <div className={style.message}>{props.message}</div>
    </div>
    )
}

export default Dialog;