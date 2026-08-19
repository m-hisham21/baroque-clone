import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import "./Stitched-eid-lawn.css";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

function Summer() {
  const navigate = useNavigate();

  const [showFilter, setShowFilter] = useState(false);
  const openFilter = () => setShowFilter(true);
  const closeFilter = () => setShowFilter(false);

    useEffect(()=> {
        document.title = "READY TO WEAR"
      },[])
  
  return (
    <div>
      <h1 className='stitched-h1'>Ready To Wear</h1>
      <button className='stitched-EL' onClick={() => navigate("/Ensembles")}>FORMAL</button>
      <button className='stitched-EL' onClick={() => navigate("/Summer")}>SUMMER</button>
      <button className='stitched-EL' onClick={() => navigate("/Velvet")}>VELVET</button>
      <button className='stitched-EL' onClick={() => navigate("/Winter")}>WINTER</button>

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
                <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/117_e851b49c-d246-4a18-a879-26089a120d37.jpg?v=1784027322&width=1200" alt="" />
                <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/116_59450b89-52fd-4426-9d3d-e76a5548aa12.jpg?v=1784027323&width=1200" alt="" />
                {/* <img src='https://baroque.pk/cdn/shop/files/232_b7bd7097-0825-41a2-aaba-0b07e9e621be.jpg?v=1783422648&width=1200' alt='' /> */}
              </Link>
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">EMBROIDERED LAWN PR-1339</p>
              <p className="pd2"><b>PKR 14,950.00</b></p>
              <p className="pd3">3 PIECE</p>
            </div>
            <div className='stitched-products-imgs-row'>
                <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/61_7441b2d4-af8b-4023-abc0-c2ebc21f93f3.jpg?v=1784026514&width=1200" alt="" />
                <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/62_ed868e5a-2574-4e4c-bb5a-893c3e14bab9.jpg?v=1784026514&width=1200" alt="" />
              {/* <img src='https://baroque.pk/cdn/shop/files/234_95c7a047-a36d-4bb1-a375-56ca43717c25.jpg?v=1783423131&width=1200' alt='' /> */}
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">EMBROIDERED LAWN PR-1336</p>
              <p className="pd2"><b>PKR 16,950.00</b></p>
              <p className="pd3">3 PIECE</p>
            </div>

            <div className='stitched-products-imgs-row'>
                <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/145_78081960-1587-4f14-8e3d-ebe76f01b510.jpg?v=1779519418&width=1200" alt="" />
                <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/143_8ea83468-d3bb-4d0d-83d4-a2b2c6371542.jpg?v=1779519418&width=1200" alt="" />
              {/* <img className='r2-imgs-products' src='https://baroque.pk/cdn/shop/files/227_0348cad6-7286-4269-8aeb-15f378cc97da.jpg?v=1783423431&width=1200' alt='' /> */}
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">EMBROIDERED LAWN PR-1276</p>
              <p className="pd2"><b>PKR 11,950.00</b></p>
              <p className="pd3">3 PIECE</p>
            </div>
            <div className='stitched-products-imgs-row'>
                <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/142_b2319257-5af6-41d5-9033-5233d42b897d.jpg?v=1783762602&width=1200" alt="" />
                <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/146_f90dfd24-7f07-49ec-9794-9fc2ca619c9f.jpg?v=1783762601&width=1200" alt="" />
              {/* <img className='r2-imgs-products' src='https://baroque.pk/cdn/shop/files/185_1c8370b8-747f-4fe6-a9fb-944ff5c30d7e.jpg?v=1782973906&width=1200 ' alt="" /> */}
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">EMBROIDERED LAWN PR-1342</p>
              <p className="pd2"><b>PKR 13,950.00</b></p>
              <p className="pd3">3 PIECE</p>
            </div>

            <div className='stitched-products-imgs-row'>
                <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/25_a6fa01a6-4b58-4d9e-9af6-087c812b041f.jpg?v=1770985616&width=1200" alt="" />
                <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/27_5d39d1dc-2aca-4502-948f-36507cafbd7a.jpg?v=1770985616&width=1200" alt="" />
              {/* <img className='r2-imgs-products' src='https://baroque.pk/cdn/shop/files/191_32abaafd-6085-472f-8cd1-604e4e464eed.jpg?v=1782974248&width=1200' alt='' /> */}
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">EMBROIDERED LAWN PR-1256</p>
              <p className="pd2"><b>PKR 13,950.00</b></p>
              <p className="pd3">3 PIECE</p>
            </div>
            <div className='stitched-products-imgs-row'>
                <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/148_8345d870-ec1d-4d2a-9a8c-5a7406d1e356.jpg?v=1783762962&width=1200" alt="" />
                <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/149_149d0b57-7dd6-4e09-9d98-4b837d3ed45b.jpg?v=1783762962&width=1200" alt="" />
              {/* <img className='r2-imgs-products' src='https://baroque.pk/cdn/shop/files/16_6d689cda-3016-48b8-ad9e-ee14520704bb.jpg?v=1781607854&width=1200' alt="" /> */}
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">EMBROIDERED LAWN PR-1343</p>
              <p className="pd2"><b>PKR 13,950.00</b></p>
              <p className="pd3">3 PIECE</p>
            </div>

            <div className='stitched-products-imgs-row'>
                <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/131_8bb320ee-3e10-41b2-9b77-e73ee7f14688.jpg?v=1783593562&width=1200" alt="" />
                <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/132_5c3d8f46-871f-4aed-93f7-3c824eedc8b3.jpg?v=1783593562&width=1200" alt="" />
              {/* <img className='r2-imgs-products' src='https://baroque.pk/cdn/shop/files/40_00bbd55e-1be2-41ea-9a46-5473ab708dd8.jpg?v=1775901917&width=1200' alt='' /> */}
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">EMBROIDERED LAWN PR-1340</p>
              <p className="pd2"><b>PKR 13,950.00</b></p>
              <p className="pd3">3 PIECE</p>
            </div>
            <div className='stitched-products-imgs-row'>
                <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/137_b8b9ae22-9e31-4641-8b8a-cebf039d9977.jpg?v=1783593891&width=1200" alt="" />
                <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/139_6a621e5e-9e0c-4b9b-af3c-7d61f00aae28.jpg?v=1783593891&width=1200" alt="" />
              {/* <img className='r2-imgs-products' src='https://baroque.pk/cdn/shop/files/24_30367082-65df-43f2-b5dc-7ba07aa01ce4.jpg?v=1781608807&width=1200' alt="" /> */}
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">EMBROIDERED LAWN PR-1341</p>
              <p className="pd2"><b>PKR 13,950.00</b></p>
              <p className="pd3">3 PIECE</p>
            </div>

            <div className='stitched-products-imgs-row'>
                <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/16_74843e0e-8c02-4516-ae7e-9feb50f80d69.jpg?v=1783593223&width=1200" alt="" />
                <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/17_1cfa93ce-0b1d-4a06-805e-2a803259de02.jpg?v=1783593223&width=1200" alt="" />
              {/* <img className='r5-imgs-products' src='https://baroque.pk/cdn/shop/files/237_eefd124b-07e6-4719-86c9-dd2194c2c95e.jpg?v=1778155809&width=1200' alt='' /> */}
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">EMBROIDERED LAWN PR-1332</p>
              <p className="pd2"><b>PKR 13,950.00</b></p>
              <p className="pd3">3 PIECE</p>
            </div>
            <div className='stitched-products-imgs-row'>
                <img className='stitched-products-imgs default-img' src="https://baroque.pk/cdn/shop/files/185_1c8370b8-747f-4fe6-a9fb-944ff5c30d7e.jpg?v=1782973906&width=1200" alt="" />
                <img className="stitched-products-imgs hover-img" src="https://baroque.pk/cdn/shop/files/184_dbbaf4ed-ae94-4d94-b3ea-17205eba1869.jpg?v=1782973906&width=1200" alt="" />
              {/* <img className='r5-imgs-products' src='https://baroque.pk/cdn/shop/files/3_82d6e091-008c-4015-9374-b46f6ae3dc88.jpg?v=1778320290&width=1200' alt="" /> */}
              <button className='add-to-cart-popup-btn'><span className='add-btn'>+</span></button>
              <button className='wishlist-btn-on-img'>♡</button>
              <p className="pd1">EMBROIDERED LAWN PR-1347</p>
              <p className="pd2"><b>PKR 14,950.00</b></p>
              <p className="pd3">3 PIECE</p>
            </div>
          </div>
        </div>
      </div>

      {/* EnD */}
    </div>
  )
}

export default Summer
