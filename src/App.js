import React from 'react';
import Authorization from './modules/auth/Authorization.jsx';
import Messenger from './modules/messenger/Messenger.jsx';
import './modules/auth/AuthorizationStyles.css';
import './modules/messenger/MessengerStyle.css';

function App() {
  return (
    <Authorization/>
    // <Messenger/>
  );
}

export default App;
