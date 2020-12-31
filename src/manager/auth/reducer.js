import constants from '../../constants';

const initialState = {
    isLoged: false,
    currentUser: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.AUTH_SUBMIT:
            return {
                ...state,
                currentUser: action.userName,
                isLoged: true
            };
        default:
            return state;
    }
};
