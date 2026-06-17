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
brand: {
50: '#eff6ff',
500: '#3b82f6',
600: '#2563eb',
900: '#1e3a8a',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white rounded flex items-center justify-center shrink-0">
<span className="text-zinc-950 font-semibold tracking-tighter text-lg">NB</span>
</div>
<span className="font-medium text-zinc-100 tracking-tight text-sm md:text-base truncate">NEW BODY FITNESS EQUIPMENT REPAIR</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#gallery">Our Work</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors" href="tel:0567909803">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.05 12.05 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.03 12.03 0 0 0 2.81.7A2 2 0 0 1 22 16.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                    056 790 9803
                </a>
<button className="bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-medium px-4 py-2 rounded-full transition-colors">
                    Book Service
                </button>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-brand-500 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                New Body Fitness Equipment Repair • 24/7 Support
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Expert Repair for <br className="hidden md:block"/> Professional Gyms.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Specialized in treadmill motors, cables, and electronic diagnostics. We keep your equipment moving so your clients can too.
            </p>
<div className="flex flex-col items-center gap-6">
<div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
<button className="w-full md:w-auto bg-white hover:bg-zinc-200 text-zinc-950 h-12 px-8 rounded-full font-medium transition-all flex items-center justify-center gap-2">
                        Request Repair
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<a className="w-full md:w-auto h-12 px-8 rounded-full font-medium text-zinc-300 border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2" href="tel:0567909803">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.05 12.05 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.03 12.03 0 0 0 2.81.7A2 2 0 0 1 22 16.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                        056 790 9803
                    </a>
</div>
</div>
</div>

<div className="mt-20 relative max-w-6xl mx-auto border border-white/10 rounded-2xl bg-zinc-900 overflow-hidden h-64 md:h-[500px] shadow-2xl">

<img alt="Gym Equipment" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="image-overlay absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex items-end justify-between">
<div className="hidden md:block">
<div className="flex items-center gap-2 mb-2">
<div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs uppercase tracking-widest text-zinc-300 font-medium">System Operational</span>
</div>
<p className="text-zinc-400 text-sm">Professional maintenance for premium facilities.</p>
</div>
<div className="grid grid-cols-3 gap-6 md:gap-12 w-full md:w-auto">
<div className="flex flex-col items-center md:items-start gap-1">
<span className="text-2xl font-semibold text-white">24h</span>
<span className="text-xs text-zinc-400 uppercase tracking-wide">Response</span>
</div>
<div className="flex flex-col items-center md:items-start gap-1">
<span className="text-2xl font-semibold text-white">500+</span>
<span className="text-xs text-zinc-400 uppercase tracking-wide">Repairs</span>
</div>
<div className="flex flex-col items-center md:items-start gap-1">
<span className="text-2xl font-semibold text-white">100%</span>
<span className="text-xs text-zinc-400 uppercase tracking-wide">Genuine Parts</span>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-black/20 py-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-zinc-500 mb-6 font-medium">TRUSTED BY PREMIER FITNESS CENTERS</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-semibold tracking-tighter text-white">FITNESS<span className="font-light text-zinc-400">FIRST</span></span>
<span className="text-lg font-semibold tracking-widest text-white uppercase">Gold's</span>
<span className="text-lg font-bold italic tracking-tight text-white">GYMNATION</span>
<span className="text-lg font-light tracking-wide text-white uppercase border border-white px-2">Warehouse</span>
<span className="text-lg font-medium tracking-tight text-white">Five<span className="text-brand-500">Hotels</span></span>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-20">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Comprehensive Care</h2>
<p className="text-zinc-400 max-w-xl">We handle everything from treadmill motor replacements to cable machine tension adjustments and preventive AMCs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-white border border-white/5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Electronic Repair</h3>
<p className="text-sm leading-relaxed text-zinc-400 mb-6">Expert diagnosis and fix for consoles, motherboards, and motor controllers on treadmills.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-brand-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Circuit Board Diagnostics
                            </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-brand-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Sensor Calibration
                            </li>
</ul>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-white border border-white/5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hammer" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Mechanical Fixes</h3>
<p className="text-sm leading-relaxed text-zinc-400 mb-6">Heavy-duty repair for cables, pulleys, weight stacks, and structural welding.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-brand-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Cable Replacement
                            </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-brand-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Bearing &amp; Belt Changes
                            </li>
</ul>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-white border border-white/5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar-clock" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"></path><circle cx="16" cy="16" r="6"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Preventive AMC</h3>
<p className="text-sm leading-relaxed text-zinc-400 mb-6">Annual Maintenance Contracts (AMC) designed to extend equipment lifespan and prevent downtime.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-brand-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Monthly Scheduled Visits
                            </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-brand-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Detailed Health Reports
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/40" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-8">
<h3 className="text-xl font-medium text-white tracking-tight">Recent Projects</h3>
<span className="text-xs text-zinc-500 font-mono">LIVE FEED</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[400px]">

<div className="md:col-span-2 relative group rounded-xl overflow-hidden border border-white/10 h-full">
<img alt="Gym Weights" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-4 left-4">
<span className="text-white text-sm font-medium">Strength Equipment</span>
<p className="text-zinc-300 text-xs">Full Calibration</p>
</div>
</div>

<div className="md:col-span-1 flex flex-col gap-4 h-full">
<div className="relative group rounded-xl overflow-hidden border border-white/10 flex-1">
<img alt="Treadmill" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-4 left-4">
<span className="text-white text-sm font-medium">Cardio Zone</span>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden border border-white/10 flex-1">
<img alt="Technician" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-4 left-4">
<span className="text-white text-sm font-medium">Expert Technicians</span>
</div>
</div>
</div>

<div className="md:col-span-1 relative group rounded-xl overflow-hidden border border-white/10 h-full">
<img alt="Gym Facility" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1540497077202-7c8a33801524?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-4 left-4">
<span className="text-white text-sm font-medium">Facility AMC</span>
<p className="text-zinc-300 text-xs">Monthly Service</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-zinc-900/10" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Zero friction,<br/>maximum uptime.</h2>
<p className="text-zinc-400 mb-8 leading-relaxed">
                        We understand that every hour your equipment is "Out of Order" is money lost. Our process is optimized for speed and transparency.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-none flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-brand-500/50 text-brand-500 flex items-center justify-center text-xs font-bold bg-brand-500/10">1</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-white font-medium text-sm">Rapid Assessment</h4>
<p className="text-sm text-zinc-500 mt-1">Book a visit via Call or Web. Our technicians arrive within 24 hours in major cities.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/10 text-zinc-400 flex items-center justify-center text-xs font-bold bg-zinc-800">2</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-white font-medium text-sm">Transparent Quote</h4>
<p className="text-sm text-zinc-500 mt-1">Receive a digital breakdown of parts and labor costs before we start any work.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/10 text-zinc-400 flex items-center justify-center text-xs font-bold bg-zinc-800">3</div>
</div>
<div>
<h4 className="text-white font-medium text-sm">Service &amp; Guarantee</h4>
<p className="text-sm text-zinc-500 mt-1">We fix it on-site or transport it to our workshop. All repairs come with a warranty.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-brand-500/20 blur-[80px] rounded-full"></div>
<div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<span className="text-xs uppercase tracking-widest text-zinc-500">Service Area</span>
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-300 flex items-center gap-2"><svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg> Dubai</span>
<span className="text-zinc-500 text-xs bg-zinc-800 px-2 py-1 rounded">24h Response</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-300 flex items-center gap-2"><svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg> Abu Dhabi</span>
<span className="text-zinc-500 text-xs bg-zinc-800 px-2 py-1 rounded">24h Response</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-300 flex items-center gap-2"><svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg> Sharjah</span>
<span className="text-zinc-500 text-xs bg-zinc-800 px-2 py-1 rounded">Next Day</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-300 flex items-center gap-2"><svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg> Ras Al Khaimah</span>
<span className="text-zinc-500 text-xs bg-zinc-800 px-2 py-1 rounded">Scheduled</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto text-center mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Ready to fix your equipment?</h2>
<p className="text-zinc-400">Fill out the details below or call us at <a className="text-white hover:text-brand-500 font-medium transition-colors" href="tel:0567909803">056 790 9803</a></p>
</div>
<div className="max-w-xl mx-auto bg-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-zinc-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">Phone</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-zinc-700" placeholder="056 790 9803" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">Gym / Location</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-zinc-700" placeholder="e.g. Gold's Gym, Business Bay" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">Issue Details</label>
<textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-zinc-700" placeholder="Describe the machine and the problem..." rows="3"></textarea>
</div>
<button className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-medium h-12 rounded-lg transition-colors mt-2" type="button">
                    Submit Request
                </button>
</form>
</div>
</section>

<footer className="bg-black border-white/5 border-t pt-12 pr-6 pb-12 pl-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-center md:justify-start gap-2 mb-1">
<div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-white text-xs font-bold">NB</div>
<span className="text-white text-sm font-medium">NEW BODY FITNESS EQUIPMENT REPAIR</span>
</div>
<span className="text-zinc-500 text-xs">Serving the UAE Fitness Industry since 2010</span>
<a className="text-zinc-400 text-sm hover:text-brand-500 transition-colors mt-2" href="tel:0567909803">Tel: 056 790 9803</a>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide w-[16px] h-[16px]" data-icon="lucide:instagram" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
</div>
</div>
</footer>

    </>
  );
}
