import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/navbar/header/Header'
import Explore from '../../components/navbar/explore_menu/Explore'
import Dish from '../../components/navbar/dish/Dish'
import Subfooter from '../../components/navbar/subfooter/Subfooter'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
    <div>
      <Header/>
      <Explore category={category} setCategory={setCategory} />
      <Dish category={category} />
    </div>
    <Subfooter/>
    </>
  )
}

export default Home
