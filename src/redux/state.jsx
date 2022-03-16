import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';


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
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._callSubscriber(this._state);
    }
}
  
export default store;
// window.store = store;

