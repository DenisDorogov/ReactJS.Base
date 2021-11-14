


function Message(props) { 
  return ( 
    <div className="App" > 
      <header 
      className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`} 
      style={{top: props.topPosition || '10px'}}
      > My First React App 
        <h3>Hello, {props.name}!</h3> 
      </header>
    </div> 
  ); 
}

export default Message;
