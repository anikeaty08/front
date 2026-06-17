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
      

<nav className="h-8 w-full glass-bar flex items-center justify-between px-4 text-white z-50 fixed top-0 left-0 shadow-sm text-xs font-normal tracking-wide">

<div className="flex items-center gap-4">
<iconify-icon className="hover:text-zinc-200 cursor-default" icon="solar:apple-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-medium tracking-tight cursor-default">Subhan Masoodi</span>
<div className="hidden sm:flex items-center gap-4 text-white/80">
<span className="hover:text-white cursor-default transition-colors">File</span>
<span className="hover:text-white cursor-default transition-colors">Edit</span>
<span className="hover:text-white cursor-default transition-colors">View</span>
<span className="hover:text-white cursor-default transition-colors">Go</span>
<span className="hover:text-white cursor-default transition-colors">Window</span>
<span className="hover:text-white cursor-default transition-colors">Help</span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="flex items-center gap-3 opacity-90">
<iconify-icon icon="solar:battery-charge-linear" strokeWidth="1.5" width="18"></iconify-icon>
<iconify-icon icon="solar:wi-fi-router-linear" strokeWidth="1.5" width="18"></iconify-icon>
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:tuning-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-2 cursor-default opacity-90">
<span>Tue Oct 24</span>
<span>9:41 AM</span>
</div>
</div>
</nav>

<main className="w-full h-full pt-8 px-4 relative z-0 flex">

<div className="flex flex-col items-end gap-6 absolute right-4 top-12 z-0">

<div className="w-20 flex flex-col items-center gap-1 group cursor-pointer p-1">
<div className="p-2 transition-colors rounded-lg group-active:bg-white/10">
<div className="w-14 h-14 bg-gradient-to-br from-zinc-200 to-zinc-400 rounded-lg shadow-xl border border-white/20 flex items-center justify-center text-zinc-600">
<iconify-icon icon="solar:ssd-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
<span className="text-white text-xs font-medium tracking-tight drop-shadow-md text-center px-1.5 py-0.5 rounded group-active:bg-blue-600 group-active:text-white">Macintosh HD</span>
</div>

<div className="w-20 flex flex-col items-center gap-1 group cursor-pointer p-1">
<div className="p-2 transition-colors rounded-lg group-active:bg-white/10">
<div className="w-12 h-14 bg-white rounded shadow-xl relative flex flex-col items-center justify-center overflow-hidden">
<div className="absolute top-0 right-0 w-4 h-4 bg-zinc-200" style={{clipPath: 'polygon(0 0, 100% 100%, 0 100%)'}}></div>
<div className="absolute top-0 right-0 w-4 h-4 bg-zinc-100" style={{clipPath: 'polygon(0 0, 100% 0, 0 100%)', boxShadow: '-1px 1px 2px rgba(0,0,0,0.1)'}}></div>
<span className="text-[8px] font-bold text-red-500 absolute top-2 left-2 tracking-wider">PDF</span>
<div className="flex flex-col gap-1 mt-2 items-center opacity-30">
<div className="w-6 h-0.5 bg-zinc-800"></div>
<div className="w-6 h-0.5 bg-zinc-800"></div>
<div className="w-4 h-0.5 bg-zinc-800"></div>
</div>
</div>
</div>
<span className="text-white text-xs font-medium tracking-tight drop-shadow-md text-center px-1.5 py-0.5 rounded group-active:bg-blue-600 group-active:text-white">Resume.pdf</span>
</div>
</div>

<div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[92%] md:w-[850px] h-[70%] md:h-[600px] glass-panel rounded-xl overflow-hidden flex flex-col z-10 transition-all duration-500 animate-[fadeIn_0.5s_ease-out]">

<div className="h-12 bg-zinc-100/50 border-b border-zinc-200/50 flex items-center px-4 justify-between shrink-0 backdrop-blur-md">
<div className="flex items-center gap-4">

<div className="flex items-center gap-2 group">
<div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e33e32]/50 flex items-center justify-center transition-transform hover:scale-105">
<iconify-icon className="opacity-0 group-hover:opacity-100 text-black/40 text-[8px]" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#e09e3e]/50 flex items-center justify-center transition-transform hover:scale-105">
<iconify-icon className="opacity-0 group-hover:opacity-100 text-black/40 text-[8px]" icon="solar:minimize-square-linear"></iconify-icon>
</div>
<div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1c9c2b]/50 flex items-center justify-center transition-transform hover:scale-105">
<iconify-icon className="opacity-0 group-hover:opacity-100 text-black/40 text-[8px]" icon="solar:maximize-square-3-linear"></iconify-icon>
</div>
</div>

<div className="flex items-center gap-3 text-zinc-500 ml-2">
<iconify-icon className="hover:text-zinc-800 transition-colors" icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
<iconify-icon className="opacity-40" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-700 tracking-tight ml-2">Subhan Masoodi</span>
</div>

<div className="flex items-center gap-4 text-zinc-500">
<iconify-icon className="hover:text-zinc-800 transition-colors" icon="solar:list-linear" width="18"></iconify-icon>
<iconify-icon className="hover:text-zinc-800 transition-colors" icon="solar:gallery-wide-linear" width="18"></iconify-icon>
<iconify-icon className="hover:text-zinc-800 transition-colors" icon="solar:upload-linear" width="18"></iconify-icon>
<div className="w-40 h-7 bg-zinc-200/50 rounded flex items-center px-2.5 gap-2 border border-black/5 focus-within:ring-2 focus-within:ring-black/5 transition-all">
<iconify-icon className="text-zinc-400" icon="solar:magnifer-linear" width="14"></iconify-icon>
<span className="text-xs text-zinc-400">Search</span>
</div>
</div>
</div>

<div className="flex flex-1 overflow-hidden bg-white/60">

<div className="w-52 bg-zinc-50/40 backdrop-blur-sm border-r border-zinc-200/40 py-4 flex flex-col gap-6 hidden sm:flex">

<div>
<div className="text-xs font-medium text-zinc-400 mb-1 px-4 tracking-tight">Favorites</div>
<div className="flex flex-col gap-0.5 px-2">
<div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-black/5 text-zinc-800 cursor-default">
<iconify-icon className="text-blue-500" icon="solar:user-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-normal">About Me</span>
</div>
<div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md hover:bg-black/5 text-zinc-600 transition-colors cursor-pointer">
<iconify-icon className="text-blue-500" icon="solar:folder-with-files-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-normal">Projects</span>
</div>
<div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md hover:bg-black/5 text-zinc-600 transition-colors cursor-pointer">
<iconify-icon className="text-blue-500" icon="solar:box-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-normal">Stack</span>
</div>
<div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md hover:bg-black/5 text-zinc-600 transition-colors cursor-pointer">
<iconify-icon className="text-blue-500" icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-normal">Contact</span>
</div>
</div>
</div>

<div>
<div className="text-xs font-medium text-zinc-400 mb-1 px-4 tracking-tight">iCloud</div>
<div className="flex flex-col gap-0.5 px-2">
<div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md hover:bg-black/5 text-zinc-600 transition-colors cursor-pointer">
<iconify-icon className="text-blue-500" icon="solar:cloud-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-normal">Drive</span>
</div>
<div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md hover:bg-black/5 text-zinc-600 transition-colors cursor-pointer">
<iconify-icon className="text-blue-500" icon="solar:file-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-normal">Documents</span>
</div>
</div>
</div>

<div>
<div className="text-xs font-medium text-zinc-400 mb-1 px-4 tracking-tight">Tags</div>
<div className="flex flex-col gap-0.5 px-4">
<div className="flex items-center gap-2 py-1 text-sm font-normal text-zinc-600">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<span>Urgent</span>
</div>
<div className="flex items-center gap-2 py-1 text-sm font-normal text-zinc-600">
<div className="w-2 h-2 rounded-full bg-orange-400"></div>
<span>Work</span>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-white overflow-y-auto finder-scroll p-8 sm:p-10">

<div className="mb-12">
<div className="w-20 h-20 bg-gradient-to-tr from-zinc-200 to-zinc-300 rounded-full mb-6 shadow-inner flex items-center justify-center text-zinc-500 text-2xl font-semibold border border-white">
                            SM
                        </div>
<h1 className="text-3xl font-medium tracking-tight text-zinc-900 mb-2">Subhan Masoodi</h1>
<p className="text-lg text-zinc-500 font-normal mb-5 tracking-tight">Design Engineer &amp; Frontend Specialist</p>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xl font-normal">
                            I build accessible, pixel-perfect user interfaces that blend design and engineering. Passionate about micro-interactions, clean architecture, and the React ecosystem.
                        </p>
<div className="flex gap-3 mt-8">
<button className="bg-zinc-900 text-white px-5 py-2 rounded-md text-xs font-medium shadow-sm hover:bg-zinc-800 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:download-linear"></iconify-icon> Download CV
                            </button>
<button className="bg-white border border-zinc-200 text-zinc-700 px-5 py-2 rounded-md text-xs font-medium shadow-sm hover:bg-zinc-50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon> Contact
                            </button>
</div>
</div>
<div className="h-px w-full bg-zinc-100 mb-10"></div>

<h2 className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-6">Selected Works</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

<div className="group border border-zinc-100 rounded-xl p-5 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all cursor-pointer bg-zinc-50/50">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-100 flex items-center justify-center text-zinc-700 shadow-sm">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Analytics Platform</h3>
<p className="text-xs text-zinc-500 mb-4 line-clamp-2 leading-relaxed">Real-time data visualization dashboard for SaaS metrics with dark mode support.</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white border border-zinc-100 text-zinc-500 text-xs rounded font-normal">React</span>
<span className="px-2 py-1 bg-white border border-zinc-100 text-zinc-500 text-xs rounded font-normal">D3.js</span>
</div>
</div>

<div className="group border border-zinc-100 rounded-xl p-5 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all cursor-pointer bg-zinc-50/50">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-100 flex items-center justify-center text-zinc-700 shadow-sm">
<iconify-icon icon="solar:bag-3-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">E-Commerce Redesign</h3>
<p className="text-xs text-zinc-500 mb-4 line-clamp-2 leading-relaxed">Headless commerce frontend improving conversion rates by 24%.</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white border border-zinc-100 text-zinc-500 text-xs rounded font-normal">Next.js</span>
<span className="px-2 py-1 bg-white border border-zinc-100 text-zinc-500 text-xs rounded font-normal">Stripe</span>
</div>
</div>

<div className="group border border-zinc-100 rounded-xl p-5 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all cursor-pointer bg-zinc-50/50">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-100 flex items-center justify-center text-zinc-700 shadow-sm">
<iconify-icon icon="solar:figma-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Design System</h3>
<p className="text-xs text-zinc-500 mb-4 line-clamp-2 leading-relaxed">Comprehensive component library documenting 40+ atomic elements.</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white border border-zinc-100 text-zinc-500 text-xs rounded font-normal">Storybook</span>
<span className="px-2 py-1 bg-white border border-zinc-100 text-zinc-500 text-xs rounded font-normal">TypeScript</span>
</div>
</div>

<div className="group border border-zinc-100 rounded-xl p-5 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all cursor-pointer bg-zinc-50/50">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-100 flex items-center justify-center text-zinc-700 shadow-sm">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">AI Interface</h3>
<p className="text-xs text-zinc-500 mb-4 line-clamp-2 leading-relaxed">Generative AI chat interface with markdown rendering and streaming response.</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white border border-zinc-100 text-zinc-500 text-xs rounded font-normal">OpenAI</span>
<span className="px-2 py-1 bg-white border border-zinc-100 text-zinc-500 text-xs rounded font-normal">Vercel SDK</span>
</div>
</div>
</div>

<div className="bg-zinc-50/80 rounded-xl p-5 border border-zinc-100">
<h2 className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-4">Technology</h2>
<div className="flex flex-wrap gap-2">
<div className="flex items-center gap-1.5 bg-white border border-zinc-200 px-2.5 py-1.5 rounded-md text-xs text-zinc-600 shadow-sm">
<iconify-icon className="text-blue-400" icon="solar:atom-linear" width="14"></iconify-icon> React
                            </div>
<div className="flex items-center gap-1.5 bg-white border border-zinc-200 px-2.5 py-1.5 rounded-md text-xs text-zinc-600 shadow-sm">
<iconify-icon className="text-black" icon="solar:code-circle-linear" width="14"></iconify-icon> Next.js
                            </div>
<div className="flex items-center gap-1.5 bg-white border border-zinc-200 px-2.5 py-1.5 rounded-md text-xs text-zinc-600 shadow-sm">
<iconify-icon className="text-cyan-500" icon="solar:pallete-2-linear" width="14"></iconify-icon> Tailwind
                            </div>
<div className="flex items-center gap-1.5 bg-white border border-zinc-200 px-2.5 py-1.5 rounded-md text-xs text-zinc-600 shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:code-file-linear" width="14"></iconify-icon> TypeScript
                            </div>
<div className="flex items-center gap-1.5 bg-white border border-zinc-200 px-2.5 py-1.5 rounded-md text-xs text-zinc-600 shadow-sm">
<iconify-icon className="text-purple-500" icon="solar:figma-linear" width="14"></iconify-icon> Figma
                            </div>
</div>
</div>
</div>
</div>

<div className="h-8 bg-zinc-50 border-t border-zinc-200/50 flex items-center px-4 justify-between text-xs text-zinc-400 font-normal">
<span>4 items selected</span>
<span>Available 24GB</span>
</div>
</div>
</main>

<div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-auto px-2">
<div className="glass-dock flex items-end gap-3 px-3 pb-3 pt-3 rounded-2xl relative h-20">

<div className="dock-item flex flex-col items-center gap-1 relative group" title="Finder">
<div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#00d6ff] to-[#006aff] shadow-lg flex items-center justify-center relative overflow-hidden ring-1 ring-white/10">
<div className="absolute w-full h-[50%] bg-white/20 bottom-0 left-0"></div>
<iconify-icon className="text-white relative z-10" icon="solar:face-scan-square-linear" strokeWidth="2" width="28"></iconify-icon>
</div>
<span className="w-1 h-1 bg-white/80 rounded-full absolute -bottom-2"></span>
</div>

<div className="dock-item flex flex-col items-center gap-1 relative group" title="Launchpad">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-300 via-zinc-400 to-zinc-500 shadow-lg flex items-center justify-center relative ring-1 ring-white/10">
<div className="grid grid-cols-3 gap-1 opacity-90">
<div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-red-400 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-emerald-400 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-purple-400 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-amber-400 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
</div>
</div>
</div>

<div className="dock-item flex flex-col items-center gap-1 relative group" title="Safari">
<div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center relative overflow-hidden ring-1 ring-white/10">
<div className="absolute inset-0 bg-blue-500 opacity-[0.08]"></div>
<iconify-icon className="text-[#007aff]" icon="solar:compass-linear" strokeWidth="2" width="30"></iconify-icon>
</div>
</div>

<div className="dock-item flex flex-col items-center gap-1 relative group" title="Messages">
<div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#34c759] to-[#248a3d] shadow-lg flex items-center justify-center relative ring-1 ring-white/10">
<iconify-icon className="text-white" icon="solar:chat-round-dots-linear" strokeWidth="2" width="26"></iconify-icon>
</div>
</div>

<div className="dock-item flex flex-col items-center gap-1 relative group" title="Mail">
<div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#5ac8fa] to-[#007aff] shadow-lg flex items-center justify-center relative ring-1 ring-white/10">
<iconify-icon className="text-white" icon="solar:letter-linear" strokeWidth="2" width="26"></iconify-icon>
</div>
</div>

<div className="dock-item flex flex-col items-center gap-1 relative group" title="VS Code">
<div className="w-12 h-12 rounded-xl bg-[#23a9f2] shadow-lg flex items-center justify-center relative ring-1 ring-white/10">
<iconify-icon className="text-white" icon="solar:code-linear" strokeWidth="2" width="28"></iconify-icon>
</div>
<span className="w-1 h-1 bg-white/80 rounded-full absolute -bottom-2"></span>
</div>

<div className="w-px h-10 bg-white/20 mx-1 mb-1 self-center"></div>

<div className="dock-item flex flex-col items-center gap-1 relative group" title="Terminal">
<div className="w-12 h-12 rounded-xl bg-[#1d1d1f] shadow-lg flex items-center justify-center relative ring-1 ring-white/10 border-t border-white/20">
<span className="text-white font-mono font-bold text-xs mt-1">&gt;_</span>
</div>
</div>

<div className="dock-item flex flex-col items-center gap-1 relative group" title="Trash">
<div className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center relative ring-1 ring-white/20 border border-white/30">
<iconify-icon className="text-zinc-600" icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

    </>
  );
}
