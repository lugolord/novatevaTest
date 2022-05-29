import styles from '../styles/SearchBar.module.css';

import React from 'react';

export default function SearchBar() {

  return (

    <div className={styles.prueba}>

      <img  src='./icons/UserSearch-Icon.png' alt='user search border' />

      <input type={'text'} placeholder='User search' className={styles.userSearchInput}/>

      <img src='./icons/Search-Icon.png' className={styles.searchIcon} />

    </div>

  )

}