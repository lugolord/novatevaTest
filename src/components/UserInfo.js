import styles from '../styles/UserInfo.module.css';

import React from 'react';

export default function UserInfo() {

  return (

    <div className={styles.userInfoContainer}>

      <img src='./imgPrueba.jpeg' alt='user profile pic' className={styles.minPic} />

      <p className={styles.userName}>Luis Gonzalez</p>

    </div>

  )

}
