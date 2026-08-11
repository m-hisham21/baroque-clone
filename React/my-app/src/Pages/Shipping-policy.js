import React from 'react'
import "./Shipping-policy.css"
import { Link } from 'react-router-dom'
function Shipping_policy() {
  return (
    <div>
      <h2 id='sph2'>Shipping Policy</h2>
      <div className='spdiv'>
        <p>Once the order is dispatched, you will be sent a shipping confirmation email with your carrier information and tracking number, be sure to check Junk/Spam folder as well.</p>
        <p>We use couriers including but not limited to TCS, PostEx, Leopards, Trax, Swyft.</p>
        <p>We may switch couriers from time to time to ensure the best possible service and best possible pricing to help our customers.</p>
        <p>You can check the expected dispatch time on our <Link href="">Dispatch Timeline</Link>. </p> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      </div>
    </div>
  )
}

export default Shipping_policy
