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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-lg font-semibold tracking-tighter flex items-center gap-1" href="#">
<iconify-icon className="text-xl" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    DOC<span className="text-zinc-400">GEN</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
<a className="text-zinc-900 hover:text-zinc-600 transition-colors" href="#">Generator</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Templates</a>
<a className="hover:text-zinc-900 transition-colors" href="#">API</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Docs</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block" href="#">Log in</a>
<button className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-sm font-medium py-1.5 px-4 rounded-full shadow-sm">
                    Sign up
                </button>
</div>
</div>
</header>

<main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col">

<div className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Document Builder</h1>
<p className="mt-2 text-sm text-zinc-500 max-w-2xl">Configure your settings, add content, and instantly generate production-ready PDF documents.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start flex-grow">

<aside className="lg:col-span-4 flex flex-col gap-6 sticky top-24">

<div className="bg-white rounded-xl border border-zinc-200/80 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
<h2 className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
<iconify-icon className="text-base text-zinc-500" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Document Setup
                        </h2>
</div>
<div className="p-5 space-y-5">

<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Format Size</label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 block p-2.5 outline-none transition-shadow cursor-pointer">
<option>A4 (210 x 297 mm)</option>
<option>US Letter (8.5 x 11 in)</option>
<option>Legal (8.5 x 14 in)</option>
<option>Custom</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Orientation</label>
<div className="grid grid-cols-2 gap-2">
<label className="cursor-pointer">
<input checked="" className="sr-only peer" name="orientation" type="radio"/>
<div className="text-center py-2 px-3 border border-zinc-200 rounded-lg text-sm text-zinc-500 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:document-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                        Portrait
                                    </div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="orientation" type="radio"/>
<div className="text-center py-2 px-3 border border-zinc-200 rounded-lg text-sm text-zinc-500 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="rotate-90" icon="solar:document-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                        Landscape
                                    </div>
</label>
</div>
</div>

<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Margins</label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 block p-2.5 outline-none transition-shadow cursor-pointer">
<option>Normal (2.54 cm)</option>
<option>Narrow (1.27 cm)</option>
<option>Moderate</option>
<option>None (Borderless)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<hr className="border-zinc-100"/>

<div className="space-y-4">
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-zinc-700 font-medium group-hover:text-zinc-900 transition-colors">Page Numbers</span>
<div className="relative inline-flex items-center">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-zinc-700 font-medium group-hover:text-zinc-900 transition-colors">Include Header/Footer</span>
<div className="relative inline-flex items-center">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-zinc-700 font-medium group-hover:text-zinc-900 transition-colors">Watermark</span>
<div className="relative inline-flex items-center">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
</div>
</label>
</div>
</div>
</div>

<button className="w-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-sm font-medium py-2.5 px-4 rounded-xl shadow-sm flex items-center justify-center gap-2 group">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:printer-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Generate PDF
                </button>
<div className="text-center">
<button className="text-xs text-zinc-500 hover:text-zinc-900 font-medium transition-colors underline decoration-zinc-300 underline-offset-4">
                        Download as JSON configuration
                    </button>
</div>
</aside>

<div className="lg:col-span-8 flex flex-col h-full min-h-[600px]">

<div className="bg-white border border-zinc-200/80 rounded-t-xl px-4 py-2 flex items-center justify-between shadow-sm z-10">
<div className="flex items-center gap-1 text-zinc-600">
<button className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors" title="Text">
<iconify-icon className="text-lg" icon="solar:text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors" title="Image">
<iconify-icon className="text-lg" icon="solar:gallery-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="w-px h-4 bg-zinc-200 mx-2"></div>
<button className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors bg-zinc-100 text-zinc-900" title="Align Left">
<iconify-icon className="text-lg" icon="solar:align-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors" title="Align Center">
<iconify-icon className="text-lg" icon="solar:align-horizonta-spacing-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors" title="Align Right">
<iconify-icon className="text-lg" icon="solar:align-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="w-px h-4 bg-zinc-200 mx-2"></div>
<select className="text-sm bg-transparent outline-none cursor-pointer hover:bg-zinc-100 py-1 px-2 rounded-md transition-colors appearance-none">
<option>Inter</option>
<option>Roboto</option>
<option>Monospace</option>
</select>
<select className="text-sm bg-transparent outline-none cursor-pointer hover:bg-zinc-100 py-1 px-2 rounded-md transition-colors appearance-none">
<option>12pt</option>
<option selected="">14pt</option>
<option>16pt</option>
<option>24pt</option>
</select>
</div>
<div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Live Preview
                        </span>
<div className="flex items-center bg-zinc-100 rounded-lg p-0.5 ml-2">
<button className="p-1 hover:bg-white hover:shadow-sm rounded-md transition-all text-zinc-600">
<iconify-icon className="text-base" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<span className="px-2 text-xs">100%</span>
<button className="p-1 hover:bg-white hover:shadow-sm rounded-md transition-all text-zinc-600">
<iconify-icon className="text-base" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-zinc-100/50 border-x border-b border-zinc-200/80 rounded-b-xl flex-grow overflow-y-auto p-8 flex justify-center inset-shadow-sm">

<div className="bg-white shadow-sm ring-1 ring-zinc-200 w-full max-w-[794px] aspect-[1/1.414] rounded-sm relative transition-all duration-300 hover:shadow-md">

<div className="absolute top-0 left-0 w-full h-16 border-b border-zinc-100 border-dashed flex items-center justify-between px-12 text-zinc-400 text-xs font-medium">
<span>CONFIDENTIAL DOCUMENT</span>
<span>{Date}</span>
</div>

<div className="absolute inset-0 top-16 bottom-16 px-12 py-8 outline-none" contenteditable="true">
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">Annual Performance Review 2024</h1>
<p className="text-sm text-zinc-600 leading-relaxed mb-4">
                                This document serves as a comprehensive overview of performance metrics, strategic milestones, and operational achievements for the fiscal year. The data enclosed is intended for internal review and stakeholder distribution.
                            </p>
<div className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-4 mb-6 mt-6 flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-white rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Q3 Revenue Growth</p>
<p className="text-xs text-zinc-500">Exceeded projections by 24%</p>
</div>
</div>
</div>
<h2 className="text-lg font-semibold tracking-tight text-zinc-900 mt-8 mb-3 border-b border-zinc-100 pb-2">Key Objectives</h2>
<ul className="space-y-2 text-sm text-zinc-600 list-inside list-disc marker:text-zinc-300">
<li>Scale infrastructure to support 1M+ concurrent users.</li>
<li>Reduce latency across core global nodes.</li>
<li>Implement strict SOC2 compliance measures.</li>
</ul>
<p className="text-sm text-zinc-400 italic mt-12">
                                Click anywhere to start editing this template. Changes are reflected instantly in the configuration payload.
                            </p>
</div>

<div className="absolute bottom-0 left-0 w-full h-16 border-t border-zinc-100 border-dashed flex items-center justify-center text-zinc-400 text-xs font-medium">
<span>Page 1 of 1</span>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
