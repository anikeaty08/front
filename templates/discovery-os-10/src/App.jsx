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
      

<aside className="w-64 shrink-0 border-r border-slate-800 bg-slate-950/80 backdrop-blur flex flex-col">

<div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-slate-900/60">
<div className="h-8 w-8 rounded-md bg-slate-100 text-slate-900 flex items-center justify-center text-lg font-semibold tracking-tight">
          d
        </div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight">discovery</span>
<span className="text-xs text-slate-400">AI-assisted UX intake</span>
</div>
</div>

<div className="px-5 py-3 border-b border-slate-900/60">
<button className="w-full flex items-center justify-between rounded-md bg-slate-900/80 border border-slate-800 px-3 py-2">
<div className="flex flex-col items-start">
<span className="text-xs font-medium text-slate-200 tracking-tight">Studio workspace</span>
<span className="text-xs text-slate-500">Team of 3 designers</span>
</div>
<span className="text-slate-500 text-xs">▼</span>
</button>
</div>

<nav className="flex-1 overflow-y-auto py-4 space-y-6 px-3">

<div className="space-y-1">
<div className="px-2 mb-1 flex items-center justify-between">
<span className="text-[0.8rem] font-medium uppercase tracking-[0.12em] text-slate-500">Workspace</span>
</div>

<button className="w-full flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-200 bg-slate-900 border border-slate-800">
<div className="h-6 w-6 rounded-md bg-slate-900 flex items-center justify-center border border-slate-800">
<iconify-icon className="text-slate-300" icon="solar:folder-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col items-start flex-1">
<span className="text-sm font-medium tracking-tight">My Projects</span>
<span className="text-xs text-slate-500">3 active · 4 archived</span>
</div>
</button>

<button className="w-full flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-900/70">
<div className="h-6 w-6 rounded-md bg-slate-950 flex items-center justify-center border border-slate-800">
<iconify-icon className="text-slate-300" icon="solar:clipboard-text-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col items-start flex-1">
<span className="text-sm font-medium tracking-tight">My Surveys</span>
<span className="text-xs text-slate-500">Created · Completed</span>
</div>
</button>

<button className="w-full flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-900/70">
<div className="h-6 w-6 rounded-md bg-slate-950 flex items-center justify-center border border-slate-800">
<iconify-icon className="text-slate-300" icon="solar:route-square-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col items-start flex-1">
<span className="text-sm font-medium tracking-tight">My Process</span>
<span className="text-xs text-slate-500">Services · Tasks · SLAs</span>
</div>
</button>
</div>

<div className="space-y-1">
<div className="px-2 mb-1 flex items-center justify-between">
<span className="text-[0.8rem] font-medium uppercase tracking-[0.12em] text-slate-500">Current project</span>
<span className="text-[0.7rem] text-slate-500">Auto-sync</span>
</div>
<div className="mx-1 rounded-lg border border-slate-900 bg-slate-950/70 px-3 py-3 space-y-2">
<div className="flex items-center justify-between gap-2">
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-slate-100">SaaS Billing Revamp</span>
<span className="text-xs text-slate-500">Discovery in progress</span>
</div>
<span className="text-[0.7rem] rounded-full bg-emerald-500/10 text-emerald-400 px-2 py-0.5 border border-emerald-500/20">72%</span>
</div>
<div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
<div className="h-full w-[72%] bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full"></div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-500">
<span>41 / 57 questions answered</span>
<span>12 est. days</span>
</div>
</div>
</div>
</nav>

<div className="border-t border-slate-900 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-gradient-to-tr from-sky-500 to-emerald-400 text-slate-950 flex items-center justify-center text-xs font-semibold">
            JD
          </div>
<div className="flex flex-col">
<span className="text-xs font-medium tracking-tight text-slate-100">Jordan, Lead UX</span>
<span className="text-[0.7rem] text-slate-500">Pro · 2 seats left</span>
</div>
</div>
<button className="rounded-md border border-slate-800 bg-slate-950 px-2 py-1 text-[0.72rem] text-slate-400 hover:bg-slate-900">
          Settings
        </button>
</div>
</aside>

<main className="flex-1 flex flex-col bg-slate-950">

<header className="h-14 border-b border-slate-900 flex items-center justify-between px-5">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-xs text-slate-500">
<span>My Projects</span>
<span>/</span>
<span className="text-slate-300">SaaS Billing Revamp</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-900">
<iconify-icon className="text-sky-400" icon="solar:magic-stick-3-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<span>AI Assist</span>
</button>
<button className="hidden md:flex items-center gap-1.5 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300 hover:bg-emerald-500/15">
<iconify-icon className="text-emerald-300" icon="solar:play-circle-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Run full discovery</span>
</button>
</div>
</header>

<div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

<section className="w-full lg:w-80 border-r border-slate-900 flex flex-col">

<div className="px-4 pt-4 pb-3 flex items-center justify-between border-b border-slate-900/60">
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-100">My Projects</span>
<span className="text-xs text-slate-500">Centralize all discovery work</span>
</div>
<button className="flex items-center gap-1.5 rounded-md bg-slate-100 text-slate-950 px-2.5 py-1.5 text-xs font-medium tracking-tight">
<iconify-icon icon="solar:add-circle-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<span>New</span>
</button>
</div>

<div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">

<button className="w-full text-left rounded-lg border border-sky-500/40 bg-slate-900/60 px-3 py-3 space-y-2">
<div className="flex items-start justify-between gap-2">
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50">SaaS Billing Revamp</span>
<span className="text-xs text-slate-400">Redesign billing UX for B2B SaaS platform.</span>
</div>
<span className="text-[0.7rem] rounded-full bg-sky-500/10 text-sky-300 px-2 py-0.5 border border-sky-500/30">Discovery</span>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 rounded-full bg-slate-950 overflow-hidden">
<div className="h-full w-[72%] bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full"></div>
</div>
<span className="text-[0.7rem] text-slate-400">72%</span>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-500">
<span>41 / 57 survey answers</span>
<span>12 est. days</span>
</div>
</button>

<button className="w-full text-left rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-3 space-y-2 hover:border-slate-700 hover:bg-slate-900/60">
<div className="flex items-start justify-between gap-2">
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-100">Marketplace Onboarding</span>
<span className="text-xs text-slate-500">Buyer/seller onboarding optimization.</span>
</div>
<span className="text-[0.7rem] rounded-full bg-emerald-500/5 text-emerald-300 px-2 py-0.5 border border-emerald-500/30">Estimation</span>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 rounded-full bg-slate-950 overflow-hidden">
<div className="h-full w-[45%] bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full"></div>
</div>
<span className="text-[0.7rem] text-slate-400">45%</span>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-500">
<span>19 / 42 survey answers</span>
<span>8 est. days</span>
</div>
</button>
</div>

<div className="border-t border-slate-900 px-3 py-3 space-y-2 bg-slate-950">
<div className="flex items-center justify-between">
<span className="text-xs font-medium tracking-tight text-slate-200">Create project</span>
<span className="text-[0.7rem] text-slate-500">3-step guided</span>
</div>
<div className="space-y-2">
<input className="w-full rounded-md bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-sky-500/60" placeholder="Project name" type="text"/>
<textarea className="w-full rounded-md bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-sky-500/60 min-h-[4rem]" placeholder="Short description (optional)"></textarea>
<div className="flex flex-col gap-1.5">
<label className="text-[0.7rem] text-slate-500">Upload preliminary info</label>
<button className="flex items-center justify-between rounded-md border border-dashed border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-300 hover:border-sky-500/60 hover:bg-slate-900/80">
<div className="flex items-center gap-2">
<iconify-icon className="text-sky-300" icon="solar:document-add-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Drop .txt / .pdf / notes here</span>
</div>
<span className="text-[0.7rem] text-slate-500">or paste text</span>
</button>
</div>

<div className="flex items-center justify-between text-[0.7rem] text-slate-500">
<span>Surveys auto-selected</span>
<button className="text-[0.7rem] text-sky-400 hover:text-sky-300">Edit surveys</button>
</div>
<button className="w-full flex items-center justify-center gap-1.5 rounded-md bg-sky-500 text-slate-950 px-3 py-1.5 text-xs font-medium tracking-tight hover:bg-sky-400">
<iconify-icon icon="solar:flash-line-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Create project with AI</span>
</button>
</div>
</div>
</section>

<section className="flex-1 flex flex-col overflow-hidden">

<div className="px-5 pt-4 pb-2 border-b border-slate-900/80 flex flex-col gap-3">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="text-lg md:text-xl font-semibold tracking-tight text-slate-50">SaaS Billing Revamp</span>
<span className="text-[0.7rem] rounded-full border border-slate-700 bg-slate-950 px-2 py-0.5 text-slate-400">Discovery</span>
</div>
<p className="text-sm text-slate-400">
                  Redesign billing, invoicing, and dunning flows for a B2B SaaS platform. Scope includes UX research, IA, and UI design.
                </p>
</div>
<div className="flex flex-col items-start md:items-end gap-2">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span>Progress</span>
<span className="text-slate-200 font-medium tracking-tight">72%</span>
</div>
<div className="flex items-center gap-2 w-full md:w-48">
<div className="flex-1 h-1.5 rounded-full bg-slate-900 overflow-hidden">
<div className="h-full w-[72%] bg-gradient-to-r from-sky-400 via-emerald-400 to-lime-300 rounded-full"></div>
</div>
<span className="text-[0.7rem] text-slate-500 whitespace-nowrap">41 / 57 questions</span>
</div>
<div className="flex items-center gap-3 text-[0.7rem] text-slate-500">
<span>12 est. days · 3 services · 14 tasks</span>
</div>
</div>
</div>
</div>

<div className="px-5 pt-2 border-b border-slate-900/80 flex items-center justify-between">
<div className="flex items-center gap-1">
<button className="px-3 py-2 text-xs font-medium tracking-tight text-slate-50 border-b-2 border-sky-400">
                Overview
              </button>
<button className="px-3 py-2 text-xs text-slate-400 hover:text-slate-200">
                Surveys
              </button>
<button className="px-3 py-2 text-xs text-slate-400 hover:text-slate-200">
                Estimation
              </button>
</div>
<div className="flex items-center gap-2">
<button className="hidden md:flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-[0.7rem] text-slate-300 hover:bg-slate-900">
<iconify-icon icon="solar:document-add-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Add files</span>
</button>
<button className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-[0.7rem] text-sky-300 hover:bg-slate-900">
<iconify-icon className="text-sky-300" icon="solar:magic-stick-3-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Re-run analysis</span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">

<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

<div className="space-y-4 xl:col-span-1">

<div className="rounded-lg border border-slate-900 bg-slate-950/80 p-3 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="solar:document-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium tracking-tight text-slate-100">Input material</span>
</div>
<span className="text-[0.7rem] text-slate-500">4 sources</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between rounded-md border border-slate-900 bg-slate-950 px-2.5 py-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-slate-900 flex items-center justify-center border border-slate-800">
<iconify-icon className="text-sky-300" icon="solar:document-text-linear" style={{fontSize: '0.9rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-100">Kickoff_notes_2026-01.txt</span>
<span className="text-[0.7rem] text-slate-500">32 highlighted insights</span>
</div>
</div>
<span className="text-[0.7rem] text-slate-600">13 KB</span>
</div>
<div className="flex items-center justify-between rounded-md border border-slate-900 bg-slate-950 px-2.5 py-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-slate-900 flex items-center justify-center border border-slate-800">
<iconify-icon className="text-emerald-300" icon="solar:document-linear" style={{fontSize: '0.9rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-100">Current_billing_flows.pdf</span>
<span className="text-[0.7rem] text-slate-500">7 screens detected</span>
</div>
</div>
<span className="text-[0.7rem] text-slate-600">1.2 MB</span>
</div>
<div className="flex items-center justify-between rounded-md border border-slate-900 bg-slate-950 px-2.5 py-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-slate-900 flex items-center justify-center border border-slate-800">
<iconify-icon className="text-indigo-300" icon="solar:voice-square-linear" style={{fontSize: '0.9rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-100">Client_call_transcript.txt</span>
<span className="text-[0.7rem] text-slate-500">54 action items</span>
</div>
</div>
<span className="text-[0.7rem] text-slate-600">78 KB</span>
</div>
</div>
<button className="w-full flex items-center justify-center gap-1.5 rounded-md border border-dashed border-slate-800 bg-slate-950 px-2.5 py-2 text-xs text-slate-300 hover:border-sky-500/60 hover:bg-slate-900/80">
<iconify-icon className="text-sky-300" icon="solar:document-add-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Add more files or paste text</span>
</button>
</div>

<div className="rounded-lg border border-slate-900 bg-slate-950/80 p-3 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="solar:clipboard-text-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium tracking-tight text-slate-100">Survey coverage</span>
</div>
<span className="text-[0.7rem] text-slate-500">Based on My Surveys</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Questions answered</span>
<span className="text-xs font-medium tracking-tight text-emerald-300">41 / 57</span>
</div>
<div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
<div className="h-full w-[72%] bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full"></div>
</div>
<div className="grid grid-cols-3 gap-2 text-[0.7rem] text-slate-400">
<div className="flex flex-col">
<span className="text-slate-500">Auto-filled</span>
<span className="text-emerald-300 font-medium tracking-tight">36</span>
</div>
<div className="flex flex-col">
<span className="text-slate-500">Reviewed</span>
<span className="text-sky-300 font-medium tracking-tight">5</span>
</div>
<div className="flex flex-col">
<span className="text-slate-500">Unanswered</span>
<span className="text-amber-300 font-medium tracking-tight">16</span>
</div>
</div>
</div>
<button className="w-full flex items-center justify-between rounded-md border border-slate-800 bg-slate-950 px-2.5 py-2 text-[0.7rem] text-slate-300 hover:bg-slate-900">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-300" icon="solar:clipboard-check-linear" style={{fontSize: '0.95rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Create supplementary survey</span>
</div>
<span className="text-[0.7rem] text-slate-500">16 open questions</span>
</button>
</div>
</div>

<div className="space-y-4 xl:col-span-1">

<div className="rounded-lg border border-slate-900 bg-slate-950/80 p-3 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="solar:route-square-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium tracking-tight text-slate-100">Process coverage</span>
</div>
<button className="text-[0.7rem] text-slate-400 hover:text-sky-300 flex items-center gap-1">
<iconify-icon icon="solar:pen-new-square-linear" style={{fontSize: '0.9rem', strokeWidth: '1.5'}}></iconify-icon>
                      Edit mapping
                    </button>
</div>
<div className="grid grid-cols-2 gap-3 text-[0.7rem] text-slate-400">
<div className="rounded-md border border-slate-900 bg-slate-950 px-2.5 py-2 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-300">Services included</span>
<span className="text-[0.7rem] text-slate-500">from My Process</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-sm font-semibold tracking-tight text-slate-50">3</span>
<span className="text-[0.7rem] text-slate-500">of 5 available</span>
</div>
<ul className="mt-1 space-y-0.5">
<li className="flex items-center justify-between">
<span>UX Research</span>
<span className="text-[0.7rem] text-slate-500">5 tasks</span>
</li>
<li className="flex items-center justify-between">
<span>UX Strategy</span>
<span className="text-[0.7rem] text-slate-500">3 tasks</span>
</li>
<li className="flex items-center justify-between">
<span>UI Design</span>
<span className="text-[0.7rem] text-slate-500">6 mockups*</span>
</li>
</ul>
</div>
<div className="rounded-md border border-slate-900 bg-slate-950 px-2.5 py-2 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-300">Estimated effort</span>
<span className="text-[0.7rem] text-slate-500">business days</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-sm font-semibold tracking-tight text-emerald-300">8–14</span>
<span className="text-[0.7rem] text-slate-500">range</span>
</div>
<div className="space-y-0.5 mt-1">
<div className="flex items-center justify-between">
<span>Basic</span>
<span className="text-[0.7rem] text-slate-300">8–10</span>
</div>
<div className="flex items-center justify-between">
<span>Extended</span>
<span className="text-[0.7rem] text-slate-300">11–14</span>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-500">
<span>*UI mockups use per-unit estimates based on # of screens.</span>
<button className="text-sky-400 hover:text-sky-300">Open estimation</button>
</div>
</div>

<div className="rounded-lg border border-slate-900 bg-slate-950/80 p-3 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="solar:case-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium tracking-tight text-slate-100">Estimate summary</span>
</div>
<button className="text-[0.7rem] text-slate-400 hover:text-slate-200 flex items-center gap-1">
<iconify-icon icon="solar:download-linear" style={{fontSize: '0.9rem', strokeWidth: '1.5'}}></iconify-icon>
                      Export Excel
                    </button>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-md border border-slate-900 bg-slate-950 px-2.5 py-2 space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-300">Basic</span>
<span className="text-[0.7rem] text-emerald-300">Must-have</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-sm font-semibold tracking-tight text-slate-50">8–10</span>
<span className="text-[0.7rem] text-slate-500">days</span>
</div>
<ul className="space-y-0.5 text-[0.7rem] text-slate-400">
<li>• Core research &amp; problem framing</li>
<li>• Information architecture</li>
<li>• 4 key billing flows (UX only)</li>
</ul>
</div>
<div className="rounded-md border border-slate-900 bg-slate-950 px-2.5 py-2 space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-300">Extended</span>
<span className="text-[0.7rem] text-sky-300">Nice-to-have</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-sm font-semibold tracking-tight text-slate-50">11–14</span>
<span className="text-[0.7rem] text-slate-500">days</span>
</div>
<ul className="space-y-0.5 text-[0.7rem] text-slate-400">
<li>• Usability testing</li>
<li>• UI design for all billing states</li>
<li>• Design system tokens for billing</li>
</ul>
</div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-500">
<span>All tasks editable at the service level.</span>
<button className="text-sky-400 hover:text-sky-300">Refine in Estimation</button>
</div>
</div>
</div>

<div className="space-y-4 xl:col-span-1">
<div className="rounded-lg border border-slate-900 bg-slate-950/80 p-3 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-sky-300" icon="solar:magic-stick-3-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium tracking-tight text-slate-100">AI discovery log</span>
</div>
<span className="text-[0.7rem] text-slate-500">Last run · 3m ago</span>
</div>
<div className="space-y-2 text-[0.7rem] text-slate-300">
<div className="flex gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<div>
<span className="text-slate-200">Mapped project inputs</span>
<span className="text-slate-500"> to 3 services and 14 tasks in your Process.</span>
</div>
</div>
<div className="flex gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<div>
<span className="text-slate-200">Auto-answered 41 survey questions</span>
<span className="text-slate-500"> from uploaded notes and PDFs.</span>
</div>
</div>
<div className="flex gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-amber-400"></span>
<div>
<span className="text-slate-200">Flagged 16 questions</span>
<span className="text-slate-500"> as incomplete, grouped into a supplementary survey draft.</span>
</div>
</div>
<div className="flex gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-violet-400"></span>
<div>
<span className="text-slate-200">Suggested 6 UI mockups</span>
<span className="text-slate-500"> for high-fidelity estimation, based on critical billing paths.</span>
</div>
</div>
</div>
<button className="w-full flex items-center justify-center gap-1.5 rounded-md border border-slate-800 bg-slate-950 px-2.5 py-2 text-[0.7rem] text-slate-300 hover:bg-slate-900">
<iconify-icon icon="solar:refresh-linear" style={{fontSize: '0.95rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Run analysis on new inputs</span>
</button>
</div>

<div className="rounded-lg border border-slate-900 bg-slate-950/80 p-3 space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm font-medium tracking-tight text-slate-100">Setup shortcuts</span>
<span className="text-[0.7rem] text-slate-500">Surveys · Process</span>
</div>
<div className="space-y-2">
<div className="rounded-md border border-slate-900 bg-slate-950 px-2.5 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-slate-900 flex items-center justify-center border border-slate-800">
<iconify-icon className="text-slate-200" icon="solar:clipboard-list-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-100">My Surveys</span>
<span className="text-[0.7rem] text-slate-500">2 templates · 5 client responses</span>
</div>
</div>
<button className="text-[0.7rem] text-sky-300 hover:text-sky-200">Manage</button>
</div>
<div className="rounded-md border border-slate-900 bg-slate-950 px-2.5 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-slate-900 flex items-center justify-center border border-slate-800">
<iconify-icon className="text-slate-200" icon="solar:route-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-100">My Process</span>
<span className="text-[0.7rem] text-slate-500">5 services · 28 tasks</span>
</div>
</div>
<button className="text-[0.7rem] text-sky-300 hover:text-sky-200">Edit</button>
</div>
</div>
<p className="text-[0.7rem] text-slate-500">
                    Tune your surveys and process once, then reuse them across all client projects. AI will keep mapping new inputs to your system.
                  </p>
</div>
</div>
</div>

<div className="hidden">
<div className="flex items-center justify-between mb-3">
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-100">Surveys for this project</span>
<span className="text-xs text-slate-500">Auto-filled from uploaded content · client-ready exports</span>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-[0.7rem] text-slate-300 hover:bg-slate-900">
<iconify-icon icon="solar:clipboard-add-linear" style={{fontSize: '0.95rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Create supplementary survey</span>
</button>
<button className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-[0.7rem] text-slate-300 hover:bg-slate-900">
<iconify-icon icon="solar:export-linear" style={{fontSize: '0.95rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Export to client</span>
</button>
</div>
</div>
</div>

<div className="hidden">
<div className="flex items-center justify-between mb-3">
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-100">Project estimation</span>
<span className="text-xs text-slate-500">Derived from My Process &amp; survey answers</span>
</div>
<button className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-[0.7rem] text-slate-300 hover:bg-slate-900">
<iconify-icon icon="solar:download-linear" style={{fontSize: '0.95rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Download Excel</span>
</button>
</div>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
