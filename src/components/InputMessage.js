import * as React from 'react';
import MessageBox from './MessageBox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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