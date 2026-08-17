import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import "../Stitched/Stitched-eid-lawn.css";
import "./Ensembles.css";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

function Ensembles() {
  const navigate = useNavigate();

  const [showFilter, setShowFilter] = useState(false);
  const openFilter = () => setShowFilter(true);
  const closeFilter = () => setShowFilter(false);

  return (
    <div>
      <h1 className='stitched-h1'>ENSEMBLES</h1>
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
              <Link to="/Ensembles-cart">
                <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/158_587e89cf-f42d-493c-a593-65cd9005fc72.jpg?v=1776675226&width=1200" alt="" />
                <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/160_3cc75a30-c40f-4f50-bc1f-4c255a6f3a38.jpg?v=1776675226&width=1200" alt="" />
              </Link>
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED CHIFFON EN-1311</p>
              <p className="stitched-pd2" title='PKR 22,950.00'><b>PKR 22,950.00</b></p>
              <p className="stitched-pd3">2 PIESE</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/141_d31798b3-5703-4c2a-a138-a1776dfff155.jpg?v=1776674767&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/144_b9261d8b-095e-4576-ad73-ccf1801c294b.jpg?v=1776674834&width=600" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED CHIFFON EN-1304</p>
              <p className="stitched-pd2" title='PKR 16,950.00'><b>PKR 16,950.00</b></p>
              <p className="stitched-pd3">2 PIESE</p>
            </div>

            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/152_4d46683d-283a-431c-b7ec-de78e835e04a.jpg?v=1776675054&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/153_f2f9b50f-1ccd-4029-8832-a90ac6205cb1.jpg?v=1776675054&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED CHIFFON EN-1310</p>
              <p className="stitched-pd2" title='PKR 22,950.00'><b>PKR 22,950.00</b></p>
              <p className="stitched-pd3">2 PIECE</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/48_6f6cac24-2b43-46ed-b13f-a34bf524f17a.jpg?v=1776670772&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/45_3a69a6b6-f0dd-4df8-8191-342edd90db67.jpg?v=1776670772&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED CHIFFON EN-1297</p>
              <p className="stitched-pd2" title='PKR 19,950.00'><b>PKR 19,950.00</b></p>
              <p className="stitched-pd3"> 2 PIECE</p>
            </div>

            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/103_542df008-3343-4278-b9c1-89c516e9dff1.jpg?v=1776672576&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/102_0c0549d2-dab0-4cd2-bdd6-721b0e312a5e.jpg?v=1776672576&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED CHIFFON EN-1303</p>
              <p className="stitched-pd2"><b>PKR 16,950.00</b></p>
              <p className="stitched-pd3"> 2 PIECE</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/64_2a11393b-6296-461a-89ca-03db7245d2e6.jpg?v=1776671357&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/63_d6a1c2d7-4920-4833-9e19-26283546496a.jpg?v=1776671357&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED CHIFFON EN-1299</p>
              <p className="stitched-pd2" title='PKR 19,950.00'><b>PKR 19,950.00</b></p>
              <p className="stitched-pd3"> 2 PIECE</p>
            </div>

            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/168_4b1f163f-4fee-4ea2-82d6-90ba52655ee4.jpg?v=1776675410&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/171_ba09f824-8f64-426d-9b79-597fa1b56a98.jpg?v=1776675410&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED CHIFFON EN-1312</p>
              <p className="stitched-pd2" title='PKR 22,950.00'><b>PKR 22,950.00</b></p>
              <p className="stitched-pd3"> 2 PIECE</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/91_c680d47c-5817-4cee-a919-2d4a80e075b7.jpg?v=1776672350&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/92_c9f181bb-ba5d-4b54-9fbe-aedcea8de7cb.jpg?v=1776672350&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED CHIFFON EN-1309</p>
              <p className="stitched-pd2" title='PKR 22,950.00'><b>PKR 22,950.00</b></p>
              <p className="stitched-pd3"> 2 PIECE</p>
            </div>

            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/115_c37d1760-2bc5-4d1f-9ca5-3a11ab380a88.jpg?v=1776673281&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/116_ed36a248-8083-4c09-932f-2fa30d1a5964.jpg?v=1776673281&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED CHIFFON EN-1308</p>
              <p className="stitched-pd2" title='PKR 19,950.00'><b>PKR 19,950.00</b></p>
              <p className="stitched-pd3"> 2 PIECE</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/143_1d3210a1-88c3-4cf1-8a26-dcbf2ac6b07a.jpg?v=1744443007&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/144_ded808e0-5c46-4a50-a5ed-89dc068847d6.jpg?v=1744443007&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <span className='off-product'> -30% </span>
              <p className="stitched-pd1">EMBROIDERED CHIFFON EN-1308</p>
              <p className="stitched-pd2" title='PKR 14,950.00'><del><b>PKR 14,950.00</b></del> &nbsp;<b title='10,460' style={{ color: "rgb(245, 74, 74)" }}>PKR 10,460.00</b></p>
              <p className="stitched-pd3"> 2 PIECE</p>
            </div>

            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/38_e4d3aa32-69a4-4300-a978-718488c36f82.jpg?v=1776670485&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/37_cf54fa72-ecad-44bb-b90e-b702177e1fdc.jpg?v=1776670485&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="stitched-pd1">EMBROIDERED CHIFFON EN-1296</p>
              <p className="stitched-pd2" title='PKR 19,950.00'><b>PKR 19,950.00</b></p>
              <p className="stitched-pd3"> 2 PIECE</p>
            </div>
            <div className='stitched-products-imgs-row'>
              <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/135_6a6a1796-d1b8-43c9-b617-8e0646b3aa70.jpg?v=1744442943&width=1200" alt="" />
              <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/136_d920dbe6-5279-44fa-be1f-165bdbab57d4.jpg?v=1744442944&width=1200" alt="" />
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <span className='off-product'> -30% </span>
              <p className="stitched-pd1">EMBROIDERED CHIFFON EN-1308</p>
              <p className="stitched-pd2" title='PKR 14,950.00'><del><b>PKR 14,950.00</b></del> &nbsp;<b title='10,460' style={{ color: "rgb(245, 74, 74)" }}>PKR 10,460.00</b></p>
              <p className="stitched-pd3"> 2 PIECE</p>
            </div>
          </div>
        </div>
      </div>

      {/* EnD */}
    </div>
  )
}

export default Ensembles
