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
                        neugray: '#e6e7ee',
                        primary: '#5A67D8',
                        primaryhover: '#4c58bf',
                        textprimary: '#4A5568',
                        textsecondary: '#718096'
                    },
                    boxShadow: {
                        'clay': '8px 8px 16px rgba(174, 174, 192, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.9)',
                        'pressed': 'inset 5px 5px 10px rgba(174, 174, 192, 0.5), inset -5px -5px 10px rgba(255, 255, 255, 0.9)',
                        'hover': 'inset 3px 3px 6px rgba(174, 174, 192, 0.4), inset -3px -3px 6px rgba(255, 255, 255, 0.8)'
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
      
<div className="device-frame bg-neugray shadow-2xl border-8 border-gray-700">

<div className="h-full p-4 overflow-auto">

<header className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<button className="p-3 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<h1 className="text-xl font-bold">Harmony</h1>
</div>
<div className="flex items-center gap-2">
<button className="p-3 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="w-8 h-8 rounded-full bg-neugray shadow-clay overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
</div>
</header>

<div className="bg-neugray rounded-2xl shadow-clay p-5 mb-6">
<div className="flex flex-col items-center">
<div className="w-full max-w-xs mb-6">
<div className="aspect-square rounded-xl shadow-clay overflow-hidden">
<img alt="Album Cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&amp;auto=format&amp;fit=crop&amp;q=80"/>
</div>
</div>
<div className="w-full text-center mb-4">
<h2 className="text-xl font-bold mb-1">Midnight Memories</h2>
<p className="text-textsecondary mb-3">The Lunar Waves</p>
<div className="flex items-center justify-center gap-2 mb-4">
<span className="px-3 py-1 text-xs rounded-full bg-neugray shadow-pressed text-primary">Electronic</span>
<span className="px-3 py-1 text-xs rounded-full bg-neugray shadow-pressed text-textsecondary">Ambient</span>
</div>
</div>
<div className="w-full">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-textsecondary">2:45</span>
<span className="text-xs text-textsecondary">4:30</span>
</div>
<div className="h-2 rounded-full shadow-pressed progress-bar mb-6"></div>
<div className="flex items-center justify-between">
<button className="p-3 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-6 w-6 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-4 rounded-full bg-primary text-white shadow-clay hover:bg-primaryhover transition-all">
<svg className="h-8 w-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-3 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-6 w-6 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="bg-neugray rounded-2xl shadow-clay p-5 mb-6">
<h3 className="font-bold mb-4">Audio Settings</h3>
<div className="mb-5">
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-textsecondary">Volume</span>
<span className="text-xs text-textsecondary">75%</span>
</div>
<div className="h-2 rounded-full shadow-pressed volume-bar"></div>
</div>
<div className="mb-4">
<h4 className="text-sm text-textsecondary mb-3">Equalizer</h4>
<div className="flex justify-between items-end h-24">
<div className="w-4 bg-neugray shadow-pressed rounded-t-lg" style={{height: '40%'}}></div>
<div className="w-4 bg-neugray shadow-pressed rounded-t-lg" style={{height: '65%'}}></div>
<div className="w-4 bg-primary shadow-pressed rounded-t-lg" style={{height: '90%'}}></div>
<div className="w-4 bg-primary shadow-pressed rounded-t-lg" style={{height: '75%'}}></div>
<div className="w-4 bg-neugray shadow-pressed rounded-t-lg" style={{height: '50%'}}></div>
<div className="w-4 bg-neugray shadow-pressed rounded-t-lg" style={{height: '60%'}}></div>
<div className="w-4 bg-neugray shadow-pressed rounded-t-lg" style={{height: '30%'}}></div>
</div>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1 text-sm rounded-lg bg-primary text-white shadow-clay hover:bg-primaryhover transition-all">
                        Custom
                    </button>
<button className="px-3 py-1 text-sm rounded-lg bg-neugray shadow-clay hover:shadow-hover transition-all text-textsecondary">
                        Bass Boost
                    </button>
<button className="px-3 py-1 text-sm rounded-lg bg-neugray shadow-clay hover:shadow-hover transition-all text-textsecondary">
                        Vocal
                    </button>
</div>
</div>

<div className="bg-neugray rounded-2xl shadow-clay p-5">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Recently Played</h3>
<button className="text-primary text-sm">View All</button>
</div>
<div className="space-y-3">
<div className="flex items-center p-3 rounded-xl bg-neugray shadow-hover">
<div className="w-10 h-10 rounded-lg shadow-clay overflow-hidden mr-3">
<img alt="Track" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=200"/>
</div>
<div className="flex-grow">
<h4 className="font-semibold">Sunset Dreams</h4>
<p className="text-xs text-textsecondary">Ocean Waves</p>
</div>
<div className="text-textsecondary text-xs">3:42</div>
</div>
<div className="flex items-center p-3 rounded-xl bg-neugray shadow-hover">
<div className="w-10 h-10 rounded-lg shadow-clay overflow-hidden mr-3">
<img alt="Track" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200"/>
</div>
<div className="flex-grow">
<h4 className="font-semibold">Neon Lights</h4>
<p className="text-xs text-textsecondary">Electric Dreams</p>
</div>
<div className="text-textsecondary text-xs">4:15</div>
</div>
<div className="flex items-center p-3 rounded-xl bg-neugray shadow-hover">
<div className="w-10 h-10 rounded-lg shadow-clay overflow-hidden mr-3">
<img alt="Track" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200"/>
</div>
<div className="flex-grow">
<h4 className="font-semibold">Morning Coffee</h4>
<p className="text-xs text-textsecondary">Acoustic Sessions</p>
</div>
<div className="text-textsecondary text-xs">3:27</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
