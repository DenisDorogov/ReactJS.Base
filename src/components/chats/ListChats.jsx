import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ListChats(props) {
  return (
    <Box
      sx={{
        width: '20%',
        minHeight: 400,
        backgroundColor: 'none',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px'
      }}
    >
      {props.chats.map((el, index) => {
        return (
          <Button 
            variant="contained"
            href={`/chats/${index}`}
            width='20px'
        >
        {el.chatName}
        </Button>
        )
      })}
        
    </Box>
  );
}