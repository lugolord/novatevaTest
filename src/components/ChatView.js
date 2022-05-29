import '../Grids.css';

import React from 'react';

// Components
import Nav from './Nav';
import SideNav from './SideNav';
import ChatTrade from './ChatTrade';

export default function ChatView() {

  return (

    <div className='gridContainer'>

      <Nav/>

      <SideNav/>
      
      <ChatTrade/>
        
    </div> 

  )

}
