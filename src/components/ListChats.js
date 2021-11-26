import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ListChats() {
  return (
    <Box
      sx={{
        width: '20%',
        minHeight: 400,
        backgroundColor: 'primary.light',
        display: 'flex',
        flexDirection: 'column',
        
      }}
    >
        <Button 
            variant="contained"
            href="#text-buttons"
            width='20px'
            
        >Mick</Button>
        <Button 
        variant="contained"
            href="#text-buttons"
            width='20px'
        >Jack</Button>
        <Button 
        variant="contained"
            href="#text-buttons"
            width='20px'
        >Ben</Button>
    </Box>
  );
}