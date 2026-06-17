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
      

<header className="w-full max-w-7xl flex justify-between items-center mb-12 lg:mb-20">
<div className="text-sm font-medium tracking-tighter text-zinc-900 uppercase">
            Contextras
        </div>
<div className="text-xs text-zinc-400 font-medium tracking-wide uppercase">
            UI Storyboard
        </div>
</header>

<main className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch relative z-10">

<article className="bg-white rounded-2xl border border-zinc-200/80 p-8 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-sm hover:border-zinc-300 group">

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3 text-zinc-900">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200/60 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500">
<iconify-icon height="20" icon="solar:widget-add-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight">Flow</h2>
</div>
<span className="text-xs font-medium text-zinc-300">01</span>
</div>

<div className="flex-1 bg-zinc-50/50 rounded-xl border border-zinc-100 p-5 mb-8 flex flex-col gap-4 relative isolate">

<div className="w-1/3 h-1.5 bg-zinc-200 rounded-full mb-2"></div>
<div className="w-2/3 h-1.5 bg-zinc-100 rounded-full mb-4"></div>

<div className="flex gap-2 flex-wrap relative z-10">
<div className="text-xs font-medium bg-white border border-zinc-200/80 text-zinc-600 px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-sm hover:border-zinc-400 transition-colors cursor-default">
<iconify-icon icon="solar:mask-happly-linear" width="14"></iconify-icon> Genre
                    </div>
<div className="text-xs font-medium bg-white border border-zinc-200/80 text-zinc-600 px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-sm hover:border-zinc-400 transition-colors cursor-default">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="14"></iconify-icon> Characters
                    </div>
<div className="text-xs font-medium bg-white border border-zinc-200/80 text-zinc-600 px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-sm hover:border-zinc-400 transition-colors cursor-default">
<iconify-icon icon="solar:book-bookmark-linear" width="14"></iconify-icon> Themes
                    </div>
<div className="text-xs font-medium bg-zinc-900 border border-zinc-900 text-zinc-100 px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-sm cursor-default">
<iconify-icon icon="solar:bolt-linear" width="14"></iconify-icon> Conflict
                    </div>
</div>

<div className="mt-auto pt-6 border-t border-zinc-200/60 flex items-center justify-between text-zinc-400 w-full">
<div className="w-6 h-6 rounded border border-zinc-200 flex items-center justify-center bg-white"><iconify-icon icon="solar:pen-new-square-linear" width="14"></iconify-icon></div>
<div className="flex-1 h-px bg-zinc-200 mx-2"></div>
<div className="w-6 h-6 rounded border border-zinc-200 flex items-center justify-center bg-white"><iconify-icon icon="solar:document-text-linear" width="14"></iconify-icon></div>
</div>
</div>

<p className="text-sm text-zinc-500 leading-relaxed font-normal">
                It starts with <span className="text-zinc-900 font-medium">Flow</span>, a system that breaks storytelling into simple building blocks that help you shape your ideas from genre to characters to themes and conflict.
            </p>
</article>

<article className="bg-white rounded-2xl border border-zinc-200/80 p-8 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-sm hover:border-zinc-300 group">

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3 text-zinc-900">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200/60 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500">
<iconify-icon height="20" icon="solar:shop-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight">Store</h2>
</div>
<span className="text-xs font-medium text-zinc-300">02</span>
</div>

<div className="flex-1 bg-zinc-50/50 rounded-xl border border-zinc-100 p-5 mb-8 flex flex-col justify-center gap-5 relative isolate">

<div className="bg-white border border-zinc-200/80 rounded-xl p-5 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 text-green-500 opacity-20">
<iconify-icon height="48" icon="solar:graph-up-linear" width="48"></iconify-icon>
</div>
<div className="text-xs text-zinc-400 font-medium mb-2 uppercase tracking-widest relative z-10">Available Balance</div>
<div className="text-2xl font-medium tracking-tight text-zinc-900 flex items-baseline gap-1 relative z-10">
<span className="text-zinc-400 text-lg font-normal">$</span>1,240<span className="text-zinc-300 text-base">.00</span>
</div>
</div>

<div className="flex justify-between items-center text-xs px-2">
<div className="flex flex-col gap-1">
<span className="text-zinc-400">Direct Sales</span>
<span className="text-zinc-700 font-medium flex items-center gap-1.5"><iconify-icon icon="solar:user-circle-linear" width="14"></iconify-icon> Users</span>
</div>
<div className="h-6 w-px bg-zinc-200 mx-2"></div>
<div className="flex flex-col gap-1 text-right">
<span className="text-zinc-400">Platform</span>
<span className="text-zinc-700 font-medium flex items-center justify-end gap-1.5"><iconify-icon icon="solar:buildings-2-linear" width="14"></iconify-icon> Contextras</span>
</div>
</div>
</div>

<p className="text-sm text-zinc-500 leading-relaxed font-normal">
                Then there is <span className="text-zinc-900 font-medium">Store</span>, where your creativity can earn for you and where you can sell your work directly to users or even to Contextras itself.
            </p>
</article>

<article className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 flex flex-col h-full relative overflow-hidden transition-all duration-300 shadow-xl group">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zinc-800 rounded-full blur-3xl opacity-50 pointer-events-none transition-opacity duration-700 group-hover:opacity-80"></div>

<div className="flex items-center justify-between mb-8 relative z-10">
<div className="flex items-center gap-3 text-white">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 transition-transform duration-700 group-hover:rotate-180">
<iconify-icon height="20" icon="solar:refresh-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight">The Cycle</h2>
</div>
<span className="text-xs font-medium text-zinc-600">03</span>
</div>

<div className="flex-1 rounded-xl p-2 mb-8 flex flex-col justify-center relative z-10 min-h-[160px]">
<div className="relative w-full max-w-[240px] mx-auto">

<div className="absolute top-4 left-[10%] right-[10%] h-12 border-t border-r border-l border-zinc-700/50 rounded-t-2xl border-dashed"></div>

<div className="absolute bottom-4 left-[10%] right-[10%] h-12 border-b border-r border-l border-zinc-700/50 rounded-b-2xl border-dashed"></div>
<div className="flex justify-between items-center relative z-20">

<div className="bg-zinc-900 p-2 rounded-full z-10">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex flex-col items-center justify-center gap-0.5 text-zinc-300 shadow-inner">
<iconify-icon icon="solar:lightbulb-minimalistic-linear" width="16"></iconify-icon>
<span className="text-[0.6rem] uppercase tracking-wider text-zinc-500 font-medium">Flow</span>
</div>
</div>

<div className="w-2 h-2 rounded-full bg-zinc-700 hidden"></div>

<div className="bg-zinc-900 p-2 rounded-full z-10">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex flex-col items-center justify-center gap-0.5 text-zinc-900 shadow-[0_0_20px_rgba(255,255,255,0.15)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-zinc-100 opacity-50"></div>
<iconify-icon className="relative z-10" icon="solar:wallet-linear" width="16"></iconify-icon>
<span className="text-[0.6rem] uppercase tracking-wider text-zinc-500 font-medium relative z-10">Earn</span>
</div>
</div>
</div>
</div>

<div className="flex justify-between mt-6 text-xs px-2 relative z-10">
<span className="text-zinc-500">Inspiration &amp; Creation</span>
<span className="text-zinc-400">Discovery &amp; Recognition</span>
</div>
</div>

<p className="text-sm text-zinc-400 leading-relaxed font-normal relative z-10">
                Together, these create a complete cycle that takes you from inspiration to creation and from sharing to discovery and recognition, leading all the way to earning.
            </p>
</article>
</main>

    </>
  );
}
