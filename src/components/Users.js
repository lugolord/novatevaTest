import React, { useContext } from 'react';

// Context
import { ChatsContext } from '../context/ChatsContext';

export default function Users({ user, visible, setVisible, startChat }) {

  const { setChats, chats } = useContext(ChatsContext);

  return (

    <>
      <p>{user.firstName} {user.lastName}</p>

      <button onClick={() => {

        // startChat(user._id);

        setChats([...chats, user]);

        setVisible(!visible);

      }}>
        chat
      </button>
    </>

  )

}
