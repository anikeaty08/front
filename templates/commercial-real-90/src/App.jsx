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
      

<nav className="z-50 bg-white w-full border-transparent border-b pt-5 pb-5">
<div className="lg:px-8 flex max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex items-center gap-1 cursor-pointer select-none">
<span className="bg-center text-2xl font-light text-[#0f3833] tracking-tighter font-newsreader w-36 h-16 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f80ea3cd-c714-4a13-869a-64e47034933a_320w.png)] bg-cover"></span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="hover:text-slate-900 transition-colors text-base font-medium text-slate-500 font-sans" href="/pricing">
            Pricing
          </a>
<button className="group flex items-center gap-1 text-base text-slate-500 hover:text-slate-900 font-medium transition-colors font-sans">
            Solutions
            <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<a className="text-base text-slate-500 hover:text-slate-900 font-medium transition-colors font-sans" href="#">
            Resources
          </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex group relative items-center justify-center outline-none" href="#">

<div className="-inset-2 group-hover:bg-[#008f8f]/30 transition-colors duration-500 bg-[#008f8f]/20 rounded-full absolute blur-lg"></div>

<span className="flex items-center gap-1.5 hover:shadow-[0_5px_15px_-5px_rgba(0,143,143,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] active:scale-[0.98] transition-all duration-200 text-sm font-medium text-white font-sans bg-gradient-to-b from-[#008f8f] to-[#006f6f] rounded-full pt-2.5 pr-5 pb-2.5 pl-5 relative shadow-[0_10px_20px_-5px_rgba(0,143,143,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]">
              Log in
              <svg aria-hidden="true" className="lucide lucide-log-in w-4 h-4 opacity-90" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
</span>
</a>

<button className="md:hidden text-slate-500">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<div className="md:pt-24 md:pb-16 md:pl-0 md:pr-0 text-center max-w-4xl mr-auto ml-auto pt-24 pr-6 pb-16 pl-6">
<h1 className="md:text-7xl leading-none text-5xl font-light text-[#0C3838] tracking-tight font-newsreader mb-6">
        AI-Powered Commercial Real Estate Due Diligence
        <br className=""/>
<span className="xl:text-[#0C3838]"></span>
</h1>
<p className="text-lg text-slate-500 font-inter max-w-md mr-auto mb-10 ml-auto">
        Built for Acquisitions and Investment Sales Teams executing $25M+ deals.
      </p>
<div className="flex justify-center">
<button className="group relative flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(20,184,166,0.8)] focus:outline-none">
<style className="">
            @keyframes beam-spin { to { transform: rotate(360deg); } }
          </style>

<div className="absolute inset-0 -z-20 overflow-hidden rounded-full">
<div className="absolute inset-[-100%] animate-[beam-spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,#2dd4bf_360deg)]"></div>

<div className="absolute inset-[3px] rounded-full bg-[#1D4449]"></div>
</div>

<div className="absolute inset-[3px] -z-10 overflow-hidden rounded-full bg-[#1D4449]">

<div className="bg-gradient-to-br from-[#0C3838] via-[#0C3838] to-[#1D4449] border-[#0d3838] border-2 ring-[#163e41] ring-2 absolute top-0 right-0 bottom-0 left-0 cursor-pointer" onclick="window.location.href='https://calendly.com/jeff-axelrod-ddee/ddee-ai-demo'" role="button"></div>

<div className="-translate-x-3/4 transition-colors duration-500 group-hover:bg-teal-400/100 bg-gradient-to-br from-[#0C3838] via-[#0C3838] to-[#1D4449] w-3/4 h-1 rounded-full absolute bottom-0 left-1/2 blur-xl"></div>
</div>

<span className="z-10 text-xl font-bold text-white tracking-wide font-inter relative">
            See DDee.ai In Action
          </span>
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1 z-10 ml-2 relative w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<section className="overflow-hidden md:py-20 lg:py-24 z-0 bg-slate-50/50 w-full border-slate-100 border-t pt-4 pb-4 relative">

<div className="bg-[#ffffff] opacity-[0.4] z-0 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="z-10 sm:px-6 lg:px-8 max-w-[1400px] mr-auto ml-auto pr-4 pl-4 relative">

<div className="lg:hidden flex flex-col gap-6">

<div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
<svg aria-hidden="true" className="lucide lucide-folder-open w-5 h-5" data-lucide="folder-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-800 font-sans">
                Document Inventory
              </h3>
<p className="text-xs text-slate-500 mt-0.5 font-sans">
                INPUT SOURCE
              </p>
</div>
</div>
<div className="h-8 border-l-2 border-dashed border-slate-300 mx-auto"></div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 text-teal-700 mb-4">
<svg aria-hidden="true" className="lucide lucide-cpu w-6 h-6" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2 font-sans">
              AI Processing Engine
            </h3>
<p className="text-sm text-slate-500 font-sans">
              Automated analysis of Leases, Financials, Argus files, and 3rd
              party reports.
            </p>
<div className="mt-6 flex flex-wrap justify-center gap-2">
<span className="px-3 py-1 bg-slate-50 rounded-full text-xs font-medium text-slate-600 border border-slate-100 font-sans">
                Lease Abstract
              </span>
<span className="px-3 py-1 bg-slate-50 rounded-full text-xs font-medium text-slate-600 border border-slate-100 font-sans">
                Financials
              </span>
<span className="px-3 py-1 bg-slate-50 rounded-full text-xs font-medium text-slate-600 border border-slate-100 font-sans">
                Legal
              </span>
</div>
</div>
<div className="h-8 border-l-2 border-dashed border-slate-300 mx-auto"></div>

<div className="bg-[#0b0c0e] p-5 rounded-xl shadow-lg border border-slate-800 flex items-center gap-4 text-white">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-teal-400">
<svg aria-hidden="true" className="lucide lucide-shield-alert w-5 h-5" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-white font-sans">
                IC Risk Synthesis
              </h3>
<p className="text-xs text-slate-400 mt-0.5 font-sans">
                FINAL REPORT
              </p>
</div>
</div>
</div>

<div className="hidden lg:block select-none bg-slate-50 w-[1296px] h-[860px] mr-auto ml-auto relative">

<svg className="absolute inset-0 pointer-events-none z-0" height="860" width="1280" xmlns="http://www.w3.org/2000/svg">
<g fill="none" strokeWidth="1.5">

<path d="M 280 430 C 400 430, 400 94, 520 94" stroke="#e2e8f0"></path>
<path d="M 280 430 C 400 430, 400 178, 520 178" stroke="#e2e8f0"></path>
<path d="M 280 430 C 400 430, 400 262, 520 262" stroke="#e2e8f0"></path>
<path d="M 280 430 C 400 430, 400 346, 520 346" stroke="#e2e8f0"></path>
<path d="M 280 430 C 400 430, 400 430, 520 430" stroke="#e2e8f0"></path>
<path d="M 280 430 C 400 430, 400 514, 520 514" stroke="#e2e8f0"></path>
<path d="M 280 430 C 400 430, 400 598, 520 598" stroke="#e2e8f0"></path>
<path d="M 280 430 C 400 430, 400 682, 520 682" stroke="#e2e8f0"></path>
<path d="M 280 430 C 400 430, 400 766, 520 766" stroke="#e2e8f0"></path>

<path className="animate-flow delay-1" d="M 280 430 C 400 430, 400 94, 520 94" stroke="#14b8a6" style={{animationDuration: '1.5s'}}></path>
<path className="animate-flow delay-2" d="M 280 430 C 400 430, 400 178, 520 178" stroke="#14b8a6" style={{animationDuration: '1.5s'}}></path>
<path className="animate-flow delay-3" d="M 280 430 C 400 430, 400 262, 520 262" stroke="#14b8a6" style={{animationDuration: '1.5s'}}></path>
<path className="animate-flow delay-1" d="M 280 430 C 400 430, 400 346, 520 346" stroke="#14b8a6" style={{animationDuration: '1.5s'}}></path>
<path className="animate-flow delay-4" d="M 280 430 C 400 430, 400 430, 520 430" stroke="#14b8a6" style={{animationDuration: '1.5s'}}></path>
<path className="animate-flow delay-2" d="M 280 430 C 400 430, 400 514, 520 514" stroke="#14b8a6" style={{animationDuration: '1.5s'}}></path>
<path className="animate-flow delay-3" d="M 280 430 C 400 430, 400 598, 520 598" stroke="#14b8a6" style={{animationDuration: '1.5s'}}></path>
<path className="animate-flow delay-1" d="M 280 430 C 400 430, 400 682, 520 682" stroke="#14b8a6" style={{animationDuration: '1.5s'}}></path>
<path className="animate-flow delay-4" d="M 280 430 C 400 430, 400 766, 520 766" stroke="#14b8a6" style={{animationDuration: '1.5s'}}></path>

<path d="M 860 94 C 900 94, 920 350, 980 350" stroke="#e2e8f0"></path>
<path d="M 860 178 C 900 178, 920 350, 980 350" stroke="#e2e8f0"></path>
<path d="M 860 262 C 900 262, 920 350, 980 350" stroke="#e2e8f0"></path>
<path d="M 860 346 C 900 346, 920 350, 980 350" stroke="#e2e8f0"></path>
<path d="M 860 430 C 900 430, 920 350, 980 350" stroke="#e2e8f0"></path>
<path d="M 860 514 C 900 514, 920 350, 980 350" stroke="#e2e8f0"></path>
<path d="M 860 598 C 900 598, 920 350, 980 350" stroke="#e2e8f0"></path>
<path d="M 860 682 C 900 682, 920 350, 980 350" stroke="#e2e8f0"></path>
<path d="M 860 766 C 900 766, 920 350, 980 350" stroke="#e2e8f0"></path>

<path d="M 980 350 C 940 350, 940 480, 980 480" stroke="#e2e8f0"></path>

<path className="animate-flow delay-3" d="M 860 94 C 900 94, 920 350, 980 350" stroke="#14b8a6" style={{animationDuration: '1.5s'}}></path>
<path className="animate-flow delay-1" d="M 860 178 C 900 178, 920 350, 980 350" stroke="#14b8a6" style={{animationDuration: '1.5s'}}></path>
<path className="animate-flow delay-2" d="M 860 598 C 900 598, 920 350, 980 350" stroke="#14b8a6" style={{animationDuration: '1.5s'}}></path>
<path className="animate-flow delay-4" d="M 860 766 C 900 766, 920 350, 980 350" stroke="#14b8a6" style={{animationDuration: '1.5s'}}></path>

<path className="animate-flow delay-3" d="M 980 350 C 940 350, 940 480, 980 480" stroke="#14b8a6" style={{animationDuration: '1.5s'}}></path>
</g>
</svg>

<div className="hover:shadow-md transition-shadow z-10 flex gap-4 bg-white w-[280px] border-slate-200 border rounded-xl pt-5 pr-5 pb-5 pl-5 absolute top-[390px] left-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] gap-x-4 gap-y-4 items-center">
<div className="w-10 h-10 shrink-0 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
<svg className="lucide lucide-folder-open w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path>
</svg>
</div>
<div className="">
<h3 className="font-sans text-sm font-semibold text-slate-800">
                Document Inventory
              </h3>
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mt-0.5">
                Input Source
              </p>
</div>
</div>

<div className="absolute top-[62px] left-[520px] w-[340px] flex flex-col gap-5">
<div className="h-[64px] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 z-10">
<div className="w-8 h-8 shrink-0 rounded bg-teal-50 flex items-center justify-center text-teal-700">
<svg className="lucide lucide-clipboard-check w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<path d="m9 14 2 2 4-4"></path>
</svg>
</div>
<div className="">
<h3 className="font-sans text-[13px] font-semibold text-slate-800 leading-tight">
                  DD Checklist
                </h3>
<p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                  Auto File Inventory
                </p>
</div>
</div>
<div className="h-[64px] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 z-10">
<div className="w-8 h-8 shrink-0 rounded bg-teal-50 flex items-center justify-center text-teal-700">
<svg className="lucide lucide-file-text w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</div>
<div className="">
<h3 className="font-sans text-[13px] font-semibold text-slate-800 leading-tight">
                  Lease Intel
                </h3>
<p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                  Red Flag Summary
                </p>
</div>
</div>
<div className="h-[64px] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 z-10">
<div className="w-8 h-8 shrink-0 rounded bg-teal-50 flex items-center justify-center text-teal-700">
<svg className="lucide lucide-bar-chart-3 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
</div>
<div className="">
<h3 className="font-sans text-[13px] font-semibold text-slate-800 leading-tight">
                  Financials
                </h3>
<p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                  Historical Review
                </p>
</div>
</div>
<div className="h-[64px] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 z-10">
<div className="w-8 h-8 shrink-0 rounded bg-teal-50 flex items-center justify-center text-teal-700">
<svg className="lucide lucide-link w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
</div>
<div className="">
<h3 className="font-sans text-[13px] font-semibold text-slate-800 leading-tight">
                  Argus Audit
                </h3>
<p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                  Rent &amp; CAM Audit
                </p>
</div>
</div>
<div className="h-[64px] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 z-10">
<div className="w-8 h-8 shrink-0 rounded bg-teal-50 flex items-center justify-center text-teal-700">
<svg className="lucide lucide-search w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
</div>
<div className="">
<h3 className="font-sans text-[13px] font-semibold text-slate-800 leading-tight">
                  Tenant Credit
                </h3>
<p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                  Probability of Default
                </p>
</div>
</div>
<div className="h-[64px] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 z-10">
<div className="w-8 h-8 shrink-0 rounded bg-teal-50 flex items-center justify-center text-teal-700">
<svg className="lucide lucide-scale w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v18"></path>
<path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path>
<path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path>
<path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path>
<path d="M7 21h10"></path>
</svg>
</div>
<div className="">
<h3 className="font-sans text-[13px] font-semibold text-slate-800 leading-tight">
                  Legal Review
                </h3>
<p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                  Title, Survey, Zoning
                </p>
</div>
</div>
<div className="h-[64px] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 z-10">
<div className="w-8 h-8 shrink-0 rounded bg-teal-50 flex items-center justify-center text-teal-700">
<svg className="lucide lucide-hammer w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path>
<path d="m18 15 4-4"></path>
<path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path>
</svg>
</div>
<div className="">
<h3 className="font-sans text-[13px] font-semibold text-slate-800 leading-tight">
                  Operations
                </h3>
<p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                  Ledger, Contracts
                </p>
</div>
</div>
<div className="h-[64px] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 z-10">
<div className="w-8 h-8 shrink-0 rounded bg-teal-50 flex items-center justify-center text-teal-700">
<svg className="lucide lucide-landmark w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 18v-7"></path>
<path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path>
<path d="M14 18v-7"></path>
<path d="M18 18v-7"></path>
<path d="M3 22h18"></path>
<path d="M6 18v-7"></path>
</svg>
</div>
<div className="">
<h3 className="font-sans text-[13px] font-semibold text-slate-800 leading-tight">
                  Tax Intel
                </h3>
<p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                  Assessments/Appeals
                </p>
</div>
</div>
<div className="h-[64px] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 z-10">
<div className="w-8 h-8 shrink-0 rounded bg-teal-50 flex items-center justify-center text-teal-700">
<svg className="lucide lucide-leaf w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
<path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
</svg>
</div>
<div className="">
<h3 className="font-sans text-[13px] font-semibold text-slate-800 leading-tight">
                  PCA &amp; ESA Reports
                </h3>
<p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                  CapEx Underwriting
                </p>
</div>
</div>
</div>

<div className="absolute left-[980px] top-0 bottom-0 w-[300px] pointer-events-none">

<div className="absolute top-[310px] w-full bg-white p-5 rounded-xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] z-10 flex items-center gap-4 pointer-events-auto">
<div className="w-10 h-10 shrink-0 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
<svg className="lucide lucide-files w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"></path>
<path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"></path>
<path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"></path>
</svg>
</div>
<div className="">
<h3 className="font-sans text-sm font-semibold text-slate-800">
                  Findings Library
                </h3>
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mt-0.5">
                  Structured Data
                </p>
</div>
</div>

<div className="z-10 flex gap-4 pointer-events-auto text-white bg-[#050505] w-full border-slate-800 border rounded-xl pt-5 pr-5 pb-5 pl-5 absolute top-[440px] shadow-lg gap-x-4 gap-y-4 items-center">
<div className="w-10 h-10 shrink-0 rounded-lg bg-slate-800 flex items-center justify-center text-teal-400">
<svg className="lucide lucide-shield-alert w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="M12 8v4"></path>
<path d="M12 16h.01"></path>
</svg>
</div>
<div className="">
<h3 className="font-sans text-sm font-semibold text-white">
                  IC Risk Synthesis
                </h3>
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mt-0.5">
                  Final Report
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 bg-white border-slate-100 border-b pt-0 pb-0 relative">
<div className="grid grid-cols-1 md:grid-cols-3 text-[#0e3833] max-w-5xl border-slate-100 border-t mr-auto ml-auto pt-12 pb-12 gap-x-12 gap-y-12">

<div className="flex flex-col items-center group">
<div className="relative mb-2">
<span className="md:text-7xl leading-none group-hover:text-[#008f8f] hover:text-[#008f8f] transition-colors duration-300 text-6xl font-light text-[#0C3838] tracking-tight font-newsreader">
              70+
            </span>
</div>
<div className="h-0.5 w-8 bg-brand-100 mb-3 rounded-full group-hover:w-16 transition-all duration-300"></div>
<span className="uppercase text-xs font-semibold text-slate-500 tracking-widest font-sans">
            Transactions Analyzed
          </span>
</div>

<div className="flex flex-col group relative items-center">

<div className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-slate-100"></div>
<div className="hidden md:block absolute right-0 top-2 bottom-2 w-px bg-slate-100"></div>
<div className="relative mb-2">
<span className="md:text-7xl leading-none group-hover:text-[#008f8f] hover:text-[#008f8f] transition-colors duration-300 text-6xl font-light text-[#0C3838] tracking-tight font-newsreader">
              50k+
            </span>
</div>
<div className="h-0.5 w-8 bg-brand-100 mb-3 rounded-full group-hover:w-16 transition-all duration-300"></div>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-sans">
            Pages Processed
          </span>
</div>

<div className="flex flex-col items-center group">
<div className="relative mb-2">
<span className="md:text-7xl leading-none group-hover:text-[#008f8f] hover:text-[#008f8f] transition-colors duration-300 text-6xl font-light text-[#0C3838] tracking-tight font-newsreader">
              500M
            </span>
</div>
<div className="h-0.5 w-8 bg-brand-100 mb-3 rounded-full group-hover:w-16 transition-all duration-300"></div>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-sans">
            Tokens Processed
          </span>
</div>
</div>
</section>

<section className="md:py-20 lg:py-24 bg-white pt-16 pb-16 relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-24 max-w-3xl mx-auto">
<h2 className="text-5xl md:text-6xl text-[#0f3833] mb-6 tracking-tight font-newsreader font-light">
            How It Works
          </h2>
<p className="text-lg text-slate-500 font-medium font-sans">
            A self serve platform with 13 module enabling 1-day diligence
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 gap-x-16 gap-y-16 items-start">

<div className="flex flex-col gap-10 pt-4 gap-x-10 gap-y-10">

<div className="relative pb-10 border-b border-dashed border-slate-200">
<div className="flex gap-5">
<div className="text-[#008a8a] flex-shrink-0 mt-1">
<svg aria-hidden="true" className="lucide lucide-cloud-upload w-6 h-6" data-lucide="cloud-upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-bold text-[#0f3833] font-sans mb-3">
                    Step 1: Upload your data room
                  </h3>
<p className="text-slate-500 leading-relaxed text-[17px] font-sans">
                    Drag and drop up to 1,000 files — PDFs, Excel, Word, images.
                    DDee.ai automatically classifies every document and flags
                    what's missing.
                  </p>
</div>
</div>
</div>

<div className="relative pb-10 border-b border-dashed border-slate-200">
<div className="flex gap-5">
<div className="text-[#008a8a] flex-shrink-0 mt-1">
<svg aria-hidden="true" className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="">
<h3 className="text-xl font-bold text-[#0f3833] font-sans mb-3">
                    Step 2: DDEE runs your diligence
                  </h3>
<p className="leading-relaxed text-[17px] text-slate-500 font-sans">
                    One click full property lease abstracts, financials review,
                    ARGUS audit, legal red flags and more.
                  </p>
</div>
</div>
</div>

<div className="relative">
<div className="flex gap-5">
<div className="text-[#008a8a] flex-shrink-0 mt-1">
<svg aria-hidden="true" className="lucide lucide-file-check w-6 h-6" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-bold text-[#0f3833] font-sans mb-3">
                    Step 3: Export Reports
                  </h3>
<p className="text-slate-500 leading-relaxed text-[17px] font-sans">
                    Get a structured DD report with severity-rated findings,
                    exposure quantification, and recommended actions. Ready for
                    your investment committee.
                  </p>
</div>
</div>
</div>
</div>

<div className="relative bg-slate-50 rounded-2xl border border-slate-100 h-[560px] overflow-hidden w-full shadow-inner">

<div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-50 rounded-2xl overflow-hidden shadow-inner">
<style>
                @keyframes scan-beam-move {
                  0% {
                    transform: translateY(-100%);
                    opacity: 0;
                  }

                  10% {
                    opacity: 1;
                  }

                  90% {
                    opacity: 1;
                  }

                  100% {
                    transform: translateY(350%);
                    opacity: 0;
                  }
                }

                @keyframes doc-slide {
                  0% {
                    transform: translateY(-20px) scale(0.98);
                    opacity: 0;
                  }

                  15% {
                    transform: translateY(0) scale(1);
                    opacity: 1;
                  }

                  85% {
                    transform: translateY(0) scale(1);
                    opacity: 1;
                  }

                  100% {
                    transform: translateY(20px) scale(0.98);
                    opacity: 0;
                  }
                }

                @keyframes badge-pop {
                  0% {
                    transform: scale(0.5);
                    opacity: 0;
                  }

                  60% {
                    transform: scale(1.1);
                    opacity: 1;
                  }

                  100% {
                    transform: scale(1);
                    opacity: 1;
                  }
                }

                @keyframes progress-fill {
                  0% {
                    width: 0%;
                  }

                  100% {
                    width: 100%;
                  }
                }
              </style>

<div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative w-[340px] bg-white rounded-xl shadow-2xl border border-slate-200/60 backdrop-blur-sm overflow-hidden flex flex-col z-10">

<div className="h-11 bg-white border-b border-slate-100 flex items-center justify-between px-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="flex items-center gap-2 px-2 py-1 bg-teal-50 rounded-full border border-teal-100">
<div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></div>
<span className="text-[10px] font-semibold text-teal-700 uppercase tracking-wide font-sans">
                      Processing
                    </span>
</div>
</div>

<div className="flex overflow-hidden bg-slate-50/50 h-[340px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">

<div className="absolute w-[240px] h-[300px] bg-white rounded-lg shadow-sm border border-slate-200 rotate-3 opacity-40 scale-95"></div>
<div className="absolute w-[240px] h-[300px] bg-white rounded-lg shadow-sm border border-slate-200 -rotate-2 opacity-60 scale-95"></div>

<div className="relative w-[240px] h-[300px] bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-200 flex flex-col overflow-hidden" style={{animation: '4s cubic-bezier(0.4, 0, 0.2, 1) 0s infinite normal none running doc-slide'}}>

<div className="pt-5 pr-5 pb-5 pl-5 space-y-4">
<div className="flex items-start justify-between">
<div className="space-y-2"></div>
</div>
<div className="pt-2 space-y-2">
<div className="h-1.5 bg-slate-100 w-full rounded"></div>
<div className="h-1.5 w-[92%] bg-slate-100 rounded"></div>
<div className="h-1.5 w-[96%] bg-slate-100 rounded"></div>
<div className="h-1.5 w-[85%] bg-slate-100 rounded"></div>
</div>
<div className="border-dashed flex bg-slate-50 w-full h-24 border-slate-200 border rounded items-center justify-center">
<svg className="text-slate-300 w-[32px] h-[32px]" data-icon-replaced="true" data-icon-set="solar" data-solar="document-outline" fill="none" height="32" stroke="currentColor" strokeWidth="1.5" style={{color: 'rgb(203, 213, 225)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M6.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14M7.25 10A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" fill="#cbd5e1" fill-rule="evenodd"></path>
</svg>
</div>
<div className="flex gap-2 pt-1">
<div className="h-1.5 w-1/3 bg-slate-100 rounded"></div>
<div className="h-1.5 w-1/3 bg-slate-100 rounded"></div>
</div>
</div>

<div className="absolute inset-x-0 top-0 h-[60px] bg-gradient-to-b from-teal-500/0 via-teal-500/10 to-teal-500/0 border-b border-teal-500/20 z-20 pointer-events-none" style={{animation: '4s linear 0s infinite normal none running scan-beam-move'}}></div>

<div className="text-[10px] flex gap-1 font-bold text-green-700 bg-green-50 opacity-0 border-green-200 border rounded pt-0 pr-4 pb-0 pl-4 absolute top-4 right-40 left-4 shadow-sm gap-x-1 gap-y-1 items-center font-sans" style={{animation: '4s ease-out 1.2s infinite normal none running badge-pop'}}>
                      Lease
                    </div>
</div>
</div>

<div className="bg-white p-4 border-t border-slate-100">
<div className="flex justify-between items-end mb-2">
<div className="space-y-0.5">
<div className="text-xs font-semibold text-slate-900 font-sans">
                        Analysis in progress
                      </div>
<div className="text-[10px] text-slate-500 font-sans">
                        Extracting key lease terms...
                      </div>
</div>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-teal-500 rounded-full" style={{animation: '4s linear 0s infinite normal none running progress-fill'}}></div>
</div>
</div>
</div>
</div>


<div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[85%] h-[400px] bg-white rounded-t-lg border border-slate-200 shadow-sm opacity-60 scale-95 origin-bottom"></div>

<div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[85%] h-[400px] bg-white rounded-t-lg border border-slate-200 shadow-md opacity-80 scale-[0.98] origin-bottom"></div>

<div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[85%] h-[500px] bg-white rounded-t-xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden">

<div className="h-14 bg-slate-900 w-full flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>

<div className="p-8 flex flex-col items-center">

<div className="w-full space-y-4 mb-12">
<div className="h-4 bg-slate-100 rounded w-3/4"></div>
<div className="h-4 bg-slate-100 rounded w-full"></div>
<div className="h-4 bg-slate-100 rounded w-5/6"></div>
<div className="h-4 bg-slate-100 rounded w-full"></div>
</div>
<div className="w-full space-y-4 mb-16 opacity-50">
<div className="h-4 bg-slate-100 rounded w-2/3"></div>
<div className="h-4 bg-slate-100 rounded w-full"></div>
<div className="h-4 bg-slate-100 rounded w-4/5"></div>
</div>

<div className="w-16 h-16 bg-[#008a8a] rounded-xl flex items-center justify-center shadow-lg shadow-teal-900/20 text-white mb-6">
<svg aria-hidden="true" className="lucide lucide-scan-line w-8 h-8" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
</div>
<div className="w-32 h-2 bg-slate-200 rounded-full mb-2"></div>
<div className="w-20 h-2 bg-slate-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden md:py-20 lg:py-24 bg-[#0C3838] pt-16 pb-16 relative">

<div className="z-10 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
<div className="inline-flex justify-center mb-8 relative">
<div className="absolute inset-0 bg-teal-500/30 blur-3xl rounded-full"></div>
<div className="relative z-10 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-inner ring-1 ring-white/20">
<svg className="lucide lucide-lock text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
</div>
<h2 className="text-5xl md:text-6xl text-white tracking-tight mb-6 font-newsreader font-light">
            Enterprise-ready
          </h2>
<p className="text-lg md:text-xl leading-relaxed text-slate-400 max-w-lg mx-auto font-sans">
            DDee.ai is built for the demands of enterprise users
          </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

<div className="space-y-6 flex flex-col">

<div className="group flex-1 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-900/20 transition-all duration-300 bg-white/5 border-white/10 border rounded-3xl p-8 backdrop-blur-sm">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 group-hover:text-white group-hover:bg-teal-500 transition-all duration-300 border border-teal-500/20 group-hover:border-teal-500">
<svg className="lucide lucide-activity w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3 font-sans">
                Bank-Level Encryption
              </h3>
<p className="leading-relaxed text-sm text-slate-400 font-sans">
                AES-256 encryption at rest, TLS 1.3 in transit
              </p>
</div>

<div className="group flex-1 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-900/20 transition-all duration-300 bg-white/5 border-white/10 border rounded-3xl p-8 backdrop-blur-sm">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 group-hover:text-white group-hover:bg-teal-500 transition-all duration-300 border border-teal-500/20 group-hover:border-teal-500">
<svg className="lucide lucide-headset w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 11v3a8 8 0 0 1 16 0v-3"></path>
<path d="M12 6a4 4 0 0 0-2-2.83"></path>
<path d="M14 22a2 2 0 0 0 2-2v-2"></path>
<path d="M22 22a2 2 0 0 0-2-2v-1"></path>
<path d="M20 11v-1a6 6 0 0 0-6-6"></path>
<path d="M5.18 17H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3 font-sans">
                Multi-Tenant Architecture
              </h3>
<p className="leading-relaxed text-sm text-slate-400 font-sans">
                Complete data isolation per organization with comprehensive
                audit logs
              </p>
</div>
</div>

<div className="hidden lg:flex flex-col justify-center items-center relative min-h-[400px]">

<div className="absolute w-full max-w-[200px] aspect-square bg-teal-500/20 rounded-full blur-[80px] animate-pulse-glow"></div>

<div className="relative w-full max-w-[260px] aspect-[0.7] rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md shadow-2xl flex flex-col items-center justify-between p-6 overflow-hidden transform hover:scale-105 transition-transform duration-500 z-10">
<div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-500 opacity-20"></div>

<div className="flex gap-2 self-start opacity-50">
<div className="w-2 h-2 rounded-full bg-red-400/80"></div>
<div className="w-2 h-2 rounded-full bg-amber-400/80"></div>
<div className="w-2 h-2 rounded-full bg-green-400/80"></div>
</div>

<div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-tr from-teal-500/20 to-teal-400/10 border border-teal-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.3)]">
<svg className="lucide lucide-shield-check text-white drop-shadow-lg" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>

<div className="w-full space-y-2 opacity-40">
<div className="h-1.5 w-3/4 bg-white/50 rounded-full"></div>
<div className="h-1.5 w-1/2 bg-white/30 rounded-full"></div>
</div>
</div>
</div>

<div className="space-y-6 flex flex-col">

<div className="group flex-1 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-900/20 transition-all duration-300 bg-white/5 border-white/10 border rounded-3xl p-8 backdrop-blur-sm">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 group-hover:text-white group-hover:bg-teal-500 transition-all duration-300 border border-teal-500/20 group-hover:border-teal-500">
<svg className="lucide lucide-file-lock-2 w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>
<path d="M14 2v6h6"></path>
<rect height="5" rx="1" width="8" x="2" y="13"></rect>
<path d="M8 13v-2a2 2 0 1 0-4 0v2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3 font-sans">
                SOC2 Type II in Progress
              </h3>
<p className="leading-relaxed text-sm text-slate-400 font-sans">
                Comprehensive audit controls in progress. View our security
                policies
                <a className="text-teal-400 hover:text-teal-300 underline underline-offset-4 decoration-teal-500/30 font-sans" href="#">
                  here
                </a>
</p>
</div>

<div className="group flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-900/20 transition-all duration-300">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 group-hover:text-white group-hover:bg-teal-500 transition-all duration-300 border border-teal-500/20 group-hover:border-teal-500">
<svg className="lucide lucide-server w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3 font-sans">
                No AI Training on Your Data
              </h3>
<p className="leading-relaxed text-sm text-slate-400 font-sans">
                Your documents never train AI models
              </p>
</div>
</div>
</div>
</div>
</section>
<footer className="relative border-white/10 border-t pt-16 pb-12 bg-[#051818] text-white">
<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
<div className="absolute left-1/2 -translate-x-1/2 -top-10 w-[90vw] max-w-6xl h-56 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.15)_0%,transparent_65%)]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="text-2xl font-light tracking-tight font-newsreader text-white">
                DDee.ai
              </span>
</div>
<p className="text-sm text-slate-400 font-sans leading-relaxed">
              The AI-powered due diligence platform for commercial real estate
              professionals.
            </p>
</div>
<div className="">
<h4 className="text-base font-semibold tracking-tight text-white font-sans mb-4">
              Product
            </h4>
<ul className="space-y-3 text-sm">
<li className="">
<a className="text-slate-400 hover:text-teal-400 transition-colors font-sans" href="#">
                  Features
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-teal-400 transition-colors font-sans" href="#">
                  Security
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-teal-400 transition-colors font-sans" href="#">
                  Enterprise
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-teal-400 transition-colors font-sans" href="#">
                  Pricing
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-base font-semibold tracking-tight text-white font-sans mb-4">
              Company
            </h4>
<ul className="space-y-3 text-sm">
<li className="">
<a className="text-slate-400 hover:text-teal-400 transition-colors font-sans" href="#">
                  About
                </a>
</li>
<li className="">
<a className="text-slate-400 hover:text-teal-400 transition-colors font-sans" href="#">
                  Blog
                </a>
</li>
<li className="">
</li>
<li>
<a className="text-slate-400 hover:text-teal-400 transition-colors font-sans" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight text-white font-sans mb-4">
              Subscribe
            </h4>
<form className="mt-2">
<div className="flex flex-col gap-3">
<input className="w-full rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none px-4 py-2.5 text-sm font-sans transition" placeholder="Enter your email" type="email"/>
<button className="inline-flex justify-center items-center gap-2 hover:bg-teal-600 transition-all shadow-[0_0_20px_-5px_rgba(20,184,166,0.3)] text-sm font-medium text-white bg-[#008f8f] rounded-full py-2.5 px-4">
                  Subscribe
                  <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</form>
</div>
</div>
<div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
<p className="font-sans">© 2026 DDee.ai. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors font-sans" href="#">
              Privacy
            </a>
<a className="hover:text-white transition-colors font-sans" href="#">
              Terms
            </a>
<a className="hover:text-white transition-colors font-sans" href="#">
              Cookies
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
