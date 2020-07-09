import Axios from '../lib/Axios/Axios';

import { FIND_FRIEND } from '../constants/friendConstant';

export const findFriendAPI = (value) => async (dispatch) => {
    console.log('value:', value);
    try {
        // let dataValue = { 'username': value }
        // console.log(dataValue)
        let foundFriend = await Axios.post('/api/users/find-friend', value);

        dispatch({
            type: FIND_FRIEND,
            payload: foundFriend.data,
        });
    } catch (error) {
        console.log('Error...', error);
    }
};
