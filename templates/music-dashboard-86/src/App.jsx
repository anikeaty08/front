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
      
<div className="flex flex-1 overflow-hidden relative">

<aside className="hidden md:flex w-64 flex-col bg-[#0f0f11] border-r border-white/5 pt-8 pb-24 px-6 overflow-y-auto z-10">

<div className="mb-8">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4 pl-3">App</h3>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-3 rounded-xl bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.3)] text-white group transition-all" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layout-dashboard"></i>
<span className="text-base font-medium">Explore</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-xl hover:text-white transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5] group-hover:stroke-zinc-100" data-lucide="megaphone"></i>
<span className="text-base font-medium">Suggest</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-xl hover:text-white transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5] group-hover:stroke-zinc-100" data-lucide="trending-up"></i>
<span className="text-base font-medium">Top Charts</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-xl hover:text-white transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5] group-hover:stroke-zinc-100" data-lucide="music"></i>
<span className="text-base font-medium">New stuff</span>
</a>
</nav>
</div>

<div className="mb-auto">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4 pl-3">Personal</h3>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-3 rounded-xl hover:text-white transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5] group-hover:stroke-zinc-100" data-lucide="heart"></i>
<span className="text-base font-medium">Favorite</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-xl hover:text-white transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5] group-hover:stroke-zinc-100" data-lucide="disc"></i>
<span className="text-base font-medium">Albums</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-xl hover:text-white transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5] group-hover:stroke-zinc-100" data-lucide="list-music"></i>
<span className="text-base font-medium">Playlists</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-xl hover:text-white transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5] group-hover:stroke-zinc-100" data-lucide="library"></i>
<span className="text-base font-medium">Genres</span>
</a>
</nav>
</div>

<button className="flex items-center gap-3 px-3 py-3 text-zinc-400 hover:text-white transition-colors mt-6">
<div className="w-5 h-5 flex items-center justify-center border border-current rounded-md border-dashed">
<i className="w-3 h-3 stroke-[1.5]" data-lucide="plus"></i>
</div>
<span className="text-base font-medium">Create playlist</span>
</button>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-[#121214] relative">

<header className="flex items-center justify-between px-8 py-6 sticky top-0 bg-[#121214]/95 backdrop-blur-md z-20">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-zinc-500">
<button className="hover:text-white transition-colors"><i className="w-6 h-6 stroke-[1.5]" data-lucide="chevron-left"></i></button>
<button className="hover:text-white transition-colors"><i className="w-6 h-6 stroke-[1.5]" data-lucide="chevron-right"></i></button>
</div>
<div className="relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-white transition-colors" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-sm text-white placeholder-zinc-500 pl-10 pr-4 py-2 w-64 focus:ring-0" placeholder="Search music" type="text"/>
</div>
</div>
<div className="flex items-center gap-6 text-zinc-400">
<button className="text-sm font-medium hover:text-white transition-colors">Login</button>
<button className="hover:text-white transition-colors"><i className="w-5 h-5 stroke-[1.5]" data-lucide="more-vertical"></i></button>
</div>
</header>

<div className="flex-1 overflow-y-auto px-8 pb-32">

<section className="mb-10">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl text-white font-medium tracking-tight">Explore new</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

<div className="group cursor-pointer">
<div className="aspect-square rounded-3xl overflow-hidden mb-3 relative">
<img alt="Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<h4 className="text-white text-base font-medium leading-tight">Zak Abel</h4>
<p className="text-zinc-500 text-sm mt-1">Love Song</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-3xl overflow-hidden mb-3 relative">
<img alt="Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="text-white text-base font-medium leading-tight">Kendrik Lamar</h4>
<p className="text-zinc-500 text-sm mt-1">Kombucha Burps</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-3xl overflow-hidden mb-3 relative">
<img alt="Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="text-white text-base font-medium leading-tight">Avicii ft. Derulo</h4>
<p className="text-zinc-500 text-sm mt-1">On The Regular</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-3xl overflow-hidden mb-3 relative">
<img alt="Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="text-white text-base font-medium leading-tight">Kaytranada</h4>
<p className="text-zinc-500 text-sm mt-1">El Sambroso</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-3xl overflow-hidden mb-3 relative">
<img alt="Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="text-white text-base font-medium leading-tight">ESTA</h4>
<p className="text-zinc-500 text-sm mt-1">Mask Off Soul Flip</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-3xl overflow-hidden mb-3 relative">
<img alt="Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="text-white text-base font-medium leading-tight">Dragonette</h4>
<p className="text-zinc-500 text-sm mt-1">Tokyo Nights</p>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

<div className="lg:col-span-2">
<h2 className="text-2xl text-white font-medium tracking-tight mb-6">Popular</h2>
<div className="space-y-2">

<div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<span className="text-zinc-500 text-sm font-medium w-6 text-center">1</span>
<div className="flex-1">
<h5 className="text-white text-base font-normal">Love Song</h5>
</div>
<span className="text-zinc-500 text-sm">3:23</span>
<button className="p-2 text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<span className="text-zinc-500 text-sm font-medium w-6 text-center">2</span>
<div className="flex-1">
<h5 className="text-white text-base font-normal">Kombucha Burps</h5>
</div>
<span className="text-zinc-500 text-sm">5:36</span>
<button className="p-2 text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<span className="text-zinc-500 text-sm font-medium w-6 text-center">3</span>
<div className="flex-1">
<h5 className="text-white text-base font-normal">On The Regular</h5>
</div>
<span className="text-zinc-500 text-sm">2:39</span>
<button className="p-2 text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<span className="text-zinc-500 text-sm font-medium w-6 text-center">4</span>
<div className="flex-1">
<h5 className="text-white text-base font-normal">El Sambroso</h5>
</div>
<span className="text-zinc-500 text-sm">3:26</span>
<button className="p-2 text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<span className="text-zinc-500 text-sm font-medium w-6 text-center">5</span>
<div className="flex-1">
<h5 className="text-white text-base font-normal">Mask Off Soul Flip</h5>
</div>
<span className="text-zinc-500 text-sm">6:29</span>
<button className="p-2 text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</div>

<div className="lg:col-span-1">
<h2 className="text-2xl text-white font-medium tracking-tight mb-6">Mood</h2>
<div className="grid grid-cols-2 gap-4">
<div className="aspect-[4/3] bg-zinc-800/30 hover:bg-zinc-800/50 transition-colors rounded-2xl flex items-center justify-center p-4 cursor-pointer text-center group">
<span className="text-white/90 text-sm font-medium group-hover:scale-105 transition-transform">Ghetto Rap</span>
</div>
<div className="aspect-[4/3] bg-zinc-800/30 hover:bg-zinc-800/50 transition-colors rounded-2xl flex items-center justify-center p-4 cursor-pointer text-center group">
<span className="text-white/90 text-sm font-medium group-hover:scale-105 transition-transform">Twerk Baby</span>
</div>
<div className="aspect-[4/3] bg-zinc-800/30 hover:bg-zinc-800/50 transition-colors rounded-2xl flex items-center justify-center p-4 cursor-pointer text-center group">
<span className="text-white/90 text-sm font-medium group-hover:scale-105 transition-transform">Party Breaker</span>
</div>
<div className="aspect-[4/3] bg-zinc-800/30 hover:bg-zinc-800/50 transition-colors rounded-2xl flex items-center justify-center p-4 cursor-pointer text-center group">
<span className="text-white/90 text-sm font-medium group-hover:scale-105 transition-transform">Valentine Vibe</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="fixed bottom-0 left-0 right-0 bg-[#0f0f11] h-24 border-t border-white/5 flex items-center px-8 z-30 select-none">

<div className="flex items-center gap-6 w-64 shrink-0">
<button className="text-zinc-400 hover:text-white transition-colors">
<i className="w-6 h-6 fill-current stroke-none" data-lucide="skip-back"></i>
</button>
<button className="text-white hover:scale-105 transition-transform">
<i className="w-6 h-6 fill-white stroke-none" data-lucide="play"></i>
</button>
<button className="text-zinc-400 hover:text-white transition-colors">
<i className="w-6 h-6 fill-current stroke-none" data-lucide="skip-forward"></i>
</button>
<div className="h-6 w-px bg-white/10 mx-2"></div>
<button className="text-zinc-400 hover:text-white transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="volume-2"></i>
</button>
</div>

<div className="flex items-center gap-4 shrink-0 mr-12">
<img className="w-12 h-12 rounded-lg object-cover shadow-lg shadow-purple-900/20" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div>
<h4 className="text-white text-base font-medium tracking-tight">Drank In My Cup</h4>
<p className="text-zinc-500 text-xs">Kirko Bangz</p>
</div>
</div>

<div className="flex-1 flex items-center gap-4 max-w-4xl">
<span className="text-zinc-400 text-xs font-medium tabular-nums">2:36</span>
<div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden cursor-pointer group">
<div className="h-full w-2/3 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full relative group-hover:from-blue-500 group-hover:to-indigo-400 transition-colors">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/20 to-transparent"></div>
</div>
</div>
<span className="text-zinc-500 text-xs font-medium tabular-nums">5:39</span>
</div>
</div>


    </>
  );
}
