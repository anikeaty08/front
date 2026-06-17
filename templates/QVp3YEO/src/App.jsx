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
                        textsecondary: '#718096',
                        success: '#48BB78',
                        warning: '#ED8936',
                        danger: '#F56565'
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

<div className="h-full flex flex-col">
<div className="flex-1 p-4 overflow-auto">

<header className="mb-6">
<h1 className="text-xl font-bold mb-4">Search</h1>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<input className="w-full py-3 pl-10 pr-4 rounded-xl bg-neugray shadow-pressed text-textprimary focus:outline-none" placeholder="Artists, songs, or podcasts" type="text"/>
</div>
</header>

<div className="mb-8">
<div className="flex justify-between items-center mb-4">
<h2 className="text-lg font-bold">Recent Searches</h2>
<button className="text-primary text-sm font-semibold">Clear All</button>
</div>
<div className="space-y-3">
<div className="flex items-center bg-neugray rounded-xl shadow-clay p-3">
<div className="w-10 h-10 rounded-full overflow-hidden mr-3">
<img alt="Artist" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="flex-1">
<h4 className="font-semibold text-textprimary">Coldplay</h4>
<p className="text-xs text-textsecondary">Artist</p>
</div>
<button className="p-2 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center bg-neugray rounded-xl shadow-clay p-3">
<div className="w-10 h-10 rounded-lg overflow-hidden mr-3">
<img alt="Song" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="flex-1">
<h4 className="font-semibold text-textprimary">Higher Ground</h4>
<p className="text-xs text-textsecondary">Song • ODESZA</p>
</div>
<button className="p-2 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="mb-8">
<h2 className="text-lg font-bold mb-4">Browse Categories</h2>
<div className="grid grid-cols-2 gap-3">
<div className="bg-[#FFD166] rounded-xl p-4 shadow-clay genre-card relative overflow-hidden">
<h3 className="font-bold text-white text-lg z-10 relative">Hip Hop</h3>
<div className="absolute bottom-0 right-0 opacity-50">
<svg className="text-white" fill="none" height="64" stroke="currentColor" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
</svg>
</div>
</div>
<div className="bg-[#06D6A0] rounded-xl p-4 shadow-clay genre-card relative overflow-hidden">
<h3 className="font-bold text-white text-lg z-10 relative">Electronic</h3>
<div className="absolute bottom-0 right-0 opacity-50">
<svg className="text-white" fill="none" height="64" stroke="currentColor" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
<path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
</svg>
</div>
</div>
<div className="bg-[#EF476F] rounded-xl p-4 shadow-clay genre-card relative overflow-hidden">
<h3 className="font-bold text-white text-lg z-10 relative">Pop</h3>
<div className="absolute bottom-0 right-0 opacity-50">
<svg className="text-white" fill="none" height="64" stroke="currentColor" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
<path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
</svg>
</div>
</div>
<div className="bg-[#118AB2] rounded-xl p-4 shadow-clay genre-card relative overflow-hidden">
<h3 className="font-bold text-white text-lg z-10 relative">Rock</h3>
<div className="absolute bottom-0 right-0 opacity-50">
<svg className="text-white" fill="none" height="64" stroke="currentColor" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
<path d="M9 10V8m0 4v-2m0 4v-2m0 4v-2M5 8h14M5 12h14M5 16h14M9 20h1m7-20h-1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="mb-8">
<h2 className="text-lg font-bold mb-4">Top Podcasts</h2>
<div className="flex overflow-x-auto pb-2 -mx-1 space-x-3">
<div className="min-w-[140px] bg-neugray rounded-xl shadow-clay p-3 genre-card">
<div className="w-full h-24 rounded-lg overflow-hidden mb-2">
<img alt="Podcast" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h4 className="font-semibold text-sm text-textprimary">The Daily</h4>
<p className="text-xs text-textsecondary">News &amp; Politics</p>
</div>
<div className="min-w-[140px] bg-neugray rounded-xl shadow-clay p-3 genre-card">
<div className="w-full h-24 rounded-lg overflow-hidden mb-2">
<img alt="Podcast" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h4 className="font-semibold text-sm text-textprimary">Science Weekly</h4>
<p className="text-xs text-textsecondary">Science</p>
</div>
<div className="min-w-[140px] bg-neugray rounded-xl shadow-clay p-3 genre-card">
<div className="w-full h-24 rounded-lg overflow-hidden mb-2">
<img alt="Podcast" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h4 className="font-semibold text-sm text-textprimary">Code Stories</h4>
<p className="text-xs text-textsecondary">Technology</p>
</div>
</div>
</div>
</div>

<div className="bg-neugray shadow-[0_-5px_15px_rgba(174,174,192,0.3)] p-3 rounded-t-2xl">
<div className="flex items-center">
<div className="w-12 h-12 rounded-lg overflow-hidden mr-3">
<img alt="Now Playing" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="flex-1">
<h4 className="font-semibold text-textprimary">Midnight City</h4>
<div className="flex items-center">
<p className="text-xs text-textsecondary mr-2">M83</p>
<div className="h-1 w-1 rounded-full bg-textsecondary mr-2"></div>
<div className="flex items-center">
<span className="text-xs text-textsecondary mr-1">2:14</span>
<div className="w-16 h-1 bg-gray-300 rounded-full mr-1">
<div className="progress-bar"></div>
</div>
<span className="text-xs text-textsecondary">3:44</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="h-20 px-2 pt-2 pb-6 bg-neugray shadow-[0_-5px_15px_rgba(174,174,192,0.3)] relative">
<div className="flex justify-around items-center h-full">
<button className="flex flex-col items-center justify-center w-16 h-full">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-textsecondary mt-1">Home</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-full">
<div className="w-10 h-10 rounded-xl bg-primary shadow-pressed flex items-center justify-center">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-primary mt-1">Search</span>
<div className="tab-indicator"></div>
</button>
<button className="flex flex-col items-center justify-center w-16 h-full">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-textsecondary mt-1">Library</span>
</button>
</div>
</div>
</div>
</div>

    </>
  );
}
