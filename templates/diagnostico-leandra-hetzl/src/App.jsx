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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons with thinner stroke
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Tab switching logic (Progressive Disclosure macro level)
        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.remove('active');
                setTimeout(() => el.style.display = 'none', 50); 
            });

            document.querySelectorAll('nav button').forEach(btn => {
                btn.className = "flex-1 flex justify-center items-center gap-2 px-4 py-2 rounded-full text-sm font-normal transition-all duration-300 text-zinc-500 hover:text-zinc-300";
            });

            setTimeout(() => {
                const target = document.getElementById(tabId);
                target.style.display = 'block';
                void target.offsetWidth; 
                target.classList.add('active');
            }, 50);

            const activeBtn = document.getElementById('btn-' + tabId);
            activeBtn.className = "flex-1 flex justify-center items-center gap-2 px-4 py-2 rounded-full text-sm font-normal transition-all duration-300 bg-white/10 text-white shadow-sm";
        }

        // Accordion logic (Progressive Disclosure micro level)
        function toggleAccordion(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.icon-rotator');
            
            if (content.classList.contains('open')) {
                content.classList.remove('open');
                icon.style.transform = 'rotate(0deg)';
                button.classList.remove('pb-4'); // optional visual tweak
            } else {
                content.classList.add('open');
                icon.style.transform = 'rotate(180deg)';
                button.classList.add('pb-4');
            }
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
      
<div className="glow-bg"></div>

<header className="sticky top-0 z-50 bg-[#030303]/70 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-md border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300 font-normal text-xs tracking-tight shrink-0">
                LH
            </div>
<div className="hidden sm:flex flex-col">
<span className="text-sm font-normal tracking-tight text-white">Clínica Hetzl</span>
<span className="text-xs text-zinc-500 font-light">Auditoria de Growth</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-xs text-zinc-400 font-light">
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="calendar"></i>
                Março 2026
            </div>
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 text-zinc-400">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</header>

<section className="pt-24 pb-16 px-6 relative z-10 text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-xs text-zinc-400 mb-8 font-light tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-[#C4A35A]/70 shadow-[0_0_8px_rgba(196,163,90,0.5)]"></span>
            Diagnóstico Sistêmico
        </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 mb-6 leading-tight">
            Inteligência de dados <br className="hidden sm:block"/> para escalar a clínica.
        </h1>
<p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-xl mx-auto">
            Análise aprofundada dos canais de aquisição e playbook executável para destravar gargalos de conversão.
        </p>
</section>

<div className="flex justify-center mb-16 relative z-10 px-4">
<nav className="flex bg-white/[0.02] border border-white/5 rounded-full p-1.5 backdrop-blur-md overflow-x-auto w-full max-w-md">
<button className="flex-1 flex justify-center items-center gap-2 px-4 py-2 rounded-full text-sm font-normal transition-all duration-300 bg-white/10 text-white shadow-sm" id="btn-tab1" onclick="switchTab('tab1')">
                Positivos
            </button>
<button className="flex-1 flex justify-center items-center gap-2 px-4 py-2 rounded-full text-sm font-normal transition-all duration-300 text-zinc-500 hover:text-zinc-300" id="btn-tab2" onclick="switchTab('tab2')">
                Críticos
            </button>
<button className="flex-1 flex justify-center items-center gap-2 px-4 py-2 rounded-full text-sm font-normal transition-all duration-300 text-zinc-500 hover:text-zinc-300" id="btn-tab3" onclick="switchTab('tab3')">
                Playbook
            </button>
</nav>
</div>

<main className="flex-grow pb-24 px-4 md:px-8 max-w-5xl mx-auto w-full z-10 relative">



<section className="tab-content active space-y-12" id="tab1">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 rounded-2xl p-6 flex flex-col group">
<div className="flex justify-between items-start mb-8">
<span className="text-xs text-zinc-500 font-light uppercase tracking-widest">Faturamento</span>
<i className="w-4 h-4 text-[#C4A35A] opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-3xl font-normal tracking-tighter text-zinc-100 mb-1">R$110k</div>
<div className="text-sm text-zinc-500 font-light flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-green-500/50"></div> 100% orgânico</div>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 rounded-2xl p-6 flex flex-col group">
<div className="flex justify-between items-start mb-8">
<span className="text-xs text-zinc-500 font-light uppercase tracking-widest">Avaliações</span>
<i className="w-4 h-4 text-zinc-400 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="star"></i>
</div>
<div>
<div className="text-3xl font-normal tracking-tighter text-zinc-100 mb-1">5,0</div>
<div className="text-sm text-zinc-500 font-light flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> 96 reviews no Google</div>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 rounded-2xl p-6 flex flex-col group">
<div className="flex justify-between items-start mb-8">
<span className="text-xs text-zinc-500 font-light uppercase tracking-widest">Experiência</span>
<i className="w-4 h-4 text-zinc-400 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="award"></i>
</div>
<div>
<div className="text-3xl font-normal tracking-tighter text-zinc-100 mb-1">25 Anos</div>
<div className="text-sm text-zinc-500 font-light flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> Autoridade clínica</div>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 rounded-2xl p-6 flex flex-col group">
<div className="flex justify-between items-start mb-8">
<span className="text-xs text-zinc-500 font-light uppercase tracking-widest">Diferenciais</span>
<i className="w-4 h-4 text-zinc-400 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="layers"></i>
</div>
<div>
<div className="text-3xl font-normal tracking-tighter text-zinc-100 mb-1">Ativos</div>
<div className="text-sm text-zinc-500 font-light flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> BITMON IA + Equipe</div>
</div>
</div>
</div>

<div>
<h3 className="text-lg font-normal tracking-tight text-white mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-zinc-500" data-lucide="check-circle-2"></i>
                    Ativos validados pelo mercado
                </h3>
<div className="border-t border-white/5">
<div className="border-b border-white/5 group">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-base font-normal tracking-tight text-zinc-300 group-hover:text-white transition-colors">Produto com demanda real validada</span>
<div className="w-6 h-6 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-zinc-500 transition-transform duration-300 icon-rotator" data-lucide="chevron-down"></i>
</div>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="pb-6 pr-8 text-base text-zinc-400 font-light leading-relaxed">
                                    O faturamento de R$110k em fevereiro valida que o serviço vende bem, tem aceitação de mercado e ticket relevante. O problema não é o produto — é a clareza e eficiência do canal de aquisição digital.
                                </p>
</div>
</div>
</div>
<div className="border-b border-white/5 group">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-base font-normal tracking-tight text-zinc-300 group-hover:text-white transition-colors">Prova social subaproveitada</span>
<div className="w-6 h-6 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-zinc-500 transition-transform duration-300 icon-rotator" data-lucide="chevron-down"></i>
</div>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="pb-6 pr-8 text-base text-zinc-400 font-light leading-relaxed">
                                    5,0 estrelas com 96 avaliações no Google Meu Negócio entregam credibilidade imediata para qualquer lead que chega via busca paga. Este é um ativo massivo que não está visível nas landing pages atuais.
                                </p>
</div>
</div>
</div>
<div className="border-b border-white/5 group">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-base font-normal tracking-tight text-zinc-300 group-hover:text-white transition-colors">Base infraestrutural existente</span>
<div className="w-6 h-6 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-zinc-500 transition-transform duration-300 icon-rotator" data-lucide="chevron-down"></i>
</div>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="pb-6 pr-8 text-base text-zinc-400 font-light leading-relaxed">
                                    A clínica já possui duas landing pages específicas, conta de Google Ads, equipe estruturada (secretária, conteúdo, auxiliar). O esforço não é construir do zero, mas refatorar o fluxo de dados entre essas partes.
                                </p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10"><i className="w-32 h-32" data-lucide="git-merge"></i></div>
<div className="relative z-10">
<div className="text-xs text-[#C4A35A] font-light mb-3 uppercase tracking-widest">Oportunidade Oculta</div>
<h2 className="text-2xl font-normal tracking-tight text-white mb-2">Monetização da base atual</h2>
<p className="text-base text-zinc-400 font-light mb-6 max-w-lg">Alavanca paralela de crescimento com CAC próximo a zero. Resultado potencial no curto prazo.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/5 text-sm text-zinc-300 font-light">Pacientes Uniodonto → particular</span>
<span className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/5 text-sm text-zinc-300 font-light">Leads frios na base</span>
<span className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/5 text-sm text-zinc-300 font-light">Upsell recorrente</span>
</div>
</div>
</div>
</section>



<section className="tab-content space-y-12" id="tab2">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white/[0.02] border border-white/5 hover:border-red-500/20 hover:bg-white/[0.04] transition-all duration-500 rounded-2xl p-6 flex flex-col group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
<div className="flex justify-between items-start mb-8">
<span className="text-xs text-zinc-500 font-light uppercase tracking-widest">Leads (30d)</span>
<i className="w-4 h-4 text-red-400 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="alert-circle"></i>
</div>
<div>
<div className="text-3xl font-normal tracking-tighter text-zinc-100 mb-1">1 fechado</div>
<div className="text-sm text-red-400/70 font-light">ROI negativo no canal</div>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 hover:border-red-500/20 hover:bg-white/[0.04] transition-all duration-500 rounded-2xl p-6 flex flex-col group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
<div className="flex justify-between items-start mb-8">
<span className="text-xs text-zinc-500 font-light uppercase tracking-widest">Atividade Ads</span>
<i className="w-4 h-4 text-zinc-400 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="activity"></i>
</div>
<div>
<div className="text-3xl font-normal tracking-tighter text-zinc-100 mb-1">21%</div>
<div className="text-sm text-zinc-500 font-light">Campanha offline 79% do tempo</div>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 hover:border-red-500/20 hover:bg-white/[0.04] transition-all duration-500 rounded-2xl p-6 flex flex-col group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
<div className="flex justify-between items-start mb-8">
<span className="text-xs text-zinc-500 font-light uppercase tracking-widest">Otimização</span>
<i className="w-4 h-4 text-zinc-400 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="bar-chart-2"></i>
</div>
<div>
<div className="text-3xl font-normal tracking-tighter text-zinc-100 mb-1">54%</div>
<div className="text-sm text-zinc-500 font-light">Meta ideal &gt; 80%</div>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 rounded-2xl p-6 flex flex-col group">
<div className="flex justify-between items-start mb-8">
<span className="text-xs text-zinc-500 font-light uppercase tracking-widest">Pixel Meta</span>
<i className="w-4 h-4 text-zinc-400 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="scan-line"></i>
</div>
<div>
<div className="text-3xl font-normal tracking-tighter text-zinc-100 mb-1">Ausente</div>
<div className="text-sm text-red-400/70 font-light">Zero rastreabilidade</div>
</div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div>
<h3 className="text-xl font-normal tracking-tight text-white mb-2">Ilusão Operacional do Funil</h3>
<p className="text-base text-zinc-400 font-light">O Google Ads registra "conversões" que são apenas cliques no botão do WhatsApp, mascarando a perda real de leads no atendimento.</p>
</div>
<div className="shrink-0">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-light">
<i className="w-4 h-4" data-lucide="alert-triangle"></i> Diagnóstico Severo
                        </div>
</div>
</div>

<div className="w-full overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/10 text-xs text-zinc-500 font-light uppercase tracking-widest">
<th className="py-4 font-normal">Etapa da Jornada</th>
<th className="py-4 font-normal">Status de Rastreio</th>
<th className="py-4 font-normal text-right">Perda Estimada</th>
</tr>
</thead>
<tbody className="text-sm font-light">
<tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
<td className="py-4 text-zinc-300">1. Clique no anúncio</td>
<td className="py-4"><span className="flex items-center gap-2 text-zinc-400"><i className="w-3.5 h-3.5 text-zinc-500" data-lucide="check"></i> Medido (Google)</span></td>
<td className="py-4 text-right text-zinc-500">-</td>
</tr>
<tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
<td className="py-4 text-zinc-300">2. Visita na Landing Page</td>
<td className="py-4"><span className="flex items-center gap-2 text-zinc-400"><i className="w-3.5 h-3.5 text-zinc-500" data-lucide="check"></i> Medido (GA4)</span></td>
<td className="py-4 text-right text-zinc-500">~40%</td>
</tr>
<tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
<td className="py-4 text-zinc-300">3. Clique no botão WhatsApp</td>
<td className="py-4"><span className="flex items-center gap-2 text-zinc-200"><i className="w-3.5 h-3.5 text-[#C4A35A]" data-lucide="alert-circle"></i> Falsa Conversão</span></td>
<td className="py-4 text-right text-zinc-500">~30%</td>
</tr>
<tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors bg-red-500/[0.02]">
<td className="py-4 text-red-200">4. Conversa iniciada &amp; Qualificação</td>
<td className="py-4"><span className="flex items-center gap-2 text-red-400"><i className="w-3.5 h-3.5" data-lucide="x"></i> Ponto Cego Total</span></td>
<td className="py-4 text-right text-red-400">Gargalo Crítico</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="py-4 text-zinc-300">5. Agendamento &amp; Venda</td>
<td className="py-4"><span className="flex items-center gap-2 text-red-400/50"><i className="w-3.5 h-3.5" data-lucide="x"></i> Não integrado</span></td>
<td className="py-4 text-right text-zinc-500">-</td>
</tr>
</tbody>
</table>
</div>
</div>

<div>
<h3 className="text-lg font-normal tracking-tight text-white mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-zinc-500" data-lucide="bug"></i>
                    Detalhamento das falhas
                </h3>
<div className="border-t border-white/5">
<div className="border-b border-white/5 group">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
<span className="text-base font-normal tracking-tight text-zinc-300 group-hover:text-white transition-colors">Motor de campanhas intermitente</span>
</div>
<i className="w-4 h-4 text-zinc-500 transition-transform duration-300 icon-rotator" data-lucide="chevron-down"></i>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="pb-6 pl-5 pr-8 text-base text-zinc-400 font-light leading-relaxed">
                                    O grupo G1 esteve ativo apenas 21% do tempo (7 de 33 dias). O algoritmo do Google precisa de continuidade para aprender e otimizar. Campanhas que ligam e desligam geram CPCs altos e baixa qualidade.
                                </p>
</div>
</div>
</div>
<div className="border-b border-white/5 group">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
<span className="text-base font-normal tracking-tight text-zinc-300 group-hover:text-white transition-colors">Ausência de scripts e cadência de vendas</span>
</div>
<i className="w-4 h-4 text-zinc-500 transition-transform duration-300 icon-rotator" data-lucide="chevron-down"></i>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="pb-6 pl-5 pr-8 text-base text-zinc-400 font-light leading-relaxed">
                                    O lead chega pela landing page aquecido, mas esfria no WhatsApp por falta de um roteiro de qualificação, SLA de tempo de resposta e uso estratégico da simulação BITMON como isca de agendamento.
                                </p>
</div>
</div>
</div>
<div className="border-b border-white/5 group">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#C4A35A]"></span>
<span className="text-base font-normal tracking-tight text-zinc-300 group-hover:text-white transition-colors">Conteúdo de rede social sem função de alcance</span>
</div>
<i className="w-4 h-4 text-zinc-500 transition-transform duration-300 icon-rotator" data-lucide="chevron-down"></i>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="pb-6 pl-5 pr-8 text-base text-zinc-400 font-light leading-relaxed">
                                    Com 959 posts para 2.644 seguidores, a produção atual alimenta quem já conhece a clínica, mas não atrai público novo (ToFu). Falta engenharia de conteúdo focada em jornada e descoberta (Reels estratégicos).
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="tab-content space-y-12" id="tab3">

<div className="text-center mb-8">
<h2 className="text-2xl font-normal tracking-tight text-white mb-3">Plano de Execução</h2>
<p className="text-base text-zinc-400 font-light max-w-lg mx-auto">Ações priorizadas por impacto e esforço. Clique nas fases para visualizar o detalhamento técnico.</p>
</div>

<div className="max-w-3xl mx-auto space-y-4">

<div className="bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors rounded-2xl overflow-hidden">
<button className="w-full p-6 flex items-center justify-between text-left focus:outline-none group" onclick="toggleAccordion(this)">
<div className="flex items-center gap-6">
<div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 text-sm shrink-0 font-light group-hover:text-white group-hover:bg-white/5 transition-all">
                                1
                            </div>
<div>
<h3 className="text-lg font-normal tracking-tight text-zinc-200 group-hover:text-white transition-colors mb-1">Fundação Técnica e Rastreio</h3>
<p className="text-sm text-zinc-500 font-light">Dias 1 a 2 — O requisito básico para operar.</p>
</div>
</div>
<i className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-transform duration-300 icon-rotator" data-lucide="chevron-down"></i>
</button>
<div className="accordion-content">
<div className="accordion-inner px-6 pb-6 pt-2 ml-16">
<ul className="space-y-4 text-base text-zinc-400 font-light border-l border-white/5 pl-6">
<li className="relative">
<span className="absolute -left-[29px] top-2 w-1.5 h-1.5 rounded-full bg-white/20"></span>
                                    Instalar Pixel do Meta Ads nas duas Landing Pages (Eventos: PageView e Lead).
                                </li>
<li className="relative">
<span className="absolute -left-[29px] top-2 w-1.5 h-1.5 rounded-full bg-white/20"></span>
                                    Auditoria com a gestão para garantir budget diário ininterrupto (mínimo R$30/dia contínuo).
                                </li>
<li className="relative">
<span className="absolute -left-[29px] top-2 w-1.5 h-1.5 rounded-full bg-white/20"></span>
                                    Implementar planilha de CRM simples para mapear: Clique &gt; Conversa &gt; Agendamento &gt; Comparecimento.
                                </li>
</ul>
</div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors rounded-2xl overflow-hidden">
<button className="w-full p-6 flex items-center justify-between text-left focus:outline-none group" onclick="toggleAccordion(this)">
<div className="flex items-center gap-6">
<div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 text-sm shrink-0 font-light group-hover:text-white group-hover:bg-white/5 transition-all">
                                2
                            </div>
<div>
<h3 className="text-lg font-normal tracking-tight text-zinc-200 group-hover:text-white transition-colors mb-1">Otimização de Conversão (CRO)</h3>
<p className="text-sm text-zinc-500 font-light">Dias 3 a 4 — Fechar os buracos do funil atual.</p>
</div>
</div>
<i className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-transform duration-300 icon-rotator" data-lucide="chevron-down"></i>
</button>
<div className="accordion-content">
<div className="accordion-inner px-6 pb-6 pt-2 ml-16">
<ul className="space-y-4 text-base text-zinc-400 font-light border-l border-white/5 pl-6">
<li className="relative">
<span className="absolute -left-[29px] top-2 w-1.5 h-1.5 rounded-full bg-[#C4A35A]/50"></span>
                                    Elevar a Prova Social nas LPs: Adicionar bloco "5,0 ★ · 96 avaliações" logo abaixo da dobra principal.
                                </li>
<li className="relative">
<span className="absolute -left-[29px] top-2 w-1.5 h-1.5 rounded-full bg-[#C4A35A]/50"></span>
                                    Criar script de WhatsApp padrão em 3 etapas: Recepção &gt; Qualificação por simulação BITMON &gt; Fechamento de agenda.
                                </li>
</ul>
</div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors rounded-2xl overflow-hidden">
<button className="w-full p-6 flex items-center justify-between text-left focus:outline-none group" onclick="toggleAccordion(this)">
<div className="flex items-center gap-6">
<div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 text-sm shrink-0 font-light group-hover:text-white group-hover:bg-white/5 transition-all">
                                3
                            </div>
<div>
<h3 className="text-lg font-normal tracking-tight text-zinc-200 group-hover:text-white transition-colors mb-1">Refatoração de Tráfego &amp; Conteúdo</h3>
<p className="text-sm text-zinc-500 font-light">Dias 5 a 7 — Ligar o motor reestruturado.</p>
</div>
</div>
<i className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-transform duration-300 icon-rotator" data-lucide="chevron-down"></i>
</button>
<div className="accordion-content">
<div className="accordion-inner px-6 pb-6 pt-2 ml-16">
<ul className="space-y-4 text-base text-zinc-400 font-light border-l border-white/5 pl-6">
<li className="relative">
<span className="absolute -left-[29px] top-2 w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                                    Reestruturar Google Ads separando intenções: Lentes vs Facetas. Pausar palavras-chave com 0% CTR histórico.
                                </li>
<li className="relative">
<span className="absolute -left-[29px] top-2 w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                                    Alinhar briefing de rede social: 1 vídeo focado em descoberta (ToFu) por semana mostrando a jornada emocional do paciente.
                                </li>
<li className="relative">
<span className="absolute -left-[29px] top-2 w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                                    Ativar primeira campanha de Remarketing (Meta Ads) para quem visitou as LPs nos últimos 30 dias.
                                </li>
</ul>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="py-12 text-center text-sm text-zinc-600 font-light relative z-10 border-t border-white/5">
        Terminal Operacional Hetzl · Acesso Restrito
    </footer>



    </>
  );
}
