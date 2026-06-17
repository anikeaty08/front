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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020202]/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_10px_rgba(163,230,53,0.8)] group-hover:bg-white transition-colors"></div>
<span className="group-hover:text-lime-400 transition-colors text-sm font-medium text-white tracking-tight">Liquidity Trap Trading</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400" href="/#mentorship">Mentorship</a>
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400" href="#testimonials">Results</a>
</div>

<div className="flex items-center gap-4">
<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden pt-24 pb-12 relative justify-center">

<div className="absolute inset-0 bg-grid-neon opacity-20 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="animate-fade-in max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-500/20 bg-lime-500/5 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
<span className="text-[10px] uppercase tracking-widest text-lime-400 font-semibold">System Active</span>
</div>
<h1 className="md:text-7xl leading-[1.05] text-5xl font-semibold text-white tracking-tighter mb-6">
                    Hunt Liquidity.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-500">Don't Become It.</span>
</h1>
<h2 className="text-lg md:text-xl text-neutral-400 font-normal leading-relaxed mb-8 max-w-md">
                    Retail traders chase breakouts. Institutions set traps. Learn to identify manipulated liquidity pools and trade with the market maker, not against them.
                </h2>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="flex items-center justify-center gap-2 hover:bg-lime-300 transition-all hover:shadow-[0_0_20px_rgba(163,230,53,0.3)] group text-sm font-semibold text-black bg-white rounded pt-3 pr-6 pb-3 pl-6" href="https://app.youform.com/forms/hd1otphk" target="_blank">Join Now</a>
<a className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/10 text-white text-sm font-medium rounded hover:bg-white/5 transition-colors" href="#curriculum">
                        View Blueprint
                    </a>
</div>
<div className="flex items-center gap-6 border-t border-white/5 pt-6">
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white tracking-tight">8R</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Avg R:R</span>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white tracking-tight">Any</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Focus Asset</span>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white tracking-tight">100%</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Rule Based</span>
</div>
</div>
</div>

<div className="aspect-square hidden lg:flex animate-fade-in delay-200 w-full relative items-center justify-center">

<div className="relative w-[400px] h-[300px] glass rounded-lg border border-white/5 p-4 overflow-hidden group">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="absolute top-[30%] left-0 right-0 h-px bg-neutral-700 border-t border-dashed border-neutral-600">
<div className="absolute right-2 -top-5 text-[10px] font-mono text-neutral-500">BSL (Buy Side Liquidity)</div>
</div>

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none">

<path d="M0,200 L50,190 L100,210 L150,200 L200,200 L220,150 L250,90 L260,80 L280,250 L320,280 L400,290" fill="none" opacity="0.5" stroke="#3f3f46" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path className="drop-shadow-[0_0_8px_rgba(190,242,100,0.5)]" d="M0,200 L50,190 L100,210 L150,200 L200,200 L220,150 L250,90 L260,80 L280,250 L320,280 L400,290" fill="none" stroke="#bef264" strokeWidth="2">
<animate attributename="stroke-dasharray" duration="3s" from="0, 1000" repeatcount="indefinite" to="1000, 0"></animate>
</path>

<circle cx="260" cy="80" fill="none" opacity="0.8" r="15" stroke="#ef4444" strokeWidth="1.5">
<animate attributename="r" duration="2s" repeatcount="indefinite" values="10;20;10"></animate>
<animate attributename="opacity" duration="2s" repeatcount="indefinite" values="0.8;0;0.8"></animate>
</circle>
</svg>

<div className="absolute top-[28%] left-[65%] px-2 py-1 bg-red-500/10 border border-red-500/30 rounded text-[10px] text-red-400 font-mono">
                        Trap Activated
                    </div>

<div className="absolute bottom-[20%] left-[75%] px-2 py-1 bg-lime-500/10 border border-lime-500/30 rounded text-[10px] text-lime-400 font-mono flex items-center gap-1">
<svg className="lucide lucide-target w-3 h-3" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg> Entry
                    </div>
</div>

<div className="absolute -right-4 top-10 glass px-4 py-3 rounded border-l-2 border-lime-400 animate-pulse-neon">
<div className="text-[10px] text-neutral-400 font-mono mb-1">UNREALIZED PNL</div>
<div className="text-lg font-mono text-lime-400">+$2,450.00</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#030303]" id="philosophy">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white mb-6">Stop Being The Exit Liquidity</h2>
<div className="w-12 h-0.5 bg-lime-500 mx-auto mb-6"></div>
<p className="text-neutral-400 leading-relaxed max-w-2xl mx-auto">
                    The market is an efficiency engine designed to transfer wealth from the impatient to the precise. Most traders fail because they trade patterns without context. At Liquidity Trap Trading, we focus exclusively on the mechanics of <span className="text-white">stop hunts</span> and <span className="text-white">order blocks</span>.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass p-8 rounded hover:border-lime-500/30 transition-colors group duration-300">
<div className="mb-5 p-3 bg-white/5 w-fit rounded group-hover:bg-lime-500/10 transition-colors">
<svg className="lucide lucide-crosshair w-6 h-6 text-white group-hover:text-lime-400 transition-colors" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
<h3 className="text-white font-medium mb-3">Precision Entries</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Entries are taken only when liquidity has been swept. No guessing. We wait for the trap to spring.
                    </p>
</div>
<div className="glass p-8 rounded hover:border-lime-500/30 transition-colors group duration-300">
<div className="mb-5 p-3 bg-white/5 w-fit rounded group-hover:bg-lime-500/10 transition-colors">
<svg className="lucide lucide-bar-chart-2 w-6 h-6 text-white group-hover:text-lime-400 transition-colors" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="text-white font-medium mb-3">Data, Not Feelings</h3>
<p className="leading-relaxed text-sm text-neutral-500" style={{}}>Our bias is formed by understanding true liquidity and then wait for respective inducements.</p>
</div>
<div className="glass p-8 rounded hover:border-lime-500/30 transition-colors group duration-300">
<div className="mb-5 p-3 bg-white/5 w-fit rounded group-hover:bg-lime-500/10 transition-colors">
<svg className="lucide lucide-shield w-6 h-6 text-white group-hover:text-lime-400 transition-colors" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-white font-medium mb-3">Capital Preservation</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Aggressive risk management protocols designed specifically for funded prop firm challenges.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#020202] border-white/5 border-t pt-24 pb-24 relative" id="testimonials">
<div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-lime-900/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="">
<span className="text-lime-400 font-mono text-xs uppercase tracking-wider mb-2 block">Verified Feedback</span>
<h2 className="text-3xl font-semibold text-white tracking-tight">Traders Who Escaped The Trap</h2>
</div>
<div className="flex gap-2">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-[10px] text-white">JD</div>
<div className="w-8 h-8 rounded-full bg-neutral-700 border border-black flex items-center justify-center text-[10px] text-white">MK</div>
<div className="w-8 h-8 rounded-full bg-neutral-600 border border-black flex items-center justify-center text-[10px] text-white">AS</div>
</div>
<span className="self-center text-sm text-neutral-400 pl-2">2000 members in Discord</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="glass p-6 rounded border border-white/5 flex flex-col justify-between h-full">
<div className="">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-6">"I kept blowing funded accounts because I was trading every fair value gap I saw. The 'Liquidity Trap' model taught me to sit on my hands until the stop hunt happens. Passed my 100k challenge last week."</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-900 to-black border border-white/10 flex items-center justify-center">
<span className="text-xs font-semibold text-lime-400">D</span>
</div>
<div className="">
<div className="text-xs font-medium text-white">David K.</div>
<div className="text-[10px] text-neutral-500">Funded Trader (Apex)</div>
</div>
</div>
</div>

<div className="glass flex flex-col h-full border-white/5 border rounded pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-6">"The precision is scary. We marked out a liquidity pool on BTC at the Monday open, and price tapped it to the dollar on Wednesday before reversing. The logic just makes sense."</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-900 to-black border border-white/10 flex items-center justify-center">
<span className="text-xs font-semibold text-lime-400">S</span>
</div>
<div className="">
<div className="text-xs font-medium text-white">Sarah M.</div>
<div className="text-[10px] text-neutral-500">Crypto Swing Trader</div>
</div>
</div>
</div><div className="glass flex flex-col h-full border-white/5 border rounded pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-sm text-neutral-300 mb-6">"The precision is scary. We marked out a liquidity pool on BTC at the Monday open, and price tapped it to the dollar on Wednesday before reversing. The logic just makes sense."</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-900 to-black border border-white/10 flex items-center justify-center">
<span className="text-xs font-semibold text-lime-400">S</span>
</div>
<div className="">
<div className="text-xs font-medium text-white">Sarah M.</div>
<div className="text-[10px] text-neutral-500">Crypto Swing Trader</div>
</div>
</div>
</div><div className="glass flex flex-col h-full border-white/5 border rounded pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-sm text-neutral-300 mb-6">"The precision is scary. We marked out a liquidity pool on BTC at the Monday open, and price tapped it to the dollar on Wednesday before reversing. The logic just makes sense."</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-900 to-black border border-white/10 flex items-center justify-center">
<span className="text-xs font-semibold text-lime-400">S</span>
</div>
<div className="">
<div className="text-xs font-medium text-white">Sarah M.</div>
<div className="text-[10px] text-neutral-500">Crypto Swing Trader</div>
</div>
</div>
</div><div className="glass flex flex-col h-full border-white/5 border rounded pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-sm text-neutral-300 mb-6">"The precision is scary. We marked out a liquidity pool on BTC at the Monday open, and price tapped it to the dollar on Wednesday before reversing. The logic just makes sense."</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-900 to-black border border-white/10 flex items-center justify-center">
<span className="text-xs font-semibold text-lime-400">S</span>
</div>
<div className="">
<div className="text-xs font-medium text-white">Sarah M.</div>
<div className="text-[10px] text-neutral-500">Crypto Swing Trader</div>
</div>
</div>
</div><div className="glass flex flex-col h-full border-white/5 border rounded pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-lime-400 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-sm text-neutral-300 mb-6">"The precision is scary. We marked out a liquidity pool on BTC at the Monday open, and price tapped it to the dollar on Wednesday before reversing. The logic just makes sense."</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-900 to-black border border-white/10 flex items-center justify-center">
<span className="text-xs font-semibold text-lime-400">S</span>
</div>
<div className="">
<div className="text-xs font-medium text-white">Sarah M.</div>
<div className="text-[10px] text-neutral-500">Crypto Swing Trader</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#030303]" id="curriculum">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Access The Strategy</h2>
<p className="text-sm text-neutral-400" style={{}}>Select the level of depth you require. All systems are built for intraday trading.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass p-1 rounded border border-white/5 hover:border-lime-500/30 transition-all group flex flex-col h-full">
<div className="bg-neutral-900/50 p-6 rounded-t h-full flex flex-col">
<div className="mb-4">
<svg className="lucide lucide-users w-8 h-8 text-white mb-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="text-lg font-medium text-white">The Community</h3>
<p className="text-xs text-neutral-500 mt-2">Free Discord Access</p>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-xs text-neutral-400">
<svg className="lucide lucide-check w-3 h-3 text-lime-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Weekly Market Bias</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-400">
<svg className="lucide lucide-check w-3 h-3 text-lime-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Basic Chart Setups</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-400">
<svg className="lucide lucide-check w-3 h-3 text-lime-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Like-minded traders</span>
</li>
</ul>
<a className="hover:bg-white hover:text-black transition-colors text-xs font-semibold text-white text-center w-full border-white/10 border rounded pt-2 pb-2" href="https://discord.gg/JVbA3Bn5xw">JOIN FREE</a>
</div>
</div>

<div className="relative p-1 rounded bg-gradient-to-b from-lime-400/20 to-transparent border border-lime-500/30 flex flex-col h-full transform hover:-translate-y-1 transition-transform duration-300">
<div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-50"></div>
<div className="bg-[#050505] p-6 rounded h-full flex flex-col relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-lime-500/10 blur-2xl rounded-full"></div>
<div className="mb-4">
<svg className="lucide lucide-zap w-8 h-8 text-lime-400 mb-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h3 className="text-lg font-medium text-white">The Blueprint</h3>
<p className="text-xs text-lime-400/80 mt-2">Complete Video Course</p>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-xs text-neutral-300">
<svg className="lucide lucide-check w-3 h-3 text-lime-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-medium text-white">Full Liquidity Strategy</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<svg className="lucide lucide-check w-3 h-3 text-lime-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Prop Firm Risk Models</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<svg className="lucide lucide-check w-3 h-3 text-lime-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Journaling Templates</span>
</li>
</ul>
<a className="hover:bg-lime-300 transition-colors text-xs font-bold text-black text-center bg-lime-400 w-full rounded pt-2.5 pb-2.5 shadow-[0_0_15px_rgba(163,230,53,0.2)]" href="https://app.youform.com/forms/hd1otphk">Coming soon...</a>
</div>
</div>


<div className="glass p-1 rounded border border-white/5 hover:border-lime-500/30 transition-all group flex flex-col h-full">
<div className="bg-neutral-900/50 p-6 rounded-t h-full flex flex-col">
<div className="mb-4">
<svg className="lucide lucide-mic w-8 h-8 text-white mb-4" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
<h3 className="text-lg font-medium text-white">1:1 Mentorship</h3>
<p className="text-xs text-neutral-500 mt-2">Limited Capacity</p>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-xs text-neutral-400">
<svg className="lucide lucide-check w-3 h-3 text-lime-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Live Chart Reviews</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-400">
<svg className="lucide lucide-check w-3 h-3 text-lime-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Direct Strategy Audits</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-400">
<svg className="lucide lucide-check w-3 h-3 text-lime-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Psychology Coaching</span>
</li>
</ul>
<a className="hover:bg-white hover:text-black transition-colors text-xs font-semibold text-white text-center w-full border-white/10 border rounded pt-2 pb-2" href="https://app.youform.com/forms/hd1otphk">APPLY NOW</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#020202] border-white/5 border-t pt-24 pb-24">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-3">
<details className="group bg-neutral-900/30 border border-white/5 rounded overflow-hidden">
<summary className="flex justify-between items-center p-5 cursor-pointer hover:bg-white/5 transition-colors">
<span className="text-white font-medium text-sm">Do I need experience to start?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-5 text-neutral-400 text-sm leading-relaxed">
                        Basic understanding of candlesticks and market structure is recommended. This is an intermediate-to-advanced concept based on institutional order flow, not a "crypto for beginners" course.
                    </div>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded overflow-hidden">
<summary className="flex justify-between items-center p-5 cursor-pointer hover:bg-white/5 transition-colors">
<span className="text-white font-medium text-sm">Does this work for funded challenges?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-5 text-neutral-400 text-sm leading-relaxed">
                        Yes. The strategy is built with high R:R (Reward to Risk) and strict risk management rules specifically designed to pass prop firm challenges and keep the funded account.
                    </div>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded overflow-hidden">
<summary className="flex justify-between items-center p-5 cursor-pointer hover:bg-white/5 transition-colors">
<span className="text-white font-medium text-sm">Is this a signal service?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-5 text-neutral-400 text-sm leading-relaxed">
                        No. Signals make you dependent. We teach you how to fish. We share trade ideas and bias in the Discord, but the goal is for you to become self-sufficient.
                    </div>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded overflow-hidden">
<summary className="flex cursor-pointer hover:bg-white/5 transition-colors pt-5 pr-5 pb-5 pl-5 items-center justify-between">
<span className="text-white font-medium text-sm">What timeframe do you trade?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-5 text-neutral-400 text-sm leading-relaxed">
                        We execute primarily on the 5m and 15m timeframes, using the 1H and 4H for structural bias. This allows for intraday entries that close within the session.
                    </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 bg-[#020202]">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-2 h-2 bg-lime-400 rounded-full"></div>
<span className="text-sm font-medium text-white tracking-tight">Liquidity Trap Trading</span>
</a>
<p className="text-neutral-500 text-xs max-w-xs leading-relaxed">
                        Deconstructing market manipulation to build consistent, profitable traders. Master the stop hunt.
                    </p>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-neutral-600">
                    © 2023 Liquidity Trap Trading. All rights reserved.
                </div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
<div className="mt-8 p-4 border border-white/5 rounded bg-white/5 text-[10px] text-neutral-500 text-center leading-relaxed">
                 Trading financial markets involves a high level of risk and is not suitable for everyone. Content provided here is for educational purposes only and does not constitute financial advice. Past performance is not indicative of future results.
            </div>
</div>
</footer>


    </>
  );
}
