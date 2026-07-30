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



    document.addEventListener('DOMContentLoaded', function() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('faq-blur');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.faq-card').forEach(card => observer.observe(card));
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
      
<section className="py-20 min-h-screen relative overflow-hidden flex items-center">
<div className="absolute top-0 left-0 w-full h-full">
<div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-1/5 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
</div>
<div className="max-w-3xl mx-auto px-4 relative z-10 w-full">
<div className="text-center mb-14">
<h2 className="text-3xl md:text-4xl font-light mb-4 faq-card faq-delay-1" style={{letterSpacing: `-0.02em`}}>
<span className="bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </span>
</h2>
<p className="text-purple-200 text-lg md:text-xl max-w-xl mx-auto faq-card faq-delay-2">
          Answers to common questions about our platform and services
        </p>
</div>
<div className="space-y-6">

<div className="glass rounded-xl p-6 faq-card faq-delay-1">
<h3 className="text-lg font-medium text-white mb-2">What is included in the free trial?</h3>
<p className="text-gray-400 text-base">Our free trial offers access to all Pro features for 14 days with no credit card required. You can explore the platform and test all functionalities without limitations.</p>
</div>

<div className="glass rounded-xl p-6 faq-card faq-delay-2">
<h3 className="text-lg font-medium text-white mb-2">Can I cancel my subscription anytime?</h3>
<p className="text-gray-400 text-base">Absolutely. You can manage or cancel your subscription at any time through your account dashboard. There are no hidden fees or long-term contracts.</p>
</div>

<div className="glass rounded-xl p-6 faq-card faq-delay-3">
<h3 className="text-lg font-medium text-white mb-2">Do you offer discounts for non-profits or students?</h3>
<p className="text-gray-400 text-base">Yes, we support non-profits and students with special discounts. Please <a className="text-purple-400 hover:underline" href="#">contact us</a> with details and verification for eligibility.</p>
</div>

<div className="glass rounded-xl p-6 faq-card faq-delay-4">
<h3 className="text-lg font-medium text-white mb-2">Is my data secure?</h3>
<p className="text-gray-400 text-base">We use advanced encryption and security protocols to ensure your data is always protected. Our infrastructure meets industry standards for safety and compliance.</p>
</div>

<div className="glass rounded-xl p-6 faq-card faq-delay-5">
<h3 className="text-lg font-medium text-white mb-2">How can I get support?</h3>
<p className="text-gray-400 text-base">Our support team is available 24/7 via live chat and email. We are committed to helping you get the most out of our platform and resolve any issues promptly.</p>
</div>
</div>
</div>
</section>

    </>
  );
}
