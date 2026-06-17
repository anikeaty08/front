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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-sm font-semibold tracking-tighter flex items-center gap-2" href="#">
<span className="w-5 h-5 bg-slate-900 text-white flex items-center justify-center rounded-md text-[10px]">1</span>
                    ONEBAY
                </a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Process</a>
<a className="hover:text-slate-900 transition-colors" href="#">Examples</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center gap-2">
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Dev Mode</span>
<div className="relative inline-block w-8 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-slate-300 appearance-none cursor-pointer transition-all duration-300 left-0 top-0" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-slate-200 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
<button className="text-xs font-medium bg-slate-900 text-white px-3 py-1.5 rounded-md hover:bg-slate-800 transition-colors shadow-sm">
                    Sign In
                </button>
</div>
</div>
</nav>

<main className="pt-32 pb-24">

<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-600">The new era of generation</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                One line. <br/>
<span className="text-slate-400">Infinite possibilities.</span>
</h1>
<p className="text-lg text-slate-500 max-w-xl mx-auto font-light leading-relaxed mb-10">
                Turn a simple text prompt into a fully functional website. No drag-and-drop, just clear process and pure code.
            </p>

<div className="max-w-2xl mx-auto relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
<div className="relative flex items-center bg-white rounded-lg border border-slate-200 shadow-sm p-2 transition-all focus-within:ring-2 focus-within:ring-slate-100 focus-within:border-slate-300">
<span className="pl-3 text-slate-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</span>
<input className="w-full bg-transparent border-none focus:ring-0 text-sm text-slate-800 placeholder-slate-400 px-4 h-10 outline-none" placeholder="Describe your dream website..." type="text"/>
<button className="bg-slate-900 hover:bg-black text-white p-2 rounded-md transition-all flex items-center justify-center group/btn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flex justify-between mt-3 px-1">
<div className="flex gap-2 text-[10px] text-slate-400 font-medium tracking-wide uppercase">
<span>Model: v4.0</span>
<span>•</span>
<span>Latency: 12ms</span>
</div>
<div className="flex gap-1 text-[10px] text-slate-400">
                        Press  to generate
                    </div>
</div>
</div>
</div>

<div className="mt-24 max-w-5xl mx-auto px-6">
<div className="relative rounded-xl bg-slate-50 border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden">

<div className="h-10 bg-white border-b border-slate-100 flex items-center px-4 justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" data-strokeWidth="1.5" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
                        onebay.io/preview
                    </div>
<div className="w-10"></div> 
</div>

<div className="grid grid-cols-12 h-[500px] bg-white">

<div className="hidden md:block col-span-2 border-r border-slate-100 p-4 flex flex-col gap-4">
<div className="h-2 w-16 bg-slate-100 rounded-sm mb-4"></div>
<div className="space-y-3">
<div className="flex items-center gap-2 opacity-50"><div className="w-4 h-4 bg-slate-100 rounded"></div><div className="h-2 w-12 bg-slate-100 rounded-sm"></div></div>
<div className="flex items-center gap-2 opacity-100"><div className="w-4 h-4 bg-slate-200 rounded"></div><div className="h-2 w-16 bg-slate-200 rounded-sm"></div></div>
<div className="flex items-center gap-2 opacity-50"><div className="w-4 h-4 bg-slate-100 rounded"></div><div className="h-2 w-10 bg-slate-100 rounded-sm"></div></div>
</div>
<div className="mt-auto">

<input className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value="40"/>
</div>
</div>

<div className="col-span-12 md:col-span-10 bg-slate-[50]/50 p-8 flex items-center justify-center relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
<div className="absolute top-4 right-4 flex gap-2">
<div className="bg-white border border-slate-200 rounded-md px-2 py-1 text-[10px] text-slate-500 shadow-sm flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:eye" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg> View
                             </div>
<div className="bg-slate-900 border border-slate-900 rounded-md px-2 py-1 text-[10px] text-white shadow-sm flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:upload-cloud" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 13v8m-8-6.101A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17l4-4l4 4"></path></g></svg> Publish
                             </div>
</div>

<div className="w-full max-w-lg bg-white rounded-lg border border-slate-100 shadow-lg p-8">
<div className="flex flex-col text-center space-y-4 items-center">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="h-4 w-32 bg-slate-900 rounded-sm"></div>
<div className="h-2 w-48 bg-slate-200 rounded-sm"></div>
<div className="h-2 w-40 bg-slate-200 rounded-sm"></div>
<div className="flex gap-3 mt-4">
<div className="h-8 w-24 bg-slate-900 rounded-md"></div>
<div className="h-8 w-24 bg-slate-100 rounded-md"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-8 mt-12 border-t border-slate-100 pt-8 max-w-3xl mx-auto">
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight text-slate-900">0.4s</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Generation Time</div>
</div>
<div className="text-center border-l border-slate-100">
<div className="text-2xl font-semibold tracking-tight text-slate-900">100%</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Clean HTML</div>
</div>
<div className="text-center border-l border-slate-100">
<div className="text-2xl font-semibold tracking-tight text-slate-900">Zero</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Config Required</div>
</div>
</div>
</div>

<section className="max-w-6xl mx-auto px-6 mt-32">
<div className="text-center mb-16">
<h2 className="md:text-3xl text-2xl font-semibold text-slate-900 tracking-tight">The Clear Process</h2>
<p className="text-sm text-slate-500 mt-2">From abstraction to production in three steps.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>

<div className="flex flex-col group text-center z-10 relative items-center">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-1 duration-300">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:terminal-square" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m7 11l2-2l-2-2m4 6h4"></path><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect></g></svg>
</div>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">1. Prompt</h3>
<p className="text-sm text-slate-500 leading-relaxed px-4">Simply describe what you need in plain English. Our engine understands context and design patterns.</p>
</div>

<div className="z-10 flex flex-col group text-center relative items-center">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-1 duration-300 delay-75">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sliders-horizontal" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3m9 14H3M14 3v4m2 10v4m5-9h-9m9 7h-5m5-14h-7m-6 5v4m0-2H3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">2. Refine</h3>
<p className="text-sm text-slate-500 leading-relaxed px-4">Use the 1Bay visual editor to tweak colors, spacing, and content without touching a single div.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-1 duration-300 delay-150">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
</div>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">3. Deploy</h3>
<p className="text-sm text-slate-500 leading-relaxed px-4">Push to our global edge network instantly. Your site is live, fast, and secure by default.</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mt-32 mb-10">
<div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50"></div>
<div className="relative z-10">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Ready to start building?</h2>
<p className="text-slate-400 text-sm">Join 10,000+ creators shipping daily.</p>
</div>
<div className="relative z-10 mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
<input className="outline-none focus:border-slate-500 sm:w-64 text-sm text-white bg-slate-800 w-full border-slate-700 border rounded-lg pt-2.5 pr-4 pb-2.5 pl-4" placeholder="enter@email.com" type="email"/>
<button className="bg-white text-slate-900 hover:bg-slate-100 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap">
                        Get Started
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-100 bg-white py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="w-4 h-4 bg-slate-200 rounded-sm"></span>
<span className="text-xs font-semibold text-slate-900 tracking-tight">ONEBAY INC.</span>
</div>
<div className="flex gap-6 text-xs text-slate-500 font-medium">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Twitter</a>
<a className="hover:text-slate-900" href="#">GitHub</a>
</div>
<div className="text-[10px] text-slate-400">
                © 2023 OneBay. Crafted in SF.
            </div>
</div>
</footer>

    </>
  );
}
