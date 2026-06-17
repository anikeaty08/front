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



        function switchTab(tabId) {
            // Remove active state from all buttons
            document.querySelectorAll('button[id^="tab-"]').forEach(btn => {
                btn.className = "flex-1 py-4 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors";
            });
            
            // Add active state to clicked button
            const activeBtn = document.getElementById('tab-' + tabId);
            activeBtn.className = "flex-1 py-4 text-sm font-medium text-blue-600 border-b-2 border-blue-600 bg-blue-50/50 transition-colors";

            // Hide all contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Show clicked content
            document.getElementById('content-' + tabId).classList.add('active');
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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors">
<span className="iconify" data-icon="lucide:box" data-width="20"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">BuildBrain</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#product">Product</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#output">Output Examples</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">About</a>
</nav>
<div className="flex items-center">
<button className="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-slate-800 transition-all flex items-center gap-2">
                    Book Demo
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern -z-10 h-3/4"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:sparkles" data-width="12"></span>
<span>New: Auto-generated SOVs in seconds</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                    AI-Powered Construction Estimating for General Contractors
                </h1>
<p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                    Generate accurate takeoffs, estimates, scopes, and bid packages in minutes — instead of the standard 60–100 hours.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-slate-900 text-white text-base font-medium px-8 py-3.5 rounded hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                        Book a 20-Minute Demo
                    </button>
<button className="bg-white text-slate-700 border border-slate-200 text-base font-medium px-8 py-3.5 rounded hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:upload" data-width="18"></span>
                        See BuildBrain on your plans
                    </button>
</div>
<div className="mt-8 flex items-center gap-4 text-xs text-slate-500 font-medium">
<div className="flex items-center gap-1">
<span className="iconify text-green-600" data-icon="lucide:check-circle-2" data-width="14"></span>
<span>SOC2 Compliant</span>
</div>
<div className="flex items-center gap-1">
<span className="iconify text-green-600" data-icon="lucide:check-circle-2" data-width="14"></span>
<span>No credit card required</span>
</div>
</div>
</div>

<div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 p-2 lg:translate-x-12">

<div className="h-8 bg-slate-50 border-b border-slate-100 rounded-t-lg flex items-center px-3 gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>

<div className="p-6 bg-slate-50/50 h-[400px] relative overflow-hidden flex flex-col gap-4">

<div className="absolute inset-x-6 top-6 bg-white border border-dashed border-slate-300 rounded-lg h-32 flex flex-col items-center justify-center z-10 opacity-20">
<span className="iconify text-slate-400 mb-2" data-icon="lucide:file-up" data-width="32"></span>
<span className="text-sm text-slate-400">Processing A2.01 - Floor Plan...</span>
</div>

<div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 mt-20 z-20 animate-pulse">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2">
<span className="iconify text-blue-600" data-icon="lucide:cpu" data-width="18"></span>
<span className="text-sm font-medium text-slate-700">Detecting Trades &amp; Materials</span>
</div>
<span className="text-xs font-mono text-slate-400">84%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full mb-4 overflow-hidden">
<div className="h-full bg-blue-600 w-[84%] rounded-full"></div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-slate-500">Framing</span>
<span className="text-green-600 font-medium">Complete</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-500">Drywall</span>
<span className="text-green-600 font-medium">Complete</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-500">Electrical Fixtures</span>
<span className="text-blue-600 font-medium">Analyzing...</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mt-2">
<div className="bg-white p-3 border border-slate-200 rounded shadow-sm">
<span className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">Total SqFt</span>
<span className="block text-lg font-semibold text-slate-900">12,450</span>
</div>
<div className="bg-white p-3 border border-slate-200 rounded shadow-sm">
<span className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">Est. Cost</span>
<span className="block text-lg font-semibold text-slate-900">$2.4M</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-8">Trusted by GC and preconstruction teams across the U.S.</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">

<h3 className="text-xl font-bold text-slate-800 tracking-tighter">APEX<span className="font-light">BUILD</span></h3>
<h3 className="text-xl font-bold text-slate-800 tracking-tight flex items-center gap-1"><span className="w-4 h-4 bg-slate-800 rounded-sm"></span>STRUKTURE</h3>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight">VANTAGE <span className="italic font-light">CONSTRUCTION</span></h3>
<h3 className="text-xl font-black text-slate-800 tracking-tight">IRONCLAD</h3>
<h3 className="text-xl font-bold text-slate-800 tracking-tight">NEXUS<span className="text-slate-400">GC</span></h3>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 shadow-sm">
<span className="iconify text-slate-500" data-icon="lucide:clock" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">60–100 Hours Per Estimate</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Manual takeoffs, spreadsheet wrangling, and endless plan reading consume your team's most valuable hours.
                    </p>
</div>

<div className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 shadow-sm">
<span className="iconify text-slate-500" data-icon="lucide:alert-triangle" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Missed Scope = Lost Margin</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Human error is inevitable. A single missed detail in the specs or plans can wipe out profit margins instantly.
                    </p>
</div>

<div className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 shadow-sm">
<span className="iconify text-slate-500" data-icon="lucide:users" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Precon Teams Are Stretched</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        With bid volumes increasing and fewer qualified estimators available, teams are burning out just to keep up.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="product">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Complete Estimating Automation</h2>
<p className="text-slate-400 text-lg max-w-2xl">Everything you need to go from plans to a comprehensive bid package.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition-all hover:-translate-y-1 group">
<span className="iconify text-blue-400 mb-4 group-hover:text-blue-300" data-icon="lucide:scan-search" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-2">Reads Plans &amp; Specs</h3>
<p className="text-sm text-slate-400">Ingests PDFs, CAD files, and specs to understand the full project context.</p>
</div>

<div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition-all hover:-translate-y-1 group">
<span className="iconify text-blue-400 mb-4 group-hover:text-blue-300" data-icon="lucide:layers" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-2">Material &amp; Labor Takeoffs</h3>
<p className="text-sm text-slate-400">AI automatically counts, measures, and categorizes every element on every sheet.</p>
</div>

<div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition-all hover:-translate-y-1 group">
<span className="iconify text-blue-400 mb-4 group-hover:text-blue-300" data-icon="lucide:calculator" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-2">Baseline Estimates</h3>
<p className="text-sm text-slate-400">Generates cost estimates based on regional pricing data and historicals.</p>
</div>

<div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition-all hover:-translate-y-1 group">
<span className="iconify text-blue-400 mb-4 group-hover:text-blue-300" data-icon="lucide:sliders-horizontal" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-2">Margin Controls</h3>
<p className="text-sm text-slate-400">Fine-tune overhead, profit, and contingency with granular adjustment sliders.</p>
</div>

<div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition-all hover:-translate-y-1 group">
<span className="iconify text-blue-400 mb-4 group-hover:text-blue-300" data-icon="lucide:file-text" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-2">Scopes &amp; Sub Spreadsheets</h3>
<p className="text-sm text-slate-400">Auto-writes detailed scopes of work and prepares leveling sheets for subs.</p>
</div>

<div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition-all hover:-translate-y-1 group">
<span className="iconify text-blue-400 mb-4 group-hover:text-blue-300" data-icon="lucide:search" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-2">Project Manual Extraction</h3>
<p className="text-sm text-slate-400">Finds hidden requirements buried deep within hundreds of pages of specs.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="output">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">See the Output</h2>
<p className="text-slate-600">Real enterprise-grade documentation generated in minutes.</p>
</div>

<div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">

<div className="flex border-b border-slate-200">
<button className="flex-1 py-4 text-sm font-medium text-blue-600 border-b-2 border-blue-600 bg-blue-50/50 transition-colors" id="tab-plan" onclick="switchTab('plan')">Plan Intelligence</button>
<button className="flex-1 py-4 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors" id="tab-est" onclick="switchTab('est')">Estimate Generation</button>
<button className="flex-1 py-4 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors" id="tab-scope" onclick="switchTab('scope')">Scopes &amp; SOVs</button>
</div>

<div className="tab-content active p-0 h-[500px] flex flex-col md:flex-row" id="content-plan">

<div className="flex-grow bg-[#1e293b] relative overflow-hidden p-8 flex items-center justify-center">
<div className="border border-white/20 w-full h-full relative">

<div className="absolute top-10 left-10 right-10 bottom-10 border border-white/30"></div>
<div className="absolute top-1/4 left-10 right-10 h-0.5 bg-white/30"></div>
<div className="absolute top-10 bottom-10 left-1/3 w-0.5 bg-white/30"></div>

<div className="absolute top-12 left-12 w-24 h-24 bg-blue-500/30 border border-blue-400"></div>
<div className="absolute bottom-12 right-12 w-32 h-16 bg-green-500/30 border border-green-400"></div>
</div>
<div className="absolute top-4 left-4 bg-slate-900/80 text-white text-xs px-2 py-1 rounded backdrop-blur">
                            Sheet A2.1 - Reflected Ceiling Plan
                        </div>
</div>

<div className="w-full md:w-80 bg-white border-l border-slate-200 p-6 flex flex-col">
<h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Detected Items</h4>
<div className="space-y-3 overflow-y-auto">
<div className="flex justify-between items-center text-sm p-2 bg-slate-50 rounded border border-slate-100">
<span className="text-slate-700">2x4 LED Troffer</span>
<span className="font-mono font-medium text-blue-600">142</span>
</div>
<div className="flex justify-between items-center text-sm p-2 bg-slate-50 rounded border border-slate-100">
<span className="text-slate-700">Recessed Can 6"</span>
<span className="font-mono font-medium text-blue-600">85</span>
</div>
<div className="flex justify-between items-center text-sm p-2 bg-slate-50 rounded border border-slate-100">
<span className="text-slate-700">Exit Sign</span>
<span className="font-mono font-medium text-blue-600">12</span>
</div>
<div className="flex justify-between items-center text-sm p-2 bg-slate-50 rounded border border-slate-100">
<span className="text-slate-700">Occupancy Sensor</span>
<span className="font-mono font-medium text-blue-600">34</span>
</div>
</div>
</div>
</div>

<div className="tab-content p-8 h-[500px] bg-white overflow-hidden flex flex-col" id="content-est">
<div className="flex justify-between items-end mb-6">
<div>
<h3 className="text-lg font-semibold text-slate-900">Project Estimate: Office Fit-out</h3>
<p className="text-xs text-slate-500">Last updated: Just now by AI</p>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<span className="block text-xs text-slate-500">Margin</span>
<span className="block text-sm font-bold text-slate-900">12%</span>
</div>

<div className="w-32">
<input max="25" min="5" type="range" value="12"/>
</div>
</div>
</div>
<div className="border border-slate-200 rounded-lg overflow-hidden flex-grow">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="p-4 font-medium text-slate-600">Division</th>
<th className="p-4 font-medium text-slate-600">Description</th>
<th className="p-4 font-medium text-slate-600 text-right">Material</th>
<th className="p-4 font-medium text-slate-600 text-right">Labor</th>
<th className="p-4 font-medium text-slate-600 text-right">Total</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="p-4 text-slate-500">Div 09</td>
<td className="p-4 text-slate-900 font-medium">Gypsum Board Assemblies</td>
<td className="p-4 text-slate-600 text-right">$42,500</td>
<td className="p-4 text-slate-600 text-right">$58,200</td>
<td className="p-4 text-slate-900 font-semibold text-right">$100,700</td>
</tr>
<tr>
<td className="p-4 text-slate-500">Div 09</td>
<td className="p-4 text-slate-900 font-medium">Acoustical Ceilings</td>
<td className="p-4 text-slate-600 text-right">$21,300</td>
<td className="p-4 text-slate-600 text-right">$18,400</td>
<td className="p-4 text-slate-900 font-semibold text-right">$39,700</td>
</tr>
<tr>
<td className="p-4 text-slate-500">Div 26</td>
<td className="p-4 text-slate-900 font-medium">Electrical Lighting</td>
<td className="p-4 text-slate-600 text-right">$85,100</td>
<td className="p-4 text-slate-600 text-right">$92,000</td>
<td className="p-4 text-slate-900 font-semibold text-right">$177,100</td>
</tr>
</tbody>
<tfoot className="bg-slate-50 font-semibold">
<tr>
<td className="p-4 text-right text-slate-900" colspan="4">Subtotal</td>
<td className="p-4 text-right text-slate-900">$317,500</td>
</tr>
</tfoot>
</table>
</div>
</div>

<div className="tab-content p-8 h-[500px] bg-slate-50 overflow-y-auto" id="content-scope">
<div className="bg-white border border-slate-200 shadow-sm p-8 max-w-3xl mx-auto min-h-[600px]">
<div className="border-b-2 border-slate-900 pb-4 mb-6 flex justify-between items-end">
<h2 className="text-2xl font-bold tracking-tight text-slate-900">SCOPE OF WORK</h2>
<span className="text-sm font-mono text-slate-500">DOC-ID: 2390-SOW-09</span>
</div>
<div className="mb-6">
<h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">09 20 00 - Gypsum Board</h3>
<p className="text-sm text-slate-600 mb-4">
                                This scope includes all labor, material, equipment, and supervision required to complete the metal stud framing and drywall work as shown on drawings A2.01 through A2.05.
                            </p>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold uppercase text-slate-400">Inclusions</h4>
<ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
<li>Supply and install 3-5/8" and 6" metal studs @ 16" OC.</li>
<li>Install 5/8" Type X Gypsum Board to both sides.</li>
<li>Level 4 finish in all exposed areas; Level 5 in lobby.</li>
<li>Fire caulking at all penetrations.</li>
<li>Disposal of all waste material.</li>
</ul>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 flex justify-between items-center">
<div className="text-xs text-slate-400">Generated by BuildBrain AI</div>
<div className="h-8 w-24 bg-slate-100 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3">Workflow Automation</h2>
<p className="text-slate-500 font-medium">All in under 10 minutes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="relative pl-8 border-l border-dashed border-slate-200 pb-8 last:pb-0">
<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold border-4 border-white">1</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Upload Plans</h3>
<p className="text-sm text-slate-600">Drag and drop your PDF set.</p>
</div>

<div className="relative pl-8 border-l border-dashed border-slate-200 pb-8 last:pb-0">
<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold border-4 border-white">2</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">AI Reads Sheets &amp; Specs</h3>
<p className="text-sm text-slate-600">OCR and Computer Vision analysis.</p>
</div>

<div className="relative pl-8 border-l border-dashed border-slate-200 pb-8 last:pb-0">
<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold border-4 border-white">3</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Material + Labor Takeoff</h3>
<p className="text-sm text-slate-600">Every stud and wire counted.</p>
</div>

<div className="relative pl-8 border-l border-dashed border-slate-200 pb-8 last:pb-0">
<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold border-4 border-white">4</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Baseline Estimate Build</h3>
<p className="text-sm text-slate-600">Cost codes applied automatically.</p>
</div>

<div className="relative pl-8 border-l border-dashed border-slate-200 pb-8 last:pb-0">
<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold border-4 border-white">5</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Scopes &amp; SOV</h3>
<p className="text-sm text-slate-600">Documents generated for subs.</p>
</div>

<div className="relative pl-8 border-l border-dashed border-slate-200 pb-8 last:pb-0">
<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold border-4 border-white">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Bid Package Ready</h3>
<p className="text-sm text-slate-600">Review, adjust, and send.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl border border-slate-200">

<div className="bg-white p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="iconify" data-icon="lucide:x-circle" data-width="120"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-6">Traditional Process</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-500">
<span className="iconify text-red-500 flex-shrink-0" data-icon="lucide:x" data-width="20"></span>
<span>Slow (Weeks per project)</span>
</li>
<li className="flex items-center gap-3 text-slate-500">
<span className="iconify text-red-500 flex-shrink-0" data-icon="lucide:x" data-width="20"></span>
<span>Manual Data Entry</span>
</li>
<li className="flex items-center gap-3 text-slate-500">
<span className="iconify text-red-500 flex-shrink-0" data-icon="lucide:x" data-width="20"></span>
<span>Error-prone &amp; Risky</span>
</li>
<li className="flex items-center gap-3 text-slate-500">
<span className="iconify text-red-500 flex-shrink-0" data-icon="lucide:x" data-width="20"></span>
<span>Missed Trades</span>
</li>
<li className="flex items-center gap-3 text-slate-500">
<span className="iconify text-red-500 flex-shrink-0" data-icon="lucide:x" data-width="20"></span>
<span>Lost Margin</span>
</li>
</ul>
</div>

<div className="bg-slate-900 p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="iconify text-blue-500" data-icon="lucide:check-circle" data-width="120"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-6">BuildBrain</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<span className="iconify text-blue-400 flex-shrink-0" data-icon="lucide:check" data-width="20"></span>
<span>AI-Generated (Minutes)</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<span className="iconify text-blue-400 flex-shrink-0" data-icon="lucide:check" data-width="20"></span>
<span>Fast &amp; Automated</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<span className="iconify text-blue-400 flex-shrink-0" data-icon="lucide:check" data-width="20"></span>
<span>Accurate &amp; Verified</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<span className="iconify text-blue-400 flex-shrink-0" data-icon="lucide:check" data-width="20"></span>
<span>Comprehensive Coverage</span>
</li>
<li className="flex items-center gap-3 text-white font-medium">
<span className="iconify text-blue-400 flex-shrink-0" data-icon="lucide:check" data-width="20"></span>
<span>Protects Margin</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
<div>
<div className="text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 mb-2">90%</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Time Reduction</div>
</div>
<div>
<div className="text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 mb-2">4-6<span className="text-4xl">x</span></div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Bid Volume</div>
</div>
<div>
<div className="text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 mb-2">3%</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Margin Capture</div>
</div>
<div>
<div className="text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 mb-2">$1M+</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Loss Prevention</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
<div className="p-8 border-b border-slate-100 text-center">
<h3 className="text-xl font-semibold text-slate-900 mb-2">BuildBrain Standard</h3>
<div className="flex items-baseline justify-center gap-1 mb-2">
<span className="text-4xl font-bold text-slate-900 tracking-tight">$2,000</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="text-sm text-slate-500">For mid-to-large General Contractors</p>
</div>
<div className="p-8 bg-slate-50/50">
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="18"></span>
                            Unlimited Estimates &amp; Takeoffs
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="18"></span>
                            AI Plan &amp; Spec Reading
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="18"></span>
                            Auto-Generated Scopes of Work
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="18"></span>
                            Subcontractor Spreadsheets (SOV)
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="18"></span>
                            Manual Extraction
                        </li>
</ul>
<button className="w-full bg-slate-900 text-white font-medium py-3 rounded hover:bg-slate-800 transition-colors">
                        Start Free Trial
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                Ready to eliminate estimating bottlenecks?
            </h2>
<div className="flex justify-center">
<button className="bg-blue-600 text-white text-lg font-medium px-8 py-4 rounded hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                    Book a 20-Minute Demo
                </button>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:box" data-width="14"></span>
</div>
<span className="text-white font-semibold tracking-tight">BuildBrain</span>
</div>
<div className="flex gap-8 text-sm">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-xs text-slate-600">
                © 2024 BuildBrain AI. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
