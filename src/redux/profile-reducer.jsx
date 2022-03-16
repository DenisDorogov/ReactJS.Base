const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    img: "https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg",
    posts: [
        {name: 'Denis', text: 'test1', likeCount: 20},
        {name: 'Denis1', text: 'test2', likeCount: 21},
        {name: 'Denis2', text: 'test3', likeCount: 200},
      ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: 
            let newPost = {
                name: 'Denis',
                text: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = ''; //Обнулил поле
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
        }
        
}

// Action Creator объект аргумент для dispatch 
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;