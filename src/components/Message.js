import '../styles/message.css';

function Message({chatID, list}) {
  return list.map((message, index) => {
    return <div  key = {index} ><h4 className='message'>{message.author}:&nbsp;&nbsp;&nbsp;{message.text}</h4></div>
  });
}
export default Message;
