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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<span className="bg-indigo-50 text-indigo-600 w-8 h-8 flex items-center justify-center rounded-lg border border-indigo-100">
                    D
                </span>
                DR. PARVEENS
            </a>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#book">
                Book Consultation
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute top-10 right-1/4 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
</div>
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Accepting New Clients</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Feeling overwhelmed, stuck, or emotionally drained?
            </h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
                Talk to a licensed psychotherapist — free for 15 minutes. A safe, confidential conversation with Dr. Parveens, supporting individuals for over 27 years.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-900 px-8 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 shadow-lg shadow-slate-200" href="#book">
<iconify-icon className="text-slate-300 group-hover:text-white transition-colors" height="18" icon="solar:calendar-add-linear" width="18"></iconify-icon>
                    Book Your Free 15-Minute Consultation
                </a>
<div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
<span>No pressure. No obligation. Completely confidential.</span>
</div>
</div>
</div>
</header>

<section className="py-20 px-6 bg-white border-y border-slate-100">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
                        You don’t have to be <span className="text-slate-400">“at your worst”</span> to seek support.
                    </h2>
<p className="text-base text-slate-500 leading-relaxed">
                        Many people wait until they are breaking point. But clarity comes sooner when you reach out. Whether you are dealing with burnout, relationship challenges, or simply feel "off," this call is a safe starting point.
                    </p>
</div>
<div className="grid gap-4">

<div className="group flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:border-slate-200 hover:shadow-sm">
<div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-indigo-500 shadow-sm shrink-0">
<iconify-icon icon="solar:battery-charge-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Mentally exhausted</h3>
<p className="text-sm text-slate-500 mt-1">Feeling emotionally overwhelmed or burned out.</p>
</div>
</div>

<div className="group flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:border-slate-200 hover:shadow-sm">
<div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-indigo-500 shadow-sm shrink-0">
<iconify-icon icon="solar:confounded-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Anxious or Stressed</h3>
<p className="text-sm text-slate-500 mt-1">Constantly on edge, carrying unresolved trauma or life stress.</p>
</div>
</div>

<div className="group flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:border-slate-200 hover:shadow-sm">
<div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-indigo-500 shadow-sm shrink-0">
<iconify-icon icon="solar:question-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Unsure about therapy?</h3>
<p className="text-sm text-slate-500 mt-1">Stuck in patterns or wondering if this is the right next step.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">The Process</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mt-2">What You’ll Get in This 15-Minute Call</h2>
<p className="text-slate-500 mt-4 max-w-xl mx-auto">This free call helps you gain clarity, direction, and peace of mind — even if you’re just exploring your options.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
<div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:lock-keyhole-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Confidential Space</h3>
<p className="text-sm text-slate-500">A private conversation to briefly share what you are going through without judgment.</p>
</div>

<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
<div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:lightbulb-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Professional Insight</h3>
<p className="text-sm text-slate-500">Guidance on whether therapy or hypnotherapy may help your specific situation.</p>
</div>

<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
<div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:map-arrow-right-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Clear Next Steps</h3>
<p className="text-sm text-slate-500">Actionable advice on how to proceed, with absolutely no pressure to continue.</p>
</div>
</div>
<div className="mt-12 p-6 bg-slate-100 rounded-xl border border-slate-200 flex gap-4 items-start">
<iconify-icon className="text-slate-500 shrink-0 mt-0.5" icon="solar:info-circle-linear" width="24"></iconify-icon>
<div className="text-sm text-slate-600">
<span className="font-semibold text-slate-900 block mb-1">Important Note</span>
                    This is not a therapy session, but a clarity and suitability consultation to ensure we are the right fit for your needs.
                </div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-slate-300">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 mb-6">
<span className="h-px w-8 bg-indigo-400"></span>
<span className="text-sm font-medium text-indigo-400 uppercase tracking-widest">About Dr. Parveens</span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-6">
                    Experienced care rooted in empathy, evidence, and 27+ years of practice.
                </h2>
<div className="space-y-6 text-slate-400 leading-relaxed text-sm md:text-base">
<p>
                        Dr. Parveens is a Licensed Psychotherapist (MAPsyGP) and Professional Clinical Hypnotherapist with over 27 years of experience across counselling, higher education, research, and community mental health.
                    </p>
<p>
                        As the former Head of Counselling Unit at university level, she has led mental health initiatives, safeguarding policies, and multidisciplinary collaborations. Her work is deeply rooted in supporting diverse populations including university students, women, youth, and vulnerable communities.
                    </p>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 mt-8">
<li className="flex items-center gap-2 text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Ethical & Professional
                        </li>
<li className="flex items-center gap-2 text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Culturally Responsive
                        </li>
<li className="flex items-center gap-2 text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Trauma-Informed
                        </li>
<li className="flex items-center gap-2 text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Evidence-Based
                        </li>
</ul>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center lg:justify-end">
<div className="relative w-full max-w-md aspect-[4/5] bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col items-center justify-center p-8 text-center">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent"></div>
<div className="w-24 h-24 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-3xl font-serif text-indigo-400 mb-6 relative z-10">
                        DP
                    </div>
<h3 className="text-xl font-semibold text-white relative z-10">Dr. Parveens</h3>
<p className="text-slate-400 text-sm mt-2 relative z-10">Licensed Psychotherapist<br />& Clinical Hypnotherapist</p>
<div className="mt-8 pt-8 border-t border-slate-700 w-full relative z-10">
<div className="text-4xl font-semibold text-white mb-1">27+</div>
<div className="text-xs uppercase tracking-widest text-slate-500">Years Experience</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Why Offer a Free Consultation?</h2>
<p className="text-slate-500 mt-4">Because finding the right therapist matters.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 flex gap-4">
<iconify-icon className="text-indigo-600 shrink-0" icon="solar:user-check-linear" width="24"></iconify-icon>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Check the Fit</h4>
<p className="text-sm text-slate-500 mt-1">See if Dr. Parveens’ approach resonates with you.</p>
</div>
</div>
<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 flex gap-4">
<iconify-icon className="text-indigo-600 shrink-0" icon="solar:question-square-linear" width="24"></iconify-icon>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Ask Questions</h4>
<p className="text-sm text-slate-500 mt-1">Get answers before financially committing to therapy.</p>
</div>
</div>
<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 flex gap-4 md:col-span-2">
<iconify-icon className="text-indigo-600 shrink-0" icon="solar:checklist-minimalistic-linear" width="24"></iconify-icon>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Informed Decisions</h4>
<p className="text-sm text-slate-500 mt-1">Make a confident decision about your next steps. If ongoing support is recommended, available options will be shared — only if appropriate and only if you choose to proceed.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-3xl mx-auto text-center p-8 rounded-3xl bg-indigo-50/50 border border-indigo-100">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Ongoing Support Options</h3>
<p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                While this call is free, ongoing services may include psychotherapy, hypnotherapy, psychoeducation, or wellbeing-focused support programmes tailored to your needs. <span className="font-semibold text-indigo-700">You remain in full control of your choices.</span>
</p>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="book">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-8">
                Take the First Step — Gently.
            </h2>
<div className="flex flex-col items-center gap-6">
<button className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-900 px-10 text-base font-medium text-white transition-all hover:bg-slate-800 hover:scale-105 shadow-xl shadow-slate-200 w-full sm:w-auto">
<iconify-icon icon="solar:calendar-date-linear" width="20"></iconify-icon>
                    Book Your Free 15-Minute Consultation Now
                </button>
<div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500">
<span className="flex items-center gap-1.5"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Confidential</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Professional</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> No Obligation</span>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
<div className="max-w-xs">
<span className="text-sm font-semibold text-slate-900">Dr. Parveens</span>
<p className="text-xs text-slate-500 mt-2">Licensed Psychotherapist (MAPsyGP) & Professional Clinical Hypnotherapist.</p>
</div>
<div className="max-w-md">
<p className="text-[11px] leading-relaxed text-slate-400">
<strong>Disclaimer:</strong> This free consultation is for informational and suitability purposes only and does not replace psychotherapy or emergency mental health care. If you are in immediate distress or danger, please contact your local emergency services immediately.
                </p>
<p className="text-[11px] text-slate-400 mt-4">
                    © 2024 Dr. Parveens. All rights reserved.
                </p>
</div>
</div>
</footer>

    </>
  );
}
