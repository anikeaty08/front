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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-[#facf39] opacity-[0.03] blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-500 opacity-[0.02] blur-[150px] rounded-full pointer-events-none -z-10"></div>

<div className="fixed inset-0 pointer-events-none z-0 grid-lines"></div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 animate-fade-up">
<nav className="flex bg-[#0a0a0a]/80 w-full h-14 max-w-5xl border border-white/10 rounded-full pr-2 pl-6 shadow-2xl backdrop-blur-md items-center justify-between">

<a className="flex items-center gap-1 group hover:opacity-80 transition-opacity" href="#">
<span className="text-sm font-semibold tracking-tighter text-white font-heading">
                    LIQUIDITY<span className="text-[#facf39]">LAB</span>
</span>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#services">Capabilities</a>
<a className="hover:text-white transition-colors duration-200" href="#workflow">Workflow</a>
<a className="hover:text-white transition-colors duration-200" href="#impact">Impact</a>
</div>

<div className="flex items-center gap-3">
<a className="group flex items-center gap-2 hover:bg-white/10 transition-all overflow-hidden bg-white/5 border border-white/5 rounded-full pt-2 pr-4 pb-2 pl-4 relative" href="#contact">
<span className="group-hover:text-[#facf39] transition-colors text-xs font-semibold text-white tracking-tight">
                        Book Consultation
                    </span>
<iconify-icon className="text-neutral-400 group-hover:text-[#facf39] group-hover:translate-x-0.5 transition-all" icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</nav>
</div>

<section className="flex flex-col min-h-screen max-w-7xl mx-auto pt-48 px-6 relative items-center justify-center z-10">

<div className="animate-fade-up delay-100 mb-8">
<div className="inline-flex bg-white/[0.03] border border-white/10 rounded-full py-1.5 px-3 backdrop-blur-sm gap-2 items-center">
<span className="flex h-1.5 w-1.5 rounded-full bg-[#facf39] shadow-[0_0_10px_#facf39]"></span>
<span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">AI-Powered Financial Operations</span>
</div>
</div>

<h1 className="animate-fade-up delay-200 leading-[1] md:text-6xl lg:text-7xl text-4xl font-medium text-neutral-400 tracking-tight text-center max-w-4xl mx-auto mb-8 font-heading">
            Your business is racing towards AI, <br/>
<span className="text-white text-glow">but your finance ops are standing still?</span>
</h1>

<p className="animate-fade-up delay-300 leading-relaxed md:text-xl text-lg font-light text-neutral-400 tracking-tight text-center max-w-2xl mx-auto">
            AP and AR processes are the bottleneck in a digital world. <br className="hidden sm:block"/>
            Liquidity Lab restores the flow with intelligent automation.
        </p>

<div className="animate-fade-up delay-400 mt-10 flex flex-col sm:flex-row gap-4 items-center">
<a className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#facf39] hover:bg-[#ffe066] text-black rounded-full font-semibold text-sm tracking-tight transition-all shadow-[0_0_20px_-5px_rgba(250,207,57,0.4)] group" href="#contact">
                Start Audit
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium text-sm tracking-tight transition-all" href="#services">
                Explore Services
            </a>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
<iconify-icon className="text-white" icon="lucide:mouse" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</section>

<section className="z-20 w-full border-t border-white/5 bg-[#050505] pt-24 pb-24 relative overflow-hidden" id="workflow">
<div className="max-w-7xl mx-auto px-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-6 font-heading">
                        Consulting with <span className="text-[#facf39]">tangible impact.</span>
</h2>
<p className="leading-relaxed text-lg font-light text-neutral-400 max-w-lg mb-10">
                        We transform rigid AR and AP workflows into seamless, automated pipelines by combining deep operational expertise with agentic AI models.
                    </p>
<div className="space-y-8">

<div className="flex gap-4 group">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#facf39]/50 group-hover:bg-[#facf39]/10 transition-colors duration-300">
<iconify-icon className="text-neutral-400 group-hover:text-[#facf39] transition-colors" icon="lucide:git-branch" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white font-heading tracking-tight">Granular Process Mapping</h4>
<p className="text-sm text-neutral-400 mt-2 font-light leading-relaxed">
                                    We map your AP and AR processes at the granular level required for true automation and workflow optimization.
                                </p>
</div>
</div>

<div className="flex gap-4 group">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#facf39]/50 group-hover:bg-[#facf39]/10 transition-colors duration-300">
<iconify-icon className="text-neutral-400 group-hover:text-[#facf39] transition-colors" icon="lucide:cpu" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white font-heading tracking-tight">AI &amp; Risk Algorithms</h4>
<p className="text-sm text-neutral-400 mt-2 font-light leading-relaxed">
                                    Implementation of automated credit and fraud algorithms &amp; AI agents to handle complex operational decisions.
                                </p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="aspect-square md:aspect-[4/3] bg-[#0a0a0a] border border-white/10 rounded-3xl relative shadow-2xl overflow-hidden group">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#facf39 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>

<div className="absolute top-6 left-6 z-30 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#facf39]/20 bg-[#facf39]/10 backdrop-blur-md">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#facf39] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#facf39]"></span>
</span>
<span className="text-[10px] font-semibold tracking-wide text-[#facf39] uppercase">Agentic Workflow Active</span>
</div>

<div className="absolute inset-0 flex items-center justify-center scale-[0.7] md:scale-[0.85] lg:scale-100">

<svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
<defs>
<filter id="glow-line">
<fegaussianblur result="coloredBlur" stddeviation="1.5"></fegaussianblur>
<femerge><femergenode in="coloredBlur"></femergenode><femergenode in="SourceGraphic"></femergenode></femerge>
</filter>
</defs>
<path d="M 120 200 L 160 200" fill="none" stroke="#facf39" stroke-opacity="0.2" strokeWidth="1"></path>
<path d="M 240 200 L 280 200" fill="none" stroke="#facf39" stroke-opacity="0.2" strokeWidth="1"></path>

<path d="M 360 200 L 380 200 L 380 120 L 400 120" fill="none" stroke="#facf39" stroke-opacity="0.2" strokeWidth="1"></path>
<path d="M 360 200 L 380 200 L 380 280 L 400 280" fill="none" stroke="#facf39" stroke-opacity="0.2" strokeWidth="1"></path>

<path d="M 480 280 L 520 280" fill="none" stroke="#facf39" stroke-opacity="0.2" strokeWidth="1"></path>

<circle fill="#facf39" filter="url(#glow-line)" r="2">
<animatemotion dur="2s" path="M 120 200 L 160 200" repeatcount="indefinite"></animatemotion>
</circle>
<circle fill="#facf39" filter="url(#glow-line)" r="2">
<animatemotion begin="0.5s" dur="2s" path="M 240 200 L 280 200" repeatcount="indefinite"></animatemotion>
</circle>
<circle fill="#facf39" filter="url(#glow-line)" r="2">
<animatemotion begin="1s" dur="3s" path="M 360 200 L 380 200 L 380 280 L 400 280" repeatcount="indefinite"></animatemotion>
</circle>
</svg>

<div className="absolute left-[40px] top-[160px] w-20 h-20 bg-[#111] border border-white/10 rounded-xl flex flex-col items-center justify-center z-10 shadow-2xl">
<iconify-icon className="text-white mb-2" icon="lucide:mail" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px] text-neutral-400 font-medium uppercase tracking-wider">Inbound</span>
</div>

<div className="absolute left-[160px] top-[160px] w-20 h-20 bg-[#111] border border-[#facf39]/30 rounded-xl flex flex-col items-center justify-center z-10 shadow-[0_0_20px_-10px_rgba(250,207,57,0.2)]">
<iconify-icon className="text-[#facf39] mb-2" icon="lucide:brain-circuit" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px] text-[#facf39] font-medium uppercase tracking-wider">Analyze</span>
</div>

<div className="absolute left-[280px] top-[160px] w-20 h-20 bg-[#111] border border-white/10 rounded-lg rotate-45 flex items-center justify-center z-10">
<div className="-rotate-45 flex flex-col items-center">
<iconify-icon className="text-neutral-400" icon="lucide:split" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>

<div className="absolute left-[400px] top-[80px] w-20 h-20 bg-[#111] border border-white/10 rounded-xl flex flex-col items-center justify-center z-10 opacity-60">
<iconify-icon className="text-neutral-400 mb-2" icon="lucide:database" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px] text-neutral-500 font-medium uppercase tracking-wider">ERP Update</span>
</div>

<div className="absolute left-[400px] top-[240px] w-20 h-20 bg-[#111] border border-white/10 rounded-xl flex flex-col items-center justify-center z-10">
<iconify-icon className="text-white mb-2" icon="lucide:bot" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px] text-neutral-400 font-medium uppercase tracking-wider">Agent</span>
</div>

<div className="absolute left-[520px] top-[240px] w-20 h-20 bg-[#111] border border-green-500/30 rounded-xl flex flex-col items-center justify-center z-10 shadow-[0_0_20px_-10px_rgba(34,197,94,0.2)]">
<iconify-icon className="text-green-500 mb-2" icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px] text-green-500 font-medium uppercase tracking-wider">Resolved</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 w-full border-t border-white/5 bg-[#050505] pt-24 pb-24 relative" id="impact">
<div className="max-w-7xl mx-auto px-6">
<div className="animate-fade-up w-full grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative bg-[#0a0a0a] rounded-3xl border border-white/5 p-8 flex flex-col justify-between overflow-hidden group hover:border-white/10 transition-colors h-[380px]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,207,57,0.03),transparent_50%)]"></div>
<div className="relative z-10">
<h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-[#facf39]" icon="lucide:trending-up" width="14"></iconify-icon> Revenue Uplift
                        </h3>
</div>
<div className="relative z-10 my-auto">
<span className="text-6xl lg:text-7xl font-medium tracking-tighter text-white block">
                            +40<span className="text-[#facf39]">%</span>
</span>
<p className="text-sm font-light text-neutral-400 mt-4 leading-relaxed">
                            Revenue uplift achieved by offering optimized payment terms across all sales channels.
                        </p>
</div>

<div className="relative z-10 h-16 w-full flex items-end gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-full bg-[#facf39]/10 h-[20%] rounded-sm"></div>
<div className="w-full bg-[#facf39]/10 h-[35%] rounded-sm"></div>
<div className="w-full bg-[#facf39]/20 h-[50%] rounded-sm"></div>
<div className="w-full bg-[#facf39]/40 h-[75%] rounded-sm"></div>
<div className="w-full bg-[#facf39]/60 h-[100%] rounded-sm"></div>
</div>
</div>

<div className="relative bg-[#0a0a0a] rounded-3xl border border-white/5 p-8 flex flex-col justify-between overflow-hidden group hover:border-white/10 transition-colors h-[380px]">
<div className="relative z-10">
<h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-[#facf39]" icon="lucide:clock" width="14"></iconify-icon> DSO Reduction
                        </h3>
</div>
<div className="relative z-10 my-auto">
<span className="text-6xl lg:text-7xl font-medium tracking-tighter text-white block">
                            -28<span className="text-[#facf39]">%</span>
</span>
<p className="text-sm font-light text-neutral-400 mt-4 leading-relaxed">
                            Reduction in Days Sales Outstanding via automated credit checks and AI voice agents.
                        </p>
</div>

<div className="relative z-10 h-16 w-full flex items-end gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-full bg-[#facf39]/60 h-[100%] rounded-sm"></div>
<div className="w-full bg-[#facf39]/40 h-[75%] rounded-sm"></div>
<div className="w-full bg-[#facf39]/20 h-[50%] rounded-sm"></div>
<div className="w-full bg-[#facf39]/10 h-[30%] rounded-sm"></div>
<div className="w-full bg-[#facf39]/5 h-[15%] rounded-sm"></div>
</div>
</div>

<div className="relative bg-[#0a0a0a] rounded-3xl border border-white/5 p-8 flex flex-col justify-between overflow-hidden group hover:border-white/10 transition-colors h-[380px]">
<div className="relative z-10">
<h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-[#facf39]" icon="lucide:coins" width="14"></iconify-icon> AP Savings
                        </h3>
</div>
<div className="relative z-10 my-auto">
<span className="text-6xl lg:text-7xl font-medium tracking-tighter text-white block">
                            -15<span className="text-[#facf39]">%</span>
</span>
<p className="text-sm font-light text-neutral-400 mt-4 leading-relaxed">
                            Direct savings on AP spend through automated invoice validation and fraud prevention.
                        </p>
</div>

<div className="relative z-10 h-16 w-full flex items-end gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-full bg-[#facf39]/60 h-[90%] rounded-sm"></div>
<div className="w-full bg-[#facf39]/50 h-[85%] rounded-sm"></div>
<div className="w-full bg-[#facf39]/40 h-[80%] rounded-sm"></div>
<div className="w-full bg-[#facf39]/30 h-[75%] rounded-sm"></div>
<div className="w-full bg-[#facf39]/10 h-[60%] rounded-sm"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#080808] border-t border-white/5 pt-24 pb-24 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-[#facf39]"></span>
<span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">Capabilities</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight font-heading">
                    Full-cycle financial intelligence.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300">
<div className="relative h-48 w-full overflow-hidden">
<div className="absolute inset-0 bg-[#facf39]/10 mix-blend-overlay z-10"></div>
<img alt="AI Analytics" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
<span className="absolute top-4 right-5 text-4xl font-bold text-white/5 font-heading">01</span>
</div>
<div className="p-8 pt-2 relative z-20">
<div className="w-10 h-10 -mt-7 mb-4 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center text-[#facf39] shadow-lg">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight group-hover:text-[#facf39] transition-colors font-heading">Instant Credit Decision</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Real-time B2B credit scoring allowing immediate trade credit access across any channel.</p>
</div>
</div>

<div className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300">
<div className="relative h-48 w-full overflow-hidden">
<div className="absolute inset-0 bg-[#facf39]/10 mix-blend-overlay z-10"></div>
<img alt="Security" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
<span className="absolute top-4 right-5 text-4xl font-bold text-white/5 font-heading">02</span>
</div>
<div className="p-8 pt-2 relative z-20">
<div className="w-10 h-10 -mt-7 mb-4 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center text-[#facf39] shadow-lg">
<iconify-icon icon="lucide:shield-alert" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight group-hover:text-[#facf39] transition-colors font-heading">Fraud Prevention</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Proprietary algorithms verify buyer identity without adding friction to the sales journey.</p>
</div>
</div>

<div className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300">
<div className="relative h-48 w-full overflow-hidden">
<div className="absolute inset-0 bg-[#facf39]/10 mix-blend-overlay z-10"></div>
<img alt="AI Agent" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
<span className="absolute top-4 right-5 text-4xl font-bold text-white/5 font-heading">03</span>
</div>
<div className="p-8 pt-2 relative z-20">
<div className="w-10 h-10 -mt-7 mb-4 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center text-[#facf39] shadow-lg">
<iconify-icon icon="lucide:bot" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight group-hover:text-[#facf39] transition-colors font-heading">Agentic Collections</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Multi-channel AI agents handle 90% of collections effort for low-value debts autonomously.</p>
</div>
</div>

<div className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300">
<div className="relative h-48 w-full overflow-hidden flex items-center justify-center bg-[#0d0d0d]">

<div className="w-[260px] bg-[#1a1a1a] border border-white/10 rounded-xl p-4 shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
<span className="text-[10px] text-neutral-400 font-medium">Payment Method</span>
<span className="text-[10px] text-[#facf39] font-bold">Total: $1,240.00</span>
</div>

<div className="flex items-center gap-3 p-2 rounded-lg border border-transparent opacity-50">
<div className="w-3 h-3 rounded-full border border-neutral-600"></div>
<span className="text-[10px] text-neutral-300">Credit Card</span>
</div>

<div className="flex items-center justify-between p-2 rounded-lg bg-[#facf39]/10 border border-[#facf39]/30 mt-1">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full border border-[#facf39] flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-[#facf39]"></div>
</div>
<span className="text-[10px] text-white font-medium">Net 30 Trade Credit</span>
</div>
<span className="text-[9px] bg-[#facf39] text-black px-1.5 py-0.5 rounded font-bold">INSTANT</span>
</div>
<div className="mt-3 w-full h-7 bg-[#facf39] rounded flex items-center justify-center text-[10px] font-bold text-black uppercase tracking-wider">
                                Place Order
                            </div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
<span className="absolute top-4 right-5 text-4xl font-bold text-white/5 font-heading">04</span>
</div>
<div className="p-8 pt-2 relative z-20">
<div className="w-10 h-10 -mt-7 mb-4 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center text-[#facf39] shadow-lg">
<iconify-icon icon="lucide:shopping-cart" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight group-hover:text-[#facf39] transition-colors font-heading">Seamless Checkout</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Integrate payment terms directly into your checkout flow to increase conversion.</p>
</div>
</div>

<div className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300">
<div className="relative h-48 w-full overflow-hidden">
<div className="absolute inset-0 bg-[#facf39]/10 mix-blend-overlay z-10"></div>
<img alt="Validation" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
<span className="absolute top-4 right-5 text-4xl font-bold text-white/5 font-heading">05</span>
</div>
<div className="p-8 pt-2 relative z-20">
<div className="w-10 h-10 -mt-7 mb-4 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center text-[#facf39] shadow-lg">
<iconify-icon icon="lucide:file-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight group-hover:text-[#facf39] transition-colors font-heading">Invoice Validation</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Ingest supplier contracts and invoices to ensure you only pay exactly what you owe.</p>
</div>
</div>

<div className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300">
<div className="relative h-48 w-full overflow-hidden">
<div className="absolute inset-0 bg-[#facf39]/10 mix-blend-overlay z-10"></div>
<img alt="Order Flow" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
<span className="absolute top-4 right-5 text-4xl font-bold text-white/5 font-heading">06</span>
</div>
<div className="p-8 pt-2 relative z-20">
<div className="w-10 h-10 -mt-7 mb-4 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center text-[#facf39] shadow-lg">
<iconify-icon icon="lucide:workflow" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight group-hover:text-[#facf39] transition-colors font-heading">Agentic OrderFlow</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Create ERP orders from any unstructured channel: email, voicemail, or text.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#050505] py-24 px-6 relative">
<div className="max-w-4xl mx-auto text-center">
<div className="mb-8 flex justify-center">
<iconify-icon className="text-[#facf39]" icon="lucide:quote" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="md:text-4xl leading-tight text-2xl font-medium text-white tracking-tight mb-10 font-heading">
                "The Liquidity Lab team are at the forefront of financial innovation. <br className="hidden md:block"/>
                No one knows how to implement AI in this space like them."
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">RC</div>
<div className="text-left">
<div className="text-sm font-semibold text-white">Raphaël Caruso</div>
<div className="text-xs text-neutral-400">GM, NEAT Protect</div>
</div>
</div>
</div>
</section>

<section className="bg-[#080808] py-24 px-6 relative" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-4xl font-medium text-white tracking-tight mb-6 font-heading">
                    Reimagine your trade cycle.
                </h2>
<p className="text-neutral-400 max-w-md mb-8 font-light text-lg">
                    Schedule a free consultation to identify opportunities to transform your AP/AR processes with AI.
                </p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-[#facf39]" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
<span>Comprehensive Process Audit</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-[#facf39]" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
<span>Custom ROI Projection</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-[#facf39]" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
<span>Technology Stack Assessment</span>
</div>
</div>
</div>

<div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#facf39]/50 to-transparent"></div>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1">First Name</label>
<input className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#facf39]/50 transition-colors placeholder:text-neutral-600" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1">Last Name</label>
<input className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#facf39]/50 transition-colors placeholder:text-neutral-600" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1">Work Email</label>
<input className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#facf39]/50 transition-colors placeholder:text-neutral-600" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1">Company Website</label>
<input className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#facf39]/50 transition-colors placeholder:text-neutral-600" placeholder="company.com" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1">Challenge</label>
<textarea className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#facf39]/50 transition-colors resize-none placeholder:text-neutral-600" placeholder="Describe your current bottleneck..." rows="3"></textarea>
</div>
<button className="w-full py-3.5 rounded-lg bg-[#facf39] hover:bg-[#ffe066] text-black text-sm font-semibold tracking-tight transition-colors shadow-lg shadow-[#facf39]/10" type="button">
                        Request Consultation
                    </button>
</form>
</div>
</div>
</section>

<div className="w-full border-t border-white/5 bg-[#050505] relative z-20 py-12">
<p className="text-[10px] uppercase text-neutral-500 tracking-widest font-mono text-center mb-8">Building on modern infrastructure</p>
<div className="flex flex-wrap gap-10 md:gap-16 justify-center items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<iconify-icon className="text-white hover:text-[#c74634] transition-colors" icon="simple-icons:oracle" width="24"></iconify-icon>
<iconify-icon className="text-white hover:text-[#0FAAFF] transition-colors" icon="simple-icons:sap" width="32"></iconify-icon>
<iconify-icon className="text-white hover:text-[#00A1E0] transition-colors" icon="simple-icons:salesforce" width="32"></iconify-icon>
<span className="text-xl font-bold font-heading text-white tracking-tight">Upflow</span>
<iconify-icon className="text-white hover:text-[#635BFF] transition-colors" icon="simple-icons:stripe" width="32"></iconify-icon>
<iconify-icon className="text-white hover:text-white transition-colors" icon="simple-icons:openai" width="24"></iconify-icon>
</div>
</div>

<footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-1 mb-4 group" href="#">
<span className="text-lg font-semibold tracking-tighter text-white font-heading">
                            LIQUIDITY<span className="text-[#facf39]">LAB</span>
</span>
</a>
<p className="text-xs text-neutral-400 leading-relaxed mb-6 max-w-xs font-light">
                        Advising modern enterprises on AI-driven financial operations. Restore the flow with intelligent AP/AR automation.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:linkedin" width="16"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:x" width="16"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Solutions</h4>
<ul className="space-y-2 text-xs text-neutral-400">
<li><a className="hover:text-[#facf39] transition-colors" href="#">Credit Automation</a></li>
<li><a className="hover:text-[#facf39] transition-colors" href="#">Fraud Detection</a></li>
<li><a className="hover:text-[#facf39] transition-colors" href="#">AR Collections</a></li>
<li><a className="hover:text-[#facf39] transition-colors" href="#">Invoice Processing</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-2 text-xs text-neutral-400">
<li><a className="hover:text-[#facf39] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#facf39] transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-[#facf39] transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-neutral-500">
<p>© 2025 Liquidity Lab. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
<span>Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
