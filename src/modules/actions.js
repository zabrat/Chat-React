import constants from '../constants';

export const authSubmit = payload => ({
    type: constants.AUTH_SUBMIT,
    payload:
});

export const sendMessage = (user, message) => ({
    type: constants.SEND_MESSAGE,
    payload: {
        currentUser: user,
        currentMessage: message,
    },
});

export const saveCellPOsitionsStore = payload => ({
    type: constants.BACK_TO_AUTH,
    payload,
});
