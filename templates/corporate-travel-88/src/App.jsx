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



      // Util: current year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && lucide.createIcons) {
          lucide.createIcons();
        }
      });

      // Generic Accordion (Serviços)
      (function () {
        const buttons = document.querySelectorAll('[data-acc-btn]');
        buttons.forEach((btn) => {
          btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            const panel = btn.parentElement.querySelector('[data-acc-panel]');
            const chevron = btn.querySelector('[data-acc-chevron]');
            btn.setAttribute('aria-expanded', !expanded);
            if (panel) panel.hidden = expanded;
            if (chevron) chevron.style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';
          });
        });
      })();

      // FAQ Accordion
      (function () {
        const faqBtns = document.querySelectorAll('[data-faq-btn]');
        faqBtns.forEach((btn) => {
          btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            const chevron = btn.querySelector('[data-faq-chevron]');
            const panelId = btn.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);
            btn.setAttribute('aria-expanded', !expanded);
            if (panel) panel.hidden = expanded;
            if (chevron) chevron.style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';
          });
        });
      })();

      // Patch Depoimentos markup if necessary (defensive fix for malformed third card)
      (function () {
        const sections = Array.from(document.querySelectorAll('section'));
        const depoSection = sections.find(sec => {
          const h3 = sec.querySelector('h3');
          return h3 && h3.textContent.trim().includes('O que nossos clientes dizem sobre nós');
        });
        if (!depoSection) return;

        const grid = depoSection.querySelector('.grid.grid-cols-1.md\\:grid-cols-3');
        if (!grid) return;

        const hasMalformed = grid.innerHTML.includes('<article class="          <article');
        if (hasMalformed || grid.querySelectorAll('article').length < 3) {
          grid.innerHTML = `
            <article class="rounded-2xl border border-slate-200/70 bg-white p-6">
              <div class="text-[18px]" style="color:#D38E17">★★★★★</div>
              <p class="mt-3 text-slate-700">
                "Escritório sempre atento às necessidades dos clientes, e muito proativo nas resoluções de toda e qualquer situação".
              </p>
              <div class="mt-4 text-[15px] font-semibold" style="color:#2d251c">— Christian Bittencourt</div>
            </article>
            <article class="rounded-2xl border border-slate-200/70 bg-white p-6">
              <div class="text-[18px]" style="color:#D38E17">★★★★★</div>
              <p class="mt-3 text-slate-700">
                "Já fiz várias viagens com a 24H. Sempre excelentes no atendimento, realizaram nossos sonhos de viagens e passeios com conforto e tranquilidade".
              </p>
              <div class="mt-4 text-[15px] font-semibold" style="color:#2d251c">— Renato Saffi</div>
            </article>
            <article class="rounded-2xl border border-slate-200/70 bg-white p-6">
              <div class="text-[18px]" style="color:#D38E17">★★★★★</div>
              <p class="mt-3 text-slate-700">
                "A parceria com a 24H trouxe agilidade e redução real de custos no nosso dia a dia. Atendimento rápido e soluções assertivas."
              </p>
              <div class="mt-4 text-[15px] font-semibold" style="color:#2d251c">— Amanda Oliveira</div>
            </article>
          `;
          if (window.lucide && lucide.createIcons) lucide.createIcons();
        }
      })();
    
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
      <charset="utf-8">
<title>24H Escritório de Viagens – Viagens Corporativas</title>
<meta content="width=device-width, initial-scale=1" name="viewport"/>

<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>



<header className="w-full">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex h-20 items-center justify-between border-b border-slate-200/70">

<a className="group inline-flex items-center gap-2.5" href="#">
<span className="relative inline-flex h-8 w-8 items-center justify-center">

<span className="absolute inset-0 rounded-md" style={{background: '#2d251c'}}></span>
<span className="relative flex h-8 w-8 items-center justify-center rounded-[6px] bg-white">
<span className="h-[14px] w-[14px] rounded-sm" style={{background: '#DDBE73'}}></span>
</span>
</span>
<span className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.045em]" style={{color: '#2d251c'}}>24H Escritório de Viagens</span>
</a>

<nav className="hidden lg:flex items-center gap-8 xl:gap-10">
<button className="inline-flex items-center gap-1.5 text-[15px] font-semibold uppercase tracking-[0.085em]" style={{color: '#2d251c'}}>
              Início
              <i className="h-4 w-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="inline-flex items-center gap-1.5 text-[15px] font-semibold uppercase tracking-[0.085em]" style={{color: '#2d251c'}}>
              Sobre
              <i className="h-4 w-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="inline-flex items-center gap-1.5 text-[15px] font-semibold uppercase tracking-[0.085em]" style={{color: '#2d251c'}}>
              Serviços
              <i className="h-4 w-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="inline-flex items-center gap-1.5 text-[15px] font-semibold uppercase tracking-[0.085em]" style={{color: '#2d251c'}}>
              Projetos
              <i className="h-4 w-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="inline-flex items-center gap-1.5 text-[15px] font-semibold uppercase tracking-[0.085em]" style={{color: '#2d251c'}}>
              Blog
              <i className="h-4 w-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="inline-flex items-center gap-1.5 text-[15px] font-semibold uppercase tracking-[0.085em]" style={{color: '#2d251c'}}>
              Página
              <i className="h-4 w-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="inline-flex items-center gap-1.5 text-[15px] font-semibold uppercase tracking-[0.085em]" style={{color: '#2d251c'}}>
              Contato
              <i className="h-4 w-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</nav>

<div className="hidden sm:flex">
<a className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white ring-1 ring-transparent transition-all hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white" href="#contato" style={{background: '#AE2724'}}>
<span className="text-sm font-semibold">Solicitar Proposta</span>
<i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<button className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100">
<i className="h-5 w-5 text-slate-700" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<section className="relative py-10 sm:py-12 lg:py-14">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="relative overflow-hidden rounded-[40px] sm:rounded-[44px] lg:rounded-[50px] px-6 sm:px-10 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24" style={{background: '#2d251c'}}>

<div className="pointer-events-none absolute inset-0">
<div className="absolute -left-16 -top-20 h-64 w-64 rounded-full opacity-20 blur-2xl" style={{background: '#DDBE73'}}></div>
<div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full opacity-10 blur-3xl" style={{background: '#DDBE73'}}></div>

<div className="absolute right-6 top-6 hidden md:block">
<svg className="opacity-40" fill="none" height="220" viewbox="0 0 220 220" width="220">
<circle cx="110" cy="110" r="100" stroke="white" stroke-opacity="0.35" strokeWidth="2"></circle>
<circle cx="110" cy="110" r="70" stroke="white" stroke-opacity="0.25" strokeWidth="2"></circle>
<circle cx="110" cy="110" r="40" stroke="white" stroke-opacity="0.18" strokeWidth="2"></circle>
</svg>
</div>
</div>

<div className="relative max-w-3xl">
<h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
              Você cuida do seu negócio<br className="hidden md:block"/>e nós das suas viagens
            </h1>
<p className="mt-6 text-white/90 text-[18px] leading-7">
              Com um atendimento próximo e soluções personalizadas, nossa gestão completa de viagens corporativas ajuda sua empresa a economizar tempo, reduzir custos e aumentar a eficiência.
            </p>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">

<a className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white transition-colors hover:bg-white/10 outline outline-1 outline-white/90 focus-visible:outline-2 focus-visible:outline-offset-2" href="#contato">
<span className="text-sm font-semibold">SOLICITE UMA PROPOSTA PERSONALIZADA!</span>
<i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>

<a className="group inline-flex items-center gap-3 text-white/95 hover:text-white" href="#sobre">
<span className="relative inline-flex h-[55px] w-[55px] items-center justify-center">
<span className="absolute inset-0 rounded-full bg-white/10"></span>
<span className="relative inline-flex h-[39px] w-[39px] items-center justify-center rounded-full bg-white/90 text-[color:#2d251c] group-hover:bg-white">
<i className="h-4.5 w-4.5" data-lucide="play" strokeWidth="1.5"></i>
</span>
</span>
<span className="text-[18px] font-semibold">Conheça a 24H</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-14 lg:py-16">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">

<article className="rounded-2xl border border-slate-200/50 bg-white p-8 shadow-sm transition-colors hover:border-slate-300/70">
<div className="relative mb-6">
<div className="h-24 w-24 rounded-full" style={{background: '#DDBE73'}}></div>
<div className="absolute left-3 top-3 inline-flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white/15">
<i className="h-7 w-7 text-white" data-lucide="award" strokeWidth="1.5"></i>
</div>
</div>
<h3 className="text-[22px] font-semibold tracking-tight" style={{color: '#2d251c'}}>+20 anos de experiência</h3>
<p className="mt-3 text-[16px] leading-7 text-slate-500">Atuação sólida no mercado de viagens corporativas.</p>
</article>

<article className="rounded-2xl border border-slate-200/50 bg-white p-8 shadow-sm transition-colors hover:border-slate-300/70">
<div className="relative mb-6">
<div className="h-24 w-24 rounded-full" style={{background: '#DDBE73'}}></div>
<div className="absolute left-3 top-3 inline-flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white/15">
<i className="h-7 w-7 text-white" data-lucide="headset" strokeWidth="1.5"></i>
</div>
</div>
<h3 className="text-[22px] font-semibold tracking-tight" style={{color: '#2d251c'}}>Suporte 24/7</h3>
<p className="mt-3 text-[16px] leading-7 text-slate-500">Atendimento operacional permanente.</p>
</article>

<article className="rounded-2xl border border-slate-200/50 bg-white p-8 shadow-sm transition-colors hover:border-slate-300/70">
<div className="relative mb-6">
<div className="h-24 w-24 rounded-full" style={{background: '#DDBE73'}}></div>
<div className="absolute left-3 top-3 inline-flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white/15">
<i className="h-7 w-7 text-white" data-lucide="sliders-horizontal" strokeWidth="1.5"></i>
</div>
</div>
<h3 className="text-[22px] font-semibold tracking-tight" style={{color: '#2d251c'}}>100% gestão personalizada</h3>
<p className="mt-3 text-[16px] leading-7 text-slate-500">Soluções sob medida para o seu negócio.</p>
</article>

<article className="rounded-2xl border border-slate-200/50 bg-white p-8 shadow-sm transition-colors hover:border-slate-300/70">
<div className="relative mb-6">
<div className="h-24 w-24 rounded-full" style={{background: '#DDBE73'}}></div>
<div className="absolute left-3 top-3 inline-flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white/15">
<i className="h-7 w-7 text-white" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
</div>
<h3 className="text-[22px] font-semibold tracking-tight" style={{color: '#2d251c'}}>+1000 operações</h3>
<p className="mt-3 text-[16px] leading-7 text-slate-500">Projetos executados com sucesso.</p>
</article>
</div>
</div>
</section>

<section className="py-14 sm:py-16 lg:py-20">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

<div className="relative">

<div className="rounded-2xl bg-slate-200 w-full h-[520px] sm:h-[560px]"></div>

<div className="absolute left-3 top-5 right-3 bottom-5 rounded-2xl border" style={{borderColor: '#DDBE73'}}></div>

<div className="absolute -top-6 left-8 w-[280px] rounded-2xl p-5 text-white" style={{background: '#AE2724'}}>
<div className="flex items-center gap-4">
<div className="text-[46px] leading-none font-semibold">+20</div>
<div className="leading-tight text-[18px] font-semibold">
                  Anos de<br/>experiência
                </div>
</div>
</div>


</div>

<div className="flex flex-col">

<div className="mb-4 inline-flex items-center gap-2">
<div className="inline-flex h-5 w-5 items-center justify-center">
<svg fill="none" height="20" viewbox="0 0 20 20" width="20">
<path d="M3 7h14M5 4h10" stroke="#2d251c" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-[14px] font-semibold uppercase tracking-[0.09em]" style={{color: '#2d251c'}}>Descomplique sua viagem corporativa</span>
</div>
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.15]" style={{color: '#0E1113'}}>
              com a <span className="text-[color:#2d251c]">24H Escritório de Viagens</span>
</h2>
<p className="mt-6 max-w-xl text-[16px] leading-7 text-slate-600">
              Enquanto sua empresa pesquisa passagens, reserva hotéis, negocia tarifas e resolve imprevistos, o core business fica em segundo plano. Nós assumimos 100% da gestão de suas viagens corporativas — do destino aos voos, acomodações, atividades e transporte — com rede de parceiros que gera economia, segurança e personalização.
            </p>

<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3 rounded-xl border border-slate-200/70 p-4">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="timer" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] font-semibold" style={{color: '#2d251c'}}>Sem tempo para planejar?</div>
<p className="text-[14px] text-slate-600 mt-1">Pesquisar voos, hotéis, negociar tarifas e gerenciar aprovações vira um fardo sem otimização.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-xl border border-slate-200/70 p-4">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="file-text" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] font-semibold" style={{color: '#2d251c'}}>Burocracia em excesso?</div>
<p className="text-[14px] text-slate-600 mt-1">Lentidão em reservas e aprovações compromete prazos e oportunidades.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-xl border border-slate-200/70 p-4">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="wallet" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] font-semibold" style={{color: '#2d251c'}}>Gastos fora do controle?</div>
<p className="text-[14px] text-slate-600 mt-1">Diferenças pequenas acumulam e impactam o caixa da empresa.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-xl border border-slate-200/70 p-4">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="focus" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] font-semibold" style={{color: '#2d251c'}}>Desvio de foco?</div>
<p className="text-[14px] text-slate-600 mt-1">Cada minuto com gestão de viagens é um a menos no crescimento do negócio.</p>
</div>
</div>
</div>

<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
<a className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[color:#2d251c] outline outline-1" href="#contato" style={{outlineColor: '#AE2724'}}>
<span className="text-sm font-semibold">SOLICITE AGORA UMA PROPOSTA PERSONALIZADA!</span>
<i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<div className="flex items-center gap-4">
<span className="inline-flex h-[55px] w-[55px] items-center justify-center rounded-full" style={{background: '#AE2724'}}>
<i className="h-5 w-5 text-white" data-lucide="phone" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] leading-6 text-slate-600">Precisa de ajuda?</div>
<div className="text-[18px] font-semibold tracking-tight" style={{color: '#2d251c'}}>(51) 3516-0098</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-14 lg:py-16 border-t border-slate-200/70">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-center justify-between flex-wrap gap-6">
<h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight" style={{color: '#2d251c'}}>Nossos clientes</h3>
</div>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="h-16 rounded-xl border border-slate-200/70 bg-white"></div>
<div className="h-16 rounded-xl border border-slate-200/70 bg-white"></div>
<div className="h-16 rounded-xl border border-slate-200/70 bg-white"></div>
<div className="h-16 rounded-xl border border-slate-200/70 bg-white"></div>
<div className="h-16 rounded-xl border border-slate-200/70 bg-white"></div>
<div className="h-16 rounded-xl border border-slate-200/70 bg-white"></div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 lg:py-18" id="servicos">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2">
<i className="h-5 w-5" data-lucide="briefcase" strokeWidth="1.5" style={{color: '#2d251c'}}></i>
<span className="text-[14px] font-semibold uppercase tracking-[0.09em]" style={{color: '#2d251c'}}>Serviços disponíveis</span>
</div>
<h2 className="mt-3 text-4xl font-semibold tracking-tight" style={{color: '#0E1113'}}>Tudo que sua empresa precisa</h2>
<p className="mt-3 text-slate-600">Gestão completa com soluções sob medida para cada etapa da viagem.</p>
</div>
<div className="mt-8 rounded-2xl border border-slate-200/70 bg-white p-6 sm:p-8">

<div className="space-y-3" id="servicos-accordion">

<div className="rounded-xl border border-slate-200/70">
<button aria-expanded="true" className="w-full flex items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-4 hover:bg-slate-50/60 transition-colors" data-acc-btn="" type="button">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="plane" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] font-semibold tracking-tight" style={{color: '#2d251c'}}>Aéreo &amp; Transporte</div>
<p className="text-[13px] text-slate-600">Passagens, trens e mobilidade terrestre</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-[12px] font-semibold" style={{background: '#DDBE73', color: '#2d251c'}}>4</span>
<i className="h-5 w-5 text-slate-600 transition-transform duration-200" data-acc-chevron="" data-lucide="chevron-down" strokeWidth="1.5" style={{transform: 'rotate(180deg)'}}></i>
</div>
</button>
<div className="px-4 pb-4 sm:px-5 sm:pb-5" data-acc-panel="">
<div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<p className="text-[15px] text-slate-700">Contratação e emissão de passagens aéreas: bilhetes nacionais e internacionais com as melhores taxas e tarifas.</p>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<p className="text-[15px] text-slate-700">Ingressos e tickets de trem: acesso e mobilidade eficientes.</p>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<p className="text-[15px] text-slate-700">Locação de veículos: opções variadas para sua mobilidade.</p>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<p className="text-[15px] text-slate-700">Veículos executivos com motorista: conforto e pontualidade.</p>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200/70">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-4 hover:bg-slate-50/60 transition-colors" data-acc-btn="" type="button">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="hotel" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] font-semibold tracking-tight" style={{color: '#2d251c'}}>Hospedagem &amp; Aeroporto</div>
<p className="text-[13px] text-slate-600">Conforto na estadia e no terminal</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-[12px] font-semibold" style={{background: '#DDBE73', color: '#2d251c'}}>2</span>
<i className="h-5 w-5 text-slate-600 transition-transform duration-200" data-acc-chevron="" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</button>
<div className="px-4 pb-4 sm:px-5 sm:pb-5" data-acc-panel="" hidden="">
<div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<p className="text-[15px] text-slate-700">Reserva de hotéis e acomodações: hospedagens selecionadas de acordo com suas necessidades.</p>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<p className="text-[15px] text-slate-700">Sala VIP: conforto e exclusividade em aeroportos.</p>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200/70">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-4 hover:bg-slate-50/60 transition-colors" data-acc-btn="" type="button">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="shield-check" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] font-semibold tracking-tight" style={{color: '#2d251c'}}>Documentos &amp; Segurança</div>
<p className="text-[13px] text-slate-600">Proteção e agilidade</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-[12px] font-semibold" style={{background: '#DDBE73', color: '#2d251c'}}>2</span>
<i className="h-5 w-5 text-slate-600 transition-transform duration-200" data-acc-chevron="" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</button>
<div className="px-4 pb-4 sm:px-5 sm:pb-5" data-acc-panel="" hidden="">
<div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<p className="text-[15px] text-slate-700">Seguro e assistência de viagens: proteção e suporte em qualquer situação.</p>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<p className="text-[15px] text-slate-700">Encaminhamento de vistos: agilidade em processos burocráticos.</p>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200/70">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-4 hover:bg-slate-50/60 transition-colors" data-acc-btn="" type="button">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="wallet" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] font-semibold tracking-tight" style={{color: '#2d251c'}}>Financeiro &amp; Conectividade</div>
<p className="text-[13px] text-slate-600">Pagamentos, câmbio e internet</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-[12px] font-semibold" style={{background: '#DDBE73', color: '#2d251c'}}>3</span>
<i className="h-5 w-5 text-slate-600 transition-transform duration-200" data-acc-chevron="" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</button>
<div className="px-4 pb-4 sm:px-5 sm:pb-5" data-acc-panel="" hidden="">
<div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<p className="text-[15px] text-slate-700">Câmbio: facilidade para transações financeiras internacionais.</p>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<p className="text-[15px] text-slate-700">Cartão de débito internacional: soluções financeiras para suas viagens.</p>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<p className="text-[15px] text-slate-700">e-Sim e chip internacional: conectividade global sem preocupações.</p>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200/70">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-4 hover:bg-slate-50/60 transition-colors" data-acc-btn="" type="button">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="gift" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] font-semibold tracking-tight" style={{color: '#2d251c'}}>Incentivo &amp; Serviços especiais</div>
<p className="text-[13px] text-slate-600">Experiências e atendimento premium</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-[12px] font-semibold" style={{background: '#DDBE73', color: '#2d251c'}}>2</span>
<i className="h-5 w-5 text-slate-600 transition-transform duration-200" data-acc-chevron="" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</button>
<div className="px-4 pb-4 sm:px-5 sm:pb-5" data-acc-panel="" hidden="">
<div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
<div className="flex items-start gap-3 sm:col-span-2">
<i className="h-5 w-5 mt-0.5" data-lucide="check" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<p className="text-[15px] text-slate-700">Viagens de incentivo: programas de recompensa para motivar equipes e premiar clientes.</p>
</div>
<div className="flex items-start gap-3 sm:col-span-2">
<i className="h-5 w-5 mt-0.5" data-lucide="check" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<p className="text-[15px] text-slate-700">Guias privativos e tradutores, transporte rodoviário, atendimento personalizado para clientes VIP, programação turística paralela, salas para eventos e A&amp;B, experiências Wine Tour.</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 border-t border-slate-200/70 pt-6 flex items-center justify-between gap-4">
<div className="text-[15px] font-semibold" style={{color: '#2d251c'}}>PERSONALIZE DO SEU JEITO!</div>
<a className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white" href="#contato" style={{background: '#AE2724'}}>
<span className="text-sm font-semibold">Solicitar Proposta</span>
<i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 lg:py-20 border-t border-slate-200/70" style={{background: '#f5f2ed'}}>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl px-6 sm:px-10 md:px-12 py-10" style={{background: '#f5f2ed'}}>
<div className="absolute right-0 top-0 h-40 w-40 rounded-full blur-2xl opacity-40" style={{background: '#DDBE73'}}></div>
<div className="max-w-3xl relative">
<div className="inline-flex items-center gap-2">
<i className="h-5 w-5" data-lucide="settings" strokeWidth="1.5" style={{color: '#2d251c'}}></i>
<span className="text-[14px] font-semibold uppercase tracking-[0.09em]" style={{color: '#2d251c'}}>Self Booking</span>
</div>
<h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight" style={{color: '#0E1113'}}>Gerencie sua viagem corporativa com nosso sistema Self Booking</h3>
<p className="mt-4 text-[16px] text-slate-700">
              Desenvolvido para simplificar planejamento e aprovação, com experiência intuitiva e completa, garantindo que suas políticas de viagem sejam respeitadas. Pesquise e reserve voos, monitore o status das viagens e acesse relatórios detalhados para uma gestão estratégica.
            </p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check-circle" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<span className="text-[15px] text-slate-800">Interface para prestação de contas automatizada</span>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check-circle" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<span className="text-[15px] text-slate-800">Relatórios de Business Intelligence em tempo real</span>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check-circle" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<span className="text-[15px] text-slate-800">Análises de economicidade por centro de custo</span>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check-circle" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<span className="text-[15px] text-slate-800">Monitoramento de rotas e frequências</span>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check-circle" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<span className="text-[15px] text-slate-800">Acompanhamento operacional detalhado</span>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5" data-lucide="check-circle" strokeWidth="1.5" style={{color: '#AE2724'}}></i>
<span className="text-[15px] text-slate-800">Sistema de controle de compliance</span>
</div>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white" href="#contato" style={{background: '#AE2724'}}>
<span className="text-sm font-semibold">SOLICITE UMA PROPOSTA PERSONALIZADA!</span>
<i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 lg:py-20">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-8">
<div className="inline-flex items-center gap-2">
<i className="h-5 w-5" data-lucide="sparkles" strokeWidth="1.5" style={{color: '#2d251c'}}></i>
<span className="text-[14px] font-semibold uppercase tracking-[0.09em]" style={{color: '#2d251c'}}>Por que escolher a 24H?</span>
</div>
<h3 className="mt-3 text-4xl font-semibold tracking-tight" style={{color: '#0E1113'}}>Excelência e controle de ponta a ponta</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

<article className="rounded-2xl border border-slate-200/60 bg-white p-6">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h4 className="mt-4 text-[18px] font-semibold" style={{color: '#2d251c'}}>Disponibilidade 24H</h4>
<p className="mt-1.5 text-[15px] text-slate-600">Suporte técnico permanente com equipe própria.</p>
</article>
<article className="rounded-2xl border border-slate-200/60 bg-white p-6">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="handshake" strokeWidth="1.5"></i>
</div>
<h4 className="mt-4 text-[18px] font-semibold" style={{color: '#2d251c'}}>Negociação de tarifas</h4>
<p className="mt-1.5 text-[15px] text-slate-600">Condições diferenciadas via nossa rede de fornecedores.</p>
</article>
<article className="rounded-2xl border border-slate-200/60 bg-white p-6">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<h4 className="mt-4 text-[18px] font-semibold" style={{color: '#2d251c'}}>Expertise técnica</h4>
<p className="mt-1.5 text-[15px] text-slate-600">Equipe com formação superior e +20 anos de experiência.</p>
</article>
<article className="rounded-2xl border border-slate-200/60 bg-white p-6">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="user-cog" strokeWidth="1.5"></i>
</div>
<h4 className="mt-4 text-[18px] font-semibold" style={{color: '#2d251c'}}>Gestão personalizada</h4>
<p className="mt-1.5 text-[15px] text-slate-600">Atendimento dedicado com profissional no seu perfil.</p>
</article>
<article className="rounded-2xl border border-slate-200/60 bg-white p-6">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="globe-2" strokeWidth="1.5"></i>
</div>
<h4 className="mt-4 text-[18px] font-semibold" style={{color: '#2d251c'}}>Rede consolidada</h4>
<p className="mt-1.5 text-[15px] text-slate-600">Parcerias nacionais e internacionais estratégicas.</p>
</article>
<article className="rounded-2xl border border-slate-200/60 bg-white p-6">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<h4 className="mt-4 text-[18px] font-semibold" style={{color: '#2d251c'}}>Controle financeiro</h4>
<p className="mt-1.5 text-[15px] text-slate-600">Relatórios gerenciais por centros de custo.</p>
</article>
</div>
</div>
</section>

<section className="py-14 sm:py-16 lg:py-20 border-t border-slate-200/70" id="sobre">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
<div>
<div className="inline-flex items-center gap-2">
<i className="h-5 w-5" data-lucide="building-2" strokeWidth="1.5" style={{color: '#2d251c'}}></i>
<span className="text-[14px] font-semibold uppercase tracking-[0.09em]" style={{color: '#2d251c'}}>SOBRE A 24H</span>
</div>
<h3 className="mt-3 text-4xl font-semibold tracking-tight" style={{color: '#0E1113'}}>Mais de duas décadas especializados em gestão de viagens</h3>
<p className="mt-4 text-[16px] text-slate-700">
              A 24H Escritório de Viagens é uma agência especializada em viagens corporativas, de lazer, turismo de incentivo e eventos. Com mais de 20 anos de experiência, atuamos com excelência na gestão de viagens nacionais e internacionais, oferecendo soluções completas e personalizadas para empresas, famílias e clientes individuais.
            </p>
<p className="mt-3 text-[16px] text-slate-700">
              Cuidamos de todas as etapas da viagem: cotação, emissão de passagens, hotéis, traslados, câmbio, seguros, vistos, locação de veículos, roteiros turísticos e ingressos. Trabalhamos com ampla rede de fornecedores nos setores aéreo, hoteleiro e de turismo, garantindo agilidade, economia e segurança.
            </p>
<p className="mt-3 text-[16px] text-slate-700">
              Nosso compromisso é oferecer uma experiência tranquila, eficiente e sem imprevistos, com suporte disponível 24 horas por dia, 7 dias por semana.
            </p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white" href="#contato" style={{background: '#AE2724'}}>
<span className="text-sm font-semibold">FALE COM UM ESPECIALISTA!</span>
<i className="h-4 w-4" data-lucide="message-circle" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="rounded-2xl overflow-hidden border border-slate-200/70">
<img alt="Equipe 24H" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 lg:py-20">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-8">
<div className="inline-flex items-center gap-2">
<i className="h-5 w-5" data-lucide="messages-square" strokeWidth="1.5" style={{color: '#2d251c'}}></i>
<span className="text-[14px] font-semibold uppercase tracking-[0.09em]" style={{color: '#2d251c'}}>DEPOIMENTOS</span>
</div>
<h3 className="mt-3 text-4xl font-semibold tracking-tight" style={{color: '#0E1113'}}>O que nossos clientes dizem sobre nós</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
<article className="rounded-2xl border border-slate-200/70 bg-white p-6">
<div className="text-[18px]" style={{color: '#D38E17'}}>★★★★★</div>
<p className="mt-3 text-slate-700">
              "Escritório sempre atento às necessidades dos clientes, e muito proativo nas resoluções de toda e qualquer situação".
            </p>
<div className="mt-4 text-[15px] font-semibold" style={{color: '#2d251c'}}>— Christian Bittencourt</div>
</article>
<article className="rounded-2xl border border-slate-200/70 bg-white p-6">
<div className="text-[18px]" style={{color: '#D38E17'}}>★★★★★</div>
<p className="mt-3 text-slate-700">
              "Já fiz várias viagens com a 24H. Sempre excelentes no atendimento, realizaram nossos sonhos de viagens e passeios com conforto e tranquilidade".
            </p>
<div className="mt-4 text-[15px] font-semibold" style={{color: '#2d251c'}}>— Renato Saffi</div>
</article>
<article 70="" bg-white="" border="" border-slate-200="" className="&lt;article class=" p-6"="" rounded-2xl="">
<div className="text-[18px]" style={{color: '#D38E17'}}>★★★★★</div>
<p className="mt-3 text-slate-700">
              "A parceria com a 24H trouxe agilidade e redução real de custos no nosso dia a dia. Atendimento rápido e soluções assertivas."
            </p>
<div className="mt-4 text-[15px] font-semibold" style={{color: '#2d251c'}}>— Amanda Oliveira</div>
</article>
</div>
</div>
</section>

<section className="py-10">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl p-8 sm:p-10" style={{background: '#2d251c'}}>
<div className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full blur-3xl opacity-20" style={{background: '#DDBE73'}}></div>
<div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<h4 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">Pronto para otimizar suas viagens corporativas?</h4>
<p className="mt-2 text-white/85">Fale com nossa equipe e receba um plano personalizado para a sua empresa.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white shadow-sm ring-1 ring-white/10 hover:bg-white/10 transition" href="#contato">
<span className="text-sm font-semibold">Solicitar Proposta</span>
<i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-24 border-t border-slate-200/70" id="contato" style={{background: '#f5f2ed'}}>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-8">
<div className="inline-flex items-center gap-2">
<i className="h-5 w-5" data-lucide="mail" strokeWidth="1.5" style={{color: '#2d251c'}}></i>
<span className="text-[14px] font-semibold uppercase tracking-[0.09em]" style={{color: '#2d251c'}}>Contato</span>
</div>
<h3 className="mt-3 text-4xl font-semibold tracking-tight" style={{color: '#0E1113'}}>Solicite uma proposta personalizada</h3>
<p className="mt-2 text-slate-700">Preencha o formulário e nossa equipe retornará rapidamente.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2">
<form aria-label="Formulário de contato" className="rounded-2xl border border-slate-200/70 bg-white p-6 sm:p-8 shadow-sm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="empresa">Empresa</label>
<div className="mt-1 relative">
<input autocomplete="organization" className="w-full rounded-xl border-slate-300 focus:border-[#AE2724] focus:ring-[#AE2724]" id="empresa" name="empresa" placeholder="Nome da empresa" required="" type="text"/>
<i className="absolute right-3 top-3.5 h-4 w-4 text-slate-400" data-lucide="building-2"></i>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="nome">Seu nome</label>
<div className="mt-1 relative">
<input autocomplete="name" className="w-full rounded-xl border-slate-300 focus:border-[#AE2724] focus:ring-[#AE2724]" id="nome" name="nome" placeholder="Seu nome completo" required="" type="text"/>
<i className="absolute right-3 top-3.5 h-4 w-4 text-slate-400" data-lucide="user"></i>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="email">E-mail</label>
<div className="mt-1 relative">
<input autocomplete="email" className="w-full rounded-xl border-slate-300 focus:border-[#AE2724] focus:ring-[#AE2724]" id="email" name="email" placeholder="seuemail@empresa.com" required="" type="email"/>
<i className="absolute right-3 top-3.5 h-4 w-4 text-slate-400" data-lucide="at-sign"></i>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="telefone">Telefone</label>
<div className="mt-1 relative">
<input autocomplete="tel" className="w-full rounded-xl border-slate-300 focus:border-[#AE2724] focus:ring-[#AE2724]" id="telefone" name="telefone" placeholder="(00) 00000-0000" type="tel"/>
<i className="absolute right-3 top-3.5 h-4 w-4 text-slate-400" data-lucide="phone"></i>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="assunto">Assunto</label>
<div className="mt-1">
<select className="w-full rounded-xl border-slate-300 focus:border-[#AE2724] focus:ring-[#AE2724]" id="assunto" name="assunto">
<option>Proposta corporativa</option>
<option>Suporte operacional</option>
<option>Parcerias</option>
<option>Outros</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="pax">Volume mensal estimado</label>
<div className="mt-1">
<select className="w-full rounded-xl border-slate-300 focus:border-[#AE2724] focus:ring-[#AE2724]" id="pax" name="pax">
<option>Até 10 viagens</option>
<option>11–30 viagens</option>
<option>31–80 viagens</option>
<option>80+ viagens</option>
</select>
</div>
</div>
</div>
<fieldset className="mt-6">
<legend className="text-sm font-medium text-slate-700">Interesses</legend>
<div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
<label className="inline-flex items-center gap-2">
<input className="rounded text-[#AE2724] focus:ring-[#AE2724]" name="interesses" type="checkbox" value="aereo"/>
<span className="text-sm text-slate-700">Passagens aéreas</span>
</label>
<label className="inline-flex items-center gap-2">
<input className="rounded text-[#AE2724] focus:ring-[#AE2724]" name="interesses" type="checkbox" value="hospedagem"/>
<span className="text-sm text-slate-700">Hospedagem</span>
</label>
<label className="inline-flex items-center gap-2">
<input className="rounded text-[#AE2724] focus:ring-[#AE2724]" name="interesses" type="checkbox" value="transporte"/>
<span className="text-sm text-slate-700">Transporte terrestre</span>
</label>
<label className="inline-flex items-center gap-2">
<input className="rounded text-[#AE2724] focus:ring-[#AE2724]" name="interesses" type="checkbox" value="relatorios"/>
<span className="text-sm text-slate-700">Relatórios/BI</span>
</label>
<label className="inline-flex items-center gap-2">
<input className="rounded text-[#AE2724] focus:ring-[#AE2724]" name="interesses" type="checkbox" value="incentivo"/>
<span className="text-sm text-slate-700">Viagens de incentivo</span>
</label>
<label className="inline-flex items-center gap-2">
<input className="rounded text-[#AE2724] focus:ring-[#AE2724]" name="interesses" type="checkbox" value="outros"/>
<span className="text-sm text-slate-700">Outros</span>
</label>
</div>
</fieldset>
<div className="mt-6">
<label className="block text-sm font-medium text-slate-700" htmlFor="mensagem">Mensagem</label>
<textarea className="mt-1 w-full rounded-xl border-slate-300 focus:border-[#AE2724] focus:ring-[#AE2724]" id="mensagem" name="mensagem" placeholder="Conte um pouco sobre sua necessidade..." rows="5"></textarea>
</div>
<div className="mt-6 flex items-start gap-3">
<input className="mt-1 rounded text-[#AE2724] focus:ring-[#AE2724]" id="lgpd" required="" type="checkbox"/>
<label className="text-sm text-slate-700" htmlFor="lgpd">Concordo em ser contatado e autorizo o uso dos meus dados conforme a LGPD.</label>
</div>
<div className="mt-6">
<button className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white hover:opacity-95 transition" style={{background: '#AE2724'}} type="submit">
<i className="h-4 w-4" data-lucide="send" strokeWidth="1.5"></i>
<span className="text-sm font-semibold">Enviar mensagem</span>
</button>
</div>
</form>
</div>

<aside className="rounded-2xl border border-slate-200/70 bg-white p-6 sm:p-8">
<h4 className="text-xl font-semibold" style={{color: '#2d251c'}}>Fale com a 24H</h4>
<p className="mt-2 text-slate-700">Preferiu contato direto? Estamos disponíveis 24/7.</p>
<div className="mt-5 space-y-4">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="phone"></i>
</span>
<div>
<div className="text-sm text-slate-600">Telefone</div>
<a className="text-[15px] font-semibold hover:underline" href="tel:+555135160098" style={{color: '#2d251c'}}>(51) 3516-0098</a>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="mail"></i>
</span>
<div>
<div className="text-sm text-slate-600">E-mail</div>
<a className="text-[15px] font-semibold hover:underline" href="mailto:contato@24hviagens.com.br" style={{color: '#2d251c'}}>contato@24hviagens.com.br</a>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="map-pin"></i>
</span>
<div>
<div className="text-sm text-slate-600">Endereço</div>
<p className="text-[15px] font-semibold" style={{color: '#2d251c'}}>Porto Alegre • RS</p>
</div>
</div>
</div>
<div className="mt-6 rounded-xl overflow-hidden border border-slate-200">
<img alt="Mapa ilustrativo" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</aside>
</div>
</div>
</section>

<section className="py-16 sm:py-20">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-8">
<div className="inline-flex items-center gap-2">
<i className="h-5 w-5" data-lucide="help-circle" strokeWidth="1.5" style={{color: '#2d251c'}}></i>
<span className="text-[14px] font-semibold uppercase tracking-[0.09em]" style={{color: '#2d251c'}}>Perguntas frequentes</span>
</div>
<h3 className="mt-3 text-4xl font-semibold tracking-tight" style={{color: '#0E1113'}}>Tire suas dúvidas</h3>
</div>

<div className="rounded-2xl border border-slate-200/70 bg-white p-6 sm:p-8">
<div className="space-y-3" id="faq-accordion">

<div className="rounded-xl border border-slate-200/70">
<button aria-controls="faq-1" aria-expanded="true" className="w-full flex items-center justify-between gap-4 px-4 py-4 sm:px-5 hover:bg-slate-50/60 transition-colors text-left" data-faq-btn="" type="button">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="rocket" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] font-semibold tracking-tight" style={{color: '#2d251c'}}>Como funciona a implantação do serviço?</div>
<p className="text-[13px] text-slate-600">Mapeamento inicial, políticas e go-live acompanhado</p>
</div>
</div>
<i className="h-5 w-5 text-slate-600 transition-transform duration-200" data-faq-chevron="" data-lucide="chevron-down" strokeWidth="1.5" style={{transform: 'rotate(180deg)'}}></i>
</button>
<div className="px-4 pb-4 sm:px-5 sm:pb-5" data-faq-panel="" id="faq-1" role="region">
<p className="text-[15px] text-slate-700">
                  Iniciamos com uma reunião de diagnóstico para entender volumes, centros de custo e regras de viagem. Em seguida, configuramos fluxos de aprovação, meios de pagamento e relatórios. O go-live ocorre em até 15 dias com treinamento dos usuários e acompanhamento do time 24H.
                </p>
</div>
</div>

<div className="rounded-xl border border-slate-200/70">
<button aria-controls="faq-2" aria-expanded="false" className="w-full flex items-center justify-between gap-4 px-4 py-4 sm:px-5 hover:bg-slate-50/60 transition-colors text-left" data-faq-btn="" type="button">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="file-check-2" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] font-semibold tracking-tight" style={{color: '#2d251c'}}>Vocês respeitam nossas políticas de viagem?</div>
<p className="text-[13px] text-slate-600">Compliance aplicado no processo de reserva</p>
</div>
</div>
<i className="h-5 w-5 text-slate-600 transition-transform duration-200" data-faq-chevron="" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="px-4 pb-4 sm:px-5 sm:pb-5" data-faq-panel="" hidden="" id="faq-2" role="region">
<p className="text-[15px] text-slate-700">
                  Sim. Parametrizamos o Self Booking e o atendimento dedicado com suas regras de classe tarifária, teto de diárias, fornecedores preferenciais e fluxos de aprovação. Alertas de não conformidade são registrados em relatório.
                </p>
</div>
</div>

<div className="rounded-xl border border-slate-200/70">
<button aria-controls="faq-3" aria-expanded="false" className="w-full flex items-center justify-between gap-4 px-4 py-4 sm:px-5 hover:bg-slate-50/60 transition-colors text-left" data-faq-btn="" type="button">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="life-buoy" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] font-semibold tracking-tight" style={{color: '#2d251c'}}>Há atendimento emergencial fora do horário?</div>
<p className="text-[13px] text-slate-600">Suporte 24/7 para imprevistos</p>
</div>
</div>
<i className="h-5 w-5 text-slate-600 transition-transform duration-200" data-faq-chevron="" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="px-4 pb-4 sm:px-5 sm:pb-5" data-faq-panel="" hidden="" id="faq-3" role="region">
<p className="text-[15px] text-slate-700">
                  Sim. Nossa equipe está disponível 24 horas por dia, 7 dias por semana, para remarcações, cancelamentos, perda de conexão, overbooking e outras ocorrências.
                </p>
</div>
</div>

<div className="rounded-xl border border-slate-200/70">
<button aria-controls="faq-4" aria-expanded="false" className="w-full flex items-center justify-between gap-4 px-4 py-4 sm:px-5 hover:bg-slate-50/60 transition-colors text-left" data-faq-btn="" type="button">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="credit-card" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] font-semibold tracking-tight" style={{color: '#2d251c'}}>Quais são as formas de pagamento?</div>
<p className="text-[13px] text-slate-600">Cartão corporativo, faturamento e câmbio</p>
</div>
</div>
<i className="h-5 w-5 text-slate-600 transition-transform duration-200" data-faq-chevron="" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="px-4 pb-4 sm:px-5 sm:pb-5" data-faq-panel="" hidden="" id="faq-4" role="region">
<p className="text-[15px] text-slate-700">
                  Trabalhamos com cartão corporativo, faturamento com prazo mediante análise e soluções de câmbio para viagens internacionais. Também oferecemos conciliação por centro de custo.
                </p>
</div>
</div>

<div className="rounded-xl border border-slate-200/70">
<button aria-controls="faq-5" aria-expanded="false" className="w-full flex items-center justify-between gap-4 px-4 py-4 sm:px-5 hover:bg-slate-50/60 transition-colors text-left" data-faq-btn="" type="button">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="pie-chart" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] font-semibold tracking-tight" style={{color: '#2d251c'}}>Que relatórios a 24H disponibiliza?</div>
<p className="text-[13px] text-slate-600">BI com indicadores e economicidade</p>
</div>
</div>
<i className="h-5 w-5 text-slate-600 transition-transform duration-200" data-faq-chevron="" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="px-4 pb-4 sm:px-5 sm:pb-5" data-faq-panel="" hidden="" id="faq-5" role="region">
<p className="text-[15px] text-slate-700">
                  Oferecemos dashboards com KPIs por centro de custo, top rotas, savings, antecipação média, no-show, SLA de atendimento e alertas de compliance, além de exportações em CSV/XLS.
                </p>
</div>
</div>

<div className="rounded-xl border border-slate-200/70">
<button aria-controls="faq-6" aria-expanded="false" className="w-full flex items-center justify-between gap-4 px-4 py-4 sm:px-5 hover:bg-slate-50/60 transition-colors text-left" data-faq-btn="" type="button">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{background: '#DDBE73'}}>
<i className="h-5 w-5 text-white" data-lucide="party-popper" strokeWidth="1.5"></i>
</span>
<div>
<div className="text-[16px] font-semibold tracking-tight" style={{color: '#2d251c'}}>Vocês organizam viagens de incentivo e eventos?</div>
<p className="text-[13px] text-slate-600">Do conceito à execução</p>
</div>
</div>
<i className="h-5 w-5 text-slate-600 transition-transform duration-200" data-faq-chevron="" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="px-4 pb-4 sm:px-5 sm:pb-5" data-faq-panel="" hidden="" id="faq-6" role="region">
<p className="text-[15px] text-slate-700">
                  Sim. Criamos roteiros exclusivos, logística completa, atendimento VIP, programação paralela e gestão de espaços para eventos e A&amp;B. Tudo personalizado ao seu objetivo.
                </p>
</div>
</div>
</div>

<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-200/70 pt-6">
<p className="text-[15px] text-slate-700">Não encontrou o que procurava? Nossa equipe está pronta para ajudar.</p>
<a className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white hover:opacity-95 transition" href="#contato" style={{background: '#AE2724'}}>
<span className="text-sm font-semibold">Fale com a 24H</span>
<i className="h-4 w-4" data-lucide="message-circle" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200/70">
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10">

<div className="md:col-span-2">
<a className="inline-flex items-center gap-2.5" href="#">
<span className="relative inline-flex h-8 w-8 items-center justify-center">
<span className="absolute inset-0 rounded-md" style={{background: '#2d251c'}}></span>
<span className="relative flex h-8 w-8 items-center justify-center rounded-[6px] bg-white">
<span className="h-[14px] w-[14px] rounded-sm" style={{background: '#DDBE73'}}></span>
</span>
</span>
<span className="text-[22px] font-semibold tracking-[-0.04em]" style={{color: '#2d251c'}}>24H Escritório de Viagens</span>
</a>
<p className="mt-3 max-w-xl text-[15px] text-slate-600">
              Gestão completa de viagens corporativas com atendimento 24/7, tecnologia Self Booking e rede de parceiros no Brasil e no exterior.
            </p>
<div className="mt-4 flex items-center gap-3 text-slate-600">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span>Porto Alegre • RS</span>
</div>
</div>

<div>
<h5 className="text-sm font-semibold uppercase tracking-[0.09em]" style={{color: '#2d251c'}}>Empresa</h5>
<ul className="mt-3 space-y-2 text-[15px]">
<li><a className="text-slate-600 hover:text-[color:#2d251c] transition" href="#sobre">Sobre nós</a></li>
<li><a className="text-slate-600 hover:text-[color:#2d251c] transition" href="#servicos">Serviços</a></li>
<li><a className="text-slate-600 hover:text-[color:#2d251c] transition" href="#contato">Contato</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold uppercase tracking-[0.09em]" style={{color: '#2d251c'}}>Suporte</h5>
<ul className="mt-3 space-y-2 text-[15px]">
<li><a className="text-slate-600 hover:text-[color:#2d251c] transition" href="#faq-accordion">FAQ</a></li>
<li><a className="text-slate-600 hover:text-[color:#2d251c] transition" href="mailto:contato@24hviagens.com.br">Suporte por e-mail</a></li>
<li><a className="text-slate-600 hover:text-[color:#2d251c] transition" href="tel:+555135160098">Atendimento 24/7</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/70 pt-6">
<p className="text-[13px] text-slate-500">© <span id="year"></span> 24H Escritório de Viagens. Todos os direitos reservados.</p>
<div className="flex items-center gap-4 text-slate-500">
<a className="hover:text-[color:#2d251c] transition text-[13px]" href="#">Política de Privacidade</a>
<span aria-hidden="true" className="text-slate-300">•</span>
<a className="hover:text-[color:#2d251c] transition text-[13px]" href="#">Termos de Uso</a>
</div>
</div>
</div>
</footer>



</charset="utf-8">
    </>
  );
}
