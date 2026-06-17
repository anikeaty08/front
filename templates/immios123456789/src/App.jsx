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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-white/70">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-sm tracking-widest font-semibold uppercase text-slate-900">ImmiOS™</div>
<div className="flex items-center space-x-6">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Login</a>
<a className="text-xs font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all" href="#">Book Demo</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-bg pt-20">

<div className="absolute inset-0 data-wave opacity-50"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
<div className="cube-wrapper">
<div className="cube">
<div className="cube-face front"></div>
<div className="cube-face back"></div>
<div className="cube-face right"></div>
<div className="cube-face left"></div>
<div className="cube-face top"></div>
<div className="cube-face bottom"></div>
</div>
</div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Transform Your Immigration <br/> Law Practice with <br/> <span className="text-emerald-600">Intelligent Automation</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The future of immigration law isn’t more staff — it’s better systems.<br/>
                ImmiOS™ turns overwhelmed firms into high-velocity, client-centered powerhouses through Precision, Pace, Presence, and Profitability.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 flex items-center gap-2">
                    Book a Discovery Call <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-3 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full hover:border-slate-400 hover:text-slate-900 transition-all duration-300">
                    See How ImmiOS™ Works
                </button>
</div>
</div>
</section>

<section className="relative py-24 bg-slate-50 overflow-hidden">
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fillOpacity=\\'0.05\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">

<div className="flex justify-center items-center h-64">
<div className="relative w-48 h-48">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-24 bg-slate-300"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-400 scale-tipping">
<div className="absolute left-0 top-0 w-12 h-12 border-2 border-slate-300 rounded-full translate-y-4 -translate-x-1/2 bg-white flex items-center justify-center">
<i className="text-rose-400 w-5 h-5" data-lucide="file-warning"></i>
</div>
<div className="absolute right-0 top-0 w-12 h-12 border-2 border-slate-300 rounded-full translate-y-12 translate-x-1/2 bg-white flex items-center justify-center shadow-lg">
<i className="text-slate-400 w-5 h-5" data-lucide="files"></i>
</div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-200 rounded-full blur-sm"></div>
</div>
</div>

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                    The Real Problem: Your Firm Isn’t Broken — Your Systems Are.
                </h2>
<p className="text-slate-600 mb-8 leading-relaxed">
                    Your firm is good. Your lawyers are good. Your paralegals are good.
                    But your systems? They’re overloaded.
                </p>
<div className="space-y-4">
<div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
<i className="w-5 h-5 text-rose-500 mt-0.5 group-hover:rotate-12 transition-transform" data-lucide="x-circle"></i>
<span className="text-slate-700">Endless client follow-ups</span>
</div>
<div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
<i className="w-5 h-5 text-rose-500 mt-0.5 group-hover:rotate-12 transition-transform" data-lucide="x-circle"></i>
<span className="text-slate-700">Hundreds of unchecked documents</span>
</div>
<div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
<i className="w-5 h-5 text-rose-500 mt-0.5 group-hover:rotate-12 transition-transform" data-lucide="x-circle"></i>
<span className="text-slate-700">Repetitive drafting tasks &amp; bottlenecks everywhere</span>
</div>
<div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
<i className="w-5 h-5 text-rose-500 mt-0.5 group-hover:rotate-12 transition-transform" data-lucide="x-circle"></i>
<span className="text-slate-700">Staff burning out while clients panic from silence</span>
</div>
</div>
<div className="mt-10 pt-6 border-t border-slate-200">
<p className="text-lg font-medium text-slate-900">
                        It’s not your team. <span className="text-rose-500">It’s the workload crushing them.</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="flex justify-center mb-8">
<div className="w-16 h-16 rounded-full border-2 border-emerald-100 flex items-center justify-center relative">
<div className="absolute w-0.5 h-6 bg-emerald-500 bottom-1/2 left-1/2 -translate-x-1/2 clock-hand"></div>
</div>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                There Is a Better Way.
            </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                Imagine a practice where intake is automatic, documents are perfectly organized, clients stay updated, and cases move without friction.
                Where your team focuses on law — not admin.
            </p>
<p className="text-xl font-medium text-emerald-600">
                That’s the world ImmiOS™ builds for immigration law firms.
            </p>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="absolute inset-0 data-wave opacity-30"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-8 border border-slate-100">
<div className="cube-wrapper scale-50">
<div className="cube" style={{width: '40px', height: '40px'}}>
<div className="cube-face front" style={{width: '40px', height: '40px', transform: 'translateZ(20px)'}}></div>
<div className="cube-face back" style={{width: '40px', height: '40px', transform: 'rotateY(180deg) translateZ(20px)'}}></div>
<div className="cube-face right" style={{width: '40px', height: '40px', transform: 'rotateY(90deg) translateZ(20px)'}}></div>
<div className="cube-face left" style={{width: '40px', height: '40px', transform: 'rotateY(-90deg) translateZ(20px)'}}></div>
<div className="cube-face top" style={{width: '40px', height: '40px', transform: 'rotateX(90deg) translateZ(20px)'}}></div>
<div className="cube-face bottom" style={{width: '40px', height: '40px', transform: 'rotateX(-90deg) translateZ(20px)'}}></div>
</div>
</div>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4 blur-xs">
                Introducing ImmiOS™ <br/> <span className="text-slate-400 font-light">The Immigration Operating System</span>
</h2>
<p className="text-lg text-slate-600 max-w-3xl mx-auto mt-8 mb-4">
                A suite of intelligent AI systems built exclusively for immigration firms, powered by the 4Ps:
                <span className="text-slate-900 font-medium">Precision, Pace, Presence, and Profitability.</span>
</p>
<p className="text-sm text-slate-400 uppercase tracking-widest font-medium mt-8">
                Every transformation begins with these four pillars
            </p>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover-card transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="search-check"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Precision</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Error-free casework, perfect document compliance, and consistent output.</p>
<p className="text-xs font-medium text-emerald-600">Powered by CaseForge™ &amp; ProofGuard™</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover-card transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Pace</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">5x faster drafting, instant intake, and accelerated workflows.</p>
<p className="text-xs font-medium text-emerald-600">Powered by FluxIntake™, CaseForge™, &amp; ApexOps™</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover-card transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Presence</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">24/7 client updates, reminders, and responses — without your team lifting a finger.</p>
<p className="text-xs font-medium text-emerald-600">Powered by StatusSphere™</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover-card transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Profitability</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Increase billables, reduce overhead, and scale without stress.</p>
<p className="text-xs font-medium text-emerald-600">Powered by CoreCommand™ &amp; ApexOps™</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">The ImmiOS™ Suite</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-transform duration-500">
<div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-slate-200">
<i className="text-white w-6 h-6" data-lucide="magnet"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">FluxIntake™</h3>
<p className="text-slate-500 text-sm leading-relaxed">Smart AI-driven client intake that instantly qualifies leads, gathers documents, and prepares consultation summaries.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-transform duration-500">
<div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-slate-200">
<i className="text-white w-6 h-6" data-lucide="hammer"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">CaseForge™</h3>
<p className="text-slate-500 text-sm leading-relaxed">Your 24/7 AI paralegal that drafts forms, affidavits, and case packets with high accuracy.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-transform duration-500">
<div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-slate-200">
<i className="text-white w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">ProofGuard™</h3>
<p className="text-slate-500 text-sm leading-relaxed">Document review intelligence that catches inconsistencies, missing files, and compliance gaps.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-transform duration-500">
<div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-slate-200">
<i className="text-white w-6 h-6" data-lucide="globe"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">StatusSphere™</h3>
<p className="text-slate-500 text-sm leading-relaxed">A 24/7 AI communications concierge that manages updates, reminders, and FAQs through WhatsApp, email, and SMS.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-transform duration-500">
<div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-slate-200">
<i className="text-white w-6 h-6" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">CoreCommand™</h3>
<p className="text-slate-500 text-sm leading-relaxed">Your real-time performance, billing, and profitability dashboard — showing you exactly where time and money go.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-transform duration-500">
<div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-slate-200">
<i className="text-white w-6 h-6" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">ApexOps™</h3>
<p className="text-slate-500 text-sm leading-relaxed">A hybrid AI + human backend powerhouse that handles admin, drafting, follow-ups, and operations.</p>
</div>
</div>
</div>
</section>

<section className="py-0 bg-white border-y border-slate-100">
<div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">

<div className="p-16 bg-slate-50 flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-10 left-10 opacity-10 animate-[spin_10s_linear_infinite]">
<i className="w-40 h-40" data-lucide="settings"></i>
</div>
<h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-2">Before ImmiOS™</h3>
<h2 className="text-3xl font-medium text-slate-900 mb-8">Chaos &amp; Bottlenecks</h2>
<ul className="space-y-4 text-slate-600">
<li className="flex items-center gap-3"><i className="text-rose-400 w-5 h-5" data-lucide="minus-circle"></i> Slow intake</li>
<li className="flex items-center gap-3"><i className="text-rose-400 w-5 h-5" data-lucide="minus-circle"></i> Disorganized documents</li>
<li className="flex items-center gap-3"><i className="text-rose-400 w-5 h-5" data-lucide="minus-circle"></i> Overwhelmed staff</li>
<li className="flex items-center gap-3"><i className="text-rose-400 w-5 h-5" data-lucide="minus-circle"></i> Repetitive drafting</li>
<li className="flex items-center gap-3"><i className="text-rose-400 w-5 h-5" data-lucide="minus-circle"></i> Angry clients</li>
<li className="flex items-center gap-3"><i className="text-rose-400 w-5 h-5" data-lucide="minus-circle"></i> Constant delays</li>
</ul>
</div>

<div className="p-16 bg-white flex flex-col justify-center relative border-l border-slate-100">
<div className="absolute top-10 right-10 opacity-10">
<i className="w-40 h-40 text-emerald-600" data-lucide="layout-grid"></i>
</div>
<h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-2">After ImmiOS™</h3>
<h2 className="text-3xl font-medium text-slate-900 mb-8">Clarity &amp; Scale</h2>
<ul className="space-y-4 text-slate-700">
<li className="flex items-center gap-3"><i className="text-emerald-500 w-5 h-5" data-lucide="check-circle-2"></i> Intake in minutes</li>
<li className="flex items-center gap-3"><i className="text-emerald-500 w-5 h-5" data-lucide="check-circle-2"></i> Document perfection</li>
<li className="flex items-center gap-3"><i className="text-emerald-500 w-5 h-5" data-lucide="check-circle-2"></i> A calm, focused team</li>
<li className="flex items-center gap-3"><i className="text-emerald-500 w-5 h-5" data-lucide="check-circle-2"></i> AI-led drafting</li>
<li className="flex items-center gap-3"><i className="text-emerald-500 w-5 h-5" data-lucide="check-circle-2"></i> Clients always informed</li>
<li className="flex items-center gap-3"><i className="text-emerald-500 w-5 h-5" data-lucide="check-circle-2"></i> More cases, less stress</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-amber-50/30">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center tracking-tight text-slate-900 mb-16">What Firms Say</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-xl border border-amber-100 shadow-sm float-subtle" style={{animationDelay: '0s'}}>
<div className="text-amber-500 mb-4"><i className="w-5 h-5 fill-current" data-lucide="quote"></i></div>
<p className="text-slate-700 text-sm font-medium leading-relaxed">“Case prep time dropped from 7 days to 24 hours.”</p>
</div>

<div className="bg-white p-6 rounded-xl border border-amber-100 shadow-sm float-subtle" style={{animationDelay: '1.5s'}}>
<div className="text-amber-500 mb-4"><i className="w-5 h-5 fill-current" data-lucide="quote"></i></div>
<p className="text-slate-700 text-sm font-medium leading-relaxed">“Clients stopped panicking — finally no more WhatsApp floods.”</p>
</div>

<div className="bg-white p-6 rounded-xl border border-amber-100 shadow-sm float-subtle" style={{animationDelay: '3s'}}>
<div className="text-amber-500 mb-4"><i className="w-5 h-5 fill-current" data-lucide="quote"></i></div>
<p className="text-slate-700 text-sm font-medium leading-relaxed">“Documents became perfectly organized.”</p>
</div>

<div className="bg-white p-6 rounded-xl border border-amber-100 shadow-sm float-subtle" style={{animationDelay: '4.5s'}}>
<div className="text-amber-500 mb-4"><i className="w-5 h-5 fill-current" data-lucide="quote"></i></div>
<p className="text-slate-700 text-sm font-medium leading-relaxed">“We scaled 40% with no new hires.”</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-center">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-xl font-semibold text-slate-900 mb-8">We partner with immigration firms across</h2>
<div className="flex flex-wrap justify-center gap-4 md:gap-12 text-3xl md:text-4xl font-light text-slate-400 mb-10 select-none">
<span className="hover:text-slate-900 hover:-translate-y-1 transition-all cursor-default">🇺🇸 United States</span>
<span className="hover:text-slate-900 hover:-translate-y-1 transition-all cursor-default">🇸🇬 Singapore</span>
<span className="hover:text-slate-900 hover:-translate-y-1 transition-all cursor-default">🇦🇪 UAE</span>
<span className="hover:text-slate-900 hover:-translate-y-1 transition-all cursor-default">🇵🇭 Philippines</span>
</div>
<p className="text-slate-500 font-medium">Boutique practices, high-volume centers, and cross-border firms.</p>
</div>
</section>

<section className="py-32 bg-slate-950 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-900/20 blur-[100px] rounded-full"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-xs tracking-[0.2em] font-bold text-emerald-500 mb-8 uppercase">The ImmiOS™ Story</h2>
<div className="space-y-8 font-serif text-lg md:text-xl leading-relaxed text-slate-300">
<p>
                    It started with a pile of files that reached the ceiling. A brilliant attorney, buried under paperwork, watched her passion for law fade into administrative despair. She wasn't practicing law anymore; she was managing chaos.
                </p>
<p>
                    We realized that immigration law isn't just about statutes—it's about people's lives. And when systems fail, people wait. Families stay separated. Talent gets rejected.
                </p>
<p>
                    ImmiOS™ was born from a simple question: <span className="text-white italic">What if the machine handled the process, so the lawyer could handle the person?</span>
</p>
<p>
                    Today, we don't just build software. We build peace of mind. We reconstruct the backbone of firms so they can stand tall, move fast, and serve with the dignity their clients deserve.
                </p>
</div>
<div className="mt-12">
<i className="w-12 h-12 text-emerald-500/50 mx-auto animate-pulse" data-lucide="network"></i>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-slate-200 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="mb-10 flex justify-center">

<div className="cube-wrapper">
<div className="cube" style={{width: '60px', height: '60px', animationDuration: '15s'}}>
<div className="cube-face front" style={{borderColor: '#10b981', width: '60px', height: '60px', transform: 'translateZ(30px)'}}></div>
<div className="cube-face back" style={{borderColor: '#10b981', width: '60px', height: '60px', transform: 'rotateY(180deg) translateZ(30px)'}}></div>
<div className="cube-face right" style={{borderColor: '#10b981', width: '60px', height: '60px', transform: 'rotateY(90deg) translateZ(30px)'}}></div>
<div className="cube-face left" style={{borderColor: '#10b981', width: '60px', height: '60px', transform: 'rotateY(-90deg) translateZ(30px)'}}></div>
<div className="cube-face top" style={{borderColor: '#10b981', width: '60px', height: '60px', transform: 'rotateX(90deg) translateZ(30px)'}}></div>
<div className="cube-face bottom" style={{borderColor: '#10b981', width: '60px', height: '60px', transform: 'rotateX(-90deg) translateZ(30px)'}}></div>
</div>
</div>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                Ready to Transform Your Practice?
            </h2>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
                Let us help you eliminate 90% of your operational stress and build the scalable immigration practice you’ve always wanted.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-10 py-4 bg-emerald-600 text-white text-sm font-medium rounded-full shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 hover:-translate-y-1 transition-all duration-300">
                    Book a Discovery Call
                </button>
<button className="px-10 py-4 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:border-slate-400 hover:bg-slate-50 transition-all duration-300">
                    See ImmiOS™ in Action
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-semibold tracking-widest uppercase text-slate-900">ImmiOS™</div>
<div className="text-xs text-slate-400">
                © 2024 ImmiOS. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
