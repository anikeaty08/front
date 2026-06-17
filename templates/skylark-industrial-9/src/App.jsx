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
      

<nav className="fixed w-full z-50 bg-[#121212]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="container mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-[0.2em] text-white flex items-center gap-2" href="#">
                SKYLARK
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-gray-300 hover:text-white transition-colors" href="#">Products</a>
<a className="text-sm font-normal text-gray-300 hover:text-white transition-colors" href="#">Core Solutions</a>
<a className="text-sm font-normal text-gray-300 hover:text-white transition-colors" href="#">Case Studies</a>
<a className="text-sm font-normal text-gray-300 hover:text-white transition-colors" href="#">About Us</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#007BFF] hover:bg-[#0069d9] text-white text-sm font-medium transition-all duration-300 shadow-[0_0_20px_rgba(0,123,255,0.2)] hover:shadow-[0_0_25px_rgba(0,123,255,0.4)]" href="#contact">
                CONTACT US
            </a>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-20 flex flex-col justify-end min-h-screen">

<div className="absolute inset-0 z-0 bg-[#e0e5ec]">
<img alt="Drone Production" className="w-full h-full object-cover opacity-90 mix-blend-multiply filter contrast-125" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-[#121212]/60 via-transparent to-[#121212]"></div>
</div>
<div className="relative z-10 container mx-auto px-6 pb-32 pt-32">

<div className="max-w-2xl bg-[#121212]/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
                    Deep Customization · <br/> <span className="text-[#007BFF]">System Integration</span>
</h1>
<p className="text-base md:text-lg text-gray-300 mb-10 font-light leading-relaxed max-w-xl">
                    Full-chain unmanned system solutions from R&amp;D to production. Designed for enterprise scalability and industrial precision.
                </p>
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#121212] text-sm font-semibold hover:bg-gray-100 transition-all duration-300 gap-2 group" href="#contact">
                    Contact Us Now
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="relative z-20 w-full bg-[#007BFF] border-t border-white/10">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 md:py-8 divide-x divide-white/20">
<div className="flex flex-col items-center justify-center text-center px-4">
<iconify-icon className="text-white/80 mb-2" height="28" icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
<span className="text-2xl font-medium tracking-tight text-white">200+</span>
<span className="text-xs text-white/80 font-medium uppercase tracking-wider mt-1">Elite Team Experts</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<iconify-icon className="text-white/80 mb-2" height="28" icon="solar:buildings-linear" width="28"></iconify-icon>
<span className="text-2xl font-medium tracking-tight text-white">10,000 m²</span>
<span className="text-xs text-white/80 font-medium uppercase tracking-wider mt-1">Production Base</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<iconify-icon className="text-white/80 mb-2" height="28" icon="solar:map-arrow-up-linear" width="28"></iconify-icon>
<span className="text-2xl font-medium tracking-tight text-white">1,000 m²</span>
<span className="text-xs text-white/80 font-medium uppercase tracking-wider mt-1">Flight Test Base</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<iconify-icon className="text-white/80 mb-2" height="28" icon="solar:diploma-linear" width="28"></iconify-icon>
<span className="text-2xl font-medium tracking-tight text-white">10+</span>
<span className="text-xs text-white/80 font-medium uppercase tracking-wider mt-1">Core Patents</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#121212] relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-1/2 h-full bg-[#007BFF]/5 blur-[150px] rounded-full pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                        You see opportunities.<br/>We deliver solutions.
                    </h2>
<p className="text-base text-gray-400 mb-10 font-light">
                        From concept to delivery, end-to-end. Get expert support for your next high-stakes mission.
                    </p>
<form className="bg-[#1A1A1C] border border-white/5 p-8 rounded-3xl space-y-5 shadow-2xl">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 pl-1">Full Name</label>
<input className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 pl-1">Contact Info (Email/Phone)</label>
<input className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all" placeholder="john@company.com" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 pl-1">Country / Region</label>
<div className="relative">
<select className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white appearance-none focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all cursor-pointer">
<option disabled="" selected="" value="">Select Region</option>
<option>North America</option>
<option>Europe</option>
<option>Asia Pacific</option>
<option>Middle East</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 pl-1">Project Details</label>
<textarea className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all resize-none" placeholder="Tell us about your custom requirements..." rows="4"></textarea>
</div>
<button className="w-full bg-[#007BFF] hover:bg-[#0069d9] text-white text-sm font-medium py-4 rounded-xl transition-colors mt-2" type="button">
                            Submit Request
                        </button>
</form>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full content-center">
<div className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#1A1A1C] border border-white/5">
<img alt="Team" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<p className="text-2xl font-medium tracking-tight text-white mb-1">200+</p>
<p className="text-xs text-gray-400 uppercase tracking-wide">Elite Experts</p>
</div>
</div>
<div className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#1A1A1C] border border-white/5 mt-0 sm:mt-12">
<img alt="Production" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<p className="text-2xl font-medium tracking-tight text-white mb-1">10,000 m²</p>
<p className="text-xs text-gray-400 uppercase tracking-wide">Production Base</p>
</div>
</div>
<div className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#1A1A1C] border border-white/5 sm:-mt-12">
<img alt="Test Base" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<p className="text-2xl font-medium tracking-tight text-white mb-1">1,000 m²</p>
<p className="text-xs text-gray-400 uppercase tracking-wide">Flight Test Base</p>
</div>
</div>
<div className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#1A1A1C] border border-white/5">
<img alt="Patents" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<p className="text-2xl font-medium tracking-tight text-white mb-1">Dozens</p>
<p className="text-xs text-gray-400 uppercase tracking-wide">Core Patents</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-y border-white/5">
<div className="container mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Overcoming Industry Bottlenecks</h2>
<p className="text-base text-gray-400 font-light">We understand the critical challenges in industrial unmanned system deployment and have engineered our processes to solve them directly.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="bg-[#121212] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#007BFF] mb-5 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:danger-triangle-linear" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Standardization Limits</h3>
<p className="text-xs text-gray-400 leading-relaxed">Standard off-the-shelf products cannot meet specific or extreme special mission requirements.</p>
</div>

<div className="bg-[#121212] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#007BFF] mb-5 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-cross-linear" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Inflexible Capabilities</h3>
<p className="text-xs text-gray-400 leading-relaxed">Fixed functions cannot dynamically adapt to reconnaissance, strike, or interception operations.</p>
</div>

<div className="bg-[#121212] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#007BFF] mb-5 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cpu-linear" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Integration Friction</h3>
<p className="text-xs text-gray-400 leading-relaxed">Complex system integration leading to poor compatibility and high failure rates in the field.</p>
</div>

<div className="bg-[#121212] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#007BFF] mb-5 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:ruler-cross-pen-linear" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Technical Barriers</h3>
<p className="text-xs text-gray-400 leading-relaxed">Flight control, transmission, and payload integration pose significant technical barriers.</p>
</div>

<div className="bg-[#121212] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#007BFF] mb-5 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:box-minimalistic-linear" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Fragmented Delivery</h3>
<p className="text-xs text-gray-400 leading-relaxed">Scattered supply chains result in fragmented delivery timelines and uncontrollable final quality.</p>
</div>

<div className="bg-[#121212] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#007BFF] mb-5 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clipboard-remove-linear" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Unclear Responsibility</h3>
<p className="text-xs text-gray-400 leading-relaxed">Ambiguous quality responsibility dividing lines between design agencies and production facilities.</p>
</div>

<div className="bg-[#121212] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#007BFF] mb-5 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:settings-minimalistic-linear" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Lack of Customization</h3>
<p className="text-xs text-gray-400 leading-relaxed">General manufacturers lack the infrastructure and willingness for deep customization support.</p>
</div>

<div className="bg-[#121212] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#007BFF] mb-5 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-block-rounded-linear" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Capability Deficits</h3>
<p className="text-xs text-gray-400 leading-relaxed">Suppliers often operate without true, full-stack underlying Research &amp; Development capabilities.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#121212]">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">End-to-End Service Ecosystem</h2>
<p className="text-base text-gray-400 font-light">Comprehensive solutions from initial blueprint to global deployment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-[#1A1A1C] border border-white/5 rounded-3xl overflow-hidden group">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" src="https://images.unsplash.com/photo-1503945438517-f65904a52ce6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<h3 className="text-base font-medium text-white mb-2">1. Demand Evaluation &amp; Tech Selection</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">Rigorous analysis of operational requirements matched with optimal technological frameworks.</p>
</div>
</div>

<div className="bg-[#1A1A1C] border border-white/5 rounded-3xl overflow-hidden group">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<h3 className="text-base font-medium text-white mb-2">2. Solution Design &amp; Product Development</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">Custom engineering of airframes, avionics, and integrated payload systems.</p>
</div>
</div>

<div className="bg-[#1A1A1C] border border-white/5 rounded-3xl overflow-hidden group">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<h3 className="text-base font-medium text-white mb-2">3. Prototype Trial &amp; Verification</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">Extensive functional testing in controlled environments and real-world field conditions.</p>
</div>
</div>

<div className="bg-[#1A1A1C] border border-white/5 rounded-3xl overflow-hidden group">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-8">
<h3 className="text-base font-medium text-white mb-2">4. Small-batch Trial Production</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">Controlled initial manufacturing runs to finalize tooling, processes, and QA procedures.</p>
</div>
</div>

<div className="bg-[#1A1A1C] border border-white/5 rounded-3xl overflow-hidden group">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-8">
<h3 className="text-base font-medium text-white mb-2">5. Mass Production &amp; Quality Control</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">Scaled manufacturing utilizing 10,000 m² base with aerospace-grade quality standards.</p>
</div>
</div>

<div className="bg-[#1A1A1C] border border-white/5 rounded-3xl overflow-hidden group">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-8">
<h3 className="text-base font-medium text-white mb-2">6. Global Logistics &amp; Delivery Support</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">Secure, compliant international shipping and post-deployment technical integration.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#007BFF] hover:bg-[#0069d9] text-white text-sm font-medium transition-colors shadow-[0_0_20px_rgba(0,123,255,0.2)]" href="#contact">
                    Explore Our Services
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#007BFF] relative overflow-hidden">

<div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">You provide demand.<br/>We deliver finished products.</h2>
<p className="text-base text-white/80 font-light">Full chain from evaluation, R&amp;D, production to delivery.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">

<div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2 z-0"></div>

<div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg">
<div className="w-12 h-12 rounded-full bg-white text-[#007BFF] flex items-center justify-center mb-6 shadow-md">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">1. Demand Evaluation</h3>
<p className="text-sm text-white/70 font-light">Mapping core requirements to feasible technical pathways.</p>
</div>

<div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg">
<div className="w-12 h-12 rounded-full bg-white text-[#007BFF] flex items-center justify-center mb-6 shadow-md">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">2. Solution Design</h3>
<p className="text-sm text-white/70 font-light">Architecting the hardware and software integration blueprint.</p>
</div>

<div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg">
<div className="w-12 h-12 rounded-full bg-white text-[#007BFF] flex items-center justify-center mb-6 shadow-md">
<iconify-icon icon="solar:test-tube-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">3. Prototype Trial</h3>
<p className="text-sm text-white/70 font-light">Building and validating the proof-of-concept units.</p>
</div>

<div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg">
<div className="w-12 h-12 rounded-full bg-white text-[#007BFF] flex items-center justify-center mb-6 shadow-md">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">4. Small-batch Production</h3>
<p className="text-sm text-white/70 font-light">Initial manufacturing run to refine assembly lines.</p>
</div>

<div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg">
<div className="w-12 h-12 rounded-full bg-white text-[#007BFF] flex items-center justify-center mb-6 shadow-md">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">5. Mass Production</h3>
<p className="text-sm text-white/70 font-light">Scaled manufacturing with strict quality assurance.</p>
</div>

<div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg">
<div className="w-12 h-12 rounded-full bg-white text-[#007BFF] flex items-center justify-center mb-6 shadow-md">
<iconify-icon icon="solar:global-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">6. Global Delivery</h3>
<p className="text-sm text-white/70 font-light">Secure logistics and final handover to your operations.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#121212] border-t border-white/5">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Why SKYLARK</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="flex flex-col h-[320px] rounded-3xl overflow-hidden bg-[#1A1A1C] border border-white/5 group">
<div className="h-2/3 w-full relative overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-1/3 p-5 flex items-center justify-center text-center bg-[#1A1A1C] border-t border-white/5">
<h3 className="text-sm font-medium text-white">1. Strong R&amp;D Capability</h3>
</div>
</div>

<div className="flex flex-col h-[320px] rounded-3xl overflow-hidden bg-[#1A1A1C] border border-white/5 group">
<div className="h-2/3 w-full relative overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-1/3 p-5 flex items-center justify-center text-center bg-[#1A1A1C] border-t border-white/5">
<h3 className="text-sm font-medium text-white">2. Efficient Production &amp; Delivery</h3>
</div>
</div>

<div className="flex flex-col h-[320px] rounded-3xl overflow-hidden bg-[#1A1A1C] border border-white/5 group">
<div className="h-2/3 w-full relative overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="h-1/3 p-5 flex items-center justify-center text-center bg-[#1A1A1C] border-t border-white/5">
<h3 className="text-sm font-medium text-white">3. Strict Quality &amp; Certification</h3>
</div>
</div>

<div className="flex flex-col h-[320px] rounded-3xl overflow-hidden bg-[#1A1A1C] border border-white/5 group">
<div className="h-2/3 w-full relative overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-1/3 p-5 flex items-center justify-center text-center bg-[#1A1A1C] border-t border-white/5">
<h3 className="text-sm font-medium text-white">4. Professional Test &amp; Verification</h3>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#007BFF] hover:bg-[#0069d9] text-white text-sm font-medium transition-colors shadow-[0_0_20px_rgba(0,123,255,0.2)]" href="#contact">
                    Partner With Us
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0A0A0A] border-t border-white/5">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Core Solutions</h2>
<p className="text-base text-gray-400 font-light">Featured specialized systems ready for deployment and further customization.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#007BFF] hover:text-blue-400 transition-colors" href="#contact">
                    View all solutions <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-[#161616] rounded-3xl border border-white/5 hover:border-[#007BFF]/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(0,123,255,0.05)] flex flex-col">
<div className="aspect-[4/3] w-full relative bg-[#1A1A1C]">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent"></div>
</div>
<div className="p-6 flex-grow flex flex-col">
<h3 className="text-base font-medium text-white mb-2">FPV Professional Custom Solution</h3>
<p className="text-xs text-gray-400 font-light leading-relaxed mb-6">High-speed, low-latency platforms engineered for precision tactical maneuvers.</p>
<div className="mt-auto">
<span className="text-xs font-medium text-[#007BFF] flex items-center gap-1 group-hover:gap-2 transition-all">
                                Discover More <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="group bg-[#161616] rounded-3xl border border-white/5 hover:border-[#007BFF]/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(0,123,255,0.05)] flex flex-col">
<div className="aspect-[4/3] w-full relative bg-[#1A1A1C]">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent"></div>
</div>
<div className="p-6 flex-grow flex flex-col">
<h3 className="text-base font-medium text-white mb-2">AI Tracking Kit Solution</h3>
<p className="text-xs text-gray-400 font-light leading-relaxed mb-6">Edge-computing enabled optical tracking for autonomous target acquisition.</p>
<div className="mt-auto">
<span className="text-xs font-medium text-[#007BFF] flex items-center gap-1 group-hover:gap-2 transition-all">
                                Discover More <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="group bg-[#161616] rounded-3xl border border-white/5 hover:border-[#007BFF]/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(0,123,255,0.05)] flex flex-col">
<div className="aspect-[4/3] w-full relative bg-[#1A1A1C]">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 filter hue-rotate-180" src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent"></div>
</div>
<div className="p-6 flex-grow flex flex-col">
<h3 className="text-base font-medium text-white mb-2">Dual-Optics Digital Fiber Link</h3>
<p className="text-xs text-gray-400 font-light leading-relaxed mb-6">Interference-resistant data transmission for secure, high-fidelity environments.</p>
<div className="mt-auto">
<span className="text-xs font-medium text-[#007BFF] flex items-center gap-1 group-hover:gap-2 transition-all">
                                Discover More <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="group bg-[#161616] rounded-3xl border border-white/5 hover:border-[#007BFF]/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(0,123,255,0.05)] flex flex-col">
<div className="aspect-[4/3] w-full relative bg-[#1A1A1C]">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent"></div>
</div>
<div className="p-6 flex-grow flex flex-col">
<h3 className="text-base font-medium text-white mb-2">High-Precision Positioning</h3>
<p className="text-xs text-gray-400 font-light leading-relaxed mb-6">RTK-enabled smart flight control systems for centimeter-level accuracy.</p>
<div className="mt-auto">
<span className="text-xs font-medium text-[#007BFF] flex items-center gap-1 group-hover:gap-2 transition-all">
                                Discover More <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#121212] text-sm font-medium hover:bg-gray-200 transition-colors" href="#contact">
                    Get Solution
                </a>
</div>
</div>
</section>

<section className="py-32 bg-[#121212] relative overflow-hidden border-t border-white/5">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#007BFF]/10 blur-[120px] pointer-events-none rounded-full"></div>
<div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Get Free Technical Assessment</h2>
<p className="text-base text-gray-400 font-light mb-10">Connect with our chief engineers to evaluate the feasibility and timeline of your custom unmanned system requirements.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-grow bg-[#1A1A1C] border border-white/10 rounded-full px-6 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#007BFF] transition-colors" placeholder="Enter your work email" type="email"/>
<button className="bg-[#007BFF] hover:bg-[#0069d9] text-white px-8 py-4 rounded-full text-sm font-medium transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(0,123,255,0.2)]" type="button">
                    Start Assessment
                </button>
</form>
<p className="text-xs text-gray-600 mt-6">Strict NDA protocols applied to all inquiries.</p>
</div>
</section>

<footer className="bg-[#0A0A0A] py-8 border-t border-white/5 mt-auto">
<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-lg font-semibold tracking-[0.2em] text-white">SKYLARK</span>
<p className="text-xs text-gray-600">© 2024 SKYLARK Drone Solutions. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
