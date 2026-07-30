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
            // Shrink Nav on Scroll
            const nav = document.querySelector('.main-nav');
            if (nav) {
                if (window.scrollY > 50) { // Initial check
                    document.body.classList.add('scrolled');
                }
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 50) {
                        document.body.classList.add('scrolled');
                    } else {
                        document.body.classList.remove('scrolled');
                    }
                });
            }

            // Smooth scroll for any on-page links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    if (href.startsWith('#') && href.length > 1 && document.querySelector(href)) {
                         e.preventDefault();
                         document.querySelector(href).scrollIntoView({
                             behavior: 'smooth'
                         });
                    }
                });
            });
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
      
<nav className="main-nav">
<div className="nav-logo">
<a href="hero-section.html">Wowza!</a>
</div>
<div className="nav-links">
<ul>
<li><a href="features-section.html">Features</a></li>
<li><a href="pricing-section.html">Pricing</a></li>
<li><a href="about-section.html">About</a></li>
<li><a className="nav-cta-link" href="contact-section.html">Get Started</a></li>
</ul>
</div>
</nav>
<section id="about-section">
<div className="about-decoration about-deco-1"></div>
<div className="about-decoration about-deco-2"></div>
<div className="about-decoration about-deco-3"></div>
<div className="container">
<h2 className="section-title">Meet the <span className="highlight">Dream Weavers</span></h2>
<p className="section-subtitle">We're a quirky bunch of creators, thinkers, and digital explorers passionate about making the web a more delightful and inspiring place.</p>
<div className="about-content">
<div className="about-text">
<h3>Our Sparkly Mission ✨</h3>
<p>At Wowza!, we believe technology should be <span className="highlight-text">fun, intuitive, and empowering</span>. We're on a mission to banish boring software and build tools that not only get the job done but also bring a smile to your face. We're all about turning "that's a cool idea!" into "Wowza, that's amazing!".</p>
<p>We value creativity, collaboration, and a hefty dose of playfulness in everything we do. From the way we design our products to how we support our incredible users, we aim to sprinkle a little bit of magic everywhere. Join us on this adventure!</p>
</div>
<div className="about-image-wrapper">
<img alt="Playful Startup Team Enjoying Work" className="about-image" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
</div>
</div>
</div>
</section>


    </>
  );
}
