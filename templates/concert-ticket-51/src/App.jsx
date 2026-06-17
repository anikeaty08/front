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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-purple-400 text-xl" icon="solar:ticket-linear"></iconify-icon>
<span className="text-base font-semibold tracking-tighter text-white uppercase flex items-center gap-2">
                    Demo Events <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-1.5 py-0.5 rounded text-xs tracking-normal">AI</span>
</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-neutral-400">
<a className="hover:text-white transition-colors" href="#concerts">Concerts</a>
<a className="hover:text-white transition-colors" href="#sports">Sports</a>
<a className="hover:text-white transition-colors" href="#theater">Arts &amp; Theater</a>
<a className="hover:text-white transition-colors" href="#festivals">Festivals</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:text-purple-400 transition-colors">
<iconify-icon icon="solar:user-linear"></iconify-icon> Sign In
                </button>
<button className="md:hidden text-white hover:text-purple-400">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden border-b border-white/5">

<div className="absolute inset-0 z-0">
<img alt="Concert Crowd" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" src="https://images.unsplash.com/photo-1540039155733-d7696d4eb98e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/80 to-neutral-950"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-neutral-950/0 to-transparent"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight max-w-3xl">
                Just describe your vibe. <br className="hidden md:block"/>
<span className="text-gradient">Our AI finds the tickets.</span>
</h1>
<p className="text-sm lg:text-base font-light text-neutral-400 mb-10 max-w-xl leading-relaxed">
                Tell us what you're in the mood for, your budget, or who you're going with. We'll curate the perfect live experiences instantly.
            </p>

<div className="w-full max-w-3xl relative z-20">
<div className="glass-panel p-2 rounded-2xl flex flex-col shadow-2xl border-purple-500/30 ring-1 ring-purple-500/20 focus-within:ring-purple-500/50 focus-within:bg-white/5 transition-all bg-neutral-950/80 backdrop-blur-xl">
<textarea className="w-full bg-transparent text-sm text-white placeholder:text-neutral-500 font-light border-none resize-none p-4 min-h-[5rem] overflow-hidden" placeholder="e.g. 'Find me a chill electronic concert in New York this weekend for a date night. Under $100 per ticket.'"></textarea>
<div className="flex justify-between items-center px-2 pb-2">
<div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
<span className="text-xs text-neutral-500 px-2 flex items-center gap-1"><iconify-icon icon="solar:lightbulb-bolt-linear"></iconify-icon> Try:</span>
<button className="bg-white/5 hover:bg-white/10 text-neutral-300 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors">High-energy EDM tonight</button>
<button className="bg-white/5 hover:bg-white/10 text-neutral-300 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors">Family friendly theater</button>
</div>
<button className="bg-white hover:bg-neutral-200 text-neutral-950 p-3 rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] shrink-0 group">
<iconify-icon className="text-lg group-hover:rotate-12 transition-transform" icon="solar:magic-stick-3-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="w-full max-w-3xl mt-12 flex flex-col gap-6 text-left relative z-20">

<div className="flex gap-4 justify-end items-start w-full opacity-90">
<div className="glass-panel bg-white/5 border-white/10 rounded-2xl rounded-tr-none p-4 max-w-xl">
<p className="text-sm font-light text-neutral-200">I'm looking for a chill electronic concert in New York this weekend for a date night. Something relaxing but fun. Budget is under $100 per ticket.</p>
</div>
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-neutral-400" icon="solar:user-linear"></iconify-icon>
</div>
</div>

<div className="flex gap-4 items-start w-full">
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.4)] relative">
<iconify-icon className="text-white text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-neutral-950"></div>
</div>
<div className="glass-panel border-purple-500/20 bg-purple-900/5 rounded-2xl rounded-tl-none p-5 sm:p-6 w-full max-w-2xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
<p className="text-sm font-light text-neutral-200 mb-5 relative z-10 leading-relaxed">
                            I have the perfect matches for a relaxing electronic date night in NYC! Both of these options have great atmosphere and fall nicely under your $100 budget. Here are my top picks:
                        </p>

<div className="grid gap-3 relative z-10">

<div className="bg-neutral-950/50 border border-white/5 hover:border-purple-500/30 rounded-xl p-3 flex sm:flex-row flex-col sm:items-center gap-4 transition-all group">
<div className="w-full sm:w-24 h-24 rounded-lg overflow-hidden shrink-0 relative">
<img alt="Concert" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute top-1.5 left-1.5 bg-black/60 backdrop-blur-md rounded border border-white/10 px-1.5 py-0.5 flex flex-col items-center leading-none">
<span className="text-xs text-neutral-400 uppercase font-medium">Oct</span>
<span className="text-sm font-semibold text-white">24</span>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<span className="bg-purple-500/20 text-purple-300 text-xs px-2 py-0.5 rounded font-medium">98% Match</span>
<span className="text-xs font-light text-neutral-400">Synthwave / Chill</span>
</div>
<h3 className="text-base font-medium tracking-tight text-white truncate">The Midnight - Fall Tour</h3>
<p className="text-xs font-light text-neutral-400 mt-1 flex items-center gap-1.5 truncate">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Brooklyn Steel, NY • 8:00 PM
                                    </p>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 sm:border-l border-white/5 pt-3 sm:pt-0 sm:pl-4 mt-1 sm:mt-0">
<span className="text-sm font-semibold text-white">$55</span>
<button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap">
                                        Get Tickets
                                    </button>
</div>
</div>

<div className="bg-neutral-950/50 border border-white/5 hover:border-purple-500/30 rounded-xl p-3 flex sm:flex-row flex-col sm:items-center gap-4 transition-all group">
<div className="w-full sm:w-24 h-24 rounded-lg overflow-hidden shrink-0 relative">
<img alt="Concert" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute top-1.5 left-1.5 bg-black/60 backdrop-blur-md rounded border border-white/10 px-1.5 py-0.5 flex flex-col items-center leading-none">
<span className="text-xs text-neutral-400 uppercase font-medium">Oct</span>
<span className="text-sm font-semibold text-white">25</span>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-0.5 rounded font-medium">85% Match</span>
<span className="text-xs font-light text-neutral-400">Ambient / Lo-Fi</span>
</div>
<h3 className="text-base font-medium tracking-tight text-white truncate">Tycho - Open Air</h3>
<p className="text-xs font-light text-neutral-400 mt-1 flex items-center gap-1.5 truncate">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> The Brooklyn Mirage • 9:30 PM
                                    </p>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 sm:border-l border-white/5 pt-3 sm:pt-0 sm:pl-4 mt-1 sm:mt-0">
<span className="text-sm font-semibold text-white">$78</span>
<button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap">
                                        Get Tickets
                                    </button>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/10 flex gap-2">
<button className="text-xs text-neutral-400 hover:text-white border border-white/10 bg-white/5 rounded px-3 py-1.5 transition-colors">Show more options</button>
<button className="text-xs text-neutral-400 hover:text-white border border-white/10 bg-white/5 rounded px-3 py-1.5 transition-colors">Change location</button>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-6 border-b border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
<div className="flex items-center gap-2 text-neutral-400">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-medium">100% Buyer Guarantee</span>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<iconify-icon className="text-xl" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-xs font-medium">Verified Resale Available</span>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<iconify-icon className="text-xl" icon="solar:smartphone-2-linear"></iconify-icon>
<span className="text-xs font-medium">Mobile Ticketing</span>
</div>
</div>
</section>

<section className="py-16 lg:py-24 relative">
<div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-900/10 via-neutral-950/0 to-transparent z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

<div className="lg:col-span-8 space-y-4">
<div className="mb-8 flex justify-between items-end">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Popular to browse</h2>
<p className="text-sm font-light text-neutral-400">Top selling events near you right now.</p>
</div>
<a className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors hidden sm:block" href="#">See All</a>
</div>

<a className="block relative p-4 rounded-2xl border border-purple-500/20 bg-purple-900/5 hover:bg-purple-900/10 transition-all group overflow-hidden" href="#">
<div className="absolute -top-3 left-5 bg-purple-500 text-white text-xs font-semibold uppercase px-2 py-0.5 rounded-full tracking-wider z-10 scale-90 origin-bottom-left">High Demand</div>
<div className="flex items-center gap-4 mt-2 sm:mt-0">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 relative">
<img alt="Sports" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white group-hover:text-purple-300 transition-colors truncate">Knicks vs. Celtics</h3>
<div className="text-right shrink-0 ml-4 hidden sm:block">
<span className="text-sm font-semibold tracking-tight text-white">From $120</span>
</div>
</div>
<p className="text-xs font-light text-neutral-400 flex items-center gap-1.5 mb-1.5 truncate">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Sat, Oct 25 • 7:30 PM
                                </p>
<p className="text-xs font-light text-neutral-500 flex items-center gap-1.5 truncate">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Madison Square Garden, NY
                                </p>
</div>
<div className="text-right shrink-0 sm:hidden">
<span className="text-sm font-semibold text-white">$120+</span>
</div>
</div>
</a>

<a className="block relative p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all group overflow-hidden" href="#">
<div className="flex items-center gap-4">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 relative">
<img alt="Theater" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1507676184212-d0330a156f88?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white group-hover:text-purple-300 transition-colors truncate">Hamilton: An American Musical</h3>
<div className="text-right shrink-0 ml-4 hidden sm:block">
<span className="text-sm font-semibold tracking-tight text-white">From $145</span>
</div>
</div>
<p className="text-xs font-light text-neutral-400 flex items-center gap-1.5 mb-1.5 truncate">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Sun, Oct 26 • 2:00 PM
                                </p>
<p className="text-xs font-light text-neutral-500 flex items-center gap-1.5 truncate">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Richard Rodgers Theatre, NY
                                </p>
</div>
<div className="text-right shrink-0 sm:hidden">
<span className="text-sm font-semibold text-white">$145+</span>
</div>
</div>
</a>
<a className="block sm:hidden text-center text-sm font-medium text-purple-400 hover:text-purple-300 mt-6 pt-4 border-t border-white/5" href="#">View All Trending Events</a>
</div>

<div className="lg:col-span-4">
<div className="glass-panel rounded-2xl p-6 lg:p-8 sticky top-24">
<h3 className="text-lg font-medium tracking-tight text-white mb-6 border-b border-white/10 pb-4">Browse by Category</h3>
<div className="grid grid-cols-2 gap-3 mb-6">
<a className="bg-black/40 hover:bg-white/5 border border-white/5 hover:border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-colors text-center group" href="#">
<iconify-icon className="text-2xl text-purple-400 group-hover:scale-110 transition-transform" icon="solar:music-notes-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-200">Concerts</span>
</a>
<a className="bg-black/40 hover:bg-white/5 border border-white/5 hover:border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-colors text-center group" href="#">
<iconify-icon className="text-2xl text-blue-400 group-hover:scale-110 transition-transform" icon="solar:cup-star-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-200">Sports</span>
</a>
<a className="bg-black/40 hover:bg-white/5 border border-white/5 hover:border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-colors text-center group" href="#">
<iconify-icon className="text-2xl text-emerald-400 group-hover:scale-110 transition-transform" icon="solar:masks-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-200">Theater</span>
</a>
<a className="bg-black/40 hover:bg-white/5 border border-white/5 hover:border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-colors text-center group" href="#">
<iconify-icon className="text-2xl text-orange-400 group-hover:scale-110 transition-transform" icon="solar:microphone-3-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-200">Comedy</span>
</a>
</div>
<div className="border-t border-white/10 pt-6">
<h4 className="text-sm font-medium text-white mb-4">Location Settings</h4>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-neutral-500" icon="solar:map-point-linear"></iconify-icon>
<select className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white appearance-none cursor-pointer focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all">
<option>New York, NY (50 miles)</option>
<option>Los Angeles, CA (50 miles)</option>
<option>Chicago, IL (50 miles)</option>
<option>Use Current Location</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-neutral-950 border-t border-white/5" id="upcoming">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Recently Announced</h2>
<p className="text-sm font-light text-neutral-400">Be the first to get tickets to these hot new events.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all">
<div className="relative h-48 overflow-hidden">
<img alt="Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 flex flex-col items-center">
<span className="text-xs text-neutral-400 uppercase font-medium scale-90">Nov</span>
<span className="text-lg font-semibold text-white leading-none">12</span>
</div>
<div className="absolute top-4 right-4 bg-purple-500/90 backdrop-blur-md text-white text-xs font-semibold uppercase px-2 py-0.5 rounded-full scale-90 origin-top-right">Presale</div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-purple-400 mb-2 font-medium">
<iconify-icon icon="solar:music-notes-linear"></iconify-icon> Pop / Rock
                        </div>
<h3 className="text-base font-medium text-white mb-1">Coldplay: Music of the Spheres</h3>
<p className="text-xs font-light text-neutral-400 mb-4">MetLife Stadium • East Rutherford, NJ</p>
<div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
<span className="text-sm font-medium text-white">From $89</span>
<button className="text-xs font-medium bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">See Tickets</button>
</div>
</div>
</div>

<div className="group bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all relative">
<div className="relative h-48 overflow-hidden">
<img alt="Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 flex flex-col items-center">
<span className="text-xs text-neutral-400 uppercase font-medium scale-90">Dec</span>
<span className="text-lg font-semibold text-white leading-none">05</span>
</div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-blue-400 mb-2 font-medium">
<iconify-icon icon="solar:cup-star-linear"></iconify-icon> NBA Basketball
                        </div>
<h3 className="text-base font-medium text-white mb-1">Lakers vs. Warriors</h3>
<p className="text-xs font-light text-neutral-400 mb-4">Crypto.com Arena • Los Angeles, CA</p>
<div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
<span className="text-sm font-medium text-white">From $210</span>
<button className="text-xs font-medium bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">See Tickets</button>
</div>
</div>
</div>

<div className="group bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all">
<div className="relative h-48 overflow-hidden">
<img alt="Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1585699324551-f6c309eedeca?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 flex flex-col items-center z-0">
<span className="text-xs text-neutral-400 uppercase font-medium scale-90">Jan</span>
<span className="text-lg font-semibold text-white leading-none">15</span>
</div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-orange-400 mb-2 font-medium">
<iconify-icon icon="solar:microphone-3-linear"></iconify-icon> Stand-up Comedy
                        </div>
<h3 className="text-base font-medium text-white mb-1">John Mulaney Live</h3>
<p className="text-xs font-light text-neutral-400 mb-4">The Chicago Theatre • Chicago, IL</p>
<div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
<span className="text-sm font-medium text-white">From $65</span>
<button className="text-xs font-medium bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">See Tickets</button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-purple-400 text-xl" icon="solar:ticket-linear"></iconify-icon>
<span className="text-base font-semibold tracking-tighter text-white uppercase flex items-center gap-2">
                            Demo Events <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-1.5 py-0.5 rounded text-xs tracking-normal">AI</span>
</span>
</div>
<p className="text-xs font-light text-neutral-400 max-w-xs leading-relaxed mb-6">The smart marketplace for live event tickets. Discover concerts, sports, theater, and family events tailored to you.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:play-linear"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Our Network</h4>
<ul className="space-y-3 text-sm font-light text-neutral-400">
<li><a className="hover:text-purple-400 transition-colors" href="#">Live Nation</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">House of Blues</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">TicketWeb</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Universe</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Help</h4>
<ul className="space-y-3 text-sm font-light text-neutral-400">
<li><a className="hover:text-purple-400 transition-colors" href="#">Customer Service</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Ticket Resale Info</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Refund Policy</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Sell Tickets</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3 text-sm font-light text-neutral-400">
<li><a className="hover:text-purple-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Affiliates</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs scale-90 text-neutral-500 font-light origin-left">© 2024 Demo Events Inc. All rights reserved.</p>
<div className="flex gap-4 text-xs scale-90 text-neutral-500 font-light origin-right">
<a className="hover:text-white transition-colors" href="#">Purchase Policy</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Do Not Sell My Info</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full p-4 glass-panel border-t border-white/10 z-50 md:hidden flex justify-center items-center">
<a className="w-full bg-white text-neutral-950 px-6 py-3 rounded-xl text-sm font-medium shadow-[0_0_15px_rgba(255,255,255,0.2)] flex justify-center items-center gap-2" href="#">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Ask AI to find tickets
        </a>
</div>

    </>
  );
}
