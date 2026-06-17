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
      

<header className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
<div className="flex items-center">
<h1 className="text-xl font-bold">DesignCode</h1>
</div>
<div className="hidden md:flex items-center bg-gray-800/50 rounded-full px-4 py-2 w-1/3">
<input className="bg-transparent w-full focus:outline-none" placeholder="Search..." type="text"/>
<svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<nav className="hidden lg:flex items-center space-x-6">
<a className="text-gray-300 hover:text-white" href="#">Course</a>
<a className="text-gray-300 hover:text-white" href="#">Tutorials</a>
<a className="text-gray-300 hover:text-white" href="#">Livestreams</a>
<a className="text-gray-300 hover:text-white" href="#">Pricing</a>
<a className="text-gray-300 hover:text-white" href="#">Contact</a>
<button className="border border-blue-500 rounded-full px-6 py-2 text-blue-400 hover:bg-blue-500 hover:text-white transition">Sign up</button>
</nav>
<button className="lg:hidden">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</header>

<section className="container mx-auto px-4 pt-8 pb-24 relative">
<div className="hero-glow"></div>

<div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-24">
<div className="flex flex-col items-center">
<div className="h-16 w-0.5 bg-gradient-to-b from-transparent to-blue-500"></div>
<div className="w-3 h-3 rounded-full bg-blue-500 ring-2 ring-blue-400 ring-opacity-50"></div>
<div className="vertical-text text-xs text-blue-400 mt-2">Midjourney V5</div>
</div>
<div className="flex flex-col items-center">
<div className="h-16 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
<div className="w-3 h-3 rounded-full bg-blue-500 ring-2 ring-blue-400 ring-opacity-50"></div>
<div className="vertical-text text-xs text-blue-400 mt-2">GPT-4</div>
</div>
</div>
<div className="flex flex-col lg:flex-row">

<div className="lg:w-1/2 pt-10 relative z-10">
<div className="flex space-x-4 mb-4">
<span className="text-xs text-blue-400">Get early access</span>
<span className="text-xs text-gray-400">2023-05-21</span>
</div>
<div className="flex space-x-4 mb-8">
<div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center ring-2 ring-blue-500 ring-opacity-50">
<div className="w-2 h-2 rounded-full bg-blue-500 absolute top-1 right-1"></div>
<svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center ring-2 ring-blue-500 ring-opacity-50">
<svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center ring-2 ring-blue-500 ring-opacity-50">
<svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Design and prototype with <span className="text-gray-300">Midjourney</span></h2>
<p className="text-gray-300 mb-8 max-w-xl">
                    This hands-on course teaches you how to design and code with OpenAI's GPT-4 and Midjourney. The course includes prompts, source code, inspirations, designs, and more. It is perfect for beginners who want to build their own apps with little to no knowledge of the field. I will provide guidance and a starter kit to help you achieve your goals. Time to use your superpowers!
                </p>
<button className="bg-gray-800 hover:bg-gray-700 rounded-full px-6 py-3 flex items-center space-x-2 transition">
<span>Learn About AI</span>
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="lg:w-1/2 relative">
<div className="absolute inset-0 bg-blue-500 bg-opacity-20 rounded-full blur-3xl"></div>
</div>
</div>
</section>

<section className="container mx-auto px-4 pb-20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="card rounded-xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 opacity-10 rounded-full -mr-10 -mt-10"></div>
<div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold mb-3">Prompts</h3>
<p className="text-gray-400 text-sm mb-4">Prompts and tricks to get the best renders from Midjourney. Translate the concepts efficiently: How does it work? What examples to refer to? How will it be interactive?</p>
<div className="flex items-center mb-4">
<span className="text-xs text-gray-400">Taught by</span>
<span className="text-xs ml-2">Aksonvady P.</span>
</div>
<button className="text-blue-400 text-sm hover:text-blue-300 flex items-center">
<span>Explore Midjourney</span>
<svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="card rounded-xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-purple-500 opacity-10 rounded-full -mr-10 -mt-10"></div>
<div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold mb-3">UI / UX</h3>
<p className="text-gray-400 text-sm mb-4">From concept to real app design. Hands-on lessons about the basics of UX, typography, spacing, colors, icons, illustration, interaction design and getting the best resources.</p>
<div className="flex items-center mb-4">
<span className="text-xs text-gray-400">Taught by</span>
<span className="text-xs ml-2">Aksonvady P. &amp; Sourasith P.</span>
</div>
</div>

<div className="card rounded-xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-green-500 opacity-10 rounded-full -mr-10 -mt-10"></div>
<div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold mb-3">Figma files</h3>
<p className="text-gray-400 text-sm mb-4">UI Design and Prototyping. Each design will teach different techniques for mobile and web and will have both the User Interface lesson and the Prototyping lesson.</p>
<div className="flex items-center mb-4">
<span className="text-xs text-gray-400">Taught by</span>
<span className="text-xs ml-2">Aksonvady P. &amp; Souramy P.</span>
</div>
</div>

<div className="card rounded-xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-pink-500 opacity-10 rounded-full -mr-10 -mt-10"></div>
<div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-pink-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold mb-3">Course lessons</h3>
<p className="text-gray-400 text-sm mb-4">Full Course (Discounted) + Early access. Create 5-10 designs and prototypes from scratch. 40 lessons / 5 topics. Expected to launch in 2-3 months.</p>
<div className="flex items-center mb-4">
<span className="text-xs text-gray-400">Art Direction by</span>
<span className="text-xs ml-2">Meng T.</span>
</div>
<button className="text-pink-400 text-sm hover:text-pink-300 flex items-center">
<span>Explore Midjourney</span>
<svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</section>

    </>
  );
}
