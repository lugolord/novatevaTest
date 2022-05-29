import styles from '../styles/InputBox.module.css';

import React, { useContext, useRef } from 'react';

// Context
import { ActiveChatContext } from '../context/ActiveChatContext';
import { TokenContext } from '../context/TokenContext';

export default function InputBox() {

  const { roomId, messages, setMessages, setRoomId, findUser } = useContext(ActiveChatContext);

  const { token } = useContext(TokenContext);

  let messageInput = useRef(null);

  async function sendMessage(chatRoomId, message) {

    let response = await fetch(`https://novateva-codetest.herokuapp.com/room/${chatRoomId}/message`, {
      method: 'POST',

      body: JSON.stringify({

        messageText: `${message}`

      }),
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    });

    let chatRoom = await response.json();

    findUser(chatRoom.post.postedByUser);

    setMessages([...messages, chatRoom.post]);

    messageInput.current.value = '';
    
  }

  async function getMessages(roomId) {

    let response = await fetch(`http://novateva-codetest.herokuapp.com/room/${roomId}?limit=5&page=0`, {

      headers: {
        'authorization': `Bearer ${token}`
      }

    });

    let chatRoom = await response.json();

    setMessages(chatRoom.conversation);

    setRoomId(roomId);

  }

  return (

    <div className={styles.inputBox}>

      <input type={'text'} placeholder='Start typing here' ref={messageInput} />

      <button onClick={() => {
        
        sendMessage(roomId, messageInput.current.value);

      }}>send</button>
      
    </div>

  )

}
