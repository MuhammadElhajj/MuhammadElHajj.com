import React, { useState } from 'react'
import MyWorkContainer from './MyWorkContainer'
import MyWorkInfo from './MyWorkInfo'
import { BiX } from 'react-icons/bi'
import photo4 from '../Image/istockphoto-484430283-612x612.jpg'
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

function Work({  showMore, click }) {





  return (
    <div className='text-center Work' id='Work'>
      <div className='work-image-part'>
        <img src={photo4} alt="" style={{width:'40%'}} />
        <div className='Work-p-container'>
      <h1 className= "My-work"><span>My</span>Work</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum obcaecati delectus cupiditate. In minus libero cupiditate vitae dolor neque, voluptas, quae accusantium nostrum ad repudiandae cumque quas nisi ex pariatur?</p>
      </div>
      </div>




      <div className='row work-container'>
        {
          MyWorkInfo.map(item => < MyWorkContainer src={item.src} h1={item.h1} p={item.p}  />)
        }
      </div>



      <div className='Show-more'>
        <a href='#S' onClick={click}>{showMore ? "Close" : "Show More"}</a>
      </div>
      {
        showMore && <div className= 'workAlert'>
          <BiX className='BiX' onClick={click} />
          <h2>More Work For Me</h2>
          <p>Sorry</p>
          <p>There are not More Works For me Right Now !!! </p>
          <button onClick={click}>Okey</button>
        </div>
      }
    </div>
  )
}
export default Work
