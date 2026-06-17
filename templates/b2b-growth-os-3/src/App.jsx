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
      

<header className="sticky top-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200 h-10 flex items-center justify-between px-4 text-xs select-none">
<div className="flex items-center gap-4">
<button className="flex items-center gap-1.5 hover:text-neutral-500 transition-colors">
<iconify-icon className="text-base" icon="solar:command-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-semibold tracking-tighter">SALESWARE</span>
</button>
<nav className="hidden sm:flex items-center gap-3 text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#system">System</a>
<a className="hover:text-neutral-900 transition-colors" href="#engines">Engines</a>
<a className="hover:text-neutral-900 transition-colors" href="#about">About</a>
</nav>
</div>
<div className="flex items-center gap-3 text-neutral-500">
<div className="hidden sm:flex items-center gap-2">
<iconify-icon icon="solar:wi-fi-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-medium text-neutral-900">10:42 AM</span>
</div>
</header>
<main className="flex-grow flex flex-col">

<section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-200 shadow-sm mb-8">
<div className="w-2 h-2 rounded-full bg-[#00FF66] shadow-[0_0_8px_rgba(0,255,102,0.6)] animate-pulse"></div>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest">System Online</span>
</div>
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-medium text-neutral-900 tracking-tight mb-6">Your B2B Growth <br className="hidden sm:block"/> Operating System</h1>
<p className="text-base md:text-lg text-neutral-500 max-w-2xl mb-10 font-serif italic">
                Salesware: The high-end framework to architect, deploy, and scale Inbound, Outbound, and Nearbound revenue models.
            </p>
<button className="group relative flex items-center gap-3 bg-white border border-neutral-200 text-neutral-900 px-8 py-3.5 rounded shadow-sm hover:border-neutral-300 hover:shadow transition-all overflow-hidden text-sm font-medium">
<div className="absolute inset-0 bg-neutral-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
<iconify-icon className="text-lg text-[#00FF66] z-10" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="z-10 tracking-wide">Run GrowthOS.exe</span>
</button>
</section>

<section className="px-6 py-24 bg-white border-y border-neutral-200" id="system">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 mb-3">Core Modules</h2>
<p className="text-sm text-neutral-500 font-serif italic">Execute multiple strategies concurrently within one environment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col bg-neutral-50 border border-neutral-200 rounded shadow-sm overflow-hidden transition-shadow hover:shadow-md">

<div className="h-9 bg-white border-b border-neutral-200 flex items-center px-3 justify-between select-none">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full border border-neutral-300 bg-neutral-100"></div>
<div className="w-2.5 h-2.5 rounded-full border border-neutral-300 bg-neutral-100"></div>
<div className="w-2.5 h-2.5 rounded-full border border-neutral-300 bg-neutral-100"></div>
</div>
<span className="text-xs font-medium text-neutral-500 font-mono tracking-tight">InboundOS.exe</span>
<div className="w-10"></div> 
</div>

<div className="p-6 flex-grow flex flex-col">
<div className="w-10 h-10 rounded bg-white border border-neutral-200 flex items-center justify-center mb-5 text-[#00FF66]">
<iconify-icon className="text-xl" icon="solar:magnet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-neutral-900">Inbound OS</h3>
<p className="text-sm text-neutral-500 mb-6 flex-grow leading-relaxed">Turn attention into intent. Content frameworks, SEO architecture, and conversion optimization to build a scalable media asset.</p>
<ul className="text-xs space-y-2 text-neutral-600">
<li className="flex items-center gap-2 border-t border-neutral-200 pt-2"><iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Content Distribution</li>
<li className="flex items-center gap-2 border-t border-neutral-200 pt-2"><iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Search Engine dominance</li>
<li className="flex items-center gap-2 border-t border-neutral-200 pt-2"><iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Lead Magnet engineering</li>
</ul>
</div>
</div>

<div className="flex flex-col bg-neutral-50 border border-neutral-200 rounded shadow-sm overflow-hidden transition-shadow hover:shadow-md">

<div className="h-9 bg-white border-b border-neutral-200 flex items-center px-3 justify-between select-none">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full border border-neutral-300 bg-neutral-100"></div>
<div className="w-2.5 h-2.5 rounded-full border border-neutral-300 bg-neutral-100"></div>
<div className="w-2.5 h-2.5 rounded-full border border-neutral-300 bg-neutral-100"></div>
</div>
<span className="text-xs font-medium text-neutral-500 font-mono tracking-tight">OutboundOS.exe</span>
<div className="w-10"></div>
</div>

<div className="p-6 flex-grow flex flex-col">
<div className="w-10 h-10 rounded bg-white border border-neutral-200 flex items-center justify-center mb-5 text-[#00FF66]">
<iconify-icon className="text-xl" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-neutral-900">Outbound OS</h3>
<p className="text-sm text-neutral-500 mb-6 flex-grow leading-relaxed">Precision targeting at scale. Infrastructure setup, data sourcing, and hyper-personalized messaging sequences.</p>
<ul className="text-xs space-y-2 text-neutral-600">
<li className="flex items-center gap-2 border-t border-neutral-200 pt-2"><iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Email Deliverability infra</li>
<li className="flex items-center gap-2 border-t border-neutral-200 pt-2"><iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Multi-channel sequencing</li>
<li className="flex items-center gap-2 border-t border-neutral-200 pt-2"><iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Account-Based execution</li>
</ul>
</div>
</div>

<div className="flex flex-col bg-neutral-50 border border-neutral-200 rounded shadow-sm overflow-hidden transition-shadow hover:shadow-md">

<div className="h-9 bg-white border-b border-neutral-200 flex items-center px-3 justify-between select-none">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full border border-neutral-300 bg-neutral-100"></div>
<div className="w-2.5 h-2.5 rounded-full border border-neutral-300 bg-neutral-100"></div>
<div className="w-2.5 h-2.5 rounded-full border border-neutral-300 bg-neutral-100"></div>
</div>
<span className="text-xs font-medium text-neutral-500 font-mono tracking-tight">NearboundOS.exe</span>
<div className="w-10"></div>
</div>

<div className="p-6 flex-grow flex flex-col">
<div className="w-10 h-10 rounded bg-white border border-neutral-200 flex items-center justify-center mb-5 text-[#00FF66]">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-neutral-900">Nearbound OS</h3>
<p className="text-sm text-neutral-500 mb-6 flex-grow leading-relaxed">Leverage ecosystem trust. Partnership frameworks, referral engines, and community-led growth strategies.</p>
<ul className="text-xs space-y-2 text-neutral-600">
<li className="flex items-center gap-2 border-t border-neutral-200 pt-2"><iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Partner ecosystem mapping</li>
<li className="flex items-center gap-2 border-t border-neutral-200 pt-2"><iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Co-marketing motions</li>
<li className="flex items-center gap-2 border-t border-neutral-200 pt-2"><iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Influence capitalization</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 bg-neutral-50" id="engines">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 mb-2">System Engines</h2>
<p className="text-sm text-neutral-500 font-serif italic">Background processes driving revenue.</p>
</div>
<div className="text-xs text-neutral-400 flex items-center gap-2">
<iconify-icon icon="solar:server-linear" strokeWidth="1.5"></iconify-icon> Server Load: Optimal
                    </div>
</div>
<div className="bg-white border border-neutral-200 rounded shadow-sm overflow-hidden flex flex-col">

<div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-neutral-200 bg-neutral-100/50 text-xs font-medium text-neutral-500 uppercase tracking-wider">
<div className="col-span-6 sm:col-span-4">Executable</div>
<div className="col-span-6 sm:col-span-6 hidden sm:block">Function</div>
<div className="col-span-6 sm:col-span-2 text-right">Status</div>
</div>

<div className="divide-y divide-neutral-200 text-sm">

<div className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-neutral-50 transition-colors">
<div className="col-span-8 sm:col-span-4 flex items-center gap-3">
<iconify-icon className="text-lg text-neutral-400" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-neutral-900 tracking-tight">Brand.exe</span>
</div>
<div className="col-span-12 sm:col-span-6 text-neutral-500 hidden sm:block">
                                Establishes market authority and reduces friction in sales cycles.
                            </div>
<div className="col-span-4 sm:col-span-2 flex items-center justify-end gap-2">
<span className="text-xs text-neutral-600 hidden sm:inline">Running</span>
<div className="w-2 h-2 rounded-full bg-[#00FF66]"></div>
</div>
</div>

<div className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-neutral-50 transition-colors">
<div className="col-span-8 sm:col-span-4 flex items-center gap-3">
<iconify-icon className="text-lg text-neutral-400" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-neutral-900 tracking-tight">ColdEmail.exe</span>
</div>
<div className="col-span-12 sm:col-span-6 text-neutral-500 hidden sm:block">
                                Direct-to-decision-maker communication protocol.
                            </div>
<div className="col-span-4 sm:col-span-2 flex items-center justify-end gap-2">
<span className="text-xs text-neutral-600 hidden sm:inline">Running</span>
<div className="w-2 h-2 rounded-full bg-[#00FF66]"></div>
</div>
</div>

<div className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-neutral-50 transition-colors">
<div className="col-span-8 sm:col-span-4 flex items-center gap-3">
<iconify-icon className="text-lg text-neutral-400" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-neutral-900 tracking-tight">Trust.exe</span>
</div>
<div className="col-span-12 sm:col-span-6 text-neutral-500 hidden sm:block">
                                Social proof processing and case study distribution.
                            </div>
<div className="col-span-4 sm:col-span-2 flex items-center justify-end gap-2">
<span className="text-xs text-neutral-600 hidden sm:inline">Running</span>
<div className="w-2 h-2 rounded-full bg-[#00FF66]"></div>
</div>
</div>

<div className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-neutral-50 transition-colors">
<div className="col-span-8 sm:col-span-4 flex items-center gap-3">
<iconify-icon className="text-lg text-neutral-400" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-neutral-900 tracking-tight">Analytics.dll</span>
</div>
<div className="col-span-12 sm:col-span-6 text-neutral-500 hidden sm:block">
                                Real-time telemetry on campaign performance and pipeline velocity.
                            </div>
<div className="col-span-4 sm:col-span-2 flex items-center justify-end gap-2">
<span className="text-xs text-neutral-400 hidden sm:inline">Standby</span>
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 bg-white border-t border-neutral-200" id="about">
<div className="max-w-3xl mx-auto">
<div className="flex flex-col bg-neutral-50 border border-neutral-200 rounded shadow-sm overflow-hidden">

<div className="h-9 bg-neutral-100 border-b border-neutral-200 flex items-center px-3 justify-between select-none">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-neutral-600">AboutMe.txt - Editor</span>
</div>
<div className="flex gap-1.5">
<button className="w-4 h-4 flex items-center justify-center hover:bg-neutral-200 rounded transition-colors text-neutral-500">
<iconify-icon className="text-[0.6rem]" icon="solar:minimize-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-4 h-4 flex items-center justify-center hover:bg-neutral-200 rounded transition-colors text-neutral-500">
<iconify-icon className="text-[0.6rem]" icon="solar:maximize-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-4 h-4 flex items-center justify-center hover:bg-red-500 hover:text-white rounded transition-colors text-neutral-500">
<iconify-icon className="text-[0.6rem]" icon="solar:close-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start bg-white">

<div className="shrink-0 w-32 h-40 bg-neutral-200 border border-neutral-300 rounded overflow-hidden relative grayscale">
<div className="absolute inset-0 flex items-center justify-center text-neutral-400">
<iconify-icon className="text-4xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="flex-grow space-y-4 text-sm text-neutral-700 leading-relaxed font-mono">
<p className="font-sans text-xl font-medium tracking-tight text-neutral-900 mb-6">Jerzy Opar</p>
<p className="font-serif italic text-base text-neutral-500 pb-2 border-b border-neutral-100">
                                "Growth is not a series of hacks. It's an engineered system."
                            </p>
<p>
                                &gt; System initialized.<br/>
                                &gt; Loading founder credentials... Done.
                            </p>
<p>
                                I built SALESWARE to solve a specific problem: B2B companies treat growth like a collection of disparate tactics rather than an integrated operating system.
                            </p>
<p>
                                By combining the rigor of software architecture with high-end marketing strategy, we deploy growth frameworks that scale predictably. We don't just run campaigns; we install engines.
                            </p>
<p className="pt-4 text-neutral-400">
                                EOF
                            </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="mt-auto bg-neutral-100 border-t border-neutral-300 h-12 flex items-center px-2 justify-between shrink-0 select-none z-50 relative">

<div className="flex items-center gap-1 h-full py-1">
<button className="h-full px-3 flex items-center gap-2 hover:bg-white hover:shadow-sm rounded border border-transparent hover:border-neutral-200 transition-all text-neutral-700">
<iconify-icon className="text-lg text-[#00FF66]" icon="solar:windows-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Start</span>
</button>
<div className="w-[1px] h-6 bg-neutral-300 mx-1"></div>

<div className="flex items-center gap-1 h-full">
<div className="h-full px-3 flex items-center gap-2 bg-white shadow-sm border border-neutral-200 rounded text-neutral-900 relative">
<iconify-icon className="text-sm" icon="solar:browser-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium truncate max-w-[100px] sm:max-w-none">SALESWARE_Index</span>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#00FF66] rounded-t-sm"></div>
</div>
</div>
</div>

<div className="flex items-center gap-3 px-3 h-full text-neutral-500">
<button className="hover:text-neutral-900 transition-colors hidden sm:block">
<iconify-icon icon="solar:volume-small-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="flex flex-col items-end justify-center leading-none">
<span className="text-[0.65rem] font-medium text-neutral-900">ENG</span>
<span className="text-[0.65rem]">US</span>
</div>
<button className="w-1 h-full border-l border-neutral-300 ml-1 hover:bg-neutral-200 transition-colors" title="Show Desktop"></button>
</div>
</footer>

    </>
  );
}
