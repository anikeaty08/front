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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-stone-900 flex items-center gap-2" href="#">
<span className="w-8 h-8 bg-red-600 text-white flex items-center justify-center rounded-lg text-sm font-bold">P</span>
                    PRONGHORN
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#features">Features</a>
<a className="hover:text-stone-900 transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-stone-900 transition-colors" href="#standards">Standards</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">
                    View Docs
                </a>
<a className="inline-flex h-9 items-center justify-center rounded-lg bg-stone-900 px-5 text-sm font-medium text-white transition-all hover:bg-stone-800" href="#">
                    Start Building
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="relative z-10 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-medium text-red-700">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Standards-Driven AI Development
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-stone-900 leading-[1.1]">
                    The alternative to<br/>
<span className="text-stone-400">unclear "vibe" coding.</span>
</h1>
<p className="text-lg text-stone-500 max-w-md leading-relaxed">
                    Build enterprise applications that are provably compliant with standards and fully traceable to requirements—from clear architectural foundations to production-ready code.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex h-12 items-center justify-center rounded-full bg-stone-900 px-8 text-sm font-medium text-white transition-all hover:bg-stone-800 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2" href="#">
                        Start Building
                    </a>
<a className="inline-flex h-12 items-center justify-center rounded-full border border-stone-200 bg-white px-8 text-sm font-medium text-stone-700 transition-all hover:bg-stone-50 hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:ring-offset-2" href="#standards">
                        View Standards
                    </a>
</div>
<div className="flex items-center gap-6 pt-8 text-stone-400 text-sm">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span>Compliance Built-In</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="git-branch"></i>
<span>Fully Traceable</span>
</div>
</div>
</div>

<div className="relative aspect-square md:aspect-auto md:h-[600px] w-full bg-stone-200 rounded-3xl overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(220,38,38,0.15),rgba(255,255,255,0)_50%)]"></div>

<div className="absolute inset-0 flex items-center justify-center p-12">
<div className="relative w-full h-full">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-white rounded-xl shadow-xl border border-stone-200 flex flex-col items-center justify-center p-4 z-10">
<div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
<i className="w-5 h-5" data-lucide="layout"></i>
</div>
<h3 className="text-stone-900 font-semibold text-sm">Design Mode</h3>
<p className="text-stone-400 text-xs mt-1">Architecture First</p>
</div>

<div className="absolute top-1/2 left-4 -translate-y-1/2 w-48 h-32 bg-stone-900 rounded-xl shadow-xl border border-stone-700 flex flex-col items-center justify-center p-4">
<div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 mb-2">
<i className="w-5 h-5" data-lucide="search-check"></i>
</div>
<h3 className="text-white font-semibold text-sm">Audit Mode</h3>
<p className="text-stone-400 text-xs mt-1">Validate Compliance</p>
</div>

<div className="absolute top-1/2 right-4 -translate-y-1/2 w-48 h-32 bg-white rounded-xl shadow-xl border border-stone-200 flex flex-col items-center justify-center p-4">
<div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
<i className="w-5 h-5" data-lucide="box"></i>
</div>
<h3 className="text-stone-900 font-semibold text-sm">Build Mode</h3>
<p className="text-stone-400 text-xs mt-1">AI-Powered</p>
</div>

<svg className="absolute inset-0 w-full h-full" style={{zIndex: '0'}}>
<line stroke="#d6d3d1" stroke-dasharray="4,4" strokeWidth="2" x1="50%" x2="20%" y1="128" y2="50%"></line>
<line stroke="#d6d3d1" stroke-dasharray="4,4" strokeWidth="2" x1="50%" x2="80%" y1="128" y2="50%"></line>
</svg>
</div>
</div>
</div>
</div>
</section>

<div className="w-full overflow-hidden py-8 border-y border-stone-200 bg-white">
<div className="flex whitespace-nowrap gap-16 items-center opacity-40">
<span className="text-base font-medium tracking-tight px-4 text-stone-600">GOVERNMENT OF ALBERTA</span>
<span className="text-base font-medium tracking-tight px-4 text-stone-600">MIT LICENSE</span>
<span className="text-base font-medium tracking-tight px-4 text-stone-600">OPEN SOURCE</span>
<span className="text-base font-medium tracking-tight px-4 text-stone-600">ENTERPRISE READY</span>
<span className="text-base font-medium tracking-tight px-4 text-stone-600">GOVERNMENT OF ALBERTA</span>
<span className="text-base font-medium tracking-tight px-4 text-stone-600">MIT LICENSE</span>
</div>
</div>

<section className="py-24 px-6 max-w-7xl mx-auto" id="features">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">Built for Speed, Quality, Compliance, Traceability &amp; Trust</h2>
<p className="text-stone-500 max-w-2xl">Purpose-built for one mission: generating enterprise applications that are provably compliant with standards and fully traceable to requirements.</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative flex flex-col">
<div className="aspect-[4/5] w-full bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl relative overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.01]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100/50"></div>
<div className="absolute inset-0 flex items-center justify-center p-8">
<div className="w-3/4 h-3/4 bg-white rounded-xl shadow-lg border border-stone-100 flex flex-col items-center justify-center gap-4 relative">
<div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
<i className="w-8 h-8" data-lucide="git-branch"></i>
</div>
<div className="text-center px-4">
<h3 className="font-semibold text-lg text-stone-900">Standards-First</h3>
<p className="text-xs text-stone-400 mt-1">Every requirement traces back</p>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<h3 className="text-lg font-medium text-stone-900">Standards-First Traceability</h3>
<p className="text-sm text-stone-500 leading-relaxed">Standards embedded by design—every requirement traces back to organizational standards, ensuring compliance from day one.</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-[4/5] w-full bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl relative overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.01]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-100/50"></div>
<div className="absolute inset-0 flex items-center justify-center p-8">
<div className="w-3/4 h-3/4 bg-white rounded-xl shadow-lg border border-stone-100 flex flex-col items-center justify-center gap-4 relative">
<div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-2">
<i className="w-8 h-8" data-lucide="zap"></i>
</div>
<div className="text-center px-4">
<h3 className="font-semibold text-lg text-stone-900">Real-Time</h3>
<p className="text-xs text-stone-400 mt-1">Instant validation feedback</p>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<h3 className="text-lg font-medium text-stone-900">Validate While Building</h3>
<p className="text-sm text-stone-500 leading-relaxed">Continuous validation catches compliance gaps instantly, eliminating costly late-stage rework and technical debt.</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-[4/5] w-full bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl relative overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.01]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-100/50"></div>
<div className="absolute inset-0 flex items-center justify-center p-8">
<div className="w-3/4 h-3/4 bg-white rounded-xl shadow-lg border border-stone-100 flex flex-col items-center justify-center gap-4 relative">
<div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
<i className="w-8 h-8" data-lucide="layout"></i>
</div>
<div className="text-center px-4">
<h3 className="font-semibold text-lg text-stone-900">Interactive</h3>
<p className="text-xs text-stone-400 mt-1">Design with clarity</p>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<h3 className="text-lg font-medium text-stone-900">Visual Architecture</h3>
<p className="text-sm text-stone-500 leading-relaxed">Design robust architectures with an interactive canvas that links standards, requirements, and components in real-time.</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-[4/5] w-full bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl relative overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.01]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-100/50"></div>
<div className="absolute inset-0 flex items-center justify-center p-8">
<div className="w-3/4 h-3/4 bg-white rounded-xl shadow-lg border border-stone-100 flex flex-col items-center justify-center gap-4 relative">
<div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-2">
<i className="w-8 h-8" data-lucide="shield-check"></i>
</div>
<div className="text-center px-4">
<h3 className="font-semibold text-lg text-stone-900">Auditable</h3>
<p className="text-xs text-stone-400 mt-1">Complete evidence chain</p>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<h3 className="text-lg font-medium text-stone-900">Proof of Compliance</h3>
<p className="text-sm text-stone-500 leading-relaxed">Automated auditing provides traceable evidence that your application meets every standard and requirement.</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-[4/5] w-full bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl relative overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.01]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-100/50"></div>
<div className="absolute inset-0 flex items-center justify-center p-8">
<div className="w-3/4 h-3/4 bg-white rounded-xl shadow-lg border border-stone-100 flex flex-col items-center justify-center gap-4 relative">
<div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-2">
<i className="w-8 h-8" data-lucide="cpu"></i>
</div>
<div className="text-center px-4">
<h3 className="font-semibold text-lg text-stone-900">Autonomous</h3>
<p className="text-xs text-stone-400 mt-1">Self-healing systems</p>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<h3 className="text-lg font-medium text-stone-900">Autonomous Build-Audit-Fix</h3>
<p className="text-sm text-stone-500 leading-relaxed">AI agents work together to build, audit, and automatically remediate gaps—all changes remain fully traceable.</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-[4/5] w-full bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl relative overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.01]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-100/50"></div>
<div className="absolute inset-0 flex items-center justify-center p-8">
<div className="w-3/4 h-3/4 bg-white rounded-xl shadow-lg border border-stone-100 flex flex-col items-center justify-center gap-4 relative">
<div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-2">
<i className="w-8 h-8" data-lucide="users"></i>
</div>
<div className="text-center px-4">
<h3 className="font-semibold text-lg text-stone-900">Support</h3>
<p className="text-xs text-stone-400 mt-1">Your development partner</p>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<h3 className="text-lg font-medium text-stone-900">Developer Support System</h3>
<p className="text-sm text-stone-500 leading-relaxed">Guides your team like an architect, accelerates work like a contractor, ensures quality like an inspector.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">How Pronghorn Works</h2>
<p className="text-stone-500 max-w-2xl mx-auto">Three operational modes: Design, Audit, and Build</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative">
<div className="bg-stone-50 rounded-2xl p-8 h-full border border-stone-100">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-lg mb-6">1</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3">Design Mode</h3>
<p className="text-stone-500 text-sm leading-relaxed">Lay down clear architectural, cyber security, and tech stack standards. Build robust architectures as the foundation for compliant enterprise applications.</p>
<div className="mt-6 space-y-3">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-xs text-stone-600">Interactive architecture canvas</span>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-xs text-stone-600">Standards library integration</span>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="bg-stone-50 rounded-2xl p-8 h-full border border-stone-100">
<div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-semibold text-lg mb-6">2</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3">Audit Mode</h3>
<p className="text-stone-500 text-sm leading-relaxed">Continuously validate while building. Automated compliance auditing identifies gaps instantly, providing proof of compliance with traceable evidence.</p>
<div className="mt-6 space-y-3">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-xs text-stone-600">Real-time validation</span>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-xs text-stone-600">Compliance evidence generation</span>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="bg-stone-50 rounded-2xl p-8 h-full border border-stone-100">
<div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-semibold text-lg mb-6">3</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3">Build Mode</h3>
<p className="text-stone-500 text-sm leading-relaxed">AI agents build, audit, and automatically fix compliance gaps—all remediation remains fully traceable. Real-time monitoring ensures system-wide consistency.</p>
<div className="mt-6 space-y-3">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-xs text-stone-600">Multi-agent coordination</span>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-xs text-stone-600">Automatic remediation</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">Why Choose Pronghorn</h2>
<p className="text-stone-500 leading-relaxed">
                    Support your development teams with standards-first, AI-powered, continuously validated development.
                </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-red-600" data-lucide="shield-off"></i>
</div>
<div>
<h4 className="text-stone-900 font-medium">Eliminate compliance debt before it starts</h4>
<p className="text-sm text-stone-500 mt-1">No more costly late-stage compliance fixes or technical debt accumulation.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-red-600" data-lucide="rocket"></i>
</div>
<div>
<h4 className="text-stone-900 font-medium">Reduce 12-month projects to weeks</h4>
<p className="text-sm text-stone-500 mt-1">Accelerate delivery without sacrificing quality or compliance.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-red-600" data-lucide="file-check"></i>
</div>
<div>
<h4 className="text-stone-900 font-medium">Proof of compliance built into every line of code</h4>
<p className="text-sm text-stone-500 mt-1">Automated evidence generation for audits and stakeholder confidence.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-red-600" data-lucide="handshake"></i>
</div>
<div>
<h4 className="text-stone-900 font-medium">Build trust and confidence with stakeholders</h4>
<p className="text-sm text-stone-500 mt-1">Complete traceability from standards to code builds organizational trust.</p>
</div>
</li>
</ul>
</div>
<div className="bg-stone-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-red-200/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
<div className="relative z-10 grid grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
<h4 className="text-2xl font-semibold text-stone-900 mb-1">100<span className="text-sm text-stone-500 font-normal">%</span></h4>
<p className="text-xs text-stone-500 uppercase tracking-wide">Traceable</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 translate-y-8">
<h4 className="text-2xl font-semibold text-stone-900 mb-1">92<span className="text-sm text-stone-500 font-normal">%</span></h4>
<p className="text-xs text-stone-500 uppercase tracking-wide">Time Saved</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 -translate-y-4">
<h4 className="text-2xl font-semibold text-stone-900 mb-1">0</h4>
<p className="text-xs text-stone-500 uppercase tracking-wide">Compliance Debt</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 translate-y-4">
<h4 className="text-2xl font-semibold text-stone-900 mb-1">Real-time</h4>
<p className="text-xs text-stone-500 uppercase tracking-wide">Validation</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="bg-stone-900 rounded-3xl text-white overflow-hidden relative">
<div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="relative z-10 flex flex-col items-center text-center p-8 md:p-16 gap-8">
<div className="space-y-6 max-w-3xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Ready to Build with Confidence?</h2>
<p className="text-stone-300 text-lg leading-relaxed">Join the new category of Autonomous Compliance-Driven Development. Deliver enterprise applications that are provably compliant, fully traceable, and built in a fraction of the time.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex h-12 items-center justify-center rounded-full bg-white text-stone-900 px-8 text-sm font-medium transition-all hover:bg-stone-100" href="#">
                        Create Your First Project
                    </a>
<a className="inline-flex h-12 items-center justify-center rounded-full border border-stone-700 bg-transparent text-white px-8 text-sm font-medium transition-all hover:bg-stone-800 hover:border-stone-600" href="https://pronghorn.red">
                        Visit pronghorn.red
                    </a>
</div>
<div className="flex flex-wrap justify-center gap-8 pt-8 text-stone-400 text-sm">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="github"></i>
<span>Open Source</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="scale"></i>
<span>MIT License</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="landmark"></i>
<span>Gov of Alberta</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-stone-900 flex items-center gap-2 mb-6" href="#">
<span className="w-6 h-6 bg-red-600 text-white flex items-center justify-center rounded text-xs font-bold">P</span>
                        PRONGHORN
                    </a>
<p className="text-sm text-stone-500 mb-6">
                        Standards-driven AI development for enterprise applications that are provably compliant and fully traceable.
                    </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-900" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-stone-400 hover:text-stone-900" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-stone-400 hover:text-stone-900" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900" href="#features">Features</a></li>
<li><a className="hover:text-stone-900" href="#how-it-works">How It Works</a></li>
<li><a className="hover:text-stone-900" href="#">Documentation</a></li>
<li><a className="hover:text-stone-900" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Resources</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900" href="#">Standards Library</a></li>
<li><a className="hover:text-stone-900" href="#">Case Studies</a></li>
<li><a className="hover:text-stone-900" href="#">Blog</a></li>
<li><a className="hover:text-stone-900" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">About</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900" href="#">Our Story</a></li>
<li><a className="hover:text-stone-900" href="#">Open Source</a></li>
<li><a className="hover:text-stone-900" href="#">Contact</a></li>
<li><a className="hover:text-stone-900" href="https://pronghorn.red">pronghorn.red</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>© 2025 Pronghorn. MIT License Open Source by the Government of Alberta.</p>
<div className="flex gap-6">
<a className="hover:text-stone-900" href="#">Privacy Policy</a>
<a className="hover:text-stone-900" href="#">Terms of Service</a>
<a className="hover:text-stone-900" href="#">License</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
