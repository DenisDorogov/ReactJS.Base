import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const GREETING = 'Homework 2 from Denis Dorogov';




ReactDOM.render(
  <React.StrictMode>
    
    <App greeting={GREETING}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
