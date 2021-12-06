import * as React from 'react';
import '../styles/app.css';
import Header from './Header';
import BodyBox from './BodyBox';
import ListChats from './ListChats';
import MessageBox from './MessageBox';
import { useEffect } from 'react';





function App() {  
const adminMessage = {
  author: 'Admin',
  text: 'Your message is accepted!'
};

useEffect(() => {
  document.title = 'Chhhat';
}, []);

  return ( 
    <div className="App" > 
      
        <BodyBox>
          <ListChats/>
          <MessageBox adminMessage={adminMessage}/>
        </BodyBox>
    </div> 
  ); 
}

export default App;
