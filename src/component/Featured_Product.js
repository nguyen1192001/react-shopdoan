import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { demoaddcart,changeEditState } from '../redux/actions/cartAction'
import {  setProduct } from '../redux/actions/productActions'
import { getToken } from '../Utils/Common';


function Featured_Product() {
  const products = useSelector((state) => state.allProducts.products)
  const cartItems = useSelector((state)=>state.getcartItemsdemo.CartItems)
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:4000/product")
      .catch((err) => {
        console.log("error: ", err)
      })
    dispatch(setProduct(response.data))
  }

 
  const getItemProduct = (id) => {
      axios.get(`http://localhost:4000/product/${id}`)
      .then((item)=>{
        dispatch(demoaddcart(item.data))
       
      }).catch((error)=>{
        console.log("err",error)
      })
  }
  console.log("cart item in freature product: ",cartItems)



  useEffect(() => {
    fetchProducts()
  }, [])


  const isChange = (id) => {
    if(getToken()){    // kiểm tra đăng nhập 
      dispatch(changeEditState())   
      getItemProduct(id)
    }else{
      // <Redirect  to="/dashboard" />
      alert("hãy đăng nhập để có thể mua sắm nhé ")
    }
      
  }
  // console.log(products)
  const renderProductList = products.map((product) => {
    const { id, title, image, price } = product
    return (
      <div className="product">
          <div className="product-header">
            <img src={image} alt="" />
            <ul className="icons">
              <span><i className="bx bx-heart" /></span>
               <span><i className="bx bx-shopping-bag" onClick={()=>{isChange(id)}} /></span> 
              <span><i className="bx bx-search" /></span>
            </ul>
          </div>
          <div className="product-footer">
            <a href="/">
              <h3>{title}</h3>
            </a>
            <div className="rating">
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
            </div>
            <h4 className="price">${price}</h4>
          </div>
      </div>
    )
  })
  return (
    <section className="section featured">
      <div className="title">
        <h1> Products</h1>
      </div>
      <div className="product-center container">
        {renderProductList}
      </div>
    </section>
  )
}
export default Featured_Product