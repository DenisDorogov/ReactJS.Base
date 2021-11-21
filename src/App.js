import './App.css';
import Message from './Message';
import { useState } from 'react';

const DEFAULT_LIST = [
  {
    id:1,
    author: 'John',
    text: 'first message'
  },
  {
    id:2,
    author: 'Nick',
    text: 'second message'
  },
  {
    id:3,
    author: 'Sam',
    text: 'third message'
  }
];

function App() { 
  //Долго боролся с useState. Почему-то messageList был не массивом, а объектом, включающим параметры
  // переданные в App(), (пришлось их убрать). 
const [messageList, setMessageList] = useState(DEFAULT_LIST);
const [inputMessage, setInputMessage] = useState('');


const addInputMessage = (event) => {
  console.log('messageList: ', messageList);
  setMessageList([...messageList, inputMessage]);
}

const handleChange = (event) => {
  setInputMessage({
    author: 'User',
    text: event.target.value,
  });
}

//Не понял как передать из введённую строку по onSubmit
//по onChange сохраняется посимвольно.... да и вообче не сохраняется.
  return ( 
    <div className="App" > 
      <header className='App-header'>
        <h1 className='heading'>{'Homework 1 from Denis Dorogov'}</h1> 
      </header>
      <form onSubmit={addInputMessage}> 
        <input type='text' className='input-field' name='input-text' onChange={handleChange} />
        <input className='input-button' type = 'submit' value=' Send ' />
      </form>
      <Message list={messageList}/>
    </div> 
  ); 
}

export default App;
