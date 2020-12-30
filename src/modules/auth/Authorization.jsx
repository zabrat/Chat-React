import React from 'react';

class Authorization extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            login: null
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
    
    render() {
        const { handleSubmit, handleInput } = this;

        return (
            <div className={'root__auth-container'}>
                <form onSubmit={handleSubmit} className={'auth-container__auth-form'}>
                <span className={'auth-form__form-name'} 
                      children={'Authorization'}/>
                    <input onChange={handleInput}
                            name={'login'} 
                           placeholder={'Please Type userName'}
                           className={'auth-form__login-input'}/>
                    <button className={'auth-form__submit-button'} 
                            children={'Sign in'}/>
                </form>
            </div>    
        );
    }
}

export default Authorization;
