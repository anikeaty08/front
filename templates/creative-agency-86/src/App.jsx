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



    !function () {
          if (!window.UnicornStudio) {
            window.UnicornStudio = { isInitialized: !1 };
            var i = document.createElement("script");
            i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",
            i.onload = function () {
              window.UnicornStudio.isInitialized || (UnicornStudio.init(), window.UnicornStudio.isInitialized = !0)
            },
            (document.head || document.body).appendChild(i)
          }
        }();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-90" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component w-full top-0 saturate-150 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="bcBYZIStYXwiogchBNHO"></div>

</div></div>

<div className="fixed top-0 w-full h-screen mix-blend-lighten pointer-events-none -z-40">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.15),transparent_50%)]"></div>
<div className="absolute top-[20%] left-[20%] w-96 h-96 bg-red-900/10 blur-[100px] rounded-full mix-blend-screen"></div>
</div>

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
</header>

<section className="flex flex-col min-h-screen pt-32 pr-4 pb-10 pl-4 relative items-center justify-center" id="work">

<div className="mb-10 animate-fade-in-down" style={{animation: 'fadeIn 0.8s ease-out forwards'}}>
<div className="inline-flex transition-transform hover:scale-105 cursor-default border-white/10 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
</span>
<span className="text-sm font-medium text-neutral-300 tracking-wide">i am watching you</span>
</div>
</div>

<div className="max-w-6xl mx-auto text-center space-y-2 mb-10">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] md:leading-[1.1]" style={{transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'}}>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">leon</span>
<span className="z-10 text-white relative drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">kennedy</span>
</h1>
</div>

<p className="md:text-xl leading-relaxed text-lg font-normal text-neutral-400 tracking-wide text-center max-w-2xl mr-auto mb-16 ml-auto" style={{transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'}}>moves in silence, builds in the dark, and lets the results speak louder than any noise.</p>

<div className="flex flex-col md:flex-row items-center gap-6">
<button className="group hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300 md:w-auto cursor-pointer bg-transparent w-full border-white/10 border rounded pt-3.5 pr-8 pb-3.5 pl-8 relative" onclick="window.location.href='https://discord.gg/nxontop'" role="button" style={{transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'}}>
<div className="relative flex items-center justify-center gap-2">
<span className="uppercase text-sm font-semibold text-white tracking-widest" onclick="window.location.href='https://discord.gg/nxontop'" role="button">my server</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</button>
</div>
</section>

<section className="md:py-24 z-10 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 relative" id="work" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1)'}}>

<div className="mb-16">
<div className="flex flex-col lg:flex-row lg:items-end gap-8 gap-x-8 gap-y-8 justify-between" id="work">
<div className="">
<h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
                        Real <span className="text-red-600">picturs</span>
</h2>
<p className="leading-relaxed text-lg text-neutral-400 max-w-xl">Built different. Moves different. Wins different.</p>
</div>
</div>
</div>

<div className="border border-white/10 rounded-2xl bg-[#080808] overflow-hidden flex flex-col lg:flex-row shadow-2xl">

<div className="w-full lg:w-[45%] border-b lg:border-b-0 lg:border-r border-white/10 relative group overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-black">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-900/10 blur-[80px] rounded-full"></div>

<div className="flex lg:p-12 min-h-[600px] h-full pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="relative w-[300px] h-[600px] bg-[#050505] rounded-[2.5rem] border-[6px] border-[#1a1a1a] shadow-2xl overflow-hidden transform transition-transform duration-700 hover:scale-[1.02] hover:-rotate-1">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-xl z-20"></div>

<div className="flex flex-col z-10 text-white w-full h-full pt-5 pr-5 pb-5 pl-5 relative">

<div className="flex justify-between items-center text-[10px] text-neutral-400 font-medium mb-6 mt-1 px-1">
<span className="">9:41</span>
<div className="flex gap-1.5 items-center">
<svg className="lucide lucide-wifi" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a14.7 14.7 0 0 0-12.8 6.9"></path><path d="M12 7a9.4 9.4 0 0 0-9 5.5"></path><path d="M12 12a5.4 5.4 0 0 0-4.5 2.5"></path><path d="M12 17a1 1 0 0 0-1 1"></path></svg>
<div className="w-4 h-2.5 border border-neutral-600 rounded-[2px] relative"><div className="absolute inset-0.5 bg-neutral-400 w-[70%]"></div></div>
</div>
</div>

<div className="flex justify-between items-center mb-8">
<h3 className="text-2xl italic font-serif">Nothing</h3>
<div className="flex gap-3">
<div className="p-2 rounded-full bg-neutral-900 border border-white/10"><svg className="lucide lucide-bell w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg></div>
<div className="p-2 rounded-full bg-neutral-800 border border-white/10"><svg className="lucide lucide-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path d="M12 5v14"></path></svg></div>
</div>
</div>

<div className="overflow-hidden bg-[#111] border-white/5 border rounded-2xl mb-6 pt-5 pr-5 pb-5 pl-5 relative">
<div className="absolute top-0 right-0 w-24 h-24 bg-red-900/20 blur-xl rounded-full -mr-10 -mt-10"></div>
<div className="flex justify-between items-start mb-6">
<div className="">
<h4 className="text-lg font-semibold mb-1">bore ho raha hu</h4>
<p className="text-xs text-neutral-500">Last 6 months</p>
</div>
<div className="flex gap-1.5 text-[10px] text-neutral-400 bg-white/5 border-white/5 border rounded-full pt-1 pr-2 pb-1 pl-2 gap-x-1.5 gap-y-1.5 items-center">idk<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span></div>
</div>

<div className="flex h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1bd1db4-666a-42f5-9bc6-9eb88d7037f4_800w.png)] bg-cover bg-center border-white/5 border-l pl-4 relative gap-x-2 gap-y-2 items-end justify-between">


</div>

<div className="flex justify-between text-[8px] text-neutral-500 mt-3 px-2">
</div>
</div>

<div className="mt-auto mx-auto w-32 h-1 bg-white/20 rounded-full"></div>
</div>

<div className="absolute right-1 top-1/2 -translate-y-1/2 w-1.5 h-32 bg-white/10 rounded-full">
<div className="w-full h-8 bg-white/30 rounded-full mt-2"></div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[55%] flex flex-col" id="about">

<div className="md:p-10 flex flex-col md:flex-row md:items-center gap-6 border-white/10 border-b pt-8 pr-8 pb-8 pl-8 gap-x-6 gap-y-6 items-start justify-between">
<div className="">
<h3 className="text-3xl font-semibold text-white mb-1">Me</h3>
<p className="uppercase text-xs font-medium text-neutral-500 tracking-wide"></p>
</div>
<div className="flex gap-8 md:gap-12">
<div className="text-center">
</div>
<div className="text-center">
</div>
<div className="text-center">
</div>
</div>
</div>

<div className="flex flex-col md:flex-row border-b border-white/10 flex-1">

<div className="w-full md:w-1/2 p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between gap-10">
<p className="leading-relaxed text-sm text-neutral-400">He balances discipline and creativity like it’s second nature. School in the morning, responsibilities in the day, and still finds time to create, design, and level up at night. That’s not luck. That’s structure</p>
<div className="">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
</span>
<span className="text-[10px] uppercase font-semibold text-neutral-500 tracking-widest">Live</span>
</div>
</div>
</div>

<div className="md:w-1/2 md:p-10 flex flex-col gap-6 bg-[#0a0a0a] w-full pt-8 pr-8 pb-8 pl-8 gap-x-6 gap-y-6 justify-between">
<div className="space-y-2">
<a className="flex justify-between items-center hover:border-white/20 hover:bg-[#151515] transition-all group bg-gradient-to-t from-orange-400 to-orange-600 border-white/5 border rounded pt-3 pr-3 pb-3 pl-3" href="https://www.reddit.com/u/_kennedy86/s/iYBtr8XKjm">Reddit</a>
</div>
<a className="flex justify-between items-center hover:border-white/20 hover:bg-[#151515] transition-all group bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-red-400 to-red-600 border-white/5 border rounded pt-3 pr-3 pb-3 pl-3" href="https://www.youtube.com/@NexafyreZ1011">YouTube</a><a className="flex justify-between items-center hover:border-white/20 hover:bg-[#151515] transition-all group bg-[radial-gradient(circle_at_left,var(--tw-gradient-stops))] from-[#662bd4] via-[#860d96] to-[#d42bce] border-white/5 border rounded pt-3 pr-3 pb-3 pl-3" href="https://www.instagram.com/_____kennedy.86/">Instagram</a></div>
</div>

<div className="md:p-10 pt-8 pr-8 pb-8 pl-8">
<div className="flex mb-6 items-end justify-between">
<span className="uppercase text-xs font-semibold text-red-600 tracking-widest font-mono">more pic's</span>
</div>
<div className="grid grid-cols-2 gap-4 h-40 gap-x-4 gap-y-4">
<div className="relative w-full h-full rounded bg-neutral-900 overflow-hidden group cursor-pointer border border-white/5">
<div className="group-hover:scale-110 transition-transform duration-700 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4122453-0832-477a-adf9-408166da65c8_800w.png?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-xs font-medium text-white">Gaming</span>
</div>
</div>
<div className="overflow-hidden group cursor-pointer w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fcc55c58-eac8-485c-9c55-53a69a3256d4_800w.png?w=800&amp;q=80)] bg-cover bg-center border-white/5 border rounded relative">
<div className="group-hover:translate-y-0 transition-transform duration-300 pt-4 pr-4 pb-4 pl-4 absolute bottom-0 left-0 translate-y-4">
<span className="text-xs font-medium text-white">Bore horaha</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-24 relative z-10" id="pricing">
<div className="mb-20 text-center max-w-2xl mx-auto">
<h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tight mb-6">Levi <span className="text-red-600">ackeraman</span></h2>
<p className="leading-relaxed text-lg text-neutral-400">There’s a quiet intensity about him. He doesn’t need validation. He needs progress. Every project, every edit, every idea it’s part of a bigger vision he doesn’t even fully reveal yet.</p>
</div>
</section>

    </>
  );
}
