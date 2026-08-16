import React from 'react'
import "./Ensembals-cart.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
function Ensembles_cart() {
  const [count, setCount] = useState(1);

  const [selectedType,] = useState("Stitched");
  const [selectedSize, setSelectedSize] = useState("XS");
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);
  
  return (
    <div>
      <br></br>
      <br></br>
      <div className='en-full-page-div'>
        <div className='en-left-imgs'>
          <img className='en-limgs' src='https://baroque.pk/cdn/shop/files/158_587e89cf-f42d-493c-a593-65cd9005fc72.jpg?v=1776675226&width=1200' alt='' />
          <img className='en-limgs' src='https://baroque.pk/cdn/shop/files/160_3cc75a30-c40f-4f50-bc1f-4c255a6f3a38.jpg?v=1776675226&width=1200' alt='' />
          <img className='en-limgs' src='https://baroque.pk/cdn/shop/files/157_47b9fc64-ba57-4800-afd4-3d979da3ff60.jpg?v=1776675226&width=1200' alt='' />
          <img className='en-limgs' src='https://baroque.pk/cdn/shop/files/162_d8804bbd-48fe-49e8-8a07-8a240c211deb.jpg?v=1776675226&width=1200' alt='' />
          <img className='en-limgs' src='https://baroque.pk/cdn/shop/files/163_96486fdd-65dd-4dfc-b08a-7485994cd055.jpg?v=1776675226&width=1200' alt='' />
          <img className='en-limgs' src='https://baroque.pk/cdn/shop/files/159_31395d17-f1af-464d-a910-52cbe2c15979.jpg?v=1776675226&width=1200' alt='' />
          <img className='en-limgs' src='https://baroque.pk/cdn/shop/files/161_d8f93307-51d7-4002-b45a-45cd9d7dc300.jpg?v=1776675226&width=1200' alt='' />

        </div>
        <div className='en-main-img'>
          <img style={{ marginBottom: "30px", cursor: 'pointer' }} className='en-main-imgs' src='https://baroque.pk/cdn/shop/files/158_587e89cf-f42d-493c-a593-65cd9005fc72.jpg?v=1776675226&width=1200' alt='' />
          <img className='en-limgs' src='https://baroque.pk/cdn/shop/files/160_3cc75a30-c40f-4f50-bc1f-4c255a6f3a38.jpg?v=1776675226&width=1200' alt='' />
          <img className='en-limgs' src='https://baroque.pk/cdn/shop/files/157_47b9fc64-ba57-4800-afd4-3d979da3ff60.jpg?v=1776675226&width=1200' alt='' />
          <img className='en-limgs' src='https://baroque.pk/cdn/shop/files/162_d8804bbd-48fe-49e8-8a07-8a240c211deb.jpg?v=1776675226&width=1200' alt='' />
          <img className='en-limgs' src='https://baroque.pk/cdn/shop/files/163_96486fdd-65dd-4dfc-b08a-7485994cd055.jpg?v=1776675226&width=1200' alt='' />
          <img className='en-limgs' src='https://baroque.pk/cdn/shop/files/159_31395d17-f1af-464d-a910-52cbe2c15979.jpg?v=1776675226&width=1200' alt='' />
          <img className='en-limgs' src='https://baroque.pk/cdn/shop/files/161_d8f93307-51d7-4002-b45a-45cd9d7dc300.jpg?v=1776675226&width=1200' alt='' />
        </div>
        <div className='en-product-details'>
          <p style={{ color: "#767676", letterSpacing: "2px" }}>EMBROIDERED LAWN EL26-D01 {selectedType.toLocaleUpperCase()} </p>
          <p style={{ letterSpacing: "2px" }}><b>PKR 22,950.00</b></p>
          <p style={{ color: "#707070", fontSize: "12pt" }}>EFEN1311-{selectedSize}-333 <b>● GREEN ●</b> 2 PIECE</p>
          <hr></hr>
          {selectedType === "Stitched" && (
            <div>
              <p>SIZE:</p>
              <button className={`type-size-btns ${selectedSize === "XS" ? "active" : ""}`}
                onClick={() => setSelectedSize("XS")}>
                XS
              </button>
              <button className={`type-size-btns ${selectedSize === "S" ? "active" : ""}`}
                onClick={() => setSelectedSize("S")}>
                S
              </button>
              <button className={`type-size-btns ${selectedSize === "M" ? "active" : ""}`}
                onClick={() => setSelectedSize("M")}>
                M
              </button>
              <button className={`type-size-btns ${selectedSize === "L" ? "active" : ""}`}
                onClick={() => setSelectedSize("L")}>
                L
              </button>
              <button className={`type-size-btns ${selectedSize === "XL" ? "active" : ""}`}
                onClick={() => setSelectedSize("XL")}>
                XL
              </button>
              <button className={`type-size-btns ${selectedSize === "CUSTOM SIZE" ? "active" : ""}`}
                onClick={() => setSelectedSize("CUSTOM SIZE")}>
                CUSTOM SIZE
              </button>
            </div>
          )}

          <div className='en-counter-div'>
            <button className='en-counter-btns' onClick={() => count > 1 && setCount(count - 1)}> - </button>
            <span style={{ fontFamily: "Roboto" }}>{count}</span>
            <button className='en-counter-btns' onClick={() => setCount(count + 1)}> + </button>
          </div>

          <button id='en-add-to-cart-btn' onClick={() => setShowCart(true)}>ADD TO CART</button> <br></br><br></br>

          <hr style={{ width: "100%", maxWidth: "90%" }}></hr>
          <details>
            <summary className="en-product-summary">📦 Product Details</summary>
            <p style={{ fontFamily: "Century Gothic" }} class="product-summary-p">
              <p style={{ paddingTop: "7px" }}><b>NOTE :</b> Model is wearing <b>XS</b> size.</p>
              <p id='en-product-det-sumry-p-info' className="product-summary-p">
                Embroidered Self Jacquard Lawn Front Panel (2 Pcs) <br></br>
                Dyed Self Jacquard Lawn Back (1 Yard) <br></br>
                Embroidered Organza Neck Line Patch (1 Pc) <br></br>
                Embroidered Self Jacquard Lawn Sleeves (0.75 Yard) <br></br>
                Embroidered Lawn Front Borders (4 Yards) <br></br>
                Embroidered Zinc Lawn Front Borders (5 Yards) <br></br>
                Embroidered Skin Lawn Sleeve Borders (1.09 Yards) <br></br>
                Embroidered Zinc Lawn Sleeve Borders (1.09 Yard) <br></br>
                Embroidered Organza Front & Back Border (2.18 Yards) <br></br>
                Embroidered Aqua Lawn Sleeve Border (1.09 Yard) <br></br>
                Embroidered Aqua Lawn Front & Back Border (1 Yard) each <br></br>
                Embroidered Digital Printed Cotton Net Dupatta (2.88 Yards) <br></br>
                Embroidered Organza Dupatta Border (8.6 Yards) <br></br>
                Dyed Cotton Trouser (2.5 Yards) <br></br>
              </p>
            </p>
          </details>
          <hr style={{ width: "100%", maxWidth: "90%" }}></hr>
          <details>
            <summary className="en-product-summary">🛪 Delivery</summary>
            <p style={{ paddingTop: "7px" }}>Dispatch Time : Within 1 Week</p>
          </details>
          <hr style={{ width: "100%", maxWidth: "90%" }}></hr>
          <details>
            <summary className="en-product-summary">🎟 Description</summary>
            <p style={{ paddingTop: "7px" }}>
              This premium unstitched lawn collection features an exquisite ensemble of intricately embroidered components designed for the discerning seamstress. The set includes embroidered self-jacquard lawn panels for the front, coordinating dyed back fabric, and meticulously crafted organza neckline detailing. Multiple embroidered border options in complementary shades—including zinc, skin, and aqua tones—offer versatile styling possibilities. The collection is completed with an embroidered digital-printed cotton net dupatta and coordinating organza border, providing all essential pieces for creating a sophisticated, fully customized garment. Perfect for those who appreciate fine craftsmanship and personalized tailoring.
            </p>
          </details>
          <hr style={{ width: "100%", maxWidth: "90%" }}></hr>
          <details>
            <summary className="en-product-summary">↻ Returns and Exchange</summary>
            <p style={{ paddingTop: "7px" }}>
              We offer 10-days exchange policy starting from the date of order delivery.
            </p>
            <p>
              In case of any damaged OR missing item, the concern must be raised within 48 hours to our customer care team for further assistance, otherwise the complaints cannot be accepted.
            </p>
            <p>For additional information and the exchange form <Link href=''>click here</Link></p>
          </details>
          <hr style={{ width: "100%", maxWidth: "90%" }}></hr>
          <details>
            <summary className="en-product-summary">🍃 Care Instructions</summary>
            <p style={{ paddingTop: "7px" }}>
              Dry clean recommended
            </p>
            <div className='en-product-care-instructions'>
              Iron the clothes at moderate temperature <br></br>
              Do not use any type of bleach or stain removing chemicals <br></br>
              Actual color may slightly vary from the image shown<br></br>
              Unstitched includes fabric only<br></br>
              Slight variation in colour and embellishments may occur after restocking of specific articles<br></br>
              Custom length or any other changing which varies from our standard size chart comes under customized stitching for stitched articles.<br></br>
              Pret/Ready to wear articles can not be customized<br></br>
              All the sleeveless dresses are stitched with sleeves by default until sleeveless is requested by the customer. Straight sleeves are attached.<br></br>
            </div>
          </details>
          <hr style={{ width: "100%", maxWidth: "90%" }}></hr>
        </div>
      </div>

      <hr style={{ width: "100%", maxWidth: "99%" }}></hr>
      <h1 id='en-product-h1'>Related products</h1>
      <div className='en-related-products-perant'>
        <div className='en-related-product-img'>
          <img className='en-rpimgs' src='https://baroque.pk/cdn/shop/files/168_4b1f163f-4fee-4ea2-82d6-90ba52655ee4.jpg?v=1776675410&width=1200' alt='' />
          <button className='wishlist-btn-on-img'>♡</button>
          <p className="en-">EMBROIDERED CHIFFON EN-1312</p>
          <p className="en-pd2"><b>PKR 22,950.00</b></p>
          <p className="en-pd3">FORMAL</p>
        </div>
        <div className='en-related-product-img'>
          <img className='en-rpimgs' src='https://baroque.pk/cdn/shop/files/152_4d46683d-283a-431c-b7ec-de78e835e04a.jpg?v=1776675054&width=1200' alt='' />
          <button className='wishlist-btn-on-img'>♡</button>
          <p className="en-">EMBROIDERED CHIFFON EN-1310</p>
          <p className="en-pd2"><b>PKR 22,950.00</b></p>
          <p className="en-pd3">FORMAL</p>
        </div>
        <div className='en-related-product-img'>
          <img className='en-rpimgs' src='https://baroque.pk/cdn/shop/files/141_d31798b3-5703-4c2a-a138-a1776dfff155.jpg?v=1776674767&width=1200' alt='' />
          <button className='wishlist-btn-on-img'>♡</button>
          <p className="en-">EMBROIDERED CHIFFON EN-1309</p>
          <p className="en-pd2"><b>PKR 22,950.00</b></p>
          <p className="en-pd3">FORMAL</p>
        </div>
        <div className='en-related-product-img'>
          <img className='en-rpimgs' src='https://baroque.pk/cdn/shop/files/115_c37d1760-2bc5-4d1f-9ca5-3a11ab380a88.jpg?v=1776673281&width=1200' alt='' />
          <button className='wishlist-btn-on-img'>♡</button>
          <p className="en-">EMBROIDERED CHIFFON EN-1306</p>
          <p className="en-pd2"><b>PKR 22,950.00</b></p>
          <p className="en-pd3">FORMAL</p>
        </div>
      </div>
{/* // add to cart popup */}
      <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end" className="cart-offcanvas" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> C A R T </Offcanvas.Title>
        </Offcanvas.Header>
        <hr className="cart-offcanvas-divider" /> <p style={{margin:"5px", textAlign:"center"}}>You are eligible for free shipping.</p> <hr className="cart-offcanvas-divider" />

        <Offcanvas.Body>
          <div className='cart-products-scroll'>
          <div className='cart-product-div'>
            <img className='cart-product-img' src='https://baroque.pk/cdn/shop/files/158_587e89cf-f42d-493c-a593-65cd9005fc72.jpg?v=1776675226&width=1200' alt='' />
            <div className='cart-product-info'>
              <p className='cart-product-type'>ENSEMBLES</p>
              <span>EMBROIDERED CHIFFON EN-1311</span> <br />
              <p className='cart-product-price'><b>PKR 22,950.00</b></p>
              <span className='cart-product-size'>XS</span>
              <div className='cart-actions-row'>
                <div className='cart-quantity-group'>
                  <button className='en-counter-btns' onClick={() => count > 1 && setCount(count - 1)}> - </button>
                  <span className='cart-quantity-value'>{count}</span>
                  <button className='en-counter-btns' onClick={() => setCount(count + 1)}> + </button>
                </div>
                <button type='button' className='cart-remove-btn'>Remove</button> 
              </div>
            </div>
          </div>

        </div>
          <div className="cart-check-out-footer">
            <p>Taxes and shipping calculated at checkout</p>
            <button className="cart-check-out-btn" onClick={() => navigate("/Checkout")}>CheckOut ● 22,950.00</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Ensembles_cart
