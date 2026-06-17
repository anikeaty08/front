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
      


    (function() {
      const toggles = document.querySelectorAll('.faq-toggle');
      
      toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
          const faqId = this.getAttribute('data-faq');
          const answer = document.querySelector(`[data-answer="${faqId}"]`);
          const arrow = this.querySelector('.faq-arrow svg');
          const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
          
          // Close all other FAQs
          document.querySelectorAll('.faq-answer').forEach(a => {
            if (a !== answer) {
              a.style.maxHeight = '0';
              a.style.opacity = '0';
            }
          });
          
          document.querySelectorAll('.faq-arrow svg').forEach(arr => {
            if (arr !== arrow) {
              arr.style.transform = 'rotate(0deg)';
            }
          });
          
          // Toggle current FAQ
          if (isOpen) {
            answer.style.maxHeight = '0';
            answer.style.opacity = '0';
            arrow.style.transform = 'rotate(0deg)';
          } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.opacity = '1';
            arrow.style.transform = 'rotate(90deg)';
          }
        });
      });
    })();
  


            (function () {
              const section = document.currentScript && document.currentScript.parentElement ? document.currentScript.parentElement : document.querySelector('[data-element-id="aura-emh6dltixdxmqargf"]');
              if (!section) return;
              const img = section.querySelector('#faqPreviewImage');
              const previews = {
                'getting-started': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
                'pricing': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop',
                'support': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1600&auto=format&fit=crop'
              };
              section.querySelectorAll('[data-preview]').forEach(link => {
                link.addEventListener('mouseenter', () => {
                  const key = link.getAttribute('data-preview');
                  if (previews[key]) img.src = previews[key];
                });
                link.addEventListener('focus', () => {
                  const key = link.getAttribute('data-preview');
                  if (previews[key]) img.src = previews[key];
                });
              });
            })();
          


        (function(){
          const el = document.getElementById('eteryLocalTime');
          if(!el) return;
          function fmt(){
            const d = new Date();
            try {
              const time = d.toLocaleTimeString([], { hour12: false });
              const parts = new Intl.DateTimeFormat([], { timeZoneName: 'short' }).formatToParts(d);
              const tzAbbr = (parts.find(p => p.type === 'timeZoneName')?.value || '').replace(/[0-9]/g, '');
              el.textContent = time + ' (' + (tzAbbr || 'local') + ')';
            } catch(e){
              el.textContent = d.toLocaleTimeString();
            }
          }
          fmt();
          setInterval(fmt, 1000);
        })();
      


      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });
    


      const elements = document.querySelectorAll('.animate
    
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
      

<div className="aura-background-component fixed w-full h-screen top-0" data-alpha-mask="80">
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="xn4ynXWNBCfIsAdzGYbT"></div>

</div>

<div className="pointer-events-none fixed -z-10 top-0 right-0 bottom-0 left-0" style={{}}>
<div className="absolute top-0 right-0 bottom-0 left-0" style={{}}></div>
</div>

<header className="sticky [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] bg-white/5 h-20 z-50 border-white/10 border-b top-0 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-2xl">
<div className="flex gap-3 lg:px-8 h-full max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-3 gap-y-3 items-center justify-between">

<a className="flex items-center gap-3 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both]" href="#">
<span className="relative inline-flex h-6 w-6">
<span className="absolute inset-0 -rotate-45">
<span className="block h-[42%] w-full rounded bg-white/90"></span>
<span className="mt-[14%] block h-[42%] w-full rounded bg-white/60"></span>
</span>
</span>
<span className="text-xl font-medium tracking-tight">Funo</span>
</a>

<div className="hidden lg:flex flex-1 justify-center">
<div className="hidden md:flex md:gap-y-1 md:py-2 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] border-0 rounded-none pt-2 pr-2 pb-2 pl-2 shadow backdrop-blur-none gap-x-1 gap-y-1 items-center">
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#features">Features</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#product">Product</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#analytics">Analytics</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#pricing">Pricing</a>
</div>
</div>

<div className="flex [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] gap-x-2 gap-y-2 items-center">

<a className="hidden lg:inline-flex group items-center text-[15px] transition hover:ring-white/20 font-medium text-white bg-neutral-900/80 h-11 ring-white/10 ring-1 rounded-full pr-5 pl-14 relative backdrop-blur-sm" href="#">
<span className="pointer-events-none absolute left-1.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full ring-1 ring-white/20 transition overflow-hidden btn-animate-gradient" style="
          background:
            radial-gradient(circle at 50% 50%, rgba(88, 28, 135, 1) 0%, rgba(88, 28, 135, 0.3) 40%, rgba(76, 29, 149, 0) 70%),
            linear-gradient(135deg, #7C3AED 0%, #8B5CF6 40%, #6366F1 70%, #60A5FA 100%);
          background-size: 300% 300%;
          box-shadow:
            inset 0 -8px 14px rgba(255, 255, 255, 0.8),
            inset 0 2px 4px rgba(255, 255, 255, 0.4);
        ">
<svg className="lucide lucide-arrow-right h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
        Start a project
      </a>

<button aria-label="Open menu" className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition">
<svg className="lucide lucide-menu h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>

<main className="" style={{}}>
<section className="min-h-[calc(100vh-80px)] flex relative items-center justify-center">

<div className="z-10 lg:px-8 text-center w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative" style={{}}>
<div className="max-w-5xl mr-auto ml-auto">
<h1 className="[animation:fadeSlideIn_0.8s_ease-out_0.5s_both] */ sm:text-6xl lg:text-7xl lg:mt-24 lg:px-24 lg:text-center text-5xl font-light text-white tracking-tight mt-24 pr-0 pl-0">
              Build modern experiences that compound growth
            </h1>
<p className="md:text-xl leading-relaxed [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] */ text-lg text-white/70 max-w-2xl mt-4 mr-auto ml-auto">
              Strategy, design, and shipping velocity—bundled into one focused
              team. We help you launch faster with clarity and polish.
            </p>
<div className="flex flex-wrap */ mt-8 gap-x-3 gap-y-3 items-center justify-center">

<a className="inline-flex items-center justify-center text-[15px] transition-all duration-500 hover:scale-105 hover:shadow-2xl [animation:fadeSlideIn_0.8s_ease-out_0.7s_both] font-medium text-white h-11 rounded-full pr-6 pl-6" href="#" onmouseout="this.style.background=`radial-gradient(circle at 50% 50%, rgba(58, 17, 124, 0.95) 0%, rgba(58, 17, 124, 0) 65%), url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 120%22 preserveAspectRatio=%22none%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%220%25%22%3E%3Cstop offset=%220%25%22 stop-color=%22%235B21B6%22%3E%3Canimate attributeName=%22stop-color%22 values=%22%235B21B6;%236B21A8;%234C1D95;%234B3FF6;%235B21B6%22 dur=%224s%22 repeatCount=%22indefinite%22/%3E%3C/stop%3E%3Cstop offset=%2250%25%22 stop-color=%22%234C1D95%22%3E%3Canimate attributeName=%22stop-color%22 values=%22%234C1D95;%234B3FF6;%235B21B6;%236B21A8;%234C1D95%22 dur=%224s%22 repeatCount=%22indefinite%22/%3E%3C/stop%3E%3Cstop offset=%22100%25%22 stop-color=%22%234B3FF6%22%3E%3Canimate attributeName=%22stop-color%22 values=%22%234B3FF6;%235B21B6;%236B21A8;%234C1D95;%234B3FF6%22 dur=%224s%22 repeatCount=%22indefinite%22/%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22120%22 fill=%22url(%23g)%22/%3E%3C/svg%3E')`; this.style.boxShadow=`inset 0 -18px 28px rgba(0, 0, 0, 0.35), inset 0 3px 6px rgba(255, 255, 255, 0.25), 0 10px 25px rgba(0, 0, 0, 0.6)`; this.style.textShadow=`0 1px 3px rgba(0, 0, 0, 0.75)`; this.style.filter=`brightness(0.85) saturate(1.25)`;" onmouseover="this.style.background=`radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.95) 0%, rgba(76, 29, 149, 0) 65%), url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 120%22 preserveAspectRatio=%22none%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%220%25%22%3E%3Cstop offset=%220%25%22 stop-color=%22%237C3AED%22%3E%3Canimate attributeName=%22stop-color%22 values=%22%237C3AED;%238B5CF6;%236366F1;%2360A5FA;%237C3AED%22 dur=%224s%22 repeatCount=%22indefinite%22/%3E%3C/stop%3E%3Cstop offset=%2250%25%22 stop-color=%22%236366F1%22%3E%3Canimate attributeName=%22stop-color%22 values=%22%236366F1;%2360A5FA;%237C3AED;%238B5CF6;%236366F1%22 dur=%224s%22 repeatCount=%22indefinite%22/%3E%3C/stop%3E%3Cstop offset=%22100%25%22 stop-color=%22%2360A5FA%22%3E%3Canimate attributeName=%22stop-color%22 values=%22%2360A5FA;%237C3AED;%238B5CF6;%236366F1;%2360A5FA%22 dur=%224s%22 repeatCount=%22indefinite%22/%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22400%22 height=%22120%22 fill=%22url(%23g)%22/%3E%3C/svg%3E')`; this.style.boxShadow=`inset 0 -18px 28px rgba(255, 255, 255, 0.95), inset 0 3px 6px rgba(255, 255, 255, 0.5), 0 10px 25px rgba(0, 0, 0, 0.5)`; this.style.textShadow=`0 1px 2px rgba(0, 0, 0, 0.6)`; this.style.filter=`brightness(0.85) saturate(1.2)`;" style={{background: 'radial-gradient(circle, rgba(58, 17, 124, 0.95) 0%, rgba(58, 17, 124, 0) 65%), url("data: image/svg+xml, %3Csvg xmlns=%22http: //www.w3.org/2000/svg%22 viewBox=%220 0 400 120%22 preserveAspectRatio=%22none%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%220%25%22%3E%3Cstop offset=%220%25%22 stop-color=%22%235B21B6%22%3E%3Canimate attributeName=%22stop-color%22 values=%22%235B21B6', boxShadow: 'rgba(0, 0, 0, 0.35) 0px -18px 28px inset, rgba(255, 255, 255, 0.25) 0px 3px 6px inset, rgba(0, 0, 0, 0.6) 0px 10px 25px', textShadow: 'rgba(0, 0, 0, 0.75) 0px 1px 3px', filter: 'brightness(0.85) saturate(1.25)'}}>
  Let's get started
</a>

<a className="inline-flex items-center justify-center text-[15px] transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] [animation:fadeSlideIn_0.8s_ease-out_0.8s_both] font-medium text-white bg-white/10 h-11 rounded-full ring-white/20 ring-1 pr-6 pl-6" href="#">
  Explore our work

</a>
</div>

<div className="-mb-8 md:px-6 md:pt-24 [animation:fadeSlideIn_0.8s_ease-out_0.8s_both] animate-on-scroll animate origin-top max-w-7xl mr-auto ml-auto pt-24 pr-4 pl-4 scale-75">
<div className="relative w-full overflow-hidden bg-white/[0.04] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl">

<div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
<span className="h-3 w-3 rounded-full bg-green-500/80"></span>
</div>
<div className="flex items-center gap-2"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden md:block md:col-span-3 bg-black/30 border-white/10 border-r pt-3 pr-3 pb-3 pl-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300 font-sans">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.29 7 12 12 20.71 7"></polyline>
<line x1="12" x2="12" y1="22" y2="12"></line>
</svg>
                        Campaigns
                      </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
</div>
<div className="flex flex-col text-slate-300 h-[520px] space-y-4">

<div className="flex gap-1 mb-3">
<button className="px-2 py-1 text-xs bg-blue-600 text-white rounded font-sans">
                          Active
                        </button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-sans">
                          Draft
                        </button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-sans">
                          Archive
                        </button>
</div>


<div className="bg-white/5 rounded-lg p-2 flex-1">
<div className="text-xs text-slate-400 mb-2 font-sans">
                          Active Campaigns
                        </div>
<ul className="space-y-1 text-xs">
<li className="flex items-center gap-2 rounded-md bg-blue-500/20 px-2 py-1 font-sans">
<svg className="h-3.5 w-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
                            Summer Launch 2025
                            <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-blue-400">
                                89%
                              </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-sans">
<svg className="h-3.5 w-3.5 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
<path d="M9 18h6"></path>
<path d="M10 22h4"></path>
</svg>
                            Product Features
                            <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-yellow-400">
                                62%
                              </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-sans">
<svg className="h-3.5 w-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
                            Security Update
                            <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-blue-400">
                                95%
                              </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-sans">
<svg className="h-3.5 w-3.5 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
                            Pricing Changes
                            <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-cyan-400">78%</span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-sans opacity-60">
<svg className="h-3.5 w-3.5 text-slate-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
                            Mobile App Beta
                            <div className="ml-auto">
<span className="text-xs text-slate-500 font-sans">
                                Paused
                              </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-sans">
<svg className="h-3.5 w-3.5 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
<line x1="12" x2="12" y1="9" y2="13"></line>
<line x1="12" x2="12.01" y1="17" y2="17"></line>
</svg>
                            Q2 Webinar Series
                            <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-orange-400">
                                45%
                              </span>
</div>
</li>
</ul>
</div>

<div className="bg-white/5 rounded-lg p-2 mt-3">
<div className="mb-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="20" y2="10"></line>
<line x1="18" x2="18" y1="20" y2="4"></line>
<line x1="6" x2="6" y1="20" y2="16"></line>
</svg>
<span className="text-xs font-medium font-sans">
                              Performance
                            </span>
</div>
<div className="flex gap-1">
<button className="p-1 rounded border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="w-3 h-3 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-3 h-2 rounded-sm bg-blue-500"></div>
<span className="text-slate-300 font-sans text-[10px]">
                              Conversion Rate
                            </span>
<div className="ml-auto text-[10px] text-blue-400">
                              +12.3%
                            </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-4 h-2 bg-blue-500 rounded-sm"></div>
<span className="text-slate-300 font-sans text-[10px]">
                              Page Views
                            </span>
<div className="ml-auto text-[10px] text-blue-400">
                              847K
                            </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-5 h-2 bg-purple-500 rounded-sm"></div>
<span className="text-slate-300 font-sans text-[10px]">
                              Engagement
                            </span>
<div className="ml-auto text-[10px] text-purple-400">
                              +8.7%
                            </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-3 h-2 bg-cyan-400 rounded-sm"></div>
<span className="text-slate-300 font-sans text-[10px]">
                              Click Rate
                            </span>
<div className="ml-auto text-[10px] text-cyan-400">
                              4.2%
                            </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-4 h-2 bg-orange-400 rounded-sm"></div>
<span className="text-slate-300 font-sans text-[10px]">
                              Avg. Session
                            </span>
<div className="ml-auto text-[10px] text-slate-400">
                              3m 24s
                            </div>
</div>
</div>
</div>
</div>
</aside>

<main className="relative md:col-span-6 bg-black/20">
<div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs text-slate-300">
<span className="font-sans">Analytics Dashboard</span>
<div className="text-slate-500">•</div>
<span className="font-sans text-slate-400">Last 30 days</span>
<div className="ml-auto flex items-center gap-1">
<div className="text-xs text-slate-400 font-sans">
                          Updated 5m ago
                        </div>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
</svg>
</button>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-2 bg-black/10 border-white/10 border-b pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center justify-between">
<div className="flex items-center gap-2 w-full sm:w-auto">
<button className="p-1 rounded border border-white/10 bg-blue-600 text-white hover:bg-blue-500">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="20" y2="10"></line>
<line x1="18" x2="18" y1="20" y2="4"></line>
<line x1="6" x2="6" y1="20" y2="16"></line>
</svg>
</button>
<button className="p-1 rounded border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
</button>
<div className="h-4 w-px bg-white/10"></div>
<div className="flex items-center gap-1 flex-1">
<span className="text-xs text-slate-400 font-sans">Period:</span>
<button className="inline-flex items-center justify-center px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-300 hover:bg-white/10 font-sans whitespace-nowrap">
        30 Days
      </button>
<button className="sm:hidden p-1 rounded border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 ml-auto">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-300 hover:bg-white/10 font-sans">
      Overview
    </button>
<button className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 font-sans">
      Campaigns
    </button>
<button className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 font-sans">
      Users
    </button>
</div>
</div>
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4">
<div className="overflow-hidden min-h-[400px] grid grid-rows-[auto,1fr,auto] sm:min-h-[450px] sm:pt-0 sm:pb-0 sm:pl-0 sm:pr-0 border-0 rounded-none ring-0 pt-0 pr-0 pb-0 pl-0 gap-x-4 gap-y-4">

<div className="grid grid-cols-2 gap-3">
<div className="xl:bg-black/10 bg-black/40 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400 font-sans">
                                Total Users
                              </span>
</div>
<div className="text-2xl font-medium text-white font-sans">
                              47,329
                            </div>
<div className="text-xs mt-1 font-sans text-blue-400">
                              +15.3% from last month
                            </div>
</div>
<div className="xl:bg-black/10 bg-black/40 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400 font-sans">
                                Revenue
                              </span>
</div>
<div className="text-2xl font-medium text-white font-sans">
                              $284K
                            </div>
<div className="text-xs mt-1 font-sans text-blue-400">
                              +22.8% from last month
                            </div>
</div>
</div>

<div className="min-h-0 xl:bg-black/10 bg-black/40 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-white font-sans">
                              Campaign Performance
                            </h3>
<span className="text-xs text-slate-400 font-sans">
                              Weekly trend
                            </span>
</div>
<div className="relative h-32 sm:h-40">
<div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 h-full">
<div className="flex-1 bg-blue-500/60 rounded-t" style={{height: '45%'}}></div>
<div className="flex-1 bg-blue-500/60 rounded-t" style={{height: '62%'}}></div>
<div className="flex-1 bg-blue-500/80 rounded-t" style={{height: '78%'}}></div>
<div className="flex-1 bg-blue-500 rounded-t" style={{height: '95%'}}></div>
<div className="flex-1 bg-blue-500/80 rounded-t" style={{height: '88%'}}></div>
<div className="flex-1 bg-blue-500/60 rounded-t" style={{height: '71%'}}></div>
<div className="flex-1 bg-blue-500/40 rounded-t" style={{height: '54%'}}></div>
</div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-slate-500 font-sans">
<span>Mon</span>
<span className="">Tue</span>
<span>Wed</span>
<span className="">Thu</span>
<span>Fri</span>
<span className="">Sat</span>
<span>Sun</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
<div className="xl:bg-black/10 text-center bg-black/40 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur">
<div className="text-xl font-medium text-blue-400">
                              92%
                            </div>
<div className="text-[10px] text-slate-400 font-sans">
                              Active Rate
                            </div>
</div>
<div className="xl:bg-black/10 text-center bg-black/40 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur">
<div className="text-xl font-medium font-sans text-blue-400">
                              3.2K
                            </div>
<div className="text-[10px] text-slate-400 font-sans">
                              New Signups
                            </div>
</div>
<div className="xl:bg-black/10 text-center bg-black/40 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur">
<div className="text-xl font-medium text-purple-400">
                              68%
                            </div>
<div className="text-[10px] text-slate-400 font-sans">
                              Retention
                            </div>
</div>
<div className="xl:bg-black/10 text-center bg-black/40 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur">
<div className="text-xl font-medium text-cyan-400 font-sans">
                              4.2
                            </div>
<div className="text-[10px] text-slate-400 font-sans">
                              Avg Rating
                            </div>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 bg-black/30 border-white/10 border-l pt-3 pr-3 pb-3 pl-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300 font-sans">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
                        Settings
                      </div>
<div className="flex gap-1">
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
</div>

<div className="flex gap-1 mb-3">
<button className="px-2 py-1 text-xs bg-blue-600 text-white rounded font-sans">
                        Campaign
                      </button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-sans">
                        Targeting
                      </button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-sans">
                        Budget
                      </button>
</div>
<div className="space-y-3 h-[480px] overflow-y-auto">

<div className="bg-white/5 rounded-lg p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-300 font-sans">
                            Active Campaign
                          </span>
<span className="text-xs text-blue-400 font-sans">
                            Summer Launch
                          </span>
</div>
<div className="text-[10px] text-slate-500 space-y-1 font-sans">
<div className="flex justify-between">
<span className="">Status:</span>
<span className="text-blue-400">Active</span>
</div>
<div className="flex justify-between">
<span>Budget:</span>
<span>$25,000</span>
</div>
<div className="flex justify-between">
<span className="">Spend:</span>
<span>$18,420</span>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 text-xs">
<span className="text-slate-300 font-sans">
                            Target Audience
                          </span>
</div>
<div className="space-y-2 text-[10px]">
<div className="">
<div className="text-slate-400 mb-1 font-sans">
                              Age Range
                            </div>
<div className="flex items-center gap-2">
<input className="flex-1 h-1 bg-white/10 rounded-full appearance-none" max="65" min="18" type="range" value="35"/>
<span className="text-slate-400 font-sans w-12">
                                25-45
                              </span>
</div>
</div>
<div className="">
<div className="text-slate-400 mb-1 font-sans">
                              Location
                            </div>
<select className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-slate-400 font-sans">
<option>United States</option>
<option>Canada</option>
<option>United Kingdom</option>
<option>Global</option>
</select>
</div>
<div className="">
<div className="text-slate-400 mb-1 font-sans">
                              Industry
                            </div>
<select className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-slate-400 font-sans">
<option>Technology</option>
<option>Healthcare</option>
<option>Finance</option>
<option>Education</option>
</select>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-sans">Schedule</span>
<button className="text-[10px] text-blue-400 hover:text-blue-300 font-sans">
                            Edit
                          </button>
</div>
<div className="space-y-2 text-[10px]">
<div className="flex justify-between">
<span className="text-slate-400 font-sans">
                              Start Date:
                            </span>
<span className="text-slate-300 font-sans">
                              Jun 1, 2025
                            </span>
</div>
<div className="flex justify-between">
<span className="text-slate-400 font-sans">
                              End Date:
                            </span>
<span className="text-slate-300 font-sans">
                              Aug 31, 2025
                            </span>
</div>
<div className="flex justify-between">
<span className="text-slate-400 font-sans">
                              Duration:
                            </span>
<span className="text-slate-300 font-sans">
                              92 days
                            </span>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-sans">
                            Budget Control
                          </span>
<span className="rounded-md px-2 py-0.5 text-[10px] font-sans bg-blue-500/20 text-blue-400">
                            On Track
                          </span>
</div>
<div className="space-y-2">
<div className="space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-300 font-sans">
                                Daily Limit
                              </span>
<span className="text-slate-400 font-sans text-[10px]">
                                $850
                              </span>
</div>
<div className="h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-2 bg-blue-500 rounded-full" style={{width: '68%'}}></div>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-300 font-sans">
                                Total Budget
                              </span>
<span className="text-slate-400 font-sans text-[10px]">
                                $25,000
                              </span>
</div>
<div className="h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{width: '74%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-2">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-sans">Alerts</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400 font-sans">
                            3
                          </span>
</div>
<div className="space-y-2 text-[11px]">
<div className="flex items-center gap-2 p-2 rounded border bg-blue-500/10 border-blue-500/20">
<svg className="w-3 h-3 flex-shrink-0 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-slate-300 font-sans text-[10px]">
                              ROI exceeded target by 15%
                            </span>
</div>
<div className="flex items-center gap-2 p-2 bg-blue-500/10 rounded border border-blue-500/20">
<svg className="w-3 h-3 text-blue-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
<span className="text-slate-300 font-sans text-[10px]">
                              Peak engagement at 2-4PM
                            </span>
</div>
<div className="flex items-center gap-2 p-2 bg-orange-500/10 rounded border border-orange-500/20">
<svg className="w-3 h-3 text-orange-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
<line x1="12" x2="12" y1="9" y2="13"></line>
<line x1="12" x2="12.01" y1="17" y2="17"></line>
</svg>
<span className="text-slate-300 font-sans text-[10px]">
                              Budget 75% consumed
                            </span>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-2">
<div className="mb-2 text-xs">
<span className="text-slate-300 font-sans">
                            Quick Actions
                          </span>
</div>
<div className="space-y-2 text-[10px]">
<div className="flex items-center justify-between">
<span className="text-slate-400 font-sans">
                              Auto-optimize
                            </span>
<button className="w-8 h-4 bg-blue-600 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400 font-sans">
                              Email notifications
                            </span>
<button className="w-8 h-4 bg-blue-600 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400 font-sans">
                              Pause on limit
                            </span>
<button className="w-8 h-4 bg-white/10 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5 transition-transform"></div>
</button>
</div>
</div>
</div>
</div>

<div className="mt-4 flex gap-2">
<button className="flex-1 hover:bg-blue-500 text-xs font-medium text-white bg-blue-600 rounded pt-2 pr-3 pb-2 pl-3">
                        Save Changes
                      </button>
<button className="px-3 py-2 bg-white/5 text-slate-300 rounded text-xs font-medium border border-white/10 hover:bg-white/10 font-sans">
                        Reset
                      </button>
</div>
</aside>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 pt-24 pb-24"></section>
<section className="lg:py-32 pt-24 pb-24">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">

<section className="relative">
<div className="md:mb-16 grid md:grid-cols-12 mb-16 gap-x-6 gap-y-6 items-end">

<div className="md:col-span-8 space-y-4">

<div className="inline-flex text-[13px] [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll font-medium gap-x-2 gap-y-2 items-center">
<span className="tabular-nums text-[20px] leading-none text-blue-300/80">01</span>
<span className="text-blue-300/40">/</span>
<span className="uppercase tracking-widest text-[11px] text-blue-200/90">Changelog</span>
</div>

<h2 className="sm:text-5xl lg:text-6xl [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-4xl font-light text-white tracking-tight">
        Shipping fast, improving daily.
      </h2>

<p className="sm:text-base [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-sm text-zinc-400 max-w-2xl">
        We release updates every week—from tiny polish to big features—so your experience keeps getting better without the wait.
      </p>

<div className="sm:hidden pt-2">
<a className="inline-flex h-11 items-center rounded-full bg-white text-neutral-900 px-5 text-[15px] font-medium shadow-sm ring-1 ring-white/10 hover:bg-white/90" href="#">
          View all changelogs
        </a>
</div>
</div>

<div className="md:col-span-4 flex md:justify-end [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="hidden sm:flex gap-x-3 gap-y-3 items-center">
<a className="inline-flex h-11 items-center rounded-full bg-white text-neutral-900 px-5 text-[15px] font-medium shadow-sm ring-1 ring-white/10 hover:bg-white/90" href="#">
          View all changelogs
        </a>
<a className="inline-flex h-11 items-center rounded-full px-5 text-[15px] font-medium text-white ring-1 ring-white/15 hover:bg-white/5" href="#">
          Get updates
        </a>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

<article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition backdrop-blur">
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll pt-5 pr-5 pb-5 pl-5">
<div className="relative aspect-square rounded-xl border border-white/10 bg-black/40 overflow-hidden">
<img alt="Fuse — Multi-Agent Layer (Beta)" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/30dd5951-eeb5-4b75-ab70-4c9de46effb5_800w.webp" style={{filter: 'grayscale(100%)'}}/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
</div>
<div className="mt-4 text-[11px] uppercase tracking-wide text-white/50 font-medium">
                  May 6, 2025
                </div>
<h3 className="mt-2 text-xl font-medium tracking-tight text-white">
                  Fuse — Multi-Agent Layer (Beta)
                </h3>
<p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Coordinate multiple AI agents seamlessly with our new
                  orchestration layer for complex workflows.
                </p>
</div>
</article>

<article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition backdrop-blur">
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll pt-5 pr-5 pb-5 pl-5">
<div className="relative aspect-square rounded-xl border border-white/10 bg-black/40 overflow-hidden">
<img alt="Low-Latency Mode for Inference API" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fa91f7af-c0ee-487e-9b71-34905a5f7414_800w.webp" style={{filter: 'grayscale(100%)'}}/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
</div>
<div className="mt-4 text-[11px] uppercase tracking-wide text-white/50 font-medium">
                  Apr 29, 2025
                </div>
<h3 className="mt-2 text-xl font-medium tracking-tight text-white">
                  Low-Latency Mode for Inference API
                </h3>
<p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Experience 40% faster response times with our optimized
                  inference pipeline for real-time applications.
                </p>
</div>
</article>

<article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition backdrop-blur">
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.7s_both] animate-on-scroll pt-5 pr-5 pb-5 pl-5">
<div className="relative aspect-square rounded-xl border border-white/10 bg-black/40 overflow-hidden">
<img alt="Code Interpreter — Run Python in Chat" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/05c76ddb-2184-4dd8-8e7d-3465ddde84ea_800w.webp" style={{filter: 'grayscale(100%)'}}/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
</div>
<div className="mt-4 text-[11px] uppercase tracking-wide text-white/50 font-medium">
                  Apr 1, 2025
                </div>
<h3 className="mt-2 text-xl font-medium tracking-tight text-white">
                  Code Interpreter — Run Python in Chat
                </h3>
<p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Execute Python code directly in conversations with secure
                  sandboxing and instant visualization support.
                </p>
</div>
</article>
</div>

<div className="mt-8 sm:hidden">
<a className="inline-flex h-11 items-center rounded-full bg-white text-neutral-900 px-5 text-[15px] font-medium shadow-sm ring-1 ring-white/10 hover:bg-white/90 w-full justify-center" href="#">
              View all changelogs
            </a>
</div>
</div>
</section>
<section className="lg:py-32 pt-24 pb-24">
<div className="lg:px-8 max-w-7xl mx-auto px-6">

<section className="relative">
<div className="md:mb-16 grid md:grid-cols-12 mb-16 gap-x-6 gap-y-6 items-end">

<div className="md:col-span-8 space-y-4">

<div className="inline-flex text-[13px] [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll font-medium gap-x-2 gap-y-2 items-center">
<span className="tabular-nums text-[20px] leading-none text-blue-300/80">02</span>
<span className="text-blue-300/40">/</span>
<span className="uppercase text-[11px] tracking-widest text-blue-200/90">WHY US</span>
</div>

<h2 className="sm:text-5xl lg:text-6xl [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-4xl font-light text-white tracking-tight">Everything you need to launch in days, not weeks</h2>

<p className="sm:text-base [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-sm text-zinc-400 max-w-2xl">
        We release updates every week—from tiny polish to big features—so your experience keeps getting better without the wait.
      </p>

<div className="sm:hidden pt-2">
<a className="inline-flex h-11 items-center rounded-full bg-white text-neutral-900 px-5 text-[15px] font-medium shadow-sm ring-1 ring-white/10 hover:bg-white/90" href="#">
          View all changelogs
        </a>
</div>
</div>

<div className="md:col-span-4 flex md:justify-end [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="hidden sm:flex items-center gap-3">
<a className="inline-flex items-center text-[15px] hover:bg-white/90 font-medium text-neutral-900 bg-white h-11 rounded-full ring-white/10 ring-1 pr-5 pl-5 shadow-sm" href="#">Start for free</a>
<a className="inline-flex items-center text-[15px] hover:bg-white/5 font-medium text-white h-11 rounded-full ring-white/15 ring-1 pr-5 pl-5" href="#">Learn more</a>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-12 auto-rows-fr [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll gap-x-6 gap-y-6 items-stretch">

<div className="md:col-span-3 grid grid-rows-3 auto-rows-fr [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll h-full gap-x-6 gap-y-6">
<article className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition backdrop-blur p-5 h-full">
<div className="flex gap-3 items-start h-full">
<div className="flex-1">
<h3 className="text-white text-lg font-medium tracking-tight">
                      High Conversions
                    </h3>
<p className="mt-1 text-sm text-white/60 leading-relaxed">
                      Get more sales with a page that builds trust fast.
                    </p>
</div>
</div>
</article>
<article className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition backdrop-blur p-5 h-full">
<div className="flex items-start gap-3 h-full">
<div className="flex-1">
<h3 className="text-white text-lg font-medium tracking-tight">
                      Brand Consistency
                    </h3>
<p className="mt-1 text-sm text-white/60 leading-relaxed">
                      Easily match your brand in minutes.
                    </p>
</div>
</div>
</article>
<article className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition backdrop-blur p-5 h-full">
<div className="flex items-start gap-3 h-full">
<div className="flex-1">
<h3 className="text-white text-lg font-medium tracking-tight">
                      Flexible Content
                    </h3>
<p className="mt-1 text-sm text-white/60 leading-relaxed">
                      Swap sections and layouts with drag-and-drop ease.
                    </p>
</div>
</div>
</article>
</div>

<section className="md:col-span-6 flex md:py-14 self-stretch [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll py-14 items-stretch justify-center">
<div className="relative w-full h-full">

<div className="absolute -top-14 -right-4 sm:w-[280px] bg-[#1C1C1E] border border-white/10 rounded-xl shadow-lg p-4 z-20">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex items-center justify-center w-8 h-8 rounded-lg ring-1 shrink-0 bg-blue-500/10 ring-blue-500/20">
<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<button aria-label="Dismiss" className="text-white/70 hover:text-white transition-colors p-1 -mr-1 rounded-md">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="mt-3">
<h4 className="text-white text-base font-semibold tracking-tight">
          Funo Design System
        </h4>
<p className="text-slate-300 text-sm mt-1">
          Built with modern components and best practices for your brand.
        </p>
</div>
<div className="absolute right-6 -bottom-2 w-4 h-4 rotate-45 bg-[#1C1C1E] border-r border-b border-white/10"></div>
</div>

<div className="group overflow-hidden transition-all duration-500 bg-[#0F0F11] border-white/10 border ring-white/5 ring-1 rounded-2xl relative h-full flex hover:border-blue-500/40 hover:ring-blue-500/30">
<div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full blur-3xl transition-all duration-700 group-hover:scale-110 bg-blue-500/10"></div>
<div className="flex-1 flex flex-col pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-4 items-start justify-between">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/5 ring-1 ring-white/10 rounded-lg px-2.5 py-1">
<div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
            Brand System
          </span>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span className="text-xs text-slate-400">Active</span>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">
          Modern Design Components
        </h3>
<p className="leading-relaxed text-sm text-slate-300 mb-4">
          Pre-built components ready to use. Consistent styling, responsive layouts, and seamless integration with your brand identity.
        </p>

<div className="bg-[#1C1C1E] rounded-xl p-4 mb-4 ring-1 ring-white/10 flex-1">
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center ring-1 bg-blue-500/20 ring-blue-500/30">
<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
</div>
<div className="">
<div className="text-white text-sm font-medium">Component Library</div>
<div className="text-slate-400 text-xs">50+ ready-to-use blocks</div>
</div>
</div>
<div className="text-xs font-medium text-blue-400">Active</div>
</div>
<div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center ring-1 ring-blue-500/30">
<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 3v18"></path>
</svg>
</div>
<div>
<div className="text-white text-sm font-medium">Responsive Grid</div>
<div className="text-slate-400 text-xs">Mobile-first approach</div>
</div>
</div>
<div className="text-blue-400 text-xs font-medium">Ready</div>
</div>
<div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center ring-1 ring-purple-500/30">
<svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M2 12h20"></path>
</svg>
</div>
<div>
<div className="text-white text-sm font-medium">Design Tokens</div>
<div className="text-slate-400 text-xs">Consistent theming</div>
</div>
</div>
<div className="text-purple-400 text-xs font-medium">Setup</div>
</div>
</div>
</div>

<div className="mt-auto flex items-center gap-2">
<button className="flex-1 transition-colors flex text-sm font-medium text-white bg-blue-600 h-11 rounded-lg items-center justify-center hover:bg-blue-700">
            Explore Components
          </button>
<button className="bg-white/5 hover:bg-white/10 transition-colors w-11 h-11 rounded-lg flex items-center justify-center ring-1 ring-white/10">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
</div>
</div>
</div>
</div>
</section>

<div className="md:col-span-3 grid grid-rows-3 auto-rows-fr [animation:fadeSlideIn_0.8s_ease-out_0.7s_both] animate-on-scroll h-full gap-x-6 gap-y-6">
<article className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition backdrop-blur p-5 h-full">
<div className="flex items-start gap-3 h-full">
<div className="flex-1">
<h3 className="text-white text-lg font-medium tracking-tight">
                      Fast Launch
                    </h3>
<p className="mt-1 text-sm text-white/60 leading-relaxed">
                      Go live in days, not weeks. No delays, no devs.
                    </p>
</div>
</div>
</article>
<article className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition backdrop-blur p-5 h-full">
<div className="flex items-start gap-3 h-full">
<div className="flex-1">
<h3 className="text-white text-lg font-medium tracking-tight">
                      Perfect everywhere
                    </h3>
<p className="mt-1 text-sm text-white/60 leading-relaxed">
                      Pixel-perfect across desktop, tablet, and mobile.
                    </p>
</div>
</div>
</article>
<article className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition backdrop-blur p-5 h-full">
<div className="flex items-start gap-3 h-full">
<div className="flex-1">
<h3 className="text-white text-lg font-medium tracking-tight">
                      No Code Needed
                    </h3>
<p className="mt-1 text-sm text-white/60 leading-relaxed">
                      Zero tech stress — just plug, tweak, and publish.
                    </p>
</div>
</div>
</article>
</div>
</div>

<div className="mt-8 sm:hidden">
<a className="inline-flex h-11 items-center rounded-full bg-white text-neutral-900 px-5 text-[15px] font-medium shadow-sm ring-1 ring-white/10 hover:bg-white/90 w-full justify-center" href="#">
              Get started
            </a>
</div>
</div>
</section>
<section className="lg:py-32 pt-24 pb-24">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<section className="relative">
<div className="md:mb-16 grid md:grid-cols-12 mb-16 gap-x-6 gap-y-6 items-end">

<div className="md:col-span-8 space-y-4">

<div className="inline-flex text-[13px] [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll font-medium gap-x-2 gap-y-2 items-center">
<span className="tabular-nums text-[20px] leading-none text-blue-300/80">03</span>
<span className="text-blue-300/40">/</span>
<span className="uppercase text-[11px] tracking-widest text-blue-200/90">FAQ</span>
</div>

<h2 className="sm:text-5xl lg:text-6xl [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-4xl font-light text-white tracking-tight">Answers to your most common questions</h2>

<p className="sm:text-base [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-sm text-zinc-400 max-w-2xl">Everything you need to know to get started, manage your account, and get support quickly.</p>

<div className="sm:hidden pt-2">
<a className="inline-flex h-11 items-center rounded-full bg-white text-neutral-900 px-5 text-[15px] font-medium shadow-sm ring-1 ring-white/10 hover:bg-white/90" href="#">
          View all changelogs
        </a>
</div>
</div>

<div className="md:col-span-4 flex md:justify-end [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="hidden sm:flex items-center gap-3">
<a className="inline-flex items-center text-[15px] hover:bg-white/90 font-medium text-neutral-900 bg-white h-11 ring-white/10 ring-1 rounded-full pr-5 pl-5 shadow-sm" href="#">Visit help center</a>
<a className="inline-flex items-center text-[15px] hover:bg-white/5 font-medium text-white h-11 rounded-full ring-white/15 ring-1 pr-5 pl-5" href="#">Contact support</a>
</div>
</div>
</div>
</section>

<div className="grid md:grid-cols-12 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll gap-x-6 gap-y-6 items-stretch">

<div className="md:col-span-7">
<div className="divide-y divide-white/10">

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll pt-6 pb-6">
<div className="text-[11px] uppercase font-medium text-neutral-500/80 tracking-wide">
          General
        </div>
<button className="faq-toggle group mt-2 flex items-center justify-between w-full text-left" data-faq="faq-1">
<h3 className="text-white text-2xl sm:text-3xl font-light tracking-tight">
            How do I get started with your platform?
          </h3>
<span className="ml-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 group-hover:bg-white/10 transition-all duration-300 faq-arrow text-blue-300">
<svg className="text-neutral-50 w-[20px] h-[20px] transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</span>
</button>
<div className="faq-answer overflow-hidden transition-all duration-300" data-answer="faq-1" style={{maxHeight: '0', opacity: '0'}}>
<div className="pt-4 pb-2 px-4 mt-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
<p className="text-white/70 text-base leading-relaxed">
              Getting started is simple! Sign up for a free account, explore our intuitive dashboard, and follow our step-by-step onboarding guide. You can launch your first project in just a few minutes, and our support team is always available to help you along the way.
            </p>
</div>
</div>
</div>

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll pt-6 pb-6">
<div className="text-[11px] uppercase font-medium text-neutral-500/80 tracking-wide">
          Pricing
        </div>
<button className="faq-toggle group mt-2 flex items-center justify-between w-full text-left" data-faq="faq-2">
<h3 className="text-white text-2xl sm:text-3xl font-light tracking-tight">
            What are your pricing plans and features?
          </h3>
<span className="ml-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 group-hover:bg-white/10 transition-all duration-300 faq-arrow text-blue-300">
<svg className="text-neutral-50 w-[20px] h-[20px] transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</span>
</button>
<div className="faq-answer overflow-hidden transition-all duration-300" data-answer="faq-2" style={{maxHeight: '0', opacity: '0'}}>
<div className="pt-4 pb-2 px-4 mt-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
<p className="text-white/70 text-base leading-relaxed">
              We offer flexible pricing plans to suit businesses of all sizes. Our Starter plan includes essential features, Pro adds advanced analytics and priority support, and Enterprise provides custom solutions with dedicated account management. All plans include unlimited projects, real-time collaboration, and 24/7 customer support.
            </p>
</div>
</div>
</div>

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.7s_both] animate-on-scroll pt-6 pb-6">
<div className="text-[11px] uppercase font-medium text-neutral-500/80 tracking-wide">
          Support
        </div>
<button className="faq-toggle group mt-2 flex items-center justify-between w-full text-left" data-faq="faq-3">
<h3 className="text-white text-2xl sm:text-3xl font-light tracking-tight">
            How can I contact customer support?
          </h3>
<span className="ml-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 group-hover:bg-white/10 transition-all duration-300 faq-arrow text-blue-300">
<svg className="w-[20px] h-[20px] text-neutral-50 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</span>
</button>
<div className="faq-answer overflow-hidden transition-all duration-300" data-answer="faq-3" style={{maxHeight: '0', opacity: '0'}}>
<div className="pt-4 pb-2 px-4 mt-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
<p className="text-white/70 text-base leading-relaxed">
              Our support team is available 24/7 via live chat, email at support@funo.studio, or through our help center. Premium and Enterprise customers also have access to phone support and dedicated account managers. We typically respond within 2 hours during business hours.
            </p>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-5 [animation:fadeSlideIn_0.8s_ease-out_0.8s_both] animate-on-scroll">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] ring-1 ring-white/10">
<div className="absolute inset-0" style="background:
          radial-gradient(90% 80% at 100% 0%, rgba(16,185,129,0.18) 0%, rgba(0,0,0,0) 60%),
          linear-gradient(120deg, rgba(16,185,129,0.08) 0%, rgba(0,0,0,0) 40%);
          mix-blend: screen;"></div>
<div className="relative z-10" style={{aspectRatio: '16 / 10'}}>
<div className="relative flex-1 h-full">
<img alt="FAQ preview" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{filter: 'saturate(0.9) contrast(1.05)'}}/>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10"></div>
</div>
</div>

</div>

<div className="mt-8 sm:hidden">
<a className="inline-flex h-11 items-center rounded-full bg-white/5 px-5 text-[15px] font-medium shadow-sm ring-1 ring-white/10 hover:bg-white/10 w-full justify-center text-blue-300" href="#">
              View all FAQs
            </a>
</div>

</div>
</section>
</main>

<footer className="lg:px-8 lg:pb-8 max-w-7xl mr-auto ml-auto pr-6 pb-8 pl-6 relative">
<div className="border-t border-white/10 pt-8">
<div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4">
<h2 className="sm:text-5xl lg:text-6xl [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-4xl font-light text-white tracking-tight">
            Let's talk.
          </h2>
<a className="sm:text-5xl lg:text-6xl [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-4xl font-light text-white tracking-tight" href="/mailto:hello@funo.studio">
            hello@etery.studio
          </a>
</div>
<div className="mt-8 border-t border-white/10"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 text-sm">

<div className="md:col-span-4 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-white/70 space-y-2">
<div className="flex gap-2 text-blue-300 gap-x-2 gap-y-2 items-center">
<span className="">2025 Funo</span>
</div>
<a className="hover:text-white font-sans" href="mailto:hello@etery.studio">
              hello@etery.studio
            </a>
<div className="font-sans">
              Local time:
              <span className="font-medium text-neutral-50" id="eteryLocalTime">09:58:38 (EDT)</span>
</div>
</div>

<div className="md:col-span-4 grid grid-cols-2 gap-4">
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll space-y-2">
<a className="block hover:text-white font-sans" href="#">Process</a>
<a className="block hover:text-white font-sans" href="#">Services</a>
<a className="block hover:text-white font-sans" href="#">Work</a>
<a className="block hover:text-white font-sans" href="#">Plans</a>
<a className="block hover:text-white font-sans" href="#">Team</a>
<a className="block hover:text-white inline-flex items-center gap-1 font-sans" href="#">
                Contact
                <svg className="lucide lucide-arrow-up-right w-3.5 h-3.5 text-blue-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll space-y-2">
<a className="block hover:text-white font-sans" href="#">LinkedIn</a>
<a className="block hover:text-white font-sans" href="#">Twitter</a>
<a className="block hover:text-white font-sans" href="#">Instagram</a>
<a className="block hover:text-white font-sans" href="#">Dribbble</a>
</div>
</div>

<div className="md:col-span-4 [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll text-white/60">
<div className="space-y-1">
<div className="">Built by the Funo team</div>
<div className="font-sans">Modern products, shipped fast.</div>
</div>
</div>
</div>
</div>

</footer>





    </>
  );
}
