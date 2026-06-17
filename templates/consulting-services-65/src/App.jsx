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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm tracking-tight font-semibold flex items-center gap-2 text-neutral-900" href="#">
<div className="w-3 h-3 bg-indigo-600 rounded-[1px]"></div>
                GROWTH ENGINE SYSTEM
            </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#system">The System</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#services">Capabilities</a>
<a className="text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition-all" href="#contact">
                    Consultation
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 md:pt-48 md:pb-32 border-b border-neutral-200 overflow-hidden">
<div className="absolute inset-0 tech-grid -z-10 opacity-50"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
<div className="md:col-span-8 animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-600 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                        Stop looking for the silver bullet
                    </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium leading-[0.95] text-neutral-900 mb-8">
                        Scale is a system,<br/>
<span className="text-neutral-400">not a hack.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-2xl font-light">
                        Most businesses stay stuck searching for one magical lever. Real growth comes from the synchronization of Model, Market, Operations, and Metrics.
                    </p>
</div>

<div className="md:col-span-4 flex justify-end md:justify-center relative">
<div className="relative w-64 h-64">

<div className="absolute inset-0 border border-neutral-200 rounded-full opacity-30"></div>
<div className="absolute inset-8 border border-dashed border-neutral-300 rounded-full animate-[spin_10s_linear_infinite]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-neutral-200 p-2 shadow-sm">
<i className="w-5 h-5 text-indigo-600" data-lucide="layers"></i>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white border border-neutral-200 p-2 shadow-sm">
<i className="w-5 h-5 text-neutral-600" data-lucide="cpu"></i>
</div>
<div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-neutral-200 p-2 shadow-sm">
<i className="w-5 h-5 text-neutral-600" data-lucide="target"></i>
</div>
<div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white border border-neutral-200 p-2 shadow-sm">
<i className="w-5 h-5 text-neutral-600" data-lucide="bar-chart-3"></i>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Engine</span>
</div>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col md:flex-row gap-8 md:gap-16">
<div>
<span className="block text-2xl font-semibold tracking-tight">12+</span>
<span className="text-xs text-neutral-500 uppercase tracking-wide">Years Experience</span>
</div>
<div>
<span className="block text-2xl font-semibold tracking-tight">Systemic</span>
<span className="text-xs text-neutral-500 uppercase tracking-wide">Approach</span>
</div>
<div>
<span className="block text-2xl font-semibold tracking-tight">Sustainable</span>
<span className="text-xs text-neutral-500 uppercase tracking-wide">Growth</span>
</div>
</div>
</div>
</header>

<section className="py-24 border-b border-neutral-200 bg-neutral-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-6">The Disconnect</h2>
<p className="text-neutral-500 mb-8 leading-relaxed">
                        Most consultants won't tell you the truth: improving one area in isolation often destroys another.
                    </p>
<ul className="space-y-4">
<li className="flex gap-4 items-start group">
<div className="w-6 h-6 rounded-sm bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="x"></i>
</div>
<div>
<strong className="text-sm font-medium text-neutral-900 block">Sales without Capacity</strong>
<span className="text-sm text-neutral-500">You destroy service quality and churn increases.</span>
</div>
</li>
<li className="flex gap-4 items-start group">
<div className="w-6 h-6 rounded-sm bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="x"></i>
</div>
<div>
<strong className="text-sm font-medium text-neutral-900 block">AI without Process</strong>
<span className="text-sm text-neutral-500">You automate chaos at high speed.</span>
</div>
</li>
<li className="flex gap-4 items-start group">
<div className="w-6 h-6 rounded-sm bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="x"></i>
</div>
<div>
<strong className="text-sm font-medium text-neutral-900 block">Hiring without Systems</strong>
<span className="text-sm text-neutral-500">You scale inefficiency and overhead.</span>
</div>
</li>
</ul>
</div>
<div className="relative bg-white border border-neutral-200 p-8 rounded-lg shadow-sm">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-200 via-indigo-500 to-neutral-200"></div>
<h3 className="text-lg font-medium tracking-tight mb-4">The Solution: Interconnection</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Real growth comes from understanding how components interact—identifying sequence, creating momentum, and building improvements that compound.
                    </p>
<div className="grid grid-cols-2 gap-2">
<div className="bg-neutral-50 p-4 rounded text-center border border-neutral-100">
<div className="text-xs font-mono text-neutral-400 uppercase mb-1">Strategy</div>
<div className="font-medium text-neutral-900">Model</div>
</div>
<div className="bg-neutral-50 p-4 rounded text-center border border-neutral-100">
<div className="text-xs font-mono text-neutral-400 uppercase mb-1">Acquisition</div>
<div className="font-medium text-neutral-900">Market</div>
</div>
<div className="bg-neutral-50 p-4 rounded text-center border border-neutral-100">
<div className="text-xs font-mono text-neutral-400 uppercase mb-1">Execution</div>
<div className="font-medium text-neutral-900">Operations</div>
</div>
<div className="bg-neutral-50 p-4 rounded text-center border border-neutral-100">
<div className="text-xs font-mono text-neutral-400 uppercase mb-1">Intelligence</div>
<div className="font-medium text-neutral-900">Metrics</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-200" id="system">
<div className="max-w-7xl mx-auto">

<div className="p-6 md:p-12 md:pb-0">
<span className="text-indigo-600 font-mono text-xs uppercase tracking-widest mb-2 block">The Framework</span>
<h2 className="text-3xl md:text-4xl tracking-tighter font-medium mb-12">Four Components of Scale</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-200 border-t border-neutral-200">

<div className="group hover:bg-neutral-50/50 transition-colors duration-300">
<div className="p-8 md:p-12 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="w-10 h-10 rounded-md bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-sm">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="font-mono text-xs text-neutral-400">01</span>
</div>
<h3 className="text-xl font-medium text-neutral-900 mb-2">Model</h3>
<p className="text-sm font-medium text-neutral-500 mb-6 uppercase tracking-wider text-xs">Business Strategy &amp; Design</p>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">
                            Strategic planning and business model optimization for sustainable competitive advantage. We align your organization's capabilities with market opportunities.
                        </p>
<div className="space-y-3 pt-6 border-t border-neutral-100">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-neutral-600">Strategic diagnosis (McKinsey 7S)</span>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-neutral-600">Business model refinement</span>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-neutral-600">Roadmap development (3-5 years)</span>
</div>
</div>
</div>
</div>

<div className="group hover:bg-neutral-50/50 transition-colors duration-300">
<div className="p-8 md:p-12 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="w-10 h-10 rounded-md bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-sm">
<i className="w-5 h-5" data-lucide="target"></i>
</div>
<span className="font-mono text-xs text-neutral-400">02</span>
</div>
<h3 className="text-xl font-medium text-neutral-900 mb-2">Market</h3>
<p className="text-sm font-medium text-neutral-500 mb-6 uppercase tracking-wider text-xs">Go-to-Market &amp; Acquisition</p>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">
                            Systematic approaches to positioning and revenue generation. We differentiate your brand and build scalable sales systems.
                        </p>
<div className="space-y-3 pt-6 border-t border-neutral-100">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-neutral-600">Porter's Five Forces Analysis</span>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-neutral-600">Customer journey mapping</span>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-neutral-600">Sales system design</span>
</div>
</div>
</div>
</div>

<div className="group hover:bg-neutral-50/50 transition-colors duration-300 border-t border-neutral-200 md:border-t-0">
<div className="p-8 md:p-12 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="w-10 h-10 rounded-md bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-sm">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<span className="font-mono text-xs text-neutral-400">03</span>
</div>
<h3 className="text-xl font-medium text-neutral-900 mb-2">Operations</h3>
<p className="text-sm font-medium text-neutral-500 mb-6 uppercase tracking-wider text-xs">Process Excellence &amp; Tech</p>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">
                            Digital transformation and capability development. We ensure you have the infrastructure to deliver on your promises at scale.
                        </p>
<div className="space-y-3 pt-6 border-t border-neutral-100">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-neutral-600">Process optimization (Lean Six Sigma)</span>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-neutral-600">AI adoption &amp; automation</span>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-neutral-600">Resource scalability planning</span>
</div>
</div>
</div>
</div>

<div className="group hover:bg-neutral-50/50 transition-colors duration-300 border-t border-neutral-200 md:border-t-0">
<div className="p-8 md:p-12 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="w-10 h-10 rounded-md bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-sm">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
<span className="font-mono text-xs text-neutral-400">04</span>
</div>
<h3 className="text-xl font-medium text-neutral-900 mb-2">Metrics</h3>
<p className="text-sm font-medium text-neutral-500 mb-6 uppercase tracking-wider text-xs">Performance Management</p>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">
                            Measurement frameworks for data-driven decisions. We replace guesswork with dashboards that show leading, not just lagging, indicators.
                        </p>
<div className="space-y-3 pt-6 border-t border-neutral-100">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-neutral-600">KPI framework design</span>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-neutral-600">Balanced Scorecard implementation</span>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-neutral-600">Reporting systems</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-neutral-200 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:w-1/2">
<span className="text-indigo-600 font-mono text-xs uppercase tracking-widest">How We Work</span>
<h2 className="text-3xl font-medium tracking-tight mt-4 text-neutral-900">Structured Engagement</h2>
<p className="mt-4 text-neutral-500 leading-relaxed">
                    Our engagements are designed to move from high-level diagnosis to granular capability building.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="relative pl-6 md:pl-0 border-l-2 md:border-l-0 md:border-t-2 border-neutral-100 pt-0 md:pt-6">
<div className="absolute -left-[5px] top-0 md:left-0 md:-top-[5px] w-2 h-2 rounded-full bg-indigo-600"></div>
<span className="text-xs font-mono text-neutral-400 mb-2 block">Phase 01</span>
<h3 className="text-sm font-semibold text-neutral-900 mb-2">Diagnosis</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Comprehensive analysis of current strategy, operations, and performance gaps.</p>
</div>

<div className="relative pl-6 md:pl-0 border-l-2 md:border-l-0 md:border-t-2 border-neutral-100 pt-0 md:pt-6">
<div className="absolute -left-[5px] top-0 md:left-0 md:-top-[5px] w-2 h-2 rounded-full bg-neutral-200"></div>
<span className="text-xs font-mono text-neutral-400 mb-2 block">Phase 02</span>
<h3 className="text-sm font-semibold text-neutral-900 mb-2">Strategy</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Design of specific roadmaps, frameworks, and solution architecture.</p>
</div>

<div className="relative pl-6 md:pl-0 border-l-2 md:border-l-0 md:border-t-2 border-neutral-100 pt-0 md:pt-6">
<div className="absolute -left-[5px] top-0 md:left-0 md:-top-[5px] w-2 h-2 rounded-full bg-neutral-200"></div>
<span className="text-xs font-mono text-neutral-400 mb-2 block">Phase 03</span>
<h3 className="text-sm font-semibold text-neutral-900 mb-2">Planning</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Detailed execution plans with clear milestones and change management protocols.</p>
</div>

<div className="relative pl-6 md:pl-0 border-l-2 md:border-l-0 md:border-t-2 border-neutral-100 pt-0 md:pt-6">
<div className="absolute -left-[5px] top-0 md:left-0 md:-top-[5px] w-2 h-2 rounded-full bg-neutral-200"></div>
<span className="text-xs font-mono text-neutral-400 mb-2 block">Phase 04</span>
<h3 className="text-sm font-semibold text-neutral-900 mb-2">Capability</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Knowledge transfer and internal development for sustained improvement.</p>
</div>
</div>
<div className="mt-12 p-6 bg-neutral-50 border border-neutral-200 rounded-lg inline-flex items-center gap-4 text-sm text-neutral-600">
<i className="w-4 h-4 text-neutral-400" data-lucide="clock"></i>
<span className="font-medium">Project Duration:</span>
<span>Focused Initiatives (15-30 days)</span>
<span className="text-neutral-300">|</span>
<span>Transformations (60-90 days)</span>
</div>
</div>
</section>

<footer className="py-24 bg-white border-t border-neutral-200" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-neutral-900 mb-6">
                Build a system that scales.
            </h2>
<p className="text-lg text-neutral-500 mb-10 leading-relaxed font-light">
                Stop patching isolated problems. Start building an interconnected growth engine.
            </p>
<a className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-md text-sm font-medium transition-all transform hover:-translate-y-1" href="#">
                Schedule Discovery Call
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<div className="mt-20 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
<p>© 2024 Growth Engine System. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Terms</a>
<a className="hover:text-neutral-900 transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
