import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const GREETING = 'Homework 1 from Denis Dorogov';
const inputMessage = 'Some message';

ReactDOM.render(
  <React.StrictMode>
    <App text={inputMessage} greeting={GREETING} user={'Den'}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
