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
      

<aside className="w-80 flex-shrink-0 border-r border-neutral-800/80 bg-[#0a0a0a] flex flex-col h-full z-20 shadow-[4px_0_24px_rgba(0,0,0,0.4)]">

<div className="h-14 flex items-center justify-between px-4 border-b border-neutral-800/80">
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 rounded-md bg-white text-black flex items-center justify-center font-medium tracking-tighter text-xs">LS</div>
<span className="font-medium tracking-tight text-neutral-200">LandingSite</span>
</div>
<button className="text-neutral-500 hover:text-white transition-colors" title="New Project">
<iconify-icon icon="solar:add-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">

<div className="flex flex-col gap-2.5">
<label className="text-xs font-medium text-neutral-200 flex items-center gap-1.5">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon> 
                    Describe your website
                </label>
<textarea className="w-full h-28 bg-neutral-900/50 border border-neutral-800 rounded-lg p-3 text-sm focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 resize-none placeholder-neutral-600 transition-all text-neutral-200 leading-relaxed" placeholder="A modern portfolio for a freelance UI/UX designer with a dark theme and glowing accents..."></textarea>

<div className="flex flex-wrap gap-1.5 mt-1">
<span className="text-xs text-neutral-600 font-medium mr-1 flex items-center">Examples:</span>
<button className="text-xs bg-neutral-900/40 border border-neutral-800 hover:border-neutral-600 hover:text-neutral-200 rounded px-2 py-1 text-neutral-400 transition-colors">SaaS Dashboard</button>
<button className="text-xs bg-neutral-900/40 border border-neutral-800 hover:border-neutral-600 hover:text-neutral-200 rounded px-2 py-1 text-neutral-400 transition-colors">Digital Agency</button>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-neutral-400">Tone</label>
<div className="relative">
<select className="w-full appearance-none bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 rounded-lg p-2.5 pl-3 pr-8 text-sm focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all text-neutral-300">
<option>Professional</option>
<option>Modern &amp; Minimal</option>
<option>Playful &amp; Creative</option>
<option>Corporate</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-neutral-400">Color Theme</label>
<div className="relative">
<select className="w-full appearance-none bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 rounded-lg p-2.5 pl-3 pr-8 text-sm focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all text-neutral-300">
<option>Dark Mode</option>
<option>Light Mode</option>
<option>High Contrast</option>
<option>Monochrome</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="flex items-center justify-between bg-neutral-900/30 p-3 rounded-lg border border-neutral-800/80">
<div className="flex flex-col gap-0.5">
<span className="text-xs font-medium text-neutral-200 flex items-center gap-1.5">
<iconify-icon className="text-white" icon="solar:cpu-bolt-linear" strokeWidth="1.5"></iconify-icon> 
                        Max Mode
                    </span>
<span className="text-xs text-neutral-500">Enhanced system prompt &amp; detail</span>
</div>
<div className="relative inline-block w-8 h-4 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-transparent appearance-none cursor-pointer z-10 transition-all duration-200" id="max-mode-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full cursor-pointer" htmlFor="max-mode-toggle"></label>
</div>
</div>

<button className="w-full bg-white text-black font-medium text-sm py-2.5 rounded-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] mt-1">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> 
                Generate Website
            </button>
<div className="h-px w-full bg-neutral-800/60 my-1"></div>

<div className="flex flex-col gap-2.5">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-neutral-200 flex items-center gap-1.5">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5"></iconify-icon> 
                        Edit Project
                    </label>
<button className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors bg-neutral-900/50 px-2 py-1 rounded border border-neutral-800 hover:border-neutral-600">
<iconify-icon icon="solar:undo-left-linear" strokeWidth="1.5"></iconify-icon> Undo
                    </button>
</div>
<textarea className="w-full h-20 bg-neutral-900/50 border border-neutral-800 rounded-lg p-3 text-sm focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 resize-none placeholder-neutral-600 transition-all text-neutral-200" placeholder="e.g. Change the hero background to dark blue and make title larger..."></textarea>
<button className="w-full bg-neutral-900 text-neutral-200 font-medium text-sm py-2 rounded-lg hover:bg-neutral-800 hover:text-white transition-all border border-neutral-800 hover:border-neutral-700 flex items-center justify-center gap-2">
<iconify-icon icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon> 
                    Apply Edits
                </button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-[#0a0a0a] relative z-10 min-w-0">

<header className="h-14 flex items-center justify-between px-6 border-b border-neutral-800/80 bg-[#0a0a0a]/80 backdrop-blur-md z-20">

<div className="flex items-center gap-6 h-full">
<button className="h-full flex items-center gap-2 text-sm font-medium text-white border-b-2 border-white px-1">
<iconify-icon icon="solar:monitor-smartphone-linear" strokeWidth="1.5"></iconify-icon> Preview
                </button>
<button className="h-full flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-300 border-b-2 border-transparent hover:border-neutral-700 transition-colors px-1">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon> HTML
                </button>
<button className="h-full flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-300 border-b-2 border-transparent hover:border-neutral-700 transition-colors px-1">
<iconify-icon icon="solar:programming-linear" strokeWidth="1.5"></iconify-icon> CSS
                </button>
<button className="h-full flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-300 border-b-2 border-transparent hover:border-neutral-700 transition-colors px-1">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon> JS
                </button>
</div>

<div className="flex items-center gap-3">

<div className="hidden md:flex items-center bg-neutral-900 border border-neutral-800 rounded-md p-0.5">
<button className="px-2.5 py-1 text-white bg-neutral-800 rounded shadow-sm text-xs font-medium flex items-center gap-1.5">
<iconify-icon icon="solar:monitor-linear" strokeWidth="1.5"></iconify-icon> Desktop
                    </button>
<button className="px-2.5 py-1 text-neutral-500 hover:text-white rounded text-xs font-medium flex items-center gap-1.5 transition-colors">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon> Mobile
                    </button>
</div>
<div className="w-px h-4 bg-neutral-800 mx-1 hidden md:block"></div>
<button className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800 px-3 py-1.5 rounded-md" title="Refresh Preview">
<iconify-icon icon="solar:refresh-linear" strokeWidth="1.5"></iconify-icon> Refresh
                </button>
<button className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800 px-3 py-1.5 rounded-md">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon> Copy
                </button>
<button className="text-black bg-white hover:bg-neutral-200 transition-colors flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md shadow-sm">
<iconify-icon icon="solar:download-square-linear" strokeWidth="1.5"></iconify-icon> Download
                </button>
</div>
</header>

<div className="flex-1 p-4 md:p-8 overflow-hidden flex justify-center items-start bg-neutral-950 relative">

<div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

<div className="w-full max-w-6xl h-full flex flex-col bg-black border border-neutral-800/80 rounded-xl shadow-2xl overflow-hidden relative z-10">

<div className="h-10 bg-neutral-900 border-b border-neutral-800/80 flex items-center px-4 gap-4 select-none shrink-0">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-neutral-700 hover:bg-red-500 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700 hover:bg-yellow-500 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700 hover:bg-green-500 transition-colors"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="bg-neutral-950 border border-neutral-800 rounded text-xs text-neutral-500 font-medium px-16 md:px-32 py-1 flex items-center gap-2 truncate">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon> localhost:3000
                        </div>
</div>
<div className="w-12"></div> 
</div>

<div className="flex-1 overflow-y-auto bg-neutral-950 relative">

<div className="min-h-full flex flex-col font-sans">

<nav className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/5 backdrop-blur-xl sticky top-0 z-50">
<div className="flex items-center gap-2 text-white font-medium tracking-tight">
<div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.4)]">
<svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
                                Nexus AI
                            </div>
<div className="hidden md:flex gap-8 text-sm font-normal text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-normal text-neutral-300 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">Sign up</a>
</div>
</nav>

<div className="flex-1 flex flex-col items-center justify-center px-4 py-24 md:py-32 text-center relative overflow-hidden hero-glow">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-md">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
                                GPT-OSS 2T Integrated
                            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white max-w-4xl leading-tight md:leading-none mb-6">
                                The new standard for <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">frontend delivery.</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mb-10 font-normal leading-relaxed">
                                Generate complete landing pages, export clean production code, and deploy in seconds. Designed for modern engineering teams.
                            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="h-12 px-6 rounded-full bg-white text-black font-medium text-sm flex items-center gap-2 hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02]">
                                    Start Building Free
                                </button>
<button className="h-12 px-6 rounded-full bg-transparent text-white font-medium text-sm flex items-center gap-2 hover:bg-white/5 transition-colors border border-white/10">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon> View Documentation
                                </button>
</div>

<div className="mt-20 w-full max-w-5xl rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl p-2 shadow-2xl relative">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-50 rounded-xl"></div>
<div className="rounded-lg w-full h-48 md:h-96 bg-neutral-900 border border-white/5 flex items-center justify-center flex-col gap-4 text-neutral-600">
<iconify-icon icon="solar:widget-linear" strokeWidth="1" width="48"></iconify-icon>
<span className="text-sm font-medium">Dashboard Interface Visualization</span>
</div>
</div>
</div>

<div className="py-24 border-t border-white/5 bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto px-6 md:px-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:code-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Clean Code Export</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-normal">Generates semantic HTML, modern CSS, and vanilla JS. Built perfectly for deployment without bloated dependencies.</p>
</div>
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Real-time Streaming</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-normal">Powered by Server-Sent Events (SSE) logic, delivering complete landing pages progressively in real-time.</p>
</div>
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Iterative Editing</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-normal">Refine your project using simple conversational prompts. Undo changes instantly through revision history.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
