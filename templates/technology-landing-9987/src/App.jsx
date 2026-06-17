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
      

<header className="flex justify-between items-center py-4 px-4 md:px-8 bg-transparent z-10 w-full max-w-7xl mx-auto">
<div className="flex items-center gap-2">
<div className="p-1 border border-gray-300 rounded-md shadow-sm flex items-center justify-center">
<iconify-icon className="text-xl text-gray-800" icon="solar:layers-linear"></iconify-icon>
</div>
<span className="font-semibold text-xl tracking-tight font-sans">Revt</span>
</div>
<nav className="hidden lg:flex items-center gap-8 text-sm uppercase text-gray-700 tracking-wider">
<a className="flex items-center gap-1 hover:text-gray-900 transition-colors" href="#">
                Product <iconify-icon className="text-base text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<a className="hover:text-gray-900 transition-colors" href="#">Pricing</a>
<a className="hover:text-gray-900 transition-colors" href="#">Community</a>
<a className="hover:text-gray-900 transition-colors" href="#">Enterprise</a>
</nav>
<div className="flex items-center gap-4 text-sm uppercase">
<a className="hidden md:inline-block px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors" href="#">Log In</a>
<a className="hover:bg-[#E06D15] transition-colors text-white bg-slate-950 rounded pt-2 pr-4 pb-2 pl-4 shadow-sm" href="#">Get Started</a>
</div>
</header>

<main className="flex-grow overflow-hidden w-full max-w-full border-gray-200/80 border rounded-sm mt-3 mr-auto ml-auto relative">

<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gray-400"></div>
<div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gray-400"></div>
<div className="md:px-16 md:py-24 lg:pt-0 lg:pb-0 lg:pr-0 lg:pl-0 w-full max-w-5xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">

<div className="flex flex-col items-start w-full lg:pt-24 lg:px-16">
<h1 className="md:text-7xl lg:text-[5.5rem] leading-[1.05] text-5xl font-medium text-gray-900 tracking-tight font-sans max-w-[850px] mb-8">
        Human Decisions for the Age of AI</h1>
<p className="uppercase leading-relaxed text-base text-gray-600 tracking-wide max-w-[700px] mb-10">Verify human
  decisions
  before your system acts. Collect approvals, enforce limits, and automate safely across teams, systems, and orgs, from a single API.</p>
<div className="flex flex-wrap items-center gap-4 text-sm uppercase">
<button className="flex gap-2 hover:bg-[#E06D15] transition-colors text-white bg-slate-950 rounded pt-3 pr-6 pb-3 pl-6 shadow-md gap-x-2 gap-y-2 items-center">
                        Start Building <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="hover:bg-gray-50 transition-colors bg-white border-gray-300 border rounded pt-3 pr-6 pb-3 pl-6">Read Docs</button>
</div>
</div>

<div className="-ml-[50vw] -mr-[50vw] md:mt-32 lg:mt-3 md:pt-24 md:pb-20 lg:pt-0 overflow-hidden bg-inherit w-screen mt-20 pt-16 pb-12 relative right-1/2 left-1/2">

<div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center pointer-events-none overflow-hidden">

<div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/80 to-transparent -translate-y-1/2 z-0">
</div>

<div className="absolute top-1/2 left-1/2 -mt-[135px] -ml-[115px] w-[230px] h-[270px] z-30 flex flex-col items-center justify-center">

<div className="absolute inset-0 bg-[#FFFFFF] rounded-[2.1rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] z-10">
</div>

<div className="relative w-[172px] rounded-2xl bg-[#E4D8C8]/25 border border-[#E4D8C8]/40 shadow-[inset_0_2px_8px_rgba(228,216,200,0.15)] p-5 z-20 mb-5">

<div className="mb-4 flex flex-col">
<div className="text-sm font-mono text-gray-800 font-medium tracking-tight flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#E4D8C8] shrink-0" style={{animation: 'apiPulse 2s infinite ease-in-out'}}></div>
            /mandates
          </div>

<div className="text-sm font-mono tracking-tight pl-3.5 mt-1.5 scale-90 origin-left whitespace-nowrap text-shimmer">
            issue → verify
          </div>
</div>

<div className="space-y-3">

<div className="h-[5px] w-full bg-black/5 rounded-full overflow-hidden relative">
<div className="absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-gray-300 via-[#E4D8C8] to-gray-300 rounded-full" style={{animation: 'apiScan 2s infinite linear'}}></div>
</div>
</div>
</div>

<div className="relative z-20 text-center flex justify-center">
<span className="text-sm tracking-widest font-medium text-gray-400 uppercase">Humanos</span>
</div>
</div>


<div className="absolute top-1/2 left-1/2 w-[240px] h-[240px] -mt-[120px] -ml-[120px] z-10" style={{animation: 'slideAcross 24s infinite linear', animationDelay: '0s'}}>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'chaosTransform 24s infinite linear', animationDelay: '0s'}}>
<div className="bg-white opacity-[0.92] rounded-xl shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)] border border-gray-100 p-2.5 flex items-center gap-3 z-20 w-max max-w-[260px]" style={{'--rot': '-8deg', '--y': '-15px', animation: 'floatMessy 4s infinite ease-in-out'}}>
<span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium tracking-wide uppercase shrink-0">trading</span>
<span className="text-sm text-gray-600 leading-tight text-left">Trade approved: BUY €5M AAPL before 16:00</span>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'orderTransform 24s infinite linear', animationDelay: '0s'}}>
<div className="relative flex flex-col items-center">
<div className="w-64 bg-white/80 opacity-[0.92] backdrop-blur-xl rounded-2xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.04),0_0_0_1px_rgba(255,255,255,0.8)] border border-gray-100 p-5 relative overflow-hidden">
<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
<span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Mandate</span>
<iconify-icon className="text-gray-700 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="space-y-2 font-mono text-xs">
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">identity</span>
<div className="h-1.5 flex-1 data-shimmer rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-[#E4D8C8] w-16 text-right">action</span>
<div className="h-1.5 w-16 bg-gray-700 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">rules</span>
<div className="h-1.5 w-12 bg-gray-300 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">context</span>
<div className="h-1.5 flex-1 bg-gray-200 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute top-full mt-3.5 w-max text-center pointer-events-none opacity-[0.92]">
<div className="text-xs text-gray-400 tracking-tight">Verified by trading agent at execution platform</div>
<div className="text-xs text-gray-400/60 font-mono mt-0.5">via Humanos API</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[240px] h-[240px] -mt-[120px] -ml-[120px] z-10" style={{animation: 'slideAcross 24s infinite linear', animationDelay: '-3s'}}>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'chaosTransform 24s infinite linear', animationDelay: '-3s'}}>
<div className="bg-white opacity-[0.92] rounded-xl shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)] border border-gray-100 p-2.5 flex items-center gap-3 z-30 w-max max-w-[260px]" style={{'--rot': '6deg', '--y': '25px', animation: 'floatMessy 4.5s infinite ease-in-out'}}>
<span className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium tracking-wide uppercase shrink-0">chat</span>
<span className="text-sm text-gray-600 leading-tight text-left">"@trader ok to execute up to €10M"</span>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'orderTransform 24s infinite linear', animationDelay: '-3s'}}>
<div className="relative flex flex-col items-center">
<div className="w-64 bg-white/80 opacity-[0.92] backdrop-blur-xl rounded-2xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.04),0_0_0_1px_rgba(255,255,255,0.8)] border border-gray-100 p-5 relative overflow-hidden">
<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
<span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Mandate</span>
<iconify-icon className="text-gray-700 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="space-y-2 font-mono text-xs">
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">identity</span>
<div className="h-1.5 flex-1 data-shimmer rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-[#E4D8C8] w-16 text-right">action</span>
<div className="h-1.5 w-12 bg-gray-700 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">rules</span>
<div className="h-1.5 w-10 bg-gray-300 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">context</span>
<div className="h-1.5 flex-1 bg-gray-200 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute top-full mt-3.5 w-max text-center pointer-events-none opacity-[0.92]">
<div className="text-xs text-gray-400 tracking-tight">Verified by risk engine at trading system</div>
<div className="text-xs text-gray-400/60 font-mono mt-0.5">via Humanos API</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[240px] h-[240px] -mt-[120px] -ml-[120px] z-10" style={{animation: 'slideAcross 24s infinite linear', animationDelay: '-6s'}}>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'chaosTransform 24s infinite linear', animationDelay: '-6s'}}>
<div className="bg-white opacity-[0.92] rounded-xl shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)] border border-gray-100 p-2.5 flex items-center gap-3 z-10 w-max max-w-[260px]" style={{'--rot': '-12deg', '--y': '-25px', animation: 'floatMessy 4s infinite ease-in-out'}}>
<span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-medium tracking-wide uppercase shrink-0">payment</span>
<span className="text-sm text-gray-600 leading-tight text-left">Transfer approved (€250,000 to counterparty)</span>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'orderTransform 24s infinite linear', animationDelay: '-6s'}}>
<div className="relative flex flex-col items-center">
<div className="w-64 bg-white/80 opacity-[0.92] backdrop-blur-xl rounded-2xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.04),0_0_0_1px_rgba(255,255,255,0.8)] border border-gray-100 p-5 relative overflow-hidden">
<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
<span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Mandate</span>
<iconify-icon className="text-gray-700 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="space-y-2 font-mono text-xs">
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">identity</span>
<div className="h-1.5 flex-1 data-shimmer rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-[#E4D8C8] w-16 text-right">action</span>
<div className="h-1.5 w-20 bg-gray-700 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">rules</span>
<div className="h-1.5 w-16 bg-gray-300 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">context</span>
<div className="h-1.5 w-12 bg-gray-200 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute top-full mt-3.5 w-max text-center pointer-events-none opacity-[0.92]">
<div className="text-xs text-gray-400 tracking-tight">Verified by payment processor at treasury platform
            </div>
<div className="text-xs text-gray-400/60 font-mono mt-0.5">via Humanos API</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[240px] h-[240px] -mt-[120px] -ml-[120px] z-10" style={{animation: 'slideAcross 24s infinite linear', animationDelay: '-9s'}}>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'chaosTransform 24s infinite linear', animationDelay: '-9s'}}>
<div className="bg-white opacity-[0.92] rounded-xl shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)] border border-gray-100 p-2.5 flex items-center gap-3 z-30 w-max max-w-[260px]" style={{'--rot': '8deg', '--y': '15px', animation: 'floatMessy 4.5s infinite ease-in-out'}}>
<span className="px-2.5 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium tracking-wide uppercase shrink-0">risk</span>
<span className="text-sm text-gray-600 leading-tight text-left">Daily trading limit validated ($25M)</span>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'orderTransform 24s infinite linear', animationDelay: '-9s'}}>
<div className="relative flex flex-col items-center">
<div className="w-64 bg-white/80 opacity-[0.92] backdrop-blur-xl rounded-2xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.04),0_0_0_1px_rgba(255,255,255,0.8)] border border-gray-100 p-5 relative overflow-hidden">
<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
<span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Mandate</span>
<iconify-icon className="text-gray-700 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="space-y-2 font-mono text-xs">
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">identity</span>
<div className="h-1.5 flex-1 data-shimmer rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-[#E4D8C8] w-16 text-right">action</span>
<div className="h-1.5 w-14 bg-gray-700 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">rules</span>
<div className="h-1.5 w-20 bg-gray-300 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">context</span>
<div className="h-1.5 w-10 bg-gray-200 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute top-full mt-3.5 w-max text-center pointer-events-none opacity-[0.92]">
<div className="text-xs text-gray-400 tracking-tight">Verified by settlement workflow at broker system</div>
<div className="text-xs text-gray-400/60 font-mono mt-0.5">via Humanos API</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[240px] h-[240px] -mt-[120px] -ml-[120px] z-10" style={{animation: 'slideAcross 24s infinite linear', animationDelay: '-12s'}}>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'chaosTransform 24s infinite linear', animationDelay: '-12s'}}>
<div className="bg-white opacity-[0.92] rounded-xl shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)] border border-gray-100 p-2.5 flex items-center gap-3 z-10 w-max max-w-[260px]" style={{'--rot': '-5deg', '--y': '-35px', animation: 'floatMessy 4s infinite ease-in-out'}}>
<span className="px-2.5 py-1 bg-cyan-50 text-cyan-600 rounded-full text-xs font-medium tracking-wide uppercase shrink-0">signature</span>
<span className="text-sm text-gray-600 leading-tight text-left">Policy signed (commercial property)</span>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'orderTransform 24s infinite linear', animationDelay: '-12s'}}>
<div className="relative flex flex-col items-center">
<div className="w-64 bg-white/80 opacity-[0.92] backdrop-blur-xl rounded-2xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.04),0_0_0_1px_rgba(255,255,255,0.8)] border border-gray-100 p-5 relative overflow-hidden">
<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
<span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Mandate</span>
<iconify-icon className="text-gray-700 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="space-y-2 font-mono text-xs">
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">identity</span>
<div className="h-1.5 flex-1 data-shimmer rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-[#E4D8C8] w-16 text-right">action</span>
<div className="h-1.5 w-16 bg-gray-700 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">rules</span>
<div className="h-1.5 flex-1 bg-gray-300 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">context</span>
<div className="h-1.5 w-14 bg-gray-200 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute top-full mt-3.5 w-max text-center pointer-events-none opacity-[0.92]">
<div className="text-xs text-gray-400 tracking-tight">Verified by underwriting workflow at insurer platform
            </div>
<div className="text-xs text-gray-400/60 font-mono mt-0.5">via Humanos API</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[240px] h-[240px] -mt-[120px] -ml-[120px] z-10" style={{animation: 'slideAcross 24s infinite linear', animationDelay: '-15s'}}>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'chaosTransform 24s infinite linear', animationDelay: '-15s'}}>
<div className="bg-white opacity-[0.92] rounded-xl shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)] border border-gray-100 p-2.5 flex items-center gap-3 z-20 w-max max-w-[260px]" style={{'--rot': '14deg', '--y': '35px', animation: 'floatMessy 4.5s infinite ease-in-out'}}>
<span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium tracking-wide uppercase shrink-0">KYC</span>
<span className="text-sm text-gray-600 leading-tight text-left">Claim documentation cleared</span>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'orderTransform 24s infinite linear', animationDelay: '-15s'}}>
<div className="relative flex flex-col items-center">
<div className="w-64 bg-white/80 opacity-[0.92] backdrop-blur-xl rounded-2xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.04),0_0_0_1px_rgba(255,255,255,0.8)] border border-gray-100 p-5 relative overflow-hidden">
<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
<span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Mandate</span>
<iconify-icon className="text-gray-700 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="space-y-2 font-mono text-xs">
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">identity</span>
<div className="h-1.5 flex-1 data-shimmer rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-[#E4D8C8] w-16 text-right">action</span>
<div className="h-1.5 w-10 bg-gray-700 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">rules</span>
<div className="h-1.5 w-12 bg-gray-300 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">context</span>
<div className="h-1.5 w-16 bg-gray-200 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute top-full mt-3.5 w-max text-center pointer-events-none opacity-[0.92]">
<div className="text-xs text-gray-400 tracking-tight">Verified by claims processor at insurance system</div>
<div className="text-xs text-gray-400/60 font-mono mt-0.5">via Humanos API</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[240px] h-[240px] -mt-[120px] -ml-[120px] z-10" style={{animation: 'slideAcross 24s infinite linear', animationDelay: '-18s'}}>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'chaosTransform 24s infinite linear', animationDelay: '-18s'}}>
<div className="bg-white opacity-[0.92] rounded-xl shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)] border border-gray-100 p-2.5 flex items-center gap-3 z-30 w-max max-w-[260px]" style={{'--rot': '-10deg', '--y': '-10px', animation: 'floatMessy 4s infinite ease-in-out'}}>
<span className="px-2.5 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium tracking-wide uppercase shrink-0">database</span>
<span className="text-sm text-gray-600 leading-tight text-left">appointment_status = authorized</span>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'orderTransform 24s infinite linear', animationDelay: '-18s'}}>
<div className="relative flex flex-col items-center">
<div className="w-64 bg-white/80 opacity-[0.92] backdrop-blur-xl rounded-2xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.04),0_0_0_1px_rgba(255,255,255,0.8)] border border-gray-100 p-5 relative overflow-hidden">
<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
<span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Mandate</span>
<iconify-icon className="text-gray-700 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="space-y-2 font-mono text-xs">
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">identity</span>
<div className="h-1.5 flex-1 data-shimmer rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-[#E4D8C8] w-16 text-right">action</span>
<div className="h-1.5 w-14 bg-gray-700 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">rules</span>
<div className="h-1.5 w-10 bg-gray-300 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">context</span>
<div className="h-1.5 w-20 bg-gray-200 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute top-full mt-3.5 w-max text-center pointer-events-none opacity-[0.92]">
<div className="text-xs text-gray-400 tracking-tight">Verified by scheduling agent at provider system</div>
<div className="text-xs text-gray-400/60 font-mono mt-0.5">via Humanos API</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[240px] h-[240px] -mt-[120px] -ml-[120px] z-10" style={{animation: 'slideAcross 24s infinite linear', animationDelay: '-21s'}}>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'chaosTransform 24s infinite linear', animationDelay: '-21s'}}>
<div className="bg-white opacity-[0.92] rounded-xl shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)] border border-gray-100 p-2.5 flex items-center gap-3 z-10 w-max max-w-[260px]" style={{'--rot': '12deg', '--y': '20px', animation: 'floatMessy 4.5s infinite ease-in-out'}}>
<span className="px-2.5 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-medium tracking-wide uppercase shrink-0">voice</span>
<span className="text-sm text-gray-600 leading-tight text-left">Verbal consent confirmed (patient care)</span>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'orderTransform 24s infinite linear', animationDelay: '-21s'}}>
<div className="relative flex flex-col items-center">
<div className="w-64 bg-white/80 opacity-[0.92] backdrop-blur-xl rounded-2xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.04),0_0_0_1px_rgba(255,255,255,0.8)] border border-gray-100 p-5 relative overflow-hidden">
<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
<span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Mandate</span>
<iconify-icon className="text-gray-700 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="space-y-2 font-mono text-xs">
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">identity</span>
<div className="h-1.5 flex-1 data-shimmer rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-[#E4D8C8] w-16 text-right">action</span>
<div className="h-1.5 w-16 bg-gray-700 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">rules</span>
<div className="h-1.5 w-14 bg-gray-300 rounded-full"></div>
</div>
<div className="flex items-center gap-3"><span className="text-gray-400 w-16 text-right">context</span>
<div className="h-1.5 flex-1 bg-gray-200 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute top-full mt-3.5 w-max text-center pointer-events-none opacity-[0.92]">
<div className="text-xs text-gray-400 tracking-tight">Verified by care coordinator at EHR</div>
<div className="text-xs text-gray-400/60 font-mono mt-0.5">via Humanos API</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
