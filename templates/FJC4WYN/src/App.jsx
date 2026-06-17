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
      
    // Dropdown open/close and animation logic
    (function() {
      const btn = document.getElementById('teamDropdownBtn');
      const menu = document.getElementById('teamDropdownMenu');
      const chevron = document.getElementById('dropdownChevron');
      const selectedTeam = document.getElementById('selectedTeam');
      const marketingCheck = document.getElementById('marketingCheck');
      const personalCheck = document.getElementById('personalCheck');
      const teamListStatic = document.getElementById('teamListStatic');

      // Helper for closing dropdown
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
      // Initial state
      menu.classList.add('scale-95', 'opacity-0', 'pointer-events-none');

      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (menu.classList.contains('opacity-100')) {
          closeDropdown();
        } else {
          openDropdown();
        }
      });

      // Handle team selection
      menu.querySelectorAll('button[data-team]').forEach(el => {
        el.addEventListener('click', function(e) {
          e.preventDefault();
          const team = this.getAttribute('data-team');
          selectedTeam.textContent = team;

          // Swapping checkmarks
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

      // Initial checkmarks
      marketingCheck.classList.remove('opacity-0');
      personalCheck.classList.add('opacity-0');

      // Click outside to close
      document.addEventListener('mousedown', function(e) {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
          closeDropdown();
        }
      });

      // Keyboard navigation
      btn.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDropdown();
          menu.querySelector('button[data-team]')?.focus();
        }
      });
    })();
  


    // Initialize icons with 1.5 stroke width
    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Sidebar toggle
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

      // Initialize mobile hidden state
      if (window.innerWidth < 1024) {
        sidebar.classList.add('-translate-x-full');
      }

      if (openBtn) openBtn.addEventListener('click', openSidebarFn);
      if (closeBtn) closeBtn.addEventListener('click', closeSidebarFn);
      if (overlay) overlay.addEventListener('click', closeSidebarFn);

      // Copy markup
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

      // Responsive: close sidebar on resize to mobile / open on desktop
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
      
<div className="min-h-screen w-full flex">

<aside className="fixed inset-y-0 left-0 z-40 w-80 supports-backdrop-blur:bg-white/70 lg:static lg:translate-x-0 transition-transform duration-300 ease-out bg-white/90 border-zinc-200 border-r shadow-sm backdrop-blur translate-x-0" id="sidebar">


<div className="lg:hidden flex items-center justify-between px-4 h-14 border-b border-zinc-200">
<button className="inline-flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-zinc-100" id="closeSidebar">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="text-sm text-zinc-700">Workspace</div>
<button className="inline-flex items-center gap-2 px-2.5 py-2 rounded-xl border border-zinc-200 hover:bg-zinc-50">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>
<div className="pt-4 pr-4 pb-4 pl-4 space-y-10">

<div className="bg-white border-zinc-200 border rounded-2xl pt-3 pr-3 pb-3 pl-3">
<div className="relative">
<button aria-expanded="false" aria-haspopup="listbox" className="w-full flex hover:bg-zinc-100 transition bg-zinc-50 border-zinc-200 border rounded-xl pt-3 pr-3 pb-3 pl-3 items-center justify-between" id="teamDropdownBtn">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-white">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<div className="text-left">
<p className="text-xs text-zinc-500">Team</p>
<p className="text-sm font-medium leading-tight" id="selectedTeam">Marketing</p>
</div>
</div>
<svg className="lucide lucide-chevron-down h-4 w-4 text-zinc-500 transition-transform duration-300 ease-out" data-lucide="chevron-down" fill="none" height="24" id="dropdownChevron" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="absolute left-0 right-0 z-20 mt-2 origin-top shadow-sm rounded-2xl border border-zinc-200 bg-white ring-1 ring-black/5 space-y-2 p-2 transition-all duration-300 ease-out scale-95 opacity-0 pointer-events-none" id="teamDropdownMenu" style={{top: '100%'}} tabindex="-1">
<button className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-zinc-50 transition" data-team="Marketing">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<span className="text-sm">Marketing</span>
</div>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300" id="marketingCheck">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-zinc-50 transition" data-team="Personal">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-white">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<span className="text-sm">Personal</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-zinc-500 border border-zinc-200 rounded-lg px-1.5 py-0.5 opacity-0" id="personalCheck">
<svg className="lucide lucide-command h-3 w-3" data-lucide="command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
<span>2</span>
</span>
</button>
</div>
</div>
<div className="mt-3 space-y-2" id="teamListStatic" style={{display: 'none'}}>
<button className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-zinc-50 transition">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<span className="text-sm">Marketing</span>
</div>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-zinc-50 transition">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-white">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<span className="text-sm">Personal</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-zinc-500 border border-zinc-200 rounded-lg px-1.5 py-0.5">
<svg className="lucide lucide-command h-3 w-3" data-lucide="command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
<span>2</span>
</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl border border-dashed border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50 transition">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
<span className="text-sm">Add new team</span>
</button>
</div>

</div>

<nav className="space-y-5">
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-zinc-700 hover:bg-zinc-100" href="#">
<svg className="lucide lucide-message-square h-4 w-4 text-zinc-500" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
              Notes
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-zinc-700 hover:bg-zinc-100" href="#">
<svg className="lucide lucide-mail h-4 w-4 text-zinc-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              Email
            </a>
</div>
<div className="px-3 text-xs font-medium text-zinc-500">Records</div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-zinc-700 hover:bg-zinc-100" href="#">
<svg className="lucide lucide-building-2 h-4 w-4 text-zinc-500" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
              Companies
            </a>
<a aria-current="page" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm bg-zinc-900 text-white shadow-sm" href="#">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
              People
            </a>
</div>
<div className="px-3 text-xs font-medium text-zinc-500">Collections</div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-zinc-700 hover:bg-zinc-100" href="#">
<svg className="lucide lucide-badge-dollar-sign h-4 w-4 text-zinc-500" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
              VC Deal Flow
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-zinc-700 hover:bg-zinc-100" href="#">
<svg className="lucide lucide-folder h-4 w-4 text-zinc-500" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
              Projects
            </a>
</div>
</nav>

<div className="border-t border-zinc-200"></div>

<div className="px-2">
<div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-zinc-50 transition">
<img alt="" className="h-8 w-8 rounded-xl object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=80&amp;h=80&amp;fit=crop&amp;auto=format"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">Alex Morgan</p>
<p className="text-xs text-zinc-500 truncate">alex.morgan@workspace.com</p>
</div>
<button className="inline-flex items-center justify-center h-8 w-8 rounded-xl border border-zinc-200 hover:bg-zinc-50">
<svg className="lucide lucide-settings h-4 w-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
<div className="mt-2 flex items-center gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition text-sm">
<svg className="lucide lucide-user-plus h-4 w-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
              Invite
            </button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition text-sm">
<svg className="lucide lucide-log-out h-4 w-4" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
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
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
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
<svg className="lucide lucide-wand-2 h-4 w-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
              Customize
            </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition" id="copyHtml">
<svg className="lucide lucide-copy h-4 w-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
              Copy markup
            </button>
</div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-2xl border border-zinc-200 bg-white p-4">
<div className="flex items-center gap-2 text-zinc-700 text-sm">
<svg className="lucide lucide-info h-4 w-4 text-zinc-500" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
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
<svg className="lucide lucide-ruler h-4 w-4 text-zinc-500" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>
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
