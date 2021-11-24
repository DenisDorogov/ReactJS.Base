import '../styles/app.css';
import Message from './Message';
import Header from './Header';
import { useEffect, useState } from 'react';


function App({greeting}) {  
const [messageList, setMessageList] = useState([]);
const [inputMessage, setInputMessage] = useState('');
const adminMessage = {
  author: 'Admin',
  text: 'Your message is accepted!'
};


const sendMessage = (event) => {
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

useEffect(() => {
    setTimeout(() => {
      console.log('setTimeout: ', messageList[messageList.length - 1]);
      if ( messageList.length !== 0 && messageList[messageList.length - 1].author !== 'Admin') {
        setMessageList([...messageList, adminMessage]);
        setInputMessage({
          author: '',
          text: '',});
        } 
    }, 1000)
}, [messageList])

  return ( 
    <div className="App" > 
      {/* <header className='App-header'>
        <h1 className='heading'>{greeting}</h1> 
      </header> */}
      <Header/>
      <form onSubmit={sendMessage}> 
        <input type='text' className='input-field' name='input-text' value={inputMessage.text} onChange={handleChange} />
        <input className='input-button' type = 'submit' value=' Send ' />
      </form>
      <Message list={messageList}/>
    </div> 
  ); 
}

export default App;
