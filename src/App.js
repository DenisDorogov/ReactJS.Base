import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <div className={style.app_wrapper}>
      < Header/>
      < Sidebar/>
      <div className={style.content}>
                {/* <Routes> //Возврат к 5 версии react-router-dom*/} 
                    {/* <Route exact 
                      path="/dialogs" 
                      element={<DialogsContainer />} 
                    />
                    <Route 
                      path="/profile" 
                      element={<ProfileContainer />} 
                    />
                    <Route path="/users" element={<UsersContainer />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} /> */}

                {/* </Routes> */}

                <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>

                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer /> }/>

                    <Route path='/users'
                           render={ () => <UsersContainer /> }/>
            </div>
    </div>    
  );
}

export default App;
