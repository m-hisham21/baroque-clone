import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  const handleUANClick = (e) => {
    e.preventDefault();
    window.alert("UAN 111-302-302");
  };
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
              <Link href="">Email: info@baroque.pk</Link>
            </li>
            <li>
              <Link href="#" onClick={handleUANClick}>
                UAN 111-302-302
              </Link>
            </li>
            <li>
              <Link href="https://api.whatsapp.com/message/QZ3TRYLNGVQYN1?autoload=1&app_absent=0">WhatsApp: +92 325 7001111</Link>
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
      
      <div className="footer-det">
        <ul style={{ display: 'flex', gap: '30px' }} class="social-media social-media--list unstyled-list"><li class="social-media__item branding-colors--facebook">
          <Link href="https://facebook.com/baroquepk" class="tap-area" target="_blank" rel="noopener" aria-label="Follow on Facebook"><svg aria-hidden="true" focusable="false" width="24" class="icon icon-facebook" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.183 21.85v-8.868H7.2V9.526h2.983V6.982a4.17 4.17 0 0 1 4.44-4.572 22.33 22.33 0 0 1 2.667.144v3.084h-1.83a1.44 1.44 0 0 0-1.713 1.68v2.208h3.423l-.447 3.456h-2.97v8.868h-3.57Z" fill="currentColor"></path>
          </svg></Link>
        </li><li class="social-media__item branding-colors--instagram">
            <Link href="https://instagram.com/baroque_official" class="tap-area" target="_blank" rel="noopener" aria-label="Follow on Instagram"><svg aria-hidden="true" focusable="false" width="24" class="icon icon-instagram" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.4c-2.607 0-2.934.011-3.958.058-1.022.046-1.72.209-2.33.446a4.705 4.705 0 0 0-1.7 1.107 4.706 4.706 0 0 0-1.108 1.7c-.237.611-.4 1.31-.446 2.331C2.41 9.066 2.4 9.392 2.4 12c0 2.607.011 2.934.058 3.958.046 1.022.209 1.72.446 2.33a4.706 4.706 0 0 0 1.107 1.7c.534.535 1.07.863 1.7 1.108.611.237 1.309.4 2.33.446 1.025.047 1.352.058 3.959.058s2.934-.011 3.958-.058c1.022-.046 1.72-.209 2.33-.446a4.706 4.706 0 0 0 1.7-1.107 4.706 4.706 0 0 0 1.108-1.7c.237-.611.4-1.31.446-2.33.047-1.025.058-1.352.058-3.959s-.011-2.934-.058-3.958c-.047-1.022-.209-1.72-.446-2.33a4.706 4.706 0 0 0-1.107-1.7 4.705 4.705 0 0 0-1.7-1.108c-.611-.237-1.31-.4-2.331-.446C14.934 2.41 14.608 2.4 12 2.4Zm0 1.73c2.563 0 2.867.01 3.88.056.935.042 1.443.199 1.782.33.448.174.768.382 1.104.718.336.336.544.656.718 1.104.131.338.287.847.33 1.783.046 1.012.056 1.316.056 3.879 0 2.563-.01 2.867-.056 3.88-.043.935-.199 1.444-.33 1.782a2.974 2.974 0 0 1-.719 1.104 2.974 2.974 0 0 1-1.103.718c-.339.131-.847.288-1.783.33-1.012.046-1.316.056-3.88.056-2.563 0-2.866-.01-3.878-.056-.936-.042-1.445-.199-1.783-.33a2.974 2.974 0 0 1-1.104-.718 2.974 2.974 0 0 1-.718-1.104c-.131-.338-.288-.847-.33-1.783-.047-1.012-.056-1.316-.056-3.879 0-2.563.01-2.867.056-3.88.042-.935.199-1.443.33-1.782.174-.448.382-.768.718-1.104a2.974 2.974 0 0 1 1.104-.718c.338-.131.847-.288 1.783-.33C9.133 4.14 9.437 4.13 12 4.13Zm0 11.07a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm0-8.13a4.93 4.93 0 1 0 0 9.86 4.93 4.93 0 0 0 0-9.86Zm6.276-.194a1.152 1.152 0 1 1-2.304 0 1.152 1.152 0 0 1 2.304 0Z" fill="currentColor"></path>
            </svg></Link>
          </li><li class="social-media__item branding-colors--youtube">
            <Link href="https://www.youtube.com/@baroque_fashion" class="tap-area" target="_blank" rel="noopener" aria-label="Follow on YouTube"><svg aria-hidden="true" focusable="false" width="24" class="icon icon-youtube" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.44 5.243c.929.244 1.66.963 1.909 1.876.451 1.654.451 5.106.451 5.106s0 3.452-.451 5.106a2.681 2.681 0 0 1-1.91 1.876c-1.684.443-8.439.443-8.439.443s-6.754 0-8.439-.443a2.682 2.682 0 0 1-1.91-1.876c-.45-1.654-.45-5.106-.45-5.106s0-3.452.45-5.106a2.681 2.681 0 0 1 1.91-1.876c1.685-.443 8.44-.443 8.44-.443s6.754 0 8.438.443Zm-5.004 6.982L9.792 15.36V9.091l5.646 3.134Z" fill="currentColor"></path>
            </svg></Link>
          </li><li class="social-media__item branding-colors--tiktok">
            <Link href="https://www.tiktok.com/@baroque_fashion" class="tap-area" target="_blank" rel="noopener" aria-label="Follow on TikTok"><svg aria-hidden="true" focusable="false" width="24" class="icon icon-tiktok" viewBox="0 0 24 24">
              <path d="M20.027 10.168a5.125 5.125 0 0 1-4.76-2.294v7.893a5.833 5.833 0 1 1-5.834-5.834c.122 0 .241.011.361.019v2.874c-.12-.014-.237-.036-.36-.036a2.977 2.977 0 0 0 0 5.954c1.644 0 3.096-1.295 3.096-2.94L12.56 2.4h2.75a5.122 5.122 0 0 0 4.72 4.573v3.195" fill="currentColor"></path>
            </svg></Link>
          </li>
          <li class="social-media__item branding-colors--whatsapp">
            <Link href="https://wa.me/message/YXTJU7BR5F6SJ1" class="tap-area" target="_blank" rel="noopener" aria-label="Follow on WhatsApp"><svg aria-hidden="true" focusable="false" width="24" class="icon icon-whatsapp" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.354 4.552a10.336 10.336 0 0 0-7.36-3.052C6.257 1.5 1.588 6.168 1.586 11.905a10.383 10.383 0 0 0 1.39 5.202L1.5 22.5l5.516-1.447c1.52.83 3.232 1.266 4.973 1.266h.004c5.736 0 10.404-4.668 10.406-10.405a10.342 10.342 0 0 0-3.045-7.362Zm-7.36 16.01h-.004a8.639 8.639 0 0 1-4.402-1.205l-.316-.188-3.274.859.874-3.192-.206-.327a8.626 8.626 0 0 1-1.322-4.603c.002-4.769 3.882-8.649 8.653-8.649a8.59 8.59 0 0 1 6.115 2.537 8.596 8.596 0 0 1 2.53 6.119c-.002 4.769-3.881 8.649-8.649 8.649Zm4.744-6.477c-.26-.13-1.539-.76-1.777-.846-.239-.087-.412-.13-.585.13s-.672.846-.823 1.02c-.152.173-.304.195-.564.064-.26-.13-1.097-.404-2.09-1.29-.773-.69-1.295-1.54-1.447-1.801-.152-.26-.016-.401.114-.53.116-.117.26-.304.39-.456.13-.152.173-.26.26-.434.087-.173.043-.325-.022-.455s-.584-1.41-.802-1.93c-.21-.508-.425-.439-.584-.447a10.498 10.498 0 0 0-.499-.01.955.955 0 0 0-.693.326c-.239.26-.91.89-.91 2.169 0 1.28.931 2.516 1.061 2.69.13.174 1.834 2.8 4.442 3.926.62.268 1.105.428 1.482.548.623.198 1.19.17 1.638.103.5-.074 1.538-.629 1.755-1.236.216-.607.216-1.128.151-1.236-.064-.109-.238-.174-.498-.304v-.001Z" fill="currentColor"></path>
            </svg></Link>
          </li></ul>
      </div>

      <div className="m-f">
        <div className="footer-det">
          {/* Country options  */}
          <select id="options">
            <option value="+92"> Pakistan</option>
            <option value="+91">Indai</option>
            <option value="+86">Chaina</option>
            <option value="+1">USA</option>
            <option value="+971">UAE</option>
            <option value="+90">Turkey</option>
          </select>
        </div>
        <div className="footer-det">
          <p>© 2026 - BAROQUE</p>
        </div>
        <div className="footer-det">
          {/* <img width={50} src="https://th.bing.com/th/id/OIP._VhDEZTT9T5bcaNTLp75pwHaHa?w=169&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="" /> */}
          <img
            width={100}
            src="data:image/webp;base64,UklGRmoNAABXRUJQVlA4IF4NAACQSgCdASrGAYMAPp1GnkmlpCMhLdZpCLATiU3filXcd3uvS4567+488R2VGSfRj8fqPfC+bvzO+jAkn36h/mOyr/YeY+s2w/2n/WhP92T8AJ4HaBYJfzfnD9jddP+0eoN/Nf8V6zf+h5oBZtYXeZgb4MuAH/l5rmh3aZURHKg2buJflnfajH/+xq6/cMtfVyUG6BfETdToEbZ3zTC+UTtMi0Zm5HqgT5EyKbaXESfFgXt5dUNu3gaTe2RHKkSZCJZmCmZWOMQ7/30ogLLVZ/CJHo1WmBfB18Y9cofmZJZrptREgvIZjYMa5hSdaj2jD9ucmlkUhl7FE0iBuAwAP5vsc5dGOv0WhdbphpeFriDG5NQFHtDzejCX0BsLXnUV7WbUGsA3dr9Srp1vwHaddU7AZeZ0Q5G78vR7CvHW58y9BTJjlt13qRg0GSKpMH40u9IKzwHX+cQxjFRD0bOk4DeI2KpsNiBopU9+kN2unJkfgijepaB+2gqGjK0/5hvsYjPgSOqakqxc994CA6r7Wpw70O6huTZ1WkfNLZYK7HpCkhET1jAX615DpmdDSzB2a81ndKZdshMe0UH+wrBPCLIsrgoBirASFfSjlPqbhijiQMsRjPsEl+153O7goNulyQuJHpx915aoUdNawngCE5i96d5P5WwH8W117o1LG3TiObVQ5bej0CUUKtUD0GZfyuLquPrqE9WSDGMnRLjY0dSAvXeC3ZhlKImtFeb9EY1DjM6CFwwKehDD1lBIkuYaKYOZYTQmHozK9WdMZDATjyzSHxFRAN0C+Im6nQLqAAD++wOSC08W1Sgzv31IRQxnQs7kb0ldAKolAXX2+uTem78wElKBKaTGu1tSleLp+nr3bwmJNKRdqJsVq/PoGvYL9MhAie/8wDZcO3tiPkv3j7gyYyR4BEK8b6r7BymwBQPH4Uj5wys54QYSJiSLKB9NHq56fuK/mURQL2Z+9Bhk6+jFG6ANR6kIyTSjnoRjEohsHGrfxcu16sfrv31+pHJAb1dJLFhC43jbZXghWGuQF1Gb11cW1OEt4tINixN4+tU3y+Uledjiv19oI7GAdi0OHGl66pm0N33szPUrcKwIAmu3J2fxmvaLNM8UM3qBW1hgvecBcmH8/4f2vMqhPMA6+eyq71aJkLPlTHTcXXZhmxl+2EC7EJOL6duEDv62ronjAAAAPWT7UR5q4fjum7RegGecZoYzCJ3IXsMLCeBs6FXidegx6ScYgcNN+fAXyUnaGMt2Cg+JUdkr6erI+9rfj2X3x+JLz7M5qs5u3UDD0i/Y/ZNvu2l8NRCYlP2YzVlgFdFPPyYPS29kWAKa0mFgVLR+msnRm6w0GP9RXVoIH2diyAMa0CalrbARx/IFF1MpQn2T0soc0E7YwxBZYCpqk7q9iyTTH46MPfv2G2f9CATArkgt3IJtU4PS4/C+K2eQv+9ZLsLvCMr6ckDRtsG1vmk/fwlyRKh7F4g4OaAUz056NInROw46DaacTo7ohrWtZdQfIFoT0FdATkf5iJ2480iqc6YHBKguwWKqpLC5jkCOVFTrhqM42UmHwtYYaWrn23lVZ5k8m4Wn7R9PMOXiGVjYj5PKM0c+M6TNRCQz+/1T7xFwAgIje9ozvRlL0UqvX8lp4MJkfcL0yRwuEeKqCkDnUsy91BKAb8CDEvZMz9USfP+9/YVcEupZV5v3Y2BxX8FLd4L5KDtateZdC1LrZhPaYDr+LsAjGMa7XNcj1g9s+T5zAa7z80L1RG7/7wGw/3L3cyzgFkA6+o+6V5o3uC6Z5PLZI8SZMnF39C0mhkCA0m3kk0r0Q2dLrndtmwkQMpTFC2xT/SOPmJG+ADHPvX83HHMpe6qo0eHk15rw5pSIy4TH/2sEmCW4eR8IsaTqatkhMAhlYMteeiJv2/ldJb7E+bgzwVdQiwKl4VLSpBVKqtpC+S+NQooM80zZJfoSUSXYbsBi+q/DPBz0kEsJdd8GBEuWrIHNljHTLPU11pCWBcV/wZjsbS1QQiNJ7MfaIJX2Xd/XGGG6EZG+3cthFl52EjhyFOvX+Fyq5dINCgb6+2cdLXH/4GvgNiUxcmbDrTQuizAgQ5JIXABw6SnNgl7AJMpyv+kQy3jjLsMSh/68zMfk8HZKbNLdXPDR0NHy+5nLLizB6okYxOcTQEv1EP28lWd31oqt88HM45bVBkJsWSoIcVwcsvimNXaGuwOqxGGAKmhdnVIV389kyQbUeasZ5n9LLPOp4MXNO+Z7HgyKPJH9acOfd8ddfckpd6wmWYuLJbO3VFZ0DR4suJW226svV3JnTHT8a5Z/T3J/60f5PHKeDqE5++KwZMKCqsZf9hJX/k5u5P9MTROKJemYgOU3hr4PzMrjQpUEENLvICGz3NA21ypaxKz8oI2Ipnhnpr5iMQhHpzCoIquRMUkpTBkLxEYKya8m5Bnw5MqSJX1hLM3+OLg15iDzp4Bj7iE4W0hcVHNDUQo4HFse3TMmzXBYPdGGLq043kQY8XlA9mrPFayqWG/CXnXm4h/2GxeDwyHDsNlKOgNjVz/fc8o9XfQfZ03KjAcl2sv21DddhkrVccoOKJEX4EXnq/DUkXhpf/bbuuq71tPbbWB+XoT4RqIhO+v0Wk4e9YKhH94e0StWPblfHPekVIz11Bh0ZZT5cGUsYMscNhhHvRFn6aqKJgDeNDa9/gw3RtEDABmik8JIew4Bz8ehsd32nqXkOyBbzMM70piBOI3k0y/G4TUlyJxanrdZgl5Zkma/b9vfc7UOfulzAVTNla3T7BJ7LJfbevXs83pXevFKHgrnDfpf50MK/ls3R4bAikGr9EhrRBCPQBhpVthzoBtEqb8FZNC/vAfgbF/Tx+k5J4MthTMUeOVCUH6u5sCo2lkAXcR8b9tBoiFiLoJCpbHluapoPBtQ3ymwHQY/Im1Q3IVqCp5o2JqHmu21Ek+fWPXfGG8wEVVC4ytTCAVVQ8pCXUgT1f4ENQ9UH6WqmsJbrlWMcoESd8VkWVGemuSUzPZWfiKBoZp8BuIrT895Wzpg+yDJ6zEJkpKEEzPvpLIHdnGRa5ch4oW/4K3wWuJ5ttBUxibM4SykGD9znOxi8s56Y+FYuw4mEqgyVjXgsfW+lvYRCgqC9VffZCCbi3BAkGG3vZ8WhmYYOv0slldpfQREcHSRPlnZIHcyzkCNwAm5yth+OMmvZyz0RKS6pQ84w2fy67SBzaAlOgesRXrqR4TESWnhiYJRsOv4GJ3TwuWRCCWrjpwjH07u3IVBtngFXd9lI+2uZEoQcChFVLYjBIUAONh5qZj2rgf2PVIP2OIqlN3Eqb0bktYaj1Ot7OmqELtWagS+8Y9MVFmD+94n05LG73YuTjbes1gywENOeZ7mVMWw6XoMKNuIHKR9UycJM2XE6Bvu3VH/jkDwXqY0cT5GsZ4fk5HtKaZWDtaIp4CHhFxZH+ANc1stt3KvlesisgFjvQVjDWimJar0C63DewKHx/cMcJx+os08u6bBU337K6PjZ/V2L7pBEUD7Ps86nleXSZYl22wWv7GMstzksd1mU1zLoRo6CUhakixANp3MYcPBh8lzMRz93qmyQTMA+VLO74ljbvQyABncj8sQhrA+wfgrLLRXLNID6MWyi7CssomlTGT11Ith/kLyS3l7JsT1KSEUYvtAFjGnMOtJamToEjabP4mRQgwCwMAragmiuGZ5IclaAIUhw2JhOGpXdBmW3g5P3x3mvN9nW1oenCfTDDSfg6vHrJNEKsSzbzeuAEoG13g4WbetSRJtN1YsEIsn4VYU8GVzMBoFoW9kZ0jxklldQ9sGVha+fwHvZNXkFbZxJ1M7OwJQW2abBUmn6JwMVBRhUXYcvySzDRviz49aTEUkQK/kkq+OHn50wtrSV0r6Kad730mH8MVxrIbU19drofUG2QAMLLpIZl5a9qI/MrEVfzfI0XRc1qgj2L/CvSDSOTnoOtVfCOUleq1Ot9ft6Aed8wlTTQNfQi0YboH5TQO8OkRAnaGwEHNGHyPS9H4uDi7FOyWcbkAN0+sWltVhRfTUOtmy5qWEV6iDxy9EQaIs9RiFB/qqHe7KQY4Ez4NSOrcarhIq+SHWkoyW4jDOXiKHSY8f7nvA0Huzqo6mIW4hMO8ePRktY8spwuSJhPqgJANLx1iAIZPv5a52YQqiOLDC+7lCCYTIBtgWAw1lsFI7yq7E88J3lCPBoc026RN7EHCzrPwj0AobB3lN1lHOXK3cqMxeVemL3UC1qM40vkGQv6BQRLwL/iG5n/nsXX6g22rSMzu23TjB72kX2g3FvSei1L9fOrfL0yz5nRGWoprdbOET/1UMxK9S1KcUF0Civhy9DPi1/TjJAGHdV+kuf+GTqijpIH+KusMRX7rSzkxtTElQwGTADxAAA9AAAWRueIoxzA2o2v7RYvYuoyeNI9kTlQVbq2Bp6sNOXIRBpr19AP0a2qkE+vAZh3pryK7n50E4xVHelzb0YjI21V9ugdhM8EMsGNlMXitKHW8t4vMsg9IeabOikn8/54mcuqwDf1no92GsOmetiAtgAAAAAAAAAA=="
            alt=""
          />
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default Footer;
