import * as React from 'react';
import '../styles/app.css';
import Header from './Header';
import BodyBox from './BodyBox';
import ListChats from './ListChats';
import MessageBox from './MessageBox';
import { useEffect } from 'react';
import { useParams } from 'react-router';





function App() {  
  const {chatID} = useParams();
  const adminMessage = {
    author: 'Admin',
    text: 'Your message is accepted!'
  };

  const initialChats = {
    id1: { name: 'Mick', messages: [{ author: 'Admin', text: 'Test message'}]},
    id2: { name: 'Jack', messages: [{ author: 'Admin', text: 'Test message'}]},
    id3: { name: 'Ben', messages: [{ author: 'Admin', text: 'Test message'}]}
  }
  // console.log('App adminMessage:', adminMessage);
  // console.log('App chatID:', chatID);
  // console.log('App initialChats:', initialChats);

  useEffect(() => {
    document.title = 'Chhhat';
   } , []);

  useEffect(() => {console.log('useEffect App')})

  return ( 
    <div className="App" > 
      
        <BodyBox adminMessage={adminMessage} chatID={chatID} initialChats={initialChats}>
          {/* <ListChats/>
          <MessageBox   /> */}
          {/* adminMessage={adminMessage} chatID={chatID} initialChats={initialChats} */}
        </BodyBox>
    </div> 
  ); 
}

export default App;
