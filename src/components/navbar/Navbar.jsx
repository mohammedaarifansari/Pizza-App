import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  let [menu, setMenu] = useState('home')
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo' />

        <ul className="navbar_menu">
          <Link to='/' onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ''}>Home</Link>
          <a href='#explore' onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ''}>Menu</a>
          <a href='#app-download' onClick={()=>setMenu("mobile_app")} className={menu === "mobile_app" ? "active" : ''}>Mobile app</a>
          <a href='#footer' onClick={()=>setMenu("contact_us")} className={menu === "contact_us" ? "active" : ''}>Contact us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt=""  />
          <div className="navbar-search-icon">
            <img src={assets.bag} alt="" />
          </div>
          <button onClick={()=>setShowLogin(true)}>Sing in</button>
        </div>
    </div>
  )
}

export default Navbar ;
