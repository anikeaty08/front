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
      if (window.lucide?.createIcons) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      if (window.lucide?.createIcons) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      if (window.lucide?.createIcons) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
        if (window.lucide?.createIcons) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      buttons.forEach(b => b.addEventListener('click', () => setMode(b.getAttribute('data-billing-toggle'))));
      setMode('monthly');
    })();
  


    if (window.lucide?.createIcons) {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }
  


      lucide.createIcons({
        attrs: {
          'stroke-width': 1.5
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div></div>
<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[40rem] bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20 blur-3xl rounded-full"></div>
</div>
<header className="[animation:fadeSlideIn_1s_ease-out_0s_both] animate-on-scroll animate relative">
<nav className="sm:px-6 lg:px-8 flex max-w-7xl mr-auto ml-auto pt-6 pr-4 pb-6 pl-4 items-center justify-between">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b60257bc-d9de-4c89-8ab5-de54c968f5e6_1600w.png)] bg-cover rounded" href="#"></a>
<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-sm font-medium text-slate-300 hover:text-white transition font-sans" href="#">Solutions</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition font-sans" href="#">Protection</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition font-sans" href="#">Plans</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition font-sans" href="#">Help Center</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 hover:bg-white/10 transition border-gradient text-sm font-medium bg-white/5 rounded-xl pt-2 pr-4 pb-2 pl-4" href="#">App
  Store<svg className="lucide lucide-play w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(241, 245, 249)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></a>
<button className="inline-flex md:hidden items-center justify-center h-10 w-10 rounded-xl bg-white/5 hover:bg-white/10 border-gradient">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>
</header>
<main className="overflow-hidden relative">
<section className="sm:px-6 lg:px-8 sm:py-12 lg:py-20 grid lg:grid-cols-2 lg:gap-12 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 gap-x-8 gap-y-8 items-center">

<div className="relative">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/5 text-xs font-medium text-slate-300 font-sans border-gradient [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll animate">
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400"></span>
            Introducing: Advanced rewards and intelligent spending tools
          </div>
<h1 className="leading-tight md:text-5xl sm:text-5xl lg:text-7xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll animate text-3xl font-medium text-white tracking-tighter mt-5">
  Transform your financial future today
</h1>
<p className="sm:mt-5 sm:text-base lg:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll animate text-sm font-normal text-slate-300 mt-5">
  Experience seamless banking with unified card management, instant notifications, and intelligent automation.
  Build wealth with zero hidden charges and premium financial tools designed for modern life.
</p>
<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll animate">
<div className="flex-1 sm:min-w-[260px]">
<label className="sr-only font-sans" htmlFor="email">Email address</label>
<div className="relative">
<input className="w-full placeholder-slate-400 text-white bg-white/5 focus:ring-2 focus:ring-indigo-400/60 focus:outline-none px-4 h-11 sm:h-12 rounded-xl font-normal text-sm border-gradient" id="email" placeholder="Enter your work email" type="email"/>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
</div>
</div>
<button className="inline-flex sm:h-12 shadow-indigo-500/30 hover:opacity-90 transition border-gradient text-sm font-semibold text-white tracking-tight bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 h-11 rounded-xl pr-5 pl-5 shadow-lg items-center justify-center">
              Start free trial
              <svg className="lucide lucide-arrow-right ml-2 h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-5 text-xs sm:text-sm [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll animate">
<div className="inline-flex items-center gap-2 text-slate-300 font-sans">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border-gradient">
<svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
              Military‑grade security
            </div>
<div className="inline-flex items-center gap-2 text-slate-300 font-sans">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border-gradient">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
              Up to 5% rewards
            </div>
<div className="inline-flex items-center gap-2 text-slate-300 font-sans">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border-gradient">
<svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
              Lightning‑fast payments
            </div>
</div>
<div className="sm:mt-8 flex flex-wrap gap-3 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll mt-8 gap-x-3 gap-y-3 items-center animate">
<div className="inline-block group relative">
<div className="inline-block group text-sm rounded-full relative">
<button className="group inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white border-gradient before:rounded-full text-xs font-semibold text-white/70 tracking-tight bg-white/5 rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] relative backdrop-blur-xl items-center justify-center">
<span className="z-10 text-sm font-medium rounded-full mr-2 relative">Schedule a demo</span>
<span aria-hidden="true" className="-translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 text-xs opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span><svg className="lucide lucide-arrow-right lucide-play w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(241, 245, 249)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full text-sm" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition border-gradient text-sm font-medium text-white/70 bg-white/5 h-10 rounded-full pr-4 pl-4" href="#">

  App Store
  <svg className="lucide lucide-play w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(241, 245, 249)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>
</div>

<div className="lg:mt-0 animate mt-0 relative">
<div className="absolute -top-10 -right-10 h-64 w-64 bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 blur-2xl rounded-full">
</div>
<div className="relative mx-auto max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[520px] h-[480px] sm:h-[520px] lg:h-[560px]">

<div className="sm:top-16 lg:top-12 sm:-left-4 absolute top-12 left-0 -rotate-6">
<div className="sm:w-52 lg:w-64 sm:rounded-[24px] lg:rounded-[28px] shadow-indigo-950/60 sm:p-2 border-gradient before:rounded-[22px] sm:before:rounded-[24px] lg:before:rounded-[28px] [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll bg-gradient-to-b from-gray-900 to-gray-950 w-44 rounded-[22px] pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-2xl animate">
<div className="rounded-[18px] sm:rounded-[20px] lg:rounded-[22px] bg-gradient-to-b from-violet-700/30 to-indigo-900/30 p-3 sm:p-3.5 lg:p-4 border-gradient before:rounded-[18px] sm:before:rounded-[20px] lg:before:rounded-[22px]">
<div className="flex items-center justify-between">
<div className="h-2 w-10 sm:w-12 rounded-full bg-white/10"></div>
<div className="h-2 w-5 sm:w-6 rounded-full bg-white/10"></div>
</div>
<div className="mt-8 sm:mt-10 lg:mt-12">
<p className="text-base sm:text-lg lg:text-xl leading-tight font-sans font-medium tracking-tighter">Transform
          your</p>
<p className="text-base sm:text-lg lg:text-xl leading-tight font-sans font-medium tracking-tighter">financial
          future</p>
<p className="text-base sm:text-lg lg:text-xl leading-tight font-sans font-medium tracking-tighter">today</p>
</div>
<div className="mt-6 sm:mt-7 lg:mt-8 grid grid-cols-2 gap-2">
<button className="h-8 sm:h-9 rounded-xl bg-white/10 text-[10px] sm:text-xs font-medium font-sans border-gradient">Start free trial</button>
<button className="h-8 sm:h-9 rounded-xl bg-white/5 text-[10px] sm:text-xs font-medium font-sans border-gradient">Sign in</button>
</div>
<div className="mt-6 sm:mt-7 lg:mt-8">
<div className="rounded-xl bg-white/5 p-2 sm:p-2.5 border-gradient">
<div className="flex items-center gap-2">
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-white/10 flex items-center justify-center border-gradient">
<svg className="lucide lucide-sparkles h-3 w-3 sm:h-3.5 sm:w-3.5 text-yellow-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<div className="flex-1 min-w-0">
<p className="text-[10px] sm:text-[11px] font-medium text-white truncate font-sans">Lightning payments</p>
<p className="text-[9px] sm:text-[10px] text-slate-400 truncate font-sans">Move funds in seconds</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="-translate-x-1/2 z-10 absolute left-1/2">
<div className="sm:w-64 lg:w-72 sm:rounded-[28px] lg:rounded-[32px] shadow-indigo-950/60 sm:p-2 border-gradient before:rounded-[24px] sm:before:rounded-[28px] lg:before:rounded-[32px] [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll bg-gray-950 w-56 rounded-[24px] pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-2xl animate">
<div className="rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] bg-gradient-to-b from-gray-900 to-gray-950 p-2.5 sm:p-3 border-gradient before:rounded-[20px] sm:before:rounded-[24px] lg:before:rounded-[26px]">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/10 border-gradient"></span>
<span className="text-[10px] sm:text-xs font-medium text-slate-300">Sarah Mitchell</span>
</div>
<button className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<svg className="lucide lucide-bell h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>

<div className="mt-2.5 sm:mt-3 h-8 sm:h-9 rounded-xl bg-white/5 px-2.5 sm:px-3 flex items-center gap-2 border-gradient">
<svg className="lucide lucide-search h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-[9px] sm:text-[10px] text-slate-400 font-sans">Search payments, people or services</span>
</div>

<div className="mt-3 sm:mt-4">
<p className="text-[9px] sm:text-[10px] text-slate-400 font-sans">Premier Account</p>
<p className="mt-0.5 sm:mt-1 text-xl sm:text-2xl font-sans font-medium tracking-tighter">$283 940.00</p>
<div className="sm:mt-3 sm:p-3 shadow-fuchsia-900/30 bg-gradient-to-br from-rose-500 via-indigo-500 to-fuchsia-500 rounded-2xl mt-3 pt-2.5 pr-2.5 pb-2.5 pl-2.5 shadow-lg border-gradient before:rounded-2xl">
<div className="flex items-center justify-between text-white">
<span className="text-[10px] sm:text-xs font-medium font-sans">Premium card</span>
<svg className="lucide lucide-wifi h-3.5 w-3.5 sm:h-4 sm:w-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<div className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold tracking-tight font-sans">**** 9284</div>
<div className="sm:mt-1 text-[9px] sm:text-[10px] text-white/80 mt-1 font-sans">Expires 12/27</div>
</div>
</div>

<div className="mt-3 sm:mt-4">
<p className="text-[9px] sm:text-[10px] text-slate-400 font-sans">Recent activity this month</p>
<div className="mt-1.5 sm:mt-2 space-y-1.5 sm:space-y-2">
<div className="flex items-center justify-between rounded-xl bg-white/5 px-2.5 sm:px-3 py-1.5 sm:py-2 border-gradient">
<div className="flex items-center gap-1.5 sm:gap-2">
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 border-gradient">
<svg className="lucide lucide-shopping-bag h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-300" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</span>
<div className="min-w-0">
<p className="text-[10px] sm:text-[11px] font-medium text-white truncate font-sans">Netflix Subscription
                  </p>
<p className="text-[9px] sm:text-[10px] text-slate-400 font-sans">Today, 11:42 AM</p>
</div>
</div>
<span className="text-[10px] sm:text-[11px] text-red-300 flex-shrink-0 ml-2 font-sans">- $17.99</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-white/5 px-2.5 sm:px-3 py-1.5 sm:py-2 border-gradient">
<div className="flex items-center gap-1.5 sm:gap-2">
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 border-gradient">
<svg className="lucide lucide-user h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-300" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</span>
<div className="min-w-0">
<p className="text-[10px] sm:text-[11px] font-medium text-white truncate font-sans">Marcus Thompson</p>
<p className="text-[9px] sm:text-[10px] text-slate-400 font-sans">Yesterday, 4:18 PM</p>
</div>
</div>
<span className="text-[10px] sm:text-[11px] text-emerald-300 flex-shrink-0 ml-2 font-sans">+ $285.00</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-white/5 px-2.5 sm:px-3 py-1.5 sm:py-2 border-gradient">
<div className="flex items-center gap-1.5 sm:gap-2">
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 border-gradient">
<svg className="lucide lucide-store h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-300" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
</span>
<div className="min-w-0">
<p className="text-[10px] sm:text-[11px] font-medium text-white truncate font-sans">Amazon Prime</p>
<p className="text-[9px] sm:text-[10px] text-slate-400 font-sans">May 28, 6:32 PM</p>
</div>
</div>
<span className="text-[10px] sm:text-[11px] text-red-300 flex-shrink-0 ml-2 font-sans">- $89.00</span>
</div>
</div>
</div>

<div className="mt-2.5 sm:mt-3 grid grid-cols-4 gap-1.5 sm:gap-2">
<div className="h-7 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center border-gradient">
<svg className="lucide lucide-home h-3 w-3 sm:h-3.5 sm:w-3.5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div className="h-7 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<svg className="lucide lucide-credit-card h-3 w-3 sm:h-3.5 sm:w-3.5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="h-7 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<svg className="lucide lucide-pie-chart h-3 w-3 sm:h-3.5 sm:w-3.5" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<div className="h-7 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<svg className="lucide lucide-settings h-3 w-3 sm:h-3.5 sm:w-3.5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
</div>
</div>
</div>

<div className="absolute right-0 top-8 sm:top-6 lg:top-8 rotate-6 sm:-right-2">
<div className="sm:w-52 lg:w-64 sm:rounded-[24px] lg:rounded-[28px] shadow-indigo-950/60 sm:p-2 border-gradient before:rounded-[22px] sm:before:rounded-[24px] lg:before:rounded-[28px] [animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll bg-gray-950 w-44 rounded-[22px] pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-2xl animate">
<div className="rounded-[18px] sm:rounded-[20px] lg:rounded-[22px] bg-gradient-to-b from-gray-900 to-gray-950 p-2.5 sm:p-3 border-gradient before:rounded-[18px] sm:before:rounded-[20px] lg:before:rounded-[22px]">
<div className="flex items-center justify-between">
<button className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<svg className="lucide lucide-chevron-left h-3 w-3 sm:h-3.5 sm:w-3.5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<span className="text-[10px] sm:text-xs font-medium text-slate-300 font-sans">Wallet</span>
<button className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<svg className="lucide lucide-more-horizontal h-3 w-3 sm:h-3.5 sm:w-3.5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="mt-3 sm:mt-4 grid grid-cols-2 gap-1.5 sm:gap-2">
<div className="rounded-xl p-2 sm:p-3 bg-gradient-to-b from-indigo-600/30 to-indigo-900/30 border-gradient">
<p className="text-[9px] sm:text-[10px] text-slate-300 font-sans">Recurring income</p>
<p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-semibold tracking-tight font-sans">+$6 240.00</p>
<svg className="lucide lucide-wallet mt-1.5 sm:mt-2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-300" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div className="rounded-xl p-2 sm:p-3 bg-gradient-to-b from-fuchsia-600/30 to-fuchsia-900/30 border-gradient">
<p className="text-[9px] sm:text-[10px] text-slate-300 font-sans">Coverage plan</p>
<p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-semibold tracking-tight font-sans">+$1 550.00</p>
<svg className="lucide lucide-shield mt-1.5 sm:mt-2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-fuchsia-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
</div>
<div className="mt-2.5 sm:mt-3">
<p className="text-[9px] sm:text-[10px] text-slate-400 font-sans">Quick transfer to</p>
<div className="mt-1.5 sm:mt-2 flex -space-x-1.5 sm:-space-x-2">
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/10 ring-2 ring-gray-900"></span>
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/10 ring-2 ring-gray-900"></span>
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/10 ring-2 ring-gray-900"></span>
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/10 ring-2 ring-gray-900"></span>
<button className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/5 flex items-center justify-center border-gradient">
<svg className="lucide lucide-plus h-3 w-3 sm:h-3.5 sm:w-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
<div className="mt-2.5 sm:mt-3 rounded-xl p-2 sm:p-3 bg-gradient-to-r from-indigo-600/20 to-fuchsia-600/20 border-gradient">
<div className="flex items-center gap-1.5 sm:gap-2">
<span className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 border-gradient">
<svg className="lucide lucide-shield-check h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
<div className="min-w-0">
<p className="text-[10px] sm:text-[11px] font-medium text-white truncate font-sans">Secure your wealth</p>
<p className="text-[9px] sm:text-[10px] text-slate-400 truncate font-sans">Premium protection</p>
</div>
</div>
</div>
<div className="mt-2.5 sm:mt-3">
<p className="text-[9px] sm:text-[10px] text-slate-400 font-sans">Financial overview</p>
<div className="mt-1.5 sm:mt-2 rounded-xl bg-white/5 p-2 sm:p-3 border-gradient">
<div className="flex items-center justify-between">
<span className="text-[10px] sm:text-[11px] font-medium text-white font-sans">Total revenue</span>
<span className="text-[10px] sm:text-[11px] text-slate-300 font-sans">$ 8 720.00</span>
</div>
<div className="mt-1.5 sm:mt-2 h-1.5 sm:h-2 w-full rounded-full bg-white/10">
<div className="h-1.5 sm:h-2 w-3/4 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500"></div>
</div>
</div>
</div>
<div className="mt-2.5 sm:mt-3 grid grid-cols-4 gap-1.5 sm:gap-2">
<div className="h-7 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<svg className="lucide lucide-home h-3 w-3 sm:h-3.5 sm:w-3.5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div className="h-7 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center border-gradient">
<svg className="lucide lucide-credit-card h-3 w-3 sm:h-3.5 sm:w-3.5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="h-7 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<svg className="lucide lucide-bar-chart-3 h-3 w-3 sm:h-3.5 sm:w-3.5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="h-7 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center border-gradient">
<svg className="lucide lucide-cog h-3 w-3 sm:h-3.5 sm:w-3.5" data-lucide="cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.27 7 3.34"></path><path d="m11 13.73-4 6.93"></path><path d="M12 22v-2"></path><path d="M12 2v2"></path><path d="M14 12h8"></path><path d="m17 20.66-1-1.73"></path><path d="m17 3.34-1 1.73"></path><path d="M2 12h2"></path><path d="m20.66 17-1.73-1"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m3.34 7 1.73 1"></path><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="12" r="8"></circle></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<section className="z-10 sm:py-24 pt-8 pb-8 relative" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<p className="uppercase text-xs font-medium text-white/30 tracking-wide">Powering finance for leading companies</p>
</div>
<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">
<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">Quantum Ventures</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-bricolage">Stellar Digital</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-medium tracking-tighter font-merriweather">Velocity Group</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">Horizon Capital</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-medium tracking-tighter font-playfair">Apex Solutions</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">Prime Industries</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter">Infinity Labs</span>
</div>
</div>
<div className="flex items-center gap-16 shrink-0">
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">Quantum Ventures</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-bricolage">Stellar Digital</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-medium tracking-tighter font-merriweather">Velocity Group</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">Horizon Capital</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-medium tracking-tighter font-playfair">Apex Solutions</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">Prime Industries</span>
</div>
<div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter">Infinity Labs</span>
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
          Get started in seconds
        </h2>
<p className="sm:text-lg text-base font-normal text-slate-300 mt-2">
          Open your Maze account and deploy powerful money tools with minimal setup.
        </p>
<div className="mt-5 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-slate-200/90 bg-white/5 ring-1 ring-white/10 border-gradient">
<span className="h-2 w-2 rounded-full bg-violet-400"></span> Starter
          </span>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-slate-200/90 bg-white/5 ring-1 ring-white/10 border-gradient">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span> Personal
          </span>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-slate-200/90 bg-white/5 ring-1 ring-white/10 border-gradient">
<span className="h-2 w-2 rounded-full bg-sky-400"></span> Business
          </span>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-slate-200/90 bg-white/5 ring-1 ring-white/10 border-gradient">
<span className="h-2 w-2 rounded-full bg-fuchsia-400"></span> AI
          </span>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-slate-200/90 bg-white/5 ring-1 ring-white/10 border-gradient">
<span className="h-2 w-2 rounded-full bg-amber-400"></span> SaaS
          </span>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-slate-200/90 bg-white/5 ring-1 ring-white/10 border-gradient">
<span className="h-2 w-2 rounded-full bg-orange-400"></span> Multi‑currency
          </span>
</div>
<p className="sm:text-base text-sm font-normal text-slate-300 mt-6">
          Maze is a modern finance platform designed for speed, security, and scale—so you can launch accounts, cards, and payouts effortlessly.
        </p>
<p className="sm:text-base text-sm font-normal text-slate-300 mt-3">
          Jumpstart your setup with pre‑built templates and workflows from our team and the community.
        </p>
<div className="mt-8 flex items-center gap-4">
<a className="inline-flex items-center gap-2 h-11 sm:h-12 px-5 rounded-xl bg-white text-gray-900 hover:bg-white/90 transition shadow-lg shadow-indigo-500/20 text-sm font-semibold tracking-tight border-gradient" href="#">
            Choose a template
            <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition" href="#">
            Learn more
            <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] [animation:fadeSlideIn_1s_ease-out_0.15s_both] animate-on-scroll relative">

<div className="absolute -top-8 -right-6 h-64 w-64 bg-gradient-to-br from-indigo-500/25 to-fuchsia-500/25 blur-3xl rounded-full"></div>

<div className="absolute right-6 sm:right-10 top-8 rotate-[-6deg] w-[62%] sm:w-[58%] rounded-2xl bg-gray-900/80 backdrop-blur-sm p-4 shadow-2xl shadow-black/50 border-gradient">
<img alt="Template preview" className="rounded-xl object-cover h-36 sm:h-40 w-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4cf79132-dd2e-4d3e-bb75-0668745cf97a_800w.webp" style={{}}/>
<div className="mt-3">
<p className="text-xs font-medium text-white">Insights Dashboard</p>
<p className="text-[11px] text-slate-400">Performance overview</p>
</div>
</div>

<div className="absolute right-0 sm:right-4 top-24 rotate-[4deg] w-[60%] sm:w-[56%] rounded-2xl bg-gray-900/80 backdrop-blur-sm p-4 shadow-2xl shadow-black/50 border-gradient">
<img alt="Template gallery" className="sm:h-44 w-full h-40 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/79b9374b-8b95-4b65-884b-ba53e7e50db0_800w.webp"/>
<div className="mt-3">
<p className="text-xs font-medium text-white">Image Gallery</p>
<p className="text-[11px] text-slate-400">Brand and card assets</p>
</div>
</div>

<div className="absolute left-0 sm:left-4 bottom-0 w-[82%] sm:w-[72%] rounded-2xl bg-white text-gray-900 shadow-2xl shadow-indigo-900/30 border border-white/10">
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between">
<span className="text-[10px] sm:text-xs font-medium tracking-tight">MAZE</span>
<div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-500">
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  New
                </span>
</div>
</div>
<div className="mt-4">
<p className="text-xl sm:text-2xl font-semibold tracking-tight">Maze Boilerplate</p>
<p className="mt-1 text-xs sm:text-sm text-gray-600">A starter kit with accounts, cards, and transfers configured.</p>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-8 px-3 rounded-lg bg-gray-900 text-white text-xs font-semibold tracking-tight hover:opacity-90 transition">
                  Deploy now
                  <svg className="lucide lucide-rocket h-3.5 w-3.5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</button>
<button className="inline-flex items-center gap-2 h-8 px-3 rounded-lg bg-gray-100 text-gray-900 text-xs font-medium hover:bg-gray-200 transition">
                  Read docs
                  <svg className="lucide lucide-book-open h-3.5 w-3.5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</button>
</div>
</div>
<div className="mt-4 border-t border-gray-200/70 pt-3 px-1">
<div className="flex items-center gap-4 text-[11px] text-gray-600">
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-graduation-cap h-3.5 w-3.5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
                  Learn
                </span>
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-code-2 h-3.5 w-3.5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                  Examples
                </span>
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-globe h-3.5 w-3.5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                  maze.bank
                </span>
</div>
</div>
</div>
<div className="rounded-b-2xl bg-gray-900 text-white px-4 sm:px-5 py-3">
<div className="flex items-center justify-between">
<div className="">
<p className="text-sm font-semibold tracking-tight">Boilerplate</p>
<p className="text-[11px] text-slate-300">Start from a proven baseline</p>
</div>
<svg className="lucide lucide-arrow-right h-4 w-4 text-white/80" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
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
        Connect with verified financial experts
      </h2>
<p className="sm:text-lg text-base font-normal text-slate-300 mt-2">
        Work alongside top-tier specialists to build, optimize, and grow your financial platform.
      </p>
</div>
<div className="hidden md:flex items-center gap-3 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<a className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white text-gray-900 hover:bg-white/90 transition text-sm font-semibold tracking-tight shadow-lg shadow-indigo-500/20 border-gradient" href="#">
        Get matched
        <svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</a>
<a className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white/5 hover:bg-white/10 transition text-sm font-medium text-white border-gradient" href="#">
        Browse Experts
        <svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</a>
</div>
<div className="md:hidden [animation:fadeSlideIn_1s_ease-out_0.12s_both] animate-on-scroll">
<div className="flex items-center gap-3">
<a className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-full bg-white text-gray-900 hover:bg-white/90 transition text-sm font-semibold tracking-tight shadow-lg shadow-indigo-500/20 border-gradient" href="#">
          Get matched
          <svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</a>
<a className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-full bg-white/5 hover:bg-white/10 transition text-sm font-medium text-white border-gradient" href="#">
          Browse Experts
          <svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</a>
</div>
</div>
</div>
<div className="[animation:fadeSlideIn_1s_ease-out_0.15s_both] animate-on-scroll mt-10 relative" style={{}}>
<div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 pr-4 pb-2 pl-4 gap-x-6 gap-y-6" id="experts-slider" style="mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); -webkit-mask-image:
linear-gradient(to right, transparent, black 15%, black 85%, transparent);">
<div className="shrink-0 snap-center sm:w-[60vw] md:w-[46vw] lg:w-[520px] w-[82vw]" data-slide="">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-2 border-gradient">
<img alt="Expert project showcase" className="sm:h-64 lg:h-72 w-full h-56 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/39d6bd74-d7eb-4a3c-afb3-43091ef38e3e_1600w.webp"/>
</div>
<div className="mt-4 flex items-center gap-3">
<img alt="Studio avatar" className="w-9 h-9 object-cover ring-gray-950 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cdc09013-0a60-4b8f-b475-471d52043576_320w.webp"/>
<div className="min-w-0">
<p className="truncate text-sm font-medium text-white">Phoenix Creative</p>
<p className="text-xs text-slate-400">United Kingdom</p>
</div>
</div>
</div>
<div className="shrink-0 snap-center w-[82vw] sm:w-[60vw] md:w-[46vw] lg:w-[520px]" data-slide="">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-2 border-gradient">
<img alt="Expert project showcase" className="sm:h-64 lg:h-72 w-full h-56 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8d8e9137-e6b2-450f-8d91-712da931fca8_1600w.webp"/>
</div>
<div className="mt-4 flex items-center gap-3">
<img alt="Studio avatar" className="w-9 h-9 object-cover ring-gray-950 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/288eb1de-b7ea-4a25-8a5c-dee0646f850d_320w.webp"/>
<div className="min-w-0">
<p className="text-sm font-medium text-white truncate">Zenith Partners</p>
<p className="text-xs text-slate-400">Australia</p>
</div>
</div>
</div>
<div className="shrink-0 snap-center w-[82vw] sm:w-[60vw] md:w-[46vw] lg:w-[520px]" data-slide="">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-2 border-gradient">
<img alt="Expert project showcase" className="sm:h-64 lg:h-72 w-full h-56 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f2d01e24-ffb7-4d58-a555-a9e9ef285492_1600w.webp"/>
</div>
<div className="mt-4 flex items-center gap-3">
<img alt="Creator avatar" className="w-9 h-9 object-cover ring-gray-950 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e69574cb-a541-4da0-a77e-319f2cef4b6f_320w.webp"/>
<div className="min-w-0">
<p className="text-sm font-medium text-white truncate">Alpine Digital</p>
<p className="text-xs text-slate-400">Switzerland</p>
</div>
</div>
</div>
<div className="shrink-0 snap-center w-[82vw] sm:w-[60vw] md:w-[46vw] lg:w-[520px]" data-slide="">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-2 border-gradient">
<img alt="Expert project showcase" className="sm:h-64 lg:h-72 w-full h-56 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dc7cd604-fbac-4a62-ba0e-15a549771b7e_1600w.webp"/>
</div>
<div className="mt-4 flex items-center gap-3">
<img alt="Studio avatar" className="w-9 h-9 object-cover ring-gray-950 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/766d4651-fa64-47ff-b372-6ec67906fca7_320w.webp"/>
<div className="min-w-0">
<p className="text-sm font-medium text-white truncate">Meridian Labs</p>
<p className="text-xs text-slate-400">Singapore</p>
</div>
</div>
</div>
</div>
<button className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 items-center justify-center border-gradient" id="experts-prev">
<svg className="lucide lucide-chevron-left h-5 w-5 text-white/90" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 items-center justify-center border-gradient" id="experts-next">
<svg className="lucide lucide-chevron-right h-5 w-5 text-white/90" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
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
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="[animation:fadeSlideIn_1s_ease-out_0.15s_both] animate-on-scroll mt-10 relative">
<div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 gap-6 pr-4 pb-2 pl-4 gap-x-6 gap-y-6" id="details-slider" style={{maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)'}}>

<div className="shrink-0 snap-center w-[82vw] sm:w-[60vw] md:w-[46vw] lg:w-[520px]" data-slide="">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-4 border-gradient">
<div className="rounded-2xl bg-gray-900/80 ring-1 ring-white/10 overflow-hidden">
<img alt="Smart Dashboard" className="sm:h-72 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a9e98a5a-74e8-416c-9719-83ad546f665a_1600w.webp" style={{aspectRatio: '3/4'}}/>
</div>
</div>
<p className="mt-4 text-sm text-slate-300"><span className="font-medium text-white">Smart Dashboard.</span> Visualize your financial data with intelligent insights and real-time analytics.</p>
</div>

<div className="shrink-0 snap-center w-[82vw] sm:w-[60vw] md:w-[46vw] lg:w-[520px]" data-slide="">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-4 border-gradient">
<div className="rounded-2xl bg-gray-900/80 ring-1 ring-white/10 overflow-hidden">
<img alt="Instant Transfers" className="sm:h-72 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a4024872-3363-422c-a595-9375ac41ad79_1600w.webp" style={{aspectRatio: '3/4'}}/>
</div>
</div>
<p className="mt-4 text-sm text-slate-300"><span className="font-medium text-white">Instant Transfers.</span> Send and receive money globally in seconds with zero hidden fees.</p>
</div>

<div className="shrink-0 snap-center w-[82vw] sm:w-[60vw] md:w-[46vw] lg:w-[520px]" data-slide="">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-4 border-gradient">
<div className="rounded-2xl bg-gray-900/80 ring-1 ring-white/10 overflow-hidden">
<img alt="Security First" className="sm:h-72 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b5f25964-76fc-4770-8df8-c91609068d73_1600w.webp" style={{aspectRatio: '3/4'}}/>
</div>
</div>
<p className="mt-4 text-sm text-slate-300"><span className="font-medium text-white">Security First.</span> Military-grade encryption and biometric authentication protect your wealth.</p>
</div>
</div>
<button className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 items-center justify-center border-gradient" id="details-prev">
<svg className="lucide lucide-chevron-left h-5 w-5 text-white/90" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 items-center justify-center border-gradient" id="details-next">
<svg className="lucide lucide-chevron-right h-5 w-5 text-white/90" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
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
<style className="">
    #details-slider { scrollbar-width: none; -ms-overflow-style: none; }
    #details-slider::-webkit-scrollbar { display: none; }
  </style>

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
<h3 className="text-xl font-semibold tracking-tight text-white">Starter</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-300 border-gradient">Free</span>
</div>
<p className="mt-2 text-sm text-slate-300">Essential tools to get going.</p>
<div className="mt-6">
<div className="flex items-end gap-1">
<span className="text-4xl font-semibold tracking-tight">$</span>
<span className="text-5xl font-semibold tracking-tight" data-monthly="0" data-price="" data-yearly="0">0</span>
<span className="text-sm text-slate-300 mb-2">/mo</span>
</div>
<p className="text-xs text-slate-400 mt-1">For individuals and side projects</p>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-200 flex-1">
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
            1 account, 1 card
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
            Standard transfers
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-slate-400 border-gradient">
<svg className="lucide lucide-x h-3.5 w-3.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</span>
            Team roles &amp; approvals
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-slate-400 border-gradient">
<svg className="lucide lucide-x h-3.5 w-3.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</span>
            Premium support
          </li>
</ul>
<button className="mt-6 inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-white text-gray-900 hover:bg-white/90 transition text-sm font-semibold tracking-tight border-gradient">
          Get started
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 p-6 border-gradient flex flex-col">
<div className="absolute -top-3 right-4 text-[11px] px-2 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-semibold tracking-tight shadow-lg shadow-indigo-500/20">
          Most popular
        </div>
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white">Growth</h3>
<span className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 hidden" data-saving="">Save 17%</span>
</div>
<p className="mt-2 text-sm text-slate-300">Advanced features for growing teams.</p>
<div className="mt-6">
<div className="flex items-end gap-1">
<span className="text-4xl font-semibold tracking-tight">$</span>
<span className="text-5xl font-semibold tracking-tight" data-monthly="29" data-price="" data-yearly="24">29</span>
<span className="text-sm text-slate-300 mb-2">/mo</span>
</div>
<p className="text-xs text-slate-400 mt-1">Includes 5 team members</p>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-200 flex-1">
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
            Multi‑currency accounts
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
            Priority transfers and FX
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
            Roles, approvals &amp; budgets
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
            Email support in 24h
          </li>
</ul>
<button className="mt-6 inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-white text-gray-900 hover:bg-white/90 transition text-sm font-semibold tracking-tight shadow-lg shadow-indigo-500/20 border-gradient">
          Upgrade now
          <svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</button>
</div>

<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 border-gradient flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white">Enterprise</h3>
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
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
            SSO/SAML &amp; advanced security
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
            Custom limits and controls
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
            Dedicated account manager
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border-gradient">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
            24/7 priority support
          </li>
</ul>
<button className="mt-6 inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-white/5 hover:bg-white/10 transition text-sm font-medium text-white border-gradient">
          Contact sales
          <svg className="lucide lucide-messages-square h-4 w-4 text-white/90" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
</button>
</div>
</div>
</div>

</section><section className="z-10 sm:py-24 pt-10 pb-16 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>
<div className="relative overflow-hidden rounded-3xl border-gradient bg-gradient-to-br from-indigo-600/20 via-violet-600/20 to-fuchsia-600/20 ring-1 ring-white/10">
<div className="absolute -top-20 -right-20 h-72 w-72 bg-indigo-500/30 blur-3xl rounded-full"></div>
<div className="absolute -bottom-24 -left-16 h-80 w-80 bg-fuchsia-500/30 blur-3xl rounded-full"></div>
<div className="relative px-6 py-12 sm:px-10 lg:px-12 lg:py-14">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="[animation:fadeSlideIn_1s_ease-out_0.05s_both] animate-on-scroll">
<h2 className="sm:text-5xl text-3xl font-semibold text-white tracking-tight">Ready to build your financial future?</h2>
<p className="sm:text-lg text-base font-normal text-slate-200 mt-2">Open an account in minutes and start moving money with confidence.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:justify-end [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<a className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 rounded-xl bg-white text-gray-900 hover:bg-white/90 transition text-sm font-semibold tracking-tight shadow-lg shadow-indigo-500/20 border-gradient" href="#">
              Create account
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 rounded-xl bg-white/5 hover:bg-white/10 transition text-sm font-medium text-white border-gradient" href="#">
              Talk to sales
              <svg className="lucide lucide-phone h-4 w-4 text-white/90" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
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
<a className="inline-flex items-center justify-center bg-center w-[110px] h-[44px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b60257bc-d9de-4c89-8ab5-de54c968f5e6_1600w.png)] bg-cover rounded" href="#"></a>
<p className="text-sm text-slate-300 mt-4">Modern money tools for individuals and teams. Built for speed, security and scale.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border-gradient" href="#">
<svg className="lucide lucide-twitter h-4 w-4 text-white/90" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border-gradient" href="#">
<svg -linecap="round" className="h-4 w-4 text-white/90" data-lucide="github" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.2-.27-2.3-1-3.2.28-1.1.28-2.3 0-3.4 0 0-1 .2-3 1.5-2.6-.7-5.4-.7-8 0C6 2.1 5 2 5 2c-.3 1.1-.3 2.3 0 3.4-.73.9-1.08 2-1 3.2 0 3.5 3 5.5 6 5.5-.39.5-.68 1.1-.85 1.7-.17.6-.22 1.3-.15 1.9"></path><path d="M9 18c-4 2-5-2-7-2"></path></svg>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border-gradient" href="#">
<svg className="h-4 w-4 text-white/90" data-lucide="linkedin" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
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
<p className="text-xs text-slate-400">© <span className="font-medium text-slate-300">Maze Bank</span> — All rights reserved.</p>
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
