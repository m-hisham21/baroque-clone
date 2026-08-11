import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
function Header() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <marquee behavior="" direction="" style={{ backgroundColor: "rgb(36, 36, 36)", padding: "10px 5px 0px 0px", fontSize: "14px", color: "white", fontFamily: "Century Gothic" }} >
        <p> 
          <span style={{ paddingLeft: "100px" }}>FOR INTERNATIONAL WEBSITE VISIT WWW.BAROQUE.COM.PK</span>
          <span style={{ paddingLeft: "100px" }}>Call us at: UAN 111-222-333</span>
          <span style={{ paddingLeft: "100px" }}>FOR INTERNATIONAL WEBSITE VISIT WWW.BAROQUE.COM.PK</span>
          <span style={{ paddingLeft: "100px" }}>Call us at: UAN 111-222-333</span>
          <span style={{ paddingLeft: "100px" }}>FOR INTERNATIONAL WEBSITE VISIT WWW.BAROQUE.COM.PK</span>
          <span style={{ paddingLeft: "100px" }}>Call us at: UAN 111-222-333</span>
          <span style={{ paddingLeft: "100px" }}>FOR INTERNATIONAL WEBSITE VISIT WWW.BAROQUE.COM.PK</span>
          <span style={{ paddingLeft: "100px" }}>Call us at: UAN 111-222-333</span>
          <span style={{ paddingLeft: "100px" }}>FOR INTERNATIONAL WEBSITE VISIT WWW.BAROQUE.COM.PK</span>
          <span style={{ paddingLeft: "100px" }}>Call us at: UAN 111-222-333</span>
          <span style={{ paddingLeft: "100px" }}>FOR INTERNATIONAL WEBSITE VISIT WWW.BAROQUE.COM.PK</span>
          <span style={{ paddingLeft: "100px" }}>Call us at: UAN 111-222-333</span>
          <span style={{ paddingLeft: "100px" }}>FOR INTERNATIONAL WEBSITE VISIT WWW.BAROQUE.COM.PK</span>
          <span style={{ paddingLeft: "100px" }}>Call us at: UAN 111-222-333</span>
          <span style={{ paddingLeft: "100px" }}>FOR INTERNATIONAL WEBSITE VISIT WWW.BAROQUE.COM.PK</span>
          <span style={{ paddingLeft: "100px" }}>Call us at: UAN 111-222-333</span>
        </p>
      </marquee> 
      <header className="main-header">
        <div class="nav-icon" id="open_menu" onClick={handleShow}>
          <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
        </div>
        <span id="mid"> <img onClick={() => navigate("/Body")} width={150} src="https://baroque.com.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1697476590&width=805" alt="" />  </span>
        {/* Country options  */}
        <select id="option">
          <option value="+92"> Pakistan</option>
          <option value="+91">Indai</option>
          <option value="+86">Chaina</option>
          <option value="+1">USA</option>
          <option value="+971">UAE</option>
          <option value="+90">Turkey</option>
        </select>

        <div className="icon-btn" title="Wishlist" style={{ right: "10px", marginTop: "8px" }} >
          <svg aria-hidden="true" focusable="false" fill="none" stroke-width="1.5" width="24" class="" viewBox="0 0 24 24">
            <path clip-rule="evenodd" d="m12 21.844-9.588-10a5.672 5.672 0 0 1-1.063-6.551v0a5.673 5.673 0 0 1 9.085-1.474L12 5.384l1.566-1.565a5.673 5.673 0 0 1 9.085 1.474v0a5.673 5.673 0 0 1-1.062 6.548L12 21.844Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>

        <button onClick={() => setShowCart(true)} className="icon-btn" style={{ right: "45px" }}>
          <div class="nav-icon" title="Cart">
            <svg class="cls" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </div>
        </button>
        <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end" style={{ width: "400px" }} >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title> C A R T </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            
            <h5 style={{ textTransform: "uppercase", letterSpacing: "2px", textAlign: "center", paddingTop: "200px" }}>Your cart is empty</h5>
            <div className="cart-check-out-footer">
              <p>Taxes and shipping calculated at checkout</p> 
                <button className="cart-check-out-btn" onClick={()=> navigate ("/Checkout")}>CheckOut ●</button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        
          <button className="icon-btn" style={{ right: "80px" }} >

            <div class="nav-icon" title="Search">
              <svg class="cls" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
          </button>
        
        <Link to="/profile">
          <button className="icon-btn" style={{ right: "115px" }}>
            <div id="profile" className="nav-icon" title="Profile">
              <svg width="24" height="24" className="cls" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </button>
        </Link>

      </header>

      <Offcanvas  className="my-offcanvas" show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <hr style={{ width: "90%", margin: "auto" }} />
        <Offcanvas.Body>
          <p id="S_P">Special Prices</p>
          <hr />
          <details>
            <summary class="summary">Unstitched</summary>
            <p class="summary2">
              <button className="menu-buttons" onClick={() => navigate("/Summer")}>Shop All</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("/Summer")}>Dupatts</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("/Ensembles")}>Formals</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("/Winter")}>Winter</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("/Velvet")}>Velvet</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
            </p>
          </details>
          <hr />
          <details>
            <summary class="summary">Stitched</summary>
            <p class="summary2">
              <button className="menu-buttons" onClick={() => navigate("/Summer")}>Shop All</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("/Summer")}>Dupatts</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("/Ensembles")}>Formals</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("/Winter")}>Winter</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("/Velvet")}>Velvet</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
            </p>
          </details>
          <hr />
          <details>
            <summary class="summary">Chantelle</summary>
            <p class="summary2">
              <button className="menu-buttons" onClick={() => navigate("/body-unstiched-eid-lawn")}>Unstitched</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("/Stitched-eid-lawn")}>Stitched</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
            </p>
          </details>
          <hr />
          <details>
            <summary class="summary">Essentials</summary>
            <p class="summary2">
              <button className="menu-buttons" onClick={() => navigate("/Ensembles")}>Ensembles</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("/Dupatts")}>Dupatts</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("/Bottoms")}>Bottoms</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
            </p>
          </details>
          <hr />
          <details>
            <summary class="summary">Ready to wear</summary>
            <p class="summary2">
              <button className="menu-buttons" onClick={() => navigate("/Summer")}>Shop All</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("/Summer")}>Summer</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("/Ensembles")}>Formals</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("/Winter")}>Winter</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("/Velvet")}>Velvet</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
            </p>
          </details>
          <hr />
          <details>
            <summary class="summary">Eid Lawn 2026</summary>
            <p class="summary2">
              <button className="menu-buttons" onClick={() => navigate("/body-unstiched-eid-lawn")}>Unstitched</button> <hr style={{ width: "85%", margin: "auto" }}></hr>
              <button className="menu-buttons" onClick={() => navigate("./Stitched-eid-lawn")}>Stitched</button> <hr style={{ width: "85%", margin: "auto" }}></hr>

            </p>
          </details>
          <hr />

          <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', padding: 0, margin: 40 }}>
            <li>
              <a href="https://facebook.com/baroquepk" style={{ color: '#000000' }} target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" focusable="false" width="24" className="icon icon-facebook" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.183 21.85v-8.868H7.2V9.526h2.983V6.982a4.17 4.17 0 0 1 4.44-4.572 22.33 22.33 0 0 1 2.667.144v3.084h-1.83a1.44 1.44 0 0 0-1.713 1.68v2.208h3.423l-.447 3.456h-2.97v8.868h-3.57Z" fill="currentColor"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/baroque_official" style={{ color: '#000000' }} target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" focusable="false" width="24" className="icon icon-instagram" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2.4c-2.607 0-2.934.011-3.958.058-1.022.046-1.72.209-2.33.446a4.705 4.705 0 0 0-1.7 1.107 4.706 4.706 0 0 0-1.108 1.7c-.237.611-.4 1.31-.446 2.331C2.41 9.066 2.4 9.392 2.4 12c0 2.607.011 2.934.058 3.958.046 1.022.209 1.72.446 2.33a4.706 4.706 0 0 0 1.107 1.7c.534.535 1.07.863 1.7 1.108.611.237 1.309.4 2.33.446 1.025.047 1.352.058 3.959.058s2.934-.011 3.958-.058c1.022-.046 1.72-.209 2.33-.446a4.706 4.706 0 0 0 1.7-1.107 4.706 4.706 0 0 0 1.108-1.7c.237-.611.4-1.31.446-2.33.047-1.025.058-1.352.058-3.959s-.011-2.934-.058-3.958c-.047-1.022-.209-1.72-.446-2.33a4.706 4.706 0 0 0-1.107-1.7 4.705 4.705 0 0 0-1.7-1.108c-.611-.237-1.31-.4-2.331-.446C14.934 2.41 14.608 2.4 12 2.4Zm0 1.73c2.563 0 2.867.01 3.88.056.935.042 1.443.199 1.782.33.448.174.768.382 1.104.718.336.336.544.656.718 1.104.131.338.287.847.33 1.783.046 1.012.056 1.316.056 3.879 0 2.563-.01 2.867-.056 3.88-.043.935-.199 1.444-.33 1.782a2.974 2.974 0 0 1-.719 1.104 2.974 2.974 0 0 1-1.103.718c-.339.131-.847.288-1.783.33-1.012.046-1.316.056-3.88.056-2.563 0-2.866-.01-3.878-.056-.936-.042-1.445-.199-1.783-.33a2.974 2.974 0 0 1-1.104-.718 2.974 2.974 0 0 1-.718-1.104c-.131-.338-.288-.847-.33-1.783-.047-1.012-.056-1.316-.056-3.879 0-2.563.01-2.867.056-3.88.042-.935.199-1.443.33-1.782.174-.448.382-.768.718-1.104a2.974 2.974 0 0 1 1.104-.718c.338-.131.847-.288 1.783-.33C9.133 4.14 9.437 4.13 12 4.13Zm0 11.07a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm0-8.13a4.93 4.93 0 1 0 0 9.86 4.93 4.93 0 0 0 0-9.86Zm6.276-.194a1.152 1.152 0 1 1-2.304 0 1.152 1.152 0 0 1 2.304 0Z" fill="currentColor"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@baroque_fashion" style={{ color: '#000000' }} target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" focusable="false" width="24" className="icon icon-youtube" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.44 5.243c.929.244 1.66.963 1.909 1.876.451 1.654.451 5.106.451 5.106s0 3.452-.451 5.106a2.681 2.681 0 0 1-1.91 1.876c-1.684.443-8.439.443-8.439.443s-6.754 0-8.439-.443a2.682 2.682 0 0 1-1.91-1.876c-.45-1.654-.45-5.106-.45-5.106s0-3.452.45-5.106a2.681 2.681 0 0 1 1.91-1.876c1.685-.443 8.44-.443 8.44-.443s6.754 0 8.438.443Zm-5.004 6.982L9.792 15.36V9.091l5.646 3.134Z" fill="currentColor"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@baroque_fashion" style={{ color: '#000000' }} target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" focusable="false" width="24" className="icon icon-tiktok" viewBox="0 0 24 24">
                  <path d="M20.027 10.168a5.125 5.125 0 0 1-4.76-2.294v7.893a5.833 5.833 0 1 1-5.834-5.834c.122 0 .241.011.361.019v2.874c-.12-.014-.237-.036-.36-.036a2.977 2.977 0 0 0 0 5.954c1.644 0 3.096-1.295 3.096-2.94L12.56 2.4h2.75a5.122 5.122 0 0 0 4.72 4.573v3.195" fill="currentColor"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://wa.me/message/YXTJU7BR5F6SJ1" style={{ color: '#000000' }} target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" focusable="false" width="24" className="icon icon-whatsapp" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.354 4.552a10.336 10.336 0 0 0-7.36-3.052C6.257 1.5 1.588 6.168 1.586 11.905a10.383 10.383 0 0 0 1.39 5.202L1.5 22.5l5.516-1.447c1.52.83 3.232 1.266 4.973 1.266h.004c5.736 0 10.404-4.668 10.406-10.405a10.342 10.342 0 0 0-3.045-7.362Zm-7.36 16.01h-.004a8.639 8.639 0 0 1-4.402-1.205l-.316-.188-3.274.859.874-3.192-.206-.327a8.626 8.626 0 0 1-1.322-4.603c.002-4.769 3.882-8.649 8.653-8.649a8.59 8.59 0 0 1 6.115 2.537 8.596 8.596 0 0 1 2.53 6.119c-.002 4.769-3.881 8.649-8.649 8.649Zm4.744-6.477c-.26-.13-1.539-.76-1.777-.846-.239-.087-.412-.13-.585.13s-.672.846-.823 1.02c-.152.173-.304.195-.564.064-.26-.13-1.097-.404-2.09-1.29-.773-.69-1.295-1.54-1.447-1.801-.152-.26-.016-.401.114-.53.116-.117.26-.304.39-.456.13-.152.173-.26.26-.434.087-.173.043-.325-.022-.455s-.584-1.41-.802-1.93c-.21-.508-.425-.439-.584-.447a10.498 10.498 0 0 0-.499-.01.955.955 0 0 0-.693.326c-.239.26-.91.89-.91 2.169 0 1.28.931 2.516 1.061 2.69.13.174 1.834 2.8 4.442 3.926.62.268 1.105.428 1.482.548.623.198 1.19.17 1.638.103.5-.074 1.538-.629 1.755-1.236.216-.607.216-1.128.151-1.236-.064-.109-.238-.174-.498-.304v-.001Z" fill="currentColor"></path>
                </svg>
              </a>
            </li>
          </ul>

          <div className="menu-profile-div">
            <Link to="/profile">
              <button className="menu-profile">
                <div className="nav-icon" title="Profile">
                  <svg width="24" height="24" className="cls"
                    viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg> <span> A C C O U N T</span>
                </div>
              </button>
            </Link>
          </div>
          <hr />
          {/* Country options  */}
          <select id="option-menu">
            <option value="+92"> Pakistan</option>
            <option value="+91">Indai</option>
            <option value="+86">Chaina</option>
            <option value="+1">USA</option>
            <option value="+971">UAE</option>
            <option value="+90">Turkey</option>
          </select>

        </Offcanvas.Body>
      </Offcanvas>

      {/* ====== last line ====== */}

    </>
  );
}

export default Header;
