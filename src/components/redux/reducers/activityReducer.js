import { ACTIVITIES, LIKE, DISLIKE } from '../constants/activityConstant';

const activityState = {
    activities: [],
    likes: [],
};

export default function (state = activityState, action) {
    switch (action.type) {
        case ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            };

        case LIKE:
            let newActivities = state.activities.filter((item) => {
                return item.apiID !== action.payload.activity.apiID;
            });

            return {
                ...state,
                activities: newActivities,
                likes: [...action.payload.user.likes],
            };
        case DISLIKE:
            let myActivities = state.activities.filter((item) => {
                return item.apiID !== action.payload.apiID;
            });
            return {
                ...state,
                activities: myActivities,
            };

        default:
            return state;
    }
}
