import { ActionTypes } from "../contains/action-types";
const initialsState = {
    login: true,
    user:[]
}
export const loginReducer = (state = initialsState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_ERROR_LOGIN:
            return { ...state, login: payload }
        case ActionTypes.CHANGE_EDIT_STATE_LOGIN:
            return { ...state, login: !state.login }
        case ActionTypes.GET_USER_LOGIN:
            return{...state,user:payload}
        default:
            return state
    }
}