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
slate: {
850: '#151b2e',
900: '#0f172a',
950: '#020617',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">

<div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
<div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-[6px]"></div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[120%] -ml-[10%] opacity-40 grayscale-[20%] scale-105">

<div className="marquee-up flex flex-col gap-4">

<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1616002411355-49593fd89721?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1616002411355-49593fd89721?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="marquee-down flex flex-col gap-4 mt-[-200px]">
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1604680875705-021c17852c03?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1604680875705-021c17852c03?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="marquee-up hidden md:flex flex-col gap-4">
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1545912453-db258ca9b7b7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1604882737321-e693796f7e9f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1545912453-db258ca9b7b7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="marquee-down hidden md:flex flex-col gap-4 mt-[-150px]">
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1611558709796-ca563a79eb78?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1516726817505-f5ed8259b4fb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1521406606869-93e17924d621?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1611558709796-ca563a79eb78?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[9/16] object-cover rounded-lg" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-fuchsia-600 to-indigo-600 flex items-center justify-center text-white text-[10px] font-semibold tracking-tighter">L</div>
<span className="text-white font-medium tracking-tight">LURE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="hover:text-white transition-colors" href="#">Vision AI</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Manifesto</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Login</a>
<a className="bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors" href="#">Get Access</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden">
<div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-xs text-fuchsia-300 mb-8 shadow-[0_0_15px_rgba(232,121,249,0.3)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
</span>
                LIVE: AI Aesthetics Model v2.4
            </div>
<h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-6 leading-[1] drop-shadow-2xl">
                Baddies? <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">View them. Free.</span>
</h1>
<p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto font-light leading-relaxed drop-shadow-md">
                The only automated archiver with AI vision. We detect 10/10 aesthetics and auto-save the best content. Filter the noise, keep the vibe.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-16">
<div className="relative group w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="w-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-sm rounded-lg block pl-10 p-3 focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 placeholder-slate-500 transition-all outline-none group-hover:border-white/30 shadow-lg" placeholder="Enter username or hashtag..." type="text"/>
</div>
<button className="w-full sm:w-auto px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Scan Feed
                </button>
</div>

<div className="relative max-w-3xl mx-auto perspective-[2000px]">

<div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 rounded-2xl blur-xl opacity-40 animate-pulse-slow"></div>
<div className="relative glass rounded-xl border border-white/10 p-1 shadow-2xl overflow-hidden transform rotate-x-6 transition-transform hover:rotate-x-0 duration-700">

<div className="h-10 border-b border-white/5 bg-black/60 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-auto flex items-center gap-3 text-xs text-slate-400">
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse"></span>
                                AI Scanning
                            </div>
</div>
</div>

<div className="bg-black/80 p-4">
<div className="flex justify-between items-end mb-4">
<div>
<h3 className="text-white text-sm font-medium">Feed Analysis</h3>
<p className="text-xs text-slate-500">Filter: "Baddie" (Strict Mode)</p>
</div>
<div className="flex gap-2">
<div className="px-2 py-1 rounded bg-fuchsia-500/10 border border-fuchsia-500/20 text-[10px] text-fuchsia-400 flex items-center gap-1 font-medium">
<iconify-icon icon="lucide:flame" strokeWidth="1.5" width="12"></iconify-icon>
                                    Only 10s
                                </div>
</div>
</div>

<div className="grid grid-cols-12 gap-4 text-[10px] uppercase tracking-wider text-slate-500 border-b border-white/5 pb-2 mb-2 font-medium">
<div className="col-span-5">Source</div>
<div className="col-span-3">Tags</div>
<div className="col-span-2">Rating</div>
<div className="col-span-2 text-right">Status</div>
</div>

<div className="space-y-1">

<div className="grid grid-cols-12 gap-4 items-center p-2 rounded hover:bg-white/5 transition-colors group cursor-default border border-transparent hover:border-white/5">
<div className="col-span-5 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-fuchsia-900/50 border border-fuchsia-500/30 flex items-center justify-center text-xs text-white overflow-hidden">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs">
<div className="text-white font-medium">@miami_angel</div>
<div className="text-slate-500 text-[10px] flex items-center gap-1"><iconify-icon icon="lucide:music-2" width="8"></iconify-icon> Viral Sound</div>
</div>
</div>
<div className="col-span-3 flex gap-1">
<span className="px-1.5 py-0.5 rounded border border-fuchsia-500/20 bg-fuchsia-500/10 text-[10px] text-fuchsia-300">Dance</span>
<span className="px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] text-slate-400">Fit</span>
</div>
<div className="col-span-2">
<div className="flex items-center gap-1 text-fuchsia-400 text-xs font-bold">
<iconify-icon icon="lucide:sparkles" width="10"></iconify-icon>
                                        10.0
                                    </div>
<div className="w-12 h-0.5 bg-slate-800 rounded-full mt-1 overflow-hidden">
<div className="h-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 w-full"></div>
</div>
</div>
<div className="col-span-2 text-right">
<iconify-icon className="text-emerald-400" icon="lucide:check" width="14"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-12 gap-4 items-center p-2 rounded transition-colors opacity-40">
<div className="col-span-5 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400">AD</div>
<div className="text-xs">
<div className="text-slate-300 font-medium">@crypto_king</div>
<div className="text-slate-500 text-[10px]">Sponsored</div>
</div>
</div>
<div className="col-span-3 flex gap-1">
<span className="px-1.5 py-0.5 rounded border border-red-500/10 bg-red-500/5 text-[10px] text-red-400">Spam</span>
</div>
<div className="col-span-2">
<div className="text-slate-500 text-xs font-medium">0.2</div>
</div>
<div className="col-span-2 text-right">
<iconify-icon className="text-red-500" icon="lucide:x" width="14"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-12 gap-4 items-center p-2 rounded hover:bg-white/5 transition-colors group cursor-default border border-transparent hover:border-white/5">
<div className="col-span-5 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-xs text-white overflow-hidden">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs">
<div className="text-white font-medium">@jess_xoxo</div>
<div className="text-slate-500 text-[10px]">Outfit check</div>
</div>
</div>
<div className="col-span-3 flex gap-1">
<span className="px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] text-slate-400">Fashion</span>
</div>
<div className="col-span-2">
<div className="flex items-center gap-1 text-indigo-400 text-xs font-medium">
                                        9.8
                                    </div>
<div className="w-12 h-0.5 bg-slate-800 rounded-full mt-1 overflow-hidden">
<div className="h-full bg-indigo-500 w-[98%]"></div>
</div>
</div>
<div className="col-span-2 text-right">
<iconify-icon className="text-emerald-400" icon="lucide:check" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 bg-black/90 border-t border-white/5 relative z-20 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl border border-white/5 bg-slate-950/50 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:scan-face" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Baddie Recognition</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Our proprietary ML model scores content based on fit, lighting, and vibe. Set your threshold to 10/10.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-slate-950/50 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:filter" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">No Noise. Just Views.</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Automatically ignores "buy my course" text slides, forex charts, and blurry reposts.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-slate-950/50 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:eye-off" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Ghost Viewer</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        View and download stories in high-definition anonymously. You never appear in the "Seen" list.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-black z-20">
<div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                    Control your <br/>curation.
                </h2>
<p className="text-slate-400 mb-8 text-sm leading-relaxed">
                    Fine-tune the algorithm. Decide exactly what constitutes a "10" and what gets filtered out.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-fuchsia-500 mt-0.5" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm text-slate-300">Outfit &amp; Fit Check Detection</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-fuchsia-500 mt-0.5" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm text-slate-300">Text-heavy story filter (removes Q&amp;A)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-fuchsia-500 mt-0.5" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm text-slate-300">Video vs Photo prioritization</span>
</li>
</ul>
</div>

<div className="bg-slate-900 border border-white/5 rounded-xl p-6 relative shadow-2xl">
<div className="space-y-6">

<div>
<div className="flex justify-between mb-2">
<label className="text-xs font-medium text-white">Vibe Score Threshold</label>
<span className="text-xs text-fuchsia-400 font-mono">9.5/10</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden relative group cursor-pointer">
<div className="absolute w-full h-full bg-slate-800"></div>
<div className="absolute h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 w-[95%]"></div>
<div className="absolute h-4 w-4 bg-white rounded-full shadow top-1/2 -translate-y-1/2 left-[95%] -ml-2 cursor-grab"></div>
</div>
</div>

<div className="flex items-center justify-between py-2 border-b border-white/5">
<div>
<div className="text-xs font-medium text-white">Ad Blocker</div>
<div className="text-[10px] text-slate-500">Block promo codes &amp; links</div>
</div>
<button className="w-10 h-5 bg-fuchsia-600 rounded-full relative transition-colors focus:outline-none">
<span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-transform"></span>
</button>
</div>

<div className="flex items-center justify-between py-2">
<div>
<div className="text-xs font-medium text-white">Ghost Mode</div>
<div className="text-[10px] text-slate-500">Hide view status</div>
</div>
<button className="w-10 h-5 bg-fuchsia-600 rounded-full relative transition-colors focus:outline-none">
<span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-transform"></span>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-12 bg-black z-20 relative">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center text-white text-[9px] font-semibold">L</div>
<span className="text-sm text-slate-400 font-medium">Lure Inc.</span>
</div>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
<div className="text-xs text-slate-600">
                © 2023 Lure. All vibes reserved.
            </div>
</div>
</footer>

    </>
  );
}
