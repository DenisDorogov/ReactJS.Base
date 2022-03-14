import React from 'react';
import style from "./NewPost.module.css";
import state from './../../../redux/state';

const Post = () => {
    const postNew = React.createRef();

    const addPost = () => {
        let text = postNew.current.value
        state.profile.posts.push({name: 'Denis', text: text, likeCount: 0},);
        alert(text);
    }

    return (
        <div>
            <form className={style.post}>
            <textarea className={style.input_post} ref={ postNew } ></textarea>
            <button className={style.send_post} onClick={addPost} >Send</button>
            </form>
        </div>
        
    );
}

export default Post;