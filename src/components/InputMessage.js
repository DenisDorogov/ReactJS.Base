import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function InputMessage({inputMessage, setInputMessage, messageList, setMessageList, chatID, adminMessage}) {
    const initialMessage = {author: '', text: ''}
    

    const handleChange = (event) => {
        setInputMessage({
          author: 'User',
          text: event.target.value,
        }); 
    }

    const addMessage = (messagesObj, message) => {
        let tempObj = messagesObj;
        // tempObj[chatID].messages = [...tempObj[chatID].messages, message];
        tempObj[chatID].messages.push(message);
        setMessageList(tempObj);
    }

    const sendMessage = (event) => {
        // event.preventDefault();
        addMessage(messageList, inputMessage);
        console.log('InputMessage messageList:', messageList[chatID].messages);
        setInputMessage({
          author: '',
          text: '',
        });
        }

    //   useEffect(() => {
    //     console.log('useEffect messageList',messageList);
    //     setTimeout(() => {
    //       console.log('if: ', messageList[chatID].messages[messageList[chatID].messages.length - 1].author)
    //       if ( messageList[chatID].messages.length !== 0 && messageList[chatID].messages[messageList[chatID].messages.length - 1].author !== messageList[chatID].name) {
    //         let temp = messageList;
    //         temp[chatID].messages = [...temp[chatID].messages, {author: messageList[chatID].name, text: 'My answer will be later'}];
    //         setMessageList(temp);
    //         // addMessage(messageList, {author: messageList[chatID].name, text: 'My answer will be later'})
    //         setInputMessage({
    //           author: '',
    //           text: '',});
    //         } 
    //     }, 1000)
    // }, [messageList])

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