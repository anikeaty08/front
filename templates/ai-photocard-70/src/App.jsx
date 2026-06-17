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
      
<div className="bg-mesh"></div>
<div className="texture-overlay"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/40 bg-white/40 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">

<div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-tr from-fuchsia-500 to-cyan-400 rounded-lg shadow-md group-hover:opacity-90 transition-all">

<div className="w-3.5 h-4.5 bg-white rounded-[2px] shadow-sm"></div>
</div>
<span className="font-heading font-bold text-lg tracking-tight text-slate-800">whosyour<span className="text-fuchsia-500">poca</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wide text-slate-500">
<a className="hover:text-fuchsia-600 hover:drop-shadow-sm transition-all" href="#">Identify</a>
<a className="hover:text-cyan-600 hover:drop-shadow-sm transition-all" href="#">Database</a>
<a className="hover:text-violet-600 hover:drop-shadow-sm transition-all" href="#">Market</a>
</div>
<div className="flex items-center gap-3">
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg shadow-slate-300 transition-all hover:scale-105">
                    Connect Wallet
                </button>
</div>
</div>
</nav>
<main className="relative z-10 pt-40 pb-20 px-6">

<section className="max-w-4xl mx-auto text-center mb-32 relative">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white backdrop-blur-md shadow-sm text-[11px] font-bold uppercase tracking-wider text-violet-600 mb-8 cursor-default hover:scale-105 transition-transform">
<i className="w-3 h-3 fill-violet-400" data-lucide="zap"></i>
<span>AI Recognition V2.4 Live</span>
</div>

<h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1] drop-shadow-sm">
                Complete your <br/>
<span className="gradient-heading text-glow inline-block transform hover:scale-105 transition-transform cursor-default">binder.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium mb-12 max-w-lg mx-auto leading-relaxed">
                The ultimate visual engine for K-pop collectors. Snap, scan, and discover source data in seconds.
            </p>

<div className="relative max-w-lg mx-auto group">

<div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 rounded-[2rem] blur opacity-40 group-hover:opacity-75 transition duration-1000 animate-pulse"></div>
<div className="relative glass-panel rounded-[1.8rem] p-3 shadow-2xl">
<div className="relative overflow-hidden border-2 border-dashed border-white/60 rounded-[1.4rem] bg-white/20 h-52 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer hover:bg-white/30 hover:border-fuchsia-300">

<div className="scan-line opacity-0 group-hover:opacity-100"></div>

<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-lg border border-white flex items-center justify-center text-fuchsia-500 group-hover:scale-110 transition-transform duration-300 z-20">
<i className="w-8 h-8" data-lucide="scan-face"></i>
</div>

<div className="text-center z-20">
<p className="text-base text-slate-800 font-bold font-heading">Upload or Drop Image</p>
<p className="text-xs text-slate-500 mt-1 font-medium">Supports JPG, PNG, HEIC</p>
</div>

<div className="absolute top-4 left-4 w-2 h-2 border-t-2 border-l-2 border-white/80 rounded-tl-sm"></div>
<div className="absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 border-white/80 rounded-tr-sm"></div>
<div className="absolute bottom-4 left-4 w-2 h-2 border-b-2 border-l-2 border-white/80 rounded-bl-sm"></div>
<div className="absolute bottom-4 right-4 w-2 h-2 border-b-2 border-r-2 border-white/80 rounded-br-sm"></div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto mb-32">
<div className="glass-panel rounded-[2.5rem] p-1.5 md:p-3 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-cyan-100/40 to-transparent rounded-full blur-3xl -z-10"></div>
<div className="bg-white/40 backdrop-blur-xl rounded-[2.2rem] p-8 md:p-14 border border-white/60 relative z-10 shadow-sm">
<div className="grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5 space-y-8">
<div>
<h2 className="text-4xl font-extrabold text-slate-800 tracking-tight mb-4 font-heading">It's a match.</h2>
<p className="text-slate-600 font-medium leading-relaxed">
                                    Our visual engine identifies era, version, and market value instantly. No more guessing games.
                                </p>
</div>
<div className="space-y-5">
<div className="glass-card p-4 rounded-xl flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0 border border-fuchsia-200">
<i className="w-5 h-5" data-lucide="database"></i>
</div>
<div>
<h4 className="text-sm font-bold text-slate-800">Metadata Sync</h4>
<p className="text-xs text-slate-500 mt-0.5">Album, Version, Drop Date</p>
</div>
</div>
<div className="glass-card p-4 rounded-xl flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0 border border-cyan-200">
<i className="w-5 h-5" data-lucide="tag"></i>
</div>
<div>
<h4 className="text-sm font-bold text-slate-800">Source ID</h4>
<p className="text-xs text-slate-500 mt-0.5">POB, Lucky Draw, Broadcast</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-white/80 rounded-3xl border border-white p-6 shadow-2xl shadow-indigo-500/10 relative overflow-hidden">

<div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-md">
<img alt="Artist" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Wonyoung&amp;backgroundColor=cffafe"/>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="text-sm font-bold text-slate-800">NewJeans / Hanni</h3>
<i className="w-3.5 h-3.5 text-cyan-500 fill-cyan-50" data-lucide="check-circle-2"></i>
</div>
<p className="text-[10px] font-mono text-slate-400">ID: #NJ-OMG-082</p>
</div>
</div>
<div className="px-2.5 py-1 rounded-md bg-green-50 text-green-600 text-[10px] font-mono font-bold border border-green-100">
                                        99.8% MATCH
                                    </div>
</div>
<div className="grid sm:grid-cols-2 gap-8 items-center">

<div className="relative group mx-auto sm:mx-0 w-full max-w-[220px]">

<div className="toploader holo-sheen aspect-[2.2/3.2] rounded-xl p-3 bg-white/20 backdrop-blur-sm transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]">

<div className="w-full h-full rounded-lg overflow-hidden bg-slate-100 relative shadow-inner border border-white/50">
<img alt="Card Preview" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620553755257-25d259508549?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 mix-blend-overlay"></div>
</div>

<div className="absolute -top-3 -right-3 z-30 transform rotate-12 drop-shadow-md">
<i className="w-8 h-8 text-yellow-400 fill-yellow-200 sparkle-icon" data-lucide="sparkles"></i>
</div>
<div className="absolute -bottom-2 -left-2 z-30 transform -rotate-12 bg-white px-2 py-0.5 rounded-sm border border-slate-200 shadow-sm">
<span className="text-[8px] font-mono font-bold text-slate-400">PC-V2</span>
</div>
</div>

<div className="absolute -bottom-6 left-10 right-10 h-4 bg-fuchsia-400/30 blur-xl rounded-full"></div>
</div>

<div className="flex flex-col justify-center space-y-6">
<div className="relative">
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Source Album</p>

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-fuchsia-50 border border-fuchsia-100 text-xs font-bold text-fuchsia-700 shadow-sm">
<i className="w-3.5 h-3.5" data-lucide="disc-3"></i>
                                                OMG (Message Card Ver.)
                                            </div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Release</p>
<p className="text-sm font-mono text-slate-700">2023.01.02</p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Type</p>
<p className="text-sm font-medium text-slate-700">Album Inclusion</p>
</div>
</div>
<div className="pt-2">
<div className="flex items-end justify-between p-3 rounded-lg bg-slate-50 border border-slate-100 mb-3">
<span className="text-xs text-slate-500 font-medium">Est. Market Value</span>
<span className="text-lg font-mono font-bold text-slate-900">$8.50 - $12.00</span>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl py-3 transition-all hover:shadow-lg flex items-center justify-center gap-2 group-btn">
                                                Add to Collection
                                                <i className="w-3.5 h-3.5 transition-transform group-btn-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-3 font-heading">Everything needed to <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">stan.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-violet-100 to-transparent rounded-bl-full -z-10 transition-transform group-hover:scale-110 duration-700"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">

<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-200 flex items-center justify-center text-white shrink-0 rotate-3 group-hover:rotate-6 transition-transform">
<i className="w-8 h-8" data-lucide="library"></i>
</div>
<div>
<h3 className="text-xl font-bold text-slate-800 mb-2 font-heading">Global Archive</h3>
<p className="text-sm text-slate-600 max-w-md mb-4 font-medium leading-relaxed">
                                Access 500+ groups. We index every version, from debut showcases to limited edition broadcast cards.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-white/50 border border-white text-[10px] font-bold uppercase text-slate-500 tracking-wide">Album PCs</span>
<span className="px-2.5 py-1 rounded-md bg-white/50 border border-white text-[10px] font-bold uppercase text-slate-500 tracking-wide">Pobs</span>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-100 rounded-full blur-2xl -z-10"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-lg shadow-cyan-200 flex items-center justify-center text-white mb-6 -rotate-3 group-hover:-rotate-6 transition-transform">
<i className="w-7 h-7" data-lucide="scan-text"></i>
</div>
<h3 className="text-lg font-bold text-slate-800 mb-2 font-heading">Back Translation</h3>
<p className="text-sm text-slate-600 font-medium leading-relaxed">
                            Scan the back. We translate handwriting and verify KOMCA authenticity markers.
                        </p>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-100 rounded-full blur-2xl -z-10"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-400 to-rose-500 shadow-lg shadow-pink-200 flex items-center justify-center text-white mb-6 rotate-2 group-hover:rotate-6 transition-transform">
<i className="w-7 h-7" data-lucide="zoom-in"></i>
</div>
<h3 className="text-lg font-bold text-slate-800 mb-2 font-heading">Defect Check</h3>
<p className="text-sm text-slate-600 font-medium leading-relaxed">
                            Compare with HD references to spot manufacturing defects or scratches.
                        </p>
</div>
</div>

<div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group flex items-center justify-between">
<div className="relative z-10 max-w-md">
<h3 className="text-xl font-bold text-slate-800 mb-1 font-heading">Missing a card?</h3>
<p className="text-sm text-slate-600 font-medium">Submit new discoveries to the blockchain database.</p>
</div>
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-colors cursor-pointer">
<i className="w-6 h-6" data-lucide="plus"></i>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/40 bg-white/30 backdrop-blur-md relative z-10">
<div className="max-w-7xl mx-auto py-12 px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center">
<div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
</div>
<span className="text-slate-500 text-xs font-bold uppercase tracking-widest">© 2024 Whos Your Poca</span>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-fuchsia-500 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-fuchsia-500 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-fuchsia-500 transition-colors" href="#"><i className="w-5 h-5" data-lucide="message-circle"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
