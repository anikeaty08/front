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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-black/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-md">
<iconify-icon icon="solar:drone-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white">ADW 2026</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#agenda">Agenda</a>
<a className="hover:text-white transition-colors" href="#impact">Market Impact</a>
<a className="hover:text-white transition-colors" href="#sponsorship">Sponsorship</a>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2" href="#financials">
                Financial Prospectus
                <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 px-6 border-b border-white/5 overflow-hidden">

<div className="absolute inset-0 z-0">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale contrast-125" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&amp;w=2070">
<source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>

<div className="absolute inset-0 bg-grid opacity-30 mask-image-gradient"></div>

<div className="absolute inset-0 scan-line h-[50vh] pointer-events-none"></div>
</div>

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-glow z-0"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-[10px] tracking-wide uppercase text-indigo-200 mb-8 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                Consortium Initiative • Q1 &amp; August 2026
            </div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1]">
                Securing the <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">African Sky.</span>
</h1>
<p className="max-w-2xl mx-auto text-sm md:text-base text-zinc-400 leading-relaxed font-light mb-10">
                The premier continental initiative. Integrating Agentic AI, counter-UAS frameworks, and regulatory sandboxes to protect critical infrastructure.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-all shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2">
                    Access Prospectus
                    <iconify-icon icon="solar:file-download-linear" width="16"></iconify-icon>
</button>
<button className="w-full md:w-auto px-8 py-3 border border-white/10 text-zinc-300 text-sm font-medium rounded-lg hover:bg-white/5 transition-colors backdrop-blur-sm">
                    View Consortium Partners
                </button>
</div>
</div>
</header>

<section className="relative py-24 px-6 border-b border-white/5 overflow-hidden" id="impact">

<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-indigo-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl flex flex-col justify-between h-48 group hover:-translate-y-1 transition-transform duration-500">
<div className="flex justify-between items-start">
<iconify-icon className="text-zinc-500 group-hover:text-indigo-400 transition-colors" icon="solar:chart-2-linear" width="24"></iconify-icon>
<span className="text-xs text-zinc-500 uppercase tracking-wider">Market Value</span>
</div>
<div>
<span className="text-4xl font-medium tracking-tight text-white block mb-1">$1.77B</span>
<p className="text-xs text-zinc-400">Projected regional value by 2026</p>
</div>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col justify-between h-48 group hover:-translate-y-1 transition-transform duration-500 delay-75">
<div className="flex justify-between items-start">
<iconify-icon className="text-zinc-500 group-hover:text-indigo-400 transition-colors" icon="solar:graph-up-linear" width="24"></iconify-icon>
<span className="text-xs text-zinc-500 uppercase tracking-wider">Growth Rate</span>
</div>
<div>
<span className="text-4xl font-medium tracking-tight text-white block mb-1">35%</span>
<p className="text-xs text-zinc-400">Compound Annual Growth Rate (CAGR)</p>
</div>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col justify-between h-48 group hover:-translate-y-1 transition-transform duration-500 delay-100">
<div className="flex justify-between items-start">
<iconify-icon className="text-zinc-500 group-hover:text-indigo-400 transition-colors" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-xs text-zinc-500 uppercase tracking-wider">Infrastructure</span>
</div>
<div>
<span className="text-4xl font-medium tracking-tight text-white block mb-1">5,000km+</span>
<p className="text-xs text-zinc-400">Pipeline surveillance coverage</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 bg-zinc-900/20 relative">
<div className="max-w-7xl mx-auto">
<div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Strategic Pillars</h2>
<p className="text-zinc-400 max-w-xl text-sm leading-relaxed">
                        Aligned with INTERPOL Drone Expert Forum standards.
                    </p>
</div>
<div className="h-px bg-white/10 flex-1 ml-8 mb-2 hidden md:block"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative overflow-hidden rounded-2xl glass-panel border-0">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
<img alt="Drone surveillance" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 p-8 h-full flex flex-col justify-end min-h-[300px]">
<div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center mb-4">
<iconify-icon className="text-white" icon="solar:eye-scan-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Drone as a Tool</h3>
<p className="text-xs text-zinc-300 leading-relaxed">
                            Industrial surveillance and operational efficiency within energy.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl glass-panel border-0">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
<img alt="Threat monitoring" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 p-8 h-full flex flex-col justify-end min-h-[300px]">
<div className="w-10 h-10 rounded-lg bg-red-500/20 backdrop-blur-md flex items-center justify-center mb-4">
<iconify-icon className="text-red-200" icon="solar:forbidden-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Drone as a Threat</h3>
<p className="text-xs text-zinc-300 leading-relaxed">
                            Counter-drone technologies and asymmetric risk mitigation protocols.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl glass-panel border-0">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
<img alt="Data gathering" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 p-8 h-full flex flex-col justify-end min-h-[300px]">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 backdrop-blur-md flex items-center justify-center mb-4">
<iconify-icon className="text-emerald-200" icon="solar:document-add-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Evidence Gathering</h3>
<p className="text-xs text-zinc-300 leading-relaxed">
                            Regulatory enforcement, compliance auditing, and forensic investigations.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 relative overflow-hidden">

<div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

<div className="lg:w-1/2">
<h3 className="text-2xl font-medium tracking-tight text-white mb-6">Technical Mandates</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                    Strict adherence to safety protocols is mandatory for the "Regulatory Sandbox" and live demonstrations. Early compliance ensures BVLOS authorization.
                </p>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-emerald-400">
<iconify-icon icon="solar:radio-minimalistic-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">Spectrum Compliance</h4>
<p className="text-xs text-zinc-500 mt-1">Designated radio frequencies for Abuja region airspace.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-emerald-400">
<iconify-icon icon="solar:battery-charge-minimalistic-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">Power Safety</h4>
<p className="text-xs text-zinc-500 mt-1">Strict LiPo storage and charging station protocols.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-emerald-400">
<iconify-icon icon="solar:shield-warning-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">BVLOS Insurance</h4>
<p className="text-xs text-zinc-500 mt-1">Mandatory coverage for all Beyond Visual Line of Sight demos.</p>
</div>
</div>
</div>
<div className="mt-10 p-1 rounded-xl bg-gradient-to-r from-indigo-500/20 to-transparent">
<div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between gap-4">
<div className="flex gap-3 items-center">
<iconify-icon className="text-indigo-400" icon="solar:wallet-linear" width="20"></iconify-icon>
<div className="text-xs text-zinc-300">
<span className="block font-medium text-white">Looking for ROI &amp; Financials?</span>
                                 Detailed investment breakdown available.
                             </div>
</div>
<button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-xs text-white transition-colors whitespace-nowrap">
                            View Prospectus
                        </button>
</div>
</div>
</div>

<div className="lg:w-1/2 relative">
<div className="glass-panel p-2 rounded-2xl border border-white/10">
<img alt="Drone assembly" className="rounded-xl opacity-50 grayscale hover:grayscale-0 transition-all duration-700 w-full" src="https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&amp;w=2534&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-8 right-8 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-emerald-500/30 text-[10px] text-emerald-400 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                       Sandbox Active
                   </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5" id="agenda">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
<div className="md:w-1/3">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Virtual Curricula</h2>
<p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    January 19–23, 2026. Transitioning from technical capabilities to ethical strategy.
                </p>
<div className="inline-flex items-center gap-2 text-xs text-indigo-400 font-medium cursor-pointer hover:text-indigo-300 transition-colors">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
                    Sync to Calendar
                </div>
</div>
<div className="md:w-2/3 relative pl-8 border-l border-white/10 space-y-12">

<div className="relative group">
<div className="absolute -left-[37px] top-1 w-4 h-4 bg-black border border-white/20 rounded-full flex items-center justify-center group-hover:border-indigo-500 group-hover:bg-indigo-900/50 transition-colors">
<div className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-indigo-400"></div>
</div>
<span className="text-xs font-mono text-zinc-500 mb-1 block group-hover:text-indigo-400 transition-colors">Day 01</span>
<h3 className="text-lg font-medium text-white mb-2">Software, AI &amp; Capabilities</h3>
<p className="text-sm text-zinc-400">Multi-drone control, mission mapping, and Drone-as-First-Responder (DFR) integration.</p>
</div>

<div className="relative group">
<div className="absolute -left-[37px] top-1 w-4 h-4 bg-black border border-white/20 rounded-full group-hover:border-indigo-500 transition-colors"></div>
<span className="text-xs font-mono text-zinc-500 mb-1 block group-hover:text-indigo-400 transition-colors">Day 02</span>
<h3 className="text-lg font-medium text-white mb-2">Threats &amp; Agentic AI</h3>
<p className="text-sm text-zinc-400">Vulnerabilities in defense; goal-oriented autonomy in hostile environments.</p>
</div>

<div className="relative group">
<div className="absolute -left-[37px] top-1 w-4 h-4 bg-black border border-white/20 rounded-full group-hover:border-indigo-500 transition-colors"></div>
<span className="text-xs font-mono text-zinc-500 mb-1 block group-hover:text-indigo-400 transition-colors">Day 03</span>
<h3 className="text-lg font-medium text-white mb-2">Privacy &amp; Social Impact</h3>
<p className="text-sm text-zinc-400">Ethical frameworks, civil liberties, and the "Deep Blue" project case study.</p>
</div>

<div className="relative group">
<div className="absolute -left-[37px] top-1 w-4 h-4 bg-black border border-white/20 rounded-full group-hover:border-indigo-500 transition-colors"></div>
<span className="text-xs font-mono text-zinc-500 mb-1 block group-hover:text-indigo-400 transition-colors">Day 04</span>
<h3 className="text-lg font-medium text-white mb-2">Global Co-op</h3>
<p className="text-sm text-zinc-400">Real-time collaboration via IORIS/IRIS platforms and mitigation tech.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 relative" id="sponsorship">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-7xl mx-auto text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Sponsorship Framework</h2>
<p className="text-zinc-400 text-sm max-w-2xl mx-auto">Designed for visibility, policy influence, and high-value networking.</p>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-panel p-6 rounded-xl flex flex-col hover:bg-white/5 transition-colors duration-300">
<div className="mb-4">
<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest border border-zinc-700 px-2 py-0.5 rounded">Silver</span>
<h3 className="text-xl font-medium text-white mt-4">Standard</h3>
</div>
<ul className="space-y-3 mb-8 flex-1 border-t border-white/5 pt-4">
<li className="flex gap-2 text-xs text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-read-linear"></iconify-icon> Brand Visibility
                    </li>
<li className="flex gap-2 text-xs text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-read-linear"></iconify-icon> Strategic Booth
                    </li>
<li className="flex gap-2 text-xs text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-read-linear"></iconify-icon> Regional Media
                    </li>
</ul>
<button className="w-full py-2.5 border border-white/10 rounded-lg text-xs font-medium text-zinc-300 hover:bg-white/10 transition">Inquire</button>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col hover:bg-amber-900/5 transition-colors duration-300 border-amber-500/10">
<div className="mb-4">
<span className="text-[10px] font-bold text-amber-500/80 uppercase tracking-widest border border-amber-500/20 px-2 py-0.5 rounded bg-amber-500/5">Gold</span>
<h3 className="text-xl font-medium text-white mt-4">Premium</h3>
</div>
<ul className="space-y-3 mb-8 flex-1 border-t border-white/5 pt-4">
<li className="flex gap-2 text-xs text-zinc-300">
<iconify-icon className="text-amber-500/50" icon="solar:check-read-linear"></iconify-icon> Deal Flow Access
                    </li>
<li className="flex gap-2 text-xs text-zinc-300">
<iconify-icon className="text-amber-500/50" icon="solar:check-read-linear"></iconify-icon> Investment Pitch
                    </li>
<li className="flex gap-2 text-xs text-zinc-300">
<iconify-icon className="text-amber-500/50" icon="solar:check-read-linear"></iconify-icon> Startup Mentorship
                    </li>
</ul>
<button className="w-full py-2.5 border border-amber-500/20 text-amber-100 rounded-lg text-xs font-medium bg-amber-500/5 hover:bg-amber-500/10 transition">Inquire</button>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col hover:bg-white/5 transition-colors duration-300">
<div className="mb-4">
<span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest border border-zinc-500 px-2 py-0.5 rounded">Platinum</span>
<h3 className="text-xl font-medium text-white mt-4">Executive</h3>
</div>
<ul className="space-y-3 mb-8 flex-1 border-t border-white/5 pt-4">
<li className="flex gap-2 text-xs text-zinc-300">
<iconify-icon className="text-zinc-400" icon="solar:check-read-linear"></iconify-icon> Operational Authority
                    </li>
<li className="flex gap-2 text-xs text-zinc-300">
<iconify-icon className="text-zinc-400" icon="solar:check-read-linear"></iconify-icon> Demo Zone Naming
                    </li>
<li className="flex gap-2 text-xs text-zinc-300">
<iconify-icon className="text-zinc-400" icon="solar:check-read-linear"></iconify-icon> VIP Networking
                    </li>
</ul>
<button className="w-full py-2.5 border border-white/10 rounded-lg text-xs font-medium text-zinc-300 hover:bg-white/10 transition">Inquire</button>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col border-indigo-500/30 bg-indigo-900/10 shadow-[0_0_40px_-10px_rgba(99,102,241,0.15)] relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-4 relative z-10">
<span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest border border-indigo-400/30 px-2 py-0.5 rounded bg-indigo-500/20">Diamond</span>
<h3 className="text-xl font-medium text-white mt-4">Summit Host</h3>
</div>
<ul className="space-y-3 mb-8 flex-1 border-t border-white/5 pt-4 relative z-10">
<li className="flex gap-2 text-xs text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Policy Leadership
                    </li>
<li className="flex gap-2 text-xs text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Keynote Address
                    </li>
<li className="flex gap-2 text-xs text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Sandbox Branding
                    </li>
<li className="flex gap-2 text-xs text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Exclusive Access
                    </li>
</ul>
<button className="w-full py-2.5 bg-indigo-600 text-white rounded-lg text-xs font-medium hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/20 relative z-10">Contact for Pricing</button>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-black relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="solar:drone-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white">ADW 2026</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">
                    Organized by the Africa Drone World Consortium led by TAC Africa. Unifying government agencies, private innovators, and global experts.
                </p>
</div>
<div className="grid grid-cols-2 gap-12 text-xs text-zinc-400">
<div>
<h4 className="text-white font-medium mb-3">Consortium</h4>
<ul className="space-y-2">
<li>TAC Africa</li>
<li>SC Aegis Surveillance</li>
<li>Cyber Diplomat LLC</li>
<li>Argus Robotics</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-3">Legal</h4>
<ul className="space-y-2">
<li><a className="hover:text-white" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white" href="#">Terms of Entry</a></li>
<li><a className="hover:text-white" href="#">Sandbox Rules</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center md:text-left text-[10px] text-zinc-600">
            © 2026 Africa Drone &amp; Counter-Drone Summit. All rights reserved.
        </div>
</footer>

    </>
  );
}
