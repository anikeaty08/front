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


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


      // Initialize lucide icons
      lucide.createIcons();

      // Carousel logic
      const slides = Array.from(document.querySelectorAll('#carousel [data-index]'));
      const prev = document.getElementById('prev');
      const next = document.getElementById('next');
      const dotsWrap = document.getElementById('dots');
      let current = 0;

      function renderDots() {
        dotsWrap.innerHTML = '';
        slides.forEach((_, i) => {
          const b = document.createElement('button');
          b.className = 'h-2.5 w-2.5 rounded-full ' + (i === current ? 'bg-white' : 'bg-white/60 hover:bg-white/80');
          b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
          b.addEventListener('click', () => go(i));
          dotsWrap.appendChild(b);
        });
      }

      function go(index) {
        slides.forEach((s, i) => {
          if (i === index) {
            s.classList.remove('opacity-0', 'pointer-events-none');
            s.classList.add('opacity-100');
          } else {
            s.classList.add('opacity-0', 'pointer-events-none');
            s.classList.remove('opacity-100');
          }
        });
        current = index;
        renderDots();
      }

      prev.addEventListener('click', () => {
        const nextIndex = (current - 1 + slides.length) % slides.length;
        go(nextIndex);
      });

      next.addEventListener('click', () => {
        const nextIndex = (current + 1) % slides.length;
        go(nextIndex);
      });

      let auto = setInterval(() => next.click(), 6000);
      document.getElementById('carousel').addEventListener('mouseenter', () => clearInterval(auto));
      document.getElementById('carousel').addEventListener('mouseleave', () => auto = setInterval(() => next.click(), 6000));

      // Initial render
      renderDots();
    
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qTiAlX0sxkuBOAiL7qHL"></div></div>
<div className="min-h-screen">

<header className="sticky top-0 z-40 backdrop-blur-none">
<div className="max-w-7xl sm:px-6 mr-auto ml-auto pr-4 pl-4">
<div className="flex bg-neutral-900 rounded-3xl mt-2 mb-2 pt-4 pr-8 pb-4 pl-8 items-center justify-between">
<div className="flex items-center gap-3">
<a className="text-lg font-semibold text-white tracking-tight" href="#" style={{}}>Suzy Liu</a>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="transition hover:text-white text-sm font-medium text-neutral-400" href="#" style={{}}>Work</a>
<a className="text-sm font-medium transition text-neutral-400 hover:text-white" href="#" style={{}}>About</a>
<a className="text-sm font-medium transition text-neutral-400 hover:text-white" href="#" style={{}}>Blog</a>
<a className="text-sm font-medium transition text-neutral-400 hover:text-white" href="#" style={{}}>Contact</a>
</nav>
<button aria-label="Menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border transition border-neutral-700 hover:bg-neutral-800 text-white">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</header>

<main className="max-w-7xl sm:px-6 mr-auto ml-auto pr-4 pb-0 pl-4">
<div className="bg-white rounded-3xl space-y-4">

<div className="bg-white rounded-3xl mt-8 pt-4 pr-4 pb-4 pl-4">
<h2 className="text-[14vw] sm:text-[10vw] lg:text-[7vw] leading-[0.9] py-6 font-light tracking-tight" style={{}}>SUZY LIU <span className="text-neutral-400 font-light tracking-tight" style={{}}>STUDIO</span></h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4" style={{minHeight: '600px'}}>

<section className="lg:col-span-2 flex">
<div className="relative overflow-hidden rounded-3xl bg-neutral-100 w-full">
<div className="relative h-[600px]" id="carousel">

<div className="absolute inset-0 transition-opacity duration-500 ease-out opacity-100" data-index="0">
<img alt="Portrait minimal" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4f995362-9751-4d89-86fa-a5f7c03be905_1600w.jpg"/>
</div>
<div className="absolute inset-0 transition-opacity duration-500 ease-out opacity-0 pointer-events-none" data-index="1">
<img alt="Beige fashion editorial" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a8f75e15-5f15-4877-a253-da0b8f89efee_1600w.jpg"/>
</div>
<div className="absolute inset-0 transition-opacity duration-500 ease-out opacity-0 pointer-events-none" data-index="2">
<img alt="Moody mountains" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a3001134-ae66-49be-8bea-f8eed8b7e07e_1600w.jpg" style={{}}/>
</div>
<div className="absolute inset-0 transition-opacity duration-500 ease-out opacity-0 pointer-events-none" data-index="3">
<img alt="3D minimal render" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5bf79840-b7ed-4d8d-acd3-c5f5835a065e_800w.jpg" style={{}}/>
</div>

<button className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-xl transition bg-neutral-900/70 text-white hover:bg-neutral-900" id="prev">
<svg className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 transition hover:bg-neutral-900 text-white bg-neutral-900/70 rounded-xl items-center justify-center" id="next">
<svg className="lucide lucide-chevron-right w-[20px] h-[20px]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>

<div className="absolute left-4 bottom-4">
<a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium backdrop-blur transition bg-white/90 text-neutral-900 hover:bg-white" href="#" style={{}}>
                      View Project
                      <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2" id="dots"><button aria-label="Go to slide 1" className="h-2.5 w-2.5 rounded-full bg-white"></button><button aria-label="Go to slide 2" className="h-2.5 w-2.5 rounded-full bg-white/60 hover:bg-white/80"></button><button aria-label="Go to slide 3" className="h-2.5 w-2.5 rounded-full bg-white/60 hover:bg-white/80"></button><button aria-label="Go to slide 4" className="h-2.5 w-2.5 rounded-full bg-white/60 hover:bg-white/80"></button></div>

<div className="absolute right-3 bottom-3">
<span className="rounded-2xl px-3 py-1 text-xs font-medium backdrop-blur bg-white/90 text-neutral-700" style={{}}>Selected Work</span>
</div>
</div>
</div>
</section>

<aside className="flex flex-col" style={{height: '600px'}}>
<div className="flex-1 flex flex-col space-y-4">

<div className="ring-1 ring-neutral-200 bg-white rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm">
<div className="flex items-start gap-4">
<div className="flex-1">
<h2 className="text-xl font-semibold tracking-tight" style={{}}>Suzy Liu</h2>
<p className="text-sm text-neutral-600" style={{}}>Photographer</p>
<p className="mt-3 text-sm leading-6 text-neutral-700" style={{}}>
                        We capture authentic moments and craft visual stories blending clean minimalism with soft emotion—every frame composed with intention.
                      </p>
</div>
</div>
</div>
<div className="ring-1 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4ba34171-fc4e-49ee-a2c4-13a87fd225c6_1600w.jpg)] bg-cover rounded-3xl pt-20 pr-5 pb-20 pl-5 shadow-sm ring-neutral-200 bg-white flex-1 min-h-0">
</div>

<div className="space-y-3">
<a className="flex items-center justify-between rounded-2xl px-4 py-3 ring-1 transition bg-white ring-neutral-200 hover:bg-neutral-50" href="#">
<span className="text-sm font-medium text-neutral-800" style={{}}>Instagram</span>
<svg className="lucide lucide-instagram h-5 w-5 text-neutral-500" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="flex items-center justify-between rounded-2xl px-4 py-3 ring-1 transition bg-white ring-neutral-200 hover:bg-neutral-50" href="#">
<span className="text-sm font-medium text-neutral-800" style={{}}>Behance</span>
<svg className="lucide lucide-palette h-5 w-5 text-neutral-500" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</a>
<a className="flex items-center justify-between rounded-2xl px-4 py-3 ring-1 transition bg-white ring-neutral-200 hover:bg-neutral-50" href="#">
<span className="text-sm font-medium text-neutral-800" style={{}}>Twitter</span>
<svg className="lucide lucide-twitter h-5 w-5 text-neutral-500" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="flex items-center justify-between rounded-2xl px-4 py-3 ring-1 transition bg-neutral-900 ring-neutral-200 hover:bg-black" href="#">
<span className="text-sm font-medium text-white" style={{}}>Contact Me</span>
<svg className="lucide lucide-mail h-5 w-5 text-white" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
</aside>
</div>
</div>

<section className="bg-white rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6">

<div className="flex items-center justify-between mb-3">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wide" style={{}}>/Portfolio</p>
<span className="text-xs font-medium text-neutral-500" style={{}}>(09)</span>
</div>
<div className="flex gap-6 items-start justify-between mb-8">
<div className="max-w-3xl">
<h2 className="text-4xl md:text-6xl text-neutral-900 font-light tracking-tight" style={{}}>Latest moments from my portfolio.</h2>
<p className="mt-4 text-sm md:text-base text-neutral-600" style={{}}>Portraits, editorials, and landscapes by Suzy Liu—minimal, calm, and intentional storytelling through light.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition bg-neutral-100 ring-1 ring-neutral-200 hover:bg-neutral-200 text-neutral-900" href="#" style={{}}>
              View all projects
              <svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<article className="lg:col-span-2 rounded-3xl p-1 ring-1 bg-neutral-50 ring-neutral-200">
<div className="relative overflow-hidden rounded-2xl">
<img alt="Minimal landscape in soft gradient light" className="h-[360px] md:h-[460px] w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a96798fa-9905-42b3-9d61-fec4d29fbe06_800w.jpg"/>

<span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm backdrop-blur" style={{}}>Editorial</span>

<div className="pointer-events-none absolute inset-x-0 bottom-0">
<div className="h-40 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent"></div>
</div>
<div className="absolute left-4 right-4 bottom-4">
<p className="text-xs font-medium text-white/80" style={{}}>May 30, 2025</p>
<h3 className="mt-1 text-xl md:text-2xl text-white font-light tracking-tight" style={{}}>The Power of Restraint in Photography</h3>
<p className="mt-2 text-sm text-white/80" style={{}}>How simplicity, negative space, and patient framing amplify emotion and create timeless images.</p>
</div>
</div>
</article>

<article className="rounded-3xl p-1 ring-1 bg-neutral-50 ring-neutral-200">
<div className="overflow-hidden rounded-2xl relative">
<img alt="Motion portrait in soft tones" className="h-[240px] md:h-[260px] w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/361b93b3-4faa-4d90-a64d-f5de4921a4d7_800w.jpg"/>
<span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm backdrop-blur" style={{}}>Portrait</span>
</div>
<div className="px-4 pt-4 pb-6">
<p className="text-xs font-medium text-neutral-500" style={{}}>May 23, 2025</p>
<h4 className="mt-1 text-lg font-semibold tracking-tight text-neutral-900" style={{}}>Designing for Calm: Motion in Portraits</h4>
<p className="mt-2 text-sm text-neutral-600" style={{}}>Exploring blur, minimal palettes, and subtle pacing to shape the viewer's emotional response.</p>
</div>
</article>

<article className="ring-1 ring-neutral-200 bg-neutral-50 rounded-3xl pt-1 pr-1 pb-1 pl-1">
<div className="overflow-hidden rounded-2xl relative">
<img alt="Studio black-and-white portrait with geometric light" className="h-[240px] md:h-[260px] w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cee814f4-9f14-4c82-896a-b36587194633_800w.jpg"/>
<span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm backdrop-blur" style={{}}>Studio</span>
</div>
<div className="px-4 pt-4 pb-6">
<p className="text-xs font-medium text-neutral-500" style={{}}>May 16, 2025</p>
<h4 className="mt-1 text-lg font-semibold tracking-tight text-neutral-900" style={{}}>Building a Timeless Aesthetic</h4>
<p className="mt-2 text-sm text-neutral-600" style={{}}>Creating images that transcend trends by focusing on light, form, and honest expression.</p>
</div>
</article>
<article className="ring-1 ring-neutral-200 bg-neutral-50 rounded-3xl pt-1 pr-1 pb-1 pl-1">
<div className="overflow-hidden rounded-2xl relative">
<img alt="Studio black-and-white portrait with geometric light" className="h-[240px] md:h-[260px] w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/88cc054f-a996-4a0c-8fec-3721e3ac4e25_800w.jpg"/>
<span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm backdrop-blur" style={{}}>Studio</span>
</div>
<div className="px-4 pt-4 pb-6">
<p className="text-xs font-medium text-neutral-500" style={{}}>May 16, 2025</p>
<h4 className="mt-1 text-lg font-semibold tracking-tight text-neutral-900" style={{}}>Building a Timeless Aesthetic</h4>
<p className="mt-2 text-sm text-neutral-600" style={{}}>Creating images that transcend trends by focusing on light, form, and honest expression.</p>
</div>
</article>
<article className="ring-1 ring-neutral-200 bg-neutral-50 rounded-3xl pt-1 pr-1 pb-1 pl-1">
<div className="overflow-hidden rounded-2xl relative">
<img alt="Studio black-and-white portrait with geometric light" className="h-[240px] md:h-[260px] w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/779c923e-bcc8-49c7-9328-661a04d3f208_800w.jpg"/>
<span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm backdrop-blur" style={{}}>Studio</span>
</div>
<div className="px-4 pt-4 pb-6">
<p className="text-xs font-medium text-neutral-500" style={{}}>May 16, 2025</p>
<h4 className="mt-1 text-lg font-semibold tracking-tight text-neutral-900" style={{}}>Building a Timeless Aesthetic</h4>
<p className="mt-2 text-sm text-neutral-600" style={{}}>Creating images that transcend trends by focusing on light, form, and honest expression.</p>
</div>
</article>
</div>

<div className="mt-6 sm:hidden">
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition bg-neutral-100 ring-1 ring-neutral-200 hover:bg-neutral-200 text-neutral-900 w-full justify-center" href="#" style={{}}>
              View all projects
              <svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</a>
</div>
</section>

<section className="bg-white rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-6">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wide" style={{}}>/About</p>
<span className="text-xs font-medium text-neutral-500" style={{}}>(02)</span>
</div>
<h3 className="text-4xl md:text-6xl text-neutral-900 mb-8 font-light tracking-tight" style={{}}>Behind the lens.</h3>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8">
<div className="relative overflow-hidden bg-neutral-50 ring-1 ring-neutral-200 rounded-3xl shadow-sm">
<img alt="Suzy Liu at work" className="h-80 sm:h-96 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0c1c4611-4743-407c-9375-ca363769720b_1600w.jpg"/>
<div className="bg-white pt-6 pr-6 pb-6 pl-6">
<div className="prose prose-neutral max-w-none">
<p className="text-lg text-neutral-700 leading-relaxed mb-4" style={{}}>
                      Creating minimal, calm, and intentional photography that tells authentic stories through light and composition.
                    </p>
<p className="text-neutral-600 mb-4" style={{}}>
                      My approach blends clean minimalism with soft emotion, capturing genuine moments that feel both timeless and deeply personal. Every frame is composed with intention, focusing on the subtle interplay between light, shadow, and human expression.
                    </p>
<p className="text-neutral-600" style={{}}>
                      Based in California, I work with clients who value thoughtful direction and meticulous attention to detail. Whether it's portraits, editorials, or brand photography, my goal is to create imagery that resonates with quiet strength and authentic beauty.
                    </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="ring-1 ring-neutral-200 bg-neutral-50 rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex gap-2 text-xs text-neutral-500 mb-4 items-center uppercase tracking-wide">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 11h8"></path><path d="M7 16h12"></path><path d="M7 6h3"></path></svg>
<span style={{}}>By the Numbers</span>
</div>
<div className="space-y-4">
<div>
<p className="text-2xl text-neutral-900 font-light tracking-tight" style={{}}>200+</p>
<p className="text-sm text-neutral-600" style={{}}>Projects Completed</p>
</div>
<div>
<p className="text-2xl text-neutral-900 font-light tracking-tight" style={{}}>6</p>
<p className="text-sm text-neutral-600" style={{}}>Years Experience</p>
</div>
<div>
<p className="text-2xl text-neutral-900 font-light tracking-tight" style={{}}>25+</p>
<p className="text-sm text-neutral-600" style={{}}>Brands Collaborated</p>
</div>
</div>
</div>

<div className="bg-neutral-900 rounded-3xl shadow-sm p-6">
<div className="flex items-center gap-2 text-white/80 text-xs mb-4 uppercase tracking-wide">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span style={{}}>Equipment</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-white/90 text-sm" style={{}}>Canon R5</span>
<span className="text-white/60 text-xs" style={{}}>Primary</span>
</div>
<div className="flex justify-between items-center">
<span className="text-white/90 text-sm" style={{}}>Sony A7R V</span>
<span className="text-white/60 text-xs" style={{}}>Backup</span>
</div>
<div className="flex justify-between items-center">
<span className="text-white/90 text-sm" style={{}}>85mm f/1.4</span>
<span className="text-white/60 text-xs" style={{}}>Portrait</span>
</div>
<div className="flex justify-between items-center">
<span className="text-white/90 text-sm" style={{}}>35mm f/1.4</span>
<span className="text-white/60 text-xs" style={{}}>Editorial</span>
</div>
</div>
</div>

<div className="ring-1 ring-neutral-200 bg-neutral-50 rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex gap-2 text-xs text-neutral-500 mb-4 items-center uppercase tracking-wide">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
<span style={{}}>Recognition</span>
</div>
<div className="space-y-2">
<p className="text-sm text-neutral-600" style={{}}>Featured in Vogue Magazine</p>
<p className="text-sm text-neutral-600" style={{}}>Winner - CA Photography Awards 2024</p>
<p className="text-sm text-neutral-600" style={{}}>Top 50 Portrait Photographers - PDN</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-neutral-900 rounded-3xl mt-8">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -left-6 sm:left-4 top-6 sm:top-10 -rotate-6">
<img alt="Art print in soft light" className="w-40 sm:w-52 md:w-64 rounded-2xl object-cover shadow-sm ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9a421cf7-e975-430b-88c5-f554775493e1_800w.jpg"/>
</div>
<div className="absolute right-0 sm:right-8 top-8 sm:top-14 rotate-6">
<img alt="Smiling client portrait" className="w-40 sm:w-52 md:w-64 rounded-2xl object-cover shadow-sm ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c0aab170-b3d3-4816-9435-0ac1e1d853a3_800w.jpg"/>
</div>
<div className="absolute -left-4 sm:left-8 bottom-6 sm:bottom-10 -rotate-12">
<img alt="Editorial fashion blur" className="w-44 sm:w-60 md:w-72 rounded-2xl object-cover shadow-sm ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/eab41fb3-55ff-46e1-973d-56fe1a4282a3_800w.jpg"/>
</div>
<div className="absolute right-2 sm:right-10 bottom-4 sm:bottom-8 rotate-6">
<img alt="Minimal architecture scene" className="w-40 sm:w-52 md:w-64 rounded-2xl object-cover shadow-sm ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b59bad79-703a-4c05-8ed2-fafcc49a7b51_800w.jpg"/>
</div>
</div>

<div className="relative max-w-4xl sm:px-6 text-center mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="flex items-center justify-between mb-8">
<p className="text-xs font-medium text-white/60 uppercase tracking-wide" style={{}}>/Testimonials</p>
<span className="text-xs font-medium text-white/60" style={{}}>(100+)</span>
</div>
<h2 className="text-4xl sm:text-6xl md:text-7xl text-white leading-tight font-light tracking-tight" style={{}}>
              Clients say working with Suzy Liu blends thoughtful direction and meticulous light—helping brands grow with confidence.
            </h2>
<a className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium bg-white text-neutral-900 hover:bg-neutral-100 transition" href="#" style={{}}>
              Read all reviews
              <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</section>

<section className="relative overflow-hidden bg-neutral-900 rounded-3xl mt-8">
<div className="relative max-w-7xl sm:px-6 mr-auto ml-auto p-6">
<div className="flex items-center justify-between mb-8">
<p className="text-xs font-medium text-white/60 uppercase tracking-wide" style={{}}>/Services</p>
<span className="text-xs font-medium text-white/60" style={{}}>(03)</span>
</div>
<h2 className="text-4xl sm:text-6xl md:text-7xl text-white leading-tight mb-8 font-light tracking-tight" style={{}}>
              Portrait packages designed for clarity and results.
            </h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<article className="bg-white rounded-3xl p-1 ring-1 ring-neutral-200">
<div className="rounded-2xl bg-white p-6 sm:p-8">
<p className="text-xs text-neutral-500 text-center uppercase tracking-wide" style={{}}>( Ready within 3 days )</p>
<h3 className="mt-2 text-2xl text-neutral-900 text-center font-light tracking-tight" style={{}}>Quick Session</h3>
<p className="mt-2 text-xs sm:text-sm text-neutral-600 text-center uppercase tracking-wide" style={{}}>Perfect for a fast and focused portrait session</p>
<div className="mt-5 overflow-hidden rounded-xl bg-neutral-900 text-white flex divide-x divide-white/10">
<div className="flex-1 py-3 text-center text-sm font-medium uppercase tracking-wide" style={{}}>30 Minutes</div>
<div className="flex-1 py-3 text-center text-sm font-semibold" style={{}}>$ 299</div>
</div>
<ul className="mt-5 text-sm">
<li className="flex items-center gap-3 py-3">
<svg className="lucide lucide-check h-4 w-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-800" style={{}}>+20 edited photos</span>
</li>
<li className="flex items-center gap-3 py-3 border-t border-dotted border-neutral-200">
<svg className="lucide lucide-check h-4 w-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-800" style={{}}>One location</span>
</li>
<li className="flex items-center gap-3 py-3 border-t border-dotted border-neutral-200">
<svg className="lucide lucide-check h-4 w-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-800" style={{}}>Portraits or headshots</span>
</li>
<li className="flex items-center gap-3 py-3 border-t border-dotted border-neutral-200">
<svg className="lucide lucide-minus h-4 w-4 text-neutral-400" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
<span className="text-neutral-400" style={{}}>Outfit changes</span>
</li>
<li className="flex items-center gap-3 py-3 border-t border-dotted border-neutral-200">
<svg className="lucide lucide-minus h-4 w-4 text-neutral-400" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
<span className="text-neutral-400" style={{}}>Styled direction</span>
</li>
<li className="flex items-center gap-3 py-3 border-t border-dotted border-neutral-200">
<svg className="lucide lucide-minus h-4 w-4 text-neutral-400" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
<span className="text-neutral-400" style={{}}>Lighting setups</span>
</li>
</ul>
<button className="mt-6 w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white hover:bg-black transition" style={{}}>
                    Reserve Now
                  </button>
</div>
</article>

<article className="bg-white rounded-3xl p-1 ring-1 ring-neutral-200">
<div className="rounded-2xl bg-white p-6 sm:p-8">
<div className="flex justify-center">
<span className="inline-flex items-center rounded-full bg-neutral-900 text-white px-3 py-1 text-[11px] font-medium uppercase tracking-wide" style={{}}>Most popular</span>
</div>
<p className="mt-3 text-xs text-neutral-500 text-center uppercase tracking-wide" style={{}}>( Ready within 5 days )</p>
<h3 className="mt-2 text-2xl text-neutral-900 text-center font-light tracking-tight" style={{}}>Full Portrait</h3>
<p className="mt-2 text-xs sm:text-sm text-neutral-600 text-center uppercase tracking-wide" style={{}}>Ideal for personal portraits, couples, brands</p>
<div className="mt-5 overflow-hidden rounded-xl bg-neutral-900 text-white flex divide-x divide-white/10">
<div className="flex-1 py-3 text-center text-sm font-medium uppercase tracking-wide" style={{}}>1.5 Hours</div>
<div className="flex-1 py-3 text-center text-sm font-semibold" style={{}}>$ 499</div>
</div>
<ul className="mt-5 text-sm">
<li className="flex items-center gap-3 py-3">
<svg className="lucide lucide-check h-4 w-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-800" style={{}}>+50 edited photos</span>
</li>
<li className="flex items-center gap-3 py-3 border-t border-dotted border-neutral-200">
<svg className="lucide lucide-check h-4 w-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-800" style={{}}>1–2 locations</span>
</li>
<li className="flex items-center gap-3 py-3 border-t border-dotted border-neutral-200">
<svg className="lucide lucide-check h-4 w-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-800" style={{}}>Portraits &amp; details</span>
</li>
<li className="flex items-center gap-3 py-3 border-t border-dotted border-neutral-200">
<svg className="lucide lucide-check h-4 w-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-800" style={{}}>1–2 outfit changes</span>
</li>
<li className="flex items-center gap-3 py-3 border-t border-dotted border-neutral-200">
<svg className="lucide lucide-check h-4 w-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-800" style={{}}>Basic styled direction</span>
</li>
<li className="flex items-center gap-3 py-3 border-t border-dotted border-neutral-200">
<svg className="lucide lucide-minus h-4 w-4 text-neutral-400" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
<span className="text-neutral-400" style={{}}>Lighting setups</span>
</li>
</ul>
<button className="mt-6 w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white hover:bg-black transition" style={{}}>
                    Reserve Now
                  </button>
</div>
</article>

<article className="bg-white rounded-3xl p-1 ring-1 ring-neutral-200">
<div className="rounded-2xl bg-white p-6 sm:p-8">
<p className="text-xs text-neutral-500 text-center uppercase tracking-wide" style={{}}>( Ready within 1 week )</p>
<h3 className="mt-2 text-2xl text-neutral-900 text-center font-light tracking-tight" style={{}}>Creative Day</h3>
<p className="mt-2 text-xs sm:text-sm text-neutral-600 text-center uppercase tracking-wide" style={{}}>A half‑day session for full creative freedom</p>
<div className="mt-5 overflow-hidden rounded-xl bg-neutral-900 text-white flex divide-x divide-white/10">
<div className="flex-1 py-3 text-center text-sm font-medium uppercase tracking-wide" style={{}}>3–4 Hours</div>
<div className="flex-1 py-3 text-center text-sm font-semibold" style={{}}>$ 999</div>
</div>
<ul className="mt-5 text-sm">
<li className="flex items-center gap-3 py-3">
<svg className="lucide lucide-check h-4 w-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-800" style={{}}>+120 edited photos</span>
</li>
<li className="flex items-center gap-3 py-3 border-t border-dotted border-neutral-200">
<svg className="lucide lucide-check h-4 w-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-800" style={{}}>Multiple locations</span>
</li>
<li className="flex items-center gap-3 py-3 border-t border-dotted border-neutral-200">
<svg className="lucide lucide-check h-4 w-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-800" style={{}}>Portraits, details &amp; candid shots</span>
</li>
<li className="flex items-center gap-3 py-3 border-t border-dotted border-neutral-200">
<svg className="lucide lucide-check h-4 w-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-800" style={{}}>Unlimited outfit changes</span>
</li>
<li className="flex items-center gap-3 py-3 border-t border-dotted border-neutral-200">
<svg className="lucide lucide-check h-4 w-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-800" style={{}}>Advanced styled direction</span>
</li>
<li className="flex items-center gap-3 py-3 border-t border-dotted border-neutral-200">
<svg className="lucide lucide-check h-4 w-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-800" style={{}}>Advanced lighting setups</span>
</li>
</ul>
<button className="mt-6 w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white hover:bg-black transition" style={{}}>
                    Reserve Now
                  </button>
</div>
</article>
</div>
<p className="mt-6 text-xs text-white/60" style={{}}>All sessions include a private online gallery and high‑resolution downloads.</p>
</div>
</section>

<footer className="mt-8">
<div className="w-full rounded-3xl bg-neutral-900 text-white p-6 sm:p-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="flex flex-col justify-between">
<h3 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight" style={{}}>SUZY LIU</h3>
<div className="mt-6 space-y-1">
<p className="text-sm text-white/70" style={{}}>(510) 895–6500</p>
<p className="text-2xl sm:text-3xl font-light tracking-tight" style={{}}>hello@suzystudio.com</p>
</div>
</div>

<div>
<h4 className="text-3xl font-light tracking-tight" style={{}}>Stay connected</h4>
<p className="mt-2 text-sm text-white/70" style={{}}>Join the newsletter to receive updates on new work and journal posts.</p>
<form className="mt-5">
<div className="flex items-center gap-3 border-b border-white/20 pb-2">
<input className="flex-1 bg-transparent placeholder-white/60 text-white text-sm focus:outline-none" placeholder="E‑mail" type="email"/>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white text-neutral-900 hover:bg-neutral-100 transition" type="submit">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
</div>

<div className="grid grid-cols-2 gap-8">
<ul className="space-y-2">
<li><a className="text-sm text-white hover:text-white/80 font-medium transition" href="#" style={{}}>About</a></li>
<li><a className="text-sm text-white hover:text-white/80 font-medium transition" href="#" style={{}}>Projects</a></li>
<li><a className="text-sm text-white hover:text-white/80 font-medium transition" href="#" style={{}}>Blog</a></li>
<li><a className="text-sm text-white hover:text-white/80 font-medium transition" href="#" style={{}}>Contact</a></li>
<li><a className="text-sm text-white hover:text-white/80 font-medium transition" href="#" style={{}}>Privacy Policy</a></li>
<li><a className="text-sm text-white hover:text-white/80 font-medium transition" href="#" style={{}}>Terms of Service</a></li>
</ul>
<ul className="space-y-2">
<li><a className="text-sm text-white hover:text-white/80 font-medium transition" href="#" style={{}}>Twitter</a></li>
<li><a className="text-sm text-white hover:text-white/80 font-medium transition" href="#" style={{}}>Behance</a></li>
<li><a className="text-sm text-white hover:text-white/80 font-medium transition" href="#" style={{}}>Instagram</a></li>
<li><a className="text-sm text-white hover:text-white/80 font-medium transition" href="#" style={{}}>Dribbble</a></li>
<li><a className="text-sm text-white hover:text-white/80 font-medium transition" href="#" style={{}}>en</a></li>
</ul>
</div>
</div>

<div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
<p className="text-xs text-white/70" style={{}}>© 2025 Suzy Liu. All rights reserved.</p>
<p className="text-sm text-white/70 sm:text-center" style={{}}>Minimal, calm, and intentional photography crafted in black &amp; white.</p>
<div className="sm:ml-auto flex items-center gap-3 justify-start sm:justify-end">
<a className="inline-flex items-center gap-1 text-xs font-medium text-white hover:text-white/80 transition" href="#" style={{}}>
<svg className="lucide lucide-shield h-4 w-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                  Privacy
                </a>
<a className="inline-flex items-center gap-1 text-xs font-medium text-white hover:text-white/80 transition" href="#" style={{}}>
<svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                  Terms
                </a>
</div>
</div>
</div>
</footer>
</main>
</div>


    </>
  );
}
