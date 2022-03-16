import React from 'react';
import style from "./NewPost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const Post = (props) => {
    const postNew = React.createRef();

    let onPostChange = (event) => {
        let text = event.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    let addPost = (event) => {
        event.preventDefault();
        props.dispatch(addPostActionCreator());
    }

    

    return (
        <div>
            <form className={style.post}>
            <textarea 
                className={style.input_post} 
                ref={ postNew }
                onChange={ onPostChange }
                value={props.newPostText}
                placeholder='Enter your post'
            />
            <button 
                className={style.send_post} 
                onClick={addPost} 
                >Send
            </button>
            </form>
        </div>
        
    );
}

export default Post;