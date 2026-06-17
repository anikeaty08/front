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
navy: '#1e3a5f',
gold: '#fdb913',
gray: '#333333',
light: '#f8fafc'
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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
      

<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex-shrink-0 flex items-center gap-3 group" href="#home">

<div className="relative w-11 h-11 flex items-center justify-center bg-brand-navy rounded-lg shadow-sm border border-brand-navy/10 group-hover:bg-brand-gold transition-all duration-300 ease-in-out overflow-hidden">

<img alt="Fit Rite Logo" className="w-7 h-7 object-contain filter brightness-0 invert group-hover:invert-0 group-hover:brightness-0 group-hover:opacity-80 transition-all duration-300 transform group-hover:scale-110" src="https://storage.googleapis.com/msgsndr/SkjgPv4mvqRgtGgyoXgJ/media/665a174416e01c190cd8e517.png"/>
</div>

<div className="flex flex-col justify-center">
<span className="text-lg font-bold text-brand-navy tracking-tighter leading-none group-hover:text-slate-800 transition-colors">FIT RITE</span>
<span className="text-[0.6rem] font-bold text-brand-gold uppercase tracking-widest leading-snug group-hover:text-brand-navy transition-colors">Fabrication &amp; Machining</span>
</div>
</a>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors" href="#contact">Contact</a>
<a className="bg-brand-gold hover:bg-yellow-400 text-brand-navy px-5 py-2.5 rounded text-sm font-semibold transition-colors" href="tel:2362459353">
                        (236) 245-9353
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-brand-navy focus:outline-none p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1">
<a className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-navy rounded-md" href="#home">Home</a>
<a className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-navy rounded-md" href="#services">Services</a>
<a className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-navy rounded-md" href="#about">About</a>
<a className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-navy rounded-md" href="#contact">Contact</a>
<a className="block w-full text-center mt-4 bg-brand-gold text-brand-navy px-4 py-3 rounded font-semibold" href="tel:2362459353">
                    Call Now: (236) 245-9353
                </a>
</div>
</div>
</nav>

<section className="relative pt-20 flex items-center min-h-[90vh]" id="home">

<div className="absolute inset-0 z-0">
<img alt="Welding Background" className="w-full h-full object-cover filter brightness-50 grayscale sm:grayscale-0" src="https://assets.cdn.filesafe.space/SkjgPv4mvqRgtGgyoXgJ/media/6657c5f399efd13d8571d91d.jpeg"/>
<div className="absolute inset-0 hero-overlay"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
<div className="max-w-3xl">
<div className="inline-flex items-center space-x-2 bg-brand-navy/50 border border-white/20 rounded-full px-3 py-1 mb-6 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-brand-gold"></span>
<span className="text-xs font-medium text-white tracking-wide uppercase">Serving the Fraser Valley</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-tight mb-6">
                    YOUR METALWORK <br/>
<span className="text-brand-gold">PARTNER</span>
</h1>
<p className="text-lg sm:text-xl text-slate-300 mb-8 font-light max-w-2xl leading-relaxed">
                    Custom Fabrication • Equipment Solutions • Expertise.<br/>
                    We bridge the gap between your project needs and flawless execution.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-sm font-semibold rounded bg-brand-gold text-brand-navy hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl" href="#contact">
                        Get A Quote
                    </a>
<a className="inline-flex justify-center items-center px-8 py-3.5 border border-white text-sm font-semibold rounded text-white hover:bg-white hover:text-brand-navy transition-all" href="#services">
                        View Services
                    </a>
</div>
</div>
</div>
</section>

<div className="bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left divide-x divide-slate-100">
<div className="px-4">
<p className="text-3xl font-semibold text-brand-navy tracking-tight">25+</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Years Experience</p>
</div>
<div className="px-4">
<p className="text-3xl font-semibold text-brand-navy tracking-tight">2006</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Established</p>
</div>
<div className="px-4">
<p className="text-3xl font-semibold text-brand-navy tracking-tight">1000s</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Jobs Completed</p>
</div>
<div className="px-4">
<p className="text-3xl font-semibold text-brand-navy tracking-tight">Family</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Owned &amp; Operated</p>
</div>
</div>
</div>
</div>

<section className="py-20 md:py-32 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<h2 className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-2">About Fitrite</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight mb-6">The Intermediary You've Been Looking For</h3>
<div className="prose prose-slate text-slate-600 space-y-4">
<p className="leading-relaxed">
                            Founded in 2006 by Ryan and Andrea Grendus, Fitrite Fabrication isn't your typical machine shop. We're your metalwork intermediary – the essential connection between your project requirements and the craftsmanship needed to execute them flawlessly.
                        </p>
<p className="leading-relaxed">
                            With over 25 years of hands-on experience, Ryan has built a reputation for being the person who "makes it work." Whether you're a contractor who needs custom railings fabricated, a business owner with infrastructure repairs, or an equipment operator dealing with unexpected breakdowns, we translate challenges into solutions.
                        </p>
</div>
<div className="mt-8 flex flex-col space-y-3">
<div className="flex items-center space-x-3">
<iconify-icon className="text-brand-gold text-xl" icon="lucide:check-circle"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Direct communication with Ryan (No project managers)</span>
</div>
<div className="flex items-center space-x-3">
<iconify-icon className="text-brand-gold text-xl" icon="lucide:check-circle"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Problem-solving mindset</span>
</div>
<div className="flex items-center space-x-3">
<iconify-icon className="text-brand-gold text-xl" icon="lucide:check-circle"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Fraser Valley roots</span>
</div>
</div>
<div className="mt-10">
<a className="text-brand-navy font-semibold text-sm border-b-2 border-brand-gold hover:text-brand-gold transition-colors pb-1" href="#contact">
                            Meet Ryan Grendus →
                        </a>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="aspect-[4/5] relative rounded-lg overflow-hidden bg-slate-100">
<img alt="Ryan Grendus" className="absolute inset-0 w-full h-full object-cover" src="https://assets.cdn.filesafe.space/SkjgPv4mvqRgtGgyoXgJ/media/e9ba9e28-df22-4ac8-9ca8-055fa671919d.jpeg"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
<p className="text-white font-medium">Ryan Grendus</p>
<p className="text-slate-300 text-xs">Owner &amp; Operator</p>
</div>
</div>

<div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-slate-100 rounded-lg"></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-light border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-2">Our Capabilities</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight">Comprehensive Fabrication &amp; Machining</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white p-8 rounded border border-slate-200 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mb-6 group-hover:bg-brand-navy transition-colors">
<iconify-icon className="text-2xl text-brand-navy group-hover:text-brand-gold" icon="lucide:hammer" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-brand-navy mb-3 tracking-tight">Custom Fabrication</h4>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                        Commercial railings, staircases, structural steel, and custom machinery components. We work with mild steel, stainless, and aluminum to bring your vision to life.
                    </p>
<ul className="space-y-2 mb-8 border-t border-slate-100 pt-4">
<li className="flex items-center text-xs text-slate-500">
<span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>Railings &amp; Stairs
                        </li>
<li className="flex items-center text-xs text-slate-500">
<span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>Structural Steel
                        </li>
<li className="flex items-center text-xs text-slate-500">
<span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>Infrastructure Repairs
                        </li>
</ul>
</div>

<div className="group bg-white p-8 rounded border border-slate-200 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mb-6 group-hover:bg-brand-navy transition-colors">
<iconify-icon className="text-2xl text-brand-navy group-hover:text-brand-gold" icon="lucide:truck" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-brand-navy mb-3 tracking-tight">Heavy Equipment</h4>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                        Structural welding repairs, bucket rebuilds, and frame repairs. Keep your fleet running with minimal downtime through our expert repair services.
                    </p>
<ul className="space-y-2 mb-8 border-t border-slate-100 pt-4">
<li className="flex items-center text-xs text-slate-500">
<span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>Bucket Rebuilds
                        </li>
<li className="flex items-center text-xs text-slate-500">
<span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>Boom Repairs
                        </li>
<li className="flex items-center text-xs text-slate-500">
<span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>Custom Attachments
                        </li>
</ul>
</div>

<div className="group bg-white p-8 rounded border border-slate-200 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mb-6 group-hover:bg-brand-navy transition-colors">
<iconify-icon className="text-2xl text-brand-navy group-hover:text-brand-gold" icon="lucide:settings" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-brand-navy mb-3 tracking-tight">On-Site Machining</h4>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                        Mobile line boring and pivot point repairs. We bring precision equipment to your location to eliminate transportation costs and reduce downtime.
                    </p>
<ul className="space-y-2 mb-8 border-t border-slate-100 pt-4">
<li className="flex items-center text-xs text-slate-500">
<span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>Line Boring
                        </li>
<li className="flex items-center text-xs text-slate-500">
<span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>Pin &amp; Bushing
                        </li>
<li className="flex items-center text-xs text-slate-500">
<span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>Mobile Service
                        </li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center text-sm font-semibold text-brand-navy border border-slate-300 px-6 py-3 rounded hover:bg-white hover:border-brand-navy transition-colors bg-white" href="#contact">
                    Discuss Your Project <iconify-icon className="ml-2" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-brand-gold text-xl" icon="lucide:message-circle"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-base font-semibold text-brand-navy">Direct Communication</h4>
<p className="mt-2 text-sm text-slate-500">Talk directly to Ryan. No layers of management, no miscommunication.</p>
</div>
</div>

<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-brand-gold text-xl" icon="lucide:clock"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-base font-semibold text-brand-navy">Realistic Timelines</h4>
<p className="mt-2 text-sm text-slate-500">We tell you what is achievable and we stick to the schedule we promise.</p>
</div>
</div>

<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-brand-gold text-xl" icon="lucide:lightbulb"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-base font-semibold text-brand-navy">Problem Solving</h4>
<p className="mt-2 text-sm text-slate-500">If it can be fabricated, we'll figure it out. We thrive on challenges.</p>
</div>
</div>

<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-brand-gold text-xl" icon="lucide:map"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-base font-semibold text-brand-navy">Mobile Capability</h4>
<p className="mt-2 text-sm text-slate-500">Fully equipped to come to you when transporting equipment isn't feasible.</p>
</div>
</div>

<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-brand-gold text-xl" icon="lucide:layers"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-base font-semibold text-brand-navy">Material Versatility</h4>
<p className="mt-2 text-sm text-slate-500">Expertise in mild steel, stainless steel, and aluminum fabrication.</p>
</div>
</div>

<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-brand-gold text-xl" icon="lucide:shield-check"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-base font-semibold text-brand-navy">Fair Pricing</h4>
<p className="mt-2 text-sm text-slate-500">Quality work at honest prices. No hidden fees or surprises.</p>
</div>
</div>
</div>
</div>
</section>

<div className="py-12 border-t border-slate-100 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">Industries We Serve</p>
<div className="flex flex-wrap justify-center gap-4 md:gap-8">
<span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-medium text-slate-600 shadow-sm">Construction</span>
<span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-medium text-slate-600 shadow-sm">Manufacturing</span>
<span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-medium text-slate-600 shadow-sm">Excavation</span>
<span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-medium text-slate-600 shadow-sm">Agriculture</span>
<span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-medium text-slate-600 shadow-sm">Forestry</span>
</div>
</div>
</div>

<section className="py-20 bg-brand-navy relative overflow-hidden" id="contact">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Got a Metalwork Challenge?</h2>
<p className="text-slate-300 text-lg mb-12 font-light">Whether it's a custom fabrication project, an urgent repair, or a "can you even make this?" question – let's talk.</p>
<div className="space-y-8">
<div className="flex items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
<iconify-icon className="text-brand-gold text-2xl" icon="lucide:phone"></iconify-icon>
</div>
<div className="ml-6">
<p className="text-sm text-slate-400 uppercase tracking-wider font-medium">Call Us Directly</p>
<a className="text-2xl md:text-3xl text-white font-semibold hover:text-brand-gold transition-colors" href="tel:2362459353">(236) 245-9353</a>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
<iconify-icon className="text-brand-gold text-2xl" icon="lucide:mail"></iconify-icon>
</div>
<div className="ml-6">
<p className="text-sm text-slate-400 uppercase tracking-wider font-medium">Email Us</p>
<a className="text-lg text-white hover:text-brand-gold transition-colors" href="mailto:ryan@fitritefabrication.com">ryan@fitritefabrication.com</a>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
<iconify-icon className="text-brand-gold text-2xl" icon="lucide:map-pin"></iconify-icon>
</div>
<div className="ml-6">
<p className="text-sm text-slate-400 uppercase tracking-wider font-medium">Location</p>
<p className="text-lg text-white">Chilliwack, BC, Canada</p>
<p className="text-sm text-slate-400 mt-1">Serving the Fraser Valley &amp; Lower Mainland</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg p-8 shadow-2xl">
<form className="space-y-6">
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2" htmlFor="name">Name</label>
<input className="block w-full rounded border-slate-200 bg-slate-50 p-3 text-sm focus:border-brand-navy focus:ring-brand-navy" id="name" placeholder="Your Name" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2" htmlFor="email">Email</label>
<input className="block w-full rounded border-slate-200 bg-slate-50 p-3 text-sm focus:border-brand-navy focus:ring-brand-navy" id="email" placeholder="you@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2" htmlFor="phone">Phone</label>
<input className="block w-full rounded border-slate-200 bg-slate-50 p-3 text-sm focus:border-brand-navy focus:ring-brand-navy" id="phone" placeholder="(555) 123-4567" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2" htmlFor="service">Service Needed</label>
<div className="relative">
<select className="block w-full appearance-none rounded border-slate-200 bg-slate-50 p-3 text-sm focus:border-brand-navy focus:ring-brand-navy text-slate-600" id="service">
<option>Custom Fabrication</option>
<option>Heavy Equipment Repair</option>
<option>On-Site Machining</option>
<option>Other / General Inquiry</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2" htmlFor="message">Project Details</label>
<textarea className="block w-full rounded border-slate-200 bg-slate-50 p-3 text-sm focus:border-brand-navy focus:ring-brand-navy" id="message" placeholder="Describe your project..." rows="4"></textarea>
</div>
<button className="w-full bg-brand-gold hover:bg-yellow-400 text-brand-navy font-bold py-3.5 rounded transition-all transform active:scale-95 shadow-md" type="button">
                            Send Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1">
<span className="text-white text-xl font-bold tracking-tighter uppercase">FITRITE</span>
<p className="mt-4 text-sm leading-relaxed">
                        Your Fraser Valley metalwork partner. Honest, experienced, and dedicated to solving your fabrication challenges since 2006.
                    </p>
</div>
<div>
<h5 className="text-white font-semibold mb-4 text-sm">Services</h5>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Custom Fabrication</a></li>
<li><a className="hover:text-white transition-colors" href="#">Heavy Equipment</a></li>
<li><a className="hover:text-white transition-colors" href="#">Line Boring</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mobile Welding</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-semibold mb-4 text-sm">Service Area</h5>
<ul className="space-y-2 text-sm">
<li>Chilliwack</li>
<li>Abbotsford</li>
<li>Mission &amp; Hope</li>
<li>Langley &amp; Surrey</li>
</ul>
</div>
<div>
<h5 className="text-white font-semibold mb-4 text-sm">Hours</h5>
<ul className="space-y-2 text-sm">
<li className="flex justify-between"><span>Mon - Fri</span> <span className="text-white">7:00 - 5:00</span></li>
<li className="flex justify-between"><span>Saturday</span> <span className="text-white">Appt Only</span></li>
<li className="flex justify-between"><span>Sunday</span> <span className="text-white">Closed</span></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2024 Fit Rite Fabrication. All rights reserved.</p>
<div className="mt-4 md:mt-0 flex space-x-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
