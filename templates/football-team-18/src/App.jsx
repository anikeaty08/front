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



        // Simple state management
        const state = {
            role: null, // 'user' or 'admin'
            activeTab: 'calendar'
        };

        function login(role) {
            state.role = role;
            
            // Hide Login, Show App
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('app-layout').classList.remove('hidden-section');
            
            // Handle Admin specific visibility
            const adminMenu = document.getElementById('admin-menu');
            if (role === 'admin') {
                adminMenu.classList.remove('hidden');
                // Auto navigate to admin for demo purposes if desired, but let's stick to calendar first
            } else {
                adminMenu.classList.add('hidden');
            }
            
            navigate('calendar');
        }

        function navigate(tabId) {
            state.activeTab = tabId;

            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden-section'));
            
            // Show selected view
            const view = document.getElementById(`view-${tabId}`);
            if(view) view.classList.remove('hidden-section');

            // Update sidebar active state
            document.querySelectorAll('.sidebar-link').forEach(el => el.classList.remove('active'));
            const navLink = document.getElementById(`nav-${tabId}`);
            if(navLink) navLink.classList.add('active');
        }

        function openPixModal() {
            document.getElementById('pix-modal').classList.remove('hidden');
        }

        function closePixModal() {
            document.getElementById('pix-modal').classList.add('hidden');
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
      

<div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950" id="login-screen">
<div className="glass-panel w-full max-w-md p-8 rounded-2xl shadow-2xl space-y-8 mx-4">
<div className="text-center space-y-2">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 mb-2">
<iconify-icon className="text-white" icon="solar:football-linear" width="24"></iconify-icon>
</div>
<h1 className="text-2xl font-medium tracking-tight text-white">FUTMANAGER</h1>
<p className="text-neutral-500">Gerencie seu time, jogos e finanças.</p>
</div>
<div className="space-y-4">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400">Email</label>
<div className="relative">
<input className="input-reset w-full bg-neutral-900/50 rounded-lg py-2.5 px-3 text-white placeholder-neutral-600 focus:ring-0" placeholder="seu@email.com" type="email" value="jogador@exemplo.com"/>
<div className="absolute right-3 top-2.5 text-neutral-600">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400">Senha</label>
<div className="relative">
<input className="input-reset w-full bg-neutral-900/50 rounded-lg py-2.5 px-3 text-white placeholder-neutral-600 focus:ring-0" placeholder="••••••••" type="password" value="password"/>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 pt-2">
<button className="group relative w-full flex justify-center py-2.5 px-4 border border-neutral-700 text-sm font-medium rounded-lg text-white bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-700 transition-all" onclick="login('user')">
                    Entrar (Jogador)
                </button>
<button className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-black bg-white hover:bg-neutral-200 focus:outline-none transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]" onclick="login('admin')">
                    Entrar (Admin)
                </button>
</div>
<p className="text-center text-xs text-neutral-600">Selecione um modo para visualizar a demo.</p>
</div>
</div>

<div className="hidden-section flex h-full w-full" id="app-layout">

<aside className="w-64 border-r border-neutral-800 bg-neutral-950 flex flex-col hidden md:flex">
<div className="h-16 flex items-center px-6 border-b border-neutral-800">
<iconify-icon className="text-emerald-500 mr-2" icon="solar:football-linear" width="20"></iconify-icon>
<span className="font-medium tracking-tight text-white text-base">FUTMANAGER</span>
</div>
<div className="flex-1 py-6 px-3 space-y-1">
<p className="px-3 text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wider">Menu Principal</p>
<button className="sidebar-link active w-full flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all text-left" id="nav-calendar" onclick="navigate('calendar')">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
                    Calendar
                </button>
<button className="sidebar-link w-full flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all text-left" id="nav-finance" onclick="navigate('finance')">
<iconify-icon icon="solar:wallet-money-linear" width="18"></iconify-icon>
                    Financeiro
                </button>
<button className="sidebar-link w-full flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all text-left" id="nav-media" onclick="navigate('media')">
<iconify-icon icon="solar:gallery-linear" width="18"></iconify-icon>
                    Galeria
                </button>

<div className="hidden pt-6" id="admin-menu">
<p className="px-3 text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wider">Administração</p>
<button className="sidebar-link w-full flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all text-left" id="nav-admin" onclick="navigate('admin')">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                        Gestão de Elenco
                    </button>
<button className="sidebar-link w-full flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all text-left" onclick="navigate('admin-games')">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
                        Configurações
                    </button>
</div>
</div>
<div className="p-4 border-t border-neutral-800">
<button className="flex items-center gap-3 w-full hover:bg-neutral-900 p-2 rounded-md transition-colors" onclick="navigate('profile')">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-medium text-xs">
                        JP
                    </div>
<div className="text-left">
<p className="text-xs font-medium text-white">João Paulo</p>
<p className="text-[10px] text-neutral-500">Atacante #10</p>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-[#050505]">

<header className="h-14 border-b border-neutral-800 flex items-center justify-between px-4 md:hidden bg-neutral-950">
<span className="font-medium tracking-tight text-white">FUTMANAGER</span>
<button className="text-neutral-400">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">

<div className="view-section max-w-5xl mx-auto animate-fade" id="view-calendar">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-xl font-medium text-white tracking-tight mb-1">Calendário de Jogos</h2>
<p className="text-neutral-500 text-xs">Próximos confrontos e resultados.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="px-3 py-1.5 rounded-md border border-neutral-800 text-neutral-400 hover:text-white text-xs transition-colors">Mês Anterior</button>
<button className="px-3 py-1.5 rounded-md border border-neutral-800 text-neutral-400 hover:text-white text-xs transition-colors">Próximo Mês</button>
</div>
</div>

<div className="w-full relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 mb-8 group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:cup-star-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-center md:text-left">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-medium uppercase tracking-wide border border-emerald-500/20 mb-3">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Próximo Jogo
                                </span>
<h3 className="text-2xl text-white font-medium tracking-tight">Final da Liga Amadora</h3>
<p className="text-neutral-400 mt-1 flex items-center gap-2 justify-center md:justify-start">
<iconify-icon className="text-emerald-500" icon="solar:map-point-linear"></iconify-icon>
                                    Arena Central, Campo 2
                                </p>
</div>
<div className="flex items-center gap-6">
<div className="text-center">
<div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg mb-2 mx-auto">NÓS</div>
<span className="text-xs text-neutral-400">FutManager FC</span>
</div>
<span className="text-xl font-light text-neutral-600">VS</span>
<div className="text-center">
<div className="w-14 h-14 rounded-full bg-neutral-800 border border-neutral-700 text-white flex items-center justify-center font-bold text-lg mb-2 mx-auto">ADV</div>
<span className="text-xs text-neutral-400">Rival United</span>
</div>
</div>
<div className="text-center md:text-right border-t md:border-t-0 md:border-l border-neutral-800 pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
<p className="text-3xl font-medium text-white tracking-tight">20:00</p>
<p className="text-emerald-400 text-xs mt-1">Sexta, 24 Out</p>
</div>
</div>
</div>

<div className="space-y-3">
<h4 className="text-sm font-medium text-neutral-300 mb-4">Próximos Jogos</h4>

<div className="flex items-center justify-between p-4 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors">
<div className="flex items-center gap-4">
<div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400">
<span className="text-[10px] uppercase">Nov</span>
<span className="text-lg font-medium text-white leading-none">02</span>
</div>
<div>
<p className="text-white font-medium">Contra: Real Parque</p>
<p className="text-xs text-neutral-500">Amistoso • 19:30</p>
</div>
</div>
<div className="hidden md:flex items-center gap-2">
<span className="px-2 py-1 rounded-md bg-neutral-800 text-neutral-400 text-xs border border-neutral-700">Confirmado</span>
</div>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors">
<div className="flex items-center gap-4">
<div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400">
<span className="text-[10px] uppercase">Nov</span>
<span className="text-lg font-medium text-white leading-none">09</span>
</div>
<div>
<p className="text-white font-medium">Contra: Atlético Vila</p>
<p className="text-xs text-neutral-500">Liga • 21:00</p>
</div>
</div>
<div className="hidden md:flex items-center gap-2">
<span className="px-2 py-1 rounded-md bg-neutral-800 text-neutral-400 text-xs border border-neutral-700">A confirmar</span>
</div>
</div>
</div>
</div>

<div className="view-section hidden-section max-w-5xl mx-auto" id="view-finance">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-xl font-medium text-white tracking-tight mb-1">Financeiro</h2>
<p className="text-neutral-500 text-xs">Histórico de mensalidades e pagamentos.</p>
</div>
<button className="px-3 py-1.5 rounded-md bg-white text-black hover:bg-neutral-200 text-xs font-medium transition-colors shadow-lg shadow-white/5">
                            Adiantar Pagamento
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/30">
<p className="text-neutral-500 text-xs mb-1">Status Atual</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-white font-medium">Em dia</span>
</div>
</div>
<div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/30">
<p className="text-neutral-500 text-xs mb-1">Próximo Vencimento</p>
<p className="text-white font-medium">10 Novembro</p>
</div>
<div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/30">
<p className="text-neutral-500 text-xs mb-1">Valor Mensal</p>
<p className="text-white font-medium">R$ 50,00</p>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-4">Histórico</h3>
<div className="rounded-xl border border-neutral-800 overflow-hidden">
<table className="w-full text-left text-xs">
<thead className="bg-neutral-900 text-neutral-400">
<tr>
<th className="font-medium p-4 border-b border-neutral-800">Referência</th>
<th className="font-medium p-4 border-b border-neutral-800">Data Pagamento</th>
<th className="font-medium p-4 border-b border-neutral-800 text-right">Valor</th>
<th className="font-medium p-4 border-b border-neutral-800 text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800 bg-neutral-900/20">
<tr className="group hover:bg-neutral-900/40 transition-colors">
<td className="p-4 text-white">Outubro 2023</td>
<td className="p-4 text-neutral-400">--</td>
<td className="p-4 text-white text-right">R$ 50,00</td>
<td className="p-4 text-right">
<button className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors" onclick="openPixModal()">
                                            Pagar
                                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</td>
</tr>
<tr className="group hover:bg-neutral-900/40 transition-colors">
<td className="p-4 text-white">Setembro 2023</td>
<td className="p-4 text-neutral-400">10 Set, 14:30</td>
<td className="p-4 text-white text-right">R$ 50,00</td>
<td className="p-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-800 text-neutral-400 border border-neutral-700">Pago</span>
</td>
</tr>
<tr className="group hover:bg-neutral-900/40 transition-colors">
<td className="p-4 text-white">Agosto 2023</td>
<td className="p-4 text-neutral-400">09 Ago, 09:15</td>
<td className="p-4 text-white text-right">R$ 50,00</td>
<td className="p-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-800 text-neutral-400 border border-neutral-700">Pago</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-section hidden-section max-w-6xl mx-auto" id="view-media">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-xl font-medium text-white tracking-tight mb-1">Galeria do Time</h2>
<p className="text-neutral-500 text-xs">Fotos e vídeos das últimas partidas.</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="col-span-2 row-span-2 relative group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">

<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-600 group-hover:scale-105 transition-transform duration-700">
<iconify-icon icon="solar:videocamera-record-linear" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
<span className="bg-white/20 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded w-fit mb-2">Destaque</span>
<h3 className="text-white font-medium text-lg">Gol da Vitória - Final</h3>
<p className="text-neutral-400 text-xs">Por João Paulo • 2 min</p>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
<div className="absolute inset-0 bg-neutral-800/50 flex items-center justify-center text-neutral-600 group-hover:bg-neutral-800/70 transition-colors">
<iconify-icon icon="solar:gallery-linear" width="24"></iconify-icon>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
<div className="absolute inset-0 bg-neutral-800/50 flex items-center justify-center text-neutral-600 group-hover:bg-neutral-800/70 transition-colors">
<iconify-icon icon="solar:gallery-linear" width="24"></iconify-icon>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
<div className="absolute inset-0 bg-neutral-800/50 flex items-center justify-center text-neutral-600 group-hover:bg-neutral-800/70 transition-colors">
<iconify-icon icon="solar:gallery-linear" width="24"></iconify-icon>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
<div className="absolute inset-0 bg-neutral-800/50 flex items-center justify-center text-neutral-600 group-hover:bg-neutral-800/70 transition-colors">
<iconify-icon icon="solar:gallery-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="view-section hidden-section max-w-2xl mx-auto" id="view-profile">
<h2 className="text-xl font-medium text-white tracking-tight mb-8">Editar Perfil</h2>
<div className="space-y-6">
<div className="flex items-center gap-6 pb-6 border-b border-neutral-800">
<div className="w-20 h-20 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-2xl text-white">JP</div>
<div>
<button className="text-xs bg-white text-black px-3 py-1.5 rounded-md font-medium hover:bg-neutral-200 transition-colors">Alterar Foto</button>
<p className="text-[10px] text-neutral-500 mt-2">Recomendado: 400x400px</p>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2 col-span-2 md:col-span-1">
<label className="text-xs text-neutral-400">Nome Completo</label>
<input className="input-reset w-full bg-neutral-900 rounded-lg py-2 px-3 text-white" type="text" value="João Paulo"/>
</div>
<div className="space-y-2 col-span-2 md:col-span-1">
<label className="text-xs text-neutral-400">Apelido</label>
<input className="input-reset w-full bg-neutral-900 rounded-lg py-2 px-3 text-white" type="text" value="Jota"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400">Posição</label>
<select className="input-reset w-full bg-neutral-900 rounded-lg py-2 px-3 text-white">
<option>Atacante</option>
<option>Meio-Campo</option>
<option>Zagueiro</option>
<option>Goleiro</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400">Número da Camisa</label>
<input className="input-reset w-full bg-neutral-900 rounded-lg py-2 px-3 text-white" type="number" value="10"/>
</div>
</div>
<div className="pt-4">
<button className="w-full md:w-auto px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium rounded-lg transition-colors">Salvar Alterações</button>
</div>
</div>
</div>

<div className="view-section hidden-section max-w-6xl mx-auto" id="view-admin">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-xl font-medium text-white tracking-tight mb-1">Gestão de Elenco</h2>
<p className="text-neutral-500 text-xs">Gerencie pagamentos e convites.</p>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-black hover:bg-neutral-200 text-xs font-medium transition-colors">
<iconify-icon icon="solar:user-plus-linear"></iconify-icon>
                            Convidar Jogador
                        </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/30">
<p className="text-neutral-500 text-[10px] uppercase">Total Jogadores</p>
<p className="text-xl font-medium text-white mt-1">24</p>
</div>
<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/30">
<p className="text-neutral-500 text-[10px] uppercase">Inadimplentes</p>
<p className="text-xl font-medium text-red-400 mt-1">3</p>
</div>
<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/30">
<p className="text-neutral-500 text-[10px] uppercase">Em Caixa (Out)</p>
<p className="text-xl font-medium text-emerald-400 mt-1">R$ 850</p>
</div>
</div>

<div className="rounded-xl border border-neutral-800 overflow-hidden">
<table className="w-full text-left text-xs">
<thead className="bg-neutral-900 text-neutral-400">
<tr>
<th className="font-medium p-3 border-b border-neutral-800 w-10">#</th>
<th className="font-medium p-3 border-b border-neutral-800">Jogador</th>
<th className="font-medium p-3 border-b border-neutral-800">Posição</th>
<th className="font-medium p-3 border-b border-neutral-800">Status Fin.</th>
<th className="font-medium p-3 border-b border-neutral-800 text-right">Ações</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800 bg-neutral-900/20">

<tr className="group hover:bg-neutral-900/40">
<td className="p-3 text-neutral-500">10</td>
<td className="p-3 text-white font-medium flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-emerald-900 text-emerald-300 flex items-center justify-center text-[10px]">JP</div>
                                        João Paulo
                                    </td>
<td className="p-3 text-neutral-400">Atacante</td>
<td className="p-3"><span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded text-[10px]">Em dia</span></td>
<td className="p-3 text-right text-neutral-400">
<button className="hover:text-white"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-neutral-900/40">
<td className="p-3 text-neutral-500">04</td>
<td className="p-3 text-white font-medium flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center text-[10px]">MA</div>
                                        Marcos Silva
                                    </td>
<td className="p-3 text-neutral-400">Zagueiro</td>
<td className="p-3"><span className="text-red-400 bg-red-400/10 px-2 py-0.5 rounded text-[10px]">Pendente</span></td>
<td className="p-3 text-right text-neutral-400">
<button className="hover:text-white"><iconify-icon icon="solar:bell-bing-linear"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 z-[60] hidden flex items-center justify-center bg-black/80 backdrop-blur-sm" id="pix-modal">
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 w-full max-w-sm text-center relative shadow-2xl">
<button className="absolute top-4 right-4 text-neutral-500 hover:text-white" onclick="closePixModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<h3 className="text-lg font-medium text-white mb-2">Pagamento via Pix</h3>
<p className="text-neutral-400 text-xs mb-6">Escaneie o QR Code abaixo para pagar a mensalidade de Outubro.</p>
<div className="w-48 h-48 mx-auto bg-white p-2 rounded-lg mb-4 flex items-center justify-center">

<div className="w-full h-full bg-neutral-900 pattern-grid-lg opacity-20 relative overflow-hidden">
<div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1">
<div className="bg-black col-span-2 row-span-2"></div>
<div className="bg-black col-start-5 col-span-2 row-span-2"></div>
<div className="bg-black col-span-2 row-start-5 row-span-2"></div>
<div className="bg-black col-start-3 row-start-3 w-full h-full"></div>
<div className="bg-black col-start-4 row-start-4 w-full h-full"></div>
</div>
</div>
</div>
<div className="bg-neutral-800/50 p-3 rounded-lg flex items-center justify-between border border-neutral-800 mb-4">
<span className="text-[10px] text-neutral-400 font-mono truncate max-w-[200px]">00020126580014br.gov.bcb.pix0136...</span>
<button className="text-emerald-500 hover:text-emerald-400 text-xs font-medium">Copiar</button>
</div>
<button className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium transition-colors" onclick="closePixModal()">
                Confirmar Pagamento
            </button>
</div>
</div>


    </>
  );
}
