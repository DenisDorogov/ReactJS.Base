import React from 'react';
import style from "./Dialogs.module.css";
import Dialog from './Dialog';
import Board from './Board';

const Dialogs = (props) => {

    const boardList = props.dialogs.map(el => <Board path={el.path} name={el.name} />)

    const messageList = props.messages.map(el => <Dialog src={el.src} alt={el.alt} message={el.message} in={el.in} />)

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