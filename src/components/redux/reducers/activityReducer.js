import { ACTIVITIES } from '../constants/activityConstant';

const activityState = {
    activities: [],
};

export default function (state = activityState, action) {
    switch (action.type) {
        case ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            };

        default:
            return state;
    }
}
