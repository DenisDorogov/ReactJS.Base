import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Message from './Message';
import InputMessage from './InputMessage';

export default function MessageBox({adminMessage, chatID, initialChats}) {
  const [messageList, setMessageList] = useState(initialChats);
  const [inputMessage, setInputMessage] = useState('');
  
  console.log('MessageBox initialChats:', {adminMessage, chatID, initialChats});
  // console.log('MessageBox messageList: ', messageList);


  useEffect(() => {
    console.log('useEffect messageList',messageList);
    setTimeout(() => {
      console.log('if: ', messageList[chatID].messages[messageList[chatID].messages.length - 1].author)
      if ( messageList[chatID].messages.length !== 0 && messageList[chatID].messages[messageList[chatID].messages.length - 1].author !== messageList[chatID].name) {
        let temp = messageList;
        temp[chatID].messages = [...temp[chatID].messages, {author: messageList[chatID].name, text: 'My answer will be later'}];
        setMessageList(temp);
        // addMessage(messageList, {author: messageList[chatID].name, text: 'My answer will be later'})
        setInputMessage({
          author: '',
          text: '',});
        } 
    }, 1000)
}, [messageList])

if (chatID == 'id0') {
  return ( <h2>Choose the chat</h2>);

} else {

  return (
    <Box
      sx={{
        width: '80%',
        backgroundColor: 'primary.ligth'
      }}
    >
      <h2>{messageList[chatID].name}</h2>

        <Message 
          list={messageList[chatID].messages}
          chatID={chatID}
        />
        <InputMessage 
          messageList={messageList} 
          setMessageList={setMessageList} 
          inputMessage={inputMessage} 
          setInputMessage={setInputMessage}
          chatID={chatID}
          adminMessage={adminMessage} 
        />
    </Box>
 ) 
}


  
}