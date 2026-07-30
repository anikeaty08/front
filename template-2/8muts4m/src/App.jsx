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



    document.addEventListener('DOMContentLoaded', () => {
        new WOW({
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 10, // Trigger animations a bit earlier
            mobile: true,
            live: true
        }).init();
        console.log("Features Section Initialized (Simplified BG).");
    });
    
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
      
<main>
<section className="section-padding section-bg" id="features">
<div className="container">
<h2 className="section-title wow animate__animated animate__fadeInDown" data-wow-delay="0.1s">Core Features</h2>
<p className="section-subtitle wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                    Explore the powerful tools and capabilities that set our platform apart. We focus on innovation, usability, and performance to deliver exceptional results.
                </p>
<div className="features-grid">
<div className="feature-card wow animate__animated animate__fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.6s">
<div className="feature-icon-wrapper"> <i className="fas fa-bolt"></i> </div>
<h3 className="feature-title">Lightning Fast</h3>
<p className="feature-description"> Experience unparalleled speed and responsiveness with our optimized infrastructure, ensuring your tasks are completed in record time. </p>
<a className="feature-link" href="feature-detail-speed.html">Learn More <i className="fas fa-arrow-right"></i></a>
</div>
<div className="feature-card wow animate__animated animate__fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s">
<div className="feature-icon-wrapper"> <i className="fas fa-shield-alt"></i> </div>
<h3 className="feature-title">Secure & Reliable</h3>
<p className="feature-description"> Your data's safety is our top priority. We employ state-of-the-art security measures and robust protocols for peace of mind. </p>
<a className="feature-link" href="feature-detail-security.html">Security Details <i className="fas fa-arrow-right"></i></a>
</div>
<div className="feature-card wow animate__animated animate__fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.6s">
<div className="feature-icon-wrapper"> <i className="fas fa-cogs"></i> </div>
<h3 className="feature-title">Highly Customizable</h3>
<p className="feature-description"> Tailor the platform to your exact needs with flexible settings and extensive integration options. Make it truly yours. </p>
<a className="feature-link" href="feature-detail-custom.html">Customization Options <i className="fas fa-arrow-right"></i></a>
</div>
<div className="feature-card wow animate__animated animate__fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.6s">
<div className="feature-icon-wrapper"> <i className="fas fa-headset"></i> </div>
<h3 className="feature-title">24/7 Support</h3>
<p className="feature-description"> Our dedicated support team is always available to assist you with any questions or issues, ensuring a smooth experience. </p>
<a className="feature-link" href="contact.html">Contact Support <i className="fas fa-arrow-right"></i></a>
</div>
<div className="feature-card wow animate__animated animate__fadeInUp" data-wow-delay="0.7s" data-wow-duration="0.6s">
<div className="feature-icon-wrapper"> <i className="fas fa-chart-line"></i> </div>
<h3 className="feature-title">Advanced Analytics</h3>
<p className="feature-description"> Gain valuable insights with our comprehensive analytics dashboard. Track progress, identify trends, and make data-driven decisions. </p>
<a className="feature-link" href="feature-detail-analytics.html">Explore Analytics <i className="fas fa-arrow-right"></i></a>
</div>
<div className="feature-card wow animate__animated animate__fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.6s">
<div className="feature-icon-wrapper"> <i className="fas fa-mobile-alt"></i> </div>
<h3 className="feature-title">Mobile Responsive</h3>
<p className="feature-description"> Access your tools and data seamlessly on any device. Our platform is fully responsive for an optimal experience on the go. </p>
<a className="feature-link" href="feature-detail-mobile.html">Mobile Access <i className="fas fa-arrow-right"></i></a>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
