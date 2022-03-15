import React from 'react';
import style from "./Post.module.css";


const Post = (props) => {
    return(
        <div className={style.post}>
            <p className={style.name}>{props.name}</p>
            <p className={style.text}>{props.text}</p>
            <button onClick={() => alert('Likes = ' + props.likeCount)} className={style.likes}>Likes {props.likeCount}</button>
        </div>
         
    );
}

export default Post;