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
      

<div className="fixed top-6 right-6 z-50 no-print">
<button className="group bg-white/5 backdrop-blur-xl border border-white/10 text-white px-5 py-2.5 rounded-full font-medium text-xs hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 shadow-xl tracking-wide uppercase" onclick="window.print()">
<iconify-icon className="text-gray-400 group-hover:text-white transition-colors" icon="solar:printer-linear" width="18"></iconify-icon>
            Salvar PDF
        </button>
</div>

<main className="max-w-[210mm] mx-auto bg-[#09090b] shadow-2xl min-h-screen relative border-x border-white/[0.03]">

<div className="absolute inset-0 bg-grid-pattern pointer-events-none fixed z-0"></div>

<section className="min-h-[85vh] flex flex-col justify-center px-10 md:px-16 py-20 relative z-10 overflow-hidden">

<div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="space-y-8 max-w-3xl relative">
<div className="inline-flex items-center gap-2 py-1.5 px-4 border border-rose-500/20 rounded-full bg-rose-500/5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
<span className="text-[10px] font-semibold text-rose-200/80 tracking-[0.2em] uppercase">Proposta Comercial</span>
</div>
<h1 className="text-5xl md:text-[76px] font-medium tracking-tight text-white leading-[1.05]">
                    Escale suas vendas com <br/>
<span className="text-gradient">inteligência de dados.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-xl leading-relaxed border-l-2 border-rose-500/50 pl-6">
                    A estrutura definitiva para eliminar o amadorismo do seu funil e trazer previsibilidade de receita.
                </p>
</div>
<div className="absolute bottom-12 left-10 md:left-16 right-10 md:right-16 grid grid-cols-3 border-t border-white/5 pt-8">
<div className="flex flex-col gap-1">
<span className="text-[10px] text-zinc-500 uppercase tracking-widest">Metodologia</span>
<div className="flex items-center gap-2 text-white font-medium text-sm">
<iconify-icon className="text-rose-500" icon="solar:bolt-circle-linear" width="16"></iconify-icon>
                        F.O.C.O
                    </div>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] text-zinc-500 uppercase tracking-widest">Setup</span>
<div className="flex items-center gap-2 text-white font-medium text-sm">
<iconify-icon className="text-rose-500" icon="solar:clock-circle-linear" width="16"></iconify-icon>
                        20 Dias Úteis
                    </div>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] text-zinc-500 uppercase tracking-widest">Ciclo</span>
<div className="flex items-center gap-2 text-white font-medium text-sm">
<iconify-icon className="text-rose-500" icon="solar:refresh-circle-linear" width="16"></iconify-icon>
                        Trimestral
                     </div>
</div>
</div>
</section>

<section className="py-24 px-10 md:px-16 bg-[#09090b] relative border-t border-white/[0.03]">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight">Nosso Método</h2>
<p className="text-zinc-400 font-light mt-2 text-sm max-w-md">Como transformamos teoria em resultado financeiro.</p>
</div>
<div className="h-[1px] flex-1 bg-white/5 mx-8 mb-2 hidden md:block"></div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    Workflow
                </div>
</div>
<div className="grid md:grid-cols-2 gap-5 relative z-10">
<div className="p-8 rounded-[24px] bg-[#0c0c0e] border border-white/5 hover:border-rose-500/20 transition-all duration-300 group hover:bg-[#0f0f12]">
<div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-rose-500 mb-6 group-hover:scale-105 transition-transform border border-white/5">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Fundamentação</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Diagnóstico profundo dos vazamentos do funil atual. Auditoria de scripts e conversão.</p>
</div>
<div className="p-8 rounded-[24px] bg-[#0c0c0e] border border-white/5 hover:border-rose-500/20 transition-all duration-300 group hover:bg-[#0f0f12]">
<div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform border border-white/5">
<iconify-icon icon="solar:ruler-pen-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Organização</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Desenho do playbook de vendas, matriz de qualificação e cadência de follow-up.</p>
</div>
<div className="p-8 rounded-[24px] bg-[#0c0c0e] border border-white/5 hover:border-rose-500/20 transition-all duration-300 group hover:bg-[#0f0f12]">
<div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform border border-white/5">
<iconify-icon icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Criação &amp; Instalação</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Implementação prática. Treinamento do time, setup de CRM e lançamento das campanhas.</p>
</div>
<div className="p-8 rounded-[24px] bg-[#0c0c0e] border border-white/5 hover:border-rose-500/20 transition-all duration-300 group hover:bg-[#0f0f12]">
<div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-rose-500 mb-6 group-hover:scale-105 transition-transform border border-white/5">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Otimização</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Análise de dados pós-implementação e ajustes finos de rota para maximizar o ROI.</p>
</div>
</div>
</section>

<section className="py-20 px-10 md:px-16 bg-[#050505] relative overflow-hidden">
<div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-rose-500/30 to-transparent"></div>
<div className="mb-12">
<span className="text-rose-500 font-bold text-[10px] tracking-widest uppercase mb-2 block">Cronograma Inicial</span>
<h2 className="text-2xl font-medium text-white tracking-tight">Setup do Projeto <span className="text-zinc-600 px-2 font-light">/</span> 20 dias úteis</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
<div className="space-y-10">
<div className="group flex gap-5">
<div className="relative">
<div className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center text-rose-500 shadow-lg group-hover:border-rose-500/30 transition-colors z-10 relative">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5 -z-0"></div>
</div>
<div className="pt-1">
<h4 className="text-white font-medium text-sm">Pesquisa e Diagnóstico</h4>
<p className="text-zinc-500 text-xs mt-1.5 font-light leading-relaxed">Análise de concorrentes, cliente oculto e auditoria de processos atuais.</p>
</div>
</div>
<div className="group flex gap-5">
<div className="relative">
<div className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center text-white shadow-lg group-hover:border-rose-500/30 transition-colors z-10 relative">
<iconify-icon icon="solar:layers-linear" width="18"></iconify-icon>
</div>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5 -z-0"></div>
</div>
<div className="pt-1">
<h4 className="text-white font-medium text-sm">Canais de Aquisição</h4>
<p className="text-zinc-500 text-xs mt-1.5 font-light leading-relaxed">Definição estratégica das fontes de tráfego e estrutura de captação.</p>
</div>
</div>
<div className="group flex gap-5">
<div className="relative">
<div className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center text-white shadow-lg group-hover:border-rose-500/30 transition-colors z-10 relative">
<iconify-icon icon="solar:database-linear" width="18"></iconify-icon>
</div>
</div>
<div className="pt-1">
<h4 className="text-white font-medium text-sm">Configuração de CRM</h4>
<p className="text-zinc-500 text-xs mt-1.5 font-light leading-relaxed">Setup do funil de vendas, etapas, motivos de perda e automações.</p>
</div>
</div>
</div>
<div className="space-y-10">
<div className="group flex gap-5">
<div className="relative">
<div className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center text-white shadow-lg group-hover:border-rose-500/30 transition-colors z-10 relative">
<iconify-icon icon="solar:target-linear" width="18"></iconify-icon>
</div>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5 -z-0"></div>
</div>
<div className="pt-1">
<h4 className="text-white font-medium text-sm">Metas &amp; KPIs</h4>
<p className="text-zinc-500 text-xs mt-1.5 font-light leading-relaxed">Definição clara de objetivos de conversão, CAC e LTV alvo.</p>
</div>
</div>
<div className="group flex gap-5">
<div className="relative">
<div className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center text-white shadow-lg group-hover:border-rose-500/30 transition-colors z-10 relative">
<iconify-icon icon="solar:file-text-linear" width="18"></iconify-icon>
</div>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5 -z-0"></div>
</div>
<div className="pt-1">
<h4 className="text-white font-medium text-sm">Playbook de Vendas</h4>
<p className="text-zinc-500 text-xs mt-1.5 font-light leading-relaxed">Entrega dos roteiros, matriz de objeções e materiais de apoio.</p>
</div>
</div>
<div className="group flex gap-5">
<div className="relative">
<div className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center text-rose-500 shadow-lg group-hover:border-rose-500/30 transition-colors z-10 relative">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
</div>
<div className="pt-1">
<h4 className="text-white font-medium text-sm">Kick-off &amp; Execução</h4>
<p className="text-zinc-500 text-xs mt-1.5 font-light leading-relaxed">Apresentação final da estratégia e início da operação assistida.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#09090b] relative overflow-hidden">
<div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center">
<div className="md:col-span-5 space-y-8 relative z-10">
<div>
<h2 className="text-4xl font-medium text-white tracking-tight leading-none">Formato<br/><span className="text-zinc-500">de Atuação</span></h2>
</div>
<div className="inline-block bg-[#0f0f12] border border-rose-500/20 rounded-[24px] px-8 py-6 shadow-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-20 h-20 bg-rose-500/10 rounded-bl-full blur-xl group-hover:bg-rose-500/20 transition-all"></div>
<p className="text-rose-500 text-[10px] uppercase tracking-widest mb-2 font-bold">Ciclo Total</p>
<p className="text-5xl font-semibold text-white tracking-tighter">120 dias</p>
</div>
<div className="flex gap-4 pt-2">
<div className="bg-[#0f0f12] border border-white/5 rounded-2xl p-5 flex-1 text-center group hover:border-rose-500/20 transition-all">
<div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white mx-auto mb-3 text-xs font-bold border border-white/5">1</div>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Setup</p>
<p className="text-white font-medium text-sm">Estruturação</p>
</div>
<div className="bg-gradient-main rounded-2xl p-5 flex-1 text-center shadow-lg shadow-rose-900/20">
<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white mx-auto mb-3 text-xs font-bold backdrop-blur-sm border border-white/20">2</div>
<p className="text-[10px] text-white/80 uppercase tracking-widest mb-1">Scale</p>
<p className="text-white font-medium text-sm">Aceleração</p>
</div>
</div>
</div>
<div className="md:col-span-7 relative h-[480px] rounded-[32px] overflow-hidden group border border-white/5">
<img alt="Strategy" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 grayscale" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent"></div>
<div className="absolute inset-0 bg-rose-900/10 mix-blend-overlay"></div>
</div>
</div>
</section>

<section className="py-24 px-10 md:px-16 bg-[#09090b] relative">
<div className="text-center mb-16 space-y-3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
<span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
<span className="text-[10px] uppercase tracking-widest text-zinc-300">Escopo da Aceleração</span>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight">O que será entregue?</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
<div className="bg-[#0c0c0e] border border-white/5 rounded-[32px] p-8 md:p-10 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-bl-[100px] -mr-4 -mt-4 transition-all group-hover:bg-rose-500/10"></div>
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-white border border-white/5 shadow-inner">
<iconify-icon icon="solar:graph-new-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">Gestão de<br/>Tráfego Pago</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
<iconify-icon className="mt-0.5 text-rose-500" icon="solar:check-read-linear" width="16"></iconify-icon>
                            Gestão de campanhas (Google &amp; Meta Ads)
                        </li>
<li className="flex items-start gap-3 text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
<iconify-icon className="mt-0.5 text-rose-500" icon="solar:check-read-linear" width="16"></iconify-icon>
                            Criação de públicos e segmentação
                        </li>
<li className="flex items-start gap-3 text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
<iconify-icon className="mt-0.5 text-rose-500" icon="solar:check-read-linear" width="16"></iconify-icon>
                            Desenvolvimento de criativos de alta conversão
                        </li>
<li className="flex items-start gap-3 text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
<iconify-icon className="mt-0.5 text-rose-500" icon="solar:check-read-linear" width="16"></iconify-icon>
                            Relatórios quinzenais de performance
                        </li>
</ul>
</div>
<div className="bg-[#0c0c0e] border border-white/5 rounded-[32px] p-8 md:p-10 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-4 -mt-4 transition-all group-hover:bg-white/10"></div>
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-white border border-white/5 shadow-inner">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">Consultoria<br/>Comercial</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
<iconify-icon className="mt-0.5 text-white" icon="solar:check-read-linear" width="16"></iconify-icon>
                            Call semanal de alinhamento e roleplay
                        </li>
<li className="flex items-start gap-3 text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
<iconify-icon className="mt-0.5 text-white" icon="solar:check-read-linear" width="16"></iconify-icon>
                            Otimização de scripts de vendas
                        </li>
<li className="flex items-start gap-3 text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
<iconify-icon className="mt-0.5 text-white" icon="solar:check-read-linear" width="16"></iconify-icon>
                            Análise de qualidade dos leads (Quali-check)
                        </li>
<li className="flex items-start gap-3 text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
<iconify-icon className="mt-0.5 text-white" icon="solar:check-read-linear" width="16"></iconify-icon>
                            Acompanhamento de CRM e pipeline
                        </li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-10 md:px-16 bg-[#050505] relative border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight">O que dizem nossos <span className="text-zinc-500">parceiros</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-[24px] bg-[#0c0c0e] border border-white/5 relative flex flex-col justify-between group hover:border-rose-500/20 transition-all">
<div>
<div className="mb-6 text-rose-500 opacity-50">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm font-light leading-relaxed mb-6">
                                "Com a Leadflow, nosso polo de educação à distância obteve resultados maravilhosos relacionado à novas matrículas, fomos de <strong className="text-white font-medium">10 à 79 no intervalo de 40 dias</strong>, somos imensamente gratos por toda disponibilidade e presteza em nos assessorar de forma eficiente e eficaz."
                            </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/10 flex items-center justify-center text-[10px] text-white font-bold">PL</div>
<div>
<p className="text-white text-xs font-medium">Polo de Educação EAD</p>
<p className="text-zinc-500 text-[10px]">Parceiro Leadflow</p>
</div>
</div>
</div>

<div className="p-8 rounded-[24px] bg-[#0c0c0e] border border-white/5 relative flex flex-col justify-between group hover:border-rose-500/20 transition-all">
<div>
<div className="mb-6 text-rose-500 opacity-50">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm font-light leading-relaxed mb-6">
                                "Seu trabalho está agregando muito valor ao nosso negócio, fizemos a escolha certa."
                            </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/10 flex items-center justify-center text-[10px] text-white font-bold">CL</div>
<div>
<p className="text-white text-xs font-medium">Cliente Satisfeito</p>
<p className="text-zinc-500 text-[10px]">Empresário</p>
</div>
</div>
</div>

<div className="p-8 rounded-[24px] bg-[#0c0c0e] border border-white/5 relative flex flex-col justify-between group hover:border-rose-500/20 transition-all">
<div>
<div className="mb-6 text-rose-500 opacity-50">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm font-light leading-relaxed mb-6">
                                "A consultoria que nos entregou fez total diferença, nos abriu a mente sobre onde estamos errando, e o que devemos fazer para melhorar."
                            </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/10 flex items-center justify-center text-[10px] text-white font-bold">GC</div>
<div>
<p className="text-white text-xs font-medium">Gestão Comercial</p>
<p className="text-zinc-500 text-[10px]">Cliente Consultoria</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 bg-[#050505] relative border-t border-white/5">
<div className="text-center mb-16 relative z-10">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-3">Investimento <span className="text-zinc-500">do Projeto</span></h2>
<p className="text-zinc-500 font-light text-sm">Condição exclusiva para início imediato.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-5 max-w-5xl mx-auto w-full relative z-10">

<div className="md:col-span-4 bg-[#0c0c0e] border border-white/5 rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div>
<div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 mb-6">
<iconify-icon icon="solar:star-fall-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Escopo Completo</h3>
<p className="text-zinc-500 text-xs mb-6 leading-relaxed">Tudo que sua empresa precisa para destravar o crescimento em um único pacote.</p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-rose-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
                                Diagnóstico &amp; Setup
                            </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-rose-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
                                Gestão de Tráfego
                            </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-rose-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
                                Consultoria Comercial
                            </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-rose-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
                                CRM &amp; Automações
                            </div>
</div>
</div>
</div>

<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">

<div className="bg-[#0c0c0e] border border-white/5 rounded-[32px] p-8 flex flex-col justify-center items-center text-center relative">
<p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-3 font-bold">Contrato</p>
<p className="text-4xl font-medium text-white tracking-tighter">4 Meses</p>
<div className="mt-4 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-zinc-400">
                            Renovação Automática
                        </div>
</div>

<div className="bg-[#f5f5f5] rounded-[32px] p-8 flex flex-col justify-center relative overflow-hidden">
<p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-4">Pagamento</p>
<div className="space-y-2">
<p className="text-zinc-900 text-sm font-semibold flex items-center gap-2">
<iconify-icon className="text-rose-500" icon="solar:card-linear" width="18"></iconify-icon> 
                                Cartão de Crédito
                            </p>
<p className="text-zinc-900 text-sm font-semibold flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:bill-list-linear" width="18"></iconify-icon> 
                                Boleto Bancário (PJ)
                            </p>
<p className="text-zinc-900 text-sm font-semibold flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:wallet-money-linear" width="18"></iconify-icon> 
                                PIX à vista (-5%)
                            </p>
</div>
</div>

<div className="md:col-span-2 bg-gradient-main rounded-[32px] p-8 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl shadow-rose-900/30 group">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
<p className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 relative z-10">Valor Mensal</p>
<div className="flex flex-col items-center relative z-10">
<span className="text-lg text-white/50 line-through decoration-white/30 mb-1">R$ 5.000</span>
<span className="text-6xl font-bold text-white tracking-tighter">R$ 3.890</span>
</div>
<div className="bg-white/20 rounded-full px-5 py-1.5 mt-4 backdrop-blur-md border border-white/20 relative z-10">
<span className="text-xs text-white font-medium">+ Taxa única de setup (R$ 1.500)</span>
</div>
</div>
</div>

<div className="md:col-span-12 bg-[#0c0c0e] border border-white/5 rounded-[32px] p-4 pl-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-2">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 animate-pulse">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div className="text-center md:text-left">
<p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Validade</p>
<p className="text-white text-sm">Esta proposta expira em 5 dias.</p>
</div>
</div>
<button className="w-full md:w-auto bg-white text-black hover:bg-zinc-200 transition-colors px-8 py-4 rounded-[24px] font-semibold text-sm flex items-center justify-center gap-2 shadow-lg group">
                        Aprovar Proposta
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="mt-12 text-center border-t border-white/5 pt-8 max-w-2xl mx-auto">
<p className="text-zinc-600 text-[10px] leading-relaxed">
                    Ao aprovar esta proposta, você concorda com os termos de prestação de serviços. A nota fiscal será emitida automaticamente após a confirmação do primeiro pagamento.
                </p>
</div>
</section>
</main>

    </>
  );
}
