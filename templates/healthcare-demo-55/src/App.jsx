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
      

<div className="max-w-md mx-auto mb-8 text-center space-y-2">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">PreCare Demo Deck (4:5)</p>
</div>

<main className="max-w-[540px] mx-auto space-y-12">

<div className="w-full aspect-[4/5] bg-zinc-950 relative overflow-hidden border border-zinc-800 flex flex-col p-10 group hover:border-zinc-700 transition-colors">

<div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-800/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start">
<iconify-icon className="text-sky-500" icon="solar:pulse-2-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-600 border border-zinc-800 px-2 py-1 rounded">01 / 10</span>
</div>
<div className="relative z-10 flex-1 flex flex-col justify-center">
<div className="mb-6 w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center shadow-2xl">
<iconify-icon className="text-zinc-100" icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<h1 className="text-6xl font-semibold text-zinc-100 tracking-tighter mb-4">
                    PreCare
                </h1>
<p className="text-xl text-zinc-500 font-light tracking-tight">
                    Patient-prepared visits.
                </p>
</div>
<div className="relative z-10 border-t border-zinc-800/50 pt-6 mt-auto flex justify-between items-end">
<div className="text-[10px] text-zinc-600 font-medium tracking-widest uppercase">Demo Deck</div>
<div className="text-[10px] text-zinc-600">2024</div>
</div>
</div>

<div className="w-full aspect-[4/5] bg-zinc-950 relative overflow-hidden border border-zinc-800 flex flex-col p-10 group hover:border-zinc-700 transition-colors">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="relative z-10 flex justify-between items-start mb-12">
<h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">The Reality</h2>
<span className="text-[10px] font-medium text-zinc-600 border border-zinc-800 px-2 py-1 rounded">02 / 10</span>
</div>
<div className="relative z-10 flex-1 flex flex-col justify-center space-y-8">
<div className="group/item">
<h3 className="text-2xl font-medium text-zinc-100 tracking-tight mb-2 group-hover/item:text-sky-200 transition-colors">Healthcare resets every visit.</h3>
<div className="h-px w-12 bg-zinc-800 group-hover/item:w-full group-hover/item:bg-sky-900 transition-all duration-500"></div>
</div>
<div className="group/item opacity-80">
<h3 className="text-2xl font-medium text-zinc-300 tracking-tight mb-2">Context gets lost.</h3>
</div>
<div className="group/item opacity-60">
<h3 className="text-2xl font-medium text-zinc-500 tracking-tight mb-2">Time gets wasted.</h3>
</div>
</div>
</div>

<div className="w-full aspect-[4/5] bg-zinc-950 relative overflow-hidden border border-zinc-800 flex flex-col p-10 group hover:border-zinc-700 transition-colors">
<div className="relative z-10 flex justify-between items-start mb-10">
<h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">The Cost</h2>
<span className="text-[10px] font-medium text-zinc-600 border border-zinc-800 px-2 py-1 rounded">03 / 10</span>
</div>
<div className="relative z-10 flex-1 grid grid-cols-2 gap-4 mb-8">
<div className="bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-lg flex flex-col justify-between">
<iconify-icon className="text-red-400 mb-2" icon="solar:clipboard-remove-linear" width="24"></iconify-icon>
<span className="text-sm text-zinc-200 font-medium">Repeated intake</span>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-lg flex flex-col justify-between">
<iconify-icon className="text-orange-400 mb-2" icon="solar:battery-charge-minimalistic-linear" width="24"></iconify-icon>
<span className="text-sm text-zinc-200 font-medium">Staff burnout</span>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-lg flex flex-col justify-between">
<iconify-icon className="text-zinc-400 mb-2" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<span className="text-sm text-zinc-200 font-medium">Shorter visits</span>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-lg flex flex-col justify-between">
<iconify-icon className="text-zinc-400 mb-2" icon="solar:user-cross-linear" width="24"></iconify-icon>
<span className="text-sm text-zinc-200 font-medium">Confused patients</span>
</div>
</div>
<div className="relative z-10 mt-auto bg-red-950/20 border border-red-900/30 p-4 rounded-lg">
<p className="text-xs text-red-200/80 font-medium leading-relaxed text-center">
                    This is a system problem, not a people problem.
                </p>
</div>
</div>

<div className="w-full aspect-[4/5] bg-zinc-950 relative overflow-hidden border border-zinc-800 flex flex-col p-10 group hover:border-zinc-700 transition-colors">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/10 blur-[90px] rounded-full"></div>
<div className="relative z-10 flex justify-between items-start mb-12">
<h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">The Insight</h2>
<span className="text-[10px] font-medium text-zinc-600 border border-zinc-800 px-2 py-1 rounded">04 / 10</span>
</div>
<div className="relative z-10 flex-1 flex flex-col justify-center">
<div className="space-y-6">
<p className="text-2xl text-zinc-100 font-medium tracking-tight leading-snug">
                        The most valuable moment in care is <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">before the visit.</span>
</p>
<div className="flex items-center gap-4 py-4">
<div className="h-px flex-1 bg-zinc-800"></div>
<iconify-icon className="text-sky-500" icon="solar:stars-linear" width="20"></iconify-icon>
<div className="h-px flex-1 bg-zinc-800"></div>
</div>
<p className="text-lg text-zinc-400 font-light leading-relaxed">
                        That’s where clarity is won or lost.
                    </p>
</div>
</div>
</div>

<div className="w-full aspect-[4/5] bg-zinc-950 relative overflow-hidden border border-zinc-800 flex flex-col p-10 group hover:border-zinc-700 transition-colors">
<div className="relative z-10 flex justify-between items-start mb-12">
<iconify-icon className="text-sky-500" icon="solar:pulse-2-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-600 border border-zinc-800 px-2 py-1 rounded">05 / 10</span>
</div>
<div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-8 shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)]">
<iconify-icon className="text-zinc-100" icon="solar:link-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-3xl font-medium text-zinc-100 tracking-tight leading-snug max-w-xs mx-auto">
                    PreCare prepares patients and orients clinicians <span className="text-sky-400">before</span> the visit.
                </h3>
</div>
<div className="relative z-10 mt-auto flex justify-center">
<div className="w-1 h-8 bg-gradient-to-b from-sky-500 to-transparent rounded-full opacity-50"></div>
</div>
</div>

<div className="w-full aspect-[4/5] bg-zinc-950 relative overflow-hidden border border-zinc-800 flex flex-col p-10 group hover:border-zinc-700 transition-colors">
<div className="relative z-10 flex justify-between items-start mb-10">
<h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">How It Works</h2>
<span className="text-[10px] font-medium text-zinc-600 border border-zinc-800 px-2 py-1 rounded">06 / 10</span>
</div>
<div className="relative z-10 flex-1">
<div className="relative border-l border-zinc-800 ml-3 space-y-8 pl-8 py-2">

<div className="relative">
<span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center">
<div className="h-1.5 w-1.5 rounded-full bg-zinc-500"></div>
</span>
<h4 className="text-sm font-medium text-zinc-200 mb-1">Patient prepares once</h4>
<p className="text-xs text-zinc-500">At home, with their own records.</p>
</div>

<div className="relative">
<span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center">
<div className="h-1.5 w-1.5 rounded-full bg-sky-500"></div>
</span>
<h4 className="text-sm font-medium text-zinc-200 mb-1">Provider reviews in seconds</h4>
<p className="text-xs text-zinc-500">High-signal summary, zero noise.</p>
</div>

<div className="relative">
<span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center">
<div className="h-1.5 w-1.5 rounded-full bg-zinc-500"></div>
</span>
<h4 className="text-sm font-medium text-zinc-200 mb-1">Visit runs smoother</h4>
<p className="text-xs text-zinc-500">Focus on care, not data entry.</p>
</div>

<div className="relative">
<span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear" width="10"></iconify-icon>
</span>
<h4 className="text-sm font-medium text-zinc-200 mb-1">Patient leaves with clarity</h4>
<p className="text-xs text-zinc-500">Next steps are crystal clear.</p>
</div>
</div>
</div>
</div>

<div className="w-full aspect-[4/5] bg-zinc-950 relative overflow-hidden border border-zinc-800 flex flex-col p-10 group hover:border-zinc-700 transition-colors">
<div className="relative z-10 flex justify-between items-start mb-10">
<h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Differentiation</h2>
<span className="text-[10px] font-medium text-zinc-600 border border-zinc-800 px-2 py-1 rounded">07 / 10</span>
</div>
<div className="relative z-10 flex-1 grid grid-cols-1 gap-4 content-center">
<div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/20 border border-zinc-800/60">
<iconify-icon className="text-zinc-500" icon="solar:forbidden-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">No EHR replacement</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/20 border border-zinc-800/60">
<iconify-icon className="text-zinc-500" icon="solar:login-2-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">No forced logins</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/40 border border-zinc-700">
<iconify-icon className="text-sky-400" icon="solar:file-text-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-100">PDF-first artifacts</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/40 border border-zinc-700">
<iconify-icon className="text-sky-400" icon="solar:user-hand-up-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-100">Patient-owned continuity</span>
</div>
</div>
</div>

<div className="w-full aspect-[4/5] bg-zinc-950 relative overflow-hidden border border-zinc-800 flex flex-col p-10 group hover:border-zinc-700 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950"></div>
<div className="relative z-10 flex justify-between items-start mb-8">
<h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Proof of Value</h2>
<span className="text-[10px] font-medium text-zinc-600 border border-zinc-800 px-2 py-1 rounded">08 / 10</span>
</div>
<div className="relative z-10 flex-1 flex flex-col justify-center space-y-8">
<p className="text-sm text-zinc-500 font-medium">Clinics report:</p>
<div className="space-y-6">
<div>
<div className="text-5xl font-semibold text-zinc-100 tracking-tighter mb-1">
                            10–15 <span className="text-lg font-normal text-zinc-500 align-super">min</span>
</div>
<p className="text-sm text-zinc-400">Saved per visit</p>
</div>
<div className="h-px w-full bg-zinc-800"></div>
<div className="flex justify-between items-end">
<div>
<div className="text-xl font-medium text-zinc-200 mb-1">Fewer</div>
<p className="text-xs text-zinc-500">Intake gaps</p>
</div>
<div className="text-right">
<div className="text-xl font-medium text-zinc-200 mb-1">Less</div>
<p className="text-xs text-zinc-500">Staff friction</p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full aspect-[4/5] bg-zinc-950 relative overflow-hidden border border-zinc-800 flex flex-col p-10 group hover:border-zinc-700 transition-colors">
<div className="relative z-10 flex justify-between items-start mb-10">
<h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">The Offer</h2>
<span className="text-[10px] font-medium text-zinc-600 border border-zinc-800 px-2 py-1 rounded">09 / 10</span>
</div>
<div className="relative z-10 flex-1 flex flex-col items-center justify-center">

<div className="w-full bg-gradient-to-br from-zinc-100 to-zinc-300 rounded-xl p-1 shadow-2xl">
<div className="bg-white h-full w-full rounded-lg p-6 flex flex-col items-center text-center space-y-4">
<span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Beta Access</span>
<div className="space-y-1">
<h3 className="text-3xl font-semibold text-zinc-900 tracking-tight">First 30 Patients</h3>
<div className="inline-block bg-sky-100 text-sky-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Free</div>
</div>
<p className="text-xs text-zinc-500 leading-relaxed max-w-[200px]">
                            Use it at your pace. <br/>Decide if it earns its place.
                        </p>
</div>
</div>
</div>
<div className="relative z-10 mt-auto text-center">
<p className="text-[10px] text-zinc-600">No commitment required.</p>
</div>
</div>

<div className="w-full aspect-[4/5] bg-zinc-950 relative overflow-hidden border border-zinc-800 flex flex-col p-10 group hover:border-zinc-700 transition-colors">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_14px]"></div>
<div className="relative z-10 flex justify-between items-start mb-auto">
<iconify-icon className="text-zinc-700" icon="solar:pulse-2-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-600 border border-zinc-800 px-2 py-1 rounded">10 / 10</span>
</div>
<div className="relative z-10">
<h2 className="text-3xl font-medium text-zinc-100 tracking-tight leading-snug mb-6">
                    PreCare isn’t software.
                </h2>
<p className="text-lg text-zinc-500 leading-relaxed">
                    It’s continuity — <br/><span className="text-zinc-300">carried forward.</span>
</p>
</div>
<div className="relative z-10 mt-auto pt-8 border-t border-zinc-900 flex flex-col items-center space-y-4">
<button className="bg-zinc-100 text-zinc-900 text-xs font-medium px-6 py-2 rounded-full hover:bg-white hover:scale-105 transition-all">
                    Get Started
                </button>
<p className="text-[10px] text-zinc-600">precare.health</p>
</div>
</div>
</main>

    </>
  );
}
