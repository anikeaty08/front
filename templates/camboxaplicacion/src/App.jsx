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



        // --- DATA SIMULATION ---
        const membersData = [
            { id: '1001', name: 'Carlos Mendoza', email: 'carlos.m@mail.com', plan: 'Anual', expires: '2024-12-01', active: true, avatar: 'CM' },
            { id: '1002', name: 'Ana Rodríguez', email: 'ana.rod@mail.com', plan: 'Mensual', expires: '2023-10-15', active: false, avatar: 'AR' },
            { id: '1003', name: 'Luis Fernández', email: 'luis.f@mail.com', plan: 'Trimestral', expires: '2024-02-20', active: true, avatar: 'LF' },
            { id: '1004', name: 'Sofia Vega', email: 'sofia.v@mail.com', plan: 'Mensual', expires: '2023-11-05', active: true, avatar: 'SV' },
            { id: '1005', name: 'Jorge Treviño', email: 'jorge.t@mail.com', plan: 'Mensual', expires: '2023-09-30', active: false, avatar: 'JT' },
        ];

        let recentAccess = [
            { name: 'Sofia Vega', time: '07:00 AM', status: 'success', coach: 'Coach Mariana' },
            { name: 'Carlos Mendoza', time: '09:30 AM', status: 'success', coach: 'Coach Alex' }
        ];

        let currentBranch = 'Roma Norte';

        // --- BRANCH LOGIC ---

        function toggleBranchMenu(e) {
            e.stopPropagation();
            document.getElementById('branch-dropdown').classList.toggle('hidden');
        }

        function closeMenus(e) {
            if (!e.target.closest('#branch-dropdown') && !e.target.closest('button[onclick="toggleBranchMenu(event)"]')) {
                document.getElementById('branch-dropdown').classList.add('hidden');
            }
        }

        function selectBranch(branchName) {
            currentBranch = branchName;
            
            // Update UI Texts
            document.getElementById('sidebar-branch-name').innerText = branchName;
            document.getElementById('mobile-branch-name').innerText = branchName;
            document.getElementById('dashboard-branch-label').innerText = branchName;
            
            // Update all elements with class 'current-branch-text'
            document.querySelectorAll('.current-branch-text').forEach(el => el.innerText = branchName);

            // Update Check icons
            document.querySelectorAll('.branch-check').forEach(icon => icon.classList.add('opacity-0'));
            const activeCheck = document.getElementById(`check-${branchName}`);
            if(activeCheck) activeCheck.classList.remove('opacity-0');

            // Hide Menu
            document.getElementById('branch-dropdown').classList.add('hidden');

            // Simulate Data Refresh
            refreshBranchData();
        }

        function refreshBranchData() {
            // Simulate changing stats based on branch
            const randomActive = Math.floor(Math.random() * 20) + 5;
            const randomEvals = Math.floor(Math.random() * 10);
            
            // Animate numbers
            document.getElementById('stat-active-now').innerText = randomActive;
            document.getElementById('stat-pending-evals').innerText = randomEvals;
            
            // Clear or shuffle recent access list to simulate different location
            const names = ['Roberto G.', 'Maria P.', 'Juan D.', 'Lucia M.'];
            recentAccess = [
                { name: names[Math.floor(Math.random()*names.length)], time: 'Hace un momento', status: 'success', coach: 'Coach Turno' }
            ];
            renderRecentAccess();
            
            // Flash effect on dashboard
            const dashboard = document.getElementById('view-dashboard');
            dashboard.classList.remove('fade-in');
            void dashboard.offsetWidth; // trigger reflow
            dashboard.classList.add('fade-in');
        }

        // --- RENDER FUNCTIONS ---

        function renderMembers() {
            const tbody = document.getElementById('members-table-body');
            tbody.innerHTML = '';
            
            membersData.forEach(member => {
                const statusBadge = member.active 
                    ? `<span class="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Activo</span>`
                    : `<span class="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-500 border border-red-500/20"><span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>Inactivo</span>`;

                const row = `
                    <tr class="hover:bg-white/[0.02] transition-colors group">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400 border border-white/5">
                                    ${member.avatar}
                                </div>
                                <div>
                                    <div class="text-zinc-200 font-medium">${member.name}</div>
                                    <div class="text-xs text-zinc-500">ID: ${member.id}</div>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-zinc-500 font-mono text-xs">${member.email}</td>
                        <td class="px-6 py-4 text-zinc-400">${member.plan}</td>
                        <td class="px-6 py-4">${statusBadge}</td>
                        <td class="px-6 py-4 text-right">
                             <label for="toggle-${member.id}" class="flex items-center cursor-pointer relative justify-end">
                                <div class="relative">
                                    <input type="checkbox" id="toggle-${member.id}" class="sr-only" ${member.active ? 'checked' : ''} onchange="toggleMemberStatus('${member.id}')">
                                    <div class="w-9 h-5 bg-zinc-700 rounded-full border border-zinc-600 transition-colors ${member.active ? 'bg-emerald-600 border-emerald-500' : ''}"></div>
                                    <div class="dot absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform ${member.active ? 'translate-x-4' : ''}"></div>
                                </div>
                            </label>
                        </td>
                    </tr>
                `;
                tbody.innerHTML += row;
            });
            document.getElementById('stat-total-members').innerText = membersData.length;
        }

        function renderRecentAccess() {
            const list = document.getElementById('recent-access-list');
            list.innerHTML = '';
            
            recentAccess.slice(0, 5).forEach(access => {
                const icon = access.status === 'success' 
                    ? `<div class="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20"><iconify-icon icon="lucide:check" width="14"></iconify-icon></div>`
                    : `<div class="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20"><iconify-icon icon="lucide:x" width="14"></iconify-icon></div>`;

                const coachInfo = access.coach ? `<span class="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">${access.coach}</span>` : '';

                const item = `
                    <li class="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                        <div class="flex items-center gap-3">
                            ${icon}
                            <div>
                                <div class="flex items-center">
                                    <p class="text-sm font-medium text-zinc-200">${access.name}</p>
                                    ${coachInfo}
                                </div>
                                <p class="text-xs text-zinc-500">Entrada principal</p>
                            </div>
                        </div>
                        <span class="text-xs font-mono text-zinc-600">${access.time}</span>
                    </li>
                `;
                list.innerHTML += item;
            });
        }

        // --- ACTIONS ---

        function toggleMemberStatus(id) {
            const member = membersData.find(m => m.id === id);
            if (member) {
                member.active = !member.active;
                renderMembers();
            }
        }

        function processCheckIn() {
            const input = document.getElementById('checkin-input');
            const coachSelect = document.getElementById('coach-selector');
            const feedback = document.getElementById('checkin-feedback');
            const query = input.value.trim().toLowerCase();
            const coach = coachSelect.value;
            
            if (!query) {
                alert("Por favor ingresa un ID o nombre.");
                return;
            }
            if (!coach) {
                 feedback.classList.remove('hidden');
                 feedback.innerHTML = `
                    <div class="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 flex items-center gap-3">
                        <iconify-icon icon="lucide:alert-triangle" class="text-amber-500" width="18"></iconify-icon>
                        <span class="text-amber-500 text-sm font-medium">Selecciona un Coach primero</span>
                    </div>`;
                return;
            }

            const member = membersData.find(m => m.id === query || m.name.toLowerCase().includes(query));
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            feedback.classList.remove('hidden');
            
            if (member) {
                if (member.active) {
                    feedback.innerHTML = `
                        <div class="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                            <div class="flex items-start gap-3 mb-3">
                                <iconify-icon icon="lucide:check-circle-2" class="text-emerald-500 mt-0.5" width="20"></iconify-icon>
                                <div>
                                    <h3 class="text-emerald-500 font-medium text-sm">Acceso Permitido - ${currentBranch}</h3>
                                    <p class="text-zinc-400 text-xs mt-1">Bienvenido, <span class="text-white">${member.name}</span>.</p>
                                </div>
                            </div>
                            
                            <div class="bg-emerald-500/5 border-t border-emerald-500/10 pt-3 flex items-start gap-3">
                                <div class="min-w-[20px] h-[20px] rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <iconify-icon icon="lucide:mail" width="12"></iconify-icon>
                                </div>
                                <div>
                                    <p class="text-xs text-zinc-300 font-medium">Correo de evaluación enviado</p>
                                    <p class="text-[10px] text-zinc-500 mt-0.5">Se ha notificado a <span class="text-zinc-400">${member.email}</span> para evaluar a <span class="text-emerald-400">${coach}</span>.</p>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    recentAccess.unshift({ name: member.name, time: timeString, status: 'success', coach: coach });
                    document.getElementById('stat-active-now').innerText = parseInt(document.getElementById('stat-active-now').innerText) + 1;
                    
                    const pendingEvals = document.getElementById('stat-pending-evals');
                    pendingEvals.innerText = parseInt(pendingEvals.innerText) + 1;

                } else {
                    feedback.innerHTML = `
                        <div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-start gap-3">
                            <iconify-icon icon="lucide:alert-circle" class="text-red-500 mt-0.5" width="20"></iconify-icon>
                            <div>
                                <h3 class="text-red-500 font-medium text-sm">Acceso Denegado</h3>
                                <p class="text-zinc-400 text-xs mt-1">La membresía de <span class="text-white">${member.name}</span> no está activa.</p>
                            </div>
                        </div>
                    `;
                    recentAccess.unshift({ name: member.name, time: timeString, status: 'denied', coach: null });
                }
            } else {
                feedback.innerHTML = `
                    <div class="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 flex items-start gap-3">
                        <iconify-icon icon="lucide:help-circle" class="text-amber-500 mt-0.5" width="20"></iconify-icon>
                        <div>
                            <h3 class="text-amber-500 font-medium text-sm">Usuario no encontrado</h3>
                            <p class="text-zinc-400 text-xs mt-1">No existe un miembro con ID o nombre: "${input.value}".</p>
                        </div>
                    </div>
                `;
            }

            document.getElementById('last-checkin-time').innerText = timeString;
            input.value = '';
            renderRecentAccess();
        }

        // --- NAVIGATION ---
        function switchTab(tabId) {
            ['dashboard', 'members', 'attendance'].forEach(id => {
                document.getElementById(`view-${id}`).classList.add('hidden');
                const btn = document.getElementById(`nav-${id}`);
                if(btn) {
                    btn.classList.remove('bg-white/5', 'text-neutral-100');
                    btn.classList.add('text-neutral-400');
                }
            });

            document.getElementById(`view-${tabId}`).classList.remove('hidden');
            
            const activeBtn = document.getElementById(`nav-${tabId}`);
            if(activeBtn) {
                activeBtn.classList.remove('text-neutral-400');
                activeBtn.classList.add('bg-white/5', 'text-neutral-100');
            }

            if (tabId === 'dashboard') renderRecentAccess();
            if (tabId === 'attendance') document.getElementById('checkin-input').focus();
        }

        document.addEventListener('DOMContentLoaded', () => {
            renderMembers();
            renderRecentAccess();
            
            document.getElementById('member-search').addEventListener('keyup', (e) => {
                const term = e.target.value.toLowerCase();
                const rows = document.querySelectorAll('#members-table-body tr');
                rows.forEach(row => {
                    const text = row.innerText.toLowerCase();
                    row.style.display = text.includes(term) ? '' : 'none';
                });
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
      

<aside className="w-64 border-r flex flex-col justify-between hidden md:flex border-white/5 bg-neutral-950/50">
<div className="">

<div className="p-4 pb-2 relative z-50">
<button className="w-full flex items-center justify-between p-2 rounded-lg transition-colors hover:bg-white/5 border border-transparent hover:border-white/5 text-left group" onclick="toggleBranchMenu(event)">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs tracking-tighter">
                            GF
                        </div>
<div>
<div className="text-[10px] uppercase font-semibold text-neutral-500 tracking-wider">Sucursal</div>
<div className="text-sm font-medium text-white tracking-tight" id="sidebar-branch-name">Roma Norte</div>
</div>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="lucide:chevrons-up-down" width="16"></iconify-icon>
</button>

<div className="hidden absolute top-full left-4 w-[calc(100%-2rem)] mt-2 bg-neutral-900 border border-white/10 rounded-lg shadow-xl overflow-hidden ring-1 ring-black/50" id="branch-dropdown">
<div className="p-1 space-y-0.5">
<button className="w-full flex items-center justify-between px-3 py-2 text-sm text-left rounded-md hover:bg-white/5 text-white group" onclick="selectBranch('Roma Norte')">
<span>Roma Norte</span>
<iconify-icon className="text-emerald-500 opacity-100 branch-check" icon="lucide:check" id="check-Roma Norte" width="14"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 text-sm text-left rounded-md hover:bg-white/5 text-neutral-400 hover:text-white group" onclick="selectBranch('Polanco')">
<span>Polanco</span>
<iconify-icon className="text-emerald-500 opacity-0 branch-check" icon="lucide:check" id="check-Polanco" width="14"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 text-sm text-left rounded-md hover:bg-white/5 text-neutral-400 hover:text-white group" onclick="selectBranch('Del Valle')">
<span>Del Valle</span>
<iconify-icon className="text-emerald-500 opacity-0 branch-check" icon="lucide:check" id="check-Del Valle" width="14"></iconify-icon>
</button>
</div>
<div className="border-t border-white/5 p-1">
<button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-left rounded-md hover:bg-white/5 text-neutral-500 hover:text-neutral-300">
<iconify-icon icon="lucide:plus" width="12"></iconify-icon>
                            Nueva Sucursal
                        </button>
</div>
</div>
</div>
<nav className="p-4 space-y-1 mt-2">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors hover:bg-white/5 bg-white/5 hover:text-neutral-100 text-neutral-100" id="nav-dashboard" onclick="switchTab('dashboard')">
<iconify-icon icon="lucide:layout-dashboard" strokeWidth="1.5" width="18"></iconify-icon>
                    Panel Principal
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors hover:bg-white/5 text-neutral-400 hover:text-neutral-100" id="nav-members" onclick="switchTab('members')">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
                    Miembros
                </button>
<button className="nav-item flex gap-3 transition-colors text-sm w-full rounded-md pt-2 pr-3 pb-2 pl-3 gap-x-3 gap-y-3 items-center hover:bg-white/5 text-neutral-400 hover:text-neutral-100" id="nav-attendance" onclick="switchTab('attendance')">
<iconify-icon icon="lucide:scan-line" strokeWidth="1.5" width="18"></iconify-icon>
                    Pasar Asistencia
                </button>
</nav>
</div>
<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 px-3 py-2 w-full text-left text-sm transition-colors hover:text-white text-neutral-400">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr flex items-center justify-center text-xs font-medium text-white from-neutral-700 to-neutral-600">
                    AD
                </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Admin Gym</span>
<span className="text-[10px] text-neutral-500">admin@gymflow.com</span>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-14 md:hidden border-b flex items-center justify-between px-4 border-white/5 bg-neutral-950">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-widest uppercase text-white">GYM<span className="text-neutral-500">FLOW</span></span>
<span className="w-px h-4 bg-white/10"></span>
<span className="text-xs text-neutral-400 font-medium" id="mobile-branch-name">Roma Norte</span>
</div>
<button className="text-neutral-400">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</header>

<div className="flex-1 overflow-y-auto md:p-8 scroll-smooth pt-4 pr-4 pb-4 pl-4" id="content-area">

<div className="fade-in max-w-5xl mx-auto space-y-8" id="view-dashboard">
<div className="flex items-end justify-between">
<div>
<h1 className="text-2xl font-medium tracking-tight text-white">Resumen</h1>
<p className="text-sm mt-1 text-neutral-500">Actividad en <span className="text-white font-medium" id="dashboard-branch-label">Roma Norte</span>.</p>
</div>
<div className="hidden md:block">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                            Sistema Operativo
                        </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-6 rounded-lg border transition duration-300 border-white/5 bg-neutral-900/40 hover:bg-neutral-900/60">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Activos Ahora</span>
<iconify-icon className="text-emerald-500" icon="lucide:activity" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="text-3xl font-medium tracking-tight text-white" id="stat-active-now">12</div>
<div className="mt-2 text-xs text-neutral-500">Personas en sala</div>
</div>
<div className="p-6 rounded-lg border transition duration-300 border-white/5 bg-neutral-900/40 hover:bg-neutral-900/60">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Miembros Totales</span>
<iconify-icon className="text-neutral-500" icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="text-3xl font-medium tracking-tight text-white" id="stat-total-members">5</div>
<div className="mt-2 text-xs flex items-center gap-1 text-emerald-500">
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon> +4 esta semana
                        </div>
</div>
<div className="p-6 rounded-lg border transition duration-300 border-white/5 bg-neutral-900/40 hover:bg-neutral-900/60">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Evaluaciones Hoy</span>
<iconify-icon className="text-amber-500" icon="lucide:star" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="text-3xl font-medium tracking-tight text-white" id="stat-pending-evals">8</div>
<div className="mt-2 text-xs text-neutral-500">Enviadas automáticamente</div>
</div>
</div>

<div className="space-y-4">
<h2 className="text-sm font-medium text-neutral-300">Accesos Recientes</h2>
<div className="border rounded-lg overflow-hidden border-white/5 bg-neutral-900/20">
<ul className="divide-y divide-white/5" id="recent-access-list">

</ul>
</div>
</div>
</div>

<div className="hidden fade-in max-w-5xl mx-auto space-y-6" id="view-members">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-medium tracking-tight text-white">Miembros</h1>
<p className="text-sm mt-1 text-neutral-500">Gestiona los clientes de <span className="current-branch-text text-white">Roma Norte</span>.</p>
</div>
<button className="px-4 py-2 rounded text-sm font-medium transition-colors flex items-center gap-2 bg-white text-black hover:bg-neutral-200">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
                        Nuevo Miembro
                    </button>
</div>

<div className="flex gap-3 mb-6">
<div className="relative flex-1">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" icon="lucide:search" width="16"></iconify-icon>
<input className="w-full border rounded-md py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-700 placeholder-neutral-600 border-white/10 bg-neutral-900/50 text-neutral-200" id="member-search" placeholder="Buscar por nombre o ID..." type="text"/>
</div>
<div className="relative">
<select className="appearance-none border rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none cursor-pointer border-white/10 bg-neutral-900/50 text-neutral-300 hover:bg-neutral-900">
<option>Todos</option>
<option>Activos</option>
<option>Inactivos</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>

<div className="border rounded-lg overflow-hidden overflow-x-auto border-white/5">
<table className="w-full text-left text-sm text-neutral-400">
<thead className="font-medium border-b text-neutral-500 border-white/5 bg-neutral-900/50">
<tr>
<th className="px-6 py-3 font-medium">Cliente</th>
<th className="px-6 py-3 font-medium">Email</th>
<th className="px-6 py-3 font-medium">Plan</th>
<th className="px-6 py-3 font-medium">Estado</th>
<th className="px-6 py-3 font-medium text-right">Acción</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 bg-neutral-900/10" id="members-table-body">

</tbody>
</table>
</div>
</div>

<div className="hidden fade-in max-w-lg mx-auto space-y-8 py-10" id="view-attendance">
<div className="text-center space-y-2">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border mb-4 border-white/10 text-white bg-neutral-900">
<iconify-icon icon="lucide:scan-line" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h1 className="text-2xl font-medium tracking-tight text-white">Control de Acceso</h1>
<p className="text-sm text-neutral-500">Registrando entrada en <span className="current-branch-text text-white font-medium">Roma Norte</span>.</p>
</div>
<div className="border rounded-xl p-6 shadow-2xl border-white/10 shadow-black bg-neutral-900/30">
<form className="space-y-4" id="checkin-form" onsubmit="event.preventDefault(); processCheckIn();">

<div className="space-y-1">
<label className="text-xs font-medium ml-1 text-neutral-400">Coach a Cargo</label>
<div className="relative">
<select className="w-full appearance-none border rounded-lg py-3 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 transition-all focus:border-neutral-600 focus:ring-neutral-600 bg-black border-white/10 text-white cursor-pointer" id="coach-selector">
<option disabled="" selected="" value="">Selecciona un coach...</option>
<option value="Coach Alex">Coach Alex</option>
<option value="Coach Mariana">Coach Mariana</option>
<option value="Coach Roberto">Coach Roberto</option>
<option value="Sin Coach">Sin Coach / Libre</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>

<div className="space-y-1">
<label className="text-xs font-medium ml-1 text-neutral-400">ID o Nombre del Cliente</label>
<div className="relative group">
<input autocomplete="off" className="w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-1 transition-all text-sm focus:border-neutral-600 focus:ring-neutral-600 placeholder-neutral-700 bg-black border-white/10 text-white" id="checkin-input" placeholder="Ej. 1001 o Juan Perez" type="text"/>
</div>
</div>
<button className="w-full font-medium text-sm py-3 rounded-lg transition-transform active:scale-[0.98] bg-white text-black hover:bg-neutral-200 flex justify-center items-center gap-2" type="submit">
<span>Registrar Entrada</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>

<div className="mt-6 hidden fade-in" id="checkin-feedback">

</div>
</div>
<div className="text-center">
<p className="text-xs text-neutral-600">Último ingreso: <span className="text-neutral-400" id="last-checkin-time">--:--</span></p>
</div>
</div>
</div>
</main>


    </>
  );
}
