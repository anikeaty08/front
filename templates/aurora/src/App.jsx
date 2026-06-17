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



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
        
        // Parallax scrolling effect
        let ticking = false;
        
        function updateParallax() {
          const scrolled = window.pageYOffset;
          const viewportHeight = window.innerHeight;
          
          // Main hero background
          const parallaxBg = document.getElementById('parallax-bg');
          if (parallaxBg) {
            const speed = 0.5;
            parallaxBg.style.transform = `translateY(${scrolled * speed}px)`;
          }
          
          // Hero decorative crosses
          const parallaxCrosses = document.getElementById('parallax-crosses');
          if (parallaxCrosses) {
            const speed = 0.3;
            parallaxCrosses.style.transform = `translateY(${scrolled * speed}px)`;
          }
          
          // Hero wordmark
          const parallaxWordmark = document.getElementById('parallax-wordmark');
          if (parallaxWordmark) {
            const speed = 0.7;
            parallaxWordmark.style.transform = `translateY(${scrolled * speed}px)`;
          }
          
          // Second section background
          const parallaxBg2 = document.getElementById('parallax-bg2');
          if (parallaxBg2) {
            const rect = parallaxBg2.getBoundingClientRect();
            if (rect.bottom >= 0 && rect.top <= viewportHeight) {
              const speed = 0.4;
              const offset = (scrolled - parallaxBg2.parentElement.offsetTop) * speed;
              parallaxBg2.style.transform = `translateY(${offset}px)`;
            }
          }
          
          // Second section crosses
          const parallaxCrosses2 = document.getElementById('parallax-crosses2');
          if (parallaxCrosses2) {
            const rect = parallaxCrosses2.getBoundingClientRect();
            if (rect.bottom >= 0 && rect.top <= viewportHeight) {
              const speed = 0.2;
              const offset = (scrolled - parallaxCrosses2.parentElement.offsetTop) * speed;
              parallaxCrosses2.style.transform = `translateY(${offset}px)`;
            }
          }
          
          // Second section wordmark
          const parallaxWordmark2 = document.getElementById('parallax-wordmark2');
          if (parallaxWordmark2) {
            const rect = parallaxWordmark2.getBoundingClientRect();
            if (rect.bottom >= 0 && rect.top <= viewportHeight) {
              const speed = 0.6;
              const offset = (scrolled - parallaxWordmark2.parentElement.offsetTop) * speed;
              parallaxWordmark2.style.transform = `translateY(${offset}px)`;
            }
          }
          
          ticking = false;
        }
        
        function requestTick() {
          if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
          }
        }
        
        window.addEventListener('scroll', requestTick);
        
        // Initial call
        updateParallax();
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
      
<main className="min-h-screen overflow-hidden relative">

<div className="absolute top-0 right-0 bottom-0 left-0 group" id="parallax-bg" style={{transform: 'translateY(0px)'}}>
<img alt="Professional model portrait" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f15d174d-9b2b-4016-8514-447be5948fca_3840w.jpg?w=800&amp;q=80" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/>
<video aria-hidden="true" autoplay="" className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" loop="" muted="" playsinline="" preload="metadata">
<source src="https://cdn.midjourney.com/video/ad9849fc-d1cd-4a5c-b1fc-3bc3ac51610c/0.mp4" type="video/mp4"/>
</video>
<div className="bg-gradient-to-tr from-black/80 via-black/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="pointer-events-none absolute inset-0" id="parallax-crosses" style={{transform: 'translateY(0px)'}}>
<div className="absolute left-6 top-16 text-white/40">+</div>
<div className="absolute left-1/3 top-1/4 text-white/40">+</div>
<div className="absolute right-10 top-14 text-white/40">+</div>
<div className="absolute right-1/4 top-1/2 text-white/40">+</div>
<div className="absolute left-12 bottom-24 text-white/40">+</div>
<div className="absolute right-8 bottom-12 text-white/40">+</div>
</div>

<header className="z-10 flex md:px-10 pt-5 pr-6 pb-5 pl-6 relative items-center justify-between">
<div className="flex gap-3 items-center">
<div className="h-2.5 w-2.5 rounded-full bg-orange-500"></div>
<span className="md:text-base text-sm font-semibold tracking-tight cursor-pointer" onclick="window.location.href='/home'" role="button">AURORA</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
<a className="hover:text-white transition" href="/portfolio">Portfolio</a>
<a className="hover:text-white transition" href="/campaigns">Campaigns</a>
<a className="hover:text-white transition" href="/about">About</a>
<a className="hover:text-white transition" href="/contact">Contact</a>
<div className="h-5 w-px bg-white/20"></div>
<div className="flex items-center gap-4">
<a aria-label="X" href="#"><svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a aria-label="Instagram" href="#"><svg className="lucide lucide-instagram h-4 w-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a aria-label="LinkedIn" href="#"><svg className="lucide lucide-linkedin h-4 w-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a aria-label="Email" href="#"><svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
</div>
</nav>
<button className="md:hidden inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/10 transition">
<svg className="lucide lucide-menu h-4 w-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</header>

<section className="z-10 relative">
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:px-10 lg:pb-36 lg:pt-20 max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-28 pl-6 items-center">
<div className="max-w-xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight">
              International fashion model &amp; brand ambassador.
            </h1>
<p className="mt-5 text-base sm:text-lg text-white/80">
              Capturing elegance and beauty through high-fashion editorial work for leading luxury brands worldwide.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition" href="#">
                View portfolio
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-white/90 backdrop-blur hover:bg-white/10 transition" href="#">
                Book session
                <svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
</div>
</div>
</section>

<div className="pointer-events-none z-0 select-none absolute right-0 left-0" id="parallax-wordmark" style={{transform: 'translateY(0px)'}}>
<div className="md:px-10 max-w-full mr-auto ml-auto pr-6 pl-6 items-center justify-center">
<div className="whitespace-nowrap text-[20vw] leading-none font-semibold text-orange-500/95 tracking-tight text-center">AURORA</div>
</div>
</div>

<aside className="hidden md:block z-10 absolute right-6 bottom-6">
</aside>
</main><main className="relative min-h-screen overflow-hidden">

<div className="absolute top-0 right-0 bottom-0 left-0" id="parallax-bg2" style={{transform: 'translateY(-408.4px)'}}>
<img alt="Magazine editorial layout" className="h-full w-full object-cover" src="https://cdn.midjourney.com/4c229331-ac40-464c-b59e-aa49d0c23b1e/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="bg-gradient-to-b from-slate-900/0 to-[#000000]/30 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0" id="parallax-crosses2" style={{transform: 'translateY(-204.2px)'}}>
<div className="absolute left-6 top-16 text-white/40">+</div>
<div className="absolute left-1/3 top-1/4 text-white/40">+</div>
<div className="absolute right-10 top-14 text-white/40">+</div>
<div className="absolute right-1/4 top-1/2 text-white/40">+</div>
<div className="absolute left-12 bottom-24 text-white/40">+</div>
<div className="absolute right-8 bottom-12 text-white/40">+</div>
</div>

<section className="z-10 relative">
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:px-10 lg:pb-36 lg:pt-20 max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-28 pl-6 items-center">
</div>
</section>

<div className="pointer-events-none z-0 select-none absolute right-0 bottom-0 left-0" id="parallax-wordmark2">
<div className="md:px-10 max-w-full mr-auto ml-auto pr-6 pl-6 items-center justify-center">
<div className="whitespace-nowrap text-[20vw] leading-none text-8xl font-semibold text-zinc-50/95 tracking-tight text-center">FEATURED</div>
</div>
</div>

<aside className="hidden md:block z-10 absolute right-6 bottom-6">
</aside>
</main>

<section className="bg-zinc-200 border-gray-200 border-t relative">
<div className="md:px-10 lg:py-28 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-gray-900">Recent Work</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Featured campaigns and collaborations from the past year, showcasing versatility across editorial, runway, and commercial projects.</p>
</div>
<div className="grid gap-8 md:gap-12 lg:gap-16">

<div className="overflow-hidden relative bg-gray-50 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur">
<div className="grid lg:grid-cols-2 items-center">
<div className="lg:h-[500px] overflow-hidden h-96 relative top-0 right-0 bottom-0 left-0">
<img alt="Luxury fashion campaign" className="h-full w-full object-cover" src="https://cdn.midjourney.com/8100cbe6-bf9b-44c2-8f39-31c4419fd0bc/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="lg:to-gray-50/50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="p-8 lg:p-12">
<div className="flex items-center gap-3 mb-4">
<div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium text-orange-600">Featured Campaign</span>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-4 text-gray-900">Luxury Fashion Week Paris 2024</h3>
<p className="text-gray-700 mb-6">Lead model for international luxury brand's Spring/Summer collection, featuring in editorial spreads across Vogue, Harper's Bazaar, and Elle magazines.</p>
<div className="flex flex-wrap gap-3 mb-6">
<span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">Editorial</span>
<span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">Runway</span>
<span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">International</span>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-500 transition" href="#">
              View campaign details
              <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 top-0 right-0 bottom-0 left-0">
<div className="group overflow-hidden bg-gray-50 rounded-xl relative top-0 right-0 bottom-0 left-0 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur">
<div className="overflow-hidden h-64 relative top-0 right-0 bottom-0 left-0">
<img alt="Beauty campaign" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/303eb9b3-46e9-4496-b5e6-491aba069c72/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="bg-gradient-to-t from-white/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="flex items-center gap-2 mb-2">
<div className="h-1 w-1 rounded-full bg-orange-500"></div>
<span className="text-xs font-medium text-orange-600">Beauty &amp; Cosmetics</span>
</div>
<h4 className="font-semibold text-gray-900 mb-1">International Beauty Brand</h4>
<p className="text-sm text-gray-700">Global skincare campaign</p>
</div>
</div>
<div className="group overflow-hidden bg-gray-50 rounded-xl relative top-0 right-0 bottom-0 left-0 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur">
<div className="overflow-hidden h-64 relative top-0 right-0 bottom-0 left-0">
<img alt="Fashion editorial" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/ffc58662-a799-4e47-b14c-9dd655e6eb76/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="bg-gradient-to-t from-white/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="flex items-center gap-2 mb-2">
<div className="h-1 w-1 rounded-full bg-orange-500"></div>
<span className="text-xs font-medium text-orange-600">Editorial</span>
</div>
<h4 className="font-semibold text-gray-900 mb-1">Vogue Italia Spread</h4>
<p className="text-sm text-gray-700">8-page fashion editorial</p>
</div>
</div>
<div className="group relative overflow-hidden md:col-span-2 lg:col-span-1 bg-gray-50 rounded-xl top-0 right-0 bottom-0 left-0 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur">
<div className="overflow-hidden h-64 relative top-0 right-0 bottom-0 left-0">
<img alt="Brand ambassador" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/a470d2d9-6f02-4c01-9732-531a0e346fc9/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="bg-gradient-to-t from-white/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="flex items-center gap-2 mb-2">
<div className="h-1 w-1 rounded-full bg-orange-500"></div>
<span className="text-xs font-medium text-orange-600">Brand Ambassador</span>
</div>
<h4 className="font-semibold text-gray-900 mb-1">Luxury Timepiece Brand</h4>
<p className="text-sm text-gray-700">12-month partnership</p>
</div>
</div>
</div>
</div>

<div className="mt-20 pt-12 border-t border-gray-200">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-orange-500 mb-2">150+</div>
<div className="text-sm text-gray-600">Editorial shoots</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-orange-500 mb-2">25+</div>
<div className="text-sm text-gray-600">Runway shows</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-orange-500 mb-2">50+</div>
<div className="text-sm text-gray-600">Brand campaigns</div>
</div>
<div className="text-center lg:border-l lg:border-gray-200">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-orange-500 mb-2">15+</div>
<div className="text-sm text-gray-600">Countries worked</div>
</div>
</div>
</div>
</div>
</section><section className="bg-zinc-950 border-white/5 border-t relative cursor-pointer" onclick="window.location.href='/#testimonials'" role="button">
<div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-28">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Industry Recognition</h2>
<p className="text-lg text-white/60 max-w-2xl mx-auto">Trusted by leading fashion houses, photographers, and creative directors worldwide.</p>
</div>

<div className="overflow-hidden bg-zinc-900/50 ring-slate-50/10 ring-1 rounded-2xl mb-12 relative backdrop-blur">
<div className="grid lg:grid-cols-2 items-center">
<div className="lg:p-12 order-2 lg:order-1 pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center gap-3 mb-6">
<div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium text-orange-400">Creative Director</span>
</div>
<blockquote className="lg:text-2xl leading-relaxed text-xl font-medium text-white/90 mb-6">"AURORA brings an exceptional level of professionalism and artistry to every shoot. Her ability to embody the vision while adding her own creative interpretation is unmatched."</blockquote>
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center">
<span className="text-sm font-medium text-white">MR</span>
</div>
<div className="">
<div className="font-medium text-white">Marco Rodriguez</div>
<div className="text-sm text-white/60">Creative Director, Vogue Paris</div>
</div>
</div>
</div>
<div className="relative h-80 lg:h-96 overflow-hidden order-1 lg:order-2">
<img alt="Behind the scenes" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-zinc-900/80 lg:to-zinc-900/50"></div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
<div className="overflow-hidden bg-zinc-900/50 ring-slate-50/10 ring-1 rounded-xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">
<div className="mb-6">
<div className="flex items-center gap-1 mb-4">
<svg className="h-4 w-4 fill-orange-400 stroke-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="h-4 w-4 fill-orange-400 stroke-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="h-4 w-4 fill-orange-400 stroke-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="h-4 w-4 fill-orange-400 stroke-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="h-4 w-4 fill-orange-400 stroke-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
</div>
<blockquote className="text-white/90 mb-4">"Incredibly professional and versatile. AURORA transforms every concept into stunning visual storytelling."</blockquote>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
<span className="text-xs font-medium text-white">SL</span>
</div>
<div className="">
<div className="text-sm font-medium text-white">Sarah Laurent</div>
<div className="text-xs text-white/60">Fashion Photographer</div>
</div>
</div>
</div>
<div className="overflow-hidden bg-zinc-900/50 ring-slate-50/10 ring-1 rounded-xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">
<div className="mb-6">
<div className="flex items-center gap-1 mb-4">
<svg className="h-4 w-4 fill-orange-400 stroke-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="h-4 w-4 fill-orange-400 stroke-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="h-4 w-4 fill-orange-400 stroke-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="h-4 w-4 fill-orange-400 stroke-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="h-4 w-4 fill-orange-400 stroke-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
</div>
<blockquote className="text-white/90 mb-4">"AURORA's dedication and natural talent make her our go-to model for luxury campaigns. Always exceeds expectations."</blockquote>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
<span className="text-xs font-medium text-white">JC</span>
</div>
<div className="">
<div className="text-sm font-medium text-white">James Chen</div>
<div className="text-xs text-white/60">Brand Director</div>
</div>
</div>
</div>
<div className="overflow-hidden bg-zinc-900/50 ring-slate-50/10 ring-1 rounded-xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">
<div className="mb-6">
<div className="flex items-center gap-1 mb-4">
<svg className="h-4 w-4 fill-orange-400 stroke-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="h-4 w-4 fill-orange-400 stroke-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="h-4 w-4 fill-orange-400 stroke-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="h-4 w-4 fill-orange-400 stroke-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="h-4 w-4 fill-orange-400 stroke-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
</div>
<blockquote className="text-white/90 mb-4">"A true professional with an extraordinary range. AURORA brings elegance and authenticity to every project."</blockquote>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
<span className="text-xs font-medium text-white">AN</span>
</div>
<div>
<div className="text-sm font-medium text-white">Amelia Noir</div>
<div className="text-xs text-white/60">Fashion Editor</div>
</div>
</div>
</div>
</div>

<div className="text-center">
<h3 className="text-xl font-semibold tracking-tight mb-8 text-white/90">Featured In</h3>
<div className="flex flex-wrap gap-8 lg:gap-12 opacity-60 items-center justify-center">
<div className="text-lg font-medium text-white/80">VOGUE</div>
<div className="text-lg font-medium text-white/80">HARPER'S BAZAAR</div>
<div className="text-lg font-medium text-white/80">ELLE</div>
<div className="text-lg font-medium text-white/80">MARIE CLAIRE</div>
<div className="text-lg font-medium text-white/80">W MAGAZINE</div>
</div>
</div>
</div>
</section><section className="relative bg-zinc-200 border-gray-200 border-t">
<div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-28">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="">
<div className="flex items-center gap-3 mb-6">
<div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium text-orange-600">Let's Work Together</span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-gray-900">Ready to create something extraordinary?</h2>
<p className="text-lg text-gray-600 mb-8 max-w-lg">Whether you're planning an editorial shoot, runway show, or brand campaign, I'm here to bring your vision to life with professionalism and artistry.</p>

<div className="space-y-4 mb-8">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-xl bg-gray-50 backdrop-blur flex items-center justify-center">
<svg className="h-5 w-5 text-orange-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div className="">
<div className="text-sm font-medium text-gray-900">Email</div>
<div className="text-sm text-gray-600">hello@ariamodel.com</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-xl bg-gray-50 backdrop-blur flex items-center justify-center">
<svg className="h-5 w-5 text-orange-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div className="">
<div className="text-sm font-medium text-gray-900">Management</div>
<div className="text-sm text-gray-600">+1 (555) 123-4567</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-xl bg-gray-50 backdrop-blur flex items-center justify-center">
<svg className="h-5 w-5 text-orange-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="">
<div className="text-sm font-medium text-gray-900">Based in</div>
<div className="text-sm text-gray-600">New York, Paris, Milan</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
<div className="">
<div className="text-xl font-semibold text-gray-900 mb-1">24h</div>
<div className="text-xs text-gray-600">Response time</div>
</div>
<div>
<div className="text-xl font-semibold text-gray-900 mb-1">Global</div>
<div className="text-xs text-gray-600">Availability</div>
</div>
<div className="">
<div className="text-xl font-semibold text-gray-900 mb-1">Bilingual</div>
<div className="text-xs text-gray-600">EN • FR</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative overflow-hidden rounded-2xl bg-gray-50 backdrop-blur border border-gray-200 p-8">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-4">
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="firstName">First Name</label>
<input className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition" id="firstName" name="firstName" placeholder="Enter your first name" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="lastName">Last Name</label>
<input className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition" id="lastName" name="lastName" placeholder="Enter your last name" type="text"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition" id="email" name="email" placeholder="your.email@example.com" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="company">Company/Agency</label>
<input className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition" id="company" name="company" placeholder="Your company or agency" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="projectType">Project Type</label>
<select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition" id="projectType" name="projectType">
<option value="">Select project type</option>
<option value="editorial">Editorial Fashion</option>
<option value="runway">Runway Show</option>
<option value="commercial">Commercial Campaign</option>
<option value="beauty">Beauty &amp; Cosmetics</option>
<option value="brand">Brand Ambassador</option>
<option value="other">Other</option>
</select>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition resize-none" id="message" name="message" placeholder="Tell me about your project, timeline, and vision..." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 text-white px-6 py-3 font-medium hover:bg-orange-400 transition-colors" type="submit">
              Send Message
              <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
</form>
</div>

<div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-orange-500/20 blur-xl"></div>
<div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-orange-500/10 blur-2xl"></div>
</div>
</div>
</div>
</section><footer className="relative z-10 bg-black/95 border-t border-white/10 backdrop-blur">
<div className="md:px-10 lg:py-20 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

<div className="space-y-8">
<div className="">
<div className="flex items-center gap-3 mb-4">
<div className="h-2.5 w-2.5 rounded-full bg-orange-500"></div>
<span className="text-lg font-semibold tracking-tight cursor-pointer" onclick="window.location.href='/home'" role="button">AURORA</span>
</div>
<p className="text-white/60 max-w-md">
                International fashion model specializing in high-end editorial, runway, and commercial campaigns.
              </p>
</div>
<div className="flex items-center gap-4">
<a className="text-white/60 hover:text-white transition" href="#">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-white/60 hover:text-white transition" href="#">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-white/60 hover:text-white transition" href="#">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-white/60 hover:text-white transition" href="#">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
</a>
</div>
<div className="space-y-3">
<p className="text-sm font-medium text-white/90">Ready to collaborate?</p>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-orange-500 text-black px-4 py-2 text-sm font-medium hover:bg-orange-400 transition" href="#">
                  Get in touch
                  <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/10 transition" href="#">
                  Download comp card
                </a>
</div>
</div>
</div>

<div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
<div className="">
<h3 className="text-sm font-medium text-white mb-4">Services</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-white/60 hover:text-white transition" href="#">Editorial Fashion</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition" href="#">Runway Shows</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition" href="#">Commercial Campaigns</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition" href="#">Beauty &amp; Cosmetics</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition" href="#">Brand Ambassador</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-medium text-white mb-4">Experience</h3>
<ul className="space-y-3">
<li className=""><a className="hover:text-white transition text-sm text-white/60" href="/portfolio">Portfolio</a></li>
<li className=""><a className="hover:text-white transition text-sm text-white/60" href="/compaigns">Campaigns</a></li>
<li className=""><a className="hover:text-white transition text-sm text-white/60" href="/#testimonials">Testimonials</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition" href="#">Press</a></li>
<li className=""><a className="hover:text-white transition text-sm text-white/60" href="/contact">Contact</a></li>
</ul>
</div>
</div>
</div>

<div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-white/60">
            © 2024 ARIA. All rights reserved.
          </p>
<div className="flex items-center gap-6 text-sm text-white/60">
<a className="hover:text-white transition" href="#">Media Kit</a>
<a className="hover:text-white transition" href="#">Terms of Use</a>
<a className="hover:text-white transition" href="#">Privacy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
