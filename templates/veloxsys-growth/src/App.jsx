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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="pointer-events-auto glass flex gap-4 md:gap-10 transition-all duration-300 w-full max-w-5xl border-gray-200/60 border rounded-full pt-2 pr-2 pb-2 pl-5 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] gap-x-4 gap-y-4 items-center justify-between">

<a className="group flex items-center gap-2 shrink-0" href="#">
<span className="font-serif text-xl md:text-2xl tracking-tight italic font-medium transition-colors text-gray-900 group-hover:text-violet-600">
            VeloxSys.
          </span>
</a>

<a className="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg bg-gray-900 text-white shrink-0 hover:shadow-violet-500/20 hover:bg-violet-600" href="#contact">
          Get Started
          <svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3 transition-transform group-hover:translate-x-0.5 hidden sm:block" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</nav>
</header>
<main className="md:pt-32 md:px-6 max-w-7xl mr-auto ml-auto pt-28 pr-4 pb-24 pl-4">

<section className="md:rounded-[2.5rem] md:p-12 lg:p-20 overflow-hidden md:mb-16 text-center bg-white border-gray-200/60 border rounded-[2rem] mb-12 pt-12 pr-6 pb-12 pl-6 relative shadow-[0_1px_2px_rgba(0,0,0,0.02)]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
<div className="flex flex-col max-w-5xl z-10 mr-auto ml-auto relative items-center">

<div className="animate-fade-up text-[10px] uppercase md:mb-8 font-bold text-violet-600 tracking-widest font-montserrat bg-violet-50 w-fit border-violet-100 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">
            Attention [Target Audience]
          </div>

<h1 className="animate-fade-up delay-100 sm:text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] md:leading-[0.95] md:mb-8 text-4xl font-medium text-gray-900 tracking-tighter font-serif mb-6">
            We'll Add
            <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-violet-500 to-violet-400 pr-2">
              10-20 Qualified Calls
            </span>
            to Your Calendar
            <br className="hidden md:block"/>
            Every Month or
            <span className="border-b-2 md:border-b-4 border-violet-200/60">
              You Don't Pay.
            </span>
</h1>

<p className="animate-fade-up delay-200 text-base md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-8 md:mb-12 font-light px-2">
            Our proprietary "[Mechanism Name]" adds [Specific Outcome] to your
            business without you lifting a finger.
          </p>

<div className="animate-fade-up delay-300 relative w-full max-w-4xl aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-xl md:shadow-2xl overflow-hidden mb-8 md:mb-12 group cursor-pointer ring-1 bg-gray-900 border-white/50 shadow-gray-200 ring-gray-900/5">

<img alt="Process Video" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=2426"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 md:w-24 md:h-24 backdrop-blur-md rounded-full flex items-center justify-center border shadow-[0_0_40px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 bg-white/20 border-white/40">
<div className="w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-sm pl-0.5 md:pl-1 bg-white">
<svg aria-hidden="true" className="lucide lucide-play w-4 h-4 md:w-7 md:h-7 fill-gray-900 text-gray-900" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</div>
</div>
</div>

<div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 backdrop-blur-md text-[10px] md:text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full font-montserrat flex items-center gap-2 border bg-black/60 text-white border-white/10">
<div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse bg-violet-500"></div>
              Watch breakdown
            </div>
</div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full mb-6">
<a className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full text-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-montserrat font-medium group bg-gray-900 text-white hover:shadow-violet-500/20 hover:bg-violet-600" href="#contact">
              Get Started
              <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="w-full sm:w-auto border px-8 py-3.5 md:py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center justify-center gap-2 bg-white border-gray-200 text-gray-900 hover:border-gray-400" href="#process">
              Learn More
            </a>
</div>

<p className="animate-fade-up delay-500 text-[10px] md:text-xs font-montserrat text-gray-400">
            Book a Free Strategy Session. No credit card required.
          </p>
</div>
</section>

<div className="w-full py-8 md:py-12 mb-16 md:mb-20 text-center border-b border-gray-100">
<h3 className="text-xl md:text-2xl font-serif mb-2 text-gray-900">
          Trusted by 50+ [Target Industry] Companies
        </h3>
<p className="text-[10px] md:text-xs font-montserrat uppercase tracking-widest mb-8 md:mb-10 text-gray-400">
          Join the fastest growing brands working with VeloxSys
        </p>
<div className="marquee-mask relative overflow-hidden">
<div className="flex w-max animate-infinite-scroll">

<div className="flex items-center gap-10 md:gap-16 px-4 md:px-8 grayscale opacity-60 scale-90 md:scale-100">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-triangle w-5 h-5 md:w-6 md:h-6" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
</svg>
<span className="font-bold text-base md:text-lg">Company A</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-hexagon w-5 h-5 md:w-6 md:h-6" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
<span className="font-bold text-base md:text-lg">Company B</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-circle w-5 h-5 md:w-6 md:h-6" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-bold text-base md:text-lg">Company C</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-box w-5 h-5 md:w-6 md:h-6" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
<span className="font-bold text-base md:text-lg">Company D</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-slack w-5 h-5 md:w-6 md:h-6" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1.5" width="3" x="13" y="2"></rect>
<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
<rect height="8" rx="1.5" width="3" x="8" y="14"></rect>
<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
<rect height="3" rx="1.5" width="8" x="14" y="13"></rect>
<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
<rect height="3" rx="1.5" width="8" x="2" y="8"></rect>
<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
</svg>
<span className="font-bold text-base md:text-lg">Company E</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-figma w-5 h-5 md:w-6 md:h-6" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
<span className="font-bold text-base md:text-lg">Company F</span>
</div>
</div>

<div className="flex items-center gap-10 md:gap-16 px-4 md:px-8 grayscale opacity-60 scale-90 md:scale-100">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-triangle w-5 h-5 md:w-6 md:h-6" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
</svg>
<span className="font-bold text-base md:text-lg">Company A</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-hexagon w-5 h-5 md:w-6 md:h-6" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
<span className="font-bold text-base md:text-lg">Company B</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-circle w-5 h-5 md:w-6 md:h-6" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-bold text-base md:text-lg">Company C</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-box w-5 h-5 md:w-6 md:h-6" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
<span className="font-bold text-base md:text-lg">Company D</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-slack w-5 h-5 md:w-6 md:h-6" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1.5" width="3" x="13" y="2"></rect>
<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
<rect height="8" rx="1.5" width="3" x="8" y="14"></rect>
<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
<rect height="3" rx="1.5" width="8" x="14" y="13"></rect>
<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
<rect height="3" rx="1.5" width="8" x="2" y="8"></rect>
<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
</svg>
<span className="font-bold text-base md:text-lg">Company E</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-figma w-5 h-5 md:w-6 md:h-6" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
<span className="font-bold text-base md:text-lg">Company F</span>
</div>
</div>
</div>
</div>
</div>

<section className="py-12 md:py-20 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-gray-900 px-4">
          Are You Currently Struggling With...
        </h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm from-violet-50" style={{position: 'relative', '--border-gradient': 'linear-gradient(135deg, #fca5a5, #ef4444)', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-violet-50 text-violet-600">
<svg aria-hidden="true" className="lucide lucide-trending-down w-5 h-5 md:w-6 md:h-6" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 17h6v-6"></path>
<path d="m22 17-8.5-8.5-5 5L2 7"></path>
</svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-gray-900">
              [Problem 1]
            </h3>
<p className="text-gray-500 font-light leading-relaxed text-sm">
              You never know where your next client is coming from, creating
              revenue rollercoasters that stall growth.
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br to-white from-violet-50 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-violet-50 text-violet-600">
<svg aria-hidden="true" className="lucide lucide-users w-5 h-5 md:w-6 md:h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-gray-900">
              [Problem 2]
            </h3>
<p className="text-gray-500 font-light leading-relaxed text-sm">
              Tired of agencies that promise the world but deliver vague "brand
              awareness" instead of actual ROI.
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br to-white from-violet-50 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-violet-50 text-violet-600">
<svg aria-hidden="true" className="lucide lucide-clock w-5 h-5 md:w-6 md:h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-gray-900">
              [Problem 3]
            </h3>
<p className="text-gray-500 font-light leading-relaxed text-sm">
              You're too busy running the business to build complex marketing
              funnels or manage ad campaigns.
            </p>
</div>
</div>
</section>

<section className="py-12 md:py-20">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-5xl text-3xl font-medium text-gray-900 tracking-tight font-serif mb-4">
            Why Choose VeloxSys
          </h2>
<p className="text-gray-500 max-w-2xl mx-auto font-light text-sm md:text-base">
            We use a unique [Mechanism/System] that others simply can't
            replicate.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors bg-gradient-to-br from-white to-gray-50 h-64 border border-gray-200 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative hover:border-violet-200">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-gray-900 font-montserrat mb-3">
              [Benefit 1]
            </h3>
<p className="text-gray-500 font-light text-sm leading-relaxed z-10 relative">
              We don't guess. We use proprietary algorithms to identify your
              exact ICP and target them with surgical precision.
            </p>
<div className="mt-auto self-end transition-colors duration-500 transform group-hover:scale-110 group-hover:text-violet-500 text-violet-100">
<svg aria-hidden="true" className="lucide lucide-crosshair w-16 h-16 md:w-24 md:h-24 stroke-[1px]" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors bg-gradient-to-br from-white to-gray-50 h-64 border border-gray-200 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative hover:border-violet-200">
<h3 className="text-xl md:text-2xl font-montserrat font-medium mb-3 md:mb-4 text-gray-900">
              [Benefit 2]
            </h3>
<p className="text-gray-500 font-light text-sm leading-relaxed z-10 relative">
              Live dashboards. 24/7 access. You see every dollar spent and every
              lead generated in real-time.
            </p>
<div className="mt-auto self-end transition-colors duration-500 transform group-hover:scale-110 group-hover:text-violet-500 text-violet-100">
<svg aria-hidden="true" className="lucide lucide-monitor w-16 h-16 md:w-24 md:h-24 stroke-[1px]" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors bg-gradient-to-br from-white to-gray-50 h-64 border border-gray-200 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative hover:border-violet-200">
<h3 className="text-xl md:text-2xl font-montserrat font-medium mb-3 md:mb-4 text-gray-900">
              [Benefit 3]
            </h3>
<p className="text-gray-500 font-light text-sm leading-relaxed z-10 relative">
              We are so confident in our system that we put our own money on the
              line. If we don't hit KPIs, we work for free.
            </p>
<div className="mt-auto self-end transition-colors duration-500 transform group-hover:scale-110 group-hover:text-violet-500 text-violet-100">
<svg aria-hidden="true" className="lucide lucide-shield-check w-16 h-16 md:w-24 md:h-24 stroke-[1px]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 bg-gray-900 text-white hover:bg-violet-600" href="#contact">
            Book a Call
            <svg aria-hidden="true" className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
</a>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 rounded-[2rem] md:rounded-[2.5rem] border shadow-sm text-center bg-white border-gray-200/60">
<div className="max-w-3xl mx-auto">
<div className="inline-flex justify-center mb-6 md:mb-8 text-violet-500">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 md:w-12 md:h-12 fill-current opacity-20" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<h3 className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8 md:mb-10 italic text-gray-900 px-2">
            "We added [Specific Result] within just [Timeframe] of working with
            VeloxSys. Their systems are unlike anything we've seen before."
          </h3>
<div className="flex flex-col items-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4 overflow-hidden border-2 shadow-md bg-gray-200 border-white">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="font-montserrat font-semibold text-gray-900">
              [Client Name]
            </div>
<div className="text-xs md:text-sm font-light text-gray-400">
              [Position], [Company Name]
            </div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="process">
<div className="text-center mb-12 md:mb-16">
<span className="text-[10px] md:text-xs font-montserrat font-bold tracking-widest uppercase mb-3 block text-violet-600">
            Next Steps
          </span>
<h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900">
            How it Works
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-transparent -z-10 via-gray-200"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm transition-colors bg-white border-gray-200 text-gray-400 group-hover:border-violet-500 group-hover:text-violet-500">
              1
            </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-gray-900">
              Book a Call
            </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs px-4 md:px-0">
              We analyze your current situation and determine if our system is a
              fit for your specific growth goals.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm transition-colors bg-white border-gray-200 text-gray-400 group-hover:border-violet-500 group-hover:text-violet-500">
              2
            </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-gray-900">
              We Build The Engine
            </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs px-4 md:px-0">
              Our team deploys the custom infrastructure, creative assets, and
              tracking systems in under [X] days.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm transition-colors bg-white border-gray-200 text-gray-400 group-hover:border-violet-500 group-hover:text-violet-500">
              3
            </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-gray-900">
              You Get Scale
            </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs px-4 md:px-0">
              Leads start flowing automatically. You focus on closing deals and
              servicing clients while we handle growth.
            </p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg hover:shadow-xl bg-gray-900 text-white hover:shadow-violet-500/20 hover:bg-violet-600" href="#contact">
            Book Your Transformation
            <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section>

<section className="mb-16 md:mb-24 px-0 md:px-6">
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 py-10 md:p-20 border shadow-sm text-center relative overflow-hidden bg-white border-gray-200/60">
<div className="relative z-10">
<h2 className="text-2xl md:text-5xl font-serif font-medium mb-4 md:mb-6 tracking-tight text-gray-900">
              Exactly How We Scale [Metric]
            </h2>
<p className="text-sm md:text-lg text-gray-500 font-light mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Watch the video below to learn the exact process we follow to
              scale revenue.
            </p>
<div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-xl md:shadow-2xl overflow-hidden mb-8 md:mb-12 group cursor-pointer ring-1 bg-gray-900 border-white/50 ring-gray-900/5">
<img alt="Process Deep Dive" className="w-full h-full object-cover opacity-90 group-hover:opacity-75 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 md:w-24 md:h-24 backdrop-blur-md rounded-full flex items-center justify-center border shadow-xl transition-all duration-300 group-hover:scale-110 bg-white/30 border-white/50">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-sm pl-1 bg-white text-gray-900">
<svg aria-hidden="true" className="lucide lucide-play w-5 h-5 md:w-7 md:h-7 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg hover:shadow-xl bg-gray-900 text-white hover:shadow-violet-500/20 hover:bg-violet-600" href="#contact">
                Apply Now
                <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 -mx-4 md:-mx-6 px-4 md:px-6 rounded-[2.5rem] md:rounded-[3rem] bg-gray-50">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-gray-900">
            What's Included
          </h2>
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 border shadow-sm relative overflow-hidden bg-white border-gray-200">
<div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-gradient-to-b to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none from-violet-50/50"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="text-center mb-8 md:mb-12 max-w-3xl">
<span className="font-bold tracking-widest uppercase text-[10px] md:text-xs font-montserrat mb-4 block text-violet-600">
                  The Ecosystem
                </span>
<h3 className="text-2xl md:text-4xl font-serif mb-4 md:mb-6 text-gray-900">
                  All-In-One Growth Infrastructure
                </h3>
<p className="text-gray-500 font-light text-base md:text-lg">
                  We've consolidated our entire suite of growth tools into one
                  powerful partnership designed for maximum impact.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-y-4 gap-x-20 md:gap-y-6 w-full max-w-4xl mb-12 md:mb-16">
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-violet-50 text-violet-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      [Feature 1]
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-violet-50 text-violet-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      [Feature 2]
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-violet-50 text-violet-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      [Feature 3]
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-violet-50 text-violet-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      [Feature 4]
                    </span>
</li>
</ul>
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-violet-50 text-violet-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      [Feature 5]
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-violet-50 text-violet-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      [Feature 6]
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-violet-50 text-violet-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      24/7 Live Reporting
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-violet-50 text-violet-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-bold font-montserrat text-sm md:text-lg border-b-2 text-gray-900 border-violet-200">
                      [Guarantee Type]
                    </span>
</li>
</ul>
</div>
<div className="flex flex-col items-center w-full">
<a className="w-full md:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 shadow-xl font-montserrat font-medium flex items-center justify-center gap-3 group bg-gray-900 text-white hover:bg-violet-600 shadow-violet-900/10" href="#contact">
                  Secure Your Growth Partner
                  <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<p className="mt-4 md:mt-6 text-xs md:text-sm font-montserrat text-gray-400">
                  No long-term contracts. Cancel anytime.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-gray-900">
          What People Are Saying
        </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border shadow-sm bg-white border-gray-100">
<p className="text-gray-500 text-sm leading-relaxed italic mb-6">
              "Honestly, I was skeptical at first. But the numbers don't lie.
              Our calendar is completely full for the next 3 weeks."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200"></div>
<div>
<div className="text-sm font-bold text-gray-900">[Client Name]</div>
<div className="text-xs text-gray-400">Founder, [Company]</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border shadow-sm bg-white border-gray-100">
<p className="text-gray-500 text-sm leading-relaxed italic mb-6">
              "The best investment we made this year. The ROI tracking is
              phenomenal, we know exactly where every cent goes."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200"></div>
<div>
<div className="text-sm font-bold text-gray-900">[Client Name]</div>
<div className="text-xs text-gray-400">CMO, [Company]</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border shadow-sm bg-white border-gray-100">
<p className="text-gray-500 text-sm leading-relaxed italic mb-6">
              "VeloxSys team are wizards. They completely revamped our
              acquisition channel and lowered CAC by 40%."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200"></div>
<div>
<div className="text-sm font-bold text-gray-900">[Client Name]</div>
<div className="text-xs text-gray-400">CEO, [Company]</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-center border-t border-gray-100">
<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-5xl mb-6 md:mb-8 tracking-tight font-serif font-medium text-gray-900">
            Hi, I'm Mateo.
          </h2>
<div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-500 font-light leading-relaxed">
<p>
              I founded
              <span className="font-medium text-gray-900">VeloxSys</span>
              with one mission: to eliminate the guesswork in digital growth.
            </p>
<p>
              After managing over [Amount] in ad spend for [Previous
              Experience], I realized most agencies are broken. They focus on
              vanity metrics like "likes" instead of revenue. We built VeloxSys
              to change that.
            </p>
</div>
<button className="mt-6 md:mt-8 font-semibold border-b pb-0.5 transition-all text-violet-600 border-violet-200 hover:border-violet-600">
            Let's Talk!
          </button>
</div>
<div className="relative order-1 lg:order-2 h-64 md:h-[500px] w-full rounded-[2rem] overflow-hidden bg-gray-100">
<img alt="Founder" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</section>

<section className="py-16 md:py-20 mb-16 md:mb-20 rounded-[2rem] md:rounded-[2.5rem] text-center px-4 md:px-6 relative overflow-hidden bg-gray-900" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] via-gray-900 to-gray-900 from-violet-900/40"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl mb-4 md:mb-6 tracking-tight font-serif font-medium text-white">
            Get Your Free Audit
          </h2>
<p className="text-base md:text-lg mb-8 md:mb-10 font-light text-gray-400">
            We'll analyze your current funnel and show you exactly where you're
            leaving money on the table. No obligation.
          </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 border rounded-full px-6 py-3.5 md:py-4 placeholder-gray-500 focus:outline-none transition-colors backdrop-blur-sm bg-white/10 border-white/20 text-white focus:border-violet-500" placeholder="Enter your email" type="email"/>
<button className="md:py-4 transition-colors font-bold text-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg hover:bg-violet-500 shadow-violet-900/50 bg-violet-600" type="button">
              Get Audit
            </button>
</form>
</div>
</section>

<section className="max-w-3xl mx-auto py-8 md:py-10 mb-16 md:mb-24 px-2 md:px-6">
<h2 className="text-2xl md:text-3xl text-center mb-10 md:mb-12 tracking-tight font-serif font-medium text-gray-900">
          FAQs — Everything you need to know.
        </h2>
<div className="space-y-4">

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
              How fast can we expect results?
              <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
              Most clients see initial lead flow within [X] days of launch. Full
              optimization usually occurs by month 2, scaling aggressively in
              month 3.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
              Do you work with any industry?
              <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
              We specialize in [Target Niche 1] and [Target Niche 2]. This
              allows us to maintain our high success rate and revenue
              guarantees.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
              What is the guarantee exactly?
              <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
              If we don't hit the agreed-upon KPI ([Specific Metric]) within
              [Timeframe], we work for free until we do. It's written in the
              contract.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
              How much of my time is required?
              <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
              Very little. We need about [Time] for onboarding. After that, we
              just need you to handle the leads we generate.
            </div>
</details>
</div>
<p className="text-center text-sm mt-8 text-gray-400">
          Don't see what you're looking for?
          <a className="underline transition-all text-violet-600 decoration-violet-200 hover:decoration-violet-600" href="#">
            Get in touch
          </a>
          .
        </p>
</section>

<section className="mx-auto py-16 md:py-24 px-4 md:px-6 max-w-7xl" id="book-call">
<div className="text-center mb-10 md:mb-16">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900 mb-6 tracking-tight">
            Book a Call
          </h2>
<p className="text-base md:text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Book a no-commitment discovery call to discuss how we can help you
            grow.
          </p>
</div>
<div className="w-full bg-white rounded-[2rem] border border-gray-200 shadow-sm overflow-hidden">

<div className="calendly-inline-widget w-full" data-processed="true" data-url="https://calendly.com/lucas-clientascension/test?hide_gdpr_banner=1&amp;primary_color=e11d48" style={{position: 'relative', minWidth: '320px', height: '1000px', width: '100%'}}>
<div className="calendly-spinner">
<div className="calendly-bounce1"></div>
<div className="calendly-bounce2"></div>
<div className="calendly-bounce3"></div>
</div>
<iframe frameborder="0" height="100%" src="https://calendly.com/lucas-clientascension/test?embed_domain=&amp;embed_type=Inline&amp;hide_gdpr_banner=1&amp;primary_color=e11d48" title="Select a Date &amp; Time - Calendly" width="100%"></iframe>
</div>


</div>
</section>
</main>

<footer className="border-t pt-12 md:pt-16 pb-8 md:pb-10 px-4 md:px-6 bg-white border-gray-200">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-10">

<div className="text-center md:text-left">
<a className="font-serif text-2xl tracking-tight italic font-medium text-gray-900" href="#">
            VeloxSys.
          </a>
<p className="text-xs mt-3 max-w-xs font-light text-gray-400 mx-auto md:mx-0">
            Scaling revenue for ambitious brands through intelligent ecosystems.
          </p>
</div>

<div className="flex flex-col gap-3 text-center md:text-right">
<a className="text-sm transition-colors font-medium text-gray-600 hover:text-violet-600" href="#">
            Services
          </a>
<a className="text-sm transition-colors font-medium text-gray-600 hover:text-violet-600" href="#">
            Case Studies
          </a>
<a className="text-sm transition-colors font-medium text-gray-600 hover:text-violet-600" href="#">
            About
          </a>
<a className="text-sm transition-colors font-medium text-gray-600 hover:text-violet-600" href="#">
            Contact
          </a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t text-center text-[10px] md:text-xs font-montserrat border-gray-100 text-gray-400">
<p>© [Year] VeloxSys. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
