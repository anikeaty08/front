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
void: '#050505',
charcoal: '#121212',
cinnabar: '#E60023',
neon: '#FF334B',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Cinzel', 'serif'],
},
backgroundImage: {
'mystic-gradient': 'radial-gradient(circle at top, #1a1a1a 0%, #050505 50%)',
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-void/70 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 bg-gradient-to-tr from-cinnabar to-neon rounded-lg rotate-45 flex items-center justify-center neon-glow group-hover:scale-110 transition-transform">
<iconify-icon className="text-white -rotate-45" height="20" icon="lucide:sword" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-display font-semibold text-lg tracking-[0.2em] ml-2 text-white/90">ETERNAL<span className="text-neon">STREAM</span></span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60 tracking-wide">
<a className="text-white hover:text-neon transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">Series</a>
<a className="hover:text-white transition-colors" href="#">Movies</a>
<a className="hover:text-white transition-colors" href="#">Cultivation</a>
</div>

<div className="flex items-center gap-6">
<iconify-icon className="text-white/60 hover:text-white cursor-pointer transition-colors" icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="text-white/60 hover:text-white cursor-pointer transition-colors" icon="lucide:bell" strokeWidth="1.5" width="20"></iconify-icon>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-charcoal to-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden cursor-pointer hover:border-neon/50 transition-colors">
<img alt="User" className="opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</nav>

<header className="relative w-full h-[90vh] overflow-hidden">

<div className="absolute inset-0 w-full h-full">
<img alt="Hero Background" className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow" src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&amp;w=2540&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-transparent"></div>
</div>

<div className="relative z-10 h-full flex flex-col justify-end pb-32 px-6 max-w-7xl mx-auto">
<div className="max-w-3xl space-y-6 animate-fade-in-up">

<div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-neon uppercase">
<span className="bg-neon/10 border border-neon/20 px-2 py-1 rounded backdrop-blur-sm">4K Quality</span>
<span className="bg-white/5 border border-white/10 px-2 py-1 rounded backdrop-blur-sm text-white/70">Cultivation</span>
<span className="bg-white/5 border border-white/10 px-2 py-1 rounded backdrop-blur-sm text-white/70">Updated Ep. 254</span>
</div>

<h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-2xl">
                    SOUL LAND:<br/>DUAL GODS
                </h1>

<p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl font-light">
                    Tang San faces his ultimate challenge as he ascends to the Divine Realm. With the power of the Sea God and Asura God, he must protect the Douluo Continent from the encroaching Void.
                </p>

<div className="flex items-center gap-4 pt-4">
<button className="group relative px-8 py-4 bg-neon text-white font-semibold text-sm tracking-wide rounded overflow-hidden shadow-[0_0_30px_rgba(255,51,75,0.3)] hover:shadow-[0_0_50px_rgba(255,51,75,0.5)] transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
<span className="flex items-center gap-2">
<iconify-icon fill="currentColor" icon="lucide:play" width="18"></iconify-icon>
                            PLAY NOW
                        </span>
</button>
<button className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium text-sm tracking-wide rounded hover:bg-white/10 hover:border-white/20 transition-all">
<span className="flex items-center gap-2">
<iconify-icon icon="lucide:plus" width="18"></iconify-icon>
                            ADD TO LIST
                        </span>
</button>
</div>
</div>
</div>
</header>

<section className="py-20 px-6 max-w-7xl mx-auto relative z-20">

<div className="flex items-center justify-between mb-10">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-neon neon-glow animate-pulse"></div>
<h2 className="font-display font-semibold text-2xl text-white tracking-tight">Trending in Cultivation World</h2>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all">
<iconify-icon icon="lucide:chevron-left" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all">
<iconify-icon icon="lucide:chevron-right" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

<div className="group relative aspect-[2/3] cursor-pointer">

<div className="spirit-aura absolute -inset-0.5 bg-gradient-to-b from-cinnabar to-neon opacity-0 blur-xl transition-opacity duration-500"></div>

<div className="relative w-full h-full rounded-lg overflow-hidden bg-charcoal border border-white/5 shadow-2xl">
<img alt="Series" className="card-poster w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
<div className="card-content translate-y-4 group-hover:translate-y-0">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<div className="w-12 h-12 rounded-full bg-neon/90 flex items-center justify-center shadow-lg text-white">
<iconify-icon className="ml-1" fill="currentColor" icon="lucide:play" width="20"></iconify-icon>
</div>
</div>
<h3 className="font-display font-semibold text-lg text-white leading-tight mb-1">Battle Heavens</h3>
<div className="flex items-center gap-2 text-xs text-white/60 mb-2">
<span className="text-neon font-medium">9.8</span>
<span>•</span>
<span>Action</span>
<span>•</span>
<span>2024</span>
</div>
<p className="text-xs text-white/50 line-clamp-2 leading-relaxed">Xiao Yan's journey to the peak of the Dou Qi continent continues.</p>
</div>
</div>
</div>

<div className="mt-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
<h4 className="font-sans font-medium text-sm text-white/90 truncate">Battle Through Heavens</h4>
<p className="text-xs text-white/40">Ep 104 • Just Updated</p>
</div>
</div>

<div className="group relative aspect-[2/3] cursor-pointer">
<div className="spirit-aura absolute -inset-0.5 bg-gradient-to-b from-cinnabar to-neon opacity-0 blur-xl transition-opacity duration-500"></div>
<div className="relative w-full h-full rounded-lg overflow-hidden bg-charcoal border border-white/5 shadow-2xl">
<img alt="Series" className="card-poster w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
<div className="card-content translate-y-4 group-hover:translate-y-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<div className="w-12 h-12 rounded-full bg-neon/90 flex items-center justify-center shadow-lg text-white">
<iconify-icon className="ml-1" fill="currentColor" icon="lucide:play" width="20"></iconify-icon>
</div>
</div>
<h3 className="font-display font-semibold text-lg text-white leading-tight mb-1">Perfect World</h3>
<div className="flex items-center gap-2 text-xs text-white/60 mb-2">
<span className="text-neon font-medium">9.6</span>
<span>•</span>
<span>Adventure</span>
</div>
<p className="text-xs text-white/50 line-clamp-2 leading-relaxed">Born with the Supreme Bone, destined for greatness.</p>
</div>
</div>
</div>
<div className="mt-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
<h4 className="font-sans font-medium text-sm text-white/90 truncate">Perfect World</h4>
<p className="text-xs text-white/40">Ep 152 • Trending</p>
</div>
</div>

<div className="group relative aspect-[2/3] cursor-pointer">
<div className="spirit-aura absolute -inset-0.5 bg-gradient-to-b from-cinnabar to-neon opacity-0 blur-xl transition-opacity duration-500"></div>
<div className="relative w-full h-full rounded-lg overflow-hidden bg-charcoal border border-white/5 shadow-2xl">
<img alt="Series" className="card-poster w-full h-full object-cover" src="https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
<div className="card-content translate-y-4 group-hover:translate-y-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<div className="w-12 h-12 rounded-full bg-neon/90 flex items-center justify-center shadow-lg text-white">
<iconify-icon className="ml-1" fill="currentColor" icon="lucide:play" width="20"></iconify-icon>
</div>
</div>
<h3 className="font-display font-semibold text-lg text-white leading-tight mb-1">A Will Eternal</h3>
<div className="flex items-center gap-2 text-xs text-white/60 mb-2">
<span className="text-neon font-medium">9.5</span>
<span>•</span>
<span>Comedy</span>
</div>
<p className="text-xs text-white/50 line-clamp-2 leading-relaxed">Bai Xiaochun seeks immortality but finds trouble everywhere.</p>
</div>
</div>
</div>
<div className="mt-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
<h4 className="font-sans font-medium text-sm text-white/90 truncate">A Will Eternal</h4>
<p className="text-xs text-white/40">Ep 98 • Comedy</p>
</div>
</div>

<div className="group relative aspect-[2/3] cursor-pointer">
<div className="spirit-aura absolute -inset-0.5 bg-gradient-to-b from-cinnabar to-neon opacity-0 blur-xl transition-opacity duration-500"></div>
<div className="relative w-full h-full rounded-lg overflow-hidden bg-charcoal border border-white/5 shadow-2xl">
<img alt="Series" className="card-poster w-full h-full object-cover grayscale-[30%]" src="https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
<div className="card-content translate-y-4 group-hover:translate-y-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<div className="w-12 h-12 rounded-full bg-neon/90 flex items-center justify-center shadow-lg text-white">
<iconify-icon className="ml-1" fill="currentColor" icon="lucide:play" width="20"></iconify-icon>
</div>
</div>
<h3 className="font-display font-semibold text-lg text-white leading-tight mb-1">Martial Universe</h3>
<div className="flex items-center gap-2 text-xs text-white/60 mb-2">
<span className="text-neon font-medium">9.4</span>
<span>•</span>
<span>Fantasy</span>
</div>
<p className="text-xs text-white/50 line-clamp-2 leading-relaxed">Lin Dong finds a mysterious talisman that changes his fate.</p>
</div>
</div>
</div>
<div className="mt-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
<h4 className="font-sans font-medium text-sm text-white/90 truncate">Martial Universe</h4>
<p className="text-xs text-white/40">Ep 40 • Completed</p>
</div>
</div>

<div className="group relative aspect-[2/3] cursor-pointer">
<div className="spirit-aura absolute -inset-0.5 bg-gradient-to-b from-cinnabar to-neon opacity-0 blur-xl transition-opacity duration-500"></div>
<div className="relative w-full h-full rounded-lg overflow-hidden bg-charcoal border border-white/5 shadow-2xl">
<img alt="Series" className="card-poster w-full h-full object-cover" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
<div className="card-content translate-y-4 group-hover:translate-y-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<div className="w-12 h-12 rounded-full bg-neon/90 flex items-center justify-center shadow-lg text-white">
<iconify-icon className="ml-1" fill="currentColor" icon="lucide:play" width="20"></iconify-icon>
</div>
</div>
<h3 className="font-display font-semibold text-lg text-white leading-tight mb-1">Swallowed Star</h3>
<div className="flex items-center gap-2 text-xs text-white/60 mb-2">
<span className="text-neon font-medium">9.7</span>
<span>•</span>
<span>Sci-Fi</span>
</div>
<p className="text-xs text-white/50 line-clamp-2 leading-relaxed">Earth needs heroes. Luo Feng rises to become a cosmic warrior.</p>
</div>
</div>
</div>
<div className="mt-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
<h4 className="font-sans font-medium text-sm text-white/90 truncate">Swallowed Star</h4>
<p className="text-xs text-white/40">Ep 85 • Sci-Fi Cultivation</p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-[#0a0a0a] border-t border-white/5">
<div className="max-w-[1600px] mx-auto px-4 md:px-8">
<h2 className="font-display font-semibold text-xl text-white tracking-tight mb-6 flex items-center gap-3">
<iconify-icon className="text-neon" icon="lucide:tv"></iconify-icon>
                Theater Mode: Soul Land
            </h2>
<div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[700px]">

<div className="flex-1 relative bg-black rounded-lg overflow-hidden border border-white/5 group shadow-2xl">

<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-neon/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-neon/40 transition-colors border border-neon/30 neon-glow">
<iconify-icon className="text-white fill-white ml-1" icon="lucide:play" width="32"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">

<div className="w-full h-1 bg-white/20 rounded-full mb-4 cursor-pointer relative group/progress">
<div className="absolute top-0 left-0 h-full w-[65%] bg-neon rounded-full neon-glow relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#FF334B] opacity-0 group-hover/progress:opacity-100 transition-opacity"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<button className="text-white hover:text-neon transition-colors"><iconify-icon icon="lucide:play" width="20"></iconify-icon></button>
<button className="text-white hover:text-neon transition-colors"><iconify-icon icon="lucide:skip-forward" width="20"></iconify-icon></button>
<div className="flex items-center gap-2 text-xs font-mono text-white/70">
<span>14:20</span>
<span className="text-white/30">/</span>
<span>22:05</span>
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-white hover:text-neon transition-colors"><iconify-icon icon="lucide:message-square" width="20"></iconify-icon></button>
<button className="text-white hover:text-neon transition-colors"><iconify-icon icon="lucide:settings" width="20"></iconify-icon></button>
<button className="text-white hover:text-neon transition-colors"><iconify-icon icon="lucide:maximize" width="20"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[350px] bg-charcoal rounded-lg border border-white/5 flex flex-col overflow-hidden">
<div className="p-4 border-b border-white/5 bg-[#151515]">
<h3 className="text-sm font-semibold text-white tracking-wide">Up Next</h3>
<p className="text-xs text-white/40 mt-1">Season 5 • Dual Gods Arc</p>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1">

<div className="flex items-center gap-3 p-3 rounded bg-white/5 border border-neon/20 cursor-pointer">
<div className="relative w-24 h-14 rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<iconify-icon className="text-neon animate-pulse" icon="lucide:bar-chart-2" width="16"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-xs font-semibold text-neon truncate">Episode 254</h4>
<p className="text-[10px] text-white/50 truncate mt-1">Ascension to Divinity</p>
</div>
</div>

<div className="flex items-center gap-3 p-3 rounded hover:bg-white/5 transition-colors cursor-pointer group">
<div className="relative w-24 h-14 rounded overflow-hidden flex-shrink-0 bg-black">
<img className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-1 right-1 bg-black/80 px-1 rounded text-[8px] text-white/70">PRO</div>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-xs font-medium text-white/80 group-hover:text-white truncate">Episode 255</h4>
<p className="text-[10px] text-white/40 truncate mt-1">The Shura Domain</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded hover:bg-white/5 transition-colors cursor-pointer group">
<div className="relative w-24 h-14 rounded overflow-hidden flex-shrink-0 bg-black">
<img className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-xs font-medium text-white/80 group-hover:text-white truncate">Episode 256</h4>
<p className="text-[10px] text-white/40 truncate mt-1">Battle of the Gods</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded hover:bg-white/5 transition-colors cursor-pointer group">
<div className="relative w-24 h-14 rounded overflow-hidden flex-shrink-0 bg-black">
<img className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-xs font-medium text-white/80 group-hover:text-white truncate">Episode 257</h4>
<p className="text-[10px] text-white/40 truncate mt-1">The Final Strike</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded hover:bg-white/5 transition-colors cursor-pointer group">
<div className="relative w-24 h-14 rounded overflow-hidden flex-shrink-0 bg-black">
<img className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-xs font-medium text-white/80 group-hover:text-white truncate">Episode 258</h4>
<p className="text-[10px] text-white/40 truncate mt-1">New World</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black/80 backdrop-blur border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-cinnabar to-neon rounded rotate-45 flex items-center justify-center">
<iconify-icon className="text-white -rotate-45" icon="lucide:sword" width="14"></iconify-icon>
</div>
<span className="font-display font-semibold text-sm tracking-widest text-white/50">ETERNAL</span>
</div>
<div className="flex gap-6 text-xs text-white/40">
<a className="hover:text-neon transition-colors" href="#">Privacy</a>
<a className="hover:text-neon transition-colors" href="#">Terms</a>
<a className="hover:text-neon transition-colors" href="#">DMCA</a>
</div>
<p className="text-[10px] text-white/20">© 2024 Donghua Platform. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
