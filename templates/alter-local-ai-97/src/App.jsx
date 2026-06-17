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
      

<nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-white" href="#">Alter</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#early-access">Early Access</a>
</div>
</nav>
<main className="w-full">

<section className="md:pt-40 md:pb-32 flex flex-col max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative items-center">

<div className="w-full max-w-5xl aspect-[16/10] bg-neutral-900 rounded-lg border border-white/10 shadow-2xl shadow-black/50 overflow-hidden relative group cursor-default mb-12 md:mb-16">

<div className="absolute inset-0 flex flex-col">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-neutral-900">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="flex-1 text-center text-[10px] text-gray-600 font-mono">Alter Local Beta</div>
</div>
<div className="flex-1 flex overflow-hidden">

<div className="w-16 md:w-64 border-r border-white/5 bg-neutral-900/50 p-4 hidden md:flex flex-col gap-4">
<div className="h-8 w-3/4 bg-white/10 rounded animate-pulse"></div>
<div className="h-4 w-1/2 bg-white/5 rounded"></div>
<div className="h-4 w-2/3 bg-white/5 rounded"></div>
<div className="mt-auto h-12 w-full bg-neutral-800 border border-white/5 rounded shadow-sm"></div>
</div>

<div className="flex-1 bg-black p-8 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg">
<div className="bg-neutral-900 rounded shadow-lg border border-white/10 p-4 flex gap-4 items-center mb-6">
<svg aria-hidden="true" data-icon="lucide:search" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<div className="text-gray-500 text-sm">Fintech dashboard with clean typography...</div>
</div>
<div className="grid grid-cols-3 gap-4 opacity-30">
<div className="aspect-[4/3] bg-white/10 rounded"></div>
<div className="aspect-[4/3] bg-white/10 rounded"></div>
<div className="aspect-[4/3] bg-white/10 rounded"></div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px] group-hover:bg-transparent transition-all duration-500">
<div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-lg shadow-white/10 transform group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" data-icon="lucide:play" data-width="24" height="24" role="img" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="text-center max-w-3xl mx-auto space-y-6">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                    Design with clarity,  not endless references.
                </h1>
<p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    Alter helps you find and understand the right references from your own library.
                </p>
<div className="pt-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-black bg-white rounded-lg hover:bg-gray-200 transition-all duration-200 focus:ring-4 focus:ring-white/20" href="#early-access">
                        Request Early Access
                    </a>
</div>
</div>
</section>

<section className="border-white/10 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-xl mx-auto">
<div className="space-y-8 text-xl md:text-2xl font-normal text-gray-500 leading-relaxed">
<p className="">
                        You have thousands of screenshots saved in folders, Eagle, and Pinterest.
                    </p>
<p className="">
                        Yet when you start a new project, you start from zero. You scroll for hours, looking for that one modal interaction you saved three years ago.
                    </p>
<p className="">
                        The context is lost. The principle is buried.
                    </p>
<p className="text-white font-medium">
                        Alter breaks the loop.
                    </p>
</div>
</div>
</section>

<section className="z-10 bg-black pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#0C0E12] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-500 h-[440px]">

<div className="absolute inset-0 flex items-center justify-center pb-24 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out">
<div className="relative">

<div className="absolute w-32 h-40 bg-white/5 border border-white/10 rounded-xl -rotate-12 -translate-x-4 translate-y-2 backdrop-blur-sm transition-transform duration-500 group-hover:-rotate-[16deg] group-hover:-translate-x-6"></div>
<div className="absolute w-32 h-40 bg-white/10 border border-white/10 rounded-xl -rotate-6 -translate-x-2 translate-y-1 backdrop-blur-sm transition-transform duration-500 group-hover:-rotate-[8deg] group-hover:-translate-x-3"></div>
<div className="relative w-32 h-40 bg-[#15171B] border border-white/10 rounded-xl shadow-2xl flex flex-col items-center justify-center gap-3 p-4 transition-transform duration-500 group-hover:-rotate-2 group-hover:-translate-y-1">
<div className="w-full h-24 border border-dashed border-white/10 rounded bg-white/[0.02] flex items-center justify-center">
<svg className="text-white/40" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<div className="w-full h-2 bg-white/10 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/80 to-transparent pointer-events-none"></div>

<div className="relative z-10 p-8 pt-0 mt-auto flex items-end justify-between gap-4">
<div className="flex flex-col gap-2">
<h3 className="text-xl font-medium text-white tracking-tight">1. Import your library</h3>
<p className="text-sm text-gray-500 leading-relaxed line-clamp-2 pr-2">Drag references in. Import from Eagle, Pinterest, or folders.</p>
</div>
<button className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors group-hover:scale-110 duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#0C0E12] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-500 h-[440px]">

<div className="absolute inset-0 flex items-center justify-center pb-24 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out">
<div className="relative w-full max-w-[240px] px-6 flex flex-col gap-3">

<div className="self-end bg-white/10 border border-white/5 rounded-2xl rounded-tr-sm py-2 px-4 max-w-[80%]">
<div className="w-24 h-2 bg-white/20 rounded-full"></div>
</div>
<div className="self-start bg-[#1A1D21] border border-white/10 rounded-2xl rounded-tl-sm py-3 px-4 w-full shadow-lg">
<div className="flex items-center gap-2 mb-2">
<svg className="text-indigo-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
<div className="w-16 h-2 bg-white/10 rounded-full"></div>
</div>
<div className="space-y-1.5">
<div className="w-full h-1.5 bg-white/10 rounded-full"></div>
<div className="w-5/6 h-1.5 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/80 to-transparent pointer-events-none"></div>
<div className="relative z-10 p-8 pt-0 mt-auto flex items-end justify-between gap-4">
<div className="flex flex-col gap-2">
<h3 className="text-xl font-medium text-white tracking-tight">2. Describe your project</h3>
<p className="text-sm text-gray-500 leading-relaxed line-clamp-2 pr-2">One line is enough. Describe the vibe, the UI pattern, or the problem.</p>
</div>
<button className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors group-hover:scale-110 duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#0C0E12] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-500 h-[440px]">

<div className="absolute inset-0 flex items-center justify-center pb-24 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out">
<div className="relative">

<div className="bg-green-500/5 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-3xl"></div>
<svg className="text-white/20" fill="none" height="120" viewbox="0 0 180 120" width="180" xmlns="http://www.w3.org/2000/svg">

<path d="M90 60L40 30" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M90 60L140 30" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M90 60L40 90" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M90 60L140 90" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>

<circle cx="90" cy="60" fill="#1A1D21" r="20" stroke="currentColor" strokeWidth="1"></circle>
<circle cx="90" cy="60" fill="#4ADE80" r="6"></circle>
<g className="transition-transform duration-500 group-hover:translate-x-[-4px] group-hover:translate-y-[-4px]">
<circle cx="40" cy="30" fill="#333" r="4"></circle>
</g>
<g className="transition-transform duration-500 group-hover:translate-x-[4px] group-hover:translate-y-[-4px]">
<circle cx="140" cy="30" fill="#333" r="4"></circle>
</g>
<g className="transition-transform duration-500 group-hover:translate-x-[-4px] group-hover:translate-y-[4px]">
<circle cx="40" cy="90" fill="#333" r="4"></circle>
</g>
<g className="transition-transform duration-500 group-hover:translate-x-[4px] group-hover:translate-y-[4px]">
<circle cx="140" cy="90" fill="#333" r="4"></circle>
</g>
</svg>

<div className="absolute top-0 right-[-10px] bg-[#1A1D21] border border-white/10 px-2 py-1 rounded-full text-[10px] text-white/60 shadow-lg transform translate-x-2 -translate-y-2 backdrop-blur-md">Hierarchy</div>
<div className="absolute bottom-0 left-[-10px] bg-[#1A1D21] border border-white/10 px-2 py-1 rounded-full text-[10px] text-white/60 shadow-lg transform -translate-x-2 translate-y-2 backdrop-blur-md">Balance</div>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/80 to-transparent pointer-events-none"></div>
<div className="relative z-10 p-8 pt-0 mt-auto flex items-end justify-between gap-4">
<div className="flex flex-col gap-2">
<h3 className="text-xl font-medium text-white tracking-tight">3. Understand why it works</h3>
<p className="text-sm text-gray-500 leading-relaxed line-clamp-2 pr-2">Alter surfaces the right references, explains the design principles.</p>
</div>
<button className="flex-shrink-0 w-10 h-10 rounded-full bg-:bg-white/10 hover:text-white transition-colors group-hover:scale-110 duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-neutral-900/20 border-white/10 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl mx-auto text-center">

<div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">

<div className="flex flex-col gap-4 items-center opacity-30 grayscale">
<div className="w-48 h-32 border border-dashed border-gray-600 rounded-lg flex items-center justify-center bg-transparent">
<svg aria-hidden="true" data-icon="lucide:cloud" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs font-mono text-gray-600 uppercase tracking-wide">Cloud AI (Others)</span>
</div>

<div className="hidden md:block text-gray-700">
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>

<div className="flex flex-col gap-4 items-center relative">
<div className="absolute -top-3 -right-3">
<span className="bg-green-500/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.1)]">SECURE</span>
</div>
<div className="w-48 h-32 bg-neutral-900 border border-white/20 rounded-lg shadow-lg shadow-black/50 flex items-center justify-center relative">
<svg aria-hidden="true" className="" data-icon="lucide:hard-drive" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M22 12H2m3.45-6.89L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11M6 16h.01M10 16h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="absolute bottom-3 text-[10px] font-medium text-gray-500">Your Mac</div>
</div>
<span className="text-xs font-mono text-white font-semibold uppercase tracking-wide">Local AI (Alter)</span>
</div>
</div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
                    Your work never leaves your machine.
                </h2>
<p className="leading-relaxed text-gray-500 max-w-lg mr-auto ml-auto">
                    Alter runs completely locally. We don't train on your designs, and your proprietary references stay private.
                </p>
</div>
</section>

<section className="md:py-32 pt-24 pr-6 pb-24 pl-6" id="early-access">
<div className="max-w-md mx-auto">
<div className="text-center mb-10 space-y-2">
<h2 className="text-2xl font-medium tracking-tight text-white">Help us build this</h2>
<p className="text-sm text-gray-500">Alter is in private beta. We’re looking for designers working on real projects.</p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="">
<label className="block text-sm font-medium text-gray-400 mb-1.5" htmlFor="email">Email address</label>
<input className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-lg focus:ring-1 focus:ring-white focus:border-white block p-2.5 outline-none transition-all placeholder:text-gray-600" id="email" placeholder="you@design.com" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-400 mb-1.5" htmlFor="project">What are you designing right now?</label>
<textarea className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-lg focus:ring-1 focus:ring-white focus:border-white block p-2.5 outline-none transition-all resize-none placeholder:text-gray-600" id="project" placeholder="e.g. A CRM for dentists..." rows="2"></textarea>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-400 mb-1.5" htmlFor="tool">Current reference tool?</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-lg focus:ring-1 focus:ring-white focus:border-white block p-2.5 outline-none appearance-none transition-all cursor-pointer" id="tool">
<option className="bg-black text-white">Eagle</option>
<option className="bg-black text-white">Pinterest</option>
<option className="bg-black text-white">Apple Finder / Folders</option>
<option className="bg-black text-white">Milanote</option>
<option className="bg-black text-white">Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<button className="w-full text-black bg-white hover:bg-gray-200 focus:ring-4 focus:ring-white/20 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-200" type="submit">
                        Request Early Access
                    </button>
<p className="text-xs text-center text-gray-600 mt-4">
                        We’ll reach out within 48 hours with beta access instructions.
                    </p>
</form>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-medium text-white">
                Alter
            </div>
<div className="flex gap-8">
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Privacy Policy (Local Processing)</a>
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="mailto:hello@alter.design">Contact</a>
</div>
<div className="text-xs text-gray-600">
                © 2024 Alter Design Inc.
            </div>
</div>
</footer>

    </>
  );
}
