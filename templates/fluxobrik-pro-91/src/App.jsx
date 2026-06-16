import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Number Counter Animation
        function startCounters() {
            document.querySelectorAll('.counter').forEach(el => {
                let target = parseFloat(el.getAttribute('data-target'));
                let duration = 2000;
                let start = 0;
                let startTime = null;

                function step(timestamp) {
                    if (!startTime) startTime = timestamp;
                    let progress = Math.min((timestamp - startTime) / duration, 1);
                    // Ease out expo
                    let ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    let current = start + (target - start) * ease;
                    
                    el.innerText = current.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: 0});
                    
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        el.innerText = target.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: 0});
                    }
                }
                window.requestAnimationFrame(step);
            });
        }

        // Progress Bar Animation
        setTimeout(() => {
            const goal = document.getElementById('goalProgress');
            if(goal) goal.style.width = '81%';
            
            const stock = document.getElementById('stockProgress');
            if(stock) stock.style.width = '65%';
        }, 500);

        // Header Filter Interactivity
        function moveFilter(btn, pos) {
            const bg = document.getElementById('dateFilterBg');
            bg.style.transform = `translateX(${pos}px)`;
            bg.style.width = `${btn.offsetWidth}px`;
            
            // Siblings color logic
            btn.parentElement.querySelectorAll('button').forEach(b => {
                b.classList.remove('text-white');
                b.classList.add('text-zinc-400');
            });
            btn.classList.remove('text-zinc-400');
            btn.classList.add('text-white');

            triggerAction('Filtro atualizado com sucesso!', 'success');
        }

        // Toast Notification System
        function triggerAction(message, type = 'success') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            let icon = 'solar:check-circle-linear';
            let colorClass = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
            
            if (type === 'warning') {
                icon = 'solar:danger-circle-linear';
                colorClass = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
            } else if (type === 'danger') {
                icon = 'solar:shield-warning-linear';
                colorClass = 'text-red-400 bg-red-500/10 border-red-500/20';
            }

            toast.className = `toast-enter flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-xl bg-[#101014]/90 shadow-[0_10px_40px_rgba(0,0,0,0.5)] ${colorClass.replace('bg-', 'dummy-')}`; // Using bg on icon container
            
            toast.innerHTML = `
                <div class="w-8 h-8 rounded-lg flex items-center justify-center ${colorClass}">
                    <iconify-icon icon="${icon}" class="text-lg"></iconify-icon>
                </div>
                <span class="text-sm font-medium text-white">${message}</span>
            `;

            container.appendChild(toast);

            setTimeout(() => {
                toast.classList.remove('toast-enter');
                toast.classList.add('toast-leave');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // Drawer System
        function openDrawer(title, status = 'success') {
            document.getElementById('drawer-title').innerText = title;
            document.getElementById('drawer-avatar').innerText = title.substring(0,2).toUpperCase();
            
            const backdrop = document.getElementById('drawer-backdrop');
            const drawer = document.getElementById('side-drawer');
            
            backdrop.classList.remove('opacity-0', 'pointer-events-none');
            backdrop.classList.add('opacity-100', 'pointer-events-auto');
            
            drawer.classList.remove('translate-x-full');

            // Inject Timeline with cascade animation
            const timeline = document.getElementById('drawer-timeline');
            timeline.innerHTML = '';
            
            const items = [
                { date: '15 Ago', status: 'pago', value: 'R$ 800,00' },
                { date: '30 Ago', status: 'pago', value: 'R$ 800,00' },
                { date: '15 Set', status: status === 'danger' ? 'atrasado' : (status === 'warning' ? 'hoje' : 'pendente'), value: 'R$ 800,00' },
                { date: '30 Set', status: 'pendente', value: 'R$ 800,00' }
            ];

            items.forEach((item, index) => {
                let color = 'bg-white/10 border-white/20 text-zinc-500';
                let icon = 'solar:clock-circle-linear';
                
                if(item.status === 'pago') { color = 'bg-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.5)]'; icon = 'solar:check-read-linear'; }
                if(item.status === 'atrasado') { color = 'bg-red-500 text-white shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse'; icon = 'solar:shield-warning-linear'; }
                if(item.status === 'hoje') { color = 'bg-amber-500 text-black shadow-[0_0_10px_rgba(245,158,11,0.5)]'; icon = 'solar:danger-triangle-linear'; }

                setTimeout(() => {
                    timeline.innerHTML += `
                        <div class="timeline-point relative flex items-start gap-4 opacity-0 translate-y-4 animate-[slideInRight_0.4s_ease-out_forwards]">
                            <div class="absolute -left-[27px] top-1 w-6 h-6 rounded-full ${color} flex items-center justify-center z-10 border-2 border-[#050508] transition-transform hover:scale-125 cursor-pointer">
                                <iconify-icon icon="${icon}" class="text-xs"></iconify-icon>
                            </div>
                            <div class="flex-1 bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-3 border border-white/5 cursor-pointer group">
                                <div class="flex justify-between items-center mb-1">
                                    <span class="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">Parcela ${index+1}/5</span>
                                    <span class="text-[10px] text-zinc-500">${item.date}</span>
                                </div>
                                <div class="text-sm font-medium text-white">${item.value}</div>
                            </div>
                        </div>
                    `;
                }, index * 100);
            });
        }

        function closeDrawer() {
            const backdrop = document.getElementById('drawer-backdrop');
            const drawer = document.getElementById('side-drawer');
            
            backdrop.classList.remove('opacity-100', 'pointer-events-auto');
            backdrop.classList.add('opacity-0', 'pointer-events-none');
            
            drawer.classList.add('translate-x-full');
        }

        // Initialize
        window.addEventListener('load', () => {
            setTimeout(startCounters, 300);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none transition-all duration-1000"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none transition-all duration-1000"></div>
<aside className="w-64 h-full flex flex-col border-r border-white/5 bg-[#050508]/80 backdrop-blur-xl z-20 relative transition-transform">

<div className="h-20 flex items-center px-6 gap-3 border-b border-white/5 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
<span className="text-white font-semibold tracking-tighter text-sm">FB</span>
</div>
<div className="flex flex-col">
<span className="font-semibold text-sm tracking-tight text-zinc-100 group-hover:text-white transition-colors">FluxoBrik <span className="text-indigo-400">PRO</span></span>
<span className="text-[0.65rem] text-zinc-500 font-medium uppercase tracking-widest">Financial Control</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1">
<div className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-2 px-3">Menu Principal</div>
<a className="relative flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5 text-zinc-100 font-medium text-sm transition-all border border-white/5 shadow-sm group" href="#">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-indigo-500 rounded-r-full shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all"></div>
<iconify-icon className="text-lg text-indigo-400 group-hover:scale-110 transition-transform duration-300" icon="solar:widget-5-linear"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 hover:text-zinc-100 hover:bg-white/[0.03] hover:translate-x-1 transition-all duration-300 group text-sm text-zinc-400 rounded-lg pt-2.5 pr-3 pb-2.5 pl-3" href="#">
<iconify-icon className="text-lg group-hover:text-zinc-200 group-hover:scale-110 transition-all duration-300" icon="solar:box-linear"></iconify-icon>
                Produtos
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.03] hover:translate-x-1 transition-all duration-300 text-sm group" href="#">
<iconify-icon className="text-lg group-hover:text-zinc-200 group-hover:scale-110 transition-all duration-300" icon="solar:cart-large-2-linear"></iconify-icon>
                Vendas
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.03] hover:translate-x-1 transition-all duration-300 text-sm group relative" href="#">
<iconify-icon className="text-lg group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300" icon="solar:hand-money-linear"></iconify-icon>
                Controle de Fiado
                <span className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse"></span>
</a>
<div className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mt-6 mb-2 px-3">Análise &amp; Setup</div>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.03] hover:translate-x-1 transition-all duration-300 text-sm group" href="#">
<iconify-icon className="text-lg group-hover:text-zinc-200 group-hover:scale-110 transition-all duration-300" icon="solar:chart-square-linear"></iconify-icon>
                Relatórios
            </a>
</nav>

<div className="p-4 border-t border-white/5">
<button className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 transition-colors text-left group active:scale-95 duration-200">
<div className="relative">
<img alt="User" className="w-8 h-8 rounded-full border border-white/10 object-cover group-hover:border-indigo-500/50 transition-colors" src="https://i.pravatar.cc/150?img=11"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#050508] rounded-full"></div>
</div>
<div className="flex-1 flex flex-col">
<span className="text-sm font-medium text-zinc-200 leading-tight group-hover:text-white transition-colors">Alexandre M.</span>
<span className="text-xs text-zinc-500">Plano Ultimate</span>
</div>
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="solar:alt-arrow-up-linear"></iconify-icon>
</button>
</div>
</aside>
<main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')]">
<header className="sticky top-0 z-10 bg-[#030305]/80 backdrop-blur-xl border-b border-white/5 px-8 py-5 flex items-center justify-between transition-all duration-300" id="mainHeader">
<div className="flex flex-col opacity-0 translate-y-2 animate-[slideInRight_0.5s_ease-out_forwards]">
<h1 className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2">
                    Visão Geral
                </h1>
<p className="text-sm text-zinc-400 mt-0.5">Acompanhamento financeiro e projeção de recebíveis.</p>
</div>
<div className="flex items-center gap-4 opacity-0 translate-y-2 animate-[slideInRight_0.5s_ease-out_0.1s_forwards]">
<div className="flex items-center bg-[#101014] border border-white/10 rounded-lg p-1 shadow-inner relative">
<div className="absolute inset-y-1 left-1 w-[88px] bg-white/10 rounded-md shadow-sm transition-all duration-300 ease-out" id="dateFilterBg"></div>
<button className="relative z-10 px-3 py-1.5 text-xs font-medium rounded-md text-white transition-colors w-[88px]" onclick="moveFilter(this, 0)">Mês Atual</button>
<button className="relative z-10 px-3 py-1.5 text-xs font-medium rounded-md text-zinc-400 hover:text-zinc-200 transition-colors w-[114px]" onclick="moveFilter(this, 88)">Últimos 30</button>
</div>
</div>
</header>
<div className="p-8 max-w-[1600px] mx-auto flex flex-col gap-8 pb-32">

<div className="bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/20 rounded-xl p-4 flex items-center justify-between shadow-[0_0_30px_rgba(245,158,11,0.05)] opacity-0 translate-y-4 animate-[slideInRight_0.6s_ease-out_0.2s_forwards]">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
<iconify-icon className="text-xl animate-[wiggle_1s_ease-in-out_infinite]" icon="solar:bell-bing-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-white tracking-tight">Foco de Recebimento</h3>
<p className="text-xs text-amber-400/80 mt-0.5">Você tem <strong className="text-amber-400">R$ 1.800,00</strong> em parcelas atrasadas que precisam de atenção hoje.</p>
</div>
</div>
<button className="px-4 py-2 bg-amber-500 text-amber-950 text-xs font-semibold rounded-lg hover:bg-amber-400 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] active:scale-95 duration-200" onclick="triggerAction('Cobranças enviadas em massa!', 'success')">
                    Cobrar Todos
                </button>
</div>

<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
<div className="premium-panel glow-green rounded-2xl p-6 relative overflow-hidden cursor-pointer group opacity-0 translate-y-4 animate-[slideInRight_0.5s_ease-out_0.2s_forwards]" onclick="openDrawer('Lucro Líquido Detalhado')">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2 text-zinc-400 font-medium text-sm group-hover:text-zinc-300 transition-colors">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:graph-up-linear"></iconify-icon>
</div>
                            Lucro Líquido
                        </div>
<iconify-icon className="text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1 relative z-10">
<span className="text-3xl font-semibold tracking-tight text-white flex items-baseline">
                            R$ <span className="counter mx-1" data-target="14850">0</span><span className="text-zinc-500 text-xl">,00</span>
</span>
<div className="flex items-center gap-2 mt-2">
<span className="flex items-center text-xs font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
<iconify-icon className="mr-0.5" icon="solar:arrow-up-linear"></iconify-icon> 12.5%
                            </span>
</div>
</div>
</div>
<div className="premium-panel glow-blue rounded-2xl p-6 relative overflow-hidden cursor-pointer group opacity-0 translate-y-4 animate-[slideInRight_0.5s_ease-out_0.3s_forwards]">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2 text-zinc-400 font-medium text-sm group-hover:text-zinc-300 transition-colors">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon>
</div>
                            Faturamento
                        </div>
</div>
<div className="flex flex-col gap-1 relative z-10">
<span className="text-3xl font-semibold tracking-tight text-white flex items-baseline">
                            R$ <span className="counter mx-1" data-target="32400">0</span><span className="text-zinc-500 text-xl">,50</span>
</span>
<div className="flex items-center gap-2 mt-2">
<span className="flex items-center text-xs font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
<iconify-icon className="mr-0.5" icon="solar:arrow-up-linear"></iconify-icon> 8.2%
                            </span>
</div>
</div>
</div>
<div className="premium-panel glow-amber rounded-2xl p-6 relative overflow-hidden cursor-pointer group ring-1 ring-amber-500/30 opacity-0 translate-y-4 animate-[slideInRight_0.5s_ease-out_0.4s_forwards]" onclick="document.getElementById('fiado-section').scrollIntoView({behavior: 'smooth'})">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:bg-amber-500/20 transition-colors duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2 text-zinc-400 font-medium text-sm group-hover:text-zinc-300 transition-colors">
<div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-lg animate-[spin_10s_linear_infinite]" icon="solar:clock-circle-linear"></iconify-icon>
</div>
                            A Receber (Ativo)
                        </div>
</div>
<div className="flex flex-col gap-1 relative z-10">
<span className="text-3xl font-semibold tracking-tight text-white flex items-baseline">
                            R$ <span className="counter mx-1" data-target="8240">0</span><span className="text-zinc-500 text-xl">,00</span>
</span>
<div className="flex items-center justify-between mt-2">
<span className="text-xs text-amber-400/80 font-medium px-2 py-0.5 rounded bg-amber-500/10">14 parcelas pendentes</span>
</div>
</div>
</div>
<div className="premium-panel glow-purple rounded-2xl p-6 relative overflow-hidden cursor-pointer group opacity-0 translate-y-4 animate-[slideInRight_0.5s_ease-out_0.5s_forwards]">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2 text-zinc-400 font-medium text-sm group-hover:text-zinc-300 transition-colors">
<div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
                            Valor em Estoque
                        </div>
</div>
<div className="flex flex-col gap-1 relative z-10">
<span className="text-3xl font-semibold tracking-tight text-white flex items-baseline">
                            R$ <span className="counter mx-1" data-target="11300">0</span><span className="text-zinc-500 text-xl">,00</span>
</span>
<div className="w-full bg-black/50 rounded-full h-1.5 mt-3 overflow-hidden shadow-inner relative">
<div className="bg-gradient-to-r from-purple-600 to-fuchsia-500 h-1.5 rounded-full w-0 transition-all duration-1000 ease-out" id="stockProgress"></div>
<div className="absolute inset-0 shimmer"></div>
</div>
<span className="text-xs text-zinc-500 mt-1">65% do ideal projetado</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 xl:grid-cols-3 gap-5">
<div className="xl:col-span-2 premium-panel rounded-2xl p-6 flex flex-col group opacity-0 translate-y-4 animate-[slideInRight_0.5s_ease-out_0.6s_forwards]">
<div className="flex justify-between items-end mb-8 relative z-10">
<div>
<h2 className="text-lg font-semibold tracking-tight text-white">Evolução de Caixa</h2>
<p className="text-sm text-zinc-400">Comparativo entre faturamento e recebimentos.</p>
</div>
<div className="flex items-center gap-4 text-xs font-medium bg-black/20 p-2 rounded-lg border border-white/5">
<div className="flex items-center gap-2 text-zinc-300 hover:text-white cursor-pointer transition-colors"><span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span> Faturamento</div>
<div className="flex items-center gap-2 text-zinc-300 hover:text-white cursor-pointer transition-colors"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span> Recebido</div>
</div>
</div>
<div className="flex-1 relative w-full h-[240px] mt-auto group-hover:scale-[1.01] transition-transform duration-500">

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none flex flex-col gap-1 items-center">
<span className="text-[10px] font-medium text-zinc-500 uppercase">15 Ago</span>
<div className="flex gap-3">
<span className="text-blue-600">R$ 22.5K</span>
<span className="text-emerald-600">R$ 18.2K</span>
</div>
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
</div>

<div className="absolute top-0 bottom-6 left-1/2 w-px bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
<div className="absolute top-1/3 left-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-black -translate-x-1.5 -translate-y-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
<div className="absolute top-[45%] left-1/2 w-3 h-3 bg-emerald-500 rounded-full border-2 border-black -translate-x-1.5 -translate-y-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>

<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-zinc-500 font-medium pb-6 z-0">
<span>40k</span><span>30k</span><span>20k</span><span>10k</span><span>0</span>
</div>
<div className="absolute left-8 right-0 top-0 h-full flex flex-col justify-between pb-6 z-0">
<div className="w-full border-t border-white/[0.03]"></div>
<div className="w-full border-t border-white/[0.03]"></div>
<div className="w-full border-t border-white/[0.03]"></div>
<div className="w-full border-t border-white/[0.03]"></div>
<div className="w-full border-t border-white/[0.03]"></div>
</div>
<svg className="absolute left-8 right-0 top-0 w-[calc(100%-2rem)] h-[calc(100%-1.5rem)] overflow-visible z-0" preserveaspectratio="none" viewbox="0 0 1000 200">
<defs>
<lineargradient id="blueGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(59, 130, 246, 0.4)"></stop>
<stop offset="100%" stop-color="rgba(59, 130, 246, 0)"></stop>
</lineargradient>
<lineargradient id="greenGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(16, 185, 129, 0.4)"></stop>
<stop offset="100%" stop-color="rgba(16, 185, 129, 0)"></stop>
</lineargradient>
</defs>
<path className="opacity-50" d="M0,180 C100,160 200,190 300,120 C400,50 500,110 600,80 C700,50 800,90 900,40 C950,15 1000,20 1000,20 L1000,200 L0,200 Z" fill="url(#blueGrad)"></path>
<path className="chart-line drop-shadow-[0_4px_12px_rgba(59,130,246,0.6)]" d="M0,180 C100,160 200,190 300,120 C400,50 500,110 600,80 C700,50 800,90 900,40 C950,15 1000,20 1000,20" fill="none" stroke="#3b82f6" strokeWidth="3"></path>
<path className="opacity-50" d="M0,190 C150,180 250,195 350,150 C450,105 550,140 650,100 C750,60 850,110 950,70 C980,58 1000,60 1000,60 L1000,200 L0,200 Z" fill="url(#greenGrad)"></path>
<path className="chart-line drop-shadow-[0_4px_12px_rgba(16,185,129,0.6)]" d="M0,190 C150,180 250,195 350,150 C450,105 550,140 650,100 C750,60 850,110 950,70 C980,58 1000,60 1000,60" fill="none" stroke="#10b981" strokeWidth="3"></path>
</svg>
<div className="absolute left-8 right-0 bottom-0 flex justify-between text-[10px] text-zinc-500 font-medium translate-y-6">
<span className="hover:text-white transition-colors cursor-pointer">01 Ago</span>
<span className="hover:text-white transition-colors cursor-pointer">08 Ago</span>
<span className="text-white bg-white/10 px-2 py-0.5 rounded cursor-pointer">15 Ago</span>
<span className="hover:text-white transition-colors cursor-pointer">22 Ago</span>
<span className="hover:text-white transition-colors cursor-pointer">30 Ago</span>
</div>
</div>
</div>
<div className="flex flex-col gap-5 opacity-0 translate-y-4 animate-[slideInRight_0.5s_ease-out_0.7s_forwards]">
<div className="premium-panel glow-purple rounded-2xl p-6 relative overflow-hidden flex-1 group ring-1 ring-indigo-500/30">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/30 transition-colors duration-500"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:target-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-white">Meta Mensal</h3>
<p className="text-xs text-zinc-400">Faturamento Bruto</p>
</div>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-semibold tracking-tight text-white"><span className="counter" data-target="81">0</span>%</span>
<span className="text-sm text-zinc-400 font-medium">concluído</span>
</div>
<div className="w-full h-3 bg-black/50 rounded-full p-0.5 border border-white/5 mb-3 shadow-inner">
<div className="h-full bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full w-0 transition-all duration-1000 ease-out relative shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.8)]" id="goalProgress">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full mr-0.5 shadow-[0_0_5px_white] animate-pulse"></div>
</div>
</div>
<div className="flex justify-between text-xs font-medium">
<span className="text-zinc-300">R$ 32.400 atuais</span>
<span className="text-zinc-500">Objetivo: R$ 40.000</span>
</div>
<div className="mt-6 pt-5 border-t border-white/5 flex items-start gap-3">
<div className="mt-0.5 text-amber-400 bg-amber-400/10 p-1.5 rounded-md">
<iconify-icon icon="solar:lightbulb-linear"></iconify-icon>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">
                                Você precisa vender <strong className="text-zinc-200">R$ 7.600</strong> nos próximos 4 dias para bater a meta.
                            </p>
</div>
</div>
<button className="premium-panel rounded-2xl p-4 flex items-center justify-between hover:bg-white/[0.05] transition-all group text-left active:scale-95 duration-200 border border-white/5 hover:border-white/20" onclick="triggerAction('Relatório DRE gerado com sucesso!', 'success')">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Gerar Relatório DRE</h4>
<p className="text-xs text-zinc-500">PDF ou Planilha detalhada</p>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-all" icon="solar:download-linear"></iconify-icon>
</div>
</button>
</div>
</section>

<section className="mt-4 opacity-0 translate-y-4 animate-[slideInRight_0.5s_ease-out_0.8s_forwards]" id="fiado-section">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-xl font-semibold tracking-tight text-white flex items-center gap-2">
                            Controle de Recebimentos <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 uppercase tracking-wider shadow-[0_0_10px_rgba(245,158,11,0.2)]">Fiado</span>
</h2>
<p className="text-sm text-zinc-400 mt-1">Clique nos cards para gerenciar parcelas e enviar cobranças.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

<div className="premium-panel glow-amber rounded-2xl p-5 border border-amber-500/30 relative overflow-hidden group cursor-pointer" onclick="openDrawer('Roberto Carlos', 'warning')">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Client" className="w-10 h-10 rounded-full border border-white/10 group-hover:border-amber-500/50 transition-colors" src="https://i.pravatar.cc/150?img=32"/>
<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-[#18181b]"></div>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">Roberto Carlos</h4>
<p className="text-xs text-zinc-500">iPhone 13 Pro Max</p>
</div>
</div>
<span className="px-2 py-1 rounded-md text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
<iconify-icon className="animate-pulse" icon="solar:danger-circle-linear"></iconify-icon> Vence Hoje
                            </span>
</div>
<div className="flex justify-between items-end mb-4 bg-black/30 p-3 rounded-lg border border-white/5 group-hover:border-amber-500/20 transition-colors">
<div>
<span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider block mb-0.5">Saldo Devedor</span>
<span className="text-lg font-semibold text-white">R$ 2.400,00</span>
</div>
<div className="text-right">
<span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider block mb-0.5">Valor da Parcela</span>
<span className="text-sm font-medium text-amber-400">R$ 800,00</span>
</div>
</div>
<div className="mb-2 transition-all duration-300">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400">Progresso (Quinzenal)</span>
<span className="text-zinc-200 font-medium">2/5 pagas</span>
</div>
<div className="flex gap-1 h-2">
<div className="flex-1 bg-emerald-500 rounded-l-full shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<div className="flex-1 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<div className="flex-1 bg-amber-500 relative">
<span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-[#18181b] animate-ping"></span>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-[#18181b]"></span>
</div>
<div className="flex-1 bg-white/10"></div>
<div className="flex-1 bg-white/10 rounded-r-full"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#101014] via-[#101014]/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
<button className="flex-1 py-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors active:scale-95" onclick="event.stopPropagation(); triggerAction('Cobrança via WhatsApp enviada!', 'success')">
<iconify-icon className="text-sm" icon="solar:chat-round-line-linear"></iconify-icon> Cobrar
                            </button>
<button className="py-2 px-3 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold transition-colors active:scale-95" onclick="event.stopPropagation(); triggerAction('Parcela marcada como paga.', 'success')">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon> Pago
                            </button>
</div>
</div>

<div className="premium-panel rounded-2xl p-5 border border-white/5 hover:border-indigo-500/30 relative overflow-hidden group cursor-pointer" onclick="openDrawer('Maria Cecília', 'success')">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-white/10 bg-indigo-900/50 flex items-center justify-center text-indigo-300 font-semibold text-sm group-hover:border-indigo-500/50 transition-colors">
                                    MC
                                </div>
<div>
<h4 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">Maria Cecília</h4>
<p className="text-xs text-zinc-500">MacBook Air M1</p>
</div>
</div>
<span className="px-2 py-1 rounded-md text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Em dia
                            </span>
</div>
<div className="flex justify-between items-end mb-4 bg-black/30 p-3 rounded-lg border border-white/5">
<div>
<span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider block mb-0.5">Saldo Devedor</span>
<span className="text-lg font-semibold text-white">R$ 4.500,00</span>
</div>
<div className="text-right">
<span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider block mb-0.5">Próx. Vencimento</span>
<span className="text-sm font-medium text-zinc-300">12 Set (Mensal)</span>
</div>
</div>
<div className="mb-2">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400">Progresso</span>
<span className="text-zinc-200 font-medium">1/10 pagas</span>
</div>
<div className="w-full bg-black/50 rounded-full h-2 overflow-hidden shadow-inner">
<div className="bg-emerald-500 h-2 rounded-full w-[10%] shadow-[0_0_8px_rgba(16,185,129,0.8)] relative">
<div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-r from-transparent to-white/50 animate-pulse"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#101014] via-[#101014]/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-end">
<button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-2">
                                Ver Timeline <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="premium-panel glow-red rounded-2xl p-5 border border-red-500/40 relative overflow-hidden bg-gradient-to-b from-red-500/[0.03] to-transparent group cursor-pointer" onclick="openDrawer('Carlos Eduardo', 'danger')">
<div className="absolute top-0 left-0 w-full h-1 bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<img alt="Client" className="w-10 h-10 rounded-full border border-red-500/30 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://i.pravatar.cc/150?img=12"/>
<div>
<h4 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">Carlos Eduardo</h4>
<p className="text-xs text-zinc-500">PlayStation 5</p>
</div>
</div>
<span className="px-2 py-1 rounded-md text-[10px] font-semibold bg-red-500/10 text-red-400 border border-red-500/20 flex items-center gap-1 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon> Atraso 5 dias
                            </span>
</div>
<div className="flex justify-between items-end mb-4 bg-red-950/30 p-3 rounded-lg border border-red-500/20">
<div>
<span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider block mb-0.5">Saldo Devedor</span>
<span className="text-lg font-semibold text-red-100">R$ 1.200,00</span>
</div>
<div className="text-right">
<span className="text-[10px] text-red-400/80 font-medium uppercase tracking-wider block mb-0.5">Valor Atrasado</span>
<span className="text-sm font-bold text-red-400">R$ 600,00</span>
</div>
</div>
<div className="mb-2">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400">Progresso (Semanal)</span>
<span className="text-zinc-200 font-medium">3/5 pagas</span>
</div>
<div className="flex gap-1 h-2">
<div className="flex-1 bg-emerald-500 rounded-l-full"></div>
<div className="flex-1 bg-emerald-500"></div>
<div className="flex-1 bg-emerald-500"></div>
<div className="flex-1 bg-red-500 relative shadow-[0_0_8px_rgba(239,68,68,0.6)]">
<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#18181b] animate-ping"></span>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#18181b]"></span>
</div>
<div className="flex-1 bg-white/10 rounded-r-full"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#2a0808] via-[#100505]/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
<button className="flex-1 py-2 bg-red-500 hover:bg-red-400 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors active:scale-95 shadow-[0_0_10px_rgba(239,68,68,0.4)]" onclick="event.stopPropagation(); triggerAction('Aviso de suspensão enviado.', 'danger')">
<iconify-icon className="text-sm" icon="solar:bell-bing-linear"></iconify-icon> Notificação Forte
                            </button>
</div>
</div>
</div>
</section>
</div>
</main>

<div className="fixed bottom-8 right-8 z-40 group">
<div className="absolute bottom-16 right-0 flex flex-col gap-3 items-end opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-4 group-hover:translate-y-0">
<button className="flex items-center gap-3 hover:scale-105 transition-transform origin-right" onclick="triggerAction('Abrindo Nova Venda...')">
<span className="bg-[#101014] text-zinc-300 text-xs px-3 py-1.5 rounded-md border border-white/10 shadow-lg font-medium">Nova Venda</span>
<div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.5)] border border-indigo-400/30">
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
</div>
</button>
<button className="flex items-center gap-3 hover:scale-105 transition-transform origin-right delay-75" onclick="triggerAction('Abrindo Novo Cliente...')">
<span className="bg-[#101014] text-zinc-300 text-xs px-3 py-1.5 rounded-md border border-white/10 shadow-lg font-medium">Novo Cliente</span>
<div className="w-10 h-10 rounded-full bg-zinc-800 text-white flex items-center justify-center shadow-lg border border-white/10">
<iconify-icon className="text-xl" icon="solar:user-plus-rounded-linear"></iconify-icon>
</div>
</button>
</div>
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-[0_0_25px_rgba(99,102,241,0.6)] hover:shadow-[0_0_35px_rgba(99,102,241,0.8)] transition-all duration-300 group-hover:rotate-45 relative z-10 border border-white/10">
<iconify-icon className="text-2xl" icon="solar:add-linear"></iconify-icon>
</button>
</div>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none" id="toast-container"></div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop" onclick="closeDrawer()"></div>
<div className="fixed top-0 right-0 w-full md:w-[450px] h-full bg-[#050508] border-l border-white/10 z-50 transform translate-x-full transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col" id="side-drawer">
<div className="p-6 border-b border-white/5 flex items-center justify-between bg-black/20">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-semibold text-lg" id="drawer-avatar">
                    RC
                </div>
<div>
<h2 className="text-lg font-semibold text-white tracking-tight" id="drawer-title">Roberto Carlos</h2>
<p className="text-xs text-zinc-400">Cliente desde Mar/2023</p>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors" onclick="closeDrawer()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 scroll-smooth">
<div className="bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 rounded-xl p-5 mb-8">
<span className="text-xs text-indigo-400 font-medium uppercase tracking-wider mb-1 block">Produto Adquirido</span>
<h3 className="text-base font-semibold text-white mb-4">iPhone 13 Pro Max - 256GB</h3>
<div className="grid grid-cols-2 gap-4">
<div>
<span className="text-[10px] text-zinc-500 uppercase tracking-wide block mb-1">Valor Total</span>
<span className="text-sm font-medium text-white">R$ 4.000,00</span>
</div>
<div>
<span className="text-[10px] text-zinc-500 uppercase tracking-wide block mb-1">Restante</span>
<span className="text-sm font-bold text-amber-400">R$ 2.400,00</span>
</div>
</div>
</div>
<h3 className="text-sm font-semibold text-zinc-200 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:history-linear"></iconify-icon> Timeline de Pagamentos
            </h3>
<div className="relative pl-4 border-l-2 border-white/5 ml-2 flex flex-col gap-6" id="drawer-timeline">

</div>
</div>
<div className="p-6 border-t border-white/5 bg-black/40 flex gap-3">
<button className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-medium transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2" onclick="triggerAction('Mensagem enviada', 'success'); closeDrawer()">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon> Cobrar WhatsApp
            </button>
<button className="py-3 px-4 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-medium transition-colors border border-white/10" onclick="closeDrawer()">
<iconify-icon className="text-lg" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
</div>



    </>
  );
}
