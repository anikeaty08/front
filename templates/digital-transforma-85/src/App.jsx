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



        // Initialize Lucide Icons
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 blur-[120px] rounded-full"></div>
</div>

<header className="relative z-50 border-b border-zinc-800/30 bg-zinc-950/70 backdrop-blur-xl sticky top-0">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex items-center justify-between h-24">
<a className="flex items-center gap-4 group" href="#">

<div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-emerald-600 p-[2px]">
<div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center">
<i className="text-emerald-500 w-5 h-5" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
</div>
<span className="tracking-tight font-normal text-lg text-zinc-100">Patrick Raffy</span>
</a>
<nav className="hidden md:flex gap-10 text-base font-normal">
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#services">Services</a>
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#principles">Principles</a>
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#experience">Experience</a>
</nav>
<a className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-zinc-950 hover:bg-white transition-colors text-sm font-medium group" href="#contact">
                    Get in Touch 
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</header>
<main className="flex-grow relative z-10">

<section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 px-6 lg:px-12 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col items-start text-left">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/5 text-sm font-normal text-orange-400 mb-10 tracking-wide">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Independent Strategic Advisor
                    </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-zinc-100 tracking-tight leading-[1.05] mb-8">
                        Digital transformation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-emerald-500">sustainable growth.</span>
</h1>
<p className="text-lg sm:text-xl text-zinc-400 max-w-xl mb-12 font-light leading-relaxed">
                        I reinforce your expertise by leveraging extensive industrial experience in leading major transformation programs, focusing on human capital and concrete results.
                    </p>
<div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
<a className="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-emerald-600 text-white text-base font-medium hover:opacity-90 transition-opacity" href="#services">
                            Explore Services
                        </a>
<a className="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-base font-normal hover:bg-zinc-800 transition-colors" href="#experience">
                            View Experience
                        </a>
</div>
</div>

<div className="relative h-[500px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden group">
<div className="absolute inset-0 bg-zinc-900 animate-pulse"></div>
<img alt="Modern corporate space" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 scale-105 group-hover:scale-100" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-zinc-800/50 rounded-[2rem] z-10 pointer-events-none"></div>
</div>
</div>
</section>

<div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
<div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
</div>

<section className="py-32 max-w-7xl mx-auto px-6 lg:px-12 relative" id="services">
<div className="mb-20">
<h2 className="text-4xl lg:text-5xl font-light text-zinc-100 tracking-tight mb-6">Core Services</h2>
<p className="text-lg text-zinc-400 max-w-2xl font-light">Supporting the complete lifecycle of digital transformation across Supply Chain, Customer, Finance &amp; People, and Billing to Cash.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="group relative rounded-3xl overflow-hidden bg-zinc-900/30 border border-zinc-800/50 hover:border-orange-500/30 transition-colors duration-500 flex flex-col">
<div className="h-64 w-full relative overflow-hidden">
<img alt="Business Case" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
</div>
<div className="p-8 lg:p-10 relative flex-grow flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 text-orange-400 absolute -top-7 right-10">
<i className="w-6 h-6" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal text-zinc-100 tracking-tight mb-4">Business Case &amp; Transformation</h3>
<p className="text-base text-zinc-400 font-light leading-relaxed mb-6">Guiding organizational change and strategic growth tailored to your specific market demands.</p>
<span className="mt-auto inline-flex items-center gap-2 text-sm text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                            Learn more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-zinc-900/30 border border-zinc-800/50 hover:border-emerald-500/30 transition-colors duration-500 flex flex-col">
<div className="h-64 w-full relative overflow-hidden">
<img alt="Architecture" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
</div>
<div className="p-8 lg:p-10 relative flex-grow flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 text-emerald-400 absolute -top-7 right-10">
<i className="w-6 h-6" data-lucide="network" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal text-zinc-100 tracking-tight mb-4">Architecture &amp; Migration</h3>
<p className="text-base text-zinc-400 font-light leading-relaxed mb-6">Managing technical implementations, including SAP ECC to S/4 Hana migrations and diverse cloud solutions.</p>
<span className="mt-auto inline-flex items-center gap-2 text-sm text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                            Learn more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</div>
</div>
</div>
</section>

<section className="py-32 border-y border-zinc-800/30 bg-zinc-900/20" id="principles">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
<div className="lg:col-span-1">
<h2 className="text-4xl font-light text-zinc-100 tracking-tight mb-6">Key Principles</h2>
<p className="text-lg text-zinc-400 font-light">The foundational strategies applied to ensure project success and operational excellence.</p>
</div>
<div className="lg:col-span-2 flex flex-col gap-12">
<div className="flex gap-8 items-start group">
<div className="text-orange-500/50 group-hover:text-orange-400 transition-colors mt-1">
<i className="w-8 h-8" data-lucide="crown" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-normal text-zinc-100 tracking-tight mb-3">One Head Concept</h3>
<p className="text-base text-zinc-400 font-light leading-relaxed">Centralized, accountable leadership for navigating complex digital solutions, ensuring clear direction and unified goals.</p>
</div>
</div>
<div className="h-px w-full bg-zinc-800/50"></div>
<div className="flex gap-8 items-start group">
<div className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors mt-1">
<i className="w-8 h-8" data-lucide="radar" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-normal text-zinc-100 tracking-tight mb-3">Control Tower</h3>
<p className="text-base text-zinc-400 font-light leading-relaxed">Establishing 360° visibility over program progress, dependencies, and risks to enable proactive decision-making.</p>
</div>
</div>
<div className="h-px w-full bg-zinc-800/50"></div>
<div className="flex gap-8 items-start group">
<div className="text-orange-500/50 group-hover:text-orange-400 transition-colors mt-1">
<i className="w-8 h-8" data-lucide="target" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-normal text-zinc-100 tracking-tight mb-3">Performance Focused</h3>
<p className="text-base text-zinc-400 font-light leading-relaxed">Enhancing efficiency, reducing lead times, and optimizing costs through Lean principles and continuous improvement.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-7xl mx-auto px-6 lg:px-12" id="experience">
<div className="grid lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 relative sticky top-32">
<div className="aspect-[4/5] w-full rounded-3xl overflow-hidden relative group">
<img alt="Patrick Raffy" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-3xl font-normal text-zinc-100 tracking-tight mb-2">Patrick Raffy</h3>
<p className="text-base text-orange-400 font-light mb-6">Digital Transformation Expert</p>
<ul className="space-y-3 text-sm text-zinc-300 font-light">
<li className="flex items-start gap-3">
<i className="text-emerald-500 w-4 h-4 mt-0.5 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Upstanding and neutral guidance.</span>
</li>
<li className="flex items-start gap-3">
<i className="text-emerald-500 w-4 h-4 mt-0.5 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Concrete, hands-on methodology.</span>
</li>
<li className="flex items-start gap-3">
<i className="text-emerald-500 w-4 h-4 mt-0.5 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Committed to win/win flexibility.</span>
</li>
</ul>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col justify-center h-full">
<h2 className="text-4xl lg:text-5xl font-light text-zinc-100 tracking-tight mb-8">Experience &amp; Track Record</h2>
<p className="text-lg text-zinc-400 font-light mb-16 leading-relaxed">A strong history of leading large-scale programs for major industrial players, delivering reliable results at the highest organizational levels.</p>
<div className="space-y-12">
<div className="group">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
<i className="w-5 h-5" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal text-zinc-100 tracking-tight">Aerospace &amp; Defense</h3>
</div>
<p className="text-base text-zinc-400 font-light pl-16 leading-relaxed">Extensive experience directing programs for industry giants including Airbus, Dassault Aviation, Thales, and Safran. Proven ability to navigate high-stakes, high-compliance environments.</p>
</div>
<div className="group">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-400 group-hover:text-orange-400 group-hover:border-orange-500/30 transition-colors">
<i className="w-5 h-5" data-lucide="database" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal text-zinc-100 tracking-tight">Large-Scale ERP Migrations</h3>
</div>
<p className="text-base text-zinc-400 font-light pl-16 leading-relaxed">Successful management of multi-site and multi-country ERP migrations (including complex SAP ECC to S/4 Hana transitions) impacting extensive networks of over 10,000 active users globally.</p>
</div>
<div className="group">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
<i className="w-5 h-5" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal text-zinc-100 tracking-tight">Complex Governance</h3>
</div>
<p className="text-base text-zinc-400 font-light pl-16 leading-relaxed">Proven capability in establishing robust reporting structures directly to C-Board members across General Management, Operations, and Supply Chain divisions.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/30 bg-zinc-950 mt-auto relative z-10 overflow-hidden" id="contact">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl lg:text-5xl font-light text-zinc-100 tracking-tight mb-6">Ready to transform?</h2>
<p className="text-lg text-zinc-400 font-light max-w-md mb-10">Reach out to discuss how we can align your digital strategy with sustainable growth and operational excellence.</p>
<div className="flex flex-col gap-6">
<a className="flex items-center gap-4 text-zinc-300 hover:text-orange-400 transition-colors group w-fit" href="mailto:patrick.raffy31@gmail.com">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
<i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<span className="text-base font-normal">patrick.raffy31@gmail.com</span>
</a>
<a className="flex items-center gap-4 text-zinc-300 hover:text-emerald-400 transition-colors group w-fit" href="tel:+330616394160">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<span className="text-base font-normal">+33 (0)6 16 39 41 60</span>
</a>
</div>
</div>
<div className="flex md:justify-end">

<div className="w-32 h-32 rounded-full border border-zinc-800/50 flex items-center justify-center relative bg-zinc-900/20">
<div className="absolute inset-0 rounded-full border border-orange-500/20 animate-ping opacity-20"></div>
<i className="text-zinc-600 w-12 h-12" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="mt-32 pt-8 border-t border-zinc-800/30 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500 font-light">
<p>© 2024 Patrick Raffy. All rights reserved.</p>
<div className="flex gap-8">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Privacy</span>
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Terms</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
