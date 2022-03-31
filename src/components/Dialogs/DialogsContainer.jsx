import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageCreator} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (event) => {
            let text = event.target.value
            dispatch(updateNewMessageCreator(text));
        },
        sendMessage: (event) => {
            event.preventDefault();
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;