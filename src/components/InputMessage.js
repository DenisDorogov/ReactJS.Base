import * as React from 'react';
import { useEffect, useState } from 'react';
import MessageBox from './MessageBox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';






export default function InputMessage(props) {
    const [inputMessage, setInputMessage] = useState('');
    

    const handleChange = (event) => {
        setInputMessage({
          author: 'User',
          text: event.target.value,
        }); 
    }

    const sendMessage = (event) => {
        event.preventDefault();
        
        props.setMessageList([...props.messageList, inputMessage]);
        setInputMessage({
          author: '',
          text: '',});
          console.log('InputMessage: ', inputMessage );  
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






//Выдаёт ошибку 
// class InputMessage extends MessageBox {

//   constructor(props) {
//     super(props)

//   }




//   render() {
//     return (
//       <Box
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 1, width: '80%' },
//         }}
//         noValidate
//         autoComplete="off"
//         display="flex"
//       >
//         <TextField 
//           fullWidth 
//           autoFocus 
//           id="outlined-basic" 
//           label="Outlined" 
//           variant="outlined"
//           onChange={this.props.handle}
//           />
//           <Button 
//               href="#text-buttons"
//               width='20px'
//               onClick={this.props.send}
//           >Send</Button>
//       </Box>
//     );
//   }
// }