import * as React from 'react';
import Box from '@mui/material/Box';
import ListChats from './ListChats';
import MessageBox from './MessageBox';
import { useParams } from 'react-router';

const Chats = (props) => {
  // debugger
  let {chatID} = useParams();
  chatID !== undefined ? props.setChatID(chatID) : chatID = props.chatID;

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.ligth',
        display: 'flex'
      }}
    >
        <ListChats 
          sx={{backgroundColor: 'none'}}
          chatID={chatID} 
          chats={props.chats}/>
        <MessageBox 
          setChats = {props.setChats}
          inputMessage  = {props.inputMessage}
          setInputMessage = {props.setInputMessage}
          chats = {props.chats}
          chatID={chatID}
          currentUser={props.currentUser}
        />
    </Box>
  );
}

export default Chats;