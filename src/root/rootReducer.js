import { combineReducers } from 'redux';
import auth from '../manager/auth/reducer';
import messenger from '../manager/messenger/reducer';

export default combineReducers({
    auth,
    messenger,
});
