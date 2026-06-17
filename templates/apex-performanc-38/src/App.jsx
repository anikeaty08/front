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



        // Inicializa os ícones Lucide
        lucide.createIcons();
    
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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="text-[#F26522] w-6 h-6" data-lucide="activity" strokeWidth="1.5"></i>
<span className="text-xl font-medium tracking-tight text-slate-900">APEX</span>
<span className="text-sm font-normal text-slate-400 hidden sm:inline-block">Performance Studio</span>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-base font-normal text-slate-600 hover:text-slate-900 transition-colors" href="#sobre">Sobre</a>
<a className="text-base font-normal text-slate-600 hover:text-slate-900 transition-colors" href="#estrutura">Estrutura</a>
<a className="text-base font-normal text-slate-600 hover:text-slate-900 transition-colors" href="#protocolo">Protocolo</a>
<a className="text-base font-normal text-slate-600 hover:text-slate-900 transition-colors" href="#planos">Planos</a>
<a className="text-base font-normal text-slate-600 hover:text-slate-900 transition-colors" href="#coaches">Coaches</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-base font-normal text-slate-900 hover:text-slate-600 transition-colors" href="#contato">Falar com Especialista</a>
<a className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#F26522] text-white text-base font-normal hover:bg-[#d9581c] transition-colors shadow-sm" href="#agendar">
                    Agendar Visita
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden" style={{backgroundImage: 'radial-gradient(at 90% 10%, rgba(242, 101, 34, 0.15) 0px, transparent 40%), radial-gradient(at 10% 90%, rgba(139, 92, 246, 0.1) 0px, transparent 40%)'}}>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FEF2ED] border border-orange-100 mb-6">
<i className="text-[#F26522] w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-sm font-normal uppercase tracking-widest text-[#F26522]">Bem-vindo à APEX</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-slate-900 leading-tight mb-6">
                        Treine com quem leva performance a sério.
                        <span className="text-[#F26522] block mt-2">Corpo. Mente. Resultado.</span>
</h1>
<p className="text-lg lg:text-xl font-light text-slate-600 mb-10 leading-relaxed">
                        A APEX não é uma academia comum. É um ambiente projetado para quem quer evolução real — com estrutura de alto padrão, metodologia validada e coaches que transformam rotina em resultado.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F26522] text-white text-lg font-normal hover:bg-[#d9581c] transition-colors shadow-lg shadow-[#F26522]/20" href="#agendar">
                            Agendar Visita Gratuita
                            <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm text-slate-900 text-lg font-normal hover:bg-slate-50 transition-colors" href="#contato">
                            Falar com Especialista
                        </a>
</div>
<div className="flex flex-wrap items-center gap-4">
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm text-base font-normal text-slate-800">
<i className="text-[#F26522] w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
                            +2.400 alunos
                        </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm text-base font-normal text-slate-800">
<i className="text-yellow-400 fill-current w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
                            4.9 avaliação
                        </div>
</div>
</div>

<div className="relative w-full aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl border border-white/50">
<img alt="Pessoa correndo" className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1552674605-171d31b200b2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-[sweep_1s_ease-in-out]">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#F26522]">
<i className="w-5 h-5 fill-[#F26522]/20" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm font-normal text-slate-500">Gasto Calórico</p>
<p className="text-lg font-medium tracking-tight text-slate-900">1.200 kcal</p>
</div>
</div>

<div className="absolute top-12 right-8 bg-white/90 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-[sweep_1.2s_ease-in-out]">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<i className="w-5 h-5" data-lucide="footprints" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm font-normal text-slate-500">Passos</p>
<p className="text-lg font-medium tracking-tight text-slate-900">8.432</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="sobre">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1 relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-[3/4] shadow-lg border border-slate-100">
<img alt="Pessoa fazendo musculação" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10 hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="order-1 lg:order-2">
<span className="text-sm font-normal uppercase tracking-widest text-[#F26522] mb-4 block">Sobre a APEX</span>
<h2 className="text-3xl lg:text-4xl font-normal tracking-tight text-slate-900 mb-6">
                        Criada por atletas. Construída para resultados.
                    </h2>
<div className="space-y-4 text-base lg:text-lg font-light text-slate-600 leading-relaxed mb-10">
<p>A APEX Performance Studio nasceu de uma convicção simples: o ambiente em que você treina importa tanto quanto o esforço que você coloca. Fundada em 2014, desenvolvemos um espaço onde estrutura, metodologia e suporte humano se encontram para entregar evolução real.</p>
<p>Mais do que uma academia, somos um sistema. Cada detalhe — dos equipamentos ao protocolo de treino, do ambiente ao acompanhamento dos coaches — foi pensado para remover os obstáculos que impedem sua evolução.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-[#F26522]/30 hover:bg-[#FEF2ED]/50 transition-all">
<i className="w-6 h-6 text-[#F26522] mb-4" data-lucide="building-2" strokeWidth="1.5"></i>
<h3 className="text-lg font-normal tracking-tight text-slate-900 mb-2">Estrutura Premium</h3>
<p className="text-base font-light text-slate-600">Equipamentos profissionais e ambiente projetado para foco total.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-[#F26522]/30 hover:bg-[#FEF2ED]/50 transition-all">
<i className="w-6 h-6 text-[#F26522] mb-4" data-lucide="target" strokeWidth="1.5"></i>
<h3 className="text-lg font-normal tracking-tight text-slate-900 mb-2">Método Próprio</h3>
<p className="text-base font-light text-slate-600">Sistema de treino periodizado, desenvolvido e validado internamente.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="estrutura">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-12">
<span className="text-sm font-normal uppercase tracking-widest text-[#F26522] mb-4 block">Estrutura de ponta</span>
<h2 className="text-3xl lg:text-4xl font-normal tracking-tight mb-6">
                    Equipamentos que acompanham sua evolução.
                </h2>
<p className="text-base lg:text-lg font-light text-slate-400 leading-relaxed">
                    Cada área da APEX foi pensada para cobrir todas as fases do seu treino — do aquecimento à recuperação. Linha profissional, manutenção semanal e renovação contínua.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-800/40 border border-slate-700/50 rounded-[2rem] p-4 lg:p-8 backdrop-blur-sm">
<div className="p-4 lg:p-6 order-2 lg:order-1">
<h3 className="text-2xl font-normal tracking-tight mb-4 text-white">Zonas de Alta Performance</h3>
<p className="text-base font-light text-slate-400 mb-8 leading-relaxed">Não acreditamos em máquinas obsoletas. Nosso parque de equipamentos é focado em biomecânica perfeita, conectividade e durabilidade para treinos intensos.</p>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#F26522]/20 flex items-center justify-center shrink-0 mt-0.5">
<i className="text-[#F26522] w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-slate-300 font-light">Área de força livre com piso emborrachado olímpico e racks duplos.</span>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#F26522]/20 flex items-center justify-center shrink-0 mt-0.5">
<i className="text-[#F26522] w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-slate-300 font-light">Esteiras e elípticos com simulação de terreno e monitoramento cardíaco.</span>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#F26522]/20 flex items-center justify-center shrink-0 mt-0.5">
<i className="text-[#F26522] w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-slate-300 font-light">Máquinas com ajuste milimétrico e resistência suave em toda a amplitude.</span>
</li>
</ul>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-white font-normal text-base lg:text-lg hover:text-[#F26522] transition-colors pb-1 border-b border-slate-700 hover:border-[#F26522]" href="#agendar">
                            Conhecer estrutura pessoalmente
                            <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="order-1 lg:order-2 w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700">
<img alt="Estrutura de equipamentos da academia" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100" id="protocolo">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16 text-center mx-auto">
<span className="text-sm font-normal uppercase tracking-widest text-[#F26522] mb-4 block">Como funciona</span>
<h2 className="text-3xl lg:text-5xl font-normal tracking-tight text-slate-900 mb-6 leading-tight">
                    Acompanhamento diário.<br/>Evolução constante.
                </h2>
<p className="text-base lg:text-lg font-light text-slate-600 leading-relaxed">
                    A maioria das pessoas treina sem sistema. O Protocolo APEX combina avaliação periódica, programação em fases e nosso ecossistema digital para garantir que você nunca perca o foco do seu objetivo.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="md:col-span-2 bg-white rounded-3xl p-2 shadow-sm border border-slate-200 overflow-hidden relative aspect-square md:aspect-auto md:h-[400px]">
<img alt="Pessoas se alongando e treinando" className="w-full h-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-lg">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-full bg-[#FEF2ED] text-[#F26522]">
<i className="w-5 h-5" data-lucide="dumbbell" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-normal tracking-tight text-slate-900">Treinamento Dirigido</h4>
</div>
<p className="text-base font-light text-slate-600">Sessões estruturadas por foco: mobilidade, força, ou condicionamento aeróbico.</p>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between md:h-[400px]">
<div>
<div className="flex items-center gap-2 mb-6 text-slate-500">
<i className="w-5 h-5" data-lucide="activity" strokeWidth="1.5"></i>
<span className="text-sm font-normal">Acompanhe seu progresso</span>
</div>
<div className="mb-4">
<span className="text-6xl font-medium tracking-tight text-[#F26522]">07</span>
<span className="text-base font-normal text-slate-400 block mt-1">dias de atualização</span>
</div>
</div>
<div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-normal text-slate-600">Meta Semanal</span>
<span className="text-sm font-medium text-slate-900">6/7</span>
</div>
<div className="flex justify-between items-center gap-1">
<div className="w-full aspect-square rounded-full bg-[#F26522] text-white flex items-center justify-center border-2 border-white shadow-sm"><i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i></div>
<div className="w-full aspect-square rounded-full bg-[#F26522] text-white flex items-center justify-center border-2 border-white shadow-sm"><i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i></div>
<div className="w-full aspect-square rounded-full bg-[#F26522] text-white flex items-center justify-center border-2 border-white shadow-sm"><i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i></div>
<div className="w-full aspect-square rounded-full bg-[#F26522] text-white flex items-center justify-center border-2 border-white shadow-sm"><i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i></div>
<div className="w-full aspect-square rounded-full bg-[#F26522] text-white flex items-center justify-center border-2 border-white shadow-sm"><i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i></div>
<div className="w-full aspect-square rounded-full bg-[#F26522] text-white flex items-center justify-center border-2 border-white shadow-sm"><i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i></div>
<div className="w-full aspect-square rounded-full bg-slate-200 border-2 border-white"></div>
</div>
<div className="flex justify-between items-center mt-2 px-1 text-xs font-normal text-slate-400">
<span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span><span>D</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="planos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-sm font-normal uppercase tracking-widest text-[#F26522] mb-4 block">Escolha seu plano</span>
<h2 className="text-3xl lg:text-4xl font-normal tracking-tight text-slate-900 mb-4">
                    Invista no único corpo que você vai ter.
                </h2>
<p className="text-base font-light text-slate-600">
                    Três planos desenhados para diferentes perfis e objetivos — todos com acesso à estrutura premium.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto mb-12">

<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200">
<span className="inline-block px-3 py-1 rounded-md bg-white text-slate-600 text-sm font-normal border border-slate-200 mb-6">Ideal para começar</span>
<h3 className="text-2xl font-normal text-slate-900 tracking-tight mb-2">Livre</h3>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-5xl font-medium tracking-tight text-slate-900">R$ 249</span>
<span className="text-base text-slate-500">/mês</span>
</div>
<ul className="space-y-4 mb-10 text-base font-light text-slate-600">
<li className="flex items-start gap-3"><i className="text-slate-900 w-5 h-5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i> Acesso livre em horário comercial</li>
<li className="flex items-start gap-3"><i className="text-slate-900 w-5 h-5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i> Avaliação física inicial</li>
<li className="flex items-start gap-3"><i className="text-slate-900 w-5 h-5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i> Acesso total às áreas de treino</li>
<li className="flex items-start gap-3 text-slate-400 opacity-60"><i className="w-5 h-5 shrink-0" data-lucide="x-circle" strokeWidth="1.5"></i> Sem acompanhamento contínuo</li>
</ul>
<a className="block w-full text-center px-6 py-4 rounded-full border border-slate-300 bg-white text-slate-900 text-base font-normal hover:bg-slate-100 transition-colors" href="#matricula">Selecionar Livre</a>
</div>

<div className="p-8 rounded-[2rem] bg-[#F26522] text-white shadow-2xl relative transform md:-translate-y-4">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-normal tracking-wide">Mais escolhido</div>
<h3 className="text-2xl font-normal tracking-tight mb-2 mt-2">Plus</h3>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-5xl font-medium tracking-tight">R$ 449</span>
<span className="text-base text-white/70">/mês</span>
</div>
<ul className="space-y-4 mb-10 text-base font-light text-white/90">
<li className="flex items-start gap-3"><i className="text-white w-5 h-5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i> Tudo do plano Livre</li>
<li className="flex items-start gap-3"><i className="text-white w-5 h-5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i> Protocolo APEX ativo</li>
<li className="flex items-start gap-3"><i className="text-white w-5 h-5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i> 4 sessões de coach/mês</li>
<li className="flex items-start gap-3"><i className="text-white w-5 h-5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i> Reavaliação a cada 8 semanas</li>
<li className="flex items-start gap-3"><i className="text-white w-5 h-5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i> App de treino e histórico</li>
</ul>
<a className="block w-full text-center px-6 py-4 rounded-full bg-slate-900 text-white text-base font-normal hover:bg-slate-800 transition-colors shadow-sm" href="#matricula">Selecionar Plus</a>
</div>

<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200">
<h3 className="text-2xl font-normal text-slate-900 tracking-tight mb-2">Elite</h3>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-5xl font-medium tracking-tight text-slate-900">R$ 749</span>
<span className="text-base text-slate-500">/mês</span>
</div>
<ul className="space-y-4 mb-10 text-base font-light text-slate-600">
<li className="flex items-start gap-3"><i className="text-slate-900 w-5 h-5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i> Tudo do plano Plus</li>
<li className="flex items-start gap-3"><i className="text-slate-900 w-5 h-5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i> Coach exclusivo dedicado</li>
<li className="flex items-start gap-3"><i className="text-slate-900 w-5 h-5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i> Sessões ilimitadas</li>
<li className="flex items-start gap-3"><i className="text-slate-900 w-5 h-5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i> Orientação nutricional inclusa</li>
</ul>
<a className="block w-full text-center px-6 py-4 rounded-full border border-slate-300 bg-white text-slate-900 text-base font-normal hover:bg-slate-100 transition-colors" href="#matricula">Selecionar Elite</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="coaches">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-sm font-normal uppercase tracking-widest text-[#F26522] mb-4 block">Nossa equipe</span>
<h2 className="text-3xl lg:text-4xl font-normal tracking-tight text-slate-900 mb-4">
                    Coaches que conhecem o seu objetivo.
                </h2>
<p className="text-base font-light text-slate-600 max-w-2xl">
                    Cada profissional da APEX é selecionado por formação técnica e comprometimento real com a evolução dos alunos.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

<div className="group cursor-pointer bg-white p-3 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="aspect-[4/5] bg-slate-100 rounded-2xl mb-4 overflow-hidden relative">
<img alt="Coach Felipe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-2 pb-2">
<h3 className="text-xl font-normal tracking-tight text-slate-900 mb-1">Felipe Andrade</h3>
<p className="text-sm font-normal text-[#F26522] mb-3">Força e Hipertrofia</p>
<p className="text-sm font-light text-slate-500 line-clamp-2">Especialização em biomecânica e treinos de força de alta intensidade.</p>
</div>
</div>

<div className="group cursor-pointer bg-white p-3 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="aspect-[4/5] bg-slate-100 rounded-2xl mb-4 overflow-hidden relative">
<img alt="Coach Camila" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-2 pb-2">
<h3 className="text-xl font-normal tracking-tight text-slate-900 mb-1">Camila Torres</h3>
<p className="text-sm font-normal text-[#F26522] mb-3">Condicionamento</p>
<p className="text-sm font-light text-slate-500 line-clamp-2">Especialista em emagrecimento sustentável e rotinas metabólicas.</p>
</div>
</div>

<div className="group cursor-pointer bg-white p-3 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="aspect-[4/5] bg-slate-100 rounded-2xl mb-4 overflow-hidden relative">
<img alt="Coach Bruno" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-2 pb-2">
<h3 className="text-xl font-normal tracking-tight text-slate-900 mb-1">Bruno Castilho</h3>
<p className="text-sm font-normal text-[#F26522] mb-3">Mobilidade</p>
<p className="text-sm font-light text-slate-500 line-clamp-2">Foco em reabilitação, prevenção de lesões e movimento humano integral.</p>
</div>
</div>

<div className="group cursor-pointer bg-white p-3 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="aspect-[4/5] bg-slate-100 rounded-2xl mb-4 overflow-hidden relative">
<img alt="Coach Luana" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-2 pb-2">
<h3 className="text-xl font-normal tracking-tight text-slate-900 mb-1">Luana Mendes</h3>
<p className="text-sm font-normal text-[#F26522] mb-3">Performance Feminina</p>
<p className="text-sm font-light text-slate-500 line-clamp-2">Saúde hormonal, força e composição corporal para todas as fases.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-900 text-white relative overflow-hidden" id="contato">
<div className="absolute inset-0 opacity-30 pointer-events-none" style={{background: 'radial-gradient(circle at center, #F26522 0%, transparent 60%)'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl lg:text-6xl font-normal tracking-tight mb-8">
                Pronto para evoluir?
            </h2>
<p className="text-lg lg:text-xl font-light text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Quem chega até aqui não está procurando mais do mesmo. Dê o primeiro passo para conhecer o método que vai transformar seus resultados.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#F26522] text-white text-lg font-normal hover:bg-[#d9581c] transition-colors shadow-lg" href="#agendar">
                    Agendar Visita Gratuita
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-700 bg-white/5 backdrop-blur-sm text-white text-lg font-normal hover:bg-slate-800 transition-colors" href="#contato">
                    Falar via WhatsApp
                </a>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="lg:col-span-1">
<span className="flex items-center gap-2 mb-4">
<i className="text-slate-900 w-6 h-6" data-lucide="activity" strokeWidth="1.5"></i>
<span className="text-2xl font-medium tracking-tight text-slate-900">APEX</span>
</span>
<p className="text-base font-light text-slate-500 leading-relaxed mb-6">
                        Treine com método. Evolua com consistência.
                    </p>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-4 tracking-tight">Navegação</h4>
<ul className="space-y-3 text-base font-light text-slate-500">
<li><a className="hover:text-[#F26522] transition-colors" href="#sobre">Sobre a APEX</a></li>
<li><a className="hover:text-[#F26522] transition-colors" href="#protocolo">Protocolo</a></li>
<li><a className="hover:text-[#F26522] transition-colors" href="#planos">Planos</a></li>
<li><a className="hover:text-[#F26522] transition-colors" href="#coaches">Coaches</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-4 tracking-tight">Contato</h4>
<ul className="space-y-4 text-base font-light text-slate-500">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-slate-400" data-lucide="phone" strokeWidth="1.5"></i> (11) 3042-7891</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-slate-400" data-lucide="mail" strokeWidth="1.5"></i> contato@apex.com.br</li>
<li className="flex items-start gap-3 mt-2">
<i className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Av. Paulista, 1000<br/>São Paulo, SP</span>
</li>
</ul>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-4 tracking-tight">Redes</h4>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#F26522] hover:border-[#F26522] transition-colors" href="#"><i className="w-5 h-5" data-lucide="camera" strokeWidth="1.5"></i></a>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#F26522] hover:border-[#F26522] transition-colors" href="#"><i className="w-5 h-5" data-lucide="video" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm font-light text-slate-400">© 2025 APEX Performance Studio. Todos os direitos reservados.</p>
</div>
</div>
</footer>


    </>
  );
}
