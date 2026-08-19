import React, { useEffect } from 'react'
import "./Contact-us.css"

function Contact_us() {

  useEffect(() => {
    document.title = "Contact Us"
  }, [])

  return (
    <div>
      <h1 id='cuh1'> Contact </h1>
      <input className='input' type='text' required placeholder='Name'></input>
      <input className='input' type='text' required placeholder='E-mail'></input>
      <br></br>
      <textarea cols={86} rows={5} className='textarea' required placeholder='Message'></textarea>
      <br></br>
      <button className='cubtn'>Send Message</button>
      <br></br>
      <br></br>

    </div>
  )
}

export default Contact_us
