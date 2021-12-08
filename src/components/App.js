import * as React from 'react';
import '../styles/app.css';
import Header from './Header';
import BodyBox from './BodyBox';
import ListChats from './ListChats';
import MessageBox from './MessageBox';
import { useEffect } from 'react';
import { useParams } from 'react-router';





function App() {  
  let {chatID} = useParams();
  const adminMessage = {
    author: 'Admin',
    text: 'Your message is accepted!'
  };

  const initialChats = {
    id0: { name: 'Admin', messages: [{ author: 'Admin', text: 'Chat not choosed'}]},
    id1: { name: 'Mick', messages: [{ author: 'Mick', text: 'Hello User'}]},
    id2: { name: 'Jack', messages: [{ author: 'Jack', text: 'Hello User'}]},
    id3: { name: 'Ben', messages: [{ author: 'Ben', text: 'Hello User'}]}
  }


  // console.log('App adminMessage:', adminMessage);
  // console.log('App chatID:', chatID);
  // console.log('App initialChats:', initialChats);

  useEffect(() => {
    document.title = 'Chhhat';
   } , []);

   if (chatID == undefined) chatID = 'id0';

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
