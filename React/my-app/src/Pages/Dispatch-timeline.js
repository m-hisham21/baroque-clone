import React, { useEffect } from 'react'
import "./Dispatch-timeline.css"
function Dispatch_timeline() {

  useEffect(() => {
    document.title = "Dispatch Timeline"
  }, [])

  return (
    <div>
      <h1 id='dth'> Dispatch-timeline </h1>
      <hr className='dthr'/>
      <details className='details'>
        <summary className='sumry'><b> &nbsp; LOCAL DISPATCH TIME</b></summary>
        <p id='pp'>
          FOR UNSTITCHED AND READY TO WEAR: WITHIN 1 WEEK <br />
          FOR STITCHED : WITHIN 3 WEEKS. <br />
          CUSTOMIZE STITCHING : 1 WEEK EXTRA. <br />
        </p>
      </details>
      <hr className='dthr' />
       
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  )
}

export default Dispatch_timeline
