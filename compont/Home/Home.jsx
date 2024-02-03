import React from 'react'
import "./Home.scss"
import Slider from '../Slider/Slider'
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct'
import Categories from '../Categories/Categories'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div className='home'>
        <Slider/>
        <FeaturedProduct type="featured "/>
        <Categories/>
        <FeaturedProduct type="trending "/>
        <Contact/>
    </div>
  )
}

export default Home