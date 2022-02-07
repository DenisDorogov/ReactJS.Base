import * as React from 'react';
import '../styles/app.css';
import Header from './Header';
import Routes from './Routes';
import { useState, useEffect } from 'react';






function App() {  
  
  const adminMessage = {
    author: 'Admin',
    text: 'Your message is accepted!'
  };

  const initialChats = {
    'id0': { name: 'Admin', messages: [{ author: 'Admin', text: 'Chat not choosed'}]},
    'id1': { name: 'Mick', messages: [{ author: 'Mick', text: 'Hello User'}]},
    'id2': { name: 'Jack', messages: [{ author: 'Jack', text: 'Hello User'}]},
    'id3': { name: 'Ben', messages: [{ author: 'Ben', text: 'Hello User'}]}
  }

  const [messageList, setMessageList] = useState(initialChats);
  const [inputMessage, setInputMessage] = useState('');
  const [chatID, setChatID] = useState('id0');

  // useEffect(() => {
  //   document.title = 'Chhhat';
  //  } , []);

   useEffect(() => {
     console.log('UseEffect!!!'); 
    setTimeout(() => {
      if ( messageList[chatID].messages.length !== 0 && messageList[chatID].messages[messageList[chatID].messages.length - 1].author !== messageList[chatID].name) {
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
