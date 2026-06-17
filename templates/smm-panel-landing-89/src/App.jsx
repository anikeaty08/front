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
    


    document.addEventListener("DOMContentLoaded", function () {
      // Auto year
      var y = document.getElementById("year-span");
      if (y) y.textContent = new Date().getFullYear();

      // FAQ accordion
      const toggles = document.querySelectorAll(".faq-toggle");
      toggles.forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-faq");
          const answer = document.querySelector('[data-answer="' + id + '"]');
          const icon = btn.querySelector("svg");

          if (!answer) return;

          const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

          if (isOpen) {
            answer.style.maxHeight = "0px";
            answer.style.opacity = "0";
            if (icon) icon.style.transform = "rotate(0deg)";
          } else {
            // Close others
            document.querySelectorAll(".faq-answer").forEach((el) => {
              el.style.maxHeight = "0px";
              el.style.opacity = "0";
            });
            document.querySelectorAll(".faq-toggle svg").forEach((svg) => {
              svg.style.transform = "rotate(0deg)";
            });

            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.style.opacity = "1";
            if (icon) icon.style.transform = "rotate(90deg)";
          }
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
      

<div className="aura-background-component fixed w-full h-screen top-0" data-alpha-mask="80">
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="xn4ynXWNBCfIsAdzGYbT"></div>

</div>

<div className="pointer-events-none fixed -z-10 top-0 right-0 bottom-0 left-0">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<header className="sticky [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] bg-white/5 h-20 z-50 border-white/10 border-b top-0 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-2xl">
<div className="flex gap-3 lg:px-8 h-full max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-3 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both]" href="https://www.fanmade.pro">
<span className="relative inline-flex h-6 w-6">
<span className="absolute inset-0 -rotate-45">
<span className="block h-[42%] w-full rounded bg-fuchsia-400/90"></span>
<span className="mt-[14%] block h-[42%] w-full rounded bg-indigo-400/80"></span>
</span>
</span>
<span className="text-xl font-semibold tracking-tight text-white">fanmade.pro</span>
</a>

<div className="hidden lg:flex flex-1 justify-center">
<div className="hidden md:flex md:py-2 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] items-center gap-x-1">
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" href="#features">Features</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" href="#services">Services</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" href="#analytics">Dashboard</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" href="#pricing">Pricing</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" href="#faq">FAQ</a>
</div>
</div>

<div className="flex [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] gap-x-2 items-center">
<a className="hidden lg:inline-flex items-center text-sm text-gray-200 hover:text-white px-3 py-2 rounded-full hover:bg-white/10 transition" href="https://www.fanmade.pro/auth/login">
          Log in
        </a>
<a className="hidden lg:inline-flex group items-center text-[15px] transition hover:ring-white/20 font-medium text-white bg-neutral-900/80 h-11 ring-white/10 ring-1 rounded-full pr-5 pl-14 relative backdrop-blur-sm" href="https://www.fanmade.pro/auth/signup">
<span className="pointer-events-none absolute left-1.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full ring-1 ring-white/20 transition overflow-hidden" style="
            background:
              radial-gradient(circle at 50% 50%, rgba(244, 114, 182, 1) 0%, rgba(244, 114, 182, 0.25) 40%, rgba(124, 58, 237, 0) 70%),
              linear-gradient(135deg, #ec4899 0%, #a855f7 40%, #6366f1 70%, #22d3ee 100%);
            background-size: 300% 300%;
            box-shadow:
              inset 0 -8px 14px rgba(255, 255, 255, 0.9),
              inset 0 2px 4px rgba(255, 255, 255, 0.5);
          ">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
          Start boosting
        </a>

<button aria-label="Open menu" className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>
</header>

<main>
<section className="min-h-[calc(100vh-80px)] flex relative items-center justify-center">
<div className="z-10 lg:px-8 text-center w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-5xl mr-auto ml-auto">
<h1 className="[animation:fadeSlideIn_0.8s_ease-out_0.5s_both] text-4xl sm:text-5xl lg:text-6xl lg:mt-24 lg:px-24 font-light text-white tracking-tight mt-20">
            Grow your social proof with a pro‑grade SMM panel
          </h1>
<p className="md:text-xl leading-relaxed [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] text-lg text-white/70 max-w-2xl mt-4 mr-auto ml-auto">
            fanmade.pro gives you high‑quality followers, likes, comments, views and more, across all major platforms — automated, fast and affordable.
          </p>
<div className="flex flex-wrap mt-8 gap-x-3 gap-y-3 items-center justify-center">
<a className="inline-flex items-center justify-center text-[15px] transition-all duration-500 hover:scale-105 hover:shadow-2xl [animation:fadeSlideIn_0.8s_ease-out_0.7s_both] font-medium text-white h-11 rounded-full pr-6 pl-6" href="https://www.fanmade.pro/auth/signup" style={{background: 'radial-gradient(circle, rgba(88, 28, 135, 0.95) 0%, rgba(88, 28, 135, 0) 65%), linear-gradient(135deg, #ec4899, #a855f7, #6366f1, #22d3ee)', boxShadow: 'rgba(0, 0, 0, 0.35) 0 -18px 28px inset, rgba(255, 255, 255, 0.25) 0 3px 6px inset, rgba(0, 0, 0, 0.6) 0 10px 25px', textShadow: 'rgba(0, 0, 0, 0.75) 0 1px 3px'}}>
              Get started in 60 seconds
            </a>
<a className="inline-flex items-center justify-center text-[15px] transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] [animation:fadeSlideIn_0.8s_ease-out_0.8s_both] font-medium text-white bg-white/10 h-11 rounded-full ring-white/20 ring-1 pr-6 pl-6" href="#services">
              Browse services
            </a>
</div>

<div className="-mb-8 md:px-6 md:pt-24 [animation:fadeSlideIn_0.8s_ease-out_0.8s_both] animate-on-scroll animate origin-top max-w-7xl mr-auto ml-auto pt-24 pr-4 pl-4 scale-75">
<div className="relative w-full overflow-hidden bg-white/[0.04] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl" id="analytics">

<div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="h-3 w-3 rounded-full bg-rose-500/80"></span>
<span className="h-3 w-3 rounded-full bg-amber-400/80"></span>
<span className="h-3 w-3 rounded-full bg-emerald-500/80"></span>
<span className="ml-3 text-[11px] uppercase tracking-wide text-white/50">
                    Live orders overview
                  </span>
</div>
<div className="flex items-center gap-2 text-[11px] text-slate-400">
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
<span>99.8% uptime</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden md:block md:col-span-3 bg-black/40 border-white/10 border-r pt-3 pr-3 pb-3 pl-3" id="services">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">
<svg className="h-3.5 w-3.5 text-fuchsia-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m7 10 5 5 10-10"></path>
<path d="M2 20l5-5"></path>
</svg>
                      Top services
                    </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
</div>
<div className="flex flex-col text-slate-300 h-[520px] space-y-4">

<div className="flex gap-1 mb-3">
<button className="px-2 py-1 text-xs bg-fuchsia-600 text-white rounded">
                        All
                      </button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded">
                        Instagram
                      </button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded">
                        TikTok
                      </button>
</div>

<div className="bg-white/5 rounded-lg p-2 flex-1">
<div className="text-xs text-slate-400 mb-2">
                        Popular today
                      </div>
<ul className="space-y-1 text-xs">
<li className="flex items-center gap-2 rounded-md bg-fuchsia-500/20 px-2 py-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                          IG Followers — HQ
                          <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-emerald-400">
                              1.2M delivered
                            </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                          TikTok Views — Turbo
                          <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-sky-300">
                              40K/min
                            </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                          YouTube Likes — Real
                          <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-rose-300">
                              98% retention
                            </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                          Threads Comments
                          <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-amber-300">
                              Custom text
                            </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 opacity-70">
<div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                          Twitter / X Followers
                          <div className="ml-auto">
<span className="text-[9px] text-slate-400">
                              Refill enabled
                            </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                          Spotify Plays
                          <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-emerald-300">
                              0.5s start
                            </span>
</div>
</li>
</ul>
</div>

<div className="bg-white/5 rounded-lg p-2 mt-3">
<div className="mb-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-fuchsia-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M7 14l4-4 3 3 5-7"></path>
</svg>
<span className="text-xs font-medium">
                            Panel stats
                          </span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-3 h-2 rounded-sm bg-emerald-500"></div>
<span className="text-slate-300 text-[10px]">
                            Average start time
                          </span>
<div className="ml-auto text-[10px] text-emerald-400">
                            0–2 min
                          </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-4 h-2 bg-sky-500 rounded-sm"></div>
<span className="text-slate-300 text-[10px]">
                            Orders today
                          </span>
<div className="ml-auto text-[10px] text-sky-300">
                            8,437
                          </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-5 h-2 bg-fuchsia-500 rounded-sm"></div>
<span className="text-slate-300 text-[10px]">
                            Success rate
                          </span>
<div className="ml-auto text-[10px] text-fuchsia-300">
                            99.2%
                          </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-3 h-2 bg-amber-400 rounded-sm"></div>
<span className="text-slate-300 text-[10px]">
                            Average refill time
                          </span>
<div className="ml-auto text-[10px] text-amber-300">
                            &lt; 24h
                          </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-4 h-2 bg-indigo-400 rounded-sm"></div>
<span className="text-slate-300 text-[10px]">
                            Active services
                          </span>
<div className="ml-auto text-[10px] text-slate-300">
                            250+
                          </div>
</div>
</div>
</div>
</div>
</div></aside>

<main className="relative md:col-span-6 bg-black/20">
<div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs text-slate-300">
<span>Orders dashboard</span>
<div className="text-slate-500">•</div>
<span className="text-slate-400">Last 24 hours</span>
<div className="ml-auto flex items-center gap-1">
<div className="text-xs text-slate-400">
                        Auto‑processing
                      </div>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10">
<svg className="h-4 w-4 text-slate-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 1 1-9-9c2.5 0 4.93 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
</svg>
</button>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-2 bg-black/10 border-white/10 border-b pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<div className="flex items-center gap-2 w-full sm:w-auto">
<button className="p-1 rounded border border-white/10 bg-fuchsia-600 text-white hover:bg-fuchsia-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M7 14l4-4 3 3 5-7"></path>
</svg>
</button>
<button className="p-1 rounded border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4"></path>
<path d="M8 2v4"></path>
<path d="M3 10h18"></path>
</svg>
</button>
<div className="h-4 w-px bg-white/10"></div>
<div className="flex items-center gap-1 flex-1">
<span className="text-xs text-slate-400">Period:</span>
<button className="inline-flex items-center justify-center px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-300 hover:bg-white/10 whitespace-nowrap">
                          Last 7 days
                        </button>
<button className="sm:hidden p-1 rounded border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 ml-auto">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16"></path>
<path d="M4 6h16"></path>
<path d="M4 18h16"></path>
</svg>
</button>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-300 hover:bg-white/10">
                        Overview
                      </button>
<button className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10">
                        Orders
                      </button>
<button className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10">
                        Payments
                      </button>
</div>
</div>
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4">
<div className="overflow-hidden min-h-[400px] grid grid-rows-[auto,1fr,auto] sm:min-h-[450px] gap-x-4 gap-y-4">

<div className="grid grid-cols-2 gap-3">
<div className="xl:bg-black/10 bg-black/40 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">
                              Total orders
                            </span>
</div>
<div className="text-2xl font-semibold text-white">
                            128,940
                          </div>
<div className="text-xs mt-1 text-emerald-400">
                            +19.4% vs. last week
                          </div>
</div>
<div className="xl:bg-black/10 bg-black/40 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">
                              Processed volume
                            </span>
</div>
<div className="text-2xl font-semibold text-white">
                            $34.2K
                          </div>
<div className="text-xs mt-1 text-emerald-400">
                            +27.8% vs. last week
                          </div>
</div>
</div>

<div className="min-h-0 xl:bg-black/10 bg-black/40 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-white">
                            Daily order flow
                          </h3>
<span className="text-xs text-slate-400">
                            Completed orders
                          </span>
</div>
<div className="relative h-32 sm:h-40">
<div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 h-full">
<div className="flex-1 bg-fuchsia-500/70 rounded-t" style={{height: '52%'}}></div>
<div className="flex-1 bg-fuchsia-500/80 rounded-t" style={{height: '64%'}}></div>
<div className="flex-1 bg-fuchsia-400 rounded-t" style={{height: '81%'}}></div>
<div className="flex-1 bg-fuchsia-300 rounded-t" style={{height: '94%'}}></div>
<div className="flex-1 bg-fuchsia-400 rounded-t" style={{height: '88%'}}></div>
<div className="flex-1 bg-fuchsia-500/80 rounded-t" style={{height: '73%'}}></div>
<div className="flex-1 bg-fuchsia-500/50 rounded-t" style={{height: '56%'}}></div>
</div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-slate-500">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
<div className="xl:bg-black/10 text-center bg-black/40 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur">
<div className="text-xl font-semibold text-emerald-400">
                            4.9/5
                          </div>
<div className="text-[10px] text-slate-400">
                            Average rating
                          </div>
</div>
<div className="xl:bg-black/10 text-center bg-black/40 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur">
<div className="text-xl font-semibold text-fuchsia-300">
                            1.5m
                          </div>
<div className="text-[10px] text-slate-400">
                            Followers delivered
                          </div>
</div>
<div className="xl:bg-black/10 text-center bg-black/40 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur">
<div className="text-xl font-semibold text-sky-300">
                            6.3m
                          </div>
<div className="text-[10px] text-slate-400">
                            Views this week
                          </div>
</div>
<div className="xl:bg-black/10 text-center bg-black/40 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur">
<div className="text-xl font-semibold text-amber-300">
                            24/7
                          </div>
<div className="text-[10px] text-slate-400">
                            Support online
                          </div>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 bg-black/30 border-white/10 border-l pt-3 pr-3 pb-3 pl-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">
<svg className="h-3.5 w-3.5 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4"></path>
<path d="M8 2v4"></path>
<path d="M3 10h18"></path>
</svg>
                      New order
                    </div>
<div className="flex gap-1">
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
</div>
<div className="space-y-3 h-[480px] overflow-y-auto">

<div className="bg-white/5 rounded-lg p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-300">
                          Choose platform
                        </span>
</div>
<div className="grid grid-cols-3 gap-2 text-[11px]">
<button className="px-2 py-1 rounded-md bg-white/10 text-white flex items-center justify-center gap-1">
                          IG
                        </button>
<button className="px-2 py-1 rounded-md bg-white/5 text-slate-300 hover:bg-white/10 flex items-center justify-center gap-1">
                          TikTok
                        </button>
<button className="px-2 py-1 rounded-md bg-white/5 text-slate-300 hover:bg-white/10 flex items-center justify-center gap-1">
                          YouTube
                        </button>
</div>
<div className="mt-3 text-[10px] text-slate-400 space-y-1">
<div className="flex justify-between">
<span>Service:</span>
<span className="text-slate-200">
                            IG Followers — HQ
                          </span>
</div>
<div className="flex justify-between">
<span>Min / Max:</span>
<span>100 / 100,000</span>
</div>
<div className="flex justify-between">
<span>Avg start:</span>
<span>0–2 min</span>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 text-xs text-slate-300">
                        Order details
                      </div>
<div className="space-y-2 text-[10px]">
<div>
<div className="text-slate-400 mb-1">
                            Link / @username
                          </div>
<input className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-slate-200 placeholder:text-slate-500" placeholder="Paste post link or handle" type="text"/>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-slate-400">
                              Quantity
                            </span>
<span className="text-slate-400">
                              1,000
                            </span>
</div>
<input className="flex-1 h-1 bg-white/10 rounded-full appearance-none" max="100000" min="100" type="range" value="1000"/>
<div className="flex justify-between mt-1 text-[10px] text-slate-500">
<span>100</span>
<span>100K</span>
</div>
</div>
<div className="flex justify-between">
<span className="text-slate-400">
                            Estimated price
                          </span>
<span className="text-slate-200">
                            $3.40
                          </span>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300">
                          Safety &amp; refill
                        </span>
<span className="rounded-md px-2 py-0.5 text-[10px] bg-emerald-500/20 text-emerald-300">
                          Recommended
                        </span>
</div>
<div className="space-y-2 text-[10px]">
<div className="flex items-center justify-between">
<span className="text-slate-400">
                            Drip‑feed
                          </span>
<button className="w-8 h-4 bg-emerald-500 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400">
                            Auto‑refill
                          </span>
<button className="w-8 h-4 bg-emerald-500 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400">
                            Instant mode
                          </span>
<button className="w-8 h-4 bg-white/10 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5"></div>
</button>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-2">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300">Service notes</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">
                          Updated
                        </span>
</div>
<div className="space-y-2 text-[11px]">
<div className="flex items-center gap-2 p-2 rounded border bg-emerald-500/10 border-emerald-500/20">
<svg className="w-3 h-3 flex-shrink-0 text-emerald-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-slate-200 text-[10px]">
                            Safe for main accounts when used with drip‑feed.
                          </span>
</div>
<div className="flex items-center gap-2 p-2 bg-sky-500/10 rounded border border-sky-500/20">
<svg className="w-3 h-3 text-sky-300 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
<span className="text-slate-200 text-[10px]">
                            Please keep your profile public until the order is fully delivered.
                          </span>
</div>
</div>
</div>
</div>

<div className="mt-4 flex gap-2">
<button className="flex-1 hover:bg-fuchsia-500 text-xs font-medium text-white bg-fuchsia-600 rounded pt-2 pr-3 pb-2 pl-3">
                      Place order
                    </button>
<button className="px-3 py-2 bg-white/5 text-slate-300 rounded text-xs font-medium border border-white/10 hover:bg-white/10">
                      Add to cart
                    </button>
</div>
</aside>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 pt-24 pb-24" id="features"></section>
<section className="lg:py-32 pt-24 pb-24">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">

<section className="relative">
<div className="md:mb-16 grid md:grid-cols-12 mb-16 gap-x-6 gap-y-6 items-end">
<div className="md:col-span-8 space-y-4">
<div className="inline-flex text-[13px] [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll font-medium gap-x-2 items-center">
<span className="tabular-nums text-[20px] leading-none text-fuchsia-300/80">01</span>
<span className="text-fuchsia-300/40">/</span>
<span className="uppercase tracking-widest text-[11px] text-fuchsia-200/90">Updates</span>
</div>
<h2 className="sm:text-4xl lg:text-5xl [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-3xl font-light text-white tracking-tight">
                Always adding new social platforms &amp; services.
              </h2>
<p className="sm:text-base [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-sm text-zinc-400 max-w-2xl">
                fanmade.pro is updated weekly with new SMM services, more stable providers and faster delivery, so your growth never slows down.
              </p>
<div className="sm:hidden pt-2">
<a className="inline-flex h-11 items-center rounded-full bg-white text-neutral-900 px-5 text-[15px] font-medium shadow-sm ring-1 ring-white/10 hover:bg-white/90" href="#pricing">
                  View pricing
                </a>
</div>
</div>
<div className="md:col-span-4 flex md:justify-end [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="hidden sm:flex gap-x-3 items-center">
<a className="inline-flex h-11 items-center rounded-full bg-white text-neutral-900 px-5 text-[15px] font-medium shadow-sm ring-1 ring-white/10 hover:bg-white/90" href="https://www.fanmade.pro/auth/signup">
                  Create free account
                </a>
<a className="inline-flex h-11 items-center rounded-full px-5 text-[15px] font-medium text-white ring-1 ring-white/15 hover:bg-white/5" href="#services">
                  Browse services
                </a>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
<article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition backdrop-blur">
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll pt-5 pr-5 pb-5 pl-5">
<div className="relative aspect-square rounded-xl border border-white/10 bg-black/40 overflow-hidden">
<img alt="New Instagram &amp; TikTok services" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" style={{filter: 'grayscale(0.1)'}}/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
</div>
<div className="mt-4 text-[11px] uppercase tracking-wide text-white/50 font-medium">
                May 2025
              </div>
<h3 className="mt-2 text-xl font-medium tracking-tight text-white">
                Faster Instagram &amp; TikTok boosts
              </h3>
<p className="mt-2 text-sm text-white/60 leading-relaxed">
                New providers with near‑instant start times for followers, likes, comments and views on your favorite platforms.
              </p>
</div>
</article>
<article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition backdrop-blur">
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll pt-5 pr-5 pb-5 pl-5">
<div className="relative aspect-square rounded-xl border border-white/10 bg-black/40 overflow-hidden">
<img alt="Improved order tracking" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" style={{filter: 'grayscale(0.1)'}}/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
</div>
<div className="mt-4 text-[11px] uppercase tracking-wide text-white/50 font-medium">
                April 2025
              </div>
<h3 className="mt-2 text-xl font-medium tracking-tight text-white">
                Smarter order &amp; refill tracking
              </h3>
<p className="mt-2 text-sm text-white/60 leading-relaxed">
                Follow every order from pending to completed with clear timelines, refill status and live performance stats.
              </p>
</div>
</article>
<article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition backdrop-blur">
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.7s_both] animate-on-scroll pt-5 pr-5 pb-5 pl-5">
<div className="relative aspect-square rounded-xl border border-white/10 bg-black/40 overflow-hidden">
<img alt="Team-friendly dashboards" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" style={{filter: 'grayscale(0.1)'}}/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
</div>
<div className="mt-4 text-[11px] uppercase tracking-wide text-white/50 font-medium">
                March 2025
              </div>
<h3 className="mt-2 text-xl font-medium tracking-tight text-white">
                Team‑ready panel for agencies
              </h3>
<p className="mt-2 text-sm text-white/60 leading-relaxed">
                Manage multiple clients, track their performance and keep all balances in one powerful SMM dashboard.
              </p>
</div>
</article>
</div>
<div className="mt-8 sm:hidden">
<a className="inline-flex h-11 items-center rounded-full bg-white text-neutral-900 px-5 text-[15px] font-medium shadow-sm ring-1 ring-white/10 hover:bg-white/90 w-full justify-center" href="#pricing">
            See pricing
          </a>
</div>
</div>
</section>

<section className="lg:py-32 pt-24 pb-24">
<div className="lg:px-8 max-w-7xl mx-auto px-6">
<section className="relative">
<div className="md:mb-16 grid md:grid-cols-12 mb-16 gap-x-6 gap-y-6 items-end">
<div className="md:col-span-8 space-y-4">
<div className="inline-flex text-[13px] [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll font-medium gap-x-2 items-center">
<span className="tabular-nums text-[20px] leading-none text-fuchsia-300/80">02</span>
<span className="text-fuchsia-300/40">/</span>
<span className="uppercase text-[11px] tracking-widest text-fuchsia-200/90">Why fanmade.pro</span>
</div>
<h2 className="sm:text-4xl lg:text-5xl [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-3xl font-light text-white tracking-tight">
                Everything you need to grow every profile in one place.
              </h2>
<p className="sm:text-base [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-sm text-zinc-400 max-w-2xl">
                From solo creators to agencies, fanmade.pro gives you stable services, transparent stats, and full control over every campaign.
              </p>
<div className="sm:hidden pt-2">
<a className="inline-flex h-11 items-center rounded-full bg-white text-neutral-900 px-5 text-[15px] font-medium shadow-sm ring-1 ring-white/10 hover:bg-white/90" href="https://www.fanmade.pro/auth/signup">
                  Start for free
                </a>
</div>
</div>
<div className="md:col-span-4 flex md:justify-end [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="hidden sm:flex items-center gap-3">
<a className="inline-flex items-center text-[15px] hover:bg-white/90 font-medium text-neutral-900 bg-white h-11 rounded-full ring-white/10 ring-1 pr-5 pl-5 shadow-sm" href="https://www.fanmade.pro/auth/signup">Start for free</a>
<a className="inline-flex items-center text-[15px] hover:bg-white/5 font-medium text-white h-11 rounded-full ring-white/15 ring-1 pr-5 pl-5" href="#faq">
                  View FAQ
                </a>
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
                    Realistic growth
                  </h3>
<p className="mt-1 text-sm text-white/60 leading-relaxed">
                    Quality followers, likes and views that look organic — not botted spikes that disappear overnight.
                  </p>
</div>
</div>
</article>
<article className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition backdrop-blur p-5 h-full">
<div className="flex items-start gap-3 h-full">
<div className="flex-1">
<h3 className="text-white text-lg font-medium tracking-tight">
                    Transparent pricing
                  </h3>
<p className="mt-1 text-sm text-white/60 leading-relaxed">
                    See exact min, max, speed and price before you order. No hidden fees, no guesswork.
                  </p>
</div>
</div>
</article>
<article className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition backdrop-blur p-5 h-full">
<div className="flex items-start gap-3 h-full">
<div className="flex-1">
<h3 className="text-white text-lg font-medium tracking-tight">
                    Agency‑ready tools
                  </h3>
<p className="mt-1 text-sm text-white/60 leading-relaxed">
                    Bulk orders, mass refill, and detailed reports to keep multiple clients growing at once.
                  </p>
</div>
</div>
</article>
</div>

<section className="md:col-span-6 flex md:py-14 self-stretch [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll py-14 items-stretch justify-center">
<div className="relative w-full h-full">
<div className="absolute -top-14 -right-4 sm:w-[280px] bg-[#1C1C1E] border border-white/10 rounded-xl shadow-lg p-4 z-20">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex items-center justify-center w-8 h-8 rounded-lg ring-1 shrink-0 bg-fuchsia-500/10 ring-fuchsia-500/30">
<svg className="w-5 h-5 text-fuchsia-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m7 10 5 5 10-10"></path>
<path d="M2 20l5-5"></path>
</svg>
</div>
<button aria-label="Dismiss" className="text-white/70 hover:text-white transition-colors p-1 -mr-1 rounded-md">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="mt-3">
<h4 className="text-white text-base font-semibold tracking-tight">
                    fanmade.pro panel
                  </h4>
<p className="text-slate-300 text-sm mt-1">
                    Clean, fast and built for serious creators &amp; agencies.
                  </p>
</div>
<div className="absolute right-6 -bottom-2 w-4 h-4 rotate-45 bg-[#1C1C1E] border-r border-b border-white/10"></div>
</div>
<div className="group overflow-hidden transition-all duration-500 bg-[#0F0F11] border-white/10 border ring-white/5 ring-1 rounded-2xl relative h-full flex hover:border-fuchsia-500/40 hover:ring-fuchsia-500/30">
<div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full blur-3xl transition-all duration-700 group-hover:scale-110 bg-fuchsia-500/20"></div>
<div className="flex-1 flex flex-col pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-4 items-start justify-between">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/5 ring-1 ring-white/10 rounded-lg px-2.5 py-1">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                      Live panel
                    </span>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="text-xs text-slate-400">Online</span>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">
                    Ready‑made components for SMM orders
                  </h3>
<p className="leading-relaxed text-sm text-slate-300 mb-4">
                    Search, filter, favorite and order services in seconds. No clutter, no confusion — just a clean control center for all your boosts.
                  </p>
<div className="bg-[#1C1C1E] rounded-xl p-4 mb-4 ring-1 ring-white/10 flex-1">
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center ring-1 bg-fuchsia-500/20 ring-fuchsia-500/30">
<svg className="w-5 h-5 text-fuchsia-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M7 14l4-4 3 3 5-7"></path>
</svg>
</div>
<div>
<div className="text-white text-sm font-medium">Service library</div>
<div className="text-slate-400 text-xs">250+ active services</div>
</div>
</div>
<div className="text-xs font-medium text-emerald-300">Stable</div>
</div>
<div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center ring-1 ring-sky-500/30">
<svg className="w-5 h-5 text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 3v18"></path>
</svg>
</div>
<div>
<div className="text-white text-sm font-medium">Responsive UI</div>
<div className="text-slate-400 text-xs">Works on phone, tablet &amp; desktop</div>
</div>
</div>
<div className="text-sky-300 text-xs font-medium">Smooth</div>
</div>
<div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center ring-1 ring-emerald-500/30">
<svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<div>
<div className="text-white text-sm font-medium">Saved presets</div>
<div className="text-slate-400 text-xs">Re‑order in one click</div>
</div>
</div>
<div className="text-emerald-300 text-xs font-medium">Fast</div>
</div>
</div>
</div>
<div className="mt-auto flex items-center gap-2">
<button className="flex-1 transition-colors flex text-sm font-medium text-white bg-fuchsia-600 h-11 rounded-lg items-center justify-center hover:bg-fuchsia-500">
                      Open dashboard
                    </button>
<button className="bg-white/5 hover:bg-white/10 transition-colors w-11 h-11 rounded-lg flex items-center justify-center ring-1 ring-white/10">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
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
                    Lightning‑fast panel
                  </h3>
<p className="mt-1 text-sm text-white/60 leading-relaxed">
                    Clean UI, instant search and quick actions let you place and manage orders without friction.
                  </p>
</div>
</div>
</article>
<article className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition backdrop-blur p-5 h-full">
<div className="flex items-start gap-3 h-full">
<div className="flex-1">
<h3 className="text-white text-lg font-medium tracking-tight">
                    Works on every device
                  </h3>
<p className="mt-1 text-sm text-white/60 leading-relaxed">
                    fanmade.pro is responsive and optimized for desktop, tablet and mobile — manage orders on the go.
                  </p>
</div>
</div>
</article>
<article className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition backdrop-blur p-5 h-full">
<div className="flex items-start gap-3 h-full">
<div className="flex-1">
<h3 className="text-white text-lg font-medium tracking-tight">
                    No technical skills
                  </h3>
<p className="mt-1 text-sm text-white/60 leading-relaxed">
                    Paste your link, choose quantity, confirm — that’s it. The panel handles everything in the background.
                  </p>
</div>
</div>
</article>
</div>
</div>
<div className="mt-8 sm:hidden">
<a className="inline-flex h-11 items-center rounded-full bg-white text-neutral-900 px-5 text-[15px] font-medium shadow-sm ring-1 ring-white/10 hover:bg-white/90 w-full justify-center" href="https://www.fanmade.pro/auth/signup">
            Join fanmade.pro
          </a>
</div>
</div>
</section>

<section className="lg:py-32 pt-24 pb-24" id="faq">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<section className="relative">
<div className="md:mb-16 grid md:grid-cols-12 mb-16 gap-x-6 gap-y-6 items-end">
<div className="md:col-span-8 space-y-4">
<div className="inline-flex text-[13px] [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll font-medium gap-x-2 items-center">
<span className="tabular-nums text-[20px] leading-none text-fuchsia-300/80">03</span>
<span className="text-fuchsia-300/40">/</span>
<span className="uppercase text-[11px] tracking-widest text-fuchsia-200/90">FAQ</span>
</div>
<h2 className="sm:text-4xl lg:text-5xl [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-3xl font-light text-white tracking-tight">
                Answers to your most common SMM questions.
              </h2>
<p className="sm:text-base [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-sm text-zinc-400 max-w-2xl">
                How fanmade.pro works, which platforms we support, and how we keep your accounts safe.
              </p>
<div className="sm:hidden pt-2">
<a className="inline-flex h-11 items-center rounded-full bg-white text-neutral-900 px-5 text-[15px] font-medium shadow-sm ring-1 ring-white/10 hover:bg-white/90" href="#contact">
                  Contact support
                </a>
</div>
</div>
<div className="md:col-span-4 flex md:justify-end [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="hidden sm:flex items-center gap-3">
<a className="inline-flex items-center text-[15px] hover:bg-white/90 font-medium text-neutral-900 bg-white h-11 ring-white/10 ring-1 rounded-full pr-5 pl-5 shadow-sm" href="#contact">Visit help center</a>
<a className="inline-flex items-center text-[15px] hover:bg-white/5 font-medium text-white h-11 rounded-full ring-white/15 ring-1 pr-5 pl-5" href="#contact">Contact support</a>
</div>
</div>
</div>
</section>

<div className="grid md:grid-cols-12 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll gap-x-6 gap-y-6 items-stretch">
<div className="md:col-span-7">
<div className="divide-y divide-white/10">
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll pt-6 pb-6">
<div className="text-[11px] uppercase font-medium text-neutral-500/80 tracking-wide">
                  Getting started
                </div>
<button className="faq-toggle group mt-2 flex items-center justify-between w-full text-left" data-faq="faq-1">
<h3 className="text-white text-2xl sm:text-3xl font-light tracking-tight">
                    How does fanmade.pro work?
                  </h3>
<span className="ml-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 group-hover:bg-white/10 transition-all duration-300 faq-arrow text-fuchsia-300">
<svg className="text-neutral-50 w-[20px] h-[20px] transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</span>
</button>
<div className="faq-answer overflow-hidden transition-all duration-300" data-answer="faq-1" style={{maxHeight: '0', opacity: '0'}}>
<div className="pt-4 pb-2 px-4 mt-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
<p className="text-white/70 text-base leading-relaxed">
                      Create a free account, add funds using your preferred payment method, then choose a platform and service. Paste your link or username, select a quantity, and confirm. We route your order to the best provider automatically and keep you updated from start to finish in your dashboard.
                    </p>
</div>
</div>
</div>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll pt-6 pb-6">
<div className="text-[11px] uppercase font-medium text-neutral-500/80 tracking-wide">
                  Platforms &amp; services
                </div>
<button className="faq-toggle group mt-2 flex items-center justify-between w-full text-left" data-faq="faq-2">
<h3 className="text-white text-2xl sm:text-3xl font-light tracking-tight">
                    Which social networks do you support?
                  </h3>
<span className="ml-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 group-hover:bg-white/10 transition-all duration-300 faq-arrow text-fuchsia-300">
<svg className="text-neutral-50 w-[20px] h-[20px] transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</span>
</button>
<div className="faq-answer overflow-hidden transition-all duration-300" data-answer="faq-2" style={{maxHeight: '0', opacity: '0'}}>
<div className="pt-4 pb-2 px-4 mt-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
<p className="text-white/70 text-base leading-relaxed">
                      We support major networks like Instagram, TikTok, YouTube, Twitter / X, Threads, Spotify and more. For each platform you’ll find followers, likes, comments, views, saves, shares and other engagement options — all clearly labeled inside the panel.
                    </p>
</div>
</div>
</div>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.7s_both] animate-on-scroll pt-6 pb-6">
<div className="text-[11px] uppercase font-medium text-neutral-500/80 tracking-wide">
                  Safety &amp; support
                </div>
<button className="faq-toggle group mt-2 flex items-center justify-between w-full text-left" data-faq="faq-3">
<h3 className="text-white text-2xl sm:text-3xl font-light tracking-tight">
                    Is it safe to use fanmade.pro?
                  </h3>
<span className="ml-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 group-hover:bg-white/10 transition-all duration-300 faq-arrow text-fuchsia-300">
<svg className="w-[20px] h-[20px] text-neutral-50 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</span>
</button>
<div className="faq-answer overflow-hidden transition-all duration-300" data-answer="faq-3" style={{maxHeight: '0', opacity: '0'}}>
<div className="pt-4 pb-2 px-4 mt-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
<p className="text-white/70 text-base leading-relaxed">
                      We never ask for your password or login. All services are delivered externally via your public content or handle. For the safest results we recommend using drip‑feed, avoiding unrealistic jumps, and always keeping your profile public during delivery.
                    </p>

</div>
</div>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.8s_both] animate-on-scroll pt-6 pb-6">
<div className="text-[11px] uppercase font-medium text-neutral-500/80 tracking-wide">
                  Payments &amp; pricing
                </div>
<button className="faq-toggle group mt-2 flex items-center justify-between w-full text-left" data-faq="faq-4">
<h3 className="text-white text-2xl sm:text-3xl font-light tracking-tight">
                    How do I pay and what are the minimums?
                  </h3>
<span className="ml-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 group-hover:bg-white/10 transition-all duration-300 faq-arrow text-fuchsia-300">
<svg className="w-[20px] h-[20px] text-neutral-50 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</span>
</button>
<div className="faq-answer overflow-hidden transition-all duration-300" data-answer="faq-4" style={{maxHeight: '0', opacity: '0'}}>
<div className="pt-4 pb-2 px-4 mt-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
<p className="text-white/70 text-base leading-relaxed">
                      You can top up your balance using popular payment options (varies by region). Each service has its own minimum and maximum order size, clearly shown in the panel before you confirm. There are no recurring fees — you only pay for what you use.
                    </p>
</div>
</div>
</div>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.9s_both] animate-on-scroll pt-6 pb-0 border-b-0">
<div className="text-[11px] uppercase font-medium text-neutral-500/80 tracking-wide">
                  Refunds &amp; refills
                </div>
<button className="faq-toggle group mt-2 flex items-center justify-between w-full text-left" data-faq="faq-5">
<h3 className="text-white text-2xl sm:text-3xl font-light tracking-tight">
                    What if my order is delayed or drops?
                  </h3>
<span className="ml-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 group-hover:bg-white/10 transition-all duration-300 faq-arrow text-fuchsia-300">
<svg className="w-[20px] h-[20px] text-neutral-50 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</span>
</button>
<div className="faq-answer overflow-hidden transition-all duration-300" data-answer="faq-5" style={{maxHeight: '0', opacity: '0'}}>
<div className="pt-4 pb-2 px-4 mt-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
<p className="text-white/70 text-base leading-relaxed">
                      Many services come with refill and protection. If an order is significantly delayed or doesn’t start, it’s typically canceled and funds are returned to your balance automatically. If you notice drops after completion, open a ticket and our team will refill or review the order based on the service terms.
                    </p>
</div>
</div>
</div>
</div>
</div>

<aside className="md:col-span-5">
<div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col justify-between">
<div>
<h3 className="text-white text-2xl font-semibold tracking-tight">
                  Still have questions?
                </h3>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
                  Our support team is online every day to help with orders, payments, refills and anything else related to your fanmade.pro account.
                </p>
<div className="mt-5 space-y-3 text-sm">
<div className="flex items-start gap-3">
<div className="mt-1 h-6 w-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center border border-fuchsia-500/40">
<svg className="w-3.5 h-3.5 text-fuchsia-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
</svg>
</div>
<div>
<div className="text-white font-medium text-sm">Safe panel, secure payments</div>
<p className="text-white/60 text-xs mt-1">
                        Built with modern infrastructure and trusted payment processors. Your orders and funds stay protected.
                      </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
<svg className="w-3.5 h-3.5 text-emerald-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div>
<div className="text-white font-medium text-sm">Clear service descriptions</div>
<p className="text-white/60 text-xs mt-1">
                        Every service includes min / max, speed, refill and quality notes so you always know what you’re ordering.
                      </p>
</div>
</div>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<a className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-white/90" href="https://www.fanmade.pro/auth/signup">
                  Create free account
                </a>
<a className="inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-white/15 text-sm font-medium text-white hover:bg-white/5" href="#contact">
                  Talk to support
                </a>
</div>
</div>
</aside>
</div>
</div>
</div></section>

<section className="lg:py-32 pt-24 pb-24" id="pricing">
<div className="lg:px-8 max-w-7xl mx-auto px-6">
<section className="relative">
<div className="md:mb-16 grid md:grid-cols-12 mb-16 gap-x-6 gap-y-6 items-end">
<div className="md:col-span-8 space-y-4">
<div className="inline-flex text-[13px] [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll font-medium gap-x-2 items-center">
<span className="tabular-nums text-[20px] leading-none text-fuchsia-300/80">04</span>
<span className="text-fuchsia-300/40">/</span>
<span className="uppercase text-[11px] tracking-widest text-fuchsia-200/90">Pricing</span>
</div>
<h2 className="sm:text-4xl lg:text-5xl [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-3xl font-light text-white tracking-tight">
                Transparent, pay‑as‑you‑go pricing.
              </h2>
<p className="sm:text-base [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-sm text-zinc-400 max-w-2xl">
                Top up once and use your balance across any platform or service. No subscriptions, hidden fees or long‑term commitments.
              </p>
<div className="md:col-span-4 flex md:justify-end [animation:fadeSlideIn_0.s_ease-out_0.4s_both] animate-on-scroll">
<div className="hidden sm:flex items-center gap3">
<a className="inline-flex items-center text-[15px] hover:bg-white/90 font-medium text-neutral-900 bg-white h-11 rounded-full ring-white/10 ring-1 px-5 shadow-sm" href="https://www.fanmade.pro/auth/signup">
                  View full service list
                </a>
</div>
</div>
</div>
</div></section>
<div className="grid md:grid-cols-3 gap-6">

<article className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 flex flex-col">
<div className="text-xs font-medium uppercase tracking-wide text-fuchsia-200/80">
              Starter
            </div>
<h3 className="mt-2 text-2xl font-semibold text-white tracking-tight">
              Test the panel
            </h3>
<p className="mt-2 text-sm text-white/60">
              Perfect for new creators testing fanmade.pro and running small campaigns.
            </p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">$10</span>
<span className="text-xs text-slate-400">min. top up</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-white/70">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Access to all services
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Standard order priority
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Basic support
              </li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10" href="https://www.fanmade.pro/auth/signup">
                Start with $10
              </a>
</div>
</article>

<article className="relative rounded-2xl border border-fuchsia-500/50 bg-fuchsia-500/10 backdrop-blur p-6 flex flex-col shadow-[0_0_40px_rgba(236,72,153,0.3)]">
<div className="absolute -top-3 right-4 inline-flex items-center rounded-full bg-fuchsia-500 text-[11px] font-semibold uppercase tracking-wide text-white px-3 py-1 shadow-lg">
              Most popular
            </div>
<div className="text-xs font-medium uppercase tracking-wide text-fuchsia-100/90">
              Creator
            </div>
<h3 className="mt-2 text-2xl font-semibold text-white tracking-tight">
              Scale your growth
            </h3>
<p className="mt-2 text-sm text-fuchsia-50/90">
              Best for active creators and small teams managing multiple profiles.
            </p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">$50</span>
<span className="text-xs text-fuchsia-100/80">min. top up</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-fuchsia-50/90">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                Better service rates on selected tiers
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                Higher order limits per campaign
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                Priority support for active orders
              </li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white/90" href="https://www.fanmade.pro/auth/signup">
                Top up &amp; start scaling
              </a>
</div>
</article>

<article className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 flex flex-col">
<div className="text-xs font-medium uppercase tracking-wide text-fuchsia-200/80">
              Agency
            </div>
<h3 className="mt-2 text-2xl font-semibold text-white tracking-tight">
              High‑volume panel
            </h3>
<p className="mt-2 text-sm text-white/60">
              Designed for agencies, resellers and power users with recurring campaigns.
            </p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">$250</span>
<span className="text-xs text-slate-400">recommended monthly volume</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-white/70">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Best rates on supported services
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Dedicated manager for large accounts
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Priority access to new providers
              </li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10" href="#contact">
                Talk to sales
              </a>
</div>
</article>
</div>
</div>
</section>

<section className="lg:py-28 pt-20 pb-20 border-t border-white/10" id="contact">
<div className="lg:px-8 max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-10 items-center">
<div className="md:col-span-7 space-y-4">
<div className="inline-flex text-[13px] font-medium gap-x-2 items-center text-fuchsia-200/90">
<span className="uppercase text-[11px] tracking-widest">Get started</span>
</div>
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-light text-white tracking-tight">
              Ready to plug a real SMM panel into your growth?
            </h2>
<p className="sm:text-base text-sm text-zinc-400 max-w-xl">
              Create your account, top up any amount and start placing orders in minutes. No calls, no contracts — just a clean panel that works.
            </p>
<div className="flex flex-wrap gap-3 pt-2">
<a className="inline-flex items-center justify-center h-11 rounded-full bg-white text-neutral-900 px-6 text-[15px] font-medium shadow-sm ring-1 ring-white/10 hover:bg-white/90" href="https://www.fanmade.pro/auth/signup">
                Create free account
              </a>
<a className="inline-flex items-center justify-center h-11 rounded-full border border-white/15 px-6 text-[15px] font-medium text-white hover:bg-white/5" href="#faq">
                View FAQ
              </a>
</div>
<div className="mt-6 grid sm:grid-cols-3 gap-4 text-xs text-white/60">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                24/7 order processing
              </div>
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                250+ active services
              </div>
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
                Panel built for creators &amp; agencies
              </div>
</div>
</div>

<aside className="md:col-span-5">
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
<h3 className="text-white text-lg font-semibold tracking-tight">
                Need a custom setup?
              </h3>
<p className="mt-2 text-sm text-white/70">
                Tell us a bit about your use case — we’ll help you choose the right services and structure your campaigns.
              </p>
<form className="mt-4 space-y-3">
<div>
<label className="block text-xs font-medium text-white/70 mb-1" htmlFor="contact-email">
                    Email
                  </label>
<input className="w-full bg-black/30 border border-white/15 rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60" id="contact-email" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-white/70 mb-1" htmlFor="contact-type">
                    What are you planning?
                  </label>
<select className="w-full bg-black/30 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60" id="contact-type">
<option className="bg-[#05040b]">Creator / personal brand</option>
<option className="bg-[#05040b]">Agency / reseller</option>
<option className="bg-[#05040b]">Music / artist promotion</option>
<option className="bg-[#05040b]">Other</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-white/70 mb-1" htmlFor="contact-message">
                    Short message
                  </label>
<textarea className="w-full bg-black/30 border border-white/15 rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60" id="contact-message" placeholder="Share a few details about your campaigns or platforms." rows="3"></textarea>
</div>
<button className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-fuchsia-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-fuchsia-500" type="button">
                  Send message
                </button>
<p className="mt-2 text-[11px] text-white/50">
                  We usually reply within a few hours. For urgent questions, create an account and open a ticket from your dashboard.
                </p>
</form>
</div>
</aside>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black/40">
<div className="lg:px-8 max-w-7xl mx-auto px-6 py-8">
<div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="relative inline-flex h-6 w-6">
<span className="absolute inset-0 -rotate-45">
<span className="block h-[42%] w-full rounded bg-fuchsia-400/90"></span>
<span className="mt-[14%] block h-[42%] w-full rounded bg-indigo-400/80"></span>
</span>
</span>
<span className="text-sm font-semibold tracking-tight text-white">fanmade.pro</span>
</div>
<p className="text-xs text-slate-400 max-w-md">
            A modern SMM panel built for creators, agencies and brands who take social proof seriously.
          </p>
</div>
<div className="flex flex-wrap gap-4 text-xs text-slate-400">
<a className="hover:text-white" href="#features">Features</a>
<a className="hover:text-white" href="#pricing">Pricing</a>
<a className="hover:text-white" href="#faq">FAQ</a>
<a className="hover:text-white" href="#contact">Contact</a>
</div>
</div>
<div className="mt-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between border-t border-white/10 pt-4">
<p className="text-[11px] text-slate-500">
          © <span id="year-span"></span> fanmade.pro. All rights reserved. fanmade.pro is an independent SMM panel and is not affiliated with Instagram, TikTok, YouTube, Twitter / X or any other platform.
        </p>
<div className="flex flex-wrap gap-3 text-[11px] text-slate-500">
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Refund policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
