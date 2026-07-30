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



    // Initialize Lucide icons
    lucide.createIcons();

    // Loading screen
    setTimeout(() => {
      document.getElementById('loading-screen').style.opacity = '0';
      setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
      }, 500);
    }, 2000);

    // Search functionality
    function openSearch() {
      const overlay = document.getElementById('search-overlay');
      overlay.classList.remove('opacity-0', 'invisible');
      overlay.classList.add('opacity-100', 'visible');
      document.getElementById('search-input').focus();
    }

    function closeSearch() {
      const overlay = document.getElementById('search-overlay');
      overlay.classList.add('opacity-0', 'invisible');
      overlay.classList.remove('opacity-100', 'visible');
    }

    // Profile menu toggle
    function toggleProfileMenu() {
      const menu = document.getElementById('profile-menu');
      if (menu.classList.contains('opacity-0')) {
        menu.classList.remove('opacity-0', 'invisible');
        menu.classList.add('opacity-100', 'visible');
      } else {
        menu.classList.add('opacity-0', 'invisible');
        menu.classList.remove('opacity-100', 'visible');
      }
    }

    // Placeholder functions
    function playVideo() {
      alert('Starting Midnight Chronicles...');
    }

    function addToWatchlist() {
      alert('Added to your watchlist!');
    }

    function showDetails(title) {
      alert(`Opening details for: ${title}`);
    }

    // Close profile menu when clicking outside
    document.addEventListener('click', (e) => {
      const menu = document.getElementById('profile-menu');
      const button = e.target.closest('button[onclick="toggleProfileMenu()"]');
      if (!button && !menu.contains(e.target)) {
        menu.classList.add('opacity-0', 'invisible');
        menu.classList.remove('opacity-100', 'visible');
      }
    });

    // Search on Enter key
    document.getElementById('search-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = e.target.value;
        if (query.trim()) {
          document.getElementById('search-results').innerHTML = `
            <div class="text-center py-8">
              <p class="text-slate-400">Searching for "${query}"...</p>
            </div>
          `;
        }
      }
    });

    // Close search on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSearch();
      }
    });
  
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
      

<div className="max-w-7xl mx-auto">
<div className="overflow-hidden animate-fade-in-up bg-white border-gray-300/50 border rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{animationDelay: `0.1s`, animationFillMode: `both`}}>

<div className="flex bg-gradient-to-b from-gray-100 to-gray-200 border-gray-300/50 border-b pt-3 pr-5 pb-3 pl-5 items-center justify-between">
<div className="flex items-center space-x-3">

<div className="flex space-x-2">
<button className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors shadow-sm"></button>
<button className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors shadow-sm"></button>
<button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors shadow-sm"></button>
</div>
</div>

<div className="absolute left-1/2 transform -translate-x-1/2">
<h1 className="text-sm font-medium text-gray-700 tracking-tight">Netchill</h1>
</div>

<div className="flex items-center space-x-2">
<button className="p-1 hover:bg-gray-300/50 rounded transition-colors">
</button>
</div>
</div>

<div className="min-h-[800px] relative text-slate-100 bg-gradient-to-br from-[#14151a] via-[#191b22] to-[#101217]">

<div className="absolute inset-0 bg-gradient-to-br from-[#14151a] via-[#191b22] to-[#101217] z-50 flex items-center justify-center" id="loading-screen" style={{opacity: `0`, display: `none`}}>
<div className="text-center">
<div className="animate-pulse text-4xl font-bold tracking-tight bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent mb-4">NETCHILL</div>
<div className="w-12 h-12 border-3 border-red-600/30 border-t-red-600 rounded-full animate-spin mx-auto"></div>
</div>
</div>

<div className="absolute inset-0 bg-black/80 backdrop-blur-xl z-40 opacity-0 invisible transition-all duration-300" id="search-overlay">
<div className="container mx-auto px-6 py-8">
<div className="max-w-2xl mx-auto">
<div className="flex items-center space-x-4 bg-white/10 border border-white/20 rounded-2xl p-4 mb-8">
<svg className="lucide lucide-search w-6 h-6 text-slate-300" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="flex-1 bg-transparent text-lg placeholder-slate-400 border-none outline-none" id="search-input" placeholder="Search dramas, documentaries, and more..." type="text" />
<button className="p-2 hover:bg-slate-700/50 rounded-full transition" onClick={(e) => { closeSearch() }}>
<svg className="lucide lucide-x w-5 h-5 text-slate-300" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="space-y-4" id="search-results"></div>
</div>
</div>
</div>
<div className="container sm:px-6 lg:py-12 h-full mr-auto ml-auto pt-0 pr-3 pb-0 pl-3">
<div className="lg:grid lg:grid-cols-12 lg:gap-10 h-full">

<div className="lg:col-span-8 space-y-10">

<header className="flex items-center justify-between bg-white/5 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-lg border border-white/10 animate-fade-in-up" style={{animationDelay: `0.2s`, animationFillMode: `both`}}>
<div className="flex items-center space-x-8">
<span className="text-2xl tracking-tight font-extrabold bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow">NETCHILL</span>
<nav className="hidden sm:flex space-x-6 text-sm font-medium">
<a className="nav-link active text-slate-200 hover:text-red-500 transition-colors flex items-center space-x-1 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" href="#"><span>Trending</span><span>🔥</span></a>
<a className="nav-link text-slate-400 hover:text-red-500 transition-colors px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" href="#">Originals</a>
<a className="nav-link text-slate-400 hover:text-red-500 transition-colors px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" href="#">Dramas</a>
<a className="nav-link text-slate-400 hover:text-red-500 transition-colors px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" href="#">Docs</a>
</nav>
</div>
<div className="flex items-center space-x-3">
<button className="p-2 hover:bg-slate-700/60 transition rounded-full outline-none focus:ring-2 focus:ring-red-500 tooltip" data-tooltip="Search" onClick={(e) => { openSearch() }}>
<svg className="lucide lucide-search w-5 h-5 text-slate-300" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="p-2 hover:bg-slate-700/60 transition rounded-full outline-none focus:ring-2 focus:ring-red-500 relative tooltip" data-tooltip="Notifications">
<svg className="lucide lucide-bell w-5 h-5 text-slate-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
</button>
</div>
</header><div className="animate-fade-in-up mt-4 pr-5 pl-5" style={{animationDelay: `0.25s`, animationFillMode: `both`}}>
<div className="relative max-w-md mx-auto">
<svg className="lucide lucide-search absolute w-5 h-5 top-3 left-3 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
</div>
</div>

<section className="relative rounded-3xl overflow-hidden shadow-2xl group animate-fade-in-blur" style={{animationDelay: `0.3s`, animationFillMode: `both`}}>
<img alt="Midnight Chronicles" className="w-full h-72 md:h-96 object-cover scale-105 transition-all duration-500 group-hover:scale-110" src="/assets/131bb8ac-5b7c-4df7-9a6c-a9b982eb18a0_1600w.jpg" />
<div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/55 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-between p-7">
<div className="flex items-center space-x-3">
<span className="text-xs font-semibold text-white/90 bg-white/10 px-3 py-1 rounded-lg ring-1 ring-white/15 shadow">Limited Series</span>
<div className="flex items-center space-x-1">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium text-white/90">9.1</span>
</div>
</div>
<div className="">
<h1 className="md:text-5xl max-w-sm leading-tight text-4xl font-bold text-white tracking-tight font-bricolage mb-3 drop-shadow">Midnight Chronicles</h1>
<p className="text-slate-200 text-sm max-w-md mb-5 opacity-90">A gripping psychological thriller that follows detective Sarah Kane as she unravels mysteries in the city's darkest corners.</p>
<div className="flex items-center space-x-3">
<button className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-red-500 animate-fade-in-up" onClick={(e) => { playVideo() }} style={{animationDelay: `0.4s`}}>
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span>Start watching</span>
</button>
<button className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur text-white text-sm font-semibold px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white/50" onClick={(e) => { addToWatchlist() }}>
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>Add to List</span>
</button>
</div>
</div>
</div>
</section>

<section className="space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-2xl tracking-tight font-semibold animate-fade-in-up" style={{animationDelay: `0.35s`, animationFillMode: `both`}}>Popular on Netchill</h2>
<button className="text-sm text-red-500 hover:text-red-400 transition-colors font-medium">View all</button>
</div>
<div className="flex space-x-6 overflow-x-auto pb-2 hide-scrollbar animate-fade-in-up" style={{animationDelay: `0.4s`, animationFillMode: `both`}}>

<div className="flex space-x-6 min-w-max items-stretch">

<div className="card flex-shrink-0 w-44 bg-gradient-to-br from-slate-800/90 via-slate-800/90 to-slate-800/95 border border-white/10 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group outline-none focus:ring-2 focus:ring-red-500 animate-fade-in-up flex flex-col" onClick={(e) => { showDetails('Digital Divide') }} style={{animationDelay: `0.45s`}}>
<div className="relative overflow-hidden rounded-t-2xl">
<img alt="Digital Divide" className="w-full h-40 object-cover group-hover:brightness-105 transition" src="/assets/00c49c51-b2f7-421e-bba1-ff3df1af734f_1600w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<button className="absolute top-2 right-2 p-1.5 bg-black/50 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70">
<svg className="lucide lucide-play w-4 h-4 text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="p-3 space-y-1 flex flex-col flex-grow">
<div className="flex items-center space-x-2 text-xs">
<span className="bg-yellow-400/90 text-slate-900 px-2 py-0.5 rounded font-semibold drop-shadow">8.7</span>
<span className="text-slate-400">3 Seasons</span>
</div>
<p className="text-[15px] font-semibold truncate mt-0.5">Digital Divide</p>
<p className="text-xs text-slate-400 line-clamp-2 flex-grow">Tech thriller series</p>
</div>
</div>

<div className="card flex-shrink-0 w-44 bg-gradient-to-br from-slate-800/90 via-slate-800/90 to-slate-800/95 border border-white/10 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group outline-none focus:ring-2 focus:ring-red-500 animate-fade-in-up flex flex-col" onClick={(e) => { showDetails('Ocean Deep') }} style={{animationDelay: `0.5s`}}>
<div className="relative overflow-hidden rounded-t-2xl">
<img alt="Ocean Deep" className="w-full h-40 object-cover group-hover:brightness-105 transition" src="/assets/48933b0d-af9c-47d1-bdc1-e0133dfc4f97_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<button className="absolute top-2 right-2 p-1.5 bg-black/50 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70">
<svg className="lucide lucide-play w-4 h-4 text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="p-3 space-y-1 flex flex-col flex-grow">
<div className="flex items-center space-x-2 text-xs">
<span className="bg-yellow-400/90 text-slate-900 px-2 py-0.5 rounded font-semibold drop-shadow">9.2</span>
<span className="text-slate-400">Documentary</span>
</div>
<p className="text-[15px] font-semibold truncate mt-0.5">Ocean Deep</p>
<p className="text-xs text-slate-400 line-clamp-2 flex-grow">Nature documentary</p>
</div>
</div>

<div className="card flex-shrink-0 w-44 bg-gradient-to-br from-slate-800/90 via-slate-800/90 to-slate-800/95 border border-white/10 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group outline-none focus:ring-2 focus:ring-red-500 animate-fade-in-up flex flex-col" onClick={(e) => { showDetails('City Lights') }} style={{animationDelay: `0.55s`}}>
<div className="relative overflow-hidden rounded-t-2xl">
<img alt="City Lights" className="w-full h-40 object-cover group-hover:brightness-105 transition" src="/assets/b364d321-6ae7-4010-8a05-37d12694108e_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<button className="absolute top-2 right-2 p-1.5 bg-black/50 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70">
<svg className="lucide lucide-play w-4 h-4 text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="p-3 space-y-1 flex flex-col flex-grow">
<div className="flex items-center space-x-2 text-xs">
<span className="bg-yellow-400/90 text-slate-900 px-2 py-0.5 rounded font-semibold drop-shadow">8.9</span>
<span className="text-slate-400">2 Seasons</span>
</div>
<p className="text-[15px] font-semibold truncate mt-0.5">City Lights</p>
<p className="text-xs text-slate-400 line-clamp-2 flex-grow">Urban drama</p>
</div>
</div>

<div className="card flex-shrink-0 w-44 bg-gradient-to-br from-slate-800/90 via-slate-800/90 to-slate-800/95 border border-white/10 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group outline-none focus:ring-2 focus:ring-red-500 animate-fade-in-up flex flex-col" onClick={(e) => { showDetails('Echoes') }} style={{animationDelay: `0.6s`}}>
<div className="relative overflow-hidden rounded-t-2xl">
<img alt="Echoes" className="w-full h-40 object-cover group-hover:brightness-105 transition" src="/assets/24ec0171-4413-4899-8c3e-a7e758f3cbfd_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<button className="absolute top-2 right-2 p-1.5 bg-black/50 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70">
<svg className="lucide lucide-play w-4 h-4 text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="p-3 space-y-1 flex flex-col flex-grow">
<div className="flex items-center space-x-2 text-xs">
<span className="bg-yellow-400/90 text-slate-900 px-2 py-0.5 rounded font-semibold drop-shadow">8.1</span>
<span className="text-slate-400">4 Episodes</span>
</div>
<p className="text-[15px] font-semibold truncate mt-0.5">Echoes</p>
<p className="text-xs text-slate-400 line-clamp-2 flex-grow">Mystery thriller</p>
</div>
</div>
</div>
</div>
</section>
</div>

<aside className="lg:col-span-4 mt-12 lg:mt-0 h-full animate-fade-in-up" style={{animationDelay: `.3s`, animationFillMode: `both`}}>
<div className="relative overflow-hidden h-full flex flex-col bg-gradient-to-br from-white/5 via-slate-800/90 to-slate-900/80 border-white/10 border rounded-3xl pr-4 pl-4 shadow-2xl space-y-8">
<div className="absolute inset-0 pointer-events-none" style={{background: `radial-gradient(ellipse at 80% 0%,rgba(239,68,68,0.07) 0%,transparent 70%)`}}></div>

<div className="flex items-center justify-between border-b border-white/10 pb-5 flex-shrink-0">
<div className="flex items-center space-x-3">
<div className="relative">
<img alt="Profile" className="w-11 h-11 rounded-full object-cover border-2 border-red-600/30 shadow" src="/assets/477765ae-46ca-4701-afb5-5686f2f20c7a_320w.jpg" />
<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-slate-800 rounded-full"></div>
</div>
<div className="">
<p className="font-semibold tracking-tight">Emma Watson</p>
<p className="text-xs text-slate-400">Premium Member</p>
</div>
</div>
<div className="relative">
<button className="p-2 hover:bg-slate-700/50 rounded-full transition focus:outline-none focus:ring-2 focus:ring-red-500" onClick={(e) => { toggleProfileMenu() }}>
<svg className="lucide lucide-more-vertical w-4 h-4 text-slate-300" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
<div className="absolute right-0 top-full mt-2 w-48 bg-slate-800/95 backdrop-blur border border-white/10 rounded-xl shadow-lg py-2 opacity-0 invisible transition-all duration-200 z-10" id="profile-menu">
<a className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors" href="#">Profile Settings</a>
<a className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors" href="#">Support</a>
<a className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors" href="#">Log Out</a>
</div>
</div>
</div>

<div className="space-y-3 border-b border-white/10 pb-5 flex-shrink-0">
<div className="flex items-center justify-between">
<h3 className="font-semibold text-base">Latest episode</h3>
<div className="flex space-x-2">
<button className="p-1 hover:bg-slate-700/70 rounded transition focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50" disabled>
<svg className="lucide lucide-chevron-left w-4 h-4 text-slate-300" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="p-1 hover:bg-slate-700/70 rounded transition focus:outline-none focus:ring-2 focus:ring-red-500">
<svg className="lucide lucide-chevron-right w-4 h-4 text-slate-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="flex hover:border-white/20 transition-all cursor-pointer group bg-gradient-to-r from-slate-800/80 via-slate-900/80 to-slate-800/90 border-white/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow space-x-3 items-center">
<div className="relative">
<img alt="Shadow Valley" className="w-20 h-12 rounded object-cover" src="/assets/21b7ee4f-dfd0-45f5-a64c-b8a7761bc2b9_320w.jpg" />
<div className="absolute inset-0 bg-black/20 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<svg className="lucide lucide-play w-5 h-5 text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="flex-1">
<p className="text-sm font-semibold">Shadow Valley</p>
<p className="text-xs text-slate-400">Episode 4</p>
<p className="text-xs text-slate-500 mt-0.5">23m left</p>
</div>
<span className="bg-blue-600/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow animate-pulse">NEW</span>
</div><div className="flex hover:border-white/20 transition-all cursor-pointer group bg-gradient-to-r from-slate-800/80 via-slate-900/80 to-slate-800/90 border-white/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow space-x-3 items-center">
<div className="relative">
<img alt="Shadow Valley" className="w-20 h-12 rounded object-cover" src="/assets/5d062fec-0a26-47e3-857c-f69554167460_320w.jpg" />
<div className="absolute inset-0 bg-black/20 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<svg className="lucide lucide-play w-5 h-5 text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="flex-1">
<p className="text-sm font-semibold">Shadow Valley</p>
<p className="text-xs text-slate-400">Episode 4</p>
<p className="text-xs text-slate-500 mt-0.5">23m left</p>
</div>
<span className="bg-blue-600/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow animate-pulse">NEW</span>
</div>
</div>

<div className="space-y-3 border-b border-white/10 pb-5 flex-shrink-0">
<div className="flex items-center justify-between">
<h3 className="font-semibold text-base">Keep watching</h3>
<button className="text-xs text-red-500 hover:text-red-400 transition-colors">Clear</button>
</div>
<div className="flex items-center space-x-3 bg-gradient-to-r from-slate-800/80 via-slate-900/80 to-slate-800/90 rounded-2xl p-3 shadow border border-white/10 hover:border-white/20 transition-all cursor-pointer group">
<div className="relative">
<img alt="Midnight Chronicles" className="w-20 h-12 rounded object-cover" src="/assets/72c0a942-8db1-4109-b875-9ccb3cee3299_320w.jpg" />
<div className="absolute inset-0 bg-black/20 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<svg className="lucide lucide-play w-5 h-5 text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="flex-1">
<p className="text-sm font-semibold">Midnight Chronicles</p>
<p className="text-xs text-slate-400">Episode 2</p>
<div className="h-1.5 bg-slate-700 rounded mt-2 overflow-hidden">
<div className="h-1.5 bg-gradient-to-r from-red-600 to-red-500 rounded transition-all duration-1000" style={{width: `65%`}}></div>
</div>
</div>
</div>
</div>

<div className="space-y-3 flex-grow">
<div className="flex items-center justify-between">
<h3 className="font-semibold text-base">Community</h3>
<span className="text-xs text-slate-400">5 online</span>
</div>
<div className="space-y-3">
<div className="flex items-center space-x-3 bg-gradient-to-r from-slate-800/80 via-slate-900/80 to-slate-800/90 rounded-2xl p-3 shadow border border-white/10 hover:border-white/20 transition-all cursor-pointer group">
<div className="relative">
<img alt="Digital Divide" className="w-20 h-12 rounded object-cover" src="/assets/f83949d8-67f4-44e7-bd91-b1f427402651_320w.jpg" />
<div className="absolute -top-1 -right-1 flex -space-x-1">
<img alt="Friend" className="w-4 h-4 rounded-full border border-slate-800 object-cover" src="/assets/477765ae-46ca-4701-afb5-5686f2f20c7a_320w.jpg" />
<img alt="Friend" className="w-4 h-4 rounded-full border border-slate-800" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
</div>
<div className="flex-1">
<p className="text-sm font-semibold">Digital Divide</p>
<p className="text-xs text-slate-400">8.7 • 3 Seasons</p>
<p className="text-xs text-green-400 mt-0.5">Alex and Jamie watching</p>
</div>
</div>
<div className="bg-gradient-to-r from-slate-800/60 via-slate-900/60 to-slate-800/60 rounded-2xl p-4 border border-white/5">
<h4 className="text-sm font-semibold mb-3">Trending discussions</h4>
<div className="space-y-3">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
<p className="text-xs text-slate-300">New theory about Episode 6 ending</p>
</div>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
<p className="text-xs text-slate-300">Season finale predictions</p>
</div>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<p className="text-xs text-slate-300">Behind the scenes interviews</p>
</div>
</div>
<button className="text-xs text-red-500 hover:text-red-400 transition-colors mt-3 font-medium">Join discussion</button>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</div>
</div>




    </>
  );
}
