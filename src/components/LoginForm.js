import styles from '../styles/LoginForm.module.css';

import { useNavigate } from 'react-router-dom';

import React, { useRef, useState, useContext } from 'react';

// Context
import { TokenContext } from '../context/TokenContext';

export default function LoginForm() {

  const [auth, setAuth] = useState(false);

  const { setToken, token } = useContext(TokenContext);

  let navigate = useNavigate();

  let url = 'https://novateva-codetest.herokuapp.com/login';

  const userMail = useRef(null);

  const userPassword = useRef(null);

  const data = {
    email: '', 
    password: ''
  }

  async function sendCredentials() {

    try {

      const response = await fetch(url, {

        method: 'POST',

        body: JSON.stringify(data),

        headers:{
          'Content-Type': 'application/json'
        }

      });

      const getAuth = await response.json();

      return getAuth;

    } catch (error) {

      alert(error);

    }
  
  }

  async function login() {

    let credentials = await sendCredentials();

    if (credentials.success) {

      setToken(credentials.authorization);

      setAuth(true);

      navigate('/chat');
      
    }

  }

  const newUser = {
    firstName: '',
    lastName: '',
    type: 'consumer',
    email: '',
    password: ''
  }

  const firstName = useRef(null);
  const lastName = useRef(null);
  const newMail = useRef(null);
  const newPassword = useRef(null);

  async function createUser() {

    const url = 'https://novateva-codetest.herokuapp.com/users'
    
    try {

      const response = await fetch(url, {

        method: 'POST',

        body: JSON.stringify(newUser),

        headers:{
          'Content-Type': 'application/json'
        }

      });

      const prueba = await response.json();

      console.log(prueba);

      return prueba;

    } catch (error) {

      alert(error);

    }

  }
  
  return (

    <form className={styles.loginForm} onSubmit={(e) => {

      e.preventDefault();

      data.email = userMail.current.value;

      data.password = userPassword.current.value;

      login();

    }}>
      
      <input  ref={userMail} type={'email'} placeholder='enter your mail here' required />

      <input ref={userPassword} type={'password'} placeholder='password' required />

      <button type={'submit'} className={styles.loginBtn}>log in</button>

    </form>

  )

}
