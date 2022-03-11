import React from 'react';
import style from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

let img = "https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg"

const Board = (props) => {
    return (
        <div className={style.board}>
            <NavLink to={"/dialogs" + props.path} className={style.name}>{props.name}</NavLink>
        </div>
    )
}

const Dialog = (props) => {
    let inOut = props.in ? style.message_in : style.message_out;
    return (<div className={inOut}>
        <img src={props.src} alt={props.alt} className={style.avatar} />
        <div className={style.message}>{props.message}</div>
    </div>
    )
}


const Dialogs = () => {
    return (
        <div className={style.feed}>
            <div className={style.dialogs_list}>
                <Board path="/id1" name="Name1"/>
                <Board path="/id2" name="Name2"/>
                <Board path="/id3" name="Name3"/>
                <Board path="/id4" name="Name4"/>
            </div>

            <div className={style.dialog}>
                <p className={style.title}>Name</p>
                <Dialog src={img} alt="ava1" message="Hello!!!" in={true}/>
                <Dialog src={img} alt="ava2" message="Hello!!!" in={false}/>
                <Dialog src={img} alt="ava1" message="Hello!!!" in={true}/>
            </div>
        </div>
    );
}

export default Dialogs;