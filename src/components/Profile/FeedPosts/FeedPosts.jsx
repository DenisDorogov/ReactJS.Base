import React from 'react';
import Post from "./../Post/Post";
import style from "./feedPosts.module.css";
import Preloader from '../../common/Preloader/Preloader';

const FeedPosts = (props) => {
    console.log('FeedPosts props: ', props);
    if (!props.posts) return (<Preloader />);
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