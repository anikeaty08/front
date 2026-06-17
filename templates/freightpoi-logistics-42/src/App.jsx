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
      

<div className="fixed inset-0 noise-overlay pointer-events-none z-50"></div>

<nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-[#030305]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-white rounded flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-black rounded-sm"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-white">FreightPoint</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#workflows">Workflows</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
</div>
<a className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#">
                Book a demo
            </a>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute inset-0 hero-glow pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    New: Automated AP Invoice Audit
                </div>
<h1 className="md:text-7xl leading-[1.1] bg-clip-text text-5xl font-medium text-transparent tracking-tight bg-gradient-to-b from-white to-white/60 mb-8">
                    The operational backbone for <br/>
<span className="text-gradient-blue">modern logistics.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
                    Eliminate the high-friction back-office work slowing your team down. 
                    We automate quoting, order entry, and document retrieval directly inside your existing TMS.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 group">
                        Start Automating
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-0.5 transition-transform stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium text-sm text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-all bg-white/5">
                        View ROI Calculator
                    </button>
</div>
<p className="mt-6 text-xs text-zinc-500">
                    Integrates with TMW, McLeod, CargoWise, and 20+ others.
                </p>
</div>

<div className="relative w-full max-w-5xl mx-auto aspect-[16/7] glass-panel rounded-xl border border-white/10 overflow-hidden hidden md:block group">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: '0.1'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-[#030305] border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] flex items-center justify-center relative">
<div className="absolute inset-0 bg-blue-500/10 animate-pulse rounded-2xl"></div>
<svg className="lucide lucide-cpu w-8 h-8 text-blue-400 stroke-[1.5]" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div className="mt-4 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-mono">
                        PROCESSING LIVE
                    </div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
<defs>
<lineargradient id="line-grad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(59, 130, 246, 0)"></stop>
<stop offset="50%" stop-color="rgba(59, 130, 246, 0.5)"></stop>
<stop offset="100%" stop-color="rgba(59, 130, 246, 0)"></stop>
</lineargradient>
</defs>

<path className="opacity-20" d="M 100 150 Q 250 150 512 250" fill="none" stroke="url(#line-grad)" strokeWidth="1"></path>
<path className="opacity-20" d="M 100 350 Q 250 350 512 250" fill="none" stroke="url(#line-grad)" strokeWidth="1"></path>
<path className="opacity-20" d="M 924 150 Q 774 150 512 250" fill="none" stroke="url(#line-grad)" strokeWidth="1"></path>
<path className="opacity-20" d="M 924 350 Q 774 350 512 250" fill="none" stroke="url(#line-grad)" strokeWidth="1"></path>
</svg>

<div className="absolute top-[130px] left-[60px] glass-pill px-3 py-1.5 rounded-lg flex items-center gap-2">
<svg className="lucide lucide-mail w-3 h-3 text-zinc-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-[10px] text-zinc-300">New Quote Request</span>
</div>
<div className="absolute bottom-[130px] left-[60px] glass-pill px-3 py-1.5 rounded-lg flex items-center gap-2">
<svg className="lucide lucide-file-text w-3 h-3 text-zinc-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-[10px] text-zinc-300">Carrier Invoice PDF</span>
</div>

<div className="absolute top-[130px] right-[60px] glass-pill px-3 py-1.5 rounded-lg flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-[10px] text-zinc-300">Order Built (TMS)</span>
</div>
<div className="absolute bottom-[130px] right-[60px] glass-pill px-3 py-1.5 rounded-lg flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-[10px] text-zinc-300">Audit Complete</span>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Trusted by operational leaders at</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center justify-center gap-2">
<div className="w-6 h-6 bg-white rounded-sm"></div>
<span className="text-lg font-bold text-white tracking-tight">LOGISTIX</span>
</div>
<div className="flex items-center justify-center gap-2">
<div className="w-6 h-6 border-2 border-white rounded-full"></div>
<span className="text-lg font-bold text-white tracking-tight">FREIGHTCO</span>
</div>
<div className="flex items-center justify-center gap-2">
<div className="w-6 h-6 bg-white rotate-45"></div>
<span className="text-lg font-bold text-white tracking-tight">APEX</span>
</div>
<div className="flex items-center justify-center gap-2">
<div className="w-6 h-6 border-2 border-white rounded-sm"></div>
<span className="text-lg font-bold text-white tracking-tight">UNIFIED</span>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#030305]" id="how-it-works">

<div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                    From chaos to <span className="text-gradient-blue">consistency.</span>
</h2>
<p className="text-lg text-zinc-400 max-w-xl">
                    We deploy in days, not months. No heavy IT lifting, no changing your TMS.
                    Just pure operational velocity.
                </p>
</div>
<div className="relative">

<div className="absolute left-8 md:left-[2.25rem] top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent dashed border-l border-dashed border-white/20"></div>

<div className="relative flex gap-8 mb-20 group">
<div className="relative z-10 shrink-0">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#0a0a12] border border-white/10 flex items-center justify-center group-hover:border-blue-500/40 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300">
<svg className="lucide lucide-plug w-6 h-6 md:w-8 md:h-8 text-blue-400 stroke-[1.5]" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M15 8V2"></path><path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"></path><path d="M9 8V2"></path></svg>
</div>
<div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full md:hidden"></div>
</div>
<div className="pt-2">
<span className="text-xs font-mono text-blue-400 mb-2 block">STEP 01</span>
<h3 className="text-xl md:text-2xl font-medium text-white mb-3">Connect your stack</h3>
<p className="text-zinc-400 leading-relaxed max-w-lg">
                            We plug directly into your existing ecosystem via API or secure connectors. 
                            Whether it's your TMS (TMW, McLeod), your Email (Outlook/Gmail), or carrier portals.
                            <span className="text-white">Zero IT resources required from your side.</span>
</p>
</div>
</div>

<div className="relative flex gap-8 mb-20 group">
<div className="relative z-10 shrink-0">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#0a0a12] border border-white/10 flex items-center justify-center group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
<svg className="lucide lucide-git-branch w-6 h-6 md:w-8 md:h-8 text-purple-400 stroke-[1.5]" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
</div>
<div className="pt-2">
<span className="text-xs font-mono text-purple-400 mb-2 block">STEP 02</span>
<h3 className="text-xl md:text-2xl font-medium text-white mb-3">Map the logic</h3>
<p className="text-zinc-400 leading-relaxed max-w-lg">
                            We take your implicit tribal knowledge—"If X carrier, check Y website"—and turn it into explicit code. 
                            We run in "Shadow Mode" first to validate accuracy against your team's manual work.
                        </p>
</div>
</div>

<div className="relative flex gap-8 group">
<div className="relative z-10 shrink-0">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#0a0a12] border border-white/10 flex items-center justify-center group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300">
<svg className="lucide lucide-zap w-6 h-6 md:w-8 md:h-8 text-cyan-400 stroke-[1.5]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
<div className="pt-2">
<span className="text-xs font-mono text-cyan-400 mb-2 block">STEP 03</span>
<h3 className="text-xl md:text-2xl font-medium text-white mb-3">Scale &amp; Exceptions</h3>
<p className="text-zinc-400 leading-relaxed max-w-lg">
                            We flip the switch. The system handles 95% of the volume instantly. 
                            Your team stops being data-entry clerks and becomes 
                            <span className="text-white">exception managers</span>, only touching the 5% that actually needs human judgment.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#050508]" id="workflows">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">High-Impact Workflows</h2>
<p className="text-zinc-400">Modules you can activate individually or together.</p>
</div>
<a className="hidden md:flex text-sm text-white hover:text-blue-400 transition-colors items-center gap-2" href="#">
                    See full catalog <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer">
<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-mail-open w-5 h-5 text-blue-400 stroke-[1.5]" data-lucide="mail-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Quote-to-Order</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Parse incoming email quotes and PDFs. Automatically build loads in your TMS with correct rates and accessorials.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer">
<div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-scan-line w-5 h-5 text-purple-400 stroke-[1.5]" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Track &amp; Trace</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Scrape carrier portals and aggregate ELD data. Update customer portals without human intervention.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer">
<div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-dollar-sign w-5 h-5 text-green-400 stroke-[1.5]" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Invoice Audit</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Validate carrier invoices against quoted amounts. Flag discrepancies automatically and approve the rest.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer">
<div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-file-check w-5 h-5 text-orange-400 stroke-[1.5]" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Doc Retrieval</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Chase carriers for missing PODs and BOLs. Automatically attach them to the correct load ID.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer">
<div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-user-plus w-5 h-5 text-cyan-400 stroke-[1.5]" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Carrier Onboarding</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Validate insurance, authority, and safety ratings instantly. Setup vendor profiles in seconds.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer">
<div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-calendar w-5 h-5 text-pink-400 stroke-[1.5]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Appointment Scheduling</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Navigate facility portals to book appointments based on ETA and HOS constraints.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#030305]" id="results">
<div className="max-w-6xl mx-auto px-6">
<div className="glass-panel rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-br from-white/[0.03] to-transparent">
<div className="max-w-lg">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">The cost of doing nothing?</h2>
<p className="text-zinc-400 text-lg mb-8">
                        Manual data entry isn't just slow—it's expensive. Our customers typically see ROI in the first 30 days.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 font-bold text-lg">
                                15h
                            </div>
<div className="">
<p className="text-white font-medium">Saved per rep/week</p>
<p className="text-xs text-zinc-500">On manual data entry tasks</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-lg">
                                99%
                            </div>
<div className="">
<p className="text-white font-medium">Accuracy rate</p>
<p className="text-xs text-zinc-500">Eliminating "fat finger" errors</p>
</div>
</div>
</div>
</div>
<div className="relative w-full md:w-96">

<div className="bg-[#0a0a0f] p-8 rounded-xl border border-white/10 relative shadow-2xl">
<div className="absolute -top-4 -left-4 text-6xl text-white/10 font-serif">"</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6 relative z-10">
                            We stopped chasing missing PODs. The system just finds them and attaches them. 
                            It saved our collections team about 15 hours a week immediately.
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-xs font-bold text-white">
                                MK
                            </div>
<div>
<p className="text-sm font-medium text-white">Mike K.</p>
<p className="text-xs text-zinc-500">Director of Ops, 3PL</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#020203]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Don't take our word for it.</h2>
<p className="text-zinc-400">See how high-growth logistics teams are scaling without adding headcount.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl mb-6">

<img alt="Meeting room" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
<svg className="w-6 h-6 text-white ml-1" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
<div className="w-1/3 h-full bg-blue-500"></div>
</div>

<div className="absolute bottom-4 right-4 bg-black/80 text-[10px] font-medium text-white px-2 py-1 rounded">
                            2:14
                        </div>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">How Apex Logistics automated 80% of AP audit</h3>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">
                        Sarah Jenkins explains how her team moved from manual spreadsheet checking to automated discrepancy flagging, saving $40k annually.
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] text-white font-bold border border-white/10">SJ</div>
<div className="text-xs">
<span className="text-white block">Sarah Jenkins</span>
<span className="text-zinc-500">VP of Finance, Apex</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl mb-6">

<img alt="Warehouse operations" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
<svg className="w-6 h-6 text-white ml-1" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
<div className="w-2/3 h-full bg-blue-500"></div>
</div>

<div className="absolute bottom-4 right-4 bg-black/80 text-[10px] font-medium text-white px-2 py-1 rounded">
                            1:45
                        </div>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">Scaling to 500 loads/week with zero new hires</h3>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">
                        See how FreightCo used the Quote-to-Order module to triple their booking volume while keeping the same headcount.
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] text-white font-bold border border-white/10">DR</div>
<div className="text-xs">
<span className="text-white block">David Ross</span>
<span className="text-zinc-500">COO, FreightCo</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/5 blur-[100px]"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-white">
                Ready to reclaim your time?
            </h2>
<p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
                Stop letting your best people do work that a machine can do better. 
                Book a discovery call to see a live demo of your workflow.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-medium text-base hover:bg-zinc-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    Book Discovery Call
                </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-base text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 transition-colors bg-white/5">
                    Read Case Studies
                </button>
</div>
<p className="mt-8 text-xs text-zinc-600">
                No credit card required. Free process audit included.
            </p>
</div>
</section>

<footer className="bg-[#020203] border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-zinc-700 rounded-sm"></div>
<span className="text-sm font-semibold text-zinc-300">FreightPoint</span>
</div>
<div className="flex gap-8 text-xs text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-zinc-600">
                © 2024 FreightPoint Operations.
            </div>
</div>
</footer>


    </>
  );
}
