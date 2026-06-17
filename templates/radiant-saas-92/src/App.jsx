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



        lucide.createIcons();
        
        // Mobile menu functionality
        const openMenuBtn = document.getElementById('open-menu');
        const closeMenuBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuPanel = document.getElementById('mobile-menu-panel');

        function openMenu() {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenuPanel.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-4');
        }

        function closeMenu() {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            mobileMenuPanel.classList.add('opacity-0', 'pointer-events-none', '-translate-y-4');
        }

        openMenuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        mobileMenu.addEventListener('click', closeMenu);
    
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
      
<main className="p-3 md:p-5 flex-1 flex flex-col relative">

<div className="relative flex-1 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-purple-200 via-blue-50 to-emerald-200">

<div className="h-6 md:h-8"></div>

<header className="relative border-y border-black/10 flex h-16 md:h-20 md:px-8 lg:px-16">

<div className="flex items-center justify-between w-full md:w-auto px-6 md:px-8 md:border-x border-black/10 relative h-full shrink-0">

<svg className="hidden md:block absolute -top-[5.5px] -left-[5.5px] w-[11px] h-[11px] text-black/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 10 10"><path d="M5 0v10M0 5h10"></path></svg>
<svg className="hidden md:block absolute -bottom-[5.5px] -left-[5.5px] w-[11px] h-[11px] text-black/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 10 10"><path d="M5 0v10M0 5h10"></path></svg>
<svg className="hidden md:block absolute -top-[5.5px] -right-[5.5px] w-[11px] h-[11px] text-black/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 10 10"><path d="M5 0v10M0 5h10"></path></svg>
<svg className="hidden md:block absolute -bottom-[5.5px] -right-[5.5px] w-[11px] h-[11px] text-black/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 10 10"><path d="M5 0v10M0 5h10"></path></svg>
<a className="flex items-center gap-2.5" href="#">
<i className="w-6 h-6 text-neutral-900" data-lucide="audio-lines" strokeWidth="1.5"></i>
<span className="text-xl font-medium tracking-tight">Aisling AI</span>
</a>

<button className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 opacity-80 hover:opacity-100 transition-opacity" id="open-menu">
<span className="w-5 h-[1.5px] bg-neutral-900 rounded-full"></span>
<span className="w-5 h-[1.5px] bg-neutral-900 rounded-full"></span>
</button>
</div>

<div className="hidden md:flex items-center px-8 border-r border-black/10 relative h-full shrink-0">
<svg className="absolute -top-[5.5px] -right-[5.5px] w-[11px] h-[11px] text-black/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 10 10"><path d="M5 0v10M0 5h10"></path></svg>
<svg className="absolute -bottom-[5.5px] -right-[5.5px] w-[11px] h-[11px] text-black/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 10 10"><path d="M5 0v10M0 5h10"></path></svg>
<a className="bg-black/5 hover:bg-black/10 transition-colors text-neutral-700 text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5" href="#">
<span>Aisling AI partners with Enterprise Ireland</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="hidden md:block flex-1"></div>

<div className="hidden md:flex items-center px-8 md:border-x border-black/10 relative h-full shrink-0 gap-8">
<svg className="absolute -top-[5.5px] -left-[5.5px] w-[11px] h-[11px] text-black/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 10 10"><path d="M5 0v10M0 5h10"></path></svg>
<svg className="absolute -bottom-[5.5px] -left-[5.5px] w-[11px] h-[11px] text-black/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 10 10"><path d="M5 0v10M0 5h10"></path></svg>
<svg className="absolute -top-[5.5px] -right-[5.5px] w-[11px] h-[11px] text-black/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 10 10"><path d="M5 0v10M0 5h10"></path></svg>
<svg className="absolute -bottom-[5.5px] -right-[5.5px] w-[11px] h-[11px] text-black/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 10 10"><path d="M5 0v10M0 5h10"></path></svg>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Pricing</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Company</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Blog</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Login</a>
</div>
</header>

<div className="pt-20 pb-28 md:pt-36 md:pb-48 md:px-8 lg:px-16">

<div className="px-6 md:px-8">
<div className="max-w-4xl">

<h1 className="hidden md:block text-8xl lg:text-9xl font-medium tracking-tight text-neutral-900 leading-none">
                            Close every deal.
                        </h1>

<h1 className="md:hidden text-6xl font-medium tracking-tight text-neutral-900 leading-[1.05]">
                            Close<br/>every deal.
                        </h1>
<p className="mt-6 md:mt-8 text-lg md:text-xl text-neutral-800 leading-relaxed font-normal max-w-sm md:max-w-2xl">
                            Aisling AI helps you sell more by deploying autonomous voice agents that sound just like your best reps.
                        </p>

<div className="mt-8 md:mt-10 flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-auto">
<a className="w-full md:w-auto inline-flex justify-center items-center bg-neutral-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors" href="#">
                                Book demo
                            </a>
<a className="w-full md:w-auto inline-flex justify-center items-center bg-black/5 text-neutral-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black/10 transition-colors" href="#">
                                Hear agents
                            </a>
</div>
</div>
</div>
</div>
</div>

<div className="py-12 md:py-20 px-6">

<div className="md:hidden flex flex-col gap-8 max-w-sm mx-auto">
<div className="flex justify-center items-center gap-6">
<div className="flex items-center gap-2 text-neutral-900 opacity-80">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 32 32"><path d="M8 0h16a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8zm4 23.5c4.5 0 7.5-2.5 7.5-6 0-3-2-4.5-5.5-5.5l-2-.5c-1.5-.5-2-1-2-2 0-1 1-2 3-2 2 0 3.5 1 4 2h4c-.5-3-3.5-5.5-8-5.5-4 0-7 2.5-7 6 0 3 2 4.5 5.5 5.5l2 .5c1.5.5 2 1 2 2 0 1-1 2-3 2-2.5 0-4-1.5-4.5-3h-4c.5 3.5 4 6 8.5 6z"></path></svg>
<span className="text-base font-medium tracking-tight">SavvyCal</span>
</div>
<div className="flex items-center gap-2 text-neutral-900 opacity-80">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"></path><path d="M12 22V12"></path><path d="M3 7l9 5 9-5"></path></svg>
<span className="text-base font-medium tracking-tight">Laravel</span>
</div>
<div className="flex items-center gap-1.5 text-neutral-900 opacity-80">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><rect height="20" width="4" x="10" y="2"></rect><rect height="4" width="8" x="2" y="2"></rect><rect height="4" width="8" x="14" y="2"></rect></svg>
<span className="text-base font-medium tracking-tight uppercase">Tuple</span>
</div>
</div>
<div className="flex justify-center items-center gap-8">
<div className="flex items-center gap-2 text-neutral-900 opacity-80">
<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M10 9v6M14 9v6"></path></svg>
<span className="text-base font-medium tracking-tight">Transistor</span>
</div>
<div className="flex items-center gap-2 text-neutral-900 opacity-80">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><rect height="24" rx="4" width="24"></rect><path d="M8 16c0 1.5 1.5 2 3 2s3-.5 3-2-1.5-2-3-2-5-1-5-4 2.5-4 5-4 5 1.5 5 4h-3c0-1-1-1.5-2-1.5s-2 .5-2 1.5 1 1.5 2 1.5 5 1 5 4-2.5 4-5 4-5-1.5-5-4h3z" fill="white"></path></svg>
<span className="text-base font-medium tracking-tight">statamic</span>
</div>
</div>
</div>

<div className="hidden md:flex max-w-5xl mx-auto justify-between items-center">
<div className="flex items-center gap-2.5 text-neutral-900">
<svg className="w-7 h-7" fill="currentColor" viewbox="0 0 32 32"><path d="M8 0h16a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8zm4 23.5c4.5 0 7.5-2.5 7.5-6 0-3-2-4.5-5.5-5.5l-2-.5c-1.5-.5-2-1-2-2 0-1 1-2 3-2 2 0 3.5 1 4 2h4c-.5-3-3.5-5.5-8-5.5-4 0-7 2.5-7 6 0 3 2 4.5 5.5 5.5l2 .5c1.5.5 2 1 2 2 0 1-1 2-3 2-2.5 0-4-1.5-4.5-3h-4c.5 3.5 4 6 8.5 6z"></path></svg>
<span className="text-xl font-medium tracking-tight">SavvyCal</span>
</div>
<div className="flex items-center gap-2.5 text-neutral-900">
<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"></path><path d="M12 22V12"></path><path d="M3 7l9 5 9-5"></path></svg>
<span className="text-xl font-medium tracking-tight">Laravel</span>
</div>
<div className="flex items-center gap-2 text-neutral-900">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><rect height="20" width="4" x="10" y="2"></rect><rect height="4" width="8" x="2" y="2"></rect><rect height="4" width="8" x="14" y="2"></rect></svg>
<span className="text-xl font-medium tracking-tight uppercase">Tuple</span>
</div>
<div className="flex items-center gap-2.5 text-neutral-900">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M10 9v6M14 9v6"></path></svg>
<span className="text-xl font-medium tracking-tight">Transistor</span>
</div>
<div className="flex items-center gap-2.5 text-neutral-900">
<svg className="w-7 h-7" fill="currentColor" viewbox="0 0 24 24"><rect height="24" rx="4" width="24"></rect><path d="M8 16c0 1.5 1.5 2 3 2s3-.5 3-2-1.5-2-3-2-5-1-5-4 2.5-4 5-4 5 1.5 5 4h-3c0-1-1-1.5-2-1.5s-2 .5-2 1.5 1 1.5 2 1.5 5 1 5 4-2.5 4-5 4-5-1.5-5-4h3z" fill="white"></path></svg>
<span className="text-xl font-medium tracking-tight">statamic</span>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-[100] bg-neutral-900/30 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-500 ease-out" id="mobile-menu"></div>

<div className="fixed top-3 right-3 left-3 bg-white rounded-[2.5rem] shadow-2xl z-[100] transform -translate-y-4 opacity-0 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden border border-black/5" id="mobile-menu-panel">

<div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 via-blue-50/50 to-emerald-200/50 z-0"></div>
<div className="relative z-10 flex flex-col">

<div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
<a className="flex items-center gap-2.5" href="#">
<i className="w-6 h-6 text-neutral-900" data-lucide="audio-lines" strokeWidth="1.5"></i>
<span className="text-xl font-medium tracking-tight">Aisling AI</span>
</a>
<button className="w-9 h-9 flex items-center justify-center bg-black/5 rounded-full hover:bg-black/10 transition-colors" id="close-menu">
<i className="w-4 h-4 text-neutral-900" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>

<div className="px-6 py-8 flex flex-col gap-6 border-b border-black/10 relative bg-white/30 backdrop-blur-sm">

<svg className="absolute -top-[5.5px] -left-[5.5px] w-[11px] h-[11px] text-black/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 10 10"><path d="M5 0v10M0 5h10"></path></svg>
<svg className="absolute -bottom-[5.5px] -left-[5.5px] w-[11px] h-[11px] text-black/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 10 10"><path d="M5 0v10M0 5h10"></path></svg>
<svg className="absolute -top-[5.5px] -right-[5.5px] w-[11px] h-[11px] text-black/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 10 10"><path d="M5 0v10M0 5h10"></path></svg>
<svg className="absolute -bottom-[5.5px] -right-[5.5px] w-[11px] h-[11px] text-black/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 10 10"><path d="M5 0v10M0 5h10"></path></svg>
<a className="text-3xl font-medium tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors flex items-center justify-between group" href="#">
<span>Pricing</span>
<i className="w-6 h-6 text-neutral-400 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<a className="text-3xl font-medium tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors flex items-center justify-between group" href="#">
<span>Company</span>
<i className="w-6 h-6 text-neutral-400 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<a className="text-3xl font-medium tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors flex items-center justify-between group" href="#">
<span>Blog</span>
<i className="w-6 h-6 text-neutral-400 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="p-6 flex flex-col gap-4">

<a className="bg-white/60 hover:bg-white/80 transition-colors text-neutral-800 text-sm font-medium px-4 py-3 rounded-full flex items-center justify-between gap-1.5 border border-black/5 shadow-sm" href="#">
<span>Aisling AI partners with Enterprise Ireland</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
<div className="flex items-center gap-3">
<a className="flex-1 inline-flex justify-center items-center bg-black/5 text-neutral-900 px-5 py-3.5 rounded-full text-sm font-medium hover:bg-black/10 transition-colors" href="#">
                        Login
                    </a>
<a className="flex-1 inline-flex justify-center items-center bg-neutral-900 text-white px-5 py-3.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/20" href="#">
                        Book demo
                    </a>
</div>
</div>
</div>
</div>


    </>
  );
}
