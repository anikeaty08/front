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
      

<section className="min-h-screen flex flex-col justify-center p-8 md:p-16 bg-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
<svg fill="none" viewbox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<circle cx="200" cy="200" r="150" stroke="#005073" strokeWidth="1"></circle>
<circle cx="200" cy="200" r="100" stroke="#00bceb" strokeWidth="1"></circle>
<circle cx="200" cy="200" r="50" stroke="#005073" strokeWidth="1"></circle>
</svg>
</div>
<div className="max-w-6xl mx-auto w-full z-10">
<div className="mb-8 flex items-center gap-2 text-slate-500 font-medium tracking-wide text-xs uppercase">
<span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                Rishi Sagade | md24MDES14010
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-tight">
                Designing a Proactive <br/>
<span className="tech-text-gradient font-semibold">AI-Driven Customer Care</span> <br/>
                Application
            </h1>
<p className="text-xl md:text-2xl font-light text-slate-600 max-w-3xl mb-16 leading-relaxed">
                Enabling Early Intervention, Clear Context, and Confident Decision-Making for Retention Teams.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-8">
<div>
<h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Role</h3>
<p className="text-sm font-medium text-slate-800">UX Research &amp; Design</p>
</div>
<div>
<h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Duration</h3>
<p className="text-sm font-medium text-slate-800">3 Days</p>
</div>
<div>
<h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Focus</h3>
<p className="text-sm font-medium text-slate-800">Entertainment • Insights</p>
</div>
<div>
<h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Outcome</h3>
<p className="text-sm font-medium text-slate-800">Unified Customer Care Platform</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-16 bg-slate-50">
<div className="max-w-6xl mx-auto">
<h2 className="text-sm font-bold tracking-widest text-cyan-600 mb-12 uppercase">01 / Project Overview</h2>
<div className="grid md:grid-cols-2 gap-12 lg:gap-24">
<div className="space-y-8">
<div>
<h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:danger-circle-linear"></iconify-icon>
                            The Challenge
                        </h3>
<p className="text-slate-600 leading-relaxed text-sm">
                            Streaming platforms face accelerating churn rates (5.5% monthly, up from 2% in 2019), costing millions in lost revenue. Customer success teams are overwhelmed, understaffed, and rely on reactive systems that flag problems only after subscribers have already decided to leave.
                        </p>
</div>
<div>
<h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:lightbulb-linear"></iconify-icon>
                            The Solution
                        </h3>
<p className="text-slate-600 leading-relaxed text-sm">
                            Design a Retention Command Center—an AI-driven application that proactively identifies negative customer experiences before they escalate into churn, providing explainable insights and guided interventions that empower customer issue management teams to prevent problems rather than react to them.
                        </p>
</div>
</div>
<div className="space-y-8">
<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 h-full">
<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="solar:target-linear"></iconify-icon>
                            Goal
                        </h3>
<p className="text-slate-600 leading-relaxed text-sm mb-6">
                            Transform customer success from a firefighting operation into a strategic, proactive function that builds trust, reduces team burnout, and measurably improves retention through transparent, human-centered AI.
                        </p>
<div className="pt-6 border-t border-slate-100">
<h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">Impact Area</h4>
<p className="text-slate-700 text-sm">
                                Subscription streaming platforms with focus on internal teams (Customer Success Managers, Retention Specialists, Data Analysts).
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-16 bg-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-sm font-bold tracking-widest text-cyan-600 mb-16 uppercase">02 / Design Process</h2>
<div className="relative grid md:grid-cols-4 gap-4">

<div className="absolute top-4 left-0 w-full h-0.5 bg-slate-100 -z-10 hidden md:block"></div>

<div className="bg-white pt-8 group">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs mb-6 relative z-10 group-hover:scale-110 transition-transform">1</div>
<h3 className="text-lg font-bold mb-4">Discover / Clarify</h3>
<ul className="space-y-3 text-sm text-slate-600 list-disc pl-4 marker:text-cyan-500">
<li>Research Question</li>
<li>Gather Industry Evidence &amp; Statistics</li>
<li>Understand Current Mechanisms</li>
<li>Assume the Ecosystem</li>
<li>Competitive Analysis</li>
<li>Synthesize Findings → Identify Gaps in Clusters</li>
</ul>
</div>

<div className="bg-white pt-8 group">
<div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs mb-6 relative z-10 group-hover:bg-slate-900 group-hover:text-white transition-colors">2</div>
<h3 className="text-lg font-bold mb-4">Define</h3>
<ul className="space-y-3 text-sm text-slate-600 list-disc pl-4 marker:text-cyan-500">
<li>Personas</li>
<li>Map User Journeys (Current vs. Future State)</li>
<li>Key Findings &amp; Pain Points</li>
<li>Feature Clusters</li>
<li>Value Matrix (MoSCoW)</li>
</ul>
</div>

<div className="bg-white pt-8 group">
<div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs mb-6 relative z-10 group-hover:bg-slate-900 group-hover:text-white transition-colors">3</div>
<h3 className="text-lg font-bold mb-4">Ideate</h3>
<ul className="space-y-3 text-sm text-slate-600 list-disc pl-4 marker:text-cyan-500">
<li>Clusters by Logical Hierarchy</li>
<li>Paper Mockups &amp; Rapid Ideation</li>
<li>Information Architecture</li>
<li>Task Flows</li>
<li>Mid-Fidelity Wireframes</li>
</ul>
</div>

<div className="bg-white pt-8 group">
<div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs mb-6 relative z-10 group-hover:bg-slate-900 group-hover:text-white transition-colors">4</div>
<h3 className="text-lg font-bold mb-4">Design</h3>
<ul className="space-y-3 text-sm text-slate-600 list-disc pl-4 marker:text-cyan-500">
<li>Key Screen Designs</li>
<li>Interaction Flows (primary user journeys)</li>
<li>Design Rationale</li>
<li>Define Scope &amp; Learnings</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-16 bg-slate-900 text-white">
<div className="max-w-5xl mx-auto">
<h2 className="text-sm font-bold tracking-widest text-cyan-400 mb-8 uppercase">03 / Research</h2>
<div className="mb-16">
<h3 className="text-2xl md:text-3xl font-medium leading-normal mb-6">
                    What does existing research reveal about customer issues in the streaming ecosystem, and how can we use these findings to define intervention clusters for AI-driven proactive support?
                </h3>
</div>
<div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
<h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-6">Secondary Inquiries</h4>
<ul className="grid gap-4 text-slate-300 text-sm font-light">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-cyan-400" icon="solar:question-circle-linear"></iconify-icon>
<span>What is the current state of churn in the streaming industry, and how has it evolved?</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-cyan-400" icon="solar:question-circle-linear"></iconify-icon>
<span>Who are the target users within customer issue management teams, and what are their critical pain points?</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-cyan-400" icon="solar:question-circle-linear"></iconify-icon>
<span>What gaps exist in current churn prevention tools regarding AI transparency, usability, and team wellbeing?</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-cyan-400" icon="solar:question-circle-linear"></iconify-icon>
<span>How can AI-driven predictions be made trustworthy and actionable for non-technical teams?</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-16 bg-slate-50">
<div className="max-w-6xl mx-auto">
<h2 className="text-sm font-bold tracking-widest text-cyan-600 mb-12 uppercase">04 / Ecosystem Mapping</h2>

<div className="relative bg-white p-12 rounded-3xl shadow-sm border border-slate-200">
<h3 className="text-center font-bold text-lg mb-12">SVOD PLATFORM SYSTEM</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

<div className="space-y-6">
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
<h4 className="font-semibold text-sm mb-2 text-slate-800">Content Delivery</h4>
<p className="text-xs text-slate-500">Video streaming, recommendations</p>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
<h4 className="font-semibold text-sm mb-2 text-slate-800">Analytics Engine</h4>
<p className="text-xs text-slate-500">User metrics, engagement data</p>
</div>

<div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mt-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-blue-600" icon="solar:user-circle-bold"></iconify-icon>
<span className="font-bold text-xs text-blue-900">Data Analyst</span>
</div>
<p className="text-[10px] text-blue-700 leading-tight">Analyzes data, creates reports, churn patterns, risk signals.</p>
</div>
</div>

<div className="flex flex-col items-center space-y-6">
<div className="w-full bg-cyan-50 p-6 rounded-xl border border-cyan-100 text-center relative">
<h4 className="font-bold text-base mb-1 text-cyan-900">SUBSCRIBER</h4>
<p className="text-xs text-cyan-700 font-semibold mb-3">Individual User</p>
<ul className="text-[10px] text-cyan-600 space-y-1">
<li>Watches content</li>
<li>Browses catalog</li>
<li>Manages subscription</li>
</ul>
</div>
<div className="w-px h-8 bg-slate-300"></div>
<div className="bg-slate-800 text-white p-4 rounded-lg text-center w-full shadow-lg">
<span className="text-xs font-semibold tracking-wide">CENTRALIZED DATA WAREHOUSE</span>
<p className="text-[9px] text-slate-400 mt-1">Behavior, Billing &amp; Support Data</p>
</div>

<div className="w-full bg-indigo-50 p-4 rounded-xl border border-indigo-100">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-600" icon="solar:user-circle-bold"></iconify-icon>
<span className="font-bold text-xs text-indigo-900">Retention Manager</span>
</div>
<p className="text-[10px] text-indigo-700 leading-tight">Reduce churn, launch campaigns, track metrics, strategy.</p>
</div>
</div>

<div className="space-y-6">
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-right">
<h4 className="font-semibold text-sm mb-2 text-slate-800">Support System</h4>
<p className="text-xs text-slate-500">Ticket tracking, complaint logs</p>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-right">
<h4 className="font-semibold text-sm mb-2 text-slate-800">Billing System</h4>
<p className="text-xs text-slate-500">Payment processing, plan management</p>
</div>

<div className="bg-pink-50 p-4 rounded-xl border border-pink-100 mt-4 text-right">
<div className="flex items-center justify-end gap-2 mb-2">
<span className="font-bold text-xs text-pink-900">Customer Success</span>
<iconify-icon className="text-pink-600" icon="solar:user-circle-bold"></iconify-icon>
</div>
<p className="text-[10px] text-pink-700 leading-tight">Save at-risk subscribers, handle issues, execute retention.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-16 bg-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-sm font-bold tracking-widest text-cyan-600 mb-8 uppercase">05 / Competitive Analysis</h2>
<h3 className="text-2xl font-bold mb-12">Gap Analysis: Identifying the Opportunity</h3>
<div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
<table className="w-full text-sm text-left">
<thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
<tr>
<th className="p-6">Criteria</th>
<th className="p-6 text-slate-800">Gainsight</th>
<th className="p-6 text-slate-800">ChurnZero</th>
<th className="p-6 text-slate-800">Totango</th>
<th className="p-6 text-cyan-600 bg-cyan-50/50">Gap / Opportunity</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/50">
<td className="p-6 font-medium text-slate-900">Churn Risk Scoring</td>
<td className="p-6 text-slate-600">ML-powered health scores</td>
<td className="p-6 text-slate-600">Real-time health monitoring (9.2/10)</td>
<td className="p-6 text-slate-600">Product adoption-focused scoring</td>
<td className="p-6 font-medium text-cyan-700 bg-cyan-50/30">Standard across all platforms</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="p-6 font-medium text-slate-900">Predictive Analytics</td>
<td className="p-6 text-slate-600">Yes, renewal likelihood</td>
<td className="p-6 text-slate-600">Yes, 14-day trend analysis</td>
<td className="p-6 text-slate-600">Yes, with segmentation</td>
<td className="p-6 font-medium text-cyan-700 bg-cyan-50/30">Opportunity: Automated ROI</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="p-6 font-medium text-slate-900">AI Explainability</td>
<td className="p-6 text-slate-600">Limited "why" explanations</td>
<td className="p-6 text-slate-600">Limited</td>
<td className="p-6 text-slate-600">Minimal transparency</td>
<td className="p-6 font-bold text-cyan-600 bg-cyan-50/30">MAJOR: Explainable "why" &amp; confidence</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="p-6 font-medium text-slate-900">Real-Time Alerts</td>
<td className="p-6 text-slate-600">Yes, but can overwhelm</td>
<td className="p-6 text-slate-600">Daily churn summaries</td>
<td className="p-6 text-slate-600">Segmentation-based alerts</td>
<td className="p-6 font-medium text-cyan-700 bg-cyan-50/30">Smart prioritization &amp; urgent-only flags</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="p-6 font-medium text-slate-900">Success Tracking</td>
<td className="p-6 text-slate-600">Manual setup required</td>
<td className="p-6 text-slate-600">Limited automation</td>
<td className="p-6 text-slate-600">Requires custom work</td>
<td className="p-6 font-medium text-cyan-700 bg-cyan-50/30">Automated ROI tracking</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="p-6 font-medium text-slate-900">Ease of Use</td>
<td className="p-6 text-slate-600">⭐⭐ (Complex UI)</td>
<td className="p-6 text-slate-600">⭐⭐ (Can feel clunky)</td>
<td className="p-6 text-slate-600">⭐⭐⭐ (Better than others)</td>
<td className="p-6 font-bold text-cyan-600 bg-cyan-50/30">MAJOR: Simple, intuitive, humane UX</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="p-6 font-medium text-slate-900">Team Wellbeing</td>
<td className="p-6 text-slate-600">No burnout prevention</td>
<td className="p-6 text-slate-600">Not addressed</td>
<td className="p-6 text-slate-600">Not considered</td>
<td className="p-6 font-bold text-cyan-600 bg-cyan-50/30">UNIQUE: Design for load reduction</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-16 bg-slate-50">
<div className="max-w-6xl mx-auto">
<h2 className="text-sm font-bold tracking-widest text-cyan-600 mb-12 uppercase">06 / User Personas</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">👩🏻‍💼</div>
<div>
<h3 className="font-bold text-lg">Sarah Chen</h3>
<p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">Retention Manager</p>
</div>
</div>
<div className="space-y-6 text-sm text-slate-600 flex-1">
<div>
<h4 className="font-semibold text-slate-900 mb-2">Goals</h4>
<p className="leading-relaxed">Reduce monthly churn from 5.8% to 4.2%. Improve Net Revenue Retention to 92%. Demonstrate ROI to execs.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-2">Pain Points</h4>
<p className="leading-relaxed">Too late to act. No visibility of impact. Overwhelming workload. Team burnout.</p>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 italic text-slate-500">
                            "Loyal customers matter, but today churn is analyzed too late. Teams need tools to act earlier."
                        </div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-2xl">👨🏻‍💻</div>
<div>
<h3 className="font-bold text-lg">Alex Kim</h3>
<p className="text-xs font-semibold text-pink-600 uppercase tracking-wide">Success Specialist</p>
</div>
</div>
<div className="space-y-6 text-sm text-slate-600 flex-1">
<div>
<h4 className="font-semibold text-slate-900 mb-2">Goals</h4>
<p className="leading-relaxed">Meet 30% monthly save-rate target. Maintain 4.5/5 CSAT score. Build genuine relationships.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-2">Pain Points</h4>
<p className="leading-relaxed">Feels reactive and powerless. No clear prioritization. Emotional toll of constant "failures".</p>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 italic text-slate-500">
                            "I love helping people, but the work is reactive. I want to reach out early with meaningful help."
                        </div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl">👩🏽‍🔬</div>
<div>
<h3 className="font-bold text-lg">Dr. Priya Malhotra</h3>
<p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Data Analyst</p>
</div>
</div>
<div className="space-y-6 text-sm text-slate-600 flex-1">
<div>
<h4 className="font-semibold text-slate-900 mb-2">Goals</h4>
<p className="leading-relaxed">Improve ML model accuracy to 93%+. Identify behavioral signals. Make predictions accessible to non-tech teams.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-2">Pain Points</h4>
<p className="leading-relaxed">Insights go unused. Lack of explainability. No impact visibility.</p>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 italic text-slate-500">
                            "I can predict churn accurately, but it means nothing if those insights don't reach the people who can act."
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-16 bg-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-sm font-bold tracking-widest text-cyan-600 mb-12 uppercase">07 / Research Synthesis</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow">
<h3 className="font-bold text-lg mb-3">Cluster 1: Issues Are Detected Too Late</h3>
<p className="text-sm text-slate-600 mb-2"><strong>Evidence:</strong> Negative experiences form over weeks, but tools surface them only at churn.</p>
<p className="text-sm text-slate-600 mb-2"><strong>Impact:</strong> Missed intervention windows.</p>
<p className="text-sm text-slate-600"><strong>Root Cause:</strong> Reactive data pipelines.</p>
</div>

<div className="border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow">
<h3 className="font-bold text-lg mb-3">Cluster 2: Signals, Not Meaning</h3>
<p className="text-sm text-slate-600 mb-2"><strong>Evidence:</strong> Tons of metrics but no narrative.</p>
<p className="text-sm text-slate-600 mb-2"><strong>Impact:</strong> Analysis paralysis.</p>
<p className="text-sm text-slate-600"><strong>Root Cause:</strong> Tools provide visualization, not insight.</p>
</div>

<div className="border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow">
<h3 className="font-bold text-lg mb-3">Cluster 3: AI Is Not Trusted</h3>
<p className="text-sm text-slate-600 mb-2"><strong>Evidence:</strong> Predictions lack reasoning.</p>
<p className="text-sm text-slate-600 mb-2"><strong>Impact:</strong> Low adoption by teams.</p>
<p className="text-sm text-slate-600"><strong>Root Cause:</strong> Focus on accuracy over explainability.</p>
</div>

<div className="border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow">
<h3 className="font-bold text-lg mb-3">Cluster 4: Knowing ≠ Doing</h3>
<p className="text-sm text-slate-600 mb-2"><strong>Evidence:</strong> Flags exist but zero guidance on action.</p>
<p className="text-sm text-slate-600 mb-2"><strong>Impact:</strong> Inconsistent interventions.</p>
<p className="text-sm text-slate-600"><strong>Root Cause:</strong> Detection separated from intervention.</p>
</div>

<div className="border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow">
<h3 className="font-bold text-lg mb-3">Cluster 5: Teams Are Overloaded</h3>
<p className="text-sm text-slate-600 mb-2"><strong>Evidence:</strong> Alert fatigue, 50% burnout rate.</p>
<p className="text-sm text-slate-600 mb-2"><strong>Impact:</strong> High turnover, compassion fatigue.</p>
<p className="text-sm text-slate-600"><strong>Root Cause:</strong> No consideration of cognitive load.</p>
</div>

<div className="border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow">
<h3 className="font-bold text-lg mb-3">Cluster 6: Trust Can Be Damaged</h3>
<p className="text-sm text-slate-600 mb-2"><strong>Evidence:</strong> Generic, ill-timed interventions.</p>
<p className="text-sm text-slate-600 mb-2"><strong>Impact:</strong> Accelerated churn.</p>
<p className="text-sm text-slate-600"><strong>Root Cause:</strong> No framework for respectful engagement.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-16 bg-slate-50">
<div className="max-w-6xl mx-auto">
<h2 className="text-sm font-bold tracking-widest text-cyan-600 mb-8 uppercase">08 / Strategic Definition</h2>
<div className="mb-16">
<h3 className="text-2xl font-bold mb-6">How Might We...</h3>
<ul className="space-y-4 text-lg font-light text-slate-700">
<li className="flex gap-4"><span className="text-cyan-500 font-bold">→</span> Reduce reactive workflows through explainable insights?</li>
<li className="flex gap-4"><span className="text-cyan-500 font-bold">→</span> Design a unified, single-platform workspace?</li>
<li className="flex gap-4"><span className="text-cyan-500 font-bold">→</span> Minimize manual reporting to reduce effort?</li>
<li className="flex gap-4"><span className="text-cyan-500 font-bold">→</span> Visualize impact to build team confidence?</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm">
<h3 className="text-lg font-bold mb-6 border-b pb-2">Prioritization Matrix (MoSCoW)</h3>
<div className="grid md:grid-cols-2 gap-8">
<div className="p-4 bg-green-50 rounded-lg border border-green-100">
<h4 className="font-bold text-green-800 mb-2 uppercase text-xs tracking-wider">Must Have</h4>
<ul className="list-disc pl-4 text-sm text-green-900 space-y-1">
<li>Real-time churn risk dashboard</li>
<li>Explainable AI factors ("Why at risk?")</li>
<li>Integrated "Take Action" buttons</li>
</ul>
</div>
<div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
<h4 className="font-bold text-blue-800 mb-2 uppercase text-xs tracking-wider">Should Have</h4>
<ul className="list-disc pl-4 text-sm text-blue-900 space-y-1">
<li>Automated weekly success reports</li>
<li>Sentiment analysis on tickets</li>
<li>Team workload balancing</li>
</ul>
</div>
<div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
<h4 className="font-bold text-amber-800 mb-2 uppercase text-xs tracking-wider">Could Have</h4>
<ul className="list-disc pl-4 text-sm text-amber-900 space-y-1">
<li>Gamification of team wins</li>
<li>Dark mode interface</li>
</ul>
</div>
<div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
<h4 className="font-bold text-slate-600 mb-2 uppercase text-xs tracking-wider">Won't Have (Now)</h4>
<ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
<li>Mobile app version</li>
<li>Direct integration with non-standard CRMs</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-16 bg-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-sm font-bold tracking-widest text-cyan-600 mb-12 uppercase">09 / Architecture &amp; Flow</h2>

<div className="mb-16">
<h3 className="text-xl font-bold mb-6">Information Architecture</h3>
<div className="w-full h-64 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center bg-slate-50">
<div className="text-center text-slate-400">
<iconify-icon className="text-4xl mb-2" icon="solar:sitemap-linear"></iconify-icon>
<p className="font-medium">Site Map Diagram Placeholder</p>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-bold mb-6">Primary User Flow: Proactive Intervention</h3>
<div className="w-full h-48 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center bg-slate-50">
<div className="text-center text-slate-400">
<iconify-icon className="text-4xl mb-2" icon="solar:round-arrow-right-linear"></iconify-icon>
<p className="font-medium">User Flow Diagram Placeholder</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-16 bg-slate-900 text-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-sm font-bold tracking-widest text-cyan-400 mb-12 uppercase">10 / Key Screens</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="space-y-4">
<div className="aspect-video bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-slate-500 font-light">Dashboard View</span>
</div>
<div>
<h4 className="font-bold text-lg">The Command Center</h4>
<p className="text-slate-400 text-sm">Unified view of at-risk accounts prioritized by AI confidence score.</p>
</div>
</div>

<div className="space-y-4">
<div className="aspect-video bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-slate-500 font-light">Intervention Detail</span>
</div>
<div>
<h4 className="font-bold text-lg">Context &amp; Action</h4>
<p className="text-slate-400 text-sm">Detailed explainability of risk factors with suggested intervention playbooks.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 text-center text-slate-400 text-xs">
<p className="mb-2">Designed by Rishi Sagade</p>
<p>UI/UX Case Study Presentation</p>
</footer>

    </>
  );
}
