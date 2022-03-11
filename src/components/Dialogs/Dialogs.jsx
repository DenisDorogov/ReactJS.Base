import React from 'react';
import style from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

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

    const boardList = dialogs.map(el => <Board path={el.path} name={el.name} />)

    const messageList = messages.map(el => <Dialog src={el.src} alt={el.alt} message={el.message} in={el.in} />)

    return (
        <div className={style.feed}>
            <div className={style.dialogs_list}>
                {boardList}
            </div>

            <div className={style.dialog}>
                <p className={style.title}>Name</p>
                {messageList}
            </div>
        </div>
    );
}

export default Dialogs;