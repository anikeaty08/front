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
      VANTA.NET({
        el: "#vanta-canvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x4f46e5,
        backgroundColor: 0x111827,
        points: 10,
        maxDistance: 20,
        spacing: 15
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
      

<div className="relative min-h-screen" id="vanta-canvas">
<div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>

<nav className="relative z-10 px-4 sm:px-6 lg:px-8 py-6">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
<svg className="h-5 w-5 text-white" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" fill-rule="evenodd"></path>
</svg>
</div>
<span className="ml-2 text-xl font-semibold text-white">STUDIO</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-gray-300 hover:text-white" href="#">Services</a>
<a className="text-gray-300 hover:text-white" href="#">Work</a>
<a className="text-gray-300 hover:text-white" href="#">About</a>
<a className="text-gray-300 hover:text-white" href="#">Contact</a>
</div>
<div>
<button className="gradient-button text-white px-5 py-2 rounded-lg transition">Get Started</button>
</div>
</div>
</nav>

<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 flex flex-col items-center text-center">
<span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 rounded-full text-sm mb-6 inline-block">CREATIVE SOLUTIONS</span>
<h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">Transform Your Digital Presence</h1>
<p className="max-w-2xl text-xl text-gray-300 mb-10">We create stunning digital experiences that help your brand stand out and connect with your audience.</p>
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
<button className="gradient-button text-white px-8 py-3 rounded-lg text-lg font-medium transition">
          See Our Work
        </button>
<button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg text-lg font-medium transition">
          Contact Us
        </button>
</div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">8+</div>
<div className="text-gray-400 text-sm">Years Experience</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">120+</div>
<div className="text-gray-400 text-sm">Projects Completed</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">42</div>
<div className="text-gray-400 text-sm">Happy Clients</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">12</div>
<div className="text-gray-400 text-sm">Team Members</div>
</div>
</div>
</div>
</div>

<div className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-indigo-800 rounded-full text-sm mb-4 inline-block">WHY CHOOSE US</span>
<h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Digital Solutions</h2>
<p className="max-w-2xl mx-auto text-gray-600">Our expertise spans across multiple domains to deliver exceptional results for your business.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="feature-card bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Responsive Web Design</h3>
<p className="text-gray-600 mb-4">Crafting beautiful, functional websites that adapt perfectly to all devices with lightning-fast performance.</p>
<ul className="mb-4 space-y-2">
<li className="flex items-center text-sm text-gray-600">
<svg className="h-4 w-4 mr-2 text-blue-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
              Mobile-first approach
            </li>
<li className="flex items-center text-sm text-gray-600">
<svg className="h-4 w-4 mr-2 text-blue-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
              Optimized page loading
            </li>
<li className="flex items-center text-sm text-gray-600">
<svg className="h-4 w-4 mr-2 text-blue-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
              Conversion-focused UX
            </li>
</ul>
<a className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800" href="#">
            Learn more
            <svg className="ml-1 h-4 w-4" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
</a>
</div>

<div className="feature-card bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Brand Identity</h3>
<p className="text-gray-600 mb-4">Creating distinctive brand identities that resonate with your audience and set you apart from competitors.</p>
<ul className="mb-4 space-y-2">
<li className="flex items-center text-sm text-gray-600">
<svg className="h-4 w-4 mr-2 text-indigo-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
              Logo &amp; visual identity
            </li>
<li className="flex items-center text-sm text-gray-600">
<svg className="h-4 w-4 mr-2 text-indigo-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
              Brand voice &amp; messaging
            </li>
<li className="flex items-center text-sm text-gray-600">
<svg className="h-4 w-4 mr-2 text-indigo-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
              Brand strategy &amp; positioning
            </li>
</ul>
<a className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800" href="#">
            Learn more
            <svg className="ml-1 h-4 w-4" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
</a>
</div>

<div className="feature-card bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Growth-Driven Marketing</h3>
<p className="text-gray-600 mb-4">Data-backed marketing strategies that drive targeted traffic, engagement, and measurable business results.</p>
<ul className="mb-4 space-y-2">
<li className="flex items-center text-sm text-gray-600">
<svg className="h-4 w-4 mr-2 text-purple-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
              SEO &amp; content strategy
            </li>
<li className="flex items-center text-sm text-gray-600">
<svg className="h-4 w-4 mr-2 text-purple-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
              Paid media campaigns
            </li>
<li className="flex items-center text-sm text-gray-600">
<svg className="h-4 w-4 mr-2 text-purple-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
              Analytics &amp; optimization
            </li>
</ul>
<a className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800" href="#">
            Learn more
            <svg className="ml-1 h-4 w-4" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
</div>
</div>

<div className="py-16 bg-gray-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
<div className="mb-8 md:mb-0 md:max-w-xl">
<h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
<p className="text-gray-300">Let's discuss your project and see how we can help you achieve your business goals.</p>
</div>
<div>
<button className="gradient-button text-white px-8 py-3 rounded-lg text-lg font-medium transition">
          Schedule a Call
        </button>
</div>
</div>
</div>


    </>
  );
}
