const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState1 = {
    img: "https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg",
    dialogs: [
        { path: "/id1", name: "Name1" },
        { path: "/id2", name: "Name2" },
        { path: "/id3", name: "Name3" },
        { path: "/id4", name: "Name4" },
        { path: "/id5", name: "Name5" },
    ],
    messages: [
        { alt: "ava1", message: "Hello!!!", in: true },
        { alt: "ava1", message: "Hello", in: false },
        { alt: "ava1", message: "Hell", in: true },
        { alt: "ava1", message: "Hell!!!", in: true },
        { alt: "ava1", message: "Hell", in: true },
    ],
    newMesageText: ''
}

const dialogsReducer = (state = initialState1, action) => {
    let stateCopy;

    switch (action.type){
        case UPDATE_NEW_MESSAGE_TEXT: {
            stateCopy = {...state};
            stateCopy.newMesageText = action.newMessagetext;
            return stateCopy;
        }
        case SEND_MESSAGE: { 
            let text = state.newMesageText;
            stateCopy = {
                ...state,
                messages: [...state.messages, {alt: "ava1", message: text, in: false}],
                //Заменит массив messages, на новый
                newMesageText: '' 
            };
            return stateCopy;
        }
        default: return state;
    }    
}

// Action Creator объект аргумент для dispatch 
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessagetext: text })

export default dialogsReducer;