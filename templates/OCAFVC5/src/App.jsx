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
      
      // Data for Magics (updated per request; order and labels)
      const MAGICS = [
        {
          key: 'lead-magics',
          name: 'Lead Magics',
          dept: 'For Marketing',
          icon: 'megaphone',
          color: { bg: 'bg-indigo-100', text: 'text-indigo-600', ring: 'ring-indigo-200' }
        },
        {
          key: 'sales-magics',
          name: 'Sales Magics',
          dept: 'For Sales',
          icon: 'line-chart',
          color: { bg: 'bg-emerald-100', text: 'text-emerald-600', ring: 'ring-emerald-200' }
        },
        {
          key: 'task-magics',
          name: 'Task Magics',
          dept: 'For Task Management',
          icon: 'check-square',
          color: { bg: 'bg-orange-100', text: 'text-orange-600', ring: 'ring-orange-200' }
        },
        {
          key: 'hire-magics',
          name: 'Hire Magics',
          dept: 'For HR',
          icon: 'users',
          color: { bg: 'bg-cyan-100', text: 'text-cyan-700', ring: 'ring-cyan-200' }
        },
        {
          key: 'lex-magics',
          name: 'Lex Magics',
          dept: 'For Legal',
          icon: 'scale',
          color: { bg: 'bg-purple-100', text: 'text-purple-600', ring: 'ring-purple-200' }
        },
        {
          key: 'scale-magics',
          name: 'Scale Magics',
          dept: 'For RnD',
          icon: 'flask-conical',
          color: { bg: 'bg-fuchsia-100', text: 'text-fuchsia-600', ring: 'ring-fuchsia-200' }
        },
        {
          key: 'money-magics',
          name: 'Money Magics',
          dept: 'For Finance and Accounts',
          icon: 'banknote',
          color: { bg: 'bg-amber-100', text: 'text-amber-700', ring: 'ring-amber-200' }
        }
      ];

      const state = {
        open: false,
        selectedKey: 'task-magics',
        focusIndex: 0
      };

      const qs = (sel, root = document) => root.querySelector(sel);
      const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

      const root = qs('#switcher-root');
      const button = qs('#switcher-button', root);
      const panel = qs('#switcher-panel', root);
      const list = qs('#magics-list', root);
      const chev = qs('#chev', root);
      const currentIconWrap = qs('#current-icon-wrap', root);
      const currentTitle = qs('#current-title', root);
      const currentSubtitle = qs('#current-subtitle', root);

      function renderIcon(name, size = 16, cls = '') {
        try {
          return lucide.icons[name].toSvg({ width: size, height: size, class: cls, 'stroke-width': 1.5 });
        } catch {
          return lucide.icons['box'].toSvg({ width: size, height: size, class: cls, 'stroke-width': 1.5 });
        }
      }

      function applyAccent(el, color) {
        el.className = `flex h-9 w-9 items-center justify-center rounded-md ring-1 ${color.bg} ${color.text} ${color.ring}`;
      }
      function applyAccentSmall(el, color) {
        el.className = `flex h-7 w-7 items-center justify-center rounded-md ring-1 ${color.bg} ${color.text} ${color.ring}`;
      }

      function buildList() {
        list.innerHTML = '';
        MAGICS.forEach((m, idx) => {
          const li = document.createElement('li');
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.setAttribute('role', 'menuitem');
          btn.dataset.key = m.key;
          btn.dataset.index = String(idx);
          btn.className = 'w-full select-none rounded-lg p-2.5 text-left transition hover:bg-slate-50 focus:bg-slate-50 focus:outline-none';
          btn.innerHTML = `
            <div class="flex items-center gap-3">
              <span class="iconwrap"></span>
              <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-3">
                  <span class="truncate text-[15px] font-semibold text-slate-900">${m.name}</span>
                  <span class="check hidden text-emerald-600">
                    ${renderIcon('check', 16)}
                  </span>
                </div>
                <span class="block truncate text-[12px] text-slate-500">${m.dept}</span>
              </div>
            </div>
          `;
          li.appendChild(btn);
          list.appendChild(li);

          const iconWrap = qs('.iconwrap', btn);
          iconWrap.innerHTML = renderIcon(m.icon, 16);
          applyAccent(iconWrap, m.color);

          btn.addEventListener('click', () => {
            setSelected(m.key);
            closePanel();
            flashToast(`${m.name} selected`);
          });

          btn.addEventListener('mousemove', () => {
            state.focusIndex = idx;
          });
        });
        reflectActive();
      }

      function reflectActive() {
        qsa('button[role="menuitem"]', list).forEach((el) => {
          const active = el.dataset.key === state.selectedKey;
          const check = qs('.check', el);
          if (active) {
            el.classList.add('bg-slate-50');
            check?.classList.remove('hidden');
            el.setAttribute('aria-current', 'true');
          } else {
            el.classList.remove('bg-slate-50');
            check?.classList.add('hidden');
            el.removeAttribute('aria-current');
          }
        });
      }

      function setSelected(key) {
        const found = MAGICS.find((m) => m.key === key);
        if (!found) return;
        state.selectedKey = key;
        // Update button face
        currentTitle.textContent = found.name;
        currentSubtitle.textContent = found.dept.replace(/^For\s+/i, '').trim() || found.dept;
        currentIconWrap.innerHTML = renderIcon(found.icon, 16);
        applyAccentSmall(currentIconWrap, found.color);
        reflectActive();
        lucide.createIcons(); // refresh any static icons if needed
      }

      function openPanel() {
        state.open = true;
        button.setAttribute('aria-expanded', 'true');
        panel.classList.remove('pointer-events-none', 'opacity-0', 'translate-y-[-4px]');
        panel.classList.add('opacity-100');
        chev.classList.add('rotate-180');

        // Focus the selected or first item
        const items = qsa('button[role="menuitem"]', list);
        const idx = Math.max(0, items.findIndex((el) => el.dataset.key === state.selectedKey));
        state.focusIndex = idx === -1 ? 0 : idx;
        setTimeout(() => items[state.focusIndex]?.focus(), 0);

        document.addEventListener('mousedown', onOutsideClick);
        document.addEventListener('keydown', onGlobalKeydown);
      }

      function closePanel() {
        state.open = false;
        button.setAttribute('aria-expanded', 'false');
        panel.classList.add('pointer-events-none', 'opacity-0');
        chev.classList.remove('rotate-180');
        button.focus();
        document.removeEventListener('mousedown', onOutsideClick);
        document.removeEventListener('keydown', onGlobalKeydown);
      }

      function togglePanel() {
        state.open ? closePanel() : openPanel();
      }

      function onOutsideClick(e) {
        if (!root.contains(e.target)) closePanel();
      }

      function onGlobalKeydown(e) {
        const items = qsa('button[role="menuitem"]', list);
        if (e.key === 'Escape') {
          e.preventDefault();
          closePanel();
          return;
        }
        if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) {
          e.preventDefault();
          if (e.key === 'Home') state.focusIndex = 0;
          else if (e.key === 'End') state.focusIndex = items.length - 1;
          else if (e.key === 'ArrowDown') state.focusIndex = Math.min(items.length - 1, state.focusIndex + 1);
          else if (e.key === 'ArrowUp') state.focusIndex = Math.max(0, state.focusIndex - 1);
          items[state.focusIndex]?.focus();
          return;
        }
        if (e.key === 'Enter') {
          e.preventDefault();
          const key = items[state.focusIndex]?.dataset.key;
          if (key) {
            setSelected(key);
            closePanel();
            flashToast(`${MAGICS.find(m => m.key === key)?.name || 'Switched'} selected`);
          }
        }
      }

      button.addEventListener('click', togglePanel);
      button.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openPanel();
        }
      });

      // Lightweight toast
      let toastTimer;
      function flashToast(text) {
        let toast = document.getElementById('toast');
        if (!toast) {
          toast = document.createElement('div');
          toast.id = 'toast';
          toast.className = 'fixed bottom-4 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-slate-200 bg-white/95 px-3.5 py-2 text-[13px] text-slate-700 shadow-lg backdrop-blur transition';
          document.body.appendChild(toast);
        }
        toast.textContent = text;
        toast.classList.remove('opacity-0');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.add('opacity-0'), 1200);
      }

      // Tabs (minimal JS)
      const tabButtons = qsa('[data-tab]');
      const tabPanels = qsa('[data-panel]');
      function setActiveTab(key) {
        tabButtons.forEach((btn) => {
          const active = btn.dataset.tab === key;
          btn.setAttribute('aria-selected', active ? 'true' : 'false');
          btn.classList.toggle('text-slate-900', active);
          btn.classList.toggle('text-slate-600', !active);
          btn.classList.toggle('border-slate-900', active);
          btn.classList.toggle('border-transparent', !active);
        });
        tabPanels.forEach((panel) => {
          const show = panel.dataset.panel === key;
          panel.classList.toggle('hidden', !show);
        });
      }
      tabButtons.forEach((btn, idx) => {
        btn.addEventListener('click', () => setActiveTab(btn.dataset.tab));
        btn.addEventListener('keydown', (e) => {
          const left = e.key === 'ArrowLeft';
          const right = e.key === 'ArrowRight';
          const home = e.key === 'Home';
          const end = e.key === 'End';
          if (left || right || home || end) {
            e.preventDefault();
            const buttons = tabButtons;
            let nextIndex = idx + (right ? 1 : left ? -1 : 0);
            if (home) nextIndex = 0;
            if (end) nextIndex = buttons.length - 1;
            if (nextIndex < 0) nextIndex = buttons.length - 1;
            if (nextIndex >= buttons.length) nextIndex = 0;
            buttons[nextIndex].focus();
            setActiveTab(buttons[nextIndex].dataset.tab);
          }
        });
      });

      // Init
      buildList();
      setSelected(state.selectedKey);
      setActiveTab('overview');
      lucide.createIcons();
    
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
      
<header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-3">
<div className="grid h-9 w-9 place-items-center rounded-lg bg-slate-900 text-white text-[13px] font-medium">TM</div>
<span className="text-[22px] tracking-tight font-semibold text-slate-900">YourBrand</span>
</div>

<div className="relative" id="switcher-root">
<button aria-controls="switcher-panel" aria-expanded="false" aria-haspopup="true" className="group inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-[15px] font-medium text-slate-900 shadow-sm transition focus:outline-none focus:ring-4 focus:ring-slate-200/60 hover:shadow-md" id="switcher-button" type="button">
<span className="flex h-7 w-7 items-center justify-center rounded-md ring-1 bg-orange-100 text-orange-600 ring-orange-200" id="current-icon-wrap">

</span>
<span className="flex min-w-[150px] flex-col items-start leading-tight">
<span className="font-semibold" id="current-title">Task Magics</span>
<span className="text-[12px] text-slate-500 -mt-0.5" id="current-subtitle">Task Management</span>
</span>
<i className="h-4 w-4 text-slate-500 transition-transform" data-lucide="chevron-down" id="chev" strokeWidth="1.5"></i>
</button>

<div aria-labelledby="switcher-button" className="pointer-events-none absolute left-1/2 z-50 mt-2 w-[min(92vw,420px)] -translate-x-1/2 origin-top rounded-xl border border-slate-200 bg-white/95 shadow-xl opacity-0 backdrop-blur transition duration-150" id="switcher-panel" role="menu">
<div className="p-3">
<div className="px-2 pb-2">
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Switch Magics</h2>
<p className="text-[13px] text-slate-500">Choose the workspace to jump into</p>
</div>
<ul className="max-h-[60vh] overflow-auto rounded-lg" id="magics-list">

</ul>
</div>
</div>
</div>
<div className="hidden sm:flex items-center gap-3">
<button className="rounded-full border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200/60">
<i className="h-4 w-4" data-lucide="search" strokeWidth="1.5"></i>
</button>
<button className="rounded-full border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200/60">
<i className="h-4 w-4" data-lucide="bell" strokeWidth="1.5"></i>
</button>
<img alt="" className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</header>
<main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<section className="py-10">
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
<h3 className="text-[24px] tracking-tight font-semibold text-slate-900">Task Magics</h3>
<p className="text-[14px] text-slate-500">Use the switcher above to navigate across Magics.</p>
</div>

<div className="mt-4 border-b border-slate-200">
<div aria-label="Sections" className="flex w-full gap-1 overflow-x-auto" role="tablist">
<button aria-controls="tab-overview" aria-selected="true" className="relative -mb-px inline-flex items-center gap-2 rounded-t-md border-b-2 border-slate-900 px-3.5 py-2 text-[14px] font-medium text-slate-900 hover:text-slate-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-200/60" data-tab="overview" id="tab-overview-tab" role="tab">
<i className="h-4 w-4" data-lucide="layout-grid" strokeWidth="1.5"></i>
                Overview
              </button>
<button aria-controls="tab-tasks" aria-selected="false" className="relative -mb-px inline-flex items-center gap-2 rounded-t-md border-b-2 border-transparent px-3.5 py-2 text-[14px] font-medium text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-200/60" data-tab="tasks" id="tab-tasks-tab" role="tab">
<i className="h-4 w-4" data-lucide="check-square" strokeWidth="1.5"></i>
                Tasks
              </button>
<button aria-controls="tab-board" aria-selected="false" className="relative -mb-px inline-flex items-center gap-2 rounded-t-md border-b-2 border-transparent px-3.5 py-2 text-[14px] font-medium text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-200/60" data-tab="board" id="tab-board-tab" role="tab">
<i className="h-4 w-4" data-lucide="kanban" strokeWidth="1.5"></i>
                Board
              </button>
<button aria-controls="tab-timeline" aria-selected="false" className="relative -mb-px inline-flex items-center gap-2 rounded-t-md border-b-2 border-transparent px-3.5 py-2 text-[14px] font-medium text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-200/60" data-tab="timeline" id="tab-timeline-tab" role="tab">
<i className="h-4 w-4" data-lucide="timeline" strokeWidth="1.5"></i>
                Timeline
              </button>
<button aria-controls="tab-settings" aria-selected="false" className="relative -mb-px inline-flex items-center gap-2 rounded-t-md border-b-2 border-transparent px-3.5 py-2 text-[14px] font-medium text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-200/60" data-tab="settings" id="tab-settings-tab" role="tab">
<i className="h-4 w-4" data-lucide="settings" strokeWidth="1.5"></i>
                Settings
              </button>
</div>
</div>

<div aria-labelledby="tab-overview-tab" data-panel="overview" id="tab-overview" role="tabpanel">
<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-900 text-white">
<i className="h-4 w-4" data-lucide="check-square" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[15px] font-semibold text-slate-900">Welcome</div>
<div className="text-[12px] text-slate-500">This is a preview section.</div>
</div>
</div>
<p className="mt-3 text-[14px] text-slate-600">
                  The drop-down lets you switch instantly while keeping context. It’s keyboard accessible and responsive.
                </p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-700 ring-1 ring-slate-200">
<i className="h-4 w-4" data-lucide="sparkles" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[15px] font-semibold text-slate-900">Fast actions</div>
<div className="text-[12px] text-slate-500">Click or use Enter/Arrow keys.</div>
</div>
</div>
<p className="mt-3 text-[14px] text-slate-600">
                  Press the button, use ↑/↓ to highlight, Enter to switch, or Esc to close.
                </p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center overflow-hidden rounded-lg">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</span>
<div>
<div className="text-[15px] font-semibold text-slate-900">Clean visuals</div>
<div className="text-[12px] text-slate-500">Minimal and focused.</div>
</div>
</div>
<p className="mt-3 text-[14px] text-slate-600">
                  Subtle elevation, precise typography, and smart spacing keep it clear.
                </p>
</div>
</div>
</div>
<div aria-labelledby="tab-tasks-tab" className="hidden" data-panel="tasks" id="tab-tasks" role="tabpanel">
<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-100 text-indigo-700 ring-1 ring-indigo-200">
<i className="h-4 w-4" data-lucide="list-checks" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[15px] font-semibold text-slate-900">My Tasks</div>
<div className="text-[12px] text-slate-500">Today, Upcoming, Completed</div>
</div>
</div>
<ul className="mt-3 space-y-2 text-[14px] text-slate-700">
<li className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-400" data-lucide="circle" strokeWidth="1.5"></i>
                    Draft Q3 planning brief
                  </li>
<li className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-400" data-lucide="circle" strokeWidth="1.5"></i>
                    Review sprint tickets
                  </li>
<li className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-400" data-lucide="circle" strokeWidth="1.5"></i>
                    Sync with design
                  </li>
</ul>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
<i className="h-4 w-4" data-lucide="alarm-clock" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[15px] font-semibold text-slate-900">Due Soon</div>
<div className="text-[12px] text-slate-500">Deadlines in the next 7 days</div>
</div>
</div>
<p className="mt-3 text-[14px] text-slate-600">Nothing critical due. Stay ahead!</p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-100 text-amber-700 ring-1 ring-amber-200">
<i className="h-4 w-4" data-lucide="filter" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[15px] font-semibold text-slate-900">Filters</div>
<div className="text-[12px] text-slate-500">Status, Owner, Priority</div>
</div>
</div>
<p className="mt-3 text-[14px] text-slate-600">Quickly narrow down what matters most.</p>
</div>
</div>
</div>
<div aria-labelledby="tab-board-tab" className="hidden" data-panel="board" id="tab-board" role="tabpanel">
<div className="mt-6 rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-100 text-cyan-700 ring-1 ring-cyan-200">
<i className="h-4 w-4" data-lucide="kanban" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[15px] font-semibold text-slate-900">Kanban Board</div>
<div className="text-[12px] text-slate-500">To Do, In Progress, Done</div>
</div>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-3">
<div className="rounded-lg border border-slate-200">
<div className="flex items-center justify-between px-3 py-2">
<span className="text-[13px] font-medium text-slate-700">To Do</span>
<span className="text-[12px] text-slate-500">3</span>
</div>
<div className="space-y-2 border-t border-slate-100 p-3">
<div className="rounded-md border border-slate-200 bg-white p-3 text-[13px] text-slate-700">Set up analytics</div>
<div className="rounded-md border border-slate-200 bg-white p-3 text-[13px] text-slate-700">Create onboarding flow</div>
<div className="rounded-md border border-slate-200 bg-white p-3 text-[13px] text-slate-700">QA checklist</div>
</div>
</div>
<div className="rounded-lg border border-slate-200">
<div className="flex items-center justify-between px-3 py-2">
<span className="text-[13px] font-medium text-slate-700">In Progress</span>
<span className="text-[12px] text-slate-500">2</span>
</div>
<div className="space-y-2 border-t border-slate-100 p-3">
<div className="rounded-md border border-slate-200 bg-white p-3 text-[13px] text-slate-700">Refactor API</div>
<div className="rounded-md border border-slate-200 bg-white p-3 text-[13px] text-slate-700">Marketing site revamp</div>
</div>
</div>
<div className="rounded-lg border border-slate-200">
<div className="flex items-center justify-between px-3 py-2">
<span className="text-[13px] font-medium text-slate-700">Done</span>
<span className="text-[12px] text-slate-500">1</span>
</div>
<div className="space-y-2 border-t border-slate-100 p-3">
<div className="rounded-md border border-slate-200 bg-white p-3 text-[13px] text-slate-700">Initial setup</div>
</div>
</div>
</div>
</div>
</div>
<div aria-labelledby="tab-timeline-tab" className="hidden" data-panel="timeline" id="tab-timeline" role="tabpanel">
<div className="mt-6 rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-lg bg-fuchsia-100 text-fuchsia-700 ring-1 ring-fuchsia-200">
<i className="h-4 w-4" data-lucide="timeline" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[15px] font-semibold text-slate-900">Timeline</div>
<div className="text-[12px] text-slate-500">Milestones &amp; dependencies</div>
</div>
</div>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3">
<i className="mt-0.5 h-4 w-4 text-slate-400" data-lucide="calendar" strokeWidth="1.5"></i>
<div>
<div className="text-[14px] font-medium text-slate-800">Kickoff</div>
<div className="text-[12px] text-slate-500">Mon, Sep 9</div>
</div>
</li>
<li className="flex items-start gap-3">
<i className="mt-0.5 h-4 w-4 text-slate-400" data-lucide="calendar" strokeWidth="1.5"></i>
<div>
<div className="text-[14px] font-medium text-slate-800">Alpha</div>
<div className="text-[12px] text-slate-500">Fri, Oct 4</div>
</div>
</li>
<li className="flex items-start gap-3">
<i className="mt-0.5 h-4 w-4 text-slate-400" data-lucide="calendar" strokeWidth="1.5"></i>
<div>
<div className="text-[14px] font-medium text-slate-800">Beta</div>
<div className="text-[12px] text-slate-500">Tue, Nov 12</div>
</div>
</li>
</ul>
</div>
</div>
<div aria-labelledby="tab-settings-tab" className="hidden" data-panel="settings" id="tab-settings" role="tabpanel">
<div className="mt-6 grid gap-4 sm:grid-cols-2">
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-700 ring-1 ring-slate-200">
<i className="h-4 w-4" data-lucide="shield-check" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[15px] font-semibold text-slate-900">Access</div>
<div className="text-[12px] text-slate-500">Roles &amp; permissions</div>
</div>
</div>
<p className="mt-3 text-[14px] text-slate-600">Control who can view or edit tasks, boards, and automations.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-lg bg-rose-100 text-rose-700 ring-1 ring-rose-200">
<i className="h-4 w-4" data-lucide="sliders-vertical" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[15px] font-semibold text-slate-900">Preferences</div>
<div className="text-[12px] text-slate-500">Notifications &amp; defaults</div>
</div>
</div>
<p className="mt-3 text-[14px] text-slate-600">Choose defaults for views, reminders, and quick actions.</p>
</div>
</div>
</div>

</div>
</section>
</main>


    </>
  );
}
