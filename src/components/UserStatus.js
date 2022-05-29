import styles from '../styles/UserStatus.module.css';

import React, { useState } from 'react';

export default function UserStatus({ status, firstName, lastName }) {

  const [online, setOnline] = useState(status);

  return (

    <>

      <div className={styles.imgStatus}>

        <img src='./imgPrueba.jpeg' alt='user profile pic' className={styles.minPic} />

        {online ? 
          <img src='./icons/Online-Icon.png' alt='online icon' className={styles.onlineIcon} /> 
          :
          <img src='./icons/Offline-Icon.png' alt='offline icon' className={styles.onlineIcon} />
        }

      </div>

      <div className={styles.nameNStatus}>

        <p className={styles.userName}>{firstName} {lastName}</p>

        {online ?
          <p className={styles.status}>Online</p>
          :
          <p className={styles.status}>Offline</p>
        }

      </div>
      
    </>

  )

}
