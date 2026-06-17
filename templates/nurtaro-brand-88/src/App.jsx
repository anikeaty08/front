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



        lucide.createIcons();
    
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
      

<nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="h-6 w-6 text-violet-600 fill-current" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<rect className="fill-violet-600" height="80" rx="25" width="80" x="10" y="10"></rect>
<circle cx="35" cy="45" fill="white" r="8"></circle>
<circle cx="65" cy="45" fill="white" r="8"></circle>
<path d="M38 65Q50 72 62 65" stroke="#F97316" strokeLinecap="round" strokeWidth="8"></path>
</svg>
<span className="text-sm font-semibold tracking-tight text-slate-900">Nurtaro<span className="text-slate-400 font-normal">.brand</span></span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-500">
<a className="hover:text-violet-600 transition-colors" href="#logo">Logo</a>
<a className="hover:text-violet-600 transition-colors" href="#system">System</a>
<a className="hover:text-violet-600 transition-colors" href="#colors">Colors</a>
<a className="hover:text-violet-600 transition-colors" href="#application">Application</a>
</div>
</div>
</nav>

<header className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
<div className="mx-auto max-w-7xl px-6 relative z-10">
<div className="max-w-2xl">
<div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 mb-6">
<span className="flex h-2 w-2 rounded-full bg-violet-600 mr-2"></span>
                    Brand Identity v1.0
                </div>
<h1 className="text-5xl font-semibold tracking-tight text-slate-900 mb-6 sm:text-6xl">
                    Nurturing the future <br/>
<span className="text-violet-600">one box at a time.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                    A comprehensive identity for an international educational ecosystem. 
                    Blending technology with care, the Nurtaro brand is designed to scale across physical products, digital interfaces, and child-friendly content.
                </p>
</div>
</div>

<div className="absolute top-0 right-0 -z-10 opacity-30 translate-x-1/3 -translate-y-1/4">
<div className="h-96 w-96 rounded-full bg-gradient-to-br from-violet-400 to-orange-300 blur-3xl filter"></div>
</div>
</header>
<main className="space-y-24 pb-24">

<section className="mx-auto max-w-7xl px-6" id="logo">
<div className="mb-12 flex items-baseline justify-between border-b border-slate-200 pb-4">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">01. The Logomark</h2>
<span className="text-xs font-mono text-slate-400">Mascot + Wordmark</span>
</div>
<div className="grid gap-8 lg:grid-cols-2">

<div className="group relative flex aspect-video items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
<div className="flex flex-col items-center gap-6">

<div className="flex items-center gap-4">
<svg className="h-24 w-24 drop-shadow-xl" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

<rect className="fill-violet-600 transition-all duration-500 group-hover:fill-violet-500" height="90" rx="28" width="90" x="5" y="5"></rect>

<circle cx="35" cy="42" fill="white" r="8"></circle>
<circle cx="65" cy="42" fill="white" r="8"></circle>


<path d="M38 65 Q50 72 62 65" stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path>
</svg>

<div className="flex flex-col justify-center">
<h3 className="text-5xl font-semibold tracking-tight text-slate-900">
                                    Nurtaro
                                </h3>
</div>
</div>
</div>

<div className="absolute inset-0 z-0 opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
<div className="absolute left-1/2 top-0 h-full w-px border-l border-dashed border-violet-200"></div>
<div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-violet-200"></div>
</div>
</div>

<div className="grid gap-4 sm:grid-cols-2">

<div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-8">
<svg className="h-16 w-16 mb-4" fill="none" viewbox="0 0 100 100">
<rect className="fill-violet-600" height="90" rx="28" width="90" x="5" y="5"></rect>
<circle cx="35" cy="42" fill="white" r="8"></circle>
<circle cx="65" cy="42" fill="white" r="8"></circle>
<path d="M38 65 Q50 72 62 65" stroke="#F97316" strokeLinecap="round" strokeWidth="8"></path>
</svg>
<span className="text-xs font-medium text-slate-500">Symbol (Mascot)</span>
</div>

<div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8">
<svg className="h-16 w-16 mb-4 grayscale opacity-90" fill="none" viewbox="0 0 100 100">
<rect className="fill-slate-900" height="90" rx="28" width="90" x="5" y="5"></rect>
<circle cx="35" cy="42" fill="white" r="8"></circle>
<circle cx="65" cy="42" fill="white" r="8"></circle>
<path d="M38 65 Q50 72 62 65" stroke="white" strokeLinecap="round" strokeWidth="8"></path>
</svg>
<span className="text-xs font-medium text-slate-500">Monochrome</span>
</div>

<div className="col-span-2 flex items-center justify-center gap-6 rounded-2xl bg-slate-950 p-10">
<svg className="h-12 w-12" fill="none" viewbox="0 0 100 100">
<rect className="fill-white" height="90" rx="28" width="90" x="5" y="5"></rect>
<circle cx="35" cy="42" fill="#0F172A" r="8"></circle>
<circle cx="65" cy="42" fill="#0F172A" r="8"></circle>
<path d="M38 65 Q50 72 62 65" stroke="#F97316" strokeLinecap="round" strokeWidth="8"></path>
</svg>
<h3 className="text-3xl font-semibold tracking-tight text-white">
                            Nurtaro
                        </h3>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-xl bg-white border border-slate-100 shadow-sm">
<div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600 mb-4">
<i data-lucide="smile" width="18"></i>
</div>
<h4 className="text-sm font-semibold text-slate-900">Friendly Character</h4>
<p className="text-xs text-slate-500 mt-2 leading-relaxed">The icon doubles as a mascot face. Soft rounded corners (squircles) evoke safety and playfulness suitable for ages 0-7.</p>
</div>
<div className="p-6 rounded-xl bg-white border border-slate-100 shadow-sm">
<div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
<i data-lucide="box" width="18"></i>
</div>
<h4 className="text-sm font-semibold text-slate-900">Abstract Box Form</h4>
<p className="text-xs text-slate-500 mt-2 leading-relaxed">The outer shape subtly references the physical "NurtaroBox" without being a literal, boring cardboard box.</p>
</div>
<div className="p-6 rounded-xl bg-white border border-slate-100 shadow-sm">
<div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 mb-4">
<i data-lucide="smartphone" width="18"></i>
</div>
<h4 className="text-sm font-semibold text-slate-900">App Ready</h4>
<p className="text-xs text-slate-500 mt-2 leading-relaxed">Designed to fit perfectly within standard app icon grids (iOS/Android) while maintaining legibility at 16px.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 bg-slate-50/50 py-12 border-y border-slate-200" id="system">
<div className="mb-12 flex items-baseline justify-between">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">02. Product Architecture</h2>
<span className="text-xs font-mono text-slate-400">Scalability</span>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group flex flex-col items-start gap-4 p-8 rounded-2xl bg-white border border-slate-200 hover:border-violet-300 transition-colors">
<div className="flex items-center gap-3">
<svg className="h-8 w-8" fill="none" viewbox="0 0 100 100">
<rect className="fill-violet-600" height="90" rx="28" width="90" x="5" y="5"></rect>
<circle cx="35" cy="42" fill="white" r="8"></circle>
<circle cx="65" cy="42" fill="white" r="8"></circle>
<path d="M38 65 Q50 72 62 65" stroke="#F97316" strokeLinecap="round" strokeWidth="8"></path>
</svg>
<div className="text-2xl font-semibold tracking-tight text-slate-900">
                            Nurtaro<span className="text-violet-600">Box</span>
</div>
</div>
<p className="text-xs text-slate-400">Physical development kits</p>
</div>

<div className="group flex flex-col items-start gap-4 p-8 rounded-2xl bg-white border border-slate-200 hover:border-violet-300 transition-colors">
<div className="flex items-center gap-3">
<svg className="h-8 w-8" fill="none" viewbox="0 0 100 100">
<rect className="fill-violet-600" height="90" rx="28" width="90" x="5" y="5"></rect>
<circle cx="35" cy="42" fill="white" r="8"></circle>
<circle cx="65" cy="42" fill="white" r="8"></circle>
<path d="M38 65 Q50 72 62 65" stroke="#F97316" strokeLinecap="round" strokeWidth="8"></path>
</svg>
<div className="text-2xl font-semibold tracking-tight text-slate-900">
                            Nurtaro<span className="text-slate-400">App</span>
</div>
</div>
<p className="text-xs text-slate-400">Digital ecosystem &amp; tracking</p>
</div>

<div className="group flex flex-col items-start gap-4 p-8 rounded-2xl bg-white border border-slate-200 hover:border-violet-300 transition-colors">
<div className="flex items-center gap-3">
<svg className="h-8 w-8" fill="none" viewbox="0 0 100 100">
<rect className="fill-violet-600" height="90" rx="28" width="90" x="5" y="5"></rect>
<circle cx="35" cy="42" fill="white" r="8"></circle>
<circle cx="65" cy="42" fill="white" r="8"></circle>
<path d="M38 65 Q50 72 62 65" stroke="#F97316" strokeLinecap="round" strokeWidth="8"></path>
</svg>
<div className="text-2xl font-semibold tracking-tight text-slate-900">
                            Nurtaro<span className="text-orange-500">Kids</span>
</div>
</div>
<p className="text-xs text-slate-400">Educational media content</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6" id="colors">
<div className="mb-12 flex items-baseline justify-between border-b border-slate-200 pb-4">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">03. Palette &amp; Type</h2>
<span className="text-xs font-mono text-slate-400">Visual System</span>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="space-y-6">
<h3 className="text-sm font-medium text-slate-900">Primary Palette</h3>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<div className="h-24 w-full rounded-xl bg-violet-600 shadow-sm flex items-end p-3">
<span className="text-white text-xs font-mono opacity-80">Viol-600</span>
</div>
<div className="flex gap-2">
<div className="h-10 w-full rounded bg-violet-400"></div>
<div className="h-10 w-full rounded bg-violet-200"></div>
<div className="h-10 w-full rounded bg-violet-50"></div>
</div>
</div>
<div className="space-y-2">
<div className="h-24 w-full rounded-xl bg-orange-500 shadow-sm flex items-end p-3">
<span className="text-white text-xs font-mono opacity-80">Org-500</span>
</div>
<div className="flex gap-2">
<div className="h-10 w-full rounded bg-orange-400"></div>
<div className="h-10 w-full rounded bg-orange-300"></div>
<div className="h-10 w-full rounded bg-orange-100"></div>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-slate-900 pt-4">Cosmic Dark Mode (Space Theme)</h3>
<div className="h-24 w-full rounded-xl bg-slate-950 shadow-sm flex items-center justify-center p-3 relative overflow-hidden border border-slate-800">

<div className="absolute w-1 h-1 bg-white rounded-full top-4 left-10 opacity-50"></div>
<div className="absolute w-1 h-1 bg-violet-400 rounded-full bottom-4 right-20 opacity-70"></div>
<div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-transparent"></div>
<span className="text-slate-400 text-xs font-mono relative z-10">Slate-950 Base</span>
</div>
</div>

<div className="space-y-6">
<h3 className="text-sm font-medium text-slate-900">Typography</h3>
<div className="rounded-2xl border border-slate-200 bg-white p-8">
<div className="space-y-6">
<div>
<p className="text-6xl font-semibold tracking-tight text-slate-900">Aa</p>
<p className="mt-2 text-xs font-mono text-slate-400">Logotype Font: Custom Geometric Sans</p>
</div>
<div className="h-px w-full bg-slate-100"></div>
<div>
<p className="text-3xl font-semibold tracking-tight text-slate-900">Nurtaro Ecosystem</p>
<p className="text-base text-slate-600 mt-2">
                                    ABCDEFGHIJKLMNOPQRSTUVWXYZ <br/>
                                    abcdefghijklmnopqrstuvwxyz <br/>
                                    1234567890
                                </p>
</div>
<div className="flex gap-4">
<div className="px-3 py-1 bg-slate-100 rounded text-xs font-mono text-slate-500">Tracking: -0.025em</div>
<div className="px-3 py-1 bg-slate-100 rounded text-xs font-mono text-slate-500">Weight: Semibold</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6" id="application">
<div className="mb-12 flex items-baseline justify-between border-b border-slate-200 pb-4">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">04. Application</h2>
<span className="text-xs font-mono text-slate-400">Real World Usage</span>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="group relative overflow-hidden rounded-3xl bg-slate-100 pt-12 pl-12">
<div className="absolute top-6 right-6 z-10">
<span className="inline-flex items-center rounded-full bg-white/60 px-2 py-1 text-xs font-medium text-slate-600 backdrop-blur">App Icon</span>
</div>

<div className="relative h-[400px] w-full rounded-tl-3xl border-t-[8px] border-l-[8px] border-slate-900 bg-slate-900 shadow-2xl">

<div className="h-full w-full rounded-tl-2xl bg-white p-6 relative overflow-hidden">

<div className="flex justify-between items-center mb-8">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center">
<i className="w-4 text-slate-400" data-lucide="menu"></i>
</div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-violet-600"></div>
<div className="text-xs font-semibold tracking-tight">Nurtaro</div>
</div>
<div className="w-8 h-8 rounded-full bg-slate-100"></div>
</div>

<div className="bg-violet-50 rounded-2xl p-6 flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-violet-600">
<svg className="h-8 w-8" fill="none" viewbox="0 0 100 100">
<rect className="fill-current" height="90" rx="28" width="90" x="5" y="5"></rect>
<circle cx="35" cy="42" fill="white" r="8"></circle>
<circle cx="65" cy="42" fill="white" r="8"></circle>
<path d="M38 65 Q50 72 62 65" stroke="#F97316" strokeLinecap="round" strokeWidth="8"></path>
</svg>
</div>
<div>
<div className="text-xs font-medium text-violet-600 mb-1">Daily Task</div>
<div className="text-sm font-semibold text-slate-900">Let's learn colors!</div>
</div>
</div>

<div className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center z-20 border border-slate-100">
<svg className="h-12 w-12" fill="none" viewbox="0 0 100 100">
<rect className="fill-violet-600" height="100" rx="22" width="100" x="0" y="0"></rect>
<circle cx="35" cy="42" fill="white" r="8"></circle>
<circle cx="65" cy="42" fill="white" r="8"></circle>
<path d="M38 65 Q50 72 62 65" stroke="#F97316" strokeLinecap="round" strokeWidth="8"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-slate-900 p-12 flex flex-col items-center justify-center text-center">
<div className="absolute top-6 right-6 z-10">
<span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-white backdrop-blur border border-white/20">Cosmic Box Series</span>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-violet-900/50 via-slate-900 to-orange-900/20"></div>

<div className="relative z-10 w-64 aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-2xl border-t border-white/10 transform transition-transform group-hover:scale-105 duration-500">

<div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col items-center justify-center">
<svg className="h-20 w-20 mb-4" fill="none" viewbox="0 0 100 100">
<rect className="fill-white" height="90" rx="28" width="90" x="5" y="5"></rect>
<circle cx="35" cy="42" fill="#0F172A" r="8"></circle>
<circle cx="65" cy="42" fill="#0F172A" r="8"></circle>
<path d="M38 65 Q50 72 62 65" stroke="#F97316" strokeLinecap="round" strokeWidth="8"></path>
</svg>
<div className="text-xl font-semibold tracking-tight text-white">NurtaroBox</div>
<div className="text-[10px] tracking-widest text-slate-400 mt-2 uppercase">Space Explorer Kit</div>
</div>

<div className="absolute -right-2 top-8 w-4 h-12 bg-orange-500 shadow-lg skew-y-12"></div>
</div>
<p className="relative z-10 mt-8 text-sm text-slate-400 max-w-xs">
                        High contrast packaging for "Cosmic" edition. The white logo pops against the dark substrate, maintaining brand trust and tech appeal.
                    </p>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white py-12">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="h-4 w-4 rounded bg-violet-600"></div>
<span className="text-sm font-semibold tracking-tight text-slate-900">Nurtaro</span>
</div>
<p className="text-xs text-slate-400">© 2023 Nurtaro Education. Brand Identity Guidelines.</p>
</div>
</footer>


    </>
  );
}
