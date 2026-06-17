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
            const nav = document.querySelector('.main-nav');
            if (nav) {
                if (window.scrollY > 50) { document.body.classList.add('scrolled'); }
                window.addEventListener('scroll', () => {
                    document.body.classList.toggle('scrolled', window.scrollY > 50);
                });
            }

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    if (href.startsWith('#') && href.length > 1 && document.querySelector(href)) {
                         e.preventDefault();
                         document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });

            const contactFormWrapper = document.querySelector('.contact-form-wrapper');
            if (contactFormWrapper) {
                const setFormHeightVar = () => {
                    contactFormWrapper.style.setProperty('--form-height', contactFormWrapper.offsetHeight + 'px');
                };
                setFormHeightVar();
                window.addEventListener('resize', setFormHeightVar); // Update on resize

                const confettiPieces = contactFormWrapper.querySelectorAll('.form-confetti');
                const confettiObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            confettiPieces.forEach(piece => {
                                piece.classList.add('animate-confetti');
                            });
                        } else {
                            confettiPieces.forEach(piece => {
                                piece.classList.remove('animate-confetti');
                            });
                        }
                    });
                }, { threshold: 0.1 }); // Start when 10% of the form is visible
                confettiObserver.observe(contactFormWrapper);
            }
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
<section id="contact-section">
<div className="container">
<h2 className="section-title">Let's Create Something <span className="highlight">Wowza!</span></h2>
<p className="section-subtitle">Got a brilliant idea brewing? Need a sprinkle of digital magic? Or just want to say hi? We're all ears and excited to connect!</p>
<div className="contact-form-wrapper">
<div className="form-confetti c1"></div><div className="form-confetti c2"></div>
<div className="form-confetti c3"></div><div className="form-confetti c4"></div>
<div className="form-confetti c5"></div>
<div className="form-confetti c6"></div><div className="form-confetti c7"></div>
<form action="#" method="POST" onsubmit="alert('Form submitted (not really)! Thanks for reaching out!'); this.reset(); return false;">
<div className="form-group">
<label htmlFor="name">Your Awesome Name</label>
<input className="form-input" id="name" name="name" placeholder="e.g., Captain SparklePants" required="" type="text"/>
</div>
<div className="form-group">
<label htmlFor="email">Your Magic Email</label>
<input className="form-input" id="email" name="email" placeholder="you@wonderland.com" required="" type="email"/>
</div>
<div className="form-group">
<label htmlFor="message">Your Brilliant Idea or Question</label>
<textarea className="form-textarea" id="message" name="message" placeholder="Tell us all about it..." required="" rows="5"></textarea>
</div>
<div className="submit-button-wrapper">
<button className="submit-button" type="submit">Send Your Wowza! <span className="icon">🚀</span></button>
</div>
</form>
</div>
</div>
</section>


    </>
  );
}
