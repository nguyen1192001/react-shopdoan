import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { changeEditStatePay } from "../redux/actions/PaymentAction"
import { getUser, getCartItem, setUserSession } from '../Utils/Common'
const qs = require('qs');


function PayMent() {
    const user = getUser()

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
    let data = getCartItem();
    console.log("data", data);
    console.log("data1", user);
    let data1 = qs.stringify([data, user]);


    const paymentAip = () => {

        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post('http://localhost:4000/cart/', data1, config)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const closePay = () => {
        dispatch(changeEditStatePay())
    }


    return (
        <div className="modal">
            <i className="bx bxs-x-circle close-cart" onClick={closePay} />
            <div className="pay-title">
                <h2>order confirmation</h2>
            </div>
            <div className="pay-item">
                <div className="pay-information">
                    <span>name</span> <input type="text" name="name" defaultValue={user.name} onChange={changSession} /> <br />
                    <span>adress</span> <input type="text" name="adress" defaultValue={user.adress} onChange={changSession} /><br />
                    <span>phone</span> <input type="text" name="phone" defaultValue={user.phone} onChange={changSession} />

                </div>
                <div className="carttotals">
                    <div className="quantiti">
                        <h5>quantity</h5>
                        <h5>6</h5>
                    </div>
                    <div className="totals">
                        <h5>totals</h5>
                        <h5>$600</h5>
                    </div>
                </div>
                <div className="btn-pay">
                    <button id="myBtn" onClick={payment}>ĐẶT HÀNG</button>
                </div>
            </div>
        </div>
    )
}

export default PayMent