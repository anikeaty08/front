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
      
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#050505',
surface: '#0A0A0A',
surface2: '#121212',
border: '#222222',
accent: '#E1E1E1',
muted: '#888888'
}
}
}
}



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
      

<aside className="w-64 flex flex-col border-r border-white/5 bg-black/50 hidden md:flex z-20">
<div className="h-14 flex items-center px-4 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center border border-white/10">
<span className="text-[10px] font-medium tracking-tight text-white">AI</span>
</div>
<span className="text-sm font-medium tracking-tight text-white/90">Nexus Workflow</span>
</div>
</div>
<div className="p-3 space-y-6 flex-1 overflow-y-auto">

<div>
<div className="px-2 mb-2 flex items-center justify-between group">
<span className="text-xs font-medium text-white/40 uppercase tracking-wider">Pipelines</span>
<iconify-icon className="text-white/20 hover:text-white/60 cursor-pointer transition-colors" icon="solar:add-circle-linear" width="14"></iconify-icon>
</div>
<div className="space-y-0.5">
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/5 text-white/90 text-sm group transition-all" href="#">
<iconify-icon className="text-white/70 group-hover:text-white" icon="solar:gallery-linear" width="16"></iconify-icon>
<span className="flex-1 truncate">Image Generation</span>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
</a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 text-white/50 hover:text-white/80 text-sm transition-all" href="#">
<iconify-icon className="text-white/40" icon="solar:document-text-linear" width="16"></iconify-icon>
<span className="flex-1 truncate">Copywriting Assistant</span>
</a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 text-white/50 hover:text-white/80 text-sm transition-all" href="#">
<iconify-icon className="text-white/40" icon="solar:code-circle-linear" width="16"></iconify-icon>
<span className="flex-1 truncate">Code Refactor</span>
</a>
</div>
</div>

<div>
<div className="px-2 mb-2 flex items-center justify-between">
<span className="text-xs font-medium text-white/40 uppercase tracking-wider">Resources</span>
</div>
<div className="space-y-0.5">
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 text-white/50 hover:text-white/80 text-sm transition-all" href="#">
<iconify-icon className="text-white/40" icon="solar:database-linear" width="16"></iconify-icon>
<span className="flex-1 truncate">Models</span>
</a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 text-white/50 hover:text-white/80 text-sm transition-all" href="#">
<iconify-icon className="text-white/40" icon="solar:settings-linear" width="16"></iconify-icon>
<span className="flex-1 truncate">API Keys</span>
</a>
</div>
</div>
</div>
<div className="p-3 border-t border-white/5">
<div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 cursor-pointer transition-colors">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-white/10"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white/90">Alex Designer</span>
<span className="text-[10px] text-white/40">Pro Plan</span>
</div>
<iconify-icon className="ml-auto text-white/30" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative bg-background">

<header className="h-14 flex items-center justify-between px-6 border-b border-white/5 z-10 bg-background/80 backdrop-blur-md">
<div className="flex items-center gap-4">
<nav className="flex items-center gap-2 text-sm text-white/40">
<span className="hover:text-white/80 cursor-pointer transition-colors">Workflows</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-white/90 font-medium">Image Generation</span>
</nav>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Active</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center px-2 py-1 rounded bg-white/5 border border-white/5 gap-2">
<span className="text-[10px] font-medium text-white/40 uppercase tracking-wider">Model</span>
<span className="text-xs text-white/90 font-medium">Flux Pro 1.0</span>
<iconify-icon className="text-white/40" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/5 text-white/60 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto">
<div className="max-w-5xl mx-auto p-6 md:p-10 space-y-8">

<div className="flex items-start justify-between">
<div className="">
<h1 className="text-2xl font-medium text-white tracking-tight mb-2">Image Generation Prompt</h1>
<p className="leading-relaxed text-sm text-white/50 max-w-xl">
                            Configure parameters to generate high-fidelity UI assets for marketing and production environments.
                        </p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-all flex items-center gap-2">
<iconify-icon icon="solar:history-linear" width="14"></iconify-icon>
                            History
                        </button>
<button className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-all flex items-center gap-2">
<iconify-icon icon="solar:share-linear" width="14"></iconify-icon>
                            Share
                        </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 space-y-6">

<div className="group focus-within:ring-1 focus-within:ring-white/20 transition-all border-white/10 border rounded-lg pt-1 pr-1 pb-1 pl-1 relative shadow-sm">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/5">
<label className="text-xs font-medium text-white/60 flex items-center gap-1.5">
<iconify-icon className="text-indigo-400" icon="solar:magic-stick-3-linear"></iconify-icon>
                                    Prompt Configuration
                                </label>
<span className="text-[10px] text-white/30 font-mono">245 chars</span>
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<label className="block text-[10px] uppercase tracking-wider text-white/30 font-semibold mb-2">Purpose</label>
<div className="mb-4">
<input className="w-full bg-transparent text-sm text-white/90 placeholder-white/20 outline-none border-b border-white/5 pb-2 focus:border-white/20 transition-colors font-light" type="text" value="Generate UI/website/marketing images"/>
</div>
<label className="block text-[10px] uppercase tracking-wider text-white/30 font-semibold mb-2 flex items-center justify-between">
                                    Prompt Text
                                    <button className="text-white/40 hover:text-white transition-colors">
<iconify-icon className="" height="12" icon="solar:copy-linear" style={{color: 'rgb(255, 255, 255)'}} width="12"></iconify-icon>
</button>
</label>
<textarea className="w-full h-32 bg-transparent text-sm leading-relaxed text-white/80 placeholder-white/20 resize-none outline-none font-light" spellcheck="false">Create a 4K high-fidelity UI image for my SaaS dashboard. Include top navigation, dynamic charts, user profile card, and CTA buttons. Style: modern, gradient backgrounds, minimalistic icons, realistic shadows. Provide as image output for web and mobile.</textarea>
</div>

<div className="flex items-center justify-between px-3 py-2 bg-white/[0.02] rounded-b border-t border-white/5">
<div className="flex items-center gap-2">
<button className="p-1.5 rounded hover:bg-white/5 text-white/40 hover:text-white/80 transition-colors" title="Add Negative Prompt">
<iconify-icon icon="solar:minus-circle-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded hover:bg-white/5 text-white/40 hover:text-white/80 transition-colors" title="Variables">
<iconify-icon icon="solar:brackets-check-linear" width="16"></iconify-icon>
</button>
</div>
<button className="group flex gap-2 hover:bg-white/90 transition-all cursor-pointer text-xs font-medium text-black bg-white rounded-md pt-1.5 pr-4 pb-1.5 pl-4 shadow-[0_0_15px_rgba(255,255,255,0.1)] gap-x-2 gap-y-2 items-center" onclick="window.location.href='/AI SaaS Prompts &amp; Workflow (Example)  1. Image Generation Prompt  Purpose: Generate UI/website/marketing images Prompt: “Create a 4K high-fidelity UI image for my SaaS dashboard. Include top navigation, dynamic charts, user profile card, and CTA buttons. Style: modern, gradient backgrounds, minimalistic icons, realistic shadows. Provide as image output for web and mobile.”  Expected Result: Picture of the SaaS dashboard, ready for website embedding.'" role="button">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:play-linear" width="14"></iconify-icon>
                                    Generate
                                </button>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-surface p-5">
<h3 className="text-xs font-medium text-white/60 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:tuning-2-linear"></iconify-icon>
                                Parameters
                            </h3>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] text-white/40 mb-1.5">Aspect Ratio</label>
<select className="w-full bg-white/5 border border-white/10 rounded px-2 py-1.5 text-xs text-white/80 outline-none focus:border-white/20 appearance-none">
<option>16:9 (Landscape)</option>
<option>1:1 (Square)</option>
<option>9:16 (Portrait)</option>
</select>
</div>
<div>
<label className="block text-[10px] text-white/40 mb-1.5">Quality / Steps</label>
<div className="flex items-center gap-3 h-[30px]">
<span className="text-xs text-white/60 font-mono">50</span>
<div className="flex-1 h-1 bg-white/10 rounded-full relative">
<div className="absolute left-0 top-0 bottom-0 w-1/2 bg-white/40 rounded-full"></div>
<div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col h-full">
<div className="flex items-center justify-between mb-2">
<h3 className="text-xs font-medium text-white/60">Expected Result</h3>
<div className="flex gap-2">
<span className="text-[10px] px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-white/40">4K</span>
<span className="text-[10px] px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-white/40">PNG</span>
</div>
</div>

<div className="flex-1 rounded-lg border border-white/10 bg-surface overflow-hidden relative group">

<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute inset-4 z-10 flex flex-col">

<div className="w-full h-full bg-[#0F0F0F] rounded-lg border border-white/10 shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">

<div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-3 gap-2">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500/20"></div>
</div>
<div className="ml-4 w-32 h-3 bg-white/5 rounded-full"></div>
</div>

<div className="flex-1 p-4 flex gap-4">

<div className="w-12 h-full hidden sm:flex flex-col gap-3">
<div className="w-8 h-8 rounded bg-white/10"></div>
<div className="w-8 h-8 rounded bg-white/5"></div>
<div className="w-8 h-8 rounded bg-white/5"></div>
</div>

<div className="flex-1 flex flex-col gap-4">
<div className="h-24 w-full rounded bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/5 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-indigo-500/20 to-transparent"></div>
</div>
<div className="flex gap-4 h-32">
<div className="flex-1 rounded bg-white/5 border border-white/5 p-3">
<div className="w-16 h-3 bg-white/10 rounded mb-2"></div>
<div className="w-24 h-6 bg-white/20 rounded"></div>
</div>
<div className="flex-1 rounded bg-white/5 border border-white/5 p-3">
<div className="w-16 h-3 bg-white/10 rounded mb-2"></div>
<div className="w-24 h-6 bg-white/20 rounded"></div>
</div>
</div>

<div className="flex-1 rounded bg-white/5 border border-white/5 flex items-end justify-between px-4 pb-4 gap-2">
<div className="w-full bg-white/10 rounded-t h-[40%]"></div>
<div className="w-full bg-white/20 rounded-t h-[70%]"></div>
<div className="w-full bg-white/10 rounded-t h-[50%]"></div>
<div className="w-full bg-indigo-500/40 rounded-t h-[85%] shadow-[0_0_15px_rgba(99,102,241,0.3)]"></div>
<div className="w-full bg-white/10 rounded-t h-[60%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 rounded-full bg-black/80 backdrop-blur border border-white/20 text-white hover:bg-white hover:text-black transition-colors">
<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon>
</button>
<button className="p-2 rounded-full bg-black/80 backdrop-blur border border-white/20 text-white hover:bg-white hover:text-black transition-colors">
<iconify-icon icon="solar:download-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="mt-3 flex items-start gap-2">
<iconify-icon className="text-white/30 mt-0.5" icon="solar:info-circle-linear" width="14"></iconify-icon>
<p className="text-[10px] text-white/40 leading-normal">
                                Result is ready for website embedding. Realistic shadows and gradient backgrounds applied based on prompt specifications.
                            </p>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
