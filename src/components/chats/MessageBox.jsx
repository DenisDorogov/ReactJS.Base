import * as React from 'react';
import Box from '@mui/material/Box';
import Message from './Message';
import InputMessage from './InputMessage';

export default function MessageBox(props) {
  const {
    chats,
    setChats,
    chatID,
    users,
    currentUser, 
    inputMessage, 
    setInputMessage} = props;

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
      <h2>{chats[chatID].chatName}</h2>

        <Message 
          chats={chats}
          chatID={chatID}
        />
        <InputMessage 
          chats={chats} 
          setChats={setChats} 
          inputMessage={inputMessage} 
          setInputMessage={setInputMessage}
          chatID={chatID}
          users={users}
          currentUser={currentUser}
        />
    </Box>
 ) 
}


  
}