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
      
    // Initialize lucide icons
    lucide.createIcons({ strokeWidth: 1.5 });

    // FAQ toggle
    function toggleFaq(button) {
      const content = button.nextElementSibling;
      const icon = button.querySelector('svg'); // lucide replaces <i> with <svg>
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      } else {
        content.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: `url('/assets/322719de-f763-429e-9cc6-d2f032a9f8ec_3840w.jpg')`}}></div>
<div className="fixed inset-0 opacity-20" style={{backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`, backgroundSize: `24px 24px`}}></div>
<div className="relative z-10 min-h-screen">

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
<div className="max-w-4xl mx-auto border border-white/10 rounded-full px-6 py-3" style={{background: `rgba(10, 11, 20, 0.9)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="flex items-center justify-between">
<div className="flex items-center">
<span className="text-lg font-semibold text-white tracking-tight" id="aura-eme8ax7i1">Prinx</span>
</div>
<ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/60">
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#">Work</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#">Process</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#">About</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#">Contact</a></li>
</ul>
<div className="flex items-center gap-2">
<button aria-label="Capabilities" className="hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<svg className="lucide lucide-sparkles w-4 h-4 text-white/60" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
<button aria-label="Inbox" className="relative hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<svg className="lucide lucide-mail w-4 h-4 text-white/60" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-[10px] leading-4 rounded-full flex items-center justify-center font-medium">2</span>
</button>
</div>
</div>
</div>
</nav>

<section className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1">
<div className="p-10 lg:p-12 shadow-2xl border border-white/10 rounded-3xl" style={{background: `rgba(255, 255, 255, 0.03)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>

<div className="flex items-center gap-3 mb-8">
<div className="flex items-center gap-0.5">
<svg className="lucide lucide-star w-[14px] h-[14px] text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs font-medium text-white/50">5.0 • 320 partner reviews</span>
</div>

<h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-8 font-manrope font-medium">
              Design for the<br />
<span className="text-blue-400 font-manrope font-medium">frontier</span> of product.
            </h1>

<p className="text-lg text-white/60 leading-relaxed mb-12">
              We are a design and product studio shaping brands, interfaces, and experiences with aerospace‑grade rigor. Concept to code—built to scale, crafted to launch.
            </p>

<div className="flex flex-col sm:flex-row gap-4 mb-16">
<button className="inline-flex items-center justify-center px-8 py-4 rounded-xl hover:bg-blue-500/10 text-white text-sm font-medium border border-blue-500/20 transition-all duration-300 hover:border-blue-500/30" style={{background: `rgba(59, 130, 246, 0.08)`}}>
<span>Start a project</span>
<svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex items-center justify-center px-8 py-4 rounded-xl hover:bg-white/5 text-white/80 text-sm font-medium border border-white/10 transition-all duration-300 hover:border-white/20" style={{background: `rgba(255, 255, 255, 0.03)`}}>
<svg className="lucide lucide-play w-4 h-4 mr-2" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span>See our work</span>
</button>
</div>

<div className="grid grid-cols-3 gap-8">
<div className="text-center">
<div className="w-10 h-10 flex border-white/10 border rounded-xl mr-auto mb-3 ml-auto items-center justify-center" style={{background: `rgba(255, 255, 255, 0.03)`}}>
<svg className="lucide lucide-badge-check w-4 h-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="text-xs font-medium text-white/70">Brand Systems</div>
</div>
<div className="text-center">
<div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/10" style={{background: `rgba(255, 255, 255, 0.03)`}}>
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<div className="text-xs font-medium text-white/70">Interface Design</div>
</div>
<div className="text-center">
<div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/10" style={{background: `rgba(255, 255, 255, 0.03)`}}>
<svg className="lucide lucide-code-2 w-4 h-4" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div className="text-xs font-medium text-white/70">Design Engineering</div>
</div>
</div>
</div>
</div>

<div className="relative order-1 lg:order-2">
<div className="overflow-hidden border border-white/10 rounded-3xl shadow-2xl" style={{background: `rgba(255, 255, 255, 0.03)`}}>

<div className="absolute top-8 left-8 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium border border-white/20 z-10" style={{background: `rgba(59, 130, 246, 0.15)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="text-white">Now booking: Q4 ‘25</span>
</div>

<img alt="Launch-grade creative systems" className="w-full h-[500px] lg:h-[650px] object-cover" src="/assets/a5708db3-4d0a-491c-a445-05df909c54a5_1600w.jpg" />

<div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-6">
<div className="border-white/10 border rounded-2xl p-6" style={{background: `rgba(255, 255, 255, 0.15)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="text-2xl text-white font-manrope font-medium">120+</div>
<div className="text-sm text-white/60 mt-1">Products shipped</div>
</div>
<div className="rounded-2xl p-6 border border-white/10" style={{background: `rgba(255, 255, 255, 0.15)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="text-2xl text-white font-manrope font-medium">NPS 84</div>
<div className="text-sm text-white/60 mt-1">Client satisfaction</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl lg:px-8 mx-auto px-6 space-y-20 pb-24">
<div className="lg:p-16 border-white/10 border rounded-3xl p-12" style={{background: `rgba(255, 255, 255, 0.03)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="text-center mb-12">
<p className="uppercase text-sm font-medium text-white/40 tracking-wide mb-3">Selected Clients</p>
<h3 className="text-2xl text-white tracking-tight mb-4 font-manrope font-medium">We partner with category leaders and fast movers</h3>
<p className="text-base text-white/60 max-w-2xl mx-auto">From seed-stage to public companies, we design brands and products that feel inevitable—reliable, elegant, and built for velocity.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<span className="text-lg font-semibold text-white/70 tracking-tight mb-2">ACME</span>
<p className="text-xs text-white/40">Enterprise SaaS</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<span className="text-lg font-semibold text-white/70 tracking-tight mb-2">NOVA</span>
<p className="text-xs text-white/40">Fintech</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<span className="text-lg font-semibold text-white/70 tracking-tight mb-2">ZENITH</span>
<p className="text-xs text-white/40">AI Platform</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<span className="text-lg font-semibold text-white/70 tracking-tight mb-2">ATLAS</span>
<p className="text-xs text-white/40">Logistics</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<span className="text-lg font-semibold text-white/70 tracking-tight mb-2">ORBITAL</span>
<p className="text-xs text-white/40">Developer Tools</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<span className="text-lg font-semibold text-white/70 tracking-tight mb-2">AURORA</span>
<p className="text-xs text-white/40">Health Tech</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="text-center">
<div className="text-3xl text-white mb-2 font-manrope font-medium">98%</div>
<p className="text-sm text-white/60">Repeat engagement</p>
</div>
<div className="text-center">
<div className="text-3xl text-white mb-2 font-manrope font-medium">6.5 yrs</div>
<p className="text-sm text-white/60">Avg. client tenure</p>
</div>
<div className="text-center">
<div className="text-3xl text-white mb-2 font-manrope font-medium">200+M</div>
<p className="text-sm text-white/60">End users reached</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl lg:px-8 mx-auto px-6">
<div className="lg:p-16 border-white/10 border rounded-3xl p-12" style={{background: `rgba(255, 255, 255, 0.03)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="text-center mb-16">
<p className="uppercase text-sm font-medium text-white/40 tracking-wide mb-3">Engagement Models</p>
<h3 className="text-3xl lg:text-4xl text-white tracking-tight mb-6 font-manrope font-medium">Choose how we build together</h3>
<p className="text-lg text-white/60 max-w-3xl mx-auto">Flexible models that match your velocity. From high‑impact sprints to embedded product partnership, we scale with your roadmap.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="relative rounded-2xl border border-white/10 p-8" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<div className="mb-8">
<h4 className="text-xl font-semibold text-white mb-2">Brand Sprint</h4>
<p className="text-sm text-white/60 mb-6">Positioning, identity, and a launch‑ready system in weeks.</p>
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-manrope font-medium">$18K</span>
<span className="text-sm text-white/40">starting</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-400 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-white/70">Strategy + narrative</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-400 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-white/70">Logo, type, color, components</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-400 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-white/70">Launch kit + guidelines</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-400 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-white/70">2 weeks of post‑launch support</span>
</li>
</ul>
<button className="w-full py-4 px-6 rounded-xl text-sm font-medium text-white border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/5" style={{background: `rgba(255, 255, 255, 0.03)`}}>
              Book a sprint
            </button>
</div>

<div className="relative rounded-2xl border border-blue-500/30 p-8" style={{background: `rgba(59, 130, 246, 0.05)`}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2">
<span className="px-4 py-1 text-xs font-medium text-white rounded-full border border-blue-500/30" style={{background: `rgba(59, 130, 246, 0.15)`}}>Most Requested</span>
</div>
<div className="mb-8">
<h4 className="text-xl font-semibold text-white mb-2">Product Design</h4>
<p className="text-sm text-white/60 mb-6">From discovery to production—UI, UX, and design systems.</p>
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-manrope font-medium">$36K</span>
<span className="text-sm text-white/40">per month</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-400 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-white/70">Research, flows, prototypes</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-400 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-white/70">Design system + tokens</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-400 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-white/70">Design → code handoff</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-400 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-white/70">Weekly demos + roadmap</span>
</li>
</ul>
<button className="w-full py-4 px-6 rounded-xl text-sm font-medium text-white border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300" style={{background: `rgba(59, 130, 246, 0.15)`}}>
              Start design
            </button>
</div>

<div className="relative rounded-2xl border border-white/10 p-8" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<div className="mb-8">
<h4 className="text-xl font-semibold text-white mb-2">Creative Retainer</h4>
<p className="text-sm text-white/60 mb-6">Embedded team for continuous growth and velocity.</p>
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-manrope font-medium">$22K</span>
<span className="text-sm text-white/40">per month</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-400 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-white/70">Async queue + fast turns</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-400 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-white/70">Motion, web, collateral</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-400 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-white/70">Priority support</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-400 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-white/70">Monthly reporting</span>
</li>
</ul>
<button className="w-full py-4 px-6 rounded-xl text-sm font-medium text-white border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/5" style={{background: `rgba(255, 255, 255, 0.03)`}}>
              Join waitlist
            </button>
</div>
</div>
<div className="text-center mt-16 pt-12 border-t border-white/10">
<p className="text-sm text-white/60 mb-6">All plans include IP transfer, source files, and implementation support. Flexible cancellation.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-white border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/5" style={{background: `rgba(255, 255, 255, 0.03)`}}>
<svg className="lucide lucide-calendar w-4 h-4 mr-2" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Schedule intro call
            </button>
<button className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-white/80 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<svg className="lucide lucide-file-down w-4 h-4 mr-2" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
              Download service deck
            </button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl lg:px-8 mx-auto px-6 pb-24">
<div className="lg:p-16 border-white/10 border rounded-3xl p-12" style={{background: `rgba(255, 255, 255, 0.03)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="text-center mb-16">
<p className="uppercase text-sm font-medium text-white/40 tracking-wide mb-3">Support</p>
<h3 className="text-3xl lg:text-4xl text-white tracking-tight mb-6 font-manrope font-medium">Frequently asked questions</h3>
<p className="text-lg text-white/60 max-w-3xl mx-auto">Everything about timelines, process, and partnering with our team.</p>
</div>
<div className="max-w-4xl mx-auto space-y-6">

<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onClick={(e) => { toggleFaq(e.currentTarget) }}>
<span className="text-lg font-medium text-white">How fast can we start and ship?</span>
<svg className="lucide lucide-chevron-down text-white/60 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed">Discovery can begin within 1–2 weeks. Brand sprints ship in 3–4 weeks, product design in monthly increments, and retainers are ongoing. We align on a roadmap, milestones, and weekly demos from day one.</p>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onClick={(e) => { toggleFaq(e.currentTarget) }}>
<span className="text-lg font-medium text-white">What does handoff look like?</span>
<svg className="lucide lucide-chevron-down text-white/60 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed">Production‑ready files, tokenized systems, redlines, and component documentation. We pair with engineering via async specs and live sessions to ensure a clean merge to production.</p>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onClick={(e) => { toggleFaq(e.currentTarget) }}>
<span className="text-lg font-medium text-white">Do you work with early-stage teams?</span>
<svg className="lucide lucide-chevron-down text-white/60 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed">Yes. We often help founders go from narrative to launch—naming, brand, website, and a v1 product that’s demo‑ready for customers and investors.</p>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onClick={(e) => { toggleFaq(e.currentTarget) }}>
<span className="text-lg font-medium text-white">Can you collaborate with our in‑house team?</span>
<svg className="lucide lucide-chevron-down text-white/60 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed">Absolutely. We embed alongside your PM, design, and engineering functions, working in your tools and rituals while bringing external velocity and perspective.</p>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onClick={(e) => { toggleFaq(e.currentTarget) }}>
<span className="text-lg font-medium text-white">How do payments and IP work?</span>
<svg className="lucide lucide-chevron-down text-white/60 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed">Monthly or milestone billing with simple terms. Full IP transfer on payment, including source files and system documentation. We support vendor onboarding and security reviews.</p>
</div>
</div>
</div>
<div className="text-center mt-16 pt-12 border-t border-white/10">
<p className="text-sm text-white/60 mb-6">Still have questions? Our team replies within 24 hours.</p>
<button className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-medium text-white border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300" style={{background: `rgba(59, 130, 246, 0.15)`}}>
<svg className="lucide lucide-message-circle w-4 h-4 mr-2" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
            Contact support
          </button>
</div>
</div>
</section>

<footer className="max-w-7xl lg:px-8 mx-auto px-6 pb-12">
<div className="lg:p-16 border-white/10 border rounded-3xl p-12" style={{background: `rgba(255, 255, 255, 0.03)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center mb-6">
<span className="text-xl font-semibold tracking-tight text-white">Astrolux Studio</span>
</div>
<p className="text-sm text-white/60 leading-relaxed mb-8">A design and product studio for teams building what’s next. Strategy, brand, product, and implementation—launch‑ready by default.</p>
<div className="flex items-center gap-4">
<a aria-label="Twitter" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5" href="#" style={{background: `rgba(255, 255, 255, 0.03)`}}>
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5" href="#" style={{background: `rgba(255, 255, 255, 0.03)`}}>
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="YouTube" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5" href="#" style={{background: `rgba(255, 255, 255, 0.03)`}}>
<svg className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Work</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Case Studies</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Design Systems</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Web & Marketing</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Motion & Video</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Services</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Brand & Strategy</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Product Design</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Design Engineering</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Research & Testing</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Resources</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Playbooks</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Guides</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Templates</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/10 pt-12 mb-12">
<div className="max-w-2xl mx-auto text-center">
<h4 className="text-lg font-medium text-white mb-4">Get launch notes</h4>
<p className="text-sm text-white/60 mb-8">Monthly insights on brand, product, and process—no noise.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="flex-1 max-w-md px-4 py-3 rounded-xl text-sm text-white placeholder-white/40 border border-white/10 focus:border-blue-500/30 focus:outline-none transition-all duration-300" placeholder="Enter your email address" style={{background: `rgba(255, 255, 255, 0.05)`}} type="email" />
<button className="px-8 py-3 rounded-xl text-sm font-medium text-white border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300" style={{background: `rgba(59, 130, 246, 0.15)`}}>
                Subscribe
              </button>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-wrap items-center gap-6 text-xs text-white/40">
<span>© 2025 Astrolux Studio. All rights reserved.</span>
<a className="hover:text-white/60 transition-colors duration-300" href="#">Privacy</a>
<a className="hover:text-white/60 transition-colors duration-300" href="#">Terms</a>
<a className="hover:text-white/60 transition-colors duration-300" href="#">Imprint</a>
</div>
<div className="flex items-center gap-4 text-xs text-white/40">
<span className="flex items-center gap-2">
<svg className="lucide lucide-leaf w-3 h-3 text-green-400" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
              Carbon neutral
            </span>
<span className="flex items-center gap-2">
<svg className="lucide lucide-clock w-3 h-3 text-blue-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
              24h response
            </span>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
