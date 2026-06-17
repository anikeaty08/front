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



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'geist': ['Geist', 'sans-serif'],
                    },
                    animation: {
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'glow': 'glow 8s ease-in-out infinite',
                        'breathe': 'breathe 6s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-5px)' }
                        },
                        glow: {
                            '0%, 100%': { opacity: 0.5 },
                            '50%': { opacity: 0.8 }
                        },
                        breathe: {
                            '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
                            '50%': { transform: 'scale(1.03)', opacity: 1 }
                        }
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
      
<div className="w-full relative max-w-md">

<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-white to-white transform scale-[0.80] rounded-full blur-3xl opacity-40 animate-glow"></div>

<div className="relative shadow-xl bg-gray-900 border border-gray-800 overflow-hidden rounded-2xl flex flex-col">

<div className="p-6 flex justify-center bg-gradient-to-b from-gray-800 to-gray-900">

<div className="w-full max-w-xs bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-lg">

<div className="bg-gray-800 border-b border-gray-700 p-2 flex items-center justify-between">
<div className="flex space-x-1">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="flex space-x-2">
<div className="w-16 h-4 bg-gray-700 rounded"></div>
<div className="w-4 h-4 bg-gray-700 rounded-full"></div>
</div>
</div>

<div className="p-3 bg-gray-900 h-40 relative">

<div className="absolute left-10 top-4 right-28 bottom-4 bg-gray-850 bg-opacity-50 border border-gray-700 rounded-md overflow-hidden animate-breathe">

<div className="absolute top-2 left-2 right-2 h-3 bg-white bg-opacity-10 rounded animate-pulse-slow"></div>

<div className="absolute top-7 left-2 w-10 h-10 bg-white bg-opacity-5 rounded flex items-center justify-center">
<svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
</svg>
</div>

<div className="absolute top-7 left-14 right-2">
<div className="h-1 bg-white bg-opacity-15 rounded w-full mb-1.5"></div>
<div className="h-1 bg-white bg-opacity-15 rounded w-5/6 mb-1.5"></div>
<div className="h-1 bg-white bg-opacity-15 rounded w-4/6"></div>
</div>

<div className="absolute bottom-2 right-2 w-8 h-3 bg-white bg-opacity-20 rounded animate-float"></div>
</div>

<div className="absolute left-0 top-0 bottom-0 w-6 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-2 space-y-3">
<div className="w-4 h-4 rounded-sm bg-gray-600"></div>
<div className="w-4 h-4 rounded-sm bg-gray-600"></div>
<div className="w-4 h-4 rounded-sm bg-white bg-opacity-30 animate-pulse-slow"></div>
<div className="w-4 h-4 rounded-sm bg-gray-600"></div>
</div>

<div className="absolute right-0 top-0 bottom-0 w-24 bg-gray-800 border-l border-gray-700 p-2">

<div className="text-[0.65rem] text-gray-400 font-medium mb-2 border-b border-gray-700 pb-1">Inspector</div>

<div className="space-y-2">

<div>
<div className="text-[0.6rem] text-gray-500 mb-1">Size</div>
<div className="flex space-x-1">
<div className="h-3 w-9 bg-gray-700 rounded text-[0.55rem] text-gray-400 flex items-center justify-center">W:24</div>
<div className="h-3 w-9 bg-gray-700 rounded text-[0.55rem] text-gray-400 flex items-center justify-center">H:24</div>
</div>
</div>

<div>
<div className="text-[0.6rem] text-gray-500 mb-1">Position</div>
<div className="flex space-x-1">
<div className="h-3 w-9 bg-gray-700 rounded text-[0.55rem] text-gray-400 flex items-center justify-center">X:16</div>
<div className="h-3 w-9 bg-gray-700 rounded text-[0.55rem] text-gray-400 flex items-center justify-center">Y:32</div>
</div>
</div>

<div>
<div className="text-[0.6rem] text-gray-500 mb-1">Style</div>
<div className="h-3 w-full bg-white bg-opacity-20 rounded animate-fadeInOut"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>

<div className="p-6">

<span className="inline-block px-3 py-1 bg-gray-800 text-white rounded-full text-xs font-medium mb-3">Smart Design</span>

<h3 className="text-xl font-medium text-white mb-2">AI-Powered Layouts</h3>

<p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    Create stunning designs in seconds with our intelligent layout generator. Automatically arrange elements for perfect balance and visual harmony.
                </p>

<div className="flex justify-between items-center">
<a className="text-white hover:text-gray-300 transition flex items-center text-sm font-medium" href="#">
                        Try it now
                        <svg className="w-4 h-4 ml-1" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<span className="text-gray-500 text-xs">Beta feature</span>
</div>
</div>
</div>
</div>

    </>
  );
}
