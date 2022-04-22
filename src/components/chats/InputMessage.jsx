import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function InputMessage({inputMessage, setInputMessage, messageList, setMessageList, chatID}) {
    const initialMessage = {author: '', text: ''}
    

    const handleChange = (event) => {
        setInputMessage({
          author: 'User',
          text: event.target.value,
        }); 
    }

    const addMessage = (messagesObj, message) => {
        let tempObj = messagesObj;
        tempObj[chatID].messages.push(message);
        setMessageList(tempObj);
    }

    const sendMessage = () => {
        addMessage(messageList, inputMessage);
        setInputMessage(initialMessage);
        }

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
                  value={inputMessage.text}
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