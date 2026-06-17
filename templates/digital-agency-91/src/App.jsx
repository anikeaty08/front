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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
base: '#0D0D0D',
surface: '#0F1113',
indigo: '#1A1B4B',
cyan: '#00F0FF',
violet: '#8B5CF6',
},
spacing: {
'18': '4.5rem',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-green/40 rounded-full blur-[150px] pointer-events-none -z-10"></div>
<div className="fixed bottom-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-amber/20 rounded-full blur-[150px] pointer-events-none -z-10"></div>

<header className="fixed top-0 inset-x-0 z-50 bg-base/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 md:h-20">

<div className="flex-shrink-0 flex items-center">
<a className="text-white font-bold text-xl tracking-tighter flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green to-cyan flex items-center justify-center">
<span className="text-white text-sm font-bold tracking-tight">B</span>
</div>
<span className="tracking-tighter">BRANDNAME</span>
</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#strategy">Process</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all rounded-full bg-green hover:bg-green/80 border border-cyan/30 shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]" href="#contact">
                        Get a Quote
                    </a>
<button className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<main className="flex-grow pt-24 md:pt-32">

<section className="sm:px-6 lg:px-8 lg:pt-20 lg:pb-32 max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-20 pl-4 relative">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl text-center lg:text-left z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
<span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
<span className="text-xs font-medium text-slate-300">Accepting new projects</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                        We Build Software That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-amber">Scales</span> with Your Ambition.
                    </h1>
<p className="text-lg sm:text-xl text-slate-400 font-medium mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Transform your operational bottlenecks into streamlined digital products. We engineer high-performance web and mobile platforms for forward-thinking brands.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white transition-all rounded-full bg-green border border-cyan/30 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] group" href="#contact">
                            Get a Quote
                            <iconify-icon className="ml-2 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white transition-all rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md" href="#work">
                            View Portfolio
                        </a>
</div>

<div className="mt-12 pt-8 border-t border-white/5">
<p className="text-xs font-medium text-slate-500 mb-4 tracking-wider uppercase">Trusted by innovative teams</p>
<div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 opacity-60 grayscale">
<iconify-icon className="text-3xl" icon="solar:shield-check-linear"></iconify-icon>
<iconify-icon className="text-3xl" icon="solar:graph-up-linear"></iconify-icon>
<iconify-icon className="text-3xl" icon="solar:global-linear"></iconify-icon>
<iconify-icon className="text-3xl" icon="solar:cpu-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto perspective-1000">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan/30 rounded-full blur-[100px]"></div>

<div className="relative w-full h-full flex items-center justify-center transform-style-3d animate-[spin_20s_linear_infinite] hover:[animation-play-state:paused]">

<div className="absolute inset-8 bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-2xl shadow-2xl p-6 flex flex-col gap-4 transform rotate-y-12 rotate-x-6">
<div className="w-full h-12 bg-white/5 rounded-xl border border-white/5 flex items-center px-4 gap-3">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="flex-grow bg-gradient-to-br from-green/20 to-transparent rounded-xl border border-white/5 p-4 flex flex-col gap-3">
<div className="w-1/3 h-4 bg-white/10 rounded"></div>
<div className="w-full h-24 bg-white/5 rounded-lg mt-auto"></div>
</div>
</div>

<div className="absolute -right-4 top-1/4 w-32 h-40 bg-surface/80 border border-cyan/20 rounded-2xl backdrop-blur-xl p-4 shadow-xl transform -rotate-y-12 translate-z-10 glow-border flex flex-col justify-between">
<iconify-icon className="text-cyan text-2xl" icon="solar:chart-square-linear"></iconify-icon>
<div>
<div className="text-white font-bold text-lg tracking-tight">+142%</div>
<div className="text-xs text-slate-400">Scale Rate</div>
</div>
</div>

<div className="absolute -left-8 bottom-1/4 w-40 h-24 bg-surface/80 border border-amber/20 rounded-2xl backdrop-blur-xl p-4 shadow-xl transform rotate-y-12 translate-z-20 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber/20 flex items-center justify-center">
<iconify-icon className="text-amber text-xl" icon="solar:code-circle-linear"></iconify-icon>
</div>
<div>
<div className="w-12 h-2 bg-white/20 rounded mb-2"></div>
<div className="w-8 h-2 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full bg-white/[0.02] border-y border-white/5 py-8 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-base to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-base to-transparent z-10"></div>
<div className="flex items-center gap-12 px-8 w-max animate-[slide_30s_linear_infinite] opacity-60">
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:database-linear"></iconify-icon><span className="text-sm font-semibold tracking-tight">PostgreSQL</span></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:server-square-linear"></iconify-icon><span className="text-sm font-semibold tracking-tight">Node.js</span></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:monitor-smartphone-linear"></iconify-icon><span className="text-sm font-semibold tracking-tight">React</span></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:cloud-linear"></iconify-icon><span className="text-sm font-semibold tracking-tight">AWS</span></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:cpu-bolt-linear"></iconify-icon><span className="text-sm font-semibold tracking-tight">TensorFlow</span></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>

<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:database-linear"></iconify-icon><span className="text-sm font-semibold tracking-tight">PostgreSQL</span></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:server-square-linear"></iconify-icon><span className="text-sm font-semibold tracking-tight">Node.js</span></div>
</div>
<style>
                @keyframes slide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            </style>
</div>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="services">
<div className="mb-12 md:mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Core Capabilities</h2>
<p className="text-slate-400 font-medium max-w-2xl text-base">We provide end-to-end engineering and design services, delivering products that function flawlessly and look exceptional.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">

<a className="group relative md:col-span-2 md:row-span-2 bg-surface border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-cyan/30 transition-all duration-300 flex flex-col justify-end min-h-[300px]" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-cyan group-hover:border-cyan transition-colors">
<iconify-icon className="text-white text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<iconify-icon className="text-cyan text-4xl mb-auto" icon="solar:window-frame-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="relative z-10 mt-12">
<h3 className="text-2xl font-bold text-white tracking-tight mb-2">Web Applications</h3>
<p className="text-sm text-slate-400 font-medium line-clamp-2">Scalable, responsive, and secure web platforms built with modern Javascript frameworks and robust backend architectures.</p>
</div>
</a>

<a className="group relative md:col-span-2 md:row-span-1 bg-surface border border-white/5 rounded-3xl p-6 overflow-hidden hover:border-amber/30 transition-all duration-300 flex flex-col justify-between" href="#">
<div className="flex justify-between items-start">
<iconify-icon className="text-amber text-3xl" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-slate-500 group-hover:text-white transition-colors text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="mt-8">
<h3 className="text-xl font-bold text-white tracking-tight mb-1">Mobile Development</h3>
<p className="text-sm text-slate-400 font-medium">Native and cross-platform mobile experiences for iOS and Android.</p>
</div>
</a>

<a className="group relative col-span-1 bg-surface border border-white/5 rounded-3xl p-6 hover:bg-white/[0.03] transition-all duration-300 flex flex-col" href="#">
<iconify-icon className="text-slate-300 text-2xl mb-4 group-hover:text-cyan transition-colors" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-bold text-white tracking-tight mb-2 mt-auto">UI/UX Design</h3>
<p className="text-xs text-slate-400 font-medium">Intuitive interfaces designed for conversion.</p>
</a>

<a className="group relative col-span-1 bg-surface border border-white/5 rounded-3xl p-6 hover:bg-white/[0.03] transition-all duration-300 flex flex-col" href="#">
<iconify-icon className="text-slate-300 text-2xl mb-4 group-hover:text-cyan transition-colors" icon="solar:server-path-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-bold text-white tracking-tight mb-2 mt-auto">Cloud Infrastructure</h3>
<p className="text-xs text-slate-400 font-medium">AWS &amp; GCP architecture deployment.</p>
</a>

<a className="group relative md:col-span-2 lg:col-span-1 bg-surface border border-white/5 rounded-3xl p-6 hover:bg-white/[0.03] transition-all duration-300 flex flex-col glow-border" href="#">
<iconify-icon className="text-cyan text-2xl mb-4" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-bold text-white tracking-tight mb-2 mt-auto">AI Integration</h3>
<p className="text-xs text-slate-400 font-medium">Implement LLMs and machine learning into your workflow.</p>
</a>
</div>
</section>

<section className="py-24 border-y border-white/5 relative overflow-hidden bg-surface/50">
<div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05),transparent_50%)]"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:divide-x divide-white/10">
<div className="flex flex-col items-center justify-center">
<div className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">99.9%</div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Uptime Delivered</div>
</div>
<div className="flex flex-col items-center justify-center">
<div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-white tracking-tight mb-2">$2B+</div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Revenue Processed</div>
</div>
<div className="flex flex-col items-center justify-center">
<div className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">40<span className="text-cyan">+</span></div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Enterprise Clients</div>
</div>
<div className="flex flex-col items-center justify-center">
<div className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">&lt;20<span className="text-sm font-medium text-slate-500 ml-1">ms</span></div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Average Latency</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-gradient-to-b from-transparent to-surface/30" id="strategy">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">How We Work</h2>
<p className="text-slate-400 font-medium text-base">A transparent, iterative process designed to mitigate risk and accelerate time-to-market.</p>
</div>

<div className="flex gap-4 overflow-x-auto hide-scroll pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0">

<div className="flex-none w-72 sm:w-auto bg-surface border border-white/5 rounded-2xl p-6 relative">
<div className="text-4xl font-bold text-white/5 absolute top-4 right-4 tracking-tighter">01</div>
<iconify-icon className="text-2xl text-cyan mb-6" icon="solar:lightbulb-bolt-linear"></iconify-icon>
<h3 className="text-lg font-bold text-white tracking-tight mb-2">Discovery</h3>
<p className="text-sm text-slate-400 font-medium">We define goals, technical requirements, and project scope.</p>
</div>

<div className="flex-none w-72 sm:w-auto bg-green/10 border border-cyan/30 rounded-2xl p-6 relative shadow-[0_0_30px_rgba(0,240,255,0.05)] transform scale-[1.02] transition-transform">
<div className="text-4xl font-bold text-cyan/10 absolute top-4 right-4 tracking-tighter">02</div>
<iconify-icon className="text-2xl text-cyan mb-6" icon="solar:pen-linear"></iconify-icon>
<h3 className="text-lg font-bold text-white tracking-tight mb-2">Design</h3>
<p className="text-sm text-slate-300 font-medium mb-4">Wireframing, prototyping, and finalizing the visual language.</p>
<ul className="text-xs text-slate-400 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-cyan" icon="solar:check-circle-linear"></iconify-icon> User Flows</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan" icon="solar:check-circle-linear"></iconify-icon> High-Fidelity UI</li>
</ul>
</div>

<div className="flex-none w-72 sm:w-auto bg-surface border border-white/5 rounded-2xl p-6 relative">
<div className="text-4xl font-bold text-white/5 absolute top-4 right-4 tracking-tighter">03</div>
<iconify-icon className="text-2xl text-cyan mb-6" icon="solar:code-scan-linear"></iconify-icon>
<h3 className="text-lg font-bold text-white tracking-tight mb-2">Build</h3>
<p className="text-sm text-slate-400 font-medium">Agile development sprints with regular progress reviews.</p>
</div>

<div className="flex-none w-72 sm:w-auto bg-surface border border-white/5 rounded-2xl p-6 relative">
<div className="text-4xl font-bold text-white/5 absolute top-4 right-4 tracking-tighter">04</div>
<iconify-icon className="text-2xl text-cyan mb-6" icon="solar:rocket-linear"></iconify-icon>
<h3 className="text-lg font-bold text-white tracking-tight mb-2">Scale</h3>
<p className="text-sm text-slate-400 font-medium">Deployment, monitoring, and ongoing iteration support.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative" id="work">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Featured Work</h2>
<p className="text-slate-400 font-medium text-base">Impactful solutions delivered for modern enterprises.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-white transition-colors group" href="#">
                    View all case studies 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="group cursor-pointer">

<div className="w-full aspect-[4/3] bg-surface rounded-3xl border border-white/5 mb-6 overflow-hidden relative flex items-center justify-center p-8 group-hover:border-white/20 transition-colors">

<div className="w-full h-full bg-[#111] rounded-xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col">
<div className="h-6 w-full bg-white/5 flex items-center px-4 gap-2 border-b border-white/5">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<div className="flex-grow p-4 grid grid-cols-3 gap-4">
<div className="col-span-2 bg-green/20 rounded-lg border border-white/5"></div>
<div className="col-span-1 bg-white/5 rounded-lg"></div>
</div>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-semibold px-2 py-1 bg-white/5 rounded text-slate-300">Fintech</span>
<span className="text-xs font-semibold px-2 py-1 bg-white/5 rounded text-slate-300">Web App</span>
</div>
<h3 className="text-2xl font-bold text-white tracking-tight mb-2">Nova Financial Dashboard</h3>
<p className="text-base text-slate-400 font-medium mb-4 line-clamp-2">Redesigned the core trading platform, reducing user latency by 40% and increasing daily active trades.</p>
<div className="text-sm font-semibold text-cyan">Read Case Study →</div>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="w-full aspect-[4/3] bg-surface rounded-3xl border border-white/5 mb-6 overflow-hidden relative flex items-center justify-center p-8 group-hover:border-white/20 transition-colors">

<div className="w-48 h-[28rem] bg-[#111] rounded-[2.5rem] border-[6px] border-surface shadow-2xl relative overflow-hidden flex flex-col ring-1 ring-white/10">
<div className="absolute top-0 inset-x-0 h-6 bg-surface rounded-b-xl w-1/2 mx-auto"></div>
<div className="mt-8 px-4 flex flex-col gap-4">
<div className="w-full h-32 bg-gradient-to-b from-amber/20 to-transparent rounded-2xl border border-white/5"></div>
<div className="w-full h-12 bg-white/5 rounded-xl"></div>
<div className="w-full h-12 bg-white/5 rounded-xl"></div>
</div>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-semibold px-2 py-1 bg-white/5 rounded text-slate-300">Healthcare</span>
<span className="text-xs font-semibold px-2 py-1 bg-white/5 rounded text-slate-300">iOS &amp; Android</span>
</div>
<h3 className="text-2xl font-bold text-white tracking-tight mb-2">Aura Patient Portal</h3>
<p className="text-base text-slate-400 font-medium mb-4 line-clamp-2">A HIPAA-compliant mobile application connecting patients with telehealth providers seamlessly.</p>
<div className="text-sm font-semibold text-cyan">Read Case Study →</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Trusted by Industry Leaders</h2>
<p className="text-slate-400 font-medium text-base">We partner with ambitious teams to deliver exceptional digital experiences. Here is what they have to say.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors flex flex-col h-full">
<div className="flex gap-1 text-cyan mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 font-medium text-sm leading-relaxed mb-8 flex-grow">"They didn't just build what we asked for; they understood our business model and engineered a platform that accelerated our growth beyond our initial projections."</p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan/20 to-green/40 border border-white/10 flex items-center justify-center text-white font-bold text-xs tracking-tight">SJ</div>
<div>
<div className="text-white font-semibold text-sm">Sarah Jenkins</div>
<div className="text-slate-500 text-xs font-medium">VP Engineering, Nova</div>
</div>
</div>
</div>

<div className="bg-gradient-to-b from-green/10 to-surface border border-cyan/20 rounded-3xl p-8 md:translate-y-8 flex flex-col h-full glow-border shadow-[0_0_30px_rgba(0,240,255,0.05)]">
<div className="flex gap-1 text-cyan mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-white font-medium text-sm leading-relaxed mb-8 flex-grow">"The level of technical rigor and design polish is unmatched. Their team felt like an internal unit, pushing our product to standards we didn't know were possible."</p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber/40 to-cyan/20 border border-white/10 flex items-center justify-center text-white font-bold text-xs tracking-tight">MR</div>
<div>
<div className="text-white font-semibold text-sm">Marcus Rodriguez</div>
<div className="text-slate-400 text-xs font-medium">Founder, Aura Health</div>
</div>
</div>
</div>

<div className="bg-surface border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors flex flex-col h-full">
<div className="flex gap-1 text-cyan mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 font-medium text-sm leading-relaxed mb-8 flex-grow">"Transitioning our legacy infrastructure to a modern cloud-native stack was daunting. BrandName executed flawlessly with zero downtime for our users."</p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white font-bold text-xs tracking-tight">AL</div>
<div>
<div className="text-white font-semibold text-sm">Amanda Lin</div>
<div className="text-slate-500 text-xs font-medium">CTO, Nexus Corp</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-t border-white/5 mt-12 md:mt-0" id="pricing">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-green/10 rounded-[100%] blur-[80px] pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Transparent Engagement Models</h2>
<p className="text-slate-400 font-medium text-base mb-8 max-w-2xl mx-auto">Choose the model that fits your project scope and organizational needs.</p>

<div className="flex justify-center mb-16">
<div className="inline-flex items-center p-1 bg-base border border-white/10 rounded-full shadow-inner">
<button className="px-6 py-2 rounded-full bg-white/10 text-white text-sm font-semibold shadow-[0_0_10px_rgba(255,255,255,0.05)] transition-all">Monthly</button>
<button className="px-6 py-2 rounded-full text-slate-500 hover:text-slate-300 text-sm font-medium transition-all group flex items-center gap-2">
                            Annually 
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan/10 text-cyan border border-cyan/20 group-hover:border-cyan/40 transition-colors">-20%</span>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">

<div className="bg-surface border border-white/5 rounded-3xl p-8 flex flex-col">
<h3 className="text-xl font-bold text-white tracking-tight mb-2">Team Augmentation</h3>
<p className="text-sm text-slate-400 font-medium mb-6 h-10">Integrate our senior engineers directly into your workflows.</p>
<div className="text-3xl font-bold text-white tracking-tight mb-8">Custom<span className="text-sm text-slate-500 font-medium"> / mo</span></div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-slate-300 font-medium"><iconify-icon className="text-slate-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Dedicated developers</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-medium"><iconify-icon className="text-slate-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Direct communication</li>
</ul>
<button className="w-full py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-colors">Let's Talk</button>
</div>

<div className="bg-gradient-to-b from-green/30 to-surface border border-cyan/30 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(0,240,255,0.1)] glow-border z-10">
<div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
<span className="bg-cyan text-base font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">Recommended</span>
</div>
<h3 className="text-xl font-bold text-white tracking-tight mb-2">Project Based</h3>
<p className="text-sm text-slate-400 font-medium mb-6 h-10">End-to-end delivery of a defined product or feature set.</p>
<div className="text-3xl font-bold text-white tracking-tight mb-8">Fixed Price</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-slate-300 font-medium"><iconify-icon className="text-cyan mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Full-cycle development</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-medium"><iconify-icon className="text-cyan mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Project management included</li>
</ul>
<button className="w-full py-3 rounded-full bg-green border border-cyan/30 text-white font-semibold text-sm hover:bg-green/80 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.2)]">Get an Estimate</button>
</div>

<div className="bg-surface border border-white/5 rounded-3xl p-8 flex flex-col">
<h3 className="text-xl font-bold text-white tracking-tight mb-2">Retainer</h3>
<p className="text-sm text-slate-400 font-medium mb-6 h-10">Ongoing design, maintenance, and iterative improvements.</p>
<div className="text-3xl font-bold text-white tracking-tight mb-8">From $5k<span className="text-sm text-slate-500 font-medium"> / mo</span></div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-slate-300 font-medium"><iconify-icon className="text-slate-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Guaranteed hours</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-medium"><iconify-icon className="text-slate-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Priority support</li>
</ul>
<button className="w-full py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-colors">View Details</button>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Frequently Asked Questions</h2>
<p className="text-slate-400 font-medium text-base">Everything you need to know about partnering with us.</p>
</div>
<div className="space-y-4">

<details className="group bg-surface border border-white/5 rounded-2xl open:border-white/20 transition-all duration-300">
<summary className="flex justify-between items-center font-semibold cursor-pointer p-6 text-white hover:text-cyan transition-colors select-none">
<span className="text-sm">What is your typical project timeline?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center justify-center w-6 h-6 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan/30 text-slate-400 group-hover:text-cyan">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 text-sm font-medium px-6 pb-6 pt-0 leading-relaxed">
                        Project timelines vary significantly based on scope. A typical MVP web application takes 8-12 weeks from discovery to launch, while complex enterprise platforms can take 4-6 months. We break deliverables into agile 2-week sprints.
                    </div>
</details>

<details className="group bg-surface border border-white/5 rounded-2xl open:border-white/20 transition-all duration-300">
<summary className="flex justify-between items-center font-semibold cursor-pointer p-6 text-white hover:text-cyan transition-colors select-none">
<span className="text-sm">Do you offer post-launch support and maintenance?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center justify-center w-6 h-6 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan/30 text-slate-400 group-hover:text-cyan">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 text-sm font-medium px-6 pb-6 pt-0 leading-relaxed">
                        Yes, absolutely. We offer dedicated retainer models post-launch to handle server monitoring, bug fixes, dependency updates, and continuous iteration on new features.
                    </div>
</details>

<details className="group bg-surface border border-white/5 rounded-2xl open:border-white/20 transition-all duration-300">
<summary className="flex justify-between items-center font-semibold cursor-pointer p-6 text-white hover:text-cyan transition-colors select-none">
<span className="text-sm">What technologies do you specialize in?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center justify-center w-6 h-6 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan/30 text-slate-400 group-hover:text-cyan">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 text-sm font-medium px-6 pb-6 pt-0 leading-relaxed">
                        Our primary stack includes React/Next.js for the frontend, Node.js and Python for the backend, and PostgreSQL/MongoDB for databases. We deploy primarily on AWS and Vercel infrastructure.
                    </div>
</details>

<details className="group bg-surface border border-white/5 rounded-2xl open:border-white/20 transition-all duration-300">
<summary className="flex justify-between items-center font-semibold cursor-pointer p-6 text-white hover:text-cyan transition-colors select-none">
<span className="text-sm">Can you integrate with our existing in-house team?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center justify-center w-6 h-6 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan/30 text-slate-400 group-hover:text-cyan">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 text-sm font-medium px-6 pb-6 pt-0 leading-relaxed">
                        Yes. Through our Team Augmentation model, our senior engineers integrate seamlessly into your Jira boards, Slack channels, and daily stand-ups to act as a direct extension of your team.
                    </div>
</details>
</div>
</section>
</main>

<footer className="bg-surface border-t border-white/5 pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-1">
<a className="text-white font-bold text-xl tracking-tighter flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green to-cyan flex items-center justify-center">
<span className="text-white text-sm font-bold">B</span>
</div>
                        BRANDNAME
                    </a>
<p className="text-sm text-slate-400 font-medium mb-6 leading-relaxed">Engineering digital products that scale with your ambition. Based in San Francisco, working globally.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-semibold text-sm tracking-tight mb-6 uppercase">Services</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-400 hover:text-cyan transition-colors font-medium" href="#">Web Development</a></li>
<li><a className="text-sm text-slate-400 hover:text-cyan transition-colors font-medium" href="#">Mobile Applications</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold text-sm tracking-tight mb-6 uppercase">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors font-medium" href="#">About Us</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors font-medium" href="#">Case Studies</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold text-sm tracking-tight mb-6 uppercase">Stay Updated</h4>
<p className="text-sm text-slate-400 font-medium mb-4">Insights on product engineering, right to your inbox.</p>
<form className="flex flex-col gap-3">
<div className="relative">
<input className="w-full bg-base border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all" placeholder="Email address" type="email"/>
</div>
<button className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-colors" type="submit">Subscribe</button>

<label className="flex items-start gap-2 mt-2 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-white/20 bg-base peer-checked:bg-cyan peer-checked:border-cyan transition-colors"></div>
<iconify-icon className="absolute text-base text-transparent peer-checked:text-base opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium">I agree to receive marketing emails.</span>
</label>
</form>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500 font-medium">© 2024 BrandName Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-500 hover:text-white transition-colors font-medium" href="#">Privacy Policy</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors font-medium" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
