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
      

<nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
<span className="text-teal-400 font-semibold tracking-tighter text-sm">PCA</span>
</div>
<span className="font-medium tracking-tight text-slate-200 text-sm hidden sm:block">Precision AI</span>
</div>
<div className="flex items-center gap-4 text-xs font-medium">
<a className="text-slate-400 hover:text-slate-200 transition-colors hidden md:block" href="#problem">Problem</a>
<a className="text-slate-400 hover:text-slate-200 transition-colors hidden md:block" href="#solution">Solution</a>
<a className="text-slate-400 hover:text-slate-200 transition-colors hidden md:block" href="#dashboard">Dashboard</a>
<a className="text-slate-400 hover:text-slate-200 transition-colors hidden md:block" href="#architecture">Architecture</a>
<div className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    SugarNxt Hackathon
                </div>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="relative pt-32 pb-24 overflow-hidden flex flex-col items-center text-center px-6">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="flex flex-wrap justify-center gap-2 mb-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium">
<iconify-icon icon="solar:cup-star-linear"></iconify-icon> SugarNxt Project
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs font-medium">
<iconify-icon icon="solar:camera-minimalistic-linear"></iconify-icon> AI + Computer Vision
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs font-medium">
<iconify-icon icon="solar:bolt-linear"></iconify-icon> Real-Time Support
                </span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white max-w-4xl leading-tight mb-6">
                Precision AI for <br className="hidden sm:block"/> Cane Quality Assessment
            </h1>
<p className="text-base md:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
                Real-time sugar percentage estimation at mill entry — enabling faster, smarter process decisions before the cane even reaches the crushers.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-slate-950 hover:bg-slate-200 transition-colors font-medium text-sm flex items-center justify-center gap-2" href="#solution">
                    View Solution Overview
                </a>
<a className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white hover:bg-slate-800 transition-colors font-medium text-sm flex items-center justify-center gap-2" href="#how-it-works">
                    See How It Works <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-950" id="problem">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">The Information Gap in Milling</h2>
<p className="text-slate-400 text-base max-w-2xl">Currently, sugar mill operations rely on laboratory testing that is inherently reactive. By the time quality data is available, the cane has already been processed.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col gap-4">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
<iconify-icon className="text-lg" icon="solar:test-tube-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-200">Delayed Lab Results</h3>
<p className="text-sm text-slate-400">Sugar % (Pol) is only known after manual sampling and lab testing, taking hours to process.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col gap-4">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
<iconify-icon className="text-lg" icon="solar:graph-down-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-200">Unnecessary Sugar Loss</h3>
<p className="text-sm text-slate-400">Without real-time quality data, extraction parameters cannot be optimized dynamically, leading to yield loss.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col gap-4">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
<iconify-icon className="text-lg" icon="solar:history-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-200">Reactive Operations</h3>
<p className="text-sm text-slate-400">Process engineers are forced to make retrospective adjustments rather than proactive milling decisions.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-900/20" id="solution">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">A Real-Time Decision Layer</h2>
<div className="space-y-6 text-sm text-slate-400">
<p>Our system introduces non-intrusive cameras and sensors at the mill entry point. By analyzing the visual texture, color, and density of the cane on the conveyor, the AI model estimates the sugar percentage (Pol) in real-time.</p>
<div className="p-6 rounded-xl bg-teal-950/30 border border-teal-900/50 text-teal-200 border-l-2 border-l-teal-500">
<p className="font-medium italic">"Operational usefulness over lab perfection."</p>
<p className="text-xs mt-2 text-teal-400/80">This is a decision-support tool designed to provide directional trends instantly, complementing—not replacing—precise laboratory chemistry.</p>
</div>
</div>
<div className="mt-10 grid sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-teal-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-slate-200">Zero Disruption</h4>
<p className="text-xs text-slate-500 mt-1">Plug-and-play deployment over existing conveyors.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-teal-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-slate-200">Continuous Learning</h4>
<p className="text-xs text-slate-500 mt-1">Model improves via periodic lab validation feedback.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-teal-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-slate-200">Retrofit Ready</h4>
<p className="text-xs text-slate-500 mt-1">Designed for legacy mills, no greenfield setup required.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-teal-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-slate-200">Instant Visibility</h4>
<p className="text-xs text-slate-500 mt-1">Real-time cane quality tracking for control rooms.</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
<iconify-icon className="text-xl text-teal-400 mb-3 block" icon="solar:radar-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-200 mb-1">Live Estimation</h4>
<p className="text-xs text-slate-500">Real-time Pol % prediction via edge computing.</p>
</div>
<div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
<iconify-icon className="text-xl text-teal-400 mb-3 block" icon="solar:chart-square-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-200 mb-1">Trend Analysis</h4>
<p className="text-xs text-slate-500">Hourly quality visualization for process engineers.</p>
</div>
<div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
<iconify-icon className="text-xl text-teal-400 mb-3 block" icon="solar:bell-bing-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-200 mb-1">Deviation Alerts</h4>
<p className="text-xs text-slate-500">Automated flags for sudden drops in cane quality.</p>
</div>
<div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
<iconify-icon className="text-xl text-teal-400 mb-3 block" icon="solar:tuning-square-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-200 mb-1">Lab Calibration</h4>
<p className="text-xs text-slate-500">Periodic sync with lab data to maintain accuracy.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-950" id="how-it-works">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Operational Workflow</h2>
<p className="text-slate-400 text-sm">A seamless flow from physical cane entry to digital process control.</p>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-800 -translate-y-1/2 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5 bg-slate-950 py-4">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 mb-4 shadow-sm">
<span className="text-xs font-semibold">1</span>
</div>
<h4 className="text-sm font-semibold text-slate-200 mb-2">Entry</h4>
<p className="text-xs text-slate-500">Cane arrives on main conveyor</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5 bg-slate-950 py-4">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
<iconify-icon className="text-lg" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-200 mb-2">Capture</h4>
<p className="text-xs text-slate-500">Sensors scan surface &amp; texture</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5 bg-slate-950 py-4">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
<iconify-icon className="text-lg" icon="solar:cpu-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-200 mb-2">Analyze</h4>
<p className="text-xs text-slate-500">AI predicts sugar percentage</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5 bg-slate-950 py-4">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 mb-4 shadow-sm">
<iconify-icon className="text-lg" icon="solar:monitor-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-200 mb-2">Visualize</h4>
<p className="text-xs text-slate-500">Data streamed to control room</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5 bg-slate-950 py-4">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 mb-4 shadow-sm">
<iconify-icon className="text-lg" icon="solar:settings-minimalistic-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-200 mb-2">Action</h4>
<p className="text-xs text-slate-500">Operators adjust parameters</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-900/10" id="dashboard">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Control Room View</h2>
<p className="text-slate-400 text-sm">Clean, actionable insights for process engineers.</p>
</div>
<span className="px-2 py-1 rounded bg-slate-800 text-slate-400 text-xs border border-slate-700">Conceptual UI Mock-up</span>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden flex flex-col">

<div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<span className="ml-4 text-xs font-medium text-slate-500">Mill Station Alpha - Quality Monitor</span>
</div>

<div className="p-6 grid md:grid-cols-3 gap-6">

<div className="flex flex-col justify-between p-5 rounded-lg border border-slate-800 bg-slate-900/50">
<div className="flex justify-between items-start mb-6">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Est. Pol Percentage</span>
<iconify-icon className="text-teal-500" icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="text-4xl font-semibold tracking-tighter text-white">13.8</span>
<span className="text-lg text-slate-500">%</span>
</div>
<div className="mt-2 flex items-center gap-1.5 text-xs text-teal-400">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
<span>+0.2% from last hour</span>
</div>
</div>
</div>

<div className="md:col-span-2 p-5 rounded-lg border border-slate-800 bg-slate-900/50 flex flex-col">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Hourly Trend (Last 8H)</span>
<div className="flex gap-2">
<span className="w-8 h-1 bg-teal-500 rounded-full"></span>
<span className="w-8 h-1 bg-slate-700 rounded-full"></span>
</div>
</div>
<div className="flex-grow flex items-end justify-between gap-2 pt-4 h-32">

<div className="w-full bg-slate-800 rounded-t-sm h-[60%] hover:bg-slate-700 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">12.9</div></div>
<div className="w-full bg-slate-800 rounded-t-sm h-[65%] hover:bg-slate-700 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">13.1</div></div>
<div className="w-full bg-slate-800 rounded-t-sm h-[55%] hover:bg-slate-700 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">12.5</div></div>
<div className="w-full bg-slate-800 rounded-t-sm h-[70%] hover:bg-slate-700 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">13.4</div></div>
<div className="w-full bg-slate-800 rounded-t-sm h-[80%] hover:bg-slate-700 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">13.6</div></div>
<div className="w-full bg-slate-800 rounded-t-sm h-[75%] hover:bg-slate-700 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">13.5</div></div>
<div className="w-full bg-teal-500/80 rounded-t-sm h-[85%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">13.8</div></div>
</div>
</div>
</div>

<div className="px-6 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-slate-400">System Status: Active &amp; Calibrated</span>
</div>
<span className="text-xs text-slate-500">Last lab sync: 42 mins ago</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-950" id="architecture">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-8">System Architecture</h2>
<div className="flex flex-col gap-4">
<div className="p-4 rounded-lg border border-slate-800 bg-slate-900 flex items-center gap-4 relative">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 shrink-0">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-200">1. Sensor Layer</h4>
<p className="text-xs text-slate-500">Industrial cameras &amp; surface sensors at mill entry.</p>
</div>
<div className="absolute left-9 bottom-0 translate-y-full h-4 w-px bg-slate-800"></div>
</div>
<div className="p-4 rounded-lg border border-teal-500/30 bg-teal-500/5 flex items-center gap-4 relative">
<div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:cpu-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-teal-100">2. AI Prediction Engine</h4>
<p className="text-xs text-teal-500/70">Edge-based CV models process texture &amp; density data instantly.</p>
</div>
<div className="absolute left-9 bottom-0 translate-y-full h-4 w-px bg-slate-800"></div>
</div>
<div className="p-4 rounded-lg border border-slate-800 bg-slate-900 flex items-center gap-4 relative">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 shrink-0">
<iconify-icon icon="solar:database-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-200">3. Data Validation</h4>
<p className="text-xs text-slate-500">Cloud synchronization with periodic lab test results for auto-calibration.</p>
</div>
<div className="absolute left-9 bottom-0 translate-y-full h-4 w-px bg-slate-800"></div>
</div>
<div className="p-4 rounded-lg border border-slate-800 bg-slate-900 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 shrink-0">
<iconify-icon icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-200">4. Mill Control Dashboard</h4>
<p className="text-xs text-slate-500">Web-based UI for operators to adjust milling parameters.</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-12">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-6">Technology Stack</h2>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-md border border-slate-800 bg-slate-900 text-xs text-slate-300 flex items-center gap-2">
<iconify-icon icon="solar:code-square-linear"></iconify-icon> ML Regression Models
                            </span>
<span className="px-3 py-1.5 rounded-md border border-slate-800 bg-slate-900 text-xs text-slate-300 flex items-center gap-2">
<iconify-icon icon="solar:eye-linear"></iconify-icon> Computer Vision
                            </span>
<span className="px-3 py-1.5 rounded-md border border-slate-800 bg-slate-900 text-xs text-slate-300 flex items-center gap-2">
<iconify-icon icon="solar:server-square-linear"></iconify-icon> Edge Processing
                            </span>
<span className="px-3 py-1.5 rounded-md border border-slate-800 bg-slate-900 text-xs text-slate-300 flex items-center gap-2">
<iconify-icon icon="solar:window-frame-linear"></iconify-icon> Web Dashboard
                            </span>
<span className="px-3 py-1.5 rounded-md border border-slate-800 bg-slate-900 text-xs text-slate-300 flex items-center gap-2">
<iconify-icon icon="solar:wifi-router-linear"></iconify-icon> Basic IoT Integration
                            </span>
</div>
</div>
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-4">Cost &amp; Feasibility</h2>
<p className="text-sm text-slate-400 mb-6">Designed to be highly cost-effective for existing infrastructure. The investment is rapidly offset by operational savings.</p>
<div className="space-y-3">
<div className="flex items-center justify-between pb-3 border-b border-slate-800/50">
<span className="text-sm text-slate-300">Reduced Sugar Loss</span>
<span className="text-xs font-medium text-teal-400">High Impact</span>
</div>
<div className="flex items-center justify-between pb-3 border-b border-slate-800/50">
<span className="text-sm text-slate-300">Fewer Process Delays</span>
<span className="text-xs font-medium text-teal-400">High Impact</span>
</div>
<div className="flex items-center justify-between pb-3">
<span className="text-sm text-slate-300">Implementation Cost</span>
<span className="text-xs font-medium text-slate-400">Low (Hardware + SaaS)</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-900/20">
<div className="max-w-4xl mx-auto flex flex-col gap-12">

<div className="p-6 rounded-xl border border-slate-700 bg-slate-800/30 flex gap-4 items-start">
<iconify-icon className="text-slate-400 text-xl shrink-0 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-slate-200 mb-1">Hackathon Disclosure</h4>
<p className="text-xs text-slate-400 leading-relaxed">This project is presented as a conceptual and research-based Minimum Viable Product (MVP) as permitted under SugarNxt Hackathon guidelines. The proposed system is designed to act as a real-time operational decision-support tool; it does not replace precise laboratory chemical testing, but rather complements it with immediate, actionable trend insights.</p>
</div>
</div>

<div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-6 text-center">Project Development</h3>
<div className="max-w-xs mx-auto p-6 rounded-2xl border border-slate-800 bg-slate-900 text-center flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 mb-4">
<iconify-icon className="text-2xl" icon="solar:user-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-slate-200">Mohd Sahib Raza</h4>
<p className="text-xs text-teal-400 font-medium mb-1">Solo Innovator</p>
<p className="text-xs text-slate-500">Product, AI Concept &amp; System Design</p>
</div>
</div>
</div>
</section>
</main>

<footer className="py-12 px-6 border-t border-slate-800/50 bg-slate-950 text-center">
<div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
<div className="flex items-center gap-4">
<span className="text-sm font-semibold tracking-tighter text-slate-300">PCA</span>
<div className="w-px h-4 bg-slate-800"></div>
<span className="text-xs font-medium text-slate-500">SugarNxt Hackathon Submission</span>
</div>
<p className="text-xs text-slate-600 max-w-md">
                Thank you to the judges, ISMA, and industry experts for reviewing this concept. Built for the future of smart milling.
            </p>
</div>
</footer>

    </>
  );
}
