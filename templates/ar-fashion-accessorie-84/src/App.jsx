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
      

<nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center text-black">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
</div>
<span className="text-lg font-bold italic tracking-tighter uppercase">Rukkus</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors uppercase tracking-wide" href="#">Shop</a>
<a className="hover:text-white transition-colors uppercase tracking-wide" href="#">The Labs</a>
<a className="hover:text-white transition-colors uppercase tracking-wide" href="#">Playground</a>
<a className="hover:text-white transition-colors uppercase tracking-wide" href="#">Manifesto</a>
</div>
<div className="flex items-center gap-4">
<button className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors uppercase tracking-tight">
                    Collab Invite
                </button>
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
<i className="w-4 h-4 text-fuchsia-500" data-lucide="grid"></i>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 text-xs font-medium uppercase tracking-wide mb-8">
<span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
                Next-Gen Cult Accessories
            </div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-bold italic tracking-tighter leading-[0.9] uppercase text-white mb-6">
                Own Your <br/>
<span className="text-fuchsia-500">Digital</span> <br/>
                Steeze
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                Stop guessing. Start flexin'. We're bridging the gap between your physical fit and your digital aura with insane AR tech built for the bold.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-fuchsia-500 hover:bg-fuchsia-400 text-black font-bold uppercase italic tracking-tight rounded flex items-center justify-center gap-2 transition-transform hover:scale-105">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
                    Launch Experience
                </button>
<button className="w-full sm:w-auto px-8 py-4 border border-zinc-700 hover:border-zinc-500 bg-black/50 text-white font-semibold uppercase italic tracking-tight rounded flex items-center justify-center gap-2 transition-colors">
                    Show Me More
                </button>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h2 className="text-4xl md:text-6xl font-bold italic tracking-tighter uppercase leading-none">
                    Choose Your <br/>
<span className="text-cyan-400">Vibe</span>
</h2>
<p className="text-zinc-500 text-xs uppercase tracking-widest max-w-xs text-right mt-4 md:mt-0">
                    Scroll to see collections built for tomorrow's experience.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-colors">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-bold italic uppercase tracking-tighter">Kicks</h3>
<span className="px-2 py-0.5 bg-zinc-800 text-[10px] uppercase rounded text-zinc-400">AR+</span>
</div>
<p className="text-zinc-400 text-sm mb-6 h-16">Flex the latest heat without the campout. AR sneakers that move like you do.</p>
<div className="aspect-square bg-zinc-950 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
<img alt="Sneaker" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<button className="w-full py-3 bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-wide rounded">
                        View Drop
                    </button>
</div>

<div className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-colors">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-bold italic uppercase tracking-tighter">Ice</h3>
<span className="px-2 py-0.5 bg-cyan-900/30 text-cyan-400 text-[10px] uppercase rounded">New</span>
</div>
<p className="text-zinc-400 text-sm mb-6 h-16">Watches and chains that actually shine. Pixel-perfect luxury for the timeline.</p>
<div className="aspect-square bg-zinc-950 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
<img alt="Watch" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<button className="w-full py-3 bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-wide rounded">
                        Get Iced Out
                    </button>
</div>

<div className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-colors">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-bold italic uppercase tracking-tighter">Gems</h3>
<span className="px-2 py-0.5 bg-zinc-800 text-[10px] uppercase rounded text-zinc-400">Ltd</span>
</div>
<p className="text-zinc-400 text-sm mb-6 h-16">From minimal rings to heavy statement pieces. See the detail, feel the vibe.</p>
<div className="aspect-square bg-zinc-950 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
<img alt="Rings" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<button className="w-full py-3 bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-wide rounded">
                        Open Vault
                    </button>
</div>

<div className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-colors">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-bold italic uppercase tracking-tighter">Specs</h3>
<span className="px-2 py-0.5 bg-fuchsia-900/30 text-fuchsia-400 text-[10px] uppercase rounded">Hot</span>
</div>
<p className="text-zinc-400 text-sm mb-6 h-16">Futuristic eyewear that fits your face perfectly with real-time AR tracking.</p>
<div className="aspect-square bg-zinc-950 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
<img alt="Glasses" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<button className="w-full py-3 bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-wide rounded">
                        View Vision
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-center mb-16">
<div className="text-center">
<div className="inline-block px-3 py-1 mb-4 border border-zinc-700 rounded-full bg-zinc-900">
<span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-fuchsia-500">
<span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span> Live Drop
                        </span>
</div>
<h2 className="text-5xl md:text-7xl font-bold italic tracking-tighter uppercase">
                        The <span className="text-fuchsia-500">Vault</span>
</h2>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-800 to-black border border-zinc-800 hover:border-cyan-400/50 transition-colors">
<div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
<span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">Vol. 102.4</span>
<h3 className="text-3xl font-bold italic uppercase tracking-tighter leading-none text-white">Chrono<br/>Holo-Silver</h3>
</div>
<img alt="Watch" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>

<div className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-b from-indigo-900/20 to-black border border-zinc-800 hover:border-fuchsia-500/50 transition-colors">
<div className="absolute top-8 left-8 z-20">
<span className="bg-fuchsia-500 text-black text-[10px] font-bold uppercase px-2 py-1 rounded">Rare</span>
</div>
<div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
<span className="text-fuchsia-500 text-xs font-bold uppercase tracking-widest mb-1">Neon V2</span>
<h3 className="text-3xl font-bold italic uppercase tracking-tighter leading-none text-white">Neon<br/>Eclipse</h3>
</div>
<img alt="Sunglasses" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>

<div className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-b from-yellow-900/10 to-black border border-zinc-800 hover:border-yellow-400/50 transition-colors">
<div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
<span className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">Gold-Metal</span>
<h3 className="text-3xl font-bold italic uppercase tracking-tighter leading-none text-white">Titan<br/>Link-08</h3>
</div>
<img alt="Chain" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-zinc-900 rounded-3xl p-10 flex flex-col justify-center relative overflow-hidden">
<div className="relative z-10">
<p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-6">Creators Lifestyle</p>
<h2 className="text-5xl md:text-7xl font-bold italic uppercase tracking-tighter leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
                        Real-Time <br/>
<span className="text-cyan-400">Drip</span>
</h2>
<div className="bg-black/40 backdrop-blur border-l-2 border-cyan-400 p-6 max-w-md">
<span className="block text-[10px] font-bold text-white uppercase mb-2 bg-black w-fit px-2 py-1">Creation Mode</span>
<p className="text-zinc-400 text-sm leading-relaxed">
                            Professional natures, wire function. Seamless conferencing. Safe for work but built for the streets.
                        </p>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] font-bold italic text-white/5 whitespace-nowrap pointer-events-none select-none">
                    PREMIUM
                </div>
</div>

<div className="bg-zinc-800 rounded-3xl relative overflow-hidden group">
<div className="absolute top-6 left-6 z-20 bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/10">
<span className="text-[10px] font-mono text-cyan-400 uppercase">Rec • 00:03:45</span>
</div>
<div className="absolute bottom-6 right-6 z-20">
<span className="text-4xl font-mono font-bold text-white/20 italic">AR_V.2.0</span>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cyan-400/50 rounded-full z-20 flex items-center justify-center">
<div className="w-28 h-28 border border-white/20 rounded-full animate-ping opacity-20"></div>
<div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-[1px] bg-cyan-400/20 z-20"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-[1px] bg-cyan-400/20 z-20"></div>
<img alt="AR Wrist" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</section>

<section className="py-20 bg-black border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-4xl font-bold italic tracking-tighter uppercase">
                    The <span className="text-fuchsia-500">Squad</span>
</h2>
<p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">Join currently the biggest clique in the creator economy.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<button className="py-6 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 rounded-xl text-zinc-400 hover:text-white font-bold italic uppercase tracking-tight transition-all">StreetX</button>
<button className="py-6 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 rounded-xl text-zinc-400 hover:text-white font-bold italic uppercase tracking-tight transition-all">Vibe-ID</button>
<button className="py-6 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 rounded-xl text-zinc-400 hover:text-white font-bold italic uppercase tracking-tight transition-all">Cyber-U</button>
<button className="py-6 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 rounded-xl text-zinc-400 hover:text-white font-bold italic uppercase tracking-tight transition-all">Neo-Gen</button>
<button className="py-6 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 rounded-xl text-zinc-400 hover:text-white font-bold italic uppercase tracking-tight transition-all">Hyp-AR</button>
<button className="py-6 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 rounded-xl text-zinc-400 hover:text-white font-bold italic uppercase tracking-tight transition-all">Raw-Fit</button>
<button className="py-6 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 rounded-xl text-zinc-400 hover:text-white font-bold italic uppercase tracking-tight transition-all">Glitch</button>
<button className="py-6 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 rounded-xl text-zinc-400 hover:text-white font-bold italic uppercase tracking-tight transition-all">Aura</button>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center mb-16">
<span className="text-[10px] font-bold uppercase bg-fuchsia-900/30 text-fuchsia-400 px-2 py-1 rounded mb-4">Exclusive</span>
<h2 className="text-5xl md:text-7xl font-bold italic tracking-tighter uppercase text-center">
                    Community <span className="text-zinc-700">Hype</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">

<div className="bg-[#8ba848] rounded-3xl p-8 flex flex-col justify-center items-center relative group overflow-hidden">
<span className="text-9xl font-bold text-white/20 italic absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform">1</span>
<div className="z-10 border border-white/40 px-6 py-2 rounded uppercase text-white font-bold tracking-tight bg-white/10 backdrop-blur">
                        Community
                    </div>
</div>

<div className="bg-[#8abeb2] rounded-3xl p-8 flex items-center justify-center relative overflow-hidden group">
<h3 className="text-4xl font-bold italic text-white/90 uppercase -rotate-12 group-hover:rotate-0 transition-transform duration-500">Community 3</h3>
</div>

<div className="bg-[#4a6b5d] rounded-3xl p-8 flex flex-col items-center justify-center relative">
<span className="text-6xl font-serif text-white/40 mb-2">5</span>
<span className="text-sm font-serif italic text-white/60">Community 5</span>
</div>

<div className="bg-[#f0ece5] rounded-3xl p-8 flex flex-col justify-between text-zinc-800">
<span className="text-xs uppercase tracking-widest font-medium">Communit 2</span>
<div className="w-12 h-12 rounded-full border border-zinc-400 flex items-center justify-center self-center">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>

<div className="bg-[#6b8c5e] rounded-3xl p-8 flex flex-col justify-center items-center text-center">
<p className="font-serif text-2xl italic text-[#f0ece5] leading-tight">Community 4 <br/> Natur 4 Work</p>
<span className="text-[10px] mt-4 font-mono text-[#f0ece5]/70">camel navel</span>
</div>

<div className="bg-[#b3b67c] rounded-3xl grid grid-cols-3 overflow-hidden">
<div className="col-span-1 bg-[#8fa15e] h-full"></div>
<div className="col-span-2 p-6 flex flex-col justify-end items-end">
<span className="text-6xl font-bold text-[#8fa15e] opacity-50">6</span>
<span className="text-white/80 font-medium">Community</span>
</div>
</div>
</div>
<div className="flex justify-center mt-12">
<button className="bg-white text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-zinc-200 transition-colors">
                    View The Movement
                </button>
</div>
</div>
</section>

<section className="py-32 bg-black relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-5xl md:text-6xl font-bold italic uppercase tracking-tighter leading-none mb-12">
                    Built For <br/>
                    The <br/>
<span className="text-cyan-400">Fearless</span>
</h2>
<div className="space-y-6">
<div className="p-6 bg-zinc-900/50 border-l-4 border-fuchsia-500 rounded-r-xl">
<h3 className="text-fuchsia-500 font-bold italic uppercase tracking-tight mb-2">Content Is King</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Turn your living room into a high-fashion runway. Our tools make it effortless to create content that stops the scroll.</p>
</div>
<div className="p-6 rounded-r-xl hover:bg-zinc-900/30 border-l-4 border-transparent hover:border-cyan-400 transition-colors cursor-pointer group">
<h3 className="text-white group-hover:text-cyan-400 font-bold italic uppercase tracking-tight mb-2 transition-colors">IRL Precision</h3>
<p className="text-zinc-500 group-hover:text-zinc-400 text-sm leading-relaxed transition-colors">No more "it looked better online" regrets. Try everything on virtually with 1:1 scale accuracy before you hit buy.</p>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-fuchsia-500 opacity-20 blur-2xl rounded-[3rem]"></div>
<div className="relative bg-zinc-800 rounded-[2.5rem] overflow-hidden aspect-square border border-white/10 shadow-2xl">
<img alt="Model" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-ping"></div>
<span className="text-[10px] font-bold uppercase text-white tracking-widest">AR Active Mode</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-24 pb-12 border-t border-zinc-900 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

<div className="col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-fuchsia-500 rounded-full flex items-center justify-center text-black">
<i className="w-3 h-3 fill-current" data-lucide="zap"></i>
</div>
<span className="text-base font-bold italic tracking-tighter uppercase text-white">Rukkus</span>
</div>
<p className="text-zinc-500 text-xs leading-relaxed mb-6">
                        Defining the future of Fashion for the next generation of creators.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>

<div>
<h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-6">The Goods</h4>
<ul className="space-y-4">
<li><a className="text-zinc-400 hover:text-white font-bold uppercase text-xs tracking-wide" href="#">Sneakers</a></li>
<li><a className="text-zinc-400 hover:text-white font-bold uppercase text-xs tracking-wide" href="#">Watches</a></li>
<li><a className="text-zinc-400 hover:text-white font-bold uppercase text-xs tracking-wide" href="#">Accessories</a></li>
<li><a className="text-zinc-400 hover:text-white font-bold uppercase text-xs tracking-wide" href="#">Face Wear</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-6">Connect</h4>
<ul className="space-y-4">
<li><a className="text-zinc-400 hover:text-white font-bold uppercase text-xs tracking-wide" href="#">Manifesto</a></li>
<li><a className="text-zinc-400 hover:text-white font-bold uppercase text-xs tracking-wide" href="#">Creators</a></li>
<li><a className="text-zinc-400 hover:text-white font-bold uppercase text-xs tracking-wide" href="#">Collabs</a></li>
<li><a className="text-zinc-400 hover:text-white font-bold uppercase text-xs tracking-wide" href="#">Discord</a></li>
</ul>
</div>

<div>
<h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-6">Join The Lab</h4>
<form className="relative">
<input className="w-full bg-zinc-900 border border-zinc-800 text-white text-xs px-4 py-3 rounded-full focus:outline-none focus:border-zinc-600 placeholder-zinc-600 uppercase tracking-wide" placeholder="Your Email" type="email"/>
<button className="absolute right-1 top-1 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-zinc-200 text-black" type="button">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
<p className="text-[10px] text-zinc-600 mt-4">No spam, just exclusive drops.</p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900">
<p className="text-[10px] text-zinc-600 uppercase tracking-widest">© 2024 Rukkus Studios. All Rights Reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-[10px] text-zinc-600 hover:text-zinc-400 uppercase tracking-widest" href="#">Privacy</a>
<a className="text-[10px] text-zinc-600 hover:text-zinc-400 uppercase tracking-widest" href="#">Terms</a>
<a className="text-[10px] text-zinc-600 hover:text-zinc-400 uppercase tracking-widest" href="#">Cookies</a>
</div>
</div>
</div>

<div className="w-full overflow-hidden mt-12 opacity-5 select-none pointer-events-none">
<span className="text-[15vw] leading-none font-bold italic uppercase text-white whitespace-nowrap block">CREATORS</span>
</div>
</footer>


    </>
  );
}
