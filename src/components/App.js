import * as React from 'react';
import '../styles/app.css';
import Header from './Header';
import Routes from './Routes';
import BodyBox from './BodyBox';
import ListChats from './ListChats';
import MessageBox from './MessageBox';
import { useState, useEffect } from 'react';






function App() {  
  
  console.log('App loaded');
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


  // console.log('App adminMessage:', adminMessage);
  // console.log('App chatID:', chatID);
  // console.log('App initialChats:', initialChats);

  useEffect(() => {
    document.title = 'Chhhat';
   } , []);

  //  useEffect(() => {
  //       console.log('App useEffect',messageList);
  //       setTimeout(() => {
  //         console.log('if: ', messageList[chatID].messages[messageList[chatID].messages.length - 1].author)
  //         if ( messageList[chatID].messages.length !== 0 && messageList[chatID].messages[messageList[chatID].messages.length - 1].author !== messageList[chatID].name) {
  //           let temp = messageList;
  //           temp[chatID].messages = [...temp[chatID].messages, {author: messageList[chatID].name, text: 'My answer will be later'}];
  //           setMessageList(temp);
  //           // addMessage(messageList, {author: messageList[chatID].name, text: 'My answer will be later'})
  //           setInputMessage({
  //             author: '',
  //             text: '',});
  //           } 
  //       }, 1000)
  //   }, [messageList])

   

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
