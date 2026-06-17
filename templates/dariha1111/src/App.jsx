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
  


      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

        document.querySelectorAll('.aura-reveal').forEach((el) => {
          const parent = el.parentElement;
          if (parent) {
            const siblings = Array.from(parent.children).filter(c => c.classList.contains('aura-reveal'));
            const index = siblings.indexOf(el);
            if (index > 0) el.style.animationDelay = `${index * 100}ms`;
          }
          observer.observe(el);
        });

        document.querySelectorAll('.flashlight-card').forEach(card => {
          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
          });
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
      

<div className="aura-background-component fixed top-0 w-full -z-10 h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bKN5upvoulAmWvInmHza"></div>

</div></div>

<div className="fixed inset-0 bg-stripes pointer-events-none z-0"></div>


<nav className="fixed flex z-50 px-4 top-6 right-0 left-0 justify-center">
<div className="flex bg-[#000000] w-full max-w-4xl border rounded-full pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-xl items-center justify-between shadow-black/50 border-white/10">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://cdn.midjourney.com/a3840b63-36c4-4a6b-80dd-5c41d0f4a259/0_0.png?w=800&amp;q=80)] bg-cover rounded" href="#"></a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="transition-colors hover:text-white" href="#">Catalog</a>
<a className="transition-colors hover:text-white" href="#">Сalculator</a>
<a className="transition-colors hover:text-white" href="#">About</a>
<a className="transition-colors hover:text-white" href="#">FAQ</a>
</div>
<a className="transition-colors text-sm font-semibold rounded-full pt-2.5 pr-5 pb-2.5 pl-5 hover:bg-gray-200 text-black bg-white" href="#">Get a wholesale quote</a>
</div>
</nav>
<main className="relative z-10">

<div className="container border-x flex flex-col text-center max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-24 pl-6 items-center border-white/10">

<div className="inline-flex uppercase aura-reveal text-xs font-medium tracking-wider border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center text-gray-300 bg-white/5 border-white/10">Dariha</div>

<h1 className="bg-clip-text leading-[1.1] aura-reveal md:text-7xl lg:text-5xl text-5xl font-semibold text-transparent tracking-tighter bg-gradient-to-b to-gray-500 max-w-5xl mr-auto mb-6 ml-auto from-white via-white" style={{animationDelay: '100ms'}}>Sewing Factory Dariha— clothing production under your brand from 300 units</h1>

<p className="md:text-xl leading-relaxed aura-reveal text-lg font-normal max-w-2xl mr-auto mb-10 ml-auto text-gray-400" style={{animationDelay: '200ms'}}>Full cycle: pattern making, sewing, packaging, and shipping for brands, wholesalers, and marketplace sellers</p>

<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(34,197,94,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(34,197,94,0.25)] aura-reveal" href="#" style={{'--spread': '90deg', '--shimmer-color': 'rgba(255, 255, 255, 0.6)', '--radius': '9999px', '--speed': '4s', '--cut': '1px', '--bg': 'rgba(255, 255, 255, 0.05)', animationDelay: '300ms'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"></div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-base font-medium w-full pt-3 pr-4 pb-3 pl-4 relative items-center text-white" style={{borderRadius: '9999px'}}>
<div className="" style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
<div className="" style={{position: 'absolute', inset: '1px', background: 'rgba(10, 11, 20, 0.8)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}></div>
<span className="whitespace-nowrap z-10 relative">View catalog</span>
<span className="inline-flex items-center justify-center z-10 w-7 h-7 rounded-full ml-1 relative group-hover:bg-white/20 transition-colors bg-white/10">
<svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
<style>
              @keyframes borderBeamRotation {
                0% {
                  transform: translate(-50%, -50%) rotate(0deg);
                }

                100% {
                  transform: translate(-50%, -50%) rotate(360deg);
                }
              }
            </style>
</div>
</a>
</div>

<section className="container border-x max-w-7xl border-white/10 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">

<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
<div className="flex-1 aura-reveal">
<div className="inline-flex uppercase text-xs font-medium text-blue-200 tracking-wide bg-blue-500/10 border-blue-500/30 border mb-6 pt-1 pr-3 pb-1 pl-3 items-center justify-center">competitive wholesale prices</div>
<h2 className="md:text-7xl lg:text-8xl uppercase leading-[0.9] text-6xl text-white tracking-tight font-oswald">Clothing catalog</h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12 aura-reveal" style={{animationDelay: '100ms'}}>
<p className="leading-relaxed lg:text-left text-lg text-gray-400 text-left">Explore our full range of styles, fabrics, and sizes tailored for wholesale orders. Download the catalog to see available models, MOQ, and pricing options</p>
<div className="w-full flex justify-end">
<span className="text-sm text-gray-500 font-mono">001 — 003</span>
</div>
</div>
</div>


<div className="grid grid-cols-1 md:grid-cols-4 border-t border-white/10">
<div className="group pt-6 pr-4 cursor-pointer">
<h3 className="text-sm font-semibold mb-2 group-hover:text-blue-300 transition-colors text-white">
              Smart Pathing
            </h3>
<p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
              We find the fastest physical path to the game server.
            </p>
</div>
<div className="relative pt-6 pr-4 px-0 md:px-4 cursor-pointer">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent to-transparent shadow-[0_0_15px_rgba(255,255,255,0.7)] via-white"></div>
<h3 className="text-sm font-semibold mb-2 text-white">FPS Boost</h3>
<p className="text-xs leading-relaxed text-gray-400">
              Free up system resources and optimize network drivers.
            </p>
</div>
<div className="group pt-6 pr-4 px-0 md:px-4 cursor-pointer">
<h3 className="text-sm font-semibold mb-2 group-hover:text-blue-300 transition-colors text-white">
              Packet Loss Fix
            </h3>
<p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
              Redundant data transmission ensures 0% packet loss.
            </p>
</div>
<div className="group pt-6 px-0 md:px-4 cursor-pointer">
<h3 className="text-sm font-semibold mb-2 group-hover:text-blue-300 transition-colors text-white">
              Game Support
            </h3>
<p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
              Custom profiles for over 1000+ competitive titles.
            </p>
</div>
</div>
</section>


<section className="w-full relative border-b bg-black text-white border-white/10">

<div className="container border-x max-w-7xl mr-auto ml-auto pr-6 pl-6 border-white/10">
</div>

<div className="container max-w-7xl mx-auto border-x border-t border-white/10">
<div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">


</div>
</div>
</section>
</main>
<footer className="border-t font-sans relative overflow-hidden bg-black text-white border-white/10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent to-transparent via-white/40"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 blur-[80px] rounded-full pointer-events-none bg-white/5"></div>
<div className="max-w-7xl mx-auto border-x relative z-10 border-white/10">

<div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10">


<a className="group flex items-center justify-between p-6 border-b md:border-b-0 md:border-r hover:bg-white/[0.03] transition-colors border-white/10" href="#">
<div className="flex items-center gap-4">
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
<span className="text-sm font-medium text-white">Twitter</span>
</div>
<svg className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="group flex items-center justify-between p-6 border-b md:border-b-0 md:border-r hover:bg-white/[0.03] transition-colors border-white/10" href="#">
<div className="flex items-center gap-4">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
<span className="text-sm font-medium text-white">Instagram</span>
</div>
<svg className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="group flex items-center justify-between p-6 border-b md:border-b-0 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-4">
<svg className="text-white" fill="currentColor" height="18" stroke="none" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
<span className="text-sm font-medium text-white">Facebook</span>
</div>
<svg className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 min-h-[300px]">

<div className="md:p-12 md:border-b-0 border-white/10 border-r border-b pt-8 pr-8 pb-8 pl-8">
<h4 className="text-xs font-semibold uppercase tracking-widest mb-8 text-gray-600">
              Product
            </h4>
<ul className="space-y-4">
<li className="">
<a className="text-sm transition-colors block text-gray-300 hover:text-white" href="#">
                  Technology
                </a>
</li>
<li className="">
<a className="text-sm transition-colors block text-gray-300 hover:text-white" href="#">
                  Integrations
                </a>
</li>
<li className="">
<a className="text-sm transition-colors block text-gray-300 hover:text-white" href="#">
                  Releases
                </a>
</li>
</ul>
</div>


<div className="p-8 md:p-12 border-r border-b md:border-b-0 border-white/10">
<h4 className="text-xs font-semibold uppercase tracking-widest mb-8 text-gray-600">
              Company
            </h4>
<ul className="space-y-4">
<li className="">
<a className="text-sm transition-colors block text-gray-300 hover:text-white" href="#">
                  Team
                </a>
</li>
<li className="">
<a className="text-sm transition-colors block text-gray-300 hover:text-white" href="#">
                  Culture
                </a>
</li>
<li className="">
<a className="text-sm transition-colors block text-gray-300 hover:text-white" href="#">
                  Jobs
                </a>
</li>
</ul>
</div>

<div className="p-8 md:p-12">
<h4 className="text-xs font-semibold uppercase tracking-widest mb-8 text-gray-600">
              Legal
            </h4>
<ul className="space-y-4">
<li className="">
<a className="text-sm transition-colors block text-gray-300 hover:text-white" href="#">
                  Imprint
                </a>
</li>
<li>
<a className="text-sm transition-colors block text-gray-300 hover:text-white" href="#">
                  Data Policy
                </a>
</li>
<li>
<a className="text-sm transition-colors block text-gray-300 hover:text-white" href="#">
                  Cookie Policy
                </a>
</li>
</ul>
</div>
</div>

<div className="px-8 md:px-12 pb-24 pt-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
<div className="max-w-md">
<div className="flex gap-3 mb-6 gap-x-3 gap-y-3 items-center">

<span className="text-3xl font-semibold text-white tracking-tighter">DARIHA</span>
</div>
<p className="leading-relaxed text-sm font-medium text-gray-500 max-w-xs">Modern full-cycle sewing factory</p>
</div>
<div className="w-full lg:w-auto flex flex-col md:flex-row gap-0">
<div className="relative w-full md:w-80 group">
<input className="placeholder:text-black/50 outline-none uppercase transition-colors text-xs font-medium text-black font-mono bg-white w-full h-full rounded-none pt-4 pr-5 pb-4 pl-5" placeholder="GAMER@EMAIL.COM" type="email"/>
</div>
<button className="text-[11px] tracking-wide font-semibold px-8 py-4 border transition-colors uppercase whitespace-nowrap bg-gray-900 text-white border-gray-800 hover:bg-gray-800">
              Subscribe
            </button>
</div>
</div>
</div>
</footer>



    </>
  );
}
