import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <div id="footer-bgc">
      <div className="m-f">
        <div className="footer-det">
          <h6>ABOUT</h6>
          <ul>
            <li>
              <Link to="/who-we-are">Who We Are</Link>
            </li>
            <li>
              <Link to="/our-Responsibility">Our Responsibility</Link>
            </li>
            <li>
              <Link to="/service_we_provide">Service We Provide</Link>
            </li>
            <li>
              <Link to="/Careers">Careers</Link>
            </li>
            <li>
              <Link to="/Our-store">
                Our Shop: First Floor, Dolmen Mall, Shop No F-06, Link Block DHA
                Phase 6, Lahore
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-det">
          <h6>Customer Service</h6>
          <ul>
            <li>
              <Link to="/Contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/Dispatch-timeline">Dispatch Timeline</Link>
            </li>
            <li>
              <Link to="/Exchange-information">Exchange Information</Link>
            </li>
            <li>
              <Link to="mailto:info@baroque.pk">Email: info@baroque.pk</Link>
            </li>
            <li>
              <Link to="tel:1111302302" >
                UAN 111-302-302
              </Link>
            </li>
            <li>
              <Link to="https://api.whatsapp.com/message/QZ3TRYLNGVQYN1?autoload=1&app_absent=0">WhatsApp: +92 325 7001111</Link>
            </li>
          </ul>
        </div>
        <div className="footer-det">
          <h6>Policies</h6>
          <ul>
            <li>
              <Link to="/policies/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/policies/refund-policy">Refund Policy</Link>
            </li>
            <li>
              <Link to="/policies/shipping-policy">Shipping Policy</Link>
            </li>
            <li>
              <Link to="/policies/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link to="/policies/legal">Legal</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div id="social-media" className="footer-det">
        <ul style={{ display: 'flex', gap: '30px' }} class="social-media social-media--list unstyled-list"><li class="social-media__item branding-colors--facebook">
          <Link to="https://facebook.com/baroquepk" class="tap-area" target="_blank" rel="noopener" aria-label="Follow on Facebook"><svg aria-hidden="true" focusable="false" width="24" class="icon icon-facebook" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.183 21.85v-8.868H7.2V9.526h2.983V6.982a4.17 4.17 0 0 1 4.44-4.572 22.33 22.33 0 0 1 2.667.144v3.084h-1.83a1.44 1.44 0 0 0-1.713 1.68v2.208h3.423l-.447 3.456h-2.97v8.868h-3.57Z" fill="currentColor"></path>
          </svg></Link>
        </li><li class="social-media__item branding-colors--instagram">
            <Link to="https://instagram.com/baroque_official" class="tap-area" target="_blank" rel="noopener" aria-label="Follow on Instagram"><svg aria-hidden="true" focusable="false" width="24" class="icon icon-instagram" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.4c-2.607 0-2.934.011-3.958.058-1.022.046-1.72.209-2.33.446a4.705 4.705 0 0 0-1.7 1.107 4.706 4.706 0 0 0-1.108 1.7c-.237.611-.4 1.31-.446 2.331C2.41 9.066 2.4 9.392 2.4 12c0 2.607.011 2.934.058 3.958.046 1.022.209 1.72.446 2.33a4.706 4.706 0 0 0 1.107 1.7c.534.535 1.07.863 1.7 1.108.611.237 1.309.4 2.33.446 1.025.047 1.352.058 3.959.058s2.934-.011 3.958-.058c1.022-.046 1.72-.209 2.33-.446a4.706 4.706 0 0 0 1.7-1.107 4.706 4.706 0 0 0 1.108-1.7c.237-.611.4-1.31.446-2.33.047-1.025.058-1.352.058-3.959s-.011-2.934-.058-3.958c-.047-1.022-.209-1.72-.446-2.33a4.706 4.706 0 0 0-1.107-1.7 4.705 4.705 0 0 0-1.7-1.108c-.611-.237-1.31-.4-2.331-.446C14.934 2.41 14.608 2.4 12 2.4Zm0 1.73c2.563 0 2.867.01 3.88.056.935.042 1.443.199 1.782.33.448.174.768.382 1.104.718.336.336.544.656.718 1.104.131.338.287.847.33 1.783.046 1.012.056 1.316.056 3.879 0 2.563-.01 2.867-.056 3.88-.043.935-.199 1.444-.33 1.782a2.974 2.974 0 0 1-.719 1.104 2.974 2.974 0 0 1-1.103.718c-.339.131-.847.288-1.783.33-1.012.046-1.316.056-3.88.056-2.563 0-2.866-.01-3.878-.056-.936-.042-1.445-.199-1.783-.33a2.974 2.974 0 0 1-1.104-.718 2.974 2.974 0 0 1-.718-1.104c-.131-.338-.288-.847-.33-1.783-.047-1.012-.056-1.316-.056-3.879 0-2.563.01-2.867.056-3.88.042-.935.199-1.443.33-1.782.174-.448.382-.768.718-1.104a2.974 2.974 0 0 1 1.104-.718c.338-.131.847-.288 1.783-.33C9.133 4.14 9.437 4.13 12 4.13Zm0 11.07a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm0-8.13a4.93 4.93 0 1 0 0 9.86 4.93 4.93 0 0 0 0-9.86Zm6.276-.194a1.152 1.152 0 1 1-2.304 0 1.152 1.152 0 0 1 2.304 0Z" fill="currentColor"></path>
            </svg></Link>
          </li><li class="social-media__item branding-colors--youtube">
            <Link to="https://www.youtube.com/@baroque_fashion" class="tap-area" target="_blank" rel="noopener" aria-label="Follow on YouTube"><svg aria-hidden="true" focusable="false" width="24" class="icon icon-youtube" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.44 5.243c.929.244 1.66.963 1.909 1.876.451 1.654.451 5.106.451 5.106s0 3.452-.451 5.106a2.681 2.681 0 0 1-1.91 1.876c-1.684.443-8.439.443-8.439.443s-6.754 0-8.439-.443a2.682 2.682 0 0 1-1.91-1.876c-.45-1.654-.45-5.106-.45-5.106s0-3.452.45-5.106a2.681 2.681 0 0 1 1.91-1.876c1.685-.443 8.44-.443 8.44-.443s6.754 0 8.438.443Zm-5.004 6.982L9.792 15.36V9.091l5.646 3.134Z" fill="currentColor"></path>
            </svg></Link>
          </li><li class="social-media__item branding-colors--tiktok">
            <Link to="https://www.tiktok.com/@baroque_fashion" class="tap-area" target="_blank" rel="noopener" aria-label="Follow on TikTok"><svg aria-hidden="true" focusable="false" width="24" class="icon icon-tiktok" viewBox="0 0 24 24">
              <path d="M20.027 10.168a5.125 5.125 0 0 1-4.76-2.294v7.893a5.833 5.833 0 1 1-5.834-5.834c.122 0 .241.011.361.019v2.874c-.12-.014-.237-.036-.36-.036a2.977 2.977 0 0 0 0 5.954c1.644 0 3.096-1.295 3.096-2.94L12.56 2.4h2.75a5.122 5.122 0 0 0 4.72 4.573v3.195" fill="currentColor"></path>
            </svg></Link>
          </li>
          <li class="social-media__item branding-colors--whatsapp">
            <Link to="https://wa.me/message/YXTJU7BR5F6SJ1" class="tap-area" target="_blank" rel="noopener" aria-label="Follow on WhatsApp"><svg aria-hidden="true" focusable="false" width="24" class="icon icon-whatsapp" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.354 4.552a10.336 10.336 0 0 0-7.36-3.052C6.257 1.5 1.588 6.168 1.586 11.905a10.383 10.383 0 0 0 1.39 5.202L1.5 22.5l5.516-1.447c1.52.83 3.232 1.266 4.973 1.266h.004c5.736 0 10.404-4.668 10.406-10.405a10.342 10.342 0 0 0-3.045-7.362Zm-7.36 16.01h-.004a8.639 8.639 0 0 1-4.402-1.205l-.316-.188-3.274.859.874-3.192-.206-.327a8.626 8.626 0 0 1-1.322-4.603c.002-4.769 3.882-8.649 8.653-8.649a8.59 8.59 0 0 1 6.115 2.537 8.596 8.596 0 0 1 2.53 6.119c-.002 4.769-3.881 8.649-8.649 8.649Zm4.744-6.477c-.26-.13-1.539-.76-1.777-.846-.239-.087-.412-.13-.585.13s-.672.846-.823 1.02c-.152.173-.304.195-.564.064-.26-.13-1.097-.404-2.09-1.29-.773-.69-1.295-1.54-1.447-1.801-.152-.26-.016-.401.114-.53.116-.117.26-.304.39-.456.13-.152.173-.26.26-.434.087-.173.043-.325-.022-.455s-.584-1.41-.802-1.93c-.21-.508-.425-.439-.584-.447a10.498 10.498 0 0 0-.499-.01.955.955 0 0 0-.693.326c-.239.26-.91.89-.91 2.169 0 1.28.931 2.516 1.061 2.69.13.174 1.834 2.8 4.442 3.926.62.268 1.105.428 1.482.548.623.198 1.19.17 1.638.103.5-.074 1.538-.629 1.755-1.236.216-.607.216-1.128.151-1.236-.064-.109-.238-.174-.498-.304v-.001Z" fill="currentColor"></path>
            </svg></Link>
          </li></ul>
      </div>

      <div className="m-f">
        <div id="country-options-f" className="footer-det">
          {/* Country options  */}
          <select style={{color:"white", backgroundColor:"rgb(43, 43, 43)"}} id="options">
            <option value="+92"> Pakistan</option>
            <option value="+91">Indai</option>
            <option value="+86">Chaina</option>
            <option value="+1">USA</option>
            <option value="+971">UAE</option>
            <option value="+90">Turkey</option>
          </select>
        </div>
        <div id="pg" className="footer-det">
          <p>© 2026 - BAROQUE</p>
        </div>
        <div className="footer-det">
          <img id="ft-img" width={100} src="https://tse4.mm.bing.net/th/id/OIP.VOMO352OP4axk11dPRMX2AHaB2?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
          <br /> <br />
          
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default Footer;
