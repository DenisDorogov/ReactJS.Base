import React from 'react';
import FeedPosts from './FeedPosts/FeedPosts';
import NewPost from "./NewPost/NewPost";
import User from "./User/User";
import style from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <User img={props.img}/>
            <NewPost/>   
            <FeedPosts posts={props.posts} img={props.img}/>
        </div>
    );
}

export default Profile;