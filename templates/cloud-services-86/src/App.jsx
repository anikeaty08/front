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



  !function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-180" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FA91ypkIWKOhjZEGAfQR"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none grid-bg"></div>
<div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-transparent h-48 bottom-0 w-full"></div>

<nav className="fixed md:px-8 md:py-6 flex mix-blend-difference w-full z-50 pt-4 pr-4 pb-4 pl-4 top-0 left-0 items-center justify-between">
<a className="group flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-[#FF6B00] flex items-center justify-center text-black font-semibold rounded-sm group-hover:rotate-180 transition-transform duration-500 font-sans">D</div>
<span className="tracking-tight text-xl hidden md:block uppercase font-sans font-semibold">Datatusk</span>
</a>

<div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1">
<a className="text-xs hover:text-black hover:bg-[#FF6B00] px-4 py-2 rounded-full transition-all font-sans" href="#services">SERVICES</a>
<a className="text-xs hover:text-black hover:bg-[#FF6B00] px-4 py-2 rounded-full transition-all font-sans" href="#process">PROCESS</a>
<a className="text-xs hover:text-black hover:bg-[#FF6B00] px-4 py-2 rounded-full transition-all font-sans" href="#why-us">WHY US</a>
<a className="text-xs hover:text-black hover:bg-[#FF6B00] px-4 py-2 rounded-full transition-all font-sans" href="#contact">CONTACT</a>
</div>
<a className="flex items-center gap-2 text-xs font-semibold border border-white/20 px-4 py-2 rounded-full hover:bg-[#FF6B00] hover:text-black hover:border-[#FF6B00] transition-all cursor-pointer group" href="tel:+923095610889">
<iconify-icon className="w-4 h-4" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden md:block font-sans">+92 309 5610889</span>
</a>
</nav>

<a className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#FF6B00] rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:scale-110 transition-transform duration-300" href="https://wa.me/923095610889" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-3xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</a>

<main className="page-transition z-10 pt-32 pb-20 relative" id="home-view">

<section className="px-4 md:px-8 mb-20 relative max-w-[1800px] mx-auto">
<div className="absolute top-0 right-0 md:right-8 opacity-20 hidden md:block">
<iconify-icon className="text-9xl animate-spin-slow text-gray-500" icon="solar:maximize-linear" strokeWidth="1.5" style={{animationDuration: '20s'}}></iconify-icon>
</div>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-3 mb-2">
<span className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse"></span>
<span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-sans">Cloud-First Solutions</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] uppercase tracking-tight max-w-5xl font-sans font-semibold">
                    Cloud-First <br/>
<span className="text-transparent font-sans font-semibold" style={{WebkitTextStroke: '1px rgba(255, 255, 255, 0.8)'}}>Software &amp; Digital</span> <br/>
<span className="text-[#FF6B00] pr-4 font-sans font-semibold">Services</span>
</h1>
<div className="mt-4 max-w-3xl border-l-2 border-[#FF6B00] pl-4">
<p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8 font-sans">
                        Cloud-First Software, Digital, Analytics and Infrastructure Services. We architect, engineer, and scale resilient enterprise solutions from the ground up.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#FF6B00] text-black font-semibold text-xs px-8 py-4 rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2 uppercase tracking-wide font-sans" href="#contact">
                            Book a Consultation
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="border border-white/20 text-white font-semibold text-xs px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 uppercase tracking-wide font-sans" href="#services">
                            Explore Services
                        </a>
</div>
</div>
</div>
</section>

<div className="w-full border-t border-b border-white/10 py-4 mb-24 overflow-hidden bg-[#0A0A0A] relative">
<div className="whitespace-nowrap scrolling-text flex gap-8 items-center">
<span className="text-4xl md:text-5xl text-transparent uppercase tracking-tight font-sans font-semibold" style={{WebkitTextStroke: '1px rgb(51, 51, 51)'}}>Application Development</span>
<span className="text-4xl md:text-5xl text-[#FF6B00] uppercase font-sans font-semibold">×</span>
<span className="text-4xl md:text-5xl text-transparent uppercase tracking-tight font-sans font-semibold" style={{WebkitTextStroke: '1px rgb(51, 51, 51)'}}>Digital</span>
<span className="text-4xl md:text-5xl text-[#FF6B00] uppercase font-sans font-semibold">×</span>
<span className="text-4xl md:text-5xl text-transparent uppercase tracking-tight font-sans font-semibold" style={{WebkitTextStroke: '1px rgb(51, 51, 51)'}}>Analytics</span>
<span className="text-4xl md:text-5xl text-[#FF6B00] uppercase font-sans font-semibold">×</span>
<span className="text-4xl md:text-5xl text-transparent uppercase tracking-tight font-sans font-semibold" style={{WebkitTextStroke: '1px rgb(51, 51, 51)'}}>Infrastructure</span>
<span className="text-4xl md:text-5xl text-[#FF6B00] uppercase font-sans font-semibold">×</span>
<span className="text-4xl md:text-5xl text-transparent uppercase tracking-tight font-sans font-semibold" style={{WebkitTextStroke: '1px rgb(51, 51, 51)'}}>Impact &amp; Sustainability</span>
<span className="text-4xl md:text-5xl text-[#FF6B00] uppercase font-sans font-semibold">×</span>
</div>
</div>

<section className="px-4 md:px-8 max-w-[1800px] mx-auto scroll-mt-24 mb-32" id="services">
<div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
<h2 className="text-3xl uppercase tracking-tight font-sans font-semibold">Our Services</h2>
<span className="text-xs text-[#FF6B00] font-mono hidden md:block font-sans">[ENTERPRISE GRADE SOLUTIONS]</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 auto-rows-[minmax(320px,auto)]">

<article className="md:col-span-3 bg-[#FF6B00] text-black border border-[#FF6B00] p-8 flex flex-col group rounded-sm shadow-[0_0_30px_rgba(255,107,0,0.15)]">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-4xl" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-bold text-xs border border-black px-2 py-0.5 rounded-full uppercase font-sans">Core</span>
</div>
<h3 className="text-2xl uppercase mb-4 tracking-tight font-sans font-semibold">Application<br/>Development</h3>
<ul className="space-y-3 text-xs font-mono font-semibold opacity-85 flex-1">
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Custom Software Engineering</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Cloud-Native Applications</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon> API Design &amp; Integration</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Enterprise Mobile Solutions</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Legacy System Modernization</li>
</ul>
</article>

<article className="md:col-span-3 bg-[#111] border border-white/10 p-8 flex flex-col group hover:border-[#FF6B00] transition-colors rounded-sm">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-4xl text-[#FF6B00]" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-xs text-gray-500 font-sans">02</span>
</div>
<h3 className="text-2xl uppercase mb-4 tracking-tight font-sans font-semibold">Digital<br/>Transformation</h3>
<ul className="space-y-3 text-xs text-gray-400 font-mono flex-1">
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> End-to-End Digital Strategy</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> User Experience (UX) &amp; Design</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Product Ideation &amp; Prototyping</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Headless E-Commerce</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Workflow Automation</li>
</ul>
</article>

<article className="md:col-span-2 bg-[#111] border border-white/10 p-8 flex flex-col group hover:border-[#FF6B00] transition-colors rounded-sm">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-4xl text-[#FF6B00]" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-xs text-gray-500 font-sans">03</span>
</div>
<h3 className="text-xl md:text-2xl uppercase mb-4 tracking-tight font-sans font-semibold">Data &amp;<br/>Analytics</h3>
<ul className="space-y-3 text-xs text-gray-400 font-mono flex-1">
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Data Engineering &amp; Pipelines</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Business Intelligence (BI)</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Predictive Modeling</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Machine Learning Setup</li>
</ul>
</article>

<article className="md:col-span-2 bg-[#111] border border-white/10 p-8 flex flex-col group hover:border-[#FF6B00] transition-colors rounded-sm">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-4xl text-[#FF6B00]" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-xs text-gray-500 font-sans">04</span>
</div>
<h3 className="text-xl md:text-2xl uppercase mb-4 tracking-tight font-sans font-semibold">Cloud<br/>Infrastructure</h3>
<ul className="space-y-3 text-xs text-gray-400 font-mono flex-1">
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Scalable Cloud Architecture</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> DevOps &amp; CI/CD Pipelines</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Security &amp; Compliance</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 24/7 Managed Monitoring</li>
</ul>
</article>

<article className="md:col-span-2 bg-[#111] border border-white/10 p-8 flex flex-col group hover:border-[#FF6B00] transition-colors rounded-sm">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-4xl text-[#FF6B00]" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-xs text-gray-500 font-sans">05</span>
</div>
<h3 className="text-xl md:text-2xl uppercase mb-4 tracking-tight font-sans font-semibold">Impact &amp;<br/>Sustainability</h3>
<ul className="space-y-3 text-xs text-gray-400 font-mono flex-1">
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Green IT Solutions</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Carbon Footprint Tracking</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Energy-Efficient Cloud</li>
<li className="flex items-start gap-2 font-sans"><iconify-icon className="text-[#FF6B00] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> ESG Data Reporting</li>
</ul>
</article>
</div>
</section>

<section className="px-4 md:px-8 max-w-[1800px] mx-auto scroll-mt-24 mb-32" id="process">
<div className="border-t border-white/20"></div>
<div className="flex items-end justify-between mt-8 mb-8">
<h2 className="text-3xl uppercase tracking-tight font-sans font-semibold">Our Process</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-white/20 border-y border-white/20">

<div className="p-6 md:p-8 group hover:bg-[#111] transition-colors flex flex-col justify-between h-48 md:h-64">
<span className="text-4xl opacity-20 group-hover:opacity-100 group-hover:text-[#FF6B00] transition-all font-sans font-semibold">01</span>
<h3 className="text-sm font-semibold uppercase tracking-tight font-sans">Discovery &amp; Audit</h3>
</div>

<div className="p-6 md:p-8 group hover:bg-[#111] transition-colors flex flex-col justify-between h-48 md:h-64">
<span className="text-4xl opacity-20 group-hover:opacity-100 group-hover:text-[#FF6B00] transition-all font-sans font-semibold">02</span>
<h3 className="text-sm font-semibold uppercase tracking-tight font-sans">Architecture Design</h3>
</div>

<div className="p-6 md:p-8 group hover:bg-[#111] transition-colors flex flex-col justify-between h-48 md:h-64">
<span className="text-4xl opacity-20 group-hover:opacity-100 group-hover:text-[#FF6B00] transition-all font-sans font-semibold">03</span>
<h3 className="text-sm font-semibold uppercase tracking-tight font-sans">Agile Development</h3>
</div>

<div className="p-6 md:p-8 group hover:bg-[#111] transition-colors flex flex-col justify-between h-48 md:h-64">
<span className="text-4xl opacity-20 group-hover:opacity-100 group-hover:text-[#FF6B00] transition-all font-sans font-semibold">04</span>
<h3 className="text-sm font-semibold uppercase tracking-tight font-sans">Testing &amp; QA</h3>
</div>

<div className="p-6 md:p-8 group hover:bg-[#111] transition-colors flex flex-col justify-between h-48 md:h-64">
<span className="text-4xl opacity-20 group-hover:opacity-100 group-hover:text-[#FF6B00] transition-all font-sans font-semibold">05</span>
<h3 className="text-sm font-semibold uppercase tracking-tight font-sans">Deployment</h3>
</div>

<div className="p-6 md:p-8 group hover:bg-[#111] transition-colors flex flex-col justify-between h-48 md:h-64">
<span className="text-4xl opacity-20 group-hover:opacity-100 group-hover:text-[#FF6B00] transition-all font-sans font-semibold">06</span>
<h3 className="text-sm font-semibold uppercase tracking-tight font-sans">Scaling &amp; Support</h3>
</div>
</div>
</section>

<section className="px-4 md:px-8 max-w-[1800px] mx-auto scroll-mt-24 mb-32" id="why-us">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
<div className="">
<h2 className="text-3xl uppercase tracking-tight border-b border-white/10 pb-4 mb-8 font-sans font-semibold">Why Choose Us</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-3xl text-[#FF6B00]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="font-semibold uppercase text-sm mb-1 tracking-tight font-sans">Cloud-Native Focus</h4>
<p className="text-xs text-gray-400 font-sans">Built for the modern web with resilience, security, and infinite scalability in mind.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-3xl text-[#FF6B00]" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="font-semibold uppercase text-sm mb-1 tracking-tight font-sans">Data-Driven Engineering</h4>
<p className="text-xs text-gray-400 font-sans">Architectural decisions backed by deep analytics to ensure maximum performance.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-3xl text-[#FF6B00]" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="font-semibold uppercase text-sm mb-1 tracking-tight font-sans">Future-Proof Tech</h4>
<p className="text-xs text-gray-400 font-sans">We partner with you for sustainable expansion using modern, reliable tech stacks.</p>
</div>
</li>
</ul>
</div>
<div className="bg-[#111] border border-white/10 p-8 md:p-12 rounded-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<h2 className="text-2xl uppercase tracking-tight mb-8 relative z-10 font-sans font-semibold">Who We Work With</h2>
<div className="flex flex-wrap gap-3 relative z-10">
<span className="text-xs border border-white/20 px-4 py-2 rounded-full hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors cursor-default font-sans">Enterprise Corporations</span>
<span className="text-xs border border-white/20 px-4 py-2 rounded-full hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors cursor-default font-sans">SaaS Platforms</span>
<span className="text-xs border border-white/20 px-4 py-2 rounded-full hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors cursor-default font-sans">Tech Startups</span>
<span className="text-xs border border-white/20 px-4 py-2 rounded-full hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors cursor-default font-sans">Fintech</span>
<span className="text-xs border border-white/20 px-4 py-2 rounded-full hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors cursor-default font-sans">Healthcare IT</span>
<span className="text-xs border border-white/20 px-4 py-2 rounded-full hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors cursor-default font-sans">E-Commerce Giants</span>
</div>
</div>
</div>
</section>

<section className="px-4 md:px-8 max-w-[1800px] mx-auto pb-12 scroll-mt-24" id="contact">
<div className="bg-[#0A0A0A] border border-white/10 rounded-sm p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row gap-12 md:gap-24">

<div className="flex-1 relative z-10 flex flex-col justify-between">
<div className="">
<div className="text-xs font-semibold uppercase tracking-widest mb-4 border-b border-white/20 inline-block pb-1 text-[#FF6B00] font-sans">Let's Work Together</div>
<h2 className="text-4xl md:text-6xl uppercase leading-[1.1] tracking-tight mb-6 font-sans font-semibold">
                            Scale Your<br/>Infrastructure
                        </h2>
<p className="text-sm text-gray-400 mb-8 max-w-md leading-relaxed font-sans">
                            Book your consultation now and let Datatusk handle your digital transformation and software needs.
                        </p>
</div>
<div className="space-y-4">
<a className="inline-flex items-center gap-4 text-lg hover:text-[#FF6B00] transition-colors font-mono font-sans" href="tel:+923095610889">
<iconify-icon className="text-2xl text-[#FF6B00]" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                            +92 309 5610889
                        </a>
<br/>
<a className="inline-flex items-center gap-4 text-lg hover:text-[#FF6B00] transition-colors font-mono font-sans" href="https://wa.me/923095610889">
<iconify-icon className="text-2xl text-[#FF6B00]" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
                            WhatsApp Us
                        </a>
</div>
</div>

<div className="flex-1 relative z-10">
<form className="space-y-8 bg-[#050505] p-8 border border-white/10 rounded-sm shadow-2xl" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs uppercase text-gray-500 font-semibold tracking-wider font-sans">Name</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#FF6B00] outline-none font-mono text-sm transition-colors text-white placeholder-gray-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase text-gray-500 font-semibold tracking-wider font-sans">Email</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#FF6B00] outline-none font-mono text-sm transition-colors text-white placeholder-gray-700" placeholder="contact@company.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs uppercase text-gray-500 font-semibold tracking-wider font-sans">Phone</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#FF6B00] outline-none font-mono text-sm transition-colors text-white placeholder-gray-700" placeholder="+1 234 567 890" type="tel"/>
</div>
<div className="space-y-2 relative group cursor-pointer">
<label className="text-xs uppercase text-gray-500 font-semibold tracking-wider font-sans">Project Type</label>
<select className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#FF6B00] outline-none font-mono text-sm transition-colors text-gray-300 appearance-none cursor-pointer">
<option className="bg-[#0A0A0A] font-sans" disabled="" selected="" value="">Select type...</option>
<option className="bg-[#0A0A0A] font-sans" value="software">Application Development</option>
<option className="bg-[#0A0A0A] font-sans" value="infra">Cloud Infrastructure</option>
<option className="bg-[#0A0A0A] font-sans" value="data">Data &amp; Analytics</option>
<option className="bg-[#0A0A0A] font-sans" value="digital">Digital Transformation</option>
<option className="bg-[#0A0A0A] font-sans" value="impact">Sustainability &amp; Impact</option>
</select>
<div className="absolute right-0 bottom-3 pointer-events-none">
<iconify-icon className="text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase text-gray-500 font-semibold tracking-wider font-sans">Message</label>
<textarea className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#FF6B00] outline-none font-mono text-sm transition-colors resize-none text-white placeholder-gray-700" placeholder="Tell us about your infrastructure goals..." rows="3"></textarea>
</div>
<button className="w-full bg-[#FF6B00] text-black font-semibold text-sm px-8 py-4 rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2 uppercase tracking-wide font-sans">
                            Submit Inquiry <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>
<footer className="mt-16 flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 gap-8">
<div className="flex flex-col gap-4 max-w-sm">
<a className="text-xl tracking-tight uppercase font-sans font-semibold" href="#">Datatusk</a>
<p className="leading-relaxed text-xs text-gray-500 font-mono">
                        Cloud-First Software, Digital, Analytics and Infrastructure Services dedicated to scaling your business.
                    </p>
<div className="flex gap-4 text-gray-500 mt-2">
<a className="hover:text-[#FF6B00] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:instagram-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-[#FF6B00] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:linkedin-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-[#FF6B00] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-2 gap-x-12 gap-y-4 text-xs text-gray-400 font-mono uppercase">
<div className="flex flex-col gap-2">
<span className="text-white font-semibold mb-1 font-sans">Quick Links</span>
<a className="hover:text-[#FF6B00] font-sans" href="#services">Services</a>
<a className="hover:text-[#FF6B00] font-sans" href="#process">Process</a>
<a className="hover:text-[#FF6B00] font-sans" href="#why-us">Why Us</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-white font-semibold mb-1 font-sans">Contact</span>
<a className="hover:text-[#FF6B00] font-sans" href="tel:+923095610889">Call Us</a>
<a className="hover:text-[#FF6B00] font-sans" href="https://wa.me/923095610889">WhatsApp</a>
<a className="hover:text-[#FF6B00] font-sans" href="#contact">Consultation</a>
</div>
</div>
<div className="text-[10px] text-gray-600 font-mono uppercase text-right md:min-w-[200px] font-sans">
                    © 2026 Datatusk.<br/>All Rights Reserved.
                </div>
</footer>
</section>
</main>

    </>
  );
}
