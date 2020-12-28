import constants from '../../constants';

const initialState = {
    currentUser: null,
    currentMessage: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SEND_MESSAGE:
            return {
                ...state,
                currentUser: action.payload.currentUser,
                currentMessage: action.payload.currentMessage,
            };
        default:
            return state;
    }
};
