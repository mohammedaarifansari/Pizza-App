import React from 'react'
import './Explore.css'
import { menu } from '../../../assets/assets'

const Explore = ({ category, setCategory}) => {
  return (
    <div className='explore' id='explore'>
      <div className="explore-heading">
        <h1>Explore our menu</h1>
          <p>Choose among a variety of extravagant toppings. Customized Domino's Pizza for your special guest. We will call you for order details. Live kitchen counter setup will be done at the venue</p>
        <div className="explore-menu-list">
          {menu.map((item,index)=>{
            return (
              <div onClick={()=> setCategory(prev=>prev===item.title?"All":item.title)} key={index} className="explore-menu-list-item">
                <img className={category===item.title?"active":""} src={item.img} alt="" />
                <p>{item.title}</p>
              </div>
            )
          })}
          
        </div>
        <div className="dot"></div>
      </div>
    </div>
  )
}

export default Explore;
