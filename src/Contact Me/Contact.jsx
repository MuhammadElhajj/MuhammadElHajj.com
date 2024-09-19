import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { BsTelegram } from 'react-icons/bs'
import { BiPhone } from 'react-icons/bi'
import { emailjs } from '@emailjs/browser'

function Contact({ width }) {

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyeyBvKHl-78GGS8zRPRHVSqzjfcD2N2IY_hED5btFkX9nXb2DWk9Yi0RpvGn1wFJSo/exec'
  const form = document.forms['submit-to-google-sheet']
  // const refForm = useRef
  
//   function SendEmail (e) {
// e.preventDefault()

// emailjs
//  .sendForm(
//   'gmail' ,
//   ''
//  )


  // window.addEventListener('submit', (event) => {
  //   // form.addEventListener('submit', e => {
  //     event.preventDefault()
  //     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //     .then(response => console.log('Success!', response))
  //     .catch(error => console.error('Error!', error.message))
        
  //     })
      // })

  return (
    <div className= "Contact-me" id='ContactMe'>
      <div className='Contact-container'>
      <div className="Part1" >
        <h2 className='contact-h2'><span>Contact</span>Me</h2>
        <div className='Contact-info' >
          <div className='Contact-email'><span><BsTelegram /></span>7.muhammad.7.ahmad@gmail.com</div>
          <div className='Contact-phone'><span><BiPhone /></span>Syria +963 987 654 321</div>
        </div>
        <div className='Contact-note'>
          <p>This is my offical personal web page for communicate with world wide companies
            for more information please click <a href="#a">here</a></p>
          <p>It contains alot of informatin about me ...</p>
          <p>I hope it will be good for you <br />
            if you want to show my <span>CV</span> please click <a href="#a">here</a></p>
        </div>
      </div>
      <div className= "Part2" >
        <form action="#" className='Form'  >
          <input type="text" name='Name' placeholder='Type Your Name Here' required />
          <input type="Email" name='Email' placeholder='Type Your Email' required />
          <textarea name="Note" id="" placeholder='type Your Message Here'></textarea>
          <button type='submit'>Send</button>
         
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact
