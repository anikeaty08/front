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
      

<header className="md:hidden flex items-center justify-between p-4 glass-panel sticky top-0 z-50 border-b border-metallic">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-[#DC3545] to-[#800000] rounded-lg flex items-center justify-center">
<span className="font-bold text-lg">A</span>
</div>
<span className="font-semibold text-lg tracking-tight">Apuestala</span>
</div>
<button className="text-[#FFFFF0]">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</header>

<aside className="hidden md:flex flex-col w-20 lg:w-64 h-screen sticky top-0 border-r border-metallic bg-[#080808] z-40 transition-all duration-300">

<div className="p-6 flex items-center gap-3 mb-6">
<div className="w-10 h-10 min-w-[2.5rem] bg-gradient-to-br from-[#DC3545] to-[#800000] rounded-xl shadow-lg shadow-red-900/20 flex items-center justify-center text-white font-bold text-xl">
                A
            </div>
<span className="font-semibold text-xl tracking-tight hidden lg:block text-[#FFFFF0]">Apuestala</span>
</div>

<nav className="flex-1 px-4 space-y-2">
<a className="flex items-center gap-4 px-3 py-3 rounded-lg bg-white/5 text-[#DC3545] font-medium transition-colors group" href="#">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
<span className="hidden lg:block">Lobby</span>
</a>
<a className="flex items-center gap-4 px-3 py-3 rounded-lg text-[#8E8E93] hover:text-[#FFFFF0] hover:bg-white/5 transition-colors group" href="#">
<i className="w-6 h-6 group-hover:text-[#DC3545] transition-colors" data-lucide="dices" strokeWidth="1.5"></i>
<span className="hidden lg:block">Casino</span>
</a>
<a className="flex items-center gap-4 px-3 py-3 rounded-lg text-[#8E8E93] hover:text-[#FFFFF0] hover:bg-white/5 transition-colors group" href="#">
<i className="w-6 h-6 group-hover:text-[#DC3545] transition-colors" data-lucide="users" strokeWidth="1.5"></i>
<span className="hidden lg:block">Live Dealers</span>
<span className="hidden lg:flex ml-auto w-2 h-2 rounded-full bg-[#DC3545] animate-pulse"></span>
</a>
<a className="flex items-center gap-4 px-3 py-3 rounded-lg text-[#8E8E93] hover:text-[#FFFFF0] hover:bg-white/5 transition-colors group" href="#">
<i className="w-6 h-6 group-hover:text-[#DC3545] transition-colors" data-lucide="trophy" strokeWidth="1.5"></i>
<span className="hidden lg:block">Sports</span>
</a>
<div className="pt-6 mt-6 border-t border-metallic">
<p className="hidden lg:block px-3 text-xs font-semibold text-[#8E8E93] uppercase tracking-wider mb-2">My Club</p>
<a className="flex items-center gap-4 px-3 py-3 rounded-lg text-[#8E8E93] hover:text-[#FFFFF0] hover:bg-white/5 transition-colors group" href="#">
<i className="w-6 h-6 group-hover:text-[#DC3545] transition-colors" data-lucide="gem" strokeWidth="1.5"></i>
<span className="hidden lg:block">VIP Lounge</span>
</a>
<a className="flex items-center gap-4 px-3 py-3 rounded-lg text-[#8E8E93] hover:text-[#FFFFF0] hover:bg-white/5 transition-colors group" href="#">
<i className="w-6 h-6 group-hover:text-[#DC3545] transition-colors" data-lucide="gift" strokeWidth="1.5"></i>
<span className="hidden lg:block">Promotions</span>
</a>
</div>
</nav>

<div className="p-6 border-t border-metallic">
<button className="flex items-center gap-3 text-[#8E8E93] hover:text-[#FFFFF0] transition-colors">
<i className="w-6 h-6" data-lucide="headphones" strokeWidth="1.5"></i>
<span className="hidden lg:block text-sm font-medium">Support 24/7</span>
</button>
</div>
</aside>

<main className="flex-1 relative">

<div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#800000]/20 to-transparent pointer-events-none"></div>
<div className="absolute -top-[100px] right-[10%] w-[500px] h-[500px] bg-[#DC3545]/10 rounded-full blur-[120px] pointer-events-none"></div>

<div className="hidden md:flex items-center justify-between px-8 py-5 sticky top-0 z-30 bg-[#050505]/80 backdrop-blur-md border-b border-metallic">

<div className="relative w-96 group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8E8E93] group-focus-within:text-[#FFFFF0] transition-colors w-5 h-5" data-lucide="search"></i>
<input className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-sm text-[#FFFFF0] focus:outline-none focus:border-[#DC3545] focus:ring-1 focus:ring-[#DC3545] transition-all placeholder:text-[#8E8E93]" placeholder="Search games, providers, or categories..." type="text"/>
</div>

<div className="flex items-center gap-4">
<div className="flex items-center gap-2 mr-4 border-r border-metallic pr-6">
<span className="text-[#8E8E93] text-sm">Balance:</span>
<span className="text-[#FFFFF0] font-semibold text-base">€0.00</span>
<button className="bg-[#DC3545] p-1 rounded-full hover:bg-[#b02a37] transition-colors ml-2">
<i className="w-4 h-4 text-white" data-lucide="plus"></i>
</button>
</div>
<button className="text-[#FFFFF0] hover:text-[#DC3545] font-medium text-sm transition-colors">Log In</button>
<button className="bg-[#FFFFF0] text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#e6e6d8] transition-colors shadow-lg shadow-white/10">
                    Register
                </button>
</div>
</div>
<div className="p-6 lg:p-10 space-y-12 pb-24">

<section className="relative rounded-3xl overflow-hidden border border-white/10 group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
<div className="relative z-10 px-8 py-16 md:px-12 md:py-20 lg:w-2/3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#800000]/40 border border-[#DC3545]/30 text-[#DC3545] text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-[#DC3545]"></span>
                        Welcome Offer
                    </div>
<h1 className="text-4xl md:text-6xl font-semibold text-[#FFFFF0] mb-6 leading-[1.1] tracking-tight">
                        Experience the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC3545] to-[#FFFFF0]">Elegance of Winning</span>
</h1>
<p className="text-lg md:text-xl text-[#8E8E93] mb-8 max-w-lg font-light">
                        Join the private club where passion meets opportunity. Claim your exclusive welcome package up to €500 + 200 Free Spins.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-[#DC3545] text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-[#b02a37] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#DC3545]/30 flex items-center justify-center gap-2">
                            Join Now
                            <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="glass-panel text-[#FFFFF0] px-8 py-4 rounded-xl font-medium text-base hover:bg-white/10 transition-colors">
                            View Promotions
                        </button>
</div>
</div>

<div className="absolute right-0 bottom-0 h-full w-1/3 bg-gradient-to-l from-[#800000]/10 to-transparent hidden md:block"></div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold text-[#FFFFF0] tracking-tight">Categories</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-metallic flex items-center justify-center text-[#8E8E93] hover:text-[#FFFFF0] hover:border-[#FFFFF0] transition-colors">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-metallic flex items-center justify-center text-[#8E8E93] hover:text-[#FFFFF0] hover:border-[#FFFFF0] transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">

<div className="min-w-[120px] h-32 p-4 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-[#DC3545] cursor-pointer transition-all group flex flex-col items-center justify-center gap-3">
<i className="w-8 h-8 text-[#8E8E93] group-hover:text-[#DC3545] transition-colors" data-lucide="flame"></i>
<span className="text-sm font-medium text-[#8E8E93] group-hover:text-[#FFFFF0]">Popular</span>
</div>
<div className="min-w-[120px] h-32 p-4 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-[#DC3545] cursor-pointer transition-all group flex flex-col items-center justify-center gap-3">
<i className="w-8 h-8 text-[#8E8E93] group-hover:text-[#DC3545] transition-colors" data-lucide="zap"></i>
<span className="text-sm font-medium text-[#8E8E93] group-hover:text-[#FFFFF0]">New</span>
</div>
<div className="min-w-[120px] h-32 p-4 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-[#DC3545] cursor-pointer transition-all group flex flex-col items-center justify-center gap-3">
<i className="w-8 h-8 text-[#8E8E93] group-hover:text-[#DC3545] transition-colors" data-lucide="gem"></i>
<span className="text-sm font-medium text-[#8E8E93] group-hover:text-[#FFFFF0]">Jackpots</span>
</div>
<div className="min-w-[120px] h-32 p-4 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-[#DC3545] cursor-pointer transition-all group flex flex-col items-center justify-center gap-3">
<i className="w-8 h-8 text-[#8E8E93] group-hover:text-[#DC3545] transition-colors" data-lucide="clover"></i>
<span className="text-sm font-medium text-[#8E8E93] group-hover:text-[#FFFFF0]">Slots</span>
</div>
<div className="min-w-[120px] h-32 p-4 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-[#DC3545] cursor-pointer transition-all group flex flex-col items-center justify-center gap-3">
<i className="w-8 h-8 text-[#8E8E93] group-hover:text-[#DC3545] transition-colors" data-lucide="users"></i>
<span className="text-sm font-medium text-[#8E8E93] group-hover:text-[#FFFFF0]">Live</span>
</div>
<div className="min-w-[120px] h-32 p-4 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-[#DC3545] cursor-pointer transition-all group flex flex-col items-center justify-center gap-3">
<i className="w-8 h-8 text-[#8E8E93] group-hover:text-[#DC3545] transition-colors" data-lucide="table-2"></i>
<span className="text-sm font-medium text-[#8E8E93] group-hover:text-[#FFFFF0]">Table</span>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold text-[#FFFFF0] tracking-tight">Top Selection</h2>
<a className="text-sm font-medium text-[#DC3545] hover:text-[#FFFFF0] transition-colors flex items-center gap-1" href="#">
                        View All <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer">
<img alt="Game" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
<button className="bg-[#DC3545] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<i className="w-5 h-5 fill-current" data-lucide="play"></i>
</button>
<span className="mt-3 text-sm font-semibold text-white">Big Bass Splash</span>
<span className="text-xs text-white/70">Pragmatic Play</span>
</div>
<div className="absolute top-2 left-2 bg-[#800000] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Hot</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer">
<img alt="Game" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
<button className="bg-[#DC3545] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<i className="w-5 h-5 fill-current" data-lucide="play"></i>
</button>
<span className="mt-3 text-sm font-semibold text-white">Gates of Olympus</span>
<span className="text-xs text-white/70">Pragmatic Play</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer">
<img alt="Game" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
<button className="bg-[#DC3545] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<i className="w-5 h-5 fill-current" data-lucide="play"></i>
</button>
<span className="mt-3 text-sm font-semibold text-white">Book of Dead</span>
<span className="text-xs text-white/70">Play'n GO</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer">

<div className="w-full h-full bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
<span className="text-2xl font-bold text-white/20 -rotate-12">Sugar<br/>Rush</span>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
<button className="bg-[#DC3545] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<i className="w-5 h-5 fill-current" data-lucide="play"></i>
</button>
<span className="mt-3 text-sm font-semibold text-white">Sugar Rush</span>
<span className="text-xs text-white/70">Pragmatic Play</span>
</div>
<div className="absolute top-2 left-2 bg-[#DC3545] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">New</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer">
<div className="w-full h-full bg-gradient-to-br from-yellow-700 to-yellow-900 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
<span className="text-2xl font-bold text-white/20 -rotate-12">Gold<br/>Rush</span>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
<button className="bg-[#DC3545] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<i className="w-5 h-5 fill-current" data-lucide="play"></i>
</button>
<span className="mt-3 text-sm font-semibold text-white">Legacy of Dead</span>
<span className="text-xs text-white/70">Play'n GO</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer">
<div className="w-full h-full bg-gradient-to-br from-emerald-800 to-teal-900 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
<span className="text-2xl font-bold text-white/20 -rotate-12">Wild<br/>West</span>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
<button className="bg-[#DC3545] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<i className="w-5 h-5 fill-current" data-lucide="play"></i>
</button>
<span className="mt-3 text-sm font-semibold text-white">Wanted Dead</span>
<span className="text-xs text-white/70">Hacksaw</span>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="relative rounded-2xl overflow-hidden bg-[#0F0F0F] border border-white/10 group h-80">
<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
<img alt="Live Casino" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 p-8 h-full flex flex-col justify-center items-start">
<span className="text-[#DC3545] font-bold text-sm uppercase tracking-widest mb-2">Live Casino</span>
<h3 className="text-3xl font-semibold text-white mb-4">Elite Lounge<br/>Roulette</h3>
<p className="text-[#8E8E93] mb-6 max-w-xs">High stakes, impeccable service. Join the table now.</p>
<button className="px-6 py-3 rounded-lg bg-white/10 hover:bg-[#DC3545] text-white font-medium transition-colors border border-white/20 hover:border-transparent backdrop-blur-sm">
                            Play Live
                        </button>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden bg-[#0F0F0F] border border-white/10 group h-80">
<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
<img alt="Car" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="relative z-20 p-8 h-full flex flex-col justify-center items-start">
<span className="text-[#DC3545] font-bold text-sm uppercase tracking-widest mb-2">Tournament</span>
<h3 className="text-3xl font-semibold text-white mb-4">Unleash the<br/>Beast</h3>
<p className="text-[#8E8E93] mb-6 max-w-xs">Compete for a luxury sports car and €50,000 in cash.</p>
<button className="px-6 py-3 rounded-lg bg-white/10 hover:bg-[#DC3545] text-white font-medium transition-colors border border-white/20 hover:border-transparent backdrop-blur-sm">
                            Join Tournament
                        </button>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-[#DC3545] animate-pulse"></span>
<h2 className="text-2xl font-semibold text-[#FFFFF0] tracking-tight">Live Action</h2>
</div>
<a className="text-sm font-medium text-[#DC3545] hover:text-[#FFFFF0] transition-colors flex items-center gap-1" href="#">
                        View All <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Roulette" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
<h4 className="text-white font-semibold text-sm">Lightning Roulette</h4>
<p className="text-[#8E8E93] text-xs">Evolution</p>
<div className="flex items-center gap-1 mt-2 text-xs text-[#DC3545] font-medium">
<i className="w-3 h-3" data-lucide="users"></i> 1.2k
                            </div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Blackjack" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
<h4 className="text-white font-semibold text-sm">Infinite Blackjack</h4>
<p className="text-[#8E8E93] text-xs">Evolution</p>
<div className="flex items-center gap-1 mt-2 text-xs text-[#DC3545] font-medium">
<i className="w-3 h-3" data-lucide="users"></i> 840
                            </div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Baccarat" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
<h4 className="text-white font-semibold text-sm">Speed Baccarat A</h4>
<p className="text-[#8E8E93] text-xs">Pragmatic Live</p>
<div className="flex items-center gap-1 mt-2 text-xs text-[#DC3545] font-medium">
<i className="w-3 h-3" data-lucide="users"></i> 320
                            </div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer border border-white/5">
<div className="w-full h-full bg-zinc-800 flex items-center justify-center">
<span className="text-white/20 font-bold">Game Show</span>
</div>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
<h4 className="text-white font-semibold text-sm">Crazy Time</h4>
<p className="text-[#8E8E93] text-xs">Evolution</p>
<div className="flex items-center gap-1 mt-2 text-xs text-[#DC3545] font-medium">
<i className="w-3 h-3" data-lucide="users"></i> 4.5k
                            </div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer border border-white/5 hidden lg:block">
<div className="w-full h-full bg-zinc-800 flex items-center justify-center">
<span className="text-white/20 font-bold">Poker</span>
</div>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
<h4 className="text-white font-semibold text-sm">Casino Hold'em</h4>
<p className="text-[#8E8E93] text-xs">Evolution</p>
<div className="flex items-center gap-1 mt-2 text-xs text-[#DC3545] font-medium">
<i className="w-3 h-3" data-lucide="users"></i> 156
                            </div>
</div>
</div>
</div>
</section>

<section className="mt-12 bg-gradient-to-b from-[#0F0F0F] to-[#080808] border border-white/5 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#DC3545] to-transparent"></div>
<h2 className="text-2xl md:text-3xl font-semibold text-[#FFFFF0] mb-4 tracking-tight">Ready to join the elite?</h2>
<p className="text-[#8E8E93] text-base md:text-lg mb-8 max-w-2xl mx-auto">
                    Apuestala provides a secure, premium gaming environment. Licensed, regulated, and verified for fairness.
                </p>
<div className="flex flex-wrap justify-center gap-6 text-[#8E8E93] opacity-60 mb-8">
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="shield-check"></i> SSL Secure</div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="credit-card"></i> Fast Withdrawals</div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="smartphone"></i> Mobile First</div>
</div>
<button className="bg-[#FFFFF0] text-black px-10 py-4 rounded-full font-semibold text-base hover:bg-[#e6e6d8] transition-colors shadow-lg shadow-white/5">
                    Create Free Account
                </button>
</section>

<footer className="pt-8 border-t border-metallic/30 flex flex-col md:flex-row justify-between items-center text-[#8E8E93] text-sm gap-4">
<p>© 2024 Apuestala.com. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-[#FFFFF0] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#FFFFF0] transition-colors" href="#">Terms of Service</a>
<a className="hover:text-[#FFFFF0] transition-colors" href="#">Responsible Gaming</a>
</div>
<div className="flex gap-4">

<div className="w-8 h-5 bg-white/10 rounded"></div>
<div className="w-8 h-5 bg-white/10 rounded"></div>
<div className="w-8 h-5 bg-white/10 rounded"></div>
<div className="w-18 h-5 border border-white/10 rounded px-1 flex items-center justify-center text-[10px] uppercase">18+ Only</div>
</div>
</footer>
</div>
</main>


    </>
  );
}
