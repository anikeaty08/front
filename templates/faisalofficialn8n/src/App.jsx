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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="relative industrial-mesh min-h-screen flex items-center pt-10 md:pt-0">
<div className="md:py-24 w-full max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

<div className="relative order-2 md:order-1">

<div className="absolute -inset-2 border-2 border-[#FFD700] opacity-30"></div>
<div className="absolute -inset-1 bg-[#FFD700] translate-x-2 translate-y-2 -z-10"></div>
<div className="aspect-[3/4] bg-[#262626] relative overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
<img alt="Victor Ventocilla" className="[--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)_contrast(1.1)] bg-slate-50 mix-blend-lighten w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2199958d-26a1-4a80-8c70-5b3023c63510_800w.png?w=800&amp;q=80"/>

<div className="absolute bottom-0 left-0 bg-[#FFD700] text-[#1A1A1A] px-4 py-2">
<span className="uppercase text-xs font-semibold tracking-widest">Ai Automator</span>
</div>
</div>
</div>

<div className="order-1 md:order-2 space-y-8">
<div className="flex gap-3 text-[#FFD700] opacity-80 gap-x-3 gap-y-3 items-center">
<iconify-icon className="" height="24" icon="logos:codeigniter-icon" width="24"></iconify-icon>
<span className="uppercase text-xs font-semibold tracking-[0.2em]">available FOR WORK</span>
</div>
<h1 className="md:text-6xl lg:text-7xl uppercase leading-[0.9] text-4xl font-semibold text-white tracking-tighter">Hola, I’M <br className=""/> Faisal ahmed</h1>
<div className="w-24 h-2 bg-[#FFD700]"></div>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-300 max-w-lg">I help founders and teams turn chaos into clarity using AI-powered automation — creating systems that work 24/7 and scale without limits.</p>
<div className="pt-4">
<div className="inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-[#FFD700]">
<span className="border-[#FFD700] border-b pb-1">SCROLL TO learn about me</span>
<iconify-icon className="" height="16" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative bg-[#F4F4F4]">

<div className="h-6 w-full hazard-stripe"></div>
<div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
<div className="flex flex-col items-center text-center space-y-12">
<iconify-icon className="text-[#1A1A1A]" height="48" icon="simple-icons:robinhood" style={{color: 'rgb(26, 26, 26)'}} width="48"></iconify-icon>
<div className="prose prose-xl text-[#1A1A1A] max-w-3xl">
<p className="leading-relaxed font-light">Throughout my journey, I have seen that businesses that scale sustainably are those that empower their people, strengthen their systems, and understand that automation is not an expense… it is a strategic investment.</p>
</div>

<div className="bg-[#FFD700] p-8 md:p-10 w-full transform -rotate-1 shadow-[10px_10px_0px_0px_rgba(26,26,26,1)]">
<h3 className="md:text-3xl uppercase leading-tight text-xl font-semibold text-[#1A1A1A] tracking-tight text-center">“AUTOMATION IS NOT A TREND,
IT IS A DAILY ADVANTAGE.”</h3>
</div>
<div className="prose prose-lg text-[#555] max-w-3xl">
<p className="leading-relaxed">And that is where my mission begins: to deliver AI automation in a clear, practical, and transformative way—exactly where it’s needed most: in every workflow, every team, and every decision-maker.</p>
</div>
</div>
</div>

<div className="h-6 w-full hazard-stripe"></div>
</section>

<section className="industrial-mesh py-24 md:py-32 border-t border-[#333]">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end border-b border-[#333] pb-8">
<h2 className="md:text-5xl uppercase text-3xl font-semibold text-white tracking-tighter">MY SERVICES</h2>
<p className="md:mt-0 font-light text-neutral-400 text-right max-w-md mt-4">Three AI automation services. One goal: eliminate manual work and unlock scalable growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-[#FFD700] p-8 h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
<div className="">
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-[#1A1A1A]" height="40" icon="solar:users-group-two-rounded-linear" width="40"></iconify-icon>
<span className="text-[#1A1A1A] opacity-20 text-4xl font-semibold">01</span>
</div>
<h3 className="uppercase text-2xl font-semibold text-[#1A1A1A] tracking-tight mb-4">MENTORSHIP</h3>
<p className="leading-relaxed font-medium text-[#1A1A1A]">I guide founders, teams, and professionals to elevate their automation mindset and AI leadership.</p>
</div>
<div className="mt-8 pt-4 border-t border-[#1A1A1A]/20">
<span className="uppercase text-xs font-semibold text-[#1A1A1A] tracking-widest">PRINCIPLE: LEARNING BY BUILDING</span>
</div>
</div>

<div className="group bg-[#FFD700] p-8 h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
<div className="">
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-[#1A1A1A]" height="40" icon="solar:clipboard-check-linear" width="40"></iconify-icon>
<span className="text-[#1A1A1A] opacity-20 text-4xl font-semibold">02</span>
</div>
<h3 className="uppercase text-2xl font-semibold text-[#1A1A1A] tracking-tight mb-4">CONSULTING</h3>
<p className="leading-relaxed font-medium text-[#1A1A1A]">Design and optimization of robust AI automation systems tailored to your business.</p>
</div>
<div className="mt-8 pt-4 border-t border-[#1A1A1A]/20">
<span className="uppercase text-xs font-semibold text-[#1A1A1A] tracking-widest">BUILD SCALABLE SYSTEMS</span>
</div>
</div>

<div className="group bg-[#FFD700] p-8 h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
<div className="">
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-[#1A1A1A]" height="40" icon="solar:diploma-linear" width="40"></iconify-icon>
<span className="text-[#1A1A1A] opacity-20 text-4xl font-semibold">03</span>
</div>
<h3 className="uppercase text-2xl font-semibold text-[#1A1A1A] tracking-tight mb-4">TRAINING</h3>
<p className="leading-relaxed font-medium text-[#1A1A1A]">Real-world AI automation skills through hands-on, practical workflows.</p>
</div>
<div className="mt-8 pt-4 border-t border-[#1A1A1A]/20">
<span className="uppercase text-xs font-semibold text-[#1A1A1A] tracking-widest">THINK • BUILD • AUTOMATE</span>
</div>
</div>
</div>
</div>
</section>

<footer className="flex flex-col">

<div className="bg-[#1A1A1A] py-20 px-6 border-t border-[#333]">
<div className="max-w-4xl mx-auto text-center space-y-8">
<iconify-icon className="text-[#FFD700]" height="40" icon="solar:hand-shake-linear" width="40"></iconify-icon>
<p className="md:text-4xl uppercase leading-tight text-2xl font-light text-white tracking-tight">THANK YOU FOR BEING HERE.Today, we open a space for innovation, clarity, and transformation through AI-driven automation.</p>
</div>
</div>

<div className="bg-[#FFD700] py-20 px-6">
<div className="max-w-4xl mx-auto text-center space-y-10">
<h2 className="md:text-8xl lg:text-9xl uppercase text-6xl font-semibold text-[#1A1A1A] tracking-tighter opacity-90">STRAIGHT TO THE CORE!</h2>
<button className="uppercase hover:bg-black transition-colors duration-300 flex text-lg font-semibold text-[#FFD700] tracking-widest bg-[#1A1A1A] mr-auto ml-auto pt-5 pr-10 pb-5 pl-10 shadow-[0_10px_20px_rgba(0,0,0,0.2)] gap-x-3 gap-y-3 items-center">SCHEDULE A MEETING</button>
<div className="uppercase text-xs font-semibold text-[#1A1A1A]/60 tracking-widest pt-8">© 2026 faisaln8n. All rights reserved.</div>
</div>
</div>
</footer>

    </>
  );
}
