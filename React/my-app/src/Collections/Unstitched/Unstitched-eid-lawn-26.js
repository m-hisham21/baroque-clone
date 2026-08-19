import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import "./Body_unstiched_eid_lawn.css";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

function Unstiched_eid_lawn_26() {
  const navigate = useNavigate();

  const [showFilter, setShowFilter] = useState(false);
  const openFilter = () => setShowFilter(true);
  const closeFilter = () => setShowFilter(false);

    useEffect(()=> {
        document.title = "UNSTITCHED EID LAWN"
      },[])
  
  return (
    <div>
      <h1 className='h1'>Unstitched Eid Lawn</h1>
      <button className='EL' onClick={() => navigate("/Unstitched-eid-lawn-25")}>EID LAWN 25</button>
      <button className='EL' onClick={() => navigate("/Unstitched-eid-lawn-26")}>EID LAWN 26</button>

      <div className='containers'>
        <div className='height-observer'>
          <div className='sort-filter-btn'>
            <button id='filter' className='sortby-filtter-btns' onClick={openFilter} aria-label="Open filters"> filter </button>

            <Nav id='nav-dd'>
              <NavDropdown title="SORT BY">
                <NavDropdown.Item href="#action/3.1"> Featured </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> Most relevant </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"> Alphabetically, A-Z </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4"> Alphabetically, Z-A </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5"> Price, low to high </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6"> Price, high to low </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7"> Date, old to new </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8"> Date, new to old </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
          <div className='c-l-s'>
            <collection-layout-switch>
              <button style={{ color: "black" }} className='view-btn' type="button" id="stitched-left-fix-btns" title="View" aria-label="Switch to larger product images">
                <svg role="presentation" width="18" viewBox="0 0 18 18" fill="none">
                  <path fill="currentColor" d="M0 0h18v18H0z"> </path>
                </svg>
              </button>

              <button type="button" className='left-fix-btns' value="large" title="Grid view" >
                <svg role="presentation" width="18" viewBox="0 0 18 18" fill="none">
                  <path fill="currentColor" d="M0 0h8v8H0zM10 0h8v8h-8zM0 10h8v8H0zM10 10h8v8h-8z" >
                  </path>
                </svg>
              </button>

              <button type="button" className='left-fix-btns' value="medium" title="Compact grid view" id='cgv'>
                <svg role="presentation" width="18" viewBox="0 0 18 18" fill="none">
                  <path fill="currentColor" d="M0 0h4v4H0zM7 0h4v4H7zM14 0h4v4H14z M0 7h4v4H0zM7 7h4v4H7zM14 7h4v4H14z M0 14h4v4H0zM7 14h4v4H7zM14 14h4v4H14z">
                  </path>
                </svg>
              </button>

              <button type="button" className='left-fix-btns' value="compact" title="List view" id='lv'>
                <svg role="presentation" width="18" viewBox="0 0 18 18" fill="none">
                  <path fill="currentColor" d="M0 0h18v2H0zm0 4h18v2H0zm0 4h18v2H0zm0 4h18v2H0zm0 4h18v2H0z"></path>
                </svg>
              </button>

            </collection-layout-switch>
          </div>
          <p id='ten-product'>10 PRODUCTS</p>
        </div>
        <div className='details-products-maindiv'>
          <div className={`filter-backdrop ${showFilter ? 'show' : ''}`} onClick={closeFilter}></div>
          <div className={`sidebar-filter ${showFilter ? "show-filter" : ""}`}>
            <button className="close-filter" onClick={closeFilter} aria-label="Close filters"> ✕ </button>
            <Accordion alwaysOpen>
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="0">
                <Accordion.Header > <p className='acrdin-head-p'> Availability </p></Accordion.Header>
                <Accordion.Body>
                  <input type='checkbox'></input> <b>In stock only</b>
                </Accordion.Body>
              </Accordion.Item >
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="1">
                <Accordion.Header > <p className='acrdin-head-p'> Price </p></Accordion.Header>
                <Accordion.Body>
                  <input type='range' min={0} max={16950}></input> <br></br>
                  <input style={{ width: "100px", marginRight: "20px" }} type='text' placeholder='RS'></input>
                  <b>to</b>
                  <input style={{ width: "100px", marginLeft: "20px" }} type='text' placeholder='RS'></input>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="2">
                <Accordion.Header > <p className='acrdin-head-p'> Type</p></Accordion.Header>
                <Accordion.Body>
                  UNSTITCHED (10)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="3">
                <Accordion.Header > <p className='acrdin-head-p'> Fabric</p></Accordion.Header>
                <Accordion.Body>
                  Lawn(10)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="4">
                <Accordion.Header > <p className='acrdin-head-p'> Size</p></Accordion.Header>
                <Accordion.Body>
                  DEFAULT (10)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="5">
                <Accordion.Header > <p className='acrdin-head-p'> Pices</p></Accordion.Header>
                <Accordion.Body>
                  3 PIECE (10)
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className='stitched-all-products'>
            <div className='stitched-products-imgs-row'>
              <Link to="/UnstitchedEidLawnProducts">
                <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/30_e31446a4-1fe7-4de1-9813-f59376eb2293.jpg?v=1770631276&width=1200" alt="" />
                <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/35_9e5c7aab-6ab8-47e0-8539-10a620619867.jpg?v=1770631450&width=1200" alt="" />
              </Link>
              <button className='wishlist-btn-on-img'>♡</button>
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <p className="stitched-pd1">EMBROIDERED LAWN EL26-D01 UNSTITCHED</p>
              <p className="stitched-pd2"><b>PKR 16,950.00</b></p>
              <p className="stitched-pd3">EID LAWN 26</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/53_1329846c-cd09-4066-bbab-48c8ffaf08cc.jpg?v=1770631769&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/55_24fa362a-8518-4915-9e85-6b0ed59485c6.jpg?v=1770717091&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED LAWN EL26-D02 UNSTITCHED</p>
              <p className="stitched-pd2"><b>PKR 16,950.00</b></p>
              <p className="stitched-pd3">EID LAWN 26</p>
            </div>

            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/87_961cfd51-16ca-4a4c-8b89-4689179db263.jpg?v=1770632156&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/92_88f82fec-853a-487f-931c-27a158ba7763.jpg?v=1770632355&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED LAWN EL26-D03 UNSTITCHED</p>
              <p className="stitched-pd2"><b>PKR 16,950.00</b></p>
              <p className="stitched-pd3">EID LAWN 26</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/1...jpg?v=1770632970&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/3_624c286d-c168-4007-a638-556595710e92.jpg?v=1770633155&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED LAWN EL26-D04 UNSTITCHED</p>
              <p className="stitched-pd2"><b>PKR 16,950.00</b></p>
              <p className="stitched-pd3">EID LAWN 26</p>
            </div>

            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/14_eb26e408-4a33-4363-ba84-ff7d87d403d1.jpg?v=1770633609&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/15_a0520e23-1d44-4187-9f83-6d98a2141345.jpg?v=1770633610&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED LAWN EL26-D05 UNSTITCHED</p>
              <p className="stitched-pd2"><b>PKR 16,950.00</b></p>
              <p className="stitched-pd3">EID LAWN 26</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/64_a4f57435-7150-433d-a44c-488099b3e498.jpg?v=1770634104&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/68_cb2376f4-0dc5-432e-a9e2-4d7779eb2d16.jpg?v=1770634592&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED LAWN EL26-D06 UNSTITCHED</p>
              <p className="stitched-pd2"><b>PKR 16,950.00</b></p>
              <p className="stitched-pd3">EID LAWN 26</p>
            </div>

            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/49_214cd21f-15c2-4f4a-9cfe-693bb13ea114.jpg?v=1770634927&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/48_0ade9a87-bc8c-4653-a0df-b87aef5ee978.jpg?v=1770634927&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED LAWN EL26-D07 UNSTITCHED</p>
              <p className="stitched-pd2"><b>PKR 16,950.00</b></p>
              <p className="stitched-pd3">EID LAWN 26</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/83_96b7ba60-73a8-46aa-bd30-eec7b63ccd1e.jpg?v=1770635191&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/82_4d6a2928-68f9-4775-8876-73d80533d4f8.jpg?v=1770718478&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED LAWN EL26-D08 UNSTITCHED</p>
              <p className="stitched-pd2"><b>PKR 16,950.00</b></p>
              <p className="stitched-pd3">EID LAWN 26</p>
            </div>
          </div>
        </div>
      </div>

      {/* EnD */}
    </div>
  )
}

export default Unstiched_eid_lawn_26
