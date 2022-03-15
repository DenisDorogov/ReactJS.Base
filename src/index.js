import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';


let rendererWindow = (state) => { //Для перерисовки страницы. Временно

ReactDOM.render(
  <React.StrictMode>
    <App state={state} dispatch={store.dispatch.bind(store)} />
    {/* Bind для преопределения контекста. Функция будет вызываться ниже по дереву */}
  </React.StrictMode>,
  document.getElementById('root')
);

}

rendererWindow(store.getState());
store.subscribe(rendererWindow);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
