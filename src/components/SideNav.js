import React from 'react';

// Components
import ChatTab from './ChatTab';
import Logout from './Logout';

export default function SideNav() {

  return (

    <div className='sideNav'>

      <ChatTab/>

      <Logout/>

    </div>

  )

}
