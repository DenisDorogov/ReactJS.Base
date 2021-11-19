import './App.css';
import Message from './Message';

function App(props) { 
  return ( 
    <div className="App" > 
      <header className='App-header'>
        <h1 className='heading'>{props.greeting}</h1> 
      </header>
      <Message text={props.text} user={props.user}/>
    </div> 
  ); 
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
