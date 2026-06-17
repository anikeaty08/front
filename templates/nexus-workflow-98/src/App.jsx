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


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="w-full h-full">
<div className="w-full h-full relative">
<div className="aura-background-component top-0 w-full absolute h-full">
<div className="absolute w-full h-full left-0 top-0" data-us-project="bKN5upvoulAmWvInmHza"></div>

</div>
</div>
</div></div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="group-hover:opacity-80 transition-opacity text-sm font-semibold text-white tracking-tight" style={{}}>Pumpkin</span>
</a>
<div className="flex gap-x-4 gap-y-4 items-center">
<a className="hidden md:block transition-colors hover:text-white text-sm text-stone-300" href="#" style={{}}>FAQs</a>
<a className="transition-colors hover:bg-stone-200 text-xs font-medium text-black bg-yellow-500 rounded-full pt-2 pr-4 pb-2 pl-4" href="#">Apply</a>
</div>
</div>
</nav>

<section className="overflow-hidden md:pt-48 md:pb-0 pt-32 pb-20 relative" id="hero">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-[100%] blur-[100px] pointer-events-none bg-amber-500/10" style={{}}></div>
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-[100%] blur-[120px] pointer-events-none" style={{}}></div>
<div className="text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<h1 className="leading-[1.1] md:text-7xl lg:text-7xl text-5xl font-medium text-white tracking-tight max-w-4xl mr-auto mb-6 ml-auto" style={{}}>Pumpkin Affiliate <br className=""/> <span className="text-stone-500" style={{}}>Multiply Earnings System</span></h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-stone-400 max-w-2xl mr-auto mb-10 ml-auto" style={{}}>一段介绍一段介绍一段介绍一段介绍</p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<button className="transition-colors flex gap-2 group hover:bg-stone-200 text-sm font-medium text-black bg-yellow-500 h-10 rounded-full pr-6 pl-6 gap-x-2 gap-y-2 items-center" style={{}}>Login</button>
<button className="transition-colors flex gap-2 hover:bg-white/10 text-sm font-medium text-white bg-white/5 h-10 border-white/10 border rounded-full pr-6 pl-6 gap-x-2 gap-y-2 items-center" style={{}}>Apply for Affiliate</button>
</div>

<div className="relative max-w-5xl mx-auto">
</div>

</div>
</section>



<section className="overflow-hidden pt-0 pb-24 relative" id="pricing">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[100px] pointer-events-none bg-amber-900/10" style={{}}></div>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center mb-16">

</div>
<div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mr-auto ml-auto gap-x-8 gap-y-8">

<div className="glass-panel flex flex-col rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Hyperliquid</h3>
<div className="mt-2 flex items-baseline gap-1">
</div>
</div>
<div className="my-6 border-t border-white/5"></div>
<ul className="space-y-3 flex-1">
<li className="flex items-start gap-3 text-sm text-stone-300" style={{}}>
<iconify-icon className="text-stone-500 mt-0.5" height="16" icon="lucide:x" style={{color: 'rgb(120, 113, 108)'}} width="16"></iconify-icon>
<span className="">1 tier referral system</span>
</li>
<li className="flex gap-3 text-sm text-stone-300 gap-x-3 gap-y-3 items-start">
<iconify-icon className="text-stone-500 mt-0.5" height="16" icon="lucide:x" style={{color: 'rgb(120, 113, 108)'}} width="16"></iconify-icon>
<span className="">10% referral program</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-300" style={{}}>
<iconify-icon className="text-stone-500 mt-0.5" height="16" icon="lucide:x" style={{color: 'rgb(120, 113, 108)'}} width="16"></iconify-icon>
<span className="">No advanced charts</span>
</li>
</ul>
</div>

<div className="flex flex-col border-amber-500/30 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute inset-0 bg-gradient-to-b to-transparent rounded-2xl pointer-events-none from-amber-500/5" style={{}}></div>
<div className="-translate-x-1/2 -translate-y-1/2 text-[10px] uppercase font-semibold text-zinc-950 tracking-widest bg-yellow-500 rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-0 left-1/2 shadow-[0_0_15px_rgba(99,102,241,0.5)]">直播交易</div>
<div className="mb-4 relative z-10">
<h3 className="text-lg font-medium text-white">Pumpkin</h3>
<div className="mt-2 flex items-baseline gap-1">
</div>
</div>
<div className="my-6 border-t relative z-10 border-white/5"></div>
<ul className="flex-1 z-10 relative space-y-3">
<li className="flex gap-3 text-sm text-stone-300 gap-x-3 gap-y-3 items-start">
<iconify-icon className="text-amber-400 mt-0.5" height="16" icon="lucide:check" style={{color: 'rgb(251, 191, 36)'}} width="16"></iconify-icon>
<span className="">3+ tier affiliate system</span>
</li>
<li className="flex gap-3 text-sm text-stone-300 gap-x-3 gap-y-3 items-start">
<iconify-icon className="mt-0.5 text-amber-400" icon="lucide:check" style={{}} width="16"></iconify-icon>
<span className="">50+% of affliiates’ fees</span>
</li>
<li className="flex gap-3 text-sm text-stone-300 gap-x-3 gap-y-3 items-start">
<iconify-icon className="mt-0.5 text-amber-400" icon="lucide:check" style={{}} width="16"></iconify-icon>
<span className="">Multi-advanced-chart split</span>
</li>
</ul>
</div>

</div>
</div>
</section>


    </>
  );
}
