import React from 'react';
import style from "./NewPost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const Post = (props) => {
    const postNew = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = postNew.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);

    }

    return (
        <div>
            <form className={style.post}>
            <textarea 
                className={style.input_post} 
                ref={ postNew }
                onChange={ onPostChange }
                value={props.newPostText}
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