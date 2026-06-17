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
      

<div className="max-w-md mx-auto bg-black min-h-screen">

<header className="fixed top-0 left-0 right-0 max-w-md mx-auto z-50 bg-black/95 backdrop-blur-sm border-b border-white/5">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-xl font-semibold tracking-tighter">TALETIP</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="user" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="flex gap-2 px-4 pb-3 overflow-x-auto scrollbar-hide">
<button className="px-4 py-1.5 bg-white text-black rounded-full text-sm font-medium whitespace-nowrap transition-all hover:bg-white/90">For You</button>
<button className="px-4 py-1.5 bg-white/5 rounded-full text-sm font-medium whitespace-nowrap transition-all hover:bg-white/10">Romance</button>
<button className="px-4 py-1.5 bg-white/5 rounded-full text-sm font-medium whitespace-nowrap transition-all hover:bg-white/10">Drama</button>
<button className="px-4 py-1.5 bg-white/5 rounded-full text-sm font-medium whitespace-nowrap transition-all hover:bg-white/10">Thriller</button>
<button className="px-4 py-1.5 bg-white/5 rounded-full text-sm font-medium whitespace-nowrap transition-all hover:bg-white/10">Fantasy</button>
</div>
</header>

<main className="pt-32 pb-24">

<div className="px-4 mb-8">
<div className="relative rounded-2xl overflow-hidden aspect-[16/10] group cursor-pointer">
<img alt="Featured" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 bg-purple-600 rounded text-xs font-medium">NEW</span>
<span className="text-xs text-white/60">Romance • Drama</span>
</div>
<h2 className="text-2xl font-semibold tracking-tight mb-2">Breaking Point</h2>
<p className="text-sm text-white/70 mb-4 line-clamp-2">A captivating micro drama following two hearts on a collision course with destiny.</p>
<div className="flex gap-2">
<button className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-white/90 transition-colors">
<i className="w-4 h-4" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
                                Watch Now
                            </button>
<button className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</div>

<section className="mb-8">
<div className="flex items-center justify-between px-4 mb-4">
<h3 className="text-lg font-semibold tracking-tight">Continue Watching</h3>
<button className="text-sm text-white/60 hover:text-white transition-colors">See all</button>
</div>
<div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide">
<div className="flex-shrink-0 w-40 group cursor-pointer">
<div className="relative rounded-xl overflow-hidden mb-2 aspect-[2/3]">
<img alt="Show" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
<div className="h-full bg-white w-2/3"></div>
</div>
<button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
<i className="w-6 h-6 ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</button>
</div>
<h4 className="text-sm font-medium mb-0.5 truncate">Dark Mystery</h4>
<p className="text-xs text-white/60">Ep 3 • 2m left</p>
</div>
<div className="flex-shrink-0 w-40 group cursor-pointer">
<div className="relative rounded-xl overflow-hidden mb-2 aspect-[2/3]">
<img alt="Show" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
<div className="h-full bg-white w-1/3"></div>
</div>
<button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
<i className="w-6 h-6 ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</button>
</div>
<h4 className="text-sm font-medium mb-0.5 truncate">City Lights</h4>
<p className="text-xs text-white/60">Ep 5 • 3m left</p>
</div>
<div className="flex-shrink-0 w-40 group cursor-pointer">
<div className="relative rounded-xl overflow-hidden mb-2 aspect-[2/3]">
<img alt="Show" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
<div className="h-full bg-white w-4/5"></div>
</div>
<button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
<i className="w-6 h-6 ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</button>
</div>
<h4 className="text-sm font-medium mb-0.5 truncate">Ocean Tales</h4>
<p className="text-xs text-white/60">Ep 8 • 1m left</p>
</div>
</div>
</section>

<section className="mb-8">
<div className="flex items-center justify-between px-4 mb-4">
<h3 className="text-lg font-semibold tracking-tight">Trending Now</h3>
<button className="text-sm text-white/60 hover:text-white transition-colors">See all</button>
</div>
<div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide">
<div className="flex-shrink-0 w-64 group cursor-pointer">
<div className="relative rounded-xl overflow-hidden mb-3 aspect-video">
<img alt="Trending" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 px-2 py-1 bg-purple-600 rounded text-xs font-medium">#1</div>
<button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
<i className="w-6 h-6 ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</button>
</div>
<h4 className="text-sm font-medium mb-1">The Last Frontier</h4>
<p className="text-xs text-white/60">Fantasy • 2024 • 8.9★</p>
</div>
<div className="flex-shrink-0 w-64 group cursor-pointer">
<div className="relative rounded-xl overflow-hidden mb-3 aspect-video">
<img alt="Trending" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 px-2 py-1 bg-purple-600 rounded text-xs font-medium">#2</div>
<button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
<i className="w-6 h-6 ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</button>
</div>
<h4 className="text-sm font-medium mb-1">Neon Dreams</h4>
<p className="text-xs text-white/60">Drama • 2024 • 8.7★</p>
</div>
<div className="flex-shrink-0 w-64 group cursor-pointer">
<div className="relative rounded-xl overflow-hidden mb-3 aspect-video">
<img alt="Trending" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 px-2 py-1 bg-purple-600 rounded text-xs font-medium">#3</div>
<button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
<i className="w-6 h-6 ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</button>
</div>
<h4 className="text-sm font-medium mb-1">Shadow Protocol</h4>
<p className="text-xs text-white/60">Thriller • 2024 • 8.5★</p>
</div>
</div>
</section>

<section className="mb-8">
<div className="flex items-center justify-between px-4 mb-4">
<h3 className="text-lg font-semibold tracking-tight">Recommended For You</h3>
</div>
<div className="grid grid-cols-3 gap-3 px-4">
<div className="group cursor-pointer">
<div className="relative rounded-lg overflow-hidden mb-2 aspect-[2/3]">
<img alt="Drama" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=300&amp;q=80"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h4 className="text-xs font-medium truncate">Future Vision</h4>
<p className="text-xs text-white/50">8.2★</p>
</div>
<div className="group cursor-pointer">
<div className="relative rounded-lg overflow-hidden mb-2 aspect-[2/3]">
<img alt="Drama" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=300&amp;q=80"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h4 className="text-xs font-medium truncate">Midnight Hour</h4>
<p className="text-xs text-white/50">7.9★</p>
</div>
<div className="group cursor-pointer">
<div className="relative rounded-lg overflow-hidden mb-2 aspect-[2/3]">
<img alt="Drama" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=300&amp;q=80"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h4 className="text-xs font-medium truncate">Silent Echo</h4>
<p className="text-xs text-white/50">8.6★</p>
</div>
<div className="group cursor-pointer">
<div className="relative rounded-lg overflow-hidden mb-2 aspect-[2/3]">
<img alt="Drama" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=300&amp;q=80"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h4 className="text-xs font-medium truncate">Velocity</h4>
<p className="text-xs text-white/50">8.4★</p>
</div>
<div className="group cursor-pointer">
<div className="relative rounded-lg overflow-hidden mb-2 aspect-[2/3]">
<img alt="Drama" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=300&amp;q=80"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h4 className="text-xs font-medium truncate">Cosmic Drift</h4>
<p className="text-xs text-white/50">7.8★</p>
</div>
<div className="group cursor-pointer">
<div className="relative rounded-lg overflow-hidden mb-2 aspect-[2/3]">
<img alt="Drama" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=300&amp;q=80"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h4 className="text-xs font-medium truncate">Dawn Rising</h4>
<p className="text-xs text-white/50">8.1★</p>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-black/95 backdrop-blur-sm border-t border-white/5">
<div className="flex items-center justify-around px-2 py-3">
<button className="flex flex-col items-center gap-1 text-white transition-colors">
<i className="w-5 h-5" data-lucide="home" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="compass" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs font-medium">Explore</span>
</button>
<button className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="bookmark" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs font-medium">My List</span>
</button>
<button className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="download" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs font-medium">Downloads</span>
</button>
</div>
</nav>
</div>


<style>
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>

    </>
  );
}
