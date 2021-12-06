import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Message from './Message';
import InputMessage from './InputMessage';

export default function MessageBox() {
  const [messageList, setMessageList] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  
  return (
    <Box
      sx={{
        width: '80%',
        backgroundColor: 'primary.ligth'
      }}
    >
      <h2>MessageBox</h2>
        <InputMessage messageList={messageList} setMessageList={setMessageList} inputMessage={inputMessage} setInputMessage={setInputMessage} />
        <Message list={messageList}/>
    </Box>
  )
}