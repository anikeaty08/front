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



      const $ = (s, r = document) => r.querySelector(s);
      const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

      // Sidebar drawer
      const sidebar = $('#sidebar');
      const panel = $('#sidebarPanel');
      const backdrop = $('#sidebarBackdrop');
      const openBtn = $('#openSidebar');
      const closeBtn = $('#closeSidebar');
      const openDrawer = () => {
        backdrop.classList.remove('hidden');
        panel.style.transform = 'translateX(0)';
      };
      const closeDrawer = () => {
        backdrop.classList.add('hidden');
        panel.style.transform = 'translateX(-100%)';
      };
      openBtn?.addEventListener('click', openDrawer);
      closeBtn?.addEventListener('click', closeDrawer);
      backdrop?.addEventListener('click', closeDrawer);

      // Accordions
      $$('[data-accordion]').forEach(btn => {
        btn.addEventListener('click', () => {
          const key = btn.getAttribute('data-accordion');
          const panel = document.querySelector(`[data-acc-panel="${key}"]`);
          const chev = btn.querySelector('[data-acc-chevron]');
          const isOpen = !panel.classList.contains('hidden');
          panel.classList.toggle('hidden');
          chev.style.transform = isOpen ? '' : 'rotate(180deg)';
          lucide.createIcons();
        });
      });

      // Filters state
      const state = {
        chips: new Map(), // key -> Set(values)
        inputs: new Map(), // key -> value
        checks: new Map(), // key -> Set(values)
        sliders: new Map() // key -> value
      };

      const updateFilterCount = () => {
        let count = 0;
        state.chips.forEach(set => count += set.size);
        state.inputs.forEach(v => count += v ? 1 : 0);
        state.checks.forEach(set => count += set.size);
        state.sliders.forEach(v => count += v ? 1 : 0);
        $('#filterCount').textContent = count;
        $('#applyFilters').disabled = count === 0;
        // Active bar
        const bar = $('#activeFiltersBar');
        const chipsWrap = $('#activeChips');
        chipsWrap.innerHTML = '';
        if (count > 0) {
          bar.classList.remove('hidden');
          // Render active chips
          state.chips.forEach((set, key) => {
            set.forEach(val => addActiveChip(`${key}:${val}`, () => toggleChipByKey(key, val, false)));
          });
          state.checks.forEach((set, key) => {
            set.forEach(val => addActiveChip(`${key}:${val}`, () => toggleCheckByKey(key, val, false)));
          });
          state.inputs.forEach((val, key) => {
            if (val) addActiveChip(`${key}:${val}`, () => clearInputByKey(key));
          });
          state.sliders.forEach((val, key) => {
            if (val) addActiveChip(`${key}:${val}`, () => clearSliderByKey(key));
          });
        } else {
          bar.classList.add('hidden');
        }
      };

      const addActiveChip = (label, onRemove) => {
        const chip = document.createElement('button');
        chip.className = 'group inline-flex items-center gap-1.5 px-2 h-7 rounded border border-white/10 bg-white/[0.03] text-xs';
        chip.innerHTML = `<span>${label}</span><i data-lucide="x" class="h-3.5 w-3.5 text-white/50 group-hover:text-white"></i>`;
        chip.addEventListener('click', onRemove);
        $('#activeChips').appendChild(chip);
        lucide.createIcons();
      };

      // Chips
      const toggleChipByKey = (key, value, toggle = true) => {
        if (!state.chips.has(key)) state.chips.set(key, new Set());
        const set = state.chips.get(key);
        if (toggle) {
          set.has(value) ? set.delete(value) : set.add(value);
        } else {
          set.delete(value);
        }
        // Reflect UI
        $$(`[data-chip][data-key="${key}"][data-value="${CSS.escape(value)}"]`).forEach(el => {
          const active = set.has(value);
          el.classList.toggle('bg-white', active);
          el.classList.toggle('text-neutral-900', active);
          el.classList.toggle('border-white/10', !active);
        });
        updateFilterCount();
      };
      $$('[data-chip]').forEach(chip => {
        chip.addEventListener('click', () => {
          toggleChipByKey(chip.dataset.key, chip.dataset.value, true);
        });
      });

      // Inputs
      const inputHandler = (el) => {
        const key = el.dataset.key;
        const v = (el.value || '').trim();
        state.inputs.set(key, v);
        updateFilterCount();
      };
      $$('[data-filter="text"], [data-filter="number"]').forEach(inp => {
        inp.addEventListener('input', () => inputHandler(inp));
      });

      const clearInputByKey = (key) => {
        state.inputs.set(key, '');
        $$(`[data-key="${key}"][data-filter]`).forEach(inp => inp.value = '');
        updateFilterCount();
      };

      // Checks
      const toggleCheckByKey = (key, value, toggle = true) => {
        if (!state.checks.has(key)) state.checks.set(key, new Set());
        const set = state.checks.get(key);
        if (toggle) {
          set.has(value) ? set.delete(value) : set.add(value);
        } else {
          set.delete(value);
        }
        // Reflect inputs
        $$(`input[type="checkbox"][data-check][data-key="${key}"][value="${CSS.escape(value)}"]`).forEach(el => {
          el.checked = set.has(value);
        });
        updateFilterCount();
      };
      $$('input[type="checkbox"][data-check]').forEach(cb => {
        cb.addEventListener('change', () => {
          toggleCheckByKey(cb.dataset.key, cb.value, true);
        });
      });

      // Sliders
      const employeesMap = {
        1: '1–10', 2: '11–50', 3: '51–200', 4: '201–500', 5: '501–1000', 6: '1000+'
      };
      const revenueMap = {
        1: 'Pre‑rev', 2: '$0–1M', 3: '$1–10M', 4: '$10–50M', 5: '$50–100M', 6: '$100M+'
      };
      const employeesRange = $('#employeesRange');
      const revenueRange = $('#revenueRange');

      const sliderUpdate = (key, el, map, labelEl) => {
        const val = String(el.value);
        const label = map[val];
        labelEl.textContent = key === 'employees' ? `${label}` : `${label.replaceAll(' ', '')}`;
        state.sliders.set(key, label);
        updateFilterCount();
      };

      if (employeesRange) {
        employeesRange.addEventListener('input', () => sliderUpdate('employees', employeesRange, employeesMap, $('#employeesValue')));
      }
      if (revenueRange) {
        revenueRange.addEventListener('input', () => sliderUpdate('revenue', revenueRange, revenueMap, $('#revenueValue')));
      }

      const clearSliderByKey = (key) => {
        if (key === 'employees') {
          employeesRange.value = 3;
          $('#employeesValue').textContent = '51–200';
        }
        if (key === 'revenue') {
          revenueRange.value = 3;
          $('#revenueValue').textContent = '$1M–$10M';
        }
        state.sliders.delete(key);
        updateFilterCount();
      };

      // Apply & Reset
      const showResults = () => {
        $('#stateEmpty').classList.add('hidden');
        $('#stateResults').classList.remove('hidden');
        $('#stateCompanies').classList.add('hidden');
        $('#resultSubtitle').textContent = 'Filtered prospects with verified details.';
        $('#resultCount').textContent = '128 results';
        if (window.innerWidth < 1024) closeDrawer();
      };

      const showEmpty = () => {
        $('#stateEmpty').classList.remove('hidden');
        $('#stateResults').classList.add('hidden');
        $('#resultSubtitle').textContent = 'Use the filters to discover precise prospects.';
      };

      $('#applyFilters').addEventListener('click', () => {
        const count = parseInt($('#filterCount').textContent, 10);
        if (count > 0) showResults();
        else showEmpty();
      });

      $('#resetFilters').addEventListener('click', () => {
        // Clear chips
        state.chips.forEach((set, key) => {
          set.forEach(val => toggleChipByKey(key, val, false));
          state.chips.set(key, new Set());
        });
        // Clear inputs
        state.inputs.forEach((v, key) => clearInputByKey(key));
        // Clear checks
        $$('input[type="checkbox"][data-check]').forEach(cb => cb.checked = false);
        state.checks.clear();
        // Clear sliders
        clearSliderByKey('employees');
        clearSliderByKey('revenue');
        state.sliders.clear();
        updateFilterCount();
        showEmpty();
      });

      // Active clear all
      $('#clearAll').addEventListener('click', () => $('#resetFilters').click());

      // Tabs
      const tabPeople = $('#tabPeople');
      const tabCompanies = $('#tabCompanies');
      tabPeople.addEventListener('click', () => {
        tabPeople.className = 'px-3 h-9 rounded-sm bg-white text-neutral-900 text-sm font-medium';
        tabCompanies.className = 'px-3 h-9 rounded-sm text-sm hover:bg-white/10';
        $('#stateCompanies').classList.add('hidden');
        // Decide to show results or empty
        const count = parseInt($('#filterCount').textContent, 10);
        if (count > 0) {
          $('#stateResults').classList.remove('hidden');
          $('#stateEmpty').classList.add('hidden');
        } else {
          $('#stateEmpty').classList.remove('hidden');
          $('#stateResults').classList.add('hidden');
        }
      });
      tabCompanies.addEventListener('click', () => {
        tabCompanies.className = 'px-3 h-9 rounded-sm bg-white text-neutral-900 text-sm font-medium';
        tabPeople.className = 'px-3 h-9 rounded-sm text-sm hover:bg-white/10';
        $('#stateResults').classList.add('hidden');
        $('#stateEmpty').classList.add('hidden');
        $('#stateCompanies').classList.remove('hidden');
        $('#resultSubtitle').textContent = 'Company insights and firmographics.';
      });

      // Sort menu
      const sortBtn = $('#sortBtn');
      const sortMenu = $('#sortMenu');
      const sortLabel = $('#sortLabel');
      sortBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sortMenu.classList.toggle('hidden');
      });
      sortMenu.addEventListener('click', (e) => {
        const target = e.target.closest('button[data-sort]');
        if (!target) return;
        sortLabel.textContent = target.dataset.sort;
        sortMenu.classList.add('hidden');
      });
      document.addEventListener('click', () => sortMenu.classList.add('hidden'));

      // Initialize icons
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
      

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 hover:bg-white/5 transition" id="openSidebar">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
<a className="flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 to-violet-500 grid place-items-center">
<i className="h-4 w-4 text-white" data-lucide="search"></i>
</div>
<span className="text-lg tracking-tight font-medium">Searchleads</span>
</a>
<div className="hidden md:flex items-center gap-2 ml-6">
<div className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-white/70">
                  Beta
                </div>
<div className="hidden xl:flex items-center gap-1 text-white/50 text-sm">
<i className="h-4 w-4" data-lucide="shield-check"></i>
<span>Enriched with verified data</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="hidden md:inline-flex items-center gap-2 h-9 px-3 rounded-md border border-white/10 hover:bg-white/5 transition">
<i className="h-4 w-4" data-lucide="download"></i>
<span className="text-sm font-normal">Export</span>
</button>
<button className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-md border border-white/10 hover:bg-white/5 transition">
<span className="text-sm font-normal">Sign in</span>
</button>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-white text-neutral-900 hover:bg-neutral-100 transition">
<span className="text-sm font-medium">Get Started</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</header>

<main className="flex-1">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
<div className="grid grid-cols-1 lg:grid-cols-[320px,1fr] gap-6">

<aside className="relative z-40" id="sidebar">

<div className="fixed inset-0 bg-black/50 lg:hidden hidden" id="sidebarBackdrop"></div>

<div className="fixed lg:static inset-y-0 left-0 w-full max-w-[320px] lg:max-w-none lg:w-auto translate-x-[-100%] lg:translate-x-0 transition-transform lg:transition-none bg-neutral-950 lg:bg-transparent" id="sidebarPanel">
<div className="h-full lg:h-auto lg:sticky lg:top-[88px] flex flex-col rounded-lg border border-white/10 bg-white/[0.02]">
<div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/70" data-lucide="filter"></i>
<span className="text-sm font-medium">All Filters</span>
<span className="ml-2 inline-flex items-center justify-center h-5 min-w-[1.25rem] px-1.5 rounded bg-white/10 text-[11px] text-white/80" id="filterCount">0</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-white/10 hover:bg-white/5 transition" id="exportMobile">
<i className="h-3.5 w-3.5" data-lucide="download"></i>
<span className="text-xs font-normal">Export</span>
</button>
<button className="lg:hidden inline-flex items-center justify-center h-8 w-8 rounded-md border border-white/10 hover:bg-white/5 transition" id="closeSidebar">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4">

<div className="relative">
<i className="absolute left-3 top-2.5 h-4 w-4 text-white/40" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 h-10 rounded-md bg-white/5 border border-white/10 placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white/20" id="globalSearch" placeholder="Search people, titles, companies..." type="text"/>
</div>

<section className="rounded-md border border-white/10">
<button className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5" data-accordion="job">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="briefcase"></i>
<span className="text-sm font-medium">Job Titles</span>
</div>
<i className="h-4 w-4 text-white/60 transition-transform" data-acc-chevron="" data-lucide="chevron-down"></i>
</button>
<div className="px-4 pb-4 hidden" data-acc-panel="job">
<div className="space-y-3">
<div className="relative">
<i className="absolute left-3 top-2.5 h-4 w-4 text-white/40" data-lucide="type"></i>
<input className="w-full pl-9 pr-3 h-10 rounded-md bg-white/5 border border-white/10 placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white/20" data-filter="text" data-key="title" placeholder="e.g. Head of Growth" type="text"/>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-2.5 h-8 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/10 text-xs" data-chip="" data-key="title" data-value="Growth">Growth</button>
<button className="px-2.5 h-8 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/10 text-xs" data-chip="" data-key="title" data-value="Marketing">Marketing</button>
<button className="px-2.5 h-8 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/10 text-xs" data-chip="" data-key="title" data-value="Sales">Sales</button>
</div>
</div>
</div>
</section>

<section className="rounded-md border border-white/10">
<button className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5" data-accordion="employees">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="users"></i>
<span className="text-sm font-medium">Employees</span>
</div>
<i className="h-4 w-4 text-white/60 transition-transform" data-acc-chevron="" data-lucide="chevron-down"></i>
</button>
<div className="px-4 pb-4 hidden" data-acc-panel="employees">
<div className="space-y-3">
<div className="flex items-center justify-between text-xs text-white/60">
<span>Company size</span>
<span className="text-white/80" id="employeesValue">1–500</span>
</div>
<input className="w-full h-2 rounded-full appearance-none bg-white/10 accent-white/80" id="employeesRange" max="6" min="1" type="range" value="3"/>
<div className="flex justify-between text-[11px] text-white/40">
<span>1–10</span><span>11–50</span><span>51–200</span><span>201–500</span><span>501–1000</span><span>1000+</span>
</div>
</div>
</div>
</section>

<section className="rounded-md border border-white/10">
<button className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5" data-accordion="location">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="map-pin"></i>
<span className="text-sm font-medium">Location</span>
</div>
<i className="h-4 w-4 text-white/60 transition-transform" data-acc-chevron="" data-lucide="chevron-down"></i>
</button>
<div className="px-4 pb-4 hidden" data-acc-panel="location">
<div className="space-y-3">
<div className="relative">
<i className="absolute left-3 top-2.5 h-4 w-4 text-white/40" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 h-10 rounded-md bg-white/5 border border-white/10 placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white/20" data-filter="text" data-key="location" placeholder="City, state or country" type="text"/>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-2.5 h-8 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/10 text-xs" data-chip="" data-key="location" data-value="Remote">Remote</button>
<button className="px-2.5 h-8 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/10 text-xs" data-chip="" data-key="location" data-value="United States">United States</button>
<button className="px-2.5 h-8 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/10 text-xs" data-chip="" data-key="location" data-value="Europe">Europe</button>
</div>
</div>
</div>
</section>

<section className="rounded-md border border-white/10">
<button className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5" data-accordion="industry">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="building-2"></i>
<span className="text-sm font-medium">Industry</span>
</div>
<i className="h-4 w-4 text-white/60 transition-transform" data-acc-chevron="" data-lucide="chevron-down"></i>
</button>
<div className="px-4 pb-4 hidden" data-acc-panel="industry">
<div className="space-y-2">

<label className="flex items-center gap-3 py-2">
<input className="peer sr-only" data-check="" data-key="industry" type="checkbox" value="SaaS"/>
<span className="h-5 w-5 grid place-items-center rounded border border-white/20 bg-white/0 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition">
<i className="hidden peer-checked:block h-3.5 w-3.5 text-white" data-lucide="check"></i>
</span>
<span className="text-sm text-white/80">SaaS</span>
</label>
<label className="flex items-center gap-3 py-2">
<input className="peer sr-only" data-check="" data-key="industry" type="checkbox" value="E-commerce"/>
<span className="h-5 w-5 grid place-items-center rounded border border-white/20 bg-white/0 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition">
<i className="hidden peer-checked:block h-3.5 w-3.5 text-white" data-lucide="check"></i>
</span>
<span className="text-sm text-white/80">E‑commerce</span>
</label>
<label className="flex items-center gap-3 py-2">
<input className="peer sr-only" data-check="" data-key="industry" type="checkbox" value="Fintech"/>
<span className="h-5 w-5 grid place-items-center rounded border border-white/20 bg-white/0 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition">
<i className="hidden peer-checked:block h-3.5 w-3.5 text-white" data-lucide="check"></i>
</span>
<span className="text-sm text-white/80">Fintech</span>
</label>
</div>
</div>
</section>

<section className="rounded-md border border-white/10">
<button className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5" data-accordion="tech">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="cpu"></i>
<span className="text-sm font-medium">Technology</span>
</div>
<i className="h-4 w-4 text-white/60 transition-transform" data-acc-chevron="" data-lucide="chevron-down"></i>
</button>
<div className="px-4 pb-4 hidden" data-acc-panel="tech">
<div className="space-y-2">
<label className="flex items-center gap-3 py-2">
<input className="peer sr-only" data-check="" data-key="tech" type="checkbox" value="React"/>
<span className="h-5 w-5 grid place-items-center rounded border border-white/20 bg-white/0 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition">
<i className="hidden peer-checked:block h-3.5 w-3.5 text-white" data-lucide="check"></i>
</span>
<span className="text-sm text-white/80">React</span>
</label>
<label className="flex items-center gap-3 py-2">
<input className="peer sr-only" data-check="" data-key="tech" type="checkbox" value="Node.js"/>
<span className="h-5 w-5 grid place-items-center rounded border border-white/20 bg-white/0 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition">
<i className="hidden peer-checked:block h-3.5 w-3.5 text-white" data-lucide="check"></i>
</span>
<span className="text-sm text-white/80">Node.js</span>
</label>
<label className="flex items-center gap-3 py-2">
<input className="peer sr-only" data-check="" data-key="tech" type="checkbox" value="AWS"/>
<span className="h-5 w-5 grid place-items-center rounded border border-white/20 bg-white/0 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition">
<i className="hidden peer-checked:block h-3.5 w-3.5 text-white" data-lucide="check"></i>
</span>
<span className="text-sm text-white/80">AWS</span>
</label>
</div>
</div>
</section>

<section className="rounded-md border border-white/10">
<button className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5" data-accordion="revenue">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="badge-dollar-sign"></i>
<span className="text-sm font-medium">Revenue Range</span>
</div>
<i className="h-4 w-4 text-white/60 transition-transform" data-acc-chevron="" data-lucide="chevron-down"></i>
</button>
<div className="px-4 pb-4 hidden" data-acc-panel="revenue">
<div className="space-y-3">
<div className="flex items-center justify-between text-xs text-white/60">
<span>Annual revenue</span>
<span className="text-white/80" id="revenueValue">$1M–$50M</span>
</div>
<input className="w-full h-2 rounded-full appearance-none bg-white/10 accent-white/80" id="revenueRange" max="6" min="1" type="range" value="3"/>
<div className="flex justify-between text-[11px] text-white/40">
<span>Pre‑rev</span><span>$0–1M</span><span>$1–10M</span><span>$10–50M</span><span>$50–100M</span><span>$100M+</span>
</div>
</div>
</div>
</section>

<section className="rounded-md border border-white/10">
<button className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5" data-accordion="founded">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="calendar"></i>
<span className="text-sm font-medium">Founded Year</span>
</div>
<i className="h-4 w-4 text-white/60 transition-transform" data-acc-chevron="" data-lucide="chevron-down"></i>
</button>
<div className="px-4 pb-4 hidden" data-acc-panel="founded">
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1">
<label className="text-xs text-white/60">From</label>
<input className="w-full h-10 rounded-md bg-white/5 border border-white/10 placeholder-white/40 text-sm px-3 focus:outline-none focus:ring-2 focus:ring-white/20" data-filter="number" data-key="founded_from" placeholder="2015" type="number"/>
</div>
<div className="space-y-1">
<label className="text-xs text-white/60">To</label>
<input className="w-full h-10 rounded-md bg-white/5 border border-white/10 placeholder-white/40 text-sm px-3 focus:outline-none focus:ring-2 focus:ring-white/20" data-filter="number" data-key="founded_to" placeholder="2024" type="number"/>
</div>
</div>
</div>
</section>

<section className="rounded-md border border-white/10">
<button className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5" data-accordion="segments">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="bar-chart-3"></i>
<span className="text-sm font-medium">Market Segments</span>
</div>
<i className="h-4 w-4 text-white/60 transition-transform" data-acc-chevron="" data-lucide="chevron-down"></i>
</button>
<div className="px-4 pb-4 hidden" data-acc-panel="segments">
<div className="flex flex-wrap gap-2">
<button className="px-2.5 h-8 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/10 text-xs" data-chip="" data-key="segment" data-value="SMB">SMB</button>
<button className="px-2.5 h-8 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/10 text-xs" data-chip="" data-key="segment" data-value="Mid‑market">Mid‑market</button>
<button className="px-2.5 h-8 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/10 text-xs" data-chip="" data-key="segment" data-value="Enterprise">Enterprise</button>
</div>
</div>
</section>

<section className="rounded-md border border-white/10">
<button className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5" data-accordion="funding">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="rocket"></i>
<span className="text-sm font-medium">Funding</span>
</div>
<i className="h-4 w-4 text-white/60 transition-transform" data-acc-chevron="" data-lucide="chevron-down"></i>
</button>
<div className="px-4 pb-4 hidden" data-acc-panel="funding">
<div className="space-y-2">
<label className="flex items-center gap-3 py-2">
<input className="peer sr-only" data-check="" data-key="funding" type="checkbox" value="Bootstrapped"/>
<span className="h-5 w-5 grid place-items-center rounded border border-white/20 bg-white/0 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition">
<i className="hidden peer-checked:block h-3.5 w-3.5 text-white" data-lucide="check"></i>
</span>
<span className="text-sm text-white/80">Bootstrapped</span>
</label>
<label className="flex items-center gap-3 py-2">
<input className="peer sr-only" data-check="" data-key="funding" type="checkbox" value="Seed"/>
<span className="h-5 w-5 grid place-items-center rounded border border-white/20 bg-white/0 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition">
<i className="hidden peer-checked:block h-3.5 w-3.5 text-white" data-lucide="check"></i>
</span>
<span className="text-sm text-white/80">Seed</span>
</label>
<label className="flex items-center gap-3 py-2">
<input className="peer sr-only" data-check="" data-key="funding" type="checkbox" value="Series A+"/>
<span className="h-5 w-5 grid place-items-center rounded border border-white/20 bg-white/0 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition">
<i className="hidden peer-checked:block h-3.5 w-3.5 text-white" data-lucide="check"></i>
</span>
<span className="text-sm text-white/80">Series A+</span>
</label>
</div>
</div>
</section>
</div>

<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2">
<button className="flex-1 h-10 rounded-md border border-white/10 hover:bg-white/5 transition text-sm" id="resetFilters">
                        Reset Filters
                      </button>
<button className="flex-1 h-10 rounded-md bg-white/10 text-white/70 border border-white/10 transition text-sm disabled:opacity-60 disabled:cursor-not-allowed" disabled="" id="applyFilters">
                        Apply Filters
                      </button>
</div>
</div>
</div>
</div>
</aside>

<section className="min-h-[60vh]">

<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4 sm:p-5 flex items-center justify-between gap-4">
<div className="min-w-0">
<h1 className="text-2xl tracking-tight font-medium">People</h1>
<p className="text-sm text-white/60 mt-1 truncate" id="resultSubtitle">Use the filters to discover precise prospects.</p>
</div>
<div className="flex items-center gap-2">

<div className="inline-flex rounded-md border border-white/10 bg-white/[0.03] p-1">
<button className="px-3 h-9 rounded-sm bg-white text-neutral-900 text-sm font-medium" id="tabPeople">People</button>
<button className="px-3 h-9 rounded-sm text-sm hover:bg-white/10" id="tabCompanies">Companies</button>
</div>
<button className="hidden md:inline-flex items-center gap-2 h-9 px-3 rounded-md border border-white/10 hover:bg-white/5 transition">
<i className="h-4 w-4" data-lucide="save"></i>
<span className="text-sm font-normal">Save Search</span>
</button>
</div>
</div>

<div className="hidden mt-4 rounded-lg border border-white/10 bg-white/[0.02] p-3" id="activeFiltersBar">
<div className="flex flex-wrap items-center gap-2">
<span className="text-xs text-white/60">Active:</span>
<div className="flex flex-wrap gap-2" id="activeChips"></div>
<button className="ml-auto inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white" id="clearAll">
<i className="h-3.5 w-3.5" data-lucide="eraser"></i>
                    Clear all
                  </button>
</div>
</div>

<div className="mt-4 rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-10 grid place-items-center" id="stateEmpty">
<div className="max-w-md text-center">
<div className="mx-auto h-12 w-12 rounded-full bg-white/5 grid place-items-center border border-white/10 shadow-sm">
<i className="h-6 w-6 text-white/70" data-lucide="funnel"></i>
</div>
<h2 className="mt-4 text-xl tracking-tight font-medium">Choose filters to fetch data</h2>
<p className="mt-2 text-sm text-white/60">Apply filters from the sidebar to see results here.</p>
<div className="mt-4 inline-flex items-center gap-2 text-xs text-white/50">
<i className="h-4 w-4" data-lucide="sparkles"></i>
                    Tip: Combine title + industry + location for best precision.
                  </div>
</div>
</div>

<div className="hidden mt-4 space-y-4" id="stateResults">

<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 text-sm text-white/70">
<i className="h-4 w-4" data-lucide="list-filter"></i>
<span id="resultCount">128 results</span>
</div>
<div className="flex items-center gap-2">

<div className="relative">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/10 text-sm" id="sortBtn">
<i className="h-4 w-4" data-lucide="arrow-up-down"></i>
<span id="sortLabel">Relevance</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-44 rounded-md border border-white/10 bg-neutral-950 shadow-lg overflow-hidden" id="sortMenu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="Relevance">Relevance</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="Recently added">Recently added</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="Seniority">Seniority</button>
</div>
</div>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/10 text-sm">
<i className="h-4 w-4" data-lucide="download"></i>
                      Export CSV
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

<article className="rounded-lg border border-white/10 bg-white/[0.02] overflow-hidden">
<div className="flex items-start gap-3 p-4">
<img alt="" className="h-12 w-12 rounded-md object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=640&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<h3 className="text-base tracking-tight font-medium">Alex Johnson</h3>
<p className="text-sm text-white/60">Head of Growth • Acme Cloud</p>
<div className="mt-2 flex flex-wrap gap-2 text-[11px] text-white/70">
<span className="inline-flex items-center gap-1 px-2 h-6 rounded border border-white/10">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i> San Francisco, US
                          </span>
<span className="inline-flex items-center gap-1 px-2 h-6 rounded border border-white/10">
<i className="h-3.5 w-3.5" data-lucide="building-2"></i> SaaS • 201–500
                          </span>
</div>
</div>
</div>
<div className="px-4 pb-4">
<div className="flex items-center justify-between">
<div className="text-xs text-white/50">Email revealed on export</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-white/10 hover:bg-white/5 text-xs">
<i className="h-3.5 w-3.5" data-lucide="eye"></i> View
                          </button>
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md bg-white text-neutral-900 text-xs">
<i className="h-3.5 w-3.5" data-lucide="star"></i> Save
                          </button>
</div>
</div>
</div>
</article>

<article className="rounded-lg border border-white/10 bg-white/[0.02] overflow-hidden">
<div className="flex items-start gap-3 p-4">
<img alt="" className="h-12 w-12 rounded-md object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=640&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<h3 className="text-base tracking-tight font-medium">Priya Singh</h3>
<p className="text-sm text-white/60">VP Marketing • Nova Commerce</p>
<div className="mt-2 flex flex-wrap gap-2 text-[11px] text-white/70">
<span className="inline-flex items-center gap-1 px-2 h-6 rounded border border-white/10">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Remote • EU
                          </span>
<span className="inline-flex items-center gap-1 px-2 h-6 rounded border border-white/10">
<i className="h-3.5 w-3.5" data-lucide="building-2"></i> E‑commerce • 51–200
                          </span>
</div>
</div>
</div>
<div className="px-4 pb-4">
<div className="flex items-center justify-between">
<div className="text-xs text-white/50">Email revealed on export</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-white/10 hover:bg-white/5 text-xs">
<i className="h-3.5 w-3.5" data-lucide="eye"></i> View
                          </button>
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md bg-white text-neutral-900 text-xs">
<i className="h-3.5 w-3.5" data-lucide="star"></i> Save
                          </button>
</div>
</div>
</div>
</article>

<article className="rounded-lg border border-white/10 bg-white/[0.02] overflow-hidden">
<div className="flex items-start gap-3 p-4">
<img alt="" className="h-12 w-12 rounded-md object-cover" src="https://images.unsplash.com/photo-1546539782-6fc531453083?q=80&amp;w=640&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<h3 className="text-base tracking-tight font-medium">Diego Martínez</h3>
<p className="text-sm text-white/60">Director of Sales • Finora</p>
<div className="mt-2 flex flex-wrap gap-2 text-[11px] text-white/70">
<span className="inline-flex items-center gap-1 px-2 h-6 rounded border border-white/10">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Austin, US
                          </span>
<span className="inline-flex items-center gap-1 px-2 h-6 rounded border border-white/10">
<i className="h-3.5 w-3.5" data-lucide="building-2"></i> Fintech • 201–500
                          </span>
</div>
</div>
</div>
<div className="px-4 pb-4">
<div className="flex items-center justify-between">
<div className="text-xs text-white/50">Email revealed on export</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-white/10 hover:bg-white/5 text-xs">
<i className="h-3.5 w-3.5" data-lucide="eye"></i> View
                          </button>
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md bg-white text-neutral-900 text-xs">
<i className="h-3.5 w-3.5" data-lucide="star"></i> Save
                          </button>
</div>
</div>
</div>
</article>
</div>

<div className="pt-2 flex items-center justify-between">
<div className="text-xs text-white/50">Page 1 of 9</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 h-9 px-3 rounded-md border border-white/10 hover:bg-white/5 text-sm">
<i className="h-4 w-4" data-lucide="chevron-left"></i> Prev
                    </button>
<button className="inline-flex items-center gap-1 h-9 px-3 rounded-md border border-white/10 hover:bg-white/5 text-sm">
                      Next <i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="hidden mt-4 rounded-lg border border-white/10 bg-white/[0.02] p-10 text-center" id="stateCompanies">
<div className="mx-auto max-w-md">
<i className="h-10 w-10 text-white/60 mx-auto" data-lucide="building-2"></i>
<h3 className="mt-4 text-xl tracking-tight font-medium">Companies view</h3>
<p className="mt-2 text-sm text-white/60">Switch back to People or keep filtering to prepare a company list.</p>
</div>
</div>
</section>
</div>
</div>
</main>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
<p className="text-xs text-white/50">© 2025 Searchleads</p>
<div className="flex items-center gap-3 text-xs text-white/60">
<a className="hover:text-white" href="#">Privacy</a>
<span className="opacity-30">•</span>
<a className="hover:text-white" href="#">Terms</a>
<span className="opacity-30">•</span>
<a className="hover:text-white" href="#">Support</a>
</div>
</div>
</footer>
</div>





    </>
  );
}
