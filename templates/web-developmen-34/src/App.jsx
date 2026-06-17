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
colors: {
navy: {
900: '#0F2338', // Primary BG
800: '#1A2634', // Secondary BG
700: '#1A3D5C', // Card BG
},
brand: {
blue: '#0B63F7', // Primary CTA
cyan: '#00C9FF', // Accents
magenta: '#D946EF', // Stats
green: '#22C55E', // Success
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
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
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-[#0F2338]/90 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-brand-blue flex items-center justify-center text-white">
<iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-white group-hover:text-brand-cyan transition-colors">WITSCODE</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#projects">Our Work</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#about">Who We Are</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#blog">Insights</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center justify-center px-6 py-2.5 bg-brand-blue hover:bg-blue-600 text-white text-sm font-medium rounded-full transition-all shadow-lg shadow-blue-900/20" href="#contact">
                    Book a Free Call
                </a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">

<div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-navy-900 via-navy-800 to-transparent opacity-80"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-x-16 gap-y-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
<span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
<span className="text-xs font-medium uppercase tracking-wider text-gray-300">Trusted Web Development Agency</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                        Websites Built to <br/>
                        Convert, Scale, and <br/>
<span className="text-brand-blue">Grow Your Business</span>
</h1>
<p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                        We build high-performance WordPress and Shopify solutions designed for B2B growth. No middlemen, just expert code.
                    </p>
<div className="flex flex-col sm:flex-row items-start gap-4">
<a className="px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white font-medium rounded-full transition-all shadow-xl shadow-brand-blue/20 flex items-center gap-2 group" href="#">
                            Get a Free Website Audit
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-medium rounded-full transition-all flex items-center gap-2" href="#">
                            View Portfolio
                        </a>
</div>
<div className="mt-12 flex items-center gap-8 text-gray-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-green" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Direct Expert Access</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-blue" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm">Quality Over Volume</span>
</div>
</div>
</div>

<div className="hidden lg:block h-[500px] relative">

<div className="absolute top-10 right-10 w-64 p-5 glass-card rounded-2xl border-l-4 border-l-brand-green animate-[float_4s_ease-in-out_infinite]">
<div className="flex items-start gap-4">
<div className="p-2 bg-brand-green/10 rounded-lg text-brand-green">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-bold text-white">99.9%</h3>
<p className="text-xs text-gray-400 mt-1">Uptime Guaranteed</p>
</div>
</div>
</div>

<div className="absolute top-48 left-0 w-72 p-6 bg-navy-700 rounded-2xl shadow-2xl border border-white/5 z-20 animate-[float_5s_ease-in-out_infinite_0.5s]">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-sm text-gray-400">Conversion Rate</p>
<h3 className="text-3xl font-bold text-white mt-1">4.8%</h3>
</div>
<span className="px-2 py-1 rounded bg-brand-magenta/10 text-brand-magenta text-xs font-semibold">+45% This Month</span>
</div>

<div className="h-16 flex items-end gap-1">
<div className="w-1/6 bg-white/10 h-30% rounded-t-sm"></div>
<div className="w-1/6 bg-white/10 h-50% rounded-t-sm"></div>
<div className="w-1/6 bg-white/10 h-40% rounded-t-sm"></div>
<div className="w-1/6 bg-white/10 h-70% rounded-t-sm"></div>
<div className="w-1/6 bg-white/10 h-60% rounded-t-sm"></div>
<div className="w-1/6 bg-brand-magenta h-90% rounded-t-sm"></div>
</div>
</div>

<div className="absolute bottom-10 right-20 w-64 p-5 glass-card rounded-2xl border-l-4 border-l-brand-cyan animate-[float_6s_ease-in-out_infinite_1s]">
<div className="flex items-start gap-4">
<div className="p-2 bg-brand-cyan/10 rounded-lg text-brand-cyan">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-bold text-white">&lt;2s</h3>
<p className="text-xs text-gray-400 mt-1">Load Time Optimized</p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-10 border-y border-white/5 bg-navy-800/50">
<div className="max-w-7xl mx-auto px-6 overflow-hidden">
<p className="text-center text-sm text-gray-500 mb-8 tracking-widest uppercase font-medium">Trusted by innovative businesses worldwide</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold font-serif text-white tracking-tight">VANGUARD</span>
<span className="text-xl font-bold italic text-white tracking-tight">BoltShift</span>
<span className="text-xl font-bold text-white tracking-tighter">NEXUS<span className="text-brand-blue">.IO</span></span>
<span className="text-xl font-semibold text-white tracking-widest">STRATOS</span>
<span className="text-xl font-bold text-white font-mono">CODE/CRAFT</span>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                    Comprehensive <span className="text-brand-blue">Digital Growth</span>
</h2>
<p className="text-gray-400 text-lg">We don't just write code. We engineer the infrastructure for your business to Build, Grow, and Scale.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-navy-700 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-brand-blue/30 relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-white" icon="solar:code-circle-linear" width="100"></iconify-icon>
</div>
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-brand-blue mb-6">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Build</h3>
<p className="text-gray-400 mb-8 leading-relaxed text-sm">Foundational web development tailored to business goals with clean, future-ready architecture.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-brand-blue" icon="solar:check-read-linear"></iconify-icon> Custom WordPress
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-brand-blue" icon="solar:check-read-linear"></iconify-icon> Shopify Stores
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-brand-blue" icon="solar:check-read-linear"></iconify-icon> Headless Commerce
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-brand-blue text-sm font-medium hover:gap-3 transition-all" href="#">
                        Explore Build Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-navy-700 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-brand-cyan/30 relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-white" icon="solar:graph-up-linear" width="100"></iconify-icon>
</div>
<div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-brand-cyan mb-6">
<iconify-icon icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Grow</h3>
<p className="text-gray-400 mb-8 leading-relaxed text-sm">Marketing optimization and high-fidelity design to turn visitors into loyal customers.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-brand-cyan" icon="solar:check-read-linear"></iconify-icon> UI/UX Design
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-brand-cyan" icon="solar:check-read-linear"></iconify-icon> CRO Audit
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-brand-cyan" icon="solar:check-read-linear"></iconify-icon> SEO Optimization
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-brand-cyan text-sm font-medium hover:gap-3 transition-all" href="#">
                        Explore Grow Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-navy-700 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-brand-magenta/30 relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-white" icon="solar:infinity-linear" width="100"></iconify-icon>
</div>
<div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center text-brand-magenta mb-6">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Scale</h3>
<p className="text-gray-400 mb-8 leading-relaxed text-sm">Automate workflows and maintain robust infrastructure for long-term expansion.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-brand-magenta" icon="solar:check-read-linear"></iconify-icon> Automation
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-brand-magenta" icon="solar:check-read-linear"></iconify-icon> Maintenance Plans
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-brand-magenta" icon="solar:check-read-linear"></iconify-icon> Cloud Infrastructure
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-brand-magenta text-sm font-medium hover:gap-3 transition-all" href="#">
                        Explore Scale Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-navy-800 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Why Partner with WitsCode?</h2>
<p className="text-gray-400 mb-10 text-lg">We bridge the gap between technical complexity and business results. Our direct-to-expert model ensures nothing gets lost in translation.</p>
<div className="grid grid-cols-2 gap-8">
<div>
<div className="text-4xl font-semibold text-white mb-2">150+</div>
<div className="text-sm text-gray-400">Projects Delivered</div>
</div>
<div>
<div className="text-4xl font-semibold text-white mb-2">15+</div>
<div className="text-sm text-gray-400">Global Markets Served</div>
</div>
<div>
<div className="text-4xl font-semibold text-white mb-2">6+</div>
<div className="text-sm text-gray-400">Years Experience</div>
</div>
<div>
<div className="text-4xl font-semibold text-white mb-2">100%</div>
<div className="text-sm text-gray-400">Client Satisfaction</div>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">

<div className="p-6 bg-navy-900 rounded-xl border border-white/5">
<iconify-icon className="text-brand-blue text-3xl mb-4" icon="solar:user-speak-linear"></iconify-icon>
<h4 className="text-white font-medium mb-2">Direct Communication</h4>
<p className="text-sm text-gray-400">Speak directly with the developers building your product. No account managers.</p>
</div>

<div className="p-6 bg-navy-900 rounded-xl border border-white/5">
<iconify-icon className="text-brand-blue text-3xl mb-4" icon="solar:cart-large-2-linear"></iconify-icon>
<h4 className="text-white font-medium mb-2">E-Commerce Specialists</h4>
<p className="text-sm text-gray-400">Deep expertise in Shopify and WooCommerce ecosystems.</p>
</div>

<div className="p-6 bg-navy-900 rounded-xl border border-white/5">
<iconify-icon className="text-brand-blue text-3xl mb-4" icon="solar:stopwatch-linear"></iconify-icon>
<h4 className="text-white font-medium mb-2">Rapid Delivery</h4>
<p className="text-sm text-gray-400">Agile sprints that get your product to market faster.</p>
</div>

<div className="p-6 bg-navy-900 rounded-xl border border-white/5">
<iconify-icon className="text-brand-blue text-3xl mb-4" icon="solar:shield-keyhole-linear"></iconify-icon>
<h4 className="text-white font-medium mb-2">Enterprise Security</h4>
<p className="text-sm text-gray-400">Best-in-class security practices integrated from day one.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Featured Projects</h2>
<p className="text-gray-400 max-w-xl">Success stories from our partnership with ambitious brands.</p>
</div>
<div className="flex gap-2 mt-4 md:mt-0">
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-navy-900 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-navy-900 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative overflow-hidden rounded-2xl aspect-video bg-navy-700 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent z-10"></div>

<div className="w-full h-full bg-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<span className="text-slate-500">Project Image Placeholder</span>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<span className="text-brand-blue text-xs font-semibold tracking-wider uppercase mb-2 block">Fintech</span>
<h3 className="text-2xl font-semibold text-white">Nova Finance Dashboard</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white text-navy-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-video bg-navy-700 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent z-10"></div>
<div className="w-full h-full bg-slate-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<span className="text-slate-500">Project Image Placeholder</span>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<span className="text-brand-cyan text-xs font-semibold tracking-wider uppercase mb-2 block">E-Commerce</span>
<h3 className="text-2xl font-semibold text-white">Luxe Wear Shopify</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white text-navy-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-navy-800 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white text-center mb-16 tracking-tight">What Clients Say</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-navy-900 p-8 rounded-2xl border border-white/5 relative">
<div className="text-brand-blue mb-4 flex gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-300 mb-6 text-sm leading-relaxed">"WitsCode transformed our outdated site into a lead generation machine. The speed optimization alone increased our conversions by 40%."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div>
<h4 className="text-white font-medium text-sm">Sarah Jenkins</h4>
<p className="text-xs text-gray-500">CMO, TechFlow</p>
</div>
</div>
</div>

<div className="bg-navy-900 p-8 rounded-2xl border border-white/5 relative">
<div className="text-brand-blue mb-4 flex gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-300 mb-6 text-sm leading-relaxed">"The level of technical expertise they bring to Shopify development is unmatched. They built custom features other agencies said were impossible."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div>
<h4 className="text-white font-medium text-sm">David Chen</h4>
<p className="text-xs text-gray-500">Founder, Urban Gear</p>
</div>
</div>
</div>

<div className="bg-navy-900 p-8 rounded-2xl border border-white/5 relative">
<div className="text-brand-blue mb-4 flex gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-300 mb-6 text-sm leading-relaxed">"Reliable, transparent, and skilled. The maintenance package gives me peace of mind knowing my business is always online and secure."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div>
<h4 className="text-white font-medium text-sm">Elena Rodriguez</h4>
<p className="text-xs text-gray-500">CEO, BrightStart</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to <span className="text-brand-blue">Scale Your Vision?</span></h2>
<p className="text-lg text-gray-400 mb-10">Get a custom roadmap for your digital presence. No commitment required.</p>
<form className="bg-navy-800 p-2 rounded-full border border-white/10 flex flex-col sm:flex-row gap-2 max-w-lg mx-auto shadow-2xl">
<input className="bg-transparent text-white px-6 py-3 w-full outline-none placeholder:text-gray-500 text-sm" placeholder="Enter your business email" type="email"/>
<button className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all text-sm whitespace-nowrap" type="submit">
                    Book Audit
                </button>
</form>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] -z-10"></div>
</section>

<footer className="bg-navy-900 border-t border-white/5 pt-16 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-brand-blue flex items-center justify-center text-white">
<iconify-icon icon="solar:code-square-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold text-white tracking-tight">WITSCODE</span>
</a>
<p className="text-gray-500 mb-6">Websites Built to Convert, Scale, and Grow Your Business.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-brand-blue transition-colors" href="#"><iconify-icon icon="ri:facebook-fill" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-brand-blue transition-colors" href="#"><iconify-icon icon="ri:twitter-x-fill" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-brand-blue transition-colors" href="#"><iconify-icon icon="ri:linkedin-fill" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-brand-blue transition-colors" href="#"><iconify-icon icon="ri:instagram-line" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-3 text-gray-500">
<li><a className="hover:text-brand-blue transition-colors" href="#">WordPress Dev</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Shopify Stores</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">UI/UX Design</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-gray-500">
<li><a className="hover:text-brand-blue transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Our Process</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Resources</h4>
<ul className="space-y-3 text-gray-500">
<li><a className="hover:text-brand-blue transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">SEO Guide</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-600">© 2023 WitsCode Agency. All rights reserved.</p>
<button className="w-10 h-10 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-up-linear"></iconify-icon>
</button>
</div>
</div>
</footer>

<style>
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }
    </style>

    </>
  );
}
