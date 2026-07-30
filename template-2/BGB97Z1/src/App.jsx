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
<span className="text-teal-300 font-extrabold tracking-wide text-lg">SUPERWALL</span>
</a>
<nav className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium hover:text-teal-300 transition" href="#">Docs</a>
<a className="text-sm font-medium hover:text-teal-300 transition" href="#">Pricing</a>
<a className="text-sm font-medium hover:text-teal-300 transition" href="#">Blog</a>
<a className="text-sm font-medium hover:text-teal-300 transition" href="#">Inspiration</a>
<a className="text-sm font-medium hover:text-teal-300 transition" href="#">Templates</a>
<a className="ml-4 text-sm font-semibold px-4 py-2 rounded-full bg-teal-300/10 text-teal-300 hover:bg-teal-300 hover:text-slate-900 transition" href="#">
          Get a Demo
        </a>
</nav>
<div className="flex items-center space-x-4">
<a className="hidden md:inline text-sm font-medium hover:text-teal-300 transition" href="#">Log in</a>
<a className="inline-flex items-center text-sm font-semibold px-5 py-2 rounded-full bg-teal-300 text-slate-900 hover:bg-teal-200 transition" href="#">
          Sign Up
          <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</header>

<section className="pt-40 pb-24">
<div className="max-w-4xl mx-auto text-center px-4">
<div className="inline-flex items-center space-x-2 bg-teal-300/10 text-teal-200 rounded-full px-4 py-1.5 mb-6" data-animate="">
<i className="w-4 h-4" data-lucide="megaphone"></i>
<span className="text-xs font-semibold uppercase tracking-wide">App Intents Interactive Snippets in iOS 26</span>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-100 tracking-tight" data-animate="">
        Quickly build & test paywalls<br className="hidden sm:block" />without shipping updates
      </h1>
<p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto" data-animate="">
        Stop wrestling with your codebase to build paywalls.<br className="hidden md:block" />Start building & deploying paywalls in 10 minutes flat.
      </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" data-animate="">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-300 text-slate-900 font-semibold hover:bg-teal-200 transition" href="#">
          Start for free
        </a>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-slate-100 font-semibold hover:bg-white/10 transition" href="#">
          Talk to sales
          <span className="ml-2 animate-wiggle">👋</span>
</a>
</div>
</div>

<div className="mt-20 px-4">
<div className="max-w-6xl mx-auto rounded-2xl border border-white/10 shadow-2xl overflow-hidden" data-animate="">
<div className="relative bg-[#141d2b]">
<img alt="Product screenshot" className="w-full object-cover" src="https://superwall.com/_next/static/media/hero.5a25b1ed.png" />
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-6 bg-[#141d2b] rounded-b-2xl shadow-2xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="relative max-w-5xl mx-auto flex flex-col items-center space-y-14 px-4">
<div className="text-center" data-animate="">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          Trusted by the world’s finest apps
        </h2>
<p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          Nearly all customers see significant boosts in revenue within a few months of integrating.
        </p>
</div>

<div className="w-full" data-animate="">
<div className="mx-auto max-w-4xl bg-white/5 backdrop-blur-sm rounded-3xl ring-1 ring-white/10 p-5 sm:p-8">
<div className="grid grid-cols-6 sm:grid-cols-8 gap-4">
<div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">R</div>
<div className="aspect-square rounded-xl bg-gradient-to-br from-yellow-400 to-pink-500 flex items-center justify-center text-white text-xl font-bold">∞</div>
<div className="aspect-square rounded-xl bg-gray-800 flex items-center justify-center"><i className="w-6 h-6 text-white/80" data-lucide="box"></i></div>
<div className="aspect-square rounded-xl bg-gray-800 flex items-center justify-center"><i className="w-6 h-6 text-white/80" data-lucide="rocket"></i></div>
<div className="aspect-square rounded-xl bg-gray-800 flex items-center justify-center"><i className="w-6 h-6 text-white/80" data-lucide="coffee"></i></div>
<div className="aspect-square rounded-xl bg-gray-800 flex items-center justify-center"><i className="w-6 h-6 text-white/80" data-lucide="camera"></i></div>
<div className="aspect-square rounded-xl bg-gray-800 flex items-center justify-center"><i className="w-6 h-6 text-white/80" data-lucide="headphones"></i></div>
<div className="aspect-square rounded-xl bg-gray-800 flex items-center justify-center"><i className="w-6 h-6 text-white/80" data-lucide="watch"></i></div>
</div>
</div>
</div>

<div className="w-full flex flex-col sm:flex-row gap-4" data-animate="">
<div className="flex-1 bg-white/5 backdrop-blur-sm rounded-3xl ring-1 ring-white/10 px-8 py-10 flex flex-col items-center text-center">
<p className="text-5xl sm:text-6xl font-semibold text-cyan-400">1B</p>
<p className="mt-2 text-xs uppercase tracking-widest text-white/70">End Users</p>
</div>
<div className="flex-1 bg-white/5 backdrop-blur-sm rounded-3xl ring-1 ring-white/10 px-8 py-10 flex flex-col items-center text-center">
<p className="text-5xl sm:text-6xl font-semibold text-cyan-400">30M</p>
<p className="mt-2 text-xs uppercase tracking-widest text-white/70">Monthly Paywalls</p>
</div>
<div className="flex-1 bg-white/5 backdrop-blur-sm rounded-3xl ring-1 ring-white/10 px-8 py-10 flex flex-col items-center text-center">
<p className="text-5xl sm:text-6xl font-semibold text-cyan-400">700K</p>
<p className="mt-2 text-xs uppercase tracking-widest text-white/70">Monthly Conversions</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

<div className="max-w-lg" data-animate="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Integrate in minutes</h2>
<p className="mt-4 text-lg leading-7 text-slate-400">
          Setup takes minutes. Build paywalls, deploy A/B tests, add logic — all remotely from the dashboard.
        </p>
</div>

<div className="w-full md:w-1/2 relative" data-animate="">
<div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl">
<button aria-label="Copy code" className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors" onClick={(e) => { copyCode() }}>
<i className="w-5 h-5" data-lucide="copy"></i>
</button>
<pre className="p-10 text-[13px] leading-6 font-mono whitespace-pre text-slate-300 select-none" id="code"><span className="text-slate-600">1 </span><span className="text-purple-400">import</span> <span className="text-amber-300">SuperwallKit</span>
<span className="text-slate-600">2 </span>
<span className="text-slate-600">3 </span><span className="text-slate-500">// Show the paywall</span>
<span className="text-slate-600">4 </span><span className="text-amber-300">Superwall</span>.<span className="text-sky-400">shared</span>.<span className="text-green-400">register</span>(<span className="text-purple-300">event</span>: <span className="text-rose-300">"OnboardingComplete"</span>)
</pre>
</div>
</div>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 border-t border-white/10">
<div className="text-center" data-animate="">
<h2 className="mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
        Start from scratch, or from a template
      </h2>
<p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-slate-300">
        200+ paywall templates to choose from, 100% free of charge. Edit everything from text and fonts to colors and images.
      </p>
</div>

<div className="relative mt-14" data-animate="">

<button className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-slate-800/60 backdrop-blur hover:bg-slate-700 transition-colors" id="btnPrev">
<i className="text-slate-200" data-lucide="chevron-left"></i>
</button>
<button className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-slate-800/60 backdrop-blur hover:bg-slate-700 transition-colors" id="btnNext">
<i className="text-slate-200" data-lucide="chevron-right"></i>
</button>

<div className="flex gap-6 overflow-x-auto scroll-smooth pb-4" id="carousel">

<figure className="shrink-0 w-48 sm:w-56 lg:w-60 flex flex-col rounded-2xl bg-slate-900/80 ring-1 ring-slate-800 hover:ring-teal-400/70 transition-all">
<img alt="" className="aspect-[9/19.5] w-full rounded-t-2xl object-cover" src="https://images.unsplash.com/photo-1712122285969-b6cd28774655?auto=format&fit=crop&w=400&q=80" />
<figcaption className="p-4 text-center text-xs text-slate-400">Unlock 1000+ templates</figcaption>
</figure>
<figure className="shrink-0 w-48 sm:w-56 lg:w-60 flex flex-col rounded-2xl bg-slate-900/80 ring-1 ring-slate-800 hover:ring-teal-400/70 transition-all">
<img alt="" className="aspect-[9/19.5] w-full rounded-t-2xl object-cover" src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=400&q=80" />
<figcaption className="p-4 text-center text-xs text-slate-400">Happy plants need love</figcaption>
</figure>
<figure className="shrink-0 w-48 sm:w-56 lg:w-60 flex flex-col rounded-2xl bg-slate-900/80 ring-1 ring-slate-800 hover:ring-teal-400/70 transition-all">
<img alt="" className="aspect-[9/19.5] w-full rounded-t-2xl object-cover" src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80" />
<figcaption className="p-4 text-center text-xs text-slate-400">Unlock All Features</figcaption>
</figure>
<figure className="shrink-0 w-48 sm:w-56 lg:w-60 flex flex-col rounded-2xl bg-slate-900/80 ring-1 ring-slate-800 hover:ring-teal-400/70 transition-all">
<img alt="" className="aspect-[9/19.5] w-full rounded-t-2xl object-cover" src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80" />
<figcaption className="p-4 text-center text-xs text-slate-400">Unlock All Features</figcaption>
</figure>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl pt-24 pb-32 px-6 border-t border-white/10">
<div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl overflow-hidden" data-animate="">
<div className="flex flex-col md:flex-row">

<div className="flex-1 p-10 md:p-14">
<h2 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
            Remotely control when paywalls show
          </h2>
<p className="mt-4 text-zinc-300 leading-relaxed max-w-md">
            Show paywalls when users trigger events, land on a specific page, or even every app open.
          </p>
</div>

<div className="md:w-5/12 bg-black/40 border-t md:border-t-0 md:border-l border-white/10">
<div className="p-6 md:p-8 divide-y divide-white/10">
<p className="pb-4 text-sm font-medium text-zinc-300">When these events happen:</p>
<div className="pt-4">
<div className="flex flex-wrap gap-3" id="eventChips">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-[#122032] text-cyan-300 text-sm font-medium">
<i className="w-4 h-4" data-lucide="zap"></i>
                  OnboardingComplete
                  <i className="w-3.5 h-3.5 cursor-pointer" data-lucide="x"></i>
</span>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-[#122032] text-cyan-300 text-sm font-medium">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                  RefreshGame
                  <i className="w-3.5 h-3.5 cursor-pointer" data-lucide="x"></i>
</span>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-[#122032] text-cyan-300 text-sm font-medium">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                  RequestHint
                  <i className="w-3.5 h-3.5 cursor-pointer" data-lucide="x"></i>
</span>
</div>
<button className="mt-6 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm font-medium" id="addEvent">
<i className="w-4 h-4" data-lucide="plus"></i>
                Add Event
              </button>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl pt-24 pb-32 px-6 border-t border-white/10">

<div className="text-center max-w-3xl mx-auto" data-animate="">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        A/B test with fine-grained control
      </h2>
<p className="mt-4 text-lg leading-7 text-slate-400">
        Test unlimited paywalls against specific user criteria and build logic to determine who sees what.
      </p>
</div>

<div className="mt-14 bg-white/5 backdrop-blur-md rounded-3xl ring-1 ring-white/10 overflow-hidden" data-animate="">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
<div className="flex items-center flex-wrap gap-2 text-sm">
<span className="text-slate-400">if</span>
<button className="px-2 py-1 bg-[#1b2130] rounded-md text-emerald-400 font-medium hover:bg-[#21293b] transition">
            device.daysSinceInstall {">"} 1
          </button>
<span className="text-slate-400">show</span>
<button className="px-2 py-1 bg-[#1b2130] rounded-md text-cyan-400 font-medium hover:bg-[#21293b] transition">
            1 time
          </button>
<span className="text-slate-400">every</span>
<button className="px-2 py-1 bg-[#1b2130] rounded-md text-purple-400 font-medium hover:bg-[#21293b] transition">
            week
          </button>
<i className="w-4 h-4 text-slate-400" data-lucide="pen"></i>
</div>
<div className="flex items-center gap-3 text-xs text-slate-500">
<span>3,982 recently</span>
<i className="w-4 h-4 cursor-pointer hover:text-slate-300" data-lucide="more-vertical"></i>
</div>
</div>

<div className="overflow-x-auto">
<div className="flex gap-6 px-6 py-8 min-w-max" id="abVariants">

<template id="variantTpl"><div className="w-56 shrink-0 bg-[#151a24] border border-white/10 rounded-lg p-4 relative"><button aria-label="Remove variant" className="absolute top-3 right-3 text-slate-500 hover:text-slate-300"><i className="w-4 h-4" data-lucide="x"></i></button><div className="text-center mb-4"><span className="text-emerald-400 font-bold text-sm"></span><i className="inline w-3 h-3 text-slate-400 ml-1" data-lucide="pen"></i><h3 className="text-xs text-slate-300 mt-1"></h3><p className="text-[10px] text-slate-500"></p></div><div className="w-full h-72 bg-slate-800 rounded-md"></div></div></template>

</div>
</div>

<div className="flex items-center justify-between px-6 py-4 border-t border-white/10 text-sm">
<span className="text-slate-400">else, do nothing.</span>
<button className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium" id="addRule">
<i className="w-4 h-4" data-lucide="plus"></i>
          Add Rule
        </button>
</div>
</div>
</section>
<section className="px-4 py-20 max-w-5xl mx-auto">

<div className="flex justify-center">
<div aria-label="5 star rating" className="flex items-center gap-1 bg-white/10 rounded-full px-5 py-2">
<i aria-hidden="true" className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i aria-hidden="true" className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i aria-hidden="true" className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i aria-hidden="true" className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i aria-hidden="true" className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
</div>
</div>

<h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-center">Don't take our word for it</h2>
<p className="mt-4 text-center text-gray-300 max-w-2xl mx-auto">
      Our customers call this their most impactful monetization tool. Here’s what they have to say:
    </p>

<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6 backdrop-blur-sm outline-none focus-visible:ring-2 focus-visible:ring-teal-300">
<p className="text-gray-200 leading-relaxed">Really excited about the progress we made recently on paywalls. We saw a 50% uplift in conversion for upsell screens. Unreal.</p>
<div className="flex items-center mt-6">
<div className="w-11 h-11 flex items-center justify-center rounded-md bg-[#6246ea]">
<i aria-hidden="true" className="w-5 h-5 text-white" data-lucide="radius"></i>
</div>
<div className="ml-4">
<p className="font-medium">Photoroom</p>
<p className="text-xs text-gray-400">Matthieu Rouif, CEO</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6 backdrop-blur-sm outline-none focus-visible:ring-2 focus-visible:ring-teal-300">
<p className="text-gray-200 leading-relaxed">We doubled our iOS app profitability in six months. Rapid experiments are finally possible without waiting on app releases.</p>
<div className="flex items-center mt-6">
<div className="w-11 h-11 flex items-center justify-center rounded-md bg-[#ff7a00]">
<i aria-hidden="true" className="w-5 h-5 text-white" data-lucide="flame"></i>
</div>
<div className="ml-4">
<p className="font-medium">Mojo</p>
<p className="text-xs text-gray-400">Bernard Bontemps, Growth</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6 backdrop-blur-sm outline-none focus-visible:ring-2 focus-visible:ring-teal-300">
<p className="text-gray-200 leading-relaxed">The single greatest tool we've used to increase revenue. Wins here outpace anything we've tried before.</p>
<div className="flex items-center mt-6">
<div className="w-11 h-11 flex items-center justify-center rounded-md bg-[#ffc100]">
<i aria-hidden="true" className="w-5 h-5 text-white" data-lucide="leaf"></i>
</div>
<div className="ml-4">
<p className="font-medium">Pixite</p>
<p className="text-xs text-gray-400">Jordan Gaphni, Growth</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6 backdrop-blur-sm outline-none focus-visible:ring-2 focus-visible:ring-teal-300">
<p className="text-gray-200 leading-relaxed">Completely changed the game for us. Experiments run 10× faster and we unlocked the ideal monetization model.</p>
<div className="flex items-center mt-6">
<div className="w-11 h-11 flex items-center justify-center rounded-md bg-[#ffffff]">
<i aria-hidden="true" className="w-5 h-5 text-black" data-lucide="radio"></i>
</div>
<div className="ml-4">
<p className="font-medium">RapChat</p>
<p className="text-xs text-gray-400">Seth Miller, CEO</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6 backdrop-blur-sm outline-none focus-visible:ring-2 focus-visible:ring-teal-300">
<p className="text-gray-200 leading-relaxed">We move 10× faster on monetization. No client releases or complicated deploys—just iterate and launch.</p>
<div className="flex items-center mt-6">
<div className="w-11 h-11 flex items-center justify-center rounded-md bg-[#0ea5e9]">
<i aria-hidden="true" className="w-5 h-5 text-white" data-lucide="target"></i>
</div>
<div className="ml-4">
<p className="font-medium">Citizen</p>
<p className="text-xs text-gray-400">Jon Rhome, Product</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6 backdrop-blur-sm outline-none focus-visible:ring-2 focus-visible:ring-teal-300">
<p className="text-gray-200 leading-relaxed">Revolutionized our strategy. Subscription conversions and revenue grew more than 50%—can't recommend enough.</p>
<div className="flex items-center mt-6">
<div className="w-11 h-11 flex items-center justify-center rounded-md bg-[#ff9500]">
<i aria-hidden="true" className="w-5 h-5 text-white" data-lucide="bitcoin"></i>
</div>
<div className="ml-4">
<p className="font-medium">Coinstats</p>
<p className="text-xs text-gray-400">Vahe Baghdasaryan, Growth</p>
</div>
</div>
</div>
</div>
</section>
<section className="w-full pt-16 pb-10">
<div className="mx-auto max-w-5xl px-6 text-center">
<button className="mx-auto mb-6 rounded-full border border-teal-700 bg-teal-900/30 px-6 py-3 text-sm font-semibold text-teal-300 shadow-md transition hover:bg-teal-900/50 hover:shadow-teal-700/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400">
        Start for FREE
      </button>
<h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-center">
        Simple win-win pricing
      </h2>
<p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
        Interest aligned pricing. Contact us for a discount.
      </p>
</div>
</section>
<section className="mx-auto max-w-6xl px-6 pb-24">
<div className="grid gap-8 md:grid-cols-3">

<div className="relative rounded-2xl border border-slate-800 bg-gradient-to-b from-white/5 via-white/0 to-white/5 p-8 shadow-lg shadow-black/20 flex flex-col">
<span className="mb-2 inline-block text-sm font-semibold text-teal-400">Indie</span>
<h2 className="text-4xl font-extrabold">Free</h2>
<p className="mt-2 text-base font-medium text-slate-300">
          Up to 250 conversions per month
        </p>
<p className="text-sm text-slate-500">
          Access to every standard feature
        </p>
<button className="mt-6 w-full rounded-full border border-teal-700 bg-teal-800/20 py-3 font-semibold text-teal-300 transition hover:bg-teal-800/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400">
          Try it free
        </button>
<h3 className="mt-10 text-lg font-semibold text-slate-300">Standard Features</h3>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-3">
<i className="h-4 w-4 text-teal-400 flex-shrink-0" data-lucide="check"></i>
            250 Conversions a Month
          </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 text-teal-400 flex-shrink-0" data-lucide="check"></i>
            Drag ’n Drop Paywall Editor
          </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 text-teal-400 flex-shrink-0" data-lucide="check"></i>
            200+ Paywall Templates
          </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 text-teal-400 flex-shrink-0" data-lucide="check"></i>
            Unlimited A/B tests
          </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 text-teal-400 flex-shrink-0" data-lucide="check"></i>
            Charts & Analytics
          </li>
</ul>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-gradient-to-b from-white/5 via-white/0 to-white/5 p-8 shadow-lg shadow-black/20 flex flex-col">
<span className="mb-2 inline-block text-sm font-semibold text-teal-400">Startup</span>
<h2 className="text-4xl font-extrabold">$0.20<span className="text-2xl font-semibold text-slate-400">/conversion</span></h2>
<p className="mt-2 text-base font-medium text-slate-300">
          Pay as you go pricing that scales
        </p>
<p className="text-sm text-slate-500">
          Up to 5,000 conversions a month
        </p>
<button className="mt-6 w-full rounded-full border border-teal-700 bg-teal-800/20 py-3 font-semibold text-teal-300 transition hover:bg-teal-800/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400">
          Sign Up
        </button>
<h3 className="mt-10 text-lg font-semibold text-slate-300">Standard Features</h3>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-3">
<i className="h-4 w-4 text-teal-400 flex-shrink-0" data-lucide="check"></i>
            5,000 Conversions a Month
          </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 text-teal-400 flex-shrink-0" data-lucide="check"></i>
            Drag ’n Drop Paywall Editor
          </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 text-teal-400 flex-shrink-0" data-lucide="check"></i>
            200+ Paywall Templates
          </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 text-teal-400 flex-shrink-0" data-lucide="check"></i>
            Unlimited A/B tests
          </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 text-teal-400 flex-shrink-0" data-lucide="check"></i>
            Charts & Analytics
          </li>
</ul>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-gradient-to-b from-yellow-900/10 via-white/0 to-white/5 p-8 shadow-lg shadow-black/20 flex flex-col">
<span className="mb-2 inline-block text-sm font-semibold text-yellow-400">Growth</span>
<h2 className="text-4xl font-extrabold">Flat-Rate</h2>
<p className="mt-2 text-base font-medium text-yellow-400 underline decoration-yellow-500/60 underline-offset-4">
          100% custom flat-rate pricing
        </p>
<p className="text-sm text-slate-500">
          Terms that make sense for you
        </p>
<button className="mt-6 w-full rounded-full bg-yellow-400 py-3 font-semibold text-slate-900 transition hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200">
          Get Pricing
        </button>
<h3 className="mt-10 text-lg font-semibold text-yellow-400">Premium Features</h3>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-3">
<i className="h-4 w-4 text-yellow-400 flex-shrink-0" data-lucide="check"></i>
            Unlimited Conversions
          </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 text-yellow-400 flex-shrink-0" data-lucide="check"></i>
            We Build Your Paywalls
          </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 text-yellow-400 flex-shrink-0" data-lucide="check"></i>
            4 Weekly Growth Meetings
          </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 text-yellow-400 flex-shrink-0" data-lucide="check"></i>
            Dedicated Slack Channel
          </li>
<li className="flex items-start gap-3">
<i className="h-4 w-4 text-yellow-400 flex-shrink-0" data-lucide="check"></i>
            Custom Integrations
          </li>
</ul>
</div>
</div>
</section>
<section className="w-full flex flex-col items-center px-4 py-24" style={{background: `radial-gradient(900px 700px at 50% 0%,#1A1D28 0%,#0E1118 75%)`}}>
<h2 className="text-xl md:text-2xl font-semibold mb-8 text-center tracking-tight">Our investors include:</h2>
<div className="w-full max-w-5xl rounded-full border border-white/10 bg-white/5/50 backdrop-blur-md px-6 md:px-10 py-4">
<ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-semibold">
<li className="flex items-center gap-3">
<span className="inline-flex items-center justify-center w-6 h-6 bg-orange-500 text-xs font-semibold rounded-sm text-white">Y</span>
<span className="whitespace-nowrap">Combinator</span>
</li>
<li className="flex items-center gap-3">
<i className="w-6 h-6 stroke-current text-slate-300" data-lucide="circle"></i>
<span className="whitespace-nowrap">Adjacent</span>
</li>
<li className="flex items-center gap-3">
<i className="w-6 h-6 stroke-current text-yellow-400" data-lucide="sun"></i>
<span className="whitespace-nowrap">Weekend Fund</span>
</li>
<li className="flex items-center gap-3">
<i className="w-6 h-6 stroke-current text-indigo-400" data-lucide="square"></i>
<span className="whitespace-nowrap">SHRUG</span>
</li>
<li className="flex items-center gap-3">
<i className="w-6 h-6 stroke-current text-teal-400" data-lucide="cat"></i>
<span className="whitespace-nowrap">RevenueCat</span>
</li>
</ul>
</div>
</section>




    </>
  );
}
