import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  /* 
    Sequence animation on scroll when visible. Usage:
    1) Add to Inline CSS: animation: fadeSlideIn 1.0s ease-out 0.1s both;
    2) Add to Tailwind Classes: animate-on-scroll
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



    (function () {
      function hideSplineBackground() {
        document.querySelectorAll('.aura-background-component').forEach(function (el) {
          el.style.display = 'none';
          el.style.visibility = 'hidden';
          el.setAttribute('aria-hidden', 'true');
        });
      }
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hideSplineBackground);
      } else {
        hideSplineBackground();
      }
      try {
        new MutationObserver(hideSplineBackground).observe(document.body || document.documentElement, { childList: true, subtree: true });
      } catch (e) {}
    })();
  


    (function () {
      const scroller = document.getElementById('aiCards');
      const prev = document.getElementById('aiPrev');
      const next = document.getElementById('aiNext');

      if (!scroller || !prev || !next) return;

      const getAmount = () => Math.min(600, Math.max(320, Math.floor(scroller.clientWidth * 0.8)));

      function updateArrows() {
        const maxScroll = scroller.scrollWidth - scroller.clientWidth - 2;
        const atStart = scroller.scrollLeft <= 2;
        const atEnd = scroller.scrollLeft >= maxScroll;

        prev.style.opacity = atStart ? '0.5' : '1';
        prev.style.cursor = atStart ? 'not-allowed' : 'pointer';
        
        next.style.opacity = atEnd ? '0.5' : '1';
        next.style.cursor = atEnd ? 'not-allowed' : 'pointer';
      }

      prev.addEventListener('click', () => {
        scroller.scrollBy({ left: -getAmount(), behavior: 'smooth' });
      });

      next.addEventListener('click', () => {
        scroller.scrollBy({ left: getAmount(), behavior: 'smooth' });
      });

      scroller.addEventListener('scroll', updateArrows);
      window.addEventListener('resize', updateArrows);
      updateArrows();
    })();

    if (window.lucide && typeof lucide.createIcons === 'function') {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }
  


    if (window.lucide && typeof lucide.createIcons === 'function') {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<style className="">
  /* 
    Sequence animation intro. Usage:
    1) Add to Inline CSS: animation: fadeSlideIn 1s ease-out 0.1s both;
  */
  @keyframes fadeSlideIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
      filter: blur(8px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0px);
    }
  }
</style>



<header className="relative z-20 border-b border-gray-100">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex sm:py-6 pt-4 pb-4 items-center justify-between">

<div className="flex gap-3 items-center">
<a className="inline-flex items-center justify-center bg-center w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b51429e8-ca5f-4d46-8a39-94a5db4ea6d0_320w.png)] bg-cover rounded invert" href="/#"></a><span className="sr-only font-geist">Finance</span>
</div>

<nav className="hidden md:flex gap-6 lg:gap-8 text-sm text-gray-600 items-center">
<a className="hover:text-gray-900 transition-colors font-geist" href="#">Overview</a>
<a className="hover:text-gray-900 transition-colors font-geist" href="#">Product</a>
<a className="hover:text-gray-900 transition-colors font-geist" href="#">Pricing</a>
<a className="hover:text-gray-900 transition-colors font-geist" href="#">Docs</a>
</nav>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="button sm:mt-8 mt-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#" style={{display: 'inline-block', marginTop: '0', padding: '8px 12px', minHeight: '36px', minWidth: '0', borderRadius: '0.5rem'}}>
<div className="points_wrapper">
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
<span className="inner" style={{fontSize: '14px'}}>Book a Free Discovery Call</span>
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
          rgba(23, 23, 23, 0.6) 0%,
          rgba(23, 23, 23, 0) 100%),
        linear-gradient(0deg, #171717, #262626);
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
          rgba(255, 255, 255, 0.08) 0%,
          rgba(255, 255, 255, 0) 100%);
      border-radius: calc(0.75rem - 1px);
    }
  
    .button::after {
      inset: 2px;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(23, 23, 23, 0.6) 0%,
          rgba(23, 23, 23, 0) 100%),
        linear-gradient(0deg, #171717, #262626);
      border-radius: calc(0.75rem - 2px);
    }
  
    .buttonactive {
      transform: scale(0.95);
    }
  
    .points_wrapper {
      overflow: hidden;
      width: %;
      height: 100%;
      pointer-events: none;
      position: absolute;
      z-index: 1;
    }
  
 .points_wrapper .point {
      bottom: -10px;
      position: absolute;
      animation: floating-points infinite ease-in-out      pointer-events: none;
      width: 2px;
      height: 2px;
      background-color: #e5eeb;
      border-radius: 9999px;
    }
  
    @keyframes floating-points {
      0% {
       : translateY(0);
      }
  
      85% {
        opacity: 0;
      }
  
      100% {
        transform: translateY(-55px);
       : 0;
      }
    }
  
    .points_wrapper .point:nth-child(1 {
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
      color: #f4f4f5;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      transition: color 0.2s ease-in-out;
    }
  </style>
</a>

<button aria-controls="mobileMenu" aria-expanded="false" className="md:hidden inline-flex items-center rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900/10" id="mobileToggle">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" id="iconMenu" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="lucide lucide-x h-5 w-5 hidden" data-lucide="x" fill="none" height="24" id="iconClose" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="sr-only font-geist">Toggle navigation</span>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="border-t border-gray-100"></div>
<div className="py-3 space-y-1 divide-y divide-gray-100 border-b border-gray-100">
<a className="block px-2 py-3 text-sm text-gray-700 hover:text-gray-900 font-geist" href="#">Overview</a>
<a className="block px-2 py-3 text-sm text-gray-700 hover:text-gray-900 font-geist" href="#">Product</a>
<a className="block px-2 py-3 text-sm text-gray-700 hover:text-gray-900 font-geist" href="#">Pricing</a>
<a className="block px-2 py-3 text-sm text-gray-700 hover:text-gray-900 font-geist" href="#">Docs</a>
<div className="pt-3">
<a className="inline-flex w-full items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-gray-900/20 hover:bg-black transition-colors font-geist" href="#">Get Started</a>
</div>
</div>
</div>
</div>
</header>

<main className="relative">

<div className="sm:px-6 lg:px-8 sm:pt-24 lg:pt-32 xl:pt-40 sm:pb-24 lg:pb-32 xl:pb-40 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-1 sm:gap-12 lg:gap-16 xl:gap-20 text-center gap-x-8 gap-y-8 items-center justify-items-center">

<section className="order-2 lg:order-1 text-center max-w-2xl mr-auto ml-auto relative">
<div className="inline-flex gap-3 mt-8 gap-x-3 gap-y-3 items-center">
<div className="text-xs">
<div className="flex text-amber-500 gap-x-0.5 gap-y-0.5 items-center justify-center">
<svg className="lucide lucide-star fill-amber-500 stroke-amber-500 w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px', color: 'rgb(245, 158, 11)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3.5 w-3.5 fill-amber-500 stroke-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3.5 w-3.5 fill-amber-500 stroke-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-amber-500 stroke-amber-500 w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px', color: 'rgb(245, 158, 11)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-amber-500 stroke-amber-500 w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px', color: 'rgb(245, 158, 11)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div><p className="font-medium text-gray-900 tracking-tight font-geist pt-1 pb-1" style={{}}>Trusted by top performing agencies globally</p>
</div>
</div><h1 className="sm:mt-6 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[0.95] text-4xl tracking-tighter font-geist mt-6" style={{animation: '1s ease-out 0.2s 1 normal both running fadeSlideIn'}}>Book 2x more appointments for your Agency in 30 days</h1>
<p className="sm:mt-6 sm:text-lg lg:text-base xl:text-lg lg:max-w-none text-base text-gray-600 font-geist max-w-xl mt-6" style={{animation: '1s ease-out 0.2s 1 normal both running fadeSlideIn'}}>AI-enabled lead generation that turns your pipeline from chaos into a steady stream of qualified opportunities</p>
<button className="button sm:mt-8 mt-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{display: 'inline-block'}} type="button">
<div className="points_wrapper">
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
<span className="inner" style={{}}>Book a Free Discovery Call</span>
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
          rgba(23, 23, 23, 0.6) 0%,
          rgba(23, 23, 23, 0) 100%),
        linear-gradient(0deg, #171717, #262626);
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
          rgba(255, 255, 255, 0.08) 0%,
          rgba(255, 255, 255, 0) 100%);
      border-radius: calc(0.75rem - 1px);
    }
  
    .button::after {
      inset: 2px;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(23, 23, 23, 0.6) 0%,
          rgba(23, 23, 23, 0) 100%),
        linear-gradient(0deg, #171717, #262626);
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
      background-color: #e5e7eb;
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
      color: #f4f4f5;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      transition: color 0.2s ease-in-out;
    }
  </style>
</button>

<div className="sm:mt-8 h-px bg-white/10 mt-6"></div>

</section><section className="order-3 lg:order-2 w-full max-w-5xl mx-auto animate-on-scroll animate" style={{animation: 'fadeSlideIn 1.0s ease-out 0.25s both'}}>
<div className="relative">
<div className="absolute -right-14 -top-10 h-40 w-40 rounded-full bg-emerald-400/15 blur-3xl"></div>
<div className="absolute -left-14 -bottom-10 h-40 w-40 rounded-full bg-indigo-500/15 blur-3xl"></div>
<figure className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-black/10 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<figcaption className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] text-gray-700 ring-1 ring-black/5 backdrop-blur-sm font-geist">
<svg className="text-gray-700" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
        Product preview
      </figcaption>
</figure>
</div>
</section>

</div>
</div>
</main><section aria-labelledby="ai-section" className="overflow-hidden border-black/5 border-t relative">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -right-1/4 top-24 h-[900px] w-[900px] rounded-full border border-white/10"></div>
<div className="absolute -right-1/3 top-64 h-[1200px] w-[1200px] rounded-full border border-white/5"></div>
</div>
<div className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative">
<div className="flex gap-6 gap-x-6 gap-y-6 items-start justify-between">
<div className="">
<p className="sm:text-sm animate-on-scroll text-xs text-gray-500 font-geist" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>Intelligent finance automation</p>
<h2 className="sm:mt-4 sm:text-5xl md:text-6xl text-3xl tracking-tight font-geist mt-4 animate-on-scroll" id="ai-section" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
          Transform your workflow
          <span className="block text-gray-600">with AI-powered insights</span>
</h2>
</div>

<div className="hidden sm:flex animate-on-scroll gap-x-2 gap-y-2 items-center" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 hover:bg-white/20 transition text-gray-400 cursor-not-allowed bg-gray-100 text-gray-800" id="aiPrev" style={{opacity: '0.5', cursor: 'not-allowed'}}>
<svg className="w-[20px] h-[20px] text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
<span className="sr-only font-geist">Previous</span>
</button>
<button className="inline-flex ring-1 ring-white/20 hover:bg-white/20 transition bg-white/10 w-10 h-10 rounded-full backdrop-blur-md items-center justify-center text-gray-900 bg-gray-900 text-white" id="aiNext" style={{opacity: '1', cursor: 'pointer'}}>
<svg className="w-5 h-5 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<span className="sr-only font-geist">Next</span>
</button>
</div>
</div>

<div className="relative mt-8 sm:mt-12">

<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
<div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth sm:gap-6 sm:pt-4 sm:pb-6 pt-4 pb-6 gap-x-4 gap-y-4 animate-on-scroll" id="aiCards" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent, black 6rem, black calc(100% - 6rem), transparent)', maskImage: 'linear-gradient(to right, transparent, black 6rem, black calc(100% - 6rem), transparent)', animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>

<article className="relative min-w-[84%] xs:min-w-[70%] sm:min-w-[420px] lg:min-w-[480px] snap-start rounded-3xl bg-white/10 backdrop-blur-md text-gray-800 ring-1 ring-white/20 p-6 sm:p-8">
<div className="border-black/5 border rounded-3xl absolute top-0 right-0 bottom-0 left-0 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"></div>
<div className="relative">
<h3 className="text-xl sm:text-2xl text-gray-900 font-geist tracking-tight">Automated Workflows</h3>
<p className="sm:text-base text-sm text-gray-600 font-geist max-w-md mt-2">
              Eliminate manual tasks with intelligent automation. Our AI handles billing, reconciliation, and approvals seamlessly.
            </p>
<div className="mt-6 flex items-center gap-3 text-sm flex-wrap">
<span className="inline-flex items-center gap-2 rounded-full bg-white/30 backdrop-blur-sm px-3 py-1 ring-1 ring-white/30">
<svg className="w-4 h-4 text-gray-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span className="font-geist text-gray-700">Smart automation</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/30 backdrop-blur-sm px-3 py-1 ring-1 ring-white/30">
<svg className="w-4 h-4 text-emerald-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-geist text-gray-700">Zero errors</span>
</span>
</div>
<a className="mt-6 inline-flex items-center gap-2 text-sm text-gray-900 hover:text-black transition font-geist font-medium" href="#">
              Discover more
              <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>

<article className="relative min-w-[84%] xs:min-w-[70%] sm:min-w-[420px] lg:min-w-[480px] snap-start rounded-3xl bg-white/10 backdrop-blur-md text-gray-800 ring-1 ring-white/20 p-6 sm:p-8">
<div className="border-black/5 border rounded-3xl absolute top-0 right-0 bottom-0 left-0 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"></div>
<div className="relative">
<h3 className="text-xl sm:text-2xl text-gray-900 font-geist tracking-tight">AI Assistant</h3>
<p className="sm:text-base text-sm text-gray-600 font-geist max-w-md mt-2">
              Get instant answers to complex finance questions. Our AI assistant provides summaries and guidance in real-time.
            </p>
<div className="mt-6 flex items-center gap-3 text-sm flex-wrap">
<span className="inline-flex items-center gap-2 rounded-full bg-white/30 backdrop-blur-sm px-3 py-1 ring-1 ring-white/30">
<svg className="w-4 h-4 text-gray-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="font-geist text-gray-700">Always available</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/30 backdrop-blur-sm px-3 py-1 ring-1 ring-white/30">
<svg className="w-4 h-4 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-geist text-gray-700">Context-aware</span>
</span>
</div>
<a className="mt-6 inline-flex items-center gap-2 text-sm text-gray-900 hover:text-black transition font-geist font-medium" href="#">
              Try it now
              <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>

<article className="relative min-w-[84%] xs:min-w-[70%] sm:min-w-[420px] lg:min-w-[480px] snap-start rounded-3xl bg-white/10 backdrop-blur-md text-gray-800 ring-1 ring-white/20 p-6 sm:p-8">
<div className="border-black/5 border rounded-3xl absolute top-0 right-0 bottom-0 left-0 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"></div>
<div className="relative">
<h3 className="text-xl sm:text-2xl text-gray-900 font-geist tracking-tight">Predictive Intelligence</h3>
<p className="mt-2 text-sm sm:text-base text-gray-600 font-geist max-w-md">
              Forecast with confidence using machine learning. Identify trends early and optimize your financial planning.
            </p>
<div className="mt-6 flex items-center gap-3 text-sm flex-wrap">
<span className="inline-flex items-center gap-2 rounded-full bg-white/30 backdrop-blur-sm px-3 py-1 ring-1 ring-white/30">
<svg className="w-4 h-4 text-emerald-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="font-geist text-gray-700">Real-time insights</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/30 backdrop-blur-sm px-3 py-1 ring-1 ring-white/30">
<svg className="w-4 h-4 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-geist text-gray-700">Scenario planning</span>
</span>
</div>
<a className="mt-6 inline-flex items-center gap-2 text-sm text-gray-900 hover:text-black transition font-geist font-medium" href="#">
              View forecasts
              <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>
</div>
</div>

<div className="sm:mt-12 flex flex-col sm:flex-row mt-12 gap-x-3 gap-y-3 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<a className="inline-flex items-center gap-3 hover:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-sm font-medium text-white bg-black rounded-full px-6 py-3 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),_0_6.7px_5.3px_rgba(0,0,0,0.048),_0_12.5px_10px_rgba(0,0,0,0.06),_0_22.3px_17.9px_rgba(0,0,0,0.072),_0_41.8px_33.4px_rgba(0,0,0,0.086),_0_100px_80px_rgba(0,0,0,0.12)] font-geist" href="#">
        Start free trial
        <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 font-geist bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 hover:bg-white/20 transition" href="#">
<svg className="w-4 h-4 text-gray-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
        Schedule demo
      </a>
</div>
</div>
<style className="">
    #aiCards::-webkit-scrollbar {
      display: none;
    }
  </style>

</section><section aria-labelledby="dark-how-it-works" className="overflow-hidden bg-gray-950 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a53ef6f7-ea7c-457d-a8d3-dd91c9933e39_3840w.jpg)] bg-cover border-white/10 border-t relative">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -left-1/4 top-10 h-[900px] w-[900px] rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute -right-1/3 bottom-0 h-[1200px] w-[1200px] rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(255,255,255,0.06),transparent_60%)]"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<div className="animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1 text-[11px] text-white/80 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          Product workflow
        </div>
<h2 className="mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl font-geist tracking-tight text-white" id="dark-how-it-works">
          From data to decisions
        </h2>
<p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70 font-geist max-w-xl">
          Connect, understand, and act—end‑to‑end automation in three simple steps.
        </p>

<div className="mt-8 space-y-8 sm:space-y-10">
<div className="flex items-start gap-4 sm:gap-6">
<span className="select-none leading-none text-6xl font-semibold text-white/10 font-geist w-16 sm:text-7xl sm:text-center">1</span>
<div className="">
<p className="text-2xl sm:text-3xl text-white font-geist tracking-tight">Connect</p>
<p className="mt-1 text-sm sm:text-base text-white/70 font-geist">Link banks, billing, and spend tools in minutes—no spreadsheets.</p>
</div>
</div>
<div className="flex items-start gap-4 sm:gap-6">
<span className="select-none leading-none text-6xl font-semibold text-white/10 font-geist w-16 sm:text-7xl sm:text-center">2</span>
<div className="">
<p className="text-2xl sm:text-3xl text-white font-geist tracking-tight">Understand</p>
<p className="sm:text-base text-sm text-white/70 font-geist mt-1">AI categorizes, explains, and forecasts using your business context.</p>
</div>
</div>
<div className="flex items-start gap-4 sm:gap-6">
<span className="select-none leading-none sm:text-7xl sm:text-center text-6xl font-semibold text-white/10 font-geist w-16">3</span>
<div className="">
<p className="text-2xl sm:text-3xl text-white font-geist tracking-tight">Act</p>
<p className="mt-1 text-sm sm:text-base text-white/70 font-geist">Trigger approvals, alerts, and playbooks automatically.</p>
</div>
</div>
</div>

<div className="mt-10">
<a className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-5 py-2.5 text-sm font-medium hover:bg-gray-100 transition shadow-lg font-geist" href="#">
            Explore the demo
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="relative lg:justify-self-end animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<div className="-right-6 -top-8 bg-blue-500/20 w-40 h-40 rounded-full absolute blur-3xl"></div>
<div className="absolute -left-8 -bottom-8 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl"></div>
<div className="relative">
<div className="relative overflow-hidden">
<img alt="Workflow visual" className="sm:h-[520px] opacity-90 w-full h-[360px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c75d3f3e-eb2f-440c-bc4d-6d508f576eb7_1600w.png"/>
</div>

<div className="pointer-events-none">
<div className="absolute -right-3 -top-3 flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 shadow-xl ring-1 ring-black/5 backdrop-blur">
<div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-blue-600 flex items-center justify-center shadow-md">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<div>
<p className="text-[11px] text-gray-600 font-geist">Insight</p>
<p className="text-sm font-medium text-gray-900 tracking-tight font-geist">Anomaly detected</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section><section aria-labelledby="mobile-app" className="overflow-hidden border-black/5 border-t relative">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -left-1/3 top-24 h-[900px] w-[900px] rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute -left-1/4 top-64 h-[1200px] w-[1200px] rounded-full bg-amber-400/10 blur-3xl"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 gap-x-10 gap-y-10 items-center">

<div className="animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-xs text-gray-700 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
          New — Mobile
        </div>
<h2 className="mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl font-geist tracking-tight" id="mobile-app">
          Your finance copilot, now on mobile
        </h2>
<p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 font-geist max-w-xl">
          Approvals, insights, and alerts wherever you are. Stay on top of cash, revenue, and spend in real time.
        </p>

<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="group inline-flex items-center gap-3 rounded-xl bg-black text-white px-5 py-3 shadow-lg shadow-gray-900/20 hover:bg-gray-900 transition" href="#">
<svg className="lucide lucide-apple h-5 w-5 text-white" data-lucide="apple" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
<div className="text-left leading-tight">
<span className="block text-[10px] text-white/70 font-geist">Download on the</span>
<span className="block text-sm font-medium tracking-tight font-geist">App Store</span>
</div>
</a>
<a className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-white/20 transition font-geist" href="#">
<svg className="lucide lucide-smartphone h-4 w-4 text-gray-700" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
            Join Android waitlist
          </a>
</div>

<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/10 backdrop-blur-md shadow-sm">
<svg className="lucide lucide-bell h-4 w-4 text-gray-700" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-gray-900 font-geist">Instant alerts</p>
<p className="text-sm text-gray-600 font-geist">Know when invoices are paid or spend spikes.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/10 backdrop-blur-md shadow-sm">
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-gray-900 font-geist">One‑tap approvals</p>
<p className="text-sm text-gray-600 font-geist">Approve expenses and POs securely on the go.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/10 backdrop-blur-md shadow-sm">
<svg className="lucide lucide-line-chart h-4 w-4 text-gray-700" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-gray-900 font-geist">Live KPIs</p>
<p className="text-sm text-gray-600 font-geist">Revenue, cash runway, and burn at a glance.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/10 backdrop-blur-md shadow-sm">
<svg className="lucide lucide-shield-check h-4 w-4 text-blue-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-gray-900 font-geist">Enterprise‑grade security</p>
<p className="text-sm text-gray-600 font-geist">Biometric lock and device‑level encryption.</p>
</div>
</div>
</div>

<div className="inline-flex gap-3 bg-white/90 ring-black/5 ring-1 rounded-xl mt-8 pt-3 pr-4 pb-3 pl-4 shadow-xl backdrop-blur gap-x-3 gap-y-3 items-center">
<div className="flex -space-x-1.5">
<img alt="User 1" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="User 2" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="User 3" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs">
<p className="font-medium text-gray-900 tracking-tight font-geist">4.9 average rating</p>
<div className="flex text-amber-500 gap-x-0.5 gap-y-0.5 items-center">
<svg className="lucide lucide-star h-3.5 w-3.5 fill-amber-500 stroke-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3.5 w-3.5 fill-amber-500 stroke-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg></div></div></div></div></div></div></section>
    </>
  );
}
