import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Message from './Message';
import InputMessage from './InputMessage';




export default function MessageBox() {
  const [messageList, setMessageList] = useState([]);
  

  return (
    <Box
      sx={{
        width: '80%',
        backgroundColor: 'primary.ligth'
      }}
    >
      <h2>MessageBox</h2>
        <InputMessage messageList={messageList} setMessageList={setMessageList} />
        <Message list={messageList}/>
    </Box>

  )
} 

//TODO дописать класс
// export default class MessageBox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {messageList: [], inputMessage: ''};
//     console.log('props: ',this.state);
//     this.sendMessage = this.sendMessage.bind(this);
//   }

//   sendMessage(event) {
//     // event.preventDefault();
//     console.log('this.state.messageList: ', this.state);
//     this.setState({messageList: [...this.state.messageList, this.state.inputMessage]});
//     // this.setState({inputMessage: {author: '', text: ''}});
//   }
  
//   handleChange(event) {
//     this.setState({inputMessage: {author: 'User', text: event.target.value}}); 
//   }

//   componentDidUpdate(props) {

//   }
//   componentDidUpdate(() => {
//     setTimeout(() => {
//       if ( this.messageList.length !== 0 && this.messageList[this.messageList.length - 1].author !== 'Admin') {
//         setMessageList([...this.messageList, this.adminMessage]);
//         setInputMessage({
//           author: '',
//           text: '',});
//         } 
//     }, 1000)
// },[this.messageList])

// render() {
//   return (
//     <Box
//       sx={{
//         width: '80%',
//         backgroundColor: 'primary.ligth'
//       }}
//     >
//         {/* <InputMessage send={this.sendMessage} onChange={this.handleChange}/> */}
//         {/* <Message list={this.state.messageList}/> */}
//   </Box>
//   )
  
// }



// }


// export default function MessageBox() {

//     const sendMessage = (event) => {
//         event.preventDefault();
//         setMessageList([...messageList, inputMessage]);
//         setInputMessage({
//           author: '',
//           text: '',});
//       }
      
//       const handleChange = (event) => {
//         setInputMessage({
//           author: 'User',
//           text: event.target.value,
//         }); 
//       }

//     useEffect(() => {
//         setTimeout(() => {
//           console.log('setTimeout: ', messageList[messageList.length - 1]);
//           if ( messageList.length !== 0 && messageList[messageList.length - 1].author !== 'Admin') {
//             setMessageList([...messageList, adminMessage]);
//             setInputMessage({
//               author: '',
//               text: '',});
//             } 
//         }, 1000)
//     }, [messageList])

//     const getText = (value) => {}


//   return (
//     <Box
//       sx={{
//         width: '80%',
//         backgroundColor: 'primary.ligth'
//       }}
//     >
//         {/* <InputMessage send={sendMessage} handle={handleChange}/> */}
//         {/* <Message list={messageList}/> */}
//     </Box>
//   );
// }