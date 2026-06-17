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
      

<header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0a0a0a]/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:play-bold"></iconify-icon>
</div>
                MP4M
            </a>
<div className="hidden md:flex relative w-80 group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm group-focus-within:text-zinc-300 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-white/[0.03] border border-white/[0.08] rounded-md py-1.5 pl-9 pr-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:bg-white/[0.05] transition-all" placeholder="Search movies, series, or actors..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
<kbd className="hidden lg:inline-flex items-center justify-center px-1.5 py-0.5 border border-white/[0.08] rounded text-[10px] text-zinc-500 font-mono">⌘</kbd>
<kbd className="hidden lg:inline-flex items-center justify-center px-1.5 py-0.5 border border-white/[0.08] rounded text-[10px] text-zinc-500 font-mono">K</kbd>
</div>
</div>
<button className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<main className="flex-grow max-w-5xl mx-auto w-full px-4 md:px-6 py-8 md:py-12 space-y-12">

<div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4 flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 text-base flex-shrink-0" icon="solar:info-circle-linear"></iconify-icon>
<div>
<h3 className="text-sm font-medium text-indigo-300 mb-0.5">Domain Updated</h3>
<p className="text-xs text-indigo-400/80 leading-relaxed">Please bookmark our new primary domain to ensure uninterrupted access. Join our Telegram channel for the fastest updates and mirror links.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

<div className="md:col-span-8 space-y-6">
<div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
<h2 className="text-xl font-medium tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:clapperboard-play-linear"></iconify-icon>
                        Latest Uploads
                    </h2>
<div className="flex items-center gap-2 text-xs">
<button className="text-zinc-400 hover:text-white transition-colors">Movies</button>
<span className="text-zinc-700">/</span>
<button className="text-zinc-400 hover:text-white transition-colors">Series</button>
</div>
</div>
<div className="border border-white/[0.08] rounded-lg bg-white/[0.02] divide-y divide-white/[0.05] overflow-hidden">

<a className="group flex items-center justify-between p-3 sm:p-4 hover:bg-white/[0.04] transition-all duration-200" href="#">
<div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-4">
<div className="h-10 w-10 rounded-md border border-white/[0.08] bg-black/50 flex items-center justify-center flex-shrink-0 group-hover:border-white/[0.15] transition-colors">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" icon="solar:video-frame-linear"></iconify-icon>
</div>
<div className="min-w-0">
<h3 className="text-sm text-zinc-200 font-medium truncate group-hover:text-white transition-colors">Dune: Part Two (2024)</h3>
<div className="flex items-center gap-2 mt-1 text-xs text-zinc-500">
<span className="truncate">Dual Audio [Hindi + English]</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 flex-shrink-0">
<span className="hidden sm:inline-block text-xs text-zinc-500 font-mono tracking-tight">2.4 GB</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium tracking-wide bg-white/[0.05] text-zinc-400 border border-white/[0.08]">1080p WEB</span>
</div>
</a>

<a className="group flex items-center justify-between p-3 sm:p-4 hover:bg-white/[0.04] transition-all duration-200" href="#">
<div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-4">
<div className="h-10 w-10 rounded-md border border-white/[0.08] bg-black/50 flex items-center justify-center flex-shrink-0 group-hover:border-white/[0.15] transition-colors">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" icon="solar:video-frame-linear"></iconify-icon>
</div>
<div className="min-w-0">
<h3 className="text-sm text-zinc-200 font-medium truncate group-hover:text-white transition-colors">Shōgun S01E06</h3>
<div className="flex items-center gap-2 mt-1 text-xs text-zinc-500">
<span className="truncate">English with Subs • Series</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 flex-shrink-0">
<span className="hidden sm:inline-block text-xs text-zinc-500 font-mono tracking-tight">850 MB</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium tracking-wide bg-white/[0.05] text-zinc-400 border border-white/[0.08]">720p HDTV</span>
</div>
</a>

<a className="group flex items-center justify-between p-3 sm:p-4 hover:bg-white/[0.04] transition-all duration-200" href="#">
<div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-4">
<div className="h-10 w-10 rounded-md border border-white/[0.08] bg-black/50 flex items-center justify-center flex-shrink-0 group-hover:border-white/[0.15] transition-colors">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" icon="solar:video-frame-linear"></iconify-icon>
</div>
<div className="min-w-0">
<h3 className="text-sm text-zinc-200 font-medium truncate group-hover:text-white transition-colors">Animal (2023)</h3>
<div className="flex items-center gap-2 mt-1 text-xs text-zinc-500">
<span className="truncate">Hindi Original</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 flex-shrink-0">
<span className="hidden sm:inline-block text-xs text-zinc-500 font-mono tracking-tight">1.6 GB</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium tracking-wide bg-white/[0.05] text-zinc-400 border border-white/[0.08]">1080p Rip</span>
</div>
</a>

<a className="group flex items-center justify-between p-3 sm:p-4 hover:bg-white/[0.04] transition-all duration-200" href="#">
<div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-4">
<div className="h-10 w-10 rounded-md border border-white/[0.08] bg-black/50 flex items-center justify-center flex-shrink-0 group-hover:border-white/[0.15] transition-colors">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" icon="solar:video-frame-linear"></iconify-icon>
</div>
<div className="min-w-0">
<h3 className="text-sm text-zinc-200 font-medium truncate group-hover:text-white transition-colors">Godzilla x Kong: The New Empire</h3>
<div className="flex items-center gap-2 mt-1 text-xs text-zinc-500">
<span className="text-rose-400">CAM Audio</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="truncate">English</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 flex-shrink-0">
<span className="hidden sm:inline-block text-xs text-zinc-500 font-mono tracking-tight">900 MB</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium tracking-wide bg-rose-500/10 text-rose-400 border border-rose-500/20">HDTC</span>
</div>
</a>

<a className="group flex items-center justify-between p-3 sm:p-4 hover:bg-white/[0.04] transition-all duration-200" href="#">
<div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-4">
<div className="h-10 w-10 rounded-md border border-white/[0.08] bg-black/50 flex items-center justify-center flex-shrink-0 group-hover:border-white/[0.15] transition-colors">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" icon="solar:video-frame-linear"></iconify-icon>
</div>
<div className="min-w-0">
<h3 className="text-sm text-zinc-200 font-medium truncate group-hover:text-white transition-colors">Fighter (2024)</h3>
<div className="flex items-center gap-2 mt-1 text-xs text-zinc-500">
<span className="truncate">Hindi Original</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 flex-shrink-0">
<span className="hidden sm:inline-block text-xs text-zinc-500 font-mono tracking-tight">1.1 GB</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium tracking-wide bg-white/[0.05] text-zinc-400 border border-white/[0.08]">720p WEB</span>
</div>
</a>
</div>

<div className="flex items-center justify-between border-t border-white/[0.08] pt-6">
<button className="px-3 py-1.5 text-xs rounded-md border border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors flex items-center gap-1 opacity-50 cursor-not-allowed">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
                        Previous
                    </button>
<div className="hidden sm:flex items-center gap-1">
<button className="w-8 h-8 flex items-center justify-center text-xs rounded-md border border-white/[0.15] bg-white/[0.05] text-white">1</button>
<button className="w-8 h-8 flex items-center justify-center text-xs rounded-md border border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center text-xs rounded-md border border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors">3</button>
<span className="w-8 h-8 flex items-center justify-center text-xs text-zinc-600">...</span>
<button className="w-8 h-8 flex items-center justify-center text-xs rounded-md border border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors">84</button>
</div>
<button className="px-3 py-1.5 text-xs rounded-md border border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors flex items-center gap-1">
                        Next
                        <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="md:col-span-4 space-y-8">

<div>
<h2 className="text-sm font-medium tracking-tight text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon icon="solar:folder-with-files-linear"></iconify-icon>
                        Browse Folders
                    </h2>
<div className="flex flex-col gap-2">
<a className="group flex items-center justify-between p-2.5 rounded-md border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500 group-hover:text-indigo-400 transition-colors" icon="solar:folder-linear"></iconify-icon>
<span className="text-sm text-zinc-300 group-hover:text-white transition-colors">Bollywood Movies</span>
</div>
<span className="text-xs text-zinc-600 font-mono">1.2k</span>
</a>
<a className="group flex items-center justify-between p-2.5 rounded-md border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500 group-hover:text-indigo-400 transition-colors" icon="solar:folder-linear"></iconify-icon>
<span className="text-sm text-zinc-300 group-hover:text-white transition-colors">Hollywood Dubbed</span>
</div>
<span className="text-xs text-zinc-600 font-mono">854</span>
</a>
<a className="group flex items-center justify-between p-2.5 rounded-md border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500 group-hover:text-indigo-400 transition-colors" icon="solar:folder-linear"></iconify-icon>
<span className="text-sm text-zinc-300 group-hover:text-white transition-colors">Web Series</span>
</div>
<span className="text-xs text-zinc-600 font-mono">430</span>
</a>
<a className="group flex items-center justify-between p-2.5 rounded-md border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500 group-hover:text-indigo-400 transition-colors" icon="solar:folder-linear"></iconify-icon>
<span className="text-sm text-zinc-300 group-hover:text-white transition-colors">South Indian Hindi</span>
</div>
<span className="text-xs text-zinc-600 font-mono">612</span>
</a>
</div>
</div>

<div className="space-y-6">
<div>
<h2 className="text-sm font-medium tracking-tight text-zinc-400 uppercase tracking-wider mb-3">Release Year</h2>
<div className="flex flex-wrap gap-2">
<a className="px-2.5 py-1 text-xs rounded border border-white/[0.08] bg-white/[0.02] text-zinc-300 hover:bg-white text-zinc-300 hover:text-black hover:bg-white transition-colors" href="#">2024</a>
<a className="px-2.5 py-1 text-xs rounded border border-white/[0.08] bg-white/[0.02] text-zinc-300 hover:bg-white text-zinc-300 hover:text-black hover:bg-white transition-colors" href="#">2023</a>
<a className="px-2.5 py-1 text-xs rounded border border-white/[0.08] bg-white/[0.02] text-zinc-300 hover:bg-white text-zinc-300 hover:text-black hover:bg-white transition-colors" href="#">2022</a>
<a className="px-2.5 py-1 text-xs rounded border border-white/[0.08] bg-white/[0.02] text-zinc-300 hover:bg-white text-zinc-300 hover:text-black hover:bg-white transition-colors" href="#">2021</a>
<a className="px-2.5 py-1 text-xs rounded border border-transparent text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Older...</a>
</div>
</div>
<div>
<h2 className="text-sm font-medium tracking-tight text-zinc-400 uppercase tracking-wider mb-3">Quality</h2>
<div className="flex flex-wrap gap-2">
<a className="px-2.5 py-1 text-xs rounded border border-white/[0.08] bg-white/[0.02] text-zinc-300 hover:bg-white text-zinc-300 hover:text-black hover:bg-white transition-colors" href="#">4K UHD</a>
<a className="px-2.5 py-1 text-xs rounded border border-white/[0.08] bg-white/[0.02] text-zinc-300 hover:bg-white text-zinc-300 hover:text-black hover:bg-white transition-colors" href="#">1080p</a>
<a className="px-2.5 py-1 text-xs rounded border border-white/[0.08] bg-white/[0.02] text-zinc-300 hover:bg-white text-zinc-300 hover:text-black hover:bg-white transition-colors" href="#">720p</a>
<a className="px-2.5 py-1 text-xs rounded border border-white/[0.08] bg-white/[0.02] text-zinc-300 hover:bg-white text-zinc-300 hover:text-black hover:bg-white transition-colors" href="#">480p</a>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="mt-auto border-t border-white/[0.08] bg-black">
<div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-10">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="space-y-2">
<a className="text-base font-medium tracking-tighter text-white flex items-center gap-2" href="#">
                        MP4M
                    </a>
<p className="text-xs text-zinc-500 max-w-sm">An indexed directory of links found on the public internet. We do not host any files on our servers.</p>
</div>
<div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">DMCA Disclaimer</a>
<a className="hover:text-white transition-colors" href="#">Contact Us</a>
<a className="hover:text-white transition-colors" href="#">Request a Movie</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
