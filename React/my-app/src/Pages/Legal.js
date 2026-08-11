import React from 'react'
import "./Legal.css"
import { Link } from 'react-router-dom'
function Legal() {
  return (
    <div>
      <h2 id='lh2'>Legal</h2>
      <div className='ldiv'>
        <p>For any legal queries write to us at: <Link href=''>legal@baroque.com.pk</Link> or <Link href=''>legal@baroque.pk</Link></p>
        <p>Company Address: Bilal Textile, Tariq Ismail Road, Raiwind Road, Lahore</p>
        <br></br>
        <br></br>
      </div>

    </div>
  )
}

export default Legal
