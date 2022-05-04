import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { changeEditStatePay } from "../redux/actions/PaymentAction"
import { getUser, getCartItem, setUserSession } from '../Utils/Common'
import { removeCartItem } from '../redux/actions/cartAction';
const qs = require('qs');


function PayMent() {
    const user = getUser()
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year  = date.getFullYear()
    let nowdate = month + "/" + day + "/" + year

    const count = useSelector((state) => state.getcartItemsdemo.count)
  const cartItems = useSelector((state) => state.getcartItemsdemo.CartItems)
  


    let [newUser, setNewuser] = useState({
        name: user.name,
        adress: user.adress,
        phone: user.phone,
    })

    let changSession = (e) => {
        let { value, name } = e.target;
        setNewuser({
            ...newUser,
            [name]: value,
        })
    }


    const dispatch = useDispatch()
    const payment = () => {
        user.name = newUser.name;
        user.adress = newUser.adress;
        user.phone = newUser.phone;
        sessionStorage.setItem("user", JSON.stringify(user))
        paymentAip()
        alert("ĐẶT HÀNG THÀNH CÔNG, CẢM ƠN BẠN")
        dispatch(changeEditStatePay())

    }
    let data = cartItems;

    let sum = 0
    data.forEach(element => {
        return sum = sum + parseFloat(element.gia) // totals in cartitems
    });
    let trangthaiddh = "chuaxacnhan"
    let data1 = qs.stringify([data, user,count,sum,nowdate,trangthaiddh]);

    const paymentAip = () => {
       
        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post('http://localhost:4000/cart/', data1, config)
            .then(function (response) {
                console.log(">>>>>>> respont cart",response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        
       

    }
    const closePay = () => {
        dispatch(changeEditStatePay())
    }
    const removeItemInCart = (id) => {

        dispatch(removeCartItem(id))
    }
    const renderCartList = data.map((item , key) => {

        const { _id, tensp, hinhanh, gia } = item
        // console.log(item.data)

        return (
            <div key={key} className="product_cart">
                <div className="pro_icon">
                    <i className="bx bx-x" onClick={() => removeItemInCart(_id)} />
                </div>
                <div className="product-item">
                    <div className="product-img">
                        <img src={hinhanh} alt="" />
                    </div>
                    <h5>{tensp}</h5>
                </div>
                <div className="total-price">${gia}</div>
            </div>

        )
    })


    return (
        <div className="modal">
            <i className="bx bxs-x-circle close-cart" onClick={closePay} />
            <div className="pay-title">
                <h2>order confirmation</h2>
            </div>
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
            <div className="pay-item">
                <div className="pay-information">
                    <span>name</span> <input type="text" name="name" defaultValue={user.tenkh} onChange={changSession} /> <br />
                    <span>adress</span> <input type="text" name="adress" defaultValue={user.diachi.quan+" "+user.diachi.dcchitiet} onChange={changSession} /><br />
                    <span>phone</span> <input type="text" name="phone" defaultValue={user.sdt} onChange={changSession} />

                </div>
                <div className="btn-pay">
                    <button id="myBtn" onClick={payment}>ĐẶT HÀNG</button>
                </div>
            </div>
        </div>
    )
}

export default PayMent