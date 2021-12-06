import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function InputMessage(props) {
    const adminMessage = {
        author: 'Admin',
        text: 'Your message is accepted!'
      };
    

    const handleChange = (event) => {
        props.setInputMessage({
          author: 'User',
          text: event.target.value,
        }); 
    }

    const sendMessage = (event) => {
        event.preventDefault();
        
        props.setMessageList([...props.messageList, props.inputMessage]);
        props.setInputMessage({
          author: '',
          text: '',
        }); 
      }

      useEffect(() => {
        setTimeout(() => {
          if ( props.messageList.length !== 0 && props.messageList[props.messageList.length - 1].author !== 'Admin') {
            props.setMessageList([...props.messageList, adminMessage]);
            props.setInputMessage({
              author: '',
              text: '',});
            } 
        }, 1000)
    }, [props.messageList])

    return (
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '80%' },
                }}
                noValidate
                autoComplete="off"
                display="flex"
              >
                <TextField 
                  fullWidth 
                  autoFocus 
                  id="outlined-basic" 
                  label="Outlined" 
                  variant="outlined"
                  value={props.inputMessage.text}
                  onChange={handleChange}
                  />
                  <Button 
                      href="#text-buttons"
                      width='20px'
                      onClick={sendMessage}
                  >Send</Button>
              </Box>
            );
}