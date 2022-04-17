import React from 'react';
import FeedPosts from './FeedPosts/FeedPosts';
import NewPostContainer from "./NewPost/NewPostContainer";
import User from "./User/User";
import style from "./Profile.module.css";

const Profile = (props) => {
    console.log('Profile props: ', props);
    return (
        <div className={style.profile}>
            <User {...props}  />
            <NewPostContainer />
            {/* <FeedPosts {...props} /> */}
        </div>
    );
}

export default Profile;