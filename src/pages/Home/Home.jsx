import React from 'react'
import {Link} from 'react-router-dom'
import homeHero from '../../assets/images/home-hero.png'
import homeImg1 from '../../assets/images/home1.jpg'
import homeImg2 from '../../assets/images/home3.jpg'
import './home.css'

const Home = () => {
  return (
    <div className="home-container container">
        <div>
        <img src={homeHero} alt="Home Hero Image" />
        <img src={homeImg1} alt="Home Hero Image" />
        <img src={homeImg2} alt="Home Hero Image" />
        </div>
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the 
          #vanlife movement. Rent the perfect van to 
          make your perfect road trip.
        </p>
        <Link to="vans">Find your van</Link>
    </div>
  )
}

export default Home