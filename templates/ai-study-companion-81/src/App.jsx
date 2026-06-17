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
      

<div className="w-full overflow-hidden bg-[#F2F0ED] border-b border-stone-200 py-2.5">
<div className="flex w-max animate-scroll gap-12 whitespace-nowrap">

<div className="flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-widest">
<svg className="lucide lucide-sparkles h-3 w-3 text-rose-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Now with GPT-4o</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-widest">
<svg className="lucide lucide-zap h-3 w-3 text-rose-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>50% Faster Processing</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-widest">
<svg className="lucide lucide-graduation-cap h-3 w-3 text-rose-500" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<span>Trusted by 10,000+ Students</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-widest">
<svg className="lucide lucide-sparkles h-3 w-3 text-rose-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Now with GPT-4o</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-widest">
<svg className="lucide lucide-zap h-3 w-3 text-rose-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>50% Faster Processing</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-widest">
<svg className="lucide lucide-graduation-cap h-3 w-3 text-rose-500" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<span>Trusted by 10,000+ Students</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-widest">
<svg className="lucide lucide-sparkles h-3 w-3 text-rose-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Now with GPT-4o</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-widest">
<svg className="lucide lucide-zap h-3 w-3 text-rose-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>50% Faster Processing</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-widest">
<svg className="lucide lucide-graduation-cap h-3 w-3 text-rose-500" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<span>Trusted by 10,000+ Students</span>
</div>
</div>
</div>

<nav className="fixed top-12 left-0 right-0 z-50 flex justify-center px-4">
<div className="flex items-center gap-1 rounded-full bg-stone-900/90 p-1.5 px-2 shadow-xl shadow-stone-900/10 backdrop-blur-md transition-all hover:scale-[1.02]">
<a className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-stone-800" href="#">
<svg className="lucide lucide-cherry h-3.5 w-3.5 text-rose-400" data-lucide="cherry" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"></path><path d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"></path><path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"></path><path d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"></path></svg>
<span>Home</span>
</a>
<a className="hidden rounded-full px-4 py-2 text-xs font-medium text-stone-300 transition-colors hover:bg-stone-800 hover:text-white sm:block" href="#features">Features</a>
<a className="hidden rounded-full px-4 py-2 text-xs font-medium text-stone-300 transition-colors hover:bg-stone-800 hover:text-white sm:block" href="#pricing">Pricing</a>
<a className="ml-1 rounded-full bg-white px-5 py-2 text-xs font-semibold text-stone-900 shadow-sm transition-transform hover:bg-rose-50" href="#">
                Book Demo
            </a>
</div>
</nav>

<section className="md:pt-40 md:pb-32 pt-32 pr-6 pb-20 pl-6 relative">
<div className="mx-auto max-w-4xl text-center">
<h1 className="mx-auto mb-8 max-w-3xl text-6xl font-semibold tracking-tighter text-stone-900 md:text-7xl lg:text-[5.5rem] leading-[1.05]">
                Design your perfect <br/>
<span className="text-stone-400">study routine.</span>
</h1>
<p className="mx-auto mb-10 max-w-lg text-xl text-stone-500 font-normal leading-relaxed">
                The AI companion that turns chaotic lectures into structured notes, quizzes, and clarity.
            </p>
<div className="flex flex-col items-center justify-center gap-4">
<button className="group relative overflow-hidden rounded-full bg-stone-900 px-8 py-4 text-sm font-medium text-white shadow-2xl shadow-stone-900/20 transition-all hover:bg-stone-800 hover:-translate-y-0.5">
<span className="relative z-10 flex items-center gap-2">
                        Start Learning Free
                        <svg className="lucide lucide-arrow-right h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>

<div className="mt-20 relative mx-auto max-w-5xl">

<div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-rose-100/50 to-transparent blur-3xl opacity-60"></div>
<div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl shadow-stone-200/50">

<div className="flex items-center justify-between border-b border-stone-100 bg-[#FBFBFB] px-4 py-3">
<div className="flex gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-stone-200"></div>
<div className="h-2.5 w-2.5 rounded-full bg-stone-200"></div>
<div className="h-2.5 w-2.5 rounded-full bg-stone-200"></div>
</div>
<div className="text-[10px] font-medium text-stone-400 tracking-wide uppercase">Cherry Note Alpha</div>
<div className="w-10"></div>
</div>

<div className="flex h-[400px] md:h-[550px]">

<div className="hidden w-64 flex-col border-r border-stone-100 bg-[#F9F9F8] p-5 md:flex">
<div className="mb-8">
<div className="flex items-center gap-2 text-sm font-semibold text-stone-900">
<span className="flex h-6 w-6 items-center justify-center rounded-md bg-stone-200 text-stone-500"><svg className="lucide lucide-layout-grid h-3 w-3" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg></span>
                                Library
                            </div>
</div>
<div className="space-y-6">
<div>
<h3 className="px-1 text-[10px] font-semibold uppercase tracking-wider text-stone-400">This Semester</h3>
<div className="mt-3 space-y-1">
<div className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-xs font-medium text-stone-900 shadow-sm ring-1 ring-stone-100">
<div className="flex items-center gap-2">
<svg className="lucide lucide-microscope h-3.5 w-3.5 text-rose-500" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
                                            Biology 101
                                        </div>
<span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span>
</div>
<div className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-stone-500 hover:bg-stone-100">
<svg className="lucide lucide-book h-3.5 w-3.5 text-stone-400" data-lucide="book" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
                                        Art History
                                    </div>
<div className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-stone-500 hover:bg-stone-100">
<svg className="lucide lucide-calculator h-3.5 w-3.5 text-stone-400" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
                                        Calculus II
                                    </div>
</div>
</div>
</div>
<div className="mt-auto">
<div className="rounded-xl bg-stone-200/50 p-4">
<p className="text-[10px] font-medium text-stone-500">Storage Used</p>
<div className="mt-2 h-1 w-full rounded-full bg-stone-200">
<div className="h-1 w-[70%] rounded-full bg-stone-900"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-hidden bg-white p-8">
<div className="mx-auto max-w-2xl">
<div className="flex items-start justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-stone-900">Cellular Respiration</h2>
<p className="mt-1 text-sm text-stone-400">Generated 2m ago from "Lecture_05.mp4"</p>
</div>
<div className="flex items-center gap-2">
<button className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-stone-400 hover:text-stone-900"><svg className="lucide lucide-share h-3.5 w-3.5" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg></button>
<button className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-stone-400 hover:text-stone-900"><svg className="lucide lucide-more-horizontal h-3.5 w-3.5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</div>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">

<div className="col-span-2 rounded-xl bg-stone-50 p-6 border border-stone-100">
<div className="flex items-center gap-2 mb-3">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-600">
<svg className="lucide lucide-sparkles h-3 w-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-xs font-bold text-stone-900">AI Summary</span>
</div>
<p className="text-sm leading-relaxed text-stone-600">
                                        Mitochondria are the powerhouses of the cell, generating ATP through oxidative phosphorylation. This process is crucial for providing the energy required for various cellular functions.
                                    </p>
</div>

<div className="rounded-xl border border-stone-100 bg-white p-5 shadow-sm transition-hover hover:border-stone-200">
<div className="text-2xl font-semibold text-stone-900">24</div>
<div className="text-xs font-medium text-stone-400 mt-1">Flashcards created</div>
</div>

<div className="rounded-xl border border-stone-100 bg-white p-5 shadow-sm transition-hover hover:border-stone-200">
<div className="text-2xl font-semibold text-stone-900">92%</div>
<div className="text-xs font-medium text-stone-400 mt-1">Quiz Score</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-stone-200 bg-white py-24" id="features">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-16 text-center">
<span className="mb-3 inline-block rounded-full bg-stone-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-stone-500">Methodology</span>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">Built for serious learners</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2">

<div className="group border-b border-stone-100 p-10 md:border-r transition-colors hover:bg-stone-50/50">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F2F0] text-stone-900">
<svg className="lucide lucide-upload-cloud h-5 w-5 stroke-[1.5]" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
</div>
<h3 className="mb-3 text-lg font-medium text-stone-900">Upload Anything</h3>
<p className="text-stone-500 leading-relaxed text-base font-light">
                        Drag and drop PDFs, MP3s, or paste YouTube links. We handle the formatting and structuring automatically.
                    </p>
</div>

<div className="group border-b border-stone-100 p-10 transition-colors hover:bg-stone-50/50">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF5F0] text-emerald-900">
<svg className="lucide lucide-brain-circuit h-5 w-5 stroke-[1.5]" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="mb-3 text-lg font-medium text-stone-900">Active Recall</h3>
<p className="text-stone-500 leading-relaxed text-base font-light">
                        Don't just read. Engage. The AI generates questions that test your understanding in real-time.
                    </p>
</div>

<div className="group border-b md:border-b-0 border-stone-100 md:border-r p-10 transition-colors hover:bg-stone-50/50">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F2F5] text-blue-900">
<svg className="lucide lucide-message-square h-5 w-5 stroke-[1.5]" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="mb-3 text-lg font-medium text-stone-900">Tutor Chat</h3>
<p className="text-stone-500 leading-relaxed text-base font-light">
                        Stuck on a concept? Chat with your notes. It's like having a professor available 24/7.
                    </p>
</div>

<div className="group p-10 transition-colors hover:bg-stone-50/50">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F0F4] text-rose-900">
<svg className="lucide lucide-zap h-5 w-5 stroke-[1.5]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="mb-3 text-lg font-medium text-stone-900">Instant Flashcards</h3>
<p className="text-stone-500 leading-relaxed text-base font-light">
                        Convert hours of reading into a spaced-repetition deck in seconds. Export to Anki or study here.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FBFBF9]">
<div className="mx-auto max-w-5xl space-y-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900">Study Modes</h2>
<p className="mt-4 text-stone-500 text-lg">Choose how you want to learn today.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-stone-200 transition-all hover:shadow-md">
<div className="absolute inset-0 bg-gradient-to-r from-stone-50 to-white opacity-50"></div>
<div className="relative flex flex-col md:flex-row items-center p-2">
<div className="flex-1 p-8 md:p-12">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                            Core Feature
                        </div>
<h3 className="mb-3 text-2xl font-semibold text-stone-900">Deep Note Analysis</h3>
<p className="text-lg text-stone-500 font-light mb-8 max-w-md">
                            Upload your raw materials and get a beautifully formatted, searchable summary with key takeaways highlighted.
                        </p>
<button className="rounded-full bg-stone-900 px-6 py-3 text-xs font-semibold text-white transition-transform hover:scale-105">
                            Try Analysis
                        </button>
</div>
<div className="w-full md:w-1/2 h-64 md:h-auto bg-stone-100 m-2 rounded-2xl overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-48 h-56 bg-white rounded-xl shadow-lg border border-stone-100 p-4 rotate-3 transition-transform group-hover:rotate-0 duration-500">
<div className="w-full h-2 bg-stone-100 rounded mb-2"></div>
<div className="w-3/4 h-2 bg-stone-100 rounded mb-4"></div>
<div className="space-y-2">
<div className="w-full h-1.5 bg-stone-50 rounded"></div>
<div className="w-full h-1.5 bg-stone-50 rounded"></div>
<div className="w-5/6 h-1.5 bg-stone-50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8">

<div className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-10 shadow-sm border border-stone-200 flex flex-col justify-between h-[400px]">
<div>
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-500">
<svg className="lucide lucide-layers h-5 w-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="mb-2 text-xl font-semibold text-stone-900">Smart Flashcards</h3>
<p className="text-stone-500 font-light">Automated deck creation based on your weak points.</p>
</div>
<div className="relative mt-8 flex-1 rounded-2xl bg-rose-50/30 border border-rose-100/50 p-6 flex flex-col items-center justify-center text-center">
<span className="text-xs font-bold uppercase text-rose-300 mb-2">Question</span>
<p className="font-medium text-stone-800">What is the primary function of ATP?</p>
<button className="mt-4 text-xs font-semibold text-rose-500 hover:underline">Flip Card</button>
</div>
</div>

<div className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-10 shadow-sm border border-stone-200 flex flex-col justify-between h-[400px]">
<div>
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
<svg className="lucide lucide-check-circle-2 h-5 w-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="mb-2 text-xl font-semibold text-stone-900">Quiz Generator</h3>
<p className="text-stone-500 font-light">Test your knowledge before the real exam.</p>
</div>
<div className="relative mt-8 flex-1 space-y-3 pt-4">
<div className="flex items-center gap-3 rounded-xl border border-stone-100 bg-white p-3 shadow-sm">
<div className="h-4 w-4 rounded-full border border-stone-300"></div>
<span className="text-sm text-stone-600">Mitochondria</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3 shadow-sm">
<div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white"><svg className="lucide lucide-check h-2.5 w-2.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-emerald-900">Nucleus</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-stone-100 bg-white p-3 shadow-sm">
<div className="h-4 w-4 rounded-full border border-stone-300"></div>
<span className="text-sm text-stone-600">Ribosome</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="pricing">
<div className="mx-auto max-w-4xl text-center">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-12">Simple, transparent pricing</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="rounded-3xl border border-stone-200 p-8 text-left transition-all hover:border-stone-300">
<h3 className="font-medium text-stone-900">Starter</h3>
<div className="mt-4 mb-6">
<span className="text-4xl font-semibold text-stone-900">$0</span>
</div>
<p className="text-sm text-stone-500 mb-8 font-light">For students just getting started.</p>
<a className="block w-full rounded-full border border-stone-200 bg-white py-3 text-center text-xs font-semibold text-stone-900 hover:bg-stone-50" href="#">Get Started</a>
</div>

<div className="rounded-3xl border border-stone-200 bg-[#FBFBF9] p-8 text-left relative overflow-hidden transition-all hover:border-stone-300">
<div className="absolute top-0 right-0 bg-stone-900 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
<h3 className="font-medium text-stone-900">Scholar Pro</h3>
<div className="mt-4 mb-6">
<span className="text-4xl font-semibold text-stone-900">$9</span>
<span className="text-sm text-stone-500">/mo</span>
</div>
<p className="text-sm text-stone-500 mb-8 font-light">Unlimited everything for power users.</p>
<a className="block w-full rounded-full bg-stone-900 py-3 text-center text-xs font-semibold text-white hover:bg-stone-800" href="#">Upgrade Now</a>
</div>
</div>
</div>
</section>

<div className="px-4 pb-4 bg-white">
<footer className="mx-auto max-w-[95%] rounded-[2.5rem] bg-[#1C1C1E] px-8 py-16 md:px-16 md:py-20 text-white overflow-hidden relative">

<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noiseFilter\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noiseFilter)\\' opacity=\\'1\\'/%3E%3C/svg%3E\')'}}></div>
<div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-24">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
<span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
<span className="text-[10px] font-medium tracking-wide uppercase text-white/80">Systems Operational</span>
</div>
<div className="max-w-md">
<h2 className="text-2xl font-medium tracking-tight md:text-3xl text-white">
                            Ready to upgrade your grades?
                        </h2>
<p className="mt-4 text-white/60 text-lg font-light">
                            Join thousands of students who have already switched to smarter learning.
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-stone-900">
<svg className="lucide lucide-cherry h-5 w-5" data-lucide="cherry" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"></path><path d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"></path><path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"></path><path d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight">cherrynote</span>
</div>
</div>

<div className="flex flex-col gap-10 md:flex-row md:justify-between lg:justify-end lg:gap-20">
<div className="flex flex-col gap-4">
<h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Product</h4>
<a className="text-sm text-white/80 hover:text-white transition-colors" href="#">Features</a>
<a className="text-sm text-white/80 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-sm text-white/80 hover:text-white transition-colors" href="#">Download</a>
<a className="text-sm text-white/80 hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Legal</h4>
<a className="text-sm text-white/80 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-sm text-white/80 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-sm text-white/80 hover:text-white transition-colors" href="#">Cookies</a>
</div>
<div className="max-w-xs">
<h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Stay Updated</h4>
<form className="flex w-full items-center gap-2 rounded-full bg-white/10 p-1 pr-1.5 focus-within:bg-white/15 transition-colors">
<input className="w-full bg-transparent px-4 py-2 text-xs text-white placeholder-white/40 focus:outline-none" placeholder="Email address" type="email"/>
<button className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-stone-900 hover:bg-stone-200" type="submit">
                                Join
                            </button>
</form>
</div>
</div>
</div>
<div className="relative z-10 mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
<p>© 2025 Cherrynote Inc.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#"><svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="hover:text-white" href="#"><svg className="lucide lucide-instagram h-4 w-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-white" href="#"><svg className="lucide lucide-github h-4 w-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
</div>
</div>
</footer>
</div>


    </>
  );
}
