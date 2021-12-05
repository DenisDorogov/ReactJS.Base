import * as React from 'react';
import '../styles/app.css';
import Message from './Message';
import Header from './Header';
import BodyBox from './BodyBox';
import ListChats from './ListChats';
import MessageBox from './MessageBox';
import InputMessage from './InputMessage';
import { useEffect, useState } from 'react';





function App({greeting}) {  
/* const [messageList, setMessageList] = useState([]);
const [inputMessage, setInputMessage] = useState('');*/
const adminMessage = {
  author: 'Admin',
  text: 'Your message is accepted!'
};


// const sendMessage = (event) => {
//   event.preventDefault();
//   setMessageList([...messageList, inputMessage]);
//   setInputMessage({
//     author: '',
//     text: '',});
// }

// const handleChange = (event) => {
//   setInputMessage({
//     author: 'User',
//     text: event.target.value,
//   }); 
// }

// useEffect(() => {
//     setTimeout(() => {
//       console.log('setTimeout: ', messageList[messageList.length - 1]);
//       if ( messageList.length !== 0 && messageList[messageList.length - 1].author !== 'Admin') {
//         setMessageList([...messageList, adminMessage]);
//         setInputMessage({
//           author: '',
//           text: '',});
//         } 
//     }, 1000)
// }, [messageList])

  return ( 
    <div className="App" > 
      <Header/>
        <BodyBox>
          <ListChats/>
          <MessageBox/>
        </BodyBox>
    </div> 
  ); 
}

export default App;
