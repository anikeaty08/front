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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<div className="max-w-md mx-auto relative min-h-screen bg-white pb-24 shadow-sm overflow-hidden flex flex-col">

<header className="pt-10 px-6 pb-4 bg-white sticky top-0 z-40 border-b border-gray-200">
<h1 className="text-3xl font-semibold tracking-tight mb-6">Season Hub</h1>

<nav className="flex overflow-x-auto hide-scrollbar gap-3 pb-2">
<button className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-base font-medium whitespace-nowrap">Licensing</button>
<button className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-base font-medium whitespace-nowrap">Schedule</button>
<button className="px-5 py-2 bg-black text-white rounded-full text-base font-medium whitespace-nowrap">Budget</button>
<button className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-base font-medium whitespace-nowrap">Objectives</button>
</nav>
</header>

<main className="flex-1 px-6 py-6 flex flex-col gap-6 overflow-y-auto">

<div className="flex justify-center mb-2">
<div className="inline-flex bg-white border border-gray-300 rounded-full p-1">
<button className="px-6 py-2 rounded-full text-base font-medium text-gray-600 transition-colors">Your Plan</button>
<button className="px-6 py-2 rounded-full text-base font-medium bg-black text-white transition-colors">Estimator</button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="border border-gray-300 rounded-2xl p-5">
<p className="text-base font-medium text-gray-600 mb-2">Planned total</p>
<p className="text-3xl font-semibold tracking-tight">$42,000</p>
</div>
<div className="border border-gray-300 rounded-2xl p-5">
<p className="text-base font-medium text-gray-600 mb-2">Spent to date</p>
<p className="text-3xl font-semibold tracking-tight">$11,200</p>
</div>
</div>

<div className="border border-gray-300 rounded-2xl p-5 mt-2">
<div className="flex justify-between items-end mb-3">
<span className="text-base font-semibold">Season spend</span>
<span className="text-base font-medium text-gray-600">27% of plan</span>
</div>
<div className="h-2 w-full bg-white border border-gray-200 rounded-full overflow-hidden p-[1px]">
<div className="h-full bg-black rounded-full w-[27%]"></div>
</div>
</div>

<div className="border border-gray-300 rounded-[24px] p-5 lg:p-6 pb-8 mt-2 shadow-sm">

<div className="mb-8">
<h2 className="text-sm font-semibold tracking-wide uppercase border-b border-gray-200 pb-2 mb-4">1. Team &amp; Program Fees</h2>
<div className="grid grid-cols-[1fr_80px_80px] gap-4 items-center mb-6">
<span className="text-base font-medium">Item</span>
<span className="text-base font-medium text-right">Cost</span>
<span></span> 
</div>

<div className="flex flex-col gap-5">
<div className="flex items-center justify-between gap-4">
<span className="text-base font-medium w-1/3">Annual Fee</span>
<div className="relative w-24 flex items-center shrink-0">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-2">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-right text-base font-medium shrink-0">$550</div>
</div>
<div className="flex items-center justify-between gap-4">
<span className="text-base font-medium w-1/3">Season Deposit</span>
<div className="relative w-24 flex items-center shrink-0">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-6">2</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-right text-base font-medium shrink-0">$15,000</div>
</div>
</div>
</div>

<div className="mb-8">
<h2 className="text-sm font-semibold tracking-wide uppercase border-b border-gray-200 pb-2 mb-4">2. Event Fees</h2>
<div className="flex flex-col gap-6">
<div className="flex items-start justify-between gap-4">
<span className="text-base font-medium w-1/3 pt-1">HPDE</span>
<div className="relative w-24 flex items-center shrink-0 pt-2.5">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-0">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-center text-base font-medium text-gray-400 shrink-0">-</div>
</div>
<div className="flex items-start justify-between gap-4">
<div className="w-1/3">
<span className="text-base font-medium block">Club CMP Full Day</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-sm font-medium bg-gray-100 text-gray-700 mt-1">+ Speed</span>
</div>
<div className="relative w-24 flex items-center shrink-0 pt-3">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-0">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-center text-base font-medium text-gray-400 shrink-0 mt-1">-</div>
</div>
<div className="flex items-start justify-between gap-4">
<span className="text-base font-medium w-1/3 leading-tight pt-1">Club CMP Evening Race</span>
<div className="relative w-24 flex items-center shrink-0 pt-2.5">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-0">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-center text-base font-medium text-gray-400 shrink-0 mt-1">-</div>
</div>
<div className="flex items-start justify-between gap-4">
<div className="w-1/3">
<span className="text-base font-medium block leading-tight">Formula Libre Race</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-sm font-medium bg-gray-100 text-gray-700 mt-1">+ Racecraft</span>
</div>
<div className="relative w-24 flex items-center shrink-0 pt-3">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-0">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-center text-base font-medium text-gray-400 shrink-0 mt-1">-</div>
</div>
<div className="flex items-start justify-between gap-4">
<div className="w-1/3">
<span className="text-base font-medium block leading-tight">RCC Events (x6)</span>
<div className="flex flex-col gap-1 mt-1">
<span className="inline-flex items-center px-2 py-0.5 rounded text-sm font-medium bg-gray-100 text-gray-700 w-fit">+ Stamina</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-sm font-medium bg-gray-100 text-gray-700 w-fit">+ Racecraft</span>
</div>
</div>
<div className="relative w-24 flex items-center shrink-0 pt-3">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-0">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-center text-base font-medium text-gray-400 shrink-0 mt-1">-</div>
</div>
</div>
</div>

<div className="mb-8">
<h2 className="text-sm font-semibold tracking-wide uppercase border-b border-gray-200 pb-2 mb-4">3. Tires</h2>
<div className="flex flex-col gap-5">
<div className="flex items-start justify-between gap-4">
<span className="text-base font-medium w-1/3 leading-tight pt-1">Sticker Tires (x2 sets)</span>
<div className="relative w-24 flex items-center shrink-0 pt-2.5">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-0">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-center text-base font-medium text-gray-400 shrink-0 mt-1">-</div>
</div>
<div className="flex items-start justify-between gap-4">
<span className="text-base font-medium w-1/3 leading-tight pt-1">Scrub Tires (x2 sets)</span>
<div className="relative w-24 flex items-center shrink-0 pt-2.5">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-0">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-center text-base font-medium text-gray-400 shrink-0 mt-1">-</div>
</div>
<div className="flex items-start justify-between gap-4">
<span className="text-base font-medium w-1/3 leading-tight pt-1">Flatspot Replacements</span>
<div className="relative w-24 flex items-center shrink-0 pt-2.5">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-0">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-center text-base font-medium text-gray-400 shrink-0 mt-1">-</div>
</div>
</div>
</div>

<div className="mb-8">
<h2 className="text-sm font-semibold tracking-wide uppercase border-b border-gray-200 pb-2 mb-4">4. Technical Support</h2>
<div className="flex flex-col gap-5">
<div className="flex items-start justify-between gap-4">
<span className="text-base font-medium w-1/3 leading-tight pt-1">Evening Race Support</span>
<div className="relative w-24 flex items-center shrink-0 pt-2.5">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-0">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-center text-base font-medium text-gray-400 shrink-0 mt-1">-</div>
</div>
<div className="flex items-start justify-between gap-4">
<span className="text-base font-medium w-1/3 leading-tight pt-1">Setup / Alignment</span>
<div className="relative w-24 flex items-center shrink-0 pt-2.5">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-0">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-center text-base font-medium text-gray-400 shrink-0 mt-1">-</div>
</div>
<div className="flex items-start justify-between gap-4">
<span className="text-base font-medium w-1/3 pt-1">Car Turnover</span>
<div className="relative w-24 flex items-center shrink-0 pt-2.5">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-0">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-center text-base font-medium text-gray-400 shrink-0 mt-1">-</div>
</div>
</div>
</div>

<div className="mb-8">
<h2 className="text-sm font-semibold tracking-wide uppercase border-b border-gray-200 pb-2 mb-4">5. Optional Services</h2>
<div className="flex flex-col gap-5">
<div className="flex items-start justify-between gap-4">
<span className="text-base font-medium w-1/3 pt-1">Media</span>
<div className="relative w-24 flex items-center shrink-0 pt-2.5">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-0">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-center text-base font-medium text-gray-400 shrink-0 mt-1">-</div>
</div>
<div className="flex items-start justify-between gap-4">
<span className="text-base font-medium w-1/3 leading-tight pt-1">Sponsor Vinyl Services</span>
<div className="relative w-24 flex items-center shrink-0 pt-2.5">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-0">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-center text-base font-medium text-gray-400 shrink-0 mt-1">-</div>
</div>
<div className="flex items-start justify-between gap-4">
<span className="text-base font-medium w-1/3 leading-tight pt-1">Performance Baseline</span>
<div className="relative w-24 flex items-center shrink-0 pt-2.5">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-0">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-center text-base font-medium text-gray-400 shrink-0 mt-1">-</div>
</div>
<div className="flex items-start justify-between gap-4">
<span className="text-base font-medium w-1/3 leading-tight pt-1">Dedicated Tech Support (x6)</span>
<div className="relative w-24 flex items-center shrink-0 pt-2.5">
<div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"></div>
<div className="relative w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-medium z-10 ml-0">1</div>
</div>
<div className="border border-gray-300 rounded py-1.5 px-3 w-24 text-center text-base font-medium text-gray-400 shrink-0 mt-1">-</div>
</div>
</div>
</div>

<div className="mt-10 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<div className="flex justify-between items-center mb-3">
<span className="text-base font-medium text-gray-800">Subtotal</span>
<div className="flex gap-10">
<span className="text-base font-medium text-gray-800">$95,465</span>
<span className="text-base font-medium text-gray-800 w-16 text-right">$15,550</span>
</div>
</div>
<div className="flex justify-between items-center mb-4">
<span className="text-base font-medium text-gray-600">HST (13%)</span>
<div className="flex gap-10">
<span className="text-base font-medium text-gray-600">$12,410</span>
<span className="text-base font-medium text-gray-600 w-16 text-right">$2,021</span>
</div>
</div>
<div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-2">
<span className="text-lg font-semibold text-black">Total</span>
<div className="flex gap-10">
<span className="text-lg font-semibold text-black">$107,875</span>
<span className="text-lg font-semibold text-black w-16 text-right">$17,571</span>
</div>
</div>
</div>
</div>

<section className="mt-6 mb-2">
<h2 className="text-2xl font-semibold tracking-tight text-black mb-2">Driver Development Impact</h2>
<p className="text-base text-gray-500 mb-6">Your season choices influence your driver development.</p>
<div className="space-y-5 border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-base font-medium text-gray-800">Speed</span>
<span className="text-base font-semibold text-black">70%</span>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-black rounded-full w-[70%]"></div>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-base font-medium text-gray-800">Stamina</span>
<span className="text-base font-semibold text-black">55%</span>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-black rounded-full w-[55%]"></div>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-base font-medium text-gray-800">Racecraft</span>
<span className="text-base font-semibold text-black">60%</span>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-black rounded-full w-[60%]"></div>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-base font-medium text-gray-800">Track Knowledge</span>
<span className="text-base font-semibold text-black">50%</span>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-black rounded-full w-[50%]"></div>
</div>
</div>
</div>
</section>

<section className="mt-8 mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-black mb-2">Compare Key Decisions</h2>
<div className="flex items-start gap-2 text-gray-500 mb-6">
<i className="w-5 h-5 shrink-0 mt-0.5" data-lucide="info"></i>
<p className="text-base font-medium">Different racing experiences build different driver attributes.</p>
</div>
<div className="flex flex-col gap-4">

<div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-semibold text-black pr-4">Club Calabogie Test Day</h3>
<span className="shrink-0 inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-black">
                                $7,000
                            </span>
</div>
<div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
<span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 block">Impact</span>
<ul className="flex flex-col gap-2.5">
<li className="flex items-center gap-2 text-base text-gray-900 font-medium">
<i className="w-5 h-5 text-black" data-lucide="arrow-up-right"></i> Speed Improvement
                                </li>
</ul>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-semibold text-black pr-4 leading-snug">ChampCar Weekend<br/><span className="text-gray-500 font-medium text-base">Watkins Glen</span></h3>
<div className="shrink-0 flex flex-col items-end gap-1">
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-black">$6,000</span>
<span className="text-sm text-gray-400 font-medium">+ travel</span>
</div>
</div>
<div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
<span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 block">Impact</span>
<ul className="flex flex-col gap-2.5">
<li className="flex items-center gap-2 text-base text-gray-900 font-medium">
<i className="w-5 h-5 text-black" data-lucide="arrow-up-right"></i> Stamina
                                </li>
<li className="flex items-center gap-2 text-base text-gray-900 font-medium">
<i className="w-5 h-5 text-black" data-lucide="arrow-up-right"></i> Racecraft
                                </li>
<li className="flex items-center gap-2 text-base text-gray-900 font-medium">
<i className="w-5 h-5 text-black" data-lucide="arrow-up-right"></i> Track Knowledge
                                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="mt-8 mb-4">
<h2 className="text-2xl font-semibold tracking-tight text-black mb-2">Let's set up your racing team plan</h2>
<p className="text-base text-gray-500 mb-8">Follow these steps to create your plan with guidance along the way.</p>
<div className="relative">

<div className="relative pl-14 mb-8 z-10">
<div className="absolute left-0 top-1 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white ring-8 ring-white">
<i className="w-5 h-5 text-white" data-lucide="piggy-bank"></i>
</div>
<div className="absolute left-[19px] top-12 bottom-[-40px] w-[2px] border-l-2 border-dashed border-gray-300 -z-10"></div>
<div className="border border-gray-200 rounded-2xl p-4 flex justify-between items-center bg-white shadow-sm">
<div>
<h3 className="text-base font-semibold text-black">Pick your budget</h3>
<p className="text-sm text-gray-500 mt-1">Decide how much you want to spend</p>
</div>
<button className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium whitespace-nowrap">Continue</button>
</div>
</div>

<div className="relative pl-14 mb-14 z-10">
<div className="absolute left-0 top-1 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white ring-8 ring-white">
<i className="w-5 h-5 text-white" data-lucide="users"></i>
</div>
<div className="absolute left-[19px] top-12 bottom-[-60px] w-[2px] border-l-2 border-dashed border-gray-300 -z-10"></div>
<div className="border border-gray-200 rounded-2xl p-4 flex justify-between items-center bg-white shadow-sm relative">
<div>
<h3 className="text-base font-semibold text-black">Talk to racing experts</h3>
<p className="text-sm text-gray-500 mt-1">Discuss your goals and get expert advice</p>
</div>
<button className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium whitespace-nowrap">Continue</button>

<div className="absolute -bottom-16 right-0 bg-white border border-gray-200 shadow-md rounded-xl p-3 flex gap-3 items-start w-[280px] z-20">
<i className="w-5 h-5 text-black shrink-0 mt-0.5" data-lucide="lightbulb"></i>
<p className="text-sm font-medium text-gray-800 leading-snug">Get personalized advice from our professional racing team</p>
</div>
</div>
</div>

<div className="relative pl-14 z-10 mt-6">
<div className="absolute left-0 top-1 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white ring-8 ring-white">
<i className="w-5 h-5 text-white" data-lucide="settings-2"></i>
</div>
<div className="border border-gray-200 rounded-2xl p-4 flex justify-between items-center bg-white shadow-sm">
<div className="pr-4">
<h3 className="text-base font-semibold text-black">Tweak plan based on advice</h3>
<p className="text-sm text-gray-500 mt-1">Make adjustments to fine- tune your plan</p>
</div>
<button className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium whitespace-nowrap shrink-0">Schedule Call</button>
</div>
</div>
</div>
<button className="w-full mt-10 mb-8 bg-black text-white rounded-full py-4 px-6 flex items-center justify-center gap-3 text-lg font-medium shadow-md active:scale-[0.98] transition-transform">
                    Send plan to team <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</section>
</main>

<nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 pb-safe pt-3 px-8 flex justify-between items-center z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-center w-full pb-5">
<button className="flex flex-col items-center gap-1.5 min-w-[64px] text-black">
<i className="w-6 h-6" data-lucide="home"></i>
<span className="text-[10px] font-semibold tracking-wide uppercase">Home</span>
</button>
<button className="flex flex-col items-center gap-1.5 min-w-[64px] text-black">
<i className="w-6 h-6" data-lucide="settings"></i>
<span className="text-[10px] font-semibold tracking-wide uppercase">Season</span>
</button>
<button className="flex flex-col items-center gap-1.5 min-w-[64px] text-black">
<i className="w-6 h-6" data-lucide="sparkles"></i>
<span className="text-[10px] font-semibold tracking-wide uppercase">AI Coach</span>
</button>
<button className="flex flex-col items-center gap-1.5 min-w-[64px] text-black">
<i className="w-6 h-6" data-lucide="user"></i>
<span className="text-[10px] font-semibold tracking-wide uppercase">Profile</span>
</button>
</div>
</nav>
</div>




    </>
  );
}
