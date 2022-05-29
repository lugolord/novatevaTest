import React, { useContext, useEffect } from 'react';

// Components
import UserMsg from './UserMsg';
import InputBox from './InputBox';
import { BsFillExclamationCircleFill } from 'react-icons/bs';

// Context
import { ActiveChatContext } from '../context/ActiveChatContext';

export default function ChatContainer({ chatToShow }) {

  const { messages, roomId } = useContext(ActiveChatContext);

  if (chatToShow || messages.length > 0) {

    return (

      <div className='chatContainer'>

        <BsFillExclamationCircleFill className='report'/>

        <div className='msgBox'>

          {messages.map((message, key) => {

            return <UserMsg message={message.message.messageText} key={key} postedBy={message.postedByUser[0]} 
            created={message.createdAt} roomId={message.chatRoomId} />
            
          })}

        </div>


        <InputBox/>
        
      </div>

    )

  }

  return (

    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

      no chat opened

    </div>

  )

}
