import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <div className={style.app_wrapper}>
      < Header/>
      < Sidebar/>
      <div className={style.content}>
                <Routes>

                    <Route exact 
                      path="/dialogs" 
                      element={
                        <Dialogs dialogs={props.state.dialogs} />} 
                    />

                    <Route 
                      path="/profile" 
                      element={
                        <Profile 
                          profile={props.state.profile} 
                          dispatch={props.dispatch}/>} 
                    />

                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />

                </Routes>
            </div>
    </div>    
  );
}

export default App;
