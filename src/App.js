import logo from './logo.svg';
import './App.css';


function App(props) { 
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
