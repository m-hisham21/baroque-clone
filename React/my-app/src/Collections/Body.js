import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div>
      <div className="banner-div">
        <img className="banner-img" src="https://baroque.pk/cdn/shop/files/17_08d280b5-36a2-4260-b801-41f9b9bb7e99.jpg?v=1788264099&width=2000" alt="" />
        {/* <h2 className="banner-head-btn">OWN YOUR NEW LOOK</h2> */}
        <div className="banner-btns-div">
          <Link to="/Summer">
            {/* <button className="banner-btns"> Unstitched </button> */}
            <button className="banner-btns"> Shop All </button>
          </Link>
          <Link to="/Ensembles">
            {/* <button className="banner-btns" id="bannder-s-btn" style={{ marginLeft: "20px" }} > Stiched </button> */}
            <button className="banner-btns" id="bannder-s-btn" style={{ marginLeft: "20px" }} > Formal </button>
          </Link>
        </div>
      </div>

      <h2 className="hs">own your new look</h2>
      <div className="row2">
        <div className="r2img">
          <Link to="./body-unstiched-eid-lawn">
            <img className="p1imgs" src="https://baroque.pk/cdn/shop/files/98_e44b227e-4111-4322-a7fa-2302357b52de.jpg?v=1788264842&width=1000" alt="" />
            <button className="btns-el"> Unstiched </button>
          </Link>
        </div>
        <div className="r2img" >
          <Link to="./Stitched-eid-lawn">
            <img className="p1imgs" src="https://baroque.pk/cdn/shop/files/97_b51c7472-cfaf-4a82-ad34-acea511de724.jpg?v=1788264533&width=1000" alt="" />
            <button className="btns-el"> Stiched </button>
          </Link>
        </div>
      </div>

      {/* <h2 className="hs">READY TO WEAR</h2> */}
      <h2 className="hs">Chantelle Collection </h2>
      <div className="img-rtw">
        <div style={{ cursor: "pointer" }}>
          <img className="rtw-img" src="https://baroque.pk/cdn/shop/files/MAin_BAnner21_6a6d8a15-5d04-48cb-b583-c039a70745b6.jpg?v=1788265047&width=2000" alt="" />
          <div className="rtw-btn">
            <Link to="/Body-unstiched-eid-lawn">
              {/* <button className="rtw-btn1" id="rtwbtnsmr" > Summer </button>
              <button className="rtw-btn1" id="rtw-btn-sa">Shop All</button> */}
              <button className="rtw-btn1" id="rtwbtnsmr" > Unstitched </button>
            </Link>
            <Link to="/Stitched-eid-lawn">
              <button className="rtw-btn1" id="rtw-btn-sa"> Stitched </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <h2 className="hs">Chantelle Collection</h2> */}
      <h2 className="hs">eid lawn 26</h2>
      <div className="row2">
        <div className="r2img">
          <Link to="/body-unstiched-eid-lawn">
            <img className="p1imgs" src="https://baroque.pk/cdn/shop/files/76_1_da656e6e-675d-4737-8b65-cbcfe92b7c22.jpg?v=1788264720&width=1000" alt="" />
            <button className="btns-el"> Unstiched </button>
          </Link>
        </div>
        <div className="r2img">
          <Link to="/Stitched-eid-lawn">
            <img className="p1imgs"
              src="https://baroque.pk/cdn/shop/files/93_e319d388-8b48-4e5a-84f7-78ef3328d1eb.jpg?v=1788264872&width=1000" alt="" />
            <button className="btns-el"> Stiched </button>
          </Link>
        </div>
      </div>
      
      <h1 className="hs">Essentials</h1>
      <div className="img-rtw">
        <img className="img2" src="https://baroque.pk/cdn/shop/files/MAin_BAnner89_d682b71b-cc23-4af5-b336-6146ff26b569.jpg?v=1788244233&width=2000" alt="" />
        <div className="se-btn">
          <Link to="/Ensembles">
            <button className="rtw-btn1"> Ensembles </button>
          </Link>
          <Link to="/Dupatts">
            <button className="rtw-btn1" id="rtw-btn2"> Dupatts </button>
          </Link>
        </div>
      </div>

      {/* --- */}
    </div>
  );
}

export default Body;
