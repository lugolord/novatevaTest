import styles from '../styles/Login.module.css';

import React from 'react';

// Components
import LoginForm from './LoginForm';

export default function Login() {

  return (

    <div className={styles.loginContainer}>

      <LoginForm/>

    </div>

  )

}
