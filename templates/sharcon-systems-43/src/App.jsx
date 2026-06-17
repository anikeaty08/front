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
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-900/80 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="iconify text-white group-hover:text-neutral-400 transition-colors" data-icon="lucide:hexagon" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-semibold tracking-widest text-white">SHARCON</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-neutral-950 bg-white rounded hover:bg-neutral-200 transition-colors" href="#contact">
                Partner with us
            </a>

<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neutral-800/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-neutral-800 bg-neutral-900/50">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
</span>
<span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">System Architecture &amp; Design</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8">
                    Architecting the future of <span className="text-neutral-500">digital enterprise.</span>
</h1>
<p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mb-10 font-light">
                    We engineer high-performance digital ecosystems. From bespoke ERP integrations to AI-driven automation, Sharcon transforms complex business logic into scalable software infrastructure.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-950 bg-white rounded hover:bg-neutral-200 transition-all" href="#contact">
                        Initiate Project
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-300 border border-neutral-800 bg-neutral-900/50 rounded hover:border-neutral-600 hover:text-white transition-all" href="#work">
                        View Architecture
                    </a>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-neutral-900 bg-neutral-950" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Core Capabilities</h2>
<p className="text-neutral-400 text-sm max-w-md">We don't just write code; we build the engines that power your business operations.</p>
</div>
<a className="text-sm text-white border-b border-neutral-700 pb-0.5 hover:border-white transition-colors" href="#">View full technical stack</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded border border-neutral-800 bg-neutral-900/20 hover:border-neutral-700 transition-all duration-300">
<div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:text-white text-neutral-400 transition-colors">
<span className="iconify" data-icon="lucide:layout-grid" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Enterprise Platforms</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Custom-built web applications and portals designed for high throughput, security, and complex user permissions.
                    </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-500">
<span className="iconify" data-icon="lucide:check" width="12"></span> React / Next.js
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-500">
<span className="iconify" data-icon="lucide:check" width="12"></span> Microservices
                        </li>
</ul>
</div>

<div className="group p-8 rounded border border-neutral-800 bg-neutral-900/20 hover:border-neutral-700 transition-all duration-300">
<div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:text-white text-neutral-400 transition-colors">
<span className="iconify" data-icon="lucide:database" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">CRM &amp; ERP Systems</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Centralizing data by architecting bespoke CRM solutions or integrating existing ERPs for unified operational clarity.
                    </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-500">
<span className="iconify" data-icon="lucide:check" width="12"></span> Data Migration
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-500">
<span className="iconify" data-icon="lucide:check" width="12"></span> API Middleware
                        </li>
</ul>
</div>

<div className="group p-8 rounded border border-neutral-800 bg-neutral-900/20 hover:border-neutral-700 transition-all duration-300">
<div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:text-white text-neutral-400 transition-colors">
<span className="iconify" data-icon="lucide:workflow" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Automation &amp; AI</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Reducing manual overhead by deploying intelligent agents and automated workflows that scale with your volume.
                    </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-500">
<span className="iconify" data-icon="lucide:check" width="12"></span> LLM Integration
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-500">
<span className="iconify" data-icon="lucide:check" width="12"></span> Process Mining
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900" id="methodology">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Systematic Execution</h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                        We avoid ambiguity. Our engineering process is rooted in systems thinking, ensuring that every line of code contributes to a robust, scalable architecture.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-xs text-white bg-neutral-900">01</div>
<div className="w-px h-full bg-neutral-800 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-white font-medium mb-2">Audit &amp; Blueprint</h4>
<p className="text-sm text-neutral-500">We analyze your current technical debt and operational bottlenecks to design a future-proof architecture.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-xs text-white bg-neutral-900">02</div>
<div className="w-px h-full bg-neutral-800 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-white font-medium mb-2">Develop &amp; Integrate</h4>
<p className="text-sm text-neutral-500">Agile sprints focused on shipping functional modules. rigorous testing and seamless integration with existing stacks.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-xs text-white bg-neutral-900">03</div>
</div>
<div>
<h4 className="text-white font-medium mb-2">Scale &amp; Optimize</h4>
<p className="text-sm text-neutral-500">Post-launch monitoring, performance tuning, and iterative improvements driven by real-world usage data.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] bg-neutral-900 rounded border border-neutral-800 overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/30 to-transparent"></div>
<div className="w-3/4 space-y-3 opacity-60">
<div className="h-2 w-1/3 bg-neutral-700 rounded"></div>
<div className="h-2 w-1/2 bg-neutral-800 rounded"></div>
<div className="h-2 w-3/4 bg-neutral-800 rounded"></div>
<div className="h-2 w-full bg-neutral-800 rounded"></div>
<div className="h-2 w-2/3 bg-neutral-800 rounded"></div>
<div className="mt-4 flex gap-2">
<div className="h-2 w-12 bg-neutral-600 rounded"></div>
<div className="h-2 w-12 bg-neutral-600 rounded"></div>
</div>
</div>

<div className="absolute bottom-8 right-8 bg-neutral-950 border border-neutral-800 p-4 rounded shadow-2xl">
<div className="flex items-center gap-3">
<div className="text-emerald-500">
<span className="iconify" data-icon="lucide:activity" width="20"></span>
</div>
<div>
<div className="text-xs text-neutral-400">System Uptime</div>
<div className="text-sm font-medium text-white">99.99%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-neutral-900 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left border-r border-neutral-900 last:border-0">
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">Sectors</div>
<div className="text-white font-medium">Fintech, Logistics, SaaS</div>
</div>
<div className="text-center md:text-left border-r border-neutral-900 last:border-0">
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">Integrations</div>
<div className="text-white font-medium">Salesforce, SAP, Stripe</div>
</div>
<div className="text-center md:text-left border-r border-neutral-900 last:border-0">
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">Efficiency</div>
<div className="text-white font-medium">Automating 40% Workload</div>
</div>
<div className="text-center md:text-left">
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">Security</div>
<div className="text-white font-medium">SOC2 Compliant Design</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900" id="work">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12">Selected Case Studies</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-video bg-neutral-900 border border-neutral-800 rounded mb-6 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center group-hover:bg-neutral-800 transition-colors duration-500">
<span className="iconify text-neutral-700 group-hover:text-neutral-600 transition-colors" data-icon="lucide:building-2" width="64"></span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white group-hover:underline decoration-neutral-600 underline-offset-4 decoration-1">Global Logistics Provider</h3>
<p className="text-sm text-neutral-500 mt-2">Custom ERP rewrite reducing data latency by 65%.</p>
</div>
<span className="iconify text-neutral-600 group-hover:text-white transition-colors" data-icon="lucide:arrow-up-right" width="20"></span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-neutral-900 border border-neutral-800 rounded mb-6 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center group-hover:bg-neutral-800 transition-colors duration-500">
<span className="iconify text-neutral-700 group-hover:text-neutral-600 transition-colors" data-icon="lucide:cpu" width="64"></span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white group-hover:underline decoration-neutral-600 underline-offset-4 decoration-1">Fintech Data Pipeline</h3>
<p className="text-sm text-neutral-500 mt-2">Unified 12 disparate data streams into a real-time dashboard.</p>
</div>
<span className="iconify text-neutral-600 group-hover:text-white transition-colors" data-icon="lucide:arrow-up-right" width="20"></span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-900 bg-neutral-950 pt-24 pb-12" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-24">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to scale your infrastructure?</h2>
<p className="text-neutral-400 mb-10 text-lg">We partner with ambitious companies to build the technology that defines their next chapter.</p>
<form className="space-y-4 max-w-md">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Work Email</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-neutral-600 transition-colors placeholder:text-neutral-700" placeholder="name@company.com" type="email"/>
</div>
<button className="w-full bg-white text-neutral-950 font-medium text-sm py-3 rounded hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" type="button">
                        Request Consultation
                    </button>
</form>
</div>
<div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-neutral-600" data-icon="lucide:hexagon" data-width="16"></span>
<span className="text-xs font-semibold tracking-widest text-neutral-500">SHARCON</span>
</div>
<div className="flex gap-8 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
<div className="text-xs text-neutral-600">
                    © 2024 Sharcon Systems. All rights reserved.
                </div>
</div>
</div>
</footer>

    </>
  );
}
