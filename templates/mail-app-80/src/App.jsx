import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      window.addEventListener('DOMContentLoaded', () => {
        // Icons
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Sidebar toggle (mobile)
        const sidebar = document.getElementById('sidebar');
        const btnMobileSidebar = document.getElementById('btn-mobile-sidebar');
        btnMobileSidebar?.addEventListener('click', () => {
          const open = sidebar.classList.contains('hidden');
          if (open) {
            sidebar.classList.remove('hidden');
            sidebar.classList.add('fixed', 'inset-y-0', 'left-0', 'z-50');
            // Backdrop
            const backdrop = document.createElement('div');
            backdrop.id = 'sb-backdrop';
            backdrop.className = 'fixed inset-0 bg-black/60 md:hidden';
            backdrop.addEventListener('click', () => {
              sidebar.classList.add('hidden');
              sidebar.classList.remove('fixed', 'inset-y-0', 'left-0', 'z-50');
              document.getElementById('sb-backdrop')?.remove();
            });
            document.body.appendChild(backdrop);
          } else {
            sidebar.classList.add('hidden');
            sidebar.classList.remove('fixed', 'inset-y-0', 'left-0', 'z-50');
            document.getElementById('sb-backdrop')?.remove();
          }
        });

        // Composer slide-over
        const composer = document.getElementById('composer');
        const backdrop = document.getElementById('composer-backdrop');
        const panel = document.getElementById('composer-panel');
        const openComposer = () => {
          composer.classList.remove('pointer-events-none');
          backdrop.style.opacity = '1';
          panel.style.transform = 'translateX(0)';
        };
        const closeComposer = () => {
          panel.style.transform = 'translateX(100%)';
          backdrop.style.opacity = '0';
          setTimeout(() => {
            composer.classList.add('pointer-events-none');
          }, 200);
        };
        document.getElementById('btn-desktop-compose')?.addEventListener('click', openComposer);
        document.getElementById('btn-mobile-compose')?.addEventListener('click', openComposer);
        document.getElementById('composer-close')?.addEventListener('click', closeComposer);
        document.getElementById('composer-minimize')?.addEventListener('click', closeComposer);
        backdrop?.addEventListener('click', closeComposer);

        // Mobile search
        const ms = document.getElementById('mobile-search');
        const msBackdrop = document.getElementById('mobile-search-backdrop');
        const msPanel = document.getElementById('mobile-search-panel');
        document.getElementById('btn-mobile-search')?.addEventListener('click', () => {
          ms.classList.remove('pointer-events-none');
          msBackdrop.style.opacity = '1';
          msPanel.style.opacity = '1';
          msPanel.style.transform = 'translateY(0)';
        });
        const closeMS = () => {
          msPanel.style.opacity = '0';
          msPanel.style.transform = 'translateY(-8px)';
          msBackdrop.style.opacity = '0';
          setTimeout(() => ms.classList.add('pointer-events-none'), 200);
        };
        document.getElementById('mobile-search-close')?.addEventListener('click', closeMS);
        msBackdrop?.addEventListener('click', closeMS);

        // Star toggles
        document.querySelectorAll('.btn-star').forEach((btn) => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const pressed = btn.getAttribute('aria-pressed') === 'true';
            btn.setAttribute('aria-pressed', String(!pressed));
            const icon = btn.querySelector('svg');
            if (!pressed) {
              icon?.classList.add('text-amber-400');
            } else {
              icon?.classList.remove('text-amber-400');
            }
          });
        });

        // Filter chip active states
        document.querySelectorAll('.filter-chip').forEach((chip) => {
          chip.addEventListener('click', () => {
            chip.classList.toggle('border-indigo-400/40');
            chip.classList.toggle('bg-indigo-500/10');
          });
        });

        // Select all
        const checkAll = document.getElementById('check-all');
        checkAll?.addEventListener('change', () => {
          document.querySelectorAll('.email-select').forEach((cb) => {
            cb.checked = checkAll.checked;
            cb.dispatchEvent(new Event('change'));
          });
        });

        // Email row selection highlight
        document.querySelectorAll('.email-row').forEach((row) => {
          const cb = row.querySelector('.email-select');
          cb?.addEventListener('change', () => {
            if (cb.checked) {
              row.classList.add('bg-white/[0.04]');
              row.classList.add('outline', 'outline-1', 'outline-white/10');
            } else {
              row.classList.remove('bg-white/[0.04]');
              row.classList.remove('outline', 'outline-1', 'outline-white/10');
            }
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex h-screen w-full">

<div className="fixed top-0 inset-x-0 z-40 flex items-center justify-between gap-2 px-4 py-3 md:hidden border-b backdrop-blur border-white/5 bg-black/40">
<div className="flex items-center gap-3">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 border-white/10 hover:border-white/20 hover:bg-white/5" id="btn-mobile-sidebar">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-gradient-to-br from-indigo-500 to-sky-500 grid place-items-center text-[11px] font-semibold tracking-tight text-white">MX</div>
<span className="text-[15px] font-semibold tracking-tight text-slate-100">Mail</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" id="btn-mobile-search">
<svg className="lucide lucide-search" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-indigo-500/90 hover:bg-indigo-500 border text-white border-indigo-400/20" id="btn-mobile-compose">
<svg className="lucide lucide-pen-line" data-lucide="pen-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
</button>
</div>
</div>

<aside className="hidden md:flex flex-col shrink-0 w-[280px] lg:w-[300px] h-full border-r backdrop-blur-sm border-white/5 bg-black/40" id="sidebar">

<div className="flex items-center justify-between px-4 py-4 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-sky-500 grid place-items-center text-[12px] font-semibold tracking-tight text-white">MX</div>
<div className="text-[15px] font-semibold tracking-tight text-slate-100">Mail</div>
</div>
<button className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-md bg-indigo-500/90 hover:bg-indigo-500 border text-white border-indigo-400/20" id="btn-desktop-compose">
<svg className="lucide lucide-pen-line" data-lucide="pen-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
<span className="text-[13px] font-medium">Compose</span>
</button>
</div>

<div className="px-3 py-3">
<div className="px-2 text-[12px] uppercase tracking-wider mb-2 text-slate-400/80">Mailboxes</div>
<nav className="space-y-[2px]">
<a className="group flex items-center gap-3 px-3 h-10 rounded-md border border-transparent hover:bg-white/5 hover:border-white/10" href="#">
<svg className="lucide lucide-inbox text-slate-300" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span className="text-[14px] text-slate-200/90">Inbox</span>
<span className="ml-auto text-[12px] rounded px-2 py-0.5 text-slate-300/90 bg-white/5">23</span>
</a>
<a className="group flex items-center gap-3 px-3 h-10 rounded-md border border-transparent hover:bg-white/5 hover:border-white/10" href="#">
<svg className="lucide lucide-star text-slate-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-[14px] text-slate-200/90">Starred</span>
<span className="ml-auto text-[12px] text-slate-400">6</span>
</a>
<a className="group flex items-center gap-3 px-3 h-10 rounded-md border border-transparent hover:bg-white/5 hover:border-white/10" href="#">
<svg className="lucide lucide-clock text-slate-300" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-[14px] text-slate-200/90">Snoozed</span>
</a>
<a className="group flex items-center gap-3 h-10 border-transparent border rounded-md pr-3 pl-3 hover:bg-white/5 hover:border-white/10" href="#">
<svg className="lucide lucide-send text-slate-300" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span className="text-[14px] text-slate-200/90">Sent</span>
</a>
<a className="group flex items-center gap-3 px-3 h-10 rounded-md border border-transparent hover:bg-white/5 hover:border-white/10" href="#">
<svg className="lucide lucide-file-text text-slate-300" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-[14px] text-slate-200/90">Drafts</span>
<span className="ml-auto text-[12px] text-slate-400">2</span>
</a>
<a className="group flex items-center gap-3 px-3 h-10 rounded-md border border-transparent hover:bg-white/5 hover:border-white/10" href="#">
<svg className="lucide lucide-archive text-slate-300" data-lucide="archive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg>
<span className="text-[14px] text-slate-200/90">Archive</span>
</a>
<a className="group flex items-center gap-3 px-3 h-10 rounded-md border border-transparent hover:bg-white/5 hover:border-white/10" href="#">
<svg className="lucide lucide-shield-alert text-slate-300" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
<span className="text-[14px] text-slate-200/90">Spam</span>
</a>
<a className="group flex items-center gap-3 px-3 h-10 rounded-md border border-transparent hover:bg-white/5 hover:border-white/10" href="#">
<svg className="lucide lucide-trash-2 text-slate-300" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
<span className="text-[14px] text-slate-200/90">Trash</span>
</a>
</nav>
</div>

<div className="px-3 py-3 mt-1 border-t border-white/5">
<div className="flex items-center justify-between px-2 mb-2">
<div className="text-[12px] uppercase tracking-wider text-slate-400/80">Labels</div>
<button className="inline-flex items-center justify-center h-7 w-7 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5">
<svg className="lucide lucide-plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 h-9 rounded-md border border-transparent hover:bg-white/5 hover:border-white/10" href="#">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
<span className="text-[13px] text-slate-300">Projects</span>
</a>
<a className="flex items-center gap-3 px-3 h-9 rounded-md border border-transparent hover:bg-white/5 hover:border-white/10" href="#">
<span className="h-2.5 w-2.5 rounded-full bg-sky-400"></span>
<span className="text-[13px] text-slate-300">Product</span>
</a>
<a className="flex items-center gap-3 px-3 h-9 rounded-md border border-transparent hover:bg-white/5 hover:border-white/10" href="#">
<span className="h-2.5 w-2.5 rounded-full bg-violet-400"></span>
<span className="text-[13px] text-slate-300">Finance</span>
</a>
<a className="flex items-center gap-3 px-3 h-9 rounded-md border border-transparent hover:bg-white/5 hover:border-white/10" href="#">
<span className="h-2.5 w-2.5 rounded-full bg-rose-400"></span>
<span className="text-[13px] text-slate-300">Personal</span>
</a>
</div>
</div>

<div className="mt-auto border-t px-3 py-3 border-white/5">
<div className="flex items-center gap-3 px-2">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="text-[14px] font-medium text-slate-200">Alex Morgan</div>
<div className="text-[12px] text-slate-400">alex@workspace.com</div>
</div>
<button className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5">
<svg className="lucide lucide-settings" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
</aside>

<section className="flex flex-col w-full md:max-w-[460px] lg:max-w-[520px] h-full border-r border-white/5 bg-black/20">

<div className="hidden md:flex items-center gap-2 px-4 py-3 border-b sticky top-0 z-30 backdrop-blur border-white/5 bg-black/40">
<div className="relative flex-1">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full h-10 pl-10 pr-10 rounded-md border outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/30 placeholder:text-slate-500 text-[14px] bg-white/5 border-white/10" placeholder="Search mail" type="text"/>
<button className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-7 w-7 rounded-md hover:bg-white/5 text-slate-300">
<svg className="lucide lucide-sliders-horizontal" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
</button>
</div>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5">
<svg className="lucide lucide-refresh-ccw" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</button>
</div>

<div className="hidden md:flex items-center gap-2 px-4 py-2 border-b border-white/5">
<label className="inline-flex items-center gap-3 select-none">
<input className="peer sr-only" id="check-all" type="checkbox"/>
<span className="h-4 w-4 rounded border grid place-items-center peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition border-white/20 bg-black/30">
<svg className="lucide lucide-check h-3 w-3 opacity-0 peer-checked:opacity-100 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-[13px] text-slate-300">All</span>
</label>
<button className="filter-chip inline-flex items-center gap-2 h-8 px-3 rounded-md border text-[13px] border-white/10 hover:border-white/20 hover:bg-white/5 text-slate-300" data-filter="unread">
<span className="h-2 w-2 rounded-full bg-indigo-400"></span>Unread
          </button>
<button className="filter-chip inline-flex items-center gap-2 h-8 px-3 rounded-md border text-[13px] border-white/10 hover:border-white/20 hover:bg-white/5 text-slate-300" data-filter="starred">
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>Starred
          </button>
<button className="filter-chip inline-flex items-center gap-2 h-8 px-3 rounded-md border text-[13px] border-white/10 hover:border-white/20 hover:bg-white/5 text-slate-300" data-filter="attachments">
<svg className="lucide lucide-paperclip" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>Attachments
          </button>
<div className="ml-auto flex items-center">
<button className="inline-flex items-center gap-1 h-8 px-2 rounded-md border text-[13px] border-white/10 hover:border-white/20 hover:bg-white/5 text-slate-300">
<span>Sort</span>
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto divide-y divide-white/5" id="message-list">


<div className="email-row group flex items-stretch gap-3 px-3 md:px-4 py-3 hover:bg-white/[0.03]">
<div className="flex items-start gap-3 pt-0.5">
<label className="inline-flex items-center gap-2 select-none">
<input className="email-select peer sr-only" type="checkbox"/>
<span className="h-4 w-4 rounded border grid place-items-center peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition border-white/20 bg-black/30">
<svg className="lucide lucide-check h-3 w-3 opacity-0 peer-checked:opacity-100 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<button aria-pressed="false" className="btn-star inline-flex items-center justify-center h-6 w-6 rounded-md text-slate-400 hover:text-amber-400 hover:bg-white/5" title="Star">
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</button>
</div>
<button className="flex-1 grid grid-cols-[auto,1fr,auto] items-center gap-3 text-left">
<img alt="sender avatar" className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="sender text-[14px] font-medium text-slate-200">Evelyn from Northwind</span>
<span className="tag inline-flex items-center h-5 px-2 rounded-full text-[11px] bg-indigo-500/15 ring-1 ring-inset text-indigo-200 ring-indigo-400/20">Updates</span>
</div>
<div className="subject text-[13px] line-clamp-1 text-slate-300/95">
                  Q3 Roadmap Review — highlights and next steps
                </div>
<div className="snippet text-[12px] line-clamp-1 text-slate-400">
                  Thanks for the call today. I’ve attached the roadmap and the action items we discussed.
                </div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="time text-[11px] text-slate-400">10:42 AM</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-paperclip text-slate-400/80" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
<span className="unread-dot h-2 w-2 rounded-full bg-indigo-400"></span>
</div>
</div>
</button>
</div>

<div className="email-row group flex items-stretch gap-3 px-3 md:px-4 py-3 hover:bg-white/[0.03]">
<div className="flex items-start gap-3 pt-0.5">
<label className="inline-flex items-center gap-2 select-none">
<input className="email-select peer sr-only" type="checkbox"/>
<span className="h-4 w-4 rounded border grid place-items-center peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition border-white/20 bg-black/30">
<svg className="lucide lucide-check h-3 w-3 opacity-0 peer-checked:opacity-100 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<button aria-pressed="true" className="btn-star inline-flex items-center justify-center h-6 w-6 rounded-md text-slate-400 hover:text-amber-400 hover:bg-white/5" title="Star">
<svg className="lucide lucide-star text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</button>
</div>
<button className="flex-1 grid grid-cols-[auto,1fr,auto] items-center gap-3 text-left">
<img alt="sender avatar" className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1549558549-415fe4c37b60?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="sender text-[14px] font-medium text-slate-200">Billing</span>
<span className="tag inline-flex items-center h-5 px-2 rounded-full text-[11px] bg-emerald-500/15 ring-1 ring-inset text-emerald-200 ring-emerald-400/20">Finance</span>
</div>
<div className="subject text-[13px] line-clamp-1 text-slate-300">
                  Invoice #4127 processed successfully
                </div>
<div className="snippet text-[12px] line-clamp-1 text-slate-400">
                  Your payment has been received. The receipt is attached as a PDF.
                </div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="time text-[11px] text-slate-400">9:15 AM</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-paperclip text-slate-400/80" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
</div>
</div>
</button>
</div>

<div className="email-row group flex items-stretch gap-3 px-3 md:px-4 py-3 hover:bg-white/[0.03]">
<div className="flex items-start gap-3 pt-0.5">
<label className="inline-flex items-center gap-2 select-none">
<input className="email-select peer sr-only" type="checkbox"/>
<span className="h-4 w-4 rounded border grid place-items-center peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition border-white/20 bg-black/30">
<svg className="lucide lucide-check h-3 w-3 opacity-0 peer-checked:opacity-100 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<button aria-pressed="false" className="btn-star inline-flex items-center justify-center h-6 w-6 rounded-md text-slate-400 hover:text-amber-400 hover:bg-white/5" title="Star">
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</button>
</div>
<button className="flex-1 grid grid-cols-[auto,1fr,auto] items-center gap-3 text-left">
<img alt="sender avatar" className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="sender text-[14px] font-medium text-slate-200">Design Review</span>
<span className="tag inline-flex items-center h-5 px-2 rounded-full text-[11px] bg-sky-500/15 ring-1 ring-inset text-sky-200 ring-sky-400/20">Product</span>
</div>
<div className="subject text-[13px] line-clamp-1 text-slate-300/95">
                  Final tweaks before handoff
                </div>
<div className="snippet text-[12px] line-clamp-1 text-slate-400">
                  Pushing the last iterations. Can we align on spacing tokens and motion?
                </div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="time text-[11px] text-slate-400">Yesterday</span>
<div className="flex items-center gap-2">
<span className="unread-dot h-2 w-2 rounded-full bg-indigo-400"></span>
</div>
</div>
</button>
</div>

<div className="email-row group flex items-stretch gap-3 px-3 md:px-4 py-3 hover:bg-white/[0.03]">
<div className="flex items-start gap-3 pt-0.5">
<label className="inline-flex items-center gap-2 select-none">
<input className="email-select peer sr-only" type="checkbox"/>
<span className="h-4 w-4 rounded border grid place-items-center peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition border-white/20 bg-black/30">
<svg className="lucide lucide-check h-3 w-3 opacity-0 peer-checked:opacity-100 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<button aria-pressed="false" className="btn-star inline-flex items-center justify-center h-6 w-6 rounded-md text-slate-400 hover:text-amber-400 hover:bg-white/5" title="Star">
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</button>
</div>
<button className="flex-1 grid grid-cols-[auto,1fr,auto] items-center gap-3 text-left">
<img alt="sender avatar" className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="sender text-[14px] font-medium text-slate-200">HR</span>
<span className="tag inline-flex items-center h-5 px-2 rounded-full text-[11px] bg-rose-500/15 ring-1 ring-inset text-rose-200 ring-rose-400/20">Update</span>
</div>
<div className="subject text-[13px] line-clamp-1 text-slate-300">Policy changes and holidays</div>
<div className="snippet text-[12px] line-clamp-1 text-slate-400">Please read before Friday. Highlights attached.</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="time text-[11px] text-slate-400">Mon</span>
</div>
</button>
</div>

<div className="email-row group flex items-stretch gap-3 px-3 md:px-4 py-3 hover:bg-white/[0.03]">
<div className="flex items-start gap-3 pt-0.5">
<label className="inline-flex items-center gap-2 select-none">
<input className="email-select peer sr-only" type="checkbox"/>
<span className="h-4 w-4 rounded border grid place-items-center peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition border-white/20 bg-black/30">
<svg className="lucide lucide-check h-3 w-3 opacity-0 peer-checked:opacity-100 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<button aria-pressed="false" className="btn-star inline-flex items-center justify-center h-6 w-6 rounded-md text-slate-400 hover:text-amber-400 hover:bg-white/5" title="Star">
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</button>
</div>
<button className="flex-1 grid grid-cols-[auto,1fr,auto] items-center gap-3 text-left">
<img alt="sender avatar" className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="sender text-[14px] font-medium text-slate-200">Support</span>
</div>
<div className="subject text-[13px] line-clamp-1 text-slate-300">Your ticket has been updated</div>
<div className="snippet text-[12px] line-clamp-1 text-slate-400">We’re following up to ensure the issue is resolved.</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="time text-[11px] text-slate-400">Sun</span>
</div>
</button>
</div>
</div>
</section>

<section className="hidden md:flex flex-1 flex-col h-full bg-black/30">

<div className="px-5 py-4 border-b flex items-start justify-between gap-4 sticky top-0 z-20 backdrop-blur border-white/5 bg-black/40">
<div className="min-w-0">
<h1 className="text-[20px] md:text-[22px] font-semibold tracking-tight line-clamp-1 text-slate-100">Q3 Roadmap Review — highlights and next steps</h1>
<div className="mt-1 flex items-center gap-2">
<span className="inline-flex items-center h-5 px-2 rounded-full text-[11px] bg-indigo-500/15 ring-1 ring-inset text-indigo-200 ring-indigo-400/20">Updates</span>
<span className="inline-flex items-center h-5 px-2 rounded-full text-[11px] bg-emerald-500/15 ring-1 ring-inset text-emerald-200 ring-emerald-400/20">Priority</span>
</div>
</div>
<div className="flex items-center gap-1 shrink-0">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" title="Archive">
<svg className="lucide lucide-archive" data-lucide="archive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg>
</button>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" title="Spam">
<svg className="lucide lucide-shield-alert" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</button>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" title="Delete">
<svg className="lucide lucide-trash-2" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
<div className="w-px h-6 mx-1 bg-white/10"></div>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" title="Move">
<svg className="lucide lucide-folder-open" data-lucide="folder-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>
</button>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" title="Label">
<svg className="lucide lucide-tag" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</button>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" title="More">
<svg className="lucide lucide-more-horizontal" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="px-5 py-4 border-b flex items-start justify-between border-white/5">
<div className="flex items-start gap-3 min-w-0">
<img alt="sender avatar" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-[14px] font-medium text-slate-200">Evelyn from Northwind</span>
<span className="text-[12px] text-slate-400">evelyn@northwind.com</span>
</div>
<div className="text-[12px] text-slate-400">
                to <span className="text-slate-300">me</span>, <span className="text-slate-300">product@workspace.com</span>
</div>
<div className="mt-1 flex items-center gap-3">
<span className="inline-flex items-center gap-1 text-[12px] text-slate-400"><svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>10:42 AM</span>
<span className="inline-flex items-center gap-1 text-[12px] text-slate-400"><svg className="lucide lucide-paperclip h-3.5 w-3.5" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>2 attachments</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" title="Reply">
<svg className="lucide lucide-reply" data-lucide="reply" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path><path d="m9 17-5-5 5-5"></path></svg>
</button>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" title="Reply All">
<svg className="lucide lucide-reply-all" data-lucide="reply-all" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 17-5-5 5-5"></path><path d="M22 18v-2a4 4 0 0 0-4-4H7"></path><path d="m7 17-5-5 5-5"></path></svg>
</button>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" title="Forward">
<svg className="lucide lucide-forward" data-lucide="forward" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 17 5-5-5-5"></path><path d="M4 18v-2a4 4 0 0 1 4-4h12"></path></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-5 py-6 space-y-5">
<p className="text-[14px] leading-7 text-slate-300">
            Hey team, thanks again for the call today. Here’s a summary of what we agreed on for the Q3 roadmap and a few next steps to keep us moving.
          </p>
<ul className="list-disc pl-5 text-[14px] space-y-2 text-slate-300/95">
<li>Finalize scope for onboarding improvements by next Friday.</li>
<li>Ship performance optimizations in two milestones.</li>
<li>Prepare a public changelog and launch plan.</li>
</ul>
<p className="text-[14px] leading-7 text-slate-300">
            I’ve attached the current roadmap and a spreadsheet for tracking action items. Let me know if anything looks off.
          </p>

<div className="mt-4 border rounded-lg p-3 border-white/10">
<div className="flex items-center justify-between mb-2">
<div className="text-[13px] text-slate-300">Attachments</div>
<button className="inline-flex items-center gap-2 h-8 px-2 rounded-md border text-[12px] border-white/10 hover:border-white/20 hover:bg-white/5 text-slate-300">
<svg className="lucide lucide-download" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>Download all
              </button>
</div>
<div className="grid sm:grid-cols-2 gap-2">
<a className="flex items-center gap-3 p-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" href="#">
<div className="h-10 w-10 rounded-md grid place-items-center bg-white/5">
<svg className="lucide lucide-file-spreadsheet" data-lucide="file-spreadsheet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg>
</div>
<div className="min-w-0">
<div className="text-[13px] truncate text-slate-200">Q3-roadmap.xlsx</div>
<div className="text-[12px] text-slate-400">128 KB</div>
</div>
<svg className="lucide lucide-download ml-auto text-slate-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
<a className="flex items-center gap-3 p-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" href="#">
<div className="h-10 w-10 rounded-md grid place-items-center bg-white/5">
<svg className="lucide lucide-file-text" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="min-w-0">
<div className="text-[13px] truncate text-slate-200">Action-items.docx</div>
<div className="text-[12px] text-slate-400">64 KB</div>
</div>
<svg className="lucide lucide-download ml-auto text-slate-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
</div>
</div>

<div className="relative my-6">
<div className="h-px bg-white/10"></div>
<div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#0b0f14] px-3 text-[11px] text-slate-400">Earlier in thread</div>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<img alt="avatar" className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[13px] text-slate-400">You replied · Fri 3:11 PM</div>
<div className="mt-1 text-[14px] text-slate-300">
                  Looks great — I’ll review the sheet and add owners to each item.
                </div>
</div>
</div>
</div>
</div>

<div className="border-t p-4 backdrop-blur border-white/5 bg-black/40">
<div className="rounded-lg border overflow-hidden border-white/10">
<div className="flex items-center gap-1 px-2 py-2 border-b border-white/10 bg-black/40">
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-white/5 text-slate-300" title="Bold">
<svg className="lucide lucide-bold" data-lucide="bold" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"></path></svg>
</button>
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-white/5 text-slate-300" title="Italic">
<svg className="lucide lucide-italic" data-lucide="italic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="10" y1="4" y2="4"></line><line x1="14" x2="5" y1="20" y2="20"></line><line x1="15" x2="9" y1="4" y2="20"></line></svg>
</button>
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-white/5 text-slate-300" title="Link">
<svg className="lucide lucide-link-2" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</button>
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-white/5 text-slate-300" title="Image">
<svg className="lucide lucide-image" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</button>
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-white/5 text-slate-300" title="Emoji">
<svg className="lucide lucide-smile" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</button>
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-white/5 text-slate-300" title="Attach">
<svg className="lucide lucide-paperclip" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
</button>
</div>
<textarea className="w-full bg-transparent px-3 py-2 outline-none text-[14px] placeholder:text-slate-500 text-slate-200" placeholder="Reply..." rows="3"></textarea>
<div className="flex items-center justify-between px-3 py-2 border-t border-white/10 bg-black/40">
<div className="text-[12px] text-slate-400">Sending to: evelyn@northwind.com</div>
<div className="flex items-center gap-2">
<button className="h-8 px-3 rounded-md border text-[13px] border-white/10 hover:border-white/20 hover:bg-white/5 text-slate-300">Discard</button>
<button className="h-8 px-3 rounded-md bg-indigo-500/90 hover:bg-indigo-500 border text-white border-indigo-400/20">Send</button>
</div>
</div>
</div>
</div>
</section>

<div className="pointer-events-none fixed inset-0 z-50 flex justify-end" id="composer">
<div className="pointer-events-none inset-0 absolute opacity-0 transition-opacity bg-black/60" id="composer-backdrop"></div>
<div className="pointer-events-auto w-full sm:max-w-[560px] h-full bg-[#0e131a] border-l translate-x-full transition-transform flex flex-col border-white/5" id="composer-panel">
<div className="px-4 py-3 border-b flex items-center justify-between border-white/5">
<div className="text-[15px] font-medium tracking-tight text-slate-100">New message</div>
<div className="flex items-center gap-2">
<button className="h-8 w-8 grid place-items-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" id="composer-minimize" title="Minimize">
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="h-8 w-8 grid place-items-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" id="composer-close" title="Close">
<svg className="lucide lucide-x" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
<div className="p-4 space-y-3">
<div className="grid grid-cols-[60px,1fr] items-center gap-2">
<div className="text-[12px] text-slate-400">To</div>
<input className="h-9 px-3 rounded-md border outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/30 text-[14px] bg-white/5 border-white/10" placeholder="name@example.com" type="text"/>
</div>
<div className="grid grid-cols-[60px,1fr] items-center gap-2">
<div className="text-[12px] text-slate-400">Cc</div>
<input className="h-9 px-3 rounded-md border outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/30 text-[14px] bg-white/5 border-white/10" placeholder="Optional" type="text"/>
</div>
<div className="grid grid-cols-[60px,1fr] items-center gap-2">
<div className="text-[12px] text-slate-400">Subject</div>
<input className="h-9 px-3 rounded-md border outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/30 text-[14px] bg-white/5 border-white/10" placeholder="Subject" type="text"/>
</div>
</div>
<div className="flex-1 flex flex-col px-4 pb-4">
<div className="mb-2 flex items-center gap-1">
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-white/5 text-slate-300">
<svg className="lucide lucide-bold" data-lucide="bold" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"></path></svg>
</button>
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-white/5 text-slate-300">
<svg className="lucide lucide-italic" data-lucide="italic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="10" y1="4" y2="4"></line><line x1="14" x2="5" y1="20" y2="20"></line><line x1="15" x2="9" y1="4" y2="20"></line></svg>
</button>
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-white/5 text-slate-300">
<svg className="lucide lucide-link-2" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</button>
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-white/5 text-slate-300">
<svg className="lucide lucide-image" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</button>
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-white/5 text-slate-300">
<svg className="lucide lucide-paperclip" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
</button>
</div>
<div className="flex-1">
<textarea className="w-full h-full resize-none bg-transparent border rounded-md p-3 outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/30 text-[14px] placeholder:text-slate-500 border-white/10 text-slate-200" placeholder="Write your message..."></textarea>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="h-8 px-3 rounded-md bg-indigo-500/90 hover:bg-indigo-500 border text-white border-indigo-400/20">Send</button>
<button className="h-8 w-8 grid place-items-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5">
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<div className="flex items-center gap-2">
<button className="h-8 w-8 grid place-items-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" title="Discard">
<svg className="lucide lucide-trash-2" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
<button className="h-8 w-8 grid place-items-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" title="Schedule">
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
<button className="h-8 w-8 grid place-items-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" title="Settings">
<svg className="lucide lucide-settings" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none fixed inset-0 z-50 flex items-start justify-center" id="mobile-search">
<div className="pointer-events-none inset-0 absolute opacity-0 transition-opacity bg-black/60" id="mobile-search-backdrop"></div>
<div className="pointer-events-auto w-full max-w-xl mx-4 mt-[76px] rounded-lg border bg-[#0e131a] overflow-hidden opacity-0 -translate-y-2 transition-all border-white/10" id="mobile-search-panel">
<div className="p-3 flex items-center gap-2">
<svg className="lucide lucide-search text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="flex-1 h-10 bg-transparent outline-none text-[14px] placeholder:text-slate-500" placeholder="Search mail" type="text"/>
<button className="h-9 w-9 grid place-items-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" id="mobile-search-close">
<svg className="lucide lucide-x" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
