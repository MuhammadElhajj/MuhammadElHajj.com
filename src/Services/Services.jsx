import React from 'react'
import ServicesContainer from './ServicesContainer'
import ServicesInfo from './ServicesInfo'
import photo3 from '../Image/istockphoto-484428447-612x612.jpg'

function Services() {
  return (
    <div className= 'Services'  id='Services'>
      <div className='Service-photo'>
        <div>
      <h1 className= "Services-h1">Muhammad<span className='Services-h1-span'>'s</span>ervices</h1>
      <p className='Service-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non tempore at, in debitis voluptatibus numquam quisquam iure quae repellendus nisi molestias commodi animi, sit velit eaque, excepturi nihil totam ut?</p>
      </div>
        <img src={photo3} alt="Photo1" className='Photo3' />
      </div>
      <div className="row services-container" >
{
    ServicesInfo.map(item => <ServicesContainer  icon = {item.icon} header = {item.header} p = {item.p}/>)
}
      </div>
    </div>
  )
}

export default Services
