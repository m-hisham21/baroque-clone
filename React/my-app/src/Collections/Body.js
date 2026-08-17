import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div>
      <div className="banner-div">
        <img className="banner-img" src="https://baroque.pk/cdn/shop/files/MAin_BAnner101.jpg?v=1784641754&width=2000" alt="" />
        <h2 className="banner-head-btn">OWN YOUR NEW LOOK</h2>
        <div className="banner-btns-div">
          <Link to="/Body-unstiched-eid-lawn">
            <button className="banner-btns"> Unstitched </button>
          </Link>
          <Link to="/Stitched-eid-lawn">
            <button className="banner-btns" id="bannder-s-btn" style={{ marginLeft: "20px" }} > Stiched </button>
          </Link>
        </div>
      </div>

      <h2 className="hs">EID LAWN 2026</h2>
      <div className="row2">
        <div className="r2img">
          <Link to="./body-unstiched-eid-lawn">
            <img className="p1imgs" src="https://baroque.pk/cdn/shop/files/75_dad8343f-674d-42dd-9b86-f2f92c6fd729.jpg?v=1784200450&width=1000" alt="" />
            <button className="btns-el"> Unstiched </button>
          </Link>
        </div>
        <div className="r2img" >
          <Link to="./Stitched-eid-lawn">
            <img className="p1imgs" src="https://baroque.pk/cdn/shop/files/89_369fe03e-b817-4003-bffe-971f08c31ef2.jpg?v=1786018949&width=800" alt="" />
            <button className="btns-el"> Stiched </button>
          </Link>
        </div>
      </div>

      <h2 className="hs">READY TO WEAR</h2>
      <div className="img-rtw">
        <div style={{ cursor: "pointer" }}>
          <img className="rtw-img" src="https://baroque.pk/cdn/shop/files/MAin_BAnner98_7241b026-865d-4d64-b7f4-1e4c052f76b3.jpg?v=1784202319&width=2000" alt="" />
          <div className="rtw-btn">
            <Link to="/Summer">
              <button className="rtw-btn1" id="rtwbtnsmr" > Summer </button>
              <button className="rtw-btn1" id="rtw-btn-sa">Shop All</button>
            </Link>
          </div>
        </div>
      </div>

      <h2 className="hs">Chantelle Collection</h2>
      <div className="row2">
        <div className="r2img">
          <Link to="/body-unstiched-eid-lawn">
            <img className="p1imgs" src="https://baroque.pk/cdn/shop/files/99_71a56131-2a26-4eea-8736-6faa6fcfcbae.jpg?v=1784201783&width=1000" alt="" />
            <button className="btns-el"> Unstiched </button>
          </Link>
        </div>
        <div className="r2img">
          <Link to="/Stitched-eid-lawn">
            <img className="p1imgs"
              src="https://baroque.pk/cdn/shop/files/98_e9b48141-f535-416e-9096-53dd2ae0c1cc.jpg?v=1784201506&width=1000" alt="" />
            <button className="btns-el"> Stiched </button>
          </Link>
        </div>
      </div>
      
      <h1 className="hs">Essentials</h1>
      <div className="img-rtw">
        <img className="img2" src="https://baroque.pk/cdn/shop/files/MAin_BAnner100.jpg?v=1784210332&width=2000" alt="" />
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
