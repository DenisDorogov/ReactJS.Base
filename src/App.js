import React from 'react';
import './App.css';
// import Header from './Header.js'
import Header from './Header'
import MainContent from './MainContent';
import Sidebar from './Sidebar';

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
