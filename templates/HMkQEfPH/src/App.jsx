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



        // Custom cursor for desktop
        document.addEventListener('DOMContentLoaded', function() {
            const cursor = document.getElementById('custom-cursor');
            
            document.addEventListener('mousemove', function(e) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
            
            // Make cursor larger when hovering over interactive elements
            const interactiveElements = document.querySelectorAll('.gallery-item, button, a');
            
            interactiveElements.forEach(element => {
                element.addEventListener('mouseenter', () => {
                    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
                    cursor.style.mixBlendMode = 'difference';
                });
                
                element.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                    cursor.style.mixBlendMode = 'normal';
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
      

<div className="fixed inset-0 -z-10 gradient-bg opacity-20"></div>

<div className="fixed top-20 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 blob -z-10"></div>
<div className="fixed top-40 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 blob -z-10" style={{animationDelay: '2s'}}></div>
<div className="fixed -bottom-20 left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 blob -z-10" style={{animationDelay: '4s'}}></div>

<header className="w-full backdrop-blur-md bg-white/70 fixed top-0 z-50 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center">
<div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl">P</div>
<span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">Portfolix</span>
</div>

<nav className="hidden md:flex">

<div className="relative group px-1">
<button className="flex items-center text-gray-600 hover:text-pink-500 transition-colors px-3 py-2">
                            Features
                            <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md" href="#">Image Galleries</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md" href="#">Video Showcases</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md" href="#">Interactive Elements</a>
</div>
</div>

<div className="relative group px-1">
<button className="flex items-center text-gray-600 hover:text-pink-500 transition-colors px-3 py-2">
                            Templates
                            <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md" href="#">Photography</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md" href="#">Graphic Design</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md" href="#">Video Production</a>
</div>
</div>

<div className="relative group px-1">
<button className="flex items-center text-gray-600 hover:text-pink-500 transition-colors px-3 py-2">
                            Pricing
                            <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md" href="#">Free Plan</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md" href="#">Pro Plan</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md" href="#">Team Plan</a>
</div>
</div>

<div className="relative group px-1">
<button className="flex items-center text-gray-600 hover:text-pink-500 transition-colors px-3 py-2">
                            Resources
                            <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md" href="#">Blog</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md" href="#">Tutorials</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md" href="#">Help Center</a>
</div>
</div>
</nav>

<div className="flex items-center space-x-4">
<a className="hidden md:inline-block text-gray-600 hover:text-pink-500 transition-colors" href="#">Login</a>
<a className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200" href="#">Sign Up</a>
<button className="md:hidden text-gray-600">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</header>

<div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row items-center">

<div className="md:w-1/2 md:pr-8 z-10">
<div className="inline-block px-3 py-1 bg-gradient-to-r from-pink-500/10 to-orange-400/10 rounded-full mb-6">
<span className="text-sm font-medium text-pink-700">New Feature • Interactive Galleries</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Showcase Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Creative Vision</span>
</h1>
<p className="mt-6 text-xl text-gray-600">
                Create stunning interactive portfolios that captivate clients with immersive previews of your design, photography, and video projects.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4">
<a className="px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center" href="#">
                    Start Creating Free
                </a>
<a className="px-8 py-3 bg-white text-gray-700 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 text-center" href="#">
                    View Examples
                </a>
</div>
<div className="mt-8 flex items-center text-gray-500 text-sm">
<svg className="h-5 w-5 mr-2 text-green-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>No credit card required • 14-day free trial</span>
</div>
</div>

<div className="md:w-1/2 mt-12 md:mt-0 z-10 image-gallery">

<div className="relative gallery-item rounded-2xl shadow-xl overflow-hidden border border-gray-100 bg-white mb-4 cursor-pointer">
<img alt="Portfolio Preview" className="w-full h-auto" src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1074&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
<div className="flex items-center justify-between">
<div>
<h3 className="text-white text-xl font-bold">Urban Photography</h3>
<p className="text-gray-300 text-sm">Cityscape Collection 2023</p>
</div>

<div className="flex space-x-2">
<button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-all">
<svg className="h-5 w-5 text-white" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" fill-rule="evenodd"></path>
</svg>
</button>
<button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-all">
<svg className="h-5 w-5 text-white" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
</svg>
</button>
<button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-all">
<svg className="h-5 w-5 text-white" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
</svg>
</button>
</div>
</div>

<div className="flex flex-wrap gap-2 mt-4">
<span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white image-tag">Urban</span>
<span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white image-tag" style={{transitionDelay: '0.1s'}}>Architecture</span>
<span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white image-tag" style={{transitionDelay: '0.2s'}}>Night</span>
</div>

<div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full"></div>
</div>
</div>

<div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-pink-500/30 pulse cursor-pointer" title="Building Architecture">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-pink-500"></div>
</div>
</div>
<div className="absolute top-1/2 right-1/3 w-6 h-6 rounded-full bg-blue-500/30 pulse cursor-pointer" style={{animationDelay: '1s'}} title="Lighting Design">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3">
<div className="gallery-item rounded-lg shadow-md overflow-hidden cursor-pointer">
<img alt="Nature Preview" className="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="image-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
<span className="text-white text-xs font-medium">Nature Series</span>
</div>
</div>
<div className="gallery-item rounded-lg shadow-md overflow-hidden cursor-pointer">
<img alt="Portrait Preview" className="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="image-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
<span className="text-white text-xs font-medium">Portrait Study</span>
</div>
</div>
<div className="gallery-item rounded-lg shadow-md overflow-hidden cursor-pointer">
<img alt="Design Preview" className="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="image-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
<span className="text-white text-xs font-medium">Product Design</span>
</div>
</div>
</div>
</div>
</div>

<div className="cursor-dot hidden md:block" id="custom-cursor"></div>


    </>
  );
}
