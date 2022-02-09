import React from 'react';
import FeedPosts from './FeedPosts';
import Post from "./Post";
import User from "./User";
import style from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={style.profile}>
            <User/>
            <Post/>
            <FeedPosts/>
        </div>
    );
}

export default Profile;