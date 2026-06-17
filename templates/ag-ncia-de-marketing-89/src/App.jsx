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
      

<nav className="fixed w-full z-50 top-0 left-0 bg-[#FFFAF1]/80 backdrop-blur-md border-b border-black/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-medium tracking-tighter uppercase group flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-black text-[#FFFAF1] flex items-center justify-center rounded-sm text-xs font-bold">K</div>
                AGÊNCIA KAGI
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-black/60">
<a className="hover:text-black transition-colors" href="#services">Serviços</a>
<a className="hover:text-black transition-colors" href="#approach">Metodologia</a>
<a className="hover:text-black transition-colors" href="#results">Resultados</a>
</div>

<a className="hidden md:flex items-center gap-2 text-sm font-medium border border-black/10 bg-white px-4 py-2 rounded-full hover:border-black/30 transition-all shadow-sm" href="#contact">
                Solicitar Auditoria
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<button className="md:hidden text-black">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="opacity-[0.03] z-0 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto relative">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8 fade-in-up delay-100">
                Crescimento em dados.<br/>
<span className="text-black/40">Escala automatizada.</span>
</h1>
<p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up delay-200 font-light">
                A Agência Kagi une a criatividade à lógica. Unimos SEO avançado, Business Intelligence e Automação para arquitetar motores de receita previsíveis.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 fade-in-up delay-300">
<button className="w-full md:w-auto px-8 py-3.5 bg-black text-[#FFFAF1] text-sm font-medium rounded-full hover:bg-black/80 transition-all flex items-center justify-center gap-2">
                    Escalar Agora
                    <svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</button>
<button className="w-full md:w-auto px-8 py-3.5 bg-white border border-black/10 text-black text-sm font-medium rounded-full hover:bg-gray-50 transition-all">
                    Ver Cases
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto relative fade-in-up delay-300">
<div className="absolute -inset-1 bg-gradient-to-b from-black/5 to-transparent rounded-xl blur-lg"></div>
<div className="relative bg-white border border-black/5 rounded-xl shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] flex flex-col">

<div className="h-10 border-b border-black/5 flex items-center px-4 gap-2 bg-[#FFFAF1]/50">
<div className="w-3 h-3 rounded-full bg-black/10"></div>
<div className="w-3 h-3 rounded-full bg-black/10"></div>
<div className="w-3 h-3 rounded-full bg-black/10"></div>
</div>

<div className="flex-1 p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 bg-white">

<div className="space-y-6">
<div className="p-4 rounded-lg border border-black/5 bg-[#FFFAF1]/30">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-black/40 uppercase tracking-wider">ROAS</span>
<svg className="lucide lucide-bar-chart-2 w-4 h-4 text-black/20" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<div className="text-3xl font-medium tracking-tight">12.4x</div>
<div className="text-xs text-green-600 mt-1 flex items-center gap-1">
<svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                +24% essa semana
                            </div>
</div>
<div className="p-4 rounded-lg border border-black/5 bg-[#FFFAF1]/30">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-black/40 uppercase tracking-wider">Tráfego Orgânico</span>
<svg className="lucide lucide-globe w-4 h-4 text-black/20" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="text-3xl font-medium tracking-tight">84.2k</div>
</div>
</div>

<div className="md:col-span-2 flex flex-col justify-end">
<div className="flex items-end justify-between h-32 md:h-48 gap-2">
<div className="w-full bg-black/5 rounded-t-sm h-[20%] relative group">
<div className="absolute bottom-0 w-full bg-black h-[0%] transition-all duration-1000 group-hover:h-[100%]"></div>
</div>
<div className="w-full bg-black/5 rounded-t-sm h-[35%] relative group">
<div className="absolute bottom-0 w-full bg-black h-[0%] transition-all duration-1000 delay-75 group-hover:h-[100%]"></div>
</div>
<div className="w-full bg-black/5 rounded-t-sm h-[45%] relative group">
<div className="absolute bottom-0 w-full bg-black h-[0%] transition-all duration-1000 delay-100 group-hover:h-[100%]"></div>
</div>
<div className="w-full bg-black/5 rounded-t-sm h-[30%] relative group">
<div className="absolute bottom-0 w-full bg-black h-[0%] transition-all duration-1000 delay-150 group-hover:h-[100%]"></div>
</div>
<div className="w-full bg-black/5 rounded-t-sm h-[60%] relative group">
<div className="absolute bottom-0 w-full bg-black h-[0%] transition-all duration-1000 delay-200 group-hover:h-[100%]"></div>
</div>
<div className="w-full bg-black/5 rounded-t-sm h-[75%] relative group">
<div className="absolute bottom-0 w-full bg-black h-[0%] transition-all duration-1000 delay-300 group-hover:h-[100%]"></div>
</div>
<div className="w-full bg-black/5 rounded-t-sm h-[100%] relative group">
<div className="absolute bottom-0 w-full bg-black h-[0%] transition-all duration-1000 delay-500 group-hover:h-[100%]"></div>
</div>
</div>
<div className="border-t border-black/10 mt-4 pt-2 flex justify-between text-xs text-black/40 font-mono">
<span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><span>SEX</span><span>SÁB</span><span>DOM</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-black/5">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm text-black/40 font-medium mb-8">IMPULSIONANDO ESTRATÉGIAS DIGITAIS PARA</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">

<span className="text-xl font-semibold tracking-tighter">ACME CORP</span>
<span className="text-xl font-semibold tracking-tighter">VERTEX</span>
<span className="text-xl font-semibold tracking-tighter">ALPHASTREAM</span>
<span className="text-xl font-semibold tracking-tighter">CURRANT.</span>
<span className="text-xl font-semibold tracking-tighter">NEXUS</span>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Ecossistema Digital Completo.</h2>
<p className="text-lg text-black/60 font-light">Não apenas rodamos anúncios. Construímos sistemas inteligentes que capturam, nutrem e convertem tráfego com precisão automatizada.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white border border-black/5 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group overflow-hidden relative">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-database w-32 h-32" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-[#FFFAF1] rounded-lg flex items-center justify-center border border-black/5 mb-6">
<svg className="lucide lucide-pie-chart w-5 h-5 text-black" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Business Intelligence</h3>
<p className="text-black/60 font-light max-w-md">Dados brutos são ruído. Transformamos seus analytics em dashboards acionáveis. Visualize LTV, CAC e modelos de atribuição em tempo real.</p>

<div className="mt-8 flex gap-4">
<div className="bg-[#FFFAF1] border border-black/5 px-4 py-2 rounded-md text-xs font-mono text-black/70">
                                SQL Query: SELECT * FROM LEADS
                            </div>
<div className="bg-black text-[#FFFAF1] border border-black/5 px-4 py-2 rounded-md text-xs font-mono">
                                Insight: +45% Conv.
                            </div>
</div>
</div>
</div>

<div className="bg-white border border-black/5 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 bg-[#FFFAF1] rounded-lg flex items-center justify-center border border-black/5 mb-6">
<svg className="lucide lucide-search w-5 h-5 text-black" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">SEO Técnico</h3>
<p className="text-sm text-black/60 font-light mb-6">Domine os resultados de busca com arquitetura semântica e estratégias de SEO programático.</p>
<div className="space-y-2">
<div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
<div className="h-full bg-black w-[85%] rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-black/40 font-mono">
<span>Dificuldade da Palavra</span>
<span>Alta</span>
</div>
</div>
</div>

<div className="bg-white border border-black/5 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 bg-[#FFFAF1] rounded-lg flex items-center justify-center border border-black/5 mb-6">
<svg className="lucide lucide-target w-5 h-5 text-black" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Tráfego Pago / Ads</h3>
<p className="text-sm text-black/60 font-light">Campanhas no Meta, Google e LinkedIn otimizadas para ROAS, e não apenas cliques.</p>
<div className="mt-4 flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold">G</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold">M</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-[10px] font-bold">L</div>
</div>
</div>

<div className="md:col-span-2 bg-white border border-black/5 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div>
<div className="w-10 h-10 bg-[#FFFAF1] rounded-lg flex items-center justify-center border border-black/5 mb-6">
<svg className="lucide lucide-bot w-5 h-5 text-black" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Automação de Processos</h3>
<p className="text-black/60 font-light">Elimine gargalos manuais. Construímos fluxos de trabalho personalizados conectando seu CRM, Ads e Email Marketing.</p>
</div>

<div className="bg-[#FFFAF1] rounded-lg p-6 border border-black/5">
<div className="flex items-center justify-between mb-4 pb-4 border-b border-black/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white border border-black/10 flex items-center justify-center">
<svg className="lucide lucide-mail w-4 h-4 text-black/60" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<span className="text-sm font-medium">Captura de Lead</span>
</div>

<div className="w-10 h-5 bg-black rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div className="flex justify-center my-2">
<svg className="lucide lucide-arrow-down w-4 h-4 text-black/30" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white border border-black/10 flex items-center justify-center">
<svg className="lucide lucide-slack w-4 h-4 text-black/60" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg>
</div>
<span className="text-sm font-medium">Notificar Vendas</span>
</div>
<div className="w-10 h-5 bg-black rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-black/5 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">A Metodologia Kagi.</h2>
<p className="text-lg text-black/60 font-light mb-8">Nós não adivinhamos. Nós engenheiramos. Nosso framework proprietário garante que cada real investido contribua para um crescimento mensurável.</p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full border border-black flex items-center justify-center text-xs font-medium">1</div>
<div>
<h4 className="text-lg font-medium">Auditoria e Arquitetura</h4>
<p className="text-sm text-black/60 mt-1">Mergulho profundo na infraestrutura de dados atual e saúde do SEO.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full border border-black/30 text-black/40 flex items-center justify-center text-xs font-medium">2</div>
<div>
<h4 className="text-lg font-medium text-black/80">Integração e Configuração</h4>
<p className="text-sm text-black/60 mt-1">Conexão de ferramentas de B.I, configuração de pixels de rastreamento e fluxos de automação.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full border border-black/30 text-black/40 flex items-center justify-center text-xs font-medium">3</div>
<div>
<h4 className="text-lg font-medium text-black/80">Escala e Otimização</h4>
<p className="text-sm text-black/60 mt-1">Lançamento de campanhas e iteração baseada em dados em tempo real.</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="aspect-square bg-[#FFFAF1] rounded-full border border-black/5 flex items-center justify-center relative">

<div className="absolute inset-0 border border-black/5 rounded-full scale-75"></div>
<div className="absolute inset-0 border border-black/5 rounded-full scale-50"></div>

<div className="w-32 h-32 bg-black text-[#FFFAF1] rounded-full flex items-center justify-center z-10 shadow-xl">
<span className="font-bold tracking-tight text-xl">KAGI</span>
</div>

<div className="absolute top-1/4 left-1/4 bg-white p-3 rounded-lg shadow-sm border border-black/5 animate-bounce" style={{animationDuration: '3s'}}>
<svg className="lucide lucide-bar-chart w-5 h-5" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V9"></path><path d="M19 21V3"></path></svg>
</div>
<div className="absolute bottom-1/3 right-1/4 bg-white p-3 rounded-lg shadow-sm border border-black/5 animate-bounce" style={{animationDuration: '4s'}}>
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div className="absolute top-1/2 right-10 bg-white p-3 rounded-lg shadow-sm border border-black/5 animate-bounce" style={{animationDuration: '5s'}}>
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FFFAF1]">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Modelos de Engajamento</h2>
<p className="text-black/60 font-light">Estruturas de parceria flexíveis projetadas para empresas em fase de crescimento.</p>
</div>
<a className="hidden md:inline-flex items-center text-sm font-medium border-b border-black pb-0.5 hover:text-black/70 transition-colors" href="#contact">Comparar planos <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 border border-black/10 rounded-xl bg-white flex flex-col justify-between">
<div>
<h3 className="text-lg font-medium mb-2">Sprint de Crescimento</h3>
<p className="text-sm text-black/50 mb-6">Para startups precisando de tração rápida.</p>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Auditoria Técnica SEO</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Setup Básico de Ads</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Relatório Mensal</li>
</ul>
</div>
<button className="mt-8 w-full py-2 border border-black/10 rounded-md text-sm font-medium hover:bg-gray-50">Consultar</button>
</div>

<div className="p-8 border border-black/10 rounded-xl bg-black text-[#FFFAF1] flex flex-col justify-between relative shadow-xl">
<div className="absolute top-0 right-0 px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-wide rounded-bl-lg rounded-tr-lg">Recomendado</div>
<div>
<h3 className="text-lg font-medium mb-2">Motor de Escala</h3>
<p className="text-sm text-white/50 mb-6">Dominância digital full-stack.</p>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dashboard Avançado de B.I.</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Gestão de Ads Multi-canal</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Automação de CRM</li>
</ul>
</div>
<button className="mt-8 w-full py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-gray-100">Começar</button>
</div>

<div className="p-8 border border-black/10 rounded-xl bg-white flex flex-col justify-between">
<div>
<h3 className="text-lg font-medium mb-2">Enterprise</h3>
<p className="text-sm text-black/50 mb-6">Infraestrutura personalizada para volume.</p>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Data Warehousing Customizado</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> SEO Internacional</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Equipe Dedicada</li>
</ul>
</div>
<button className="mt-8 w-full py-2 border border-black/10 rounded-md text-sm font-medium hover:bg-gray-50">Falar com Vendas</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black text-[#FFFAF1] relative overflow-hidden" id="contact">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Pronto para automatizar seu crescimento?</h2>
<p className="text-lg text-white/60 font-light mb-10 max-w-2xl mx-auto">Agende uma chamada de descoberta de 30 minutos. Analisaremos sua estrutura atual e proporemos um roteiro para eficiência e escala.</p>
<form className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors" placeholder="email@empresa.com" type="email"/>
<button className="bg-[#FFFAF1] text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-white transition-colors" type="button">
                    Receber Proposta
                </button>
</form>
<p className="mt-4 text-xs text-white/30">Sem spam. Cancele quando quiser.</p>
</div>
</section>

<footer className="py-12 px-6 border-t border-black/5 bg-[#FFFAF1]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<a className="text-lg font-bold tracking-tighter uppercase mb-4 block" href="#">AGÊNCIA KAGI.</a>
<p className="text-sm text-black/50 max-w-xs">Agência de marketing digital orientada a dados especializada em SEO, B.I, Ads e Automação.</p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 opacity-40">Serviços</h4>
<ul className="space-y-2 text-sm text-black/70">
<li><a className="hover:text-black" href="#">Otimização de SEO</a></li>
<li><a className="hover:text-black" href="#">Mídia Paga (Ads)</a></li>
<li><a className="hover:text-black" href="#">Business Intelligence</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 opacity-40">Empresa</h4>
<ul className="space-y-2 text-sm text-black/70">
<li><a className="hover:text-black" href="#">Sobre</a></li>
<li><a className="hover:text-black" href="#">Cases</a></li>
<li><a className="hover:text-black" href="#">Contato</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-xs text-black/40">
<p>© 2026 Agência Kagi. Todos os direitos reservados.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-black" href="#">Política de Privacidade</a>
<a className="hover:text-black" href="#">Termos de Uso</a>
</div>
</div>
</footer>


    </>
  );
}
