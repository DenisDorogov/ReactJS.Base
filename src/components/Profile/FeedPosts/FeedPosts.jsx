import React from 'react';
import Post from "./../Post/Post";
import style from "./feedPosts.module.css";

const FeedPosts = (props) => {
    let postsList = props.posts.map( el => <Post id={el.id} name={el.name} text={el.text} likeCount={el.likeCount} />)

    return(
        <div className={style.feed}>
            <div>
                {postsList}
            </div>
        </div>
    );
}

export default FeedPosts;