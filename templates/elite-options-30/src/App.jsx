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
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-12 shadow-2xl shadow-black/50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs tracking-tighter">EO</div>
<span className="text-sm font-semibold text-white tracking-tight">Elite Options</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#criteria">Criteria</a>
<a className="hover:text-white transition-colors" href="#agenda">Agenda</a>
<a className="hover:text-white transition-colors" href="#speakers">Mentors</a>
</div>
<a className="bg-white text-black hover:bg-neutral-200 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors" href="#apply">
                Apply for Seat
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden bg-grid">
<div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-transparent to-transparent z-10"></div>
<div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>
<div className="max-w-5xl mx-auto px-6 relative z-20 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-400 text-[10px] uppercase tracking-widest font-semibold mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                Mumbai • Nov 24-25
            </div>

<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-8 leading-[0.9]">
                Professional <br/>
<span className="text-neutral-500">Trading Summit.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed mb-10">
                An invite-only masterclass for high-capital traders. <br/>
<span className="text-white">Strictly not for beginners.</span>
</p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-neutral-200 text-black font-semibold rounded-2xl text-sm transition-all flex items-center justify-center gap-2" href="#apply">
                    Verify Capital &amp; Apply
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<div className="text-xs text-neutral-500 font-medium px-4">
                    Only <span className="text-white">12/50</span> seats remaining
                </div>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-neutral-900/20 overflow-hidden py-4">
<div className="flex whitespace-nowrap animate-scroll">
<div className="flex items-center gap-12 px-6">
<span className="text-4xl font-bold text-white/5 tracking-tighter">NON-DIRECTIONAL</span>
<span className="text-4xl font-bold text-white/10 tracking-tighter">INSTITUTIONAL HEDGING</span>
<span className="text-4xl font-bold text-white/5 tracking-tighter">THETA DECAY</span>
<span className="text-4xl font-bold text-white/10 tracking-tighter">RISK MANAGEMENT</span>
<span className="text-4xl font-bold text-white/5 tracking-tighter">CAPITAL PRESERVATION</span>
<span className="text-4xl font-bold text-white/10 tracking-tighter">PORTFOLIO MARGIN</span>
</div>
<div className="flex items-center gap-12 px-6">
<span className="text-4xl font-bold text-white/5 tracking-tighter">NON-DIRECTIONAL</span>
<span className="text-4xl font-bold text-white/10 tracking-tighter">INSTITUTIONAL HEDGING</span>
<span className="text-4xl font-bold text-white/5 tracking-tighter">THETA DECAY</span>
<span className="text-4xl font-bold text-white/10 tracking-tighter">RISK MANAGEMENT</span>
<span className="text-4xl font-bold text-white/5 tracking-tighter">CAPITAL PRESERVATION</span>
<span className="text-4xl font-bold text-white/10 tracking-tighter">PORTFOLIO MARGIN</span>
</div>
</div>
</div>

<section className="py-24 relative" id="criteria">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-4xl font-semibold text-white tracking-tighter mb-4">Entry Criteria</h2>
<p className="text-neutral-400">We maintain a high-caliber room by strictly enforcing these limits.</p>
</div>
<div className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs font-semibold flex items-center gap-2">
<span className="iconify" data-icon="lucide:alert-octagon" data-width="14"></span>
                    Applications screened manually
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="md:col-span-2 md:row-span-2 bg-neutral-900 border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-between card-hover relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>
<div>
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
<span className="iconify" data-icon="lucide:wallet" data-width="24"></span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-2">Capital Requirement</h3>
<p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm">
                            This masterclass focuses on strategies that require margin. Small accounts cannot execute these mathematically advantageous trades effectively.
                        </p>
</div>
<div className="mt-8 space-y-4">
<div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
<span className="text-neutral-400 text-sm">Optimized for</span>
<span className="text-white font-mono text-xl tracking-tight font-semibold">₹10,00,000+</span>
</div>
<div className="flex items-center justify-between p-4 bg-red-950/20 rounded-xl border border-red-500/10">
<span className="text-red-200 text-sm">Minimum Required</span>
<span className="text-red-400 font-mono text-xl tracking-tight font-semibold"> &gt; ₹3,00,000</span>
</div>
</div>
</div>

<div className="bg-neutral-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-between card-hover">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400">
<span className="iconify" data-icon="lucide:x-circle" data-width="20"></span>
</div>
</div>
<div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Not for Beginners</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                            No "What is a Call option?" questions. We start directly with advanced Greeks and adjustments.
                        </p>
</div>
</div>

<div className="bg-neutral-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-between card-hover">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center">
<span className="iconify" data-icon="lucide:briefcase" data-width="20"></span>
</div>
</div>
<div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Professionals Only</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                            Designed for business owners, doctors, and tech leads looking to deploy idle capital.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-6">
                        Trade like a <br/> Hedge Fund.
                    </h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                        Retail traders gamble. Institutions sell tickets to the casino. We teach you how to become the house. Stop chasing 100% returns and start generating consistent 3-5% monthly income on large capital.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="10"></span>
</div>
<div>
<h4 className="text-white font-medium text-sm">Systematic Selling</h4>
<p className="text-neutral-500 text-xs mt-1">Selling premium on high-probability setups.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="10"></span>
</div>
<div>
<h4 className="text-white font-medium text-sm">Portfolio Margin Utilization</h4>
<p className="text-neutral-500 text-xs mt-1">How to use leverage safely without blowing up.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="10"></span>
</div>
<div>
<h4 className="text-white font-medium text-sm">Firefighting Adjustments</h4>
<p className="text-neutral-500 text-xs mt-1">What to do when the market crashes (and how to profit).</p>
</div>
</li>
</ul>
</div>
<div className="relative">

<div className="bg-neutral-900 border border-white/5 rounded-3xl p-6 relative z-10 shadow-2xl">
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="text-[10px] font-mono text-neutral-500">REALIZED_PnL.json</div>
</div>
<div className="space-y-3 font-mono text-xs">
<div className="flex justify-between items-center text-neutral-400">
<span>TOTAL_CAPITAL</span>
<span className="text-white">₹ 25,40,000.00</span>
</div>
<div className="flex justify-between items-center text-neutral-400">
<span>MARGIN_USED</span>
<span className="text-white">₹ 8,50,000.00</span>
</div>
<div className="h-px bg-white/5 my-2"></div>
<div className="flex justify-between items-center text-neutral-400">
<span>MTH_RETURN</span>
<span className="text-green-400">+₹ 1,12,500.00</span>
</div>
<div className="flex justify-between items-center text-neutral-400">
<span>ROI</span>
<span className="text-green-400">4.4%</span>
</div>
</div>

<div className="mt-8 flex items-end justify-between gap-1 h-32 opacity-80">
<div className="w-full bg-neutral-800 rounded-t h-[30%]"></div>
<div className="w-full bg-neutral-800 rounded-t h-[45%]"></div>
<div className="w-full bg-neutral-800 rounded-t h-[40%]"></div>
<div className="w-full bg-neutral-800 rounded-t h-[60%]"></div>
<div className="w-full bg-white rounded-t h-[75%] shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
<div className="w-full bg-neutral-800 rounded-t h-[70%]"></div>
<div className="w-full bg-neutral-800 rounded-t h-[85%]"></div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-[50px] pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="apply">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold text-white tracking-tighter mb-16">Secure Your Access</h2>
<div className="glass-panel p-1 rounded-3xl inline-block w-full max-w-lg mx-auto">
<div className="bg-black rounded-[20px] overflow-hidden relative">

<div className="bg-white p-8 pb-12 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://api.iconify.design/lucide/waves.svg?color=%23f5f5f5')] opacity-50"></div>
<div className="relative z-10 flex justify-between items-start">
<div className="text-left">
<div className="text-black font-bold text-2xl tracking-tighter">ELITE OPTIONS</div>
<div className="text-neutral-500 text-sm font-medium mt-1">Professional Cohort</div>
</div>
<div className="text-right">
<div className="text-black font-bold text-3xl tracking-tighter">₹24,999</div>
<div className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest mt-1">Per Seat</div>
</div>
</div>
</div>

<div className="relative h-4 bg-black">
<div className="absolute -top-4 -left-4 w-8 h-8 bg-black rounded-full"></div>
<div className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full"></div>
<div className="absolute top-[-1px] left-4 right-4 border-t-2 border-dashed border-neutral-800"></div>
</div>

<div className="p-8 pt-4">
<div className="space-y-4 mb-8">
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-500">Location</span>
<span className="text-white font-medium">Taj Lands End, Mumbai</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-500">Date</span>
<span className="text-white font-medium">Nov 24-25, 2024</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-500">Prerequisite</span>
<span className="text-white font-medium">Capital &gt; ₹3 Lakhs</span>
</div>
</div>
<button className="w-full py-4 bg-white hover:bg-neutral-200 text-black font-bold text-sm rounded-xl transition-colors tracking-tight">
                            Proceed to Application
                        </button>
<p className="text-[10px] text-neutral-600 mt-4 text-center">
                            *Fees fully refundable if application is rejected based on capital criteria.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black text-center">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<div className="text-white font-bold tracking-tight mb-6">ELITE OPTIONS</div>
<div className="flex gap-6 mb-8 text-neutral-500 text-sm">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<p className="text-neutral-600 text-[10px] max-w-lg mx-auto">
                Disclaimer: Futures and options trading involves substantial risk of loss and is not suitable for every investor. The valuation of futures and options may fluctuate, and as a result, clients may lose more than their original investment.
            </p>
</div>
</footer>

    </>
  );
}
