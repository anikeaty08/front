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
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
zinc: { 850: '#1f1f22', 900: '#18181b', 950: '#09090b' }
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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">

<div className="absolute inset-0 bg-grid-pattern"></div>

<div className="absolute w-[40vw] h-[40vw] bg-cyan-900/10 blur-[120px] rounded-full mix-blend-screen"></div>

<div className="absolute w-[60vw] h-[60vw] rounded-full border border-cyan-500/5 animate-orbit-1">
<div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_12px_#22d3ee] -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6] -translate-x-1/2 translate-y-1/2"></div>
</div>
<div className="absolute w-[80vw] h-[80vw] rounded-full border border-dashed border-emerald-500/5 animate-orbit-2 opacity-70">
<div className="absolute top-1/2 right-0 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_15px_#34d399] translate-x-1/2 -translate-y-1/2"></div>
</div>
<div className="absolute w-[100vw] h-[100vw] rounded-full border border-blue-500/5 animate-orbit-3 opacity-50">
<div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-cyan-300 rounded-full shadow-[0_0_10px_#67e8f9]"></div>
<div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-teal-400 rounded-full shadow-[0_0_12px_#2dd4bf]"></div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 lg:px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">

<div className="font-semibold text-sm tracking-[0.2em] text-zinc-100 uppercase glitch-auto cursor-default">
                    imagerender
                </div>

<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-zinc-100 drop-shadow-sm transition" href="#">Terminal</a>
<a className="hover:text-zinc-200 transition" href="#">Network</a>
<a className="hover:text-zinc-200 transition" href="#">Settings</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-cyan-400 transition text-zinc-400">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-emerald-500 border border-white/20 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.3)]"></div>
</div>
</div>
</nav>

<main className="flex-1 w-full max-w-7xl mx-auto px-4 lg:px-8 py-8 flex flex-col gap-6 relative z-10">

<header className="flex flex-col gap-2">
<h1 className="text-3xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-cyan-100 to-zinc-400 glitch-hover w-max cursor-default">Generate UI Elements</h1>
<p className="text-sm text-zinc-400 font-mono text-xs">Awaiting input stream. Upload visual data to compile components.</p>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 flex flex-col">
<div className="bg-zinc-900/20 backdrop-blur-md border border-white/5 rounded-xl p-1.5 h-[420px] flex flex-col shadow-2xl shadow-black/50 group/container hover:border-cyan-500/20 transition-colors duration-500">
<div className="flex-1 border border-dashed border-white/10 rounded-lg bg-black/40 group-hover/container:bg-cyan-950/10 group-hover/container:border-cyan-500/30 transition-all duration-500 flex flex-col items-center justify-center gap-4 relative overflow-hidden group cursor-pointer">

<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_2px_15px_rgba(34,211,238,0.4)] opacity-0 group-hover/container:opacity-100 animate-scanline z-0"></div>

<div className="relative z-10">
<div className="absolute inset-0 bg-cyan-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
<div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-cyan-300 group-hover:scale-105 group-hover:border-cyan-500/30 transition-all duration-500 shadow-xl relative z-10 backdrop-blur-md">
<iconify-icon icon="solar:data-send-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
<div className="text-center z-10">
<p className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Initialize visual upload</p>
<p className="text-xs text-zinc-500 mt-1 font-mono">.SVG, .PNG, .JPG // MAX_SIZE: 5MB</p>
</div>

<div className="absolute bottom-4 flex items-center gap-1.5 text-xs text-cyan-500/70 font-mono">
<kbd className="px-1.5 py-0.5 rounded bg-cyan-950/30 border border-cyan-500/20 backdrop-blur-md">⌘</kbd>
<kbd className="px-1.5 py-0.5 rounded bg-cyan-950/30 border border-cyan-500/20 backdrop-blur-md">U</kbd>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-4">
<div className="bg-zinc-900/20 backdrop-blur-md border border-white/5 rounded-xl p-5 flex flex-col gap-5 h-full shadow-2xl shadow-black/50 hover:border-white/10 transition-colors duration-500">

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Compute Node</label>
<div className="flex items-center gap-1 bg-black/60 p-0.5 rounded-md border border-white/5 text-xs font-mono backdrop-blur-sm">
<button className="px-2.5 py-1 rounded bg-zinc-800/80 text-cyan-300 shadow-sm border border-cyan-500/20">Local</button>
<button className="px-2.5 py-1 rounded text-zinc-500 hover:text-zinc-300 transition">Cloud</button>
</div>
</div>
<div className="flex flex-col gap-2">

<label className="flex items-center gap-3 p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/30 cursor-pointer shadow-[inset_0_0_15px_rgba(6,182,212,0.05)]">
<div className="w-4 h-4 rounded-full border border-cyan-400 flex items-center justify-center bg-cyan-500/10">
<div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-100 flex items-center gap-2">
                                        Local Neural Net 
                                    </div>
<div className="text-xs text-cyan-200/50 mt-0.5 font-mono">llava:13b_v2</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Online</span>
<span className="text-[10px] text-zinc-600 font-mono">14ms ping</span>
</div>
</label>

<label className="flex items-center gap-3 p-3 rounded-lg bg-black/40 hover:bg-white/5 border border-white/5 hover:border-white/10 cursor-pointer transition">
<div className="w-4 h-4 rounded-full border border-zinc-700 bg-zinc-900"></div>
<div className="flex-1">
<div className="text-sm text-zinc-300">Cloud API</div>
<div className="text-xs text-zinc-600 mt-0.5 font-mono">gpt-4o-vision</div>
</div>
</label>
</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-1"></div>

<div className="flex flex-col gap-3 flex-1">
<label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Output Target</label>
<div className="grid grid-cols-2 gap-2">
<button className="flex items-center gap-2 p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-100 text-sm font-medium justify-center transition shadow-inner">
<iconify-icon className="text-cyan-400" icon="solar:code-linear"></iconify-icon> React
                            </button>
<button className="flex items-center gap-2 p-2 rounded-lg bg-black/40 hover:bg-white/5 border border-white/5 hover:border-white/10 text-zinc-400 hover:text-zinc-200 text-sm justify-center transition">
                                Vue
                            </button>
<button className="flex items-center gap-2 p-2 rounded-lg bg-black/40 hover:bg-white/5 border border-white/5 hover:border-white/10 text-zinc-400 hover:text-zinc-200 text-sm justify-center transition">
                                Svelte
                            </button>
<button className="flex items-center gap-2 p-2 rounded-lg bg-black/40 hover:bg-white/5 border border-white/5 hover:border-white/10 text-zinc-400 hover:text-zinc-200 text-sm justify-center transition">
                                HTML
                            </button>
</div>
</div>

<button className="w-full relative group mt-auto">

<div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
<div className="relative flex items-center justify-center gap-2 bg-zinc-900 border border-cyan-500/30 text-white text-sm font-mono tracking-wide py-3 rounded-lg group-hover:bg-zinc-800 transition shadow-xl overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700"></div>
<iconify-icon className="text-cyan-400 text-base" icon="solar:cpu-bolt-linear"></iconify-icon>
                            EXECUTE_COMPILE
                        </div>
</button>
</div>
</div>
</div>

<div className="flex flex-col bg-zinc-900/20 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden mt-4 shadow-2xl shadow-black/50">

<div className="flex items-center border-b border-white/5 px-2 bg-black/40 backdrop-blur-md">
<button className="px-5 py-3 text-xs font-mono text-zinc-100 border-b-2 border-cyan-500 flex items-center gap-2 bg-white/[0.02]">
<iconify-icon className="text-cyan-400" icon="solar:scanner-linear"></iconify-icon> [ANALYSIS]
                </button>
<button className="px-5 py-3 text-xs font-mono text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.02] transition flex items-center gap-2">
<iconify-icon icon="solar:document-text-linear"></iconify-icon> [SOURCE_CODE]
                </button>
<button className="px-5 py-3 text-xs font-mono text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.02] transition flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon> [LIVE_PREVIEW]
                </button>
<div className="flex-1"></div>
<div className="flex items-center gap-2 px-3 bg-zinc-900/50 py-1.5 rounded-md border border-white/5 mr-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse"></span>
<span className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">System_Ready</span>
</div>
</div>

<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative overflow-hidden bg-black/20">

<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

<div className="md:col-span-2 flex flex-col gap-4 relative z-10">
<div className="flex items-center justify-between">
<h3 className="text-xs font-mono text-zinc-300 flex items-center gap-2 tracking-wide uppercase">
<iconify-icon className="text-cyan-400" icon="solar:layers-linear"></iconify-icon> Node_Tree
                        </h3>
<span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 shadow-sm">12_NODES_FOUND</span>
</div>
<div className="bg-black/60 border border-white/5 rounded-lg p-5 font-mono text-xs text-zinc-400 overflow-x-auto shadow-inner">
<div className="flex flex-col gap-2">

<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-cyan-300 bg-cyan-500/5 p-1.5 rounded border border-cyan-500/10">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
<span className="font-medium">Container_Main</span>
<span className="text-zinc-500 ml-auto text-[10px]">95%_CONF</span>
</div>
<div className="pl-6 border-l border-white/10 ml-2.5 py-2 flex flex-col gap-2 text-zinc-500">
<div>dim: <span className="text-emerald-400/90 bg-emerald-500/10 px-1 py-0.5 rounded">x:10, y:20, w:380, h:400</span></div>
<div>props: <span className="text-zinc-300 bg-white/5 px-1 py-0.5 rounded border border-white/5">{ type: "card", theme: "dark" }</span></div>

<div className="mt-2 flex items-center gap-2 text-blue-300 hover:bg-white/5 p-1.5 rounded transition-colors w-max border border-transparent hover:border-white/5">
<iconify-icon className="text-zinc-600" icon="solar:minus-linear"></iconify-icon>
<span className="font-medium">Image_Avatar</span>
<span className="text-zinc-500 ml-4 text-[10px]">98%_CONF</span>
</div>
<div className="pl-6 py-1 flex flex-col gap-1">
<div>radius: <span className="text-zinc-300">"50%"</span></div>
</div>

<div className="mt-1 flex items-center gap-2 text-indigo-300 hover:bg-white/5 p-1.5 rounded transition-colors w-max border border-transparent hover:border-white/5">
<iconify-icon className="text-zinc-600" icon="solar:minus-linear"></iconify-icon>
<span className="font-medium">Btn_Primary</span>
<span className="text-zinc-500 ml-4 text-[10px]">92%_CONF</span>
</div>
<div className="pl-6 py-1 flex flex-col gap-1">
<div>label: <span className="text-zinc-300">"Edit Profile"</span></div>
<div>state: <span className="text-emerald-400">"active"</span></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-8 relative z-10">

<div className="flex flex-col gap-4">
<h3 className="text-xs font-mono text-zinc-300 flex items-center gap-2 tracking-wide uppercase">
<iconify-icon className="text-blue-400" icon="solar:palette-linear"></iconify-icon> Extracted_Hues
                        </h3>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-3 bg-black/40 p-2 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
<div className="w-6 h-6 rounded bg-[#06B6D4] shadow-[inset_0_0_10px_rgba(0,0,0,0.2),0_0_10px_rgba(6,182,212,0.3)]"></div>
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500 font-mono">PRI</span>
<span className="text-xs text-zinc-300 font-mono">#06B6D4</span>
</div>
</div>
<div className="flex items-center gap-3 bg-black/40 p-2 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
<div className="w-6 h-6 rounded bg-[#050505] border border-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]"></div>
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500 font-mono">BG</span>
<span className="text-xs text-zinc-300 font-mono">#050505</span>
</div>
</div>
<div className="flex items-center gap-3 bg-black/40 p-2 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
<div className="w-6 h-6 rounded bg-[#10B981] shadow-[inset_0_0_10px_rgba(0,0,0,0.2)]"></div>
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500 font-mono">ACC</span>
<span className="text-xs text-zinc-300 font-mono">#10B981</span>
</div>
</div>
<div className="flex items-center gap-3 bg-black/40 p-2 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
<div className="w-6 h-6 rounded bg-[#FFFFFF] shadow-[inset_0_0_10px_rgba(0,0,0,0.1),0_0_10px_rgba(255,255,255,0.1)]"></div>
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500 font-mono">TXT</span>
<span className="text-xs text-zinc-300 font-mono">#FFFFFF</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<h3 className="text-xs font-mono text-zinc-300 flex items-center gap-2 tracking-wide uppercase">
<iconify-icon className="text-emerald-400" icon="solar:ruler-linear"></iconify-icon> Grid_Metrics
                        </h3>
<div className="bg-black/60 border border-white/5 rounded-lg p-4 flex flex-col gap-3 text-xs shadow-inner font-mono">
<div className="flex justify-between items-center pb-2 border-b border-white/5">
<span className="text-zinc-500">model</span>
<span className="text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">flex_col</span>
</div>
<div className="flex justify-between items-center pb-2 border-b border-white/5">
<span className="text-zinc-500">gap_base</span>
<span className="text-zinc-300">16px</span>
</div>
<div className="flex justify-between items-center pb-2 border-b border-white/5">
<span className="text-zinc-500">padding</span>
<span className="text-zinc-300">24px</span>
</div>
<div className="flex justify-between items-center">
<span className="text-zinc-500">radius</span>
<span className="text-zinc-300">8px</span>
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
