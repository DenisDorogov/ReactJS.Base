import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let img = "https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg"

let dialogs = [
  { path: "/id1", name: "Name1" },
  { path: "/id2", name: "Name2" },
  { path: "/id3", name: "Name3" },
  { path: "/id4", name: "Name4" },
  { path: "/id5", name: "Name5" },
];

let messages = [
  { src: img, alt: "ava1", message: "Hello!!!", in: true },
  { src: img, alt: "ava1", message: "Hello", in: false },
  { src: img, alt: "ava1", message: "Hell", in: true },
  { src: img, alt: "ava1", message: "Hell!!!", in: true },
  { src: img, alt: "ava1", message: "Hell", in: true },
];

const posts = [
  {name: 'Denis', text: 'test1', likeCount: 20},
  {name: 'Denis1', text: 'test2', likeCount: 21},
  {name: 'Denis2', text: 'test3', likeCount: 200},
];


ReactDOM.render(
  <React.StrictMode>
    <App img={img} dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
