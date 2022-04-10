import UserPhoto from '../assets/img/User.jpg';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const initialState = {
    img: UserPhoto,
    posts: [
        {name: 'Denis', text: 'test1', likeCount: 20},
        {name: 'Denis1', text: 'test2', likeCount: 21},
        {name: 'Denis2', text: 'test3', likeCount: 200},
      ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.posts = [...stateCopy.posts];
    switch (action.type){
        case ADD_POST:  {
            let newPost = {
                name: 'Denis',
                text: stateCopy.newPostText,
                likeCount: 0
            };
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = ''; //Обнулил поле
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default: return state;
        }
        
}

// Action Creator объект аргумент для dispatch 
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;