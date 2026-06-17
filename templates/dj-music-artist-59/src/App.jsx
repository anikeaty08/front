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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1682289386314-1f695d8d5eed?w=3840&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<div className="noise"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm tracking-widest font-medium text-white hover:text-neutral-400 transition-colors uppercase" href="#">
                Christie Live
            </a>
<div className="hidden md:flex gap-8">
<a className="text-xs text-neutral-400 hover:text-white transition-colors uppercase tracking-wider" href="#music">Music</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors uppercase tracking-wider" href="#visuals">Visuals</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors uppercase tracking-wider" href="#dates">Tour</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors uppercase tracking-wider" href="#contact">Contact</a>
</div>
<a className="md:hidden text-white" href="#contact">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</a>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-16 relative items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fuchsia-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] uppercase tracking-wider text-neutral-300">New Mix Available</span>
</div>
<h1 className="text-6xl md:text-9xl font-medium tracking-tighter text-white mb-6 leading-none uppercase">
                Christie Live
            </h1>
<p className="text-lg md:text-xl text-neutral-400 font-light tracking-wide max-w-lg mx-auto mb-10">
                Deep House <span className="text-neutral-600 mx-2">/</span> Techno <span className="text-neutral-600 mx-2">/</span> Ambient
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="group relative px-8 py-3 bg-white text-black text-sm font-medium rounded-full overflow-hidden transition-transform active:scale-95" href="#music">
<span className="relative z-10 flex items-center gap-2">
                        Listen Now
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
<a className="px-8 py-3 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/5 transition-colors" href="#dates">
                    Upcoming Dates
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<iconify-icon className="text-neutral-600" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#080808]" id="music">
<div className="max-w-screen-xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-2">Latest Sets</h2>
<p className="text-sm text-neutral-500">Curated sounds from recent live performances.</p>
</div>
<div className="flex gap-4 mt-6 md:mt-0">
<a className="p-2 border border-white/10 rounded-full hover:border-white/30 text-neutral-400 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:soundwave-linear" width="20"></iconify-icon>
</a>
<a className="p-2 border border-white/10 rounded-full hover:border-white/30 text-neutral-400 hover:text-white transition-all" href="#">
<iconify-icon icon="brandico:spotify" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 group relative border border-white/10 bg-white/5 rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[2/1]">

<iframe allow="autoplay" className="absolute inset-0 grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-500" frameborder="no" height="100%" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1155998638&amp;color=%231a1a1a&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" width="100%">
</iframe>
<div className="absolute top-4 left-4 z-20">
<span className="px-2 py-1 bg-black/50 backdrop-blur text-[10px] uppercase tracking-wider rounded text-white border border-white/10">Featured Mix</span>
</div>
</div>

<div className="flex flex-col gap-3">

<div className="group p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-pointer flex items-center gap-4">
<div className="w-12 h-12 rounded bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-medium text-white truncate">Berlin Midnight Session</h3>
<p className="text-xs text-neutral-500 truncate">Techno • 1hr 20m</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
</div>

<div className="group p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-pointer flex items-center gap-4">
<div className="w-12 h-12 rounded bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-medium text-white truncate">Warehouse Project Live</h3>
<p className="text-xs text-neutral-500 truncate">Deep House • 55m</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
</div>

<div className="group p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-pointer flex items-center gap-4">
<div className="w-12 h-12 rounded bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-medium text-white truncate">Sunset at Ibiza</h3>
<p className="text-xs text-neutral-500 truncate">Ambient • 45m</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505]" id="visuals">
<div className="max-w-screen-xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12">Visual Experiences</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

<div className="group relative aspect-video bg-[#0a0a0a] overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<a className="flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300 opacity-0 absolute top-0 right-0 bottom-0 left-0" href="#">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
<iconify-icon className="text-white ml-1" icon="solar:play-linear" width="32"></iconify-icon>
</div>
</a>
<div className="absolute bottom-6 left-6">
<h3 className="text-lg font-medium text-white mb-1">Boiler Room Set</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">London, UK</p>
</div>
</div>

<div className="group relative aspect-video bg-[#0a0a0a] overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<a className="flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300 opacity-0 absolute top-0 right-0 bottom-0 left-0" href="#">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
<iconify-icon className="text-white ml-1" icon="solar:play-linear" width="32"></iconify-icon>
</div>
</a>
<div className="absolute bottom-6 left-6">
<h3 className="text-lg font-medium text-white mb-1">Festival Highlights</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Summer 2023</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#080808]" id="dates">
<div className="max-w-screen-xl mx-auto px-6">
<div className="flex flex-col md:flex-row mb-12 items-start justify-between">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Upcoming</h2>
<div className="mt-4 md:mt-0">
<form className="flex w-full max-w-xs border-b border-white/20 focus-within:border-white transition-colors">
<input className="bg-transparent w-full py-2 text-sm text-white placeholder-neutral-600 focus:outline-none" placeholder="Join newsletter" type="email"/>
<button className="text-neutral-500 hover:text-white transition-colors" type="button">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="flex flex-col border-t border-white/10">

<div className="group flex flex-col md:flex-row md:items-center hover:bg-white/[0.02] transition-colors cursor-default border-white/10 border-b pt-6 pb-6 relative justify-between">
<div className="flex items-center gap-8">
<div className="w-16 text-sm font-medium text-neutral-500 group-hover:text-white transition-colors">
                            OCT 12
                        </div>
<div className="flex flex-col">
<span className="text-xl font-medium text-white tracking-tight">Fabric</span>
<span className="text-sm text-neutral-500">London, United Kingdom</span>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
<a className="hover:bg-neutral-200 transition-colors text-xs font-medium text-black bg-white rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="#">Tickets</a>
<a className="px-4 py-1.5 text-xs font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors" href="#">RSVP</a>
</div>
</div>

<div className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors cursor-default">
<div className="flex items-center gap-8">
<div className="w-16 text-sm font-medium text-neutral-500 group-hover:text-white transition-colors">
                            NOV 04
                        </div>
<div className="flex flex-col">
<span className="text-xl font-medium text-white tracking-tight">Berghain</span>
<span className="text-sm text-neutral-500">Berlin, Germany</span>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
<span className="px-4 py-1.5 text-xs font-medium text-neutral-400 border border-white/5 bg-white/5 rounded-full">Sold Out</span>
</div>
</div>

<div className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors cursor-default">
<div className="flex items-center gap-8">
<div className="w-16 text-sm font-medium text-neutral-500 group-hover:text-white transition-colors">
                            DEC 15
                        </div>
<div className="flex flex-col">
<span className="text-xl font-medium text-white tracking-tight">Elsewhere</span>
<span className="text-sm text-neutral-500">Brooklyn, NY</span>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
<a className="px-4 py-1.5 text-xs font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-colors" href="#">Tickets</a>
<a className="px-4 py-1.5 text-xs font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors" href="#">RSVP</a>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 bg-[#050505] border-t border-white/5" id="contact">
<div className="max-w-screen-xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start">
<span className="text-lg font-medium text-white tracking-tight mb-4">CHRISTIE LIVE</span>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:instagram" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:soundcloud" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col items-center md:items-end gap-2 text-sm text-neutral-500">
<a className="hover:text-white transition-colors flex items-center gap-2" href="mailto:booking@christielive.com">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                        booking@christielive.com
                    </a>
<span className="text-xs text-neutral-700">© 2023 Christie Live Music. All rights reserved.</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
