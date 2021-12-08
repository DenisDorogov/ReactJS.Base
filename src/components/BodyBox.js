import * as React from 'react';
import Box from '@mui/material/Box';
import ListChats from './ListChats';
import MessageBox from './MessageBox';

export default function BodyBox({adminMessage, chatID, initialChats}) {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.ligth',
        display: 'flex'
      }}
    >
        <ListChats chatID={chatID}/>
        <MessageBox adminMessage={adminMessage} chatID={chatID} initialChats={initialChats}/>
    </Box>
  );
}