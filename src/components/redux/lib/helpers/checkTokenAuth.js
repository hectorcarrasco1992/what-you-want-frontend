import jwt_decode from 'jwt-decode';
import { HistoryAPI } from './History/History';
import setAuthToken from '../Axios/setAuthToken';
import {
    logout,
    checkReloadIfTokenExistAndNotExpired,
} from '../../actions/authUserAction';

const checkTokenAuth = (store) => {
    let jwtToken = localStorage.getItem('jwtToken');
    let decoded;

    if (jwtToken) {
        decoded = jwt_decode(jwtToken);

        const currentTIme = Date.now() / 1000;

        if (decoded.exp < currentTIme) {
            store.dispatch(logout());
            HistoryAPI('/login');
        } else {
            setAuthToken(jwtToken);
            store.dispatch(checkReloadIfTokenExistAndNotExpired(decoded));
        }
    }
};

export default checkTokenAuth;
