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
<div className="h-full p-5 overflow-auto">

<header className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<button className="p-3 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<h1 className="text-xl font-bold text-textprimary">Browse</h1>
</div>
<div className="flex items-center gap-2">
<button className="p-3 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</header>

<div className="mb-6">
<div className="relative">
<input className="w-full py-3 px-5 pl-12 rounded-xl bg-neugray shadow-pressed text-textprimary text-sm border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-30" placeholder="Search artists, songs, or podcasts" type="text"/>
<svg className="h-5 w-5 text-textsecondary absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="mb-6">
<h2 className="text-lg font-bold text-textprimary mb-4">Categories</h2>
<div className="grid grid-cols-2 gap-3">
<div className="bg-neugray rounded-xl shadow-clay overflow-hidden group cursor-pointer">
<div className="h-28 relative">
<img alt="Pop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<h3 className="absolute bottom-3 left-3 text-white font-bold">Pop</h3>
</div>
</div>
<div className="bg-neugray rounded-xl shadow-clay overflow-hidden group cursor-pointer">
<div className="h-28 relative">
<img alt="Hip Hop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<h3 className="absolute bottom-3 left-3 text-white font-bold">Hip Hop</h3>
</div>
</div>
<div className="bg-neugray rounded-xl shadow-clay overflow-hidden group cursor-pointer">
<div className="h-28 relative">
<img alt="Electronic" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<h3 className="absolute bottom-3 left-3 text-white font-bold">Electronic</h3>
</div>
</div>
<div className="bg-neugray rounded-xl shadow-clay overflow-hidden group cursor-pointer">
<div className="h-28 relative">
<img alt="Rock" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<h3 className="absolute bottom-3 left-3 text-white font-bold">Rock</h3>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h2 className="text-lg font-bold text-textprimary">Trending Playlists</h2>
<button className="text-sm text-primary font-medium">See All</button>
</div>
<div className="flex overflow-x-auto pb-4 -mx-2">
<div className="px-2 min-w-[160px]">
<div className="bg-neugray rounded-xl shadow-clay overflow-hidden">
<div className="aspect-square">
<img alt="Playlist" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300"/>
</div>
<div className="p-3">
<h3 className="font-semibold text-textprimary text-sm">Today's Hits</h3>
<p className="text-xs text-textsecondary">50 songs</p>
</div>
</div>
</div>
<div className="px-2 min-w-[160px]">
<div className="bg-neugray rounded-xl shadow-clay overflow-hidden">
<div className="aspect-square">
<img alt="Playlist" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300"/>
</div>
<div className="p-3">
<h3 className="font-semibold text-textprimary text-sm">Chill Vibes</h3>
<p className="text-xs text-textsecondary">45 songs</p>
</div>
</div>
</div>
<div className="px-2 min-w-[160px]">
<div className="bg-neugray rounded-xl shadow-clay overflow-hidden">
<div className="aspect-square">
<img alt="Playlist" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300"/>
</div>
<div className="p-3">
<h3 className="font-semibold text-textprimary text-sm">Hip Hop Mix</h3>
<p className="text-xs text-textsecondary">38 songs</p>
</div>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-lg font-bold text-textprimary mb-4">New Releases</h2>
<div className="space-y-3">
<div className="flex items-center p-3 rounded-xl bg-neugray shadow-hover">
<div className="w-12 h-12 rounded-lg shadow-clay overflow-hidden mr-3">
<img alt="Album" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?w=200"/>
</div>
<div>
<h4 className="font-semibold text-textprimary">Midnight Tales</h4>
<p className="text-xs text-textsecondary">The Echoes • Album</p>
</div>
<button className="ml-auto p-2 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center p-3 rounded-xl bg-neugray shadow-hover">
<div className="w-12 h-12 rounded-lg shadow-clay overflow-hidden mr-3">
<img alt="Album" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=200"/>
</div>
<div>
<h4 className="font-semibold text-textprimary">Electric Dreams</h4>
<p className="text-xs text-textsecondary">Neon Wave • Single</p>
</div>
<button className="ml-auto p-2 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center p-3 rounded-xl bg-neugray shadow-hover">
<div className="w-12 h-12 rounded-lg shadow-clay overflow-hidden mr-3">
<img alt="Album" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=200"/>
</div>
<div>
<h4 className="font-semibold text-textprimary">Ocean Memories</h4>
<p className="text-xs text-textsecondary">Coastal Sounds • EP</p>
</div>
<button className="ml-auto p-2 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
