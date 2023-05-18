import React from 'react';
import logo from './logo.svg';
import { createAuthProvider } from './halpers/createAuthProvider ';
import Chat from './features/chat/Chat';

import './App.css';

function App() {
  const authProvider = createAuthProvider();
  const [logged] = authProvider.useAuth();
  return (
    <div>
      {!logged &&
        <div>
          Plz login or register
        </div>
      }
      {logged &&
        <Chat/>
      }
    </div>
  );
}

export default App;
