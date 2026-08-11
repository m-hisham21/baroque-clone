import "./App.css";
import React, { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// Header
import Profile from "./Components/Profile";

// Body
import Body from "./Collections/Body";
import Ensembles from "./Collections/Ready-to-wear/Ensembles";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import websiteLogo from './B-W-Imgs/download.webp';
import BodyUnstitchedEidLawn from "./Collections/Unstitched/Body_unstiched_eid_lawn";
import UnstitchedEidLawn25 from "./Collections/Unstitched/Unstitched-eid-lawn-25";
import UnstitchedEidLawn26 from "./Collections/Unstitched/Unstitched-eid-lawn-26";
import StitchedEidLawn from "./Collections/Stitched/Stitched-eid-lawn";
import StitchedEidLawn25 from "./Collections/Stitched/Stitched-eid-lawn-25";
import StitchedEidLawn26 from "./Collections/Stitched/Stitched-eid-lawn-26";
import UnstitchedEidLawnProducts from "./Collections/Unstitched/Unstitched-eid-lawn-products";
import EnsembalsCart from "./Collections/Ready-to-wear/Ensembles-cart"
import Dupatts from "./Collections/Ready-to-wear/Dupatts"
import Summer from "./Collections/Stitched/Summer"
import Velvet from "./Collections/Ready-to-wear/Velvet"
import Winter from "./Collections/Ready-to-wear/Winter"
import Bottoms from "./Collections/Ready-to-wear/Bottoms"

// Footer
import WhoWeAre from "./Pages/Who_we_are";
import OurResponsibility from "./Pages/Our-Responsibility";
import ServiceWeProvide from "./Pages/Service-we-provide";
import Careers from "./Pages/Careers";
import OurStore from "./Pages/Our-store";
import ContactUs from "./Pages/Contact-us";
import DispatchTimeline from "./Pages/Dispatch-timeline";
import ExchangeInformation from "./Pages/Exchange-information";
import PrivacyPolicy from "./Pages/Privacy-policy";
import RefundPolicy from "./Pages/Refund-policy";
import ShippingPolicy from "./Pages/Shipping-policy";
import TermsOfService from "./Pages/Terms-of-service";
import Legal from "./Pages/Legal";
import Checkout from "./Components/Checkout";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const location = useLocation();
  const hideHeaderFooter = ["/Checkout", "/profile"].includes(location.pathname);

  return (
    <div className="App">
      {!hideHeaderFooter && <Header />}
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Body" element={<Body />} />
          <Route path="/Ensembles" element={<Ensembles />} />
          <Route path="/UnstitchedEidLawnProducts" element={<UnstitchedEidLawnProducts />} />
          <Route path="/body-unstiched-eid-lawn" element={<BodyUnstitchedEidLawn />} />
          <Route path="/Unstitched-eid-lawn-25" element={<UnstitchedEidLawn25 />} />
          <Route path="/Unstitched-eid-lawn-26" element={<UnstitchedEidLawn26 />} />
          <Route path="/Stitched-eid-lawn" element={<StitchedEidLawn />} />
          <Route path="/Stitched-eid-lawn-25" element={<StitchedEidLawn25 />} />
          <Route path="/Stitched-eid-lawn-26" element={<StitchedEidLawn26 />} />
          <Route path="/Ensembles-cart" element={<EnsembalsCart />} />
          <Route path="/Dupatts" element={<Dupatts />} />
          <Route path="/Summer" element={<Summer />} />
          <Route path="/Bottoms" element={<Bottoms />} />
          <Route path="/Velvet" element={<Velvet />} />
          <Route path="/Winter" element={<Winter />} />
        {/* Footer */}
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/our-Responsibility" element={<OurResponsibility />} />
          <Route path="/service_we_provide" element={<ServiceWeProvide />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Our-store" element={<OurStore />} />
          <Route path="/Contact-us" element={<ContactUs />} />
          <Route path="/Dispatch-timeline" element={<DispatchTimeline />} />
          <Route path="/Exchange-information" element={<ExchangeInformation />} />
          <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/policies/refund-policy" element={<RefundPolicy />} />
          <Route path="/policies/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/policies/terms-of-service" element={<TermsOfService />} />
          <Route path="/policies/legal" element={<Legal />} />
          <Route path="/profile" element={<Profile />} />
        <Route path="/Checkout" element={<Checkout/>} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
