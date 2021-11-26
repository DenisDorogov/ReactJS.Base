import '../styles/message.css';

function Message({list}) {
  console.log('Message list: ', list); 
  return list.map((message, index) => {
    return <div  key = {index} ><h3 className='message'>{message.author} - {message.text}</h3></div>
  });
}
export default Message;