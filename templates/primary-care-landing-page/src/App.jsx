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
      

<nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-blue-600">SOAPNET</span>
</div>

<div className="hidden lg:flex lg:gap-x-10">
<a className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600" href="#challenges">Challenges</a>
<a className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600" href="#features">Features</a>
<a className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600" href="#workflow">Workflow</a>
<a className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600" href="#benefits">Benefits</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden text-sm font-medium text-slate-600 sm:block">Log in</button>
<button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm shadow-blue-200 transition-all hover:bg-blue-700">Request Demo</button>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 mb-6">
                        Designed for Primary Care Providers
                    </div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl leading-tight">
                        AI-Powered <span className="text-blue-600">SOAP Notes</span> for Primary Care
                    </h1>
<p className="mt-6 text-lg leading-8 text-slate-600">
                        Reduce documentation time and focus more on patient care with AI-generated SOAP notes. Transform clinical conversations into structured medical records instantly.
                    </p>
<div className="mt-10 flex flex-wrap items-center gap-6">
<button className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700">Request Demo</button>
<button className="flex items-center gap-2 text-sm font-medium text-slate-900">
                            Learn More <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="relative lg:ml-auto">
<div className="relative rounded-2xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10">
<div className="glass-card rounded-xl p-6 shadow-2xl">
<div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-900">Patient: John Doe</p>
<p className="text-[10px] text-slate-400">Encounter ID: #88219</p>
</div>
</div>
<div className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-700 border border-green-100">AI Active</div>
</div>
<div className="space-y-4">
<div className="space-y-1">
<p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">Subjective</p>
<p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2 rounded">Patient reports constant fatigue and mild hypertension over the last 3 weeks...</p>
</div>
<div className="space-y-1">
<p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">Objective</p>
<div className="h-2 w-3/4 bg-slate-100 rounded"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded"></div>
</div>
<div className="space-y-1">
<p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">Plan</p>
<div className="h-2 w-full bg-slate-100 rounded"></div>
</div>
</div>
<div className="mt-6 flex justify-end gap-2">
<div className="h-8 w-24 rounded-lg border border-slate-200 bg-white"></div>
<div className="h-8 w-24 rounded-lg bg-blue-600"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="challenges">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16">
<h2 className="text-sm font-semibold leading-7 text-blue-600 uppercase tracking-widest">The Problem</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Challenges in Primary Care Documentation</p>
</div>
<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-3xl text-blue-600 mb-6" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-slate-900 mb-3">Hours of Charting</h3>
<p className="text-sm text-slate-500 leading-relaxed">Physicians spend hours daily writing clinical notes long after the clinic has closed.</p>
</div>
<div className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-3xl text-blue-600 mb-6" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-slate-900 mb-3">Physician Burnout</h3>
<p className="text-sm text-slate-500 leading-relaxed">The administrative burden of manual entry is the leading cause of clinical exhaustion.</p>
</div>
<div className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-3xl text-blue-600 mb-6" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-slate-900 mb-3">Missing Details</h3>
<p className="text-sm text-slate-500 leading-relaxed">Focusing on typing during a visit leads to missing critical patient cues and symptoms.</p>
</div>
<div className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-3xl text-blue-600 mb-6" icon="solar:graph-down-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-slate-900 mb-3">Inefficient Workflow</h3>
<p className="text-sm text-slate-500 leading-relaxed">Traditional EMR data entry disrupts the natural flow and rhythm of patient care.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16">
<h2 className="text-sm font-semibold leading-7 text-blue-600 uppercase tracking-widest">Capabilities</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">SOAPnet Features for Primary Care</p>
</div>
<div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
<div className="flex flex-col gap-4 p-6 rounded-2xl transition-all hover:bg-slate-50">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">AI-generated SOAP Notes</h4>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">Ambiently listen to visits and instantly receive a structured SOAP draft.</p>
</div>
</div>
<div className="flex flex-col gap-4 p-6 rounded-2xl transition-all hover:bg-slate-50">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:microphone-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Voice-to-text Capture</h4>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">High-fidelity audio processing optimized for medical terminology and jargon.</p>
</div>
</div>
<div className="flex flex-col gap-4 p-6 rounded-2xl transition-all hover:bg-slate-50">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Real-time Documentation</h4>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">Review documentation seconds after the patient encounter ends.</p>
</div>
</div>
<div className="flex flex-col gap-4 p-6 rounded-2xl transition-all hover:bg-slate-50">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Structured Generation</h4>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">Ensures every note follows clinical guidelines and specific clinic templates.</p>
</div>
</div>
<div className="flex flex-col gap-4 p-6 rounded-2xl transition-all hover:bg-slate-50">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">HIPAA Compliant</h4>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">Enterprise-grade encryption and privacy controls to protect patient data.</p>
</div>
</div>
<div className="flex flex-col gap-4 p-6 rounded-2xl transition-all hover:bg-slate-50">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Direct EHR Export</h4>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">Seamlessly sync your finished notes with major EHR platforms.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="workflow">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-20">
<h2 className="text-sm font-semibold leading-7 text-blue-600 uppercase tracking-widest">The Process</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">How SOAPnet Works</p>
</div>
<div className="relative">

<div className="absolute left-1/2 top-0 h-full w-px bg-blue-100 -translate-x-1/2 hidden lg:block"></div>
<div className="space-y-24">

<div className="relative flex flex-col items-center lg:flex-row lg:justify-between lg:items-start group">
<div className="lg:w-[45%] lg:text-right order-2 lg:order-1 mt-6 lg:mt-0">
<h5 className="text-lg font-semibold text-slate-900">Record encounter</h5>
<p className="mt-2 text-sm text-slate-500">Enable ambient recording during the patient visit. SOAPnet captures the conversation without getting in the way.</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold z-10 shadow-lg shadow-blue-200 order-1 lg:order-2">1</div>
<div className="lg:w-[45%] order-3"></div>
</div>

<div className="relative flex flex-col items-center lg:flex-row lg:justify-between lg:items-start group">
<div className="lg:w-[45%] order-3 lg:order-1"></div>
<div className="absolute left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold z-10 shadow-lg shadow-blue-200 order-1 lg:order-2">2</div>
<div className="lg:w-[45%] text-left order-2 lg:order-3 mt-6 lg:mt-0">
<h5 className="text-lg font-semibold text-slate-900">AI automatically generates notes</h5>
<p className="mt-2 text-sm text-slate-500">Our medical-specific LLM processes the audio into Subjective, Objective, Assessment, and Plan components.</p>
</div>
</div>

<div className="relative flex flex-col items-center lg:flex-row lg:justify-between lg:items-start group">
<div className="lg:w-[45%] lg:text-right order-2 lg:order-1 mt-6 lg:mt-0">
<h5 className="text-lg font-semibold text-slate-900">Review and edit</h5>
<p className="mt-2 text-sm text-slate-500">Quickly scan and refine the draft. The AI learns from your corrections to improve future notes.</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold z-10 shadow-lg shadow-blue-200 order-1 lg:order-2">3</div>
<div className="lg:w-[45%] order-3"></div>
</div>

<div className="relative flex flex-col items-center lg:flex-row lg:justify-between lg:items-start group">
<div className="lg:w-[45%] order-3 lg:order-1"></div>
<div className="absolute left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold z-10 shadow-lg shadow-blue-200 order-1 lg:order-2">4</div>
<div className="lg:w-[45%] text-left order-2 lg:order-3 mt-6 lg:mt-0">
<h5 className="text-lg font-semibold text-slate-900">Save to EHR system</h5>
<p className="mt-2 text-sm text-slate-500">Export finalized notes directly to the patient's record with a single click, completing the documentation cycle.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="benefits">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16">
<h2 className="text-sm font-semibold leading-7 text-blue-600 uppercase tracking-widest">Outcomes</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Benefits for Primary Care Teams</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 flex gap-6">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-200">
<iconify-icon icon="solar:stopwatch-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h5 className="font-semibold text-slate-900">Save Hours Daily</h5>
<p className="mt-2 text-sm text-slate-600 leading-relaxed">Reduce charting time by up to 80% per patient visit.</p>
</div>
</div>
<div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 flex gap-6">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-200">
<iconify-icon icon="solar:checklist-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h5 className="font-semibold text-slate-900">Clinical Accuracy</h5>
<p className="mt-2 text-sm text-slate-600 leading-relaxed">Eliminate memory-based charting and catch critical details easily.</p>
</div>
</div>
<div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 flex gap-6">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-200">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h5 className="font-semibold text-slate-900">Patient Connection</h5>
<p className="mt-2 text-sm text-slate-600 leading-relaxed">Increase eye contact and meaningful interaction time with patients.</p>
</div>
</div>
<div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 flex gap-6">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-200">
<iconify-icon icon="solar:user-speak-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h5 className="font-semibold text-slate-900">Halt Burnout</h5>
<p className="mt-2 text-sm text-slate-600 leading-relaxed">Reclaim your evenings and improve the quality of clinical life.</p>
</div>
</div>
<div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 flex gap-6">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-200">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h5 className="font-semibold text-slate-900">Streamlined Ops</h5>
<p className="mt-2 text-sm text-slate-600 leading-relaxed">Accelerate the transition from encounter to final sign-off.</p>
</div>
</div>
<div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 flex gap-6">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-200">
<iconify-icon icon="solar:banknote-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h5 className="font-semibold text-slate-900">Higher ROI</h5>
<p className="mt-2 text-sm text-slate-600 leading-relaxed">Optimize coding accuracy and increase clinic throughput.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="relative isolate overflow-hidden bg-slate-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
<h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Transform Your Primary Care Documentation</h2>
<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
                    Join the future of clinical medicine. Spend less time at a keyboard and more time with the people who need you.
                </p>
<div className="mt-10 flex items-center justify-center gap-x-6">
<button className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-blue-500 transition-all">Request Demo</button>
<button className="text-sm font-medium leading-6 text-white flex items-center gap-2">Contact Sales <span aria-hidden="true">→</span></button>
</div>

<svg aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" viewbox="0 0 1024 1024">
<circle cx="512" cy="512" fill="url(#gradient)" fillOpacity="0.25" r="512"></circle>
<defs>
<radialgradient id="gradient">
<stop stop-color="#2563eb"></stop>
<stop offset="1" stop-color="#1e40af"></stop>
</radialgradient>
</defs>
</svg>
</div>
</div>
</section>

<footer className="border-t border-slate-100 bg-white py-12">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-blue-600">SOAPNET</span>
</div>
<p className="text-xs text-slate-500 italic">HIPAA Compliant • SOC2 Certified • SOC3 Ready</p>
<div className="flex gap-8">
<a className="text-xs text-slate-500 hover:text-blue-600" href="#">Privacy Policy</a>
<a className="text-xs text-slate-500 hover:text-blue-600" href="#">Terms of Service</a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-50 text-center">
<p className="text-xs text-slate-400">© 2024 SOAPnet Medical AI. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
