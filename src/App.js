// import './Grids.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Login from './components/Login';
import ChatView from './components/ChatView';

// Context
import TokenProvider from './context/TokenContext';
import ChatsProvider from './context/ChatsContext';
import ChatsRoomsProvider from './context/ChatsRoomsContext';
import ActiveChatProvider from './context/ActiveChatContext';

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";

function App() {

  return (

    <TokenProvider>

      <ChatsProvider>

        <ChatsRoomsProvider>

          <ActiveChatProvider>

            <Router>

              <Routes>

                <Route path="/chat" element={<ChatView/>}/>

                <Route path="/" element={<Login/>} />

              </Routes>

            </Router>

          </ActiveChatProvider>

        </ChatsRoomsProvider>

      </ChatsProvider>

    </TokenProvider>

  )

}

export default App;
