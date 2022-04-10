import React from 'react';
import style from "./post.module.css";


const Post = (props) => {
    return(
        <div className={style.post} key={props.id}>
            <p className={style.name}>{props.name}</p>
            <p className={style.text}>{props.text}</p>
            <button onClick={() => alert('Likes = ' + props.likeCount)} className={style.likes}>Likes {props.likeCount}</button>
        </div>
         
    );
}

export default Post;