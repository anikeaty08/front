import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll
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



      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
        
        // Hamburger menu functionality
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const closeIcon = document.getElementById('close-icon');
        
        hamburger.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          hamburgerIcon.classList.toggle('hidden');
          closeIcon.classList.toggle('hidden');
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="" id="wrapper">

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
      z-index: 5;
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
</div>
<header className="fixed top-0 left-0 right-0 z-50 [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll">
<div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[140px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6f8d91a9-c2f3-42f0-87dd-32dafd3b3d16_1600w.png)] bg-cover rounded" href="#"></a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Homes</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Custom Design</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">About</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Contact</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-white px-5 py-2 text-sm font-medium transition-all hover:shadow-xl hover:shadow-slate-900/30" style={{boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.2), 0 8px 10px -6px rgba(15, 23, 42, 0.15)'}}>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Schedule Consultation
          </button>
</div>
<button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors" id="hamburger">
<svg className="w-6 h-6" fill="none" height="24" id="hamburger-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
<svg className="w-6 h-6 hidden" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="md:hidden hidden" id="mobile-menu">
<div className="max-w-7xl mx-auto px-6 pb-6">
<div className="rounded-3xl bg-white ring-1 ring-slate-200/60 shadow-xl shadow-slate-900/10 overflow-hidden" style={{boxShadow: '0 20px 40px -12px rgba(15, 23, 42, 0.15), 0 12px 20px -8px rgba(15, 23, 42, 0.1)'}}>
<nav className="flex flex-col">
<a className="px-6 py-4 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors border-b border-slate-100" href="#">Homes</a>
<a className="px-6 py-4 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors border-b border-slate-100" href="#">Custom Design</a>
<a className="px-6 py-4 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors border-b border-slate-100" href="#">About</a>
<a className="px-6 py-4 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors border-b border-slate-100" href="#">Contact</a>
<div className="p-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-white px-5 py-3 text-sm font-medium transition-all hover:shadow-xl hover:shadow-slate-900/30" style={{boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.2), 0 8px 10px -6px rgba(15, 23, 42, 0.15)'}}>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Schedule Consultation
                </button>
</div>
</nav>
</div>
</div>
</div>
</header>
<main className="">
<section className="relative overflow-hidden pt-24">
<div className="max-w-7xl mx-auto px-6 pt-8 pb-16 lg:pb-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-12 items-start">

<div className="lg:col-span-7 [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll animate">
<h1 className="sm:text-5xl lg:text-7xl leading-[1.05] text-4xl font-semibold text-slate-900 tracking-tighter">
  CRAFTING
  <span className="inline-block mr-2 ml-2 relative">
<span className="shadow-amber-500/20 xl:pr-2 xl:pl-2 xl:pt-0 xl:pb-0 sm:pl-2 sm:pr-2 sm:pb-0 sm:pt-0 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl pt-0 pr-1 pb-0 pl-1 relative shadow-lg" style={{boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.15), 0 8px 10px -6px rgba(245, 158, 11, 0.1)'}}>LUXURY</span>
</span>
  HOMES THAT ENDURE.
</h1>
<div className="mt-6 max-w-xl [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll animate">
<p className="text-base sm:text-lg text-slate-600">
                  For over 12 years, we've delivered bespoke luxury homes that blend timeless architecture with modern living. Every detail is crafted to elevate your lifestyle and create lasting value.
                </p>
</div>
<div className="mt-8 flex flex-col sm:flex-row gap-3 [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll animate">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 py-3 text-sm sm:text-base font-medium transition-all hover:shadow-xl hover:shadow-slate-900/30" style={{boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.2), 0 8px 10px -6px rgba(15, 23, 42, 0.15)'}}>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  Build Your Dream Home
                </button>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 ring-1 ring-slate-200 px-6 py-3 text-sm sm:text-base font-medium transition-all hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-900/10" style={{boxShadow: '0 4px 12px -2px rgba(15, 23, 42, 0.05)'}}>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  View Luxury Homes
                </button>
</div>
</div>

<aside className="lg:col-span-5 [animation:fadeSlideIn_0.5s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="max-w-md lg:ml-auto">
<p className="text-sm sm:text-base text-slate-600">
                  From initial concept to final walk-through, we guide you through every phase of creating your custom luxury residence—ensuring uncompromising quality and personalized service.
                </p>
<div className="mt-6 grid grid-cols-3 gap-4">
<div className="rounded-3xl bg-white ring-1 ring-slate-200/60 px-4 py-3 transition-all hover:shadow-lg hover:shadow-slate-400/10" style={{boxShadow: '0 4px 12px -2px rgba(71, 85, 105, 0.08)'}}>
<div className="text-2xl font-semibold tracking-tight text-slate-900">420+</div>
<div className="text-xs text-slate-600">Luxury Homes</div>
</div>
<div className="rounded-3xl bg-white ring-1 ring-slate-200/60 px-4 py-3 transition-all hover:shadow-lg hover:shadow-slate-400/10" style={{boxShadow: '0 4px 12px -2px rgba(71, 85, 105, 0.08)'}}>
<div className="text-2xl font-semibold tracking-tight text-slate-900">97%</div>
<div className="text-xs text-slate-600">On‑Time Rate</div>
</div>
<div className="rounded-3xl bg-white ring-1 ring-slate-200/60 px-4 py-3 transition-all hover:shadow-lg hover:shadow-slate-400/10" style={{boxShadow: '0 4px 12px -2px rgba(71, 85, 105, 0.08)'}}>
<div className="text-2xl font-semibold tracking-tight text-slate-900">$2B</div>
<div className="text-xs text-slate-600">Portfolio Value</div>
</div>
</div>
</div>
</aside>

<div className="lg:col-span-7 [animation:fadeSlideIn_0.5s_ease-out_0.4s_both] animate-on-scroll animate">
<div className="relative">
<img alt="Luxurious modern home exterior" className="w-full aspect-[4/3] object-cover rounded-3xl ring-1 ring-slate-200/60 transition-all hover:shadow-2xl hover:shadow-slate-400/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/99ba349f-6119-4d26-b759-12862567fbc0_1600w.webp" style={{boxShadow: '0 20px 40px -12px rgba(71, 85, 105, 0.15), 0 12px 20px -8px rgba(71, 85, 105, 0.1)'}}/>

<div className="absolute -bottom-6 left-6 sm:left-8">
<div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-5 sm:p-6 ring-1 ring-white/10 transition-all hover:shadow-2xl hover:shadow-slate-900/40" style={{boxShadow: '0 20px 40px -12px rgba(15, 23, 42, 0.3), 0 12px 20px -8px rgba(15, 23, 42, 0.2)', maxWidth: '20rem'}}>
<div className="text-3xl font-semibold tracking-tight">68+</div>
<div className="mt-1.5 text-sm text-slate-300">Master Craftsmen &amp; Designers</div>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                      Fully Licensed — Insured Excellence
                    </div>
</div>
</div>
</div>
<p className="mt-12 max-w-2xl text-slate-600">
                FoundryWorks is synonymous with refined luxury—where architectural vision meets impeccable execution, creating residences that define prestige.
              </p>
</div>
<div className="lg:col-span-5 [animation:fadeSlideIn_0.5s_ease-out_0.5s_both] animate-on-scroll animate">
<div className="relative max-w-md lg:ml-auto">
<img alt="Elegant home interior with high ceilings" className="w-full aspect-[4/5] object-cover rounded-3xl ring-1 ring-slate-200/60 transition-all hover:shadow-2xl hover:shadow-slate-400/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/588ff515-542e-4057-9122-0b57118b3e74_1600w.webp" style={{boxShadow: '0 20px 40px -12px rgba(71, 85, 105, 0.15), 0 12px 20px -8px rgba(71, 85, 105, 0.1)'}}/>

<div className="absolute -top-4 -right-4">
<div className="rounded-3xl bg-white ring-1 ring-slate-200/60 px-4 py-3 flex items-center gap-2 transition-all hover:shadow-xl hover:shadow-amber-500/15" style={{boxShadow: '0 12px 24px -6px rgba(245, 158, 11, 0.12), 0 8px 14px -4px rgba(71, 85, 105, 0.08)'}}>
<svg className="w-4 h-4 text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{fill: 'rgb(251, 191, 36)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<div>
<div className="text-sm font-medium leading-tight text-slate-900">4.9/5</div>
<div className="text-xs text-slate-600 leading-tight">Client Rating</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="pt-20 pb-20 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="[animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pr-6 pl-6 mb-12">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-slate-200/60 p-6 shadow-lg shadow-slate-900/5 transition-all hover:shadow-xl hover:shadow-slate-900/10">
<div className="flex items-start gap-4">
<div className="flex-shrink-0">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(51, 65, 85)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect className="" height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="">
<div className="text-base font-medium tracking-tight text-slate-900">Adaptive Scheduling</div>
<p className="text-sm text-slate-600 mt-1">Build phases adjust in real time to inspections and site conditions.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-slate-200/60 p-6 shadow-lg shadow-slate-900/5 transition-all hover:shadow-xl hover:shadow-slate-900/10">
<div className="flex items-start gap-4">
<div className="flex-shrink-0">
<svg className="w-5 h-5 text-slate-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"></path><path d="M2 9v1c0 1.1.9 2 2 2h1"></path><path d="M16 11h.01"></path></svg>
</div>
<div className="">
<div className="text-base font-medium tracking-tight text-slate-900">Budget Guardrails</div>
<p className="text-sm text-slate-600 mt-1">Know when to invest or save — guided by smart cost bands.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-slate-200/60 p-6 shadow-lg shadow-slate-900/5 transition-all hover:shadow-xl hover:shadow-slate-900/10">
<div className="flex items-start gap-4">
<div className="flex-shrink-0">
<svg className="w-5 h-5 text-slate-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>
</div>
<div className="">
<div className="text-base font-medium tracking-tight text-slate-900">All‑in‑One Oversight</div>
<p className="text-sm text-slate-600 mt-1">Design, build, selections, and warranty tracked together.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-slate-200/60 p-6 shadow-lg shadow-slate-900/5 transition-all hover:shadow-xl hover:shadow-slate-900/10">
<div className="flex items-start gap-4">
<div className="flex-shrink-0">
<svg className="w-5 h-5 text-slate-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<div className="text-base font-medium tracking-tight text-slate-900">Rest‑Easy Warranty</div>
<p className="text-sm text-slate-600 mt-1">2‑year craftsmanship + 10‑year structural coverage.</p>
</div>
</div>
</div>
</div>
</div>

<div className="">
<div className="rounded-[28px] bg-white ring-1 ring-slate-200/60 shadow-xl shadow-slate-900/10 overflow-hidden [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll">
<div className="grid grid-cols-1 lg:grid-cols-12">
<div className="lg:col-span-6 p-8 sm:p-12">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-semibold text-slate-900 tracking-tight">
              We unify design, engineering, and construction into one adaptive plan — no delays, no guesswork.
            </h2>
<p className="text-slate-600 max-w-xl mt-5">
              AuroraBuild™, our client portal, keeps every decision, drawing, and schedule connected so your home moves forward smoothly from concept to keys.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 py-3 text-sm sm:text-base font-medium transition-all hover:shadow-xl hover:shadow-slate-900/30" style={{boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.2), 0 8px 10px -6px rgba(15, 23, 42, 0.15)'}}>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
                Get a Proposal
              </button>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 ring-1 ring-slate-200 px-6 py-3 text-sm sm:text-base font-medium transition-all hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-900/10" style={{boxShadow: '0 4px 12px -2px rgba(15, 23, 42, 0.05)'}}>
<svg className="lucide lucide-route w-4 h-4" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
                See Our Process
              </button>
</div>

<div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
<div className="rounded-2xl bg-white ring-1 ring-slate-200/60 px-4 py-3">
<div className="text-xl font-semibold text-slate-900 tracking-tight">286</div>
<div className="text-xs text-slate-600">Custom Homes</div>
</div>
<div className="rounded-2xl bg-white ring-1 ring-slate-200/60 px-4 py-3">
<div className="text-xl font-semibold tracking-tight text-slate-900">9.8 mo</div>
<div className="text-xs text-slate-600">Avg Build Time</div>
</div>
<div className="rounded-2xl bg-white ring-1 ring-slate-200/60 px-4 py-3">
<div className="text-xl font-semibold tracking-tight text-slate-900">98.7%</div>
<div className="text-xs text-slate-600">Referral Rate</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="relative h-full">
<img alt="Modern living space with natural light" className="lg:aspect-[4/3] aspect-[16/10] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/08efc9bf-5aeb-4790-b4d1-06829b5a7cdc_1600w.webp"/>

<div className="absolute bottom-5 left-5">
<div className="rounded-2xl bg-slate-900/80 backdrop-blur-xl px-4 py-3 shadow-2xl shadow-slate-900/30 border-gradient before:rounded-2xl" style={{position: 'relative'}}>
<div className="flex items-center gap-2 text-xs text-white">
<svg className="lucide lucide-check-circle w-4 h-4 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    42 on‑site inspections logged this quarter
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section><section className="relative overflow-hidden bg-slate-950">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl"></div>
<div className="absolute -bottom-32 right-0 w-[36rem] h-[rem] rounded-full bg-cyan-400/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-20 pb-20">
<div className="max-w-3xl [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll">Built for discerning clients<p></p>
<h2 className="mt-4 text-3xl sm:text-5xl lg:text--tight text-white">
        Modern homeowners demand more than templates — they expect precision, transparency, and results. FoundryWorks delivers.
      </h2>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll">
<div className="lg:col-span-4">
<img alt="Client portrait" className="aspect-square shadow-slate-900/50 w-full object-cover rounded-3xl ring-white/10 ring-1 shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/128d394a-63e0-4638-a6b9-5f3af4d3a419_800w.jpg"/>
</div>
<div className="lg:col-span-8">
<div className="max-w-2xl">
<div className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
<p className="text-base sm:text-lg text-slate-300">
        Before FoundryWorks, I juggled selections across email threads, tracked budgets in spreadsheets, and monitored schedules through multiple apps. AuroraBuild gives me one unified dashboard — every decision is tracked, and I never have to wonder what's happening next.
      </p>
</div>
<p className="mt-4 text-sm text-slate-400">
      Maya Chen, 41 — Homeowner &amp; Product Leader
    </p>
<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
<span className="whitespace-nowrap">Decision cycles reduced 27% after onboarding</span>
<svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-900 px-5 py-2.5 text-sm font-medium transition-all hover:shadow-xl hover:shadow-slate-900/30">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
        Schedule a Consultation
      </button>
</div>
<div className="mt-8 grid grid-cols-3 gap-4">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
<div className="text-xl font-semibold tracking-tight text-white">18</div>
<div className="text-xs text-slate-400">Active Projects</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
<div className="text-xl font-semibold tracking-tight text-white">3.1</div>
<div className="text-xs text-slate-400">Avg Change Orders</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
<div className="text-xl font-semibold tracking-tight text-white">1.9%</div>
<div className="text-xs text-slate-400">Budget Variance</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="relative overflow-hidden bg-slate-950">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-20 -left-24 w-[28rem] h-[28rem] rounded-full bg-emerald-400/10 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-cyan-400/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-20 pb-24">
<div className="max-w-4xl [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll">
<p className="text-[11px] uppercase text-slate-400 tracking-[0.2em]">AuroraBuild Client Portal</p>
<h2 className="mt-3 text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-white">
        See build, budget, and schedule
      </h2>
<p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
        Track weekly momentum across trades, inspections, and selections — know exactly when to approve, pause, or renegotiate.
      </p>
</div>
<div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll">

<div className="lg:col-span-3 space-y-6">
<div className="text-sm text-slate-400 max-w-[18rem]">
<div className="flex text-slate-300 gap-2 items-center">
<svg className="w-4 h-4 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
            Know when to push — and when to pause.
          </div>
<p className="mt-2">Daily signals highlight risk zones before delays cascade.</p>
</div>
<div className="text-sm text-slate-400 max-w-[18rem]">
<div className="flex items-center gap-2 text-slate-300">
<svg className="w-4 h-4 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            See trend lines without the noise.
          </div>
<p className="mt-2">Selections, budget, and schedule unify into a single trajectory.</p>
</div>
</div>

<div className="lg:col-span-6">
<div className="mx-auto w-full max-w-[560px] rounded-[28px] bg-gradient-to-b from-slate-900 to-slate-950 ring-1 ring-white/10 shadow-2xl shadow-slate-900/50 p-5">

<div className="flex items-center justify-between">
<div className="text-white text-sm font-medium">Build Dashboard</div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs text-slate-300">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Live
            </div>
</div>

<div className="mt-5 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-slate-200 text-sm">Today's focus</div>
<div className="inline-flex items-center gap-1 text-xs text-slate-400">
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Due in 2d
              </div>
</div>
<div className="mt-1.5 text-lg font-medium tracking-tight text-white">Approve stone veneer package</div>
<div className="mt-3">
<div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[62%] bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
</div>
<div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
<span>Specs 4/6 complete</span>
<span>Vendor hold: 48 hrs</span>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-slate-200 text-sm">Weekly progress</div>
<svg className="w-4 h-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">76%</div>
<p className="text-[11px] text-slate-400">Schedule alignment</p>
<div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[76%] bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"></div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-slate-200 text-sm">Budget health</div>
<svg className="w-4 h-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">2.3%</div>
<p className="text-[11px] text-slate-400">Variance YTD • $142k contingency</p>
<div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[91%] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
</div>
</div>
</div>

<div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-slate-200 text-sm">This week</div>
<div className="text-[11px] text-slate-400">Mon–Sun</div>
</div>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="h-7 w-7 inline-flex items-center justify-center rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 flex-shrink-0">
<svg className="w-4 h-4 text-emerald-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</span>
<div className="text-sm text-slate-200 truncate">Framing inspection passed</div>
</div>
<div className="text-[11px] text-slate-400 flex-shrink-0">14:26</div>
</div>
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="h-7 w-7 inline-flex items-center justify-center rounded-full bg-amber-400/10 ring-1 ring-amber-400/20 flex-shrink-0">
<svg className="w-4 h-4 text-amber-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg>
</span>
<div className="text-sm text-slate-200 truncate">Cabinet drawings v3 uploaded</div>
</div>
<div className="text-[11px] text-slate-400 flex-shrink-0">09:10</div>
</div>
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="h-7 w-7 inline-flex items-center justify-center rounded-full bg-cyan-400/10 ring-1 ring-cyan-400/20 flex-shrink-0">
<svg className="w-4 h-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</span>
<div className="text-sm text-slate-200 truncate">Window delivery scheduled</div>
</div>
<div className="text-[11px] text-slate-400 flex-shrink-0">Tomorrow</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3 mt-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2">
<div className="text-lg font-semibold tracking-tight text-white">233</div>
<div className="text-[11px] text-slate-400">Decisions logged</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2">
<div className="text-lg font-semibold tracking-tight text-white">68/74</div>
<div className="text-[11px] text-slate-400">Selections</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2">
<div className="text-lg font-semibold tracking-tight text-white">14</div>
<div className="text-[11px] text-slate-400">Inspections</div>
</div>
</div>
</div>
</div>
<p className="mt-6 text-xs text-slate-400 text-center">
          Client view shown for demonstration. Data refreshed every 15 minutes.
        </p>
</div>

<div className="lg:col-span-3 space-y-6 hidden lg:block">
<div className="text-sm text-slate-400 max-w-[18rem]">
<div className="flex items-center gap-2 text-slate-300">
<svg className="w-4 h-4 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
            Built‑in version control.
          </div>
<p className="mt-2">Rollback to any prior decision or specification with one click.</p>
</div>
<div className="text-sm text-slate-400 max-w-[18rem]">
<div className="flex items-center gap-2 text-slate-300">
<svg className="w-4 h-4 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            Direct team chat.
          </div>
<p className="mt-2">Ask questions, approve changes, or flag issues without leaving the portal.</p>
</div>
</div>
</div>
</div><section className="overflow-hidden bg-slate-50 pt-20 pb-20 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-3xl mx-auto text-center [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll">
<p className="text-xs uppercase tracking-widest text-slate-600">Investment Transparency</p>
<h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
        Build with confidence and clarity
      </h2>
<p className="mt-4 text-base sm:text-lg text-slate-600">
        Our pricing adapts to your vision. Every estimate includes materials, labor, permits, and AuroraBuild portal access.
      </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll mt-16">

<div className="rounded-3xl bg-white ring-1 ring-slate-200/60 p-8 shadow-lg shadow-slate-900/5 transition-all hover:shadow-xl hover:shadow-slate-900/10">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Essential</h3>
<svg className="lucide lucide-home w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="home" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(148, 163, 184)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div className="mt-4">
<div className="text-4xl font-semibold tracking-tight text-slate-900">$285/sq ft</div>
<p className="mt-1 text-sm text-slate-600">Modern efficiency meets quality</p>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-700">Streamlined architectural plans</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-700">Premium materials package</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-700">AuroraBuild portal access</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-700">2-year craftsmanship warranty</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-700">10-year structural warranty</span>
</li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 ring-1 ring-slate-200 px-6 py-3 text-sm font-medium transition-all hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-900/10">
          Request Estimate
          <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="relative rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 ring-2 ring-slate-900 p-8 shadow-lg shadow-slate-900/30 transition-all hover:shadow-xl hover:shadow-slate-900/40">
<div className="absolute -top-4 left-1/2 -translate-x-1/2">
<div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-1.5 text-xs font-medium text-slate-900">
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            Most Popular
          </div>
</div>
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white">Signature</h3>
<svg className="w-5 h-5 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>
</div>
<div className="mt-4">
<div className="text-4xl font-semibold tracking-tight text-white">$375/sq ft</div>
<p className="mt-1 text-sm text-slate-300">The FoundryWorks standard</p>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-200">Everything in Essential, plus:</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-200">Custom architectural design</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-200">Luxury material selections</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-200">Smart home integration ready</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-200">Dedicated project manager</span>
</li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-medium transition-all hover:shadow-xl hover:shadow-white/20">
          Request Estimate
          <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="rounded-3xl bg-white ring-1 ring-slate-200/60 p-8 shadow-lg shadow-slate-900/5 transition-all hover:shadow-xl hover:shadow-slate-900/10">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Estate</h3>
<svg className="w-5 h-5 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<div className="mt-4">
<div className="text-4xl font-semibold tracking-tight text-slate-900">$485/sq ft</div>
<p className="mt-1 text-sm text-slate-600">Uncompromising luxury</p>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-700">Everything in Signature, plus:</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-700">Award-winning architect collaboration</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-700">Bespoke material finishes</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-700">Full smart home automation</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-700">White-glove concierge service</span>
</li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 ring-1 ring-slate-200 px-6 py-3 text-sm font-medium transition-all hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-900/10">
          Request Estimate
          <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm text-slate-600">All pricing estimates are preliminary and subject to site evaluation and final specifications.</p>
</div>
</div>
</section><section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 py-20">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl"></div>
<div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
        Ready to build your luxury home?
      </h2>
<p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
        Schedule a consultation with our team. We'll review your vision, walk your property, and deliver a comprehensive proposal within 10
      </p><div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-medium transition-all hover:shadow-2xl hover:shadow-white/20">
<svg className="lucide lucide-calendar w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="calendar" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(15, 23, 42)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
          Schedule Consultation
        </button>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/20 px-8 py-4 text-base font-medium transition-all hover:bg-white/20">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
          View Portfolio
        </button>
</div>
<div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
<div className="text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 ring-1 ring-white/20 mb-3">
<svg className="w-5 h-5 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="text-sm text-slate-300">Fully licensed &amp; insured</div>
</div>
<div className="text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 ring-1 ring-white/20 mb-3">
<svg className="w-5 h-5 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="text-sm text-slate-300">10-day proposal delivery</div>
</div>
<div className="text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 ring-1 ring-white/20 mb-3">
<svg className="w-5 h-5 text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<div className="text-sm text-slate-300">4.9/5 client satisfaction</div>
</div>
</div>
</div>
</div>
</section><footer className="bg-white border-t border-slate-200 [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

<div className="lg:col-span-2">
<div className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[140px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6f8d91a9-c2f3-42f0-87dd-32dafd3b3d16_1600w.png)] bg-cover rounded"></div>
<p className="mt-4 text-sm text-slate-600 max-w-sm">
          Building luxury homes with precision, transparency, and uncompromising quality since 2012.
        </p>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-facebook w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="facebook" fill="currentColor" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1..439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
</a>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
</div>
</div>

<div className="">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Services</h3>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Custom Homes</a></li>
<li><a #"="" className="text-sm text-slate- Remodels&lt;/a&gt;&lt;/li&gt; &lt;li&gt;&lt;a href=" href="#">Design Build</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Site Planning</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Company</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Our Process</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Portfolio</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Contact</h3>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-2">
<svg className="lucide lucide-phone text-slate-400 flex-shrink-0 w-[16px] h-[16px] mt-0.5" data-icon-replaced="true" data-lucide="phone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(148, 163, 184)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<span className="text-sm text-slate-600"><a className="" href="tel:(555) 123-4567">(555) 123-4567</a></span>
</li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<span className="text-sm text-slate-600">hello@foundryworks.com</span>
</li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm text-slate-600">2847 Oak Ridge LaneAustin, TX 78704</span>
</li>
</ul>
</div>
</div>

<div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-600">© 2024 FoundryWorks. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
<a class900="" href="#" transition-colors"="">Sitemap</a>
</div>
</div>
</div>
</footer>

</section>
</main>



    </>
  );
}
