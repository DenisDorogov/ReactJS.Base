import UserPhoto from '../assets/img/User.jpg';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


const initialState = {
    
    posts: [
        {id: 1, name: 'Denis', text: 'test1', likeCount: 20},
        {id: 2, name: 'Denis1', text: 'test2', likeCount: 21},
        {id: 3, name: 'Denis2', text: 'test3', likeCount: 200},
      ],
    newPostText: '',
    profile: {
        userId: 1,
        fullName: '',
        photos: {small: UserPhoto, large: UserPhoto},
        aboutMe: 'aboutMe',
        contacts:{vk: 'https://vk.com', github: 'http://github.com'},
        lookingForAJob: false,
        lookingForAJobDescription: ''
    }
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.posts = [...stateCopy.posts];
    switch (action.type){
        case ADD_POST:  {
            let newPost = {
                id: stateCopy.posts.length,
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
        case SET_USER_PROFILE: {
            stateCopy.profile = action.profile
            return stateCopy;
        }
        default: return state;
        }
        
}

// Action Creator объект аргумент для dispatch 
export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT, 
    newText: text 
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, 
    profile: profile
})

export default profileReducer;