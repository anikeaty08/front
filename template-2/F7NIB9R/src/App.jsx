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
                        'inter': ['Inter', 'sans-serif'],
                    },
                    colors: {
                        'gradient-start': '#60A5FA',
                        'gradient-end': '#A78BFA',
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
      

<header className="flex items-center justify-between max-w-7xl px-6 py-4 mx-auto">
<div className="text-xl font-medium text-white">Flight</div>
<nav className="hidden md:flex space-x-10 text-neutral-400 text-sm font-normal">
<a className="hover:text-neutral-300 transition duration-300" href="#">About</a>
<a className="hover:text-neutral-300 transition duration-300" href="#">Features</a>
<a className="hover:text-neutral-300 transition duration-300" href="#">Destinations</a>
<a className="hover:text-neutral-300 transition duration-300" href="#">Pricing</a>
<a className="hover:text-neutral-300 transition duration-300" href="#">Help</a>
</nav>
<button className="hidden md:inline rounded-full bg-neutral-900 py-2.5 px-6 font-medium text-white shadow-lg hover:bg-neutral-800 transition duration-300">
            Download Free
        </button>

<button className="md:hidden p-2 text-white">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
</button>
</header>

<main className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 py-12 gap-16 items-center">

<div className="relative max-w-sm drop-shadow-phone">
<div className="w-96 h-[812px] bg-black rounded-[38px] overflow-hidden shadow-2xl relative border border-neutral-800 phone-font">

<div className="absolute z-20 left-1/2 transform -translate-x-1/2 top-3 h-7 w-32 bg-neutral-900 rounded-full"></div>

<div className="h-full flex flex-col pt-14 pr-5 pb-8 pl-5">

<div className="mt-6 mb-6">
<h1 className="text-xl font-medium text-white">Upcoming Flight</h1>
<p className="text-neutral-500 text-sm">Today, Dec 15</p>
</div>

<div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800">
<div className="flex justify-between items-start">
<div>
<h2 className="text-lg font-medium text-white">LAX → LHR</h2>
<p className="text-neutral-500 text-xs">British Airways • BA 269</p>
</div>
<svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24">
<path d="M21 12H3M17 8L21 12L17 16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex items-center justify-between mt-5 pb-4 border-b border-neutral-800">
<div>
<span className="text-xl font-light text-white">10:15</span>
<div className="text-xs text-neutral-500">LAX</div>
</div>
<div className="flex flex-col items-center px-4">
<div className="text-xs text-neutral-600 mb-1">11h 40m</div>
<div className="w-24 h-px bg-neutral-700 relative">
<div className="absolute -top-0.5 left-0 w-1.5 h-1.5 rounded-full bg-blue-400"></div>
<div className="absolute -top-0.5 right-0 w-1.5 h-1.5 rounded-full bg-blue-400"></div>
</div>
<div className="text-xs text-neutral-600 mt-1">Direct</div>
</div>
<div className="text-right">
<span className="text-xl font-light text-white">6:55</span>
<div className="text-xs text-neutral-500">LHR</div>
</div>
</div>
<div className="pt-4 flex justify-between">
<div>
<div className="text-xs text-neutral-500">Boarding</div>
<div className="text-sm text-white">9:30 AM</div>
</div>
<div>
<div className="text-xs text-neutral-500">Gate</div>
<div className="text-sm text-white">B47</div>
</div>
<div className="">
<div className="text-xs text-neutral-500">Seat</div>
<div className="text-sm text-white">8F</div>
</div>
</div>
</div>

<div className="flex items-center bg-neutral-900 border border-green-900/40 rounded-xl p-3 my-4">
<div className="mr-3 text-green-400">
<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
<path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="">
<p className="text-green-400 text-sm font-medium">On time</p>
<p className="text-neutral-500 text-xs">Perfect conditions for departure</p>
</div>
</div>

<div className="space-y-3 mb-4">
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex items-center">
<div className="mr-3 text-blue-400">
<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
<rect height="16" rx="2" stroke="currentColor" strokeWidth="1.5" width="18" x="3" y="4"></rect>
<path d="M8 11h8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M8 8h3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M8 14h5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="text-white text-sm font-medium">Boarding Pass</h4>
<p className="text-neutral-500 text-xs">Added to Apple Wallet</p>
</div>
<svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 16 16">
<path d="M6 12l4-4-4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex items-center">
<div className="mr-3 text-purple-400">
<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"></circle>
<path d="M12 8v4l3 3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="text-white text-sm font-medium">Terminal Info</h4>
<p className="text-neutral-500 text-xs">Terminal 2 • Security at 7:30 AM</p>
</div>
<svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 16 16">
<path d="M6 12l4-4-4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex justify-between items-center mb-4">
<div>
<p className="text-white text-sm font-medium">London (LHR)</p>
<p className="text-neutral-500 text-xs">Light rain</p>
</div>
<div className="flex items-center">
<svg className="w-6 h-6 text-neutral-400 mr-2" fill="none" viewBox="0 0 24 24">
<path d="M12 3v1M5.6 5.6l.7.7M3 12h1M5.6 18.4l.7-.7M12 20v1M18.4 18.4l-.7-.7M20 12h1M18.4 5.6l-.7.7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<span className="text-lg font-light text-white">46°</span>
</div>
</div>

<div className="mt-auto">
<button className="w-full bg-blue-500 text-white font-medium py-3 rounded-xl">
                            Check In
                        </button>
<div className="flex justify-between mt-6 px-6 text-neutral-500">
<div className="flex flex-col items-center">
<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<span className="text-xs mt-1">Home</span>
</div>
<div className="flex flex-col items-center text-blue-400">
<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
<path d="M22 12h-6M2 12h12M6 16l-4-4 4-4M18 8l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs mt-1">Flights</span>
</div>
<div className="flex flex-col items-center">
<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
<path d="M12 8v4l4 2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs mt-1">Trips</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-neutral-700 rounded-full"></div>
</div>
</div>

<section className="max-w-xl text-left">

<div className="flex gap-6 mb-6 items-center justify-center">
<div className="bg-black rounded-lg px-3 py-2 border border-neutral-700">
<div className="flex items-center gap-2">
<svg fill="white" height="20" viewBox="0 0 24 24" width="20">
<path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09 22C7.85 22.05 6.83 20.68 6 19.32C4.31 16.45 3.07 10.62 4.82 7.85C5.69 6.5 7.14 5.75 8.69 5.73C9.96 5.71 11.18 6.61 11.95 6.61C12.72 6.61 14.21 5.55 15.77 5.73C16.45 5.76 18.07 6.04 19.05 7.5C18.96 7.57 17.5 8.47 17.52 10.4C17.54 12.85 19.69 13.71 19.71 13.72C19.68 13.81 19.32 15.05 18.71 19.5Z"></path>
<path d="M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"></path>
</svg>
<span className="text-xs font-medium">App Store</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-400">
<div className="flex">
<svg fill="#FACC15" height="16" stroke="#FACC15" strokeWidth="2" viewBox="0 0 24 24" width="16">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg fill="#FACC15" height="16" stroke="#FACC15" strokeWidth="2" viewBox="0 0 24 24" width="16">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg fill="#FACC15" height="16" stroke="#FACC15" strokeWidth="2" viewBox="0 0 24 24" width="16">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg fill="#FACC15" height="16" stroke="#FACC15" strokeWidth="2" viewBox="0 0 24 24" width="16">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg fill="#FACC15" height="16" stroke="#FACC15" strokeWidth="2" viewBox="0 0 24 24" width="16">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
</div>
<span className="font-light">4.9</span>
<span className="text-xs uppercase tracking-wide ml-2">250K+ Travelers</span>
</div>
</div>

<h1 className="lg:text-6xl leading-tight text-gradient text-5xl font-semibold tracking-tight text-center mb-4">
                Travel is stressful.
            </h1>

<p className="leading-relaxed text-lg font-normal text-neutral-400 text-center mb-8">
                So we simplified it for everyone. Join over 2 million travelers using the world's most intuitive flight tracking app.
            </p>

<div className="flex flex-wrap gap-4 justify-center">
<button className="flex items-center gap-3 border rounded-full border-neutral-600 py-3 px-6 text-white font-medium bg-transparent hover:bg-neutral-900 transition duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="20">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
<line x1="12" x2="12.01" y1="18" y2="18"></line>
</svg>
                    For iPhone
                </button>
<button className="flex items-center gap-3 rounded-full py-3 px-6 font-medium text-black shadow-lg hover:brightness-110 transition duration-300 bg-gradient-cta">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="20">
<rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
                    For macOS
                </button>
</div>
</section>
</main>

    </>
  );
}
