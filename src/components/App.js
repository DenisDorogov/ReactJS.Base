import * as React from 'react';
import '../styles/app.css';
import Header from './header/Header';
import Routes from './Routes';
import { useState, useEffect } from 'react';
import {initialChats, adminMessage, initialFriends} from '../redux/initialState';


function App() {  
  const [currentUser, setCurrentUser] = useState(initialChats.user);
  const [chats, setChats] = useState(initialChats.chats);
  const [inputMessage, setInputMessage] = useState('');
  const [chatID, setChatID] = useState(1);
  const [users, setUsers] = useState(initialFriends);

  // console.log('App props: ', chats);
//    useEffect(() => {
//      console.log('UseEffect!!!'); 
//     setTimeout(() => {
//       if ( messageList.list.userId.messages.length !== 0 && messageList[chatID].messages[messageList[chatID].messages.length - 1].author !== messageList[chatID].name) {
//         console.log('')
//         let temp = messageList;
//         temp[chatID].messages = [...temp[chatID].messages, {author: messageList[chatID].name, text: 'My answer will be later'}];
//         setMessageList(temp);
//         setInputMessage({
//           author: '',
//           text: '',});
//         } 
//     }, 1000)
// }, [messageList])

  return ( 
    <div className="App" > 
        <Header/>
        <Routes 
          setChats = {setChats}
          inputMessage  = {inputMessage}
          setInputMessage  = {setInputMessage}
          adminMessage  = {adminMessage}
          currentUser  = {currentUser}
          chats = {chats}
          setChatID = {setChatID}
          chatID  = {chatID}
          users = {users}
        />
        
    </div> 
  ); 
}

export default App;
