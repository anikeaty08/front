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
      
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            blue: {
              50: '#f0f7ff',
              100: '#e0eefe',
              200: '#bae0fd',
              300: '#7dcbfc',
              400: '#39acf7',
              500: '#1a91eb',
              600: '#0c73ca',
              700: '#0e5ca4',
              800: '#144e87',
              900: '#164270',
            },
            secondary: '#7C94B5',
            offwhite: '#f8f8f8'
          }
        }
      }
    }
  
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
      
<div className="w-[390px] h-[852px] rounded-3xl overflow-hidden shadow-md">
<div className="w-full h-full bg-offwhite flex flex-col">

<div className="p-6 flex items-center">
<button className="text-secondary hover:text-blue-800 mr-4">
<i className="bi bi-chevron-left text-xl"></i>
</button>
<h1 className="text-xl font-medium text-blue-800 flex-1 text-center">Wind</h1>
<button className="text-secondary hover:text-blue-800">
<i className="bi bi-three-dots-vertical text-xl"></i>
</button>
</div>
<div className="flex-1 px-4 pb-4 overflow-y-auto">

<div className="bg-white p-5 rounded-2xl mb-4 shadow-sm border border-secondary/20">
<div className="flex justify-between items-start mb-2">
<div>
<h2 className="text-xl font-medium text-blue-800">San Francisco</h2>
<div className="text-xs text-secondary mt-1">Today, May 15</div>
</div>
<div className="flex items-center">
<i className="bi bi-wind text-secondary mr-1"></i>
<span className="text-blue-800 font-medium">8 mph</span>
</div>
</div>
<div className="mt-6 flex justify-center">
<div className="relative w-40 h-40">

<svg className="w-full h-full" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#e0eefe" strokeWidth="2"></circle>
<line stroke="#7C94B5" strokeWidth="1" x1="50" x2="50" y1="5" y2="15"></line>
<line stroke="#7C94B5" strokeWidth="1" x1="50" x2="50" y1="85" y2="95"></line>
<line stroke="#7C94B5" strokeWidth="1" x1="5" x2="15" y1="50" y2="50"></line>
<line stroke="#7C94B5" strokeWidth="1" x1="85" x2="95" y1="50" y2="50"></line>
<text fill="#144e87" fontSize="8" font-weight="bold" text-anchor="middle" x="50" y="20">N</text>
<text fill="#7C94B5" fontSize="8" text-anchor="middle" x="50" y="85">S</text>
<text fill="#7C94B5" fontSize="8" text-anchor="middle" x="15" y="52">W</text>
<text fill="#7C94B5" fontSize="8" text-anchor="middle" x="85" y="52">E</text>

<path d="M50,50 L65,35" stroke="#1a91eb" strokeLinecap="round" strokeWidth="3"></path>
<path d="M65,35 L60,35 L65,30 L70,35 L65,35" fill="#1a91eb"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="text-3xl font-light text-blue-800">8</div>
<div className="text-sm text-secondary">mph</div>
<div className="text-xs text-secondary mt-1">NE</div>
</div>
</div>
</div>
<div className="flex justify-between mt-4">
<div className="text-center">
<div className="text-xs text-secondary mb-1">Gusts</div>
<div className="text-sm font-medium text-blue-800">12 mph</div>
</div>
<div className="text-center">
<div className="text-xs text-secondary mb-1">Direction</div>
<div className="text-sm font-medium text-blue-800">Northeast</div>
</div>
<div className="text-center">
<div className="text-xs text-secondary mb-1">Feels Like</div>
<div className="text-sm font-medium text-blue-800">66°F</div>
</div>
</div>
</div>

<div className="mb-4">
<h2 className="text-lg font-medium text-blue-800 mb-3">Hourly Wind</h2>
<div className="bg-white rounded-2xl shadow-sm border border-secondary/20 p-4">
<div className="flex overflow-x-auto pb-2 gap-4">
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">Now</div>
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mb-2">
<i className="bi bi-arrow-up-right text-blue-600 rotate-45"></i>
</div>
<div className="text-xs font-medium text-blue-800">8 mph</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">1 PM</div>
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mb-2">
<i className="bi bi-arrow-up-right text-blue-600 rotate-45"></i>
</div>
<div className="text-xs font-medium text-blue-800">9 mph</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">2 PM</div>
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mb-2">
<i className="bi bi-arrow-right text-blue-600"></i>
</div>
<div className="text-xs font-medium text-blue-800">10 mph</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">3 PM</div>
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mb-2">
<i className="bi bi-arrow-right text-blue-600"></i>
</div>
<div className="text-xs font-medium text-blue-800">12 mph</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">4 PM</div>
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mb-2">
<i className="bi bi-arrow-right text-blue-600"></i>
</div>
<div className="text-xs font-medium text-blue-800">11 mph</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">5 PM</div>
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mb-2">
<i className="bi bi-arrow-right text-blue-600 rotate-[330deg]"></i>
</div>
<div className="text-xs font-medium text-blue-800">9 mph</div>
</div>
</div>
</div>
</div>

<div className="mb-4">
<h2 className="text-lg font-medium text-blue-800 mb-3">7-Day Wind</h2>
<div className="bg-white rounded-2xl shadow-sm border border-secondary/20 divide-y divide-secondary/20">
<div className="p-4 flex items-center">
<div className="w-20 text-sm text-secondary">Today</div>
<div className="flex items-center gap-3 flex-1">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full">
<i className="bi bi-arrow-up-right text-blue-600 rotate-45"></i>
</div>
<div className="flex-1 h-2 bg-blue-100 rounded-full relative">
<div className="absolute inset-y-0 left-0 bg-blue-500 rounded-full" style={{width: '40%'}}></div>
</div>
<div className="text-sm font-medium text-blue-800 w-16 text-right">8 mph</div>
</div>
</div>
<div className="p-4 flex items-center">
<div className="w-20 text-sm text-secondary">Mon, May 16</div>
<div className="flex items-center gap-3 flex-1">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full">
<i className="bi bi-arrow-right text-blue-600"></i>
</div>
<div className="flex-1 h-2 bg-blue-100 rounded-full relative">
<div className="absolute inset-y-0 left-0 bg-blue-500 rounded-full" style={{width: '60%'}}></div>
</div>
<div className="text-sm font-medium text-blue-800 w-16 text-right">12 mph</div>
</div>
</div>
<div className="p-4 flex items-center">
<div className="w-20 text-sm text-secondary">Tue, May 17</div>
<div className="flex items-center gap-3 flex-1">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full">
<i className="bi bi-arrow-right text-blue-600 rotate-[330deg]"></i>
</div>
<div className="flex-1 h-2 bg-blue-100 rounded-full relative">
<div className="absolute inset-y-0 left-0 bg-blue-500 rounded-full" style={{width: '45%'}}></div>
</div>
<div className="text-sm font-medium text-blue-800 w-16 text-right">9 mph</div>
</div>
</div>
<div className="p-4 flex items-center">
<div className="w-20 text-sm text-secondary">Wed, May 18</div>
<div className="flex items-center gap-3 flex-1">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full">
<i className="bi bi-arrow-down-right text-blue-600 rotate-45"></i>
</div>
<div className="flex-1 h-2 bg-blue-100 rounded-full relative">
<div className="absolute inset-y-0 left-0 bg-blue-500 rounded-full" style={{width: '35%'}}></div>
</div>
<div className="text-sm font-medium text-blue-800 w-16 text-right">7 mph</div>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-lg font-medium text-blue-800 mb-3">Wind Map</h2>
<div className="bg-white rounded-xl shadow-sm border border-secondary/20 p-4">
<div className="aspect-video bg-blue-50 rounded-lg relative overflow-hidden mb-3">

<div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
<div className="flex items-center justify-center">
<i className="bi bi-arrow-right text-blue-300 text-xs rotate-[330deg]"></i>
</div>
<div className="flex items-center justify-center">
<i className="bi bi-arrow-right text-blue-300 text-xs rotate-[330deg]"></i>
</div>
<div className="flex items-center justify-center">
<i className="bi bi-arrow-right text-blue-400 text-xs rotate-[345deg]"></i>
</div>
<div className="flex items-center justify-center">
<i className="bi bi-arrow-right text-blue-400 text-xs rotate-[345deg]"></i>
</div>
<div className="flex items-center justify-center">
<i className="bi bi-arrow-right text-blue-400 text-xs rotate-0"></i>
</div>
<div className="flex items-center justify-center">
<i className="bi bi-arrow-right text-blue-400 text-xs rotate-0"></i>
</div>
<div className="flex items-center justify-center">
<i className="bi bi-arrow-right text-blue-300 text-xs rotate-15"></i>
</div>
<div className="flex items-center justify-center">
<i className="bi bi-arrow-right text-blue-300 text-xs rotate-15"></i>
</div>

</div>

<div className="absolute top-[40%] left-[45%]">
<div className="h-3 w-3 bg-white ring-2 ring-blue-600 rounded-full"></div>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex-1">
<div className="h-2 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700 rounded-full"></div>
<div className="flex justify-between text-xs mt-1">
<span className="text-secondary">Calm</span>
<span className="text-secondary">Moderate</span>
<span className="text-secondary">Strong</span>
</div>
</div>
<button className="ml-4 text-blue-600 text-sm font-medium">Full Map</button>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
