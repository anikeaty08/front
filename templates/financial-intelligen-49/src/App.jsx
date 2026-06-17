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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center text-black">
<svg className="lucide lucide-zap w-5 h-5 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
</div>
<button className="bg-[#FF9EB5] hover:bg-[#ff8fa8] text-black px-5 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105">
                Contact Us
            </button>
</div>
</nav>

<header className="overflow-hidden pt-40 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 mb-8 font-medium">
                Amazing features
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6">
                Manage Your Data For<br/>
<span className="text-gray-400">Simplified Dashboard.</span>
</h1>
<p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at est ut odio cursus efficitur. Cras pharetra consectetur mi, nec eleifend justo pharetra vel.
            </p>
<button className="bg-[#FF9EB5] hover:bg-[#ff8fa8] text-black px-8 py-3 rounded-full text-base font-medium transition-all shadow-[0_0_20px_rgba(255,158,181,0.3)]">
                Get Started
            </button>
</div>

<div className="max-w-5xl mx-auto mt-20 relative">
<div className="glass-card rounded-3xl p-1 border border-white/10 shadow-2xl">
<div className="bg-[#0A0A0A] rounded-[20px] p-6 md:p-10 flex flex-col md:flex-row gap-8 relative overflow-hidden">

<div className="w-full md:w-1/3 bg-[#111111] rounded-2xl p-6 flex flex-col items-center justify-between border border-white/5 relative">
<div className="w-full flex justify-between text-xs text-gray-500 mb-4 font-medium">
<span>YOUR CREDIT SCORE</span>
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<div className="relative w-48 h-24 mb-4">

<svg className="w-full h-full" viewbox="0 0 200 100">
<path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#333" strokeLinecap="round" strokeWidth="12"></path>
<path d="M 20 100 A 80 80 0 0 1 140 30" fill="none" stroke="#FF9EB5" stroke-dasharray="251" stroke-dashoffset="0" strokeLinecap="round" strokeWidth="12"></path>
</svg>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
<div className="text-4xl font-medium text-white">660</div>
</div>
</div>
<div className="text-center">
<div className="text-sm font-medium text-gray-300">Your Credit Score is average</div>
<div className="text-xs text-gray-500 mt-1">Last check on 21 Apr</div>
</div>
</div>

<div className="w-full md:w-2/3 bg-[#111111] rounded-2xl p-6 border border-white/5 relative">
<div className="flex justify-between items-start mb-8">
<div>
<div className="text-xs text-gray-500 mb-1 font-medium">Spendings</div>
<div className="text-xl font-medium">Brooklyn Simmons</div>
</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<svg className="lucide lucide-download w-4 h-4 text-gray-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
</div>

<div className="h-32 flex items-end justify-between gap-2 md:gap-4 px-2">

<div className="w-full bg-gray-800/30 rounded-t-md h-[40%] relative group"></div>
<div className="w-full bg-[#FF9EB5] rounded-t-md h-[70%] relative group shadow-[0_0_15px_rgba(255,158,181,0.2)]"></div>
<div className="w-full bg-gray-800/30 rounded-t-md h-[50%] relative group"></div>
<div className="w-full bg-[#FF9EB5] rounded-t-md h-[30%] relative group shadow-[0_0_15px_rgba(255,158,181,0.2)]"></div>
<div className="w-full bg-gray-800/30 rounded-t-md h-[60%] relative group"></div>
<div className="w-full bg-gray-800/30 rounded-t-md h-[45%] relative group"></div>
<div className="w-full bg-[#FF9EB5] rounded-t-md h-[85%] relative group shadow-[0_0_15px_rgba(255,158,181,0.2)]"></div>
<div className="w-full bg-gray-800/30 rounded-t-md h-[55%] relative group"></div>
<div className="w-full bg-gray-800/30 rounded-t-md h-[40%] relative group"></div>
</div>

<div className="flex justify-between mt-4 text-xs text-gray-600 font-medium px-1">
<span>Current margin</span>
<span className="text-white">$350.00</span>
</div>
</div>

<div className="absolute bottom-6 right-6 bg-[#1A1A1A] border border-white/10 p-3 rounded-xl flex items-center gap-3 shadow-2xl z-20">
<div className="text-right">
<div className="text-sm font-medium text-white">$124,20</div>
<div className="text-[10px] text-gray-500">21 Apr, 19:59</div>
</div>
<span className="bg-pink-500/20 text-pink-300 text-xs px-2 py-0.5 rounded-full font-medium">+3.4%</span>
</div>
</div>
</div>
</div>
</header>

<section className="py-10 border-b border-white/5">
<p className="text-center text-xs text-gray-600 mb-8 font-medium">Trusted by Top-tier product companies</p>
<div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">

<div className="flex items-center gap-2 text-xl font-semibold"><svg className="lucide lucide-triangle fill-white" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> PLAID</div>
<div className="flex items-center gap-2 text-xl font-semibold"><svg className="lucide lucide-hexagon fill-white" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> Griffin</div>
<div className="flex items-center gap-2 text-xl font-semibold"><svg className="lucide lucide-box fill-white" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> airbnb</div>
<div className="flex items-center gap-2 text-xl font-semibold"><svg className="lucide lucide-circle fill-white" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> PATREON</div>
<div className="flex items-center gap-2 text-xl font-semibold"><svg className="lucide lucide-command fill-white" data-lucide="command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg> HelpScout</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-[1.1]">
                    Drive Results With Hurix<br/>
                    for Marketers &amp; Product
                </h2>
<p className="text-lg text-gray-400 mb-10 leading-relaxed font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at est ut odio cursus efficitur. Cras pharetra consectetur mi, nec eleifend justo pharetra vel.
                </p>
<div className="space-y-4">
<div className="flex gap-4">
<div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
<div>
<h4 className="text-sm font-medium text-white">Easy-to-adopt sales software</h4>
<p className="text-sm text-gray-500 mt-1">That leverages AI for best results.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
<div>
<h4 className="text-sm font-medium text-white">Customer service software</h4>
<p className="text-sm text-gray-500 mt-1">Powered by next-gen infrastructure.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 relative z-10">
<div className="flex justify-between items-end mb-8">
<div>
<div className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">Accenture Analysis</div>
<div className="text-4xl font-medium text-white">12,3K</div>
</div>
<div className="text-right space-y-3">
<div>
<div className="text-xs text-gray-500 mb-1 font-medium">SPENDING</div>
<div className="flex items-center gap-2 text-sm font-medium">2,3K <span className="text-[10px] bg-pink-500/20 text-pink-300 px-1 rounded">+11.4%</span></div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1 font-medium">ALLOCATION</div>
<div className="flex items-center gap-2 text-sm font-medium">1,6K <span className="text-[10px] bg-white/10 text-gray-300 px-1 rounded">+4.0%</span></div>
</div>
</div>
</div>
<div className="flex items-end gap-3 h-32">
<div className="w-full bg-gradient-to-t from-pink-300 to-pink-100 h-[60%] rounded-md opacity-80"></div>
<div className="w-full bg-white/5 h-[30%] rounded-md"></div>
<div className="w-full bg-white/5 h-[45%] rounded-md"></div>
<div className="w-full bg-white/5 h-[70%] rounded-md"></div>
<div className="w-full bg-white/5 h-[40%] rounded-md"></div>
<div className="w-full bg-gradient-to-t from-pink-300 to-pink-100 h-[80%] rounded-md opacity-80"></div>
<div className="w-full bg-white/5 h-[35%] rounded-md"></div>
<div className="w-full bg-white/5 h-[50%] rounded-md"></div>
</div>
</div>

<div className="absolute -right-6 top-20 bg-[#151515] border border-white/10 p-6 rounded-2xl w-64 shadow-2xl z-20 hidden md:block">
<div className="text-xs text-gray-500 mb-2 font-medium uppercase">Allocation</div>
<div className="text-3xl font-medium text-white mb-4">89%</div>
<div className="space-y-4">
<div>
<div className="h-6 w-full bg-gray-800 rounded overflow-hidden">
<div className="h-full bg-gradient-to-r from-pink-200 to-pink-400 w-[89%]"></div>
</div>
<div className="text-[10px] text-gray-500 mt-1">1 day ago</div>
</div>
<div>
<div className="h-6 w-full bg-gray-800 rounded overflow-hidden">
<div className="h-full bg-white/10 w-[30%]"></div>
</div>
<div className="text-[10px] text-gray-500 mt-1 text-right w-[30%]">30 mins ago</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#080808]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-2">Customer Feedback</h2>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-500">Data Intelligence Leader</h2>
</div>
<div className="grid md:grid-cols-2 gap-20 items-center">

<div>
<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 mb-6 font-medium">
                        Amazing features
                    </div>
<h3 className="text-4xl font-medium tracking-tight mb-6 leading-tight">Streamlined collaboration<br/>in easiest ways</h3>
<p className="text-lg text-gray-400 mb-10 leading-relaxed font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at est ut odio cursus efficitur.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
<svg className="lucide lucide-zap w-5 h-5 text-pink-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<h4 className="text-base font-medium text-white">Faster deployment</h4>
<p className="text-sm text-gray-500 mt-1 font-light">Lorem ipsum dolor sit amet, consectetur.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
<svg className="lucide lucide-star w-5 h-5 text-pink-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div>
<h4 className="text-base font-medium text-white">Effortless integration</h4>
<p className="text-sm text-gray-500 mt-1 font-light">Lorem ipsum dolor sit amet, consectetur.</p>
</div>
</div>
</div>
</div>

<div className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-10 relative">
<div className="mb-8">
<div className="text-xs text-gray-400 font-medium mb-1">Your Assets</div>
<div className="text-4xl md:text-5xl font-medium text-white mb-2">124,420<span className="text-gray-500 text-3xl">.50</span></div>
<div className="text-sm text-gray-500">You gained +$420.00 this week</div>
</div>
<div className="flex gap-2 mb-8">
<span className="px-3 py-1 rounded-full bg-pink-200 text-black text-xs font-medium">All Assets</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-gray-400 text-xs font-medium">Dollar</span>
</div>

<div className="space-y-3">
<div className="bg-[#1A1A1A] p-4 rounded-xl flex items-center justify-between border border-white/5">
<div className="flex items-center gap-3">
<div className="text-sm font-medium">Pound</div>

<svg className="stroke-gray-500 fill-none" height="20" strokeWidth="1.5" width="60">
<polyline points="0,15 10,10 20,18 30,5 40,12 50,8 60,15"></polyline>
</svg>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-medium">$23,378</span>
<span className="text-[10px] text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">+3.4%</span>
</div>
</div>
<div className="bg-[#1A1A1A] p-4 rounded-xl flex items-center justify-between border border-white/5">
<div className="flex items-center gap-3">
<div className="text-sm font-medium">Dollars</div>

<svg className="stroke-gray-500 fill-none" height="20" strokeWidth="1.5" width="60">
<polyline points="0,10 10,15 20,8 30,12 40,5 50,15 60,8"></polyline>
</svg>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-medium">$89,293</span>
<span className="text-[10px] text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded">-0.1%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-20 items-center">

<div className="bg-[#111111] border border-white/5 rounded-3xl p-6 md:p-8">
<div className="flex justify-between items-start mb-6">
<div>
<div className="text-xs text-gray-500 font-medium mb-1">Spendings</div>
<div className="text-xl font-medium text-white">Brooklyn Simmons</div>
</div>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<svg className="lucide lucide-download w-4 h-4 text-gray-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>

<div className="relative h-48 w-full">

<div className="absolute inset-0 flex flex-col justify-between text-[10px] text-gray-600">
<div className="border-b border-white/5 w-full pb-1">800</div>
<div className="border-b border-white/5 w-full pb-1">600</div>
<div className="border-b border-white/5 w-full pb-1">400</div>
<div className="border-b border-white/5 w-full pb-1">200</div>
<div className="w-full">0</div>
</div>

<svg className="absolute inset-0 w-full h-full preserve-3d" viewbox="0 0 400 200">
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#FF9EB5" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#FF9EB5" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 180 C 50 180, 80 140, 120 150 S 180 80, 220 100 S 300 40, 400 60 V 200 H 0 Z" fill="url(#gradient)"></path>
<path d="M0 180 C 50 180, 80 140, 120 150 S 180 80, 220 100 S 300 40, 400 60" fill="none" stroke="#FF9EB5" strokeWidth="2"></path>

<circle className="shadow-[0_0_10px_#FF9EB5]" cx="280" cy="70" fill="#FF9EB5" r="4"></circle>
</svg>

<div className="absolute top-[25%] left-[65%] bg-pink-100 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                        $20.34
                    </div>
</div>

<div className="flex justify-between text-[10px] text-gray-500 mt-2 px-1">
<span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span><span>Dec</span>
</div>

<div className="mt-6">
<div className="flex justify-between text-xs mb-2">
<span className="text-white font-medium">Usage</span>
<span className="text-gray-500">80 GB out of 100 GB used</span>
</div>
<div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-pink-300 w-[80%] rounded-full"></div>
</div>
</div>
</div>

<div>
<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 mb-6 font-medium">
                    Amazing features
                </div>
<h3 className="text-4xl font-medium tracking-tight mb-6 leading-tight">Workflow without anyStreamlining</h3>
<p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at est ut odio. Cras pharetra consectetur mi, nec eleifend justo pharetra vel.
                </p>
<div className="flex gap-6 mb-8 text-sm text-white font-medium">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-pink-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Free migration
                    </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-pink-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Simplified onboarding
                    </div>
</div>
<button className="bg-[#FF9EB5] hover:bg-[#ff8fa8] text-black px-6 py-2.5 rounded-full text-sm font-medium transition-all">
                    Get In Touch
                </button>
</div>
</div>
</section>

<section className="py-20 text-center">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 mb-6 font-medium">
            Amazing features
        </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-16">
            Connect the apps weintegrate with
        </h2>
<div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 px-6">

<div className="bg-[#111111] border border-white/5 rounded-full pl-2 pr-6 py-2 flex items-center gap-3 min-w-[200px] hover:border-pink-500/30 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-pink-200 text-black flex items-center justify-center">
<svg className="lucide lucide-link w-5 h-5" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</div>
<div className="text-left">
<div className="text-sm font-medium text-white">Mailstack</div>
<div className="text-[10px] text-gray-500 group-hover:text-pink-300">Description Mailstack</div>
</div>
</div>

<div className="bg-[#111111] border border-white/5 rounded-full pl-2 pr-6 py-2 flex items-center gap-3 min-w-[200px] hover:border-pink-500/30 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-pink-100 text-black flex items-center justify-center">
<svg className="lucide lucide-aperture w-5 h-5" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
<div className="text-left">
<div className="text-sm font-medium text-white">Mailstack</div>
<div className="text-[10px] text-gray-500 group-hover:text-pink-300">Description Mailstack</div>
</div>
</div>

<div className="bg-[#111111] border border-white/5 rounded-full pl-2 pr-6 py-2 flex items-center gap-3 min-w-[200px] hover:border-pink-500/30 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-pink-50 text-black flex items-center justify-center">
<svg className="lucide lucide-command w-5 h-5" data-lucide="command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
</div>
<div className="text-left">
<div className="text-sm font-medium text-white">Mailstack</div>
<div className="text-[10px] text-gray-500 group-hover:text-pink-300">Description Mailstack</div>
</div>
</div>

<div className="bg-[#111111] border border-white/5 rounded-full pl-2 pr-6 py-2 flex items-center gap-3 min-w-[200px] hover:border-pink-500/30 transition-colors cursor-pointer group mt-4">
<div className="w-10 h-10 rounded-full bg-pink-200 text-black flex items-center justify-center">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div className="text-left">
<div className="text-sm font-medium text-white">Mailstack</div>
<div className="text-[10px] text-gray-500 group-hover:text-pink-300">Description Mailstack</div>
</div>
</div>

<div className="bg-[#111111] border border-white/5 rounded-full pl-2 pr-6 py-2 flex items-center gap-3 min-w-[200px] hover:border-pink-500/30 transition-colors cursor-pointer group mt-4">
<div className="w-10 h-10 rounded-full bg-pink-100 text-black flex items-center justify-center">
<svg className="lucide lucide-slack w-5 h-5" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg>
</div>
<div className="text-left">
<div className="text-sm font-medium text-white">Mailstack</div>
<div className="text-[10px] text-gray-500 group-hover:text-pink-300">Description Mailstack</div>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 text-center mb-16">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/10">
<svg className="lucide lucide-message-circle w-6 h-6 fill-white text-white" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                Don't take our wordsListen theirs
            </h2>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="hover:border-white/10 transition-colors bg-[#111111] border-white/5 border rounded-2xl p-6">
<div className="flex items-center gap-3 mb-4">
<img alt="User" className="w-10 h-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="text-left">
<div className="text-sm font-medium text-white">Lorri Warf</div>
<div className="text-[10px] text-gray-500">Marketing Leader @Holan</div>
</div>
</div>
<p className="text-xs text-gray-400 leading-relaxed font-light">"This finance app template is a game-changer! It's user-friendly, making budgeting and financial tracking a breeze."</p>
</div>

<div className="bg-[#111111] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-4">
<img alt="User" className="w-10 h-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="text-left">
<div className="text-sm font-medium text-white">David Chen</div>
<div className="text-[10px] text-gray-500">CTO @Manter</div>
</div>
</div>
<p className="text-xs text-gray-400 leading-relaxed font-light">"It's intuitive, functional, easy-to-setup and presents content in an interactive way. Highly recommended!"</p>
</div>

<div className="bg-[#111111] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-4">
<img alt="User" className="w-10 h-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="text-left">
<div className="text-sm font-medium text-white">Sarah Jones</div>
<div className="text-[10px] text-gray-500">Product @Vercel</div>
</div>
</div>
<p className="text-xs text-gray-400 leading-relaxed font-light">"Efficient. I highly recommend it for anyone looking to take control of their finances with style."</p>
</div>

<div className="bg-[#111111] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-4">
<img alt="User" className="w-10 h-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="text-left">
<div className="text-sm font-medium text-white">Mike Ross</div>
<div className="text-[10px] text-gray-500">Designer @Figma</div>
</div>
</div>
<p className="text-xs text-gray-400 leading-relaxed font-light">"The dark mode implementation is flawless. Just what I needed for my late night sessions."</p>
</div>

<div className="bg-[#111111] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-4">
<img alt="User" className="w-10 h-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="text-left">
<div className="text-sm font-medium text-white">James Will</div>
<div className="text-[10px] text-gray-500">CEO @Tech</div>
</div>
</div>
<p className="text-xs text-gray-400 leading-relaxed font-light">"Superb functionality wrapped in a beautiful design. The charts are particularly impressive."</p>
</div>

<div className="bg-[#111111] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-4">
<img alt="User" className="w-10 h-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="text-left">
<div className="text-sm font-medium text-white">Lisa M.</div>
<div className="text-[10px] text-gray-500">HR @Stripe</div>
</div>
</div>
<p className="text-xs text-gray-400 leading-relaxed font-light">"Finally, software that feels like it was designed for humans. Integration was seamless."</p>
</div>
</div>
</section>

<section className="py-32 flex justify-center px-6">
<div className="bg-[#111111] border border-white/10 rounded-[3rem] p-12 text-center max-w-4xl w-full relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 mb-6 font-medium">
                    Amazing features
                </div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-4">
                    Build a businesswith purpose
                </h2>
<div className="max-w-md mx-auto mt-10 p-6 bg-[#1A1A1A]/80 backdrop-blur border border-white/10 rounded-2xl shadow-2xl">
<p className="text-xs text-gray-400 mb-4 font-light">It's intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.</p>
<input className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white mb-3 focus:outline-none focus:border-pink-500/50" placeholder="Hello@gmail.com" type="email"/>
<button className="w-full bg-[#FF9EB5] hover:bg-[#ff8fa8] text-black rounded-lg py-3 text-sm font-medium mb-4 transition-colors">
                        Download Now!
                    </button>
<div className="flex items-center gap-4 text-[10px] text-gray-500 justify-center">
<div className="flex items-center gap-1"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Integrate Algorithms</div>
<div className="flex items-center gap-1"><svg className="lucide lucide-star w-3 h-3" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Comment Collection</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 mb-4 font-medium">
                Support
            </div>
<h2 className="text-4xl font-medium tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<details className="group bg-[#111111] border border-white/5 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden open:border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none hover:bg-white/5 transition-colors">
<span>How does the integration work?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-gray-500">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 font-light leading-relaxed">
                    Our platform connects directly with your existing financial accounts via secure API. We support over 50+ integrations including Plaid, Stripe, and PayPal to ensure your data is always up-to-date and accurate.
                </div>
</details>

<details className="group bg-[#111111] border border-white/5 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden open:border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none hover:bg-white/5 transition-colors">
<span>Is my data secure?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-gray-500">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 font-light leading-relaxed">
                    Security is our top priority. We use bank-grade encryption (AES-256) and never sell your personal data. We are SOC2 compliant and regularly audited by third-party security firms.
                </div>
</details>

<details className="group bg-[#111111] border border-white/5 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden open:border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none hover:bg-white/5 transition-colors">
<span>Can I export my reports?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-gray-500">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 font-light leading-relaxed">
                    Yes, you can export all your reports in CSV, PDF, or Excel formats. You can also schedule automated email reports to be sent to your team or accountant on a weekly or monthly basis.
                </div>
</details>

<details className="group bg-[#111111] border border-white/5 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden open:border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none hover:bg-white/5 transition-colors">
<span>What happens after the trial ends?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-gray-500">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 font-light leading-relaxed">
                    If you don't upgrade to a paid plan, your account will automatically switch to our Free tier. You won't lose any data, but access to premium features like advanced analytics and team members will be locked.
                </div>
</details>
</div>
</section>

<footer className="border-t border-white/5 pt-20 pb-10 mt-20 bg-black text-sm">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-10 mb-20">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center text-black">
<svg className="lucide lucide-zap w-4 h-4 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="font-semibold text-lg">Hurix</span>
</div>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium mb-2">Features</span>
<a className="text-gray-500 hover:text-white transition-colors" href="#">Home</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">About</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">Product</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium mb-2">Solutions</span>
<a className="text-gray-500 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">Blog Article</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium mb-2">Company</span>
<a className="text-gray-500 hover:text-white transition-colors" href="#">Contact</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">Login</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">Signup</a>
</div>
<div className="col-span-2 md:col-span-1">
<span className="text-white font-medium mb-4 block">Email</span>
<input className="w-full bg-[#111] border border-white/10 rounded px-3 py-2 text-xs text-white mb-2" placeholder="hello@djectstudio.com" type="email"/>
<button className="w-full bg-pink-200 text-black py-2 rounded text-xs font-medium hover:bg-pink-300 transition-colors">Sign up</button>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 pt-8 border-t border-white/5">
<div>Copyright ©2024 Djectstudio.com</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
