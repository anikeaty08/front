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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl animate-on-scroll is-visible">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg tracking-tighter font-medium flex items-center gap-2 group" href="#">
<span className="w-6 h-6 bg-white rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">
<svg aria-hidden="true" className="iconify text-black iconify--lucide" data-icon="lucide:aperture" data-strokeWidth="2.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
</span>
                KINETIC
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full" href="#work">Work</a>
<a className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full" href="#services">Services</a>
<a className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full" href="#studio">Studio</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/5 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 group active:scale-95" href="#">
<span>Showreel</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:play" data-strokeWidth="2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-[100%] blur-[120px] pointer-events-none opacity-50 animate-pulse duration-[5000ms]"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="animate-on-scroll delay-100 flex justify-center mb-8 is-visible">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Available for Q4 Commissions
                </div>
</div>
<h1 className="animate-on-scroll delay-200 text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-8 leading-[0.95] is-visible">
    Crafting motion <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-[length:200%_auto]" style={{animation: 'shimmer 8s linear infinite'}}>that means business.</span>
</h1>
<p className="animate-on-scroll delay-300 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 is-visible">
                We bridge the gap between product design and cinematic storytelling. Delivering high-fidelity motion graphics for visionary brands.
            </p>
<div className="animate-on-scroll delay-400 flex flex-col md:flex-row items-center justify-center gap-4 is-visible">
<button className="w-full md:w-auto px-8 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
<svg aria-hidden="true" className="iconify group-hover:rotate-90 transition-transform duration-500 iconify--lucide" data-icon="lucide:play-circle" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                    Watch Showreel '24
                </button>
<button className="w-full md:w-auto px-8 py-3 bg-transparent border border-zinc-800 text-white rounded-full font-medium text-sm hover:bg-zinc-900 hover:border-zinc-700 transition-all hover:scale-105 active:scale-95">
                    View Selected Works
                </button>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-black/50 py-10 overflow-hidden animate-on-scroll delay-500">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-xs font-medium uppercase tracking-widest text-zinc-600">Trusted by teams at</p>
</div>
<div className="marquee-container w-full overflow-hidden flex relative">
<div className="marquee-content flex items-center gap-20 px-10 min-w-full">

<span className="text-xl font-semibold tracking-tighter text-zinc-500 hover:text-white transition-colors flex items-center gap-2 grayscale hover:grayscale-0"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Vercel</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-500 hover:text-white transition-colors flex items-center gap-2 grayscale hover:grayscale-0"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg> Linear</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-500 hover:text-white transition-colors flex items-center gap-2 grayscale hover:grayscale-0"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Stripe</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-500 hover:text-white transition-colors flex items-center gap-2 grayscale hover:grayscale-0"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle-dashed" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0m0 19.636a10 10 0 0 1-3.8 0m7.509-18.097a10 10 0 0 1 2.69 2.7M2.182 13.9a10 10 0 0 1 0-3.8m18.097 7.509a10 10 0 0 1-2.7 2.69M21.818 10.1a10 10 0 0 1 0 3.8M3.721 6.391a10 10 0 0 1 2.7-2.69m-.03 16.578a10 10 0 0 1-2.69-2.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Raycast</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-500 hover:text-white transition-colors flex items-center gap-2 grayscale hover:grayscale-0"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wind" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Tailwind</span>

<span className="text-xl font-semibold tracking-tighter text-zinc-500 hover:text-white transition-colors flex items-center gap-2 grayscale hover:grayscale-0"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Vercel</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-500 hover:text-white transition-colors flex items-center gap-2 grayscale hover:grayscale-0"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg> Linear</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-500 hover:text-white transition-colors flex items-center gap-2 grayscale hover:grayscale-0"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Stripe</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-500 hover:text-white transition-colors flex items-center gap-2 grayscale hover:grayscale-0"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle-dashed" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0m0 19.636a10 10 0 0 1-3.8 0m7.509-18.097a10 10 0 0 1 2.69 2.7M2.182 13.9a10 10 0 0 1 0-3.8m18.097 7.509a10 10 0 0 1-2.7 2.69M21.818 10.1a10 10 0 0 1 0 3.8M3.721 6.391a10 10 0 0 1 2.7-2.69m-.03 16.578a10 10 0 0 1-2.69-2.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Raycast</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-500 hover:text-white transition-colors flex items-center gap-2 grayscale hover:grayscale-0"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wind" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Tailwind</span>
</div>
<div className="marquee-content flex items-center gap-20 px-10 min-w-full absolute top-0 left-full">

<span className="text-xl font-semibold tracking-tighter text-zinc-500 hover:text-white transition-colors flex items-center gap-2 grayscale hover:grayscale-0"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Vercel</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-500 hover:text-white transition-colors flex items-center gap-2 grayscale hover:grayscale-0"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg> Linear</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-500 hover:text-white transition-colors flex items-center gap-2 grayscale hover:grayscale-0"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Stripe</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-500 hover:text-white transition-colors flex items-center gap-2 grayscale hover:grayscale-0"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle-dashed" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0m0 19.636a10 10 0 0 1-3.8 0m7.509-18.097a10 10 0 0 1 2.69 2.7M2.182 13.9a10 10 0 0 1 0-3.8m18.097 7.509a10 10 0 0 1-2.7 2.69M21.818 10.1a10 10 0 0 1 0 3.8M3.721 6.391a10 10 0 0 1 2.7-2.69m-.03 16.578a10 10 0 0 1-2.69-2.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Raycast</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-500 hover:text-white transition-colors flex items-center gap-2 grayscale hover:grayscale-0"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wind" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Tailwind</span>
</div>
</div>
</div>

<section className="py-32 px-6" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 animate-on-scroll">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Selected Work</h2>
<p className="text-zinc-500 max-w-md text-sm">A curation of product demos, brand identity motion, and interaction design experiments.</p>
</div>
<a className="group text-white text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all" href="#">
                    View all projects 
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

<div className="animate-on-scroll delay-100 group md:col-span-2 relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-white/20 transition-all duration-500">
<img alt="Abstract Motion" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105 origin-center" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60"></div>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-end">
<div>
<span className="text-xs font-medium text-indigo-400 uppercase tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 -translate-y-2 group-hover:translate-y-0">Fintech</span>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">NeoBank 2.0 Identity</h3>
<p className="text-zinc-400 text-sm max-w-sm line-clamp-2 group-hover:text-white/90 transition-colors">Complete motion language for the next generation of banking.</p>
</div>
<button className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 hover:bg-indigo-500 hover:text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="animate-on-scroll delay-200 group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-white/20 transition-all duration-500">
<img alt="Cyberpunk Motion" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
<svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:play" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-xs font-medium text-emerald-400 uppercase tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">SaaS</span>
<h3 className="text-xl font-medium text-white tracking-tight">Analytics Dashboard</h3>
</div>
</div>

<div className="animate-on-scroll delay-300 group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 md:row-span-1 hover:border-white/20 transition-all duration-500">
<img alt="UI Interaction" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute top-6 right-6">
<div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur border border-white/10 text-xs font-medium text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                            0:15 Loop
                        </div>
</div>
<div className="absolute bottom-0 left-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-xs font-medium text-pink-400 uppercase tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">Social</span>
<h3 className="text-xl font-medium text-white tracking-tight">Connect App</h3>
</div>
</div>

<div className="animate-on-scroll delay-200 group md:col-span-2 relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-white/20 transition-all duration-500">
<img alt="3D Abstract" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 origin-bottom" src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&amp;w=2535&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60"></div>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-end">
<div>
<span className="text-xs font-medium text-amber-400 uppercase tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 -translate-y-2 group-hover:translate-y-0">Hardware</span>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Lumina Launch</h3>
<p className="text-zinc-400 text-sm max-w-sm group-hover:text-white/90 transition-colors">Product reveal sequence combining 3D rendering with typographic motion.</p>
</div>
<button className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 hover:bg-amber-400 hover:text-black">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="animate-on-scroll delay-100 space-y-4 group p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-indigo-500 group-hover:border-indigo-400 transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h3 className="text-white font-medium group-hover:translate-x-1 transition-transform">Motion Systems</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400">Building comprehensive motion guidelines that scale across your entire product suite.</p>
</div>

<div className="animate-on-scroll delay-200 space-y-4 group p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-emerald-500 group-hover:border-emerald-400 transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smartphone" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
</div>
<h3 className="text-white font-medium group-hover:translate-x-1 transition-transform">UI Interactions</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400">Micro-interactions that delight users and explain complex interfaces intuitively.</p>
</div>

<div className="animate-on-scroll delay-300 space-y-4 group p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-pink-500 group-hover:border-pink-400 transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:film" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18M3 7.5h4M3 12h18M3 16.5h4M17 3v18m0-13.5h4m-4 9h4"></path></g></svg>
</div>
<h3 className="text-white font-medium group-hover:translate-x-1 transition-transform">Product Commercials</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400">High-energy promo videos for product launches, social media, and landing pages.</p>
</div>

<div className="animate-on-scroll delay-400 space-y-4 group p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-amber-500 group-hover:border-amber-400 transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
</div>
<h3 className="text-white font-medium group-hover:translate-x-1 transition-transform">3D Visualization</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400">Abstract and photorealistic 3D assets to elevate brand storytelling.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
<div className="animate-on-scroll">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Motion that converts.</h2>
<p className="text-zinc-500 text-sm max-w-sm">We don't just make things move. We design motion that drives engagement and retention metrics.</p>
</div>
<div className="flex gap-12 md:gap-24 animate-on-scroll delay-200">
<div className="group cursor-default">
<span className="block text-4xl md:text-5xl font-medium text-white tracking-tight mb-1 group-hover:text-indigo-400 transition-colors duration-500">200+</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Projects Delivered</span>
</div>
<div className="group cursor-default">
<span className="block text-4xl md:text-5xl font-medium text-white tracking-tight mb-1 group-hover:text-emerald-400 transition-colors duration-500">98%</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Client Retention</span>
</div>
</div>
</div>
</section>

<footer className="pt-32 pb-12 px-6 bg-black relative">
<div className="max-w-7xl mx-auto">
<div className="animate-on-scroll glass-panel rounded-3xl p-12 md:p-24 text-center relative overflow-hidden mb-24 group transition-all duration-700 hover:border-white/20">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6">Ready to set things in motion?</h2>
<p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">We are currently accepting new projects for Q4. Let's discuss how we can elevate your brand.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                            Book Introduction Call
                        </button>
<button className="px-8 py-4 bg-transparent border border-zinc-700 text-white rounded-full font-medium text-sm hover:border-white hover:bg-white/5 transition-all hover:scale-105 active:scale-95">
                            Download Rate Card
                        </button>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12 animate-on-scroll delay-200">
<div className="col-span-1 md:col-span-1">
<a className="text-white text-lg tracking-tighter font-medium flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity" href="#">
<span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-black iconify--lucide" data-icon="lucide:aperture" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
</span>
                        KINETIC
                    </a>
<p className="text-xs text-zinc-600">
                        © 2024 Kinetic Motion Studio.
                        All rights reserved.
                    </p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Sitemap</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors flex items-center gap-2 group" href="#"><span className="w-1 h-1 bg-zinc-700 rounded-full group-hover:bg-white transition-colors"></span> Work</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2 group" href="#"><span className="w-1 h-1 bg-zinc-700 rounded-full group-hover:bg-white transition-colors"></span> Services</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2 group" href="#"><span className="w-1 h-1 bg-zinc-700 rounded-full group-hover:bg-white transition-colors"></span> Agency</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2 group" href="#"><span className="w-1 h-1 bg-zinc-700 rounded-full group-hover:bg-white transition-colors"></span> Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Socials</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">Vimeo</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
</div>
</footer>



    </>
  );
}
