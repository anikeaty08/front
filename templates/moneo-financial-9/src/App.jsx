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



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



        !function(){
          if(!window.UnicornStudio){
            window.UnicornStudio={isInitialized:!1};
            var i=document.createElement("script");
            i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
            i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)};
            (document.head||document.body).appendChild(i)
          }
        }();
      


      lucide.createIcons();

      // Spotlight cursor for all spotlight elements
      const spotlightCards = document.querySelectorAll('.spotlight');
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!prefersReduced) {
        spotlightCards.forEach(card => {
          card.addEventListener('pointermove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mx', x + '%');
            card.style.setProperty('--my', y + '%');
          });
        });
      }

      // Chart with neon turquoise
      const ctx = document.getElementById('financeChart').getContext('2d');

      function makeGradients(context) {
        const {chart} = context;
        const {ctx, chartArea} = chart;
        if (!chartArea) return null;

        const muted = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        muted.addColorStop(0, 'rgba(228,228,231,0.06)');
        muted.addColorStop(1, 'rgba(228,228,231,0.55)');

        const neon = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        neon.addColorStop(0, 'rgba(0,255,240,0.25)');
        neon.addColorStop(1, 'rgba(0,255,240,0.90)');

        return {muted, neon};
      }

      let gradients;
      const labels = ['Jan','Feb','Mar','Apr','May','Jun'];
      const data = {
        labels,
        datasets: [
          {
            label: 'Last Week',
            data: [12000, 7600, 9800, 11200, 8700, 13400],
            backgroundColor: (c) => { if (!gradients) gradients = makeGradients(c); return gradients?.muted; },
            borderRadius: 8,
            barThickness: 14
          },
          {
            label: 'This Week',
            data: [13800, 9900, 12400, 15800, 10000, 16200],
            backgroundColor: (c) => { if (!gradients) gradients = makeGradients(c); return gradients?.neon; },
            borderRadius: 8,
            barThickness: 14
          }
        ]
      };

      const chart = new Chart(ctx, {
        type: 'bar',
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(24,24,27,0.95)',
              titleColor: '#e4e4e7',
              bodyColor: '#e4e4e7',
              borderColor: 'rgba(255,255,255,0.08)',
              borderWidth: 1,
              padding: 10,
              displayColors: true
            }
          },
          scales: {
            x: {
              grid: { display: false, drawBorder: false },
              ticks: {
                color: (ctx) => ctx.tick.label === 'Apr' ? '#00fff0' : '#a1a1aa',
                font: { family: 'Inter', weight: '500' }
              }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },
              ticks: {
                color: '#71717a',
                font: { family: 'Inter', weight: '400' },
                callback: (v) => v >= 1000 ? (v/1000)+'k' : v
              },
              suggestedMin: 0,
              suggestedMax: 18000
            }
          }
        },
        plugins: [{ id: 'rebuild-gradients', beforeLayout: () => { gradients = null; } }]
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
      


<div className="aura-background-component inset-0 z-0 pointer-events-none absolute h-[800px]" data-alpha-mask="33" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 33%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 33%, transparent)'}}>
<div className="absolute inset-0 z-0 w-full h-full" data-us-project="4Mhsd9KPKdz4ri3R6J99"></div>

</div>


<header className="relative">
<div className="flex [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] max-w-6xl mx-auto px-8 py-8 items-center justify-between">

<div className="flex items-center gap-3">
<span className="text-lg font-semibold text-zinc-100 tracking-tight font-geist">
        ✦ Moneo
      </span>
</div>

<nav className="hidden lg:flex items-center">
<div className="flex items-center gap-1 rounded-full bg-white/[0.04] px-2 py-1.5 border border-white/10 shadow-[inset_0_-1px_0_rgba(255,255,255,0.04),0_1px_0_rgba(0,0,0,0.4)]">

<a className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-zinc-200 bg-white/[0.06] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] font-geist" href="#">
<span className="grid place-items-center h-6 w-6 rounded-full border border-white/10 bg-white/10">
<svg className="lucide lucide-home h-3.5 w-3.5 text-zinc-100" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</span>
          Home
        </a>

<a className="hover:text-zinc-100 hover:bg-white/[0.04] hover:border-white/10 transition text-sm text-zinc-400 border-transparent border rounded-full pt-2 pr-4 pb-2 pl-4 font-geist" href="#features">
          Features
        </a>
<a className="hover:text-zinc-100 hover:bg-white/[0.04] hover:border-white/10 transition text-sm text-zinc-400 border-transparent border rounded-full pt-2 pr-4 pb-2 pl-4 font-geist" href="#pricing">
          Pricing
        </a>
<a className="hover:text-zinc-100 hover:bg-white/[0.04] hover:border-white/10 transition text-sm text-zinc-400 border-transparent border rounded-full pt-2 pr-4 pb-2 pl-4 font-geist" href="#testimonials">
          Testimonials
        </a>
<a className="hover:text-zinc-100 hover:bg-white/[0.04] hover:border-white/10 transition text-sm text-zinc-400 border-transparent border rounded-full pt-2 pr-4 pb-2 pl-4 font-geist" href="#footer">
          About
        </a>
</div>
</nav>

<div className="flex items-center gap-2">
<a className="hidden lg:inline-flex items-center justify-center gap-3 cursor-pointer transition-all group text-sm font-semibold text-white rounded-2xl relative" href="#" style={{width: '175px', height: '55px', background: 'linear-gradient(to bottom right, #00fff0 0%, rgba(0, 255, 240, 0) 30%)', backgroundColor: 'rgba(0, 255, 240, 0.2)'}}>
<span className="transition-all duration-300 group-hover:bg-[#00fff0]/10 rounded-2xl absolute top-0 right-0 bottom-0 left-0" style={{backgroundColor: '#0B0B0C', margin: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
<span className="tracking-wide font-geist">Sign In</span>
<svg className="w-[20px] h-[20px] transition-transform duration-300 group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(circle at center, rgba(0, 255, 240, 0.3) 0%, transparent 70%)'}}></span>
</a>
<button aria-label="Open menu" className="lg:hidden rounded-full border border-white/10 p-2 text-zinc-300 hover:text-white">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>

<main className="relative">

<section className="mt-24 mb-24 relative max-w-6xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 items-center">

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both]">
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 font-geist">
<svg className="lucide lucide-shield-check h-3.5 w-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#00fff0'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              SIMPLE TRUST
            </div>
<h1 className="md:text-6xl leading-tight text-4xl font-semibold tracking-tight" style={{maskImage: 'linear-gradient(240deg, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(240deg, transparent, black 0%, black 70%, transparent)'}}>
<span className="bg-clip-text text-transparent bg-[#ffffff] font-geist font-light tracking-tighter">
                Master Your Money
              </span>
<span className="bg-clip-text text-transparent bg-[#ffffff] font-geist font-light tracking-tighter">
                With Moneo
              </span>
<span className="align-top text-xl text-zinc-400 font-geist">®</span>
</h1>
<p className="mt-5 max-w-xl text-zinc-400 font-geist">
              Automated budgets, encrypted accounts, and clear insights—so you
              always know where your money's going.
            </p>
<div className="flex flex-wrap gap-3 mt-7 gap-x-2 gap-y-2 items-center">
<a className="inline-flex items-center justify-center gap-3 cursor-pointer transition-all group text-sm font-semibold text-white rounded-2xl relative" href="#" style={{width: '175px', height: '55px', background: 'linear-gradient(to bottom right, #00fff0 0%, rgba(0, 255, 240, 0) 30%)', backgroundColor: 'rgba(0, 255, 240, 0.2)'}}>
<span className="transition-all duration-300 group-hover:bg-[#00fff0]/10 rounded-2xl absolute top-0 right-0 bottom-0 left-0" style={{backgroundColor: '#0B0B0C', margin: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
<span className="tracking-wide font-geist">Get Started</span>
<svg className="w-[20px] h-[20px] transition-transform duration-300 group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(circle at center, rgba(0, 255, 240, 0.3) 0%, transparent 70%)'}}></span>
</a>
<a className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-200 hover:bg-white/10 ring-focus" href="#">
<span className="font-geist">See How It Works</span>
<span className="grid place-items-center rounded-full border border-white/10 p-1.5">
<svg className="lucide lucide-play h-3.5 w-3.5 text-zinc-300 group-hover:text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</a>
</div>
</div>

<div className="spotlight [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] relative" id="spotCard" style={{'--mx': '44.92891751802885%', '--my': '77.72939809679261%'}}>
<div className="glass p-6 max-w-xl mx-auto">
<div className="flex items-center justify-between">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight">
<span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent font-geist font-light tracking-tighter">
                    Spending Overview
                  </span>
</h3>
<button aria-label="More" className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-300 hover:bg-white/10 ring-focus">
<svg className="lucide lucide-more-horizontal h-5 w-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="mt-5 flex items-center gap-6 text-xs">
<div className="flex items-center gap-2 text-zinc-400 font-geist">
<span className="h-px w-8 rounded-full bg-zinc-300/70"></span>
                  Last Week
                </div>
<div className="flex items-center gap-2 text-zinc-400 font-geist">
<span className="h-px w-8 rounded-full bg-[#00fff0]/80"></span>
                  This Week
                </div>
</div>
<div className="mt-4 relative h-60 w-full">
<canvas className="" height="480" id="financeChart" style={{display: 'block', boxSizing: 'border-box', height: '240px', width: '470px'}} width="940"></canvas>
</div>
<div className="mt-6 grid grid-cols-1 gap-4 border-t border-white/10 pt-5 sm:grid-cols-3 sm:items-end">
<div className="col-span-2">
<div className="flex items-center gap-2 text-sm text-zinc-400 font-geist">
<svg className="lucide lucide-pie-chart h-4 w-4" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
                    Total
                  </div>
<div className="mt-2 text-4xl text-zinc-100 font-geist font-light tracking-tighter">
                    12.4
                    <span className="text-2xl align-top font-geist font-light tracking-tighter">
                      %
                    </span>
</div>
</div>
<div className="flex items-center justify-start sm:justify-end">
<div className="inline-flex items-center gap-2 rounded-full bg-[#00fff0]/10 px-3 py-2 text-sm text-[#00fff0] ring-1 ring-inset ring-[#00fff0]/25 font-geist">
<span className="inline-flex h-2 w-2 rounded-full bg-[#00fff0]"></span>
                    +23%
                    <span className="text-zinc-400 font-geist">Improvement</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-24 mb-24 relative" id="features">
<section className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center max-w-6xl mr-auto ml-auto pt-8 pr-8 pb-0 pl-8 relative space-y-2">

<div className="pointer-events-none absolute inset-0 -z-10 opacity-[.06]" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,.18) 1px,transparent 1px)', backgroundSize: '18px 18px'}}></div>

<div className="pointer-events-none absolute -z-10 -top-28 left-1/2 -translate-x-1/2 w-[38rem] h-[18rem] blur-[100px] opacity-30" style={{background: 'radial-gradient(40% 40% at 50% 20%, rgba(0,255,240,.35) 0%, transparent 60%)'}}></div>

<div className="flex items-center justify-between h-fit">

<div className="flex gap-x-1 gap-y-3 items-center">
<span className="text-[11px] uppercase text-zinc-500 tracking-widest font-geist">
                01.
              </span>
<div className="h-px w-6 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<span className="text-[11px] uppercase text-zinc-500 tracking-widest font-geist">
                Features
              </span>
</div>
</div>

<h2 className="sm:text-5xl md:text-6xl lg:text-5xl text-4xl font-light text-white tracking-tight font-geist text-left max-w-none mt-6">
            Automated budgets, encrypted accounts, clear insights.
          </h2>

<div className="flex flex-col md:flex-row mt-16 mb-8 gap-y-4 md:gap-y-0 items-start md:items-center justify-between">
<p className="sm:text-base md:text-lg text-sm text-zinc-400 font-geist text-left mt-0 md:mt-4">
              With Moneo, you always know where your money's going.
            </p>
<a className="inline-flex items-center justify-center gap-3 cursor-pointer transition-all group text-sm font-semibold text-white rounded-2xl relative" href="#" style={{width: '175px', height: '55px', background: 'linear-gradient(to bottom right, #00fff0 0%, rgba(0, 255, 240, 0) 30%)', backgroundColor: 'rgba(0, 255, 240, 0.2)'}}>
<span className="transition-all duration-300 group-hover:bg-[#00fff0]/10 rounded-2xl absolute top-0 right-0 bottom-0 left-0" style={{backgroundColor: '#0B0B0C', margin: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
<span className="tracking-wide font-geist">Explore Features</span>
<svg className="w-[20px] h-[20px] transition-transform duration-300 group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(circle at center, rgba(0, 255, 240, 0.3) 0%, transparent 70%)'}}></span>
</a>
</div>

<div className="relative mt-10">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6"></div>
<div className="absolute inset-0 flex items-center justify-center -translate-y-1"></div>
</div>

<div className="pointer-events-none absolute inset-0 -z-10" style="mask-image:linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
              -webkit-mask-image:linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);"></div>
</section>
<section className="max-w-6xl mr-auto ml-auto pt-0 pr-8 pb-8 pl-8 relative space-y-2">

<div className="pointer-events-none absolute inset-0 -z-10 opacity-[.06]" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,.18) 1px,transparent 1px)', backgroundSize: '18px 18px'}}></div>

<div className="pointer-events-none absolute -z-10 -top-28 left-1/2 -translate-x-1/2 w-[38rem] h-[18rem] blur-[100px] opacity-30" style={{background: 'radial-gradient(40% 40% at 50% 20%, rgba(0,255,240,.35) 0%, transparent 60%)'}}></div>


<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6">


<article className="overflow-hidden spotlight [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll bg-gradient-to-br from-neutral-900 to-[#000000] from-white/10 to-white/0 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative" style={{'--mx': '86.89631081964258%', '--my': '3.866246234939759%', position: 'relative'}}>
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,.12) 1px,transparent 1px)', backgroundSize: '18px 18px', opacity: '.06'}}></div>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 mb-6 font-geist">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
                Encrypted Accounts
              </span>
<div className="space-y-6">
<div className="text-left">
<h3 className="md:text-3xl text-2xl text-zinc-100 mb-2 font-geist font-light tracking-tighter text-left">
                    256-bit Encryption
                  </h3>
<p className="text-zinc-400 text-sm font-geist text-left">
                    Accounts are encrypted end-to-end and protected with
                    multi-factor authentication.
                  </p>
</div>
<div className="md:justify-self-end h-[12.5rem] md:h-[14.5rem] w-full max-w-[26rem] relative translate-y-12">

<div className="absolute right-[-2rem] top-0 w-[13.5rem] h-[8.5rem] md:w-[18rem] md:h-[11rem] lg:w-[20rem] lg:h-[12.5rem] rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 -rotate-[18deg] shadow-[0_20px_60px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]">
<div className="absolute top-3 right-3 w-9 h-6 md:w-10 md:h-7 rounded bg-zinc-300/70"></div>
</div>

<div className="absolute right-[-4rem] top-2 w-[14.5rem] h-[9.25rem] md:w-[19rem] md:h-[11.75rem] lg:w-[21rem] lg:h-[13rem] rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 -rotate-[10deg] shadow-[0_18px_50px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.06)]">
<div className="absolute top-3 right-3 w-9 h-6 md:w-10 md:h-7 rounded bg-zinc-300/70"></div>
</div>

<div className="h-[10.25rem] md:w-[21rem] md:h-[13.25rem] lg:w-[23rem] lg:h-[14.5rem] overflow-hidden bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-900 w-[16rem] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77f55872-adf5-4910-9a7c-d21c0041bbe1_800w.webp)] bg-cover bg-center border-white/10 border rounded-2xl absolute top-4 right-[-6rem] shadow-[0_24px_70px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] -rotate-[2deg]">

<div className="absolute top-3 right-3 w-9 h-6 md:w-10 md:h-7 rounded bg-zinc-300/70"></div>

<div className="absolute left-4 top-4 text-[11px] md:text-sm text-zinc-200/90 inline-flex items-center gap-1">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v12"></path>
<path d="M17.196 9 6.804 15"></path>
<path d="m6.804 9 10.392 6"></path>
</svg>
<span className="tracking-wide font-geist">Moneo</span>
</div>
<span className="text-[11px] md:text-sm text-zinc-200/90 font-geist absolute bottom-4 left-4" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
                      Moneo®
                    </span>
<div className="-right-12 -bottom-16 bg-gradient-to-r from-white/10 via-white/30 to-transparent opacity-50 w-56 h-56 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bbb3d8c4-9b1a-47c7-a90f-e3eac2c57e96_800w.webp)] bg-cover bg-center absolute rotate-45"></div>
</div>
</div>
</div>
</article>
<article className="overflow-hidden md:p-8 lg:col-span-2 spotlight [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll bg-gradient-to-br from-neutral-900 to-[#000000] from-white/10 to-white/0 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative" style={{'--mx': '49.678371887865126%', '--my': '48.7178695249749%', position: 'relative'}}>
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,.12) 1px,transparent 1px)', backgroundSize: '18px 18px', opacity: '.06'}}></div>
<span className="inline-flex items-center gap-2 text-xs text-zinc-300 bg-white/5 border-white/10 border rounded-full mb-6 pt-1.5 pr-3 pb-1.5 pl-3 font-geist">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
                Smart Budgeting
              </span>
<div className="grid md:grid-cols-2 gap-8 gap-x-8 gap-y-8 items-start">
<h3 className="md:text-3xl text-2xl font-light text-zinc-100 tracking-tighter font-geist mb-2 text-left">
                  Automated Budgets &amp; Alerts
                </h3>
<p className="text-zinc-400 text-sm md:text-base max-w-sm font-geist text-left">
                  Moneo builds budgets for you, auto-categorizes spending, and
                  surfaces real-time alerts and insights.
                </p>
</div>
<div className="hover:bg-zinc-800/40 transition-all bg-zinc-900/60 border-zinc-800/60 border rounded-2xl mt-8 pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/40">
<svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
</svg>
</div>
<div className="text-left">
<div className="text-zinc-300 text-lg font-semibold tracking-tight font-geist text-left">
                        Smart Alert System
                      </div>
<div className="text-zinc-500 text-sm tracking-tight font-geist text-left">
                        Get notified instantly about important transactions
                      </div>
</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3">
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
<span className="text-sm text-zinc-200 font-geist">
                        Payment received: +$2,450
                      </span>
</div>
<span className="text-xs text-zinc-400 font-geist">2m ago</span>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-blue-400"></span>
<span className="text-sm text-zinc-300 font-geist">
                        Bill due: Electric -$127.50
                      </span>
</div>
<span className="text-xs text-zinc-400 font-geist">1h ago</span>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
<span className="text-sm text-zinc-300 font-geist">
                        Low balance warning
                      </span>
</div>
<span className="text-xs text-zinc-400 font-geist">5h ago</span>
</div>
</div>
</div>
</article>

<article className="overflow-hidden md:p-8 lg:col-span-2 spotlight [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll bg-gradient-to-br from-neutral-900 to-[#000000] from-white/10 to-white/0 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative" style={{position: 'relative', '--mx': '13.827209466008844%', '--my': '76.364208984375%'}}>
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,.12) 1px,transparent 1px)', backgroundSize: '18px 18px', opacity: '.06'}}></div>
<span className="inline-flex items-center gap-2 text-xs text-zinc-300 bg-white/5 border-white/10 border rounded-full mb-6 pt-1.5 pr-3 pb-1.5 pl-3 font-geist">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
                Clear Insights
              </span>
<div className="grid md:grid-cols-2 gap-8 gap-x-8 gap-y-8 items-start">
<h3 className="md:text-3xl text-2xl text-zinc-100 mb-2 font-geist font-light tracking-tighter text-left">
                  Clear Insights at a Glance
                </h3>
<p className="text-zinc-400 text-sm md:text-base max-w-sm font-geist text-left">
                  Track trends, goals, and progress so you always know where
                  your money's going.
                </p>
</div>
<div className="space-y-4">
<div className="bg-white/5 border-white/10 border rounded-2xl mt-8 px-4 py-4">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-zinc-300 font-geist">
                      Monthly Budget
                    </span>
<span className="text-sm font-semibold text-zinc-100 font-geist">
                      $3,200
                    </span>
</div>
<div className="flex gap-1.5 mb-6 pr-4 pl-4 gap-x-1.5 gap-y-1.5 items-end justify-center">

<span className="h-8 w-2.5 rounded-full bg-emerald-400/90 shadow-sm hover:bg-emerald-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-emerald-400/90 shadow-sm hover:bg-emerald-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-emerald-400/90 shadow-sm hover:bg-emerald-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-emerald-400/90 shadow-sm hover:bg-emerald-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-emerald-400/90 shadow-sm hover:bg-emerald-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-emerald-400/80 shadow-sm hover:bg-emerald-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-emerald-400/80 shadow-sm hover:bg-emerald-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-emerald-400/80 shadow-sm hover:bg-emerald-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-emerald-400/70 shadow-sm hover:bg-emerald-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-emerald-400/70 shadow-sm hover:bg-emerald-400 transition-all"></span>

<span className="h-8 w-2.5 rounded-full bg-lime-400/90 shadow-sm hover:bg-lime-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-lime-400/90 shadow-sm hover:bg-lime-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-yellow-400/80 shadow-sm hover:bg-yellow-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-yellow-400/80 shadow-sm hover:bg-yellow-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-amber-400/80 shadow-sm hover:bg-amber-400 transition-all"></span>

<span className="h-8 w-2.5 rounded-full bg-blue-400/90 shadow-sm hover:bg-blue-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-blue-400/90 shadow-sm hover:bg-blue-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-blue-400/80 shadow-sm hover:bg-blue-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-blue-400/80 shadow-sm hover:bg-blue-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-blue-400/80 shadow-sm hover:bg-blue-400 transition-all"></span>
<span className="h-8 w-2.5 rounded-full bg-blue-400/50 shadow-sm hover:bg-blue-400 transition-all"></span>

<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="h-8 w-2.5 rounded-full bg-zinc-700/60 hover:bg-zinc-600 transition-all"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
<span className="w-2.5 hover:bg-zinc-600 transition-all bg-zinc-700/60 h-8 rounded-full"></span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-400 font-geist">
                      $2,144 spent
                    </span>
<span className="text-xs text-emerald-400 font-geist">
                      33% remaining
                    </span>
</div>
</div>
</div>
</article>

<div className="grid grid-cols-1 lg:col-span-1 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll gap-x-6 gap-y-6">
<article className="overflow-hidden md:p-8 lg:col-span-2 lg:pl-6 lg:pt-6 lg:pr-6 lg:pb-6 bg-gradient-to-br from-neutral-900 to-[#000000] rounded-3xl pt-6 pr-6 pb-6 pl-6 relative spotlight" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px', '--mx': '2.7888580893786763%', '--my': '95.5673076923077%'}}>
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(70% 50% at 60% -10%, rgba(255,255,255,0.06), transparent 60%)'}}></div>
<div className="flex items-center justify-between mb-6"></div>
<div className="flex items-end justify-between">
<div className="text-left">
<div className="text-xs text-neutral-400 font-geist mb-1 text-left">
                      This month
                    </div>
<div className="text-3xl font-light text-neutral-100 tracking-tighter font-geist text-left">
                      850$
                    </div>
<div className="inline-flex text-[11px] text-emerald-400 font-geist bg-emerald-500/10 border-white/10 border rounded-full mt-2 pt-1 pr-2.5 pb-1 pl-2.5 gap-x-2 gap-y-2 items-center">
                      +42% vs last month
                    </div>
</div>
<svg className="h-16 w-28 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 100 40">
<path d="M2 30 C 15 10, 25 25, 40 18 S 65 28, 78 20 S 95 14, 98 8" stroke="currentColor"></path>
</svg>
</div>
</article>
<article className="overflow-hidden md:p-8 lg:col-span-2 lg:pl-6 lg:pr-6 lg:pt-6 lg:pb-6 bg-gradient-to-br from-neutral-900 to-[#000000] rounded-3xl pt-6 pr-6 pb-6 pl-6 relative spotlight" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px', '--mx': '17.979401888535822%', '--my': '3.3488063660477456%'}}>
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(70% 50% at 60% -10%, rgba(255,255,255,0.06), transparent 60%)'}}></div>
<div className="flex items-center justify-between mb-6">
<span className="inline-flex items-center gap-2 text-xs text-neutral-300 font-geist bg-neutral-800 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3">
<svg className="h-3.5 w-3.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
                    Investment Growth
                  </span>
<button className="inline-flex items-center gap-1 text-xs text-neutral-300">
<span className="font-geist">More</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
<div className="flex items-end justify-between">
<div className="text-left">
<div className="text-xs text-neutral-400 font-geist mb-1 text-left">
                      Portfolio Value
                    </div>
<div className="text-3xl font-light text-neutral-100 tracking-tighter font-geist text-left">
                      $12.4k
                    </div>
<div className="inline-flex text-[11px] text-emerald-400 font-geist bg-emerald-500/10 border-white/10 border rounded-full mt-2 pt-1 pr-2.5 pb-1 pl-2.5 gap-x-2 gap-y-2 items-center">
                      +8.3% this quarter
                    </div>
</div>
<svg className="h-16 w-28 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 100 40">
<path d="M2 22 C 15 28, 25 10, 40 20 S 65 12, 78 20 S 95 30, 98 24" stroke="currentColor"></path>
</svg>
</div>
</article>
</div>
</div>


<div className="relative mt-10">
<div className="absolute inset-0 flex items-center justify-center -translate-y-1"></div>
</div>

<div className="pointer-events-none absolute inset-0 -z-10" style="mask-image:linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
              -webkit-mask-image:linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);"></div>
</section>
<section className="lg:pl-0 lg:pr-0 max-w-7xl mr-auto ml-auto pr-6 pl-6"></section>
</section>
<section className="mt-24 mb-24 relative" id="features">
<section className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center max-w-6xl mr-auto ml-auto pt-8 pr-8 pb-0 pl-8 relative space-y-2">

<div className="pointer-events-none absolute inset-0 -z-10 opacity-[.06]" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,.18) 1px,transparent 1px)', backgroundSize: '18px 18px'}}></div>

<div className="pointer-events-none absolute -z-10 -top-28 left-1/2 -translate-x-1/2 w-[38rem] h-[18rem] blur-[100px] opacity-30" style={{background: 'radial-gradient(40% 40% at 50% 20%, rgba(0,255,240,.35) 0%, transparent 60%)'}}></div>

<div className="flex h-fit items-center justify-between">

<div className="flex gap-x-1 gap-y-3 items-center">
<span className="text-[11px] uppercase text-zinc-500 tracking-widest font-geist">02.</span>
<div className="h-px w-6 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<span className="text-[11px] uppercase text-zinc-500 tracking-widest font-geist">
                TESTIMONIALS
              </span>
</div>
</div>

<h2 className="sm:text-5xl md:text-6xl lg:text-5xl text-4xl font-light text-white tracking-tight font-geist text-left max-w-none mt-6">
            Loved by thousands
          </h2>

<div className="flex flex-col md:flex-row mt-16 mb-8 gap-y-4 md:gap-y-0 items-start md:items-center justify-between">
<p className="sm:text-base md:text-lg text-sm text-zinc-400 font-geist text-left mt-0 md:mt-4">
              See what our customers are saying about Moneo.
            </p>
<a className="inline-flex items-center justify-center gap-3 cursor-pointer transition-all group text-sm font-semibold text-white rounded-2xl relative" href="#" style={{width: '175px', height: '55px', background: 'linear-gradient(to bottom right, #00fff0 0%, rgba(0, 255, 240, 0) 30%)', backgroundColor: 'rgba(0, 255, 240, 0.2)'}}>
<span className="transition-all duration-300 group-hover:bg-[#00fff0]/10 rounded-2xl absolute top-0 right-0 bottom-0 left-0" style={{backgroundColor: '#0B0B0C', margin: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
<span className="tracking-wide font-geist">Read More</span>
<svg className="w-[20px] h-[20px] transition-transform duration-300 group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(circle at center, rgba(0, 255, 240, 0.3) 0%, transparent 70%)'}}></span>
</a>
</div>

<div className="relative mt-10">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6"></div>
<div className="absolute inset-0 flex items-center justify-center -translate-y-1"></div>
</div>

<div className="pointer-events-none absolute inset-0 -z-10" style="mask-image:linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
              -webkit-mask-image:linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);"></div>
</section>
<section className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-center max-w-6xl mr-auto ml-auto pt-0 pr-8 pb-8 pl-8 relative space-y-2 gap-x-0 gap-y-10">

<div className="pointer-events-none -z-10 opacity-[.06] absolute top-0 right-0 bottom-0 left-0 gap-x-0 gap-y-10" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.18) 1px, transparent 1px)', backgroundSize: '18px 18px', visibility: 'hidden'}}></div>



<div className="grid md:grid-cols-[0.8fr_1.2fr] bg-gradient-to-br from-neutral-900 to-[#000000] w-full h-full rounded-3xl pt-6 pr-6 pb-6 pl-6 gap-x-0 gap-y-10 items-center spotlight" style={{minHeight: '420px', position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px', '--mx': '32.31620788574219%', '--my': '91.92836794078859%'}}>

<div className="min-h-[420px] flex flex-col h-full max-w-sm relative space-y-8 justify-center">


<div className="flex items-center gap-4">
<img className="h-12 w-12 aspect-square rounded-full object-cover ring-1 ring-white/10 opacity-60 grayscale hover:opacity-90 transition cursor-pointer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39e15168-9f77-4837-9a4b-89c74b8bc38b_320w.webp"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-white tracking-tight font-geist text-left">
                    Emily Rodriguez
                  </span>
<span className="text-xs text-zinc-400 font-geist text-left">
                    Project Manager, Nova Studio
                  </span>
</div>
</div>

<div className="flex items-center gap-4">
<img className="h-16 w-16 sm:h-20 sm:w-20 aspect-square rounded-full object-cover ring-2 ring-white/20 shadow-lg cursor-pointer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca2dff12-04ff-4713-9404-e3cb60f16c8a_320w.jpg"/>
<div className="flex flex-col">
<span className="text-lg font-medium text-white tracking-tight font-geist text-left">
                    Sarah Nguyen
                  </span>
<span className="text-xs text-zinc-400 font-geist text-left">
                    Project Manager, Nova Studio
                  </span>
</div>
</div>

<div className="flex items-center gap-4">
<img className="h-12 w-12 aspect-square rounded-full object-cover ring-1 ring-white/10 opacity-60 grayscale hover:opacity-90 transition cursor-pointer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d4bf47a-eb10-4503-a4f3-1940c4118868_320w.webp"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-white tracking-tight font-geist text-left">
                    Alex Thompson
                  </span>
<span className="text-xs text-zinc-400 font-geist">
                    Project Manager, Nova Studio
                  </span>
</div>
</div>
</div>

<div className="flex flex-col h-full pr-8 pl-8 justify-center">
<blockquote className="relative transition-opacity duration-300" id="testimonial-quote">
<div className="flex items-start gap-4">
<span className="text-5xl sm:text-6xl text-white/30 leading-none select-none">
                    "
                  </span>
<p className="leading-tight sm:text-3xl md:text-4xl lg:text-4xl text-xl font-light not-italic text-slate-200 tracking-tight font-geist">
                    Nura completely
                    <span className="not-italic font-geist">
                      transformed the way
                    </span>
                    our team manages schedules. It keeps us organized, synced,
                    and focused —
                    <span className="not-italic font-geist">
                      without wasting time planning
                    </span>
                    or switching tools.
                  </p>
</div>
</blockquote>
<div className="mt-6 transition-opacity duration-300" id="testimonial-author"></div>
</div>
</div>



<div className="pointer-events-none absolute inset-0 -z-10" style="mask-image:linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
              -webkit-mask-image:linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);"></div>
</section>
<section className="lg:pl-0 lg:pr-0 max-w-7xl mr-auto ml-auto pr-6 pl-6"></section>
</section>
<section className="mt-24 mb-24 relative" id="features">
<section className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center max-w-6xl mr-auto ml-auto pt-8 pr-8 pb-0 pl-8 relative space-y-2">

<div className="pointer-events-none -z-10 opacity-[.06] absolute top-0 right-0 bottom-0 left-0"></div>

<div className="pointer-events-none absolute -z-10 -top-28 left-1/2 -translate-x-1/2 w-[38rem] h-[18rem] blur-[100px] opacity-0"></div>

<div className="flex items-center justify-between h-fit">
<div className="flex gap-x-1 gap-y-3 items-center">
<span className="text-[11px] uppercase text-zinc-500 tracking-widest font-geist">03.</span>
<div className="h-px w-6 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<span className="text-[11px] uppercase text-zinc-500 tracking-widest font-geist">
                PRICING
              </span>
</div>
</div>
<h2 className="sm:text-5xl md:text-6xl lg:text-5xl text-4xl font-light text-white tracking-tight font-geist text-left max-w-none mt-6">
            Simple, transparent pricing
          </h2>
<div className="flex flex-col md:flex-row mt-16 mb-8 gap-y-4 md:gap-y-0 items-start md:items-center justify-between">
<p className="sm:text-base md:text-lg text-sm text-zinc-400 font-geist text-left mt-0 md:mt-4">
              Choose the plan that works best for you. No hidden fees, cancel
              anytime.
            </p>
<a className="inline-flex items-center justify-center gap-3 cursor-pointer transition-all group text-sm font-semibold text-white rounded-2xl relative" href="#" style={{width: '175px', height: '55px', background: 'linear-gradient(to bottom right, #00fff0 0%, rgba(0, 255, 240, 0) 30%)', backgroundColor: 'rgba(0, 255, 240, 0.2)'}}>
<span className="transition-all duration-300 group-hover:bg-[#00fff0]/10 rounded-2xl absolute top-0 right-0 bottom-0 left-0" style={{backgroundColor: '#0B0B0C', margin: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
<span className="tracking-wide font-geist">Compare Plans</span>
<svg className="w-[20px] h-[20px] transition-transform duration-300 group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(circle at center, rgba(0, 255, 240, 0.3) 0%, transparent 70%)'}}></span>
</a>
</div>
<div className="relative mt-10">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6"></div>
</div>
<div className="pointer-events-none absolute inset-0 -z-10" style="mask-image:linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
             -webkit-mask-image:linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);"></div>
</section>
<div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mr-auto ml-auto pr-8 pl-8 gap-x-6 gap-y-6">

<div className="glass col-span-1 overflow-hidden spotlight md:col-span-2 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll bg-gradient-to-br from-neutral-900 to-[#000000] from-white/10 to-white/0 pt-8 pr-8 pb-8 pl-8 relative" style={{'--mx': '49.0557747391579%', '--my': '16.196821080172125%', position: 'relative'}}>

<div className="pointer-events-none absolute inset-0"></div>
<div className="space-y-5 relative">

<div className="flex items-start gap-3">
<span className="shrink-0 mt-0.5 grid place-items-center h-6 w-6 rounded-full border border-white/10 bg-white/5">
<svg fill="none" height="16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<p className="text-sm text-zinc-300 font-geist">
                  See all your accounts, cards, and subscriptions in one Moneo
                  dashboard.
                </p>
</div>

<div className="flex items-start gap-3">
<span className="shrink-0 mt-0.5 grid place-items-center h-6 w-6 rounded-full border border-white/10 bg-white/5">
<svg fill="none" height="16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<p className="text-sm text-zinc-300 font-geist">
                  Automatically categorize every transaction and spot spending
                  patterns fast.
                </p>
</div>
<div className="flex items-start gap-3">
<span className="shrink-0 mt-0.5 grid place-items-center h-6 w-6 rounded-full border border-white/10 bg-white/5">
<svg fill="none" height="16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<p className="text-sm text-zinc-300 font-geist">
                  Get real-time alerts for bills, low balances, and unusual
                  activity.
                </p>
</div>
<div className="flex items-start gap-3">
<span className="shrink-0 mt-0.5 grid place-items-center h-6 w-6 rounded-full border border-white/10 bg-white/5">
<svg fill="none" height="16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<p className="text-sm text-zinc-300 font-geist">
                  Set smart budgets by category and let Moneo keep you on track.
                </p>
</div>
<div className="flex items-start gap-3">
<span className="shrink-0 mt-0.5 grid place-items-center h-6 w-6 rounded-full border border-white/10 bg-white/5">
<svg fill="none" height="16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<p className="text-sm text-zinc-300 font-geist">
                  Turn your spending data into clear insights so you can save
                  more every month.
                </p>
</div>
<div className="mt-6">
<a className="inline-flex items-end gap-3 text-sm text-zinc-300 hover:text-white transition font-geist" href="#pricing-compare">
                  See full plan comparison
                  <span className="block h-px w-24 bg-white/30"></span>
</a>
</div>
</div>
</div>

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll space-y-4">

<div className="spotlight transition hover:bg-white/10 bg-gradient-to-br from-white/10 to-white/0 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6" style={{'--mx': '0.45635859644378335%', -My: '84.1248629385965%', position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>

<div className="absolute inset-0 pointer-events-none"></div>
<div className="flex items-center justify-between gap-6">
<div className="flex items-center gap-3">

<span className="grid place-items-center h-6 w-6 rounded-full border border-white/20 bg-white/10">
<span className="h-3 w-3 rounded-full bg-white"></span>
</span>
<div>
<div className="text-2xl tracking-tight text-zinc-100 font-geist font-medium">
                      Popular
                    </div>
<div className="text-xs text-zinc-400 font-geist">
                      Best for personal budgeting
                    </div>
</div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl text-zinc-100 font-geist font-light tracking-tighter">
                    $40
                  </span>
<span className="text-sm text-zinc-400 font-geist">/month</span>
</div>
</div>
</div>

<div className="spotlight transition hover:bg-white/10 bg-gradient-to-br from-white/10 to-white/0 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6" style={{'--mx': '71.26067653753408%', '--my': '5.36938048245614%'}}>
<div className="flex items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="grid place-items-center w-6 h-6 flex-none rounded-full border border-white/20 bg-transparent">
<span className="w-3 h-3 flex-none rounded-full bg-transparent"></span>
</span>
<div>
<div className="text-2xl tracking-tight text-zinc-100 font-geist font-medium">
                      Pro
                    </div>
<div className="text-xs text-zinc-400 font-geist">
                      For couples and shared budgets
                    </div>
</div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl text-zinc-100 font-geist font-light tracking-tighter">
                    $50
                  </span>
<span className="text-sm text-zinc-400 font-geist">/month</span>
</div>
</div>
</div>

<div className="spotlight transition hover:bg-white/10 bg-gradient-to-br from-white/10 to-white/0 border-white/10 border rounded-3xl px-6 py-6" style={{'--mx': '72.01676695287675%', '--my': '4.235197368421053%'}}>
<div className="flex items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="grid place-items-center w-6 h-6 flex-none rounded-full border border-white/20 bg-transparent">
<span className="w-3 h-3 flex-none rounded-full bg-transparent"></span>
</span>
<div>
<div className="text-2xl tracking-tight text-zinc-100 font-geist font-medium">
                      Advanced
                    </div>
<div className="text-xs text-zinc-400 font-geist">
                      For families and small businesses
                    </div>
</div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl text-zinc-100 font-geist font-light tracking-tighter">
                    $60
                  </span>
<span className="text-sm text-zinc-400 font-geist">/month</span>
</div>
</div>
</div>
</div>
</div>
<section className="lg:pl-0 lg:pr-0 max-w-7xl mr-auto ml-auto pr-6 pl-6"></section>
</section>



<section className="mt-24 mb-24 relative"></section>
</main>

<footer className="mt-24 mb-24 relative" id="footer">
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-8 pl-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">

<div className="col-span-2">
<div className="flex items-center gap-3 mb-4">
<span className="text-lg font-semibold tracking-tight text-zinc-100 font-geist">
                Moneo
              </span>
</div>
<p className="text-sm text-zinc-400 max-w-xs mb-6 font-geist">
              Master your money with automated budgets, encrypted accounts, and
              clear insights.
            </p>
<div className="flex items-center gap-3">
<a aria-label="Twitter" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 hover:bg-white/10 hover:text-white ring-focus" href="#">
<svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="GitHub" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 hover:bg-white/10 hover:text-white ring-focus" href="#">
<svg className="lucide lucide-github h-4 w-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a aria-label="LinkedIn" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 hover:bg-white/10 hover:text-white ring-focus" href="#">
<svg className="lucide lucide-linkedin h-4 w-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>

<div className="">
<h3 className="text-sm font-semibold text-zinc-100 mb-4 font-geist">
              Product
            </h3>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-zinc-400 hover:text-zinc-100 font-geist" href="#features">
                  Features
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-400 hover:text-zinc-100 font-geist" href="#pricing">
                  Pricing
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-400 hover:text-zinc-100 font-geist" href="#">
                  Security
                </a>
</li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-zinc-100 mb-4 font-geist">
              Company
            </h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-zinc-400 hover:text-zinc-100 font-geist" href="#">
                  About
                </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-zinc-100 font-geist" href="#">
                  Blog
                </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-zinc-100 font-geist" href="#">
                  Careers
                </a>
</li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-zinc-100 mb-4 font-geist">
              Resources
            </h3>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-zinc-400 hover:text-zinc-100 font-geist" href="#">
                  Documentation
                </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-zinc-100 font-geist" href="#">
                  Help Center
                </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-zinc-100 font-geist" href="#">
                  Community
                </a>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
<p className="text-xs text-zinc-500 font-geist">
            © 2025 Moneo. All rights reserved.
          </p>
<div className="flex items-center gap-6 text-xs text-zinc-500">
<a className="hover:text-zinc-300 font-geist" href="#">
              Privacy Policy
            </a>
<a className="hover:text-zinc-300 font-geist" href="#">
              Terms of Service
            </a>
<a className="hover:text-zinc-300 font-geist" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
