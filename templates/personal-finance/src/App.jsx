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
  


          document.addEventListener('DOMContentLoaded', function () {
            if (window.lucide) {
              // Icons are already custom inline; lucide script kept for potential future use.
            }
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-180 saturate-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="qpSlPSWA2bdkUAYztz8z"></div>

</div></div>
<div className="w-full max-w-6xl mx-auto px-4 py-6 md:py-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 lg:gap-6">

<div className="md:col-span-2 overflow-hidden flex flex-col bg-orange-100 rounded-3xl pt-8 pr-6 pb-8 pl-6 relative justify-between">
<div className="flex items-start justify-between gap-4">
<div className="">
<p className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 mb-1">
              Everyday spending, orchestrated.
            </p>
<p className="text-sm md:text-base text-neutral-700 max-w-xs">
              Group your spend into smart lanes so rent, travel, dining, and savings never compete for the same pound.
            </p>
</div>
<div className="hidden sm:flex flex-col items-end gap-1">
<span className="inline-flex items-center gap-1 rounded-full bg-neutral-900/5 text-xs text-neutral-700 px-3 py-1">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Live envelopes
            </span>
<span className="inline-flex items-center gap-1 rounded-full bg-neutral-900/5 text-xs text-neutral-700 px-3 py-1">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Auto‑allocations
            </span>
</div>
</div>
<div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
<div className="rounded-2xl bg-neutral-900 text-orange-50 p-4 flex flex-col justify-between">
<div className="flex items-center justify-between mb-3">
<div>
<p className="text-xs font-medium tracking-tight text-neutral-300">Rent lane</p>
<p className="text-lg font-semibold tracking-tight text-orange-100">£1,420</p>
</div>
<div className="h-8 w-8 rounded-xl bg-orange-500/20 flex items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="home-bold-duotone" fill="none" height="20" id="rent-icon" stroke="currentColor" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(253, 186, 116)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><defs><path d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" id="SVG1WEi9bFG"></path></defs><path className="" clip-rule="evenodd" d="m21.532 11.586l-.782-.626v10.29H22a.75.75 0 0 1 0 1.5H2a.75.75 0 1 1 0-1.5h1.25V10.96l-.781.626a.75.75 0 1 1-.937-1.172l8.125-6.5a3.75 3.75 0 0 1 4.686 0l8.125 6.5a.75.75 0 1 1-.936 1.172M12 6.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m1.746 6.562c-.459-.062-1.032-.062-1.697-.062h-.098c-.665 0-1.238 0-1.697.062c-.491.066-.963.215-1.345.597s-.531.854-.597 1.345c-.062.459-.062 1.032-.062 1.697v4.299h7.5v-4.423c0-.612-.004-1.143-.062-1.573c-.066-.491-.215-.963-.597-1.345s-.853-.531-1.345-.597" fill="#fdba74" fill-rule="evenodd"></path><g clip-rule="evenodd" fill="#fdba74" fill-rule="evenodd" opacity=".5"><use href="#SVG1WEi9bFG"></use><use href="#SVG1WEi9bFG"></use></g><path className="" d="M12.05 13.25c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.058.43.062.96.062 1.573v4.423h-7.5v-4.3c0-.664 0-1.237.062-1.696c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062zM16 3h2.5a.5.5 0 0 1 .5.5v4.14l-3.5-2.8V3.5A.5.5 0 0 1 16 3" fill="#fdba74" opacity=".5"></path></svg>
</div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-neutral-400">
<span>Next debit in 3 days</span>
<span className="text-emerald-300 font-medium">On track</span>
</div>
</div>
<div className="rounded-2xl bg-white/80 text-neutral-900 p-4 flex flex-col justify-between border border-orange-200/60">
<div className="flex items-center justify-between mb-3">
<div className="">
<p className="text-xs font-medium tracking-tight text-neutral-500">Travel lane</p>
<p className="text-lg font-semibold tracking-tight">£680</p>
</div>
<div className="h-8 w-8 rounded-xl bg-orange-100 flex items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="planet-2-bold-duotone" fill="none" height="20" id="rent-icon" stroke="currentColor" strokeWidth="1.5" style={{color: 'rgb(253, 186, 116)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0" fill="#fdba74" opacity=".5"></path><path d="M19.009 6.784a.75.75 0 0 0-.138-1.494q-.637.06-1.345.2a.75.75 0 0 0-.472.309l1.117 1.097q.444-.075.838-.112" fill="#fdba74"></path><path clip-rule="evenodd" d="M20.937 5.38a.75.75 0 1 0-.346 1.459c.394.093.546.232.602.322c.063.102.133.366-.157.948a.75.75 0 0 0 1.343.67c.378-.759.563-1.65.086-2.413c-.344-.55-.923-.843-1.528-.987m-.225 5.581a.75.75 0 1 0-1.065-1.057c-.686.692-1.567 1.43-2.608 2.171a.75.75 0 0 0 .87 1.222c1.095-.78 2.044-1.572 2.803-2.336M3.587 14.947q.302-.378.706-.79l-.238-1.33a.75.75 0 0 0-.744.189q-.503.505-.896.995a.75.75 0 1 0 1.172.937m12.163-.243a.75.75 0 1 0-.77-1.287a35 35 0 0 1-3.092 1.645a.75.75 0 0 0 .638 1.357a37 37 0 0 0 3.224-1.715M2.815 16.25a.75.75 0 0 0-1.43-.455c-.191.601-.211 1.262.15 1.84c.453.724 1.307 1.006 2.154 1.087a.75.75 0 1 0 .143-1.493c-.694-.066-.948-.267-1.025-.39c-.05-.08-.102-.244.008-.589m7.268 1.203a.75.75 0 0 0-.527-1.404c-1.225.46-2.365.791-3.362.989a.75.75 0 0 0 .291 1.471c1.093-.216 2.313-.574 3.598-1.056" fill="#fdba74" fill-rule="evenodd"></path></svg>
</div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-neutral-500">
<span>Weekend getaways</span>
<span className="text-emerald-600 font-medium">+£120 this month</span>
</div>
</div>
<div className="rounded-2xl bg-orange-50 text-neutral-900 p-4 flex flex-col justify-between">
<div className="flex items-center justify-between mb-3">
<div>
<p className="text-xs font-medium tracking-tight text-neutral-500">Dining lane</p>
<p className="text-lg font-semibold tracking-tight">£320</p>
</div>
<div className="flex bg-orange-100 w-8 h-8 rounded-xl items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="tea-cup-bold-duotone" fill="none" height="20" id="rent-icon" stroke="currentColor" strokeWidth="1.5" style={{color: 'rgb(253, 186, 116)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill="#fdba74" fill-rule="evenodd"><path d="M2.25 11.88c-.01.177.015.39.065.818l.401 3.428A5.515 5.515 0 0 0 8.193 21h3.614a5.52 5.52 0 0 0 5.028-3.25H19a3.75 3.75 0 1 0 0-7.5h-2.279a2 2 0 0 0-.618-.22c-.174-.03-.39-.03-.82-.03H4.717c-.43 0-.645 0-.819.03a2 2 0 0 0-1.646 1.85m15.487-.13q.008.065.012.13c.01.177-.014.39-.064.818l-.401 3.428l-.016.124H19a2.25 2.25 0 0 0 0-4.5z"></path><path d="M10.53 1.47a.75.75 0 0 1 0 1.06a.666.666 0 0 0 0 .94a2.164 2.164 0 0 1 0 3.06a.75.75 0 0 1-1.06-1.06c.26-.26.26-.68 0-.94a2.164 2.164 0 0 1 0-3.06a.75.75 0 0 1 1.06 0m-4.5 1.5a.75.75 0 0 1 0 1.06l-.116.116a.69.69 0 0 0-.064.904a2.19 2.19 0 0 1-.203 2.864l-.116.116A.75.75 0 0 1 4.47 6.97l.116-.116a.69.69 0 0 0 .064-.904a2.19 2.19 0 0 1 .204-2.864l.116-.116a.75.75 0 0 1 1.06 0m9.5 0a.75.75 0 0 1 0 1.06l-.116.116a.69.69 0 0 0-.064.904a2.19 2.19 0 0 1-.203 2.864l-.117.116a.75.75 0 1 1-1.06-1.06l.116-.116a.69.69 0 0 0 .064-.904a2.19 2.19 0 0 1 .204-2.864l.116-.116a.75.75 0 0 1 1.06 0" opacity=".5"></path></g></svg>
</div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-neutral-500">
<span>Weekly cap</span>
<span className="text-amber-600 font-medium">72% used</span>
</div>
</div>
<button className="rounded-2xl border border-neutral-900/10 bg-neutral-900/5 text-neutral-900 p-4 flex items-center justify-between hover:bg-neutral-900/10 transition">
<div className="">
<p className="text-sm font-medium tracking-tight">Add a new lane</p>
<p className="text-xs text-neutral-600">
                Create a bucket for savings, goals, or one‑off plans.
              </p>
</div>
<div className="flex flex-none text-orange-100 bg-neutral-900 w-9 h-9 rounded-full items-center justify-center">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="plus" fill="none" height="20" id="rent-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(253, 186, 116)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</button>
</div>

</div>

<div className="overflow-hidden flex bg-center bg-emerald-50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64ca547b-81d2-4430-ad64-ac776a77afb6_800w.webp)] bg-cover rounded-3xl items-center justify-center">
</div>

<div className="flex bg-gradient-to-br from-white/10 to-white/0 rounded-3xl pt-6 pr-4 pb-6 pl-4 backdrop-blur-lg items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>
<div className="bg-neutral-900 rounded-[2.4rem] w-full max-w-[260px] aspect-[9/19] shadow-2xl flex flex-col">
<div className="px-4 pt-4 flex items-center justify-between text-[10px] text-neutral-300">
<span className="">9:41</span>
<div className="flex items-center gap-1">
<span className="iconify text-xs" data-icon="solar:wifi-bold-duotone"></span>
<svg aria-hidden="true" className="iconify text-xs iconify--solar" data-icon="solar:battery-charge-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172" fill="currentColor" opacity=".5"></path><path d="M19.491 14c.009-.6.009-1.264.009-2c0-.735 0-1.4-.009-2H20c.942 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.942 14 20 14zm-7.415-4.52a.75.75 0 0 0-1.152-.96l-2.5 3A.75.75 0 0 0 9 12.75h1.899l-1.475 1.77a.75.75 0 0 0 1.152.96l2.5-3a.75.75 0 0 0-.576-1.23h-1.899z" fill="currentColor"></path></svg>
</div>
</div>
<div className="flex-1 bg-emerald-50 rounded-[2rem] mx-1 mt-1 mb-2 px-4 pt-5 pb-4 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="">
<p className="text-xs font-medium text-emerald-700 tracking-tight">Growth Tracker</p>
<p className="text-[10px] text-neutral-500">PERFORMANCE • LIVE</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-medium">
                +19.3%
              </span>
</div>
<div className="bg-neutral-900 rounded-2xl px-3 py-3 mb-3">
<div className="flex items-center justify-between mb-2">
<p className="text-[10px] text-neutral-400">Analytics</p>
<p className="text-sm font-semibold tracking-tight text-amber-300">$6,214</p>
</div>
<div className="flex items-center justify-between">
<p className="text-[10px] text-neutral-400">Reserve</p>
<p className="text-sm font-semibold tracking-tight text-emerald-300">$3,908</p>
</div>
</div>
<div className="flex-1 mb-3">
<div className="h-16 w-full bg-gradient-to-t from-emerald-200 via-emerald-100 to-transparent rounded-xl flex items-end px-1 gap-1">
<div className="w-[7%] bg-emerald-400 rounded-t-lg h-5"></div>
<div className="w-[7%] bg-emerald-500 rounded-t-lg h-8"></div>
<div className="w-[7%] bg-emerald-400 rounded-t-lg h-6"></div>
<div className="w-[7%] bg-emerald-300 rounded-t-lg h-10"></div>
<div className="w-[7%] bg-emerald-500 rounded-t-lg h-14"></div>
<div className="w-[7%] bg-emerald-400 rounded-t-lg h-9"></div>
<div className="w-[7%] bg-emerald-500 rounded-t-lg h-12"></div>
<div className="w-[7%] bg-emerald-400 rounded-t-lg h-7"></div>
<div className="w-[7%] bg-emerald-500 rounded-t-lg h-11"></div>
<div className="w-[7%] bg-emerald-400 rounded-t-lg h-6"></div>
<div className="w-[7%] bg-emerald-300 rounded-t-lg h-8"></div>
<div className="w-[7%] bg-emerald-500 rounded-t-lg h-13"></div>
<div className="w-[7%] bg-emerald-400 rounded-t-lg h-9"></div>
<div className="w-[7%] bg-emerald-500 rounded-t-lg h-12"></div>
</div>
</div>
<div className="mb-3">
<p className="text-sm font-semibold tracking-tight text-neutral-900 mb-1">
                Accelerate Your Money Momentum
              </p>
<p className="text-[10px] text-neutral-500 leading-snug">
                Track, forecast, and tune your cash flow with live insights tailored to your spending rhythm.
              </p>
</div>
<button className="mt-auto bg-neutral-900 text-emerald-100 text-xs font-medium rounded-xl py-2 flex items-center justify-center gap-1">
              Continue
              <svg aria-hidden="true" className="iconify text-sm iconify--solar" data-icon="solar:arrow-right-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path><path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path></svg>
</button>
</div>
</div>
</div>

<div className="bg-amber-200 rounded-3xl px-6 py-6 flex flex-col justify-between">
<div className="relative w-full pt-4">
<div className="relative mx-auto h-40 w-40">
<div className="absolute inset-0 rounded-full border border-amber-400 border-dashed"></div>
<div className="absolute inset-4 rounded-full border border-amber-500 border-dashed"></div>
<div className="absolute inset-8 rounded-full border border-amber-600 border-dashed"></div>
<div className="absolute inset-0 flex items-center justify-center">
<p className="text-xs font-medium text-amber-900 tracking-tight">Global Wallet</p>
</div>
</div>
<div className="absolute left-0 top-6">
<div className="bg-amber-900 text-amber-50 text-[10px] px-3 py-2 rounded-xl shadow-sm flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-700">
<svg aria-hidden="true" className="iconify text-[12px] iconify--solar" data-icon="solar:card-2-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12c0-.442-.002-1.608-.004-2H2c-.002.392 0 1.558 0 2c0 3.771 0 5.657 1.171 6.828S6.23 20 10 20" fill="currentColor" opacity=".5"></path><path d="M5.25 13.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" fill="currentColor"></path><path className="" clip-rule="evenodd" d="M17.197 12.293c-.323-.043-.72-.043-1.152-.043h-.09c-.433 0-.83 0-1.152.043c-.356.048-.731.16-1.04.47s-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152v.09c0 .433 0 .83.043 1.152c.048.356.16.731.47 1.04s.684.422 1.04.47c.323.043.72.043 1.152.043h.09c.433 0 .83 0 1.152-.043c.356-.048.731-.16 1.04-.47s.422-.684.47-1.04c.043-.323.043-.72.043-1.152v-.09c0-.433 0-.83-.043-1.152c-.048-.356-.16-.731-.47-1.04s-.684-.422-1.04-.47m-2.371 1.529l-.003.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997s.002.787.03.997a.7.7 0 0 0 .042.177l.001.003l.003.001l.01.005c.022.009.07.024.167.037c.21.028.504.03.997.03s.787-.002.997-.03a.7.7 0 0 0 .177-.042l.003-.001l.001-.003l.005-.01a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997s-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.7.7 0 0 0-.177.042" fill="currentColor" fill-rule="evenodd"></path><path d="M9.995 4h4.01c3.781 0 5.672 0 6.846 1.116c.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4" fill="currentColor"></path></svg>
</span>
<div className="">
<p className="font-medium">$452.00</p>
<p className="text-[9px] opacity-80">USD wallet</p>
</div>
</div>
</div>
<div className="absolute right-0 bottom-2">
<div className="bg-amber-50 text-amber-900 text-[10px] px-3 py-2 rounded-xl shadow-sm flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-200">
<svg aria-hidden="true" className="iconify text-[12px] iconify--solar" data-icon="solar:refresh-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" opacity=".5" r="10"></circle><path d="M7.378 11.63h-.75zm0 .926l-.562.497a.75.75 0 0 0 1.08.044zm2.141-1.015a.75.75 0 0 0-1.038-1.082zm-2.958-1.038a.75.75 0 1 0-1.122.994zm8.37-1.494a.75.75 0 1 0 1.102-1.018zM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88zm-5.416 5.38v.926h1.5v-.926zm1.269 1.467l1.622-1.556l-1.038-1.082l-1.622 1.555zm.042-1.039l-1.378-1.555l-1.122.994l1.377 1.556zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26zm.585 3.453l.56-.498a.75.75 0 0 0-1.08-.043zm-2.139 1.014a.75.75 0 1 0 1.04 1.082zm2.96 1.04a.75.75 0 0 0 1.12-.997zm-8.393 1.507a.75.75 0 0 0-1.094 1.026zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88zm5.434-5.38v-.926h-1.5v.926zm-1.27-1.467l-1.619 1.555l1.04 1.082l1.618-1.555zm-.04 1.04l1.38 1.554l1.122-.996l-1.381-1.555zM7.952 16.03a5.45 5.45 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245z" fill="currentColor"></path></svg>
</span>
<div>
<p className="font-medium">Rewards syncing</p>
<p className="text-[9px] opacity-80">3 transfers in queue</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:col-span-2 bg-gradient-to-br from-white/10 to-white/0 rounded-3xl pt-8 pr-4 pb-8 pl-4 backdrop-blur-lg items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-14 rounded-2xl bg-amber-400 flex items-center justify-center">
<div className="h-6 w-10 bg-neutral-950 rounded-xl rotate-[-8deg] flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-amber-300 text-lg iconify--solar" data-icon="solar:play-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M23 12c0-1.035-.53-2.07-1.591-2.647L8.597 2.385C6.534 1.264 4 2.724 4 5.033V12z" fill="currentColor" fill-rule="evenodd"></path><path d="m8.597 21.615l12.812-6.968A2.99 2.99 0 0 0 23 12H4v6.967c0 2.31 2.534 3.769 4.597 2.648" fill="currentColor" opacity=".5"></path></svg>
</div>
</div>
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-amber-200">
            novacash
          </span>
</div>
<p className="text-xs md:text-sm text-neutral-400 max-w-sm text-center">
          The smart balance layer that keeps your everyday spending and long‑term plans aligned.
        </p>
</div>

<div className="flex flex-col bg-yellow-200 rounded-3xl pt-6 pr-5 pb-6 pl-5 gap-x-3 gap-y-3 justify-center">
<div className="inline-flex items-center gap-2 flex-wrap">
<span className="text-xs font-medium text-neutral-900 bg-yellow-100 rounded-full pt-1 pr-3 pb-1 pl-3">
            Cashflow
          </span>
<span className="text-xs font-medium text-neutral-900 bg-yellow-100 rounded-full pt-1 pr-3 pb-1 pl-3">
            Clarity
          </span>
</div>
<div className="inline-flex items-center gap-2 flex-wrap">
<span className="px-3 py-1 rounded-full bg-amber-400 text-neutral-900 text-xs font-semibold tracking-tight">
            Insights
          </span>
<span className="text-xs font-medium text-neutral-900 bg-yellow-100 rounded-full pt-1 pr-3 pb-1 pl-3">
            Automation
          </span>
</div>
<div className="inline-flex items-center gap-2 flex-wrap">
<span className="text-xs font-medium text-neutral-900 bg-yellow-100 rounded-full pt-1 pr-3 pb-1 pl-3">
            Goals
          </span>
<span className="text-xs font-medium text-neutral-900 bg-yellow-100 rounded-full pt-1 pr-3 pb-1 pl-3">
            Signals
          </span>
</div>
</div>

<div className="flex flex-col bg-gradient-to-br from-white/10 to-white/0 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>
<div className="flex items-start justify-between mb-6">
<div className="">
<p className="text-3xl md:text-4xl font-semibold tracking-tight text-amber-100">
              £4,860
            </p>
<p className="text-xs text-amber-50/80">Under guidance</p>
</div>
<div className="text-right">
<p className="text-[11px] text-amber-100/80">DEC</p>
<p className="text-[11px] text-amber-100/60">2025</p>
</div>
</div>
<div className="flex-1 flex flex-col justify-end">
<div className="h-28 w-full flex items-end gap-[3px]">
<div className="flex-1 bg-amber-200/50 rounded-t-sm h-6"></div>
<div className="flex-1 bg-amber-200/50 rounded-t-sm h-4"></div>
<div className="flex-1 bg-amber-200/50 rounded-t-sm h-9"></div>
<div className="flex-1 bg-amber-300 rounded-t-sm h-16"></div>
<div className="flex-1 bg-amber-200/50 rounded-t-sm h-10"></div>
<div className="flex-1 bg-amber-200/50 rounded-t-sm h-7"></div>
<div className="flex-1 bg-amber-200/50 rounded-t-sm h-12"></div>
<div className="flex-1 bg-amber-200/50 rounded-t-sm h-5"></div>
<div className="flex-1 bg-amber-200/50 rounded-t-sm h-8"></div>
<div className="flex-1 bg-amber-200/50 rounded-t-sm h-6"></div>
<div className="flex-1 bg-amber-200/50 rounded-t-sm h-9"></div>
<div className="flex-1 bg-amber-200/50 rounded-t-sm h-11"></div>
</div>
<div className="mt-3 flex items-center justify-between">
<p className="text-[11px] text-amber-50/70">Your balance in motion</p>
<span className="text-[10px] text-emerald-900 flex-none font-medium bg-amber-300 rounded-full pt-1 pr-2 pb-1 pl-2">
              +15% vs last month
            </span>
</div>
</div>
</div>

<div className="overflow-hidden md:col-span-2 flex flex-col md:flex-row bg-neutral-900 rounded-3xl">
<div className="flex-1 bg-center flex bg-gradient-to-br from-white/10 to-white/0 bg-cover rounded-l-3xl backdrop-blur-lg items-end" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}>
<div className="bg-gradient-to-br from-white/10 to-white/0 w-full pt-4 pr-5 pb-4 pl-5" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}>
<div className="flex items-center gap-2 mb-2">
<p className="text-[11px] text-neutral-400">novacash.com</p>
<span className="h-1 w-1 rounded-full bg-neutral-500"></span>
<p className="text-[11px] text-neutral-400">NovaCash</p>
</div>
<p className="text-2xl md:text-3xl font-semibold tracking-tight text-amber-200 leading-tight">
              LET YOUR BALANCE

              LEAD THE WAY
            </p>
</div>
</div>
<div className="w-full md:w-56 bg-neutral-900 flex items-center justify-center">
<img alt="Customer with card" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a545dd10-7379-4c9c-a1cf-27d0d38935c7_800w.webp"/>
</div>
</div>

<div className="bg-amber-100 rounded-3xl overflow-hidden">
<img alt="Confident saver" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/953076e5-6fce-4fea-99a8-b70c6f1e09a4_800w.webp"/>
</div>
</div>
</div>

    </>
  );
}
