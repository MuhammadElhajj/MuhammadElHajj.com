import React, { useState } from 'react'
import TabInfo from './TabInfo'
import Photo from '../Image/istockphoto-484717943-612x612.jpg'

function About() {

  const [ currentLabel, setCurrentLabel ] = useState(0)


  
  function Tabs() {

    function handleOnClick (CurrentTabINdex) {
      setCurrentLabel(CurrentTabINdex)
  
    }
    
    return (
      <div className='MainTab'>
        <div className='head-tab'>
          {
            TabInfo.map((item,index) => <h3 onClick={() => handleOnClick(index)} key={item.label} className={`Label ${currentLabel === index ? "activeTab": ""}`}>{item.label}</h3>)
          }
        </div>
        <div className= "TabContent" >
          {
            TabInfo[currentLabel] && TabInfo[currentLabel].content
          }
        </div>
      </div>
    )
  }
  return (
    <div className='About'  id='AboutMe'>
      <div className= "Part-one">
        <img src={Photo} alt="" className='About-photo' />
        <div>
        <h1 className='About-header'>About<span>Me</span></h1>
        <h4 className='StackDeveloper'><span className='Full-word'>Full</span>Stack Developer</h4>
        <p className="About-p" >I'm Muhammad, Syrian. I'm A Student In Al Ba'ath University In Homs City.
          I Am A Front End Web Developer . I Can Provide A Clean Code And Pixcl Perfact Design.
          I Also Make The Web Site More And More Active With A Nice Animation And Also With Java Script.
          I Can Use All Js Skills And Work Using It In Every Where And Every Time.</p>
      </div>
      </div>
      <div className= "Part-tow" >
        <Tabs />
      </div>

    </div>
  )
}

export default About
