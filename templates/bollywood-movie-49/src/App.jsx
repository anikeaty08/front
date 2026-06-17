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
      

<header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60">
<div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tighter text-white uppercase font-sans" href="#">DIR.</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-zinc-300 hover:text-white transition font-sans" href="#">Home</a>
<a className="text-sm text-white font-medium transition font-sans" href="#">Bollywood</a>
<a className="text-sm text-zinc-400 hover:text-white transition font-sans" href="#">Hollywood</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 w-64 lg:w-80 transition focus-within:border-zinc-700">
<iconify-icon className="text-zinc-500 mr-2" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm text-zinc-200 w-full placeholder-zinc-500" placeholder="Search Bollywood movies..." type="text"/>
</div>
<button className="text-zinc-400 hover:text-white md:hidden">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-6 lg:gap-10 px-4 py-6">

<aside className="w-full md:w-56 shrink-0">
<div className="sticky top-20">
<h2 className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-wider pl-1 font-sans">Bollywood Folders</h2>
<nav className="flex flex-row md:flex-col gap-1.5 overflow-x-auto pb-4 md:pb-0 scrollbar-hide" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 transition whitespace-nowrap shadow-sm" href="#">
<iconify-icon className="text-zinc-300" icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm font-medium font-sans">2026 Movies</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900 border border-transparent hover:border-zinc-800 text-zinc-400 hover:text-zinc-200 transition whitespace-nowrap" href="#">
<iconify-icon className="text-zinc-500" icon="solar:folder-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm font-medium font-sans">2025 Movies</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900 border border-transparent hover:border-zinc-800 text-zinc-400 hover:text-zinc-200 transition whitespace-nowrap" href="#">
<iconify-icon className="text-zinc-500" icon="solar:folder-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm font-medium font-sans">2024 Movies</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900 border border-transparent hover:border-zinc-800 text-zinc-400 hover:text-zinc-200 transition whitespace-nowrap" href="#">
<iconify-icon className="text-zinc-500" icon="solar:folder-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm font-medium font-sans">2023 Movies</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900 border border-transparent hover:border-zinc-800 text-zinc-400 hover:text-zinc-200 transition whitespace-nowrap" href="#">
<iconify-icon className="text-zinc-500" icon="solar:folder-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm font-medium font-sans">2022 Movies</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900 border border-transparent hover:border-zinc-800 text-zinc-400 hover:text-zinc-200 transition whitespace-nowrap" href="#">
<iconify-icon className="text-zinc-500" icon="solar:folder-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm font-medium font-sans">2021 Movies</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900 border border-transparent hover:border-zinc-800 text-zinc-400 hover:text-zinc-200 transition whitespace-nowrap" href="#">
<iconify-icon className="text-zinc-500" icon="solar:folder-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm font-medium font-sans">2020 Movies</span>
</a>
</nav>
</div>
</aside>

<main className="flex-1 min-w-0">

<div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden mb-8 group border border-zinc-800/80 bg-zinc-900">
<img alt="Featured" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition duration-700" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&amp;fit=crop&amp;q=80&amp;w=1200&amp;h=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5 md:p-8 w-full max-w-2xl">
<div className="flex items-center gap-3 mb-3">
<span className="px-2 py-0.5 rounded text-xs font-medium bg-white text-zinc-950 font-sans">Featured</span>
<div className="flex items-center gap-1.5 text-xs text-zinc-300 font-medium">
<iconify-icon icon="solar:folder-linear" width="14"></iconify-icon>
<span className="font-sans">Bollywood All-Time Blockbusters</span>
</div>
</div>
<h1 className="text-2xl md:text-3xl text-white tracking-tight mb-4 font-google-sans-flex font-normal">Spy Universe Collection</h1>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-zinc-200 transition font-sans">
<iconify-icon icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Open Directory
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-zinc-800/80 backdrop-blur border border-zinc-700 text-white rounded-md text-sm font-medium hover:bg-zinc-700 transition font-sans">
<iconify-icon icon="solar:link-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Copy Link
                        </button>
</div>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-4 mb-5 border-b border-zinc-800/50 pb-4">
<h2 className="text-lg font-medium tracking-tight text-zinc-100 flex items-center gap-2 font-sans">
<iconify-icon className="text-zinc-500" icon="solar:folder-with-files-linear"></iconify-icon>
                    Index of /Bollywood/All/
                </h2>
<div className="flex items-center gap-2 text-sm text-zinc-400">
<span className="font-sans">Sort by:</span>
<select className="bg-transparent text-white border-none outline-none font-medium cursor-pointer" style={{WebkitAppearance: 'none'}}>
<option className="bg-zinc-900 font-sans">Year</option>
<option className="bg-zinc-900 font-sans">Name</option>
<option className="bg-zinc-900 font-sans">Size</option>
</select>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">

<a className="group flex flex-col gap-2.5 bg-zinc-900/30 p-2 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition" href="#">
<div className="relative aspect-[2/3] rounded-md overflow-hidden border border-zinc-800 bg-zinc-900">
<img alt="Poster" className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=600"/>
<div className="absolute top-2 left-2 bg-zinc-950/80 backdrop-blur px-1.5 py-0.5 rounded text-[0.65rem] font-medium text-zinc-300 border border-zinc-700/50 flex items-center gap-1 font-sans">
<iconify-icon icon="solar:folder-linear" width="10"></iconify-icon> Dir
                        </div>
<div className="absolute top-2 right-2 bg-zinc-100 px-1.5 py-0.5 rounded text-[0.65rem] font-medium text-zinc-900 font-sans">1080p</div>
</div>
<div className="px-1">
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white line-clamp-1 font-sans">Tiger vs Pathaan (2026)</h3>
<div className="flex items-center text-xs text-zinc-500 mt-1 gap-2">
<span className="font-sans">2.4 GB</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="font-sans">MP4</span>
</div>
</div>
</a>

<a className="group flex flex-col gap-2.5 bg-zinc-900/30 p-2 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition" href="#">
<div className="relative aspect-[2/3] rounded-md overflow-hidden border border-zinc-800 bg-zinc-900">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
<iconify-icon className="text-zinc-700" icon="solar:video-frame-linear" width="32"></iconify-icon>
</div>
<div className="absolute top-2 left-2 bg-zinc-950/80 backdrop-blur px-1.5 py-0.5 rounded text-[0.65rem] font-medium text-zinc-300 border border-zinc-700/50 flex items-center gap-1 font-sans">
<iconify-icon icon="solar:folder-linear" width="10"></iconify-icon> Dir
                        </div>
<div className="absolute top-2 right-2 bg-zinc-800 border border-zinc-600 px-1.5 py-0.5 rounded text-[0.65rem] font-medium text-zinc-200 font-sans">720p</div>
</div>
<div className="px-1">
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white line-clamp-1 font-sans">War 2 (2025)</h3>
<div className="flex items-center text-xs text-zinc-500 mt-1 gap-2">
<span className="font-sans">1.1 GB</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="font-sans">MKV</span>
</div>
</div>
</a>

<a className="group flex flex-col gap-2.5 bg-zinc-900/30 p-2 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition" href="#">
<div className="relative aspect-[2/3] rounded-md overflow-hidden border border-zinc-800 bg-zinc-900">
<img alt="Poster" className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-2 left-2 bg-zinc-950/80 backdrop-blur px-1.5 py-0.5 rounded text-[0.65rem] font-medium text-zinc-300 border border-zinc-700/50 flex items-center gap-1 font-sans">
<iconify-icon icon="solar:folder-linear" width="10"></iconify-icon> Dir
                        </div>
<div className="absolute top-2 right-2 bg-zinc-100 px-1.5 py-0.5 rounded text-[0.65rem] font-medium text-zinc-900 font-sans">4K HDR</div>
</div>
<div className="px-1">
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white line-clamp-1 font-sans">Fighter (2024)</h3>
<div className="flex items-center text-xs text-zinc-500 mt-1 gap-2">
<span className="font-sans">5.8 GB</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="font-sans">MP4</span>
</div>
</div>
</a>

<a className="group flex flex-col gap-2.5 bg-zinc-900/30 p-2 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition" href="#">
<div className="relative aspect-[2/3] rounded-md overflow-hidden border border-zinc-800 bg-zinc-900">
<div className="absolute inset-0 bg-gradient-to-bl from-zinc-800 to-zinc-900 flex items-center justify-center">
<iconify-icon className="text-zinc-700" icon="solar:gallery-linear" width="32"></iconify-icon>
</div>
<div className="absolute top-2 left-2 bg-zinc-950/80 backdrop-blur px-1.5 py-0.5 rounded text-[0.65rem] font-medium text-zinc-300 border border-zinc-700/50 flex items-center gap-1 font-sans">
<iconify-icon icon="solar:folder-linear" width="10"></iconify-icon> Dir
                        </div>
<div className="absolute top-2 right-2 bg-zinc-100 px-1.5 py-0.5 rounded text-[0.65rem] font-medium text-zinc-900 font-sans">1080p</div>
</div>
<div className="px-1">
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white line-clamp-1 font-sans">Jawan (2023)</h3>
<div className="flex items-center text-xs text-zinc-500 mt-1 gap-2">
<span className="font-sans">2.1 GB</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="font-sans">MP4</span>
</div>
</div>
</a>

<a className="group flex flex-col gap-2.5 bg-zinc-900/30 p-2 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition" href="#">
<div className="relative aspect-[2/3] rounded-md overflow-hidden border border-zinc-800 bg-zinc-900">
<img alt="Poster" className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=600"/>
<div className="absolute top-2 left-2 bg-zinc-950/80 backdrop-blur px-1.5 py-0.5 rounded text-[0.65rem] font-medium text-zinc-300 border border-zinc-700/50 flex items-center gap-1 font-sans">
<iconify-icon icon="solar:folder-linear" width="10"></iconify-icon> Dir
                        </div>
<div className="absolute top-2 right-2 bg-zinc-800 border border-zinc-600 px-1.5 py-0.5 rounded text-[0.65rem] font-medium text-zinc-200 font-sans">720p</div>
</div>
<div className="px-1">
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white line-clamp-1 font-sans">Brahmastra: Part One (2022)</h3>
<div className="flex items-center text-xs text-zinc-500 mt-1 gap-2">
<span className="font-sans">950 MB</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="font-sans">MKV</span>
</div>
</div>
</a>

<a className="group flex flex-col gap-2.5 bg-zinc-900/30 p-2 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition" href="#">
<div className="relative aspect-[2/3] rounded-md overflow-hidden border border-zinc-800 bg-zinc-900">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 flex items-center justify-center">
<iconify-icon className="text-zinc-700" icon="solar:document-text-linear" width="32"></iconify-icon>
</div>
<div className="absolute top-2 left-2 bg-zinc-950/80 backdrop-blur px-1.5 py-0.5 rounded text-[0.65rem] font-medium text-zinc-300 border border-zinc-700/50 flex items-center gap-1 font-sans">
<iconify-icon icon="solar:folder-linear" width="10"></iconify-icon> Dir
                        </div>
<div className="absolute top-2 right-2 bg-zinc-100 px-1.5 py-0.5 rounded text-[0.65rem] font-medium text-zinc-900 font-sans">1080p</div>
</div>
<div className="px-1">
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white line-clamp-1 font-sans">Tanhaji: The Unsung Warrior (2020)</h3>
<div className="flex items-center text-xs text-zinc-500 mt-1 gap-2">
<span className="font-sans">1.8 GB</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="font-sans">MP4</span>
</div>
</div>
</a>
</div>

<div className="mt-8 flex justify-center">
<button className="px-4 py-2 bg-transparent border border-zinc-800 text-zinc-300 rounded-md text-sm font-medium hover:bg-zinc-900 hover:text-white transition flex items-center gap-2 font-sans">
<iconify-icon icon="solar:refresh-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Load More Folders
                </button>
</div>
</main>
</div>

    </>
  );
}
