import * as React from 'react';
import Box from '@mui/material/Box';
import ListChats from './ListChats';
import MessageBox from './MessageBox';

export default function BodyBox() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.ligth',
        display: 'flex'
      }}
    >
        <ListChats/>
        <MessageBox/>
    </Box>
  );
}