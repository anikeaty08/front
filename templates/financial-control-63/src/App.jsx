import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons({ attrs: { strokeWidth: 1.5 } });

    const loginOverlay = document.getElementById('login-overlay');
    const appWrapper = document.getElementById('app-wrapper');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const logoutHeader = document.getElementById('logout-btn-header');
    const logoutSidebar = document.getElementById('logout-btn-sidebar');
    const togglePasswordBtn = document.getElementById('toggle-password');
    const loginPassword = document.getElementById('login-password');

    function setLoggedIn(state) {
      if (state) {
        loginOverlay.style.display = 'none';
        appWrapper.style.display = 'flex';
      } else {
        loginOverlay.style.display = 'flex';
        appWrapper.style.display = 'none';
      }
    }

    const savedSession = window.localStorage.getItem('fincorp-demo-session');
    if (savedSession === '1') {
      setLoggedIn(true);
    }

    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const password = loginPassword.value.trim();
      const remember = document.getElementById('remember-me').checked;

      if (!email || password !== 'demo') {
        loginError.classList.remove('hidden');
        return;
      }
      loginError.classList.add('hidden');
      if (remember) {
        window.localStorage.setItem('fincorp-demo-session', '1');
      }
      setLoggedIn(true);
    });

    function logout() {
      window.localStorage.removeItem('fincorp-demo-session');
      setLoggedIn(false);
    }

    if (logoutHeader) logoutHeader.addEventListener('click', logout);
    if (logoutSidebar) logoutSidebar.addEventListener('click', logout);

    togglePasswordBtn.addEventListener('click', function () {
      const isPassword = loginPassword.type === 'password';
      loginPassword.type = isPassword ? 'text' : 'password';
      this.innerHTML = '';
      const iconName = isPassword ? 'eye-off' : 'eye';
      const icon = lucide.createElement(iconName, { class: 'h-4 w-4' });
      this.appendChild(icon);
    });

    const policyToggle = document.getElementById('toggle-policy');
    const policyHelper = document.getElementById('policy-helper');
    let policyEnabled = false;
    policyToggle.addEventListener('click', function () {
      policyEnabled = !policyEnabled;
      const knob = this.querySelector('span');
      if (policyEnabled) {
        this.classList.remove('bg-gray-200');
        this.classList.add('bg-gray-900');
        knob.style.transform = 'translateX(16px)';
        policyHelper.textContent = 'Activado: se permiten pequeños gastos sin recibo.';
      } else {
        this.classList.add('bg-gray-200');
        this.classList.remove('bg-gray-900');
        knob.style.transform = 'translateX(0px)';
        policyHelper.textContent = 'Desactivado para mayor control.';
      }
    });

    const statusFilter = document.getElementById('status-filter');
    const filterBadge = document.getElementById('filter-badge');
    const searchInput = document.getElementById('search-input');
    const tableSummary = document.getElementById('table-summary');
    const transactionsTable = document.getElementById('transactions-table');
    const rows = Array.from(transactionsTable.querySelectorAll('tbody tr'));

    function applyFilters() {
      const statusValue = statusFilter.value;
      const searchValue = (searchInput ? searchInput.value : '').toLowerCase();
      let visibleCount = 0;

      rows.forEach(row => {
        const rowStatus = row.getAttribute('data-status');
        const text = row.textContent.toLowerCase();
        const matchStatus = statusValue === 'Todos' || rowStatus === statusValue;
        const matchSearch = !searchValue || text.includes(searchValue);
        const visible = matchStatus && matchSearch;
        row.style.display = visible ? '' : 'none';
        if (visible) visibleCount++;
      });

      const total = rows.length;
      tableSummary.textContent = `Mostrando ${visibleCount} de ${total} transacciones`;
      if (statusValue !== 'Todos' || searchValue) {
        filterBadge.classList.remove('hidden');
        filterBadge.textContent = `Filtro: ${statusValue}${searchValue ? ' · búsqueda activa' : ''}`;
      } else {
        filterBadge.classList.add('hidden');
      }
    }

    statusFilter.addEventListener('change', applyFilters);
    if (searchInput) searchInput.addEventListener('input', applyFilters);

    const newExpenseBtn = document.getElementById('new-expense-btn');
    const expenseModal = document.getElementById('new-expense-modal');
    const closeExpenseModal = document.getElementById('close-expense-modal');
    const cancelExpense = document.getElementById('cancel-expense');
    const newExpenseForm = document.getElementById('new-expense-form');
    const expenseError = document.getElementById('expense-error');

    function openExpenseModal() {
      expenseModal.classList.remove('hidden');
      expenseModal.classList.add('flex');
    }

    function closeExpense() {
      expenseModal.classList.add('hidden');
      expenseModal.classList.remove('flex');
      newExpenseForm.reset();
      expenseError.classList.add('hidden');
    }

    newExpenseBtn.addEventListener('click', openExpenseModal);
    closeExpenseModal.addEventListener('click', closeExpense);
    cancelExpense.addEventListener('click', closeExpense);

    newExpenseForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const concept = document.getElementById('expense-concept').value.trim();
      const amount = parseFloat(document.getElementById('expense-amount').value);
      const category = document.getElementById('expense-category').value;
      const owner = document.getElementById('expense-owner').value.trim();
      const status = document.getElementById('expense-status').value;

      if (!concept || !owner || !category || !amount || amount <= 0) {
        expenseError.classList.remove('hidden');
        return;
      }
      expenseError.classList.add('hidden');

      const tbody = transactionsTable.querySelector('tbody');
      const tr = document.createElement('tr');
      tr.className = 'group hover:bg-gray-50/50 transition-colors';
      tr.setAttribute('data-status', status);

      let statusClasses = '';
      let statusBg = '';
      let statusRing = '';
      let statusTextColor = '';
      if (status === 'Pendiente') {
        statusBg = 'bg-yellow-50';
        statusRing = 'ring-yellow-600/20';
        statusTextColor = 'text-yellow-700';
      } else if (status === 'Aprobado') {
        statusBg = 'bg-green-50';
        statusRing = 'ring-green-600/20';
        statusTextColor = 'text-green-700';
      }

      tr.innerHTML = `
        <td class="px-4 py-3">
          <p class="font-medium text-gray-900">${concept}</p>
          <p class="text-xs text-gray-500">Registrado manualmente</p>
        </td>
        <td class="px-4 py-3">
          <span class="inline-flex items-center gap-1.5 rounded border border-gray-200 px-1.5 py-0.5 text-xs text-gray-600">
            <i data-lucide="tag" class="h-3 w-3"></i> ${category}
          </span>
        </td>
        <td class="px-4 py-3">
          <div class="flex items-center gap-2">
            <div class="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-[10px] font-medium text-gray-600">
              ${owner.charAt(0) || '?'}
            </div>
            <span class="text-xs text-gray-600">${owner}</span>
          </div>
        </td>
        <td class="px-4 py-3 text-xs text-gray-500">Hoy</td>
        <td class="px-4 py-3">
          <span class="inline-flex items-center gap-1 rounded-full ${statusBg} px-2 py-0.5 text-xs font-medium ${statusTextColor} ring-1 ring-inset ${statusRing}">
            ${status}
          </span>
        </td>
        <td class="px-4 py-3 text-right font-medium text-gray-900">$${amount.toFixed(2)}</td>
        <td class="px-4 py-3 text-right">
          <button class="text-gray-400 hover:text-gray-900"><i data-lucide="more-horizontal" class="h-4 w-4"></i></button>
        </td>
      `;
      tbody.prepend(tr);
      lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
      rows.push(tr);
      applyFilters();
      closeExpense();
    });

    expenseModal.addEventListener('click', function (e) {
      if (e.target === expenseModal) {
        closeExpense();
      }
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const aside = document.querySelector('aside');

    mobileMenuBtn.addEventListener('click', () => {
      if (aside.classList.contains('hidden')) {
        aside.classList.remove('hidden');
        aside.classList.add('absolute', 'z-40', 'h-full');
      } else {
        aside.classList.add('hidden');
        aside.classList.remove('absolute', 'z-40', 'h-full');
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm" id="login-overlay">
<div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-xl">
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded bg-gray-900 text-white">
<span className="text-xs font-semibold tracking-tight">F</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-gray-900">FINCORP</span>
<span className="text-xs text-gray-500">Acceso a panel financiero</span>
</div>
</div>
<span className="text-[11px] text-gray-400">Demo</span>
</div>
<form className="space-y-4" id="login-form">
<div>
<label className="mb-1 block text-xs font-medium text-gray-700">Correo corporativo</label>
<input autocomplete="username" className="h-9 w-full rounded border border-gray-200 bg-white px-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:ring-0 transition-all" id="login-email" placeholder="nombre.apellido@empresa.com" type="email"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-gray-700">Contraseña</label>
<div className="relative">
<input autocomplete="current-password" className="h-9 w-full rounded border border-gray-200 bg-white px-3 pr-9 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:ring-0 transition-all" id="login-password" placeholder="••••••••" type="password"/>
<button className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400 hover:text-gray-700" id="toggle-password" type="button">
<i className="h-4 w-4" data-lucide="eye"></i>
</button>
</div>
<div className="mt-1 flex items-center justify-between">
<label className="flex items-center gap-2 text-[11px] text-gray-500 cursor-pointer">
<input className="h-2.5 w-2.5 rounded border-gray-300 text-gray-900 focus:ring-0" id="remember-me" type="checkbox"/>
<span>Recordar sesión</span>
</label>
<button className="text-[11px] text-gray-500 hover:text-gray-700 hover:underline" type="button">
              ¿Olvidaste tu contraseña?
            </button>
</div>
</div>
<div className="hidden rounded border border-red-200 bg-red-50 px-3 py-2 text-[11px] text-red-700" id="login-error">
          Credenciales inválidas. Usa cualquier correo y la contraseña <span className="font-medium">demo</span>.
        </div>
<button className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-gray-800" type="submit">
<i className="h-4 w-4" data-lucide="log-in"></i>
          Ingresar al panel
        </button>
<p className="text-center text-[11px] text-gray-400">
          Al continuar aceptas las políticas de uso y seguridad de la organización.
        </p>
</form>
</div>
</div>

<div className="flex h-screen overflow-hidden" id="app-wrapper" style={{display: 'none'}}>

<aside className="hidden w-64 flex-col border-r border-gray-200 bg-white md:flex">
<div className="flex h-14 items-center border-b border-gray-200 px-6">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-gray-900 text-white">
<span className="text-xs font-semibold">F</span>
</div>
<span className="text-sm font-semibold tracking-tight text-gray-900">FINCORP</span>
</div>
</div>
<div className="flex flex-1 flex-col justify-between overflow-y-auto p-4">
<nav className="space-y-1">
<a className="group flex items-center gap-3 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900" href="#">
<i className="h-4 w-4 text-gray-500 group-hover:text-gray-900" data-lucide="layout-dashboard"></i>
            Dashboard
          </a>
<a className="group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-gray-400 group-hover:text-gray-900" data-lucide="receipt"></i>
              Gastos
            </div>
<span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">12</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="h-4 w-4 text-gray-400 group-hover:text-gray-900" data-lucide="credit-card"></i>
            Tarjetas Corp.
          </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="h-4 w-4 text-gray-400 group-hover:text-gray-900" data-lucide="users"></i>
            Usuarios y Roles
          </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="h-4 w-4 text-gray-400 group-hover:text-gray-900" data-lucide="file-bar-chart"></i>
            Reportes
          </a>
</nav>
<div className="space-y-1 border-t border-gray-200 pt-4">
<div className="px-3 pb-2">
<p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Configuración</p>
</div>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="h-4 w-4 text-gray-400 group-hover:text-gray-900" data-lucide="settings"></i>
            General
          </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="h-4 w-4 text-gray-400 group-hover:text-gray-900" data-lucide="shield"></i>
            Seguridad
          </a>
</div>
</div>
<div className="border-t border-gray-200 p-4">
<div className="flex items-center justify-between gap-3 rounded-md p-2 hover:bg-gray-50 cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<img alt="Admin" className="h-8 w-8 rounded-full bg-gray-200 object-cover" src="https://ui-avatars.com/api/?name=Ana+R&amp;background=random&amp;color=fff"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Ana Rodriguez</span>
<span className="text-xs text-gray-500">Admin Global</span>
</div>
</div>
<button className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-900" id="logout-btn-sidebar">
<i className="h-4 w-4" data-lucide="log-out"></i>
</button>
</div>
</div>
</aside>

<div className="flex flex-1 flex-col overflow-hidden">

<header className="glass-effect sticky top-0 z-10 flex h-14 items-center justify-between border-b border-gray-200 px-6">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500" id="mobile-menu-btn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
<nav className="hidden items-center gap-2 text-sm text-gray-500 sm:flex">
<span className="hover:text-gray-900 cursor-pointer transition-colors">Inicio</span>
<i className="h-3 w-3 text-gray-400" data-lucide="chevron-right"></i>
<span className="font-medium text-gray-900">Finanzas</span>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<i className="absolute left-2.5 top-1.5 h-4 w-4 text-gray-400" data-lucide="search"></i>
<input className="h-8 w-64 rounded border border-gray-200 bg-white pl-9 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:ring-0 transition-all" id="search-input" placeholder="Buscar transacciones..." type="text"/>
</div>
<button className="relative rounded-md p-1.5 text-gray-500 hover:bg-gray-100 transition-colors">
<i className="h-4 w-4" data-lucide="bell"></i>
<span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500"></span>
</button>
<button className="hidden rounded-md border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50 sm:inline-flex items-center gap-1" id="logout-btn-header">
<i className="h-3.5 w-3.5" data-lucide="log-out"></i>
            Salir
          </button>
</div>
</header>

<main className="flex-1 overflow-y-auto bg-white p-6">

<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Resumen Financiero</h1>
<p className="mt-1 text-base text-gray-500">Visión general de gastos, aprobaciones y presupuesto mensual.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
<i className="h-3.5 w-3.5" data-lucide="download"></i>
              Exportar
            </button>
<button className="flex items-center gap-2 rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-800 transition-all shadow-sm" id="new-expense-btn">
<i className="h-3.5 w-3.5" data-lucide="plus"></i>
              Nuevo Gasto
            </button>
</div>
</div>

<div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

<div className="rounded-lg border border-gray-200 p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] bg-white">
<div className="mb-2 flex items-center justify-between">
<p className="text-xs font-medium text-gray-500">Gastos Totales (Mes)</p>
<i className="h-4 w-4 text-green-600" data-lucide="trending-up"></i>
</div>
<p className="text-2xl font-semibold tracking-tight text-gray-900">$24,500.00</p>
<div className="mt-2 flex items-center gap-1 text-xs">
<span className="font-medium text-green-600">+12%</span>
<span className="text-gray-400">vs mes anterior</span>
</div>
</div>

<div className="rounded-lg border border-gray-200 p-5 shadow-sm bg-white">
<div className="mb-2 flex items-center justify-between">
<p className="text-xs font-medium text-gray-500">Pendiente Aprobación</p>
<i className="h-4 w-4 text-yellow-600" data-lucide="clock"></i>
</div>
<p className="text-2xl font-semibold tracking-tight text-gray-900">$1,250.00</p>
<div className="mt-2 flex items-center gap-1 text-xs">
<span className="font-medium text-yellow-600">5 solicitudes</span>
<span className="text-gray-400">requieren acción</span>
</div>
</div>

<div className="rounded-lg border border-gray-200 p-5 shadow-sm bg-white">
<div className="mb-2 flex items-center justify-between">
<p className="text-xs font-medium text-gray-500">Presupuesto Disponible</p>
<i className="h-4 w-4 text-gray-400" data-lucide="pie-chart"></i>
</div>
<p className="text-2xl font-semibold tracking-tight text-gray-900">$5,500.00</p>
<div className="mt-2 w-full rounded-full bg-gray-100 h-1.5">
<div className="h-1.5 rounded-full bg-gray-900" style={{width: '82%'}}></div>
</div>
<p className="mt-1.5 text-xs text-gray-400">82% utilizado</p>
</div>

<div className="rounded-lg border border-gray-200 p-5 shadow-sm bg-white">
<div className="mb-2 flex items-center justify-between">
<p className="text-xs font-medium text-gray-500">Usuarios Activos</p>
<i className="h-4 w-4 text-gray-400" data-lucide="users"></i>
</div>
<p className="text-2xl font-semibold tracking-tight text-gray-900">18</p>
<div className="mt-2 flex -space-x-2 overflow-hidden">
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=John+D&amp;background=e5e7eb&amp;color=374151"/>
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=Sarah+C&amp;background=e5e7eb&amp;color=374151"/>
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=Mike+T&amp;background=e5e7eb&amp;color=374151"/>
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white">
<span className="text-[10px] font-medium text-gray-500">+2</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

<div className="col-span-1 lg:col-span-2">
<div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<h2 className="text-base font-semibold text-gray-900">Transacciones Recientes</h2>
<div className="flex flex-wrap items-center gap-2">
<div className="flex items-center gap-2 rounded border border-gray-200 bg-white px-2 py-1">
<span className="text-xs text-gray-500">Filtrar:</span>
<select className="bg-transparent text-xs font-medium text-gray-900 outline-none" id="status-filter">
<option value="Todos">Todos</option>
<option value="Pendiente">Pendientes</option>
<option value="Aprobado">Aprobados</option>
<option value="Reembolsado">Reembolsados</option>
<option value="Rechazado">Rechazados</option>
</select>
</div>
<span className="hidden rounded-full bg-gray-100 px-2 py-0.5 text-[11px] text-gray-600" id="filter-badge">
                  Filtro activo
                </span>
</div>
</div>
<div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
<table className="w-full min-w-full table-auto text-left text-sm" id="transactions-table">
<thead className="bg-gray-50/50 text-xs font-medium text-gray-500">
<tr>
<th className="px-4 py-3 font-medium">Concepto</th>
<th className="px-4 py-3 font-medium">Categoría</th>
<th className="px-4 py-3 font-medium">Solicitante</th>
<th className="px-4 py-3 font-medium">Fecha</th>
<th className="px-4 py-3 font-medium">Estado</th>
<th className="px-4 py-3 font-medium text-right">Monto</th>
<th className="px-4 py-3 font-medium"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 bg-white">

<tr className="group hover:bg-gray-50/50 transition-colors" data-status="Aprobado">
<td className="px-4 py-3">
<p className="font-medium text-gray-900">Licencia Software CRM</p>
<p className="text-xs text-gray-500">Suscripción Anual</p>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 rounded border border-gray-200 px-1.5 py-0.5 text-xs text-gray-600">
<i className="h-3 w-3" data-lucide="monitor"></i> Software
                      </span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<img alt="" className="h-5 w-5 rounded-full" src="https://ui-avatars.com/api/?name=Carlos+M&amp;background=random"/>
<span className="text-xs text-gray-600">Carlos M.</span>
</div>
</td>
<td className="px-4 py-3 text-xs text-gray-500">Oct 24, 2023</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        Aprobado
                      </span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">$1,200.00</td>
<td className="px-4 py-3 text-right">
<button className="text-gray-400 hover:text-gray-900"><i className="h-4 w-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors" data-status="Pendiente">
<td className="px-4 py-3">
<p className="font-medium text-gray-900">Cena con Clientes</p>
<p className="text-xs text-gray-500">Proyecto Alpha</p>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 rounded border border-gray-200 px-1.5 py-0.5 text-xs text-gray-600">
<i className="h-3 w-3" data-lucide="coffee"></i> Viáticos
                      </span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<img alt="" className="h-5 w-5 rounded-full" src="https://ui-avatars.com/api/?name=Sofia+L&amp;background=random"/>
<span className="text-xs text-gray-600">Sofia L.</span>
</div>
</td>
<td className="px-4 py-3 text-xs text-gray-500">Oct 23, 2023</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-0.5 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                        Pendiente
                      </span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">$185.50</td>
<td className="px-4 py-3 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="rounded p-1 text-green-600 hover:bg-green-50"><i className="h-3.5 w-3.5" data-lucide="check"></i></button>
<button className="rounded p-1 text-red-600 hover:bg-red-50"><i className="h-3.5 w-3.5" data-lucide="x"></i></button>
</div>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors" data-status="Reembolsado">
<td className="px-4 py-3">
<p className="font-medium text-gray-900">Vuelo a NY</p>
<p className="text-xs text-gray-500">Conferencia Tech</p>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 rounded border border-gray-200 px-1.5 py-0.5 text-xs text-gray-600">
<i className="h-3 w-3" data-lucide="plane"></i> Viajes
                      </span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<img alt="" className="h-5 w-5 rounded-full" src="https://ui-avatars.com/api/?name=Jorge+R&amp;background=random"/>
<span className="text-xs text-gray-600">Jorge R.</span>
</div>
</td>
<td className="px-4 py-3 text-xs text-gray-500">Oct 22, 2023</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        Reembolsado
                      </span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">$850.00</td>
<td className="px-4 py-3 text-right">
<button className="text-gray-400 hover:text-gray-900"><i className="h-4 w-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors" data-status="Rechazado">
<td className="px-4 py-3">
<p className="font-medium text-gray-900">Equipo de Oficina</p>
<p className="text-xs text-gray-500">Monitores y Sillas</p>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 rounded border border-gray-200 px-1.5 py-0.5 text-xs text-gray-600">
<i className="h-3 w-3" data-lucide="briefcase"></i> Oficina
                      </span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<img alt="" className="h-5 w-5 rounded-full" src="https://ui-avatars.com/api/?name=Ana+R&amp;background=random"/>
<span className="text-xs text-gray-600">Ana R.</span>
</div>
</td>
<td className="px-4 py-3 text-xs text-gray-500">Oct 21, 2023</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                        Rechazado
                      </span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">$4,200.00</td>
<td className="px-4 py-3 text-right">
<button className="text-gray-400 hover:text-gray-900"><i className="h-4 w-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>
</tbody>
</table>
<div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-4 py-3">
<span className="text-xs text-gray-500" id="table-summary">Mostrando 4 de 48 transacciones</span>
<div className="flex gap-1">
<button className="rounded border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50" disabled="">Anterior</button>
<button className="rounded border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50">Siguiente</button>
</div>
</div>
</div>
</div>

<div className="col-span-1 flex flex-col gap-6">

<div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
<h3 className="mb-4 text-sm font-semibold text-gray-900">Distribución por Categoría</h3>
<div className="space-y-4">
<div>
<div className="mb-1 flex justify-between text-xs">
<span className="text-gray-600">Infraestructura &amp; Software</span>
<span className="font-medium text-gray-900">45%</span>
</div>
<div className="h-1.5 w-full rounded-full bg-gray-100">
<div className="h-1.5 rounded-full bg-gray-800" style={{width: '45%'}}></div>
</div>
</div>
<div>
<div className="mb-1 flex justify-between text-xs">
<span className="text-gray-600">Viajes y Representación</span>
<span className="font-medium text-gray-900">20%</span>
</div>
<div className="h-1.5 w-full rounded-full bg-gray-100">
<div className="h-1.5 rounded-full bg-gray-400" style={{width: '20%'}}></div>
</div>
</div>
<div>
<div className="mb-1 flex justify-between text-xs">
<span className="text-gray-600">Marketing</span>
<span className="font-medium text-gray-900">15%</span>
</div>
<div className="h-1.5 w-full rounded-full bg-gray-100">
<div className="h-1.5 rounded-full bg-gray-300" style={{width: '15%'}}></div>
</div>
</div>
<div>
<div className="mb-1 flex justify-between text-xs">
<span className="text-gray-600">Oficina</span>
<span className="font-medium text-gray-900">10%</span>
</div>
<div className="h-1.5 w-full rounded-full bg-gray-100">
<div className="h-1.5 rounded-full bg-gray-200" style={{width: '10%'}}></div>
</div>
</div>
</div>
</div>

<div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-sm font-semibold text-gray-900">Roles y Accesos</h3>
<button className="text-xs text-blue-600 hover:underline">Gestionar</button>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded bg-purple-50 text-purple-600">
<i className="h-4 w-4" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-xs font-medium text-gray-900">Administradores</p>
<p className="text-[10px] text-gray-500">Acceso total</p>
</div>
</div>
<span className="text-xs font-medium text-gray-900">3</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded bg-blue-50 text-blue-600">
<i className="h-4 w-4" data-lucide="user-check"></i>
</div>
<div>
<p className="text-xs font-medium text-gray-900">Aprobadores</p>
<p className="text-[10px] text-gray-500">Límite $5k</p>
</div>
</div>
<span className="text-xs font-medium text-gray-900">5</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded bg-gray-50 text-gray-600">
<i className="h-4 w-4" data-lucide="user"></i>
</div>
<div>
<p className="text font-medium text-gray-900">Empleados</p>
<p className="text-[10px] text-gray-500">Solo reportar</p>
</div>
</div>
<span className="text-xs font-medium text-gray-900">10</span>
</div>
</div>
<div className="mt-4 border-t border-gray-100 pt-4">
<label className="flex cursor-pointer items-center justify-between">
<span className="text-xs text-gray-600">Permitir gastos sin recibo &lt;$20</span>
<div className="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-200" id="toggle-policy">
<span className="translate-x-1 inline-block h-3.5 w-3.5 transform rounded-full bg-white transition"></span>
</div>
</label>
<p className="mt-1 text-[11px] text-gray-400" id="policy-helper">
                  Desactivado para mayor control.
                </p>
</div>
</div>
</div>
</div>
</main>
</div>
</div>

<div className="fixed inset-0 z-40 hidden items-center justify-center bg-gray-900/40 backdrop-blur-sm" id="new-expense-modal">
<div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-5 shadow-xl">
<div className="mb-4 flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold tracking-tight text-gray-900">Registrar nuevo gasto</h3>
<p className="text-xs text-gray-500">Completa los campos para agregar un gasto al registro.</p>
</div>
<button className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700" id="close-expense-modal">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<form className="space-y-3" id="new-expense-form">
<div>
<label className="mb-1 block text-xs font-medium text-gray-700">Concepto</label>
<input className="h-8 w-full rounded border border-gray-200 px-3 text-sm outline-none focus:border-gray-400" id="expense-concept" type="text"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="mb-1 block text-xs font-medium text-gray-700">Monto (USD)</label>
<input className="h-8 w-full rounded border border-gray-200 px-3 text-sm outline-none focus:border-gray-400" id="expense-amount" min="0" step="0.01" type="number"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-gray-700">Categoría</label>
<select className="h-8 w-full rounded border border-gray-200 bg-white px-2 text-xs outline-none focus:border-gray-400" id="expense-category">
<option value="Software">Software</option>
<option value="Viáticos">Viáticos</option>
<option value="Viajes">Viajes</option>
<option value="Oficina">Oficina</option>
</select>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="mb-1 block text-xs font-medium text-gray-700">Solicitante</label>
<input className="h-8 w-full rounded border border-gray-200 px-3 text-sm outline-none focus:border-gray-400" id="expense-owner" placeholder="Nombre Apellido" type="text"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-gray-700">Estado inicial</label>
<select className="h-8 w-full rounded border border-gray-200 bg-white px-2 text-xs outline-none focus:border-gray-400" id="expense-status">
<option value="Pendiente">Pendiente</option>
<option value="Aprobado">Aprobado</option>
</select>
</div>
</div>
<div className="hidden rounded border border-red-200 bg-red-50 px-3 py-2 text-[11px] text-red-700" id="expense-error">
          Completa todos los campos y usa un monto mayor que 0.
        </div>
<div className="mt-2 flex justify-end gap-2">
<button className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50" id="cancel-expense" type="button">
            Cancelar
          </button>
<button className="flex items-center gap-1 rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-800" type="submit">
<i className="h-3.5 w-3.5" data-lucide="save"></i>
            Guardar
          </button>
</div>
</form>
</div>
</div>


    </>
  );
}
