import { ActionTypes } from "../contains/action-types";

export const changeEditState  = ()=>{
    return{
        type:ActionTypes.CHANGE_EDIT_STATE
    }
}

export const demoaddcart = (cartItems)=>{
    return {
        type:ActionTypes.DEMO_ADD_TO_CART,
        payload:cartItems
    }
}

export const removeCartItem = (cartItems)=>{
    return {
        type:ActionTypes.REMOVE_ITEM,
        payload:cartItems  
    }
}

export const addCart = (product)=>(dispatch,getState)=>{
    const cartItems = getState().cartItems.slice() // phương thức slice lấy bản sao của mảng ban đầu
    const alreadyExits = false
    cartItems.forEach( (x) =>{
        if(x._id === product._id){
            alreadyExits = true
            x.count++
        }
    })
    if(!alreadyExits){
        cartItems.push({...product,count:1})
    }
    dispatch({
        type:ActionTypes.ADD_TO_CART,
        payload:{cartItems}
    })
    sessionStorage.setItem("cartItems",JSON.stringify(cartItems))
}

// export const removeCartItem = (items,product) =>(dispatch)=>{
//     const cartItems = items.slice().filter((x)=> x._id !== product._id)
//     dispatch({
//         type:ActionTypes.REMOVE_ITEM,
//         payload:{cartItems}
//     })
//     sessionStorage.setItem(JSON.stringify(cartItems))
// }