import { ActionTypes } from "../contains/action-types";
export const setProduct = (products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}
export const selectedProducts = (product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}
export const removeSelectedProduct = (product)=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}