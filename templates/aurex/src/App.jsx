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



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


  document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('lensTechChart').getContext('2d');
    
    // Gradient for the line
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(220, 38, 38, 0.5)'); // Red-600
    gradient.addColorStop(1, 'rgba(220, 38, 38, 0.0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['380', '400', '420', '440', '460', '480', '500', '550', '600', '700'],
        datasets: [
          {
            label: 'Lumina-X1',
            data: [0, 2, 5, 85, 94, 96, 98, 99, 99.5, 99.8],
            borderColor: '#ef4444', // Red-500
            backgroundColor: gradient,
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 4,
            fill: true
          },
          {
            label: 'Standard Lens',
            data: [10, 20, 40, 60, 80, 85, 90, 92, 92, 92],
            borderColor: '#404040', // Neutral-700
            borderWidth: 2,
            borderDash: [5, 5],
            tension: 0.4,
            pointRadius: 0,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(10, 10, 10, 0.9)',
            titleColor: '#fff',
            bodyColor: '#a3a3a3',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            padding: 10,
            displayColors: false,
            titleFont: { family: 'Geist Mono', size: 10 },
            bodyFont: { family: 'Geist Mono', size: 10 }
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.03)',
              drawBorder: false
            },
            ticks: {
              color: '#525252',
              font: { family: 'Geist Mono', size: 9 },
              maxRotation: 0
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.03)',
              drawBorder: false
            },
            ticks: {
              color: '#525252',
              font: { family: 'Geist Mono', size: 9 },
              callback: function(value) { return value + '%' }
            },
            min: 0,
            max: 100
          }
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
      }
    });
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[900px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bKN5upvoulAmWvInmHza"></div>

</div></div>

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute inset-0 mx-auto max-w-7xl grid-lines border-r border-l border-white/[0.03]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--accent-glow),_transparent_70%)] opacity-50 blur-3xl"></div>
</div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0s_both] animate">
<nav className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/5 bg-[#050505]/80 p-2 pl-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/5">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52852d06-9582-4b84-a976-461734d3cceb_320w.png)] bg-cover rounded-full" href="#"></a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Collections</a>
<a className="hover:text-white transition-colors" href="#">Lenses</a>
<a className="hover:text-white transition-colors" href="#">
            Virtual Try-On
          </a>
<a className="hover:text-white transition-colors" href="#">Stores</a>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-neutral-400 hover:text-white transition-colors">
<svg className="" data-icon-set="lucide" data-lucide="search" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
<button className="group relative flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-neutral-800" style={{'--border-gradient': 'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.05))', '--border-radius-before': '9999px'}}>
<svg className="" data-icon-set="lucide" data-lucide="shopping-cart" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></g></svg>
<span>Bag</span>
</button>
</div>
</nav>
</div>

<main className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-32 pl-6 relative">

<div className="mx-auto mb-24 max-w-4xl text-center">
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.1s_both] mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-950/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-red-200 shadow-[0_0_15px_rgba(204,0,0,0.15)] animate">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
</span>
          New Release: The Maverick Collection
        </div>
<h1 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] mb-6 text-5xl font-medium leading-[0.95] tracking-tight text-white md:text-7xl animate">
          Vision Crafted for
          <br/>
<span className="text-neutral-500">Modern Life.</span>
</h1>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] mx-auto mb-10 max-w-xl text-lg font-light leading-relaxed text-neutral-400 tracking-tight animate">
          Discover premium handcrafted acetate and titanium frames designed for
          clarity, comfort, and effortless style.
        </p>
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] flex flex-col items-center justify-center gap-4 animate">
<button className="group relative flex items-center gap-2 rounded-full bg-white text-black px-8 py-3 text-sm font-medium transition-all hover:bg-gray-200">
<span className="">Shop the Collection</span>
<svg className="transition-transform group-hover:translate-x-0.5" data-icon-set="lucide" data-lucide="arrow-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 mb-32 relative gap-x-6 gap-y-6">

<div className="absolute -left-12 top-0 hidden text-[10px] font-mono text-neutral-800 xl:block">
          01
        </div>
<div className="absolute -right-12 top-0 hidden text-[10px] font-mono text-neutral-800 xl:block">
          02
        </div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] relative md:col-span-8 h-[400px] md:h-[500px] group overflow-hidden rounded-3xl border border-white/5 bg-[#080808] animate hover:border-white/10 transition-all">
<img alt="Canon Solutions" className="transition-transform duration-700 group-hover:scale-105 opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a94c46b-4f90-40b9-9253-907f918e1e88_1600w.webp"/>
<div className="bg-gradient-to-t from-black via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-2 text-red-500 mb-2">
<svg className="" data-icon-set="lucide" data-lucide="glasses" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="15" r="4"></circle><circle cx="18" cy="15" r="4"></circle><path d="M14 15a2 2 0 0 0-2-2a2 2 0 0 0-2 2m-7.5-2L5 7c.7-1.3 1.4-2 3-2m13.5 8L19 7c-.7-1.3-1.5-2-3-2"></path></g></svg>
<span className="text-xs font-semibold uppercase tracking-widest">
                Craftsmanship
              </span>
</div>
<h3 className="text-3xl font-normal tracking-tight text-white mb-2">
              Handcrafted Acetate
            </h3>
<p className="text-neutral-400 text-sm max-w-md">
              Meticulously polished by hand for a superior finish.
            </p>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] md:col-span-4 flex flex-col z-10 animate gap-x-6 gap-y-6">

<div className="flex-1 overflow-hidden hover:border-white/10 transition-all group bg-[#080808] border-white/5 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<img className="group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 opacity-40 w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39121ef5-e3fa-47d0-9dbc-0c857e651726_800w.webp"/>
<div className="z-10 flex flex-col h-full relative justify-end">
<div className="mb-auto p-2 bg-white/5 w-fit rounded-lg border border-white/10 backdrop-blur-md">
<svg className="text-white" data-icon-set="lucide" data-lucide="sun" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</div>
<h3 className="text-xl font-normal text-white mt-4">
                Sun Collection
              </h3>
<div className="h-px w-full bg-white/10 my-3"></div>
<div className="flex justify-between items-center">
<span className="text-xs text-neutral-500">100% UV Protection</span>
<svg className="text-neutral-500 group-hover:text-white transition-colors" data-icon-set="lucide" data-lucide="arrow-up-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div><div className="flex-1 overflow-hidden hover:border-white/10 transition-all group bg-[#080808] border-white/5 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<img className="group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 opacity-40 w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84881032-e239-416a-864e-6e1cc151f3d2_800w.webp"/>
<div className="z-10 flex flex-col h-full relative justify-end">
<div className="mb-auto p-2 bg-white/5 w-fit rounded-lg border border-white/10 backdrop-blur-md">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="eye" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-xl font-normal text-white mt-4">Optical Frames</h3>
<div className="h-px w-full bg-white/10 my-3"></div>
<div className="flex justify-between items-center">
<span className="text-xs text-neutral-500">Prescription ready lenses &amp; anti-reflective coatings.</span>
<svg className="text-neutral-500 group-hover:text-white transition-colors" data-icon-set="lucide" data-lucide="arrow-up-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.7s_both] mb-24">
<div className="flex flex-wrap gap-4 gap-x-4 gap-y-4 justify-center">
<button className="group flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-6 py-3 hover:bg-white/[0.05] transition-colors">
<svg className="text-neutral-400 group-hover:text-red-500 transition-colors" data-icon-set="lucide" data-lucide="user" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
<span className="text-sm text-neutral-300">Men</span>
</button>
<button className="group flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-6 py-3 hover:bg-white/[0.05] transition-colors">
<svg className="text-neutral-400 group-hover:text-red-500 transition-colors" data-icon-set="lucide" data-lucide="sparkles" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span className="text-sm text-neutral-300">Women</span>
</button>
<button className="group flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-6 py-3 hover:bg-white/[0.05] transition-colors">
<svg className="text-neutral-400 group-hover:text-red-500 transition-colors" data-icon-set="lucide" data-lucide="monitor" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect className="" height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8m-4-4v4"></path></g></svg>
<span className="text-sm text-neutral-300">Blue Light</span>
</button>
<button className="group flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-6 py-3 hover:bg-white/[0.05] transition-colors">
<svg className="text-neutral-400 group-hover:text-red-500 transition-colors" data-icon-set="lucide" data-lucide="shopping-bag" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<span className="text-sm text-neutral-300">Accessories</span>
</button>
</div>
</div>

<div className="mb-32">
<div className="flex animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] mb-12 items-end justify-between">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-white mb-2">
              Curated Selections
            </h2>
<p className="text-neutral-500 text-sm">
              Timeless styles for every face shape.
            </p>
</div>
<div className="flex gap-2">
<button className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10">
<svg className="" data-icon-set="lucide" data-lucide="chevron-left" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 18l-6-6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10">
<svg className="" data-icon-set="lucide" data-lucide="chevron-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] group overflow-hidden transition-colors hover:bg-white/[0.03] border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-4 left-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-red-500">
                New Arrival
              </span>
</div>
<div className="flex z-10 w-full mt-4 mb-8 relative items-center justify-center">
<img alt="Printer" className="h-full object-contain drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2683cb80-b761-47b5-8990-c328c8a6df43_800w.webp"/>
</div>
<h3 className="text-lg font-medium text-white mb-2">The Architect</h3>
<p className="text-sm text-neutral-500 mb-6 font-mono">£ 145.00</p>
<button className="w-full rounded-full border border-white/10 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-black">
              Buy Now
            </button>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] group overflow-hidden bg-[#0F0F0F] border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">
<div className="group-hover:opacity-100 transition-opacity bg-red-500/5 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 left-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-red-500">
                Best Seller
              </span>
</div>
<div className="flex z-10 h-48 mt-4 mb-8 relative items-center justify-center">
<img alt="Printer" className="h-full object-contain drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7cfb2bf-d3f2-4dfc-aa1e-e0ef5c561134_800w.webp"/>
</div>
<h3 className="text-lg font-medium text-white mb-2">The Aviator Pro</h3>
<p className="text-sm text-neutral-500 mb-6 font-mono">£ 180.00</p>
<button className="w-full rounded-full bg-white py-2.5 text-xs font-semibold text-black transition-transform hover:scale-[1.02]">
              Pre-order
            </button>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-colors hover:bg-white/[0.03]">
<div className="absolute top-4 left-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">
                Compact
              </span>
</div>
<div className="flex z-10 h-48 mt-4 mb-8 relative items-center justify-center">
<img alt="Printer" className="h-full object-contain drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3237c69-9f10-4fa4-8654-e77b4ad8ac82_800w.webp"/>
</div>
<h3 className="text-lg font-medium text-white mb-2">The Bell</h3>
<p className="text-sm text-neutral-500 mb-6 font-mono">£ 135.00</p>
<button className="w-full rounded-full border border-white/10 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-black">
              Buy Now
            </button>
</div>
</div>
</div>
</main>

<section className="relative border-t border-white/5 bg-[#030303] py-32 overflow-hidden">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="mb-20 text-center">
<h2 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] text-3xl font-medium tracking-tight text-white md:text-5xl">
            Material Innovation
          </h2>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] mt-4 text-neutral-400 font-light">
            Engineered for durability, designed for weightlessness.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px] h-auto gap-x-4 gap-y-4">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] col-span-1 md:col-span-2 md:row-span-2 relative rounded-3xl border border-white/5 bg-[#0A0A0A] overflow-hidden group hover:border-red-500/20 transition-colors">
<img alt="EOS R" className="group-hover:opacity-100 transition-opacity duration-700 opacity-40 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b4b4ed1-7dc8-4592-a34a-5515be89640b_1600w.webp"/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-center text-center z-10">
<div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#111] shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-red-500/30">
<div className="absolute inset-0 rounded-2xl bg-red-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
<svg className="text-neutral-400 transition-colors group-hover:text-red-400" data-icon-set="lucide" data-lucide="glasses" height="28" style={{}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="15" r="4"></circle><circle cx="18" cy="15" r="4"></circle><path d="M14 15a2 2 0 0 0-2-2a2 2 0 0 0-2 2m-7.5-2L5 7c.7-1.3 1.4-2 3-2m13.5 8L19 7c-.7-1.3-1.5-2-3-2"></path></g></svg>
</div>
<h3 className="text-white text-3xl font-medium tracking-tight mb-2">
                Japanese Titanium
              </h3>
<p className="text-neutral-500 text-sm max-w-xs mb-6">
                Aerospace-grade materials offering unparalleled strength and
                comfort.
              </p>
<button className="bg-red-600 text-white px-6 py-2 rounded-full text-xs font-medium hover:bg-red-500 transition-colors">
                Explore Metal
              </button>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] col-span-1 md:col-span-1 overflow-hidden group flex flex-col hover:border-red-500/20 transition-colors z-10 bg-[#0A0A0A] border-white/5 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative items-center justify-end">
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4fa5d11-d2c5-4dd8-8f44-e97b11297f66_800w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>
<h3 className="relative z-10 text-white text-lg font-medium">
              Polarized Lenses
            </h3>
<p className="relative z-10 text-[10px] text-neutral-500">Clarity Redefined</p>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] col-span-1 md:col-span-1 overflow-hidden group flex flex-col bg-[#0A0A0A] hover:border-red-500/20 transition-colors border-white/5 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative items-center justify-end">
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e966bc09-4d95-4a80-ab7b-3c277e65ba15_800w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>
<h3 className="z-10 leading-tight text-lg font-medium text-white text-center relative">
              Bio-Acetate
            </h3>
<p className="z-10 text-[10px] text-neutral-500 relative">Eco-friendly materials</p>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.7s_both] col-span-1 md:col-span-1 overflow-hidden group bg-[#0A0A0A] border-white/5 border rounded-3xl relative hover:border-red-500/20 transition-colors">
<img alt="Flash" className="group-hover:opacity-100 transition-opacity duration-700 object-cover absolute top-0 right-0 bottom-0 left-0 opacity-40 w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7db323b-b62c-48e9-ba21-8ed554e7d2a8_800w.webp"/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 w-full text-center p-4">
<h3 className="text-white text-lg font-medium">Leather Cases</h3>
<p className="text-[10px] text-neutral-500">Protection in style</p>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.7s_both] col-span-1 md:col-span-1 overflow-hidden group bg-[#0A0A0A] border-white/5 border rounded-3xl relative hover:border-red-500/20 transition-colors">
<img alt="Flash" className="group-hover:opacity-100 transition-opacity duration-700 opacity-40 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd8ed8fa-7d40-48ab-9f0f-83c906166ad2_800w.webp"/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 w-full text-center p-4">
<h3 className="text-lg font-medium text-white">Sustainability</h3>
<p className="text-[10px] text-neutral-500">Recycled &amp; Renewable</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:mt-28 mt-20 relative" id="technology">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-red-200 mb-6">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
</span>
          Engineering &amp; Design
        </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">Precision in every detail</h2>
<p className="leading-relaxed text-neutral-400 max-w-xl">We combine heritage craftsmanship with cutting-edge optical technology to create eyewear that doesn't just look better, it sees better.</p>
<ul className="mt-8 space-y-6">

<li className="flex items-start gap-4">
<span className="mt-1 h-8 w-8 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-items-center text-white shrink-0">
<svg className="lucide lucide-glasses" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="15" r="4"></circle><circle cx="18" cy="15" r="4"></circle><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"></path><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"></path><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"></path></svg>
</span>
<div className="">
<div className="text-sm font-medium text-white">Japanese Acetate</div>
<div className="text-sm text-neutral-500 mt-1">Hand-polished organic materials sourced from Sabae, Japan.</div>
</div>
</li>

<li className="flex items-start gap-4">
<span className="mt-1 h-8 w-8 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-items-center text-white shrink-0">
<svg className="lucide lucide-shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
<div className="">
<div className="text-sm font-medium text-white">Impact Resistant</div>
<div className="text-sm text-neutral-500 mt-1">Shatterproof polycarbonate lenses with anti-scratch coating.</div>
</div>
</li>

<li className="flex items-start gap-4">
<span className="mt-1 h-8 w-8 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-items-center text-white shrink-0">
<svg className="lucide lucide-feather" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12.6 23.25C2.1 23.95 0 12.35 0 12.35S.6 2.3 11.25.6a19.7 19.7 0 0 1 12.1 6.8c.15.2.2.45.1.7-.6 1.35-1.4 2.7-2.3 3.95"></path><path d="M20.2 12.85c-.9 1.4-1.95 2.75-3.15 4"></path><path d="M16 17.65c-1.3 1.25-2.7 2.35-4.25 3.3"></path><path d="m14 2.65 1.55 3.1c.1.2.35.3.6.25 1.5-.25 3.1-.45 4.65-.6"></path></svg>
</span>
<div className="">
<div className="text-sm font-medium text-white">Featherweight Titanium</div>
<div className="text-sm text-neutral-500 mt-1">Aerospace-grade metal frames weighing less than 12 grams.</div>
</div>
</li>
</ul>
<div className="mt-8 flex gap-4">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105" href="#">
<span>Explore Collection</span>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10" href="#">
<span>Our Technology</span>
</a>
</div>
</div>

<div className="relative">

<div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-red-500/10 via-neutral-500/5 to-white/5 blur-2xl opacity-50"></div>
<div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-3 shadow-2xl">
<div className="rounded-xl overflow-hidden relative group">
<img alt="Lumina Lens Technology" className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a3c1bbf-2150-40db-b41c-341f6b9cc3e7_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-3 bg-black/40 backdrop-blur-md p-3 rounded-lg border border-white/10">
<div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white">
<svg className="lucide lucide-aperture" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
<div className="">
<div className="text-sm font-medium text-white">Lumina-X1 Filter</div>
<div className="text-xs text-neutral-400">99.9% Color Fidelity</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3 mt-3">
<div className="relative h-24 w-full overflow-hidden rounded-lg border border-white/10 group cursor-pointer">
<img alt="Detail 1" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/287186c4-6b2e-4e1f-b19c-0bb5c3eebfbb_800w.webp"/>
</div>
<div className="relative h-24 w-full overflow-hidden rounded-lg border border-white/10 group cursor-pointer">
<img alt="Detail 2" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ea8b2fc-10dc-4e2e-a5d2-ae90526f5fe1_800w.jpg"/>
</div>
<div className="relative h-24 w-full overflow-hidden rounded-lg border border-white/10 group cursor-pointer">
<div className="absolute inset-0 bg-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<span className="text-xs font-medium">+12 More</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="relative border-t border-white/5 bg-[#020202] py-32 overflow-hidden">

<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both]">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-neutral-300 mb-6">
<svg className="" data-icon-set="lucide" data-lucide="layers" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path className="" d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path className="" d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
          Optical Engineering
        </div>
<h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl mb-6">
          Precision at Every 
          <span className="text-neutral-500">Wavelength.</span>
</h2>
<p className="leading-relaxed font-light text-neutral-400 max-w-lg mb-8">Our proprietary Aurex-X1 filtration technology selectively targets harmful high-energy blue light while maintaining 99.8% true color fidelity.</p>

<div className="relative w-full rounded-2xl border border-white/10 bg-[#080808] p-6 mb-8 shadow-2xl">
<div className="flex justify-between items-center mb-6">
<div>
<div className="text-xs font-semibold text-white">Transmission Curve</div>
<div className="text-[10px] text-neutral-500 font-mono">Spectrum Analysis (nm)</div>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-[10px] text-neutral-400">Aurex-X1</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<span className="text-[10px] text-neutral-400">Standard</span>
</div>
</div>
</div>
<div className="h-[250px] w-full">
<canvas className="" height="500" id="lensTechChart" style={{display: 'block', boxSizing: 'border-box', height: '250px', width: '534px'}} width="1068"></canvas>
</div>
</div>

<div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
<div>
<div className="text-2xl font-medium text-white tracking-tight">420<span className="text-sm text-neutral-500 ml-1">nm</span></div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">UV Cutoff</div>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight">96<span className="text-sm text-neutral-500 ml-1">abbé</span></div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Clarity Index</div>
</div>
<div className="">
<div className="text-2xl font-medium text-white tracking-tight">0.2<span className="text-sm text-neutral-500 ml-1">%</span></div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Reflectance</div>
</div>
</div>
</div>

<div className="relative animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both]">

<div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#050505] aspect-[4/5] lg:aspect-square">
<img alt="Lens Technology Abstract" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87456fcf-5f27-4bb4-8514-65201e1b3921_1600w.webp"/>

<div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-white/5"></div>

<div className="absolute top-8 right-8">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white animate-spin [animation-duration:10s]">
<svg className="" data-icon-set="lucide" data-lucide="sun" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</div>
</div>
<div className="absolute bottom-8 left-8 right-8">
<div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl p-5">
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500">
<svg className="" data-icon-set="lucide" data-lucide="shield-check" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<h4 className="text-sm font-medium text-white">Impact Resistant</h4>
<p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                    Aerospace-grade polycarbonate composite tested to withstand high-velocity impact.
                  </p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 -top-4 -right-4 w-24 h-24 border-t border-r border-white/10 rounded-tr-3xl"></div>
<div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 border-b border-l border-white/10 rounded-bl-3xl"></div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pb-12 pt-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 flex flex-col justify-between gap-12 md:flex-row">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52852d06-9582-4b84-a976-461734d3cceb_320w.png)] bg-cover rounded-full" href="#"></a>
</div>
<p className="text-xs leading-relaxed text-neutral-500">
              See the world differently. Lumina is a premier provider of
              handcrafted eyewear and optical solutions.
            </p>
</div>
<div className="flex gap-16 text-xs text-neutral-500">
<div className="flex flex-col gap-4">
<span className="font-semibold text-white">Company</span>
<a className="hover:text-white" href="#">About Us</a>
<a className="hover:text-white" href="#">Sustainability</a>
<a className="hover:text-white" href="#">Careers</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-semibold text-white">Support</span>
<a className="hover:text-white" href="#">Downloads</a>
<a className="hover:text-white" href="#">Warranty</a>
<a className="hover:text-white" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-semibold text-white">Social</span>
<a className="hover:text-white" href="#">Instagram</a>
<a className="hover:text-white" href="#">YouTube</a>
<a className="hover:text-white" href="#">LinkedIn</a>
</div>
</div>
</div>
<div className="flex items-center justify-between border-t border-white/5 pt-8">
<p className="text-[10px] text-neutral-600">
            © 2025 Lumina Eyewear Ltd.
          </p>
<div className="flex gap-4 items-center">
<div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
<span className="text-[10px] text-neutral-500">
              All Systems Operational
            </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
