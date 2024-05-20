import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='image-logo'>
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <div className='nav-menu'>
        <div>Shop</div>
        <div>Men</div>
        <div>Women</div>
        <div>Kids</div>
      </div>
      <div className='login-btn'>
        <button className='btn-login'>Login</button>
      </div> 
      <div className='cart-logo'>
        <img src={cart} alt="" /></div> 
    </div>
  )
}

export default Navbar