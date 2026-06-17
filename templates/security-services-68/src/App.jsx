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
      

<nav className="fixed w-full z-50 top-0 bg-[#000000]/80 backdrop-blur-md border-b border-[#333333]/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
<a className="font-['Montserrat'] font-semibold text-2xl text-[#B8D600] tracking-tight flex items-center gap-2" href="#">
<i className="w-6 h-6" data-lucide="shield-half" strokeWidth="1.5"></i>
                ESSBrasil
            </a>
<div className="hidden md:flex gap-8 items-center text-[#F5F5F5] text-sm font-medium">
<a className="hover:text-[#B8D600] transition-colors" href="#quem-somos">Quem Somos</a>
<a className="hover:text-[#B8D600] transition-colors" href="#atuacao">Atuação</a>
<a className="hover:text-[#B8D600] transition-colors" href="#servicos">Serviços</a>
</div>
<a className="hidden md:inline-flex bg-[#B8D600] text-[#000000] font-medium text-sm px-5 py-2.5 rounded-full hover:bg-white transition-colors duration-300 items-center gap-2" href="#contato">
                Fale Conosco
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<button className="md:hidden text-[#F5F5F5]">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative bg-[#000000] text-[#F5F5F5] pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-12 overflow-hidden">

<div className="absolute inset-0 opacity-20 pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(184,214,0,0.15)_0%,transparent_70%)] blur-3xl"></div>
<div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#333333] bg-[#0A0A0A] text-sm text-[#B8D600] mb-8 font-medium">
<span className="w-2 h-2 rounded-full bg-[#B8D600] animate-pulse"></span>
                    Sistemas eletrônicos de alta performance
                </div>
<h1 className="font-['Montserrat'] font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-8 leading-[1.05]">
                    Arquitetura de segurança para <span className="text-[#B8D600]">operações críticas</span>
</h1>
<p className="text-xl md:text-2xl text-[#666666] mb-12 max-w-3xl leading-relaxed">
                    Projetamos, integramos, configuramos, operamos e sustentamos sistemas eletrônicos de segurança para ambientes corporativos, industriais e infraestruturas sensíveis.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#B8D600] text-[#000000] font-medium text-lg px-8 py-4 rounded-lg text-center hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group" href="#solucoes">
                        Conheça nossas soluções
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
<a className="bg-[#0A0A0A] border border-[#333333] text-[#F5F5F5] font-medium text-lg px-8 py-4 rounded-lg text-center hover:bg-[#333333] transition-all duration-300" href="#contato">
                        Fale com a ESSBrasil
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-white" id="quem-somos">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -inset-4 bg-[#F5F5F5] rounded-3xl -z-10 transform -rotate-2"></div>
<img alt="Data Center Security" className="rounded-2xl shadow-lg object-cover w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute -bottom-6 -right-6 bg-[#000000] text-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
<i className="text-[#B8D600] w-10 h-10 mb-4" data-lucide="shield-check" strokeWidth="1.5"></i>
<p className="font-['Montserrat'] font-semibold text-2xl tracking-tight leading-tight">Desde 2011</p>
<p className="text-sm text-[#666666] mt-2">Protegendo operações de alto nível</p>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="font-['Montserrat'] font-semibold text-4xl md:text-5xl tracking-tight text-[#000000] mb-8">Especialistas em segurança eletrônica de alto nível</h2>
<div className="space-y-6 text-[#666666]">
<p>A ESSBrasil é uma integradora especializada em sistemas eletrônicos de segurança, com atuação focada em ambientes corporativos, industriais e operações críticas.</p>
<p>Fundada em 2011, a empresa nasceu da experiência prática de seus sócios em projetos complexos, atendimento a clientes globais e ambientes com elevado grau de exigência técnica e operacional.</p>
<p className="text-xl text-[#333333] pl-6 border-l-2 border-[#B8D600] py-2 mt-8">Mais do que instalar sistemas, a ESSBrasil atua em toda a jornada da solução: do diagnóstico técnico ao suporte contínuo, garantindo desempenho, confiabilidade e aderência às necessidades do negócio.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-[#0A0A0A] text-white border-y border-[#333333]" id="atuacao">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-16 md:mb-24">
<h2 className="font-['Montserrat'] font-semibold text-4xl md:text-6xl tracking-tight mb-8 leading-tight">Segurança desenhada para ambientes que não podem parar</h2>
<p className="text-xl md:text-2xl text-[#666666]">A ESSBrasil atua em operações que exigem continuidade operacional, governança, padronização e alto nível de controle.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-[#000000] border border-[#333333] hover:border-[#B8D600]/50 transition-colors group">
<i className="text-[#B8D600] w-8 h-8 mb-6" data-lucide="building-2" strokeWidth="1.5"></i>
<h3 className="font-['Montserrat'] font-semibold text-2xl tracking-tight mb-3">Escritórios corporativos</h3>
<p className="text-sm text-[#666666]">Governança e controle para sedes empresariais.</p>
</div>
<div className="p-8 rounded-2xl bg-[#000000] border border-[#333333] hover:border-[#B8D600]/50 transition-colors group">
<i className="text-[#B8D600] w-8 h-8 mb-6" data-lucide="factory" strokeWidth="1.5"></i>
<h3 className="font-['Montserrat'] font-semibold text-2xl tracking-tight mb-3">Indústrias</h3>
<p className="text-sm text-[#666666]">Proteção para plantas de alta complexidade.</p>
</div>
<div className="p-8 rounded-2xl bg-[#000000] border border-[#333333] hover:border-[#B8D600]/50 transition-colors group">
<i className="text-[#B8D600] w-8 h-8 mb-6" data-lucide="truck" strokeWidth="1.5"></i>
<h3 className="font-['Montserrat'] font-semibold text-2xl tracking-tight mb-3">Centros de distribuição</h3>
<p className="text-sm text-[#666666]">Segurança logística e controle de frota/ativos.</p>
</div>
<div className="p-8 rounded-2xl bg-[#000000] border border-[#333333] hover:border-[#B8D600]/50 transition-colors group">
<i className="text-[#B8D600] w-8 h-8 mb-6" data-lucide="server" strokeWidth="1.5"></i>
<h3 className="font-['Montserrat'] font-semibold text-2xl tracking-tight mb-3">Data centers</h3>
<p className="text-sm text-[#666666]">Monitoramento de ambientes hipercríticos.</p>
</div>
<div className="p-8 rounded-2xl bg-[#000000] border border-[#333333] hover:border-[#B8D600]/50 transition-colors group lg:col-span-2">
<i className="text-[#B8D600] w-8 h-8 mb-6" data-lucide="globe" strokeWidth="1.5"></i>
<h3 className="font-['Montserrat'] font-semibold text-2xl tracking-tight mb-3">Operações multi-site e multinacionais</h3>
<p className="text-sm text-[#666666] max-w-md">Padronização tecnológica e gestão unificada em diferentes regiões geográficas.</p>
</div>
</div>
<div className="mt-20 pt-10 border-t border-[#333333] text-center max-w-4xl mx-auto">
<p className="text-xl text-[#F5F5F5]">Cada projeto é desenvolvido para equilibrar proteção, eficiência operacional, integração corporativa e sustentabilidade da solução ao longo do tempo.</p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F5F5]">
<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
<div className="lg:col-span-5">
<div className="sticky top-32">
<h2 className="font-['Montserrat'] font-semibold text-4xl md:text-5xl tracking-tight text-[#000000] mb-6">Projeto antes do produto</h2>
<p className="text-xl text-[#666666]">Na ESSBrasil, a solução não começa pela câmera, pela catraca ou pelo software. Começa pelo entendimento do ambiente, da operação e do risco.</p>
</div>
</div>
<div className="lg:col-span-7">
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#333333]/5">
<p className="text-lg text-[#333333] mb-8 font-medium">Antes de especificar qualquer tecnologia, avaliamos rigorosamente:</p>
<ul className="space-y-6">
<li className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F5F5F5] transition-colors">
<i className="text-[#000000] w-6 h-6 shrink-0 mt-1" data-lucide="alert-triangle" strokeWidth="1.5"></i>
<div>
<span className="block text-xl text-[#000000] mb-1">Risco e criticidade do ambiente</span>
</div>
</li>
<li className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F5F5F5] transition-colors">
<i className="text-[#000000] w-6 h-6 shrink-0 mt-1" data-lucide="users" strokeWidth="1.5"></i>
<div>
<span className="block text-xl text-[#000000] mb-1">Fluxo de pessoas, veículos e ativos</span>
</div>
</li>
<li className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F5F5F5] transition-colors">
<i className="text-[#000000] w-6 h-6 shrink-0 mt-1" data-lucide="network" strokeWidth="1.5"></i>
<div>
<span className="block text-xl text-[#000000] mb-1">Requisitos de TI, rede, storage e cibersegurança</span>
</div>
</li>
<li className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F5F5F5] transition-colors">
<i className="text-[#000000] w-6 h-6 shrink-0 mt-1" data-lucide="timer" strokeWidth="1.5"></i>
<div>
<span className="block text-xl text-[#000000] mb-1">Ciclo de vida da solução</span>
</div>
</li>
<li className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F5F5F5] transition-colors">
<i className="text-[#000000] w-6 h-6 shrink-0 mt-1" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
<div>
<span className="block text-xl text-[#000000] mb-1">Custo total de propriedade</span>
<span className="text-sm text-[#666666]">E não apenas o investimento inicial.</span>
</div>
</li>
</ul>
<div className="mt-10 p-6 bg-[#000000] text-[#F5F5F5] rounded-xl flex gap-4 items-center">
<i className="text-[#B8D600] w-8 h-8 shrink-0" data-lucide="lightbulb" strokeWidth="1.5"></i>
<p className="text-sm md:text-base">Esse modelo permite entregar sistemas mais robustos, eficientes e alinhados aos objetivos do cliente.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-white" id="servicos">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="font-['Montserrat'] font-semibold text-4xl md:text-5xl tracking-tight text-[#000000] mb-6">Serviços especializados para projetar, integrar e operar sistemas</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="p-10 rounded-3xl bg-[#F5F5F5] group">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="text-[#000000] w-7 h-7" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Montserrat'] font-semibold text-3xl tracking-tight text-[#000000] mb-4">Projetos estratégicos</h3>
<p className="text-[#666666] leading-relaxed">Desenvolvimento de arquiteturas completas de segurança, com base no nível de risco, nas exigências operacionais e na visão de longo prazo da operação.</p>
</div>

<div className="p-10 rounded-3xl bg-[#0A0A0A] text-white group">
<div className="w-14 h-14 bg-[#333333] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="text-[#B8D600] w-7 h-7" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Montserrat'] font-semibold text-3xl tracking-tight mb-4">Integração e configuração avançadas</h3>
<p className="text-[#666666] leading-relaxed">Implantação, parametrização e integração de plataformas de CFTV, controle de acesso e demais sistemas relacionados ao ecossistema de segurança.</p>
</div>

<div className="p-10 rounded-3xl border border-[#F5F5F5] group hover:border-[#333333]/20 transition-colors">
<div className="w-14 h-14 bg-[#F5F5F5] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="text-[#000000] w-7 h-7" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Montserrat'] font-semibold text-3xl tracking-tight text-[#000000] mb-4">Manutenção e suporte remotos</h3>
<p className="text-[#666666] leading-relaxed">Acompanhamento técnico contínuo para preservar a disponibilidade, a estabilidade e a performance dos sistemas implantados.</p>
</div>

<div className="p-10 rounded-3xl border border-[#F5F5F5] group hover:border-[#333333]/20 transition-colors">
<div className="w-14 h-14 bg-[#F5F5F5] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="text-[#000000] w-7 h-7" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Montserrat'] font-semibold text-3xl tracking-tight text-[#000000] mb-4">Operação e suporte técnico</h3>
<p className="text-[#666666] leading-relaxed">Atuação técnica recorrente para garantir governança, continuidade operacional e evolução constante das soluções.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-[#000000] text-white overflow-hidden relative">

<div className="absolute right-0 top-0 w-1/3 h-full bg-[#333333]/10 skew-x-12 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<div className="mb-6 flex items-center gap-3 text-[#B8D600] font-medium text-sm tracking-widest uppercase">
<span className="w-8 h-[1px] bg-[#B8D600]"></span>
                    Pós-instalação
                </div>
<h2 className="font-['Montserrat'] font-semibold text-4xl md:text-5xl tracking-tight mb-8 leading-tight">O que realmente diferencia a ESSBrasil começa após a instalação</h2>
<p className="text-xl text-[#F5F5F5] mb-10">A instalação física é apenas uma etapa do processo. O verdadeiro valor está na capacidade de configurar, integrar, operar e sustentar o ambiente com inteligência técnica.</p>
<div className="grid sm:grid-cols-2 gap-6 mb-12">
<div className="flex gap-4">
<i className="text-[#B8D600] w-6 h-6 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-[#F5F5F5]">Configuração completa dos sistemas</span>
</div>
<div className="flex gap-4">
<i className="text-[#B8D600] w-6 h-6 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-[#F5F5F5]">Parametrização avançada de VMS e acesso</span>
</div>
<div className="flex gap-4">
<i className="text-[#B8D600] w-6 h-6 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-[#F5F5F5]">Integração entre plataformas corporativas</span>
</div>
<div className="flex gap-4">
<i className="text-[#B8D600] w-6 h-6 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-[#F5F5F5]">Operação remota e ajustes finos contínuos</span>
</div>
</div>
<div className="p-6 bg-[#0A0A0A] border-l-2 border-[#B8D600]">
<p className="text-[#666666] italic">"Na prática, a ESSBrasil funciona como uma extensão técnica do cliente, apoiando a evolução e a estabilidade da operação ao longo do tempo."</p>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] bg-[#0A0A0A] rounded-2xl overflow-hidden border border-[#333333]">
<img alt="Technical Integration" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent"></div>
</div>

<div className="absolute -left-8 top-1/3 bg-[#0A0A0A] border border-[#333333] p-6 rounded-xl shadow-2xl hidden md:block backdrop-blur-sm">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-[#B8D600]/20 flex items-center justify-center text-[#B8D600]">
<i className="w-5 h-5" data-lucide="terminal" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xs text-[#666666]">Status do Sistema</div>
<div className="text-sm text-white font-medium">Integração Ativa</div>
</div>
</div>
<div className="h-1.5 w-32 bg-[#333333] rounded-full overflow-hidden">
<div className="h-full bg-[#B8D600] w-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F5F5]">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-['Montserrat'] font-semibold text-4xl md:text-5xl tracking-tight text-[#000000] mb-8">Experiência em projetos internacionais e operações multinacionais</h2>
<p className="text-xl text-[#666666] mb-10">A ESSBrasil possui experiência consolidada em projetos com padrões globais de segurança e governança, atendendo operações que demandam alinhamento entre matriz, filiais e parceiros locais.</p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#333333]/5">
<span className="w-2 h-2 rounded-full bg-[#000000]"></span>
</div>
<span className="text-[#333333] mt-1">Projetos orientados por padrões internacionais</span>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#333333]/5">
<span className="w-2 h-2 rounded-full bg-[#000000]"></span>
</div>
<span className="text-[#333333] mt-1">Integração com times nos EUA e Europa</span>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#333333]/5">
<span className="w-2 h-2 rounded-full bg-[#000000]"></span>
</div>
<span className="text-[#333333] mt-1">Suporte técnico em inglês e espanhol</span>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#333333]/5">
<span className="w-2 h-2 rounded-full bg-[#000000]"></span>
</div>
<span className="text-[#333333] mt-1">Coordenação entre matriz, unidades e fornecedores</span>
</li>
</ul>
</div>
<div className="bg-white p-12 rounded-3xl shadow-sm border border-[#333333]/5 flex flex-col justify-center min-h-[400px] relative overflow-hidden">
<i className="absolute -right-20 -top-20 w-96 h-96 text-[#F5F5F5]" data-lucide="globe-2" strokeWidth="1.5"></i>
<p className="text-2xl font-medium text-[#000000] relative z-10 leading-relaxed">
                        "Esse modelo garante consistência, padronização e capacidade de adaptação às necessidades regionais de cada operação."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white border-b border-[#F5F5F5]">
<div className="max-w-7xl mx-auto text-center">

<div className="mb-24">
<h2 className="font-['Montserrat'] font-semibold text-2xl md:text-3xl tracking-tight text-[#000000] mb-4">Parcerias tecnológicas estratégicas</h2>
<p className="text-[#666666] max-w-2xl mx-auto mb-12">Trabalhamos com plataformas globais e high-end, selecionadas por sua confiabilidade, segurança e aderência a ambientes críticos.</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="font-['Montserrat'] font-semibold text-2xl flex items-center gap-2 tracking-tight"><i className="w-6 h-6" data-lucide="camera"></i> GLOBALVISION</div>
<div className="font-['Montserrat'] font-semibold text-2xl flex items-center gap-2 tracking-tight"><i className="w-6 h-6" data-lucide="lock"></i> SECURETECH</div>
<div className="font-['Montserrat'] font-semibold text-2xl flex items-center gap-2 tracking-tight"><i className="w-6 h-6" data-lucide="database"></i> DATASTORE</div>
<div className="font-['Montserrat'] font-semibold text-2xl flex items-center gap-2 tracking-tight"><i className="w-6 h-6" data-lucide="cpu"></i> SYSCORE</div>
</div>
</div>

<div>
<h2 className="font-['Montserrat'] font-semibold text-2xl md:text-3xl tracking-tight text-[#000000] mb-4">Experiência construída em projetos relevantes</h2>
<p className="text-[#666666] max-w-2xl mx-auto mb-12">Ao longo de mais de uma década, consolidamos nossa atuação em projetos críticos para empresas que exigem alto nível de segurança.</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30">

<div className="w-32 h-12 bg-[#333333] rounded-md"></div>
<div className="w-32 h-12 bg-[#333333] rounded-md"></div>
<div className="w-32 h-12 bg-[#333333] rounded-md"></div>
<div className="w-32 h-12 bg-[#333333] rounded-md"></div>
<div className="w-32 h-12 bg-[#333333] rounded-md"></div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-[#000000] text-white">
<div className="max-w-7xl mx-auto">
<h2 className="font-['Montserrat'] font-semibold text-4xl md:text-5xl tracking-tight mb-20 text-center">Diferenciais que sustentam operações críticas</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

<div>
<div className="text-[#B8D600] mb-4 pb-4 border-b border-[#333333]">01</div>
<h3 className="font-['Montserrat'] font-semibold text-xl tracking-tight mb-2 text-white">Experiência comprovada</h3>
<p className="text-[#666666] text-sm">Mais de uma década de experiência exclusiva em projetos críticos.</p>
</div>

<div>
<div className="text-[#B8D600] mb-4 pb-4 border-b border-[#333333]">02</div>
<h3 className="font-['Montserrat'] font-semibold text-xl tracking-tight mb-2 text-white">Time especializado</h3>
<p className="text-[#666666] text-sm">Corpo técnico próprio, certificado e altamente treinado.</p>
</div>

<div>
<div className="text-[#B8D600] mb-4 pb-4 border-b border-[#333333]">03</div>
<h3 className="font-['Montserrat'] font-semibold text-xl tracking-tight mb-2 text-white">Compromisso total</h3>
<p className="text-[#666666] text-sm">Foco na sustentação da operação, e não apenas com a entrega do projeto.</p>
</div>

<div>
<div className="text-[#B8D600] mb-4 pb-4 border-b border-[#333333]">04</div>
<h3 className="font-['Montserrat'] font-semibold text-xl tracking-tight mb-2 text-white">Visão global</h3>
<p className="text-[#666666] text-sm">Vivência real e estruturada em ambientes e padrões globais.</p>
</div>

<div className="lg:col-span-2">
<div className="text-[#B8D600] mb-4 pb-4 border-b border-[#333333]">05</div>
<h3 className="font-['Montserrat'] font-semibold text-xl tracking-tight mb-2 text-white">Além do hardware</h3>
<p className="text-[#666666] text-sm max-w-lg">Visão estratégica holística. A ESSBrasil entrega segurança com inteligência técnica, profundidade de projeto e foco na continuidade do negócio.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-white relative">
<div className="max-w-6xl mx-auto bg-[#0A0A0A] rounded-3xl p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#B8D600 1px, transparent 1px), linear-gradient(90deg, #B8D600 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="relative z-10 max-w-4xl mx-auto">
<h2 className="font-['Montserrat'] font-semibold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-8 leading-tight">
                    Sua operação exige mais do que equipamentos. Exige <span className="text-[#B8D600]">arquitetura</span>, integração e continuidade.
                </h2>
<p className="text-xl text-[#F5F5F5] mb-12 max-w-2xl mx-auto font-light">
                    Fale com a ESSBrasil e descubra como estruturar um ambiente de segurança mais confiável, eficiente e preparado para operações críticas.
                </p>
<a className="inline-flex items-center gap-2 bg-[#B8D600] text-[#000000] font-medium px-10 py-5 rounded-lg text-lg hover:bg-white hover:scale-105 transition-all duration-300" href="#contato">
                    Entrar em contato
                    <i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="2"></i>
</a>
</div>
</div>
</section>

<footer className="bg-[#000000] text-[#F5F5F5] py-20 px-6 md:px-12 border-t border-[#333333]" id="contato">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
<div className="lg:col-span-2">
<a className="font-['Montserrat'] font-semibold text-3xl text-[#B8D600] tracking-tight mb-6 flex items-center gap-2" href="#">
<i className="w-8 h-8" data-lucide="shield-half" strokeWidth="1.5"></i>
                    ESSBrasil
                </a>
<p className="text-[#666666] max-w-sm mb-8 text-sm leading-relaxed">
                    Integradora especializada em sistemas eletrônicos de segurança, com atuação focada em ambientes corporativos, industriais e operações críticas.
                </p>
<p className="text-xs text-[#333333]">© 2024 ESSBrasil. Todos os direitos reservados.</p>
</div>
<div>
<h4 className="font-['Montserrat'] font-semibold text-lg tracking-tight mb-6 text-white uppercase text-xs">Contato</h4>
<ul className="space-y-4 text-sm font-light">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-[#666666]" data-lucide="phone" strokeWidth="1.5"></i>
                        (11) 2609-1169
                    </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-[#666666]" data-lucide="globe" strokeWidth="1.5"></i>
<a className="hover:text-[#B8D600] transition-colors" href="https://www.essbrasil.com.br">www.essbrasil.com.br</a>
</li>
</ul>
</div>
<div>
<h4 className="font-['Montserrat'] font-semibold text-lg tracking-tight mb-6 text-white uppercase text-xs">Redes Sociais</h4>
<ul className="space-y-4 text-sm font-light">
<li>
<a className="flex items-center gap-3 hover:text-[#B8D600] transition-colors" href="#">
<i className="w-4 h-4 text-[#666666]" data-lucide="linkedin" strokeWidth="1.5"></i>
                            /ess-brasil
                        </a>
</li>
<li>
<a className="flex items-center gap-3 hover:text-[#B8D600] transition-colors" href="#">
<i className="w-4 h-4 text-[#666666]" data-lucide="instagram" strokeWidth="1.5"></i>
                            @ess_brasil
                        </a>
</li>
</ul>
</div>
</div>
</footer>


    </>
  );
}
