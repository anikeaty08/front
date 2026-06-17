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
  


        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-180 brightness-200 saturate-150" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

</div></div>

<div className="border-gradient flex flex-col md:flex-row overflow-hidden w-full h-[950px] max-w-[1340px] rounded-2xl shadow-[2.8px_2.8px_2.2px_rgba(0,_0,_0,_0.034),_6.7px_6.7px_5.3px_rgba(0,_0,_0,_0.048),_12.5px_12.5px_10px_rgba(0,_0,_0,_0.06),_22.3px_22.3px_17.9px_rgba(0,_0,_0,_0.072),_41.8px_41.8px_33.4px_rgba(0,_0,_0,_0.086),_100px_100px_80px_rgba(0,_0,_0,_0.12)]">

<aside className="md:w-72 flex flex-col flex-shrink-0 z-20 bg-[#111113] w-full border-white/5 border-r relative">

<div className="pt-6 pr-6 pb-4 pl-6">
<div className="flex gap-2 mb-8 pl-1 opacity-40 hover:opacity-100 transition-opacity">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>

<div className="flex items-center justify-between group cursor-pointer p-2 -ml-2 rounded-lg hover:bg-white/5 transition-all">
<div className="flex items-center gap-3">
<div className="flex bg-center text-zinc-400 bg-zinc-800 w-9 h-9 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4c6293b-26ff-4117-9a48-45d8311e3f1a_320w.webp)] bg-cover border-white/5 rounded ring-white/10 ring-1 items-center justify-center">
</div>
<span className="text-zinc-300 text-base font-geist" style={{}}>Jordan Lee</span>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 py-2 no-scrollbar space-y-9">
<div className="">
<h3 className="text-xs text-zinc-500 uppercase mb-3 pl-3 font-geist" style={{}}>Workspace</h3>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors group" href="#">
<svg aria-hidden="true" className="group-hover:text-blue-400 transition-colors w-5 h-5" data-icon="solar:home-2-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z"></path><path d="M12 15v3" strokeLinecap="round"></path></g></svg>
<span className="text-sm font-geist" style={{}}>Home</span>
</a>
</li>
<li className="">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors group" href="#">
<svg aria-hidden="true" className="group-hover:text-blue-400 transition-colors w-[20px] h-[20px]" data-icon="solar:users-group-rounded-linear" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(96, 165, 250)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="6" r="4"></circle><path className="" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"></path></g></svg>
<span className="text-sm font-geist" style={{}}>Team</span>
</a>
</li>
</ul>
</div>

<div className="">
<h3 className="text-xs text-zinc-500 uppercase mb-3 pl-3 font-geist" style={{}}>Projects</h3>

<div className="relative">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors group" href="#">
<svg aria-hidden="true" className="text-zinc-500 w-[20px] h-[20px]" data-icon="solar:folder-linear" data-icon-replaced="true" data-icon-set="solar" data-solar="layers-linear" height="20" role="img" strokeWidth="2" style={{color: 'rgb(113, 113, 122)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#71717a" strokeWidth="1.5"><path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></path><path d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10"></path><path d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14"></path></g></svg>
<span className="text-sm font-geist" style={{}}>Design System</span>
</a>

<div className="relative ml-5 pt-1 space-y-1">

<div className="absolute left-0 top-0 bottom-3 w-px bg-zinc-800"></div>

<div className="relative pl-6">

<div className="-translate-y-1/2 w-4 h-6 border-zinc-800 rounded-bl-xl border-b border-l absolute top-2 left-0"></div>
<a className="flex items-center justify-between px-3 py-2 rounded-md bg-blue-600 text-white shadow-md transition-all group relative z-10" href="#">
<span className="text-sm font-geist" style={{}}>Documentation</span>
</a>
</div>

<div className="relative pl-6">

<div className="-translate-y-1/2 w-4 h-6 border-zinc-800 rounded-bl-xl border-b border-l absolute top-2 left-0"></div>
<a className="flex items-center justify-between px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors group relative z-10" href="#">
<span className="text-sm font-geist" style={{}}>Components</span>
</a>
</div>

<div className="relative pl-6">

<div className="-translate-y-1/2 w-4 h-6 border-zinc-800 rounded-bl-xl border-b border-l absolute top-2 left-0"></div>
<a className="flex items-center justify-between px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors group relative z-10" href="#">
<span className="text-sm font-geist" style={{}}>Tokens</span>
</a>
</div>
</div>
</div>

<div className="relative mt-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors group" href="#">
<svg aria-hidden="true" className="w-[20px] h-[20px]" data-icon="solar:folder-linear" data-icon-replaced="true" data-icon-set="solar" data-solar="chart-linear" height="20" role="img" strokeWidth="2" style={{color: 'rgb(113, 113, 122)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#71717a" strokeWidth="1.5"><path d="M22 22H2" strokeLinecap="round"></path><path d="M21 22v-7.5a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5V22m0 0V5c0-1.414 0-2.121-.44-2.56C14.122 2 13.415 2 12 2s-2.121 0-2.56.44C9 2.878 9 3.585 9 5v17m0 0V9.5A1.5 1.5 0 0 0 7.5 8h-3A1.5 1.5 0 0 0 3 9.5V22"></path></g></svg>
<span className="text-sm font-geist" style={{}}>Marketing</span>
</a>

<div className="relative ml-5 pt-1 space-y-1">

<div className="absolute left-0 top-0 bottom-6 w-px bg-zinc-800"></div>
<div className="relative pl-6">

<div className="-translate-y-1/2 w-4 h-6 border-zinc-800 rounded-bl-xl border-b border-l absolute top-2 left-0"></div>
<a className="flex items-center justify-between px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors group relative z-10" href="#">
<span className="text-sm font-geist" style={{}}>Q3_Assets</span>
</a>
</div>
</div>
</div>
</div>
<div className="">
<div className="flex items-center justify-between mb-3 px-3 cursor-pointer group">
<h3 className="text-xs text-zinc-500 uppercase font-geist" style={{}}>Tags</h3>
</div>
<ul className="space-y-1">
<li className="">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors group" href="#">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-sm font-geist" style={{}}>Urgent</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors group" href="#">
<div className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-blue-500 transition-colors"></div>
<span className="text-sm font-geist" style={{}}>Reviewed</span>
</a>
</li>
</ul>
</div>
</div>

<div className="p-6 border-t border-white/5">
<a className="flex items-center gap-3 text-zinc-500 hover:text-zinc-300 transition-colors px-1" href="#">
<svg className="lucide lucide-settings w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="settings-linear" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(212, 212, 216)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#d4d4d8" strokeWidth="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M13.765 2.152C13.398 2 12.932 2 12 2s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.62 1.62 0 0 1-.79 1.353a1.62 1.62 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7s-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.62 1.62 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.62 1.62 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453s.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.62 1.62 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.62 1.62 0 0 1-1.566-.008a1.62 1.62 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z"></path></g></svg>
<span className="text-sm font-geist" style={{}}>Settings</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#09090b] relative">

<div className="absolute inset-0 vertical-grid pointer-events-none z-0"></div>

<div className="px-10 pt-10 pb-6 flex items-center justify-between z-10">
<div className="flex flex-col">
<div className="flex items-center gap-2 text-zinc-500 mb-1.5">
<span className="text-xs uppercase font-geist" style={{}}>Workspace</span>
<svg className="lucide lucide-chevron-right w-3.5 h-3.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-xs uppercase text-zinc-300 font-geist" style={{}}>Design System</span>
<svg className="lucide lucide-chevron-right w-3.5 h-3.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-xs uppercase text-blue-400 font-geist" style={{}}>Documentation</span>
</div>
<h1 className="text-2xl tracking-tight text-white font-geist" style={{}}>Product_Specs_v2.4.pdf</h1>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 rounded bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
<svg className="lucide lucide-share w-4 h-4 text-zinc-400" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
<span className="text-sm text-zinc-300 font-geist" style={{}}>Share</span>
</button>
<button className="px-3 py-2 rounded bg-blue-600 hover:bg-blue-500 border border-blue-500 transition-all text-white shadow-lg shadow-blue-900/20">
<svg className="lucide lucide-download w-5 h-5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-10 pb-10 no-scrollbar z-10 flex flex-col items-center">

<div className="sticky top-0 mt-3 mb-10 z-20">
<div className="flex items-center gap-1 bg-[#18181b]/90 backdrop-blur-md px-2 py-2 rounded-full border border-white/5 shadow-xl">
<button className="p-2.5 text-zinc-500 hover:text-white transition-colors rounded-full hover:bg-white/5"><svg className="lucide lucide-zoom-out w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="zoom-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg></button>
<span className="text-sm text-zinc-400 w-14 text-center font-geist" style={{}}>100%</span>
<button className="p-2.5 text-zinc-500 hover:text-white transition-colors rounded-full hover:bg-white/5"><svg className="lucide lucide-zoom-in w-5 h-5" data-lucide="zoom-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg></button>
<div className="w-px h-5 bg-white/10 mx-1"></div>
<button className="p-2.5 text-zinc-500 hover:text-white transition-colors rounded-full hover:bg-white/5"><svg className="lucide lucide-printer w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="printer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect height="8" rx="1" width="12" x="6" y="14"></rect></svg></button>
</div>
</div>

<div className="paper-gradient w-full max-w-[700px] shadow-2xl rounded-sm p-14 md:p-16 text-zinc-300 min-h-[900px] relative">

<div className="flex justify-between items-start mb-14">
<div className="">
<h2 className="text-4xl tracking-tight text-white mb-2 font-geist" style={{}}>Jordan Lee</h2>
<p className="text-base text-blue-400 font-geist" style={{}}>Senior Product Designer</p>
</div>
<div className="text-right space-y-1.5">
<p className="text-sm text-zinc-500 font-geist" style={{}}>san francisco, ca</p>
<p className="text-sm text-zinc-500 font-geist" style={{}}>hello@jordanlee.design</p>
<p className="text-sm text-zinc-500 font-geist" style={{}}>+1 (555) 012-3456</p>
</div>
</div>

<div className="mb-12">
<div className="flex items-center gap-4 mb-5">
<div className="w-10 h-px bg-zinc-800"></div>
<h3 className="text-sm text-zinc-500 uppercase font-geist" style={{}}>About</h3>
<div className="flex-1 h-px bg-zinc-800"></div>
</div>
<p className="text-base leading-8 text-zinc-400 font-geist" style={{}}>
                            Crafting digital experiences with a focus on systems thinking and interaction design. Over 6 years specializing in SaaS and Fintech, turning complex data into intuitive, accessible interfaces. Currently exploring the intersection of AI and user interface patterns.
                        </p>
</div>

<div className="mb-12">
<div className="flex items-center gap-4 mb-7">
<div className="w-10 h-px bg-zinc-800"></div>
<h3 className="text-sm text-zinc-500 uppercase font-geist" style={{}}>Experience</h3>
<div className="flex-1 h-px bg-zinc-800"></div>
</div>
<div className="space-y-10">

<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg text-zinc-200 font-geist" style={{}}>Horizon Labs</h4>
<span className="text-sm text-zinc-600 font-geist" style={{}}>2023 — Present</span>
</div>
<div className="text-sm text-blue-400 mb-4 font-geist" style={{}}>Lead Product Designer</div>
<ul className="list-none space-y-3">
<li className="flex items-start gap-3 text-base text-zinc-400 leading-relaxed font-geist" style={{}}>
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 flex-shrink-0"></span>
                                        Spearheaded the complete redesign of the analytics dashboard, resulting in a 24% increase in daily active users.
                                    </li>
<li className="flex items-start gap-3 text-base text-zinc-400 leading-relaxed font-geist" style={{}}>
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 flex-shrink-0"></span>
                                        Established a new design system (tokens, components) used by 15+ engineers and designers.
                                    </li>
</ul>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg text-zinc-200 font-geist" style={{}}>Stripe</h4>
<span className="text-sm text-zinc-600 font-geist" style={{}}>2021 — 2023</span>
</div>
<div className="text-sm text-blue-400 mb-4 font-geist" style={{}}>Product Designer</div>
<ul className="list-none space-y-3">
<li className="flex items-start gap-3 text-base text-zinc-400 leading-relaxed font-geist" style={{}}>
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 flex-shrink-0"></span>
                                        Optimized checkout flows for mobile, reducing friction and increasing conversion by 8% globally.
                                    </li>
<li className="flex items-start gap-3 text-base text-zinc-400 leading-relaxed font-geist" style={{}}>
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 flex-shrink-0"></span>
                                        Collaborated with engineering to implement new payment method animations using Rive.
                                    </li>
</ul>
</div>
</div>
</div>

<div className="grid grid-cols-2 mb-12 pt-4 pb-12 gap-x-16 gap-y-16">
<div className="">
<div className="flex items-center gap-4 mb-5">
<div className="w-10 h-px bg-zinc-800"></div>
<h3 className="text-sm text-zinc-500 uppercase font-geist" style={{}}>Stack</h3>
<div className="flex-1 h-px bg-zinc-800"></div>
</div>
<div className="flex flex-wrap gap-2.5">
<span className="px-2.5 py-1.5 rounded bg-zinc-800/50 border border-zinc-800 text-xs text-zinc-400 font-geist" style={{}}>Figma</span>
<span className="px-2.5 py-1.5 rounded bg-zinc-800/50 border border-zinc-800 text-xs text-zinc-400 font-geist" style={{}}>Principle</span>
<span className="px-2.5 py-1.5 rounded bg-zinc-800/50 border border-zinc-800 text-xs text-zinc-400 font-geist" style={{}}>HTML/CSS</span>
<span className="px-2.5 py-1.5 rounded bg-zinc-800/50 border border-zinc-800 text-xs text-zinc-400 font-geist" style={{}}>Spline</span>
<span className="px-2.5 py-1.5 rounded bg-zinc-800/50 border border-zinc-800 text-xs text-zinc-400 font-geist" style={{}}>React</span>
</div>
</div>
<div className="">
<div className="flex items-center gap-4 mb-5">
<div className="w-10 h-px bg-zinc-800"></div>
<h3 className="text-sm text-zinc-500 uppercase font-geist" style={{}}>Focus</h3>
<div className="flex-1 h-px bg-zinc-800"></div>
</div>
<div className="flex flex-col gap-2">
<span className="text-sm text-zinc-400 font-geist" style={{}}>Design Systems</span>
<span className="text-sm text-zinc-400 font-geist" style={{}}>Prototyping</span>
<span className="text-sm text-zinc-400 font-geist" style={{}}>User Research</span>
</div>
</div>
</div>

<div className="absolute bottom-8 right-8 opacity-20">
<svg className="text-zinc-500" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M2 12h20"></path></svg>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
