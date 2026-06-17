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
      

<nav className="w-16 lg:w-64 border-r border-zinc-800 flex flex-col bg-zinc-950/50 shrink-0 z-40 transition-all duration-300">

<div className="h-14 flex items-center justify-center lg:justify-start lg:px-6 border-b border-zinc-800">
<div className="flex items-center gap-3">
<div className="w-7 h-7 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/10 group">
<iconify-icon className="text-indigo-500 group-hover:scale-110 transition-transform" icon="solar:layers-minimalistic-bold"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-sm text-zinc-200 hidden lg:block">VisionExtract</span>
</div>
</div>

<div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-100 bg-zinc-800/40 border border-zinc-800/60 rounded-md shadow-sm group relative overflow-hidden" href="#">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-indigo-400" icon="solar:graph-new-linear" width="20"></iconify-icon>
<span className="hidden lg:block font-medium">Workflows</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 rounded-md transition-all group" href="#">
<iconify-icon className="group-hover:text-zinc-300 transition-colors" icon="solar:database-linear" width="20"></iconify-icon>
<span className="hidden lg:block">Datasets</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 rounded-md transition-all group" href="#">
<iconify-icon className="group-hover:text-zinc-300 transition-colors" icon="solar:code-square-linear" width="20"></iconify-icon>
<span className="hidden lg:block">API Keys</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 rounded-md transition-all group" href="#">
<iconify-icon className="group-hover:text-zinc-300 transition-colors" icon="solar:settings-linear" width="20"></iconify-icon>
<span className="hidden lg:block">Settings</span>
</a>
<div className="pt-8 pb-2 hidden lg:block">
<p className="px-3 text-[10px] font-semibold text-zinc-600 uppercase tracking-widest">Active Models</p>
</div>
<div className="space-y-1 hidden lg:block">
<div className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-zinc-900/50 cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<span className="text-sm text-zinc-400 group-hover:text-zinc-200">Financial_OCR_v2</span>
</div>
<span className="text-[10px] text-zinc-600">98%</span>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-zinc-900/50 cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<span className="text-sm text-zinc-400 group-hover:text-zinc-200">ID_Scanner_Beta</span>
</div>
<span className="text-[10px] text-zinc-600">Train</span>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-800">
<button className="flex items-center gap-3 w-full hover:bg-zinc-900 p-2 rounded-lg transition-colors group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-zinc-500 flex items-center justify-center">
<span className="text-xs font-medium text-white">JD</span>
</div>
<div className="hidden lg:block text-left">
<p className="text-xs font-medium text-zinc-200 group-hover:text-white">John Doe</p>
<p className="text-[10px] text-zinc-500">Pro Plan</p>
</div>
<iconify-icon className="ml-auto text-zinc-600 hidden lg:block" icon="solar:sort-vertical-linear"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-1 flex flex-col min-w-0 bg-zinc-950 relative">

<header className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-30">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Workflows</span>
<iconify-icon className="text-zinc-700" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-zinc-200 font-medium bg-zinc-900 px-2 py-1 rounded border border-zinc-800">Invoice Extraction</span>
</div>
<span className="w-px h-4 bg-zinc-800"></span>
<span className="text-xs text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live
                </span>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 bg-transparent border border-zinc-800 hover:bg-zinc-900 rounded-md transition-all">
<iconify-icon icon="solar:share-linear" width="14"></iconify-icon>
                    Share
                </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-400 rounded-md transition-all shadow-lg shadow-indigo-900/20">
<iconify-icon icon="solar:play-linear" width="14"></iconify-icon>
                    Run Test
                </button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="flex-1 flex flex-col min-w-0 border-r border-zinc-800 bg-zinc-900/10">

<div className="h-10 border-b border-zinc-800 flex items-center justify-between px-4 bg-zinc-950">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:file-text-linear"></iconify-icon>
<span className="text-xs text-zinc-400 font-mono">invoice_2023_scan.pdf</span>
</div>
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-zinc-800 rounded text-zinc-500 hover:text-zinc-300"><iconify-icon icon="solar:minus-circle-linear" width="16"></iconify-icon></button>
<span className="text-[10px] text-zinc-500 w-8 text-center">125%</span>
<button className="p-1 hover:bg-zinc-800 rounded text-zinc-500 hover:text-zinc-300"><iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon></button>
</div>
</div>

<div className="flex-1 overflow-auto relative bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:20px_20px] p-8 flex justify-center">

<div className="relative w-[480px] h-[640px] bg-white rounded shadow-2xl transition-transform duration-300 ring-1 ring-zinc-800 group cursor-crosshair">

<div className="absolute inset-0 overflow-hidden rounded pointer-events-none">
<div className="scan-line"></div>
</div>

<div className="absolute top-12 left-12 w-32 h-8 border-2 border-indigo-500/50 bg-indigo-500/10 rounded flex items-center justify-center group/field">
<div className="opacity-0 group-hover/field:opacity-100 absolute -top-5 left-0 bg-indigo-600 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">invoice_id</div>
</div>
<div className="absolute top-12 right-12 w-24 h-8 border-2 border-indigo-500/50 bg-indigo-500/10 rounded group/field">
<div className="opacity-0 group-hover/field:opacity-100 absolute -top-5 right-0 bg-indigo-600 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">date</div>
</div>
<div className="absolute top-36 left-12 right-12 h-48 border-2 border-emerald-500/50 bg-emerald-500/10 rounded group/field">
<div className="opacity-0 group-hover/field:opacity-100 absolute -top-5 left-0 bg-emerald-600 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">line_items_table</div>
</div>
<div className="absolute bottom-12 right-12 w-32 h-10 border-2 border-pink-500/50 bg-pink-500/10 rounded group/field">
<div className="opacity-0 group-hover/field:opacity-100 absolute -top-5 right-0 bg-pink-600 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">total_amount</div>
</div>

<div className="p-12 opacity-30 pointer-events-none">
<div className="flex justify-between mb-12">
<div className="w-16 h-16 bg-zinc-900 rounded"></div>
<div className="text-right space-y-2">
<div className="h-4 w-32 bg-zinc-800 ml-auto rounded"></div>
<div className="h-3 w-20 bg-zinc-400 ml-auto rounded"></div>
</div>
</div>
<div className="space-y-6">
<div className="h-px bg-zinc-300 w-full"></div>
<div className="space-y-3">
<div className="flex justify-between"><div className="h-3 w-1/2 bg-zinc-400 rounded"></div><div className="h-3 w-12 bg-zinc-400 rounded"></div></div>
<div className="flex justify-between"><div className="h-3 w-1/3 bg-zinc-400 rounded"></div><div className="h-3 w-12 bg-zinc-400 rounded"></div></div>
<div className="flex justify-between"><div className="h-3 w-2/3 bg-zinc-400 rounded"></div><div className="h-3 w-12 bg-zinc-400 rounded"></div></div>
</div>
<div className="h-px bg-zinc-300 w-full mt-12"></div>
<div className="flex justify-end mt-4">
<div className="h-8 w-24 bg-zinc-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-[420px] bg-zinc-950 flex flex-col border-l border-zinc-800">

<div className="flex items-center px-1 pt-2 border-b border-zinc-800 bg-zinc-950">
<button className="flex-1 pb-2 border-b-2 border-indigo-500 text-zinc-100 text-xs font-medium">Schema</button>
<button className="flex-1 pb-2 border-b-2 border-transparent text-zinc-500 hover:text-zinc-300 transition-colors text-xs font-medium">JSON Output</button>
<button className="flex-1 pb-2 border-b-2 border-transparent text-zinc-500 hover:text-zinc-300 transition-colors text-xs font-medium">Validation</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Extraction Fields</h3>
<button className="text-indigo-400 hover:text-indigo-300 text-[10px] flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="12"></iconify-icon> Add Field
                            </button>
</div>
<div className="space-y-2">

<div className="group bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 rounded-md p-3 transition-all">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:text-field-linear"></iconify-icon>
<span className="text-sm text-zinc-200 font-mono">invoice_id</span>
</div>
<iconify-icon className="text-zinc-600 cursor-pointer hover:text-zinc-300" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<select className="bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-400 rounded px-2 py-1 focus:outline-none focus:border-indigo-500">
<option>String</option>
<option>Number</option>
<option>Date</option>
</select>
<div className="flex items-center gap-1.5 ml-auto">
<span className="text-[10px] text-zinc-500">Required</span>
<div className="relative inline-block w-6 h-3.5 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-2.5 h-2.5 rounded-full bg-zinc-400 border-none appearance-none cursor-pointer top-0.5 left-0.5 transition-all duration-200 checked:bg-indigo-500" name="toggle" type="checkbox"/>
<div className="toggle-label block overflow-hidden h-3.5 rounded-full bg-zinc-800 cursor-pointer"></div>
</div>
</div>
</div>
</div>

<div className="group bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 rounded-md p-3 transition-all">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:calendar-linear"></iconify-icon>
<span className="text-sm text-zinc-200 font-mono">invoice_date</span>
</div>
<iconify-icon className="text-zinc-600 cursor-pointer hover:text-zinc-300" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<select className="bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-400 rounded px-2 py-1 focus:outline-none focus:border-indigo-500">
<option>Date</option>
<option>String</option>
</select>
<div className="flex items-center gap-1.5 ml-auto">
<span className="text-[10px] text-zinc-500">Required</span>
<div className="relative inline-block w-6 h-3.5 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-2.5 h-2.5 rounded-full bg-zinc-400 border-none appearance-none cursor-pointer top-0.5 left-0.5 transition-all duration-200 checked:bg-indigo-500" name="toggle" type="checkbox"/>
<div className="toggle-label block overflow-hidden h-3.5 rounded-full bg-zinc-800 cursor-pointer"></div>
</div>
</div>
</div>
</div>

<div className="group bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 rounded-md p-3 transition-all">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:list-linear"></iconify-icon>
<span className="text-sm text-zinc-200 font-mono">line_items</span>
</div>
<div className="px-1.5 py-0.5 rounded text-[9px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Array</div>
</div>
<div className="pl-4 border-l border-zinc-800 space-y-2 mt-3">
<div className="flex items-center justify-between text-[10px] text-zinc-400 bg-zinc-950 p-1.5 rounded border border-zinc-800">
<span>description</span>
<span className="text-zinc-600">String</span>
</div>
<div className="flex items-center justify-between text-[10px] text-zinc-400 bg-zinc-950 p-1.5 rounded border border-zinc-800">
<span>qty</span>
<span className="text-zinc-600">Number</span>
</div>
<div className="flex items-center justify-between text-[10px] text-zinc-400 bg-zinc-950 p-1.5 rounded border border-zinc-800">
<span>amount</span>
<span className="text-zinc-600">Number</span>
</div>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3">Model Configuration</h3>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 space-y-4">
<div>
<label className="text-[10px] text-zinc-500 block mb-1.5">Model Version</label>
<div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded p-2">
<iconify-icon className="text-indigo-500" icon="solar:cpu-linear"></iconify-icon>
<select className="bg-transparent w-full text-xs text-zinc-300 focus:outline-none">
<option>GPT-4o (Vision)</option>
<option>Claude 3.5 Sonnet</option>
<option>Gemini Pro 1.5</option>
</select>
</div>
</div>
<div>
<div className="flex justify-between mb-1.5">
<label className="text-[10px] text-zinc-500">Temperature</label>
<span className="text-[10px] text-zinc-400">0.1</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1 cursor-pointer group">
<div className="bg-indigo-500 h-1 rounded-full relative" style={{width: '10%'}}>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow"></div>
</div>
</div>
</div>
<div className="flex items-center justify-between py-1">
<span className="text-[10px] text-zinc-400">Auto-Correction</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-3 h-3 rounded-full bg-zinc-400 border-none appearance-none cursor-pointer top-0.5 left-0.5 transition-all duration-200 checked:bg-indigo-500" name="toggle" type="checkbox"/>
<div className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-800 cursor-pointer"></div>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-800 bg-zinc-900/20 backdrop-blur-sm">
<button className="w-full py-2 bg-white text-zinc-950 text-xs font-semibold rounded-md hover:bg-zinc-200 transition-colors shadow-lg">
                        Save Changes
                    </button>
<p className="text-[10px] text-center text-zinc-600 mt-2">Last saved 2 minutes ago</p>
</div>
</div>
</div>

<div className="h-8 border-t border-zinc-800 bg-zinc-950 flex items-center justify-between px-4 text-[10px] select-none">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5 text-zinc-400">
<iconify-icon className="text-zinc-600" icon="solar:server-square-linear"></iconify-icon>
                    us-east-1
                </span>
<span className="flex items-center gap-1.5 text-zinc-400">
<iconify-icon className="text-zinc-600" icon="solar:clock-circle-linear"></iconify-icon>
                    45ms latency
                </span>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-300 flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:bug-linear"></iconify-icon> Debug
                </button>
<button className="text-zinc-500 hover:text-zinc-300 flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:question-circle-linear"></iconify-icon> Help
                </button>
</div>
</div>
</main>

    </>
  );
}
