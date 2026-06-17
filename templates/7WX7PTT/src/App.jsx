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


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


      // Replace icons
      document.addEventListener("DOMContentLoaded", () => {
        if (window.lucide) lucide.createIcons();
        const y = document.getElementById("year");
        if (y) y.textContent = new Date().getFullYear();

        // Chart.js setup for yacht market data
        const ctx = document.getElementById("yachtMarketChart");
        if (ctx) {
          const gradient = ctx.getContext("2d").createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(34, 211, 238, 1)");
          gradient.addColorStop(1, "rgba(34, 211, 238, 0.05)");

          const data = {
            labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
            datasets: [
              {
                label: "USD (Billions)",
                data: [7.2, 6.1, 8.5, 10.2, 12.8, 15.4],
                backgroundColor: gradient,
                borderRadius: 10,
                borderSkipped: false
              }
            ]
          };

          new Chart(ctx, {
            type: "bar",
            data,
            options: {
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: "rgba(12, 20, 38, 0.95)",
                  borderColor: "rgba(255,255,255,0.1)",
                  borderWidth: 1,
                  titleColor: "#fff",
                  bodyColor: "#22d3ee",
                  padding: 10
                }
              },
              scales: {
                x: {
                  grid: { display: false },
                  ticks: { color: "rgba(255,255,255,0.6)", font: { weight: "500" } }
                },
                y: {
                  beginAtZero: true,
                  grid: { color: "rgba(255,255,255,0.06)" },
                  ticks: { color: "rgba(255,255,255,0.6)" }
                }
              }
            }
          });
        }
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
      <div className="aura-background-component top-0 w-full -z-10 absolute h-[800px]"><div data-us-project="98LbxUn5KV3Z8vHICb6u" style={{width: '1920px', height: '696px'}}></div>
</div>

<header className="relative z-50 sticky top-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-slate-200/20 to-slate-800/80 border-white/20 border-b backdrop-blur-lg">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<nav className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="flex h-16 items-center justify-between">
<a className="inline-flex items-center gap-2" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center ring-1 ring-white/10 bg-zinc-800 rounded-full">
<svg className="lucide lucide-orbit h-4 w-4 text-zinc-200" data-lucide="orbit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"></path><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"></path><circle cx="12" cy="12" r="3"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle></svg>
</span>
<span className="text-2xl font-semibold tracking-tight font-playfair">Marine</span>
</a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm/6 font-medium text-white/80 hover:text-white transition" href="#" style={{}}>Fleet</a>
<a className="text-sm/6 font-medium text-white/80 hover:text-white transition" href="#" style={{}}>Charters</a>
<a className="text-sm/6 font-medium text-white/80 hover:text-white transition" href="#" style={{}}>Services</a>
<a className="text-sm/6 font-medium text-white/80 hover:text-white transition" href="#" style={{}}>Sales</a>
</div>
<div className="flex items-center space-x-4">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs font-medium transition" style={{}}>
<svg className="lucide lucide-user h-4 w-4 text-slate-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Sign in
            </button>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10" style={{}}>
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</nav>
</header>

<section className="relative pt-10 pb-10">
<div className="absolute inset-0">
<div data-us-project="98LbxUn5KV3Z8vHICb6u" style={{width: '1920px', height: '696px'}}></div>
<div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_20%,rgba(34,211,238,0.25),transparent_60%)]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1220]/30 to-[#0b1220]/95"></div>
</div>
<div className="relative max-w-7xl sm:px-6 lg:px-8 sm:pt-24 mr-auto ml-auto pr-4 pl-4">
<div className="max-w-3xl text-center mr-auto ml-auto">
<span className="uppercase text-xs text-slate-100/90 tracking-wider">New: VIP Concierge Service</span>
<h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
        Luxury. Adventure. Unforgettable moments.
    </h1>
<p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
        Experience the ultimate in yacht chartering with our premium fleet, 
        expert crew, and personalized luxury services.
    </p>
<div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
<button aria-label="Primary action" className="group relative inline-flex items-center gap-2 rounded-3xl px-6 py-3 bg-gradient-to-b from-blue-500/20 to-blue-600/40 text-sky-50 font-medium tracking-tight cursor-pointer outline-none transition-all duration-300 ease-out ring-1 ring-sky-400/10 hover:ring-sky-400/30 hover:shadow-[0_0_0_3px_rgba(56,189,248,0.08)] focus-visible:ring-2 focus-visible:ring-sky-400/50 shadow-[inset_0_0_12px_rgba(151,200,255,0.44)] hover:shadow-[inset_0_0_14px_rgba(151,200,255,0.60)] hover:bg-gradient-to-b hover:from-blue-500/25 hover:to-blue-600/50" type="button">
<span className="absolute inset-0 rounded-3xl z-0" style={{background: 'linear-gradient(180deg, rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.42) 100%), rgba(59, 130, 246, 0.22)', boxShadow: 'inset 0 0 12px rgba(151,200,255,0.44)'}}></span>
<span className="absolute inset-0 rounded-3xl z-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'linear-gradient(180deg, rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.54) 100%), rgba(59, 130, 246, 0.30)', boxShadow: 'inset 0 0 14px rgba(151,200,255,0.60)'}}></span>
<span className="pointer-events-none absolute inset-0 rounded-3xl z-10" style={{padding: '1px', background: 'linear-gradient(180deg, rgba(184, 238, 255, 0.24) 0%, rgba(184, 238, 255, 0) 100%), linear-gradient(0deg, rgba(184, 238, 255, 0.32), rgba(184, 238, 255, 0.32))', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', borderRadius: '1.5rem'}}></span>
<span className="relative z-20 flex items-center gap-2">
<span className="text-[15px] leading-none">Book Charter</span>
<svg className="w-4 h-4 text-sky-100/90 transition-transform duration-300 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</button>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition-all text-gray-100 bg-white/5 border-white/10 border rounded-full px-5 py-3 backdrop-blur-lg" href="#product">
            View Fleet
            <svg className="lucide lucide-ship w-4 h-4" data-lucide="ship" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.189V14"></path><path d="M12 2v3"></path><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</a>
</div>
<div className="mt-8 flex items-center gap-6 justify-center">
<div className="flex -space-x-2">
<img alt="" className="w-9 h-9 object-cover border-slate-400 border-2 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&amp;q=80"/>
<img alt="" className="w-9 h-9 object-cover border-slate-400 border-2 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=160&amp;q=80"/>
<img alt="" className="w-9 h-9 object-cover border-slate-400 border-2 rounded-full" src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?w=160&amp;q=80"/>
<div className="w-9 h-9 flex text-xs text-black bg-blue-500 border-slate-400 border-2 rounded-full items-center justify-center">
                500+
            </div>
</div>
<div className="">
<p className="text-sm text-gray-100">500+ satisfied guests</p>
<p className="text-sm text-gray-400">Luxury charters worldwide</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
<div className="flex gap-3 bg-white/5 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur items-center hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group" style={{}}>
<div className="h-10 w-10 flex bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-slate-400/40 via-zinc-800/50 to-slate-400/50 rounded-xl items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{}}>
<svg className="lucide lucide-anchor w-[20px] h-[20px] text-slate-50 group-hover:text-cyan-300 transition-colors duration-300" data-icon-replaced="true" data-lucide="anchor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22V8"></path><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path><circle cx="12" cy="5" r="3"></circle></svg>
</div>
<div className="">
<p className="text-sm font-semibold tracking-tight group-hover:text-white transition-colors duration-300">Luxury Fleet</p>
<p className="text-xs text-white/70 group-hover:text-white/80 transition-colors duration-300" style={{}}>50ft to 300ft superyachts</p>
</div>
</div>
<div className="backdrop-blur rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center gap-3 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group" style={{}}>
<div className="h-10 w-10 flex bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-slate-400/40 via-zinc-800/50 to-slate-400/50 rounded-xl items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{}}>
<svg className="lucide lucide-compass w-[20px] h-[20px] text-slate-50 group-hover:text-cyan-300 transition-colors duration-300" data-icon-replaced="true" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<p className="text-sm font-semibold tracking-tight group-hover:text-white transition-colors duration-300">Expert Crew</p>
<p className="text-xs text-white/70 group-hover:text-white/80 transition-colors duration-300" style={{}}>Professional captains &amp; staff</p>
</div>
</div>
<div className="backdrop-blur rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center gap-3 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group" style={{}}>
<div className="h-10 w-10 flex bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-slate-400/40 via-zinc-800/50 to-slate-400/50 rounded-xl items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{}}>
<svg className="lucide lucide-map w-[20px] h-[20px] text-slate-50 group-hover:text-cyan-300 transition-colors duration-300" data-icon-replaced="true" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<div className="">
<p className="text-sm font-semibold tracking-tight group-hover:text-white transition-colors duration-300">Custom Routes</p>
<p className="text-xs text-white/70 group-hover:text-white/80 transition-colors duration-300" style={{}}>Mediterranean, Caribbean &amp; more</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:py-24 pt-16 pb-16">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-3xl mx-auto">
<p className="text-xs tracking-wider text-neutral-300/90">Discover Our Fleet</p>
<h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold">Luxury Yacht Gallery</h2>
<p className="mt-4 text-base sm:text-lg text-white/70">Experience the elegance and sophistication of our world-class yacht collection</p>
</div>
<div className="mt-12 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/10 break-inside-avoid">
<div className="relative h-64 overflow-hidden">
<img alt="Luxury superyacht at sunset" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cdn.midjourney.com/adf6329f-dd23-4764-9aff-11dd8b32f4c7/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
<button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-center transition-all duration-300">
<svg className="lucide lucide-maximize-2 h-5 w-5" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between">
<div className="">
<h3 className="text-lg font-semibold tracking-tight">Azure Dream</h3>
<p className="text-sm text-white/70">180ft Motor Yacht</p>
</div>
<div className="flex items-center gap-1 text-cyan-400">
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium">4.9</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-4 text-xs text-white/60">
<span className="flex items-center gap-1">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                12 guests
              </span>
</div>
<a className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300" href="#">
              View Details
              <svg className="lucide lucide-arrow-right h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/10 break-inside-avoid">
<div className="relative h-80 overflow-hidden">
<img alt="Elegant sailing yacht" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cdn.midjourney.com/a459afc0-a071-4146-82c1-f92a8bc6a7a8/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
<button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-center transition-all duration-300">
<svg className="lucide lucide-maximize-2 h-5 w-5" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>
</div>
<div className="absolute top-4 left-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-cyan-400/90 text-black text-xs font-medium">
<svg className="lucide lucide-award h-3 w-3" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
              Featured
            </span>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between">
<div className="">
<h3 className="text-lg font-semibold tracking-tight">Ocean Serenity</h3>
<p className="text-sm text-white/70">120ft Sailing Yacht</p>
</div>
<div className="flex items-center gap-1 text-cyan-400">
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium">5.0</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-4 text-xs text-white/60">
<span className="flex items-center gap-1">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                8 guests
              </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-bed h-4 w-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
                4 cabins
              </span>
</div>
<a className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300" href="#">
              View Details
              <svg className="lucide lucide-arrow-right h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-4 p-3 rounded-lg bg-white/[0.02] border border-white/5">
<p className="text-xs text-white/60 mb-2">Special Features</p>
<div className="flex flex-wrap gap-1">
<span className="px-2 py-1 text-xs bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20">Eco-Friendly</span>
<span className="px-2 py-1 text-xs bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20">Spa</span>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/10 break-inside-avoid">
<div className="relative h-56 overflow-hidden">
<img alt="Modern superyacht interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cdn.midjourney.com/192c2ec2-9b81-40b8-aba4-4c4a2cecec68/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
<button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-center transition-all duration-300">
<svg className="lucide lucide-maximize-2 h-5 w-5" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight">Platinum Elite</h3>
<p className="text-sm text-white/70">250ft Superyacht</p>
</div>
<div className="flex items-center gap-1 text-cyan-400">
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium">4.8</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-4 text-xs text-white/60">
<span className="flex items-center gap-1">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                20 guests
              </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-bed h-4 w-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
                10 cabins
              </span>
</div>
<a className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300" href="#">
              View Details
              <svg className="lucide lucide-arrow-right h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/10 break-inside-avoid">
<div className="relative h-72 overflow-hidden">
<img alt="Luxury yacht deck" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cdn.midjourney.com/2a523b1f-28ae-4b5c-a477-0b785fe65900/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
<button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-center transition-all duration-300">
<svg className="lucide lucide-maximize-2 h-5 w-5" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight">Marina Prestige</h3>
<p className="text-sm text-white/70">95ft Motor Yacht</p>
</div>
<div className="flex items-center gap-1 text-cyan-400">
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium">4.7</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-4 text-xs text-white/60">
<span className="flex items-center gap-1">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                10 guests
              </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-bed h-4 w-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
                5 cabins
              </span>
</div>
<a className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300" href="#">
              View Details
              <svg className="lucide lucide-arrow-right h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-4 p-3 rounded-lg bg-white/[0.02] border border-white/5">
<p className="text-xs text-white/60 mb-2">Available Now</p>
<div className="text-xs text-cyan-400">Next available: Oct 25, 2024</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/10 break-inside-avoid">
<div className="relative h-60 overflow-hidden">
<img alt="Catamaran sailing yacht" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cdn.midjourney.com/09a42b28-c955-4ed1-b65f-a19653a84faa/0_0.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
<button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-center transition-all duration-300">
<svg className="lucide lucide-maximize-2 h-5 w-5" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight">Twin Horizons</h3>
<p className="text-sm text-white/70">78ft Catamaran</p>
</div>
<div className="flex items-center gap-1 text-cyan-400">
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium">4.6</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-4 text-xs text-white/60">
<span className="flex items-center gap-1">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                14 guests
              </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-bed h-4 w-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
                7 cabins
              </span>
</div>
<a className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300" href="#">
              View Details
              <svg className="lucide lucide-arrow-right h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/10 break-inside-avoid">
<div className="relative h-64 overflow-hidden">
<img alt="Classic luxury yacht" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cdn.midjourney.com/10eaf679-8fe2-4a6f-b585-c39529a80312/0_0.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
<button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-center transition-all duration-300">
<svg className="lucide lucide-maximize-2 h-5 w-5" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>
</div>
<div className="absolute top-4 left-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-400/90 text-black text-xs font-medium">
<svg className="lucide lucide-crown h-3 w-3" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
              Classic
            </span>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight">Royal Heritage</h3>
<p className="text-sm text-white/70">150ft Classic Yacht</p>
</div>
<div className="flex items-center gap-1 text-cyan-400">
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium">4.9</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-4 text-xs text-white/60">
<span className="flex items-center gap-1">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                16 guests
              </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-bed h-4 w-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
                8 cabins
              </span>
</div>
<a className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300" href="#">
              View Details
              <svg className="lucide lucide-arrow-right h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-4 p-3 rounded-lg bg-white/[0.02] border border-white/5">
<p className="text-xs text-white/60 mb-2">Heritage Collection</p>
<p className="text-xs text-white/50">Restored 1960s classic with modern amenities. Award-winning restoration preserves original craftsmanship.</p>
<div className="flex flex-wrap gap-1 mt-2">
<span className="px-2 py-1 text-xs bg-amber-400/10 text-amber-400 rounded-full border border-amber-400/20">Vintage</span>
<span className="px-2 py-1 text-xs bg-amber-400/10 text-amber-400 rounded-full border border-amber-400/20">Restored</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<div className="inline-flex items-center gap-4">
<a className="inline-flex items-center gap-2 rounded-full bg-cyan-400/90 hover:bg-cyan-400 text-black px-6 py-3 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25" href="#">
<svg className="lucide lucide-grid-3x3 h-4 w-4" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
          View Full Fleet
        </a>
<a className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-6 py-3 text-sm font-medium transition-all duration-300" href="#">
<svg className="lucide lucide-filter h-4 w-4 text-slate-300" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
          Filter Yachts
        </a>
</div>
</div>
</div><div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none"></div>
</section><section className="relative sm:py-20 pt-16 pb-16">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto">
<h2 className="sm:text-4xl text-3xl font-semibold tracking-tight">Discover Luxury Yachting</h2>
<p className="mt-3 text-sm sm:text-base text-white/70" style={{}}>Browse by category</p>
</div>
<div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10">
<a className="group relative hover:ring-1 hover:ring-inset hover:ring-cyan-400/30 hover:bg-gradient-to-b hover:from-cyan-500/10 hover:to-transparent hover:border-cyan-400/20 transition bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5" href="#" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex bg-white/10 group-hover:bg-gradient-to-tr group-hover:from-cyan-400 group-hover:to-blue-500 rounded-xl items-center justify-center transition-all" style={{}}>
<svg className="lucide lucide-waves h-5 w-5 text-slate-300 group-hover:text-black transition-colors" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<p className="font-semibold tracking-tight">Motor Yachts</p>
</div>
<span className="inline-flex items-center gap-1 text-xs text-white/40 group-hover:text-cyan-300 transition-colors">
<span className="hidden group-hover:inline">Explore</span>
<svg className="lucide lucide-chevron-right h-5 w-5 group-hover:hidden" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<svg className="lucide lucide-arrow-right h-4 w-4 hidden group-hover:inline-flex" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
<p className="group-hover:text-white/70 transition-colors text-xs text-white/60 mt-3" style={{}}>Power and performance for ocean adventures.</p>
</a><a className="group relative hover:ring-1 hover:ring-inset hover:ring-cyan-400/30 hover:bg-gradient-to-b hover:from-cyan-500/10 hover:to-transparent hover:border-cyan-400/20 transition bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5" href="#" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex group-hover:bg-gradient-to-tr group-hover:from-cyan-400 group-hover:to-blue-500 transition-all bg-white/10 rounded-xl items-center justify-center" style={{}}>
<svg className="lucide lucide-sailboat lucide-waves group-hover:text-black transition-colors w-[20px] h-[20px] text-slate-50" data-icon-replaced="true" data-lucide="sailboat" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v15"></path><path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"></path><path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"></path></svg>
</div>
<p className="font-semibold tracking-tight">Sailing Yachts</p>
</div>
<span className="inline-flex items-center gap-1 text-xs text-white/40 group-hover:text-cyan-300 transition-colors">
<span className="hidden group-hover:inline">Explore</span>
<svg className="lucide lucide-chevron-right h-5 w-5 group-hover:hidden" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<svg className="lucide lucide-arrow-right h-4 w-4 hidden group-hover:inline-flex" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
<p className="group-hover:text-white/70 transition-colors text-xs text-white/60 mt-3" style={{}}>Experience the romance of wind-powered sailing.</p>
</a>
<a className="group relative hover:ring-1 hover:ring-inset hover:ring-cyan-400/30 hover:bg-gradient-to-b hover:from-cyan-500/10 hover:to-transparent hover:border-cyan-400/20 transition rounded-2xl bg-white/5 border border-white/10 p-5" href="#" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex bg-white/10 group-hover:bg-gradient-to-tr group-hover:from-cyan-400 group-hover:to-blue-500 rounded-xl items-center justify-center transition-all" style={{}}>
<svg className="lucide lucide-crown h-5 w-5 text-slate-300 group-hover:text-black transition-colors" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<p className="font-semibold tracking-tight">Superyachts</p>
</div>
<span className="inline-flex items-center gap-1 text-xs text-white/40 group-hover:text-cyan-300 transition-colors">
<span className="hidden group-hover:inline">Explore</span>
<svg className="lucide lucide-chevron-right h-5 w-5 group-hover:hidden" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<svg className="lucide lucide-arrow-right h-4 w-4 hidden group-hover:inline-flex" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
<p className="mt-3 text-xs text-white/60 group-hover:text-white/70 transition-colors" style={{}}>Ultimate luxury with full crew and amenities.</p>
</a>
<a className="group relative hover:ring-1 hover:ring-inset hover:ring-cyan-400/30 hover:bg-gradient-to-b hover:from-cyan-500/10 hover:to-transparent hover:border-cyan-400/20 transition rounded-2xl bg-white/5 border border-white/10 p-5" href="#" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-white/10 group-hover:bg-gradient-to-tr group-hover:from-cyan-400 group-hover:to-blue-500 flex items-center justify-center transition-all" style={{}}>
<svg className="lucide lucide-users h-5 w-5 text-slate-300 group-hover:text-black transition-colors" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<p className="font-semibold tracking-tight">Group Charters</p>
</div>
<span className="inline-flex items-center gap-1 text-xs text-white/40 group-hover:text-cyan-300 transition-colors">
<span className="hidden group-hover:inline">Explore</span>
<svg className="lucide lucide-chevron-right h-5 w-5 group-hover:hidden" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<svg className="lucide lucide-arrow-right h-4 w-4 hidden group-hover:inline-flex" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
<p className="mt-3 text-xs text-white/60 group-hover:text-white/70 transition-colors" style={{}}>Corporate events and private celebrations.</p>
</a>
</div>
</div>
</section>

<section className="relative py-8 sm:py-10">
<div className="absolute inset-0"></div>
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="max-w-6xl mr-auto ml-auto">
<p className="text-center text-xs tracking-wider text-neutral-300/90">Premium experiences await.</p>
<h3 className="mt-2 text-center text-2xl sm:text-3xl tracking-tight font-semibold">Choose Your Charter</h3>
<div className="border-white/10 border rounded-3xl mt-6 backdrop-blur" style={{}}>
<ul className="divide-y divide-white/10">
<li className="flex pt-5 pr-5 pb-5 pl-5 items-center justify-between">
<div className="flex gap-3 items-center">
<span className="h-10 w-10 flex bg-white/10 rounded-xl items-center justify-center">
<svg className="lucide lucide-clock w-[20px] h-[20px] text-slate-50" data-icon-replaced="true" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<div className="">
<p className="font-semibold tracking-tight">Half Day</p>
<p className="text-xs text-white/70" style={{}}>4-hour coastal experience</p>
</div>
</div>
<a className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition" href="#" style={{}}>From $2,500</a>
</li>
<li className="flex pt-5 pr-5 pb-5 pl-5 items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-10 w-10 flex bg-white/10 rounded-xl items-center justify-center" style={{}}>
<svg className="lucide lucide-sun w-[20px] h-[20px] text-slate-50" data-icon-replaced="true" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</span>
<div className="">
<p className="font-semibold tracking-tight">Full Day</p>
<p className="text-xs text-white/70" style={{}}>8-hour luxury adventure</p>
</div>
</div>
<a className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition" href="#" style={{}}>From $4,800</a>
</li>
<li className="p-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-10 w-10 flex bg-white/10 rounded-xl items-center justify-center" style={{}}>
<svg className="lucide lucide-moon w-[20px] h-[20px] text-slate-50" data-icon-replaced="true" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</span>
<div className="">
<p className="font-semibold tracking-tight">Multi-Day</p>
<p className="text-xs text-white/70" style={{}}>Extended cruising with accommodation</p>
</div>
</div>
<a className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition" href="#" style={{}}>Custom Quote</a>
</li>
</ul>
<div className="p-5 flex gap-3">
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400/90 hover:bg-cyan-400 text-black px-4 py-2.5 text-sm font-medium transition" href="#" style={{}}>
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Book Charter
              </a>
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-4 py-2.5 text-sm font-medium transition" href="#" style={{}}>
<svg className="lucide lucide-phone h-4 w-4 text-slate-300" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                Contact Us
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:py-16 pt-12 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="">
<p className="text-xs text-neutral-300">Explore Our Calendar</p>
<h4 className="text-2xl sm:text-3xl tracking-tight font-semibold">Upcoming Events</h4>
</div>
<a className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-xs font-medium transition" href="#" style={{}}>
<svg className="lucide lucide-mail h-4 w-4 text-slate-300" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
            Subscribe for updates
          </a>
</div>
<div className="mt-6 grid gap-4">

<article className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 flex items-center justify-between" style={{}}>
<div className="flex items-center gap-4">
<div className="w-14 text-center">
<p className="text-xs text-white/60" style={{}}>Oct 15</p>
<p className="text-sm font-semibold tracking-tight">Sunday</p>
</div>
<div className="">
<p className="text-xs text-white/60 flex items-center gap-2" style={{}}>
<svg className="lucide lucide-map-pin h-4 w-4 text-slate-300" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Monaco Harbor
                </p>
<p className="mt-1 text-sm font-medium">Monaco Yacht Show VIP Experience</p>
</div>
</div>
<button className="h-9 w-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-plus h-5 w-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</article>

<article className="rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10" style={{}}>
<div className="grid md:grid-cols-[1.5fr_1fr]">
<div className="flex pt-4 pr-4 pb-4 pl-4 items-start justify-between">
<div className="flex items-center gap-4">
<div className="w-14 text-center">
<p className="text-xs text-white/60" style={{}}>Oct 28</p>
<p className="text-sm font-semibold tracking-tight">Saturday</p>
</div>
<div className="">
<p className="text-xs text-white/60 flex items-center gap-2" style={{}}>
<svg className="lucide lucide-waves h-4 w-4 text-slate-300" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
                      Mediterranean Route
                    </p>
<p className="mt-1 text-sm font-medium">Sunset Gala: Mediterranean Luxury Cruise</p>
</div>
</div>
<button className="h-9 w-9 rounded-lg bg-cyan-400/90 hover:bg-cyan-400 text-black flex items-center justify-center" style={{}}>
<svg className="lucide lucide-external-link h-5 w-5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="relative">
<img alt="Luxury yacht at sunset on calm waters" className="h-40 md:h-full w-full object-cover" src="https://cdn.midjourney.com/29f602d4-815a-4b1f-973e-025cc28d51dc/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 md:bg-gradient-to-t bg-gradient-to-l from-[#0b1220]/60 via-transparent to-transparent"></div>
</div>
</div>
</article>

<article className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 flex items-center justify-between" style={{}}>
<div className="flex items-center gap-4">
<div className="w-14 text-center">
<p className="text-xs text-white/60" style={{}}>Nov 12</p>
<p className="text-sm font-semibold tracking-tight">Sunday</p>
</div>
<div className="">
<p className="text-xs text-white/60 flex items-center gap-2" style={{}}>
<svg className="lucide lucide-palm-tree h-4 w-4 text-slate-300" data-lucide="palm-tree" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4m-4 6a6.5 6.5 0 0 1 7 6"></path><path d="M17.5 3c2.5 0 4.5 2.24 4.5 5h-2l-1-1-1 1h-4"></path><path d="M10 14a6.5 6.5 0 0 0-7 6"></path><path d="m3 14 8-8 8 8"></path><path d="m21 15-2-2-2 2"></path></svg>
</p>
<p className="mt-1 text-sm font-medium">Caribbean Island Hopping Adventure</p>
</div>
</div>
<button className="h-9 w-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-plus h-5 w-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</article>
</div>
</div>
</section>

<section className="relative sm:py-20 pt-14 pb-14">
<div className="max-w-6xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="sm:p-8 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6" style={{}}>
<p className="text-xs text-neutral-300/90">Market insights</p>
<h5 className="mt-1 text-2xl sm:text-3xl tracking-tight font-semibold">Global Yacht Charter Market Growth</h5>
<p className="mt-2 text-sm text-white/70" style={{}}>Revenue in billions USD (estimated)</p>

<div className="mt-6 overflow-hidden rounded-2xl bg-[#0c1426] p-4">
<div className="relative h-72 sm:h-96">
<canvas className="absolute inset-0" height="768" id="yachtMarketChart" style={{display: 'block', boxSizing: 'border-box', height: '384px', width: '990px'}} width="1980"></canvas>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10" style={{}}>
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_80%_10%,rgba(34,211,238,0.12),transparent_60%)]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<a className="flex items-center space-x-3" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center ring-1 ring-white/10 bg-zinc-800 rounded-full">
<svg className="lucide lucide-orbit h-4 w-4 text-zinc-200" data-lucide="orbit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"></path><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"></path><circle cx="12" cy="12" r="3"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle></svg>
</span>
<span className="text-xl font-semibold tracking-tight">Marine</span>
</a>
<div className="w-full md:w-auto md:min-w-[440px]">
<form className="flex items-center gap-3">
<div className="flex-1 relative">
<input className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/40 focus:outline-none px-4 py-2.5 text-sm placeholder:text-white/40" placeholder="Subscribe for charter updates" style={{}} type="email"/>
<svg className="lucide lucide-anchor absolute right-3 top-2.5 h-5 w-5 text-white/40" data-lucide="anchor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22V8"></path><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path><circle cx="12" cy="5" r="3"></circle></svg>
</div>
<button className="inline-flex items-center gap-2 rounded-xl bg-cyan-400/90 hover:bg-cyan-400 text-black px-4 py-2.5 text-sm font-medium transition" style={{}} type="submit">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                Subscribe
              </button>
</form>
</div>
</div>
<div className="mt-8 grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-4 text-sm">
<div className="flex items-center gap-3">
<a className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center" href="#" style={{}}>
<svg className="lucide lucide-instagram h-5 w-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center" href="#" style={{}}>
<svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center" href="#" style={{}}>
<svg className="lucide lucide-youtube h-5 w-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
<div className="flex gap-6 justify-end col-span-2 sm:col-span-1">
<a className="text-white/70 hover:text-white" href="#" style={{}}>Fleet</a>
<a className="text-white/70 hover:text-white" href="#" style={{}}>Charters</a>
<a className="text-white/70 hover:text-white" href="#" style={{}}>Services</a>
<a className="text-white/70 hover:text-white" href="#" style={{}}>Sales</a>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-white/50">
<p>© <span id="year">2025</span> MarineElite. All rights reserved.</p>
<div className="flex gap-4 mt-2 sm:mt-0">
<a className="hover:text-white/80" href="#">Privacy</a>
<a className="hover:text-white/80" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
