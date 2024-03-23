import React from 'react'
import './Footer.css'
import { assets } from '../../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-box">
        <div className="footer-box-left">
          <h1>Pizza App</h1>
          <p className='footer-para'> Choose among a variety of extravagant toppings. Customized Dominos Pizza for your special guest. We will call you for order details. Live kitchen counter setup will be done at the venue.</p>
          <div className="footer-contaict">
                <img className='contaict' src={assets.facebook} alt="" />
                <img className='contaict' src={assets.twitter} alt="" />
                <img className='contaict' src={assets.linkedin} alt="" />
          </div>
        </div>
        <div className="footer-box-centre">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privecy policy</li>
          </ul>
        </div>
        <div className="footer-box-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-0123456789</li>
            <li>contact@pizzaapp.com</li>
          </ul>
        </div>
      </div>
      <div className="dot"></div>
      <div className="footer-copyright">
        Copyright 2024 © pizza app All Right Reseved.
      </div>
    </div>
  )
}

export default Footer;
