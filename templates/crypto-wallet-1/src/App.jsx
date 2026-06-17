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
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-12 max-w-4xl w-full">
<div className="flex items-center gap-2">
<div className="bg-[#0D0D0D] text-white p-1 rounded-lg">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="font-semibold tracking-tight text-lg font-geist">Quack</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-[#DE5833] transition-colors font-geist" href="#">Advantages</a>
<a className="hover:text-[#DE5833] transition-colors font-geist" href="#">About Us</a>
<a className="hover:text-[#DE5833] transition-colors font-geist" href="#">Security</a>
</div>
<a className="bg-[#0D0D0D] hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-[0.98] flex items-center gap-2 font-geist" href="#">
<svg className="lucide lucide-layout-grid w-4 h-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                Download
            </a>
</div>
</nav>

<header className="lg:px-12 hero-gradient overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5 z-10 flex flex-col gap-8 relative gap-x-8 gap-y-8">
<div className="flex items-center gap-2 text-[#DE5833] font-semibold tracking-wide text-xs uppercase">
<span className="bg-[#DE5833]/10 px-3 py-1 rounded-full font-geist">New Release</span>
<span className="font-geist">Privacy First v2.0</span>
</div>
<h1 className="text-6xl lg:text-7xl tracking-tight leading-[0.95] text-[#0D0D0D] font-space-grotesk font-semibold">
                    QUIT GOOD<br/>
                    AND <span className="text-[#DE5833] font-space-grotesk font-semibold">INCREDIBLY</span> SAFE.
                </h1>
<p className="text-lg text-gray-500 max-w-md leading-relaxed font-geist">
                    Stop the tracking. Keep the crypto. The first wallet engineered with industrial-grade privacy and zero-knowledge architecture.
                </p>
<div className="flex items-center gap-4 pt-4">
<button className="bg-[#DE5833] text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg shadow-[#DE5833]/30 hover:shadow-[#DE5833]/50 transition-all hover:scale-[0.98] flex items-center gap-3">
<svg className="lucide lucide-download w-5 h-5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="font-geist">Download App</span>
</button>
<div className="flex -space-x-3 pl-4">
<div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 font-geist">JP</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600 font-geist">AS</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-[#0D0D0D] text-white flex items-center justify-center text-xs font-bold font-geist">+18M</div>
</div>
</div>
</div>

<div className="lg:col-span-7 relative">

<div className="relative bg-[#0D0D0D] rounded-[32px] p-3 shadow-2xl rotate-1 lg:rotate-0 transform transition-transform hover:rotate-0 duration-700">
<div className="bg-slate-100 rounded-[24px] overflow-hidden relative min-h-[500px]">

<div className="flex items-center justify-between p-6 border-b border-slate-200">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#0D0D0D] flex items-center justify-center">
<svg className="lucide lucide-wallet text-white w-5 h-5" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div>
<div className="text-sm font-semibold text-gray-900 font-geist">Portfolio</div>
<div className="text-xs text-gray-500 font-geist">Overview</div>
</div>
</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<svg className="lucide lucide-bell w-4 h-4 text-gray-500" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<div className="w-8 h-8 rounded-full bg-[#DE5833] flex items-center justify-center text-white text-xs font-bold font-geist">Z</div>
</div>
</div>

<div className="p-6 grid grid-cols-2 gap-4">

<div className="col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
<div className="text-sm text-gray-500 mb-1 font-geist">Total Balance</div>
<div className="text-4xl tracking-tight text-gray-900 font-space-grotesk font-semibold">$ 17,643.41</div>
<div className="flex gap-2 mt-4">
<span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 font-geist">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +12.4%
                                    </span>
</div>

<svg className="absolute bottom-0 right-0 w-48 h-24 text-[#DE5833] opacity-10" preserveaspectratio="none" viewbox="0 0 100 50">
<path className="" d="M0 50 L0 30 Q20 40 40 20 T100 0 L100 50 Z" fill="currentColor"></path>
</svg>
</div>

<div className="bg-gray-50 rounded-3xl p-5 border border-slate-200">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-[#F7931A] text-white flex items-center justify-center"><svg className="lucide lucide-bitcoin w-4 h-4" data-lucide="bitcoin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg></div>
<span className="font-semibold text-sm font-geist">Bitcoin</span>
</div>
<div className="text-lg font-semibold font-geist">1.25 BTC</div>
<div className="text-xs text-gray-500 font-geist">$ 20,480</div>
</div>
<div className="bg-[#0D0D0D] rounded-3xl p-5 text-white relative overflow-hidden">
<div className="absolute -top-4 -right-4 w-16 h-16 bg-[#DE5833] rounded-full blur-xl opacity-30"></div>
<div className="flex items-center gap-2 mb-3 relative z-10">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center"><svg className="lucide lucide-gem w-4 h-4" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg></div>
<span className="font-semibold text-sm font-geist">ETH</span>
</div>
<div className="text-lg font-semibold relative z-10 font-geist">4.20 ETH</div>
<div className="text-xs text-gray-400 relative z-10 font-geist">$ 8,240</div>
</div>
</div>
</div>
</div>


<div className="absolute -right-8 top-12 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:3s]">
<div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<div className="text-xs font-bold text-gray-400 uppercase tracking-wide font-geist">Security</div>
<div className="text-sm font-semibold text-gray-900 font-geist">Audited 100%</div>
</div>
</div>

<div className="absolute -left-6 bottom-32 glass-panel rounded-2xl p-4 flex items-center gap-3 backdrop-blur-md z-20 protrude-float">
<div className="w-10 h-10 rounded-full bg-orange-50 text-[#DE5833] flex items-center justify-center">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<div className="text-xs font-bold text-gray-500 uppercase tracking-wide font-geist">Speed</div>
<div className="text-sm font-semibold text-gray-900 font-geist">Instant Swap</div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block" style={{overflow: 'visible'}}>
<path className="opacity-30" d="M-40 200 Q 20 200 50 250" fill="none" stroke="#DE5833" stroke-dasharray="6 4" strokeWidth="2"></path>
<circle cx="-40" cy="200" fill="#DE5833" r="4"></circle>
</svg>

<div className="absolute -right-24 top-1/4 hidden lg:flex flex-col gap-8">
<div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg border border-white/50 w-64 translate-x-4">
<div className="flex items-start gap-3">
<svg className="lucide lucide-link w-5 h-5 text-[#DE5833] mt-1" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
<div>
<h4 className="font-semibold text-sm text-gray-900 font-geist">EARN MONTHLY</h4>
<p className="text-xs text-gray-500 mt-1 leading-relaxed font-geist">Spending time with your colleagues and communicating.</p>
</div>
</div>
</div>
<div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg border border-white/50 w-64 translate-x-8">
<div className="flex items-start gap-3">
<svg className="lucide lucide-eye-off w-5 h-5 text-[#DE5833] mt-1" data-lucide="eye-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path d="m2 2 20 20"></path></svg>
<div className="">
<h4 className="font-semibold text-sm text-gray-900 font-geist">PRO MODE</h4>
<p className="text-xs text-gray-500 mt-1 leading-relaxed font-geist">One-click Tor routing for trading &amp; exchange.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-gray-200 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8 text-center md:text-left">
<div>
<div className="text-sm text-gray-500 font-medium font-geist">Trusted by</div>
<div className="text-2xl tracking-tight font-space-grotesk font-semibold"><span className="text-[#DE5833] font-space-grotesk font-semibold">18M</span> people</div>
</div>
<div>
<div className="text-sm text-gray-500 font-medium font-geist">Code</div>
<div className="text-2xl tracking-tight text-[#DE5833] font-space-grotesk font-semibold">Open Source</div>
</div>
<div>
<div className="text-sm text-gray-500 font-medium font-geist">ISO</div>
<div className="text-2xl tracking-tight text-[#DE5833] font-space-grotesk font-semibold">Certified</div>
</div>
<div className="flex items-center gap-2">
<div className="text-right">
<div className="text-sm text-gray-500 font-medium font-geist">Independently</div>
<div className="text-lg font-semibold tracking-tight font-geist">Audited</div>
</div>
<div className="bg-[#0D0D0D] text-white px-3 py-1 rounded-md text-xs font-bold tracking-widest uppercase font-geist">CertiK</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-slate-50">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 relative overflow-visible group hover:shadow-xl transition-all duration-300">
<div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-geist">Best Program</div>
<h3 className="text-xl font-semibold tracking-tight mb-4 font-geist">STAKING &amp; BALANCE<br/>INTEREST</h3>

<div className="absolute -right-6 top-16 bg-[#0D0D0D] text-white p-4 rounded-xl shadow-2xl z-20 transform rotate-3 group-hover:rotate-6 transition-transform">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-gray-400 font-geist">Yield</span>
<svg className="lucide lucide-trending-up w-3 h-3 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="text-2xl text-[#DE5833] font-space-grotesk font-semibold">+0.0074 BTC</div>
<div className="text-xs text-gray-400 font-geist">January balance interest</div>
</div>

<div className="mt-12 bg-[#1a1a1a] rounded-t-[24px] h-48 w-full p-2 mx-auto relative overflow-hidden border-4 border-[#0D0D0D]">
<img alt="app" className="w-full h-full object-cover rounded-[20px] opacity-80" src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>

<div className="absolute bottom-6 left-6">
<button className="flex items-center bg-[#DE5833] rounded-full pl-5 pr-1 py-1.5 text-white text-sm font-semibold hover:scale-95 transition-transform">
<span className="mr-3 font-geist">MORE</span>
<div className="bg-white text-[#DE5833] rounded-full p-1.5">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
</div>
</div>

<div className="bg-white rounded-[32px] flex items-center justify-center shadow-sm border border-slate-100 relative overflow-hidden">
<h2 className="text-6xl lg:text-8xl tracking-tighter text-[#DE5833] font-space-grotesk font-semibold">Quack</h2>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
</div>

<div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 relative overflow-visible group hover:shadow-xl transition-all duration-300">
<div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-geist">Fast</div>
<h3 className="text-xl font-semibold tracking-tight mb-4 font-geist">SWAP &amp; TRADE WITH<br/>AI FEATURES</h3>

<div className="absolute -right-4 -top-4 bg-[#0D0D0D] text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 z-20 font-geist">
<svg className="lucide lucide-bot w-3 h-3 text-[#DE5833]" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
                        AI ACTIVE
                    </div>
<div className="mt-6 bg-[#0D0D0D] rounded-xl p-3 shadow-lg relative h-40 w-full overflow-hidden">

<svg className="w-full h-full text-[#DE5833]" preserveaspectratio="none" viewbox="0 0 200 100">
<path d="M0 80 C 40 80, 50 20, 100 50 S 150 90, 200 10" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path d="M0 80 C 40 80, 50 20, 100 50 S 150 90, 200 10 V 100 H 0 Z" fill="currentColor" fillOpacity="0.1"></path>
</svg>
</div>
<div className="absolute bottom-6 left-6">
<button className="flex items-center bg-[#DE5833] rounded-full pl-5 pr-1 py-1.5 text-white text-sm font-semibold hover:scale-95 transition-transform">
<span className="mr-3 font-geist">MORE</span>
<div className="bg-white text-[#DE5833] rounded-full p-1.5">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
</div>
</div>

<div className="bg-slate-100 rounded-[32px] p-8 relative overflow-hidden">
<div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-geist">Proof of</div>
<h3 className="text-xl font-semibold tracking-tight mb-4 font-geist">ANONYMITY &amp; SECURITY</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6 font-geist">Our search engine has been operating since 2008. We've stood for free, anonymous internet.</p>
<div className="absolute bottom-6 left-6">
<button className="flex items-center bg-[#DE5833] rounded-full pl-5 pr-1 py-1.5 text-white text-sm font-semibold hover:scale-95 transition-transform">
<span className="mr-3 font-geist">MORE</span>
<div className="bg-white text-[#DE5833] rounded-full p-1.5">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
</div>
</div>

<div className="lg:col-span-2 bg-white rounded-[32px] p-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-geist">Loyal</div>
<h3 className="text-xl font-semibold tracking-tight mb-4 font-geist">COMMUNITY &amp; EXPERT ARTICLES</h3>

<div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-lg max-w-sm relative z-10 translate-x-4">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
<img alt="user" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<div className="text-xs font-bold text-gray-900 font-geist">Justin P.</div>
<div className="text-[10px] text-gray-500 font-geist">CEO, TechSolutions</div>
</div>
</div>
<p className="text-xs text-gray-600 italic font-geist">"Why use five apps when Quack does it all? I stake, swap and spend crypto with their debit card. Everything works seamlessly."</p>
</div>
</div>
<div className="flex-1 h-full w-full relative">

<div className="absolute inset-0 bg-[#DE5833]/10 rounded-2xl rotate-3"></div>
<img alt="community" className="rounded-2xl relative z-0 w-full h-48 object-cover grayscale mix-blend-multiply" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="absolute bottom-6 left-6 md:left-auto md:right-6">
<button className="flex items-center bg-[#DE5833] rounded-full pl-5 pr-1 py-1.5 text-white text-sm font-semibold hover:scale-95 transition-transform">
<span className="mr-3 font-geist">MORE</span>
<div className="bg-white text-[#DE5833] rounded-full p-1.5">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">

<div className="group relative">
<div className="bg-[#DE5833] rounded-[32px] h-[360px] relative overflow-hidden">
<div className="absolute top-8 left-8 text-white text-4xl opacity-50 z-0 font-space-grotesk font-semibold">FOUNDER</div>
<img alt="Founder" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;q=80&amp;w=400" style={{maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0))'}}/>
</div>
<div className="mt-4 px-2">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-bold text-gray-900 font-geist">Gabriel Weinberg</h3>
<p className="text-[#DE5833] font-medium text-sm font-geist">Founder &amp; CEO</p>
</div>
<div className="flex gap-2">
<div className="bg-black text-white p-2 rounded-full hover:bg-[#DE5833] transition-colors cursor-pointer"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></div>
<div className="bg-black text-white p-2 rounded-full hover:bg-[#DE5833] transition-colors cursor-pointer"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></div>
</div>
</div>
<p className="text-sm text-gray-500 mt-2 leading-relaxed font-geist">Founder of DuckDuckGo, entrepreneur, and fan of privacy-respecting technology.</p>
</div>
</div>

<div className="text-center py-12">
<h2 className="text-6xl tracking-tighter text-[#DE5833] leading-none mb-2 font-space-grotesk font-semibold">Quack<span className="text-[#0D0D0D] font-space-grotesk font-semibold">team</span></h2>
</div>

<div className="group relative">
<div className="bg-blue-600 rounded-[32px] h-[360px] relative overflow-hidden">
<div className="absolute top-8 right-8 text-white font-handwriting rotate-12 flex flex-col items-center">
<span className="text-2xl font-space-grotesk font-semibold">CTO</span>
<svg className="lucide lucide-arrow-down-left w-8 h-8" data-lucide="arrow-down-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 7 7 17"></path><path d="M17 17H7V7"></path></svg>
</div>
<img alt="CTO" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=400" style={{maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0))'}}/>
</div>
<div className="mt-4 px-2">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-bold text-gray-900 font-geist">Kit Colbert</h3>
<p className="text-blue-600 font-medium text-sm font-geist">CTO &amp; Advisor</p>
</div>
<div className="flex gap-2">
<div className="bg-black text-white p-2 rounded-full hover:bg-[#DE5833] transition-colors cursor-pointer"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></div>
</div>
</div>
<p className="text-sm text-gray-500 mt-2 leading-relaxed font-geist">Spent years building and scaling complex systems in big tech, turning messy ideas into resilient products.</p>
</div>
</div>

<div className="group relative">
<div className="bg-[#FFF7ED] rounded-[32px] h-[280px] relative overflow-hidden border border-orange-100">
<div className="absolute top-4 left-4">
<span className="bg-yellow-300 px-3 py-1 rounded-full text-xs font-bold text-black border border-black font-geist">CPO</span>
<svg className="lucide lucide-arrow-down-right w-6 h-6 text-black absolute -bottom-6 -right-2" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
</div>
<img alt="CPO" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="mt-4 px-2">
<h3 className="text-xl font-bold text-gray-900 font-geist">Harnil Oza</h3>
<p className="text-yellow-600 font-medium text-sm font-geist">CPO</p>
<p className="text-sm text-gray-500 mt-2 leading-relaxed font-geist">Former product lead across early-stage fintech and DeFi startups.</p>
</div>
</div>

<div className="hidden md:block"></div>

<div className="group relative">
<div className="bg-[#EF4444] rounded-[32px] h-[280px] relative overflow-hidden">
<div className="absolute top-8 left-12 text-white font-handwriting -rotate-12 flex flex-col items-center">
<span className="text-2xl font-space-grotesk font-semibold">CMO</span>
<svg className="lucide lucide-arrow-down w-6 h-6" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
<img alt="CMO" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="mt-4 px-2">
<h3 className="text-xl font-bold text-gray-900 font-geist">Kathy Diaz</h3>
<p className="text-red-500 font-medium text-sm font-geist">CMO</p>
<p className="text-sm text-gray-500 mt-2 leading-relaxed font-geist">Drew on experience growing DeFi and exchange communities to craft Quack's story.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16">
<h2 className="text-5xl tracking-tighter mb-4 text-[#DE5833] font-space-grotesk font-semibold">Quack<span className="text-[#0D0D0D] font-space-grotesk font-semibold">advantages</span></h2>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-gray-100 rounded-[32px] p-8 text-center relative group">
<h3 className="text-xl font-bold text-gray-900 mb-2 font-geist">DEBIT CARD</h3>
<p className="text-sm text-gray-500 mb-12 font-geist">Get a digital debit card and pay for online purchases with crypto.</p>

<div className="relative w-64 h-40 mx-auto transform transition-transform group-hover:scale-105 duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-2xl p-4 text-white flex flex-col justify-between z-10 rotate-3">
<div className="flex justify-between items-start">
<svg className="lucide lucide-nfc w-6 h-6 opacity-70" data-lucide="nfc" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 8.32a7.43 7.43 0 0 1 0 7.36"></path><path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58"></path><path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"></path><path d="M16.37 2a20.16 20.16 0 0 1 0 20"></path></svg>
<span className="font-bold italic font-geist">VISA</span>
</div>
<div className="font-mono text-sm tracking-widest opacity-90 font-geist">**** **** **** 2345</div>
<div className="flex justify-between text-[10px] uppercase">
<span className="font-geist">Noman Manzoor</span>
<span className="font-geist">02/30</span>
</div>
</div>
</div>
</div>

<div className="bg-gray-100 rounded-[32px] p-8 text-center relative">
<h3 className="text-xl font-bold text-gray-900 mb-2 font-geist">COLD WALLETS</h3>
<p className="text-sm text-gray-500 mb-12 font-geist">Quack supports Trezor and Ledger. Store and use your funds with maximum security.</p>
<div className="flex justify-center gap-4 items-end h-40">
<div className="w-12 h-32 bg-[#222] rounded-md border border-gray-600 relative shadow-xl">
<div className="w-8 h-4 bg-gray-800 mx-auto mt-4 rounded-sm"></div>
<div className="w-4 h-4 rounded-full border border-gray-500 mx-auto mt-8"></div>
</div>
<div className="w-20 h-28 bg-[#333] rounded-t-xl rounded-b-[40px] border border-gray-600 relative shadow-xl flex items-center justify-center">
<svg className="lucide lucide-lock text-white w-6 h-6" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
</div>
</div>

<div className="bg-gray-100 rounded-[32px] p-8 text-center relative overflow-hidden">
<h3 className="text-xl font-bold text-gray-900 mb-2 font-geist">NFT</h3>
<p className="text-sm text-gray-500 mb-8 font-geist">Build your own NFT collection of characters, then challenge friends.</p>
<div className="bg-white p-2 rounded-xl shadow-lg rotate-6 inline-block transform hover:rotate-0 transition-all duration-300">
<img alt="NFT" className="rounded-lg w-32 h-32 object-cover" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="text-[10px] font-bold mt-2 text-left font-geist">GENTLEDRAGON</div>
<div className="text-[8px] text-gray-500 text-left font-geist">#0347672</div>
</div>
</div>
</div>
</section>

<footer className="mt-12 mx-4 mb-4 rounded-[40px] bg-[#DE5833] text-white py-20 px-8 relative overflow-hidden">
<div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<div className="text-white/80 font-medium mb-4 font-geist">Contact</div>
<h2 className="text-5xl lg:text-7xl tracking-tight mb-6 leading-none font-space-grotesk font-semibold">
                    Quit good<br/>
                    and incredibly safe
                </h2>
<p className="text-white/80 text-lg mb-8 font-geist">Your Future Starts Here - download Now</p>
<button className="bg-white text-[#DE5833] px-8 py-4 rounded-full text-base font-bold shadow-lg hover:bg-gray-50 transition-colors flex items-center gap-3 w-fit">
<svg className="lucide lucide-layout-grid w-5 h-5" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="font-geist">DOWNLOAD</span>
</button>
</div>
<div className="flex flex-col justify-between items-end text-right">
<div className="flex gap-12 text-sm font-medium">
<div className="flex flex-col gap-4 text-white/90">
<a className="hover:text-white font-geist" href="#">About</a>
<a className="hover:text-white font-geist" href="#">Cases</a>
</div>
<div className="flex flex-col gap-4 text-white/90">
<a className="hover:text-white font-geist" href="#">Benefits &amp; perks</a>
<a className="hover:text-white font-geist" href="#">Privacy policy</a>
</div>
</div>
<div className="flex gap-4 mt-12">
<a className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#DE5833] hover:scale-110 transition-transform" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#DE5833] hover:scale-110 transition-transform" href="#">
<svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</a>
</div>
<div className="mt-8 text-xs text-white/60 font-geist">
                    © 2025 All rights reserved
                </div>
</div>
</div>

<div className="absolute -bottom-1/2 -right-24 w-[600px] h-[600px] bg-white opacity-5 rounded-full pointer-events-none"></div>
</footer>



    </>
  );
}
