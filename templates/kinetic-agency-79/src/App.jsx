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
      

<div className="fixed inset-0 z-[-1] bg-[#09090b]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

<div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay"></div>

<div className="absolute inset-0 bg-[#09090b] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,#000_100%)] pointer-events-none"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-[#09090b]/60 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-zinc-100 flex items-center gap-2 group" href="#home">
<iconify-icon className="group-hover:rotate-12 transition-transform duration-500" icon="solar:layers-linear" width="20"></iconify-icon>
                KINETIC
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="relative hover:text-zinc-100 transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-zinc-100 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100" href="#services">Services</a>
<a className="relative hover:text-zinc-100 transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-zinc-100 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100" href="#portfolio">Work</a>
<a className="relative hover:text-zinc-100 transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-zinc-100 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100" href="#about">About</a>
<a className="relative hover:text-zinc-100 transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-zinc-100 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-full bg-white/[0.05] text-sm font-medium text-zinc-300 border border-white/[0.05] hover:bg-white/[0.1] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 active:scale-95" href="#contact">
                Get a Quote
            </a>
<button className="md:hidden text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="relative z-10 flex-grow">

<div id="home">

<section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square pointer-events-none z-[-1]">
<div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full mix-blend-screen filter blur-[90px] animate-blob"></div>
<div className="absolute top-[20%] right-[20%] w-[350px] h-[350px] bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[90px] animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[20%] left-[30%] w-[450px] h-[450px] bg-violet-500/10 rounded-full mix-blend-screen filter blur-[90px] animate-blob animation-delay-4000"></div>
</div>
<div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
<div className="group cursor-default inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.05] text-xs font-medium text-zinc-400 mb-8 transition-all duration-300">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-shadow duration-300"></span>
                        Accepting new projects for Q3
                    </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 leading-[1.1] mb-6 max-w-4xl">
                        We Build Digital Experiences<br/>That Convert.
                    </h1>
<p className="text-base md:text-lg text-zinc-400 font-normal max-w-2xl leading-relaxed mb-10">
                        We partner with ambitious brands to design and engineer custom web applications that demand attention and drive measurable results.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="group relative inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-100 text-[#09090b] text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-[0_0_20px_0_rgba(255,255,255,0.2)] active:scale-95 w-full sm:w-auto overflow-hidden" href="#contact">
<span className="relative z-10">Get a Quote</span>
</a>
<a className="group inline-flex items-center justify-center h-12 px-8 rounded-full bg-white/[0.03] border border-white/[0.1] text-zinc-300 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all duration-300 w-full sm:w-auto" href="#portfolio">
                            View Our Work
                        </a>
</div>
</div>
</section>

<section className="py-12 border-y border-white/[0.03] bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-xs text-center font-medium text-zinc-500 tracking-wider uppercase mb-8">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:opacity-70 transition-opacity duration-700">
<span className="text-xl font-semibold tracking-tighter hover:text-white transition-colors duration-300 cursor-default">LUMINA</span>
<span className="text-xl font-medium tracking-tight hover:text-white transition-colors duration-300 cursor-default">Vanguard</span>
<span className="text-xl font-semibold tracking-tighter uppercase hover:text-white transition-colors duration-300 cursor-default">Nexus</span>
<span className="text-xl font-medium tracking-wide hover:text-white transition-colors duration-300 cursor-default">Aether</span>
<span className="text-xl font-semibold tracking-tighter hover:text-white transition-colors duration-300 cursor-default">SYNTHESIS</span>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/[0.03]">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-20 text-center">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100 mb-4">Core Disciplines</h2>
<p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto">A focused approach to digital product creation. We don't do everything, but what we do, we do exceptionally well.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] hover:border-white/[0.1] hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.05] flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500">
<iconify-icon icon="solar:pen-new-square-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-3 tracking-tight group-hover:text-white transition-colors duration-300">Product Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">User-centric interfaces that blend aesthetic refinement with intuitive functionality. We design systems that scale.</p>
</div>
<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] hover:border-white/[0.1] hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.05] flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500">
<iconify-icon icon="solar:code-square-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-3 tracking-tight group-hover:text-white transition-colors duration-300">Frontend Engineering</h3>
<p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">Performant, accessible, and fluid web experiences built with modern frameworks and strict attention to detail.</p>
</div>
<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] hover:border-white/[0.1] hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.05] flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500">
<iconify-icon icon="solar:server-square-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-3 tracking-tight group-hover:text-white transition-colors duration-300">Backend Architecture</h3>
<p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">Robust server-side solutions designed for security, scalability, and seamless integration with complex APIs.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/[0.03] bg-gradient-to-b from-transparent to-white/[0.01]">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100 mb-4">Why Choose Us</h2>
<p className="text-sm md:text-base text-zinc-400 max-w-md">We bridge the gap between stunning design and flawless engineering.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 border border-white/5 rounded-2xl bg-[#09090b] hover:bg-white/[0.02] transition-colors duration-300">
<iconify-icon className="text-zinc-500 mb-4" icon="solar:target-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-200 mb-2">Results-Driven</h4>
<p className="text-xs text-zinc-400 leading-relaxed">Every pixel and line of code is optimized to achieve your specific business metrics and conversion goals.</p>
</div>
<div className="p-6 border border-white/5 rounded-2xl bg-[#09090b] hover:bg-white/[0.02] transition-colors duration-300">
<iconify-icon className="text-zinc-500 mb-4" icon="solar:bolt-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-200 mb-2">Unmatched Speed</h4>
<p className="text-xs text-zinc-400 leading-relaxed">We build lightning-fast applications that provide frictionless experiences for your users.</p>
</div>
<div className="p-6 border border-white/5 rounded-2xl bg-[#09090b] hover:bg-white/[0.02] transition-colors duration-300">
<iconify-icon className="text-zinc-500 mb-4" icon="solar:shield-check-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-200 mb-2">Future-Proof</h4>
<p className="text-xs text-zinc-400 leading-relaxed">Utilizing modern tech stacks that scale effortlessly as your business grows and evolves over time.</p>
</div>
<div className="p-6 border border-white/5 rounded-2xl bg-[#09090b] hover:bg-white/[0.02] transition-colors duration-300">
<iconify-icon className="text-zinc-500 mb-4" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-200 mb-2">Direct Partnership</h4>
<p className="text-xs text-zinc-400 leading-relaxed">You work directly with the senior engineers and designers crafting your product. No middle-men.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative overflow-hidden border-b border-white/[0.03]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white opacity-[0.015] blur-[80px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<iconify-icon className="text-zinc-700 mb-8 mx-auto hover:text-zinc-500 transition-colors duration-500" icon="solar:quote-left-linear" width="40"></iconify-icon>
<h2 className="text-xl md:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-200 leading-snug mb-10 selection:bg-zinc-700 selection:text-white">
                        "Kinetic doesn't just build websites; they engineer digital advantages. Their attention to microscopic details in both design and code fundamentally elevated our product experience."
                    </h2>
<div className="flex items-center justify-center gap-4 group cursor-default">
<div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-xs font-medium text-zinc-400 group-hover:border-white/20 group-hover:scale-105 transition-all duration-300">
                            ER
                        </div>
<div className="text-left">
<div className="text-sm font-medium text-zinc-100 group-hover:text-white transition-colors duration-300">Elena Rostova</div>
<div className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">VP of Product, Vanguard Technologies</div>
</div>
</div>
</div>
</section>
</div>

<section className="py-24 md:py-32 px-6 border-b border-white/[0.03]" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24">
<span className="text-xs font-medium text-zinc-500 tracking-wider uppercase mb-3 block">Our Services</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-100 mb-6">Detailed Capabilities</h2>
<p className="text-sm md:text-base text-zinc-400 max-w-2xl">We offer end-to-end product development. From initial architecture to final deployment, every phase is handled with precision.</p>
</div>

<div className="space-y-6 mb-32">

<div className="flex flex-col md:flex-row gap-8 p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] hover:border-white/[0.08] transition-colors duration-300">
<div className="md:w-1/3 flex flex-col justify-center">
<h3 className="text-xl font-medium text-zinc-100 mb-2">Web Applications</h3>
<p className="text-sm text-zinc-500">Complex systems made simple.</p>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-400">
<ul className="space-y-3">
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Single Page Applications (SPAs)</li>
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Custom Dashboards &amp; Portals</li>
</ul>
<ul className="space-y-3">
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> SaaS Platform Engineering</li>
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Real-time Data Visualization</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] hover:border-white/[0.08] transition-colors duration-300">
<div className="md:w-1/3 flex flex-col justify-center">
<h3 className="text-xl font-medium text-zinc-100 mb-2">E-Commerce Architecture</h3>
<p className="text-sm text-zinc-500">Built for high-volume scale.</p>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-400">
<ul className="space-y-3">
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Headless Commerce Solutions</li>
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Shopify Plus Integration</li>
</ul>
<ul className="space-y-3">
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Custom Payment Flows</li>
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Inventory API Synchronization</li>
</ul>
</div>
</div>
</div>

<div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-12">The Process</h3>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">

<div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>

<div className="relative z-10 flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-4 text-left md:text-center group">

<div className="md:hidden absolute top-14 bottom-[-32px] left-[28px] w-[1px] bg-white/10 z-0"></div>
<div className="w-14 h-14 shrink-0 rounded-full bg-[#09090b] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-zinc-500 group-hover:text-zinc-100 transition-colors duration-300 relative z-10">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-200 mb-1">1. Discovery</h4>
<p className="text-xs text-zinc-500 max-w-[200px] mx-auto">Deep dive into requirements, architecture planning, and technical scoping.</p>
</div>
</div>

<div className="relative z-10 flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-4 text-left md:text-center group">

<div className="md:hidden absolute top-14 bottom-[-32px] left-[28px] w-[1px] bg-white/10 z-0"></div>
<div className="w-14 h-14 shrink-0 rounded-full bg-[#09090b] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-zinc-500 group-hover:text-zinc-100 transition-colors duration-300 relative z-10">
<iconify-icon icon="solar:pen-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-200 mb-1">2. Design</h4>
<p className="text-xs text-zinc-500 max-w-[200px] mx-auto">Wireframing, UI/UX systems, and interactive prototyping for validation.</p>
</div>
</div>

<div className="relative z-10 flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-4 text-left md:text-center group">

<div className="md:hidden absolute top-14 bottom-[-32px] left-[28px] w-[1px] bg-white/10 z-0"></div>
<div className="w-14 h-14 shrink-0 rounded-full bg-[#09090b] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-zinc-500 group-hover:text-zinc-100 transition-colors duration-300 relative z-10">
<iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-200 mb-1">3. Development</h4>
<p className="text-xs text-zinc-500 max-w-[200px] mx-auto">Rigorous frontend and backend engineering with continuous integration.</p>
</div>
</div>

<div className="relative z-10 flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-4 text-left md:text-center group">
<div className="w-14 h-14 shrink-0 rounded-full bg-[#09090b] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-white group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] relative z-10">
<iconify-icon icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-200 mb-1">4. Launch</h4>
<p className="text-xs text-zinc-500 max-w-[200px] mx-auto">QA testing, performance optimization, and seamless production deployment.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 border-b border-white/[0.03]" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-xs font-medium text-zinc-500 tracking-wider uppercase mb-3 block">Portfolio</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-100 mb-4">Selected Work</h2>
<p className="text-sm md:text-base text-zinc-400 max-w-md">Recent projects demonstrating our commitment to craft, performance, and strategic design.</p>
</div>
</div>

<div className="mb-12 group cursor-pointer block">
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden bg-[#0a0a0c] border border-white/[0.05] mb-6 group-hover:border-white/[0.1] group-hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] transition-all duration-700">

<div className="absolute w-full h-full transform transition-transform duration-1000 ease-out group-hover:scale-[1.03]">
<div className="absolute inset-0 bg-gradient-to-br from-[#1a1c23] to-[#0a0a0c]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_50%)]"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] rounded-t-xl border-t border-x border-white/10 bg-[#09090b] shadow-2xl overflow-hidden flex flex-col transition-transform duration-700 ease-out group-hover:-translate-y-2">
<div className="h-8 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-red-500/50 transition-colors duration-500"></div>
<div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-yellow-500/50 transition-colors duration-500 delay-75"></div>
<div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-green-500/50 transition-colors duration-500 delay-150"></div>
</div>
<div className="flex-1 p-8">
<div className="w-1/3 h-4 rounded bg-white/5 mb-4 group-hover:bg-white/10 transition-colors duration-700"></div>
<div className="w-full h-32 rounded bg-white/5 mb-4 group-hover:bg-white/10 transition-colors duration-700 delay-75"></div>
<div className="w-2/3 h-4 rounded bg-white/5 group-hover:bg-white/10 transition-colors duration-700 delay-150"></div>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-100 mb-2 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-all duration-300">Aether Financial Dashboard</h3>
<p className="text-sm text-zinc-400">Complete platform redesign &amp; frontend architecture.</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-xs font-medium text-zinc-300 group-hover:border-white/[0.1] transition-colors duration-300">Fintech</span>
<span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-xs font-medium text-zinc-300 group-hover:border-white/[0.1] transition-colors duration-300">Next.js</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#0a0a0c] border border-white/[0.05] mb-6 group-hover:border-white/[0.1] group-hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)] transition-all duration-700">
<div className="absolute w-full h-full transform transition-transform duration-1000 ease-out group-hover:scale-[1.05]">
<div className="absolute inset-0 bg-gradient-to-bl from-[#181a20] to-[#0a0a0c]"></div>
<div className="absolute inset-8 border border-white/5 rounded-xl bg-[#09090b] shadow-xl transition-transform duration-700 ease-out group-hover:scale-[0.98]"></div>
</div>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2 px-1 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-all duration-300">Lumina E-Commerce</h3>
<p className="text-sm text-zinc-400 mb-4 px-1">Headless storefront built for high volume transactions.</p>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider px-1 group-hover:text-zinc-300 transition-colors flex items-center gap-2">
                            Case Study <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#0a0a0c] border border-white/[0.05] mb-6 group-hover:border-white/[0.1] group-hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)] transition-all duration-700">
<div className="absolute w-full h-full transform transition-transform duration-1000 ease-out group-hover:scale-[1.05]">
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-[#1e2028]"></div>
<div className="absolute inset-y-8 inset-x-12 border border-white/5 rounded-xl bg-[#0a0a0c] shadow-xl rotate-3 transition-transform duration-700 ease-out group-hover:rotate-0"></div>
</div>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2 px-1 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-all duration-300">Nexus Identity</h3>
<p className="text-sm text-zinc-400 mb-4 px-1">Brand presence and marketing site for a web3 protocol.</p>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider px-1 group-hover:text-zinc-300 transition-colors flex items-center gap-2">
                            Case Study <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#0a0a0c] border border-white/[0.05] mb-6 group-hover:border-white/[0.1] group-hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)] transition-all duration-700">
<div className="absolute w-full h-full transform transition-transform duration-1000 ease-out group-hover:scale-[1.05]">
<div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] to-[#12161f]"></div>
<div className="absolute left-8 right-[-10%] top-1/2 -translate-y-1/2 h-[60%] border border-white/5 rounded-xl bg-[#09090b] shadow-xl transition-transform duration-700 ease-out group-hover:-translate-x-4"></div>
</div>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2 px-1 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-all duration-300">Synthesis App</h3>
<p className="text-sm text-zinc-400 mb-4 px-1">Desktop-class web application for data scientists.</p>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider px-1 group-hover:text-zinc-300 transition-colors flex items-center gap-2">
                            Case Study <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#0a0a0c] border border-white/[0.05] mb-6 group-hover:border-white/[0.1] group-hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)] transition-all duration-700">
<div className="absolute w-full h-full transform transition-transform duration-1000 ease-out group-hover:scale-[1.05]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] bg-[#09090b]"></div>
<div className="absolute top-8 left-8 w-24 h-24 rounded-full border border-white/10 bg-white/[0.02] shadow-xl transition-transform duration-700 ease-out group-hover:scale-110"></div>
<div className="absolute bottom-12 right-12 w-40 h-40 rounded-full border border-white/5 bg-white/[0.01] shadow-xl transition-transform duration-700 ease-out group-hover:scale-110 delay-75"></div>
</div>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2 px-1 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-all duration-300">Vanguard Labs</h3>
<p className="text-sm text-zinc-400 mb-4 px-1">Corporate innovation hub and interactive reporting.</p>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider px-1 group-hover:text-zinc-300 transition-colors flex items-center gap-2">
                            Case Study <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 border-b border-white/[0.03]" id="about">
<div className="max-w-7xl mx-auto">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<div>
<span className="text-xs font-medium text-zinc-500 tracking-wider uppercase mb-3 block">About Kinetic</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 mb-6">Engineering at the edge of what's possible.</h2>
<div className="space-y-6 text-sm md:text-base text-zinc-400 leading-relaxed">
<p>Founded in 2020, Kinetic was born from a simple realization: the web was becoming cluttered, slow, and uninspired. We set out to build a specialized agency that treats code and design as equal disciplines.</p>
<p>Our story isn't about massive scale; it's about uncompromising quality. We intentionally remain a boutique team of senior practitioners, allowing us to embed deeply with our clients and deliver work that fundamentally shifts their trajectory.</p>
</div>
</div>
<div className="flex flex-col justify-center space-y-8 bg-white/[0.01] p-8 rounded-3xl border border-white/[0.03]">
<div>
<h3 className="text-lg font-medium text-zinc-200 mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:flag-linear"></iconify-icon> Our Mission
                            </h3>
<p className="text-sm text-zinc-400 leading-relaxed">To elevate the standard of the web by creating digital products that are as robust under the hood as they are striking on the surface.</p>
</div>
<div className="w-full h-[1px] bg-white/5"></div>
<div>
<h3 className="text-lg font-medium text-zinc-200 mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:eye-linear"></iconify-icon> Our Vision
                            </h3>
<p className="text-sm text-zinc-400 leading-relaxed">A digital landscape where performance and aesthetics coexist seamlessly, driving genuine human connection and business value.</p>
</div>
</div>
</div>

<div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-10">Leadership</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-[#09090b] border border-white/[0.05] hover:border-white/[0.1] transition-colors duration-300 group">
<div className="w-16 h-16 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-white/10 mb-5 flex items-center justify-center text-zinc-500 font-medium group-hover:text-zinc-300 transition-colors">
                                MS
                            </div>
<h4 className="text-base font-medium text-zinc-100 mb-1 group-hover:text-white transition-colors">Marcus Sterling</h4>
<p className="text-xs text-zinc-500 mb-4">Founder &amp; Head of Engineering</p>
<p className="text-xs text-zinc-400 leading-relaxed">Former tech lead at a Fortune 500, Marcus orchestrates the technical architecture behind every Kinetic project.</p>
</div>

<div className="p-6 rounded-2xl bg-[#09090b] border border-white/[0.05] hover:border-white/[0.1] transition-colors duration-300 group">
<div className="w-16 h-16 rounded-full bg-gradient-to-bl from-zinc-800 to-zinc-900 border border-white/10 mb-5 flex items-center justify-center text-zinc-500 font-medium group-hover:text-zinc-300 transition-colors">
                                AV
                            </div>
<h4 className="text-base font-medium text-zinc-100 mb-1 group-hover:text-white transition-colors">Aria Vance</h4>
<p className="text-xs text-zinc-500 mb-4">Design Director</p>
<p className="text-xs text-zinc-400 leading-relaxed">Award-winning product designer focused on creating intuitive, systematic, and visually arresting user interfaces.</p>
</div>

<div className="p-6 rounded-2xl bg-[#09090b] border border-white/[0.05] hover:border-white/[0.1] transition-colors duration-300 group">
<div className="w-16 h-16 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-900 border border-white/10 mb-5 flex items-center justify-center text-zinc-500 font-medium group-hover:text-zinc-300 transition-colors">
                                JC
                            </div>
<h4 className="text-base font-medium text-zinc-100 mb-1 group-hover:text-white transition-colors">Julian Cole</h4>
<p className="text-xs text-zinc-500 mb-4">Lead Frontend Engineer</p>
<p className="text-xs text-zinc-400 leading-relaxed">Specialist in WebGL, intricate animations, and pushing the boundaries of what browsers can render efficiently.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6" id="contact">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<span className="text-xs font-medium text-zinc-500 tracking-wider uppercase mb-3 block">Get in Touch</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-100 mb-4">Start a Project</h2>
<p className="text-sm md:text-base text-zinc-400 max-w-md">Tell us about your goals, timeline, and budget. We typically respond within 24 hours.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">Full Name</label>
<input className="w-full bg-white/[0.02] border border-white/[0.05] rounded-xl px-4 h-12 text-sm text-white focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all placeholder:text-zinc-600" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">Email Address</label>
<input className="w-full bg-white/[0.02] border border-white/[0.05] rounded-xl px-4 h-12 text-sm text-white focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all placeholder:text-zinc-600" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">Company</label>
<input className="w-full bg-white/[0.02] border border-white/[0.05] rounded-xl px-4 h-12 text-sm text-white focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all placeholder:text-zinc-600" placeholder="Company Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">Project Details</label>
<textarea className="w-full bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-sm text-white focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all placeholder:text-zinc-600 resize-none" placeholder="Tell us about your project..." rows="5"></textarea>
</div>
<button className="w-full group relative inline-flex items-center justify-center h-12 px-8 rounded-xl bg-zinc-100 text-[#09090b] text-sm font-medium transition-all duration-300 hover:scale-[1.01] hover:bg-white hover:shadow-[0_0_20px_0_rgba(255,255,255,0.2)] active:scale-95 overflow-hidden mt-4" type="button">
                            Submit Inquiry
                        </button>
</form>

<div className="space-y-10">
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="text-sm font-medium text-zinc-200 mb-3 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:letter-linear"></iconify-icon> Email
                                </h4>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="mailto:hello@kinetic.agency">hello@kinetic.agency</a>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-200 mb-3 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:map-point-linear"></iconify-icon> Location
                                </h4>
<p className="text-sm text-zinc-400 leading-relaxed">100 Tech Square<br/>Austin, TX 78701<br/>United States</p>
</div>
</div>

<div className="relative w-full aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden bg-[#0a0a0c] border border-white/[0.05]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:16px_16px]"></div>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0c_80%)]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
<div className="absolute w-8 h-8 rounded-full bg-white/20 animate-ping"></div>
<div className="relative w-3 h-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] border-2 border-[#0a0a0c]"></div>
</div>

<div className="absolute top-[20%] left-[30%] w-[1px] h-[60%] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="absolute top-[40%] left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 border-t border-white/[0.03] bg-gradient-to-b from-transparent to-black/20">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-100 mb-6">
                    Ready to build something exceptional?
                </h2>
<p className="text-sm md:text-base text-zinc-400 mb-10 max-w-xl mx-auto">
                    Whether you're starting from scratch or scaling an existing platform, we have the technical depth and design expertise to help you succeed.
                </p>
<a className="group relative inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-100 text-[#09090b] text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-[0_0_20px_0_rgba(255,255,255,0.2)] active:scale-95 overflow-hidden" href="#contact">
<span className="relative z-10 flex items-center gap-2">
                        Start the conversation
                        <iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</section>
</main>

<footer className="py-12 px-6 border-t border-white/[0.05] bg-black/20 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-zinc-100 font-medium tracking-tighter text-lg group cursor-pointer">
<iconify-icon className="group-hover:rotate-12 transition-transform duration-500" icon="solar:layers-linear" width="20"></iconify-icon>
                KINETIC
            </div>
<div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
<a className="relative hover:text-zinc-200 transition-colors duration-300 after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-zinc-300 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100" href="#">Twitter</a>
<a className="relative hover:text-zinc-200 transition-colors duration-300 after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-zinc-300 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100" href="#">LinkedIn</a>
<a className="relative hover:text-zinc-200 transition-colors duration-300 after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-zinc-300 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100" href="#">Dribbble</a>
<a className="relative hover:text-zinc-200 transition-colors duration-300 after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-zinc-300 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100" href="#">GitHub</a>
</div>
<div className="text-xs text-zinc-600">
                © 2024 Kinetic Engineering. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
