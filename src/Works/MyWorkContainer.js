import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css'


function MyWorkContainer(props) {
    return (
        <div className='col-6 col-lg-4 col-md-4  MyWorkContainer'>
            <div className='My-work-Container'>
                <img className='work-img' src={props.src} alt='not Found' />
                <div className='Layer'>
                    <h1 className= 'work-h2'>{props.h1}</h1>
                    <p className= 'work-p'>{props.p}</p>
                    <a className='work-a'href='#G'>
                        <FaExternalLinkAlt />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MyWorkContainer
