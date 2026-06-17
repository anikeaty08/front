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
      

<aside className="w-64 border-r border-zinc-800/50 flex flex-col bg-zinc-950/50 hidden md:flex">
<div className="h-16 flex items-center px-6 border-b border-zinc-800/50">
<div className="flex items-center gap-2 text-zinc-100 font-semibold tracking-tight">
<div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center text-white text-[10px] font-bold shadow-[0_0_15px_-3px_rgba(99,102,241,0.4)]">
                    SL
                </div>
<span>STREAMLAB</span>
</div>
</div>
<div className="flex-1 overflow-y-auto py-6 px-3 space-y-8">

<div>
<h3 className="px-3 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Library</h3>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-100 bg-zinc-900/50 rounded-md border border-zinc-800/50 transition-all group" href="#">
<i className="w-4 h-4 text-indigo-400" data-lucide="layout-grid"></i>
                        Dashboard
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all group" href="#">
<i className="w-4 h-4 group-hover:text-zinc-300" data-lucide="film"></i>
                        Movies
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all group" href="#">
<i className="w-4 h-4 group-hover:text-zinc-300" data-lucide="tv"></i>
                        TV Shows
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all group" href="#">
<i className="w-4 h-4 group-hover:text-zinc-300" data-lucide="list-video"></i>
                        Collections
                    </a>
</nav>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">System</h3>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all group" href="#">
<i className="w-4 h-4 group-hover:text-zinc-300" data-lucide="activity"></i>
                        Activity
                        <span className="ml-auto text-[10px] bg-zinc-800 text-zinc-300 py-0.5 px-1.5 rounded-full">2</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all group" href="#">
<i className="w-4 h-4 group-hover:text-zinc-300" data-lucide="server"></i>
                        Transcoding
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all group" href="#">
<i className="w-4 h-4 group-hover:text-zinc-300" data-lucide="download-cloud"></i>
                        Downloads
                    </a>
</nav>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Admin</h3>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all group" href="#">
<i className="w-4 h-4 group-hover:text-zinc-300" data-lucide="users"></i>
                        Users
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all group" href="#">
<i className="w-4 h-4 group-hover:text-zinc-300" data-lucide="settings"></i>
                        Settings
                    </a>
</nav>
</div>
</div>

<div className="p-4 border-t border-zinc-800/50 bg-zinc-900/20">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-300">Storage</span>
<span className="text-xs text-zinc-500">14.2 TB / 20 TB</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[71%] rounded-full"></div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-20">

<div className="flex-1 max-w-lg">
<div className="relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" data-lucide="search"></i>
<input className="w-full bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-zinc-600" placeholder="Search movies, actors, tags..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<span className="text-[10px] border border-zinc-700 rounded px-1.5 py-0.5 text-zinc-500">⌘K</span>
</div>
</div>
</div>

<div className="flex items-center gap-4 ml-6">

<button className="flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 px-3 py-1.5 rounded text-sm font-medium transition-colors shadow-[0_0_15px_-5px_rgba(255,255,255,0.3)]">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Add Media</span>
</button>
<div className="h-4 w-px bg-zinc-800"></div>
<button className="relative text-zinc-400 hover:text-zinc-100 transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-zinc-950"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-zinc-600 flex items-center justify-center text-xs text-zinc-100 font-medium">
                    AD
                </div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4 flex flex-col justify-between hover:border-zinc-700/50 transition-colors group">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">Total Movies</span>
<i className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-colors" data-lucide="film"></i>
</div>
<div className="text-2xl font-medium text-zinc-100 tracking-tight">2,453</div>
<div className="text-[10px] text-green-500 mt-1 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-up"></i> 12 added this week
                    </div>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4 flex flex-col justify-between hover:border-zinc-700/50 transition-colors group">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">Active Streams</span>
<i className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" data-lucide="play-circle"></i>
</div>
<div className="text-2xl font-medium text-zinc-100 tracking-tight">3</div>
<div className="text-[10px] text-zinc-500 mt-1">Direct Play (2), Transcode (1)</div>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4 flex flex-col justify-between hover:border-zinc-700/50 transition-colors group">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">Network I/O</span>
<i className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-colors" data-lucide="network"></i>
</div>
<div className="text-2xl font-medium text-zinc-100 tracking-tight">45 <span className="text-sm text-zinc-500 font-normal">Mbps</span></div>
<div className="text-[10px] text-zinc-500 mt-1">Peak: 120 Mbps</div>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4 flex flex-col justify-between hover:border-zinc-700/50 transition-colors group">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">Health</span>
<i className="w-4 h-4 text-zinc-600 group-hover:text-red-400 transition-colors" data-lucide="heart-pulse"></i>
</div>
<div className="text-2xl font-medium text-zinc-100 tracking-tight">98%</div>
<div className="text-[10px] text-zinc-500 mt-1">All systems operational</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-zinc-200 tracking-tight">Active Sessions</h2>
<button className="text-xs text-indigo-400 hover:text-indigo-300">View All</button>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg overflow-hidden">
<div className="grid grid-cols-12 gap-4 p-3 border-b border-zinc-800/50 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
<div className="col-span-4">Media</div>
<div className="col-span-3">User</div>
<div className="col-span-2">Quality</div>
<div className="col-span-2">State</div>
<div className="col-span-1 text-right">Action</div>
</div>

<div className="grid grid-cols-12 gap-4 p-3 border-b border-zinc-800/30 items-center hover:bg-zinc-900/50 transition-colors">
<div className="col-span-4 flex items-center gap-3">
<div className="w-8 h-10 bg-zinc-800 rounded overflow-hidden relative flex-shrink-0">
<img alt="Cover" className="w-full h-full object-cover opacity-80" src="https://image.tmdb.org/t/p/w200/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg"/>
</div>
<div>
<div className="text-sm text-zinc-200 font-medium">Aquaman and the Lost Kingdom</div>
<div className="text-xs text-zinc-500">01:24:12 / 02:04:00</div>
</div>
</div>
<div className="col-span-3 flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] flex items-center justify-center border border-blue-500/30">JS</div>
<span className="text-xs text-zinc-300">John Smith</span>
<span className="text-[10px] text-zinc-600 ml-1">Chrome</span>
</div>
<div className="col-span-2">
<div className="flex items-center gap-1.5">
<span className="text-[10px] bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded border border-green-500/20">Direct</span>
<span className="text-[10px] text-zinc-500">4K HDR</span>
</div>
</div>
<div className="col-span-2">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs text-zinc-400">Playing</span>
</div>
</div>
<div className="col-span-1 flex justify-end">
<button className="text-zinc-600 hover:text-red-400 transition-colors"><i className="w-4 h-4" data-lucide="x-circle"></i></button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-3 items-center hover:bg-zinc-900/50 transition-colors">
<div className="col-span-4 flex items-center gap-3">
<div className="w-8 h-10 bg-zinc-800 rounded overflow-hidden relative flex-shrink-0">
<img alt="Cover" className="w-full h-full object-cover opacity-80" src="https://image.tmdb.org/t/p/w200/1E5baAaEse26fej7uHcjOgEE2t2.jpg"/>
</div>
<div>
<div className="text-sm text-zinc-200 font-medium">Fast X</div>
<div className="text-xs text-zinc-500">00:45:00 / 02:21:00</div>
</div>
</div>
<div className="col-span-3 flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] flex items-center justify-center border border-purple-500/30">MK</div>
<span className="text-xs text-zinc-300">Mom &amp; Kids</span>
<span className="text-[10px] text-zinc-600 ml-1">TV</span>
</div>
<div className="col-span-2">
<div className="flex items-center gap-1.5">
<span className="text-[10px] bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/20">Transcode</span>
<span className="text-[10px] text-zinc-500">1080p</span>
</div>
</div>
<div className="col-span-2">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
<span className="text-xs text-zinc-400">Buffering (98%)</span>
</div>
</div>
<div className="col-span-1 flex justify-end">
<button className="text-zinc-600 hover:text-red-400 transition-colors"><i className="w-4 h-4" data-lucide="x-circle"></i></button>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<h2 className="text-sm font-medium text-zinc-200 tracking-tight">Recently Added Movies</h2>
<span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded-full border border-zinc-700">14 New</span>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded transition-colors"><i className="w-4 h-4" data-lucide="list"></i></button>
<button className="p-1.5 text-zinc-100 bg-zinc-800 rounded shadow-sm"><i className="w-4 h-4" data-lucide="grid"></i></button>
<div className="w-px h-4 bg-zinc-800 mx-1"></div>
<select className="bg-transparent text-xs text-zinc-400 border-none outline-none cursor-pointer hover:text-zinc-200">
<option>Date Added</option>
<option>Release Date</option>
<option>Rating</option>
</select>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">

<div className="group relative">
<div className="aspect-[2/3] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800/50 relative shadow-md group-hover:shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)] group-hover:border-indigo-500/30 transition-all duration-300">
<img alt="Dune" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"/>

<div className="absolute top-2 left-2 flex flex-col gap-1">
<span className="bg-black/60 backdrop-blur-sm border border-white/10 text-white text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wide">4K</span>
<span className="bg-indigo-600/90 backdrop-blur-sm text-white text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wide">HDR</span>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
<div className="flex gap-2 mb-3">
<button className="flex-1 bg-white text-black py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1 hover:bg-zinc-200 transition-colors">
<i className="w-3 h-3 fill-black" data-lucide="play"></i> Watch
                                    </button>
<button className="w-8 bg-zinc-800/80 backdrop-blur text-white rounded flex items-center justify-center hover:bg-zinc-700 transition-colors border border-white/10">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</div>
<div className="mt-2.5">
<h3 className="text-sm font-medium text-zinc-200 truncate leading-tight">Dune: Part Two</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">2024</span>
<div className="flex items-center gap-1">
<i className="w-3 h-3 text-yellow-500/80 fill-yellow-500/20" data-lucide="star"></i>
<span className="text-xs text-zinc-400">8.4</span>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="aspect-[2/3] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800/50 relative shadow-md group-hover:shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)] group-hover:border-indigo-500/30 transition-all duration-300">
<img alt="Kung Fu Panda" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg"/>
<div className="absolute top-2 left-2 flex flex-col gap-1">
<span className="bg-black/60 backdrop-blur-sm border border-white/10 text-white text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wide">HD</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
<div className="flex gap-2 mb-3">
<button className="flex-1 bg-white text-black py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1 hover:bg-zinc-200 transition-colors">
<i className="w-3 h-3 fill-black" data-lucide="play"></i> Watch
                                    </button>
<button className="w-8 bg-zinc-800/80 backdrop-blur text-white rounded flex items-center justify-center hover:bg-zinc-700 transition-colors border border-white/10">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</div>
<div className="mt-2.5">
<h3 className="text-sm font-medium text-zinc-200 truncate leading-tight">Kung Fu Panda 4</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">2024</span>
<div className="flex items-center gap-1">
<i className="w-3 h-3 text-yellow-500/80 fill-yellow-500/20" data-lucide="star"></i>
<span className="text-xs text-zinc-400">7.6</span>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="aspect-[2/3] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800/50 relative shadow-md group-hover:shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)] group-hover:border-indigo-500/30 transition-all duration-300">
<img alt="No Way Up" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://image.tmdb.org/t/p/w500/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg"/>
<div className="absolute top-2 left-2 flex flex-col gap-1">
<span className="bg-black/60 backdrop-blur-sm border border-white/10 text-white text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wide">4K</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
<div className="flex gap-2 mb-3">
<button className="flex-1 bg-white text-black py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1 hover:bg-zinc-200 transition-colors">
<i className="w-3 h-3 fill-black" data-lucide="play"></i> Watch
                                    </button>
<button className="w-8 bg-zinc-800/80 backdrop-blur text-white rounded flex items-center justify-center hover:bg-zinc-700 transition-colors border border-white/10">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</div>
<div className="mt-2.5">
<h3 className="text-sm font-medium text-zinc-200 truncate leading-tight">No Way Up</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">2024</span>
<div className="flex items-center gap-1">
<i className="w-3 h-3 text-zinc-600 fill-zinc-600/20" data-lucide="star"></i>
<span className="text-xs text-zinc-400">5.8</span>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="aspect-[2/3] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800/50 relative shadow-md group-hover:shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)] group-hover:border-indigo-500/30 transition-all duration-300">
<img alt="Godzilla" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg"/>
<div className="absolute top-2 left-2 flex flex-col gap-1">
<span className="bg-black/60 backdrop-blur-sm border border-white/10 text-white text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wide">4K</span>
<span className="bg-indigo-600/90 backdrop-blur-sm text-white text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wide">HDR</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
<div className="flex gap-2 mb-3">
<button className="flex-1 bg-white text-black py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1 hover:bg-zinc-200 transition-colors">
<i className="w-3 h-3 fill-black" data-lucide="play"></i> Watch
                                    </button>
<button className="w-8 bg-zinc-800/80 backdrop-blur text-white rounded flex items-center justify-center hover:bg-zinc-700 transition-colors border border-white/10">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</div>
<div className="mt-2.5">
<h3 className="text-sm font-medium text-zinc-200 truncate leading-tight">Godzilla x Kong</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">2024</span>
<div className="flex items-center gap-1">
<i className="w-3 h-3 text-yellow-500/80 fill-yellow-500/20" data-lucide="star"></i>
<span className="text-xs text-zinc-400">7.2</span>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="aspect-[2/3] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800/50 relative shadow-md group-hover:shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)] group-hover:border-indigo-500/30 transition-all duration-300">

<div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center flex-col gap-2">
<i className="w-8 h-8 text-zinc-700" data-lucide="image"></i>
<span className="text-[10px] text-zinc-600">No Poster</span>
</div>
<div className="absolute top-2 left-2 flex flex-col gap-1">
<span className="bg-black/60 backdrop-blur-sm border border-white/10 text-white text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wide">720p</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
<div className="flex gap-2 mb-3">
<button className="flex-1 bg-white text-black py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1 hover:bg-zinc-200 transition-colors">
<i className="w-3 h-3 fill-black" data-lucide="play"></i> Watch
                                    </button>
<button className="w-8 bg-zinc-800/80 backdrop-blur text-white rounded flex items-center justify-center hover:bg-zinc-700 transition-colors border border-white/10">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</div>
<div className="mt-2.5">
<h3 className="text-sm font-medium text-zinc-200 truncate leading-tight">Home Video: Trip</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">2023</span>
<div className="flex items-center gap-1">
<span className="text-xs text-zinc-500">Unrated</span>
</div>
</div>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-[2/3] bg-zinc-900/30 rounded-lg overflow-hidden border border-zinc-800 border-dashed hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-300 flex flex-col items-center justify-center text-zinc-600 hover:text-indigo-400">
<i className="w-10 h-10 mb-2 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="plus"></i>
<span className="text-xs font-medium">Add Movie</span>
</div>
<div className="mt-2.5 opacity-0">
<h3 className="text-sm font-medium">Hidden</h3>
</div>
</div>
</div>
</div>

<div className="mt-12 mb-4 pt-6 border-t border-zinc-800/50 flex items-center justify-between text-[10px] text-zinc-600">
<div>StreamLab Server v4.12.0 • Build 8421a</div>
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> System Normal</span>
<span>Legal</span>
<span>API</span>
</div>
</div>
</div>
</main>


    </>
  );
}
