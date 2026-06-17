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



        // Mobile Menu Logic
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            
            if (menu.classList.contains('closed')) {
                menu.classList.remove('closed');
                menu.classList.add('open');
                icon.setAttribute('icon', 'solar:close-circle-linear');
            } else {
                menu.classList.remove('open');
                menu.classList.add('closed');
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
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
      

<nav className="sticky top-0 w-full z-[100] bg-[#050507]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="flex h-16 max-w-[1400px] mx-auto px-6 items-center justify-between gap-6 relative z-[101]">

<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 z-50 hover:opacity-80 transition-opacity shrink-0" href="index.html">
<div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
          Mad Soaps
        </a>

<div className="hidden lg:flex items-center gap-1 text-sm font-medium text-zinc-400 h-full">
<a className="hover:text-white transition-colors pt-2 pr-4 pb-2 pl-4" href="/home-page">Home</a>

<div className="group relative h-full flex items-center">
<a className="text-white pt-2 pr-4 pb-2 pl-4 flex items-center gap-1.5 cursor-default" href="/boat-detailing-packages">
                    Boats
                    <iconify-icon className="transition-transform duration-200 group-hover:-rotate-180" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>

<div className="absolute top-[calc(100%-10px)] left-0 w-64 pt-4 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out">
<div className="bg-[#050507] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1.5 backdrop-blur-xl ring-1 ring-white/5">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors group/item" href="/boat-detailing-packages">
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500/10 transition-colors">
<iconify-icon icon="solar:waterdrops-linear" width="16"></iconify-icon>
</div>
<span className="font-medium">Boat Detailing</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors group/item" href="/bottom-paint">
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500/10 transition-colors">
<iconify-icon icon="solar:paint-roller-linear" width="16"></iconify-icon>
</div>
<span className="font-medium">Bottom Paint</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors group/item" href="/varnish-wood">
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500/10 transition-colors">
<iconify-icon icon="solar:brush-linear" width="16"></iconify-icon>
</div>
<span className="font-medium">Varnish &amp; Wood</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors group/item" href="/winterization">
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500/10 transition-colors">
<iconify-icon icon="solar:snowflake-linear" width="16"></iconify-icon>
</div>
<span className="font-medium">Winterization/Shrink Wrap</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors group/item" href="/spring-recommission">
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500/10 transition-colors">
<iconify-icon icon="solar:sun-2-linear" width="16"></iconify-icon>
</div>
<span className="font-medium">Spring Recommission</span>
</a>
</div>
</div>
</div>
<a className="hover:text-white transition-colors pt-2 pr-4 pb-2 pl-4" href="/car-detailing-packages">Cars</a>

<div className="group relative h-full flex items-center">
<a className="hover:text-white pt-2 pr-4 pb-2 pl-4 flex items-center gap-1.5 cursor-default transition-colors" href="/plans-page">
                    Plans
                    <iconify-icon className="transition-transform duration-200 group-hover:-rotate-180" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>

<div className="absolute top-[calc(100%-10px)] left-0 w-72 pt-4 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out">
<div className="bg-[#050507] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1.5 backdrop-blur-xl ring-1 ring-white/5">
<a className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors group/item" href="/marine-plans">
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500/10 transition-colors shrink-0 mt-0.5">
<iconify-icon icon="solar:anchor-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-medium text-white text-sm">Marine Plans</span>
<span className="text-xs text-zinc-500 font-normal">Boat maintenance packages</span>
</div>
</a>
<a className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors group/item" href="/auto-plans">
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500/10 transition-colors shrink-0 mt-0.5">
<iconify-icon icon="solar:car-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-medium text-white text-sm">Auto Plans</span>
<span className="text-xs text-zinc-500 font-normal">Car detailing subscriptions</span>
</div>
</a>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors" href="tel:8336237627">
<iconify-icon className="text-zinc-400" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span className="hidden xl:inline">(833) 623-7627</span>
</a>
<a className="text-sm font-semibold bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 whitespace-nowrap" href="#booking">
                Get a Price
            </a>
<button className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="mobile-menu closed absolute top-16 left-0 w-full bg-[#050507] border-b border-white/10 shadow-2xl overflow-hidden z-[99]" id="mobile-menu">
<div className="p-4 flex flex-col gap-2">
<a className="block px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="index.html">Home</a>
<a className="block px-4 py-3 rounded-xl bg-white/5 text-white text-sm font-medium transition-colors" href="marine-detailing.html">Boats</a>
<a className="block px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="auto-detailing.html">Cars</a>
<a className="block px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="maintenance-plans.html">Monthly Plans</a>
</div>
</div>
</nav>
<main className="flex-grow overflow-hidden pt-20 pr-6 pb-24 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<div className="text-center max-w-4xl mr-auto mb-16 ml-auto space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                Annapolis &amp; Chesapeake Bay
            </div>
<h1 className="md:text-6xl gradient-text text-4xl font-semibold tracking-tight pb-2" style={{}}>Stop Oxidation. <br/>Restore Your Shine.</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
                Don't let the sun ruin your investment. We reverse chalky fading, remove salt buildup, and apply heavy-duty protection so you spend your weekends boating, not scrubbing.
            </p>
<div className="flex flex-wrap justify-center items-center gap-4 text-sm text-zinc-300">
<span className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:shield-check-linear"></iconify-icon> UV Protection</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:clock-circle-linear"></iconify-icon> Fast Turnaround</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:star-shine-linear"></iconify-icon> Showroom Finish</span>
</div>
</div>

<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 items-stretch mb-32">

<div className="glass-panel rounded-2xl p-6 flex flex-col h-full hover:border-white/20 transition-all duration-300 group">
<div className="mb-4 flex justify-between items-start">
<span className="text-xs font-bold text-zinc-500 border border-zinc-800 bg-zinc-900/50 px-2 py-1 rounded uppercase tracking-wider">Pkg #1</span>
</div>
<div className="mb-4">
<h3 className="text-xl font-semibold text-white tracking-tight">The Express Protect</h3>
<p className="text-blue-400 text-xs font-medium mt-1">Prevent Future Fading</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">$130</span>
<span className="text-sm font-medium text-zinc-400">/ Hour</span>
</div>
<div className="flex items-center gap-2 mt-2 text-xs text-zinc-500">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span>$65/hr per person (2 people)</span>
</div>
</div>
<div className="flex-1 space-y-4 mb-4">
<p className="text-sm text-zinc-300 leading-relaxed">
                        Best for new boats with no fading. Lock in that "new boat" shine before the sun damages the gel coat.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-2.5 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:shield-linear" width="14"></iconify-icon>
                            Stops UV damage early
                        </li>
<li className="flex items-start gap-2.5 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:dollar-minimalistic-linear" width="14"></iconify-icon>
                            Protects resale value
                        </li>
</ul>
</div>
<div className="bg-white/5 rounded-lg p-3 mb-6 border border-white/5">
<div className="flex gap-0.5 text-amber-400 mb-2">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-xs text-zinc-300 italic mb-1">"Kept my Sea Ray looking brand new all season."</p>
<div className="text-[10px] text-zinc-500 font-medium">— John D., Edgewater</div>
</div>
<div className="mt-auto">
<div className="text-[10px] text-zinc-500 mb-3 text-center bg-zinc-900/50 py-1 rounded border border-zinc-800">Outside Only. No Cabin Cleaning.</div>
<a className="block w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all text-center" href="#booking">
                        Get Started
                    </a>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 flex flex-col h-full hover:border-white/20 transition-all duration-300 group">
<div className="mb-4 flex justify-between items-start">
<span className="text-xs font-bold text-zinc-500 border border-zinc-800 bg-zinc-900/50 px-2 py-1 rounded uppercase tracking-wider">Pkg #2</span>
</div>
<div className="mb-4">
<h3 className="text-xl font-semibold text-white tracking-tight">First Mate Special</h3>
<p className="text-blue-400 text-xs font-medium mt-1">Erase Salt &amp; Grime</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">$130</span>
<span className="text-sm font-medium text-zinc-400">/ Hour</span>
</div>
<div className="flex items-center gap-2 mt-2 text-xs text-zinc-500">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="">$65/hr per person (2 people)</span>
</div>
</div>
<div className="flex-1 space-y-4 mb-4">
<p className="text-sm text-zinc-300 leading-relaxed">
                        Don't waste a day scrubbing. We strip away stubborn salt spray and black streaks that regular washing misses.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-2.5 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:waterdrops-linear" width="14"></iconify-icon>
                            Removes corrosive salt
                        </li>
<li className="flex items-start gap-2.5 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="14"></iconify-icon>
                            Leaves a spotless finish
                        </li>
</ul>
</div>
<div className="bg-white/5 rounded-lg p-3 mb-6 border border-white/5">
<div className="flex gap-0.5 text-amber-400 mb-2">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-xs text-zinc-300 italic mb-1">"Finally got those black streaks off the hull."</p>
<div className="text-[10px] text-zinc-500 font-medium">— Sarah M., Annapolis</div>
</div>
<div className="mt-auto">
<div className="text-[10px] text-zinc-500 mb-3 text-center bg-zinc-900/50 py-1 rounded border border-zinc-800">Outside Only. No Cabin Cleaning.</div>
<a className="block hover:bg-white/10 transition-all text-sm font-medium text-white text-center bg-white/5 w-full border-white/10 border rounded-lg pt-2.5 pb-2.5" href="#booking">
                        Get Started
                    </a>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 flex flex-col h-full hover:border-white/20 transition-all duration-300 group">
<div className="mb-4 flex justify-between items-start">
<span className="text-xs font-bold text-zinc-500 border border-zinc-800 bg-zinc-900/50 px-2 py-1 rounded uppercase tracking-wider">Pkg #3</span>
</div>
<div className="mb-4">
<h3 className="text-xl font-semibold text-white tracking-tight">The Cut n' Buff</h3>
<p className="text-blue-400 text-xs font-medium mt-1">Fix Medium Oxidation</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">$130</span>
<span className="text-sm font-medium text-zinc-400">/ Hour</span>
</div>
<div className="flex items-center gap-2 mt-2 text-xs text-zinc-500">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span>$65/hr per person (2 people)</span>
</div>
</div>
<div className="flex-1 space-y-4 mb-4">
<p className="text-sm text-zinc-300 leading-relaxed">
                        Is your gel coat starting to look dull or chalky? We remove that dead layer to reveal the fresh, shiny surface underneath.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-2.5 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:refresh-linear" width="14"></iconify-icon>
                            Eliminates the "cloudy" look
                        </li>
<li className="flex items-start gap-2.5 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:sun-fog-linear" width="14"></iconify-icon>
                            Restores deep color
                        </li>
</ul>
</div>
<div className="bg-white/5 rounded-lg p-3 mb-6 border border-white/5">
<div className="flex gap-0.5 text-amber-400 mb-2">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-xs text-zinc-300 italic mb-1">"The cloudy haze is gone. Looks great."</p>
<div className="text-[10px] text-zinc-500 font-medium">— Mike R., Stevensville</div>
</div>
<div className="mt-auto">
<div className="text-[10px] text-zinc-500 mb-3 text-center bg-zinc-900/50 py-1 rounded border border-zinc-800">Outside Only. No Cabin Cleaning.</div>
<a className="block w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all text-center" href="#booking">
                        Get Started
                    </a>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 flex flex-col h-full hover:border-white/20 transition-all duration-300 group">
<div className="mb-4 flex justify-between items-start">
<span className="text-xs font-bold text-zinc-500 border border-zinc-800 bg-zinc-900/50 px-2 py-1 rounded uppercase tracking-wider">Pkg #4</span>
</div>
<div className="mb-4">
<h3 className="text-xl font-semibold text-white tracking-tight">The Captain's Order</h3>
<p className="text-blue-400 text-xs font-medium mt-1">Save Heavy Sun Damage</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">$195</span>
<span className="text-sm font-medium text-zinc-400">/ Hour</span>
</div>
<div className="flex items-center gap-2 mt-2 text-xs text-zinc-500">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span>$65/hr per person (2-3 people)</span>
</div>
</div>
<div className="flex-1 space-y-4 mb-4">
<p className="text-sm text-zinc-300 leading-relaxed">
                        Rough, chalky surfaces trap dirt and ruin your boat's look. We aggressively compound the surface to save you from needing a repaint.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-2.5 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:danger-linear" width="14"></iconify-icon>
                            Removes heavy oxidation
                        </li>
<li className="flex items-start gap-2.5 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:shield-check-linear" width="14"></iconify-icon>
                            Smooths out rough surfaces
                        </li>
</ul>
</div>
<div className="bg-white/5 rounded-lg p-3 mb-6 border border-white/5">
<div className="flex gap-0.5 text-amber-400 mb-2">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-xs text-zinc-300 italic mb-1">"Thought I needed a repaint. You saved me thousands."</p>
<div className="text-[10px] text-zinc-500 font-medium">— Tom W., Chester</div>
</div>
<div className="mt-auto">
<div className="text-[10px] text-zinc-500 mb-3 text-center bg-zinc-900/50 py-1 rounded border border-zinc-800">Outside Only. No Cabin Cleaning.</div>
<a className="block w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all text-center" href="#booking">
                        Get Started
                    </a>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 flex flex-col h-full border-blue-500/30 shadow-blue-900/20 bg-[#0A0A0C] relative group">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-600 rounded-full text-[10px] font-bold text-white tracking-wide uppercase shadow-lg border border-blue-400">
                    Most Popular
                </div>
<div className="mb-4 flex justify-between items-start mt-2">
<span className="text-xs font-bold text-blue-200 border border-blue-900 bg-blue-900/30 px-2 py-1 rounded uppercase tracking-wider">Pkg #5</span>
</div>
<div className="mb-4">
<h3 className="text-xl font-semibold text-white tracking-tight">The Boaters Exclusive</h3>
<p className="text-blue-400 text-xs font-medium mt-1">Mirror Finish Restoration</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">$195</span>
<span className="text-sm font-medium text-zinc-400">/ Hour</span>
</div>
<div className="flex items-center gap-2 mt-2 text-xs text-zinc-500">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="">$65/hr per person (2-3 people)</span>
</div>
</div>
<div className="flex-1 space-y-4 mb-4">
<p className="text-sm text-zinc-300 leading-relaxed">
                        The ultimate reset button. We remove deep swirl marks and scratches that others miss, leaving a shine that outlasts standard waxing.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-2.5 text-xs text-white">
<iconify-icon className="text-blue-400 shrink-0 mt-0.5" icon="solar:star-shine-linear" width="14"></iconify-icon>
                            Eliminates 99% of defects
                        </li>
<li className="flex items-start gap-2.5 text-xs text-white">
<iconify-icon className="text-blue-400 shrink-0 mt-0.5" icon="solar:clock-circle-linear" width="14"></iconify-icon>
                            Longest lasting wax protection
                        </li>
</ul>
</div>
<div className="bg-blue-900/10 rounded-lg p-3 mb-6 border border-blue-900/30">
<div className="flex gap-0.5 text-amber-400 mb-2">
<iconify-icon className="" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-xs text-blue-100 italic mb-1">"Best detailers in Annapolis. My hull is a mirror."</p>
<div className="text-[10px] text-blue-300 font-medium">— Bill K., Eastport</div>
</div>
<div className="mt-auto">
<div className="text-[10px] text-zinc-400 mb-3 text-center bg-blue-900/20 py-1 rounded border border-blue-900/30">Outside Only. No Cabin Cleaning.</div>
<a className="block w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all text-center shadow-lg shadow-blue-900/20" href="#booking">
                        Get Started
                    </a>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 flex flex-col h-full hover:border-white/20 transition-all duration-300 group">
<div className="mb-4 flex justify-between items-start">
<span className="text-xs font-bold text-zinc-500 border border-zinc-800 bg-zinc-900/50 px-2 py-1 rounded uppercase tracking-wider">Pkg #6</span>
</div>
<div className="mb-4">
<h3 className="text-xl font-semibold text-white tracking-tight">New Boat Delivery</h3>
<p className="text-blue-400 text-xs font-medium mt-1">Better Than Factory</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">$195</span>
<span className="text-sm font-medium text-zinc-400">/ Hour</span>
</div>
<div className="flex items-center gap-2 mt-2 text-xs text-zinc-500">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span>$65/hr per person (2-3 people)</span>
</div>
</div>
<div className="flex-1 space-y-4 mb-4">
<p className="text-sm text-zinc-300 leading-relaxed">
                        Even new boats have imperfections. We refine the finish to perfection, ensuring your new investment turns heads at the marina.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-2.5 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:verified-check-linear" width="14"></iconify-icon>
                            Flawless, high-definition gloss
                        </li>
<li className="flex items-start gap-2.5 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:shield-star-linear" width="14"></iconify-icon>
                            Maximum protection from Day 1
                        </li>
</ul>
</div>
<div className="bg-white/5 rounded-lg p-3 mb-6 border border-white/5">
<div className="flex gap-0.5 text-amber-400 mb-2">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-xs text-zinc-300 italic mb-1">"Better than the dealer prep. Absolutely flawless."</p>
<div className="text-[10px] text-zinc-500 font-medium">— Amy L., Kent Island</div>
</div>
<div className="mt-auto">
<div className="text-[10px] text-zinc-500 mb-3 text-center bg-zinc-900/50 py-1 rounded border border-zinc-800">Outside Only. No Cabin Cleaning.</div>
<a className="block w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all text-center" href="#booking">
                        Get Started
                    </a>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 flex flex-col h-full hover:border-white/20 transition-all duration-300 group">
<div className="mb-4 flex justify-between items-start">
<span className="text-xs font-bold text-zinc-500 border border-zinc-800 bg-zinc-900/50 px-2 py-1 rounded uppercase tracking-wider">Pkg #7</span>
</div>
<div className="mb-4">
<h3 className="text-xl font-semibold text-white tracking-tight">Signature Ceramic</h3>
<p className="text-blue-400 text-xs font-medium mt-1">Make Washing Easy</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">$240</span>
<span className="text-sm font-medium text-zinc-400">/ Hour</span>
</div>
<div className="flex items-center gap-2 mt-2 text-xs text-zinc-500">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span>$120/hr per person (2 people)</span>
</div>
</div>
<div className="flex-1 space-y-4 mb-4">
<p className="text-sm text-zinc-300 leading-relaxed">
                        Tired of scrubbing bird droppings and exhaust soot? Ceramic coating creates a non-stick shield so dirt rinses right off.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-2.5 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:hand-stars-linear" width="14"></iconify-icon>
                            Maintenance takes minutes, not hours
                        </li>
<li className="flex items-start gap-2.5 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:calendar-linear" width="14"></iconify-icon>
                            Lasts years longer than wax
                        </li>
</ul>
</div>
<div className="bg-white/5 rounded-lg p-3 mb-6 border border-white/5">
<div className="flex gap-0.5 text-amber-400 mb-2">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-xs text-zinc-300 italic mb-1">"Cleaning up after fishing is so easy now. Rinses right off."</p>
<div className="text-[10px] text-zinc-500 font-medium">— Chris P., Deale</div>
</div>
<div className="mt-auto">
<div className="text-[10px] text-zinc-500 mb-3 text-center bg-zinc-900/50 py-1 rounded border border-zinc-800">Outside Only. No Cabin Cleaning.</div>
<a className="block w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all text-center" href="#booking">
                        Get Started
                    </a>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 flex flex-col h-full hover:border-white/20 transition-all duration-300 group">
<div className="mb-4 flex justify-between items-start">
<span className="text-xs font-bold text-zinc-500 border border-zinc-800 bg-zinc-900/50 px-2 py-1 rounded uppercase tracking-wider">Pkg #8</span>
</div>
<div className="mb-4">
<h3 className="text-xl font-semibold text-white tracking-tight">Ultra Signature Ceramic</h3>
<p className="text-blue-400 text-xs font-medium mt-1">Total Boat Defense</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">$240</span>
<span className="text-sm font-medium text-zinc-400">/ Hour</span>
</div>
<div className="flex items-center gap-2 mt-2 text-xs text-zinc-500">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="">$120/hr per person (2 people)</span>
</div>
</div>
<div className="flex-1 space-y-4 mb-4">
<p className="text-sm text-zinc-300 leading-relaxed">
                        Mold and UV damage attacks every surface, not just the hull. We coat your seats, glass, and metal to stop deterioration everywhere.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-2.5 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:shield-warning-linear" width="14"></iconify-icon>
                            Prevents mold on vinyl seats
                        </li>
<li className="flex items-start gap-2.5 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="14"></iconify-icon>
                            Keeps glass crystal clear
                        </li>
</ul>
</div>
<div className="bg-white/5 rounded-lg p-3 mb-6 border border-white/5">
<div className="flex gap-0.5 text-amber-400 mb-2">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-xs text-zinc-300 italic mb-1">"Everything is protected. Vinyl, glass, metal. Worth it."</p>
<div className="text-[10px] text-zinc-500 font-medium">— Dave R., Annapolis</div>
</div>
<div className="mt-auto">
<div className="text-[10px] text-zinc-500 mb-3 text-center bg-zinc-900/50 py-1 rounded border border-zinc-800">Outside Only. No Cabin Cleaning.</div>
<a className="block w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all text-center" href="#booking">
                        Get Started
                    </a>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto mt-24 mb-32">
<div className="text-center mb-16 space-y-4">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Don't Ignore These Spots</h2>
<p className="text-lg text-zinc-400">Every package includes protection for these high-risk areas.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
<iconify-icon icon="solar:bacteria-linear" width="22"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Prevent Mold Buildup</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Gutters and lockers trap moisture. We clean them out so mold doesn't spread.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
<iconify-icon icon="solar:armchair-2-linear" width="22"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Stop Cracking Vinyl</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Sun dries out seats. We condition your vinyl to keep it soft and prevent tears.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
<iconify-icon icon="solar:glasses-linear" width="22"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Clear Up Visibility</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Salt spray creates blind spots. We ensure your glass is streak-free for safe navigation.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
<iconify-icon icon="solar:shield-linear" width="22"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Protect Metal Rails</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Rust and pitting ruin resale value. We polish rails to stop corrosion before it starts.</p>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto mb-32 space-y-6">
<h2 className="text-2xl font-semibold text-white tracking-tight text-center">Simple Pricing, No Surprises</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-zinc-900/40 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col gap-4 hover:border-blue-500/30 transition-colors">
<div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-semibold text-white">1. Instant Online Estimate</h3>
<p className="text-sm text-zinc-400 leading-relaxed mt-2">
                            Curious about the cost? Fill out the form below. We'll give you a quick range so you can budget for your boat's care. Cost: .
                        </p>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col gap-4 hover:border-blue-500/30 transition-colors">
<div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:bill-check-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-white">2. Firm Price Visit ($150)</h3>
<p className="text-sm text-zinc-400 leading-relaxed mt-2">
                            Need a guaranteed number? We visit your boat, inspect the oxidation levels, and give you a rock-solid price. This visit costs .
                        </p>
</div>
</div>
</div>
</div>

<div className="bg-white md:p-10 overflow-hidden max-w-4xl border border-zinc-200 rounded-2xl mx-auto mb-24 p-6 relative shadow-2xl" id="booking">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none -z-10"></div>
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">Get Your Quote</h2>
<p className="text-sm text-zinc-500 mt-2">Stop the sun damage today. Fill this out to get started.</p>
</div>
<div className="w-full min-h-[500px]">
<fieldd-lead-form className="" code="vwsXon"></fieldd-lead-form>
</div>
</div>

<div className="max-w-[1400px] mx-auto mb-24 mt-24">
<div className="text-center mb-16 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300 mb-2">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
                    Recurring Service
                </div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Maintenance Plans</h2>
<p className="text-lg text-zinc-400">Keep your boat showroom ready all season long without lifting a finger.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

<div className="glass-panel p-8 rounded-2xl flex flex-col h-full border-white/5 relative group hover:border-white/20 transition-all duration-300">
<div className="mb-6">
<h3 className="text-xl font-semibold text-white mb-2">Polymer Program</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            We add a shield to protect your boat. <br/>
<span className="text-red-400 font-medium">Does NOT include regular washing.</span>
</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold text-white tracking-tight">~$3,500</span>
<span className="text-sm font-medium text-zinc-500">/ yr</span>
</div>
<p className="text-blue-400 text-xs font-medium mt-2">Estimated for a 30' boat</p>
<p className="text-[10px] text-zinc-600 italic mt-2 leading-tight">Price varies per vessel depending on conditions, size, etc.</p>
</div>
<div className="space-y-8 flex-1">
<div>
<div className="flex items-center gap-2 text-xs font-bold text-blue-100 uppercase tracking-wider mb-3">
<iconify-icon className="text-blue-500" icon="solar:star-bold"></iconify-icon>
                                3 Times a Year
                            </div>
<div className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:verified-check-bold"></iconify-icon>
                                3 Protection Coatings per year
                            </div>
</div>
<div className="">
<div className="flex items-center gap-2 text-xs font-bold text-blue-100 uppercase tracking-wider mb-3">
<iconify-icon className="text-blue-500" icon="solar:shield-bold"></iconify-icon>
                                Also Protects:
                            </div>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                    Stainless Steel parts
                                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                    Floor &amp; Walking areas
                                </li>
</ul>
</div>
</div>
<a className="block hover:bg-white/10 transition-all text-sm font-semibold text-white text-center bg-white/5 w-full border-white/10 border rounded-xl mt-8 pt-3 pb-3" href="#booking">
                        Get Polymer Quote
                    </a>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col h-full border-white/5 relative group hover:border-white/20 transition-all duration-300">
<div className="mb-6">
<h3 className="text-xl font-semibold text-white mb-2">Wash Program</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            We wash off dirt and salt. <br/>
<span className="text-red-400 font-medium">Does NOT include Polymer protection.</span>
</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold text-white tracking-tight">~$6,000</span>
<span className="text-sm font-medium text-zinc-500">/ yr</span>
</div>
<p className="text-blue-400 text-xs font-medium mt-2">Estimated for a 30' boat</p>
<p className="text-[10px] text-zinc-600 italic mt-2 leading-tight">Assuming bi-weekly washes (16 visits from March-Nov). Price varies per vessel size &amp; condition.</p>
</div>
<div className="space-y-8 flex-1">
<div className="">
<div className="flex items-center gap-2 text-xs font-bold text-blue-100 uppercase tracking-wider mb-3">
<iconify-icon className="text-blue-500" icon="solar:calendar-bold"></iconify-icon>
                                March - November
                            </div>
<div className="space-y-3">
<div className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:verified-check-bold"></iconify-icon>
                                    Surface Cleaning (Whole boat)
                                </div>
<div className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:verified-check-bold"></iconify-icon>
                                    Decontamination (Removes deep dirt)
                                </div>
<div className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:verified-check-bold"></iconify-icon>
                                    Schedule: Weekly, Bi-weekly, Monthly or Bi-monthly
                                </div>
</div>
</div>
</div>
<a className="mt-8 block w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-all text-center" href="#booking">
                        Get Wash Quote
                    </a>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col h-full border-blue-500/30 relative overflow-hidden">
<div className="absolute top-0 left-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-br-lg z-10 shadow-lg shadow-blue-900/40">
                        Best Value
                    </div>
<div className="mb-6 mt-2">
<h3 className="text-xl font-semibold text-white mb-2">Turnkey Management Program</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                             We handle everything from paint to winterizing.
                        </p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold text-white tracking-tight">~$13,000</span>
<span className="text-sm font-medium text-zinc-500">/ yr</span>
</div>
<p className="text-blue-400 text-xs font-medium mt-2">Estimated for a 30' boat</p>
<p className="text-[10px] text-zinc-600 italic mt-2 leading-tight">Price varies per vessel depending on conditions, size, water systems, engines, etc.</p>
</div>

<div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-5 mb-8">
<div className="flex items-center gap-2 text-xs font-bold text-blue-200 uppercase tracking-wider mb-3">
<iconify-icon className="text-blue-400" icon="solar:crown-star-bold"></iconify-icon>
                            Complete Care Benefits
                        </div>
<div className="space-y-2">
<div className="flex items-center gap-3 text-xs font-medium text-white">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:verified-check-bold"></iconify-icon>
                                Commissioning &amp; Decommissioning
                            </div>
<div className="flex items-center gap-3 text-xs font-medium text-white">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:verified-check-bold"></iconify-icon>
                                Bottom Paint Included
                            </div>
<div className="flex items-center gap-3 text-xs font-medium text-white">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:verified-check-bold"></iconify-icon>
                                Priority Scheduling status
                            </div>
</div>
</div>
<div className="space-y-6 flex-1">

<div>
<div className="flex items-center gap-2 text-xs font-bold text-blue-100 uppercase tracking-wider mb-2">
<iconify-icon className="text-blue-500" icon="solar:leaf-bold"></iconify-icon>
                                Spring Prep
                            </div>
<ul className="space-y-1.5 ml-1 border-l border-white/10 pl-3">
<li className="text-xs text-zinc-400 flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5"></span>Commissioning</li>
<li className="text-xs text-zinc-400 flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5"></span>Shrink Wrap Removal</li>
</ul>
</div>

<div>
<div className="flex items-center gap-2 text-xs font-bold text-blue-100 uppercase tracking-wider mb-2">
<iconify-icon className="text-blue-500" icon="solar:sun-2-bold"></iconify-icon>
                                Maintenance Season
                            </div>
<ul className="space-y-1.5 ml-1 border-l border-white/10 pl-3">
<li className="text-xs text-zinc-400 flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5"></span>16 Washes / yr</li>
<li className="text-xs text-zinc-400 flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5"></span>Polymer Applications (3x / yr)</li>
</ul>
</div>

<div>
<div className="flex items-center gap-2 text-xs font-bold text-blue-100 uppercase tracking-wider mb-2">
<iconify-icon className="text-blue-500" icon="solar:snowflake-bold"></iconify-icon>
                                Winterizing
                            </div>
<ul className="space-y-1.5 ml-1 border-l border-white/10 pl-3">
<li className="text-xs text-zinc-400 flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5"></span>Full Decommissioning</li>
</ul>
</div>
</div>
<a className="mt-8 block w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all text-center shadow-lg shadow-blue-500/20" href="#booking">
                        Get Best Value Quote
                    </a>
</div>
</div>
</div>

<div className="max-w-[1400px] mx-auto mb-12 border-t border-white/5 pt-12">
<div className="glass-panel md:p-12 flex flex-col md:flex-row bg-gradient-to-r from-zinc-900/50 to-zinc-900/20 rounded-2xl pt-8 pr-8 pb-8 pl-8 gap-x-8 gap-y-8 items-center justify-between">
<div className="space-y-2 text-center md:text-left">
<h3 className="text-2xl font-semibold text-white tracking-tight flex items-center justify-center md:justify-start gap-3">
<iconify-icon className="text-blue-400" icon="solar:wheel-angle-linear"></iconify-icon>
                        Looking for Car Detailing?
                    </h3>
<p className="text-zinc-400 max-w-lg">
                        We also offer premium auto detailing services for your truck, SUV, or daily driver. Same attention to detail, different vehicle.
                    </p>
</div>
<a className="flex items-center gap-2 hover:bg-zinc-200 transition-colors shrink-0 font-medium text-black bg-white rounded-full pt-3 pr-6 pb-3 pl-6" href="/car-detailing-packages">
                    View Car Packages
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-12 bg-[#050507]">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
<div className="md:col-span-1 space-y-4">

<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2" href="index.html">
<div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
                        Mad Soaps
                    </a>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Restoring and protecting yachts in Annapolis and Chesapeake Bay against the elements.
                    </p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-semibold text-white">Company</h4>
<a className="text-sm text-white transition-colors" href="marine-detailing.html">Boat Cleaning</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="auto-detailing.html">Car Cleaning</a>
<a className="hover:text-white transition-colors text-sm text-zinc-400" href="maintenance-plans.html">Boat Plans</a>
<a className="hover:text-white transition-colors text-sm text-zinc-400" href="/#booking">Contact Us</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-semibold text-white">Locations</h4>
<span className="text-xs text-zinc-500">Annapolis</span>
<span className="text-xs text-zinc-500">Eastport</span>
<span className="text-xs text-zinc-500">Stevensville</span>
</div>

<div className="flex flex-col gap-3">
<h4 className="text-sm font-semibold text-white">Find Us Here</h4>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2" href="https://www.tiktok.com/@madsoaps" target="_blank">
<iconify-icon icon="ri:tiktok-line" width="16"></iconify-icon> TikTok
                    </a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2" href="https://www.instagram.com/madsoapsinc/" target="_blank">
<iconify-icon icon="solar:instagram-linear" width="16"></iconify-icon> Instagram
                    </a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2" href="https://www.facebook.com/RealMADsoaps/" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="16"></iconify-icon> Facebook
                    </a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2" href="https://www.linkedin.com/company/madsoaps" target="_blank">
<iconify-icon icon="ri:linkedin-line" width="16"></iconify-icon> LinkedIn
                    </a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-500 text-xs">© 2024 Mad Soaps. All rights reserved.</div>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
