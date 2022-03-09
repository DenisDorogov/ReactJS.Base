import React from 'react';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import style from "./Content.module.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Content = () => {
    return (
        // <BrowserRouter>
            <div className={style.content}>
                <Routes>
                    <Route path='/dialogs' component={Dialogs} />
                    <Route path='/profile' component={Profile} />
                </Routes>
            </div>
        // </BrowserRouter>

    );
}

export default Content;