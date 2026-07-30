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

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
}

{

      document.addEventListener('DOMContentLoaded', () => {
        // Lucide
        lucide.createIcons();

        // Year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Mobile menu
        const btn = document.getElementById('menuBtn');
        const nav = document.getElementById('mobileNav');
        let open = false;
        btn?.addEventListener('click', () => {
          open = !open;
          if (nav) nav.classList.toggle('hidden', !open);
          btn.innerHTML = open
            ? '<i data-lucide="x" class="h-5 w-5 text-white"></i>'
            : '<i data-lucide="menu" class="h-5 w-5 text-white"></i>';
          lucide.createIcons();
        });
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
      <div className="aura-background-component top-0 w-full -z-10 absolute h-[1100px]"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="4OF29NF3HVBYQsrwPvVq"></div>

</div></div>


<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-neutral-950/80 border-b border-white/10">
<div className="max-w-7xl md:px-8 mr-auto ml-auto pr-6 pl-6">
<div className="flex pt-5 pb-5 items-center justify-between">

<a className="flex items-center gap-3" href="#">
<svg fill="none" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-lg font-medium text-white tracking-tight" style={{}}>Novalume</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-neutral-300 hover:text-white transition font-sans" href="#" style={{}}>Services</a>
<a className="text-sm font-normal text-neutral-300 hover:text-white transition font-sans" href="#" style={{}}>Work</a>
<a className="text-sm font-normal text-neutral-300 hover:text-white transition font-sans" href="#" style={{}}>Insights</a>
<a className="text-sm font-normal text-neutral-300 hover:text-white transition font-sans" href="#" style={{}}>Contact</a>
</nav>


<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>

<div className="md:hidden hidden" id="mobileNav">
<div className="mt-2 rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 backdrop-blur">
<div className="p-4 grid gap-2">
<a className="rounded-lg px-3 py-2 text-sm font-normal text-neutral-200 hover:bg-white/5 font-sans" href="#" style={{}}>Services</a>
<a className="rounded-lg px-3 py-2 text-sm font-normal text-neutral-200 hover:bg-white/5 font-sans" href="#" style={{}}>Work</a>
<a className="rounded-lg px-3 py-2 text-sm font-normal text-neutral-200 hover:bg-white/5 font-sans" href="#" style={{}}>Insights</a>
<a className="rounded-lg px-3 py-2 text-sm font-normal text-neutral-200 hover:bg-white/5 font-sans" href="#" style={{}}>Contact</a>
<a className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15 font-sans" href="#" style={{}}>
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
                Request Access
              </a>
</div>
</div>
</div>
</div>
</header>

<section className="relative pt-24">
<div className="max-w-7xl md:px-8 md:pt-16 md:pb-28 mr-auto ml-auto pt-10 pr-6 pb-10 pl-6">

<div className="mx-auto mb-6 flex w-full items-center justify-center">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-sm font-normal text-neutral-200 font-sans" style={{}}>Crafting Distinctive Digital Identities</span>
</div>
</div>

<div className="max-w-4xl text-center mr-auto ml-auto space-y-8">
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] text-3xl font-light text-white tracking-tight font-manrope" style={{}}>
            Branding that truly converts
          </h1>
<p className="md:text-lg text-base text-neutral-400 mt-5" style={{}}>
            Elevate your presence with identity systems and product visuals. We design for clarity, momentum, and measurable outcomes.
          </p>

<div className="flex flex-col gap-3 sm:flex-row mt-8 items-center justify-center">
<a className="group relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95" href="#">
<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
<span className="relative z-10 block bg-gray-950 rounded-xl pt-3 pr-6 pb-3 pl-6">
<div className="relative z-10 flex items-center space-x-2">
<span className="transition-all duration-500 group-hover:translate-x-1 text-sm font-medium" style={{}}>Get Started Now</span>
<svg className="lucide lucide-arrow-right w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className=""></path>
<path className=""></path>
</svg>
</div>
</span>
</a>
<a className="inline-flex items-center gap-2 ring-1 ring-white/15 hover:bg-white/10 transition text-sm font-medium text-white bg-white/5 rounded-xl pt-3 pr-5 pb-3 pl-5 backdrop-blur-lg" href="#" style={{}}>
              See Projects
              <svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
</div>
</div>


<section className="relative z-10 sm:py-24 fade-in fade-in-delay-4" style={{opacity: `1`, transform: `translateY(0px)`}}>
<div className="pr-6 pl-6">
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
<svg className="" fill="none" height="36" viewBox="0 0 99 36" width="99" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg><svg className="" fill="none" height="36" viewBox="0 0 115 36" width="115" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg>
<svg className="" fill="none" height="36" viewBox="0 0 110 36" width="110" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg><svg className="" fill="none" height="36" viewBox="0 0 92 36" width="92" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg>
<svg className="" fill="none" height="36" viewBox="0 0 104 36" width="104" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg>
<svg className="" fill="none" height="36" viewBox="0 0 113 36" width="113" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg>
</div>
</div>

</section>
</div>
</section>

<section className="relative" style={{opacity: `0`, transform: `translateY(30px)`, animation: `fadeInUp 0.8s ease-out 0.3s forwards`}}>

<div className="max-w-7xl md:px-8 mr-auto ml-auto pr-6 pb-24 pl-6" style={{display: `block`}}>
<div className="mx-auto max-w-3xl text-center section-header">
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-manrope font-medium" style={{}}>Selected Work</h2>
<p className="mt-3 text-sm md:text-base text-neutral-300 font-sans" style={{opacity: `0`, animation: `0.8s ease-out 0.5s 1 normal forwards running fadeInUp`}}>Strategy-led direction and tasteful execution across identity, web, and motion.</p>
</div>

<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] mt-10"><a className="portfolio-card masonry-item group relative block overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition bg-neutral-900/50 rounded-lg mb-6" href="#" style={{opacity: `0`, animation: `fadeInUp 0.6s ease-out forwards`}}>
<img alt="Industrial 3D player render" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/96c13718-35ec-4c6b-ac05-efa6e994dc3f_800w.jpg" style={{}} />
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2" style={{}}>
            View Casestudy
            <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</a><a className="portfolio-card masonry-item group relative mb-6 block overflow-hidden rounded-lg ring-1 ring-white/10 bg-neutral-900/50 hover:ring-white/20 transition" href="#" style={{opacity: `0`, animation: `fadeInUp 0.6s ease-out forwards`}}>
<img alt="Minimal portrait with headphones" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a055708e-5727-4345-b339-0737966db630_800w.jpg" style={{}} />
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2" style={{}}>
            View Casestudy
            <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</a><a className="portfolio-card masonry-item group relative mb-6 block overflow-hidden rounded-lg ring-1 ring-white/10 bg-neutral-900/50 hover:ring-white/20 transition" href="#" style={{opacity: `0`, animation: `fadeInUp 0.6s ease-out forwards`}}>
<img alt="Cosmetic tube held by hand" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/daf06670-0e8c-4034-90f7-e7d01518f845_800w.jpg" style={{}} />
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2" style={{}}>
            View Casestudy
            <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</a><a className="portfolio-card masonry-item group relative block overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition bg-neutral-900/50 rounded-lg mb-6" href="#" style={{opacity: `0`, animation: `fadeInUp 0.6s ease-out forwards`}}>
<img alt="Lemon still life on block" className="w-full h-auto object-cover" src="/assets/0c06f722-2305-476f-be4d-558159f7c9f5_800w.jpg" style={{}} />
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2" style={{}}>
            View Casestudy
            <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</a><a className="portfolio-card masonry-item group relative block overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition bg-neutral-900/50 rounded-lg mb-6" href="#" style={{opacity: `0`, animation: `fadeInUp 0.6s ease-out forwards`}}>
<img alt="Lemon still life on block" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/10dd46c9-2ab8-44be-8554-48514ed069b9_800w.jpg" style={{}} />
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2" style={{}}>
            View Casestudy
            <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</a><a className="portfolio-card masonry-item group relative mb-6 block overflow-hidden rounded-lg ring-1 ring-white/10 bg-neutral-900/50 hover:ring-white/20 transition" href="#" style={{opacity: `0`, animation: `fadeInUp 0.6s ease-out forwards`}}>
<img alt="Cosmetics on circular plinth" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ceb2a15c-6187-4832-8043-366078f0757a_800w.jpg" style={{}} />
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2" style={{}}>
            View Casestudy
            <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</a><a className="portfolio-card masonry-item group relative mb-6 block overflow-hidden rounded-lg ring-1 ring-white/10 bg-neutral-900/50 hover:ring-white/20 transition" href="#" style={{opacity: `0`, animation: `fadeInUp 0.6s ease-out forwards`}}>
<img alt="Matte coffee bag packaging" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/20653000-43d0-4885-98f3-9ceb76370106_800w.jpg" style={{}} />
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2" style={{}}>
            View Casestudy
            <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</a><a className="portfolio-card masonry-item group relative mb-6 block overflow-hidden rounded-lg ring-1 ring-white/10 bg-neutral-900/50 hover:ring-white/20 transition" href="#" style={{opacity: `0`, animation: `fadeInUp 0.6s ease-out forwards`}}>
<img alt="Hand holding product bottle" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2a986d88-6602-4f79-ab2e-80e0c247940e_800w.jpg" style={{}} />
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2" style={{}}>
            View Casestudy
            <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</a><a className="portfolio-card masonry-item group relative mb-6 block overflow-hidden rounded-lg ring-1 ring-white/10 bg-neutral-900/50 hover:ring-white/20 transition" href="#" style={{opacity: `0`, animation: `fadeInUp 0.6s ease-out forwards`}}>
<img alt="Minimal packaging still life" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f85fdb1e-b236-4eff-aef0-5365055289c3_800w.jpg" style={{}} />
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2" style={{}}>
            View Casestudy
            <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</a></div>
</div>
</section><section className="relative">
<div className="max-w-7xl md:px-8 mr-auto ml-auto pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">

<div className="ring-1 ring-white/10 overflow-hidden bg-neutral-900/50 rounded-lg">
<div className="aspect-[4/3] w-full overflow-hidden">
<img alt="Professional portrait" className="h-full w-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b59bad79-703a-4c05-8ed2-fafcc49a7b51_800w.jpg" style={{}} />
</div>
</div><div className="">
<h2 className="md:text-6xl text-4xl font-light text-white tracking-tight font-manrope" style={{}}>Meet Alex</h2>
<p className="mt-4 text-sm md:text-base text-neutral-300 font-sans" style={{}}>
          I'm Alex, a creative Digital Product Designer and Front-end Developer based in San Francisco. I specialize in creating seamless user experiences and innovative digital solutions that bridge design and technology to drive business growth.
        </p>

<div className="mt-5 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>UI/UX Design</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>React Development</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Design Systems</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Prototyping</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Web Development</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>TypeScript</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Figma</span>
</div>
<div className="mt-6 h-px bg-white/10"></div>

<div className="mt-6 space-y-4">
<div className="grid grid-cols-3 items-baseline">
<span className="text-sm md:text-base text-neutral-200 font-sans" style={{}}>Senior Designer</span>
<span className="text-sm md:text-base text-neutral-300 font-sans" style={{}}>TechFlow Inc</span>
<span className="text-right text-sm md:text-base text-neutral-400 font-sans" style={{}}>Currently</span>
</div>
<div className="grid grid-cols-3 items-baseline">
<span className="text-sm md:text-base text-neutral-200 font-sans" style={{}}>Product Designer</span>
<span className="text-sm md:text-base text-neutral-300 font-sans" style={{}}>PixelCraft Studio</span>
<span className="text-right text-sm md:text-base text-neutral-400 font-sans" style={{}}>2022–24</span>
</div>
<div className="grid grid-cols-3 items-baseline">
<span className="text-sm md:text-base text-neutral-200 font-sans" style={{}}>UI Designer</span>
<span className="text-sm md:text-base text-neutral-300 font-sans" style={{}}>StartupLab</span>
<span className="text-right text-sm md:text-base text-neutral-400 font-sans" style={{}}>2020–22</span>
</div>
</div>

<div className="mt-8 flex items-center gap-3 text-sm text-neutral-300">
<span className="font-sans" style={{}}>Recent Projects</span>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-arrow-down h-3.5 w-3.5 text-neutral-200" data-lucide="arrow-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</span>
</div>
</div>

</div>
<div className="mt-10 h-px bg-white/10"></div>

<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

<a className="group relative overflow-hidden rounded-lg bg-neutral-900/70 ring-1 ring-white/10 hover:ring-white/20 transition" href="#">
<div className="aspect-[16/11] w-full overflow-hidden">
<img alt="Dashboard interface design" className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7b1b4397-d561-464c-9729-1d5617f66579_800w.jpg" style={{}} />
</div>
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2" style={{}}>
            View Project
            <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-lg bg-neutral-900/70 ring-1 ring-white/10 hover:ring-white/20 transition" href="#">
<div className="aspect-[16/11] w-full overflow-hidden">
<img alt="Mobile app interface" className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6dc04406-de49-4988-8d82-e1d9fe1d83c1_800w.jpg" style={{}} />
</div>
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2" style={{}}>
            View Project
            <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-lg bg-neutral-900/70 ring-1 ring-white/10 hover:ring-white/20 transition" href="#">
<div className="aspect-[16/11] w-full overflow-hidden">
<img alt="Website design mockup" className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5d1e46f6-6956-44c3-a8b6-ceb2c438c8f5_800w.jpg" style={{}} />
</div>
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2" style={{}}>
            View Project
            <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-lg bg-neutral-900/70 ring-1 ring-white/10 hover:ring-white/20 transition" href="#">
<div className="aspect-[16/11] w-full overflow-hidden">
<img alt="Design system components" className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03]" src="/assets/77827dc5-39e4-4855-bf02-5d844f2cc636_800w.jpg" />
</div>
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2" style={{}}>
            View Project
            <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</a>
</div>
</div>
</section><section className="relative">
<div className="max-w-7xl md:px-8 mr-auto ml-auto pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 bg-neutral-900/50 rounded-2xl items-start p-6 md:p-8">

<div className="aspect-[4/5] w-full overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 rounded-lg">
<img alt="Design process sketching on paper" className="h-full w-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9ab83c55-bb01-43d7-b04c-23f9c4a252e4_800w.jpg" style={{}} />
</div>

<div className="">

<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Design process</span>
</div>

<h2 className="mt-4 md:text-6xl text-4xl font-light text-white tracking-tight font-manrope" style={{}}>Process</h2>
<p className="mt-3 text-sm md:text-base text-neutral-300 font-sans" style={{}}>
          Crafting bold visuals that inspire and elevate brands through a thoughtful, streamlined process.
        </p>

<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<a className="group relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95" href="#">
<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
<span className="relative z-10 block px-5 py-2.5 rounded-xl bg-gray-950 text-sm">
<div className="relative z-10 flex items-center space-x-2">
<span className="transition-all duration-500 group-hover:translate-x-0.5" style={{}}>Book a Free Call</span>
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
</span>
</a>
<a className="inline-flex items-center gap-2 ring-1 ring-white/15 hover:bg-white/10 transition text-sm font-medium text-white bg-white/5 rounded-xl px-5 py-2.5 backdrop-blur" href="#" style={{}}>
            See Projects
            <svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
</div>

<div className="mt-6 space-y-4">

<div className="relative overflow-hidden ring-1 ring-white/10 md:p-6 bg-neutral-900/60 rounded-2xl pt-5 pr-5 pb-5 pl-5">
<span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-neutral-300 text-xs ring-1 ring-white/10" style={{}}>1</span>
<div className="flex gap-4 items-start">
<div className="inline-flex h-9 w-20 ring-1 ring-white/10 bg-[#ffffff]/5 rounded-full items-center justify-center">
<svg className="lucide lucide-lightbulb text-neutral-200" data-lucide="lightbulb" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<div className="">
<h3 className="md:text-xl text-lg font-medium text-white tracking-tight" style={{}}>Define Your Vision</h3>
<p className="mt-1.5 text-sm md:text-base text-neutral-300 font-sans" style={{}}>
                  Find the perfect plan tailored to your needs—balancing features, flexibility, and value—so we can align on goals effortlessly.
                </p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-5 md:p-6">
<span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-neutral-300 text-xs ring-1 ring-white/10" style={{}}>2</span>
<div className="flex items-start gap-4">
<div className="inline-flex h-9 w-20 ring-1 ring-white/10 bg-[#ffffff]/5 rounded-full items-center justify-center">
<svg className="lucide lucide-sliders text-neutral-200" data-lucide="sliders" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line></line><line></line><line></line><line></line><line></line><line></line><line></line><line></line><line></line></svg>
</div>
<div className="">
<h3 className="text-lg md:text-xl text-white tracking-tight font-sans font-medium" style={{}}>Submit Your Request</h3>
<p className="mt-1.5 text-sm md:text-base text-neutral-300 font-sans" style={{}}>
                  Send your requirements via our private portal. We clarify scope, share direction, and translate your vision into precise, actionable work.
                </p>
</div>
</div>
</div>

<div className="relative overflow-hidden ring-1 ring-white/10 md:p-6 bg-neutral-900/60 rounded-2xl pt-5 pr-5 pb-5 pl-5">
<span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-neutral-300 text-xs ring-1 ring-white/10" style={{}}>3</span>
<div className="flex items-start gap-4">
<div className="inline-flex h-9 w-20 ring-1 ring-white/10 bg-[#ffffff]/5 rounded-full items-center justify-center">
<svg className="lucide lucide-rocket text-neutral-200" data-lucide="rocket" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</div>
<div className="">
<h3 className="text-lg md:text-xl text-white tracking-tight font-sans font-medium" style={{}}>Project Delivered</h3>
<p className="mt-1.5 text-sm md:text-base text-neutral-300 font-sans" style={{}}>
                  Receive polished deliverables in 2–3 days. With an eye for detail and quality, we bring your brand to life—on time and beyond expectations.
                </p>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="relative">
<div className="max-w-7xl md:px-8 mr-auto ml-auto pr-6 pb-24 pl-6">

<div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">

<div className="">

<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Design services</span>
</div>
<h2 className="mt-4 md:text-6xl text-4xl font-light text-white tracking-tight font-manrope" style={{}}>Services</h2>
<p className="mt-3 text-sm md:text-base text-neutral-300 font-sans" style={{}}>
          Helping teams stand out with refined identity, product visuals, and content updates that captivate and convert.
        </p>

<div className="mt-5 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Product Design</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Brand Identity Design</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Branding</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Packaging Design</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Mockup Design</span>
</div>

<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<a className="group relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95" href="#">
<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
<span className="relative z-10 block px-5 py-2.5 rounded-xl bg-gray-950 text-sm">
<div className="relative z-10 flex items-center space-x-2">
<span className="transition-all duration-500 group-hover:translate-x-0.5" style={{}}>Book a Free Call</span>
<svg className="lucide lucide-phone w-5 h-5" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
</span>
</a>
<a className="inline-flex items-center gap-2 ring-1 ring-white/15 hover:bg-white/10 transition text-sm font-medium text-white bg-white/5 rounded-xl px-5 py-2.5 backdrop-blur" href="#" style={{}}>
            See Projects
            <svg className="lucide lucide-play h-4 w-4" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
</div>
</div>

<div className="ring-1 ring-white/10 overflow-hidden bg-neutral-900/50 rounded-xl">
<div className="aspect-[16/10] w-full overflow-hidden">
<img alt="Minimal product bottles still life" className="h-full w-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4e62d3a0-57fa-4882-a644-34db751f6e28_1600w.jpg" style={{}} />
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">

<div className="relative overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-5 md:p-6">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 ring-1 ring-white/10 items-center justify-center bg-[#ffffff]/5 rounded-full">
<svg className="lucide lucide-sparkles h-4.5 w-4.5 text-neutral-200" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className=""></path><path></path><path></path><circle className="" cx="4" cy="20"></circle></svg>
</span>
<div className="flex-1">
<h3 className="text-lg md:text-xl text-white tracking-tight font-sans font-medium" style={{}}>Brand Identity</h3>
<p className="mt-1.5 text-sm md:text-base text-neutral-300 font-sans" style={{}}>
              Crafting unique, memorable identities that resonate — from names and logos to flexible systems that scale across every touchpoint.
            </p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-5 md:p-6">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 ring-1 ring-white/10 items-center justify-center bg-[#ffffff]/5 rounded-full">
<svg className="lucide lucide-shapes h-4.5 w-4.5 text-neutral-200" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className=""></path><path></path><path></path></svg>
</span>
<div className="flex-1">
<h3 className="text-lg md:text-xl text-white tracking-tight font-sans font-medium" style={{}}>Brand Design</h3>
<p className="mt-1.5 text-sm md:text-base text-neutral-300 font-sans" style={{}}>
              Visual systems and guidelines that keep your brand consistent — typography, colors, components, and motion rules.
            </p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-5 md:p-6">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 ring-1 ring-white/10 items-center justify-center bg-[#ffffff]/5 rounded-full">
<svg className="lucide lucide-package h-4.5 w-4.5 text-neutral-200" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</span>
<div className="flex-1">
<h3 className="text-lg md:text-xl text-white tracking-tight font-sans font-medium" style={{}}>Package Design</h3>
<p className="mt-1.5 text-sm md:text-base text-neutral-300 font-sans" style={{}}>
              Shelf‑ready packaging that looks premium and prints perfectly — dielines, variants, and compliance handled.
            </p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-5 md:p-6">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 ring-1 ring-white/10 items-center justify-center bg-[#ffffff]/5 rounded-full">
<svg className="lucide lucide-image h-4.5 w-4.5 text-neutral-200" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect><circle cx="9" cy="9"></circle><path></path></svg>
</span>
<div className="flex-1">
<h3 className="text-lg md:text-xl text-white tracking-tight font-sans font-medium" style={{}}>Mockup Design</h3>
<p className="mt-1.5 text-sm md:text-base text-neutral-300 font-sans" style={{}}>
              High‑fidelity mockups for products and campaigns — perfect for pitches, listings, and launch pages.
            </p>
</div>
</div>
</div>
</div>

<div className="mt-6 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}><svg className="lucide lucide-pen-line h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>Copy Updates</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Brand Migration</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Slide Decks</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Brand Graphics</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Social Media</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Icons</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Brand Integrations</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Optimization</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans" style={{}}>Landing Pages</span>
</div>
</div>
</section><footer className="relative border-white/10 border-t">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-10">
<div className="flex flex-col items-center justify-between gap-6 md:flex-row">
<div className="flex items-center gap-3">
<span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800 ring-1 ring-white/10 shadow-inner">
<svg className="lucide lucide-grid h-4 w-4 text-neutral-200" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect><path></path><path></path><path></path><path></path></svg>
</span>
<span className="text-sm font-medium tracking-tight text-white font-sans" style={{}}>Novalume</span>
</div>
<p className="text-sm text-neutral-400 font-sans" style={{}}>© <span className="font-sans" id="year" style={{}}>2025</span> Novalume Studio. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-sm text-neutral-300 hover:text-white transition font-sans" href="#" style={{}}>Privacy</a>
<a className="text-sm text-neutral-300 hover:text-white transition font-sans" href="#" style={{}}>Terms</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/15 hover:bg-white/15 font-sans" href="#" style={{}}>
<svg className="lucide lucide-mail h-3.5 w-3.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="16" rx="2" width="20"></rect></svg>
              hello@novalume.studio
            </a>
</div>
</div>
</div>
</footer>




    </>
  );
}
