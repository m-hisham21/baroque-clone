import React from 'react'
import "./Profile.css"
import { useNavigate } from 'react-router-dom'
function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ backgroundColor: "rgb(226, 226, 226)", minHeight: "100vh", }}>
        <h2 style={{ backgroundColor: "rgb(226, 226, 226)" }} id='ph2'>Profile</h2>
        <div className='pdiv'>
          <h3>Sign in</h3>
          <p style={{ fontSize: "12pt" }}>Sign in or create an account</p>
          <button id='csbtn'>Continue with shop</button>
          <br /><br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <hr style={{ width: "40%" }} /> &nbsp;&nbsp; or &nbsp;&nbsp;<hr style={{ width: "40%" }} />
          </div>
          <input id='csip' type='email' placeholder='Email' required></input>
          <button id='pbtn'>➔</button>
          <br></br>
          <div>
            <input type='checkbox'></input>
            <spam> Email me with news and offers </spam>
          </div> <br></br>

          <p style={{ fontSize: "10pt", textAlign: "center" }}>By continuing, you agree to our<button className='polices' onClick={() => navigate("/policies/terms-of-service")}><u>Terms of service</u></button> </p>
          <br></br>
          <br></br>
          <button className='polices' onClick={() => navigate("/policies/privacy-policy")}><u>Privacy policy</u></button>
        </div>

      </div>

    </div>
  )
}

export default Profile
