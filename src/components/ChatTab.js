import styles from '../styles/ChatTab.module.css';

import React from 'react';

export default function ChatTab() {

  return (

    <div className={styles.chatTab}>

      <img src='./icons/Chat-Icon.png' alt='chat icon' className={styles.chatIcon}/>

      <p>Chat</p>

      <div className={styles.msgQty}>
        <p>19</p>
      </div>

    </div>

  )

}
