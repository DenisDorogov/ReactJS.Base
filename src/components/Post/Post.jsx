import React from 'react';
import style from "./Post.module.css";

const Post = (props) => {
    return(
        <div className={style.post}>
            <p className={style.name}>{props.name}</p>
            <p className={style.text}>{props.text}</p>
        </div>
         
    );
}

export default Post;