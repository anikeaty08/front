import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simples interatividade para demonstração visual
        
        // Mocking anomaly selection
        function selectAnomaly(id) {
            document.getElementById('active-anomaly-id').innerText = id;
            // Add slight pulse effect to show connection
            const panel = document.getElementById('action-panel');
            panel.classList.add('opacity-80');
            setTimeout(() => { panel.classList.remove('opacity-80'); }, 200);
        }

        // Mocking Role Toggle visually
        const btnAuditor = document.getElementById('btn-auditor');
        const btnSetor = document.getElementById('btn-setor');

        btnSetor.addEventListener('click', () => {
            btnSetor.classList.remove('text-zinc-500', 'hover:text-zinc-300');
            btnSetor.classList.add('bg-zinc-800', 'text-zinc-100', 'shadow-sm');
            
            btnAuditor.classList.remove('bg-zinc-800', 'text-zinc-100', 'shadow-sm');
            btnAuditor.classList.add('text-zinc-500', 'hover:text-zinc-300');
        });

        btnAuditor.addEventListener('click', () => {
            btnAuditor.classList.remove('text-zinc-500', 'hover:text-zinc-300');
            btnAuditor.classList.add('bg-zinc-800', 'text-zinc-100', 'shadow-sm');
            
            btnSetor.classList.remove('bg-zinc-800', 'text-zinc-100', 'shadow-sm');
            btnSetor.classList.add('text-zinc-500', 'hover:text-zinc-300');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-16 md:w-64 border-r border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md flex flex-col justify-between transition-all duration-300 z-20">
<div>

<div className="h-16 flex items-center justify-center md:justify-start md:px-6 border-b border-zinc-800/50">
<span className="text-zinc-100 font-semibold text-xl tracking-tighter hidden md:block">RA.</span>
<span className="text-zinc-100 font-semibold text-xl tracking-tighter md:hidden">R</span>
</div>

<nav className="flex flex-col gap-2 p-3 mt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-800/50 text-zinc-100 border border-zinc-700/50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium hidden md:block">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors group" href="#">
<iconify-icon className="text-lg group-hover:text-rose-400 transition-colors" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium hidden md:block">Anomalias</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium hidden md:block">Infraestrutura</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-two-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium hidden md:block">Setores</span>
</a>
</nav>
</div>
<div className="p-3">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium hidden md:block">Configurações</span>
</a>

<div className="mt-4 pt-4 border-t border-zinc-800/50 flex items-center gap-3 px-2 hidden md:flex">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
<span className="text-xs font-semibold tracking-tighter">AU</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">Auditor Chefe</span>
<span className="text-xs text-zinc-500">View de Auditoria</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<header className="h-16 border-b border-zinc-800/50 flex items-center justify-between px-6 bg-zinc-950/50 backdrop-blur-sm z-10">
<div className="flex items-center gap-4 w-1/3">
<div className="relative w-full max-w-md hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-200 text-sm rounded-md pl-9 pr-4 py-1.5 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-600" placeholder="Buscar logs, anomalias ou setores..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-emerald-400">GCP Sync Online</span>
</div>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-rose-500 border-2 border-zinc-950"></span>
</button>
</div>
</header>

<div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

<div className="flex-1 overflow-y-auto p-6 lg:p-8 animate-fade-in pb-24">
<div className="flex items-end justify-between mb-8">
<div>
<h1 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100">Inteligência de Risco</h1>
<p className="text-sm text-zinc-500 mt-1">Visão geral de automações e anomalias detectadas.</p>
</div>

<div className="hidden sm:flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-1">
<button className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-800 text-zinc-100 shadow-sm transition-all" id="btn-auditor">Auditor</button>
<button className="px-3 py-1 text-xs font-medium rounded-md text-zinc-500 hover:text-zinc-300 transition-all" id="btn-setor">Setor</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="glass-panel rounded-xl p-5 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition-all"></div>
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-zinc-400">Anomalias Críticas</span>
<iconify-icon className="text-rose-400" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-medium tracking-tight text-zinc-100">12</span>
<span className="text-xs text-rose-400 font-medium">+3 hoje</span>
</div>
</div>
<div className="glass-panel rounded-xl p-5 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all"></div>
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-zinc-400">Avisos de Risco</span>
<iconify-icon className="text-amber-400" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-medium tracking-tight text-zinc-100">48</span>
<span className="text-xs text-zinc-500 font-medium">Estável</span>
</div>
</div>
<div className="glass-panel rounded-xl p-5 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all"></div>
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-zinc-400">Respostas Pendentes</span>
<iconify-icon className="text-indigo-400" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-medium tracking-tight text-zinc-100">7</span>
<span className="text-xs text-zinc-500 font-medium">Setores notificados</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl border border-zinc-800/60 overflow-hidden">
<div className="px-5 py-4 border-b border-zinc-800/60 flex items-center justify-between bg-zinc-900/30">
<h2 className="text-sm font-medium text-zinc-200">Últimas Detecções (GCP)</h2>
<button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Ver todas</button>
</div>
<div className="w-full overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-xs text-zinc-500 border-b border-zinc-800/60 bg-zinc-950/50">
<th className="px-5 py-3 font-medium">ID / Regra</th>
<th className="px-5 py-3 font-medium">Serviço GCP</th>
<th className="px-5 py-3 font-medium">Nível de Risco</th>
<th className="px-5 py-3 font-medium">Status / Setor</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="border-b border-zinc-800/40 hover:bg-zinc-800/20 transition-colors cursor-pointer" onclick="selectAnomaly('ANM-8092')">
<td className="px-5 py-4">
<div className="flex flex-col gap-1">
<span className="font-medium text-zinc-200">ANM-8092</span>
<span className="text-xs text-zinc-500">IAM Portas Abertas (0.0.0.0/0)</span>
</div>
</td>
<td className="px-5 py-4 text-zinc-400">Compute Engine</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                                            Crítico
                                        </span>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<span className="text-zinc-400 text-xs">Aguardando DevOps</span>
</div>
</td>
</tr>

<tr className="border-b border-zinc-800/40 hover:bg-zinc-800/20 transition-colors cursor-pointer bg-zinc-800/10">
<td className="px-5 py-4">
<div className="flex flex-col gap-1">
<span className="font-medium text-zinc-200">ANM-8091</span>
<span className="text-xs text-zinc-500">Bucket sem Criptografia KMS</span>
</div>
</td>
<td className="px-5 py-4 text-zinc-400">Cloud Storage</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                            Alto
                                        </span>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
<span className="text-zinc-400 text-xs">Em Análise (Dados)</span>
</div>
</td>
</tr>

<tr className="border-b border-zinc-800/40 hover:bg-zinc-800/20 transition-colors cursor-pointer">
<td className="px-5 py-4">
<div className="flex flex-col gap-1">
<span className="font-medium text-zinc-200">ANM-8088</span>
<span className="text-xs text-zinc-500">Service Account sem uso &gt; 90d</span>
</div>
</td>
<td className="px-5 py-4 text-zinc-400">IAM &amp; Admin</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">
                                            Baixo
                                        </span>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-zinc-400 text-xs">Resolvido</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="w-full lg:w-96 border-l border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md flex flex-col z-10 transition-transform duration-300" id="action-panel">

<div className="p-5 border-b border-zinc-800/50">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-indigo-400 tracking-wider uppercase">Foco Ativo</span>
<span className="text-xs text-zinc-500" id="active-anomaly-id">ANM-8092</span>
</div>
<h3 className="text-base font-medium text-zinc-100 leading-tight">IAM Portas Abertas (0.0.0.0/0)</h3>
<p className="text-xs text-zinc-500 mt-2 line-clamp-2">A automação detectou regras de firewall no projeto 'prod-core-1' permitindo tráfego irrestrito para instâncias críticas.</p>
</div>

<div className="flex border-b border-zinc-800/50 px-5 gap-4">
<button className="py-3 text-xs font-medium text-zinc-100 border-b-2 border-indigo-500">Auditoria &amp; Chat</button>
<button className="py-3 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors border-b-2 border-transparent">Log Técnico JSON</button>
</div>

<div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">

<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-zinc-400 text-xs" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-300">Automação (Airflow)</span>
<span className="text-[10px] text-zinc-600">Ontem, 23:45</span>
</div>
<p className="text-sm text-zinc-500 mt-1">Anomalia detectada e categorizada como Risco Crítico baseado na regra <span className="text-zinc-400 font-mono text-[10px] bg-zinc-900 px-1 py-0.5 rounded">fw-rule-01</span>.</p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-[10px] font-semibold">AU</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-300">Auditor Chefe</span>
<span className="text-[10px] text-zinc-600">Hoje, 09:12</span>
</div>
<div className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-lg rounded-tl-none mt-1">
<p className="text-sm text-zinc-300">Equipe de DevOps, por favor verifiquem se essa regra é residual de testes ou se foi intencional. Necessita mitigação imediata ou justificativa.</p>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-800/50 bg-zinc-950">
<div className="relative">
<textarea className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg p-3 pr-10 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none placeholder:text-zinc-600" placeholder="Adicionar nota de auditoria ou notificar setor responsável..." rows="2"></textarea>
<button className="absolute bottom-3 right-3 text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 p-1.5 rounded-md transition-all">
<iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-center mt-3">
<div className="flex items-center gap-2">
<input className="w-3.5 h-3.5 rounded border-zinc-700 bg-zinc-900 text-indigo-500 focus:ring-indigo-500/50 focus:ring-offset-zinc-950 appearance-none checked:bg-indigo-500 checked:border-transparent relative after:content-[''] after:absolute after:hidden checked:after:block after:left-[4px] after:top-[1px] after:w-[4px] after:h-[8px] after:border-solid after:border-white after:border-r-2 after:border-b-2 after:rotate-45" id="require-action" type="checkbox"/>
<label className="text-xs text-zinc-500 cursor-pointer" htmlFor="require-action">Exigir plano de ação</label>
</div>
<span className="text-[10px] text-zinc-600">Visão: Auditor</span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
