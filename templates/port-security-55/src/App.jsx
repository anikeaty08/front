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



        document.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg', 'bg-[#002b4e]/90');
                header.classList.remove('bg-[#002b4e]/80');
            } else {
                header.classList.remove('shadow-lg', 'bg-[#002b4e]/90');
                header.classList.add('bg-[#002b4e]/80');
            }
        });
    
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
      

<header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-[#002b4e]/80 border-b border-white/5 h-16 lg:h-20 flex items-center">
<div className="container mx-auto px-6 lg:px-12 flex justify-between items-center h-full">
<a className="flex items-center gap-2" href="#">
<span className="text-xl tracking-tight font-semibold text-white uppercase tracking-widest">Maxtel</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
<a className="nav-link hover:text-white transition-colors" href="#solucao">Solução</a>
<a className="nav-link hover:text-white transition-colors" href="#desafios">Desafios</a>
<a className="nav-link hover:text-white transition-colors" href="#arquitetura">Arquitetura</a>
<a className="nav-link hover:text-white transition-colors" href="#cases">Cases</a>
</nav>
<a className="hidden md:flex items-center justify-center h-9 px-5 bg-[#00b8aa] hover:bg-[#00d0cf] text-[#002b4e] text-sm font-medium rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(0,184,170,0.1)] hover:shadow-[0_0_20px_rgba(0,208,207,0.2)] hover:-translate-y-0.5" href="#contato">
                Solicitar demonstração
            </a>
<button className="md:hidden text-white/70 hover:text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-[#002b4e] via-[#002b4e]/90 to-transparent z-10 w-full lg:w-3/4"></div>
<div className="absolute inset-0 bg-[#002b4e]/40 z-10"></div>
<img alt="Operação Portuária Noturna" className="w-full h-full object-cover object-right opacity-40 mix-blend-luminosity scale-105 transform origin-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="container relative z-20 mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 flex flex-col gap-6 fade-up">
<div className="flex items-center gap-3 w-fit border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#ffb700] animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-white/80 uppercase">Tecnologia nacional | Operação crítica</span>
</div>
<h1 className="text-4xl lg:text-6xl tracking-tight font-medium text-white text-balanced leading-[1.1]">
                    Controle de acesso portuário com mais <span className="text-[#00b8aa]">rastreabilidade</span> e alta disponibilidade.
                </h1>
<p className="text-base lg:text-lg text-white/60 font-light max-w-2xl leading-relaxed text-balanced">
                    A Maxtel entrega tecnologia nacional para operações portuárias e alfandegadas que exigem segurança de ponta, integração fluida e resiliência em ambientes extremos.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex items-center justify-center gap-2 h-11 px-6 bg-[#00b8aa] hover:bg-[#00d0cf] text-[#002b4e] text-sm font-medium rounded-sm transition-all duration-300 hover:-translate-y-0.5 group" href="#contato">
                        Solicitar demonstração
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 h-11 px-6 bg-transparent border border-white/20 hover:border-[#00b8aa] hover:bg-white/5 text-white text-sm font-medium rounded-sm transition-all duration-300" href="#especialista">
                        Falar com especialista
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 p-8 z-20 hidden lg:block opacity-30 pointer-events-none">
<div className="grid grid-cols-4 gap-2">
<div className="w-1 h-1 bg-[#00d0cf]"></div><div className="w-1 h-1 bg-[#00d0cf]"></div><div className="w-1 h-1 bg-white"></div><div className="w-1 h-1 bg-[#00d0cf]"></div>
<div className="w-1 h-1 bg-white"></div><div className="w-1 h-1 bg-white"></div><div className="w-1 h-1 bg-[#00d0cf]"></div><div className="w-1 h-1 bg-white"></div>
</div>
</div>
</section>

<section className="py-24 bg-[#002b4e] relative border-t border-white/5">
<div className="container mx-auto px-6 lg:px-12 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-up">
<h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-white mb-6">Por que o controle de acesso portuário virou prioridade absoluta.</h2>
<p className="text-sm lg:text-base text-white/60 font-light leading-relaxed mb-6">
                        A modernização do setor logístico e portuário elevou o nível de exigência operacional. Ambientes alfandegados não suportam mais tecnologias fragmentadas, liberações manuais ou falta de comprovação perante órgãos reguladores.
                    </p>
<p className="text-sm lg:text-base text-white/60 font-light leading-relaxed">
                        A necessidade de governança, rastreabilidade em tempo real e compliance com a Receita Federal transformou o acesso de um mero controle de catraca para o coração da segurança da informação logística.
                    </p>
</div>
<div className="flex flex-col gap-4">

<div className="bg-[#07365d] border border-white/5 p-6 hover:-translate-y-1 hover:border-[#0057b8]/50 transition-all duration-300 rounded-sm fade-up delay-100 group">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-[#00b8aa] uppercase tracking-wide">ISPS Code &amp; LGPD</span>
<iconify-icon className="text-white/40 group-hover:text-[#00d0cf] transition-colors" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Adequação Regulatória</h3>
<p className="text-xs text-white/50 mt-1">Sistemas obsoletos geram passivos operacionais e multas severas.</p>
</div>

<div className="bg-[#07365d] border border-white/5 p-6 hover:-translate-y-1 hover:border-[#0057b8]/50 transition-all duration-300 rounded-sm fade-up delay-200 group">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-[#00b8aa] uppercase tracking-wide">Portal Único</span>
<iconify-icon className="text-white/40 group-hover:text-[#00d0cf] transition-colors" icon="solar:server-square-update-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">API Recintos</h3>
<p className="text-xs text-white/50 mt-1">Exigência de integração em tempo real e alta disponibilidade de dados.</p>
</div>

<div className="bg-[#07365d] border border-white/5 p-6 hover:-translate-y-1 hover:border-[#0057b8]/50 transition-all duration-300 rounded-sm fade-up delay-300 group">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-[#ffb700] uppercase tracking-wide">Gargalos Operacionais</span>
<iconify-icon className="text-white/40 group-hover:text-[#ffb700] transition-colors" icon="solar:history-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Filas e Retrabalho</h3>
<p className="text-xs text-white/50 mt-1">Processos manuais travam a logística e comprometem a janela de atracação.</p>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0057b8]/10 via-transparent to-transparent pointer-events-none"></div>
</section>

<section className="py-24 bg-[#041d36] relative border-t border-white/5 overflow-hidden" id="desafios">
<div className="container mx-auto px-6 lg:px-12 relative z-10">
<div className="grid lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 fade-up">
<h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-white mb-6">Os desafios reais no chão da operação.</h2>
<p className="text-sm text-white/60 font-light leading-relaxed mb-8">
                        Lidar com a complexidade portuária exige mais do que um software genérico. Entendemos as dores de quem gerencia áreas de altíssima criticidade.
                    </p>

<div className="w-full h-48 border border-white/5 bg-[#07365d]/50 relative rounded-sm flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
<iconify-icon className="text-[#0057b8]/40" icon="solar:radar-linear" width="48"></iconify-icon>
</div>
</div>
<div className="lg:col-span-7 flex flex-col relative before:absolute before:inset-y-0 before:left-[15px] before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

<div className="relative pl-12 py-4 group fade-up delay-100">
<div className="absolute left-[11px] top-[22px] w-[9px] h-[9px] bg-[#002b4e] border-2 border-white/20 rounded-full group-hover:border-[#00d0cf] group-hover:bg-[#00d0cf] transition-all duration-300 shadow-[0_0_0_0_rgba(0,208,207,0)] group-hover:shadow-[0_0_10px_rgba(0,208,207,0.5)]"></div>
<h4 className="text-base font-medium text-white mb-1 group-hover:text-[#00d0cf] transition-colors">Múltiplos perfis de acesso</h4>
<p className="text-xs text-white/50 leading-relaxed max-w-md group-hover:text-white/70 transition-colors">Gerenciar motoristas, tripulantes, visitantes e funcionários com regras distintas de horário e área permitida.</p>
</div>
<div className="relative pl-12 py-4 group fade-up delay-200">
<div className="absolute left-[11px] top-[22px] w-[9px] h-[9px] bg-[#002b4e] border-2 border-white/20 rounded-full group-hover:border-[#00d0cf] group-hover:bg-[#00d0cf] transition-all duration-300"></div>
<h4 className="text-base font-medium text-white mb-1 group-hover:text-[#00d0cf] transition-colors">Tecnologias isoladas</h4>
<p className="text-xs text-white/50 leading-relaxed max-w-md group-hover:text-white/70 transition-colors">Sistemas de CFTV, OCR, balanças e biometria que não conversam entre si, gerando relatórios conflitantes.</p>
</div>
<div className="relative pl-12 py-4 group fade-up delay-300">
<div className="absolute left-[11px] top-[22px] w-[9px] h-[9px] bg-[#002b4e] border-2 border-white/20 rounded-full group-hover:border-[#00d0cf] group-hover:bg-[#00d0cf] transition-all duration-300"></div>
<h4 className="text-base font-medium text-white mb-1 group-hover:text-[#00d0cf] transition-colors">Regras por criticidade</h4>
<p className="text-xs text-white/50 leading-relaxed max-w-md group-hover:text-white/70 transition-colors">Aplicar lógicas complexas para Zonas de Segurança Restrita (ZSR) com dupla checagem (anti-passback).</p>
</div>
<div className="relative pl-12 py-4 group fade-up delay-400">
<div className="absolute left-[11px] top-[22px] w-[9px] h-[9px] bg-[#002b4e] border-2 border-white/20 rounded-full group-hover:border-[#ffb700] group-hover:bg-[#ffb700] transition-all duration-300"></div>
<h4 className="text-base font-medium text-white mb-1 group-hover:text-[#ffb700] transition-colors">Dificuldade de comprovação</h4>
<p className="text-xs text-white/50 leading-relaxed max-w-md group-hover:text-white/70 transition-colors">Extrair dados consistentes para auditorias da Receita Federal de forma rápida e segura.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#002b4e] relative border-t border-white/5" id="solucao">
<div className="container mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-12 gap-16">

<div className="lg:col-span-6 relative">
<div className="sticky top-32 fade-up">
<span className="text-xs font-medium text-[#00b8aa] uppercase tracking-wide mb-3 block">Plataforma Integrada</span>
<h2 className="text-3xl lg:text-5xl tracking-tight font-medium text-white mb-6 leading-tight">A resposta definitiva para operações críticas.</h2>
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-1 bg-[#0057b8]/20 border border-[#0057b8]/40 text-[#00d0cf] text-xs font-semibold rounded-sm tracking-widest">GIP</span>
<span className="text-white/30">+</span>
<span className="px-2 py-1 bg-white/5 border border-white/10 text-white/80 text-xs font-semibold rounded-sm tracking-widest">IAC-PRO</span>
</div>
<p className="text-sm text-white/60 font-light leading-relaxed mb-8 max-w-lg">
                            Uma arquitetura concebida do zero para suportar as exigências regulatórias rigorosas e a necessidade de segurança da informação ininterrupta. Unimos hardware robusto e software de alta performance.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-[#00b8aa]" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                Hardware proprietário nacional
                            </div>
<div className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-[#00b8aa]" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                Processamento na borda (Edge Computing)
                            </div>
<div className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-[#00b8aa]" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                Criptografia ponta a ponta
                            </div>
</div>
</div>
</div>

<div className="lg:col-span-6 relative flex flex-col gap-4 fade-up delay-200">

<div className="bg-[#07365d] border border-white/10 rounded-sm p-1 shadow-2xl overflow-hidden group">
<div className="bg-[#041d36] h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="ml-4 h-3 w-24 bg-white/5 rounded-full"></div>
</div>
<div className="p-6 bg-[#002b4e]">
<div className="flex justify-between items-end mb-8">
<div>
<div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Status Gate 01</div>
<div className="text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
                                        Monitoramento Ativo
                                        <span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b8aa] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00b8aa]"></span>
</span>
</div>
</div>
<div className="text-right">
<div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Acessos Hoje</div>
<div className="text-xl font-medium text-[#00d0cf]">1,248</div>
</div>
</div>
<div className="space-y-3">
<div className="h-12 border border-white/5 bg-white/5 rounded-sm flex items-center px-4 justify-between hover:border-[#0057b8]/50 transition-colors cursor-default">
<div className="flex items-center gap-3">
<iconify-icon className="text-white/40" icon="solar:user-id-linear" width="20"></iconify-icon>
<div className="text-xs text-white/80">Motorista: João Silva</div>
</div>
<div className="text-[10px] text-[#00b8aa] bg-[#00b8aa]/10 px-2 py-0.5 rounded-sm border border-[#00b8aa]/20">Liberado</div>
</div>
<div className="h-12 border border-white/5 bg-white/5 rounded-sm flex items-center px-4 justify-between hover:border-[#0057b8]/50 transition-colors cursor-default">
<div className="flex items-center gap-3">
<iconify-icon className="text-white/40" icon="solar:plate-linear" width="20"></iconify-icon>
<div className="text-xs text-white/80">Placa: ABC-1234</div>
</div>
<div className="text-[10px] text-white/50 bg-white/5 px-2 py-0.5 rounded-sm border border-white/10">Checagem OCR</div>
</div>
<div className="h-12 border border-red-500/20 bg-red-500/5 rounded-sm flex items-center px-4 justify-between cursor-default relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1 bg-[#ffb700]"></div>
<div className="flex items-center gap-3 pl-2">
<iconify-icon className="text-[#ffb700]" icon="solar:danger-triangle-linear" width="20"></iconify-icon>
<div className="text-xs text-white/80">Tentativa Não Autorizada - ZSR</div>
</div>
<div className="text-[10px] text-[#ffb700] uppercase tracking-wider font-medium">Bloqueio</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-2 mt-4 px-2">
<div className="border border-white/10 bg-[#07365d] p-3 rounded-sm flex flex-col items-center justify-center text-center group hover:border-[#00d0cf]/50 transition-colors">
<iconify-icon className="text-white/30 group-hover:text-[#00d0cf] mb-2 transition-colors" icon="solar:camera-linear" width="24"></iconify-icon>
<span className="text-[10px] text-white/50 uppercase tracking-wide">Captura</span>
</div>
<div className="flex items-center justify-center">
<iconify-icon className="text-white/20" icon="solar:transfer-horizontal-linear" width="20"></iconify-icon>
</div>
<div className="border border-white/10 bg-[#07365d] p-3 rounded-sm flex flex-col items-center justify-center text-center group hover:border-[#00d0cf]/50 transition-colors">
<iconify-icon className="text-white/30 group-hover:text-[#00d0cf] mb-2 transition-colors" icon="solar:server-path-linear" width="24"></iconify-icon>
<span className="text-[10px] text-white/50 uppercase tracking-wide">IAC-PRO</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#041d36] relative border-t border-white/5">
<div className="container mx-auto px-6 lg:px-12">
<h2 className="text-3xl tracking-tight font-medium text-white mb-12 text-center fade-up">Ganhos operacionais mensuráveis.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">

<div className="md:col-span-2 md:row-span-2 bg-[#0c416d]/40 border border-white/5 p-8 rounded-sm hover:-translate-y-1 hover:bg-[#0c416d]/60 hover:border-white/10 transition-all duration-300 flex flex-col justify-between group fade-up">
<iconify-icon className="text-[#00b8aa] group-hover:text-[#00d0cf] transition-colors" icon="solar:shield-network-linear" width="40"></iconify-icon>
<div>
<h3 className="text-2xl tracking-tight font-medium text-white mb-3 group-hover:text-[#00d0cf] transition-colors">Mais Governança</h3>
<p className="text-sm text-white/60 font-light leading-relaxed max-w-md">Controle centralizado com políticas de acesso flexíveis, relatórios de auditoria sob demanda e rastreabilidade total de cada evento nos recintos logísticos.</p>
</div>
</div>

<div className="bg-[#0c416d]/20 border border-white/5 p-6 rounded-sm hover:-translate-y-1 hover:bg-[#0c416d]/40 hover:border-white/10 transition-all duration-300 flex flex-col justify-between group fade-up delay-100">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#0057b8] group-hover:text-[#00d0cf] transition-colors" icon="solar:bolt-linear" width="32"></iconify-icon>
<iconify-icon className="text-white/0 group-hover:text-white/30 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg tracking-tight font-medium text-white mb-1">Agilidade</h3>
<p className="text-xs text-white/50 font-light">Liberações autônomas na ponta, sem gargalos.</p>
</div>
</div>

<div className="bg-[#0c416d]/20 border border-white/5 p-6 rounded-sm hover:-translate-y-1 hover:bg-[#0c416d]/40 hover:border-white/10 transition-all duration-300 flex flex-col justify-between group fade-up delay-200">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#0057b8] group-hover:text-[#00d0cf] transition-colors" icon="solar:layers-minimalistic-linear" width="32"></iconify-icon>
<iconify-icon className="text-white/0 group-hover:text-white/30 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg tracking-tight font-medium text-white mb-1">Integração</h3>
<p className="text-xs text-white/50 font-light">Comunicação nativa com ERPs e OCR.</p>
</div>
</div>

<div className="bg-[#0c416d]/20 border border-white/5 p-6 rounded-sm hover:-translate-y-1 hover:border-white/10 transition-all duration-300 flex items-center gap-4 group fade-up delay-300">
<div className="p-3 bg-[#002b4e] rounded-sm border border-white/5 group-hover:border-[#00d0cf]/30 transition-colors">
<iconify-icon className="text-[#00b8aa]" icon="solar:lock-keyhole-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base tracking-tight font-medium text-white">Segurança</h3>
<p className="text-[11px] text-white/50">Criptografia AES-256</p>
</div>
</div>
<div className="md:col-span-2 bg-[#0c416d]/20 border border-white/5 p-6 rounded-sm hover:-translate-y-1 hover:border-white/10 transition-all duration-300 flex items-center gap-4 group fade-up delay-400">
<div className="p-3 bg-[#002b4e] rounded-sm border border-white/5 group-hover:border-[#ffb700]/30 transition-colors">
<iconify-icon className="text-[#ffb700]" icon="solar:database-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base tracking-tight font-medium text-white">Resiliência Offline</h3>
<p className="text-[11px] text-white/50">As controladoras IAC-PRO operam e tomam decisões mesmo em queda de rede, sincronizando dados ao retornar.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#002b4e] border-y border-white/5">
<div className="container mx-auto px-6 lg:px-12 text-center">
<h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-8">Aderência Normativa e Regulatória</h3>
<div className="flex flex-wrap justify-center gap-4 lg:gap-8">
<div className="px-4 py-2 border border-white/10 bg-[#07365d]/50 text-sm text-white/70 rounded-sm hover:border-[#00d0cf]/50 hover:text-white transition-colors cursor-default">Receita Federal</div>
<div className="px-4 py-2 border border-white/10 bg-[#07365d]/50 text-sm text-white/70 rounded-sm hover:border-[#00d0cf]/50 hover:text-white transition-colors cursor-default">API Recintos / Portal Único</div>
<div className="px-4 py-2 border border-white/10 bg-[#07365d]/50 text-sm text-white/70 rounded-sm hover:border-[#00d0cf]/50 hover:text-white transition-colors cursor-default">ISPS Code</div>
<div className="px-4 py-2 border border-white/10 bg-[#07365d]/50 text-sm text-white/70 rounded-sm hover:border-[#00d0cf]/50 hover:text-white transition-colors cursor-default">LGPD</div>
<div className="px-4 py-2 border border-white/10 bg-[#07365d]/50 text-sm text-white/70 rounded-sm hover:border-[#00d0cf]/50 hover:text-white transition-colors cursor-default">COANA</div>
</div>
</div>
</section>

<section className="py-24 bg-[#041d36] relative">
<div className="container mx-auto px-6 lg:px-12">
<div className="mb-12 fade-up">
<h2 className="text-3xl tracking-tight font-medium text-white mb-4">Aplicações na prática.</h2>
<p className="text-sm text-white/60 font-light max-w-xl">Arquitetura modular que se adapta às diferentes zonas de segurança do ambiente portuário.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative h-72 border border-white/10 overflow-hidden rounded-sm cursor-default fade-up delay-100">
<div className="absolute inset-0 bg-[#002b4e] z-0"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-30 transition-all duration-700 z-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#002b4e] via-[#002b4e]/80 to-transparent z-10"></div>
<div className="absolute inset-0 p-6 z-20 flex flex-col justify-end">
<iconify-icon className="text-[#00b8aa] mb-2 transform group-hover:-translate-y-1 transition-transform" icon="solar:buildings-linear" width="24"></iconify-icon>
<h3 className="text-base font-medium text-white mb-1 transform group-hover:-translate-y-1 transition-transform">Terminais Privados</h3>
<p className="text-xs text-white/50 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">Gestão corporativa e integração com balanças e ERPs.</p>
</div>
</div>

<div className="group relative h-72 border border-white/10 overflow-hidden rounded-sm cursor-default fade-up delay-200">
<div className="absolute inset-0 bg-[#002b4e] z-0"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-30 transition-all duration-700 z-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#002b4e] via-[#002b4e]/80 to-transparent z-10"></div>
<div className="absolute inset-0 p-6 z-20 flex flex-col justify-end">
<iconify-icon className="text-[#00b8aa] mb-2 transform group-hover:-translate-y-1 transition-transform" icon="solar:anchor-linear" width="24"></iconify-icon>
<h3 className="text-base font-medium text-white mb-1 transform group-hover:-translate-y-1 transition-transform">Áreas Alfandegadas</h3>
<p className="text-xs text-white/50 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">Rigor total normativo e extração rápida para Receita.</p>
</div>
</div>

<div className="group relative h-72 border border-white/10 overflow-hidden rounded-sm cursor-default fade-up delay-300">
<div className="absolute inset-0 bg-[#002b4e] z-0"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-30 transition-all duration-700 z-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#002b4e] via-[#002b4e]/80 to-transparent z-10"></div>
<div className="absolute inset-0 p-6 z-20 flex flex-col justify-end">
<iconify-icon className="text-[#00b8aa] mb-2 transform group-hover:-translate-y-1 transition-transform" icon="solar:routing-linear" width="24"></iconify-icon>
<h3 className="text-base font-medium text-white mb-1 transform group-hover:-translate-y-1 transition-transform">Gates de Veículos</h3>
<p className="text-xs text-white/50 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">Fluxo rápido com OCR, biometria e antenas UHF.</p>
</div>
</div>

<div className="group relative h-72 border border-white/10 overflow-hidden rounded-sm cursor-default fade-up delay-400">
<div className="absolute inset-0 bg-[#002b4e] z-0"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-30 transition-all duration-700 z-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#002b4e] via-[#002b4e]/80 to-transparent z-10"></div>
<div className="absolute inset-0 p-6 z-20 flex flex-col justify-end">
<iconify-icon className="text-[#ffb700] mb-2 transform group-hover:-translate-y-1 transition-transform" icon="solar:forbidden-circle-linear" width="24"></iconify-icon>
<h3 className="text-base font-medium text-white mb-1 transform group-hover:-translate-y-1 transition-transform">Zonas Restritas</h3>
<p className="text-xs text-white/50 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">Controle anti-passback rigoroso e dupla validação.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#002b4e] border-t border-white/5 overflow-hidden" id="arquitetura">
<div className="container mx-auto px-6 lg:px-12">
<h2 className="text-3xl tracking-tight font-medium text-white mb-16 text-center fade-up">Arquitetura de comunicação segura.</h2>

<div className="relative hidden lg:flex items-center justify-between mt-12 mb-8 fade-up delay-200">

<div className="absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-white/5 -translate-y-1/2 z-0"></div>

<div className="relative z-10 flex flex-col items-center w-48 group">
<div className="w-16 h-16 bg-[#07365d] border border-white/10 rounded-sm flex items-center justify-center mb-4 group-hover:border-[#00d0cf] group-hover:shadow-[0_0_15px_rgba(0,208,207,0.2)] transition-all bg-[#002b4e]">
<iconify-icon className="text-white/50 group-hover:text-[#00d0cf] transition-colors" icon="solar:scanner-linear" width="28"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-1 text-center">Captura</h4>
<p className="text-[10px] text-white/40 text-center leading-tight">Leitores faciais, cartões, LPR, antenas</p>
</div>

<div className="relative z-10 flex flex-col items-center w-48 group">
<div className="w-16 h-16 bg-[#07365d] border border-[#0057b8]/40 rounded-sm flex items-center justify-center mb-4 group-hover:border-[#00d0cf] group-hover:shadow-[0_0_15px_rgba(0,208,207,0.2)] transition-all bg-[#002b4e] relative">
<div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00b8aa] rounded-full border-2 border-[#002b4e]"></div>
<iconify-icon className="text-[#00b8aa] group-hover:text-[#00d0cf] transition-colors" icon="solar:cpu-bolt-linear" width="28"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-1 text-center">IAC-PRO</h4>
<p className="text-[10px] text-white/40 text-center leading-tight">Controladora TCP/IP, Edge Computing</p>
</div>

<div className="relative z-10 flex flex-col items-center w-48 group">
<div className="w-16 h-16 bg-[#07365d] border border-white/10 rounded-sm flex items-center justify-center mb-4 group-hover:border-[#00d0cf] group-hover:shadow-[0_0_15px_rgba(0,208,207,0.2)] transition-all bg-[#002b4e]">
<iconify-icon className="text-white/50 group-hover:text-[#00d0cf] transition-colors" icon="solar:server-square-linear" width="28"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-1 text-center">Plataforma GIP</h4>
<p className="text-[10px] text-white/40 text-center leading-tight">Processamento central, banco de dados seguro</p>
</div>

<div className="relative z-10 flex flex-col items-center w-48 group">
<div className="w-16 h-16 bg-[#07365d] border border-white/10 rounded-sm flex items-center justify-center mb-4 group-hover:border-[#00d0cf] group-hover:shadow-[0_0_15px_rgba(0,208,207,0.2)] transition-all bg-[#002b4e]">
<iconify-icon className="text-white/50 group-hover:text-[#00d0cf] transition-colors" icon="solar:monitor-smartphone-linear" width="28"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-1 text-center">Gestão</h4>
<p className="text-[10px] text-white/40 text-center leading-tight">Painéis de controle, ERPs, Receita Federal</p>
</div>
</div>

<div className="lg:hidden flex flex-col gap-6 relative before:absolute before:inset-y-0 before:left-8 before:w-[1px] before:bg-white/10 pl-4">
<div className="flex items-start gap-6 relative">
<div className="w-10 h-10 bg-[#002b4e] border border-white/10 rounded-sm flex items-center justify-center z-10 shrink-0">
<iconify-icon className="text-white/50" icon="solar:scanner-linear" width="20"></iconify-icon>
</div>
<div className="pt-2">
<h4 className="text-sm font-medium text-white">Captura</h4>
<p className="text-xs text-white/40">Leitores faciais, LPR, etc.</p>
</div>
</div>

<div className="flex items-start gap-6 relative">
<div className="w-10 h-10 bg-[#002b4e] border border-[#0057b8]/50 rounded-sm flex items-center justify-center z-10 shrink-0">
<iconify-icon className="text-[#00b8aa]" icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
</div>
<div className="pt-2">
<h4 className="text-sm font-medium text-white">IAC-PRO</h4>
<p className="text-xs text-white/40">Controladora TCP/IP local</p>
</div>
</div>
<div className="flex items-start gap-6 relative">
<div className="w-10 h-10 bg-[#002b4e] border border-white/10 rounded-sm flex items-center justify-center z-10 shrink-0">
<iconify-icon className="text-white/50" icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
<div className="pt-2">
<h4 className="text-sm font-medium text-white">Plataforma GIP</h4>
<p className="text-xs text-white/40">Gestão central e dados</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#041d36] border-t border-white/5" id="cases">
<div className="container mx-auto px-6 lg:px-12 mb-8">
<h3 className="text-xs font-medium text-white/40 uppercase tracking-widest text-center">Operando em ambientes de alta criticidade</h3>
</div>

<div className="marquee-container py-4">
<div className="marquee-content gap-16 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
<span className="text-xl font-semibold tracking-tighter text-white">PORTOCEL</span>
<span className="text-xl font-bold tracking-tight text-white uppercase">Porto de Santos</span>
<span className="text-xl font-medium tracking-widest text-white uppercase">Wilson Sons</span>
<span className="text-xl font-semibold tracking-tighter text-white">EMBRAPORT</span>
<span className="text-xl font-bold tracking-tight text-white uppercase">DP World</span>
<span className="text-xl font-medium tracking-widest text-white uppercase">BTP</span>

<span className="text-xl font-semibold tracking-tighter text-white">PORTOCEL</span>
<span className="text-xl font-bold tracking-tight text-white uppercase">Porto de Santos</span>
<span className="text-xl font-medium tracking-widest text-white uppercase">Wilson Sons</span>
<span className="text-xl font-semibold tracking-tighter text-white">EMBRAPORT</span>
<span className="text-xl font-bold tracking-tight text-white uppercase">DP World</span>
<span className="text-xl font-medium tracking-widest text-white uppercase">BTP</span>
</div>
</div>
</section>

<section className="relative py-32 flex items-center justify-center overflow-hidden border-t border-white/5" id="contato">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[#002b4e]/80 z-10"></div>
<img alt="Porto Escuro" className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="container relative z-20 mx-auto px-6 lg:px-12 text-center fade-up">
<span className="inline-block mb-4 text-xs font-semibold text-[#ffb700] bg-[#ffb700]/10 border border-[#ffb700]/20 px-3 py-1 rounded-sm tracking-widest uppercase">Próximo Passo</span>
<h2 className="text-3xl lg:text-5xl tracking-tight font-medium text-white mb-6 max-w-3xl mx-auto leading-tight">
                Pronto para elevar o padrão do controle de acesso do seu porto?
            </h2>
<p className="text-sm lg:text-base text-white/60 font-light mb-10 max-w-xl mx-auto">
                Fale com nossos engenheiros e descubra como a plataforma GIP IAC-PRO pode resolver seus gargalos operacionais e garantir total compliance.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="flex items-center justify-center h-12 px-8 bg-[#00b8aa] hover:bg-[#00d0cf] text-[#002b4e] text-sm font-semibold rounded-sm transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,184,170,0.2)] hover:shadow-[0_6px_20px_rgba(0,208,207,0.3)] hover:-translate-y-1 w-full sm:w-auto" href="#">
                    Solicitar demonstração técnica
                </a>
<a className="flex items-center justify-center h-12 px-8 bg-transparent border border-white/20 hover:border-white/50 text-white text-sm font-medium rounded-sm transition-all duration-300 w-full sm:w-auto group" href="#">
                    Falar via WhatsApp
                    <iconify-icon className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-[#001d36] pt-16 pb-8 border-t border-white/5">
<div className="container mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<span className="text-xl tracking-tight font-semibold text-white uppercase tracking-widest block mb-4">Maxtel</span>
<p className="text-xs text-white/50 leading-relaxed">
                        Tecnologia nacional de ponta para controle de acesso em operações portuárias, alfandegadas e de missão crítica.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Plataforma</h4>
<ul className="space-y-3">
<li><a className="text-xs text-white/50 hover:text-white transition-colors nav-link inline-block" href="#">Visão Geral</a></li>
<li><a className="text-xs text-white/50 hover:text-white transition-colors nav-link inline-block" href="#">Controladora IAC-PRO</a></li>
<li><a className="text-xs text-white/50 hover:text-white transition-colors nav-link inline-block" href="#">Software GIP</a></li>
<li><a className="text-xs text-white/50 hover:text-white transition-colors nav-link inline-block" href="#">Integrações (API)</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Aplicações</h4>
<ul className="space-y-3">
<li><a className="text-xs text-white/50 hover:text-white transition-colors nav-link inline-block" href="#">Terminais Portuários</a></li>
<li><a className="text-xs text-white/50 hover:text-white transition-colors nav-link inline-block" href="#">Recintos Alfandegados</a></li>
<li><a className="text-xs text-white/50 hover:text-white transition-colors nav-link inline-block" href="#">Zonas Restritas (ISPS)</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Contato</h4>
<ul className="space-y-3">
<li className="text-xs text-white/50 flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                            comercial@maxtel.com.br
                        </li>
<li className="text-xs text-white/50 flex items-center gap-2">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                            +55 (11) 3000-0000
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-white/40">© 2024 Maxtel Tecnologia. Todos os direitos reservados.</p>
<div className="flex items-center gap-4">
<a className="text-[10px] text-white/40 hover:text-white transition-colors" href="#">Política de Privacidade</a>
<a className="text-[10px] text-white/40 hover:text-white transition-colors" href="#">Termos de Uso</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
