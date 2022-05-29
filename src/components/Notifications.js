import styles from '../styles/Notifications.module.css';

import React from 'react';

export default function Notifications() {

  return (
    
    <div className={styles.notifications}>

      <img src='./icons/Bell-Icon.png' alt='bell icon' className={styles.bellIcon}/>

      <div className={styles.badge}>24</div>

    </div>

  )

}
