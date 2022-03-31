import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import NewPost from './NewPost';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (event) => {
            let text = event.target.value;
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: (event) => {
            event.preventDefault();
            dispatch(addPostActionCreator());
        }
    }
}


const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;