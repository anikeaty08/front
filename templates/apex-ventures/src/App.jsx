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
      
<header className="sm:px-8 flex max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-8 pl-6 items-center justify-between [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
<div className="flex items-center gap-3">
<span className="bg-center text-sm text-slate-200/80 w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/65c46c4d-4bb6-4694-9897-33976bcdcba2_1600w.png)] bg-cover"></span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-200/90 hover:text-white transition-colors font-sans" href="#">Mission</a>
<a className="text-sm text-slate-200/90 hover:text-white transition-colors font-sans" href="#">Companies</a>
<a className="text-sm text-slate-200/90 hover:text-white transition-colors font-sans" href="#">Focus Areas</a>
<button className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-4 py-2 text-sm hover:bg-white/15 transition-colors font-sans">
<span className="iconify w-4 h-4" data-height="16" data-icon="solar:letter-bold-duotone" data-width="16"></span>
          Get in Touch
        </button>
</nav>
</header>
<main className="max-w-7xl mx-auto px-6 sm:px-8 pb-24">

<section className="sm:px-10 md:px-16 md:pt-12 md:pb-16 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] bg-center text-[#2f2a28] bg-zinc-800 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8ab4ce4c-19fb-40aa-8f6c-a24d08c5cd16_1600w.webp)] bg-cover rounded-3xl pt-10 pr-6 pb-14 pl-6 shadow-[0_2px_0_rgba(0,0,0,0.04),0_30px_60px_-15px_rgba(0,0,0,0.25)] border-gradient before:rounded-3xl">
<div className="flex justify-center">
<span className="inline-flex items-center rounded-full bg-white/10 text-white px-3 py-1 text-xs font-medium tracking-tight shadow-sm font-sans">2025</span>
</div>
<h1 className="mt-8 md:mt-10 leading-[0.9] tracking-tight">
<span className="block text-[44px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[140px] font-semibold text-neutral-50 tracking-tighter font-bricolage">Apex Ventures</span>
</h1>
<div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">
<div className="md:col-span-1">
<p className="md:text-lg text-base text-neutral-50 tracking-tight mix-blend-exclusion" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
              Mission
            </p>
</div>
<div className="md:col-span-4">
<p className="md:text-base leading-6 md:leading-7 text-sm text-stone-50/50 max-w-2xl">
              We partner with visionary founders building the future across AI, biotech, and sustainable innovation. Our commitment is to transform bold ideas into market-defining companies.
            </p>
</div>
</div>
</section>

<section className="mt-10 md:mt-12 columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">

<article className="bg-zinc-800 rounded-3xl p-7 md:p-8 flex flex-col shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_40px_-12px_rgba(0,0,0,0.4)] break-inside-avoid [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll border-gradient before:rounded-3xl">
<div className="flex items-center justify-between mb-6">
<span className="inline-flex items-center rounded-full bg-white/5 text-white/60 px-3 py-1 text-[11px] font-medium tracking-tight font-sans">NEWS</span>
<span className="iconify w-4 h-4 text-white/40" data-height="16" data-icon="solar:arrow-right-up-bold-duotone" data-width="16"></span>
</div>
<h3 className="text-3xl md:text-4xl text-white tracking-tighter font-bricolage font-semibold leading-tight">
            BioGenesis closes USD 220M Series C
          </h3>
<div className="mt-6 overflow-hidden rounded-2xl border border-white/5 bg-white/5">
<div className="aspect-[16/9] w-full">
<img alt="Orbital render" className="h-full w-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d087e92e-9d75-484e-ac36-661a4febd99f_800w.jpg"/>
</div>
</div>
</article>

<article className="rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_40px_-12px_rgba(0,0,0,0.5)] bg-zinc-800 break-inside-avoid [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll border-gradient before:rounded-3xl">
<div className="relative flex flex-col items-center justify-center text-center min-h-[280px]">
<div className="flex items-center justify-center h-16 w-16 rounded-full bg-white/5 ring-1 ring-white/10 mb-8">
<span className="iconify w-8 h-8 text-white/80" data-height="32" data-icon="solar:buildings-2-bold-duotone" data-width="32"></span>
</div>
<h3 className="text-white text-4xl md:text-5xl tracking-tighter font-bricolage font-semibold">
              San Francisco
            </h3>
<p className="mt-4 text-sm text-white/50 max-w-xs font-sans">
              Headquartered in the heart of innovation, supporting builders worldwide.
            </p>
</div>
</article>

<article className="rounded-3xl p-8 md:p-9 bg-zinc-800 relative overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_40px_-12px_rgba(0,0,0,0.5)] break-inside-avoid [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll border-gradient before:rounded-3xl">
<div className="rounded-2xl bg-white/5 h-28 w-full mb-7 flex items-center gap-4 px-6">
<div className="h-10 w-10 rounded-full bg-white/10"></div>
<div className="h-10 w-10 rounded-full bg-white/10"></div>
<div className="h-10 w-10 rounded-full bg-white/10"></div>
</div>
<div>
<span className="inline-flex items-center rounded-full bg-white/5 text-white/60 px-3 py-1 text-[11px] font-medium tracking-tight font-sans mb-5 inline-block">INVESTMENT FOCUS</span>
<h3 className="text-3xl md:text-4xl text-white tracking-tighter font-bricolage font-semibold leading-tight">
              Artificial Intelligence
            </h3>
<p className="mt-4 text-sm text-white/50 font-sans">
              Backing breakthrough AI applications that reshape industries and human potential.
            </p>
</div>
<button className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/5 text-white/80 px-4 py-2.5 text-sm hover:bg-white/10 transition-colors font-sans">
<span className="iconify w-4 h-4" data-height="16" data-icon="solar:stars-bold-duotone" data-width="16"></span>
            Learn More
          </button>
</article>

<article className="bg-zinc-800 rounded-3xl p-7 md:p-8 flex flex-col shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_40px_-12px_rgba(0,0,0,0.4)] break-inside-avoid [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll border-gradient before:rounded-3xl">
<div className="flex items-center justify-between mb-6">
<span className="inline-flex items-center rounded-full bg-white/5 text-white/60 px-3 py-1 text-[11px] font-medium tracking-tight font-sans">PORTFOLIO</span>
<span className="iconify w-4 h-4 text-white/40" data-height="16" data-icon="solar:graph-up-bold-duotone" data-width="16"></span>
</div>
<h3 className="text-3xl md:text-4xl text-white tracking-tighter font-bricolage font-semibold leading-tight">
            NeuralPath announces Series A
          </h3>
<div className="mt-6 overflow-hidden rounded-2xl border border-white/5 bg-white/5">
<div className="aspect-[3/4] w-full">
<img alt="Quantum computing" className="h-full w-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0d109d87-d2a6-4623-bf45-1f262465ff1e_800w.jpg"/>
</div>
</div>
<p className="mt-5 text-sm text-white/50 font-sans">USD 62M led by Apex Ventures</p>
</article>

<article className="rounded-3xl p-8 md:p-10 bg-zinc-800 relative overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_40px_-12px_rgba(0,0,0,0.5)] break-inside-avoid [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll border-gradient before:rounded-3xl">
<div className="flex flex-col items-center justify-center text-center min-h-[280px]">
<div className="flex items-center justify-center h-20 w-20 rounded-full bg-white/5 ring-1 ring-white/10 mb-8">
<span className="text-6xl text-white tracking-tighter font-bricolage font-semibold">67</span>
</div>
<h3 className="text-white text-4xl md:text-5xl tracking-tighter font-bricolage font-semibold">
              Companies
            </h3>
<p className="mt-4 text-sm text-white/50 max-w-xs font-sans">
              Operating in 18 countries across 11 industries
            </p>
</div>
</article>

<article className="bg-zinc-800 rounded-3xl p-7 md:p-8 flex flex-col shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_40px_-12px_rgba(0,0,0,0.4)] break-inside-avoid [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll border-gradient before:rounded-3xl">
<div className="flex items-center justify-between mb-6">
<span className="inline-flex items-center rounded-full bg-white/5 text-white/60 px-3 py-1 text-[11px] font-medium tracking-tight font-sans">EVENT</span>
<span className="iconify w-4 h-4 text-white/40" data-height="16" data-icon="solar:calendar-bold-duotone" data-width="16"></span>
</div>
<h3 className="text-3xl md:text-4xl text-white tracking-tighter font-bricolage font-semibold leading-tight">
            Innovation Forum 2025
          </h3>
<div className="mt-6 overflow-hidden rounded-2xl border border-white/5 bg-white/5">
<div className="aspect-[16/9] w-full">
<img alt="Conference" className="h-full w-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/eb834c32-d0b9-48b8-9423-c3e1b39e4821_800w.jpg"/>
</div>
</div>
<p className="mt-5 text-sm text-white/50 font-sans">April 8-10 • Austin, Texas</p>
</article>

<article className="rounded-3xl p-7 md:p-8 bg-zinc-800 relative overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_40px_-12px_rgba(0,0,0,0.5)] break-inside-avoid [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll border-gradient before:rounded-3xl">
<div className="overflow-hidden rounded-2xl border border-white/5 bg-white/5 mb-6">
<div className="aspect-[9/16] w-full">
<img alt="Team member" className="h-full w-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8ad25fd6-ba12-4c0c-b7e7-adfb47d7b2e6_800w.webp"/>
</div>
</div>
<div>
<span className="inline-flex items-center rounded-full bg-white/5 text-white/60 px-3 py-1 text-[11px] font-medium tracking-tight font-sans mb-5 inline-block">LEADERSHIP</span>
<h3 className="text-3xl md:text-4xl text-white tracking-tighter font-bricolage font-semibold leading-tight">
              Maya Rodriguez
            </h3>
<p className="mt-4 text-sm text-white/50 font-sans">
              General Partner • 12+ years backing frontier technology
            </p>
</div>
</article>

<article className="rounded-3xl p-8 md:p-9 bg-zinc-800 relative overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_40px_-12px_rgba(0,0,0,0.5)] break-inside-avoid [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll border-gradient before:rounded-3xl">
<div className="rounded-2xl bg-white/5 h-36 w-full mb-7 flex items-center justify-center">
<span className="iconify w-20 h-20 text-white/20" data-height="80" data-icon="solar:chart-bold-duotone" data-width="80"></span>
</div>
<div>
<span className="inline-flex items-center rounded-full bg-white/5 text-white/60 px-3 py-1 text-[11px] font-medium tracking-tight font-sans mb-5 inline-block">RESEARCH</span>
<h3 className="text-3xl md:text-4xl text-white tracking-tighter font-bricolage font-semibold leading-tight">
              2025 Tech Outlook
            </h3>
<p className="mt-4 text-sm text-white/50 font-sans">
              Comprehensive analysis of emerging sectors and investment opportunities in AI
            </p>
</div>
<button className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/5 text-white/80 px-4 py-2.5 text-sm hover:bg-white/10 transition-colors font-sans">
<span className="iconify w-4 h-4" data-height="16" data-icon="solar:document-text-bold-duotone" data-width="16"></span>
            Download
          </button>
</article>

<article className="rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_40px_-12px_rgba(0,0,0,0.5)] bg-zinc-800 break-inside-avoid [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll border-gradient before:rounded-3xl">
<div className="relative flex flex-col items-center justify-center text-center min-h-[280px]">
<div className="flex items-center justify-center h-16 w-16 rounded-full bg-white/5 ring-1 ring-white/10 mb-8">
<span className="iconify w-8 h-8 text-white/80" data-height="32" data-icon="solar:cup-star-bold-duotone" data-width="32"></span>
</div>
<h3 className="text-white text-4xl md:text-5xl tracking-tighter font-bricolage font-semibold leading-tight">
              Best VC of the Year
            </h3>
<p className="mt-4 text-sm text-white/50 max-w-xs font-sans">
              Named by Forbes for outstanding performance in early-stage funding
            </p>
<span className="mt-5 text-xs text-white/40 font-sans">2024 Recognition</span>
</div>
</article>

<article className="bg-zinc-800 rounded-3xl p-7 md:p-8 flex flex-col shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_40px_-12px_rgba(0,0,0,0.4)] break-inside-avoid [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll border-gradient before:rounded-3xl">
<div className="flex items-center justify-between mb-6">
<span className="inline-flex items-center rounded-full bg-white/5 text-white/60 px-3 py-1 text-[11px] font-medium tracking-tight font-sans">SUCCESS STORY</span>
<span className="iconify w-4 h-4 text-white/40" data-height="16" data-icon="solar:book-bold-duotone" data-width="16"></span>
</div>
<h3 className="text-3xl md:text-4xl text-white tracking-tighter font-bricolage font-semibold leading-tight">
            CloudSync's Path to Unicorn Status
          </h3>
<div className="mt-6 overflow-hidden rounded-2xl border border-white/5 bg-white/5">
<div className="aspect-[3/4] w-full">
<img alt="Data visualization" className="h-full w-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5f266f9c-0695-48aa-afb2-727af9a035c5_800w.webp"/>
</div>
</div>
<p className="mt-5 text-sm text-white/50 font-sans">Seed to $1.8B valuation in 5 years</p>
</article>

<article className="rounded-3xl p-8 md:p-9 relative overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_40px_-12px_rgba(0,0,0,0.5)] bg-zinc-800 break-inside-avoid [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll border-gradient before:rounded-3xl">
<div className="relative flex flex-col items-center justify-center text-center min-h-[200px]">
<div className="flex items-center justify-center h-16 w-16 rounded-full bg-white/5 ring-1 ring-white/10 mb-8">
<span className="iconify w-8 h-8 text-white/80" data-height="32" data-icon="solar:global-bold-duotone" data-width="32"></span>
</div>
<h3 className="text-white text-4xl md:text-5xl tracking-tighter font-bricolage font-semibold">
              Singapore Hub
            </h3>
<p className="mt-4 text-sm text-white/50 max-w-xs font-sans">
              Asia-Pacific base connecting founders to global opportunities
            </p>
</div>
</article>

<article className="rounded-3xl p-8 md:p-10 bg-zinc-800 relative overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_40px_-12px_rgba(0,0,0,0.5)] break-inside-avoid [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll border-gradient before:rounded-3xl">
<div className="flex flex-col items-center justify-center text-center min-h-[280px]">
<div className="flex items-center justify-center h-20 w-20 rounded-full bg-white/5 ring-1 ring-white/10 mb-8">
<span className="iconify w-10 h-10 text-white/80" data-height="40" data-icon="solar:rocket-bold-duotone" data-width="40"></span>
</div>
<h3 className="text-white text-4xl md:text-5xl tracking-tighter font-bricolage font-semibold leading-tight">
              Fund V Announcement
            </h3>
<p className="mt-4 text-sm text-white/50 max-w-xs font-sans">
              USD 750M raised to accelerate investments in climate tech and AI infrastructure
            </p>
<span className="mt-6 inline-flex items-center rounded-full bg-white/5 text-white/80 px-3 py-1.5 text-xs font-medium tracking-tight font-sans">Open for Proposals</span>
</div>
</article>
</section>

<footer className="mt-14 md:mt-20 pb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-slate-200/60">
<p className="text-sm font-sans">© 2025 Apex Ventures</p>
<div className="flex items-center gap-5">
<a className="text-sm hover:text-white transition-colors font-sans" href="#">Legal</a>
<a className="text-sm hover:text-white transition-colors font-sans" href="#">Disclosures</a>
<a className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors font-sans" href="#">
<span className="iconify w-4 h-4" data-height="16" data-icon="solar:graph-new-bold-duotone" data-width="16"></span> Connect
          </a>
</div>
</footer>
</main>

    </>
  );
}
