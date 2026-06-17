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
850: '#152033', // Deep Navy
900: '#0f172a',
},
teal: {
50: '#f0fdfa',
500: '#14b8a6',
600: '#0d9488', // Medical Teal
700: '#0f766e',
900: '#134e4a',
}
}
}
}
};

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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-grid-slate">
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-teal-100/40 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px]"></div>
</div>

<main className="glass-panel w-full max-w-[1280px] relative z-10 lg:my-8 lg:rounded-[2rem] lg:border lg:border-white lg:shadow-2xl overflow-hidden animate-fade-scale">

<nav className="w-full flex items-center justify-between px-6 py-6 lg:px-10 lg:py-8 border-b border-slate-100/50 backdrop-blur-md sticky top-0 z-50 bg-white/80">

<a className="flex items-center gap-2 group" href="#">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-850 text-white shadow-md transition-transform group-hover:scale-105">
<span className="iconify" data-icon="lucide:activity" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900">YesOnus</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-slate-900 transition-colors" href="#what-you-get">What You Get</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 bg-slate-850 hover:bg-slate-700 text-white text-xs font-medium py-2.5 px-5 rounded-lg transition-all shadow-sm" href="https://tally.so/r/XXXXXX">
                    Request a Preflight
                </a>
</div>
</nav>

<section className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 px-6 lg:px-12 border-b border-slate-100">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col gap-6 animate-fade-up delay-100">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 w-fit">
<span className="w-2 h-2 rounded-full bg-teal-500"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Built for OMFS &amp; Surgical Perio</span>
</div>
<h1 className="text-4xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                        Turn surgical treatment plans into <span className="text-teal-600">Case-Ready</span> Evidence Packs—fast.
                    </h1>
<p className="text-lg font-light text-slate-500 leading-relaxed max-w-xl">
                        Upload a plan. We return readiness, a visible next blocker, and a clean Evidence Pack so cases stop bouncing back.
                    </p>
<p className="text-xs font-medium text-slate-400 tracking-wide uppercase">
                        No PMS integration. No payment promises. Readiness only.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex items-center justify-center gap-2 bg-slate-850 hover:bg-slate-700 text-white text-sm font-medium py-3 px-6 rounded-lg shadow-lg shadow-slate-200 transition-all hover:-translate-y-0.5" href="https://tally.so/r/XXXXXX">
                            Request a Preflight
                        </a>
<a className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium py-3 px-6 rounded-lg transition-all" href="#what-you-get">
<span className="iconify" data-icon="lucide:file-check-2" data-width="16"></span>
                            See a Case-Ready Example
                        </a>
</div>
</div>

<div className="lg:col-span-5 relative h-full min-h-[400px] w-full flex items-center justify-center perspective-1000 animate-fade-scale delay-300">

<div className="absolute inset-0 bg-teal-50/50 rounded-full blur-3xl transform translate-x-10 translate-y-10 opacity-60"></div>

<div className="relative w-full max-w-md bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden animate-float">

<div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
<span className="iconify" data-icon="lucide:folder-heart" data-width="16"></span>
</div>
<div>
<div className="h-2 w-20 bg-slate-200 rounded mb-1"></div>
<div className="h-1.5 w-12 bg-slate-100 rounded"></div>
</div>
</div>
<span className="bg-teal-50 text-teal-700 text-[10px] font-semibold px-2 py-1 rounded border border-teal-100">CASE-READY</span>
</div>

<div className="p-6 space-y-4">

<div className="flex items-start gap-3">
<div className="mt-0.5 text-teal-500">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="18"></span>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<div className="h-2.5 w-32 bg-slate-800 rounded opacity-80"></div>
<div className="h-2.5 w-10 bg-slate-200 rounded"></div>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded"></div>
</div>
</div>

<div className="flex items-start gap-3">
<div className="mt-0.5 text-teal-500">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="18"></span>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<div className="h-2.5 w-24 bg-slate-800 rounded opacity-60"></div>
<div className="h-2.5 w-10 bg-slate-200 rounded"></div>
</div>
<div className="h-1.5 w-3/4 bg-slate-100 rounded"></div>
</div>
</div>

<div className="mt-4 bg-slate-50 rounded-lg p-3 border border-slate-100 flex items-center gap-3">
<div className="w-8 h-10 bg-white border border-slate-200 rounded flex items-center justify-center shadow-sm">
<span className="iconify text-red-400" data-icon="lucide:file-warning" data-width="16"></span>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-slate-700">Next Blocker Resolved</p>
<p className="text-[10px] text-slate-400">Pathology Report Attached</p>
</div>
<div className="text-teal-600">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</div>
</div>
</div>

<div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex gap-3">
<div className="h-8 flex-1 bg-slate-850 rounded-md opacity-90 shadow-sm"></div>
<div className="h-8 w-8 bg-white border border-slate-200 rounded-md"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-slate-100 bg-white/50">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 relative">

<div className="flex flex-col items-center gap-3 text-center z-10">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400">
<span className="iconify" data-icon="lucide:upload-cloud" data-width="20"></span>
</div>
<span className="text-xs font-medium text-slate-600">Treatment Plan<br/>Upload</span>
</div>

<div className="hidden md:flex flex-1 h-px bg-slate-200 mx-4 relative top-[-14px]">
<div className="absolute right-0 top-[-5px] text-slate-300">
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
</div>
</div>
<div className="md:hidden text-slate-300 my-2 transform rotate-90">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</div>

<div className="flex flex-col items-center gap-3 text-center z-10">
<div className="w-12 h-12 rounded-full bg-teal-50 border border-teal-100 shadow-sm flex items-center justify-center text-teal-600 relative">
<span className="iconify" data-icon="lucide:scan-search" data-width="20"></span>
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
</span>
</div>
<span className="text-xs font-semibold text-teal-700">Case-Ready<br/>Preflight</span>
</div>

<div className="hidden md:flex flex-1 h-px bg-slate-200 mx-4 relative top-[-14px]">
<div className="absolute right-0 top-[-5px] text-slate-300">
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
</div>
</div>
<div className="md:hidden text-slate-300 my-2 transform rotate-90">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</div>

<div className="flex flex-col items-center gap-3 text-center z-10">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400">
<span className="iconify" data-icon="lucide:package-check" data-width="20"></span>
</div>
<span className="text-xs font-medium text-slate-600">Evidence Pack<br/>Export</span>
</div>

<div className="hidden md:flex flex-1 h-px bg-slate-200 mx-4 relative top-[-14px]">
<div className="absolute right-0 top-[-5px] text-slate-300">
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
</div>
</div>
<div className="md:hidden text-slate-300 my-2 transform rotate-90">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</div>

<div className="flex flex-col items-center gap-3 text-center z-10">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<span className="text-xs font-medium text-slate-600">Review<br/>Lane</span>
</div>
</div>
<div className="text-center mt-10">
<p className="text-sm text-slate-500 bg-slate-50 inline-block px-4 py-2 rounded-full border border-slate-100">
                        We make the next blocker obvious, then produce a pack your team can hand off.
                    </p>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-12" id="what-you-get">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12 text-center">Artifacts delivered per case</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:alert-circle" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Next Blocker (Visible)</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            The single missing item preventing review—so staff stops guessing and surgeons stop getting interrupted.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:receipt" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Preflight Receipt (PDF)</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Timestamped log of what’s complete, what was triggered, what’s missing, who reviewed it, and when.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="iconify" data-icon="lucide:folder-check" data-width="100"></span>
</div>
<div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
<span className="iconify" data-icon="lucide:folder-output" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 relative z-10">Evidence Pack Export</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10">
                            A clean packet with a manifest and completion log—organized and ready for review.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 lg:px-12 bg-slate-50 border-y border-slate-100" id="how-it-works">
<div className="max-w-4xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="space-y-3">
<span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Step 01</span>
<h4 className="text-lg font-medium text-slate-900">Upload a plan</h4>
<p className="text-sm text-slate-500">Add any supporting docs you already have. No integration required.</p>
</div>
<div className="space-y-3">
<span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Step 02</span>
<h4 className="text-lg font-medium text-slate-900">We preflight to Case-Ready</h4>
<p className="text-sm text-slate-500">Required items + triggered requirements only checked by our team.</p>
</div>
<div className="space-y-3">
<span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Step 03</span>
<h4 className="text-lg font-medium text-slate-900">Receive Pack or Request</h4>
<p className="text-sm text-slate-500">If anything is missing, you’ll see the exact next blocker and top actions.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-850 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
<div className="relative z-10 max-w-2xl mx-auto space-y-6">
<h2 className="text-3xl font-medium tracking-tight text-white">Already have a billing company? <span className="text-teal-400">Perfect.</span></h2>
<p className="text-slate-300 text-lg font-light leading-relaxed">
                    We sit before them—so what reaches billing is Case-Ready, with fewer returns and fewer ‘what’s missing?’ loops.
                </p>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700">
<span className="iconify text-teal-400" data-icon="lucide:lock" data-width="14"></span>
<span className="text-xs text-slate-400 font-medium">We don’t guarantee payment. We guarantee readiness.</span>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-12">
<div className="max-w-5xl mx-auto">
<h2 className="text-center text-2xl font-medium text-slate-900 tracking-tight mb-12">Who this is for</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="p-6 rounded-xl bg-white border border-slate-200 text-center hover:border-teal-200 transition-colors">
<span className="text-teal-600 block mb-3 mx-auto w-fit"><span className="iconify" data-icon="lucide:stethoscope" data-width="24"></span></span>
<h4 className="font-medium text-slate-900">OMFS Surgical Cases</h4>
</div>

<div className="p-6 rounded-xl bg-white border border-slate-200 text-center hover:border-teal-200 transition-colors">
<span className="text-teal-600 block mb-3 mx-auto w-fit"><span className="iconify" data-icon="lucide:bone" data-width="24"></span></span>
<h4 className="font-medium text-slate-900">Surgical Perio</h4>
</div>

<div className="p-6 rounded-xl bg-white border border-slate-200 text-center hover:border-teal-200 transition-colors">
<span className="text-teal-600 block mb-3 mx-auto w-fit"><span className="iconify" data-icon="lucide:users-2" data-width="24"></span></span>
<h4 className="font-medium text-slate-900">Teams tired of rework</h4>
</div>
</div>

<div className="max-w-xl mx-auto text-center">
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Not Supported in V1</p>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-3 py-1.5 bg-slate-100 rounded text-xs text-slate-500">Restorative/Cosmetic</span>
<span className="px-3 py-1.5 bg-slate-100 rounded text-xs text-slate-500">High-volume GP</span>
<span className="px-3 py-1.5 bg-slate-100 rounded text-xs text-slate-500">Non-surgical Perio</span>
<span className="px-3 py-1.5 bg-slate-100 rounded text-xs text-slate-500">Medicaid-only</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-12 bg-slate-50 border-t border-slate-200" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-white p-8 rounded-2xl border border-slate-200">
<h3 className="text-lg font-medium text-slate-900">Free Snapshot</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-medium text-slate-900">$0</span>
</div>
<p className="text-sm text-slate-500 mb-8 min-h-[40px]">Lane + readiness + next blocker. No export. No SLA.</p>
<a className="block w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg text-center transition-colors" href="#">Request Free Snapshot</a>
</div>

<div className="bg-white p-8 rounded-2xl border-2 border-teal-500 shadow-xl relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full">Recommended</div>
<h3 className="text-lg font-medium text-slate-900">Evidence Pack Pro</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-medium text-slate-900">$350</span>
<span className="text-sm text-slate-500">/ case</span>
</div>
<p className="text-sm text-slate-500 mb-8 min-h-[40px]">Evidence Pack export + Preflight Receipt.<br/><strong>Same day / 24 hours.</strong></p>
<a className="block w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-lg text-center transition-colors shadow-md shadow-teal-200" href="#">Request Evidence Pack Pro</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200">
<h3 className="text-lg font-medium text-slate-900">Preflight Review</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-medium text-slate-900">$99</span>
<span className="text-sm text-slate-500">/ case</span>
</div>
<p className="text-sm text-slate-500 mb-8 min-h-[40px]">Validation + top actions.<br/>Next business day.</p>
<a className="block w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg text-center transition-colors" href="#">Request a Review</a>
</div>
</div>
<p className="text-center text-xs text-slate-400 mt-8">Optional submission support available after a case is Case-Ready.</p>
</div>
</section>

<section className="py-20 px-6 lg:px-12" id="faq">
<div className="max-w-3xl mx-auto space-y-6">
<h2 className="text-2xl font-medium text-slate-900 mb-10 text-center">Common Questions</h2>
<div className="border-b border-slate-100 pb-6">
<h4 className="font-medium text-slate-900 mb-2 flex items-center gap-2"><span className="iconify text-teal-500" data-icon="lucide:help-circle" data-width="16"></span> Do you guarantee payment?</h4>
<p className="text-sm text-slate-500 leading-relaxed pl-6">No. We guarantee readiness—clear requirements, clear next blocker, and a clean packet for review.</p>
</div>
<div className="border-b border-slate-100 pb-6">
<h4 className="font-medium text-slate-900 mb-2 flex items-center gap-2"><span className="iconify text-teal-500" data-icon="lucide:help-circle" data-width="16"></span> Do you need our PMS integration?</h4>
<p className="text-sm text-slate-500 leading-relaxed pl-6">No. Upload a plan and supporting docs securely via our portal.</p>
</div>
<div className="border-b border-slate-100 pb-6">
<h4 className="font-medium text-slate-900 mb-2 flex items-center gap-2"><span className="iconify text-teal-500" data-icon="lucide:help-circle" data-width="16"></span> How much staff time does this take?</h4>
<p className="text-sm text-slate-500 leading-relaxed pl-6">One champion. ~15 minutes/week. We only request specific blockers.</p>
</div>
<div className="border-b border-slate-100 pb-6">
<h4 className="font-medium text-slate-900 mb-2 flex items-center gap-2"><span className="iconify text-teal-500" data-icon="lucide:help-circle" data-width="16"></span> How fast is turnaround?</h4>
<p className="text-sm text-slate-500 leading-relaxed pl-6">$99: next business day. $350: same day / 24 hours.</p>
</div>
</div>
</section>

<div className="mx-6 lg:mx-12 mb-16 rounded-[2rem] bg-slate-900 overflow-hidden relative shadow-2xl shadow-slate-900/20 group">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500 via-slate-900 to-slate-900"></div>
<div className="relative z-10 px-8 py-16 lg:px-16 text-center">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-4">Send one plan. Get Case-Ready within 24 hours.</h2>
<p className="text-slate-400 mb-8 text-sm">No integration. No payment promises. Readiness only.</p>
<a className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold py-3.5 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(13,148,136,0.3)]" href="https://tally.so/r/XXXXXX">
                    Request a Preflight
                 </a>
</div>
</div>

<footer className="border-t border-slate-100 bg-white/50 px-6 py-12 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-80">
<span className="iconify text-slate-900" data-icon="lucide:activity" data-width="16"></span>
<span className="text-sm font-medium text-slate-900">YesOnus</span>
</div>
<div className="text-[10px] text-slate-400 font-normal">
                    Not legal or clinical advice. Operational readiness support only.
                </div>
<div className="flex items-center gap-6 text-xs text-slate-500">
<a className="hover:text-slate-900" href="#">Contact</a>
<a className="hover:text-slate-900" href="#">Privacy</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
