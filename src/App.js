import './App.css';
import Message from './Message';
import { useState } from 'react';


function App({greeting}) {  
const [messageList, setMessageList] = useState([]);
const [inputMessage, setInputMessage] = useState('');


const addInputMessage = (event) => {
  event.preventDefault();
  console.log(inputMessage);
  setMessageList([...messageList, inputMessage]);
  setInputMessage({
    author: '',
    text: '',});
}

const handleChange = (event) => {
  setInputMessage({
    author: 'User',
    text: event.target.value,
  });
  
}
  return ( 
    <div className="App" > 
      <header className='App-header'>
        <h1 className='heading'>{greeting}</h1> 
      </header>
      <form onSubmit={addInputMessage}> 
        <input type='text' className='input-field' name='input-text' value={inputMessage.text} onChange={handleChange} />
        <input className='input-button' type = 'submit' value=' Send ' />
      </form>
      <Message list={messageList}/>
    </div> 
  ); 
}

export default App;
