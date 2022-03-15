import React from 'react';
import FeedPosts from './FeedPosts/FeedPosts';
import NewPost from "./NewPost/NewPost";
import User from "./User/User";
import style from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <User img={props.profile.img}/>
            <NewPost 
                newPostText={props.profile.newPostText} 
                dispatch={props.dispatch}/>   
            <FeedPosts posts={props.profile.posts} img={props.profile.img}/>
        </div>
    );
}

export default Profile;