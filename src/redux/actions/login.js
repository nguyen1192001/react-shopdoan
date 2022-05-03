import { ActionTypes } from "../contains/action-types";
export const getErrorLogin = (login)=>{
    return{
        type:ActionTypes.GET_ERROR_LOGIN,
        payload:login
    }
}
export const getUserLogin = (user)=>{
    return{
        type:ActionTypes.GET_USER_LOGIN,
        payload:user
    }
}
export const changeEditLogin  = ()=>{
    return{
        type:ActionTypes.CHANGE_EDIT_STATE_LOGIN
    }
}
export const getAdreeRegister  = (adress)=>{
    console.log("address in getAddressregister",adress)
    return{
        type:ActionTypes.GET_ADDRESS_REGISTER,
        payload:adress
    }
}