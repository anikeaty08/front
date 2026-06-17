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
            offset: 50,
            mobile: true,
            live: true
        }).init();

        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();
                // Basic form submission alert, replace with actual AJAX submission
                alert('Form submitted! (This is a demo, data not actually sent)');
                this.reset(); // Reset form after submission
            });
        }
        console.log("Contact Section Initialized.");
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
<section className="section-bg" id="contact">
<div className="container">
<h2 className="section-title wow animate__animated animate__fadeInDown" data-wow-delay="0.1s">Get In Touch</h2>
<p className="section-subtitle wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                    Have a question, a project idea, or just want to say hello? We'd love to hear from you. Reach out through any of the methods below.
                </p>
<div className="contact-layout">
<div className="contact-info wow animate__animated animate__fadeInLeft" data-wow-delay="0.3s" data-wow-duration="0.8s">
<h3>Contact Information</h3>
<div className="contact-info-item">
<i className="fas fa-map-marker-alt"></i>
<div className="contact-info-item-content">
<p>123 Innovation Drive</p>
<p>Suite 404, Tech City, TX 75001</p>
</div>
</div>
<div className="contact-info-item">
<i className="fas fa-phone-alt"></i>
<div className="contact-info-item-content">
<p><a href="tel:+1234567890">(123) 456-7890</a></p>
</div>
</div>
<div className="contact-info-item">
<i className="fas fa-envelope"></i>
<div className="contact-info-item-content">
<p><a href="mailto:info@modernsolutions.com">info@modernsolutions.com</a></p>
</div>
</div>
<div className="contact-info-item">
<i className="fas fa-clock"></i>
<div className="contact-info-item-content">
<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
<p>Saturday: 10:00 AM - 2:00 PM</p>
</div>
</div>
</div>
<div className="contact-form-wrapper wow animate__animated animate__fadeInRight" data-wow-delay="0.4s" data-wow-duration="0.8s">
<h3>Send Us a Message</h3>
<form action="#" id="contactForm" method="POST">
<div className="form-group">
<label htmlFor="name">Full Name</label>
<input className="form-control" id="name" name="name" placeholder="e.g., Jane Doe" required="" type="text"/>
</div>
<div className="form-group">
<label htmlFor="email">Email Address</label>
<input className="form-control" id="email" name="email" placeholder="e.g., jane.doe@example.com" required="" type="email"/>
</div>
<div className="form-group">
<label htmlFor="subject">Subject</label>
<input className="form-control" id="subject" name="subject" placeholder="e.g., Project Inquiry" required="" type="text"/>
</div>
<div className="form-group">
<label htmlFor="message">Message</label>
<textarea className="form-control" id="message" name="message" placeholder="Your message here..." required="" rows="5"></textarea>
</div>
<button className="btn-submit" type="submit">
                                Send Message <i className="fas fa-paper-plane"></i>
</button>
</form>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
