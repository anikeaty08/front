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



      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      const sidebar = document.getElementById('sidebar');
      const collapseBtn = document.getElementById('collapseBtn');
      const openSidebarBtn = document.getElementById('openSidebarBtn');
      const overlay = document.getElementById('overlay');

      // Helpers
      function setCollapsed(isCollapsed) {
        // Width toggle
        sidebar.classList.toggle('w-72', !isCollapsed);
        sidebar.classList.toggle('w-20', isCollapsed);

        // Label visibility
        document.querySelectorAll('#sidebar .label').forEach(el => {
          if (isCollapsed) {
            el.classList.add('hidden');
          } else {
            el.classList.remove('hidden');
          }
        });

        // Tooltips on hover when collapsed
        document.querySelectorAll('#sidebar .tooltip').forEach(el => {
          if (isCollapsed) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        });

        // Collapse icon direction
        const icon = collapseBtn.querySelector('svg');
        if (icon) {
          icon.setAttribute('data-lucide', isCollapsed ? 'chevrons-right' : 'chevrons-left');
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      }

      function openMobileSidebar() {
        sidebar.classList.remove('-translate-x-[calc(100%+0.75rem)]');
        sidebar.classList.add('translate-x-0');
        overlay.classList.remove('hidden');
      }

      function closeMobileSidebar() {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('-translate-x-[calc(100%+0.75rem)]');
        overlay.classList.add('hidden');
      }

      // Events
      collapseBtn.addEventListener('click', () => {
        const isCollapsed = sidebar.classList.contains('w-20') === false;
        setCollapsed(isCollapsed);
      });

      if (openSidebarBtn) {
        openSidebarBtn.addEventListener('click', () => {
          openMobileSidebar();
        });
      }

      overlay.addEventListener('click', closeMobileSidebar);
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMobileSidebar();
      });

      // Ensure desktop visible on load
      const mql = window.matchMedia('(min-width: 1024px)');
      function handleMQ(e) {
        if (e.matches) {
          // desktop
          overlay.classList.add('hidden');
          sidebar.classList.add('translate-x-0');
          sidebar.classList.remove('-translate-x-[calc(100%+0.75rem)]');
        } else {
          // mobile
          closeMobileSidebar();
        }
      }
      handleMQ(mql);
      mql.addEventListener('change', handleMQ);
    
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-cyan-500/10 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 h-[36rem] w-[36rem] rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(13,23,49,0.9),transparent),radial-gradient(1200px_600px_at_110%_110%,rgba(24,8,36,0.8),transparent)]"></div>
<div className="absolute inset-0 opacity-[0.12] mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml', svg xmlns='http: '//www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 40 40\'&gt', backgroundSize: '160px 160px'}}></div>
</div>

<div className="hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-[2px] transition-opacity" id="overlay"></div>

<aside className="fixed z-40 top-3 bottom-3 left-3 w-72 lg:translate-x-0 transition-[transform,width] duration-300 will-change-transform translate-x-0" id="sidebar">
<div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_-24px_rgba(0,0,0,0.7)]">

<div className="flex items-center justify-between p-3">
<div className="flex items-center gap-2">
<div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/10 text-white shadow-inner shadow-white/5">
<span className="text-[15px] font-semibold tracking-tight">ZN</span>
</div>
<div className="label">
<div className="text-[15px] font-medium tracking-tight">ZenNova</div>
<div className="text-[11px] text-slate-400" style={{}}>Workspace</div>
</div>
</div>
<button className="group inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition" id="collapseBtn">
<svg className="lucide lucide-chevrons-left h-4.5 w-4.5" data-lucide="chevrons-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17-5-5 5-5"></path><path d="m18 17-5-5 5-5"></path></svg>
</button>
</div>
<div className="mx-3 h-px bg-white/10"></div>

<div className="p-3">
<div className="relative">
<svg className="lucide lucide-search pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="label w-full rounded-xl border border-white/10 bg-white/[0.06] px-9 py-2 text-[13px] text-slate-200 placeholder:text-slate-500 outline-none ring-0 focus:border-white/20 focus:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition" placeholder="Search…" type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-400 label" style={{}}>/</div>
</div>
</div>
<nav className="flex-1 overflow-y-auto px-2 py-2">

<div className="px-1 pb-2 pt-1">
<div className="label mb-2 px-2 text-[11px] uppercase tracking-wide text-slate-500" style={{}}>Main</div>
<ul className="space-y-1.5">
<li className="group relative">
<a className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-3 py-2.5 text-sm text-white shadow-inner shadow-white/5 transition hover:bg-white/15" href="#">
<svg className="lucide lucide-home h-4.5 w-4.5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="label">Home</span>
<span className="ml-auto label rounded-md border border-white/10 bg-white/10 px-1.5 py-0.5 text-[10px] text-slate-300" style={{}}>Active</span>
</a>
<div className="tooltip hidden pointer-events-none absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-slate-900/90 px-2 py-1 text-[11px] text-white opacity-0 shadow-lg ring-1 ring-white/10 transition group-hover:opacity-100" style={{}}>Home</div>
</li>
<li className="group relative">
<a className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-slate-200 transition hover:border-white/10 hover:bg-white/10 hover:text-white" href="#">
<svg className="lucide lucide-layout-dashboard h-4.5 w-4.5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="label">Dashboard</span>
</a>
<div className="tooltip hidden pointer-events-none absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-slate-900/90 px-2 py-1 text-[11px] text-white opacity-0 shadow-lg ring-1 ring-white/10 transition group-hover:opacity-100" style={{}}>Dashboard</div>
</li>
<li className="group relative">
<a className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-slate-200 transition hover:border-white/10 hover:bg-white/10 hover:text-white" href="#">
<svg className="lucide lucide-folder-kanban h-4.5 w-4.5" data-lucide="folder-kanban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><path d="M8 10v4"></path><path d="M12 10v2"></path><path d="M16 10v6"></path></svg>
<span className="label">Projects</span>
<span className="ml-auto label rounded-md border border-white/10 bg-white/10 px-1.5 py-0.5 text-[10px] text-slate-300" style={{}}>12</span>
</a>
<div className="tooltip hidden pointer-events-none absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-slate-900/90 px-2 py-1 text-[11px] text-white opacity-0 shadow-lg ring-1 ring-white/10 transition group-hover:opacity-100" style={{}}>Projects</div>
</li>
<li className="group relative">
<a className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-slate-200 transition hover:border-white/10 hover:bg-white/10 hover:text-white" href="#">
<svg className="lucide lucide-activity h-4.5 w-4.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="label">Activity</span>
</a>
<div className="tooltip hidden pointer-events-none absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-slate-900/90 px-2 py-1 text-[11px] text-white opacity-0 shadow-lg ring-1 ring-white/10 transition group-hover:opacity-100" style={{}}>Activity</div>
</li>
<li className="group relative">
<a className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-slate-200 transition hover:border-white/10 hover:bg-white/10 hover:text-white" href="#">
<svg className="lucide lucide-bar-chart-3 h-4.5 w-4.5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="label">Analytics</span>
</a>
<div className="tooltip hidden pointer-events-none absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-slate-900/90 px-2 py-1 text-[11px] text-white opacity-0 shadow-lg ring-1 ring-white/10 transition group-hover:opacity-100" style={{}}>Analytics</div>
</li>
</ul>
</div>
<div className="mx-3 my-3 h-px bg-white/10"></div>

<div className="px-1 pt-1">
<div className="label mb-2 px-2 text-[11px] uppercase tracking-wide text-slate-500" style={{}}>General</div>
<ul className="space-y-1.5">
<li className="group relative">
<a className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-slate-200 transition hover:border-white/10 hover:bg-white/10 hover:text-white" href="#">
<svg className="lucide lucide-users h-4.5 w-4.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="label">Team</span>
</a>
<div className="tooltip hidden pointer-events-none absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-slate-900/90 px-2 py-1 text-[11px] text-white opacity-0 shadow-lg ring-1 ring-white/10 transition group-hover:opacity-100" style={{}}>Team</div>
</li>
<li className="group relative">
<a className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-slate-200 transition hover:border-white/10 hover:bg-white/10 hover:text-white" href="#">
<svg className="lucide lucide-settings h-4.5 w-4.5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="label">Settings</span>
</a>
<div className="tooltip hidden pointer-events-none absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-slate-900/90 px-2 py-1 text-[11px] text-white opacity-0 shadow-lg ring-1 ring-white/10 transition group-hover:opacity-100" style={{}}>Settings</div>
</li>
<li className="group relative">
<a className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-slate-200 transition hover:border-white/10 hover:bg-white/10 hover:text-white" href="#">
<svg className="lucide lucide-help-circle h-4.5 w-4.5" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="label">Help</span>
</a>
<div className="tooltip hidden pointer-events-none absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-slate-900/90 px-2 py-1 text-[11px] text-white opacity-0 shadow-lg ring-1 ring-white/10 transition group-hover:opacity-100" style={{}}>Help</div>
</li>
</ul>
</div>
</nav>
<div className="mx-3 h-px bg-white/10"></div>

<div className="p-3">
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-2.5 hover:border-white/20 hover:bg-white/10 transition">
<img alt="Avatar" className="h-9 w-9 rounded-lg object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0 label">
<div className="truncate text-[13px] font-medium tracking-tight text-white">Alex Carter</div>
<div className="truncate text-[11px] text-slate-400" style={{}}>alex@zennova.app</div>
</div>
<button className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition" title="Sign out">
<svg className="lucide lucide-log-out h-4.5 w-4.5" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
</button>
</div>
</div>
</div>
</aside>

<main className="relative lg:ml-[19rem]">

<header className="sticky top-0 z-20 border-b border-white/10 bg-[#070b14]/60 backdrop-blur-xl">
<div className="max-w-7xl mr-auto ml-auto pt-3 pr-4 pb-3 pl-4">
<div className="flex items-center gap-3">
<button aria-label="Open navigation" className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition" id="openSidebarBtn">
<svg className="lucide lucide-panel-left-open h-4.5 w-4.5" data-lucide="panel-left-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="m14 9 3 3-3 3"></path></svg>
</button>
<div className="flex min-w-0 items-center gap-3">
<h1 className="truncate text-[32px] font-semibold text-white" style={{fontFamily: 'Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>Overview</h1>
<span className="hidden sm:inline-block rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[11px] text-slate-300" style={{}}>v2.3</span>
</div>
<div className="ml-auto hidden md:flex items-center gap-2">
<div className="relative">
<svg className="lucide lucide-search pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-64 rounded-xl border border-white/10 bg-white/[0.06] px-9 py-2 text-[13px] text-slate-200 placeholder:text-slate-500 outline-none focus:border-white/20 focus:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition" placeholder="Quick search"/>
</div>
<button className="inline-flex text-[13px] hover:text-white hover:bg-white/10 hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition text-slate-200 h-9 border-stone-200 border rounded-xl pr-3 pl-3 shadow-xl gap-x-2 gap-y-2 items-center">Report Incident
<svg className="lucide lucide-plus h-4.5 w-4.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
</div>
</div>
</div>
</header>

<section className="mx-auto max-w-7xl px-4 py-8">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl hover:border-white/20 transition">
<div className="flex items-center justify-between">
<div>
<h2 className="text-[20px] font-semibold text-white" style={{fontFamily: 'Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>Active Sessions</h2>
<p className="mt-1 text-[14px] text-slate-400">Users online in the last 5 minutes</p>
</div>
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/10 text-slate-200">
<svg className="lucide lucide-users h-5 w-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
</div>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-[28px] font-medium tracking-tight text-white">1,284</span>
<span className="text-[12px] text-emerald-400" style={{}}>+4.2%</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl hover:border-white/20 transition">
<div className="flex items-center justify-between">
<div className="">
<h2 className="text-[20px] font-semibold text-white" style={{fontFamily: 'Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>Deploys</h2>
<p className="mt-1 text-[14px] text-slate-400">Today’s successful releases</p>
</div>
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/10 text-slate-200">
<svg className="lucide lucide-rocket h-5 w-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
</div>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-[28px] font-medium tracking-tight text-white">32</span>
<span className="text-[12px] text-emerald-400" style={{}}>+2</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl hover:border-white/20 transition">
<div className="flex items-center justify-between">
<div className="">
<h2 className="text-[20px] font-semibold text-white" style={{fontFamily: 'Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>Errors</h2>
<p className="mt-1 text-[14px] text-slate-400">Open issues in production</p>
</div>
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/10 text-slate-200">
<svg className="lucide lucide-triangle-alert h-5 w-5" data-lucide="triangle-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
</div>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-[28px] font-medium tracking-tight text-white">7</span>
<span className="text-[12px] text-rose-400" style={{}}>+1</span>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl hover:border-white/20 transition">
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="">
<h3 className="text-[20px] font-semibold text-white" style={{fontFamily: 'Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>Recent Activity</h3>
<p className="mt-1 text-[14px] text-slate-400">Latest changes across your projects</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-[13px] text-slate-200 hover:text-white hover:bg-white/10 hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition">
<svg className="lucide lucide-filter h-4.5 w-4.5" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                Filter
              </button>
<button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-[13px] text-slate-200 hover:text-white hover:bg-white/10 hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition">
<svg className="lucide lucide-download h-4.5 w-4.5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                Export
              </button>
</div>
</div>
<div className="mt-4 divide-y divide-white/10">
<div className="flex items-center gap-3 py-3">
<div className="h-8 w-8 overflow-hidden rounded-lg ring-1 ring-white/10">
<img alt="avatar" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="min-w-0 flex-1">
<p className="truncate text-[14px] text-slate-300"><span className="text-white">Taylor</span> merged PR <span className="text-slate-200">#428</span> into <span className="text-slate-200">main</span></p>
</div>
<span className="text-[11px] text-slate-500" style={{}}>2m</span>
</div>
<div className="flex items-center gap-3 py-3">
<div className="h-8 w-8 overflow-hidden rounded-lg ring-1 ring-white/10">
<img alt="avatar" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="min-w-0 flex-1">
<p className="truncate text-[14px] text-slate-300"><span className="text-white">Jordan</span> deployed <span className="text-slate-200">api@2.3.1</span> to production</p>
</div>
<span className="text-[11px] text-slate-500" style={{}}>18m</span>
</div>
<div className="flex items-center gap-3 py-3">
<div className="h-8 w-8 overflow-hidden rounded-lg ring-1 ring-white/10">
<img alt="avatar" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="min-w-0 flex-1">
<p className="truncate text-[14px] text-slate-300"><span className="text-white">Sam</span> opened issue <span className="text-slate-200">#731</span> in <span className="text-slate-200">ui-kit</span></p>
</div>
<span className="text-[11px] text-slate-500" style={{}}>1h</span>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
