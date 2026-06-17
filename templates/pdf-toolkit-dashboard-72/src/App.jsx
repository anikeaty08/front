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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



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
      

<aside className="w-64 border-r border-zinc-900 bg-zinc-950 flex-col hidden md:flex justify-between z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-zinc-900">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
<span className="text-xs font-bold">P</span>
</div>
<span className="text-sm font-semibold tracking-tight text-white">PDF TOOLKIT</span>
</div>
</div>

<nav className="p-4 space-y-1">
<div className="px-2 mb-3 mt-2 text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Platform</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-zinc-900 rounded-md shadow-sm border border-zinc-800 font-medium group transition-all" href="#">
<i className="w-4 h-4 text-zinc-100" data-lucide="layout-grid"></i>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md font-medium transition-colors" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400" data-lucide="folder"></i>
                    My Files
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md font-medium transition-colors" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400" data-lucide="clock"></i>
                    Recent History
                </a>
<div className="px-2 mt-8 mb-3 text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Tools</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md font-medium transition-colors" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400" data-lucide="combine"></i>
                    Merge PDF
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md font-medium transition-colors" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400" data-lucide="scissors"></i>
                    Split PDF
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md font-medium transition-colors" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400" data-lucide="table-2"></i>
                    Extract Table
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md font-medium transition-colors" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400" data-lucide="image-plus"></i>
                    Image to PDF
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md font-medium transition-colors" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400" data-lucide="file-text"></i>
                    Extract Text
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md font-medium transition-colors" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400" data-lucide="lock"></i>
                    Encrypt/Decrypt
                </a>
</nav>
</div>

<div className="p-4 border-t border-zinc-900">
<button className="flex items-center gap-3 w-full p-2 hover:bg-zinc-900 rounded-md transition-colors text-left group">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 border border-zinc-700 group-hover:border-zinc-600">
<span className="text-xs font-medium">JD</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 truncate">John Doe</p>
<p className="text-xs text-zinc-500 truncate">Pro Plan</p>
</div>
<i className="w-3 h-3 text-zinc-600 group-hover:text-zinc-400" data-lucide="chevron-up"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-black/40 relative">

<header className="h-16 border-b border-zinc-900 flex items-center justify-between px-6 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-30">
<div className="flex items-center gap-4">
<button className="md:hidden p-2 -ml-2 text-zinc-400 hover:text-white">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<nav className="hidden sm:flex items-center text-sm text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Workspace</span>
<span className="mx-2 text-zinc-700">/</span>
<span className="font-medium text-zinc-200">Dashboard</span>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block group">
<i className="absolute left-2.5 top-2.5 w-4 h-4 text-zinc-500 group-hover:text-zinc-400 transition-colors" data-lucide="search"></i>
<input className="pl-9 pr-4 py-1.5 h-9 bg-zinc-900/50 border border-zinc-800 rounded-md text-sm text-zinc-300 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all w-64 placeholder:text-zinc-600 hover:border-zinc-700 hover:bg-zinc-900" placeholder="Search functions..." type="text"/>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-zinc-900 text-zinc-500 hover:text-zinc-300 transition-colors">
<i className="w-4 h-4" data-lucide="bell"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto relative">

<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none z-0"></div>
<div className="max-w-6xl mx-auto p-6 space-y-8 relative z-10">

<section>
<div className="flex items-end justify-between mb-4">
<div>
<h1 className="text-xl font-medium tracking-tight text-white">Quick Upload</h1>
<p className="text-sm text-zinc-500 mt-1">Select a tool or drag and drop your documents to start.</p>
</div>
</div>
<div className="group relative w-full h-48 rounded-xl border border-dashed border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-4 overflow-hidden">
<div className="w-12 h-12 bg-zinc-900 rounded-lg shadow-xl border border-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:border-zinc-600 transition-all duration-300">
<i className="w-6 h-6 text-white" data-lucide="upload-cloud"></i>
</div>
<div className="text-center z-10">
<p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">Click to upload or drag and drop</p>
<p className="text-xs text-zinc-600 mt-1">PDF, Images, DOCX (max. 50MB)</p>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-zinc-200">All Tools</h2>
<button className="text-xs text-zinc-500 hover:text-white transition-colors">Customize Grid</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-lg hover:bg-zinc-900 hover:border-zinc-700 hover:shadow-lg transition-all cursor-pointer backdrop-blur-sm">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="combine"></i>
</div>
<i className="w-4 h-4 text-zinc-700 group-hover:text-zinc-500 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white">Merge PDFs</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-1 group-hover:text-zinc-400">Combine multiple PDFs into one.</p>
</div>

<div className="group p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-lg hover:bg-zinc-900 hover:border-zinc-700 hover:shadow-lg transition-all cursor-pointer backdrop-blur-sm">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="scissors"></i>
</div>
<i className="w-4 h-4 text-zinc-700 group-hover:text-zinc-500 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white">Split PDFs</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-1 group-hover:text-zinc-400">Extract pages or split documents.</p>
</div>

<div className="group p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-lg hover:bg-zinc-900 hover:border-zinc-700 hover:shadow-lg transition-all cursor-pointer backdrop-blur-sm">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="table-2"></i>
</div>
<i className="w-4 h-4 text-zinc-700 group-hover:text-zinc-500 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white">Extract Table</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-1 group-hover:text-zinc-400">Convert PDF data to Excel/CSV.</p>
</div>

<div className="group p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-lg hover:bg-zinc-900 hover:border-zinc-700 hover:shadow-lg transition-all cursor-pointer backdrop-blur-sm">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="image-plus"></i>
</div>
<span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded font-medium border border-zinc-700/50">Extra</span>
</div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white">Image to PDF</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-1 group-hover:text-zinc-400">Convert JPG, PNG to PDF.</p>
</div>

<div className="group p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-lg hover:bg-zinc-900 hover:border-zinc-700 hover:shadow-lg transition-all cursor-pointer backdrop-blur-sm">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="file-text"></i>
</div>
<i className="w-4 h-4 text-zinc-700 group-hover:text-zinc-500 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white">Extract Text</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-1 group-hover:text-zinc-400">Get editable text from docs.</p>
</div>

<div className="group p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-lg hover:bg-zinc-900 hover:border-zinc-700 hover:shadow-lg transition-all cursor-pointer backdrop-blur-sm">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="lock"></i>
</div>
<i className="w-4 h-4 text-zinc-700 group-hover:text-zinc-500 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white">Encrypt / Decrypt</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-1 group-hover:text-zinc-400">Secure or unlock your PDFs.</p>
</div>

<div className="group p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-lg hover:bg-zinc-900 hover:border-zinc-700 hover:shadow-lg transition-all cursor-pointer backdrop-blur-sm">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="image"></i>
</div>
<i className="w-4 h-4 text-zinc-700 group-hover:text-zinc-500 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white">Extract Images</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-1 group-hover:text-zinc-400">Save images from PDF files.</p>
</div>

<div className="group p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-lg hover:bg-zinc-900 hover:border-zinc-700 hover:shadow-lg transition-all cursor-pointer backdrop-blur-sm">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="rotate-cw"></i>
</div>
<i className="w-4 h-4 text-zinc-700 group-hover:text-zinc-500 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white">Rotate PDF</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-1 group-hover:text-zinc-400">Change page orientation.</p>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<section className="lg:col-span-2">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-zinc-200">Recent Activity</h2>
<button className="text-xs text-zinc-500 hover:text-white transition-colors">View all</button>
</div>
<div className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/30 backdrop-blur-sm">
<table className="w-full text-left text-sm">
<thead className="bg-zinc-900/50 border-b border-zinc-800">
<tr>
<th className="px-4 py-3 font-medium text-zinc-500 text-xs uppercase tracking-wider w-1/2">File Name</th>
<th className="px-4 py-3 font-medium text-zinc-500 text-xs uppercase tracking-wider">Type</th>
<th className="px-4 py-3 font-medium text-zinc-500 text-xs uppercase tracking-wider">Status</th>
<th className="px-4 py-3 font-medium text-zinc-500 text-xs uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/50">
<tr className="group hover:bg-zinc-900/60 transition-colors">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-900 text-red-400 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-700">
<i className="w-4 h-4" data-lucide="file-text"></i>
</div>
<div>
<p className="font-medium text-zinc-200 group-hover:text-white">Invoice_October.pdf</p>
<p className="text-xs text-zinc-500">Extract Table • 2m ago</p>
</div>
</div>
</td>
<td className="px-4 py-3 text-zinc-500 text-xs">PDF</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                                                Complete
                                            </span>
</td>
<td className="px-4 py-3 text-right">
<button className="text-zinc-600 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
</td>
</tr>
<tr className="group hover:bg-zinc-900/60 transition-colors">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-900 text-blue-400 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-700">
<i className="w-4 h-4" data-lucide="image"></i>
</div>
<div>
<p className="font-medium text-zinc-200 group-hover:text-white">Scan_001.jpg</p>
<p className="text-xs text-zinc-500">Image to PDF • 1h ago</p>
</div>
</div>
</td>
<td className="px-4 py-3 text-zinc-500 text-xs">IMG</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">
<span className="w-1 h-1 rounded-full bg-zinc-400 animate-pulse"></span>
                                                Processing
                                            </span>
</td>
<td className="px-4 py-3 text-right">
<button className="text-zinc-600 hover:text-white transition-colors">
<i className="w-4 h-4 animate-spin" data-lucide="loader-2"></i>
</button>
</td>
</tr>
<tr className="group hover:bg-zinc-900/60 transition-colors">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-900 text-purple-400 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-700">
<i className="w-4 h-4" data-lucide="lock"></i>
</div>
<div>
<p className="font-medium text-zinc-200 group-hover:text-white">Secret_Project.pdf</p>
<p className="text-xs text-zinc-500">Encrypt • 3h ago</p>
</div>
</div>
</td>
<td className="px-4 py-3 text-zinc-500 text-xs">PDF</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                                                Secured
                                            </span>
</td>
<td className="px-4 py-3 text-right">
<button className="text-zinc-600 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="lg:col-span-1">
<div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-5 backdrop-blur-sm h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-zinc-200">Task Settings</h3>
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
</div>
<div className="space-y-6 flex-1">

<div className="flex items-center justify-between py-2 border-b border-zinc-800">
<div>
<p className="text-xs font-medium text-zinc-300">OCR Recognition</p>
<p className="text-[10px] text-zinc-500">Extract text from images</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white peer-checked:after:bg-black peer-checked:after:border-black"></div>
</label>
</div>

<div>
<p className="text-xs font-medium text-zinc-400 mb-3">Table Extraction Format</p>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group p-2 hover:bg-zinc-800/50 rounded-md -mx-2 transition-colors">
<div className="relative flex items-center">
<input checked="" className="peer sr-only appearance-none" name="format" type="radio"/>
<div className="w-4 h-4 border border-zinc-600 rounded-full bg-transparent peer-checked:border-4 peer-checked:border-white transition-all"></div>
</div>
<span className="text-xs text-zinc-400 group-hover:text-zinc-200">Excel (.xlsx)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group p-2 hover:bg-zinc-800/50 rounded-md -mx-2 transition-colors">
<div className="relative flex items-center">
<input className="peer sr-only appearance-none" name="format" type="radio"/>
<div className="w-4 h-4 border border-zinc-600 rounded-full bg-transparent peer-checked:border-4 peer-checked:border-white transition-all"></div>
</div>
<span className="text-xs text-zinc-400 group-hover:text-zinc-200">CSV (Comma Separated)</span>
</label>
</div>
</div>

<div>
<div className="flex justify-between mb-3">
<label className="text-xs font-medium text-zinc-400">Default Rotation</label>
<span className="text-xs text-zinc-300 font-mono bg-zinc-800 px-1.5 rounded">0°</span>
</div>
<input className="w-full appearance-none h-1 bg-zinc-800 rounded-lg outline-none" max="270" min="0" step="90" type="range" value="0"/>
<div className="flex justify-between mt-2 text-[10px] text-zinc-600 font-mono">
<span>0°</span>
<span>90°</span>
<span>180°</span>
<span>270°</span>
</div>
</div>
</div>
<button className="w-full mt-4 bg-white hover:bg-zinc-200 text-black text-xs font-semibold py-2.5 rounded-md shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all flex items-center justify-center gap-2">
<span>Apply to All</span>
<i className="w-3 h-3" data-lucide="check-circle-2"></i>
</button>
</div>
</section>
</div>
</div>

<footer className="mt-8 border-t border-zinc-900 py-6 px-8 relative z-10 bg-zinc-950">
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
<p>© 2023 PDF Toolkit. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-zinc-300" href="#">Privacy</a>
<a className="hover:text-zinc-300" href="#">Terms</a>
<a className="hover:text-zinc-300" href="#">Help</a>
</div>
</div>
</footer>
</div>
</main>


    </>
  );
}
