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
                    colors: {
                        'blue-neon': '#3B82F6',
                        'blue-light': '#60A5FA',
                        'bg-main': '#0F1419',
                        'card-dark': '#1A1E23',
                        'card-darker': '#151920'
                    },
                    fontFamily: {
                        'geist': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.8s ease-out forwards',
                        'slide-up': 'slideUp 0.6s ease-out forwards',
                        'blur-in': 'blurIn 1s ease-out forwards'
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' }
                        },
                        slideUp: {
                            '0%': { transform: 'translateY(30px)', opacity: '0' },
                            '100%': { transform: 'translateY(0)', opacity: '1' }
                        },
                        blurIn: {
                            '0%': { filter: 'blur(8px)', opacity: '0' },
                            '100%': { filter: 'blur(0px)', opacity: '1' }
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
      
<div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 font-jakarta mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">

<section className="bg-card-dark md:col-span-2 opacity-0 animate-fade-in animate-delay-100 border-gray-800 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
<header className="flex justify-between items-center mb-4">
<h2 className="text-xl font-semibold text-white">Upcoming Design Reviews</h2>
<div className="relative">
<select className="bg-card-darker border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-neon appearance-none pr-8 cursor-pointer">
<option>November</option>
<option>December</option>
<option>January</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</header>
<div className="flex space-x-3 overflow-x-auto">
<button className="flex-shrink-0 w-12 h-16 rounded-full bg-card-darker text-center text-white font-normal hover:bg-blue-neon/20 transition flex flex-col items-center justify-center border border-gray-700">
<span className="text-lg">8</span>
<span className="text-xs text-gray-400">Mon</span>
</button>
<button className="flex-shrink-0 w-12 h-16 rounded-full bg-card-darker text-center text-white font-normal hover:bg-blue-neon/20 transition flex flex-col items-center justify-center border border-gray-700">
<span className="text-lg">9</span>
<span className="text-xs text-gray-400">Tue</span>
</button>
<button className="flex-shrink-0 w-12 h-16 rounded-full bg-card-darker text-center text-white font-normal hover:bg-blue-neon/20 transition flex flex-col items-center justify-center border border-gray-700">
<span className="text-lg">10</span>
<span className="text-xs text-gray-400">Wed</span>
</button>
<button className="flex-shrink-0 w-12 h-16 rounded-full bg-blue-neon text-center text-white font-semibold transition flex flex-col items-center justify-center shadow-lg shadow-blue-neon/25">
<span className="text-lg">11</span>
<span className="text-xs">Thu</span>
</button>
<button className="flex-shrink-0 w-12 h-16 rounded-full bg-card-darker text-center text-white font-normal hover:bg-blue-neon/20 transition flex flex-col items-center justify-center border border-gray-700">
<span className="text-lg">12</span>
<span className="text-xs text-gray-400">Fri</span>
</button>
<button className="flex-shrink-0 w-12 h-16 rounded-full bg-card-darker text-center text-white font-normal hover:bg-blue-neon/20 transition flex flex-col items-center justify-center border border-gray-700">
<span className="text-lg">13</span>
<span className="text-xs text-gray-400">Sat</span>
</button>
</div>
</section>

<section className="bg-blue-neon relative flex flex-col space-y-4 opacity-0 animate-slide-up animate-delay-200 rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
<header className="flex justify-between items-center">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold">MC</div>
<div className="text-white">
<p className="font-semibold text-base">Maya Chen</p>
<p className="text-sm opacity-80">Senior UX Designer</p>
</div>
</div>
<div className="flex space-x-2">
<button className="bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-white/30 transition">
<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
</svg>
</button>
<button className="bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-white/30 transition">
<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
</svg>
</button>
</div>
</header>
<h3 className="text-2xl font-semibold text-white">EcoSpace App</h3>
<p className="text-white text-sm opacity-80">Platform: Figma & Framer</p>
<div className="">
<label className="block text-white opacity-80 mb-2 text-sm">Design completion</label>
<div className="w-full rounded-full h-2 bg-white/20">
<div className="h-2 rounded-full bg-white" style={{width: `73%`}}></div>
</div>
<p className="text-right text-sm text-white font-semibold mt-1">73%</p>
</div>
<div className="flex space-x-2 mt-auto">
<div className="relative flex-1 rounded-2xl">
<select className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2 text-white text-sm appearance-none pr-8 cursor-pointer">
<option className="bg-card-dark text-white">Export designs</option>
<option className="bg-card-dark text-white">Assets package</option>
<option className="bg-card-dark text-white">Component library</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
<svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
</svg>
</div>
</div>
<button className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-white/30 transition">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
</svg>
</button>
</div>
</section>

<section className="bg-card-dark opacity-0 animate-blur-in animate-delay-300 border-gray-800 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
<h3 className="text-sm text-gray-400 mb-2">Today</h3>
<p className="text-2xl font-bold text-white">Nov 11, 2024</p>
<p className="text-sm text-gray-500">Thursday</p>
</section>

<section className="bg-card-darker opacity-0 animate-slide-up animate-delay-400 text-white border-gray-800 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
<h3 className="text-sm text-gray-400 mb-2">Total Design Hours</h3>
<p className="text-3xl font-bold text-white">287h</p>
<p className="text-sm text-gray-400">This month</p>
</section>

<section className="opacity-0 animate-fade-in animate-delay-500 text-white bg-gray-900 border-gray-800 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
<h3 className="text-lg font-semibold mb-4">Design Tool Performance</h3>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-sm">Figma</span>
<span className="text-sm">94%</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-1">
<div className="bg-blue-neon h-1 rounded-full" style={{width: `94%`}}></div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm">Framer</span>
<span className="text-sm">81%</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-1">
<div className="bg-blue-neon h-1 rounded-full" style={{width: `81%`}}></div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm">Adobe XD</span>
<span className="text-sm">67%</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-1">
<div className="bg-blue-neon h-1 rounded-full" style={{width: `67%`}}></div>
</div>
</div>
</section>

<section className="md:col-span-2 opacity-0 animate-blur-in animate-delay-600 bg-gradient-to-br from-blue-neon to-blue-light rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xl font-semibold text-white mb-2">AI Design Assistant</h3>
<p className="text-white opacity-80 text-sm">Smart suggestions and design insights</p>
</div>
<button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition">
                    Generate mockup
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
<div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
<h4 className="font-semibold text-white text-sm">Design System</h4>
<div className="space-y-2 mt-2">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-white rounded-full"></div>
<span className="text-xs text-white">Typography scale</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-blue-200 rounded-full"></div>
<span className="text-xs text-white">Color palette</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-gray-400 rounded-full"></div>
<span className="text-xs text-white">Component library</span>
</div>
</div>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
<h4 className="font-semibold text-white text-sm">Design Team</h4>
<div className="flex -space-x-2 mt-2">
<div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
<div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
<div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white"></div>
<div className="w-6 h-6 bg-gray-500 rounded-full border-2 border-white flex items-center justify-center text-xs text-white">+4</div>
</div>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
<h4 className="font-semibold text-white text-sm">Next Handoff</h4>
<p className="text-xs text-white mt-1">Nov 18, 2024</p>
<p className="text-xs text-white opacity-70">Mobile prototypes</p>
</div>
</div>
</section>

<section className="bg-card-dark opacity-0 animate-slide-up animate-delay-700 border-gray-800 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
<h3 className="text-lg font-semibold text-white mb-4">Design Process</h3>
<div className="space-y-4">
<div className="">
<div className="flex justify-between items-center mb-1">
<span className="text-sm text-white">User Research</span>
<span className="text-xs text-gray-400">100%</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-2">
<div className="bg-white h-2 rounded-full" style={{width: `100%`}}></div>
</div>
</div>
<div className="">
<div className="flex justify-between items-center mb-1">
<span className="text-sm text-white">Wireframing</span>
<span className="text-xs text-gray-400">92%</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-2">
<div className="bg-blue-neon h-2 rounded-full" style={{width: `92%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-sm text-white">Visual Design</span>
<span className="text-xs text-gray-400">73%</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-2">
<div className="bg-blue-neon h-2 rounded-full" style={{width: `73%`}}></div>
</div>
</div>
<div className="">
<div className="flex justify-between items-center mb-1">
<span className="text-sm text-white">Prototyping</span>
<span className="text-xs text-gray-400">28%</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-2">
<div className="bg-gray-500 h-2 rounded-full" style={{width: `28%`}}></div>
</div>
</div>
</div>
</section>
</div>

    </>
  );
}
