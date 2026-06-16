import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons with 1.5 stroke width
      function initIcons() {
        if (window.lucide) {
          window.lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
          });
        }
      }

      // Theme handling (toggle dark class on body)
      const THEME_KEY = 'theme';
      function applyTheme(theme) {
        const body = document.body;
        if (theme === 'dark') {
          body.classList.add('dark');
        } else {
          body.classList.remove('dark');
        }
        const thumb = document.getElementById('toggleThumb');
        if (thumb) {
          if (theme === 'dark') {
            thumb.style.transform = 'translateX(20px)';
          } else {
            thumb.style.transform = 'translateX(4px)';
          }
        }
        localStorage.setItem(THEME_KEY, theme);
      }
      function initTheme() {
        const stored = localStorage.getItem(THEME_KEY);
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(stored || (prefersDark ? 'dark' : 'light'));
      }

      // Global search keyboard shortcut
      function initSearchShortcut() {
        const input = document.getElementById('globalSearch');
        window.addEventListener('keydown', (e) => {
          if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey) {
            e.preventDefault();
            input?.focus();
          }
        });
      }

      // Sidebar drawer for mobile
      function initDrawer() {
        const btn = document.getElementById('mobileMenuBtn');
        const drawer = document.getElementById('drawer');
        const backdrop = document.getElementById('backdrop');
        const close = document.getElementById('drawerClose');

        function open() {
          drawer.classList.remove('-translate-x-full');
          backdrop.classList.remove('hidden');
        }
        function closeDrawer() {
          drawer.classList.add('-translate-x-full');
          backdrop.classList.add('hidden');
        }

        btn?.addEventListener('click', open);
        close?.addEventListener('click', closeDrawer);
        backdrop?.addEventListener('click', closeDrawer);
      }

      // List/Detail toggle
      function initListDetail() {
        const listView = document.getElementById('listView');
        const detailView = document.getElementById('detailView');
        const backBtn = document.getElementById('backToList');
        const viewBtns = document.querySelectorAll('.view-detail-btn');

        function showDetail(devId) {
          // Example mapping for header (static for demo)
          const nameMap = {
            'DEV-00231': { name: 'Torre Norte', loc: 'Monterrey, NL', status: 'Construcción', risk: 'Observación', riskClass: 'amber' },
            'DEV-00218': { name: 'Parque Central', loc: 'CDMX', status: 'Preventa', risk: 'Ninguno', riskClass: 'neutral' },
            'DEV-00199': { name: 'Alto Bosque', loc: 'Guadalajara, JAL', status: 'Entregado', risk: 'Investigación', riskClass: 'rose' }
          };
          const data = nameMap[devId] || nameMap['DEV-00231'];
          document.getElementById('devName').textContent = data.name;
          document.getElementById('devLocation').textContent = data.loc;
          document.getElementById('devStatus').textContent = data.status;
          const riskBadge = document.getElementById('devRiskBadge');
          riskBadge.textContent = data.risk;
          // Reset classes
          riskBadge.className = 'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[12px]';
          if (data.riskClass === 'amber') {
            riskBadge.className += ' ring-1 ring-amber-200/60 bg-amber-50 dark:bg-amber-950/30 dark:ring-amber-900/40 text-amber-700 dark:text-amber-400';
          } else if (data.riskClass === 'rose') {
            riskBadge.className += ' ring-1 ring-rose-200/60 bg-rose-50 dark:bg-rose-950/30 dark:ring-rose-900/40 text-rose-700 dark:text-rose-400';
          } else {
            riskBadge.className += ' ring-1 ring-neutral-200/70 bg-neutral-50 dark:bg-neutral-900/40 dark:ring-neutral-800 text-neutral-700 dark:text-neutral-300';
          }

          listView.classList.add('hidden');
          detailView.classList.remove('hidden');
          initIcons();
        }

        viewBtns.forEach(btn => {
          btn.addEventListener('click', () => showDetail(btn.getAttribute('data-dev')));
        });

        backBtn?.addEventListener('click', () => {
          detailView.classList.add('hidden');
          listView.classList.remove('hidden');
          initIcons();
        });
      }

      // Tabs in detail
      function initTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const panels = {
          'unidades': document.getElementById('tab-unidades'),
          'compradores': document.getElementById('tab-compradores'),
          'pagos': document.getElementById('tab-pagos'),
          'documentos': document.getElementById('tab-documentos'),
          'riesgo': document.getElementById('tab-riesgo'),
        };

        tabButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');
            // Set active state
            document.querySelectorAll('.tab-btn').forEach(b => b.setAttribute('data-active', 'false'));
            btn.setAttribute('data-active', 'true');
            // Toggle panels
            Object.keys(panels).forEach(k => panels[k].classList.toggle('hidden', k !== target));
            initIcons();
          });
        });
      }

      // Modal: Vincular comprador
      function initLinkModal() {
        const openBtn = document.getElementById('openLinkModal');
        const modal = document.getElementById('linkModal');
        const closers = modal?.querySelectorAll('[data-close-modal]');

        function open() {
          modal.classList.remove('hidden');
          initIcons();
        }
        function close() {
          modal.classList.add('hidden');
        }

        openBtn?.addEventListener('click', open);
        closers?.forEach(c => c.addEventListener('click', close));
        modal?.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

        // Modal tabs
        const tabBtns = document.querySelectorAll('.linktab-btn');
        const tabPanels = {
          'existente': document.getElementById('linktab-existente'),
          'nuevo': document.getElementById('linktab-nuevo'),
        };
        tabBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const t = btn.getAttribute('data-linktab');
            document.querySelectorAll('.linktab-btn').forEach(b => b.setAttribute('data-active', 'false'));
            btn.setAttribute('data-active', 'true');
            Object.keys(tabPanels).forEach(k => tabPanels[k].classList.toggle('hidden', k !== t));
            initIcons();
          });
        });
      }

      // Filters (demo only)
      function initFilters() {
        const clear = document.getElementById('clearFilters');
        clear?.addEventListener('click', () => {
          document.getElementById('filterStatus').value = '';
          document.getElementById('filterCity').value = '';
          document.getElementById('filterRisk').value = '';
        });
      }

      // Desktop sidebar toggle (mobile)
      function initSidebarToggle() { /* No-op, desktop sidebar static */ }

      document.addEventListener('DOMContentLoaded', () => {
        initTheme();
        initIcons();
        initSearchShortcut();
        initDrawer();
        initSidebarToggle();
        initListDetail();
        initTabs();
        initLinkModal();
        initFilters();

        const themeToggle = document.getElementById('themeToggle');
        themeToggle?.addEventListener('click', () => {
          const isDark = document.body.classList.contains('dark');
          applyTheme(isDark ? 'light' : 'dark');
          initIcons();
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex min-h-screen">

<aside className="hidden lg:flex lg:flex-col w-72 shrink-0 border-r border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/40 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-neutral-950/30" id="sidebar">
<div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-neutral-200/70 dark:border-neutral-800">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm">
<span className="text-sm font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>IA</span>
</div>
<div className="flex flex-col">
<span className="text-[15px] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>INMO AML</span>
<span className="text-[11px] text-neutral-500 dark:text-neutral-400">B2B Suite</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-800" href="#">
<i className="h-5 w-5 text-neutral-500 dark:text-neutral-400" data-lucide="layout-dashboard"></i>
            Dashboard
          </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight bg-neutral-100 dark:bg-neutral-900/60 text-neutral-900 dark:text-neutral-100 ring-1 ring-neutral-200 dark:ring-neutral-800 hover:ring-neutral-300 dark:hover:ring-neutral-700" href="#">
<i className="h-5 w-5 text-neutral-600 dark:text-neutral-300" data-lucide="building-2"></i>
            Desarrollos
          </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-800" href="#">
<i className="h-5 w-5 text-neutral-500 dark:text-neutral-400" data-lucide="users"></i>
            Clientes
          </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-800" href="#">
<i className="h-5 w-5 text-neutral-500 dark:text-neutral-400" data-lucide="link-2"></i>
            Vinculación
          </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-800" href="#">
<i className="h-5 w-5 text-neutral-500 dark:text-neutral-400" data-lucide="folder-kanban"></i>
            Expedientes
          </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-800" href="#">
<i className="h-5 w-5 text-neutral-500 dark:text-neutral-400" data-lucide="credit-card"></i>
            Pagos/Abonos
          </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-800" href="#">
<i className="h-5 w-5 text-neutral-500 dark:text-neutral-400" data-lucide="bell"></i>
            Alertas
          </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-800" href="#">
<i className="h-5 w-5 text-neutral-500 dark:text-neutral-400" data-lucide="bar-chart-3"></i>
            Reportes
          </a>
</nav>
<div className="mt-auto px-4 py-3 border-t border-neutral-200/70 dark:border-neutral-800">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-500">Modo</span>

<button aria-label="Cambiar tema" className="group relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-200 dark:bg-neutral-800 ring-1 ring-inset ring-black/5 dark:ring-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950" id="themeToggle">
<span className="sr-only">Cambiar tema</span>
<span className="pointer-events-none absolute inset-y-0 left-0 flex w-full items-center justify-between px-1">
<i className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-300" data-lucide="moon"></i>
<i className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-300" data-lucide="sun"></i>
</span>
<span className="inline-block h-4.5 w-4.5 translate-x-1 rounded-full bg-white dark:bg-neutral-700 shadow transition-transform group-aria-pressed:translate-x-6" id="toggleThumb"></span>
</button>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col">

<header className="sticky top-0 z-30 bg-white/70 dark:bg-neutral-950/70 backdrop-blur border-b border-neutral-200/70 dark:border-neutral-800">
<div className="px-4 lg:px-6 py-3 flex items-center gap-3">
<button className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40" id="mobileMenuBtn">
<i className="h-5 w-5 text-neutral-700 dark:text-neutral-300" data-lucide="menu"></i>
</button>
<div className="hidden lg:flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm">
<span className="text-[11px] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>IA</span>
</div>
<span className="text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-400">Desarrollos</span>
</div>

<div className="flex-1">
<div className="relative max-w-xl">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500 dark:text-neutral-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-20 h-10 rounded-md bg-neutral-50 dark:bg-neutral-900/60 ring-1 ring-neutral-200 dark:ring-neutral-800 focus:ring-neutral-300 dark:focus:ring-neutral-700 outline-none text-sm placeholder:text-neutral-500 dark:placeholder:text-neutral-400" id="globalSearch" placeholder="Buscar clientes, alertas, operaciones..." type="text"/>
<div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400">
<kbd className="px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">/</kbd>
<span>para buscar</span>
</div>
</div>
</div>
<div className="ml-auto flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 text-sm">
<i className="h-5 w-5 text-neutral-600 dark:text-neutral-300" data-lucide="circle-help"></i>
<span className="hidden sm:inline">Ayuda</span>
</button>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 relative">
<i className="h-5 w-5 text-neutral-700 dark:text-neutral-300" data-lucide="bell"></i>
<span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-neutral-950"></span>
</button>
<div className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800">
<img alt="Usuario" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</header>

<main className="px-4 lg:px-6 py-6 space-y-6">

<section className="space-y-4" id="listView">

<div className="flex items-center justify-between">
<div>
<h1 className="text-[22px] sm:text-[24px] font-semibold tracking-tight">Listado de Desarrollos</h1>
<p className="text-sm text-neutral-600 dark:text-neutral-400">Gestiona estatus, riesgo y actividad de tus desarrollos inmobiliarios.</p>
</div>
</div>
<div className="rounded-lg ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-neutral-950 p-4">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

<div className="flex flex-col gap-1.5">
<label className="text-[12px] text-neutral-600 dark:text-neutral-400">Estatus de obra</label>
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500 dark:text-neutral-400" data-lucide="hard-hat"></i>
<select className="w-full appearance-none pl-10 pr-9 h-10 rounded-md bg-neutral-50 dark:bg-neutral-900/60 ring-1 ring-neutral-200 dark:ring-neutral-800 focus:ring-neutral-300 dark:focus:ring-neutral-700 text-sm" id="filterStatus">
<option value="">Todos</option>
<option value="planeacion">Planeación</option>
<option value="preventa">Preventa</option>
<option value="construccion">Construcción</option>
<option value="entregado">Entregado</option>
</select>
<i className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500 dark:text-neutral-400" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-[12px] text-neutral-600 dark:text-neutral-400">Ciudad</label>
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500 dark:text-neutral-400" data-lucide="map-pin"></i>
<select className="w-full appearance-none pl-10 pr-9 h-10 rounded-md bg-neutral-50 dark:bg-neutral-900/60 ring-1 ring-neutral-200 dark:ring-neutral-800 focus:ring-neutral-300 dark:focus:ring-neutral-700 text-sm" id="filterCity">
<option value="">Todas</option>
<option>CDMX</option>
<option>Monterrey</option>
<option>Guadalajara</option>
<option>Puebla</option>
</select>
<i className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500 dark:text-neutral-400" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-[12px] text-neutral-600 dark:text-neutral-400">Riesgo AML</label>
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500 dark:text-neutral-400" data-lucide="shield"></i>
<select className="w-full appearance-none pl-10 pr-9 h-10 rounded-md bg-neutral-50 dark:bg-neutral-900/60 ring-1 ring-neutral-200 dark:ring-neutral-800 focus:ring-neutral-300 dark:focus:ring-neutral-700 text-sm" id="filterRisk">
<option value="">Todos</option>
<option value="ninguno">Ninguno</option>
<option value="observacion">Observación</option>
<option value="investigacion">Investigación</option>
</select>
<i className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500 dark:text-neutral-400" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex items-end gap-2">
<button className="inline-flex items-center justify-center gap-2 h-10 px-3 rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 text-sm w-full sm:w-auto" id="applyFilters">
<i className="h-4.5 w-4.5" data-lucide="sliders"></i>
                    Aplicar
                  </button>
<button className="inline-flex items-center justify-center gap-2 h-10 px-3 rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 text-sm w-full sm:w-auto" id="clearFilters">
<i className="h-4.5 w-4.5" data-lucide="rotate-ccw"></i>
                    Limpiar
                  </button>
</div>
</div>
</div>

<div className="rounded-lg ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden">
<div className="px-4 py-3 border-b border-neutral-200/70 dark:border-neutral-800 flex items-center justify-between">
<div className="flex items-center gap-3">
<h2 className="text-[18px] font-semibold tracking-tight">Desarrollos</h2>
<span className="text-[12px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-900/60 ring-1 ring-neutral-200 dark:ring-neutral-800 text-neutral-700 dark:text-neutral-300">8 activos</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="text-[12px] uppercase tracking-wide text-neutral-500 dark:text-neutral-400 bg-neutral-50/60 dark:bg-neutral-950/40 border-b border-neutral-200/70 dark:border-neutral-800">
<tr>
<th className="px-4 py-3 whitespace-nowrap">ID</th>
<th className="px-4 py-3 whitespace-nowrap">Nombre del desarrollo</th>
<th className="px-4 py-3 whitespace-nowrap">Ciudad</th>
<th className="px-4 py-3 whitespace-nowrap">Unidades totales</th>
<th className="px-4 py-3 whitespace-nowrap">Unidades vendidas</th>
<th className="px-4 py-3 whitespace-nowrap">Monto total recaudado</th>
<th className="px-4 py-3 whitespace-nowrap">Riesgo AML</th>
<th className="px-4 py-3 whitespace-nowrap">Responsable</th>
<th className="px-4 py-3 whitespace-nowrap">Última actividad</th>
<th className="px-4 py-3 whitespace-nowrap"></th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-neutral-200/70 dark:divide-neutral-800">

<tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/40">
<td className="px-4 py-3 font-medium tracking-tight">DEV-00231</td>
<td className="px-4 py-3">Torre Norte</td>
<td className="px-4 py-3">Monterrey</td>
<td className="px-4 py-3">120</td>
<td className="px-4 py-3">85</td>
<td className="px-4 py-3">$245,000,000</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[12px] ring-1 ring-amber-200/60 bg-amber-50 dark:bg-amber-950/30 dark:ring-amber-900/40 text-amber-700 dark:text-amber-400">
                          Observación
                        </span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
</div>
<span>R. Ortega</span>
</div>
</td>
<td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">hoy 10:24</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 justify-end">
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 text-xs view-detail-btn" data-dev="DEV-00231">
<i className="h-4 w-4" data-lucide="eye"></i>
                            Ver detalle
                          </button>
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 text-xs">
<i className="h-4 w-4" data-lucide="pencil"></i>
                            Editar
                          </button>
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 text-xs">
<i className="h-4 w-4" data-lucide="archive"></i>
                            Archivar
                          </button>
</div>
</td>
</tr>

<tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/40">
<td className="px-4 py-3 font-medium tracking-tight">DEV-00218</td>
<td className="px-4 py-3">Parque Central</td>
<td className="px-4 py-3">CDMX</td>
<td className="px-4 py-3">300</td>
<td className="px-4 py-3">240</td>
<td className="px-4 py-3">$890,500,000</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[12px] ring-1 ring-neutral-200/70 bg-neutral-50 dark:bg-neutral-900/40 dark:ring-neutral-800 text-neutral-700 dark:text-neutral-300">
                          Ninguno
                        </span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
</div>
<span>L. Andrade</span>
</div>
</td>
<td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">ayer 17:03</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 justify-end">
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 text-xs view-detail-btn" data-dev="DEV-00218">
<i className="h-4 w-4" data-lucide="eye"></i>
                            Ver detalle
                          </button>
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 text-xs">
<i className="h-4 w-4" data-lucide="pencil"></i>
                            Editar
                          </button>
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 text-xs">
<i className="h-4 w-4" data-lucide="archive"></i>
                            Archivar
                          </button>
</div>
</td>
</tr>

<tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/40">
<td className="px-4 py-3 font-medium tracking-tight">DEV-00199</td>
<td className="px-4 py-3">Alto Bosque</td>
<td className="px-4 py-3">Guadalajara</td>
<td className="px-4 py-3">80</td>
<td className="px-4 py-3">79</td>
<td className="px-4 py-3">$155,800,000</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[12px] ring-1 ring-rose-200/60 bg-rose-50 dark:bg-rose-950/30 dark:ring-rose-900/40 text-rose-700 dark:text-rose-400">
                          Investigación
                        </span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
</div>
<span>M. Rojas</span>
</div>
</td>
<td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">12 feb 09:10</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 justify-end">
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 text-xs view-detail-btn" data-dev="DEV-00199">
<i className="h-4 w-4" data-lucide="eye"></i>
                            Ver detalle
                          </button>
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 text-xs">
<i className="h-4 w-4" data-lucide="pencil"></i>
                            Editar
                          </button>
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 text-xs">
<i className="h-4 w-4" data-lucide="archive"></i>
                            Archivar
                          </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-4 py-3 border-t border-neutral-200/70 dark:border-neutral-800 flex items-center justify-between">
<span className="text-xs text-neutral-600 dark:text-neutral-400">Mostrando 1–3 de 8</span>
<div className="flex items-center gap-1.5">
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40">
<i className="h-4.5 w-4.5" data-lucide="chevron-left"></i>
</button>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-100 dark:bg-neutral-900/60">1</button>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40">2</button>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40">
<i className="h-4.5 w-4.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="space-y-4 hidden" id="detailView">

<div className="rounded-lg ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-neutral-950">
<div className="px-4 py-3 border-b border-neutral-200/70 dark:border-neutral-800 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40" id="backToList">
<i className="h-4.5 w-4.5" data-lucide="arrow-left"></i>
</button>
<div>
<h2 className="text-[18px] font-semibold tracking-tight" id="devName">Torre Norte</h2>
<div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
<div className="inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span id="devLocation">Monterrey, NL</span>
</div>
<span className="text-neutral-300 dark:text-neutral-700">•</span>
<div className="inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="hard-hat"></i>
<span id="devStatus">Construcción</span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[12px] ring-1 ring-amber-200/60 bg-amber-50 dark:bg-amber-950/30 dark:ring-amber-900/40 text-amber-700 dark:text-amber-400" id="devRiskBadge">
                    Observación
                  </span>
</div>
</div>

<div className="px-2 sm:px-4">
<div className="flex items-center gap-1 overflow-x-auto">
<button className="tab-btn inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 ring-1 ring-transparent data-[active=true]:ring-neutral-200 data-[active=true]:dark:ring-neutral-800 data-[active=true]:bg-neutral-100/70 data-[active=true]:dark:bg-neutral-900/40" data-active="true" data-tab="unidades">
<i className="h-4 w-4" data-lucide="grid"></i>
                    Unidades
                  </button>
<button className="tab-btn inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 ring-1 ring-transparent" data-tab="compradores">
<i className="h-4 w-4" data-lucide="users"></i>
                    Compradores vinculados
                  </button>
<button className="tab-btn inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 ring-1 ring-transparent" data-tab="pagos">
<i className="h-4 w-4" data-lucide="credit-card"></i>
                    Pagos/Abonos
                  </button>
<button className="tab-btn inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 ring-1 ring-transparent" data-tab="documentos">
<i className="h-4 w-4" data-lucide="folder"></i>
                    Documentos del proyecto
                  </button>
<button className="tab-btn inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 ring-1 ring-transparent" data-tab="riesgo">
<i className="h-4 w-4" data-lucide="shield-alert"></i>
                    Riesgo
                  </button>
</div>
</div>

<div className="p-4 space-y-4">

<div className="tab-panel space-y-3" id="tab-unidades">
<div className="flex items-center justify-between">
<h3 className="text-[16px] font-semibold tracking-tight">Unidades</h3>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 text-sm" id="openLinkModal">
<i className="h-4.5 w-4.5" data-lucide="link-2"></i>
                      Vincular comprador
                    </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">

<div className="rounded-lg ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-neutral-950 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight">Unidad 12B</span>
<span className="text-xs px-1.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-900/60 ring-1 ring-neutral-200 dark:ring-neutral-800 text-neutral-700 dark:text-neutral-300">Depto</span>
</div>
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[12px] ring-1 ring-emerald-200/60 bg-emerald-50 dark:bg-emerald-950/30 dark:ring-emerald-900/40 text-emerald-700 dark:text-emerald-400">
                          Disponible
                        </span>
</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-sm text-neutral-600 dark:text-neutral-400">Precio</span>
<span className="text-sm font-medium tracking-tight">$3,250,000</span>
</div>
<div className="mt-2 flex items-center gap-2 text-sm">
<i className="h-4 w-4 text-neutral-500" data-lucide="user"></i>
<span className="text-neutral-600 dark:text-neutral-400">Cliente vinculado: —</span>
</div>
</div>

<div className="rounded-lg ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-neutral-950 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight">Unidad 8A</span>
<span className="text-xs px-1.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-900/60 ring-1 ring-neutral-200 dark:ring-neutral-800 text-neutral-700 dark:text-neutral-300">Loft</span>
</div>
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[12px] ring-1 ring-amber-200/60 bg-amber-50 dark:bg-amber-950/30 dark:ring-amber-900/40 text-amber-700 dark:text-amber-400">
                          Reservado
                        </span>
</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-sm text-neutral-600 dark:text-neutral-400">Precio</span>
<span className="text-sm font-medium tracking-tight">$2,450,000</span>
</div>
<div className="mt-2 flex items-center gap-2 text-sm">
<i className="h-4 w-4 text-neutral-500" data-lucide="user"></i>
<span className="text-neutral-600 dark:text-neutral-400">Cliente vinculado: M. Rivas</span>
</div>
</div>

<div className="rounded-lg ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-neutral-950 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight">Unidad 21C</span>
<span className="text-xs px-1.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-900/60 ring-1 ring-neutral-200 dark:ring-neutral-800 text-neutral-700 dark:text-neutral-300">PH</span>
</div>
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[12px] ring-1 ring-rose-200/60 bg-rose-50 dark:bg-rose-950/30 dark:ring-rose-900/40 text-rose-700 dark:text-rose-400">
                          Vendido
                        </span>
</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-sm text-neutral-600 dark:text-neutral-400">Precio</span>
<span className="text-sm font-medium tracking-tight">$5,600,000</span>
</div>
<div className="mt-2 flex items-center gap-2 text-sm">
<i className="h-4 w-4 text-neutral-500" data-lucide="user"></i>
<span className="text-neutral-600 dark:text-neutral-400">Cliente vinculado: G. Salas</span>
</div>
</div>
</div>
</div>

<div className="tab-panel hidden" id="tab-compradores">
<div className="rounded-md border border-dashed border-neutral-200 dark:border-neutral-800 p-4">
<div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
<i className="h-4.5 w-4.5" data-lucide="users"></i>
<p className="text-sm">Aquí verás la lista de compradores vinculados a este desarrollo.</p>
</div>
</div>
</div>

<div className="tab-panel hidden" id="tab-pagos">
<div className="rounded-md border border-dashed border-neutral-200 dark:border-neutral-800 p-4">
<div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
<i className="h-4.5 w-4.5" data-lucide="credit-card"></i>
<p className="text-sm">Resumen de pagos y abonos por unidades y compradores.</p>
</div>
</div>
</div>

<div className="tab-panel hidden" id="tab-documentos">
<div className="rounded-md border border-dashed border-neutral-200 dark:border-neutral-800 p-4">
<div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
<i className="h-4.5 w-4.5" data-lucide="folder"></i>
<p className="text-sm">Documentación del proyecto: permisos, planos, contratos, etc.</p>
</div>
</div>
</div>

<div className="tab-panel hidden" id="tab-riesgo">
<div className="rounded-md border border-dashed border-neutral-200 dark:border-neutral-800 p-4">
<div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
<i className="h-4.5 w-4.5" data-lucide="shield-alert"></i>
<p className="text-sm">Hallazgos y seguimiento de riesgo AML a nivel desarrollo.</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>
</div>

<div className="fixed inset-0 bg-black/40 z-40 hidden" id="backdrop"></div>
<aside className="fixed z-50 top-0 left-0 h-full w-80 bg-white dark:bg-neutral-950 border-r border-neutral-200/70 dark:border-neutral-800 shadow-xl -translate-x-full transition-transform" id="drawer">
<div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-neutral-200/70 dark:border-neutral-800">
<div className="flex items-center gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm">
<span className="text-sm font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>IA</span>
</div>
<div className="flex flex-col">
<span className="text-[15px] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>INMO AML</span>
<span className="text-[11px] text-neutral-500 dark:text-neutral-400">B2B Suite</span>
</div>
</div>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40" id="drawerClose">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<nav className="px-3 py-4 space-y-1">
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-800" href="#">
<i className="h-5 w-5" data-lucide="layout-dashboard"></i>
          Dashboard
        </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight bg-neutral-100 dark:bg-neutral-900/60 ring-1 ring-neutral-200 dark:ring-neutral-800" href="#">
<i className="h-5 w-5" data-lucide="building-2"></i>
          Desarrollos
        </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-800" href="#">
<i className="h-5 w-5" data-lucide="users"></i>
          Clientes
        </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-800" href="#">
<i className="h-5 w-5" data-lucide="link-2"></i>
          Vinculación
        </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-800" href="#">
<i className="h-5 w-5" data-lucide="folder-kanban"></i>
          Expedientes
        </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-800" href="#">
<i className="h-5 w-5" data-lucide="credit-card"></i>
          Pagos/Abonos
        </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-800" href="#">
<i className="h-5 w-5" data-lucide="bell"></i>
          Alertas
        </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium tracking-tight hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-800" href="#">
<i className="h-5 w-5" data-lucide="bar-chart-3"></i>
          Reportes
        </a>
</nav>
</aside>

<div className="fixed inset-0 z-[60] hidden" id="linkModal">
<div className="absolute inset-0 bg-black/40" data-close-modal=""></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-lg rounded-lg ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-neutral-950 shadow-xl overflow-hidden">
<div className="px-4 py-3 border-b border-neutral-200/70 dark:border-neutral-800 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="link-2"></i>
<h3 className="text-[16px] font-semibold tracking-tight">Vincular comprador</h3>
</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40" data-close-modal="">
<i className="h-4.5 w-4.5" data-lucide="x"></i>
</button>
</div>

<div className="px-4 pt-3">
<div className="flex items-center gap-1">
<button className="linktab-btn inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 ring-1 ring-transparent data-[active=true]:ring-neutral-200 data-[active=true]:dark:ring-neutral-800 data-[active=true]:bg-neutral-100/70 data-[active=true]:dark:bg-neutral-900/40" data-active="true" data-linktab="existente">
<i className="h-4 w-4" data-lucide="user-search"></i>
                Existente
              </button>
<button className="linktab-btn inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 ring-1 ring-transparent" data-linktab="nuevo">
<i className="h-4 w-4" data-lucide="user-plus"></i>
                Crear nuevo
              </button>
</div>
</div>

<div className="p-4 space-y-3">

<div className="linktab-panel space-y-3" id="linktab-existente">
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500 dark:text-neutral-400" data-lucide="search"></i>
<input className="w-full pl-10 h-10 rounded-md bg-neutral-50 dark:bg-neutral-900/60 ring-1 ring-neutral-200 dark:ring-neutral-800 focus:ring-neutral-300 dark:focus:ring-neutral-700 text-sm" placeholder="Buscar cliente por nombre, RFC, email..." type="text"/>
</div>
<div className="max-h-56 overflow-auto rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 divide-y divide-neutral-200/70 dark:divide-neutral-800">
<button className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40">
<span className="text-sm">María Castillo</span>
<span className="text-[12px] text-neutral-500">RFC: MAC123456AB1</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40">
<span className="text-sm">Grupo Rivas S.A. de C.V.</span>
<span className="text-[12px] text-neutral-500">RFC: GRI8001019Q8</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40">
<span className="text-sm">Hemera Capital</span>
<span className="text-[12px] text-neutral-500">RFC: HEM041231K90</span>
</button>
</div>
</div>

<div className="linktab-panel hidden space-y-3" id="linktab-nuevo">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex flex-col gap-1.5">
<label className="text-[12px] text-neutral-600 dark:text-neutral-400">Tipo</label>
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500 dark:text-neutral-400" data-lucide="user"></i>
<select className="w-full appearance-none pl-10 pr-9 h-10 rounded-md bg-neutral-50 dark:bg-neutral-900/60 ring-1 ring-neutral-200 dark:ring-neutral-800 focus:ring-neutral-300 dark:focus:ring-neutral-700 text-sm">
<option>Persona</option>
<option>Empresa</option>
</select>
<i className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500 dark:text-neutral-400" data-lucide="chevron-down"></i>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[12px] text-neutral-600 dark:text-neutral-400">RFC</label>
<input className="h-10 rounded-md bg-neutral-50 dark:bg-neutral-900/60 ring-1 ring-neutral-200 dark:ring-neutral-800 focus:ring-neutral-300 dark:focus:ring-neutral-700 text-sm px-3" placeholder="RFC" type="text"/>
</div>
<div className="sm:col-span-2 flex flex-col gap-1.5">
<label className="text-[12px] text-neutral-600 dark:text-neutral-400">Nombre/Razón social</label>
<input className="h-10 rounded-md bg-neutral-50 dark:bg-neutral-900/60 ring-1 ring-neutral-200 dark:ring-neutral-800 focus:ring-neutral-300 dark:focus:ring-neutral-700 text-sm px-3" placeholder="Ej. Juan Pérez o Empresa S.A. de C.V." type="text"/>
</div>
</div>
<div className="rounded-md border border-dashed border-neutral-200 dark:border-neutral-800 p-3">
<p className="text-sm text-neutral-600 dark:text-neutral-400">Tras crear el cliente podrás completar su expediente AML.</p>
</div>
</div>
</div>
<div className="px-4 py-3 border-t border-neutral-200/70 dark:border-neutral-800 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 text-sm" data-close-modal="">
              Cancelar
            </button>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-100 dark:bg-neutral-900/60 text-sm">
              Vincular
            </button>
</div>
</div>
</div>
</div>



    </>
  );
}
