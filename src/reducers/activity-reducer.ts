import type { Activity } from "../types";

type ActivityState = {
    activities: Activity[]
}

export type ActivityActions = {
    type: 'save-activity',
    payload: { newActivity: Activity }
}

export const initialState: ActivityState = {
    activities: []
}

export const activityReducer = (
    state: ActivityState = initialState,
    actions: ActivityActions
) => {

    if (actions.type === 'save-activity') {
        return {
            ...state,
            activities: [...state.activities, actions.payload.newActivity]
        }
    }

    return state


}