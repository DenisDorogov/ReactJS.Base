const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
    _state: {
        profile: {
            img: "https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg",
            posts: [
                {name: 'Denis', text: 'test1', likeCount: 20},
                {name: 'Denis1', text: 'test2', likeCount: 21},
                {name: 'Denis2', text: 'test3', likeCount: 200},
              ],
            newPostText: 'New post text'
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
              ]
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
        if (action.type === ADD_POST) {
            let newPost = {
                name: 'Denis',
                text: this._state.profile.newPostText,
                likeCount: 0
            };
            this._state.profile.posts.push(newPost);
            this._state.profile.newPostText = ''; //Обнулил поле
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profile.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

    
export default store;
window.store = store;

