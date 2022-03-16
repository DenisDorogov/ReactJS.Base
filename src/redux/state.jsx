const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {
        profile: {
            img: "https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg",
            posts: [
                {name: 'Denis', text: 'test1', likeCount: 20},
                {name: 'Denis1', text: 'test2', likeCount: 21},
                {name: 'Denis2', text: 'test3', likeCount: 200},
              ],
            newPostText: ''
        },
        dialogs: {
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
    },

    _callSubscriber() {
        console.log('The state changed.');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },
    
    dispatch(action) {
        switch (action.type){
            case ADD_POST: 
                let newPost = {
                    name: 'Denis',
                    text: this._state.profile.newPostText,
                    likeCount: 0
                };
                this._state.profile.posts.push(newPost);
                this._state.profile.newPostText = ''; //Обнулил поле
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profile.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_MESSAGE_TEXT: 
                this._state.dialogs.newMesageText = action.newMessagetext;
                this._callSubscriber(this._state);
                break;
            case SEND_MESSAGE:  
                let text = this._state.dialogs.newMesageText;
                this._state.dialogs.newMesageText = '';
                this._state.dialogs.messages.push( {alt: "ava1", message: text, in: false});
                this._callSubscriber(this._state);
                break;
            default: alert('Action type not valid');
        }
    }
}

// Action Creator объект аргумент для dispatch 
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessagetext: text })

    
export default store;
// window.store = store;

