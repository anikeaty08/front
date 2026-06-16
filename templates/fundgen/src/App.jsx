import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }

      // Mobile menu toggle
      const mobileToggle = document.getElementById('mobileToggle');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
          const open = mobileMenu.classList.toggle('hidden') === false;
          mobileToggle.setAttribute('aria-expanded', String(open));
          // swap icon
          mobileToggle.innerHTML = open
            ? '<svg data-lucide="x" width="24" height="24" stroke-width="1.5" class="h-5 w-5 text-slate-700"></svg>'
            : '<svg data-lucide="menu" width="24" height="24" stroke-width="1.5" class="h-5 w-5 text-slate-700"></svg>';
          if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
          }
        });
      }

      // Journey steps auto-rotate
      (function () {
        const container = document.getElementById('steps');
        const imageEl = document.getElementById('stageImage');
        if (!container || !imageEl) return;

        const steps = Array.from(container.querySelectorAll('[role="tab"]'));
        const intervalTime = 8000;
        let current = 0;
        let timer;

        function setActive(index) {
          steps.forEach((btn, i) => {
            const selected = i === index;
            btn.setAttribute('aria-selected', String(selected));
            const bar = btn.querySelector('[data-progress]');
            if (bar) {
              // reset then animate
              bar.style.width = '0%';
              bar.style.transition = 'none';
              if (selected) {
                requestAnimationFrame(() => {
                  bar.style.transition = 'width ' + intervalTime + 'ms ease';
                  bar.style.width = '100%';
                });
              }
            }
          });
        }

        function updateImage(src, alt) {
          if (!src) return;
          // simple fade via opacity transition
          imageEl.style.transition = 'opacity 250ms ease';
          imageEl.style.opacity = '0';
          const pre = new Image();
          pre.onload = () => {
            imageEl.src = src;
            if (alt) imageEl.alt = alt;
            requestAnimationFrame(() => (imageEl.style.opacity = '1'));
          };
          pre.src = src;
        }

        function labelFor(btn) {
          const title = btn.querySelector('p');
          return title ? `${title.textContent.trim()} stage image` : 'Stage image';
        }

        function go(index) {
          current = index % steps.length;
          const btn = steps[current];
          const src = btn.getAttribute('data-image');
          setActive(current);
          updateImage(src, labelFor(btn));
        }

        function start() {
          clearInterval(timer);
          timer = setInterval(() => go((current + 1) % steps.length), intervalTime);
        }

        steps.forEach((btn, idx) => {
          btn.addEventListener('click', () => {
            go(idx);
            start();
          });
        });

        // init
        go(0);
        start();
      })();

      // Dynamic headline word
      (function () {
        const span = document.getElementById('dynamicWord');
        if (!span) return;
        const words = ['engagement', 'momentum', 'loyalty'];
        let i = 0;
        setInterval(() => {
          span.style.opacity = '0';
          setTimeout(() => {
            i = (i + 1) % words.length;
            span.textContent = words[i];
            span.style.opacity = '1';
          }, 250);
        }, 3000);
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="sm:h-20 flex h-16 items-center justify-between">

<a aria-label="Finance" className="inline-flex items-center gap-2 group" href="#">
<span className="group-hover:text-black transition-colors sm:text-3xl text-lg font-black text-slate-900/90 tracking-tight font-geist" style={{fontFamily: 'Manrope, Inter, ui-sans-serif'}}>Fundgen</span>
</a>


<div className="flex gap-3 border-0 ring-0 items-center">
<a className="hidden sm:inline-flex items-center hover:bg-black transition-colors text-sm text-white font-geist bg-slate-900 ring-black/10 ring-1 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm" href="#">Get Started</a>
<button aria-controls="mobileMenu" aria-expanded="true" className="md:hidden inline-flex hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 bg-white w-9 h-9 border-slate-200 border rounded-md ring-0 items-center justify-center" id="mobileToggle"><svg className="lucide lucide-x h-5 w-5 text-slate-700" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
</div>

<div className="md:hidden pb-4" id="mobileMenu" style={{visibility: 'hidden', display: 'none'}}>
<div className="border-t border-slate-200"></div>
<div className="py-2 space-y-1 divide-y divide-slate-100">
<a className="block px-2 py-3 text-sm text-slate-700 hover:text-slate-900 font-geist" href="#" style={{}}>Overview</a>
<a className="block px-2 py-3 text-sm text-slate-700 hover:text-slate-900 font-geist" href="#" style={{}}>Product</a>
<a className="block px-2 py-3 text-sm text-slate-700 hover:text-slate-900 font-geist" href="#" style={{}}>Pricing</a>
<a className="block px-2 py-3 text-sm text-slate-700 hover:text-slate-900 font-geist" href="#" style={{}}>Docs</a>
<div className="pt-3">
<a className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 hover:bg-black text-white text-sm px-4 py-2 shadow-sm ring-1 ring-black/10 transition-colors font-geist" href="#" style={{}}>Get Started</a>
</div>
</div>
</div>
</div>
</header>
<main className="">

<section className="overflow-hidden relative">
<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0">
<div className="-left-1/3 bg-[#2d3eec]/10 w-[700px] h-[700px] rounded-full absolute top-10 blur-3xl"></div>
<div className="-right-1/3 bg-[#2563eb]/10 w-[900px] h-[900px] rounded-full absolute bottom-0 blur-3xl">
</div>
</div>
<div className="sm:px-6 lg:px-8 sm:pt-24 lg:pt-32 max-w-7xl mr-auto ml-auto pt-16 pr-4 pl-4">
<div className="grid grid-cols-1 gap-10 items-center">
<div className="text-center">
<h1 className="sm:text-5xl md:text-7xl leading-[0.95] text-4xl text-slate-900 tracking-tight font-manrope max-w-4xl mt-auto mr-auto mb-auto ml-auto" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '600'}}>Activate Every Ambassador. Amplify Every
  Campaign.</h1>
<p className="sm:text-2xl text-base text-slate-600 tracking-tight max-w-xl mt-6 mr-auto ml-auto font-manrope" style={{}}>
  All-in-one platform to manage, train, and track ambassadors effortlessly.
</p>
<div className="flex mt-8 gap-x-3 gap-y-3 items-center justify-center">
<button className="button" type="button">
<div className="points_wrapper pr-2 pl-2">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner font-geist pt-2 pr-4 pb-2 pl-4">Partner with FundGen <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg></span>
<style className="">
    .button {
      cursor: pointer;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: all 0.25s ease;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(34, 211, 238, 0.8) 0%,
          rgba(34, 211, 238, 0) 100%),
        linear-gradient(0deg, #2563eb, #2563eb);
      border-radius: 0.75rem;
      border: none;
      outline: none;
      padding: 12px 18px;
      min-height: 48px;
      min-width: 102px;
    }
  
    .button::before,
    .button::after {
      content: "";
      position: absolute;
      transition: all 0.5s ease-in-out;
      z-index: 0;
    }
  
    .button::before {
      inset: 1px;
      background: linear-gradient(177.95deg,
          rgba(255, 255, 255, 0.19) 0%,
          rgba(255, 255, 255, 0) 100%);
      border-radius: calc(0.75rem - 1px);
    }
  
    .button::after {
      inset: 2px;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(34, 211, 238, 0.8) 0%,
          rgba(34, 211, 238, 0) 100%),
        linear-gradient(0deg, #2563eb, #2563eb);
      border-radius: calc(0.75rem - 2px);
    }
  
    .button:active {
      transform: scale(0.95);
    }
  
    .points_wrapper {
      overflow: hidden;
      width: 100%;
      height: 100%;
      pointer-events: none;
      position: absolute;
      z-index: 1;
    }
  
    .points_wrapper .point {
      bottom: -10px;
      position: absolute;
      animation: floating-points infinite ease-in-out;
      pointer-events: none;
      width: 2px;
      height: 2px;
      background-color: #fff;
      border-radius: 9999px;
    }
  
    @keyframes floating-points {
      0% {
        transform: translateY(0);
      }
  
      85% {
        opacity: 0;
      }
  
      100% {
        transform: translateY(-55px);
        opacity: 0;
      }
    }
  
    .points_wrapper .point:nth-child(1) {
      left: 10%;
      opacity: 1;
      animation-duration: 2.35s;
      animation-delay: 0.2s;
    }
  
    .points_wrapper .point:nth-child(2) {
      left: 30%;
      opacity: 0.7;
      animation-duration: 2.5s;
      animation-delay: 0.5s;
    }
  
    .points_wrapper .point:nth-child(3) {
      left: 25%;
      opacity: 0.8;
      animation-duration: 2.2s;
      animation-delay: 0.1s;
    }
  
    .points_wrapper .point:nth-child(4) {
      left: 44%;
      opacity: 0.6;
      animation-duration: 2.05s;
    }
  
    .points_wrapper .point:nth-child(5) {
      left: 50%;
      opacity: 1;
      animation-duration: 1.9s;
    }
  
    .points_wrapper .point:nth-child(6) {
      left: 75%;
      opacity: 0.5;
      animation-duration: 1.5s;
      animation-delay: 1.5s;
    }
  
    .points_wrapper .point:nth-child(7) {
      left: 88%;
      opacity: 0.9;
      animation-duration: 2.2s;
      animation-delay: 0.2s;
    }
  
    .points_wrapper .point:nth-child(8) {
      left: 58%;
      opacity: 0.8;
      animation-duration: 2.25s;
      animation-delay: 0.2s;
    }
  
    .points_wrapper .point:nth-child(9) {
      left: 98%;
      opacity: 0.6;
      animation-duration: 2.6s;
      animation-delay: 0.1s;
    }
  
    .points_wrapper .point:nth-child(10) {
      left: 65%;
      opacity: 1;
      animation-duration: 2.5s;
      animation-delay: 0.2s;
    }
  
    .inner {
      z-index: 2;
      gap: 6px;
      position: relative;
      width: 100%;
      color: white;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      transition: color 0.2s ease-in-out;
    }
  
    .inner svg.icon {
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
      stroke: white;
      fill: none;
    }
  
    .button:hover svg.icon {
      transform: translateX(2px);
    }
  
    .button:hover svg.icon path {
      animation: dash 0.8s linear forwards;
    }
  
    @keyframes dash {
      0% {
        stroke-dasharray: 0, 20;
        stroke-dashoffset: 0;
      }
  
      50% {
        stroke-dasharray: 10, 10;
        stroke-dashoffset: -5;
      }
  
      100% {
        stroke-dasharray: 20, 0;
        stroke-dashoffset: -10;
      }
    }
  </style>
</button>
</div>
</div>
<div className="text-center relative gap-x-3 gap-y-3 items-center justify-center">
<div className="overflow-hidden text-center max-w-4xl border-0 ring-0 rounded-none mr-auto ml-auto gap-x-3 gap-y-3 items-center justify-center">
<img alt="Platform preview" className="text-center w-80 h-auto object-cover mt-auto mr-auto mb-auto ml-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f55c3dc0-38a3-411e-a7ba-26451cca2e12_800w.png"/>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col h-[60vh] my-8 relative justify-center">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="text-center">
<h2 className="sm:text-5xl md:text-6xl text-3xl font-light text-slate-900 tracking-tight font-geist" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '600', lineHeight: '1.6'}}>
<span className="font-manrope" style="
  background: radial-gradient(65.28% 65.28% at 100% 50%, rgba(34, 211, 238, 0.8) 0%, rgba(34, 211, 238, 0) 100%), 
              linear-gradient(to left, rgb(37, 99, 235), rgb(37, 99, 235));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
">
  Campaigns start strong.
</span>
<span className="font-manrope" style={{background: 'linear-gradient(to right, rgb(128, 128, 128), rgba(128, 128, 128, 0)) text', WebkitTextFillColor: 'transparent', display: 'inline-block'}}>
          Then energy fades.
        </span>
</h2><p className="sm:text-xl text-sm text-slate-700 font-geist mt-4 mr-auto ml-auto">
        Ambassadors lose focus. Managers chase updates. Platforms feel the friction — lower results, more chaos, less
        loyalty.
      </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 mt-20 mr-0 ml-0 items-start">

<div className="flex flex-col pb-6 items-center justify-between">
<div className="">
<p className="sm:text-2xl text-lg font-semibold text-slate-950 font-manrope text-center">
      Overloaded Ambassadors
    </p>
<p className="sm:text-base text-sm text-slate-700 font-geist text-center max-w-xs mt-2">
      Ambassadors are overwhelmed with tasks and lose direction quickly
    </p>
</div>
</div>

<div className="flex flex-col mb-6 items-center justify-between">
<div className="">
<p className="sm:text-2xl text-lg font-semibold text-slate-950 font-manrope text-center">
        Firefighting Managers
      </p>
<p className="sm:text-base text-sm text-slate-700 font-geist text-center max-w-xs mt-2">
        Campaign managers waste time putting out fires instead of leading
      </p>
</div>
</div>

<div className="flex flex-col pb-6 items-center justify-between">
<div className="">
<p className="sm:text-2xl text-lg font-semibold text-sky-950 font-manrope text-center">
        Fragmented Communication
      </p>
<p className="sm:text-base text-sm text-slate-700 font-geist text-center max-w-xs mt-2">
        Communication is fragmented, delayed, and not personalized
      </p>
</div>
</div>

<div className="flex flex-col pb-6 items-center justify-between">
<div className="">
<p className="sm:text-2xl text-lg font-semibold text-slate-950 font-manrope text-center">
        Lost Time
      </p>
<p className="sm:text-base text-sm text-slate-700 font-geist text-center max-w-xs mt-2">
        Precious hours are lost on manual coordination and guesswork
      </p>
</div>
</div>
</div>
</div>
</section><section className="relative">
<div className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-6 pr-4 pb-6 pl-4">
<div className="text-center">
<h2 className="sm:text-5xl md:text-6xl text-3xl text-slate-900 tracking-tight font-manrope" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '600'}}>One engine. The whole journey.</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[40%_60%] lg:gap-16 mt-12 items-center">

<div className="order-1 lg:order-2">
<div className="overflow-hidden bg-white ring-slate-200 ring-1 rounded-2xl mb-6">
<img alt="Before stage image" className="w-full h-auto object-cover" id="stageImage" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/08157077-5ad0-4967-b099-949b54ebd558_1600w.png" style={{opacity: '0', transition: 'opacity 250ms'}}/>
</div>
</div>

<div className="order-2 lg:order-1">
<div aria-label="Journey stages" className="space-y-2" id="steps" role="tablist">

<button aria-selected="true" className="group text-left w-full pt-0 pr-0 pb-0 pl-0" data-image="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/08157077-5ad0-4967-b099-949b54ebd558_1600w.png" role="tab">
<div className="hover:bg-slate-50 transition-colors bg-white border-slate-200 border rounded-xl pt-0 pr-0 pb-0 pl-0">
<div className="flex mx-5 my-5 items-start justify-between">
<div className="">
<p className="text-2xl text-slate-900 tracking-tight font-manrope sm:text-2xl" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '600'}}>Before</p>
<p className="sm:text-base text-sm text-slate-700 mt-2 font-geist" style={{}}>Filter and organize your contacts before the
  campaign even begins—be fully prepared.</p>
</div>
</div>
<div className="overflow-hidden bg-slate-100 w-full h-0.3 rounded-full mt-4">
<div className="h-full w-0 bg-slate-900 rounded-full" data-progress="" style={{width: '0%', transition: 'none'}}></div>
</div>
</div>
</button>

<button aria-selected="false" className="group text-left w-full pt-0 pr-0 pb-0 pl-0 gap-x-4 gap-y-4" data-image="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e14f3226-d661-41f5-8780-96c03c63e5af_3840w.png" role="tab">
<div className="over:bg-slate-50 transition-colors bg-white border-slate-200 border rounded-xl pt-0 pr-0 pb-0 pl-0 gap-x-4 gap-y-4">
<div className="overflow-hidden flex gap-4 pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 items-start justify-between">
<div className="">
<p className="text-2xl text-slate-900 tracking-tight font-manrope sm:text-2xl" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '600'}}>During</p>
<p className="mt-2 text-sm sm:text-base text-slate-700 font-geist" style={{}}>
                Manage outreach with calls, WhatsApp, emails, templates, and gamified motivation.
              </p>
</div>
</div>
<div className="overflow-hidden h-0.5 bg-slate-100 w-full h-0.3 rounded-full mt-4">
<div className="h-full w-0 bg-slate-900 rounded-full" data-progress="" style={{width: '0%', transition: 'none'}}></div>
</div>
</div>
</button>

<button aria-selected="false" className="group w-full text-left p-0" data-image="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0a80f138-b498-462b-9307-ffa025628596_3840w.png" role="tab">
<div className="hover:bg-slate-50 transition-colors bg-white border-slate-200 border rounded-xl px-0 py-0">
<div className="flex pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 items-start justify-between">
<div className="">
<p className="text-2xl text-slate-900 tracking-tight font-manrope sm:text-2xl" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '600'}}>After</p>
<p className="mt-2 text-sm sm:text-base text-slate-700 font-geist" style={{}}>
                Send personalized thank‑yous and maintain meaningful connections long after.
              </p>
</div>
</div>
<div className="overflow-hidden bg-slate-100 w-full h-0.3 rounded-full mt-4">
<div className="h-full w-0 bg-slate-900 rounded-full" data-progress="" style={{width: '0%', transition: 'none'}}></div>
</div>
</div>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="sm:px-6 lg:px-8 sm:pb-24 max-w-7xl mr-auto ml-auto pr-4 pb-16 pl-4">
<div className="flex flex-col gap-8 gap-x-8 gap-y-8">

<article className="group overflow-hidden flex flex-col md:flex-row bg-white border border-slate-200 rounded-2xl ring-1 ring-black/5">
<div className="md:w-1/2 relative">
<img alt="Smart Leads Board" className="aspect-video md:aspect-auto w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0a0b06cc-717f-416f-bcc7-e7ebb2ff69a9_1600w.png"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
</div>
<div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
<h3 className="sm:text-3xl text-2xl tracking-tight font-manrope" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '600'}}>Smart Leads Board</h3>
<p className="mt-3 text-sm sm:text-base text-slate-600 font-geist" style={{}}>
                  See every contact organized by status—open, in process, donated, or not relevant—so ambassadors can track progress at a glance.
                </p>
</div>
</article>

<article className="group overflow-hidden flex flex-col md:flex-row bg-white border border-slate-200 rounded-2xl ring-1 ring-black/5">
<div className="md:w-1/2 sm:p-8 flex flex-col pt-6 pr-6 pb-6 pl-6 justify-center">
<h3 className="text-2xl sm:text-3xl tracking-tight font-manrope" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '600'}}>Advanced Contact List</h3>
<p className="sm:text-base text-sm text-slate-600 mt-3 font-geist" style={{}}>
                  Reach out via call, WhatsApp, or email with ready‑made templates and one‑click actions that make communication effortless.
                </p>
</div><div className="md:w-1/2 relative">
<img alt="Advanced Contact List" className="aspect-video md:aspect-auto w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/eca5f00e-1353-4697-be41-6183999a4800_1600w.png"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
</div>
</article>

<article className="group overflow-hidden flex flex-col md:flex-row bg-white border-slate-200 border ring-black/5 ring-1 rounded-2xl">
<div className="md:w-1/2 relative">
<img alt="Campaign Dashboard" className="aspect-video md:aspect-auto w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cd16887d-ebe4-4bc3-bb54-eff168153cc8_1600w.png"/>
<div className="pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="md:w-1/2 sm:p-8 flex flex-col pt-6 pr-6 pb-6 pl-6 justify-center">
<h3 className="sm:text-3xl text-2xl tracking-tight font-manrope" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '600'}}>Campaign Dashboard</h3>
<p className="mt-3 text-sm sm:text-base text-slate-600 font-geist" style={{}}>
    Track personal goals, contributions, and achievements in real time with a clear, motivating visual overview.
  </p>
</div>
</article>
</div>
</div>
</section>

<section className="border-slate-200 border-t relative">
<div className="sm:px-6 lg:px-8 sm:py-16 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<h2 className="sm:text-5xl md:text-6xl text-3xl text-center tracking-tight font-manrope" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '600'}}>
      More <span className="transition-opacity text-slate-500 tracking-tight font-manrope" id="dynamicWord" style={{}}>momentum</span>
</h2>
</div>
</section>

<section className="bg-slate-50 relative">
<div className="sm:px-6 lg:px-8 max-w-[1280px] mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">

<article className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
<img alt="Link Tracker" className="w-full h-70 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d6915ac4-6220-4d10-b580-13c5bf6e0cfa_1600w.png"/>
<div className="p-6">
<h3 className="text-2xl tracking-tight font-manrope" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '600'}}>Link Tracker</h3>
<p className="mt-3 text-sm sm:text-base text-slate-600 font-geist" style={{}}>Attribute donations precisely and see
          which channels contribute most to results.</p>
</div>
</article>

<article className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
<img alt="XP Journey" className="w-full h-70 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e983d18a-6136-46c8-b918-cc8c4e504241_1600w.png"/>
<div className="p-6">
<h3 className="text-2xl tracking-tight font-manrope" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '600'}}>XP Journey</h3>
<p className="mt-3 text-sm sm:text-base text-slate-600 font-geist" style={{}}>Level up engagement with gamified
          milestones that keep ambassadors motivated.</p>
</div>
</article>

<article className="overflow-hidden bg-white border-slate-200 border rounded-2xl">
<img alt="Donor Insights" className="w-full h-70 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7faf9c83-fd46-4632-ae3f-8c643308e739_1600w.png"/>
<div className="pt-6 pr-6 pb-6 pl-6">
<h3 className="text-2xl tracking-tight font-manrope" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '600'}}>Donor Insights</h3>
<p className="mt-3 text-sm sm:text-base text-slate-600 font-geist" style={{}}>Understand behavior with donor profiles,
          history, and smart segment suggestions.</p>
</div>
</article>
<article className="overflow-hidden bg-white border-slate-200 border rounded-2xl">
<img alt="Donor Insights" className="w-full h-70 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e19911fe-4930-4fc2-8b8c-abe73ebbfe47_800w.png"/>
<div className="p-6">
<h3 className="text-2xl tracking-tight font-manrope" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '600'}}>Whatsapp Templates</h3>
<p className="mt-3 text-sm sm:text-base text-slate-600 font-geist" style={{}}>Understand behavior with donor profiles,
          history, and smart segment suggestions.</p>
</div>
</article><article className="overflow-hidden bg-white border-slate-200 border rounded-2xl">
<img alt="Leaderboard" className="w-full h-70 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/71165920-11ca-4c60-97ab-3fe4594b1d9f_1600w.png"/>
<div className="p-6">
<h3 className="text-2xl tracking-tight font-manrope" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '600'}}>Leaderboard</h3>
<p className="sm:text-base text-sm text-slate-600 font-geist mt-3">Understand behavior with donor profiles,
  history, and smart segment suggestions.</p>
</div>
</article>
</div>
</div>
</section>

<section className="bg-center flex bg-white h-[70vh] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/33e39c1c-aac1-4ca0-a530-73a4bfc5cdec_3840w.png)] bg-cover border-slate-200 border-t relative items-center justify-center">
<div className="sm:px-6 lg:px-8 text-center max-w-6xl pr-6 pl-6">
<div className="rounded-none" style={{border: 'none', boxShadow: 'none'}}>
<h1 className="leading-[0.95] sm:text-5xl md:text-6xl text-4xl font-semibold text-slate-900 tracking-tight font-manrope text-center" style={{fontFamily: 'Manrope, Inter, ui-sans-serif'}}>
        Join the Movement
      </h1>
<div className="flex mt-8 gap-x-3 gap-y-3 items-center justify-center">
<button className="button" type="button">
<div className="points_wrapper pr-2 pl-2">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner font-geist pt-2 pr-4 pb-2 pl-4">
            Partner with FundGen
            <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<style>
            .button {
              cursor: pointer;
              position: relative;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              transition: all 0.25s ease;
              background: radial-gradient(65.28% 65.28% at 50% 100%,
                  rgba(34, 211, 238, 0.8) 0%,
                  rgba(34, 211,
</style></button></div></div></div></section>
</main>

<footer className="bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<span className="text-xs text-slate-500 font-geist" style={{}}>© 2025 Finance. All rights reserved.</span>
<div className="flex items-center gap-4 text-slate-500">
<a className="inline-flex items-center gap-2 text-xs hover:text-slate-700 transition-colors font-geist" href="#" style={{}}>
<svg className="lucide lucide-shield" data-lucide="shield" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            Privacy
          </a>
<a className="inline-flex items-center gap-2 text-xs hover:text-slate-700 transition-colors font-geist" href="#" style={{}}>
<svg className="lucide lucide-file-text" data-lucide="file-text" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
            Terms
          </a>
</div>
</div>
</footer>



    </>
  );
}
