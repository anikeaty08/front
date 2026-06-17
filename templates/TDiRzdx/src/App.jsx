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
      
<div className="container mx-auto max-w-6xl">

<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="section-title mb-4">What our customers are saying</h2>
<p className="section-subtitle">See how companies of all sizes use our platform to improve their products and delight their customers.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="testimonial-card p-8 relative">
<div className="quote-mark absolute top-4 left-6">❝</div>
<div className="mb-6">
<p className="testimonial-quote relative z-10">"This platform has transformed how we gather feedback. We've increased customer satisfaction by 35% and reduced development cycles by half."</p>
</div>
<div className="flex items-center">
<img alt="Sarah Johnson" className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/32.jpg"/>
<div>
<h4 className="font-medium text-gray-900">Sarah Johnson</h4>
<p className="text-sm">Product Director, Acme Inc</p>
</div>
</div>
</div>

<div className="testimonial-card p-8 relative">
<div className="quote-mark absolute top-4 left-6">❝</div>
<div className="mb-6">
<p className="testimonial-quote relative z-10">"The insights we've gained have been invaluable. Our team now has a clear roadmap based on actual user needs rather than assumptions."</p>
</div>
<div className="flex items-center">
<img alt="Michael Chen" className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/46.jpg"/>
<div>
<h4 className="font-medium text-gray-900">Michael Chen</h4>
<p className="text-sm">CTO, TechForward</p>
</div>
</div>
</div>

<div className="testimonial-card p-8 relative">
<div className="quote-mark absolute top-4 left-6">❝</div>
<div className="mb-6">
<p className="testimonial-quote relative z-10">"As a startup, we needed to move fast and make the right decisions. This tool has been essential in helping us prioritize what matters most."</p>
</div>
<div className="flex items-center">
<img alt="Jessica Patel" className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/65.jpg"/>
<div>
<h4 className="font-medium text-gray-900">Jessica Patel</h4>
<p className="text-sm">Founder, LaunchPad</p>
</div>
</div>
</div>

<div className="testimonial-card p-8 relative">
<div className="quote-mark absolute top-4 left-6">❝</div>
<div className="mb-6">
<p className="testimonial-quote relative z-10">"The implementation was seamless, and the ROI has been clear from day one. We've seen a 28% increase in user engagement."</p>
</div>
<div className="flex items-center">
<img alt="David Wilson" className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/22.jpg"/>
<div>
<h4 className="font-medium text-gray-900">David Wilson</h4>
<p className="text-sm">VP of Product, Globex</p>
</div>
</div>
</div>

<div className="testimonial-card p-8 relative">
<div className="quote-mark absolute top-4 left-6">❝</div>
<div className="mb-6">
<p className="testimonial-quote relative z-10">"Customer-centricity is at our core, and this platform has elevated how we listen to and act on feedback. Game-changing for our team."</p>
</div>
<div className="flex items-center">
<img alt="Emma Rodriguez" className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/45.jpg"/>
<div>
<h4 className="font-medium text-gray-900">Emma Rodriguez</h4>
<p className="text-sm">Customer Success Lead, Initech</p>
</div>
</div>
</div>

<div className="testimonial-card p-8 relative">
<div className="quote-mark absolute top-4 left-6">❝</div>
<div className="mb-6">
<p className="testimonial-quote relative z-10">"We've been able to identify and fix pain points we didn't even know existed. Our NPS score has increased by 45 points in just six months."</p>
</div>
<div className="flex items-center">
<img alt="Robert Kim" className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<h4 className="font-medium text-gray-900">Robert Kim</h4>
<p className="text-sm">Head of UX, Umbrella Corp</p>
</div>
</div>
</div>
</div>

<div className="mt-16 text-center">
<p className="text-lg mb-6">Join thousands of companies improving their products with customer feedback</p>
<a className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300" href="#">
        Start your free trial
      </a>
</div>
</div>

    </>
  );
}
