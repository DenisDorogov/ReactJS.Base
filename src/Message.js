import './Message.css';

function Message({text, user}) { 
  return ( 
    <div className="Message" > 
       <h3 className={'message'}> - {user} - {text}!</h3> 
    </div> 
  ); 
}

export default Message;
