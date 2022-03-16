const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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