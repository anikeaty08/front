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
    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('openSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');

    const notesGrid = document.getElementById('notesGrid');
    const notesList = document.getElementById('notesList');
    const emptyState = document.getElementById('emptyState');
    const searchInput = document.getElementById('searchInput');
    const searchInputMobile = document.getElementById('searchInputMobile');
    const addNoteBtn = document.getElementById('addNoteBtn');
    const layoutToggle = document.getElementById('layoutToggle');

    const drawerRoot = document.getElementById('drawerRoot');
    const drawerBackdrop = document.getElementById('drawerBackdrop');
    const drawerPanel = document.getElementById('drawerPanel');
    const drawerClose = document.getElementById('drawerClose');
    const drawerTitle = document.getElementById('drawerTitle');
    const noteTitle = document.getElementById('noteTitle');
    const noteContent = document.getElementById('noteContent');
    const pinToggle = document.getElementById('pinToggle');
    const pinIcon = document.getElementById('pinIcon');
    const cancelBtn = document.getElementById('cancelBtn');
    const saveBtn = document.getElementById('saveBtn');
    const saveStatus = document.getElementById('saveStatus');

    let isGrid = true;
    let editingId = null;
    let draftPinned = false;

    const nowISO = () => new Date().toISOString();
    const fmtDate = (d) => {
      const date = new Date(d);
      return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    };

    let notes = [
      {
        id: crypto.randomUUID(),
        title: 'Weekly planning',
        content: 'Outline key deliverables for the upcoming sprint. Align design reviews and stakeholder check-ins. Capture blockers.',
        createdAt: nowISO(),
        pinned: true
      },
      {
        id: crypto.randomUUID(),
        title: 'Ideas: Onboarding revamp',
        content: 'Consider a progressive onboarding flow. Tooltips + checklist. Track completion rate and activation.',
        createdAt: nowISO(),
        pinned: false
      },
      {
        id: crypto.randomUUID(),
        title: 'Follow-up with Sam (Lead Magics)',
        content: 'Confirm integration timeline. Provide API keys and sandbox access. Schedule QA next week.',
        createdAt: nowISO(),
        pinned: false
      }
    ];

    // Sidebar mobile
    openSidebarBtn?.addEventListener('click', () => {
      sidebar.classList.remove('-translate-x-full');
      sidebar.classList.add('translate-x-0');
    });
    closeSidebarBtn?.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
    });
    // Ensure mobile hidden init
    if (window.innerWidth < 768) {
      sidebar.classList.add('-translate-x-full');
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        sidebar.classList.remove('-translate-x-full');
      }
    });

    // Drawer controls
    function openDrawer(mode = 'create', data = null) {
      drawerRoot.classList.remove('hidden');
      requestAnimationFrame(() => {
        drawerBackdrop.classList.remove('opacity-0');
        drawerBackdrop.classList.add('opacity-100');
        drawerPanel.classList.remove('translate-x-full');
        drawerPanel.classList.add('translate-x-0');
      });

      if (mode === 'create') {
        drawerTitle.textContent = 'Add note';
        noteTitle.value = '';
        noteContent.value = '';
        setDraftPinned(false);
        editingId = null;
      } else if (mode === 'edit' && data) {
        drawerTitle.textContent = 'Edit note';
        noteTitle.value = data.title;
        noteContent.value = data.content;
        setDraftPinned(!!data.pinned);
        editingId = data.id;
      }
      saveStatus.textContent = '';
      setTimeout(() => noteTitle.focus(), 100);
    }

    function closeDrawer() {
      drawerBackdrop.classList.add('opacity-0');
      drawerPanel.classList.add('translate-x-full');
      drawerPanel.classList.remove('translate-x-0');
      setTimeout(() => drawerRoot.classList.add('hidden'), 150);
    }

    drawerBackdrop.addEventListener('click', closeDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    cancelBtn.addEventListener('click', closeDrawer);

    // Pin toggle in drawer
    function setDraftPinned(v) {
      draftPinned = !!v;
      pinIcon.classList.toggle('text-violet-600', draftPinned);
      pinIcon.classList.toggle('text-slate-500', !draftPinned);
    }
    pinToggle.addEventListener('click', () => setDraftPinned(!draftPinned));

    // Search sync
    function getQuery() {
      const q = (searchInput?.value || searchInputMobile?.value || '').trim().toLowerCase();
      return q;
    }
    function syncSearchInputs(value) {
      if (document.activeElement !== searchInput) searchInput && (searchInput.value = value);
      if (document.activeElement !== searchInputMobile) searchInputMobile && (searchInputMobile.value = value);
    }
    searchInput?.addEventListener('input', () => { syncSearchInputs(searchInput.value); render(); });
    searchInputMobile?.addEventListener('input', () => { syncSearchInputs(searchInputMobile.value); render(); });

    // Layout toggle
    layoutToggle.addEventListener('click', () => {
      isGrid = !isGrid;
      layoutToggle.innerHTML = isGrid
        ? `<svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5" class="text-slate-500"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg> Grid`
        : `<svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5" class="text-slate-500"><path d="M3 6h18M3 12h18M3 18h18"/></svg> List`;
      notesGrid.classList.toggle('hidden', !isGrid);
      notesList.classList.toggle('hidden', isGrid);
      render();
    });

    // Add new / edit
    addNoteBtn.addEventListener('click', () => openDrawer('create'));
    saveBtn.addEventListener('click', () => {
      const title = noteTitle.value.trim();
      const content = noteContent.value.trim();
      if (!title) {
        saveStatus.textContent = 'Title is required.';
        saveStatus.classList.add('text-rose-600');
        return;
      }
      if (editingId) {
        notes = notes.map(n => n.id === editingId ? { ...n, title, content, pinned: draftPinned } : n);
      } else {
        notes.unshift({
          id: crypto.randomUUID(),
          title,
          content,
          createdAt: nowISO(),
          pinned: draftPinned
        });
      }
      render();
      closeDrawer();
    });

    // Render
    function render() {
      const q = getQuery();
      let filtered = notes.filter(n => {
        if (!q) return true;
        return n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q);
      });

      // Sort: pinned first, then newest
      filtered.sort((a, b) => {
        if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      emptyState.classList.toggle('hidden', filtered.length > 0);
      document.getElementById('notesWrap').classList.toggle('hidden', filtered.length === 0);

      if (isGrid) {
        notesGrid.innerHTML = filtered.map(n => cardHTML(n)).join('');
      } else {
        notesList.innerHTML = filtered.map(n => rowHTML(n)).join('');
      }

      attachCardHandlers();
    }

    function escapeHtml(s) {
      return s.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
    }

    function preview(content) {
      const p = content.trim().replace(/\s+/g, ' ');
      return p.length > 160 ? p.slice(0, 160) + '…' : p;
    }

    function starIcon(active) {
      const color = active ? 'text-violet-600' : 'text-slate-400';
      return `<svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5" class="${color}">
        <path d="M12 17.75 6.16 21l1.12-6.54L2 9.75l6.58-.96L12 3l3.42 5.79 6.58.96-4.76 4.71L17.84 21 12 17.75Z"/>
      </svg>`;
    }

    function cardHTML(n) {
      return `
        <article class="group relative rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow p-4">
          <div class="flex items-start justify-between gap-2">
            <h3 class="text-[16px] font-semibold tracking-tight text-slate-900 line-clamp-1">${escapeHtml(n.title)}</h3>
            <button class="btn-pin shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40" data-id="${n.id}" title="${n.pinned ? 'Unpin' : 'Pin'}">
              ${starIcon(n.pinned)}
            </button>
          </div>
          <p class="mt-1 text-sm text-slate-600 line-clamp-3">${escapeHtml(preview(n.content || ''))}</p>
          <div class="mt-3 flex items-center justify-between">
            <span class="text-xs text-slate-500">${fmtDate(n.createdAt)}</span>
            <div class="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              <button class="btn-edit inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40" data-id="${n.id}" title="Edit">
                <!-- lucide: edit-3 -->
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/>
                </svg>
              </button>
              <button class="btn-delete inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40" data-id="${n.id}" title="Delete">
                <!-- lucide: trash-2 -->
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5">
                  <path d="M3 6h18"/>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                  <path d="M10 11v6M14 11v6"/>
                </svg>
              </button>
            </div>
          </div>
        </article>
      `;
    }

    function rowHTML(n) {
      return `
        <div class="group px-4 py-3 flex items-start gap-3 hover:bg-slate-50">
          <button class="btn-pin mt-0.5 inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40" data-id="${n.id}" title="${n.pinned ? 'Unpin' : 'Pin'}">
            ${starIcon(n.pinned)}
          </button>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <h3 class="text-[16px] font-semibold tracking-tight text-slate-900 truncate">${escapeHtml(n.title)}</h3>
              <span class="ml-3 shrink-0 text-xs text-slate-500">${fmtDate(n.createdAt)}</span>
            </div>
            <p class="mt-0.5 text-sm text-slate-600 truncate">${escapeHtml(preview(n.content || ''))}</p>
          </div>
          <div class="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            <button class="btn-edit inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40" data-id="${n.id}" title="Edit">
              <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/>
              </svg>
            </button>
            <button class="btn-delete inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40" data-id="${n.id}" title="Delete">
              <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5">
                <path d="M3 6h18"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                <path d="M10 11v6M14 11v6"/>
              </svg>
            </button>
          </div>
        </div>
      `;
    }

    function attachCardHandlers() {
      document.querySelectorAll('.btn-pin').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          notes = notes.map(n => n.id === id ? { ...n, pinned: !n.pinned } : n);
          render();
        });
      });
      document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const n = notes.find(x => x.id === id);
          if (n) openDrawer('edit', n);
        });
      });
      document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const n = notes.find(x => x.id === id);
          if (!n) return;
          const ok = confirm('Delete this note?');
          if (ok) {
            notes = notes.filter(x => x.id !== id);
            render();
          }
        });
      });
    }

    // Init
    document.getElementById('year').textContent = new Date().getFullYear();
    render();
  
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
      
<div className="min-h-screen flex">

<aside className="fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 shadow-sm translate-x-0 md:translate-x-0 transition-transform" id="sidebar">
<div className="h-14 px-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center text-xs tracking-tight">YB</div>
<div className="leading-tight">
<div className="text-[15px] font-semibold tracking-tight">YourBrand</div>
<div className="text-[11px] text-slate-500 -mt-0.5">powered by Lead Magics</div>
</div>
</div>
<button className="md:hidden inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" id="closeSidebar">

<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M18 6 6 18M6 6l12 12"></path>
</svg>
</button>
</div>
<nav className="px-3 py-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" href="#">

<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<rect height="9" rx="1.5" width="7" x="3" y="3"></rect>
<rect height="5" rx="1.5" width="7" x="14" y="3"></rect>
<rect height="11" rx="1.5" width="7" x="14" y="10"></rect>
<rect height="7" rx="1.5" width="7" x="3" y="14"></rect>
</svg>
          Dashboard
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm bg-violet-50 text-violet-700 ring-1 ring-violet-200 hover:bg-violet-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" href="#">

<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M3 7a4 4 0 0 1 4-4h7l7 7v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
<path d="M14 3v4a2 2 0 0 0 2 2h4"></path>
</svg>
          Notes
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" href="#">

<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M3 11v2a4 4 0 0 0 4 4h1"></path>
<path d="M7 15v-4"></path>
<path d="M21 8a3 3 0 0 0-3-3H9l-6 5v4l6 5h9a3 3 0 0 0 3-3Z"></path>
</svg>
          Campaigns
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" href="#">

<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
          Team
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" href="#">

<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.04 3.4l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51c.6.25 1.28.14 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.25.6.86 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.65 0-1.26.4-1.51 1Z"></path>
</svg>
          Settings
        </a>
</nav>
<div className="mt-auto p-4 text-[11px] text-slate-500 hidden md:block">
        © <span id="year"></span> YourBrand
      </div>
</aside>

<div className="flex-1 md:ml-64">

<header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="h-14 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" id="openSidebar">

<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
</button>
<h1 className="text-[20px] tracking-tight font-semibold">Notes</h1>
</div>
<div className="flex-1 max-w-xl mx-4 hidden sm:flex">
<div className="relative w-full">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">

<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</span>
<input className="w-full h-9 pl-9 pr-3 rounded-md border border-slate-200 bg-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-400" id="searchInput" placeholder="Search notes..." type="text"/>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-violet-600 text-white text-sm hover:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" id="addNoteBtn">

<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M12 5v14M5 12h14"></path>
</svg>
              Add Note
            </button>
</div>
</div>
</header>

<main className="px-4 sm:px-6 lg:px-8 py-6 space-y-4">

<div className="sm:hidden">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">

<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</span>
<input className="w-full h-10 pl-9 pr-3 rounded-md border border-slate-200 bg-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-400" id="searchInputMobile" placeholder="Search notes..." type="text"/>
</div>
</div>

<div className="flex items-center justify-between">
<div className="text-xs text-slate-500">Quick tip: Use the star to pin important notes.</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-slate-200 bg-white text-xs text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40" id="layoutToggle">

<svg className="text-slate-500" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<rect height="7" rx="1.5" width="7" x="3" y="3"></rect>
<rect height="7" rx="1.5" width="7" x="14" y="3"></rect>
<rect height="7" rx="1.5" width="7" x="14" y="14"></rect>
<rect height="7" rx="1.5" width="7" x="3" y="14"></rect>
</svg>
              Grid
            </button>
</div>
</div>

<section className="rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm" id="emptyState">
<div className="mx-auto w-16 h-16 rounded-lg bg-violet-50 ring-1 ring-violet-100 flex items-center justify-center">

<svg className="text-violet-600" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M3 7a4 4 0 0 1 4-4h7l7 7v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
<path d="M14 3v4a2 2 0 0 0 2 2h4"></path>
</svg>
</div>
<h2 className="mt-4 text-[22px] tracking-tight font-semibold">No notes yet</h2>
<p className="mt-1 text-sm text-slate-600">Create your first note to keep track of ideas, todos, and more.</p>
<div className="mt-5">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-violet-600 text-white text-sm hover:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" onclick="openDrawer('create')">

<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M12 5v14M5 12h14"></path>
</svg>
              Add your first note
            </button>
</div>
</section>

<section id="notesWrap">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="notesGrid"></div>
<div className="hidden divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm" id="notesList"></div>
</section>
</main>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="drawerRoot">
<div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity" id="drawerBackdrop"></div>
<aside className="absolute right-0 top-0 h-full w-full sm:max-w-md bg-white border-l border-slate-200 shadow-xl translate-x-full transition-transform" id="drawerPanel">
<div className="h-14 px-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-violet-600 text-white flex items-center justify-center text-xs tracking-tight">NB</div>
<h3 className="text-[18px] tracking-tight font-semibold" id="drawerTitle">Add note</h3>
</div>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" id="drawerClose">

<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M18 6 6 18M6 6l12 12"></path>
</svg>
</button>
</div>
<div className="p-4 space-y-4">
<div>
<label className="block text-xs text-slate-600 mb-1.5">Title</label>
<input className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-400" id="noteTitle" placeholder="Note title" type="text"/>
</div>
<div>
<label className="block text-xs text-slate-600 mb-1.5">Content</label>
<textarea className="w-full rounded-md border border-slate-200 bg-white text-sm placeholder:text-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-400" id="noteContent" placeholder="Write your note..." rows="8"></textarea>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-slate-200 bg-white text-xs text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40" id="pinToggle" type="button">

<svg className="text-slate-500" fill="none" height="16" id="pinIcon" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M12 17.75 6.16 21l1.12-6.54L2 9.75l6.58-.96L12 3l3.42 5.79 6.58.96-4.76 4.71L17.84 21 12 17.75Z"></path>
</svg>
              Pin
            </button>
<span className="text-xs text-slate-500" id="saveStatus"></span>
</div>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-md border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40" id="cancelBtn">Cancel</button>
<button className="h-9 px-3 rounded-md bg-violet-600 text-white text-sm hover:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" id="saveBtn">

<svg className="mr-1 inline align-[-2px]" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M19 21H5a2 2 0 0 1-2-2V7l4-4h10l4 4v12a2 2 0 0 1-2 2Z"></path>
<path d="M17 21v-8H7v8M7 3v4h10V3"></path>
</svg>
              Save
            </button>
</div>
</div>
</div>
</aside>
</div>


    </>
  );
}
