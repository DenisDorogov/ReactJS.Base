import React from 'react';
import style from "./FeedPosts.module.css";

const FeedPosts = () => {
    return(
        <div className={style.feed}>
            <ul>
                <li> previous post </li>
                <li> previous post </li>
                <li> previous post </li>
                <li> previous post </li>
            </ul>
        </div>
    );
}

export default FeedPosts;