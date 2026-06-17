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
      // Setup meteor animation
      const container = document.getElementById('meteor-container');
      const meteorCount = 10;
      
      for (let i = 0; i < meteorCount; i++) {
        const meteor = document.createElement('div');
        meteor.classList.add('meteor');
        
        const delay = Math.random() * 5;
        const duration = Math.random() * 6 + 3;
        const topPosition = Math.random() * 100;
        const leftPosition = Math.floor(Math.random() * 300) - 300;
        
        meteor.style.top = `${topPosition}%`;
        meteor.style.left = `${leftPosition}px`;
        meteor.style.animationDelay = `${delay}s`;
        meteor.style.animationDuration = `${duration}s`;
        
        if (i % 3 === 0) {
          meteor.style.background = 'rgba(99, 102, 241, 0.8)';
          meteor.style.boxShadow = '0 0 1px rgba(99, 102, 241, 0.3)';
        }
        
        container.appendChild(meteor);
      }
      
      // Setup FAQ accordion
      const faqItems = document.querySelectorAll('.faq-item');
      
      faqItems.forEach(item => {
        const button = item.querySelector('button');
        
        button.addEventListener('click', () => {
          item.classList.toggle('faq-open');
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
      
<div className="max-w-5xl mx-auto">
<div className="text-center mb-10">
<span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-xs font-medium">SUPPORT</span>
<h2 className="text-3xl font-bold text-white mt-4 mb-2">Frequently Asked Questions</h2>
<div className="h-px w-16 bg-indigo-500/70 mx-auto mb-4"></div>
<p className="text-gray-400 max-w-2xl mx-auto">Find answers to common questions about our platform and services.</p>
</div>

<div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/30 rounded-xl p-6 md:p-8 shadow-md overflow-hidden mb-8">
<div className="absolute inset-0 overflow-hidden" id="meteor-container">
<div className="meteor" style={{top: '30%', left: '-150px', animationDelay: '1s'}}></div>
<div className="meteor" style={{top: '50%', left: '-250px', animationDelay: '2s'}}></div>
</div>
<div className="relative z-10">
<div className="space-y-4">

<div className="faq-item border-b border-gray-800/50 pb-4">
<button className="flex justify-between items-center w-full text-left focus:outline-none">
<h3 className="text-lg font-medium text-white">How do I get started with the platform?</h3>
<span className="faq-icon text-indigo-400 ml-2">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" fill-rule="evenodd"></path>
</svg>
</span>
</button>
<div className="faq-content pt-2">
<p className="text-gray-400">Getting started is easy! Simply sign up for an account on our website, complete your profile, and follow the onboarding tutorial. If you need additional help, our support team is available 24/7 to assist you.</p>
</div>
</div>

<div className="faq-item border-b border-gray-800/50 pb-4">
<button className="flex justify-between items-center w-full text-left focus:outline-none">
<h3 className="text-lg font-medium text-white">What payment methods do you accept?</h3>
<span className="faq-icon text-indigo-400 ml-2">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" fill-rule="evenodd"></path>
</svg>
</span>
</button>
<div className="faq-content pt-2">
<p className="text-gray-400">We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. For enterprise customers, we also offer invoice-based payments with flexible terms.</p>
</div>
</div>

<div className="faq-item border-b border-gray-800/50 pb-4">
<button className="flex justify-between items-center w-full text-left focus:outline-none">
<h3 className="text-lg font-medium text-white">Is my data secure with your platform?</h3>
<span className="faq-icon text-indigo-400 ml-2">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" fill-rule="evenodd"></path>
</svg>
</span>
</button>
<div className="faq-content pt-2">
<p className="text-gray-400">Absolutely. We employ industry-leading security measures including end-to-end encryption, regular security audits, and compliance with SOC 2, GDPR, and HIPAA regulations. Your data's security is our top priority.</p>
</div>
</div>

<div className="faq-item border-b border-gray-800/50 pb-4">
<button className="flex justify-between items-center w-full text-left focus:outline-none">
<h3 className="text-lg font-medium text-white">Can I cancel my subscription at any time?</h3>
<span className="faq-icon text-indigo-400 ml-2">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" fill-rule="evenodd"></path>
</svg>
</span>
</button>
<div className="faq-content pt-2">
<p className="text-gray-400">Yes, you can cancel your subscription at any time with no penalties. Your service will continue until the end of your current billing period, and you won't be charged again after that.</p>
</div>
</div>

<div className="faq-item border-b border-gray-800/50 pb-4">
<button className="flex justify-between items-center w-full text-left focus:outline-none">
<h3 className="text-lg font-medium text-white">Do you offer a free trial?</h3>
<span className="faq-icon text-indigo-400 ml-2">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" fill-rule="evenodd"></path>
</svg>
</span>
</button>
<div className="faq-content pt-2">
<p className="text-gray-400">Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial, and you can upgrade to a paid plan at any time.</p>
</div>
</div>

<div className="faq-item pb-4">
<button className="flex justify-between items-center w-full text-left focus:outline-none">
<h3 className="text-lg font-medium text-white">How can I contact customer support?</h3>
<span className="faq-icon text-indigo-400 ml-2">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" fill-rule="evenodd"></path>
</svg>
</span>
</button>
<div className="faq-content pt-2">
<p className="text-gray-400">Our support team is available via live chat on our website, email at support@example.com, or phone at +1-800-123-4567. For enterprise customers, we also provide a dedicated account manager.</p>
</div>
</div>
</div>
</div>
</div>

<div className="text-center">
<p className="text-gray-400 mb-4">Can't find what you're looking for?</p>
<a className="inline-flex items-center px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg text-sm border border-indigo-700/30 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" href="#">
        Contact Support
        <svg className="h-4 w-4 ml-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>


    </>
  );
}
