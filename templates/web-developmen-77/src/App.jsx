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



      document.getElementById('sidebarToggle').addEventListener('click', () => {
          const sidebar = document.getElementById('sidebar');
          if (window.innerWidth >= 1024) {
              sidebar.classList.toggle('lg:flex');
              sidebar.classList.toggle('lg:hidden');
          } else {
              sidebar.classList.toggle('hidden');
              sidebar.classList.toggle('flex');
          }
      });
    
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
      

<header className="h-14 bg-white border-b border-zinc-200 flex items-center justify-between px-4 lg:px-6 shrink-0 z-20">

<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-900 flex items-center justify-center p-1 -ml-1 rounded-md transition-colors cursor-pointer" id="sidebarToggle">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<a className="font-semibold text-lg tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-zinc-900 text-white rounded-md flex items-center justify-center text-sm">
            LA
          </div>
</a>
<div className="h-4 w-px bg-zinc-200 hidden sm:block"></div>
<div className="hidden sm:flex flex-col">
<span className="text-xs font-medium text-zinc-500">Course</span>
<h1 className="text-sm font-medium text-zinc-900 truncate max-w-[200px] md:max-w-xs">
            Web Development Bootcamp
          </h1>
</div>
</div>

<div className="flex items-center gap-6">
<div className="items-center gap-3 hidden md:flex">
<div className="text-xs font-medium text-zinc-500">60%</div>
<div className="w-32 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
<div className="bg-zinc-900 h-full rounded-full transition-all duration-500" style={{width: '60%'}}></div>
</div>
</div>
<div className="h-4 w-px bg-zinc-200 hidden md:block"></div>
<button className="flex items-center gap-2 group">
<div className="w-8 h-8 bg-zinc-100 border border-zinc-200 rounded-full flex items-center justify-center text-xs font-medium text-zinc-600 group-hover:bg-zinc-200 transition-colors">
            SA
          </div>
</button>
</div>
</header>

<div className="flex flex-1 overflow-hidden relative">

<aside className="w-80 border-r border-zinc-200 bg-white flex-col hidden lg:flex shrink-0 z-10 absolute lg:relative h-full shadow-2xl lg:shadow-none" id="sidebar">
<div className="p-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
<h2 className="text-sm font-semibold tracking-tight">Curriculum</h2>
<span className="text-xs font-medium text-zinc-500">9/15 completed</span>
</div>
<div className="flex-1 overflow-y-auto pb-8">

<div className="border-b border-zinc-100">
<button className="w-full flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors">
<div className="flex flex-col items-start gap-1">
<span className="text-xs font-medium text-zinc-500 tracking-tight uppercase">
                  Module 1
                </span>
<span className="text-sm font-medium text-zinc-900 text-left">
                  HTML &amp; CSS Foundations
                </span>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-up-linear"></iconify-icon>
</button>
<div className="flex flex-col pb-2">

<a className="group relative flex items-start gap-3 py-2.5 pl-4 pr-4 bg-zinc-50 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-zinc-900" href="#">
<div className="mt-0.5 shrink-0 flex items-center justify-center w-5 h-5">
<iconify-icon className="text-zinc-900 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex-1 flex flex-col min-w-0">
<span className="text-sm font-medium text-zinc-900 truncate">
                    Introduction to HTML
                  </span>
<span className="text-xs text-zinc-500 flex items-center gap-1.5 mt-0.5">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
                    20 min
                  </span>
</div>
</a>

<a className="group flex items-start gap-3 py-2.5 px-4 hover:bg-zinc-50/50 transition-colors" href="#">
<div className="mt-0.5 shrink-0 flex items-center justify-center w-5 h-5">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-600 text-lg transition-colors" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex-1 flex flex-col min-w-0">
<span className="text-sm font-medium text-zinc-600 truncate group-hover:text-zinc-900 transition-colors">
                    HTML Forms &amp; Tables
                  </span>
<span className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
                    25 min
                  </span>
</div>
</a>

<a className="group flex items-start gap-3 py-2.5 px-4 hover:bg-zinc-50/50 transition-colors" href="#">
<div className="mt-0.5 shrink-0 flex items-center justify-center w-5 h-5">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-600 text-lg transition-colors" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex-1 flex flex-col min-w-0">
<span className="text-sm font-medium text-zinc-600 truncate group-hover:text-zinc-900 transition-colors">
                    CSS Selectors &amp; Properties
                  </span>
<span className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
                    30 min
                  </span>
</div>
</a>

<a className="group flex items-start gap-3 py-2.5 px-4 hover:bg-zinc-50/50 transition-colors" href="#">
<div className="mt-0.5 shrink-0 flex items-center justify-center w-5 h-5">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-600 text-lg transition-colors" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex-1 flex flex-col min-w-0">
<span className="text-sm font-medium text-zinc-600 truncate group-hover:text-zinc-900 transition-colors">
                    Responsive Design
                  </span>
<span className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
                    35 min
                  </span>
</div>
</a>
</div>
</div>

<div className="border-b border-zinc-100">
<button className="w-full flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors">
<div className="flex flex-col items-start gap-1">
<span className="text-xs font-medium text-zinc-500 tracking-tight uppercase">
                  Module 2
                </span>
<span className="text-sm font-medium text-zinc-900 text-left">
                  JavaScript Essentials
                </span>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>

<div className="border-b border-zinc-100">
<button className="w-full flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors">
<div className="flex flex-col items-start gap-1">
<span className="text-xs font-medium text-zinc-500 tracking-tight uppercase">
                  Module 3
                </span>
<span className="text-sm font-medium text-zinc-900 text-left">
                  React Fundamentals
                </span>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>

<div className="border-b border-zinc-100">
<button className="w-full flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors">
<div className="flex flex-col items-start gap-1">
<span className="text-xs font-medium text-zinc-500 tracking-tight uppercase">
                  Module 4
                </span>
<span className="text-sm font-medium text-zinc-900 text-left text-zinc-400">
                  Backend with Laravel
                </span>
</div>
<iconify-icon className="text-zinc-300" icon="solar:lock-keyhole-linear"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 bg-white overflow-y-auto relative">
<div className="max-w-4xl mx-auto w-full px-4 py-8 md:px-8 lg:py-12">

<div className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
<a className="hover:text-zinc-900 transition-colors" href="#">Course</a>
<iconify-icon className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="truncate">HTML &amp; CSS Foundations</span>
</div>

<div className="mb-8">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-3">
              Introduction to HTML
            </h1>
<div className="flex items-center gap-4 text-sm text-zinc-500">
<span className="flex items-center gap-1.5 bg-zinc-100 px-2 py-1 rounded-md text-zinc-700 font-medium text-xs">
<iconify-icon className="text-sm" icon="solar:play-circle-linear"></iconify-icon>
                Video
              </span>
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                20 min
              </span>
<span className="flex items-center gap-1.5 text-green-600 bg-green-50 px-2 py-1 rounded-md text-xs font-medium">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
                Completed
              </span>
</div>
</div>

<div className="w-full aspect-video bg-zinc-950 rounded-xl overflow-hidden relative flex items-center justify-center group cursor-pointer shadow-sm border border-zinc-200/50 mb-8">

<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 opacity-80"></div>

<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:scale-105 group-hover:bg-white/20 transition-all z-10">
<iconify-icon className="text-2xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>

<div className="absolute bottom-0 inset-x-0 p-4 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-gradient-to-t from-black/60 to-transparent pt-12">
<button className="text-white hover:text-zinc-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:pause-bold"></iconify-icon>
</button>
<div className="h-1.5 flex-1 bg-white/20 rounded-full overflow-hidden cursor-pointer relative">
<div className="h-full bg-white w-full rounded-full absolute top-0 left-0"></div>
</div>
<div className="text-xs text-white font-medium tracking-wide">
                20:00 / 20:00
              </div>
<button className="text-white hover:text-zinc-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:full-screen-linear"></iconify-icon>
</button>
</div>
</div>

<div className="prose prose-zinc max-w-none text-zinc-600 text-sm md:text-base leading-relaxed mb-12">
<p>
              Learn the basics of HTML document structure, elements, and
              semantic markup.
            </p>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-zinc-200">

<button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium text-zinc-400 cursor-not-allowed w-full sm:w-auto" disabled="">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
              Previous
            </button>

<button className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-md text-sm font-medium bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50 transition-colors shadow-sm w-full sm:w-auto">
<iconify-icon className="text-lg text-green-600" icon="solar:check-circle-linear"></iconify-icon>
              Completed
            </button>

<a className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors w-full sm:w-auto" href="#">
              Next
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<a className="mt-8 block bg-zinc-50 border border-zinc-200 rounded-xl p-5 hover:border-zinc-300 transition-colors group" href="#">
<div className="flex items-center justify-between gap-4">
<div>
<span className="text-xs font-medium text-zinc-500 mb-1 block">
                  Up Next
                </span>
<h3 className="text-base font-semibold text-zinc-900 group-hover:text-black transition-colors">
                  HTML Forms &amp; Tables
                </h3>
</div>
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 group-hover:scale-105 transition-transform shrink-0 shadow-sm">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>
</div>
</main>
</div>


    </>
  );
}
