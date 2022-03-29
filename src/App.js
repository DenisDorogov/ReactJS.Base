import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
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
                      element={<DialogsContainer store={props.store} />} 
                    />
                    <Route 
                      path="/profile" 
                      element={<Profile store={props.store}/>} 
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
