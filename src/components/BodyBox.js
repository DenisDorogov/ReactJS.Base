import * as React from 'react';
import Box from '@mui/material/Box';
import ListChats from './ListChats';
import MessageBox from './MessageBox';
import { useParams } from 'react-router';

export default function BodyBox(props) {
  let {chatID} = useParams();
  props.setChatID(chatID);
  if (chatID === undefined) chatID = 'id0';

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.ligth',
        display: 'flex'
      }}
    >
        <ListChats chatID={chatID}/>
        <MessageBox 
          setMessageList = {props.setMessageList}
          inputMessage  = {props.inputMessage}
          setInputMessage  = {props.setInputMessage}
          messageList = {props.messageList}
          chatID={chatID}
        />
    </Box>
  );
}