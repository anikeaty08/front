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
                'stroke-width': 1.5
            }
        });

        (function(){
            const once=true;
            if(!window.__inViewIO){
                window.__inViewIO=new IntersectionObserver((entries)=>{
                    entries.forEach((entry)=>{
                        if(entry.isIntersecting){
                            entry.target.classList.add("animate");
                            if(once)window.__inViewIO.unobserve(entry.target)
                        }
                    })
                },{threshold:0.1,rootMargin:"0px 0px -50px 0px"})
            }
            window.initInViewAnimations=function(selector=".animate-on-scroll"){
                document.querySelectorAll(selector).forEach((el)=>{window.__inViewIO.observe(el)})
            };
            document.addEventListener("DOMContentLoaded",()=>initInViewAnimations())
        })();
    
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
      

<div className="fixed z-0 top-0 right-0 bottom-0 left-0 pointer-events-none">
<img alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b5079f4-4ddd-433b-a936-fc8f7dea9df0_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-[#050505]/0 to-[#050505]/0"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none flex w-full max-w-[1800px] mx-auto border-r border-white/5 opacity-40">
<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
<span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">01</span>
</div>
<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden hidden sm:block">
<div className="absolute top-0 -left-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-beam-1"></div>
<span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">02</span>
</div>
<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden hidden md:block">
<div className="absolute top-0 -left-[1px] w-[1px] h-96 bg-gradient-to-b from-transparent via-orange-500/80 to-transparent animate-beam-2"></div>
<span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">03</span>
</div>
<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden hidden lg:block">
<div className="absolute top-0 -left-[1px] w-[1px] h-48 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-beam-3"></div>
<span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">04</span>
</div>
<div className="flex-1 border-l border-white/5 h-full relative overflow-hidden hidden xl:block">
<span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">05</span>
</div>
</div>

<main className="relative z-10 w-full max-w-[1800px] mx-auto px-4 py-8 md:px-8 md:py-12 flex flex-col min-h-screen">

<nav className="flex items-center justify-between mb-24 animate-on-scroll">
<div className="flex items-center gap-3">
<div className="flex bg-gradient-to-tr from-orange-500 to-amber-500 w-8 h-8 rounded-full items-center justify-center ring-1 ring-white/20">
<div className="w-2.5 h-2.5 bg-[#050505] rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tight uppercase text-white">Travel Gallery</span>
</div>
<div className="flex items-center gap-6">
<a className="hidden sm:block text-xs font-medium tracking-widest uppercase hover:text-white transition-colors text-neutral-500" href="#">Locations</a>
<a className="hidden sm:block text-xs font-medium tracking-widest uppercase hover:text-white transition-colors text-neutral-500" href="#">Journal</a>
<button className="button-custom scale-90 hover:scale-95 transition-transform">
<span className="inner">
                        View All
                        <i className="w-3 h-3 ml-1" data-lucide="arrow-right"></i>
</span>
</button>
</div>
</nav>

<div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between mb-20">
<div className="flex flex-col gap-6 max-w-4xl animate-on-scroll" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 text-orange-500 mb-2">
<span className="flex h-1.5 w-1.5 rounded-full bg-orange-500"></span>
<span className="text-xs font-bold tracking-widest uppercase text-orange-500/80">Curated Selection</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Destinations.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 leading-relaxed font-normal max-w-xl">
                    Discover the most loved and followed places of the moment. Explore their latest hidden gems around the world.
                </p>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 pb-20">

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111] animate-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="absolute -inset-1 bg-gradient-to-b from-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>
<img alt="Switzerland" className="card-image h-full w-full object-cover will-change-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute inset-x-0 bottom-0 p-5">
<div className="card-overlay flex flex-col gap-3 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
<h3 className="text-sm font-medium tracking-wide text-white uppercase">Switzerland</h3>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400 font-mono">01 — ALP</span>
<button className="group/btn inline-flex items-center justify-center h-6 w-6 rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-orange-500 hover:border-orange-500 hover:text-black">
<i className="h-3 w-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111] animate-on-scroll" style={{animationDelay: '0.25s'}}>
<div className="absolute -inset-1 bg-gradient-to-b from-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>
<img alt="Big Sur" className="card-image h-full w-full object-cover will-change-transform group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute inset-x-0 bottom-0 p-5">
<div className="card-overlay flex flex-col gap-3 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
<h3 className="text-sm font-medium tracking-wide text-white uppercase">Big Sur</h3>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400 font-mono">02 — USA</span>
<button className="group/btn inline-flex items-center justify-center h-6 w-6 rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-orange-500 hover:border-orange-500 hover:text-black">
<i className="h-3 w-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111] animate-on-scroll" style={{animationDelay: '0.3s'}}>
<div className="absolute -inset-1 bg-gradient-to-b from-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>
<img alt="Paris" className="card-image h-full w-full object-cover will-change-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute inset-x-0 bottom-0 p-5">
<div className="card-overlay flex flex-col gap-3 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
<h3 className="text-sm font-medium tracking-wide text-white uppercase">Paris</h3>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400 font-mono">03 — FRA</span>
<button className="group/btn inline-flex items-center justify-center h-6 w-6 rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-orange-500 hover:border-orange-500 hover:text-black">
<i className="h-3 w-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111] animate-on-scroll" style={{animationDelay: '0.35s'}}>
<div className="absolute -inset-1 bg-gradient-to-b from-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>
<img alt="Cappadocia" className="card-image h-full w-full object-cover will-change-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute inset-x-0 bottom-0 p-5">
<div className="card-overlay flex flex-col gap-3 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
<h3 className="text-sm font-medium tracking-wide text-white uppercase">Cappadocia</h3>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400 font-mono">04 — TUR</span>
<button className="group/btn inline-flex items-center justify-center h-6 w-6 rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-orange-500 hover:border-orange-500 hover:text-black">
<i className="h-3 w-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111] animate-on-scroll" style={{animationDelay: '0.4s'}}>
<div className="absolute -inset-1 bg-gradient-to-b from-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>
<img alt="Camping" className="card-image h-full w-full object-cover will-change-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute inset-x-0 bottom-0 p-5">
<div className="card-overlay flex flex-col gap-3 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
<h3 className="text-sm font-medium tracking-wide text-white uppercase">Camping</h3>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400 font-mono">05 — ADV</span>
<button className="group/btn inline-flex items-center justify-center h-6 w-6 rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-orange-500 hover:border-orange-500 hover:text-black">
<i className="h-3 w-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111] animate-on-scroll" style={{animationDelay: '0.45s'}}>
<div className="absolute -inset-1 bg-gradient-to-b from-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>
<img alt="Hiking" className="card-image h-full w-full object-cover will-change-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute inset-x-0 bottom-0 p-5">
<div className="card-overlay flex flex-col gap-3 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
<h3 className="text-sm font-medium tracking-wide text-white uppercase">Hiking</h3>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400 font-mono">06 — MOU</span>
<button className="group/btn inline-flex items-center justify-center h-6 w-6 rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-orange-500 hover:border-orange-500 hover:text-black">
<i className="h-3 w-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111] animate-on-scroll" style={{animationDelay: '0.5s'}}>
<div className="absolute -inset-1 bg-gradient-to-b from-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>
<img alt="The Lakes" className="card-image h-full w-full object-cover will-change-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute inset-x-0 bottom-0 p-5">
<div className="card-overlay flex flex-col gap-3 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
<h3 className="text-sm font-medium tracking-wide text-white uppercase">The Lakes</h3>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400 font-mono">07 — UK</span>
<button className="group/btn inline-flex items-center justify-center h-6 w-6 rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-orange-500 hover:border-orange-500 hover:text-black">
<i className="h-3 w-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111] animate-on-scroll" style={{animationDelay: '0.55s'}}>
<div className="absolute -inset-1 bg-gradient-to-b from-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>
<img alt="Cinque Terre" className="card-image h-full w-full object-cover will-change-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute inset-x-0 bottom-0 p-5">
<div className="card-overlay flex flex-col gap-3 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
<h3 className="text-sm font-medium tracking-wide text-white uppercase">Cinque Terre</h3>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400 font-mono">08 — ITA</span>
<button className="group/btn inline-flex items-center justify-center h-6 w-6 rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-orange-500 hover:border-orange-500 hover:text-black">
<i className="h-3 w-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111] animate-on-scroll" style={{animationDelay: '0.6s'}}>
<div className="absolute -inset-1 bg-gradient-to-b from-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>
<img alt="Venice" className="card-image h-full w-full object-cover will-change-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute inset-x-0 bottom-0 p-5">
<div className="card-overlay flex flex-col gap-3 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
<h3 className="text-sm font-medium tracking-wide text-white uppercase">Venice</h3>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400 font-mono">09 — ITA</span>
<button className="group/btn inline-flex items-center justify-center h-6 w-6 rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-orange-500 hover:border-orange-500 hover:text-black">
<i className="h-3 w-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111] animate-on-scroll" style={{animationDelay: '0.65s'}}>
<div className="absolute -inset-1 bg-gradient-to-b from-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>
<img alt="New Zealand" className="card-image h-full w-full object-cover will-change-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute inset-x-0 bottom-0 p-5">
<div className="card-overlay flex flex-col gap-3 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
<h3 className="text-sm font-medium tracking-wide text-white uppercase">New Zealand</h3>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400 font-mono">10 — NZL</span>
<button className="group/btn inline-flex items-center justify-center h-6 w-6 rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-orange-500 hover:border-orange-500 hover:text-black">
<i className="h-3 w-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111] animate-on-scroll" style={{animationDelay: '0.7s'}}>
<div className="absolute -inset-1 bg-gradient-to-b from-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>
<img alt="Forest" className="card-image h-full w-full object-cover will-change-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute inset-x-0 bottom-0 p-5">
<div className="card-overlay flex flex-col gap-3 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
<h3 className="text-sm font-medium tracking-wide text-white uppercase">Forest</h3>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400 font-mono">11 — NAT</span>
<button className="group/btn inline-flex items-center justify-center h-6 w-6 rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-orange-500 hover:border-orange-500 hover:text-black">
<i className="h-3 w-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111] animate-on-scroll" style={{animationDelay: '0.75s'}}>
<div className="absolute -inset-1 bg-gradient-to-b from-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>
<img alt="Istanbul" className="card-image h-full w-full object-cover will-change-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute inset-x-0 bottom-0 p-5">
<div className="card-overlay flex flex-col gap-3 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
<h3 className="text-sm font-medium tracking-wide text-white uppercase">Istanbul</h3>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400 font-mono">12 — TUR</span>
<button className="group/btn inline-flex items-center justify-center h-6 w-6 rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-orange-500 hover:border-orange-500 hover:text-black">
<i className="h-3 w-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
