import { FIND_FRIEND } from '../constants/friendConstant';

const initialState = {
    friends: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FIND_FRIEND:
            console.log(action.payload)
            return {
                ...state,
                friends: action.payload
            };


        default:
            return state;
    }
}
