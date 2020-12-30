import React from 'react';

import Authorization from './auth/Authorization';
import Messenger from './messenger/Messenger';
import './auth/AuthorizationStyles.css';
import './messenger/MessengerStyle.css';

class Modules extends React.Component{
    constructor(props) {
        super(props);

        this.state = { 
            
        }
        
    }

    init = () => {
        
    }

    showMessenger = () => {
        return (
            <Authorization/>
        );
    }

    render() {
        Messenger.logOut(this.showMessenger.bind(this))
        return (
            <Messenger/>
        );
    }
}

export default Modules;