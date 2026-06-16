import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_0.5s_ease-in-out_0.1s_both] animate-on-scroll
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



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_0.5s_ease-in-out_0.1s_both] animate-on-scroll
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
  


    document.getElementById('year').textContent = new Date().getFullYear();

    // Lucide icons
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="absolute top-0 w-full -z-10 h-screen bg-cover bg-center" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3618eb4c-780a-423e-973e-89198125d0bd_3840w.webp")'}}></div>

<div id="wrapper">

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
      inset: auto 0 0 0;
      height: 65%;
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
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 0) 37.5%);
    }

    .gradient-blur>div:nth-of-type(1) {
      z-index: 2;
      backdrop-filter: blur(1px);
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 0) 50%);
    }

    .gradient-blur>div:nth-of-type(2) {
      z-index: 3;
      backdrop-filter: blur(2px);
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 0) 62.5%);
    }

    .gradient-blur>div:nth-of-type(3) {
      z-index: 4;
      backdrop-filter: blur(4px);
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 0) 75%);
    }

    .gradient-blur>div:nth-of-type(4) {
      z-index: 5;
      backdrop-filter: blur(8px);
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 0) 87.5%);
    }

    .gradient-blur>div:nth-of-type(5) {
      z-index: 6;
      backdrop-filter: blur(16px);
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 0) 100%);
    }

    .gradient-blur>div:nth-of-type(6) {
      z-index: 7;
      backdrop-filter: blur(32px);
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }

    .gradient-blur::after {
      content: "";
      z-index: 8;
      backdrop-filter: blur(64px);
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }
  </style>
</div>

<div className="overflow-hidden relative">

<header className="z-20 [animation:fadeSlideIn_0.5s_ease-in-out_0.1s_both] relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex border-white/[0.06] border-b pt-6 pb-6 items-center justify-between">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/47a2645b-705a-4f7a-a7bb-5cfb23994f35_1600w.png)] bg-cover rounded" href="#"></a>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
<a className="hover:text-white transition font-geist" href="#">Personal</a>
<a className="hover:text-white transition font-geist" href="#">Business</a>
<a className="hover:text-white transition font-geist" href="#">Features</a>
<a className="hover:text-white transition font-geist" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex hover:text-white ring-1 ring-white/[0.06] hover:ring-white/10 transition text-sm font-medium text-white/80 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 border-gradient before:rounded-full font-geist" href="#">Log in</a>
<a className="inline-flex items-center gap-2 hover:bg-orange-400/90 transition border-gradient before:rounded-full text-sm font-semibold text-black bg-orange-300 mix-blend-soft-light rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] font-geist" href="/#start">
      Get Started
      <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
</header>

<section className="z-10 relative">
<div className="lg:px-8 lg:ml-auto lg:mr-auto lg:mt-24 max-w-7xl mt-24 mr-auto ml-auto pr-8 pl-8">

<div className="xl:text-center max-w-3xl mr-auto ml-auto [animation:fadeSlideIn_0.5s_ease-in-out_0.1s_both]">
<div className="inline-flex border-white/[0.06] border-gradient before:rounded-full bg-white/5 rounded-full mb-6 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center">
<span className="text-xs text-white/70 font-geist">Wallet 3.2 — smarter limits, faster transfers</span>
</div>
</div>
<div className="text-center max-w-4xl mr-auto ml-auto">
<h1 className="leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl lg:ml-auto lg:mr-auto lg:font-normal [animation:fadeSlideIn_0.5s_ease-in-out_0.2s_both] text-4xl max-w-3xl mr-auto ml-auto drop-shadow-xl font-geist tracking-tighter" style={{}}>Banking that makes <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-white font-geist tracking-tighter" style={{}}>every dollar</span> count</h1>
<p className="md:text-lg text-base text-white/70 max-w-2xl mt-6 mr-auto ml-auto [animation:fadeSlideIn_0.5s_ease-in-out_0.3s_both] font-geist">
            Wallet brings payments, savings, and real‑time insights into one clear view. Built for speed, security, and everyday banking.
          </p>

<div className="flex flex-col sm:flex-row max-w-xl mt-8 mr-auto ml-auto w-full gap-x-3 gap-y-3 items-center [animation:fadeSlideIn_0.5s_ease-in-out_0.4s_both]">
<label className="flex-1 relative">
<input className="placeholder:text-white/40 focus:ring-2 focus:ring-orange-300/60 outline-none transition border-gradient before:rounded-xl text-sm text-white bg-white/5 w-full border-white/5 border ring-0 rounded-full pt-3 pr-12 pb-3 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-xl" placeholder="Enter your email" type="email"/>
</label>
<button className="button shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" type="button">
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
<span className="inner font-geist">Get Started<svg className="lucide lucide-arrow-right lucide-save lucide-share-2 lucide-x lucide-menu icon w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
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
    rgba(255, 165, 0, 0.8) 0%,
    rgba(255, 165, 0, 0) 100%),
  linear-gradient(0deg, #f97316, #f97316);
border-radius: 9999px;
border: none;
outline: none;
padding: 12px 24px;
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
border-radius: 9999px;
}

.button::after {
inset: 2px;
background: radial-gradient(65.28% 65.28% at 50% 100%,
    rgba(255, 165, 0, 0.8) 0%,
    rgba(255, 165, 0, 0) 100%),
  linear-gradient(0deg, #f97316, #f97316);
border-radius: 9999px;
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

<div className="flex [animation:fadeSlideIn_0.5s_ease-in-out_0.5s_both] text-xs text-white/60 mt-6 gap-x-4 gap-y-4 items-center justify-center">
<div className="flex -space-x-2">
<img alt="customer" className="h-7 w-7 rounded-full object-cover ring-2 ring-black" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d902a4ac-7e43-49aa-a54e-d16c7e28e9da_320w.webp" style={{}}/>
<img alt="customer" className="h-7 w-7 rounded-full object-cover ring-2 ring-black" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e9e4fba1-4ffe-4358-b896-01c3eb335785_320w.webp"/>
<img alt="customer" className="h-7 w-7 rounded-full object-cover ring-2 ring-black" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8482e3b1-ea38-4ac7-8884-79f830e1b32f_320w.webp"/>
</div>
<span className="font-geist">Trusted by 250k+ customers</span>
<span className="inline-flex items-center gap-1 text-emerald-300 font-geist">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Bank‑grade security
            </span>
</div>
</div>

<div className="md:mt-24 mt-24 relative">
<div className="border-gradient before:rounded-[28px] [animation:fadeSlideIn_0.5s_ease-in-out_0.05s_both] xl:bg-neutral-900/80 bg-neutral-900/40 rounded-[28px] mr-auto ml-auto shadow-[0_20px_120px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">

<div className="flex sm:px-6 border-white/5 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between [animation:fadeSlideIn_0.5s_ease-in-out_0.1s_both]">
<div className="flex gap-3 items-center [animation:fadeSlideIn_0.5s_ease-in-out_0.15s_both]">
<div className="flex gap-2 items-center">
<span className="h-3.5 w-3.5 rounded-full bg-red-500/90"></span>
<span className="h-3.5 w-3.5 rounded-full bg-amber-400/90"></span>
<span className="h-3.5 w-3.5 rounded-full bg-emerald-500/90"></span>
</div>
<div className="inline-flex items-center gap-2 px-3">
<span className="text-xl font-semibold tracking-tight text-white font-geist">Wallet</span>
<span className="text-xs text-white/40 font-geist">Desktop</span>
</div>
</div>

<div className="flex items-center gap-2 sm:gap-3 [animation:fadeSlideIn_0.5s_ease-in-out_0.2s_both]">
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex gap-2 border-gradient before:rounded-lg hover:bg-white/10 text-sm text-slate-300 bg-white/5 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center font-geist">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M2 12h20"></path></svg>
          New Transaction
        </button>
</div>
<button className="inline-flex border-gradient before:rounded-lg hover:bg-white/10 bg-white/5 rounded-lg pt-2 pr-2 pb-2 pl-2 items-center justify-center">
<svg className="w-4 h-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="grid grid-cols-12">

<aside className="col-span-12 md:col-span-3 lg:col-span-3 border-white/5 border-r">
<div className="p-4 sm:p-6">
<div className="mb-6 [animation:fadeSlideIn_0.5s_ease-in-out_0.25s_both]">
<div className="flex items-center gap-3 mb-4">
<img alt="profile" className="h-10 w-10 rounded-lg object-cover border-gradient before:rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9bf583f7-9a93-46c4-bb0a-4effddb01c86_320w.webp"/>
<div className="">
<p className="text-sm font-semibold text-white font-geist">Alex Chen</p>
<p className="text-xs text-slate-400 font-geist">Premium Account</p>
</div>
</div>
</div>
<nav className="space-y-6">
<div className="[animation:fadeSlideIn_0.5s_ease-in-out_0.3s_both]">
<p className="mb-2 text-xs uppercase tracking-wider text-slate-400 font-geist">Overview</p>
<ul className="space-y-1">
<li className="">
<a className="group flex items-center gap-3 text-sm text-white bg-white/10 rounded-lg pt-2 pr-3 pb-2 pl-3 font-geist" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect className="" height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                  Dashboard
                </a>
</li>
<li className="">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  Accounts
                </a>
</li>
<li className="">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                  Transactions
                </a>
</li>
</ul>
</div>
<div className="[animation:fadeSlideIn_0.5s_ease-in-out_0.35s_both]">
<p className="mb-2 text-xs uppercase tracking-wider text-slate-400 font-geist">Tools</p>
<ul className="space-y-1">
<li className="">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path className="" d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path className="" d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
                  Cards
                </a>
</li>
<li className="">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  Transfers
                </a>
</li>
<li className="">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
                  Analytics
                </a>
</li>
</ul>
</div>
<div className="[animation:fadeSlideIn_0.5s_ease-in-out_0.4s_both]">
<p className="mb-2 text-xs uppercase tracking-wider text-slate-400 font-geist">Quick Access</p>
<div className="grid grid-cols-2 gap-2">
<div className="rounded-lg border-gradient before:rounded-lg bg-white/5 p-3 text-center">
<p className="text-xl font-semibold text-white font-geist">$12,450</p>
<p className="text-xs text-slate-400 font-geist">Balance</p>
</div>
<div className="rounded-lg border-gradient before:rounded-lg bg-white/5 p-3 text-center">
<p className="text-xl font-semibold text-emerald-300 font-geist">+$420</p>
<p className="text-xs text-slate-400 font-geist">This month</p>
</div>
</div>
</div>
<div className="space-y-1 [animation:fadeSlideIn_0.5s_ease-in-out_0.45s_both]">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Settings
            </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
              Help &amp; Support
            </a>
</div>
</nav>
</div>
</aside>

<section className="col-span-12 md:col-span-9 lg:col-span-9 relative">
<div className="relative h-full min-h-[720px] flex flex-col">

<div className="flex-1 sm:px-8 overflow-y-auto pt-8 pr-4 pb-8 pl-4 space-y-6">

<div className="[animation:fadeSlideIn_0.5s_ease-in-out_0.5s_both]">
<h2 className="text-2xl text-white mb-1 font-geist tracking-tighter" style={{}}>Welcome back, Alex</h2>
<p className="text-sm text-slate-400 font-geist">Here's what's happening with your accounts today.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 [animation:fadeSlideIn_0.5s_ease-in-out_0.55s_both]">
<div className="rounded-xl border-gradient before:rounded-xl bg-white/5 p-4 backdrop-blur-sm">
<div className="flex items-center justify-between mb-2">
<p className="text-xs text-slate-400 uppercase tracking-wider font-geist">Total Balance</p>
<svg className="w-4 h-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
</div>
<p className="text-2xl text-white mb-1 font-geist tracking-tighter" style={{}}>$24,850.42</p>
<div className="flex items-center gap-1 text-xs">
<span className="text-emerald-400 font-geist">+12.5%</span>
<span className="text-slate-500 font-geist">vs last month</span>
</div>
</div>
<div className="rounded-xl border-gradient before:rounded-xl bg-white/5 p-4 backdrop-blur-sm">
<div className="flex items-center justify-between mb-2">
<p className="text-xs text-slate-400 uppercase tracking-wider font-geist">Spending</p>
<svg className="w-4 h-4 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<p className="text-2xl text-white mb-1 font-geist tracking-tighter" style={{}}>$3,249.18</p>
<div className="flex items-center gap-1 text-xs">
<span className="text-orange-400 font-geist">-8.2%</span>
<span className="text-slate-500 font-geist">vs last month</span>
</div>
</div>
<div className="border-gradient before:rounded-xl bg-white/5 rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm">
<div className="flex items-center justify-between mb-2">
<p className="text-xs text-slate-400 uppercase tracking-wider font-geist">Savings Goal</p>
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
<p className="text-2xl text-white mb-1 font-geist tracking-tighter" style={{}}>68%</p>
<div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
<div className="bg-gradient-to-r from-orange-300 to-orange-400 h-1.5 rounded-full" style={{width: '68%'}}></div>
</div>
</div>
</div>

<div className="[animation:fadeSlideIn_0.5s_ease-in-out_0.6s_both]">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-white font-geist">Recent Transactions</h3>
<button className="text-sm text-slate-400 hover:text-white transition font-geist">View all</button>
</div>
<div className="space-y-2">
<div className="border-gradient before:rounded-lg flex bg-white/5 rounded-lg pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
<svg className="w-5 h-5 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
</div>
<div>
<p className="text-sm font-medium text-white font-geist">Salary Deposit</p>
<p className="text-xs text-slate-400 font-geist">Today, 9:24 AM</p>
</div>
</div>
<p className="text-base font-semibold text-emerald-400 font-geist">+$4,250.00</p>
</div>
<div className="rounded-lg border-gradient before:rounded-lg bg-white/5 p-4 backdrop-blur-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
<svg className="w-5 h-5 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><rect height="7" rx="1" width="4" x="7" y="10"></rect></svg>
</div>
<div>
<p className="text-sm font-medium text-white font-geist">Amazon Purchase</p>
<p className="text-xs text-slate-400 font-geist">Yesterday, 3:42 PM</p>
</div>
</div>
<p className="text-base font-semibold text-white font-geist">-$84.99</p>
</div>
<div className="rounded-lg border-gradient before:rounded-lg bg-white/5 p-4 backdrop-blur-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
<svg className="w-5 h-5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-white font-geist">Netflix Subscription</p>
<p className="text-xs text-slate-400 font-geist">Dec 28, 2024</p>
</div>
</div>
<p className="text-base font-semibold text-white font-geist">-$15.99</p>
</div>
</div>
</div>

<div className="[animation:fadeSlideIn_0.5s_ease-in-out_0.65s_both]">
<h3 className="text-lg font-semibold text-white mb-4 font-geist">Quick Actions</h3>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<button className="border-gradient before:rounded-lg hover:bg-white/10 transition bg-white/5 rounded-lg pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm">
<svg className="w-6 h-6 text-slate-300 mx-auto mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<p className="text-xs text-slate-300 font-geist">Send Money</p>
</button>
<button className="border-gradient before:rounded-lg hover:bg-white/10 transition bg-white/5 rounded-lg pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm">
<svg className="w-6 h-6 text-slate-300 mx-auto mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
<p className="text-xs text-slate-300 font-geist">Pay Bills</p>
</button>
<button className="rounded-lg border-gradient before:rounded-lg bg-white/5 p-4 backdrop-blur-sm hover:bg-white/10 transition">
<svg className="w-6 h-6 text-slate-300 mx-auto mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
<p className="text-xs text-slate-300 font-geist">Deposit</p>
</button>
<button className="border-gradient before:rounded-lg hover:bg-white/10 transition bg-white/5 rounded-lg pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm">
<svg className="w-6 h-6 text-slate-300 mx-auto mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
<p className="text-xs text-slate-300 font-geist">Analytics</p>
</button>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</section><section className="z-10 xl:py-24 mt-24 pt-12 pb-12 relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-12 items-start">

<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur [animation:fadeSlideIn_0.5s_ease-in-out_0.1s_both] animate-on-scroll">
<span className="text-xs text-white/70 font-geist">Empowering customers in 30+ countries</span>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
<svg className="lucide lucide-arrow-right h-3.5 w-3.5 text-white/60" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
<h2 className="mt-5 text-4xl sm:text-xl md:text-6xl text-white drop-shadow-xl [animation:fadeSlideIn_0.5s_ease-in-out_0.2s_both] animate-on-scroll font-geist tracking-tighter" style={{}}>
          We turn everyday banking into effortless momentum
        </h2>
<p className="md:text-lg [animation:fadeSlideIn_0.5s_ease-in-out_0.3s_both] animate-on-scroll text-base text-white/70 max-w-xl mt-6 font-geist">
          Automate savings, analyze spending, and move money instantly—securely and intelligently. Wallet gives you the clarity and control to grow what matters.
        </p>
<div className="mt-7 flex flex-wrap items-center gap-3 [animation:fadeSlideIn_0.5s_ease-in-out_0.4s_both] animate-on-scroll">
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-orange-400/90 transition text-sm font-semibold text-black bg-orange-300 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] font-geist" href="#">
            Contact Us
            <svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full pt-2 pr-4 pb-2 pl-4 font-geist" href="#">
            Why Wallet
            <svg className="lucide lucide-arrow-right h-4 w-4 text-white/70" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="mt-10 grid grid-cols-2 gap-6 [animation:fadeSlideIn_0.5s_ease-in-out_0.5s_both] animate-on-scroll">
<div className="flex gap-3 gap-x-3 gap-y-3 items-start">
<div className="flex border-gradient before:rounded-lg bg-white/5 w-9 h-9 rounded-lg items-center justify-center">
<svg className="lucide lucide-activity w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="">
<p className="text-2xl sm:text-3xl text-white font-geist tracking-tighter" style={{}}>12M+</p>
<p className="text-xs text-white/60 font-geist">Transfers processed monthly</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex border-gradient before:rounded-lg bg-white/5 w-9 h-9 rounded-lg items-center justify-center">
<svg className="lucide lucide-smile w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<div className="">
<p className="text-2xl sm:text-3xl text-white font-geist tracking-tighter" style={{}}>98%</p>
<p className="text-xs text-white/60 font-geist">Satisfaction rate</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="grid grid-cols-2 gap-4 [animation:fadeSlideIn_0.5s_ease-in-out_0.55s_both] animate-on-scroll">

<div className="relative h-56 md:h-72 overflow-hidden rounded-2xl border-gradient before:rounded-2xl bg-white/5 backdrop-blur">
<img alt="Team collaborating on laptop" className="opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6d7852ab-5a08-4da9-b5b5-554b75eb2462_800w.webp"/>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="rounded-xl bg-neutral-900/70 backdrop-blur px-4 py-3 border-gradient before:rounded-xl">
<p className="text-sm font-semibold text-white font-geist">Partnership Over Projects</p>
<p className="mt-1 text-xs text-white/70 font-geist">We grow balances, not just complete tasks.</p>
</div>
</div>
</div>

<div className="relative h-56 md:h-72 overflow-hidden rounded-2xl border-gradient before:rounded-2xl bg-white/5">
<img altminimal="" and="" card="" className="opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" desk="" phone="" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2c958486-bfef-4917-862a-7e3de9f9e62c_800w.webp" with=""/>
<div className="absolute left-0 top-0 m-4 rounded-full bg-neutral-900/70 backdrop-blur px-3 py-1.5">
<span className="text-xs text-white/80 inline-flex items-center gap-1 font-geist">
<svg className="lucide lucide-sparkles w-[14px] h-[24px]" data-icon-replaced="true" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '14px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                New
              </span>
</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="rounded-xl bg-neutral-900/70 backdrop-blur px-4 py-3 border-gradient before:rounded-xl">
<p className="text-sm font-semibold text-white font-geist">Data‑Driven Decisions</p>
<p className="mt-1 text-xs text-white/70 font-geist">Every move is backed by insight.</p>
</div>
</div>
</div>

<div className="relative col-span-2 h-48 md:h-56 overflow-hidden rounded-2xl border-gradient before:rounded-2xl bg-white/5">
<img alt="Calm mountains minimal" className="opacity-70 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/37527329-8639-4134-aa32-d84f57b80390_1600w.webp"/>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="flex border-gradient before:rounded-xl bg-neutral-900/70 rounded-xl pt-3 pr-4 pb-3 pl-4 backdrop-blur items-center justify-between">
<div>
<p className="text-sm font-semibold text-white font-geist">Instant Transfers</p>
<p className="mt-1 text-xs text-white/70 font-geist">Move money globally in seconds.</p>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
<svg className="lucide lucide-send w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="z-10 xl:py-24 mt-24 pt-12 pb-12 relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="max-w-3xl [animation:fadeSlideIn_0.5s_ease-in-out_0.1s_both] animate-on-scroll">
<div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center">
<span className="text-[11px] uppercase text-white/60 tracking-wider font-geist">Features</span>
</div>
<h2 className="md:text-6xl text-4xl text-white mt-5 drop-shadow-xl font-geist tracking-tighter" style={{}}>
  Discover Wallet’s most powerful features
</h2>
<p className="md:text-lg text-base text-white/70 mt-4 font-geist">
        More than a banking app—Wallet is your assistant for faster payments, smarter savings, and complete clarity over
        your money.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:gap-6 mt-10 gap-x-4 gap-y-4">

<div className="overflow-hidden border-gradient before:rounded-2xl [animation:fadeSlideIn_0.5s_ease-in-out_0.2s_both] animate-on-scroll bg-white/5 h-[420px] rounded-2xl relative">
<img alt="Secure padlock abstract" className="absolute inset-0 w-full h-full object-cover opacity-70" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/17785de9-639e-4183-80b5-d7b64fc193cf_800w.jpg"/>
<div className="bg-gradient-to-t from-black/70 via-black/30 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute left-0 top-0 m-4 rounded-full bg-neutral-900/70 backdrop-blur px-3 py-1.5 border-gradient before:rounded-full">
<span className="text-xs text-white/80 inline-flex items-center gap-1 font-geist">
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Secure by Design
          </span>
</div>
<div className="absolute inset-x-0 bottom-0 p-5">
<div className="rounded-xl bg-neutral-900/70 backdrop-blur px-5 py-4 border-gradient before:rounded-xl">
<p className="text-xl font-semibold tracking-tight text-white font-geist">Bank‑grade protection</p>
<p className="mt-1.5 text-sm text-white/70 font-geist">
              End‑to‑end encryption, passkeys, and live fraud detection keep every transfer and card swipe protected.
            </p>
<div className="mt-3 inline-flex items-center gap-2 text-[11px] text-emerald-300 font-geist">
<svg className="lucide lucide-fingerprint w-3.5 h-3.5" data-lucide="fingerprint" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
              Passkey &amp; biometric sign‑in
            </div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border-gradient before:rounded-2xl bg-white/5 h-[420px] [animation:fadeSlideIn_0.5s_ease-in-out_0.25s_both] animate-on-scroll">
<img alt="Minimal mountains gradient" className="absolute inset-0 w-full h-full object-cover opacity-75" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6404686d-555a-42fd-9813-5e65f946ea91_800w.webp"/>
<div className="bg-gradient-to-t from-black/70 via-black/30 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="pt-5 pr-5 pb-5 pl-5 absolute right-0 bottom-0 left-0">
<div className="border-gradient before:rounded-xl bg-neutral-900/70 rounded-xl pt-4 pr-5 pb-4 pl-5 backdrop-blur">
<p className="text-xl font-semibold tracking-tight text-white font-geist">Seamless money movement</p>
<p className="mt-1.5 text-sm text-white/70 font-geist">
              Move funds instantly across accounts and pay anyone—local or international—with clear, upfront fees.
            </p>
<div className="mt-3 flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
<svg className="lucide lucide-send-horizontal w-4 h-4 text-white/90" data-lucide="send-horizontal" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"></path><path d="M6 12h16"></path></svg>
</span>
<p className="text-xs text-white/70 font-geist">Domestic transfers are fee‑free</p>
</div>
</div>
</div>
</div>

<div className="overflow-hidden border-gradient before:rounded-2xl [animation:fadeSlideIn_0.5s_ease-in-out_0.3s_both] animate-on-scroll bg-white/5 h-[420px] rounded-2xl relative">
<img alt="3D render abstract gradients" className="absolute inset-0 w-full h-full object-cover opacity-70" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/90e25be1-60dc-4486-9134-43e1f41d7e97_800w.jpg"/>
<div className="bg-gradient-to-t from-black/70 via-black/30 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute left-0 top-0 m-4 rounded-full bg-neutral-900/70 backdrop-blur px-3 py-1.5 border-gradient before:rounded-full">
<span className="text-xs text-white/80 inline-flex items-center gap-1 font-geist">
<svg className="lucide lucide-workflow w-3.5 h-3.5" data-lucide="workflow" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
            Automations
          </span>
</div>
<div className="pt-5 pr-5 pb-5 pl-5 absolute right-0 bottom-0 left-0">
<div className="rounded-xl bg-neutral-900/70 backdrop-blur px-5 py-4 border-gradient before:rounded-xl">
<p className="text-xl font-semibold tracking-tight text-white font-geist">Your money, on autopilot</p>
<p className="mt-1.5 text-sm text-white/70 font-geist">
              Build rules to round up purchases, auto‑save toward goals, and schedule bills—no spreadsheets required.
            </p>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="rounded-lg bg-white/5 px-3 py-2 text-center border-gradient before:rounded-lg">
<p className="text-sm font-semibold text-white tracking-tight font-geist">+10%</p>
<p className="text-[11px] text-white/60 font-geist">Saved</p>
</div>
<div className="rounded-lg bg-white/5 px-3 py-2 text-center border-gradient before:rounded-lg">
<p className="text-sm font-semibold text-white tracking-tight font-geist">0 overd.</p>
<p className="text-[11px] text-white/60 font-geist">Fees</p>
</div>
<div className="rounded-lg bg-white/5 px-3 py-2 text-center border-gradient before:rounded-lg">
<p className="text-sm font-semibold text-white tracking-tight font-geist">24/7</p>
<p className="text-[11px] text-white/60 font-geist">Running</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 [animation:fadeSlideIn_0.5s_ease-in-out_0.35s_both] animate-on-scroll">
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-4 py-2 font-geist" href="#">
        Explore all features
        <svg className="lucide lucide-arrow-right w-4 h-4 text-white/70" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section><section className="z-10 xl:py-24 mt-24 pt-12 pb-12 relative" id="under-the-hood">
<div className="absolute top-0 right-0 bottom-0 left-0 saturate-0" data-container-bg="true">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="p7Ff6pfTrb5Gs59C7nLC"></div>

</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-12 items-start">

<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur [animation:fadeSlideIn_0.5s_ease-in-out_0.1s_both] animate-on-scroll">
<span className="text-xs text-white/70 inline-flex items-center gap-2 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-white/50"></span>
          Platform Architecture
          </span>
</div>
<h2 className="mt-5 text-4xl text-white drop-shadow-xl [animation:fadeSlideIn_0.5s_ease-in-out_0.2s_both] animate-on-scroll md:text-6xl md:font-medium font-geist tracking-tighter" style={{}}>
          Enterprise infrastructure that scales with you
        </h2>
<p className="md:text-lg [animation:fadeSlideIn_0.5s_ease-in-out_0.3s_both] animate-on-scroll text-base text-white/70 max-w-xl mt-6 font-geist">
          Our platform combines cutting-edge technology with military-grade security to deliver lightning-fast
          performance and uncompromising reliability for your financial operations.
        </p>
<div className="mt-8 h-px bg-white/10 [animation:fadeSlideIn_0.5s_ease-in-out_0.35s_both] animate-on-scroll"></div>
<dl className="mt-8 space-y-6 [animation:fadeSlideIn_0.5s_ease-in-out_0.4s_both] animate-on-scroll">
<div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
<dt className="sm:col-span-2 text-sm font-medium text-white font-geist">Lightning Performance</dt>
<dd className="sm:col-span-3 text-sm text-white/70 font-geist">Advanced caching and optimized queries deliver
              instant response times across all operations and devices.</dd>
</div>
<div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
<dt className="sm:col-span-2 text-sm font-medium text-white font-geist">Military-grade security</dt>
<dd className="sm:col-span-3 text-sm text-white/70 font-geist">Multi-layer encryption, advanced threat
              detection, and continuous security audits protect your data 24/7.</dd>
</div>
<div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
<dt className="sm:col-span-2 text-sm font-medium text-white font-geist">Global infrastructure</dt>
<dd className="sm:col-span-3 text-sm text-white/70 font-geist">Distributed across multiple regions with
              intelligent load balancing to serve millions of transactions seamlessly.</dd>
</div>
<div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
<dt className="sm:col-span-2 text-sm font-medium text-white font-geist">99.99% uptime guarantee</dt>
<dd className="sm:col-span-3 text-sm text-white/70 font-geist">Redundant systems and automatic failover ensure
              your business never stops, with real-time monitoring and alerts.</dd>
</div>
</dl>
</div>

<div className="lg:col-span-6">
<div className="grid grid-cols-2 gap-4 [animation:fadeSlideIn_0.5s_ease-in-out_0.5s_both] animate-on-scroll">

<div alt="Abstract system grid" className="relative col-span-2 h-56 md:h-64 overflow-hidden rounded-2xl border-gradient before:rounded-hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dfa9776b-475d-4470-9c26-68e42de7819a_1600w.webp">
<div className="bg-gradient-to-t from-black/40 via-black/10 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-lg bg-neutral-900/70 backdrop-blur px-3 py-1.5 border-gradient before:rounded-lg">
<svg className="lucide lucide-gauge h-4 w-4 text-white/80" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<span className="text-xs text-white/80 font-geist">Performance</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="rounded-xl bg-neutral-900/70 backdrop-blur px-4 py-3 border-gradient before:rounded-xl">
<p className="text-sm font-semibold text-white font-geist">Blazing fast responses</p>
<p className="mt-1 text-xs text-white/70 font-geist">Optimized architecture with edge computing for instant
                  data access worldwide.</p>
</div>
</div>
</div>

<div className="relative h-56 overflow-hidden rounded-2xl border-gradient before:rounded-2xl bg-white/5">
<img alt="Security abstract" className="absolute inset-0 h-full w-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4cbc70cc-3abd-4e06-95fa-6aee041735db_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
<div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-lg bg-neutral-900/70 backdrop-blur px-3 py-1.5 border-gradient before:rounded-lg">
<svg className="lucide lucide-shield h-4 w-4 text-emerald-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-xs text-white/80 font-geist">Security</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="rounded-xl bg-neutral-900/70 backdrop-blur px-4 py-3 border-gradient before:rounded-xl">
<p className="text-sm font-semibold text-white font-geist">Protected at every level</p>
<p className="mt-1 text-xs text-white/70 font-geist">Advanced encryption, compliance certifications, and
                  comprehensive audit logs.</p>
</div>
</div>
</div>

<div className="relative h-56 overflow-hidden rounded-2xl border-gradient before:rounded-2xl bg-white/5">
<img alt="Scalable infrastructure abstract" className="absolute inset-0 h-full w-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7630a941-c2b6-4893-a7b0-c0098a01c825_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
<div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-lg bg-neutral-900/70 backdrop-blur px-3 py-1.5 border-gradient before:rounded-lg">
<svg className="lucide lucide-layers h-4 w-4 text-white/80" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="text-xs text-white/80 font-geist">Scale</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="rounded-xl bg-neutral-900/70 backdrop-blur px-4 py-3 border-gradient before:rounded-xl">
<p className="text-sm font-semibold text-white font-geist">Built to scale infinitely</p>
<p className="mt-1 text-xs text-white/70 font-geist">Auto-scaling infrastructure adapts to your growth with
                  zero downtime migrations.</p>
</div>
</div>
</div>
</div>

<div className="mt-4 flex items-center gap-4 text-xs text-white/60 [animation:fadeSlideIn_0.5s_ease-in-out_0.6s_both] animate-on-scroll">
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-zap h-3.5 w-3.5 text-orange-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-geist">Speed optimized</span>
</span>
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-lock h-3.5 w-3.5 text-emerald-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="font-geist">Fully compliant</span>
</span>
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-globe h-3.5 w-3.5 text-white/70" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="font-geist">Global coverage</span>
</span>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="border-white/[0.06] border-t mt-20 pt-10 pb-10">
<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
<p className="text-xs text-white/50 font-geist">© <span className="font-geist" id="year">2025</span> Wallet, Inc. All rights reserved.</p>
<div className="flex items-center gap-6 text-xs text-white/60">
<a className="hover:text-white transition font-geist" href="#">Privacy</a>
<a className="hover:text-white transition font-geist" href="#">Security</a>
<a className="hover:text-white transition font-geist" href="#">Status</a>
</div>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
