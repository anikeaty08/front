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
      

<div className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200 text-[10px] md:text-xs font-mono text-gray-500 py-2 px-4 flex justify-between items-center shadow-sm">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5 text-amber-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                Status: Pre-Institutional Draft
            </span>
<span className="hidden md:inline text-gray-300">|</span>
<span className="hidden md:inline">Version: v0.1</span>
<span className="hidden md:inline text-gray-300">|</span>
<span className="hidden md:inline">Class: International Governance Interface</span>
</div>
<div className="uppercase tracking-wider text-gray-400">Authority: None (Consultative Draft)</div>
</div>
<main className="w-full max-w-4xl mx-auto px-8 md:px-12 pt-16 pb-24 border-x border-gray-100 bg-white min-h-screen shadow-sm doc-bg relative">

<section className="py-20 border-b border-gray-100 relative">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-2 py-1 bg-gray-50 border border-gray-200 rounded text-[10px] font-mono text-gray-500 mb-8 uppercase tracking-widest">
                    Reference: INT-GOV-INTERFACE-01
                </div>
<h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 leading-[1.1] mb-6">
                    eXtended Evolution for<br/>Universal Systems
                </h1>
<p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-2xl mb-8">
                    A proposed international governance interface for coordinating, validating, and containing high-impact technological intelligence.
                </p>
<div className="flex items-center gap-3 pt-6 border-t border-gray-100">
<span className="iconify text-gray-400" data-icon="lucide:info" data-width="14"></span>
<p className="text-xs text-gray-500 font-mono uppercase tracking-wide">
                        Published for review, reference, and institutional alignment.
                    </p>
</div>
</div>
</section>

<section className="py-12 border-b border-gray-100 bg-gray-50/30 -mx-12 px-12">
<h3 className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest mb-6">Document Structure</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-8 text-sm text-gray-600">
<div className="flex gap-3 items-baseline"><span className="text-xs font-mono text-gray-400">01</span> International Mandate</div>
<div className="flex gap-3 items-baseline"><span className="text-xs font-mono text-gray-400">02</span> Rationale &amp; Necessity</div>
<div className="flex gap-3 items-baseline"><span className="text-xs font-mono text-gray-400">03</span> Jurisdictional Scope</div>
<div className="flex gap-3 items-baseline"><span className="text-xs font-mono text-gray-400">04</span> Governance Architecture</div>
<div className="flex gap-3 items-baseline"><span className="text-xs font-mono text-gray-400">05</span> Cognitive Risk Registry</div>
<div className="flex gap-3 items-baseline"><span className="text-xs font-mono text-gray-400">06</span> Public Knowledge Base</div>
<div className="flex gap-3 items-baseline"><span className="text-xs font-mono text-gray-400">07</span> Contribution (Inactive)</div>
<div className="flex gap-3 items-baseline"><span className="text-xs font-mono text-gray-400">08</span> Institutional Alignment</div>
<div className="flex gap-3 items-baseline"><span className="text-xs font-mono text-gray-400">09</span> Legal &amp; Disclaimers</div>
</div>
</section>

<section className="py-16 border-b border-gray-100">
<div className="flex items-baseline justify-between mb-10">
<h2 className="text-lg font-medium tracking-tight text-gray-900">International Mandate</h2>
<span className="text-xs text-gray-400 font-mono">SEC.01</span>
</div>
<div className="prose prose-sm max-w-none text-gray-600 space-y-10">

<div className="bg-gray-50 p-6 border-l-2 border-gray-900">
<h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3">Mandate Statement</h3>
<p className="leading-relaxed text-gray-800">
                        The eXtended Evolution for Universal Systems initiative proposes a neutral, non-sovereign governance framework for coordinating the responsible evolution of high-impact technological intelligence across human and artificial systems.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div>
<h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3">Purpose</h3>
<p className="leading-relaxed text-sm">
                            The purpose of this mandate is to prevent irreversible systemic harm arising from unmanaged intelligence acceleration, coordination failure, and misuse of advanced cognitive technologies.
                        </p>
</div>
<div>
<h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3">Scope of Intent</h3>
<ul className="space-y-2 text-sm">
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-gray-400" data-icon="lucide:minus" data-width="12"></span>
                                Provide shared risk classification standards
                            </li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-gray-400" data-icon="lucide:minus" data-width="12"></span>
                                Establish containment principles for irreversible interventions
                            </li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-gray-400" data-icon="lucide:minus" data-width="12"></span>
                                Coordinate human–AI validation processes
                            </li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-gray-400" data-icon="lucide:minus" data-width="12"></span>
                                Preserve long-term civilizational optionality
                            </li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-6">
<h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Non-Authority Clause</h3>
<p className="text-sm text-gray-600">
                        This interface does not claim regulatory, legal, or enforcement authority. All operational authority remains with sovereign states, multilateral institutions, and recognized governing bodies.
                    </p>
</div>
</div>
</section>

<section className="py-16 border-b border-gray-100">
<div className="flex items-baseline justify-between mb-10">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Rationale &amp; Necessity</h2>
<span className="text-xs text-gray-400 font-mono">SEC.02</span>
</div>
<div className="space-y-8">
<div className="grid grid-cols-1 gap-6">
<div className="flex gap-4">
<span className="font-mono text-gray-400 text-xs mt-1">01</span>
<p className="text-sm text-gray-800">Existing institutions regulate outcomes, not intelligence evolution itself.</p>
</div>
<div className="flex gap-4">
<span className="font-mono text-gray-400 text-xs mt-1">02</span>
<p className="text-sm text-gray-800">Technological capability now scales faster than institutional response.</p>
</div>
<div className="flex gap-4">
<span className="font-mono text-gray-400 text-xs mt-1">03</span>
<p className="text-sm text-gray-800">Intelligence failures propagate across domains faster than traditional oversight.</p>
</div>
<div className="flex gap-4">
<span className="font-mono text-gray-400 text-xs mt-1">04</span>
<p className="text-sm text-gray-800">Certain high-impact interventions are irreversible before harm is detectable.</p>
</div>
</div>
<div className="p-4 bg-gray-50 border border-gray-200 rounded-sm text-center">
<span className="block text-xs font-mono uppercase text-gray-400 mb-2">Conclusion</span>
<strong className="text-sm font-medium text-gray-900">“Governance must precede optimization.”</strong>
</div>
</div>
</section>

<section className="py-16 border-b border-gray-100">
<div className="flex items-baseline justify-between mb-10">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Jurisdictional Scope</h2>
<span className="text-xs text-gray-400 font-mono">SEC.03</span>
</div>
<div className="border border-gray-200 rounded-sm overflow-hidden">
<div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="iconify text-gray-400" data-icon="lucide:lock" data-width="14"></span>
<span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Scope Locked</span>
</div>
<span className="text-sm font-medium text-gray-900">Cognitive Systems</span>
</div>
<div className="p-6 md:p-8 space-y-8">

<div>
<span className="block text-[10px] font-mono uppercase text-gray-400 mb-2">Formal Definition</span>
<p className="text-sm text-gray-800 leading-relaxed">
                            Cognitive Systems are defined as systems that govern how intelligence is generated, amplified, constrained, coordinated, interpreted, and acted upon by human and artificial agents.
                        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-100">

<div>
<span className="block text-[10px] font-mono uppercase text-emerald-600 mb-3 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Explicit Inclusions
                            </span>
<ul className="space-y-2 text-sm text-gray-600">
<li className="flex items-start gap-2"><span className="iconify mt-1 text-gray-300" data-icon="lucide:check" data-width="12"></span> Human reasoning architectures</li>
<li className="flex items-start gap-2"><span className="iconify mt-1 text-gray-300" data-icon="lucide:check" data-width="12"></span> AI-assisted decision systems</li>
<li className="flex items-start gap-2"><span className="iconify mt-1 text-gray-300" data-icon="lucide:check" data-width="12"></span> Collective intelligence mechanisms</li>
<li className="flex items-start gap-2"><span className="iconify mt-1 text-gray-300" data-icon="lucide:check" data-width="12"></span> Attention allocation systems</li>
</ul>
</div>

<div>
<span className="block text-[10px] font-mono uppercase text-red-600 mb-3 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Explicit Exclusions
                            </span>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-start gap-2"><span className="iconify mt-1 text-gray-300" data-icon="lucide:x" data-width="12"></span> Clinical psychology</li>
<li className="flex items-start gap-2"><span className="iconify mt-1 text-gray-300" data-icon="lucide:x" data-width="12"></span> Therapy or mental health treatment</li>
<li className="flex items-start gap-2"><span className="iconify mt-1 text-gray-300" data-icon="lucide:x" data-width="12"></span> Productivity or self-help content</li>
<li className="flex items-start gap-2"><span className="iconify mt-1 text-gray-300" data-icon="lucide:x" data-width="12"></span> Consumer optimization tools</li>
</ul>
</div>
</div>
</div>
<div className="bg-gray-50/50 px-4 py-3 border-t border-gray-200 text-center">
<p className="text-[10px] text-gray-400 font-mono uppercase">Scope expansion requires formal international review</p>
</div>
</div>
</section>

<section className="py-16 border-b border-gray-100">
<div className="flex items-baseline justify-between mb-10">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Governance Architecture</h2>
<span className="text-xs text-gray-400 font-mono">SEC.04</span>
</div>
<div className="space-y-3">

<div className="group border border-gray-200 p-4 flex items-center justify-between hover:border-gray-300 transition-colors">
<div className="flex items-center gap-4">
<span className="font-mono text-gray-300 text-sm">01</span>
<span className="text-sm font-medium text-gray-900">Intelligence Intake Layer</span>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 bg-gray-50 text-[10px] text-gray-400 border border-gray-100 uppercase tracking-wide">Conceptual</span>
</div>
</div>

<div className="group border border-gray-200 p-4 flex items-center justify-between hover:border-gray-300 transition-colors">
<div className="flex items-center gap-4">
<span className="font-mono text-gray-300 text-sm">02</span>
<span className="text-sm font-medium text-gray-900">Risk Classification Layer</span>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 bg-gray-50 text-[10px] text-gray-400 border border-gray-100 uppercase tracking-wide">Conceptual</span>
</div>
</div>

<div className="group border border-gray-200 p-4 flex items-center justify-between hover:border-gray-300 transition-colors">
<div className="flex items-center gap-4">
<span className="font-mono text-gray-300 text-sm">03</span>
<span className="text-sm font-medium text-gray-900">Containment Layer</span>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 bg-gray-50 text-[10px] text-gray-400 border border-gray-100 uppercase tracking-wide">Non-Operational</span>
</div>
</div>

<div className="group border border-gray-200 p-4 flex items-center justify-between hover:border-gray-300 transition-colors">
<div className="flex items-center gap-4">
<span className="font-mono text-gray-300 text-sm">04</span>
<span className="text-sm font-medium text-gray-900">Human–AI Co-Validation</span>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 bg-gray-50 text-[10px] text-gray-400 border border-gray-100 uppercase tracking-wide">Non-Operational</span>
</div>
</div>

<div className="group border border-gray-200 p-4 flex items-center justify-between hover:border-gray-300 transition-colors">
<div className="flex items-center gap-4">
<span className="font-mono text-gray-300 text-sm">05</span>
<span className="text-sm font-medium text-gray-900">External Authority Interface</span>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 bg-gray-50 text-[10px] text-gray-400 border border-gray-100 uppercase tracking-wide">Non-Operational</span>
</div>
</div>
</div>
</section>

<section className="py-16 border-b border-gray-100">
<div className="flex items-baseline justify-between mb-10">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Canonical Cognitive Risk Registry</h2>
<span className="text-xs text-gray-400 font-mono">SEC.05</span>
</div>
<div className="overflow-x-auto border border-gray-200 rounded-sm">
<table className="w-full text-left text-sm border-collapse">
<thead className="bg-gray-50">
<tr className="border-b border-gray-200 text-xs text-gray-500 uppercase tracking-wider font-medium">
<th className="py-3 px-4 w-20">ID</th>
<th className="py-3 px-4 w-48">Risk Name</th>
<th className="py-3 px-4 hidden md:table-cell">Civilizational Impact</th>
<th className="py-3 px-4 text-right w-32">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-xs">

<tr className="group hover:bg-gray-50/50">
<td className="py-3 px-4 font-mono text-gray-400">COG-01</td>
<td className="py-3 px-4 font-medium text-gray-900">Reward Hacking</td>
<td className="py-3 px-4 text-gray-600 hidden md:table-cell">Loss of steering control; unaligned resource consumption.</td>
<td className="py-3 px-4 text-right text-gray-400">Open Research</td>
</tr>

<tr className="group hover:bg-gray-50/50">
<td className="py-3 px-4 font-mono text-gray-400">COG-02</td>
<td className="py-3 px-4 font-medium text-gray-900">Instrumental Convergence</td>
<td className="py-3 px-4 text-gray-600 hidden md:table-cell">Resource monopolization; pre-emptive threat removal.</td>
<td className="py-3 px-4 text-right text-gray-400">Open Research</td>
</tr>

<tr className="group hover:bg-gray-50/50">
<td className="py-3 px-4 font-mono text-gray-400">COG-03</td>
<td className="py-3 px-4 font-medium text-gray-900">Recursive Self-Improvement</td>
<td className="py-3 px-4 text-gray-600 hidden md:table-cell">Rapid capability overhang exceeding decision latency.</td>
<td className="py-3 px-4 text-right text-gray-400">Open Research</td>
</tr>

<tr className="group hover:bg-gray-50/50">
<td className="py-3 px-4 font-mono text-gray-400">COG-04</td>
<td className="py-3 px-4 font-medium text-gray-900">Ontology Mismatch</td>
<td className="py-3 px-4 text-gray-600 hidden md:table-cell">Catastrophic misinterpretation of human values.</td>
<td className="py-3 px-4 text-right text-gray-400">Open Research</td>
</tr>

<tr className="group hover:bg-gray-50/50">
<td className="py-3 px-4 font-mono text-gray-400">COG-05</td>
<td className="py-3 px-4 font-medium text-gray-900">Information Hazard</td>
<td className="py-3 px-4 text-gray-600 hidden md:table-cell">Dissemination of dangerous dual-use knowledge.</td>
<td className="py-3 px-4 text-right text-gray-400">Open Research</td>
</tr>

<tr className="group hover:bg-gray-50/50">
<td className="py-3 px-4 font-mono text-gray-400">COG-06</td>
<td className="py-3 px-4 font-medium text-gray-900">Sybil Escalation</td>
<td className="py-3 px-4 text-gray-600 hidden md:table-cell">Overwhelming of democratic/discursive systems.</td>
<td className="py-3 px-4 text-right text-gray-400">Open Research</td>
</tr>

<tr className="group hover:bg-gray-50/50">
<td className="py-3 px-4 font-mono text-gray-400">COG-07</td>
<td className="py-3 px-4 font-medium text-gray-900">Reality Collapse</td>
<td className="py-3 px-4 text-gray-600 hidden md:table-cell">Systemic inability to distinguish synthetic from organic.</td>
<td className="py-3 px-4 text-right text-gray-400">Open Research</td>
</tr>

<tr className="group hover:bg-gray-50/50">
<td className="py-3 px-4 font-mono text-gray-400">COG-08</td>
<td className="py-3 px-4 font-medium text-gray-900">Automated Warfare</td>
<td className="py-3 px-4 text-gray-600 hidden md:table-cell">Flash conflicts faster than human diplomatic intervention.</td>
<td className="py-3 px-4 text-right text-gray-400">Open Research</td>
</tr>

<tr className="group hover:bg-gray-50/50">
<td className="py-3 px-4 font-mono text-gray-400">COG-09</td>
<td className="py-3 px-4 font-medium text-gray-900">Economic Cascade</td>
<td className="py-3 px-4 text-gray-600 hidden md:table-cell">Total displacement of human labor utility function.</td>
<td className="py-3 px-4 text-right text-gray-400">Open Research</td>
</tr>

<tr className="group hover:bg-gray-50/50">
<td className="py-3 px-4 font-mono text-gray-400">COG-10</td>
<td className="py-3 px-4 font-medium text-gray-900">Value Lock-in</td>
<td className="py-3 px-4 text-gray-600 hidden md:table-cell">Permanent enforcement of flawed moral frameworks.</td>
<td className="py-3 px-4 text-right text-gray-400">Open Research</td>
</tr>
</tbody>
</table>
</div>
<p className="mt-4 text-[10px] text-gray-400 uppercase tracking-wide">
                Note: Inclusion in this registry does not imply approval or authorization.
            </p>
</section>

<section className="py-16 border-b border-gray-100">
<div className="flex items-baseline justify-between mb-10">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Public Knowledge Base</h2>
<span className="text-xs text-gray-400 font-mono">SEC.06</span>
</div>
<div className="bg-white border border-gray-200 rounded-sm h-[28rem] overflow-y-auto scroller p-8 relative">
<div className="absolute top-4 right-4 text-[10px] text-amber-600 bg-amber-50 px-2 py-1 rounded font-mono border border-amber-100 uppercase tracking-wider">Draft Reference Material · Subject to Review</div>
<div className="max-w-xl mx-auto space-y-12">
<div>
<h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Definitions</h4>
<dl className="space-y-6">
<div>
<dt className="text-sm font-semibold text-gray-900 font-mono text-xs">TERM: Cognitive Systems</dt>
<dd className="text-sm text-gray-600 mt-2 leading-relaxed">Systems that shape how intelligence is formed, constrained, and applied across agents.</dd>
</div>
<div>
<dt className="text-sm font-semibold text-gray-900 font-mono text-xs">TERM: Existential Risk</dt>
<dd className="text-sm text-gray-600 mt-2 leading-relaxed">Risk that permanently reduces humanity’s long-term capacity to choose, adapt, or survive.</dd>
</div>
<div>
<dt className="text-sm font-semibold text-gray-900 font-mono text-xs">TERM: Irreversibility</dt>
<dd className="text-sm text-gray-600 mt-2 leading-relaxed">A system state that cannot be restored without unacceptable loss or uncertainty.</dd>
</div>
<div>
<dt className="text-sm font-semibold text-gray-900 font-mono text-xs">TERM: Containment</dt>
<dd className="text-sm text-gray-600 mt-2 leading-relaxed">Restriction of action, not suppression of knowledge, to prevent premature harm.</dd>
</div>
</dl>
</div>
<div>
<h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Core Principles</h4>
<ul className="list-disc pl-4 space-y-3 text-sm text-gray-600 marker:text-gray-300">
<li>Capability increases responsibility</li>
<li>Reversibility outweighs optimization</li>
<li>Speed is subordinate to correctness</li>
<li>Unknown effects escalate caution</li>
<li>Intelligence must remain governable</li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Reference Frameworks</h4>
<dl className="space-y-6">
<div>
<dt className="text-sm font-semibold text-gray-900 font-mono text-xs">REF: Human–AI Responsibility Separation</dt>
<dd className="text-sm text-gray-600 mt-2 leading-relaxed">AI systems may advise but cannot bear responsibility.</dd>
</div>
<div>
<dt className="text-sm font-semibold text-gray-900 font-mono text-xs">REF: Decision Latency Under Risk</dt>
<dd className="text-sm text-gray-600 mt-2 leading-relaxed">High-impact decisions require enforced temporal delay.</dd>
</div>
<div>
<dt className="text-sm font-semibold text-gray-900 font-mono text-xs">REF: Unknown-System Handling</dt>
<dd className="text-sm text-gray-600 mt-2 leading-relaxed">Unmodeled systems must be observed before intervention.</dd>
</div>
</dl>
</div>
<div className="pt-8 border-t border-gray-100 text-center">
<span className="iconify inline-block text-gray-300 mb-2" data-icon="lucide:book-open" data-width="16"></span>
<p className="text-[10px] text-gray-400">End of Viewable Content</p>
</div>
</div>
</div>
</section>

<section className="py-16 border-b border-gray-100 relative">
<div className="flex items-baseline justify-between mb-10">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Contribution Interface</h2>
<span className="text-xs text-gray-400 font-mono">SEC.07</span>
</div>
<div className="relative opacity-50 pointer-events-none select-none grayscale-[0.5]">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-1">
<label className="block text-xs font-medium text-gray-700 uppercase tracking-wide">Entity ID / Organization</label>
<input className="block w-full rounded-none border-gray-300 shadow-sm sm:text-sm p-3 bg-gray-50 border font-mono" disabled="" placeholder="ENTITY-ID-0000" type="text"/>
</div>
<div className="space-y-1">
<label className="block text-xs font-medium text-gray-700 uppercase tracking-wide">Credential Reference</label>
<input className="block w-full rounded-none border-gray-300 shadow-sm sm:text-sm p-3 bg-gray-50 border font-mono" disabled="" placeholder="SEC-AUTH-0000" type="text"/>
</div>
</div>
<div className="space-y-1 mb-6">
<label className="block text-xs font-medium text-gray-700 uppercase tracking-wide">Submission Category</label>
<div className="relative">
<select className="block w-full appearance-none rounded-none border-gray-300 shadow-sm sm:text-sm p-3 bg-gray-50 border text-gray-400" disabled="">
<option>Select category...</option>
</select>
<span className="absolute right-3 top-3.5 iconify text-gray-400" data-icon="lucide:chevron-down"></span>
</div>
</div>
<div className="space-y-1 mb-8">
<label className="block text-xs font-medium text-gray-700 uppercase tracking-wide">Technical Abstract</label>
<textarea className="block w-full rounded-none border-gray-300 shadow-sm sm:text-sm p-3 bg-gray-50 border font-mono text-gray-400" disabled="" placeholder="Describe the mechanism..." rows="5"></textarea>
</div>
<div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-none shadow-sm text-sm font-medium text-white bg-gray-400" disabled="">
                        Submit for Validation
                    </button>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[2px] z-10">
<div className="bg-white border border-gray-200 p-8 shadow-lg max-w-md text-center">
<div className="mx-auto w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4">
<span className="iconify text-gray-500" data-icon="lucide:lock" data-width="18"></span>
</div>
<h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Contribution Disabled</h3>
<p className="text-xs text-gray-500 leading-relaxed">
                        Contribution intake will open only after formal international authorization.<br/>This interface demonstrates preparedness, not participation.
                    </p>
</div>
</div>
</section>

<section className="py-16 border-b border-gray-100">
<div className="flex items-baseline justify-between mb-10">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Institutional Alignment</h2>
<span className="text-xs text-gray-400 font-mono">SEC.08</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="space-y-6">
<p className="text-sm text-gray-700 leading-relaxed">
                        xeus is designed to support governments, not replace them. It provides a specialized coordination layer and technical risk governance framework that operates as a reference for sovereign decision-making.
                    </p>
<p className="text-sm text-gray-700 leading-relaxed">
                        By separating intelligence risk identification from political enforcement, xeus enables faster global convergence on safety standards without infringing on national execution strategies.
                    </p>
</div>
<div className="bg-gray-50 p-6 border border-gray-100 rounded-sm">
<h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Compatible With</h4>
<ul className="space-y-4">
<li className="flex items-center text-sm text-gray-900 group">
<span className="iconify text-gray-300 mr-3 group-hover:text-gray-500 transition-colors" data-icon="lucide:building-2" data-width="16"></span>
                            National regulators
                        </li>
<li className="flex items-center text-sm text-gray-900 group">
<span className="iconify text-gray-300 mr-3 group-hover:text-gray-500 transition-colors" data-icon="lucide:flask-conical" data-width="16"></span>
                            Research councils
                        </li>
<li className="flex items-center text-sm text-gray-900 group">
<span className="iconify text-gray-300 mr-3 group-hover:text-gray-500 transition-colors" data-icon="lucide:globe-2" data-width="16"></span>
                            International scientific bodies
                        </li>
<li className="flex items-center text-sm text-gray-900 group">
<span className="iconify text-gray-300 mr-3 group-hover:text-gray-500 transition-colors" data-icon="lucide:landmark" data-width="16"></span>
                            Multilateral institutions
                        </li>
</ul>
</div>
</div>
</section>

<section className="py-16">
<div className="flex items-baseline justify-between mb-8">
<h2 className="text-sm font-medium tracking-tight text-gray-900">Legal Status &amp; Disclaimers</h2>
<span className="text-xs text-gray-400 font-mono">SEC.09</span>
</div>
<div className="text-[11px] text-gray-400 space-y-4 leading-relaxed max-w-4xl columns-1 md:columns-2 gap-8 text-justify">
<p>
<strong>NO LEGAL AUTHORITY:</strong> This interface has no legal authority. The framework presented herein is a draft instrument for consultation purposes only. It does not constitute a binding treaty, law, or regulation in any jurisdiction.
                </p>
<p>
<strong>NO REGULATORY APPROVAL:</strong> The content provided by this interface does not provide regulatory approval for any system, entity, or action. Presence in the registry or alignment with the architecture does not constitute permission to operate.
                </p>
<p>
<strong>NO DEPLOYMENT AUTHORIZATION:</strong> This interface does not authorize deployment of any cognitive system. All operational decisions remain the sole responsibility of the deploying entity and relevant sovereign oversight bodies.
                </p>
<p>
<strong>INFORMATIONAL NATURE:</strong> All content is informational and advisory. No liability is assumed for reliance on this material.
                </p>
<p>
<strong>JURISDICTION NEUTRALITY:</strong> This framework operates without jurisdictional preference or sovereignty claims.
                </p>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 py-16">
<div className="max-w-4xl mx-auto px-8 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<div>
<div className="text-base font-medium text-gray-900 tracking-tight mb-2">xeus — eXtended Evolution for Universal Systems</div>
<div className="text-xs text-gray-500">International Governance Interface</div>
</div>
<div className="text-right md:text-right text-xs text-gray-400 space-y-1">
<p>Pre-Institutional Draft v0.1</p>
<p>Published for reference and policy alignment</p>
</div>
</div>
</div>
</footer>

    </>
  );
}
