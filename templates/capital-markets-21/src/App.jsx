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
      

<nav className="fixed w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-white text-xl font-medium tracking-tighter" href="#">o11</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#platform">Platform</a>
<a className="hover:text-white transition-colors" href="#integration">Integration</a>
<a className="hover:text-white transition-colors" href="#security">Security</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#">
                    Request Access
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 grid-bg z-0 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8 animate-fade-in">
<span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
                Now available for Early Access
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 max-w-5xl leading-[1.1]">
                Bulge bracket speed.<br/>
<span className="text-slate-500">Boutique precision.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 font-light leading-relaxed">
                o11 transforms your documents and models into a dynamic knowledge layer. Seamlessly integrated into Microsoft 365 for deliverable-ready precision.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group">
                    Start deploying
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3 glass text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all">
                    View documentation
                </button>
</div>

<div className="mt-20 w-full max-w-5xl glow rounded-xl border border-white/10 bg-slate-950/50 backdrop-blur-sm overflow-hidden shadow-2xl">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30"></div>
</div>
<div className="mx-auto text-xs font-mono text-slate-500">o11_model_v4.xlsx — Connected</div>
</div>
<div className="grid grid-cols-12 h-[400px] md:h-[500px]">

<div className="hidden md:block col-span-3 border-r border-white/10 bg-black/20 p-4">
<div className="text-xs font-medium text-slate-500 mb-4 uppercase tracking-widest">Context Sources</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-2 rounded border border-white/5">
<span className="iconify text-indigo-400" data-icon="lucide:file-spreadsheet"></span>
<span>Q3 Financials.xlsx</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-400 hover:text-slate-300 p-2 rounded transition-colors">
<span className="iconify" data-icon="lucide:file-text"></span>
<span>Pitch Deck V2.pptx</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-400 hover:text-slate-300 p-2 rounded transition-colors">
<span className="iconify" data-icon="lucide:database"></span>
<span>CapIQ Live Feed</span>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-9 p-8 relative">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent"></div>
<div className="relative z-10 space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
<span className="iconify" data-icon="lucide:sparkles" data-width="16"></span>
</div>
<div className="flex-1 space-y-2">
<p className="text-sm text-slate-300">Based on the sensitivity analysis in <span className="text-white border-b border-indigo-500/50">Sheet 3</span>, an EBITDA margin expansion of 200bps yields a valuation uplift of 1.4x.</p>
<div className="flex gap-2 mt-2">
<button className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded text-slate-300 transition-colors">Insert to Deck</button>
<button className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded text-slate-300 transition-colors">Update Model</button>
</div>
</div>
</div>
<div className="h-px w-full bg-white/5"></div>
<div className="grid grid-cols-3 gap-4">
<div className="p-4 rounded bg-white/5 border border-white/10">
<div className="text-xs text-slate-500 mb-1">Base Case</div>
<div className="text-xl text-white font-medium tracking-tight">$450.2M</div>
</div>
<div className="p-4 rounded bg-indigo-500/10 border border-indigo-500/20">
<div className="text-xs text-indigo-300 mb-1">Upside Case</div>
<div className="text-xl text-white font-medium tracking-tight">$512.8M</div>
</div>
<div className="p-4 rounded bg-white/5 border border-white/10">
<div className="text-xs text-slate-500 mb-1">Downside Case</div>
<div className="text-xl text-white font-medium tracking-tight">$380.5M</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-slate-500 mb-8 font-medium">TRUSTED BY FORWARD-THINKING FIRMS</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><span className="iconify" data-icon="lucide:hexagon"></span> ACME CAPITAL</span>
<span className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><span className="iconify" data-icon="lucide:triangle"></span> VENTURE</span>
<span className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><span className="iconify" data-icon="lucide:circle"></span> HORIZON</span>
<span className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><span className="iconify" data-icon="lucide:square"></span> ATLAS</span>
</div>
</div>
</section>

<section className="py-24 relative" id="platform">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">The operating system for deal flow.</h2>
<p className="text-lg text-slate-400 max-w-2xl font-light">Eliminate version control chaos and manual data entry. o11 creates a single source of truth that synchronizes across your entire workflow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass p-8 rounded-2xl flex flex-col h-full group hover:border-white/20 transition-all">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="24"></span>
</div>
<h3 className="text-xl text-white font-medium mb-3">Context-Aware Research</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 flex-1">Instantly query across thousands of internal documents, CIMs, and market reports. Extract key data points directly into your analysis without Ctrl+F.</p>
<div className="w-full h-32 rounded-lg bg-black/40 border border-white/5 overflow-hidden relative">

<div className="absolute top-4 left-4 right-4 space-y-2">
<div className="h-2 w-3/4 bg-white/20 rounded"></div>
<div className="h-2 w-1/2 bg-white/10 rounded"></div>
<div className="h-2 w-2/3 bg-indigo-500/40 rounded"></div>
</div>
</div>
</div>

<div className="glass p-8 rounded-2xl flex flex-col h-full group hover:border-white/20 transition-all">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:table-2" data-width="24"></span>
</div>
<h3 className="text-xl text-white font-medium mb-3">Dynamic Modeling</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 flex-1">Excel models that speak. Link cells to source documents and automate sensitivity updates. Never lose the audit trail of a number again.</p>
<div className="w-full h-32 rounded-lg bg-black/40 border border-white/5 overflow-hidden relative flex items-center justify-center">
<div className="grid grid-cols-3 gap-px bg-white/10 p-4 w-full">
<div className="bg-slate-900 p-2 text-[10px] text-center text-slate-400">Rev</div>
<div className="bg-slate-900 p-2 text-[10px] text-center text-indigo-400 font-mono">102%</div>
<div className="bg-slate-900 p-2 text-[10px] text-center text-white font-mono">Link</div>
</div>
</div>
</div>

<div className="glass p-8 rounded-2xl flex flex-col h-full group hover:border-white/20 transition-all">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:presentation" data-width="24"></span>
</div>
<h3 className="text-xl text-white font-medium mb-3">Client-Ready Deliverables</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 flex-1">Generate polished PowerPoint decks and Word memos populated with live data. Formatting is automatic, accurate, and on-brand.</p>
<div className="w-full h-32 rounded-lg bg-black/40 border border-white/5 overflow-hidden relative">
<div className="absolute inset-2 border border-dashed border-white/10 rounded flex items-center justify-center">
<span className="text-xs text-slate-600">Generating Deck...</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-black to-slate-950/50" id="integration">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="text-indigo-400 text-sm font-medium mb-4 tracking-wide uppercase">Native Integration</div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Works where you work.</h2>
<p className="text-lg text-slate-400 font-light mb-8">
                        No new apps to learn. o11 lives inside the Microsoft 365 sidebar, connecting your workflow without breaking your stride.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
<span className="iconify text-blue-400" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Excel Add-in</h4>
<p className="text-sm text-slate-500">Pull data from PDFs directly into cells with source citations.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
<span className="iconify text-blue-400" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">PowerPoint Automation</h4>
<p className="text-sm text-slate-500">Update charts and tables across 50 slides in one click.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
<span className="iconify text-blue-400" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Outlook Intelligence</h4>
<p className="text-sm text-slate-500">Draft responses to client queries using data from your models.</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-indigo-500/10 blur-[80px] rounded-full"></div>
<div className="relative glass rounded-xl border border-white/10 p-1">
<div className="bg-black rounded-lg overflow-hidden">

<div className="bg-[#1e1e1e] px-4 py-2 flex items-center gap-4 border-b border-white/5">
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
<div className="h-4 w-32 bg-white/10 rounded"></div>
</div>

<div className="p-6 flex gap-6">
<div className="flex-1 space-y-3">
<div className="h-4 w-3/4 bg-white/10 rounded"></div>
<div className="h-4 w-full bg-white/5 rounded"></div>
<div className="h-4 w-5/6 bg-white/5 rounded"></div>
<div className="mt-8 grid grid-cols-3 gap-2">
<div className="h-12 bg-green-500/10 border border-green-500/20 rounded"></div>
<div className="h-12 bg-white/5 rounded"></div>
<div className="h-12 bg-white/5 rounded"></div>
</div>
</div>

<div className="w-1/3 bg-[#1e1e1e] border-l border-white/10 -my-6 -mr-6 p-4 border-l border-indigo-500/50 relative">
<div className="absolute -left-3 top-10 bg-indigo-500 text-white text-[10px] px-2 py-0.5 rounded-full">o11</div>
<div className="space-y-3 mt-4">
<div className="h-2 w-1/2 bg-white/20 rounded"></div>
<div className="h-20 bg-indigo-500/10 border border-indigo-500/20 rounded p-2">
<div className="h-2 w-3/4 bg-indigo-400/20 rounded mb-2"></div>
<div className="h-1.5 w-full bg-indigo-400/10 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="iconify text-indigo-400 mx-auto mb-8" data-icon="lucide:quote" data-width="32"></span>
<h3 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-8">
                "o11 has reduced our pitch deck creation time by 60%. It’s not just faster; the data integrity is automatic. It allows a mid-market firm like ours to punch well above our weight."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="h-10 w-10 bg-slate-700 rounded-full overflow-hidden">

</div>
<div className="text-left">
<div className="text-white text-sm font-medium">Jonathan S.</div>
<div className="text-slate-500 text-xs">Managing Director, Horizon Partners</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-900/10"></div>
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">Ready to upgrade your workflow?</h2>
<p className="text-lg text-slate-400 mb-10 font-light">Join the waiting list for early access. Onboarding new firms weekly.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm" placeholder="work@company.com" type="email"/>
<button className="bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-slate-200 transition-colors text-sm" type="button">
                    Get Access
                </button>
</form>
<p className="text-xs text-slate-600 mt-4">SOC2 Type II Compliant. Enterprise ready.</p>
</div>
</section>

<footer className="bg-black py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<span className="text-white text-lg font-medium tracking-tighter">o11</span>
<span className="text-slate-600 text-sm">© 2024</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Security</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
