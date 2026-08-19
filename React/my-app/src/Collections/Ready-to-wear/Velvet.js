import React, { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import "../Stitched/Stitched-eid-lawn.css";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

function Velvet() {
  const navigate = useNavigate();

  const [showFilter, setShowFilter] = useState(false);
  const openFilter = () => setShowFilter(true);
  const closeFilter = () => setShowFilter(false);

        useEffect(()=> {
          document.title = "ENSEMBLES"
        },[])
    
  return (
    <div>
      <h1 className='stitched-h1'>Ensembles</h1>
      <button className='stitched-EL' onClick={() => navigate("/Ensembles")}>FORMAL</button>
      <button className='stitched-EL' onClick={() => navigate("/Velvet")}>VELVET</button>

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
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/products/63_fff90d84-4a8b-4eba-87c0-eaa0938e4c7a.jpg?v=1632834975&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/products/64.jpg?v=1632834976&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">SOLID VELVET SUIT PR-576</p>
              <p className="stitched-pd2" title='PKR 12,950.00'><del><b>PKR 12,950.00</b></del> &nbsp;<b title='10,350' style={{ color: "rgb(245, 74, 74)" }}>PKR 10,350.00</b></p>
              <p className="stitched-pd3"> 2 PIECE</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/147_f25e373a-fa5e-4b9e-b49c-9deb7348104b.jpg?v=1757754811&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/145_85f3c26c-b9a9-456c-b1b8-f466ffdc22f9.jpg?v=1757754811&width=1200" alt="" />
              <span className='off-product' style={{ backgroundColor: "gray" }}> SOLD OUT </span>
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED CHIFFON EN-1308</p>
              <p className="stitched-pd2" title='PKR 14,950.00'><del><b>PKR 14,950.00</b></del> &nbsp;<b title='10,460' style={{ color: "rgb(245, 74, 74)" }}>PKR 11,950.00</b></p>
              <p className="stitched-pd3"> 2 PIECE</p>
            </div>
          </div>
        </div>
      </div>

      {/* EnD */}
    </div>
  )
}

export default Velvet
