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
      

<div aria-hidden="true" className="fixed inset-0 -z-10">
<div className="absolute inset-0"></div>
<svg className="absolute inset-0 opacity-[0.04] w-[24px] h-[24px]" data-icon-replaced="true" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(30, 41, 59)`}} xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="24" id="dots" patternunits="userSpaceOnUse" width="24">
<circle cx="1" cy="1" fill="#0B1F44"></circle>
</pattern>
</defs>
<rect className="" fill="url(#dots)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="fixed top-0 left-0 right-0 z-50 bg-transparent p-4 sm:p-6">
<div className="max-w-4xl border-white/10 border rounded-full mx-auto px-4 py-3 sm:px-6" style={{background: `linear-gradient(180deg, rgba(14,16,26,0.55), rgba(14,16,26,0.35)) padding-box, linear-gradient(120deg, rgba(255,255,255,0.35), rgba(255,255,255,0.08)) border-box`, border: `1px solid transparent`, backdropFilter: `blur(16px) saturate(120%)`, boxShadow: `0 10px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)`}}>
<div className="flex items-center justify-between">
<div className="flex items-center">
<span className="text-base sm:text-lg font-semibold text-white/90 tracking-tight font-geist">
<svg className="sm:w-[138px] sm:h-[30px]" fill="none" height="26" viewBox="0 0 276 60" width="120" xmlns="http://www.w3.org/2000/svg">
<path fill="white" stroke="white" strokeWidth="0.301592"></path>
<path className="" fill="white" stroke="white" strokeWidth="0.301592"></path>
<path fill="white" stroke="white" strokeWidth="0.301592"></path>
<path fill="white" stroke="white" strokeWidth="0.301592"></path>
<path fill="white" stroke="white" strokeWidth="0.301592"></path>
<path className="" fill="white" stroke="white" strokeWidth="0.301592"></path>
<path fill="white" stroke="white" strokeWidth="0.301592"></path>
<path fill="white" stroke="white" strokeWidth="0.301592"></path>
<path fill="white" stroke="white" strokeWidth="0.301592"></path>
<path fill="white" stroke="white" strokeWidth="0.301592"></path>
<path fill="white" stroke="white" strokeWidth="0.301592"></path>
<path fill="#0AB8A7" stroke="#0AB8A7" strokeWidth="0.301592"></path>
<path fill="white" stroke="white" strokeWidth="0.301592"></path>
<path className="" fill="white"></path>
</svg>
</span>
</div>
<ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/60">
<li className=""><a className="hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full px-3 py-2 font-geist" href="#" style={{}}>Home</a></li>
<li className=""><a className="hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full px-3 py-2 font-geist" href="#" style={{}}>How it Works</a></li>
<li><a className="hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full px-3 py-2 font-geist" href="#" style={{}}>Pricing</a></li>
<li><a className="hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full px-3 py-2 font-geist" href="#" style={{}}>FAQ</a></li>
</ul>
<div className="flex items-center gap-1.5 md:gap-2">
<button aria-label="Menu" className="inline-flex md:hidden hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<svg className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5] text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line></line>
<line></line>
<line></line>
</svg>
</button>
<button aria-label="Account" className="hidden md:inline-flex hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<svg className="w-4 h-4 stroke-[1.5] text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="7"></circle>
</svg>
</button>
<button aria-label="Dashboard" className="hidden md:inline-flex relative hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<svg className="w-4 h-4 stroke-[1.5] text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
<path></path>
</svg>
<span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-500 text-white text-xs rounded-full flex items-center justify-center font-medium font-geist" style={{}}>3</span>
</button>
</div>
</div>
</div>
</div>

<main className="relative pt-20 sm:pt-16">
<div className="relative overflow-hidden w-full min-h-[70vh] sm:min-h-[75vh] bg-white/5 border-white/10 border rounded-2xl">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10"></div>

<div className="absolute inset-0">
<img alt="Creative team working on design projects" className="w-full h-full object-cover object-center" loading="eager" src="https://cdn.midjourney.com/dfb2fd7b-0f92-44c6-bf3a-d8b4bb665681/0_2.png?w=800&q=80" style={{objectPosition: `center center`}} />
</div>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-t via-transparent to-transparent from-gray-900/70 sm:from-gray-900/60"></div>
<div className="absolute inset-0 flex items-end">
<div className="w-full p-4 sm:p-8">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl lg:text-7xl text-white tracking-tighter font-geist drop-shadow-lg leading-tight">
<div className="">
<h1 className="font-geist" style={{}}>Stay sharp.</h1>
<h1 className="italic font-instrument-serif" style={{}}>Stay Independent.</h1>
</div>
</h2>
<p className="text-base sm:text-lg leading-relaxed font-normal text-white/90 mt-3 drop-shadow-sm max-w-2xl font-geist" style={{}}>Daily brain workouts that adapt to your level. Simple to use. Clear progress for families and caregivers.</p>

<div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium tracking-tight rounded-full px-4 sm:px-6 py-3 shadow-sm transition-all duration-300 bg-white text-slate-800 hover:bg-white/90 border border-white/20" href="#assessment">
<svg className="w-4 h-4 stroke-1.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
<path></path>
<path></path>
</svg>
<span className="font-geist" style={{}}>Start Your Free Assessment</span>
</a>
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium tracking-tight backdrop-blur-sm rounded-full px-4 sm:px-6 py-3 border shadow-sm transition-all duration-300 hover:bg-white/15 text-white bg-white/8 border-white/15" href="#demo">
<svg className="w-4 h-4 stroke-1.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<polygon points="10,8 16,12 10,16 10,8"></polygon>
</svg>
<span className="font-geist" style={{}}>Watch Demo</span>
</a>
</div>

<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
<div className="rounded-xl backdrop-blur-sm border p-2.5 sm:p-3 shadow-sm transition-all duration-300 bg-white/6 border-white/10 hover:bg-white/10">
<div className="flex items-center gap-1.5 sm:gap-2 mb-1">
<svg className="text-white/70 sm:w-4 sm:h-4" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<div className="text-lg sm:text-xl font-semibold tracking-tight drop-shadow-sm text-white font-geist" style={{}}>10k+</div>
</div>
<p className="text-xs sm:text-[11px] mt-0.5 text-white/80 font-geist" style={{}}>Active Members</p>
</div>
<div className="rounded-xl backdrop-blur-sm border p-2.5 sm:p-3 shadow-sm transition-all duration-300 bg-white/6 border-white/10 hover:bg-white/10">
<div className="flex items-center gap-1.5 sm:gap-2 mb-1">
<svg className="text-white/70 sm:w-4 sm:h-4" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<div className="text-lg sm:text-xl font-semibold tracking-tight drop-shadow-sm text-white font-geist" style={{}}>98%</div>
</div>
<p className="text-xs sm:text-[11px] mt-0.5 text-white/80 font-geist" style={{}}>See Progress</p>
</div>
<div className="rounded-xl backdrop-blur-sm border p-2.5 sm:p-3 shadow-sm transition-all duration-300 bg-white/6 border-white/10 hover:bg-white/10">
<div className="flex items-center gap-1.5 sm:gap-2 mb-1">
<svg className="text-white/70 sm:w-4 sm:h-4" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12"></circle>
<polyline points="12,6 12,12 16,14"></polyline>
</svg>
<div className="text-lg sm:text-xl font-semibold tracking-tight drop-shadow-sm text-white font-geist" style={{}}>15min</div>
</div>
<p className="text-xs sm:text-[11px] mt-0.5 text-white/80 font-geist" style={{}}>Daily Workouts</p>
</div>
<div className="rounded-xl backdrop-blur-sm border p-2.5 sm:p-3 shadow-sm transition-all duration-300 bg-white/6 border-white/10 hover:bg-white/10">
<div className="flex items-center gap-1.5 sm:gap-2 mb-1">
<svg className="text-white/70 sm:w-4 sm:h-4" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="9" cy="7"></circle>
<path></path>
</svg>
<div className="text-lg sm:text-xl font-semibold tracking-tight drop-shadow-sm text-white font-geist" style={{}}>4.9★</div>
</div>
<p className="text-xs sm:text-[11px] mt-0.5 text-white/80 font-geist" style={{}}>Family Rated</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="sm:py-20 sm:px-6 pt-16 pr-4 pb-16 pl-4" style={{opacity: `1`, transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: `preserve-3d`}}>
<div className="max-w-7xl mr-auto ml-auto">

<div className="text-center mb-10 sm:mb-14">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-3 font-geist" style={{}}>The mind needs practice, <span className="italic font-geist" style={{}}>not pressure</span></h2>
<p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto font-geist" style={{}}>A calm, adaptive experience that feels intuitive from day one—clear progress for families, delightful to use for everyone.</p>
</div>

<div className="grid grid-cols-12 gap-4 sm:gap-6">

<div className="col-span-12 md:col-span-3 rounded-3xl bg-white border border-slate-200/60 p-5 sm:p-6 shadow-sm">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">

<svg className="w-4 h-4 text-slate-700 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<span className="text-sm font-medium text-slate-700 tracking-tight font-geist" style={{}}>Works with your day</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="rounded-2xl border border-slate-200/60 bg-slate-50 p-3 flex items-center justify-center">

<svg className="w-5 h-5 text-slate-700 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18"></rect>
<line></line>
<line></line>
<line></line>
</svg>
</div>
<div className="rounded-2xl border border-slate-200/60 bg-slate-50 p-3 flex items-center justify-center">

<svg className="w-5 h-5 text-slate-700 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
<div className="rounded-2xl border border-slate-200/60 bg-slate-50 p-3 flex items-center justify-center">

<svg className="w-5 h-5 text-slate-700 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</div>
</div>
<p className="text-sm text-slate-600 mt-4 font-geist" style={{}}>Gentle reminders and simple scheduling keep practice effortless.</p>
</div>

<div className="col-span-12 md:col-span-5 md:row-span-2 rounded-3xl overflow-hidden border border-slate-200/60 bg-white shadow-sm">
<div className="relative h-full">
<img alt="Smiling person enjoying a calm training experience" className="w-full h-full object-cover" src="https://cdn.midjourney.com/7a2e4dd1-b008-4680-b331-5f1856025b34/0_1.png?w=800&q=80" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
<div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6">
<span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1.5 border border-white/60 shadow-sm">

<svg className="w-4 h-4 text-slate-800 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-sm font-medium text-slate-800 tracking-tight font-geist" style={{}}>Calm, readable design</span>
</span>
</div>
</div>
</div>

<div className="col-span-6 md:col-span-2 rounded-3xl overflow-hidden border border-slate-200/60 bg-slate-100 shadow-sm">
<div className="relative h-40 sm:h-56">
<img alt="Soft abstract background" className="w-full h-full object-cover" src="https://cdn.midjourney.com/b11fd97d-e314-402d-a80d-1ecd35c7ce3c/0_0.png?w=800&q=80" style={{filter: `blur(1px)`}} />
<div className="absolute inset-0 flex items-center justify-center">

<svg className="sm:w-12 sm:h-12 stroke-[1.5] w-[40px] h-[40px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{width: `40px`, height: `40px`, color: `rgb(30, 41, 59)`}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className=""></path>
<path className=""></path>
<path className=""></path>
</svg>
</div>
</div>
</div>

<div className="col-span-6 md:col-span-2 rounded-3xl border border-slate-200/60 bg-white shadow-sm p-5 sm:p-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-medium font-geist" style={{}}>02</div>
<div className="flex-1 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-200"></span>
<span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mt-4 mb-1 font-geist" style={{}}>Weeks 2–3</h3>
<p className="text-sm text-slate-600 font-geist" style={{}}>Workflow tuning and gentle difficulty ramping.</p>
</div>

<div className="col-span-12 md:col-span-3 rounded-3xl border border-slate-200/60 bg-white shadow-sm p-5 sm:p-6">
<h4 className="text-base font-medium tracking-tight text-slate-900 mb-3 font-geist" style={{}}>Feels right at home</h4>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-700 font-geist" style={{}}>
            Innovative
            
<svg className="w-3.5 h-3.5 text-slate-600 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
</span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-sm text-emerald-700 font-geist" style={{}}>
            Revolutionary
            <svg className="w-3.5 h-3.5 text-emerald-600 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
</span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-700 font-geist" style={{}}>
            Empowering
            <svg className="w-3.5 h-3.5 text-slate-600 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
</span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-700 font-geist" style={{}}>
            Accessible
            <svg className="w-3.5 h-3.5 text-slate-600 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
</span>
</div>
</div>

<div className="col-span-12 md:col-span-4 rounded-3xl border border-slate-200/60 bg-white shadow-sm p-6 sm:p-8">
<div className="flex items-end justify-between">
<div className="">
<div className="text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900 font-geist" style={{}}>93%</div>
<p className="text-sm text-slate-600 mt-2 font-geist" style={{}}>Members report feeling calmer and more confident within 3 weeks.</p>
</div>
<div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100">

<svg className="w-6 h-6 text-blue-600 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path><path></path><path></path>
<path></path><path></path>
</svg>
</div>
</div>
<div className="mt-5">
<div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-[93%] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-2 sm:p-6 bg-slate-100 border-slate-200/60 border rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center">

<svg className="w-5 h-5 text-slate-800 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<div className="">
<div className="text-sm font-medium tracking-tight text-slate-900 font-geist" style={{}}>Questions?</div>
<a className="text-sm text-slate-600 underline underline-offset-4 font-geist" href="#contact" style={{}}>Contact us</a>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-3 rounded-3xl border border-slate-200/60 bg-emerald-50 shadow-sm p-4 sm:p-6 relative overflow-hidden">
<div className="absolute inset-0 opacity-70" style={{background: `radial-gradient(closest-side, rgba(16,185,129,0.18), transparent 60%), radial-gradient(circle at 70% 30%, rgba(16,185,129,0.12), transparent 40%)`}}></div>
<h4 className="relative text-base font-medium tracking-tight text-emerald-900 mb-4 font-geist" style={{}}>Families stay in the loop</h4>
<div className="relative h-40">

<div className="absolute inset-0 rounded-full border border-white/60"></div>
<div className="absolute inset-4 rounded-full border border-white/50"></div>
<div className="absolute inset-8 rounded-full border border-white/40"></div>

<img alt="Member" className="absolute -left-2 bottom-2 w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" style={{}} />
<img alt="Caregiver" className="absolute left-12 top-4 w-9 h-9 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" style={{}} />
<img alt="Coach" className="absolute right-6 top-10 w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop" />
<img alt="Member" className="absolute right-2 bottom-4 w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=200&auto=format&fit=crop" style={{}} />
<img alt="Member" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop" />
</div>
<p className="relative mt-4 text-sm text-emerald-900/80 font-geist" style={{}}>Private updates and simple sharing—no guessing, just clarity.</p>
</div>
</div>
</div>
</section><section className="sm:py-20 sm:px-6 bg-[url(https://cdn.midjourney.com/1b348fa4-19ba-479f-bc16-7295f09f3f18/0_0.png?w=800&q=80)] bg-cover pt-16 pr-4 pb-16 pl-4" style={{backgroundColor: `#0B1220`}}>
<div className="max-w-7xl mr-auto ml-auto">

<div className="sm:mb-14 text-center mb-10">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-semibold text-white tracking-tight font-geist mb-3" style={{}}>Personalized brain workouts that <span className="italic text-slate-200 font-instrument-serif" style={{}}>meet you where you are</span></h2>
<p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto font-geist" style={{}}>Mind Vitality adapts each session to the user's pace. Exercises target memory, attention, and problem-solving. Families and caregivers see clear progress without digging through charts.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

<div className="bg-white rounded-3xl border p-6 sm:p-8 shadow-sm" style={{borderColor: `#E8EDF2`}}>
<div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4" style={{border: `1px solid #E8EDF2`}}>
<svg className="stroke-[1.5] w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: `#0B1220`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 font-geist" style={{color: `rgb(11, 18, 32)`}}>Easy to start</h3>
<p className="font-geist" style={{color: `rgb(11, 18, 32)`}}>Big buttons, clear steps, gentle guidance.</p>
</div>

<div className="bg-white rounded-3xl border p-6 sm:p-8 shadow-sm" style={{borderColor: `#E8EDF2`}}>
<div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4" style={{border: `1px solid #E8EDF2`}}>
<svg className="w-6 h-6 stroke-[1.5]" fill="none" stroke="currentColor" style={{color: `#0B1220`}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 font-geist" style={{color: `rgb(11, 18, 32)`}}>Always the right level</h3>
<p className="font-geist" style={{color: `rgb(11, 18, 32)`}}>Difficulty adjusts to performance in real time.</p>
</div>

<div className="bg-white rounded-3xl border p-6 sm:p-8 shadow-sm" style={{borderColor: `#E8EDF2`}}>
<div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center mb-4" style={{border: `1px solid #E8EDF2`}}>
<svg className="w-6 h-6 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: `#0B1220`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle className="" cx="12" cy="7"></circle></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 font-geist" style={{color: `rgb(11, 18, 32)`}}>Confidence for families</h3>
<p className="font-geist" style={{color: `rgb(11, 18, 32)`}}>Simple reports that highlight wins and what to focus on next.</p>
</div>
</div>

<div className="sm:p-8 lg:p-12 bg-zinc-100/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm backdrop-blur" style={{borderColor: `#E8EDF2`}}>
<div className="text-center mb-8">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3 font-geist" style={{}}>See it in action</h3>
<p className="text-slate-300 font-geist" style={{}}>Three simple screens that make brain training effortless</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-white border rounded-2xl pt-1 pr-1 pb-1 pl-1 shadow-lg" style={{borderColor: `#E8EDF2`}}>
<div className="relative overflow-hidden min-h-[400px] rounded-xl pt-4 pr-4 pb-4 pl-4" style={{backgroundColor: `#0B1220`}}>
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" style={{backgroundImage: `url('https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80')`, backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`}}></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="text-white text-sm font-geist" style={{}}>Today's Plan</div>
<div className="w-8 h-8 rounded-full bg-white/10"></div>
</div>
<div className="text-center mb-8">
<div className="text-2xl font-semibold text-white mb-2 font-geist" style={{}}>Good morning, Sarah!</div>
<div className="text-white/70 text-sm font-geist" style={{}}>Ready for today's workout?</div>
</div>
<div className="space-y-4">
<div className="bg-white/10 rounded-2xl p-4 border border-white/10 min-h-[48px] flex items-center">
<div className="flex items-center gap-3 w-full">
<div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
<svg className="w-5 h-5 text-emerald-400 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
<div className="">
<div className="text-white font-medium text-sm font-geist" style={{}}>Memory Match</div>
<div className="text-white/70 text-xs font-geist" style={{}}>5 minutes</div>
</div>
</div>
</div>
<div className="bg-white/10 rounded-2xl p-4 border border-white/10 min-h-[48px] flex items-center">
<div className="flex items-center gap-3 w-full">
<div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
<svg className="w-5 h-5 text-blue-400 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<path></path>
</svg>
</div>
<div className="">
<div className="text-white font-medium text-sm font-geist" style={{}}>Focus Flow</div>
<div className="text-white/60 text-xs font-geist" style={{}}>3 minutes</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="text-center pt-3 pr-3 pb-3 pl-3">
<div className="text-sm font-medium font-geist" style={{color: `rgb(11, 18, 32)`}}>Today's Plan</div>
</div>
</div>

<div className="bg-white rounded-2xl border p-1 shadow-lg" style={{borderColor: `#E8EDF2`}}>
<div className="rounded-xl p-4 relative overflow-hidden min-h-[400px]" style={{backgroundColor: `#0B1220`}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<svg className="w-6 h-6 text-white/70 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<div className="text-white text-sm font-geist" style={{}}>Memory Match</div>
<div className="text-white/70 text-xs font-geist" style={{}}>2:30</div>
</div>
<div className="text-center mb-8">
<div className="text-white mb-4 font-geist" style={{}}>Find the matching pairs</div>
<div className="w-full bg-white/10 rounded-full h-2 mb-4">
<div className="bg-emerald-500 h-2 rounded-full" style={{width: `60%`}}></div>
</div>
</div>
<div className="grid grid-cols-3 gap-3">
<button className="aspect-square flex min-h-[48px] focus:ring-2 focus:ring-white/50 focus:outline-none bg-white/10 border-white/10 border rounded-xl items-center justify-center">
<svg className="w-6 h-6 text-white/50 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path className=""></path><path></path><circle cx="16" cy="13"></circle><circle cx="18" cy="3"></circle><circle cx="20" cy="21"></circle><circle cx="20" cy="8"></circle></svg>
</button>
<button className="aspect-square bg-emerald-500/20 rounded-xl border border-emerald-500/30 flex items-center justify-center min-h-[48px] focus:ring-2 focus:ring-emerald-400/50 focus:outline-none">
<svg className="w-6 h-6 text-emerald-400 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(52, 211, 153)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><circle cx="12" cy="6"></circle><circle cx="16" cy="12"></circle><circle cx="9" cy="15"></circle></svg>
</button>
<button className="aspect-square flex min-h-[48px] focus:ring-2 focus:ring-white/50 focus:outline-none bg-white/10 border-white/10 border rounded-xl items-center justify-center">
<svg className="stroke-[1.5] w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="accessibility" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="4"></circle><path></path><path></path><path></path><path></path></svg>
</button>
<button className="aspect-square flex min-h-[48px] focus:ring-2 focus:ring-white/50 focus:outline-none bg-white/10 border-white/10 border rounded-xl items-center justify-center">
<svg className="w-6 h-6 text-white/50 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path className=""></path><path></path><circle cx="16" cy="13"></circle><circle cx="18" cy="3"></circle><circle cx="20" cy="21"></circle><circle cx="20" cy="8"></circle></svg>
</button>
<button className="aspect-square bg-emerald-500/20 rounded-xl border border-emerald-500/30 flex items-center justify-center min-h-[48px] focus:ring-2 focus:ring-emerald-400/50 focus:outline-none">
<svg className="stroke-[1.5] w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="ear" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(52, 211, 153)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<button className="aspect-square flex min-h-[48px] focus:ring-2 focus:ring-white/50 focus:outline-none bg-white/10 border-white/10 border rounded-xl items-center justify-center">
<svg className="stroke-[1.5] w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="badge-info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><line></line><line></line></svg>
</button>
</div>
</div>
</div>
<div className="p-3 text-center">
<div className="text-sm font-medium font-geist" style={{color: `rgb(11, 18, 32)`}}>Exercise in Progress</div>
</div>
</div>

<div className="bg-white rounded-2xl border p-1 shadow-lg" style={{borderColor: `#E8EDF2`}}>
<div className="rounded-xl p-4 relative overflow-hidden min-h-[400px]" style={{backgroundColor: `#0B1220`}}>
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-pink-500/10"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="text-white text-sm font-geist" style={{}}>Progress</div>
<div className="w-8 h-8 rounded-full bg-white/10"></div>
</div>
<div className="text-center mb-8">
<div className="text-2xl font-semibold text-white mb-2 font-geist" style={{}}>Great work!</div>
<div className="text-white/70 text-sm font-geist" style={{}}>This week's highlights</div>
</div>
<div className="space-y-4">
<div className="bg-white/10 rounded-2xl p-4 border border-white/10">
<div className="flex items-center justify-between mb-2">
<div className="text-white font-medium text-sm font-geist" style={{}}>Memory</div>
<div className="text-emerald-400 font-semibold text-sm font-geist" style={{}}>+8%</div>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-emerald-500 h-2 rounded-full" style={{width: `72%`}}></div>
</div>
</div>
<div className="bg-white/10 rounded-2xl p-4 border border-white/10">
<div className="flex items-center justify-between mb-2">
<div className="text-white font-medium text-sm font-geist" style={{}}>Attention</div>
<div className="text-blue-400 font-semibold text-sm font-geist" style={{}}>+5%</div>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-blue-500 h-2 rounded-full" style={{width: `65%`}}></div>
</div>
</div>
<div className="bg-white/10 rounded-2xl p-4 border border-white/10">
<div className="flex items-center justify-between mb-2">
<div className="text-white font-medium text-sm font-geist" style={{}}>Problem Solving</div>
<div className="text-violet-400 font-semibold text-sm font-geist" style={{}}>+3%</div>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-violet-500 h-2 rounded-full" style={{width: `58%`}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="p-3 text-center">
<div className="text-sm font-medium font-geist" style={{color: `rgb(11, 18, 32)`}}>Progress Summary</div>
</div>
</div>
</div>

<div className="text-center mt-8">
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium tracking-tight rounded-full px-6 py-3 shadow-sm transition-all duration-300 bg-white text-black hover:bg-gray-100 border min-h-[48px] focus:ring-2 focus:ring-white/50 focus:outline-none" href="#demo" style={{borderColor: `#E8EDF2`, color: `#0B1220`}}>
<svg className="w-4 h-4 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<polygon points="10,8 16,12 10,16 10,8"></polygon>
</svg>
<span className="font-geist" style={{}}>Try Interactive Demo</span>
</a>
</div>
</div>
</div>
</section><section className="sm:py-20 sm:px-6 px-4 py-16">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-10 sm:mb-14">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Built for seniors, <span className="italic font-instrument-serif text-slate-700">helpful for families</span></h2>
<p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto font-geist">Every feature designed with accessibility and independence in mind. Simple for users, insightful for loved ones.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-blue-600" data-icon-replaced="true" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `24px`, height: `24px`, color: `rgb(37, 99, 235)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle className="" cx="12" cy="7"></circle></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Adaptive Workouts</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Sessions automatically match current ability and adjust difficulty with every interaction. Never too easy, never overwhelming.</p>
</div>

<div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
<div className="flex items-center space-x-1">
<span className="text-xl font-bold text-emerald-600">A</span>
<span className="text-sm font-medium text-emerald-500">A</span>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Large-Type Interface</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">High contrast colors, generous spacing, and clear labels make every screen comfortable and easy to navigate.</p>
</div>

<div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-4">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="git-graph" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `24px`, height: `24px`, color: `rgb(124, 58, 237)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="6"></circle><path></path><circle cx="5" cy="18"></circle><path></path><circle cx="19" cy="6"></circle><path></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Family & Caregiver Reports</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Simple weekly summaries highlight progress trends, celebrate achievements, and suggest areas for gentle support.</p>
</div>

<div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-4">
<div className="relative">
<svg className="w-5 h-5 text-slate-400" data-icon-replaced="true" data-lucide="heart-handshake" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(148, 163, 184)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path className=""></path><path></path></svg>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Interest-Based Content</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Exercises incorporate personal history, hobbies, and familiar topics to create meaningful, engaging experiences.</p>
</div>

<div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Safe & Private</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Bank-level encryption, HIPAA-compliant storage, and transparent privacy practices protect personal information.</p>
</div>

<div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 flex bg-amber-50 border-amber-100 border rounded-2xl mb-4 items-center justify-center">
<div className="relative w-6 h-6">
<div className="absolute top-0 left-0 w-2.5 h-2.5 bg-slate-300 rounded-full"></div>
<div className="absolute top-0 right-0 w-2.5 h-2.5 bg-slate-300 rounded-full"></div>
<div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-slate-300 rounded-full"></div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-amber-500 border-white border rounded-full shadow-sm"></div>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Facility Dashboard</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Designed for senior living communities to track group engagement, celebrate milestones, and support residents.</p>
</div>
</div>

<div className="text-center mt-12 sm:mt-16">
<div className="inline-flex items-center gap-3 bg-slate-50 rounded-full px-4 py-2 mb-6">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" />
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" />
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop" />
</div>
<span className="text-sm font-medium text-slate-700 font-geist">Join 10,000+ members staying mentally active</span>
</div>
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium tracking-tight rounded-full px-6 py-3 shadow-sm transition-all duration-300 bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 min-h-[48px] focus:ring-2 focus:ring-slate-500 focus:outline-none" href="#assessment">
<svg className="w-4 h-4 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
<path></path>
<path></path>
</svg>
<span className="font-geist">Start Your Assessment</span>
</a>
</div>
</div>
</section><section className="sm:py-20 sm:px-6 bg-white pt-16 pr-4 pb-16 pl-4" style={{position: `relative`}}>
<div className="max-w-7xl mx-auto">

<div className="text-center mb-12 sm:mb-16">
<span className="text-sm font-normal text-slate-500 font-geist">HOW IT WORKS</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mt-2 mb-3 font-geist">Three steps to a stronger mind</h2>
<p className="text-base text-slate-600 max-w-2xl mx-auto font-geist">Simple, proven approach that adapts to your pace and keeps families informed every step of the way.</p>
</div>

<div className="relative">

<div className="hidden sm:block">

<div className="absolute top-20 left-0 right-0 h-px bg-slate-200"></div>
<div className="absolute top-20 left-0 h-px bg-slate-900 transition-all duration-1000" style={{width: `100%`}}></div>
<div className="grid grid-cols-3 gap-8 lg:gap-12">

<div className="text-center relative">
<div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center relative z-10">
<svg className="w-8 h-8 text-emerald-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
<path></path>
<path></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Take the Brain Check</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">A quick 2-minute assessment sets your starting level.</p>
</div>

<div className="text-center relative">
<div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center relative z-10">
<svg className="w-8 h-8 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<polygon points="10,8 16,12 10,16 10,8"></polygon>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Train daily</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Short, engaging exercises that adapt as you improve.</p>
</div>

<div className="text-center relative">
<div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-violet-50 border border-violet-200 flex items-center justify-center relative z-10">
<svg className="w-8 h-8 text-violet-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
<path></path>
<path></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-geist">Track progress</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Simple weekly updates for seniors and families.</p>
</div>
</div>
</div>

<div className="sm:hidden space-y-8">

<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-semibold font-geist">1</div>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 font-geist">Take the Brain Check</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">A quick 2-minute assessment sets your starting level.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-semibold font-geist">2</div>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 font-geist">Train daily</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Short, engaging exercises that adapt as you improve.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-violet-500 text-white flex items-center justify-center text-sm font-semibold font-geist">3</div>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 font-geist">Track progress</h3>
<p className="text-sm text-slate-600 font-geist leading-relaxed">Simple weekly updates for seniors and families.</p>
</div>
</div>
</div>
</div>

<div className="text-center mt-12 sm:mt-16">
<div className="inline-flex items-center gap-2 bg-slate-50 rounded-full px-4 py- <svg xmlns=" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16">
<circle cx="12" cy="12"></circle>
<polyline points="16,12 12,8 8,12"></polyline>
<line></line>
<span className="text-sm font-medium text-slate-700 font-geist">Ready to get started?</span>
</div>
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium tracking-tight rounded-full px-6 py-3 shadow-sm transition-all duration-300 bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 min-h-[48px] focus:ring-2 focus:ring-slate-500 focus:outline-none" href="#assessment">
<span className="font-geist">Begin Your Brain Check</span>
<svg className="w-4 h-4 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</a>
</div>
</div>
</section><section className="sm:py-20 sm:px-6 bg-slate-50 pt-16 pr-4 pb-16 pl-4">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-16 sm:mb-20">
<span className="text-sm font-normal text-slate-500 font-geist mb-4 block">PRICING</span>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6 font-geist">
<span className="text-slate-900">Choose Your</span>
<span className="text-slate-900 italic font-instrument-serif">Mind Training Journey</span>
</h2>
<p className="sm:text-lg max-w-3xl text-base text-slate-600 mx-auto font-geist">
        From personal brain fitness to family support, we've crafted the perfect plan for every stage of your cognitive wellness journey
      </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

<article className="relative hover:border-blue-500 transition-all duration-300 lg:p-10 flex flex-col hover:shadow-lg bg-white border-slate-200 border-2 rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="7"></circle>
</svg>
<span className="text-sm font-semibold uppercase tracking-wide text-slate-500 font-geist">Personal</span>
</div>
<span className="text-xs font-medium uppercase bg-blue-50 border border-blue-200 rounded-full px-3 py-1 text-blue-600 font-geist">
            Most Popular
          </span>
</div>
<div className="mb-8">
<h3 className="lg:text-2xl leading-tight text-2xl font-semibold mb-3 font-geist">Individual Training</h3>
<p className="text-slate-600 text-sm font-geist">
            Everything you need for daily brain fitness and cognitive improvement
          </p>
</div>
<div className="mb-8">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl lg:text-5xl font-semibold tracking-tight font-geist">$29</span>
<span className="text-slate-500 mb-1 font-geist">/month</span>
</div>
<p className="text-xs text-slate-500 font-geist">Billed monthly • Cancel anytime • 14-day free trial</p>
</div>
<div className="flex flex-col gap-3 mb-8">
<a className="inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-slate-800 min-h-[48px] focus:ring-2 focus:ring-slate-500 focus:outline-none text-sm font-medium text-white tracking-tight bg-slate-900 border-slate-900 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm" href="#assessment">
<svg className="w-4 h-4 stroke-[1.5]" data-icon-replaced="true" data-lucide="user" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="7"></circle></svg>
<span className="font-geist">Start Your Free Trial</span>
</a>
<button className="w-full rounded-full border-2 border-slate-300 text-slate-700 px-6 py-3 text-sm font-medium hover:bg-slate-50 transition-all duration-200 min-h-[48px] focus:ring-2 focus:ring-slate-300 focus:outline-none font-geist">
            Learn More
          </button>
</div>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="12"></circle>
</svg>
<span className="font-geist"> - Memory, attention & problem-solving</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="12"></circle>
</svg>
<span className="font-geist"> - Automatically adjusts to your level</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="12"></circle>
</svg>
<span className="font-geist"> - Weekly insights & achievements</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="12"></circle>
</svg>
<span className="font-geist"> - Response within 24 hours</span>
</li>
</ul>
</article>

<article className="relative transition-all duration-300 lg:p-10 flex flex-col lg:scale-110 z-10 text-white bg-slate-900 border-slate-900 border-2 rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-xl scale-105">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<div className="bg-emerald-500 text-white text-xs font-semibold uppercase px-4 py-2 rounded-full font-geist">
            Best Value
          </div>
</div>
<div className="flex justify-between items-start mb-8 mt-4">
<div className="flex items-center gap-2">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="users" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(52, 211, 153)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="9" cy="7"></circle><path></path><path></path></svg>
<span className="text-sm font-semibold uppercase tracking-wide text-slate-300 font-geist">Family</span>
</div>
</div>
<div className="mb-8">
<h3 className="lg:text-2xl leading-tight text-2xl font-semibold mb-3 font-geist">Family Connection</h3>
<p className="text-slate-200 text-sm font-geist">
            Keep loved ones connected with shared progress and family support features
          </p>
</div>
<div className="mb-8">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl lg:text-5xl font-semibold tracking-tight font-geist">$49</span>
<span className="text-slate-300 mb-1 font-geist">/month</span>
</div>
<p className="text-xs text-slate-300 font-geist">Up to 4 family members • 2 months free yearly</p>
</div>
<div className="flex flex-col gap-3 mb-8">
<a className="inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-slate-800 min-h-[48px] focus:ring-2 focus:ring-slate-500 focus:outline-none text-sm font-medium text-slate-950 tracking-tight bg-neutral-50 border-slate-900 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm" href="#assessment">
<svg className="w-4 h-4 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className=""></path>
<path className=""></path>
<path className=""></path>
<path className=""></path>
<path className=""></path>
</svg>
<span className="font-geist">Start Your Assessment</span>
</a>
<button className="w-full rounded-full border-2 border-white text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-slate-900 transition-all duration-200 min-h-[48px] focus:ring-2 focus:ring-white/50 focus:outline-none font-geist">
            Schedule Demo
          </button>
</div>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle className="" cx="12" cy="12"></circle>
</svg>
<span className="font-geist"> - All features included</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="12"></circle>
</svg>
<span className="font-geist"> - Shared progress & insights</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="12"></circle>
</svg>
<span className="font-geist"> - Simple progress summaries</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle className="" cx="12" cy="12"></circle>
</svg>
<span className="font-geist"> - Important updates & milestones</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle className="" cx="12" cy="12"></circle>
</svg>
<span className="font-geist"> - Phone & video calls available</span>
</li>
</ul>
</article>

<article className="relative hover:border-violet-500 transition-all duration-300 lg:p-10 flex flex-col lg:col-span-2 xl:col-span-1 bg-white border-slate-200 border-2 rounded-3xl pt-8 pr-8 pb-8 pl-8 hover:shadow-lg">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-violet-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className=""></path>
<path></path>
<path className=""></path>
<path></path>
<path></path>
<path className=""></path>
<path></path>
</svg>
<span className="text-sm font-semibold uppercase tracking-wide text-slate-500 font-geist">Care Facility</span>
</div>
<span className="text-xs font-medium uppercase bg-violet-50 border border-violet-200 rounded-full px-3 py-1 text-violet-600 font-geist">
            Custom
          </span>
</div>
<div className="mb-8">
<h3 className="lg:text-2xl leading-tight text-2xl font-semibold mb-3 font-geist">Senior Communities</h3>
<p className="text-sm text-slate-600 font-geist">
            Comprehensive brain training programs designed for senior living facilities and care communities
          </p>
</div>
<div className="mb-8">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 font-geist">Custom</span>
</div>
<p className="text-xs text-slate-500 font-geist">Pricing based on resident count and features</p>
</div>
<div className="flex flex-col gap-3 mb-8">
<button className="w-full rounded-full bg-violet-600 text-white px-6 py-3 text-sm font-semibold hover:bg-violet-700 transition-all duration-200 min-h-[48px] focus:ring-2 focus:ring-violet-500 focus:outline-none font-geist">
            Request Demo
          </button>
<button className="w-full rounded-full border-2 border-slate-300 text-slate-700 px-6 py-3 text-sm font-medium hover:bg-slate-50 transition-all duration-200 min-h-[48px] focus:ring-2 focus:ring-slate-300 focus:outline-none font-geist">
            Download Brochure
          </button>
</div>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="12"></circle>
</svg>
<span className="font-geist"> - Manage all resident programs</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="12"></circle>
</svg>
<span className="font-geist"> - Collaborative brain training sessions</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle className="" cx="12" cy="12"></circle>
</svg>
<span className="font-geist"> - Comprehensive onboarding & support</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="12"></circle>
</svg>
<span className="font-geist"> - Connect residents with loved ones</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="12"></circle>
</svg>
<span className="font-geist"> - 24/7 assistance & account manager</span>
</li>
</ul>
</article>
</div>


<div className="mt-12 text-center">
<div className="flex items-center justify-center gap-8 opacity-60">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-slate-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-sm text-slate-500 font-geist">HIPAA Compliant</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-slate-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
<span className="text-sm text-slate-500 font-geist">24/7 Support</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-slate-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
<path></path>
</svg>
<span className="text-sm text-slate-500 font-geist">Cancel Anytime</span>
</div>
</div>
</div>
</div>
</section><grammarly-desktop-integration className="" data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
