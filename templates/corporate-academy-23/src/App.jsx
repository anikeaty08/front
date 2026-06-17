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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'subtle-grid': 'linear-gradient(to right, #f5f5f4 1px, transparent 1px), linear-gradient(to bottom, #f5f5f4 1px, transparent 1px)',
}
}
}
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
      

<div className="fixed inset-0 z-0 pointer-events-none bg-subtle-grid grid-bg opacity-40"></div>
<div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-radial via-transparent to-transparent -z-10 pointer-events-none from-neutral-100/80"></div>

<nav className="fixed w-full z-50 border-b glass-panel border-neutral-200/50">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-sm flex items-center justify-center bg-neutral-900 text-white">
<span className="font-bold text-[10px] tracking-tight">C</span>
</div>
<a className="text-sm font-medium tracking-tight text-neutral-900" href="#">
                    Corporate Academy
                </a>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#institution">Institutions</a>
<a className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#students">Students</a>
<a className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#about">About</a>
<a className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#journal">Journal</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center justify-center h-8 px-3 text-xs font-medium rounded-md shadow-sm transition-all border hover:shadow-md text-white bg-neutral-900 hover:bg-neutral-800 border-neutral-800" href="#contact">
                    Book Call
                </a>
<button className="md:hidden text-neutral-900">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="z-10 pt-20 relative">

<section className="pt-20 pb-20 md:pt-32 md:pb-32 max-w-7xl mx-auto px-6 relative">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 bg-neutral-100 border-neutral-200">
<span className="flex h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
<span className="text-xs font-medium tracking-wide uppercase text-neutral-600">Accepting Spring 2025 Cohorts</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1] mb-8 text-balance bg-clip-text text-transparent bg-gradient-to-b text-neutral-900 from-neutral-900 to-neutral-600">
                    Structured Professional Readiness for High-Potential Cohorts
                </h1>
<p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed max-w-2xl mb-10 text-balance">
                    Corporate Academy partners with honors colleges, scholarship programs, and leadership cohorts to accelerate workplace readiness and early-career performance.
                </p>
<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
<a className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium rounded-md shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto text-white bg-neutral-900 shadow-neutral-900/10 hover:bg-neutral-800" href="#institution">
                        For Institutions
                        <iconify-icon className="ml-2 opacity-70" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium border rounded-md shadow-sm transition-all w-full sm:w-auto text-neutral-600 bg-white border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300" href="#students">
                        For Students
                    </a>
</div>
</div>

<div className="mt-20 h-px w-full bg-gradient-to-r from-transparent to-transparent via-neutral-200"></div>
</section>

<section className="py-16 md:py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center">
<p className="text-xl md:text-2xl font-light leading-snug text-balance text-neutral-800">
<span className="text-neutral-400">The Problem:</span> High-achieving students are academically prepared but professionally underprepared. We deliver a structured 12-week operating system to close the gap between classroom competence and workplace execution.
                    </p>
</div>
</div>
</section>

<section className="py-12 md:py-24 max-w-7xl mx-auto px-6">
<div className="mb-12 flex items-end justify-between">
<div>
<h3 className="text-2xl font-medium tracking-tight text-neutral-900">Five Pillars of Readiness</h3>
<p className="text-neutral-500 text-sm mt-2">The core curriculum structure.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">

<div className="md:col-span-2 group relative rounded-xl border p-8 transition-all overflow-hidden bg-neutral-50 border-neutral-200 hover:border-neutral-300">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:user-id-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center shadow-sm mb-4 bg-white border-neutral-200 text-neutral-700">
<iconify-icon icon="solar:user-id-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium mb-2 text-neutral-900">Professional Identity</h4>
<p className="text-sm text-neutral-500 font-light max-w-md">Moving beyond "student" identity to specific professional value propositions. Understanding how to articulate unique strengths in a corporate context.</p>
</div>
</div>
</div>

<div className="group relative rounded-xl border p-8 hover:shadow-lg transition-all bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-neutral-200/50">
<div className="h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 bg-neutral-50 border-neutral-100 text-neutral-700">
<iconify-icon icon="solar:scale-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium mb-2 text-neutral-900">Judgment &amp; Decisions</h4>
<p className="text-sm text-neutral-500 font-light">Navigating ambiguity and making defensible choices.</p>
</div>
</div>
</div>

<div className="group relative rounded-xl border p-8 hover:shadow-lg transition-all bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-neutral-200/50">
<div className="h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 bg-neutral-50 border-neutral-100 text-neutral-700">
<iconify-icon icon="solar:dialog-2-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium mb-2 text-neutral-900">Executive Presence</h4>
<p className="text-sm text-neutral-500 font-light">Communication structures for high-stakes environments.</p>
</div>
</div>
</div>

<div className="group relative rounded-xl border p-8 hover:shadow-lg transition-all bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-neutral-200/50">
<div className="h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 bg-neutral-50 border-neutral-100 text-neutral-700">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium mb-2 text-neutral-900">Social Capital</h4>
<p className="text-sm text-neutral-500 font-light">Relationship management and political awareness.</p>
</div>
</div>
</div>

<div className="md:col-span-1 group relative rounded-xl border p-8 transition-all overflow-hidden bg-neutral-900 border-neutral-800 text-white">
<div className="absolute inset-0 bg-gradient-to-br opacity-50 from-neutral-800 to-neutral-950"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 bg-neutral-800 border-neutral-700 text-white">
<iconify-icon icon="solar:checklist-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium mb-2 text-white">Execution &amp; Reliability</h4>
<p className="text-sm font-light text-neutral-400">The operating system of getting things done. Closing the say-do gap.</p>
</div>
</div>
</div>
</div>
</section>

<div className="py-24 relative overflow-hidden bg-neutral-950 text-white" id="institution">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[100px] opacity-40 bg-neutral-900"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 bg-neutral-900 border-neutral-800">
<span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-300">For Institutions</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">Institutional Professional Readiness Accelerator</h2>
<p className="text-lg font-light mb-10 leading-relaxed max-w-md text-neutral-400">
                            A turnkey, cohort-based operating system designed for honors colleges and leadership programs. We handle the curriculum, coaching, and assessment.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center border-neutral-700">
<div className="w-2 h-2 rounded-full bg-neutral-400"></div>
</div>
<div>
<h4 className="text-sm font-medium text-white">12-week structured curriculum</h4>
<p className="text-sm text-neutral-500 mt-1">Asynchronous modules combined with live coaching.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center border-neutral-700">
<div className="w-2 h-2 rounded-full bg-neutral-400"></div>
</div>
<div>
<h4 className="text-sm font-medium text-white">Pre/Post Readiness Assessment</h4>
<p className="text-sm text-neutral-500 mt-1">Quantitative data on cohort progression.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center border-neutral-700">
<div className="w-2 h-2 rounded-full bg-neutral-400"></div>
</div>
<div>
<h4 className="text-sm font-medium text-white">Flat Cohort Pricing</h4>
<p className="text-sm text-neutral-500 mt-1">$12,000 per cohort (up to 25 students).</p>
</div>
</div>
</div>
<div className="mt-12">
<a className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium rounded-md transition-all text-neutral-950 bg-white hover:bg-neutral-200" href="#contact">
                                Book Institutional Consultation
                            </a>
</div>
</div>

<div className="relative">
<div className="aspect-square bg-gradient-to-tr rounded-2xl border p-8 flex flex-col from-neutral-900 to-neutral-800 border-neutral-800">
<div className="flex items-center justify-between mb-8 pb-8 border-b border-neutral-700/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-indigo-500/20 border border-indigo-500/50"></div>
<div className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500/50"></div>
<div className="w-3 h-3 rounded-full bg-cyan-500/20 border border-cyan-500/50"></div>
</div>
<span className="text-xs font-mono text-neutral-500">readiness_report.pdf</span>
</div>
<div className="space-y-4 flex-1">
<div className="h-2 rounded w-3/4 bg-neutral-800"></div>
<div className="h-2 rounded w-1/2 bg-neutral-800"></div>
<div className="h-32 rounded-lg border w-full mt-6 flex items-center justify-center bg-neutral-800/50 border-neutral-700/50">
<div className="text-center">
<div className="text-3xl font-medium mb-1 text-white">+42%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Growth Metric</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="py-24 max-w-7xl mx-auto px-6" id="about">
<div className="rounded-2xl p-8 md:p-12 border bg-neutral-50 border-neutral-200/60">
<div className="grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 relative">
<div className="aspect-[4/5] rounded-lg overflow-hidden relative group bg-neutral-200">
<img alt="Oscar Garner III" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 backdrop-blur-sm p-3 rounded border bg-white/90 border-white/20">
<p className="text-xs font-semibold text-neutral-900">Oscar Garner III</p>
<p className="text-[10px] text-neutral-500 uppercase tracking-wide">CIMA®, CFP® — Founder</p>
</div>
</div>
</div>
<div className="md:col-span-7">
<h3 className="text-2xl font-medium tracking-tight mb-6 text-neutral-900">Built by practitioners, not academics.</h3>
<div className="prose prose-neutral prose-lg font-light leading-relaxed text-neutral-600">
<p className="mb-6">
                                Corporate Academy was founded to address a consistent institutional challenge: high-achieving students often enter the workforce without structured preparation for execution, communication, and professional judgment.
                            </p>
<p>
                                Oscar Garner III brings experience from competitive corporate finance environments. Our approach is not motivational programming; it is structured infrastructure for long-term performance.
                            </p>
</div>
<div className="mt-8 pt-8 border-t flex gap-12 border-neutral-200">
<div>
<span className="block text-2xl font-medium text-neutral-900">10+</span>
<span className="text-xs text-neutral-500 uppercase tracking-wide">Cohorts</span>
</div>
<div>
<span className="block text-2xl font-medium text-neutral-900">100%</span>
<span className="text-xs text-neutral-500 uppercase tracking-wide">Recommendation Rate</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-6 text-neutral-900">Ready to prepare your cohort?</h2>
<p className="text-neutral-500 font-light mb-8 text-lg">Schedule a consultation to discuss partnership structure and curriculum details.</p>
<div className="flex flex-col sm:flex-row gap-4" id="contact">
<button className="h-12 px-8 text-sm font-medium rounded-md transition-colors shadow-lg bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/10">
                                Book 20-Minute Call
                            </button>
<button className="h-12 px-8 border text-sm font-medium rounded-md transition-colors bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50">
                                View Sample Syllabus
                            </button>
</div>
</div>
<div className="text-right hidden md:block">
<iconify-icon className="mb-4 text-neutral-200" icon="solar:globus-linear" width="64"></iconify-icon>
</div>
</div>
</div>

<div className="border-t border-neutral-100 bg-neutral-50/50">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-sm bg-neutral-300"></div>
<span className="text-xs font-semibold tracking-tight uppercase text-neutral-900">Corporate Academy</span>
</div>
<div className="flex gap-6 text-xs font-medium text-neutral-500">
<a className="transition-colors hover:text-neutral-900" href="#">LinkedIn</a>
<a className="transition-colors hover:text-neutral-900" href="#">Privacy</a>
<a className="transition-colors hover:text-neutral-900" href="#">Terms</a>
</div>
<div className="text-xs text-neutral-400">
                        © 2024 Corporate Academy Inc.
                    </div>
</div>
</div>
</section>
</main>

    </>
  );
}
