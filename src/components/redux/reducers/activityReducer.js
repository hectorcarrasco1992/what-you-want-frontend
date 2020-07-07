import { ACTIVITIES,LIKE } from '../constants/activityConstant';

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
        
            case LIKE:
                let newActivities = activityState.activities.filter((item)=>{
                    return item !== action.payload
                })
                return{
                    ...state,
                    activities:newActivities
                }

        default:
            return state;
    }
}

