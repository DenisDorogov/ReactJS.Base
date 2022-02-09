import React from 'react';
import './App.css';
// import Header from './Header.js'
import Header from './components/Header'
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="app-wrapper">
      < Header/>
      < Sidebar/>
      < MainContent/>
    </div>
  );
}

export default App;
