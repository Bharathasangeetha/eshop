import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from "../Assets/logo.png"
import cart from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu,setMenu]=useState("shop");
  const {getTotalItems}=useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className="nav-logo">
<img src={logo} alt="" />
<p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
           
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to='/'>Shop{menu==="shop"?<hr/>:<></>}</Link>  </li>
            <li onClick={()=>setMenu("women")}><Link style={{textDecoration:"none"}} to='/women'>Women{menu==="women"?<hr/>:<></>}</Link></li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:"none"}} to='/men'>Men{menu==="men"?<hr/>:<></>}</Link></li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}} to='/kids' >Kids{menu==="kids"?<hr/>:<></>}</Link> </li>
        </ul>
      <div className="nav-login-cart">
      <Link to='/login'><button>Login</button></Link> 
       <Link to='/cart'><img src={cart} alt="" /></Link>               
        </div>
        <div className="nav-cart-count">{getTotalItems()}</div>
    </div>
  )
}

export default Navbar
