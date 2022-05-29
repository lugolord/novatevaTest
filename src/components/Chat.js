import styles from '../styles/Chat.module.css';

import React, { useState } from 'react';

// Components
import UserStatus from './UserStatus';

export default function Chat({ state, writting, unreadMsg, firstName, lastName, setChatToShow, id, startChat, getMessages }) {
  
  const [chatRoom, setChatRoom] = useState();
  
  return (

    <div className={styles.chat} id={id} onClick={async () => {

      const roomId = await startChat(id);

      setChatRoom(await roomId.chatRoom.chatRoomId);

      getMessages(roomId.chatRoom.chatRoomId);

      setChatToShow(true);

    }}>

      <UserStatus status={state} firstName={firstName} lastName={lastName} />

      {writting ? <p className={styles.typing}>typing...</p> : ''}

      {unreadMsg > 0 ? <div className={styles.msgQty}>{unreadMsg}</div> : ''}

    </div>

  )

}
