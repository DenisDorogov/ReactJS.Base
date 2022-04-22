import * as React from 'react';
import '../styles/app.css';
import Header from './header/Header';
import Routes from './Routes';
import { useState, useEffect } from 'react';
import {initialChats, adminMessage} from '../redux/initialState';


function App() {  
  const [messageList, setMessageList] = useState(initialChats);
  const [inputMessage, setInputMessage] = useState('');
  const [chatID, setChatID] = useState('id0');
  console.log('messageList: ', messageList);
   useEffect(() => {
     console.log('UseEffect!!!'); 
    setTimeout(() => {
      if ( messageList[chatID].messages.length !== 0 && messageList[chatID].messages[messageList[chatID].messages.length - 1].author !== messageList[chatID].name) {
        console.log('')
        let temp = messageList;
        temp[chatID].messages = [...temp[chatID].messages, {author: messageList[chatID].name, text: 'My answer will be later'}];
        setMessageList(temp);
        setInputMessage({
          author: '',
          text: '',});
        } 
    }, 1000)
}, [messageList])

  return ( 
    <div className="App" > 
        <Header/>
        <Routes 
          setMessageList = {setMessageList}
          inputMessage  = {inputMessage}
          setInputMessage  = {setInputMessage}
          adminMessage  = {adminMessage}
          messageList = {messageList}
          setChatID = {setChatID}
        />
        
    </div> 
  ); 
}

export default App;
