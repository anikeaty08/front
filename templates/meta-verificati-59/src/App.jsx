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



        // Simple entry animation trigger
        document.addEventListener('DOMContentLoaded', () => {
            const elements = document.querySelectorAll('.glass-panel');
            elements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 100 * index + 300);
            });
        });
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6">
<div className="max-w-7xl mx-auto glass-panel rounded-[2rem] px-6 py-3 flex items-center justify-between" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full flex items-center justify-center font-bold tracking-tighter text-sm bg-black text-white">
                    ME
                </div>
<span className="text-sm font-medium tracking-tight hidden sm:block text-black">METAELITE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-emerald-600">
<a className="transition-colors hover:text-black" href="#">Services</a>
<a className="transition-colors hover:text-black" href="#">Intelligence</a>
<a className="transition-colors hover:text-black" href="#">Studio</a>
<a className="transition-colors hover:text-black" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<button className="transition-colors text-emerald-600 hover:text-black">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="px-5 py-2 rounded-full text-xs font-semibold transition-colors tracking-tight bg-black text-white hover:bg-emerald-800">
                    Client Portal
                </button>
</div>
</div>
</nav>

<main className="md:px-6 max-w-7xl mr-auto ml-auto pt-32 pr-4 pb-20 pl-4 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 blur-[100px] rounded-full -z-10 pointer-events-none bg-sky-100/20"></div>

<div className="text-center mb-24 max-w-3xl mx-auto animate-[fadeIn_1s_ease-out]">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-[10px] font-medium tracking-wide mb-6 uppercase text-sky-700">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-sky-600"></span>
                Official Partner Gateway
            </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-medium text-black tracking-tighter mb-6">
                Authority via 
                <span className="text-emerald-500">Authentication.</span>
</h1>
<p className="text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-light text-emerald-600">
                The premier ecosystem for Meta Verification (Blue Tick) acquisition and enterprise-grade AI utilities. Deploy authority instantly.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-3.5 rounded-full text-sm font-semibold transition-all w-full sm:w-auto overflow-hidden bg-black text-white hover:bg-emerald-900">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Start Verification
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</button>
<button className="px-8 py-3.5 glass-panel rounded-full text-sm font-medium transition-all w-full sm:w-auto flex items-center justify-center gap-2 text-black hover:bg-black/5" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<iconify-icon icon="lucide:terminal" strokeWidth="1.5" width="16"></iconify-icon>
                    Explore Utilities
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">

<div className="md:col-span-6 lg:col-span-8 row-span-2 glass-panel overflow-hidden group glow-hover flex flex-col h-full rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative justify-between" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<iconify-icon className="text-cyan-500 rotate-12" icon="lucide:badge-check" strokeWidth="1.5" width="120"></iconify-icon>
</div>
<div className="z-10 relative">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-600">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-wider uppercase text-cyan-600">Verification Terminal</span>
</div>
<h3 className="text-2xl font-medium text-black tracking-tight mb-2">Meta Blue Tick Allocation</h3>
<p className="text-sm max-w-md text-emerald-600">Access tiered submission modules (Standard, Elite, VIP) to bypass regional waitlists through direct panel injection.</p>
</div>

<div className="bg-emerald-100/50 border-black/5 border rounded-2xl mt-8 pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm">
<div className="flex items-center justify-between mb-4 pb-4 border-b border-black/5">
<div className="flex gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-sky-500/20 border border-sky-500/50"></span>
<span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></span>
<span className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></span>
</div>
<span className="text-[10px] text-emerald-500 font-mono">ID: 884-291-META</span>
</div>
<div className="space-y-3">
<div className="flex text-xs text-emerald-700 items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="animate-spin text-cyan-500" icon="lucide:loader-2" width="14"></iconify-icon>
<span className="">Checking Eligibility...</span>
</div>
<span className="font-mono text-cyan-600">PROCESSING</span>
</div>
<div className="w-full h-1.5 rounded-full overflow-hidden bg-emerald-200">
<div className="bg-cyan-500 h-full w-2/3 rounded-full relative overflow-hidden">
<div className="animate-[shimmer_2s_infinite] bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
<div className="flex gap-2 mt-2">
<span className="px-2 py-1 rounded text-[10px] border bg-black/5 border-black/5 text-emerald-600">Official ID</span>
<span className="px-2 py-1 rounded text-[10px] border bg-black/5 border-black/5 text-emerald-600">Press Articles</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-4 glass-panel rounded-[2.5rem] p-6 relative group glow-hover" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="flex items-center justify-between mb-6">
<div className="p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-600">
<iconify-icon icon="lucide:cpu" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<iconify-icon className="group-hover:text-white transition-colors text-emerald-400" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-1 text-black">Intelligence Forge</h3>
<p className="text-emerald-500 text-xs mb-4">FB UID finder, 2FA generation, and Ad Library Spy.</p>
<div className="grid grid-cols-2 gap-2">
<div className="rounded-xl p-3 border flex flex-col items-center justify-center gap-2 transition-colors cursor-pointer bg-emerald-100/80 border-black/5 hover:bg-emerald-200">
<iconify-icon className="text-emerald-600" icon="lucide:scan-face" width="20"></iconify-icon>
<span className="text-[10px] font-medium">UID Finder</span>
</div>
<div className="rounded-xl p-3 border flex flex-col items-center justify-center gap-2 transition-colors cursor-pointer bg-emerald-100/80 border-black/5 hover:bg-emerald-200">
<iconify-icon className="text-emerald-600" icon="lucide:key-round" width="20"></iconify-icon>
<span className="text-[10px] font-medium">2FA Gen</span>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-4 glass-panel rounded-[2.5rem] p-6 relative group glow-hover flex flex-col justify-center" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-black">Automation</h3>
</div>
<p className="text-emerald-500 text-xs mb-4">Waitlist bypass protocols.</p>
<div className="flex items-center justify-between rounded-full p-1.5 border bg-emerald-100 border-black/5">
<span className="px-3 text-xs text-emerald-600">Status</span>
<div className="px-3 py-1 bg-indigo-500/20 rounded-full border border-indigo-500/20 text-[10px] font-medium flex items-center gap-1.5 text-indigo-600">
<span className="w-1 h-1 rounded-full bg-indigo-600"></span>
                        Active
                    </div>
</div>
</div>

<div className="md:col-span-6 lg:col-span-4 glass-panel rounded-[2.5rem] p-0 relative group glow-hover overflow-hidden h-64 md:h-auto" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-50 via-emerald-50/60 to-transparent backdrop-blur-[1px] shadow-[inset_0_-60px_60px_-10px_rgba(255,255,255,0.6)] ring-1 ring-inset ring-white/20 transition-all duration-700"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-purple-600" icon="lucide:shirt" width="16"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-purple-600">Fashion Studio</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-1 text-black">Virtual Try-On</h3>
<p className="text-xs max-w-[200px] text-emerald-600">Gemini 3 Pro + VEO 3.1 4K video synthesis.</p>
</div>
<div className="absolute top-6 right-6 px-2 py-1 backdrop-blur rounded text-[10px] font-mono border bg-white/50 border-black/10 text-black">
                    VEO 3.1
                </div>
</div>

<div className="md:col-span-6 lg:col-span-4 glass-panel rounded-[2.5rem] p-6 relative group glow-hover flex flex-col" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-600">
<iconify-icon icon="lucide:wand-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-black">Reality Engine</h3>
<p className="text-[10px] text-emerald-500 uppercase tracking-wide">Image Manipulation</p>
</div>
</div>
<div className="flex-1 rounded-2xl border relative overflow-hidden flex items-center justify-center group-hover:border-indigo-500/20 transition-colors bg-emerald-100 border-black/5">
<div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px opacity-10">
<div className="bg-black/10"></div><div className="bg-black/5"></div><div className="bg-black/10"></div>

</div>
<div className="text-center z-10">
<iconify-icon className="mb-2 text-emerald-400" icon="lucide:image-plus" strokeWidth="1" width="32"></iconify-icon>
<p className="text-xs text-emerald-500">Drop Article URL</p>
</div>
</div>
</div>

<div className="md:col-span-12 lg:col-span-4 glass-panel rounded-[2.5rem] p-6 relative group glow-hover" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="p-2 rounded-xl border bg-black/5 border-black/10 text-black">
<iconify-icon icon="lucide:film" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-black">Creator Studio Pro</h3>
</div>
<span className="px-2 py-0.5 rounded border text-[10px] border-black/10 bg-black/5 text-emerald-600">WASM</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs text-emerald-600">
<span>Viral Filtering</span>
<div className="w-8 h-4 rounded-full relative cursor-pointer border bg-emerald-200 border-emerald-300">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-sky-500 rounded-full"></div>
</div>
</div>
<div className="h-20 rounded-xl border flex items-center px-2 gap-1 overflow-hidden relative bg-emerald-100 border-black/5">

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-sky-500/50 z-10"></div>
<div className="h-12 w-16 rounded border bg-emerald-200 border-black/5"></div>
<div className="h-12 w-24 rounded border bg-emerald-200 border-black/5"></div>
<div className="h-12 w-10 rounded border bg-emerald-200 border-black/5"></div>
<div className="h-12 w-20 rounded border bg-emerald-200 border-black/5"></div>
</div>
<button className="w-full py-2 rounded-xl text-xs font-semibold transition-colors bg-black text-white hover:bg-emerald-800">
                        Launch Editor
                    </button>
</div>
</div>
</div>

<div className="mt-20 border-t pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-black/5">
<div>
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-emerald-200 text-emerald-600">ME</div>
<span className="text-sm font-semibold tracking-tight text-black">MetaElite Shop</span>
</div>
<p className="text-emerald-500 text-xs">© 2024 MetaElite. VIP Partner Program.</p>
</div>
<div className="flex gap-6 text-xs text-emerald-500">
<a className="transition-colors hover:text-black" href="#">Privacy</a>
<a className="transition-colors hover:text-black" href="#">Terms of Service</a>
<a className="transition-colors hover:text-black" href="#">API Status</a>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors cursor-pointer bg-emerald-100 border-black/5 text-emerald-600 hover:text-black hover:border-black/20">
<iconify-icon icon="lucide:instagram" width="14"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors cursor-pointer bg-emerald-100 border-black/5 text-emerald-600 hover:text-black hover:border-black/20">
<iconify-icon icon="lucide:facebook" width="14"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors cursor-pointer bg-emerald-100 border-black/5 text-emerald-600 hover:text-black hover:border-black/20">
<iconify-icon icon="lucide:twitter" width="14"></iconify-icon>
</div>
</div>
</div>
</main>


    </>
  );
}
