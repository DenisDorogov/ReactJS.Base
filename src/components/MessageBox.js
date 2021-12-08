import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Message from './Message';
import InputMessage from './InputMessage';

export default function MessageBox({adminMessage, chatID, initialChats}) {
  const [messageList, setMessageList] = useState(initialChats);
  const [inputMessage, setInputMessage] = useState('');
  
  // console.log('MessageBox initialChats:', {adminMessage, chatID, initialChats});
  // console.log('MessageBox messageList: ', messageList);

  React.useEffect(() => {
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

  return (
    <Box
      sx={{
        width: '80%',
        backgroundColor: 'primary.ligth'
      }}
    >
      <h2>MessageBox</h2>
        <InputMessage 
          messageList={messageList} 
          setMessageList={setMessageList} 
          inputMessage={inputMessage} 
          setInputMessage={setInputMessage}
          chatID={chatID}
          adminMessage={adminMessage} 
        />
        <Message 
          list={messageList[chatID].messages}
          chatID={chatID}
        />
    </Box>
 ) 
}