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
      {

    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');
      const openBtn = document.getElementById('openSidebar');
      const closeBtn = document.getElementById('closeSidebar');

      function openSidebarFn() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
      }
      function closeSidebarFn() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
      }

      if (window.innerWidth < 1024) {
        sidebar.classList.add('-translate-x-full');
      }

      if (openBtn) openBtn.addEventListener('click', openSidebarFn);
      if (closeBtn) closeBtn.addEventListener('click', closeSidebarFn);
      if (overlay) overlay.addEventListener('click', closeSidebarFn);

      const copyBtn = document.getElementById('copyHtml');
      if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
          try {
            const docType = '<!DOCTYPE html>\n';
            const html = document.documentElement.outerHTML;
            await navigator.clipboard.writeText(docType + html);
            copyBtn.classList.add('ring-2','ring-emerald-400');
            setTimeout(() => copyBtn.classList.remove('ring-2','ring-emerald-400'), 900);
          } catch (e) {}
        });
      }

      let prev = window.innerWidth;
      window.addEventListener('resize', () => {
        const now = window.innerWidth;
        if (prev >= 1024 && now < 1024) {
          sidebar.classList.add('-translate-x-full');
        }
        if (prev < 1024 && now >= 1024) {
          sidebar.classList.remove('-translate-x-full');
          overlay.classList.add('hidden');
        }
        prev = now;
      });

      // Dropdown team switcher logic aggiornata
      (function() {
        const btn = document.getElementById('teamDropdownBtn');
        const menu = document.getElementById('teamDropdownMenu');
        const chevron = document.getElementById('dropdownChevron');
        const selectedTeam = document.getElementById('selectedTeam');
        const marketingCheck = document.getElementById('marketingCheck');
        const personalCheck = document.getElementById('personalCheck');

        function closeDropdown() {
          menu.classList.remove('scale-100', 'opacity-100', 'pointer-events-auto');
          menu.classList.add('scale-95', 'opacity-0', 'pointer-events-none');
          chevron.classList.remove('rotate-180');
          btn.setAttribute('aria-expanded', 'false');
        }
        function openDropdown() {
          menu.classList.remove('scale-95', 'opacity-0', 'pointer-events-none');
          menu.classList.add('scale-100', 'opacity-100', 'pointer-events-auto');
          chevron.classList.add('rotate-180');
          btn.setAttribute('aria-expanded', 'true');
        }
        menu.classList.add('scale-95', 'opacity-0', 'pointer-events-none');

        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          if (menu.classList.contains('opacity-100')) {
            closeDropdown();
          } else {
            openDropdown();
          }
        });

        menu.querySelectorAll('button[data-team]').forEach(el => {
          el.addEventListener('click', function(e) {
            e.preventDefault();
            const team = this.getAttribute('data-team');
            selectedTeam.textContent = team;
            if(team === 'Marketing') {
              marketingCheck.classList.remove('opacity-0');
              personalCheck.classList.add('opacity-0');
            } else {
              marketingCheck.classList.add('opacity-0');
              personalCheck.classList.remove('opacity-0');
            }
            closeDropdown();
          });
        });

        // Default selection
        marketingCheck.classList.remove('opacity-0');
        personalCheck.classList.add('opacity-0');

        document.addEventListener('mousedown', function(e) {
          if (!menu.contains(e.target) && !btn.contains(e.target)) {
            closeDropdown();
          }
        });

        btn.addEventListener('keydown', function(e) {
          if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openDropdown();
            menu.querySelector('button[data-team]')?.focus();
          }
        });
      })();
    });
  
}
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
      
<div className="min-h-screen w-full flex">

<aside className="fixed inset-y-0 left-0 z-40 w-80 supports-backdrop-blur:bg-white/70 lg:static lg:translate-x-0 transition-transform duration-300 ease-out bg-white/90 border-zinc-200 border-r shadow-sm backdrop-blur translate-x-0 items-start justify-between" id="sidebar">
<div className="lg:hidden flex items-center justify-between px-4 h-14 border-b border-zinc-200">
<button className="inline-flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-zinc-100" id="closeSidebar">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<div className="text-sm text-zinc-700">Workspace</div>
<button className="inline-flex items-center gap-2 px-2.5 py-2 rounded-xl border border-zinc-200 hover:bg-zinc-50">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="11" cy="11"></circle></svg>
</button>
</div>
<div className="pt-4 pr-4 pb-4 pl-4 space-y-16">

<div className="bg-white border-0 rounded-none pt-3 pr-3 pb-3 pl-3">
<div className="relative w-full flex flex-col">
<button aria-expanded="false" aria-haspopup="listbox" className="flex w-full hover:bg-zinc-100 transition bg-zinc-50 border-zinc-200 border rounded-xl pt-3 pr-3 pb-3 pl-3 items-center justify-between" id="teamDropdownBtn" type="button">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-white">
<svg className="lucide lucide-sparkles h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
</span>
<div className="text-left">
<p className="text-xs text-zinc-500">Team</p>
<p className="text-sm font-medium leading-tight" id="selectedTeam">Marketing</p>
</div>
</div>
<svg className="lucide lucide-chevron-down h-4 w-4 text-zinc-500 transition-transform duration-300 ease-out" fill="none" height="24" id="dropdownChevron" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className=""></path></svg>
</button>
<div className="absolute left-0 z-20 w-full transition-all duration-300 ease-out opacity-0 pointer-events-none bg-white border-zinc-200 border rounded-xl mt-16 pt-2 pb-2 shadow-lg scale-95" id="teamDropdownMenu" style={{minWidth: `0`, width: `100%`, boxSizing: `border-box`, overflow: `visible`, transformOrigin: `top`}}>
<button className="flex w-full gap-3 hover:bg-zinc-50 transition-colors duration-200 rounded-lg pt-2 pr-3 pb-2 pl-3 items-center" data-team="Marketing" type="button">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-white">
<svg className="lucide lucide-sparkles h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
</span>
<div className="flex-1 min-w-0 text-left">
<p className="leading-tight text-sm font-medium">Marketing</p>
<p className="text-xs text-zinc-500 truncate">marketing@workspace.com</p>
</div>
<svg className="lucide lucide-check transition w-[16px] h-[16px]" fill="none" height="16" id="marketingCheck" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `16px`, height: `16px`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
</button>
<button className="flex w-full items-center gap-3 px-3 py-2 hover:bg-zinc-50 rounded-lg transition-colors duration-200" data-team="Personale" type="button">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-900">
<svg className="lucide lucide-user h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="9" cy="7"></circle></svg>
</span>
<div className="flex-1 min-w-0 text-left">
<p className="text-sm font-medium leading-tight">Personale</p>
<p className="text-xs text-zinc-500 truncate">personale@workspace.com</p>
</div>
<svg className="lucide lucide-check transition w-[16px] h-[16px] opacity-0" fill="none" id="personalCheck" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `16px`, height: `16px`}} viewBox="0 0 24 24" width="16 height=" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
</button>
</div>
</div>
</div>


<nav className="space-y-4 items-start">
<div className="space-y-1">

</div>
<div className="text-xs font-medium text-zinc-500 pr-3 pl-3">Gestione Soci</div>
<div className="space-y-1">
<a className="flex items-center gap-3 hover:bg-zinc-100 text-sm text-zinc-700 rounded-xl pt-2 pr-3 pb-2 pl-3" href="#"><svg className="lucide lucide-building-2 h-4 w-4 text-zinc-500" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>Richieste iscrizioni</a>
<a aria-current="page" className="flex items-center gap-3 text-sm text-white bg-zinc-900 rounded-xl pt-2 pr-3 pb-2 pl-3 shadow-sm" href="#"><svg className="lucide lucide-users w-[16px] h-[16px]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>Gestione iscrizioni
            </a>
</div>
<div className="text-xs font-medium text-zinc-500 pr-3 pl-3">Magazino</div>
<div className="space-y-1">
<a className="flex items-center gap-3 hover:bg-zinc-100 text-sm text-zinc-700 rounded-xl pt-2 pr-3 pb-2 pl-3" href="#"><svg className="lucide lucide-badge-dollar-sign h-4 w-4 text-zinc-500" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>Gestione prodotti</a>
<a className="flex items-center gap-3 hover:bg-zinc-100 text-sm text-zinc-700 rounded-xl pt-2 pr-3 pb-2 pl-3" href="#"><svg className="lucide lucide-folder h-4 w-4 text-zinc-500" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>Gestione vendite</a>
</div>

<div className="border-t border-zinc-200 my-2"></div>

<div className="space-y-1">
<a className="flex items-center gap-3 hover:bg-zinc-100 text-sm text-zinc-700 rounded-xl pt-2 pr-3 pb-2 pl-3" href="#"><svg className="lucide lucide-download w-[16px] h-[16px]" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `16px`, height: `16px`, color: `rgb(113, 113, 122)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>Scarica Report</a>
<a className="flex items-center gap-3 hover:bg-zinc-100 text-sm text-zinc-700 rounded-xl pt-2 pr-3 pb-2 pl-3" href="#"><svg className="lucide lucide-mail h-4 w-4 text-zinc-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="16" rx="2" width="20"></rect></svg>Documenti</a>
</div>
</nav>

<div className="border-t border-zinc-200"></div>

<div className="pr-2 pl-2">
<div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-zinc-50 transition">
<img alt="" className="h-8 w-8 rounded-xl object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=80&h=80&fit=crop&auto=format" />
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">Alex Morgan</p>
<p className="text-xs text-zinc-500 truncate">alex.morgan@workspace.com</p>
</div>
<button className="inline-flex items-center justify-center h-8 w-8 rounded-xl border border-zinc-200 hover:bg-zinc-50">
<svg className="lucide lucide-settings h-4 w-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
</button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition text-sm ml-2">
<svg className="lucide lucide-log-out h-4 w-4" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
</div>
</div>
</aside>

<div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 hidden lg:hidden" id="overlay"></div>

<main className="flex-1 lg:ml-0 ml-0 lg:pl-0 lg:pr-0">

<div className="lg:hidden sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-zinc-200">
<div className="h-14 px-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-zinc-100" id="openSidebar">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
<div className="text-sm text-zinc-600">Workspace</div>
<div></div>
</div>
</div>
<section className="max-w-6xl mx-auto px-4 lg:px-10 py-10">
<div className="flex items-center justify-between">
<div className="">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-none">Sidebar preview</h1>
<p className="mt-3 text-sm text-zinc-600">Responsive, accessible, and consistent with the system UI.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition text-sm">
<svg className="lucide lucide-wand-2 h-4 w-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
              Customize
            </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition" id="copyHtml">
<svg className="lucide lucide-copy h-4 w-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14"></rect><path></path></svg>
              Copy markup
            </button>
</div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white border-zinc-200 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 text-zinc-700 text-sm">
<svg className="lucide lucide-info h-4 w-4 text-zinc-500" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
              How it works
            </div>
<ul className="mt-3 space-y-2 text-sm text-zinc-600">
<li className="flex items-start gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-zinc-200 text-xs">1</span>
                Semantic structure with clear groups, labels, and active states.
              </li>
<li className="flex items-start gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-zinc-200 text-xs">2</span>
                Custom controls: checkmarks, badges, and hover outlines.
              </li>
<li className="flex items-start gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-zinc-200 text-xs">3</span>
                Mobile overlay with smooth slide-in interactions.
              </li>
</ul>
</div>
<div className="rounded-2xl border border-zinc-200 bg-white p-4">
<div className="flex items-center gap-2 text-zinc-700 text-sm">
<svg className="lucide lucide-ruler h-4 w-4 text-zinc-500" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
              Design tokens
            </div>
<div className="mt-3 grid grid-cols-2 gap-3 text-sm">
<div className="rounded-xl border border-zinc-200 p-3">
<div className="text-xs text-zinc-500">Typography</div>
<div className="mt-1 font-medium">Inter</div>
</div>
<div className="rounded-xl border border-zinc-200 p-3">
<div className="text-xs text-zinc-500">Radius</div>
<div className="mt-1 font-medium">xl / 2xl</div>
</div>
<div className="rounded-xl border border-zinc-200 p-3">
<div className="text-xs text-zinc-500">Stroke</div>
<div className="mt-1 font-medium">1.5</div>
</div>
<div className="rounded-xl border border-zinc-200 p-3">
<div className="text-xs text-zinc-500">Surface</div>
<div className="mt-1 font-medium">White / 50 + blur</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
