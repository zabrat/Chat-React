import constants from '../../constants';

const initialState = {
    isLoading: false,
    currentUser: {
        name: ''
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.AUTH_SUBMIT:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    name: action.payload
                }
            };
        default:
            return state;
    }
};
