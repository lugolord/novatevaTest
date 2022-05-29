import React, { useState, createContext, useEffect } from "react";

// Socket.io
import { io } from 'socket.io-client';

// Context
export const ActiveChatContext = createContext();

export default function ActiveChatProvider({children}) {

  const [messages, setMessages] = useState([]);

  const [roomId, setRoomId] = useState();

  const [msgSocket, setMsgSocket] = useState({});

  const [chatUsers, setChatUsers] = useState([]);

  const [usersInfo, setUsersInfo] = useState([]);

  useEffect(() => {

    if (roomId !== undefined) {

      activateSocket(roomId);

    }

  }, [messages, msgSocket, roomId]);
  

  function activateSocket(room) {

    const ruta = `wss://novateva-codetest.herokuapp.com/?roomId=${room}`
    
    const socket = io(ruta, { 
      transports: ['websocket']
    });
  
    socket.on('new message', async (msg) => {

      let prueba = await msg.message;

      setMessages([...messages, prueba]);

      setMsgSocket(prueba);
     
    });
  
    socket.on('connect_error', (error) => console.log(error)); 
      
  }

  function findUser(id) {

    let userWanted = usersInfo.find(u => u._id === id);

    console.log(userWanted);

  }
  
  return (

      <ActiveChatContext.Provider value={{ messages, setMessages, roomId, setRoomId, activateSocket, setChatUsers, 
      usersInfo, setUsersInfo, findUser }}>
          {children}
      </ActiveChatContext.Provider>
      
  )
  
}