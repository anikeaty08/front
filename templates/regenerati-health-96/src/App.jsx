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
      

<header className="fixed top-0 w-full z-50 bg-[#FDFCF8]/90 backdrop-blur-sm border-b border-[#E5E5E0]">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="text-sm tracking-[0.2em] font-semibold uppercase text-stone-900">Sohma House</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs tracking-wide text-stone-500 uppercase font-medium">
<span>Cairns, QLD</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span>Est. 2026</span>
</div>
<button className="border border-[#E5E5E0] px-4 py-2 rounded-full text-xs uppercase tracking-wider hover:bg-stone-100 transition-colors duration-300">
                Patient Portal
            </button>
</div>
</header>
<main className="pt-32 pb-24 px-6 max-w-6xl mx-auto">

<section className="fade-in mb-24 border-b border-[#E5E5E0] pb-16">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
<div className="max-w-3xl">
<span className="inline-block mb-4 text-xs font-medium tracking-widest text-stone-500 uppercase">Whitepaper</span>
<h1 className="text-5xl md:text-7xl font-light tracking-tight text-stone-900 leading-[0.95] mb-6 serif">
                        The Regenerative<br/>
<i className="font-light text-stone-500">Health Ecology</i>
</h1>
<p className="text-lg md:text-xl text-stone-600 font-light max-w-2xl leading-relaxed">
                        An integrative model for multidisciplinary practice, coherence, and clinical stewardship.
                    </p>
</div>
<div className="flex flex-col items-start md:items-end gap-2 text-right">
<div className="text-xs text-stone-400 uppercase tracking-widest mb-1">Authored By</div>
<div className="text-sm font-medium text-stone-800">Cameron Rosin, RN</div>
<div className="text-xs text-stone-500">Specialist Cannabis Nurse</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-8 border-t border-[#E5E5E0]">
<div>
<span className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Launch</span>
<span className="block text-sm font-medium">February 17, 2026</span>
</div>
<div>
<span className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Focus</span>
<span className="block text-sm font-medium">Systemic Coherence</span>
</div>
<div>
<span className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Model</span>
<span className="block text-sm font-medium">Ecosoma Stewardship</span>
</div>
<div>
<span className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Status</span>
<span className="block text-sm font-medium flex items-center gap-2">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        Active Design
                    </span>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
<div className="md:col-span-4 sticky top-24 self-start">
<h2 className="text-2xl font-light tracking-tight mb-4 serif">From Fragmented Services to Living Ecologies</h2>
<span className="iconify text-stone-300 w-8 h-8" data-icon="lucide:sprout" data-strokeWidth="1.5"></span>
</div>
<div className="md:col-span-8 space-y-8 text-stone-600 leading-relaxed font-light text-base md:text-lg">
<p>
                    Across contemporary healthcare, the pattern repeats. A building is full of highly qualified professionals, yet the experience of care feels scattered. Patients tell their story multiple times. Practitioners work beside each other rather than with each other. Systems are either over-simplified or so complex that no one can perceive the whole.
                </p>
<p>
                    The <strong className="text-stone-900 font-medium">Regenerative Health Ecology (RHE)</strong> arises as a structural and philosophical response to this problem. It treats a clinic or health collective as a living ecosystem rather than a tenancy list.
                </p>
<div className="bg-stone-50 p-8 border border-[#E5E5E0] rounded-sm my-8">
<h3 className="text-sm uppercase tracking-widest text-stone-500 mb-6 font-medium">Core Objectives</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify mt-1 text-stone-400 min-w-[1.25rem]" data-icon="lucide:check" data-strokeWidth="1.5"></span>
<span>Complexity is acknowledged rather than denied.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify mt-1 text-stone-400 min-w-[1.25rem]" data-icon="lucide:check" data-strokeWidth="1.5"></span>
<span>Responsibility is distributed rather than dumped on a single profession.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify mt-1 text-stone-400 min-w-[1.25rem]" data-icon="lucide:check" data-strokeWidth="1.5"></span>
<span>Boundaries are clear, humane and intelligent.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="mb-32">
<div className="mb-12 border-b border-[#E5E5E0] pb-6 flex justify-between items-end">
<h2 className="text-3xl font-light tracking-tight serif">Core Architecture</h2>
<span className="hidden md:block text-xs text-stone-400 uppercase tracking-widest">System Design</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group hover:bg-stone-50 transition-colors duration-500 p-6 border border-[#E5E5E0] rounded-sm">
<div className="mb-6 flex justify-between items-start">
<span className="iconify text-stone-400 w-6 h-6 group-hover:text-stone-800 transition-colors" data-icon="lucide:orbit" data-strokeWidth="1.5"></span>
<span className="text-xs text-stone-300 font-mono">01</span>
</div>
<h3 className="text-xl serif font-medium mb-3 tracking-tight text-stone-800">Gravitational Coherence</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Traditional vertical hierarchy is replaced with gravitational coherence. The doctor acts as a keystone species—providing diagnostic, regulatory, and pharmacological mass that keeps the system stable, allowing high autonomy for allied health within a safety envelope.
                    </p>
</div>

<div className="group hover:bg-stone-50 transition-colors duration-500 p-6 border border-[#E5E5E0] rounded-sm">
<div className="mb-6 flex justify-between items-start">
<span className="iconify text-stone-400 w-6 h-6 group-hover:text-stone-800 transition-colors" data-icon="lucide:flower-2" data-strokeWidth="1.5"></span>
<span className="text-xs text-stone-300 font-mono">02</span>
</div>
<h3 className="text-xl serif font-medium mb-3 tracking-tight text-stone-800">The Ecosoma Field</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        The patient is an Ecosoma—an indivisible psycho-neuro-immuno-somatic field. Cannabis and agents are non-neutral modulators dependent on timing, dosage, and somatic readiness. Single-modality interventions are never treated as sufficient.
                    </p>
</div>

<div className="group hover:bg-stone-50 transition-colors duration-500 p-6 border border-[#E5E5E0] rounded-sm">
<div className="mb-6 flex justify-between items-start">
<span className="iconify text-stone-400 w-6 h-6 group-hover:text-stone-800 transition-colors" data-icon="lucide:network" data-strokeWidth="1.5"></span>
<span className="text-xs text-stone-300 font-mono">03</span>
</div>
<h3 className="text-xl serif font-medium mb-3 tracking-tight text-stone-800">Digital Nervous System</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Shared clinical records, outcome measures, and analytics allow the keystone doctor and senior clinicians to see emergent patterns rather than isolated transactions, anchoring decisions in shared information instead of anecdote.
                    </p>
</div>
</div>
</section>

<section className="mb-32">
<div className="mb-16 text-center max-w-2xl mx-auto">
<span className="text-xs text-stone-400 uppercase tracking-[0.2em] mb-3 block">Functional Map</span>
<h2 className="text-4xl font-light tracking-tight serif mb-6">Roles within the Ecology</h2>
<p className="text-stone-500 font-light">The RHE clarifies contribution and boundary so that collaboration becomes easier, not harder.</p>
</div>
<div className="space-y-12">

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#E5E5E0] pt-8">
<div className="md:col-span-4">
<div className="flex items-center gap-3 mb-2">
<span className="iconify text-stone-800" data-icon="lucide:shield-check" data-strokeWidth="1.5"></span>
<h3 className="text-xl serif font-medium tracking-tight">The Doctor</h3>
</div>
<p className="text-sm text-stone-400 uppercase tracking-wider pl-7">Keystone &amp; Boundary Anchor</p>
</div>
<div className="md:col-span-4">
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Key Functions</h4>
<ul className="text-sm text-stone-600 space-y-3 list-disc list-outside ml-4 marker:text-stone-300">
<li>Holds diagnostic depth for catastrophic pathology.</li>
<li>Carries regulatory authority for high-risk prescribing.</li>
<li>Defines safety envelope for the ecology.</li>
<li>Systemic interpreter between biomedical and somatic frames.</li>
</ul>
</div>
<div className="md:col-span-4 bg-stone-50 p-6 rounded-sm border border-stone-100">
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2 opacity-50">Operational Note</h4>
<p className="text-sm text-stone-500 italic leading-relaxed">
                            Their work is periodic and high-leverage rather than constant. They mentor and steward the ecosystem rather than attempting to substitute for it.
                        </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#E5E5E0] pt-8">
<div className="md:col-span-4">
<div className="flex items-center gap-3 mb-2">
<span className="iconify text-stone-800" data-icon="lucide:heart-pulse" data-strokeWidth="1.5"></span>
<h3 className="text-xl serif font-medium tracking-tight">Nurses</h3>
</div>
<p className="text-sm text-stone-400 uppercase tracking-wider pl-7">Care Coordinators</p>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<ul className="text-sm text-stone-600 space-y-3 list-disc list-outside ml-4 marker:text-stone-300">
<li>Intake, triage and longitudinal relationship.</li>
<li>Education on cannabis, medications and self-regulation.</li>
<li>Ongoing symptom monitoring and titration support.</li>
</ul>
</div>
<div className="text-sm text-stone-500 leading-relaxed">
                            Nurses carry much of the logistical anxiety, repetition and day-to-day holding that would otherwise crush medical consults.
                        </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#E5E5E0] pt-8">
<div className="md:col-span-4">
<div className="flex items-center gap-3 mb-2">
<span className="iconify text-stone-800" data-icon="lucide:brain-circuit" data-strokeWidth="1.5"></span>
<h3 className="text-xl serif font-medium tracking-tight">Psychologists</h3>
</div>
<p className="text-sm text-stone-400 uppercase tracking-wider pl-7">Architects of Meaning</p>
</div>
<div className="md:col-span-4">
<ul className="text-sm text-stone-600 space-y-3 list-disc list-outside ml-4 marker:text-stone-300">
<li>Assessment of mood, anxiety, and trauma dynamics.</li>
<li>Evidence-based therapies (CBT, ACT, EMDR) integrated with ecological awareness.</li>
<li>Narrative mapping for experiences catalysed by medicines.</li>
</ul>
</div>
<div className="md:col-span-4">
<div className="border-l-2 border-stone-200 pl-4 py-1">
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2">Boundary</h4>
<p className="text-sm text-stone-500">
                                Do not prescribe, but inform the doctor about psychological readiness and affect tolerance which shape timing of medicinal interventions.
                            </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#E5E5E0] pt-8">
<div className="md:col-span-4">
<div className="flex items-center gap-3 mb-2">
<span className="iconify text-stone-800" data-icon="lucide:waves" data-strokeWidth="1.5"></span>
<h3 className="text-xl serif font-medium tracking-tight">Somatic Therapists</h3>
</div>
<p className="text-sm text-stone-400 uppercase tracking-wider pl-7">Stewards of Interoception</p>
</div>
<div className="md:col-span-4">
<ul className="text-sm text-stone-600 space-y-3 list-disc list-outside ml-4 marker:text-stone-300">
<li>Guiding interoceptive literacy and nervous system awareness.</li>
<li>Supporting discharge of held survival responses.</li>
<li>Co-regulation to stabilise dysregulated states.</li>
</ul>
</div>
<div className="md:col-span-4">
<div className="border-l-2 border-stone-200 pl-4 py-1">
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2">Boundary</h4>
<p className="text-sm text-stone-500">
                                Do not assume medical diagnostic authority. Escalate concerns when trauma material is beyond what can be held in a body-based frame.
                            </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#E5E5E0] pt-8">
<div className="md:col-span-4">
<div className="flex items-center gap-3 mb-2">
<span className="iconify text-stone-800" data-icon="lucide:activity" data-strokeWidth="1.5"></span>
<h3 className="text-xl serif font-medium tracking-tight">Physiotherapists</h3>
</div>
<p className="text-sm text-stone-400 uppercase tracking-wider pl-7">Movement Ecologists</p>
</div>
<div className="md:col-span-4">
<ul className="text-sm text-stone-600 space-y-3 list-disc list-outside ml-4 marker:text-stone-300">
<li>Assessment of biomechanical patterns and load distribution.</li>
<li>Translation of pain narratives into actionable movement plans.</li>
<li>Design of graded exposure protocols synchronised with pharmacology.</li>
</ul>
</div>
<div className="md:col-span-4">
<div className="border-l-2 border-stone-200 pl-4 py-1">
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2">Boundary</h4>
<p className="text-sm text-stone-500">
                                Do not enter psychotherapy. Informed by the pharmacological envelope (e.g. adjusting load around sedating side effects).
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border border-[#E5E5E0] p-8 md:p-16 rounded-sm mb-32 relative overflow-hidden">
<div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
<span className="iconify w-96 h-96" data-icon="lucide:layers" data-strokeWidth="1"></span>
</div>
<div className="relative z-10">
<h2 className="text-3xl font-light tracking-tight serif mb-8">Plug-In Pathways</h2>
<p className="text-stone-600 font-light mb-12 max-w-3xl text-lg">
                    The Regenerative Health Ecology can be introduced as a framework overlay rather than a demand to rebuild everything from scratch.
                </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-xs font-mono mb-4 text-stone-500">01</div>
<h3 className="font-medium text-stone-900 mb-2">Philosophical Alignment</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                            Agreement that the goal is coherent, regenerative outcomes. Clarification of the doctor's role as a stabilising function, not authoritarian hierarchy.
                        </p>
</div>
<div>
<div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-xs font-mono mb-4 text-stone-500">02</div>
<h3 className="font-medium text-stone-900 mb-2">Minimal Viable Infrastructure</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                            Shared summary pages, common language for flags/risks, and basic analytics to view patterns across the ecology.
                        </p>
</div>
<div>
<div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-xs font-mono mb-4 text-stone-500">03</div>
<h3 className="font-medium text-stone-900 mb-2">Governance Rhythm</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                            Monthly interdisciplinary case rounds, clear escalation protocols, and structured pre-screening/integration for experiential work.
                        </p>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto text-center mb-24">
<span className="iconify inline-block w-10 h-10 text-stone-300 mb-6" data-icon="lucide:mountain-snow" data-strokeWidth="1"></span>
<h2 className="text-3xl md:text-5xl font-light tracking-tight serif text-stone-900 mb-8 leading-tight">
                From Clinic as Building<br/>
<i className="text-stone-500">to Clinic as Biome</i>
</h2>
<p className="text-lg text-stone-600 font-light leading-relaxed mb-12">
                The Regenerative Health Ecology is not a slogan. It is an operating system. To treat health as something that emerges from relationship and ecology, rather than from isolated acts, is to treat each practitioner, each patient and each building as part of a wider living system.
            </p>
<div className="flex justify-center gap-4">
<button className="bg-stone-800 text-stone-50 hover:bg-stone-700 transition-colors px-8 py-3 rounded-full text-xs uppercase tracking-widest font-medium">
                    Inquire for Governance
                </button>
</div>
</section>
</main>

<footer className="border-t border-[#E5E5E0] bg-[#FDFCF8] py-16">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<span className="text-sm tracking-[0.2em] font-semibold uppercase text-stone-900 block mb-6">Sohma House</span>
<p className="text-stone-500 text-sm max-w-xs font-light">
                    Medicine House &amp; Clinical Governance.<br/>
                    Cairns, Queensland.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Ecology</h4>
<ul className="space-y-2 text-sm text-stone-500 font-light">
<li><a className="hover:text-stone-800 transition-colors" href="#">Philosophy</a></li>
<li><a className="hover:text-stone-800 transition-colors" href="#">Architecture</a></li>
<li><a className="hover:text-stone-800 transition-colors" href="#">Roles</a></li>
<li><a className="hover:text-stone-800 transition-colors" href="#">Integration</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Connect</h4>
<ul className="space-y-2 text-sm text-stone-500 font-light">
<li><a className="hover:text-stone-800 transition-colors" href="#">Practitioner Application</a></li>
<li><a className="hover:text-stone-800 transition-colors" href="#">Patient Portal</a></li>
<li><a className="hover:text-stone-800 transition-colors" href="#">Research</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-[#E5E5E0] flex flex-col md:flex-row justify-between items-center text-xs text-stone-400">
<span>© 2026 Sohma House. All rights reserved.</span>
<div className="flex gap-6 mt-4 md:mt-0">
<span>Privacy Policy</span>
<span>Clinical Governance Framework</span>
</div>
</div>
</footer>

    </>
  );
}
