import React from 'react';

class Messenger extends React.PureComponent {
    render() {
        return (
            <div className={'root__main-container'}>
                <button className={'root__log-out-btn'} children={'Log out'}/>
                <div className={'main-container__chat-section'}>
                <ul className={'chat-section__chat-window'}/>
                    <form className={'chat-window__chat-form'}>
                        <label className={'chat-form__chat-label'}>
                            <input className={'chat-form__message-input'}/>
                        </label>
                        <button className={'chat-form__submit-button'} children={'Send'}/>
                    </form>
                </div>
            </div>
            

        );
    }
}

export default Messenger;