import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Message from './Message';
import InputMessage from './InputMessage';

export default function MessageBox(props) {
  const { chatID, messageList, setMessageList, inputMessage, setInputMessage} = props;

if (chatID === 'id0') {
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
        />
    </Box>
 ) 
}


  
}