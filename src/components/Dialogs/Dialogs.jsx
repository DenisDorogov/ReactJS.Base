import React from 'react';
import style from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

let img = "https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg"

let dialogs = [
    { path: "/id1", name: "Name1" },
    { path: "/id2", name: "Name2" },
    { path: "/id3", name: "Name3" },
    { path: "/id4", name: "Name4" },
    { path: "/id5", name: "Name5" },
];

let messages = [
    { src: img, alt: "ava1", message: "Hello!!!", in: true },
    { src: img, alt: "ava1", message: "Hello", in: false },
    { src: img, alt: "ava1", message: "Hell", in: true },
    { src: img, alt: "ava1", message: "Hell!!!", in: true },
    { src: img, alt: "ava1", message: "Hell", in: true },
];

const Board = (props) => {
    return (
        <div className={style.board}>
            <NavLink to={"/dialogs" + props.dialog.path} className={style.name}>{props.dialog.name}</NavLink>
        </div>
    )
}

const Dialog = (props) => {
    let inOut = props.message.in ? style.message_in : style.message_out;
    return (<div className={inOut}>
        <img src={props.message.src} alt={props.message.alt} className={style.avatar} />
        <div className={style.message}>{props.message.message}</div>
    </div>
    )
}


const Dialogs = () => {
    return (
        <div className={style.feed}>
            <div className={style.dialogs_list}>
                <Board dialog={dialogs[0]}/>
                <Board dialog={dialogs[1]}/>
                <Board dialog={dialogs[2]}/>
                <Board dialog={dialogs[3]}/>
                <Board dialog={dialogs[4]}/>
               
            </div>

            <div className={style.dialog}>
                <p className={style.title}>Name</p>
                <Dialog message={messages[0]}/>
                <Dialog message={messages[1]}/>
                <Dialog message={messages[2]}/>
                <Dialog message={messages[3]}/>
                <Dialog message={messages[4]}/>
            </div>
        </div>
    );
}

export default Dialogs;