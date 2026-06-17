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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
<svg className="lucide lucide-trending-up w-4 h-4 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
</div>
<span className="text-lg font-medium tracking-tight text-white">
            ALPHA
            <span className="text-neutral-500">TRADER</span>
</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#how-it-works">
            How it Works
          </a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#challenges">
            Challenges
          </a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#faq">
            FAQ
          </a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white border border-white/10 bg-white/5 px-4 py-2 rounded hover:bg-white/10 transition-all" href="#challenges">
          Member Login
        </a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

<div className="mb-8 opacity-90">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-neutral-900/50 backdrop-blur">
<svg className="lucide lucide-infinity w-6 h-6 text-white" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path>
</svg>
</div>
</div>

<h1 className="text-5xl md:text-8xl font-semibold tracking-tight text-white uppercase mb-6 leading-[0.9]">
          Win a Tesla
          <br/>
<span className="text-neutral-500">Model Y</span>
</h1>

<div className="group relative inline-flex items-center gap-4 px-8 py-4 mb-12 border border-[#C5A059] rounded-lg bg-black/40 backdrop-blur-sm gold-border-glow transition-transform hover:scale-[1.01]">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
<span className="text-xl md:text-2xl font-semibold text-white tracking-tight uppercase">
              17% OFF
              <span className="text-[#D4AF37]">All Accounts</span>
</span>
<div className="hidden md:block w-px h-6 bg-[#C5A059]/30"></div>
<span className="text-lg font-medium text-neutral-300 tracking-wide">
              CODE:
              <span className="text-white font-semibold">TSLA</span>
</span>
</div>

<div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-[#C5A059]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
</div>

<div className="relative w-full max-w-5xl mb-12 group">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.15)_0%,transparent_70%)]"></div>

<img alt="White Tesla Model Y" className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb8d14ab-e1c2-4f76-a4d6-366e9952af81_3840w.png" style={{WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'}}/>

<div className="absolute -bottom-10 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent z-20"></div>
</div>

<a className="group relative inline-flex items-center justify-center px-10 py-5 bg-neutral-950 border border-[#C5A059] text-white text-xl font-semibold uppercase tracking-widest hover:bg-[#C5A059] hover:text-black transition-all duration-300 overflow-hidden" href="#challenges">
<span className="relative z-10">Enter Now</span>
<div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
</a>
<p className="mt-6 text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
          Limited time offer valid
          <span className="text-neutral-300">Jan 15 - Mar 31, 2026</span>
          . Apply code
          <span className="text-neutral-300">TSLA</span>
          at checkout to automatically enter.
        </p>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
              How to Enter
            </h2>
<p className="text-lg text-neutral-400">
              Secure your funded account and your chance to win. Promotion runs
              Jan 15 - Mar 31, 2026.
            </p>
</div>
<div className="h-px bg-white/10 flex-grow md:max-w-xs"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors">
<div className="mb-6 p-3 w-fit border border-white/10 rounded bg-white/5">
<svg className="lucide lucide-mouse-pointer-2 w-6 h-6 text-[#D4AF37]" data-lucide="mouse-pointer-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              1. Select Challenge
            </h3>
<p className="text-lg text-neutral-400 leading-relaxed">
              Choose any evaluation or instant funding account size from $10k to
              $200k. All accounts are eligible.
            </p>
</div>

<div className="group p-8 border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors">
<div className="mb-6 p-3 w-fit border border-white/10 rounded bg-white/5">
<svg className="lucide lucide-tag w-6 h-6 text-[#D4AF37]" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
<circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              2. Apply Code TSLA
            </h3>
<p className="text-lg text-neutral-400 leading-relaxed">
              Use the promo code at checkout to receive 17% instant discount on
              any account type, including Instant Funding.
            </p>
</div>

<div className="group p-8 border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors">
<div className="mb-6 p-3 w-fit border border-white/10 rounded bg-white/5">
<svg className="lucide lucide-key w-6 h-6 text-[#D4AF37]" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path>
<path d="m21 2-9.6 9.6"></path>
<circle cx="7.5" cy="15.5" r="5.5"></circle>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              3. You Are Entered
            </h3>
<p className="text-lg text-neutral-400 leading-relaxed">
              Purchase confirmation serves as your entry ticket. Winner
              announced live.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden" id="challenges">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Select Your Account
          </h2>
<p className="text-lg text-neutral-400">
            Discount applied automatically with code
            <span className="text-white">TSLA</span>
            . Valid on all accounts, including Instant Funding.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative p-8 border border-white/10 bg-neutral-900/40 rounded-xl hover:border-amber-500/30 transition-all duration-300 group">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-sparkles w-5 h-5 text-amber-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">$50,000</h3>
<p className="text-sm text-neutral-500 uppercase tracking-wider mb-8">
              2 - Step Challenge
            </p>
<div className="flex items-baseline gap-3 mb-8">
<span className="text-3xl font-medium text-white">$207</span>
<span className="text-lg text-neutral-600 line-through">$249</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-neutral-300 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                5% Max drawdown
              </li>
<li className="flex items-center gap-3 text-neutral-300 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                10% Max Loss
              </li>
<li className="flex items-center gap-3 text-neutral-300 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                100% Profit Split
              </li>
</ul>
<button className="w-full py-3 bg-white/5 border border-white/10 text-white font-medium rounded hover:bg-white hover:text-black transition-colors">
              Start Challenge
            </button>
</div>

<div className="relative p-8 border border-[#C5A059] bg-neutral-900/60 rounded-xl shadow-[0_0_30px_-10px_rgba(197,160,89,0.15)] transform md:-translate-y-4">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#C5A059] text-black text-xs font-semibold uppercase tracking-widest rounded-full">
              Best Value
            </div>
<h3 className="text-2xl font-semibold text-white mb-2">$100,000</h3>
<p className="text-sm text-neutral-400 uppercase tracking-wider mb-8">
              2 - Step Challenge
            </p>
<div className="flex items-baseline gap-3 mb-8">
<span className="text-4xl font-medium text-[#C5A059]">$329</span>
<span className="text-xl text-neutral-600 line-through">$399</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-white text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#C5A059]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                5% Max drawdown
              </li>
<li className="flex items-center gap-3 text-white text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#C5A059]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                10% Max Loss
              </li>
<li className="flex items-center gap-3 text-white text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#C5A059]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                100% Profit Split
              </li>
</ul>
<button className="w-full py-3 bg-[#C5A059] text-black font-semibold rounded hover:bg-[#D4AF37] transition-colors">
              Start Challenge
            </button>
</div>

<div className="relative p-8 border border-white/10 bg-neutral-900/40 rounded-xl hover:border-amber-500/30 transition-all duration-300 group">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-sparkles w-5 h-5 text-amber-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">$200,000</h3>
<p className="text-sm text-neutral-500 uppercase tracking-wider mb-8">
              2 - Step Challenge
            </p>
<div className="flex items-baseline gap-3 mb-8">
<span className="text-3xl font-medium text-white">$499</span>
<span className="text-lg text-neutral-600 line-through">$599</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-neutral-300 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                5% Max drawdown
              </li>
<li className="flex items-center gap-3 text-neutral-300 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                10% Max Loss
              </li>
<li className="flex items-center gap-3 text-neutral-300 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                100% Profit Split
              </li>
</ul>
<button className="w-full py-3 bg-white/5 border border-white/10 text-white font-medium rounded hover:bg-white hover:text-black transition-colors">
              Start Challenge
            </button>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-950 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
              $140M+
            </div>
<div className="text-sm text-neutral-500 uppercase tracking-wider">
              Paid to Traders
            </div>
</div>
<div className="">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
              180+
            </div>
<div className="text-sm text-neutral-500 uppercase tracking-wider">
              Countries
            </div>
</div>
<div className="">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
              4h
            </div>
<div className="text-sm text-neutral-500 uppercase tracking-wider">
              Avg. Payout Time
            </div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
              4.8/5
            </div>
<div className="text-sm text-neutral-500 uppercase tracking-wider">
              TrustPilot Score
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">
          Frequently Asked Questions
        </h2>
<div className="space-y-4">
<details className="group bg-neutral-900/30 border border-white/5 rounded overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium">
<span className="">How do I enter the Tesla giveaway?</span>
<svg className="lucide lucide-chevron-down transition-transform group-open:rotate-180 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(115, 115, 115)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-lg leading-relaxed">
              Purchase any evaluation challenge between now and the promotional
              deadline using code TSLA. Each purchase counts as a distinct
              entry.
            </div>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium">
<span className="">What are the promotion dates?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-lg leading-relaxed">
              The promotion runs from
              <strong>January 15, 2026</strong>
              to
              <strong>March 31, 2026</strong>
              . All qualifying purchases made within this period are
              automatically entered.
            </div>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium">
<span className="">Is the discount applicable to all accounts?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-lg leading-relaxed">
              Yes, the 17% discount applies to all account sizes ($10k to $200k)
              and all account types, including 1-Step, 2-Step, and Instant
              Funding.
            </div>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium">
<span className="">When will the winner be announced?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-lg leading-relaxed">
              The winner will be announced on Instagram and all social media
              within 48 hours after the promotion ends. The winner will also be
              contacted via email.
            </div>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium">
<span className="">Is there a cash alternative?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-lg leading-relaxed">
              Yes. The winner may choose to receive the cash equivalent of the
              Tesla Model Y base price (approx $39,999 USD) transferred via bank
              wire or crypto.
            </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative overflow-hidden text-center border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
          Drive Your Dream. Trade with Capital.
        </h2>
<p className="text-xl text-neutral-400 mb-10">
          Don't miss out on 17% savings and the chance to upgrade your
          lifestyle.
        </p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-lg font-semibold rounded hover:bg-neutral-200 transition-colors" href="#challenges">
          Get Started
          <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section>

<footer className="py-12 bg-black border-t border-white/5 text-neutral-600 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full border border-neutral-700 flex items-center justify-center">
<svg className="lucide lucide-trending-up w-3 h-3 text-neutral-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
</div>
<span className="font-medium text-neutral-300">
              ALPHA
              <span className="text-neutral-600">TRADER</span>
</span>
</div>
<div className="flex gap-6">
<a className="hover:text-neutral-400 transition-colors" href="#">
              Terms
            </a>
<a className="hover:text-neutral-400 transition-colors" href="#">
              Privacy
            </a>
<a className="hover:text-neutral-400 transition-colors" href="#">
              Rules
            </a>
</div>
</div>
<div className="text-center md:text-left space-y-2">
<p className="">
            U.S. residents only. Entry available with qualifying purchase. No
            purchase necessary for mail-in entry method (see rules).
          </p>
<p>
            The Tesla Model Y trademark is property of Tesla, Inc. This
            promotion is not sponsored, endorsed, or administered by Tesla, Inc.
          </p>
<p>© 2024 Alpha Capital Trading. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
