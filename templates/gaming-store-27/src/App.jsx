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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-500/20">N</span>
                    NEBULA
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-normal">
<a className="text-white hover:text-indigo-400 transition-colors" href="#">Store</a>
<a className="hover:text-white transition-colors" href="#">Library</a>
<a className="hover:text-white transition-colors" href="#">Community</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
</div>
<div className="flex items-center gap-5">
<div className="hidden lg:flex items-center bg-zinc-900/50 border border-white/5 rounded-full px-3 py-1.5 focus-within:border-indigo-500/50 transition-colors">
<span className="iconify text-zinc-500" data-icon="lucide:search" data-strokeWidth="1.5" data-width="16"></span>
<input className="bg-transparent border-none outline-none text-xs ml-2 w-32 text-zinc-300 placeholder-zinc-600" placeholder="Search" type="text"/>
</div>
<button className="relative hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute top-0 right-0 w-2 h-2 bg-indigo-500 rounded-full border-2 border-zinc-950"></span>
</button>
<button className="hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:shopping-cart" data-strokeWidth="1.5" data-width="20"></span>
</button>
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>
</div>
</nav>

<main className="flex-grow pt-24 pb-20 relative">

<div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-indigo-950/20 via-zinc-950/50 to-zinc-950 pointer-events-none z-0"></div>
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex items-center gap-2 text-xs text-zinc-500 mb-6 font-normal">
<a className="hover:text-zinc-300 transition-colors" href="#">All Games</a>
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
<a className="hover:text-zinc-300 transition-colors" href="#">Action RPG</a>
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="text-zinc-300">Cyber Drift: 2077</span>
</div>

<div className="mb-10">
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-4">Cyber Drift: <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Echoes</span></h1>
<div className="flex flex-wrap items-center gap-6 text-sm">
<span className="bg-white/10 text-white px-2 py-0.5 rounded text-xs font-medium tracking-wide">EARLY ACCESS</span>
<div className="flex items-center gap-1.5 text-indigo-400">
<span className="iconify" data-icon="lucide:thumbs-up" data-width="14"></span>
<span className="text-zinc-300 font-medium">Very Positive</span>
<span className="text-zinc-600 text-xs">(12,403 reviews)</span>
</div>
<div className="flex items-center gap-1.5 text-zinc-500">
<span className="iconify" data-icon="lucide:calendar" data-width="14"></span>
<span>Release: Oct 14, 2023</span>
</div>
<div className="flex items-center gap-1.5 text-zinc-500">
<span className="iconify" data-icon="lucide:code-2" data-width="14"></span>
<span>Dev: Neon Forge</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-8 space-y-8">

<div className="aspect-video w-full bg-zinc-900 rounded-lg overflow-hidden border border-white/5 relative group shadow-2xl shadow-black/50">
<img alt="Game Screenshot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors">
<span className="iconify" data-fill="currentColor" data-icon="lucide:play" data-width="16"></span>
                                Play Trailer
                            </button>
</div>
</div>

<div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
<div className="flex-shrink-0 w-40 aspect-video rounded-md overflow-hidden border border-indigo-500/50 cursor-pointer">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&amp;fit=crop&amp;w=400&amp;q=60"/>
</div>
<div className="flex-shrink-0 w-40 aspect-video rounded-md overflow-hidden border border-white/10 cursor-pointer">
<img className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&amp;fit=crop&amp;w=400&amp;q=60"/>
</div>
<div className="flex-shrink-0 w-40 aspect-video rounded-md overflow-hidden border border-white/10 cursor-pointer">
<img className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&amp;fit=crop&amp;w=400&amp;q=60"/>
</div>
<div className="flex-shrink-0 w-40 aspect-video rounded-md overflow-hidden border border-white/10 cursor-pointer">
<img className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&amp;fit=crop&amp;w=400&amp;q=60"/>
</div>
</div>

<div className="prose prose-invert prose-zinc max-w-none">
<h3 className="text-xl font-medium text-white tracking-tight">About the Game</h3>
<p className="font-light text-zinc-400 leading-relaxed">
                            Dive into the neon-soaked abyss of Neo-Tokyo. In <strong>Echoes</strong>, you play as a rogue data-courier navigating the treacherous politics of mega-corporations and underground syndicates. Master a fluid combat system that blends tactical hacking with visceral melee engagements.
                        </p>
<p className="font-light text-zinc-400 leading-relaxed">
                            Customize your cybernetic enhancements to fit your playstyle. Will you be a ghost in the machine, hacking turrets and enemies from the shadows, or a chrome-plated juggernaut smashing through walls? The choice defines your legacy.
                        </p>
<div className="grid grid-cols-2 gap-6 mt-8 p-6 bg-zinc-900/30 border border-white/5 rounded-lg">
<div>
<h4 className="text-sm font-medium text-zinc-200 mb-2">Minimum Requirements</h4>
<ul className="text-xs space-y-1 text-zinc-500 font-light">
<li>OS: Windows 10 64-bit</li>
<li>Processor: Intel Core i5-8400</li>
<li>Memory: 16 GB RAM</li>
<li>Graphics: NVIDIA GTX 1060 6GB</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-200 mb-2">Recommended</h4>
<ul className="text-xs space-y-1 text-zinc-500 font-light">
<li>OS: Windows 11 64-bit</li>
<li>Processor: Intel Core i7-12700</li>
<li>Memory: 32 GB RAM</li>
<li>Graphics: NVIDIA RTX 3070</li>
</ul>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-2xl border border-white/10">
<img alt="Cover Art" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/90 to-transparent"></div>
</div>

<div className="bg-zinc-900 border border-white/10 rounded-xl p-6 shadow-xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<div>
<h2 className="text-lg font-medium text-white tracking-tight">Standard Edition</h2>
<p className="text-xs text-zinc-500">Digital Key • Global</p>
</div>
<div className="text-right">
<span className="block text-2xl font-semibold text-white tracking-tight">$59.99</span>
<span className="text-xs text-emerald-400 font-medium">-10% Launch</span>
</div>
</div>

<div className="bg-zinc-950/50 rounded-lg border border-white/5 p-3 mb-6 space-y-2">
<div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
<span className="text-zinc-500 uppercase tracking-wider font-medium">Select Currency</span>
<span className="text-zinc-500">Live Rates</span>
</div>

<div className="space-y-0.5">
<label className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer group transition-colors">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-600 group-hover:border-indigo-500 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-zinc-400" data-icon="lucide:dollar-sign" data-width="14"></span>
<span className="text-zinc-300 font-normal">USD</span>
</div>
</div>
<span className="text-white font-medium">$59.99</span>
</label>
<label className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer group transition-colors opacity-70 hover:opacity-100">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-600 group-hover:border-white"></div>
<div className="flex items-center gap-2">
<span className="iconify text-zinc-400" data-icon="lucide:euro" data-width="14"></span>
<span className="text-zinc-300 font-normal">EUR</span>
</div>
</div>
<span className="text-zinc-300">€55.40</span>
</label>
<label className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer group transition-colors opacity-70 hover:opacity-100">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-600 group-hover:border-orange-500"></div>
<div className="flex items-center gap-2">
<span className="iconify text-orange-500" data-icon="lucide:bitcoin" data-width="14"></span>
<span className="text-zinc-300 font-normal">BTC</span>
</div>
</div>
<span className="text-zinc-300">0.00094 ₿</span>
</label>
<label className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer group transition-colors opacity-70 hover:opacity-100">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-600 group-hover:border-blue-400"></div>
<div className="flex items-center gap-2">
<span className="iconify text-blue-400" data-icon="lucide:gem" data-width="14"></span> 
<span className="text-zinc-300 font-normal">ETH</span>
</div>
</div>
<span className="text-zinc-300">0.018 Ξ</span>
</label>
<label className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer group transition-colors opacity-70 hover:opacity-100">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-600 group-hover:border-indigo-400"></div>
<div className="flex items-center gap-2">
<span className="iconify text-indigo-400" data-icon="simple-icons:cardano" data-width="14"></span>
<span className="text-zinc-300 font-normal">ADA</span>
</div>
</div>
<span className="text-zinc-300">120.5 ₳</span>
</label>
</div>
</div>

<div className="space-y-3">
<button className="w-full bg-white text-black hover:bg-zinc-200 h-12 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 glow-hover">
<span>Purchase Now</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<div className="grid grid-cols-2 gap-3">
<button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white h-10 rounded-lg font-normal text-xs transition-colors flex items-center justify-center gap-2 border border-white/5">
<span className="iconify" data-icon="lucide:gift" data-width="14"></span>
                                    Gift
                                </button>
<button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white h-10 rounded-lg font-normal text-xs transition-colors flex items-center justify-center gap-2 border border-white/5">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                                    Wishlist
                                </button>
</div>
</div>
<div className="mt-4 text-center">
<p className="text-[10px] text-zinc-600">Transactions secured by NebulaShield™. Instant delivery.</p>
</div>
</div>

<div className="bg-transparent space-y-4 pt-2">
<div>
<span className="block text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">Features</span>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-xs text-zinc-400">Single-player</span>
<span className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-xs text-zinc-400">Controller Support</span>
<span className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-xs text-zinc-400">Cloud Saves</span>
<span className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-xs text-zinc-400">VR Supported</span>
</div>
</div>
<div>
<span className="block text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">Genre</span>
<div className="flex flex-wrap gap-2">
<a className="text-xs text-indigo-400 hover:underline" href="#">Cyberpunk</a>,
                                <a className="text-xs text-indigo-400 hover:underline" href="#">RPG</a>,
                                <a className="text-xs text-indigo-400 hover:underline" href="#">Action</a>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<span className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-white">N</span>
<span className="text-white font-medium tracking-tight">NEBULA</span>
</div>
<p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
                    The next-generation marketplace for digital entertainment. Secure, decentralized, and built for gamers.
                </p>
</div>
<div>
<h5 className="text-white text-sm font-medium mb-4">Store</h5>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">Browse</a></li>
<li><a className="hover:text-zinc-300" href="#">Curators</a></li>
<li><a className="hover:text-zinc-300" href="#">News</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-sm font-medium mb-4">Account</h5>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">Wallet</a></li>
<li><a className="hover:text-zinc-300" href="#">Settings</a></li>
<li><a className="hover:text-zinc-300" href="#">My Orders</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600">
<p>© 2023 Nebula Corp. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
<a className="hover:text-zinc-400" href="#">Legal</a>
</div>
</div>
</footer>

    </>
  );
}
