import { ActionTypes } from "../contains/action-types";
const initialsState = {
    isEdit: false,
    CartItems: [],
    count: 0
}
export const cartReducer = (state = initialsState, { type, payload }) => {
    switch (type) {
        case ActionTypes.CHANGE_EDIT_STATE:

            return { ...state, isEdit: !state.isEdit }

        default:
            return { ...state }
    }
}

export const demoAddToCartReducer = (state = initialsState, { type, payload }) => {
    switch (type) {
        case ActionTypes.DEMO_ADD_TO_CART:
            return { ...state, CartItems: [...state.CartItems, payload], count: state.count + 1 }
        case ActionTypes.REMOVE_ITEM: 
            let listCartChange = state.CartItems;
            let index = listCartChange.findIndex((cart)=>{
              
      
                return cart.id === payload;  
                
            })
            if(index !== -1){
                listCartChange.splice(index,1); 
            }
            
            [...state.CartItems] = listCartChange;
            
            return   {...state,count: state.count - 1}
        default:
            return state
    }
}

// export const selectedCartItemReducer = (state = { CartItems: JSON.parse(sessionStorage.getItem("cartIems") || "[]") },
//     { type, payload }) => {
//     switch (type) {
//         case ActionTypes.ADD_TO_CART:
//             return { CartItems: payload.CartItems }
//         case ActionTypes.REMOVE_ITEM:
//             return { CartItems: payload.CartItems.filter((item) => item.id !== payload) }
//         default:
//             return state
//     }
// }