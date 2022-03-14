import React from 'react';
import style from "./NewPost.module.css";
import state from './../../../redux/state';

const Post = (props) => {
    const postNew = React.createRef();

    const addPost = () => {
        let text = postNew.current.value
        props.addPost({name: 'Denis', text: text, likeCount: 0})
        alert('Постов стало ' + state.profile.posts.length);
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