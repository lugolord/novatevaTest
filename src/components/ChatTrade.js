import React, { useState } from 'react';

// Components
import StatusContainer from './StatusContainer';
import Chats from './Chats';
import ChatContainer from './ChatContainer';


export default function ChatTrade() {

  const [chatToShow, setChatToShow] = useState(false);

  return (

    <div className='chatTrade'>

      <StatusContainer/>
      
      <Chats setChatToShow={setChatToShow} />

      <ChatContainer chatToShow={chatToShow} />

    </div>

  )
  
}
