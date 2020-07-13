import { FIND_FRIEND } from '../constants/friendConstant';

const initialState = {
    friends: {},
    user: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FIND_FRIEND:
            return {
                ...state,
                friends: action.payload.foundFriend,
                user: action.payload.user,
            };

        default:
            return state;
    }
}
