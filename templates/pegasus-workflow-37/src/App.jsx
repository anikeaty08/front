import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function() {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const circumference = 502.65;
const segment1 = entry.target.querySelector('#okr-segment-1');
const segment2 = entry.target.querySelector('#okr-segment-2');
const segment3 = entry.target.querySelector('#okr-segment-3');
const totalText = entry.target.querySelector('#okr-total');
if (segment1 && segment2 && segment3 && totalText) {
segment1.style.strokeDasharray = `176.33 ${circumference}`;
segment2.style.strokeDasharray = `176.33 ${circumference}`;
segment2.style.strokeDashoffset = `-176.33`;
segment3.style.strokeDasharray = `176.33 ${circumference}`;
segment3.style.strokeDashoffset = `-352.66`;
let current = 0;
const target = 105.36;
const duration = 1500;
const steps = 60;
const increment = target / steps;
const stepTime = duration / steps;
const counter = setInterval(() => {
current += increment;
if (current >= target) {
current = target;
clearInterval(counter);
}
totalText.textContent = Math.round(current) + '%';
}, stepTime);
}
observer.unobserve(entry.target);
}
});
}, { threshold: 0.3 });
const okrContainer = document.querySelector('article:has(#okr-segment-1)');
if (okrContainer) {
observer.observe(okrContainer);
}
})();


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


    (function() {
      const container = document.querySelector('[data-scroll-animate]');
      if (!container) return;
      
      const items = container.querySelectorAll('li');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            items.forEach((item, index) => {
              setTimeout(() => {
                item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      
      observer.observe(container);
    })();
  


    (function() {
      const container = document.querySelector('[data-okr-container]');
      if (!container) return;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const circumference = 502.65;
            const segment1 = entry.target.querySelector('[data-okr-segment="1"]');
            const segment2 = entry.target.querySelector('[data-okr-segment="2"]');
            const segment3 = entry.target.querySelector('[data-okr-segment="3"]');
            const totalText = entry.target.querySelector('[data-okr-total]');
            
            if (segment1 && segment2 && segment3 && totalText) {
              segment1.style.strokeDasharray = `176.33 ${circumference}`;
              segment2.style.strokeDasharray = `176.33 ${circumference}`;
              segment2.style.strokeDashoffset = `-176.33
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="p7Ff6pfTrb5Gs59C7nLC"></div></div>

<header className="fixed inset-x-0 top-0 z-[9999] border-b bg-[#0B1221]/80 backdrop-blur-xl border-slate-800/50" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-5">
<div className="flex items-center gap-3">

<a className="inline-flex items-center justify-center" href="#">
<img alt="Digital Dynamics" className="h-8 w-auto object-contain" src="https://digitaldynamics.uk/wp-content/uploads/2025/12/MASTER-text-logo-scaled.png"/>
</a>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-300/90">
<a className="transition hover:text-white text-slate-400" href="#" style={{}}>Features</a>
<a className="transition hover:text-white" href="#">Integrations</a>
<a className="transition hover:text-white" href="#">Benefits</a>
<a className="transition hover:text-white" href="#">Pricing</a>
<a className="transition hover:text-white" href="#">FAQs</a>
<a className="transition hover:text-white" href="#">Support</a>
</nav>
<div className="hidden sm:flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium shadow-sm ring-1 ring-inset hover:bg-blue-500 transition bg-blue-600 text-white ring-white/10" style={{}}>
              Start for Free
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 ring-1 transition text-slate-300 hover:text-white hover:bg-white/5 ring-white/10">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>
</header>

<div className="h-[72px] md:h-[80px]"></div>

<section className="z-10 relative" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out', maskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)'}}>

<div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full blur-3xl bg-blue-600/20" style={{}}></div>
<div className="max-w-5xl mr-auto ml-auto pt-4 pr-6 pl-6">
<div className="mx-auto flex w-full items-center justify-center mb-10">
<a className="group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" href="#">
<span className="inline-flex items-center gap-1 rounded-full bg-blue-500/15 px-2 py-0.5 ring-1 text-blue-300 ring-blue-400/30 text-slate-400" style={{}}>
<span className="h-2 w-2 rounded-full bg-blue-400" style={{}}></span>
              New
            </span>
<span className="text-slate-200">System Update 2.0</span>
<svg className="lucide lucide-arrow-right h-3.5 w-3.5 group-hover:translate-x-0.5 transition text-slate-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="flex justify-center w-full mb-8">
<img alt="Pegasus" className="h-24 sm:h-32 w-auto object-contain" src="https://digitaldynamics.uk/wp-content/uploads/2025/12/Pegasus_Cwhite-scaled.png" style={{opacity: '1', transform: 'translateY(0px)', maskImage: 'linear-gradient(90deg, transparent, black 20%, black 80%, transparent)'}}/>
</div>
<p className="mx-auto mt-5 max-w-2xl text-center text-base sm:text-lg md:text-xl text-slate-300/80" style={{opacity: '1', transform: 'translateY(0px)'}}>A powerful platform that brings together tasks, teams, and timelines in one intuitive workspace. Streamline collaboration and boost productivity with smart automation.</p>
<div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3" style={{opacity: '1', transform: 'translateY(0px)'}}>
<button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium shadow-sm ring-1 ring-inset hover:bg-blue-500 bg-blue-600 text-white ring-white/10" style={{}}>
            Start for free
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex sm:w-auto transition [--fx-filter:blur(10px)_liquid-glass(4.7,10)_saturate(1.25)_noise(0.5,1,0)] text-sm font-medium w-full rounded-md ring-1 px-5 py-3 gap-x-2 gap-y-2 items-center justify-center hover:bg-white/10 text-white bg-white/5 ring-white/10">
            Book a demo
            <svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
</div>
<p className="mt-7 text-center text-xs sm:text-sm text-slate-400/50">Trusted by 8,500+ teams across 40 countries</p>

<div className="mx-auto mt-5 flex max-w-3xl items-center justify-center gap-8 sm:gap-12 opacity-70">
<div className="flex items-center gap-2 text-slate-400">
<i className="h-5 w-5 text-slate-500" data-lucide="waveform"></i>
<span className="text-sm font-medium">Nexus</span>
</div>
<div className="flex items-center gap-2 text-slate-400">
<svg className="lucide lucide-binary h-5 w-5 text-slate-500" data-lucide="binary" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="2" width="4" x="14" y="14"></rect><rect height="6" rx="2" width="4" x="6" y="4"></rect><path d="M6 20h4"></path><path d="M14 10h4"></path><path d="M6 14h2v6"></path><path d="M14 4h2v6"></path></svg>
<span className="text-sm font-medium">Quantum</span>
</div>
<div className="flex items-center gap-2 text-slate-400">
<svg className="lucide lucide-wifi h-5 w-5 text-slate-500" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<span className="text-sm font-medium">Catalyst</span>
</div>
<div className="hidden sm:flex items-center gap-2 text-slate-400">
<svg className="lucide lucide-wrench h-5 w-5 text-slate-500" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
<span className="text-sm font-medium">Zenith</span>
</div>
</div>
</div>

<div className="sm:px-6 lg:px-8 max-w-6xl mt-14 mr-auto ml-auto pr-4 pl-4" style={{perspective: '1200px', maskImage: 'linear-gradient(180deg, transparent, black 0%, black 40%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 40%, transparent)'}}>

<div className="relative" style={{transformStyle: 'preserve-3d'}}>

<div className="-inset-x-6 -top-6 overflow-visible rounded-2xl absolute bottom-16 blur-3xl">

<div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-8 mx-auto max-w-6xl opacity-50" style={{transform: 'translateZ(-120px) scale(0.92)'}}>
<div className="h-8 rounded-xl ring-1 shadow-2xl bg-slate-900/20 ring-white/5"></div>
</div>
<div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-14 mx-auto max-w-6xl opacity-40" style={{transform: 'translateZ(-180px) scale(0.88)'}}>
<div className="h-8 rounded-xl ring-1 shadow-2xl bg-slate-900/15 ring-white/5"></div>
</div>

<div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[620px] w-[1400px] rounded-[999px] bg-[radial-gradient(closest-side,rgba(59,130,246,0.5),rgba(37,99,235,0.3),transparent)] opacity-60 blur-3xl"></div>
<div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(96,165,250,0.4),transparent)] opacity-40 blur-2xl"></div>
</div>
<main className="stack-scene flex pt-24 pr-6 pb-24 pl-6 relative items-center justify-center overflow-visible" data-animate-dashboard="true">

<div className="relative w-full max-w-7xl">

<div className="pointer-events-none absolute -top-0 left-0 right-0 mx-auto h-[640px] rounded-3xl border glass shadow-2xl border-white/10" style={{transform: 'rotateX(8deg) translateY(-80px) scale(0.96)', opacity: '0.35'}}>
</div>

<div className="pointer-events-none absolute -top-0 left-0 right-0 mx-auto h-[640px] rounded-3xl border glass shadow-2xl border-white/10" style={{transform: 'rotateX(6deg) translateY(-40px) scale(0.98)', opacity: '0.5'}}>
</div>

<div className="relative z-10 mx-auto mt-4 overflow-hidden rounded-2xl ring-1 shadow-2xl backdrop-blur-xl ring-white/10" style={{transform: 'translateZ(0px)', background: 'linear-gradient(135deg, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.95) 100%)'}}>

<div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none"></div>

<div className="relative flex items-center justify-between border-b px-4 sm:px-6 py-3 bg-white/[0.02] backdrop-blur-sm border-white/10">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full shadow-lg bg-red-400/80 shadow-red-400/50"></div>
<div className="h-3 w-3 rounded-full shadow-lg bg-amber-300/80 shadow-amber-300/50"></div>
<div className="h-3 w-3 rounded-full shadow-lg bg-emerald-400/80 shadow-emerald-400/50" style={{}}></div>
</div>
<div className="hidden sm:flex items-center gap-2 rounded-md px-2 py-1 ring-1 backdrop-blur-sm bg-white/5 ring-white/10">
<svg className="h-4 w-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
<span className="text-xs text-slate-400">Search...</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex -space-x-2">
<img alt="avatar-1" className="h-7 w-7 rounded-full ring-2 ring-[#0f172a] object-cover shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17d18233-806b-40ae-aeda-9251f822ee0a_320w.webp"/>
<img alt="avatar-2" className="h-7 w-7 rounded-full ring-2 ring-[#0f172a] object-cover shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/625569f6-2546-4071-9e1a-1a5d8f130ba3_320w.webp"/>
<img alt="avatar-3" className="h-7 w-7 rounded-full ring-2 ring-[#0f172a] object-cover shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eacb0d5f-9d72-4b22-be01-fb1e118870a7_320w.webp"/>
</div>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium ring-1 transition backdrop-blur-sm shadow-lg bg-white/5 text-white ring-white/10 hover:bg-white/10">
            View Settings
            <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
<button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r px-3 py-1.5 text-xs font-medium ring-1 hover:from-blue-500 hover:to-indigo-500 transition shadow-lg shadow-blue-500/30 from-blue-600/90 to-indigo-600/90 text-white ring-white/10" style={{}}>
            Import/Export
            <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="flex relative">

<aside className="hidden lg:block w-64 border-r relative border-white/10" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)'}}>
<div className="px-4 py-4">
<div className="mb-3">
<button className="inline-flex gap-2 transition text-xs font-medium ring-1 rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5 backdrop-blur-sm gap-x-2 gap-y-2 items-center hover:bg-white/10 text-white bg-white/5 ring-white/10">Digital Dynamics</button>
</div>
<div className="flex [--fx-filter:blur(17px)_liquid-glass(4.6,10)_saturate(1.25)_noise(0.5,1,0)] rounded-md ring-1 px-3 py-3 shadow-lg backdrop-blur-sm gap-x-3 gap-y-3 items-start bg-white/5 ring-white/10">
<div className="flex shadow-blue-500/20 bg-center w-9 h-9 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724040ac-37ef-4d38-99dc-3148fd289497_3840w.webp)] bg-cover rounded-full ring-1 shadow-lg items-center justify-center ring-white/10" style={{}}>
</div>
<div className="">
<p className="text-sm font-medium text-white/90">Ali Husni</p>
<p className="text-xs text-white/50">ali@digitaldyn.com</p>
</div>
</div>
<nav className="mt-4 space-y-1">
<a className="flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-3 py-2 text-sm ring-1 shadow-lg shadow-blue-500/10 text-blue-200 ring-blue-400/20" href="#" style={{}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
                Dashboard
              </a>
<a className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition text-white/80 hover:bg-white/5 hover:text-white" href="#">
<svg className="h-4 w-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
</svg>
                Notifications
              </a>
<a className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition text-white/80 hover:bg-white/5 hover:text-white" href="#">
<svg className="h-4 w-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
                Emails
              </a>
<a className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition text-white/80 hover:bg-white/5 hover:text-white" href="#">
<svg className="h-4 w-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
                Notes
              </a>
<a className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition text-white/80 hover:bg-white/5 hover:text-white" href="#">
<svg className="h-4 w-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
                Tasks
              </a>
</nav>
<div className="mt-6">
<p className="px-3 pb-2 text-xs font-medium text-white/40">Projects</p>
<div className="space-y-1">
<a className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition text-white/80 hover:bg-white/5 hover:text-white" href="#">
<span className="h-2 w-2 rounded-full shadow-lg bg-emerald-400 shadow-emerald-400/50" style={{}}></span>
                  Prime Project
                </a>
<a className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition text-white/80 hover:bg-white/5 hover:text-white" href="#">
<span className="h-2 w-2 rounded-full shadow-lg bg-sky-400 shadow-sky-400/50"></span>
                  Sultan Project
                </a>
<a className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition text-white/80 hover:bg-white/5 hover:text-white" href="#">
<span className="h-2 w-2 rounded-full shadow-lg bg-blue-400 shadow-blue-400/50" style={{}}></span>
                  Trustworth Project
                </a>
</div>
</div>
</div>
</aside>

<main className="min-w-0 flex-1">
<div className="px-4 sm:px-6 py-5">
<div className="mb-4 flex items-center justify-between">
<div className="">
<h2 className="text-lg font-semibold tracking-tight text-white/90" style={{opacity: '0', transform: 'translateY(20px)'}}>
                  Welcome Back, Ali Husni
                  <span className="align-middle">👋</span>
</h2>
<p className="text-xs text-white/50">Dashboard</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium ring-1 transition backdrop-blur-sm bg-white/5 text-white ring-white/10 hover:bg-white/10">
                  Monthly
                  <svg className="h-4 w-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium ring-1 transition backdrop-blur-sm bg-white/5 text-white ring-white/10 hover:bg-white/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
<line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
</svg>
                  Share
                </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
<div className="rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-4 ring-1 backdrop-blur-sm shadow-lg hover:shadow-xl transition ring-white/10" style={{opacity: '0', transform: 'translateY(20px)'}}>
<p className="text-xs text-white/50">Total Deals Closed</p>
<div className="mt-2 flex items-end justify-between">
<p className="text-2xl font-semibold tracking-tight text-white">45</p>
<span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/15 px-2 py-1 text-[10px] font-medium ring-1 ring-emerald-500/30 shadow-lg shadow-emerald-500/20 text-emerald-300" style={{}}>
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
                    +12%
                  </span>
</div>
</div>
<div className="rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-4 ring-1 backdrop-blur-sm shadow-lg hover:shadow-xl transition ring-white/10" style={{opacity: '0', transform: 'translateY(20px)'}}>
<p className="text-xs text-white/50">Revenue Generated</p>
<div className="mt-2 flex items-end justify-between">
<p className="text-2xl font-semibold tracking-tight text-white">$75,250</p>
<span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/15 px-2 py-1 text-[10px] font-medium ring-1 ring-emerald-500/30 shadow-lg shadow-emerald-500/20 text-emerald-300" style={{}}>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
                    +8%
                  </span>
</div>
</div>
<div className="rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-4 ring-1 backdrop-blur-sm shadow-lg hover:shadow-xl transition ring-white/10" style={{opacity: '0', transform: 'translateY(20px)'}}>
<p className="text-xs text-white/50">Top Sales Rep</p>
<div className="mt-2 flex items-center gap-3">
<img alt="rep" className="h-9 w-9 rounded-full ring-2 object-cover shadow-lg ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5865c193-61b7-47c8-899a-c6fa35826688_3840w.webp"/>
<div>
<p className="text-sm font-medium text-white/90">Sarah T</p>
<p className="text-xs text-white/50">15 deals closed</p>
</div>
</div>
</div>
</div>

<div className="mt-4 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] ring-1 overflow-hidden backdrop-blur-sm shadow-xl ring-white/10">
<div className="flex items-center justify-between border-b px-4 py-3 bg-white/[0.02] border-white/10">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5h13"></path>
<path d="M13 12h8"></path>
<path d="M13 19h8"></path>
<path d="M3 10a2 2 0 0 0 2 2h3"></path>
<path d="M3 5v12a2 2 0 0 0 2 2h3"></path>
</svg>
<h3 className="text-sm font-medium text-white/90" style={{opacity: '0', transform: 'translateY(20px)'}}>Leads &amp; Contacts Table</h3>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs ring-1 transition backdrop-blur-sm bg-white/5 text-white ring-white/10 hover:bg-white/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
</svg>
                    Filter
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs ring-1 transition backdrop-blur-sm bg-white/5 text-white ring-white/10 hover:bg-white/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m3 16 4 4 4-4"></path>
<path d="M7 20V4"></path>
<path d="M11 4h10"></path>
<path d="M11 8h7"></path>
<path d="M11 12h4"></path>
</svg>
                    Sort
                  </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-left">
<thead className="bg-white/[0.02]">
<tr className="text-xs uppercase text-white/50">
<th className="px-4 py-3">Name</th>
<th className="px-4 py-3">Company</th>
<th className="px-4 py-3">Email</th>
<th className="px-4 py-3">Phone</th>
<th className="px-4 py-3">Status</th>
<th className="px-4 py-3">Last Contacted</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="text-sm transition text-white/80 hover:bg-white/5">
<td className="px-4 py-3">John Carter</td>
<td className="px-4 py-3">Davis Tech</td>
<td className="px-4 py-3">john@davistech.com</td>
<td className="px-4 py-3">555-123-4567</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-md bg-amber-500/15 px-2 py-0.5 text-xs ring-1 shadow-lg shadow-amber-500/10 text-amber-300 ring-amber-400/30">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l2 4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
                          Proposal
                        </span>
</td>
<td className="px-4 py-3">Mar 2, 2025</td>
</tr>
<tr className="text-sm transition text-white/80 hover:bg-white/5">
<td className="px-4 py-3">Emily Davis</td>
<td className="px-4 py-3">BrightCorp</td>
<td className="px-4 py-3">emily@brightcorp.com</td>
<td className="px-4 py-3">555-210-4567</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/15 px-2 py-0.5 text-xs ring-1 shadow-lg shadow-emerald-500/10 text-emerald-300 ring-emerald-400/30" style={{}}>
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                          Contracted
                        </span>
</td>
<td className="px-4 py-3">Mar 4, 2025</td>
</tr>
<tr className="text-sm transition text-white/80 hover:bg-white/5">
<td className="px-4 py-3">Alex Spencer</td>
<td className="px-4 py-3">GreenTech</td>
<td className="px-4 py-3">alex@greentech.com</td>
<td className="px-4 py-3">555-987-6543</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-md bg-sky-500/15 px-2 py-0.5 text-xs ring-1 ring-sky-500/30 shadow-lg shadow-sky-500/10 text-sky-300">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
</svg>
                          Follow-up
                        </span>
</td>
<td className="px-4 py-3">Mar 3, 2025</td>
</tr>
<tr className="text-sm transition text-white/80 hover:bg-white/5">
<td className="px-4 py-3">Michael Chen</td>
<td className="px-4 py-3">Innovate Inc</td>
<td className="px-4 py-3">michael@innovate.com</td>
<td className="px-4 py-3">555-789-0123</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-md bg-blue-500/15 px-2 py-0.5 text-xs ring-1 shadow-lg shadow-blue-500/10 text-blue-300 ring-blue-400/30" style={{}}>
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="12" cy="5" r="1"></circle>
<circle cx="12" cy="19" r="1"></circle>
</svg>
                          New Lead
                        </span>
</td>
<td className="px-4 py-3">Mar 6, 2025</td>
</tr>
<tr className="text-sm transition text-white/80 hover:bg-white/5">
<td className="px-4 py-3">Sarah Williams</td>
<td className="px-4 py-3">TechFlow</td>
<td className="px-4 py-3">sarah@techflow.com</td>
<td className="px-4 py-3">555-456-7890</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/15 px-2 py-0.5 text-xs ring-1 shadow-lg shadow-emerald-500/10 text-emerald-300 ring-emerald-400/30" style={{}}>
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                          Contracted
                        </span>
</td>
<td className="px-4 py-3">Mar 5, 2025</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>
</div>
</div>
</main></div>
</div>
</section>

<section className="sm:py-24 z-10 pt-16 pb-16 relative" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 gap-x-6 gap-y-6">
<div className="text-left">
<span className="inline-flex items-center gap-1.5 rounded-full border bg-blue-500/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-tight border-blue-400/20 text-blue-200" style={{}}>
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
        Features
      </span>
<h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white" style={{opacity: '0', transform: 'translateY(20px)'}}>One platform. Every team. Every workflow.</h2>
<p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-300/70">
        Click through to see how Planquo adapts to each layer of your team's productivity.
      </p>
</div>
<div className="sm:self-start">
<a className="inline-flex items-center gap-2.5 hover:bg-blue-500 transition text-sm font-medium whitespace-nowrap ring-1 rounded-md px-6 py-3 text-white bg-blue-600 ring-white/10" href="#" style={{}}>
        Start for free
        <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="overflow-hidden ring-1 rounded-2xl mt-10 relative ring-white/10 bg-white/0">

<div className="pointer-events-none absolute left-0 top-0 h-3 w-3">
<div className="absolute left-0 top-0 h-px w-3 bg-blue-500/60" style={{}}></div>
<div className="absolute left-0 top-0 h-3 w-px bg-blue-500/60" style={{}}></div>
</div>
<div className="pointer-events-none absolute right-0 top-0 h-3 w-3">
<div className="absolute right-0 top-0 h-px w-3 bg-blue-500/60" style={{}}></div>
<div className="absolute right-0 top-0 h-3 w-px bg-blue-500/60" style={{}}></div>
</div>
<div className="pointer-events-none absolute left-0 bottom-0 h-3 w-3">
<div className="absolute left-0 bottom-0 h-px w-3 bg-blue-500/60" style={{}}></div>
<div className="absolute left-0 bottom-0 h-3 w-px bg-blue-500/60" style={{}}></div>
</div>
<div className="pointer-events-none absolute right-0 bottom-0 h-3 w-3">
<div className="absolute right-0 bottom-0 h-px w-3 bg-blue-500/60" style={{}}></div>
<div className="absolute right-0 bottom-0 h-3 w-px bg-blue-500/60" style={{}}></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10 bg-white/0">

<article className="pt-8 pr-6 pb-8 pl-6" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="flex items-start gap-4">
<div className="flex bg-gradient-to-t to-indigo-500/30 w-14 h-14 ring-1 rounded-full px-4 items-center justify-center from-blue-600/0 ring-blue-400/30" style={{}}>
<svg className="lucide lucide-table h-6 w-6 text-white" data-lucide="table" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>
</div>
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-white" style={{opacity: '0', transform: 'translateY(20px)'}}>Smart Projects</h3>
<p className="mt-2 text-base text-slate-300/70">Organize complex initiatives with powerful project boards. Track progress, set milestones, and deliver on time.</p>
</div>
</div>

<div className="mt-8 relative h-56 sm:h-64 rounded-lg overflow-hidden ring-1 bg-[#0f172a] ring-white/10">

<div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(59,130,246,0.22),transparent_70%)]"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>


<div className="-translate-x-1/2 -translate-y-1/2 w-[88%] ring-1 rounded-xl absolute top-40 left-1/2 shadow-2xl shadow-blue-900/30 ring-white/10" style={{}}>
<div className="flex border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between border-white/10">
<div className="flex gap-2 items-center">
<span className="h-2 w-2 rounded-full bg-emerald-400" style={{}}></span>
<p className="text-sm font-medium text-white/90">Design landing page</p>
</div>
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-white/30"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/30"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/30"></span>
</div>
</div>
<div className="p-4">
<div className="grid grid-cols-3 gap-4">
<div className="col-span-2 space-y-2" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="h-3 rounded-sm bg-white/10"></div>
<div className="h-3 rounded-sm w-3/4 bg-white/10"></div>
<div className="mt-3 h-16 rounded-md bg-gradient-to-br from-blue-500/10 to-indigo-500/10 ring-1 ring-white/10" style={{}}></div>
</div>
<div className="space-y-3 text-xs" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div>
<p className="text-white/50">Status</p>
<span className="mt-1 inline-flex items-center gap-1 rounded-md bg-sky-500/15 px-2 py-0.5 text-[11px] ring-1 ring-sky-500/30 text-sky-300">In Progress</span>
</div>
<div>
<p className="text-white/50">Labels</p>
<span className="mt-1 inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] ring-1 bg-white/5 text-white/70 ring-white/10">UI</span>
</div>
</div>
</div>
<div className="mt-4">
<p className="text-xs text-white/50">Activity</p>
<div className="mt-2 space-y-1.5">
<div className="h-2.5 rounded-sm bg-white/8" style={{backgroundColor: 'rgba(255,255,255,.08)'}}></div>
<div className="h-2.5 rounded-sm bg-white/8" style={{backgroundColor: 'rgba(255,255,255,.08)'}}></div>
<div className="h-2.5 rounded-sm w-2/3 bg-white/8" style={{backgroundColor: 'rgba(255,255,255,.08)'}}></div>
</div>
</div>
</div>
</div>
<div className="bg-gradient-to-b from-transparent absolute top-0 right-0 bottom-0 left-0 to-black/20"></div>
</div>
</article>

<article className="pt-8 pr-8 pb-8 pl-8" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="flex items-start gap-4">
<div className="flex bg-gradient-to-t to-indigo-500/30 w-14 h-14 ring-1 rounded-full px-4 items-center justify-center from-blue-600/0 ring-blue-400/30" style={{}}>
<svg className="lucide lucide-list-checks h-6 w-6 text-white" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8"></path><path d="M13 12h8"></path><path d="M13 19h8"></path><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path></svg>
</div>
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-white" style={{opacity: '0', transform: 'translateY(20px)'}}>Dynamic Tasks</h3>
<p className="mt-2 text-base text-slate-300/70">Assign work, set priorities, and track dependencies—keeping everyone aligned without the complexity.</p>
</div>
</div>

<div className="mt-8 relative h-56 sm:h-64 rounded-lg overflow-hidden ring-1 bg-[#0f172a] ring-white/10">
<div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(99,102,241,0.18),transparent_70%)]"></div>
<div className="absolute inset-0 opacity-25" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>

<div className="absolute inset-0">
<div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full blur-3xl bg-blue-600/20" style={{}}></div>
<div className="absolute -right-10 top-0 h-40 w-40 rounded-full blur-3xl bg-indigo-600/20"></div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[86%] sm:w-[75%] rounded-xl bg-white/[0.06] ring-1 shadow-2xl ring-white/10 shadow-blue-900/30" style={{}}>
<div className="px-4 py-3 flex items-center justify-between border-b border-white/10">
<p className="text-sm font-medium text-white/90">Agentic Implementation</p>
<span className="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] ring-1 bg-blue-600/70 text-white ring-white/10" style={{}}>High</span>
</div>
<div className="p-4 grid grid-cols-2 gap-4 text-sm">
<div className="space-y-3" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="flex items-center justify-between">
<span className="text-white/60">Assignee</span>
<span className="inline-flex items-center gap-2">
<span className="text-white/80">Christian Hall</span>
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-white/60">Role</span>
<span className="text-white/80">AI Engineer</span>
</div>
</div>
<div className="space-y-3" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="flex items-center justify-between">
<span className="text-white/60">Status</span>
<span className="inline-flex items-center gap-1.5 rounded-md bg-amber-500/15 px-2.5 py-1 text-[11px] ring-1 text-amber-300 ring-amber-400/30">
<span className="h-1.5 w-1.5 rounded-full bg-amber-300"></span>
                  Ongoing
                </span>
</div>
<div className="flex items-center justify-between">
<span className="text-white/60">Due</span>
<span className="text-white/80">Friday</span>
</div>
</div>
</div>
</div>
<div className="bg-gradient-to-b from-transparent absolute top-0 right-0 bottom-0 left-0 to-black/20"></div>
</div>
</article>

<article className="p-8" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="flex items-start gap-4">
<div className="flex bg-gradient-to-t to-indigo-500/30 w-14 h-14 ring-1 rounded-full px-4 items-center justify-center from-blue-600/0 ring-blue-400/30" style={{}}>
<svg className="lucide lucide-workflow h-6 w-6 text-white" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-white" style={{opacity: '0', transform: 'translateY(20px)'}}>Intelligent Automation</h3>
<p className="mt-2 text-base text-slate-300/70">Automate repetitive workflows and let AI handle scheduling, notifications, and approvals effortlessly.</p>
</div>
</div>

<div className="mt-8 relative h-56 sm:h-64 rounded-lg overflow-hidden ring-1 bg-[#0f172a] ring-white/10">
<div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(59,130,246,0.22),transparent_70%)]"></div>
<div className="absolute inset-0 opacity-25" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<div className="absolute -inset-8 rounded-full blur-3xl bg-blue-600/20" style={{}}></div>
<div className="relative h-13 w-13 rounded-full ring-1 flex items-center justify-center bg-blue-600/25 ring-blue-400/30" style={{}}>
<svg className="h-6 w-6 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
</div>
</div>

<div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-[calc(50%-2.5rem)] w-px border-r border-dashed border-white/20"></div>
<div className="pointer-events-none absolute top-1/2 left-10 -translate-y-1/2 w-[calc(50%-2.5rem)] h-px border-t border-dashed border-white/20"></div>
<div className="pointer-events-none absolute top-1/2 right-10 -translate-y-1/2 w-[calc(50%-2.5rem)] h-px border-t border-dashed border-white/20"></div>

<div className="absolute left-1/2 top-8 -translate-x-1/2">
<span className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] ring-1 bg-white/5 text-white/80 ring-white/10">
<svg className="h-4 w-4 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V3"></path></svg>
            New Project Created
          </span>
</div>
<div className="-translate-y-1/2 absolute top-1/2 left-4">
<span className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] ring-1 bg-white/5 text-white/80 ring-white/10">
<svg className="h-4 w-4 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4"></path><path d="M13 5h8"></path></svg>
            5 Task Created
          </span>
</div>
<div className="-translate-y-1/2 absolute top-1/2 right-4">
<span className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] ring-1 bg-white/5 text-white/80 ring-white/10">
<svg className="h-4 w-4 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 11 3 3L22 4"></path><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path></svg>
            Task Assigned
          </span>
</div>
<div className="absolute left-1/2 bottom-8 -translate-x-1/2">
<span className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] ring-1 bg-white/5 text-white/80 ring-white/10">
<svg className="h-4 w-4 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
            Project Assets Uploaded
          </span>
</div>
<div className="bg-gradient-to-b from-transparent absolute top-0 right-0 bottom-0 left-0 to-black/20"></div>
</div>
</article>
</div>
</div>
</div>
</section><section className="z-10 sm:py-24 py-16 relative" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<span className="inline-flex items-center gap-1 rounded-full border bg-blue-500/10 px-2.5 py-1 text-[11px] font-medium border-blue-400/20 text-blue-200" style={{}}>
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Use cases
          </span>
<h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white" style={{opacity: '0', transform: 'translateY(20px)'}}>Built for modern teams</h2>
<p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-300/70" style={{opacity: '0', transform: 'translateY(20px)'}}>Explore powerful features designed to accelerate your work and simplify collaboration.</p>
</div>

<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{opacity: '0', transform: 'translateY(20px)'}}>

<article className="rounded-2xl bg-white/[0.04] ring-1 overflow-hidden ring-white/10" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="pt-6 pr-6 pb-6 pl-6">
<h3 className="text-xl font-medium tracking-tight text-white" style={{opacity: '0', transform: 'translateY(20px)'}}>Lightning Search</h3>
<p className="mt-2 text-sm text-white/60">Find anything instantly with AI-powered search across tasks, documents, and conversations.</p>

<div className="relative h-8 mt-4">
<div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center gap-2">
<div className="h-2 w-2 rounded-full ring-2 bg-blue-400 ring-blue-400/30" style={{}}></div>
<div className="flex-1 border-t-2 border-dashed border-white/20"></div>
<div className="h-2.5 w-2.5 rounded-full ring-2 bg-indigo-400 ring-indigo-400/30"></div>
<div className="flex-1 border-t-2 border-dashed border-white/20"></div>
<div className="h-2 w-2 rounded-full ring-2 bg-blue-400 ring-blue-400/30" style={{}}></div>
</div>
</div>
<div className="overflow-hidden bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent h-40 ring-1 rounded-xl mt-3 relative ring-white/10" style={{}}>
<div className="absolute -left-10 top-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" style={{}}></div>
<div className="-right-10 -translate-y-1/2 bg-indigo-500/20 w-40 h-40 rounded-full absolute top-1/2 blur-2xl"></div>
<div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 rounded-full ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-search h-5 w-5 text-white/70" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 rounded-full ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-box w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} view24"="" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path className="" d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="group inline-flex text-sm font-medium bg-gradient-to-r rounded-full ring-1 pt-2 pr-4 pb-2 pl-4 shadow-lg gap-x-2 gap-y-2 items-center text-white from-blue-600 to-indigo-600 ring-white/10" style={{}}>Planquo AI</div>
</div>
</div>
</div>
</article>

<article className="rounded-2xl bg-white/[0.04] ring-1 overflow-hidden ring-white/10" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="p-6">
<h3 className="text-xl font-medium tracking-tight text-white" style={{opacity: '0', transform: 'translateY(20px)'}}>Ready Templates</h3>
<p className="mt-2 text-sm text-white/60">Launch projects instantly with proven templates customized for your workflow and team size.</p>
<div className="mt-5 relative h-40 rounded-xl ring-1 overflow-hidden ring-white/10">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,.12),transparent_40%),linear-gradient(180deg,rgba(255,255,255,.04),transparent)]"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>
<div className="absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 space-y-2">
<button className="inline-flex transition text-sm w-full ring-1 rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur-md items-center justify-between hover:bg-white/10 text-white bg-white/5 ring-white/10">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-file-text h-4 w-4 text-white/70" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                      Research Template
                    </span>
<svg className="lucide lucide-chevron-right h-4 w-4 text-white/50" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="w-full inline-flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium ring-1 hover:bg-blue-500 transition bg-blue-600/80 text-white ring-white/10" style={{}}>
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-layout-dashboard h-4 w-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                      Kanban Template
                    </span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex hover:bg-white/[0.06] transition text-sm bg-transparent w-full ring-1 rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur-md items-center justify-between text-white ring-white/10">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-database h-4 w-4 text-white/70" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                      Database Template
                    </span>
<svg className="lucide lucide-plus h-4 w-4 text-white/50" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</article>

<article className="rounded-2xl bg-white/[0.04] ring-1 overflow-hidden ring-white/10" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="p-6">
<h3 className="text-xl font-medium tracking-tight text-white" style={{opacity: '0', transform: 'translateY(20px)'}}>Time Travel</h3>
<p className="mt-2 text-sm text-white/60">Never lose work—restore any previous version of tasks, documents, or project states instantly.</p>
<div className="mt-5 relative h-40 rounded-xl ring-1 overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent ring-white/10">
<div className="pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0">
<ul className="space-y-2 text-xs" data-scroll-animate="">
<li className="flex items-center justify-between rounded-md bg-emerald-500/10 px-3 py-2 ring-1 ring-emerald-400/20" style={{opacity: '0', transform: 'translateY(20px)'}}>
<span className="inline-flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400" style={{}}></span>
        Current Version
      </span>
<span className="text-emerald-300" style={{}}>Published</span>
</li>
<li className="flex items-center justify-between rounded-md px-3 py-2 ring-1 bg-white/5 ring-white/10" style={{opacity: '1', transform: 'translateY(0px)'}}>
<span className="inline-flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-blue-300" style={{}}></span>
        15mins ago
      </span>
<span className="text-white/60">By Nico</span>
</li>
<li className="flex items-center justify-between rounded-md px-3 py-2 ring-1 bg-white/5 ring-white/10" style={{opacity: '1', transform: 'translateY(0px)'}}>
<span className="inline-flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-blue-300" style={{}}></span>
        30mins ago
      </span>
<span className="text-white/60">By Dan</span>
</li>
<li className="flex items-center justify-between rounded-md px-3 py-2 ring-1 bg-white/5 ring-white/10" style={{opacity: '1', transform: 'translateY(0px)'}}>
<span className="inline-flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-blue-300" style={{}}></span>
        1hr ago
      </span>
<span className="text-white/60">By Nico</span>
</li>
</ul>

</div>
</div>
</div>
</article>

<article className="rounded-2xl bg-white/[0.04] ring-1 overflow-hidden ring-white/10" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="pt-6 pr-6 pb-6 pl-6">
<h3 className="text-xl font-medium tracking-tight text-white" style={{opacity: '0', transform: 'translateY(20px)'}}>Strategic Goals</h3>
<p className="mt-2 text-sm text-white/60">Connect daily work to company objectives with transparent OKR tracking and progress metrics.</p>
<div className="mt-5 rounded-xl ring-1 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-4 ring-white/10" data-okr-container="" style={{}}>
<div className="mb-3 flex items-center gap-4 text-[11px]">
<span className="inline-flex items-center gap-1 text-white/70"><span className="h-2 w-2 rounded-sm bg-blue-400" style={{}}></span>35.12%</span>
<span className="inline-flex items-center gap-1 text-white/70"><span className="h-2 w-2 rounded-sm bg-indigo-400"></span>35.12%</span>
<span className="inline-flex items-center gap-1 text-white/70"><span className="h-2 w-2 rounded-sm bg-sky-400"></span>35.12%</span>
</div>
<div className="relative h-44 flex items-center justify-center">
<svg className="w-full h-full" style={{transform: 'rotate(-90deg)'}} viewbox="0 0 200 200">
<circle cx="100" cy="100" fill="none" r="80" stroke="rgba(255,255,255,0.1)" strokeWidth="12"></circle>
<circle cx="100" cy="100" data-okr-segment="1" fill="none" r="80" stroke="rgb(96, 165, 250)" stroke-dasharray="0 502" strokeLinecap="round" strokeWidth="12" style={{strokeDasharray: '176.33, 502.65'}}></circle>
<circle cx="100" cy="100" data-okr-segment="2" fill="none" r="80" stroke="rgb(129, 140, 248)" stroke-dasharray="0 502" strokeLinecap="round" strokeWidth="12" style={{strokeDasharray: '176.33, 502.65', strokeDashoffset: '-176.33'}}></circle>
<circle cx="100" cy="100" data-okr-segment="3" fill="none" r="80" stroke="rgb(56, 189, 248)" stroke-dasharray="0 502" strokeLinecap="round" strokeWidth="12" style={{strokeDasharray: '176.33, 502.65', strokeDashoffset: '-352.66'}}></circle>
</svg>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="text-center">
<p className="text-3xl font-semibold tracking-tight text-white" data-okr-total="">0%</p>
<p className="text-xs mt-1 text-white/60">Complete</p>
</div>
</div>
</div>
</div>
</div></article></div></div></section>
    </>
  );
}
