import { combineReducers } from "redux";
import { productReducer,selectedProductReducer } from "./ProductReducer";
import {cartReducer,demoAddToCartReducer} from './CartReducer'
import {loginReducer} from './LoginReducer'
import {PayReducer} from './PaymentReducer'
 const reducers = combineReducers({
     allProducts:productReducer,
     product:selectedProductReducer,
     changeEdit:cartReducer,
     getError:loginReducer,
     getcartItemsdemo:demoAddToCartReducer,
     changeStatePay:PayReducer
 })
 export default reducers