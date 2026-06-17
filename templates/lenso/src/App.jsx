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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    (function () {
      const section = document.querySelector('.quoteRevealSection');
      const target = section ? section.querySelector('.quoteReveal') : null;
      const words = section ? section.querySelectorAll('.quote-word') : [];
      
      if (!section || !target || words.length === 0) return;

      // Initialize all words as gray
      words.forEach(word => {
        word.style.color = 'rgb(115 115 115)'; // text-neutral-500
      });

      function updateWordReveal() {
        const rect = target.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const viewportCenter = vh / 2;
        
        // Calculate distance from element center to viewport center
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
        const maxDistance = vh / 2;
        
        // Create a ratio where 0 = element is at viewport center, 1 = element is at edge
        const centerRatio = Math.max(0, Math.min(1, 1 - (distanceFromCenter / maxDistance)));
        
        // Calculate how many words to reveal based on center proximity
        const totalWords = words.length;
        const wordsToReveal = Math.floor(centerRatio * totalWords);
        
        // Update word colors
        words.forEach((word, index) => {
          if (index < wordsToReveal) {
            word.style.color = 'rgb(255 255 255)'; // text-white
          } else {
            word.style.color = 'rgb(115 115 115)'; // text-neutral-500
          }
        });
      }

      if (typeof IntersectionObserver !== 'undefined') {
        const io = new IntersectionObserver(updateWordReveal, { 
          threshold: Array.from({ length: 101 }, (_, i) => i / 100) 
        });
        io.observe(target);
      }

      window.addEventListener('scroll', updateWordReveal, { passive: true });
      window.addEventListener('resize', updateWordReveal);
      updateWordReveal();
    })();
  


    // Year
    const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

    // Mobile menu toggle
    const openBtn = document.querySelector('button[aria-label="Open menu"]');
    const closeBtn = document.getElementById('closeMenu');
    const menu = document.getElementById('mobileMenu');
    function toggleMenu(show){ if(!menu) return; menu.classList.toggle('hidden', !show); document.body.style.overflow = show ? 'hidden' : ''; }
    if (openBtn) openBtn.addEventListener('click', () => toggleMenu(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
    if (menu) menu.addEventListener('click', (e) => { if (e.target === menu) toggleMenu(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggleMenu(false); });

    // Icons (Lucide legacy support)
    if (window.lucide) {
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
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
      <div className="aura-background-component top-0 w-full -z-10 h-[1100px] absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="2IcJ39Gx68KiPG1qlgj8"></div>
</div>

<div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950"></div>

<section className="relative w-full sm:px-6 md:px-10 max-w-7xl mt-12 mr-auto mb-12 ml-auto px-4">

<header className="w-full">
<div className="flex gap-4 w-full mb-8 items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-white text-2xl" icon="solar:glasses-linear"></iconify-icon>
<span className="text-lg font-semibold text-white tracking-tight" style={{}}>LensO</span>
</div>
<nav className="hidden md:flex gap-6 text-sm text-neutral-300 items-center">
<a className="hover:text-white transition-colors font-medium" href="#collection" style={{}}>Optical</a>
<a className="hover:text-white transition-colors font-medium" href="#sun" style={{}}>Sun</a>
<a className="hover:text-white transition-colors font-medium" href="#craftsmanship" style={{}}>Craftsmanship</a>
<a className="hover:text-white transition-colors font-medium" href="#pricing" style={{}}>Pricing</a>
</nav>
<div className="flex items-center gap-2">
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-white/10 bg-white/10 text-white hover:bg-white/15">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<a className="group relative inline-flex transition duration-300 ease-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 items-center justify-center hover:bg-white/15 text-white bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 hidden md:flex" href="#shop">
<span className="text-sm font-medium">Shop Collection</span>
<iconify-icon className="ml-2 text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<h1 className="max-w-5xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-4xl text-white tracking-tighter text-center mt-24 lg:mt-48 mr-auto ml-auto">
      See clearer. Look 
      <img alt="Eyewear Model" className="inline-block align-middle h-10 w-14 sm:h-12 sm:w-20 md:h-16 md:w-28 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.4),_0_6.7px_5.3px_rgba(0,0,0,0.5),_0_12.5px_10px_rgba(0,0,0,0.6),_0_22.3px_17.9px_rgba(0,0,0,0.7),_0_41.8px_33.4px_rgba(0,0,0,0.8),_0_100px_80px_rgba(0,0,0,0.9)] object-cover rounded-xl mr-2 ml-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/906ea8dc-b94e-4059-9ff4-c58e857af013_320w.webp" style={{}}/>
      sharper. Frame 
      <img alt="Acetate Detail" className="inline-block align-middle h-10 w-12 sm:h-12 sm:w-16 md:h-16 md:w-24 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.4),_0_6.7px_5.3px_rgba(0,0,0,0.5),_0_12.5px_10px_rgba(0,0,0,0.6),_0_22.3px_17.9px_rgba(0,0,0,0.7),_0_41.8px_33.4px_rgba(0,0,0,0.8),_0_100px_80px_rgba(0,0,0,0.9)] object-cover rounded-xl mr-2 ml-2" src="https://images.unsplash.com/photo-1590305173565-f789a8dd6be7?w=320&amp;q=80" style={{}}/> your perspective.
    </h1>

<p className="sm:text-2xl max-w-3xl text-base text-neutral-200 text-center mt-4 mx-auto">
      LensO defines the new standard in luxury eyewear—handcrafted bio‑acetate, precision optics, and timeless design for the modern visionary.
    </p>

<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-12 justify-center">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-neutral-400 tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center">

<span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">Shop Fall Collection</span>

<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium rounded-full blur-md">Shop Fall Collection</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
</button>
<a className="inline-flex items-center justify-center hover:bg-white/10 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] text-base font-medium text-white/90 bg-white/5 border-white/10 border rounded-full px-6 h-12 backdrop-blur" href="#story">
        Our Story
      </a>
</div>
</section>

<section className="sm:p-8 max-w-7xl relative bg-neutral-900/60 border-white/10 border rounded-3xl mt-32 mr-auto mb-20 ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur" id="collection">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col min-h-full justify-between">
<div className="">
<span className="text-sm font-normal text-neutral-400">Craftsmanship</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-white tracking-tighter mt-2">
            A frame built for comfort and style.
          </h2>

<div className="mt-8 relative">
<div className="hidden sm:flex flex-col gap-4 relative text-neutral-300 bg-transparent pr-4 pl-4">
<div className="relative">
<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-indigo-400 to-purple-400"></div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-4 h-4 z-10 relative bg-neutral-900 border-emerald-400 border-2 rounded-full mt-0.5">
<div className="w-1.5 h-1.5 absolute top-0.5 left-0.5 bg-emerald-400 rounded-full"></div>
</div>
<div className="flex-1 pb-6">
<span className="text-sm font-medium text-emerald-300">Mazzucchelli Acetate</span>
<p className="text-xs text-neutral-400 mt-1">Plant-based materials from Italy</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-indigo-400 to-purple-400"></div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-indigo-400 bg-neutral-900 z-10 relative mt-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-400 absolute top-0.5 left-0.5"></div>
</div>
<div className="flex-1 pb-6">
<span className="text-sm font-medium text-indigo-300">Titanium Hinges</span>
<p className="text-xs text-neutral-400 mt-1">Ultra-lightweight durability</p>
</div>
</div>
</div>
<div className="relative">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-purple-400 bg-neutral-900 z-10 relative mt-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-purple-400 absolute top-0.5 left-0.5"></div>
</div>
<div className="flex-1">
<span className="text-sm font-medium text-purple-300">Anti-reflective Coating</span>
<p className="text-xs text-neutral-400 mt-1">Crystal clear vision in any light</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full mt-10">
<div className="">
<p className="text-sm font-medium text-white tracking-tight">Designed for everyday wear</p>
<p className="text-sm text-neutral-300 mt-1 max-w-sm">
              Hypoallergenic materials, adjustable nose pads, and blue-light filtering options that keep you focused.
            </p>
<a className="inline-flex items-center justify-center gap-2 h-10 hover:bg-emerald-600/90 transition text-sm font-normal text-white bg-emerald-600 rounded-full mt-4 px-4 max-w-sm" href="#features">
              Explore styles
              <span className="inline-flex h-2 w-2 rounded-full bg-white"></span>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative">
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://images.unsplash.com/photo-1638276630550-36cccfdff836?w=800&amp;q=80)]" style={{}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/15 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<iconify-icon className="text-white" icon="solar:glasses-linear"></iconify-icon>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">Design</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Hand Polished</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://images.unsplash.com/photo-1655255367450-4ff591cc36db?w=800&amp;q=80)]" style={{}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<iconify-icon className="text-white" icon="solar:user-linear"></iconify-icon>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">Fit</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Universal Fit</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://images.unsplash.com/photo-1695074185308-058de8949508?w=800&amp;q=80)]" style={{}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<iconify-icon className="text-white" icon="solar:eye-linear"></iconify-icon>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">Lenses</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Clarity Enhance</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://images.unsplash.com/photo-1714419835082-2261e6fcc27b?w=800&amp;q=80)]" style={{}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<iconify-icon className="text-white" icon="solar:palette-linear"></iconify-icon>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">Colors</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Custom Tints</p>
</div>
</article>
</div>
</div>
</section>
<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 quoteRevealSection mr-auto ml-auto pt-8 pr-4 pb-20 pl-4" style={{'--reveal': '100%'}}>
<div className="relative overflow-hidden sm:p-10 ring-white/10 ring-1 bg-neutral-900 rounded-3xl pt-6 pr-6 pb-6 pl-6">

<div className="flex justify-center">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-neutral-200">
<iconify-icon className="text-white" icon="solar:star-linear"></iconify-icon>
        TRUSTED BY STYLISTS
      </span>
</div>

<div className="relative mt-8 sm:mt-10 quoteReveal">
<p className="mx-auto max-w-5xl text-center sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
<span className="quote-word transition-colors duration-300" data-word-index="0" style={{color: 'rgb(115, 115, 115)'}}>"LensO</span>
<span className="quote-word transition-colors duration-300" data-word-index="1" style={{color: 'rgb(115, 115, 115)'}}>frames</span>
<span className="quote-word transition-colors duration-300" data-word-index="2" style={{color: 'rgb(115, 115, 115)'}}>have</span>
<span className="quote-word transition-colors duration-300" data-word-index="3" style={{color: 'rgb(115, 115, 115)'}}>completely</span>
<span className="quote-word transition-colors duration-300 font-instrument-serif italic" data-word-index="4" style={{color: 'rgb(115, 115, 115)'}}>redefined</span>
<span className="quote-word transition-colors duration-300" data-word-index="5" style={{color: 'rgb(115, 115, 115)'}}>my</span>
<span className="quote-word transition-colors duration-300" data-word-index="6" style={{color: 'rgb(115, 115, 115)'}}>daily</span>
<span className="quote-word transition-colors duration-300" data-word-index="7" style={{color: 'rgb(115, 115, 115)'}}>look.</span>
<span className="quote-word transition-colors duration-300" data-word-index="8" style={{color: 'rgb(115, 115, 115)'}}>The</span>
<span className="quote-word transition-colors duration-300" data-word-index="9" style={{color: 'rgb(115, 115, 115)'}}>handcrafted</span>
<span className="quote-word transition-colors duration-300" data-word-index="10" style={{color: 'rgb(115, 115, 115)'}}>detail</span>
<span className="quote-word transition-colors duration-300" data-word-index="11" style={{color: 'rgb(115, 115, 115)'}}>and</span>
<span className="quote-word transition-colors duration-300" data-word-index="12" style={{color: 'rgb(115, 115, 115)'}}>optical</span>
<span className="quote-word transition-colors duration-300" data-word-index="13" style={{color: 'rgb(115, 115, 115)'}}>clarity</span>
<span className="quote-word transition-colors duration-300" data-word-index="14" style={{color: 'rgb(115, 115, 115)'}}>make</span>
<span className="quote-word transition-colors duration-300" data-word-index="15" style={{color: 'rgb(115, 115, 115)'}}>luxury</span>
<span className="quote-word transition-colors duration-300" data-word-index="16" style={{color: 'rgb(115, 115, 115)'}}>fashion</span>
<span className="quote-word transition-colors duration-300 font-instrument-serif italic" data-word-index="17" style={{color: 'rgb(115, 115, 115)'}}>effortless</span>
<span className="quote-word transition-colors duration-300" data-word-index="18" style={{color: 'rgb(115, 115, 115)'}}>to</span>
<span className="quote-word transition-colors duration-300" data-word-index="19" style={{color: 'rgb(115, 115, 115)'}}>wear."</span>
</p>
</div>

<div className="sm:mt-10 flex gap-3 mt-8 items-center justify-center">
<img alt="Author avatar" className="h-10 w-10 ring-1 ring-white/10 object-cover rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<span className="text-sm sm:text-base text-neutral-300 font-medium">Fashion Editor &amp; Stylist</span>
</div>
</div>

</section>

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4" id="features">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-white/70">Engineered for Vision</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white tracking-tighter">
          Material, lens, and fit—perfectly balanced
        </h2>
<p className="sm:text-lg max-w-[85ch] text-base text-neutral-300 mt-4">
          Featuring bio-based acetate from Italy, Japanese titanium components, and CR-39 lenses with advanced AR coating for superior clarity.
        </p>
</div>
</div>
<div className="space-y-6">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="relative lg:col-span-2 ring-1 ring-white/10 md:p-10 overflow-hidden bg-zinc-950 border-zinc-900 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
<div className="absolute -left-10 -top-16 h-64 w-64 bg-gradient-to-tr from-emerald-400/20 to-cyan-300/10 rounded-full blur-2xl"></div>
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="text-emerald-300 text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100">Sustainable by Design</h3>
</div>
<p className="text-zinc-300 max-w-2xl">
            Ethical luxury from day one: biodegradble bio-acetate, recycled titanium, plastic-free packaging, and carbon-neutral shipping.
            Our materials follow the highest ecological standards.
          </p>

<div className="mt-8 grid grid-cols-5 gap-4 md:gap-6">
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-400 text-xl" icon="solar:leaf-bold-duotone"></iconify-icon>
</div>
<span className="text-xs text-zinc-400">Bio-Based</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-400 text-xl" icon="solar:restart-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-400">Recycled</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-400 text-xl" icon="solar:medal-ribbon-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-400">Handmade</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-400 text-xl" icon="solar:verified-check-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-400">Certified</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="text-emerald-300 text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-400">Durable</span>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 bg-gradient-to-br from-emerald-900/20 via-neutral-900 to-slate-800 border-emerald-500/20 border rounded-3xl shadow-lg backdrop-blur h-full">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="relative h-56 sm:h-64 ring-1 ring-inset ring-emerald-500/20 overflow-hidden bg-gradient-to-br from-emerald-950/40 via-neutral-900 to-slate-800 rounded-2xl">
<div className="absolute right-6 top-8 sm:right-10 sm:top-10 w-[78%] rounded-2xl border border-emerald-500/30 bg-neutral-900/95 shadow-xl backdrop-blur">
<div className="flex items-center gap-2 px-4 py-3 border-b border-emerald-500/20 bg-emerald-950/30">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
<div className="ml-3 flex items-center gap-2">
<span className="text-xs text-emerald-400">Lens Layers</span>
</div>
</div>
<div className="p-4 relative h-32 flex items-center justify-center">
<div className="relative w-full h-full flex items-center justify-center">

<div className="absolute w-20 h-20 rounded-full border-2 border-emerald-400/30 bg-emerald-400/5 backdrop-blur scale-110"></div>
<div className="absolute w-20 h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur scale-100"></div>
<div className="absolute w-20 h-20 rounded-full border border-blue-400/20 bg-blue-400/5 backdrop-blur scale-90"></div>
</div>
<div className="absolute bottom-2 left-2 right-2">
<div className="grid grid-cols-3 gap-2 text-center">
<div className="rounded bg-emerald-950/50 border border-emerald-500/20 p-1">
<div className="text-xs font-medium text-emerald-400">UV</div>
<div className="text-[9px] text-neutral-400">400</div>
</div>
<div className="rounded bg-emerald-950/50 border border-emerald-500/20 p-1">
<div className="text-xs font-medium text-emerald-400">AR</div>
<div className="text-[9px] text-neutral-400">Coating</div>
</div>
<div className="rounded bg-emerald-950/50 border border-emerald-500/20 p-1">
<div className="text-xs font-medium text-emerald-400">Blue</div>
<div className="text-[9px] text-neutral-400">Filter</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute left-4 bottom-6 w-[35%] h-[45%] rounded-xl bg-neutral-950/95 border border-emerald-500/20 shadow-lg">
<div className="px-2 py-1.5 border-b border-emerald-500/20">
<span className="text-[10px] text-emerald-400 tracking-wide">CLARITY INDEX</span>
</div>
<div className="p-2 space-y-2">
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400">Transmission</span>
<div className="flex items-center gap-1">
<div className="h-1 w-6 rounded-full bg-neutral-800">
<div className="h-1 w-5 rounded-full bg-emerald-500"></div>
</div>
<span className="text-[9px] text-emerald-400">99%</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400">Reflection</span>
<div className="flex items-center gap-1">
<div className="h-1 w-6 rounded-full bg-neutral-800">
<div className="h-1 w-1 rounded-full bg-emerald-500"></div>
</div>
<span className="text-[9px] text-emerald-400">1%</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:eye-scan-linear"></iconify-icon>
<h3 className="sm:text-2xl text-2xl font-semibold tracking-tight">Precision Optics</h3>
</div>
<p className="text-sm text-neutral-400 mt-3">Advanced CR-39 and polycarbonate lenses with multi-layer coating for scratch resistance and zero glare.</p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300" href="#">
                View lens tech
                <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 via-transparent to-transparent pointer-events-none rounded-3xl"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1">
<article className="relative bg-neutral-900 border-white/10 border rounded-2xl p-6 h-full">
<div className="flex items-center justify-between">
<h3 className="text-white text-lg sm:text-xl tracking-tight font-medium">Customization</h3>
<span className="text-[11px] text-neutral-300">Bespoke</span>
</div>
<p className="mt-2 text-sm text-neutral-300">Tailor every detail to your face shape and personal style.</p>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between rounded-lg ring-1 ring-emerald-400/20 bg-emerald-500/10 px-3 py-2">
<span className="text-sm text-emerald-200">Frame Width</span>
<iconify-icon className="text-emerald-400" icon="solar:ruler-pen-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-emerald-400/20 bg-emerald-500/10 px-3 py-2">
<span className="text-sm text-emerald-200">Nose Bridge</span>
<iconify-icon className="text-emerald-400" icon="solar:maximize-square-minimalistic-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-emerald-400/20 bg-emerald-500/10 px-3 py-2">
<span className="text-sm text-emerald-200">Engraving</span>
<iconify-icon className="text-emerald-400" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-indigo-400/20 bg-indigo-500/10 px-3 py-2">
<span className="text-sm text-indigo-200">Lens Tint</span>
<iconify-icon className="text-indigo-400" icon="solar:palette-round-linear"></iconify-icon>
</div>
</div>
<div className="mt-4">
<span className="inline-flex items-center gap-2 text-[11px] text-emerald-200 bg-emerald-500/10 rounded-full px-2 py-1 ring-1 ring-emerald-400/20">
<iconify-icon className="text-emerald-400" icon="solar:star-linear"></iconify-icon>
            Made to order
          </span>
</div>
</article>
</div>

<div className="lg:col-span-2">
<aside className="relative overflow-hidden sm:rounded-3xl flex flex-col bg-zinc-950 border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5 h-full">
<div className="flex items-center justify-between text-xs sm:text-sm text-zinc-400">
<span className="">Technology</span>
<span className="">Beta</span>
</div>
<h4 className="sm:mt-4 sm:text-3xl md:text-4xl text-2xl font-semibold text-zinc-100 tracking-tight mt-3">
          AI-Powered Virtual Try-On
        </h4>
<p className="md:text-base text-sm text-zinc-300 mt-3">
          Scan your face in seconds using your webcam. Our AI algorithm analyzes your facial structure to recommend the perfect frame size and shape.
        </p>

<div className="mt-6 md:mt-8 relative overflow-hidden rounded-xl bg-zinc-900 h-24 flex items-center justify-center">
<div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(16,185,129,0.1)_50%,transparent_100%)] w-full h-full animate-pulse"></div>

<div className="grid grid-cols-12 gap-2 h-full w-full opacity-20">
<div className="border-r border-zinc-700 h-full"></div>
<div className="border-r border-zinc-700 h-full"></div>
<div className="border-r border-zinc-700 h-full"></div>
<div className="border-r border-zinc-700 h-full"></div>
<div className="border-r border-zinc-700 h-full"></div>
<div className="border-r border-zinc-700 h-full"></div>
<div className="border-r border-zinc-700 h-full"></div>
<div className="border-r border-zinc-700 h-full"></div>
<div className="border-r border-zinc-700 h-full"></div>
<div className="border-r border-zinc-700 h-full"></div>
<div className="border-r border-zinc-700 h-full"></div>
<div className="border-r border-zinc-700 h-full"></div>
</div>
<iconify-icon className="absolute text-4xl text-emerald-500" icon="solar:face-scan-square-linear"></iconify-icon>
</div>
<div className="mt-6 flex items-center gap-2 text-zinc-300 text-sm">
<iconify-icon className="text-emerald-500" icon="solar:camera-linear"></iconify-icon>
<span className="font-medium">Scan, fit, and purchase from home.</span>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4" id="pricing">
<div className="relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10 p-6 sm:p-10">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
<div className="">
<p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-neutral-400">(Collections)</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white mt-2 tracking-tighter">Iconic Frames</h2>
</div>
<p className="text-sm sm:text-base text-neutral-300 max-w-[42ch]">
          Includes prescription lenses, protective case, and microfiber cloth.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
<h3 className="text-xl text-white tracking-tight">Optical</h3>
<p className="text-sm text-neutral-400 mt-1">Single Vision</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl text-white tracking-tight">$145</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Anti-reflective
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Scratch resistant
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Acetate frame
            </li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white h-11 ring-1 ring-white/10 text-sm" href="#shop">Shop Optical</a>
</div>

<div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-500/10 to-transparent p-6 ring-1 ring-indigo-400/20">
<div className="flex items-center justify-between">
<h3 className="text-xl text-white tracking-tight">Sun</h3>
<span className="inline-flex items-center gap-1 rounded-lg border border-indigo-400/30 bg-indigo-500/10 px-2 py-1 text-[11px] text-indigo-200">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
              Trending
            </span>
</div>
<p className="text-sm text-neutral-400 mt-1">Polarized</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl text-white tracking-tight">$175</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> 100% UV Protection
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Polarized lenses
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Premium tints
            </li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-b from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-600 text-white h-11 ring-1 ring-indigo-400/30 text-sm" href="#shop">Shop Sun</a>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
<h3 className="text-xl text-white tracking-tight">Progressive</h3>
<p className="text-sm text-neutral-400 mt-1">Multi-focal</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl text-white tracking-tight">$295</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Digital surfacing
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Wide field of view
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Ultra-thin lens
            </li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white h-11 ring-1 ring-white/10 text-sm" href="#shop">Shop Progressive</a>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mx-auto pt-8 px-4 pb-24" id="contact">
<div className="relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,.08),transparent_45%)]"></div>
<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
<div className="p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
<p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">Join the Club</p>
<h2 className="mt-2 text-3xl sm:text-4xl text-white tracking-tighter">Get early access</h2>
<p className="mt-3 text-sm text-neutral-300">Be first to shop new drops, limited editions, and receive exclusive invites to our showroom events.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-3 text-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Priority Shipping
            </li>
<li className="flex items-center gap-3 text-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Home Try-On
            </li>
<li className="flex items-center gap-3 text-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Free Adjustments
            </li>
</ul>
</div>
<form action="#" aria-label="Beta form" className="p-6 sm:p-10 space-y-4" method="post">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-sm text-neutral-300">Name</span>
<input className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Jane Doe" required="" type="text"/>
</label>
<label className="block">
<span className="text-sm text-neutral-300">Email</span>
<input className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="jane@example.com" required="" type="email"/>
</label>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-sm text-neutral-300">Face Shape</span>
<select className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50">
<option className="bg-neutral-900">Oval</option>
<option className="bg-neutral-900">Round</option>
<option className="bg-neutral-900">Square</option>
<option className="bg-neutral-900">Heart</option>
<option className="bg-neutral-900">Not sure</option>
</select>
</label>
<label className="block">
<span className="text-sm text-neutral-300">Preference</span>
<select className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50">
<option className="bg-neutral-900">Optical</option>
<option className="bg-neutral-900">Sun</option>
<option className="bg-neutral-900">Both</option>
</select>
</label>
</div>
<label className="block">
<span className="text-sm text-neutral-300">What style defines you?</span>
<textarea className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Classic, bold, minimalist..." rows="4"></textarea>
</label>
<label className="mt-2 inline-flex items-start gap-3">
<input className="mt-1 h-4 w-4 rounded border-white/20 bg-neutral-900 text-emerald-500 focus:ring-emerald-500/50" required="" type="checkbox"/>
<span className="text-xs text-neutral-400">I agree to receive style updates.</span>
</label>
<div className="pt-2">
<button className="inline-flex items-center justify-center text-base font-medium text-white bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-600 rounded-full h-12 px-6 ring-1 ring-emerald-400/30 shadow-[0_6px_24px_-8px_rgba(16,185,129,0.5)] transition" type="submit">
              Join the list
            </button>
</div>
</form>
</div>
</div>
</section>

<footer className="sm:p-8 bg-zinc-900/50 border-zinc-800 border rounded-3xl mt-10 mx-4 mb-10 p-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

<div>
<h3 className="text-4xl text-zinc-100 font-medium tracking-tighter">
          See the world differently.
          <span className="underline decoration-zinc-600 underline-offset-4">Wear LensO</span>.
        </h3>
<div className="mt-6 flex items-center gap-3">
<div className="h-10 w-10 flex bg-cover border-zinc-700 border rounded-full bg-center bg-[url(https://images.unsplash.com/photo-1638643044081-4cf70c524e08?w=320&amp;q=80)]" style={{}}></div>
<div>
<p className="text-sm font-medium tracking-tight text-zinc-100">Elena Rossi</p>
<p className="text-xs text-zinc-500">Design Lead</p>
</div>
</div>
<div className="mt-10 space-y-2">
<p className="text-sm text-zinc-400">concierge@lenso.com</p>
<a className="inline-flex items-center gap-3 text-2xl sm:text-3xl text-zinc-100 underline decoration-zinc-600 underline-offset-4 font-medium tracking-tighter" href="mailto:hello@vellum.app">
<span className="inline-flex h-7 w-7 items-center justify-center text-zinc-900 bg-zinc-100 rounded-full">
<iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
            concierge@lenso.com
          </a>
</div>
</div>

<div className="">
<h4 className="text-2xl sm:text-3xl text-zinc-100 font-medium tracking-tighter">The Newsletter</h4>
<form className="mt-6 space-y-6">
<div>
<input className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 outline-none py-3 text-sm text-zinc-100 placeholder-zinc-500" placeholder="Your name *" type="text"/>
</div>
<div>
<input className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 outline-none py-3 text-sm text-zinc-100 placeholder-zinc-500" placeholder="Email *" type="email"/>
</div>
<div className="flex items-center gap-4">
<button className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-zinc-100 text-zinc-900 text-sm font-normal hover:bg-zinc-200 transition" type="submit">
              Subscribe
              <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900"></span>
</button>
<p className="text-sm text-zinc-500">Weekly drops. No spam.</p>
</div>
</form>
<div className="grid grid-cols-2 gap-8 mt-10">
<div>
<p className="text-xs text-zinc-500 font-normal">Shop</p>
<ul className="mt-3 space-y-2">
<li><a className="text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4" href="#collection">Optical</a></li>
<li><a className="text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4" href="#sun">Sun</a></li>
<li><a className="text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4" href="#accessories">Accessories</a></li>
</ul>
</div>
<div>
<p className="text-xs text-zinc-500 font-normal">Brand</p>
<ul className="mt-3 space-y-2">
<li>
<a className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4" href="#">
                  Our Story
                  <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</li>
<li>
<a className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4" href="#">
                  Sustainability
                  <iconify-icon className="text-sm" icon="solar:leaf-linear"></iconify-icon>
</a>
</li>
<li>
<a className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4" href="#">
                  Journal
                  <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-white text-2xl" icon="solar:glasses-bold-duotone"></iconify-icon>
<span className="text-sm font-medium tracking-tight">LensO</span>
</div>
<p className="text-xs text-zinc-500">© <span id="year">2025</span> LensO Eyewear — All rights reserved</p>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="mobileMenu">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative ml-auto h-full w-[85%] max-w-sm bg-neutral-950 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<span className="text-white font-semibold">LensO</span>
<button aria-label="Close menu" className="inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-white/10 bg-white/10 text-white hover:bg-white/15" id="closeMenu">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<nav className="mt-6 flex flex-col gap-2 text-base">
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" href="#collection">Optical</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" href="#sun">Sun</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" href="#craftsmanship">Craftsmanship</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" href="#pricing">Pricing</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" href="#contact">Club</a>
</nav>
<div className="mt-6">
<a className="inline-flex items-center justify-center w-full text-sm text-white bg-gradient-to-b from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-600 rounded-full h-11 px-6 ring-1 ring-indigo-400/30" href="#shop">
<iconify-icon className="mr-2 text-lg" icon="solar:bag-3-linear"></iconify-icon>
          Shop Collection
        </a>
</div>
</div>
</div>



    </>
  );
}
