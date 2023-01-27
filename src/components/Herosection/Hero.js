import React, { useState, useEffect } from 'react'
import logo from '../../assests/Logo_Champagne_Black.png'
import logoblack from '../../assests/logo_black.png'
import day from '../../assests/themeday.png'
import night from '../../assests/night.png'
import './hero.css'

const Hero = () => {
    
    const [theme, setTheme] = useState("dark_theme");

    const handleClick = () => {
        theme === "dark_theme" ? setTheme("light_theme"): setTheme("dark_theme");
    }

    useEffect(() => {
        console.log("theme changed")
    },[theme])


  return (
    <div className={theme ==="dark_theme" ? "hero_section dark_theme": 'hero_section light_theme'}>
    <div className='hero_content'>
        <div className='header'>
            <div className='logo'><img src={theme ==="dark_theme" ? logo: logoblack} alt=""/></div>
            <div className='theme_button'><img onClick={handleClick} src={theme ==="dark_theme" ? day: night } alt=""/></div>
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