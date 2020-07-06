// import setAuthToken from '../lib/Axios/setAuthToken';
// import jwt_decode from 'jwt-decode';
import Axios from '../lib/Axios/Axios';

import { ACTIVITIES } from '../constants/activityConstant';


export const activitiesAPI = () => async (dispatch) => {
    try {
        let success = await Axios.get('/api/activity/get-activities');

        dispatch({
            type: ACTIVITIES,
            payload: success.data,
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
