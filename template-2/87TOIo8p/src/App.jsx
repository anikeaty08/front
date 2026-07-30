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



    document.addEventListener("DOMContentLoaded", function() {
      // Initialize Vanta.js animation
      VANTA.DOTS({
        el: "#animated-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3B82F6,
        color2: 0x8B5CF6,
        backgroundColor: 0x111827,
        spacing: 27.00,
        showLines: false
      });
      
      // Image carousel functionality
      const slides = document.querySelectorAll('.carousel-slide');
      let currentSlide = 0;
      
      function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      }
      
      // Change slide every 4 seconds
      setInterval(nextSlide, 4000);
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
      
<div className="relative min-h-screen overflow-hidden" id="animated-bg">

<nav className="relative z-10 px-6 py-6 flex justify-between items-center">
<div className="flex items-center">
<svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
</svg>
<span className="ml-2 text-xl font-bold text-white">TechInsight AI</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-gray-300 hover:text-blue-400 transition" href="#">Solutions</a>
<a className="text-gray-300 hover:text-blue-400 transition" href="#">Pricing</a>
<a className="text-gray-300 hover:text-blue-400 transition" href="#">Resources</a>
<a className="text-gray-300 hover:text-blue-400 transition" href="#">About</a>
</div>
<div className="hidden md:flex">
<a className="px-5 py-2 text-blue-400 hover:text-blue-300 font-medium" href="#">Login</a>
<a className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition font-medium" href="#">Sign up</a>
</div>
<button className="md:hidden">
<svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</nav>

<div className="relative px-6 lg:px-16 py-12 md:py-20 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="space-y-8 z-10">
<div>
<span className="px-3 py-1 text-sm text-blue-300 bg-blue-900 bg-opacity-50 rounded-full font-medium">AI-Powered Insights</span>
</div>
<h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Transform Your Business with <span className="text-transparent bg-clip-text gradient-bg">AI-Driven</span> Tech Advisory
          </h1>
<p className="text-xl text-gray-300 max-w-lg">
            Get strategic technology guidance powered by AI to optimize operations, reduce costs, and accelerate innovation.
          </p>
<div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
<a className="px-8 py-4 text-white gradient-bg rounded-lg font-medium text-center hover:opacity-90 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1" href="#">
              Start Free Consultation
            </a>
<a className="px-8 py-4 text-blue-300 bg-gray-800 border border-gray-700 rounded-lg font-medium text-center hover:border-blue-500 transition" href="#">
              Watch Demo
            </a>
</div>

<div className="pt-6">
<div className="grid grid-cols-2 gap-4">
<div className="flex items-start space-x-3">
<svg className="h-5 w-5 mt-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-300">Data-Driven Strategy</span>
</div>
<div className="flex items-start space-x-3">
<svg className="h-5 w-5 mt-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-300">Tech Stack Analysis</span>
</div>
<div className="flex items-start space-x-3">
<svg className="h-5 w-5 mt-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-300">AI Implementation</span>
</div>
<div className="flex items-start space-x-3">
<svg className="h-5 w-5 mt-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-300">24/7 Expert Support</span>
</div>
</div>
</div>
</div>

<div className="relative z-10">
<div className="relative floating">
<div className="carousel-container aspect-[4/3] w-full shadow-2xl shadow-blue-900/20">
<div className="carousel-slide active">
<img alt="AI Technology Dashboard" src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
</div>
<div className="carousel-slide">
<img alt="Data Analytics Interface" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
</div>
<div className="carousel-slide">
<img alt="AI Visualization" src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
</div>
</div>

<div className="absolute -top-6 -right-6 bg-gray-800 rounded-lg shadow-lg p-4 z-20 border border-gray-700">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
<span className="text-sm font-medium text-gray-200">AI Analysis Complete</span>
</div>
</div>
<div className="absolute -bottom-6 -left-6 bg-gray-800 rounded-lg shadow-lg p-4 z-20 border border-gray-700">
<div className="flex items-center space-x-2">
<svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fillRule="evenodd"></path>
</svg>
<span className="text-sm font-medium text-gray-200">Real-time Insights</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 border-t border-gray-800 pt-8 z-10 relative">
<p className="text-gray-400 text-center mb-6">Trusted by innovative companies worldwide</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
<img alt="Airbnb" className="h-8 opacity-50" src="https://cdn.worldvectorlogo.com/logos/airbnb.svg" />
<img alt="Spotify" className="h-8 opacity-50" src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg" />
<img alt="Slack" className="h-8 opacity-50" src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" />
<img alt="Microsoft" className="h-8 opacity-50" src="https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" />
<img alt="Dropbox" className="h-8 opacity-50" src="https://cdn.worldvectorlogo.com/logos/dropbox-1.svg" />
</div>
</div>
</div>
</div>


    </>
  );
}
