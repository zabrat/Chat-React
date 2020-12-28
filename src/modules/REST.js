export function addNewMessage(newMessage) {
    try {
        return fetch('http://localhost:3002/addMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMessage),
        }).then(response => response.json());
    } catch (e) {
        console.log('ERROR', e);
    }
}

export function getAllMessages() {
    try {
        return fetch('http://localhost:3002/getAllMessages').then(response => response.json());
    } catch (e) {
        console.log('ERROR', e);
    }
}

export function logIn(user) {
    try {
        return fetch('http://localhost:3002/logIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then(response => response.json());
    } catch (e) {
        console.log('ERROR', e);
    }
}

export function logOut(user) {
    try {
        return fetch('http://localhost:3002/deleteUser', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then(response => response.json());
    } catch (e) {
        console.log('ERROR', e);
    }
}
