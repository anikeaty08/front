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
      

<div className="relative w-full max-w-[1024px] mx-auto mt-8 md:mt-0">

<div className="hidden md:flex absolute -left-12 lg:-left-20 top-1/2 -translate-y-1/2 z-30 w-56 flex-col bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100/80 p-4">

<div className="text-xl font-semibold tracking-tighter text-gray-900 mb-6 px-2 flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
                FLOW
            </div>

<nav className="flex flex-col gap-1.5">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:window-frame-linear" strokeWidth="1.5"></iconify-icon>
                    Experiences
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
                    Engines
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
                    Booths
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                    Crowdplay
                </a>

<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold bg-blue-50/80 text-blue-600 transition-colors shadow-sm shadow-blue-100/50" href="#">
<iconify-icon className="text-lg" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
                    Projects
                </a>
</nav>

<div className="mt-8 pt-4 border-t border-gray-100 px-2 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-200 to-blue-200 p-[1px]">
<div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xs font-semibold tracking-tight text-gray-700">AK</div>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-gray-900">Admin Team</span>
<span className="text-xs text-gray-400">Pro Plan</span>
</div>
</div>
</div>

<div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-white rounded-[2rem] shadow-2xl shadow-gray-200/60 border border-gray-100/80 flex flex-col overflow-hidden z-20">

<div className="h-14 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between px-6 backdrop-blur-sm z-30">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
</div>
<div className="text-xs font-medium tracking-tight text-gray-500 bg-white px-3 py-1 rounded-md border border-gray-200 shadow-sm">
                    Flowchart Canvas • Auto-saved
                </div>
<div className="flex items-center gap-2 text-gray-400">
<iconify-icon className="text-lg cursor-pointer hover:text-gray-600" icon="solar:magnifer-zoom-in-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-lg cursor-pointer hover:text-gray-600" icon="solar:menu-dots-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="relative flex-1 w-full bg-[#FCFCFD] overflow-hidden">

<svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-[0.4]">
<defs>
<pattern height="32" id="canvas-grid" patternunits="userSpaceOnUse" width="32">
<circle cx="2" cy="2" fill="#E5E7EB" r="1.5"></circle>
</pattern>
</defs>
<rect fill="url(#canvas-grid)" height="100%" width="100%"></rect>
</svg>


<svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" preserveaspectratio="none" viewbox="0 0 1600 900">

<path className="opacity-80" d="M 800 450 C 600 450, 600 250, 400 250" fill="none" stroke="#60A5FA" stroke-dasharray="6 4" strokeWidth="2"></path>

<path className="opacity-80" d="M 800 450 C 1000 450, 1000 250, 1200 250" fill="none" stroke="#F472B6" stroke-dasharray="6 4" strokeWidth="2"></path>

<path className="opacity-80" d="M 800 450 C 600 450, 600 650, 400 650" fill="none" stroke="#F472B6" stroke-dasharray="6 4" strokeWidth="2"></path>

<path className="opacity-80" d="M 800 450 C 1000 450, 1000 650, 1200 650" fill="none" stroke="#60A5FA" stroke-dasharray="6 4" strokeWidth="2"></path>
</svg>

<div className="absolute inset-0 z-10 w-full h-full">

<div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-56 bg-white rounded-2xl shadow-xl shadow-blue-900/5 border border-blue-100 flex flex-col overflow-hidden transition-transform hover:scale-[1.02] cursor-default">
<div className="bg-blue-600 p-3.5 flex items-center gap-3">
<div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-white text-base" icon="solar:hub-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-sm font-semibold tracking-tight text-white">Project Hub</h2>
</div>
<div className="p-4 flex flex-col gap-3">
<p className="text-xs text-gray-500 leading-relaxed">Central router for all live campaign data and unified metrics.</p>
<div className="flex items-center justify-between border-t border-gray-50 pt-3 mt-1">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-blue-100 border border-white flex items-center justify-center text-[8px] font-semibold text-blue-600 tracking-tighter">API</div>
<div className="w-5 h-5 rounded-full bg-pink-100 border border-white flex items-center justify-center text-[8px] font-semibold text-pink-600 tracking-tighter">DB</div>
</div>
<span className="text-xs font-medium text-emerald-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active
                                </span>
</div>
</div>
</div>

<div className="absolute left-[25%] top-[27.7%] -translate-x-1/2 -translate-y-1/2 w-48 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg shadow-gray-200/30 border border-gray-100/80 p-3.5 flex flex-col gap-2 transition-transform hover:-translate-y-1 cursor-default">
<div className="flex items-start gap-3">
<div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100/50 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-500 text-lg" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col pt-0.5">
<h3 className="text-sm font-semibold tracking-tight text-gray-900">Event Webpage</h3>
<p className="text-xs text-gray-400 mt-0.5 leading-snug">Public facing portal.</p>
</div>
</div>
</div>

<div className="absolute left-[75%] top-[27.7%] -translate-x-1/2 -translate-y-1/2 w-48 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg shadow-gray-200/30 border border-gray-100/80 p-3.5 flex flex-col gap-2 transition-transform hover:-translate-y-1 cursor-default">
<div className="flex items-start gap-3">
<div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-100/50 flex items-center justify-center shrink-0">
<iconify-icon className="text-pink-500 text-lg" icon="solar:devices-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col pt-0.5">
<h3 className="text-sm font-semibold tracking-tight text-gray-900">Interactive Booth</h3>
<p className="text-xs text-gray-400 mt-0.5 leading-snug">On-site engagements.</p>
</div>
</div>
</div>

<div className="absolute left-[25%] top-[72.2%] -translate-x-1/2 -translate-y-1/2 w-48 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg shadow-gray-200/30 border border-gray-100/80 p-3.5 flex flex-col gap-2 transition-transform hover:-translate-y-1 cursor-default">
<div className="flex items-start gap-3">
<div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-100/50 flex items-center justify-center shrink-0">
<iconify-icon className="text-pink-500 text-lg" icon="solar:chat-square-call-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col pt-0.5">
<h3 className="text-sm font-semibold tracking-tight text-gray-900">AI Bot Engine</h3>
<p className="text-xs text-gray-400 mt-0.5 leading-snug">Automated responses.</p>
</div>
</div>
</div>

<div className="absolute left-[75%] top-[72.2%] -translate-x-1/2 -translate-y-1/2 w-48 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg shadow-gray-200/30 border border-gray-100/80 p-3.5 flex flex-col gap-2 transition-transform hover:-translate-y-1 cursor-default">
<div className="flex items-start gap-3">
<div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100/50 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-500 text-lg" icon="solar:magnet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col pt-0.5">
<h3 className="text-sm font-semibold tracking-tight text-gray-900">Lead Capture</h3>
<p className="text-xs text-gray-400 mt-0.5 leading-snug">Data collection forms.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:block absolute -right-16 bottom-[20%] z-30 w-[260px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100/80 p-5 flex flex-col">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold tracking-tight text-gray-900">Deployment Status</h3>
<iconify-icon className="text-gray-400" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3 mb-5">
<div className="relative flex h-2.5 w-2.5 shrink-0">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-800">All Systems Live</span>
<span className="text-xs text-gray-400 mt-0.5">Last synced: Just now</span>
</div>
</div>

<button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-all shadow-sm shadow-blue-600/20 flex items-center justify-center gap-2 group">
<iconify-icon className="text-lg group-hover:-translate-y-0.5 transition-transform" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
                Publish Updates
            </button>
</div>
</div>

    </>
  );
}
