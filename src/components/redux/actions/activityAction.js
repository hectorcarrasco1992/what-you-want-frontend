// import setAuthToken from '../lib/Axios/setAuthToken';
// import jwt_decode from 'jwt-decode';
import Axios from '../lib/Axios/Axios';

import { ACTIVITIES, LIKE, DISLIKE } from '../constants/activityConstant';

export const activitiesAPI = (user) => async (dispatch) => {
    try {
        let userObj = { username: user.username };
        console.log(userObj);

        let success = await Axios.post('/api/activity/get-activities', userObj);
        //console.log("user....",user);

        //console.log(user);

        dispatch({
            type: ACTIVITIES,
            payload: success.data,
        });
    } catch (error) {
        console.log('error', error);
        if (error.response && error.response.status === 500) {
            return Promise.reject(error.response.data.message);
        }
        if (error.message) {
            return Promise.reject(error.message);
        }
    }
};

export const likeActivity = (name, id) => async (dispatch) => {
    try {
        console.log('$$$$$$', id);
        let user = { username: name.username };
        let success = await Axios.post('/api/activity/like-activity', {
            user,
            id,
        });
        console.log('####', success.data);
        console.log('yerrrr');

        dispatch({
            type: LIKE,
            payload: success.data,
        });

        //return success.data
    } catch (error) {
        return Promise.reject(error.message);
    }
};

export const dislikeActivity = (name, id) => async (dispatch) => {
    try {
        console.log('$$$$$$', id);
        let user = { username: name.username };
        let success = await Axios.post('/api/activity/dislike-activity', {
            user,
            id,
        });
        console.log('####', success.data);
        console.log(dispatch);

        dispatch({
            type: DISLIKE,
            payload: success.data,
        });

        //return success.data
    } catch (error) {
        return Promise.reject(error.message);
    }
};

export const matchedActivity = () => async () => {
    try {
        
    } catch (error) {
        return Promise.reject(error.message);
    }
};
