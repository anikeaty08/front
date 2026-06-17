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
<section id="pricing-section">
<div className="container">
<h2 className="section-title">Choose Your <span className="highlight">Adventure!</span></h2>
<p className="section-subtitle">Simple, transparent pricing that scales with your amazing journey. No hidden fees, just pure Wowza!</p>
<div className="pricing-container">
<div className="pricing-plan">
<div className="plan-header"><h3 className="plan-name">Sprout 🌱</h3></div>
<div className="plan-price">$12<span className="price-period">/mo</span></div>
<p className="plan-description">Perfect for budding ideas and solo adventurers taking their first steps.</p>
<ul className="plan-features">
<li>1 Awesome Project</li>
<li>10GB Playful Storage</li>
<li>Community Cheerleading</li>
<li className="excluded">Advanced Magic Tools</li>
<li className="excluded">Unicorn Support Agent</li>
</ul>
<a className="plan-cta-button secondary" href="contact-section.html">Get Sprouting</a>
</div>
<div className="pricing-plan popular">
<div className="popular-badge">POPULAR!</div>
<div className="plan-header"><h3 className="plan-name">Blossom 🌸</h3></div>
<div className="plan-price">$29<span className="price-period">/mo</span></div>
<p className="plan-description">For growing teams ready to make a bigger splash and bloom online.</p>
<ul className="plan-features">
<li>10 Awesome Projects</li>
<li>50GB Playful Storage</li>
<li>Priority Support Fairies</li>
<li>Advanced Magic Tools</li>
<li className="excluded">Unicorn Support Agent</li>
</ul>
<a className="plan-cta-button" href="contact-section.html">Start Blossoming</a>
</div>
<div className="pricing-plan">
<div className="plan-header"><h3 className="plan-name">Universe 🌌</h3></div>
<div className="plan-price">$59<span className="price-period">/mo</span></div>
<p className="plan-description">For established legends creating whole new worlds and beyond.</p>
<ul className="plan-features">
<li>Unlimited Awesome Projects</li>
<li>200GB Playful Storage</li>
<li>Dedicated Support Wizards</li>
<li>All Magic Tools &amp; Potions</li>
<li>Unicorn Support Agent</li>
</ul>
<a className="plan-cta-button secondary" href="contact-section.html">Conquer Universe</a>
</div>
</div>
</div>
</section>


    </>
  );
}
