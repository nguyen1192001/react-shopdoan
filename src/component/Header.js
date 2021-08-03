import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeEditState } from '../redux/actions/cartAction'
import {  removeUserSession } from '../Utils/Common';
import {BrowserRouter as Router,Link} from "react-router-dom";
import { changeEditLogin } from '../redux/actions/login';

function Header() {
  const dispatch = useDispatch()
  const isEdit = useSelector((state) => state.changeEdit.isEdit)
  const elogin = useSelector((state) => state.getError.login)

  const isChange = () => {
    dispatch(changeEditState())
    console.log(isEdit)
  }
  const ViewLogOut = () => {
    removeUserSession()
    dispatch(changeEditLogin())
  }


  return (

    <header id="home" className="header">
      <nav className="nav">
        <div className="navigation container">
          <div className="logo">
            <h1>shivan</h1>
          </div>
          <div className="menu">
            <div className="top-nav">
              <div className="logo">
                <h1>shivan</h1>
              </div>
              <div className="close">
                <i className="bx bx-x" />
              </div>
            </div>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/" className="nav-link">home</a>
              </li>
              <li className="nav-item">
                <a href="product.html" className="nav-link">product</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
              
              {
                 elogin === false ? (<li className="nav-item nav-link"  >
                <Link to="/" onClick={ViewLogOut}>Log Out</Link>
                </li>) :(<li className="nav-item nav-link"  >
                  <Link to="/dashboard">Log In</Link>
                </li>)
              }
               
              
              <li className="nav-item">
                <i className="bx bx-shopping-bag" onClick={isChange} />
              </li>
            </ul>

          </div>
          <a href="cart.html" className="cart-icon">
            <i className="bx bx-shopping-bag" />
          </a>
          <div className="hamburger">
            <i className="bx bx-menu" />
          </div>
        </div>
      </nav>
      {/* hero */}
      <img src="./image/banner.png" className="hero-img" alt="" />
      <div className="hero-content">
        <h2><span className="discount">70%</span>SALE OFF</h2>
        <h1>
          <span>Summer Vibes</span>
          <span>mode on</span>
        </h1>
        <a href="/" className="btn">Shop now</a>
      </div>
    </header>
  )
}

export default Header

