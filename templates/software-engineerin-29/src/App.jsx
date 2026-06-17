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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with custom stroke width matching modern linear/stripe aesthetic
        lucide.createIcons({
            strokeWidth: 1.5
        });
    
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
      

<nav className="fixed top-6 left-0 w-full z-50 px-6 md:px-12 pointer-events-none">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200/50 shadow-sm pointer-events-auto flex items-center gap-2">
<span className="text-blue-600 font-semibold tracking-tight text-base">8</span>
<span className="text-slate-900 font-medium tracking-tight text-base">allocate</span>
</div>
<div className="hidden md:flex bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200/50 shadow-sm pointer-events-auto text-sm font-medium text-slate-500 uppercase tracking-widest">
                Strategic Partner
            </div>
</div>
</nav>

<section className="min-h-screen pt-32 pb-12 px-6 md:px-12 flex flex-col bg-white">
<div className="max-w-7xl mx-auto w-full flex-grow flex flex-col">
<div className="flex justify-between items-end mb-8 md:mb-12 pl-4">
<h1 className="text-6xl md:text-8xl lg:text-[10rem] font-semibold tracking-tighter text-slate-950 leading-none">
                    Introduction
                </h1>
<span className="text-base text-slate-500 font-medium pb-2 hidden md:block">Mar 2026</span>
</div>
<div className="flex-grow w-full rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-blue-500 via-blue-700 to-slate-950 relative overflow-hidden flex items-end p-8 md:p-16 shadow-2xl shadow-blue-900/20">
<div className="text-5xl md:text-7xl font-semibold tracking-tighter text-white flex items-center">
<span className="text-blue-400">8</span>allocate<span className="text-blue-400">.</span>
</div>
</div>
<div className="mt-8 text-center md:text-left md:pl-8 text-xl font-medium text-slate-600">
                Your Strategic Partner in Technology Innovation
            </div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-slate-950 text-white">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-12">Our Story.</h2>
<div className="grid md:grid-cols-12 gap-6">

<div className="md:col-span-8 bg-slate-900/50 border border-slate-800 rounded-[2rem] p-8 md:p-12 space-y-8">
<p className="text-xl md:text-2xl font-medium text-slate-300 leading-relaxed tracking-tight">
<span className="text-white">Founded in 2015</span> by seasoned veterans in technology and education, 8allocate was born from a vision to transform the software development landscape.
                    </p>
<p className="text-base text-slate-400 leading-relaxed">
                        We believe in true partnership, aligning our strategies with your success. Integrity, transparency, and a client-first mindset drive every decision we make, ensuring solutions that not only solve problems but also open avenues for growth and innovation.
                    </p>
<p className="text-base text-slate-400 leading-relaxed">
                        Our expertise spans the technology and educational sectors, allowing us to offer bespoke solutions and access to fresh talent. As your strategic ally, we're committed to your long-term success, adapting as your needs evolve.
                    </p>
</div>

<div className="md:col-span-4 flex flex-col gap-6">
<div className="bg-blue-600 rounded-[2rem] p-8 flex-grow flex items-center justify-center">
<p className="text-2xl font-semibold tracking-tight text-white text-center leading-snug">
                            Dedicated to excellence, flexibility, and respect.
                        </p>
</div>
<div className="bg-slate-900/50 border border-slate-800 rounded-[2rem] p-8 flex flex-col justify-center">
<i className="text-blue-400 w-8 h-8 mb-4" data-lucide="target"></i>
<p className="text-base font-medium text-slate-300">
                            Focused on delivering solutions that exceed expectations, ensuring the value you receive is always paramount.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-slate-50">
<div className="max-w-7xl mx-auto space-y-6">

<div className="grid grid-cols-2 md:grid-cols-5 gap-6">
<div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow">
<div className="text-5xl font-semibold tracking-tighter text-slate-950 mb-2">2015</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest">Founded</div>
</div>
<div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow">
<div className="text-5xl font-semibold tracking-tighter text-blue-600 mb-2">200+</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest">Projects</div>
</div>
<div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow">
<div className="text-5xl font-semibold tracking-tighter text-slate-950 mb-2">27</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest">Awards</div>
</div>
<div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow">
<div className="text-5xl font-semibold tracking-tighter text-blue-600 mb-2">100+</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest">Engineers</div>
</div>
<div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow">
<div className="text-5xl font-semibold tracking-tighter text-slate-950 mb-2">50+</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest">Clients</div>
</div>
</div>

<div className="bg-slate-950 rounded-[2rem] overflow-hidden text-white border border-slate-800">
<div className="grid md:grid-cols-2 gap-0 h-full">
<div className="p-12 md:p-16 flex flex-col justify-center space-y-12">
<div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="rocket"></i> Rapid Deployment
                            </div>
<h3 className="text-5xl font-semibold tracking-tighter leading-tight mb-4">
<span className="text-blue-500">1 week</span> to launch
                            </h3>
<p className="text-xl text-slate-400 font-medium">and ramp up your dedicated development team.</p>
</div>
<div className="space-y-6 pt-8 border-t border-slate-800">
<h3 className="text-2xl font-semibold tracking-tight flex items-center gap-3">
<i className="w-6 h-6 text-blue-500" data-lucide="globe"></i> Global Presence
                            </h3>
<p className="text-base text-slate-400 leading-relaxed">
                                Headquartered in <span className="text-white font-medium">Tallinn, Estonia</span>, with R&amp;D Centers across Poland, Ukraine, Romania, and LATAM.
                            </p>
<div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-widest">
<span className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300">Client Locations</span>
<span className="px-3 py-2 rounded-lg bg-blue-900/50 text-blue-300 border border-blue-800">R&amp;D Centers</span>
<span className="px-3 py-2 rounded-lg bg-white text-slate-950">HQ</span>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-blue-900/20 to-slate-900 relative min-h-[300px] border-l border-slate-800 flex items-center justify-center p-12">

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
<div className="relative z-10 w-full aspect-square max-w-sm rounded-full border border-blue-500/30 flex items-center justify-center">
<div className="w-3/4 aspect-square rounded-full border border-blue-400/20 flex items-center justify-center">
<div className="w-1/2 aspect-square rounded-full bg-blue-500/20 blur-xl"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-2xl">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-950 mb-6">Unique Positioning</h2>
<p className="text-xl text-slate-500 font-medium leading-relaxed">
                    An exceptional blend of high quality, ultimate flexibility, and comprehensive service offerings.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="md:col-span-2 grid grid-cols-2 gap-6">
<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4">Low Flex / Basic</div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900">Agencies &amp; Recruitment Firms</h4>
</div>
<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4">High Flex / Basic</div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900">Freelancers &amp; Small Teams</h4>
</div>
<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4">Low Flex / Comprehensive</div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900">Global Outsourcing Providers</h4>
</div>
<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4">Mid Flex / Mid Services</div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900">Product-centric Tech Cos</h4>
</div>
</div>

<div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-center items-start shadow-xl shadow-blue-600/20">
<div className="text-xs font-medium text-blue-200 uppercase tracking-widest mb-4">High Flex / Comprehensive</div>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
<i className="w-4 h-4 text-white" data-lucide="star"></i> The Sweet Spot
                    </div>
<h3 className="text-4xl font-semibold tracking-tighter mb-4">8allocate</h3>
<p className="text-blue-100 text-base">The Zone of Strategic Partners delivering end-to-end value adaptably.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-white px-6 md:px-12">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-16">Comprehensive Services.</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 transition-colors group">
<div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-colors">
<i className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" data-lucide="lightbulb"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-6">Strategic Consulting</h3>
<ul className="space-y-4 text-base text-slate-400">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Roadmap development</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Digital transformation</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Technology evaluation</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Global talent sourcing</li>
</ul>
</div>

<div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 transition-colors group">
<div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-colors">
<i className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" data-lucide="code-2"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-6">Product Development</h3>
<ul className="space-y-4 text-base text-slate-400">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Discovery &amp; UX design</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Solution architecture</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Custom development</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> System modernization</li>
</ul>
</div>

<div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 transition-colors group">
<div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-colors">
<i className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" data-lucide="building-2"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-6">Industry Solutions</h3>
<ul className="space-y-4 text-base text-slate-400">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Fintech</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Edtech</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Logistics</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> ESG</li>
</ul>
</div>

<div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 transition-colors group">
<div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-colors">
<i className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" data-lucide="database"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-6">Data &amp; Analytics</h3>
<ul className="space-y-4 text-base text-slate-400">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Storing and Processing</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Integration &amp; BI</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Advanced Analytics</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Cloud and DevOps</li>
</ul>
</div>

<div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 transition-colors group">
<div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-colors">
<i className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" data-lucide="sparkles"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-6">AI / ML</h3>
<ul className="space-y-4 text-base text-slate-400">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Data Preprocessing</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> NLP &amp; Computer Vision</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Generative AI</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Operations Optimisation</li>
</ul>
</div>

<div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 transition-colors group">
<div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-colors">
<i className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" data-lucide="shield-check"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-6">Cybersecurity</h3>
<ul className="space-y-4 text-base text-slate-400">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Assessments and Audits</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Threat Detection</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Data Protection</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Cloud Security</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-slate-50">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div className="sticky top-32">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-medium uppercase tracking-widest mb-6">
                        Approach
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-950 mb-6">Value-Based Engagements</h2>
<p className="text-xl text-slate-500 font-medium leading-relaxed">
                        Your investment is directly linked to the tangible tech outcomes and innovations we deliver.
                    </p>
</div>
<div className="space-y-4">

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex gap-6">
<div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-semibold text-xl">1</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-slate-950 mb-2">Define Success Metrics</h4>
<p className="text-base text-slate-500">Together, we set clear, measurable goals for your software project's success.</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex gap-6">
<div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-semibold text-xl">2</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-slate-950 mb-2">Link Payment to Outcomes</h4>
<p className="text-base text-slate-500">Your payment aligns with the achievements in functionality, satisfaction, and business impact.</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex gap-6">
<div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-semibold text-xl">3</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-slate-950 mb-2">Tech Evolution Flexibility</h4>
<p className="text-base text-slate-500">As your software needs evolve, our engagement adapts, ensuring maximum value.</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex gap-6">
<div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-semibold text-xl">4</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-slate-950 mb-2">Transparent Partnership</h4>
<p className="text-base text-slate-500">We keep communication open, ensuring you are aware about any possible risks in advance.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-blue-600 text-white selection:bg-white selection:text-blue-900">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-medium mb-6 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="cpu"></i> Standard Tooling
                    </div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">AI-Powered Delivery.</h2>
</div>
<div className="bg-blue-700/50 rounded-2xl p-6 border border-blue-500/30 max-w-sm backdrop-blur-sm">
<h3 className="text-xl font-semibold tracking-tight mb-2">More for Less</h3>
<p className="text-sm text-blue-100">AI in our SDLC is default. Faster delivery, fewer bugs, better documentation at no extra cost.</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-blue-900/30 p-8 rounded-3xl border border-blue-500/20 hover:bg-blue-900/40 transition-colors">
<h4 className="text-xl font-semibold mb-4">Code Generation</h4>
<p className="text-base text-blue-100/80">Using Copilot, Claude, Cursor to accelerate feature delivery by 30-40% while maintaining human review quality.</p>
</div>
<div className="bg-blue-900/30 p-8 rounded-3xl border border-blue-500/20 hover:bg-blue-900/40 transition-colors">
<h4 className="text-xl font-semibold mb-4">Automated QA</h4>
<p className="text-base text-blue-100/80">AI generates test suites, identifies edge cases, and automates regression, reducing QA cycles.</p>
</div>
<div className="bg-blue-900/30 p-8 rounded-3xl border border-blue-500/20 hover:bg-blue-900/40 transition-colors">
<h4 className="text-xl font-semibold mb-4">Intelligent Code Review</h4>
<p className="text-base text-blue-100/80">Pre-screening PRs for vulnerabilities and performance issues before human review.</p>
</div>
<div className="bg-blue-900/30 p-8 rounded-3xl border border-blue-500/20 hover:bg-blue-900/40 transition-colors">
<h4 className="text-xl font-semibold mb-4">Enhanced Documentation</h4>
<p className="text-base text-blue-100/80">Tech docs and API specs generated and maintained with AI, ensuring perfect sync.</p>
</div>
<div className="bg-blue-900/30 p-8 rounded-3xl border border-blue-500/20 hover:bg-blue-900/40 transition-colors">
<h4 className="text-xl font-semibold mb-4">Smart Analysis</h4>
<p className="text-base text-blue-100/80">BAs use AI to analyze requirements, identify gaps, and build estimation models faster.</p>
</div>
<div className="bg-blue-900/30 p-8 rounded-3xl border border-blue-500/20 hover:bg-blue-900/40 transition-colors">
<h4 className="text-xl font-semibold mb-4">Faster DevOps</h4>
<p className="text-base text-blue-100/80">Infrastructure-as-code generation, pipeline optimization, and incident root-cause analysis.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-950 mb-16 text-center">Core Expertise</h2>
<div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">

<div className="px-6 py-4 bg-slate-50 border border-slate-200 rounded-full flex items-center gap-3 text-lg font-medium text-slate-900 hover:border-blue-300 transition-colors">
<i className="w-5 h-5 text-blue-600" data-lucide="pen-tool"></i> UX / UI Design
                </div>
<div className="px-6 py-4 bg-slate-50 border border-slate-200 rounded-full flex items-center gap-3 text-lg font-medium text-slate-900 hover:border-blue-300 transition-colors">
<i className="w-5 h-5 text-blue-600" data-lucide="smartphone"></i> Mobile App Dev
                </div>
<div className="px-6 py-4 bg-slate-50 border border-slate-200 rounded-full flex items-center gap-3 text-lg font-medium text-slate-900 hover:border-blue-300 transition-colors">
<i className="w-5 h-5 text-blue-600" data-lucide="monitor"></i> Web &amp; SaaS
                </div>
<div className="px-6 py-4 bg-slate-950 text-white rounded-full flex items-center gap-3 text-lg font-medium hover:bg-slate-800 transition-colors">
<i className="w-5 h-5 text-blue-400" data-lucide="brain"></i> AI &amp; Data Science
                </div>
<div className="px-6 py-4 bg-slate-50 border border-slate-200 rounded-full flex items-center gap-3 text-lg font-medium text-slate-900 hover:border-blue-300 transition-colors">
<i className="w-5 h-5 text-blue-600" data-lucide="server"></i> Big Data
                </div>
<div className="px-6 py-4 bg-slate-50 border border-slate-200 rounded-full flex items-center gap-3 text-lg font-medium text-slate-900 hover:border-blue-300 transition-colors">
<i className="w-5 h-5 text-blue-600" data-lucide="cloud"></i> Cloud &amp; Serverless
                </div>
<div className="px-6 py-4 bg-blue-600 text-white rounded-full flex items-center gap-3 text-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
<i className="w-5 h-5 text-blue-200" data-lucide="cpu"></i> IoT Systems
                </div>
<div className="px-6 py-4 bg-slate-50 border border-slate-200 rounded-full flex items-center gap-3 text-lg font-medium text-slate-900 hover:border-blue-300 transition-colors">
<i className="w-5 h-5 text-blue-600" data-lucide="bar-chart-2"></i> Data Analytics
                </div>
<div className="px-6 py-4 bg-slate-50 border border-slate-200 rounded-full flex items-center gap-3 text-lg font-medium text-slate-900 hover:border-blue-300 transition-colors">
<i className="w-5 h-5 text-blue-600" data-lucide="shield"></i> QA &amp; Testing
                </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 px-6 md:px-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-950 mb-16">Client Voices.</h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="mb-10">
<i className="w-8 h-8 text-blue-200 mb-6 fill-current" data-lucide="quote"></i>
<p className="text-xl text-slate-700 font-medium leading-relaxed tracking-tight">
                            "The development of the mobile app was a success. 8allocate performed extremely well. Their team was responsive, communicative, and stayed on track. Their expertise spurred the opportunity for future projects."
                        </p>
</div>
<div className="flex items-center gap-4 border-t border-slate-100 pt-6">
<div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center text-white font-semibold text-base">SG</div>
<div>
<div className="text-base font-semibold text-slate-950">Sami Granfors</div>
<div className="text-sm text-slate-500 font-medium">Co-Founder &amp; COO, Digitaika</div>
</div>
</div>
</div>
<div className="bg-slate-950 p-10 rounded-3xl text-white shadow-sm flex flex-col justify-between">
<div className="mb-10">
<i className="w-8 h-8 text-blue-500 mb-6 fill-current" data-lucide="quote"></i>
<p className="text-xl text-slate-300 font-medium leading-relaxed tracking-tight">
                            "Their developers are relatively autonomous and listen carefully to our specs. They find weaknesses in our specifications and will bring it to our attention. They provide the best possible code, and their QA is on point."
                        </p>
</div>
<div className="flex items-center gap-4 border-t border-slate-800 pt-6">
<div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-base">RS</div>
<div>
<div className="text-base font-semibold text-white">Roger Sarazin</div>
<div className="text-sm text-slate-400 font-medium">VP of Product, OBDS</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-8 px-6 md:px-12 bg-white">
<div className="max-w-7xl mx-auto flex items-center gap-4">
<div className="h-px bg-slate-200 flex-grow"></div>
<h2 className="text-sm font-semibold tracking-widest text-slate-400 uppercase">Selected Work</h2>
<div className="h-px bg-slate-200 flex-grow"></div>
</div>
</section>

<section className="py-16 px-6 md:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 border border-slate-200 grid md:grid-cols-12 gap-12">

<div className="md:col-span-5 flex flex-col justify-between">
<div>
<span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">Health &amp; Fitness</span>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-950 leading-tight mb-8">Gymcatch Booking Platform</h3>
<div className="space-y-6">
<div>
<span className="block text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">Tech Stack</span>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 shadow-sm">React Native</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 shadow-sm">Node.js</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 shadow-sm">Stripe</span>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<span className="block text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">Location</span>
<span className="text-base font-medium text-slate-900">United Kingdom</span>
</div>
<div>
<span className="block text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">Service</span>
<span className="text-base font-medium text-slate-900">Product Dev</span>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-7 space-y-10">
<div>
<h4 className="text-xl font-semibold tracking-tight text-slate-950 mb-3">The Challenge</h4>
<p className="text-lg text-slate-600 leading-relaxed">Build and scale cross-platform consumer and business apps requiring seamless booking, scheduling, custom forms, and complex Stripe payment integration for virtual and physical sessions.</p>
</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-slate-950 mb-3">The Outcome</h4>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<ul className="space-y-4 text-base text-slate-700">
<li className="flex items-start gap-3"><i className="w-6 h-6 text-blue-500 shrink-0" data-lucide="check-circle-2"></i> Built consumer apps for iOS, Android, and web.</li>
<li className="flex items-start gap-3"><i className="w-6 h-6 text-blue-500 shrink-0" data-lucide="check-circle-2"></i> Integrated complex subscription/pass models via Stripe.</li>
<li className="flex items-start gap-3"><i className="w-6 h-6 text-blue-500 shrink-0" data-lucide="check-circle-2"></i> Platform achieved 200+ five-star reviews.</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 md:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<div className="bg-slate-950 rounded-[2rem] p-8 md:p-12 text-white grid md:grid-cols-12 gap-12 border border-slate-800">
<div className="md:col-span-5 flex flex-col justify-between">
<div>
<span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 border border-slate-700 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">Legal Tech</span>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight mb-8">Consent Mobile App</h3>
<div className="space-y-6">
<div>
<span className="block text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3">Tech Stack</span>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm font-medium text-slate-300">React Native</span>
<span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm font-medium text-slate-300">Node.js</span>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<span className="block text-sm font-semibold text-slate-500 uppercase tracking-widest mb-1">Location</span>
<span className="text-base font-medium text-white">USA / EU</span>
</div>
</div>
</div>
</div>
</div>
<div className="md:col-span-7 space-y-10">
<div>
<h4 className="text-xl font-semibold tracking-tight text-white mb-3">The Challenge</h4>
<p className="text-lg text-slate-400 leading-relaxed">Develop an end-to-end mobile-first platform for legally binding contracts, requiring secure registration, document workflows, and on-device handwritten signature capture.</p>
</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-white mb-3">The Outcome</h4>
<div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
<ul className="space-y-4 text-base text-slate-300">
<li className="flex items-start gap-3"><i className="w-6 h-6 text-blue-400 shrink-0" data-lucide="check-circle-2"></i> Built native mobile app with secure onboarding.</li>
<li className="flex items-start gap-3"><i className="w-6 h-6 text-blue-400 shrink-0" data-lucide="check-circle-2"></i> Implemented reliable on-device signature capture.</li>
<li className="flex items-start gap-3"><i className="w-6 h-6 text-blue-400 shrink-0" data-lucide="check-circle-2"></i> Delivered complete contract lifecycle UI/UX.</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 md:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<div className="bg-blue-600 rounded-[2rem] p-8 md:p-12 text-white grid md:grid-cols-12 gap-12 shadow-xl shadow-blue-900/10 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
<div className="md:col-span-5 flex flex-col justify-between relative z-10">
<div>
<span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm">EdTech &amp; AI</span>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-tight mb-8">E-Learning &amp; Smart Tutor AI</h3>
<div className="space-y-6">
<div>
<span className="block text-sm font-semibold text-blue-200 uppercase tracking-widest mb-3">Tech Stack</span>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 bg-blue-700/50 border border-blue-400/30 rounded-xl text-sm font-medium text-white backdrop-blur-sm">Python</span>
<span className="px-4 py-2 bg-blue-700/50 border border-blue-400/30 rounded-xl text-sm font-medium text-white backdrop-blur-sm">React</span>
<span className="px-4 py-2 bg-blue-700/50 border border-blue-400/30 rounded-xl text-sm font-medium text-white backdrop-blur-sm">GPT</span>
</div>
</div>
</div>
</div>
</div>
<div className="md:col-span-7 space-y-10 relative z-10">
<div>
<h4 className="text-xl font-semibold tracking-tight text-white mb-3">Platform Development</h4>
<p className="text-lg text-blue-100 leading-relaxed">Developed a Learning Experience System from scratch with custom dashboards, marketing portals, and advanced gamification.</p>
</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-white mb-3">AI Smart Tutor Implementation</h4>
<div className="bg-blue-700/40 p-6 rounded-2xl border border-blue-400/30 backdrop-blur-md">
<p className="text-lg text-white mb-4 leading-relaxed">Faced with repetitive questions, we implemented an AI assistant.</p>
<ul className="space-y-3 text-base text-blue-100">
<li className="flex items-start gap-3"><i className="w-6 h-6 text-blue-300 shrink-0 fill-current" data-lucide="zap"></i> Saved 30-50% of instructors' time.</li>
<li className="flex items-start gap-3"><i className="w-6 h-6 text-blue-300 shrink-0 fill-current" data-lucide="zap"></i> Automated responses (guiding, not just answering).</li>
<li className="flex items-start gap-3"><i className="w-6 h-6 text-blue-300 shrink-0 fill-current" data-lucide="zap"></i> Automated homework evaluations.</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-32 px-6 bg-slate-950 text-white text-center flex flex-col items-center justify-center min-h-[60vh]">
<div className="max-w-4xl mx-auto space-y-8">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">
                Ready to build the future?
            </h2>
<p className="text-xl md:text-2xl text-slate-400 font-medium tracking-tight">
                We look forward to becoming your strategic partner.
            </p>
<div className="pt-16">
<div className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-950 rounded-full font-semibold text-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    Start a Conversation
                </div>
</div>
<div className="pt-24 flex items-center justify-center gap-2 text-slate-600 font-semibold tracking-tighter text-2xl">
<span className="text-blue-500">8</span>allocate<span className="text-blue-500">.</span>
</div>
</div>
</footer>


    </>
  );
}
