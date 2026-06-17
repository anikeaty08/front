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
      

<nav className="fixed top-0 inset-x-0 z-50 h-[80px] flex items-center bg-[#FFFEF9]/95 backdrop-blur-sm transition-all border-b border-transparent">
<div className="lg:px-12 flex w-full max-w-[1920px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex items-center">
<a className="flex items-baseline gap-0.5 group" href="#">
<span className="text-xl font-bold tracking-tight text-[#0F1E33]">Teamtailor</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#F43F85] mb-0.5 ml-0.5"></div>
</a>
</div>

<div className="hidden lg:flex items-center gap-1">
<button className="px-4 py-2.5 rounded-2xl hover:bg-black/[0.03] transition-colors flex items-center gap-1 group">
<span className="text-nav font-semibold text-gray-600 group-hover:text-[#0F1E33]">Product</span>
<svg className="lucide lucide-chevron-down w-3.5 h-3.5 text-gray-400 stroke-[3] mt-0.5 transition-transform group-hover:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<a className="px-4 py-2.5 rounded-2xl hover:bg-black/[0.03] transition-colors text-nav font-semibold text-gray-600 hover:text-[#0F1E33]" href="#">
                    Customers
                </a>
<a className="px-4 py-2.5 rounded-2xl hover:bg-black/[0.03] transition-colors text-nav font-semibold text-gray-600 hover:text-[#0F1E33]" href="#">
                    Pricing
                </a>
<button className="px-4 py-2.5 rounded-2xl hover:bg-black/[0.03] transition-colors flex items-center gap-1 group">
<span className="text-nav font-semibold text-gray-600 group-hover:text-[#0F1E33]">Resources</span>
<svg className="lucide lucide-chevron-down w-3.5 h-3.5 text-gray-400 stroke-[3] mt-0.5 transition-transform group-hover:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:block text-nav font-semibold text-gray-600 hover:text-[#0F1E33]" href="#">Log in</a>
<a className="bg-[#F43F85] hover:bg-[#D92D6E] transition-colors text-white text-nav font-semibold px-5 py-3 rounded-xl flex items-center shadow-md shadow-[#F43F85]/20" href="#">
                    Book a demo
                </a>
</div>
</div>
</nav>

<main className="w-full flex-grow pt-32 lg:pt-[160px] pb-24">

<section className="flex flex-col items-center max-w-[1920px] mx-auto px-6 lg:px-12">

<div className="max-w-[1060px] text-center flex flex-col items-center gap-6 animate-fade-in-up">
<h1 className="text-hero font-semibold text-[#0F1E33] tracking-tighter">
  Grow faster.<br/>Build your dream team.
</h1>
<p className="text-subtitle-lg font-semibold text-[#71717A] max-w-[750px] mr-auto ml-auto">
                    Meet the AI-powered ATS loved by hiring managers, recruiters and candidates alike.
                </p>
</div>

<div className="w-full max-w-[1400px] mt-16 relative">

<div className="relative w-full aspect-[16/9] lg:aspect-[2/1] rounded-3xl overflow-hidden shadow-2xl shadow-[#0F1E33]/10 bg-white border border-gray-100/50">

<div className="absolute top-0 left-0 right-0 h-16 border-b border-gray-100 bg-white flex items-center px-6 gap-4 z-20">
<div className="w-32 h-3 bg-gray-100 rounded-full"></div>
<div className="ml-auto flex gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100"></div>
<div className="w-8 h-8 rounded-full bg-[#F43F85]/10"></div>
</div>
</div>

<div className="absolute top-16 left-0 bottom-0 w-64 border-r border-gray-100 bg-gray-50/50 hidden lg:block z-10 p-6 flex flex-col gap-4">
<div className="w-full h-8 bg-white rounded-lg shadow-sm"></div>
<div className="w-full h-8 bg-transparent"></div>
<div className="w-full h-8 bg-transparent"></div>
<div className="w-3/4 h-8 bg-transparent"></div>
</div>

<div className="absolute top-16 left-0 lg:left-64 right-0 bottom-0 bg-[#F9FAFB] p-8 overflow-hidden">
<div className="flex gap-6 h-full">

<div className="w-72 flex flex-col gap-4">
<div className="flex justify-between items-center mb-2">
<div className="w-20 h-4 bg-gray-200 rounded-full"></div>
<div className="w-6 h-4 bg-gray-200 rounded-full"></div>
</div>
<div className="h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col gap-3">
<div className="w-12 h-12 rounded-full bg-orange-100"></div>
<div className="w-3/4 h-3 bg-gray-100 rounded-full"></div>
<div className="w-1/2 h-3 bg-gray-100 rounded-full"></div>
</div>
<div className="h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col gap-3">
<div className="w-12 h-12 rounded-full bg-blue-100"></div>
<div className="w-2/3 h-3 bg-gray-100 rounded-full"></div>
</div>
</div>

<div className="w-72 flex flex-col gap-4 pt-8">
<div className="flex justify-between items-center mb-2">
<div className="w-24 h-4 bg-[#F43F85]/20 rounded-full"></div>
<div className="w-6 h-4 bg-gray-200 rounded-full"></div>
</div>
<div className="h-40 bg-white rounded-xl shadow-lg ring-1 ring-[#F43F85]/20 p-4 flex flex-col gap-3 relative">
<div className="absolute -right-2 -top-2 w-6 h-6 bg-[#F43F85] rounded-full flex items-center justify-center text-white text-[10px]">1</div>
<div className="flex gap-3 items-center">
<div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
<img className="opacity-80 object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83a1ae5f-c842-4ee9-a912-505fc66a1ee0_320w.webp"/>
</div>
<div className="flex flex-col gap-1.5 flex-1">
<div className="w-full h-2.5 bg-gray-800 rounded-full"></div>
<div className="w-2/3 h-2 bg-gray-200 rounded-full"></div>
</div>
</div>
<div className="mt-auto flex gap-2">
<div className="px-2 py-1 bg-green-50 text-green-600 text-[10px] rounded font-medium">Strong Yes</div>
</div>
</div>
</div>

<div className="w-72 flex flex-col gap-4">
<div className="flex justify-between items-center mb-2">
<div className="w-20 h-4 bg-gray-200 rounded-full"></div>
</div>
<div className="h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-4 opacity-60"></div>
<div className="h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-4 opacity-60"></div>
</div>
</div>
</div>

<div className="absolute bottom-10 right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce-slow">
<div className="w-10 h-10 rounded-full bg-[#F43F85] flex items-center justify-center text-white">
<svg className="lucide lucide-check w-6 h-6 stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-sm font-bold text-[#0F1E33]">Candidate Hired</span>
<span className="text-xs text-gray-500">Just now</span>
</div>
</div>
</div>
</div>

<div className="mt-24 w-full max-w-[1400px] flex flex-col gap-8">
<p className="text-nav font-semibold text-[#71717A]">
                    Loved by 12,000+ companies
                </p>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-8 flex items-center">
<svg className="h-full w-auto" fill="currentColor" viewbox="0 0 100 30">
<path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H90 V10 H40 Z M40,20 H70 V25 H40 Z" fill="#0F1E33"></path>
</svg>
</div>
<div className="h-8 flex items-center">
<svg className="h-full w-auto" fill="currentColor" viewbox="0 0 100 30">
<circle cx="15" cy="15" fill="#0F1E33" r="10"></circle>
<rect fill="#0F1E33" height="10" width="50" x="35" y="10"></rect>
</svg>
</div>
<div className="h-7 flex items-center">
<svg className="h-full w-auto" fill="currentColor" viewbox="0 0 100 30">
<path d="M10,25 L15,5 L20,25 M25,5 L25,25 M35,5 L45,5 L45,10 L35,10 L35,12 L42,12 L42,17 L35,17 L35,25" stroke="#0F1E33" strokeWidth="4"></path>
</svg>
</div>
<div className="h-8 flex items-center">
<svg className="h-full w-auto" fill="currentColor" viewbox="0 0 100 30">
<rect fill="#0F1E33" height="20" rx="5" width="20" x="5" y="5"></rect>
<rect fill="#0F1E33" height="10" width="60" x="35" y="10"></rect>
</svg>
</div>
<div className="h-6 flex items-center">
<svg className="h-full w-auto" fill="currentColor" viewbox="0 0 100 30">
<circle cx="15" cy="15" fill="none" r="8" stroke="#0F1E33" strokeWidth="3"></circle>
<circle cx="35" cy="15" fill="none" r="8" stroke="#0F1E33" strokeWidth="3"></circle>
<rect fill="#0F1E33" height="8" width="40" x="55" y="11"></rect>
</svg>
</div>
</div>
</div>
</section>

<section className="mt-32 max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
<div className="relative flex-shrink-0 group">
<div className="absolute inset-0 bg-[#F43F85] rounded-full opacity-0 group-hover:opacity-10 scale-110 transition-all duration-500"></div>
<img alt="Testimonial" className="w-32 h-32 lg:w-[200px] lg:h-[200px] rounded-full object-cover shadow-lg border-4 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5e2cd53-1280-4e45-9b70-c6b57219d0a6_800w.webp"/>
</div>
<div className="flex flex-col gap-6 text-center lg:text-left">
<blockquote className="text-[32px] lg:text-[40px] leading-tight font-semibold text-[#0F1E33] tracking-tight">
                    "I had a demo with Teamtailor and was pretty much in love with it from then on. It makes hiring human again."
                </blockquote>
<div className="flex flex-col gap-1">
<h3 className="text-lg font-bold text-[#0F1E33]">Helen Graham</h3>
<p className="text-lg text-gray-500 font-medium">Head of People, Home Made</p>
</div>
</div>
</section>
</main>


    </>
  );
}
