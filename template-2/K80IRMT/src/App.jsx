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

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    // Icons
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
    });

    // Sample data
    const data = [
      { name: "Marco Scarfone", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop", title: "Artificial Intelligence Engineer", org: "NTT DATA Europe & Latam", level: "Entry", loc: "Cosenza, Italy", dept: "Engineering", profile: "#", highlights: ["Focus on NLP", "K8s & GCP"] },
      { name: "Treeza Pothakamuri", avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&auto=format&fit=crop", title: "Machine Learning Engineer", org: "U.S. Bank", level: "Entry", loc: "Minneapolis, USA", dept: "Data", profile: "#", highlights: ["Fraud models", "MLOps"] },
      { name: "Nandan Kulkarni", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop", title: "ML Engineer / AI Engineer", org: "Barclays Investment Bank", level: "Entry", loc: "Mumbai, India", dept: "Engineering", profile: "#", highlights: ["Risk scoring", "Spark"] },
      { name: "Saikumaar Kotikalapudi", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop", title: "ML Engineer | GenAI", org: "Capital One", level: "Entry", loc: "USA", dept: "Research", profile: "#", highlights: ["RAG systems", "LLM evals"] },
      { name: "Mukesh Bodapati", avatar: "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?q=80&w=200&auto=format&fit=crop", title: "Senior ML Engineer", org: "Elevance Health", level: "Senior", loc: "New Jersey, USA", dept: "Data", profile: "#", highlights: ["Healthcare ML", "Python, Airflow"] },
      { name: "Bashir Harrell", avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&auto=format&fit=crop", title: "Lead ML Engineer", org: "Disney Experiences", level: "Manager", loc: "Florida, USA", dept: "Engineering", profile: "#", highlights: ["Recsys", "Realtime"] },
      { name: "Nikitha Ravi", avatar: "https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=200&auto=format&fit=crop", title: "AI Engineer | Data Engineer", org: "OpenText", level: "Entry", loc: "Toronto, Canada", dept: "Engineering", profile: "#", highlights: ["Pipelines", "dbt"] },
      { name: "Ivan Danilin", avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop", title: "ML Engineer", org: "IBS", level: "Entry", loc: "Porto, Portugal", dept: "Engineering", profile: "#", highlights: ["Vision", "Edge AI"] },
      { name: "Yogesh K", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop", title: "AI/ML Engineer", org: "BMO U.S.", level: "Entry", loc: "USA", dept: "Engineering", profile: "#", highlights: ["Forecasting", "AWS"] },
      { name: "Study Rf", avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop", title: "AI Engineer and ML Engineer", org: "Amazon", level: "Entry", loc: "Uttar Pradesh, India", dept: "Research", profile: "#", highlights: ["RL", "Scala"] },
    ];

    // State
    let currentPage = 1;
    const pageSize = 8;
    let compact = false;
    let selected = new Set();
    let sortKey = null;
    let sortAsc = true;

    // Elements
    const tbody = document.getElementById('tbody');
    const selectedCountEl = document.getElementById('selectedCount');
    const clearSelectionBtn = document.getElementById('clearSelection    const bulkExportBtn = document.getElementById('bulkExport');
    const selectAll = document.getElementById('selectAll');
    const pageIndicator = document.getElementById('pageIndicator');
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');
    const tableSearch = document.getElementById('tableSearch');
    const columnsBtn = document.getElementById('columnsBtn');
    const columnsMenu = document.getElementById('columnsMenu');
    const densityBtn = document.getElementById('densityBtn');
    const globalSearch = document.getElementById('globalSearch');

    // Filtered dataset
    let filtered = [...data];

    function paginate(arr) {
      const start = (currentPage - 1) * pageSize;
      return arr.slice(start, start + pageSize);
    }

    function sortData() {
      if (!sortKey) return;
      filtered.sort((a, b) => {
        const va = (a[sortKey] || '').toString().toLowerCase();
        const vb = (b[sortKey] || '').toString().toLowerCase();
        if (va < vb) return sortAsc ? -1 : 1;
        if (va > vb) return sortAsc ? 1 : -1;
        return 0;
      });
    }

    function renderTable() {
      sortData();
      const rows = paginate(filtered);
      tbody.innerHTML = rows.map((p, idx) => {
        const id = ((currentPage - 1) * pageSize) + idx;
        const isChecked = selected.has(id);
        return `
          <tr class="border-b border-white/10 hover:bg-white/[0.04]">
            <td class="px-4 ${compact ? 'py-2' : 'py-3'}">
              <label class="inline-flex items-center gap-2">
                <input data-row="${id}" type="checkbox" class="peer sr-only" ${isChecked ? 'checked' : ''} />
                <span class="h-4 w-4 rounded-md border border-white/15 bg-white/5 peer-checked:bg-violet-500 peer-checked:border-violet-400 relative">
                  <i data-lucide="check" class="absolute inset-0 m-auto h-3 w-3 text-white opacity-0 peer-checked:opacity-100"></i>
                </span>
              </label>
            </td>
            <td class="px-4 ${compact ? 'py-2' : 'py-3'}">
              <div class="flex items-center gap-3">
                <img class="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" alt="">
                <div>
                  <div class="font-medium">${p.name}</div>
                  <div class="text-xs text-neutral-400">${p.org}</div>
                </div>
              </div>
            </td>
            <td class="px-4 ${compact ? 'py-2' : 'py-3'}" data-col="title">${p.title}</td>
            <td class="px-4 ${compact ? 'py-2' : 'py-3'}" data-col="org">${p.org}</td>
            <td class="px-4 ${compact ? 'py-2' : 'py-3'}" data-col="level">${p.leveltd>
            <td class="px-4 ${compact ? 'py-2' : 'py-3'}" data-col="">${p.loc}</td>
            <td class="px-4 ${compact ? 'py-2' : 'py-3'}" data-col="dept">
              <span class="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs">${p.dept}</span>
            </td>
            <td class="px-4 ${compact ? 'py-2' : 'py-3'} text-right" data-col="profile">
              <button data-open="${id}" class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs hover:bg-white/10">
                <i data-lucide="external-link" class="h-3.5 w-3.5"></i> View
              </button>
            </td>
          </tr>
        `;
      }).join('');
      lucide.createIcons();
      updateSelectionUI();
      pageIndicator.textContent = `${currentPage} / ${Math.max(1, Math.ceil(filtered.length / pageSize))}`;
      attachRowEvents();
      applyColumnVisibility();
    }

    function attachRowEvents() {
      tbody.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', (e) => {
          const id = Number(e.target.getAttribute('data-row'));
          if (e.target.checked) selected.add(id); else selected.delete(id);
          updateSelectionUI();
        });
      });
      tbody.querySelectorAll('button[data-open]').forEach(btn => {
        btn.addEventListener('click', () => openDrawer(Number(btn.getAttribute('data-open'))));
      });
    }

    function updateSelectionUI() {
      selectedCountEl.textContent = selected.size;
      const show = selected.size > 0;
      clearSelectionBtn.classList.toggle('hidden', !show);
      bulkExportBtn.classList.toggle('hidden', !show);
      selectAll.checked = show && paginate(filtered).every((_, idx) => selected.has((currentPage - 1) * pageSize + idx));
    }

    // Sorting
    document.querySelectorAll('th[data-sort]').forEach(th => {
      th.addEventListener('click', () => {
        const key = th.getAttribute('data-sort');
        if (sortKey === key) sortAsc = !sortAsc; else { sortKey = key; sortAsc = true; }
        renderTable();
      });
    });

    // Selection
    selectAll.addEventListener('change', e => {
      const start = (currentPage - 1) * pageSize;
      paginate(filtered).forEach((_, idx) => {
        const id = start + idx;
        if (e.target.checked) selected.add(id); else selected.delete(id);
      });
      renderTable();
    });

    clearSelectionBtn.addEventListener('click', () => {
      selected.clear();
      renderTable();
    });

    // Pagination
    prevPage.addEventListener('click', () => {
      if (currentPage > 1) { currentPage--; renderTable(); }
    });
    nextPage.addEvent('click', () => {
      const total = Math.ceil(filtered.length / pageSize);
      if (currentPage < total) { current++; renderTable(); }
    });

    // Density toggle
    densityBtn.addEventListener('click', () => {
      compact = !compact;
      densityBtn.innerHTML = compact 
        ? '<i data-lucide="list-filter" class="h-4 w-4"></i> Comfortable' 
        : '<i data-lucide="list-filter" class="h-4 w-4"></i> Compact';
      lucide.createIcons();
      renderTable();
    });

    // Search
    function applySearch(q) {
      const query = q.trim().toLowerCase();
      filtered = data.filter(p => {
        const s = `${p.name} ${p.title} ${p.org} ${p.loc} ${p.dept}`.toLowerCase();
        return s.includes(query);
      });
      currentPage = 1;
      renderTable();
    }
    tableSearch.addEventListener('input', e => applySearch(e.target.value));
    globalSearch && globalSearch.addEventListener('input', e => applySearch(e.target.value));

    // Column visibility
    function applyColumnVisibility() {
      document.querySelectorAll('#peopleTable [data-col]').forEach(cell => {
        const key = cell.getAttribute('data-col');
        const toggle = document.querySelector(`[data-col-toggle="${key}"]`);
        if (toggle) cell.classList.toggle('hidden', !toggle.checked);
      });
    }
    columnsBtn.addEventListener('click', () => {
      columnsMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!columnsMenu.contains(e.target) && !columnsBtn.contains(e.target)) {
        columnsMenu.classList.add('hidden');
      }
    });
    columnsMenu.querySelectorAll('input[type="checkbox"]').forEach(inp => {
      inp.addEventListener('change', applyColumnVisibility);
    });

    // Drawer open/close
    const drawer = document.getElementById('drawer');
    const closeDrawerBtn = document.getElementById('closeDrawer');
    function openDrawer(id) {
      const p = data[id % data.length];
      document.getElementById('drawerAvatar').src = p.avatar;
      document.getElementById('drawerName').textContent = p.name;
      document.getElementById('drawerTitle').textContent = p.title;
      document.getElementById('drawerOrg').textContent = p.org;
      document.getElementById('drawerLoc').textContent = p.loc;
      document.getElementById('drawerLevel').textContent = p.level;
      document.getElementById('drawerDept').textContent = p.dept;
      document.getElementById('drawerProfile').href = p.profile;
      const hl = document.getElementById('drawerHighlights');
      hl.innerHTML = p.highlights.map(h => `<li>${h}</li>`).join('');
      drawer.classList.remove('translate-x-full');
    }
    closeDrawerBtn.addEventListener('click', () => {
      drawer.classList.add('translate-x-full');
    });

    // Accordion behavior
    document.querySelectorAll('.acc-btn').forEach(btn => {
      const parent = btn.closest('div');
      const panel = parent.querySelector('.acc-panel');
      btn.addEventListener('click', () => {
        panel.classList.toggle('hidden');
      });
    });
    document.querySelectorAll('.acc-panel').forEach((p, i) => {
      if (i > 0) p.classList.add('hidden');
    });

    // Mobile sidebar
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebarSheet = document.getElementById('sidebarSheet');
    const overlay = document.getElementById('overlay');
    const closeSheet = document.getElementById('closeSheet');
    const openFilters = document.getElementById('openFilters');
    function openSheet() {
      overlay.classList.remove('hidden');
      sidebarSheet.classList.remove('-translate-x-full');
    }
    function closeSheetFn() {
      overlay.classList.add('hidden');
      sidebarSheet.classList.add('-translate-x-full');
    }
    mobileMenuBtn && mobileMenuBtn.addEventListener('click', openSheet);
    openFilters && openFilters.addEventListener('click', openSheet);
    closeSheet.addEventListener('click', closeSheetFn);
    overlay.addEventListener('click', closeSheetFn);

    // Chips add/remove
    function addChip(containerId, value) {
      if (!value) return;
      const container = document.getElementById(containerId);
      const span = document.createElement('span');
      span.className = 'inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 text-xs text-violet-200';
      span.innerHTML = `${value} <button class="rounded-full p-0.5 hover:bg-violet-500/20"><i data-lucide="x" class="h-3.5 w-3.5"></i></button>`;
      container.appendChild);
      span.querySelector('button').addEventListener('click', () => span.remove());
      lucide.createIcons();
    }
   .getElementById('addTitleInclude').addEventListener('click', () => {
      const inp = document.getElementById('titleInclude');
      addChip('includeChips', inp.value.trim());
      inp.value = '';
    });
    document.getElementById('addTitleExclude').addEventListener('click', () => {
      const inp = document.getElementById('titleExclude');
      addChip('excludeChips', inp.value.trim());
      inp.value = '';
    });

    // Export buttons (demo)
    document.getElementById('exportBtn').addEventListener('click', () => alert('Exporting current view…'));
    document.getElementById('saveViewBtn').addEventListener('click', () => alert('View saved'));

    // Chart
    const ctx = document.getElementById('coverageChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Engineering', 'Data', 'Research', 'Product'],
          datasets: [{
            data: [48, 22, 18, 12],
            backgroundColor: ['#8b5cf6','#06b6d4','#f59e0b','#22c55e'],
            borderWidth: 0
          }]
        },
        options: {
          plugins: { legend: { display: false }, tooltip: { enabled: true } },
          cutout: '70%',
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }

    // Initial render
    renderTable();
  
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
      

<header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
<div className="mx-auto max-w-[1400px] px-4">
<div className="flex h-16 items-center justify-between gap-3">
<div className="flex items-center gap-3">
<button className="lg:hidden inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-2.5 py-2 text-neutral-300 hover:bg-white/10" id="mobileMenuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
<a className="group flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 ring-1 ring-white/10"></div>
<span className="text-lg tracking-tight font-semibold">Searchleads</span>
</a>
<div className="hidden lg:flex items-center gap-1 ml-6 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="w-[340px] bg-transparent placeholder-neutral-500 text-sm focus:outline-none" id="globalSearch" placeholder="Search people, orgs, filters…" type="text" />
<span className="ml-2 rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] text-neutral-400 border border-white/10">Ctrl K</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="hidden md:flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
<i className="h-4 w-4 text-violet-400" data-lucide="sparkles"></i>
<span className="font-medium">Ask AI</span>
</button>
<div className="hidden md:flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<i className="h-4 w-4 text-amber-300" data-lucide="coins"></i>
<span className="text-sm font-medium">6,800</span>
</div>
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-3.5 py-2 text-sm font-medium hover:bg-neutral-100">
<i className="h-4 w-4" data-lucide="plus"></i>
            Add Credits
          </button>
<button className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10">
<i className="h-5 w-5 text-neutral-300" data-lucide="bell"></i>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 pr-3 hover:bg-white/10">
<img alt="avatar" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<span className="hidden md:block text-sm font-medium">You</span>
</button>
</div>
</div>
</div>
</header>
<main className="mx-auto max-w-[1400px] px-4">
<div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-4 lg:gap-6 py-4 lg:py-6">

<aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-88px)] overflow-y-auto hidden lg:block" id="sidebar">
<div className="space-y-4">

<section className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-violet-400" data-lucide="sparkles"></i>
<h2 className="text-lg tracking-tight font-semibold">Add Filters with AI</h2>
</div>
<button className="rounded-md p-1 hover:bg-white/10">
<i className="h-4 w-4 text-neutral-400" data-lucide="help-circle"></i>
</button>
</div>
<div className="mt-3 space-y-3">
<textarea className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40" id="aiPrompt" placeholder="e.g., Find managers in Delhi at construction companies with 11–20 employees using Altitude ARENA, revenue $100k–$500k…" rows="4"></textarea>
<div className="flex items-center gap-2">
<button className="flex-1 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/10 hover:from-violet-400 hover:to-indigo-400" id="applyAIFilters">
<span className="inline-flex items-center gap-2 justify-center">
<i className="h-4 w-4" data-lucide="wand-2"></i> Apply AI Filters
                  </span>
</button>
<button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10" id="aiExamples">Examples</button>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="sliders-horizontal"></i>
<h3 className="text-base tracking-tight font-semibold">All Filters</h3>
</div>
<div className="text-xs text-neutral-400"><span id="activeCount">5</span> active</div>
</div>
<div className="divide-y divide-white/10">

<div className="p-4">
<button className="acc-btn group flex w-full items-center justify-between" data-acc="job">
<span className="text-sm font-medium text-neutral-200">Job Titles</span>
<i className="h-4 w-4 text-neutral-400 transition-transform group-[.open]:rotate-180" data-lucide="chevron-down"></i>
</button>
<div className="acc-panel mt-3 space-y-3">
<div>
<label className="text-xs text-neutral-400">Include</label>
<div className="mt-1 flex items-center gap-2">
<input className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm placeholder-neutral-500 focus:outline-none" id="titleInclude" placeholder="e.g., CEO, Manager, Engineer" />
<button className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 hover:bg-white/10" id="addTitleInclude">
<i className="h-4 w-4 text-neutral-300" data-lucide="plus"></i>
</button>
</div>
<div className="mt-2 flex flex-wrap gap-2" id="includeChips">
<span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 text-xs text-violet-200">
                        AI Engineer
                        <button className="rounded-full p-0.5 hover:bg-violet-500/20">
<i className="h-3.5 w-3.5" data-lucide="x"></i>
</button>
</span>
<span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 text-xs text-violet-200">
                        Machine Learning Engineer
                        <button className="rounded-full p-0.5 hover:bg-violet-500/20">
<i className="h-3.5 w-3.5" data-lucide="x"></i>
</button>
</span>
</div>
</div>
<div>
<label className="text-xs text-neutral-400">Exclude</label>
<div className="mt-1 flex items-center gap-2">
<input className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm placeholder-neutral-500 focus:outline-none" id="titleExclude" placeholder="e.g., Intern, Assistant…" />
<button className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 hover:bg-white/10" id="addTitleExclude">
<i className="h-4 w-4 text-neutral-300" data-lucide="plus"></i>
</button>
</div>
<div className="mt-2 flex flex-wrap gap-2" id="excludeChips"></div>
</div>
</div>
</div>

<div className="p-4">
<button className="acc-btn group flex w-full items-center justify-between" data-acc="level">
<span className="text-sm font-medium text-neutral-200">Management Level</span>
<i className="h-4 w-4 text-neutral-400 transition-transform group-[.open]:rotate-180" data-lucide="chevron-down"></i>
</button>
<div className="acc-panel mt-3 grid grid-cols-2 gap-2">

<label className="flex items-center gap-2">
<input checked className="peer sr-only" type="checkbox" />
<span className="h-4 w-4 rounded-md border border-white/15 bg-white/5 peer-checked:bg-violet-500 peer-checked:border-violet-400 relative">
<i className="absolute inset-0 m-auto h-3 w-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm">Entry</span>
</label>
<label className="flex items-center gap-2">
<input className="peer sr-only" type="checkbox" />
<span className="h-4 w-4 rounded-md border border-white/15 bg-white/5 peer-checked:bg-violet-500 peer-checked:border-violet-400 relative">
<i className="absolute inset-0 m-auto h-3 w-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm">Mid</span>
</label>
<label className="flex items-center gap-2">
<input className="peer sr-only" type="checkbox" />
<span className="h-4 w-4 rounded-md border border-white/15 bg-white/5 peer-checked:bg-violet-500 peer-checked:border-violet-400 relative">
<i className="absolute inset-0 m-auto h-3 w-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm">Senior</span>
</label>
<label className="flex items-center gap-2">
<input className="peer sr-only" type="checkbox" />
<span className="h-4 w-4 rounded-md border border-white/15 bg-white/5 peer-checked:bg-violet-500 peer-checked:border-violet-400 relative">
<i className="absolute inset-0 m-auto h-3 w-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm">Manager</span>
</label>
</div>
</div>

<div className="p-4">
<button className="acc-btn group flex w-full items-center justify-between" data-acc="location">
<span className="text-sm font-medium text-neutral-200">Location</span>
<i className="h-4 w-4 text-neutral-400 transition-transform group-[.open]:rotate-180" data-lucide="chevron-down"></i>
</button>
<div className="acc-panel mt-3 space-y-2">
<input className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm placeholder-neutral-500 focus:outline-none" placeholder="Country, city, region…" />
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs">
                      United States
                      <button className="rounded-full p-0.5 hover:bg-white/10">
<i className="h-3.5 w-3.5" data-lucide="x"></i>
</button>
</span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs">
                      India
                      <button className="rounded-full p-0.5 hover:bg-white/10">
<i className="h-3.5 w-3.5" data-lucide="x"></i>
</button>
                   span{">"}
                  </span></div>
</div>
</div>

<div className="p-4">
<button className="acc-btn group flex w-full items-center justify-between" data-acc="dept">
<span className="text-sm font-medium text-neutral-200">Departments & Functions</span>
<i className="h-4 w-4 text-neutral-400 transition-transform group-[.open]:rotate-180" data-lucide="chevron-down"></i>
</button>
<div className="acc-panel mt-3 grid grid-cols-2 gap-2">
<label className="flex items-center gap-2">
<input checked className="peer sr-only" type="checkbox" />
<span className="h-4 w-4 rounded-md border border-white/15 bg-white/5 peer-checked:bg-violet-500 peer-checked:border-violet-400 relative">
<i className="absolute inset-0 m-auto h-3 w-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm">Engineering</span>
</label>
<label className="flex items-center gap-2">
<input className="peer sr-only" type="checkbox" />
<span className="h-4 w-4 rounded-md border border-white/15 bg-white/5 peer-checked:bg-violet-500 peer-checked:border-violet-400 relative">
<i className="absolute inset-0 m-auto h-3 w-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm">Data</span>
</label>
<label className="flex items-center gap-2">
<input className="peer sr-only" type="checkbox" />
<span className="h-4 w-4 rounded-md border border-white/15 bg-white/5 peer-checked:bg-violet-500 peer-checked:border-violet-400 relative">
<i className="absolute inset-0 m-auto h-3 w-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm">Product</span>
</label>
<label className="flex items-center gap-2">
<input className="peer sr-only" type="checkbox" />
<span className="h-4 w-4 rounded-md border border-white/15 bg-white/5 peer-checked:bg-violet-500 peer-checked:border-violet-400 relative">
<i className="absolute inset-0 m-auto h-3 w-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm">Research</span>
</label>
</div>
</div>

<div className="p-4">
<div className="flex items-center justify-between gap-2">
<button className="w-1/2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm hover:bg-white/10" id="resetFilters">Reset</button>
<button className="w-1/2 rounded-xl bg-white text-neutral-900 px-4 py-2.5 text-sm font-medium hover:bg-neutral-100" id="applyFilters">Apply</button>
</div>
</div>
</div>
</section>
</div>
</aside>

<section className="space-y-4 lg:space-y-6">

<div className="flex items-end justify-between gap-3">
<div>
<h1 className="text-3xl tracking-tight font-semibold">People</h1>
<p className="mt-1 text-sm text-neutral-400">Curated professionals based on your filters.</p>
</div>
<div className="flex items-center gap-2">
<div className="hidden sm:flex rounded-lg border border-white/10 bg-white/5 p-1">
<button className="tab-btn rounded-md px-3 py-1.5 text-sm font-medium bg-white/10">People</button>
<button className="tab-btn rounded-md px-3 py-1.5 text-sm font-medium text-neutral-300 hover:bg-white/10">Exports</button>
<button className="tab-btn rounded-md px-3 py-1.5 text-sm font-medium text-neutral-300 hover:bg-white/10">Invoices</button>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm hover:bg-white/10" id="exportBtn">
<i className="h-4 w-4" data-lucide="download"></i> Export
            </button>
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-3.5 py-2 text-sm font-medium shadow-lg shadow-violet-500/10 hover:from-violet-400 hover:to-indigo-400" id="saveViewBtn">
<i className="h-4 w-4" data-lucide="bookmark"></i> Save View
            </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">Matches</span>
<i className="h-4 w-4 text-neutral-400" data-lucide="users"></i>
</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">61,842</div>
<p className="text-xs text-emerald-300 mt-1">+1,204 today</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">Selected</span>
<i className="h-4 w-4 text-neutral-400" data-lucide="check-circle-2"></i>
</div>
<div className="mt-1 text-2xl tracking-tight font-semibold" id="selectedCount">0</div>
<p className="text-xs text-neutral-400 mt-1">Bulk actions appear below</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">Coverage</span>
<i className="h-4 w-4 text-neutral-400" data-lucide="pie-chart"></i>
</div>
<div className="mt-2">

<div className="h-16">
<canvas id="coverageChart"></canvas>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="w-56 bg-transparent text-sm placeholder-neutral-500 focus:outline-none" id="tableSearch" placeholder="Search in results…" />
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10" id="densityBtn">
<i className="h-4 w-4" data-lucide="list-filter"> Density
            </i></button>
<div className="relative">
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10" id="columnsBtn">
<i className="h-4 w-4" data-lucide="columns"></i> Columns
              </button>
<div className="hidden absolute mt-2 w-52 rounded-lg border border-white/10 bg-neutral-900 p-2 shadow-xl" id="columnsMenu">

<label className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-white/5">
<span className="text-sm">Title</span>
<input checked className="peer sr-only" data-col-toggle="title" type="checkbox" />
<span className="h-4 w-7 rounded-full bg-white/10 relative after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:h-3 after:w-3 after:rounded-full after:bg-neutral-400 peer-checked:bg-violet-600 peer-checked:after:translate-x-3.5 transition"></span>
</label>
<label className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-white/5">
<span className="text-sm">Organization</span>
<input checked className="peer sr-only" data-col-toggle="org" type="checkbox" />
<span className="h-4 w-7 rounded-full bg-white/10 relative after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:h-3 after:w-3 after:rounded-full after:bg-neutral-400 peer-checked:bg-violet-600 peer-checked:after:translate-x-3.5 transition"></span>
</label>
<label className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-white/5">
<span className="text-sm">Level</span>
<input checked className="peer sr-only" data-col-toggle="level" type="checkbox" />
<span className="h-4 w-7 rounded-full bg-white/10 relative after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:h-3 after:w-3 after:rounded-full after:bg-neutral-400 peer-checked:bg-violet-600 peer-checked:after:translate-x-3.5 transition"></span>
</label>
<label className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-white/5">
<span className="text-sm">Location</span>
<input checked className="peer sr-only" data-col-toggle="loc" type="checkbox" />
<span className="h-4 w-7 rounded-full bg-white/10 relative after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:h-3 after:w-3 after:rounded-full after:bg-neutral-400 peer-checked:bg-violet-600 peer-checked:after:translate-x-3.5 transition"></span>
</label>
<label className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-white/5">
<span className="text-sm">Department</span>
<input checked className="peer sr-only" data-col-toggle="dept" type="checkbox" />
<span className="h-4 w-7 rounded-full bg-white/10 relative after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:h-3 after:w-3 after:rounded-full after:bg-neutral-400 peer-checked:bg-violet-600 peer-checked:after:translate-x-3.5 transition"></span>
</label>
<label className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-white/5">
<span className="text-sm">Profile</span>
<input checked className="peer sr-only" data-col-toggle="profile" type="checkbox" />
<span className="h-4 w-7 rounded-full bg-white/10 relative after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:h-3 after:w-3 after:rounded-full after:bg-neutral-400 peer-checked:bg-violet-600 peer-checked:after:translate-x-3.5 transition"></span>
</label>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
<i className="h-4 w-4" data-lucide="refresh-ccw"></i> Refresh
            </button>
<button className="lg:hidden inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-3 py-2 text-sm font-medium" id="openFilters">
<i className="h-4 w-4" data-lucide="sliders-horizontal"></i> Filters
            </button>
</div>
</div>

<div className="-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="overflow-x-auto">
<table className="min-w-full" id="peopleTable">
<thead className="bg-white/[0.04] text-left text-xs uppercase text-neutral-400 sticky top-[64px] z-20">
<tr>
<th className="px-4 py-3">

<label className="inline-flex items-center gap-2">
<input className="peer sr-only" id="selectAll" type="checkbox" />
<span className="h-4 w-4 rounded-md border border-white/15 bg-white/5 peer-checked:bg-violet-500 peer-checked:border-violet-400 relative">
<i className="absolute inset-0 m-auto h-3 w-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
</label>
</th>
<th className="px-4 py-3 cursor-pointer group" data-sort="name">
<div className="inline-flex items-center gap-2">Name <i className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-down"></i></div>
</th>
<th className="px-4 py-3 cursor-pointer group" data-col="title" data-sort="title">
<div className="inline-flex items-center gap-2">Title <i className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-down"></i></div>
</th>
<th className="px-4 py-3 cursor-pointer group" data-col="org" data-sort="org">
<div className="inline-flex items-center gap-2">Organization <i className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-down"></i></div>
</th>
<th className="px-4 py-3" data-col="level">Level</th>
<th className="px-4 py-3" data-col="loc">Location</th>
<th className="px-4 py-3" data-col="dept">Department</th>
<th className="px-4 py-3 text-right" data-col="profile">Profile</th>
</tr>
</thead>
<tbody className="text-sm" id="tbody">

</tbody>
</table>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10 bg-white/[0.02] px-4 py-3">
<div className="flex items-center gap-2">
<button className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10" id="clearSelection">
<i className="h-4 w-4" data-lucide="x-circle"></i> Clear selection
              </button>
<button className="hidden items-center gap-2 rounded-lg bg-white text-neutral-900 px-3.5 py-2 text-sm font-medium hover:bg-neutral-100" id="bulkExport">
<i className="h-4 w-4" data-lucide="download"></i> Export selected
              </button>
</div>
<div className="flex items-center gap-2">
<button className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10" id="prevPage"><i className="h-4 w-4" data-lucide="chevron-left"></i></button>
<span className="text-xs text-neutral-400" id="pageIndicator">1 / 10</span>
<button className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10" id="nextPage"><i className="h-4 w-4" data-lucide="chevron-right"></i></button>
</div>
</div>
</div>
</section>
</div>
</main>

<div className="fixed inset-y-0 right-0 z-50 w-full max-w-xl translate-x-full border-l border-white/10 bg-neutral-950 shadow-2xl transition-transform" id="drawer">
<div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover" id="drawerAvatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop" />
<div>
<div className="text-base tracking-tight font-semibold" id="drawerName">—</div>
<div className="text-xs text-neutral-400" id="drawerTitle">—</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10">Save</button>
<button className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10" id="closeDrawer">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
</div>
<div className="h-[calc(100vh-64px)] overflow-y-auto p-4 space-y-4">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<h3 className="text-lg tracking-tight font-semibold">Overview</h3>
<div className="mt-3 grid grid-cols-2 gap-3 text-sm">
<div>
<div className="text-neutral-400 text-xs">Organization</div>
<div className="font-medium" id="drawerOrg">—</div>
</div>
<div>
<div className="text-neutral-400 text-xs">Location</div>
<div className="font-medium" id="drawerLoc">—</div>
</div>
<div>
<div className="text-neutral-400 text-xs">Level</div>
<div className="font-medium" id="drawerLevel">—</div>
</div>
<div>
<div className="text-neutral-400 text-xs">Department</div>
<div className="font-medium" id="drawerDept">—</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<h3 className="text-lg tracking-tight font-semibold">Highlights</h3>
<ul className="mt-3 list-disc pl-4 text-sm text-neutral-300 space-y-1" id="drawerHighlights">
<li>—</li>
</ul>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<h3 className="text-lg tracking-tight font-semibold">Links</h3>
<div className="mt-3 flex flex-wrap gap-2">
<a className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-3 py-2 text-sm font-medium hover:bg-neutral-100" href="#" id="drawerProfile" target="_blank">
<i className="h-4 w-4" data-lucide="link"></i> View Profile
          </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10" href="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop" target="_blank">
<i className="h-4 w-4" data-lucide="image"></i> Portfolio
          </a>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden bg-black/60 backdrop-blur-sm" id="overlay"></div>
<aside className="fixed inset-y-0 left-0 z-50 w-[88%] max-w-sm -translate-x-full border-r border-white/10 bg-neutral-950 p-4 transition-transform lg:hidden" id="sidebarSheet">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold">Filters</h3>
<button className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10" id="closeSheet"><i className="h-4 w-4" data-lucide="x"></i></button>
</div>
<div className="mt-4">

<textarea className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm placeholder-neutral-500 focus:outline-none" placeholder="Describe your target…" rows="4"></textarea>
<button className="mt-2 w-full rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2.5 text-sm font-medium">Apply AI Filters</button>
</div>
</aside>


    </>
  );
}
