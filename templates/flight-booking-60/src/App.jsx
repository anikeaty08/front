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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        lucide.createIcons();
    
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
      

<div className="w-full max-w-6xl mx-auto bg-zinc-900 rounded-[2.5rem] shadow-2xl border border-zinc-800/50 flex flex-col overflow-hidden relative">

<header className="sm:px-12 flex sticky bg-zinc-900/80 w-full z-30 border-white/5 border-b pt-8 pr-8 pb-8 pl-8 top-0 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3 text-zinc-100 group cursor-pointer">
<div className="bg-blue-600/20 p-1.5 rounded-lg group-hover:bg-blue-600/30 transition-colors">
<svg className="lucide lucide-plane w-5 h-5 text-blue-500" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight">Aero</span>
</div>
<nav className="hidden sm:flex gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-blue-400 transition-colors" href="#">Destinations</a>
<a className="hover:text-blue-400 transition-colors" href="#">Schedule</a>
<a className="hover:text-blue-400 transition-colors" href="#">Membership</a>
</nav>
<button className="hidden sm:flex text-sm font-medium bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
                Get App
            </button>
</header>

<div className="flex-grow flex flex-col overflow-y-auto">

<section className="flex flex-col z-10 overflow-hidden text-center pt-16 pr-6 pb-0 pl-6 relative items-center">

<div className="mb-10 relative group">
<div className="w-24 h-24 bg-blue-600 rounded-[2rem] flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300 ease-out border-t border-white/20">
<svg className="lucide lucide-send stroke-[1.5] -ml-1 mt-1 w-[48px] h-[48px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="arrow-down" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '48px', height: '48px'}} viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
<div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 -z-10 rounded-full"></div>
</div>

<h1 className="font-mono-title text-5xl sm:text-6xl text-white font-bold mb-6 tracking-tight">
                    The new standardfor modern travel.
                </h1>

<p className="max-w-xl text-lg sm:text-xl font-light leading-relaxed text-zinc-400 mb-10">
                    Aero manages your entire journey. From booking to boarding, stay synchronized with real-time updates and smart itinerary management.
                </p>

<div className="flex items-center gap-4 mb-24">
<button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg shadow-blue-900/20">
                        Start Booking
                    </button>
<button className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>How it works</span>
</button>
</div>

<div className="perspective-container w-full max-w-3xl relative h-64 sm:h-80 select-none pointer-events-none mb-24">
<div className="skewed-interface bg-zinc-900 rounded-xl shadow-2xl p-1 border border-white/10 w-full aspect-[16/10] absolute top-0 left-1/2 -translate-x-1/2 ring-1 ring-white/5">
<div className="w-full h-full bg-zinc-950 rounded-lg overflow-hidden relative flex flex-col">

<div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-zinc-900/50">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/30"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/30"></div>
</div>
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">Trip Itinerary</div>
</div>

<div className="p-2 sm:p-4 space-y-1 overflow-hidden">

<div className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-all border border-transparent">
<div className="flex-shrink-0 text-blue-500">
<svg className="w-5 h-5 opacity-100" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"></path></svg>
</div>
<div className="flex flex-col items-start text-left">
<span className="text-sm text-zinc-500 line-through decoration-zinc-700">Flight Booking Confirmed</span>
</div>
<span className="ml-auto text-[10px] text-zinc-600 font-medium px-2 py-0.5 bg-zinc-900 rounded border border-zinc-800">Done</span>
</div>

<div className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-all border border-transparent">
<div className="flex-shrink-0 text-blue-500">
<svg className="w-5 h-5 opacity-100" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"></path></svg>
</div>
<div className="flex flex-col items-start text-left">
<span className="text-sm text-zinc-500 line-through decoration-zinc-700">Seat Selection (4A, 4B)</span>
</div>
<span className="ml-auto text-[10px] text-zinc-600 font-medium px-2 py-0.5 bg-zinc-900 rounded border border-zinc-800">Done</span>
</div>

<div className="group flex items-center gap-3 p-2.5 rounded-lg bg-blue-500/5 border border-blue-500/20 shadow-lg shadow-blue-900/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-50"></div>
<div className="flex-shrink-0 relative z-10">
<div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></div>
</div>
</div>
<div className="flex flex-col items-start text-left relative z-10">
<span className="text-sm text-zinc-100 font-medium">Check-in Open</span>
<span className="text-[10px] text-blue-400">Flight JL408 • Departs in 24h</span>
</div>
<button className="ml-auto relative z-10 text-[10px] font-semibold bg-blue-600 text-white px-3 py-1 rounded-md shadow-sm border border-blue-500 hover:bg-blue-500 transition-colors">
                                        Check In
                                    </button>
</div>

<div className="group flex items-center gap-3 p-2.5 rounded-lg opacity-60 hover:opacity-100 hover:bg-white/5 transition-all border border-transparent">
<div className="flex-shrink-0 text-zinc-600">
<div className="w-5 h-5 rounded-full border-2 border-zinc-700"></div>
</div>
<div className="flex flex-col items-start text-left">
<span className="text-sm text-zinc-400">Download Boarding Pass</span>
</div>
</div>

<div className="group flex items-center gap-3 p-2.5 rounded-lg opacity-60 hover:opacity-100 hover:bg-white/5 transition-all border border-transparent">
<div className="flex-shrink-0 text-zinc-600">
<div className="w-5 h-5 rounded-full border-2 border-zinc-700"></div>
</div>
<div className="flex flex-col items-start text-left">
<span className="text-sm text-zinc-400">Arrive at JFK Terminal 4</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950/30 border-t border-white/5 px-6 sm:px-12 py-24 relative">
<div className="max-w-4xl mx-auto mb-16 text-center sm:text-left">
<h3 className="font-mono-title text-blue-500 text-xs uppercase tracking-widest mb-3">Capabilities</h3>
<h2 className="text-3xl sm:text-4xl font-semibold text-zinc-100 tracking-tight mb-4">Everything you need to fly.</h2>
<p className="text-zinc-400 text-lg max-w-xl">Powerful features designed to keep you moving. Experience the future of flight management.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="group md:col-span-2 relative h-80 bg-zinc-900 rounded-3xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-900/0 to-zinc-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10">
<div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 border border-white/5">
<svg className="lucide lucide-map w-5 h-5 text-zinc-100" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<h3 className="text-xl font-medium text-zinc-100 mb-2">Live Coordination</h3>
<p className="text-sm text-zinc-500 max-w-xs">Track flights in real-time with our advanced satellite integration system.</p>
</div>

<div className="absolute bottom-0 right-0 w-3/4 h-3/4 opacity-50">
<div className="w-full h-full relative">

<svg className="w-full h-full text-zinc-700" fill="none" viewbox="0 0 400 300">
<path d="M50 250 C 100 250, 150 150, 200 150 S 300 100, 350 50" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M50 250 C 120 250, 180 200, 250 200" opacity="0.5" stroke="currentColor" strokeWidth="1"></path>

<circle className="fill-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" cx="200" cy="150" r="4"></circle>
<circle className="stroke-blue-500/30" cx="200" cy="150" r="12" strokeWidth="1"></circle>
</svg>
</div>
</div>
</div>

<div className="group relative h-80 bg-zinc-900 rounded-3xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-zinc-900/0 to-zinc-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10">
<div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 border border-white/5">
<svg className="lucide lucide-zap w-5 h-5 text-zinc-100" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium text-zinc-100 mb-2">Instant Alerts</h3>
<p className="text-sm text-zinc-500">Never miss a gate change or delay.</p>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 space-y-2 pb-6">
<div className="bg-zinc-800/80 backdrop-blur border border-white/5 p-3 rounded-xl flex items-center gap-3 shadow-lg transform scale-95 opacity-50 translate-y-2">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<div className="w-16 h-1.5 bg-zinc-700 rounded-full"></div>
</div>
<div className="bg-zinc-800/90 backdrop-blur border border-white/5 p-3 rounded-xl flex items-center gap-3 shadow-lg transform transition-transform group-hover:-translate-y-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<div className="space-y-1.5">
<div className="w-20 h-1.5 bg-zinc-600 rounded-full"></div>
<div className="w-12 h-1.5 bg-zinc-700 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="group relative h-64 bg-zinc-900 rounded-3xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors">
<div className="p-8 relative z-10">
<div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 border border-white/5">
<svg className="lucide lucide-wallet w-5 h-5 text-zinc-100" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">Unified Wallet</h3>
<p className="text-sm text-zinc-500">All tickets in one place.</p>
</div>

<div className="absolute -bottom-6 -right-6">
<div className="w-32 h-20 bg-zinc-800 border border-white/5 rounded-xl transform -rotate-12 shadow-2xl"></div>
<div className="w-32 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl transform -rotate-6 -mt-16 ml-4 border border-white/10 shadow-2xl flex items-center justify-center">
<div className="w-8 h-8 rounded-full border-2 border-white/20"></div>
</div>
</div>
</div>

<div className="group relative h-64 bg-zinc-900 rounded-3xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors">
<div className="p-8 relative z-10">
<div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 border border-white/5">
<svg className="lucide lucide-bar-chart-2 w-5 h-5 text-zinc-100" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path className="" d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">Travel Stats</h3>
<p className="text-sm text-zinc-500">Visualize your miles.</p>
</div>

<div className="absolute bottom-6 left-8 right-8 flex items-end justify-between gap-2 h-16">
<div className="w-full bg-zinc-800 rounded-t-sm h-4 group-hover:h-8 transition-all duration-500"></div>
<div className="w-full bg-zinc-800 rounded-t-sm h-8 group-hover:h-12 transition-all duration-500 delay-75"></div>
<div className="w-full bg-blue-600/80 rounded-t-sm h-12 group-hover:h-16 transition-all duration-500 delay-100 shadow-[0_0_15px_rgba(37,99,235,0.3)]"></div>
<div className="w-full bg-zinc-800 rounded-t-sm h-6 group-hover:h-10 transition-all duration-500 delay-150"></div>
</div>
</div>

<div className="group relative h-64 bg-zinc-900 rounded-3xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors">
<div className="p-8 relative z-10">
<div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 border border-white/5">
<svg className="lucide lucide-shield-check w-5 h-5 text-zinc-100" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">Secure Data</h3>
<p className="text-sm text-zinc-500">Encrypted end-to-end.</p>
</div>

<div className="absolute bottom-6 right-8">
<svg className="lucide lucide-lock w-16 h-16 text-zinc-800 stroke-1 group-hover:text-zinc-700 transition-colors" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
</div>
</div>

<div className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-zinc-500 text-xs gap-4">
<div className="flex gap-6">
<a className="hover:text-zinc-300" href="#">Privacy</a>
<a className="hover:text-zinc-300" href="#">Terms</a>
<a className="hover:text-zinc-300" href="#">Twitter</a>
</div>
<span>© 2024 Aero Inc.</span>
</div>
</section>
</div>
</div>


    </>
  );
}
