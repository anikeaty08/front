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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-semibold tracking-tighter text-lg text-slate-900">
                SHASHI.AI
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-slate-900 transition-colors" href="#platform">Platform</a>
<a className="hover:text-slate-900 transition-colors" href="#modules">Modules</a>
<a className="hover:text-slate-900 transition-colors" href="#metrics">Traction</a>
</div>
<a className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-colors" href="#demo">
                Request Demo
            </a>
</div>
</nav>

<section className="pt-32 pb-24 px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-slate-50 to-white -z-10"></div>
<div className="max-w-4xl mx-auto text-center z-10 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
<span className="w-2 h-2 rounded-full bg-slate-900"></span>
                The Inflection Point in Hospitality
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-slate-900 leading-tight mb-6">
                One Agentic Platform.<br/>Full Hotel Stack.
            </h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                Beyond real estate—the Tesla of Hospitality. Powering autonomous operations and hyper-personalization for the next generation of hotels.
            </p>
<a className="inline-flex items-center justify-center bg-slate-900 text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-slate-800 transition-all shadow-sm shadow-slate-900/20" href="#demo">
                Request a Demo
            </a>
</div>

<div className="max-w-6xl mx-auto mt-20 relative">
<div className="aspect-[16/9] md:aspect-[21/9] bg-slate-50 rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden relative flex items-center justify-center p-8">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
<div className="relative z-10 flex items-center justify-center w-full h-full gap-12">

<div className="w-64 h-[450px] bg-white rounded-[2.5rem] shadow-xl border-4 border-slate-100 overflow-hidden flex flex-col relative shrink-0 -rotate-2 transform hover:rotate-0 transition-transform duration-500">
<div className="h-6 w-1/3 bg-slate-100 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl"></div>
<div className="p-6 pt-12 flex-1 flex flex-col gap-4">
<div className="text-xs font-medium tracking-tight text-slate-400">Room 402 Control</div>
<div className="text-2xl font-semibold tracking-tighter text-slate-900 mb-4">72° Perfect</div>

<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-2"><span className="font-medium text-slate-900">Climate</span><span className="text-slate-500">Auto</span></div>
<div className="h-10 w-full bg-slate-50 rounded-full p-1 relative">
<div className="w-2/3 h-full bg-slate-900 rounded-full"></div>
<div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-900 text-xs" icon="solar:sun-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-900 text-lg" icon="solar:lamp-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Lighting</span>
</div>
<div className="w-10 h-6 bg-slate-900 rounded-full relative p-1 cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden md:grid grid-cols-2 gap-6 w-full max-w-md">
<div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-center transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 text-xl shadow-[0_0_15px_rgba(15,23,42,0.05)]">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-slate-900">BLE Access</div>
<div className="text-xs text-slate-500">Keyless Entry</div>
</div>
</div>
<div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-center transition-all hover:-translate-y-1 delay-75">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 text-xl shadow-[0_0_15px_rgba(15,23,42,0.05)]">
<iconify-icon icon="solar:tv-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-slate-900">Smart Cast</div>
<div className="text-xs text-slate-500">Auto-pairing</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 px-6 border-y border-slate-100">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Evolution of Hospitality</h2>
<p className="text-base text-slate-500">From fragmented legacy systems to a unified agentic platform.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">

<div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border border-slate-200 items-center justify-center text-xs font-semibold tracking-tight text-slate-400 z-10">VS</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 border-dashed opacity-75">
<div className="text-xs font-medium tracking-tight text-slate-400 uppercase mb-8">Legacy Operations</div>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
<iconify-icon className="text-xl" icon="solar:documents-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-slate-600 mb-1">Manual Service Layers</h3>
<p className="text-sm text-slate-400">High friction front-desk operations and paper-based workflows.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
<iconify-icon className="text-xl" icon="solar:city-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-slate-600 mb-1">Generic Real Estate</h3>
<p className="text-sm text-slate-400">Static physical spaces lacking contextual awareness.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
<iconify-icon className="text-xl" icon="solar:server-square-update-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-slate-600 mb-1">Fragmented Tech Stacks</h3>
<p className="text-sm text-slate-400">Siloed data across PMS, POS, and CRM systems.</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-slate-900/5 rounded-full blur-3xl -z-10"></div>
<div className="text-xs font-medium tracking-tight text-slate-900 uppercase mb-8 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse"></span>
                        Autonomous Future
                    </div>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-900/5 flex items-center justify-center text-slate-900 shrink-0 shadow-[0_0_15px_rgba(15,23,42,0.1)]">
<iconify-icon className="text-xl" icon="solar:smartphone-update-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-1">Digital Services</h3>
<p className="text-sm text-slate-500">Zero-queue operations via comprehensive mobile orchestration.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-900/5 flex items-center justify-center text-slate-900 shrink-0 shadow-[0_0_15px_rgba(15,23,42,0.1)]">
<iconify-icon className="text-xl" icon="solar:user-id-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-1">Hyper-Personalization</h3>
<p className="text-sm text-slate-500">Dynamic environments adapting to "Segment of One" profiles.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-900/5 flex items-center justify-center text-slate-900 shrink-0 shadow-[0_0_15px_rgba(15,23,42,0.1)]">
<iconify-icon className="text-xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-1">Unified Decision Engine</h3>
<p className="text-sm text-slate-500">One AI core managing IoT, operations, and guest experience.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="modules">
<div className="max-w-[1400px] mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">The Guest Experience Suite</h2>
<p className="text-base text-slate-500">A continuous, frictionless journey powered by intelligent agents.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

<div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
<div className="w-8 h-8 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-4">
<iconify-icon icon="solar:calendar-date-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-4 border-b border-slate-100 pb-3">Booking</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-slate-300 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>3-click booking engine</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-slate-300 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Mobile &amp; web check-in flows</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-slate-300 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Apple/Google Pay integration</span>
</li>
</ul>
</div>

<div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
<div className="w-8 h-8 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-4">
<iconify-icon icon="solar:routing-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-4 border-b border-slate-100 pb-3">Arrival</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-slate-300 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Zero-queue digital lobby</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-slate-300 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Mobile keyless access</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-slate-300 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>BLE &amp; NFC door protocols</span>
</li>
</ul>
</div>

<div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300 shadow-[0_0_20px_rgba(15,23,42,0.03)] border-slate-200">
<div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:bed-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-4 border-b border-slate-100 pb-3">Stay</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
<iconify-icon className="text-slate-900 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Smart TV casting &amp; pairing</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
<iconify-icon className="text-slate-900 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>IoT controls (HVAC/Lights)</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
<iconify-icon className="text-slate-900 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>AI-driven entertainment</span>
</li>
</ul>
</div>

<div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
<div className="w-8 h-8 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-4">
<iconify-icon icon="solar:hand-stars-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-4 border-b border-slate-100 pb-3">Service</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-slate-300 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Single-tap quick requests</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-slate-300 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Automated housekeeping queues</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-slate-300 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>In-room dining integration</span>
</li>
</ul>
</div>

<div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
<div className="w-8 h-8 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-4">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-4 border-b border-slate-100 pb-3">Marketing</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-slate-300 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>AI-timed contextual upsells</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-slate-300 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>"Segment of One" profiles</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-slate-300 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Automated post-stay retention</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 px-6 border-y border-slate-100">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="text-xs font-semibold tracking-tight text-slate-400 uppercase mb-6">Decision Engine Topology</div>

<div className="relative h-64 flex items-center justify-center">

<div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center text-white z-20 shadow-lg shadow-slate-900/20 relative">
<iconify-icon className="text-2xl" icon="solar:cpu-linear"></iconify-icon>
<div className="absolute inset-0 rounded-full border border-slate-900 animate-ping opacity-20"></div>
</div>

<div className="absolute w-full h-full flex items-center justify-between px-8 z-10">
<div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:box-linear"></iconify-icon>
</div>
</div>
<div className="absolute w-full h-full flex flex-col justify-between py-6 items-center z-10">
<div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:database-linear"></iconify-icon>
</div>
</div>

<svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{stroke: '#e2e8f0', strokeWidth: '1.5', strokeDasharray: '4'}}>
<line x1="20%" x2="50%" y1="50%" y2="50%"></line>
<line x1="80%" x2="50%" y1="50%" y2="50%"></line>
<line x1="50%" x2="50%" y1="20%" y2="50%"></line>
<line x1="50%" x2="50%" y1="80%" y2="50%"></line>
</svg>
</div>
</div>

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-6">Autonomous Operations Suite</h2>
<p className="text-base text-slate-500 mb-8 leading-relaxed">
                    While the guest experiences magic, the backend runs on rigorous efficiency. Multi-agent workflows coordinate physical devices and staff dynamically.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 shrink-0">
<iconify-icon icon="solar:leaf-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-slate-900">Energy Management</h4>
<p className="text-sm text-slate-500 mt-1">AI-driven HVAC and lighting optimization based on occupancy sensors, reducing energy costs by 20%+.</p>
</div>
</div>
<div className="w-full h-px bg-slate-200/60 my-4"></div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 shrink-0">
<iconify-icon icon="solar:smart-speaker-minimalistic-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-slate-900">Robotic Delivery</h4>
<p className="text-sm text-slate-500 mt-1">24/7 autonomous room delivery for F&amp;B and amenities, significantly reducing labor overhead during off-peak hours.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="metrics">

<div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmZmZmYiLz48Y2lyY2xlIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjQwJSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjEwLDEwIi8+PC9zdmc+')] bg-cover bg-center"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">

<div className="flex flex-col gap-2">
<div className="text-4xl lg:text-5xl font-semibold tracking-tighter text-slate-900">31%</div>
<div className="h-px w-8 bg-slate-200 mx-auto md:mx-0"></div>
<div className="text-xs font-medium uppercase tracking-tight text-slate-400">Labor Cost Reduction</div>
<p className="text-xs text-slate-500 mt-1">Through AI automation</p>
</div>

<div className="flex flex-col gap-2">
<div className="text-4xl lg:text-5xl font-semibold tracking-tighter text-slate-900">3x</div>
<div className="h-px w-8 bg-slate-200 mx-auto md:mx-0"></div>
<div className="text-xs font-medium uppercase tracking-tight text-slate-400">Direct Booking Rate</div>
<p className="text-xs text-slate-500 mt-1">Driving guests off OTAs</p>
</div>

<div className="flex flex-col gap-2">
<div className="text-4xl lg:text-5xl font-semibold tracking-tighter text-slate-900">2,514</div>
<div className="h-px w-8 bg-slate-200 mx-auto md:mx-0"></div>
<div className="text-xs font-medium uppercase tracking-tight text-slate-400">Rooms Contracted</div>
<p className="text-xs text-slate-500 mt-1">US, Saudi Arabia &amp; Global</p>
</div>

<div className="flex flex-col gap-2">
<div className="text-4xl lg:text-5xl font-semibold tracking-tighter text-slate-900">$42</div>
<div className="h-px w-8 bg-slate-200 mx-auto md:mx-0"></div>
<div className="text-xs font-medium uppercase tracking-tight text-slate-400">Cost Target / Night</div>
<p className="text-xs text-slate-500 mt-1">Average labor cost target</p>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-white px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-sm font-medium text-slate-500 max-w-xs text-center md:text-left">
<span className="text-slate-900 font-semibold tracking-tight block mb-1">Live in Hours, Not Months.</span>
                Seamlessly plugs into your existing tech stack.
            </div>
<div className="flex flex-wrap items-center justify-center md:justify-end gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<div className="flex flex-col items-center">
<span className="font-bold tracking-tighter text-slate-800 text-xl">CLOUDBEDS</span>
<span className="text-[10px] uppercase tracking-widest font-medium text-slate-400 mt-1">350k Rooms</span>
</div>
<div className="flex flex-col items-center">
<span className="font-bold tracking-tighter text-slate-800 text-xl">YCS</span>
<span className="text-[10px] uppercase tracking-widest font-medium text-slate-400 mt-1">574k Rooms</span>
</div>
<div className="flex flex-col items-center">
<span className="font-bold tracking-tighter text-slate-800 text-xl">STAYNTOUCH</span>
<span className="text-[10px] uppercase tracking-widest font-medium text-slate-400 mt-1">100k Rooms</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 px-6">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Simple, Per-Room Pricing.</h2>
<p className="text-base text-slate-500">Deploy the full stack or pick specific modules. Transparent SaaS economics.</p>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
<div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
<span className="text-sm font-medium tracking-tight text-slate-900">Module Selection</span>
<span className="text-xs text-slate-500">Billed Annually</span>
</div>
<div className="p-2">

<div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
<div className="flex items-center gap-3">

<div className="w-5 h-5 rounded border-2 border-slate-900 bg-slate-900 flex items-center justify-center text-white">
<iconify-icon className="text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Booking Engine &amp; Web Flow</div>
<div className="text-xs text-slate-500">Core reservation system</div>
</div>
</div>
<div className="text-sm font-medium text-slate-900">$2<span className="text-xs text-slate-400 font-normal">/mo</span></div>
</div>

<div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded border-2 border-slate-900 bg-slate-900 flex items-center justify-center text-white">
<iconify-icon className="text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Arrival &amp; Keyless Access</div>
<div className="text-xs text-slate-500">BLE integration and check-in</div>
</div>
</div>
<div className="text-sm font-medium text-slate-900">$3<span className="text-xs text-slate-400 font-normal">/mo</span></div>
</div>

<div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded border-2 border-slate-900 bg-slate-900 flex items-center justify-center text-white">
<iconify-icon className="text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">In-Room IoT &amp; Stay Console</div>
<div className="text-xs text-slate-500">HVAC, lighting, casting</div>
</div>
</div>
<div className="text-sm font-medium text-slate-900">$3<span className="text-xs text-slate-400 font-normal">/mo</span></div>
</div>
</div>
<div className="p-6 bg-slate-900 text-white flex justify-between items-center mt-2">
<div>
<div className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-1">Total Full Stack</div>
<div className="text-sm text-slate-300">All modules included</div>
</div>
<div className="text-right">
<div className="text-3xl font-semibold tracking-tighter">$8</div>
<div className="text-xs text-slate-400">per room / month</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-24 px-6 border-t border-slate-100 bg-white text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-12">Ready to Transform Your Property?</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-medium flex items-center justify-center border border-slate-200">1</div>
<span className="text-sm font-medium text-slate-600">Request Demo</span>
</div>
<iconify-icon className="hidden md:block text-slate-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-medium flex items-center justify-center border border-slate-200">2</div>
<span className="text-sm font-medium text-slate-600">Talk to Partner</span>
</div>
<iconify-icon className="hidden md:block text-slate-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-medium flex items-center justify-center border border-slate-200">3</div>
<span className="text-sm font-medium text-slate-600">60-Day Pilot</span>
</div>
</div>
<a className="inline-flex items-center justify-center bg-slate-900 text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-slate-800 transition-all shadow-sm shadow-slate-900/20 mb-20" href="#" id="demo">
                Start a Pilot Today
            </a>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-100 text-xs text-slate-400">
<div className="font-semibold tracking-tighter text-sm text-slate-900">SHASHI.AI</div>
<div className="flex gap-6">
<a className="hover:text-slate-900 transition-colors" href="#">Platform</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
</div>
<div>© 2024 Shashi Group. All rights reserved.</div>
</div>
</div>
</footer>

    </>
  );
}
