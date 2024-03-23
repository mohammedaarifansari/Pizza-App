import React from 'react'
import './Subfooter.css'
import { assets } from '../../../assets/assets'

const Subfooter = () => {
  return (
    <div className='subfooter' id='app-download'>
      <h1>For Better Experience Download Pizza App</h1>
      <div className="subfooter-app">
        <img src={assets.googlepay} alt="" />
        <img src={assets.appstore} alt="" />
      </div>
    </div>
  )
}

export default Subfooter;
