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
      

<div className="spline-bg">
<iframe frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW/" width="100%"></iframe>
</div>

<div className="ff-content">
<div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-20">

<header className="flex justify-between items-center mb-24">
<div className="flex items-center space-x-2">
<span className="text-white font-bold text-lg tracking-wide">NEXUS</span>
</div>
<nav className="hidden md:flex space-x-10">
<a className="ff-body hover:text-white transition-colors" href="#">Projects</a>
<a className="ff-body hover:text-white transition-colors" href="#">About</a>
<a className="ff-body hover:text-white transition-colors" href="#">Contact</a>
</nav>
</header>

<section className="mb-32">
<div className="max-w-3xl">
<h1 className="ff-heading text-white mb-7">
            Future Forward<br /><span className="text-indigo-400">Design Systems</span>
</h1>
<p className="ff-subheading text-gray-300 mb-10 max-w-xl">
            Bridging imagination and technology. Building UI foundations for tomorrow’s products.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="ff-btn px-7 py-3 rounded-lg bg-indigo-400 text-black hover:bg-indigo-300 transition-colors shadow-lg">
              Explore Work
            </button>
<button className="ff-btn px-7 py-3 rounded-lg border border-gray-600 text-white hover:border-gray-400 hover:bg-gray-900 transition-all">
              Get in Touch
            </button>
</div>
</div>
</section>
<hr className="ff-divider mb-24" />

<section className="mb-32">
<h2 className="ff-subheading text-white mb-12">Featured Projects</h2>
<div className="grid md:grid-cols-2 gap-10">

<div className="ff-glass p-1">
<div className="bg-black bg-opacity-30 rounded-xl p-7 flex flex-col h-full">
<div className="flex flex-col sm:flex-row justify-between items-start mb-3">
<span className="text-white text-lg font-medium tracking-tight">Prism</span>
<span className="text-xs text-gray-400 mt-2 sm:mt-0">Digital Experience · 2023</span>
</div>
<p className="ff-body text-gray-300 mb-6">
                Immersive digital journeys, blending 3D worlds with seamless UIs and smooth interactions.
              </p>
<a className="inline-flex items-center ff-btn text-indigo-300 hover:text-white transition-colors" href="#">
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="ff-glass p-1">
<div className="bg-black bg-opacity-30 rounded-xl p-7 flex flex-col h-full">
<div className="flex flex-col sm:flex-row justify-between items-start mb-3">
<span className="text-white text-lg font-medium tracking-tight">Nebula</span>
<span className="text-xs text-gray-400 mt-2 sm:mt-0">Design System · 2023</span>
</div>
<p className="ff-body text-gray-300 mb-6">
                Accessible, scalable UI system powering enterprise apps with clarity, consistency, and delight.
              </p>
<a className="inline-flex items-center ff-btn text-indigo-300 hover:text-white transition-colors" href="#">
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</div>
</section>

<footer>
<hr className="ff-divider mb-10" />
<div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
<div>
<h3 className="text-white font-semibold mb-3">Nexus Studio</h3>
<p className="ff-body text-gray-400 max-w-xs">
              Crafting digital experiences that unite function and vision.
            </p>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="text-white font-medium mb-2">Contact</h4>
<a className="ff-body block text-gray-400 hover:text-white transition mb-2" href="mailto:hello@nexus.design">hello@nexus.design</a>
</div>
<div>
<h4 className="text-white font-medium mb-2">Social</h4>
<a className="ff-body block text-gray-400 hover:text-white transition mb-2" href="#">Instagram</a>
<a className="ff-body block text-gray-400 hover:text-white transition" href="#">Dribbble</a>
</div>
</div>
</div>
<div className="mt-12 text-center text-gray-500 ff-body">
          © 2024 Nexus Design Studio
        </div>
</footer>
</div>
</div>

    </>
  );
}
