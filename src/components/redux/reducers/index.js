import { combineReducers } from 'redux';

import authUserReducer from './authUserReducer';
import activityReducer from './activityReducer';
import friendReducer from './friendReducer';

export default combineReducers({
    authUser: authUserReducer,
    activities: activityReducer,
    friends: friendReducer,
});
