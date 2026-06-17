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
      

<div className="w-full max-w-[1400px] h-full max-h-[900px] bg-white rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-neutral-200 overflow-hidden flex flex-col relative animate-blur-in">

<nav className="w-full px-8 py-6 flex justify-between items-center z-20 border-b border-neutral-100/50 backdrop-blur-sm sticky top-0 bg-white/80">
<div className="flex items-center gap-2">

<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-black to-[#00E5E5]"></div>
<span className="font-serif text-2xl tracking-tighter font-normal text-black">MEERTEX</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-black transition-colors" href="#">Product</a>
<a className="hover:text-black transition-colors" href="#">Security</a>
<a className="hover:text-black transition-colors" href="#">Integration</a>
</div>
<button className="group flex items-center gap-2 px-5 py-2 rounded-full border border-neutral-200 hover:border-black transition-colors bg-transparent text-sm font-medium text-neutral-900">
<span>Request access</span>
<iconify-icon className="text-neutral-400 group-hover:text-black transition-colors" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</nav>

<div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">

<div className="flex-1 p-8 lg:p-16 flex flex-col justify-center relative z-10">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 w-fit mb-8 animate-blur-in delay-100">
<div className="w-2 h-2 rounded-full bg-[#00E5E5] animate-pulse"></div>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-wide">Closed Kernel Secure</span>
</div>
<h1 className="text-[3.5rem] leading-[1.05] sm:text-[4rem] lg:text-[4.5rem] tracking-tight font-normal text-black mb-6 animate-blur-in delay-200">
                        Negotiation memory,<br/>
<span className="text-neutral-400 italic font-serif">perfected.</span>
</h1>
<p className="text-lg text-neutral-500 leading-relaxed font-light mb-10 max-w-md animate-blur-in delay-300">
                        AI that captures shorthand notes, identifies speakers, and assigns tasks instantly. Hosted in a secure, isolated kennel for absolute data sovereignty.
                    </p>
<div className="flex flex-wrap gap-4 animate-blur-in delay-500">
<button className="bg-black text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-200/50 flex items-center gap-3">
<iconify-icon icon="lucide:mic" width="18"></iconify-icon>
                            Start Recording
                        </button>
<button className="bg-white text-neutral-900 border border-neutral-200 px-8 py-4 rounded-xl text-sm font-medium hover:bg-neutral-50 transition-all flex items-center gap-3">
<iconify-icon icon="lucide:play-circle" width="18"></iconify-icon>
                            Watch Demo
                        </button>
</div>

<div className="mt-16 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 animate-blur-in delay-500">

<div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
<iconify-icon icon="lucide:trello" width="20"></iconify-icon> <span>Jira</span>
</div>
<div className="w-px h-4 bg-neutral-300"></div>
<div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
<iconify-icon icon="lucide:layers" width="20"></iconify-icon> <span>Linear</span>
</div>
<div className="w-px h-4 bg-neutral-300"></div>
<div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon> <span>On-Prem</span>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-neutral-50 relative overflow-hidden border-l border-neutral-100 flex items-center justify-center p-8 lg:p-0">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00E5E5]/10 to-transparent rounded-full blur-3xl"></div>

<div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-neutral-200/80 overflow-hidden relative z-10 animate-blur-in delay-300 transform transition-transform hover:scale-[1.01] duration-700">

<div className="px-6 py-4 border-b border-neutral-100 flex justify-between items-center bg-white">
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-xs font-semibold text-neutral-900 tracking-tight">REC 00:14:23</span>
</div>

<div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-50 rounded-lg border border-neutral-200 cursor-pointer hover:border-neutral-300 transition-colors">
<iconify-icon className="text-neutral-400" icon="lucide:briefcase" width="14"></iconify-icon>
<span className="text-xs font-medium text-neutral-700">M&amp;A Legal</span>
<iconify-icon className="text-neutral-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>

<div className="p-6 space-y-6">

<div className="flex justify-center gap-4 py-4">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-white ring-4 ring-neutral-50 relative">
<span className="text-xs font-medium">JD</span>
<div className="absolute -bottom-1 -right-1 bg-[#00E5E5] rounded-full p-0.5 border-2 border-white">
<iconify-icon className="text-black" icon="lucide:mic" width="10"></iconify-icon>
</div>
</div>
<span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wide">J. Doe (Lead)</span>
</div>
<div className="flex flex-col items-center gap-2 opacity-50">
<div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 ring-4 ring-neutral-50">
<span className="text-xs font-medium">AS</span>
</div>
<span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wide">A. Smith</span>
</div>
</div>

<div className="space-y-3">
<div className="flex gap-3">
<div className="w-0.5 h-full bg-neutral-200 rounded-full relative top-1"></div>
<div className="flex-1 space-y-1">
<p className="text-sm text-neutral-800 leading-snug">Terms agreed on <span className="bg-yellow-100/50 px-1 rounded text-neutral-900 font-medium">Clause 4.2</span> regarding liability caps.</p>
<span className="text-[10px] text-neutral-400 font-mono">14:20 • J. Doe</span>
</div>
</div>
<div className="flex gap-3 opacity-60">
<div className="w-0.5 h-full bg-neutral-100 rounded-full relative top-1"></div>
<div className="flex-1 space-y-1">
<p className="text-sm text-neutral-800 leading-snug">Motion to extend deadline by 2 weeks.</p>
<span className="text-[10px] text-neutral-400 font-mono">14:22 • A. Smith</span>
</div>
</div>
</div>

<div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-semibold text-neutral-900 flex items-center gap-1">
<iconify-icon className="text-[#00E5E5]" icon="lucide:sparkles"></iconify-icon>
                                    Auto-Tasks
                                </span>
<span className="text-[10px] text-neutral-400">Syncing to Linear...</span>
</div>

<div className="bg-white p-3 rounded-lg border border-neutral-200 shadow-sm flex items-start gap-3 mb-2 transform transition-all hover:translate-x-1 cursor-pointer">
<div className="mt-0.5 text-neutral-300">
<iconify-icon icon="lucide:square" width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-neutral-900">Update liability clause document</p>
<div className="flex items-center gap-2 mt-1.5">
<div className="flex items-center gap-1 bg-neutral-100 px-1.5 py-0.5 rounded text-[10px] text-neutral-600">
<iconify-icon icon="lucide:calendar" width="10"></iconify-icon>
<span>Fri, 12 Oct</span>
</div>
<div className="w-4 h-4 rounded-full bg-neutral-900 text-white text-[8px] flex items-center justify-center">JD</div>
</div>
</div>
</div>

<div className="bg-white p-3 rounded-lg border border-neutral-200 shadow-sm flex items-start gap-3 transform transition-all hover:translate-x-1 cursor-pointer">
<div className="mt-0.5 text-neutral-300">
<iconify-icon icon="lucide:square" width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-neutral-900">Schedule follow-up meeting</p>
<div className="flex items-center gap-2 mt-1.5">
<div className="flex items-center gap-1 bg-neutral-100 px-1.5 py-0.5 rounded text-[10px] text-neutral-600">
<iconify-icon icon="lucide:clock" width="10"></iconify-icon>
<span>Tomorrow</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-50 px-6 py-3 border-t border-neutral-200 flex justify-between items-center">
<div className="flex items-center gap-2 text-[10px] text-neutral-400">
<iconify-icon icon="lucide:lock" width="12"></iconify-icon>
                            Encrypted
                        </div>
<button className="bg-black hover:bg-neutral-800 text-white p-2 rounded-lg transition-colors">
<iconify-icon icon="lucide:stop-circle" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="absolute right-10 top-20 w-32 h-32 border border-neutral-200 rounded-full opacity-30"></div>
<div className="absolute right-20 top-40 w-16 h-16 border border-[#00E5E5] rounded-full opacity-20"></div>
</div>
</div>
</div>

    </>
  );
}
