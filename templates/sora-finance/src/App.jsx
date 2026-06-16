import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="BhoqrigscYbD7NN1fwcp"></div><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="BhoqrigscYbD7NN1fwcp"></div>

<div className="sr-only font-geist" style={{}}>
      Response: Your smart budget assistant hero section is ready below.
    </div>
<main className="min-h-screen overflow-hidden relative">



<section className="min-h-screen overflow-hidden z-10 relative" style={{}}>

<div className="" style={{maskImage: 'linear-gradient(black 0%, black 60%, transparent 100%)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="BhoqrigscYbD7NN1fwcp"></div>
</div>

<header className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] z-10 relative" style={{}}>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex items-center justify-between py-6">

<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46c13ea9-07a0-49a5-adef-0c501a634106_320w.png)] bg-cover rounded" href="#"></a>

<nav className="hidden md:flex">
<div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
<a className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white shadow hover:bg-white/15 transition tracking-tight font-geist" href="#">
              Home
            </a>
<a className="px-4 py-2 rounded-full text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition tracking-tight font-geist" href="#">
              Features
            </a>
<a className="px-4 py-2 rounded-full text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition tracking-tight font-geist" href="#">
              Pricing
            </a>
<a className="px-4 py-2 rounded-full text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition tracking-tight font-geist" href="#">
              Resources
            </a>
<a className="px-4 pysm font-medium text-white/80 hover:text-white hover:bg-white/5 transition tracking-tight font-geist" href="#">
              About
            </a>
</div>
</nav>

<div className="hidden sm:flex">
<button className="group hover:shadow-sky-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-sky-400/60 overflow-hidden bg-gradient-to-br from-sky-900/40 via-black-900/60 to-black/80 border-sky-500/30 border-2 rounded-full pt-2.5 pr-4 pb-2.5 pl-5 relative shadow-2xl backdrop-blur-xl">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-sky-500/10 via-sky-400/20 to-sky-500/10 opacity-0 rounded-2xl absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 flex items-center gap-3">
<div className="flex-1 text-left">
<p className="group-hover:text-white transition-colors duration-300 text-sm font-bold text-white font-geist drop-shadow-sm">
                  Start Free Trial
                </p>
</div>
<div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</button>
</div>

<button className="md:hidden inline-flex items-center justify-center rounded-full p-2.5 bg-white/5 border border-white/10 hover:bg-white/10 transition">
<svg className="lucide lucide-menu h-5 w-5 text-white/90" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>

<div className="md:px-8 md:pt-0 md:pb-0 max-w-7xl mt-68 mr-auto mb-20 ml-auto pt-6 pr-6 pb-28 pl-6" style={{}}>
<div className="grid place-items-center relative">

<h1 className="md:mt-10 text-[14vw] leading-none md:text-[8rem] select-none [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] font-semibold text-white/95 tracking-tight mt-10">
        SOR<span className="text-sky-400">A</span></h1>
<p className="md:text-lg [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] text-base text-white/70 text-center max-w-xl mt-4">
        Take control of your money with smarter insights. Track spending,
        manage subscriptions, and reach your financial goals effortlessly.
      </p>

<div className="flex flex-col gap-6 z-10 max-w-sm mt-6 mr-auto ml-auto relative gap-x-6 gap-y-6">
<button className="group hover:shadow-sky-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-sky-400/60 overflow-hidden [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] bg-gradient-to-br from-sky-900/40 via-black-900/60 to-black/80 border-sky-500/30 border-2 rounded-full pt-3 pr-4 pb-3 pl-6 relative shadow-2xl backdrop-blur-xl">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-sky-500/10 via-sky-400/20 to-sky-500/10 opacity-0 rounded-2xl absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 flex items-center gap-4">
<div className="flex-1 text-left">
<p className="group-hover:text-white transition-colors duration-300 text-base font-bold text-white font-geist drop-shadow-sm">
                Get Started
              </p>
</div>
<div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</button>
</div>
</div>
</div>

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.6s_both] sm:px-6 md:pt-6 lg:pt-12 lg:pl-0 lg:pr-0 text-neutral-100 font-geist max-w-6xl z-10 mr-auto ml-auto pt-6 pr-8 pl-8 relative" style={{}}>
<div className="md:px-6 -mb-8 max-w-7xl mr-auto ml-auto pr-4 pl-4" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)'}}>
<div className="relative w-full overflow-hidden bg-white/[0.04] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl">

<div className="flex border-white/10 border-b pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
<span className="h-3 w-3 rounded-full bg-green-500/80"></span>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex rounded-md border border-white/10 bg-white/5 p-1.5 text-neutral-200 hover:bg-white/10">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
<button className="hidden sm:inline-flex rounded-md border border-white/10 bg-white/5 p-1.5 text-neutral-200 hover:bg-white/10">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>
</svg>
</button>
<button className="rounded-md px-3 py-1.5 text-xs font-medium text-white bg-sky-600 hover:bg-sky-500">
              Sync
            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden md:block md:col-span-3 bg-black/30 border-r border-white/10 p-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-neutral-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
              Accounts
            </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-neutral-300 hover:bg-white/10">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="space-y-3 text-neutral-300 h-[520px] flex flex-col">

<div className="flex gap-1">
<button className="px-2 py-1 text-xs text-white rounded bg-sky-600">All</button>
<button className="px-2 py-1 text-xs rounded bg-white/5 text-neutral-400 hover:bg-white/10">Bank</button>
<button className="px-2 py-1 text-xs rounded bg-white/5 text-neutral-400 hover:bg-white/10">Cards</button>
</div>

<div className="bg-white/5 rounded-lg p-2">
<div className="text-xs text-neutral-400 mb-2">Overview</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">Total Balance</span>
<span className="text-xs font-semibold text-sky-400">$24,582</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">This Month</span>
<span className="text-xs font-semibold text-sky-400">-$3,247</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">Budget Left</span>
<span className="text-xs font-semibold text-emerald-400">$1,753</span>
</div>
</div>
</div>

<div className="flex-1 bg-white/5 rounded-lg pt-2 pr-2 pb-2 pl-2">
<div className="text-xs text-neutral-400 mb-2">Connected Accounts</div>
<ul className="space-y-1">
<li className="flex items-center gap-2 rounded-md px-2 py-1 bg-sky-500/20">
<div className="w-6 h-6 rounded bg-gradient-to-br from-sky-500 to-sky-600 grid place-items-center">
<svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
</div>
<div className="flex-1">
<div className="text-sm text-neutral-300">Chase Checking</div>
<div className="text-[11px] text-neutral-500">****4829</div>
</div>
<span className="text-xs text-sky-400">$12,450</span>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<div className="w-6 h-6 rounded bg-gradient-to-br from-purple-500 to-purple-600 grid place-items-center">
<svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
</div>
<div className="flex-1">
<div className="text-sm text-neutral-300">Savings</div>
<div className="text-[11px] text-neutral-500">****7291</div>
</div>
<span className="text-xs text-neutral-400">$8,932</span>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<div className="w-6 h-6 rounded bg-gradient-to-br from-emerald-500 to-red-500 grid place-items-center">
<svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
</div>
<div className="flex-1">
<div className="text-sm text-neutral-300">Amex Gold</div>
<div className="text-[11px] text-neutral-500">****1046</div>
</div>
<span className="text-xs text-red-400">-$2,184</span>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-sky-500 grid place-items-center">
<svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
</div>
<div className="flex-1">
<div className="text-sm text-neutral-300">Visa Platinum</div>
<div className="text-[11px] text-neutral-500">****8362</div>
</div>
<span className="text-xs text-red-400">-$1,816</span>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<div className="w-6 h-6 rounded bg-gradient-to-br from-sky-500 to-teal-500 grid place-items-center">
<svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1">
</path>
<path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
</svg>
</div>
<div className="flex-1">
<div className="text-sm text-neutral-300">Investment</div>
<div className="text-[11px] text-neutral-500">Fidelity</div>
</div>
<span className="text-xs text-sky-400">$5,200</span>
</li>
</ul>
</div>

<div className="bg-white/5 rounded-lg pt-3 pr-3 pb-3 pl-3">
<div className="mb-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="M7 16 17 6"></path>
<path d="M17 16V6h-10"></path>
</svg>
<span className="text-xs font-medium">Categories</span>
</div>
<span className="text-[11px] text-neutral-500">This Month</span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-2 h-2 rounded-full bg-sky-500"></div>
<span className="text-neutral-300 flex-1 text-xs">Food &amp; Dining</span>
<div className="text-xs text-neutral-400">$847</div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-neutral-300 flex-1 text-xs">Shopping</span>
<div className="text-xs text-neutral-400">$623</div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-neutral-300 flex-1 text-xs">Transportation</span>
<div className="text-xs text-neutral-400">$312</div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-2 h-2 rounded-full bg-cyan-500"></div>
<span className="text-neutral-300 flex-1 text-xs">Entertainment</span>
<div className="text-xs text-neutral-400">$285</div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-neutral-300 flex-1 text-xs">Bills &amp; Utilities</span>
<div className="text-xs text-neutral-400">$1,180</div>
</div>
</div>
</div>
</div>
</aside>

<main className="relative md:col-span-6 bg-black/20">
<div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs text-neutral-300">
<svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
</path>
<polyline points="3.29 7 12 12 20.71 7"></polyline>
<line x1="12" x2="12" y1="22" y2="12"></line>
</svg>
<span className="">Dashboard</span>
<span className="text-neutral-500">•</span>
<span className="text-neutral-400">November 2024</span>
<div className="ml-auto">
<button className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 hover:bg-white/10 text-[11px]">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
                  Export
                </button>
</div>
</div>
<div className="p-4 sm:p-6">

<div className="overflow-hidden rounded-xl mb-4 p-5 bg-gradient-to-br from-black/0 via-black/10 to-black/0 backdrop-blur">
<div className="flex items-start justify-between mb-4">
<div className="">
<div className="text-sm text-neutral-400 mb-1">Total Spending</div>
<div className="text-3xl font-semibold tracking-tight">$3,247</div>
<div className="text-xs mt-1 text-sky-400">↓ 12% vs last month</div>
</div>
<div className="text-right">
<div className="text-sm text-neutral-400 mb-1">Budget</div>
<div className="text-xl font-semibold">$5,000</div>
<div className="text-xs text-neutral-400 mt-1">35% remaining</div>
</div>
</div>
<div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-sky-500 rounded-full" style={{width: '65%'}}></div>
</div>
<div className="flex justify-between text-[11px] text-neutral-400 mt-1">
<span>$0</span><span>$2,500</span><span>$5,000</span>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mb-4">

<div className="col-span-2 sm:col-span-1 rounded-xl p-4 bg-gradient-to-br from-black/0 via-black/10 to-black/0 backdrop-blur">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-neutral-300">By Category</div>
<button className="text-xs text-neutral-500 hover:text-neutral-400 &lt;/div&gt; &lt;div class=" space-y-2"="">
<div className="flex items-center gap-2">
<div className="w-full bg-white/5 rounded-full h-1.5"><div className="h-1.5 rounded-full bg-sky-500" style={{width: '65%'}}></div></div>
<span className="text-[11px] text-neutral-400 whitespace-nowrap">Food $847</span>
</div>
<div className="flex items-center gap-2">
<div className="w-full bg-white/5 rounded-full h-1.5"><div className="h-1.5 rounded-full bg-purple-500" style={{width: '48%'}}></div></div>
<span className="text-[11px] text-neutral-400 whitespace-nowrap">Shop $623</span>
</div>
<div className="flex items-center gap-2">
<div className="w-full bg-white/5 rounded-full h-1.5"><div className="h-1.5 rounded-full bg-emerald-500" style={{width: '24%'}}></div></div>
<span className="text-[11px] text-neutral-400 whitespace-nowrap">Trans $312</span>
</div>
<div className="flex items-center gap-2">
<div className="w-full bg-white/5 rounded-full h-1.5"><div className="h-1.5 rounded-full bg-cyan-500" style={{width: '22%'}}></div></div>
<span className="text-[11px] text-neutral-400 whitespace-nowrap">Fun $285</span>
</div>
</button>
</div>
</div>

<div className="col-span-2 sm:col-span-1 rounded-xl p-4 bg-gradient-to-br from-black/0 via-black/10 to-black/0 backdrop-blur">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-neutral-300">Savings Goal</div>
<span className="text-xs text-sky-400">78%</span>
</div>
<div className="relative w-24 h-24 mx-auto mb-3">
<svg className="-rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8">
</circle>
<circle className="text-sky-400" cx="50" cy="50" fill="none" r="40" stroke="currentColor" stroke-dasharray="251.2" stroke-dashoffset="55" strokeLinecap="round" strokeWidth="8">
</circle>
</svg>
<div className="absolute inset-0 grid place-items-center text-center">
<div className="">
<div className="text-lg font-semibold text-white">$7,800</div>
<div className="text-[11px] text-neutral-400">of $10,000</div>
</div>
</div>
</div>
<button className="w-full px-3 py-1.5 text-white text-xs font-medium rounded-lg bg-sky-600 hover:bg-sky-500">
                    Add Funds
                  </button>
</div>
</div>

<div className="rounded-xl p-4 bg-gradient-to-br from-black/0 via-black/10 to-black/0 backdrop-blur">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-neutral-300">Recent Transactions</div>
<button className="text-xs text-neutral-500 hover:text-neutral-400">See All</button>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5">
<div className="w-8 h-8 rounded-lg grid place-items-center bg-sky-500/20">
<svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5V19a2 2 0 0 0 2 2H20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"></path>
<path d="M16 3v4"></path>
<path d="M8 3v4"></path>
<path d="M4 11h16"></path>
<path d="M11 15h1"></path>
<path d="M12 15v3"></path>
</svg>
</div>
<div className="flex-1">
<div className="text-sm text-neutral-300">Whole Foods Market</div>
<div className="text-[11px] text-neutral-500">Today, 2:34 PM</div>
</div>
<div className="text-sm font-medium text-red-400">-$67.32</div>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5">
<div className="w-8 h-8 rounded-lg grid place-items-center bg-purple-500/20">
<svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
</path>
</svg>
</div>
<div className="flex-1">
<div className="text-sm text-neutral-300">Amazon Purchase</div>
<div className="text-[11px] text-neutral-500">Yesterday, 6:12 PM</div>
</div>
<div className="text-sm font-medium text-red-400">-$143.99</div>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5">
<div className="w-8 h-8 rounded-lg grid place-items-center bg-sky-500/20">
<svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
</path>
</svg>
</div>
<div className="flex-1">
<div className="text-sm text-neutral-300">Paycheck Deposit</div>
<div className="text-[11px] text-neutral-500">Nov 1, 9:00 AM</div>
</div>
<div className="text-sm font-medium text-sky-400">+$3,500.00</div>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5">
<div className="w-8 h-8 rounded-lg grid place-items-center bg-emerald-500/20">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</div>
<div className="flex-1">
<div className="text-sm text-neutral-300">Uber Ride</div>
<div className="text-[11px] text-neutral-500">Oct 31, 11:24 PM</div>
</div>
<div className="text-sm font-medium text-red-400">-$28.50</div>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 bg-black/30 border-l border-white/10 p-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-neutral-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
              AI Insights
            </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-neutral-300 hover:bg-white/10">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</button>
</div>
<div className="space-y-3 h-[480px] overflow-y-auto">

<div className="rounded-lg p-3 border border-sky-500/20 bg-sky-500/10">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full grid place-items-center bg-sky-500/20">
<svg className="w-3 h-3 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M2 12h20"></path>
</svg>
</div>
<span className="text-xs font-medium text-sky-400">Smart Tip</span>
</div>
<p className="text-xs text-neutral-300 leading-relaxed mb-2">
                You're spending 23% less on dining this month. Keep it up to reach your savings goal faster!
              </p>
<button className="text-[11px] text-sky-400 hover:text-sky-300">View Details →</button>
</div>

<div className="bg-white/5 rounded-lg p-3">
<div className="mb-2 flex items-center justify-between">
<span className="text-xs font-medium text-neutral-300">Upcoming Bills</span>
<span className="text-[11px] text-neutral-500">Next 7 days</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 bg-white/5 rounded">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-red-500 rounded-full"></div>
<div className="">
<div className="text-xs text-neutral-300">Rent</div>
<div className="text-[11px] text-neutral-500">Due Nov 1</div>
</div>
</div>
<span className="text-xs font-medium text-neutral-300">$1,850</span>
</div>
<div className="flex items-center justify-between p-2 bg-white/5 rounded">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<div>
<div className="text-xs text-neutral-300">Electric</div>
<div className="text-[11px] text-neutral-500">Due Nov 5</div>
</div>
</div>
<span className="text-xs font-medium text-neutral-300">$124</span>
</div>
<div className="flex items-center justify-between p-2 bg-white/5 rounded">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-sky-500"></div>
<div>
<div className="text-xs text-neutral-300">Internet</div>
<div className="text-[11px] text-neutral-500">Due Nov 7</div>
</div>
</div>
<span className="text-xs font-medium text-neutral-300">$79</span>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3">
<div className="mb-2 flex items-center justify-between">
<span className="text-xs font-medium text-neutral-300">Budget Alerts</span>
<span className="px-1.5 py-0.5 rounded-full text-[11px] bg-emerald-500/20 text-emerald-400">2 Active</span>
</div>
<div className="space-y-2">
<div className="p-2 border rounded bg-emerald-500/10 border-emerald-500/20">
<div className="flex items-center gap-2 mb-1">
<svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
<span className="text-xs text-emerald-400">Shopping Budget</span>
</div>
<p className="text-[11px] text-neutral-300">87% used ($623 of $720)</p>
</div>
<div className="p-2 border border-red-500/20 rounded bg-red-500/10">
<div className="flex items-center gap-2 mb-1">
<svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
<span className="text-xs text-red-400">Dining Out</span>
</div>
<p className="text-[11px] text-neutral-300">Budget exceeded by $97</p>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3">
<div className="mb-2 text-xs font-medium text-neutral-300">Quick Actions</div>
<div className="space-y-2">
<button className="w-full flex items-center gap-2 p-2 bg-white/5 hover:bg-white/10 rounded text-left">
<svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-xs text-neutral-300">Add Transaction</span>
</button>
<button className="w-full flex items-center gap-2 p-2 bg-white/5 hover:bg-white/10 rounded text-left">
<svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
<span className="text-xs text-neutral-300">Create Budget</span>
</button>
<button className="w-full flex items-center gap-2 p-2 bg-white/5 hover:bg-white/10 rounded text-left">
<svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
<span className="text-xs text-neutral-300">Set Savings Goal</span>
</button>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3">
<div className="mb-2 text-xs font-medium text-neutral-300">This Month</div>
<div className="space-y-2 text-[11px]">
<div className="flex justify-between">
<span className="text-neutral-400">Income</span><span className="text-sky-400">+$3,500</span>
</div>
<div className="flex justify-between">
<span className="text-neutral-400">Expenses</span><span className="text-red-400">-$3,247</span>
</div>
<div className="flex justify-between">
<span className="text-neutral-400">Savings</span><span className="text-sky-400">+$500</span>
</div>
<div className="h-px bg-white/10 my-1"></div>
<div className="flex justify-between font-medium">
<span className="text-neutral-300">Net</span><span className="text-sky-400">+$753</span>
</div>
</div>
</div>
</div>

<div className="mt-4 flex gap-2">
<button className="flex-1 px-3 py-2 text-white rounded text-xs font-medium bg-sky-600 hover:bg-sky-500">Sync Accounts</button>
<button className="px-3 py-2 bg-white/5 text-neutral-300 rounded text-xs font-medium border border-white/10 hover:bg-white/10">
<svg className="inline w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</div>
</aside>
</div>
</div>
</div>
</div>
</section>


<section className="sm:pt-24 sm:pb-12 z-10 mx-8 pt-24 pb-24 relative">
<section className="lg:p-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate bg-gradient-to-br from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative">

<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 px-6">
<div className="text-left">
<h2 className="leading-7 text-base font-semibold text-sky-400 font-geist">Feature</h2>
<h2 className="sm:text-4xl [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-3xl font-semibold text-white tracking-tight font-geist mt-3 animate">
        Powerful tools for modern budgeting
      </h2>
<p className="leading-8 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-lg text-white/70 max-w-2xl mt-4 animate">
        Track spending, forecast savings, and stop surprise renewals—Sora keeps everything in one clear view.
      </p>
</div>

<div aria-label="Feature categories" className="md:mt-0 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll mt-8 animate" id="feature-tabs" role="tablist">
<div className="inline-flex border-white/10 border rounded-xl pt-1 pr-1 pb-1 pl-1 items-center">
<button aria-selected="true" className="px-4 py-2 text-sm font-medium rounded-lg transition bg-sky-500/20 text-sky-200 ring-1 ring-inset ring-sky-500/30" data-feature="overview" role="tab" type="button">
          Overview
        </button>
<button aria-selected="false" className="px-4 py-2 text-sm font-medium rounded-lg transition text-white/80 hover:text-white" data-feature="automation" role="tab" type="button">
          Automation
        </button>
<button aria-selected="false" className="px-4 py-2 text-sm font-medium rounded-lg transition text-white/80 hover:text-white" data-feature="security" role="tab" type="button">
          Security
        </button>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:px-0 pr-0 pl-0 gap-x-6 gap-y-6">

<div className="lg:col-span-5 overflow-hidden sm:p-10 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-xl animate">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.02] via-white/[0.03] to-white/[0.02]"></div>
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(1000px 500px at 10% 0%, rgba(14,165,233,0.12), transparent 60%)'}}></div>

<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white font-geist" data-slot="title">
    Spend smarter with real-time insights
  </h3>
<p className="mt-3 text-white/70 leading-7" data-slot="desc">
    Category breakdowns, trend lines, and alerts help you react fast and stay under budget.
  </p>

<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md bg-sky-500/20 ring-1 ring-sky-500/30">
<svg className="h-3.5 w-3.5 text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 5 5L20 7"></path>
</svg>
</span>
<p className="text-sm text-white/80">Live expense signals &amp; category trends</p>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md bg-sky-500/20 ring-1 ring-sky-500/30">
<svg className="h-3.5 w-3.5 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<p className="text-sm text-white/80">Savings pace &amp; monthly progress</p>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md bg-sky-500/20 ring-1 ring-sky-500/30">
<svg className="h-3.5 w-3.5 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<p className="text-sm text-white/80">Calendar-aware renewals</p>
</li>
</ul>

<div className="mt-6 relative">
<button aria-label="See all features" className="group hover:shadow-sky-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-sky-400/60 overflow-hidden bg-gradient-to-br from-sky-900/40 via-black-900/60 to-black/80 border-sky-500/30 border-2 rounded-full pt-3 pr-4 pb-3 pl-6 relative shadow-2xl backdrop-blur-xl w-full max-w-[16rem]">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-sky-500/10 via-sky-400/20 to-sky-500/10 opacity-0 rounded-2xl absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 flex items-center gap-4">
<div className="flex-1 text-left">
<p className="group-hover:text-white transition-colors duration-300 text-sm font-bold text-white font-geist drop-shadow-sm">
            See all features
          </p>
</div>
<div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</button>
</div>

<div className="mt-8 grid grid-cols-2 gap-6">
<div>
<div className="text-4xl font-semibold tracking-tight text-white font-geist">92%</div>
<p className="text-sm text-white/60 mt-2">Report clearer budgeting</p>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-white font-geist">45+</div>
<p className="text-sm text-white/60 mt-2">New features this year</p>
</div>
</div>
</div>

<div className="lg:col-span-7 overflow-hidden sm:p-6 [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll border-white/10 border rounded-3xl pt-4 pr-4 pb-4 pl-4 relative backdrop-blur-xl animate">

<div className="flex items-center justify-between rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-3 mb-4">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-lg bg-sky-500/20 flex items-center justify-center">
<svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20c4.418 0 8-3.582 8-8S16.418 4 12 4a8 8 0 1 0 0 16Z"></path>
<path d="M12 6v6l3 3"></path>
</svg>
</div>
<span className="text-sm font-medium text-slate-200 font-geist">Sora</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<div className="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-slate-400 font-geist">
            Live insights enabled
          </div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
<div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
<div className="mb-2 flex items-center justify-between">
<div className="h-7 w-7 rounded-lg bg-sky-500/15 flex items-center justify-center">
<svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M19 9l-6 6-4-4-3 3"></path></svg>
</div>
</div>
<div className="text-[10px] text-slate-400 font-geist">Spending</div>
<div className="text-xl font-semibold text-white font-geist tracking-tight">$2,450</div>
<div className="text-[10px] text-sky-400 font-geist">-3.4% vs last month</div>
</div>
<div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
<div className="mb-2 flex items-center justify-between">
<div className="h-7 w-7 rounded-lg bg-sky-500/15 flex items-center justify-center">
<svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l3 3"></path></svg>
</div>
</div>
<div className="text-[10px] text-slate-400 font-geist">Savings</div>
<div className="text-xl font-semibold text-white font-geist tracking-tight">$12,890</div>
<div className="text-[10px] text-sky-400 font-geist">+8.2% growth</div>
</div>
<div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
<div className="mb-2 flex items-center justify-between">
<div className="h-7 w-7 rounded-lg bg-sky-500/15 flex items-center justify-center">
<svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M2 12h20"></path></svg>
</div>
</div>
<div className="text-[10px] text-slate-400 font-geist">Investments</div>
<div className="text-xl font-semibold text-white font-geist tracking-tight">$8,320</div>
<div className="text-[10px] text-sky-400 font-geist">+4.6% returns</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

<div className="lg:col-span-2 rounded-xl bg-white/[0.03] border border-white/10 p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-sm text-slate-300 font-geist">Expense Breakdown</span>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-slate-400 font-geist">Last 30 Days</span>
</div>
<div className="grid grid-cols-12 gap-2 h-24 items-end">
<div className="h-6 bg-white/10 rounded"></div>
<div className="h-10 bg-white/10 rounded"></div>
<div className="h-8 bg-white/10 rounded"></div>
<div className="h-12 bg-white/10 rounded"></div>
<div className="h-9 bg-white/10 rounded"></div>
<div className="h-7 bg-white/10 rounded"></div>
<div className="h-6 bg-white/10 rounded"></div>
<div className="h-24 bg-sky-500/70 rounded shadow-[0_0_20px_rgba(56,189,248,0.45)]"></div>
<div className="h-10 bg-white/10 rounded"></div>
<div className="h-7 bg-white/10 rounded"></div>
<div className="h-16 bg-white/10 rounded"></div>
<div className="h-20 bg-white/10 rounded"></div>
</div>
</div>

<div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 flex items-center justify-center">
<div className="relative w-32 h-32">
<svg className="-rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,255,255,0.08)" strokeWidth="10"></circle>
<circle className="text-sky-400" cx="50" cy="50" fill="none" r="40" stroke="currentColor" stroke-dasharray="251.2" stroke-dashoffset="87" strokeLinecap="round" strokeWidth="10"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight text-white font-geist">72%</div>
<div className="text-[10px] text-slate-400 font-geist">Budget Used</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-4 rounded-xl bg-white/[0.03] border border-white/10 p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-sm text-slate-300 font-geist">November 2025</span>
<div className="flex items-center gap-2 text-xs text-slate-400 font-geist">
<span>Oct</span><span className="text-slate-500">•</span><span>Dec</span>
</div>
</div>
<div className="h-16 rounded-lg bg-white/[0.02] border border-white/10 flex items-center px-3 overflow-hidden">
<div className="text-[10px] text-slate-500 font-geist mr-3">Thu</div>
<div className="px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-500/30 text-[10px] text-sky-300 font-geist inline-flex items-center gap-2">
            Subscription Renewal
            <span className="flex -space-x-1">
<span className="w-3 h-3 rounded-full bg-sky-400 border border-black/50"></span>
<span className="w-3 h-3 rounded-full bg-sky-500 border border-black/50"></span>
<span className="w-3 h-3 rounded-full bg-sky-600 border border-black/50"></span>
</span>
</div>
</div>
</div>
</div>
</div>
</section>
</section><section className="sm:pt-12 sm:pb-12 z-10 mx-8 pt-24 pb-24 relative">
<div className="lg:pt-8 lg:pl-8 lg:pr-8 lg:pb-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-br from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl mr-auto mb-16 ml-auto pr-6 pl-6">

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-left max-w-none">
<h2 className="leading-7 text-base font-semibold text-sky-400 font-geist">Pricing</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl font-geist">
      Simple plans for every team
    </p>
<p className="mt-6 text-lg leading-8 text-white/70">
      Choose the plan that fits your workflow and scale as your business grows.
    </p>
</div>

<div className="md:mt-0 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll mt-8">
<div aria-label="Billing period" className="inline-flex border-white/10 border rounded-xl pt-1 pr-1 pb-1 pl-1 items-center" id="billing-toggle" role="tablist">
<button aria-selected="true" className="px-4 py-2 text-sm font-medium rounded-lg transition bg-sky-500/20 text-sky-200 ring-1 ring-inset ring-sky-500/30" data-period="monthly" role="tab" type="button">
        Monthly
      </button>
<button aria-selected="false" className="px-4 py-2 text-sm font-medium rounded-lg transition text-white/80 hover:text-white" data-period="annual" role="tab" type="button">
        Annual <span className="ml-1 text-xs text-sky-300/80">(save 20%)</span>
</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 max-w-2xl mx-auto gap-x-8 gap-y-8">

<div className="overflow-hidden [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-xl">

<div className="flex items-start justify-between">
<div className="">
<h3 className="text-3xl font-semibold tracking-tight text-white font-geist">Spending Intelligence</h3>
<p className="mt-2 text-sky-400 font-medium text-sm">Starter Plan</p>
</div>
<button className="group hover:shadow-sky-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-sky-400/60 overflow-hidden bg-gradient-to-br from-sky-900/40 via-black-900/60 to-black/80 border-sky-500/30 border-2 rounded-full pt-2 pr-3 pb-2 pl-4 relative shadow-2xl backdrop-blur-xl">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-sky-500/10 via-sky-400/20 to-sky-500/10 opacity-0 rounded-2xl absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 flex items-center gap-2">
<div className="flex-1 text-left">
<p className="group-hover:text-white transition-colors duration-300 text-xs font-bold text-white font-geist drop-shadow-sm">
              Contact Us
            </p>
</div>
<div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</button>
</div>

<div className="flex items-end gap-2 mt-6">
<div className="text-5xl font-bold tracking-tight text-white font-geist">$9</div>
<div className="pb-2 text-white/60 text-sm">/month</div>
</div>
<p className="mt-3 text-white/70 text-lg leading-8">
      Make sense of every dollar. Sora classifies transactions, highlights trends, and surfaces insights you can act on.
    </p>
<div className="h-px bg-white/10 my-6"></div>

<ul className="space-y-4">
<li className="flex items-start gap-3 text-base text-white/90">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/15">
<svg className="h-3.5 w-3.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
        Real-time categorization with accuracy improvements over time.
      </li>
<li className="flex items-start gap-3 text-base text-white/90">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/15">
<svg className="h-3.5 w-3.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
        Trend analysis with monthly deltas and seasonality highlights.
      </li>
<li className="flex items-start gap-3 text-base text-white/90">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/15">
<svg className="h-3.5 w-3.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
        Subscription detection, duplicates cleanup, and price change alerts.
      </li>
<li className="flex items-start gap-3 text-base text-white/90">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/15">
<svg className="h-3.5 w-3.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
        Anomaly alerts for unusual spend and merchant risk signals.
      </li>
<li className="flex items-start gap-3 text-base text-white/90">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/15">
<svg className="h-3.5 w-3.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
        Exportable reports for taxes and budgeting.
      </li>
</ul>
</div>

<div className="overflow-hidden [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-xl">

<div className="flex items-start justify-between">
<div className="">
<h3 className="text-3xl font-semibold tracking-tight text-white font-geist">Automation &amp; Goals</h3>
<p className="mt-2 text-sky-400 font-medium text-sm">Pro Plan</p>
</div>
<button className="group hover:shadow-sky-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-sky-400/60 overflow-hidden bg-gradient-to-br from-sky-900/40 via-black-900/60 to-black/80 border-sky-500/30 border-2 rounded-full pt-2 pr-3 pb-2 pl-4 relative shadow-2xl backdrop-blur-xl">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-sky-500/10 via-sky-400/20 to-sky-500/10 opacity-0 rounded-2xl absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 flex items-center gap-2">
<div className="flex-1 text-left">
<p className="group-hover:text-white transition-colors duration-300 text-xs font-bold text-white font-geist drop-shadow-sm">
              Contact Us
            </p>
</div>
<div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</button>
</div>

<div className="flex items-end gap-2 mt-6">
<div className="text-5xl font-bold tracking-tight text-white font-geist">$19</div>
<div className="pb-2 text-white/60 text-sm">/month</div>
</div>
<p className="mt-3 text-white/70 text-lg leading-8">
      Reach your targets faster. Set rules, schedule transfers, and let Sora automate the busywork.
    </p>
<div className="h-px bg-white/10 my-6"></div>

<ul className="space-y-4">
<li className="flex items-start gap-3 text-base text-white/90">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/15">
<svg className="h-3.5 w-3.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
        Auto-save rules by paycheck, merchant, or category.
      </li>
<li className="flex items-start gap-3 text-base text-white/90">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/15">
<svg className="h-3.5 w-3.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
        Smart bill reminders, autopay tracking, and snooze.
      </li>
<li className="flex items-start gap-3 text-base text-white/90">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/15">
<svg className="h-3.5 w-3.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
        Envelope-style budgets with rollover and guardrails.
      </li>
<li className="flex items-start gap-3 text-base text-white/90">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/15">
<svg className="h-3.5 w-3.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
        Shared budgets and goals for partners or family.
      </li>
<li className="flex items-start gap-3 text-base text-white/90">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/15">
<svg className="h-3.5 w-3.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
        Integrations and secure sync with your favorite banks.
      </li>
</ul>
</div>
</div>
</div>
</section><section className="sm:pt-12 sm:pb-12 z-10 mx-8 pt-24 pb-24 relative">
<div className="lg:pt-8 lg:pl-8 lg:pr-8 lg:pb-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-br from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl mr-auto mb-16 ml-auto pr-6 pl-6">

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-left max-w-none">
<h2 className="text-base font-semibold leading-7 text-sky-400 font-geist">Testimonials</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl font-geist">
        Loved by thousands of users
      </p>
<p className="mt-6 text-lg leading-8 text-white/70">
        See what our customers are saying about their financial journey with SORA.
      </p>
</div>

<div className="md:mt-0 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll mt-0">
<button className="group hover:shadow-sky-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-sky-400/60 overflow-hidden bg-gradient-to-br from-sky-900/40 via-black-900/60 to-black/80 border-sky-500/30 border-2 rounded-full pt-3 pr-4 pb-3 pl-6 relative shadow-2xl backdrop-blur-xl">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-sky-500/10 via-sky-400/20 to-sky-500/10 opacity-0 rounded-2xl absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="relative z-10 flex items-center gap-4">
<div className="flex-1 text-left">
<p className="group-hover:text-white transition-colors duration-300 text-base font-bold text-white font-geist drop-shadow-sm">
        Read More
      </p>
</div>
<div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:max-w-none lg:grid-cols-2 max-w-2xl mr-auto ml-auto gap-x-8 gap-y-8">
<div className="col-span-2 overflow-hidden border-0 rounded-none relative">

<img alt="3D globe" className="pointer-events-none select-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] max-w-none opacity-30 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll absolute top-0 right-0 bottom-0 left-0"></div>


<div className="sm:px-6 max-w-5xl mr-auto ml-auto pt-10 pr-4 pb-16 pl-4 relative">

<div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -rotate-6 opacity-40">
</div>

<div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 rotate-6 opacity-40">
</div>

<div className="relative mx-auto max-w-3xl">
<div className="absolute -inset-x-6 -top-3 translate-y-2 rotate-[-2deg] rounded-2xl border border-white/10 bg-white/[0.04] h-[270px] hidden sm:block">
</div>
<div className="-inset-x-3 hidden sm:block h-[270px] border-white/10 border rounded-2xl absolute top-1 translate-y-2 rotate-[2deg]">
</div>

<div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] shadow-2xl backdrop-blur-xl overflow-hidden rotate-[-1.5deg]">
<div className="p-6 sm:p-8">
<div className="flex gap-1 text-yellow-400">
<svg className="w-4 h-4" fill="currentColor" stroke="currentColor" strokeWidth="1.25" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15 8.5 22 9 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9 9 8.5"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" stroke="currentColor" strokeWidth="1.25" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15 8.5 22 9 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9 9 8.5"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" stroke="currentColor" strokeWidth="1.25" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15 8.5 22 9 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9 9 8.5"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" stroke="currentColor" strokeWidth="1.25" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15 8.5 22 9 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9 9 8.5"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" stroke="currentColor" strokeWidth="1.25" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15 8.5 22 9 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9 9 8.5"></polygon>
</svg>
</div>
<p className="mt-4 text-white font-semibold tracking-tight font-geist text-lg sm:text-xl leading-7 sm:leading-8">
                "Upwey Real Estate &amp; Investment Company is the best. I feel so comfortable investing my money with
                them and super impressed with their amazing services and friendly team of staff. I recommend it to
                everyone!"
              </p>
<div className="mt-6 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de332db2-c007-4452-a139-bbc3c3436c76_800w.webp"/>
<div className="">
<div className="text-sm text-white/90 font-medium font-geist">Iheijeto Caroline</div>
<div className="text-[11px] text-white/60 font-geist">Secretary at Razeva schools</div>
</div>
</div>
</div>

<div className="px-6 pb-4">
</div>
</div>
</div>

<div className="flex gap-4 mt-8 relative gap-x-4 gap-y-4 items-center justify-center">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/15">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/15">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

</main>

<footer className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-black/40 z-10 border-white/10 border-t relative backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

<div className="col-span-2 md:col-span-1">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46c13ea9-07a0-49a5-adef-0c501a634106_320w.png)] bg-cover rounded mb-4" href="#"></a>
<p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Take control of your finances with smarter insights and automated budgeting tools.
            </p>
</div>

<div>
<h3 className="text-sm font-semibold text-white mb-4 font-geist">Product</h3>
<ul className="space-y-3">
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Features</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Pricing</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Security</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white mb-4 font-geist">Company</h3>
<ul className="space-y-3">
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">About</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Blog</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Careers</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white mb-4 font-geist">Legal</h3>
<ul className="space-y-3">
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Privacy</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Terms</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Security</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-white/40">© 2024 Sora. All rights reserved.</p>

<div className="flex items-center gap-4">
<a className="text-white/40 hover:text-white transition" href="#">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
<a className="text-white/40 hover:text-white transition" href="#">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path>
</svg>
</a>
<a className="text-white/40 hover:text-white transition" href="#">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
