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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold tracking-tighter text-black flex items-center gap-1" href="#">
<iconify-icon className="text-red-600 text-2xl" icon="solar:fire-linear"></iconify-icon>
                        FIRESIM
                    </a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm text-gray-900 font-medium" href="#">Office</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Industrial</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Enterprise</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Rent</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Lease</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Buy</a>
</nav>

<div className="hidden md:flex items-center space-x-6">
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Support</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Contact</a>
<a className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm transition-colors shadow-sm" href="#">
                        Request Demo
                    </a>
</div>

<div className="flex items-center md:hidden">
<button className="text-gray-500 hover:text-gray-900 p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                        New: Office-Optimized Models
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
                        Office Fire Extinguisher <br className="hidden lg:block"/> Training Simulators
                    </h1>
<p className="leading-relaxed text-lg text-gray-500 max-w-lg mb-8">
                        Most office teams lack hands-on fire response experience. Our indoor-safe fire extinguisher training simulator lets employees practice realistic scenarios without disrupting the workplace—improving confidence, safety awareness, and response time.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-base text-center transition-colors shadow-sm flex items-center justify-center gap-2" href="#">
                            Request a Demo
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-6 py-3 rounded-lg text-base text-center transition-colors shadow-sm" href="#">
                            Get a Quote
                        </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-gray-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"><iconify-icon className="text-gray-500" icon="solar:user-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"><iconify-icon className="text-gray-500" icon="solar:user-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"><iconify-icon className="text-gray-500" icon="solar:user-linear"></iconify-icon></div>
</div>
<p>Trusted by 500+ office managers</p>
</div>
</div>

<div className="relative mx-auto w-full max-w-lg lg:max-w-none">

<div className="absolute -inset-0.5 bg-gradient-to-tr from-red-500 to-gray-900 rounded-2xl blur-2xl opacity-20"></div>

<div className="relative bg-gray-950 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col">

<div className="h-10 border-b border-gray-800 flex items-center px-4 justify-between bg-gray-900/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
</div>
<div className="text-xs text-gray-500 font-mono tracking-tight">SYSTEM_READY</div>
</div>

<div className="flex-1 p-8 flex items-center justify-center relative">

<div className="relative w-48 h-64 border-2 border-gray-800 rounded-xl bg-gradient-to-b from-gray-900 to-black flex flex-col items-center p-4">
<div className="w-full h-32 bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-center relative overflow-hidden mb-4">
<div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-red-600/20 to-transparent"></div>
<iconify-icon className="text-4xl text-red-500 relative z-10" icon="solar:fire-linear"></iconify-icon>
</div>
<div className="w-full space-y-2">
<div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-red-600 w-3/4"></div>
</div>
<div className="flex justify-between text-xs text-gray-500">
<span>Pressure</span>
<span className="text-white">Normal</span>
</div>
</div>

<div className="absolute -bottom-4 w-32 h-8 bg-gray-800 rounded-full blur-xl opacity-50"></div>
</div>

<div className="absolute top-12 right-8 bg-gray-900 border border-gray-800 rounded-lg p-3 shadow-xl backdrop-blur-sm">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
<span className="text-xs text-gray-300">Sensors Active</span>
</div>
</div>
<div className="absolute bottom-12 left-8 bg-gray-900 border border-gray-800 rounded-lg p-3 shadow-xl backdrop-blur-sm">
<div className="flex items-center gap-2 text-xs text-gray-300">
<iconify-icon className="text-red-500" icon="solar:stopwatch-linear"></iconify-icon>
<span>Response: 4.2s</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Why Office Fire Training Falls Short</h2>
<p className="text-base text-gray-500">Traditional methods aren't suited for modern corporate environments, leaving your team unprepared when it matters most.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-red-600" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">No Hands-On Practice</h3>
<p className="text-sm text-gray-500 leading-relaxed">Watching a video or reading a manual results in low confidence during actual emergencies. Muscle memory is missing.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-red-600" icon="solar:fire-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Live Fire Not Practical</h3>
<p className="text-sm text-gray-500 leading-relaxed">Igniting real fires indoors or in parking lots poses severe safety risks, requires permits, and creates messy cleanup.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-red-600" icon="solar:graph-down-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Inconsistent Training</h3>
<p className="text-sm text-gray-500 leading-relaxed">Relying on external vendors once a year leads to poor knowledge retention, especially with employee turnover.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute inset-y-0 right-1/2 w-screen bg-gray-50 rounded-r-3xl -z-10"></div>
<div className="relative rounded-2xl bg-gray-100 border border-gray-200 aspect-square max-w-md mx-auto lg:max-w-none overflow-hidden flex items-center justify-center">

<div className="w-[80%] h-[80%] bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col overflow-hidden">
<div className="border-b border-gray-100 p-4 bg-gray-50 flex justify-between items-center">
<div className="text-sm font-semibold tracking-tight text-gray-900">Training Session #104</div>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md">Pass</span>
</div>
<div className="p-6 flex-1 flex flex-col justify-center gap-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
<iconify-icon className="text-xl text-red-600" icon="solar:target-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs text-gray-500 mb-1">Aim Accuracy</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full"><div className="h-full bg-gray-900 rounded-full w-[92%]"></div></div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
<iconify-icon className="text-xl text-gray-600" icon="solar:waterdrops-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs text-gray-500 mb-1">Sweep Technique</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full"><div className="h-full bg-gray-900 rounded-full w-[85%]"></div></div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
<iconify-icon className="text-xl text-gray-600" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs text-gray-500 mb-1">Extinguishment Time</div>
<div className="text-sm font-medium text-gray-900">4.5 Seconds</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">A Safer Way to Train Fire Safety Indoors</h2>
<p className="text-base text-gray-500 mb-8">
                        Replace messy, hazardous live-fire exercises with clean, digital simulation. Our system uses advanced sensors to track user movements, aim, and sweep technique, providing realistic feedback instantly.
                    </p>
<ul className="space-y-5">
<li className="flex items-start">
<div className="flex-shrink-0 mt-0.5">
<iconify-icon className="text-xl text-red-600" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="ml-3">
<h4 className="text-sm font-semibold text-gray-900 tracking-tight">Indoor-safe, risk-free training</h4>
<p className="text-sm text-gray-500 mt-1">Train in the breakroom, hallway, or conference room. Zero fire hazard.</p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 mt-0.5">
<iconify-icon className="text-xl text-red-600" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="ml-3">
<h4 className="text-sm font-semibold text-gray-900 tracking-tight">Realistic fire simulation</h4>
<p className="text-sm text-gray-500 mt-1">LED screens and smart extinguishers mimic the weight and behavior of real equipment.</p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 mt-0.5">
<iconify-icon className="text-xl text-red-600" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="ml-3">
<h4 className="text-sm font-semibold text-gray-900 tracking-tight">Repeatable sessions</h4>
<p className="text-sm text-gray-500 mt-1">Run dozens of employees through scenarios in minutes. Instant reset, no recharging.</p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 mt-0.5">
<iconify-icon className="text-xl text-red-600" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="ml-3">
<h4 className="text-sm font-semibold text-gray-900 tracking-tight">Easy setup</h4>
<p className="text-sm text-gray-500 mt-1">Plug into a standard wall outlet and start training in under 5 minutes.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-900 text-white border-y border-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Built for Office Environments</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center mb-4 border border-gray-700">
<iconify-icon className="text-2xl text-gray-300" icon="solar:maximize-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-1">Works in small spaces</h4>
<p className="text-xs text-gray-400">Requires only a 10x10ft area.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center mb-4 border border-gray-700">
<iconify-icon className="text-2xl text-gray-300" icon="solar:mute-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-1">No disruption</h4>
<p className="text-xs text-gray-400">Silent operation, no smoke or foam.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center mb-4 border border-gray-700">
<iconify-icon className="text-2xl text-gray-300" icon="solar:suitcase-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-1">Highly Portable</h4>
<p className="text-xs text-gray-400">Rolls easily between meeting rooms.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center mb-4 border border-gray-700">
<iconify-icon className="text-2xl text-gray-300" icon="solar:calendar-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-1">Year-round training</h4>
<p className="text-xs text-gray-400">Not weather dependent. Train anytime.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Office Fire Training Simulator Models</h2>
<p className="text-base text-gray-500">Choose the system that best fits your company's training scale and budget.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
<div className="h-64 bg-gray-100 flex items-center justify-center p-8 relative border-b border-gray-100">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200/50"></div>

<div className="relative w-24 h-40 bg-gray-800 rounded-lg shadow-inner flex flex-col items-center p-2 border border-gray-700 group-hover:border-gray-500 transition-colors">
<div className="w-full h-1/2 bg-gray-900 rounded mb-2 flex items-center justify-center">
<iconify-icon className="text-gray-500" icon="solar:fire-linear"></iconify-icon>
</div>
<div className="w-full h-1 bg-red-600 rounded-full mb-1"></div>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Flicker Fire Simulator</h3>
<p className="text-sm text-gray-500 mb-6 flex-1">Our standard model perfect for small to medium offices. Features core digital fire tracking and standard extinguisher replicas.</p>
<a className="inline-flex justify-center items-center gap-2 w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg text-gray-400" icon="solar:document-linear"></iconify-icon>
                            Download Brochure
                        </a>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col relative">
<div className="absolute top-4 right-4 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-sm z-10">Premium</div>
<div className="h-64 bg-gray-100 flex items-center justify-center p-8 relative border-b border-gray-100">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200/50"></div>

<div className="relative w-32 h-48 bg-gray-900 rounded-lg shadow-xl flex flex-col items-center p-2 border border-gray-700 group-hover:border-red-500/50 transition-colors">
<div className="w-full h-2/3 bg-black rounded mb-2 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent"></div>
<iconify-icon className="text-red-500 text-2xl relative z-10" icon="solar:fire-linear"></iconify-icon>
</div>
<div className="w-full flex justify-between px-1">
<div className="w-8 h-1 bg-gray-700 rounded-full"></div>
<div className="w-2 h-1 bg-green-500 rounded-full"></div>
</div>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Flare Fire Simulator</h3>
<p className="text-sm text-gray-500 mb-6 flex-1">Advanced system for enterprise offices. Includes larger display panels, multi-class fire scenarios, and detailed analytics reporting.</p>
<a className="inline-flex justify-center items-center gap-2 w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg text-gray-400" icon="solar:document-linear"></iconify-icon>
                            Download Brochure
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-100">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Office Fire Training Simulator Specifications</h2>
</div>
<div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50 border-b border-gray-200">
<th className="py-4 px-6 font-semibold text-sm text-gray-900 tracking-tight">Feature</th>
<th className="py-4 px-6 font-semibold text-sm text-gray-900 tracking-tight">Flicker Model</th>
<th className="py-4 px-6 font-semibold text-sm text-gray-900 tracking-tight">Flare Model</th>
</tr>
</thead>
<tbody className="text-sm text-gray-600">
<tr className="border-b border-gray-100 even:bg-gray-50/50 hover:bg-gray-50 transition-colors">
<td className="py-4 px-6 font-medium text-gray-900">Display Size</td>
<td className="py-4 px-6">24" LED Panel</td>
<td className="py-4 px-6">43" Dual LED Panels</td>
</tr>
<tr className="border-b border-gray-100 even:bg-gray-50/50 hover:bg-gray-50 transition-colors">
<td className="py-4 px-6 font-medium text-gray-900">Fire Classes Simulated</td>
<td className="py-4 px-6">Class A, B, C</td>
<td className="py-4 px-6">Class A, B, C, K, Electrical</td>
</tr>
<tr className="border-b border-gray-100 even:bg-gray-50/50 hover:bg-gray-50 transition-colors">
<td className="py-4 px-6 font-medium text-gray-900">Extinguisher Replicas</td>
<td className="py-4 px-6">1 Laser Extinguisher</td>
<td className="py-4 px-6">2 Laser Extinguishers (Variable weight)</td>
</tr>
<tr className="border-b border-gray-100 even:bg-gray-50/50 hover:bg-gray-50 transition-colors">
<td className="py-4 px-6 font-medium text-gray-900">Analytics &amp; Reporting</td>
<td className="py-4 px-6">Basic Pass/Fail</td>
<td className="py-4 px-6">Detailed metrics &amp; Cloud Export</td>
</tr>
<tr className="even:bg-gray-50/50 hover:bg-gray-50 transition-colors">
<td className="py-4 px-6 font-medium text-gray-900">Setup Time</td>
<td className="py-4 px-6">&lt; 2 minutes</td>
<td className="py-4 px-6">&lt; 5 minutes</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-100">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">Training Support and Implementation</h2>
<p className="text-base text-gray-500 mb-8 leading-relaxed">
                            We don't just ship a box. Our team ensures your safety officers and office managers are fully equipped to run successful training sessions from day one.
                        </p>
<div className="flex items-center gap-4 text-sm font-medium text-gray-900 mb-8">
<div className="flex items-center gap-1">
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<span>4.9/5 from Corporate Clients</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<iconify-icon className="text-2xl text-red-600 mb-3" icon="solar:video-library-linear"></iconify-icon>
<h4 className="text-sm font-semibold tracking-tight text-gray-900">Video Tutorials</h4>
<p className="text-xs text-gray-500 mt-1">Access to a full library of setup and usage guides.</p>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<iconify-icon className="text-2xl text-red-600 mb-3" icon="solar:phone-calling-linear"></iconify-icon>
<h4 className="text-sm font-semibold tracking-tight text-gray-900">Live Onboarding</h4>
<p className="text-xs text-gray-500 mt-1">1-on-1 virtual training session for your staff.</p>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<iconify-icon className="text-2xl text-red-600 mb-3" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="text-sm font-semibold tracking-tight text-gray-900">2-Year Warranty</h4>
<p className="text-xs text-gray-500 mt-1">Full coverage on hardware and electronic components.</p>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<iconify-icon className="text-2xl text-red-600 mb-3" icon="solar:settings-linear"></iconify-icon>
<h4 className="text-sm font-semibold tracking-tight text-gray-900">Maintenance Kit</h4>
<p className="text-xs text-gray-500 mt-1">Includes cleaning supplies and replacement cables.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 border-gray-100 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Flexible Options to Fit Your Needs</h2>
<p className="text-base text-gray-500">Whether you need it for a week-long safety drive or permanent placement.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2" onclick="window.location.href='https://www.pyrosoftinc.com/rent'" role="button">Rent</h3>
<p className="text-sm text-gray-500 mb-6 h-12">Perfect for annual safety weeks or one-off training events.</p>
<div className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">Weekly <span className="text-sm font-normal text-gray-500 tracking-normal">rates</span></div>
<ul className="space-y-3 mb-8 text-sm text-gray-600 flex-1">
<li className="flex gap-2 items-center"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> Ships in hard case</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> Return labels included</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> Standard support</li>
</ul>
<a className="w-full py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-sm text-center text-gray-900 font-medium hover:bg-gray-50 transition-colors" href="#">Get Rental Quote</a>
</div>

<div className="bg-white rounded-2xl border-2 border-red-500 p-8 shadow-xl relative md:scale-105 z-10 flex flex-col">
<div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide">Most Popular</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2" onclick="window.location.href='https://www.pyrosoftinc.com/lease'" role="button">Lease</h3>
<p className="text-sm text-gray-500 mb-6 h-12">Ideal for corporate campuses needing year-round access.</p>
<div className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">Monthly <span className="text-sm font-normal text-gray-500 tracking-normal">plans</span></div>
<ul className="space-y-3 mb-8 text-sm text-gray-600 flex-1">
<li className="flex gap-2 items-center"><iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon> 12-36 month terms</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon> Hardware upgrades included</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon> Priority support</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon> Annual maintenance</li>
</ul>
<a className="w-full py-2.5 px-4 bg-red-600 rounded-lg text-sm text-center text-white font-medium hover:bg-red-700 transition-colors" href="#">Inquire About Leasing</a>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2" onclick="window.location.href='https://www.pyrosoftinc.com/purchase'" role="button">Buy</h3>
<p className="text-sm text-gray-500 mb-6 h-12">Best for enterprise training centers and safety departments.</p>
<div className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">Custom <span className="text-sm font-normal text-gray-500 tracking-normal">pricing</span></div>
<ul className="space-y-3 mb-8 text-sm text-gray-600 flex-1">
<li className="flex gap-2 items-center"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> Own the hardware</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> 2-year warranty included</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> Optional support packages</li>
</ul>
<a className="w-full py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-sm text-center text-gray-900 font-medium hover:bg-gray-50 transition-colors" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">Office Fire Training FAQs</h2>
</div>
<div className="space-y-4">

<details className="group bg-gray-50 rounded-xl border border-gray-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-gray-900 text-sm">
                        Do these simulators meet OSHA training requirements?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-gray-500 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">
                        Yes. OSHA requires employers to provide educational programs to familiarize employees with the general principles of fire extinguisher use. Our simulators fulfill the hands-on component of this requirement safely and effectively.
                    </div>
</details>

<details className="group bg-gray-50 rounded-xl border border-gray-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-gray-900 text-sm">
                        How much space do we need in our office?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-gray-500 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">
                        You only need a roughly 10x10 foot area. A standard conference room, wide hallway, or breakroom works perfectly. The system requires standard 110V wall power.
                    </div>
</details>

<details className="group bg-gray-50 rounded-xl border border-gray-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-gray-900 text-sm">
                        Is there any mess or cleanup required?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-gray-500 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">
                        Absolutely not. Our simulators are 100% digital, using lasers and sensors instead of dry chemical, CO2, or water. There is zero mess, zero smoke, and zero hazard.
                    </div>
</details>

<details className="group bg-gray-50 rounded-xl border border-gray-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-gray-900 text-sm">
                        Can we track which employees have completed training?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-gray-500 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">
                        Yes, our Flare model includes detailed analytics reporting that allows you to export session results (Pass/Fail, time, accuracy) to a CSV or directly into your company's LMS via API.
                    </div>
</details>
</div>
</div>
</section>

<section className="pb-24 pt-12 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-20"></div>
<div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-20"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                        Empower Your Office Team with Confidence
                    </h2>
<p className="text-lg text-gray-400 mb-10">
                        Stop checking a box and start building real preparedness. Request a demo to see how simple, safe, and effective indoor fire training can be.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-lg text-base transition-colors shadow-lg" href="#">
                            Request Demo
                        </a>
<a className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 px-8 py-3 rounded-lg text-base transition-colors" href="#">
                            Contact Sales
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-1 mb-4" href="#">
<iconify-icon className="text-red-500 text-2xl" icon="solar:fire-linear"></iconify-icon>
                        FIRESIM
                    </a>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                        Next-generation fire safety training simulators built for modern workplaces and corporate environments.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-4">Products</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Flicker Office Model</a></li>
<li><a className="hover:text-white transition-colors" href="#">Flare Enterprise Model</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-white transition-colors" href="#">Software Integration</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-4">Pricing</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Rentals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Leasing Plans</a></li>
<li><a className="hover:text-white transition-colors" href="#">Purchase</a></li>
<li><a className="hover:text-white transition-colors" href="#">Request a Quote</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Support Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2023 FireSim Technologies. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
