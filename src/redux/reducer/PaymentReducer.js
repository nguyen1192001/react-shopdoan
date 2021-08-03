import { ActionTypes } from "../contains/action-types";
const initialsState = {
    payState:false
}
export const PayReducer = (state = initialsState ,{type,payload}) => {
    switch(type){
        case ActionTypes.CHANGE_STATE_PAYMENT:
            return {...state, payState: !state.payState}
        default:
            return {...state}
    }
}