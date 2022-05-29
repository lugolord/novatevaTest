import styles from '../styles/NewChatBtn.module.css';

import React, { useState } from 'react';

import { Button } from 'reactstrap';

// Components
import UsersContainer from './UsersContainer';

export default function NewChatBtn({ newChat, users }) {

  const [visible, setVisible] = useState(false)

  return (

    <div>

      <Button className={styles.newChatBtn} onClick={() => {

          setVisible(true);

          newChat();

      }}>
        New Chat
      </Button>

      <UsersContainer visible={visible} setVisible={setVisible} users={users} />

    </div>

  )

}
