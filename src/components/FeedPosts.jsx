import React from 'react';
import Post from "./Post";
import style from "./FeedPosts.module.css";


const FeedPosts = () => {
    return(
        <div className={style.feed}>
            <div>
                <Post/> 
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default FeedPosts;