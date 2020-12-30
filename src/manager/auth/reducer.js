import constants from '../../constants';

const initialState = {
    isLoading: false,
    currentUser: {
        user: null
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.AUTH_SUBMIT:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    user: action.payload
                }
            };
        default:
            return state;
    }
};
