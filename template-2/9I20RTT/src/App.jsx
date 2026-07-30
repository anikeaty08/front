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



    lucide.createIcons();
  
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
      

<nav className="sticky top-0 z-50 opacity-0 animate-fade-in-up bg-stone-900/90 border-stone-700 border-b backdrop-blur-sm" id="aura-emd8a4d45">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between" id="aura-emd8a3k52">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight font-geist text-stone-100">VaultSync</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition font-geist text-stone-300 hover:text-white" href="#">Solutions</a>
<a className="text-sm font-medium transition font-geist text-stone-300 hover:text-white" href="#">Pricing</a>
<a className="text-sm font-medium transition font-geist text-stone-300 hover:text-white" href="#">Resources</a>
<button className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition bg-stone-100 text-stone-900 hover:bg-stone-200">
<span className="font-geist">Get Started</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<button className="md:hidden p-2 text-stone-100 hover:text-white">
<svg className="lucide lucide-menu h-6 w-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</nav>
<main className="max-w-7xl sm:px-6 lg:px-8 lg:py-16 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="grid gap-6 lg:gap-8 lg:grid-cols-2">

<section className="relative flex flex-col overflow-hidden lg:p-16 opacity-0 animate-fade-in-up animate-delay-200 bg-gradient-to-br rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] justify-between from-stone-900 to-stone-800/80" style={{backgroundImage: `url('/assets/194b1595-de31-49e0-aee4-a216281a1b83_1600w.jpg')`, backgroundSize: `cover`}}>
<div className="">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium mb-6 bg-emerald-900 text-emerald-300">
<svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-geist">99.9% Uptime SLA</span>
</div>
<h1 className="leading-tight sm:text-5xl lg:text-6xl text-4xl font-medium text-white tracking-tight font-jakarta" id="aura-emd8a3n59" style={{}}><br className="hidden sm:block" /><span className="font-jakarta font-medium text-stone-300" style={{}}>Ridiculously easy backup</span> & recovery</h1>
<p className="mt-6 max-w-lg text-lg leading-relaxed font-geist text-stone-300">
            Instant, unbreakable recovery with enterprise-grade security. Reduce costs by up to 85% while ensuring zero data loss.
          </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:shadow-lg bg-stone-100 text-stone-900 hover:bg-stone-200">
<span className="font-geist">Start Free Trial</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition hover:border-stone-500 border-stone-700 text-stone-300 hover:bg-stone-800">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
<span className="font-geist">Watch Demo</span>
</button>
</div>
</div>

<div className="absolute top-6 right-6 w-56 rounded-2xl backdrop-blur-sm p-4 shadow-lg border bg-stone-900/90 border-stone-700/20">
<div className="flex items-center gap-2 text-sm font-medium text-stone-300">
<svg className="lucide lucide-activity h-5 w-5 text-emerald-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="font-geist">Recovery Speed</span>
</div>
<div className="mt-3 flex items-end justify-between">
<p className="text-3xl tracking-tight font-jakarta font-medium text-white" style={{}}>15<span className="text-lg align-top font-geist text-stone-300">s</span></p>
<p className="text-xs font-medium font-geist text-emerald-400">↑ 94% faster</p>
</div>
</div>
</section>

<section className="flex flex-col lg:p-16 opacity-0 animate-fade-in-up animate-delay-400 bg-gradient-to-br rounded-3xl pt-8 pr-8 pb-8 pl-8 justify-between from-orange-100 to-orange-200/60">
<div className="">
<h2 className="text-4xl leading-tight tracking-tight sm:text-5xl font-jakarta font-medium" style={{}}>Choose your cloud</h2>
<p className="mt-4 max-w-md text-base font-geist text-stone-700">
            Seamlessly integrate with any cloud platform. Deploy in minutes, not months.
          </p>
</div>
<div className="mt-8 space-y-3">
<button className="group flex w-full items-center justify-between rounded-xl px-5 py-4 text-left transition hover:shadow-md bg-white/70 hover:bg-white">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-lg">
<svg className="lucide lucide-cloud h-5 w-5 text-white" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
<div>
<span className="font-semibold font-geist text-stone-900">Amazon Web Services</span>
<p className="text-sm font-geist text-stone-600">S3, EBS, RDS, Lambda</p>
</div>
</div>
<svg className="lucide lucide-chevron-right h-5 w-5 group-hover:text-stone-600 transition text-stone-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="group flex w-full items-center justify-between rounded-xl px-5 py-4 text-left transition hover:shadow-md bg-white/70 hover:bg-white">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-lg">
<svg className="lucide lucide-cloud-rain h-5 w-5 text-white" data-lucide="cloud-rain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>
</div>
<div className="">
<span className="font-semibold font-geist text-stone-900">Microsoft Azure</span>
<p className="text-sm font-geist text-stone-600">Blob Storage, SQL Database, VMs</p>
</div>
</div>
<svg className="lucide lucide-chevron-right h-5 w-5 group-hover:text-stone-600 transition text-stone-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="group flex w-full items-center justify-between rounded-xl px-5 py-4 text-left transition hover:shadow-md bg-white/70 hover:bg-white">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 bg-emerald-500 rounded-lg">
<svg className="lucide lucide-cloud-snow h-5 w-5 text-white" data-lucide="cloud-snow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M8 15h.01"></path><path d="M8 19h.01"></path><path d="M12 17h.01"></path><path d="M12 21h.01"></path><path d="M16 15h.01"></path><path d="M16 19h.01"></path></svg>
</div>
<div className="">
<span className="font-semibold font-geist text-stone-900">Google Cloud Platform</span>
<p className="text-sm font-geist text-stone-600">Cloud Storage, Compute Engine</p>
</div>
</div>
<svg className="lucide lucide-chevron-right h-5 w-5 group-hover:text-stone-600 transition text-stone-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</section>

<section className="flex flex-col overflow-hidden opacity-0 animate-fade-in-up animate-delay-600 border rounded-3xl shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] bg-white border-stone-200">
<div className="flex flex-col gap-6 lg:p-10 lg:flex-row lg:gap-8 pt-8 pr-8 pb-8 pl-8">
<div className="lg:w-3/5">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-star h-6 w-6 fill-current text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-6 w-6 fill-current text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-6 w-6 fill-current text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-6 w-6 fill-current text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half h-6 w-6 fill-current text-amber-400" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<p className="font-geist text-base leading-relaxed mb-4 text-stone-700">
    "VaultSync transformed our backup strategy, providing seamless and reliable cloud integration. Our recovery times have improved drastically, and the cost savings are evident."
  </p>
<div className="">
<p className="font-semibold font-geist text-lg mb-1 text-stone-900">Jane Doe</p>
<p className="text-sm font-geist text-stone-600">CTO, TechCorp Inc.</p>
</div>
</div>
<div className="lg:w-2/5">
<img alt="Data Center" className="h-48 w-full lg:h-full object-cover rounded-2xl" src="/assets/4c608a1e-94a8-44ff-952f-86c0e50dacd0_800w.jpg" />
</div>
</div>
<div className="grid grid-cols-3 divide-x border-t divide-stone-100 border-stone-100">
<div className="p-6 text-center">
<div className="flex items-center justify-center gap-2 mb-2">
<svg className="lucide lucide-shield-check h-4 w-4 text-emerald-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<p className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-geist">Data Breaches</p>
</div>
<p className="text-3xl font-jakarta font-medium text-stone-900" style={{}}>Zero</p>
<p className="text-xs mt-1 font-geist text-stone-600">Since 2019</p>
</div>
<div className="p-6 text-center">
<div className="flex items-center justify-center gap-2 mb-2">
<svg className="lucide lucide-zap h-4 w-4 text-blue-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<p className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-geist">Recovery Time</p>
</div>
<p className="text-3xl font-jakarta font-medium text-stone-900" style={{}}>15<span className="text-base font-geist">s</span></p>
<p className="text-xs mt-1 font-geist text-stone-600">Average RTO</p>
</div>
<div className="p-6 text-center">
<div className="flex items-center justify-center gap-2 mb-2">
<svg className="lucide lucide-trending-down h-4 w-4 text-orange-600" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<p className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-geist">Cost Savings</p>
</div>
<p className="text-3xl font-jakarta font-medium text-stone-900" style={{}}>85<span className="text-base font-geist">%</span></p>
<p className="text-xs mt-1 font-geist text-stone-600">vs Legacy</p>
</div>
</div>
</section>

<section className="flex flex-col lg:p-16 opacity-0 animate-fade-in-up animate-delay-800 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-[url(/assets/2fdcc9de-94c9-4f1c-80d4-900440428d32_1600w.jpg)] bg-cover border rounded-3xl pt-8 pr-8 pb-8 pl-8 justify-between bg-stone-900 border-stone-700">
<div className="">
<h2 className="text-4xl tracking-tight sm:text-5xl font-jakarta font-medium text-white" style={{}}>Resources & Insights</h2>
<p className="mt-4 font-geist text-stone-400">Stay ahead with expert guidance and industry best practices.</p>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-1">
<article className="group rounded-2xl bg-gradient-to-br p-6 transition hover:shadow-lg cursor-pointer backdrop-blur-sm border from-yellow-800 to-yellow-700/90 hover:from-yellow-700 hover:to-yellow-600/90 bg-white/10 border-white/20" id="aura-emd8a2dgw">
<div className="flex items-center gap-3 text-sm font-medium text-yellow-300">
<svg className="lucide lucide-video h-5 w-5 text-yellow-400" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<span className="font-geist">Live Webinar</span>
<span className="ml-auto inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium font-geist bg-red-800 text-red-300">
<svg className="lucide lucide-circle h-2 w-2 fill-current" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
                Live
              </span>
</div>
<h3 className="mt-4 text-lg font-semibold font-geist text-yellow-300">Modern Data Protection Strategies</h3>
<p className="mt-2 text-sm font-geist text-yellow-200">
              Learn how Fortune 500 companies are transforming their backup infrastructure with cloud-native solutions.
            </p>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition bg-yellow-400 text-stone-900 hover:bg-yellow-300">
<span className="font-geist">Register Now</span>
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
<span className="text-xs font-geist text-yellow-300">Dec 15, 2:00 PM EST</span>
</div>
</article>
</div>
</section>
</div>
</main>

<footer className="border-t mt-16 opacity-0 animate-fade-in-up animate-delay-1200 border-stone-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h3 className="text-sm font-semibold font-geist text-stone-900">Product</h3>
<ul className="mt-4 space-y-2 text-sm text-stone-600">
<li><a className="transition font-geist hover:text-stone-900" href="#">Features</a></li>
<li><a className="transition font-geist hover:text-stone-900" href="#">Pricing</a></li>
<li><a className="transition font-geist hover:text-stone-900" href="#">Security</a></li>
<li><a className="transition font-geist hover:text-stone-900" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold font-geist text-stone-900">Company</h3>
<ul className="mt-4 space-y-2 text-sm text-stone-600">
<li><a className="transition font-geist hover:text-stone-900" href="#">About</a></li>
<li><a className="transition font-geist hover:text-stone-900" href="#">Careers</a></li>
<li><a className="transition font-geist hover:text-stone-900" href="#">Contact</a></li>
<li><a className="transition font-geist hover:text-stone-900" href="#">Press</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold font-geist text-stone-900">Resources</h3>
<ul className="mt-4 space-y-2 text-sm text-stone-600">
<li className=""><a className="transition font-geist hover:text-stone-900" href="#">Documentation</a></li>
<li className=""><a className="transition font-geist hover:text-stone-900" href="#">Support</a></li>
<li className=""><a className="transition font-geist hover:text-stone-900" href="#">Status</a></li>
<li><a className="transition font-geist hover:text-stone-900" href="#">Blog</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold font-geist text-stone-900">Legal</h3>
<ul className="mt-4 space-y-2 text-sm text-stone-600">
<li><a className="transition font-geist hover:text-stone-900" href="#">Privacy</a></li>
<li><a className="transition font-geist hover:text-stone-900" href="#">Terms</a></li>
<li><a className="transition font-geist hover:text-stone-900" href="#">Compliance</a></li>
<li><a className="transition font-geist hover:text-stone-900" href="#">GDPR</a></li>
</ul>
</div>
</div>
<div className="mt-8 pt-8 border-t flex items-center justify-between border-stone-200">
<p className="text-sm font-geist text-stone-600">© 2024 VaultSync. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="transition text-stone-400 hover:text-stone-600" href="#">
<svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="transition text-stone-400 hover:text-stone-600" href="#">
<svg className="lucide lucide-linkedin h-5 w-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="transition text-stone-400 hover:text-stone-600" href="#">
<svg className="lucide lucide-github h-5 w-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
