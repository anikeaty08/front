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
      

<div className="max-w-[1440px] mx-auto bg-white shadow-2xl overflow-hidden relative">

<header className="relative pt-32 pb-24 px-8 md:px-20 overflow-hidden">

<div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-cyan-50/50 blur-3xl z-0"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-3xl z-0"></div>
<div className="relative z-10 max-w-5xl">
<div className="flex items-center gap-4 mb-6">
<span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-500 rounded-full border border-slate-200">UI/UX Case Study</span>
<span className="text-xs font-medium text-slate-400">Rishi Sagade | md24MDES14010</span>
</div>
<h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                    Designing a <span className="gradient-text">Proactive AI-Driven</span><br/> Customer Care Application
                </h1>
<p className="text-xl md:text-2xl font-light text-slate-500 max-w-3xl leading-relaxed mb-12">
                    Enabling early intervention, clear context, and confident decision-making for retention teams to transform churn management.
                </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-slate-100">
<div>
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Role</h3>
<p className="font-medium text-slate-800">UX Research &amp; Design</p>
</div>
<div>
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Duration</h3>
<p className="font-medium text-slate-800">3 Days Sprint</p>
</div>
<div>
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Focus</h3>
<p className="font-medium text-slate-800">Enterprise • AI • Data Viz</p>
</div>
<div>
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Outcome</h3>
<p className="font-medium text-slate-800">Unified Retention Platform</p>
</div>
</div>
</div>
</header>

<section className="px-8 md:px-20 py-20 bg-slate-50/50">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<h2 className="text-3xl font-bold text-slate-900 mb-2">Project Overview</h2>
<div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
<div className="absolute top-0 left-0 w-1 h-full bg-rose-400"></div>
<div className="mb-6 w-12 h-12 rounded-lg bg-rose-50 flex items-center justify-center text-rose-500">
<iconify-icon height="24" icon="solar:danger-triangle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3">The Challenge</h3>
<p className="text-sm leading-relaxed text-slate-600">
                            Streaming platforms face accelerating churn rates (5.5% monthly). Customer success teams are overwhelmed, understaffed, and rely on reactive systems that flag problems only after subscribers have decided to leave.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
<div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
<div className="mb-6 w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
<iconify-icon height="24" icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3">The Solution</h3>
<p className="text-sm leading-relaxed text-slate-600">
                            A Retention Command Center—an AI-driven application that proactively identifies negative experiences. It provides explainable insights and guided interventions to empower teams to prevent problems rather than react.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-400"></div>
<div className="mb-6 w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500">
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3">The Goal</h3>
<p className="text-sm leading-relaxed text-slate-600">
                            Transform customer success from firefighting into a strategic function. Build trust, reduce burnout, and measurably improve retention through transparent, human-centered AI.
                        </p>
</div>
</div>
</div>
</section>

<section className="px-8 md:px-20 py-20 border-t border-slate-200">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
<div>
<h2 className="text-3xl font-bold text-slate-900 mb-2">Design Process</h2>
<div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
</div>
<p className="mt-4 md:mt-0 text-sm text-slate-500 max-w-md text-right">Methodology following the Double Diamond approach</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -z-10 transform -translate-y-1/2"></div>

<div className="bg-white p-6 rounded-xl border border-slate-200 text-center relative">
<div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold mx-auto mb-4 border-4 border-white">1</div>
<h4 className="font-bold text-slate-900 mb-1">Discover</h4>
<p className="text-xs text-slate-500">Research &amp; Ecosystem</p>
<ul className="text-[10px] text-slate-400 mt-3 text-left space-y-1 pl-4 list-disc">
<li>Gather Statistics</li>
<li>Current Mechanisms</li>
<li>Competitive Analysis</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 text-center relative">
<div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold mx-auto mb-4 border-4 border-white">2</div>
<h4 className="font-bold text-slate-900 mb-1">Define</h4>
<p className="text-xs text-slate-500">Synthesize &amp; Cluster</p>
<ul className="text-[10px] text-slate-400 mt-3 text-left space-y-1 pl-4 list-disc">
<li>Personas &amp; Journeys</li>
<li>Feature Clusters</li>
<li>Value Matrix</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 text-center relative">
<div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold mx-auto mb-4 border-4 border-white">3</div>
<h4 className="font-bold text-slate-900 mb-1">Ideate</h4>
<p className="text-xs text-slate-500">Structure &amp; Flows</p>
<ul className="text-[10px] text-slate-400 mt-3 text-left space-y-1 pl-4 list-disc">
<li>Information Architecture</li>
<li>Mid-Fi Wireframes</li>
<li>Logical Hierarchy</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 text-center relative">
<div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold mx-auto mb-4 border-4 border-white">4</div>
<h4 className="font-bold text-slate-900 mb-1">Design</h4>
<p className="text-xs text-slate-500">Visual &amp; Interaction</p>
<ul className="text-[10px] text-slate-400 mt-3 text-left space-y-1 pl-4 list-disc">
<li>Key Screen Designs</li>
<li>Interaction Flows</li>
<li>Design Rationale</li>
</ul>
</div>
</div>
</div>
</section>

<section className="px-8 md:px-20 py-20 bg-slate-900 text-white">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<h2 className="text-3xl font-bold mb-2">Competitive Gap Analysis</h2>
<div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
<p className="mt-4 text-slate-400 max-w-2xl">Analyzing market leaders to identify the strategic opportunity for a proactive intervention system.</p>
</div>
<div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-800/50">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-800 text-slate-300 text-xs uppercase tracking-wider border-b border-slate-700">
<th className="p-6 font-medium w-1/5">Criteria</th>
<th className="p-6 font-medium w-1/5 opacity-60">Gainsight</th>
<th className="p-6 font-medium w-1/5 opacity-60">ChurnZero</th>
<th className="p-6 font-medium w-1/5 opacity-60">Totango</th>
<th className="p-6 font-bold w-1/5 text-cyan-400 bg-cyan-900/20 border-l border-cyan-900/50">Gap/Opportunity</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="border-b border-slate-700 hover:bg-slate-800 transition-colors">
<td className="p-6 font-semibold text-slate-200">Churn Risk Scoring</td>
<td className="p-6 text-slate-400">ML-powered health scores</td>
<td className="p-6 text-slate-400">Real-time health monitoring (9.2/10)</td>
<td className="p-6 text-slate-400">Product adoption-focused scoring</td>
<td className="p-6 text-white bg-cyan-900/10 border-l border-cyan-900/50 font-medium">Standard across all platforms (Baseline)</td>
</tr>

<tr className="border-b border-slate-700 hover:bg-slate-800 transition-colors">
<td className="p-6 font-semibold text-slate-200">Predictive Analytics</td>
<td className="p-6 text-slate-400">Yes, renewal likelihood</td>
<td className="p-6 text-slate-400">Yes, 14-day trend analysis</td>
<td className="p-6 text-slate-400">Yes, with segmentation</td>
<td className="p-6 text-white bg-cyan-900/10 border-l border-cyan-900/50 font-medium">Often arrives too late. Opportunity: Automated ROI.</td>
</tr>

<tr className="border-b border-slate-700 hover:bg-slate-800 transition-colors">
<td className="p-6 font-semibold text-slate-200">AI Explainability</td>
<td className="p-6 text-slate-400">Limited "why" explanations</td>
<td className="p-6 text-slate-400">Limited</td>
<td className="p-6 text-slate-400">Minimal transparency</td>
<td className="p-6 text-cyan-300 bg-cyan-900/20 border-l border-cyan-900/50 font-bold tracking-tight">MAJOR OPPORTUNITY: Explainable “why &amp; how confident” AI</td>
</tr>

<tr className="border-b border-slate-700 hover:bg-slate-800 transition-colors">
<td className="p-6 font-semibold text-slate-200">Action Guidance</td>
<td className="p-6 text-slate-400">Reactive Systems</td>
<td className="p-6 text-slate-400">No Action Guidance</td>
<td className="p-6 text-slate-400">Inconsistent responses</td>
<td className="p-6 text-white bg-cyan-900/10 border-l border-cyan-900/50 font-medium">Unified issue-centric view with AI-recommended actions.</td>
</tr>

<tr className="hover:bg-slate-800 transition-colors">
<td className="p-6 font-semibold text-slate-200">Impact on Teams</td>
<td className="p-6 text-slate-400">Tool Complexity</td>
<td className="p-6 text-slate-400">Alert Fatigue</td>
<td className="p-6 text-slate-400">Burnout, missed critical issues</td>
<td className="p-6 text-white bg-cyan-900/10 border-l border-cyan-900/50 font-medium">Design for wellbeing &amp; load reduction.</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="px-8 md:px-20 py-20 bg-slate-50">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<h2 className="text-3xl font-bold text-slate-900 mb-2">User Personas</h2>
<div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
<p className="mt-4 text-slate-500">Understanding the ecosystem of internal stakeholders.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col h-full hover:border-cyan-200 transition-colors">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-blue-600 text-xl font-bold">AK</div>
<div>
<h3 className="font-bold text-slate-900">Alex Kim</h3>
<p className="text-xs text-slate-500 uppercase tracking-wide">Customer Success Specialist</p>
</div>
</div>
<div className="space-y-4 text-sm flex-1">
<div className="p-3 bg-slate-50 rounded-lg">
<p className="font-semibold text-slate-700 mb-1">Frustration</p>
<p className="text-slate-500">Feels reactive and powerless. No clear prioritization. Emotional toll of constant "failures".</p>
</div>
<div className="p-3 bg-slate-50 rounded-lg">
<p className="font-semibold text-slate-700 mb-1">Goal</p>
<p className="text-slate-500">Handle at-risk accounts efficiently. Build genuine relationships, not just "save" them.</p>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100 italic text-xs text-slate-400 text-center">
                            "I want to reach out early with meaningful help, not scramble."
                        </div>
</div>

<div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col h-full hover:border-cyan-200 transition-colors">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-600 text-xl font-bold">SC</div>
<div>
<h3 className="font-bold text-slate-900">Sarah Chen</h3>
<p className="text-xs text-slate-500 uppercase tracking-wide">Retention Marketing Manager</p>
</div>
</div>
<div className="space-y-4 text-sm flex-1">
<div className="p-3 bg-slate-50 rounded-lg">
<p className="font-semibold text-slate-700 mb-1">Frustration</p>
<p className="text-slate-500">Too late to act. No visibility of impact. Can’t measure prevented churn to prove ROI.</p>
</div>
<div className="p-3 bg-slate-50 rounded-lg">
<p className="font-semibold text-slate-700 mb-1">Goal</p>
<p className="text-slate-500">Reduce churn rate from 5.8% to 4.2%. Demonstrate ROI to executive team.</p>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100 italic text-xs text-slate-400 text-center">
                            "Loyal customers matter, but today churn is analyzed too late."
                        </div>
</div>

<div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col h-full hover:border-cyan-200 transition-colors">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-emerald-600 text-xl font-bold">PM</div>
<div>
<h3 className="font-bold text-slate-900">Dr. Priya Malhotra</h3>
<p className="text-xs text-slate-500 uppercase tracking-wide">Data Analyst</p>
</div>
</div>
<div className="space-y-4 text-sm flex-1">
<div className="p-3 bg-slate-50 rounded-lg">
<p className="font-semibold text-slate-700 mb-1">Frustration</p>
<p className="text-slate-500">Insights go unused. Lack of explainability in models. No impact visibility.</p>
</div>
<div className="p-3 bg-slate-50 rounded-lg">
<p className="font-semibold text-slate-700 mb-1">Goal</p>
<p className="text-slate-500">Make predictions accessible for non-technical teams. Improve model accuracy to 93%+.</p>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100 italic text-xs text-slate-400 text-center">
                            "It means nothing if insights don’t reach people who can act."
                        </div>
</div>
</div>
</div>
</section>

<section className="px-8 md:px-20 py-20 bg-white border-t border-slate-200">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<h2 className="text-3xl font-bold text-slate-900 mb-2">Key Research Findings</h2>
<div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 border border-slate-100 rounded-xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-rose-500" height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<h3 className="font-bold text-slate-800">Detected Too Late</h3>
</div>
<p className="text-xs text-slate-500 mb-3"><strong>Root Cause:</strong> Reactive data pipelines.</p>
<p className="text-sm text-slate-600">Negative experiences form over weeks, but tools surface problems only after frustration peaks or churn occurs. Missed intervention windows.</p>
</div>

<div className="p-6 border border-slate-100 rounded-xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-amber-500" height="24" icon="solar:graph-down-linear" width="24"></iconify-icon>
<h3 className="font-bold text-slate-800">Signals ≠ Meaning</h3>
</div>
<p className="text-xs text-slate-500 mb-3"><strong>Root Cause:</strong> Visualization without insight.</p>
<p className="text-sm text-slate-600">Tons of metrics and raw data points, but no clear narrative about what's actually wrong. Leads to analysis paralysis.</p>
</div>

<div className="p-6 border border-slate-100 rounded-xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-orange-500" height="24" icon="solar:shield-warning-linear" width="24"></iconify-icon>
<h3 className="font-bold text-slate-800">AI is Not Trusted</h3>
</div>
<p className="text-xs text-slate-500 mb-3"><strong>Root Cause:</strong> Accuracy over explainability.</p>
<p className="text-sm text-slate-600">Predictions lack reasoning. Teams ignore AI recommendations because they can't justify decisions to managers or customers.</p>
</div>

<div className="p-6 border border-slate-100 rounded-xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-blue-500" height="24" icon="solar:round-transfer-horizontal-linear" width="24"></iconify-icon>
<h3 className="font-bold text-slate-800">Knowing ≠ Doing</h3>
</div>
<p className="text-xs text-slate-500 mb-3"><strong>Root Cause:</strong> Disconnected tools.</p>
<p className="text-sm text-slate-600">Systems identify risk but provide zero guidance on action. Agents improvise strategies, leading to inconsistent results.</p>
</div>

<div className="p-6 border border-slate-100 rounded-xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-purple-500" height="24" icon="solar:battery-charge-minimalistic-linear" width="24"></iconify-icon>
<h3 className="font-bold text-slate-800">Team Overload</h3>
</div>
<p className="text-xs text-slate-500 mb-3"><strong>Root Cause:</strong> Ignored cognitive load.</p>
<p className="text-sm text-slate-600">Alert fatigue, manual workflows, and compassion fatigue. 50% of CS teams considering quitting due to burnout.</p>
</div>

<div className="p-6 border border-slate-100 rounded-xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-rose-500" height="24" icon="solar:heart-broken-linear" width="24"></iconify-icon>
<h3 className="font-bold text-slate-800">Damaged Trust</h3>
</div>
<p className="text-xs text-slate-500 mb-3"><strong>Root Cause:</strong> "Saving" at all costs.</p>
<p className="text-sm text-slate-600">Wrong messages at wrong times feel manipulative. Generic "please don't go" emails accelerate churn.</p>
</div>
</div>
</div>
</section>

<section className="px-8 md:px-20 py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-6">The Opportunity</h2>
<h3 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                    How might we shift the team’s mindset from <span className="text-rose-400 line-through decoration-2 decoration-rose-500/50">reacting to churn</span> toward <span className="text-cyan-400">proactively helping customers?</span>
</h3>
<div className="grid md:grid-cols-2 gap-8 mt-16 text-left">
<div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
<h4 className="font-bold text-lg mb-2">Automate &amp; Simplify</h4>
<p className="text-slate-300 text-sm">Reduce manual reporting steps and integrate analytics directly into the daily workflow.</p>
</div>
<div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
<h4 className="font-bold text-lg mb-2">Visualize Micro-Wins</h4>
<p className="text-slate-300 text-sm">Make small successes visible to combat burnout and build team confidence.</p>
</div>
</div>
</div>
</section>
</div>

    </>
  );
}
