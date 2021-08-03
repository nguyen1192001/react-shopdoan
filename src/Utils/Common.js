export const getUser = () =>{
    const userStr = sessionStorage.getItem("user");
    if(userStr) return JSON.parse(userStr)
    else return null
}
export const getCartItem = () =>{
    const cartStr = sessionStorage.getItem("cartItems")
    if(cartStr) return JSON.parse(cartStr)
    else return null
}
export const getToken = () =>{
    return sessionStorage.getItem("token") || null
}

export const setUserSession = (token,user,cartItems)=>{
    sessionStorage.setItem("token",token)
    sessionStorage.setItem("user",JSON.stringify(user))
    sessionStorage.setItem("cartItems",JSON.stringify(cartItems))
}
export const removeUserSession = ()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("cartItems")
}