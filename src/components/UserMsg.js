import styles from '../styles/UserMsg.module.css';

import React, { useState } from 'react';

// Components
import Unread from './Unread';

export default function UserMsg({ message, postedBy, created }) {

  const [unread, setUnread] = useState(false);

  let time = created.slice(11, 16);

  return (

    <>

      {unread ? <Unread/> : ''}

      <div className={styles.msgContainerLeft}>

        <div>

          <p className={styles.msgHeader}>{postedBy.firstName || 'pepito'} {postedBy.lastName || 'perez'}, {time}</p>

          <p className={styles.msg}>{message}</p>

        </div>

      </div>

    </>

  )

}
