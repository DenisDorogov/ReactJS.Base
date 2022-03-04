import React from 'react';
import Post from "../Post/Post";
import style from "./FeedPosts.module.css";


const FeedPosts = () => {
    return(
        <div className={style.feed}>
            <div>
                <Post name={'Denis'} text="text 1"/> 
                <Post name={'Denis'} text="text 3" />
                <Post name={'Denis'} text="text 2" />
            </div>
        </div>
    );
}

export default FeedPosts;