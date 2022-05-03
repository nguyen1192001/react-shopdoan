import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAdreeRegister, getErrorLogin, getUserLogin } from '../redux/actions/login';
import {  setUserSession } from '../Utils/Common';

const qs = require('qs');


function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [tenkh,setTenkh] = useState("")
    const [quan,setQuan] = useState("")
    const [dcchitiet,setDCCT] = useState("")
    const [sdt,setSDT] = useState("")
    const dispatch = useDispatch()
    const elogin = useSelector((state) => state.getError.login)
    const cartItems = useSelector((state) => state.getcartItemsdemo.CartItems)
    const user = useSelector((state)=>state.getError.user)
    // const login = () => {
    //     loginApi()
    //     console.log(">>>>>>>>>>>>>>>>", elogin) 
    // }

    const RegisterCustommer = () => {
        
        console.log("data register",{ email, password,tenkh,sdt ,quan,dcchitiet})

        let data = qs.stringify({ email, matkhau : password,tenkh,sdt ,quan,dcchitiet});
        console.log("data",data)
        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post('http://localhost:4000/user/register', data, config)
            .then( (response) => {
               console.log("response register",response)
               Redirect("/")
                
            })
            .catch(function (error) {
                console.log(error);
            });
           
    }

    const loadAdress = () => {
        axios.get("http://localhost:4000/user/adress").then((response)=>{
            console.log(">>>>. respone",response.data)
            dispatch(getAdreeRegister(response.data))
        }).catch((err)=>{
            console.log("err",err)
        })
    }
    
    const addressList = useSelector((state)=>state.getError.adress)
    useEffect(()=>{
        loadAdress()
    },[])

    console.log("address list",addressList)
    const renderAdress = () => {
        return <select className="form-select form-login-item" onChange={(values)=>{setQuan(values.target[values.target.selectedIndex].value)}} name="diachi">
            {
                addressList.map((item)=>{
                    return <option value={item.path_with_type}>
                        {
                             item.path_with_type
                        }
                    </option>
                })
            }
        </select>
    }

    
    

    return (
        <div className="cover">
            <div className="register">
                <div className="icon-login">
                    <div className="icon-circle">
                        <i className="bx bxs-home-circle" />
                    </div>
                </div>
                <h2>REGISTER CUSTOMMER</h2>
                <div className="form-register">
                    <div className="form-login-item">
                        <i className="bx bxs-user" />
                        <input type="text" name="email" value={email} placeholder="user name" onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="form-login-item">
                        <i className="bx bxs-lock-alt" />
                        <input type="password" name="matkhau" value={password} placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="form-login-item">
                        <i className="bx bxs-lock-alt" />
                        <input type="text" name="hoten" value={tenkh} placeholder="hoten" onChange={(e) => { setTenkh(e.target.value) }} />
                    </div>
                    <div className="form-login-item">
                    <i className="bx bxs-lock-alt" />
                    {renderAdress()}
                    </div>
                    <div className="form-login-item">
                        <i className="bx bxs-lock-alt" />
                        <input type="text" name="dcchitiet" value={dcchitiet} placeholder="dcchitiet" onChange={(e) => { setDCCT(e.target.value) }} />
                    </div>
                    <div className="form-login-item">
                        <i className="bx bxs-lock-alt" />
                        <input type="text" name="sdt" value={sdt} placeholder="sdt" onChange={(e) => { setSDT(e.target.value) }} />
                    </div>
                </div>
                <div className="btn-login" >
                    <input type="button" value="register" onClick={RegisterCustommer} />
                </div>

            </div>
        </div>
    )
}


export default Register;