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
      

<div className="grain-overlay"></div>

<main className="w-full max-w-[1440px] bg-[#F4F1EA] lg:rounded-[2.5rem] rounded-3xl shadow-sm overflow-hidden min-h-[95vh] flex flex-col relative border border-stone-200/50">

<header className="lg:px-10 lg:py-8 flex flex-col lg:flex-row gap-6 lg:items-center z-20 w-full pt-6 pr-6 pb-6 pl-6 relative gap-x-6 gap-y-6 justify-between">
<div className="flex flex-col lg:flex-row w-full lg:w-auto gap-4 lg:gap-0 fade-up items-center lg:items-stretch">

<div className="flex shrink-0 z-10 lg:mr-4 hover:rotate-3 transition-transform duration-300 cursor-pointer bg-white/50 w-30 h-15 border-stone-900/10 border rounded-lg shadow-sm backdrop-blur-sm items-center justify-center">
<img alt="Gentle Brass Logo" className="opacity-90 w-20 h-10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b593c475-bb9b-4930-9908-a3fcccbefbda_320w.png"/>
</div>

<nav className="flex lg:w-auto lg:py-0 bg-white/60 w-full border-stone-900/5 border rounded-full pt-2 pr-6 pb-2 pl-6 shadow-sm backdrop-blur-md items-center justify-center">
<ul className="flex flex-wrap justify-center gap-4 lg:gap-8 text-sm font-semibold tracking-tight text-stone-900">
<li className=""><a className="hover:text-[#B55D30] transition-colors block lg:py-3 pt-2 pb-2" href="#">Works</a></li>
<li className=""><a className="hover:text-[#B55D30] transition-colors block py-2 lg:py-3" href="#">Services</a></li>
<li className=""><a className="hover:text-[#B55D30] transition-colors block py-2 lg:py-3" href="#">News</a></li>
<li className=""><a className="hover:text-[#B55D30] transition-colors block py-2 lg:py-3" href="#">Lessons</a></li>
<li className=""><a className="hover:text-[#B55D30] transition-colors block py-2 lg:py-3" href="#">Contact</a></li>
</ul>
</nav>
</div>

<div className="flex gap-2 fade-up delay-100 justify-center w-full lg:w-auto">
<a className="hover:bg-stone-900 hover:text-[#F4F1EA] flex items-center justify-center transition-all duration-300 group bg-white/40 w-12 h-12 border-stone-900/10 border rounded-full shadow-sm" href="#">
<svg className="lucide lucide-mail w-5 h-5" data-darkreader-inline-stroke="" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
<a className="hover:bg-stone-900 hover:text-[#F4F1EA] flex items-center justify-center transition-all duration-300 group bg-white/40 w-12 h-12 border-stone-900/10 border rounded-full shadow-sm" href="#">
<svg className="lucide lucide-music w-5 h-5" data-darkreader-inline-stroke="" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</a>
<a className="group inline-flex items-center justify-center overflow-hidden transition duration-300 ease-out hover:bg-stone-900 hover:text-[#F4F1EA] font-semibold text-stone-900 bg-white/40 h-12 border-stone-900/10 border rounded-full pr-6 pl-6 relative shadow-sm" href="#">
<span className="text-base tracking-wide">Sign Up</span>
</a>
</div>
</header>

<div className="flex flex-col gap-0 relative z-10">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 lg:px-10 pt-4 pr-6 pb-12 pl-6 gap-x-8 gap-y-8">

<div className="lg:col-span-7 flex flex-col pt-2 justify-between">

<div className="relative space-y-6">
<div className="absolute -left-4 -top-4 w-20 h-20 bg-[#B55D30]/10 rounded-full blur-2xl"></div>
<h1 className="lg:text-[5.5rem] leading-[0.95] fade-up delay-100 text-5xl font-medium text-stone-900 tracking-tight">
                            雋銅
                            Gentle Brass
                            <span className="block lg:text-6xl transform -translate-x-1 text-4xl italic text-stone-400 font-serif mt-2 ml-2">resonate forever.</span>
</h1>
<div className="flex items-center gap-4 mt-6 fade-up delay-200">
<span className="text-2xl italic text-[#c2b7b7] font-poppins">since 2018</span>
<span className="h-px w-16 bg-stone-300"></span>
<p className="leading-relaxed text-base text-[#b3adad] max-w-xs">輕鬆享受好音樂，打造更美好的生活節奏。</p>
</div>
</div>

<div className="flex h-40 lg:h-56 gap-0 mt-12 mb-8 w-full lg:w-[95%] overflow-hidden group fade-up delay-300">
<div className="w-1/4 h-full bg-stone-200 rounded-full overflow-hidden relative mr-[-1px] transition-all duration-500 hover:w-[40%] grayscale hover:grayscale-0">
<img alt="Brass detail" className="w-full h-full object-cover scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed75f2a4-eee6-4398-8743-9ba42a0e924f_800w.png"/>
</div>
<div className="w-1/4 h-full bg-stone-300 rounded-full overflow-hidden relative mr-[-1px] transition-all duration-500 hover:w-[40%] grayscale hover:grayscale-0">
<img alt="Studio" className="w-full h-full object-cover scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c62c01bf-6d02-4edc-a6ff-4add98ac23a9_800w.png"/>
</div>
<div className="w-1/4 h-full bg-stone-400 rounded-full overflow-hidden relative mr-[-1px] transition-all duration-500 hover:w-[40%] grayscale hover:grayscale-0">
<img alt="Cello" className="w-full h-full object-cover scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7825d205-8ce7-4bbe-b209-99429fb94c0a_800w.png"/>
</div>
<div className="w-1/4 h-full bg-stone-500 rounded-full overflow-hidden relative mr-[-1px] transition-all duration-500 hover:w-[40%] grayscale hover:grayscale-0">
<img alt="Concert" className="w-full h-full object-cover scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04432be4-899c-4f87-83fb-c175e86efac4_800w.png"/>
</div>
</div>
</div>

<div className="lg:col-span-5 relative fade-up delay-200 group h-[500px] lg:h-auto">
<div className="h-full w-full rounded-[2rem] overflow-hidden relative shadow-lg transform transition-transform duration-700 hover:scale-[1.02]">
<img alt="Music room" className="transition-transform duration-1000 group-hover:scale-110 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15831112-dddc-4086-b45c-9fc4154b510e_800w.jpg"/>

<div className="flex text-[#F4F1EA] bg-white/10 border-white/20 border rounded-2xl pt-4 pr-4 pb-4 pl-4 absolute right-6 bottom-6 left-6 backdrop-blur-md items-center justify-between">
<div className="">
<p className="uppercase text-xs font-medium tracking-wider opacity-80">Up Coming ...............</p>
<p className="text-xl font-serif">嘉義親子藝術節</p>
</div>
<div className="h-10 w-10 bg-[#F4F1EA] rounded-full flex items-center justify-center text-stone-900">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-darkreader-inline-stroke="" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="overflow-hidden flex bg-stone-100/50 w-full border-stone-200 border-t pt-6 pb-6 relative items-center">
<div className="flex whitespace-nowrap animate-scroll gap-x-16 gap-y-16 items-center">
<span className="text-4xl italic text-stone-300 font-serif">Harmony</span>
<span className="text-lg font-medium text-stone-800 uppercase tracking-widest">•</span>
<span className="text-4xl font-serif text-stone-300 italic">Rhythm</span>
<span className="text-lg font-medium text-stone-800 uppercase tracking-widest">•</span>
<span className="text-4xl italic text-stone-300 font-serif">Brass</span>
<span className="text-lg font-medium text-stone-800 uppercase tracking-widest">•</span>
<span className="text-4xl italic text-stone-300 font-serif">Ensemble</span>
<span className="text-lg font-medium text-stone-800 uppercase tracking-widest">•</span>
<span className="text-4xl italic text-stone-300 font-serif">Orchestra</span>
<span className="text-lg font-medium text-stone-800 uppercase tracking-widest">•</span>
<span className="text-4xl italic text-stone-300 font-serif">Harmony</span>
<span className="text-lg font-medium text-stone-800 uppercase tracking-widest">•</span>
<span className="text-4xl italic text-stone-300 font-serif">Rhythm</span>
<span className="text-lg font-medium text-stone-800 uppercase tracking-widest">•</span>
<span className="text-4xl italic text-stone-300 font-serif">Brass</span>
<span className="text-lg font-medium text-stone-800 uppercase tracking-widest">•</span>
<span className="text-4xl italic text-stone-300 font-serif">Ensemble</span>
<span className="text-lg font-medium text-stone-800 uppercase tracking-widest">•</span>
<span className="text-4xl italic text-stone-300 font-serif">Orchestra</span>
<span className="text-lg font-medium text-stone-800 uppercase tracking-widest">•</span>
<span className="text-4xl italic text-stone-300 font-serif">Harmony</span>
<span className="text-lg font-medium text-stone-800 uppercase tracking-widest">•</span>
<span className="text-4xl italic text-stone-300 font-serif">Rhythm</span>
<span className="text-lg font-medium text-stone-800 uppercase tracking-widest">•</span>
</div>
<div className="z-10 bg-gradient-to-r from-[#F4F1EA] to-transparent w-32 absolute top-0 bottom-0 left-0"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F4F1EA] to-transparent z-10"></div>
</div>

<section className="lg:px-10 flex flex-col border-stone-200/60 border-b pt-16 pr-6 pb-16 pl-6 gap-x-10 gap-y-10">

<div className="flex flex-col lg:flex-row gap-x-6 gap-y-6 items-end justify-between">
<h2 className="leading-[0.95] -translate-y-12 lg:text-5xl -translate-y-2 text-4xl font-medium text-stone-900 font-serif max-w-lg translate-x-1">品牌服務</h2>
<div className="flex flex-col items-end gap-6 w-full lg:w-auto">
<p className="leading-relaxed hidden lg:block text-xl font-light text-right max-w-sm ml-auto">音樂讓人相遇，也為生活增添溫度。</p>
<div className="flex gap-3 self-end">
<button className="flex hover:bg-stone-900 hover:text-[#F4F1EA] transition-colors group bg-white/40 w-14 h-14 border-stone-900/10 border rounded-full items-center justify-center">
<svg className="lucide lucide-arrow-left stroke-1 w-[24px] h-[24px]" data-darkreader-inline-stroke="" data-icon-replaced="true" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', '--darkreader-inline-stroke': 'currentColor', color: 'rgb(71, 85, 105)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-14 h-14 rounded-full border border-stone-900/10 flex items-center justify-center hover:bg-stone-900 hover:text-[#F4F1EA] transition-colors group bg-white/40">
<svg className="lucide lucide-arrow-right stroke-1 w-[24px] h-[24px] text-slate-600" data-darkreader-inline-stroke="" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', '--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="flex overflow-x-auto gap-6 -mx-6 lg:-mx-10 lg:px-10 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing pr-6 pb-8 pl-6 gap-x-6 gap-y-6">

<div className="snap-center shrink-0 w-[85vw] md:w-[450px] h-[600px] rounded-[2.5rem] relative overflow-hidden group select-none">
<img alt="Concert Interior" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/730b4bae-af91-438f-804a-bea26e0e6515_1600w.png"/>
<div className="bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="text-white bg-[#2d2a26]/30 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 absolute right-6 bottom-6 left-6 shadow-xl backdrop-blur-md">
<h3 className="leading-tight text-2xl font-serif mb-1">聲響工作室</h3>
<div className="text-[11px] uppercase font-medium text-stone-300 tracking-wider opacity-70 border-white/10 border-t pt-3 space-y-1">
<p className="">聲音工程</p>
<p className="cursor-pointer" onclick="window.location.href='/錄音設備';window.location.href='/'" role="button">錄音設備</p>
<p className="">活動音響</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[450px] h-[600px] rounded-[2.5rem] relative overflow-hidden group select-none">
<img alt="Loft Studio" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d18ad428-c04b-46aa-8841-9e8c4ccd0570_1600w.jpg" style={{}}/>
<div className="bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-white bg-[#6b4c3e]/40 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 absolute right-6 bottom-6 left-6 shadow-xl backdrop-blur-md">
<h3 className="leading-tight"></h3>
<p className="text-2xl font-serif mb-1">展演活動</p>
<div className="space-y-1 text-[11px] uppercase tracking-wider font-medium opacity-70 border-t border-white/10 pt-3 text-stone-300">
<p className="">音樂展演製作</p>
<p className="">市集籌備規劃</p>
<p className="">活動標案設計</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[450px] h-[600px] rounded-[2.5rem] relative overflow-hidden group select-none">
<img alt="Garden Event" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f00f457-73e7-47fd-83fc-4abfaec7e028_1600w.png"/>
<div className="bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 right-6 bg-[#4a5e4d]/40 backdrop-blur-md border border-white/10 p-6 rounded-3xl text-white shadow-xl">
<h3 className="leading-tight text-2xl font-serif mb-1">課程學習</h3>
<div className="text-[11px] uppercase font-medium text-stone-300 tracking-wider opacity-70 border-white/10 border-t pt-3 space-y-1">
<p className="">國樂 · 銅管樂器</p>
<p className="">吉他 · 烏克麗麗</p>
<p className="">樂理 · 音樂鑑賞</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[450px] h-[600px] rounded-[2.5rem] relative overflow-hidden group select-none">
<img alt="Hall" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1595064085577-7c2ef98ec311?q=80&amp;w=1664&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 right-6 bg-[#262626]/40 backdrop-blur-md border border-white/10 p-6 rounded-3xl text-white shadow-xl">
<h3 className="text-2xl font-serif mb-1 leading-tight">The Residency</h3>
<p className="text-stone-200 text-sm mb-4 font-light opacity-90">International Collaboration</p>
<div className="space-y-1 text-[11px] uppercase tracking-wider font-medium opacity-70 border-t border-white/10 pt-3 text-stone-300">
<p>Artists: 25 Musicians</p>
<p>Budget: Grant Funded</p>
<p>City: "Taipei Main Station"</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 mt-2 gap-x-8 gap-y-8 items-center justify-between">

<div className="flex gap-0 items-center group cursor-pointer w-full md:w-auto">
<button className="pl-8 pr-6 py-5 rounded-l-full border-l border-y border-stone-900 text-stone-900 font-semibold tracking-wide text-xs hover:bg-stone-900 hover:text-[#F4F1EA] transition-all uppercase bg-transparent">
                             View All Projects
                         </button>
<div className="w-16 h-[58px] rounded-r-full border border-stone-900 flex items-center justify-center hover:bg-stone-900 hover:text-[#F4F1EA] transition-colors bg-transparent -ml-[1px]">
<svg className="lucide lucide-arrow-up-right w-6 h-6 stroke-1 group-hover:rotate-45 transition-transform duration-300" data-darkreader-inline-stroke="" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>

<div className="hidden md:flex gap-3">
<div className="grid grid-cols-4 gap-2">
<div className="w-5 h-5 rounded-full bg-[#B55D30]"></div>
<div className="w-5 h-5 rounded-full bg-[#B55D30]"></div>
<div className="w-5 h-5 rounded-full bg-[#B55D30]"></div>
<div className="w-5 h-5 rounded-full bg-[#B55D30]"></div>
<div className="w-5 h-5 rounded-full bg-[#B55D30]"></div>
<div className="w-5 h-5 rounded-full bg-[#B55D30]"></div>
<div className="w-5 h-5 rounded-full bg-[#B55D30]"></div>
<div className="w-5 h-5 rounded-full bg-[#B55D30]"></div>
</div>
<div className="flex flex-col justify-between py-1">
</div>
</div>
</div>
</section>

<div className="lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] pt-16 pr-6 pb-16 pl-6 gap-x-4 gap-y-4">

<div className="lg:col-span-2 row-span-1 flex flex-col group hover:border-stone-400 transition-colors overflow-hidden bg-white border-stone-200 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative justify-between">
<img alt="Background texture" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8a7717f-555a-49c9-ac3c-349571045861_1600w.jpg"/>
<div className="flex justify-between items-start relative z-10">
<h3 className="font-serif text-4xl tracking-wider bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-black to-black/50 xl:bg-clip-text xl:text-transparent">樂齡學程</h3>
<div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors bg-white/40 backdrop-blur-sm">
<svg className="lucide lucide-graduation-cap w-5 h-5" data-darkreader-inline-stroke="" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
</div>
<p className="z-10 text-base font-light text-slate-900 tracking-normal relative">西洋樂器 | 國樂 | 音樂理論 | 音樂鑑賞</p>
</div>

<div className="bg-[#B55D30] p-8 rounded-[2rem] flex flex-col justify-center items-center text-[#F4F1EA] text-center relative overflow-hidden group">
<div className="opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] absolute top-0 right-0 bottom-0 left-0"></div>
<span className="z-10 text-5xl font-serif mb-2 relative">1000+</span>
<span className="text-sm uppercase tracking-widest opacity-80 relative z-10">Performances</span>
</div>

<div className="bg-stone-800 p-1 rounded-[2rem] overflow-hidden relative group">
<img alt="Cello" className="group-hover:opacity-80 transition-opacity opacity-60 w-full h-full object-cover rounded-[1.8rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7825d205-8ce7-4bbe-b209-99429fb94c0a_800w.png"/>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-2xl font-thin tracking-wide translate-y-3">空間租借 </p>
</div>
</div>

<div className="lg:col-span-1 lg:row-span-2 bg-stone-200 rounded-[2rem] overflow-hidden relative group">
<img alt="Concert Hall" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d178e907-0fcb-4331-baf1-3438d8e5e72e_800w.png"/>
<div className="flex flex-col bg-gradient-to-t from-stone-900/80 to-transparent pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-2xl text-white font-serif mb-2">Event Planning</h3>
<p className="text-sm text-stone-300">Full scale orchestral management for corporate and private events.</p>
</div>
</div>

<div className="lg:col-span-3 flex flex-col md:flex-row overflow-hidden group bg-stone-900 rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative gap-x-6 gap-y-6 items-center justify-between">
<div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 bg-stone-800 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
<div className="relative z-10 max-w-md">
<h3 className="text-3xl text-[#F4F1EA] font-serif mb-3">Ready to resonate?</h3>
<p className="text-stone-400">Join our community or book us for your next masterpiece event.</p>
</div>
<div className="flex gap-4 relative z-10">
<button className="px-8 py-4 bg-[#F4F1EA] text-stone-900 rounded-full font-medium hover:bg-[#B55D30] hover:text-white transition-colors">
                            Get Consultation
                        </button>
<button className="h-14 w-14 border border-stone-700 rounded-full flex items-center justify-center text-[#F4F1EA] hover:bg-stone-800 transition-colors">
<svg className="lucide lucide-arrow-right w-6 h-6" data-darkreader-inline-stroke="" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<footer className="px-6 lg:px-10 pb-10 pt-4 flex flex-col md:flex-row justify-between items-end gap-6 border-t border-stone-200/60 mx-10 mt-4">
<div className="">
<span className="block text-2xl font-medium tracking-tight font-serif mb-2">GB</span>
<p className="text-xs text-stone-500">© 2024 Gentle Brass Inc. All rights reserved.</p>
</div>
<div className="flex gap-6 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900" href="#">Privacy</a>
<a className="hover:text-stone-900" href="#">Terms</a>
<a className="hover:text-stone-900" href="#">Instagram</a>
</div>
</footer>
</div>
</main>



    </>
  );
}
