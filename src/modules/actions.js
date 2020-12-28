import constants from '../constants';

export const authSubmit = userName => ({
    type: constants.AUTH_SUBMIT,
    payload: userName,
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
