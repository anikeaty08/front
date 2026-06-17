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



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
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
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style>
    .gradient-blur {
      position: fixed;
      z-index: 20;
      inset: 0 0 auto 0;
      height: 12%;
      pointer-events: none;
    }

    .gradient-blur>div,
    .gradient-blur::before,
    .gradient-blur::after {
      position: absolute;
      inset: 0;
    }

    .gradient-blur::before {
      content: "";
      z-index: 1;
      backdrop-filter: blur(0.5px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 0) 37.5%);
    }

    .gradient-blur>div:nth-of-type(1) {
      z-index: 2;
      backdrop-filter: blur(1px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 0) 50%);
    }

    .gradient-blur>div:nth-of-type(2) {
      z-index: 3;
      backdrop-filter: blur(2px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 0) 62.5%);
    }

    .gradient-blur>div:nth-of-type(3) {
      z-index: 4;
      backdrop-filter: blur(4px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 0) 75%);
    }

    .gradient-blur>div:nth-of-type(4) {
      z-index: 5;
      backdrop-filter: blur(8px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 0) 87.5%);
    }

    .gradient-blur>div:nth-of-type(5) {
      z-index: 6;
      backdrop-filter: blur(16px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 0) 100%);
    }

    .gradient-blur>div:nth-of-type(6) {
      z-index: 7;
      backdrop-filter: blur(32px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }

    .gradient-blur::after {
      content: "";
      z-index: 8;
      backdrop-filter: blur(64px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }
  </style>

<header className="sticky z-30 border-white/5 border-b top-0 z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
<div className="flex bg-center w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/958dd69a-5771-4988-bec5-136d83558239_1600w.png)] bg-cover gap-x-2 gap-y-2 items-center">
</div>
<nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
<a className="transition-colors font-geist hover:text-slate-50" href="#features">Features</a>
<a className="transition-colors font-geist hover:text-slate-50" href="#integrations">Integrations</a>
<a className="transition-colors font-geist hover:text-slate-50" href="#blog">Insights</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex text-xs px-3 py-1.5 rounded-full border transition-colors font-geist border-white/10 text-slate-300 hover:border-blue-300/60 hover:text-blue-200">
          Sign in
        </button>
<div className="btn-wrapper">

<button aria-label="Generate workspace" className="btn px-3 py-2 md:px-4 md:py-2 focus:outline-none" title="Generate workspace" type="button">
<svg aria-hidden="true" className="btn-svg" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="txt-wrapper">
<div className="txt-1">
<span className="btn-letter font-geist">G</span>
<span className="btn-letter font-geist">e</span>
<span className="btn-letter font-geist">n</span>
<span className="btn-letter font-geist">e</span>
<span className="btn-letter font-geist">r</span>
<span className="btn-letter font-geist">a</span>
<span className="btn-letter font-geist">t</span>
<span className="btn-letter font-geist">e</span>
</div>
<div className="txt-2">
<span className="btn-letter font-geist">G</span>
<span className="btn-letter font-geist">e</span>
<span className="btn-letter font-geist">n</span>
<span className="btn-letter font-geist">e</span>
<span className="btn-letter font-geist">r</span>
<span className="btn-letter font-geist">a</span>
<span className="btn-letter font-geist">t</span>
<span className="btn-letter font-geist">i</span>
<span className="btn-letter font-geist">n</span>
<span className="btn-letter font-geist">g</span>
</div>
</div>
</button>
</div>
</div>
</div>
</header>
<main className="flex-1 overflow-hidden -z-10">

<section className="z-10 relative">
<div className="-z-10 opacity-70 absolute top-0 right-0 bottom-0 left-0">
<div className="pointer-events-none absolute inset-x-0 top-[-240px] h-[480px] bg-[radial-gradient(ellipse_at_top,_rgba(132,204,22,0.16),_transparent_60%)]"></div>
<div className="pointer-events-none absolute right-[-120px] top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.25),_transparent_60%)] blur-3xl"></div>
</div>
<div className="md:px-6 md:pt-16 max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-8 pl-4">
<div className="max-w-3xl text-center mr-auto ml-auto animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both'}}>
<p className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium font-geist border-white/10 bg-white/5 text-slate-300">
<svg className="h-4 w-4 text-blue-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
            Aura 1.0 • AI-native tab intelligence for deep work
          </p>
<h1 className="sm:text-5xl md:text-7xl text-4xl tracking-tighter font-geist">
            Bring calm to your browser with
            <span className="bg-gradient-to-r bg-clip-text text-transparent font-geist tracking-tighter via-sky-300 to-emerald-300 from-blue-300">AI-powered focus</span>
</h1>
<p className="md:text-lg text-base font-geist mt-5 text-slate-300">
            Aura learns how you work, then organizes tabs, apps, and context into living workspaces—so you can think in flows, not windows.
          </p>
<div className="flex flex-col gap-3 sm:flex-row mt-8 gap-x-3 gap-y-3 items-center justify-center">

<div className="btn-wrapper">
<button aria-label="Generate workspace" className="btn px-3 py-2 md:px-4 md:py-2 focus:outline-none" title="Generate workspace" type="button">
<svg aria-hidden="true" className="btn-svg" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="txt-wrapper">
<div className="txt-1">
<span className="btn-letter font-geist">S</span>
<span className="btn-letter font-geist">t</span>
<span className="btn-letter font-geist">a</span>
<span className="btn-letter font-geist">r</span>
<span className="btn-letter font-geist">t</span>
<span className="btn-letter font-geist w-1"> </span>
<span className="btn-letter font-geist">A</span>
<span className="btn-letter font-geist">u</span>
<span className="btn-letter font-geist">r</span>
<span className="btn-letter font-geist">a</span>
</div>
<div className="txt-2">
<span className="btn-letter font-geist">G</span>
<span className="btn-letter font-geist">e</span>
<span className="btn-letter font-geist">n</span>
<span className="btn-letter font-geist">e</span>
<span className="btn-letter font-geist">r</span>
<span className="btn-letter font-geist">a</span>
<span className="btn-letter font-geist">t</span>
<span className="btn-letter font-geist">i</span>
<span className="btn-letter font-geist">n</span>
<span className="btn-letter font-geist">g</span>
</div>
</div>
</button>
</div>
<div className="inline-block group relative">
<button className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient sm:text-sm sm:py-3 sm:px-5 before:rounded-full text-xs font-normal tracking-tight rounded-full pt-2.5 pr-4 pb-2.5 pl-4 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center hover:text-white text-white/80 bg-white/5">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="relative font-geist">Watch Aura in action</span>
<span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(139, 92, 246, .55), rgba(139, 92, 246, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
<div className="mt-6 flex items-center justify-center gap-3 text-[11px] text-slate-400">
<div className="flex -space-x-2">
<img alt="" className="h-7 w-7 rounded-full ring-2 object-cover ring-slate-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/61cab6ed-0aeb-4671-824c-5b8a0cf236ca_320w.webp"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 object-cover ring-slate-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a1e4c05-4e71-4530-8e1d-15141d463310_320w.webp"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 object-cover ring-slate-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de332db2-c007-4452-a139-bbc3c3436c76_320w.webp"/>
</div>
<span className="font-geist">Trusted by product teams, researchers, and power users worldwide</span>
</div>
</div>
</div>

<div className="-mb-8 max-w-7xl md:px-6 mr-auto ml-auto pr-4 pl-4">
<div className="relative w-full overflow-hidden bg-gradient-to-b from-white/[0.04] to-white/[0.02] border rounded-2xl mr-auto ml-auto shadow-2xl backdrop-blur-lg border-gradient animate-on-scroll shadow-black/50 border-white/10" style={{animation: 'fadeSlideIn 0.8s ease-out 0.15s both'}}>
<div className="flex items-center justify-between border-b px-3 py-2 border-white/10">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
<span className="h-3 w-3 rounded-full bg-green-500/80"></span>
<div className="ml-3 hidden items-center gap-2 rounded-lg border px-2 py-1 text-[11px] sm:flex font-geist border-white/10 bg-white/5 text-slate-300">
<svg className="h-3.5 w-3.5 text-blue-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
</svg>
                Aura • Focus workspace
              </div>
</div>
<div className="flex items-center gap-2">
<button className="hidden rounded-md border p-1.5 sm:inline-flex border-white/10 bg-white/5 text-slate-200 hover:bg-white/10">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
<line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
</svg>
</button>
<button className="hidden rounded-md border p-1.5 sm:inline-flex border-white/10 bg-white/5 text-slate-200 hover:bg-white/10">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</button>
<button className="rounded-md px-3 py-1.5 text-[10px] font-medium font-geist text-slate-950 bg-blue-500/90 hover:bg-blue-400">
                Enable focus mode
              </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden md:block md:col-span-3 border-r pt-3 pr-3 pb-3 pl-3 bg-black/40 border-white/10">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border px-2 py-1 text-[11px] font-medium font-geist border-white/10 bg-white/5 text-slate-300">
<svg className="h-3.5 w-3.5 text-blue-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 3v18"></path>
</svg>
                  Workspaces
                </div>
<button className="rounded-md border p-1 border-white/10 bg-white/5 text-slate-300 hover:bg-white/10">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
</button>
</div>
<div className="space-y-2 text-[11px] text-slate-300">
<div className="rounded-lg p-2 space-y-2 bg-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
<span className="font-geist">Deep work</span>
</div>
<span className="rounded-md px-1.5 py-0.5 text-[10px] font-geist bg-blue-400/10 text-blue-300">Active</span>
</div>
<ul className="space-y-1 pl-4">
<li className="flex items-center gap-2 rounded-md px-2 py-1 font-geist bg-blue-500/10">
<span className="h-1 w-6 rounded-full bg-blue-400/70"></span>
                      Research
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 font-geist hover:bg-white/5">
<span className="h-1 w-4 rounded-full bg-sky-400/60"></span>
                      Design review
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 font-geist hover:bg-white/5">
<span className="h-1 w-5 rounded-full bg-emerald-400/60"></span>
                      Writing sprint
                    </li>
</ul>
</div>
<div className="rounded-lg p-2 space-y-2 bg-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span className="font-geist">Inbox</span>
</div>
<span className="rounded-md px-1.5 py-0.5 text-[10px] font-geist bg-white/5 text-slate-400">12 tabs</span>
</div>
<div className="grid grid-cols-3 gap-1.5 text-[10px] text-slate-400">
<span className="rounded px-1.5 py-1 text-center font-geist bg-white/5">Docs</span>
<span className="rounded px-1.5 py-1 text-center font-geist bg-white/5">Tickets</span>
<span className="rounded px-1.5 py-1 text-center font-geist bg-white/5">Reading</span>
</div>
</div>
</div>
</aside>

<main className="relative md:col-span-6 bg-black/25">
<div className="flex items-center gap-2 border-b px-3 py-2 text-[11px] border-white/10 text-slate-300">
<svg className="h-4 w-4 text-blue-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path>
<path d="M10 19v-3.96 3.15"></path>
<path d="M7 19h5"></path>
<rect height="10" rx="2" width="6" x="16" y="12"></rect>
</svg>
<span className="font-geist">Context</span>
<span className="rounded-md px-1.5 py-0.5 font-geist bg-white/5">Focus</span>
<span className="text-slate-500 font-geist">|</span>
<span className="font-geist">4 groups • 23 tabs</span>
<div className="ml-auto flex items-center gap-1">
<button className="rounded-md border p-1 border-white/10 bg-white/5 hover:bg-white/10">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 14 4 9l5-5"></path>
<path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
</svg>
</button>
<button className="rounded-md border p-1 border-white/10 bg-white/5 hover:bg-white/10">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m15 14 5-5-5-5"></path>
<path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path>
</svg>
</button>
</div>
</div>
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4">
<div className="relative overflow-hidden rounded-xl border bg-white/[0.03] ring-1 border-white/10 ring-white/10">
<img alt="" className="h-[360px] w-full object-cover sm:h-[440px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d5511e23-8c18-4bf0-8ebd-c83c0b91802e_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-slate-950/80 via-slate-900/20"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="max-w-xl rounded-xl border p-4 backdrop-blur border-white/10 bg-black/60">
<h3 className="text-3xl sm:text-4xl font-geist tracking-tighter">Aura timelines</h3>
<p className="mt-1 text-sm font-geist text-slate-300">
                        Capture tabs, notes, and apps into a single flow. Jump back into any moment—with the exact state preserved.
                      </p>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[11px] font-medium font-geist bg-white text-slate-950 hover:bg-slate-100">
<svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path>
<path d="m14 7 3 3"></path>
<path d="M5 6v4"></path>
<path d="M19 14v4"></path>
</svg>
                          Auto-group tabs
                        </button>
<button className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-[11px] font-medium font-geist border-white/10 bg-white/5 text-slate-200 hover:bg-white/10">
<svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="m15 19-3 3-3-3"></path>
<path d="m19 9 3 3-3 3"></path>
<path d="M2 12h20"></path>
<path d="m5 9-3 3 3 3"></path>
<path d="m9 5 3-3 3 3"></path>
</svg>
                          Rewind session
                        </button>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute -bottom-6 right-4 hidden w-64 rounded-xl border p-2 backdrop-blur lg:block border-white/10 bg-white/5">
<div className="rounded-lg border p-2 border-white/10 bg-black/60">
<div className="aspect-[9/16] overflow-hidden rounded-md">
<img alt="" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf59465f-ad82-4173-862e-ddac8114414e_800w.webp"/>
</div>
<div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
<span className="inline-flex items-center gap-1 font-geist">
<svg className="h-3 w-3" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
<path d="M12 18h.01"></path>
</svg>
                        Mobile 390
                      </span>
<span className="rounded px-1.5 py-0.5 font-geist bg-white/5">Live sync</span>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 border-l p-3 border-white/10 bg-black/35">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border px-2 py-1 text-[11px] font-medium font-geist border-white/10 bg-white/5 text-slate-300">
<svg className="h-3.5 w-3.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<line x1="21" x2="14" y1="4" y2="4"></line>
<line x1="10" x2="3" y1="4" y2="4"></line>
<line x1="21" x2="12" y1="12" y2="12"></line>
<line x1="8" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="16" y1="20" y2="20"></line>
<line x1="12" x2="3" y1="20" y2="20"></line>
<line x1="14" x2="14" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="10" y2="14"></line>
<line x1="16" x2="16" y1="18" y2="22"></line>
</svg>
                  Aura assist
                </div>
<button className="rounded-md border p-1 border-white/10 bg-white/5 text-slate-300 hover:bg-white/10">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
<div className="space-y-3 text-[11px]">
<div className="rounded-lg pt-3 pr-3 pb-3 pl-3 space-y-3 bg-white/5">
<div className="mb-2 flex items-center justify-between">
<span className="font-geist text-slate-300">Focus level</span>
<span className="rounded-md px-2 py-0.5 text-[10px] font-geist bg-blue-400/10 text-blue-200">Balanced</span>
</div>
<div className="w-full h-1.5 rounded-full overflow-hidden bg-slate-800">
<div className="h-full w-2/3 rounded-full bg-gradient-to-r via-sky-400 to-emerald-400 from-blue-400"></div>
</div>
<p className="mt-1 font-geist text-slate-400">Aura will mute noisy tabs, pause notifications, and prioritize active context.</p>
</div>
<div className="rounded-lg pt-3 pr-3 pb-3 pl-3 space-y-3 bg-white/5">
<div className="mb-2 flex items-center justify-between">
<span className="font-geist text-slate-300">Memory usage</span>
<span className="rounded-md px-2 py-0.5 text-[10px] font-geist bg-white/5 text-slate-400">Optimized</span>
</div>
<div className="grid grid-cols-2 gap-2 text-[11px]">
<div className="rounded-md border px-2 py-1 text-center font-geist border-white/10 bg-black/40 text-slate-300">Saved: 2.3 GB</div>
<div className="rounded-md border px-2 py-1 text-center font-geist border-white/10 bg-black/40 text-slate-300">Suspended: 18 tabs</div>
</div>
<div className="mt-2 grid grid-cols-4 gap-2 text-[11px]">
<button className="rounded-md border px-2 py-1 font-medium transition focus:ring-2 focus:outline-none font-geist border-white/10 focus:ring-blue-500 bg-blue-400/10 text-blue-200 hover:bg-blue-400/20">Eco</button>
<button className="rounded-md border px-2 py-1 transition focus:ring-2 focus:outline-none font-geist border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 focus:ring-blue-500">Balanced</button>
<button className="rounded-md border px-2 py-1 transition focus:ring-2 focus:outline-none font-geist border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 focus:ring-blue-500">Performance</button>
<button className="rounded-md border px-2 py-1 transition focus:ring-2 focus:outline-none font-geist border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 focus:ring-blue-500">Custom</button>
</div>
</div>
<div className="rounded-lg pt-3 pr-3 pb-3 pl-3 space-y-3 bg-white/5">
<div className="mb-2 flex items-center justify-between">
<span className="font-geist text-slate-300">Insights</span>
<span className="rounded-md px-2 py-0.5 text-[10px] font-geist bg-white/5 text-slate-400">Last 7 days</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 font-geist text-slate-300">
<svg className="w-[13px] h-[13px] text-blue-300" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
</svg>
                        Focus time
                      </span>
<span className="rounded px-1.5 py-0.5 font-geist bg-white/5 text-slate-400">+3.1h</span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 font-geist text-slate-300">
<svg className="h-3.5 w-3.5 text-sky-300" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg">
<path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
<path d="m12 14 4-4"></path>
</svg>
                        Tab switching
                      </span>
<span className="rounded px-1.5 py-0.5 font-geist bg-white/5 text-slate-400">-42%</span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 font-geist text-slate-300">
<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11V5l12-2v6"></path>
<path d="M9 17v-2"></path>
<path d="M12 18v-6"></path>
<path d="M15 18v-4"></path>
<path d="M18 18v-2"></path>
<path d="M3 11v7a1 1 0 0 0 1 1h16"></path>
</svg>
                        Context switches
                      </span>
<span className="rounded px-1.5 py-0.5 font-geist bg-white/5 text-slate-400">-27%</span>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="sm:px-6 sm:mt-24 md:mt-32 max-w-7xl mt-20 mr-auto ml-auto pr-4 pl-4 relative" id="features">
<div className="max-w-7xl mr-auto ml-auto">
<div className="grid gap-12 lg:grid-cols-2 items-center">

<div className="animate-on-scroll bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17b4e299-5018-4745-9520-e295f7592043_1600w.webp)] bg-cover rounded-[36px] pt-5 pr-5 pb-5 pl-5 relative" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both', maskImage: 'linear-gradient(130deg, transparent, black 10%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(130deg, transparent, black 10%, black 70%, transparent)'}}>
<article className="group relative overflow-hidden transition-shadow hover:shadow-md border rounded-3xl shadow-xl backdrop-blur-xl border-gradient bg-black/70 border-white/10">
<div className="sm:p-10 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
<h3 className="text-2xl font-geist tracking-tighter text-white" style={{fontFamily: '"Space Grotesk", system-ui'}}>Smart Tab Management</h3>
<span className="inline-flex items-center gap-2 text-[10px] sm:text-xs border rounded-full px-2.5 py-1 backdrop-blur-sm font-geist text-white/80 bg-white/5 border-white/10">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
                    AI Powered
                  </span>
</div>
<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b ring-1 ring-inset mb-8 backdrop-blur-sm from-white/5 to-white/10 ring-white/5">
<div className="absolute right-3 sm:right-6 top-4 sm:top-6 w-[78%] h-[68%] rounded-2xl backdrop-blur border shadow-sm bg-black/90 border-white/10">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] sm:text-xs tracking-tight font-geist text-white/60">12 tabs active</span>
</div>
</div>
<div className="p-3 space-y-2">
<div className="flex items-center gap-2 border rounded-lg px-2 py-1.5 bg-blue-500/10 border-blue-500/20">
<div className="w-3 h-3 rounded bg-blue-400"></div>
<div className="flex-1">
<div className="h-1.5 w-20 rounded bg-blue-400/40"></div>
</div>
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
</div>
<div className="flex items-center gap-2 border rounded-lg px-2 py-1.5 bg-white/5 border-white/10">
<div className="w-3 h-3 rounded bg-white/20"></div>
<div className="flex-1">
<div className="h-1.5 w-16 rounded bg-white/20"></div>
</div>
</div>
<div className="flex items-center gap-2 border rounded-lg px-2 py-1.5 bg-white/5 border-white/10">
<div className="w-3 h-3 rounded bg-white/20"></div>
<div className="flex-1">
<div className="h-1.5 w-24 rounded bg-white/20"></div>
</div>
</div>
</div>
</div>
<div className="absolute left-6 sm:left-12 bottom-10 sm:bottom-12 w-[62%] h-[52%] rounded-2xl backdrop-blur border shadow-sm bg-black/90 border-white/10">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
<span className="text-[10px] sm:text-xs tracking-widest font-geist text-white/60">TAB GROUPS</span>
</div>
<div className="p-2 space-y-1.5">
<div className="flex items-center gap-2 text-xs bg-blue-500/10 border border-blue-500/20 rounded px-2 py-1">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span className="font-geist text-white/80">Work (5)</span>
</div>
<div className="flex items-center gap-2 text-xs bg-purple-500/10 border border-purple-500/20 rounded px-2 py-1">
<div className="w-2 h-2 rounded-full bg-purple-400"></div>
<span className="font-geist text-white/80">Research (3)</span>
</div>
<div className="flex items-center gap-2 text-xs bg-orange-500/10 border border-orange-500/20 rounded px-2 py-1">
<div className="w-2 h-2 rounded-full bg-orange-400"></div>
<span className="font-geist text-white/80">Reading (4)</span>
</div>
</div>
</div>
<div className="absolute left-3 sm:left-6 bottom-3 sm:bottom-4 w-[38%] h-[44%] rounded-2xl backdrop-blur border shadow-sm bg-black/90 border-white/10">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
<span className="text-[10px] sm:text-xs tracking-widest font-geist text-white/60">SYNC</span>
</div>
<div className="p-2 space-y-2">
<div className="flex items-center gap-1.5">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
<div className="h-1 w-12 rounded bg-blue-400/40"></div>
</div>
<div className="flex items-center gap-1.5">
<svg className="text-white/40" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M7 7h10"></path>
<path d="M7 12h10"></path>
<path d="M7 17h10"></path>
</svg>
<div className="h-1 w-10 rounded bg-white/20"></div>
</div>
<div className="flex items-center gap-1.5">
<svg className="text-white/40" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7V4h16v3"></path>
<path d="M5 20h14"></path>
<path d="M16 21v-8a4 4 0 0 0-8 0v8"></path>
</svg>
<div className="h-1 w-14 rounded bg-white/20"></div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-x-6 gap-y-6">
<div className="">
<h4 className="text-lg font-semibold tracking-tight font-geist text-white" style={{fontFamily: '"Space Grotesk", system-ui'}}>Auto-Organize</h4>
<p className="mt-2 text-sm font-geist text-white/60">Aura analyzes content, titles, and your habits to group tabs by project, topic, and urgency—automatically.</p>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight font-geist text-white" style={{fontFamily: '"Space Grotesk", system-ui'}}>Cross-Device Sync</h4>
<p className="mt-2 text-sm font-geist text-white/60">Pick up any workspace exactly where you left off, across desktop, mobile, and tablet.</p>
</div>
</div>
<div className="">
<a className="inline-flex items-center gap-2 text-xs font-medium font-geist text-white/90 hover:text-white" href="#">
                    Explore tab features
                    <svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</article>
</div>

<div className="animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out 0.15s both'}}>
<div className="" id="technology">
<h3 className="sm:text-5xl text-4xl font-geist tracking-tighter text-white" style={{fontFamily: '"Space Grotesk", system-ui'}}>
                Revolutionary tab intelligence, built for deep focus
              </h3>
<div className="mt-8">
<div className="border-t pt-6 border-white/10">
<h4 className="text-lg font-semibold mb-4 font-geist text-white" style={{fontFamily: '"Space Grotesk", system-ui'}}>Core Intelligence Features</h4>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 bg-blue-500/10">
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(190, 242, 100)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
<path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
<path d="M6 18a4 4 0 0 1-1.967-.516"></path>
<path d="M12 13h4"></path>
<path d="M12 18h6a2 2 0 0 1 2 2v1"></path>
<path d="M12 8h8"></path>
<path d="M16 8V5a2 2 0 0 1 2-2"></path>
<circle cx="16" cy="13" r=".5"></circle>
<circle cx="18" cy="3" r=".5"></circle>
<circle cx="20" cy="21" r=".5"></circle>
<circle cx="20" cy="8" r=".5"></circle>
</svg>
</div>
<div className="">
<h5 className="font-medium font-geist text-white">Intelligent Grouping</h5>
<p className="text-sm mt-1 font-geist text-white/60">Machine learning clusters tabs by intent—planning, coding, writing—so you always know where to look.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 bg-blue-500/10">
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(190, 242, 100)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m10.852 14.772-.383.923"></path>
<path d="m10.852 9.228-.383-.923"></path>
<path d="m13.148 14.772.382.924"></path>
<path d="m13.531 8.305-.383.923"></path>
<path d="m14.772 10.852.923-.383"></path>
<path d="m14.772 13.148.923.383"></path>
<path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771"></path>
<path d="M17.998 5.125a4 4 0 0 1 2.525 5.771"></path>
<path d="M19.505 10.294a4 4 0 0 1-1.5 7.706"></path>
<path d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516"></path>
<path d="M4.5 10.291A4 4 0 0 0 6 18"></path>
<path d="M6.002 5.125a3 3 0 0 0 .4 1.375"></path>
<path d="m9.228 10.852-.923-.383"></path>
<path d="m9.228 13.148-.923.383"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<div className="">
<h5 className="font-medium font-geist text-white">Memory Management</h5>
<p className="text-sm mt-1 font-geist text-white/60">Suspend idle tabs, prefetch what's next, and keep your machine fast—even with hundreds of tabs.</p>
</div>
</div>
</div>
</div>
</div>
<div className="border-t pt-6 mt-8 border-white/10">
<div className="grid gap-6 sm:grid-cols-2">
<div className="flex gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer items-center">
<div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-geist tracking-tighter text-white" style={{fontFamily: '"Space Grotesk", system-ui'}}>89%</span>
</div>
<p className="text-xs font-geist text-white/60">Faster tab switching reported</p>
</div>
</div>
<div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
<div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-geist tracking-tighter text-white" style={{fontFamily: '"Space Grotesk", system-ui'}}>3.2M</span>
</div>
<p className="text-xs font-geist text-white/60">Tab groups created daily</p>
</div>
</div>
</div>
</div>
<div className="border-t pt-6 mt-8 border-white/10">
<a className="inline-flex items-center justify-center gap-2 h-10 transition text-sm font-normal rounded-full px-4 font-geist text-white hover:bg-blue-600/90 bg-blue-600" href="#">
                  Learn about tab management
                  <svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-24 md:mt-32" id="integrations">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both'}}>
<div className="text-center">
<span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] ring-1 uppercase tracking-tight font-geist bg-blue-400/10 text-blue-300 ring-blue-300/20">
<svg className="h-3.5 w-3.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22v-5"></path>
<path d="M9 8V2"></path>
<path d="M15 8V2"></path>
<path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path>
</svg>
            Integrations
          </span>
<h2 className="sm:text-5xl text-4xl mt-4 font-geist tracking-tighter">
            Connect your entire stack to Aura
          </h2>
<p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base font-geist text-neutral-300">
            One workspace that speaks to your tools. Pipe in issues, docs, messages, and tasks—Aura keeps them in context with your tabs.
          </p>
</div>
<div className="relative mx-auto mt-12 max-w-4xl">
<div className="flex items-center justify-center gap-6 sm:gap-10">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="h-5 w-5 text-white" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65c-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="h-5 w-5 text-white" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1.5" width="3" x="13" y="2"></rect>
<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
<rect height="8" rx="1.5" width="3" x="8" y="14"></rect>
<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
<rect height="3" rx="1.5" width="8" x="14" y="13"></rect>
<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
<rect height="3" rx="1.5" width="8" x="2" y="8"></rect>
<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
</svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="h-5 w-5 text-white" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<rect height="9" width="3" x="7" y="7"></rect>
<rect height="5" width="3" x="14" y="7"></rect>
</svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="h-5 w-5 text-white" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="h-5 w-5 text-white" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="h-5 w-5 text-white" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
</svg>
</span>
</div>
<div className="relative mt-6 h-64">
<svg className="absolute inset-0 w-full h-full" fill="none" viewbox="0 0 900 360">
<defs>
<filter height="200%" id="glow" width="200%" x="-50%" y="-50%">
<fegaussianblur result="coloredBlur" stddeviation="4"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<circle cx="150" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="270" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.2s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="390" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.4s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="510" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="630" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.8s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="750" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="1s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<path d="M450 300 C 450 200, 300 120, 150 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="0s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
<path d="M450 300 C 450 210, 360 130, 270 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.2s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 150, 420 80, 390 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.4s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 150, 480 80, 510 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.6s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 210, 540 130, 630 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.8s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 200, 600 120, 750 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="1s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
<g transform="translate(430, 305)">
<rect fill="#020617" fillOpacity="0.96" height="52" rx="12" stroke="#1f2937" strokeWidth="1.5" width="120" x="-60" y="-26"></rect>
<rect fill="url(#gradPanel)" fillOpacity="0.9" height="44" rx="10" width="112" x="-56" y="-22"></rect>
<defs>
<lineargradient id="gradPanel" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#22c55e" stop-opacity="0.2"></stop>
<stop offset="50%" stop-color="#22d3ee" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0.3"></stop>
</lineargradient>
</defs>
<circle cx="-36" cy="0" fill="#22c55e" r="7"></circle>
<circle cx="-12" cy="0" fill="#0ea5e9" r="7"></circle>
<circle cx="12" cy="0" fill="#a855f7" r="7"></circle>
<rect fill="#020617" height="12" rx="6" stroke="#4ade80" stroke-opacity="0.7" strokeWidth="1" width="40" x="28" y="-6"></rect>
<text className="font-geist" fill="#bbf7d0" fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Inter'" fontSize="8" text-anchor="middle" x="48" y="2">LIVE</text>
</g>
</svg>
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="mx-auto h-40 max-w-xl bg-[radial-gradient(circle_at_center,rgba(190,242,100,0.16),transparent_60%)] blur-2xl"></div>
</div>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-3 text-xs text-neutral-300">
<div className="rounded-2xl border p-3 border-white/10 bg-white/5">
<p className="font-medium mb-1 font-geist text-white">Two-way sync</p>
<p className="text-[11px] font-geist text-neutral-300">Changes in your tools update Aura, and your workspace keeps everything aligned.</p>
</div>
<div className="rounded-2xl border p-3 border-white/10 bg-white/5">
<p className="font-medium mb-1 font-geist text-white">Contextual linking</p>
<p className="text-[11px] font-geist text-neutral-300">Tasks, docs, and threads attach to timelines—not just static URLs.</p>
</div>
<div className="rounded-2xl border p-3 border-white/10 bg-white/5">
<p className="font-medium mb-1 font-geist text-white">Smart routing</p>
<p className="text-[11px] font-geist text-neutral-300">Aura routes new work into the right focus lane automatically.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-24 md:mt-32" id="blog">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both'}}>
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div>
<span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] ring-1 uppercase tracking-tight font-geist bg-white/5 text-slate-300 ring-white/10">
              Insights
            </span>
<h2 className="mt-4 text-3xl sm:text-4xl font-geist tracking-tighter">
              Build a healthier relationship with your browser
            </h2>
<p className="mt-2 max-w-xl text-sm sm:text-base font-geist text-slate-300">
              Research-backed guides on attention, modern workflows, and using AI as a thinking partner—not just another notification stream.
            </p>
</div>
<a className="inline-flex items-center gap-2 text-xs font-medium font-geist text-slate-200 hover:text-white" href="#">
            View all articles
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">

<article className="group rounded-2xl border bg-white/5/5 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-4 transition-colors border-white/10 hover:border-blue-300/60">
<div className="aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-slate-900/60">
<img alt="Team collaborating around laptops" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<p className="text-[11px] uppercase tracking-wide mb-1 font-geist text-blue-300/80">Deep Work</p>
<h3 className="text-sm font-medium font-geist text-white group-hover:text-blue-100">
              Designing workdays for flow, not pings
            </h3>
<p className="mt-2 text-[12px] font-geist text-slate-300">
              Learn how high-performing teams are restructuring calendars and tools to protect long-form focus time.
            </p>
<div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
<span className="font-geist">8 min read</span>
<span className="inline-flex items-center gap-1 font-geist group-hover:text-blue-200">
                Read
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</div>
</article>

<article className="group rounded-2xl border bg-white/5/5 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-4 transition-colors border-white/10 hover:border-sky-300/60">
<div className="aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-slate-900/60">
<img alt="Developer coding on multiple monitors" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb60cd45-faf4-43b0-b54d-431c435182ff_800w.webp"/>
</div>
<p className="text-[11px] uppercase tracking-wide mb-1 font-geist text-sky-300/80">Browser Future</p>
<h3 className="text-sm font-medium group-hover:text-sky-100 font-geist text-white">
              Why the next browser is an operating system for thought
            </h3>
<p className="mt-2 text-[12px] font-geist text-slate-300">
              The browser has quietly become your primary workspace. Here's why intentional design and AI matter now.
            </p>
<div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
<span className="font-geist">12 min read</span>
<span className="inline-flex items-center gap-1 group-hover:text-sky-200 font-geist">
                Read
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</div>
</article>

<article className="group rounded-2xl border bg-white/5/5 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-4 transition-colors border-white/10 hover:border-emerald-300/60">
<div className="aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-slate-900/60">
<img alt="Person journaling with laptop" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3cea8e1d-29c5-4ec9-b423-09cfed74639e_800w.webp"/>
</div>
<p className="text-[11px] uppercase tracking-wide mb-1 font-geist text-emerald-300/80">Attention</p>
<h3 className="text-sm font-medium group-hover:text-emerald-100 font-geist text-white">
              A calmer browser: small changes, big gains
            </h3>
<p className="mt-2 text-[12px] font-geist text-slate-300">
              From tab limits to focus playlists—practical tactics Aura users employ to reclaim attention every day.
            </p>
<div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
<span className="font-geist">6 min read</span>
<span className="inline-flex items-center gap-1 group-hover:text-emerald-200 font-geist">
                Read
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</div>
</article>
</div>
</div>
</section>

<section className="mt-24 md:mt-32">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both'}}>
<div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-white/[0.06] px-6 py-8 sm:px-10 sm:py-10 border-gradient border-white/10 via-slate-900/90 to-black/95">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.3),transparent_60%)] blur-3xl"></div>
</div>
<div className="relative grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-center">
<div>
<p className="text-[11px] uppercase tracking-[0.15em] mb-2 font-geist text-blue-300/90">What teams say</p>
<p className="text-2xl sm:text-3xl md:text-[28px] font-geist tracking-tighter text-slate-50" style={{fontFamily: '"Space Grotesk", system-ui'}}>
                "Aura turned my browser from a sourceof chaos into my most reliable thinking tool. I ship more and stress less."
              </p>
<div className="mt-6 flex items-center gap-3">
<img alt="User avatar" className="h-12 w-12 rounded-full ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/61cab6ed-0aeb-4671-824c-5b8a0cf236ca_320w.webp"/>
<div>
<p className="text-sm font-medium font-geist text-white">Sarah Chen</p>
<p className="text-xs font-geist text-slate-400">Product Lead, Verse AI</p>
</div>
</div>
</div>
<div className="relative">
<div className="rounded-2xl border p-4 backdrop-blur-sm bg-black/60 border-white/10">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium font-geist text-emerald-300">Productivity Metrics</span>
<span className="text-[10px] px-2 py-0.5 rounded-full font-geist bg-emerald-400/10 text-emerald-200">Last 30 days</span>
</div>
<div className="space-y-3">
<div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-[11px] font-geist text-slate-300">Focus sessions</span>
<span className="text-sm font-medium font-geist text-white">+156%</span>
</div>
<div className="w-full h-2 rounded-full overflow-hidden bg-slate-800">
<div className="h-full w-[85%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-[11px] font-geist text-slate-300">Context switches</span>
<span className="text-sm font-medium font-geist text-white">-68%</span>
</div>
<div className="w-full h-2 rounded-full overflow-hidden bg-slate-800">
<div className="h-full w-[68%] rounded-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-[11px] font-geist text-slate-300">Tab organization</span>
<span className="text-sm font-medium font-geist text-white">+210%</span>
</div>
<div className="w-full h-2 rounded-full overflow-hidden bg-slate-800">
<div className="h-full w-[95%] rounded-full bg-gradient-to-r from-purple-400 to-purple-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-24 md:mt-32 mb-24">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both'}}>
<h2 className="text-3xl sm:text-5xl font-geist tracking-tighter">
          Ready to reclaim your focus?
        </h2>
<p className="mt-4 text-base sm:text-lg font-geist text-slate-300 max-w-2xl mx-auto">
          Join thousands of makers, researchers, and deep workers who've made Aura their browser's co-pilot.
        </p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<div className="btn-wrapper">
<button aria-label="Start using Aura" className="btn px-5 py-2.5 focus:outline-none" title="Start using Aura" type="button">
<svg aria-hidden="true" className="btn-svg" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="txt-wrapper">
<div className="txt-1">
<span className="btn-letter font-geist">T</span>
<span className="btn-letter font-geist">r</span>
<span className="btn-letter font-geist">y</span>
<span className="btn-letter font-geist w-1"> </span>
<span className="btn-letter font-geist">f</span>
<span className="btn-letter font-geist">r</span>
<span className="btn-letter font-geist">e</span>
<span className="btn-letter font-geist">e</span>
</div>
<div className="txt-2">
<span className="btn-letter font-geist">S</span>
<span className="btn-letter font-geist">t</span>
<span className="btn-letter font-geist">a</span>
<span className="btn-letter font-geist">r</span>
<span className="btn-letter font-geist">t</span>
<span className="btn-letter font-geist">i</span>
<span className="btn-letter font-geist">n</span>
<span className="btn-letter font-geist">g</span>
</div>
</div>
</button>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium font-geist text-slate-300 hover:text-white transition-colors" href="#">
            See pricing
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<p className="mt-6 text-xs font-geist text-slate-400">
          No credit card required • Works with Chrome, Edge &amp; Brave • Free for 14 days
        </p>
</div>
</section>
</main>

<footer className="border-t mt-auto border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h3 className="text-sm font-medium mb-3 font-geist text-white">Product</h3>
<ul className="space-y-2 text-xs font-geist text-slate-400">
<li><a className="hover:text-slate-200 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-slate-200 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-slate-200 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium mb-3 font-geist text-white">Company</h3>
<ul className="space-y-2 text-xs font-geist text-slate-400">
<li><a className="hover:text-slate-200 transition-colors" href="#">About</a></li>
<li><a className="hover:text-slate-200 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-slate-200 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium mb-3 font-geist text-white">Resources</h3>
<ul className="space-y-2 text-xs font-geist text-slate-400">
<li><a className="hover:text-slate-200 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-slate-200 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-slate-200 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium mb-3 font-geist text-white">Legal</h3>
<ul className="space-y-2 text-xs font-geist text-slate-400">
<li><a className="hover:text-slate-200 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-slate-200 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-slate-200 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 border-white/5">
<p className="text-xs font-geist text-slate-400">© 2024 Aura. All rights reserved.</p>
<div className="flex items-center gap-4">
<a aria-label="Twitter" className="text-slate-400 hover:text-slate-200 transition-colors" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a aria-label="GitHub" className="text-slate-400 hover:text-slate-200 transition-colors" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a aria-label="Discord" className="text-slate-400 hover:text-slate-200 transition-colors" href="#">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
