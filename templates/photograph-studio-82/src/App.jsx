import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Icons
    function mountIcons() {
      if (window.lucide) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
      }
    }

    // State
    const state = {
      loggedIn:      true,
      activeView: 'overview',
      unreadNotifications: 3,
      range: '30',
      filters: { search: '', jenis: '' },
      content: [
        { client: 'Dapur Nusantara', jenis: 'Produk', jumlah: 320, edited: 260, gdrive: 'https://drive.google.com/folder/dapurnusantara', status: 'Selesai' },
        { client: 'Kopi Hutan', jenis: 'Katalog', jumlah: 210, edited: 210, gdrive: 'https://drive.google.com/folder/kopihutan', status: 'Selesai' },
        { client: 'Aurora Fashion', jenis: 'Fashion', jumlah: 180, edited: 156, gdrive: 'https://drive.google.com/folder/aurora', status: 'Proses' },
        { client: 'Studio Persona', jenis: 'Portrait', jumlah: 85, edited: 64, gdrive: 'https://drive.google.com/folder/persona', status: 'Proses' },
        { client: 'Rumah Rasa', jenis: 'Produk', jumlah: 140, edited: 132, gdrive: 'https://drive.google.com/folder/rumahrasa', status: 'Selesai' },
        { client: 'Cahaya Wedding', jenis: 'Wedding', jumlah: 560, edited: 480, gdrive: 'https://drive.google.com/folder/cahayawedding', status: 'Proses' },
        { client: 'Nova Boutique', jenis: 'Fashion', jumlah: 240, edited: 198, gdrive: 'https://drive.google.com/folder/novaboutique', status: 'Proses' },
        { client: 'Urban Portraits', jenis: 'Portrait', jumlah: 96, edited: 96, gdrive: 'https://drive.google.com/folder/urbanportraits', status: 'Selesai' }
      ]
    };

    // Helpers
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
    const closeAllMenus = () => {
      ['menuRange','menuBell','menuUser'].forEach(id => $('#'+id)?.classList.add('hidden'));
    };
    const setCrumb = (name) => { $('#crumb').textContent = name.charAt(0).toUpperCase() + name.slice(1); };

    // View switcher
    function setView(view) {
      state.activeView = view;
      // Sections
      $$('section[data-view]').forEach(sec => {
        sec.classList.toggle('hidden', sec.getAttribute('data-view') !== view);
      });
      // Active nav (sidebar)
      $$('.nav-item').forEach(btn => {
        const isActive = btn.getAttribute('data-nav') === view;
        btn.classList.toggle('bg-white/10', isActive);
        btn.classList.toggle('text-white', isActive);
      });
      setCrumb(view);
      // Close floating menus and drawer (mobile)
      closeAllMenus();
      $('#drawer')?.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      mountIcons();
    }

    // Content table
    function renderContent() {
      const tbody = $('#tbodyContent');
      const q = state.filters.search.trim().toLowerCase();
      const jenis = state.filters.jenis;

      const filtered = state.content.filter(row => {
        const matchSearch = !q || [row.client, row.jenis].join(' ').toLowerCase().includes(q);
        const matchJenis = !jenis || row.jenis === jenis;
        return matchSearch && matchJenis;
      });

      tbody.innerHTML = '';
      filtered.forEach(row => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-white/5';
        tr.innerHTML = `
          <td class="py-2 px-3">
            <div class="flex items-center gap-2">
              <span class="h-2.5 w-2.5 rounded-full ${row.status === 'Selesai' ? 'bg-emerald-500' : 'bg-amber-500'}"></span>
              <span>${row.client}</span>
            </div>
          </td>
          <td class="py-2 px-3">${row.jenis}</td>
          <td class="py-2 px-3">${row.jumlah}</td>
          <td class="py-2 px-3">${row.edited}</td>
          <td class="py-2 px-3">
            <a href="${row.gdrive}" target="_blank" class="inline-flex items-center gap-1 text-violet-300 hover:text-violet-200">
              <i data-lucide="link-2" class="w-3.5 h-3.5"></i>
              <span class="truncate max-w-[180px] md:max-w-[260px] inline-block align-bottom">${row.gdrive}</span>
            </a>
          </td>
          <td class="py-2 px-3">
            <div class="flex items-center gap-2">
              <button class="action-open text-xs px-2-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10 inline-flex items-center gap-1">
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>Buka
              </button>
              <button class="action-copy text-xs px-2 py-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10 inline-flex items-center gap-1" data-url="${row.gdrive}">
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>Salin
              </button>
            </div>
          </td>
        `;
        tbody.appendChild(tr);
      });

      $('#countRows').textContent = filtered.length.toString();

      // Bind action buttons
      $$('#tbodyContent .action-open').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
          const url = filtered[idx].gdrive;
          window.open(url, '_blank', 'noopener,noreferrer');
        });
      });
      $$('#tbodyContent .action-copy').forEach(btn => {
        btn.addEventListener('click', async () => {
          const url = btn.getAttribute('data-url') || '';
          try {
            await navigator.clipboard.writeText(url);
            btn.classList.add('bg-emerald-500/20','ring-emerald-500/40');
            setTimeout(() => btn.classList.remove('bg-emerald-500/20','ring-emerald-500/40'), 800);
          } catch {}
        });
      });

      mountIcons();
    }

    // Export CSV
    function exportContentCSV() {
      const headers = ['Client','Jenis Foto','Jumlah Foto','Edited Output','GDrive','Status'];
      const q = state.filters.search.trim().toLowerCase();
      const jenis = state.filters.jenis;
      const filtered = state.content.filter(row => {
        const matchSearch = !q || [row.client, row.jenis].join(' ').toLowerCase().includes(q);
        const matchJenis = !jenis || row.jenis === jenis;
        return matchSearch && matchJenis;
      });
      const rows = filtered.map(r => [r.client, r.jenis, r.jumlah, r.edited, r.gdrive, r.status]);
      const csv = [headers, ...rows].map(r => r.map(x => `"${String(x).replace(/"/g,'""')}"`).join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'content-photos.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }

    // Toggles (settings)
    function initToggles() {
      $$('button[data-toggle]').forEach(btn => {
        btn.addEventListener('click', () => {
          const isOn = btn.getAttribute('data-checked') === 'true';
          if (isOn) {
            btn.setAttribute('data-checked', 'false');
            btn.classList.remove('bg-violet-600/60','ring-violet-500/50');
            btn.classList.add('bg-white/10','ring-white/10');
            const dot = btn.querySelector('.dot');
            dot?.classList.remove('translate-x-5');
            dot?.classList.add('translate-x-0');
          } else {
            btn.setAttribute('data-checked', 'true');
            btn.classList.remove('bg-white/10','ring-white/10');
            btn.classList.add('bg-violet-600/60','ring-violet-500/50');
            const dot = btn.querySelector('.dot');
            dot?.classList.add('translate-x-5');
          }
        });
      });
    }

    // Auth handlers
    function showAppShell() {
      $('#auth').classList.add('hidden');
      $('#app').classList.remove('hidden');
      setView(state.activeView);
    }
    function showAuth() {
      $('#app').classList.add('hidden');
      $('#auth').classList.remove('hidden');
      closeAllMenus();
    }
    function login() {
      state.loggedIn = true;
      localStorage.setItem('ps_loggedIn', '1');
      showAppShell();
      mountIcons();
    }
    function logout() {
      state.loggedIn = false;
      localStorage.removeItem('ps_loggedIn');
      showAuth();
    }

    // Range menu
    function initRangeMenu() {
      const btn = $('#btnRange');
      const menu = $('#menuRange');
      if (!btn || !menu) return;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('hidden');
      });
      $$('#menuRange [data-range]').forEach(opt => {
        opt.addEventListener('click', () => {
          const val = opt.getAttribute('data-range');
          state.range = val || '30';
          const label = val === 'custom' ? 'Rentang kustom' : `${val} hari terakhir`;
          $('#btnRange span').textContent = label;
          menu.classList.add('hidden');
        });
      });
    }

    // Bell menu
    function initBell() {
      const btn = $('#btnBell');
      const menu = $('#menuBell');
      btn?.addEventListener('click', (e) => {
        e.stopPropagation();
        menu?.classList.toggle('hidden');
        if (!menu?.classList.contains('hidden')) {
          // opening menu marks as read visually
          $('#dotBell')?.classList.add('hidden');
          state.unreadNotifications = 0;
        }
      });
      $('#markAllRead')?.addEventListener('click', () => {
        $('#dotBell')?.classList.add('hidden');
        state.unreadNotifications = 0;
      });
    }

    // User menu
    function initUserMenu() {
      const btn = $('#btnUser');
      const menu = $('#menuUser');
      btn?.addEventListener('click', (e) => {
        e.stopPropagation();
        menu?.classList.toggle('hidden');
      });
    }

    // Drawer (mobile)
    function initDrawer() {
      $('#btnOpenSidebar')?.addEventListener('click', () => {
        $('#drawer')?.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      });
      $('#btnCloseDrawer')?.addEventListener('click', () => {
        $('#drawer')?.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
      // overlay click
      $('#drawer')?.addEventListener('click', (e) => {
        if (e.target === $('#drawer').firstElementChild) {
          $('#drawer')?.classList.add('hidden');
          document.body.classList.remove('overflow-hidden');
        }
      });
    }

    // Global nav
    function initNav() {
      $$('[data-nav]').forEach(btn => {
        btn.addEventListener('click', () => {
          const view = btn.getAttribute('data-nav');
          if (!view) return;
          setView(view);
        });
      });
    }

    // Search & filters
    function initContentFilters() {
      $('#searchContent')?.addEventListener('input', (e) => {
        state.filters.search = e.target.value;
        renderContent();
      });
      $('#filterJenis')?.addEventListener('change', (e) => {
        state.filters.jenis = e.target.value;
        renderContent();
      });
      $('#btnExport')?.addEventListener('click', exportContentCSV);
    }

    // Notifications page
    function initNotifPage() {
      $('#btnClearNotif')?.addEventListener('click', () => {
        const wrap = $('#listNotif');
        wrap.innerHTML = `
          <div class="p-6 text-sm text-slate-400 text-center">
            Semua notifikasi sudah dibersihkan.
          </div>
        `;
      });
    }

    // Auth tabs & buttons
    function initAuth() {
      const tabIn = $('#tabSignIn');
      const tabUp = $('#tabSignUp');
      const formIn = $('#formSignIn');
      const formUp = $('#formSignUp');

      tabIn?.addEventListener('click', () => {
        tabIn.classList.add('bg-white/10','text-white','ring-1','ring-white/10');
        tabUp.classList.remove('bg-white/10','text-white','ring-1','ring-white/10');
        formIn.classList.remove('hidden');
        formUp.classList.add('hidden');
      });
      tabUp?.addEventListener('click', () => {
        tabUp.classList.add('bg-white/10','text-white','ring-1','ring-white/10');
        tabIn.classList.remove('bg-white/10','text-white','ring-1','ring-white/10');
        formUp.classList.remove('hidden');
        formIn.classList.add('hidden');
      });

      $('#btnLogin')?.addEventListener('click', login);
      $('#btnCreate')?.addEventListener('click', login);
      $('#btnLogout')?.addEventListener('click', logout);
      $('#btnLogout2')?.addEventListener('click', logout);
      $('#btnLogout3')?.addEventListener('click', logout);
    }

    // Outside click to close menus
    document.addEventListener('click', (e) => {
      const menus = [$('#menuRange'), $('#menuBell'), $('#menuUser')];
      const buttons = [$('#btnRange'), $('#btnBell'), $('#btnUser')];
      const clickedInsideMenu = menus.some(menu => menu && menu.contains(e.target));
      const clickedBtn = buttons.some(btn => btn && btn.contains(e.target));
      if (!clickedInsideMenu && !clickedBtn) {
        closeAllMenus();
      }
    });
    // Escape key closes menus/drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllMenus();
        $('#drawer')?.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });

    // Init app
    document.addEventListener('DOMContentLoaded', () => {
      // Restore session
      state.loggedIn = localStorage.getItem('ps_loggedIn') === '1';

      if (state.loggedIn) showAppShell();
      else showAuth();

      renderContent();
      initToggles();
      initRangeMenu();
      initBell();
      initUserMenu();
      initDrawer();
      initNav();
      initContentFilters();
      initNotifPage();
      initAuth();
      mountIcons();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hidden" id="auth">
<div className="flex min-h-screen">
<aside className="hidden lg:flex w-1/2 relative overflow-hidden">
<img alt="studio" className="absolute inset-0 h-full w-full object-cover opacity-60" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#0b0f14] via-black/50 to-transparent"></div>
<div className="relative z-10 p-12 flex flex-col justify-between w-full">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-slate-100 tracking-tight font-medium">PS</span>
</div>
<div className="text-slate-100/90 text-lg tracking-tight font-medium">Photograph Studio</div>
</div>
<div>
<h1 className="text-3xl tracking-tight font-semibold text-white">Kelola Studio Foto Anda dengan Presisi</h1>
<p className="mt-3 text-slate-300/80">Dashboard cerdas untuk pekerjaan foto, klien, billing, laporan, dan dukungan dalam satu tempat.</p>
<div className="mt-8 grid grid-cols-3 gap-4">
<div className="p-4 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="text-sm text-slate-300/80">Proyek Aktif</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">24</div>
</div>
<div className="p-4 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="text-sm text-slate-300/80">Foto Terkirim</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">12.4K</div>
</div>
<div className="p-4 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="text-sm text-slate-300/80">Rating Klien</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">4.9</div>
</div>
</div>
</div>
<div className="text-slate-400 text-sm">
            © 2025 Photograph Studio. Semua hak dilindungi.
          </div>
</div>
</aside>
<main className="w-full lg:w-1/2 flex items-center justify-center p-6">
<div className="w-full max-w-md">
<div className="flex items-center gap-3 mb-8 lg:hidden">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-slate-100 tracking-tight text-sm font-medium">PS</span>
</div>
<div className="text-slate-100/90 tracking-tight font-medium">Photograph Studio</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex gap-1 p-1 rounded-md bg-black/30 ring-1 ring-white/10 w-full">
<button className="flex-1 px-3 py-2 rounded-md text-sm tracking-tight font-medium bg-white/10 text-white ring-1 ring-white/10" id="tabSignIn">Sign in</button>
<button className="flex-1 px-3 py-2 rounded-md text-sm tracking-tight font-medium text-slate-300 hover:text-white" id="tabSignUp">Sign up</button>
</div>

<form className="mt-6 space-y-4" id="formSignIn">
<div>
<label className="block text-sm text-slate-300/90 mb-1">Email</label>
<input className="w-full bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none rounded-md px-3 py-2 text-slate-100 placeholder:text-slate-500" placeholder="you@studio.com" type="email"/>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<label className="block text-sm text-slate-300/90">Kata sandi</label>
<button className="text-xs text-slate-400 hover:text-slate-200" type="button">Lupa?</button>
</div>
<input className="w-full bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none rounded-md px-3 py-2 text-slate-100 placeholder:text-slate-500" placeholder="••••••••" type="password"/>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-violet-600 hover:bg-violet-500 text-white px-3 py-2.5 text-sm tracking-tight font-medium ring-1 ring-white/10" id="btnLogin" type="button">
<i className="w-4 h-4" data-lucide="log-in"></i> Masuk
              </button>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-200 px-3 py-2.5 text-sm tracking-tight font-medium ring-1 ring-white/10" type="button">
<i className="w-4 h-4" data-lucide="mail"></i> Masuk dengan Email Magic Link
              </button>
</form>

<form className="mt-6 space-y-4 hidden" id="formSignUp">
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-sm text-slate-300/90 mb-1">Nama Depan</label>
<input className="w-full bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none rounded-md px-3 py-2 text-slate-100 placeholder:text-slate-500" placeholder="Alya" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-300/90 mb-1">Nama Belakang</label>
<input className="w-full bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none rounded-md px-3 py-2 text-slate-100 placeholder:text-slate-500" placeholder="Pratama" type="text"/>
</div>
</div>
<div>
<label className="block text-sm text-slate-300/90 mb-1">Email</label>
<input className="w-full bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none rounded-md px-3 py-2 text-slate-100 placeholder:text-slate-500" placeholder="you@studio.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-sm text-slate-300/90 mb-1">Kata sandi</label>
<input className="w-full bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none rounded-md px-3 py-2 text-slate-100 placeholder:text-slate-500" placeholder="Minimal 8 karakter" type="password"/>
</div>
<div>
<label className="block text-sm text-slate-300/90 mb-1">Ulangi Kata sandi</label>
<input className="w-full bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none rounded-md px-3 py-2 text-slate-100 placeholder:text-slate-500" placeholder="Ulangi kata sandi" type="password"/>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-violet-600 hover:bg-violet-500 text-white px-3 py-2.5 text-sm tracking-tight font-medium ring-1 ring-white/10" id="btnCreate" type="button">
<i className="w-4 h-4" data-lucide="user-plus"></i> Buat Akun
              </button>
</form>
</div>
<p className="mt-6 text-xs text-slate-400">
            Dengan melanjutkan, Anda menyetujui Ketentuan Layanan dan Kebijakan Privasi.
          </p>
</div>
</main>
</div>
</div>

<div className="min-h-screen flex" id="app">

<aside className="hidden md:flex md:flex-col w-64 shrink-0 border-r border-white/10 bg-black/30 backdrop-blur-sm" id="sidebar">
<div className="h-16 flex items-center gap-3 px-4 border-b border-white/10">
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-slate-100 tracking-tight font-medium">PS</span>
</div>
<div>
<div className="text-slate-100 tracking-tight font-medium">Photograph Studio</div>
<div className="text-xs text-slate-400">Admin Dashboard</div>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-3">
<div className="px-3">
<div className="text-[11px] uppercase tracking-widest text-slate-400/70 px-2 mb-2">Main</div>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="overview">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i> Overview
          </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="analytics">
<i className="w-4 h-4" data-lucide="line-chart"></i> Analytics
          </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="content">
<i className="w-4 h-4" data-lucide="images"></i> Content Management
          </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="metrics">
<i className="w-4 h-4" data-lucide="activity"></i> Metrics
          </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="support">
<i className="w-4 h-4" data-lucide="life-buoy"></i> Customer Support
          </button>
</div>
<div className="px-3 mt-4">
<div className="text-[11px] uppercase tracking-widest text-slate-400/70 px-2 mb-2">Ops</div>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="reports">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i> Reports
          </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="billing">
<i className="w-4 h-4" data-lucide="credit-card"></i> Billing
          </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="notifications">
<i className="w-4 h-4" data-lucide="bell"></i> Notifikasi
          </button>
</div>
<div className="px-3 mt-4">
<div className="text-[11px] uppercase tracking-widest text-slate-400/70 px-2 mb-2">Akun</div>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="settings">
<i className="w-4 h-4" data-lucide="settings"></i> Settings
          </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="profile">
<i className="w-4 h-4" data-lucide="user"></i> Profile
          </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" id="btnLogout">
<i className="w-4 h-4" data-lucide="log-out"></i> Logout
          </button>
</div>
</nav>
<div className="p-3 border-t border-white/10">
<div className="flex items-center gap-3 p-2 rounded-md bg-white/5 ring-1 ring-white/10">
<img alt="avatar" className="h-8 w-8 rounded-md object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=880&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-sm font-medium tracking-tight truncate">Alya Pratama</div>
<div className="text-xs text-slate-400 truncate">admin@studio.com</div>
</div>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col">

<header className="h-16 flex items-center gap-3 px-3 md:px-6 border-b border-white/10 bg-black/20 backdrop-blur-sm">
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10" id="btnOpenSidebar">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="hidden sm:flex items-center gap-2">
<div className="px-2 py-1 text-[11px] uppercase tracking-widest text-slate-400/70">Dashboard</div>
<div className="h-4 w-px bg-white/10"></div>
<div className="px-2 py-1 text-[11px] uppercase tracking-widest text-slate-200" id="crumb">Overview</div>
</div>
<div className="flex-1"></div>
<div className="hidden md:flex items-center gap-3">
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" data-lucide="search"></i>
<input className="pl-9 pr-3 py-2 bg-black/30 rounded-md ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none text-sm placeholder:text-slate-500 w-72" placeholder="Cari proyek, klien, atau file…" />
</input></div>
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-sm" id="btnRange">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>30 hari terakhir</span>
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-52 rounded-md bg-[#0b0f14] ring-1 ring-white/10 shadow-xl p-1" id="menuRange">
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 text-sm" data-range="7">7 hari terakhir</button>
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 text-sm" data-range="30">30 hari terakhir</button>
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 text-sm" data-range="90">90 hari terakhir</button>
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 text-sm" data-range="custom">Kustom…</button>
</div>
</div>
<div className="relative">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 relative" id="btnBell">
<i className="w-4 h-4" data-lucide="bell"></i>
<span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-violet-500" id="dotBell"></span>
</button>
<div className="hidden absolute right-0 mt-2 w-80 rounded-md bg-[#0b0f14] ring-1 ring-white/10 shadow-xl" id="menuBell">
<div className="p-3 border-b border-white/10 flex items-center justify-between">
<div className="text-sm font-medium tracking-tight">Notifikasi</div>
<button className="text-xs text-slate-400 hover:text-slate-200" id="markAllRead">Tandai semua dibaca</button>
</div>
<div className="max-h-80 overflow-auto">
<div className="p-3 hover:bg-white/5">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-violet-500/15 ring-1 ring-violet-500/30 flex items-center justify-center">
<i className="w-4 h-4 text-violet-400" data-lucide="image"></i>
</div>
<div className="min-w-0">
<div className="text-sm">Output editing untuk “Katalog Kopi Hutan” selesai.</div>
<div className="text-xs text-slate-400">2 menit lalu</div>
</div>
</div>
</div>
<div className="p-3 hover:bg-white/5">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-emerald-500/15 ring-1 ring-emerald-500/30 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle"></i>
</div>
<div className="min-w-0">
<div className="text-sm">Invoice INV-0041 telah dibayar.</div>
<div className="text-xs text-slate-400">1 jam lalu</div>
</div>
</div>
</div>
<div className="p-3 hover:bg-white/5">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-amber-500/15 ring-1 ring-amber-500/30 flex items-center justify-center">
<i className="w-4 h-4 text-amber-400" data-lucide="life-buoy"></i>
</div>
<div className="min-w-0">
<div className="text-sm">Tiket dukungan baru dari “Dapur Nusantara”.</div>
<div className="text-xs text-slate-400">3 jam lalu</div>
</div>
</div>
</div>
</div>
<div className="p-3 border-t border-white/10 text-center">
<button className="text-sm text-slate-300 hover:text-white" data-nav="notifications">Lihat semua notifikasi</button>
</div>
</div>
</div>
<div className="relative">
<button className="inline-flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5" id="btnUser">
<img alt="avatar" className="h-8 w-8 rounded-md object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-48 rounded-md bg-[#0b0f14] ring-1 ring-white/10 shadow-xl p-1" id="menuUser">
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 text-sm" data-nav="profile">
<i className="w-4 h-4" data-lucide="user"></i> Profile
              </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 text-sm" data-nav="settings">
<i className="w-4 h-4" data-lucide="settings"></i> Settings
              </button>
<div className="my-1 h-px bg-white/10"></div>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 text-sm text-rose-300" id="btnLogout2">
<i className="w-4 h-4" data-lucide="log-out"></i> Logout
              </button>
</div>
</div>
</div>
</header>

<main className="flex-1 p-3 md:p-6 space-y-6">

<section className="space-y-6" data-view="overview">
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-300/90">Pendapatan Bulan Ini</div>
<i className="w-4 h-4 text-slate-400" data-lucide="wallet"></i>
</div>
<div className="mt-2 text-2xl tracking-tight font-semibold">Rp 124.500.000</div>
<div className="mt-2 flex items-center gap-2 text-xs">
<span className="text-emerald-400 inline-flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>12%</span>
<span className="text-slate-400">vs bulan lalu</span>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-300/90">Proyek Aktif</div>
<i className="w-4 h-4 text-slate-400" data-lucide="briefcase"></i>
</div>
<div className="mt-2 text-2xl tracking-tight font-semibold">24</div>
<div className="mt-2 h-8 w-full flex items-end gap-1">
<div className="w-1/6 bg-violet-500/30 h-3 rounded"></div>
<div className="w-1/6 bg-violet-500/40 h-4 rounded"></div>
<div className="w-1/6 bg-violet-500/50 h-5 rounded"></div>
<div className="w-1/6 bg-violet-500/60 h-6 rounded"></div>
<div className="w-1/6 bg-violet-500/70 h-7 rounded"></div>
<div className="w-1/6 bg-violet-500/80 h-8 rounded"></div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-300/90">Foto Terkirim</div>
<i className="w-4 h-4 text-slate-400" data-lucide="image"></i>
</div>
<div className="mt-2 text-2xl tracking-tight font-semibold">12.4K</div>
<div className="mt-2 text-xs text-slate-400">30 hari terakhir</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-300/90">Rata2 Waktu Editing</div>
<i className="w-4 h-4 text-slate-400" data-lucide="timer"></i>
</div>
<div className="mt-2 text-2xl tracking-tight font-semibold">36 jam</div>
<div className="mt-2 flex items-center gap-2 text-xs">
<span className="text-emerald-400 inline-flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="arrow-down-right"></i>8%</span>
<span className="text-slate-400">lebih cepat</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-3 md:gap-4">
<div className="xl:col-span-2 rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-slate-300/90">Trend Pemasukan</div>
<div className="text-xl tracking-tight font-semibold">Pendapatan 6 Bulan</div>
</div>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-sm">
<i className="w-4 h-4" data-lucide="download"></i> Export CSV
                </button>
</div>
<div className="mt-4">

<div className="h-48 relative">
<svg className="absolute inset-0 w-full h-full" viewbox="0 0 200 100">
<defs>
<lineargradient id="g1" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#7c3aed" stop-opacity="0.4"></stop>
<stop offset="100%" stop-color="#7c3aed" stop-opacity="0.0"></stop>
</lineargradient>
</defs>
<polyline fill="url(#g1)" points="0,80 20,70 40,75 60,60 80,65 100,50 120,55 140,45 160,48 180,40 200,42 200,100 0,100" stroke="#7c3aed" strokeWidth="1.5"></polyline>
<g stroke="rgba(255,255,255,0.08)">
<line x1="0" x2="200" y1="100" y2="100"></line>
<line x1="0" x2="200" y1="75" y2="75"></line>
<line x1="0" x2="200" y1="50" y2="50"></line>
<line x1="0" x2="200" y1="25" y2="25"></line>
</g>
</svg>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-slate-300/90">Top Klien</div>
<div className="text-xl tracking-tight font-semibold">Kontributor Pendapatan</div>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="trophy"></i>
</div>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img className="h-8 w-8 rounded-md object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=880&amp;auto=format&amp;fit=crop" />
<div>
<div className="text-sm font-medium tracking-tight">Dapur Nusantara</div>
<div className="text-xs text-slate-400">Produk</div>
</div>
</img></div>
<div className="text-sm">Rp 32.5jt</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img className="h-8 w-8 rounded-md object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=880&amp;auto=format&amp;fit=crop" />
<div>
<div className="text-sm font-medium tracking-tight">Kopi Hutan</div>
<div className="text-xs text-slate-400">Katalog</div>
</div>
</img></div>
<div className="text-sm">Rp 24.1jt</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img className="h-8 w-8 rounded-md object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=880&amp;auto=format&amp;fit=crop" />
<div>
<div className="text-sm font-medium tracking-tight">Aurora Fashion</div>
<div className="text-xs text-slate-400">Lookbook</div>
</div>
</img></div>
<div className="text-sm">Rp 18.9jt</div>
</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-xl tracking-tight font-semibold">Aktivitas Terbaru</div>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-sm" data-nav="content">
<i className="w-4 h-4" data-lucide="arrow-right"></i> Lihat semua pekerjaan
              </button>
</div>
<div className="mt-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
<div className="p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="text-sm">Editing selesai • Katalog Kopi Hutan</div>
<div className="text-xs text-slate-400">24 menit lalu</div>
</div>
<div className="p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="text-sm">Upload mentahan • Aurora Fashion</div>
<div className="text-xs text-slate-400">1 jam lalu</div>
</div>
<div className="p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="text-sm">Invoice INV-0041 dibayar</div>
<div className="text-xs text-slate-400">2 jam lalu</div>
</div>
<div className="p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="text-sm">Tiket dukungan baru</div>
<div className="text-xs text-slate-400">3 jam lalu</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" data-view="analytics">
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm text-slate-300/90">Booking</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">168</div>
<div className="mt-2 h-10 flex items-end gap-1">
<div className="w-1/12 bg-violet-500/30 h-3 rounded"></div>
<div className="w-1/12 bg-violet-500/40 h-4 rounded"></div>
<div className="w-1/12 bg-violet-500/50 h-6 rounded"></div>
<div className="w-1/12 bg-violet-500/60 h-8 rounded"></div>
<div className="w-1/12 bg-violet-500/70 h-9 rounded"></div>
<div className="w-1/12 bg-violet-500/80 h-10 rounded"></div>
<div className="w-1/12 bg-violet-500/60 h-8 rounded"></div>
<div className="w-1/12 bg-violet-500/70 h-9 rounded"></div>
<div className="w-1/12 bg-violet-500/80 h-10 rounded"></div>
<div className="w-1/12 bg-violet-500/60 h-8 rounded"></div>
<div className="w-1/12 bg-violet-500/70 h-9 rounded"></div>
<div className="w-1/12 bg-violet-500/90 h-12 rounded"></div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm text-slate-300/90">Konversi</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">3.9%</div>
<div className="mt-2 text-xs text-slate-400">Dari inquiry ke booking</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm text-slate-300/90">Rata2 Nilai Proyek</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">Rp 5.2jt</div>
<div className="mt-2 text-xs text-slate-400">+5% vs bulan lalu</div>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-3 md:gap-4">
<div className="xl:col-span-2 rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-xl tracking-tight font-semibold">Pipeline Proyek</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-slate-400"><span className="h-2 w-2 rounded-full bg-violet-500"></span> Baru</span>
<span className="inline-flex items-center gap-1 text-xs text-slate-400"><span className="h-2 w-2 rounded-full bg-emerald-500"></span> Selesai</span>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="space-y-2">
<div className="text-sm text-slate-300/90">Baru</div>
<div className="h-2 w-full rounded bg-white/5 ring-1 ring-white/10">
<div className="h-2 bg-violet-600 rounded" style={{width: '58%'}}></div>
</div>
<div className="text-xs text-slate-400">58 proyek</div>
</div>
<div className="space-y-2">
<div className="text-sm text-slate-300/90">Selesai</div>
<div className="h-2 w-full rounded bg-white/5 ring-1 ring-white/10">
<div className="h-2 bg-emerald-500 rounded" style={{width: '42%'}}></div>
</div>
<div className="text-xs text-slate-400">42 proyek</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xl tracking-tight font-semibold">Jenis Foto Terfavorit</div>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-violet-500"></span>
<span className="text-sm">Produk</span>
</div>
<div className="text-sm">38%</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-sky-500"></span>
<span className="text-sm">Fashion</span>
</div>
<div className="text-sm">27%</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-sm">Portrait</span>
</div>
<div className="text-sm">21%</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-amber-500"></span>
<span className="text-sm">Wedding</span>
</div>
<div className="text-sm">14%</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-view="content">
<div className="flex items-center justify-between">
<div>
<div className="text-xl tracking-tight font-semibold">Database Pekerjaan Foto</div>
<p className="text-sm text-slate-400">Kelola hasil editing, link GDrive, dan status proyek.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-sm">
<i className="w-4 h-4" data-lucide="upload"></i> Import CSV
              </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-violet-600 hover:bg-violet-500 ring-1 ring-white/10 text-sm">
<i className="w-4 h-4" data-lucide="plus"></i> Tambah Pekerjaan
              </button>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3 md:p-4">
<div className="flex flex-col md:flex-row md:items-center gap-3">
<div className="relative flex-1">
<i className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" data-lucide="search"></i>
<input className="pl-9 pr-3 py-2 bg-black/30 rounded-md ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none text-sm placeholder:text-slate-500 w-full" id="searchContent" placeholder="Cari client atau proyek…" />
</input></div>
<div className="flex items-center gap-2">
<select className="px-3 py-2 bg-black/30 rounded-md ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none text-sm" id="filterJenis">
<option value="">Semua Jenis</option>
<option>Produk</option>
<option>Portrait</option>
<option>Wedding</option>
<option>Fashion</option>
</select>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-sm" id="btnExport">
<i className="w-4 h-4" data-lucide="download"></i> Export
                </button>
</div>
</div>
<div className="mt-3 overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-xs text-slate-400">
<tr className="border-b border-white/10">
<th className="text-left py-2 px-3 font-medium">Client</th>
<th className="text-left py-2 px-3 font-medium">Jenis Foto</th>
<th className="text-left py-2 px-3 font-medium">Jumlah Foto</th>
<th className="text-left py-2 px-3 font-medium">Edited Output</th>
<th className="text-left py-2 px-3 font-medium">Hasil (GDrive)</th>
<th className="text-left py-2 px-3 font-medium">Aksi</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10" id="tbodyContent">

</tbody>
</table>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-slate-400">
<div>Menampilkan <span id="countRows">0</span> entri</div>
<div className="flex items-center gap-2">
<button className="px-2 py-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10">Sebelumnya</button>
<button className="px-2 py-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10">Berikutnya</button>
</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-view="metrics">
<div className="text-xl tracking-tight font-semibold">Metrics Operasional</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm text-slate-300/90">Queue Rendering</div>
<div className="mt-2 text-2xl tracking-tight font-semibold">7 tugas</div>
<div className="mt-3 h-2 w-full rounded bg-white/5 ring-1 ring-white/10">
<div className="h-2 bg-amber-500 rounded" style={{width: '55%'}}></div>
</div>
<div className="mt-2 text-xs text-slate-400">Estimasi selesai 1h 20m</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm text-slate-300/90">Pemakaian Storage</div>
<div className="mt-2 text-2xl tracking-tight font-semibold">2.1 TB / 5 TB</div>
<div className="mt-3 h-2 w-full rounded bg-white/5 ring-1 ring-white/10">
<div className="h-2 bg-violet-600 rounded" style={{width: '42%'}}></div>
</div>
<div className="mt-2 text-xs text-slate-400">Sisa 2.9 TB</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm text-slate-300/90">Uptime Layanan</div>
<div className="mt-2 text-2xl tracking-tight font-semibold">99.97%</div>
<div className="mt-2 text-xs text-slate-400">30 hari</div>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-2 gap-3 md:gap-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm text-slate-300/90">CPU &amp; Memori</div>
<div className="mt-3 space-y-3">
<div>
<div className="flex items-center justify-between text-xs">
<span>CPU</span><span>63%</span>
</div>
<div className="h-2 w-full rounded bg-white/5 ring-1 ring-white/10">
<div className="h-2 bg-emerald-500 rounded" style={{width: '63%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs">
<span>Memori</span><span>72%</span>
</div>
<div className="h-2 w-full rounded bg-white/5 ring-1 ring-white/10">
<div className="h-2 bg-sky-500 rounded" style={{width: '72%'}}></div>
</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm text-slate-300/90">Kecepatan Rata2 Deliver</div>
<div className="mt-3 h-32 grid grid-cols-12 items-end gap-1">
<div className="h-5 bg-white/10 rounded"></div>
<div className="h-6 bg-white/10 rounded"></div>
<div className="h-8 bg-white/10 rounded"></div>
<div className="h-10 bg-white/10 rounded"></div>
<div className="h-12 bg-white/10 rounded"></div>
<div className="h-14 bg-white/10 rounded"></div>
<div className="h-16 bg-white/10 rounded"></div>
<div className="h-12 bg-white/10 rounded"></div>
<div className="h-10 bg-white/10 rounded"></div>
<div className="h-8 bg-white/10 rounded"></div>
<div className="h-6 bg-white/10 rounded"></div>
<div className="h-7 bg-white/10 rounded"></div>
</div>
<div className="mt-2 text-xs text-slate-400">Jam kerja ke pengiriman (mingguan)</div>
</div>
</div>
</section>

<section className="hidden" data-view="support">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-1 rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="p-3 border-b border-white/10 flex items-center justify-between">
<div className="text-sm font-medium tracking-tight">Tiket</div>
<button className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10">
<i className="w-3.5 h-3.5" data-lucide="filter"></i> Filter
                </button>
</div>
<div className="p-2 space-y-2">
<button className="w-full text-left p-3 rounded-md hover:bg-white/5 ring-1 ring-white/10/0 hover:ring-white/10">
<div className="flex items-center justify-between">
<div className="text-sm">Warna foto terlalu warm</div>
<span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30">Open</span>
</div>
<div className="text-xs text-slate-400 mt-1">Dapur Nusantara • 1h lalu</div>
</button>
<button className="w-full text-left p-3 rounded-md hover:bg-white/5 ring-1 ring-white/10/0 hover:ring-white/10">
<div className="flex items-center justify-between">
<div className="text-sm">Permintaan revisi batch 2</div>
<span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 ring-1 ring-violet-500/30">Pending</span>
</div>
<div className="text-xs text-slate-400 mt-1">Kopi Hutan • 3h lalu</div>
</button>
<button className="w-full text-left p-3 rounded-md hover:bg-white/5 ring-1 ring-white/10/0 hover:ring-white/10">
<div className="flex items-center justify-between">
<div className="text-sm">Link GDrive tidak bisa diakses</div>
<span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30">Solved</span>
</div>
<div className="text-xs text-slate-400 mt-1">Aurora Fashion • Kemarin</div>
</button>
</div>
</div>
<div className="lg:col-span-2 rounded-xl bg-white/5 ring-1 ring-white/10 flex flex-col">
<div className="p-3 border-b border-white/10">
<div className="text-sm font-medium tracking-tight">#TKT-1024 • Warna foto terlalu warm</div>
<div className="text-xs text-slate-400">Dapur Nusantara • Prioritas Tinggi</div>
</div>
<div className="flex-1 p-4 space-y-4 overflow-auto">
<div className="flex items-start gap-3">
<img className="h-8 w-8 rounded-md object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=880&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="text-sm font-medium">Dapur Nusantara</div>
<div className="text-sm text-slate-300 mt-1">Halo, hasil batch 1 terasa terlalu warm untuk produk hijau. Bisa diseimbangkan?</div>
<div className="text-[11px] text-slate-400 mt-2">1h lalu</div>
</div>
</div>
<div className="flex items-start gap-3 justify-end">
<div className="flex-1 max-w-[70%] p-3 rounded-lg bg-violet-500/10 ring-1 ring-violet-500/30">
<div className="text-sm font-medium">Anda</div>
<div className="text-sm text-slate-300 mt-1">Siap, kami akan adjust white balance dan tone kurangi +10 warm.</div>
<div className="text-[11px] text-slate-400 mt-2">58m lalu</div>
</div>
</div>
</div>
<div className="p-3 border-t border-white/10 flex items-center gap-2">
<input className="flex-1 px-3 py-2 rounded-md bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none text-sm" placeholder="Tulis balasan…"/>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-violet-600 hover:bg-violet-500 ring-1 ring-white/10 text-sm">
<i className="w-4 h-4" data-lucide="send"></i> Kirim
                </button>
</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-view="reports">
<div className="text-xl tracking-tight font-semibold">Reports</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div>
<label className="block text-sm mb-1 text-slate-300/90">Rentang Tanggal</label>
<input className="w-full px-3 py-2 rounded-md bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none text-sm" type="date"/>
</div>
<div>
<label className="block text-sm mb-1 text-slate-300/90">Jenis Laporan</label>
<select className="w-full px-3 py-2 rounded-md bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none text-sm">
<option>Pendapatan</option>
<option>Produktivitas</option>
<option>Kepuasan Klien</option>
</select>
</div>
<div className="flex items-end">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-violet-600 hover:bg-violet-500 ring-1 ring-white/10 text-sm w-full md:w-auto">
<i className="w-4 h-4" data-lucide="file-bar-chart"></i> Generate
                </button>
</div>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="text-sm text-slate-300/90">Pendapatan Per-Kategori</div>
<div className="mt-3 h-32 grid grid-cols-5 gap-2 items-end">
<div className="h-14 bg-violet-600/70 rounded"></div>
<div className="h-20 bg-violet-600/70 rounded"></div>
<div className="h-28 bg-violet-600/70 rounded"></div>
<div className="h-16 bg-violet-600/70 rounded"></div>
<div className="h-24 bg-violet-600/70 rounded"></div>
</div>
</div>
<div className="p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="text-sm text-slate-300/90">Laporan Terbaru</div>
<ul className="mt-3 space-y-2">
<li className="flex items-center justify-between p-2 rounded-md hover:bg-white/5">
<div className="text-sm">Laporan Bulan Jan 2025</div>
<button className="text-xs inline-flex items-center gap-1 px-2 py-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10">
<i className="w-3.5 h-3.5" data-lucide="download"></i> Unduh
                    </button>
</li>
<li className="flex items-center justify-between p-2 rounded-md hover:bg-white/5">
<div className="text-sm">Laporan Triwulan Q4</div>
<button className="text-xs inline-flex items-center gap-1 px-2 py-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10">
<i className="w-3.5 h-3.5" data-lucide="download"></i> Unduh
                    </button>
</li>
<li className="flex items-center justify-between p-2 rounded-md hover:bg-white/5">
<div className="text-sm">Kepuasan Klien 2024</div>
<button className="text-xs inline-flex items-center gap-1 px-2 py-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10">
<i className="w-3.5 h-3.5" data-lucide="download"></i> Unduh
                    </button>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-view="billing">
<div className="text-xl tracking-tight font-semibold">Billing</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-1 rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm text-slate-300/90">Paket Aktif</div>
<div className="mt-2 text-2xl tracking-tight font-semibold">Studio Pro</div>
<div className="text-sm text-slate-400">Rp 499.000 / bulan</div>
<div className="mt-3 h-2 w-full rounded bg-white/5 ring-1 ring-white/10">
<div className="h-2 bg-violet-600 rounded" style={{width: '70%'}}></div>
</div>
<div className="mt-2 text-xs text-slate-400">Pemakaian storage 70%</div>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-sm">
<i className="w-4 h-4" data-lucide="refresh-ccw"></i> Ubah Paket
                </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-violet-600 hover:bg-violet-500 ring-1 ring-white/10 text-sm">
<i className="w-4 h-4" data-lucide="zap"></i> Upgrade
                </button>
</div>
</div>
<div className="lg:col-span-2 rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium tracking-tight">Invoice</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-sm">
<i className="w-4 h-4" data-lucide="download"></i> Unduh semua
                </button>
</div>
<div className="mt-3 overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-xs text-slate-400">
<tr className="border-b border-white/10">
<th className="text-left py-2 px-3 font-medium">No</th>
<th className="text-left py-2 px-3 font-medium">Tanggal</th>
<th className="text-left py-2 px-3 font-medium">Jumlah</th>
<th className="text-left py-2 px-3 font-medium">Status</th>
<th className="text-left py-2 px-3 font-medium">Aksi</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr>
<td className="py-2 px-3">INV-0041</td>
<td className="py-2 px-3">03 Feb 2025</td>
<td className="py-2 px-3">Rp 499.000</td>
<td className="py-2 px-3"><span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30">Paid</span></td>
<td className="py-2 px-3"><button className="text-xs px-2 py-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10">Unduh</button></td>
</tr>
<tr>
<td className="py-2 px-3">INV-0040</td>
<td className="py-2 px-3">03 Jan 2025</td>
<td className="py-2 px-3">Rp 499.000</td>
<td className="py-2 px-3"><span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30">Paid</span></td>
<td className="py-2 px-3"><button className="text-xs px-2 py-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10">Unduh</button></td>
</tr>
<tr>
<td className="py-2 px-3">INV-0039</td>
<td className="py-2 px-3">03 Des 2024</td>
<td className="py-2 px-3">Rp 499.000</td>
<td className="py-2 px-3"><span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30">Paid</span></td>
<td className="py-2 px-3"><button className="text-xs px-2 py-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10">Unduh</button></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-view="settings">
<div className="text-xl tracking-tight font-semibold">Settings</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-2 space-y-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm font-medium tracking-tight">Informasi Studio</div>
<div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
<div>
<label className="block text-sm text-slate-300/90 mb-1">Nama Studio</label>
<input className="w-full px-3 py-2 rounded-md bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none text-sm" value="Photograph Studio"/>
</div>
<div>
<label className="block text-sm text-slate-300/90 mb-1">Email</label>
<input className="w-full px-3 py-2 rounded-md bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none text-sm" value="admin@studio.com"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm text-slate-300/90 mb-1">Alamat</label>
<input className="w-full px-3 py-2 rounded-md bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none text-sm" value="Jl. Melati No. 12, Jakarta"/>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm font-medium tracking-tight">Preferensi</div>
<div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">

<div className="flex items-center justify-between p-3 rounded-md bg-black/30 ring-1 ring-white/10">
<div>
<div className="text-sm">Notifikasi Email</div>
<div className="text-xs text-slate-400">Terima ringkasan aktivitas harian</div>
</div>
<button className="relative h-6 w-11 rounded-full bg-white/10 ring-1 ring-white/10 transition-colors" data-toggle="">
<span className="sr-only">toggle</span>
<span className="dot absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white/80 transition-transform"></span>
</button>
</div>
<div className="flex items-center justify-between p-3 rounded-md bg-black/30 ring-1 ring-white/10">
<div>
<div className="text-sm">Tema Gelap</div>
<div className="text-xs text-slate-400">Aktifkan mode gelap</div>
</div>
<button className="relative h-6 w-11 rounded-full bg-violet-600/60 ring-1 ring-violet-500/50 transition-colors" data-checked="true" data-toggle="">
<span className="sr-only">toggle</span>
<span className="dot absolute top-0.5 left-5.5 h-5 w-5 rounded-full bg-white/80 transition-transform translate-x-5"></span>
</button>
</div>
</div>
</div>
</div>
<div className="lg:col-span-1 space-y-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm font-medium tracking-tight">Integrasi</div>
<div className="mt-3 space-y-2">
<div className="flex items-center justify-between p-3 rounded bg-black/30 ring-1 ring-white/10">
<div>
<div className="text-sm">Google Drive</div>
<div className="text-xs text-slate-400">Sinkronisasi hasil</div>
</div>
<button className="text-xs px-2 py-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10">Hubungkan</button>
</div>
<div className="flex items-center justify-between p-3 rounded bg-black/30 ring-1 ring-white/10">
<div>
<div className="text-sm">Calendar</div>
<div className="text-xs text-slate-400">Jadwal pemotretan</div>
</div>
<button className="text-xs px-2 py-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10">Hubungkan</button>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm font-medium tracking-tight">Keamanan</div>
<div className="mt-3 space-y-3">
<div>
<div className="text-sm">Ubah Kata Sandi</div>
<button className="mt-1 text-xs px-2 py-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10">Mulai</button>
</div>
<div>
<div className="text-sm">Two-Factor Auth</div>
<button className="mt-1 text-xs px-2 py-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10">Aktifkan</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-view="profile">
<div className="text-xl tracking-tight font-semibold">Profile</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-3">
<img className="h-16 w-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="text-lg tracking-tight font-semibold">Alya Pratama</div>
<div className="text-sm text-slate-400">Administrator</div>
</div>
</div>
<button className="mt-3 text-xs px-3 py-2 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10">Ganti Foto</button>
</div>
<div className="lg:col-span-2 rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div>
<label className="block text-sm text-slate-300/90 mb-1">Nama Lengkap</label>
<input className="w-full px-3 py-2 rounded-md bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none text-sm" value="Alya Pratama"/>
</div>
<div>
<label className="block text-sm text-slate-300/90 mb-1">Email</label>
<input className="w-full px-3 py-2 rounded-md bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none text-sm" value="admin@studio.com"/>
</div>
<div>
<label className="block text-sm text-slate-300/90 mb-1">Telepon</label>
<input className="w-full px-3 py-2 rounded-md bg-black/30 ring-1 ring-white/10 focus:ring-violet-500/60 focus:outline-none text-sm" value="+62 812 3456 7890"/>
</div>
<div>
<label className="block text-sm text-slate-300/90 mb-1">Role</label>
<input className="w-full px-3 py-2 rounded-md bg-black/20 ring-1 ring-white/10 text-sm text-slate-400" disabled="" value="Admin"/>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-violet-600 hover:bg-violet-500 ring-1 ring-white/10 text-sm">
<i className="w-4 h-4" data-lucide="save"></i> Simpan
                </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-sm">
<i className="w-4 h-4" data-lucide="undo-2"></i> Reset
                </button>
</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-view="notifications">
<div className="text-xl tracking-tight font-semibold">Notifikasi</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10">
<div className="p-3 border-b border-white/10 flex items-center justify-between">
<div className="text-sm">Pusat Notifikasi</div>
<button className="text-xs px-2 py-1 rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10" id="btnClearNotif">Bersihkan</button>
</div>
<div className="p-2 space-y-2" id="listNotif">
<div className="p-3 rounded-md hover:bg-white/5">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-violet-500/15 ring-1 ring-violet-500/30 flex items-center justify-center">
<i className="w-4 h-4 text-violet-400" data-lucide="check"></i>
</div>
<div className="min-w-0">
<div className="text-sm">Batch editing “Lookbook Aurora” dipublikasikan.</div>
<div className="text-xs text-slate-400">Baru saja</div>
</div>
</div>
</div>
<div className="p-3 rounded-md hover:bg-white/5">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-emerald-500/15 ring-1 ring-emerald-500/30 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-400" data-lucide="credit-card"></i>
</div>
<div className="min-w-0">
<div className="text-sm">Pembayaran baru dari “Kopi Hutan”.</div>
<div className="text-xs text-slate-400">1 jam lalu</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="fixed inset-0 z-40 hidden" id="drawer">
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute left-0 top-0 h-full w-72 bg-[#0b0f14] ring-1 ring-white/10 p-3">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-slate-100 tracking-tight text-sm font-medium">PS</span>
</div>
<div className="text-slate-100 tracking-tight font-medium">Photograph Studio</div>
</div>
<button className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 inline-flex items-center justify-center" id="btnCloseDrawer">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="overview">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i> Overview
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="analytics">
<i className="w-4 h-4" data-lucide="line-chart"></i> Analytics
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="content">
<i className="w-4 h-4" data-lucide="images"></i> Content Management
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="metrics">
<i className="w-4 h-4" data-lucide="activity"></i> Metrics
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="support">
<i className="w-4 h-4" data-lucide="life-buoy"></i> Customer Support
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="reports">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i> Reports
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="billing">
<i className="w-4 h-4" data-lucide="credit-card"></i> Billing
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="notifications">
<i className="w-4 h-4" data-lucide="bell"></i> Notifikasi
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="settings">
<i className="w-4 h-4" data-lucide="settings"></i> Settings
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5" data-nav="profile">
<i className="w-4 h-4" data-lucide="user"></i> Profile
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-rose-300 hover:text-rose-200 hover:bg-white/5" id="btnLogout3">
<i className="w-4 h-4" data-lucide="log-out"></i> Logout
            </button>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
