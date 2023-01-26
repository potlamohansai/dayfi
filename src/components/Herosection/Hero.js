import React from 'react'
import logo from '../../assests/Logo_Champagne_Black.png'
import day from '../../assests/themeday.png'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero_section'>
    <div className='hero_content'>
        <div className='header'>
            <div className='logo'><img src={logo}/></div>
            <div className='theme_button'><img src={day}/></div>
        </div>
        <div>
            <h1 className='headline1'>One api that makes metaverse</h1> 
            <h1 className='headline2'> affordable & liquid.</h1>
        </div>
        <div>
            <p>Become a bull not a bear, Increase  your dapp adoption
                with dayfis trailblazing non-custodial buy now pay later
                infrastructure. </p>
        </div>
        <div className='subscribe'><button>Subscribe</button></div>
    </div>
    </div>
  )
}

export default Hero