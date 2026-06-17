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
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'bar-1': 'barRise 4s ease-in-out infinite',
                        'bar-2': 'barRise 4s ease-in-out infinite 0.5s',
                        'bar-3': 'barRise 4s ease-in-out infinite 1s',
                        'bar-4': 'barRise 4s ease-in-out infinite 1.5s',
                        'bar-5': 'barRise 4s ease-in-out infinite 2s',
                        'bar-6': 'barRise 4s ease-in-out infinite 2.5s',
                    },
                    keyframes: {
                        barRise: {
                            '0%, 100%': { height: '30%', backgroundColor: '#3b82f6' },
                            '25%': { height: '75%', backgroundColor: '#60a5fa' },
                            '50%': { height: '45%', backgroundColor: '#2563eb' },
                            '75%': { height: '60%', backgroundColor: '#3b82f6' }
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

<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-white to-white transform scale-[0.80] rounded-full blur-3xl opacity-60"></div>

<div className="relative shadow-xl bg-gray-900 border border-gray-800 overflow-hidden rounded-2xl flex flex-col">

<div className="p-6 flex justify-center bg-gradient-to-b from-gray-800 to-gray-900">

<div className="w-full max-w-xs bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-lg">

<div className="bg-gray-800 border-b border-gray-700 p-2 flex items-center">
<div className="flex space-x-1">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
</div>

<div className="p-3 bg-gray-900">

<div className="h-5 bg-gray-700 rounded w-3/4 mb-2 animate-pulse-slow"></div>
<div className="h-5 bg-gray-700 rounded w-1/2 mb-3 animate-pulse-slow"></div>

<div className="flex items-end space-x-1 h-20 mb-3 bg-gray-800 bg-opacity-50 rounded p-1">
<div className="w-1/6 bg-blue-500 rounded-sm animate-bar-1 origin-bottom"></div>
<div className="w-1/6 bg-blue-500 rounded-sm animate-bar-2 origin-bottom"></div>
<div className="w-1/6 bg-blue-500 rounded-sm animate-bar-3 origin-bottom"></div>
<div className="w-1/6 bg-blue-500 rounded-sm animate-bar-4 origin-bottom"></div>
<div className="w-1/6 bg-blue-500 rounded-sm animate-bar-5 origin-bottom"></div>
<div className="w-1/6 bg-blue-500 rounded-sm animate-bar-6 origin-bottom"></div>
</div>

<div className="flex justify-between">
<div className="h-4 bg-gray-700 rounded w-1/4 animate-fadeInOut"></div>
<div className="h-4 bg-green-700 rounded w-1/5 animate-fadeInOut" style={{animationDelay: '1.5s'}}></div>
</div>
</div>
</div>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>

<div className="p-6">

<span className="inline-block px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-xs font-medium mb-3">Analytics</span>

<h3 className="text-xl font-medium text-white mb-2">Real-time Data Analytics</h3>

<p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    Track your business performance with powerful visualizations and actionable insights. Make data-driven decisions faster than ever before.
                </p>

<div className="flex justify-between items-center">
<a className="text-blue-400 hover:text-blue-300 transition flex items-center text-sm font-medium" href="#">
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<span className="text-gray-500 text-xs">New feature</span>
</div>
</div>
</div>
</div>

    </>
  );
}
