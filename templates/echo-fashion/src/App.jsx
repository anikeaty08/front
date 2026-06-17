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


  if (window.lucide) window.lucide.createIcons();



      // Initialize Lucide icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) window.lucide.createIcons();
      });

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobilePanel = document.getElementById('mobilePanel');
      let open = false;

      const setIcon = (name) => {
        menuBtn.innerHTML = '';
        const i = document.createElement('i');
        i.setAttribute('data-lucide', name);
        i.className = 'h-5 w-5';
        menuBtn.appendChild(i);
        if (window.lucide) window.lucide.createIcons();
      };

      menuBtn?.addEventListener('click', () => {
        open = !open;
        if (mobilePanel) {
          mobilePanel.classList.toggle('hidden', !open);
        }
        setIcon(open ? 'x' : 'menu');
      });

      // Scroll indicator fade out
      const scrollIndicator = document.getElementById('scrollIndicator');
      let lastScrollY = window.scrollY;

      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
          scrollIndicator.style.opacity = '0';
        } else {
          scrollIndicator.style.opacity = '1';
        }
        
        lastScrollY = currentScrollY;
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 saturate-0 absolute"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="p7Ff6pfTrb5Gs59C7nLC"></div></div>

<div className="relative isolate h-screen overflow-hidden">

<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0">
<div className="md:w-2/5 w-1/2 absolute top-0 right-0 bottom-0">
<img alt="Dramatic face close-up with vivid eye" className="object-center bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/686a0d1e-0357-4019-9afd-8ed08ea3b28e_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent"></div>
</div>
</div>

<header className="z-20 relative">
<div className="mx-auto max-w-7xl px-6 md:px-10">
<div className="flex md:h-20 h-16 items-center justify-between">
<a className="inline-flex items-center gap-3" href="/">
<span className="md:text-2xl cursor-pointer text-xl text-white tracking-tighter" onclick="window.location.href='/';window.location.href='/';window.location.href='/home'" role="button">ECHO</span>
</a>

<nav className="hidden md:flex gap-8 items-center">
<a className="hover:text-white transition-colors text-sm text-white" href="/collections">Collections</a>
<a className="hover:text-white transition-colors text-sm text-white/60" href="/atelier">Atelier</a>
<a className="hover:text-white transition-colors text-sm text-white/60" href="/journal">Journal</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition-all text-sm text-white/90 bg-white/5 border-white/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 backdrop-blur-sm" href="/book">
<svg className="lucide lucide-shopping-bag h-4 w-4 text-white/70" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
                Book appointment
              </a>
</nav>

<button className="md:hidden inline-flex hover:bg-white/10 focus:outline-none text-white/80 bg-white/5 ring-white/10 ring-1 rounded-md pt-2 pr-3 pb-2 pl-3 backdrop-blur-sm items-center justify-center" id="menuBtn"><svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>

<div className="md:hidden" id="mobilePanel">
<div className="mt-2 space-y-1 rounded-lg border border-white/10 bg-black/80 backdrop-blur-md p-3">
<a className="block hover:bg-white/5 text-sm text-white rounded-md pt-2 pr-3 pb-2 pl-3" href="#">Collections</a>
<a className="block hover:bg-white/5 text-sm text-white/70 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">Atelier</a>
<a className="block hover:bg-white/5 text-sm text-white/70 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">Journal</a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/10 text-sm text-white/90 bg-white/5 w-full border-white/10 border rounded-md mt-1 pt-2.5 pr-3 pb-2.5 pl-3 backdrop-blur-sm" href="#">
<svg className="lucide lucide-shopping-bag h-4 w-4 text-white/70" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
                Book appointment
              </a>
</div>
</div>
</div>
</header>

<main className="z-10 flex-1 flex h-[100vh] relative items-center">
<div className="md:px-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

<div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center" style={{opacity: '0', transform: 'translateY(30px)', filter: 'blur(5px)', animation: 'fadeSlideBlur 1.2s ease-out 0.3s forwards'}}>
<h1 className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-4xl text-white/95 tracking-tighter" style={{opacity: '0', transform: 'translateY(40px)', filter: 'blur(8px)', animation: 'fadeSlideBlur 1.4s ease-out 0.6s forwards'}}>Crafting Timeless Fashion for the Discerning Individual.</h1>
<p className="md:text-base leading-relaxed text-sm text-white/60 max-w-md mt-4 mb-4 relative" style={{opacity: '0', transform: 'translateY(20px)', filter: 'blur(4px)', animation: 'fadeSlideBlur 1s ease-out 0.9s forwards'}}>
      Where artisanal craftsmanship meets contemporary elegance. Each piece is meticulously designed and handcrafted for those who value exceptional quality and timeless style.
    </p>
<div className="md:mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mt-7 items-start" style={{opacity: '0', transform: 'translateY(25px)', filter: 'blur(6px)', animation: 'fadeSlideBlur 1.1s ease-out 1.2s forwards'}}>
<a className="inline-flex items-center gap-2 hover:bg-white/90 transition-all text-sm text-black bg-white rounded-full pt-3 pr-6 pb-3 pl-6" href="/explore" style={{opacity: '0', transform: 'translateX(-20px)', filter: 'blur(3px)', animation: 'fadeSlideBlur 0.8s ease-out 1.5s forwards'}}>
      Explore collection
      <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition-all text-sm text-white/90 bg-white/5 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur-sm" href="/atelier" style={{opacity: '0', transform: 'translateX(-15px)', filter: 'blur(3px)', animation: 'fadeSlideBlur 0.8s ease-out 1.7s forwards'}}>
      Atelier visit
      <svg className="lucide lucide-calendar h-4 w-4 text-white/70" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
<style>
    @keyframes fadeSlideBlur {
      0% {
        opacity: 0;
        transform: translateY(40px) translateX(var(--slide-x, 0));
        filter: blur(8px);
      }
      60% {
        opacity: 0.8;
        filter: blur(2px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) translateX(0);
        filter: blur(0px);
      }
    }
    
    /* Custom slide directions for buttons */
    div[data-element-id="aura-emfwmcwcb"] a:first-of-type {
      --slide-x: -20px;
    }
    div[data-element-id="aura-emfwmcwcb"] a:last-of-type {
      --slide-x: -15px;
    }
  </style>
</div>
</div>

<div className="absolute bottom-8 md:bottom-12 left-6 right-6 md:left-10 md:right-10">
</div>
</div>
</main>

<div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center transition-opacity duration-300" id="scrollIndicator" style={{opacity: '0'}}>
<div className="flex items-center gap-3 text-sm text-white/60 bg-black/30 backdrop-blur-md rounded-full px-4 py-3 border border-white/5">
<div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<svg className="lucide lucide-mouse-pointer-click h-4 w-4 text-white/60" data-lucide="mouse-pointer-click" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg>
</div>
<div className="text-center">
<p className="text-xs font-sans" style={{}}>Discover more</p>
</div>
</div>
<div className="mt-2 h-6 w-px bg-gradient-to-b from-white/20 to-transparent"></div>
<svg className="lucide lucide-chevron-down mt-1 h-4 w-4 text-white/40 animate-bounce" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<section className="z-10 bg-black relative">
<div className="md:px-10 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 md:py-24 border-white/5 border-t pt-16 pb-16">

<div className="lg:col-span-5 xl:col-span-5">
<p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3 font-sans">Maintenance</p>
<h2 className="sm:text-4xl md:text-5xl leading-[1.1] text-3xl font-semibold text-white/95 tracking-tight">
              Treatment of Fine Garments
            </h2>
<p className="md:text-base leading-relaxed text-sm text-white/60 mt-5">
              Consider how care influences the life of your wardrobe. Thoughtful routines preserve drape, color, and structure—keeping each piece ready for the next occasion.
            </p>
<div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-black hover:bg-white/90 transition-all font-sans" href="#">
                Care handbook
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-2.5 text-sm text-white/90 hover:bg-white/10 transition-all font-sans" href="#">
                Book cleaning
                <svg className="lucide lucide-calendar h-4 w-4 text-white/70" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
</div>

<div className="lg:col-span-4 xl:col-span-4">
<div className="relative rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>
<img alt="Close-up of draped fabric" className="h-[440px] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/feb7c87d-0796-4ecc-8a97-c29b57e6930c_800w.jpg"/>

<button className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-black hover:bg-white transition">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>

<div className="absolute left-4 right-4 bottom-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs text-black">
                    Learn more
                    <svg className="lucide lucide-chevron-right h-3 w-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</div>
<p className="mt-3 text-lg md:text-xl tracking-tight font-medium text-white/95">Preserve the Silhouette</p>
</div>
</div>
</div>

<div className="lg:col-span-3 xl:col-span-3 grid grid-cols-1 gap-6">
<div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 hover:bg-white/[0.06] transition">
<div className="flex items-start gap-4">
<div className="flex bg-neutral-900 w-6 h-6 border-white/10 border ring-neutral-700/10 ring-1 rounded-full absolute top-[-10px] left-[-10px] items-center justify-center">
<svg className="lucide lucide-sparkles h-4 w-4 text-white/80" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="">
<h3 className="text-base font-semibold tracking-tight text-white/90">Increases Longevity</h3>
<p className="mt-1 text-sm text-white/60 leading-relaxed">Regular steaming and proper storage keep fabrics looking new and ready to wear.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 hover:bg-white/[0.06] transition">
<div className="flex gap-4 items-start">
<div className="flex bg-neutral-900 w-6 h-6 border-white/10 border ring-neutral-700/10 ring-1 rounded-full absolute top-[-10px] left-[-10px] items-center justify-center">
<svg className="lucide lucide-shield-check h-4 w-4 text-white/80" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h3 className="text-base font-semibold tracking-tight text-white/90">Boosts Fabric Integrity</h3>
<p className="mt-1 text-sm text-white/60 leading-relaxed">Careful handling reduces wear, preserving structure and hand-feel season after season.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 relative bg-black" id="journal">
<div className="mx-auto max-w-7xl px-6 md:px-10">
<div className="py-16 md:py-24 border-t border-white/5">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

<div className="lg:col-span-6">
<div className="relative rounded-2xl bg-white text-black ring-1 ring-black/10 shadow-2xl p-6 md:p-8">
<p className="text-xs uppercase tracking-[0.2em] text-black/50 mb-2 font-sans">How Precision</p>
<h3 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold text-black leading-tight">
                  Tailoring is reshaping modern couture
                </h3>
<p className="md:text-base leading-relaxed text-sm text-black/70 mt-4">
                  From meticulous pattern-making to made-to-measure fittings, precision elevates comfort, silhouette, and longevity—refining every piece to its wearer.
                </p>

<div className="mt-5 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70">Fit</span>
<span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70">Fabric</span>
<span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70">Pattern</span>
<span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70">Aftercare</span>
</div>

<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2.5 text-sm hover:bg-black/90 transition" href="#">
<span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
<span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
</span>
                    Start personalization
                    <svg className="lucide lucide-wand-2 h-4 w-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</a>
</div>

<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/60/0 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.6)]"></div>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative rounded-2xl ring-1 ring-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-2xl p-6 md:p-8">
<h3 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold text-white/95 leading-tight">
                  The Future Forged in Precision.
                </h3>
<p className="md:text-base leading-relaxed text-sm text-white/70 mt-3">
                  Blending artisanal craft with intelligent tooling, we refine construction to reduce waste, enhance drape, and perfect the fit—piece after piece.
                </p>

<div className="mt-6">
<div className="relative rounded-xl ring-1 ring-white/10 bg-black/50 overflow-hidden">
<svg className="block w-full h-auto" viewbox="0 0 800 360">
<defs>
</defs>
<rect className="" fill="transparent" height="360" width="800"></rect>

<g opacity="0.35" stroke="url(#g)" strokeWidth="1">
<circle cx="160" cy="180" fill="none" r="120"></circle>
<circle cx="160" cy="180" fill="none" r="90"></circle>
<circle cx="160" cy="180" fill="none" r="60"></circle>
<circle cx="160" cy="180" fill="none" r="30"></circle>
</g>

<g className="" opacity="0.18" stroke="white">
<circle className="" cx="420" cy="180" fill="none" r="150"></circle>
<circle cx="540" cy="180" fill="none" r="150"></circle>
<circle cx="660" cy="180" fill="none" r="150"></circle>
</g>
</svg>

<div className="pointer-events-none absolute inset-0">
<div className="absolute left-5 top-1/2 -translate-y-1/2">
<span className="inline-flex items-center rounded-full bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/20 px-2.5 py-1 text-xs">Made-to-Measure</span>
</div>
<div className="absolute left-1/2 -translate-x-1/2 top-6">
<span className="inline-flex items-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 px-2.5 py-1 text-xs">Drape</span>
</div>
<div className="absolute right-24 bottom-6">
<span className="inline-flex items-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 px-2.5 py-1 text-xs">Finish</span>
</div>
<div className="absolute right-8 top-1/2 -translate-y-1/2">
<span className="inline-flex items-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 px-2.5 py-1 text-xs">Structure</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-5 items-start">
<span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 text-emerald-300 px-3 py-1.5 text-xs ring-1 ring-emerald-400/20">
<svg className="lucide lucide-shield-check h-3.5 w-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    Certified atelier
                  </span>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition" href="#">
                    Advanced materials
                    <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="z-10 bg-black relative" id="story">
<div className="mx-auto max-w-7xl px-6 md:px-10">
<div className="py-16 md:py-24 border-t border-white/5">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

<div className="lg:col-span-6">
<p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3 font-sans">Our Story</p>
<h2 className="sm:text-4xl md:text-5xl leading-[1.05] text-3xl font-semibold text-white/95 tracking-tight">
            Where Craft Transforms Fashion
          </h2>
<div className="mt-5">
<div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<svg className="lucide lucide-sparkles h-4 w-4 text-white/70" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
</div>
<p className="md:text-base leading-relaxed text-sm text-white/70 mt-4">
            Timeless style shouldn’t be a luxury—it’s the foundation for confidence in what you wear. At 
            <span className="align-baseline inline-flex items-center rounded-md bg-emerald-400/15 px-2 py-0.5 text-emerald-300 ring-1 ring-emerald-400/20">Echo</span>,
            we craft meticulously designed pieces with precision tailoring—made to deliver lasting comfort, structure, and elegance.
          </p>
<p className="md:text-base leading-relaxed text-sm text-white/60 mt-4">
            More than products, we’re building a community that believes in the power of design and craftsmanship to elevate the everyday wardrobe.
          </p>

<div className="mt-6 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/70 ring-1 ring-white/10">
<svg className="lucide lucide-flask-conical h-3.5 w-3.5" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
              Handcrafted
            </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/70 ring-1 ring-white/10">
<svg className="lucide lucide-shield-check h-3.5 w-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Atelier-grade quality
            </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/70 ring-1 ring-white/10">
<svg className="lucide lucide-leaf h-3.5 w-3.5" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
              Responsible materials
            </span>
</div>

<div className="mt-7 flex flex-col sm:flex-row items-start gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-black hover:bg-white/90 transition" href="#">
              Explore our collection
              <svg className="lucide lucide-arrow-right luc-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-2.5 text-sm text-white/90 hover:bg-white/10 transition" href="#">
              Join our community
              <svg className="lucide lucide-users h-4 w-4 text-white/70" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</a>
</div>
</div>

<div className="lg:col-span-6">
<div className="grid grid-cols-2 gap-4 sm:gap-6">
<div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
<img alt="Textile macro detail" className="sm:h-80 md:h-96 w-full h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6a6ef607-2253-484f-b957-1afb4a1f2d62_800w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
</div>
<div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
<img alt="Silk fabric texture" className="sm:h-80 md:h-96 w-full h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c6c60c2b-7ebc-47e7-b376-a4a73cfb8b1d_800w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
</div>
<div className="col-span-2 relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
<img alt="Atelier tools and materials" className="sm:h-64 md:h-72 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6e0b07dc-5b71-44c3-b6bf-ab1843590d1a_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="z-10 relative bg-black" id="promise">
<div className="mx-auto max-w-7xl px-6 md:px-10">
<div className="md:py-24 border-white/5 border-t pt-16 pb-16">

<div className="text-center max-w-2xl mx-auto">
<span className="inline-flex items-center rounded-full bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20 px-3 py-1 text-[11px] uppercase tracking-[0.2em]">Our Promise</span>
<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white/95">Our Research Promise</h2>
<div className="mx-auto mt-3 flex items-center justify-center">
<svg className="lucide lucide-asterisk h-4 w-4 text-white/40" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
<p className="md:text-base text-sm text-white/60 leading-relaxed mt-4">
          Every Echo piece is born from material research and iterative prototyping. We collaborate with specialist mills and master pattern‑makers so each garment delivers refined drape, lasting structure, and comfort on skin.
        </p>
</div>

<div className="mt-10 md:mt-14">
<h3 className="text-center mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-white/90">Atelier‑developed patterns</h3>
<div className="mt-6 md:mt-8">
<div className="relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 shadow-2xl">
<img alt="Close-up portrait showing natural texture and light" className="sm:h-[420px] md:h-[520px] w-full h-[340px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6d30fe29-43aa-4fc2-a513-6aa41d38a7d0_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
</div>
</div>
<div className="mt-6 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-2.5 text-sm text-white/90 hover:bg-white/10 transition" href="/materials">
            View all materials
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="mt-14 md:mt-16 border-t border-dashed border-white/10"></div>

<div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
<div className="lg:col-span-8">
<p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Our Philosophy</p>
<h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white/95 leading-tight">
            Style is not about perfection—it’s about confidence, comfort, and pieces made to move with you.
          </h3>
<p className="md:text-base leading-relaxed text-sm text-white/60 mt-4">
            Our approach guides every decision—from fabric sourcing and pattern engineering to thoughtful aftercare. We continuously test, refine, and listen to how our clothing lives in the real world.
          </p>
</div>
<div className="lg:col-span-4">
<div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Minimal still life of a crafted object on stone" className="sm:h-64 w-full h-56 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/51b6ca70-424b-4346-a20a-609d6bfb8b06_800w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white/90 text-base font-medium tracking-tight">Limited Studio Edition</p>
<div className="mt-2 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/70 ring-1 ring-white/10">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  Hand‑finished
                </span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="hover:bg-white/[0.06] transition border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="flex items-start gap-3">
<div className="flex bg-neutral-900 w-6 h-6 border-white/10 border ring-neutral-700/10 ring-1 rounded-full absolute top-[-10px] left-[-10px] items-center justify-center">
<svg className="lucide lucide-ruler h-4 w-4 text-white/80" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>
</div>
<div className="">
<p className="text-base font-semibold tracking-tight text-white/90">Fit, perfected</p>
<p className="mt-1 text-sm text-white/60 leading-relaxed">Pattern blocks refined across sizes for clean lines and freedom of movement.</p>
</div>
</div>
</div>
<div className="hover:bg-white/[0.06] transition border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="flex items-start gap-3">
<div className="flex bg-neutral-900 w-6 h-6 border-white/10 border ring-neutral-700/10 ring-1 rounded-full absolute top-[-10px] left-[-10px] items-center justify-center">
<svg className="lucide lucide-heart h-4 w-4 text-white/80" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<div className="">
<p className="text-base font-semibold tracking-tight text-white/90">Gentle care</p>
<p className="mt-1 text-sm text-white/60 leading-relaxed">Finishes and construction designed for easy maintenance and long wear.</p>
</div>
</div>
</div>
<div className="hover:bg-white/[0.06] transition border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="flex items-start gap-3">
<div className="flex bg-neutral-900 w-6 h-6 border-white/10 border ring-neutral-700/10 ring-1 rounded-full absolute top-[-10px] left-[-10px] items-center justify-center">
<svg className="lucide lucide-leaf h-4 w-4 text-white/80" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="">
<p className="text-base font-semibold tracking-tight text-white/90">Responsible materials</p>
<p className="mt-1 text-sm text-white/60 leading-relaxed">Sourced from trusted mills to balance hand‑feel, drape, and impact.</p>
</div>
</div>
</div>
<div className="hover:bg-white/[0.06] transition border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="flex items-start gap-3">
<div className="flex bg-neutral-900 w-6 h-6 border-white/10 border ring-neutral-700/10 ring-1 rounded-full absolute top-[-10px] left-[-10px] items-center justify-center">
<svg className="lucide lucide-badge-check h-4 w-4 text-white/80" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<p className="text-base font-semibold tracking-tight text-white/90">Radical transparency</p>
<p className="mt-1 text-sm text-white/60 leading-relaxed">Clear sourcing, honest pricing, and open communication at every step.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 bg-black border-t border-white/5">
<div className="mx-auto max-w-7xl px-6 md:px-10">
<div className="py-16 md:py-20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

<div className="lg:col-span-1">
<a className="inline-flex items-center gap-3 mb-4" href="#">
<span className="text-2xl text-white tracking-tighter">ECHO</span>
</a>
<p className="text-sm text-white/60 leading-relaxed max-w-sm">
                Crafting timeless fashion for the discerning individual through artisanal craftsmanship and contemporary elegance.
              </p>
<div className="mt-6 flex items-center gap-4">
<a className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition" href="#">
<svg className="lucide lucide-instagram h-4 w-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition" href="#">
<svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition" href="#">
<svg className="lucide lucide-facebook h-4 w-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-white mb-4">Collections</h3>
<ul className="space-y-3">
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Ready-to-Wear</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Couture</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Accessories</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Limited Edition</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white mb-4">Services</h3>
<ul className="space-y-3">
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Personal Styling</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Made-to-Measure</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Alteration</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Garment Care</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
<ul className="space-y-3">
<li className="text-sm text-white/60">
<span className="block">Atelier Studio</span>
<span className="block">123 Fashion Avenue</span>
<span className="block">New York, NY 10001</span>
</li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="tel:+1234567890">+1 (234) 567-890</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="mailto:hello@echo.fashion">hello@echo.fashion</a></li>
</ul>
</div>
</div>

<div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<p className="text-sm text-white/40">© 2024 Echo Fashion. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm text-white/40 hover:text-white/60 transition" href="#">Privacy</a>
<a className="text-sm text-white/40 hover:text-white/60 transition" href="#">Terms</a>
<a className="text-sm text-white/40 hover:text-white/60 transition" href="#">Cookies</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
