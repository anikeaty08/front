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
  


    (function () {
      const slider = document.getElementById('experts-slider');
      const slides = Array.from(slider.querySelectorAll('[data-slide]'));
      const dots = Array.from(document.querySelectorAll('#experts-dots > button'));
      const prev = document.getElementById('experts-prev');
      const next = document.getElementById('experts-next');

      function activeIndex() {
        const left = slider.scrollLeft + slider.clientWidth / 2;
        let idx = 0, min = Infinity;
        slides.forEach((s, i) => {
          const center = s.offsetLeft + s.offsetWidth / 2;
          const d = Math.abs(center - left);
          if (d < min) { min = d; idx = i; }
        });
        return idx;
      }

      function goTo(i) {
        i = (i + slides.length) % slides.length;
        slider.scrollTo({ left: slides[i].offsetLeft - 16, behavior: 'smooth' });
        updateDots(i);
      }

      function updateDots(i = activeIndex()) {
        dots.forEach((d, di) => {
          d.className = 'h-1.5 w-6 rounded-full ' + (di === i ? 'bg-white/80' : 'bg-white/30');
        });
      }

      let raf;
      slider.addEventListener('scroll', () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(updateDots);
      });

      prev?.addEventListener('click', () => goTo(activeIndex() - 1));
      next?.addEventListener('click', () => goTo(activeIndex() + 1));
      dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

      updateDots(0);
    })();
  


    (function () {
      const slider = document.getElementById('details-slider');
      if (!slider) return;
      const slides = Array.from(slider.querySelectorAll('[data-slide]'));
      const dots = Array.from(document.querySelectorAll('#details-dots > button'));
      const prev = document.getElementById('details-prev');
      const next = document.getElementById('details-next');

      function activeIndex() {
        const left = slider.scrollLeft + slider.clientWidth / 2;
        let idx = 0, min = Infinity;
        slides.forEach((s, i) => {
          const center = s.offsetLeft + s.offsetWidth / 2;
          const d = Math.abs(center - left);
          if (d < min) { min = d; idx = i; }
        });
        return idx;
      }

      function goTo(i) {
        i = (i + slides.length) % slides.length;
        slider.scrollTo({ left: slides[i].offsetLeft - 16, behavior: 'smooth' });
        updateDots(i);
      }

      function updateDots(i = activeIndex()) {
        dots.forEach((d, di) => {
          d.className = 'h-1.5 w-6 rounded-full ' + (di === i ? 'bg-white/80' : 'bg-white/30');
        });
      }

      let raf;
      slider.addEventListener('scroll', () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(updateDots);
      });

      prev?.addEventListener('click', () => goTo(activeIndex() - 1));
      next?.addEventListener('click', () => goTo(activeIndex() + 1));
      dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

      updateDots(0);
    })();
  


    (function () {
      const buttons = document.querySelectorAll('[data-billing-toggle]');
      const prices = document.querySelectorAll('[data-price]');
      const annualNotes = document.querySelectorAll('[data-annual-note]');
      const savingBadges = document.querySelectorAll('[data-saving]');
      let mode = 'monthly';

      function setMode(next) {
        mode = next;
        buttons.forEach(b => {
          const active = b.getAttribute('data-billing-toggle') === mode;
          b.className = 'px-4 h-9 text-sm rounded-full ' + (active ? 'text-white bg-white/10 font-medium' : 'text-slate-300 hover:text-white');
        });
        prices.forEach(p => {
          const val = p.dataset[mode];
          p.textContent = val;
        });
        annualNotes.forEach(n => n.classList.toggle('hidden', mode !== 'yearly'));
        savingBadges.forEach(s => s.classList.toggle('hidden', mode !== 'yearly'));
      }

      buttons.forEach(b => b.addEventListener('click', () => setMode(b.getAttribute('data-billing-toggle'))));
      setMode('monthly');
    })();
  
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full" style={{position: 'relative', overflow: 'hidden', background: '#000'}}>
<div style="
    position: absolute; 
    inset: 0; 
    background: #50C878; 
    mix-blend-mode: color; 
    z-index: 1; 
    pointer-events: none;">
</div>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div></div>
<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl"></div>
<div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[40rem] bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-3xl rounded-full"></div>
</div>
<header className="[animation:fadeSlideIn_1s_ease-out_0s_both] animate-on-scroll animate relative">
<nav className="sm:px-6 lg:px-8 flex max-w-7xl mr-auto ml-auto pt-6 pr-4 pb-6 pl-4 items-center justify-between">

<a className="inline-flex items-center justify-center gap-2" href="#">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:wallet-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tight text-white font-sans">Arca</span>
</a>
<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-sm font-medium text-slate-300 hover:text-white transition font-sans" href="#">Banking</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition font-sans" href="#">Cards</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition font-sans" href="#">Business</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition font-sans" href="#">Support</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 hover:bg-white/10 transition border-gradient text-sm font-medium bg-white/5 rounded-xl pt-2 pr-4 pb-2 pl-4" href="#">
      Log In
      <iconify-icon height="18" icon="solar:login-2-linear" width="18"></iconify-icon>
</a>
<button className="inline-flex md:hidden items-center justify-center h-10 w-10 rounded-xl bg-white/5 hover:bg-white/10 border-gradient text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
</header>
<main className="overflow-hidden relative">
<section className="sm:px-6 lg:px-8 sm:py-12 lg:py-20 grid lg:grid-cols-2 lg:gap-12 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 gap-x-8 gap-y-8 items-center">

<div className="relative">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/5 text-xs font-medium text-slate-300 font-sans border-gradient [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll animate">
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"></span>
            New: Arca Wealth &amp; Intelligent Spending
          </div>
<h1 className="leading-tight md:text-5xl sm:text-5xl lg:text-7xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll animate text-3xl font-medium text-white tracking-tighter mt-5">
  The future of<br/> digital banking
</h1>
<p className="sm:mt-5 sm:text-base lg:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll animate text-sm font-normal text-slate-300 mt-5">
  Experience seamless financial management with unified Arca accounts, instant global transfers, and automated savings.
  Secure your assets with banking built for the modern era.
</p>
<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll animate">
<div className="flex-1 sm:min-w-[260px]">
<label className="sr-only font-sans" htmlFor="email">Email address</label>
<div className="relative">
<input className="w-full placeholder-slate-400 text-white bg-white/5 focus:ring-2 focus:ring-emerald-400/60 focus:outline-none px-4 h-11 sm:h-12 rounded-xl font-normal text-sm border-gradient" id="email" placeholder="Enter your email" type="email"/>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<button className="inline-flex sm:h-12 shadow-emerald-500/30 hover:opacity-90 transition border-gradient text-sm font-semibold text-white tracking-tight bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 h-11 rounded-xl pr-5 pl-5 shadow-lg items-center justify-center gap-2">
              Open Account
              <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-5 text-xs sm:text-sm [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll animate">
<div className="inline-flex items-center gap-2 text-slate-300 font-sans">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border-gradient text-white">
<iconify-icon height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
</span>
              FDIC Insured
            </div>
<div className="inline-flex items-center gap-2 text-slate-300 font-sans">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border-gradient text-white">
<iconify-icon height="16" icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
</span>
              5.0% APY Savings
            </div>
<div className="inline-flex items-center gap-2 text-slate-300 font-sans">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border-gradient text-white">
<iconify-icon height="16" icon="solar:bolt-linear" width="16"></iconify-icon>
</span>
              Instant Wire
            </div>
</div>
<div className="sm:mt-8 flex flex-wrap gap-3 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll mt-8 gap-x-3 gap-y-3 items-center animate">
<div className="inline-block group relative">
<div className="inline-block group text-sm rounded-full relative">
<button className="group inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white border-gradient before:rounded-full text-xs font-semibold text-white/70 tracking-tight bg-white/5 rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] relative backdrop-blur-xl items-center justify-center">
<span className="z-10 text-sm font-medium rounded-full mr-2 relative">Schedule a demo</span>
<span aria-hidden="true" className="-translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 text-xs opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
<iconify-icon height="16" icon="solar:play-circle-linear" width="16"></iconify-icon>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full text-sm" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition border-gradient text-sm font-medium text-white/70 bg-white/5 h-10 rounded-full pr-4 pl-4" href="#">
<iconify-icon height="16" icon="logos:apple" width="16"></iconify-icon>
  App Store
</a>
</div>
</div>

<div className="lg:mt-0 animate mt-0 relative">
<div className="absolute -top-10 -right-10 h-64 w-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-2xl rounded-full">
</div>
<div className="relative mx-auto max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[520px] h-[480px] sm:h-[520px] lg:h-[560px]">

<div className="sm:top-16 lg:top-12 sm:-left-4 absolute top-12 left-0 -rotate-6">
<div className="sm:w-52 lg:w-64 sm:rounded-[24px] lg:rounded-[28px] shadow-emerald-950/60 sm:p-2 border-gradient before:rounded-[22px] sm:before:rounded-[24px] lg:before:rounded-[28px] [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll bg-gradient-to-b from-gray-900 to-gray-950 w-44 rounded-[22px] pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-2xl animate">
<div className="rounded-[18px] sm:rounded-[20px] lg:rounded-[22px] bg-gradient-to-b from-emerald-800/20 to-teal-900/20 p-3 sm:p-3.5 lg:p-4 border-gradient before:rounded-[18px] sm:before:rounded-[20px] lg:before:rounded-[22px]">
<div className="flex items-center justify-between">
<div className="h-2 w-10 sm:w-12 rounded-full bg-white/10"></div>
<div className="h-2 w-5 sm:w-6 rounded-full bg-white/10"></div>
</div>
<div className="mt-8 sm:mt-10 lg:mt-12">
<p className="text-base sm:text-lg lg:text-xl leading-tight font-sans font-medium tracking-tighter">Banking</p>
<p className="text-base sm:text-lg lg:text-xl leading-tight font-sans font-medium tracking-tighter">reimagined for</p>
<p className="text-base sm:text-lg lg:text-xl leading-tight font-sans font-medium tracking-tighter">tomorrow</p>
</div>
<div className="mt-6 sm:mt-7 lg:mt-8 grid grid-cols-2 gap-2">
<button className="h-8 sm:h-9 rounded-xl bg-white/10 text-[10px] sm:text-xs font-medium font-sans border-gradient">Join Arca</button>
<button className="h-8 sm:h-9 rounded-xl bg-white/5 text-[10px] sm:text-xs font-medium font-sans border-gradient">Sign in</button>
</div>
<div className="mt-6 sm:mt-7 lg:mt-8">
<div className="rounded-xl bg-white/5 p-2 sm:p-2.5 border-gradient">
<div className="flex items-center gap-2">
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-white/10 flex items-center justify-center border-gradient text-white">
<iconify-icon className="text-teal-300" height="14" icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
</span>
<div className="flex-1 min-w-0">
<p className="text-[10px] sm:text-[11px] font-medium text-white truncate font-sans">Arca Instant</p>
<p className="text-[9px] sm:text-[10px] text-slate-400 truncate font-sans">Global transfers</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="-translate-x-1/2 z-10 absolute left-1/2">
<div className="sm:w-64 lg:w-72 sm:rounded-[28px] lg:rounded-[32px] shadow-emerald-950/60 sm:p-2 border-gradient before:rounded-[24px] sm:before:rounded-[28px] lg:before:rounded-[32px] [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll bg-gray-950 w-56 rounded-[24px] pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-2xl animate">
<div className="rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] bg-gradient-to-b from-gray-900 to-gray-950 p-2.5 sm:p-3 border-gradient before:rounded-[20px] sm:before:rounded-[24px] lg:before:rounded-[26px]">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/10 border-gradient flex items-center justify-center text-white/80">
<iconify-icon height="16" icon="solar:user-circle-linear" width="16"></iconify-icon>
</span>
<span className="text-[10px] sm:text-xs font-medium text-slate-300">Sarah Mitchell</span>
</div>
<button className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-white/5 flex items-center justify-center border-gradient text-slate-300">
<iconify-icon height="14" icon="solar:bell-linear" width="14"></iconify-icon>
</button>
</div>

<div className="mt-2.5 sm:mt-3 h-8 sm:h-9 rounded-xl bg-white/5 px-2.5 sm:px-3 flex items-center gap-2 border-gradient">
<iconify-icon className="text-slate-400" height="14" icon="solar:magnifer-linear" width="14"></iconify-icon>
<span className="text-[9px] sm:text-[10px] text-slate-400 font-sans">Find transactions...</span>
</div>

<div className="mt-3 sm:mt-4">
<p className="text-[9px] sm:text-[10px] text-slate-400 font-sans">Arca Premium</p>
<p className="mt-0.5 sm:mt-1 text-xl sm:text-2xl font-sans font-medium tracking-tighter">$283,940.00</p>
<div className="sm:mt-3 sm:p-3 shadow-emerald-900/30 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl mt-3 pt-2.5 pr-2.5 pb-2.5 pl-2.5 shadow-lg border-gradient before:rounded-2xl">
<div className="flex items-center justify-between text-white">
<span className="text-[10px] sm:text-xs font-medium font-sans">Arca Platinum</span>
<iconify-icon height="16" icon="solar:wireless-charge-linear" width="16"></iconify-icon>
</div>
<div className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold tracking-tight font-sans">**** 9284</div>
<div className="sm:mt-1 text-[9px] sm:text-[10px] text-white/80 mt-1 font-sans">Expires 12/28</div>
</div>
</div>

<div className="mt-3 sm:mt-4">
<p className="text-[9px] sm:text-[10px] text-slate-400 font-sans">Recent activity</p>
<div className="mt-1.5 sm:mt-2 space-y-1.5 sm:space-y-2">
<div className="flex items-center justify-between rounded-xl bg-white/5 px-2.5 sm:px-3 py-1.5 sm:py-2 border-gradient">
<div className="flex items-center gap-1.5 sm:gap-2">
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 border-gradient text-blue-300">
<iconify-icon height="14" icon="solar:monitor-play-linear" width="14"></iconify-icon>
</span>
<div className="min-w-0">
<p className="text-[10px] sm:text-[11px] font-medium text-white truncate font-sans">Netflix</p>
<p className="text-[9px] sm:text-[10px] text-slate-400 font-sans">Subscription</p>
</div>
</div>
<span className="text-[10px] sm:text-[11px] text-red-300 flex-shrink-0 ml-2 font-sans">- $17.99</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-white/5 px-2.5 sm:px-3 py-1.5 sm:py-2 border-gradient">
<div className="flex items-center gap-1.5 sm:gap-2">
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 border-gradient text-emerald-300">
<iconify-icon height="14" icon="solar:user-circle-linear" width="14"></iconify-icon>
</span>
<div className="min-w-0">
<p className="text-[10px] sm:text-[11px] font-medium text-white truncate font-sans">Marcus T.</p>
<p className="text-[9px] sm:text-[10px] text-slate-400 font-sans">Transfer</p>
</div>
</div>
<span className="text-[10px] sm:text-[11px] text-emerald-300 flex-shrink-0 ml-2 font-sans">+ $285.00</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-white/5 px-2.5 sm:px-3 py-1.5 sm:py-2 border-gradient">
<div className="flex items-center gap-1.5 sm:gap-2">
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 border-gradient text-green-300">
<iconify-icon height="14" icon="solar:bag-3-linear" width="14"></iconify-icon>
</span>
<div className="min-w-0">
<p className="text-[10px] sm:text-[11px] font-medium text-white truncate font-sans">Amazon</p>
<p className="text-[9px] sm:text-[10px] text-slate-400 font-sans">Purchase</p>
</div>
</div>
<span className="text-[10px] sm:text-[11px] text-red-300 flex-shrink-0 ml-2 font-sans">- $89.00</span>
</div>
</div>
</div>

<div className="mt-2.5 sm:mt-3 grid grid-cols-4 gap-1.5 sm:gap-2 text-white/80">
<div className="h-7 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center border-gradient">
<iconify-icon height="16" icon="solar:home-2-linear" width="16"></iconify-icon>
</div>
<div className="h-7 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<iconify-icon height="16" icon="solar:card-linear" width="16"></iconify-icon>
</div>
<div className="h-7 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<iconify-icon height="16" icon="solar:chart-2-linear" width="16"></iconify-icon>
</div>
<div className="h-7 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<iconify-icon height="16" icon="solar:settings-minimalistic-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="absolute right-0 top-8 sm:top-6 lg:top-8 rotate-6 sm:-right-2">
<div className="sm:w-52 lg:w-64 sm:rounded-[24px] lg:rounded-[28px] shadow-emerald-950/60 sm:p-2 border-gradient before:rounded-[22px] sm:before:rounded-[24px] lg:before:rounded-[28px] [animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll bg-gray-950 w-44 rounded-[22px] pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-2xl animate">
<div className="rounded-[18px] sm:rounded-[20px] lg:rounded-[22px] bg-gradient-to-b from-gray-900 to-gray-950 p-2.5 sm:p-3 border-gradient before:rounded-[18px] sm:before:rounded-[20px] lg:before:rounded-[22px]">
<div className="flex items-center justify-between text-slate-300">
<button className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<iconify-icon height="14" icon="solar:alt-arrow-left-linear" width="14"></iconify-icon>
</button>
<span className="text-[10px] sm:text-xs font-medium font-sans">Wallet</span>
<button className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<iconify-icon height="14" icon="solar:menu-dots-linear" width="14"></iconify-icon>
</button>
</div>
<div className="mt-3 sm:mt-4 grid grid-cols-2 gap-1.5 sm:gap-2">
<div className="rounded-xl p-2 sm:p-3 bg-gradient-to-b from-emerald-600/30 to-emerald-900/30 border-gradient">
<p className="text-[9px] sm:text-[10px] text-slate-300 font-sans">Interest</p>
<p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-semibold tracking-tight font-sans">+$6,240.00</p>
<div className="mt-1.5 sm:mt-2 text-emerald-300">
<iconify-icon height="16" icon="solar:wallet-linear" width="16"></iconify-icon>
</div>
</div>
<div className="rounded-xl p-2 sm:p-3 bg-gradient-to-b from-teal-600/30 to-teal-900/30 border-gradient">
<p className="text-[9px] sm:text-[10px] text-slate-300 font-sans">Insurance</p>
<p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-semibold tracking-tight font-sans">Active</p>
<div className="mt-1.5 sm:mt-2 text-teal-300">
<iconify-icon height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="mt-2.5 sm:mt-3">
<p className="text-[9px] sm:text-[10px] text-slate-400 font-sans">Quick send</p>
<div className="mt-1.5 sm:mt-2 flex -space-x-1.5 sm:-space-x-2">
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/10 ring-2 ring-gray-900 flex items-center justify-center text-[8px] font-bold">JD</span>
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/10 ring-2 ring-gray-900 flex items-center justify-center text-[8px] font-bold">AS</span>
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/10 ring-2 ring-gray-900 flex items-center justify-center text-[8px] font-bold">MK</span>
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/10 ring-2 ring-gray-900 flex items-center justify-center text-[8px] font-bold">PL</span>
<button className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/5 flex items-center justify-center border-gradient text-white">
<iconify-icon height="16" icon="solar:add-circle-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="mt-2.5 sm:mt-3 rounded-xl p-2 sm:p-3 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border-gradient">
<div className="flex items-center gap-1.5 sm:gap-2">
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 border-gradient text-emerald-300">
<iconify-icon height="14" icon="solar:shield-check-linear" width="14"></iconify-icon>
</span>
<div className="min-w-0">
<p className="text-[10px] sm:text-[11px] font-medium text-white truncate font-sans">Arca Secure</p>
<p className="text-[9px] sm:text-[10px] text-slate-400 truncate font-sans">Vault protected</p>
</div>
</div>
</div>
<div className="mt-2.5 sm:mt-3">
<p className="text-[9px] sm:text-[10px] text-slate-400 font-sans">Overview</p>
<div className="mt-1.5 sm:mt-2 rounded-xl bg-white/5 p-2 sm:p-3 border-gradient">
<div className="flex items-center justify-between">
<span className="text-[10px] sm:text-[11px] font-medium text-white font-sans">Income</span>
<span className="text-[10px] sm:text-[11px] text-slate-300 font-sans">$8,720.00</span>
</div>
<div className="mt-1.5 sm:mt-2 h-1.5 sm:h-2 w-full rounded-full bg-white/10">
<div className="h-1.5 sm:h-2 w-3/4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
</div>
</div>
</div>
<div className="mt-2.5 sm:mt-3 grid grid-cols-4 gap-1.5 sm:gap-2 text-white/80">
<div className="h-7 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<iconify-icon height="14" icon="solar:home-2-linear" width="14"></iconify-icon>
</div>
<div className="h-7 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center border-gradient">
<iconify-icon height="14" icon="solar:card-linear" width="14"></iconify-icon>
</div>
<div className="h-7 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<iconify-icon height="14" icon="solar:graph-new-linear" width="14"></iconify-icon>
</div>
<div className="h-7 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<iconify-icon height="14" icon="solar:settings-minimalistic-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<section className="z-10 sm:py-24 pt-8 pb-8 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<p className="uppercase text-xs font-medium text-white/30 tracking-wide">Trusted by leading financial institutions</p>
</div>
<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">
<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">Quantum Finance</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-bricolage">Stellar Bank</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-medium tracking-tighter font-merriweather">Velocity Credit</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">Horizon Capital</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-medium tracking-tighter font-playfair">Apex Wealth</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">Prime Treasury</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter">Infinity Mutual</span>
</div>
</div>
<div className="flex items-center gap-16 shrink-0">
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">Quantum Finance</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-bricolage">Stellar Bank</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-medium tracking-tighter font-merriweather">Velocity Credit</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">Horizon Capital</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-medium tracking-tighter font-playfair">Apex Wealth</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">Prime Treasury</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter">Infinity Mutual</span>
</div>
</div>
</div>
</div>
</div>
<style className="">
        @keyframes ticker {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-100%);
            }
        }

        .ticker-track {
            animation: ticker 40s linear infinite;
            width: calc(200% + 16px);
        }

        .ticker-track:hover {
            animation-play-state: paused;
        }
    </style>
</section><section className="z-10 sm:py-24 pt-10 pb-16 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>
<div className="grid lg:grid-cols-2 gap-10 gap-x-10 gap-y-10 items-start">

<div className="relative [animation:fadeSlideIn_1s_ease-out_0.05s_both] animate-on-scroll">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-medium text-white tracking-tight">
          Banking in seconds
        </h2>
<p className="sm:text-lg text-base font-normal text-slate-300 mt-2">
          Open your Arca account and access powerful wealth management tools with minimal setup.
        </p>
<div className="mt-5 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-slate-200/90 bg-white/5 ring-1 ring-white/10 border-gradient">
<span className="h-2 w-2 rounded-full bg-teal-400"></span> Personal
          </span>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-slate-200/90 bg-white/5 ring-1 ring-white/10 border-gradient">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span> Business
          </span>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-slate-200/90 bg-white/5 ring-1 ring-white/10 border-gradient">
<span className="h-2 w-2 rounded-full bg-cyan-400"></span> Savings
          </span>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-slate-200/90 bg-white/5 ring-1 ring-white/10 border-gradient">
<span className="h-2 w-2 rounded-full bg-teal-400"></span> Investments
          </span>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-slate-200/90 bg-white/5 ring-1 ring-white/10 border-gradient">
<span className="h-2 w-2 rounded-full bg-amber-400"></span> Loans
          </span>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-slate-200/90 bg-white/5 ring-1 ring-white/10 border-gradient">
<span className="h-2 w-2 rounded-full bg-orange-400"></span> Multi‑currency
          </span>
</div>
<p className="sm:text-base text-sm font-normal text-slate-300 mt-6">
          Arca is a modern banking platform designed for speed, security, and scale—so you can manage accounts, cards, and payouts effortlessly.
        </p>
<p className="sm:text-base text-sm font-normal text-slate-300 mt-3">
          Jumpstart your financial journey with our intelligent automated workflows.
        </p>
<div className="mt-8 flex items-center gap-4">
<a className="inline-flex items-center gap-2 h-11 sm:h-12 px-5 rounded-xl bg-white text-gray-900 hover:bg-white/90 transition shadow-lg shadow-emerald-500/20 text-sm font-semibold tracking-tight border-gradient" href="#">
            Open account
            <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition" href="#">
            Learn more
            <iconify-icon height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] [animation:fadeSlideIn_1s_ease-out_0.15s_both] animate-on-scroll relative">

<div className="absolute -top-8 -right-6 h-64 w-64 bg-gradient-to-br from-emerald-500/25 to-teal-500/25 blur-3xl rounded-full"></div>

<div className="absolute right-6 sm:right-10 top-8 rotate-[-6deg] w-[62%] sm:w-[58%] rounded-2xl bg-gray-900/80 backdrop-blur-sm p-4 shadow-2xl shadow-black/50 border-gradient">
<img alt="Template preview" className="rounded-xl object-cover h-36 sm:h-40 w-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf79132-dd2e-4d3e-bb75-0668745cf97a_800w.webp" style={{}}/>
<div className="mt-3">
<p className="text-xs font-medium text-white">Analytics</p>
<p className="text-[11px] text-slate-400">Spending insights</p>
</div>
</div>

<div className="absolute right-0 sm:right-4 top-24 rotate-[4deg] w-[60%] sm:w-[56%] rounded-2xl bg-gray-900/80 backdrop-blur-sm p-4 shadow-2xl shadow-black/50 border-gradient">
<img alt="Template gallery" className="sm:h-44 w-full h-40 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79b9374b-8b95-4b65-884b-ba53e7e50db0_800w.webp"/>
<div className="mt-3">
<p className="text-xs font-medium text-white">Cards</p>
<p className="text-[11px] text-slate-400">Virtual &amp; Physical</p>
</div>
</div>

<div className="absolute left-0 sm:left-4 bottom-0 w-[82%] sm:w-[72%] rounded-2xl bg-white text-gray-900 shadow-2xl shadow-emerald-900/30 border border-white/10">
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between">
<span className="text-[10px] sm:text-xs font-medium tracking-tight">ARCA</span>
<div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-500">
<span className="inline-flex items-center gap-1">
<iconify-icon height="14" icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
                  New
                </span>
</div>
</div>
<div className="mt-4">
<p className="text-xl sm:text-2xl font-semibold tracking-tight">Arca Business</p>
<p className="mt-1 text-xs sm:text-sm text-gray-600">Complete banking suite with cards, payroll, and expense management.</p>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-8 px-3 rounded-lg bg-gray-900 text-white text-xs font-semibold tracking-tight hover:opacity-90 transition">
                  Apply now
                  <iconify-icon height="14" icon="solar:rocket-2-linear" width="14"></iconify-icon>
</button>
<button className="inline-flex items-center gap-2 h-8 px-3 rounded-lg bg-gray-100 text-gray-900 text-xs font-medium hover:bg-gray-200 transition">
                  Details
                  <iconify-icon height="14" icon="solar:book-2-linear" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="mt-4 border-t border-gray-200/70 pt-3 px-1">
<div className="flex items-center gap-4 text-[11px] text-gray-600">
<span className="inline-flex items-center gap-1">
<iconify-icon height="14" icon="solar:diploma-linear" width="14"></iconify-icon>
                  Learn
                </span>
<span className="inline-flex items-center gap-1">
<iconify-icon height="14" icon="solar:code-circle-linear" width="14"></iconify-icon>
                  API
                </span>
<span className="inline-flex items-center gap-1">
<iconify-icon height="14" icon="solar:globe-linear" width="14"></iconify-icon>
                  arca.bank
                </span>
</div>
</div>
</div>
<div className="rounded-b-2xl bg-gray-900 text-white px-4 sm:px-5 py-3">
<div className="flex items-center justify-between">
<div className="">
<p className="text-sm font-semibold tracking-tight">Arca Pro</p>
<p className="text-[11px] text-slate-300">Premium banking features</p>
</div>
<iconify-icon className="text-white/80" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="z-10 sm:py-24 pt-10 pb-16 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" style={{}}></div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6" style={{}}>
<div className="[animation:fadeSlideIn_1s_ease-out_0.05s_both] animate-on-scroll">
<h2 className="sm:text-5xl text-3xl font-medium text-white tracking-tight">
        Connect with Arca Partners
      </h2>
<p className="sm:text-lg text-base font-normal text-slate-300 mt-2">
        Work alongside verified financial advisors to optimize your wealth.
      </p>
</div>
<div className="hidden md:flex items-center gap-3 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<a className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white text-gray-900 hover:bg-white/90 transition text-sm font-semibold tracking-tight shadow-lg shadow-emerald-500/20 border-gradient" href="#">
        Find Advisor
        <iconify-icon height="16" icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white/5 hover:bg-white/10 transition text-sm font-medium text-white border-gradient" href="#">
        Browse Network
        <iconify-icon height="16" icon="solar:magnifer-linear" width="16"></iconify-icon>
</a>
</div>
<div className="md:hidden [animation:fadeSlideIn_1s_ease-out_0.12s_both] animate-on-scroll">
<div className="flex items-center gap-3">
<a className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-full bg-white text-gray-900 hover:bg-white/90 transition text-sm font-semibold tracking-tight shadow-lg shadow-emerald-500/20 border-gradient" href="#">
          Find Advisor
          <iconify-icon height="16" icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
</a>
<a className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-full bg-white/5 hover:bg-white/10 transition text-sm font-medium text-white border-gradient" href="#">
          Browse
          <iconify-icon height="16" icon="solar:magnifer-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="[animation:fadeSlideIn_1s_ease-out_0.15s_both] animate-on-scroll mt-10 relative" style={{}}>
<div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 pr-4 pb-2 pl-4 gap-x-6 gap-y-6" id="experts-slider" style="mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); -webkit-mask-image:
linear-gradient(to right, transparent, black 15%, black 85%, transparent);">
<div className="shrink-0 snap-center sm:w-[60vw] md:w-[46vw] lg:w-[520px] w-[82vw]" data-slide="">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-2 border-gradient">
<img alt="Expert project showcase" className="sm:h-64 lg:h-72 w-full h-56 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39d6bd74-d7eb-4a3c-afb3-43091ef38e3e_1600w.webp"/>
</div>
<div className="mt-4 flex items-center gap-3">
<img alt="Studio avatar" className="w-9 h-9 object-cover ring-gray-950 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cdc09013-0a60-4b8f-b475-471d52043576_320w.webp"/>
<div className="min-w-0">
<p className="truncate text-sm font-medium text-white">Phoenix Financial</p>
<p className="text-xs text-slate-400">United Kingdom</p>
</div>
</div>
</div>
<div className="shrink-0 snap-center w-[82vw] sm:w-[60vw] md:w-[46vw] lg:w-[520px]" data-slide="">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-2 border-gradient">
<img alt="Expert project showcase" className="sm:h-64 lg:h-72 w-full h-56 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d8e9137-e6b2-450f-8d91-712da931fca8_1600w.webp"/>
</div>
<div className="mt-4 flex items-center gap-3">
<img alt="Studio avatar" className="w-9 h-9 object-cover ring-gray-950 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/288eb1de-b7ea-4a25-8a5c-dee0646f850d_320w.webp"/>
<div className="min-w-0">
<p className="text-sm font-medium text-white truncate">Zenith Capital</p>
<p className="text-xs text-slate-400">Australia</p>
</div>
</div>
</div>
<div className="shrink-0 snap-center w-[82vw] sm:w-[60vw] md:w-[46vw] lg:w-[520px]" data-slide="">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-2 border-gradient">
<img alt="Expert project showcase" className="sm:h-64 lg:h-72 w-full h-56 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2d01e24-ffb7-4d58-a555-a9e9ef285492_1600w.webp"/>
</div>
<div className="mt-4 flex items-center gap-3">
<img alt="Creator avatar" className="w-9 h-9 object-cover ring-gray-950 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e69574cb-a541-4da0-a77e-319f2cef4b6f_320w.webp"/>
<div className="min-w-0">
<p className="text-sm font-medium text-white truncate">Alpine Wealth</p>
<p className="text-xs text-slate-400">Switzerland</p>
</div>
</div>
</div>
<div className="shrink-0 snap-center w-[82vw] sm:w-[60vw] md:w-[46vw] lg:w-[520px]" data-slide="">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-2 border-gradient">
<img alt="Expert project showcase" className="sm:h-64 lg:h-72 w-full h-56 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc7cd604-fbac-4a62-ba0e-15a549771b7e_1600w.webp"/>
</div>
<div className="mt-4 flex items-center gap-3">
<img alt="Studio avatar" className="w-9 h-9 object-cover ring-gray-950 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/766d4651-fa64-47ff-b372-6ec67906fca7_320w.webp"/>
<div className="min-w-0">
<p className="text-sm font-medium text-white truncate">Meridian Advisors</p>
<p className="text-xs text-slate-400">Singapore</p>
</div>
</div>
</div>
</div>
<button className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 items-center justify-center border-gradient" id="experts-prev">
<iconify-icon className="text-white/90" height="20" icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 items-center justify-center border-gradient" id="experts-next">
<iconify-icon className="text-white/90" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<div aria-label="Slide indicators" className="flex gap-2 [animation:fadeSlideIn_1s_ease-out_0.25s_both] animate-on-scroll mt-6 gap-x-2 gap-y-2 items-center justify-center" id="experts-dots">
<button aria-label="Slide 1" className="h-1.5 w-6 rounded-full bg-white/80"></button>
<button aria-label="Slide 2" className="h-1.5 w-6 rounded-full bg-white/30"></button>
<button aria-label="Slide 3" className="h-1.5 w-6 rounded-full bg-white/30"></button>
<button aria-label="Slide 4" className="h-1.5 w-6 rounded-full bg-white/30"></button>
</div>
</div>
<style className="">
    #experts-slider { scrollbar-width: none; -ms-overflow-style: none; }
    #experts-slider::-webkit-scrollbar { display: none; }
  </style>

</section><section className="z-10 sm:py-24 pt-10 pb-16 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div className="[animation:fadeSlideIn_1s_ease-out_0.05s_both] animate-on-scroll">
<h2 className="sm:text-5xl text-3xl font-medium text-white tracking-tight">Powerful features that scale with you</h2>
<p className="sm:text-lg text-base font-normal text-slate-300 mt-2">Experience banking built for the modern world with seamless integrations and beautiful design.</p>
</div>
<div className="hidden md:flex items-center gap-3 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<a className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white/5 hover:bg-white/10 transition text-sm font-medium text-white border-gradient" href="#">
          View all features
          <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="[animation:fadeSlideIn_1s_ease-out_0.15s_both] animate-on-scroll mt-10 relative">
<div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 gap-6 pr-4 pb-2 pl-4 gap-x-6 gap-y-6" id="details-slider" style={{maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)'}}>

<div className="shrink-0 snap-center w-[82vw] sm:w-[60vw] md:w-[46vw] lg:w-[520px]" data-slide="">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-4 border-gradient">
<div className="rounded-2xl bg-gray-900/80 ring-1 ring-white/10 overflow-hidden">
<img alt="Smart Dashboard" className="sm:h-72 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9e98a5a-74e8-416c-9719-83ad546f665a_1600w.webp" style={{aspectRatio: '3/4'}}/>
</div>
</div>
<p className="mt-4 text-sm text-slate-300"><span className="font-medium text-white">Smart Dashboard.</span> Visualize your financial data with intelligent insights and real-time analytics.</p>
</div>

<div className="shrink-0 snap-center w-[82vw] sm:w-[60vw] md:w-[46vw] lg:w-[520px]" data-slide="">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-4 border-gradient">
<div className="rounded-2xl bg-gray-900/80 ring-1 ring-white/10 overflow-hidden">
<img alt="Instant Transfers" className="sm:h-72 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4024872-3363-422c-a595-9375ac41ad79_1600w.webp" style={{aspectRatio: '3/4'}}/>
</div>
</div>
<p className="mt-4 text-sm text-slate-300"><span className="font-medium text-white">Instant Transfers.</span> Send and receive money globally in seconds with zero hidden fees.</p>
</div>

<div className="shrink-0 snap-center w-[82vw] sm:w-[60vw] md:w-[46vw] lg:w-[520px]" data-slide="">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-4 border-gradient">
<div className="rounded-2xl bg-gray-900/80 ring-1 ring-white/10 overflow-hidden">
<img alt="Security First" className="sm:h-72 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5f25964-76fc-4770-8df8-c91609068d73_1600w.webp" style={{aspectRatio: '3/4'}}/>
</div>
</div>
<p className="mt-4 text-sm text-slate-300"><span className="font-medium text-white">Security First.</span> Military-grade encryption and biometric authentication protect your wealth.</p>
</div>
</div>
<button className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 items-center justify-center border-gradient" id="details-prev">
<iconify-icon className="text-white/90" height="20" icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 items-center justify-center border-gradient" id="details-next">
<iconify-icon className="text-white/90" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<div aria-label="Slide indicators" className="flex gap-2 [animation:fadeSlideIn_1s_ease-out_0.25s_both] animate-on-scroll mt-6 gap-x-2 gap-y-2 items-center justify-center" id="details-dots">
<button aria-label="Slide 1" className="h-1.5 w-6 rounded-full bg-white/80"></button>
<button aria-label="Slide 2" className="h-1.5 w-6 rounded-full bg-white/30"></button>
<button aria-label="Slide 3" className="h-1.5 w-6 rounded-full bg-white/30"></button>
</div>
<style>
    #details-slider { scrollbar-width: none; -ms-overflow-style: none; }
    #details-slider::-webkit-scrollbar { display: none; }
  </style>

</div>
</section><section className="z-10 sm:py-24 pt-10 pb-16 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div className="[animation:fadeSlideIn_1s_ease-out_0.05s_both] animate-on-scroll">
<h2 className="sm:text-5xl text-3xl font-medium text-white tracking-tight">Simple, transparent pricing</h2>
<p className="sm:text-lg text-base font-normal text-slate-300 mt-2">Choose a plan that fits your needs. Cancel anytime.</p>
</div>
<div className="[animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="inline-flex items-center rounded-full bg-white/5 p-1 border-gradient">
<button className="px-4 h-9 text-sm rounded-full text-white bg-white/10 font-medium" data-billing-toggle="monthly">Monthly</button>
<button className="px-4 h-9 text-sm rounded-full text-slate-300 hover:text-white" data-billing-toggle="yearly">Yearly</button>
</div>
<div className="mt-2 text-xs text-slate-400 text-right">
<span className="hidden" data-annual-note="">Billed annually. Save up to 17%.</span>
</div>
</div>
</div>
<div className="mt-10 grid lg:grid-cols-3 gap-6 [animation:fadeSlideIn_1s_ease-out_0.15s_both] animate-on-scroll">

<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 border-gradient flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white">Arca Basic</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-300 border-gradient">Free</span>
</div>
<p className="mt-2 text-sm text-slate-300">Essential tools to get going.</p>
<div className="mt-6">
<div className="flex items-end gap-1">
<span className="text-4xl font-semibold tracking-tight">$</span>
<span className="text-5xl font-semibold tracking-tight" data-monthly="0" data-price="" data-yearly="0">0</span>
<span className="text-sm text-slate-300 mb-2">/mo</span>
</div>
<p className="text-xs text-slate-400 mt-1">For individuals and students</p>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-200 flex-1">
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<iconify-icon height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
            1 account, 1 card
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<iconify-icon height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
            Standard transfers
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-slate-400 border-gradient">
<iconify-icon height="14" icon="solar:close-circle-linear" width="14"></iconify-icon>
</span>
            Shared vaults
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-slate-400 border-gradient">
<iconify-icon height="14" icon="solar:close-circle-linear" width="14"></iconify-icon>
</span>
            Premium support
          </li>
</ul>
<button className="mt-6 inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-white text-gray-900 hover:bg-white/90 transition text-sm font-semibold tracking-tight border-gradient">
          Get started
          <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 p-6 border-gradient flex flex-col">
<div className="absolute -top-3 right-4 text-[11px] px-2 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold tracking-tight shadow-lg shadow-emerald-500/20">
          Most popular
        </div>
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white">Arca Plus</h3>
<span className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 hidden" data-saving="">Save 17%</span>
</div>
<p className="mt-2 text-sm text-slate-300">Advanced features for growing wealth.</p>
<div className="mt-6">
<div className="flex items-end gap-1">
<span className="text-4xl font-semibold tracking-tight">$</span>
<span className="text-5xl font-semibold tracking-tight" data-monthly="12" data-price="" data-yearly="10">12</span>
<span className="text-sm text-slate-300 mb-2">/mo</span>
</div>
<p className="text-xs text-slate-400 mt-1">Includes 3 supplementary cards</p>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-200 flex-1">
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<iconify-icon height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
            Multi‑currency accounts
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<iconify-icon height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
            Priority transfers and FX
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<iconify-icon height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
            Budgeting &amp; Analytics
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<iconify-icon height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
            Concierge support
          </li>
</ul>
<button className="mt-6 inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-white text-gray-900 hover:bg-white/90 transition text-sm font-semibold tracking-tight shadow-lg shadow-emerald-500/20 border-gradient">
          Upgrade now
          <iconify-icon height="16" icon="solar:rocket-2-linear" width="16"></iconify-icon>
</button>
</div>

<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 border-gradient flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white">Arca Business</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-300 border-gradient">Custom</span>
</div>
<p className="mt-2 text-sm text-slate-300">Security, scale, and dedicated support.</p>
<div className="mt-6">
<div className="flex items-end gap-2">
<span className="text-4xl font-semibold tracking-tight">Custom</span>
</div>
<p className="text-xs text-slate-400 mt-1">Tailored to your organization</p>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-200 flex-1">
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<iconify-icon height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
            Team management &amp; permissions
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<iconify-icon height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
            Bulk payments API
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<iconify-icon height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
            Dedicated account manager
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<iconify-icon height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
            24/7 priority support
          </li>
</ul>
<button className="mt-6 inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-white/5 hover:bg-white/10 transition text-sm font-medium text-white border-gradient">
          Contact sales
          <iconify-icon className="text-white/90" height="16" icon="solar:chat-line-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

</section><section className="z-10 sm:py-24 pt-10 pb-16 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>
<div className="relative overflow-hidden rounded-3xl border-gradient bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-cyan-600/20 ring-1 ring-white/10">
<div className="absolute -top-20 -right-20 h-72 w-72 bg-emerald-500/30 blur-3xl rounded-full"></div>
<div className="absolute -bottom-24 -left-16 h-80 w-80 bg-teal-500/30 blur-3xl rounded-full"></div>
<div className="relative px-6 py-12 sm:px-10 lg:px-12 lg:py-14">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="[animation:fadeSlideIn_1s_ease-out_0.05s_both] animate-on-scroll">
<h2 className="sm:text-5xl text-3xl font-semibold text-white tracking-tight">Ready to build your financial future?</h2>
<p className="sm:text-lg text-base font-normal text-slate-200 mt-2">Open an account in minutes and start moving money with confidence.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:justify-end [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<a className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 rounded-xl bg-white text-gray-900 hover:bg-white/90 transition text-sm font-semibold tracking-tight shadow-lg shadow-emerald-500/20 border-gradient" href="#">
              Create account
              <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 rounded-xl bg-white/5 hover:bg-white/10 transition text-sm font-medium text-white border-gradient" href="#">
              Talk to sales
              <iconify-icon className="text-white/90" height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section><footer className="z-10 sm:py-24 pt-10 pb-16 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>
<div className="grid md:grid-cols-4 gap-10">
<div className="">
<a className="inline-flex items-center justify-center gap-2" href="#">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:wallet-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tight text-white font-sans">Arca</span>
</a>
<p className="text-sm text-slate-300 mt-4">Modern money tools for individuals and teams. Built for speed, security and scale.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border-gradient" href="#">
<iconify-icon className="text-white/90" height="16" icon="ri:twitter-x-line" width="16"></iconify-icon>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border-gradient" href="#">
<iconify-icon className="text-white/90" height="16" icon="ri:github-line" width="16"></iconify-icon>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border-gradient" href="#">
<iconify-icon className="text-white/90" height="16" icon="ri:linkedin-line" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight text-white">Product</h4>
<ul className="mt-4 space-y-2 text-sm">
<li><a className="text-slate-300 hover:text-white transition" href="#">Overview</a></li>
<li><a className="text-slate-300 hover:text-white transition" href="#">Security</a></li>
<li><a className="text-slate-300 hover:text-white transition" href="#">Integrations</a></li>
<li><a className="text-slate-300 hover:text-white transition" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white">Solutions</h4>
<ul className="mt-4 space-y-2 text-sm">
<li><a className="text-slate-300 hover:text-white transition" href="#">Personal</a></li>
<li><a className="text-slate-300 hover:text-white transition" href="#">Business</a></li>
<li><a className="text-slate-300 hover:text-white transition" href="#">SaaS</a></li>
<li><a className="text-slate-300 hover:text-white transition" href="#">Multi‑currency</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white">Company</h4>
<ul className="mt-4 space-y-2 text-sm">
<li><a className="text-slate-300 hover:text-white transition" href="#">About</a></li>
<li><a className="text-slate-300 hover:text-white transition" href="#">Careers</a></li>
<li><a className="text-slate-300 hover:text-white transition" href="#">Press</a></li>
<li><a className="text-slate-300 hover:text-white transition" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">© <span className="font-medium text-slate-300">Arca Financial</span> — All rights reserved.</p>
<div className="flex items-center gap-4 text-xs">
<a className="text-slate-300 hover:text-white transition" href="#">Privacy</a>
<a className="text-slate-300 hover:text-white transition" href="#">Terms</a>
<a className="text-slate-300 hover:text-white transition inline-flex items-center gap-1" href="#">
          Status
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
