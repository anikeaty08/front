import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchView(view) {
            // Alternar containers
            document.getElementById('view-dashboard').style.display = view === 'dashboard' ? 'flex' : 'none';
            document.getElementById('view-obras').style.display = view === 'obras' ? 'flex' : 'none';
            
            // Referências Nav Desktop
            const navDash = document.getElementById('nav-dashboard');
            const navObras = document.getElementById('nav-obras');
            const iconDash = document.getElementById('icon-dashboard');
            const iconObras = document.getElementById('icon-obras');
            const borderDash = document.getElementById('border-dashboard');
            const borderObras = document.getElementById('border-obras');

            // Referências Nav Mobile
            const mobDash = document.getElementById('mob-nav-dash');
            const mobObras = document.getElementById('mob-nav-obras');

            if(view === 'dashboard') {
                // Desktop Ativo
                navDash.classList.add('bg-[#D97706]/[0.08]', 'text-[#FAFAF9]');
                navDash.classList.remove('text-[#A8A29E]');
                iconDash.classList.add('text-[#D97706]');
                borderDash.style.display = 'block';

                // Desktop Inativo
                navObras.classList.remove('bg-[#D97706]/[0.08]', 'text-[#FAFAF9]');
                navObras.classList.add('text-[#A8A29E]');
                iconObras.classList.remove('text-[#D97706]');
                borderObras.style.display = 'none';

                // Mobile
                mobDash.classList.replace('text-[#A8A29E]', 'text-[#D97706]');
                mobObras.classList.replace('text-[#D97706]', 'text-[#A8A29E]');
            } else {
                // Desktop Ativo
                navObras.classList.add('bg-[#D97706]/[0.08]', 'text-[#FAFAF9]');
                navObras.classList.remove('text-[#A8A29E]');
                iconObras.classList.add('text-[#D97706]');
                borderObras.style.display = 'block';

                // Desktop Inativo
                navDash.classList.remove('bg-[#D97706]/[0.08]', 'text-[#FAFAF9]');
                navDash.classList.add('text-[#A8A29E]');
                iconDash.classList.remove('text-[#D97706]');
                borderDash.style.display = 'none';

                // Mobile
                mobObras.classList.replace('text-[#A8A29E]', 'text-[#D97706]');
                mobDash.classList.replace('text-[#D97706]', 'text-[#A8A29E]');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0"></div>
<div className="flex h-screen w-full relative z-10">

<aside className="hidden md:flex w-64 bg-[#0C0A09] flex-col justify-between shrink-0">
<div>

<div className="h-16 flex items-center px-6">
<span className="font-serif text-xl tracking-tighter text-[#FAFAF9] font-medium">ArqTalk</span>
</div>

<nav className="px-3 py-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 bg-[#D97706]/[0.08] text-[#FAFAF9] transition-colors rounded-md group relative" href="#" id="nav-dashboard" onclick="switchView('dashboard')">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#D97706]" id="border-dashboard"></div>
<iconify-icon className="text-lg text-[#D97706]" icon="solar:widget-3-linear" id="icon-dashboard"></iconify-icon>
<span className="font-mono text-xs">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-[#A8A29E] hover:text-[#FAFAF9] hover:bg-white/[0.03] transition-colors rounded-md group relative" href="#" id="nav-obras" onclick="switchView('obras')">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#D97706]" id="border-obras" style={{display: 'none'}}></div>
<iconify-icon className="text-lg opacity-80 group-hover:opacity-100" icon="solar:buildings-2-linear" id="icon-obras"></iconify-icon>
<span className="font-mono text-xs">Obras Ativas</span>
</a>

<a className="flex items-center gap-3 px-3 py-2 text-[#A8A29E] hover:text-[#FAFAF9] hover:bg-white/[0.03] transition-colors rounded-md group" href="#">
<div className="relative">
<iconify-icon className="text-lg text-[#D97706] opacity-80 group-hover:opacity-100" icon="solar:stars-linear"></iconify-icon>
<div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#C2410C] rounded-full"></div>
</div>
<span className="font-mono text-xs">IA Insights</span>
</a>
</nav>

<div className="mt-8 px-6">
<h3 className="font-mono text-xs text-[#57534E] uppercase tracking-widest mb-4">Acesso Rápido</h3>
<div className="space-y-4">
<div className="flex items-center gap-3 relative cursor-pointer group" onclick="switchView('obras')">
<div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-[#A1A1AA] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-8 h-8 bg-[#292524] rounded-sm p-[2px] flex flex-col gap-[2px] border border-white/[0.04]">
<div className="flex-1 flex gap-[2px]">
<div className="flex-1 bg-[#1C1917]"></div>
<div className="flex-1 bg-[#0C0A09]"></div>
</div>
<div className="flex-1 flex gap-[2px]">
<div className="flex-1 bg-[#0C0A09]"></div>
<div className="w-1/3 bg-[#1C1917]"></div>
</div>
</div>
<div className="flex flex-col">
<span className="font-serif text-xs text-[#FAFAF9] group-hover:text-[#D97706] transition-colors">Residência Brücke</span>
<span className="font-mono text-xs text-[#57534E]">BRU-001</span>
</div>
</div>
<div className="flex items-center gap-3 cursor-pointer group">
<div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-[#A1A1AA] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-8 h-8 bg-[#1C1917] rounded-sm p-[2px] flex flex-col gap-[2px] border border-white/[0.04] opacity-50">
<div className="flex-1 bg-[#0C0A09]"></div>
<div className="flex-1 flex gap-[2px]">
<div className="flex-1 bg-[#0C0A09]"></div>
<div className="flex-1 bg-[#0C0A09]"></div>
</div>
</div>
<div className="flex flex-col">
<span className="font-serif text-xs text-[#A8A29E]">Edifício Vila</span>
<span className="font-mono text-xs text-[#57534E]">VIL-043</span>
</div>
</div>
</div>
</div>
</div>

<div className="p-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md bg-[#292524] flex items-center justify-center font-serif text-xs text-[#FAFAF9] border border-white/[0.04]">
                        RS
                    </div>
<div className="flex flex-col flex-1">
<span className="text-xs text-[#FAFAF9] font-medium">Rafael Silva</span>
<span className="text-xs text-[#57534E]">Arquiteto Titular</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-[#1C1917] relative shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-20">

<div className="flex-1 flex flex-col h-full w-full overflow-y-auto" id="view-dashboard">

<header className="md:hidden flex items-center justify-between h-14 px-4 border-b border-white/[0.04] bg-[#1C1917]/80 backdrop-blur-md sticky top-0 z-30">
<span className="font-serif text-sm tracking-tight text-[#FAFAF9]">Dashboard</span>
<div className="flex gap-4 text-[#A8A29E]">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
</div>
</header>
<div className="px-4 md:px-10 py-8 max-w-6xl w-full mx-auto pb-32 md:pb-12">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<span className="font-mono text-xs text-[#57534E] uppercase tracking-widest mb-2 block">15 DE ABRIL, 2026</span>
<h1 className="font-serif text-3xl tracking-tight text-[#FAFAF9]">Visão Geral</h1>
</div>
<button className="h-8 px-4 rounded-md bg-transparent border border-white/[0.07] text-[#A8A29E] hover:text-[#FAFAF9] hover:bg-white/[0.03] transition-all font-mono text-xs uppercase tracking-widest flex items-center gap-2 w-max">
<iconify-icon className="text-sm" icon="solar:printer-linear"></iconify-icon>
                            Relatório Semanal
                        </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">

<div className="bg-[#0C0A09] border border-white/[0.04] rounded-xl p-5 relative overflow-hidden group">
<div className="absolute right-0 top-0 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-9xl -mr-4 -mt-4 text-[#FAFAF9]" icon="solar:cloud-water-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-4 relative z-10">
<span className="font-mono text-xs text-[#A8A29E] uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon>
                                    São Paulo, SP
                                </span>
<div className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse-subtle"></div>
</div>
<div className="relative z-10">
<span className="font-serif text-3xl tracking-tight text-[#FAFAF9]">24°C</span>
<p className="text-sm text-[#A8A29E] mt-1">Alerta de chuva leve às 16h.<br/>Impacto: <span className="text-[#D97706]">Concretagem Laje 2</span></p>
</div>
</div>

<div className="bg-[#D97706]/[0.04] border border-[#D97706]/10 rounded-xl p-5 relative">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-lg text-[#D97706]" icon="solar:stars-linear"></iconify-icon>
<span className="font-mono text-xs text-[#D97706] uppercase tracking-widest">Resumo da IA</span>
</div>
<p className="text-sm text-[#FAFAF9] leading-relaxed mb-4">
                                3 pendências críticas requerem atenção. Houve uma solicitação de mudança elétrica no projeto <span className="font-serif italic text-[#D97706]">Brücke</span>.
                            </p>
<button className="text-xs font-mono uppercase tracking-widest text-[#D97706] hover:text-[#FAFAF9] transition-colors border-b border-[#D97706]/30 pb-0.5">
                                Revisar Ações →
                            </button>
</div>

<div className="bg-[#0C0A09] border border-white/[0.04] rounded-xl p-5 flex flex-col justify-between">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-lg text-[#57534E]" icon="solar:checklist-linear"></iconify-icon>
<span className="font-mono text-xs text-[#57534E] uppercase tracking-widest">Tarefas Globais</span>
</div>
<div className="flex items-end gap-3">
<span className="font-serif text-3xl tracking-tight text-[#FAFAF9]">12</span>
<span className="text-xs text-[#57534E] mb-1.5 font-mono">EM ABERTO</span>
</div>
<div className="w-full h-1.5 bg-[#1C1917] rounded-full mt-4 overflow-hidden flex">
<div className="h-full bg-[#16A34A] w-[60%]"></div>
<div className="h-full bg-[#D97706] w-[25%]"></div>
<div className="h-full bg-[#C2410C] w-[15%]"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] font-mono text-[#57534E] uppercase">
<span>No Prazo</span>
<span>Em Risco</span>
<span>Atrasadas</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">

<div>
<div className="flex items-center justify-between mb-6">
<h2 className="font-serif text-lg tracking-tight text-[#FAFAF9]">Projetos Prioritários</h2>
<a className="text-xs font-mono text-[#57534E] hover:text-[#A8A29E] transition-colors uppercase tracking-widest" href="#" onclick="switchView('obras')">Ver todos</a>
</div>
<div className="space-y-4">

<div className="group bg-[#0C0A09] border border-white/[0.04] rounded-lg p-4 cursor-pointer hover:border-[#D97706]/30 transition-colors relative" onclick="switchView('obras')">
<div className="absolute top-0 left-0 bottom-0 w-1 bg-[#D97706] rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-3">
<div>
<span className="font-mono text-[10px] text-[#57534E] mb-1 block">BRU-001</span>
<h3 className="font-serif text-sm text-[#FAFAF9]">Residência Brücke</h3>
</div>
<span className="font-mono text-[10px] uppercase tracking-widest px-1.5 py-0.5 bg-[#16A34A]/10 border border-[#16A34A]/20 rounded text-[#16A34A]">
                                            Execução
                                        </span>
</div>
<div className="text-xs text-[#A8A29E] mb-3 flex items-center gap-2">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon>
                                        Próximo marco: Concretagem Laje 2
                                    </div>
<div className="w-full h-1 bg-[#1C1917] rounded-full overflow-hidden">
<div className="h-full bg-[#FAFAF9] w-[45%]"></div>
</div>
</div>

<div className="group bg-[#0C0A09] border border-white/[0.04] rounded-lg p-4 cursor-pointer hover:border-[#A1A1AA]/30 transition-colors">
<div className="flex justify-between items-start mb-3">
<div>
<span className="font-mono text-[10px] text-[#57534E] mb-1 block">VIL-043</span>
<h3 className="font-serif text-sm text-[#A8A29E]">Edifício Vila</h3>
</div>
<span className="font-mono text-[10px] uppercase tracking-widest px-1.5 py-0.5 bg-[#3F3F46]/30 border border-[#3F3F46]/50 rounded text-[#A8A29E]">
                                            Acabamento
                                        </span>
</div>
<div className="text-xs text-[#57534E] mb-3 flex items-center gap-2">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon>
                                        Aguardando: Aprovação de Esquadrias
                                    </div>
<div className="w-full h-1 bg-[#1C1917] rounded-full overflow-hidden">
<div className="h-full bg-[#3F3F46] w-[85%]"></div>
</div>
</div>
</div>
</div>

<div>
<h2 className="font-serif text-lg tracking-tight text-[#FAFAF9] mb-6">Últimos Registros</h2>
<div className="border-l-[1px] border-[#3F3F46] ml-2 pl-6 space-y-8">
<div className="relative">
<div className="absolute -left-[28.5px] top-1.5 w-2 h-2 rounded-full bg-[#3F3F46] ring-4 ring-[#1C1917]"></div>
<div className="flex items-center gap-2 mb-1">
<span className="font-mono text-[10px] text-[#D97706] bg-[#D97706]/10 px-1.5 rounded uppercase">BRU-001</span>
<span className="font-mono text-xs text-[#57534E]">Hoje, 10:15</span>
</div>
<div className="text-sm text-[#FAFAF9] leading-relaxed">
<span className="font-serif text-[#A8A29E] mr-1">Você:</span>
                                        Cliente pediu para revisar a posição dos pontos de luz no lavabo. Levantamento com a elétrica amanhã.
                                    </div>
</div>
<div className="relative">
<div className="absolute -left-[28.5px] top-1.5 w-2 h-2 rounded-full bg-[#25D366] ring-4 ring-[#1C1917]"></div>
<div className="flex items-center gap-2 mb-1">
<span className="font-mono text-[10px] text-[#A8A29E] bg-white/[0.05] border border-white/[0.05] px-1.5 rounded uppercase">VIL-043</span>
<span className="font-mono text-xs text-[#57534E]">Ontem, 16:40</span>
</div>
<div className="text-sm text-[#A8A29E] leading-relaxed">
<span className="font-serif text-[#FAFAF9] mr-1">Fornecedor (Vidros):</span>
                                        Atraso na entrega das esquadrias da fachada sul devido a quebra de lote na fábrica. Novo prazo: +5 dias.
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 flex h-full w-full relative" id="view-obras">

<header className="md:hidden absolute top-0 left-0 right-0 flex items-center justify-between h-14 px-4 border-b border-white/[0.04] bg-[#1C1917]/80 backdrop-blur-md z-30">
<span className="font-serif text-sm tracking-tight text-[#FAFAF9]">Residência Brücke</span>
<div className="flex gap-4 text-[#A8A29E]">
<iconify-icon className="text-lg" icon="solar:magnifier-linear"></iconify-icon>
<div className="relative">
<iconify-icon className="text-lg" icon="solar:checklist-linear"></iconify-icon>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-[#C2410C] rounded-full border-2 border-[#1C1917]"></div>
</div>
</div>
</header>

<div className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="hidden md:flex flex-col pt-8 px-10 shrink-0">
<div className="flex items-end justify-between mb-8">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="font-mono text-xs text-[#57534E]">BRU-001</span>
<div className="w-1 h-1 rounded-full bg-[#57534E]"></div>
<span className="font-mono text-xs text-[#A8A29E]">SÃO PAULO, SP</span>
</div>
<div className="flex items-center gap-4">
<h1 className="font-serif text-3xl tracking-tight text-[#FAFAF9]">Residência Brücke</h1>
<span className="font-mono text-xs uppercase tracking-widest px-2 py-1 bg-[#16A34A]/10 border border-[#16A34A]/20 rounded text-[#16A34A]">
                                        Em Execução
                                    </span>
</div>
</div>
<button className="h-8 px-4 rounded-md bg-transparent border border-white/[0.07] text-[#A8A29E] hover:text-[#FAFAF9] hover:bg-white/[0.03] transition-all font-mono text-xs uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:document-add-linear"></iconify-icon>
                                Relatório
                            </button>
</div>

<div className="flex gap-8 border-b border-white/[0.04]">
<button className="pb-3 text-[#FAFAF9] font-mono text-xs uppercase tracking-widest relative">
                                Anotações
                                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D97706]"></div>
</button>
<button className="pb-3 text-[#57534E] hover:text-[#A8A29E] transition-colors font-mono text-xs uppercase tracking-widest">
                                Pendências Kanban
                            </button>
<button className="pb-3 text-[#57534E] hover:text-[#A8A29E] transition-colors font-mono text-xs uppercase tracking-widest">
                                Plantas
                            </button>
</div>
</header>

<div className="flex-1 overflow-y-auto px-4 md:px-10 py-20 md:py-8 pb-32 md:pb-8">
<div className="flex items-center gap-4 mb-8">
<div className="h-[0.5px] bg-[#3F3F46] flex-1"></div>
<span className="font-mono text-xs text-[#57534E] uppercase tracking-widest">14 ABR 2026</span>
<div className="h-[0.5px] bg-[#3F3F46] w-12"></div>
</div>
<div className="border-l-[2px] border-[#3F3F46] ml-2 md:ml-4 pl-6 md:pl-8 space-y-10 relative">

<div className="relative group">
<div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-2 h-2 rounded-full bg-[#25D366] ring-4 ring-[#1C1917]"></div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="font-serif text-sm text-[#FAFAF9]">Eng. Marcelo</span>
<span className="font-mono text-xs text-[#57534E]">14:22</span>
</div>
</div>
<div className="text-sm text-[#A8A29E] leading-relaxed max-w-2xl mb-3">
                                    "Estrutura da laje 2 finalizada. A concretagem precisa ser antecipada para quinta-feira por causa da previsão de chuva severa na sexta."
                                </div>
<div className="w-48 h-32 bg-[#292524] rounded-md border border-white/[0.04] p-2 flex flex-col gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
<div className="w-full h-1/2 bg-white/[0.02] rounded-sm"></div>
<div className="flex gap-2 h-1/2">
<div className="w-1/3 bg-white/[0.02] rounded-sm"></div>
<div className="flex-1 bg-white/[0.02] rounded-sm"></div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-2 h-2 rounded-full bg-[#3F3F46] ring-4 ring-[#1C1917]"></div>
<div className="bg-[#D97706]/[0.04] border border-[#D97706]/10 rounded-md p-4 max-w-xl">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-sm text-[#D97706]" icon="solar:stars-linear"></iconify-icon>
<span className="font-mono text-xs text-[#D97706] uppercase tracking-widest">Ação Sugerida pela IA</span>
</div>
<div className="text-sm text-[#FAFAF9] mb-4">
                                        Reagendar concretagem da laje 2 para quinta-feira e notificar concreteira.
                                    </div>
<div className="flex gap-2">
<button className="bg-[#D97706] hover:bg-[#92400E] text-[#0C0A09] font-mono text-xs uppercase tracking-widest px-4 py-1.5 rounded-md transition-colors font-medium">
                                            Criar Tarefa
                                        </button>
<button className="bg-transparent border border-white/[0.07] text-[#A8A29E] hover:text-[#FAFAF9] hover:bg-white/[0.03] font-mono text-xs uppercase tracking-widest px-4 py-1.5 rounded-md transition-colors">
                                            Ignorar
                                        </button>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-2 h-2 rounded-full bg-[#3F3F46] ring-4 ring-[#1C1917]"></div>
<div className="flex items-center gap-3 mb-2">
<div className="w-5 h-5 rounded-sm bg-[#292524] flex items-center justify-center font-serif text-[10px] text-[#FAFAF9]">RS</div>
<span className="font-serif text-sm text-[#FAFAF9]">Você</span>
<span className="font-mono text-xs text-[#57534E]">10:15</span>
</div>
<div className="inline-flex items-center gap-1.5 bg-[#D97706]/10 border border-[#D97706]/20 px-2 py-0.5 rounded text-[#D97706] font-mono text-xs mb-3 animate-pulse-subtle">
<iconify-icon className="text-xs" icon="solar:soundwave-linear"></iconify-icon>
                                    Transcrito por IA
                                </div>
<div className="text-sm text-[#FAFAF9] leading-relaxed max-w-2xl">
                                    Cliente visitou a obra hoje cedo. Aprovou o detalhamento do forro da sala, mas pediu para revisar a posição dos pontos de luz no lavabo. Fazer levantamento com a elétrica amanhã.
                                </div>
</div>
</div>
</div>

<button className="md:hidden absolute bottom-20 right-4 w-14 h-14 rounded-full bg-[#D97706]/10 border border-[#D97706]/30 flex items-center justify-center z-40 backdrop-blur-md animate-breathe shadow-lg shadow-black/50">
<iconify-icon className="text-2xl text-[#D97706]" icon="solar:microphone-2-linear"></iconify-icon>
</button>
</div>

<aside className="hidden lg:flex w-[280px] bg-[#0C0A09] border-l border-white/[0.02] flex-col shrink-0 h-full">
<div className="px-6 py-6 border-b border-white/[0.04]">
<h2 className="font-serif text-lg tracking-tight text-[#FAFAF9]">Registro de Campo</h2>
<p className="font-sans text-xs text-[#57534E] mt-1">Grave ou digite para documentar.</p>
</div>
<div className="flex-1 p-6 flex flex-col items-center justify-center text-center opacity-40">
<div className="w-32 h-24 border border-[#3F3F46] rounded-sm relative flex flex-col justify-center items-center gap-2 mb-4">
<div className="w-full h-[0.5px] bg-[#3F3F46] border-dashed"></div>
<div className="w-[0.5px] h-full bg-[#3F3F46] border-dashed absolute left-1/3"></div>
</div>
<p className="font-serif italic text-sm text-[#A8A29E]">Pronto para escutar.</p>
</div>
<div className="p-6 bg-[#1C1917] border-t border-white/[0.04] flex flex-col items-center">
<div className="relative flex items-center justify-center h-24 w-full mb-2">
<div className="absolute inset-0 flex items-center justify-center gap-[2px] opacity-20">
<div className="w-[2px] bg-[#D97706] rounded-full" style={{height: '8px'}}></div>
<div className="w-[2px] bg-[#D97706] rounded-full" style={{height: '12px'}}></div>
<div className="w-[2px] bg-[#D97706] rounded-full" style={{height: '24px'}}></div>
<div className="w-[2px] bg-[#D97706] rounded-full" style={{height: '16px'}}></div>
<div className="w-[2px] bg-[#D97706] rounded-full" style={{height: '6px'}}></div>
<div className="w-[60px]"></div>
<div className="w-[2px] bg-[#D97706] rounded-full" style={{height: '10px'}}></div>
<div className="w-[2px] bg-[#D97706] rounded-full" style={{height: '20px'}}></div>
<div className="w-[2px] bg-[#D97706] rounded-full" style={{height: '14px'}}></div>
<div className="w-[2px] bg-[#D97706] rounded-full" style={{height: '8px'}}></div>
</div>
<button className="w-16 h-16 rounded-full bg-[#D97706]/10 border border-[#D97706]/20 flex items-center justify-center relative z-10 animate-breathe hover:bg-[#D97706]/20 transition-colors">
<iconify-icon className="text-2xl text-[#D97706]" icon="solar:microphone-2-linear"></iconify-icon>
</button>
</div>
<span className="font-mono text-xs text-[#57534E]">00:00</span>
<div className="w-full mt-6 relative">
<input className="w-full bg-[#292524] border border-white/[0.07] rounded-md px-3 py-2 text-xs text-[#FAFAF9] placeholder-[#57534E] focus:outline-none focus:border-[#D97706]/30 font-sans" placeholder="Digitar nota manual..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#57534E] hover:text-[#D97706] transition-colors">
<iconify-icon className="text-lg" icon="solar:rounded-right-linear"></iconify-icon>
</button>
</div>
</div>
</aside>
</div>
</main>
</div>

<nav className="md:hidden fixed bottom-0 w-full bg-[#1C1917] border-t border-white/[0.04] flex justify-around items-center h-16 z-50 px-2 pb-safe">
<a className="flex flex-col items-center gap-1 text-[#D97706]" href="#" id="mob-nav-dash" onclick="switchView('dashboard')">
<iconify-icon className="text-xl" icon="solar:widget-3-linear"></iconify-icon>
</a>
<a className="flex flex-col items-center gap-1 text-[#A8A29E]" href="#" id="mob-nav-obras" onclick="switchView('obras')">
<iconify-icon className="text-xl" icon="solar:buildings-2-linear"></iconify-icon>
</a>
<div className="relative -mt-8">
<a className="w-14 h-14 rounded-full bg-[#0C0A09] border border-[#D97706]/40 flex items-center justify-center text-[#D97706] relative" href="#">
<iconify-icon className="text-2xl" icon="solar:stars-linear"></iconify-icon>
<div className="absolute top-0 right-0 w-2 h-2 bg-[#C2410C] rounded-full border-2 border-[#0C0A09]"></div>
</a>
</div>
<a className="flex flex-col items-center gap-1 text-[#57534E] relative" href="#">
<iconify-icon className="text-xl" icon="solar:checklist-linear"></iconify-icon>
<div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#C2410C] rounded-full"></div>
</a>
<a className="flex flex-col items-center gap-1 text-[#57534E]" href="#">
<div className="w-6 h-6 rounded-sm bg-[#292524] flex items-center justify-center font-serif text-[10px] text-[#A8A29E] border border-white/[0.04]">
                RS
            </div>
</a>
</nav>



    </>
  );
}
