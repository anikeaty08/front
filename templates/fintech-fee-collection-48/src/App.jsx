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
      

<div className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
<nav className="mx-auto max-w-5xl flex items-center justify-between glass-nav border border-slate-200/50 rounded-full pl-5 pr-2 py-2 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.02)]">
<a className="flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-slate-900 rounded-md flex items-center justify-center text-white text-[10px] font-bold">C</div>
<span className="font-semibold text-sm tracking-tight text-slate-900">CoFee</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Philosophy</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Security</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Origin</a>
</div>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all" href="#">
                Get Started
            </a>
</nav>
</div>

<header className="relative pt-40 pb-32 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-slate-50 rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                v2.0 is live
            </div>
<h1 className="text-6xl sm:text-7xl md:text-8xl font-medium tracking-tighter text-slate-900 mb-8 text-balance leading-[0.9]">
                Payments, <br/>
<span className="text-slate-400 italic">perfected.</span>
</h1>
<p className="text-lg text-slate-500 font-light max-w-lg mx-auto leading-relaxed mb-12 text-balance">
                The friction-free layer between institutions and parents. <br/> No clutter, just collection.
            </p>

<div className="relative w-full max-w-2xl mx-auto h-24 sm:h-32 rounded-2xl border border-slate-100 bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)] flex items-center justify-between px-8 sm:px-12 overflow-hidden group">

<div className="absolute inset-y-0 left-0 w-1 bg-emerald-500/20 group-hover:left-full transition-all duration-[2s] ease-in-out"></div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
<i className="w-4 h-4 text-slate-400" data-lucide="arrow-down-left"></i>
</div>
<div>
<div className="h-2 w-20 bg-slate-100 rounded-full mb-2"></div>
<div className="h-2 w-12 bg-slate-50 rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-2xl font-medium tracking-tight text-slate-900">₹24,000</span>
<div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
<i className="w-3 h-3 text-emerald-600" data-lucide="check"></i>
</div>
</div>
</div>
</div></header>
<div className="w-full h-px bg-slate-100"></div>

<section className="bg-slate-50/50 py-32 border-b border-slate-100 relative">
<div className="bg-grain absolute inset-0 opacity-50 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">The CoFee Philosophy</h2>
<p className="text-slate-500 text-sm max-w-md leading-relaxed">We stripped away the noise to focus on three core pillars of modern financial operations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="md:col-span-1 md:row-span-2 bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden">
<div>
<div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-orange-600" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Instant Settlement</h3>
<p className="text-sm text-slate-500 leading-relaxed">Why wait T+2 days? We process and settle fees in real-time, keeping your cash flow liquid and predictable.</p>
</div>
<div className="mt-8 relative h-32 w-full bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 flex justify-between items-center text-xs font-mono text-slate-300">
<span>09:41:00</span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
<span className="text-orange-500">09:41:01</span>
</div>
</div>
</div>

<div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-blue-600" data-lucide="shield-check"></i>
</div>
<span className="text-[10px] font-bold border border-slate-100 px-2 py-1 rounded bg-slate-50 text-slate-500 uppercase">SOC2 Type II</span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Continuity &amp; Trust</h3>
<p className="text-sm text-slate-500 max-w-sm leading-relaxed">Our circular framework ensures zero downtime. Parents experience a seamless loop of reminders and receipts.</p>
</div>

<div className="absolute right-0 bottom-0 opacity-10 translate-x-10 translate-y-10">
<i className="w-64 h-64 text-blue-600" data-lucide="infinity"></i>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-md transition-all group">
<div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-purple-600" data-lucide="pie-chart"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-1">Deep Analytics</h3>
<p className="text-xs text-slate-500">Crystal clear financial health.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-md transition-all group">
<div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-emerald-600" data-lucide="smartphone"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-1">Mobile First</h3>
<p className="text-xs text-slate-500">Designed for the parent's pocket.</p>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 sm:px-6">
<div className="max-w-7xl mx-auto bg-[#0F1115] rounded-[2.5rem] py-24 px-8 sm:px-20 relative overflow-hidden isolate">

<div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white mb-6">
                        Fort Knox, <br/>
<span className="text-slate-500">digitized.</span>
</h2>
<p className="text-slate-400 text-lg font-light leading-relaxed mb-10 max-w-md">
                        We don't just process payments; we protect identities. Enterprise-grade encryption comes standard.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 text-slate-300">
<i className="w-5 h-5 text-emerald-500" data-lucide="lock"></i>
<span className="text-sm font-medium">End-to-End 256-bit Encryption</span>
</div>
<div className="flex items-center gap-4 text-slate-300">
<i className="w-5 h-5 text-emerald-500" data-lucide="server"></i>
<span className="text-sm font-medium">Data localization &amp; Sovereignty</span>
</div>
<div className="flex items-center gap-4 text-slate-300">
<i className="w-5 h-5 text-emerald-500" data-lucide="users"></i>
<span className="text-sm font-medium">Role-based Access Control</span>
</div>
</div>
</div>

<div className="relative h-64 sm:h-80 w-full bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent"></div>

<div className="w-20 h-20 rounded-2xl bg-[#0F1115] border border-emerald-500/30 flex items-center justify-center relative z-20 pulse-ring">
<i className="w-8 h-8 text-emerald-500" data-lucide="shield"></i>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
<line stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" x1="50%" x2="20%" y1="50%" y2="20%"></line>
<line stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" x1="50%" x2="80%" y1="50%" y2="20%"></line>
<line stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" x1="50%" x2="20%" y1="50%" y2="80%"></line>
<line stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" x1="50%" x2="80%" y1="50%" y2="80%"></line>
</svg>

<div className="absolute top-[20%] left-[20%] w-8 h-8 bg-white/10 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '0s'}}><i className="w-3 h-3 text-slate-400" data-lucide="file-key"></i></div>
<div className="absolute top-[20%] right-[20%] w-8 h-8 bg-white/10 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}><i className="w-3 h-3 text-slate-400" data-lucide="database"></i></div>
<div className="absolute bottom-[20%] left-[20%] w-8 h-8 bg-white/10 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}><i className="w-3 h-3 text-slate-400" data-lucide="credit-card"></i></div>
<div className="absolute bottom-[20%] right-[20%] w-8 h-8 bg-white/10 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '3s'}}><i className="w-3 h-3 text-slate-400" data-lucide="globe"></i></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32">
<div className="flex flex-col lg:flex-row items-stretch min-h-[500px]">

<div className="w-full lg:w-1/2 pr-0 lg:pr-20 flex flex-col justify-center mb-12 lg:mb-0">
<div className="flex items-center gap-2 mb-6">
<span className="w-8 h-[1px] bg-slate-900"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-900">Our Origins</span>
</div>
<h2 className="text-4xl font-medium tracking-tight text-slate-900 mb-8">
                    Engineered by <br/> KeyValue Systems.
                </h2>
<div className="space-y-6 text-slate-500 font-light text-lg leading-relaxed">
<p>
                        CoFee wasn't born in a boardroom. It was forged in the engineering labs of <span className="text-slate-900 font-medium">KeyValue</span>, where 450+ engineers build the next generation of SaaS products.
                    </p>
<p>
                        We applied the same rigor used for Silicon Valley unicorns to the problem of school fee collection. The result? A platform that feels less like a bank and more like magic.
                    </p>
</div>
<div className="mt-12 flex items-center gap-12 border-t border-slate-100 pt-8">
<div>
<div className="text-2xl font-semibold text-slate-900">2015</div>
<div className="text-[10px] text-slate-400 uppercase tracking-wide mt-1">Established</div>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900">120+</div>
<div className="text-[10px] text-slate-400 uppercase tracking-wide mt-1">Products</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 bg-slate-50 rounded-[2rem] p-12 flex flex-col justify-between border border-slate-100 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<i className="w-10 h-10 text-slate-200 mb-6" data-lucide="quote"></i>
<p className="text-2xl font-medium text-slate-900 tracking-tight leading-snug">
                        "The complexity of financial software is often a choice. We chose simplicity."
                    </p>
</div>
<div className="relative z-10 flex items-center gap-4 mt-12">
<div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">

<div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400"></div>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Engineering Team</div>
<div className="text-xs text-slate-500">KeyValue Software Systems</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
<div className="md:w-1/4">
<span className="block text-4xl font-semibold tracking-tighter text-emerald-600 mb-1">₹20Cr+</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Volume Processed</span>
</div>
<div className="hidden md:block w-px h-12 bg-slate-200"></div>
<div className="md:w-1/4">
<span className="block text-4xl font-semibold tracking-tighter text-slate-900 mb-1">50k+</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Active Parents</span>
</div>
<div className="hidden md:block w-px h-12 bg-slate-200"></div>
<div className="md:w-1/4">
<span className="block text-4xl font-semibold tracking-tighter text-slate-900 mb-1">100+</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Institutions</span>
</div>
<div className="hidden md:block w-px h-12 bg-slate-200"></div>
<div className="md:w-1/4">
<span className="block text-4xl font-semibold tracking-tighter text-slate-900 mb-1">99.9%</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Uptime</span>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-32 pb-10">
<div className="max-w-3xl mx-auto px-6 text-center mb-24">
<h2 className="text-5xl font-medium tracking-tight text-slate-900 mb-8">Simple enough?</h2>
<p className="text-slate-500 mb-10 text-lg font-light">Join the institutions redefining their financial future.</p>
<div className="flex items-center justify-center gap-4">
<a className="px-8 py-4 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-900/10" href="#">Start Collection</a>
<a className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-900 font-medium text-sm hover:bg-slate-50 transition-colors" href="#">Contact Sales</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-[10px] font-bold">C</div>
<span className="font-semibold text-sm">CoFee</span>
</div>
<div className="flex gap-6 text-xs text-slate-400 font-medium">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
<span>© 2024 KeyValue</span>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
