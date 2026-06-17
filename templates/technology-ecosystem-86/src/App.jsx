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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="bg-[#050D1A] border-b border-[#1E293B] hidden md:block">
<div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between text-xs text-[#CBD5E1]">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
                    (11) 4000-0000
                </a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="mailto:contato@sinapta.com.br">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
                    contato@sinapta.com.br
                </a>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:buildings-linear" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:chat-round-dots-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-[#0A1628]/80 backdrop-blur-lg border-b border-[#1E293B] transition-all">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-[#00A3FF] to-[#7C3AED] flex items-center justify-center text-white font-bold text-lg">S</div>
<span className="font-bold tracking-tighter text-xl uppercase text-white group-hover:text-[#CBD5E1] transition-colors">Sinapta</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm">

<div className="group relative py-8 cursor-pointer">
<span className="flex items-center gap-1 text-[#CBD5E1] hover:text-white transition-colors">Produtos <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>

<div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[400px] bg-[#050D1A] border border-[#1E293B] rounded-xl shadow-2xl shadow-black/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-2 p-4 gap-2">
<a className="flex flex-col p-3 rounded-lg hover:bg-[#1E293B]/50 transition-colors" href="#ecosistema">
<span className="text-white font-semibold text-sm flex items-center gap-2"><iconify-icon className="text-[#00A3FF]" icon="solar:document-text-linear"></iconify-icon> Contractfy</span>
<span className="text-xs text-[#CBD5E1] mt-1">LegalTech IA</span>
</a>
<a className="flex flex-col p-3 rounded-lg hover:bg-[#1E293B]/50 transition-colors" href="#ecosistema">
<span className="text-white font-semibold text-sm flex items-center gap-2"><iconify-icon className="text-[#00A3FF]" icon="solar:health-linear"></iconify-icon> Medtrack</span>
<span className="text-xs text-[#CBD5E1] mt-1">EdTech Medicina</span>
</a>
</div>
</div>
<a className="text-[#CBD5E1] hover:text-white transition-colors" href="#solucoes">Soluções</a>
<a className="text-[#CBD5E1] hover:text-white transition-colors" href="#segmentos">Segmentos</a>
<a className="text-[#CBD5E1] hover:text-white transition-colors" href="#sobre">Sobre</a>
<a className="text-[#CBD5E1] hover:text-white transition-colors" href="#contato">Contato</a>
</div>

<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#F97316] to-[#FBBF24] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all" href="#contato">
                    Fale com um Especialista
                </a>
</div>

<button className="lg:hidden text-[#CBD5E1] hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center overflow-hidden bg-pattern">

<div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/50 via-[#0A1628] to-[#050D1A]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center py-20">

<div className="lg:col-span-7 flex flex-col items-start text-left">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-6 leading-[1.1]">
                    Tecnologia que <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#7C3AED] to-[#F97316]">Transforma.</span>
</h1>
<p className="text-lg md:text-xl text-[#CBD5E1] mb-10 max-w-2xl font-light leading-relaxed">
                    Do contrato jurídico automatizado ao acompanhamento médico personalizado — a Sinapta entrega um ecossistema completo de soluções digitais para empresas e profissionais que querem crescer de verdade.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#00A3FF] to-[#F97316] hover:shadow-[0_0_30px_rgba(0,163,255,0.4)] transition-all" href="#ecosistema">
                        Explorar o Ecossistema <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white border border-[#1E293B] hover:border-[#CBD5E1] hover:bg-white/5 transition-all" href="#video">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon> Ver como funciona
                    </a>
</div>
</div>

<div className="lg:col-span-5 hidden lg:flex justify-center items-center h-[500px] relative">

<div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00A3FF] to-[#7C3AED] flex items-center justify-center text-4xl font-bold shadow-[0_0_50px_rgba(0,163,255,0.3)] z-20">
                    S
                </div>

<div className="absolute w-[240px] h-[240px] rounded-full border border-white/5"></div>

<div className="orbit-item orbit-1 w-12 h-12 rounded-full bg-[#1E293B] border border-[#00A3FF]/50 flex items-center justify-center shadow-[0_0_15px_rgba(0,163,255,0.2)]">
<iconify-icon className="text-[#00A3FF]" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="orbit-item orbit-2 w-12 h-12 rounded-full bg-[#1E293B] border border-[#7C3AED]/50 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.2)]">
<iconify-icon className="text-[#7C3AED]" icon="solar:health-linear"></iconify-icon>
</div>
<div className="orbit-item orbit-3 w-12 h-12 rounded-full bg-[#1E293B] border border-[#F97316]/50 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.2)]">
<iconify-icon className="text-[#F97316]" icon="solar:monitor-linear"></iconify-icon>
</div>
<div className="orbit-item orbit-4 w-12 h-12 rounded-full bg-[#1E293B] border border-[#FBBF24]/50 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.2)]">
<iconify-icon className="text-[#FBBF24]" icon="solar:cpu-linear"></iconify-icon>
</div>

<svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none" viewbox="0 0 500 500">
<circle cx="250" cy="250" fill="none" r="120" stroke="#00A3FF" stroke-dasharray="4 4" strokeWidth="1"></circle>
</svg>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#CBD5E1] opacity-50 animate-pulse">
<span className="text-xs mb-2 tracking-widest uppercase">Role</span>
<iconify-icon icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</header>

<div className="bg-[#050D1A] py-8 border-y border-[#1E293B] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-4 text-center">
<p className="text-xs text-[#CBD5E1] uppercase tracking-widest">Empresas e profissionais que confiam na Sinapta</p>
</div>
<div className="relative flex w-full max-w-[1400px] mx-auto overflow-hidden">
<div className="flex items-center gap-16 min-w-full animate-marquee pr-16 whitespace-nowrap">
<span className="text-lg font-semibold text-[#1E293B] flex items-center gap-2"><iconify-icon icon="solar:buildings-linear"></iconify-icon> Escritórios de Advocacia</span>
<span className="text-lg font-semibold text-[#1E293B] flex items-center gap-2"><iconify-icon icon="solar:health-linear"></iconify-icon> Faculdades de Medicina</span>
<span className="text-lg font-semibold text-[#1E293B] flex items-center gap-2"><iconify-icon icon="solar:rocket-linear"></iconify-icon> Startups Growth</span>
<span className="text-lg font-semibold text-[#1E293B] flex items-center gap-2"><iconify-icon icon="solar:cart-linear"></iconify-icon> E-commerces B2C</span>
<span className="text-lg font-semibold text-[#1E293B] flex items-center gap-2"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> PMEs Tech</span>
</div>
<div className="flex items-center gap-16 min-w-full animate-marquee pr-16 whitespace-nowrap absolute top-0 left-full">

<span className="text-lg font-semibold text-[#1E293B] flex items-center gap-2"><iconify-icon icon="solar:buildings-linear"></iconify-icon> Escritórios de Advocacia</span>
<span className="text-lg font-semibold text-[#1E293B] flex items-center gap-2"><iconify-icon icon="solar:health-linear"></iconify-icon> Faculdades de Medicina</span>
<span className="text-lg font-semibold text-[#1E293B] flex items-center gap-2"><iconify-icon icon="solar:rocket-linear"></iconify-icon> Startups Growth</span>
<span className="text-lg font-semibold text-[#1E293B] flex items-center gap-2"><iconify-icon icon="solar:cart-linear"></iconify-icon> E-commerces B2C</span>
<span className="text-lg font-semibold text-[#1E293B] flex items-center gap-2"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> PMEs Tech</span>
</div>
</div>
</div>

<section className="py-20 bg-[#0A1628] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#1E293B]/0 md:divide-[#1E293B]">
<div className="flex flex-col text-center px-4">
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">50+</span>
<span className="text-sm text-[#CBD5E1] font-semibold">Projetos entregues</span>
<span className="text-xs text-[#1E293B] mt-1">Em múltiplos segmentos</span>
</div>
<div className="flex flex-col text-center px-4">
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-[#00A3FF] mb-2">20+</span>
<span className="text-sm text-[#CBD5E1] font-semibold">Clientes ativos</span>
<span className="text-xs text-[#1E293B] mt-1">Brasil e mercado digital</span>
</div>
<div className="flex flex-col text-center px-4">
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-[#7C3AED] mb-2">4</span>
<span className="text-sm text-[#CBD5E1] font-semibold">Produtos no ecossistema</span>
<span className="text-xs text-[#1E293B] mt-1">Soluções proprietárias</span>
</div>
<div className="flex flex-col text-center px-4">
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-[#F97316] mb-2">99,9%</span>
<span className="text-sm text-[#CBD5E1] font-semibold">Uptime garantido</span>
<span className="text-xs text-[#1E293B] mt-1">Em infraestrutura cloud</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050D1A] relative" id="ecosistema">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">Nosso Ecossistema</h2>
<p className="text-lg text-[#CBD5E1] font-light">Quatro soluções. Uma estratégia. Resultados conectados.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-[#0A1628] border border-[#1E293B] rounded-2xl p-8 hover:border-[#00A3FF]/50 hover:shadow-[0_0_30px_rgba(0,163,255,0.1)] transition-all relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:document-text-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<span className="inline-block px-3 py-1 rounded-full bg-[#00A3FF]/10 text-[#00A3FF] text-xs font-semibold mb-4 border border-[#00A3FF]/20">LegalTech</span>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Contractfy</h3>
<p className="text-[#00A3FF] text-sm mb-4 font-semibold">Contratos inteligentes. Tempo de advogado preservado.</p>
<p className="text-[#CBD5E1] text-sm mb-6 h-20 line-clamp-3">O Contractfy automatiza a criação de contratos jurídicos com IA. Em minutos, advogados geram documentos personalizados, com segurança, precisão e conformidade legal — eliminando horas de trabalho manual.</p>
<ul className="space-y-2 mb-8 text-sm text-[#CBD5E1]">
<li className="flex items-start gap-2"><iconify-icon className="text-[#00A3FF] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Geração automática por IA</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#00A3FF] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Templates jurídicos validados</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#00A3FF] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Personalização total</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#00A3FF] transition-colors" href="#">
                            Conhecer o Contractfy <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-[#0A1628] border border-[#1E293B] rounded-2xl p-8 hover:border-[#7C3AED]/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:health-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<span className="inline-block px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-semibold mb-4 border border-[#7C3AED]/20">EdTech · Medicina</span>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Medtrack</h3>
<p className="text-[#7C3AED] text-sm mb-4 font-semibold">Cada estudante tem seu próprio caminho. O Medtrack guia.</p>
<p className="text-[#CBD5E1] text-sm mb-6 h-20 line-clamp-3">Sistema de acompanhamento pedagógico personalizado para estudantes de medicina. Identifica lacunas de aprendizado, propõe trilhas de estudo e entrega dados de desempenho em tempo real.</p>
<ul className="space-y-2 mb-8 text-sm text-[#CBD5E1]">
<li className="flex items-start gap-2"><iconify-icon className="text-[#7C3AED] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Trilha personalizada por perfil</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#7C3AED] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Dashboard de evolução</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#7C3AED] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Alertas de desempenho</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#7C3AED] transition-colors" href="#">
                            Conhecer o Medtrack <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-[#0A1628] border border-[#1E293B] rounded-2xl p-8 hover:border-[#F97316]/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:monitor-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<span className="inline-block px-3 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] text-xs font-semibold mb-4 border border-[#F97316]/20">Web · Conversão</span>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Sites &amp; LPs</h3>
<p className="text-[#F97316] text-sm mb-4 font-semibold">Presença digital que vende, converte e escala.</p>
<p className="text-[#CBD5E1] text-sm mb-6 h-20 line-clamp-3">Criamos sites institucionais e landing pages de alta performance, com design premium, SEO, velocidade extrema e otimização de conversão. Do briefing ao ar em prazo definido.</p>
<ul className="space-y-2 mb-8 text-sm text-[#CBD5E1]">
<li className="flex items-start gap-2"><iconify-icon className="text-[#F97316] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Alta performance (PageSpeed 90+)</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#F97316] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 100% responsivo &amp; Premium</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#F97316] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> SEO e conversão otimizados</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#F97316] transition-colors" href="#">
                            Ver Soluções Web <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-[#0A1628] border border-[#1E293B] rounded-2xl p-8 hover:border-[#FBBF24]/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:cpu-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<span className="inline-block px-3 py-1 rounded-full bg-[#FBBF24]/10 text-[#FBBF24] text-xs font-semibold mb-4 border border-[#FBBF24]/20">AI · Eficiência</span>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Automações &amp; IA</h3>
<p className="text-[#FBBF24] text-sm mb-4 font-semibold">Seu processo no piloto automático. Seu time no que importa.</p>
<p className="text-[#CBD5E1] text-sm mb-6 h-20 line-clamp-3">Implementamos fluxos de automação inteligente com IA para integrar ferramentas, eliminar tarefas manuais repetitivas e escalar operações sem aumentar equipe. Diagnóstico e execução.</p>
<ul className="space-y-2 mb-8 text-sm text-[#CBD5E1]">
<li className="flex items-start gap-2"><iconify-icon className="text-[#FBBF24] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Integração entre sistemas</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#FBBF24] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Redução de custo operacional</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#FBBF24] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> IA aplicada ao seu negócio</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#FBBF24] transition-colors" href="#">
                            Descobrir Automações <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A1628]" id="segmentos">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">Para quem construímos</h2>
<p className="text-lg text-[#CBD5E1] font-light">Soluções desenhadas para os desafios reais de cada mercado.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<a className="p-6 border border-[#1E293B] rounded-xl bg-[#050D1A] hover:bg-[#1E293B]/30 transition-colors group" href="#">
<iconify-icon className="text-[#00A3FF] mb-4" icon="solar:scales-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold mb-2 tracking-tight">Jurídico</h3>
<p className="text-sm text-[#CBD5E1] mb-4">Escritórios de advocacia e departamentos jurídicos.</p>
<span className="text-xs font-semibold text-[#00A3FF] flex items-center gap-1 group-hover:gap-2 transition-all">Ver soluções <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
<a className="p-6 border border-[#1E293B] rounded-xl bg-[#050D1A] hover:bg-[#1E293B]/30 transition-colors group" href="#">
<iconify-icon className="text-[#7C3AED] mb-4" icon="solar:health-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold mb-2 tracking-tight">Saúde &amp; Medicina</h3>
<p className="text-sm text-[#CBD5E1] mb-4">Cursos de medicina, faculdades e residências.</p>
<span className="text-xs font-semibold text-[#7C3AED] flex items-center gap-1 group-hover:gap-2 transition-all">Ver soluções <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
<a className="p-6 border border-[#1E293B] rounded-xl bg-[#050D1A] hover:bg-[#1E293B]/30 transition-colors group" href="#">
<iconify-icon className="text-[#F97316] mb-4" icon="solar:rocket-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold mb-2 tracking-tight">PMEs &amp; Startups</h3>
<p className="text-sm text-[#CBD5E1] mb-4">Empresas em crescimento que precisam de tecnologia ágil.</p>
<span className="text-xs font-semibold text-[#F97316] flex items-center gap-1 group-hover:gap-2 transition-all">Ver soluções <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
<a className="p-6 border border-[#1E293B] rounded-xl bg-[#050D1A] hover:bg-[#1E293B]/30 transition-colors group" href="#">
<iconify-icon className="text-[#FBBF24] mb-4" icon="solar:cart-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold mb-2 tracking-tight">E-commerce</h3>
<p className="text-sm text-[#CBD5E1] mb-4">Lojas digitais que precisam converter mais vendas.</p>
<span className="text-xs font-semibold text-[#FBBF24] flex items-center gap-1 group-hover:gap-2 transition-all">Ver soluções <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
<a className="p-6 border border-[#1E293B] rounded-xl bg-[#050D1A] hover:bg-[#1E293B]/30 transition-colors group" href="#">
<iconify-icon className="text-white mb-4" icon="solar:buildings-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold mb-2 tracking-tight">Corporativo</h3>
<p className="text-sm text-[#CBD5E1] mb-4">Grandes equipes que precisam automatizar processos.</p>
<span className="text-xs font-semibold text-white flex items-center gap-1 group-hover:gap-2 transition-all">Ver soluções <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
<a className="p-6 border border-[#1E293B] rounded-xl bg-[#050D1A] hover:bg-[#1E293B]/30 transition-colors group" href="#">
<iconify-icon className="text-[#CBD5E1] mb-4" icon="solar:diploma-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold mb-2 tracking-tight">Educação</h3>
<p className="text-sm text-[#CBD5E1] mb-4">Instituições de ensino e plataformas EdTech.</p>
<span className="text-xs font-semibold text-[#CBD5E1] flex items-center gap-1 group-hover:gap-2 transition-all">Ver soluções <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#050D1A] border-y border-[#1E293B]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">Nossa Metodologia</h2>
<p className="text-lg text-[#CBD5E1] font-light">Do diagnóstico ao resultado. Sem surpresas.</p>
</div>
<div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-4">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-[#1E293B] z-0"></div>

<div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center w-full md:w-1/5 group">
<div className="w-12 h-12 rounded-full bg-[#0A1628] border-2 border-[#1E293B] text-[#CBD5E1] flex items-center justify-center font-bold text-lg mb-4 group-hover:border-[#00A3FF] group-hover:text-[#00A3FF] transition-all">01</div>
<h4 className="font-semibold text-sm mb-2">Diagnóstico</h4>
<p className="text-xs text-[#CBD5E1] leading-relaxed">Entendemos a dor real antes de propor qualquer código.</p>
</div>
<div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center w-full md:w-1/5 group">
<div className="w-12 h-12 rounded-full bg-[#0A1628] border-2 border-[#1E293B] text-[#CBD5E1] flex items-center justify-center font-bold text-lg mb-4 group-hover:border-[#7C3AED] group-hover:text-[#7C3AED] transition-all">02</div>
<h4 className="font-semibold text-sm mb-2">Estratégia</h4>
<p className="text-xs text-[#CBD5E1] leading-relaxed">Desenhamos a arquitetura e validamos com os stakeholders.</p>
</div>
<div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center w-full md:w-1/5 group">
<div className="w-12 h-12 rounded-full bg-[#0A1628] border-2 border-[#1E293B] text-[#CBD5E1] flex items-center justify-center font-bold text-lg mb-4 group-hover:border-[#F97316] group-hover:text-[#F97316] transition-all">03</div>
<h4 className="font-semibold text-sm mb-2">Desenvolvimento</h4>
<p className="text-xs text-[#CBD5E1] leading-relaxed">Execução ágil com entregas parciais e transparência.</p>
</div>
<div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center w-full md:w-1/5 group">
<div className="w-12 h-12 rounded-full bg-[#0A1628] border-2 border-[#1E293B] text-[#CBD5E1] flex items-center justify-center font-bold text-lg mb-4 group-hover:border-[#FBBF24] group-hover:text-[#FBBF24] transition-all">04</div>
<h4 className="font-semibold text-sm mb-2">Lançamento</h4>
<p className="text-xs text-[#CBD5E1] leading-relaxed">Deploy seguro, testes em produção e treinamento.</p>
</div>
<div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center w-full md:w-1/5 group">
<div className="w-12 h-12 rounded-full bg-[#0A1628] border-2 border-[#1E293B] text-[#CBD5E1] flex items-center justify-center font-bold text-lg mb-4 group-hover:border-white group-hover:text-white transition-all">05</div>
<h4 className="font-semibold text-sm mb-2">Evolução</h4>
<p className="text-xs text-[#CBD5E1] leading-relaxed">Análise de dados, suporte contínuo e novas features.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A1628]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">Por que a Sinapta?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
<div className="flex flex-col">
<div className="w-10 h-10 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,163,255,0.2)]">
<iconify-icon className="text-[#00A3FF]" icon="solar:link-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Ecossistema Integrado</h3>
<p className="text-sm text-[#CBD5E1]">Não somos um fornecedor. Somos um parceiro estratégico. Nossas soluções se conectam e evoluem com seu negócio.</p>
</div>
<div className="flex flex-col">
<div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
<iconify-icon className="text-[#7C3AED]" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Velocidade com Qualidade</h3>
<p className="text-sm text-[#CBD5E1]">Processos ágeis, entregas no prazo, resultado mensurável. Sem burocracia, sem promessas vazias.</p>
</div>
<div className="flex flex-col">
<div className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
<iconify-icon className="text-[#F97316]" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">IA no Centro de Tudo</h3>
<p className="text-sm text-[#CBD5E1]">Cada solução da Sinapta é potencializada por inteligência artificial. Não como buzzword — como resultado real.</p>
</div>
<div className="flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon className="text-white" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Segurança e Conformidade</h3>
<p className="text-sm text-[#CBD5E1]">SSL, LGPD, dados protegidos e processos auditáveis em todas as nossas entregas corporativas.</p>
</div>
<div className="flex flex-col">
<div className="w-10 h-10 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,163,255,0.2)]">
<iconify-icon className="text-[#00A3FF]" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Decisão baseada em dados</h3>
<p className="text-sm text-[#CBD5E1]">Dashboards, métricas e relatórios integrados para que você veja o impacto real do que construímos.</p>
</div>
<div className="flex flex-col">
<div className="w-10 h-10 rounded-lg bg-[#FBBF24]/10 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
<iconify-icon className="text-[#FBBF24]" icon="solar:handshake-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Suporte de verdade</h3>
<p className="text-sm text-[#CBD5E1]">Não sumimos após a entrega. Acompanhamento contínuo, SLA definido e time dedicado ao seu crescimento.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050D1A]">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">Resultados que falam por si</h2>
<p className="text-lg text-[#CBD5E1] font-light">Veja o impacto que geramos para nossos clientes.</p>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-24">
<div className="bg-[#0A1628] border border-[#1E293B] rounded-xl p-8 hover:border-[#CBD5E1]/30 transition-all">
<div className="text-xs text-[#CBD5E1] mb-2 flex justify-between items-center">
<span>Escritório XYZ Advocacia</span>
<span className="bg-[#1E293B] px-2 py-1 rounded text-[10px] uppercase tracking-widest">Contractfy</span>
</div>
<p className="text-xl font-semibold mb-4 text-[#00A3FF]">"Geração de contratos em 4 minutos. Antes: 3 horas."</p>
<a className="text-xs font-semibold hover:text-[#00A3FF] transition-colors flex items-center gap-1" href="#">Ver case completo <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="bg-[#0A1628] border border-[#1E293B] rounded-xl p-8 hover:border-[#CBD5E1]/30 transition-all">
<div className="text-xs text-[#CBD5E1] mb-2 flex justify-between items-center">
<span>Faculdade de Medicina ABC</span>
<span className="bg-[#1E293B] px-2 py-1 rounded text-[10px] uppercase tracking-widest">Medtrack</span>
</div>
<p className="text-xl font-semibold mb-4 text-[#7C3AED]">"30% de melhora no desempenho dos alunos em 6 meses."</p>
<a className="text-xs font-semibold hover:text-[#7C3AED] transition-colors flex items-center gap-1" href="#">Ver case completo <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="bg-[#0A1628] border border-[#1E293B] rounded-xl p-8 hover:border-[#CBD5E1]/30 transition-all">
<div className="text-xs text-[#CBD5E1] mb-2 flex justify-between items-center">
<span>Startup E-commerce DEF</span>
<span className="bg-[#1E293B] px-2 py-1 rounded text-[10px] uppercase tracking-widest">Sites + Automação</span>
</div>
<p className="text-xl font-semibold mb-4 text-[#F97316]">"Conversão aumentou 2,4x após novo site e automação de funil."</p>
<a className="text-xs font-semibold hover:text-[#F97316] transition-colors flex items-center gap-1" href="#">Ver case completo <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="mb-12 border-t border-[#1E293B] pt-24 text-center">
<h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase mb-4">O que nossos clientes dizem</h2>
</div>

<div className="grid md:grid-cols-3 gap-6">
<div className="bg-[#0A1628] border border-[#1E293B] rounded-xl p-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-sm font-semibold">RM</div>
<div>
<p className="text-sm font-semibold">Roberto Mendes</p>
<p className="text-xs text-[#CBD5E1]">Sócio Diretor, XYZ Advocacia</p>
</div>
</div>
<div className="flex text-[#FBBF24] mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#CBD5E1] italic">"A implementação do Contractfy mudou a rotina do escritório. O que antes era um gargalo, hoje é nosso diferencial competitivo."</p>
<div className="mt-4 flex items-center gap-2 text-xs text-[#1E293B]">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon> Cliente verificado
                    </div>
</div>
<div className="bg-[#0A1628] border border-[#1E293B] rounded-xl p-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-sm font-semibold">AL</div>
<div>
<p className="text-sm font-semibold">Ana Luiza</p>
<p className="text-xs text-[#CBD5E1]">Coord. Pedagógica, Fac. ABC</p>
</div>
</div>
<div className="flex text-[#FBBF24] mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#CBD5E1] italic">"Com o Medtrack, conseguimos prever a evasão de alunos e atuar antes que aconteça. Os dados são precisos e em tempo real."</p>
<div className="mt-4 flex items-center gap-2 text-xs text-[#1E293B]">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon> Cliente verificado
                    </div>
</div>
<div className="bg-[#0A1628] border border-[#1E293B] rounded-xl p-6 hidden md:block">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-sm font-semibold">CF</div>
<div>
<p className="text-sm font-semibold">Carlos Ferreira</p>
<p className="text-xs text-[#CBD5E1]">CEO, Startup DEF</p>
</div>
</div>
<div className="flex text-[#FBBF24] mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#CBD5E1] italic">"O nível de entrega da Sinapta é assustador. O site ficou incrivelmente rápido e as automações pouparam o trabalho de 2 pessoas."</p>
<div className="mt-4 flex items-center gap-2 text-xs text-[#1E293B]">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon> Cliente verificado
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A1628]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">Insights &amp; Tecnologia</h2>
<p className="text-lg text-[#CBD5E1] font-light max-w-xl">Conteúdo estratégico para quem quer entender o futuro antes dos outros.</p>
</div>
<a className="text-sm font-semibold hover:text-[#00A3FF] transition-colors flex items-center gap-1" href="#">Ver todos os artigos <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="w-full h-48 bg-[#1E293B] rounded-xl mb-4 overflow-hidden relative flex items-center justify-center border border-[#1E293B] group-hover:border-[#00A3FF]/50 transition-colors">
<iconify-icon className="text-[#0A1628] opacity-50" icon="solar:cpu-linear" width="48"></iconify-icon>
</div>
<div className="flex gap-2 mb-3">
<span className="text-[10px] uppercase tracking-widest text-[#00A3FF] font-semibold">IA</span>
<span className="text-[10px] uppercase tracking-widest text-[#CBD5E1]">· LegalTech</span>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-[#00A3FF] transition-colors line-clamp-2">Como a IA está transformando o trabalho dos advogados em 2025</h3>
<p className="text-sm text-[#CBD5E1] mb-4 line-clamp-2">Descubra como a automação de documentos e a análise preditiva estão moldando o futuro dos escritórios.</p>
<div className="flex items-center justify-between text-xs text-[#CBD5E1]">
<span>12 Mar 2025 · 5 min leitura</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full h-48 bg-[#1E293B] rounded-xl mb-4 overflow-hidden relative flex items-center justify-center border border-[#1E293B] group-hover:border-[#7C3AED]/50 transition-colors">
<iconify-icon className="text-[#0A1628] opacity-50" icon="solar:health-linear" width="48"></iconify-icon>
</div>
<div className="flex gap-2 mb-3">
<span className="text-[10px] uppercase tracking-widest text-[#7C3AED] font-semibold">Educação</span>
<span className="text-[10px] uppercase tracking-widest text-[#CBD5E1]">· EdTech</span>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-[#7C3AED] transition-colors line-clamp-2">Por que estudantes de medicina precisam de acompanhamento personalizado</h3>
<p className="text-sm text-[#CBD5E1] mb-4 line-clamp-2">Os desafios da carga horária e como a tecnologia pode reduzir o burnout e aumentar a retenção de conhecimento.</p>
<div className="flex items-center justify-between text-xs text-[#CBD5E1]">
<span>08 Mar 2025 · 4 min leitura</span>
</div>
</div>

<div className="group cursor-pointer hidden md:block">
<div className="w-full h-48 bg-[#1E293B] rounded-xl mb-4 overflow-hidden relative flex items-center justify-center border border-[#1E293B] group-hover:border-[#FBBF24]/50 transition-colors">
<iconify-icon className="text-[#0A1628] opacity-50" icon="solar:settings-linear" width="48"></iconify-icon>
</div>
<div className="flex gap-2 mb-3">
<span className="text-[10px] uppercase tracking-widest text-[#FBBF24] font-semibold">Negócios</span>
<span className="text-[10px] uppercase tracking-widest text-[#CBD5E1]">· Automação</span>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-[#FBBF24] transition-colors line-clamp-2">5 processos que toda empresa deveria automatizar agora</h3>
<p className="text-sm text-[#CBD5E1] mb-4 line-clamp-2">Pare de perder dinheiro com tarefas repetitivas. Veja por onde começar a automatizar seu negócio hoje.</p>
<div className="flex items-center justify-between text-xs text-[#CBD5E1]">
<span>01 Mar 2025 · 6 min leitura</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contato">
<div className="absolute inset-0 bg-gradient-to-br from-[#050D1A] via-[#0A1628] to-[#1E1B4B]"></div>

<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 leading-tight">
                        Pronto para fazer parte <br/>
                        do ecossistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-[#7C3AED]">Sinapta?</span>
</h2>
<p className="text-lg text-[#CBD5E1] mb-10 font-light">
                        Agende uma conversa gratuita com nosso time. Sem enrolação — só estratégia e resultado real para o seu negócio.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#00A3FF]" icon="solar:lock-keyhole-linear" width="24"></iconify-icon>
<span className="text-sm font-semibold">Dados 100% seguros (LGPD)</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#FBBF24]" icon="solar:bolt-linear" width="24"></iconify-icon>
<span className="text-sm font-semibold">Resposta em até 24h</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-semibold">Diagnóstico gratuito</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#CBD5E1]" icon="solar:handshake-linear" width="24"></iconify-icon>
<span className="text-sm font-semibold">Sem compromisso</span>
</div>
</div>
</div>
<div className="bg-[#0A1628]/80 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-8 shadow-2xl">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 md:col-span-1">
<label className="block text-xs font-semibold text-[#CBD5E1] mb-1">Nome completo *</label>
<input className="w-full bg-[#050D1A] border border-[#1E293B] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00A3FF] transition-colors" required="" type="text"/>
</div>
<div className="col-span-2 md:col-span-1">
<label className="block text-xs font-semibold text-[#CBD5E1] mb-1">E-mail corporativo *</label>
<input className="w-full bg-[#050D1A] border border-[#1E293B] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00A3FF] transition-colors" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 md:col-span-1">
<label className="block text-xs font-semibold text-[#CBD5E1] mb-1">Telefone / WhatsApp *</label>
<input className="w-full bg-[#050D1A] border border-[#1E293B] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00A3FF] transition-colors" required="" type="tel"/>
</div>
<div className="col-span-2 md:col-span-1">
<label className="block text-xs font-semibold text-[#CBD5E1] mb-1">Empresa (opcional)</label>
<input className="w-full bg-[#050D1A] border border-[#1E293B] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00A3FF] transition-colors" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-[#CBD5E1] mb-1">Qual solução te interessa?</label>
<div className="relative">
<select className="w-full bg-[#050D1A] border border-[#1E293B] rounded-lg px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-[#00A3FF] transition-colors cursor-pointer">
<option>Selecione uma opção...</option>
<option>Contractfy (LegalTech)</option>
<option>Medtrack (EdTech)</option>
<option>Sites &amp; Landing Pages</option>
<option>Automações &amp; IA</option>
<option>Ecossistema Completo</option>
<option>Não sei ainda</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#CBD5E1] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-[#CBD5E1] mb-1">Mensagem (opcional)</label>
<textarea className="w-full bg-[#050D1A] border border-[#1E293B] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00A3FF] transition-colors resize-none" rows="3"></textarea>
</div>

<div className="flex items-start gap-2 pt-2">
<div className="relative flex items-center mt-0.5">
<input className="peer appearance-none w-4 h-4 border border-[#1E293B] rounded bg-[#050D1A] checked:bg-[#00A3FF] checked:border-[#00A3FF] transition-colors cursor-pointer" id="lgpd" required="" type="checkbox"/>
<iconify-icon className="absolute inset-0 text-white pointer-events-none opacity-0 peer-checked:opacity-100 w-4 h-4 flex items-center justify-center text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
<label className="text-xs text-[#CBD5E1] cursor-pointer" htmlFor="lgpd">Concordo com a Política de Privacidade e aceito receber comunicações.</label>
</div>
<button className="w-full py-4 mt-4 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#F97316] to-[#FBBF24] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all" type="submit">
                            Falar com Especialista Agora
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#050D1A] pt-20 pb-10 border-t border-[#1E293B]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-[#00A3FF] to-[#7C3AED] flex items-center justify-center text-white font-bold text-lg">S</div>
<span className="font-bold tracking-tighter text-xl uppercase text-white">Sinapta</span>
</a>
<p className="text-[10px] text-[#CBD5E1] tracking-widest uppercase mb-4">INNOVATE · CONNECT · GROW</p>
<p className="text-sm text-[#CBD5E1] mb-6 line-clamp-2">A empresa de tecnologia que conecta inovação com resultado real para o seu negócio.</p>
<div className="flex items-center gap-4 mb-6">
<a className="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center hover:bg-[#00A3FF] transition-colors" href="#"><iconify-icon icon="solar:link-round-linear" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center hover:bg-[#F97316] transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center hover:bg-green-500 transition-colors" href="#"><iconify-icon icon="solar:chat-round-dots-linear" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center hover:bg-red-500 transition-colors" href="#"><iconify-icon icon="solar:play-circle-linear" width="16"></iconify-icon></a>
</div>
<div className="flex items-center gap-4 text-xs text-[#CBD5E1]">
<span className="flex items-center gap-1"><iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> SSL Seguro</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> LGPD</span>
</div>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Produtos</h4>
<ul className="space-y-3 text-sm text-[#CBD5E1]">
<li><a className="hover:text-white transition-colors" href="#">Contractfy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Medtrack</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sites &amp; Landing Pages</a></li>
<li><a className="hover:text-white transition-colors" href="#">Automações &amp; IA</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Empresa</h4>
<ul className="space-y-3 text-sm text-[#CBD5E1]">
<li><a className="hover:text-white transition-colors" href="#">Quem Somos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Nossa Metodologia</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cases de Sucesso</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog &amp; Insights</a></li>
<li><a className="hover:text-white transition-colors" href="#">Trabalhe Conosco</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contato</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Contato</h4>
<ul className="space-y-4 text-sm text-[#CBD5E1]">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00A3FF] mt-0.5" icon="solar:letter-linear" width="18"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:contato@sinapta.com.br">contato@sinapta.com.br</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-500 mt-0.5" icon="solar:phone-linear" width="18"></iconify-icon>
<a className="hover:text-white transition-colors" href="#">(11) 99999-9999 (WhatsApp)</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F97316] mt-0.5" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>Av. Paulista, 1000, Cj. 100<br/>São Paulo - SP, Brasil</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#CBD5E1] mt-0.5" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<span>Seg–Sex, 08h–18h</span>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-[#1E293B] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#CBD5E1]">
<div>
<p>Sinapta Tecnologia LTDA | CNPJ: 00.000.000/0001-00</p>
<p className="mt-1">© 2025 Sinapta. Todos os direitos reservados.</p>
</div>
<div className="flex flex-wrap gap-4 md:justify-end">
<a className="hover:text-white transition-colors" href="#">Política de Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Termos e Condições</a>
<a className="hover:text-white transition-colors" href="#">Aviso de Cookies</a>
<a className="hover:text-white transition-colors" href="#">Avisos Legais</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all animate-bounce" href="#" style={{animationDuration: '3s'}}>
<iconify-icon icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
</a>

    </>
  );
}
