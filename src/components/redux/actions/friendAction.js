import Axios from '../lib/Axios/Axios';

import { FIND_FRIEND } from '../constants/friendConstant';

export const findFriendAPI = (value, user) => async (dispatch) => {
    console.log('value:', value);
    try {
        let foundFriend = await Axios.post('/api/users/find-friend', {
            value,
            user,
        });

        dispatch({
            type: FIND_FRIEND,
            payload: foundFriend.data,
        });
    } catch (error) {
        console.log('Error...', error);
    }
};
