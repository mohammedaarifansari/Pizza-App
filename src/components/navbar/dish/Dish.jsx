import React from 'react'
import './Dish.css'
import {pizza} from '../../../assets/assets'

const Dish = () => {
  return (
    <div className='dish'>
      <div className="heading">
        <h1>Top dishes near you</h1>
      </div>
        <div className="dish-item">
          {pizza.map((item,index)=>{
            return (
              <div key={index} className="card">
                <div className="image">
                  <img src={item.img} alt="" />
                </div>

                <div className="dish-name">
                  <h2>{item.heading}</h2>
                  <span><img src={item.star} alt="" /></span>
                </div>
                <p className='item-detail'>{item.paragraph}</p>
                <p className='price'>{item.price}</p>
              </div>
            )
          })}
      </div>

    </div>
  )
}

export default Dish;
