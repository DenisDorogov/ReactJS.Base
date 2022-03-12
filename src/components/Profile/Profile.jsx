import React from 'react';
import FeedPosts from './FeedPosts/FeedPosts';
import NewPost from "./NewPost/NewPost";
import User from "./User/User";
import style from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={style.profile}>
            <User/>
            <NewPost/>   
            <FeedPosts/>
        </div>
    );
}

export default Profile;