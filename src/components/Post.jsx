import React from 'react';
import style from "./Post.module.css";

const Post = () => {
    return(
        <div className={style.post}>
            <p className={style.name}>Name</p>
            <p className={style.text}>Post</p>
        </div>
         
    );
}

export default Post;