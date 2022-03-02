import React from 'react';
import FeedPosts from './FeedPosts';
import NewPost from "./NewPost";
import User from "./User";
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