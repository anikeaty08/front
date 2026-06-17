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



    // Lucide icons
    document.addEventListener('DOMContentLoaded', function () {
      if (window.lucide) {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5 }
        });
      }
      // Ano no rodapé
      var y = document.getElementById('yearCopy');
      if (y) y.textContent = new Date().getFullYear();
      // Chart.js
      var ctx = document.getElementById('chartSatisfacao');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
            datasets: [{
              label: 'Satisfação',
              data: [88, 89, 90, 92, 93, 94, 95, 96],
              borderColor: 'rgba(168, 85, 247, 0.8)',
              backgroundColor: 'rgba(168, 85, 247, 0.15)',
              fill: true,
              tension: 0.35,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: false,
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: 'rgba(203,213,225,0.9)', font: { size: 10 } }
              },
              x: {
                grid: { display: false },
                ticks: { color: 'rgba(203,213,225,0.9)', font: { size: 10 } }
              }
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(2,6,23,0.9)',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                titleColor: 'rgba(226,232,240,1)',
                bodyColor: 'rgba(226,232,240,0.9)'
              }
            },
            elements: {
              point: { radius: 0, hitRadius: 8, hoverRadius: 3 }
            }
          }
        });
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
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(120,119,198,0.18),transparent)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_90%_20%,rgba(236,72,153,0.14),transparent)]"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-[0.07] mix-blend-screen"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="relative grid size-9 place-items-center rounded-md bg-white/5 ring-1 ring-white/10 transition group-hover:ring-fuchsia-500/40">
<span className="text-fuchsia-300 text-sm tracking-tight" style={{letterSpacing: '-0.02em'}}>st</span>
<div className="pointer-events-none absolute inset-0 rounded-md bg-gradient-to-tr from-fuchsia-500/15 via-cyan-400/10 to-indigo-500/10"></div>
</div>
<span className="text-slate-100 text-[18px] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>stellium</span>
</a>
<nav className="hidden md:flex items-center gap-7">
<a className="text-slate-300/90 hover:text-slate-100 transition-colors text-[14.5px]" href="#recursos">Recursos</a>
<a className="text-slate-300/90 hover:text-slate-100 transition-colors text-[14.5px]" href="#explorar">Explorar</a>
<a className="text-slate-300/90 hover:text-slate-100 transition-colors text-[14.5px]" href="#profissionais">Profissionais</a>
<a className="text-slate-300/90 hover:text-slate-100 transition-colors text-[14.5px]" href="#precos">Preços</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-[14px] text-slate-200 ring-1 ring-white/10 hover:ring-white/20 transition" href="#">
<i className="size-4" data-lucide="log-in"></i>
            Entrar
          </a>
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-[14px] bg-fuchsia-500/20 text-fuchsia-200 ring-1 ring-fuchsia-500/30 hover:bg-fuchsia-500/30 hover:ring-fuchsia-400/50 transition" href="#">
<i className="size-4" data-lucide="sparkles"></i>
            Criar conta
          </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
<i className="size-3.5" data-lucide="rocket"></i>
            Lançamento beta • Convites limitados
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-100" style={{letterSpacing: '-0.02em'}}>
            Conecte-se com os melhores especialistas em astrologia e artes esotéricas
          </h1>
<p className="text-[16.5px] leading-7 text-slate-300/90 max-w-xl">
            O stellium é a ponte entre você e profissionais como astrólogos, tarólogos, cartomantes, radiestesistas e fengshuistas. Descubra, siga, agende, pague e receba materiais das suas sessões — tudo em um só lugar.
          </p>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[14.5px] bg-fuchsia-500/20 text-fuchsia-200 ring-1 ring-fuchsia-500/40 hover:bg-fuchsia-500/30 hover:ring-fuchsia-400/60 transition" href="#">
<i className="size-4" data-lucide="compass"></i>
              Quero contratar
              <i className="size-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[14.5px] bg-cyan-500/20 text-cyan-200 ring-1 ring-cyan-500/40 hover:bg-cyan-500/30 hover:ring-cyan-400/60 transition" href="#">
<i className="size-4" data-lucide="users"></i>
              Sou profissional
              <i className="size-4" data-lucide="arrow-right"></i>
</a>
<span className="text-slate-400 text-sm">Sem mensalidade no beta</span>
</div>
<div className="flex gap-6 pt-3">
<div className="flex items-center gap-2 text-slate-300/90">
<i className="size-4 text-emerald-300" data-lucide="shield-check"></i>
<span className="text-sm">Pagamentos seguros</span>
</div>
<div className="flex items-center gap-2 text-slate-300/90">
<i className="size-4 text-violet-300" data-lucide="bell"></i>
<span className="text-sm">Notificações em tempo real</span>
</div>
<div className="flex items-center gap-2 text-slate-300/90">
<i className="size-4 text-amber-300" data-lucide="star"></i>
<span className="text-sm">Reviews transparentes</span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-x-10 -top-10 -bottom-6 opacity-60 blur-2xl">
<div className="h-full w-full rounded-[28px] bg-gradient-to-br from-fuchsia-600/20 via-sky-500/10 to-indigo-500/20"></div>
</div>
<div className="relative rounded-[28px] border border-white/10 bg-white/5 backdrop-blur p-3 shadow-2xl ring-1 ring-white/10">
<div className="grid grid-cols-2 gap-3">
<div className="col-span-1 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900/60">
<img alt="Preview do app" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 space-y-3">
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900/60">
<img alt="Feed de postagens" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900/60">
<img alt="Calendário" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
<div className="flex items-center gap-2">
<i className="size-4 text-sky-300" data-lucide="search"></i>
<span className="text-xs text-slate-300">Busca por área</span>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
<div className="flex items-center gap-2">
<i className="size-4 text-violet-300" data-lucide="calendar"></i>
<span className="text-xs text-slate-300">Agenda</span>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
<div className="flex items-center gap-2">
<i className="size-4 text-emerald-300" data-lucide="credit-card"></i>
<span className="text-xs text-slate-300">Pagamento</span>
</div>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-3 gap-6 text-center">
<div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
<div className="text-2xl font-semibold tracking-tight text-slate-100">4.9</div>
<div className="text-xs text-slate-400">Avaliação média</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
<div className="text-2xl font-semibold tracking-tight text-slate-100">+12k</div>
<div className="text-xs text-slate-400">Sessões realizadas</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
<div className="text-2xl font-semibold tracking-tight text-slate-100">2.3 min</div>
<div className="text-xs text-slate-400">Tempo de resposta</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-white/5" id="recursos">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100" style={{letterSpacing: '-0.02em'}}>Tudo que você precisa para sessões transformadoras</h2>
<p className="mt-2 text-slate-300/90 max-w-2xl">Do primeiro contato ao pós-atendimento, o stellium cuida da jornada inteira com segurança e fluidez.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-[14px] text-slate-200 px-3 py-2 rounded-md ring-1 ring-white/10 hover:ring-white/20 transition" href="#explorar">
          Ver demonstração
          <i className="size-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<div className="rounded-md bg-sky-500/15 p-2 ring-1 ring-sky-400/30">
<i className="size-5 text-sky-300" data-lucide="filter"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Busca por área e especialidade</h3>
</div>
<p className="mt-2 text-sm text-slate-300/90">Encontre astrólogos, tarólogos, cartomantes, radiestesistas e fengshuistas com filtros por tema, idioma, preço e agenda.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs text-slate-300 ring-1 ring-white/10 rounded-full px-2 py-1">Mapa astral</span>
<span className="text-xs text-slate-300 ring-1 ring-white/10 rounded-full px-2 py-1">Tarot</span>
<span className="text-xs text-slate-300 ring-1 ring-white/10 rounded-full px-2 py-1">Sinastria</span>
</div>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<div className="rounded-md bg-fuchsia-500/15 p-2 ring-1 ring-fuchsia-400/30">
<i className="size-5 text-fuchsia-300" data-lucide="app-window"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Perfis ricos e feed de postagens</h3>
</div>
<p className="mt-2 text-sm text-slate-300/90">Apresente biografia, métodos, depoimentos, portfólio e publique conteúdos. Siga profissionais e acompanhe atualizações.</p>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<div className="rounded-md bg-emerald-500/15 p-2 ring-1 ring-emerald-400/30">
<i className="size-5 text-emerald-300" data-lucide="credit-card"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Pagamentos e repasses com segurança</h3>
</div>
<p className="mt-2 text-sm text-slate-300/90">Checkout protegido, split automático e emissão de comprovantes. Políticas claras de reagendamento e reembolso.</p>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<div className="rounded-md bg-amber-500/15 p-2 ring-1 ring-amber-400/30">
<i className="size-5 text-amber-300" data-lucide="star"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Reviews com comentários</h3>
</div>
<p className="mt-2 text-sm text-slate-300/90">Avaliações públicas com notas, comentários e respostas do profissional, promovendo transparência e confiança.</p>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<div className="rounded-md bg-indigo-500/15 p-2 ring-1 ring-indigo-400/30">
<i className="size-5 text-indigo-300" data-lucide="share-2"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Materiais das sessões</h3>
</div>
<p className="mt-2 text-sm text-slate-300/90">Áudios, PDFs e anotações ficam organizados no histórico. Reviva pontos importantes a qualquer momento.</p>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<div className="rounded-md bg-violet-500/15 p-2 ring-1 ring-violet-400/30">
<i className="size-5 text-violet-300" data-lucide="calendar"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Notificações e calendário</h3>
</div>
<p className="mt-2 text-sm text-slate-300/90">Lembretes inteligentes, confirmação automática e sincronização com sua agenda pessoal.</p>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-white/5" id="explorar">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 rounded-xl bg-slate-950/40 ring-1 ring-white/10 px-3 py-2.5">
<i className="size-5 text-slate-300" data-lucide="search"></i>
<input className="w-full bg-transparent placeholder:text-slate-500 text-slate-200 text-sm focus:outline-none" placeholder="Procure por área, tema ou nome..." type="text"/>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[13px] text-slate-200 ring-1 ring-white/10 hover:ring-white/20 transition">
<i className="size-4" data-lucide="sliders"></i>
              Filtros
            </button>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<button className="text-xs text-sky-200 bg-sky-500/15 ring-1 ring-sky-400/30 rounded-full px-2.5 py-1 hover:bg-sky-500/25">Astrologia</button>
<button className="text-xs text-fuchsia-200 bg-fuchsia-500/15 ring-1 ring-fuchsia-400/30 rounded-full px-2.5 py-1 hover:bg-fuchsia-500/25">Tarot</button>
<button className="text-xs text-emerald-200 bg-emerald-500/15 ring-1 ring-emerald-400/30 rounded-full px-2.5 py-1 hover:bg-emerald-500/25">Radiestesia</button>
<button className="text-xs text-indigo-200 bg-indigo-500/15 ring-1 ring-indigo-400/30 rounded-full px-2.5 py-1 hover:bg-indigo-500/25">Feng Shui</button>
<button className="text-xs text-amber-200 bg-amber-500/15 ring-1 ring-amber-400/30 rounded-full px-2.5 py-1 hover:bg-amber-500/25">Mapa astral</button>
</div>
<div className="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-5">

<article className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:-translate-y-0.5 hover:bg-white/10 transition will-change-transform">
<img alt="Capa" className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&amp;w=1950&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1180&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-[15px] font-semibold tracking-tight text-slate-100">Ana Ribeiro</h4>
<p className="text-xs text-slate-400">Astróloga • Mapa astral, Sinastria</p>
</div>
<div className="ms-auto flex items-center gap-1 text-amber-300">
<i className="size-4" data-lucide="star"></i><span className="text-xs text-slate-300">4.9</span>
</div>
</div>
<p className="mt-3 text-sm text-slate-300/90 line-clamp-2">Leituras profundas com foco em propósito e ciclos pessoais. 8+ anos de experiência.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-xs text-slate-400">A partir de R$ 180</span>
<button className="inline-flex items-center gap-2 text-[13px] rounded-md px-2.5 py-1.5 ring-1 ring-white/10 hover:ring-white/20 transition">
                    Agendar
                    <i className="size-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</article>
<article className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:-translate-y-0.5 hover:bg-white/10 transition will-change-transform">
<img alt="Capa" className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&amp;w=1950&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=1180&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-[15px] font-semibold tracking-tight text-slate-100">Marcos Leal</h4>
<p className="text-xs text-slate-400">Tarólogo • Tarot terapêutico</p>
</div>
<div className="ms-auto flex items-center gap-1 text-amber-300">
<i className="size-4" data-lucide="star"></i><span className="text-xs text-slate-300">4.8</span>
</div>
</div>
<p className="mt-3 text-sm text-slate-300/90 line-clamp-2">Atendimento humanizado e direcionado. Leituras objetivas com plano de ação.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-xs text-slate-400">A partir de R$ 120</span>
<button className="inline-flex items-center gap-2 text-[13px] rounded-md px-2.5 py-1.5 ring-1 ring-white/10 hover:ring-white/20 transition">
                    Agendar
                    <i className="size-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</article>
<article className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:-translate-y-0.5 hover:bg-white/10 transition will-change-transform">
<img alt="Capa" className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&amp;w=1950&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=1180&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-[15px] font-semibold tracking-tight text-slate-100">Clara Nogueira</h4>
<p className="text-xs text-slate-400">Feng Shui • Residencial</p>
</div>
<div className="ms-auto flex items-center gap-1 text-amber-300">
<i className="size-4" data-lucide="star"></i><span className="text-xs text-slate-300">5.0</span>
</div>
</div>
<p className="mt-3 text-sm text-slate-300/90 line-clamp-2">Harmonização de ambientes, fluxo de energia e bem-estar no dia a dia.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-xs text-slate-400">A partir de R$ 320</span>
<button className="inline-flex items-center gap-2 text-[13px] rounded-md px-2.5 py-1.5 ring-1 ring-white/10 hover:ring-white/20 transition">
                    Agendar
                    <i className="size-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</article>
</div>
</div>

<aside className="rounded-2xl border border-white/10 bg-white/5 p-5">
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Confiança em números</h3>
<p className="mt-1 text-sm text-slate-300/90">Crescimento saudável e satisfação consistente.</p>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg bg-slate-950/40 ring-1 ring-white/10 p-3">
<div className="text-2xl font-semibold tracking-tight text-slate-100">+2.1k</div>
<div className="text-xs text-slate-400">Profissionais ativos</div>
</div>
<div className="rounded-lg bg-slate-950/40 ring-1 ring-white/10 p-3">
<div className="text-2xl font-semibold tracking-tight text-slate-100">96%</div>
<div className="text-xs text-slate-400">Satisfação</div>
</div>
</div>
<div className="mt-4 rounded-xl bg-slate-950/40 ring-1 ring-white/10 p-3">
<div>
<canvas className="!h-36 w-full" id="chartSatisfacao"></canvas>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
<i className="size-4" data-lucide="shield"></i>
            Dados agregados e anonimizados
          </div>
</aside>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100" style={{letterSpacing: '-0.02em'}}>Como funciona</h2>
<div className="mt-8 grid md:grid-cols-2 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<i className="size-5 text-sky-300" data-lucide="compass"></i>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Para clientes</h3>
</div>
<ol className="mt-3 space-y-3 text-sm text-slate-300/90">
<li className="flex gap-2"><span className="text-slate-400">1.</span> Busque por área, tema ou indique sua necessidade.</li>
<li className="flex gap-2"><span className="text-slate-400">2.</span> Compare perfis, avaliações e disponibilidade.</li>
<li className="flex gap-2"><span className="text-slate-400">3.</span> Agende, pague com segurança e receba lembretes.</li>
<li className="flex gap-2"><span className="text-slate-400">4.</span> Acesse materiais e histórico quando quiser.</li>
</ol>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<i className="size-5 text-emerald-300" data-lucide="users"></i>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Para profissionais</h3>
</div>
<ol className="mt-3 space-y-3 text-sm text-slate-300/90">
<li className="flex gap-2"><span className="text-slate-400">1.</span> Crie seu perfil com portfólio, serviços e agenda.</li>
<li className="flex gap-2"><span className="text-slate-400">2.</span> Publique conteúdos e ganhe seguidores.</li>
<li className="flex gap-2"><span className="text-slate-400">3.</span> Receba pagamentos com repasse automático.</li>
<li className="flex gap-2"><span className="text-slate-400">4.</span> Envie materiais e gerencie avaliações.</li>
</ol>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-6">
<figure className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<img alt="Depoimento" className="size-9 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?q=80&amp;w=1180&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="text-sm font-semibold tracking-tight text-slate-100">Letícia Moraes</figcaption>
<p className="text-xs text-slate-400">Cliente</p>
</div>
<div className="ms-auto flex items-center gap-1 text-amber-300">
<i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i>
</div>
</div>
<blockquote className="mt-3 text-sm text-slate-300/90">Encontrei com facilidade uma astróloga que me acompanhou por meses. O histórico de materiais salvou minha rotina.</blockquote>
</figure>
<figure className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<img alt="Depoimento" className="size-9 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=1180&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="text-sm font-semibold tracking-tight text-slate-100">Rafael Campos</figcaption>
<p className="text-xs text-slate-400">Tarólogo</p>
</div>
<div className="ms-auto flex items-center gap-1 text-amber-300">
<i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i>
</div>
</div>
<blockquote className="mt-3 text-sm text-slate-300/90">O sistema de agendamento e repasse simplificou tudo. Consigo focar no atendimento e no conteúdo.</blockquote>
</figure>
<figure className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<img alt="Depoimento" className="size-9 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1180&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="text-sm font-semibold tracking-tight text-slate-100">Camila Dias</figcaption>
<p className="text-xs text-slate-400">Fengshuista</p>
</div>
<div className="ms-auto flex items-center gap-1 text-amber-300">
<i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i>
</div>
</div>
<blockquote className="mt-3 text-sm text-slate-300/90">Ter um perfil completo com portfólio e reviews elevou minha credibilidade e trouxe novos clientes.</blockquote>
</figure>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-white/5" id="precos">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100" style={{letterSpacing: '-0.02em'}}>Preço simples e transparente</h2>
<p className="mt-2 text-slate-300/90">Durante o beta, zero mensalidade. Cobramos apenas taxa por transação.</p>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Clientes</h3>
<ul className="mt-3 space-y-2 text-sm text-slate-300/90">
<li className="flex items-center gap-2"><i className="size-4 text-emerald-300" data-lucide="check"></i> Sem taxas extras</li>
<li className="flex items-center gap-2"><i className="size-4 text-emerald-300" data-lucide="check"></i> Pagamento seguro</li>
<li className="flex items-center gap-2"><i className="size-4 text-emerald-300" data-lucide="check"></i> Suporte dedicado</li>
</ul>
<div className="mt-5 flex items-baseline gap-2">
<div className="text-2xl font-semibold tracking-tight text-slate-100">R$ 0</div>
<span className="text-sm text-slate-400">/ mensal</span>
</div>
<a className="mt-5 inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[14.5px] bg-fuchsia-500/20 text-fuchsia-200 ring-1 ring-fuchsia-500/40 hover:bg-fuchsia-500/30 hover:ring-fuchsia-400/60 transition" href="#">
            Começar agora
            <i className="size-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Profissionais</h3>
<ul className="mt-3 space-y-2 text-sm text-slate-300/90">
<li className="flex items-center gap-2"><i className="size-4 text-emerald-300" data-lucide="check"></i> Zero mensalidade no beta</li>
<li className="flex items-center gap-2"><i className="size-4 text-emerald-300" data-lucide="check"></i> Split automático e rápido</li>
<li className="flex items-center gap-2"><i className="size-4 text-emerald-300" data-lucide="check"></i> Ferramentas de crescimento</li>
</ul>
<div className="mt-5">
<div className="text-sm text-slate-400">Taxa por transação</div>
<div className="text-2xl font-semibold tracking-tight text-slate-100">8% + R$ 1,49</div>
</div>
<a className="mt-5 inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[14.5px] bg-cyan-500/20 text-cyan-200 ring-1 ring-cyan-500/40 hover:bg-cyan-500/30 hover:ring-cyan-400/60 transition" href="#">
            Criar meu perfil
            <i className="size-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-white/5">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100" style={{letterSpacing: '-0.02em'}}>Perguntas frequentes</h2>
<div className="mt-8 space-y-3">
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 open:bg-white/10 transition">
<summary className="flex cursor-pointer items-center justify-between text-[15px] text-slate-200">
            O stellium tem plano gratuito?
            <i className="size-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-slate-300/90">Sim. Durante o beta, clientes e profissionais podem usar sem mensalidade. Há apenas a taxa por transação para profissionais.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 open:bg-white/10 transition">
<summary className="flex cursor-pointer items-center justify-between text-[15px] text-slate-200">
            Como funcionam os pagamentos?
            <i className="size-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-slate-300/90">O pagamento é processado de forma segura e o repasse é feito automaticamente ao profissional após a sessão, conforme políticas definidas.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 open:bg-white/10 transition">
<summary className="flex cursor-pointer items-center justify-between text-[15px] text-slate-200">
            Posso reagendar ou cancelar?
            <i className="size-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-slate-300/90">Sim. Oferecemos reagendamento e cancelamento com regras claras de antecedência e reembolso parcial ou total.</p>
</details>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-white/5">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-fuchsia-600/10 via-indigo-500/10 to-sky-500/10 p-6 ring-1 ring-white/10">
<div className="grid md:grid-cols-2 gap-6 items-center">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100" style={{letterSpacing: '-0.02em'}}>Pronto para iluminar sua jornada?</h3>
<p className="mt-2 text-slate-300/90">Crie sua conta e comece a explorar perfis ou construa o seu com poucos cliques.</p>
<div className="mt-4 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[14.5px] bg-fuchsia-500/20 text-fuchsia-200 ring-1 ring-fuchsia-500/40 hover:bg-fuchsia-500/30 hover:ring-fuchsia-400/60 transition" href="#">
                Explorar agora
                <i className="size-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[14.5px] bg-cyan-500/20 text-cyan-200 ring-1 ring-cyan-500/40 hover:bg-cyan-500/30 hover:ring-cyan-400/60 transition" href="#">
                Criar perfil profissional
                <i className="size-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-slate-950/40">
<img alt="Preview do app em mockup" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=2370&amp;auto=format&amp;fit=crop" />
</img></div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="relative grid size-8 place-items-center rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-fuchsia-300 text-xs tracking-tight" style={{letterSpacing: '-0.02em'}}>st</span>
</div>
<span className="text-slate-300 text-[15px] font-medium tracking-tight" style={{letterSpacing: '-0.02em'}}>stellium</span>
</div>
<nav className="flex flex-wrap items-center gap-6 text-sm">
<a className="text-slate-400 hover:text-slate-200 transition" href="#recursos">Recursos</a>
<a className="text-slate-400 hover:text-slate-200 transition" href="#explorar">Explorar</a>
<a className="text-slate-400 hover:text-slate-200 transition" href="#precos">Preços</a>
<a className="text-slate-400 hover:text-slate-200 transition" href="#">Suporte</a>
</nav>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
<p>© <span id="yearCopy"></span> stellium. Todos os direitos reservados.</p>
<div className="flex items-center gap-4">
<a className="hover:text-slate-300 transition" href="#">Privacidade</a>
<a className="hover:text-slate-300 transition" href="#">Termos</a>
<a className="hover:text-slate-300 transition" href="#">Status</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
