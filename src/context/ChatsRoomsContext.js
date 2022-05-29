import React, { useState, createContext } from "react";

export const ChatsRoomsContext = createContext();

export default function ChatsRoomsProvider({children}) {

  const [rooms, setRooms] = useState([]);

  return (

      <ChatsRoomsContext.Provider value={{rooms, setRooms}}>
          {children}
      </ChatsRoomsContext.Provider>
      
  )
  
}