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



        const carousel = document.querySelector('.carousel');
        const cards = document.querySelectorAll('.testimonial-card');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        let currentIndex = 0;
        const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginRight);
        const maxIndex = cards.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
        
        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
            prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
            nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
        }
        
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        });
        
        window.addEventListener('resize', () => {
            const newMaxIndex = cards.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
            if (currentIndex > newMaxIndex) {
                currentIndex = newMaxIndex;
            }
            updateCarousel();
        });
        
        updateCarousel();
    
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
      
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Testimonials</h2>
<h3 className="mt-2 text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-gray-900">What Our Clients Say</h3>
<div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
<p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">We take pride in delivering exceptional experiences. Here's what our clients have to say about working with us.</p>
</div>
<div className="carousel-container">
<div className="carousel flex space-x-6 md:space-x-8 pb-8 px-4">

<div className="testimonial-card flex-none w-full md:w-1/2 lg:w-1/3 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 p-8">
<div className="relative quote-mark">
<div className="avatar-container w-20 h-20 mx-auto mb-6">
<img alt="Alex Johnson" className="w-full h-full object-cover rounded-full border-4 border-white shadow-md" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" />
</div>
<div className="text-xl text-yellow-400 mb-4">★★★★☆</div>
<blockquote className="text-lg font-medium text-gray-700 italic mb-6 relative z-10">
                            This service completely transformed our workflow. The efficiency gains are incredible, and the support team is always responsive and helpful. Highly recommended!
                        </blockquote>
<div className="pt-4 border-t border-gray-100">
<p className="font-semibold text-gray-900 mb-1">Alex Johnson</p>
<p className="text-sm text-blue-600">CEO, Tech Innovators Inc.</p>
</div>
</div>
</div>

<div className="testimonial-card flex-none w-full md:w-1/2 lg:w-1/3 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 p-8">
<div className="relative quote-mark">
<div className="avatar-container w-20 h-20 mx-auto mb-6">
<img alt="Sarah Williams" className="w-full h-full object-cover rounded-full border-4 border-white shadow-md" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" />
</div>
<div className="text-xl text-yellow-400 mb-4">★★★★★</div>
<blockquote className="text-lg font-medium text-gray-700 italic mb-6 relative z-10">
                            I was skeptical at first, but after using their service for just a month, I've seen a 40% increase in productivity. Their attention to detail is remarkable.
                        </blockquote>
<div className="pt-4 border-t border-gray-100">
<p className="font-semibold text-gray-900 mb-1">Sarah Williams</p>
<p className="text-sm text-blue-600">Marketing Director, Bright Solutions</p>
</div>
</div>
</div>

<div className="testimonial-card flex-none w-full md:w-1/2 lg:w-1/3 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 p-8">
<div className="relative quote-mark">
<div className="avatar-container w-20 h-20 mx-auto mb-6">
<img alt="Michael Chen" className="w-full h-full object-cover rounded-full border-4 border-white shadow-md" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" />
</div>
<div className="text-xl text-yellow-400 mb-4">★★★★★</div>
<blockquote className="text-lg font-medium text-gray-700 italic mb-6 relative z-10">
                            The level of expertise and professionalism is outstanding. They don't just deliver what you ask for, they improve upon your ideas with their insights.
                        </blockquote>
<div className="pt-4 border-t border-gray-100">
<p className="font-semibold text-gray-900 mb-1">Michael Chen</p>
<p className="text-sm text-blue-600">CTO, Future Innovations</p>
</div>
</div>
</div>

<div className="testimonial-card flex-none w-full md:w-1/2 lg:w-1/3 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 p-8">
<div className="relative quote-mark">
<div className="avatar-container w-20 h-20 mx-auto mb-6">
<img alt="Emily Rodriguez" className="w-full h-full object-cover rounded-full border-4 border-white shadow-md" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" />
</div>
<div className="text-xl text-yellow-400 mb-4">★★★★★</div>
<blockquote className="text-lg font-medium text-gray-700 italic mb-6 relative z-10">
                            Working with this team has been a game-changer for our business. They truly understand our needs and consistently deliver beyond expectations.
                        </blockquote>
<div className="pt-4 border-t border-gray-100">
<p className="font-semibold text-gray-900 mb-1">Emily Rodriguez</p>
<p className="text-sm text-blue-600">Operations Manager, Global Reach</p>
</div>
</div>
</div>

<div className="testimonial-card flex-none w-full md:w-1/2 lg:w-1/3 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 p-8">
<div className="relative quote-mark">
<div className="avatar-container w-20 h-20 mx-auto mb-6">
<img alt="David Kim" className="w-full h-full object-cover rounded-full border-4 border-white shadow-md" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" />
</div>
<div className="text-xl text-yellow-400 mb-4">★★★★☆</div>
<blockquote className="text-lg font-medium text-gray-700 italic mb-6 relative z-10">
                            Their strategic approach to problem-solving is refreshing. We've seen measurable results within weeks of implementation. Truly worth the investment.
                        </blockquote>
<div className="pt-4 border-t border-gray-100">
<p className="font-semibold text-gray-900 mb-1">David Kim</p>
<p className="text-sm text-blue-600">Founder, Elevate Studios</p>
</div>
</div>
</div>

<div className="testimonial-card flex-none w-full md:w-1/2 lg:w-1/3 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 p-8">
<div className="relative quote-mark">
<div className="avatar-container w-20 h-20 mx-auto mb-6">
<img alt="Jessica Patel" className="w-full h-full object-cover rounded-full border-4 border-white shadow-md" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" />
</div>
<div className="text-xl text-yellow-400 mb-4">★★★★★</div>
<blockquote className="text-lg font-medium text-gray-700 italic mb-6 relative z-10">
                            The customer-centric approach is evident in everything they do. From onboarding to ongoing support, they've made the entire experience seamless and enjoyable.
                        </blockquote>
<div className="pt-4 border-t border-gray-100">
<p className="font-semibold text-gray-900 mb-1">Jessica Patel</p>
<p className="text-sm text-blue-600">Product Manager, Innovative Tech</p>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-8 space-x-2">
<button className="p-2 rounded-full bg-white shadow-md border border-gray-200 text-blue-600 hover:bg-blue-50 transition-all duration-200" id="prev">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-2 rounded-full bg-white shadow-md border border-gray-200 text-blue-600 hover:bg-blue-50 transition-all duration-200" id="next">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>


    </>
  );
}
