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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#020410]/80 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg fill="none" height="40" viewbox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5L35 32H5L20 5Z" fill="url(#paint0_linear)"></path>
<path d="M20 12L28 28H12L20 12Z" fill="#020410"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint0_linear" x1="20" x2="20" y1="5" y2="32">
<stop stop-color="#3B82F6"></stop>
<stop offset="1" stop-color="#06B6D4"></stop>
</lineargradient>
</defs>
</svg>
<span className="text-xl font-medium text-white tracking-tight">LA MINDS</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-white transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Portfolio</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">About</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors" href="#">
                Get Started
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<section className="relative pt-48 pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Top-Notch Software Development
            </div>
<h1 className="text-6xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Engineering <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Digital Excellence.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
                End-to-end digital solutions tailored to your business growth. We deliver software that drives value through cutting-edge technology.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20" href="#">
                    Start Your Project
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-[#0B101B] border border-white/10 hover:bg-white/5 text-white rounded-full font-medium transition-all" href="#">
                    Book a Strategy Call
                </a>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#03050E]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">100+</span>
<span className="text-lg text-slate-500">Projects Delivered</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">50+</span>
<span className="text-lg text-slate-500">Happy Clients</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">7+</span>
<span className="text-lg text-slate-500">Years Experience</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-4xl font-semibold text-white tracking-tight">5.0</span>
<div className="flex text-yellow-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
<span className="text-lg text-slate-500">Rated on Upwork</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-blue-500 font-medium tracking-wide uppercase text-sm mb-4 block">Our Expertise</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Everything You Need to <span className="text-slate-400">Scale</span></h2>
<p className="text-xl text-slate-400 max-w-2xl mx-auto">We don't just write code. We build revenue-generating machines that are robust, secure, and scalable.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-[#0B0F19] rounded-3xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
<div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-500 mb-8 border border-blue-500/10">
<i className="w-6 h-6" data-lucide="code-2"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Custom Software</h3>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">Tailor-made solutions designed to address specific business challenges and automate workflows.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> Enterprise ERP Systems
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> Automation Tools
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> Legacy Migration
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors" href="#">
                        Learn More <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group relative bg-[#0B0F19] rounded-3xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
<div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-500 mb-8 border border-blue-500/10">
<i className="w-6 h-6" data-lucide="layout"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Web Applications</h3>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">Single-page applications (SPA) and progressive web apps (PWA) that capture leads fast.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> React &amp; Next.js
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> High Performance
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> SEO Optimized
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors" href="#">
                        Learn More <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group relative bg-[#0B0F19] rounded-3xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
<div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-500 mb-8 border border-blue-500/10">
<i className="w-6 h-6" data-lucide="smartphone"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Mobile Development</h3>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">Native and cross-platform mobile apps for iOS and Android. Seamless user experiences.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> React Native / Flutter
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> iOS &amp; Android
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> Offline Capabilities
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors" href="#">
                        Learn More <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group relative bg-[#0B0F19] rounded-3xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
<div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-500 mb-8 border border-blue-500/10">
<i className="w-6 h-6" data-lucide="pen-tool"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Product Design (UI/UX)</h3>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">Your software will look like a million dollars. Premium aesthetics that position you as the market leader.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> User Research
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> Wireframing
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> High-Fidelity Prototypes
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors" href="#">
                        Learn More <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group relative bg-[#0B0F19] rounded-3xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
<div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-500 mb-8 border border-blue-500/10">
<i className="w-6 h-6" data-lucide="cloud"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Cloud Infrastructure</h3>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">Scalable cloud architecture setup on AWS, Azure, or Google Cloud. Secure and redundant.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> DevOps &amp; CI/CD
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> Serverless Architecture
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> 24/7 Monitoring
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors" href="#">
                        Learn More <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group relative bg-[#0B0F19] rounded-3xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
<div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-500 mb-8 border border-blue-500/10">
<i className="w-6 h-6" data-lucide="database"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Database Development</h3>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">End-to-end data architecture design, creation, and management to drive business growth.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> SQL &amp; NoSQL
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> Data Migration
                        </li>
<li className="flex items-start gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-blue-500 mt-1 shrink-0" data-lucide="check"></i> Performance Tuning
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors" href="#">
                        Learn More <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#03050E] relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">From Idea to Launch in <span className="text-cyan-400">4 Steps</span></h2>
<p className="text-xl text-slate-400 max-w-2xl mx-auto">A proven, streamlined agile process that delivers exceptional results without the typical agency delays.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="bg-[#0B101B] p-8 rounded-2xl border border-white/5 relative group hover:border-blue-500/20 transition-all">
<span className="absolute top-6 right-8 text-6xl font-semibold text-white/5 group-hover:text-blue-500/10 transition-colors">01</span>
<i className="w-8 h-8 text-blue-400 mb-6" data-lucide="message-square"></i>
<h3 className="text-xl font-medium text-white mb-3">Requirement</h3>
<p className="text-lg text-slate-400 mb-6">We dive deep into your business goals and target audience to create a winning strategy.</p>
<div className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-medium rounded uppercase tracking-wider">Week 1</div>
</div>

<div className="bg-[#0B101B] p-8 rounded-2xl border border-white/5 relative group hover:border-blue-500/20 transition-all">
<span className="absolute top-6 right-8 text-6xl font-semibold text-white/5 group-hover:text-blue-500/10 transition-colors">02</span>
<i className="w-8 h-8 text-cyan-400 mb-6" data-lucide="palette"></i>
<h3 className="text-xl font-medium text-white mb-3">Design</h3>
<p className="text-lg text-slate-400 mb-6">We craft stunning visuals and intuitive prototypes that speak directly to your ideal client.</p>
<div className="inline-block px-3 py-1 bg-cyan-900/30 text-cyan-300 text-xs font-medium rounded uppercase tracking-wider">Week 2-3</div>
</div>

<div className="bg-[#0B101B] p-8 rounded-2xl border border-white/5 relative group hover:border-blue-500/20 transition-all">
<span className="absolute top-6 right-8 text-6xl font-semibold text-white/5 group-hover:text-blue-500/10 transition-colors">03</span>
<i className="w-8 h-8 text-blue-400 mb-6" data-lucide="code"></i>
<h3 className="text-xl font-medium text-white mb-3">Development</h3>
<p className="text-lg text-slate-400 mb-6">Your design comes to life with lightning-fast, SEO-optimized, and clean code.</p>
<div className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-medium rounded uppercase tracking-wider">Week 4-7</div>
</div>

<div className="bg-[#0B101B] p-8 rounded-2xl border border-white/5 relative group hover:border-blue-500/20 transition-all">
<span className="absolute top-6 right-8 text-6xl font-semibold text-white/5 group-hover:text-blue-500/10 transition-colors">04</span>
<i className="w-8 h-8 text-cyan-400 mb-6" data-lucide="rocket"></i>
<h3 className="text-xl font-medium text-white mb-3">Review &amp; Release</h3>
<p className="text-lg text-slate-400 mb-6">We launch your site, provide testing, and ensure everything runs smoothly.</p>
<div className="inline-block px-3 py-1 bg-cyan-900/30 text-cyan-300 text-xs font-medium rounded uppercase tracking-wider">Launch</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-8">
                Let's Build Something <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Extraordinary</span>
</h2>
<p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">Book a free strategy call and let's discuss how we can transform your online presence into a client-generating machine.</p>
<div className="flex items-center justify-center gap-8 mb-12 text-sm text-slate-400">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="check-circle"></i> Free website audit</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="check-circle"></i> Custom strategy</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="check-circle"></i> No obligation</span>
</div>
<button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white px-10 py-5 rounded-lg text-lg font-medium transition-all shadow-xl shadow-blue-500/20 w-full sm:w-auto">
                Book Your Free Strategy Call →
            </button>
<p className="text-sm text-slate-600 mt-6">Limited spots available — We only take on 4 clients per month</p>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
</section>

<footer className="border-t border-white/5 bg-[#010208] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-16">
<div className="mb-8 md:mb-0 text-center md:text-left">
<h3 className="text-2xl font-medium text-white mb-2">Ready to transform your online presence?</h3>
<p className="text-slate-500">Let's discuss your project and create something extraordinary.</p>
</div>
<a className="bg-white text-black px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-slate-200 transition-colors" href="#">
                    Start Your Project
                    <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<svg fill="none" height="30" viewbox="0 0 40 40" width="30" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5L35 32H5L20 5Z" fill="url(#paint1_linear)"></path>
<path d="M20 12L28 28H12L20 12Z" fill="#020410"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint1_linear" x1="20" x2="20" y1="5" y2="32">
<stop stop-color="#3B82F6"></stop>
<stop offset="1" stop-color="#06B6D4"></stop>
</lineargradient>
</defs>
</svg>
<span className="text-lg font-medium text-white">LA MINDS</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Premium web design and software development for ambitious entrepreneurs worldwide. We craft websites that convert visitors into paying clients.</p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-white" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-500 hover:text-white" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Services</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Website Development</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">App Development</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Software Development</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Database Development</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">E-commerce</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">UI/UX Design</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Process</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Testimonials</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Get in Touch</h4>
<p className="text-sm text-slate-500 mb-6">Have a project in mind? Let's create something amazing together.</p>
<a className="block w-full text-center py-3 border border-white/10 rounded-lg text-sm text-white hover:bg-white/5 transition-colors" href="#">Book a Call</a>
</div>
</div>
<div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>© 2024 LA MINDS. All rights reserved. Crafted with passion.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
