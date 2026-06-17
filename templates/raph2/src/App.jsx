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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#3AA63A',
dark: '#2E8C2E',
ink: '#1F2937',
muted: '#6B7280',
bg: '#F6F7F6',
}
},
boxShadow: {
'premium': '0 10px 30px -18px rgba(0,0,0,0.08)',
'deep': '0 20px 40px -20px rgba(0,0,0,0.12)',
}
}
}
}



        (function () {
            const once = true;
            if (!window.__inViewIO) {
                window.__inViewIO = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("animate");
                            if (once) window.__inViewIO.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
            }
            window.initInViewAnimations = function (selector = ".animate-on-scroll") {
                document.querySelectorAll(selector).forEach((el) => {
                    window.__inViewIO.observe(el);
                });
            };
            document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
        })();
    
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
      

<nav className="fixed glass-nav transition-all duration-300 w-full z-50 top-0">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:scale-105 transition-transform duration-300">
<iconify-icon height="20" icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-medium text-lg tracking-tight text-brand-ink">Culture Conseil</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
<a className="hover:text-brand-green transition-colors" href="#about">About</a>
<a className="hover:text-brand-green transition-colors" href="#services">Services</a>
<a className="hover:text-brand-green transition-colors" href="#contact">Contact</a>
</div>

<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-brand-green rounded-full hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand-green/20" href="#contact">
                Get in Touch
            </a>

<button className="md:hidden text-brand-ink p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-stretch">

<div className="lg:col-span-5 flex flex-col justify-center animate-on-scroll animate">
<div className="bg-white rounded-2xl p-8 lg:p-10 shadow-premium border border-gray-100 h-full relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-medium mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                        Scope 3 • Land Sector • Infrastructure
                    </div>
<h1 className="text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] mb-6 text-brand-ink text-balance">
                        Scope 3 MRV Infrastructure for Food &amp; Agriculture Corporates
                    </h1>
<p className="text-lg text-brand-muted leading-relaxed mb-8 text-balance font-light">
                        We build credible, standards-aligned agricultural carbon accounting systems that stand up to scrutiny.
                    </p>
<div className="flex flex-wrap gap-4 mb-10">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-brand-green rounded-full hover:bg-brand-dark transition-all shadow-lg shadow-brand-green/20" href="#contact">
                            Contact Us
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-brand-ink bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all" href="#services">
                            Explore Packages
                        </a>
</div>
<div className="flex items-center gap-2 text-xs text-brand-muted font-medium border-t border-gray-100 pt-6">
<iconify-icon className="text-brand-green" icon="solar:shield-check-linear"></iconify-icon>
                        Build confidence in your Scope 3 reporting.
                    </div>
</div>
</div>

<div className="lg:col-span-7 relative h-[500px] lg:h-auto rounded-2xl overflow-hidden shadow-premium animate-on-scroll animate" style={{animationDelay: '0.2s'}}>

<img alt="Agricultural landscape with cornfield and silos" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1765194240514-201bcff232c5?w=1600&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:w-2/3"></div>

<div className="absolute bottom-8 left-8 right-8 grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-sm">
<div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-2">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-brand-ink mb-1">Credible Measurement</h3>
<p className="text-xs text-brand-muted leading-snug">Standards-driven logic, QA/QC and documentation.</p>
</div>

<div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-sm">
<div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-2">
<iconify-icon icon="solar:ruler-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-brand-ink mb-1">Standards Alignment</h3>
<p className="text-xs text-brand-muted leading-snug">Built around GHG Protocol, SBTi FLAG and ISO.</p>
</div>

<div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-sm">
<div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-2">
<iconify-icon icon="solar:hand-shake-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-brand-ink mb-1">Collaboration</h3>
<p className="text-xs text-brand-muted leading-snug">Corporate-ready systems designed for suppliers.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="about">
<div className="max-w-7xl mx-auto">
<div className="mb-12 animate-on-scroll animate">
<span className="text-brand-green uppercase text-sm font-medium tracking-wide">Why CultureConseil</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mt-3 mb-4 text-brand-ink max-w-3xl">Standards-driven Scope 3 requires real infrastructure</h2>
<p className="text-lg text-brand-muted font-light max-w-3xl">Food &amp; agriculture corporates face increasing Scope 3 pressure. FLAG, CSRD and GHG Protocol Land Sector guidance raise expectations. Generic reporting is no longer sufficient.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

<div className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-2xl shadow-premium border border-gray-100 animate-on-scroll">
<h3 className="text-2xl font-medium text-brand-ink mb-6 tracking-tight">What changes when scrutiny increases</h3>
<p className="text-brand-muted mb-6 leading-relaxed">Scope 3 land-sector accounting cannot be treated as a black box. Regulators, customers and reviewers increasingly expect transparency on data sources, emission factors, uncertainty and governance.</p>
<p className="text-brand-muted mb-8 leading-relaxed">CultureConseil operates at the intersection of agriculture, GHG standards and operational MRV design — bridging technical rigor with supplier realities.</p>
<div className="flex gap-4">
<a className="text-sm font-medium text-brand-green hover:text-brand-dark flex items-center gap-1 group" href="#services">
                            View Packaged Offers 
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-5 bg-white p-8 lg:p-12 rounded-2xl shadow-premium border border-gray-100 animate-on-scroll" style={{animationDelay: '0.1s'}}>
<h3 className="text-2xl font-medium text-brand-ink mb-6 tracking-tight">What you get</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1.5 w-2 h-2 rounded-full bg-brand-green flex-shrink-0"></div>
<span className="text-brand-muted">A clear MRV architecture aligned to leading standards</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1.5 w-2 h-2 rounded-full bg-brand-green flex-shrink-0"></div>
<span className="text-brand-muted">Decision-ready uncertainty and sampling strategies</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1.5 w-2 h-2 rounded-full bg-brand-green flex-shrink-0"></div>
<span className="text-brand-muted">Documentation designed for transparency and traceability</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1.5 w-2 h-2 rounded-full bg-brand-green flex-shrink-0"></div>
<span className="text-brand-muted">Operating models that work at supplier scale</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-gray-100 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
<span className="text-brand-green font-medium text-sm tracking-wide uppercase">Values</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mt-3 mb-4 text-brand-ink">Built for integrity, alignment and operational reality</h2>
<p className="text-brand-muted font-light">A calm, structured approach — designed to be corporate-ready without losing field proximity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

<div className="p-6 rounded-2xl bg-[#F6F7F6] hover:bg-white hover:shadow-lg transition-all duration-300 group animate-on-scroll" style={{animationDelay: '0s'}}>
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-green mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-brand-ink mb-2">Environmental Integrity</h4>
<p className="text-sm text-brand-muted leading-relaxed">Science-based accounting, rigorous assumptions, integrity over marketing.</p>
</div>

<div className="p-6 rounded-2xl bg-[#F6F7F6] hover:bg-white hover:shadow-lg transition-all duration-300 group animate-on-scroll" style={{animationDelay: '0.1s'}}>
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-green mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:ruler-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-brand-ink mb-2">Standards Alignment</h4>
<p className="text-sm text-brand-muted leading-relaxed">Aligned with GHG Protocol, SBTi FLAG and ISO-based practices.</p>
</div>

<div className="p-6 rounded-2xl bg-[#F6F7F6] hover:bg-white hover:shadow-lg transition-all duration-300 group animate-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="flex text-brand-green group-hover:scale-110 transition-transform bg-white w-10 h-10 rounded-full mb-4 shadow-sm items-center justify-center">
<iconify-icon icon="solar:factory-2-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-brand-ink mb-2">Operational Feasibility</h4>
<p className="text-sm text-brand-muted leading-relaxed">Systems designed for real supplier landscapes and field realities.</p>
</div>

<div className="p-6 rounded-2xl bg-[#F6F7F6] hover:bg-white hover:shadow-lg transition-all duration-300 group animate-on-scroll" style={{animationDelay: '0.3s'}}>
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-green mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-brand-ink mb-2">Field Proximity</h4>
<p className="text-sm text-brand-muted leading-relaxed">Grounded in agronomic and supply chain constraints.</p>
</div>

<div className="p-6 rounded-2xl bg-[#F6F7F6] hover:bg-white hover:shadow-lg transition-all duration-300 group animate-on-scroll" style={{animationDelay: '0.4s'}}>
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-green mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:hand-shake-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-brand-ink mb-2">Value Chain Collab</h4>
<p className="text-sm text-brand-muted leading-relaxed">Bridging corporates, suppliers and technical partners.</p>
</div>
</div>
</div>
</section>

<section className="pt-20 pr-6 pb-20 pl-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 animate-on-scroll">
<span className="text-brand-green font-medium text-sm tracking-wide uppercase">Packaged Offers</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mt-3 mb-4 text-brand-ink">Choose a pathway</h2>
<p className="text-lg text-brand-muted font-light max-w-2xl">Structured engagements designed to strengthen agricultural Scope 3 systems with clarity and integrity.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

<div className="bg-white rounded-2xl p-8 shadow-deep ring-1 ring-brand-green/20 relative animate-on-scroll hover:-translate-y-1 transition-transform duration-300 flex flex-col">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-brand-green/40" icon="solar:star-linear" width="24"></iconify-icon>
</div>
<span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-semibold rounded-full mb-4 w-fit">Foundation</span>
<h3 className="text-xl font-medium text-brand-ink mb-2">Scope 3 Agriculture MRV Blueprint</h3>
<div className="text-sm text-brand-muted mb-4 pb-4 border-b border-gray-100">4–6 weeks <span className="mx-2">•</span> €20k–€30k</div>
<p className="text-sm text-brand-ink mb-6">Build a robust, standards-aligned MRV foundation for agricultural Scope 3 programs.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Supplier-level MRV architecture</li>
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> FLAG &amp; GHG Protocol alignment</li>
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Sampling logic &amp; QA/QC controls</li>
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> 12–24 month roadmap</li>
</ul>
<a className="w-full block text-center py-2.5 rounded-full bg-brand-green text-white text-sm font-medium hover:bg-brand-dark transition-colors" href="#contact">Contact Us</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-premium border border-gray-100 animate-on-scroll hover:-translate-y-1 transition-transform duration-300 flex flex-col" style={{animationDelay: '0.1s'}}>
<span className="inline-block px-3 py-1 bg-gray-100 text-brand-muted text-xs font-semibold rounded-full mb-4 w-fit">Upgrade</span>
<h3 className="text-xl font-medium text-brand-ink mb-2">EF &amp; Primary Data Upgrade Sprint</h3>
<div className="text-sm text-brand-muted mb-4 pb-4 border-b border-gray-100">3–5 weeks <span className="mx-2">•</span> €15k–€25k</div>
<p className="text-sm text-brand-ink mb-6">Move from generic emission factors to credible supplier-specific accounting.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> EF gap assessment</li>
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Primary data strategy</li>
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Uncertainty management</li>
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Inventory integration</li>
</ul>
<a className="w-full block text-center py-2.5 rounded-full border border-gray-200 text-brand-ink text-sm font-medium hover:bg-gray-50 transition-colors" href="#contact">Contact Us</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-premium border border-gray-100 animate-on-scroll hover:-translate-y-1 transition-transform duration-300 flex flex-col" style={{animationDelay: '0.2s'}}>
<span className="inline-block px-3 py-1 bg-gray-100 text-brand-muted text-xs font-semibold rounded-full mb-4 w-fit">Integrity</span>
<h3 className="text-xl font-medium text-brand-ink mb-2">Corporate Insetting Framework</h3>
<div className="text-sm text-brand-muted mb-4 pb-4 border-b border-gray-100">6–8 weeks <span className="mx-2">•</span> €25k–€40k</div>
<p className="text-sm text-brand-ink mb-6">Ensure agricultural interventions are quantified with integrity.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Reduction vs removal rules</li>
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Leakage &amp; permanence</li>
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Governance safeguards</li>
</ul>
<a className="w-full block text-center py-2.5 rounded-full border border-gray-200 text-brand-ink text-sm font-medium hover:bg-gray-50 transition-colors" href="#contact">Contact Us</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

<div className="bg-white rounded-2xl p-8 shadow-premium border border-gray-100 animate-on-scroll flex flex-col md:flex-row gap-8 items-start hover:-translate-y-1 transition-transform duration-300">
<div className="flex-1">
<span className="inline-block px-3 py-1 bg-gray-100 text-brand-muted text-xs font-semibold rounded-full mb-4 w-fit">Scale</span>
<h3 className="text-xl font-medium text-brand-ink mb-2">Scope 3 Land Sector Operating Model</h3>
<div className="text-sm text-brand-muted mb-4">8–12 weeks <span className="mx-2">•</span> €40k–€70k</div>
<p className="text-sm text-brand-ink mb-6">Design the full operating system for agricultural Scope 3 mitigation at scale.</p>
<a className="inline-block px-6 py-2.5 rounded-full border border-gray-200 text-brand-ink text-sm font-medium hover:bg-gray-50 transition-colors" href="#contact">Contact Us</a>
</div>
<div className="flex-1 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
<ul className="space-y-3">
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> End-to-end MRV operating model</li>
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Roles &amp; responsibilities matrix</li>
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Data flow architecture</li>
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Standardized templates</li>
</ul>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-premium border border-gray-100 animate-on-scroll flex flex-col md:flex-row gap-8 items-start hover:-translate-y-1 transition-transform duration-300">
<div className="flex-1">
<span className="inline-block px-3 py-1 bg-gray-100 text-brand-muted text-xs font-semibold rounded-full mb-4 w-fit">Ongoing</span>
<h3 className="text-xl font-medium text-brand-ink mb-2">Standards Intelligence Retainer</h3>
<div className="text-sm text-brand-muted mb-4">Monthly <span className="mx-2">•</span> €3k–€8k / mo</div>
<p className="text-sm text-brand-ink mb-6">Ongoing advisory on evolving Scope 3 agriculture standards.</p>
<a className="inline-block px-6 py-2.5 rounded-full border border-gray-200 text-brand-ink text-sm font-medium hover:bg-gray-50 transition-colors" href="#contact">Contact Us</a>
</div>
<div className="flex-1 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
<ul className="space-y-3">
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Monthly expert calls</li>
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Methodology interpretation</li>
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Documentation review</li>
<li className="text-sm text-brand-muted flex items-start gap-2"><iconify-icon className="text-brand-green mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Continuous alignment support</li>
</ul>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-brand-ink to-gray-900 rounded-2xl p-8 md:p-10 text-center animate-on-scroll">
<h3 className="text-xl font-medium text-white mb-2">Not sure where to start?</h3>
<p className="text-gray-300 text-sm max-w-2xl mx-auto mb-6">We can recommend the right package based on your current data maturity, supplier landscape and reporting requirements.</p>
<a className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-brand-ink rounded-full text-sm font-medium hover:bg-gray-100 transition-colors" href="#contact">
                    Get a Recommendation
                </a>
</div>
<p className="text-center text-xs text-brand-muted mt-8 opacity-60">CultureConseil provides advisory and system design services and does not provide third-party assurance or certification.</p>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 animate-on-scroll">
<span className="text-brand-green font-medium text-sm tracking-wide uppercase">Who this is for</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mt-3 mb-4 text-brand-ink">Teams accountable for Scope 3 integrity</h2>
<p className="text-brand-muted font-light max-w-2xl mx-auto">Designed for corporate leaders who need credible, consistent and corporate-ready agricultural accounting.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
<div className="p-8 rounded-2xl border border-gray-100 bg-[#F6F7F6]">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-green">
<iconify-icon icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-brand-ink">Target roles</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-brand-muted">Sustainability Directors</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-brand-muted">Scope 3 / FLAG Managers</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-brand-muted">Procurement Teams</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-brand-muted">Climate Reporting Owners</span>
</div>
</div>
<div className="p-8 rounded-2xl border border-gray-100 bg-[#F6F7F6]">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-green">
<iconify-icon icon="solar:danger-circle-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-brand-ink">Common pain points</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-white border border-red-100 text-red-800/70 rounded-lg text-sm">Weak supplier data</span>
<span className="px-3 py-1.5 bg-white border border-red-100 text-red-800/70 rounded-lg text-sm">Emission factor uncertainty</span>
<span className="px-3 py-1.5 bg-white border border-red-100 text-red-800/70 rounded-lg text-sm">Inconsistent insetting</span>
<span className="px-3 py-1.5 bg-white border border-red-100 text-red-800/70 rounded-lg text-sm">Regulatory pressure</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-7xl mx-auto animate-on-scroll">
<div className="rounded-3xl p-12 lg:p-20 text-center bg-white border border-gray-100 relative overflow-hidden shadow-premium">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green/10 via-[#F6F7F6]/50 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-brand-ink mb-4">Integrity is the foundation of scale.</h2>
<p className="text-xl text-brand-muted font-light mb-10">Let's build credible agricultural Scope 3 systems together.</p>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-brand-green rounded-full hover:bg-brand-dark transition-all shadow-xl shadow-brand-green/20 hover:scale-105 duration-300" href="#contact">
                        Contact Us
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="max-w-7xl mx-auto">
<div className="mb-12 animate-on-scroll">
<span className="text-brand-green font-medium text-sm tracking-wide uppercase">Contact</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mt-3 mb-4 text-brand-ink">Get in touch</h2>
<p className="text-lg text-brand-muted font-light max-w-2xl">Tell us where you are today and what level of rigor you need. We'll respond with a clear next step.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-7 animate-on-scroll">
<form className="bg-white p-8 rounded-2xl shadow-premium border border-gray-100 space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-brand-ink">Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 text-brand-ink placeholder:text-gray-400 focus:bg-white transition-all" placeholder="Your name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-brand-ink">Company</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 text-brand-ink placeholder:text-gray-400 focus:bg-white transition-all" placeholder="Your company" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-brand-ink">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 text-brand-ink placeholder:text-gray-400 focus:bg-white transition-all" placeholder="you@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-brand-ink">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 text-brand-ink placeholder:text-gray-400 focus:bg-white transition-all resize-none" placeholder="What are you building, and what standards/reporting requirements apply?" rows="4"></textarea>
</div>
<div className="pt-2">
<button className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-brand-green rounded-full hover:bg-brand-dark transition-all shadow-lg shadow-brand-green/20" type="submit">
                                Send message
                            </button>
<p className="mt-4 text-xs text-brand-muted">Or email us directly: <a className="text-brand-ink hover:text-brand-green underline" href="mailto:cultureconseil.edd@gmail.com">cultureconseil.edd@gmail.com</a></p>
</div>
</form>
</div>

<div className="lg:col-span-5 space-y-6 animate-on-scroll" style={{animationDelay: '0.2s'}}>
<h3 className="text-xl font-medium text-brand-ink">Contact details</h3>
<a className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group" href="mailto:cultureconseil.edd@gmail.com">
<div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
<iconify-icon icon="solar:letter-linear" width="22"></iconify-icon>
</div>
<div className="flex-1 overflow-hidden">
<p className="text-xs text-brand-muted uppercase tracking-wide font-medium">Email</p>
<p className="text-brand-ink font-medium truncate">cultureconseil.edd@gmail.com</p>
</div>
</a>
<a className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group" href="#">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-brand-muted uppercase tracking-wide font-medium">LinkedIn</p>
<p className="text-brand-ink font-medium">CultureConseil</p>
</div>
</a>
<div className="p-6 bg-[#F6F7F6] rounded-2xl border border-gray-200/60">
<div className="flex gap-3">
<iconify-icon className="text-brand-muted mt-0.5 shrink-0" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-sm text-brand-muted leading-relaxed">CultureConseil provides advisory and system design services and does not provide third-party assurance or certification.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-green" icon="solar:leaf-linear" width="18"></iconify-icon>
<span className="font-medium text-brand-ink">CultureConseil</span>
</div>
<p className="text-xs text-brand-muted">Education • Consulting • Engineering</p>
</div>
<div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
<a className="text-sm text-brand-ink hover:text-brand-green transition-colors" href="mailto:cultureconseil.edd@gmail.com">cultureconseil.edd@gmail.com</a>
<p className="text-[10px] text-brand-muted max-w-md">© 2024 Culture Conseil. Advisory services only. No assurance provided.</p>
</div>
</div>
</footer>



    </>
  );
}
