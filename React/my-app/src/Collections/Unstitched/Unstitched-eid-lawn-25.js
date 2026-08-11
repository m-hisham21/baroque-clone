import React from 'react'
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import "./Unstitched-eid-lawn-25.css";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

function Unstitched_eid_lawn_25() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='stitched-25-h1'>Unstiched Eid Lawn</h1>
      <button className='stitched-25-EL' onClick={() => navigate("/Unstitched-eid-lawn-25")}>EID LAWN 25</button>
      <button className='stitched-25-EL' onClick={() => navigate("/Unstitched-eid-lawn-26")}>EID LAWN 26</button>

      <div className='stitched-25-containers'>
        <div className='stitched-25-height-observer'>
          <div className='stitched-25-sort-filter-btn'>
            <button className='stitched-25-sortby-filtter-btns'>filter</button>
            <Nav id='stitched-25-nav-dd'>
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

          <div className='stitched-25-c-l-s'>
            <collection-layout-switch
              device="desktop"
              class="collection-toolbar__layout-switch-list sm-max:hidden"
              aria-controls="product-list-template--19155083427907__main">

              <button style={{color:"black"}} className='view-btn' type="button" id="stitched-left-fix-btns" title="View" aria-label="Switch to larger product images">
                <svg role="presentation" width="18" viewBox="0 0 18 18" fill="none">
                  <path fill="currentColor" d="M0 0h18v18H0z"> </path>
                </svg>
              </button>

              <button
                type="button" id="stitched-26-left-fix-btns"
                title="Grid viwe"
                aria-label="Switch to larger product images">

                <svg role="presentation" width="18" viewBox="0 0 18 18" fill="none">
                  <path
                    fill="currentColor"
                    d="M0 0h8v8H0zM10 0h8v8h-8zM0 10h8v8H0zM10 10h8v8h-8z">
                  </path>
                </svg>
              </button>

              <button
                type="button" id="stitched-26-left-fix-btns"
                value="medium"
                title="Compact grid view"
                class="collection-toolbar__button"
                aria-label="Switch to smaller product images">

                <svg role="presentation" width="18" viewBox="0 0 18 18" fill="none">
                  <path
                    fill="currentColor"
                    d="M0 0h4v4H0zM7 0h4v4H7zM14 0h4v4H14z
                  M0 7h4v4H0zM7 7h4v4H7zM14 7h4v4H14z
                  M0 14h4v4H0zM7 14h4v4H7zM14 14h4v4H14z">
                  </path>
                </svg>
              </button>

              <button
                type="button" id="stitched-26-left-fix-btns"
                value="compact"
                title="List view"
                class="collection-toolbar__button"
                aria-label="Switch to compact product images">
                <svg role="presentation" width="18" viewBox="0 0 18 18" fill="none">
                  <path fill="currentColor" d="M0 0h18v2H0zm0 4h18v2H0zm0 4h18v2H0zm0 4h18v2H0zm0 4h18v2H0z"></path>
                </svg>
              </button>

            </collection-layout-switch>
          </div>
          <p id='stitched-25-ten-product'>2 PRODUCTS</p>
        </div>
        <div className='stitched-25-details-products-maindiv'>
          <div className='stitched-25-sidebar-filter'>
            <Accordion alwaysOpen>

              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="0">
                <Accordion.Header > <p className='stitched-25-acrdin-head-p'> Availability </p></Accordion.Header>
                <Accordion.Body>
                 <input type='checkbox'></input> <b>In stock only</b>
                </Accordion.Body>
              </Accordion.Item >
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="1">
                <Accordion.Header > <p className='stitched-25-acrdin-head-p'> Price </p></Accordion.Header>
                <Accordion.Body>
                  <input type='range' min={0} max={16950}></input> <br></br>
                  <input style={{width:"100px", marginRight:"20px"}} type='text' placeholder='RS'></input>
                  <b>to</b>
                  <input style={{width:"100px", marginLeft:"20px"}} type='text' placeholder='RS'></input>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="2">
                <Accordion.Header > <p className='stitched-25-acrdin-head-p'> Type</p></Accordion.Header>
                <Accordion.Body>
                  UNSTITCHED (10)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="3">
                <Accordion.Header > <p className='stitched-25-acrdin-head-p'> Fabric</p></Accordion.Header>
                <Accordion.Body>
                  Lawn(10)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="4">
                <Accordion.Header > <p className='stitched-25-acrdin-head-p'> Size</p></Accordion.Header>
                <Accordion.Body>
                  DEFAULT (10)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="5">
                <Accordion.Header > <p className='stitched-25-acrdin-head-p'> Pices</p></Accordion.Header>
                <Accordion.Body>
                  3 PIECE (10)
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className='stitched-25-all-products'>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/30_945a0073-e2ac-45f3-a429-2ed9ed724648.jpg?v=1740660088&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/32_3f6a8fd9-19a4-4f03-bd4c-4244146ee16b.jpg?v=1740660478&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED LAWN EL-D05 UNSTITCHED</p>
              <p className="stitched-pd2"><b>PKR 16,950.00</b></p>
              <p className="stitched-pd3">EID LAWN 25</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/51_6828a254-3fc2-4f4c-8f35-ef97f2cb15ae.jpg?v=1740660089&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/56_ed85ab32-92c0-4552-9db5-84e41789edaa.jpg?v=1740660471&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED LAWN EL-D08 UNSTITCHED</p>
              <p className="stitched-pd2"><b>PKR 16,950.00</b></p>
              <p className="stitched-pd3">EID LAWN 25</p>
              </div>
          </div>
        </div>
      </div>


      {/* EnD */}
    </div>
  )
}

export default Unstitched_eid_lawn_25
