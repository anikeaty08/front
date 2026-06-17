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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tighter text-slate-900 uppercase">Sophia Network</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Framework</a>
<a className="hover:text-slate-900 transition-colors" href="#">Methodology</a>
<a className="hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#">Philosophy</a>
</div>
<a className="hidden md:block text-xs font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors" href="#">
                Partner With Us
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-grid"></div>
<div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-gradient-to-b from-slate-50 to-transparent opacity-50 blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Systemic Innovation Strategy</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-8">
                    Architecting the next generation of <span className="text-slate-400">Innovation Ecosystems.</span>
</h1>
<p className="text-xl text-slate-500 font-light leading-relaxed mb-12 max-w-2xl">
                    We help global organizations transition from isolated R&amp;D silos to interconnected, high-velocity innovation networks. Sophia Network combines rigorous systems thinking with executive strategy.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#methodology">
                        Explore Methodology
                    </a>
<a className="inline-flex items-center justify-center h-12 px-6 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all" href="#solutions">
                        View Solutions
                    </a>
<a className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group" href="#contact">
                        Speak with a Partner 
                        <span className="iconify ml-1 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-16">
<div className="md:col-span-5">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-6">What Is an Innovation Ecosystem?</h2>
<p className="text-lg text-slate-600 leading-relaxed font-light">
                        It is not merely a collection of partners. An Innovation Ecosystem is a dynamic, orchestrated network of actors—corporations, startups, universities, and governments—interacting through shared value creation to transform complex challenges into scalable solutions.
                    </p>
</div>
<div className="md:col-span-7 grid gap-8">
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
<span className="iconify text-indigo-600" data-icon="lucide:share-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h3 className="text-base font-medium text-slate-900 mb-2">Interconnected Value</h3>
<p className="text-sm text-slate-500 leading-relaxed">Moving beyond linear supply chains to multi-dimensional value webs where every participant amplifies the capability of the whole.</p>
</div>
</div>
<div className="w-full h-px bg-slate-200/60"></div>
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
<span className="iconify text-indigo-600" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h3 className="text-base font-medium text-slate-900 mb-2">Permeable Boundaries</h3>
<p className="text-sm text-slate-500 leading-relaxed">Organizations that allow ideas, talent, and capital to flow fluidly across internal and external borders.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Why Organizations Are Shifting</h2>
<p className="text-slate-500">The market has moved from closed competition to open collaboration. Here are the drivers forcing this systemic evolution.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden">

<div className="bg-white p-8 hover:bg-slate-50 transition-colors">
<span className="iconify text-slate-400 mb-4" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Accelerated Pace</h3>
<p className="text-xs text-slate-500 leading-relaxed">Innovation cycles have compressed from years to months. Internal R&amp;D cannot keep pace alone.</p>
</div>

<div className="bg-white p-8 hover:bg-slate-50 transition-colors">
<span className="iconify text-slate-400 mb-4" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Tech Complexity</h3>
<p className="text-xs text-slate-500 leading-relaxed">Modern solutions require converging technologies (AI, Bio, Quantum) that no single firm masters.</p>
</div>

<div className="bg-white p-8 hover:bg-slate-50 transition-colors">
<span className="iconify text-slate-400 mb-4" data-icon="lucide:users" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Talent Fluidity</h3>
<p className="text-xs text-slate-500 leading-relaxed">Top talent seeks impact across projects and platforms, not lifelong corporate tenure.</p>
</div>

<div className="bg-white p-8 hover:bg-slate-50 transition-colors">
<span className="iconify text-slate-400 mb-4" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Global Access</h3>
<p className="text-xs text-slate-500 leading-relaxed">Barriers to entry have dissolved. Competitors and partners can emerge from any geography.</p>
</div>

<div className="bg-white p-8 hover:bg-slate-50 transition-colors">
<span className="iconify text-slate-400 mb-4" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Risk Distribution</h3>
<p className="text-xs text-slate-500 leading-relaxed">Ecosystems allow firms to place multiple bets and share the risk of exploring the unknown.</p>
</div>

<div className="bg-white p-8 hover:bg-slate-50 transition-colors">
<span className="iconify text-slate-400 mb-4" data-icon="lucide:bar-chart-3" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Data Gravity</h3>
<p className="text-xs text-slate-500 leading-relaxed">Value now accumulates where data sets intersect, necessitating data sharing protocols.</p>
</div>

<div className="bg-white p-8 hover:bg-slate-50 transition-colors">
<span className="iconify text-slate-400 mb-4" data-icon="lucide:target" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Customer Demand</h3>
<p className="text-xs text-slate-500 leading-relaxed">Users expect integrated, seamless experiences that cross traditional industry verticals.</p>
</div>

<div className="bg-white p-8 hover:bg-slate-50 transition-colors">
<span className="iconify text-slate-400 mb-4" data-icon="lucide:refresh-cw" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Resilience</h3>
<p className="text-xs text-slate-500 leading-relaxed">Networked structures adapt to shocks and disruptions faster than hierarchical ones.</p>
</div>

<div className="bg-white p-8 hover:bg-slate-50 transition-colors">
<span className="iconify text-slate-400 mb-4" data-icon="lucide:rocket" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Growth Horizons</h3>
<p className="text-xs text-slate-500 leading-relaxed">New revenue streams exist at the edges of the core business, accessible only via partners.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-12">Innovation Ecosystem Framework</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-6">
<span className="iconify text-indigo-600" data-icon="lucide:layout-grid" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Architecture</h3>
<p className="text-sm text-slate-500 mb-6 min-h-[40px]">The structural governance, legal frameworks, and digital platforms that enable interaction.</p>
<details className="group mt-4">
<summary className="flex items-center justify-between cursor-pointer text-xs font-semibold text-slate-900 uppercase tracking-wide py-3 border-t border-slate-100">
                            Explore Examples
                            <span className="iconify transform transition-transform group-open:rotate-180 text-slate-400" data-icon="lucide:chevron-down" data-width="16"></span>
</summary>
<div className="pt-2 text-sm text-slate-600 space-y-3">
<p>• API-first governance models</p>
<p>• Intellectual Property clearinghouses</p>
<p>• Shared innovation labs</p>
</div>
</details>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-6">
<span className="iconify text-indigo-600" data-icon="lucide:heart-handshake" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Culture</h3>
<p className="text-sm text-slate-500 mb-6 min-h-[40px]">The mindsets, trust mechanisms, and incentives that fuel open collaboration.</p>
<details className="group mt-4">
<summary className="flex items-center justify-between cursor-pointer text-xs font-semibold text-slate-900 uppercase tracking-wide py-3 border-t border-slate-100">
                            Explore Examples
                            <span className="iconify transform transition-transform group-open:rotate-180 text-slate-400" data-icon="lucide:chevron-down" data-width="16"></span>
</summary>
<div className="pt-2 text-sm text-slate-600 space-y-3">
<p>• "Not Invented Here" reversal programs</p>
<p>• Intrapreneurship incentives</p>
<p>• Psychological safety protocols</p>
</div>
</details>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-6">
<span className="iconify text-indigo-600" data-icon="lucide:compass" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Strategy</h3>
<p className="text-sm text-slate-500 mb-6 min-h-[40px]">The alignment of ecosystem goals with core business objectives and market needs.</p>
<details className="group mt-4">
<summary className="flex items-center justify-between cursor-pointer text-xs font-semibold text-slate-900 uppercase tracking-wide py-3 border-t border-slate-100">
                            Explore Examples
                            <span className="iconify transform transition-transform group-open:rotate-180 text-slate-400" data-icon="lucide:chevron-down" data-width="16"></span>
</summary>
<div className="pt-2 text-sm text-slate-600 space-y-3">
<p>• Venture client models</p>
<p>• Horizon 3 growth mapping</p>
<p>• Strategic alliance roadmaps</p>
</div>
</details>
</div>
</div>
</div>
</section>

<section className="py-24" id="methodology">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-16">Seven-Phase Methodology</h2>
<div className="relative border-l border-slate-200 ml-4 md:ml-6 space-y-16">

<div className="relative pl-12">
<div className="absolute -left-1.5 top-1 w-3 h-3 bg-indigo-600 rounded-full ring-4 ring-white"></div>
<span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2 block">Stage 1: Diagnosis &amp; Alignment</span>
<div className="grid gap-8 mt-4">
<div className="group">
<h3 className="text-lg font-medium text-slate-900 flex items-center gap-3">
<span className="text-slate-300 font-normal">01</span> Ecosystem Audit
                            </h3>
<p className="text-sm text-slate-500 mt-2 max-w-xl">Mapping current assets, gaps, and hidden network potential within the organization.</p>
</div>
<div className="group">
<h3 className="text-lg font-medium text-slate-900 flex items-center gap-3">
<span className="text-slate-300 font-normal">02</span> Strategic Intent
                            </h3>
<p className="text-sm text-slate-500 mt-2 max-w-xl">Defining the "North Star" metrics that align C-suite objectives with ecosystem capabilities.</p>
</div>
</div>
</div>

<div className="relative pl-12">
<div className="absolute -left-1.5 top-1 w-3 h-3 bg-indigo-600 rounded-full ring-4 ring-white"></div>
<span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2 block">Stage 2: Architecture &amp; Design</span>
<div className="grid gap-8 mt-4">
<div className="group">
<h3 className="text-lg font-medium text-slate-900 flex items-center gap-3">
<span className="text-slate-300 font-normal">03</span> Partner Selection
                            </h3>
<p className="text-sm text-slate-500 mt-2 max-w-xl">Rigorous vetting and onboarding of high-synergy partners across industry verticals.</p>
</div>
<div className="group">
<h3 className="text-lg font-medium text-slate-900 flex items-center gap-3">
<span className="text-slate-300 font-normal">04</span> Governance Design
                            </h3>
<p className="text-sm text-slate-500 mt-2 max-w-xl">Establishing IP protocols, profit-sharing models, and decision-making matrices.</p>
</div>
<div className="group">
<h3 className="text-lg font-medium text-slate-900 flex items-center gap-3">
<span className="text-slate-300 font-normal">05</span> Pilot Orchestration
                            </h3>
<p className="text-sm text-slate-500 mt-2 max-w-xl">Launching controlled, high-velocity experiments to validate value propositions.</p>
</div>
</div>
</div>

<div className="relative pl-12">
<div className="absolute -left-1.5 top-1 w-3 h-3 bg-indigo-600 rounded-full ring-4 ring-white"></div>
<span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2 block">Stage 3: Scale &amp; Sustain</span>
<div className="grid gap-8 mt-4">
<div className="group">
<h3 className="text-lg font-medium text-slate-900 flex items-center gap-3">
<span className="text-slate-300 font-normal">06</span> Integration
                            </h3>
<p className="text-sm text-slate-500 mt-2 max-w-xl">Weaving successful ecosystem ventures back into the core business infrastructure.</p>
</div>
<div className="group">
<h3 className="text-lg font-medium text-slate-900 flex items-center gap-3">
<span className="text-slate-300 font-normal">07</span> Continuous Evolution
                            </h3>
<p className="text-sm text-slate-500 mt-2 max-w-xl">Implementing feedback loops to dynamically adjust the network as markets shift.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-16">What Makes Our Methodology Different</h2>
<div className="grid lg:grid-cols-2 gap-12">

<div className="space-y-6">
<h3 className="text-xl font-medium text-slate-300 border-b border-slate-700 pb-4">Traditional Consulting</h3>
<div className="space-y-4">
<div className="flex items-start gap-3 opacity-60">
<span className="iconify text-slate-500 mt-0.5" data-icon="lucide:x" data-width="18"></span>
<p className="text-sm">Linear, project-based engagements</p>
</div>
<div className="flex items-start gap-3 opacity-60">
<span className="iconify text-slate-500 mt-0.5" data-icon="lucide:x" data-width="18"></span>
<p className="text-sm">Closed IP and proprietary solutions</p>
</div>
<div className="flex items-start gap-3 opacity-60">
<span className="iconify text-slate-500 mt-0.5" data-icon="lucide:x" data-width="18"></span>
<p className="text-sm">Focus on internal optimization</p>
</div>
</div>
</div>

<div className="space-y-6">
<h3 className="text-xl font-medium text-white border-b border-indigo-500 pb-4">Sophia Network</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<span className="iconify text-indigo-400 mt-0.5" data-icon="lucide:check" data-width="18"></span>
<p className="text-sm text-slate-200">Cyclical, continuous value generation</p>
</div>
<div className="flex items-start gap-3">
<span className="iconify text-indigo-400 mt-0.5" data-icon="lucide:check" data-width="18"></span>
<p className="text-sm text-slate-200">Open standards and shared value</p>
</div>
<div className="flex items-start gap-3">
<span className="iconify text-indigo-400 mt-0.5" data-icon="lucide:check" data-width="18"></span>
<p className="text-sm text-slate-200">Focus on network effects and orchestration</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-12">Innovation Ecosystem Solutions</h2>
<div className="space-y-4">

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden open:ring-1 open:ring-indigo-500/20">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:briefcase" data-width="16"></span>
</div>
<span className="text-lg font-medium text-slate-900">Corporate Venturing Units</span>
</div>
<span className="iconify transform transition-transform group-open:rotate-180 text-slate-400" data-icon="lucide:plus" data-width="20"></span>
</summary>
<div className="px-6 pb-6 pt-2 pl-[4.5rem]">
<p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                            We design and implement CVC arms that align with strategic goals rather than just financial returns. We structure deal flow, due diligence, and portfolio management to ensure tangible transfer of innovation back to the parent company.
                        </p>
</div>
</details>

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden open:ring-1 open:ring-indigo-500/20">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:microscope" data-width="16"></span>
</div>
<span className="text-lg font-medium text-slate-900">Lab &amp; Incubator Design</span>
</div>
<span className="iconify transform transition-transform group-open:rotate-180 text-slate-400" data-icon="lucide:plus" data-width="20"></span>
</summary>
<div className="px-6 pb-6 pt-2 pl-[4.5rem]">
<p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                            Building physical and digital spaces where internal teams co-create with startups. Our service includes curriculum development, mentor network curation, and rapid prototyping facility setup.
                        </p>
</div>
</details>

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden open:ring-1 open:ring-indigo-500/20">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:users-2" data-width="16"></span>
</div>
<span className="text-lg font-medium text-slate-900">Open Innovation Challenges</span>
</div>
<span className="iconify transform transition-transform group-open:rotate-180 text-slate-400" data-icon="lucide:plus" data-width="20"></span>
</summary>
<div className="px-6 pb-6 pt-2 pl-[4.5rem]">
<p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                            Structuring global prize competitions and hackathons that attract edge-case solutions from unexpected sources. We handle the platform logistics, IP framing, and winner integration.
                        </p>
</div>
</details>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-16">Results Our Clients Achieve</h2>
<div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
<div className="border-t border-slate-200 pt-6">
<p className="text-5xl font-semibold text-slate-900 mb-2 tracking-tight">3x</p>
<p className="text-sm font-medium text-slate-900 mb-2">Speed to Market</p>
<p className="text-sm text-slate-500 leading-relaxed">Clients utilizing ecosystem partners launch new ventures three times faster than internal-only builds.</p>
</div>
<div className="border-t border-slate-200 pt-6">
<p className="text-5xl font-semibold text-slate-900 mb-2 tracking-tight">40%</p>
<p className="text-sm font-medium text-slate-900 mb-2">R&amp;D Efficiency</p>
<p className="text-sm text-slate-500 leading-relaxed">Reduction in wasted R&amp;D spend by validating concepts externally before significant investment.</p>
</div>
<div className="border-t border-slate-200 pt-6">
<p className="text-5xl font-semibold text-slate-900 mb-2 tracking-tight">12</p>
<p className="text-sm font-medium text-slate-900 mb-2">New Revenue Streams</p>
<p className="text-sm text-slate-500 leading-relaxed">Average number of scalable new business lines identified per client engagement within 18 months.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden text-center">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<span className="iconify mx-auto text-indigo-500 mb-6" data-icon="lucide:scale" data-strokeWidth="1.5" data-width="32"></span>
<h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-8 tracking-tight italic">
                "Wisdom Meets Science"
            </h2>
<p className="text-lg text-slate-300 leading-relaxed font-light mb-8">
                Sophia is Greek for wisdom. We believe true innovation requires more than just raw data or technology; it requires the wisdom to orchestrate complex human systems. We blend the hard science of network theory with the soft skills of cultural transformation.
            </p>
<div className="h-px w-24 bg-indigo-500 mx-auto"></div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Ready to Orchestrate Your Ecosystem?</h2>
<p className="text-slate-500 mb-12 max-w-xl mx-auto">Join the leading organizations transforming their industries through systemic innovation.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md">
                    Schedule a Consultation
                </button>
<button className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-all">
                    Download Framework PDF
                </button>
<button className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors">
                    View Case Studies
                </button>
</div>
</div>
</section>

<footer className="border-t border-slate-100 py-12 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-semibold tracking-tighter text-slate-900 uppercase">Sophia Network</div>
<div className="text-xs text-slate-400">
                © 2024 Sophia Network. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
