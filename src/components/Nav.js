import React from 'react';

// Components
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';
import Notifications from './Notifications';

export default function Nav() {

  return (

    <header className='nav'>

      <SearchBar/>

      <UserInfo/>

      <Notifications/>
      
    </header>

  )

}
