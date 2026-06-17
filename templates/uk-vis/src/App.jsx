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



    import createGlobe from 'https://cdn.skypack.dev/cobe'

    let phi = 0
    let canvas = document.getElementById("cobe")

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.7, 0.8, 0.95],
      markerColor: [0.2, 0.4, 0.9],
      glowColor: [0.6, 0.7, 0.95],
      offset: [0, 0],
      markers: [
        // London (Main office - larger marker)
        { location: [51.5074, -0.1278], size: 0.12 },
        // Major client locations
        { location: [28.6139, 77.2090], size: 0.06 }, // Delhi
        { location: [19.0760, 72.8777], size: 0.05 }, // Mumbai
        { location: [25.2048, 55.2708], size: 0.05 }, // Dubai
        { location: [1.3521, 103.8198], size: 0.04 }, // Singapore
        { location: [35.6762, 139.6503], size: 0.04 }, // Tokyo
        { location: [40.7128, -74.0060], size: 0.05 }, // New York
        { location: [43.6532, -79.3832], size: 0.04 }, // Toronto
        { location: [-33.8688, 151.2093], size: 0.04 }, // Sydney
        { location: [31.2304, 121.4737], size: 0.04 }, // Shanghai
        { location: [-1.2921, 36.8219], size: 0.03 }, // Nairobi
        { location: [6.5244, 3.3792], size: 0.04 }, // Lagos
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.003
      },
    })
  
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
      

<nav className="container mx-auto px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
<span className="ml-3 text-xl tracking-tight font-geist">UK Visa Consultants</span>
</div>
<div className="hidden md:flex space-x-10 text-sm text-gray-600">
<a className="hover:text-blue-600 transition-colors font-geist" href="#services">Services</a>
<a className="hover:text-blue-600 transition-colors font-geist" href="#process">Process</a>
<a className="hover:text-blue-600 transition-colors font-geist" href="#about">About</a>
<a className="hover:text-blue-600 transition-colors font-geist" href="#contact">Contact</a>
</div>
<div className="">
<button className="text-sm border border-gray-300 rounded-md px-4 py-2 hover:bg-blue-50 transition-all font-geist">
          Book Consultation
        </button>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
<div className="relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-white z-0"></div>

<div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
<div className="flex flex-col md:flex-row items-center">

<div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
<h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6 leading-tight font-playfair font-medium" style={{}}>
            Your gateway to the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 font-playfair font-medium" style={{color: 'rgba(0, 0, 0, 0)', position: 'static'}}>United Kingdom</span>
</h1>
<p className="text-gray-600 text-xl md:text-2xl mb-8 max-w-lg tracking-wide font-playfair font-medium" style={{}}>
            Expert UK visa consultation services. We guide you through every step of your immigration journey.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-blue-600 text-white font-light rounded-md px-6 py-3 hover:bg-blue-700 transition-all font-geist">
              Start your application
            </button>
<button className="bg-transparent border border-gray-300 text-gray-700 rounded-md px-6 py-3 hover:bg-blue-50 transition-all font-geist">
              Check eligibility
            </button>
</div>
</div>

<div className="md:w-1/2 relative">
<div className="relative h-[500px] w-[500px] mx-auto">
<div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl"></div>
<canvas className="z-10 relative" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; canvas:nth-of-type(1)" height="1000" id="cobe" style={{width: '500px', height: '500px'}} width="1000"></canvas>
</div>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-16"></div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div>
<p className="text-4xl mb-1 tracking-tight text-gray-800 font-playfair font-medium" style={{}}>98%</p>
<p className="text-gray-500 font-extralight font-geist">Success rate</p>
</div>
<div>
<p className="text-4xl mb-1 tracking-tight text-gray-800 font-playfair font-medium" style={{}}>5,000+</p>
<p className="text-gray-500 font-extralight font-geist">Visas approved</p>
</div>
<div>
<p className="text-4xl mb-1 tracking-tight text-gray-800 font-playfair font-medium" style={{}}>15+</p>
<p className="text-gray-500 font-extralight font-geist">Years experience</p>
</div>
<div>
<p className="text-4xl mb-1 tracking-tight text-gray-800 font-playfair font-medium" style={{}}>50+</p>
<p className="text-gray-500 font-extralight font-geist">Countries served</p>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 py-20">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl tracking-tight mb-4 font-playfair font-medium" style={{}}>Our Visa Services</h2>
<p className="text-gray-600 text-lg font-extralight font-geist">Comprehensive immigration solutions tailored to your needs</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-lg p-8 border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
</svg>
</div>
<h3 className="text-xl font-normal mb-2 tracking-tight font-geist">Skilled Worker Visa</h3>
<p className="text-gray-600 font-extralight mb-4 font-geist">For professionals with a job offer from a UK employer. Includes healthcare workers and essential staff.</p>
<a className="text-blue-600 text-sm hover:underline inline-flex items-center font-geist" href="#">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7"></path>
</svg>
</a>
</div>

<div className="bg-white rounded-lg p-8 border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 14l9-5-9-5-9 5 9 5z"></path>
<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
<path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-normal mb-2 tracking-tight font-geist">Student Visa</h3>
<p className="text-gray-600 font-extralight mb-4 font-geist">Study at UK universities and educational institutions. Available for courses lasting more than 6 months.</p>
<a className="text-blue-600 text-sm hover:underline inline-flex items-center font-geist" href="#">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7"></path>
</svg>
</a>
</div>

<div className="bg-white rounded-lg p-8 border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
<div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
</svg>
</div>
<h3 className="text-xl font-normal mb-2 tracking-tight font-geist">Family Visa</h3>
<p className="text-gray-600 font-extralight mb-4 font-geist">Join your partner, spouse, or family members in the UK. Includes spouse and parent visas.</p>
<a className="text-blue-600 text-sm hover:underline inline-flex items-center font-geist" href="#">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7"></path>
</svg>
</a>
</div>

<div className="bg-white rounded-lg p-8 border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
</svg>
</div>
<h3 className="text-xl font-normal mb-2 tracking-tight font-geist">Innovator &amp; Start-up Visa</h3>
<p className="text-gray-600 font-extralight mb-4 font-geist">For entrepreneurs looking to establish or run a business in the UK. Requires endorsement from approved body.</p>
<a className="text-blue-600 text-sm hover:underline inline-flex items-center font-geist" href="#">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7"></path>
</svg>
</a>
</div>

<div className="bg-white rounded-lg p-8 border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-normal mb-2 tracking-tight font-geist">Visitor Visa</h3>
<p className="text-gray-600 font-extralight mb-4 font-geist">For tourism, visiting family, or short business trips. Valid for stays up to 6 months.</p>
<a className="text-blue-600 text-sm hover:underline inline-flex items-center font-geist" href="#">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7"></path>
</svg>
</a>
</div>

<div className="bg-white rounded-lg p-8 border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
<div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
</svg>
</div>
<h3 className="text-xl font-normal mb-2 tracking-tight font-geist">Settlement (ILR)</h3>
<p className="text-gray-600 font-extralight mb-4 font-geist">Indefinite Leave to Remain for those who have lived in the UK continuously. Path to British citizenship.</p>
<a className="text-blue-600 text-sm hover:underline inline-flex items-center font-geist" href="#">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>

<div className="py-20">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl tracking-tight mb-4 font-playfair font-medium" style={{}}>Simple Process, Guaranteed Results</h2>
<p className="text-gray-600 text-lg font-extralight font-geist">We handle the complexity so you don't have to</p>
</div>
<div className="grid md:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
<span className="text-blue-600 text-2xl font-playfair font-medium" style={{}}>1</span>
</div>
<h3 className="text-lg font-normal mb-2 tracking-tight font-geist">Consultation</h3>
<p className="text-gray-600 text-sm font-extralight font-geist">Free initial assessment of your eligibility and requirements</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
<span className="text-blue-600 text-2xl font-playfair font-medium" style={{}}>2</span>
</div>
<h3 className="text-lg font-normal mb-2 tracking-tight font-geist">Documentation</h3>
<p className="text-gray-600 text-sm font-extralight font-geist">We guide you through gathering and preparing all necessary documents</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
<span className="text-blue-600 text-2xl font-playfair font-medium" style={{}}>3</span>
</div>
<h3 className="text-lg font-normal mb-2 tracking-tight font-geist">Application</h3>
<p className="text-gray-600 text-sm font-extralight font-geist">Expert preparation and submission of your visa application</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
<span className="text-blue-600 text-2xl font-playfair font-medium" style={{}}>4</span>
</div>
<h3 className="text-lg font-normal mb-2 tracking-tight font-geist">Approval</h3>
<p className="text-gray-600 text-sm font-extralight font-geist">We track your application and support you until approval</p>
</div>
</div>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

<div className="py-20 bg-gradient-to-br from-blue-50 to-white">
<div className="container mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl tracking-tight mb-4 font-playfair font-medium" style={{}}>Ready to start your UK journey?</h2>
<p className="text-gray-600 text-lg font-extralight mb-8 max-w-2xl mx-auto font-geist">Book a free consultation with our immigration experts today</p>
<button className="bg-blue-600 text-white font-light rounded-md px-8 py-4 hover:bg-blue-700 transition-all text-lg font-geist">
        Schedule Free Consultation
      </button>
</div>
</div>

<footer className="bg-gray-50 border-t border-gray-200 py-12">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div>
<h4 className="font-normal mb-4 tracking-tight font-geist">UK Visa Consultants</h4>
<p className="text-sm text-gray-600 font-extralight font-geist">Expert immigration services for your UK journey</p>
</div>
<div>
<h5 className="font-normal text-sm mb-3 tracking-tight font-geist">Services</h5>
<ul className="space-y-2 text-sm text-gray-600 font-extralight">
<li><a className="hover:text-blue-600 transition-colors font-geist" href="#">Skilled Worker Visa</a></li>
<li><a className="hover:text-blue-600 transition-colors font-geist" href="#">Student Visa</a></li>
<li><a className="hover:text-blue-600 transition-colors font-geist" href="#">Family Visa</a></li>
<li><a className="hover:text-blue-600 transition-colors font-geist" href="#">Business Visa</a></li>
</ul>
</div>
<div>
<h5 className="font-normal text-sm mb-3 tracking-tight font-geist">Company</h5>
<ul className="space-y-2 text-sm text-gray-600 font-extralight">
<li><a className="hover:text-blue-600 transition-colors font-geist" href="#">About Us</a></li>
<li><a className="hover:text-blue-600 transition-colors font-geist" href="#">Success Stories</a></li>
<li><a className="hover:text-blue-600 transition-colors font-geist" href="#">Blog</a></li>
<li><a className="hover:text-blue-600 transition-colors font-geist" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="font-normal text-sm mb-3 tracking-tight font-geist">Contact</h5>
<ul className="space-y-2 text-sm text-gray-600 font-extralight">
<li className="font-geist">London, United Kingdom</li>
<li className="font-geist">info@ukvisaconsultants.co.uk</li>
<li className="font-geist">+44 20 1234 5678</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600 font-extralight">
<p className="font-geist">© 2024 UK Visa Consultants. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
