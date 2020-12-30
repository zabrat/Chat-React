import React from 'react';

class Messenger extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            curMessage: null
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.login);
    }

    handleInput = event => { 
        this.setState({
            login: event.target.value
        });
    }

    logOut = cb => {
        cb();
    }

    render() {
        const {handleInput, logOut, handleSubmit} = this;
        return (
            <div className={'root__main-container'}>
                <button onClick={logOut} className={'root__log-out-btn'} children={'Log out'}/>
                <div className={'main-container__chat-section'}>
                    <ul className={'chat-section__chat-window'}/>
                    <form onSubmit={handleSubmit} className={'chat-window__chat-form'}>
                        <input onChange={handleInput} className={'chat-form__message-input'}/>
                        <button className={'chat-form__submit-button'} children={'Send'}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Messenger;