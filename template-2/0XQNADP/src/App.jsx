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



      // Icons
      lucide.createIcons({
        attrs: { 'stroke-width': 1.5 }
      });

      // Sidebar toggle for mobile
      const toggleSidebar = document.getElementById('toggleSidebar');
      const sidebar = document.getElementById('sidebar');
      if (toggleSidebar) {
        toggleSidebar.addEventListener('click', () => {
          sidebar.classList.toggle('hidden');
        });
      }

      // Chart.js line chart
      const ctx = document.getElementById('chargesChart');
      if (ctx) {
        const canvas = ctx.getContext('2d');

        const gradient = canvas.createLinearGradient(0, 0, 0, 240);
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.25)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
            datasets: [
              {
                label: 'Líquido',
                data: [3800, 5200, 4700, 6400, 7880, 7200, 7600, 8100, 7300, 8400, 9200, 9800],
                borderColor: '#6366f1',
                backgroundColor: gradient,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#6366f1',
                pointHoverBackgroundColor: '#6366f1',
                pointHoverBorderColor: '#6366f1',
                borderWidth: 2.5,
                fill: true,
                tension: 0.35,
                pointRadius: 4,
                pointHoverRadius: 5
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'white',
                titleColor: '#111827',
                bodyColor: '#111827',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                padding: 10,
                displayColors: false,
                callbacks: {
                  label: function(ctx) {
                    const v = ctx.parsed.y || 0;
                    return 'R$ ' + v.toLocaleString('pt-BR') + ',00';
                  }
                }
              }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: '#6b7280', font: { family: 'Inter', size: 11 } }
              },
              y: {
                grid: { color: 'rgba(17,24,39,0.05)' },
                ticks: {
                  color: '#6b7280',
                  font: { family: 'Inter', size: 11 },
                  callback: (value) => 'R$ ' + value / 1000 + 'k'
                },
                suggestedMin: 0
              }
            }
          }
        });
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
      
<div className="mx-auto max-w-none px-4 lg:px-6 py-6">

<header className="flex items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur px-4 md:px-6 py-3 shadow-sm">
<div className="flex items-center gap-3">
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition" id="toggleSidebar">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
<div className="flex items-center gap-2">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white">
<i className="h-4 w-4" data-lucide="lock-keyhole"></i>
</div>
<span className="text-xl md:text-2xl tracking-tight font-semibold">sua marca</span>
</div>
</div>
<div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-4">
<div className="relative flex-1">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-neutral-200 bg-white placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-4 focus:ring-neutral-200/60" placeholder="Buscar" />
</div>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm font-medium hover:bg-neutral-50 transition">
<i className="h-4 w-4" data-lucide="plus"></i>
            Nova Cobrança
          </button>
<button className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 hover:bg-neutral-50 transition">
<i className="h-5 w-5" data-lucide="bell"></i>
</button>
<button className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 hover:bg-neutral-50 transition">
<i className="h-5 w-5" data-lucide="settings"></i>
</button>
<div className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-neutral-200">
<img alt="avatar" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&auto=format&fit=crop" />
</div>
</div>
</header>

<div className="mt-6 grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-12">
<div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
<div className="flex">

<aside className="w-72 shrink-0 border-r border-neutral-200 bg-neutral-50/60 hidden md:flex md:flex-col" id="sidebar">
<div className="px-4 py-4">
<button className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium rounded-lg bg-neutral-900 text-white px-3 py-2.5 hover:opacity-95 transition">
<i className="h-4 w-4" data-lucide="plus"></i>
                    Nova Cobrança
                  </button>
</div>
<nav className="px-2 pb-4 overflow-y-auto">
<ul className="space-y-1 text-[15px]">
<li>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 bg-white border border-neutral-200 shadow-xs">
<i className="h-5 w-5 text-neutral-600" data-lucide="home"></i>
<span className="font-medium">Painel</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white hover:border hover:border-neutral-200 transition">
<i className="h-5 w-5 text-neutral-600" data-lucide="users"></i>
<span className="font-medium">Clientes</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white hover:border hover:border-neutral-200 transition">
<i className="h-5 w-5 text-neutral-600" data-lucide="receipt"></i>
<span className="font-medium">Cobranças</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white hover:border hover:border-neutral-200 transition">
<i className="h-5 w-5 text-neutral-600" data-lucide="wallet"></i>
<span className="font-medium">Pagar</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white hover:border hover:border-neutral-200 transition">
<i className="h-5 w-5 text-neutral-600" data-lucide="send"></i>
<span className="font-medium">Transferir</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white hover:border hover:border-neutral-200 transition">
<i className="h-5 w-5 text-neutral-600" data-lucide="qr-code"></i>
<span className="font-medium">Pix</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white hover:border hover:border-neutral-200 transition">
<i className="h-5 w-5 text-neutral-600" data-lucide="credit-card"></i>
<span className="font-medium">Carteira</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white hover:border hover:border-neutral-200 transition">
<i className="h-5 w-5 text-neutral-600" data-lucide="contactless-payment"></i>
<span className="font-medium">Máquina de cartão</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white hover:border hover:border-neutral-200 transition">
<i className="h-5 w-5 text-neutral-600" data-lucide="building"></i>
<span className="font-medium">Cartões Empresa</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white hover:border hover:border-neutral-200 transition">
<i className="h-5 w-5 text-neutral-600" data-lucide="file-text"></i>
<span className="font-medium">Nota fiscal</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white hover:border hover:border-neutral-200 transition">
<i className="h-5 w-5 text-neutral-600" data-lucide="hand-coins"></i>
<span className="font-medium">Arrecadação</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white hover:border hover:border-neutral-200 transition">
<i className="h-5 w-5 text-neutral-600" data-lucide="trending-up"></i>
<span className="font-medium">Consultar score</span>
<span className="ml-auto text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-1.5 py-0.5">Novo</span>
</a>
</li>
</ul>
</nav>
<div className="mt-auto px-4 py-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50 transition">
<i className="h-4 w-4" data-lucide="chevrons-left"></i>
                    Recolher
                  </button>
</div>
</aside>

<section className="min-h-[720px] flex-1">

<div className="border-b border-neutral-200 px-4 md:px-6 py-4 flex flex-col gap-4">
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-4">
<div className="text-sm">
<p className="text-neutral-500">Saldo na conta</p>
<div className="flex items-baseline gap-2">
<h2 className="text-2xl lg:text-3xl tracking-tight font-semibold">R$ 12.564,35</h2>
<a className="text-sm font-medium text-neutral-600 underline decoration-neutral-300 hover:text-neutral-900" href="#">Ver extrato</a>
</div>
</div>
<div className="hidden sm:block h-10 w-px bg-neutral-200"></div>
<div className="hidden sm:block text-sm">
<div className="text-neutral-500">Banco 045 • Agência 0001</div>
<div className="text-neutral-700">Conta pagamento 99999-9</div>
</div>
</div>
<div className="flex items-center gap-2">
<details className="relative">
<summary className="list-none inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium cursor-pointer hover:bg-neutral-50">
                          Últimos 12 meses
                          <i className="h-4 w-4" data-lucide="chevron-down"></i>
</summary>
<div className="absolute right-0 mt-2 w-44 rounded-lg border border-neutral-200 bg-white shadow-lg p-1">
<button className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-neutral-50">Últimos 30 dias</button>
<button className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-neutral-50">Últimos 3 meses</button>
<button className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-neutral-50">Últimos 12 meses</button>
</div>
</details>
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="download"></i>
                        Exportar
                      </button>
</div>
</div>
</div>

<div className="px-4 md:px-6 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
<button className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 hover:bg-neutral-50 transition">
<div className="h-10 w-10 rounded-lg bg-neutral-900 text-white grid place-items-center">
<i className="h-5 w-5" data-lucide="plus"></i>
</div>
<div>
<p className="text-sm font-medium">Nova cobrança</p>
<span className="text-xs text-neutral-500">Boleto e link</span>
</div>
</button>
<button className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 hover:bg-neutral-50 transition">
<div className="h-10 w-10 rounded-lg bg-neutral-100 text-neutral-800 grid place-items-center">
<i className="h-5 w-5" data-lucide="qr-code"></i>
</div>
<div>
<p className="text-sm font-medium">Pix</p>
<span className="text-xs text-neutral-500">Pagar e receber</span>
</div>
</button>
<button className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 hover:bg-neutral-50 transition">
<div className="h-10 w-10 rounded-lg bg-neutral-100 text-neutral-800 grid place-items-center">
<i className="h-5 w-5" data-lucide="link"></i>
</div>
<div>
<p className="text-sm font-medium">Link de pagamento</p>
<span className="text-xs text-neutral-500">Compartilhar</span>
</div>
</button>
<button className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 hover:bg-neutral-50 transition">
<div className="h-10 w-10 rounded-lg bg-neutral-100 text-neutral-800 grid place-items-center">
<i className="h-5 w-5" data-lucide="banknote"></i>
</div>
<div>
<p className="text-sm font-medium">Arrecadação</p>
<span className="text-xs text-neutral-500">Taxas e multas</span>
</div>
</button>
<button className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 hover:bg-neutral-50 transition">
<div className="h-10 w-10 rounded-lg bg-neutral-100 text-neutral-800 grid place-items-center">
<i className="h-5 w-5" data-lucide="arrow-right-left"></i>
</div>
<div>
<p className="text-sm font-medium">Transferir</p>
<span className="text-xs text-neutral-500">TED, Pix</span>
</div>
</button>
<button className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 hover:bg-neutral-50 transition">
<div className="h-10 w-10 rounded-lg bg-neutral-100 text-neutral-800 grid place-items-center">
<i className="h-5 w-5" data-lucide="file-text"></i>
</div>
<div>
<p className="text-sm font-medium">Pagar boleto</p>
<span className="text-xs text-neutral-500">Ou tributo</span>
</div>
</button>
<button className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 hover:bg-neutral-50 transition">
<div className="h-10 w-10 rounded-lg bg-neutral-100 text-neutral-800 grid place-items-center">
<i className="h-5 w-5" data-lucide="rows"></i>
</div>
<div>
<p className="text-sm font-medium">Parcelar contas</p>
<span className="text-xs text-neutral-500">Em até 12x</span>
</div>
</button>
<button className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 hover:bg-neutral-50 transition">
<div className="h-10 w-10 rounded-lg bg-neutral-100 text-neutral-800 grid place-items-center">
<i className="h-5 w-5" data-lucide="contactless-payment"></i>
</div>
<div>
<p className="text-sm font-medium">Máquina de cartão</p>
<span className="text-xs text-neutral-500">Solicitar</span>
</div>
</button>
</div>

<div className="px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-gradient-to-r from-white to-neutral-50 p-5">
<div className="flex gap-4 items-start">
<div className="h-12 w-12 rounded-xl bg-neutral-900 text-white grid place-items-center shrink-0">
<i className="h-6 w-6" data-lucide="plus"></i>
</div>
<div className="flex-1">
<h3 className="text-lg md:text-xl tracking-tight font-semibold">Nova cobrança</h3>
<p className="text-sm text-neutral-600 mt-1">Cobre um ou mais clientes de uma vez, edite taxas, descontos, multas e a forma de receber. Tudo muito fácil.</p>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-3 py-2 text-sm font-medium">
                            Criar agora
                            <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50">
                            Ver detalhes
                          </button>
</div>
</div>
<img alt="ilustração" className="hidden md:block h-24 w-40 object-cover rounded-lg ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" />
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5">
<p className="text-sm text-neutral-500">Resumo</p>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-600">Bruto</span>
<span className="text-lg font-semibold tracking-tight">R$ 15.800,00</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-600">Líquido</span>
<span className="text-lg font-semibold tracking-tight">R$ 13.708,00</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-600">Ticket médio</span>
<span className="text-lg font-semibold tracking-tight">R$ 1.235,00</span>
</div>
</div>
</div>
</div>

<div className="px-4 md:px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg md:text-xl tracking-tight font-semibold">Suas cobranças</h3>
<div className="flex items-center gap-3 text-xs">
<span className="inline-flex items-center gap-1 text-neutral-600"><span className="h-2 w-2 rounded-full bg-amber-400"></span>Previstas</span>
<span className="inline-flex items-center gap-1 text-neutral-600"><span className="h-2 w-2 rounded-full bg-rose-400"></span>Atrasadas</span>
<span className="inline-flex items-center gap-1 text-neutral-600"><span className="h-2 w-2 rounded-full bg-emerald-400"></span>Pagas</span>
<span className="inline-flex items-center gap-1 text-neutral-600"><span className="h-2 w-2 rounded-full bg-indigo-500"></span>Líquido</span>
</div>
</div>

<div className="mt-6">
<div className="relative h-56 sm:h-64">
<canvas id="chargesChart"></canvas>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5">
<h3 className="text-lg tracking-tight font-semibold">Últimas movimentações</h3>
<ul className="mt-4 divide-y divide-neutral-200">
<li className="py-3 flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-100 grid place-items-center">
<i className="h-4 w-4 text-emerald-600" data-lucide="arrow-down-right"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Recebido via Pix</p>
<p className="text-xs text-neutral-500">Hoje, 09:20</p>
</div>
<span className="text-sm font-semibold">+ R$ 420,00</span>
</li>
<li className="py-3 flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-100 grid place-items-center">
<i className="h-4 w-4 text-rose-600" data-lucide="arrow-up-right"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Pagamento de boleto</p>
<p className="text-xs text-neutral-500">Ontem, 17:05</p>
</div>
<span className="text-sm font-semibold">- R$ 180,00</span>
</li>
<li className="py-3 flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-100 grid place-items-center">
<i className="h-4 w-4 text-neutral-700" data-lucide="credit-card"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Taxa de maquininha</p>
<p className="text-xs text-neutral-500">Seg, 14:12</p>
</div>
<span className="text-sm font-semibold">- R$ 23,90</span>
</li>
</ul>
</div>
</div>

<div className="px-4 md:px-6 pb-8">
<div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-3">
<img alt="banner" className="md:col-span-1 w-full h-48 md:h-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop" />
<div className="md:col-span-2 p-6">
<h3 className="text-xl tracking-tight font-semibold">Empréstimo consignado</h3>
<p className="text-sm text-neutral-600 mt-2">Promova o bem-estar financeiro e ajude sua equipe a fugir dos juros altos. Simule e contrate sem burocracia.</p>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-3 py-2 text-sm font-medium">
                            Simular agora
                            <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50">
                            Saiba mais
                          </button>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>

</div>
</div>


    </>
  );
}
