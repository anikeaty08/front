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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-md flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tight text-lg">DOCULENS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#product">Product</a>
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#developers">Developers</a>
<a className="hover:text-white transition-colors" href="#company">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-slate-950 text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-200 transition-colors flex items-center gap-2 group" href="#">
                    Request Demo
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl animate-appear">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    SOC2 Type II Certified
                </div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6" style={{}}>Risk decisions in <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 text-glow">seconds, not days.</span></h1>
<p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                    Convert unstructured financial documents into decision-ready data. Our AI detects fraud, extracts data with 99.9% accuracy, and automates underwriting.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="h-12 px-6 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center justify-center transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]" href="#">
                        Start Processing
                    </a>
<a className="h-12 px-6 rounded-md border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-medium flex items-center justify-center transition-all bg-slate-900/50" href="#">
                        View API Docs
                    </a>
</div>
<div className="mt-12 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-xs font-medium uppercase tracking-widest text-slate-500">Trusted by</div>

<span className="text-lg font-bold tracking-tight text-white">stripe</span>
<span className="text-lg font-bold tracking-tight text-white">mercury</span>
<span className="text-lg font-bold tracking-tight text-white">Brex</span>
<span className="text-lg font-bold tracking-tight text-white">Ramp</span>
</div>
</div>

<div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center animate-appear delay-200">

<div className="relative w-full max-w-md aspect-[4/5] glass-panel rounded-xl overflow-hidden shadow-2xl animate-float">

<div className="h-12 border-b border-slate-700/50 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-auto text-xs text-slate-500 font-mono">analysis_pipeline_v2.py</div>
</div>

<div className="p-8 relative h-full flex flex-col gap-6">

<div className="relative bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:file-text-linear"></iconify-icon>
<span className="text-xs text-slate-300">borrower_bank_stmt.pdf</span>
</div>
<span className="text-[10px] text-slate-500">1.2 MB</span>
</div>

<div className="space-y-2 opacity-50">
<div className="h-2 w-3/4 bg-slate-600 rounded"></div>
<div className="h-2 w-full bg-slate-600 rounded"></div>
<div className="h-2 w-5/6 bg-slate-600 rounded"></div>
<div className="h-2 w-1/2 bg-slate-600 rounded"></div>
</div>

<div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
<div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(96,165,250,0.8)] animate-scan"></div>
</div>
</div>

<div className="flex justify-center h-8 relative">
<div className="w-px h-full bg-slate-700"></div>
<div className="absolute top-1/2 -translate-y-1/2 bg-slate-900 border border-slate-700 rounded-full p-1 z-10">
<iconify-icon className="text-blue-400 animate-pulse" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 bg-slate-950 rounded-lg p-4 border border-blue-500/20 shadow-inner font-mono text-xs overflow-hidden relative">
<div className="absolute top-2 right-2">
<div className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded text-[10px] border border-emerald-400/20">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                                    Verified
                                </div>
</div>
<div className="text-purple-400">const <span className="text-blue-300">analysis</span> = {</div>
<div className="pl-4 text-slate-400">
<span className="text-slate-500">"risk_score":</span> <span className="text-emerald-400">92</span>,<br/>
<span className="text-slate-500">"income_verified":</span> <span className="text-blue-300">true</span>,<br/>
<span className="text-slate-500">"fraud_flags":</span> [],<br/>
<span className="text-slate-500">"monthly_avg":</span> <span className="text-orange-300">12450.00</span>,<br/>
<span className="text-slate-500">"employer":</span> <span className="text-green-300">"Tech Corp Inc"</span>
</div>
<div className="text-purple-400">};</div>
</div>
</div>
</div>

<div className="absolute -right-12 top-1/4 glass-panel p-3 rounded-lg shadow-xl animate-float delay-300 hidden lg:block">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400">Fraud Check</div>
<div className="text-sm text-white font-medium">0 Flags Found</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-slate-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Intelligent processing pipeline</h2>
<p className="text-slate-400">From upload to decision in milliseconds. Our pipeline handles the heavy lifting so your team can focus on relationships.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px border-t border-dashed border-slate-800 -z-10"></div>

<div className="group relative bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-white mb-6 mx-auto md:mx-0 group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="solar:upload-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Ingestion</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Drag &amp; drop PDFs, images, or scans via API. Multi-format support with auto-orientation.
                    </p>
</div>

<div className="group relative bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-white mb-6 mx-auto md:mx-0 group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="solar:text-selection-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Extraction</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Computer vision isolates key-value pairs, tables, and handwriting with human-level precision.
                    </p>
</div>

<div className="group relative bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-white mb-6 mx-auto md:mx-0 group-hover:bg-blue-600 transition-colors relative">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Validation</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Cross-checks against fraud databases, detects document tampering, and validates logic.
                    </p>
</div>

<div className="group relative bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-white mb-6 mx-auto md:mx-0 group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="solar:code-file-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Decision</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Structured JSON output pushes directly to your LOS or decision engine instantly.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
<div className="absolute top-0 right-0 p-12 opacity-30 group-hover:opacity-50 transition-opacity">

<svg className="stroke-slate-700 fill-none" height="300" viewbox="0 0 100 100" width="300">
<circle cx="50" cy="50" r="40" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" r="30" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" r="20" strokeWidth="0.5"></circle>
</svg>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20">
<iconify-icon icon="solar:radar-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Forensic Fraud Detection</h3>
<p className="text-slate-400 max-w-sm">Detect font inconsistencies, metadata manipulation, and photoshop layers invisible to the human eye.</p>
</div>

<div className="relative w-full h-24 bg-slate-950 rounded-lg border border-slate-800 flex items-center px-4 gap-4 overflow-hidden">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse-ring"></div>
<span className="text-xs font-mono text-red-400">ALERT: Metadata Mismatch (Creator Tool: Photoshop 22.0)</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-8 flex flex-col hover:border-slate-700 transition-colors">
<div className="mb-auto">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 border border-purple-500/20">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-2">RESTful API</h3>
<p className="text-sm text-slate-400">Integrate in minutes with well-documented endpoints.</p>
</div>
<div className="bg-slate-950 rounded border border-slate-800 p-3 font-mono text-[10px] text-slate-500 mt-4 group-hover:border-slate-600 transition-colors">
<span className="text-purple-400">POST</span> /v1/documents/analyze <br/>
<span className="text-blue-400">Authorization:</span> Bearer sk_live...
                    </div>
</div>

<div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-8 flex flex-col hover:border-slate-700 transition-colors">
<div className="mb-auto">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
<iconify-icon icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-2">99.9% Accuracy</h3>
<p className="text-sm text-slate-400">Human-in-the-loop validation for low-confidence edge cases.</p>
</div>
<div className="mt-4 flex gap-1 items-end h-16">
<div className="w-1/5 bg-emerald-900/40 h-1/2 rounded-t transition-all group-hover:h-3/4 duration-500"></div>
<div className="w-1/5 bg-emerald-800/40 h-2/3 rounded-t transition-all group-hover:h-4/5 duration-500 delay-100"></div>
<div className="w-1/5 bg-emerald-600/40 h-3/4 rounded-t transition-all group-hover:h-5/6 duration-500 delay-200"></div>
<div className="w-1/5 bg-emerald-500 h-full rounded-t relative">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-white">99.9</span>
</div>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-8 flex flex-row items-center justify-between hover:border-slate-700 transition-colors">
<div className="max-w-sm">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 border border-orange-500/20">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Real-time Decisioning</h3>
<p className="text-slate-400">Reduce loan processing time from days to minutes. Increase throughput without increasing headcount.</p>
</div>
<div className="hidden md:block">
<div className="text-5xl font-light text-white tracking-tighter">
<span className="text-slate-600">&lt;</span>300<span className="text-sm text-slate-500 ml-1">ms</span>
</div>
<div className="text-xs text-slate-500 text-right mt-1">Average response time</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-slate-950">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<div className="inline-flex items-center gap-2 text-blue-400 mb-4">
<iconify-icon icon="solar:lock-password-linear" width="20"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wider">Enterprise Grade Security</span>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Bank-grade encryption by default.</h2>
<p className="text-slate-400 mb-6">
                    We process sensitive financial data with the highest security standards. Your data is encrypted at rest and in transit.
                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> SOC2 Type II Certified
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> AES-256 Encryption
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> GDPR &amp; CCPA Compliant
                    </li>
</ul>
</div>
<div className="flex-1 flex justify-center">
<div className="relative w-64 h-64">
<div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
<svg className="w-full h-full text-slate-700 stroke-current" fill="none" strokeWidth="0.5" viewbox="0 0 100 100">
<circle className="animate-[spin_10s_linear_infinite]" cx="50" cy="50" r="45" stroke-dasharray="4 4"></circle>
<circle className="animate-[spin_15s_linear_infinite_reverse]" cx="50" cy="50" r="35" stroke-dasharray="2 2"></circle>
<rect className="fill-slate-900 stroke-blue-500 stroke-2" height="30" rx="4" width="30" x="35" y="35"></rect>
<path className="stroke-blue-500 stroke-2" d="M50 42 V50 M50 50 V58 M42 50 H58"></path>
</svg>
</div>
</div>
</div>
</section>

<footer className="pt-32 pb-12 bg-slate-950 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
<div className="max-w-3xl mx-auto px-6 text-center mb-20">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to automate your risk workflow?</h2>
<p className="text-lg text-slate-400 mb-10">Join forward-thinking lenders processing millions in loan volume automatically.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Enter work email" type="email"/>
<button className="bg-white text-slate-950 font-medium px-6 py-3 rounded-md hover:bg-slate-200 transition-colors whitespace-nowrap" type="submit">
                    Get Started
                </button>
</form>
<p className="text-xs text-slate-600 mt-4">No credit card required. 14-day free trial.</p>
</div>
<div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-slate-500 text-sm font-medium">DocuLens Inc. © 2024</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
