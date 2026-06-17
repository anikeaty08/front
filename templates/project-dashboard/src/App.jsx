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
      

<div className="fixed top-0 left-0 w-1/3 h-1/3 rounded-full blur-[120px] -z-10 pointer-events-none bg-blue-900/20" style={{}}></div>
<div className="fixed bottom-0 right-0 w-1/3 h-1/3 bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" style={{}}></div>

<aside className="flex flex-col hidden lg:flex shrink-0 w-72 h-full border-white/5 border-r">

<div className="h-16 flex items-center px-6 gap-3 text-white">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar text-blue-400" data-icon="solar:atom-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M16.471 16.471c4.939-4.939 6.94-10.944 4.471-13.413c-2.469-2.47-8.474-.468-13.413 4.47c-4.939 4.94-6.94 10.945-4.471 13.414c2.47 2.47 8.475.468 13.413-4.47" fill="currentColor" opacity=".3"></path>
<path d="M7.529 16.471C2.59 11.533.589 5.527 3.058 3.058c2.469-2.47 8.474-.468 13.413 4.47c4.939 4.94 6.94 10.945 4.471 13.414c-2.47 2.47-8.475.468-13.413-4.47" fill="currentColor" opacity=".3"></path>
<path d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg tracking-tight">Orbit</span>
</div>

<div className="px-4 mb-4">
<div className="relative group">
<svg aria-hidden="true" className="iconify absolute left-3 top-2.5 text-slate-500 transition-colors iconify--solar group-focus-within:text-blue-400" data-icon="solar:magnifer-linear" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<circle cx="11.5" cy="11.5" r="9.5"></circle>
<path d="M18.5 18.5L22 22" strokeLinecap="round"></path>
</g>
</svg>
<input className="w-full bg-white/5 border border-white/5 rounded-lg py-2 pl-10 pr-3 text-sm focus:outline-none focus:ring-1 transition-all placeholder-slate-600 text-slate-300 focus:ring-blue-500/50 focus:border-blue-500/50" placeholder="Search..." style={{}} type="text"/>
<div className="absolute right-3 top-2.5 text-xs text-slate-600 border border-white/10 px-1.5 rounded">
            ⌘K
          </div>
</div>
</div>

<nav className="flex-1 overflow-y-auto pr-3 pl-3 space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-slate-100 hover:bg-white/5 rounded-md transition-colors group" href="#">
<svg aria-hidden="true" className="iconify text-xl text-slate-500 group-hover:text-slate-300 iconify--solar" data-icon="solar:widget-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6.5c0-2.121 0-3.182.659-3.841S4.379 2 6.5 2s3.182 0 3.841.659S11 4.379 11 6.5s0 3.182-.659 3.841S8.621 11 6.5 11s-3.182 0-3.841-.659S2 8.621 2 6.5m11 11c0-2.121 0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22s-3.182 0-3.841-.659S13 19.621 13 17.5" fill="currentColor" opacity=".5"></path>
<path d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5m11-11c0-2.121 0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11s-3.182 0-3.841-.659S13 8.621 13 6.5" fill="currentColor"></path>
</svg>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors bg-blue-500/10 text-blue-200" href="#" style={{}}>
<svg aria-hidden="true" className="iconify text-xl iconify--solar text-blue-400" data-icon="solar:folder-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14" fill="currentColor" opacity=".5"></path>
<path d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" fill="currentColor"></path>
</svg>
<span className="text-sm font-medium">Projects</span>
</a>
<a className="flex items-center gap-3 hover:text-slate-100 hover:bg-white/5 transition-colors group text-slate-400 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<svg aria-hidden="true" className="iconify text-xl text-slate-500 group-hover:text-slate-300 iconify--solar" data-icon="solar:danger-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" fill="currentColor" opacity=".5"></path>
<path d="M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" fill="currentColor"></path>
</svg>
<span className="text-sm font-medium">Issues</span>
</a>
<a className="flex items-center gap-3 hover:text-slate-100 hover:bg-white/5 transition-colors group text-slate-400 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<svg aria-hidden="true" className="iconify group-hover:text-slate-300 iconify--solar w-[20px] h-[20px]" data-icon="solar:danger-circle-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="clipboard-bold-duotone" height="20" role="img" strokeWidth="2" style={{color: 'rgb(203, 213, 225)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15.998v-6c0-2.828 0-4.242-.879-5.121C19.353 4.109 18.175 4.012 16 4H8c-2.175.012-3.353.109-4.121.877C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122" fill="#cbd5e1" opacity=".5"></path>
<path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z" fill="#cbd5e1"></path>
<path clip-rule="evenodd" d="M6.25 10.5A.75.75 0 0 1 7 9.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m1 3.5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m1 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" fill="#cbd5e1" fill-rule="evenodd"></path>
</svg>
<span className="text-sm font-medium">Issues</span>
</a>
<a className="flex items-center gap-3 hover:text-slate-100 hover:bg-white/5 transition-colors group text-slate-400 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<svg aria-hidden="true" className="iconify text-xl text-slate-500 group-hover:text-slate-300 iconify--solar" data-icon="solar:calendar-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M6.94 2c.416 0 .753.324.753.724v1.46c.668-.012 1.417-.012 2.26-.012h4.015c.842 0 1.591 0 2.259.013v-1.46c0-.4.337-.725.753-.725s.753.324.753.724V4.25c1.445.111 2.394.384 3.09 1.055c.698.67.982 1.582 1.097 2.972L22 9H2v-.724c.116-1.39.4-2.302 1.097-2.972s1.645-.944 3.09-1.055V2.724c0-.4.337-.724.753-.724" fill="currentColor"></path>
<path d="M22 14v-2c0-.839-.004-2.335-.017-3H2.01c-.013.665-.01 2.161-.01 3v2c0 3.771 0 5.657 1.172 6.828S6.228 22 10 22h4c3.77 0 5.656 0 6.828-1.172S22 17.772 22 14" fill="currentColor" opacity=".5"></path>
<path d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0" fill="currentColor"></path>
</svg>
<span className="text-sm font-medium">Calendar</span>
</a>
<div className="pt-6 pb-2 px-3">
<span className="text-xs font-medium text-slate-600 uppercase tracking-wider">
            Teams
          </span>
</div>
<div className="space-y-0.5">
<a className="flex items-center justify-between px-3 py-2 text-slate-400 hover:text-slate-100 hover:bg-white/5 rounded-md transition-colors group" href="#">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-xl text-slate-600 group-hover:text-slate-400 iconify--solar" data-icon="solar:pen-new-square-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12c0-5.185 0-7.778 1.61-9.39C4.223 1 6.816 1 12 1s7.778 0 9.39 1.61C23 4.223 23 6.816 23 12s0 7.778-1.61 9.39C19.777 23 17.184 23 12 23s-7.778 0-9.39-1.61C1 19.777 1 17.184 1 12" fill="currentColor" opacity=".5"></path>
<path d="M13.926 14.302c.245-.191.467-.413.912-.858l5.54-5.54c.134-.134.073-.365-.106-.427a6.1 6.1 0 0 1-2.3-1.449a6.1 6.1 0 0 1-1.45-2.3c-.061-.18-.292-.24-.426-.106l-5.54 5.54c-.445.444-.667.667-.858.912a5 5 0 0 0-.577.932c-.133.28-.233.579-.431 1.175l-.257.77l-.409 1.226l-.382 1.148a.817.817 0 0 0 1.032 1.033l1.15-.383l1.224-.408l.77-.257c.597-.199.895-.298 1.175-.432q.498-.237.933-.576m8.187-8.132a3.028 3.028 0 0 0-4.282-4.283l-.179.178a.73.73 0 0 0-.206.651c.027.15.077.37.168.633a4.9 4.9 0 0 0 1.174 1.863a4.9 4.9 0 0 0 1.862 1.174c.263.09.483.141.633.168c.24.043.48-.035.652-.207z" fill="currentColor"></path>
</svg>
<span className="text-sm font-medium">Design</span>
</div>
<svg aria-hidden="true" className="iconify text-slate-600 iconify--solar" data-icon="solar:alt-arrow-down-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m19 9l-7 6l-7-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>

<div className="pl-10 pr-3 space-y-1 py-1">
<a className="block text-sm text-slate-500 hover:text-slate-300 py-1" href="#">
              UI/UX
            </a>
<a className="block text-sm text-slate-500 hover:text-slate-300 py-1" href="#">
              Illustrations
            </a>
</div>
<a className="flex items-center justify-between hover:text-slate-100 hover:bg-white/5 transition-colors group text-slate-400 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-xl text-slate-600 group-hover:text-slate-400 iconify--solar" data-icon="solar:code-square-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path>
<path className="" d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" fill="currentColor"></path>
</svg>
<span className="text-sm font-medium">Engineering</span>
</div>
<svg aria-hidden="true" className="iconify text-slate-600 iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
<a className="flex items-center justify-between hover:text-slate-100 hover:bg-white/5 transition-colors group text-slate-400 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-slate-600 group-hover:text-slate-400 iconify--solar text-xl w-[20px] h-[20px]" data-icon="solar:code-square-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="chart-square-bold-duotone" height="20" role="img" strokeWidth="2" style={{color: 'rgb(148, 163, 184)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" fill="#94a3b8" opacity=".5"></path>
<path d="M12 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75m-5 3a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25m10 4a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" fill="#94a3b8"></path>
</svg>
<span className="text-sm font-medium">Marketing</span>
</div>
<svg aria-hidden="true" className="iconify text-slate-600 iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
</nav>

<div className="p-4 border-t border-white/5">
<a className="flex items-center gap-3 text-slate-400 hover:text-slate-200 transition-colors" href="#">
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:logout-2-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2h-1c-2.829 0-4.242 0-5.121.879S9 5.172 9 8v8c0 2.829 0 4.243.879 5.122c.878.878 2.292.878 5.119.878H16c2.828 0 4.242 0 5.121-.879C22 20.243 22 18.828 22 16V8c0-2.828 0-4.243-.879-5.121S18.828 2 16 2" fill="currentColor" opacity=".5"></path>
<path clip-rule="evenodd" d="M15.75 12a.75.75 0 0 0-.75-.75H4.027l1.961-1.68a.75.75 0 1 0-.976-1.14l-3.5 3a.75.75 0 0 0 0 1.14l3.5 3a.75.75 0 1 0 .976-1.14l-1.96-1.68H15a.75.75 0 0 0 .75-.75" fill="currentColor" fill-rule="evenodd"></path>
</svg>
<span className="text-sm font-medium">Log out</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-surface">

<header className="h-16 border-b border-white/5 flex items-center justify-between px-6 shrink-0 glass z-10">
<div className="flex items-center gap-4">

<button className="lg:hidden text-slate-400">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:hamburger-menu-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7H4m16 5H4m16 5H4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</button>
<div className="w-px h-6 bg-white/10 hidden lg:block"></div>
<div className="flex items-center gap-2 text-slate-400 text-sm">
<span className="hover:text-slate-200 cursor-pointer">Projects</span>
<svg aria-hidden="true" className="iconify text-slate-600 text-xs iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-slate-200 font-medium">Nexus Revamp</span>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-3">
<div className="text-right">
<div className="text-xs text-slate-500 font-medium">TODAY</div>
<div className="text-sm font-medium text-slate-200">Oct 24, 2023</div>
</div>
</div>
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-surface" src="https://i.pravatar.cc/150?u=1"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-surface" src="https://i.pravatar.cc/150?u=2"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-surface" src="https://i.pravatar.cc/150?u=3"/>
<div className="w-8 h-8 rounded-full border-2 border-surface bg-card flex items-center justify-center text-xs font-medium text-slate-400 hover:bg-white/10 cursor-pointer transition-colors">
              +4
            </div>
</div>
<button className="text-white text-sm font-medium px-4 py-1.5 rounded-lg transition-all flex items-center gap-2 shadow-lg bg-blue-600 hover:bg-blue-500 shadow-blue-900/20" style={{}}>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:user-plus-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M16 6a4 4 0 1 1-8 0a4 4 0 0 1 8 0" fill="currentColor"></path>
<path className="" d="M14.477 21.92c-.726.053-1.547.08-2.477.08c-8 0-8-2.015-8-4.5S7.582 13 12 13c2.88 0 5.406.856 6.814 2.141C18.298 15 17.574 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5s0 2.475.513 2.987c.237.238.542.365.964.434" fill="currentColor" opacity=".5"></path>
<path clip-rule="evenodd" d="M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5s0-2.475.513-2.987C14.025 15 14.85 15 16.5 15s2.475 0 2.987.513C20 16.025 20 16.85 20 18.5s0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22m.583-5.056a.583.583 0 1 0-1.166 0v.973h-.973a.583.583 0 1 0 0 1.166h.973v.973a.583.583 0 1 0 1.166 0v-.973h.973a.583.583 0 1 0 0-1.166h-.973z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
<span>Add people</span>
</button>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex items-center gap-3 text-slate-400">
<button className="hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:bell-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7" fill="currentColor" opacity=".5"></path>
<path d="M7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0" fill="currentColor"></path>
</svg>
</button>
<button className="hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:settings-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083" fill="currentColor" fill-rule="evenodd" opacity=".5"></path>
<path d="M15.523 12c0 1.657-1.354 3-3.023 3s-3.023-1.343-3.023-3S10.83 9 12.5 9s3.023 1.343 3.023 3" fill="currentColor"></path>
</svg>
</button>
<img alt="Profile" className="w-8 h-8 rounded-full border border-white/10" src="https://i.pravatar.cc/150?u=8"/>
</div>
</div>
</header>

<div className="flex-1 flex overflow-hidden relative">

<div className="flex-1 flex flex-col min-w-0">

<div className="px-6 py-4 shrink-0">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
<button className="px-4 py-1.5 text-sm font-medium text-slate-400 hover:text-slate-200 rounded-md transition-colors">
                  Backlog
                </button>
<button className="px-4 py-1.5 text-sm font-medium text-slate-400 hover:text-slate-200 rounded-md transition-colors">
                  Roadmap
                </button>
<button className="px-4 py-1.5 text-sm font-medium bg-card text-white shadow-sm rounded-md border border-white/5">
                  Active sprints
                </button>
<button className="px-4 py-1.5 text-sm font-medium text-slate-400 hover:text-slate-200 rounded-md transition-colors">
                  Releases
                </button>
</div>
<button className="flex items-center gap-2 text-sm font-medium border px-4 py-1.5 rounded-lg transition-colors text-blue-400 border-blue-500/30 hover:bg-blue-500/10" style={{}}>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:add-square-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" fill="currentColor" opacity=".5"></path>
<path d="M12 8.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V9a.75.75 0 0 1 .75-.75" fill="currentColor"></path>
</svg>
                Create task
              </button>
</div>

<div className="flex items-center justify-between gap-4">
<div className="relative flex-1 max-w-sm group">
<svg aria-hidden="true" className="iconify absolute left-3 top-2.5 text-slate-500 iconify--solar" data-icon="solar:magnifer-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<circle cx="11.5" cy="11.5" r="9.5"></circle>
<path d="M18.5 18.5L22 22" strokeLinecap="round"></path>
</g>
</svg>
<input className="w-full bg-transparent border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none text-slate-200 placeholder-slate-600 focus:border-blue-500/50" placeholder="Search tasks..." style={{}} type="text"/>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:user-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path>
<path d="M16.807 19.011A8.46 8.46 0 0 1 12 20.5a8.46 8.46 0 0 1-4.807-1.489c-.604-.415-.862-1.205-.51-1.848C7.41 15.83 8.91 15 12 15s4.59.83 5.318 2.163c.35.643.093 1.433-.511 1.848M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6" fill="currentColor"></path>
</svg>
                  My tasks
                </button>
<button className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:clock-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" fill="currentColor" opacity=".5"></path>
<path clip-rule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd"></path>
</svg>
                  Recent
                </button>
<button className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:tuning-2-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.25 14a3 3 0 1 1 0 6a3 3 0 0 1 0-6m5-10a3 3 0 1 0 0 6a3 3 0 0 0 0-6" fill="currentColor"></path>
<path d="M17.166 7.709a3 3 0 0 0-.021-1.5h4.605a.75.75 0 0 1 0 1.5zm-5.81-1.5a3 3 0 0 0-.022 1.5H1.75a.75.75 0 0 1 0-1.5zm-5 10H1.75a.75.75 0 0 0 0 1.5h4.584a3 3 0 0 1 .022-1.5m5.81 1.5h9.584a.75.75 0 0 0 0-1.5h-9.605a3 3 0 0 1 .02 1.5" fill="currentColor" opacity=".5"></path>
</svg>
                  All filters
                </button>
</div>
</div>
</div>

<div className="flex-1 overflow-x-auto overflow-y-hidden px-6 pb-6">

<div className="flex items-center gap-3 mb-4 group cursor-pointer">
<div className="p-1 rounded hover:bg-white/10 transition-colors">
<svg aria-hidden="true" className="iconify text-slate-500 iconify--solar" data-icon="solar:alt-arrow-down-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0" fill="currentColor"></path>
</svg>
</div>
<span className="text-lg font-medium text-slate-200 tracking-tight">
                Sprint 24-B: Core Infrastructure
              </span>
<span className="text-sm text-slate-500 font-medium">(12 tasks)</span>
<span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-400 border border-white/10">
                ACTIVE
              </span>
<div className="flex-1 border-b border-dashed border-white/10 ml-4 mt-1"></div>
</div>
<div className="flex h-full gap-6 min-w-[1000px]">

<div className="flex flex-col w-80 gap-x-3 gap-y-3">
<div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
<span>To Do</span>
<span>4</span>
</div>
<div className="border-gradient hover:bg-white/5 transition-all group cursor-pointer bg-gradient-to-br from-white/10 to-white/0 rounded-2xl px-4 py-4 relative shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500">
                      NXS-102
                    </span>
<svg className="iconify text-slate-600 opacity-0 group-hover:opacity-100 iconify--solar" height="1em" viewbox="0 0 24 24" width="1em">
<path d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" fill="currentColor"></path>
</svg>
</div>
<h3 className="text-sm font-medium text-slate-200 mb-3 leading-snug">
                    Update API documentation for v2 endpoints
                  </h3>
<div className="flex items-center justify-between">
<img className="w-6 h-6 rounded-full ring-2 ring-card" src="https://i.pravatar.cc/150?u=11"/>
<div className="flex gap-2">
<svg className="iconify text-slate-600 iconify--solar" height="1em" viewbox="0 0 24 24" width="1em">
<path d="m7.918 17.807l7.89-7.553a2.253 2.253 0 0 0 0-3.284a2.503 2.503 0 0 0-3.43 0l-7.834 7.498a4.28 4.28 0 0 0 0 6.24c1.8 1.723 4.718 1.723 6.518 0l7.949-7.608c2.652-2.54 2.652-6.656 0-9.196s-6.954-2.539-9.607 0L3 10.034" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg><svg className="iconify text-slate-600 iconify--solar" height="1em" viewbox="0 0 24 24" width="1em">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></path>
<path d="M8 10.5h8M8 14h5.5" strokeLinecap="round"></path>
</g>
</svg>
</div>
</div>
</div>
<div className="border-gradient hover:bg-white/5 transition-all group cursor-pointer bg-gradient-to-br from-white/10 to-white/0 rounded-2xl px-4 py-4 relative shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500">
                      NXS-145
                    </span>
</div>
<h3 className="text-sm font-medium text-slate-200 mb-3 leading-snug">
                    Refactor login modal components
                  </h3>
<div className="flex items-center justify-between">
<img className="w-6 h-6 rounded-full ring-2 ring-card" src="https://i.pravatar.cc/150?u=12"/>
<svg className="iconify text-orange-400 iconify--solar" height="1em" style={{}} viewbox="0 0 24 24" width="1em">
<path d="M6.5 1.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0z" fill="currentColor" fill-rule="evenodd" opacity=".5"></path>
<path d="m13.349 3.79l-.204-.082a8.7 8.7 0 0 0-4.924-.452L6.5 3.6v10l1.72-.344a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.214-.053a1.404 1.404 0 0 0 1.064-1.362V5.287a1.2 1.2 0 0 0-1.49-1.164a8 8 0 0 1-4.911-.334" fill="currentColor"></path>
</svg>
</div>
</div>
<div className="border-gradient hover:bg-white/5 transition-all group cursor-pointer bg-gradient-to-br from-white/10 to-white/0 rounded-2xl px-4 py-4 relative shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500">
                      NXS-156
                    </span>
</div>
<h3 className="text-sm font-medium text-slate-200 mb-3 leading-snug">
                    Mobile responsive layout fixes
                  </h3>
<div className="flex items-center justify-between">
<img className="w-6 h-6 rounded-full ring-2 ring-card" src="https://i.pravatar.cc/150?u=45"/>
<span className="text-xs text-slate-500 font-medium">
                      Oct 28
                    </span>
</div>
</div>
<div className="border-gradient hover:bg-white/5 transition-all group cursor-pointer bg-gradient-to-br from-white/10 to-white/0 rounded-2xl px-4 py-4 relative shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500">
                      NXS-162
                    </span>
</div>
<h3 className="text-sm font-medium text-slate-200 mb-3 leading-snug">
                    Analytics dashboard data caching
                  </h3>
<div className="flex items-center justify-between">
<img className="w-6 h-6 rounded-full ring-2 ring-card" src="https://i.pravatar.cc/150?u=48"/>
</div>
</div>
</div>

<div className="flex flex-col gap-3 w-80 gap-x-3 gap-y-3">
<div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
<span className="">In Progress</span>
<span>3</span>
</div>
<div className="border-gradient hover:bg-white/5 transition-all group cursor-pointer bg-gradient-to-br from-white/10 to-white/0 rounded-2xl px-4 py-4 relative shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500">
                      NXS-189
                    </span>
<svg className="iconify text-slate-600 opacity-0 group-hover:opacity-100 iconify--solar" height="1em" viewbox="0 0 24 24" width="1em">
<path d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" fill="currentColor"></path>
</svg>
</div>
<h3 className="text-sm font-medium text-slate-200 mb-3 leading-snug">
                    Implement dark mode toggle transition
                  </h3>
<div className="flex items-center justify-between">
<img className="w-6 h-6 rounded-full ring-2 ring-card" src="https://i.pravatar.cc/150?u=20"/>
</div>
</div>
<div className="border-gradient hover:bg-white/5 transition-all group cursor-pointer bg-gradient-to-br from-white/10 to-white/0 rounded-2xl px-4 py-4 relative shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500">
                      NXS-192
                    </span>
</div>
<h3 className="text-sm font-medium text-slate-200 mb-3 leading-snug">
                    User profile settings redesign
                  </h3>
<div className="flex items-center justify-between">
<img className="w-6 h-6 rounded-full ring-2 ring-card" src="https://i.pravatar.cc/150?u=22"/>
<svg className="iconify text-orange-400 iconify--solar" height="1em" style={{}} viewbox="0 0 24 24" width="1em">
<path d="M11.04 2.463a1.187 1.187 0 0 1 1.92 0c2.103 2.953 5.833 8.317 5.833 12.019c0 3.608-3.08 6.518-6.793 6.518S5.207 18.09 5.207 14.482c0-3.702 3.73-9.066 5.833-12.02" fill="currentColor" opacity=".5"></path>
<path d="M12.888 8.264a.594.594 0 0 0-.886-.01a13 13 0 0 0-1.708 2.528c-.594 1.128-1.087 2.57 1.082 4.737a3.4 3.4 0 0 0 2.774 1.39c.214 0 .428-.01.633-.03c.796-.075 1.205-1.023.722-1.662a5.7 5.7 0 0 1-.78-3.132c.057-.71.68-1.735.68-1.735a.593.593 0 0 0-.563-.788c-.703-.022-1.468.22-1.954.702" fill="currentColor"></path>
</svg>
</div>
</div>
<div className="border-gradient hover:bg-white/5 transition-all group cursor-pointer bg-gradient-to-br from-white/10 to-white/0 rounded-2xl px-4 py-4 relative shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500">
                      NXS-198
                    </span>
</div>
<h3 className="text-sm font-medium text-slate-200 mb-3 leading-snug">
                    Optimize database queries for feed
                  </h3>
<div className="flex items-center justify-between">
<img className="w-6 h-6 rounded-full ring-2 ring-card" src="https://i.pravatar.cc/150?u=25"/>
</div>
</div>
</div>

<div className="w-80 flex flex-col gap-3">
<div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
<span>Review</span>
<span>3</span>
</div>
<div className="border p-4 rounded-2xl shadow-lg cursor-pointer relative overflow-hidden bg-blue-600 border-blue-500 shadow-blue-900/50" style={{}}>
<div className="absolute top-0 right-0 w-20 h-20 bg-white/10 blur-2xl rounded-full -mr-10 -mt-10"></div>
<div className="flex items-center justify-between mb-2 relative z-10">
<span className="text-xs font-semibold text-blue-200" style={{}}>
                      NXS-204
                    </span>
<svg className="iconify iconify--solar text-blue-200" height="1em" style={{}} viewbox="0 0 24 24" width="1em">
<path d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" fill="currentColor"></path>
</svg>
</div>
<h3 className="text-sm font-semibold text-white mb-3 leading-snug relative z-10">
                    Integrate Stripe Payments for Checkout
                  </h3>
<div className="flex items-center justify-between relative z-10">
<img className="w-6 h-6 rounded-full ring-2 ring-blue-500" src="https://i.pravatar.cc/150?u=30" style={{}}/>
<span className="text-xs font-medium text-blue-200" style={{}}>
                      Due Today
                    </span>
</div>
</div>
<div className="border-gradient hover:bg-white/5 transition-all group cursor-pointer hover:opacity-100 bg-gradient-to-br from-white/10 to-white/0 opacity-60 rounded-2xl px-4 py-4 relative shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500">
                      NXS-205
                    </span>
</div>
<h3 className="text-sm font-medium text-slate-200 mb-3 leading-snug">
                    Premium user badge alignment
                  </h3>
<div className="flex items-center justify-between">
<img className="w-6 h-6 rounded-full ring-2 ring-card" src="https://i.pravatar.cc/150?u=33"/>
</div>
</div>
<div className="border-gradient hover:bg-white/5 transition-all group cursor-pointer hover:opacity-100 bg-gradient-to-br from-white/10 to-white/0 opacity-80 rounded-2xl px-4 py-4 relative shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500">
                      NXS-208
                    </span>
</div>
<h3 className="text-sm font-medium text-slate-200 mb-3 leading-snug">
                    Export report to PDF
                  </h3>
<div className="flex items-center justify-between">
<img className="w-6 h-6 rounded-full ring-2 ring-card" src="https://i.pravatar.cc/150?u=36"/>
</div>
</div>
</div>

<div className="w-80 flex flex-col gap-3">
<div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
<span>Done</span>
<span>3</span>
</div>
<div className="bg-card border-gradient p-4 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer shadow-sm opacity-50 hover:opacity-100 relative">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500 line-through">
                      NXS-099
                    </span>
</div>
<h3 className="text-sm font-medium text-slate-400 line-through mb-3 leading-snug">
                    Setup CI/CD pipeline
                  </h3>
<div className="flex items-center justify-between">
<img className="w-6 h-6 rounded-full ring-2 ring-card grayscale opacity-50" src="https://i.pravatar.cc/150?u=40"/>
</div>
</div>
<div className="border-gradient hover:bg-white/5 transition-all group cursor-pointer hover:opacity-100 opacity-50 rounded-2xl pt-4 pr-4 pb-4 pl-4 relative shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500 line-through">
                      NXS-082
                    </span>
</div>
<h3 className="text-sm font-medium text-slate-400 line-through mb-3 leading-snug">
                    Initial schema design
                  </h3>
<div className="flex items-center justify-between">
<img className="w-6 h-6 rounded-full ring-2 ring-card grayscale opacity-50" src="https://i.pravatar.cc/150?u=41"/>
</div>
</div>
<div className="bg-card border-gradient p-4 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer shadow-sm opacity-50 hover:opacity-100 relative">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500 line-through">
                      NXS-074
                    </span>
</div>
<h3 className="text-sm font-medium text-slate-400 line-through mb-3 leading-snug">
                    Update dependencies
                  </h3>
<div className="flex items-center justify-between">
<img className="w-6 h-6 rounded-full ring-2 ring-card grayscale opacity-50" src="https://i.pravatar.cc/150?u=42"/>
</div>
</div>
</div>
</div>
</div>
</div>

<aside className="w-[400px] bg-surface border-l border-white/5 overflow-y-auto hidden xl:flex flex-col shrink-0">

<div className="h-14 flex items-center justify-between px-6 border-b border-white/5 shrink-0">
<span className="text-xs font-medium text-slate-500">
              Shared to
              <span className="text-slate-300">Main Board</span>
</span>
<button className="text-slate-500 hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:close-square-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeWidth="1.5">
<path className="" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path>
<path d="m14.5 9.5l-5 5m0-5l5 5" strokeLinecap="round"></path>
</g>
</svg>
</button>
</div>
<div className="p-6">
<div className="flex items-start justify-between mb-6">
<div className="text-2xl font-semibold text-slate-100 tracking-tight leading-tight">
                Integrate Stripe Payments for Checkout Flow
              </div>
</div>

<div className="grid grid-cols-[100px_1fr] gap-y-5 text-sm mb-8">
<div className="text-slate-500 font-medium">Team</div>
<div className="flex items-center gap-2 text-slate-300">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--logos" data-icon="logos:stripe" height="1em" role="img" style={{}} viewbox="0 0 512 214" width="2.4em" xmlns="http://www.w3.org/2000/svg">
<path d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138c-33.85 0-54.33 28.73-54.33 64.854c0 42.808 24.179 64.426 58.88 64.426c16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823c-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658m-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756c8.675 0 17.92 6.685 17.92 22.756zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537l.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96c25.458 0 48.64-20.48 48.64-65.564c-.142-41.245-23.609-63.716-48.498-63.716m-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968c12.942 0 21.902 14.506 21.902 33.137c0 19.058-8.818 33.28-21.902 33.28M241.493 36.551l35.698-7.68V0l-35.698 7.538zm0 10.809h35.698v124.444h-35.698zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524m-71.112-41.386l-34.702 7.395l-.142 113.92c0 21.05 15.787 36.551 36.836 36.551c11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022zM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68c10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92c0 6.541-5.688 8.675-13.653 8.675c-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106c29.582 0 49.92-14.648 49.92-40.106c-.142-42.382-54.329-34.845-54.329-50.774" fill="#635BFF"></path>
</svg>
<span>Payment Gateway</span>
</div>
<div className="text-slate-500 font-medium">Status</div>
<div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-orange-500/20 bg-orange-500/10 text-orange-300 text-xs font-semibold uppercase tracking-wide" style={{}}>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:refresh-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="currentColor" opacity=".5" r="10"></circle>
<path d="M7.378 11.63h-.75zm0 .926l-.562.497a.75.75 0 0 0 1.08.044zm2.141-1.015a.75.75 0 0 0-1.038-1.082zm-2.958-1.038a.75.75 0 1 0-1.122.994zm8.37-1.494a.75.75 0 1 0 1.102-1.018zM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88zm-5.416 5.38v.926h1.5v-.926zm1.269 1.467l1.622-1.556l-1.038-1.082l-1.622 1.555zm.042-1.039l-1.378-1.555l-1.122.994l1.377 1.556zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26zm.585 3.453l.56-.498a.75.75 0 0 0-1.08-.043zm-2.139 1.014a.75.75 0 1 0 1.04 1.082zm2.96 1.04a.75.75 0 0 0 1.12-.997zm-8.393 1.507a.75.75 0 0 0-1.094 1.026zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88zm5.434-5.38v-.926h-1.5v.926zm-1.27-1.467l-1.619 1.555l1.04 1.082l1.618-1.555zm-.04 1.04l1.38 1.554l1.122-.996l-1.381-1.555zM7.952 16.03a5.45 5.45 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245z" fill="currentColor"></path>
</svg>
                  Review
                </span>
</div>
<div className="text-slate-500 font-medium">Lead</div>
<div className="flex items-center gap-2 text-slate-300">
<img alt="" className="w-5 h-5 rounded-full" src="https://i.pravatar.cc/150?u=30"/>
<span>Sarah Chen</span>
</div>
<div className="text-slate-500 font-medium">Assignee</div>
<div className="flex items-center gap-2 text-slate-300">
<img alt="" className="w-5 h-5 rounded-full" src="https://i.pravatar.cc/150?u=5"/>
<span>Marcus Thorne</span>
</div>
<div className="col-span-2 border-t border-white/5 my-1"></div>
<div className="text-slate-500 font-medium">Created</div>
<div className="text-slate-400">Oct 22, 2023 • 10:30 AM</div>
<div className="text-slate-500 font-medium">Deadline</div>
<div className="text-red-400 font-medium">Oct 24, 2023</div>
</div>

<div className="mb-8">
<h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Description
              </h4>
<div className="text-slate-300 text-sm leading-relaxed space-y-2">
<p className="">
                  We need to replace the legacy PayPal integration with Stripe
                  Elements. Ensure the checkout flow handles 3D Secure
                  authentication correctly.
                </p>
<ul className="list-disc list-inside text-slate-400 pl-1">
<li className="">Setup Stripe Webhooks</li>
<li className="">Design new credit card form</li>
<li className="">Test failed transaction states</li>
</ul>
</div>
</div>

<div className="flex-1">
<h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                Comments
              </h4>
<div className="relative mb-6">
<input className="w-full bg-card border border-white/10 rounded-lg py-3 pl-4 pr-10 text-sm focus:outline-none text-slate-200 placeholder-slate-600 transition-all focus:border-blue-500/50" placeholder="Leave a comment..." style={{}} type="text"/>
<button className="absolute right-2 top-2 p-1 text-slate-500 transition-colors hover:text-blue-400" style={{}}>
<svg aria-hidden="true" className="iconify text-lg iconify--solar" data-icon="solar:plain-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="m16.245 7.76l5.172-5.171l-.003-.003c-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.72 2.72 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704c.45.15.957.042 1.294-.291l5.506-5.455a.79.79 0 0 1 1.116.005" fill="currentColor" fill-rule="evenodd"></path>
<path d="m18.635 15.67l1.717-5.15c1.498-4.495 2.248-6.744 1.064-7.932l-5.172 5.171a.79.79 0 0 1-.005 1.117l-5.416 5.367a1.4 1.4 0 0 0-.324 1.426c1.21 3.631 1.815 5.446 2.703 5.962a2.71 2.71 0 0 0 2.73 0c.888-.516 1.493-2.33 2.703-5.962" fill="currentColor" opacity=".5"></path>
</svg>
</button>
</div>
<div className="space-y-5">
<div className="flex gap-3 group">
<img alt="" className="w-7 h-7 rounded-full mt-0.5 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://i.pravatar.cc/150?u=5"/>
<div>
<div className="flex items-center gap-2 mb-0.5">
<span className="text-sm font-medium text-slate-200">
                        Marcus Thorne
                      </span>
<span className="text-xs text-slate-600">
                        Yesterday 4:20 PM
                      </span>
</div>
<p className="text-sm text-slate-400 leading-relaxed">
                      The webhook endpoint is ready on staging. Just waiting for
                      the frontend components.
                    </p>
</div>
</div>
<div className="flex gap-3 group">
<img alt="" className="w-7 h-7 rounded-full mt-0.5 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://i.pravatar.cc/150?u=30"/>
<div className="">
<div className="flex items-center gap-2 mb-0.5">
<span className="text-sm font-medium text-slate-200">
                        Sarah Chen
                      </span>
<span className="text-xs text-slate-600">Today 9:15 AM</span>
</div>
<p className="text-sm text-slate-400 leading-relaxed">
                      Please ensure we log the payment intent ID for debugging
                      purposes.
                    </p>
</div>
</div>
</div>
</div>
</div>
</aside>
</div>
</main>

    </>
  );
}
