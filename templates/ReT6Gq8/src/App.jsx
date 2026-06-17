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

        // Example: Initialize Swiper if you were using it
        /*
        if (document.querySelector('.swiper-container')) {
            const swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }
            });
        }
        */
        console.log("Testimonials Section Initialized.");
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
<section className="section-padding section-bg" id="testimonials">
<div className="container">
<h2 className="section-title wow animate__animated animate__fadeInDown" data-wow-delay="0.1s">What Our Clients Say</h2>
<p className="section-subtitle wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                    We pride ourselves on delivering exceptional service and results. Hear directly from those who've experienced the Modern Solutions difference.
                </p>
<div className="testimonials-grid">

<div className="testimonial-card wow animate__animated animate__zoomIn" data-wow-delay="0.3s" data-wow-duration="0.6s">
<i className="fas fa-quote-left testimonial-quote-icon"></i>
<p className="testimonial-content">
                            Working with Modern Solutions has been a game-changer for our business. Their innovative approach and attention to detail are second to none. Highly recommended!
                        </p>
<div className="testimonial-rating">
<i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
</div>
<div className="testimonial-author-info">
<img alt="Alex Johnson" className="testimonial-avatar" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div className="testimonial-author-details">
<p className="testimonial-author-name">Alex Johnson</p>
<p className="testimonial-author-title">CEO, Tech Innovators</p>
</div>
</div>
<i className="fas fa-quote-right testimonial-quote-icon ending"></i>
</div>

<div className="testimonial-card wow animate__animated animate__zoomIn" data-wow-delay="0.45s" data-wow-duration="0.6s">
<i className="fas fa-quote-left testimonial-quote-icon"></i>
<p className="testimonial-content">
                            The team at Modern Solutions is incredibly talented and dedicated. They delivered beyond our expectations and provided excellent support throughout the project.
                        </p>
<div className="testimonial-rating">
<i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i> 
</div>
<div className="testimonial-author-info">
<img alt="Samantha Lee" className="testimonial-avatar" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div className="testimonial-author-details">
<p className="testimonial-author-name">Samantha Lee</p>
<p className="testimonial-author-title">Marketing Director, Global Corp</p>
</div>
</div>
<i className="fas fa-quote-right testimonial-quote-icon ending"></i>
</div>

<div className="testimonial-card wow animate__animated animate__zoomIn" data-wow-delay="0.6s" data-wow-duration="0.6s">
<i className="fas fa-quote-left testimonial-quote-icon"></i>
<p className="testimonial-content">
                            I was impressed by their professionalism and the quality of their work. Modern Solutions helped us streamline our operations significantly.
                        </p>
<div className="testimonial-rating">
<i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i> 
</div>
<div className="testimonial-author-info">
<img alt="David Chen" className="testimonial-avatar" src="https://randomuser.me/api/portraits/men/60.jpg"/>
<div className="testimonial-author-details">
<p className="testimonial-author-name">David Chen</p>
<p className="testimonial-author-title">Founder, Creative Co.</p>
</div>
</div>
<i className="fas fa-quote-right testimonial-quote-icon ending"></i>
</div>
</div>
</div>
</section>
</main>





    </>
  );
}
