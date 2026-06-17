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
      

<nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-neutral-800">
<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex items-center">
<a className="text-2xl font-semibold tracking-tighter uppercase text-white" href="#">
                        Neo<span className="text-[#F23E02]">.</span>
</a>
</div>
<div className="hidden md:flex space-x-12 items-center">
<a className="text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300" href="#work">Work</a>
<a className="text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300" href="#services">Services</a>
<a className="text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300" href="#pricing">Pricing</a>
<a className="px-6 py-2 border border-neutral-700 text-sm uppercase tracking-widest hover:bg-[#F23E02] hover:border-[#F23E02] hover:text-white transition-all duration-300 rounded-none" href="#contact">
                        Book Strategy
                    </a>
</div>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="32"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center pt-20 border-b border-neutral-800 overflow-hidden">

<div className="aura absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
<div className="lg:col-span-9">
<h1 className="text-6xl sm:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.85] uppercase text-white mb-8">
                        We Design<br/>
                        Products<br/>
                        People <span className="text-[#F23E02]">Trust</span>
</h1>
</div>
<div className="lg:col-span-3 pb-2">
<p className="text-lg text-neutral-400 mb-8 leading-relaxed max-w-xs">
                        UX design agency for early-stage and scaling digital products. We turn chaos into clarity.
                    </p>
<div className="flex flex-col gap-4">
<a className="inline-flex justify-between items-center w-full px-8 py-4 bg-white text-black font-semibold uppercase tracking-tight hover:bg-[#F23E02] hover:text-white transition-colors duration-300 rounded-none" href="#contact">
<span>Book a Call</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-between items-center w-full px-8 py-4 border border-neutral-700 text-white font-medium uppercase tracking-tight hover:border-[#F23E02] transition-colors duration-300 rounded-none" href="#work">
<span>View Work</span>
</a>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 w-32 h-32 border-l border-t border-neutral-800 hidden lg:block"></div>
</section>

<section className="w-full border-b border-neutral-800 bg-[#050505] relative group">
<div className="absolute top-6 left-6 z-20 bg-black/50 backdrop-blur px-4 py-1 border border-white/10">
<span className="text-xs uppercase tracking-widest text-white">Selected Work 2023-24</span>
</div>
<div className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden relative">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
<div className="absolute inset-0 bg-black/20"></div>
<button className="relative z-10 w-24 h-24 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white ml-1" icon="solar:play-linear" width="32"></iconify-icon>
</button>
</div>
</section>

<section className="border-b border-neutral-800 bg-[#0a0a0a]">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
<div className="p-8 md:p-12 flex flex-col justify-between h-full">
<span className="text-xs uppercase tracking-widest text-[#F23E02] mb-4">About Us</span>
<p className="text-xl text-neutral-300 font-light leading-snug">
                    We strip away the non-essential to reveal the product's core value. No fluff, just impact.
                </p>
</div>
<div className="p-8 md:p-12 group hover:bg-[#0f0f0f] transition-colors">
<h3 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-2 group-hover:text-[#F23E02] transition-colors">50+</h3>
<p className="text-sm uppercase tracking-widest text-neutral-500">Products Shipped</p>
</div>
<div className="p-8 md:p-12 group hover:bg-[#0f0f0f] transition-colors">
<h3 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-2 group-hover:text-[#F23E02] transition-colors">5+</h3>
<p className="text-sm uppercase tracking-widest text-neutral-500">Years Experience</p>
</div>
<div className="p-8 md:p-12 group hover:bg-[#0f0f0f] transition-colors">
<h3 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-2 group-hover:text-[#F23E02] transition-colors">20+</h3>
<p className="text-sm uppercase tracking-widest text-neutral-500">Global Clients</p>
</div>
</div>
</section>

<section className="py-24 border-b border-neutral-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-none">
                        FROM IDEA <br/>TO <span className="text-[#F23E02]">SCALE.</span>
</h2>
</div>
<div className="flex items-end">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-600 leading-none text-right w-full">
                        FROM CHAOS <br/>TO <span className="text-white">CLARITY.</span>
</h2>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-800" id="services">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-800">

<div className="group relative p-10 h-80 flex flex-col justify-between hover:bg-[#0f0f0f] transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-[#F23E02] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
<iconify-icon className="text-neutral-500 group-hover:text-[#F23E02] transition-colors" icon="solar:layers-minimalistic-linear" width="40"></iconify-icon>
<div>
<h3 className="text-2xl font-medium text-white mb-2">MVP Product Design</h3>
<p className="text-sm text-neutral-400">Zero to one. We build the foundation for your startup's success.</p>
</div>
</div>

<div className="group relative p-10 h-80 flex flex-col justify-between hover:bg-[#0f0f0f] transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-[#F23E02] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
<iconify-icon className="text-neutral-500 group-hover:text-[#F23E02] transition-colors" icon="solar:refresh-linear" width="40"></iconify-icon>
<div>
<h3 className="text-2xl font-medium text-white mb-2">Product Redesign</h3>
<p className="text-sm text-neutral-400">Modernize legacy systems and improve key retention metrics.</p>
</div>
</div>

<div className="group relative p-10 h-80 flex flex-col justify-between hover:bg-[#0f0f0f] transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-[#F23E02] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
<iconify-icon className="text-neutral-500 group-hover:text-[#F23E02] transition-colors" icon="solar:code-scan-linear" width="40"></iconify-icon>
<div>
<h3 className="text-2xl font-medium text-white mb-2">UX Audit</h3>
<p className="text-sm text-neutral-400">Identify friction points and opportunities for immediate growth.</p>
</div>
</div>

<div className="group relative p-10 h-80 flex flex-col justify-between hover:bg-[#0f0f0f] transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-[#F23E02] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
<iconify-icon className="text-neutral-500 group-hover:text-[#F23E02] transition-colors" icon="solar:palette-linear" width="40"></iconify-icon>
<div>
<h3 className="text-2xl font-medium text-white mb-2">Branding</h3>
<p className="text-sm text-neutral-400">Visual identity systems that scale with your product.</p>
</div>
</div>

<div className="group relative p-10 h-80 flex flex-col justify-between hover:bg-[#0f0f0f] transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-[#F23E02] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
<iconify-icon className="text-neutral-500 group-hover:text-[#F23E02] transition-colors" icon="solar:laptop-minimalistic-linear" width="40"></iconify-icon>
<div>
<h3 className="text-2xl font-medium text-white mb-2">Framer Development</h3>
<p className="text-sm text-neutral-400">Pixel-perfect implementation of marketing sites.</p>
</div>
</div>

<div className="group relative p-10 h-80 flex flex-col justify-center items-center bg-neutral-900 text-center">
<h3 className="text-2xl font-medium text-white mb-6">Need something else?</h3>
<a className="inline-block px-8 py-3 border border-neutral-600 text-white uppercase text-xs tracking-widest hover:bg-[#F23E02] hover:border-[#F23E02] transition-colors" href="#contact">Let's Discuss</a>
</div>
</div>
</section>

<section className="border-b border-neutral-800 bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-neutral-800 border-l border-r border-neutral-800">
<div className="py-6 text-center text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">SaaS</div>
<div className="py-6 text-center text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">EdTech</div>
<div className="py-6 text-center text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">AI Products</div>
<div className="py-6 text-center text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">Web3 / Crypto</div>
<div className="py-6 text-center text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors col-span-2 md:col-span-1 border-t border-neutral-800 md:border-t-0">Fintech</div>
</div>
</div>
</section>

<section className="border-b border-neutral-800" id="work">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="group relative aspect-square border-b md:border-b-0 md:border-r border-neutral-800 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-neutral-900 transition-transform duration-700 group-hover:scale-105">
<img alt="Project 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
<h3 className="text-3xl font-medium text-white mb-1">FinStack AI</h3>
<p className="text-sm text-neutral-400 mb-4">Financial Dashboard Redesign</p>
<span className="inline-flex items-center text-[#F23E02] text-xs uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        View Case Study <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group relative aspect-square border-b border-neutral-800 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-neutral-900 transition-transform duration-700 group-hover:scale-105">
<img alt="Project 2" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
<h3 className="text-3xl font-medium text-white mb-1">Orbit Market</h3>
<p className="text-sm text-neutral-400 mb-4">NFT Marketplace &amp; Wallet</p>
<span className="inline-flex items-center text-[#F23E02] text-xs uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        View Case Study <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group relative aspect-square md:border-r border-neutral-800 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-neutral-900 transition-transform duration-700 group-hover:scale-105">
<img alt="Project 3" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
<h3 className="text-3xl font-medium text-white mb-1">LearnFlow</h3>
<p className="text-sm text-neutral-400 mb-4">LMS Platform Architecture</p>
<span className="inline-flex items-center text-[#F23E02] text-xs uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        View Case Study <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group relative aspect-square overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-neutral-900 transition-transform duration-700 group-hover:scale-105">
<img alt="Project 4" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
<h3 className="text-3xl font-medium text-white mb-1">Vantage</h3>
<p className="text-sm text-neutral-400 mb-4">Data Analytics Suite</p>
<span className="inline-flex items-center text-[#F23E02] text-xs uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        View Case Study <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-800 py-24 bg-[#0a0a0a]">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-[#F23E02] text-6xl mb-8" icon="solar:quote-up-linear"></iconify-icon>
<h3 className="text-2xl md:text-4xl font-light leading-tight text-white mb-8">
                "Neo brought a level of rigor to our product that we hadn't seen before. They don't just design screens; they solve complex business problems."
            </h3>
<div className="text-sm uppercase tracking-widest text-neutral-500">
<span className="text-white font-semibold">Sarah Jenkins</span> — CPO at TechFlow
            </div>
</div>
</section>

<section className="border-b border-neutral-800 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-50 hover:opacity-100 transition-opacity duration-500">

<div className="text-xl font-bold font-sans text-white text-center tracking-tighter">ACME.</div>
<div className="text-xl font-bold font-sans text-white text-center tracking-tighter">WAVEX</div>
<div className="text-xl font-bold font-sans text-white text-center tracking-tighter">BOLT<span className="text-neutral-600">SHIFT</span></div>
<div className="text-xl font-bold font-sans text-white text-center tracking-tighter">OLYMPUS</div>
<div className="text-xl font-bold font-sans text-white text-center tracking-tighter">GLOBEX</div>
<div className="text-xl font-bold font-sans text-white text-center tracking-tighter">SOV.AI</div>
</div>
</div>
</section>

<section className="border-b border-neutral-800 py-16 overflow-hidden">
<div className="flex justify-between items-end px-6 max-w-7xl mx-auto mb-10">
<h3 className="text-2xl font-medium uppercase tracking-tight text-white">Lab / Experiments</h3>
<a className="text-xs uppercase tracking-widest text-[#F23E02] border-b border-[#F23E02] pb-1 hover:text-white hover:border-white transition-colors" href="#">View Dribbble</a>
</div>
<div className="flex space-x-6 overflow-x-auto pb-8 px-6 no-scrollbar snap-x">
<div className="snap-center shrink-0 w-[300px] h-[220px] bg-neutral-900 border border-neutral-800 relative group">
<div className="absolute inset-0 flex items-center justify-center text-neutral-700 group-hover:text-white transition-colors">Concept 01</div>
</div>
<div className="snap-center shrink-0 w-[300px] h-[220px] bg-neutral-900 border border-neutral-800 relative group">
<div className="absolute inset-0 flex items-center justify-center text-neutral-700 group-hover:text-white transition-colors">Mobile Interaction</div>
</div>
<div className="snap-center shrink-0 w-[300px] h-[220px] bg-neutral-900 border border-neutral-800 relative group">
<div className="absolute inset-0 flex items-center justify-center text-neutral-700 group-hover:text-white transition-colors">Design System</div>
</div>
<div className="snap-center shrink-0 w-[300px] h-[220px] bg-neutral-900 border border-neutral-800 relative group">
<div className="absolute inset-0 flex items-center justify-center text-neutral-700 group-hover:text-white transition-colors">Dashboard Dark</div>
</div>
</div>
</section>

<section className="border-b border-neutral-800" id="pricing">
<div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">

<div className="p-12 flex flex-col h-full hover:bg-[#0f0f0f] transition-colors">
<h4 className="text-2xl font-medium text-white mb-4">MVP Sprint</h4>
<div className="text-4xl font-medium text-neutral-500 mb-8">$8k <span className="text-sm font-normal text-neutral-600">/ one-time</span></div>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">Perfect for early stage startups needing a tangible prototype for investors.</p>
<ul className="space-y-4 mb-12 flex-grow">
<li className="flex items-center text-sm text-neutral-300"><iconify-icon className="mr-3 text-[#F23E02]" icon="solar:check-read-linear"></iconify-icon> 2 Weeks Timeline</li>
<li className="flex items-center text-sm text-neutral-300"><iconify-icon className="mr-3 text-[#F23E02]" icon="solar:check-read-linear"></iconify-icon> Core User Flows</li>
<li className="flex items-center text-sm text-neutral-300"><iconify-icon className="mr-3 text-[#F23E02]" icon="solar:check-read-linear"></iconify-icon> High-Fidelity Prototype</li>
</ul>
<a className="block text-center w-full py-3 border border-neutral-600 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-none" href="#contact">Start Sprint</a>
</div>

<div className="p-12 flex flex-col h-full bg-[#0f0f0f] border-t-4 border-t-[#F23E02] lg:border-t-0 lg:border-t-transparent relative">

<div className="absolute top-0 right-0 bg-[#F23E02] text-white text-[10px] uppercase font-bold px-3 py-1">Popular</div>
<h4 className="text-2xl font-medium text-white mb-4">Design Partner</h4>
<div className="text-4xl font-medium text-white mb-8">$6k <span className="text-sm font-normal text-neutral-400">/ month</span></div>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">Ongoing product design support for scaling teams. We become your design team.</p>
<ul className="space-y-4 mb-12 flex-grow">
<li className="flex items-center text-sm text-neutral-300"><iconify-icon className="mr-3 text-[#F23E02]" icon="solar:check-read-linear"></iconify-icon> Dedicated Senior Designer</li>
<li className="flex items-center text-sm text-neutral-300"><iconify-icon className="mr-3 text-[#F23E02]" icon="solar:check-read-linear"></iconify-icon> Unlimited Requests</li>
<li className="flex items-center text-sm text-neutral-300"><iconify-icon className="mr-3 text-[#F23E02]" icon="solar:check-read-linear"></iconify-icon> 48h Turnaround</li>
<li className="flex items-center text-sm text-neutral-300"><iconify-icon className="mr-3 text-[#F23E02]" icon="solar:check-read-linear"></iconify-icon> Slack Integration</li>
</ul>
<a className="block text-center w-full py-3 bg-[#F23E02] text-white text-xs uppercase tracking-widest hover:bg-[#d63400] transition-colors rounded-none" href="#contact">Subscribe</a>
</div>

<div className="p-12 flex flex-col h-full hover:bg-[#0f0f0f] transition-colors">
<h4 className="text-2xl font-medium text-white mb-4">Custom</h4>
<div className="text-4xl font-medium text-neutral-500 mb-8">Talk to us</div>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">For enterprise needs, full-scale redesigns, or comprehensive audits.</p>
<ul className="space-y-4 mb-12 flex-grow">
<li className="flex items-center text-sm text-neutral-300"><iconify-icon className="mr-3 text-[#F23E02]" icon="solar:check-read-linear"></iconify-icon> Full UX Audit</li>
<li className="flex items-center text-sm text-neutral-300"><iconify-icon className="mr-3 text-[#F23E02]" icon="solar:check-read-linear"></iconify-icon> Multi-platform Systems</li>
<li className="flex items-center text-sm text-neutral-300"><iconify-icon className="mr-3 text-[#F23E02]" icon="solar:check-read-linear"></iconify-icon> Strategy Workshops</li>
</ul>
<a className="block text-center w-full py-3 border border-neutral-600 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-none" href="#contact">Contact Us</a>
</div>
</div>
</section>

<section className="border-b border-neutral-800 py-20">
<div className="max-w-3xl mx-auto px-6">
<h3 className="text-4xl font-medium mb-12 text-white tracking-tight">FAQ</h3>
<div className="space-y-0">
<details className="group border-t border-neutral-800">
<summary className="flex justify-between items-center cursor-pointer list-none py-6 text-lg text-neutral-200 group-hover:text-[#F23E02] transition-colors">
<span>How quickly can you start?</span>
<iconify-icon className="group-open:rotate-45 transition-transform duration-300 text-neutral-500" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 pb-6 leading-relaxed text-sm">
                        Usually within 3-5 business days. We keep our client roster small to ensure availability.
                    </div>
</details>
<details className="group border-t border-neutral-800">
<summary className="flex justify-between items-center cursor-pointer list-none py-6 text-lg text-neutral-200 group-hover:text-[#F23E02] transition-colors">
<span>Do you do coding?</span>
<iconify-icon className="group-open:rotate-45 transition-transform duration-300 text-neutral-500" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 pb-6 leading-relaxed text-sm">
                        We specialize in Design. However, we offer Framer development for marketing sites. For web apps, we provide developer-ready handoffs.
                    </div>
</details>
<details className="group border-t border-b border-neutral-800">
<summary className="flex justify-between items-center cursor-pointer list-none py-6 text-lg text-neutral-200 group-hover:text-[#F23E02] transition-colors">
<span>What are your deliverables?</span>
<iconify-icon className="group-open:rotate-45 transition-transform duration-300 text-neutral-500" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 pb-6 leading-relaxed text-sm">
                        Figma files, interactive prototypes, design systems, and recorded looms explaining the design decisions.
                    </div>
</details>
</div>
</div>
</section>

<section className="border-b border-neutral-800 relative bg-[#0a0a0a]" id="contact">

<div className="aura absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none z-0 opacity-10"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
<div className="p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-neutral-800 flex flex-col justify-center">
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6">Let's Talk Product.</h2>
<p className="text-neutral-400 mb-12 max-w-md text-lg">
                    Ready to scale your design? Fill out the form or book a direct strategy call with our lead designer.
                </p>
<div className="space-y-6">
<div className="flex items-center text-sm text-neutral-300">
<iconify-icon className="mr-3 text-[#F23E02]" icon="solar:clock-circle-linear"></iconify-icon> Replies within 24h
                    </div>
<div className="flex items-center text-sm text-neutral-300">
<iconify-icon className="mr-3 text-[#F23E02]" icon="solar:shield-check-linear"></iconify-icon> Strict NDA Policy
                    </div>
</div>
</div>
<div className="p-12 lg:p-20 flex flex-col justify-center z-10">
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Name</label>
<input className="w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-[#F23E02] transition-colors rounded-none placeholder-neutral-800" placeholder="John Doe" type="text"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Company</label>
<input className="w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-[#F23E02] transition-colors rounded-none placeholder-neutral-800" placeholder="Acme Inc" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Email</label>
<input className="w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-[#F23E02] transition-colors rounded-none placeholder-neutral-800" placeholder="john@example.com" type="email"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Message</label>
<textarea className="w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-[#F23E02] transition-colors rounded-none placeholder-neutral-800 resize-none" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-white text-black font-semibold uppercase tracking-widest hover:bg-[#F23E02] hover:text-white transition-colors duration-300 rounded-none flex items-center justify-center gap-2" type="button">
                        Send Request <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<div className="text-center pt-4">
<span className="text-neutral-500 text-xs uppercase tracking-widest">or</span>
</div>
<button className="w-full py-4 border border-neutral-700 text-white font-medium uppercase tracking-widest hover:border-[#F23E02] transition-colors duration-300 rounded-none flex items-center justify-center gap-2" type="button">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon> Book 1-on-1 Meeting
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-[#050505] text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<a className="text-3xl font-bold tracking-tighter uppercase mb-6 block" href="#">
                        Neo<span className="text-[#F23E02]">.</span>
</a>
<p className="text-neutral-400 max-w-sm">
                        We design digital products that survive the market. <br/>Based in New York, working global.
                    </p>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Sitemap</h5>
<ul className="space-y-4">
<li><a className="text-neutral-300 hover:text-[#F23E02] transition-colors" href="#work">Work</a></li>
<li><a className="text-neutral-300 hover:text-[#F23E02] transition-colors" href="#services">Services</a></li>
<li><a className="text-neutral-300 hover:text-[#F23E02] transition-colors" href="#pricing">Pricing</a></li>
<li><a className="text-neutral-300 hover:text-[#F23E02] transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Socials</h5>
<ul className="space-y-4">
<li><a className="text-neutral-300 hover:text-[#F23E02] transition-colors" href="#">Twitter / X</a></li>
<li><a className="text-neutral-300 hover:text-[#F23E02] transition-colors" href="#">LinkedIn</a></li>
<li><a className="text-neutral-300 hover:text-[#F23E02] transition-colors" href="#">Dribbble</a></li>
<li><a className="text-neutral-300 hover:text-[#F23E02] transition-colors" href="#">Instagram</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 uppercase tracking-wider">
<p>© 2024 NEO Agency. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
