const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_TEXT: 
            state.newMesageText = action.newMessagetext;
            return state;
        case SEND_MESSAGE:  
            let text = state.newMesageText;
            state.newMesageText = '';
            state.messages.push( {alt: "ava1", message: text, in: false});
            return state;
        default: return state;
    }
    
}

// Action Creator объект аргумент для dispatch 
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessagetext: text })

export default dialogsReducer;