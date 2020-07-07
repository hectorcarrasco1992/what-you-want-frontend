// import setAuthToken from '../lib/Axios/setAuthToken';
// import jwt_decode from 'jwt-decode';
import Axios from '../lib/Axios/Axios';

import { ACTIVITIES } from '../constants/activityConstant';


export const activitiesAPI = (user) => async (dispatch) => {
    try {
        let userObj = {username:user.username}
        console.log(userObj);
        
        let success = await Axios.get('/api/activity/activity', userObj);
        console.log("user....",user);
        
        //console.log(user);
        
        dispatch({
            type: ACTIVITIES,
            payload: success.data
        });

    } catch (error) {
        console.log('error', error)
        if (error.response && error.response.status === 500) {
            return Promise.reject(error.response.data.message);
        }
        if (error.message) {
            return Promise.reject(error.message);
        }
    }
};
