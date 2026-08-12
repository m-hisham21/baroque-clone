import React from 'react'
import "./Unstitched-eid-lawn-products.css"
import { useState } from "react";
import { Link } from 'react-router-dom';
import Offcanvas from "react-bootstrap/Offcanvas";
function UnstitchedEidLawnProducts() {
  const [showCart, setShowCart] = useState(false);
  const [count, setCount] = useState(1);
  const [selectedType, setSelectedType] = useState("Stitched");
  const [selectedSize, setSelectedSize] = useState("XS");

  return (
    <div>
      <br></br>
      <br></br>
      <div className='full-page-div'>
        <div className='left-imgs'>
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/30_e31446a4-1fe7-4de1-9813-f59376eb2293.jpg?v=1770631276&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/35_9e5c7aab-6ab8-47e0-8539-10a620619867.jpg?v=1770631450&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/32_d960689f-bf8c-47bf-972d-f5fcc0ee6798.jpg?v=1770883356&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/39_e7f4227c-5e76-4aae-b104-eba7f1aee0e3.jpg?v=1770883356&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/33_ede27f40-45e3-47c9-8eba-ff859d123e70.jpg?v=1770884124&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/37_789bb78c-3312-48bf-a0ea-b50c01b16d2f.jpg?v=1770884124&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/38_b7fd4291-dffb-48a5-a631-6503e9b4052e.jpg?v=1770884124&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/31_433a643d-af13-463a-90bc-ffb7f1a4800c.jpg?v=1770884124&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/36_a2b224ad-2520-4161-9399-353085970d18.jpg?v=1770884124&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/34_0d708db1-6d8e-4ab8-b630-d7edaf0189db.jpg?v=1770884124&width=1200' alt='' />

        </div>
        <div className='main-img'>
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/30_e31446a4-1fe7-4de1-9813-f59376eb2293.jpg?v=1770631276&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/35_9e5c7aab-6ab8-47e0-8539-10a620619867.jpg?v=1770631450&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/32_d960689f-bf8c-47bf-972d-f5fcc0ee6798.jpg?v=1770883356&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/39_e7f4227c-5e76-4aae-b104-eba7f1aee0e3.jpg?v=1770883356&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/33_ede27f40-45e3-47c9-8eba-ff859d123e70.jpg?v=1770884124&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/37_789bb78c-3312-48bf-a0ea-b50c01b16d2f.jpg?v=1770884124&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/38_b7fd4291-dffb-48a5-a631-6503e9b4052e.jpg?v=1770884124&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/31_433a643d-af13-463a-90bc-ffb7f1a4800c.jpg?v=1770884124&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/36_a2b224ad-2520-4161-9399-353085970d18.jpg?v=1770884124&width=1200' alt='' />
          <img className='limgs' src='https://baroque.pk/cdn/shop/files/34_0d708db1-6d8e-4ab8-b630-d7edaf0189db.jpg?v=1770884124&width=1200' alt='' />
        </div>
        <div className='product-details'>
          <p style={{ color: "#767676", letterSpacing: "2px" }}>EMBROIDERED LAWN EL26-D01 {selectedType.toUpperCase()} </p>
          <p style={{ letterSpacing: "2px" }}><b>PKR {selectedType === "Unstitched" ? "19,950.00" : "26,950.00"}</b></p>
          <p style={{ color: "#707070", fontSize: "10.5pt" }}>ELS26D01-{selectedSize}-333 <b>● LIGHT BLUE ●</b> 3 PIECE</p>
          <hr></hr>
          
          
          <p>TYPE:</p>
          <button className={`type-size-btns ${selectedType === "Stitched" ? "active" : ""}`}
            onClick={() => setSelectedType("Stitched")}>
            Stitched
          </button>
          <button className={`type-size-btns ${selectedType === "Unstitched" ? "active" : ""}`}
            onClick={() => setSelectedType("Unstitched")}>
            Unstitched
          </button>
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
            <button id='add-to-cart-btn'>ADD TO CART</button>
          <hr style={{ width: "100%", maxWidth: "90%" }}></hr>
          <details>
            <summary className="product-summary">📦 Product Details</summary>
            <p style={{ fontFamily: "Century Gothic" }} class="product-summary-p">
              <p style={{ paddingTop: "7px" }}><b>NOTE :</b> Model is wearing <b>XS</b> size.</p>
              <p id='product-det-sumry-p-info'>
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
            <summary className="product-summary">🛪 Delivery</summary>
            <p style={{ paddingTop: "7px" }}>Dispatch Time : Within 1 Week</p>
          </details>
          <hr style={{ width: "100%", maxWidth: "90%" }}></hr>
          <details>
            <summary className="product-summary">🎟 Description</summary>
            <p style={{ paddingTop: "7px" }}>
              This premium unstitched lawn collection features an exquisite ensemble of intricately embroidered components designed for the discerning seamstress. The set includes embroidered self-jacquard lawn panels for the front, coordinating dyed back fabric, and meticulously crafted organza neckline detailing. Multiple embroidered border options in complementary shades—including zinc, skin, and aqua tones—offer versatile styling possibilities. The collection is completed with an embroidered digital-printed cotton net dupatta and coordinating organza border, providing all essential pieces for creating a sophisticated, fully customized garment. Perfect for those who appreciate fine craftsmanship and personalized tailoring.
            </p>
          </details>
          <hr style={{ width: "100%", maxWidth: "90%" }}></hr>
          <details>
            <summary className="product-summary">↻ Returns and Exchange</summary>
            <p style={{ paddingTop: "7px" }}>
              We offer 10-days exchange policy starting from the date of order delivery.
            </p>
            <p>
              In case of any damaged OR missing item, the concern must be raised within 48 hours to our customer care team for further assistance, otherwise the complaints cannot be accepted.
            </p>
            <p>For additional information and the exchange form link <Link to="">Click here</Link></p>
          </details>
          <hr style={{ width: "100%", maxWidth: "90%" }}></hr>
          <details>
            <summary className="product-summary">🍃 Care Instructions</summary>
            <p style={{ paddingTop: "7px" }}>
              Dry clean recommended
            </p>
            <div className='product-care-instructions'>
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
      <h1 id='product-h1'>Related products</h1>
      <div className='related-products-perant'>
        <div className='related-product-img'>
          <img className='rpimgs' src='https://baroque.pk/cdn/shop/files/49_214cd21f-15c2-4f4a-9cfe-693bb13ea114.jpg?v=1770634927&width=1200' alt='' />
          <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
          <p className="">EMBROIDERED LAWN EL26-D07 UNSTITCHED</p>
          <p className="pd2"><b>PKR 16,950.00</b></p>
          <p className="pd3">EID LAWN 26</p>
        </div>
        <div className='related-product-img'>
          <img className='rpimgs' src='https://baroque.pk/cdn/shop/files/30_e31446a4-1fe7-4de1-9813-f59376eb2293.jpg?v=1770631276&width=1200' alt='' />
          <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
          <p className="">EMBROIDERED LAWN EL26-D01 UNSTITCHED</p>
          <p className="pd2"><b>PKR 16,950.00</b></p>
          <p className="pd3">EID LAWN 26</p>
        </div>

        <div className='related-product-img'>
          <img className='rpimgs' src='https://baroque.pk/cdn/shop/files/51_6828a254-3fc2-4f4c-8f35-ef97f2cb15ae.jpg?v=1740660089&width=1200' alt='' />
          <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
          <p className="">EMBROIDERED LAWN EL-D08 STITCHED</p>
          <p className="pd2"><b>PKR 29,900.00</b></p>
          <p className="pd3">EID LAWN 25</p>
        </div>
        <div className='related-product-img'>
          <img className='rpimgs' src='https://baroque.pk/cdn/shop/files/14_eb26e408-4a33-4363-ba84-ff7d87d403d1.jpg?v=1770633609&width=1200' alt='' />
          <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
          <p className="">EMBROIDERED LAWN EL-D05 STITCHED</p>
          <p className="pd2"><b>PKR 29,900.00</b></p>
          <p className="pd3">EID LAWN 25</p>
        </div>
      </div>

      <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end" style={{ width: "400px" }} >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title> C A R T </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <h5 style={{ textTransform: "uppercase", letterSpacing: "2px", textAlign: "center", paddingTop: "200px" }}>Your cart is empty</h5>
            <div className="cart-check-out-footer">
              <p>Taxes and shipping calculated at checkout</p>
              <button className="cart-check-out-btn">CheckOut ●</button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
    </div>
  )
}

export default UnstitchedEidLawnProducts
