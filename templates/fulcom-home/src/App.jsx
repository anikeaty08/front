import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="header-wrapper">

<div className="header-top-row">

<div className="header-logo-block">
<img alt="Fulcom" src="https://fulcom.co.uk/wp-content/uploads/2019/06/cropped-Fulcom_type_strap_white_RGB..png" style={{height: '32px', position: 'relative', zIndex: '2'}}/>
</div>

<div className="header-right-block">
<div className="header-contact-row">
<a href="mailto:info@fulcom.co.uk">
<i className="bi bi-envelope"></i>
              info@fulcom.co.uk
            </a>
<a href="tel:02922807506">
<i className="bi bi-telephone"></i>
              029 2280 7506
            </a>
</div>
<div className="header-nav-row">
<a className="active" href="#">HOME</a>
<a href="#">ABOUT US</a>
<a href="#">SERVICES</a>
<a href="#">CASE STUDIES</a>
<a href="#">FAQ</a>
<a href="#">PORTFOLIO</a>
<a href="#">GALLERY</a>
<a href="#">CONTACT US</a>
</div>
</div>
</div>

<div className="mobile-header">
<img alt="Fulcom" src="https://fulcom.co.uk/wp-content/uploads/2019/06/cropped-Fulcom_type_strap_white_RGB..png" style={{height: '28px'}}/>
<button className="navbar-toggler" onclick="document.getElementById('mobileNav').classList.toggle('show')" type="button">
<span className="navbar-toggler-icon" style={{filter: 'invert(1)'}}></span>
</button>
</div>
<div className="mobile-nav-collapse" id="mobileNav">
<a href="#">Home</a>
<a href="#">About Us</a>
<a href="#">Services</a>
<a href="#">Case Studies</a>
<a href="#">FAQ</a>
<a href="#">Portfolio</a>
<a href="#">Gallery</a>
<a href="#">Contact Us</a>
<div style={{padding: '12px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
<a href="mailto:info@fulcom.co.uk" style={{border: 'none', padding: '4px 0', display: 'block'}}>
<i className="bi bi-envelope me-1"></i>
            info@fulcom.co.uk
          </a>
<a href="tel:02922807506" style={{border: 'none', padding: '4px 0', display: 'block'}}>
<i className="bi bi-telephone me-1"></i>
            029 2280 7506
          </a>
</div>
</div>
</div>

<section className="hero-section">
<div className="carousel slide" data-bs-ride="carousel" id="heroCarousel">
<div className="carousel-indicators">
<button className="active" data-bs-slide-to="0" data-bs-target="#heroCarousel" type="button"></button>
<button data-bs-slide-to="1" data-bs-target="#heroCarousel" type="button"></button>
<button data-bs-slide-to="2" data-bs-target="#heroCarousel" type="button"></button>
<button data-bs-slide-to="3" data-bs-target="#heroCarousel" type="button"></button>
<button data-bs-slide-to="4" data-bs-target="#heroCarousel" type="button"></button>
</div>
<div className="carousel-inner">
<div className="carousel-item active">
<img alt="Hero" className="d-block w-100" src="https://fulcom.co.uk/wp-content/uploads/2019/06/thumbnail_IMG_4638.jpg"/>
</div>
<div className="carousel-item">
<img alt="Hero 2" className="d-block w-100" src="https://fulcom.co.uk/wp-content/uploads/2019/06/thumbnail_IMG_4638.jpg"/>
</div>
<div className="carousel-item">
<img alt="Hero 3" className="d-block w-100" src="https://fulcom.co.uk/wp-content/uploads/2019/06/thumbnail_IMG_4638.jpg"/>
</div>
<div className="carousel-item">
<img alt="Hero 4" className="d-block w-100" src="https://fulcom.co.uk/wp-content/uploads/2019/06/thumbnail_IMG_4638.jpg"/>
</div>
<div className="carousel-item">
<img alt="Hero 5" className="d-block w-100" src="https://fulcom.co.uk/wp-content/uploads/2019/06/thumbnail_IMG_4638.jpg"/>
</div>
</div>
</div>
<div className="hero-overlay"></div>
<div className="hero-content">
<h1>
          SPECIALIST BUILDING SERVICES
          <br/>
          COMMISSIONING ENGINEERS
        </h1>
<a className="btn btn-hero mt-4" href="#">OUR SERVICES  →</a>
</div>
</section>

<section className="what-we-do">
<div className="container">
<div className="row align-items-center">
<div className="col-lg-6 mb-4 mb-lg-0">
<h2>What We Do</h2>
<div className="section-underline"></div>
<p>
              Our multi disciplined team provide unique cost effective solutions
              for Contractors and End Users. We can provide services throughout
              the life cycle of a project from an initial Commissionability
              Review, right through the testing and commissioning stages, up to
              and beyond Seasonal Commissioning.
            </p>
<a className="btn btn-dark-custom mt-3" href="#">READ MORE  →</a>
</div>
<div className="col-lg-6">
<div className="row g-2 wwd-images">
<div className="col-6">
<img alt="Work 1" src="https://fulcom.co.uk/wp-content/uploads/2019/06/thumbnail_IMG_4638.jpg"/>
</div>
<div className="col-6">
<img alt="Work 2" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&amp;h=300&amp;fit=crop"/>
</div>
<div className="col-6">
<img alt="Work 3" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&amp;h=300&amp;fit=crop"/>
</div>
<div className="col-3">
<img alt="Work 4" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&amp;h=300&amp;fit=crop"/>
</div>
<div className="col-3 d-flex align-items-end justify-content-end">
<div className="experience-badge">
<div className="number">19</div>
<div className="text">
                    Years Of
                    <br/>
                    Experience
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="services-section">
<div className="container py-4">
<div className="row">
<div className="col-lg-6 mb-4 mb-lg-0">

<div className="d-flex align-items-start mb-4">
<span className="service-number">01.</span>
<div>
<div className="service-title">BUILDING SERVICES COMMISSIONING</div>
</div>
</div>
<p className="service-desc ms-0 mb-4">
              Fulcom provides a broad range of commissioning services, including
              the proportional balancing of Air and Water..
            </p>

<div className="d-flex align-items-start mb-2">
<span className="service-number">02.</span>
<div>
<div className="service-title">
                  TANK CLEANING AND DISINFECTION
                  <br/>
                  OF POTABLE WATER SYSTEMS
                </div>
</div>
</div>
<p className="service-desc ms-0 mb-4">
              Cleaning and disinfection of potable water systems is undertaken
              by fully trained engineers in accordance with BS..
            </p>

<div className="d-flex align-items-start mb-2">
<span className="service-number">03.</span>
<div>
<div className="service-title">
                  PRE-COMMISSION CLEANING OF
                  <br/>
                  PIPEWORK SYSTEMS
                </div>
</div>
</div>
<p className="service-desc ms-0">
              Our engineers can undertake thorough cleaning of existing and new
              heating and chilled water systems in accordance..
            </p>
</div>
<div className="col-lg-6">
<h2 className="mb-3">Our Services</h2>
<p>
              We work to procedures and processes as recommended by BSRIA to
              ensure works achieve compliance with the CIBSE Commissioning Codes
              and Building Regulations.
            </p>
<a className="btn btn-outline-light-custom mt-3" href="#">
              View All Services  →
            </a>
</div>
</div>
</div>
</section>

<section className="portfolio-section">
<div className="container">
<div className="row align-items-center">
<div className="col-lg-4 mb-4 mb-lg-0">
<h2>Our Portfolio</h2>
<div className="section-underline"></div>
<p>Specialist Building Services Commissioning Engineers</p>
<a className="btn btn-dark-custom mt-2" href="#">
              VIEW ALL PORTFOLIO  →
            </a>
</div>
<div className="col-lg-8">
<div className="row g-3 portfolio-grid">
<div className="col-4">
<img alt="Portfolio 1" className="rounded" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="col-4">
<div className="portfolio-card-overlay position-relative">
<img alt="Portfolio 2" className="rounded" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&amp;h=400&amp;fit=crop"/>
<div className="overlay-content">
<h5>West Entertainment Center</h5>
<p>
                      We deliver reliable architectural solutions to our
                      individual and corporate clients throughout the USA.
                    </p>
</div>
<div className="portfolio-plus"><i className="bi bi-plus"></i></div>
</div>
</div>
<div className="col-4">
<img alt="Portfolio 3" className="rounded" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="col-4">
<img alt="Portfolio 4" className="rounded" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="col-4">
<img alt="Portfolio 5" className="rounded" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="col-4">
<img alt="Portfolio 6" className="rounded" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&amp;h=400&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="accreditations-section text-center">
<div className="container">
<h2>Accredations</h2>
<div className="accreditation-underline"></div>
<div className="row justify-content-center align-items-center g-4">
<div className="col-4 col-md-2">
<svg style={{height: '45px', width: 'auto', opacity: '0.5'}} viewbox="0 0 120 40">
<text fill="#333" fontFamily="Inter" fontSize="18" font-weight="700" x="10" y="28">
                CBCP
              </text>
<circle cx="8" cy="22" fill="none" r="7" stroke="#333" strokeWidth="1.5"></circle>
<circle cx="112" cy="22" fill="none" r="7" stroke="#333" strokeWidth="1.5"></circle>
</svg>
</div>
<div className="col-4 col-md-2">
<svg style={{height: '45px', width: 'auto', opacity: '0.5'}} viewbox="0 0 140 40">
<rect fill="none" height="25" stroke="#333" strokeWidth="1.5" width="25" x="5" y="8"></rect>
<text fill="#333" fontFamily="Inter" fontSize="16" font-weight="700" x="10" y="27">
                E
              </text>
<rect fill="none" height="25" stroke="#333" strokeWidth="1.5" width="25" x="33" y="8"></rect>
<text fill="#333" fontFamily="Inter" fontSize="16" font-weight="700" x="38" y="27">
                B
              </text>
<rect fill="none" height="25" stroke="#333" strokeWidth="1.5" width="25" x="61" y="8"></rect>
<text fill="#333" fontFamily="Inter" fontSize="16" font-weight="700" x="66" y="27">
                C
              </text>
<rect fill="none" height="25" stroke="#333" strokeWidth="1.5" width="25" x="89" y="8"></rect>
<text fill="#333" fontFamily="Inter" fontSize="16" font-weight="700" x="94" y="27">
                P
              </text>
</svg>
</div>
<div className="col-4 col-md-2">
<svg style={{height: '45px', width: 'auto', opacity: '0.5'}} viewbox="0 0 120 40">
<text fill="#333" fontFamily="Inter" fontSize="18" font-weight="700" x="10" y="28">
                CBCP
              </text>
<circle cx="8" cy="22" fill="none" r="7" stroke="#333" strokeWidth="1.5"></circle>
<circle cx="112" cy="22" fill="none" r="7" stroke="#333" strokeWidth="1.5"></circle>
</svg>
</div>
<div className="col-4 col-md-2">
<svg style={{height: '45px', width: 'auto', opacity: '0.5'}} viewbox="0 0 140 40">
<rect fill="none" height="25" stroke="#333" strokeWidth="1.5" width="25" x="5" y="8"></rect>
<text fill="#333" fontFamily="Inter" fontSize="16" font-weight="700" x="10" y="27">
                E
              </text>
<rect fill="none" height="25" stroke="#333" strokeWidth="1.5" width="25" x="33" y="8"></rect>
<text fill="#333" fontFamily="Inter" fontSize="16" font-weight="700" x="38" y="27">
                B
              </text>
<rect fill="none" height="25" stroke="#333" strokeWidth="1.5" width="25" x="61" y="8"></rect>
<text fill="#333" fontFamily="Inter" fontSize="16" font-weight="700" x="66" y="27">
                C
              </text>
<rect fill="none" height="25" stroke="#333" strokeWidth="1.5" width="25" x="89" y="8"></rect>
<text fill="#333" fontFamily="Inter" fontSize="16" font-weight="700" x="94" y="27">
                P
              </text>
</svg>
</div>
<div className="col-4 col-md-2">
<svg style={{height: '45px', width: 'auto', opacity: '0.5'}} viewbox="0 0 120 40">
<text fill="#333" fontFamily="Inter" fontSize="18" font-weight="700" x="10" y="28">
                CBCP
              </text>
<circle cx="8" cy="22" fill="none" r="7" stroke="#333" strokeWidth="1.5"></circle>
<circle cx="112" cy="22" fill="none" r="7" stroke="#333" strokeWidth="1.5"></circle>
</svg>
</div>
</div>
</div>
</section>

<footer className="footer-section">
<div className="container">
<div className="row">

<div className="col-lg-3 col-md-6 mb-4">
<div className="footer-logo">
<img alt="Fulcom" src="https://fulcom.co.uk/wp-content/uploads/2019/06/cropped-Fulcom_type_strap_white_RGB..png"/>
</div>
<div className="social-icons mt-3">
<a href="#"><i className="bi bi-facebook"></i></a>
<a href="#"><i className="bi bi-linkedin"></i></a>
<a href="#"><i className="bi bi-instagram"></i></a>
</div>
</div>

<div className="col-lg-2 col-md-3 col-6 mb-4">
<ul className="list-unstyled">
<li className="mb-2"><a href="#">Home</a></li>
<li className="mb-2"><a href="#">About Us</a></li>
<li className="mb-2"><a href="#">Services</a></li>
<li className="mb-2"><a href="#">Case Studies</a></li>
</ul>
</div>

<div className="col-lg-2 col-md-3 col-6 mb-4">
<ul className="list-unstyled">
<li className="mb-2"><a href="#">FAQ</a></li>
<li className="mb-2"><a href="#">Portfolio</a></li>
<li className="mb-2"><a href="#">Gallery</a></li>
<li className="mb-2"><a href="#">Contact Us</a></li>
</ul>
</div>

<div className="col-lg-5 col-md-6 mb-4">
<div className="footer-contact-info">
<p className="mb-2">
<i className="bi bi-envelope"></i>
                info@fulcom.co.uk
              </p>
<p className="mb-2">
<i className="bi bi-telephone"></i>
                029 2280 7506
              </p>
<p className="mb-2">
<i className="bi bi-printer"></i>
                029 20 020466
              </p>
<p className="mb-0">
<i className="bi bi-geo-alt"></i>
                73 Rhydhelig Avenue, Cardiff CF14 4DB
              </p>
</div>
</div>
</div>
<div className="footer-bottom text-center">
<p className="mb-0">
            Copyright © 2025 Fulcom Ltd. All Rights Reserved. |
            <a href="#">Privacy Policy</a>
</p>
</div>
</div>
</footer>


    </>
  );
}
