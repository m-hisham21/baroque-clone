import React, { useEffect } from 'react'
import "./Careers.css"
function Careers() {
  
    useEffect(() => {
      document.title = "Careers"
    }, [])
  
  return (
    <div>
      <h2 id='h2'> Careers</h2>
      <p><u><h3>AVAILABLE VACANCIES:</h3></u></p> 
      <br></br>
      <p className='pg'>Fashion Designer</p>
      <p className='pg'>Graphic Designer</p>
      <p className='pg'>Textile Designer</p>
      <p className='pg'>Social Media Marketer</p>
      <p className='pg'>Customer Service Representative</p>
      <p className='pg'>Accountants</p>
      <p className='pg'><h3>Be a part of our team send us your CV's at:</h3></p>
      <p className='pg'>jobs@baroque.pk</p>
      <hr className='hr'></hr>
      
    </div>
  )
}

export default Careers
