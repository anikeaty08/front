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
<h1 className="text-xl font-bold">Library</h1>
<button className="p-3 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</header>

<div className="mb-6">
<div className="flex space-x-2 overflow-x-auto pb-2">
<button className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold shadow-clay whitespace-nowrap">
                            All Music
                        </button>
<button className="px-4 py-2 rounded-xl bg-neugray text-textsecondary text-sm font-semibold shadow-clay hover:shadow-hover transition-all whitespace-nowrap">
                            Playlists
                        </button>
<button className="px-4 py-2 rounded-xl bg-neugray text-textsecondary text-sm font-semibold shadow-clay hover:shadow-hover transition-all whitespace-nowrap">
                            Artists
                        </button>
<button className="px-4 py-2 rounded-xl bg-neugray text-textsecondary text-sm font-semibold shadow-clay hover:shadow-hover transition-all whitespace-nowrap">
                            Albums
                        </button>
</div>
</div>

<div className="mb-8">
<div className="flex justify-between items-center mb-4">
<h2 className="text-lg font-bold">Your Playlists</h2>
<button className="text-primary text-sm font-semibold">See All</button>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-neugray rounded-2xl shadow-clay p-4">
<div className="w-full h-36 rounded-xl overflow-hidden mb-3">
<img alt="Playlist" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1598387846148-47e82ee120cc?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-semibold text-textprimary">Favorites</h3>
<p className="text-xs text-textsecondary">128 songs</p>
</div>
<div className="bg-neugray rounded-2xl shadow-clay p-4">
<div className="w-full h-36 rounded-xl overflow-hidden mb-3">
<img alt="Playlist" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-semibold text-textprimary">Workout Mix</h3>
<p className="text-xs text-textsecondary">42 songs</p>
</div>
</div>
</div>

<div className="mb-8">
<h2 className="text-lg font-bold mb-4">Recently Added</h2>
<div className="space-y-3">
<div className="flex items-center bg-neugray rounded-xl shadow-clay p-3">
<div className="w-12 h-12 rounded-lg overflow-hidden mr-3">
<img alt="Album" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="flex-1">
<h4 className="font-semibold text-textprimary">After Hours</h4>
<p className="text-xs text-textsecondary">Album • The Weeknd</p>
</div>
<button className="p-2 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center bg-neugray rounded-xl shadow-clay p-3">
<div className="w-12 h-12 rounded-lg overflow-hidden mr-3">
<img alt="Album" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="flex-1">
<h4 className="font-semibold text-textprimary">Currents</h4>
<p className="text-xs text-textsecondary">Album • Tame Impala</p>
</div>
<button className="p-2 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex justify-between items-center mb-4">
<h2 className="text-lg font-bold">Downloaded Music</h2>
<button className="text-primary text-sm font-semibold">Edit</button>
</div>
<div className="bg-neugray rounded-2xl shadow-clay p-5">
<div className="flex items-center">
<div className="w-10 h-10 rounded-lg bg-primary shadow-clay flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h3 className="font-semibold text-textprimary">Offline Music</h3>
<p className="text-xs text-textsecondary">214 songs • 1.2 GB</p>
</div>
</div>
</div>
</div>

<div className="mb-8">
<h2 className="text-lg font-bold mb-4">Recently Played</h2>
<div className="flex overflow-x-auto pb-2 -mx-1 space-x-3">
<div className="min-w-[140px] bg-neugray rounded-xl shadow-clay p-3">
<div className="w-full h-24 rounded-lg overflow-hidden mb-2">
<img alt="Album" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/55.jpg"/>
</div>
<h4 className="font-semibold text-sm text-textprimary">Blinding Lights</h4>
<p className="text-xs text-textsecondary">The Weeknd</p>
</div>
<div className="min-w-[140px] bg-neugray rounded-xl shadow-clay p-3">
<div className="w-full h-24 rounded-lg overflow-hidden mb-2">
<img alt="Album" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/33.jpg"/>
</div>
<h4 className="font-semibold text-sm text-textprimary">Let It Happen</h4>
<p className="text-xs text-textsecondary">Tame Impala</p>
</div>
<div className="min-w-[140px] bg-neugray rounded-xl shadow-clay p-3">
<div className="w-full h-24 rounded-lg overflow-hidden mb-2">
<img alt="Album" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h4 className="font-semibold text-sm text-textprimary">Levitating</h4>
<p className="text-xs text-textsecondary">Dua Lipa</p>
</div>
</div>
</div>
</div>

<div className="bg-neugray shadow-[0_-5px_15px_rgba(174,174,192,0.3)] p-3 rounded-t-2xl">
<div className="flex items-center">
<div className="w-12 h-12 rounded-lg overflow-hidden mr-3">
<img alt="Now Playing" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/33.jpg"/>
</div>
<div className="flex-1">
<h4 className="font-semibold text-textprimary">Let It Happen</h4>
<div className="flex items-center">
<p className="text-xs text-textsecondary mr-2">Tame Impala</p>
<div className="h-1 w-1 rounded-full bg-textsecondary mr-2"></div>
<div className="flex items-center">
<span className="text-xs text-textsecondary mr-1">3:45</span>
<div className="w-16 h-1 bg-gray-300 rounded-full mr-1">
<div className="progress-bar"></div>
</div>
<span className="text-xs text-textsecondary">7:46</span>
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
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-textsecondary mt-1">Search</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-full">
<div className="w-10 h-10 rounded-xl bg-primary shadow-pressed flex items-center justify-center">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-primary mt-1">Library</span>
<div className="tab-indicator"></div>
</button>
</div>
</div>
</div>
</div>

    </>
  );
}
