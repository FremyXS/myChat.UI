import React from 'react';
import logo from './logo.svg';
import Chat from './features/chat/Chat';

import './App.css';
import checkAuth from './commons/checkAuth';


function App() {
  const isAutth = checkAuth();
  return (
    <div>
      {!isAutth &&
        <div>
          Plz login or register
        </div>
      }
      {isAutth &&
        <Chat/>
      }
    </div>
  );
}

export default App;
