import React from 'react';
import style from "./Dialogs.module.css";
import Dialog from './Dialog';
import Board from './Board';

const Dialogs = (props) => {
    let src = props.dialogsPage.img; 
    let boardList = props.dialogsPage.dialogs.map(el => <Board path={el.path} name={el.name} />)
    let messageList = props.dialogsPage.messages.map(el => <Dialog src={src} alt={el.alt} message={el.message} in={el.in} />)
    let newMesageText = props.dialogsPage.newMesageText;

    return (
        <div className={style.feed}>
            <div className={style.dialogs_list}>
                {boardList}
            </div>

            <div className={style.dialog}>
                <p className={style.title}>Name</p>
                {messageList}
                <form className={style.block_new_message}>
                    <textarea 
                        className={style.input_message} 
                        value={newMesageText}
                        onChange={props.onMessageChange} 
                        placeholder='Enter your message'
                    />
                    <button 
                        className={style.send_message} 
                        onClick={props.sendMessage} >
                            Send
                    </button>
                </form>

            </div>
            
        </div>
    );
}

export default Dialogs;