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
slate: {
950: '#0a0a0c',
900: '#121215',
800: '#1f1f23',
},
blue: {
400: '#60a5fa',
500: '#3b82f6',
600: '#2563eb',
}
}
}
}
}



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
      

<nav className="fixed w-full z-50 top-0 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
<div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
</div>
<span className="text-lg font-semibold tracking-tighter text-white">VENAGO</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#framework">Framework</a>
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#industries">Industries</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
</div>
<a className="hidden md:inline-flex px-4 py-2 text-sm font-medium text-white bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 hover:border-slate-700 transition-all" href="#contact">
                Contact Sales
            </a>
</div>
</nav>

<header className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-8">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<span>Intelligent Industrial Ecosystems</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight mb-6">
                Transforming Conventional Factories into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Smart, Data-Driven</span> Manufacturing Systems.
            </h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-light">
                From machine monitoring to energy optimization, from inventory tracking to manual process digitization — we build modular, scalable industrial ecosystems.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]" href="#contact">
                    Request Consultation
                </a>
<a className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm font-medium hover:bg-slate-800 transition-colors" href="#contact">
                    Book Factory Assessment
                </a>
</div>
</div>

<div className="max-w-5xl mx-auto px-6 mt-20 relative z-10">
<div className="rounded-xl border border-slate-800/60 bg-slate-900/50 backdrop-blur-sm p-4 shadow-2xl overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80 z-10"></div>
<div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-800">
<div className="w-3 h-3 rounded-full bg-slate-800"></div>
<div className="w-3 h-3 rounded-full bg-slate-800"></div>
<div className="w-3 h-3 rounded-full bg-slate-800"></div>
</div>
<div className="grid grid-cols-3 gap-4 h-48 opacity-50">
<div className="col-span-2 rounded border border-slate-800 bg-slate-950/50 p-4 flex flex-col justify-end">
<div className="flex items-end gap-2 h-full">
<div className="w-full bg-blue-500/20 rounded-t h-[30%]"></div>
<div className="w-full bg-blue-500/40 rounded-t h-[50%]"></div>
<div className="w-full bg-blue-500/60 rounded-t h-[80%]"></div>
<div className="w-full bg-blue-500/80 rounded-t h-[60%]"></div>
<div className="w-full bg-blue-500/40 rounded-t h-[40%]"></div>
</div>
</div>
<div className="rounded border border-slate-800 bg-slate-950/50 p-4 flex flex-col gap-3">
<div className="h-4 w-1/2 bg-slate-800 rounded"></div>
<div className="h-8 w-3/4 bg-slate-800 rounded"></div>
<div className="mt-auto h-2 w-full bg-slate-800 rounded overflow-hidden">
<div className="h-full bg-blue-500 w-[70%]"></div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-slate-800/50" id="framework">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Our Industrial Automation Stack</h2>
<p className="text-slate-400 max-w-2xl mx-auto">A modular, 9-layer framework designed to digitize every aspect of your manufacturing facility.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900 transition-all cursor-default">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">Machine Monitoring</h3>
<p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">Real-time status, OEE calculation, and predictive maintenance alerts.</p>
</div>
<div className="group relative p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900 transition-all cursor-default">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">Production Tracking</h3>
<p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">Shift outputs, operator productivity, and digital counting systems.</p>
</div>
<div className="group relative p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900 transition-all cursor-default">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">Inventory Tracking</h3>
<p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">Batch traceability, WIP visibility, and RFID integration.</p>
</div>
<div className="group relative p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900 transition-all cursor-default">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:bolt-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">Energy Monitoring</h3>
<p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">Per-machine tracking, load analytics, and optimization.</p>
</div>
<div className="group relative p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900 transition-all cursor-default">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:thermometer-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">Environmental</h3>
<p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">Temp/Humidity tracking, air quality, and auto HVAC control.</p>
</div>
<div className="group relative p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900 transition-all cursor-default">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:smart-home-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">Facility Automation</h3>
<p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">Tank levels, pump control, and lighting automation.</p>
</div>
<div className="group relative p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900 transition-all cursor-default">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">Safety &amp; Security</h3>
<p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">Access control, hazard detection, and automated lockdowns.</p>
</div>
<div className="group relative p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900 transition-all cursor-default">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">Process Digitization</h3>
<p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">Eliminating paper logs via integrated instruments and touch panels.</p>
</div>
<div className="group relative p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900 transition-all cursor-default">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">Custom Solutions</h3>
<p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">Industry-specific workflows engineered to your requirements.</p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="text-blue-400 mb-4"><iconify-icon className="text-3xl" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon></div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Machine Monitoring &amp; Diagnostics</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-slate-300 font-medium">Real-time Status:</strong> Instant visibility into machine ON/OFF state and running hours.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-slate-300 font-medium">Downtime Detection:</strong> Automated logging of idle times and micro-stops.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-slate-300 font-medium">Predictive Maintenance:</strong> Vibration and temperature sensors pre-empt breakdowns.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-slate-300 font-medium">Instant Alerts:</strong> Breakdown notifications routed via Email and WhatsApp.</span>
</li>
</ul>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-white">CNC Machine Center 01</span>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-green-500">Running</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
<div className="text-xs text-slate-500 mb-1">OEE Score</div>
<div className="text-2xl font-semibold text-white">87.4%</div>
</div>
<div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
<div className="text-xs text-slate-500 mb-1">Running Hours</div>
<div className="text-2xl font-semibold text-white">14h 20m</div>
</div>
</div>
<div className="space-y-3">
<div className="text-xs font-medium text-slate-400">Sensor Telemetry</div>
<div className="flex items-center justify-between p-3 rounded bg-slate-950 border border-slate-800">
<span className="text-sm">Spindle Vibration</span>
<div className="flex items-center gap-2">
<div className="w-24 h-1.5 bg-slate-800 rounded overflow-hidden"><div className="h-full bg-blue-500 w-[40%]"></div></div>
<span className="text-xs text-slate-400">Normal</span>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded bg-slate-950 border border-slate-800">
<span className="text-sm">Motor Temp</span>
<div className="flex items-center gap-2">
<div className="w-24 h-1.5 bg-slate-800 rounded overflow-hidden"><div className="h-full bg-amber-500 w-[75%]"></div></div>
<span className="text-xs text-amber-500">Elevated</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-800/50 bg-slate-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse lg:flex-row">

<div className="relative order-2 lg:order-1 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl flex flex-col justify-center items-center h-80 overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px)] bg-[size:40px_100%] opacity-20"></div>
<div className="text-center z-10 w-full px-8">
<div className="text-xs tracking-widest text-slate-500 uppercase mb-2">Line 4 Output</div>
<div className="text-6xl font-semibold text-white tracking-tighter mb-8 font-mono">14,892</div>
<div className="w-full h-1 bg-slate-800 rounded relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-blue-500 w-[60%]"></div>
<div className="absolute top-0 right-0 h-full w-4 bg-white/20 blur-sm animate-[translateX_2s_infinite]"></div>
</div>
<div className="flex justify-between text-xs mt-2 text-slate-500">
<span>Shift Target: 25k</span>
<span className="text-blue-400">On Track</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="text-blue-400 mb-4"><iconify-icon className="text-3xl" icon="solar:conveyor-linear" strokeWidth="1.5"></iconify-icon></div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Production &amp; Output Tracking</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-slate-300 font-medium">Digital Counting:</strong> Sensor-based unit counters for conveyors and assembly lines.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-slate-300 font-medium">Shift Analytics:</strong> Track units produced per shift and operator productivity.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-slate-300 font-medium">Quality Control:</strong> Log rejected units alongside production data automatically.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-slate-300 font-medium">Automated Reports:</strong> Generate end-of-day production logs without human input.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-800/50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Inventory &amp; Material Tracking</h2>
<p className="text-slate-400 max-w-2xl mx-auto">End-to-end visibility from raw material entry to finished goods dispatch.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30">
<iconify-icon className="text-xl text-blue-400 mb-3" icon="solar:scanner-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-1">Barcode &amp; RFID Integration</h3>
<p className="text-xs text-slate-500 leading-relaxed">Automate scanning at inward, WIP stages, and outward gates.</p>
</div>
<div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30">
<iconify-icon className="text-xl text-blue-400 mb-3" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-1">Batch Traceability</h3>
<p className="text-xs text-slate-500 leading-relaxed">Track the exact lineage of materials used in specific production batches.</p>
</div>
<div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30">
<iconify-icon className="text-xl text-blue-400 mb-3" icon="solar:bell-bing-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-1">Auto Reorder Alerts</h3>
<p className="text-xs text-slate-500 leading-relaxed">Set minimum threshold levels and trigger automated purchase requests.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-slate-800/50 bg-slate-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="text-blue-400 mb-4"><iconify-icon className="text-3xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon></div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Energy Monitoring &amp; Optimization</h2>
<p className="text-slate-400 mb-6 font-light">Stop guessing your power costs. Gain granular insight into consumption patterns to reduce waste and optimize utility bills.</p>
<div className="space-y-4">
<div className="flex items-center gap-3 border-b border-slate-800/50 pb-3">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-sm">Real-time energy monitoring per machine</span>
</div>
<div className="flex items-center gap-3 border-b border-slate-800/50 pb-3">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-sm">Three-phase power tracking (Voltage &amp; Load)</span>
</div>
<div className="flex items-center gap-3 border-b border-slate-800/50 pb-3">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-sm">Cost per unit production analysis</span>
</div>
<div className="flex items-center gap-3 pb-3">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-sm">Auto shutdown logic during extended idle time</span>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-white">Power Consumption (kW)</span>
<span className="text-xs text-slate-500">Last 24 Hours</span>
</div>
<div className="h-48 flex items-end justify-between gap-2 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
<div className="border-t border-slate-600 w-full"></div>
<div className="border-t border-slate-600 w-full"></div>
<div className="border-t border-slate-600 w-full"></div>
<div className="border-t border-slate-600 w-full"></div>
</div>

<div className="w-full bg-blue-500/20 hover:bg-blue-500/40 transition-colors rounded-t h-[30%]"></div>
<div className="w-full bg-blue-500/20 hover:bg-blue-500/40 transition-colors rounded-t h-[45%]"></div>
<div className="w-full bg-blue-500/20 hover:bg-blue-500/40 transition-colors rounded-t h-[80%] relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-blue-400">Peak</div></div>
<div className="w-full bg-blue-500/20 hover:bg-blue-500/40 transition-colors rounded-t h-[65%]"></div>
<div className="w-full bg-blue-500/20 hover:bg-blue-500/40 transition-colors rounded-t h-[50%]"></div>
<div className="w-full bg-blue-500/20 hover:bg-blue-500/40 transition-colors rounded-t h-[20%]"></div>
<div className="w-full bg-blue-500/20 hover:bg-blue-500/40 transition-colors rounded-t h-[35%]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-slate-800/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/30">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded bg-blue-500/10"><iconify-icon className="text-xl text-blue-400" icon="solar:thermometer-linear" strokeWidth="1.5"></iconify-icon></div>
<h3 className="text-xl font-medium text-white tracking-tight">Environmental</h3>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center p-3 rounded bg-slate-950 border border-slate-800/50">
<span className="text-sm">Temperature &amp; Humidity</span>
<span className="text-xs text-slate-500 font-mono">22°C / 45%</span>
</div>
<div className="flex justify-between items-center p-3 rounded bg-slate-950 border border-slate-800/50">
<span className="text-sm">Air Quality &amp; CO2</span>
<span className="text-xs text-green-500 font-mono">410 ppm</span>
</div>
<div className="flex justify-between items-center p-3 rounded bg-slate-950 border border-slate-800/50">
<span className="text-sm">Auto HVAC Control</span>
<span className="text-xs text-blue-400 font-medium">Active</span>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/30">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded bg-blue-500/10"><iconify-icon className="text-xl text-blue-400" icon="solar:drop-linear" strokeWidth="1.5"></iconify-icon></div>
<h3 className="text-xl font-medium text-white tracking-tight">Utility &amp; Facility</h3>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center p-3 rounded bg-slate-950 border border-slate-800/50">
<span className="text-sm">Water Tank Level</span>
<div className="w-16 h-1.5 bg-slate-800 rounded overflow-hidden"><div className="h-full bg-blue-500 w-[80%]"></div></div>
</div>
<div className="flex justify-between items-center p-3 rounded bg-slate-950 border border-slate-800/50">
<span className="text-sm">Pump Automation</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" disabled="" type="checkbox" value=""/>
<div className="w-7 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-500"></div>
</label>
</div>
<div className="flex justify-between items-center p-3 rounded bg-slate-950 border border-slate-800/50">
<span className="text-sm">Compressed Air Pressure</span>
<span className="text-xs text-slate-500 font-mono">6.5 Bar</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-slate-800/50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Eliminating Manual Errors Through Smart Data Capture</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Replace paper registers and clipboard management with direct instrument integration.</p>
</div>

<div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
<div className="w-full max-w-sm p-6 rounded-xl border border-slate-800 bg-slate-900/50 text-center opacity-60">
<iconify-icon className="text-4xl text-slate-500 mb-4" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-slate-300 mb-2">Paper Register</h4>
<p className="text-xs text-slate-500">Prone to errors, hard to search, delayed data entry.</p>
</div>
<iconify-icon className="hidden md:block text-2xl text-slate-600" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="md:hidden text-2xl text-slate-600" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
<div className="w-full max-w-sm p-6 rounded-xl border border-blue-500/30 bg-blue-500/5 text-center shadow-[0_0_30px_rgba(59,130,246,0.05)]">
<iconify-icon className="text-4xl text-blue-400 mb-4" icon="solar:monitor-smartphone-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-2">Digital Dashboard</h4>
<p className="text-xs text-slate-400">Auto-logged, instantly searchable, real-time insights.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-4 border border-slate-800 rounded-lg bg-slate-950">
<div className="text-xs font-medium text-white mb-1">Weighing Integration</div>
<div className="text-xs text-slate-500">Auto data logging from industrial scales.</div>
</div>
<div className="p-4 border border-slate-800 rounded-lg bg-slate-950">
<div className="text-xs font-medium text-white mb-1">QC Instruments</div>
<div className="text-xs text-slate-500">Digital caliper data sent directly to DB.</div>
</div>
<div className="p-4 border border-slate-800 rounded-lg bg-slate-950">
<div className="text-xs font-medium text-white mb-1">Touchscreen Panels</div>
<div className="text-xs text-slate-500">Operator inputs and RFID logins at station.</div>
</div>
<div className="p-4 border border-slate-800 rounded-lg bg-slate-950">
<div className="text-xs font-medium text-white mb-1">Auto Timestamps</div>
<div className="text-xs text-slate-500">Exact time logging for every batch phase.</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-slate-800/50 bg-slate-900/20" id="industries">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Customized Industry Solutions</h2>
<p className="text-slate-400 mb-12 font-medium italic">"If it produces data, we can digitize it."</p>
<div className="flex flex-wrap justify-center gap-4">
<span className="px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-sm text-slate-300">Food Processing</span>
<span className="px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-sm text-slate-300">Textile &amp; Garments</span>
<span className="px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-sm text-slate-300">Metal &amp; Fabrication</span>
<span className="px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-sm text-slate-300">Warehousing</span>
<span className="px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-sm text-slate-300">Packaging</span>
<span className="px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-sm text-slate-300">Chemical Manufacturing</span>
</div>
</div>
</section>

<section className="py-24 border-b border-slate-800/50 overflow-hidden relative">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Centralized Command &amp; Control</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Access your factory's pulse from anywhere. Role-based dashboards for operators, managers, and admins.</p>
</div>

<div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-xl border border-slate-800/80 bg-slate-900 shadow-2xl overflow-hidden flex flex-col relative">

<div className="h-10 border-b border-slate-800 bg-slate-950 flex items-center px-4 justify-between shrink-0">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
</div>
<div className="text-[10px] text-slate-500 font-mono">VENAGO OS // LIVE</div>
</div>

<div className="flex-1 p-4 grid grid-cols-4 gap-4">

<div className="col-span-1 border-r border-slate-800/50 pr-4 hidden md:flex flex-col gap-2">
<div className="h-6 w-full bg-slate-800/50 rounded"></div>
<div className="h-6 w-3/4 bg-slate-800/30 rounded"></div>
<div className="h-6 w-5/6 bg-slate-800/30 rounded"></div>
<div className="h-6 w-4/6 bg-slate-800/30 rounded mt-4"></div>
</div>

<div className="col-span-4 md:col-span-3 grid grid-rows-3 gap-4">
<div className="row-span-1 grid grid-cols-3 gap-4">
<div className="rounded border border-slate-800/50 bg-slate-950/50 p-3 flex flex-col justify-center">
<div className="w-8 h-2 bg-slate-800 mb-2 rounded"></div>
<div className="w-16 h-4 bg-white/20 rounded"></div>
</div>
<div className="rounded border border-slate-800/50 bg-slate-950/50 p-3 flex flex-col justify-center">
<div className="w-8 h-2 bg-slate-800 mb-2 rounded"></div>
<div className="w-20 h-4 bg-blue-500/50 rounded"></div>
</div>
<div className="rounded border border-slate-800/50 bg-slate-950/50 p-3 flex flex-col justify-center">
<div className="w-8 h-2 bg-slate-800 mb-2 rounded"></div>
<div className="w-12 h-4 bg-white/20 rounded"></div>
</div>
</div>
<div className="row-span-2 rounded border border-slate-800/50 bg-slate-950/50 p-4 relative overflow-hidden">

<div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-blue-500/10 to-transparent"></div>
<svg className="absolute bottom-0 left-0 w-full h-[60%] text-blue-500/30" fill="none" preserveaspectratio="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 100">
<path d="M0,100 Q20,80 40,90 T80,50 T100,20"></path>
</svg>
<svg className="absolute bottom-0 left-0 w-full h-[60%] text-blue-400" fill="none" preserveaspectratio="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 100 100">
<path d="M0,100 Q20,70 40,80 T80,40 T100,10"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center">
<div className="text-xs text-slate-500">Web &amp; Mobile Access</div>
<div className="text-xs text-slate-500">Role-Based Access</div>
<div className="text-xs text-slate-500">Cloud + Local Hybrid</div>
<div className="text-xs text-slate-500">ERP Integration API</div>
</div>
</div>
</section>

<section className="py-24 border-b border-slate-800/50" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Implementation Process</h2>
<p className="text-slate-400">A structured approach to digitizing your facility with minimal disruption.</p>
</div>
<div className="relative max-w-4xl mx-auto">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-800 -translate-y-1/2 z-0"></div>
<div className="flex flex-col md:flex-row justify-between gap-8 relative z-10">

<div className="flex flex-col items-center text-center group">
<div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center mb-3 group-hover:border-blue-500 group-hover:text-blue-400 transition-colors text-slate-400 font-mono text-sm">1</div>
<h4 className="text-xs font-medium text-white mb-1">Study</h4>
<span className="text-[10px] text-slate-500">Site Visit</span>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center mb-3 group-hover:border-blue-500 group-hover:text-blue-400 transition-colors text-slate-400 font-mono text-sm">2</div>
<h4 className="text-xs font-medium text-white mb-1">Design</h4>
<span className="text-[10px] text-slate-500">Architecture</span>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-10 h-10 rounded-full bg-slate-950 border border-blue-500/50 bg-blue-500/10 flex items-center justify-center mb-3 text-blue-400 font-mono text-sm relative">
<div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
                            3
                        </div>
<h4 className="text-xs font-medium text-white mb-1">POC</h4>
<span className="text-[10px] text-slate-500">Proof of Concept</span>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center mb-3 group-hover:border-blue-500 group-hover:text-blue-400 transition-colors text-slate-400 font-mono text-sm">4</div>
<h4 className="text-xs font-medium text-white mb-1">Install</h4>
<span className="text-[10px] text-slate-500">Integration</span>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center mb-3 group-hover:border-blue-500 group-hover:text-blue-400 transition-colors text-slate-400 font-mono text-sm">5</div>
<h4 className="text-xs font-medium text-white mb-1">Test</h4>
<span className="text-[10px] text-slate-500">Optimization</span>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center mb-3 group-hover:border-blue-500 group-hover:text-blue-400 transition-colors text-slate-400 font-mono text-sm">6</div>
<h4 className="text-xs font-medium text-white mb-1">Handover</h4>
<span className="text-[10px] text-slate-500">Training &amp; Support</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Modular Scalability</h3>
<p className="text-sm text-slate-500">Start with a single machine monitoring module and expand to a full factory dashboard as your needs grow.</p>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Hardware Agnostic</h3>
<p className="text-sm text-slate-500">We integrate with your existing legacy machines using retrofitted sensors, avoiding expensive replacements.</p>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Cost Optimization</h3>
<p className="text-sm text-slate-500">Our solutions are engineered to provide a clear ROI through energy savings, reduced downtime, and lower defect rates.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-slate-800" id="contact">
<div className="absolute inset-0 bg-slate-900/50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-6">Ready to Digitize Your Factory?</h2>
<p className="text-slate-400 mb-10">Connect with our engineering team to map out your automation journey.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors">
                    Schedule Technical Discussion
                </button>
<button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm font-medium hover:bg-slate-900 transition-colors">
                    Get Automation Proposal
                </button>
<button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-transparent text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                    Request Demo
                </button>
</div>
</div>
</section>

<footer className="py-8 border-t border-slate-800 bg-slate-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded bg-blue-500/20 border border-blue-500/50"></div>
<span className="text-sm font-semibold tracking-tighter text-slate-300">VENAGO</span>
</div>
<p className="text-xs text-slate-500">© 2023 Venago Innovations. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
