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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2">
<span className="iconify text-emerald-600" data-icon="lucide:zap" data-width="24"></span>
<span className="text-slate-900 font-semibold tracking-tighter text-lg">LUMINA</span>
</div>
<div className="hidden md:flex space-x-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-slate-900 transition-colors" href="#technology">Technology</a>
<a className="hover:text-slate-900 transition-colors" href="#calculator">Savings</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Process</a>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-all shadow-lg shadow-slate-900/10">
                    Get Proposal
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-20 left-20 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-20 right-20 w-72 h-72 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Federal Tax Credit Available (30%)
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                    Power your life with <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">infinite energy.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                    Stop renting electricity. Own your power production with aesthetic, high-efficiency solar arrays designed for modern homes.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 group">
                        Calculate Savings
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                        How it works
                    </button>
</div>
</div>

<div className="mt-16 relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
<img alt="Modern solar roof" className="w-full h-[400px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 text-white">
<div className="flex items-center gap-3 mb-2">
<div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-3 py-1 text-xs font-medium">
                            Live Output
                        </div>
</div>
<p className="text-3xl font-medium tracking-tight">8.4 kW</p>
<p className="text-sm text-slate-200">Current generation</p>
</div>
</div>
</div>
</section>

<section className="py-10 border-b border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-sm text-slate-400 font-medium mb-8">POWERING OVER 10,000 NEXT-GEN HOMES</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center justify-center gap-2 font-semibold text-xl tracking-tight text-slate-800"><span className="iconify" data-icon="lucide:zap" data-width="20"></span> VOLT</div>
<div className="flex items-center justify-center gap-2 font-semibold text-xl tracking-tight text-slate-800"><span className="iconify" data-icon="lucide:hexagon" data-width="20"></span> NEST</div>
<div className="flex items-center justify-center gap-2 font-semibold text-xl tracking-tight text-slate-800"><span className="iconify" data-icon="lucide:triangle" data-width="20"></span> APEX</div>
<div className="flex items-center justify-center gap-2 font-semibold text-xl tracking-tight text-slate-800"><span className="iconify" data-icon="lucide:circle-dashed" data-width="20"></span> ORBIT</div>
<div className="hidden lg:flex items-center justify-center gap-2 font-semibold text-xl tracking-tight text-slate-800"><span className="iconify" data-icon="lucide:wind" data-width="20"></span> AERO</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="benefits">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Why switch to solar?</h2>
<p className="text-slate-500 text-lg">It's not just about saving the planet. It's about economic intelligence and energy security.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

<div className="md:col-span-2 rounded-3xl bg-slate-50 border border-slate-100 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-200 transition-colors">
<div className="relative z-10">
<div className="h-10 w-10 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center mb-6 text-emerald-600">
<span className="iconify" data-icon="lucide:dollar-sign" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Drastic Bill Reduction</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-sm">Eliminate up to 100% of your electricity bill. The average homeowner saves between $20,000 and $75,000 over the lifetime of their solar system.</p>
</div>

<div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify w-full h-full text-emerald-600" data-icon="lucide:trending-up"></span>
</div>
</div>

<div className="md:row-span-2 rounded-3xl bg-slate-900 text-white p-8 flex flex-col relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-emerald-400 border border-slate-700">
<span className="iconify" data-icon="lucide:battery-charging" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold mb-2">Energy Independence</h3>
<p className="text-slate-400 text-sm mb-auto">Grid outages are increasing. With our integrated battery storage, your lights stay on when the neighborhood goes dark.</p>
<div className="mt-8 bg-slate-800/50 rounded-2xl p-4 backdrop-blur-sm border border-slate-700">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-slate-400">Battery Level</span>
<span className="text-xs text-emerald-400 font-mono">98%</span>
</div>
<div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[98%]"></div>
</div>
</div>
</div>
</div>

<div className="rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-lg transition-shadow">
<div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 border border-blue-100">
<span className="iconify" data-icon="lucide:leaf" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Net Zero Impact</h3>
<p className="text-slate-500 text-sm">Reduce your carbon footprint by 3-4 tons annually. That's equivalent to planting over 100 trees every single year.</p>
</div>

<div className="rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-lg transition-shadow">
<div className="h-10 w-10 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-orange-600 border border-orange-100">
<span className="iconify" data-icon="lucide:smartphone" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Real-time Control</h3>
<p className="text-slate-500 text-sm">Monitor production and consumption instantly from your phone. Optimize usage patterns to maximize savings.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="calculator">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
<div className="max-w-4xl mx-auto px-4 relative z-10">
<div className="text-center mb-12">
<span className="text-emerald-600 font-semibold text-sm tracking-wide uppercase">ROI Estimator</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mt-2">Estimate your savings</h2>
</div>
<div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 p-8 md:p-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="space-y-8">
<div>
<label className="block text-sm font-medium text-slate-700 mb-4 flex justify-between">
                                Monthly Electricity Bill
                                <span className="text-emerald-600 font-semibold">$<span id="bill-val">250</span></span>
</label>
<input className="w-full" max="800" min="50" oninput="document.getElementById('bill-val').innerText = this.value" type="range" value="250"/>
<div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
<span>$50</span>
<span>$800+</span>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-4">Sun Exposure</label>
<div className="grid grid-cols-3 gap-3">
<button className="border border-slate-200 rounded-xl py-3 text-sm font-medium hover:border-emerald-500 hover:text-emerald-600 transition-colors bg-slate-50">Low</button>
<button className="border border-emerald-500 bg-emerald-50 text-emerald-700 rounded-xl py-3 text-sm font-medium transition-colors ring-1 ring-emerald-500">Moderate</button>
<button className="border border-slate-200 rounded-xl py-3 text-sm font-medium hover:border-emerald-500 hover:text-emerald-600 transition-colors bg-slate-50">High</button>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
<span className="text-sm font-medium text-slate-700">Include Battery Storage?</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300 transition-all duration-300 ease-in-out" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-300 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</input></div>
</div>
</div>

<div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col justify-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div className="relative z-10">
<p className="text-slate-400 text-sm font-medium mb-1">20-Year Savings</p>
<p className="text-5xl font-semibold tracking-tight mb-8">$42,500</p>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
<span className="text-slate-300">Payback Period</span>
<span className="font-medium">5.2 Years</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
<span className="text-slate-300">Property Value Increase</span>
<span className="font-medium text-emerald-400">+$18,000</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-300">CO2 Offset</span>
<span className="font-medium">102 Tons</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-1/3 sticky top-24">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Seamless from start to finish.</h2>
<p className="text-slate-500 mb-8">We handle permits, design, engineering, and inspection. You just flip the switch.</p>
<button className="text-emerald-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                        Start your journey <span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
<div className="md:w-2/3 space-y-12">

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center font-semibold text-sm border border-slate-200">01</div>
<div className="w-px h-full bg-slate-100 my-2"></div>
</div>
<div className="pb-12">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Digital Consultation</h3>
<p className="text-slate-500 text-sm leading-relaxed">We analyze your roof via satellite imagery to create a custom 3D model and production estimate without a site visit.</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center font-semibold text-sm border border-slate-200">02</div>
<div className="w-px h-full bg-slate-100 my-2"></div>
</div>
<div className="pb-12">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Permitting &amp; Design</h3>
<p className="text-slate-500 text-sm leading-relaxed">Our engineers finalize the electrical schematics and handle all city and utility paperwork on your behalf.</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold text-sm shadow-lg shadow-emerald-200">03</div>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">One-Day Installation</h3>
<p className="text-slate-500 text-sm leading-relaxed">Our certified crew installs your system in a single day. Clean, wire-free aesthetics and weather-proof mounting.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white overflow-hidden relative">
<div className="absolute inset-0 z-0 opacity-40">
<img alt="Starry sky" className="w-full h-full object-cover grayscale mix-blend-overlay" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">The most beautiful energy source <br/>is the one you don't notice.</h2>
<div className="relative mt-12 max-w-5xl mx-auto">

<div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-t-3xl p-2 md:p-4 shadow-2xl">
<div className="bg-slate-950 rounded-t-2xl overflow-hidden relative aspect-video flex items-center justify-center group">
<img alt="Solar aesthetic" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&amp;w=2944&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12 text-left">
<div className="flex items-end gap-4">
<div>
<p className="text-emerald-400 font-mono text-sm mb-1">SYSTEM STATUS</p>
<h3 className="text-3xl font-semibold tracking-tight">Active &amp; Generating</h3>
</div>
<div className="hidden md:block h-px flex-1 bg-slate-700 mb-4"></div>
<div className="text-right">
<p className="text-slate-400 text-xs">Today's Offset</p>
<p className="text-xl font-mono">42.5 kWh</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-50 relative overflow-hidden">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="max-w-3xl mx-auto px-4 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Ready to own your power?</h2>
<p className="text-lg text-slate-600 mb-10">Get a custom solar design and quote in less than 24 hours. No commitment required.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 px-5 py-3.5 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm" placeholder="Enter your email address" type="email"/>
<button className="bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 hover:shadow-lg transition-all text-sm whitespace-nowrap" type="button">
                    Get Quote
                </button>
</form>
<p className="text-xs text-slate-400 mt-4">Free consultation. No credit card required.</p>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-emerald-600" data-icon="lucide:zap" data-width="20"></span>
<span className="text-slate-900 font-bold tracking-tighter">LUMINA</span>
</div>
<p className="text-slate-400 text-sm">Building the decentralized energy grid of the future, one roof at a time.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Solar Panels</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Inverters</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Batteries</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">EV Chargers</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Press</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Warranty</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Lumina Energy Inc. All rights reserved.</p>
<div className="flex gap-4">
<span className="iconify text-slate-400 hover:text-slate-900 cursor-pointer" data-icon="lucide:twitter" data-width="18"></span>
<span className="iconify text-slate-400 hover:text-slate-900 cursor-pointer" data-icon="lucide:instagram" data-width="18"></span>
<span className="iconify text-slate-400 hover:text-slate-900 cursor-pointer" data-icon="lucide:linkedin" data-width="18"></span>
</div>
</div>
</div>
</footer>

    </>
  );
}
