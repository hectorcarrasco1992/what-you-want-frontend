import { ACTIVITIES,LIKE,DISLIKE } from '../constants/activityConstant';

const activityState = {
    activities: [],
};

export default function (state = activityState, action) {
    switch (action.type) {
        case ACTIVITIES:
            console.log(action.payload);
            
            return {
                ...state,
                activities: action.payload
            };
        
            case LIKE:
                console.log(state);
                
                let newActivities = activityState.activities.filter((item)=>{
                    return item !== action.payload
                })
                return{
                    ...state,
                    activities:newActivities
                }
            case DISLIKE:
                console.log(state);
                
                let myActivities = activityState.activities.filter((item)=>{
                    return item !== action.payload
                })
                return{
                    ...state,
                    activities:myActivities
                }


        default:
            return state;
    }
}

