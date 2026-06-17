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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300">
<svg aria-hidden="true" className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-xl font-medium tracking-tight text-white">proclink</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Industries</a>
<a className="hover:text-white transition-colors" href="#">Products</a>
<a className="hover:text-white transition-colors" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-zinc-300 hover:text-white transition-colors">Contact Us</button>
<button className="bg-white text-zinc-950 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-orange-50 hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
                    Request a demo
                    <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-zinc-950">

<div className="absolute inset-0 z-0">
<img alt="Office" className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-zinc-400 text-xs font-medium mb-8 animate-[fade-in-up_1s_ease-out]">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                Defining the future of energy
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
                Precision in Digital <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Transformation</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light">
                Leverage real-time operational data to optimize workflows, manage risk, and drive meaningful outcomes across your enterprise.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-4 bg-white text-zinc-950 rounded-full font-medium text-lg hover:bg-orange-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center gap-2 group">
                    Explore the Platform
                    <svg aria-hidden="true" className="lucide lucide-circle-arrow-down w-5 h-5 group-hover:translate-y-1 transition-transform" data-lucide="circle-arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="m8 12 4 4 4-4"></path></svg>
</button>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-32 pb-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="absolute -inset-4 bg-orange-100 rounded-[2rem] -rotate-3 group-hover:-rotate-2 transition-transform duration-500"></div>
<img alt="Dashboard" className="shadow-orange-900/10 group-hover:grayscale-0 transition-all duration-700 ease-in-out w-full h-[500px] object-cover rounded-2xl relative shadow-2xl grayscale" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-zinc-100 max-w-xs animate-[bounce_3s_infinite]">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-green-100 rounded-lg text-green-600">
<svg aria-hidden="true" className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-sm font-medium text-zinc-500">Efficiency</span>
</div>
<div className="text-3xl font-medium tracking-tight text-zinc-900">+42%</div>
<div className="text-sm text-zinc-400 mt-1">Operational uplift realized</div>
</div>
</div>
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">
                        We turn complex signals into <span className="text-orange-600">real-time intelligence.</span>
</h2>
<p className="text-lg text-zinc-500 leading-relaxed mb-8">
                        By connecting systems, data, and processes, Proclink turns fragmented operational signals into clear, real-time intelligence. Our approach helps teams gain visibility, manage risk, and make informed decisions with confidence.
                    </p>
<div className="flex gap-4">
<div className="pl-4 border-l-2 border-orange-500">
<div className="text-lg font-medium text-zinc-900">Seamless Integration</div>
<div className="text-zinc-500">Works with your existing stack</div>
</div>
<div className="pl-4 border-l-2 border-zinc-200 hover:border-orange-500 transition-colors duration-300">
<div className="text-lg font-medium text-zinc-900">Predictive Modeling</div>
<div className="text-zinc-500">Forecast outcomes accurately</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl border border-white/10">
<img alt="Team" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-2xl font-medium tracking-tight mb-2">Designed for teams who make critical decisions.</h3>
<p className="text-zinc-400">Real teams, real workflows, real results.</p>
</div>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-orange-500/50 transition-colors duration-300 flex flex-col justify-between h-64 group">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-award w-6 h-6" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div>
<div className="text-4xl font-medium tracking-tight mb-1">15+</div>
<div className="text-sm text-zinc-400">Years of industry experience</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-white text-zinc-950 border border-white/10 flex flex-col justify-between h-64 group">
<div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<div className="text-4xl font-medium tracking-tight mb-1">100+</div>
<div className="text-sm text-zinc-500">Client engagements delivered</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-orange-500/50 transition-colors duration-300 flex flex-col justify-between h-64 group">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-globe w-6 h-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div>
<div className="text-4xl font-medium tracking-tight mb-1">4+</div>
<div className="text-sm text-zinc-400">Global office hubs</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-orange-500/50 transition-colors duration-300 flex flex-col justify-between h-64 group">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<div className="text-4xl font-medium tracking-tight mb-1">15%</div>
<div className="text-sm text-zinc-400">Avg. efficiency increase</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-orange-50/30">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900">Our Industries</h2>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center hover:bg-zinc-50 transition-colors">
<svg aria-hidden="true" className="lucide lucide-arrow-left w-4 h-4 text-zinc-600" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center hover:bg-zinc-50 transition-colors">
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 text-zinc-600" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="overflow-x-auto hide-scrollbar pb-8">
<div className="flex gap-6 px-6 max-w-7xl mx-auto w-max">

<div className="w-80 h-96 rounded-2xl relative overflow-hidden group cursor-pointer flex-shrink-0">
<img alt="Industry" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
<div className="absolute top-6 left-6 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white">
<svg aria-hidden="true" className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div className="absolute bottom-6 left-6 pr-6">
<h3 className="text-white text-xl font-medium tracking-tight mb-2">Manufacturing Intelligence</h3>
<p className="text-zinc-300 text-sm">Optimize production lines.</p>
</div>
</div>

<div className="w-80 h-96 rounded-2xl bg-white border border-zinc-200 p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 flex-shrink-0">
<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 group-hover:rotate-6 transition-transform">
<svg aria-hidden="true" className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Risk, Compliance &amp; Data Analytics</h3>
<div className="w-8 h-1 bg-zinc-200 rounded-full group-hover:w-full group-hover:bg-orange-500 transition-all duration-500"></div>
</div>
</div>

<div className="w-80 h-96 rounded-2xl bg-white border border-zinc-200 p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 flex-shrink-0">
<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 group-hover:rotate-6 transition-transform">
<svg aria-hidden="true" className="lucide lucide-blocks w-6 h-6" data-lucide="blocks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Digital Modernization &amp; Governance</h3>
<div className="w-8 h-1 bg-zinc-200 rounded-full group-hover:w-full group-hover:bg-orange-500 transition-all duration-500"></div>
</div>
</div>

<div className="w-80 h-96 rounded-2xl bg-white border border-zinc-200 p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 flex-shrink-0">
<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 group-hover:rotate-6 transition-transform">
<svg aria-hidden="true" className="lucide lucide-activity w-6 h-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Operational Intelligence &amp; Performance</h3>
<div className="w-8 h-1 bg-zinc-200 rounded-full group-hover:w-full group-hover:bg-orange-500 transition-all duration-500"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center mb-16">
<h2 className="text-4xl font-medium tracking-tight text-zinc-900">Our <span className="text-orange-600">Services</span></h2>
<a className="text-sm font-medium text-zinc-500 hover:text-orange-600 flex items-center gap-1" href="#">View All Services <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-zinc-100 bg-zinc-50 hover:bg-white hover:shadow-lg hover:border-zinc-200 transition-all duration-300 group">
<div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white mb-6">
<svg aria-hidden="true" className="lucide lucide-network w-5 h-5" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Digital Transformation</h3>
<p className="text-zinc-500 text-base mb-6 leading-relaxed">
                        By integrating real-time operational data across systems, Proclink helped a large manufacturing organization identify root causes faster.
                    </p>
<a className="text-sm font-medium text-orange-600 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" href="#">
                        Learn more <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="col-span-1 lg:col-span-2 relative rounded-2xl overflow-hidden group p-8 flex flex-col justify-end min-h-[300px]">
<img alt="Service" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-zinc-900/60 group-hover:bg-zinc-900/50 transition-colors"></div>
<div className="relative z-10 max-w-lg">
<div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4 border border-white/20">
<svg aria-hidden="true" className="lucide lucide-database w-5 h-5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Enterprise Data Strategy</h3>
<p className="text-zinc-300">Unlock the full potential of your data assets with a comprehensive strategy that aligns with business goals.</p>
</div>
</div>

<div className="p-8 rounded-2xl border border-zinc-100 bg-zinc-50 hover:bg-white hover:shadow-lg hover:border-zinc-200 transition-all duration-300 group">
<div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white mb-6">
<svg aria-hidden="true" className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Performance Analytics</h3>
<p className="text-zinc-500 text-base mb-6 leading-relaxed">
                        Visualize key performance indicators and operational metrics in real-time to drive immediate improvements.
                    </p>
<a className="text-sm font-medium text-orange-600 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" href="#">
                        Learn more <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="p-8 rounded-2xl border border-zinc-100 bg-zinc-50 hover:bg-white hover:shadow-lg hover:border-zinc-200 transition-all duration-300 group">
<div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white mb-6">
<svg aria-hidden="true" className="lucide lucide-refresh-cw w-5 h-5" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Process Automation</h3>
<p className="text-zinc-500 text-base mb-6 leading-relaxed">
                        Automate repetitive tasks and complex workflows to reduce errors and free up human capital for strategic work.
                    </p>
<a className="text-sm font-medium text-orange-600 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" href="#">
                        Learn more <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="p-8 rounded-2xl border border-zinc-100 bg-zinc-50 hover:bg-white hover:shadow-lg hover:border-zinc-200 transition-all duration-300 group">
<div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white mb-6">
<svg aria-hidden="true" className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">System Integration</h3>
<p className="text-zinc-500 text-base mb-6 leading-relaxed">
                        Connect disparate systems into a unified ecosystem that shares data seamlessly across the organization.
                    </p>
<a className="text-sm font-medium text-orange-600 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" href="#">
                        Learn more <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-orange-50/20">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl font-medium tracking-tight text-zinc-900 mb-12 text-center">Real stories. Real <span className="text-orange-600">results.</span></h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="Analytics" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-zinc-800">Case Study</div>
</div>
<div className="p-8">
<h3 className="text-lg font-medium leading-snug mb-4">Cut Operational Incident Resolution Time by 35%</h3>
<p className="text-zinc-500 text-sm mb-6 line-clamp-3">
                            By integrating real-time operational data across systems, Proclink helped a large manufacturing organization identify root causes faster.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 group-hover:gap-3 transition-all" href="#">
                            Read story <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="Monitoring" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-zinc-800">Case Study</div>
</div>
<div className="p-8">
<h3 className="text-lg font-medium leading-snug mb-4">Improved Risk Monitoring and Compliance Visibility</h3>
<p className="text-zinc-500 text-sm mb-6 line-clamp-3">
                            Through advanced analytics and data integration, Proclink supported a financial institution in strengthening risk oversight.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 group-hover:gap-3 transition-all" href="#">
                            Read story <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="Network" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&amp;w=2676&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-zinc-800">Case Study</div>
</div>
<div className="p-8">
<h3 className="text-lg font-medium leading-snug mb-4">Scalable Data Architecture for Global Logistics</h3>
<p className="text-zinc-500 text-sm mb-6 line-clamp-3">
                            Designed a cloud-native architecture enabling real-time tracking and predictive maintenance for a global fleet.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 group-hover:gap-3 transition-all" href="#">
                            Read story <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 text-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl font-medium tracking-tight text-center mb-2">Insights and Knowledge</h2>
<h3 className="text-4xl font-medium tracking-tight text-center text-orange-500 mb-12">That Drive Better Decisions</h3>
<div className="flex flex-wrap justify-center gap-2 mb-12">
<button className="px-5 py-2 rounded-full bg-white text-zinc-950 font-medium text-sm">All</button>
<button className="px-5 py-2 rounded-full border border-zinc-800 hover:bg-zinc-800 text-zinc-400 text-sm transition-colors">Blogs</button>
<button className="px-5 py-2 rounded-full border border-zinc-800 hover:bg-zinc-800 text-zinc-400 text-sm transition-colors">News</button>
<button className="px-5 py-2 rounded-full border border-zinc-800 hover:bg-zinc-800 text-zinc-400 text-sm transition-colors">Research</button>
<button className="px-5 py-2 rounded-full border border-zinc-800 hover:bg-zinc-800 text-zinc-400 text-sm transition-colors">Videos</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="group cursor-pointer">
<div className="rounded-2xl overflow-hidden mb-6 relative">
<img alt="Featured" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-400 mb-3">
<span className="text-orange-500 font-medium">BLOG</span>
<span>•</span>
<span>5 min read</span>
</div>
<h4 className="text-2xl font-medium tracking-tight mb-3 group-hover:text-orange-500 transition-colors">5 Keys to Successful Energy Digital Transformation</h4>
<p className="text-zinc-400 text-lg leading-relaxed mb-4">
                        By integrating real-time operational data across systems, Proclink helped a large manufacturing organization identify root causes.
                    </p>
<span className="text-orange-500 font-medium text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">Read article <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>

<div className="flex flex-col justify-between">

<div className="border-b border-zinc-800 pb-8 group cursor-pointer">
<div className="flex justify-between items-start">
<div>
<div className="flex items-center gap-3 text-xs text-zinc-400 mb-2">
<span className="text-orange-500 font-medium">NEWS</span>
<span>•</span>
<span>3 min read</span>
</div>
<h5 className="text-lg font-medium text-zinc-200 group-hover:text-orange-500 transition-colors">Defining KPIs for Operational Excellence in 2024</h5>
</div>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>

<div className="border-b border-zinc-800 py-8 group cursor-pointer">
<div className="flex justify-between items-start">
<div>
<div className="flex items-center gap-3 text-xs text-zinc-400 mb-2">
<span className="text-orange-500 font-medium">RESEARCH</span>
<span>•</span>
<span>12 min read</span>
</div>
<h5 className="text-lg font-medium text-zinc-200 group-hover:text-orange-500 transition-colors">The State of Industrial IoT Security</h5>
</div>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>

<div className="pt-8 group cursor-pointer">
<div className="flex justify-between items-start">
<div>
<div className="flex items-center gap-3 text-xs text-zinc-400 mb-2">
<span className="text-orange-500 font-medium">WEBINAR</span>
<span>•</span>
<span>45 min</span>
</div>
<h5 className="text-lg font-medium text-zinc-200 group-hover:text-orange-500 transition-colors">Mastering Data Governance</h5>
</div>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-orange-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-4xl font-medium tracking-tight text-zinc-900">What Our <span className="text-orange-600">Clients Say</span></h2>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50"><svg aria-hidden="true" className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
<button className="p-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50"><svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg transition-shadow">
<div className="flex gap-1 text-orange-400 mb-4">
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-zinc-600 text-lg italic mb-6">"The team's hands-on approach and deep technical expertise made all the difference. They didn't just provide recommendations—they worked alongside us."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
<img alt="User" src="https://i.pravatar.cc/150?img=11"/>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Michael Chen</div>
<div className="text-xs text-zinc-500">VP Operations, Global Energy Corp</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg transition-shadow">
<div className="flex gap-1 text-orange-400 mb-4">
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-zinc-600 text-lg italic mb-6">"Proclink transformed how we view our data. The real-time dashboard has become essential for our daily standups and strategic planning."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
<img alt="User" src="https://i.pravatar.cc/150?img=5"/>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Sarah Jenkins</div>
<div className="text-xs text-zinc-500">CTO, Manufacturing Plus</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg transition-shadow">
<div className="flex gap-1 text-orange-400 mb-4">
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-zinc-600 text-lg italic mb-6">"Implementation was smoother than expected. Their understanding of legacy systems combined with modern tech is unmatched."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
<img alt="User" src="https://i.pravatar.cc/150?img=68"/>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">David Ross</div>
<div className="text-xs text-zinc-500">Director of IT, LogisticsIntl</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-orange-50 to-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">Ready to Transform Your Energy Operations?</h2>
<p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto">Schedule a consultation with our experts to discuss your specific challenges and explore how we can help you achieve your transformation goals.</p>
<button className="bg-orange-500 text-white px-8 py-4 rounded-full font-medium hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-orange-500/20 flex items-center gap-2 mx-auto">
                Book a Consultation
                <svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</section>

<footer className="bg-zinc-950 pt-24 pb-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white">
<svg aria-hidden="true" className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-xl font-medium tracking-tight text-white">proclink</span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        Proclink is a digital transformation and operational intelligence partner helping organizations connect systems and make confident, data-driven decisions.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Proclink</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Our Values</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Partners</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Services</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Strategy &amp; Planning</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Operations Optimization</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Data &amp; Analytics</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Digital Transformation</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Subscribe</h4>
<p className="text-zinc-500 text-sm mb-4">Stay updated with the latest insights and trends.</p>
<form className="flex gap-2">
<input className="bg-zinc-900 border border-zinc-800 text-white px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-orange-500 transition-colors" placeholder="Your email" type="email"/>
<button className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors">
<svg aria-hidden="true" className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-600 text-xs">
                    © 2024 Proclink. All rights reserved.
                </div>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
