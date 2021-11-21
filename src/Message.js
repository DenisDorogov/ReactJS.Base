import './Message.css';

function Message(messages) { 
  // console.log(messages.list);  
  return messages.list.map((message) => <h3 className='message' key={message.id} >{message.author} - {message.text}</h3>);
}

export default Message;
