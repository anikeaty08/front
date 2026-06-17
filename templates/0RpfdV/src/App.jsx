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
      
<div className="max-w-6xl mx-auto">

<div className="text-center mb-10">
<span className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-400 mb-3 inline-block">TESTIMONIALS</span>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What our clients say</h2>
<p className="text-neutral-400 max-w-2xl mx-auto">Trusted by industry leaders worldwide to deliver exceptional results and drive business growth.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="testimonial-card">
<div className="testimonial-content shadow-lg p-6 flex flex-col justify-between">

<div>
<svg className="w-10 h-10 text-neutral-700 mb-4" fill="currentColor" viewbox="0 0 24 24">
<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
</svg>
<p className="text-neutral-300 mb-4 text-lg">"The platform has revolutionized how we manage our security operations. The intuitive interface and robust features have made our workflows much more efficient."</p>
</div>

<div className="flex items-center">
<div className="w-12 h-12 rounded-full overflow-hidden mr-4">
<img alt="Sarah Johnson" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
</div>
<div>
<h4 className="text-white font-medium">Sarah Johnson</h4>
<p className="text-neutral-500 text-sm">CTO at TechNova</p>
</div>
</div>
</div>
</div>

<div className="testimonial-card">
<div className="testimonial-content shadow-lg p-6 flex flex-col justify-between">

<div>
<svg className="w-10 h-10 text-neutral-700 mb-4" fill="currentColor" viewbox="0 0 24 24">
<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
</svg>
<p className="text-neutral-300 mb-4 text-lg">"Implementation was seamless and the support team was incredibly responsive. Our security posture has improved dramatically since adopting this solution."</p>
</div>

<div className="flex items-center">
<div className="w-12 h-12 rounded-full overflow-hidden mr-4">
<img alt="Michael Chen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
</div>
<div>
<h4 className="text-white font-medium">Michael Chen</h4>
<p className="text-neutral-500 text-sm">CISO at Global Finance</p>
</div>
</div>
</div>
</div>

<div className="testimonial-card">
<div className="testimonial-content shadow-lg p-6 flex flex-col justify-between">

<div>
<svg className="w-10 h-10 text-neutral-700 mb-4" fill="currentColor" viewbox="0 0 24 24">
<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
</svg>
<p className="text-neutral-300 mb-4 text-lg">"The role-based access controls and multi-factor authentication have been game-changers for our organization. We can now confidently manage access across teams."</p>
</div>

<div className="flex items-center">
<div className="w-12 h-12 rounded-full overflow-hidden mr-4">
<img alt="Elena Rodriguez" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
</div>
<div>
<h4 className="text-white font-medium">Elena Rodriguez</h4>
<p className="text-neutral-500 text-sm">IT Director at HealthPlus</p>
</div>
</div>
</div>
</div>

<div className="testimonial-card">
<div className="testimonial-content shadow-lg p-6 flex flex-col justify-between">

<div>
<svg className="w-10 h-10 text-neutral-700 mb-4" fill="currentColor" viewbox="0 0 24 24">
<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
</svg>
<p className="text-neutral-300 mb-4 text-lg">"After evaluating several solutions, this platform stood out for its comprehensive security features and ease of use. It's been a worthwhile investment for our company."</p>
</div>

<div className="flex items-center">
<div className="w-12 h-12 rounded-full overflow-hidden mr-4">
<img alt="David Thompson" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
</div>
<div>
<h4 className="text-white font-medium">David Thompson</h4>
<p className="text-neutral-500 text-sm">CEO at RetailEdge</p>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
