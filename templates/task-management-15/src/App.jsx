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



      // State
      const $ = (s, r = document) => r.querySelector(s);
      const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

      const listEl = $('#list');
      const emptyStateEl = $('#emptyState');
      const openCountEl = $('#openCount');
      const doneCountEl = $('#doneCount');
      const searchInput = $('#searchInput');

      const addForm = $('#addForm');
      const titleInput = $('#title');
      const notesInput = $('#notes');
      const dueInput = $('#due');
      const priorityInput = $('#priority');

      const sortBtn = $('#sortBtn');
      const sortMenu = $('#sortMenu');
      const clearCompletedBtn = $('#clearCompletedBtn');
      const importBtn = $('#importBtn');
      const importInput = $('#importInput');
      const exportBtn = $('#exportBtn');

      let tasks = [];
      let filter = 'all'; // all | active | completed
      let quick = null;   // today | high | null
      let sort = 'created'; // created | due | priority | az
      let q = '';

      function uid() {
        if (window.crypto?.randomUUID) return crypto.randomUUID();
        return 't_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
      }

      function save() {
        localStorage.setItem('td.tasks', JSON.stringify(tasks));
      }

      function load() {
        try {
          tasks = JSON.parse(localStorage.getItem('td.tasks') || '[]');
          if (!Array.isArray(tasks)) tasks = [];
        } catch {
          tasks = [];
        }
      }

      function priorityOrder(p) {
        return ({ high: 3, medium: 2, low: 1, none: 0 })[p || 'none'];
      }

      function formatDate(v) {
        if (!v) return '';
        const d = new Date(v + 'T00:00:00');
        if (isNaN(d)) return '';
        const today = new Date(); today.setHours(0,0,0,0);
        const diff = (d - today) / 86400000;
        if (diff === 0) return 'Today';
        if (diff === 1) return 'Tomorrow';
        if (diff === -1) return 'Yesterday';
        return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      }

      function applyFilters(base) {
        let res = base.slice();

        // Filter by status
        if (filter === 'active') res = res.filter(t => !t.completed);
        if (filter === 'completed') res = res.filter(t => t.completed);

        // Quick filters
        const todayStr = new Date().toISOString().slice(0,10);
        if (quick === 'today') res = res.filter(t => t.due === todayStr);
        if (quick === 'high') res = res.filter(t => t.priority === 'high');

        // Search
        if (q.trim()) {
          const s = q.trim().toLowerCase();
          res = res.filter(t => (
            t.title.toLowerCase().includes(s) ||
            (t.notes || '').toLowerCase().includes(s) ||
            (t.due && formatDate(t.due).toLowerCase().includes(s)) ||
            (t.priority && t.priority.toLowerCase().includes(s))
          ));
        }

        // Sort
        res.sort((a, b) => {
          if (sort === 'created') return (b.createdAt || 0) - (a.createdAt || 0);
          if (sort === 'due') {
            const ad = a.due ? a.due : '9999-12-31';
            const bd = b.due ? b.due : '9999-12-31';
            return ad.localeCompare(bd);
          }
          if (sort === 'priority') return priorityOrder(b.priority) - priorityOrder(a.priority);
          if (sort === 'az') return a.title.localeCompare(b.title, undefined, { sensitivity: 'base' });
          return 0;
        });

        return res;
      }

      function priorityPill(p) {
        const map = {
          high: 'bg-red-500/15 text-red-300 border-red-500/20',
          medium: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
          low: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
          none: 'bg-neutral-800 text-neutral-400 border-white/10'
        };
        const label = { high: 'High', medium: 'Medium', low: 'Low', none: 'No priority' }[p || 'none'];
        return `<span class="inline-flex items-center gap-1 rounded-md border ${map[p || 'none']} px-2 py-0.5 text-[11px]">
          <i data-lucide="flag-triangle-right" stroke-width="1.5" class="h-3.5 w-3.5"></i>${label}
        </span>`;
      }

      function taskRow(t) {
        const checked = t.completed ? 'bg-indigo-600 border-indigo-500/60 text-white' : 'bg-neutral-950 border-white/10 text-transparent';
        const titleClass = t.completed ? 'line-through text-neutral-500' : 'text-neutral-100';
        const dueLabel = formatDate(t.due);
        return `
          <li class="group relative bg-neutral-950 hover:bg-neutral-925/50 transition-colors">
            <div class="flex items-start gap-3 p-3 sm:p-4">
              <button class="check-btn mt-0.5 shrink-0 h-5.5 w-5.5 rounded-md border ${checked} flex items-center justify-center hover:border-indigo-400/60 hover:ring-2 hover:ring-indigo-500/30 transition-all outline-none" data-id="${t.id}" aria-label="Toggle complete">
                <i data-lucide="check" stroke-width="1.5" class="h-3.5 w-3.5"></i>
              </button>

              <div class="min-w-0 flex-1">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div class="min-w-0">
                    <p class="truncate text-[15px] font-medium ${titleClass}">${t.title || 'Untitled'}</p>
                    ${(t.notes ? `<p class="mt-0.5 line-clamp-2 text-sm text-neutral-400">${t.notes}</p>` : '')}
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    ${t.priority ? priorityPill(t.priority) : priorityPill('none')}
                    ${t.due ? `<span class="inline-flex items-center gap-1 rounded-md border border-white/10 bg-neutral-900 px-2 py-0.5 text-[11px] text-neutral-300"><i data-lucide="calendar" stroke-width="1.5" class="h-3.5 w-3.5"></i>${dueLabel}</span>` : ''}
                  </div>
                </div>

                <div class="mt-2 hidden sm:flex items-center gap-2 text-xs text-neutral-500">
                  <span>Created ${new Date(t.createdAt || Date.now()).toLocaleDateString()}</span>
                  <span class="h-3 w-px bg-white/10"></span>
                  <span>${t.completed ? 'Completed' : 'Pending'}</span>
                </div>
              </div>

              <div class="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <button class="edit-btn rounded-md border border-white/10 bg-neutral-900 p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-white/20 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50" data-id="${t.id}" aria-label="Edit">
                  <i data-lucide="pencil" stroke-width="1.5" class="h-4 w-4"></i>
                </button>
                <button class="delete-btn rounded-md border border-white/10 bg-neutral-900 p-2 text-neutral-300 hover:text-white hover:bg-red-600/20 hover:border-red-500/30 outline-none focus-visible:ring-2 focus-visible:ring-red-500/40" data-id="${t.id}" aria-label="Delete">
                  <i data-lucide="trash-2" stroke-width="1.5" class="h-4 w-4"></i>
                </button>
              </div>
            </div>

            ${t._editing ? `
              <div class="border-t border-white/10 bg-neutral-950/80 px-3 sm:px-4 pb-4">
                <div class="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input data-edit="title" value="${escapeHtml(t.title)}" class="rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Title" />
                  <input data-edit="due" type="date" value="${t.due || ''}" class="rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" />
                  <select data-edit="priority" class="rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40">
                    <option value="none" ${t.priority==='none'?'selected':''}>No priority</option>
                    <option value="low" ${t.priority==='low'?'selected':''}>Low</option>
                    <option value="medium" ${t.priority==='medium'?'selected':''}>Medium</option>
                    <option value="high" ${t.priority==='high'?'selected':''}>High</option>
                  </select>
                </div>
                <textarea data-edit="notes" rows="2" class="mt-3 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Notes">${escapeHtml(t.notes || '')}</textarea>
                <div class="mt-3 flex items-center justify-end gap-2">
                  <button class="cancel-edit rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800" data-id="${t.id}">Cancel</button>
                  <button class="save-edit rounded-md border border-indigo-500/20 bg-indigo-600/90 px-3 py-2 text-sm text-white hover:bg-indigo-500/90" data-id="${t.id}">Save</button>
                </div>
              </div>
            ` : ''}
          </li>
        `;
      }

      function escapeHtml(str = '') {
        return String(str)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;');
      }

      function render() {
        const filtered = applyFilters(tasks);
        listEl.innerHTML = filtered.map(taskRow).join('');
        emptyStateEl.classList.toggle('hidden', tasks.length > 0);

        const open = tasks.filter(t => !t.completed).length;
        const done = tasks.filter(t => t.completed).length;
        openCountEl.textContent = open;
        doneCountEl.textContent = done;

        // Activate tabs
        $$('.filter-tab').forEach(btn => {
          const active = btn.getAttribute('data-filter') === filter;
          btn.classList.toggle('ring-2', active);
          btn.classList.toggle('ring-indigo-500/50', active);
          btn.classList.toggle('text-white', active);
        });
        $$('.quick-tab').forEach(btn => {
          const active = btn.getAttribute('data-quick') === quick;
          btn.classList.toggle('ring-2', active);
          btn.classList.toggle('ring-indigo-500/50', active);
          btn.classList.toggle('text-white', active);
        });

        // Rebind item actions
        $$('.check-btn', listEl).forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const t = tasks.find(x => x.id === id);
            if (!t) return;
            t.completed = !t.completed;
            t.completedAt = t.completed ? Date.now() : null;
            save(); renderAndIcons();
          });
        });

        $$('.delete-btn', listEl).forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            tasks = tasks.filter(x => x.id !== id);
            save(); renderAndIcons();
          });
        });

        $$('.edit-btn', listEl).forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            tasks.forEach(t => t._editing = (t.id === id ? !t._editing : false));
            renderAndIcons();
          });
        });

        $$('.cancel-edit', listEl).forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const t = tasks.find(x => x.id === id);
            if (t) t._editing = false;
            renderAndIcons();
          });
        });

        $$('.save-edit', listEl).forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const row = btn.closest('li');
            const t = tasks.find(x => x.id === id);
            if (!t || !row) return;
            const title = $('[data-edit="title"]', row).value.trim();
            if (!title) { alert('Please provide a title'); return; }
            t.title = title;
            t.due = $('[data-edit="due"]', row).value || null;
            t.priority = $('[data-edit="priority"]', row).value || 'none';
            t.notes = $('[data-edit="notes"]', row).value || '';
            t._editing = false;
            save(); renderAndIcons();
          });
        });

        // Recreate icons
        lucide.createIcons();
      }

      function renderAndIcons() {
        render();
      }

      // Events

      addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = titleInput.value.trim();
        if (!title) {
          titleInput.focus();
          return;
        }
        const t = {
          id: uid(),
          title,
          notes: notesInput.value.trim(),
          due: dueInput.value || null,
          priority: priorityInput.value || 'none',
          completed: false,
          createdAt: Date.now()
        };
        tasks.unshift(t);
        save();
        titleInput.value = '';
        notesInput.value = '';
        dueInput.value = '';
        priorityInput.value = 'none';
        renderAndIcons();
        titleInput.focus();
      });

      // Search with "/" shortcut
      document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
          e.preventDefault();
          searchInput.focus();
        }
        if (e.key === 'Escape') {
          sortMenu.classList.add('hidden');
        }
      });

      searchInput.addEventListener('input', () => {
        q = searchInput.value;
        renderAndIcons();
      });

      // Filters
      $$('.filter-tab').forEach(btn => {
        btn.addEventListener('click', () => {
          filter = btn.getAttribute('data-filter');
          renderAndIcons();
        });
      });
      $$('.quick-tab').forEach(btn => {
        btn.addEventListener('click', () => {
          const key = btn.getAttribute('data-quick');
          quick = (quick === key) ? null : key;
          renderAndIcons();
        });
      });

      // Sort menu
      sortBtn.addEventListener('click', () => {
        sortMenu.classList.toggle('hidden');
      });
      document.addEventListener('click', (e) => {
        if (!sortMenu.contains(e.target) && !sortBtn.contains(e.target)) {
          sortMenu.classList.add('hidden');
        }
      });
      $$('#sortMenu button').forEach(btn => {
        btn.addEventListener('click', () => {
          sort = btn.getAttribute('data-sort');
          sortMenu.classList.add('hidden');
          renderAndIcons();
        });
      });

      // Clear completed
      clearCompletedBtn.addEventListener('click', () => {
        const n = tasks.filter(t => t.completed).length;
        if (n === 0) return;
        if (confirm(`Remove ${n} completed task${n>1?'s':''}?`)) {
          tasks = tasks.filter(t => !t.completed);
          save(); renderAndIcons();
        }
      });

      // Import / Export
      importBtn.addEventListener('click', () => importInput.click());
      importInput.addEventListener('change', async () => {
        const file = importInput.files?.[0];
        if (!file) return;
        try {
          const text = await file.text();
          const data = JSON.parse(text);
          if (!Array.isArray(data)) throw new Error('Invalid file');
          // Basic shape validation
          const normalized = data.map(d => ({
            id: d.id || uid(),
            title: String(d.title || 'Untitled'),
            notes: String(d.notes || ''),
            due: d.due || null,
            priority: ['high','medium','low','none'].includes(d.priority) ? d.priority : 'none',
            completed: !!d.completed,
            createdAt: d.createdAt || Date.now()
          }));
          tasks = normalized.concat(tasks);
          save(); renderAndIcons();
          alert('Tasks imported');
        } catch (err) {
          alert('Import failed. Ensure the file is a valid JSON export.');
        } finally {
          importInput.value = '';
        }
      });

      exportBtn?.addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(tasks, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `tasks-${new Date().toISOString().slice(0,10)}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      });

      // Initial load
      load();
      renderAndIcons();
    
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
      
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">

<header className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-900 ring-1 ring-white/10 flex items-center justify-center text-sm font-semibold tracking-tight">
            TD
          </div>
<div>
<h1 className="text-xl sm:text-2xl lg:text-3xl tracking-tight font-semibold text-white">Tasks</h1>
<p className="text-xs sm:text-sm text-neutral-400">Focus on what matters. Organize, prioritize, and ship.</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900 px-3.5 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-800 hover:border-white/20 hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50" id="exportBtn">
<i className="h-4 w-4" data-lucide="download" strokeWidth="1.5"></i>
            Export
          </button>
<img alt="User" className="h-9 w-9 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1676385901160-0e240ba2dfdf?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</header>

<section className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">

<div className="lg:col-span-8 space-y-3">
<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full rounded-md border border-white/10 bg-neutral-900 pl-10 pr-3.5 py-2.5 text-sm text-neutral-200 placeholder:text-neutral-500 hover:border-white/20 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="searchInput" placeholder="Search tasks, e.g. 'invoice', 'today', 'high'…" type="text"/>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900 px-3.5 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-800 hover:border-white/20 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50" id="sortBtn">
<i className="h-4 w-4" data-lucide="arrow-up-down" strokeWidth="1.5"></i>
                  Sort
                </button>
<div className="hidden absolute z-20 mt-2 w-48 rounded-md border border-white/10 bg-neutral-950 p-1.5 shadow-xl" id="sortMenu">
<button className="w-full text-left flex items-center gap-2 rounded-sm px-2.5 py-2 text-sm hover:bg-neutral-900" data-sort="created">Created</button>
<button className="w-full text-left flex items-center gap-2 rounded-sm px-2.5 py-2 text-sm hover:bg-neutral-900" data-sort="due">Due date</button>
<button className="w-full text-left flex items-center gap-2 rounded-sm px-2.5 py-2 text-sm hover:bg-neutral-900" data-sort="priority">Priority</button>
<button className="w-full text-left flex items-center gap-2 rounded-sm px-2.5 py-2 text-sm hover:bg-neutral-900" data-sort="az">A → Z</button>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900 px-3.5 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-white/20 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50" id="clearCompletedBtn">
<i className="h-4 w-4" data-lucide="check-check" strokeWidth="1.5"></i>
                Clear done
              </button>
</div>
</div>
<div className="flex items-center gap-2">
<button className="filter-tab inline-flex items-center gap-2 rounded-md bg-neutral-900 border border-white/10 px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-white/20 focus-visible:ring-2 focus-visible:ring-indigo-500/50" data-filter="all">
<i className="h-4 w-4" data-lucide="inbox" strokeWidth="1.5"></i> All
            </button>
<button className="filter-tab inline-flex items-center gap-2 rounded-md bg-neutral-900 border border-white/10 px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-white/20" data-filter="active">
<i className="h-4 w-4" data-lucide="circle" strokeWidth="1.5"></i> Active
            </button>
<button className="filter-tab inline-flex items-center gap-2 rounded-md bg-neutral-900 border border-white/10 px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-white/20" data-filter="completed">
<i className="h-4 w-4" data-lucide="check-circle-2" strokeWidth="1.5"></i> Completed
            </button>
<div className="mx-2 h-6 w-px bg-white/10"></div>
<button className="quick-tab inline-flex items-center gap-2 rounded-md bg-neutral-900 border border-white/10 px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-white/20" data-quick="today">
<i className="h-4 w-4" data-lucide="calendar" strokeWidth="1.5"></i> Today
            </button>
<button className="quick-tab inline-flex items-center gap-2 rounded-md bg-neutral-900 border border-white/10 px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-white/20" data-quick="high">
<i className="h-4 w-4" data-lucide="flag-triangle-right" strokeWidth="1.5"></i> High
            </button>
</div>
</div>

<div className="lg:col-span-4">
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-neutral-900 px-4 py-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-950 ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4 w-4 text-neutral-300" data-lucide="list-todo" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm text-neutral-400">Open tasks</p>
<p className="text-lg tracking-tight font-semibold text-white" id="openCount">0</p>
</div>
</div>
<div className="h-10 w-px bg-white/10"></div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-950 ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4 w-4 text-neutral-300" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm text-neutral-400">Completed</p>
<p className="text-lg tracking-tight font-semibold text-white" id="doneCount">0</p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-6">
<form className="rounded-lg border border-white/10 bg-neutral-900/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60 p-3 sm:p-4" id="addForm">
<div className="flex flex-col sm:flex-row gap-3">
<div className="flex-1">
<label className="sr-only" htmlFor="title">Task</label>
<input autocomplete="off" className="w-full rounded-md border border-white/10 bg-neutral-950 px-3.5 py-2.5 text-sm text-neutral-200 placeholder:text-neutral-500 hover:border-white/20 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="title" placeholder="Add a task and press Enter…" type="text"/>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="calendar" strokeWidth="1.5"></i>
<input className="w-[10.5rem] rounded-md border border-white/10 bg-neutral-950 pl-9 pr-3 py-2.5 text-sm text-neutral-200 placeholder:text-neutral-500 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="due" type="date"/>
</div>
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="flag" strokeWidth="1.5"></i>
<select className="w-[9.25rem] appearance-none rounded-md border border-white/10 bg-neutral-950 pl-9 pr-8 py-2.5 text-sm text-neutral-200 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="priority">
<option value="none">No priority</option>
<option value="low">Low</option>
<option value="medium">Medium</option>
<option value="high">High</option>
</select>
<i className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-indigo-500/20 bg-indigo-600/90 px-3.5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500/90 hover:border-indigo-500/40 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60" type="submit">
<i className="h-4 w-4" data-lucide="plus" strokeWidth="1.5"></i>
                Add
              </button>
</div>
</div>
<div className="mt-3">
<label className="sr-only" htmlFor="notes">Notes</label>
<textarea className="w-full rounded-md border border-white/10 bg-neutral-950 px-3.5 py-2.5 text-sm text-neutral-200 placeholder:text-neutral-500 hover:border-white/20 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="notes" placeholder="Optional notes…" rows="2"></textarea>
</div>
</form>
</section>

<section className="mt-6">
<div className="hidden rounded-lg border border-dashed border-white/10 bg-neutral-950 p-10 text-center" id="emptyState">
<div className="mx-auto h-12 w-12 rounded-md bg-neutral-900 ring-1 ring-white/10 flex items-center justify-center">
<i className="h-6 w-6 text-neutral-400" data-lucide="inbox" strokeWidth="1.5"></i>
</div>
<p className="mt-3 text-base font-medium text-neutral-200 tracking-tight">You’re all set</p>
<p className="text-sm text-neutral-500">Add a new task to get started, or import from a backup.</p>
</div>
<ul className="divide-y divide-white/10 rounded-lg border border-white/10 overflow-hidden" id="list">

</ul>
</section>

<footer className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
<div className="flex items-center gap-3">
<span>Press Enter to add</span>
<span className="hidden sm:inline">•</span>
<span className="hidden sm:inline">/ focuses search</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-neutral-900 px-2.5 py-1.5 hover:bg-neutral-800 hover:border-white/20 transition-colors" id="importBtn">
<i className="h-3.5 w-3.5" data-lucide="upload" strokeWidth="1.5"></i> Import
          </button>
<input accept="application/json" className="hidden" id="importInput" type="file"/>
<span className="text-neutral-600">v1.0</span>
</div>
</footer>
</div>


    </>
  );
}
