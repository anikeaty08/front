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
      
<main className="max-w-7xl w-full mx-auto">

<header className="mb-12 md:mb-16 max-w-2xl">
<div className="flex items-center gap-2 mb-4 animate-fade-in">
<div className="w-2 h-2 rounded-full bg-[#2C6FFC] shadow-[0_0_10px_#2C6FFC]"></div>
<span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Our Process</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 mb-4">
                From vision to <span className="text-[#2C6FFC]">reality.</span>
</h1>
<p className="text-lg text-zinc-500 font-normal leading-relaxed max-w-lg">
                We transform your ideas into a high-performance digital presence through a clear, structured seven-step journey.
            </p>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(200px,auto)] gap-5 md:gap-6">

<div className="bento-card group relative col-span-1 md:col-span-2 row-span-2 bg-white border border-zinc-200 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-[#2C6FFC]">
<iconify-icon height="20" icon="lucide:ear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Understand Your Vision</h3>
<p className="text-zinc-500 text-sm leading-relaxed max-w-sm">We start by listening. Your goals, your users, and what success looks like for you.</p>
</div>

<div className="mt-8 relative h-48 w-full flex flex-col items-center justify-end pb-4 space-y-3">

<div className="self-start ml-4 md:ml-12 bg-zinc-50 border border-zinc-200 px-5 py-3 rounded-2xl rounded-bl-sm group-hover:-translate-y-1 transition-transform duration-500 shadow-sm">
<span className="text-xs font-medium text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="lucide:users" width="14"></iconify-icon>
                            Users
                        </span>
</div>

<div className="self-center bg-[#2C6FFC]/5 border border-[#2C6FFC]/20 px-6 py-4 rounded-2xl group-hover:-translate-y-2 transition-transform duration-500 delay-75 shadow-sm">
<span className="text-sm font-semibold text-[#2C6FFC] flex items-center gap-2">
<iconify-icon icon="lucide:target" width="16"></iconify-icon>
                            Goals
                        </span>
</div>

<div className="self-end mr-4 md:mr-12 bg-zinc-50 border border-zinc-200 px-5 py-3 rounded-2xl rounded-br-sm group-hover:-translate-y-1 transition-transform duration-500 delay-100 shadow-sm">
<span className="text-xs font-medium text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="lucide:briefcase" width="14"></iconify-icon>
                            Business Needs
                        </span>
</div>
</div>
</div>

<div className="bento-card group relative col-span-1 row-span-2 bg-white border border-zinc-200 rounded-[2rem] p-8 flex flex-col overflow-hidden">
<div className="mb-auto">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon height="20" icon="lucide:map" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Plan the Experience</h3>
<p className="text-zinc-500 text-sm leading-relaxed">We structure your website to be clear, fast, and easy to use.</p>
</div>

<div className="mt-8 flex flex-col items-center w-full relative h-64 justify-end pb-6">

<div className="z-10 bg-white border border-zinc-200 shadow-sm px-4 py-2 rounded-lg text-xs font-medium text-zinc-600 mb-8 group-hover:border-[#2C6FFC] group-hover:text-[#2C6FFC] transition-colors duration-300 w-24 text-center">
                        Structure
                    </div>

<div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[70%] h-8 border-t border-r border-l border-zinc-200 rounded-t-xl z-0"></div>
<div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-px h-8 bg-zinc-200 z-0"></div>

<div className="flex justify-between w-full z-10 gap-2 px-2">
<div className="flex-1 bg-zinc-50 border border-zinc-100 py-2 rounded-lg flex flex-col items-center gap-1 group-hover:bg-[#2C6FFC]/5 transition-colors delay-75">
<div className="w-6 h-4 bg-zinc-200 rounded-sm opacity-50"></div>
<span className="text-[9px] uppercase tracking-wider font-medium text-zinc-400">Pages</span>
</div>
<div className="flex-1 bg-zinc-50 border border-zinc-100 py-2 rounded-lg flex flex-col items-center gap-1 group-hover:bg-[#2C6FFC]/5 transition-colors delay-100">
<div className="w-6 h-4 bg-zinc-200 rounded-sm opacity-50"></div>
<span className="text-[9px] uppercase tracking-wider font-medium text-zinc-400">User Flow</span>
</div>
</div>
</div>
</div>

<div className="bento-card group relative col-span-1 bg-[#09090b] border border-zinc-800 rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#2C6FFC] opacity-10 blur-[50px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-white" height="20" icon="lucide:palette" strokeWidth="1.5" width="20"></iconify-icon>
<div className="w-2 h-2 rounded-full bg-[#2C6FFC]"></div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-1">Design the Look &amp; Feel</h3>
<p className="text-zinc-400 text-xs leading-relaxed">We design a modern interface that feels clean, consistent, and on-brand.</p>
</div>

<div className="mt-6 space-y-3 relative z-10">

<div className="w-full h-8 bg-[#2C6FFC] rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform duration-300">
<span className="text-[10px] font-semibold text-white">Get Started</span>
</div>

<div className="flex gap-2">
<div className="h-8 w-8 bg-zinc-800 rounded-lg"></div>
<div className="h-8 flex-1 bg-zinc-800 rounded-lg flex items-center px-2">
<div className="w-12 h-1.5 bg-zinc-700 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="bento-card group relative col-span-1 bg-white border border-zinc-200 rounded-[2rem] p-8 flex flex-col overflow-hidden">
<div className="mb-4">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-1">Build the Website</h3>
<p className="text-zinc-500 text-xs">We turn the design into a fast, responsive, and scalable website.</p>
</div>

<div className="mt-auto bg-zinc-50 rounded-xl p-4 border border-zinc-100 font-mono text-[10px] leading-relaxed text-zinc-500 group-hover:bg-zinc-100/50 transition-colors">
<div className="flex gap-1.5 mb-2 opacity-50">
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
</div>
<div className="flex flex-col gap-1">
<div className="flex gap-2">
<span className="text-[#2C6FFC]">&lt;div&gt;</span>
</div>
<div className="pl-4 flex gap-2">
<span className="text-zinc-400">class=</span><span className="text-[#2C6FFC]">"hero"</span>
</div>
<div className="flex gap-2">
<span className="text-[#2C6FFC]">&lt;/div&gt;</span>
</div>
</div>
</div>
</div>

<div className="bento-card group relative col-span-1 md:col-span-2 bg-white border border-zinc-200 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
<div className="flex-1 text-left w-full">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-[#2C6FFC]/10 flex items-center justify-center text-[#2C6FFC]">
<iconify-icon height="16" icon="lucide:cable" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight">Connect Everything</h3>
</div>
<p className="text-sm text-zinc-500 max-w-xs">We integrate tools, forms, analytics, and APIs you need to run your business.</p>
</div>

<div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end">

<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:database" width="16"></iconify-icon>
</div>
</div>

<div className="w-8 h-px bg-zinc-200 relative">
<div className="absolute right-0 -top-0.5 w-1 h-1 bg-zinc-300 rounded-full"></div>
</div>

<div className="w-12 h-12 rounded-xl bg-[#2C6FFC] shadow-lg shadow-[#2C6FFC]/20 flex items-center justify-center text-white z-10 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:link" width="20"></iconify-icon>
</div>

<div className="w-8 h-px bg-zinc-200 relative">
<div className="absolute left-0 -top-0.5 w-1 h-1 bg-zinc-300 rounded-full"></div>
</div>

<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:bar-chart-3" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bento-card group relative col-span-1 bg-white border border-zinc-200 rounded-[2rem] p-8 flex flex-col overflow-hidden">
<div className="mb-2">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-1">Test &amp; Refine</h3>
<p className="text-zinc-500 text-xs">We test every detail to make sure everything works perfectly.</p>
</div>

<div className="mt-auto space-y-2">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-100 group-hover:bg-green-50 group-hover:border-green-100 transition-colors">
<iconify-icon className="text-zinc-300 group-hover:text-green-500 transition-colors" height="12" icon="lucide:check-circle" width="12"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-500">Performance</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-100 group-hover:bg-green-50 group-hover:border-green-100 transition-colors delay-75">
<iconify-icon className="text-zinc-300 group-hover:text-green-500 transition-colors" height="12" icon="lucide:check-circle" width="12"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-500">Responsiveness</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-100 group-hover:bg-green-50 group-hover:border-green-100 transition-colors delay-100">
<iconify-icon className="text-zinc-300 group-hover:text-green-500 transition-colors" height="12" icon="lucide:check-circle" width="12"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-500">Accessibility</span>
</div>
</div>
</div>

<div className="bento-card group relative col-span-1 bg-gradient-to-br from-white to-blue-50/50 border border-zinc-200 rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden cursor-pointer">
<div className="flex justify-between items-start">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Launch &amp; Support</h3>
<div className="w-8 h-8 rounded-full bg-[#2C6FFC]/10 flex items-center justify-center group-hover:bg-[#2C6FFC] transition-colors duration-300">
<iconify-icon className="text-[#2C6FFC] group-hover:text-white transition-colors duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" height="16" icon="lucide:rocket" width="16"></iconify-icon>
</div>
</div>
<div className="mt-4">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tighter text-zinc-900 group-hover:text-[#2C6FFC] transition-colors">100%</span>
</div>
<div className="text-xs font-medium text-zinc-400 mt-1">Uptime Goal</div>
<p className="text-[10px] text-zinc-400 mt-2">We launch your website and stay with you for updates.</p>
</div>
</div>
</div>

<div className="mt-16 flex items-center justify-between border-t border-zinc-100 pt-8">
<span className="text-xs text-zinc-400 font-medium tracking-wide">WORKFLOW V3.0</span>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#2C6FFC]"></span>
<span className="text-xs text-zinc-400 font-medium">Ready to start</span>
</div>
</div>
</main>

    </>
  );
}
