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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white py-6 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
<a className="font-display text-xl tracking-tighter font-semibold" href="#">RAMOND</a>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase">
<a className="hover:opacity-50 transition-opacity" href="#portfolio">Portfolio</a>
<a className="hover:opacity-50 transition-opacity" href="#interiors">Interiors</a>
<a className="hover:opacity-50 transition-opacity" href="#ventures">Ventures</a>
</div>
<button className="flex items-center gap-2 group">
<span className="text-xs uppercase tracking-widest group-hover:opacity-50 transition-opacity">Menu</span>
<div className="space-y-1">
<span className="block w-4 h-[1px] bg-white group-hover:w-6 transition-all duration-300"></span>
<span className="block w-4 h-[1px] bg-white group-hover:w-2 transition-all duration-300 ml-auto"></span>
</div>
</button>
</nav>

<header className="relative h-screen w-full flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 border-b border-white/5 overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-800/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-900/5 rounded-full blur-[150px] pointer-events-none"></div>
<div className="max-w-screen-2xl w-full mx-auto relative z-10 h-full flex flex-col justify-center">
<div className="space-y-8">
<div className="flex items-center gap-4 text-xs font-medium text-stone-500 uppercase tracking-[0.3em] animate-pulse">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    Est. 1998
                </div>
<h1 className="font-display text-5xl md:text-7xl lg:text-9xl text-stone-100 leading-[0.9] tracking-tight">
                    Timeless <br/>
<span className="text-stone-700">Assets</span>, Modern <br/>
<span className="italic font-serif text-stone-100">Velocity</span>.
                </h1>
</div>
</div>
<div className="max-w-screen-2xl w-full mx-auto flex justify-between items-end relative z-10">
<p className="max-w-xs text-sm text-stone-500 leading-relaxed font-light">
                Curating a portfolio of architectural landmarks and high-yield ventures across the globe.
            </p>
<div className="animate-bounce text-stone-600">
<i className="w-6 h-6" data-lucide="arrow-down"></i>
</div>
</div>
</header>

<div className="border-b border-white/5 py-4 overflow-hidden bg-[#050505]">
<div className="whitespace-nowrap animate-marquee flex items-center gap-16 text-stone-800 text-sm md:text-base font-display uppercase tracking-widest">
<span>New York</span> <span>London</span> <span>Singapore</span> <span>Dubai</span> <span>Tokyo</span> <span>Paris</span>
<span>New York</span> <span>London</span> <span>Singapore</span> <span>Dubai</span> <span>Tokyo</span> <span>Paris</span>
<span>New York</span> <span>London</span> <span>Singapore</span> <span>Dubai</span> <span>Tokyo</span> <span>Paris</span>
<span>New York</span> <span>London</span> <span>Singapore</span> <span>Dubai</span> <span>Tokyo</span> <span>Paris</span>
</div>
</div>

<section className="relative border-b border-white/5" id="portfolio">
<div className="flex flex-col lg:flex-row">

<div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 p-6 md:p-12 flex flex-col justify-center border-r border-white/5 bg-[#050505] z-10">
<span className="text-xs text-orange-500 uppercase tracking-widest mb-6 block">The Portfolio</span>
<h2 className="text-3xl md:text-5xl font-display text-white mb-6 leading-tight">Built for<br/>Generations.</h2>
<p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-sm">
                    Our approach to asset management combines rigorous analytical precision with an artist's appreciation for form and space. We don't just hold assets; we elevate them through architectural provenance and strategic location.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 text-xs text-stone-400 font-mono">
<span className="w-12 h-[1px] bg-stone-700"></span>
<span>RESIDENTIAL</span>
</div>
<div className="flex items-center gap-4 text-xs text-stone-400 font-mono">
<span className="w-12 h-[1px] bg-stone-700"></span>
<span>COMMERCIAL</span>
</div>
<div className="flex items-center gap-4 text-xs text-stone-400 font-mono">
<span className="w-12 h-[1px] bg-stone-700"></span>
<span>INDUSTRIAL</span>
</div>
</div>
</div>

<div className="lg:w-2/3 bg-[#080808]">

<div className="group relative min-h-screen flex items-center p-6 md:p-16 border-b border-white/5 hover:bg-[#0a0a0a] transition-colors duration-500">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors">01. The Meridian</h3>
<span className="text-xs font-mono text-stone-600">NYC / 2023</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
<img alt="Building" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase">76 Units • Ultra Luxury</p>
<p className="text-stone-300 font-mono text-xs">$1.2B Valuation</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6">
<p className="text-stone-500 text-sm max-w-md">A vertical city designed to redefine the Manhattan skyline. Featuring biophilic terraces and autonomous vehicle integration.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>

<div className="group relative min-h-screen flex items-center p-6 md:p-16 border-b border-white/5 hover:bg-[#0a0a0a] transition-colors duration-500">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors">02. Casa Bruta</h3>
<span className="text-xs font-mono text-stone-600">MX / 2022</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
<img alt="Concrete House" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase">Private Estate • Brutalist</p>
<p className="text-stone-300 font-mono text-xs">Coastal Reserve</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6">
<p className="text-stone-500 text-sm max-w-md">Raw concrete meets lush jungle in this private retreat. An study in sustainable brutalism and integration with nature.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>

<div className="group relative min-h-screen flex items-center p-6 md:p-16 border-b border-white/5 hover:bg-[#0a0a0a] transition-colors duration-500">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors">03. Aeon Tower</h3>
<span className="text-xs font-mono text-stone-600">JP / 2024</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
<img alt="Skyscraper" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase">Mixed Use • Commercial</p>
<p className="text-stone-300 font-mono text-xs">Shinjuku District</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6">
<p className="text-stone-500 text-sm max-w-md">The heartbeat of Tokyo's new financial district. LEED Platinum certified with integrated transit hubs.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>

<div className="group relative min-h-screen flex items-center p-6 md:p-16 border-b border-white/5 hover:bg-[#0a0a0a] transition-colors duration-500">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors">04. The Silo</h3>
<span className="text-xs font-mono text-stone-600">CPH / 2023</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
<img alt="Modern Architecture" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase">Adaptive Reuse • Residential</p>
<p className="text-stone-300 font-mono text-xs">Design Award '23</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6">
<p className="text-stone-500 text-sm max-w-md">Transforming industrial heritage into contemporary living spaces. Preserving history while embracing the future.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>

<div className="group relative min-h-screen flex items-center p-6 md:p-16 border-b border-white/5 hover:bg-[#0a0a0a] transition-colors duration-500">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors">05. Onyx Heights</h3>
<span className="text-xs font-mono text-stone-600">DXB / 2025</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
<img alt="Modern Dark Building" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase">Commercial • HQ</p>
<p className="text-stone-300 font-mono text-xs">Pre-Leased</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6">
<p className="text-stone-500 text-sm max-w-md">A monolithic black glass structure serving as the regional headquarters for global fintech firms.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative h-[60vh] w-full overflow-hidden">
<div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
<h2 className="text-4xl md:text-6xl font-display text-white tracking-tight text-center px-4">
                Architecture as <br/> <span className="italic font-serif">Asset Class.</span>
</h2>
</div>
<img alt="Abstract Architecture" className="w-full h-full object-cover fixed-attachment" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<section className="py-24 bg-[#050505] border-b border-white/5" id="interiors">
<div className="px-6 md:px-12 mb-12 flex justify-between items-end">
<div>
<span className="text-xs text-orange-500 uppercase tracking-widest mb-2 block">Inner Sanctums</span>
<h2 className="text-3xl md:text-4xl font-display text-white">Interior Design</h2>
</div>
<div className="hidden md:flex gap-4">
<span className="text-xs text-stone-500 uppercase tracking-widest self-center">Scroll</span>
<i className="w-5 h-5 text-stone-500 animate-pulse" data-lucide="arrow-right"></i>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-2 px-6 md:px-12 pb-8 hide-scrollbar">

<div className="min-w-[80vw] md:min-w-[45vw] snap-center group relative aspect-[16/9] overflow-hidden bg-stone-900">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 z-10">
<span className="px-3 py-1 bg-black/50 backdrop-blur text-white text-[10px] uppercase tracking-wider border border-white/10">The Lounge • Meridian</span>
</div>
</div>

<div className="min-w-[80vw] md:min-w-[45vw] snap-center group relative aspect-[16/9] overflow-hidden bg-stone-900">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 z-10">
<span className="px-3 py-1 bg-black/50 backdrop-blur text-white text-[10px] uppercase tracking-wider border border-white/10">Penthouse • Aeon</span>
</div>
</div>

<div className="min-w-[80vw] md:min-w-[45vw] snap-center group relative aspect-[16/9] overflow-hidden bg-stone-900">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 z-10">
<span className="px-3 py-1 bg-black/50 backdrop-blur text-white text-[10px] uppercase tracking-wider border border-white/10">Lobby • Onyx</span>
</div>
</div>

<div className="min-w-[80vw] md:min-w-[45vw] snap-center group relative aspect-[16/9] overflow-hidden bg-stone-900">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 z-10">
<span className="px-3 py-1 bg-black/50 backdrop-blur text-white text-[10px] uppercase tracking-wider border border-white/10">Studio • Casa Bruta</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#050505] border-b border-white/5">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
<div>
<span className="text-xs text-stone-500 uppercase tracking-widest mb-6 block">The Philosophy</span>
<h3 className="text-3xl font-display text-white leading-tight mb-8">
                    We believe in the "Spatial Integrity" of capital.
                </h3>
</div>
<div className="space-y-8">
<p className="text-stone-400 text-sm leading-7">
                    In an era of digital abstraction, the tangible value of well-positioned real estate remains the bedrock of wealth preservation. Ramond Holdings operates at the intersection of high finance and high design. We identify undervalued assets in gateway cities and unlock their potential through rigorous architectural intervention.
                </p>
<p className="text-stone-400 text-sm leading-7">
                    Our team consists of former investment bankers, Pritzker-prize winning architects, and urban planners. This multidisciplinary approach allows us to see value where others see only concrete.
                </p>
<div className="flex gap-12 border-t border-white/10 pt-8 mt-8">
<div>
<span className="block text-3xl font-display text-white mb-1">24%</span>
<span className="text-xs text-stone-600 uppercase tracking-widest">Avg IRR</span>
</div>
<div>
<span className="block text-3xl font-display text-white mb-1">0%</span>
<span className="text-xs text-stone-600 uppercase tracking-widest">Vacancy</span>
</div>
<div>
<span className="block text-3xl font-display text-white mb-1">12</span>
<span className="text-xs text-stone-600 uppercase tracking-widest">Global Hubs</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-[#050505] overflow-hidden" id="ventures">
<div className="px-6 md:px-12 mb-12 flex justify-between items-end">
<div>
<span className="text-xs text-orange-500 uppercase tracking-widest mb-2 block">Ventures</span>
<h2 className="text-3xl md:text-4xl font-display text-white">Strategic Growth</h2>
</div>
<div className="hidden md:flex gap-2">
<button className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-stone-400">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-stone-400">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 hide-scrollbar">

<div className="min-w-[85vw] md:min-w-[400px] snap-center bg-stone-900/30 border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-all cursor-pointer">
<div className="mb-12">
<div className="w-10 h-10 bg-orange-900/20 text-orange-500 rounded flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-xl font-display text-white mb-3">Equity Fund I</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed">
                        Focused on early-stage proptech startups revolutionizing how we interact with physical spaces.
                    </p>
</div>
<div className="flex justify-between items-center text-xs font-mono text-stone-600 border-t border-white/5 pt-4">
<span>$500M AUM</span>
<span className="group-hover:text-white transition-colors">Details ⤨</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center bg-stone-900/30 border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-all cursor-pointer">
<div className="mb-12">
<div className="w-10 h-10 bg-blue-900/20 text-blue-500 rounded flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="globe-2"></i>
</div>
<h3 className="text-xl font-display text-white mb-3">Global Logistics</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed">
                        Acquiring key infrastructure nodes to support the next generation of global supply chain demands.
                    </p>
</div>
<div className="flex justify-between items-center text-xs font-mono text-stone-600 border-t border-white/5 pt-4">
<span>12 Markets</span>
<span className="group-hover:text-white transition-colors">Details ⤨</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center bg-stone-900/30 border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-all cursor-pointer">
<div className="mb-12">
<div className="w-10 h-10 bg-emerald-900/20 text-emerald-500 rounded flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="sprout"></i>
</div>
<h3 className="text-xl font-display text-white mb-3">Green Bond II</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed">
                        Sustainable development financing for projects achieving net-zero carbon certification.
                    </p>
</div>
<div className="flex justify-between items-center text-xs font-mono text-stone-600 border-t border-white/5 pt-4">
<span>Target 15% IRR</span>
<span className="group-hover:text-white transition-colors">Details ⤨</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center bg-stone-900/30 border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-all cursor-pointer">
<div className="mb-12">
<div className="w-10 h-10 bg-purple-900/20 text-purple-500 rounded flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-display text-white mb-3">Hospitality REIT</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed">
                        A curated collection of boutique hotels in high-barrier-to-entry heritage locations.
                    </p>
</div>
<div className="flex justify-between items-center text-xs font-mono text-stone-600 border-t border-white/5 pt-4">
<span>24 Assets</span>
<span className="group-hover:text-white transition-colors">Details ⤨</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center bg-stone-900/30 border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-all cursor-pointer">
<div className="mb-12">
<div className="w-10 h-10 bg-rose-900/20 text-rose-500 rounded flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-xl font-display text-white mb-3">Urban Renewal</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed">
                        Partnerships with local governments to revitalize historic districts through mixed-use zoning.
                    </p>
</div>
<div className="flex justify-between items-center text-xs font-mono text-stone-600 border-t border-white/5 pt-4">
<span>Public/Private</span>
<span className="group-hover:text-white transition-colors">Details ⤨</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center bg-stone-900/30 border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-all cursor-pointer">
<div className="mb-12">
<div className="w-10 h-10 bg-cyan-900/20 text-cyan-500 rounded flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-display text-white mb-3">Data Infra</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed">
                        Developing hypersenale data centers powered by renewable energy sources in Nordic regions.
                    </p>
</div>
<div className="flex justify-between items-center text-xs font-mono text-stone-600 border-t border-white/5 pt-4">
<span>Tech Infra</span>
<span className="group-hover:text-white transition-colors">Details ⤨</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] px-6 md:px-12">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="col-span-1 md:col-span-2 row-span-2 relative bg-stone-900 rounded-lg overflow-hidden group">
<img alt="Meeting" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 p-8 h-full flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
<h3 className="text-3xl font-display text-white mb-2">The Board</h3>
<p className="text-stone-300 text-sm font-light">Leadership defined by decades of proven stewardship.</p>
</div>
</div>

<div className="bg-stone-900/40 border border-white/5 p-8 rounded-lg flex flex-col justify-center items-center text-center hover:bg-stone-900/60 transition-colors">
<span className="text-4xl md:text-5xl text-white font-light font-display mb-2">$4.2B</span>
<span className="text-xs uppercase tracking-widest text-stone-500">Assets Managed</span>
</div>

<div className="bg-stone-900/40 border border-white/5 p-8 rounded-lg flex flex-col justify-center items-center text-center hover:bg-stone-900/60 transition-colors">
<span className="text-4xl md:text-5xl text-white font-light font-display mb-2">26</span>
<span className="text-xs uppercase tracking-widest text-stone-500">Years Active</span>
</div>

<div className="col-span-1 md:col-span-2 bg-[#0a0a0a] border border-white/5 p-8 rounded-lg flex items-center justify-between group cursor-pointer hover:border-white/20 transition-all">
<div>
<span className="text-xs text-orange-500 uppercase tracking-widest mb-2 block">Latest Insight</span>
<h4 className="text-lg text-white font-light">The shift towards biophilic urbanism in 2024.</h4>
</div>
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</section>

<footer className="bg-stone-950 pt-32 pb-12 border-t border-white/10">
<div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<div>
<h2 className="text-6xl md:text-8xl font-display text-stone-100 tracking-tighter mb-8 leading-[0.8]">
                        Build <br/> <span className="text-stone-700">Legacy.</span>
</h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end">
<a className="group flex items-center gap-4 text-2xl md:text-3xl text-white font-light mb-2" href="#">
                        Start an Enquiry
                        <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
</a>
<p className="text-stone-500 text-sm">contact@ramondholdings.com</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
<div className="flex flex-col gap-4">
<span className="text-xs text-stone-500 uppercase tracking-widest">Sitemap</span>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">Projects</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">Philosophy</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">News</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs text-stone-500 uppercase tracking-widest">Social</span>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">Twitter (X)</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs text-stone-500 uppercase tracking-widest">Legal</span>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">Terms</a>
</div>
<div className="flex flex-col gap-4 justify-end">
<span className="text-xs text-stone-600 uppercase tracking-widest">© 2024 Ramond Holdings</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
