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
      

<main className="w-full max-w-2xl bg-white md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-neutral-200/80">

<header className="p-6 md:p-8 border-b border-neutral-100 flex justify-between items-center fade-in-up">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="font-semibold tracking-tight text-lg">CV Score Report</span>
<span className="bg-neutral-100 text-neutral-500 text-[10px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wider">Beta</span>
</div>
<p className="text-neutral-500 text-sm font-normal">Comprehensive evaluation of your application</p>
</div>
<div className="h-8 w-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold tracking-tighter text-xs">
                HY
            </div>
</header>

<section className="p-8 md:p-12 flex flex-col items-center justify-center border-b border-neutral-100 bg-neutral-50/30 fade-in-up delay-100">
<div className="relative w-48 h-48 flex items-center justify-center">

<svg className="w-full h-full transform -rotate-90">
<circle className="text-neutral-200" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="4"></circle>

<circle className="text-primary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" stroke-dasharray="552.9" stroke-dashoffset="154" strokeLinecap="round" strokeWidth="4"></circle>
</svg>

<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-5xl font-semibold tracking-tighter text-[#0d0d0d]">72</span>
<span className="text-sm font-medium text-neutral-400 mt-1 uppercase tracking-wide">Good</span>
</div>
</div>
<p className="mt-6 text-center text-neutral-500 text-sm max-w-sm leading-relaxed">
                Your profile shows strong potential but lacks key optimization for automated tracking systems (ATS) and specific role targeting.
            </p>
</section>

<section className="p-6 md:p-8 space-y-8 fade-in-up delay-200">

<div className="group">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-neutral-100 text-neutral-600">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-base tracking-tight text-[#0d0d0d]">CV Writing Structure</h3>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-primary">Critical</span>
<div className="h-8 w-12 rounded-md bg-red-50 text-primary flex items-center justify-center font-semibold text-sm">45</div>
</div>
</div>
<div className="pl-[52px]">
<div className="h-1.5 w-full bg-neutral-100 rounded-full mb-4 overflow-hidden">
<div className="h-full bg-primary rounded-full w-[45%]"></div>
</div>
<p className="text-sm text-neutral-600 leading-relaxed mb-4">
                        The structural integrity of your document makes it difficult for recruiters to scan quickly. Your layout usage disrupts standard parsing algorithms.
                    </p>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="text-primary shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>Inconsistent margin usage across pages</span>
</li>
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="text-primary shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>Header hierarchy is undefined or missing</span>
</li>
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="text-primary shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>Date formats vary (MM/YY vs Month Year)</span>
</li>
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="text-primary shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>Bullet points lack action-verb openers</span>
</li>
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="text-primary shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>Contact section is not parseable text</span>
</li>
</ul>
</div>
</div>
<div className="h-px bg-neutral-100 w-full ml-[52px]"></div>

<div className="group">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-neutral-100 text-neutral-600">
<iconify-icon icon="solar:case-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-base tracking-tight text-[#0d0d0d]">CV-Job Match</h3>
</div>
<div className="flex items-center gap-2">
<div className="h-8 w-12 rounded-md bg-neutral-100 text-neutral-900 flex items-center justify-center font-semibold text-sm">62</div>
</div>
</div>
<div className="pl-[52px]">
<div className="h-1.5 w-full bg-neutral-100 rounded-full mb-4 overflow-hidden">
<div className="h-full bg-neutral-900 rounded-full w-[62%]"></div>
</div>
<p className="text-sm text-neutral-600 leading-relaxed mb-4">
                        You have relevant experience, but you aren't speaking the industry language. Key technical keywords are missing from your summary and skills section.
                    </p>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="text-primary shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>Missing hard skills: "React", "TypeScript"</span>
</li>
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="text-primary shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>Job titles do not match standard market taxonomy</span>
</li>
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="text-primary shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>Summary is generic rather than role-specific</span>
</li>
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="text-neutral-300 shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>Project outcomes lack quantitative metrics</span>
</li>
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="text-neutral-300 shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>Education section formatting is ambiguous</span>
</li>
</ul>
</div>
</div>
<div className="h-px bg-neutral-100 w-full ml-[52px]"></div>

<div className="group">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-neutral-100 text-neutral-600">
<iconify-icon icon="solar:chat-line-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-base tracking-tight text-[#0d0d0d]">Interview Answer Clarity</h3>
</div>
<div className="flex items-center gap-2">
<div className="h-8 w-12 rounded-md bg-neutral-100 text-neutral-900 flex items-center justify-center font-semibold text-sm">88</div>
</div>
</div>
<div className="pl-[52px]">
<div className="h-1.5 w-full bg-neutral-100 rounded-full mb-4 overflow-hidden">
<div className="h-full bg-neutral-900 rounded-full w-[88%]"></div>
</div>
<p className="text-sm text-neutral-600 leading-relaxed mb-4">
                        Your communication style is direct and confident. You structure your thoughts well, though there is minor room for improvement in storytelling.
                    </p>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="text-neutral-300 shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>Answers to behavioral questions are slightly brief</span>
</li>
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="text-neutral-300 shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>"Tell me about yourself" lacks a closing hook</span>
</li>
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="text-neutral-300 shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>Occasional use of filler words</span>
</li>
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="text-neutral-300 shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>Tone can be perceived as slightly passive</span>
</li>
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="text-neutral-300 shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>Question follow-up speed is slow</span>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-[#0d0d0d] text-white p-6 md:p-10 fade-in-up delay-300">
<div className="mb-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
                    Hyred will help you address <span className="text-primary">12 issues</span>.
                </h2>
<p className="text-neutral-400 text-sm">Based on your score, we've curated a recovery plan.</p>
</div>
<div className="grid grid-cols-1 gap-4 mb-10">

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors">
<div className="flex justify-between items-start mb-3">
<div className="p-2 bg-neutral-800 rounded-lg text-white">
<iconify-icon icon="solar:pen-new-square-linear" width="20"></iconify-icon>
</div>
<span className="bg-red-900/30 text-primary border border-red-900/50 text-[10px] font-semibold px-2 py-1 rounded">PRIORITY</span>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-1">CV Review &amp; Rewrite</h3>
<p className="text-xs text-neutral-400 mb-4">Fixes 'CV Writing Structure' (Score: 45)</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>ATS-compliant formatting</span>
</li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Professional narrative restructuring</span>
</li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Grammar &amp; syntax perfection</span>
</li>
</ul>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors">
<div className="flex justify-between items-start mb-3">
<div className="p-2 bg-neutral-800 rounded-lg text-white">
<iconify-icon icon="solar:widget-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-1">Career OS</h3>
<p className="text-xs text-neutral-400 mb-4">Fixes 'CV-Job Match' (Score: 62)</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Keyword optimization tool</span>
</li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Job tracker &amp; LinkedIn sync</span>
</li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Cover letter generator</span>
</li>
</ul>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors opacity-75">
<div className="flex justify-between items-start mb-3">
<div className="p-2 bg-neutral-800 rounded-lg text-white">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</div>
<span className="text-neutral-500 text-[10px] font-semibold px-2 py-1 uppercase">Optional</span>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-1">Weekly Live Support</h3>
<p className="text-xs text-neutral-400 mb-4">Boosts 'Interview Answer Clarity' (Score: 88)</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Mock interview sessions</span>
</li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Real-time feedback loops</span>
</li>
</ul>
</div>
</div>

<div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 border-t border-neutral-800 pt-6">
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-white">10k+</span>
<span className="text-[10px] uppercase tracking-wide text-neutral-500">CVs Optimized</span>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-white">3x</span>
<span className="text-[10px] uppercase tracking-wide text-neutral-500">More Callbacks</span>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-white">92%</span>
<span className="text-[10px] uppercase tracking-wide text-neutral-500">User Satisfaction</span>
</div>
</div>

<button className="w-full bg-primary hover:bg-[#cc0000] text-white font-medium py-4 rounded-xl text-sm transition-all transform active:scale-[0.98] shadow-[0_0_20px_-5px_hsl(0,72%,51%)]">
                Fix My CV Issues Now
            </button>
<p className="text-center text-neutral-500 text-xs mt-4 flex items-center justify-center gap-1">
<iconify-icon icon="solar:shield-check-linear" width="12"></iconify-icon>
<span>30-day money-back guarantee</span>
</p>
</section>
</main>

    </>
  );
}
