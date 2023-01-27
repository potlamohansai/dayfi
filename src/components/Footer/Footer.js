import React from 'react'
import './footer.css'
import arrow from '../../assests/Arrow.png'
import twitter from '../../assests/twitter.png'
import linkedin from '../../assests/linkedin.png'
import discord from '../../assests/discord.png'


const Footer = () => {
  return (
    <div className='footer_maindiv'>
        <div className='subscribe_maindiv'>
            <div>
                <h2 className='sub_heading'>Subscribe to our newsletter!</h2>
                <p className='sub_para'>Stay updated on the changes we bring to Web3</p>
            </div>
            <div className='inputdiv'>
                <input placeholder='someone@example.com' className='inputfield'/>
                <a type="button" className='inputbutton'><img src={arrow}/> </a>
            </div>
        </div>
        <div className='creed'>Creed : Decentralization : Privacy : Freedom</div>

        <div className='container'>
        <div className='two'>
            <ul className='footerlist'>
                <li>Partner with us</li>
                <li>For developers</li>
                <li>Docs & Roadmap</li>
                <li>Brand gudieliness/ media kit</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className='line'></div>
        <div className='socialmedia one'>
            <a href='https://twitter.com/'><img src={twitter} alt=""/></a>
            <a href='https://twitter.com/'><img src={linkedin} alt=""/></a>
            <a href='https://twitter.com/'><img src={discord} alt=""/></a>
        </div>
        </div>
    </div>
  )
}

export default Footer