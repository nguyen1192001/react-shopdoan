import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import { changeEditState,removeCartItem } from '../redux/actions/cartAction'
import { changeEditStatePay } from "../redux/actions/PaymentAction"

function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.getcartItemsdemo.CartItems)
  const count = useSelector((state) => state.getcartItemsdemo.count)


  const ischange = () => {
    
    dispatch(changeEditState())
  }

  const removeItemInCart = (id) =>{
    
    dispatch(removeCartItem(id))  
  }
  const showPayment=()=>{
    sessionStorage.setItem("cartItems",JSON.stringify(cartItems))
   dispatch(changeEditStatePay())
  }

 console.log("caritem 1",cartItems) 
  let sum = 0
  cartItems.forEach(element => {
    return sum = sum + parseFloat(element.price) // totals in cartitems
  });
 

  const renderCartList = cartItems.map((item) => {
    const { id,title, image, price } = item
    // console.log(item.data)

    return (
      <div className="product_cart">
        <div className="pro_icon">
          <i className="bx bx-x" onClick = {()=>removeItemInCart(id)} />
        </div>
        <div className="product-item">
          <div className="product-img">
            <img src={image} alt="" />
          </div>
          <h5>{title}</h5>
        </div>
        <div className="total-price">${price}</div>
      </div>
    )
  })

  return (
    <div className="modal">
      <i className="bx bxs-x-circle close-cart" onClick={ischange} />
      <h3>shopping cart</h3>
      {renderCartList}

      <div className="carttotals">
        <div className="quantiti">
          <h5>quantity</h5>
          <h5>{count}</h5>
        </div>
        <div className="totals">
          <h5>totals</h5>
          <h5>${sum}</h5>
        </div>
      </div>

      <div className="btn-pay">
            <button onClick={showPayment}>MUA HÀNG</button>
      </div>

    </div>
  )
}

export default Cart