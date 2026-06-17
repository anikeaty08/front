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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
<a className="text-lg font-semibold tracking-tighter text-slate-900" href="#">
                CIMENZA
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Products</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Systems</a>
<a className="text-sm font-medium text-slate-900" href="#">Technical Files</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
<button className="md:hidden text-slate-900">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<main className="flex-grow w-full max-w-6xl mx-auto px-6 py-20">

<div className="max-w-3xl mb-16">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 mb-6">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600">Updated for 2024</span>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                Technical Documentation
            </h1>
<p className="text-lg text-slate-500 leading-relaxed font-light max-w-2xl">
                Access product datasheets, safety information and system documentation designed for professional reference. All files are available in PDF format for easy download.
            </p>
</div>

<div className="mb-16 sticky top-20 z-40 bg-white/95 backdrop-blur py-4 -mx-4 px-4 border-b border-slate-100 md:static md:bg-transparent md:border-0 md:p-0 md:mx-0">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

<div className="relative w-full md:max-w-md group">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 group-focus-within:text-slate-900 transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="20"></span>
</span>
<input className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 transition-all shadow-sm" placeholder="Search by product name, code or file type..." type="text"/>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
<button className="whitespace-nowrap rounded-md bg-slate-900 px-4 py-2 text-xs font-medium text-white transition-colors">
                        All Files
                    </button>
<button className="whitespace-nowrap rounded-md border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors">
                        System Docs
                    </button>
<button className="whitespace-nowrap rounded-md border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors">
                        TDS
                    </button>
<button className="whitespace-nowrap rounded-md border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors">
                        SDS
                    </button>
<button className="whitespace-nowrap rounded-md border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors">
                        Colour
                    </button>
</div>
</div>
</div>

<div className="space-y-20">

<section>
<div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4 border-l-2 border-slate-900 pl-4">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">System Documentation</h2>
<p className="mt-2 text-sm text-slate-500 max-w-xl">Comprehensive system overviews and application information for all Cimenza microcement systems.</p>
</div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">2 Files</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<a className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5" href="#">
<div className="flex items-start justify-between">
<div className="rounded-lg bg-slate-50 p-2 text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors">
<span className="iconify" data-icon="lucide:layers" data-width="24"></span>
</div>
<span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 uppercase tracking-wide">Guide</span>
</div>
<div className="mt-6">
<h3 className="font-medium text-slate-900 group-hover:underline decoration-slate-300 underline-offset-4">Cimenza System Overview</h3>
<p className="text-xs text-slate-500 mt-1">General application framework</p>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-xs font-medium text-slate-400">PDF • 2.4 MB</span>
<span className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 opacity-0 transition-opacity group-hover:opacity-100">
                                Download <span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</span>
</div>
</a>

<a className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5" href="#">
<div className="flex items-start justify-between">
<div className="rounded-lg bg-slate-50 p-2 text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors">
<span className="iconify" data-icon="lucide:book-open" data-width="24"></span>
</div>
<span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 uppercase tracking-wide">Manual</span>
</div>
<div className="mt-6">
<h3 className="font-medium text-slate-900 group-hover:underline decoration-slate-300 underline-offset-4">ROCKBASE System Guide</h3>
<p className="text-xs text-slate-500 mt-1">Detailed base preparation</p>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-xs font-medium text-slate-400">PDF • 4.1 MB</span>
<span className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 opacity-0 transition-opacity group-hover:opacity-100">
                                Download <span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</span>
</div>
</a>
</div>
</section>

<section>
<div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4 border-l-2 border-slate-200 pl-4 hover:border-slate-900 transition-colors duration-500">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Technical Data Sheets</h2>
<p className="mt-2 text-sm text-slate-500 max-w-xl">Technical specifications for Cimenza products, including composition, performance data and usage parameters.</p>
</div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">6 Files</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">


<a className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5" href="#">
<div className="flex items-start justify-between">
<div className="rounded-lg bg-slate-50 p-2 text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors">
<span className="iconify" data-icon="lucide:file-text" data-width="24"></span>
</div>
<span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">TDS</span>
</div>
<div className="mt-6">
<h3 className="font-medium text-slate-900 group-hover:underline decoration-slate-300 underline-offset-4">ROCKBASE XL</h3>
<p className="text-xs text-slate-500 mt-1">Extra large grain specification</p>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-xs font-medium text-slate-400">PDF • 1.2 MB</span>
<span className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 opacity-0 transition-opacity group-hover:opacity-100">
                                Download <span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</span>
</div>
</a>

<a className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5" href="#">
<div className="flex items-start justify-between">
<div className="rounded-lg bg-slate-50 p-2 text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors">
<span className="iconify" data-icon="lucide:file-text" data-width="24"></span>
</div>
<span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">TDS</span>
</div>
<div className="mt-6">
<h3 className="font-medium text-slate-900 group-hover:underline decoration-slate-300 underline-offset-4">ROCKBASE L</h3>
<p className="text-xs text-slate-500 mt-1">Large grain specification</p>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-xs font-medium text-slate-400">PDF • 1.2 MB</span>
<span className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 opacity-0 transition-opacity group-hover:opacity-100">
                                Download <span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</span>
</div>
</a>

<a className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5" href="#">
<div className="flex items-start justify-between">
<div className="rounded-lg bg-slate-50 p-2 text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors">
<span className="iconify" data-icon="lucide:file-text" data-width="24"></span>
</div>
<span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">TDS</span>
</div>
<div className="mt-6">
<h3 className="font-medium text-slate-900 group-hover:underline decoration-slate-300 underline-offset-4">ROCKBASE M</h3>
<p className="text-xs text-slate-500 mt-1">Medium grain specification</p>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-xs font-medium text-slate-400">PDF • 1.1 MB</span>
<span className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 opacity-0 transition-opacity group-hover:opacity-100">
                                Download <span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</span>
</div>
</a>

<a className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5" href="#">
<div className="flex items-start justify-between">
<div className="rounded-lg bg-slate-50 p-2 text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors">
<span className="iconify" data-icon="lucide:file-text" data-width="24"></span>
</div>
<span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">TDS</span>
</div>
<div className="mt-6">
<h3 className="font-medium text-slate-900 group-hover:underline decoration-slate-300 underline-offset-4">ROCKBASE S</h3>
<p className="text-xs text-slate-500 mt-1">Fine grain specification</p>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-xs font-medium text-slate-400">PDF • 1.1 MB</span>
<span className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 opacity-0 transition-opacity group-hover:opacity-100">
                                Download <span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</span>
</div>
</a>

<a className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5" href="#">
<div className="flex items-start justify-between">
<div className="rounded-lg bg-slate-50 p-2 text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors">
<span className="iconify" data-icon="lucide:flask-conical" data-width="24"></span>
</div>
<span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">TDS</span>
</div>
<div className="mt-6">
<h3 className="font-medium text-slate-900 group-hover:underline decoration-slate-300 underline-offset-4">Primer Technical Sheet</h3>
<p className="text-xs text-slate-500 mt-1">Adhesion promoter specs</p>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-xs font-medium text-slate-400">PDF • 0.8 MB</span>
<span className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 opacity-0 transition-opacity group-hover:opacity-100">
                                Download <span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</span>
</div>
</a>

<a className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5" href="#">
<div className="flex items-start justify-between">
<div className="rounded-lg bg-slate-50 p-2 text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors">
<span className="iconify" data-icon="lucide:droplet" data-width="24"></span>
</div>
<span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">TDS</span>
</div>
<div className="mt-6">
<h3 className="font-medium text-slate-900 group-hover:underline decoration-slate-300 underline-offset-4">Sealer Technical Sheet</h3>
<p className="text-xs text-slate-500 mt-1">Protective coating specs</p>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-xs font-medium text-slate-400">PDF • 0.9 MB</span>
<span className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 opacity-0 transition-opacity group-hover:opacity-100">
                                Download <span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</span>
</div>
</a>
</div>
</section>

<section>
<div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4 border-l-2 border-slate-200 pl-4 hover:border-orange-500 transition-colors duration-500">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Safety Data Sheets (SDS)</h2>
<p className="mt-2 text-sm text-slate-500 max-w-xl">Safety and hazard information for professional handling of Cimenza products.</p>
</div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">3 Files</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<a className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-orange-200 hover:shadow-md hover:-translate-y-0.5" href="#">
<div className="flex items-start justify-between">
<div className="rounded-lg bg-orange-50 p-2 text-orange-600 group-hover:bg-orange-100 transition-colors">
<span className="iconify" data-icon="lucide:shield-alert" data-width="24"></span>
</div>
<span className="rounded bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-orange-700 uppercase tracking-wide">Safety</span>
</div>
<div className="mt-6">
<h3 className="font-medium text-slate-900 group-hover:underline decoration-orange-200 underline-offset-4">ROCKBASE SDS</h3>
<p className="text-xs text-slate-500 mt-1">Material safety data</p>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-xs font-medium text-slate-400">PDF • 0.5 MB</span>
<span className="flex items-center gap-1.5 text-xs font-semibold text-orange-600 opacity-0 transition-opacity group-hover:opacity-100">
                                Download <span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</span>
</div>
</a>

<a className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-orange-200 hover:shadow-md hover:-translate-y-0.5" href="#">
<div className="flex items-start justify-between">
<div className="rounded-lg bg-orange-50 p-2 text-orange-600 group-hover:bg-orange-100 transition-colors">
<span className="iconify" data-icon="lucide:shield-alert" data-width="24"></span>
</div>
<span className="rounded bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-orange-700 uppercase tracking-wide">Safety</span>
</div>
<div className="mt-6">
<h3 className="font-medium text-slate-900 group-hover:underline decoration-orange-200 underline-offset-4">Primer SDS</h3>
<p className="text-xs text-slate-500 mt-1">Chemical handling safety</p>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-xs font-medium text-slate-400">PDF • 0.4 MB</span>
<span className="flex items-center gap-1.5 text-xs font-semibold text-orange-600 opacity-0 transition-opacity group-hover:opacity-100">
                                Download <span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</span>
</div>
</a>

<a className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-orange-200 hover:shadow-md hover:-translate-y-0.5" href="#">
<div className="flex items-start justify-between">
<div className="rounded-lg bg-orange-50 p-2 text-orange-600 group-hover:bg-orange-100 transition-colors">
<span className="iconify" data-icon="lucide:shield-alert" data-width="24"></span>
</div>
<span className="rounded bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-orange-700 uppercase tracking-wide">Safety</span>
</div>
<div className="mt-6">
<h3 className="font-medium text-slate-900 group-hover:underline decoration-orange-200 underline-offset-4">Sealer SDS</h3>
<p className="text-xs text-slate-500 mt-1">Coating safety data</p>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-xs font-medium text-slate-400">PDF • 0.4 MB</span>
<span className="flex items-center gap-1.5 text-xs font-semibold text-orange-600 opacity-0 transition-opacity group-hover:opacity-100">
                                Download <span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</span>
</div>
</a>
</div>
</section>

<section>
<div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4 border-l-2 border-slate-200 pl-4 hover:border-purple-500 transition-colors duration-500">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Colour Documentation</h2>
<p className="mt-2 text-sm text-slate-500 max-w-xl">Reference documentation for the Cimenza colour palette and mixing ratios.</p>
</div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">1 File</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<a className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-purple-200 hover:shadow-md hover:-translate-y-0.5" href="#">
<div className="flex items-start justify-between">
<div className="rounded-lg bg-purple-50 p-2 text-purple-600 group-hover:bg-purple-100 transition-colors">
<span className="iconify" data-icon="lucide:palette" data-width="24"></span>
</div>
<span className="rounded bg-purple-50 px-2 py-0.5 text-[10px] font-semibold text-purple-700 uppercase tracking-wide">Design</span>
</div>
<div className="mt-6">
<h3 className="font-medium text-slate-900 group-hover:underline decoration-purple-200 underline-offset-4">Colour Palette Overview</h3>
<p className="text-xs text-slate-500 mt-1">Full chart and mixing ratios</p>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-xs font-medium text-slate-400">PDF • 6.8 MB</span>
<span className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 opacity-0 transition-opacity group-hover:opacity-100">
                                Download <span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</span>
</div>
</a>
</div>
</section>
</div>
</main>

<footer className="mt-auto border-t border-slate-100 bg-slate-50">
<div className="mx-auto max-w-6xl px-6 py-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<h4 className="text-lg font-bold tracking-tighter text-slate-900">CIMENZA</h4>
<p className="mt-2 text-xs text-slate-500 max-w-xs">Professional microcement systems for architectural and interior design applications.</p>
</div>
<div className="flex flex-wrap gap-x-8 gap-y-2">
<a className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Technical Files</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">FAQ</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms &amp; Conditions</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Cookies</a>
</div>
</div>
<div className="mt-8 border-t border-slate-200 pt-8 text-xs text-slate-400">
                © 2024 Cimenza.eu. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
