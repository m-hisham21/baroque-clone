import React from 'react'
import "./Checkout.css"
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Checkout() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="baroque">
        <img width={160} src="https://baroque.com.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1697476590&width=805" alt="" />
      </div>
      <div className="warpper">
        <div className="checkout-l-side">
          <h4 className='co-h4'> Contact <span id='signin'><Link to="/profile">sign in</Link></span></h4>
          <input type="Email" name="" id="email" placeholder='Email' />
          <OverlayTrigger overlay={<Tooltip> Used for your order confrimation and cart reminders </Tooltip>}>
            <Button id='email-info' variant="transprent">?</Button>
          </OverlayTrigger>
          <br />
          <div className='cb-div'>
            <input type="checkbox" id='checkbox' />
            <span >Email me with news and offers</span>
          </div>
          <div className="web-link">
            <p> &nbsp; ⓘ <b>International Website</b> </p>
            <p className='link-det'>To deliver products outside of Pakistan visit our International Website:</p>
            <p className='link-det'><Link to="https://baroque.com.pk">https://baroque.com.pk</Link></p>
          </div>

          <div className="delivery-info">
            <h5 className='headings-h5'>Delivery</h5>
            <button className="country-other">
              <span id='c-r'>Country/Region</span>
              <select name="" id="option-pak" >
                <option value="+92"> Pakistan</option>
              </select>
            </button>
            <input type="text" name="" className="input-types" placeholder='First name' />
            <input type="text" name="" className="input-types" placeholder='Last name' />
            <input type="text" name="" className="input-types-full" placeholder='Address' />
            <input type="text" name="" className="input-types-full" placeholder='Apartment, suite, etc.(optional)' />
            <input type="text" name="" className="input-types" placeholder='City' />
            <input type="text" name="" className="input-types" placeholder='Postal code (optional)' />
            <input type="text" name="" className="input-types-full" placeholder='Phone' />
            <OverlayTrigger overlay={<Tooltip> In case we need to contact you about your order </Tooltip>}>
              <Button id='email-info' variant="transprent">?</Button>
            </OverlayTrigger>
            <div className='cb-div'>
              <input type="checkbox" />
              <span >Save this information for next time</span>
            </div>
            <h5 className='headings-h5'>Select your city</h5>
            <select name="" id="selecte-your-city">
              <option value=""></option>
              <option value="">Islamabad</option>
              <option value="">Lahore</option>
              <option value="">Faisalabad</option>
              <option value="">Rawalpindi</option>
              <option value="">Gujranwala</option>
              <option value="">Multan</option>
              <option value="">Sargodha</option>
              <option value="">Sialkot</option>
              <option value="">Bahawalpur</option>
              <option value="">Jhang</option>
              <option value="">Sheikhupura</option>
              <option value="">Sahiwal</option>
              <option value="">Rahim Yar Khan  </option>
              <option value="">Dera Ghazi Khan (D.G. Khan)  </option>
              <option value="">Kasur</option>
              <option value="">Chiniot</option>
              <option value="">Hafizabad</option>
              <option value="">Jhelum</option>
              <option value="">Attock</option>
              <option value="">Mianwali</option>
            </select>
            <h5 className='headings-h5'>Shipping method</h5>
            <div className='shipping-m'>
              <p style={{paddingLeft:"10px",paddingTop:"10px"}} className='co-h4' > <b>Local Delivery</b> <span id='free'><b>Free</b></span></p>
            </div>
            <h5 className='headings-h5'>Payment</h5>
            <p>All transactions are secure and encrypted.</p>
            <div className="pay-cod">
            <input type="radio" name="payment" id="" /> 
            <span><b> Cash on Delivery</b></span>
            </div>
            <div className="pay-online">
              <div className='card-heading'>
            <input type="radio" name="payment" id="" /><span><b> Credit Card / Debit Card</b></span>
              </div>
            <div className="cccard-info-div">
            <input type="text" name="" id="" className="card-info" placeholder="Card number" title="Please fill out this field." />
            <input type="text" name="" id="" className="card-infos" placeholder="Expiration date (MM / YY)" title="Please fill out this field." />
            <input type="text" name="" id="" className="card-infos" placeholder="Security code" title="Please fill out this field." style={{marginLeft:"2%"}} />
            <OverlayTrigger overlay={<Tooltip> 3-digit security code usually found on the back of your card. American Express cards have a 4-digit code located on the front. </Tooltip>}>
              <Button id='email-info' variant="transprent">?</Button>
            </OverlayTrigger>
            <input type="text" name="" id="" className="card-info" placeholder="Name on card" title="Please fill out this field." />
            </div>
            </div>

            <h5 className='headings-h5'>Billing address</h5>

            <div className="pay-cod">
            <input type="radio" name="payment" id="" /> <span> Same as shipping address</span>
            </div>
            <div className="pay-online">
              <div className='card-heading'>
            <input type="radio" name="payment" id="" /> <span>Use a different billing address</span>
              </div>
              <div className="ued-diff-add-div">
            <button className="country-other-ues-diff">
              <span id='c-r-ues-diff'>Country/Region</span>
              <select name="" id="option-pak-ues-diff" >
                <option value="+92"> Pakistan</option>
              </select>
            </button>
            <input type="text" name="" className="input-types-ues-diff" placeholder='First name' />
            <input type="text" name="" className="input-types-ues-diff" placeholder='Last name' />
            <input type="text" name="" className="input-types-full-ues-diff" placeholder='Address' />
            <input type="text" name="" className="input-types-full-ues-diff" placeholder='Apartment, suite, etc.(optional)' />
            <input type="text" name="" className="input-types-ues-diff" placeholder='City' />
            <input type="text" name="" className="input-types-ues-diff" placeholder='Postal code (optional)' />
            <input type="text" name="" className="input-types-full-ues-diff" placeholder='Phone' />
            <OverlayTrigger overlay={<Tooltip> In case we need to contact you about your order </Tooltip>}>
              <Button id='email-info' variant="transprent">?</Button>
            </OverlayTrigger>
            </div>
            </div>
            <br />  
            <button className=' pay-btn'>Complete order</button>
            <button className='pay-btn'>Pay now</button>  
          </div>

          <hr style={{width:"99%"}} />

          <button className='polices' onClick={() => navigate("/policies/refund-policy") }><u>Refund policy</u></button>
          <button className='polices' onClick={() => navigate("/policies/shipping-policy") }><u>Shipping</u></button>
          <button className='polices' onClick={() => navigate("/policies/privacy-policy") }><u>Privacy policy</u></button>
          <button className='polices' onClick={() => navigate("/policies/terms-of-service") }><u>Terms of service</u></button>
          <button className='polices' ><u>Contact</u></button>
        </div>
        <div className="checkout-r-side">
          <div className="product-info">
            <img className='product-img' src="https://baroque.pk/cdn/shop/files/158_587e89cf-f42d-493c-a593-65cd9005fc72.jpg?v=1776675226&width=1200" alt="" />
            <span>EMBROIDERED CHIFFON EN-1311</span>
            <p>XS</p>
            <span> Rs 22,950.00</span>
          </div>
          <div className="wrap">
          <input type="text" name="" id="voucher" placeholder="Discount code or gift card Submit"/>
          <button className='apply-btn'>Apply</button>
          </div> 
          <br />
          <div className="sub-total-detail">
            <p className="s-t">Subtotal</p>
            <p className="price">22,950.00</p>
          </div>
          <div className="shipping-detail">
            <p className="s-t">Shipping</p>
            <p className="price">Free</p>
          </div>
          <div className="">
            {/* <p className="">Total</p> */}
            <p className=""><b className="total">Total</b><span >PKR</span><span><b>  22,950.00</b></span></p>
            <p>Including Rs <span>3,500.85</span> in taxes</p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Checkout
