import React from 'react';
import FeedPosts from './FeedPosts/FeedPosts';
import NewPostContainer from "./NewPost/NewPostContainer";
import User from "./User/User";
import style from "./Profile.module.css";

const Profile = (props) => {

    return (
        <div className={style.profile}>
            <User img={props.state.img}  />
            <NewPostContainer />
            <FeedPosts posts={props.state.posts} img={props.state.img} />
        </div>
    );
}

export default Profile;