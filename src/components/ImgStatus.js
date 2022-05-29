import styles from '../styles/ImgStatus.module.css';

import React from 'react';

export default function ImgStatus() {

  return (

    <div className={styles.imgStatus}>

      <img src='./imgPrueba.jpeg' alt='user profile pic' className={styles.minPic} />

      <img src='./icons/Online-Icon.png' alt='online icon' className={styles.onlineIcon} />

    </div>

  )

}
