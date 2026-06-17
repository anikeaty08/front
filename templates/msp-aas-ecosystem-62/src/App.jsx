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
colors: {
neutral: {
850: '#1f1f1f',
950: '#0a0a0a',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}

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
      

<div className="fixed inset-0 pointer-events-none z-0 grid-bg opacity-30"></div>

<nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-b-neutral-800/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-white font-medium tracking-tighter text-lg flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
                MSP-aaS
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#problem">The Problem</a>
<a className="hover:text-white transition-colors" href="#ecosystem">Ecosystem</a>
<a className="hover:text-white transition-colors" href="#partners">Partners</a>
</div>
<a className="text-sm font-medium text-black bg-white px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                Join Ecosystem
            </a>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-300 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                The Operating System for Modern MSPs
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                The MSP Business,<br/>
<span className="text-neutral-500">Delivered as a Service.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Everything required to launch, run, and scale a modern Managed Service Provider, stitched together as a single, proven ecosystem.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group">
                    Join the MSP-aaS Ecosystem
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="mt-20 pt-10 border-t border-neutral-900">
<p className="text-xs text-neutral-500 uppercase tracking-widest mb-6">Built with leading operators &amp; technology partners</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="font-bold tracking-tight text-lg text-white">MICROSOFT</span>
<span className="font-bold tracking-tight text-lg text-white">SENTINELONE</span>
<span className="font-bold tracking-tight text-lg text-white">PAX8</span>
<span className="font-bold tracking-tight text-lg text-white">NINJAONE</span>
<span className="font-bold tracking-tight text-lg text-white">HALOPSA</span>
<span className="font-bold tracking-tight text-lg text-white">HUNTRESS</span>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 bg-neutral-950 border-t border-white/5" id="problem">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div className="sticky top-32">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                        Running an MSP today is harder than ever.
                    </h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-8">
                        Most MSPs don’t fail because of technology. They fail because everything else is fragmented.
                    </p>
<div className="text-sm font-medium text-white flex items-center gap-2">
                        MSP-aaS exists to fix that.
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="grid gap-4">

<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:round-transfer-horizontal-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Tools don’t talk to each other</h3>
<p className="text-sm text-neutral-500">Integrations are brittle or non-existent, creating manual work.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:danger-triangle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Service delivery is inconsistent</h3>
<p className="text-sm text-neutral-500">Without standardized playbooks, quality varies by technician.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Silos everywhere</h3>
<p className="text-sm text-neutral-500">Security, finance, sales, and operations operate in complete isolation.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:user-hand-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Managing chaos vs growing</h3>
<p className="text-sm text-neutral-500">Founders are stuck working in the business, not on the business.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-4xl mx-auto text-center">
<span className="text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-4 block">What is MSP-aaS?</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">
                One stack. One system. <br/>One way to scale.
            </h2>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-16">
                MSP-aaS is the complete operating system for a managed services business. Instead of assembling dozens of vendors on your own, we provide a productized infrastructure.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
<div className="p-6 rounded-xl bg-neutral-900/30 border border-white/10">
<iconify-icon className="text-white mb-4 text-2xl" icon="solar:server-square-linear"></iconify-icon>
<h3 className="text-white font-medium text-sm mb-1">Fully Stitched Ecosystem</h3>
<p className="text-xs text-neutral-500">Integrated tools out of the box.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-900/30 border border-white/10">
<iconify-icon className="text-white mb-4 text-2xl" icon="solar:star-fall-linear"></iconify-icon>
<h3 className="text-white font-medium text-sm mb-1">Best-in-class Partners</h3>
<p className="text-xs text-neutral-500">Pre-vetted technology vendors.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-900/30 border border-white/10">
<iconify-icon className="text-white mb-4 text-2xl" icon="solar:book-bookmark-linear"></iconify-icon>
<h3 className="text-white font-medium text-sm mb-1">Proven Playbooks</h3>
<p className="text-xs text-neutral-500">Operational guides for scale.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-900/30 border border-white/10">
<iconify-icon className="text-white mb-4 text-2xl" icon="solar:box-minimalistic-linear"></iconify-icon>
<h3 className="text-white font-medium text-sm mb-1">Productized SaaS Model</h3>
<p className="text-xs text-neutral-500">Run like a modern software co.</p>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 bg-neutral-900/20 border-t border-white/5" id="ecosystem">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">The MSP-aaS Ecosystem</h2>
<p className="text-neutral-400">Every layer required to run an MSP, delivered as a service.</p>
</div>
<div className="space-y-4">

<div className="group relative rounded-2xl bg-neutral-950 border border-white/10 p-1">
<div className="absolute inset-0 bg-gradient-to-r from-neutral-800/0 via-white/5 to-neutral-800/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
<div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white text-lg font-mono">1</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">Foundation Layer</h3>
<p className="text-sm text-neutral-400 mb-3">Start your MSP the right way.</p>
<div className="flex flex-wrap gap-2 text-xs text-neutral-500">
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">Brand &amp; Identity</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">Legal &amp; Contracts</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">Financial Ops</span>
</div>
</div>
</div>
<div className="w-full md:w-auto border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-8">
<span className="text-[10px] uppercase tracking-wider text-neutral-600 mb-2 block">Powered By</span>
<div className="flex flex-wrap gap-4 text-sm text-neutral-300 font-medium">
<span>Adam</span>
<span className="text-neutral-700">•</span>
<span>MOnjour</span>
<span className="text-neutral-700">•</span>
<span>Pro CFO</span>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-neutral-950 border border-white/10 p-1">
<div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white text-lg font-mono">2</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">Operations Core</h3>
<p className="text-sm text-neutral-400 mb-3">Run a reliable, scalable MSP.</p>
<div className="flex flex-wrap gap-2 text-xs text-neutral-500">
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">Service Desk</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">NOC &amp; SOC</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">PSA &amp; RMM</span>
</div>
</div>
</div>
<div className="w-full md:w-auto border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-8">
<span className="text-[10px] uppercase tracking-wider text-neutral-600 mb-2 block">Powered By</span>
<div className="flex flex-wrap gap-4 text-sm text-neutral-300 font-medium">
<span>NocDoc</span>
<span className="text-neutral-700">•</span>
<span>Halo</span>
<span className="text-neutral-700">•</span>
<span>NinjaOne</span>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-neutral-950 border border-white/10 p-1">
<div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white text-lg font-mono">3</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">Security Stack</h3>
<p className="text-sm text-neutral-400 mb-3">Protect clients by default.</p>
<div className="flex flex-wrap gap-2 text-xs text-neutral-500">
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">Endpoint</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">MDR</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">Compliance</span>
</div>
</div>
</div>
<div className="w-full md:w-auto border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-8">
<span className="text-[10px] uppercase tracking-wider text-neutral-600 mb-2 block">Powered By</span>
<div className="flex flex-wrap gap-4 text-sm text-neutral-300 font-medium">
<span>Microsoft</span>
<span className="text-neutral-700">•</span>
<span>SentinelOne</span>
<span className="text-neutral-700">•</span>
<span>Huntress</span>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-neutral-950 border border-white/10 p-1">
<div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white text-lg font-mono">4</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">Productivity Stack</h3>
<p className="text-sm text-neutral-400 mb-3">Enable how clients work.</p>
<div className="flex flex-wrap gap-2 text-xs text-neutral-500">
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">Cloud Productivity</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">Identity</span>
</div>
</div>
</div>
<div className="w-full md:w-auto border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-8">
<span className="text-[10px] uppercase tracking-wider text-neutral-600 mb-2 block">Powered By</span>
<div className="flex flex-wrap gap-4 text-sm text-neutral-300 font-medium">
<span>Microsoft</span>
<span className="text-neutral-700">•</span>
<span>Google</span>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-neutral-950 border border-white/10 p-1">
<div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white text-lg font-mono">5</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">Commerce &amp; Scale</h3>
<p className="text-sm text-neutral-400 mb-3">Monetize and grow efficiently.</p>
<div className="flex flex-wrap gap-2 text-xs text-neutral-500">
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">Aggregation</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">Financing</span>
</div>
</div>
</div>
<div className="w-full md:w-auto border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-8">
<span className="text-[10px] uppercase tracking-wider text-neutral-600 mb-2 block">Powered By</span>
<div className="flex flex-wrap gap-4 text-sm text-neutral-300 font-medium">
<span>3l4v8</span>
<span className="text-neutral-700">•</span>
<span>Pax8</span>
<span className="text-neutral-700">•</span>
<span>Tech Data</span>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-neutral-950 border border-white/10 p-1">
<div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white text-lg font-mono">6</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">Growth Engine</h3>
<p className="text-sm text-neutral-400 mb-3">Acquire and retain customers.</p>
<div className="flex flex-wrap gap-2 text-xs text-neutral-500">
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">SEO</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">Demand Gen</span>
</div>
</div>
</div>
<div className="w-full md:w-auto border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-8">
<span className="text-[10px] uppercase tracking-wider text-neutral-600 mb-2 block">Powered By</span>
<div className="flex flex-wrap gap-4 text-sm text-neutral-300 font-medium">
<span>Mathi Designs</span>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-neutral-950 border border-white/10 p-1">
<div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white text-lg font-mono">7</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">Playbooks &amp; Best Practices</h3>
<p className="text-sm text-neutral-400 mb-3">Operate like the top 1%.</p>
<div className="flex flex-wrap gap-2 text-xs text-neutral-500">
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">Pricing Models</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">Hiring</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-white/5">GTM</span>
</div>
</div>
</div>
<div className="w-full md:w-auto border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-8">
<span className="text-[10px] uppercase tracking-wider text-neutral-600 mb-2 block">Format</span>
<div className="flex flex-wrap gap-4 text-sm text-neutral-300 font-medium">
<span>Frameworks</span>
<span className="text-neutral-700">•</span>
<span>Guides</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-12">Who MSP-aaS is built for</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-white/30 transition-colors">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">New MSP Founders</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Launch faster without expensive trial and error. Start with a mature stack on day one.</p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-white/30 transition-colors">
<iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Growing MSPs ($1M–$10M)</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Replace fragmentation with a scalable operating system. Break through the complexity ceiling.</p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-white/30 transition-colors">
<iconify-icon icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Ambitious Operators</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Standardize operations, improve margins, and grow predictably with proven frameworks.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/10 border-y border-white/5">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12">MSP-aaS is orchestration.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5">
<div className="flex justify-center mb-4 text-green-500">
<iconify-icon icon="solar:link-circle-linear" width="28"></iconify-icon>
</div>
<p className="text-white font-medium mb-1">Partners are integrated</p>
<p className="text-xs text-neutral-500">Not just listed.</p>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5">
<div className="flex justify-center mb-4 text-blue-500">
<iconify-icon icon="solar:box-linear" width="28"></iconify-icon>
</div>
<p className="text-white font-medium mb-1">Services are productized</p>
<p className="text-xs text-neutral-500">Not improvised.</p>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5">
<div className="flex justify-center mb-4 text-purple-500">
<iconify-icon icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<p className="text-white font-medium mb-1">Growth is designed</p>
<p className="text-xs text-neutral-500">Not guessed.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="partners">
<div className="max-w-5xl mx-auto rounded-3xl bg-neutral-900/30 border border-white/10 p-10 md:p-16 text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Built with the best. Open to the bold.</h2>
<p className="text-neutral-400 max-w-xl mx-auto mb-10">
                    MSP-aaS brings together service providers, platform vendors, and specialists aligned around one goal: building better MSP businesses.
                </p>
<button className="px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                    Apply to Become a Partner
                </button>
</div>
</div>
</section>

<footer className="py-20 px-6 border-t border-white/10 bg-black">
<div className="max-w-xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                The future of managed services is productized.
            </h2>
<p className="text-lg text-neutral-500 mb-10">
                If you’re building, running, or supporting MSPs, MSP-aaS is your ecosystem.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#">
                    Explore the MSP-aaS Ecosystem
                </a>
<p className="text-xs text-neutral-600 mt-4">© 2024 MSP-aaS. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
