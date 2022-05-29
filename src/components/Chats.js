import React, { useState, useContext } from 'react';

// Components
import Chat from './Chat';
import NewChatBtn from './NewChatBtn';

// Context 
import { TokenContext } from '../context/TokenContext';
import { ChatsContext } from '../context/ChatsContext';
import { ChatsRoomsContext } from '../context/ChatsRoomsContext';
import { ActiveChatContext } from '../context/ActiveChatContext';

export default function Chats({ setChatToShow }) {

  // local state
  const [users, setUsers] = useState([]);

  // global states
  const { token } = useContext(TokenContext);

  const { chats } = useContext(ChatsContext);

  const { rooms, setRooms } = useContext(ChatsRoomsContext);

  const { setMessages, setRoomId, activateSocket, setChatUsers, usersInfo, setUsersInfo } = useContext(ActiveChatContext);

  async function getUsers() {

    let response = await fetch('https://novateva-codetest.herokuapp.com/users');

    let data = await response.json();

    setUsersInfo(data.users);

    return data.users;

  }

  async function newChat() {  

    setUsers(await getUsers())

  }

  async function getMessages(roomId) {

    let response = await fetch(`https://novateva-codetest.herokuapp.com/room/${roomId}?limit=5&page=0`, {

      headers: {
        'authorization': `Bearer ${token}`
      }

    });

    let chatRoom = await response.json();

    setChatUsers([...chatRoom.users]);

    setMessages(chatRoom.conversation);

    setRoomId(roomId);

    activateSocket(roomId);

  }
  
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

      setRooms([...rooms, room]);

      return room;

    } catch (error) {

      console.log(error);

    }
  
  }

  return (

    <div className='chats'>

      {chats.map((chat) => {
        
        return (

          <div key={chat._id}>

            <Chat firstName={chat.firstName} lastName={chat.lastName} setChatToShow={setChatToShow} id={chat._id} 
            startChat={startChat} getMessages={getMessages} /> 
              
          </div>

        )
      
      })}

      <NewChatBtn newChat={newChat} users={users} />
      
    </div>

  )

}
