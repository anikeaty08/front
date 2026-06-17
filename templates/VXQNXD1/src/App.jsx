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



    document.addEventListener('DOMContentLoaded', () => {
      const container = document.getElementById('phone-container');
      const elements = document.querySelectorAll('.perspective-element');
      document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const rotateX = (clientY / innerHeight - 0.5) * -10;
        const rotateY = (clientX / innerWidth - 0.5) * 10;
        container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        elements.forEach((el, index) => {
          const depth = 0.5 + (index * 0.1);
          el.style.transform = `translateZ(${10 * depth}px) rotateX(${rotateX * 0.2}deg) rotateY(${rotateY * 0.2}deg)`;
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
      
<div className="perspective-container relative w-[375px] h-[812px] transition-transform duration-200 ease-out" id="phone-container">

<div className="relative w-full h-full bg-white rounded-[54px] overflow-hidden shadow-2xl border-8 border-gray-100">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[126px] h-[34px] bg-black rounded-b-[18px] z-20"></div>

<div className="pt-12 px-6 flex justify-between items-center text-sm">
<div className="text-gray-800 font-medium">9:41</div>
<div className="flex space-x-2">
<svg className="h-4 w-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.11 16.404a5.5 5.5 0 017.78 0M12 20h.01m-7.08-7.07c3.905-3.905 10.237-3.905 14.142 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="w-6 h-4 bg-gray-200 rounded-sm relative flex items-center">
<div className="absolute top-0.5 left-0.5 w-5 h-3 bg-white rounded-sm border border-gray-300"></div>
</div>
</div>
</div>

<div className="absolute inset-x-0 top-[70px] bottom-20 px-6 overflow-y-auto overscroll-contain">
<div className="flex justify-between items-center mt-2">
<h1 className="text-2xl font-semibold text-gray-900" style={{fontFamily: 'Geist, sans-serif'}}>Prompt Builder</h1>
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">

<svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>

<div className="mt-8 relative perspective-element transform transition-transform duration-200 ease-out">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-orange-400/20 rounded-3xl"></div>
<div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-100">
<div className="text-xs font-medium text-orange-600 mb-1">ABOUT</div>
<h2 className="text-xl font-medium text-gray-900 mb-2" style={{fontFamily: 'Geist, sans-serif'}}>Welcome to Prompt Builder Docs</h2>
<p className="text-sm text-gray-600 mb-4">
              Prompt Builder helps you design, test, and manage AI prompts efficiently. Explore our documentation to get started, learn best practices, and master advanced features.
            </p>
<div className="flex items-center">
<a className="bg-orange-500 hover:bg-orange-600 transition-colors text-white py-2 px-4 rounded-full text-sm font-medium" href="#getting-started">Get Started</a>
<div className="ml-4 text-sm text-gray-600">v1.0</div>
</div>
</div>
</div>

<div className="mt-8">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-medium text-gray-900" style={{fontFamily: 'Geist, sans-serif'}}>Documentation</h3>
<button className="text-sm text-orange-600 font-medium">All Topics</button>
</div>
<div className="flex space-x-4 overflow-x-auto pb-2 -mx-1 px-1 perspective-element transform transition-transform duration-200 ease-out">
<a className="flex-shrink-0 w-24 h-24 bg-blue-50 rounded-2xl flex flex-col items-center justify-center border border-blue-100 hover:bg-blue-100 transition" href="#getting-started">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">

<svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 19V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14m16 0a2 2 0 01-2 2H7a2 2 0 01-2-2m16 0V5a2 2 0 00-2-2m0 16a2 2 0 01-2 2m-6-2a2 2 0 01-2-2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="text-xs font-medium text-gray-800">Getting Started</div>
</a>
<a className="flex-shrink-0 w-24 h-24 bg-green-50 rounded-2xl flex flex-col items-center justify-center border border-green-100 hover:bg-green-100 transition" href="#prompt-design">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">

<svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.21l-4.5 1.5 1.5-4.5 12.362-12.362z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="text-xs font-medium text-gray-800">Prompt Design</div>
</a>
<a className="flex-shrink-0 w-24 h-24 bg-yellow-50 rounded-2xl flex flex-col items-center justify-center border border-yellow-100 hover:bg-yellow-100 transition" href="#testing">
<div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-2">

<svg className="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19.428 15.341C18.369 17.597 15.91 20 12 20c-3.91 0-6.369-2.403-7.428-4.659A2 2 0 016.286 13h11.428a2 2 0 01.714 2.341zM6.5 8.5V5.75a2.25 2.25 0 012.25-2.25h6.5a2.25 2.25 0 012.25 2.25v2.75" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="text-xs font-medium text-gray-800">Testing</div>
</a>
<a className="flex-shrink-0 w-24 h-24 bg-purple-50 rounded-2xl flex flex-col items-center justify-center border border-purple-100 hover:bg-purple-100 transition" href="#best-practices">
<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">

<svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3a7 7 0 017 7c0 3.866-3.134 7-7 7s-7-3.134-7-7a7 7 0 017-7z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M9.75 21h4.5m-2.25-2.25V17" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="text-xs font-medium text-gray-800">Best Practices</div>
</a>
</div>
</div>

<div className="mt-8 mb-8 perspective-element transform transition-transform duration-200 ease-out">
<h3 className="text-lg font-medium text-gray-900 mb-4" style={{fontFamily: 'Geist, sans-serif'}}>Recent Updates</h3>
<div className="space-y-3">
<div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center">
<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">

<svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 17h5l-1.405-1.405A2.03 2.03 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-gray-900" style={{fontFamily: 'Geist, sans-serif'}}>Changelog: June 2024</h4>
<div className="text-xs text-gray-500">Added prompt templates &amp; live preview</div>
</div>
<a className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center hover:bg-orange-50 transition" href="#changelog">

<svg className="h-4 w-4 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.75 12l-6-3.464v6.928l6-3.464z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>
<div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">

<svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12h6m-6 4h6M7 16V8a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-gray-900" style={{fontFamily: 'Geist, sans-serif'}}>Guide: Prompt Testing</h4>
<div className="text-xs text-gray-500">Updated with new validation steps</div>
</div>
<a className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center hover:bg-blue-50 transition" href="#testing">

<svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-100 flex items-center justify-around px-6">
<div className="flex flex-col items-center">

<svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 11.25l8.25-7.5 8.25 7.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-8.75z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M9 21V12h6v9" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs font-medium text-orange-500 mt-1" style={{fontFamily: 'Geist, sans-serif'}}>Home</span>
</div>
<div className="flex flex-col items-center">

<svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 19V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14m16 0a2 2 0 01-2 2H7a2 2 0 01-2-2m16 0V5a2 2 0 00-2-2m0 16a2 2 0 01-2 2m-6-2a2 2 0 01-2-2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs font-medium text-gray-400 mt-1" style={{fontFamily: 'Geist, sans-serif'}}>Docs</span>
</div>
<div className="flex flex-col items-center">

<svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs font-medium text-gray-400 mt-1" style={{fontFamily: 'Geist, sans-serif'}}>API</span>
</div>
<div className="flex flex-col items-center">

<svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" strokeWidth="1.5"></circle>
<circle cx="12" cy="12" r="4" strokeWidth="1.5"></circle>
<path d="M4.93 4.93l4.24 4.24M19.07 4.93l-4.24 4.24M19.07 19.07l-4.24-4.24M4.93 19.07l4.24-4.24" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs font-medium text-gray-400 mt-1" style={{fontFamily: 'Geist, sans-serif'}}>Support</span>
</div>
</div>
</div>
</div>
<style>
    .perspective-container {
      perspective: 1000px;
      transform-style: preserve-3d;
    }
    /* Optional: hide scrollbars for cleaner look */
    .overflow-y-auto::-webkit-scrollbar {
      width: 6px;
      background: transparent;
    }
    .overflow-y-auto::-webkit-scrollbar-thumb {
      background: #e5e7eb;
      border-radius: 6px;
    }
  </style>


    </>
  );
}
