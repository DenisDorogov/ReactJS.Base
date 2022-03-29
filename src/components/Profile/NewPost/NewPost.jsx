import React from 'react';
import style from "./NewPost.module.css";


const NewPost = (props) => {
    const postNew = React.createRef();

    return (
        <div>
            <form className={style.post}>
            <textarea 
                className={style.input_post} 
                ref={ postNew }
                onChange={ props.onPostChange }
                value={props.profilePage.newPostText}
                placeholder='Enter your post'
            />
            <button 
                className={style.send_post} 
                onClick={props.addPost} 
                >Send
            </button>
            </form>
        </div>
        
    );
}

export default NewPost;