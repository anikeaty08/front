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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-2 h-2 bg-white rounded-full"></div>
                VELORA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-white hover:text-zinc-300 transition-colors" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded hover:bg-zinc-200 transition-colors" href="#">
                    Book Audit
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 border-b border-white/5 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0 opacity-50"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Accepting new enterprise partners for Q4
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                The operating system for<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">your future workforce.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                We build bespoke autonomous agents that handle your complex workflows. Reduce operational overhead by 60% while scaling output 10x.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group" href="#">
                    Start Automating
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="w-full md:w-auto px-6 py-3 border border-white/10 text-zinc-300 text-sm font-medium rounded hover:bg-white/5 transition-all flex items-center justify-center gap-2" href="#">
<iconify-icon icon="lucide:play-circle" width="16"></iconify-icon>
                    View Case Studies
                </a>
</div>
</div>
</section>

<section className="py-12 border-b border-white/5 bg-[#080808]">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs font-medium uppercase tracking-widest text-zinc-600 mb-8">Trusted by forward-thinking teams</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale items-center justify-items-center">

<div className="flex items-center gap-2 text-lg font-semibold tracking-tight"><iconify-icon icon="lucide:hexagon" width="20"></iconify-icon> ACME LABS</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight"><iconify-icon icon="lucide:triangle" width="20"></iconify-icon> Pexel</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight"><iconify-icon icon="lucide:circle" width="20"></iconify-icon> OMEGA</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight"><iconify-icon icon="lucide:square" width="20"></iconify-icon> Stark Ind</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5" id="solutions">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-3">Intelligent Solutions</h2>
<p className="text-zinc-400 max-w-md">We don't just wrap ChatGPT. We engineer full-stack autonomous systems integrated into your existing infrastructure.</p>
</div>
<a className="text-sm text-white hover:text-zinc-300 flex items-center gap-2" href="#">
                    View all capabilities <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-6 rounded-xl bg-zinc-900/30 border border-white/10 hover:border-white/20 transition-all">
<div className="h-10 w-10 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:message-square-dashed" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Support Autopilot</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">
                        Context-aware agents that resolve 80% of tier-1 tickets instantly. Integrates with Zendesk, Intercom, and Slack.
                    </p>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-400">NLP</span>
<span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-400">RAG</span>
</div>
</div>

<div className="group relative p-6 rounded-xl bg-zinc-900/30 border border-white/10 hover:border-white/20 transition-all">
<div className="h-10 w-10 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Outbound Recon</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">
                        Autonomous lead research and qualification. Scrapes data, enriches CRM, and drafts personalized outreach.
                    </p>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-400">Scraping</span>
<span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-400">Enrichment</span>
</div>
</div>

<div className="group relative p-6 rounded-xl bg-zinc-900/30 border border-white/10 hover:border-white/20 transition-all">
<div className="h-10 w-10 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:database" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Data Synthesis</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">
                        Turn unstructured documents into structured databases. Extract insights from PDFs, invoices, and contracts automatically.
                    </p>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-400">OCR</span>
<span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-400">ETL</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]" id="methodology">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Deployment in weeks, not months.</h2>
<p className="text-zinc-400">Our agile methodology ensures rapid value realization. We audit, build, and iterate based on real-world performance.</p>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/20 bg-zinc-900 text-white flex items-center justify-center text-xs font-medium">1</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-6">
<h4 className="text-white font-medium mb-1">Architecture Audit</h4>
<p className="text-sm text-zinc-500">We analyze your current workflow bottlenecks and data availability.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/20 bg-zinc-900 text-white flex items-center justify-center text-xs font-medium">2</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-6">
<h4 className="text-white font-medium mb-1">Agent Development</h4>
<p className="text-sm text-zinc-500">Building custom models and logic chains using LangChain and proprietary tools.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/20 bg-zinc-900 text-white flex items-center justify-center text-xs font-medium">3</div>
</div>
<div>
<h4 className="text-white font-medium mb-1">Integration &amp; Handoff</h4>
<p className="text-sm text-zinc-500">Seamless deployment into your environment with full documentation.</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/20 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<h3 className="text-white font-medium mb-6 flex items-center gap-2">
<iconify-icon icon="lucide:calculator" width="16"></iconify-icon>
                        Efficiency Projection
                    </h3>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400">Manual Hours / Week</span>
<span className="text-white font-mono">120 hrs</span>
</div>
<input max="200" min="0" type="range" value="120"/>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400">Hourly Cost Avg.</span>
<span className="text-white font-mono">$45/hr</span>
</div>
<input max="100" min="0" type="range" value="45"/>
</div>
<div className="pt-6 border-t border-white/10 mt-6">
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded bg-zinc-900 border border-white/5">
<p className="text-xs text-zinc-500 mb-1">Current Monthly Cost</p>
<p className="text-xl font-medium text-white tracking-tight">$21,600</p>
</div>
<div className="p-4 rounded bg-white/5 border border-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
<p className="text-xs text-emerald-400 mb-1">With Velora AI</p>
<p className="text-xl font-medium text-white tracking-tight">$4,200</p>
</div>
</div>
<p className="text-xs text-zinc-600 mt-4 text-center">*Estimated savings based on typical implementation.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-[#050505] to-[#050505] opacity-50"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to scale without headcount?</h2>
<p className="text-zinc-400 text-lg mb-10 font-light">Join the top 1% of efficient companies leveraging custom AI infrastructure.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="bg-zinc-900/50 border border-white/10 text-white px-4 py-3 rounded-md text-sm w-full focus:outline-none focus:ring-1 focus:ring-white/20 placeholder-zinc-600" placeholder="work@email.com" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap" type="button">
                    Book Discovery
                </button>
</form>
<p className="text-xs text-zinc-600 mt-6">No commitment required. 15-minute intro call.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<div className="w-2 h-2 bg-white rounded-full"></div>
                        VELORA
                    </a>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Building the autonomous enterprise.<br/>
                        San Francisco, CA.
                    </p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Agents</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex justify-between items-center pt-8 border-t border-white/5">
<p className="text-xs text-zinc-600">© 2024 Velora Automation Inc.</p>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-white" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
