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
      

<nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
<div className="glass border border-slate-200/60 rounded-full px-5 h-12 flex items-center justify-between gap-12 shadow-sm shadow-slate-200/50 max-w-2xl w-full mx-auto">
<a className="flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-slate-900 rounded-md flex items-center justify-center text-white shadow-lg group-hover:bg-indigo-600 transition-colors">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">Portaldesk</span>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Workflow</a>
<a className="text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Invoices</a>
<a className="text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Changelog</a>
</div>
<div className="flex items-center gap-3">
<a className="text-[13px] font-medium text-slate-500 hover:text-slate-900 px-2" href="#">Log in</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-[13px] font-medium px-4 py-1.5 rounded-full transition-all shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]" href="#">Get Started</a>
</div>
</div>
</nav>

<header className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-indigo-50/80 to-transparent rounded-[100%] blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">

<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-medium text-slate-600 mb-8 hover:border-slate-300 transition-colors shadow-sm shine-effect overflow-hidden relative" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                v2.0 is now live: Stripe Connect &amp; Figma Embeds
                <i className="w-3 h-3 text-slate-400" data-lucide="arrow-right"></i>
</a>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-slate-900 mb-8 leading-[0.95] text-balance">
                Client work, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500">without the chaos.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed font-normal text-balance">
                The operating system for creative studios. Replace email threads with a unified workspace for files, approvals, and payments.
            </p>
<div className="flex items-center justify-center gap-4 mb-20">
<button className="h-11 px-6 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-all shadow-lg shadow-slate-900/10 flex items-center gap-2 group">
                    Start 14-day trial
                    <i className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</button>
<button className="h-11 px-6 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-medium transition-all shadow-sm">
                    View Demo
                </button>
</div>

<div className="relative max-w-5xl mx-auto">
<div className="relative bg-white rounded-xl shadow-[0_30px_60px_-12px_rgba(50,50,93,0.15),0_18px_36px_-18px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden ring-1 ring-slate-100">

<div className="bg-white border-b border-slate-100 h-9 flex items-center px-4 justify-between">
<div className="flex gap-1.5 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
<i className="w-2.5 h-2.5" data-lucide="lock"></i>
                            portaldesk.com/acme-corp
                        </div>
<div className="w-10"></div>
</div>

<div className="flex h-[500px] text-left">

<div className="w-60 bg-slate-50/50 border-r border-slate-100 p-4 flex flex-col hidden sm:flex">
<div className="flex items-center gap-2 mb-8 px-2">
<div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-[10px] text-white font-bold">A</div>
<span className="text-xs font-semibold text-slate-700">Acme Corp</span>
<i className="w-3 h-3 text-slate-400 ml-auto" data-lucide="chevron-down"></i>
</div>
<div className="space-y-0.5">
<div className="px-2 py-1.5 rounded-md bg-white border border-slate-100 shadow-sm flex items-center gap-2.5 text-xs font-medium text-slate-800">
<i className="w-3.5 h-3.5 text-indigo-500" data-lucide="home"></i> Dashboard
                                </div>
<div className="px-2 py-1.5 rounded-md text-slate-500 hover:bg-slate-100/80 flex items-center gap-2.5 text-xs font-medium transition-colors cursor-pointer">
<i className="w-3.5 h-3.5" data-lucide="layers"></i> Deliverables
                                </div>
<div className="px-2 py-1.5 rounded-md text-slate-500 hover:bg-slate-100/80 flex items-center gap-2.5 text-xs font-medium transition-colors cursor-pointer">
<i className="w-3.5 h-3.5" data-lucide="message-square"></i> Discussions <span className="ml-auto bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded text-[9px]">3</span>
</div>
<div className="px-2 py-1.5 rounded-md text-slate-500 hover:bg-slate-100/80 flex items-center gap-2.5 text-xs font-medium transition-colors cursor-pointer">
<i className="w-3.5 h-3.5" data-lucide="receipt"></i> Invoices
                                </div>
</div>
<div className="mt-auto">
<div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
<div className="text-[10px] font-medium text-slate-500 mb-2 uppercase tracking-wider">Project Progress</div>
<div className="flex items-end gap-2 mb-1">
<span className="text-xl font-bold text-slate-900 tracking-tight">82%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[82%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-white p-6 relative overflow-hidden">

<div className="flex justify-between items-start mb-8">
<div>
<h2 className="text-xl font-semibold text-slate-900 tracking-tight">Q3 Brand Refresh</h2>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-medium uppercase tracking-wide">Active</span>
<span className="text-xs text-slate-400">Due Oct 24, 2024</span>
</div>
</div>
<div className="flex -space-x-1.5">
<div className="w-7 h-7 rounded-full bg-slate-100 border border-white ring-1 ring-slate-100"></div>
<div className="w-7 h-7 rounded-full bg-slate-200 border border-white ring-1 ring-slate-100"></div>
<button className="w-7 h-7 rounded-full bg-white border border-dashed border-slate-300 flex items-center justify-center text-slate-400 hover:border-slate-400 hover:text-slate-600 transition-colors">
<i className="w-3 h-3" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="group col-span-2 sm:col-span-1 p-4 rounded-lg border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all cursor-pointer bg-slate-50/30">
<div className="flex items-center justify-between mb-3">
<div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-4 h-4" data-lucide="figma"></i>
</div>
<i className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-500 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-sm font-medium text-slate-900">Design System v2</h3>
<p className="text-xs text-slate-500 mt-1">Updated 2h ago by Sarah</p>
</div>

<div className="group col-span-2 sm:col-span-1 p-4 rounded-lg border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all cursor-pointer bg-slate-50/30">
<div className="flex items-center justify-between mb-3">
<div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-blue-500 shadow-sm">
<i className="w-4 h-4" data-lucide="file-text"></i>
</div>
<i className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-sm font-medium text-slate-900">Brand Guidelines.pdf</h3>
<p className="text-xs text-slate-500 mt-1">12.4 MB • Waiting approval</p>
</div>

<div className="col-span-2 mt-2">
<div className="flex items-center justify-between mb-3">
<h4 className="text-xs font-semibold text-slate-900">Pending Tasks</h4>
<button className="text-[10px] text-slate-500 hover:text-indigo-600 font-medium">View All</button>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2.5 rounded border border-slate-100 bg-white shadow-sm">
<div className="w-4 h-4 rounded-full border border-slate-300 hover:border-indigo-500 cursor-pointer"></div>
<span className="text-xs text-slate-700">Review homepage copy</span>
<div className="ml-auto w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-[9px] font-bold">AS</div>
</div>
<div className="flex items-center gap-3 p-2.5 rounded border border-slate-100 bg-white shadow-sm">
<div className="w-4 h-4 rounded-full border border-slate-300 hover:border-indigo-500 cursor-pointer"></div>
<span className="text-xs text-slate-700">Approve final logo assets</span>
<div className="ml-auto w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[9px] font-bold">JD</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-12 top-20 w-24 h-24 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
<div className="absolute -left-12 bottom-20 w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
</div>
</div>
</header>

<section className="py-12 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">Trusted by 2,000+ modern studios</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-6 flex items-center gap-2 font-semibold text-slate-800"><div className="w-5 h-5 bg-slate-800 rounded-full"></div>Acme</div>
<div className="h-6 flex items-center gap-2 font-semibold text-slate-800"><div className="w-5 h-5 border-2 border-slate-800 rotate-45"></div>Kites</div>
<div className="h-6 flex items-center gap-2 font-semibold text-slate-800"><div className="w-5 h-5 bg-slate-800 rounded-sm"></div>Vortex</div>
<div className="h-6 flex items-center gap-2 font-semibold text-slate-800"><div className="w-5 h-5 border-2 border-slate-800 rounded-full"></div>Circle</div>
<div className="h-6 flex items-center gap-2 font-semibold text-slate-800"><div className="w-5 h-5 bg-slate-800 rounded-tr-lg"></div>Square</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Everything you need to run <br/>a high-end service business.</h2>
<p className="text-lg text-slate-500">Replace your fragmented stack of tools with one cohesive operating system designed for transparency.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-2 bg-slate-50 rounded-2xl border border-slate-200 p-8 relative overflow-hidden group">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<i className="w-5 h-5 text-indigo-600" data-lucide="layout-template"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Custom Branded Portals</h3>
<p className="text-sm text-slate-500 leading-relaxed">Map your own domain (portal.studio.com), upload your logo, and customize the interface colors. Clients feel like they are using your proprietary software.</p>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[90%] bg-white rounded-l-xl border-l border-y border-slate-200 shadow-xl translate-x-12 group-hover:translate-x-8 transition-transform duration-500 p-6">
<div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
<div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white text-xs font-bold">S</div>
<div className="text-sm font-semibold">Studio Inc.</div>
</div>
<div className="space-y-3">
<div className="h-2 w-2/3 bg-slate-100 rounded"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded"></div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-8 relative overflow-hidden group hover:border-slate-300 transition-colors">
<div className="w-10 h-10 bg-green-50 rounded-lg border border-green-100 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-green-600" data-lucide="dollar-sign"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Stripe Connect</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8">Embed invoices directly in the portal. Clients pay 3x faster when they don't have to login to a separate tool.</p>
<div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-medium text-slate-600">Payment received</span>
</div>
<span className="text-xs font-bold text-slate-900">+$4,500</span>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-8 relative overflow-hidden group hover:border-slate-300 transition-colors">
<div className="w-10 h-10 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-blue-600" data-lucide="video"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Async Video Updates</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8">Record quick Loom-style walkthroughs and pin them to deliverables. Cut down meetings by 80%.</p>
<div className="absolute bottom-6 left-6 right-6">
<div className="relative rounded-lg overflow-hidden aspect-video bg-slate-900 group-hover:shadow-lg transition-shadow">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-white fill-white" data-lucide="play"></i>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 bg-slate-900 rounded-2xl border border-slate-800 p-8 relative overflow-hidden text-white group">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 bg-white/10 rounded-lg border border-white/10 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-white" data-lucide="workflow"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Automated Onboarding</h3>
<p className="text-sm text-slate-400 leading-relaxed">Set up triggers to automatically create portals, folders, and welcome messages when you sign a contract. Zero manual work.</p>
</div>

<div className="absolute right-0 top-0 bottom-0 w-1/2 p-8 flex flex-col justify-center gap-4 opacity-80">
<div className="flex items-center gap-4 text-xs font-mono text-slate-300">
<div className="w-8 h-8 rounded border border-slate-700 bg-slate-800 flex items-center justify-center"><i className="w-4 h-4" data-lucide="file-signature"></i></div>
<div className="h-px w-8 bg-slate-700"></div>
<div className="w-8 h-8 rounded border border-indigo-500/50 bg-indigo-500/10 flex items-center justify-center text-indigo-400"><i className="w-4 h-4" data-lucide="zap"></i></div>
<div className="h-px w-8 bg-slate-700"></div>
<div className="w-8 h-8 rounded border border-slate-700 bg-slate-800 flex items-center justify-center"><i className="w-4 h-4" data-lucide="folder-plus"></i></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Simple, transparent pricing</h2>
<div className="inline-flex items-center p-1 bg-white rounded-full border border-slate-200 shadow-sm">
<button className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium shadow-sm">Monthly</button>
<button className="px-4 py-1.5 rounded-full text-slate-500 text-xs font-medium hover:text-slate-900 transition-colors">Yearly (-20%)</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
<h3 className="font-medium text-slate-900 mb-2">Starter</h3>
<p className="text-3xl font-bold text-slate-900 tracking-tight mb-6">$0</p>
<p className="text-xs text-slate-500 mb-6 pb-6 border-b border-slate-100">Perfect for side-hustlers.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="check"></i> 1 Active Client
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="check"></i> Basic Branding
                        </li>
</ul>
<a className="block w-full py-2.5 text-center text-sm font-medium border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors" href="#">Start for free</a>
</div>

<div className="p-6 bg-white rounded-xl border border-indigo-600 shadow-xl shadow-indigo-100 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
<h3 className="font-medium text-indigo-600 mb-2">Professional</h3>
<p className="text-3xl font-bold text-slate-900 tracking-tight mb-6">$29<span className="text-lg text-slate-400 font-normal">/mo</span></p>
<p className="text-xs text-slate-500 mb-6 pb-6 border-b border-slate-100">For full-time freelancers.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="check"></i> Unlimited Clients
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="check"></i> Custom Domain
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="check"></i> Remove "Powered by"
                        </li>
</ul>
<a className="block w-full py-2.5 text-center text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all" href="#">Get Started</a>
</div>

<div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
<h3 className="font-medium text-slate-900 mb-2">Agency</h3>
<p className="text-3xl font-bold text-slate-900 tracking-tight mb-6">$79<span className="text-lg text-slate-400 font-normal">/mo</span></p>
<p className="text-xs text-slate-500 mb-6 pb-6 border-b border-slate-100">For teams &amp; studios.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="check"></i> 5 Team Members
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="check"></i> SSO &amp; Advanced Security
                        </li>
</ul>
<a className="block w-full py-2.5 text-center text-sm font-medium border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
</div>
<span className="text-sm font-semibold text-slate-900">Portaldesk</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
