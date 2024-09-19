import React from 'react'

function ServicesContainer(props) {
  return (
    <div className="ServicesContainer col-6 col-lg-4 col-md-4 ">
      <div className='ServicesContainer-second' >
<div className= 'Services-icons'>{props.icon}</div>
<div className="Services-header" >{props.header}</div>
<div className= 'Services-p' >{props.p}</div>
<a href='#d' className = "Services-a">Learn more</a>
      </div>
    </div>
  )
}

export default ServicesContainer
