import React from 'react';
import Post from "../Post/Post";
import style from "./FeedPosts.module.css";

const FeedPosts = () => {
    
    const posts = [
        {name: 'Denis', text: 'test1', likeCount: 20},
        {name: 'Denis1', text: 'test2', likeCount: 21},
        {name: 'Denis2', text: 'test3', likeCount: 200},
    ];

    let postsList = posts.map( el => <Post name={el.name} text={el.text} likeCount={el.likeCount} />)

    return(
        <div className={style.feed}>
            <div>
                {postsList}
            </div>
        </div>
    );
}

export default FeedPosts;