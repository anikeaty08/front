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
      

<div className="w-full max-w-6xl mx-auto px-6 py-20">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium mb-6">Why developers choose Codeon</h2>
<p className="text-gray-400 max-w-2xl mx-auto">Our platform combines powerful features with an intuitive interface to make web development faster, more efficient, and more enjoyable.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="feature-card p-6 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-black transition-all duration-300">
<div className="feature-icon h-12 w-12 rounded-lg flex items-center justify-center mb-5">
<svg className="w-6 h-6 text-[#00b4d8]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium mb-3">Lightning Fast</h3>
<p className="text-gray-400 mb-4">Build and deploy applications in minutes, not days. Our optimized workflows reduce development time by up to 70%.</p>
<a className="inline-flex items-center text-[#00b4d8] hover:underline" href="#">
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="feature-card p-6 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-black transition-all duration-300">
<div className="feature-icon h-12 w-12 rounded-lg flex items-center justify-center mb-5">
<svg className="w-6 h-6 text-[#00b4d8]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium mb-3">Highly Customizable</h3>
<p className="text-gray-400 mb-4">Tailor your development environment to match your workflow with extensive customization options and plugin support.</p>
<a className="inline-flex items-center text-[#00b4d8] hover:underline" href="#">
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="feature-card p-6 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-black transition-all duration-300">
<div className="feature-icon h-12 w-12 rounded-lg flex items-center justify-center mb-5">
<svg className="w-6 h-6 text-[#00b4d8]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium mb-3">Enterprise Security</h3>
<p className="text-gray-400 mb-4">Rest easy with bank-level encryption, regular security audits, and compliance with industry standards like SOC2 and GDPR.</p>
<a className="inline-flex items-center text-[#00b4d8] hover:underline" href="#">
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="feature-card p-6 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-black transition-all duration-300">
<div className="feature-icon h-12 w-12 rounded-lg flex items-center justify-center mb-5">
<svg className="w-6 h-6 text-[#00b4d8]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium mb-3">Team Collaboration</h3>
<p className="text-gray-400 mb-4">Work seamlessly with your team through real-time editing, commenting, and version control integration.</p>
<a className="inline-flex items-center text-[#00b4d8] hover:underline" href="#">
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="feature-card p-6 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-black transition-all duration-300">
<div className="feature-icon h-12 w-12 rounded-lg flex items-center justify-center mb-5">
<svg className="w-6 h-6 text-[#00b4d8]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium mb-3">Integrated Database</h3>
<p className="text-gray-400 mb-4">Connect to your database of choice with our built-in ORM and migration tools for simplified data management.</p>
<a className="inline-flex items-center text-[#00b4d8] hover:underline" href="#">
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="feature-card p-6 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-black transition-all duration-300">
<div className="feature-icon h-12 w-12 rounded-lg flex items-center justify-center mb-5">
<svg className="w-6 h-6 text-[#00b4d8]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium mb-3">AI Assistance</h3>
<p className="text-gray-400 mb-4">Leverage our intelligent code suggestions and automated debugging to solve problems faster and learn as you code.</p>
<a className="inline-flex items-center text-[#00b4d8] hover:underline" href="#">
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</div>

    </>
  );
}
