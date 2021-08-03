import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getErrorLogin, getUserLogin } from '../redux/actions/login';
import {  setUserSession } from '../Utils/Common';

const qs = require('qs');


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const elogin = useSelector((state) => state.getError.login)
    const cartItems = useSelector((state) => state.getcartItemsdemo.CartItems)
    const user = useSelector((state)=>state.getError.user)
    const login = () => {
        loginApi()
        console.log(">>>>>>>>>>>>>>>>", elogin) 
    }

    const loginApi = () => {
        let data = qs.stringify({ email, password});
        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post('http://localhost:4000/user', data, config)
            .then(function (response) {
                dispatch(getErrorLogin(response.data.error))
                dispatch(getUserLogin(response.data))
                if(response.data.data){ 
                    setUserSession(true,response.data.data,cartItems)
                }
                
            })
            .catch(function (error) {
                console.log(error);
            });
           
    }

    
    

    return (
        <div className="cover">
            <div className="login">
                <div className="icon-login">
                    <div className="icon-circle">
                        <i className="bx bxs-home-circle" />
                    </div>
                </div>
                <h2>LOG IN</h2>
                <div className="form-login">
                    <div className="form-login-item">
                        <i className="bx bxs-user" />
                        <input type="text" name="email" value={email} placeholder="user name" onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="form-login-item">
                        <i className="bx bxs-lock-alt" />
                        <input type="password" name="password" value={password} placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                </div>
                <div className="btn-login" >
                    <input type="button" value="login" onClick={login} />
                </div>

            </div>
        </div>
    )
}


export default Login;