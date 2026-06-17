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
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold text-[var(--titleColor)] mb-4">Powerful features for modern businesses</h2>
<p className="text-xl max-w-3xl mx-auto">Our platform provides everything you need to build, scale, and manage your digital products.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="feature-card">
<div className="feature-graphic">
<img alt="Global Payments" className="feature-graphic-image" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="feature-overlay"></div>
<div className="feature-icon">
<svg fill="none" height="48" viewbox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" fill="#635BFF" r="24"></circle>
<path d="M19 24H29M16 19L32 29M16 29L32 19" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium text-[var(--titleColor)] mb-3">Global Payments</h3>
<p className="mb-4">Accept payments in 135+ currencies with a single integration. Support cards, wallets, and local payment methods.</p>
<a className="feature-cta" href="#">
            Learn more
            <svg className="arrow-icon" fill="none" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="feature-card">
<div className="feature-graphic">
<img alt="Subscription Billing" className="feature-graphic-image" src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="feature-overlay"></div>
<div className="feature-icon">
<svg fill="none" height="48" viewbox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" fill="#0A2540" r="24"></circle>
<rect height="14" rx="2" stroke="white" strokeWidth="2.5" width="20" x="14" y="17"></rect>
<path d="M19 26H29" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M19 22H24" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium text-[var(--titleColor)] mb-3">Subscription Billing</h3>
<p className="mb-4">Manage recurring revenue with flexible subscription models, usage-based billing, and automated invoicing.</p>
<a className="feature-cta" href="#">
            Learn more
            <svg className="arrow-icon" fill="none" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="feature-card">
<div className="feature-graphic">
<img alt="Marketplace Platform" className="feature-graphic-image" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="feature-overlay"></div>
<div className="feature-icon">
<svg fill="none" height="48" viewbox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" fill="#00D4FF" r="24"></circle>
<path d="M17 19H31M17 24H31M17 29H24" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium text-[var(--titleColor)] mb-3">Marketplace Platform</h3>
<p className="mb-4">Build multi-sided marketplaces with automated onboarding, verification, and split payments.</p>
<a className="feature-cta" href="#">
            Learn more
            <svg className="arrow-icon" fill="none" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="feature-card">
<div className="feature-graphic">
<img alt="Fraud Prevention" className="feature-graphic-image" src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="feature-overlay"></div>
<div className="feature-icon">
<svg fill="none" height="48" viewbox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" fill="#ED5F74" r="24"></circle>
<circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2.5"></circle>
<circle cx="24" cy="24" r="5" stroke="white" strokeWidth="2.5"></circle>
<circle cx="24" cy="24" fill="white" r="1.5"></circle>
</svg>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium text-[var(--titleColor)] mb-3">Fraud Prevention</h3>
<p className="mb-4">Protect your business with AI-powered fraud detection that adapts to emerging threats in real-time.</p>
<a className="feature-cta" href="#">
            Learn more
            <svg className="arrow-icon" fill="none" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="feature-card">
<div className="feature-graphic">
<img alt="Identity Verification" className="feature-graphic-image" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="feature-overlay"></div>
<div className="feature-icon">
<svg fill="none" height="48" viewbox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" fill="#74E4A2" r="24"></circle>
<circle cx="24" cy="19" r="5" stroke="white" strokeWidth="2.5"></circle>
<path d="M14 33C14 29 18.5 26 24 26C29.5 26 34 29 34 33" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium text-[var(--titleColor)] mb-3">Identity Verification</h3>
<p className="mb-4">Verify customer identities with document scanning, biometric matching, and compliance checks.</p>
<a className="feature-cta" href="#">
            Learn more
            <svg className="arrow-icon" fill="none" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="feature-card">
<div className="feature-graphic">
<img alt="Global Expansion" className="feature-graphic-image" src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="feature-overlay"></div>
<div className="feature-icon">
<svg fill="none" height="48" viewbox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" fill="#9A66FF" r="24"></circle>
<rect height="20" rx="2" stroke="white" strokeWidth="2.5" width="20" x="14" y="14"></rect>
<path d="M19 24H29" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M24 19V29" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium text-[var(--titleColor)] mb-3">Global Expansion</h3>
<p className="mb-4">Expand internationally with local business entities, banking, and compliance infrastructure.</p>
<a className="feature-cta" href="#">
            Learn more
            <svg className="arrow-icon" fill="none" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block px-8 py-4 bg-[var(--linkColor)] hover:bg-opacity-90 text-white font-medium rounded-lg transition-colors" href="#">
        View all features
      </a>
</div>
</div>

    </>
  );
}
