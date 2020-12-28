import React from 'react';

class Authorization extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            login: ''
        }
    }

    userInput = e => {
        const {
            name,
            value
        } = e.target
        const {
            onSaveLogin
        } = this;

        if (name === 'login') {
            onSaveLogin(value)
        }
    }

    onSaveLogin = value => {
        this.setState(() => ({
            login: value
        }))
    }

    handleClick = e => {
        const { saveCurrentUser } = this.props; //ask props
        e.preventDefault();

        saveCurrentUser(this.state.login);
    }


    render() {
        const {
            userName
        } = this.props;
        const {
            handleClick,
            handleInput
        } = this;

        return (
            <div className={'rootcontainer__auth'}>
                <form className={'auth-container__auth-form'}>
                <span className ={'auth-form__form-name'} 
                      children={'Authorization'}/>

                    <input name={'login'} 
                           value={this.state.login} 
                           onChange={handleInput} 
                           placeholder={'Please Type userName'}
                           className={'auth-form__login-input'}/>

                    <button onClick={handleClick}
                            className={'auth-form__submit-button'} 
                            children={'Sign in'}/>
                </form>
            </div>    
        );
    }
}

export default Authorization;
