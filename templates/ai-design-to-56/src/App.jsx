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
      

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center w-full">
<div className="absolute top-[-20%] w-[70%] h-[50%] rounded-full bg-orange-500/5 blur-[120px]"></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.04] bg-zinc-950/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-medium tracking-tight text-lg flex items-center gap-2" href="#">
<div className="h-6 w-6 rounded bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
<i className="w-4 h-4" data-lucide="hexagon" strokeWidth="1.5"></i>
</div>
                    Fluxer
                </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors" href="#">Features</a>
<a className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors" href="#">Methodology</a>
<a className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors" href="#">Pricing</a>
<a className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors" href="#">Changelog</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-zinc-950 px-3 py-1.5 rounded-md hover:bg-zinc-200 transition-colors flex items-center gap-1.5" href="#">
                    Start Building
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</nav>
<main className="flex-grow z-10 pt-32 pb-24 relative">

<section className="max-w-7xl mx-auto px-6 text-center">
<a className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/5 rounded-full px-3 py-1 text-xs text-orange-200 hover:bg-orange-500/10 transition-colors mb-8" href="#">
<span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
                Introducing Fluxer Studio v2
                <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<h1 className="sm:text-6xl md:text-7xl bg-clip-text leading-tight text-5xl font-medium text-transparent tracking-tight bg-gradient-to-b from-white via-zinc-200 to-zinc-500 max-w-4xl mr-auto ml-auto">
                Design with the power of code.
            </h1>
<p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                The visual editor that outputs production-ready React and Tailwind. Build interfaces visually without sacrificing the underlying infrastructure.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto text-sm font-medium bg-white text-zinc-950 px-5 py-2.5 rounded-lg hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Open Editor Free
                </button>
<button className="w-full sm:w-auto text-sm font-medium border border-white/10 bg-white/[0.02] text-zinc-200 px-5 py-2.5 rounded-lg hover:bg-white/[0.05] transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="book" strokeWidth="1.5"></i>
                    Read Documentation
                </button>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 mt-24">
<div className="rounded-2xl border border-zinc-800 bg-[#0c0c0e] shadow-2xl overflow-hidden flex flex-col h-[800px] ring-1 ring-white/5 relative">

<div className="h-14 border-b border-zinc-800/80 bg-[#111113] flex items-center justify-between px-4 flex-shrink-0">

<div className="flex items-center gap-4">

<div className="flex items-center gap-2 mr-4">
<div className="w-3 h-3 rounded-full bg-rose-500/90 border border-rose-500/20"></div>
<div className="w-3 h-3 rounded-full bg-amber-500/90 border border-amber-500/20"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/90 border border-emerald-500/20"></div>
</div>
<div className="h-4 w-px bg-zinc-800"></div>
<div className="flex items-center gap-3 text-zinc-400">
<button className="hover:text-zinc-100 transition-colors"><i className="w-4 h-4" data-lucide="menu" strokeWidth="1.5"></i></button>
<button className="text-orange-500 bg-orange-500/10 p-1.5 rounded-md"><i className="w-4 h-4" data-lucide="mouse-pointer-2" strokeWidth="1.5"></i></button>
<button className="hover:text-zinc-100 transition-colors p-1.5"><i className="w-4 h-4" data-lucide="layout-grid" strokeWidth="1.5"></i></button>
<button className="hover:text-zinc-100 transition-colors p-1.5"><i className="w-4 h-4" data-lucide="type" strokeWidth="1.5"></i></button>
</div>
</div>

<div className="flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 rounded-full px-4 py-1.5">
<i className="w-3 h-3 text-orange-500" data-lucide="hexagon" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-zinc-200">Fluxer Project</span>
<span className="text-xs text-zinc-600">/</span>
<span className="text-xs text-zinc-400">Home</span>
</div>

<div className="flex items-center gap-4">
<div className="flex items-center -space-x-2">
<div className="w-7 h-7 rounded-full bg-indigo-500 border-2 border-[#111113] flex items-center justify-center text-xs font-medium text-white">JD</div>
<div className="w-7 h-7 rounded-full bg-purple-500 border-2 border-[#111113] flex items-center justify-center text-xs font-medium text-white">AS</div>
<div className="w-7 h-7 rounded-full bg-zinc-800 border-2 border-[#111113] flex items-center justify-center text-xs font-medium text-zinc-300">+2</div>
</div>
<div className="h-4 w-px bg-zinc-800"></div>
<span className="text-xs text-zinc-400 font-medium">100%</span>
<button className="bg-orange-500 hover:bg-orange-400 text-white text-xs font-medium px-4 py-1.5 rounded-md transition-colors shadow-lg shadow-orange-500/20">
                            Publish
                        </button>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="w-64 border-r border-zinc-800/80 bg-[#111113] flex flex-col flex-shrink-0">

<div className="p-3">
<div className="bg-[#0a0a0a] border border-zinc-800 rounded-md p-2 flex items-center gap-2 text-zinc-500 focus-within:border-zinc-700 transition-colors">
<i className="w-4 h-4" data-lucide="search" strokeWidth="1.5"></i>
<span className="text-xs">Search layers</span>
</div>
</div>

<div className="px-3 py-2">
<div className="flex items-center justify-between text-xs font-medium text-zinc-500 mb-2 px-2">
                                PAGES
                                <i className="w-3 h-3" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="bg-zinc-800/50 rounded-md p-2 flex items-center gap-2 text-zinc-200 text-xs font-medium border border-zinc-700/50">
<i className="w-4 h-4" data-lucide="home" strokeWidth="1.5"></i>
                                Home
                            </div>
</div>

<div className="px-3 py-4 flex-1">
<div className="flex items-center justify-between text-xs font-medium text-zinc-500 mb-2 px-2">
                                LAYERS
                            </div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 p-2 rounded-md hover:bg-zinc-800/30 text-xs text-zinc-300 cursor-pointer">
<i className="w-3 h-3 text-zinc-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-indigo-400" data-lucide="layout" strokeWidth="1.5"></i>
                                    Desktop
                                </div>
<div className="flex items-center gap-2 p-2 pl-6 rounded-md bg-orange-500/10 text-orange-400 text-xs font-medium cursor-pointer">
<i className="w-4 h-4" data-lucide="type" strokeWidth="1.5"></i>
                                    Hero Heading
                                </div>
<div className="flex items-center gap-2 p-2 pl-6 rounded-md hover:bg-zinc-800/30 text-xs text-zinc-400 cursor-pointer">
<i className="w-4 h-4" data-lucide="type" strokeWidth="1.5"></i>
                                    Subtext
                                </div>
<div className="flex items-center justify-between p-2 pl-6 rounded-md hover:bg-zinc-800/30 text-xs text-zinc-400 cursor-pointer group">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="square" strokeWidth="1.5"></i>
                                        Primary Button
                                    </div>
<i className="w-3 h-3 opacity-0 group-hover:opacity-100" data-lucide="eye-off" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="border-t border-zinc-800 p-3 flex items-center justify-between text-xs font-medium text-zinc-500 hover:text-zinc-300 cursor-pointer">
                            ASSETS
                            <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex-1 bg-[#0a0a0a] relative overflow-hidden flex flex-col">

<div className="h-6 border-b border-zinc-800/80 flex items-end px-8 text-xs text-zinc-600 gap-24 overflow-hidden select-none">
<span>0</span><span>100</span><span>200</span><span>300</span><span>400</span><span>500</span><span>600</span><span>700</span><span>800</span>
</div>

<div className="flex-1 relative w-full h-full p-8 overflow-auto bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:24px_24px]">

<div className="relative w-full max-w-3xl mx-auto mt-10">

<div className="absolute -inset-4 border border-orange-500 border-dashed rounded-lg bg-orange-500/[0.02] pointer-events-none z-10">

<div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-orange-500 rounded-sm shadow-sm"></div>
<div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-orange-500 rounded-sm shadow-sm"></div>
<div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-orange-500 rounded-sm shadow-sm"></div>
<div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-orange-500 rounded-sm shadow-sm"></div>

<div className="absolute -top-6 left-0 bg-orange-500 text-white text-xs font-medium px-2 py-0.5 rounded-sm flex items-center gap-1">
<i className="w-3 h-3" data-lucide="type" strokeWidth="2"></i>
                                        H2 - Heading
                                    </div>
</div>

<div className="relative z-0 p-8 border border-zinc-800/50 rounded-xl bg-zinc-900/40 backdrop-blur-sm">
<div className="flex items-center gap-2 mb-6 text-orange-500 text-sm font-medium">
<div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
                                        Desktop · 1200px
                                    </div>
<h2 className="text-5xl font-serif text-white tracking-tight leading-tight">
                                        The browser that works for you
                                    </h2>
</div>

<div className="mt-8 flex flex-wrap gap-4 relative z-20">

<div className="flex-1 min-w-[200px] bg-[#111113] border border-zinc-800 rounded-xl p-5 shadow-xl">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-medium text-zinc-500 tracking-wider">WIDTH</span>
<i className="w-4 h-4 text-orange-500" data-lucide="layout" strokeWidth="1.5"></i>
</div>
<div className="text-2xl font-mono text-zinc-100 mb-2">1fr</div>
<div className="flex items-center gap-1.5 text-xs text-orange-500 font-medium">
<i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="2"></i>
                                            Fill Container
                                        </div>
</div>

<div className="flex-[1.5] min-w-[280px] bg-[#111113] border border-zinc-800 rounded-xl p-5 shadow-xl">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-medium text-zinc-500 tracking-wider">GENERATED CSS</span>
<div className="flex gap-2">
<i className="w-4 h-4 text-zinc-500" data-lucide="code" strokeWidth="1.5"></i>
</div>
</div>
<div className="font-mono text-xs leading-loose">
<span className="text-purple-400">display</span><span className="text-zinc-400">:</span> <span className="text-green-400">grid</span><span className="text-zinc-400">;</span>
<span className="text-purple-400 ml-2">gap</span><span className="text-zinc-400">:</span> <span className="text-orange-400">1rem</span><span className="text-zinc-400">;</span>
<span className="text-purple-400 ml-2">color</span><span className="text-zinc-400">:</span> <span className="text-zinc-200">#fff</span><span className="text-zinc-400">;</span>
</div>
</div>
</div>

<div className="mt-4 bg-[#111113] border border-zinc-800 rounded-xl p-4 shadow-xl flex items-center justify-between relative z-20">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
<i className="w-5 h-5 text-orange-500" data-lucide="cloud-download" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium text-zinc-100">Assets Ready</div>
<div className="text-xs text-zinc-500">3 images optimized</div>
</div>
</div>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium px-4 py-2 rounded-md transition-colors border border-zinc-700">
                                        Download
                                    </button>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#111113]/90 backdrop-blur-md border border-zinc-800 rounded-full flex items-center p-1.5 shadow-2xl">
<button className="p-2.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"><i className="w-4 h-4" data-lucide="hand" strokeWidth="1.5"></i></button>
<button className="p-2.5 rounded-full bg-orange-500/10 text-orange-500 transition-colors"><i className="w-4 h-4" data-lucide="pen-tool" strokeWidth="1.5"></i></button>
<div className="w-px h-5 bg-zinc-800 mx-1"></div>
<button className="p-2.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"><i className="w-4 h-4" data-lucide="message-square" strokeWidth="1.5"></i></button>
</div>
</div>
</div>

<div className="w-72 border-l border-zinc-800/80 bg-[#111113] flex flex-col flex-shrink-0 overflow-y-auto hidden lg:flex">

<div className="flex border-b border-zinc-800">
<button className="flex-1 py-3 text-xs font-medium text-zinc-100 border-b-2 border-orange-500">Design</button>
<button className="flex-1 py-3 text-xs font-medium text-zinc-500 hover:text-zinc-300">Prototype</button>
<button className="flex-1 py-3 text-xs font-medium text-zinc-500 hover:text-zinc-300">Inspect</button>
</div>
<div className="p-4 flex flex-col gap-6">

<div>
<div className="flex items-center justify-between text-xs font-medium text-zinc-500 mb-3">
                                    LAYOUT
                                    <i className="w-3 h-3" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="bg-[#0a0a0a] border border-zinc-800 rounded-md flex p-1 mb-2">
<button className="flex-1 py-1.5 flex justify-center text-zinc-400 hover:text-white rounded hover:bg-zinc-800"><i className="w-4 h-4" data-lucide="align-left" strokeWidth="1.5"></i></button>
<button className="flex-1 py-1.5 flex justify-center text-zinc-400 hover:text-white rounded hover:bg-zinc-800"><i className="w-4 h-4" data-lucide="align-center" strokeWidth="1.5"></i></button>
<button className="flex-1 py-1.5 flex justify-center text-zinc-400 hover:text-white rounded hover:bg-zinc-800 bg-zinc-800/50"><i className="w-4 h-4" data-lucide="align-justify" strokeWidth="1.5"></i></button>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="bg-[#0a0a0a] border border-zinc-800 rounded-md p-2 flex items-center gap-2">
<i className="w-3 h-3 text-zinc-500" data-lucide="maximize" strokeWidth="1.5"></i>
<span className="text-xs text-zinc-300">24</span>
</div>
<div className="bg-[#0a0a0a] border border-zinc-800 rounded-md p-2 flex items-center gap-2">
<i className="w-3 h-3 text-zinc-500" data-lucide="minimize" strokeWidth="1.5"></i>
<span className="text-xs text-zinc-300">16</span>
</div>
</div>
</div>
<div className="h-px bg-zinc-800 w-full"></div>

<div>
<div className="flex items-center justify-between text-xs font-medium text-zinc-500 mb-3">
                                    TYPOGRAPHY
                                </div>
<div className="flex flex-col gap-2">

<div className="bg-[#0a0a0a] border border-zinc-800 rounded-md p-2 flex items-center justify-between hover:border-zinc-700 cursor-pointer">
<span className="text-xs text-zinc-200">Inter Display</span>
<i className="w-3 h-3 text-zinc-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>

<div className="grid grid-cols-2 gap-2">
<div className="bg-[#0a0a0a] border border-zinc-800 rounded-md p-2 flex items-center justify-between hover:border-zinc-700 cursor-pointer">
<span className="text-xs text-zinc-200">Medium</span>
<i className="w-3 h-3 text-zinc-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="bg-[#0a0a0a] border border-zinc-800 rounded-md p-2 flex items-center justify-between focus-within:border-orange-500">
<span className="text-xs text-zinc-200">32</span>
<span className="text-xs text-zinc-600"></span>
</div>
</div>

<div className="grid grid-cols-2 gap-2">
<div className="bg-[#0a0a0a] border border-zinc-800 rounded-md p-2 flex items-center gap-2">
<i className="w-3 h-3 text-zinc-500" data-lucide="list" strokeWidth="1.5"></i>
<span className="text-xs text-zinc-200">Auto</span>
</div>
<div className="bg-[#0a0a0a] border border-zinc-800 rounded-md p-2 flex items-center gap-2">
<i className="w-3 h-3 text-zinc-500" data-lucide="arrow-left-right" strokeWidth="1.5"></i>
<span className="text-xs text-zinc-200">-2%</span>
</div>
</div>
</div>
</div>
<div className="h-px bg-zinc-800 w-full"></div>

<div>
<div className="flex items-center justify-between text-xs font-medium text-zinc-500 mb-3">
                                    FILL
                                    <i className="w-3 h-3" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-sm bg-white border border-zinc-700"></div>
<span className="text-xs font-mono text-zinc-200 uppercase">#FFFFFF</span>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-xs text-zinc-500">100%</span>
<i className="w-3 h-3 text-zinc-500" data-lucide="eye" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="h-px bg-zinc-800 w-full"></div>

<div>
<div className="flex items-center justify-between text-xs font-medium text-zinc-500 mb-3">
                                    EFFECTS
                                    <i className="w-3 h-3" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="bg-[#0a0a0a] border border-zinc-800 rounded-md p-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full border border-zinc-500 flex items-center justify-center"></div>
<span className="text-xs text-zinc-200">Drop Shadow</span>
</div>
<i className="w-3 h-3 text-zinc-500" data-lucide="chevron-up" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight text-zinc-100">Engineered for builders.</h2>
<p className="text-zinc-400 mt-2 text-base">Everything you need to build robust interfaces in minutes, not months.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-zinc-300" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">High-Fidelity Rendering</h3>
<p className="text-base text-zinc-400 max-w-md">Our engine ensures what you see in the canvas is exactly what renders in the DOM. No discrepancies, just perfect code.</p>
</div>

<div className="absolute right-0 bottom-0 p-6 opacity-30 group-hover:opacity-50 transition-opacity">
<div className="flex items-end gap-1 h-24">
<div className="w-3 bg-white/20 rounded-t-sm h-1/3"></div>
<div className="w-3 bg-white/20 rounded-t-sm h-1/2"></div>
<div className="w-3 bg-white/40 rounded-t-sm h-3/4"></div>
<div className="w-3 bg-white/20 rounded-t-sm h-2/3"></div>
<div className="w-3 bg-orange-500/60 rounded-t-sm h-full"></div>
<div className="w-3 bg-white/20 rounded-t-sm h-1/2"></div>
</div>
</div>
</div>

<div className="border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors rounded-2xl p-8 relative overflow-hidden">
<div className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-zinc-300" data-lucide="git-branch" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Version Control</h3>
<p className="text-base text-zinc-400">Branch, merge, and commit designs just like code. Full history built-in.</p>
</div>

<div className="border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors rounded-2xl p-8 relative overflow-hidden">
<div className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-zinc-300" data-lucide="boxes" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Component Library</h3>
<p className="text-base text-zinc-400">Sync with your React codebase. Drag and drop actual production components.</p>
</div>

<div className="md:col-span-2 border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-zinc-300" data-lucide="terminal-square" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Developer First API</h3>
<p className="text-base text-zinc-400 mb-4">Integrate deeply into your existing pipeline. Pull designs as raw JSON or compiled React components via CLI.</p>
<a className="text-sm text-zinc-200 hover:text-white flex items-center gap-1" href="#">View CLI Docs <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
<div className="flex-1 w-full bg-[#0d0d0d] border border-white/5 rounded-xl p-4 font-mono text-sm text-zinc-400 overflow-x-auto shadow-inner">
<div className="flex gap-2 mb-3">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<p><span className="text-orange-400">npx</span> fluxer pull --project <span className="text-green-400">home-page</span></p>
<br/>
<p className="text-zinc-500">✓ Fetched 14 components</p>
<p className="text-zinc-500">✓ Generated Tailwind classes</p>
<p className="text-zinc-500">✓ Updated src/components/</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="flex-1">
<h2 className="text-3xl font-medium tracking-tight text-zinc-100 mb-4">Export clean, semantic code.</h2>
<p className="text-zinc-400 text-base mb-8 leading-relaxed max-w-lg">Stop wrestling with spaghetti code generated by other tools. Fluxer outputs human-readable React and Tailwind that your engineering team will actually want to use.</p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-orange-500">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
                            Responsive by default
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-orange-500">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
                            Accessible markup
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-orange-500">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
                            Design tokens sync
                        </div>
</div>
</div>
<div className="flex-1 w-full">
<div className="rounded-2xl border border-zinc-800 bg-[#0c0c0e] shadow-2xl overflow-hidden ring-1 ring-white/5">
<div className="h-12 border-b border-zinc-800/80 bg-[#111113] flex items-center px-4 gap-2">
<div className="flex gap-1.5 mr-4">
<div className="w-2.5 h-2.5 rounded-full bg-rose-500/20 border border-rose-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
</div>
<div className="px-3 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-300">Hero.tsx</span>
</div>
</div>
<div className="p-6 font-mono text-sm leading-loose overflow-x-auto text-zinc-400">
<span className="text-purple-400">export default</span> <span className="text-blue-400">function</span> <span className="text-amber-200">Hero</span>() {<br/>
                              <span className="text-purple-400">return</span> (<br/>
                                <span className="text-zinc-500">&lt;</span><span className="text-blue-400">div</span> <span className="text-emerald-300">className</span>=<span className="text-orange-300">"flex flex-col gap-4 p-8"</span><span className="text-zinc-500">&gt;</span><br/>
                                  <span className="text-zinc-500">&lt;</span><span className="text-blue-400">h1</span> <span className="text-emerald-300">className</span>=<span className="text-orange-300">"text-4xl font-medium tracking-tight text-white"</span><span className="text-zinc-500">&gt;</span><br/>
                                    <span className="text-zinc-200">Design with the power of code</span><br/>
                                  <span className="text-zinc-500">&lt;/</span><span className="text-blue-400">h1</span><span className="text-zinc-500">&gt;</span><br/>
                                <span className="text-zinc-500">&lt;/</span><span className="text-blue-400">div</span><span className="text-zinc-500">&gt;</span><br/>
                              );<br/>
                            }
                        </div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight text-zinc-100">Loved by product teams.</h2>
<p className="text-zinc-400 mt-2 text-base">From solo founders to enterprise scale.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="border border-white/5 bg-zinc-900/20 rounded-2xl p-8 hover:bg-zinc-900/40 transition-colors">
<div className="flex gap-1 mb-6 text-orange-500">
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-8">"Fluxer completely changed how we ship. Designs are no longer just pictures, they are the actual foundation of our codebase. It saves us weeks of development time."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-300 font-medium tracking-tight">SK</div>
<div>
<div className="text-sm font-medium text-zinc-200 tracking-tight">Sarah Klein</div>
<div className="text-xs text-zinc-500">Frontend Lead</div>
</div>
</div>
</div>

<div className="border border-white/5 bg-zinc-900/20 rounded-2xl p-8 hover:bg-zinc-900/40 transition-colors">
<div className="flex gap-1 mb-6 text-orange-500">
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-8">"The quality of the generated Tailwind is unmatched. It feels like it was written by our own senior engineers. Zero technical debt from day one."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-300 font-medium tracking-tight">MR</div>
<div>
<div className="text-sm font-medium text-zinc-200 tracking-tight">Marcus Rodriguez</div>
<div className="text-xs text-zinc-500">CTO</div>
</div>
</div>
</div>

<div className="border border-white/5 bg-zinc-900/20 rounded-2xl p-8 hover:bg-zinc-900/40 transition-colors">
<div className="flex gap-1 mb-6 text-orange-500">
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-8">"Finally, a tool that speaks both design and code natively. The two-way sync between our React components and the canvas is pure magic."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-300 font-medium tracking-tight">AL</div>
<div>
<div className="text-sm font-medium text-zinc-200 tracking-tight">Anna Lee</div>
<div className="text-xs text-zinc-500">Design Systems</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32 mb-24 text-center">
<div className="border border-white/5 bg-[#0c0c0e] rounded-3xl p-12 md:p-20 relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0,transparent_50%)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to ship faster?</h2>
<p className="text-zinc-400 text-lg mb-10">Stop the handoff friction. Start designing with the power of production-ready code today.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto text-sm font-medium bg-white text-zinc-950 px-6 py-3 rounded-lg hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2">
                            Start Building Free
                            <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto text-sm font-medium border border-white/10 bg-white/[0.02] text-zinc-200 px-6 py-3 rounded-lg hover:bg-white/[0.05] transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-base" icon="solar:calendar-linear"></iconify-icon>
                            Book a Demo
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950 mt-auto">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
<div>
<a className="font-medium tracking-tight text-lg flex items-center gap-2 mb-4 text-zinc-200" href="#">
<i className="w-5 h-5" data-lucide="hexagon" strokeWidth="1.5"></i> Fluxer
                </a>
<p className="text-sm text-zinc-500 max-w-xs">Bridging the gap between design and engineering. Built for modern teams.</p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-3">
<span className="text-sm font-medium text-zinc-100 tracking-tight">Product</span>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Features</a>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Integrations</a>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Pricing</a>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-sm font-medium text-zinc-100 tracking-tight">Resources</span>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Documentation</a>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">API Reference</a>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Community</a>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Blog</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-sm font-medium text-zinc-100 tracking-tight">Company</span>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">About</a>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Careers</a>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Legal</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-sm text-zinc-500">© 2024 Fluxer Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-zinc-400">
<a className="hover:text-zinc-200 transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="hover:text-zinc-200 transition-colors" href="#"><i className="w-4 h-4" data-lucide="github" strokeWidth="1.5"></i></a>
</div>
</div>
</footer>


    </>
  );
}
