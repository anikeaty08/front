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



      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Helpers
      const $ = (s, p = document) => p.querySelector(s);
      const $$ = (s, p = document) => Array.from(p.querySelectorAll(s));
      const show = el => el?.classList.remove('hidden');
      const hide = el => el?.classList.add('hidden');
      const toast = (msg) => {
        const t = $('#toast'); const m = $('#toastMsg');
        m.textContent = msg; show(t);
        clearTimeout(window.__toastTimer);
        window.__toastTimer = setTimeout(() => hide(t), 2800);
      };

      // Sidebar toggle (mobile)
      const sidebar = $('#sidebar');
      const sidebarToggle = $('#sidebarToggle');
      const closeSidebar = () => sidebar.classList.add('-translate-x-[110%]');
      const openSidebar = () => sidebar.classList.remove('-translate-x-[110%]');
      sidebarToggle?.addEventListener('click', () => {
        if (sidebar.classList.contains('-translate-x-[110%]')) openSidebar();
        else closeSidebar();
      });
      // Close sidebar when clicking outside (mobile only)
      document.addEventListener('click', (e) => {
        if (window.innerWidth >= 768) return;
        const withinSidebar = sidebar.contains(e.target);
        const clickedToggle = sidebarToggle.contains(e.target);
        if (!withinSidebar && !clickedToggle) closeSidebar();
      });

      // Filters toggle (for smaller screens)
      $('#filtersToggle')?.addEventListener('click', () => {
        const f = $('#filters');
        f.classList.toggle('hidden');
      });

      // Custom checkbox logic (buttons with role)
      const state = { selected: new Set(), lastOpened: null };

      const updateBulkBar = () => {
        const count = state.selected.size;
        const bar = $('#bulkBar');
        const label = $('#bulkCount');
        if (count > 0) {
          label.textContent = `${count} selected`;
          show(bar);
        } else {
          hide(bar);
        }
      };

      const toggleCheckbox = (id) => {
        const btn = document.querySelector(`[data-checkbox="${id}"]`);
        if (!btn) return;
        const checked = btn.getAttribute('aria-checked') === 'true';
        if (checked) {
          btn.setAttribute('aria-checked', 'false');
          btn.innerHTML = '';
          btn.classList.remove('bg-slate-900','text-white','border-slate-900');
          btn.classList.add('bg-white','border-slate-300');
          state.selected.delete(id);
        } else {
          btn.setAttribute('aria-checked', 'true');
          btn.innerHTML = '<i data-lucide="check" class="h-[14px] w-[14px]"></i>';
          btn.classList.remove('bg-white','border-slate-300');
          btn.classList.add('bg-slate-900','text-white','border-slate-900');
          state.selected.add(id);
        }
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        updateBulkBar();
      };

      // Row interactions
      $$('#rows [data-row]').forEach(row => {
        const id = row.getAttribute('data-row');
        row.addEventListener('click', (e) => {
          const isCheckbox = e.target.closest('[data-checkbox]');
          if (isCheckbox) return; // handled separately
          openDrawerForRow(id);
        });
      });

      // Checkbox buttons
      $$('[data-checkbox]').forEach(btn => {
        btn.setAttribute('role', 'checkbox');
        btn.setAttribute('aria-checked', 'false');
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleCheckbox(btn.getAttribute('data-checkbox'));
        });
      });

      // Select all
      $('#selectAll')?.addEventListener('click', () => {
        const all = $$('[data-checkbox]');
        const allChecked = all.every(b => b.getAttribute('aria-checked') === 'true');
        all.forEach(b => {
          const id = b.getAttribute('data-checkbox');
          const shouldCheck = !allChecked;
          const currently = b.getAttribute('aria-checked') === 'true';
          if (shouldCheck !== currently) toggleCheckbox(id);
        });
      });

      // Drawer
      const drawer = $('#detailDrawer');
      const openDrawer = () => drawer.classList.remove('translate-x-full');
      const closeDrawer = () => drawer.classList.add('translate-x-full');
      $('#drawerClose')?.addEventListener('click', closeDrawer);

      const DATA = {
        1: {
          title: "FCA’s Regulatory Perspective and Priorities for 2025",
          meta: "UK • FCA • Speech • Medium impact",
          summary: "Priorities: consumer protection, simplification, and anti‑financial crime through tech adoption.",
          jurisdiction: "United Kingdom",
          body: "FCA",
          insights: ["Align roadmap to Consumer Duty", "Quarterly checkpoints with product and risk"],
          tags: ["FCA", "Consumer Duty", "Speech"]
        },
        2: {
          title: "ECB updates supervisory priorities for 2025–2027",
          meta: "EU • ECB • Policy • High impact",
          summary: "Operational resilience, governance, and credit risk with heightened expectations on cyber controls.",
          jurisdiction: "EU",
          body: "ECB",
          insights: ["Run cyber tabletop exercises", "Update KRIs and board reporting"],
          tags: ["ECB", "Operational Resilience", "Cyber"]
        },
        3: {
          title: "SEC issues guidance on market data transparency",
          meta: "US • SEC • Guidance • Low impact",
          summary: "Transparency obligations for data vendors; clarifies record‑keeping and disclosures.",
          jurisdiction: "US",
          body: "SEC",
          insights: ["Review vendor contracts", "Update disclosures & SOPs"],
          tags: ["SEC", "Market Data", "Transparency"]
        }
      };

      function openDrawerForRow(id) {
        const d = DATA[id];
        if (!d) return;
        state.lastOpened = id;
        $('#drawerTitle').textContent = d.title;
        $('#drawerMeta').textContent = d.meta;
        $('#drawerSummary').textContent = d.summary;
        $('#drawerJurisdiction').textContent = d.jurisdiction;
        $('#drawerBody').textContent = d.body;
        const insights = $('#drawerInsights'); insights.innerHTML = '';
        d.insights.forEach(i => {
          const li = document.createElement('li'); li.textContent = i; insights.appendChild(li);
        });
        const tags = $('#drawerTags'); tags.innerHTML = '';
        d.tags.forEach(t => {
          const span = document.createElement('span');
          span.className = 'inline-flex items-center rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-700';
          span.textContent = t; tags.appendChild(span);
        });
        openDrawer();
      }

      // Actions
      $('#uploadOpen')?.addEventListener('click', () => show($('#uploadModal')));
      $('#uploadClose')?.addEventListener('click', () => hide($('#uploadModal')));
      $('#uploadConfirm')?.addEventListener('click', () => { hide($('#uploadModal')); toast('Content uploaded — extraction started'); });

      $('#composeOpen')?.addEventListener('click', () => show($('#composeModal')));
      $('#composeClose')?.addEventListener('click', () => hide($('#composeModal')));
      $('#nlSend')?.addEventListener('click', () => { hide($('#composeModal')); toast('Newsletter sent'); });
      $('#nlSchedule')?.addEventListener('click', () => toast('Scheduled for tomorrow 9:00 AM'));
      $('#nlPreview')?.addEventListener('click', () => toast('Preview opened'));

      $('#bulkExport')?.addEventListener('click', () => toast('Exporting selected to PowerPoint'));
      $('#bulkEmail')?.addEventListener('click', () => show($('#composeModal')));
      $('#bulkClear')?.addEventListener('click', () => {
        [...state.selected].forEach(id => toggleCheckbox(id));
      });

      $('#newReport')?.addEventListener('click', () => toast('Generating exec summary report'));
      $('#summarizeBtn')?.addEventListener('click', () => toast('Summarizing visible items with AI'));
      $('#exportBtn')?.addEventListener('click', () => toast('Exporting current view to PowerPoint'));

      $('#drawerSummarize')?.addEventListener('click', () => toast('AI summary refreshed'));
      $('#drawerExport')?.addEventListener('click', () => toast('Exported this item to PowerPoint'));
      $('#drawerEmail')?.addEventListener('click', () => show($('#composeModal')));
      $('#addToReport')?.addEventListener('click', () => toast('Added to report'));

      $('#tableRefresh')?.addEventListener('click', () => toast('Refreshed'));
      $('#saveView')?.addEventListener('click', () => toast('View saved'));

      // Initial UI
      // Keep filters visible by default on desktop
      if (window.innerWidth < 640) { $('#filters')?.classList.add('hidden'); }
    
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
      

<header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-3">
<button className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 bg-white/80 p-2 text-slate-700 hover:bg-white shadow-sm transition" id="sidebarToggle">
<i className="h-[18px] w-[18px]" data-lucide="panel-left"></i>
</button>
<a className="flex items-center gap-3" href="#">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 ring-1 ring-slate-900/10 shadow-md shadow-blue-600/10 flex items-center justify-center">
<i className="text-white h-[18px] w-[18px]" data-lucide="radar"></i>
</div>
<div className="leading-tight">
<p className="text-slate-900 text-lg tracking-tight font-semibold">Scanned Horizons</p>
<p className="text-slate-500 text-[13px]">Horizon Scanning</p>
</div>
</a>
</div>

<div className="hidden md:flex flex-1 max-w-xl mx-6">
<div className="relative w-full">
<i className="absolute left-3 top-2.5 h-[16px] w-[16px] text-slate-400" data-lucide="search"></i>
<input className="w-full rounded-lg border border-slate-300/80 bg-white/80 pl-9 pr-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-slate-400 transition" id="globalSearch" placeholder="Search everything..." type="text"/>
</div>
</div>

<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3.5 py-2 text-sm font-medium hover:bg-slate-800 shadow-sm transition" id="uploadOpen">
<i className="h-[16px] w-[16px]" data-lucide="file-up"></i> Upload
            </button>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white/80 px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-white shadow-sm transition" id="summarizeBtn">
<i className="h-[16px] w-[16px]" data-lucide="bot"></i> AI Summarize
            </button>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white/80 px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-white shadow-sm transition" id="exportBtn">
<i className="h-[16px] w-[16px]" data-lucide="presentation"></i> Export PPT
            </button>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white/80 px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-white shadow-sm transition" id="composeOpen">
<i className="h-[16px] w-[16px]" data-lucide="send"></i> Email
            </button>
</div>

<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center gap-2 rounded-md border border-slate-300 bg-white/80 px-2 py-1 shadow-sm">
<i className="h-[16px] w-[16px] text-slate-500" data-lucide="building"></i>
<span className="text-sm text-slate-700">Acme Financial</span>
<i className="h-[16px] w-[16px] text-slate-400" data-lucide="chevron-down"></i>
</div>
<button className="h-9 w-9 rounded-full ring-1 ring-slate-900/5 bg-[linear-gradient(#fff,rgba(255,255,255,0.6))] flex items-center justify-center text-slate-600 hover:text-slate-800" id="profileBtn">
<i className="h-[18px] w-[18px]" data-lucide="user"></i>
</button>
</div>
</div>
</div>
</header>
<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
<div className="grid grid-cols-12 gap-6">

<aside className="col-span-12 md:col-span-3 lg:col-span-2 md:static fixed inset-y-16 left-0 z-40 md:z-auto translate-x-[-110%] md:translate-x-0 transition-transform" id="sidebar">
<nav className="rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur-xl shadow-sm ring-1 ring-white/40 p-3 md:p-4 h-full">
<p className="px-2 text-xs font-medium text-slate-500">Navigation</p>
<ul className="mt-2 space-y-1">
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-md hover:bg-slate-50 text-sm text-slate-700" href="#">
<i className="h-[16px] w-[16px]" data-lucide="layout-dashboard"></i>
                  Overview
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-md bg-slate-900 text-white text-sm shadow-sm" href="#">
<i className="h-[16px] w-[16px]" data-lucide="radar"></i>
                  Horizon Scanning
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-md hover:bg-slate-50 text-sm text-slate-700" href="#">
<i className="h-[16px] w-[16px]" data-lucide="library"></i>
                  Library
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-md hover:bg-slate-50 text-sm text-slate-700" href="#">
<i className="h-[16px] w-[16px]" data-lucide="file-text"></i>
                  Reports
                  <span className="ml-auto inline-flex items-center rounded-full bg-slate-100 text-slate-700 text-xs px-2 py-0.5 ring-1 ring-slate-200">8</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-md hover:bg-slate-50 text-sm text-slate-700" href="#">
<i className="h-[16px] w-[16px]" data-lucide="mail"></i>
                  Newsletters
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-md hover:bg-slate-50 text-sm text-slate-700" href="#">
<i className="h-[16px] w-[16px]" data-lucide="settings"></i>
                  Settings
                </a>
</li>
</ul>
<div className="mt-4 pt-4 border-t border-slate-200/70">
<p className="px-2 text-xs font-medium text-slate-500">Saved views</p>
<ul className="mt-2 space-y-1">
<li>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-slate-50 text-sm text-slate-700">
<i className="h-[16px] w-[16px]" data-lucide="bookmark"></i> Q4 Consultations
                  </button>
</li>
<li>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-slate-50 text-sm text-slate-700">
<i className="h-[16px] w-[16px]" data-lucide="bookmark"></i> Payments AML
                  </button>
</li>
</ul>
</div>
</nav>
</aside>

<section className="col-span-12 md:col-span-9 lg:col-span-10">

<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
<div>
<h1 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Horizon Scanning</h1>
<p className="text-sm text-slate-600 mt-1">Track developments, tag, summarize, export, and notify stakeholders.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white/80 px-3 py-2 text-sm text-slate-700 hover:bg-white shadow-sm transition" id="filtersToggle">
<i className="h-[16px] w-[16px]" data-lucide="filter"></i> Filters
              </button>
<button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white px-3 py-2 text-sm font-medium hover:from-blue-700 hover:to-violet-700 shadow-sm ring-1 ring-blue-500/30 transition" id="newReport">
<i className="h-[16px] w-[16px]" data-lucide="sparkles"></i> Generate report
              </button>
</div>
</div>

<div className="mt-4 rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur-xl shadow-sm ring-1 ring-white/40 p-4" id="filters">
<div className="grid grid-cols-1 md:grid-cols-5 gap-3">
<label className="block">
<span className="text-xs font-medium text-slate-700">Search</span>
<div className="mt-1.5 relative">
<i className="absolute left-3 top-2.5 h-[16px] w-[16px] text-slate-400" data-lucide="search"></i>
<input className="w-full rounded-lg border border-slate-300/80 bg-white/80 pl-9 pr-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-slate-400 transition" placeholder="Search developments..." type="text"/>
</div>
</label>
<label className="block">
<span className="text-xs font-medium text-slate-700">Jurisdiction</span>
<div className="mt-1.5 relative">
<select className="appearance-none w-full rounded-lg border border-slate-300/80 bg-white/80 pr-9 pl-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-slate-400 transition">
<option>All</option>
<option>EU</option>
<option>US</option>
<option>UK</option>
<option>Ireland</option>
</select>
<i className="pointer-events-none absolute right-3 top-2.5 h-[16px] w-[16px] text-slate-400" data-lucide="chevron-down"></i>
</div>
</label>
<label className="block">
<span className="text-xs font-medium text-slate-700">Body</span>
<div className="mt-1.5 relative">
<select className="appearance-none w-full rounded-lg border border-slate-300/80 bg-white/80 pr-9 pl-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-slate-400 transition">
<option>All</option>
<option>FCA</option>
<option>ECB</option>
<option>SEC</option>
<option>ESMA</option>
</select>
<i className="pointer-events-none absolute right-3 top-2.5 h-[16px] w-[16px] text-slate-400" data-lucide="chevron-down"></i>
</div>
</label>
<label className="block">
<span className="text-xs font-medium text-slate-700">Type</span>
<div className="mt-1.5 relative">
<select className="appearance-none w-full rounded-lg border border-slate-300/80 bg-white/80 pr-9 pl-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-slate-400 transition">
<option>All</option>
<option>Consultation</option>
<option>Guidance</option>
<option>Speech</option>
<option>Policy</option>
</select>
<i className="pointer-events-none absolute right-3 top-2.5 h-[16px] w-[16px] text-slate-400" data-lucide="chevron-down"></i>
</div>
</label>
<label className="block">
<span className="text-xs font-medium text-slate-700">Status</span>
<div className="mt-1.5 relative">
<select className="appearance-none w-full rounded-lg border border-slate-300/80 bg-white/80 pr-9 pl-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-slate-400 transition">
<option>All</option>
<option>Active</option>
<option>Closed</option>
<option>Upcoming</option>
</select>
<i className="pointer-events-none absolute right-3 top-2.5 h-[16px] w-[16px] text-slate-400" data-lucide="chevron-down"></i>
</div>
</label>
</div>
</div>

<div className="hidden mt-4 rounded-lg border border-slate-300 bg-white/80 px-3 py-2 text-sm shadow-sm" id="bulkBar">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-slate-700 font-medium" id="bulkCount">0 selected</span>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-50">
<i className="h-[16px] w-[16px]" data-lucide="tag"></i> Tag
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-50" id="bulkExport">
<i className="h-[16px] w-[16px]" data-lucide="presentation"></i> Export PPT
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-50" id="bulkEmail">
<i className="h-[16px] w-[16px]" data-lucide="send"></i> Email
                  </button>
</div>
</div>
<button className="text-slate-500 hover:text-slate-700" id="bulkClear">Clear</button>
</div>
</div>

<div className="mt-4 rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur-xl shadow-sm ring-1 ring-white/40 overflow-hidden">
<div className="px-4 sm:px-5 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-sm text-slate-700">Showing</span>
<div className="inline-flex items-center rounded-md border border-slate-300 bg-white">
<button className="px-2.5 py-1.5 text-xs">All</button>
<button className="px-2.5 py-1.5 text-xs bg-slate-900 text-white">Recent</button>
<button className="px-2.5 py-1.5 text-xs">Flagged</button>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white/80 px-2.5 py-1.5 text-sm text-slate-700 hover:bg-white" id="tableRefresh">
<i className="h-[16px] w-[16px]" data-lucide="refresh-ccw"></i> Refresh
                </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white/80 px-2.5 py-1.5 text-sm text-slate-700 hover:bg-white" id="saveView">
<i className="h-[16px] w-[16px]" data-lucide="bookmark-plus"></i> Save view
                </button>
</div>
</div>

<div className="hidden lg:grid grid-cols-12 gap-4 px-4 sm:px-5 pb-3 text-xs font-medium text-slate-600">
<div className="col-span-1">
<button className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white" id="selectAll"></button>
</div>
<div className="col-span-3">Title &amp; Source</div>
<div className="col-span-2">Jurisdiction &amp; Body</div>
<div className="col-span-2">Type &amp; Impact</div>
<div className="col-span-3">Summary &amp; Insights</div>
<div className="col-span-1">Status</div>
</div>
<div className="hidden lg:block h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-4 sm:mx-5"></div>

<div id="rows">

<article className="group px-4 sm:px-5 py-4 lg:grid lg:grid-cols-12 lg:gap-4 border-t border-slate-200/70 hover:bg-slate-50/50 cursor-pointer" data-row="1">
<div className="col-span-1 flex items-start pt-0.5">
<button className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white" data-checkbox="1"></button>
</div>
<div className="col-span-3">
<h3 className="text-slate-900 font-medium leading-snug tracking-tight">FCA’s Regulatory Perspective and Priorities for 2025</h3>
<a className="mt-1 inline-flex items-center gap-1 text-sm text-slate-500" href="#">
<i className="h-[16px] w-[16px]" data-lucide="external-link"></i>
<span className="truncate">https://www.fca.org.uk/...</span>
</a>
</div>
<div className="col-span-2 mt-3 lg:mt-0 text-sm">
<div className="flex items-center gap-2">
<i className="h-[16px] w-[16px] text-slate-400" data-lucide="map-pin"></i>
                    United Kingdom
                  </div>
<div className="flex items-center gap-2 mt-1.5">
<i className="h-[16px] w-[16px] text-slate-400" data-lucide="building-2"></i>
                    FCA
                  </div>
</div>
<div className="col-span-2 mt-3 lg:mt-0">
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 ring-1 ring-slate-200">Speech</span>
<span className="inline-flex items-center rounded-full bg-amber-50 text-amber-800 text-xs font-medium px-2.5 py-1 ring-1 ring-amber-200">Medium</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 ring-1 ring-indigo-200">
<i className="h-[16px] w-[16px]" data-lucide="gauge"></i> 88%
                    </span>
</div>
</div>
<div className="col-span-3 mt-3 lg:mt-0">
<div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3 text-sm leading-relaxed text-slate-700">
                    Priorities: consumer protection, simplification, and anti‑financial crime through tech adoption.
                    <div className="mt-2 pt-2 border-t border-slate-200 text-[13px]">
<span className="font-medium text-slate-900">Action:</span> Align roadmap to Consumer Duty; quarterly checkpoints with product and risk.
                    </div>
</div>
</div>
<div className="col-span-1 mt-3 lg:mt-0">
<span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 ring-1 ring-emerald-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Active
                  </span>
</div>
</article>

<article className="group px-4 sm:px-5 py-4 lg:grid lg:grid-cols-12 lg:gap-4 border-t border-slate-200/70 hover:bg-slate-50/50 cursor-pointer" data-row="2">
<div className="col-span-1 flex items-start pt-0.5">
<button className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white" data-checkbox="2"></button>
</div>
<div className="col-span-3">
<h3 className="text-slate-900 font-medium leading-snug tracking-tight">ECB updates supervisory priorities for 2025–2027</h3>
<a className="mt-1 inline-flex items-center gap-1 text-sm text-slate-500" href="#">
<i className="h-[16px] w-[16px]" data-lucide="external-link"></i>
<span className="truncate">https://www.ecb.europa.eu/...</span>
</a>
</div>
<div className="col-span-2 mt-3 lg:mt-0 text-sm">
<div className="flex items-center gap-2">
<i className="h-[16px] w-[16px] text-slate-400" data-lucide="map-pin"></i>
                    EU
                  </div>
<div className="flex items-center gap-2 mt-1.5">
<i className="h-[16px] w-[16px] text-slate-400" data-lucide="building-2"></i>
                    ECB
                  </div>
</div>
<div className="col-span-2 mt-3 lg:mt-0">
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 ring-1 ring-slate-200">Policy</span>
<span className="inline-flex items-center rounded-full bg-red-50 text-red-700 text-xs font-medium px-2.5 py-1 ring-1 ring-red-200">High</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 ring-1 ring-indigo-200">
<i className="h-[16px] w-[16px]" data-lucide="gauge"></i> 92%
                    </span>
</div>
</div>
<div className="col-span-3 mt-3 lg:mt-0">
<div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3 text-sm leading-relaxed text-slate-700">
                    Emphasis on operational resilience, governance, and credit risk; heightened expectations on cyber controls.
                    <div className="mt-2 pt-2 border-t border-slate-200 text-[13px]">
<span className="font-medium text-slate-900">Action:</span> Prioritize cyber tabletop exercises; update KRIs and board reporting.
                    </div>
</div>
</div>
<div className="col-span-1 mt-3 lg:mt-0">
<span className="inline-flex items-center gap-2 rounded-full bg-amber-50 text-amber-700 text-xs font-medium px-2.5 py-1 ring-1 ring-amber-200">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> Upcoming
                  </span>
</div>
</article>

<article className="group px-4 sm:px-5 py-4 lg:grid lg:grid-cols-12 lg:gap-4 border-t border-slate-200/70 hover:bg-slate-50/50 cursor-pointer" data-row="3">
<div className="col-span-1 flex items-start pt-0.5">
<button className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white" data-checkbox="3"></button>
</div>
<div className="col-span-3">
<h3 className="text-slate-900 font-medium leading-snug tracking-tight">SEC issues guidance on market data transparency</h3>
<a className="mt-1 inline-flex items-center gap-1 text-sm text-slate-500" href="#">
<i className="h-[16px] w-[16px]" data-lucide="external-link"></i>
<span className="truncate">https://www.sec.gov/...</span>
</a>
</div>
<div className="col-span-2 mt-3 lg:mt-0 text-sm">
<div className="flex items-center gap-2">
<i className="h-[16px] w-[16px] text-slate-400" data-lucide="map-pin"></i>
                    US
                  </div>
<div className="flex items-center gap-2 mt-1.5">
<i className="h-[16px] w-[16px] text-slate-400" data-lucide="building-2"></i>
                    SEC
                  </div>
</div>
<div className="col-span-2 mt-3 lg:mt-0">
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 ring-1 ring-slate-200">Guidance</span>
<span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-800 text-xs font-medium px-2.5 py-1 ring-1 ring-emerald-200">Low</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 ring-1 ring-indigo-200">
<i className="h-[16px] w-[16px]" data-lucide="gauge"></i> 76%
                    </span>
</div>
</div>
<div className="col-span-3 mt-3 lg:mt-0">
<div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3 text-sm leading-relaxed text-slate-700">
                    Focus on transparency obligations for data vendors; clarifies record‑keeping and disclosures.
                    <div className="mt-2 pt-2 border-t border-slate-200 text-[13px]">
<span className="font-medium text-slate-900">Action:</span> Review vendor contracts; update disclosures and SOPs.
                    </div>
</div>
</div>
<div className="col-span-1 mt-3 lg:mt-0">
<span className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 ring-1 ring-slate-200">
<span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span> Closed
                  </span>
</div>
</article>
</div>
</div>
</section>
</div>
</main>

<aside className="fixed top-16 right-0 z-50 w-full sm:w-[480px] max-w-full h-[calc(100vh-64px)] translate-x-full transition-transform" id="detailDrawer">
<div className="h-full flex flex-col rounded-l-2xl border border-slate-200 bg-white shadow-xl">
<div className="px-4 py-3 flex items-center justify-between border-b border-slate-200">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<i className="h-[16px] w-[16px]" data-lucide="file-search"></i>
</div>
<div>
<p className="font-medium text-slate-900" id="drawerTitle">Details</p>
<p className="text-xs text-slate-500" id="drawerMeta">—</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-50" id="addToReport">
<i className="h-[16px] w-[16px]" data-lucide="file-plus-2"></i> Add to report
            </button>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-300 bg-white text-slate-700 hover:bg-slate-50" id="drawerClose">
<i className="h-[18px] w-[18px]" data-lucide="x"></i>
</button>
</div>
</div>
<div className="p-4 overflow-y-auto grow space-y-4">
<div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3">
<p className="text-xs font-medium text-slate-600">Summary</p>
<p className="mt-1.5 text-sm text-slate-800" id="drawerSummary">Select a row to view details.</p>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-xs font-medium text-slate-600">Jurisdiction</p>
<p className="mt-1 text-sm text-slate-900" id="drawerJurisdiction">—</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-xs font-medium text-slate-600">Body</p>
<p className="mt-1 text-sm text-slate-900" id="drawerBody">—</p>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-xs font-medium text-slate-600">Insights</p>
<ul className="mt-1.5 space-y-1.5 text-sm text-slate-700" id="drawerInsights">
<li>—</li>
</ul>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-xs font-medium text-slate-600">Tags</p>
<div className="mt-1.5 flex flex-wrap gap-1.5" id="drawerTags">
<span className="inline-flex items-center rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-700">—</span>
</div>
</div>
</div>
<div className="p-3 border-t border-slate-200">
<div className="flex items-center justify-between">
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50" id="drawerSummarize">
<i className="h-[16px] w-[16px]" data-lucide="bot"></i> AI Summarize
            </button>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50" id="drawerExport">
<i className="h-[16px] w-[16px]" data-lucide="presentation"></i> Export PPT
              </button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 text-white px-3 py-1.5 text-sm font-medium hover:bg-slate-800" id="drawerEmail">
<i className="h-[16px] w-[16px]" data-lucide="send"></i> Email
              </button>
</div>
</div>
</div>
</div>
</aside>

<div className="fixed inset-0 z-[60] hidden" id="uploadModal">
<div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"></div>
<div className="relative mx-auto max-w-lg mt-24 rounded-2xl border border-slate-200 bg-white shadow-xl">
<div className="p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<i className="h-[18px] w-[18px]" data-lucide="file-up"></i>
</div>
<div>
<p className="font-medium text-slate-900">Upload content</p>
<p className="text-sm text-slate-500">Files or URLs — we’ll extract and index automatically</p>
</div>
</div>
<div className="mt-4 space-y-3">
<label className="block">
<span className="text-xs font-medium text-slate-700">URL</span>
<input className="mt-1.5 w-full rounded-lg border border-slate-300/80 bg-white/80 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-slate-400 transition" id="uploadUrl" placeholder="https://example.org/doc" type="url"/>
</label>
<div className="rounded-lg border border-dashed border-slate-300 bg-slate-50/60 p-4 text-center">
<p className="text-sm text-slate-600">Drag &amp; drop files here or</p>
<label className="mt-2 inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 cursor-pointer">
<i className="h-[16px] w-[16px]" data-lucide="folder-open"></i> Browse
                <input className="hidden" id="uploadFile" multiple="" type="file"/>
</label>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white px-3.5 py-2 text-sm font-medium hover:from-blue-700 hover:to-violet-700 shadow-sm ring-1 ring-blue-500/30" id="uploadConfirm">
<i className="h-[16px] w-[16px]" data-lucide="sparkles"></i> Extract with AI
            </button>
<button className="text-sm text-slate-500 hover:text-slate-700" id="uploadClose">Cancel</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden" id="composeModal">
<div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"></div>
<div className="relative mx-auto max-w-2xl mt-16 rounded-2xl border border-slate-200 bg-white shadow-xl">
<div className="p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<i className="h-[18px] w-[18px]" data-lucide="mail-plus"></i>
</div>
<div>
<p className="font-medium text-slate-900">Compose newsletter</p>
<p className="text-sm text-slate-500">Send selected items to stakeholders</p>
</div>
</div>
<button className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 hover:bg-slate-50" id="composeClose">
<i className="h-[18px] w-[18px]" data-lucide="x"></i>
</button>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
<label className="block sm:col-span-2">
<span className="text-xs font-medium text-slate-700">Subject</span>
<input className="mt-1.5 w-full rounded-lg border border-slate-300/80 bg-white/80 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-slate-400 transition" id="nlSubject" placeholder="Regulatory updates — Week 41" type="text"/>
</label>
<label className="block">
<span className="text-xs font-medium text-slate-700">Audience</span>
<select className="mt-1.5 w-full rounded-lg border border-slate-300/80 bg-white/80 px-3 py-2.5 text-sm" id="nlAudience">
<option>Compliance leadership</option>
<option>Product &amp; Ops</option>
<option>Risk &amp; Audit</option>
</select>
</label>
<label className="block sm:col-span-3">
<span className="text-xs font-medium text-slate-700">Intro</span>
<textarea className="mt-1.5 w-full rounded-lg border border-slate-300/80 bg-white/80 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-slate-400 transition" id="nlIntro" placeholder="This week’s key changes and recommended actions..." rows="3"></textarea>
</label>
</div>
<div className="mt-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3">
<div className="text-sm text-slate-600">3 items selected</div>
<div className="mt-1 flex flex-wrap gap-1.5">
<span className="inline-flex items-center rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-700">FCA 2025 priorities</span>
<span className="inline-flex items-center rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-700">ECB 2025–27</span>
<span className="inline-flex items-center rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-700">SEC data transparency</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3.5 py-2 text-sm font-medium hover:bg-slate-800 shadow-sm" id="nlSend">
<i className="h-[16px] w-[16px]" data-lucide="send"></i> Send
            </button>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50" id="nlSchedule">
<i className="h-[16px] w-[16px]" data-lucide="clock"></i> Schedule
              </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50" id="nlPreview">
<i className="h-[16px] w-[16px]" data-lucide="monitor"></i> Preview
              </button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed top-4 right-4 z-[70] hidden" id="toast">
<div className="flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50/90 px-3.5 py-2.5 text-sm text-emerald-800 shadow-md backdrop-blur">
<i className="h-[18px] w-[18px]" data-lucide="check-circle-2"></i>
<span className="font-medium" id="toastMsg"></span>
</div>
</div>


    </>
  );
}
