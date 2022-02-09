import React from 'react';
import FeedPosts from './FeedPosts';
import Post from "./Post";
import User from "./User";

const MainContent = () => {
    return (
        <div className='main-content'>
            <User/>
            <Post/>
            <FeedPosts/>
        </div>
    );
}

export default MainContent;