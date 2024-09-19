import React, { useEffect, useState } from 'react'
import MenuHomeData from './MenuHomeData'
import { HiBars4 } from 'react-icons/hi2'
import SocialMediaIcon from './SocialMedia'
import { FaAngleDown } from 'react-icons/fa'
import photo1 from '../Image/istockphoto-1299566435-612x612.jpg'
import Nav from './Nav'
import lOGO from '../Image/squarespace-logo_icon-icons.com_57069.png'
import { FaSearch } from 'react-icons/fa';



function Home ({openSideabr}) {

    return (
        <div className='Home'>
            <div className= "Home-Page"  >
                <div className="social-media-homePage"  >
                    {
                        SocialMediaIcon.map(item => <span
                             className='Social-media-icon'
                              style={item.style}
                              title={item.title}
                        >
                            {item.name}
                            </span>)
                    }
                    <span className='Visit-Social'>Visit My Social Media</span>
                </div>
                <div className= "Content-homePage" >
                    
                    <img src={photo1} alt="img" className='Photo1' />
                    <div className= "content-of-page"  >
                        <h4>Hello, This is me</h4>
                        <h1>Muhammad<span>El</span>Hajj</h1>
                        <h3><span>Full</span>Stack Developer</h3>
                        <p>Making crazy designs is my goal ..</p>
                        <p>The best Choisce ..</p>
                    </div>
                </div>
                    <div class= "buttons" >
                        <a href="../Cv/MyCv.pdf" download>Download CV</a>
                        <a href="#ContactMe">Contact Me</a>
                    </div>
            </div>
        </div>
    )


}

export default Home
