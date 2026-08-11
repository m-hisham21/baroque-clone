import React from 'react'
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import "..//Stitched/Stitched-eid-lawn.css";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

function Dupatts() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='stitched-h1'>Dupatts</h1>
      <button className='stitched-EL' onClick={() => navigate("/Dupatts")}>DUPATTS</button>

      <div className='stitched-containers'>
        <div className='stitched-height-observer'>
          <div className='stitched-sort-filter-btn'>
            <button style={{color:"black"}} className='stitched-sortby-filtter-btns'>filter</button>
            <Nav id='stitched-nav-dd'>
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

          <div className='stitched-c-l-s'>
            <collection-layout-switch
              device="desktop"
              class="collection-toolbar__layout-switch-list sm-max:hidden"
              aria-controls="product-list-template--19155083427907__main">

              <button style={{ color: "black" }} className='view-btn' type="button" id="stitched-left-fix-btns" title="View" aria-label="Switch to larger product images">
                <svg role="presentation" width="18" viewBox="0 0 18 18" fill="none">
                  <path fill="currentColor" d="M0 0h18v18H0z"> </path>
                </svg>
              </button>

              <button
                type="button" id="stitched-left-fix-btns"
                title="Grid view"
                aria-label="Switch to larger product images">

                <svg role="presentation" width="18" viewBox="0 0 18 18" fill="none">
                  <path
                    fill="currentColor"
                    d="M0 0h8v8H0zM10 0h8v8h-8zM0 10h8v8H0zM10 10h8v8h-8z">
                  </path>
                </svg>
              </button>

              <button 
                type="button" id="stitched-left-fix-btns"
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
                type="button" id="stitched-left-fix-btns"
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
          <p id='stitched-ten-product'>36 PRODUCTS</p>
        </div>
        <div className='stitched-details-products-maindiv'>
          <div className='stitched-sidebar-filter'>
            <Accordion alwaysOpen>

              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="0">
                <Accordion.Header > <p className='stitched-acrdin-head-p'> Availability </p></Accordion.Header>
                <Accordion.Body>
                 <input type='checkbox'></input> <b>In stock only</b>
                </Accordion.Body>
              </Accordion.Item >
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="1">
                <Accordion.Header > <p className='stitched-acrdin-head-p'> Price </p></Accordion.Header>
                <Accordion.Body>
                  <input type='range' min={0} max={16950}></input> <br></br>
                  <input style={{width:"100px", marginRight:"20px"}} type='text' placeholder='RS'></input>
                  <b>to</b>
                  <input style={{width:"100px", marginLeft:"20px"}} type='text' placeholder='RS'></input>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="2">
                <Accordion.Header > <p className='stitched-acrdin-head-p'> Type</p></Accordion.Header>
                <Accordion.Body>
                  UNSTITCHED (10)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="3">
                <Accordion.Header > <p className='stitched-acrdin-head-p'> Fabric</p></Accordion.Header>
                <Accordion.Body>
                  Lawn(10)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="4">
                <Accordion.Header > <p className='stitched-acrdin-head-p'> Size</p></Accordion.Header>
                <Accordion.Body>
                  DEFAULT (10)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ marginLeft: "10px", border: "none", borderBottom: "1px solid rgb(185, 183, 183)" }} eventKey="5">
                <Accordion.Header > <p className='stitched-acrdin-head-p'> Pices</p></Accordion.Header>
                <Accordion.Body>
                  3 PIECE (10)
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className='stitched-all-products'>
            <div className='stitched-products-imgs-row'>
              <Link to="/UnstitchedEidLawnProducts">
                <img className='stitched-products-imgs' src='https://baroque.pk/cdn/shop/files/40_e23ccf19-d37c-4ff4-8af8-98974e13521f.jpg?v=1776840567&width=1200' alt='' />
              </Link>
              <button className='wishlist-btn-on-img'>♡</button>
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <p className="pd1">PLAIN CHIFFON DUPATTA-98</p>
              <p className="pd2"><b>PKR 3,950.00</b></p>
              <p className="pd3">DUPATTAS</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs' src='https://baroque.pk/cdn/shop/files/52_2ebdde81-98da-452f-bc5e-9ed53062bf9f.jpg?v=1776840886&width=1200' alt='' />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">PLAIN CHIFFON DUPATTA-99</p>
              <p className="pd2"><b>PKR 3,950.00</b></p>
              <p className="pd3">DUPATTAS</p>
            </div>

            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs' src='https://baroque.pk/cdn/shop/files/62_af279517-4654-4a95-951d-ab78199c3a76.jpg?v=1776840967&width=1200' alt='' />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">PLAIN CHIFFON DUPATTA-100</p>
              <p className="pd2"><b>PKR 3,950.00</b></p>
              <p className="pd3">DUPATTAS</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs' src='https://baroque.pk/cdn/shop/files/80_43d7303f-cacc-48ac-8a85-469b78911ad7.jpg?v=1776841111&width=1200' alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">PLAIN CHIFFON DUPATTA-102</p>
              <p className="pd2"><b>PKR 3,950.00</b></p>
              <p className="pd3">DUPATTAS</p>
            </div>

            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs' src='https://baroque.pk/cdn/shop/files/71_61a6aa28-2b7c-430c-8c8b-d5c471d24d1a.jpg?v=1776841025&width=1200' alt='' />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">PLAIN CHIFFON DUPATTA-101</p>
              <p className="pd2"><b>PKR 3,950.00</b></p>
              <p className="pd3">DUPATTAS</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs' src='https://baroque.pk/cdn/shop/files/90_378d795b-b875-4c5f-a1ed-e30037036f1f.jpg?v=1776841221&width=1200' alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">PLAIN CHIFFON DUPATTA-103</p>
              <p className="pd2"><b>PKR 4,950.00</b></p>
              <p className="pd3">DUPATTAS</p>
            </div>

            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs' src='https://baroque.pk/cdn/shop/files/105_39200bc7-fb6b-426d-82f3-72d95ef4d662.jpg?v=1776841486&width=1200' alt='' />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">PLAIN CHIFFON DUPATTA-105</p>
              <p className="pd2"><b>PKR 4,950.00</b></p>
              <p className="pd3">DUPATTAS</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs' src='https://baroque.pk/cdn/shop/files/99_af824cec-42d7-4a29-98e5-e241490e6b53.jpg?v=1776841385&width=1200' alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">PLAIN CHIFFON DUPATTA-104</p>
              <p className="pd2"><b>PKR 4,950.00</b></p>
              <p className="pd3">DUPATTAS</p>
            </div>

            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs' src='https://baroque.pk/cdn/shop/files/179_5f963773-379b-4715-9c25-d9bea77b414c.jpg?v=1776841589&width=1200' alt='' />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">PLAIN CHIFFON DUPATTA-106</p>
              <p className="pd2"><b>PKR 4,950.00</b></p>
              <p className="pd3">DUPATTAS</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs' src='https://baroque.pk/cdn/shop/files/107_8d3f5c42-304d-48db-bc21-d26cd32ac94d.jpg?v=1776841648&width=1200' alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">PLAIN CHIFFON DUPATTA-107</p>
              <p className="pd2"><b>PKR 4,950.00</b></p>
              <p className="pd3">DUPATTAS</p>
            </div>
          </div>
        </div>
      </div>


      {/* EnD */}
    </div>
  )
}

export default Dupatts
