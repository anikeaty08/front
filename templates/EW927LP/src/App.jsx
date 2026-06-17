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
      

<div className="relative z-50 w-full max-w-3xl mx-auto rounded-2xl border border-zinc-800 bg-zinc-900/95 shadow-2xl">

<div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900 rounded-t-2xl">
<h2 className="text-sm font-semibold text-zinc-200 tracking-wide">Features</h2>
<button aria-label="Close" className="text-zinc-500 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-600 rounded-full p-1 transition">
<svg className="opacity-80" fill="none" height="18" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="18">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-zinc-800">

<div className="p-6 flex flex-col gap-6">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-zinc-800 border border-zinc-700">

<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.7" viewbox="0 0 24 24">
<path d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87M16 3.13a4 4 0 1 1 0 7.75M8 3.13a4 4 0 1 0 0 7.75" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="text-base font-medium text-zinc-100">Collaboration</span>
</div>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-2">
<svg className="w-4 h-4 mt-0.5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            Real-time editing with teammates
          </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 mt-0.5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            Shareable workspaces
          </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 mt-0.5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            Advanced permission controls
          </li>
</ul>
</div>

<div className="p-6 flex flex-col gap-6">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-zinc-800 border border-zinc-700">

<svg className="h-6 w-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.7" viewbox="0 0 24 24">
<path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="text-base font-medium text-zinc-100">Automation</span>
</div>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-2">
<svg className="w-4 h-4 mt-0.5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            Workflow triggers &amp; scheduling
          </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 mt-0.5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            Integrations with 200+ apps
          </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 mt-0.5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            Custom automation scripts
          </li>
</ul>
</div>

<div className="p-6 flex flex-col gap-6">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-zinc-800 border border-zinc-700">

<svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.7" viewbox="0 0 24 24">
<path d="M12 3l8 4v5c0 5.25-3.5 9.78-8 11-4.5-1.22-8-5.75-8-11V7l8-4z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="text-base font-medium text-zinc-100">Security</span>
</div>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-2">
<svg className="w-4 h-4 mt-0.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            SSO &amp; 2FA authentication
          </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 mt-0.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            End-to-end data encryption
          </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 mt-0.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            GDPR &amp; SOC 2 compliance
          </li>
</ul>
</div>
</div>

<div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900 rounded-b-2xl flex justify-end">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-zinc-100 font-medium text-sm transition shadow-sm" href="#">
<span>See all features</span>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>
</div>

    </>
  );
}
