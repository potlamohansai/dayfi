import React from 'react'
import polygon from '../../assests/polygon.png'
import vector from '../../assests/Vector.png'
import './partners.css'

const Partners = () => {
  return (
    <div>
    <div className='partners_maindiv'>
        <div className='heading'>Partners</div>
        <div className='listofpartners'>
            <ul className='list'>
                <li><img src={polygon} alt="polygon"/></li>
                <li><img src={polygon} alt="polygon"/></li>
                <li><img src={polygon} alt="polygon"/></li>
                <li><img src={polygon} alt="polygon"/></li>
            </ul>
        </div>
    </div>
    <div className='partner'><p>Powered by: </p><img className='poweredby' src={vector} alt="polygon"/><p>Polygon</p></div>
    </div>
    
  )
}

export default Partners