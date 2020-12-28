import React from 'react';

class Send extends React.PureComponent {
    render() {
        return (
            <div className={'main-container'}>
                <div className={'main-wrapper'}>
                    <div className={'wrapper'}>
                        <input className={'username__input'}/>
                        <button children={'Send'}/>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Send;