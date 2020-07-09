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
            }
        
            case LIKE:
                console.log("hello there");
                console.log(action.payload);
                
                let newActivities = state.activities.filter((item)=>{
                    return item.apiID !== action.payload.apiID
                })
                console.log(newActivities);
                
                return{
                    ...state,
                    activities:newActivities
                }
            case DISLIKE:
                console.log(state);
                
                let myActivities = state.activities.filter((item)=>{
                    return item.apiID !== action.payload.apiID
                })
                return{
                    ...state,
                    activities:myActivities
                }


        default:
            return state;
    }
}

