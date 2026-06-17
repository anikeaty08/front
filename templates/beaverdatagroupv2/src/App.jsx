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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#fff7ed',
100: '#ffedd5',
500: '#f97316', // Orange for Industrial/Beaver
600: '#ea580c',
900: '#7c2d12',
},
tech: {
500: '#0ea5e9', // Sky blue for Data
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid-pattern opacity-[0.07] grid-bg"></div>
<div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] bg-brand-600/10"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-500/10 rounded-full blur-[120px]"></div>
</div>

<header className="fixed top-0 w-full z-50 border-b backdrop-blur-xl border-white/5 bg-neutral-950/80">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-brand-500 flex items-center justify-center to-amber-600 text-white">
<iconify-icon className="" icon="solar:layers-minimalistic-bold" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white">Beaver Data Group</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors hover:text-white" href="#services">Services</a>
<a className="text-sm font-medium transition-colors hover:text-white" href="#platform">Platform</a>
<a className="text-sm font-medium transition-colors hover:text-white" href="#use-cases">Use Cases</a>
<a className="text-sm font-medium transition-colors hover:text-white" href="#how-we-work">Approach</a>
<a className="text-sm font-medium transition-colors hover:text-white" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold border rounded-lg transition-all text-white bg-white/5 hover:bg-white/10 border-white/10" href="#contact">
                    Book Discovery
                </a>
</div>
</div>
</header>

<section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
<div className="md:px-6 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/10 text-brand-500 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                    Industrial Data &amp; AI Transformation 2026
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
                    Turning Complex Operations <br/>
                    into <span className="gradient-text">Measurable Value</span>
</h1>
<p className="text-lg md:text-xl max-w-2xl mb-10 font-light text-slate-400">
                    We bridge the gap between factory floor (OT) and digital strategy (IT). Empowering organizations to make data-driven decisions with real ROI—not just POCs.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold bg-gradient-to-r rounded-lg hover:opacity-90 transition-all shadow-lg text-white from-brand-600 to-amber-600 shadow-brand-900/20" href="#contact">
                        Book a Discovery Call
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium border rounded-lg transition-all text-white bg-white/5 border-white/10 hover:bg-white/10" href="#contact">
                        Request Assessment
                    </a>
</div>
</div>

<div className="relative w-full max-w-5xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-b to-transparent rounded-xl blur-sm from-white/10"></div>
<div className="relative glass-panel rounded-xl overflow-hidden shadow-2xl">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-slate-500 font-mono">Beaver_AI_Factory_v2.0.exe</div>
</div>

<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-neutral-900/80">

<div className="border rounded-lg p-4 border-white/10 bg-black/20">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-white">Production Lines</span>
<iconify-icon className="text-slate-500" icon="solar:list-linear"></iconify-icon>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs p-2 rounded border-l-2 border-green-500 bg-white/5">
<span className="text-white">Line A - Stamping</span>
<span className="text-green-400">98% OEE</span>
</div>
<div className="flex items-center justify-between text-xs p-2 rounded border-l-2 border-yellow-500 bg-white/5">
<span className="text-white">Line B - Assembly</span>
<span className="text-yellow-400">Warning</span>
</div>
<div className="flex items-center justify-between text-xs p-2 rounded border-l-2 border-green-500 bg-white/5">
<span className="text-white">Line C - Painting</span>
<span className="text-green-400">99% OEE</span>
</div>
</div>
</div>

<div className="md:col-span-2 border rounded-lg p-4 relative overflow-hidden border-white/10 bg-black/20">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-white">WatchDog Analyzer: Live Feed</span>
<span className="text-xs text-brand-500 flex items-center gap-1"><span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span> Processing</span>
</div>

<div className="h-32 flex items-end gap-1 mb-4">
<div className="w-full h-1/2 rounded-t animate-pulse bg-white/5"></div>
<div className="w-full bg-brand-500 h-3/4 rounded-t opacity-80"></div>
<div className="w-full h-2/3 rounded-t bg-white/5"></div>
<div className="w-full h-1/3 rounded-t bg-white/5"></div>
<div className="w-full h-full rounded-t opacity-40 bg-white/5"></div>
<div className="w-full h-3/4 rounded-t bg-white/5"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded p-3 bg-white/5">
<div className="text-[10px] text-slate-500 mb-1">PREDICTIVE MAINT.</div>
<div className="text-lg font-semibold text-white">No Faults</div>
</div>
<div className="rounded p-3 bg-white/5">
<div className="text-[10px] text-slate-500 mb-1">ENERGY SAVED</div>
<div className="text-lg font-semibold text-green-400">-12.4%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y relative z-10 bg-neutral-900/50 border-white/5">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">The Industrial Data Paradox</h2>
<p className="max-w-3xl text-slate-400">Manufacturing sites generate terabytes of Level 2 / IoT data daily. Yet, 80% remains siloed and unstructured. In a market squeezed by oversupply and high input costs, efficiency is survival.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r via-brand-500/50 z-0 from-white/10 to-white/10"></div>

<div className="relative z-10 border p-6 rounded-xl bg-neutral-950 border-white/10">
<div className="w-12 h-12 border rounded-lg flex items-center justify-center mb-4 shadow-lg bg-neutral-900 border-white/10 text-slate-400">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-white">1. The Bottleneck</h3>
<p className="text-sm leading-relaxed text-slate-400">
                        Data is trapped in OT silos. Unused for decision-making. High business risk due to lack of visibility.
                    </p>
</div>

<div className="relative z-10 border border-brand-500/30 p-6 rounded-xl shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)] bg-neutral-950">
<div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4 shadow-lg text-white">
<iconify-icon icon="solar:tuning-square-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-white">2. The Lever</h3>
<p className="text-sm leading-relaxed text-slate-300">
                        IT/OT Convergence. Bridging the factory floor with cloud strategy. Moving from isolated POCs to an industrialized "AI Factory".
                    </p>
</div>

<div className="relative z-10 border p-6 rounded-xl bg-neutral-950 border-white/10">
<div className="w-12 h-12 border rounded-lg flex items-center justify-center mb-4 shadow-lg bg-neutral-900 border-white/10 text-green-400">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-white">3. Target State</h3>
<p className="text-sm leading-relaxed text-slate-400">
                        Automated intelligence maximizing Yield, Energy, and Logistics. Reduced working capital and measurable ROI.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="services">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">Strategic Pillars of Transformation</h2>
<p className="text-lg text-slate-400">
                        Digital and AI solutions are no longer optional but essential for sustainable growth. We address the 75% of manufacturers still stuck at individual use-cases.
                    </p>
</div>
<div className="text-right hidden md:block">
<div className="text-sm font-medium text-brand-500 uppercase tracking-wider mb-1">Beaver Advantage</div>
<div className="font-medium text-white">Dual-Shore Model</div>
<div className="text-xs text-slate-500">Europe Strategy + Morocco Delivery</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="glass p-8 rounded-2xl hover:bg-white/[0.04] transition-colors group">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-blue-400">
<iconify-icon icon="solar:compass-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">Strategy &amp; Transformation</h3>
<p className="text-sm mb-6 text-slate-400">
                        Roadmap design, use case prioritization, and business alignment to ensure a clear path to ROI.
                    </p>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Why AI Now? Response to oversupply &amp; costs</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Reskill/Upskill People &amp; Roles</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Redesign Digital Processes</li>
</ul>
</div>

<div className="glass p-8 rounded-2xl hover:bg-white/[0.04] transition-colors group">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-purple-400">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">Foundations &amp; Governance</h3>
<p className="text-sm mb-6 text-slate-400">
                        Establishing a "Single Source of Truth" via Master Data Management (MDM) and Digital Passports.
                    </p>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Data Integrity Score &amp; Lineage</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> &gt;40% reduction in ad-hoc requests</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Real-time verified CO2 &amp; Quality data</li>
</ul>
</div>

<div className="glass p-8 rounded-2xl hover:bg-white/[0.04] transition-colors group">
<div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-cyan-400">
<iconify-icon icon="solar:cloud-storage-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">Data Platforms &amp; Cloud</h3>
<p className="text-sm mb-6 text-slate-400">
                        Hybrid &amp; Unified architecture. Deploying Unified Data Models (UDM) to standardize semantics across domains.
                    </p>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 50% reduction in IT maintenance</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> &lt;4 weeks scalability speed</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 99.9% uptime for Level 2 SCADA integration</li>
</ul>
</div>

<div className="glass p-8 rounded-2xl hover:bg-white/[0.04] transition-colors group border-brand-500/20">
<div className="w-12 h-12 rounded-lg bg-brand-500/10 text-brand-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">AI &amp; GenAI Factory</h3>
<p className="text-sm mb-6 text-slate-400">
                        From isolated experiments to standardized MLOps. Centralized hub for retraining based on feedback loops.
                    </p>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> €5M yearly benefit per major use case</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 30% reduction logistics movements</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 12–24 weeks discovery to industrialization</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-y bg-white/[0.02] border-white/5">
<div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-4xl font-bold mb-1 tracking-tight text-white">50%</div>
<div className="text-xs uppercase tracking-wider text-slate-400">Less IT Maintenance</div>
</div>
<div>
<div className="text-4xl font-bold mb-1 tracking-tight text-white">&lt;4 wks</div>
<div className="text-xs uppercase tracking-wider text-slate-400">Scalability Speed</div>
</div>
<div>
<div className="text-4xl font-bold mb-1 tracking-tight text-white">99.9%</div>
<div className="text-xs uppercase tracking-wider text-slate-400">Architecture Uptime</div>
</div>
<div>
<div className="text-4xl font-bold mb-1 tracking-tight text-white">€5M</div>
<div className="text-xs uppercase tracking-wider text-slate-400">Benefit / Use Case</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="platform">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">Modern Industrial Data Platform</h2>
<p className="text-slate-400">Breaking silos. Enabled by just 1 FTE.</p>
</div>
<div className="relative grid md:grid-cols-3 gap-6 items-center">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px -z-10 transform -translate-y-1/2 bg-white/10"></div>
<div className="hidden md:block absolute top-1/2 left-1/3 w-2 h-2 bg-brand-500 rounded-full -translate-y-1/2 -ml-1"></div>
<div className="hidden md:block absolute top-1/2 left-2/3 w-2 h-2 bg-brand-500 rounded-full -translate-y-1/2 -ml-1"></div>

<div className="border p-6 rounded-xl text-center relative hover:border-brand-500/50 transition-colors bg-neutral-900 border-white/10">
<div className="inline-flex p-3 rounded-full border mb-4 bg-white/5 border-white/10">
<iconify-icon className="text-slate-300" icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-white">1. Source Integration</h3>
<p className="text-xs text-slate-400">
                        Ingestion from ERP (SAP), SCADA/MES (Level 2), and IoT sensors. Breaking IT/OT silos.
                    </p>
<span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-[10px] px-2 py-0.5 rounded border bg-neutral-800 text-slate-400 border-white/10">Hybrid Input</span>
</div>

<div className="border border-brand-500 p-8 rounded-xl text-center relative shadow-2xl scale-105 z-10 bg-neutral-900 shadow-brand-900/10">
<div className="inline-flex p-3 rounded-full mb-4 bg-brand-600 text-white">
<iconify-icon icon="solar:cpu-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-white">2. The Core Foundation</h3>
<p className="text-sm text-slate-300">
                        Central "Feed Data Platform". Transversal Unified Data Model (UDM) for real-time access.
                    </p>
<span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-[10px] px-2 py-0.5 rounded border border-brand-500 bg-brand-900 text-brand-100">Cloud/Edge</span>
</div>

<div className="border p-6 rounded-xl text-center relative hover:border-brand-500/50 transition-colors bg-neutral-900 border-white/10">
<div className="inline-flex p-3 rounded-full border mb-4 bg-white/5 border-white/10">
<iconify-icon className="text-slate-300" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-white">3. Scalability</h3>
<p className="text-xs text-slate-400">
                        Move from on-prem constraints to a scalable "Factory Model" enabled by offshore delivery.
                    </p>
<span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-[10px] px-2 py-0.5 rounded border bg-neutral-800 text-slate-400 border-white/10">Factory Model</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y relative z-10 border-white/5" id="use-cases">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center text-white">High-ROI Use Cases</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass p-6 rounded-xl flex flex-col">
<div className="mb-4 flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Production Quality</span>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Digital Passport</h3>
<p className="text-sm mb-4 flex-grow text-slate-400">End-to-end traceability for coil production, ensuring full lineage.</p>
<div className="pt-4 border-t grid grid-cols-2 gap-4 border-white/10">
<div>
<div className="text-xs text-slate-500">Impact</div>
<div className="text-sm font-medium text-green-400">€2M/year</div>
</div>
<div>
<div className="text-xs text-slate-500">Timeline</div>
<div className="text-sm font-medium text-white">6 Months</div>
</div>
</div>
</div>

<div className="glass p-6 rounded-xl flex flex-col">
<div className="mb-4 flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:eye-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Computer Vision</span>
</div>
<h3 className="text-lg font-medium mb-2 text-white">WatchDog Analyzer</h3>
<p className="text-sm mb-4 flex-grow text-slate-400">Automated coil quality analysis using ML. Cost: 2 FTE.</p>
<div className="pt-4 border-t grid grid-cols-2 gap-4 border-white/10">
<div>
<div className="text-xs text-slate-500">Impact</div>
<div className="text-sm font-medium text-green-400">€5M/year</div>
</div>
<div>
<div className="text-xs text-slate-500">Timeline</div>
<div className="text-sm font-medium text-white">Continuous</div>
</div>
</div>
</div>

<div className="glass p-6 rounded-xl flex flex-col">
<div className="mb-4 flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:leaf-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Sustainable Ops</span>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Carbon Optimization</h3>
<p className="text-sm mb-4 flex-grow text-slate-400">AI model optimization to reduce energy consumption during production peaks.</p>
<div className="pt-4 border-t grid grid-cols-2 gap-4 border-white/10">
<div>
<div className="text-xs text-slate-500">Energy</div>
<div className="text-sm font-medium text-green-400">-5% Reduction</div>
</div>
<div>
<div className="text-xs text-slate-500">Timeline</div>
<div className="text-sm font-medium text-white">6 Months</div>
</div>
</div>
</div>

<div className="glass p-6 rounded-xl flex flex-col">
<div className="mb-4 flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:box-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Supply Chain</span>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Logistics (MIP)</h3>
<p className="text-sm mb-4 flex-grow text-slate-400">Mixed integer programming to optimize movements.</p>
<div className="pt-4 border-t grid grid-cols-2 gap-4 border-white/10">
<div>
<div className="text-xs text-slate-500">Movements</div>
<div className="text-sm font-medium text-green-400">-30% Reduction</div>
</div>
<div>
<div className="text-xs text-slate-500">Results</div>
<div className="text-sm font-medium text-white">Optimized</div>
</div>
</div>
</div>

<div className="glass p-6 rounded-xl flex flex-col">
<div className="mb-4 flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:sitemap-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Infrastructure</span>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Feed Data Platform</h3>
<p className="text-sm mb-4 flex-grow text-slate-400">Centralizing all Level 2 production data for real-time access. Enabled by 1 FTE.</p>
<div className="pt-4 border-t grid grid-cols-2 gap-4 border-white/10">
<div>
<div className="text-xs text-slate-500">Impact</div>
<div className="text-sm font-medium text-green-400">€5M/year</div>
</div>
<div>
<div className="text-xs text-slate-500">Status</div>
<div className="text-sm font-medium text-white">Live</div>
</div>
</div>
</div>

<div className="glass p-6 rounded-xl flex flex-col">
<div className="mb-4 flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:database-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Data Mgmt</span>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Unified Data Model</h3>
<p className="text-sm mb-4 flex-grow text-slate-400">"Single Point of Truth" system for SCM data across domains.</p>
<div className="pt-4 border-t grid grid-cols-2 gap-4 border-white/10">
<div>
<div className="text-xs text-slate-500">IT Maint.</div>
<div className="text-sm font-medium text-green-400">-50% Effort</div>
</div>
<div>
<div className="text-xs text-slate-500">Access</div>
<div className="text-sm font-medium text-white">Real-time</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="how-we-work">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-center text-white">Delivery Model</h2>
<div className="space-y-8">

<div className="flex flex-col md:flex-row gap-6 md:gap-12 group">
<div className="md:w-1/4 text-right md:pt-2">
<div className="text-xl font-bold text-white">TO DO</div>
<div className="text-sm text-brand-500 font-medium">Discovery &amp; Assessment</div>
<div className="text-xs text-slate-500 mt-1">2–4 Weeks</div>
</div>
<div className="relative md:w-3/4 border-l pl-8 md:pl-12 pb-8 border-white/10">
<div className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-brand-500 ring-4 ring-neutral-900"></div>
<h3 className="text-lg font-medium mb-2 text-white">Maturity Assessment &amp; Roadmap</h3>
<p className="text-sm max-w-2xl text-slate-400">
                            We assess data maturity and identify high-ROI use cases. We align business goals with a clear ROI path to ensure value generation from day one.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-12 group">
<div className="md:w-1/4 text-right md:pt-2">
<div className="text-xl font-bold text-white">DOING</div>
<div className="text-sm text-brand-500 font-medium">POV &amp; Industrialization</div>
<div className="text-xs text-slate-500 mt-1">6–24 Weeks</div>
</div>
<div className="relative md:w-3/4 border-l pl-8 md:pl-12 pb-8 border-white/10">
<div className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full ring-4 group-hover:bg-brand-500 transition-colors bg-neutral-700 ring-neutral-900"></div>
<h3 className="text-lg font-medium mb-2 text-white">Proof of Value &amp; The Factory Model</h3>
<p className="text-sm max-w-2xl text-slate-400">
                            Rapid implementation of a single use case (POV) to prove viability, followed by deploying the "Factory Model" for scale across the enterprise.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-12 group">
<div className="md:w-1/4 text-right md:pt-2">
<div className="text-xl font-bold text-white">RUN</div>
<div className="text-sm text-brand-500 font-medium">Run &amp; Optimize</div>
<div className="text-xs text-slate-500 mt-1">Continuous</div>
</div>
<div className="relative md:w-3/4 border-l pl-8 md:pl-12 pb-8 border-white/10">
<div className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full ring-4 group-hover:bg-brand-500 transition-colors bg-neutral-700 ring-neutral-900"></div>
<h3 className="text-lg font-medium mb-2 text-white">Managed Services &amp; Scale Up</h3>
<p className="text-sm max-w-2xl text-slate-400">
                            Continuous improvement, feedback loops, and execution of digital initiatives. Delivering results through our Dual-Shore model.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t pt-24 pb-12 relative z-10 bg-neutral-950 border-white/10" id="contact">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="grid md:grid-cols-2 gap-16 mb-24">

<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6 text-white">Let's talk ROI.</h2>
<p className="mb-8 text-slate-400">
                        Ready to establish your Single Source of Truth? Contact our leadership team directly.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded flex items-center justify-center bg-white/5 text-slate-300">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-medium text-white">Reda BOUTAA</div>
<div className="text-xs text-slate-500">CTO — contact@beaverdatagroup.com</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded flex items-center justify-center bg-white/5 text-slate-300">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-medium text-white">Noureddin BENALI</div>
<div className="text-xs text-slate-500">CEO</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded flex items-center justify-center bg-white/5 text-slate-300">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-medium text-white">Atif KASMI</div>
<div className="text-xs text-slate-500">CMO</div>
</div>
</div>
</div>
</div>

<div className="glass p-8 rounded-2xl">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium mb-1 text-slate-400">Name</label>
<input className="w-full border rounded px-3 py-2 text-sm focus:border-brand-500 focus:outline-none transition-colors bg-neutral-900 border-white/10 text-white" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-1 text-slate-400">Email</label>
<input className="w-full border rounded px-3 py-2 text-sm focus:border-brand-500 focus:outline-none transition-colors bg-neutral-900 border-white/10 text-white" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium mb-1 text-slate-400">Company</label>
<input className="w-full border rounded px-3 py-2 text-sm focus:border-brand-500 focus:outline-none transition-colors bg-neutral-900 border-white/10 text-white" placeholder="Company Name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-1 text-slate-400">Role</label>
<input className="w-full border rounded px-3 py-2 text-sm focus:border-brand-500 focus:outline-none transition-colors bg-neutral-900 border-white/10 text-white" placeholder="COO / Plant Manager" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium mb-1 text-slate-400">Topic</label>
<select className="w-full border rounded px-3 py-2 text-sm focus:border-brand-500 focus:outline-none transition-colors bg-neutral-900 border-white/10 text-white">
<option>Discovery Call</option>
<option>Request Assessment</option>
<option>POV Inquiry</option>
<option>Partnership</option>
</select>
</div>
<div>
<label className="block text-xs font-medium mb-1 text-slate-400">Message</label>
<textarea className="w-full border rounded px-3 py-2 text-sm focus:border-brand-500 focus:outline-none transition-colors bg-neutral-900 border-white/10 text-white" placeholder="Tell us about your data maturity..." rows="4"></textarea>
</div>
<button className="w-full font-semibold py-3 rounded-lg transition-colors bg-white text-neutral-950 hover:bg-brand-50 hover:text-brand-600" type="button">
                            Send Message
                        </button>
</form>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 border-white/10">
<div>© 2026 Beaver Data Group. All rights reserved.</div>
<div className="flex gap-6">
<a className="transition-colors hover:text-white" href="#">Privacy Policy</a>
<a className="transition-colors hover:text-white" href="#">Terms of Service</a>
<a className="transition-colors hover:text-white" href="#">www.beaverdatagroup.com</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
