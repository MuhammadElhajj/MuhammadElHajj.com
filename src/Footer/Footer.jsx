import React from 'react'
import FooterLink from './FooterLink'

function Footer() {
    return (
        <div className= "footer"  id='Footer'>
            <h4 className='Footer-h4'>Made by <span>Muhammad Elhajj</span> in 24 April 2024 @m3rifa7 ..</h4>
            <div className='row Footer-link' >


{
    FooterLink.map(item => <div className='link-list col-6 col-lg-3' >
        <h2>{item.h3}</h2>
        {
            item.link.map(a => <h3><a href="#e">{a.a}</a></h3>)
        }
    </div>)
}
            
            </div>
            <div className='Cpoy-write'>
                <span>C</span>
                This Web has
                <a href="#e">Copy Write</a>
            </div>
        </div>
    )
}

export default Footer
