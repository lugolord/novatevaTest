import styles from '../styles/UsersContainer.module.css';

import React, { useContext } from 'react';

// Context
import { TokenContext } from '../context/TokenContext';
import {ChatsRoomsContext } from '../context/ChatsRoomsContext';

import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';

// Components
import Users from './Users';

export default function UsersContainer({ visible, setVisible, users}) {

  const { token } = useContext(TokenContext);

  const { setRooms, rooms } = useContext(ChatsRoomsContext);

  let url = 'https://novateva-codetest.herokuapp.com/room/initiate'

  async function startChat(id) {

    try {

      const response = await fetch(url, {

        method: 'POST',

        body: JSON.stringify({

          userIds: ["{{user_id}}", id],

          type: "consumer-to-consumer"

        }),

        headers:{
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        }

      });

      const room = await response.json();

      setRooms([...rooms, room.chatRoom.chatRoomId]);

    } catch (error) {

      console.log(error);

    }
  
  }
  
  return (

    <Offcanvas className='usersContainer' direction="end" isOpen={visible} toggle={() => setVisible(!visible)}>

      <OffcanvasHeader toggle={() => setVisible(!visible)}>
        Usuarios
      </OffcanvasHeader>

      <OffcanvasBody>

        {users.map((user, key) => {

          return (

            <div key={key} className={styles.userRow}>

                <Users user={user} startChat={startChat} visible={visible} setVisible={setVisible} />

            </div>

          )

        })}

      </OffcanvasBody>
      
    </Offcanvas>

  )

}
