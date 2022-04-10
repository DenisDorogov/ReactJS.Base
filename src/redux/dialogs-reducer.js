import UserPhoto from '../assets/img/User.jpg';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState1 = {
    img: UserPhoto,
    dialogs: [
        { id: 1, path: "/id1", name: "Name1" },
        { id: 2, path: "/id2", name: "Name2" },
        { id: 3,path: "/id3", name: "Name3" },
        { id: 4,path: "/id4", name: "Name4" },
        { id: 5,path: "/id5", name: "Name5" },
    ],
    messages: [
        { id: 1, alt: "ava1", message: "Hello!!!", in: true },
        { id: 2, alt: "ava1", message: "Hello", in: false },
        { id: 3, alt: "ava1", message: "Hell", in: true },
        { id: 4, alt: "ava1", message: "Hell!!!", in: true },
        { id: 5, alt: "ava1", message: "Hell", in: true },
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
                messages: [...state.messages, { id: state.messages.length, alt: "ava1", message: text, in: false}],
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