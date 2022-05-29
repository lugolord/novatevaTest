import React, { useState, createContext } from "react";

export const TokenContext = createContext();

export default function TokenProvider({children}) {

  const [token, setToken] = useState();

  return (

      <TokenContext.Provider value={{token, setToken}}>
          {children}
      </TokenContext.Provider>
      
  )
}