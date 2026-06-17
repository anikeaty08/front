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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#050505',
surface: '#0f0f0f',
surfaceLight: '#1a1a1a',
accent: '#ff4d4d', // Mystique-like reddish accent
},
animation: {
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] opacity-40"></div>
<div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[100px] opacity-30"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[900px] h-[500px] bg-orange-900/5 rounded-full blur-[120px] opacity-20"></div>
</div>

<nav className="w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer group">
<span className="text-2xl font-bold tracking-tighter text-white group-hover:text-red-400 transition-colors">SkinPock<span className="text-red-500">.</span></span>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="text-white" href="#">Explore</a>
<a className="hover:text-white transition-colors" href="#">Drops</a>
<a className="hover:text-white transition-colors" href="#">Stats</a>
<a className="hover:text-white transition-colors" href="#">Create</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-white hover:text-neutral-300 transition px-4">Log In</button>
<button className="bg-white text-black text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-neutral-200 transition shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Sign Up
                </button>
</div>
</div>
</nav>

<section className="relative pt-20 pb-24 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5 space-y-10 relative z-10">
<h1 className="text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-[1.05]">
                    Discover Exclusive <br/>
<span className="text-neutral-500">Digital Collectibles</span>
</h1>
<p className="text-lg text-neutral-400 max-w-lg font-light leading-relaxed">
                    Explore our CS2 marketplace and discover a world where unique digital skins can be collected, traded, and cherished.
                </p>
<div className="flex flex-wrap items-center gap-6">
<button className="bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-neutral-200 transition flex items-center gap-2 shadow-[0_4px_20px_rgba(255,255,255,0.15)]">
                        Start Collecting <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</button>

<div className="relative group hidden sm:block">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-hover:text-white transition" data-lucide="search"></i>
<input className="bg-surface border border-white/5 hover:border-white/10 rounded-full py-4 pl-12 pr-6 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 w-64 transition-all" placeholder="Search item or ID..." type="text"/>
</div>
</div>

<div className="flex items-center gap-10 pt-4">
<div>
<div className="text-3xl font-bold text-white tracking-tight">29K+</div>
<div className="text-xs text-neutral-500 font-medium mt-1 uppercase tracking-wider">Artwork</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<div className="text-3xl font-bold text-white tracking-tight">34K+</div>
<div className="text-xs text-neutral-500 font-medium mt-1 uppercase tracking-wider">Auctions</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<div className="text-3xl font-bold text-white tracking-tight">99K+</div>
<div className="text-xs text-neutral-500 font-medium mt-1 uppercase tracking-wider">Creators</div>
</div>
</div>
</div>

<div className="lg:col-span-7 relative h-[700px] hidden lg:block perspective-[2000px]">

<div className="absolute right-0 top-0 grid grid-cols-3 gap-5 transform rotate-[-6deg] translate-x-12 scale-90 opacity-90">

<div className="flex flex-col gap-5 mt-24 animate-float" style={{animationDelay: '0s'}}>
<div className="w-48 h-60 bg-surfaceLight rounded-3xl overflow-hidden relative group shadow-2xl border border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-4 z-20">
<p className="text-white text-sm font-bold">Desert Eagle</p>
<p className="text-xs text-neutral-400">0.45 ETH</p>
</div>
</div>
<div className="w-48 h-52 bg-surfaceLight rounded-3xl overflow-hidden relative group shadow-2xl border border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>

<div className="flex flex-col gap-5 animate-float" style={{animationDelay: '2s'}}>
<div className="w-48 h-52 bg-amber-500 rounded-3xl overflow-hidden relative group shadow-2xl flex items-center justify-center">
<img className="w-32 drop-shadow-2xl group-hover:scale-110 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-3 left-0 w-full text-center text-xs font-bold text-black/60 uppercase tracking-widest">Legendary</div>
</div>
<div className="w-48 h-64 bg-surfaceLight rounded-3xl overflow-hidden relative group shadow-2xl border border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute bottom-4 left-4 z-20">
<p className="text-white text-sm font-bold">Gold Sticker</p>
<p className="text-xs text-neutral-400">1.2 ETH</p>
</div>
</div>
</div>

<div className="flex flex-col gap-5 mt-16 animate-float" style={{animationDelay: '1s'}}>
<div className="w-48 h-64 bg-surfaceLight rounded-3xl overflow-hidden relative group shadow-2xl border border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="w-48 h-48 bg-[#1a1a1a] rounded-3xl p-6 relative group shadow-2xl border border-white/5 flex flex-col justify-between">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
<i className="w-5 h-5 text-black" data-lucide="arrow-up-right"></i>
</div>
<p className="text-neutral-400 text-sm font-medium">View All Collections</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-3">Top Collections</h2>
<p className="text-sm text-neutral-500">The creators that have produced works that are highly valued.</p>
</div>
<div className="flex justify-center flex-wrap gap-4">

<div className="group flex items-center gap-3 bg-surface hover:bg-surfaceLight border border-white/5 hover:border-white/10 rounded-full p-1.5 pr-6 transition cursor-pointer">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 p-[1px]">
<img className="rounded-full w-full h-full object-cover border-2 border-surface" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Mutan Cats</h4>
<div className="text-[10px] text-neutral-500 flex items-center gap-1">
<i className="w-2.5 h-2.5" data-lucide="diamond"></i> 2,340 ETH
                        </div>
</div>
</div>

<div className="group flex items-center gap-3 bg-surface hover:bg-surfaceLight border border-white/5 hover:border-white/10 rounded-full p-1.5 pr-6 transition cursor-pointer">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 p-[1px]">
<div className="w-full h-full rounded-full bg-surface flex items-center justify-center text-white text-xs font-bold">DB</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Design Bear</h4>
<div className="text-[10px] text-neutral-500 flex items-center gap-1">
<i className="w-2.5 h-2.5" data-lucide="diamond"></i> 2,792 ETH
                        </div>
</div>
</div>

<div className="group flex items-center gap-3 bg-surface hover:bg-surfaceLight border border-white/5 hover:border-white/10 rounded-full p-1.5 pr-6 transition cursor-pointer">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 p-[1px]">
<img className="rounded-full w-full h-full object-cover border-2 border-surface" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Gorila Por</h4>
<div className="text-[10px] text-neutral-500 flex items-center gap-1">
<i className="w-2.5 h-2.5" data-lucide="diamond"></i> 2,230 ETH
                        </div>
</div>
</div>

<div className="group flex items-center gap-3 bg-surface hover:bg-surfaceLight border border-white/5 hover:border-white/10 rounded-full p-1.5 pr-6 transition cursor-pointer">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 p-[1px]">
<div className="w-full h-full rounded-full bg-surface flex items-center justify-center text-white text-xs font-bold">CW</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Cyber Wolf</h4>
<div className="text-[10px] text-neutral-500 flex items-center gap-1">
<i className="w-2.5 h-2.5" data-lucide="diamond"></i> 1,980 ETH
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] relative">

<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-900/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-4xl font-semibold text-white tracking-tight mb-4">Discover Unique <span className="text-neutral-500">Skins</span></h2>
<p className="text-sm text-neutral-400 max-w-sm">You can explore our diverse collection of digital assets from the community.</p>
</div>
<div className="flex items-center gap-2">
<button className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold">All</button>
<button className="px-5 py-2.5 rounded-full bg-surface border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 text-xs font-medium transition">Knives</button>
<button className="px-5 py-2.5 rounded-full bg-surface border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 text-xs font-medium transition">Gloves</button>
<button className="px-5 py-2.5 rounded-full bg-surface border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 text-xs font-medium transition">Rifles</button>
<button className="bg-surface border border-white/5 text-white px-5 py-2.5 rounded-full text-xs font-medium hover:bg-surfaceLight transition flex items-center gap-2 ml-2">
                        Filter <i className="w-3 h-3" data-lucide="sliders-horizontal"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-1 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">

<div className="bg-red-500/10 rounded-[20px] aspect-[4/5] relative flex items-center justify-center overflow-hidden">

<img alt="Skin" className="w-48 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform group-hover:scale-110 group-hover:-rotate-3 transition duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>

<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/40 transition">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>

<div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] text-white font-medium flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> 2h 45m left
                             </div>
</div>
</div>

<div className="mt-4 px-1">
<div className="flex justify-between items-start mb-1">
<h3 className="text-white font-semibold text-lg">Hand Wraps</h3>
<div className="flex items-center gap-1 bg-surfaceLight border border-white/5 px-2 py-1 rounded text-[10px] text-neutral-300">
<i className="w-3 h-3 text-neutral-500" data-lucide="hash"></i> 101
                            </div>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-neutral-500 text-xs">Current Bid</p>
<p className="text-white font-medium">51.2 ETH</p>
</div>
<div className="text-right">
<p className="text-neutral-500 text-xs">Buy Now</p>
<p className="text-white font-medium">75.0 ETH</p>
</div>
</div>
</div>
</div>

<div className="group">
<div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-1 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<div className="bg-orange-500/10 rounded-[20px] aspect-[4/5] relative flex items-center justify-center overflow-hidden">
<img alt="Skin" className="w-48 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform group-hover:scale-110 group-hover:rotate-3 transition duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/40 transition"><i className="w-4 h-4" data-lucide="heart"></i></button>
</div>
</div>
<div className="mt-4 px-1">
<div className="flex justify-between items-start mb-1">
<h3 className="text-white font-semibold text-lg">M9 Bayonet</h3>
<div className="flex items-center gap-1 bg-surfaceLight border border-white/5 px-2 py-1 rounded text-[10px] text-neutral-300">
<i className="w-3 h-3 text-neutral-500" data-lucide="hash"></i> 402
                            </div>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-neutral-500 text-xs">Current Bid</p>
<p className="text-white font-medium">32.8 ETH</p>
</div>
<div className="text-right">
<p className="text-neutral-500 text-xs">Buy Now</p>
<p className="text-white font-medium">40.0 ETH</p>
</div>
</div>
</div>
</div>

<div className="group">
<div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-1 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<div className="bg-purple-500/10 rounded-[20px] aspect-[4/5] relative flex items-center justify-center overflow-hidden">
<img alt="Skin" className="w-40 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform group-hover:scale-110 group-hover:-rotate-6 transition duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/40 transition"><i className="w-4 h-4" data-lucide="heart"></i></button>
</div>
</div>
<div className="mt-4 px-1">
<div className="flex justify-between items-start mb-1">
<h3 className="text-white font-semibold text-lg">Gold Sticker</h3>
<div className="flex items-center gap-1 bg-surfaceLight border border-white/5 px-2 py-1 rounded text-[10px] text-neutral-300">
<i className="w-3 h-3 text-neutral-500" data-lucide="hash"></i> 99
                            </div>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-neutral-500 text-xs">Current Bid</p>
<p className="text-white font-medium">12.5 ETH</p>
</div>
<div className="text-right">
<p className="text-neutral-500 text-xs">Buy Now</p>
<p className="text-white font-medium">15.0 ETH</p>
</div>
</div>
</div>
</div>

<div className="group">
<div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-1 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<div className="bg-blue-500/10 rounded-[20px] aspect-[4/5] relative flex items-center justify-center overflow-hidden">
<img alt="Skin" className="w-48 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform group-hover:scale-110 group-hover:rotate-6 transition duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/40 transition"><i className="w-4 h-4" data-lucide="heart"></i></button>
<div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] text-white font-medium flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> Ended
                             </div>
</div>
</div>
<div className="mt-4 px-1">
<div className="flex justify-between items-start mb-1">
<h3 className="text-white font-semibold text-lg">Desert Eagle</h3>
<div className="flex items-center gap-1 bg-surfaceLight border border-white/5 px-2 py-1 rounded text-[10px] text-neutral-300">
<i className="w-3 h-3 text-neutral-500" data-lucide="hash"></i> 707
                            </div>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-neutral-500 text-xs">Last Sold</p>
<p className="text-white font-medium">108 ETH</p>
</div>
<div className="text-right">
<p className="text-neutral-500 text-xs">Buy Now</p>
<p className="text-white font-medium">120 ETH</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center mt-16">
<button className="group bg-[#1a1a1a] hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-medium transition duration-300 border border-white/5 flex items-center gap-2">
                    View Marketplace <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505]">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">

<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Get the Latest Updates</h2>
<h2 className="text-3xl font-semibold text-neutral-500 tracking-tight mb-8">SkinPock Newsletter</h2>
<p className="text-sm text-neutral-400 mb-8 max-w-sm">Sign up to our regular newsletter for news, insights, new product releases and more.</p>
<div className="relative max-w-md">
<input className="w-full bg-[#1a1a1a] border border-white/10 rounded-full py-4 pl-6 pr-32 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-white/20" placeholder="Input email address" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-black font-semibold rounded-full px-6 hover:bg-neutral-200 transition">Get In Touch</button>
</div>
</div>

<div>
<p className="text-sm text-neutral-400 mb-6">Maybe your question has been answered, check this out!</p>
<div className="space-y-6">
<a className="flex items-center justify-between text-white hover:text-neutral-300 transition group border-b border-white/5 pb-4" href="#">
<span className="font-medium">What is SkinPock?</span>
<i className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between text-white hover:text-neutral-300 transition group border-b border-white/5 pb-4" href="#">
<span className="font-medium">How to buy Skins on this marketplace?</span>
<i className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between text-white hover:text-neutral-300 transition group border-b border-white/5 pb-4" href="#">
<span className="font-medium">How secure is Inventory ownership?</span>
<i className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="max-w-[1400px] mx-auto px-6 mt-24 pt-8 flex flex-col md:flex-row justify-between items-end gap-8">
<div>
<div className="text-2xl font-bold tracking-tighter text-white mb-4">SkinPock<span className="text-red-500">.</span></div>
<h3 className="text-2xl font-medium text-white max-w-sm mb-1">Unleash the Power of</h3>
<h3 className="text-2xl font-medium text-white max-w-sm">Digital Collectibles</h3>
</div>
<div className="flex flex-col items-end gap-8">
<div className="flex gap-8 text-[10px] font-semibold text-neutral-500 uppercase tracking-widest">
<a className="hover:text-white transition" href="#">Privacy Policy</a>
<a className="hover:text-white transition" href="#">Term &amp; Condition</a>
<a className="hover:text-white transition" href="#">About Us</a>
<a className="hover:text-white transition" href="#">FAQ</a>
</div>
<div className="flex items-center gap-4 text-white">
<i className="w-5 h-5 cursor-pointer hover:text-neutral-400 transition" data-lucide="facebook"></i>
<i className="w-5 h-5 cursor-pointer hover:text-neutral-400 transition" data-lucide="twitter"></i>
<i className="w-5 h-5 cursor-pointer hover:text-neutral-400 transition" data-lucide="instagram"></i>
</div>
<div className="text-[10px] text-neutral-600">
                    © 2025 SkinPock INC. All Rights Reserved.
                </div>
</div>
</div>
</section>


    </>
  );
}
