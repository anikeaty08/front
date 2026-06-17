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
      

<aside className="w-64 border-r border-white/5 flex flex-col justify-between hidden md:flex shrink-0 bg-zinc-950">
<div>
<div className="h-14 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded flex items-center justify-center text-black font-semibold text-xs">O</div>
<span className="text-sm font-medium text-zinc-100 tracking-tight">Obens Strategy</span>
</div>
</div>
<div className="px-3 py-6 space-y-8 overflow-y-auto max-h-[calc(100vh-120px)]">

<div>
<h3 className="px-3 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Overview</h3>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-zinc-100 bg-white/5 rounded-md font-medium" href="#summary">
<i className="w-4 h-4 text-indigo-400" data-lucide="layout-dashboard"></i>
                            Executive Summary
                        </a>
</nav>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Architecture</h3>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-white/5 rounded-md transition-colors" href="#stack">
<i className="w-4 h-4" data-lucide="layers"></i>
                            The Tech Stack
                        </a>
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-white/5 rounded-md transition-colors" href="#enrichment">
<i className="w-4 h-4" data-lucide="database"></i>
                            Enrichment Flow
                        </a>
</nav>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Execution</h3>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-white/5 rounded-md transition-colors" href="#magnets">
<i className="w-4 h-4" data-lucide="magnet"></i>
                            Lead Magnets
                        </a>
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-white/5 rounded-md transition-colors" href="#pages">
<i className="w-4 h-4" data-lucide="monitor"></i>
                            Landing Pages
                        </a>
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-white/5 rounded-md transition-colors" href="#ghost">
<i className="w-4 h-4" data-lucide="ghost"></i>
                            Ghost Strategy
                        </a>
</nav>
</div>
</div>
</div>
<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-400 font-medium border border-white/10">JD</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">John Doe</span>
<span className="text-xs text-zinc-500">Head of Growth</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 h-full overflow-y-auto bg-zinc-950 scroll-smooth">

<header className="h-14 border-b border-white/5 flex items-center justify-between px-8 sticky top-0 bg-zinc-950/80 backdrop-blur-md z-20">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span>Strategy</span>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span className="text-zinc-200">V2.0 Master Plan</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20 font-medium">Status: Active</span>
</div>
</header>
<div className="max-w-5xl mx-auto px-8 py-12 space-y-20 pb-24">

<section id="summary">
<h1 className="text-3xl font-medium text-zinc-100 tracking-tight mb-2">Automated Acquisition Ecosystem</h1>
<p className="text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
                    A streamlined technical workflow leveraging Clay, HubSpot, and Instantly to filter noise and focus high-touch efforts on Tier 1 opportunities.
                </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

<div className="p-5 rounded-xl border border-white/5 bg-white/5 flex flex-col">
<span className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Target Efficiency</span>
<span className="text-2xl font-semibold text-zinc-100">95%</span>
<span className="text-xs text-zinc-500 mt-2">Reduction in manual research</span>
</div>

<div className="p-5 rounded-xl border border-white/5 bg-white/5 flex flex-col">
<span className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Pipeline Volume</span>
<span className="text-2xl font-semibold text-zinc-100">3x</span>
<span className="text-xs text-zinc-500 mt-2">Increase in qualified MQLs</span>
</div>

<div className="p-5 rounded-xl border border-white/5 bg-white/5 flex flex-col">
<span className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Stack Cost</span>
<span className="text-2xl font-semibold text-zinc-100">-$2k</span>
<span className="text-xs text-zinc-500 mt-2">Monthly tooling savings</span>
</div>
</div>
</section>
<hr className="border-white/5"/>

<section className="space-y-8" id="stack">
<div className="flex items-center gap-2 mb-6">
<span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
<h2 className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Architecture</h2>
</div>
<h3 className="text-xl font-medium text-zinc-100 tracking-tight">The Tech Stack</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="glass-panel p-4 rounded-lg border-l-2 border-l-violet-500">
<div className="flex justify-between items-start mb-2">
<span className="font-medium text-zinc-200 text-sm">Clay</span>
<i className="w-4 h-4 text-violet-500" data-lucide="database"></i>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">The "Brain". Handles data waterfalls, enrichment, and initial scoring.</p>
</div>

<div className="glass-panel p-4 rounded-lg border-l-2 border-l-orange-500">
<div className="flex justify-between items-start mb-2">
<span className="font-medium text-zinc-200 text-sm">HubSpot</span>
<i className="w-4 h-4 text-orange-500" data-lucide="box"></i>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">The CRM. Only Tier 1 leads enter here manually. Source of truth for revenue.</p>
</div>

<div className="glass-panel p-4 rounded-lg border-l-2 border-l-blue-500">
<div className="flex justify-between items-start mb-2">
<span className="font-medium text-zinc-200 text-sm">Instantly</span>
<i className="w-4 h-4 text-blue-500" data-lucide="send"></i>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">The Engine. High-volume cold sending for Tier 2 &amp; 3. Warm-up management.</p>
</div>
</div>

<div className="pt-8" id="enrichment">
<h3 className="text-xl font-medium text-zinc-100 tracking-tight mb-6">Data Waterfall Logic</h3>
<div className="relative bg-zinc-900/30 border border-zinc-800 rounded-xl p-8">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950 border border-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-500">
                            Flow Direction
                        </div>
<div className="flex flex-col md:flex-row items-stretch justify-between gap-4">

<div className="flex-1 p-4 bg-zinc-950 border border-zinc-800 rounded-lg flex flex-col gap-2">
<span className="text-xs font-mono text-zinc-500 uppercase">Input</span>
<div className="text-sm text-zinc-200 flex items-center gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="globe"></i> LinkedIn URL
                                </div>
</div>
<i className="w-5 h-5 text-zinc-700 self-center hidden md:block" data-lucide="arrow-right"></i>

<div className="flex-1 p-4 bg-zinc-950 border border-zinc-800 rounded-lg flex flex-col gap-2 relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl"></div>
<span className="text-xs font-mono text-emerald-500 uppercase">Enrich 1</span>
<div className="text-sm text-zinc-200">Find Work Email</div>
<span className="text-[10px] text-zinc-500">Waterfal Logic</span>
</div>
<i className="w-5 h-5 text-zinc-700 self-center hidden md:block" data-lucide="arrow-right"></i>

<div className="flex-1 p-4 bg-zinc-950 border border-zinc-800 rounded-lg flex flex-col gap-2 relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full blur-xl"></div>
<span className="text-xs font-mono text-blue-500 uppercase">Enrich 2</span>
<div className="text-sm text-zinc-200">Verify &amp; Keywords</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] text-zinc-500">Rev. on Crunchbase</span>
<div className="flex flex-wrap gap-1 mt-1">
<span className="text-[9px] bg-zinc-900 border border-zinc-800 px-1 rounded text-zinc-400">EU/USDA Organic</span>
<span className="text-[9px] bg-zinc-900 border border-zinc-800 px-1 rounded text-zinc-400">Fairtrade</span>
<span className="text-[9px] bg-zinc-900 border border-zinc-800 px-1 rounded text-zinc-400">B Corp</span>
<span className="text-[9px] bg-zinc-900 border border-zinc-800 px-1 rounded text-zinc-400">Rainforest</span>
</div>
</div>
</div>
<i className="w-5 h-5 text-zinc-700 self-center hidden md:block" data-lucide="arrow-right"></i>

<div className="flex-1 p-4 bg-zinc-950 border border-zinc-800 rounded-lg flex flex-col gap-2 border-l-4 border-l-indigo-500">
<span className="text-xs font-mono text-indigo-400 uppercase">Output</span>
<div className="text-sm text-zinc-200">Tier Assignment</div>
<span className="text-[10px] text-zinc-500">1 (Man), 2 (Auto), 3 (Nurture)</span>
</div>
</div>
</div>
</div>
</section>
<hr className="border-white/5"/>

<section className="space-y-8" id="magnets">
<div className="flex items-center gap-2 mb-6">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
<h2 className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Execution</h2>
</div>
<div className="flex justify-between items-end">
<h3 className="text-xl font-medium text-zinc-100 tracking-tight">Lead Magnet Strategy Matrix</h3>
</div>
<div className="overflow-hidden border border-zinc-800 rounded-lg">
<table className="w-full text-left text-sm">
<thead className="bg-zinc-900/50">
<tr>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider w-24">Tier</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Persona Criteria</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Pain Point</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">The "Hook"</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800 bg-zinc-950">

<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20">Tier 1</span>
</td>
<td className="px-6 py-4">
<div className="flex flex-col gap-1">
<span className="text-zinc-200 font-medium">Strategic Importer</span>
<span className="text-xs text-zinc-500">Rev &gt;$50M, Uses SAP</span>
</div>
</td>
<td className="px-6 py-4 text-zinc-400 text-xs leading-relaxed max-w-xs">"Risk of blocked containers due to missing paper trails."</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-zinc-200">
<i className="w-4 h-4 text-violet-400" data-lucide="file-warning"></i>
                                        Gap Analysis Report
                                    </div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">1:1 Audit</button>
</td>
</tr>

<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Tier 2</span>
</td>
<td className="px-6 py-4">
<div className="flex flex-col gap-1">
<span className="text-zinc-200 font-medium">Mid-Market Co-op</span>
<span className="text-xs text-zinc-500">Rev $5M-50M, Legacy Tech</span>
</div>
</td>
<td className="px-6 py-4 text-zinc-400 text-xs leading-relaxed max-w-xs">"My team spends 2 days/week scanning papers manually."</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-zinc-200">
<i className="w-4 h-4 text-blue-400" data-lucide="trending-up"></i>
                                        Traceability Blueprint
                                    </div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">Webinar</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="pt-8" id="pages">
<h3 className="text-xl font-medium text-zinc-100 tracking-tight mb-6">Landing Page Architecture</h3>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-200">Page A: Risk Audit</h3>
<span className="text-xs text-violet-400">Target: Tier 1</span>
</div>
<div className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-950 flex flex-col h-64 shadow-2xl relative">
<div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex items-center gap-2">
<div className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-rose-500/20"></div><div className="w-2 h-2 rounded-full bg-yellow-500/20"></div></div>
</div>
<div className="p-6 flex flex-col items-center text-center space-y-4">
<div className="h-4 w-32 bg-zinc-800 rounded"></div>
<div className="h-6 w-48 bg-zinc-700 rounded"></div>
<div className="w-full h-16 bg-rose-900/10 border border-rose-500/20 rounded flex items-center justify-center gap-2">
<i className="w-4 h-4 text-rose-500" data-lucide="alert-triangle"></i>
<span className="text-[10px] text-rose-400 font-mono">COMPLIANCE FAILURE</span>
</div>
<div className="h-6 w-24 bg-violet-600 rounded mt-2"></div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-200">Page B: e-COI Generator</h3>
<span className="text-xs text-blue-400">Target: Tier 2</span>
</div>
<div className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-950 flex flex-col h-64 shadow-2xl relative">
<div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex items-center gap-2">
<div className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-rose-500/20"></div><div className="w-2 h-2 rounded-full bg-yellow-500/20"></div></div>
</div>
<div className="p-6 flex flex-col items-center text-center space-y-4">
<div className="h-6 w-40 bg-zinc-700 rounded"></div>
<div className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-left space-y-2">
<div className="h-1.5 w-10 bg-zinc-700 rounded"></div>
<div className="h-6 w-full border border-zinc-700 border-dashed rounded flex items-center justify-center text-[8px] text-zinc-500">Upload Excel</div>
</div>
<div className="h-6 w-full bg-blue-600 rounded"></div>
</div>
</div>
</div>
</div>
</div>

<div className="pt-8" id="ghost">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-medium text-zinc-100 tracking-tight">Ghost Strategy (Non-Responders)</h3>
<span className="text-xs text-zinc-500 px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Automated Loop</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-800 rounded-lg overflow-hidden">

<div className="p-6 bg-zinc-950 border-b md:border-b-0 md:border-r border-zinc-800 relative">
<div className="absolute top-4 right-4 text-xs font-mono text-zinc-600">01</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<i className="w-4 h-4 text-zinc-400" data-lucide="user-x"></i>
</div>
<span className="text-sm font-medium text-zinc-200">Silence</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed mb-4">
                                Prospect does not reply to 4-step email sequence. Tagged as "Ghost" in HubSpot.
                            </p>
</div>

<div className="p-6 bg-zinc-950 border-b md:border-b-0 md:border-r border-zinc-800 relative bg-zinc-900/20">
<div className="absolute top-4 right-4 text-xs font-mono text-zinc-600">02</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-blue-400" data-lucide="linkedin"></i>
</div>
<span className="text-sm font-medium text-zinc-200">Soft Touch</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed mb-4">
                                Automatically added to LinkedIn Custom Audience. Founder account sends connection request (No Pitch).
                            </p>
<div className="flex gap-2">
<span className="px-1.5 py-0.5 rounded border border-blue-900/50 bg-blue-900/20 text-[10px] text-blue-400">Retargeting</span>
</div>
</div>

<div className="p-6 bg-zinc-950 relative">
<div className="absolute top-4 right-4 text-xs font-mono text-zinc-600">03</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-400" data-lucide="recycle"></i>
</div>
<span className="text-sm font-medium text-zinc-200">Re-Entry</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed mb-4">
                                After 45 days, if content engagement &gt; 2, move back to "Active - Tier 2" for new campaign.
                            </p>
</div>
</div>
</div>
</section>

<section className="space-y-8 pt-8 border-t border-white/5">
<h2 className="text-xl font-medium text-zinc-100 tracking-tight">Traffic-to-Cash Pipeline</h2>
<div className="relative border-l-2 border-zinc-800 ml-4 md:ml-10 space-y-12 pb-12">

<div className="relative pl-8 md:pl-12">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-indigo-500"></div>
<div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-100">Signal Detection</h3>
<span className="text-xs text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded">Triggers</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-3 bg-zinc-950 border border-zinc-800 rounded flex items-center gap-3">
<div className="p-1.5 bg-violet-500/10 rounded text-violet-400"><i className="w-4 h-4" data-lucide="briefcase"></i></div>
<div className="text-xs">
<div className="text-zinc-300">New Quality Mgr Hired</div>
<div className="text-zinc-500">Trigger: Campaign A</div>
</div>
</div>
<div className="p-3 bg-zinc-950 border border-zinc-800 rounded flex items-center gap-3">
<div className="p-1.5 bg-blue-500/10 rounded text-blue-400"><i className="w-4 h-4" data-lucide="ticket"></i></div>
<div className="text-xs">
<div className="text-zinc-300">Exhibition Participant</div>
<div className="text-zinc-500">Trigger: Campaign B</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-12">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-emerald-500"></div>
<div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-100">Engagement &amp; Filters</h3>
</div>
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-1 space-y-3">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wide flex items-center gap-2">
                                        Action Taken <i className="w-3 h-3 text-emerald-500" data-lucide="check"></i>
</div>
<div className="p-4 border border-emerald-500/20 bg-emerald-500/5 rounded-lg">
<div className="text-sm text-emerald-100 font-medium mb-1">MQL Qualified</div>
<p className="text-xs text-emerald-200/60">User downloads Magnet or books call.</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-12">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-blue-500"></div>
<div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-100">Opportunity Handover</h3>
</div>
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-1 space-y-3">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wide flex items-center gap-2">
                                        Sales Motion <i className="w-3 h-3 text-blue-500" data-lucide="users"></i>
</div>
<div className="p-4 border border-blue-500/20 bg-blue-500/5 rounded-lg">
<div className="flex items-center justify-between">
<div className="text-sm text-blue-100 font-medium mb-1">SQL Qualified</div>
<span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">HubSpot Deal</span>
</div>
<p className="text-xs text-blue-200/60">Demo attended or Discovery Call completed successfully.</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-12">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-violet-500"></div>
<div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-100">Revenue Realization</h3>
<span className="text-xs text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded">Final Stage</span>
</div>
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-1 space-y-3">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wide flex items-center gap-2">
                                        Closed Won <i className="w-3 h-3 text-violet-500" data-lucide="crown"></i>
</div>
<div className="p-4 border border-violet-500/20 bg-violet-500/5 rounded-lg flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-white" data-lucide="gem"></i>
</div>
<div>
<div className="text-sm text-violet-100 font-medium mb-1">Active Client</div>
<p className="text-xs text-violet-200/60">Contract signed. Onboarding initialized via automated kickoff.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
