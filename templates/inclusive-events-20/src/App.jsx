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
      

<header className="flex flex-col overflow-hidden min-h-[600px] w-full h-[75vh] relative justify-between">

<div className="absolute inset-0 z-0">
<img alt="Track and field" className="w-full h-full object-cover brightness-90" src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-b from-black/30 via-transparent to-black/20 absolute top-0 right-0 bottom-0 left-0 scale-100"><h1 className="md:text-9xl leading-none md:mb-0 text-7xl font-semibold text-white tracking-tighter mt-20 mb-6 ml-10">Motorsurf</h1></div>
</div>

<nav className="z-20 flex md:px-10 pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
<div className="flex items-center gap-4">

<iconify-icon className="text-white opacity-90" height="32" icon="simple-icons:dubai" width="32"></iconify-icon>
</div>
<div className="hidden md:flex gap-1 bg-black/40 border-white/10 border rounded-full pt-1 pr-1 pb-1 pl-1 backdrop-blur-md gap-x-1 gap-y-1 items-center">
<a className="px-4 py-1.5 text-sm font-medium text-white bg-white/20 rounded-full" href="#">
            Events
          </a>
<a className="hover:text-white transition-colors text-sm font-medium text-white/80 pt-1.5 pr-4 pb-1.5 pl-4" href="#">
            Divisions
          </a>
<a className="px-4 py-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">
            News
          </a>
<a className="px-4 py-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">
            Organization
          </a>
<div className="w-px h-4 bg-white/20 mx-1"></div>
<button className="px-3 text-white/80 hover:text-white">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</button>
<button className="hover:text-white flex gap-1 text-white/80 pr-3 pl-3 gap-x-1 gap-y-1 items-center">
<iconify-icon icon="solar:globe-linear" width="18"></iconify-icon>
<span className="text-xs">English</span>
</button>
</div>
<div>
<iconify-icon className="text-white opacity-90" icon="simple-icons:governmentofcanada" width="48"></iconify-icon>
</div>
</nav>

<div className="z-20 md:px-10 md:pb-16 flex flex-col md:flex-row w-full pr-6 pb-12 pl-6 relative items-end justify-between">
<h1 className="md:text-9xl leading-none md:mb-0 text-7xl font-semibold text-white tracking-tighter mb-6">
          EVENTS
        </h1>

<div className="bg-white rounded-lg shadow-xl p-1 flex items-center gap-4 max-w-md w-full md:w-auto pr-6">
<div className="bg-neutral-900 text-white text-xs font-semibold px-2 py-1 rounded-sm uppercase tracking-wider">
            Upcoming
          </div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-neutral-900" style={{}}>Motorsurf World Cup 2026</span>
<span className="text-xs text-neutral-500">February 18, 2026</span>
</div>
<div className="ml-auto">
<iconify-icon className="text-neutral-900" icon="solar:moon-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</header>

<div className="md:px-10 overflow-hidden text-white bg-neutral-900 pt-12 pr-6 pb-12 pl-6">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
<div className="flex items-center gap-2 mb-4 md:mb-0 cursor-pointer group">
<iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear"></iconify-icon>
<span className="text-sm font-medium">
            Explore All Upcoming Events &amp; Updates
          </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-video md:aspect-[2/1] overflow-hidden rounded-lg cursor-pointer">
<img alt="Event" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
<div className="bg-orange-600 text-white text-[10px] font-semibold px-2 py-0.5 w-fit rounded mb-2">
              2026
            </div>
<h3 className="text-lg font-medium leading-tight">
              Happening Right Now!
            </h3>
</div>
</div>

<div className="group relative aspect-video md:aspect-[2/1] overflow-hidden rounded-lg cursor-pointer">
<img alt="Event" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex flex-col bg-gradient-to-t from-black/90 to-transparent pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-lg font-medium leading-tight">
              Athletics Grand Prix
            </h3>
</div>
</div>

<div className="group relative aspect-video md:aspect-[2/1] overflow-hidden rounded-lg cursor-pointer">
<img alt="Event" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
<h3 className="text-lg font-medium leading-tight">Ramadan Series</h3>
</div>
</div>
</div>
</div>

<section className="py-20 px-6 md:px-10 max-w-8xl mx-auto">
<div className="flex justify-between items-end mb-8 border-b border-neutral-200 pb-4">
<h2 className="text-4xl font-semibold uppercase tracking-tight">
          Featured
        </h2>
<div className="flex gap-2 items-center text-xs font-medium uppercase tracking-wide">
<span>Events You</span>
<span className="bg-black text-white px-1">Must See</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-lg mb-3 aspect-video">
<img alt="Badminton" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-orange-400/90 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-medium text-lg leading-snug">
                6th Fazza Para Badminton International Championships
              </h3>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-lg mb-3 aspect-video">
<img alt="Activities" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-pink-500/90 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-medium text-lg leading-snug">
                Summer Activities 2025
              </h3>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-lg mb-3 aspect-video">
<img alt="Archery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-500/90 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-medium text-lg leading-snug">
                9th Fazza Para Archery World Ranking Tournament
              </h3>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-lg mb-3 aspect-video">
<img alt="Games" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-yellow-500/90 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-medium text-lg leading-snug">
                Asian Youth Para Games
              </h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 px-6 md:px-10 max-w-8xl mx-auto border-t border-neutral-100">
<p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-6">
        Browse by Category
      </p>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

<div className="bg-[#FFF8E7] rounded-lg p-8 flex flex-col justify-between min-h-[300px]">
<div className="">
<h2 className="text-3xl font-semibold uppercase tracking-tight mb-2">
              Socio-Culture
            </h2>
<p className="text-neutral-600 text-sm leading-relaxed">
              A celebration of traditions, stories, and shared heritage.
            </p>
</div>
<div className="mt-8">
<div className="w-full h-32 bg-[url('https://api.iconify.design/solar:mosque-linear.svg?color=%23d4d4d4')] bg-no-repeat bg-center bg-contain opacity-20 mb-4"></div>
</div>
<a className="flex items-center justify-between w-full bg-white border border-neutral-200 px-4 py-3 rounded text-sm font-medium hover:bg-neutral-50 transition-colors" href="#">
<span>All Sports Events</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-neutral-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
<div className="relative h-48 overflow-hidden">
<img alt="Ramadan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold px-2 py-1 rounded">
                Starts in 41D:18H:24M
              </div>
</div>
<div className="p-4">
<h4 className="font-semibold text-lg mb-1">Ramadan Festival 2026</h4>
<p className="text-xs text-neutral-500 mb-4">
                Cultural &amp; Educational
              </p>
<div className="text-[11px] text-neutral-400 pt-3 border-t border-neutral-100">
                February 18, 2026
              </div>
</div>
</div>

<div className="bg-white border border-neutral-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
<div className="relative h-48 overflow-hidden">
<img alt="Summer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<h4 className="font-semibold text-lg mb-1">Summer Activities 2025</h4>
<p className="text-xs text-neutral-500 mb-4">Theatrical Activities</p>
<div className="text-[11px] text-neutral-400 pt-3 border-t border-neutral-100">
                July 01, 2025
              </div>
</div>
</div>

<div className="bg-white border border-neutral-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
<div className="relative h-48 overflow-hidden">
<img alt="Music" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-4">
<h4 className="font-semibold text-lg mb-1">Cultural Night 2025</h4>
<p className="text-xs text-neutral-500 mb-4">Socio-Culture</p>
<div className="text-[11px] text-neutral-400 pt-3 border-t border-neutral-100">
                March 01, 2025
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 px-6 md:px-10 max-w-8xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

<div className="bg-[#F0F9FF] rounded-lg p-8 flex flex-col justify-between min-h-[300px]">
<div className="">
<h2 className="text-3xl font-semibold uppercase tracking-tight mb-2">
              Sports
            </h2>
<p className="text-neutral-600 text-sm leading-relaxed">
              The spirit of competition captured in every sprint and score.
            </p>
</div>
<div className="mt-8">
<div className="w-full h-32 bg-[url('https://api.iconify.design/solar:cup-first-linear.svg?color=%23bfdbfe')] bg-no-repeat bg-center bg-contain opacity-30 mb-4"></div>
</div>
<a className="flex items-center justify-between w-full bg-white border border-neutral-200 px-4 py-3 rounded text-sm font-medium hover:bg-neutral-50 transition-colors" href="#">
<span>All Cultural Events</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-neutral-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
<div className="relative h-48 overflow-hidden">
<img alt="Sport 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-sky-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                International
              </div>
</div>
<div className="p-4">
<h4 className="font-semibold text-lg mb-1">Asian Youth Para Games</h4>
<p className="text-xs text-neutral-500 mb-4">Paralympics Sports</p>
<div className="text-[11px] text-neutral-400 pt-3 border-t border-neutral-100">
                December 07, 2025
              </div>
</div>
</div>

<div className="bg-white border border-neutral-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
<div className="relative h-48 overflow-hidden">
<img alt="Sport 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<h4 className="font-semibold text-lg mb-1">
                9th Fazza Para Archery World Ranking
              </h4>
<p className="text-xs text-neutral-500 mb-4">Tournament</p>
<div className="text-[11px] text-neutral-400 pt-3 border-t border-neutral-100">
                November 01, 2025
              </div>
</div>
</div>

<div className="bg-white border border-neutral-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
<div className="relative h-48 overflow-hidden">
<img alt="Sport 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-4">
<h4 className="font-semibold text-lg mb-1">
                6th Fazza Para Badminton International
              </h4>
<p className="text-xs text-neutral-500 mb-4">Championships</p>
<div className="text-[11px] text-neutral-400 pt-3 border-t border-neutral-100">
                May 05, 2025
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900 text-white py-20 px-6 md:px-10 overflow-hidden">
<div className="max-w-8xl mx-auto">
<div className="flex flex-col md:flex-row justify-between md:items-end mb-12">
<div className="">
<h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tight leading-none rewind-font">
              REWINDS
            </h2>
<p className="text-neutral-400 text-sm mt-4 max-w-sm">
              Relive the moments! Our rewinds capture the essence of our
              cultural and social events.
            </p>
</div>
<div className="flex gap-4 mt-6 md:mt-0">
<button className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-neutral-800">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-neutral-800">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="col-span-1 md:col-span-2 relative aspect-video rounded-lg overflow-hidden group cursor-pointer border border-white/10">
<img alt="Video" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4">
<button className="bg-white/10 backdrop-blur text-xs font-semibold px-3 py-1.5 rounded uppercase flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
<iconify-icon icon="solar:play-circle-linear" width="16"></iconify-icon>
                Play Video
              </button>
</div>
</div>

<div className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer border border-white/10">
<img alt="Video" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-red-600/50 to-transparent mix-blend-overlay"></div>
<div className="absolute bottom-4 left-4">
<h3 className="font-medium text-lg leading-tight mb-2">
                Our Athletes' Journey to Paris 2024
              </h3>
<button className="text-[10px] uppercase font-bold tracking-widest text-neutral-300 group-hover:text-white">
                Play Video
              </button>
</div>
</div>

<div className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer border border-white/10">
<img alt="Video" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent mix-blend-overlay"></div>
<div className="absolute bottom-4 left-4">
<h3 className="font-medium text-lg leading-tight mb-2">
                Unleashing Potential - Fazza Championships
              </h3>
<button className="text-[10px] uppercase font-bold tracking-widest text-neutral-300 group-hover:text-white">
                Play Video
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 md:px-10 max-w-8xl mx-auto">
<h2 className="text-4xl font-semibold uppercase tracking-tight mb-12 text-center md:text-left">
        All Events
      </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-lg mb-4">
<img alt="E1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase rounded">
              Cultural
            </div>
</div>
<h3 className="text-lg font-medium leading-tight mb-1">
            Ramadan Festival 2026
          </h3>
<p className="text-sm text-neutral-500">
            February 18, 2026 • Cultural &amp; Educational
          </p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-lg mb-4">
<img alt="E2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium leading-tight mb-1">
            Asian Youth Para Games
          </h3>
<p className="text-sm text-neutral-500">
            December 07, 2025 • Paralympics Sports
          </p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-lg mb-4">
<img alt="E3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium leading-tight mb-1">
            9th Fazza Para Archery World Ranking
          </h3>
<p className="text-sm text-neutral-500">
            November 01, 2025 • Paralympics Sports
          </p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-lg mb-4">
<img alt="E4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium leading-tight mb-1">
            Summer Activities 2025
          </h3>
<p className="text-sm text-neutral-500">
            July 01, 2025 • Theatrical Activities
          </p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-lg mb-4">
<img alt="E5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="text-lg font-medium leading-tight mb-1">
            6th Fazza Para Badminton International
          </h3>
<p className="text-sm text-neutral-500">
            May 05, 2025 • Paralympics Sports
          </p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-lg mb-4">
<img alt="E6" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-lg font-medium leading-tight mb-1">
            Ramadan Festival 2025
          </h3>
<p className="text-sm text-neutral-500">March 01, 2025 • Socio-Culture</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-lg mb-4">
<img alt="E7" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-white/20 flex items-center justify-center">
<div className="bg-white px-4 py-2 rounded text-sm font-semibold shadow-sm">
                Arabic
              </div>
</div>
</div>
<h3 className="text-lg font-medium leading-tight mb-1">
            The 2025 Holy Quran Competition
          </h3>
<p className="text-sm text-neutral-500">March 01, 2025 • Socio-Culture</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-lg mb-4">
<img alt="E8" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium leading-tight mb-1">
            16th Fazza International Para Athletics
          </h3>
<p className="text-sm text-neutral-500">
            February 10, 2025 • Paralympics Sports
          </p>
</div>
</div>
<div className="flex justify-center mt-12">
<button className="bg-white border border-neutral-300 text-neutral-900 px-6 py-2.5 rounded text-sm font-medium hover:bg-neutral-50 flex items-center gap-2">
          Load More Events
          <iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
</button>
</div>
</section>

<section className="py-24 px-6 md:px-10 max-w-8xl mx-auto bg-stone-50">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/3">
<h2 className="text-6xl font-bold uppercase leading-none tracking-tighter mb-4">
            Thousands Of
            <span className="inline-block relative">
<img alt="icon" className="w-12 h-8 object-cover rounded inline align-middle mx-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
              People
            </span>
            Are
            <span className="text-neutral-300">Living</span>
            Their
            <span className="inline-block">
<img alt="icon" className="w-12 h-12 object-cover rounded-full inline align-middle mx-1" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</span>
            Dream.
          </h2>
<p className="text-neutral-500 text-sm mt-6 mb-8 max-w-xs">
            Chase what's yours, become someone proud.
          </p>
<a className="inline-flex items-center justify-between w-full max-w-[200px] border-b border-neutral-900 pb-2 text-sm font-semibold uppercase tracking-wide hover:opacity-70" href="#">
            Join The Club
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px]">
<div className="space-y-4 pt-12">
<div className="aspect-square bg-white p-2 rounded shadow-sm rotate-2">
<img className="w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="aspect-square bg-white p-2 rounded shadow-sm -rotate-3">
<img className="w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4">
<div className="aspect-square bg-white p-2 rounded shadow-sm rotate-1">
<img className="w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-white p-2 rounded shadow-sm -rotate-2 scale-90">
<img className="w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4 pt-8">
<div className="aspect-square bg-white p-2 rounded shadow-sm -rotate-1">
<img className="w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-white p-2 rounded shadow-sm rotate-3">
<img className="w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
<div className="space-y-4 pt-20">
<div className="aspect-square bg-white p-2 rounded shadow-sm rotate-6">
<img className="w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[500px] overflow-hidden">
<img alt="Volunteers" className="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1577253313708-cab167d2c474?q=80&amp;w=2038&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/90"></div>
<div className="absolute bottom-10 right-6 md:right-10 w-full max-w-sm">
<div className="bg-white p-8 rounded-lg shadow-2xl">
<div className="mb-4">
<iconify-icon className="text-neutral-900" icon="simple-icons:hands" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold uppercase tracking-tight leading-none mb-2">
            Be The Difference In Someone's Story
          </h3>
<p className="text-neutral-500 text-xs mb-6">
            Join our community of volunteers and make a meaningful impact
          </p>
<a className="flex items-center justify-between text-xs font-bold uppercase border-t border-neutral-100 pt-4 hover:text-orange-600 transition-colors" href="#">
            Join Hands With DCD
            <iconify-icon className="bg-black text-white p-1 rounded-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-neutral-950 text-white pt-20 pb-10 px-6 md:px-10 border-t border-neutral-900">
<div className="max-w-8xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start mb-20 border-b border-white/10 pb-16">
<div className="max-w-md w-full mb-10 md:mb-0">
<h2 className="text-3xl font-semibold uppercase tracking-tight mb-2">
              Subscribe
            </h2>
<p className="text-neutral-500 text-sm mb-8">
              Get Updates On Inspiring Journeys
            </p>
<div className="relative">
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-sm focus:outline-none focus:border-white transition-colors" placeholder="Type your email" type="email"/>
<button className="absolute right-0 bottom-2 text-xs font-bold uppercase text-neutral-400 hover:text-white">
                Submit
                <iconify-icon className="inline align-middle" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-16 text-xs text-neutral-400">
<div className="flex flex-col gap-3">
<a className="hover:text-white transition-colors" href="#">
                About DCD
              </a>
<a className="hover:text-white transition-colors" href="#">
                Sports Club
              </a>
<a className="hover:text-white transition-colors" href="#">
                Media Center
              </a>
</div>
<div className="flex flex-col gap-3">
<a className="hover:text-white transition-colors" href="#">Contact</a>
<a className="hover:text-white transition-colors" href="#">
                Socio-Culture
              </a>
<a className="hover:text-white transition-colors" href="#">
                Terms And Condition
              </a>
</div>
<div className="flex flex-col gap-3">
<a className="hover:text-white transition-colors" href="#">
                Executive Board
              </a>
<a className="hover:text-white transition-colors" href="#">Events</a>
</div>
<div className="flex flex-col gap-3 ml-8">
<span className="text-neutral-600 mb-2">FOLLOW US</span>
<div className="flex gap-4">
<a className="hover:text-white" href="#">
<iconify-icon icon="simple-icons:x"></iconify-icon>
</a>
<a className="hover:text-white" href="#">
<iconify-icon icon="simple-icons:facebook"></iconify-icon>
</a>
<a className="hover:text-white" href="#">
<iconify-icon icon="simple-icons:instagram"></iconify-icon>
</a>
<a className="hover:text-white" href="#">
<iconify-icon icon="simple-icons:youtube"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600">
<p>
            Dubai Club for People Of Determination © 2025. All Rights Reserved.
          </p>
<div className="flex gap-6 mt-4 md:mt-0 opacity-50 grayscale hover:grayscale-0 transition-all">
<iconify-icon height="36" icon="simple-icons:dubai" width="96"></iconify-icon>
<iconify-icon height="36" icon="simple-icons:governmentofcanada" width="96"></iconify-icon>
<iconify-icon height="36" icon="simple-icons:unicef" width="96"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
