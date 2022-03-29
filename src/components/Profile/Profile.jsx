import React from 'react';
import FeedPosts from './FeedPosts/FeedPosts';
import NewPostContainer from "./NewPost/NewPostContainer";
import User from "./User/User";
import style from "./Profile.module.css";

const Profile = (props) => {
    let state = props.store.getState().profilePage;

    return (
        <div className={style.profile}>
            <User img={state.img}/>
            <NewPostContainer store = {props.store}/>
            <FeedPosts posts={state.posts} img={state.img}/>
        </div>
    );
}

export default Profile;