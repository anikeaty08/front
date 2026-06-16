import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      
<div className="device-frame bg-neugray shadow-2xl border-8 border-gray-700">

<div className="h-full flex flex-col">
<div className="flex-1 p-4 overflow-auto">

<header className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<h1 className="text-xl font-bold music-gradient">MeloMix</h1>
</div>
<div className="flex items-center gap-2">
<button className="p-3 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="w-8 h-8 rounded-full bg-neugray shadow-clay overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/42.jpg"/>
</div>
</div>
</header>

<div className="mb-8">
<div className="flex justify-between items-center mb-4">
<h2 className="text-lg font-bold">Recently Played</h2>
<button className="text-primary text-sm font-semibold">See All</button>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-neugray rounded-2xl shadow-clay p-4">
<div className="w-full h-36 rounded-xl overflow-hidden mb-3 album-art">
<img alt="Album Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1598387846148-47e82ee120cc?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-semibold text-textprimary">Late Night Vibes</h3>
<p className="text-xs text-textsecondary">Your Chill Mix</p>
</div>
<div className="bg-neugray rounded-2xl shadow-clay p-4">
<div className="w-full h-36 rounded-xl overflow-hidden mb-3 album-art">
<img alt="Album Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-semibold text-textprimary">Morning Coffee</h3>
<p className="text-xs text-textsecondary">Acoustic Playlist</p>
</div>
</div>
</div>

<div className="mb-8">
<h2 className="text-lg font-bold mb-4">Made For You</h2>
<div className="bg-neugray rounded-2xl shadow-clay p-5 mb-4">
<div className="flex items-start">
<div className="w-16 h-16 rounded-xl overflow-hidden mr-4 album-art">
<img alt="Mix" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div>
<h3 className="font-semibold text-textprimary">Your Daily Mix</h3>
<p className="text-xs text-textsecondary mb-2">Updated today with songs from your favorite artists</p>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold shadow-clay hover:bg-primaryhover transition-all">Play</button>
<button className="p-2 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
<div className="bg-neugray rounded-2xl shadow-clay p-5">
<div className="flex items-start">
<div className="w-16 h-16 rounded-xl overflow-hidden mr-4 album-art">
<img alt="Mix" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div>
<h3 className="font-semibold text-textprimary">Discover Weekly</h3>
<p className="text-xs text-textsecondary mb-2">New music recommendations based on your listening</p>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold shadow-clay hover:bg-primaryhover transition-all">Play</button>
<button className="p-2 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="mb-8">
<h2 className="text-lg font-bold mb-4">Top Charts</h2>
<div className="space-y-3">
<div className="flex items-center bg-neugray rounded-xl shadow-clay p-3">
<div className="w-12 h-12 rounded-lg overflow-hidden mr-3 album-art">
<img alt="Song" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="flex-1">
<h4 className="font-semibold text-textprimary">Higher Ground</h4>
<p className="text-xs text-textsecondary">ODESZA</p>
</div>
<button className="p-2 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-2 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all ml-2">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center bg-neugray rounded-xl shadow-clay p-3">
<div className="w-12 h-12 rounded-lg overflow-hidden mr-3 album-art">
<img alt="Song" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="flex-1">
<h4 className="font-semibold text-textprimary">Midnight City</h4>
<p className="text-xs text-textsecondary">M83</p>
</div>
<button className="p-2 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-2 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all ml-2">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center bg-neugray rounded-xl shadow-clay p-3">
<div className="w-12 h-12 rounded-lg overflow-hidden mr-3 album-art">
<img alt="Song" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="flex-1">
<h4 className="font-semibold text-textprimary">Blinding Lights</h4>
<p className="text-xs text-textsecondary">The Weeknd</p>
</div>
<button className="p-2 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-2 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all ml-2">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="bg-neugray shadow-[0_-5px_15px_rgba(174,174,192,0.3)] p-3 rounded-t-2xl">
<div className="flex items-center">
<div className="w-12 h-12 rounded-lg overflow-hidden mr-3 album-art">
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
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-3 rounded-full bg-primary shadow-clay hover:bg-primaryhover transition-all">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-2 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="h-20 px-2 pt-2 pb-6 bg-neugray shadow-[0_-5px_15px_rgba(174,174,192,0.3)] relative">
<div className="flex justify-around items-center h-full">
<button className="flex flex-col items-center justify-center w-16 h-full">
<div className="w-10 h-10 rounded-xl bg-primary shadow-pressed flex items-center justify-center">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-primary mt-1">Home</span>
<div className="tab-indicator"></div>
</button>
<button className="flex flex-col items-center justify-center w-16 h-full">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-textsecondary mt-1">Search</span>
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
