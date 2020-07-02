import { combineReducers } from 'redux';
import authUserReducer from './authUserReducer';
import activityReducer from './activityReducer';

export default combineReducers({
    authUser: authUserReducer,
    activities: activityReducer,
});
