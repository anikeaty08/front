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
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
<div className="max-w-6xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-full bg-emerald-500 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-slate-950">K</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-base font-semibold tracking-tight">Kapital Cleaning</span>
<span className="text-[11px] uppercase font-medium text-emerald-300/80 tracking-[0.16em]">Cuidando do seu espaço como se fosse nosso.</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-200 hover:text-white transition-colors" href="#hero">Início</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#about">Quem Somos</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#services">Serviços</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#portfolio">Portfólio</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#contact">Contato</a>
</nav>
<button className="hidden md:inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors">
<i className="lucide lucide-phone-call text-[15px]"></i>
          Fale Conosco
        </button>
<button className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-700 h-9 w-9 text-slate-200">
<i className="lucide lucide-menu text-[18px]"></i>
</button>
</div>
</header>

<main className="flex-1">
<section className="relative overflow-hidden border-b border-slate-800" id="hero">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#22c55e22,_transparent_60%)] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-4 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center relative z-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/5 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-[11px] font-medium tracking-[0.16em] uppercase text-emerald-200">Por uma limpeza que faz sorrir</span>
</div>
<div className="">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50">
                Limpeza profissional para espaços que inspiram confiança.
              </h1>
<p className="mt-4 text-sm md:text-base text-slate-300 max-w-xl">
                A <span className="font-semibold text-emerald-300">Kapital Cleaning</span> é especialista em limpeza geral, desinfestação e paisagismo,
                oferecendo serviços de referência que valorizam o seu património e garantem bem‑estar e segurança.
              </p>
</div>
<div className="flex flex-col sm:flex-row gap-3 pt-2">
<a className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors" href="#contact">
                Solicitar Orçamento
              </a>
<a className="inline-flex items-center justify-center hover:border-emerald-400/70 hover:text-emerald-100 transition-colors text-sm font-medium text-slate-100 border-slate-700 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#services">
                Ver Serviços
              </a>
</div>
<div className="grid grid-cols-3 gap-4 pt-4 max-w-md text-xs">
<div className="rounded-2xl border border-slate-800 bg-slate-900/40 px-4 py-3">
<p className="text-[11px] uppercase tracking-[0.14em] text-slate-400">Serviços Prestados</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-emerald-300">+80</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/40 px-4 py-3">
<p className="text-[11px] uppercase tracking-[0.14em] text-slate-400">Colaboradores</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-emerald-300">+12</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/40 px-4 py-3">
<p className="text-[11px] uppercase tracking-[0.14em] text-slate-400">Horas Trabalhadas</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-emerald-300">+700</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 rounded-3xl bg-emerald-500/10 blur-3xl pointer-events-none"></div>
<div className="relative rounded-3xl border border-slate-800 bg-slate-900/70 shadow-xl overflow-hidden">
<div className="relative h-64 sm:h-80 md:h-[22rem]">
<img alt="Equipe de limpeza profissional" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
<p className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">Compromisso</p>
<p className="mt-1 text-sm text-slate-100">
                    Prestamos um serviço de referência que agrega valor e proporciona bem‑estar e segurança aos nossos clientes.
                  </p>
</div>
<div className="absolute top-4 right-4 flex flex-col items-end gap-2">
<span className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200 bg-slate-950/70 px-3 py-1 rounded-full border border-emerald-400/40">
                    Higiene Garantida
                  </span>
<button className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 text-xs font-semibold rounded-full px-3 py-1.5 shadow-md shadow-emerald-500/30 hover:bg-emerald-400 transition-colors">
<i className="lucide lucide-message-circle text-[14px]"></i>
                    Fale Conosco
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800 bg-slate-950" id="about">
<div className="max-w-6xl mx-auto px-4 lg:px-8 py-12 lg:py-16 grid md:grid-cols-[1.1fr,1fr] gap-10 items-center">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">Quem Somos</h2>
<p className="mt-3 text-sm md:text-base text-slate-300">
              A Kapital Cleaning é uma empresa especializada em soluções completas de limpeza, atuando em residências,
              escritórios, condomínios e espaços comerciais. Trabalhamos com equipas treinadas, produtos certificados
              e processos padronizados para garantir resultados consistentes.
            </p>
<p className="mt-3 text-sm md:text-base text-slate-300">
              O nosso objetivo é criar ambientes limpos, seguros e acolhedores, assegurando que cada detalhe é tratado
              com rigor, pontualidade e discrição.
            </p>
<div className="mt-5 grid grid-cols-2 gap-4 text-xs">
<div className="flex items-start gap-3">
<div className="mt-0.5 h-8 w-8 rounded-xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center">
<i className="lucide lucide-shield-check text-emerald-300 text-[16px]"></i>
</div>
<div>
<p className="font-semibold text-slate-50">Qualidade certificada</p>
<p className="text-slate-400 mt-1">Procedimentos padronizados e checklists rigorosos em cada serviço.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 h-8 w-8 rounded-xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center">
<i className="lucide lucide-users text-emerald-300 text-[16px]"></i>
</div>
<div className="">
<p className="font-semibold text-slate-50">Equipa dedicada</p>
<p className="text-slate-400 mt-1">Profissionais uniformizados, treinados e identificados.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-emerald-500/10 blur-2xl pointer-events-none"></div>
<div className="relative rounded-3xl border border-slate-800 bg-slate-900/70 overflow-hidden">
<img alt="Profissional de limpeza em ação" className="md:h-72 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e1c823a-d2de-488d-9134-17f790abd189_1600w.png"/>
<div className="px-5 py-4 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
<div>
<p className="font-semibold text-slate-50">Experiência em ambientes exigentes</p>
<p className="text-slate-400 mt-1">Escritórios, clínicas, condomínios e espaços industriais.</p>
</div>
<div className="flex flex-col items-end">
<span className="text-[11px] uppercase tracking-[0.16em] text-emerald-300">Desde 2018</span>
<span className="mt-1 text-sm font-semibold tracking-tight text-emerald-300">+80 clientes</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800 bg-slate-950" id="servicos-detalhados">
<div className="max-w-6xl mx-auto px-4 lg:px-8 py-12 lg:py-16 space-y-10">

<div className="rounded-3xl border border-emerald-500/70 bg-gradient-to-r from-emerald-500 to-emerald-400 px-4 py-2 sm:px-8 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
<p className="text-[11px] sm:text-xs font-medium tracking-[0.22em] uppercase text-slate-950 flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/10 border border-emerald-950/20">
<i className="lucide lucide-sparkles text-[13px]"></i>
</span>
              Profissionalismo
            </p>
<span className="hidden sm:inline h-px flex-1 bg-emerald-200/60 mx-3"></span>
<p className="text-[11px] sm:text-xs font-medium tracking-[0.22em] uppercase text-slate-950">Rigor</p>
<span className="hidden sm:inline h-px flex-1 bg-emerald-200/60 mx-3"></span>
<p className="text-[11px] sm:text-xs font-medium tracking-[0.22em] uppercase text-slate-950">Excelência</p>
</div>

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<p className="text-[11px] font-medium tracking-[0.22em] uppercase text-emerald-300">Nossos Serviços</p>
<h2 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">
                Limpeza, desinfecção e manutenção para todos os tipos de edifícios.
              </h2>
</div>
</div>

<div className="grid lg:grid-cols-[1.1fr,1.1fr] gap-6">

<div className="rounded-3xl border border-emerald-500/70 bg-slate-900/60 overflow-hidden">
<div className="bg-emerald-500 px-5 py-3 flex items-center justify-between">
<h3 className="text-sm md:text-base font-semibold tracking-tight text-slate-950">Limpeza geral em edifícios</h3>
<span className="text-[11px] uppercase tracking-[0.18em] text-emerald-950/80 hidden sm:inline">Nossos serviços</span>
</div>
<div className="px-5 py-4 text-xs md:text-sm space-y-3">
<p className="text-slate-200">
                  A nossa equipa realizará uma limpeza completa em todas as áreas do edifício,
                  garantindo um ambiente higienizado e acolhedor para todos os ocupantes.
                </p>
<div className="grid sm:grid-cols-2 gap-3 text-slate-300">
<ul className="space-y-1">
<li className="flex gap-2">
<span className="w-5 h-5 rounded-md border border-emerald-400/70 flex items-center justify-center text-[11px] text-emerald-200">1</span>
<span>Fábricas e unidades produtivas.</span>
</li>
<li className="flex gap-2">
<span className="w-5 h-5 rounded-md border border-emerald-400/70 flex items-center justify-center text-[11px] text-emerald-200">2</span>
<span>Hospitais e clínicas.</span>
</li>
<li className="flex gap-2">
<span className="w-5 h-5 rounded-md border border-emerald-400/70 flex items-center justify-center text-[11px] text-emerald-200">3</span>
<span>Escolas e instituições de ensino.</span>
</li>
</ul>
<ul className="space-y-1">
<li className="flex gap-2">
<span className="w-5 h-5 rounded-md border border-emerald-400/70 flex items-center justify-center text-[11px] text-emerald-200">4</span>
<span>Centros comerciais e lojas.</span>
</li>
<li className="flex gap-2">
<span className="w-5 h-5 rounded-md border border-emerald-400/70 flex items-center justify-center text-[11px] text-emerald-200">5</span>
<span>Supermercados.</span>
</li>
<li className="flex gap-2">
<span className="w-5 h-5 rounded-md border border-emerald-400/70 flex items-center justify-center text-[11px] text-emerald-200">6</span>
<span>Residências e outros tipos de edifícios.</span>
</li>
</ul>
</div>
</div>
</div>

<div className="space-y-6">

<div className="rounded-3xl border border-emerald-500/70 bg-slate-900/60 overflow-hidden">
<div className="bg-emerald-500 px-5 py-3 flex items-center justify-between">
<h3 className="text-sm md:text-base font-semibold tracking-tight text-slate-950">Desinfecção &amp; Desratização</h3>
<span className="text-[11px] uppercase tracking-[0.18em] text-emerald-950/80 hidden sm:inline">Ambientes seguros</span>
</div>
<div className="px-5 py-4 text-xs md:text-sm space-y-3">
<p className="text-slate-200">
                    Visando a eliminação de agentes patogênicos e a prevenção de infestações, promovemos um ambiente
                    seguro e saudável para todos os ocupantes.
                  </p>
<ul className="space-y-2 text-slate-300">
<li className="flex gap-2">
<span className="w-5 h-5 rounded-md border border-emerald-400/70 flex items-center justify-center text-[11px] text-emerald-200">1</span>
<span>Desinfestação e exterminação de animais nocivos em meios públicos.</span>
</li>
<li className="flex gap-2">
<span className="w-5 h-5 rounded-md border border-emerald-400/70 flex items-center justify-center text-[11px] text-emerald-200">2</span>
<span>Desinfestação e exterminação de animais nocivos em meios de transporte.</span>
</li>
<li className="flex gap-2">
<span className="w-5 h-5 rounded-md border border-emerald-400/70 flex items-center justify-center text-[11px] text-emerald-200">3</span>
<span>Desinfestação e exterminação de animais nocivos em residências.</span>
</li>
</ul>
</div>
</div>

<div className="rounded-3xl border border-emerald-500/70 bg-slate-900/60 overflow-hidden">
<div className="bg-emerald-500 px-5 py-3">
<h3 className="text-sm md:text-base font-semibold tracking-tight text-slate-950">Atividades de limpeza</h3>
</div>
<div className="px-5 py-4 text-xs md:text-sm">
<ul className="space-y-2 text-slate-300">
<li className="flex gap-2">
<span className="w-5 h-5 rounded-md border border-emerald-400/70 flex items-center justify-center text-[11px] text-emerald-200">1</span>
<span>Limpeza de lixeiras, ruas, passeios e recintos abertos.</span>
</li>
<li className="flex gap-2">
<span className="w-5 h-5 rounded-md border border-emerald-400/70 flex items-center justify-center text-[11px] text-emerald-200">2</span>
<span>Limpeza de meios de transporte.</span>
</li>
<li className="flex gap-2">
<span className="w-5 h-5 rounded-md border border-emerald-400/70 flex items-center justify-center text-[11px] text-emerald-200">3</span>
<span>Limpeza e manutenção de piscinas e reservatórios de água.</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-6 mt-4">

<div className="rounded-3xl border border-slate-800 bg-slate-900/70 px-5 py-5 flex flex-col gap-4">
<div className="inline-flex items-center gap-2">
<span className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-300">Nosso compromisso</span>
<span className="h-px flex-1 bg-slate-700 hidden sm:block"></span>
</div>
<p className="text-sm text-slate-200">
                A nossa empresa se compromete a oferecer um serviço de alta qualidade, utilizando produtos e
                equipamentos específicos para cada tipo de limpeza, assegurando assim os melhores resultados e a
                satisfação dos nossos clientes.
              </p>
<div className="flex flex-wrap gap-2 text-[11px] text-emerald-200">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/60 px-3 py-1">
<i className="lucide lucide-badge-check text-[14px]"></i>
                  Qualidade consistente
                </span>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/60 px-3 py-1">
<i className="lucide lucide-droplets text-[14px]"></i>
                  Produtos certificados
                </span>
</div>
</div>

<div className="rounded-3xl border border-slate-800 bg-slate-900/70 px-5 py-5 flex flex-col gap-4">
<div className="inline-flex items-center gap-2">
<span className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-300">Nosso diferencial</span>
<span className="h-px flex-1 bg-slate-700 hidden sm:block"></span>
</div>
<h3 className="text-base md:text-lg font-semibold tracking-tight text-slate-50">
                Personalização &amp; flexibilidade
              </h3>
<p className="text-sm text-slate-200">
                Entendemos que cada empresa possui características únicas e estamos dispostos a adaptar os nossos
                serviços de acordo com as suas necessidades, garantindo uma experiência personalizada e
                verdadeiramente satisfatória.
              </p>
<div className="grid sm:grid-cols-2 gap-3 text-[11px] text-slate-300">
<div className="flex items-start gap-2">
<i className="lucide lucide-sliders-vertical text-emerald-400 mt-0.5 text-[15px]"></i>
<span>Planos ajustados ao horário de funcionamento do seu negócio.</span>
</div>
<div className="flex items-start gap-2">
<i className="lucide lucide-briefcase-business text-emerald-400 mt-0.5 text-[15px]"></i>
<span>Equipes dimensionadas conforme a complexidade do edifício.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800 bg-slate-950" id="services">
<div className="max-w-6xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">Serviços</h2>
<p className="mt-2 text-sm md:text-base text-slate-300 max-w-xl">
                Soluções desenhadas para diferentes tipos de espaços, com foco em segurança, eficiência
                e manutenção da imagem do seu património.
              </p>
</div>
<div className="flex gap-3 text-xs">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Residencial
              </span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Comercial
              </span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Empresarial
              </span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<article className="rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden flex flex-col">
<div className="h-40 overflow-hidden">
<img alt="Limpeza geral" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e1c823a-d2de-488d-9134-17f790abd189_800w.png"/>
</div>
<div className="flex-1 flex flex-col px-5 py-4 text-sm">
<h3 className="text-lg font-semibold tracking-tight text-slate-50">Limpeza Geral</h3>
<p className="mt-2 text-slate-300">
                  Limpeza recorrente ou pontual de casas, escritórios e condomínios, garantindo ambientes
                  sempre organizados, higienizados e confortáveis.
                </p>
<ul className="mt-3 space-y-1 text-slate-400 text-xs">
<li>• Limpeza diária, semanal ou personalizada</li>
<li>• Tratamento de pavimentos e superfícies delicadas</li>
<li>• Limpeza pós‑obra e mudança</li>
</ul>
<button className="mt-4 inline-flex items-center justify-center rounded-full border border-emerald-400/70 px-4 py-2 text-xs font-medium text-emerald-100 hover:bg-emerald-500/10 transition-colors">
                  Continuar a ler
                </button>
</div>
</article>

<article className="rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden flex flex-col">
<div className="h-40 overflow-hidden">
<img alt="Desinfestação e higienização" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e1c823a-d2de-488d-9134-17f790abd189_800w.png"/>
</div>
<div className="flex-1 flex flex-col px-5 py-4 text-sm">
<h3 className="text-lg font-semibold tracking-tight text-slate-50">Desinfestação</h3>
<p className="mt-2 text-slate-300">
                  Programas de controlo de pragas e desinfeção, com equipas qualificadas e produtos
                  autorizados, minimizando riscos para pessoas e animais.
                </p>
<ul className="mt-3 space-y-1 text-slate-400 text-xs">
<li>• Desinfestação de roedores e insetos</li>
<li>• Desinfeção de superfícies de contacto</li>
<li>• Intervenções pontuais ou planos contínuos</li>
</ul>
<button className="mt-4 inline-flex items-center justify-center rounded-full border border-emerald-400/70 px-4 py-2 text-xs font-medium text-emerald-100 hover:bg-emerald-500/10 transition-colors">
                  Continuar a ler
                </button>
</div>
</article>

<article className="rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden flex flex-col">
<div className="h-40 overflow-hidden">
<img alt="Serviços de paisagismo" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e1c823a-d2de-488d-9134-17f790abd189_800w.png"/>
</div>
<div className="flex-1 flex flex-col px-5 py-4 text-sm">
<h3 className="text-lg font-semibold tracking-tight text-slate-50">Paisagismo</h3>
<p className="mt-2 text-slate-300">
                  Manutenção e embelezamento de jardins, áreas verdes e espaços exteriores, alinhando
                  estética, sustentabilidade e segurança.
                </p>
<ul className="mt-3 space-y-1 text-slate-400 text-xs">
<li>• Corte e manutenção de relvados</li>
<li>• Poda de árvores, arbustos e cercas vivas</li>
<li>• Limpeza de áreas externas e estacionamentos</li>
</ul>
<button className="mt-4 inline-flex items-center justify-center rounded-full border border-emerald-400/70 px-4 py-2 text-xs font-medium text-emerald-100 hover:bg-emerald-500/10 transition-colors">
                  Continuar a ler
                </button>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-slate-800 bg-slate-950" id="portfolio">
<div className="max-w-6xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">Portfólio</h2>
<p className="mt-2 text-sm md:text-base text-slate-300 max-w-xl">
                Alguns exemplos de espaços transformados pela nossa equipa. Cada projeto é planeado
                com atenção às necessidades específicas de cada cliente.
              </p>
</div>
<div className="flex items-center gap-3 text-xs">
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-emerald-400/70 hover:text-emerald-100 transition-colors">
<i className="lucide lucide-images text-[14px]"></i>
                Ver galeria completa
              </button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5 text-xs">
<div className="rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden">
<img alt="Escritório após limpeza" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="px-4 py-3">
<p className="font-semibold text-slate-50">Escritório corporativo</p>
<p className="mt-1 text-slate-400">Limpeza recorrente de áreas comuns, salas de reunião e open‑space.</p>
</div>
</div>
<div className="rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden">
<img alt="Espaço comercial limpo" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="px-4 py-3">
<p className="font-semibold text-slate-50">Loja e showroom</p>
<p className="mt-1 text-slate-400">Manutenção diária com foco na experiência dos clientes finais.</p>
</div>
</div>
<div className="rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden">
<img alt="Condomínio com jardim cuidado" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="px-4 py-3">
<p className="font-semibold text-slate-50">Condomínio residencial</p>
<p className="mt-1 text-slate-400">Limpeza de áreas comuns, vidros e manutenção de jardins.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800 bg-slate-950">
<div className="max-w-6xl mx-auto px-4 lg:px-8 py-10 lg:py-14 grid md:grid-cols-[1.1fr,1fr] gap-10 items-center">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">Por que escolher a Kapital Cleaning?</h2>
<p className="mt-3 text-sm md:text-base text-slate-300 max-w-xl">
              Unimos tecnologia, processos bem definidos e uma equipa dedicada para entregar limpeza
              profissional com transparência, segurança e previsibilidade.
            </p>
<ul className="mt-5 grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 text-emerald-400 mt-0.5 text-[16px]"></i>
<span>Planos flexíveis de acordo com o tamanho e rotina do seu espaço.</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 text-emerald-400 mt-0.5 text-[16px]"></i>
<span className="">Relatórios e registos de serviços para total controlo das intervenções.</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 text-emerald-400 mt-0.5 text-[16px]"></i>
<span>Produtos e equipamentos adequados a cada tipo de material.</span>
</li>
</ul>
</div>
<div className="rounded-3xl border border-slate-800 bg-slate-900/70 px-6 py-6 text-sm">
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300">Agende uma visita técnica</p>
<p className="mt-2 text-slate-50 font-semibold tracking-tight text-lg">
              Receba um orçamento personalizado para o seu espaço.
            </p>
<form className="mt-4 space-y-3">
<div>
<label className="block text-xs text-slate-300 mb-1">Nome</label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400" placeholder="O seu nome completo" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-slate-300 mb-1">Email</label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400" placeholder="email@exemplo.com" type="email"/>
</div>
<div>
<label className="block text-xs text-slate-300 mb-1">Telefone</label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400" placeholder="+244 ..." type="tel"/>
</div>
</div>
<div>
<label className="block text-xs text-slate-300 mb-1">Tipo de espaço</label>
<select className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400">
<option>Residencial</option>
<option>Escritório</option>
<option>Condomínio</option>
<option>Loja / Espaço comercial</option>
<option>Outro</option>
</select>
</div>
<div>
<label className="block text-xs text-slate-300 mb-1">Mensagem</label>
<textarea className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400" placeholder="Descreva as necessidades do seu espaço" rows="3"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors mt-2" type="submit">
                Enviar Pedido de Orçamento
              </button>
<p className="mt-2 text-[11px] text-slate-500">
                Respondemos normalmente em menos de 24 horas úteis.
              </p>
</form>
</div>
</div>
</section>

<section className="bg-slate-950" id="contact">
<div className="max-w-6xl mx-auto px-4 lg:px-8 py-10 lg:py-12 grid md:grid-cols-[1fr,1.1fr] gap-10">
<div className="space-y-4 text-sm">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">Entre em contacto</h2>
<p className="text-slate-300">
              Pronto para transformar o seu espaço? Fale connosco por telefone, email ou envie uma mensagem.
            </p>
<div className="space-y-3 text-xs">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center">
<i className="lucide lucide-phone text-emerald-300 text-[16px]"></i>
</div>
<div className="">
<p className="text-slate-400">Telefone</p>
<p className="font-semibold text-slate-50" style={{}}>+244 923 342 798</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center">
<i className="lucide lucide-mail text-emerald-300 text-[16px]"></i>
</div>
<div className="">
<p className="text-slate-400">Email</p>
<p className="text-slate-50 font-semibold">contato@kapitalcleaning.com</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center">
<i className="lucide lucide-map-pin text-emerald-300 text-[16px]"></i>
</div>
<div>
<p className="text-slate-400">Localização</p>
<p className="text-slate-50 font-semibold">Luanda, Angola</p>
</div>
</div>
</div>
</div>
<div className="rounded-3xl border border-slate-800 bg-slate-900/70 px-6 py-6 text-sm">
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300">Mensagem rápida</p>
<p className="mt-2 text-slate-50 font-semibold tracking-tight text-lg">
              Envie uma mensagem directa à nossa equipa.
            </p>
<form className="mt-4 space-y-3">
<div>
<label className="block text-xs text-slate-300 mb-1">Nome</label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400" placeholder="O seu nome" type="text"/>
</div>
<div>
<label className="block text-xs text-slate-300 mb-1">Email</label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400" placeholder="email@exemplo.com" type="email"/>
</div>
<div>
<label className="block text-xs text-slate-300 mb-1">Mensagem</label>
<textarea className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400" placeholder="Como podemos ajudar?" rows="3"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors mt-2" type="submit">
                Enviar mensagem
              </button>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800 bg-slate-950">
<div className="max-w-6xl mx-auto px-4 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center">
<span className="text-[11px] font-semibold tracking-tight text-slate-950">K</span>
</div>
<p>© <span className="font-medium text-slate-300">Kapital Cleaning</span> — Todos os direitos reservados.</p>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-emerald-200" href="#">Política de Privacidade</a>
<a className="hover:text-emerald-200" href="#">Termos de Serviço</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
