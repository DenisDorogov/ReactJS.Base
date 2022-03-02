import React from 'react';
import style from "./NewPost.module.css";

const Post = () => {
    return (
        <div>
            <form className={style.post}>
            <input className={style.input_post}></input>
            <button className={style.send_post}>Send</button>
            </form>
        </div>
        
    );
}

export default Post;