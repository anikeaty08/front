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

    // Icons
    if (window.lucide) {
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
    }

    // Chart (Export performance)
    try {
      const ctx = document.getElementById('exportChart');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 10 }, (_, i) => `v${i+1}`),
            datasets: [{
              label: 'fps export',
              data: [48, 54, 60, 62, 70, 76, 82, 88, 92, 96],
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              borderColor: 'rgba(99, 102, 241, 0.9)',
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { display: false, grid: { display: false } },
              y: { display: false, grid: { display: false }, suggestedMin: 40, suggestedMax: 100 }
            },
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false }
            }
          }
        });
      }
    } catch (e) { console.log('Chart init error', e); }
  
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
      <div className="aura-background-component top-0 w-full -z-10 h-[1100px] absolute"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="2IcJ39Gx68KiPG1qlgj8"></div>
</div>

<div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950"></div>

<section className="relative w-full sm:px-6 md:px-10 max-w-7xl mt-12 mr-auto mb-12 ml-auto px-4">

<header className="w-full">
<div className="flex gap-4 w-full mb-8 items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-lg font-semibold text-white tracking-tight" style={{}}>Vellum</span>
</div>
<nav className="hidden md:flex gap-6 text-sm text-neutral-300 items-center">
<a className="hover:text-white transition-colors font-medium" href="#features" style={{}}>Features</a>
<a className="hover:text-white transition-colors font-medium" href="#workflows" style={{}}>Workflows</a>
<a className="hover:text-white transition-colors font-medium" href="#plugins" style={{}}>Plugins</a>
<a className="hover:text-white transition-colors font-medium" href="#pricing" style={{}}>Pricing</a>
</nav>
<div className="flex items-center gap-2">
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-white/10 bg-white/10 text-white hover:bg-white/15">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<a className="group relative inline-flex transition duration-300 ease-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 items-center justify-center hover:bg-white/15 text-white bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 hidden md:flex" href="#download">
<span className="text-sm font-medium">Download for macOS</span><svg className="lucide lucide-arrow-down-right lucide-download ml-2 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-down-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
</a>
</div>
</div>
</header>

<h1 className="max-w-5xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-4xl text-white tracking-tighter text-center mt-24 lg:mt-48 mr-auto ml-auto">
      Edit faster. Grade 
      <img alt="Timeline UI" className="inline-block align-middle h-10 w-14 sm:h-12 sm:w-20 md:h-16 md:w-28 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.4),_0_6.7px_5.3px_rgba(0,0,0,0.5),_0_12.5px_10px_rgba(0,0,0,0.6),_0_22.3px_17.9px_rgba(0,0,0,0.7),_0_41.8px_33.4px_rgba(0,0,0,0.8),_0_100px_80px_rgba(0,0,0,0.9)] object-cover rounded-xl mr-2 ml-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e74f3efa-795f-48c3-af9a-123c4b7dd690_320w.jpg" style={{}} />
      in real time. Tell 
      <img alt="Color Wheels" className="inline-block align-middle h-10 w-12 sm:h-12 sm:w-16 md:h-16 md:w-24 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.4),_0_6.7px_5.3px_rgba(0,0,0,0.5),_0_12.5px_10px_rgba(0,0,0,0.6),_0_22.3px_17.9px_rgba(0,0,0,0.7),_0_41.8px_33.4px_rgba(0,0,0,0.8),_0_100px_80px_rgba(0,0,0,0.9)] object-cover rounded-xl mr-2 ml-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fa077b0f-a28c-4e66-9c85-7e26d5952d7b_320w.jpg" style={{}} /> better stories.
    </h1>

<p className="sm:text-2xl max-w-3xl text-base text-neutral-200 text-center mt-4 mx-auto">
      Vellum Edit is a pro video editor for macOS—AI‑assisted editing, color, and audio with buttery‑smooth performance on Apple Silicon.
    </p>


<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-12 justify-center">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-neutral-400 tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center">

<span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">Download Mac app</span>

<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium rounded-full blur-md">Download Mac app</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>

<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
</button>
<a className="inline-flex items-center justify-center hover:bg-white/10 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] text-base font-medium text-white/90 bg-white/5 border-white/10 border rounded-full px-6 h-12 backdrop-blur" href="#demo">
        
        Watch demo
      </a>
</div>
</section>

<section className="sm:p-8 max-w-7xl relative bg-neutral-900/60 border-white/10 border rounded-3xl mt-32 mr-auto mb-20 ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col min-h-full justify-between">
<div className="">
<span className="text-sm font-normal text-neutral-400">Interface</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-white tracking-tighter mt-2">
            A timeline built for speed and focus.
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
<span className="text-sm font-medium text-emerald-300">Magnetic timeline</span>
<p className="text-xs text-neutral-400 mt-1">Smart snapping and precision editing</p>
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
<span className="text-sm font-medium text-indigo-300">Ripple trim</span>
<p className="text-xs text-neutral-400 mt-1">Maintain sync across all tracks</p>
</div>
</div>
</div>
<div className="relative">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-purple-400 bg-neutral-900 z-10 relative mt-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-purple-400 absolute top-0.5 left-0.5"></div>
</div>
<div className="flex-1">
<span className="text-sm font-medium text-purple-300">Realtime scopes</span>
<p className="text-xs text-neutral-400 mt-1">Live waveform and vector analysis</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full mt-10">
<div className="">
<p className="text-sm font-medium text-white tracking-tight">Accelerate every cut</p>
<p className="text-sm text-neutral-300 mt-1 max-w-sm">
              Skimming, precise trimming, gap detection, and AI‑powered transcript editing that keeps you in flow.
            </p>
<a className="inline-flex items-center justify-center gap-2 h-10 hover:bg-emerald-600/90 transition text-sm font-normal text-white bg-emerald-600 rounded-full mt-4 px-4 max-w-sm" href="#features">
              Explore features
              <span className="inline-flex h-2 w-2 rounded-full bg-white"></span>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative">
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/01296f44-0b19-41ad-b7cb-1d401455f1af_800w.jpg)]" style={{}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/15 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-scissors h-3.5 w-3.5" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">Timeline</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Precision editing</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8d8ff092-132d-4cec-88a1-ac20bce98b33_800w.jpg)] bg-cover border-white/10 rounded-2xl" style={{}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-clapperboard w-[14px] h-[14px]" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">Multicam</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Sync in seconds</p>
</div>
</article><article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cf8a505e-077b-4767-a4a6-5f049de93919_800w.jpg)]" style={{}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-audio-lines w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="audio-lines" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `14px`, height: `14px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 10v3"></path><path d="M6 6v11"></path><path d="M10 3v18"></path><path d="M14 8v7"></path><path d="M18 5v13"></path><path d="M22 10v3"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">Audio</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Dialogue enhance</p>
</div>
</article><article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7d84a3f-8703-4f20-b660-fd8965a83b5c_800w.jpg)]" style={{}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-palette h-3.5 w-3.5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">Color</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Advanced grading</p>
</div>
</article>
</div>
</div>
</section><section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 quoteRevealSection mr-auto ml-auto pt-8 pr-4 pb-20 pl-4" style={{'--reveal': `100%`}}>
<div className="relative overflow-hidden sm:p-10 ring-white/10 ring-1 bg-neutral-900 rounded-3xl pt-6 pr-6 pb-6 pl-6">

<div className="flex justify-center">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-neutral-200">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
        TRUSTED BY CREATORS
      </span>
</div>

<div className="relative mt-8 sm:mt-10 quoteReveal">
<p className="mx-auto max-w-5xl text-center sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
<span className="quote-word transition-colors duration-300" data-word-index="0" style={{color: `rgb(115, 115, 115)`}}>"Vellum</span>
<span className="quote-word transition-colors duration-300" data-word-index="1" style={{color: `rgb(115, 115, 115)`}}>Edit</span>
<span className="quote-word transition-colors duration-300" data-word-index="2" style={{color: `rgb(115, 115, 115)`}}>has</span>
<span className="quote-word transition-colors duration-300" data-word-index="3" style={{color: `rgb(115, 115, 115)`}}>completely</span>
<span className="quote-word transition-colors duration-300 font-instrument-serif italic" data-word-index="4" style={{color: `rgb(115, 115, 115)`}}>transformed</span>
<span className="quote-word transition-colors duration-300" data-word-index="5" style={{color: `rgb(115, 115, 115)`}}>our</span>
<span className="quote-word transition-colors duration-300" data-word-index="6" style={{color: `rgb(115, 115, 115)`}}>workflow.</span>
<span className="quote-word transition-colors duration-300" data-word-index="7" style={{color: `rgb(115, 115, 115)`}}>The</span>
<span className="quote-word transition-colors duration-300" data-word-index="8" style={{color: `rgb(115, 115, 115)`}}>AI-powered</span>
<span className="quote-word transition-colors duration-300" data-word-index="9" style={{color: `rgb(115, 115, 115)`}}>tools</span>
<span className="quote-word transition-colors duration-300" data-word-index="10" style={{color: `rgb(115, 115, 115)`}}>and</span>
<span className="quote-word transition-colors duration-300" data-word-index="11" style={{color: `rgb(115, 115, 115)`}}>real-time</span>
<span className="quote-word transition-colors duration-300" data-word-index="12" style={{color: `rgb(115, 115, 115)`}}>performance</span>
<span className="quote-word transition-colors duration-300" data-word-index="13" style={{color: `rgb(115, 115, 115)`}}>make</span>
<span className="quote-word transition-colors duration-300" data-word-index="14" style={{color: `rgb(115, 115, 115)`}}>professional</span>
<span className="quote-word transition-colors duration-300" data-word-index="15" style={{color: `rgb(115, 115, 115)`}}>editing</span>
<span className="quote-word transition-colors duration-300 font-instrument-serif italic" data-word-index="16" style={{color: `rgb(115, 115, 115)`}}>accessible</span>
<span className="quote-word transition-colors duration-300" data-word-index="17" style={{color: `rgb(115, 115, 115)`}}>to</span>
<span className="quote-word transition-colors duration-300" data-word-index="18" style={{color: `rgb(115, 115, 115)`}}>everyone."</span>
</p>
</div>

<div className="sm:mt-10 flex gap-3 mt-8 items-center justify-center">
<img alt="Author avatar" className="h-10 w-10 ring-1 ring-white/10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/05d02a28-c159-471f-8c4d-f4df12e74bdf_320w.jpg" />
<span className="text-sm sm:text-base text-neutral-300 font-medium">Creative Director & Editor</span>
</div>

</div>

</section>

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-white/70">Power to the editor</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white tracking-tighter">
          Timeline, color, and audio—tightly integrated
        </h2>
<p className="sm:text-lg max-w-[85ch] text-base text-neutral-300 mt-4">
          Real‑time playback with GPU acceleration, scene detection, AI transcript editing, pro scopes, and precision audio tools.
        </p>
</div>
</div>
<div className="space-y-6">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="relative lg:col-span-2 ring-1 ring-white/10 md:p-10 overflow-hidden bg-zinc-950 border-zinc-900 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
<div className="absolute -left-10 -top-16 h-64 w-64 bg-gradient-to-tr from-emerald-400/20 to-cyan-300/10 rounded-full blur-2xl"></div>
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-shield h-5 w-5 text-emerald-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100">Secure by Design</h3>
</div>
<p className="text-zinc-300 max-w-2xl">
            Defense in depth from day one: passkeys, WebAuthn, scoped tokens, rotating secrets, and audit trails.
            Our services follow industry best practices and undergo regular third‑party reviews.
          </p>

<div className="mt-8 grid grid-cols-5 gap-4 md:gap-6">
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-eye-off h-5 w-5 text-zinc-400" data-lucide="eye-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path d="m2 2 20 20"></path></svg>
</div>
<span className="text-xs text-zinc-400">Privacy</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-lock h-5 w-5 text-zinc-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<span className="text-xs text-zinc-400">Encryption</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-key-round h-5 w-5 text-zinc-400" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<span className="text-xs text-zinc-400">Passkeys</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-fingerprint h-5 w-5 text-zinc-400" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
</div>
<span className="text-xs text-zinc-400">MFA</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-shield-check h-5 w-5 text-emerald-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-xs text-zinc-400">Compliance</span>
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
<span className="text-xs text-emerald-400">GPU Rendering</span>
</div>
</div>
<div className="p-4 relative h-32">
<div className="absolute inset-0 opacity-30">
<div className="absolute top-4 left-8 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
<div className="absolute top-6 left-16 w-2 h-2 rounded-full bg-emerald-400"></div>
<div className="absolute top-8 right-12 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{animationDelay: `0.5s`}}></div>
<div className="absolute bottom-8 left-12 w-2 h-2 rounded-full bg-emerald-400"></div>
<div className="absolute bottom-6 right-8 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{animationDelay: `1s`}}></div>
<svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
<path d="M20 20 L40 25 L70 30 L80 45" fill="none" stroke="rgb(52 211 153 / 0.3)" strokeDasharray="2,2" strokeWidth="0.5"></path>
<path d="M30 60 L50 30 L80 35" fill="none" stroke="rgb(52 211 153 / 0.3)" strokeDasharray="2,2" strokeWidth="0.5"></path>
</svg>
</div>
<div className="absolute bottom-2 left-2 right-2">
<div className="grid grid-cols-3 gap-2 text-center">
<div className="rounded bg-emerald-950/50 border border-emerald-500/20 p-1">
<div className="text-xs font-medium text-emerald-400">4K</div>
<div className="text-[9px] text-neutral-400">60fps</div>
</div>
<div className="rounded bg-emerald-950/50 border border-emerald-500/20 p-1">
<div className="text-xs font-medium text-emerald-400">H.265</div>
<div className="text-[9px] text-neutral-400">Export</div>
</div>
<div className="rounded bg-emerald-950/50 border border-emerald-500/20 p-1">
<div className="text-xs font-medium text-emerald-400">8ms</div>
<div className="text-[9px] text-neutral-400">Latency</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute left-4 bottom-6 w-[35%] h-[45%] rounded-xl bg-neutral-950/95 border border-emerald-500/20 shadow-lg">
<div className="px-2 py-1.5 border-b border-emerald-500/20">
<span className="text-[10px] text-emerald-400 tracking-wide">RENDER ENGINE</span>
</div>
<div className="p-2 space-y-2">
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400">GPU</span>
<div className="flex items-center gap-1">
<div className="h-1 w-6 rounded-full bg-neutral-800">
<div className="h-1 w-5 rounded-full bg-emerald-500"></div>
</div>
<span className="text-[9px] text-emerald-400">85%</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400">Memory</span>
<div className="flex items-center gap-1">
<div className="h- w-6 rounded-full bg-neutral-800">
<div className="h-1 w-4 rounded-full bg-emerald-500"></div>
</div>
<span className="text-[9px] text-emerald-400">67%</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400">Cores</span>
<div className="flex items-center gap-1">
<div className="h-1 w-6 rounded-full bg-neutral-800">
<div className="h-1 w-3 rounded-full bg-emerald-500"></div>
</div>
<span className="text-[9px] text-emerald-400">52%</span>
</div>
</div>
</div>
</div>
<div className="absolute top-4 left-6 w-20 h-4 rounded bg-emerald-500/30 animate-pulse" style={{animationDelay: `0.5s`}}></div>
<div className="absolute top-16 left-2 w-14 h-3 rounded bg-emerald-400/40" style={{animationDelay: `1s`}}></div>
<div className="absolute bottom-16 right-2 w-16 h-2 rounded bg-emerald-300/50"></div>
</div>
<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<svg box="0 0 24 24" className="lucide lucide-monitor-check h-5 w-5 text-emerald-400" data-lucide="monitor-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 10 2 2 4-4"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M12 17v4"></path><path d="M8 21h8"></path></svg>
<h3 className="sm:text-2xl text-2xl font-semibold tracking-tight">Hardware Acceleration</h3>
</div>
<p className="text-sm text-neutral-400 mt-3">Native Apple Silicon optimization with Metal GPU acceleration for real-time 4K editing and instant playback.</p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300" href="#">
                View performance
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
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
<h3 className="text-white text-lg sm:text-xl tracking-tight font-medium">Color Grading Tools</h3>
<span className="text-[11px] text-neutral-300">Pro</span>
</div>
<p className="mt-2 text-sm text-neutral-300">Cinema-grade color correction with real-time GPU processing.</p>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between rounded-lg ring-1 ring-emerald-400/20 bg-emerald-500/10 px-3 py-2">
<span className="text-sm text-emerald-200">Color Wheels</span>
<svg className="text-emerald-400 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-emerald-400/20 bg-emerald-500/10 px-3 py-2">
<span className="text-sm text-emerald-200">Curves & LUTs</span>
<svg className="text-emerald-400 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-emerald-400/20 bg-emerald-500/10 px-3 py-2">
<span className="text-sm text-emerald-200">HDR Support</span>
<svg className="text-emerald-400 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-indigo-400/20 bg-indigo-500/10 px-3 py-2">
<span className="text-sm text-indigo-200">Real-time Scopes</span>
<svg className="text-indigo-400 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
</div>
<div className="mt-4">
<span className="inline-flex items-center gap-2 text-[11px] text-emerald-200 bg-emerald-500/10 rounded-full px-2 py-1 ring-1 ring-emerald-400/20">
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
<circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
<circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
<circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
<circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
</svg>
            Professional grade
          </span>
</div>
</article>
</div>

<div className="lg:col-span-2">
<aside className="relative overflow-hidden sm:rounded-3xl flex flex-col bg-zinc-950 border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5 h-full">
<div className="flex items-center justify-between text-xs sm:text-sm text-zinc-400">
<span className="">Audio & AI Tools</span>
<span className="">Pro</span>
</div>
<h4 className="sm:mt-4 sm:text-3xl md:text-4xl text-2xl font-semibold text-zinc-100 tracking-tight mt-3">
          Smart audio processing with AI-powered enhancement
        </h4>
<p className="md:text-base text-sm text-zinc-300 mt-3">
          Advanced dialogue enhancement, noise reduction, and spatial audio mixing—all powered by machine learning algorithms for broadcast-quality results.
        </p>

<div className="mt-6 md:mt-8">
<div className="grid grid-cols-12 gap-2 h-16 items-end">
<span className="h-4 bg-emerald-500 rounded-2xl"></span>
<span className="h-6 bg-emerald-500/80 rounded-2xl"></span>
<span className="h-8 bg-emerald-500/60 rounded-2xl"></span>
<span className="h-12 bg-emerald-500 rounded-2xl"></span>
<span className="h-10 bg-emerald-400 rounded-2xl"></span>
<span className="h-14 bg-emerald-500 rounded-2xl"></span>
<span className="h-6 bg-emerald-500/80 rounded-2xl"></span>
<span className="h-9 bg-emerald-500/60 rounded-2xl"></span>
<span className="h-5 bg-emerald-500 rounded-2xl"></span>
<span className="h-11 bg-emerald-400 rounded-2xl"></span>
<span className="h-7 bg-emerald-500/80 rounded-2xl"></span>
<span className="h-3 bg-emerald-500/60 rounded-2xl"></span>
</div>
</div>
<div className="mt-6 flex items-center gap-2 text-zinc-300 text-sm">
<svg className="w-4 h-4 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10v3"></path>
<path d="M6 6v11"></path>
<path d="M10 3v18"></path>
<path d="M14 8v7"></path>
<path d="M18 5v13"></path>
<path d="M22 10v3"></path>
</svg>
<span className="font-medium">Clean, enhance, and perfect your audio.</span>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4">
<div className="relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10 p-6 sm:p-10">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
<div className="">
<p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-neutral-400">(Pricing)</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white mt-2 tracking-tighter">Simple plans, pro features</h2>
</div>
<p className="text-sm sm:text-base text-neutral-300 max-w-[42ch]">
          Start free. Upgrade anytime. Educational discounts available.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
<h3 className="text-xl text-white tracking-tight">Free</h3>
<p className="text-sm text-neutral-400 mt-1">Non‑commercial</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl text-white tracking-tight">$0</span>
<span className="text-sm text-neutral-400">/mo</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Core editing
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1080p export
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-x w-4 h-4 text-neutral-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Pro color tools
            </li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white h-11 ring-1 ring-white/10 text-sm" href="#download">Get started</a>
</div>

<div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-500/10 to-transparent p-6 ring-1 ring-indigo-400/20">
<div className="flex items-center justify-between">
<h3 className="text-xl text-white tracking-tight">Studio</h3>
<span className="inline-flex items-center gap-1 rounded-lg border border-indigo-400/30 bg-indigo-500/10 px-2 py-1 text-[11px] text-indigo-200">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
              Popular
            </span>
</div>
<p className="text-sm text-neutral-400 mt-1">Commercial</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl text-white tracking-tight">$19</span>
<span className="text-sm text-neutral-400">/mo</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 4K export, ProRes
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> GPU scopes & HDR
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> AI transcript edit
            </li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-b from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-600 text-white h-11 ring-1 ring-indigo-400/30 text-sm" href="#download">Start Studio</a>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
<h3 className="text-xl text-white tracking-tight">Team</h3>
<p className="text-sm text-neutral-400 mt-1">Seats & collaboration</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl text-white tracking-tight">$49</span>
<span className="text-sm text-neutral-400">/mo</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Shared libraries
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Review & comments
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> License manager
            </li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white h-11 ring-1 ring-white/10 text-sm" href="#download">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mx-auto pt-8 px-4 pb-24" id="contact">
<div className="relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,.08),transparent_45%)]"></div>
<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
<div className="p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
<p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">Join the beta</p>
<h2 className="mt-2 text-3xl sm:text-4xl text-white tracking-tighter">Get early access</h2>
<p className="mt-3 text-sm text-neutral-300">Be first to try multicam sync, AI dialog polish, and new color tools. We’ll send limited invites.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-3 text-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Apple Silicon optimized
            </li>
<li className="flex items-center gap-3 text-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              No credit card required
            </li>
<li className="flex items-center gap-3 text-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Cancel anytime
            </li>
</ul>
</div>
<form action="#" aria-label="Beta form" className="p-6 sm:p-10 space-y-4" method="post">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-sm text-neutral-300">Name</span>
<input className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Jane Doe" required type="text" />
</label>
<label className="block">
<span className="text-sm text-neutral-300">Email</span>
<input className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="jane@studio.com" required type="email" />
</label>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-sm text-neutral-300">Use case</span>
<select className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50">
<option className="bg-neutral-900">YouTube</option>
<option className="bg-neutral-900">Commercial</option>
<option className="bg-neutral-900">Film</option>
<option className="bg-neutral-900">Social</option>
</select>
</label>
<label className="block">
<span className="text-sm text-neutral-300">Editing system</span>
<select className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50">
<option className="bg-neutral-900">Apple Silicon</option>
<option className="bg-neutral-900">Intel Mac</option>
</select>
</label>
</div>
<label className="block">
<span className="text-sm text-neutral-300">What do you edit?</span>
<textarea className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Shorts, vlogs, client work, films..." rows="4"></textarea>
</label>
<label className="mt-2 inline-flex items-start gap-3">
<input className="mt-1 h-4 w-4 rounded border-white/20 bg-neutral-900 text-emerald-500 focus:ring-emerald-500/50" required type="checkbox" />
<span className="text-xs text-neutral-400">I agree to receive product updates.</span>
</label>
<div className="pt-2">
<button className="inline-flex items-center justify-center text-base font-medium text-white bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-600 rounded-full h-12 px-6 ring-1 ring-emerald-400/30 shadow-[0_6px_24px_-8px_rgba(16,185,129,0.5)] transition" type="submit">
              Request invite
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
          Cut faster. Color smarter. Sound better.
          <span className="underline decoration-zinc-600 underline-offset-4">Try Vellum</span>.
        </h3>
<div className="mt-6 flex items-center gap-3">
<div className="h-10 w-10 flex bg-[url('https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=320&auto=format&fit=crop')] bg-cover border-zinc-700 border rounded-full" style={{}}></div>
<div>
<p className="text-sm font-medium tracking-tight text-zinc-100">Taylor Brooks</p>
<p className="text-xs text-zinc-500">Product Lead</p>
</div>
</div>
<div className="mt-10 space-y-2">
<p className="text-sm text-zinc-400">support@vellum.app</p>
<a className="inline-flex items-center gap-3 text-2xl sm:text-3xl text-zinc-100 underline decoration-zinc-600 underline-offset-4 font-medium tracking-tighter" href="mailto:hello@vellum.app">
<span className="inline-flex h-7 w-7 items-center justify-center text-zinc-900 bg-zinc-100 rounded-full">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
            hello@vellum.app
          </a>
</div>
</div>

<div className="">
<h4 className="text-2xl sm:text-3xl text-zinc-100 font-medium tracking-tighter">Stay Updated</h4>
<form className="mt-6 space-y-6">
<div>
<input className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 outline-none py-3 text-sm text-zinc-100 placeholder-zinc-500" placeholder="Your name *" type="text" />
</div>
<div>
<input className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 outline-none py-3 text-sm text-zinc-100 placeholder-zinc-500" placeholder="Email *" type="email" />
</div>
<div className="flex items-center gap-4">
<button className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-zinc-100 text-zinc-900 text-sm font-normal hover:bg-zinc-200 transition" type="submit">
              Subscribe
              <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900"></span>
</button>
<p className="text-sm text-zinc-500">Monthly updates. No spam.</p>
</div>
</form>
<div className="grid grid-cols-2 gap-8 mt-10">
<div>
<p className="text-xs text-zinc-500 font-normal">Product</p>
<ul className="mt-3 space-y-2">
<li><a className="text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4" href="#features">Features</a></li>
<li><a className="text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4" href="#workflows">Workflows</a></li>
<li><a className="text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4" href="#plugins">Plugins</a></li>
<li><a className="text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<p className="text-xs text-zinc-500 font-normal">Company</p>
<ul className="mt-3 space-y-2">
<li>
<a className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4" href="#">
                  Changelog
                  <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</li>
<li>
<a className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4" href="#">
                  Docs
                  <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</li>
<li>
<a className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4" href="#">
                  Community
                  <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="md:w-14 md:h-14 w-[36px] h-[36px]" strokeWidth="2" viewBox="0 0 48 48">
<path d="M24 8 L40 36 H8 Z" fill="currentColor"></path>
</svg>
<span className="text-sm font-medium tracking-tight">Vellum</span>
</div>
<p className="text-xs text-zinc-500">© <span id="year">2025</span> Vellum — All rights reserved</p>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="mobileMenu">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative ml-auto h-full w-[85%] max-w-sm bg-neutral-950 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<span className="text-white font-semibold">Vellum</span>
<button aria-label="Close menu" className="inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-white/10 bg-white/10 text-white hover:bg-white/15" id="closeMenu">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="mt-6 flex flex-col gap-2 text-base">
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" href="#features">Features</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" href="#workflows">Workflows</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" href="#plugins">Plugins</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" href="#pricing">Pricing</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" href="#contact">Beta</a>
</nav>
<div className="mt-6">
<a className="inline-flex items-center justify-center w-full text-sm text-white bg-gradient-to-b from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-600 rounded-full h-11 px-6 ring-1 ring-indigo-400/30" href="#download">
<svg className="lucide lucide-download w-4 h-4 mr-2" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
          Download for macOS
        </a>
</div>
</div>
</div>



    </>
  );
}
