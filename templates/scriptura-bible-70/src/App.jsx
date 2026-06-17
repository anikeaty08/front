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
      

<header className="md:hidden h-14 border-b border-zinc-200 flex items-center justify-between px-4 bg-white z-20">
<div className="flex items-center gap-2">
<span className="iconify text-zinc-800" data-icon="lucide:book-open" data-width="20"></span>
<span className="font-semibold tracking-tight text-sm">SCRIPTURA</span>
</div>
<button className="p-2 text-zinc-500 hover:text-zinc-900">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</header>

<nav className="hidden md:flex w-64 flex-col justify-between border-r border-zinc-200 bg-zinc-50/50 pt-6 pb-4">
<div className="px-4 space-y-6">

<div className="flex items-center gap-2 px-2 mb-8 text-zinc-900">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<span className="font-serif italic font-bold text-xs">S</span>
</div>
<span className="font-semibold tracking-tight text-sm">Scriptura</span>
</div>

<div className="space-y-1">
<p className="px-2 text-[10px] uppercase tracking-wider font-semibold text-zinc-400 mb-2">Library</p>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md bg-white border border-zinc-200 shadow-sm text-zinc-900 text-sm font-medium" href="#">
<span className="iconify text-zinc-500" data-icon="lucide:book-open" data-width="16"></span>
                    Read
                </a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 text-sm font-medium transition-colors" href="#">
<span className="iconify" data-icon="lucide:headphones" data-width="16"></span>
                    Audio
                </a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 text-sm font-medium transition-colors" href="#">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
                    Search
                </a>
</div>
<div className="space-y-1">
<p className="px-2 text-[10px] uppercase tracking-wider font-semibold text-zinc-400 mb-2">My Study</p>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 text-sm font-medium transition-colors" href="#">
<span className="iconify" data-icon="lucide:highlighter" data-width="16"></span>
                    Highlights
                </a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 text-sm font-medium transition-colors" href="#">
<span className="iconify" data-icon="lucide:sticky-note" data-width="16"></span>
                    Notes
                </a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 text-sm font-medium transition-colors" href="#">
<span className="iconify" data-icon="lucide:bookmark" data-width="16"></span>
                    Bookmarks
                </a>
</div>
</div>

<div className="px-4 border-t border-zinc-200 pt-4">
<button className="flex items-center gap-3 w-full px-2 py-1.5 rounded-md hover:bg-zinc-100 transition-colors text-left group">
<div className="w-8 h-8 rounded-full bg-zinc-200 border border-zinc-300 flex items-center justify-center text-xs font-medium text-zinc-600">JD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-900 truncate">John Doe</p>
<p className="text-xs text-zinc-500 truncate">Free Plan</p>
</div>
<span className="iconify text-zinc-400 group-hover:text-zinc-600" data-icon="lucide:settings-2" data-width="16"></span>
</button>
</div>
</nav>

<main className="flex-1 flex flex-col h-[calc(100vh-3.5rem)] md:h-screen bg-white relative">

<div className="h-14 border-b border-zinc-100 flex items-center justify-between px-6 bg-white z-10">

<div className="flex items-center gap-2">
<button className="flex items-center gap-2 text-zinc-900 hover:bg-zinc-50 px-3 py-1.5 rounded-md transition-colors border border-transparent hover:border-zinc-200">
<span className="text-sm font-semibold tracking-tight">Genesis 1</span>
<span className="iconify text-zinc-400" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
<span className="text-zinc-300 text-sm">/</span>
<button className="text-zinc-500 hover:text-zinc-900 text-sm font-medium px-2 py-1 rounded hover:bg-zinc-50">
                    ESV
                </button>
</div>

<div className="flex items-center gap-1">

<div className="relative hidden lg:flex items-center mr-4">
<span className="iconify absolute left-2.5 text-zinc-400" data-icon="lucide:search" data-width="14"></span>
<input className="pl-8 pr-3 py-1.5 text-sm bg-zinc-50 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-100 focus:border-zinc-300 w-64 placeholder:text-zinc-400" placeholder="Search verses..." type="text"/>
</div>
<button className="p-2 text-zinc-400 hover:text-zinc-900 rounded-md hover:bg-zinc-50 transition-colors" title="Display Settings">
<span className="iconify" data-icon="lucide:type" data-width="18"></span>
</button>
<button className="p-2 text-zinc-400 hover:text-zinc-900 rounded-md hover:bg-zinc-50 transition-colors" title="Toggle Sidebar">
<span className="iconify" data-icon="lucide:panel-right-open" data-width="18"></span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto relative">
<div className="max-w-3xl mx-auto pt-12 pb-32 px-6 md:px-12">

<div className="text-center mb-16">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4 font-serif">The Beginning</h1>
<p className="text-zinc-400 text-sm font-medium tracking-widest uppercase">Genesis Chapter 1</p>
</div>

<article className="font-serif text-lg md:text-xl leading-8 md:leading-9 text-zinc-800 space-y-6">
<p>
<span className="text-xs font-bold text-zinc-400 align-top mr-1 select-none">1</span>
                        In the beginning, God created the heavens and the earth. 
                        <span className="text-xs font-bold text-zinc-400 align-top mr-1 select-none">2</span>
                        The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.
                    </p>
<p>
<span className="text-xs font-bold text-zinc-400 align-top mr-1 select-none">3</span>
                        And God said, <span className="text-red-900/80">“Let there be light,”</span> and there was light.
                        <span className="text-xs font-bold text-zinc-400 align-top mr-1 select-none">4</span>
                        And God saw that the light was good. And God separated the light from the darkness.
                        <span className="text-xs font-bold text-zinc-400 align-top mr-1 select-none">5</span>
                        God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.
                    </p>
<p className="relative group cursor-pointer rounded-md transition-colors">

<span className="absolute -left-6 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-zinc-300" data-icon="lucide:more-horizontal" data-width="16"></span>
</span>
<span className="text-xs font-bold text-zinc-400 align-top mr-1 select-none">6</span>
<span className="bg-yellow-50/80 decoration-yellow-200/50 underline decoration-2 underline-offset-4">And God said, <span className="text-red-900/80">“Let there be an expanse in the midst of the waters, and let it separate the waters from the waters.”</span></span>
<span className="text-xs font-bold text-zinc-400 align-top mr-1 select-none">7</span>
                        And God made the expanse and separated the waters that were under the expanse from the waters that were above the expanse. And it was so.
                        <span className="text-xs font-bold text-zinc-400 align-top mr-1 select-none">8</span>
                        And God called the expanse Heaven. And there was evening and there was morning, the second day.
                    </p>
<p>
<span className="text-xs font-bold text-zinc-400 align-top mr-1 select-none">9</span>
                        And God said, <span className="text-red-900/80">“Let the waters under the heavens be gathered together into one place, and let the dry land appear.”</span> And it was so.
                        <span className="text-xs font-bold text-zinc-400 align-top mr-1 select-none">10</span>
                        God called the dry land Earth, and the waters that were gathered together he called Seas. And God saw that it was good.
                    </p>
<p>
<span className="text-xs font-bold text-zinc-400 align-top mr-1 select-none">11</span>
                        And God said, <span className="text-red-900/80">“Let the earth sprout vegetation, plants yielding seed, and fruit trees bearing fruit in which is their seed, each according to its kind, on the earth.”</span> And it was so.
                    </p>
</article>

<div className="flex justify-between items-center mt-20 pt-8 border-t border-zinc-100">
<button className="text-zinc-400 hover:text-zinc-900 flex items-center gap-2 text-sm font-medium transition-colors disabled:opacity-50" disabled="">
<span className="iconify" data-icon="lucide:arrow-left" data-width="16"></span>
                        Previous
                    </button>
<div className="h-1 w-1 bg-zinc-200 rounded-full"></div>
<button className="text-zinc-900 hover:text-zinc-700 flex items-center gap-2 text-sm font-medium transition-colors">
                        Next Chapter
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-lg px-4">
<div className="bg-zinc-900/95 backdrop-blur shadow-xl rounded-2xl p-3 flex items-center gap-4 border border-zinc-800 ring-1 ring-white/10">

<button className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-zinc-200 transition-colors group">
<span className="iconify text-zinc-900 ml-0.5" data-icon="lucide:play" data-width="18" style={{fill: 'currentColor'}}></span>
</button>

<div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
<div className="flex justify-between items-end">
<span className="text-xs font-semibold text-zinc-100 truncate">Genesis 1</span>
<span className="text-[10px] font-medium text-zinc-400 tabular-nums">1:24 / 4:12</span>
</div>

<div className="h-1 bg-zinc-700 rounded-full w-full relative group cursor-pointer">
<div className="absolute top-0 left-0 h-full w-[33%] bg-white rounded-full"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[33%] w-3 h-3 bg-white rounded-full shadow scale-0 group-hover:scale-100 transition-transform"></div>
</div>
</div>

<div className="flex items-center gap-2">
<button className="p-1.5 text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:rewind-15" data-width="18"></span>
</button>
<button className="p-1.5 text-zinc-400 hover:text-white transition-colors text-xs font-semibold w-8 text-center">
                        1x
                    </button>
</div>
</div>
</div>
</main>

<aside className="hidden xl:flex w-80 flex-col border-l border-zinc-200 bg-white">

<div className="flex border-b border-zinc-100">
<button className="flex-1 py-3 text-xs font-semibold tracking-wide text-zinc-900 border-b-2 border-zinc-900">Study</button>
<button className="flex-1 py-3 text-xs font-semibold tracking-wide text-zinc-400 hover:text-zinc-600">Comm.</button>
<button className="flex-1 py-3 text-xs font-semibold tracking-wide text-zinc-400 hover:text-zinc-600">Media</button>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-6">

<div>
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Cross References</h3>
<div className="space-y-3">
<div className="p-3 rounded-lg border border-zinc-100 bg-zinc-50/50 hover:border-zinc-200 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-semibold text-zinc-900">John 1:1</span>
<span className="iconify text-zinc-300 group-hover:text-zinc-500" data-icon="lucide:arrow-up-right" data-width="12"></span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
                            In the beginning was the Word, and the Word was with God, and the Word was God.
                        </p>
</div>
<div className="p-3 rounded-lg border border-zinc-100 bg-zinc-50/50 hover:border-zinc-200 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-semibold text-zinc-900">Hebrews 11:3</span>
<span className="iconify text-zinc-300 group-hover:text-zinc-500" data-icon="lucide:arrow-up-right" data-width="12"></span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
                            By faith we understand that the universe was created by the word of God...
                        </p>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Key Insight</h3>
<div className="bg-blue-50/50 border border-blue-100 p-4 rounded-lg">
<div className="flex gap-2 mb-2">
<span className="iconify text-blue-600" data-icon="lucide:sparkles" data-width="14"></span>
<span className="text-xs font-semibold text-blue-900">Elohim</span>
</div>
<p className="text-xs text-blue-800/80 leading-relaxed">
                        The Hebrew word used here for God is "Elohim," a plural noun that is treated as singular, hinting at the complexity and majesty of the Creator.
                    </p>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">My Notes</h3>
<div className="relative">
<textarea className="w-full h-32 p-3 text-sm text-zinc-700 bg-white border border-zinc-200 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-zinc-300 focus:border-zinc-300 placeholder:text-zinc-300" placeholder="Add a note for Genesis 1..."></textarea>
<button className="absolute bottom-2 right-2 p-1.5 bg-zinc-900 text-white rounded hover:bg-zinc-800 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
</button>
</div>
</div>
</div>
</aside>

<nav className="md:hidden h-16 bg-white border-t border-zinc-200 flex justify-around items-center px-2 z-20">
<a className="flex flex-col items-center gap-1 p-2 text-zinc-900" href="#">
<span className="iconify" data-icon="lucide:book-open" data-width="20"></span>
<span className="text-[10px] font-medium">Read</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-zinc-400" href="#">
<span className="iconify" data-icon="lucide:search" data-width="20"></span>
<span className="text-[10px] font-medium">Search</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-zinc-400" href="#">
<span className="iconify" data-icon="lucide:headphones" data-width="20"></span>
<span className="text-[10px] font-medium">Audio</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-zinc-400" href="#">
<span className="iconify" data-icon="lucide:user" data-width="20"></span>
<span className="text-[10px] font-medium">Profile</span>
</a>
</nav>

    </>
  );
}
