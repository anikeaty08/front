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
      {

    document.documentElement.classList.add('js');
    try{lucide.createIcons()}catch(e){console.warn(e)}

    /* Staggered fade-in */
    document.addEventListener('DOMContentLoaded',()=>{
      [...document.querySelectorAll('[data-animate]')].forEach((el,i)=>el.style.animationDelay=`${i*120}ms`);
    });

    /* Wiggle 👋 */
    document.querySelectorAll('.animate-wiggle').forEach(el=>{
      el.animate([{transform:'rotate(0deg)'},{transform:'rotate(14deg)'},{transform:'rotate(-8deg)'},{transform:'rotate(0deg)'}],{duration:1600,iterations:Infinity});
    });

    /* Copy-to-clipboard */
    function copyCode(){
      const raw=document.getElementById('code').innerText.replace(/^ +/gm,'');
      navigator.clipboard.writeText(raw).then(()=>{
        const btn=event.currentTarget;
        btn.querySelector('svg').setAttribute('data-lucide','check');
        lucide.createIcons();
        setTimeout(()=>{
          btn.querySelector('svg').setAttribute('data-lucide','copy');
          lucide.createIcons();
        },2000);
      });
    }

    /* Carousel controls */
    const carousel=document.getElementById('carousel');
    const btnPrev=document.getElementById('btnPrev');
    const btnNext=document.getElementById('btnNext');

    function updateArrows(){
      const maxScrollLeft=carousel.scrollWidth-carousel.clientWidth;
      btnPrev.style.opacity=carousel.scrollLeft<=0?'0.3':'1';
      btnNext.style.opacity=carousel.scrollLeft>=maxScrollLeft-1?'0.3':'1';
    }
    btnPrev?.addEventListener('click',()=>carousel.scrollBy({left:-carousel.clientWidth,behavior:'smooth'}));
    btnNext?.addEventListener('click',()=>carousel.scrollBy({left:carousel.clientWidth,behavior:'smooth'}));
    carousel?.addEventListener('scroll',updateArrows);
    window.addEventListener('resize',updateArrows);
    updateArrows();

    /* Add / remove event chips */
    document.getElementById('addEvent').addEventListener('click',()=>{
      const chip=document.createElement('span');
      chip.className='inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-[#122032] text-cyan-300 text-sm font-medium';
      chip.innerHTML='<i data-lucide="sparkles" class="w-4 h-4"></i>NewEvent<i data-lucide="x" class="w-3.5 h-3.5 cursor-pointer"></i>';
      document.getElementById('eventChips').appendChild(chip);
      lucide.createIcons({elem:chip});
    });

    document.addEventListener('click',e=>{
      if(e.target.closest('[data-lucide="x"]')){
        e.target.closest('span').remove();
      }
    });
  
}
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
      

<header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-[#0d1220cc] border-b border-white/10">
<div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 py-4">
<a className="flex items-center space-x-2" href="#">
<span className="font-extrabold tracking-wide text-lg text-blue-300" style={{}}>SUPERWALL</span>
</a>
<nav className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium transition hover:text-blue-300" href="#" style={{}}>Docs</a>
<a className="text-sm font-medium transition hover:text-blue-300" href="#" style={{}}>Pricing</a>
<a className="text-sm font-medium transition hover:text-blue-300" href="#" style={{}}>Blog</a>
<a className="text-sm font-medium transition hover:text-blue-300" href="#" style={{}}>Inspiration</a>
<a className="text-sm font-medium transition hover:text-blue-300" href="#" style={{}}>Templates</a>
<a className="ml-4 text-sm font-semibold px-4 py-2 rounded-full transition bg-blue-300/10 text-blue-300 hover:bg-blue-300 hover:text-neutral-900" href="#" style={{}}>
          Get a Demo
        </a>
</nav>
<div className="flex items-center space-x-4">
<a className="hidden md:inline text-sm font-medium transition hover:text-blue-300" href="#" style={{}}>Log in</a>
<a className="inline-flex items-center text-sm font-semibold px-5 py-2 rounded-full transition bg-blue-300 hover:bg-blue-200 text-neutral-900" href="#" style={{}}>
          Sign Up
          <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
</div>
</header>

<section className="pt-40 pb-24">
<div className="max-w-4xl mx-auto text-center px-4">
<div className="inline-flex items-center space-x-2 rounded-full px-4 py-1.5 mb-6 bg-blue-300/10 text-blue-200" data-animate="" style={{animationDelay: `0ms`}}>
<svg className="lucide lucide-megaphone w-4 h-4" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-xs font-semibold uppercase tracking-wide" style={{}}>App Intents Interactive Snippets in iOS 26</span>
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-medium font-bricolage text-neutral-100" data-animate="" style={{animationDelay: `120ms`}}>
        Quickly build & test paywalls<br className="hidden sm:block" />without shipping updates
      </h1>
<p className="mt-6 text-lg max-w-2xl mx-auto text-neutral-400" data-animate="" style={{animationDelay: `240ms`}}>
        Stop wrestling with your codebase to build paywalls.<br className="hidden md:block" />Start building & deploying paywalls in 10 minutes flat.
      </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" data-animate="" style={{animationDelay: `360ms`}}>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition bg-blue-300 hover:bg-blue-200 text-neutral-900" href="#" style={{}}>
          Start for free
        </a>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full border font-semibold transition border-white/20 hover:bg-white/10 text-neutral-100" href="#" style={{}}>
          Talk to sales
          <span className="ml-2 animate-wiggle" style={{}}>👋</span>
</a>
</div>
</div>

<div className="mt-20 px-4">
<div className="max-w-6xl mx-auto rounded-2xl border shadow-2xl overflow-hidden border-white/10" data-animate="" style={{animationDelay: `480ms`}}>
<div className="relative bg-[#141d2b]">
<img alt="Product screenshot" className="w-full object-cover" src="https://superwall.com/_next/static/media/hero.5a25b1ed.png" />
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-6 bg-[#141d2b] rounded-b-2xl shadow-2xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="relative max-w-5xl mx-auto flex flex-col items-center space-y-14 px-4">
<div className="text-center" data-animate="" style={{animationDelay: `600ms`}}>
<h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight font-medium font-bricolage" style={{}}>
          Trusted by the world’s finest apps
        </h2>
<p className="mt-4 text-lg max-w-2xl mx-auto text-white/80" style={{}}>
          Nearly all customers see significant boosts in revenue within a few months of integrating.
        </p>
</div>

<div className="w-full" data-animate="" style={{animationDelay: `720ms`}}>
<div className="mx-auto max-w-4xl backdrop-blur-sm rounded-3xl ring-1 p-5 sm:p-8 bg-white/5 ring-white/10">
<div className="grid grid-cols-6 sm:grid-cols-8 gap-4">
<div className="aspect-square rounded-xl bg-gradient-to-br to-indigo-500 flex items-center justify-center text-xl font-bold from-neutral-500 text-white" style={{}}>R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br to-indigo-500 flex items-center justify-center text-xl font-bold from-neutral-500 text-white" style={{}}>R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br to-indigo-500 flex items-center justify-center text-xl font-bold from-neutral-500 text-white" style={{}}>R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br to-indigo-500 flex items-center justify-center text-xl font-bold from-neutral-500 text-white" style={{}}>R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br to-indigo-500 flex items-center justify-center text-xl font-bold from-neutral-500 text-white" style={{}}>R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br to-indigo-500 flex items-center justify-center text-xl font-bold from-neutral-500 text-white" style={{}}>R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br to-indigo-500 flex items-center justify-center text-xl font-bold from-neutral-500 text-white" style={{}}>R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br to-indigo-500 flex items-center justify-center text-xl font-bold from-neutral-500 text-white" style={{}}>R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br to-indigo-500 flex items-center justify-center text-xl font-bold from-neutral-500 text-white" style={{}}>R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br to-cyan-500 flex items-center justify-center text-xl font-bold from-cyan-400 text-white" style={{}}>∞</div>
<div className="aspect-square rounded-xl flex items-center justify-center bg-indigo-800" style={{}}><svg className="lucide lucide-box w-6 h-6 text-white/80" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg></div>
<div className="aspect-square rounded-xl flex items-center justify-center bg-indigo-800" style={{}}><svg className="lucide lucide-rocket w-6 h-6 text-white/80" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg></div>
<div className="aspect-square rounded-xl flex items-center justify-center bg-indigo-800" style={{}}><svg className="lucide lucide-coffee w-6 h-6 text-white/80" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><line></line><line></line><line></line></svg></div>
<div className="aspect-square rounded-xl flex items-center justify-center bg-indigo-800" style={{}}><svg className="lucide lucide-camera w-6 h-6 text-white/80" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="13"></circle></svg></div>
<div className="aspect-square rounded-xl flex items-center justify-center bg-indigo-800" style={{}}><svg className="lucide lucide-headphones w-6 h-6 text-white/80" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg></div>
<div className="aspect-square rounded-xl flex items-center justify-center bg-indigo-800" style={{}}><svg className="lucide lucide-watch w-6 h-6 text-white/80" data-lucide="watch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><polyline points="12 10 12 12 13 13"></polyline><path></path><path></path></svg></div>
</div>
</div>
</div>

<div className="w-full flex flex-col sm:flex-row gap-4" data-animate="" style={{animationDelay: `840ms`}}>
<div className="flex-1 backdrop-blur-sm rounded-3xl ring-1 px-8 py-10 flex flex-col items-center text-center bg-white/5 ring-white/10">
<p className="text-5xl sm:text-6xl font-medium font-bricolage text-cyan-400" style={{}}>1B</p>
<p className="mt-2 text-xs uppercase tracking-widest text-white/70" style={{}}>End Users</p>
</div>
<div className="flex-1 backdrop-blur-sm rounded-3xl ring-1 px-8 py-10 flex flex-col items-center text-center bg-white/5 ring-white/10">
<p className="text-5xl sm:text-6xl font-medium font-bricolage text-cyan-400" style={{}}>30M</p>
<p className="mt-2 text-xs uppercase tracking-widest text-white/70" style={{}}>Monthly Paywalls</p>
</div>
<div className="flex-1 backdrop-blur-sm rounded-3xl ring-1 px-8 py-10 flex flex-col items-center text-center bg-white/5 ring-white/10">
<p className="text-5xl sm:text-6xl font-medium font-bricolage text-cyan-400" style={{}}>700K</p>
<p className="mt-2 text-xs uppercase tracking-widest text-white/70" style={{}}>Monthly Conversions</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

<div className="max-w-lg" data-animate="" style={{animationDelay: `960ms`}}>
<h2 className="text-3xl sm:text-4xl tracking-tight font-medium font-bricolage" style={{}}>Integrate in minutes</h2>
<p className="mt-4 text-lg leading-7 text-neutral-400" style={{}}>
          Setup takes minutes. Build paywalls, deploy A/B tests, add logic — all remotely from the dashboard.
        </p>
</div>

<div className="w-full md:w-1/2 relative" data-animate="" style={{animationDelay: `1080ms`}}>
<div className="relative rounded-3xl ring-1 backdrop-blur-xl bg-white/5 ring-white/10">
<button aria-label="Copy code" className="absolute top-4 right-4 transition-colors hover:text-white text-neutral-400" onClick={(e) => { copyCode() }} style={{}}>
<svg className="lucide lucide-copy w-5 h-5" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14"></rect><path></path></svg>
</button>
<pre className="p-10 text-[13px] leading-6 font-mono whitespace-pre select-none text-neutral-300" id="code" style={{}}><span className="text-neutral-600" style={{}}>1 </span><span className="text-neutral-400" style={{}}>import</span> <span className="text-cyan-300" style={{}}>SuperwallKit</span>
<span className="text-neutral-600" style={{}}>2 </span>
<span className="text-neutral-600" style={{}}>3 </span><span className="text-neutral-500" style={{}}>// Show the paywall</span>
<span className="text-neutral-600" style={{}}>4 </span><span className="text-cyan-300" style={{}}>Superwall</span>.<span className="text-cyan-400" style={{}}>shared</span>.<span className="text-blue-400" style={{}}>register</span>(<span className="text-neutral-300" style={{}}>event</span>: <span className="text-rose-300" style={{}}>"OnboardingComplete"</span>)
</pre>
</div>
</div>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 border-t border-white/10">
<div className="text-center" data-animate="" style={{animationDelay: `1200ms`}}>
<h2 className="mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium font-bricolage" style={{}}>
        Start from scratch, or from a template
      </h2>
<p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-neutral-300" style={{}}>
        200+ paywall templates to choose from, 100% free of charge. Edit everything from text and fonts to colors and images.
      </p>
</div>

<div className="relative mt-14" data-animate="" style={{animationDelay: `1320ms`}}>

<button className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border backdrop-blur transition-colors border-neutral-600 bg-neutral-800/60 hover:bg-neutral-700" id="btnPrev" style={{opacity: `0.3`}}>
<svg className="lucide lucide-chevron-left text-slate-200" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<button className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border backdrop-blur transition-colors border-neutral-600 bg-neutral-800/60 hover:bg-neutral-700" id="btnNext" style={{opacity: `0.3`}}>
<svg className="lucide lucide-chevron-right text-slate-200" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>

<div className="flex gap-6 overflow-x-auto scroll-smooth pb-4" id="carousel">

</div>
</div>
</section>

<section className="mx-auto max-w-7xl pt-24 pb-32 px-6 border-t border-white/10">
<div className="rounded-3xl border backdrop-blur-md shadow-xl overflow-hidden border-white/10 bg-white/5" data-animate="" style={{animationDelay: `1440ms`}}>
<div className="flex flex-col md:flex-row">

<div className="flex-1 p-10 md:p-14">
<h2 className="text-2xl md:text-3xl leading-tight tracking-tight font-medium font-bricolage" style={{}}>
            Remotely control when paywalls show
          </h2>
<p className="mt-4 leading-relaxed max-w-md text-zinc-300" style={{}}>
            Show paywalls when users trigger events, land on a specific page, or even every app open.
          </p>
</div>

<div className="md:w-5/12 border-t md:border-t-0 md:border-l bg-black/40 border-white/10">
<div className="p-6 md:p-8 divide-y divide-white/10">
<p className="pb-4 text-sm font-medium text-zinc-300" style={{}}>When these events happen:</p>
<div className="pt-4">
<div className="flex flex-wrap gap-3" id="eventChips">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-[#122032] text-sm font-medium border-white/10 text-cyan-300" style={{}}>
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  OnboardingComplete
                  <svg className="lucide lucide-x w-3.5 h-3.5 cursor-pointer" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</span>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-[#122032] text-sm font-medium border-white/10 text-cyan-300" style={{}}>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
                  RefreshGame
                  <svg className="lucide lucide-x w-3.5 h-3.5 cursor-pointer" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</span>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-[#122032] text-sm font-medium border-white/10 text-cyan-300" style={{}}>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
                  RequestHint
                  <svg className="lucide lucide-x w-3.5 h-3.5 cursor-pointer" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</span>
</div>
<button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200" id="addEvent" style={{}}>
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                Add Event
              </button>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl pt-24 pb-32 px-6 border-t border-white/10">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-indigo-500/5 to-transparent rounded-3xl blur-3xl" style={{}}></div>
<section className="relative z-10 bg-[#161b22] rounded-2xl shadow-xl ring-1 mx-auto my-16 ring-white/5">

<div className="flex flex-col items-center text-center px-4 pt-12 pb-8">
<h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-medium font-bricolage" style={{}}>A/B test with fine-grained control</h2>
<p className="max-w-2xl text-base text-slate-50 mt-4" style={{}}>Test as many paywalls as you like, users who match specific criteria. Build out logic to determine who sees what.</p>
</div>

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
<span className="text-sm font-medium text-indigo-300" style={{}}>Evaluate these rules:</span>
<div className="flex items-center gap-3">
<span className="text-xs text-indigo-500" style={{}}>3,982 recently</span>
<button aria-label="More options" className="p-1.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 hover:bg-white/5" style={{}}>
<svg className="lucide lucide-more-vertical w-4 h-4 text-gray-400" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="12" cy="5"></circle><circle cx="12" cy="19"></circle></svg>
</button>
</div>
</div>

<div className="px-6 py-3 text-sm flex flex-wrap items-center gap-2 border-b border-white/5">
<span className="text-indigo-400" style={{}}>if</span>
<span className="bg-[#1e242e] px-2 py-1 rounded-md font-mono text-blue-300" style={{}}>device.daysSinceInstall {">"} 1</span>
<span className="text-indigo-400" style={{}}>show</span>
<span className="bg-[#1e242e] px-2 py-1 rounded-md font-mono text-blue-300" style={{}}>1 time</span>
<span className="text-indigo-400" style={{}}>every</span>
<span className="bg-[#1e242e] px-2 py-1 rounded-md font-mono text-blue-300" style={{}}>week</span>
<button aria-label="Edit rule" className="ml-auto p-1.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 hover:bg-white/5" style={{}}>
<i className="w-4 h-4 text-indigo-400" data-lucide="edit-3" style={{}}></i>
</button>
</div>

<div className="p-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-[#0d1117] rounded-xl ring-1 flex flex-col ring-white/5">
<div className="flex items-start justify-between px-4 pt-4">
<div className="flex flex-col">
<span className="text-xs font-semibold text-blue-400" style={{}}>25% of users</span>
<span className="text-sm font-medium mt-1" style={{}}>Test 1 | E1</span>
<span className="text-[11px] text-indigo-500" style={{}}>2,123 Assigned</span>
</div>
<div className="flex items-center gap-2">
<button aria-label="Edit" className="p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 hover:bg-white/5" style={{}}>
<i className="w-4 h-4 text-indigo-400" data-lucide="edit-2" style={{}}></i>
</button>
<button aria-label="Remove" className="p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 hover:bg-white/5" style={{}}>
<svg className="lucide lucide-x w-4 h-4 text-gray-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
</div>
<div className="mt-4 px-4 pb-4">
<div className="rounded-lg overflow-hidden ring-1 ring-white/10">
<img alt="" className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?auto=format&fit=crop&w=500&q=60" />
</div>
</div>
</div>

<div className="bg-[#0d1117] rounded-xl ring-1 flex flex-col ring-white/5">
<div className="flex items-start justify-between px-4 pt-4">
<div className="flex flex-col">
<span className="text-xs font-semibold text-blue-400" style={{}}>25% of users</span>
<span className="text-sm font-medium mt-1" style={{}}>Test 1 | E2</span>
<span className="text-[11px] text-indigo-500" style={{}}>2,421 Assigned</span>
</div>
<div className="flex items-center gap-2">
<button aria-label="Edit" className="p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 hover:bg-white/5" style={{}}>
<i className="w-4 h-4 text-indigo-400" data-lucide="edit-2" style={{}}></i>
</button>
<button aria-label="Remove" className="p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 hover:bg-white/5" style={{}}>
<svg className="lucide lucide-x w-4 h-4 text-gray-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
</div>
<div className="mt-4 px-4 pb-4">
<div className="rounded-lg overflow-hidden ring-1 ring-white/10">
<img alt="" className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</div>
</div>

<div className="bg-[#0d1117] rounded-xl ring-1 flex flex-col ring-white/5">
<div className="flex items-start justify-between px-4 pt-4">
<div className="flex flex-col">
<span className="text-xs font-semibold text-blue-400" style={{}}>25% of users</span>
<span className="text-sm font-medium mt-1" style={{}}>Test 1 | E3</span>
<span className="text-[11px] text-indigo-500" style={{}}>2,298 Assigned</span>
</div>
<div className="flex items-center gap-2">
<button aria-label="Edit" className="p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 hover:bg-white/5" style={{}}>
<i className="w-4 h-4 text-indigo-400" data-lucide="edit-2" style={{}}></i>
</button>
<button aria-label="Remove" className="p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 hover:bg-white/5" style={{}}>
<svg className="lucide lucide-x w-4 h-4 text-gray-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
</div>
<div className="mt-4 px-4 pb-4">
<div className="rounded-lg overflow-hidden ring-1 ring-white/10">
<img alt="" className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
</div>
</div>

<div className="bg-[#0d1117] rounded-xl ring-1 flex flex-col ring-white/5">
<div className="flex items-start justify-between px-4 pt-4">
<div className="flex flex-col">
<span className="text-xs font-semibold text-blue-400" style={{}}>25% of users</span>
<span className="text-sm font-medium mt-1" style={{}}>Test 1 | E4</span>
<span className="text-[11px] text-indigo-500" style={{}}>2,350 Assigned</span>
</div>
<div className="flex items-center gap-2">
<button aria-label="Edit" className="p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 hover:bg-white/5" style={{}}>
<i className="w-4 h-4 text-indigo-400" data-lucide="edit-2" style={{}}></i>
</button>
<button aria-label="Remove" className="p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 hover:bg-white/5" style={{}}>
<svg className="lucide lucide-x w-4 h-4 text-gray-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
</div>
<div className="mt-4 px-4 pb-4">
<div className="rounded-lg overflow-hidden ring-1 ring-white/10">
<img alt="" className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between px-6 py-4 border-t text-sm border-white/5">
<span className="text-indigo-400" style={{}}>else, do nothing.</span>
<button className="font-medium flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 text-blue-400 hover:text-blue-300" style={{}}>
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> Add Rule
        </button>
</div>
</section>
</section>
<section className="px-4 py-20 max-w-5xl mx-auto">

<div className="flex justify-center">
<div aria-label="5 star rating" className="flex items-center gap-1 rounded-full px-5 py-2 bg-white/10">
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
</div>

<h2 className="mt-6 text-4xl md:text-5xl tracking-tight text-center font-medium font-bricolage" style={{}}>Don't take our word for it</h2>
<p className="max-w-2xl text-slate-50 text-center mt-4 mr-auto ml-auto" style={{}}>
      Our customers call this their most impactful monetization tool. Here’s what they have to say:
    </p>

<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="flex flex-col justify-between rounded-xl border transition p-6 backdrop-blur-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-300 border-white/10 bg-white/5 hover:bg-white/10">
<p className="leading-relaxed text-indigo-200" style={{}}>Really excited about the progress we made recently on paywalls. We saw a 50% uplift in conversion for upsell screens. Unreal.</p>
<div className="flex items-center mt-6">
<div className="w-11 h-11 flex items-center justify-center rounded-md bg-[#6246ea]">
<i aria-hidden="true" className="w-5 h-5 text-white" data-lucide="radius"></i>
</div>
<div className="ml-4">
<p className="font-medium" style={{}}>Photoroom</p>
<p className="text-xs text-indigo-400" style={{}}>Matthieu Rouif, CEO</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl border transition p-6 backdrop-blur-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-300 border-white/10 bg-white/5 hover:bg-white/10">
<p className="leading-relaxed text-indigo-200" style={{}}>We doubled our iOS app profitability in six months. Rapid experiments are finally possible without waiting on app releases.</p>
<div className="flex items-center mt-6">
<div className="w-11 h-11 flex items-center justify-center rounded-md bg-[#ff7a00]">
<svg aria-hidden="true" className="lucide lucide-flame w-5 h-5 text-white" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="ml-4">
<p className="font-medium" style={{}}>Mojo</p>
<p className="text-xs text-indigo-400" style={{}}>Bernard Bontemps, Growth</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl border transition p-6 backdrop-blur-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-300 border-white/10 bg-white/5 hover:bg-white/10">
<p className="leading-relaxed text-indigo-200" style={{}}>The single greatest tool we've used to increase revenue. Wins here outpace anything we've tried before.</p>
<div className="flex items-center mt-6">
<div className="w-11 h-11 flex items-center justify-center rounded-md bg-[#ffc100]">
<svg aria-hidden="true" className="lucide lucide-leaf w-5 h-5 text-white" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<div className="ml-4">
<p className="font-medium" style={{}}>Pixite</p>
<p className="text-xs text-indigo-400" style={{}}>Jordan Gaphni, Growth</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl border transition p-6 backdrop-blur-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-300 border-white/10 bg-white/5 hover:bg-white/10">
<p className="leading-relaxed text-indigo-200" style={{}}>Completely changed the game for us. Experiments run 10× faster and we unlocked the ideal monetization model.</p>
<div className="flex items-center mt-6">
<div className="w-11 h-11 flex items-center justify-center rounded-md bg-[#ffffff]">
<svg aria-hidden="true" className="lucide lucide-radio w-5 h-5 text-black" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><circle cx="12" cy="12"></circle><path></path><path></path></svg>
</div>
<div className="ml-4">
<p className="font-medium" style={{}}>RapChat</p>
<p className="text-xs text-indigo-400" style={{}}>Seth Miller, CEO</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl border transition p-6 backdrop-blur-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-300 border-white/10 bg-white/5 hover:bg-white/10">
<p className="leading-relaxed text-indigo-200" style={{}}>We move 10× faster on monetization. No client releases or complicated deploys—just iterate and launch.</p>
<div className="flex items-center mt-6">
<div className="w-11 h-11 flex items-center justify-center rounded-md bg-[#0ea5e9]">
<svg aria-hidden="true" className="lucide lucide-target w-5 h-5 text-white" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle></svg>
</div>
<div className="ml-4">
<p className="font-medium" style={{}}>Citizen</p>
<p className="text-xs text-indigo-400" style={{}}>Jon Rhome, Product</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl border transition p-6 backdrop-blur-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-300 border-white/10 bg-white/5 hover:bg-white/10">
<p className="leading-relaxed text-indigo-200" style={{}}>Revolutionized our strategy. Subscription conversions and revenue grew more than 50%—can't recommend enough.</p>
<div className="flex items-center mt-6">
<div className="w-11 h-11 flex items-center justify-center rounded-md bg-[#ff9500]">
<svg aria-hidden="true" className="lucide lucide-bitcoin w-5 h-5 text-white" data-lucide="bitcoin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="ml-4">
<p className="font-medium" style={{}}>Coinstats</p>
<p className="text-xs text-indigo-400" style={{}}>Vahe Baghdasaryan, Growth</p>
</div>
</div>
</div>
</div>
</section>
<section className="w-full pt-16 pb-10">
<div className="mx-auto max-w-5xl px-6 text-center">
<button className="mx-auto mb-6 rounded-full border px-6 py-3 text-sm font-semibold shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 border-blue-700 bg-blue-900/30 text-blue-300 hover:bg-blue-900/50 hover:shadow-blue-700/40" style={{}}>
        Start for FREE
      </button>
<h2 className="mt-6 text-4xl md:text-5xl tracking-tight text-center font-medium font-bricolage" style={{}}>
        Simple win-win pricing
      </h2>
<p className="mx-auto mt-4 max-w-xl text-lg text-neutral-400" style={{}}>
        Interest aligned pricing. Contact us for a discount.
      </p>
</div>
</section>
<section className="mx-auto max-w-6xl px-6 pb-24">
<div className="grid gap-8 md:grid-cols-3">

<div className="relative rounded-2xl border bg-gradient-to-b p-8 shadow-lg flex flex-col from-white/5 via-white/0 to-white/5 shadow-black/20 border-neutral-800" style={{}}>
<span className="mb-2 inline-block text-sm font-semibold text-blue-400" style={{}}>Indie</span>
<h2 className="text-4xl font-medium font-bricolage" style={{}}>Free</h2>
<p className="mt-2 text-base font-medium text-neutral-300" style={{}}>
          Up to 250 conversions per month
        </p>
<p className="text-sm text-neutral-500" style={{}}>
          Access to every standard feature
        </p>
<button className="mt-6 w-full rounded-full border py-3 font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 border-blue-700 bg-blue-800/20 text-blue-300 hover:bg-blue-800/40" style={{}}>
          Try it free
        </button>
<h3 className="mt-10 text-lg font-semibold text-neutral-300" style={{}}>Standard Features</h3>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-3" style={{}}>
<svg className="lucide lucide-check h-4 w-4 flex-shrink-0 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            250 Conversions a Month
          </li>
<li className="flex items-start gap-3" style={{}}>
<svg className="lucide lucide-check h-4 w-4 flex-shrink-0 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Drag ’n Drop Paywall Editor
          </li>
<li className="flex items-start gap-3" style={{}}>
<svg className="lucide lucide-check h-4 w-4 flex-shrink-0 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            200+ Paywall Templates
          </li>
<li className="flex items-start gap-3" style={{}}>
<svg className="lucide lucide-check h-4 w-4 flex-shrink-0 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Unlimited A/B tests
          </li>
<li className="flex items-start gap-3" style={{}}>
<svg className="lucide lucide-check h-4 w-4 flex-shrink-0 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Charts & Analytics
          </li>
</ul>
</div>

<div className="relative rounded-2xl border bg-gradient-to-b p-8 shadow-lg flex flex-col from-white/5 via-white/0 to-white/5 shadow-black/20 border-neutral-800" style={{}}>
<span className="mb-2 inline-block text-sm font-semibold text-blue-400" style={{}}>Startup</span>
<h2 className="text-4xl font-medium font-bricolage" style={{}}>$0.20<span className="text-2xl font-medium font-bricolage text-neutral-400" style={{}}>/conversion</span></h2>
<p className="mt-2 text-base font-medium text-neutral-300" style={{}}>
          Pay as you go pricing that scales
        </p>
<p className="text-sm text-neutral-500" style={{}}>
          Up to 5,000 conversions a month
        </p>
<button className="mt-6 w-full rounded-full border py-3 font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 border-blue-700 bg-blue-800/20 text-blue-300 hover:bg-blue-800/40" style={{}}>
          Sign Up
        </button>
<h3 className="mt-10 text-lg font-semibold text-neutral-300" style={{}}>Standard Features</h3>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-3" style={{}}>
<svg className="lucide lucide-check h-4 w-4 flex-shrink-0 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            5,000 Conversions a Month
          </li>
<li className="flex items-start gap-3" style={{}}>
<svg className="lucide lucide-check h-4 w-4 flex-shrink-0 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Drag ’n Drop Paywall Editor
          </li>
<li className="flex items-start gap-3" style={{}}>
<svg className="lucide lucide-check h-4 w-4 flex-shrink-0 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            200+ Paywall Templates
          </li>
<li className="flex items-start gap-3" style={{}}>
<svg className="lucide lucide-check h-4 w-4 flex-shrink-0 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Unlimited A/B tests
          </li>
<li className="flex items-start gap-3" style={{}}>
<svg className="lucide lucide-check h-4 w-4 flex-shrink-0 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Charts & Analytics
          </li>
</ul>
</div>

<div className="relative rounded-2xl border bg-gradient-to-b p-8 shadow-lg flex flex-col from-cyan-900/10 via-white/0 to-white/5 shadow-black/20 border-neutral-800" style={{}}>
<span className="mb-2 inline-block text-sm font-semibold text-cyan-400" style={{}}>Growth</span>
<h2 className="text-4xl font-medium font-bricolage" style={{}}>Flat-Rate</h2>
<p className="mt-2 text-base font-medium underline decoration-cyan-500/60 underline-offset-4 text-cyan-400" style={{}}>
          100% custom flat-rate pricing
        </p>
<p className="text-sm text-neutral-500" style={{}}>
          Terms that make sense for you
        </p>
<button className="mt-6 w-full rounded-full py-3 font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 bg-cyan-400 hover:bg-cyan-300 text-neutral-900" style={{}}>
          Get Pricing
        </button>
<h3 className="mt-10 text-lg font-semibold text-cyan-400" style={{}}>Premium Features</h3>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-3" style={{}}>
<svg className="lucide lucide-check h-4 w-4 flex-shrink-0 text-yellow-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Unlimited Conversions
          </li>
<li className="flex items-start gap-3" style={{}}>
<svg className="lucide lucide-check h-4 w-4 flex-shrink-0 text-yellow-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            We Build Your Paywalls
          </li>
<li className="flex items-start gap-3" style={{}}>
<svg className="lucide lucide-check h-4 w-4 flex-shrink-0 text-yellow-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            4 Weekly Growth Meetings
          </li>
<li className="flex items-start gap-3" style={{}}>
<svg className="lucide lucide-check h-4 w-4 flex-shrink-0 text-yellow-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Dedicated Slack Channel
          </li>
<li className="flex items-start gap-3" style={{}}>
<svg className="lucide lucide-check h-4 w-4 flex-shrink-0 text-yellow-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Custom Integrations
          </li>
</ul>
</div>
</div>
</section>
<section className="w-full flex flex-col items-center px-4 py-24">
<h2 className="text-xl md:text-2xl mb-8 text-center tracking-tight font-medium font-bricolage" style={{}}>Our investors include:</h2>
<div className="w-full max-w-5xl rounded-full border bg-white/5/50 backdrop-blur-md px-6 md:px-10 py-4 border-white/10">
<ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-semibold">
<li className="flex items-center gap-3">
<span className="inline-flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-sm bg-neutral-500 text-white" style={{}}>Y</span>
<span className="whitespace-nowrap" style={{}}>Combinator</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-circle w-6 h-6 stroke-current text-slate-300" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle></svg>
<span className="whitespace-nowrap" style={{}}>Adjacent</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-sun w-6 h-6 stroke-current text-yellow-400" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
<span className="whitespace-nowrap" style={{}}>Weekend Fund</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-square w-6 h-6 stroke-current text-indigo-400" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect></svg>
<span className="whitespace-nowrap" style={{}}>SHRUG</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-cat w-6 h-6 stroke-current text-teal-400" data-lucide="cat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
<span className="whitespace-nowrap" style={{}}>RevenueCat</span>
</li>
</ul>
</div>
</section>



<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
