import '../../styles/message.css';
// debugger
function Message({ chats, chatID }) {
  // debugger
  return chats[chatID].messages.map((message, index) => {
    return <div  key = {index} ><h4 className='message'>{message.name}:&nbsp;&nbsp;&nbsp;{message.text}</h4></div>
  });
}
export default Message;
