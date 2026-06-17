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



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
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
      

<header className="sticky z-50 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] bg-black/60 top-0 backdrop-blur">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4" style={{}}>
<div className="flex h-16 items-center justify-between">

<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[40px] h-[40px] bg-[url(https://cdn.midjourney.com/cb5b11d7-075b-41ad-8245-7abae741cd52/0_2.png?w=800&amp;q=80)] bg-cover rounded invert" href="#" style={{}}></a>

<nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
<a className="transition hover:text-white" href="#">Blog</a>
<a className="transition hover:text-white" href="#">Updates</a>
<a className="transition hover:text-white" href="#">Pricing</a>
<a className="transition hover:text-white" href="#">About</a>
<a className="relative transition hover:text-white" href="#">
            Careers
            
          </a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center justify-center transition overflow-hidden text-sm font-medium rounded-lg" href="#" onmouseout="this.style.color='#ffffff'; this.style.background='transparent'; this.style.border='1px solid rgba(255, 255, 255, 0.5)'; this.style.textShadow='none'; this.style.boxShadow='none'" onmouseover="this.style.color='#ffffff'; this.style.background='#10b981'; this.style.border='1px solid #10b981'; this.style.textShadow='0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff'; this.style.boxShadow='0 0 5px #10b981, 0 0 20px #10b981, 0 0 50px #10b981, 0 0 100px #10b981'" style={{padding: '10px 20px', fontSize: '14px', fontWeight: '500', color: 'rgb(255, 255, 255)', textShadow: 'none', background: 'transparent', cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.5)', userSelect: 'none', fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system', boxShadow: 'none', textTransform: 'none'}}>Contact</a>
</div>

<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-menu h-5 w-5 text-zinc-200" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>

<section className="xl:pb-24 pb-24 relative">
<div className="sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="overflow-hidden xl:bg-neutral-950/60 border border-white/20 border-dashed rounded-none mt-6 relative">

<div className="aura-background-component absolute top-0 left-0 w-full h-full -z-10">
<div className="absolute top-0 left-0 w-full h-full" data-us-project="kn2MoYbTBxaLfmTfsVhB">
</div>

</div>

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent)] bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(1200px_600px_at_50%_120%,rgba(59,130,246,0.2),transparent)]">
</div>
<div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:28px_28px]">
</div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
</div>

<div className="absolute left-5 top-5" style={{visibility: 'hidden'}}>
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/20 ring-1 ring-sky-400/30 backdrop-blur">
<svg className="lucide lucide-refresh-cw h-5 w-5 text-sky-300" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
</div>

<div className="flex min-h-[68vh] flex-col sm:py-28 md:min-h-[76vh] text-center mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative items-center justify-center">

<a className="inline-flex items-center gap-2 text-[13px] transition hover:bg-emerald-400/15 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] font-medium text-emerald-300 bg-emerald-400/10 rounded-full ring-emerald-300/25 ring-1 pt-1.5 pr-3.5 pb-1.5 pl-3.5" href="#">
<span className="uppercase tracking-widest text-[11px] text-emerald-200/90">New</span>
<span className="tabular-nums">2025 October Release</span>
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>

<h1 className="sm:text-5xl md:text-6xl [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] text-4xl font-light text-white tracking-tighter font-geist max-w-4xl mt-6">
      Deploy at warp speed.One command. Zero worry.
    </h1>

<p className="sm:text-lg [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] text-base text-zinc-300 max-w-2xl mt-5">
      No configs or servers to babysit. Pulse ships your app globally and keeps it fast 24/7.
    </p>

<div className="flex flex-col sm:flex-row [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] mt-8 gap-x-3 gap-y-3 items-center">
<a className="inline-flex items-center justify-center transition overflow-hidden text-sm font-medium rounded-lg" href="#" onmouseout="this.style.color='#ffffff'; this.style.background='transparent'; this.style.border='1px solid rgba(255, 255, 255, 0.5)'; this.style.textShadow='none'; this.style.boxShadow='none'" onmouseover="this.style.color='#ffffff'; this.style.background='#10b981'; this.style.border='1px solid #10b981'; this.style.textShadow='0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff'; this.style.boxShadow='0 0 5px #10b981, 0 0 20px #10b981, 0 0 50px #10b981, 0 0 100px #10b981'" style={{padding: '10px 20px', fontSize: '14px', fontWeight: '500', color: 'rgb(255, 255, 255)', textShadow: 'none', background: 'transparent', cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.5)', userSelect: 'none', fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system', boxShadow: 'none', textTransform: 'none'}}>
        Join waitlist
      </a>
<a className="inline-flex items-center justify-center transition overflow-hidden text-sm font-medium text-black bg-white rounded-lg" href="#" style={{padding: '10px 20px'}}>
        Learn more
      </a>
</div>
</div>
</div>

<div className="flex md:hidden mt-4 items-center justify-between" style={{display: 'none'}}>
<button className="rounded-xl bg-white/5 px-4 py-2 text-sm text-zinc-200 ring-1 ring-white/10">Contact</button>
<button className="rounded-xl bg-white px-4 py-2 text-sm text-black ring-1 ring-black/10">Join waitlist</button>
</div>
</div>
</section><section className="xl:mb-24 mb-24 relative">
<div className="sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="overflow-hidden xl:bg-neutral-950/60 border border-white/20 border-dashed rounded-none mt-6 relative">

<div className="aura-background-component absolute top-0 left-0 w-full h-full -z-10">
<div className="absolute top-0 left-0 w-full h-full" data-us-project="kn2MoYbTBxaLfmTfsVhB">
</div>

</div>

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent)] bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(1200px_600px_at_50%_120%,rgba(59,130,246,0.2),transparent)]">
</div>
<div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:28px_28px]">
</div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
</div>

<div className="absolute left-5 top-5" style={{visibility: 'hidden'}}>
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/20 ring-1 ring-sky-400/30 backdrop-blur">
<svg className="lucide lucide-refresh-cw h-5 w-5 text-sky-300" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
</div>

<div className="flex min-h-[68vh] flex-col sm:py-28 md:min-h-[76vh] md:pl-8 md:pr-8 md:pt-16 md:pb-16 text-center mr-auto ml-auto pt-16 pr-8 pb-16 pl-8 relative items-center justify-center">

<div className="text-left w-full max-w-7xl mr-auto ml-auto">

<div className="text-center mb-12">
<div className="inline-flex text-[13px] [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll font-medium text-emerald-300 rounded-none ring-0 mb-6 pt-1.5 pr-3.5 pb-1.5 pl-3.5 gap-x-2 gap-y-2 items-center">
<span className="text-2xl font-light text-emerald-300/80 tabular-nums">01</span>
<span className="text-emerald-300/40">/</span>
<span className="uppercase text-[11px] text-emerald-200/90 tracking-widest">DEPLOYMENT PLATFORM</span>
</div>
<h2 className="sm:text-4xl lg:text-5xl [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-3xl font-light text-white tracking-tight font-geist mb-4">
        Everything you need to deploy faster
      </h2>
<p className="sm:text-lg [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-base text-zinc-400 max-w-2xl mr-auto ml-auto">
        Lightning-fast deployment tools that accelerate your workflow and get your code live in seconds.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

<div className="overflow-hidden md:col-span-2 lg:col-span-3 lg:bg-black [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll bg-black/40 rounded-2xl ring-white/10 ring-1 relative">

<div className="-top-10 -right-10 bg-emerald-500/10 w-56 h-56 rounded-full absolute blur-3xl"></div>

<div className="flex sm:px-6 bg-black/30 border-white/10 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<a className="inline-flex items-center gap-2 text-white hover:text-white" href="#">
          
          Pulse Analytics
        </a>
<span className="opacity-60">/</span>
<span className="text-white">Performance</span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20 px-2 py-0.5 text-[11px]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> 342 active
        </span>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 bg-white/5 ring-1 ring-white/10 rounded-lg pl-2.5 pr-2.5 h-8">
<input className="bg-transparent text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none w-48" placeholder="Search metrics…" type="text"/>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-white/5 text-white text-xs ring-1 ring-white/10 px-3 py-1.5 hover:bg-white/10 transition">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
          Export Data
        </button>
</div>
</div>

<div className="grid grid-cols-12">

<aside className="hidden md:flex md:col-span-3 lg:col-span-2 flex-col bg-black/20 border-r border-white/10 min-h-[520px]">
<div className="px-4 py-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm text-zinc-200 hover:bg-white/10 px-3 py-2">
            
            New Report
          </button>
</div>
<nav className="px-3 pb-4 space-y-6 overflow-y-auto">

<div className="">
<div className="px-2 mb-2 text-[11px] uppercase tracking-widest text-zinc-500">Analytics</div>
<ul className="space-y-1">
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-zinc-300 hover:bg-white/5" href="#">
                  
                  Dashboard
                </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-white bg-white/5 ring-1 ring-white/10" href="#">
                  
                  Performance
                </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-zinc-300 hover:bg-white/5" href="#">
                  
                  Users
                </a>
</li>
</ul>
</div>

<div className="">
<div className="px-2 mb-2 text-[11px] uppercase tracking-widest text-zinc-500">Metrics</div>
<ul className="space-y-1">
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-zinc-300 hover:bg-white/5" href="#">
                  
                  Response Time
                </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-zinc-300 hover:bg-white/5" href="#">
                  
                  Traffic
                </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-zinc-300 hover:bg-white/5" href="#">
                  
                  Uptime
                </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-zinc-300 hover:bg-white/5" href="#">
                  
                  Usage
                </a>
</li>
</ul>
</div>

<div className="">
<div className="px-2 mb-2 text-[11px] uppercase tracking-widest text-zinc-500">Reports</div>
<ul className="space-y-1">
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-zinc-300 hover:bg-white/5" href="#">
                  
                  Weekly Summary
                </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-zinc-300 hover:bg-white/5" href="#">
                  
                  Incidents
                </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-zinc-300 hover:bg-white/5" href="#">
                  
                  Configuration
                </a>
</li>
</ul>
</div>
</nav>
</aside>

<main className="col-span-12 md:col-span-6 lg:col-span-7 min-h-[520px]">

<div className="px-4 sm:px-6 py-3 border-b border-white/10 overflow-x-auto">
<div className="flex items-center gap-6 min-w-max">
<button className="text-sm text-white">Overview</button>
<button className="text-sm text-zinc-400 hover:text-white transition">Real-time</button>
<button className="text-sm text-zinc-400 hover:text-white transition">Historical</button>
<button className="text-sm text-zinc-400 hover:text-white transition">Alerts</button>
<button className="text-sm text-zinc-400 hover:text-white transition">Settings</button>
</div>
</div>

<div className="px-4 sm:px-6 py-4 border-b border-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<h3 className="text-white font-geist font-light text-2xl tracking-tight">System Performance</h3>
<span className="text-[11px] rounded-md bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-300/20 px-2 py-0.5">Excellent</span>
</div>
<div className="text-xs text-zinc-400">Updated 15s ago</div>
</div>
<div className="mt-2 text-sm text-zinc-400">All systems operational • <a className="text-emerald-300" href="#">View status page</a></div>
</div>

<div className="px-4 sm:px-6 py-4 space-y-3">

<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm text-white">Response Time Improved</div>
<div className="text-xs text-zinc-500">Average latency 127ms • -23% from last week • 99.8% uptime</div>
</div>
</div>
<span className="text-[11px] rounded-md bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-300/20 px-2 py-0.5">OPTIMAL</span>
</div>
<div className="mt-3 bg-black/40 rounded-lg ring-1 ring-white/10 p-3">
<code className="text-xs font-mono text-zinc-300">
<span className="text-zinc-500">→</span> API Requests: <span className="text-emerald-400">1.2M</span>
<span className="text-zinc-500">→</span> Cache Hit Rate: <span className="text-emerald-400">94.3%</span>
<span className="text-zinc-500">→</span> Error Rate: <span className="text-emerald-400">0.02%</span>
<span className="text-zinc-500">→</span> Peak Load: <span className="text-emerald-400">18K req/s</span>
</code>
</div>
</div>

<div className="rounded-xl ring-1 ring-emerald-300/25 bg-black/40 p-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm text-white">Processing Analytics Report</div>
<div className="text-xs text-zinc-500">Dataset #847 • 2.4TB analyzed • started 00:43:12</div>
</div>
</div>
<div className="text-[11px] text-zinc-400">43:12</div>
</div>
<div className="mt-3 flex items-center gap-3">
<span className="text-xs text-zinc-400">Progress</span>
<div className="flex-1 h-2 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-[67%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
</div>
<span className="text-xs text-zinc-400">67%</span>
<button className="text-xs rounded-md bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-300/30 px-2 py-1">CANCEL</button>
</div>
</div>

<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm text-white">Elevated Memory Usage Detected</div>
<div className="text-xs text-zinc-500">Server cluster-03 • 87% utilization • 28m ago</div>
</div>
</div>
<span className="text-[11px] rounded-md bg-yellow-500/10 text-yellow-300 ring-1 ring-yellow-500/30 px-2 py-0.5">WARNING</span>
</div>
<div className="mt-3 flex items-center gap-3">
<button className="text-xs rounded-md bg-white/5 text-white ring-1 ring-white/10 px-2 py-1">VIEW LOGS</button>
<button className="text-xs rounded-md bg-white/5 text-white ring-1 ring-white/10 px-2 py-1">SCALE UP</button>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 lg:col-span-3 bg-black/20 border-l border-white/10 min-h-[520px]">
<div className="px-4 sm:px-5 py-4 space-y-4">


<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-xs text-zinc-400 mb-3">Quick Stats</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-black/40 rounded-lg p-3 ring-1 ring-white/10">
<div className="text-xs text-zinc-400 mb-1">Requests/min</div>
<div className="text-lg font-light text-white">8,432</div>
</div>
<div className="bg-black/40 rounded-lg p-3 ring-1 ring-white/10">
<div className="text-xs text-zinc-400 mb-1">Avg Response</div>
<div className="text-lg font-light text-white">127ms</div>
</div>
<div className="bg-black/40 rounded-lg p-3 ring-1 ring-white/10">
<div className="text-xs text-zinc-400 mb-1">CPU Usage</div>
<div className="text-lg font-light text-white">34%</div>
</div>
<div className="bg-black/40 rounded-lg p-3 ring-1 ring-white/10">
<div className="text-xs text-zinc-400 mb-1">Memory</div>
<div className="text-lg font-light text-white">72%</div>
</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-xs text-zinc-400 mb-2">System Information</div>
<p className="text-sm text-zinc-300">Monitoring 847 services across 12 regions. All critical systems operational.</p>
<div className="mt-3 text-xs text-zinc-400">Integrations</div>
<div className="mt-2 flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded bg-white/5 ring-1 ring-white/10 text-[11px] text-white/80">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
</span>
<span className="inline-flex h-6 w-6 items-center justify-center rounded bg-white/5 ring-1 ring-white/10 text-[11px] text-white/80">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
</span>
<span className="inline-flex h-6 w-6 items-center justify-center rounded bg-white/5 ring-1 ring-white/10 text-[11px] text-white/80">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</span>
</div>
</div>

<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-xs text-zinc-400 mb-3">Monitor Settings</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-300">Auto-scaling</span>
<button aria-pressed="true" className="relative inline-flex h-6 w-11 items-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-emerald-400 translate-x-5 transition-transform"></span>
<span className="sr-only">toggle</span>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-300">Alert Notifications</span>
<button aria-pressed="true" className="relative inline-flex h-6 w-11 items-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-emerald-400 translate-x-5 transition-transform"></span>
<span className="sr-only">toggle</span>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-300">Data Export</span>
<button aria-pressed="false" className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/10 ring-1 ring-white/10">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-zinc-400 translate-x-0 transition-transform"></span>
<span className="sr-only">toggle</span>
</button>
</div>
</div>
</div>

</div>
</aside>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex md:hidden mt-4 items-center justify-between" style={{display: 'none'}}>
<button className="rounded-xl bg-white/5 px-4 py-2 text-sm text-zinc-200 ring-1 ring-white/10">Contact</button>
<button className="rounded-xl bg-white px-4 py-2 text-sm text-black ring-1 ring-black/10">Join waitlist</button>
</div>
</div>
</section><section className="xl:pb-24 pb-24 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll" style={{}}>
<div className="overflow-hidden xl:bg-neutral-950/60 border border-white/20 border-dashed rounded-none mt-6 relative">

<div className="aura-background-component absolute top-0 left-0 w-full h-full -z-10">
<div className="absolute top-0 left-0 w-full h-full" data-us-project="kn2MoYbTBxaLfmTfsVhB">
</div>

</div>

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent)] bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(1200px_600px_at_50%_120%,rgba(59,130,246,0.2),transparent)]">
</div>
<div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:28px_28px]">
</div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
</div>

<div className="absolute left-5 top-5" style={{visibility: 'hidden'}}>
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/20 ring-1 ring-sky-400/30 backdrop-blur">
<svg className="lucide lucide-refresh-cw h-5 w-5 text-sky-300" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
</div>

<div className="flex min-h-[68vh] flex-col sm:py-28 md:min-h-[76vh] md:pl-8 md:pr-8 md:pt-16 md:pb-16 text-center mr-auto ml-auto pt-16 pr-8 pb-16 pl-8 relative items-center justify-center">

<div className="mb-16 text-center max-w-3xl mx-auto">
<div className="inline-flex text-[13px] [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll font-medium text-emerald-300 rounded-none ring-0 mb-6 pt-1.5 pr-3.5 pb-1.5 pl-3.5 gap-x-2 gap-y-2 items-center">
<span className="tabular-nums text-2xl font-light text-emerald-300/80">02</span>
<span className="text-emerald-300/40">/</span>
<span className="uppercase text-[11px] text-emerald-200/90 tracking-widest">HOW IT WORKS</span>
</div>
<h2 className="sm:text-4xl lg:text-5xl [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-3xl font-light text-white tracking-tight font-geist mb-4">
      Deploy in three simple steps
    </h2>
<p className="sm:text-lg leading-relaxed [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-base text-zinc-400">
      From code to production in seconds. Our streamlined workflow makes deployment effortless.
    </p>
</div>

<div className="grid lg:grid-cols-3 lg:bg-neutral-950 lg:px-4 lg:py-4 border-dashed [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll w-full max-w-6xl border-[#ffffff]/10 border mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 gap-x-8 gap-y-12">

<div className="border-dashed border-0 rounded-none pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex flex-col items-center text-center">

<div className="relative mb-6">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 ring-1 ring-emerald-500/20 backdrop-blur-sm flex items-center justify-center">
<span className="text-3xl font-light text-emerald-300 font-geist">01</span>
</div>

<div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-emerald-500/30 to-transparent"></div>
</div>


<h3 className="text-xl font-medium text-white mb-3 font-geist tracking-tight">Write Your Code</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
          Build your application using your favorite framework and tools. No special configuration needed.
        </p>
</div>
</div>

<div className="border-dashed border-0 rounded-none pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex flex-col text-center items-center">

<div className="relative mb-6">
<div className="flex bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 w-20 h-20 ring-emerald-500/20 ring-1 rounded-2xl backdrop-blur-sm items-center justify-center">
<span className="text-3xl font-light text-emerald-300 font-geist">02</span>
</div>

<div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-emerald-500/30 to-transparent"></div>
</div>


<h3 className="text-xl font-medium text-white mb-3 font-geist tracking-tight">Push to Deploy</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
          Run a single command or push to Git. Our platform automatically builds and optimizes your app.
        </p>
</div>
</div><div className="border-dashed border-0 rounded-none pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex flex-col text-center items-center">

<div className="relative mb-6">
<div className="flex bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 w-20 h-20 ring-emerald-500/20 ring-1 rounded-2xl backdrop-blur-sm items-center justify-center">
<span className="text-3xl font-light text-emerald-300 font-geist">03</span>
</div>

<div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-emerald-500/30 to-transparent"></div>
</div>


<h3 className="text-xl font-medium text-white tracking-tight font-geist mb-3">Go Live Instantly</h3>
<p className="leading-relaxed text-sm text-zinc-400">Your app is deployed globally across 200+ edge locations. Live in seconds, not minutes.</p>
</div>
</div>

</div>

<div className="mt-16 w-full max-w-3xl mx-auto">
<div className="overflow-hidden [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll bg-black/40 ring-white/10 ring-1 rounded-2xl pt-0 pr-0 pb-0 pl-0 relative">
<div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl"></div>

<div className="bg-[#1C1C1E] border-white/10 border-b relative">
<div className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition cursor-pointer"></div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<span className="text-xs text-zinc-400 font-medium">bash — pulse deploy</span>
</div>

<div className="flex items-center gap-2">
<button className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 transition flex items-center justify-center ring-1 ring-white/10">
<svg className="text-zinc-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="9" x2="9" y1="3" y2="21"></line></svg>
</button>
<button className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 transition flex items-center justify-center ring-1 ring-white/10">
<svg className="text-zinc-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
</button>
</div>
</div>
</div>

<div className="relative bg-[#0F0F11] border-b border-white/5">
<div className="flex pt-1 pr-2 pb-1 pl-2 gap-x-1 gap-y-1 items-center">
<div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-t-lg">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
<span className="text-xs text-zinc-300">bash</span>
<button className="ml-2 text-zinc-500 hover:text-zinc-300 transition">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</button>
</div>
<button className="px-3 py-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-t-lg transition">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
</div>
</div>

<div className="bg-[#0F0F11] pt-6 pr-6 pb-6 pl-6 relative">
<div className="font-mono text-sm space-y-2">

<div className="flex items-center gap-2">
<span className="text-emerald-400">user@macbook</span>
<span className="text-zinc-500">:</span>
<span className="text-blue-400">~/projects</span>
<span className="text-zinc-500">$</span>
<span className="text-white">pulse deploy</span>
</div>

<div className="h-2"></div>

<div className="space-y-2">
<div className="flex items-start gap-3">
<div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
<svg className="text-blue-400" fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="">
<div className="text-zinc-400">Building your application...</div>
<div className="text-zinc-600 text-xs mt-1">Analyzing dependencies and optimizing build</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
<svg className="text-emerald-400" fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="">
<div className="text-zinc-400">Build complete in <span className="text-emerald-400">1.2s</span></div>
<div className="text-zinc-600 text-xs mt-1">Generated 847KB optimized bundle</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
<svg className="text-emerald-400" fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="">
<div className="text-zinc-400">Deployed to <span className="text-emerald-400">200+</span> locations</div>
<div className="text-zinc-600 text-xs mt-1">San Francisco, New York, London, Tokyo...</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 flex-shrink-0 animate-pulse">
<svg className="text-white" fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="">
<div className="text-white font-medium">Live at <a className="text-emerald-400 hover:underline" href="#">https://your-app.pulse.dev</a></div>
<div className="text-zinc-600 text-xs mt-1">Ready to receive traffic</div>
</div>
</div>
</div>

<div className="h-2"></div>

<div className="flex items-center gap-2">
<span className="text-emerald-400">user@macbook</span>
<span className="text-zinc-500">:</span>
<span className="text-blue-400">~/projects</span>
<span className="text-zinc-500">$</span>
<span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1"></span>
</div>
</div>
</div>

<div className="relative bg-[#1C1C1E] border-t border-white/5 px-4 py-2">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-zinc-400">Connected</span>
</div>
<span className="text-zinc-600">|</span>
<span className="text-zinc-500">bash 5.1.8</span>
</div>
<div className="flex items-center gap-4">
<span className="text-zinc-500">Lines: 23</span>
<span className="text-zinc-600">|</span>
<span className="text-zinc-500">UTF-8</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12">
<a className="inline-flex items-center justify-center transition overflow-hidden text-sm font-medium rounded-lg" href="#" onmouseout="this.style.color='#ffffff'; this.style.background='transparent'; this.style.border='1px solid rgba(255, 255, 255, 0.5)'; this.style.textShadow='none'; this.style.boxShadow='none'" onmouseover="this.style.color='#ffffff'; this.style.background='#10b981'; this.style.border='1px solid #10b981'; this.style.textShadow='0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff'; this.style.boxShadow='0 0 5px #10b981, 0 0 20px #10b981, 0 0 50px #10b981, 0 0 100px #10b981'" style={{padding: '10px 20px', fontSize: '14px', fontWeight: '500', color: 'rgb(255, 255, 255)', textShadow: 'none', background: 'transparent', cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.5)', userSelect: 'none', fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system', boxShadow: 'none', textTransform: 'none'}}>Start Deployment Now</a>
</div>
</div>
</div>

<div className="flex md:hidden mt-4 items-center justify-between" style={{display: 'none'}}>
<button className="rounded-xl bg-white/5 px-4 py-2 text-sm text-zinc-200 ring-1 ring-white/10">Contact</button>
<button className="rounded-xl bg-white px-4 py-2 text-sm text-black ring-1 ring-black/10">Join waitlist</button>
</div>
</div>
</section><section className="xl:pb-24 pb-24 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll" style={{}}>
<div className="overflow-hidden xl:bg-neutral-950/60 border border-white/20 border-dashed rounded-none mt-6 relative">

<div className="aura-background-component absolute top-0 left-0 w-full h-full -z-10">
<div className="absolute top-0 left-0 w-full h-full" data-us-project="kn2MoYbTBxaLfmTfsVhB">
</div>

</div>

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent)] bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(1200px_600px_at_50%_120%,rgba(59,130,246,0.2),transparent)]">
</div>
<div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:28px_28px]">
</div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
</div>

<div className="absolute left-5 top-5" style={{visibility: 'hidden'}}>
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/20 ring-1 ring-sky-400/30 backdrop-blur">
<svg className="lucide lucide-refresh-cw h-5 w-5 text-sky-300" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
</div>

<div className="flex min-h-[68vh] flex-col sm:py-28 md:min-h-[76vh] md:pl-8 md:pr-8 md:pt-16 md:pb-8 text-center mr-auto ml-auto pt-16 pr-8 pb-8 pl-8 relative items-center justify-center">


<div className="grid lg:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">

<div className="">

<div className="flex [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll justify-start">
<div className="inline-flex text-[13px] font-medium text-emerald-300 rounded-none ring-0 mb-6 pt-1.5 pr-3.5 pb-1.5 pl-3.5 gap-x-2 gap-y-2 items-center">
<span className="tabular-nums text-2xl font-light text-emerald-300/80">03</span>
<span className="text-emerald-300/40">/</span>
<span className="uppercase text-[11px] text-emerald-200/90 tracking-widest">GLOBAL SCALE</span>
</div>
</div>

<h2 className="sm:text-4xl lg:text-5xl lg:text-left [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-3xl font-light text-white tracking-tight font-geist mb-4">
            Lightning-fast deployments at scale
          </h2>

<p className="leading-relaxed sm:text-lg sm:text-left [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-base text-zinc-400 mb-8">
            Experience the next generation of cloud infrastructure. Deploy your applications globally in seconds with our edge-optimized platform.
          </p>

<ul className="[animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll mb-8 space-y-4">
<li className="flex items-start gap-3">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
<svg className="lucide lucide-check text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-white xl:text-left">Global CDN network</p>
<p className="text-sm text-zinc-500 xl:text-left">Serve content from 200+ edge locations worldwide</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
<svg className="lucide lucide-check text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-white xl:text-left">Automatic SSL certificates</p>
<p className="text-sm text-zinc-500 xl:text-left">Secure connections with zero configuration</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
<svg className="lucide lucide-check text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-white xl:text-left">Instant rollbacks</p>
<p className="text-sm text-zinc-500 xl:text-left">Revert to any previous version in one click</p>
</div>
</li>
</ul>

<div className="flex flex-col sm:flex-row [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll gap-x-3 gap-y-3">
<a className="inline-flex items-center justify-center transition overflow-hidden text-sm font-medium rounded-lg" href="#" onmouseout="this.style.color='#ffffff'; this.style.background='transparent'; this.style.border='1px solid rgba(255, 255, 255, 0.5)'; this.style.textShadow='none'; this.style.boxShadow='none'" onmouseover="this.style.color='#ffffff'; this.style.background='#10b981'; this.style.border='1px solid #10b981'; this.style.textShadow='0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff'; this.style.boxShadow='0 0 5px #10b981, 0 0 20px #10b981, 0 0 50px #10b981, 0 0 100px #10b981'" style={{padding: '10px 20px', fontSize: '14px', fontWeight: '500', color: 'rgb(255, 255, 255)', textShadow: 'none', background: 'transparent', cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.5)', userSelect: 'none', fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system', boxShadow: 'none', textTransform: 'none'}}>Get Started</a>
<a className="inline-flex items-center justify-center transition overflow-hidden text-sm font-medium text-black bg-white rounded-lg" href="#" style={{padding: '10px 20px'}}>
  View Documentation
</a>
</div>
</div>

<div className="relative">
<section className="col-span-12 lg:col-span-5 md:pt-14 flex [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll pt-14 items-center justify-center" style={{animation: 'gentleFloat 6s ease-in-out infinite'}}>
<style>
    @keyframes gentleFloat {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-8px);
      }
    }
  </style>
<div className="relative w-full max-w-lg">

<div className="absolute -top-14 -right-4 sm:w-[280px] bg-[#1C1C1E] border border-white/10 rounded-xl shadow-lg p-4 z-20">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 ring-1 ring-white/10 shrink-0">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
</path>
<polyline points="3.29 7 12 12 20.71 7"></polyline>
<line x1="12" x2="12" y1="22" y2="12"></line>
</svg>
</div>
<button aria-label="Dismiss" className="text-white/70 hover:text-white transition-colors p-1 -mr-1 rounded-md">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="mt-3">
<h4 className="text-white text-base font-semibold tracking-tight">Deploy Status</h4>
<p className="text-slate-300 text-sm mt-1">Your application is building and will be live soon.</p>
</div>

<div className="absolute right-6 -bottom-2 w-4 h-4 rotate-45 bg-[#1C1C1E] border-r border-b border-white/10"></div>
</div>

<div className="group overflow-hidden transition-all duration-500 hover:border-emerald-500/40 hover:ring-emerald-500/30 bg-[#0F0F11] border-white/10 border ring-white/5 ring-1 rounded-2xl relative">

<div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-700 group-hover:scale-110">
</div>
<div className="p-6">
<div className="flex mb-4 items-start justify-between">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/5 ring-1 ring-white/10 rounded-lg pt-1 pr-2.5 pb-1 pl-2.5">
<div className="h-1.5 w-1.5 animate-pulse bg-emerald-400 rounded-full"></div>
            Building
          </span>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-400">2m 14s</span>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">Global Deployment</h3>
<p className="leading-relaxed text-sm text-slate-300 mb-4">
          Your app is being deployed to 200+ edge locations worldwide. Lightning-fast performance guaranteed.
        </p>

<div className="bg-[#1C1C1E] rounded-xl p-4 mb-4 ring-1 ring-white/10">
<div className="space-y-3">

<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-sm text-white">Build completed</span>
<span className="text-xs text-slate-400">1m 20s</span>
</div>
<p className="text-xs text-slate-500 mt-0.5">All dependencies installed and optimized</p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 ring-2 ring-emerald-500 flex items-center justify-center mt-0.5">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-sm text-white">Deploying to edge</span>
<span className="text-xs text-emerald-400">In progress</span>
</div>
<p className="text-xs text-slate-500 mt-0.5">Pushing to global CDN network</p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center mt-0.5">
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-400">SSL certificates</span>
<span className="text-xs text-slate-500">Pending</span>
</div>
<p className="text-xs text-slate-500 mt-0.5">Automatic HTTPS provisioning</p>
</div>
</div>
</div>
</div>

<div className="mb-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">Overall Progress</span>
<span className="text-xs text-emerald-400 font-medium">68%</span>
</div>
<div className="w-full h-2 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-[68%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
</div>
</div>

<div className="flex items-center gap-2">
<button className="flex-1 bg-emerald-600 hover:bg-emerald-700 transition-colors text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center justify-center gap-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
            View Live
          </button>
<button className="bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-medium w-10 h-10 rounded-lg flex items-center justify-center ring-1 ring-white/10">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</button>
</div>
</div>
</div>
</div>
</section>
</div>
</div>


</div>
</div>

<div className="flex md:hidden mt-4 items-center justify-between" style={{display: 'none'}}>
<button className="rounded-xl bg-white/5 px-4 py-2 text-sm text-zinc-200 ring-1 ring-white/10">Contact</button>
<button className="rounded-xl bg-white px-4 py-2 text-sm text-black ring-1 ring-black/10">Join waitlist</button>
</div>
</div>
</section><section className="xl:pb-24 pb-24 relative">
<div className="sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="overflow-hidden xl:bg-neutral-950/60 border border-white/20 border-dashed rounded-none mt-6 relative">

<div className="aura-background-component absolute top-0 left-0 w-full h-full -z-10">
<div className="absolute top-0 left-0 w-full h-full" data-us-project="kn2MoYbTBxaLfmTfsVhB">
</div>

</div>

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent)] bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(1200px_600px_at_50%_120%,rgba(59,130,246,0.2),transparent)]">
</div>
<div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:28px_28px]">
</div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
</div>

<div className="absolute left-5 top-5" style={{visibility: 'hidden'}}>
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/20 ring-1 ring-sky-400/30 backdrop-blur">
<svg className="lucide lucide-refresh-cw h-5 w-5 text-sky-300" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
</div>

<div className="flex min-h-[68vh] flex-col sm:py-28 md:min-h-[76vh] md:pl-8 md:pr-8 md:pt-16 md:pb-8 text-left mr-auto ml-auto pt-16 pr-8 pb-8 pl-8 relative justify-center">

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-left max-w-3xl mb-16">
<div className="inline-flex text-[13px] font-medium text-emerald-300 rounded-none ring-0 mb-6 pt-1.5 pr-3.5 pb-1.5 pl-3.5 gap-x-2 gap-y-2 items-center">
<span className="tabular-nums text-2xl font-light text-emerald-300/80">04</span>
<span className="text-emerald-300/40">/</span>
<span className="uppercase text-[11px] text-emerald-200/90 tracking-widest">TESTIMONIAL</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-geist font-light tracking-tight text-white mb-4">
      Deploy in three simple steps
    </h2>
<p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
      From code to production in seconds. Our streamlined workflow makes deployment effortless.
    </p>
</div>

<div className="w-full">

<div className="grid lg:grid-cols-2 lg:gap-y-8 lg:gap-x-6 gap-x-6 gap-y-8 items-stretch">

<div className="overflow-hidden min-h-[320px] [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll bg-white/5 rounded-none ring-white/10 ring-1 relative">
<img alt="Customer portrait" className="opacity-100 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c92852bb-a510-405a-85ab-ffa0fde136a4_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/60 to-transparent mix-blend-multiply" style={{visibility: 'hidden'}}></div>
<div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.18)_1px,transparent_1px)] bg-[size:10px_10px]" style={{visibility: 'hidden'}}>
</div>
<div className="bg-gradient-to-b from-black/20 via-transparent to-black/60 absolute top-0 right-0 bottom-0 left-0" style={{visibility: 'hidden'}}></div>
</div>

<div className="flex flex-col sm:p-10 sm:bg-neutral-950 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-left bg-black/40 rounded-none ring-white/10 ring-1 pt-8 pr-8 pb-8 pl-8 relative justify-center">
<div className="mb-4">
<svg className="lucide lucide-quote text-emerald-400" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-2 7-7V4H3v10"></path>
<path d="M14 21c3 0 7-2 7-7V4h-7v10"></path>
</svg>
</div>
<p className="text-white font-geist tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-snug">
          "We saved on hosting and boosted conversions just by running Pulse."
        </p>
<div className="mt-8">
<div className="text-white text-base font-medium">Tom Sullivan</div>
<div className="text-zinc-400 text-sm mt-1">Agency Lead</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-3 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll mt-6 relative gap-x-6 gap-y-6" style={{minHeight: '240px'}}>
<style>
    @keyframes smoothSlideInUp {
      0% {
        opacity: 0;
        transform: translateY(40px);
      }
      20% {
        opacity: 1;
        transform: translateY(0);
      }
      80% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-40px);
      }
    }
  </style>

<div className="flex flex-col xl:bg-neutral-950 text-left bg-white/5 rounded-none ring-white/10 ring-1 pt-6 pr-6 pb-6 pl-6 justify-between overflow-hidden relative">
<div className="" style={{animation: 'smoothSlideInUp 6s ease-in-out 0s infinite'}}>
<p className="text-zinc-300 text-base leading-relaxed">
        "Switching to Pulse was a game-changer. Our deployment time dropped from hours to seconds, and the developer experience is incredible."
      </p>
<div className="flex items-center gap-3 mt-6">
<img alt="Michael Chen avatar" className="h-8 w-8 rounded-none object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg"/>
<div>
<div className="text-white text-sm font-medium">Michael Chen</div>
<div className="text-zinc-500 text-xs">CTO @ TechFlow</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col xl:bg-neutral-950 text-left bg-white/5 rounded-none ring-white/10 ring-1 pt-6 pr-6 pb-6 pl-6 justify-between overflow-hidden relative">
<div className="" style={{animation: 'smoothSlideInUp 6s ease-in-out 1s infinite'}}>
<p className="leading-relaxed text-base text-zinc-300">
        "The automatic scaling and zero-config SSL saved us countless hours. Our team can now focus on building features instead of managing infrastructure."
      </p>
<div className="flex gap-3 mt-6 gap-x-3 gap-y-3 items-center">
<img alt="Emily Roberts avatar" className="h-8 w-8 rounded-none object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7d4bf47a-eb10-4503-a4f3-1940c4118868_320w.webp"/>
<div className="">
<div className="text-white text-sm font-medium">Emily Roberts</div>
<div className="text-zinc-500 text-xs">Lead Engineer @ DataSync</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col xl:bg-neutral-950 text-left bg-white/5 rounded-none ring-white/10 ring-1 pt-6 pr-6 pb-6 pl-6 justify-between overflow-hidden relative">
<div className="" style={{animation: 'smoothSlideInUp 6s ease-in-out 2s infinite'}}>
<p className="text-zinc-300 text-base leading-relaxed">
        "We migrated 50+ client projects to Pulse. The performance improvements were immediate, and our clients noticed the difference right away."
      </p>
<div className="flex items-center gap-3 mt-6">
<img alt="David Park avatar" className="h-8 w-8 rounded-none object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a44deb57-f322-4fc8-9184-d05e21080cb2_320w.jpg" style={{}}/>
<div className="">
<div className="text-white text-sm font-medium">David Park</div>
<div className="text-zinc-500 text-xs">Creative Director @ Studio X</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex md:hidden mt-4 items-center justify-between" style={{display: 'none'}}>
<button className="rounded-xl bg-white/5 px-4 py-2 text-sm text-zinc-200 ring-1 ring-white/10">Contact</button>
<button className="rounded-xl bg-white px-4 py-2 text-sm text-black ring-1 ring-black/10">Join waitlist</button>
</div>
</div>
</section><section className="xl:pb-24 pb-24 relative">
<div className="sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="overflow-hidden xl:bg-neutral-950/60 border border-white/20 border-dashed rounded-none mt-6 relative">

<div className="aura-background-component absolute top-0 left-0 w-full h-full -z-10">
<div className="absolute top-0 left-0 w-full h-full" data-us-project="kn2MoYbTBxaLfmTfsVhB">
</div>

</div>

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent)] bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(1200px_600px_at_50%_120%,rgba(59,130,246,0.2),transparent)]">
</div>
<div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:28px_28px]">
</div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
</div>

<div className="absolute left-5 top-5" style={{visibility: 'hidden'}}>
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/20 ring-1 ring-sky-400/30 backdrop-blur">
<svg className="lucide lucide-refresh-cw h-5 w-5 text-sky-300" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
</div>

<div className="flex flex-col sm:py-16 md:pl-8 md:pr-8 text-center mx-auto pt-16 pr-8 pb-16 pl-8 relative items-center justify-center">
<div className="w-full max-w-7xl">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">

<div className="lg:col-span-2">
<div className="flex flex-col items-start">

<div className="inline-flex bg-center mix-blend-multiply w-[40px] h-[40px] bg-[url(https://cdn.midjourney.com/cb5b11d7-075b-41ad-8245-7abae741cd52/0_2.png?w=800&amp;q=80)] bg-cover rounded invert mb-4">
</div>

<p className="leading-relaxed text-sm text-zinc-400 text-left mb-6">
      Deploy at warp speed. The fastest way to ship your applications globally with zero configuration.
    </p>

<div className="flex items-center gap-3">
<a className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 text-zinc-300" href="#">

<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
</path>
</svg>
</a>
<a className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 text-zinc-300" href="#">

<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
</path>
</svg>
</a>
<a className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 text-zinc-300" href="#">

<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z">
</path>
</svg>
</a>
</div>
</div>
</div>

<div className="text-left" style={{}}>
<h4 className="text-white text-sm font-semibold mb-4 tracking-tight">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Features</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Pricing</a></li>
<li className=""><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Enterprise</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Changelog</a></li>
</ul>
</div>

<div className="text-left">
<h4 className="text-white text-sm font-semibold mb-4 tracking-tight">Resources</h4>
<ul className="space-y-3">
<li className=""><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Documentation</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Guides</a></li>
<li className=""><a className="text-sm text-zinc-400 hover:text-white transition" href="#">API Reference</a></li>
<li className=""><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Community</a></li>
</ul>
</div>

<div className="text-left">
<h4 className="text-white text-sm font-semibold mb-4 tracking-tight">Company</h4>
<ul className="space-y-3">
<li className=""><a className="text-sm text-zinc-400 hover:text-white transition" href="#">About</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Blog</a></li>
<li className=""><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Careers</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
<p className="text-sm text-zinc-500">
        © 2025 Pulse. All rights reserved.
      </p>
<div className="flex items-center gap-6">
<a className="text-sm text-zinc-500 hover:text-white transition" href="#">Privacy</a>
<a className="text-sm text-zinc-500 hover:text-white transition" href="#">Terms</a>
<a className="text-sm text-zinc-500 hover:text-white transition" href="#">Security</a>
<a className="text-sm text-zinc-500 hover:text-white transition" href="#">Status</a>
</div>
</div>
</div>
</div>
</div>

<div className="flex md:hidden mt-4 items-center justify-between" style={{display: 'none'}}>
<button className="rounded-xl bg-white/5 px-4 py-2 text-sm text-zinc-200 ring-1 ring-white/10">Contact</button>
<button className="rounded-xl bg-white px-4 py-2 text-sm text-black ring-1 ring-black/10">Join waitlist</button>
</div>
</div>
</section>



    </>
  );
}
