import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  let [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='nav'>
      <Link to='/' style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Deep Cuts and Broken Hearts</p>
      </Link>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link to='/' style={{ textDecoration: 'none' }}>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("metalcore")}}><Link to='/metalcore' style={{ textDecoration: 'none' }}>Metalcore</Link>{menu==="metalcore"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("deathcore")}}><Link to='/deathcore' style={{ textDecoration: 'none' }}>Deathcore</Link>{menu==="deathcore"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("post-hardcore")}}><Link to='/post-hardcore' style={{ textDecoration: 'none' }}>Post-Hardcore</Link>{menu==="post-hardcore"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
