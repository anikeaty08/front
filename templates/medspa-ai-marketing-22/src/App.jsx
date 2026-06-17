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
850: '#151e2e',
950: '#020617',
},
primary: {
500: '#e11d48', // Rose 600
600: '#be123c', // Rose 700
700: '#9f1239', // Rose 800
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">

<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-900/20 rounded-full blur-[120px] ambient-orb"></div>

<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-900/10 rounded-full blur-[120px] ambient-orb" style={{animationDelay: '-5s'}}></div>

<div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-red-900/10 rounded-full blur-[100px] ambient-orb" style={{animationDelay: '-10s'}}></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none">
<svg className="w-full h-full fill-rose-500" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="40"></circle>
</svg>
</div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="relative w-8 h-8 flex items-center justify-center">

<svg className="w-full h-full drop-shadow-[0_0_8px_rgba(225,29,72,0.5)]" viewbox="0 0 100 100">
<defs>
<lineargradient id="orbGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#fb7185"></stop> 
<stop offset="100%" stop-color="#9f1239"></stop> 
</lineargradient>
</defs>
<circle cx="50" cy="50" fill="url(#orbGrad)" r="48"></circle>

<path d="M50 2 A48 48 0 0 1 50 98 M2 50 A48 48 0 0 1 98 50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"></path>
<path d="M15 15 L85 85 M85 15 L15 85" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"></path>
<circle cx="50" cy="50" fill="url(#orbGrad)" r="48" style={{mixBlendMode: 'overlay'}}></circle>
</svg>
</div>
<span className="text-white text-xl font-bold tracking-[-0.05em] uppercase">Lychee Labs</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-primary-500 transition-colors" href="#browse">Browse Ads</a>
<a className="hover:text-primary-500 transition-colors" href="#solutions">Pricing</a>
<a className="hover:text-primary-500 transition-colors" href="#ai-demo">AI Demo</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-slate-400 hover:text-white uppercase tracking-wider" href="#">Log in</a>
<a className="bg-white text-slate-950 px-5 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider hover:bg-slate-200 transition-colors" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-16 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="text-center max-w-4xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-500 text-[10px] font-bold uppercase tracking-wider mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
                    New AI Engine v2.0 Live
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                    Data-Driven MedSpa Growth.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-600">Powered by Lychee Labs.</span>
</h1>
<p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    Deploy high-performing Hydrafacial campaigns and let our AI Agent handle the bookings instantly.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-primary-600 hover:bg-primary-500 text-white px-8 py-3.5 rounded-sm font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-900/20 group">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
                        Launch Campaign
                    </button>
<button className="w-full sm:w-auto bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 px-8 py-3.5 rounded-sm font-medium transition-all flex items-center justify-center gap-2">
                        View Case Studies
                    </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
<div className="relative bg-slate-900 rounded-lg overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">

<img alt="Hydrafacial Treatment" className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition duration-500" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>

<div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-2 py-1 rounded border border-white/10">
<span className="text-white text-xs font-medium flex items-center gap-2">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                Top Performer: Hydrafacial Glow
                            </span>
</div>
<div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
<h3 className="text-lg text-white font-medium">Hydrafacial: Glass Skin V3</h3>
<div className="flex items-center gap-4 mt-2">
<div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-rose-500 rounded-full"></div>
</div>
<span className="text-xs text-slate-300 whitespace-nowrap">0:14 / 0:45</span>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px]" id="ai-demo">
<div className="absolute -inset-0.5 bg-gradient-to-b from-slate-700 to-slate-800 rounded-xl opacity-50"></div>
<div className="relative h-full bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-lg flex flex-col shadow-2xl overflow-hidden">

<div className="p-4 border-b border-white/5 bg-slate-900 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-2 h-2 absolute bottom-0 right-0 bg-green-500 rounded-full border border-slate-900"></div>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="bot"></i>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-white">Lychee AI Agent</h3>
<p className="text-[10px] text-slate-400">Typically replies instantly</p>
</div>
</div>
<button className="text-xs bg-white/5 hover:bg-white/10 text-white px-2 py-1 rounded transition">Clear Chat</button>
</div>

<div className="flex-1 p-4 space-y-4 overflow-y-auto" id="chat-container">

<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-slate-800 flex-shrink-0 flex items-center justify-center mt-1 border border-white/10">
<i className="w-3 h-3 text-slate-400" data-lucide="bot"></i>
</div>
<div className="bg-slate-800 border border-white/5 text-slate-300 text-sm p-3 rounded-2xl rounded-tl-none max-w-[85%]">
<p>Hello! I noticed you were interested in the Hydrafacial special. Would you like to check availability for this week?</p>
</div>
</div>

<div className="flex gap-3 justify-end">
<div className="bg-primary-600 text-white text-sm p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-lg shadow-rose-900/20">
<p>Yes, do you have anything on Friday?</p>
</div>
</div>

<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-slate-800 flex-shrink-0 flex items-center justify-center mt-1 border border-white/10">
<i className="w-3 h-3 text-slate-400" data-lucide="bot"></i>
</div>
<div className="bg-slate-800 border border-white/5 p-3 rounded-2xl rounded-tl-none w-16 flex items-center justify-center gap-1">
<div className="w-1.5 h-1.5 bg-slate-500 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-slate-500 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-slate-500 rounded-full typing-dot"></div>
</div>
</div>
</div>

<div className="p-3 bg-slate-900 border-t border-white/5">
<div className="relative">
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors placeholder:text-slate-600" placeholder="Type your response to test..." type="text"/>
<button className="absolute right-2 top-2 p-1 bg-primary-600 hover:bg-primary-500 rounded text-white transition-colors">
<i className="w-4 h-4" data-lucide="send-horizontal"></i>
</button>
</div>
<div className="text-center mt-2">
<span className="text-[10px] text-slate-500">AI trained on 50k+ medspa conversations.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 pb-24 relative z-10" id="browse">
<div className="max-w-[1400px] mx-auto px-6 space-y-12">

<div>
<div className="flex items-end justify-between mb-4 px-1">
<h2 className="text-xl text-white font-medium tracking-tight">Trending Aesthetics Ads</h2>
<div className="flex gap-2">
<button className="p-2 hover:bg-white/10 rounded-full transition"><i className="w-4 h-4 text-white" data-lucide="chevron-left"></i></button>
<button className="p-2 hover:bg-white/10 rounded-full transition"><i className="w-4 h-4 text-white" data-lucide="chevron-right"></i></button>
</div>
</div>

<div className="flex overflow-x-auto gap-4 pb-8 no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">

<div className="flex-none w-[280px] md:w-[320px] snap-center netflix-card group relative">
<div className="aspect-video bg-slate-800 rounded-md overflow-hidden relative cursor-pointer border border-white/5">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100"></div>
<div className="absolute bottom-3 left-3 right-3">
<h3 className="text-white font-medium text-sm drop-shadow-md">Glass Skin V2</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-green-400 text-xs font-medium">98% Conv. Rate</span>
<span className="border border-white/20 px-1 py-0.5 rounded text-[10px] text-white">HD</span>
</div>
</div>
</div>
<div className="mt-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-10 left-0 w-full z-20">
<button className="bg-white text-black p-1.5 rounded-full"><i className="w-3 h-3 fill-current" data-lucide="play"></i></button>
<button className="bg-slate-800 border border-white/20 text-white p-1.5 rounded-full"><i className="w-3 h-3" data-lucide="plus"></i></button>
<button className="bg-slate-800 border border-white/20 text-white p-1.5 rounded-full ml-auto"><i className="w-3 h-3" data-lucide="chevron-down"></i></button>
</div>
</div>

<div className="flex-none w-[280px] md:w-[320px] snap-center netflix-card group relative">
<div className="aspect-video bg-slate-800 rounded-md overflow-hidden relative cursor-pointer border border-white/5">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100"></div>
<div className="absolute bottom-3 left-3 right-3">
<h3 className="text-white font-medium text-sm drop-shadow-md">Hydrafacial: Glow</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-green-400 text-xs font-medium">95% Conv. Rate</span>
<span className="border border-white/20 px-1 py-0.5 rounded text-[10px] text-white">4K</span>
</div>
</div>
</div>
<div className="mt-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-10 left-0 w-full z-20">
<button className="bg-white text-black p-1.5 rounded-full"><i className="w-3 h-3 fill-current" data-lucide="play"></i></button>
<button className="bg-slate-800 border border-white/20 text-white p-1.5 rounded-full"><i className="w-3 h-3" data-lucide="plus"></i></button>
<button className="bg-slate-800 border border-white/20 text-white p-1.5 rounded-full ml-auto"><i className="w-3 h-3" data-lucide="chevron-down"></i></button>
</div>
</div>

<div className="flex-none w-[280px] md:w-[320px] snap-center netflix-card group relative">
<div className="aspect-video bg-slate-800 rounded-md overflow-hidden relative cursor-pointer border border-white/5">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100"></div>
<div className="absolute top-2 right-2 bg-primary-600 px-1.5 py-0.5 rounded text-[10px] font-bold text-white tracking-wide">NEW</div>
<div className="absolute bottom-3 left-3 right-3">
<h3 className="text-white font-medium text-sm drop-shadow-md">Botox Lifestyle</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-green-400 text-xs font-medium">92% Conv. Rate</span>
<span className="border border-white/20 px-1 py-0.5 rounded text-[10px] text-white">HD</span>
</div>
</div>
</div>
<div className="mt-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-10 left-0 w-full z-20">
<button className="bg-white text-black p-1.5 rounded-full"><i className="w-3 h-3 fill-current" data-lucide="play"></i></button>
<button className="bg-slate-800 border border-white/20 text-white p-1.5 rounded-full"><i className="w-3 h-3" data-lucide="plus"></i></button>
<button className="bg-slate-800 border border-white/20 text-white p-1.5 rounded-full ml-auto"><i className="w-3 h-3" data-lucide="chevron-down"></i></button>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-end justify-between mb-4 px-1">
<h2 className="text-xl text-white font-medium tracking-tight">Top Performing Vertical Reels</h2>
</div>
<div className="flex overflow-x-auto gap-4 pb-8 no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">

<div className="flex-none w-[160px] md:w-[200px] snap-center netflix-card group relative">

<span className="absolute -left-4 top-0 text-[100px] font-bold text-slate-800/50 leading-none -z-10 font-serif italic">1</span>
<div className="aspect-[9/16] bg-slate-800 rounded-md overflow-hidden relative cursor-pointer border border-white/5 shadow-lg">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100"></div>
<div className="absolute top-2 left-2">
<div className="w-6 h-6 bg-white/10 backdrop-blur rounded-full flex items-center justify-center">
<span className="text-[10px] font-bold text-white">1</span>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 text-center">
<button className="bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider w-full hover:bg-slate-200">Deploy</button>
</div>
</div>
</div>

<div className="flex-none w-[160px] md:w-[200px] snap-center netflix-card group relative">
<span className="absolute -left-4 top-0 text-[100px] font-bold text-slate-800/50 leading-none -z-10 font-serif italic">2</span>
<div className="aspect-[9/16] bg-slate-800 rounded-md overflow-hidden relative cursor-pointer border border-white/5 shadow-lg">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100"></div>
<div className="absolute top-2 left-2">
<div className="w-6 h-6 bg-white/10 backdrop-blur rounded-full flex items-center justify-center">
<span className="text-[10px] font-bold text-white">2</span>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 text-center">
<button className="bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider w-full hover:bg-slate-200">Deploy</button>
</div>
</div>
</div>

<div className="flex-none w-[160px] md:w-[200px] snap-center netflix-card group relative">
<span className="absolute -left-4 top-0 text-[100px] font-bold text-slate-800/50 leading-none -z-10 font-serif italic">3</span>
<div className="aspect-[9/16] bg-slate-800 rounded-md overflow-hidden relative cursor-pointer border border-white/5 shadow-lg">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100"></div>
<div className="absolute top-2 left-2">
<div className="w-6 h-6 bg-white/10 backdrop-blur rounded-full flex items-center justify-center">
<span className="text-[10px] font-bold text-white">3</span>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 text-center">
<button className="bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider w-full hover:bg-slate-200">Deploy</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-y border-white/5 relative z-10" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Choose Your Plan</h2>
<p className="text-lg text-slate-400">Monthly subscriptions to the creative vault.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="glass-panel p-8 rounded-lg flex flex-col hover:bg-white/5 transition duration-300">
<div className="mb-6">
<span className="text-primary-500 font-bold uppercase text-xs tracking-wider">Basic Access</span>
<h3 className="text-2xl font-semibold text-white mt-2 mb-2">The Asset Drop</h3>
<p className="text-slate-400 text-sm">Just the winning creatives.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-primary-500 mt-0.5" data-lucide="check"></i>
                            Raw Video Files (4K)
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-primary-500 mt-0.5" data-lucide="check"></i>
                            Proven Ad Copy Scripts
                        </li>
</ul>
<button className="w-full border border-slate-600 hover:border-white text-white font-medium py-3 rounded-sm transition-colors text-sm uppercase tracking-wide">
                        Subscribe
                    </button>
</div>

<div className="relative bg-slate-900 p-8 rounded-lg flex flex-col border border-primary-500/50 shadow-[0_0_40px_rgba(225,29,72,0.15)]">
<div className="absolute top-0 right-0 bg-primary-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg tracking-wider">Most Popular</div>
<div className="mb-6">
<span className="text-primary-400 font-bold uppercase text-xs tracking-wider">Premium</span>
<h3 className="text-2xl font-semibold text-white mt-2 mb-2">The Full Stack</h3>
<p className="text-slate-400 text-sm">Total automation for scaling.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-4 h-4 text-primary-500 mt-0.5" data-lucide="check"></i>
<span className="font-medium">Everything in Asset Drop</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-primary-500 mt-0.5" data-lucide="check"></i>
                            AI Booking Agent (Unlimited)
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-primary-500 mt-0.5" data-lucide="check"></i>
                            CRM Pipeline Installation
                        </li>
</ul>
<button className="w-full bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 rounded-sm transition-colors shadow-lg shadow-primary-900/50 text-sm uppercase tracking-wide">
                        Get Started
                    </button>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-slate-950 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-white font-bold text-sm uppercase tracking-tight">Lychee Labs</span>
<span className="text-slate-600 text-xs px-2 border-l border-slate-800">Growth Data Inc.</span>
</div>
<div className="flex gap-8 text-xs font-medium text-slate-500 uppercase tracking-wide">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Legal</a>
</div>
</div>
</footer>


    </>
  );
}
