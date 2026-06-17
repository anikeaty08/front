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



        document.addEventListener('DOMContentLoaded', () => {
            if (window.lucide) lucide.createIcons();
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
      

<nav className="relative max-w-6xl mx-auto mt-4 bg-neutral-950 rounded-3xl px-20 py-2">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<span className="text-lg font-medium tracking-tight font-geist text-neutral-100">RobloxCraft Studio</span>
</div>
<div className="flex items-center gap-6">
<a className="text-sm transition-colors font-geist text-neutral-400 hover:text-neutral-100" href="#process">Process</a>
<a className="text-sm transition-colors font-geist text-neutral-400 hover:text-neutral-100" href="#services">Services</a>
<a className="text-sm transition-colors font-geist text-neutral-400 hover:text-neutral-100" href="#games">Games</a>
<button className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition-colors font-geist border-white/10 bg-white/5 text-neutral-100 hover:bg-white/10">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
                        Start Project
                    </button>
</div>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-20 pb-10">
<div className="relative max-w-6xl mx-auto min-h-[760px] flex flex-col bg-neutral-950 bg-cover rounded-3xl px-20 py-10" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(\'data: image/svg+xml, &lt', svg xmlns=%22http: '//www.w3.org/2000/svg%22 viewBox=%220 0 1000 1000%22&gt'}}>

<header className="mb-16">
<span className="block text-[9vw] font-semibold tracking-tighter font-geist" style={{letterSpacing: '-0.15em'}}>
<span className="inline-block">R</span><span className="inline-block">O</span><span className="inline-block">B</span><span className="inline-block">L</span><span className="inline-block">O</span><span className="inline-block">X</span>
</span>
</header>

<div className="relative grid grid-cols-1 sm:grid-cols-2 gap-16 mt-auto">

<div className="flex flex-col justify-between">
<div className="flex gap-4 items-start">
<div className="mt-1 w-6 h-12 border-l border-b border-white/20 rounded-sm"></div>
<div className="space-y-4">
<p className="text-sm font-geist text-neutral-300 leading-6">Professional Roblox Game Development</p>
<button className="flex gap-2 ring-1 ring-white/20 hover:bg-white/15 transition-colors text-sm text-neutral-950 font-geist bg-white rounded-full px-6 py-3 items-center justify-center">
                                View Our Games
                                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="flex items-end">
<p className="text-3xl font-geist font-light tracking-tight text-neutral-300">
                        We create <span className="font-semibold text-white">immersive</span> Roblox experiences with 
                        <span className="text-neutral-400">cutting-edge</span> gameplay and 
                        <span className="font-semibold text-white">engaging</span> worlds that captivate millions of players.
                    </p>
</div>
</div>
</div>
</section>

<section className="pb-10">
<div className="relative max-w-6xl mx-auto bg-neutral-950 rounded-3xl px-20 py-10">
<div className="text-center mb-16">
<h2 className="text-7xl font-light text-white tracking-tighter font-geist mb-6">What Sets Us Apart</h2>
<p className="text-lg max-w-2xl mx-auto font-geist text-neutral-400">Experience the RobloxCraft difference through our proven development process, exceptional results, and commitment to creating viral games.</p>
</div>
<div className="bg-neutral-900/40 border-white/10 border rounded-2xl p-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="relative overflow-hidden rounded-2xl border-white/10 border" style={{background: 'linear-gradient(135deg, #059669 0%, #0891b2 100%)'}}>
<div className="relative h-[520px] flex flex-col p-6">
<div className="flex items-center gap-3">
<div>
<p className="text-sm font-geist text-white/90">Our Edge</p>
<p className="text-sm mt-1 font-geist text-white/70">Viral Game Mechanics</p>
</div>
</div>
<div className="mt-auto">
<div className="text-4xl font-semibold text-white tracking-tight font-geist mb-4">
                                    Build for <span className="text-yellow-300">Millions</span>
</div>
<div className="flex items-center gap-2 text-white mb-6">
<div className="flex items-center gap-1">
<div className="h-2 w-2 rounded-full bg-yellow-400"></div>
<div className="h-2 w-2 rounded-full bg-yellow-300"></div>
<div className="h-2 w-2 rounded-full bg-yellow-500"></div>
</div>
<p className="text-sm font-geist">Every script optimized for scale</p>
</div>
<div className="flex items-center gap-2 text-xs font-geist text-white/80">
                                    Discover our approach
                                    <i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden bg-white/5 border-white/10 border rounded-2xl p-6">
<div className="relative">
<p className="text-sm font-geist text-neutral-400">Proven Results:</p>
<h3 className="mt-2 text-3xl font-geist font-light tracking-tight text-neutral-100">
<span className="font-semibold text-emerald-400">50M+</span> visits across games, 
                                <span className="font-semibold text-blue-400">95%</span> player retention
                            </h3>
<p className="mt-8 text-sm font-geist text-neutral-400">Our Development Process:</p>
<div className="mt-4 space-y-3">
<div className="flex items-center gap-3 text-sm font-geist text-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                    Game Concept &amp; Market Research
                                </div>
<div className="flex items-center gap-3 text-sm font-geist text-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                                    Rapid Prototyping &amp; Testing
                                </div>
<div className="flex items-center gap-3 text-sm font-geist text-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                                    Launch &amp; Live Optimization
                                </div>
</div>
<div className="mt-8 rounded-xl border p-5 border-white/10 bg-black/30">
<div className="flex items-center gap-1 text-amber-300 mb-3">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="mt-3 text-sm font-geist text-neutral-300">"RobloxCraft delivered a game that hit 1M visits in the first week. Their understanding of Roblox mechanics is unmatched."</p>
<div className="mt-4 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold">A</div>
<div className="text-sm">
<p className="font-geist text-neutral-200">Alex Chen</p>
<p className="text-xs text-neutral-500 font-geist">Game Studio Owner</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-rows-2 gap-6">
<div className="rounded-2xl border p-8 border-white/10 bg-white/5">
<div className="flex items-center sm:block">
<div className="relative h-28 w-28 sm:mx-auto">
<div className="absolute inset-0 rounded-full bg-emerald-500"></div>
<div className="absolute inset-[10px] rounded-full bg-black/40 flex items-center justify-center">
<i className="h-6 w-6 text-emerald-400" data-lucide="shield-check"></i>
</div>
</div>
<div className="ml-5 sm:ml-0 sm:mt-6 text-center">
<h4 className="text-lg font-geist font-light tracking-tight text-white">100% Success Rate</h4>
<p className="mt-2 text-sm font-geist text-neutral-400">Every game we launch reaches profitability within 30 days.</p>
</div>
</div>
</div>
<div className="rounded-2xl border p-8 border-white/10 bg-white/5">
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<div className="text-2xl font-geist font-light tracking-tight text-white">25+</div>
<p className="text-xs mt-1 font-geist text-neutral-400">Games launched</p>
</div>
<div>
<div className="text-2xl font-geist font-light tracking-tight text-white">2-6wk</div>
<p className="text-xs mt-1 font-geist text-neutral-400">Development time</p>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm font-geist">
<span className="text-neutral-300">Scripting</span>
<span className="text-emerald-500">Expert</span>
</div>
<div className="flex items-center justify-between text-sm font-geist">
<span className="text-neutral-300">3D Modeling</span>
<span className="text-blue-400">Expert</span>
</div>
<div className="flex items-center justify-between text-sm font-geist">
<span className="text-neutral-300">Game Design</span>
<span className="text-purple-400">Expert</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs font-geist text-neutral-300">
<i className="h-3 w-3 text-green-400" data-lucide="check"></i>
                                    Roblox Verified Developers
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pb-10" id="services">
<div className="relative max-w-6xl mx-auto bg-neutral-950 rounded-3xl px-20 py-10">
<div className="text-center mb-16">
<h2 className="text-7xl font-light text-white tracking-tighter font-geist mb-6">Game Development Services</h2>
<p className="text-lg max-w-2xl mx-auto font-geist text-neutral-400">Comprehensive Roblox development solutions from concept to launch, designed to create engaging experiences that drive player retention.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-xl border p-6 border-white/10 bg-neutral-900/40 flex flex-col">
<div className="rounded-lg border p-4 mb-5 relative overflow-hidden border-white/10 bg-emerald-500/10">
<div className="flex items-center justify-center">
<div className="grid grid-cols-2 gap-2 w-full">
<div className="col-span-2 h-16 rounded-lg bg-emerald-500 flex items-center justify-center relative overflow-hidden">
<i className="h-8 w-8 text-white" data-lucide="gamepad-2"></i>
</div>
<div className="h-12 rounded bg-emerald-400 flex items-center justify-center">
<i className="h-4 w-4 text-white" data-lucide="code"></i>
</div>
<div className="h-12 rounded border-2 border-emerald-500 flex items-center justify-center bg-white/5">
<i className="h-4 w-4 text-emerald-400" data-lucide="play"></i>
</div>
</div>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight font-geist mb-2 text-white">Full Game Development</h3>
<p className="text-sm font-geist text-neutral-400">Complete game development from concept to launch, including scripting, UI design, and gameplay mechanics optimization.</p>
</div>
</div>

<div className="rounded-xl border p-6 border-white/10 bg-neutral-900/40 flex flex-col">
<div className="rounded-lg border p-4 mb-5 border-white/10 bg-blue-500/10">
<div className="space-y-3">
<div className="rounded border flex items-center gap-2 p-2 border-white/10 bg-black/30">
<i className="h-4 w-4 text-blue-400" data-lucide="box"></i>
<div className="h-2 flex-1 rounded bg-white/10"></div>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="h-12 rounded bg-blue-500/60 flex items-center justify-center">
<i className="h-4 w-4 text-white" data-lucide="cube"></i>
</div>
<div className="h-12 rounded bg-blue-400/60 flex items-center justify-center">
<i className="h-4 w-4 text-white" data-lucide="cylinder"></i>
</div>
<div className="h-12 rounded bg-blue-600/60 flex items-center justify-center">
<i className="h-4 w-4 text-white" data-lucide="pyramid"></i>
</div>
</div>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight font-geist mb-2 text-white">3D Asset Creation</h3>
<p className="text-sm font-geist text-neutral-400">Custom 3D models, maps, and assets designed specifically for Roblox, optimized for performance and visual appeal.</p>
</div>
</div>

<div className="rounded-xl border p-6 border-white/10 bg-neutral-900/40 flex flex-col">
<div className="rounded-lg border p-4 mb-5 space-y-3 border-white/10 bg-yellow-500/10">
<div className="grid grid-cols-2 gap-2">
<div className="rounded border p-2 space-y-1 border-white/10 bg-black/30">
<div className="h-2 w-3/4 rounded bg-white/10"></div>
<div className="h-8 rounded bg-yellow-500/30 flex items-center justify-center">
<i className="h-4 w-4 text-yellow-400" data-lucide="coins"></i>
</div>
</div>
<div className="rounded border p-2 space-y-1 border-white/10 bg-black/30">
<div className="h-2 w-3/4 rounded bg-white/10"></div>
<div className="h-8 rounded bg-yellow-600/30 flex items-center justify-center">
<i className="h-4 w-4 text-yellow-400" data-lucide="gem"></i>
</div>
</div>
</div>
<div className="flex justify-center">
<button className="rounded px-3 py-1 ring-1 text-xs bg-white/5 ring-white/10 text-neutral-200">Setup Shop</button>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight font-geist mb-2 text-white">Monetization Setup</h3>
<p className="text-sm font-geist text-neutral-400">Implement proven monetization strategies including gamepasses, developer products, and premium benefits.</p>
</div>
</div>

<div className="rounded-xl border p-6 border-white/10 bg-neutral-900/40 flex flex-col">
<div className="rounded-lg border p-4 mb-5 space-y-3 border-white/10 bg-purple-500/10">
<div className="grid grid-cols-3 gap-2">
<div className="rounded border p-2 aspect-square border-white/10 bg-black/30 flex items-center justify-center">
<i className="h-4 w-4 text-red-400" data-lucide="bug"></i>
</div>
<div className="rounded border p-2 aspect-square border-white/10 bg-black/30 flex items-center justify-center">
<i className="h-4 w-4 text-green-400" data-lucide="check-circle"></i>
</div>
<div className="rounded border p-2 aspect-square border-white/10 bg-black/30 flex items-center justify-center">
<i className="h-4 w-4 text-yellow-400" data-lucide="zap"></i>
</div>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight font-geist mb-2 text-white">QA &amp; Testing</h3>
<p className="text-sm font-geist text-neutral-400">Comprehensive testing across devices and scenarios to ensure smooth gameplay and optimal performance.</p>
</div>
</div>

<div className="rounded-xl border p-6 border-white/10 bg-neutral-900/40 flex flex-col">
<div className="rounded-lg border p-4 mb-5 border-white/10 bg-orange-500/10">
<div className="rounded bg-black relative overflow-hidden h-24">
<div className="absolute inset-0 bg-orange-500/20"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center">
<i className="h-4 w-4 text-black" data-lucide="trending-up"></i>
</div>
</div>
<div className="absolute bottom-2 left-2 right-2">
<div className="h-1 rounded bg-white/20">
<div className="h-1 w-2/3 rounded bg-orange-500"></div>
</div>
</div>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight font-geist mb-2 text-white">Live Operations</h3>
<p className="text-sm font-geist text-neutral-400">Ongoing support, updates, events, and analytics tracking to keep your game growing and players engaged.</p>
</div>
</div>

<div className="rounded-xl border p-6 border-white/10 bg-neutral-900/40 flex flex-col">
<div className="rounded-lg border p-4 mb-5 relative border-white/10 bg-indigo-500/10">
<div className="grid grid-cols-2 gap-3">
<div className="space-y-2">
<div className="text-[11px] font-geist text-neutral-400">Strategy</div>
<div className="space-y-1">
<div className="rounded px-2 py-1 text-[10px] bg-indigo-500/20 text-indigo-300">Market Analysis</div>
<div className="rounded px-2 py-1 text-[10px] bg-indigo-400/20 text-indigo-300">Player Research</div>
<div className="rounded px-2 py-1 text-[10px] bg-indigo-600/20 text-indigo-300">Growth Plan</div>
</div>
</div>
<div className="space-y-2">
<div className="text-[11px] font-geist text-neutral-400">Consultation</div>
<div className="space-y-1">
<div className="h-1 w-full rounded bg-white/10"></div>
<div className="h-1 w-3/4 rounded bg-white/10"></div>
<div className="h-1 w-5/6 rounded bg-white/10"></div>
</div>
</div>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight font-geist mb-2 text-white">Game Strategy Consulting</h3>
<p className="text-sm font-geist text-neutral-400">Expert guidance on game design, market positioning, and growth strategies to maximize your Roblox game's potential.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pb-10">
<div className="relative max-w-6xl mx-auto bg-neutral-950 rounded-3xl px-20 py-10">
<div className="text-center mb-16">
<h2 className="text-7xl font-light text-white tracking-tighter font-geist mb-6">The team behind your success.</h2>
<p className="text-lg max-w-2xl mx-auto mt-6 font-geist text-neutral-400">Our passionate team of Roblox developers, 3D artists, and game designers who bring your vision to life with years of platform expertise.</p>
</div>
<div className="overflow-hidden rounded-2xl">
<section className="bg-zinc-900 rounded-3xl mt-8 p-6 relative overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">

<div className="flex flex-col justify-between min-h-full">
<div>
<span className="text-sm font-normal text-zinc-500 font-geist">Roblox Excellence</span>
<h3 className="text-5xl leading-[0.9] text-zinc-100 mt-2 font-geist font-medium tracking-tighter">Expert developers, viral games.</h3>
<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800"></div>
</div>
<div className="hidden sm:grid grid-cols-3 gap-6 text-zinc-600 bg-zinc-900 px-4 relative">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="code"></i>
<span className="text-sm font-normal font-geist">Lua Scripting</span>
</div>
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="users"></i>
<span className="text-sm font-normal font-geist">Team Players</span>
</div>
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="trending-up"></i>
<span className="text-sm font-normal font-geist">Growth Focused</span>
</div>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<p className="text-sm text-zinc-100 font-medium tracking-tight font-geist">Meet our dev team</p>
<p className="mt-1 text-sm text-zinc-400 font-geist">Specialized Roblox developers who understand what makes games successful on the platform.</p>
<button className="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-100 text-zinc-900 text-sm font-normal hover:bg-zinc-200 transition font-geist">
                                        View Portfolio
                                        <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900"></span>
</button>
</div>
<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent sm:block hidden"></div>
<p className="text-base text-zinc-300 leading-relaxed sm:text-right sm:pl-8 font-geist">
                                        With over <span className="font-medium text-zinc-100 font-geist">100+ years</span> of combined Roblox experience, our team has launched
                                        <span className="font-medium text-zinc-100 font-geist">top-ranking</span> games across multiple genres.
                                    </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative">

<article className="relative overflow-hidden h-[200px] bg-zinc-800 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900">
<i className="h-3.5 w-3.5" data-lucide="code"></i>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist">Lead Developer</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Marcus Dev</p>
<p className="text-zinc-300 text-xs font-geist mt-1">6 years Roblox experience</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-zinc-800 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900">
<i className="h-3.5 w-3.5" data-lucide="box"></i>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist">3D Artist</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Sarah Design</p>
<p className="text-zinc-300 text-xs font-geist mt-1">4 years 3D modeling</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-zinc-800 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900">
<i className="h-3.5 w-3.5" data-lucide="gamepad-2"></i>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist">Game Designer</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Alex Games</p>
<p className="text-zinc-300 text-xs font-geist mt-1">5 years game design</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-zinc-800 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900">
<i className="h-3.5 w-3.5" data-lucide="monitor"></i>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist">UI Designer</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Emma UI</p>
<p className="text-zinc-300 text-xs font-geist mt-1">3 years UI/UX</p>
</div>
</article>
</div>
</div>
</section>
</div>

<div className="mt-8 grid grid-cols-3 gap-6 text-center">
<div className="py-6 px-4 rounded-xl bg-white/5 border border-white/10">
<div className="text-2xl font-geist font-medium text-zinc-100">8+</div>
<div className="text-sm font-geist text-zinc-400 mt-1">Roblox Developers</div>
</div>
<div className="py-6 px-4 rounded-xl bg-white/5 border border-white/10">
<div className="text-2xl font-geist font-medium text-zinc-100">25+</div>
<div className="text-sm font-geist text-zinc-400 mt-1">Games Launched</div>
</div>
<div className="py-6 px-4 rounded-xl bg-white/5 border border-white/10">
<div className="text-2xl font-geist font-medium text-zinc-100">50M+</div>
<div className="text-sm font-geist text-zinc-400 mt-1">Total Game Visits</div>
</div>
</div>
</div>
</section>

<section className="pb-10">
<div className="relative max-w-6xl mx-auto bg-neutral-950 rounded-3xl px-20 py-10">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
<div className="mb-6 sm:mb-0">
<h2 className="text-7xl font-light text-white tracking-tighter font-geist mb-6">Development Packages</h2>
<p className="text-lg max-w-2xl font-geist text-neutral-400">Flexible development options for every budget. From simple games to complex experiences that scale to millions of players.</p>
</div>
<div className="inline-flex items-center rounded-full ring-1 ring-white/10 bg-white/5 p-1 gap-1">
<button className="px-3.5 py-1.5 rounded-full text-sm font-geist bg-neutral-100 text-black">Game Development</button>
<button className="px-3.5 py-1.5 rounded-full text-sm font-geist text-neutral-300 hover:text-neutral-100">Consulting</button>
</div>
</div>
<div className="rounded-2xl border overflow-hidden border-white/10 bg-neutral-900/40">
<div className="grid grid-cols-1 lg:grid-cols-2 items-center">
<div className="p-6 lg:p-8">
<div className="relative rounded-2xl border border-white/10 bg-neutral-100 text-neutral-900 p-6">
<div className="absolute top-4 right-5 text-xs font-geist text-neutral-500 select-none">RobloxCraft®</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-geist font-medium tracking-tight text-neutral-700">Full Game Development</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-4xl font-geist font-medium tracking-tight">$<span>5000</span></span>
<span className="text-neutral-500 font-geist text-base">/<span>project</span></span>
</div>
</div>
</div>
<p className="mt-4 text-sm leading-6 font-geist text-neutral-600">Complete game development from concept to launch. Perfect for entrepreneurs and studios looking to enter the Roblox platform with a professional game.</p>
<div className="mt-8 flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[11px] font-geist text-neutral-500">
<span className="h-2 w-2 rounded-full bg-neutral-400/50"></span>
<span>Live ops support (+$1000/m)</span>
</div>
<div className="h-5 w-9 rounded-full bg-neutral-200 relative">
<div className="absolute top-[2px] left-[2px] h-4 w-4 rounded-full bg-neutral-500"></div>
</div>
</div>
</div>
</div>
<div className="p-6 flex flex-col bg-black/20 justify-between">
<div>
<div className="text-sm font-geist text-neutral-400 mb-4">What's included:</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-geist text-neutral-200">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
<span className="text-neutral-100">Complete game development</span>
</li>
<li className="flex items-center gap-3 text-sm font-geist text-neutral-200">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
<span className="text-neutral-100">Custom 3D assets &amp; UI design</span>
</li>
<li className="flex items-center gap-3 text-sm font-geist text-neutral-200">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
                                    Advanced Lua scripting
                                </li>
<li className="flex items-center gap-3 text-sm font-geist text-neutral-200">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
                                    Monetization integration
                                </li>
<li className="flex items-center gap-3 text-sm font-geist text-neutral-200">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
                                    Full testing &amp; optimization
                                </li>
<li className="flex items-center gap-3 text-sm font-geist text-neutral-200">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
                                    Launch support &amp; documentation
                                </li>
<li className="flex items-center gap-3 text-sm font-geist text-neutral-200">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
                                    30 days post-launch support
                                </li>
</ul>
</div>
<div className="mt-8 flex items-center justify-between gap-6">
<div>
<div className="text-sm font-geist text-neutral-400">Development time</div>
<div className="text-neutral-100 font-geist">4-8 weeks</div>
</div>
<button className="flex gap-2 ring-1 ring-white/20 hover:bg-white/15 transition-colors text-sm text-neutral-100 font-geist bg-white/10 rounded-full px-6 py-3 items-center justify-center">
                                Start Project
                                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
<div className="mt-6 text-[11px] font-geist text-neutral-500 flex items-center gap-2">
<i className="h-3 w-3 text-neutral-400" data-lucide="info"></i>
                All games include source code ownership and comprehensive documentation. Revenue sharing available for larger projects.
            </div>
</div>
</section>

<section className="pb-10" id="games">
<div className="relative max-w-6xl mx-auto bg-neutral-950 rounded-3xl px-20 py-10">
<div className="bg-neutral-900/40 border-white/10 border rounded-2xl p-8" style={{background: '#ffffff', borderColor: 'rgba(0,0,0,0.06)'}}>
<div className="relative overflow-hidden min-h-[600px] flex rounded-xl items-center justify-center">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[72%] max-w-6xl aspect-[16/9] bg-black relative overflow-hidden shadow-2xl rounded-sm">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<i className="h-16 w-16 text-white mx-auto mb-4" data-lucide="gamepad-2"></i>
<p className="text-white text-lg font-geist">50M+ Total Visits</p>
<p className="text-white/80 text-sm font-geist mt-2">Across 25+ Published Games</p>
</div>
</div>
</div>
</div>
<h2 className="relative z-10 px-2 text-white mix-blend-difference text-center font-geist font-semibold tracking-tight leading-[0.82] text-[9vw] select-none">
<span className="block">From script</span>
<span className="block">to success</span>
</h2>
<div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl opacity-20">
<div className="h-px bg-black/30"></div>
</div>
<div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full opacity-20">
<div className="w-px h-full bg-black/10"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative max-w-6xl mx-auto bg-neutral-950 rounded-2xl px-20 py-4">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between">
<div className="flex items-center gap-3 mb-4 md:mb-0">
<span className="text-lg font-medium tracking-tight font-geist">RobloxCraft Studio</span>
</div>
<div className="flex items-center gap-6 text-sm text-neutral-400">
<a className="transition-colors font-geist hover:text-neutral-100" href="#">Privacy</a>
<a className="transition-colors font-geist hover:text-neutral-100" href="#">Terms</a>
<a className="transition-colors font-geist hover:text-neutral-100" href="#">Contact</a>
<span className="font-geist">© 2024</span>
</div>
</div>
</div>
</footer>
<style>
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { 
                opacity: 0; 
                transform: translateY(20px); 
            }
            to { 
                opacity: 1; 
                transform: translateY(0); 
            }
        }
    </style>


    </>
  );
}
