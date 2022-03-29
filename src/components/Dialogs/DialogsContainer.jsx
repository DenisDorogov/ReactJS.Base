import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageCreator} from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    const onMessageChange = (event) => {
        let text = event.target.value
        props.store.dispatch(updateNewMessageCreator( text));
    }

    const sendMessage = (event) => {
        event.preventDefault();
        props.store.dispatch(sendMessageCreator())
    }

    return (
        <Dialogs 
            dialogsPage={state}
            onMessageChange={onMessageChange}
            sendMessage={sendMessage}
        />
    );
}

export default DialogsContainer;