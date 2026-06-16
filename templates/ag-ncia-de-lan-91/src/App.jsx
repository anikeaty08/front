import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Scroll Observer for Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] bg-grid pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none z-[-1]"></div>

<header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
<div className="mx-auto max-w-6xl">
<div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-black/60 backdrop-blur-md px-4 py-3 shadow-2xl shadow-black/50">

<a className="flex items-center gap-2 group" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded bg-white text-black font-semibold text-xs tracking-tighter group-hover:scale-105 transition-transform">
                        CS
                    </div>
<span className="font-medium tracking-[0.2em] text-xs text-white uppercase ml-1">Candido dos Santos</span>
</a>

<nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#metodologia">Metodologia</a>
<a className="hover:text-white transition-colors" href="#resultados">Resultados</a>
<a className="hover:text-white transition-colors" href="#servicos">Parcerias</a>
<a className="hover:text-white transition-colors" href="#">Sobre</a>
</nav>

<a className="btn-glow inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-medium text-black hover:bg-zinc-200 transition-colors" href="#">
<span>Aplicação</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

<div className="flex justify-center mb-8 animate-enter">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-zinc-300 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                    ESPECIALISTAS EM ESCALA
                </div>
</div>

<div className="text-center max-w-4xl mx-auto animate-enter delay-100">
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    Estratégia invisível,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-400 to-zinc-600">Resultados Exponenciais.</span>
</h1>
<p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                    A agência de lançamentos que transforma autoridade em impérios digitais. 
                    Utilizamos inteligência de dados e processos validados para escalar infoprodutos.
                </p>

<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-8 text-sm font-medium text-black transition-transform active:scale-95" href="#">
<span className="relative z-10">Agendar Consultoria</span>
<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-zinc-200 to-white transition-transform group-hover:translate-x-0"></div>
</a>
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 text-sm font-medium text-white transition hover:bg-white/10" href="#metodologia">
                        Conhecer o Método
                        <iconify-icon icon="solar:round-alt-arrow-down-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="absolute top-1/3 left-[10%] hidden lg:block float-slow pointer-events-none select-none">
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/50 backdrop-blur p-3 shadow-2xl">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
<iconify-icon icon="solar:graph-new-up-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-zinc-400 uppercase tracking-wider">ROAS Médio</div>
<div className="text-sm font-medium text-white">12.4x</div>
</div>
</div>
</div>
<div className="absolute top-1/2 right-[10%] hidden lg:block float-delayed pointer-events-none select-none">
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/50 backdrop-blur p-3 shadow-2xl">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-zinc-400 uppercase tracking-wider">Leads/Mês</div>
<div className="text-sm font-medium text-white">+50k</div>
</div>
</div>
</div>

<div className="mt-20 relative mx-auto max-w-5xl animate-enter delay-200">
<div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-white/20 to-transparent opacity-30 blur-lg"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden">

<div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-3">
<div className="flex gap-1.5">
<div className="h-2.5 w-2.5 rounded-full bg-red-500/20"></div>
<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20"></div>
<div className="h-2.5 w-2.5 rounded-full bg-green-500/20"></div>
</div>
<div className="mx-auto flex items-center gap-1.5 rounded-full bg-black/50 border border-white/5 px-3 py-1 text-[10px] text-zinc-500">
<iconify-icon icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
                            launch_control_center.app
                        </div>
</div>

<div className="grid grid-cols-12 min-h-[500px]">

<div className="col-span-12 md:col-span-3 border-r border-white/5 bg-black/20 p-4 hidden md:block">
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-4">Lançamentos Ativos</div>
<div className="space-y-1">
<div className="flex items-center gap-2 rounded bg-white/10 px-3 py-2 text-xs text-white cursor-pointer">
<iconify-icon icon="solar:rocket-linear" width="14"></iconify-icon>
<span>Projeto Alpha (Q3)</span>
</div>
<div className="flex items-center gap-2 rounded hover:bg-white/5 px-3 py-2 text-xs text-zinc-400 cursor-pointer transition-colors">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span>Mentoria High-Ticket</span>
</div>
<div className="flex items-center gap-2 rounded hover:bg-white/5 px-3 py-2 text-xs text-zinc-400 cursor-pointer transition-colors">
<iconify-icon icon="solar:refresh-circle-linear" width="14"></iconify-icon>
<span>Perpetuo Funnel</span>
</div>
</div>
<div className="mt-8 text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-4">Fases</div>
<div className="space-y-3 relative pl-3 border-l border-white/10">
<div className="relative">
<div className="absolute -left-[17px] top-1.5 h-2 w-2 rounded-full bg-green-500 ring-4 ring-black"></div>
<div className="text-xs text-white">Captação de Leads</div>
<div className="text-[10px] text-zinc-500">Em andamento • Dia 14</div>
</div>
<div className="relative opacity-50">
<div className="absolute -left-[17px] top-1.5 h-2 w-2 rounded-full bg-zinc-700 ring-4 ring-black"></div>
<div className="text-xs text-zinc-300">Aquecimento</div>
<div className="text-[10px] text-zinc-600">Aguardando</div>
</div>
<div className="relative opacity-50">
<div className="absolute -left-[17px] top-1.5 h-2 w-2 rounded-full bg-zinc-700 ring-4 ring-black"></div>
<div className="text-xs text-zinc-300">Abertura de Carrinho</div>
<div className="text-[10px] text-zinc-600">Aguardando</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-9 p-6 relative">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-sm font-medium text-white">Performance Geral</h3>
<p className="text-xs text-zinc-500">Atualizado há 2 minutos</p>
</div>
<div className="flex gap-2">
<button className="rounded border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/10">Exportar Relatório</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
<div className="text-[10px] text-zinc-500 uppercase mb-1">Faturamento</div>
<div className="text-2xl font-mono font-medium text-white">R$ 482.590</div>
<div className="mt-2 flex items-center gap-1 text-[10px] text-green-400">
<iconify-icon icon="solar:trending-up-linear" width="12"></iconify-icon>
<span>+24% vs Meta</span>
</div>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
<div className="text-[10px] text-zinc-500 uppercase mb-1">CPL (Custo por Lead)</div>
<div className="text-2xl font-mono font-medium text-white">R$ 3,42</div>
<div className="mt-2 flex items-center gap-1 text-[10px] text-green-400">
<iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon>
<span>Dentro do KPI</span>
</div>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
<div className="text-[10px] text-zinc-500 uppercase mb-1">Conversão Página</div>
<div className="text-2xl font-mono font-medium text-white">48.5%</div>
<div className="mt-2 flex items-center gap-1 text-[10px] text-zinc-400">
<span>Estável</span>
</div>
</div>
</div>

<div className="rounded-lg border border-white/5 bg-white/[0.02] p-4 h-48 flex items-end justify-between gap-1 relative overflow-hidden">
<div className="absolute top-4 left-4 text-[10px] text-zinc-500">Captação Diária (Leads)</div>

<div className="w-full bg-zinc-800/50 rounded-t-sm h-[30%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-1 rounded opacity-0 group-hover:opacity-100 transition">30%</div></div>
<div className="w-full bg-zinc-800/50 rounded-t-sm h-[45%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-1 rounded opacity-0 group-hover:opacity-100 transition">45%</div></div>
<div className="w-full bg-zinc-800/50 rounded-t-sm h-[40%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-1 rounded opacity-0 group-hover:opacity-100 transition">40%</div></div>
<div className="w-full bg-zinc-800/50 rounded-t-sm h-[60%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-1 rounded opacity-0 group-hover:opacity-100 transition">60%</div></div>
<div className="w-full bg-zinc-800/50 rounded-t-sm h-[55%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-1 rounded opacity-0 group-hover:opacity-100 transition">55%</div></div>
<div className="w-full bg-zinc-800/50 rounded-t-sm h-[75%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-1 rounded opacity-0 group-hover:opacity-100 transition">75%</div></div>
<div className="w-full bg-white rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(255,255,255,0.3)] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-1 rounded opacity-100 transition">Hoje</div></div>
<div className="w-full bg-zinc-800/30 rounded-t-sm h-[10%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="metodologia">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-16 md:text-center max-w-3xl mx-auto reveal">
<h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">Metodologia Validada</h2>
<p className="mt-4 text-base text-zinc-400 font-light">
                    Não dependemos de sorte. Nossa estrutura de lançamento é baseada em dados, previsibilidade e otimização constante.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:bg-white/[0.02] transition-colors reveal">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
<iconify-icon icon="solar:target-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Tráfego de Alta Precisão</h3>
<p className="mt-2 text-sm text-zinc-400 font-light leading-relaxed">
                        Segmentação avançada e remarketing dinâmico para reduzir o CPL e qualificar o lead antes mesmo da captura.
                    </p>
<div className="mt-4 flex gap-2">
<span className="inline-flex items-center rounded bg-white/5 px-2 py-1 text-[10px] text-zinc-400 border border-white/5">Meta Ads</span>
<span className="inline-flex items-center rounded bg-white/5 px-2 py-1 text-[10px] text-zinc-400 border border-white/5">Google Ads</span>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:bg-white/[0.02] transition-colors reveal delay-100">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
<iconify-icon icon="solar:pen-new-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Copywriting Persuasivo</h3>
<p className="mt-2 text-sm text-zinc-400 font-light leading-relaxed">
                        Narrativas que conectam e convertem. Desenvolvemos toda a Big Idea e roteiros de CPLs, VSLs e anúncios.
                    </p>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:bg-white/[0.02] transition-colors reveal delay-200">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
<iconify-icon icon="solar:database-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Business Intelligence</h3>
<p className="mt-2 text-sm text-zinc-400 font-light leading-relaxed">
                        Dashboards em tempo real para tomada de decisão. Acompanhe a saúde do lançamento minuto a minuto.
                    </p>
</div>

<div className="md:col-span-2 lg:col-span-3 group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 reveal">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
<iconify-icon icon="solar:crown-star-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">Gestão Full-Service</h3>
<p className="mt-2 text-sm text-zinc-400 font-light leading-relaxed max-w-md">
                                Do especialista, queremos apenas o conteúdo. Nós cuidamos da tecnologia, páginas, e-mail marketing, grupos de WhatsApp, recuperação de vendas e suporte.
                            </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon>
                                    Design de Alta Conversão
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon>
                                    Gestão de Comunidade
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon>
                                    Recuperação de Carrinho Ativa
                                </li>
</ul>
</div>
<div className="relative rounded-lg border border-white/10 bg-black/50 p-4 font-mono text-xs text-zinc-400">
<div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-2 text-zinc-500">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
<span>launch_playbook.config</span>
</div>
<div className="space-y-1">
<div className="flex">
<span className="text-purple-400 mr-2">phase</span>
<span className="text-white">"pre_launch"</span>
<span className="text-zinc-600 ml-1">{</span>
</div>
<div className="pl-4">
<span className="text-blue-400">objective</span>: <span className="text-green-400">"max_leads"</span>,
                                </div>
<div className="pl-4">
<span className="text-blue-400">channels</span>: [<span className="text-orange-300">"IG"</span>, <span className="text-orange-300">"YT"</span>, <span className="text-orange-300">"Email"</span>],
                                </div>
<div className="pl-4">
<span className="text-blue-400">kpi_target</span>: <span className="text-yellow-400">50000</span>
</div>
<div className="text-zinc-600">}</div>
<div className="flex mt-2">
<span className="text-purple-400 mr-2">phase</span>
<span className="text-white">"sales_open"</span>
<span className="text-zinc-600 ml-1">{</span>
</div>
<div className="pl-4 text-zinc-500">// Executing conversion logic...</div>
<div className="text-zinc-600">}</div>
</div>

<div className="absolute bottom-4 right-4 h-4 w-2 bg-white animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.05] relative z-10" id="servicos">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white">Modelos de Parceria</h2>
<p className="mt-2 text-sm text-zinc-400 font-light">Escolha como vamos escalar seu negócio.</p>
</div>

<div className="mt-4 md:mt-0 inline-flex rounded-lg border border-white/10 bg-white/5 p-1">
<button className="rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-white shadow-sm">Lançamentos</button>
<button className="rounded-md px-3 py-1 text-xs font-medium text-zinc-500 hover:text-white transition">Perpétuo</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 transition-transform hover:scale-[1.01] reveal">
<div className="absolute top-0 right-0 p-8 opacity-20">
<iconify-icon className="text-white" icon="solar:hand-shake-linear" width="100"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-white">Co-Produção</h3>
<p className="mt-2 text-sm text-zinc-400 h-10">Tornamos-nos sócios do seu produto. Investimos tecnologia e equipe em troca de % do resultado.</p>
<div className="mt-8 space-y-4">
<div className="flex items-center gap-3">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Equipe completa inclusa</span>
</div>
<div className="flex items-center gap-3">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Investimento compartilhado</span>
</div>
<div className="flex items-center gap-3">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Gestão estratégica 360º</span>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10">
<a className="block w-full rounded-xl bg-white py-3 text-center text-sm font-medium text-black transition hover:bg-zinc-200" href="#">
                                Aplicar para Seleção
                            </a>
<p className="mt-3 text-center text-[10px] text-zinc-500">Sujeito a análise de perfil e faturamento atual.</p>
</div>
</div>
</div>

<div className="relative rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 transition-transform hover:scale-[1.01] reveal delay-100">
<div className="absolute top-0 right-0 p-8 opacity-20">
<iconify-icon className="text-white" icon="solar:diploma-verified-linear" width="100"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-white">Consultoria Estratégica</h3>
<p className="mt-2 text-sm text-zinc-400 h-10">Direcionamento estratégico para experts que já possuem equipe interna e precisam escalar.</p>
<div className="mt-8 space-y-4">
<div className="flex items-center gap-3">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-zinc-400">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Auditoria de Funil</span>
</div>
<div className="flex items-center gap-3">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-zinc-400">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Otimização de Tráfego</span>
</div>
<div className="flex items-center gap-3">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-zinc-400">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">4 Encontros Mensais</span>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10">
<a className="block w-full rounded-xl border border-white/10 bg-transparent py-3 text-center text-sm font-medium text-white transition hover:bg-white/5" href="#">
                                Falar com Consultor
                            </a>
<p className="mt-3 text-center text-[10px] text-zinc-500">Ideal para faturamentos acima de R$ 100k/mês.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/[0.05] bg-black py-12 text-sm relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded bg-white text-black font-semibold text-[10px] tracking-tighter">
                            CS
                        </div>
<span className="font-medium tracking-widest text-xs text-white uppercase">Candido dos Santos</span>
</a>
<p className="text-zinc-500 text-xs max-w-xs leading-relaxed">
                        Agência especializada em lançamentos digitais de alta performance. 
                        Transformando conhecimento em legado.
                    </p>
</div>
<div>
<h4 className="font-medium text-white mb-4">Empresa</h4>
<ul className="space-y-2 text-zinc-500 text-xs">
<li><a className="hover:text-white transition" href="#">Sobre Nós</a></li>
<li><a className="hover:text-white transition" href="#">Cases de Sucesso</a></li>
<li><a className="hover:text-white transition" href="#">Carreira</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4">Legal</h4>
<ul className="space-y-2 text-zinc-500 text-xs">
<li><a className="hover:text-white transition" href="#">Termos de Uso</a></li>
<li><a className="hover:text-white transition" href="#">Privacidade</a></li>
<li><a className="hover:text-white transition" href="#">Contato</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-600 text-[10px]">© 2024 Candido dos Santos. Todos os direitos reservados.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition" href="#">
<iconify-icon icon="solar:instagram-linear" width="18"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition" href="#">
<iconify-icon icon="solar:linkedin-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
