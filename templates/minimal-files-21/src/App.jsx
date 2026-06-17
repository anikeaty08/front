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
      

<div className="w-full max-w-6xl h-[85vh] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-neutral-200/60 flex overflow-hidden relative ring-1 ring-black/5">

<aside className="w-64 glass-sidebar border-r border-neutral-200 flex flex-col justify-between flex-shrink-0 z-10 transition-all duration-300 hidden md:flex">
<div>

<div className="h-14 flex items-center px-5 space-x-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
</div>

<nav className="px-3 py-2 space-y-1">
<div className="px-3 py-2 mb-2">
<span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">Workspace</span>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-800 bg-white shadow-sm rounded-lg border border-neutral-200/50 group" href="#">
<iconify-icon className="text-neutral-800" icon="solar:folder-with-files-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        All Files
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors group" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-600 transition-colors" icon="solar:clock-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Recents
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors group" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-600 transition-colors" icon="solar:star-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Starred
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors group" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-600 transition-colors" icon="solar:share-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Shared
                    </a>
<div className="px-3 py-2 mt-6 mb-2">
<span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">Locations</span>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors group" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-600 transition-colors" icon="solar:cloud-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        iCloud Drive
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors group" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-600 transition-colors" icon="solar:laptop-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        MacBook Pro
                    </a>
</nav>
</div>

<div className="p-4 border-t border-neutral-200">
<div className="bg-neutral-100 rounded-lg p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-600">Storage</span>
<span className="text-xs text-neutral-400">72%</span>
</div>
<div className="w-full bg-neutral-200 rounded-full h-1.5 overflow-hidden">
<div className="bg-neutral-800 h-1.5 rounded-full" style={{width: '72%'}}></div>
</div>
<div className="mt-2 text-xs text-neutral-400">14.2 GB of 20 GB used</div>
</div>
<button className="mt-4 flex items-center justify-center gap-2 w-full py-2 text-xs font-medium text-neutral-600 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Settings
                </button>
</div>
</aside>

<main className="flex-1 flex flex-col bg-white min-w-0">

<header className="h-14 border-b border-neutral-100 flex items-center justify-between px-6 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
<div className="flex items-center gap-4 flex-1">

<button className="md:hidden text-neutral-500 hover:text-neutral-800">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<div className="flex items-center gap-2 text-sm text-neutral-400">
<span className="hover:text-neutral-800 cursor-pointer transition-colors">Files</span>
<iconify-icon className="text-neutral-300" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="font-medium text-neutral-800">Design Assets</span>
</div>
</div>

<div className="flex items-center gap-3">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-neutral-600 transition-colors" icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 text-sm bg-neutral-50 border border-transparent focus:bg-white focus:border-neutral-200 hover:bg-neutral-100 rounded-lg w-48 focus:w-64 transition-all outline-none placeholder:text-neutral-400 text-neutral-700" placeholder="Search..." type="text"/>
</div>
<div className="w-px h-5 bg-neutral-200 mx-1"></div>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 text-neutral-500 hover:text-neutral-800 transition-colors">
<iconify-icon icon="solar:list-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-100 text-neutral-800 transition-colors">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="ml-2 w-8 h-8 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 border border-neutral-200 overflow-hidden">
<img alt="User" className="w-full h-full opacity-90" src="https://ui-avatars.com/api/?name=User&amp;background=random&amp;color=fff"/>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6">

<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-neutral-800">Folders</h2>
<button className="text-xs text-neutral-400 hover:text-neutral-600 flex items-center gap-1 transition-colors">
                            Name <iconify-icon icon="solar:arrow-down-linear" width="12"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="group p-4 bg-white border border-neutral-100 hover:border-neutral-300 hover:shadow-sm rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center gap-3 aspect-[4/3] relative">
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-neutral-400 hover:text-neutral-600" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<iconify-icon className="text-blue-500/80 group-hover:text-blue-500 transition-colors" icon="solar:folder-linear" strokeWidth="1" width="48"></iconify-icon>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900 font-medium">Brand Guidelines</span>
<span className="text-xs text-neutral-400">12 items</span>
</div>

<div className="group p-4 bg-white border border-neutral-100 hover:border-neutral-300 hover:shadow-sm rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center gap-3 aspect-[4/3] relative">
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-neutral-400 hover:text-neutral-600" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-500 transition-colors" icon="solar:folder-linear" strokeWidth="1" width="48"></iconify-icon>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900 font-medium">Archived</span>
<span className="text-xs text-neutral-400">4 items</span>
</div>

<button className="group p-4 border border-dashed border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center gap-2 aspect-[4/3]">
<iconify-icon className="text-neutral-300 group-hover:text-neutral-500 transition-colors" icon="solar:add-circle-linear" strokeWidth="1" width="32"></iconify-icon>
<span className="text-xs font-medium text-neutral-400 group-hover:text-neutral-600">New Folder</span>
</button>
</div>
</div>

<div>
<h2 className="text-sm font-medium text-neutral-800 mb-4">Recent Files</h2>
<div className="border border-neutral-100 rounded-xl overflow-hidden bg-white shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-neutral-100 bg-neutral-50/50 text-xs text-neutral-400 uppercase tracking-wider">
<th className="px-6 py-3 font-medium">Name</th>
<th className="px-6 py-3 font-medium w-32">Size</th>
<th className="px-6 py-3 font-medium w-40">Modified</th>
<th className="px-6 py-3 w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-50">

<tr className="group hover:bg-neutral-50 transition-colors cursor-default">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-orange-50 text-orange-500 flex items-center justify-center">
<iconify-icon icon="solar:figma-file-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">Dashboard_UI_v2.fig</span>
<span className="text-xs text-neutral-400 hidden sm:block">Figma Design File</span>
</div>
</div>
</td>
<td className="px-6 py-3.5 text-sm text-neutral-500">24.5 MB</td>
<td className="px-6 py-3.5 text-sm text-neutral-500">2 mins ago</td>
<td className="px-6 py-3.5 text-right">
<button className="text-neutral-300 hover:text-neutral-600 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-neutral-50 transition-colors cursor-default">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-50 text-blue-500 flex items-center justify-center">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">Q4_Report.pdf</span>
<span className="text-xs text-neutral-400 hidden sm:block">PDF Document</span>
</div>
</div>
</td>
<td className="px-6 py-3.5 text-sm text-neutral-500">2.1 MB</td>
<td className="px-6 py-3.5 text-sm text-neutral-500">Yesterday</td>
<td className="px-6 py-3.5 text-right">
<button className="text-neutral-300 hover:text-neutral-600 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-neutral-50 transition-colors cursor-default">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:file-smile-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">logo_assets.zip</span>
<span className="text-xs text-neutral-400 hidden sm:block">Archive</span>
</div>
</div>
</td>
<td className="px-6 py-3.5 text-sm text-neutral-500">156 MB</td>
<td className="px-6 py-3.5 text-sm text-neutral-500">Oct 24, 2023</td>
<td className="px-6 py-3.5 text-right">
<button className="text-neutral-300 hover:text-neutral-600 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-neutral-50 transition-colors cursor-default">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-50 text-purple-500 flex items-center justify-center">
<iconify-icon icon="solar:gallery-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">hero_banner_v1.png</span>
<span className="text-xs text-neutral-400 hidden sm:block">Image</span>
</div>
</div>
</td>
<td className="px-6 py-3.5 text-sm text-neutral-500">4.8 MB</td>
<td className="px-6 py-3.5 text-sm text-neutral-500">Oct 22, 2023</td>
<td className="px-6 py-3.5 text-right">
<button className="text-neutral-300 hover:text-neutral-600 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<footer className="h-8 border-t border-neutral-100 flex items-center justify-between px-6 bg-neutral-50 text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Synced
                </div>
<div>
                    4 items selected
                </div>
</footer>
</main>
</div>

    </>
  );
}
