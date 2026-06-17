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
      

<nav className="h-7 w-full glass-bar flex items-center justify-between px-4 text-white text-[13px] font-medium z-50 fixed top-0 left-0 shadow-sm">

<div className="flex items-center gap-4">
<span className="iconify hover:text-slate-200 cursor-default" data-icon="lucide:apple" data-width="16"></span>
<span className="font-bold tracking-tight cursor-default">Nahian</span>
<div className="hidden sm:flex items-center gap-4 text-white/90 font-normal">
<span className="hover:text-white cursor-default">File</span>
<span className="hover:text-white cursor-default">Edit</span>
<span className="hover:text-white cursor-default">View</span>
<span className="hover:text-white cursor-default">Go</span>
<span className="hover:text-white cursor-default">Window</span>
<span className="hover:text-white cursor-default">Help</span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="flex items-center gap-3 opacity-90">
<span className="iconify" data-icon="lucide:battery-medium" data-width="18"></span>
<span className="iconify" data-icon="lucide:wifi" data-width="16"></span>
<span className="iconify" data-icon="lucide:search" data-width="14"></span>
<span className="iconify" data-icon="lucide:sliders-horizontal" data-width="14"></span>
</div>
<div className="flex items-center gap-2 cursor-default font-normal tracking-wide">
<span>Tue Oct 24</span>
<span>9:41 AM</span>
</div>
</div>
</nav>

<main className="w-full h-full pt-10 px-4 relative z-0 flex">

<div className="flex flex-col items-start gap-4 absolute right-4 top-12 z-0">

<div className="desktop-icon w-20 flex flex-col items-center gap-1 group cursor-pointer p-1">
<div className="icon-bg p-1 transition-colors rounded">
<div className="w-12 h-12 text-slate-200 drop-shadow-xl filter">
<span className="iconify w-full h-full" data-icon="lucide:hard-drive" strokeWidth="1.2"></span>
</div>
</div>
<span className="icon-label text-white text-[11px] font-medium tracking-tight text-shadow-sm text-center leading-tight px-1">Macintosh HD</span>
</div>

<div className="desktop-icon w-20 flex flex-col items-center gap-1 group cursor-pointer p-1">
<div className="icon-bg p-1 transition-colors rounded">
<div className="w-10 h-12 bg-white border border-gray-200 rounded-sm shadow-lg relative flex flex-col items-center justify-center">
<span className="text-[8px] font-bold text-red-500 absolute top-1 right-1">PDF</span>
<div className="w-6 h-0.5 bg-gray-200 mb-0.5"></div>
<div className="w-6 h-0.5 bg-gray-200 mb-0.5"></div>
<div className="w-4 h-0.5 bg-gray-200"></div>
</div>
</div>
<span className="icon-label text-white text-[11px] font-medium tracking-tight text-shadow-sm text-center leading-tight px-1">Resume.pdf</span>
</div>
</div>

<div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] md:w-[800px] h-[75%] md:h-[600px] glass-window rounded-xl overflow-hidden flex flex-col z-10 transition-all duration-300">

<div className="h-12 bg-gray-100/40 border-b border-gray-200/40 flex items-center px-4 justify-between shrink-0">
<div className="flex items-center gap-4">

<div className="flex items-center gap-2 group">
<div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e33e32] flex items-center justify-center">
<span className="opacity-0 group-hover:opacity-100 text-[8px] font-bold text-black/50">×</span>
</div>
<div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#e09e3e] flex items-center justify-center">
<span className="opacity-0 group-hover:opacity-100 text-[8px] font-bold text-black/50">-</span>
</div>
<div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1c9c2b] flex items-center justify-center">
<span className="opacity-0 group-hover:opacity-100 text-[8px] font-bold text-black/50">+</span>
</div>
</div>

<div className="flex items-center gap-2 text-slate-500 ml-2">
<span className="iconify" data-icon="lucide:chevron-left" data-width="18"></span>
<span className="iconify opacity-50" data-icon="lucide:chevron-right" data-width="18"></span>
</div>
<span className="text-sm font-semibold text-slate-700 tracking-tight ml-2">Nahian Alam</span>
</div>

<div className="flex items-center gap-3 text-slate-500">
<span className="iconify" data-icon="lucide:layout-grid" data-width="16"></span>
<span className="iconify" data-icon="lucide:list" data-width="16"></span>
<span className="iconify" data-icon="lucide:share" data-width="16"></span>
<div className="w-32 h-7 bg-white/50 rounded flex items-center px-2 gap-2 border border-gray-200/50 shadow-sm">
<span className="iconify text-slate-400" data-icon="lucide:search" data-width="12"></span>
<span className="text-xs text-slate-400">Search</span>
</div>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="w-48 bg-gray-50/50 backdrop-blur-sm border-r border-gray-200/40 p-3 flex flex-col gap-6 hidden sm:flex">

<div>
<div className="text-[10px] font-semibold text-slate-400 mb-1 px-2">Favorites</div>
<div className="flex flex-col gap-0.5">
<div className="sidebar-item active flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer text-sm text-slate-600">
<span className="iconify text-blue-500" data-icon="lucide:user-circle" data-width="16"></span>
<span>About Me</span>
</div>
<div className="sidebar-item hover:bg-black/5 flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer text-sm text-slate-600 transition-colors">
<span className="iconify text-blue-500" data-icon="lucide:folder-kanban" data-width="16"></span>
<span>Projects</span>
</div>
<div className="sidebar-item hover:bg-black/5 flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer text-sm text-slate-600 transition-colors">
<span className="iconify text-blue-500" data-icon="lucide:code-2" data-width="16"></span>
<span>Stack</span>
</div>
<div className="sidebar-item hover:bg-black/5 flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer text-sm text-slate-600 transition-colors">
<span className="iconify text-blue-500" data-icon="lucide:send" data-width="16"></span>
<span>Contact</span>
</div>
</div>
</div>

<div>
<div className="text-[10px] font-semibold text-slate-400 mb-1 px-2">iCloud</div>
<div className="flex flex-col gap-0.5">
<div className="sidebar-item hover:bg-black/5 flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer text-sm text-slate-600 transition-colors">
<span className="iconify text-blue-500" data-icon="lucide:cloud" data-width="16"></span>
<span>iCloud Drive</span>
</div>
<div className="sidebar-item hover:bg-black/5 flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer text-sm text-slate-600 transition-colors">
<span className="iconify text-blue-500" data-icon="lucide:file-text" data-width="16"></span>
<span>Documents</span>
</div>
</div>
</div>

<div>
<div className="text-[10px] font-semibold text-slate-400 mb-1 px-2">Tags</div>
<div className="flex flex-col gap-0.5 px-2">
<div className="flex items-center gap-2 py-1 text-sm text-slate-600">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span>Urgent</span>
</div>
<div className="flex items-center gap-2 py-1 text-sm text-slate-600">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span>Work</span>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-white overflow-y-auto custom-scroll p-8">

<div className="mb-10 animate-fade-in">
<div className="w-20 h-20 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full mb-4 shadow-lg flex items-center justify-center text-white text-2xl font-bold">
                            NA
                        </div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Nahian Alam</h1>
<p className="text-lg text-slate-500 font-medium mb-4">Front-end &amp; UI/UX Specialist</p>
<p className="text-sm text-slate-500 leading-relaxed max-w-lg">
                            Crafting pixel-perfect, accessible, and performant web interfaces. I bridge the gap between design and engineering, focusing on micro-interactions and clean architecture.
                        </p>
<div className="flex gap-2 mt-6">
<button className="bg-slate-900 text-white px-4 py-1.5 rounded-md text-xs font-medium shadow-sm hover:bg-slate-800 transition-colors">Download CV</button>
<button className="bg-white border border-gray-200 text-slate-700 px-4 py-1.5 rounded-md text-xs font-medium shadow-sm hover:bg-gray-50 transition-colors">Email Me</button>
</div>
</div>

<div className="h-px w-full bg-gray-100 mb-8"></div>

<h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Selected Works</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

<div className="group border border-gray-200 rounded-lg p-4 hover:border-blue-400/50 hover:shadow-md transition-all cursor-pointer bg-white">
<div className="flex items-start justify-between mb-3">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<span className="iconify" data-icon="lucide:layout-dashboard" data-width="20"></span>
</div>
<span className="iconify text-slate-300 group-hover:text-blue-500 transition-colors" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">SaaS Analytics Dashboard</h3>
<p className="text-xs text-slate-500 mb-3 line-clamp-2">High-performance React dashboard with real-time data visualization and dark mode support.</p>
<div className="flex gap-2">
<span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded font-medium">React</span>
<span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded font-medium">Tailwind</span>
</div>
</div>

<div className="group border border-gray-200 rounded-lg p-4 hover:border-blue-400/50 hover:shadow-md transition-all cursor-pointer bg-white">
<div className="flex items-start justify-between mb-3">
<div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="20"></span>
</div>
<span className="iconify text-slate-300 group-hover:text-blue-500 transition-colors" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">E-Commerce Redesign</h3>
<p className="text-xs text-slate-500 mb-3 line-clamp-2">Complete UX overhaul for a fashion retailer resulting in 24% conversion increase.</p>
<div className="flex gap-2">
<span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded font-medium">Next.js</span>
<span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded font-medium">Framer</span>
</div>
</div>

<div className="group border border-gray-200 rounded-lg p-4 hover:border-blue-400/50 hover:shadow-md transition-all cursor-pointer bg-white">
<div className="flex items-start justify-between mb-3">
<div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<span className="iconify text-slate-300 group-hover:text-blue-500 transition-colors" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Design System Kit</h3>
<p className="text-xs text-slate-500 mb-3 line-clamp-2">A comprehensive Figma to Code component library used by 3 internal teams.</p>
<div className="flex gap-2">
<span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded font-medium">TypeScript</span>
<span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded font-medium">Storybook</span>
</div>
</div>

<div className="group border border-gray-200 rounded-lg p-4 hover:border-blue-400/50 hover:shadow-md transition-all cursor-pointer bg-white">
<div className="flex items-start justify-between mb-3">
<div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="20"></span>
</div>
<span className="iconify text-slate-300 group-hover:text-blue-500 transition-colors" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">AI Chat Interface</h3>
<p className="text-xs text-slate-500 mb-3 line-clamp-2">Streaming response UI with clean typography and custom markdown rendering.</p>
<div className="flex gap-2">
<span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded font-medium">OpenAI</span>
<span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded font-medium">Vue</span>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-lg p-4 border border-gray-200/60">
<h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Tech Arsenal</h2>
<div className="flex flex-wrap gap-2">
<div className="flex items-center gap-1.5 bg-white border border-gray-200 px-2 py-1 rounded text-xs text-slate-600 shadow-sm">
<span className="iconify text-[#61DAFB]" data-icon="lucide:atom" data-width="14"></span> React
                            </div>
<div className="flex items-center gap-1.5 bg-white border border-gray-200 px-2 py-1 rounded text-xs text-slate-600 shadow-sm">
<span className="iconify text-black" data-icon="lucide:triangle" data-width="14"></span> Next.js
                            </div>
<div className="flex items-center gap-1.5 bg-white border border-gray-200 px-2 py-1 rounded text-xs text-slate-600 shadow-sm">
<span className="iconify text-[#38B2AC]" data-icon="lucide:wind" data-width="14"></span> Tailwind
                            </div>
<div className="flex items-center gap-1.5 bg-white border border-gray-200 px-2 py-1 rounded text-xs text-slate-600 shadow-sm">
<span className="iconify text-[#3178C6]" data-icon="lucide:file-code-2" data-width="14"></span> TypeScript
                            </div>
<div className="flex items-center gap-1.5 bg-white border border-gray-200 px-2 py-1 rounded text-xs text-slate-600 shadow-sm">
<span className="iconify text-[#F24E1E]" data-icon="lucide:figma" data-width="14"></span> Figma
                            </div>
</div>
</div>
</div>
</div>

<div className="h-6 bg-gray-50 border-t border-gray-200/50 flex items-center px-3 justify-between text-[10px] text-slate-400">
<span>4 items selected</span>
<span>12.4 GB available</span>
</div>
</div>
</main>

<div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 w-auto max-w-full px-2">
<div className="glass-dock flex items-end gap-3 px-3 pb-3 pt-3 rounded-2xl relative h-[76px]">

<div className="dock-icon flex flex-col items-center gap-1 relative group" title="Finder">
<div className="w-12 h-12 rounded-[12px] bg-gradient-to-b from-[#00d6ff] to-[#006aff] shadow-lg flex items-center justify-center relative overflow-hidden ring-1 ring-white/10">
<div className="absolute w-full h-[50%] bg-white/20 bottom-0 left-0"></div>
<span className="iconify text-white relative z-10" data-icon="lucide:smile" data-width="30" strokeWidth="2.5"></span>
</div>
<span className="w-1 h-1 bg-white/60 rounded-full absolute -bottom-2"></span>
</div>

<div className="dock-icon flex flex-col items-center gap-1 relative group" title="Launchpad">
<div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 shadow-lg flex items-center justify-center relative ring-1 ring-white/10">
<div className="grid grid-cols-3 gap-1">
<div className="w-1.5 h-1.5 bg-white/90 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-gradient-to-tr from-yellow-300 to-red-400 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-gradient-to-tr from-green-300 to-emerald-500 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-gradient-to-tr from-blue-300 to-indigo-500 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-gradient-to-tr from-purple-300 to-pink-500 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-white/90 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-gradient-to-tr from-orange-300 to-amber-500 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-white/90 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-white/90 rounded-sm"></div>
</div>
</div>
</div>

<div className="dock-icon flex flex-col items-center gap-1 relative group" title="Safari">
<div className="w-12 h-12 rounded-[12px] bg-white shadow-lg flex items-center justify-center relative overflow-hidden ring-1 ring-white/10">
<div className="absolute inset-0 bg-blue-500 opacity-10"></div>
<span className="iconify text-[#007aff]" data-icon="lucide:compass" data-width="34" strokeWidth="2"></span>
</div>
</div>

<div className="dock-icon flex flex-col items-center gap-1 relative group" title="Messages">
<div className="w-12 h-12 rounded-[12px] bg-gradient-to-b from-[#34c759] to-[#248a3d] shadow-lg flex items-center justify-center relative ring-1 ring-white/10">
<span className="iconify text-white fill-white" data-icon="lucide:message-circle" data-width="26" strokeWidth="1.5"></span>
</div>
</div>

<div className="dock-icon flex flex-col items-center gap-1 relative group" title="Mail">
<div className="w-12 h-12 rounded-[12px] bg-gradient-to-b from-[#5ac8fa] to-[#007aff] shadow-lg flex items-center justify-center relative ring-1 ring-white/10">
<span className="iconify text-white" data-icon="lucide:mail" data-width="26" strokeWidth="2"></span>
</div>
</div>

<div className="dock-icon flex flex-col items-center gap-1 relative group" title="VS Code">
<div className="w-12 h-12 rounded-[12px] bg-[#23a9f2] shadow-lg flex items-center justify-center relative ring-1 ring-white/10">
<span className="iconify text-white" data-icon="lucide:code-2" data-width="28" strokeWidth="2"></span>
</div>
</div>

<div className="w-px h-10 bg-white/20 mx-1 mb-1 self-center"></div>

<div className="dock-icon flex flex-col items-center gap-1 relative group" title="Terminal">
<div className="w-12 h-12 rounded-[12px] bg-[#1d1d1f] shadow-lg flex items-center justify-center relative ring-1 ring-white/10 border-t border-white/20">
<span className="text-white font-mono font-bold text-xs mt-1">&gt;_</span>
</div>
</div>

<div className="dock-icon flex flex-col items-center gap-1 relative group" title="Trash">
<div className="w-12 h-12 rounded-[12px] bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-md shadow-lg flex items-center justify-center relative ring-1 ring-white/20 border border-white/30">
<span className="iconify text-slate-500" data-icon="lucide:trash-2" data-width="24" strokeWidth="1.5"></span>
</div>
</div>
</div>
</div>

    </>
  );
}
