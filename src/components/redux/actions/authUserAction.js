import setAuthToken from '../lib/Axios/setAuthToken';
import jwt_decode from 'jwt-decode';
import Axios from '../lib/Axios/Axios';

import { LOGIN, LOGOUT } from '../constants/authUserConstant';
// import { successToast } from '../../Toastify/Toast';

export const signupAPI = (userInfo) => async (dispatch) => {
    try {
        await Axios.post('/api/users/register', userInfo);

        return Promise.resolve();
    } catch (e) {
        if (e.response && e.response.status === 500) {
            return Promise.reject(e.response.data.message);
        }
        if (e.message) {
            return Promise.reject(e.message);
        }
    }
};

export const loginAPI = (userInfo) => async (dispatch) => {
    try {
        let success = await Axios.post('/api/users/login', userInfo);

        const { jwtToken } = success.data;

        dispatch(setAuthSuccessUser(jwtToken));

        return Promise.resolve();
    } catch (e) {
        if (e.response && e.response.status === 500) {
            return Promise.reject(e.response.data.message);
        }
        if (e.message) {
            return Promise.reject(e.message);
        }
    }
};

export const setAuthSuccessUser = (jwtToken) => (dispatch) => {
    setAuthToken(jwtToken);

    localStorage.setItem('jwtToken', jwtToken);

    let decoded = jwt_decode(jwtToken);

    dispatch({
        type: LOGIN,
        payload: decoded,
    });
};

export const checkReloadIfTokenExistAndNotExpired = (decoded) => (dispatch) => {
    dispatch({
        type: LOGIN,
        payload: decoded,
    });
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);

    dispatch({
        type: LOGOUT,
    });
};
