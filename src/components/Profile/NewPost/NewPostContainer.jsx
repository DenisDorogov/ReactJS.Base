import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import NewPost from './NewPost';


const NewPostContainer = (props) => {
    
    let state = props.store.getState().profilePage;

    let onPostChange = (event) => {
        let text = event.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    let addPost = (event) => {
        event.preventDefault();
        props.store.dispatch(addPostActionCreator());
    }

    return (
        <NewPost 
            profilePage={state}
            onPostChange={onPostChange}
            addPost={addPost}
        />

    );
}

export default NewPostContainer;