import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
}
}
}



      // Initialize lucide icons with consistent 1.5 stroke width
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Simple carousel
        const root = document.getElementById('hero-carousel');
        const slides = Array.from(root.querySelectorAll('[data-slide]'));
        const dots = Array.from(root.querySelectorAll('[data-dot]'));
        const prev = document.getElementById('hero-prev');
        const next = document.getElementById('hero-next');

        let index = 0;
        let auto;

        function show(i) {
          index = (i + slides.length) % slides.length;
          slides.forEach((s, si) => {
            s.style.opacity = si === index ? '1' : '0';
            if (si === index) s.setAttribute('data-slide', 'active'); else s.setAttribute('data-slide', '');
          });
          dots.forEach((d, di) => {
            d.className = 'h-1.5 rounded-full ' + (di === index ? 'w-6 bg-emerald-400' : 'w-3 bg-white/40 hover:bg-white/60');
          });
        }

        function startAuto() {
          stopAuto();
          auto = setInterval(() => show(index + 1), 5000);
        }
        function stopAuto() { if (auto) clearInterval(auto); }

        prev.addEventListener('click', () => { show(index - 1); startAuto(); });
        next.addEventListener('click', () => { show(index + 1); startAuto(); });
        dots.forEach((d, di) => d.addEventListener('click', () => { show(di); startAuto(); }));

        root.addEventListener('mouseenter', stopAuto);
        root.addEventListener('mouseleave', startAuto);

        show(0);
        startAuto();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center gap-4">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400 to-lime-400"></div>
<span className="text-xl tracking-tight font-semibold">SQUAD77</span>
</div>
</div>
<div className="flex-1 hidden md:flex">
<div className="relative w-full max-w-xl">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="search"></span>
<input className="w-full pl-10 pr-3 h-10 rounded-lg bg-neutral-900/80 border border-white/10 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400/40 transition" placeholder="Digite para buscar..."/>
</div>
</div>
<nav className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-10 px-3 rounded-lg bg-gradient-to-r from-emerald-500 to-lime-400 text-neutral-900 font-medium shadow-[0_8px_30px_rgba(34,197,94,0.35)] hover:shadow-[0_12px_36px_rgba(34,197,94,0.45)] active:scale-[0.99] transition">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Publicar</span>
</button>
<button className="h-10 w-10 grid place-items-center rounded-lg bg-neutral-900/70 border border-white/10 hover:bg-neutral-800/70 transition">
<i className="w-5 h-5 text-slate-300" data-lucide="bell"></i>
</button>
<button className="h-10 w-10 grid place-items-center rounded-lg bg-neutral-900/70 border border-white/10 hover:bg-neutral-800/70 transition">
<i className="w-5 h-5 text-slate-300" data-lucide="message-square"></i>
</button>
<div className="h-10 w-px bg-white/10 mx-1"></div>
<button className="flex items-center gap-2 h-10 px-2 rounded-lg bg-neutral-900/70 border border-white/10 hover:bg-neutral-800/70 transition">
<img alt="profile" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="hidden lg:block text-sm font-medium">Thiago</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
</nav>
</div>
</div>
</header>

<div className="border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2 overflow-x-auto py-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 border border-emerald-400/30 text-emerald-300">
<i className="w-4 h-4" data-lucide="compass"></i>
<span className="text-sm font-medium">Explorar</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900/60 border border-white/10 hover:bg-neutral-800/60">
<i className="w-4 h-4" data-lucide="users"></i>
<span className="text-sm font-medium">Squads</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900/60 border border-white/10 hover:bg-neutral-800/60">
<i className="w-4 h-4" data-lucide="target"></i>
<span className="text-sm font-medium">Operações</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900/60 border border-white/10 hover:bg-neutral-800/60">
<i className="w-4 h-4" data-lucide="map"></i>
<span className="text-sm font-medium">Mapas</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900/60 border border-white/10 hover:bg-neutral-800/60">
<i className="w-4 h-4" data-lucide="package"></i>
<span className="text-sm font-medium">Arsenal</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900/60 border border-white/10 hover:bg-neutral-800/60">
<i className="w-4 h-4" data-lucide="trophy"></i>
<span className="text-sm font-medium">Ranking</span>
</button>
</div>
</div>
</div>
<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<section className="mt-6">
<div className="relative">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900" id="hero-carousel">
<div className="relative h-[220px] sm:h-[280px] lg:h-[360px]">

<div className="absolute inset-0 opacity-100 transition-opacity duration-700" data-slide="active">
<img alt="mountains" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/80 via-neutral-950/30 to-transparent"></div>
<div className="absolute left-6 sm:left-8 bottom-6 sm:bottom-8 max-w-xl">
<p className="text-emerald-300 text-xs sm:text-sm font-medium uppercase">SQUAD Academy</p>
<h1 className="mt-1 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold">Construa táticas melhores. Jogue como unidade.</h1>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-gradient-to-r from-emerald-500 to-lime-400 text-neutral-900 font-medium shadow-[0_8px_30px_rgba(34,197,94,0.35)] hover:shadow-[0_12px_36px_rgba(34,197,94,0.45)]" href="#">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                      Começar
                    </a>
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-neutral-900/80 border border-white/15 hover:bg-neutral-800/80" href="#">
<i className="w-4 h-4" data-lucide="book-open"></i>
                      Ver módulos
                    </a>
</div>
</div>
</div>

<div className="absolute inset-0 opacity-0 transition-opacity duration-700" data-slide="">
<img alt="render" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/80 via-neutral-950/30 to-transparent"></div>
<div className="absolute left-6 sm:left-8 bottom-6 sm:bottom-8 max-w-xl">
<p className="text-emerald-300 text-xs sm:text-sm font-medium uppercase">Eventos</p>
<h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold">Operações com imersão total e briefings dinâmicos.</h2>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-gradient-to-r from-emerald-500 to-lime-400 text-neutral-900 font-medium" href="#">
<i className="w-4 h-4" data-lucide="calendar"></i>
                      Ver Agenda
                    </a>
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-neutral-900/80 border border-white/15 hover:bg-neutral-800/80" href="#">
<i className="w-4 h-4" data-lucide="share-2"></i>
                      Convidar equipe
                    </a>
</div>
</div>
</div>

<div className="absolute inset-0 opacity-0 transition-opacity duration-700" data-slide="">
<img alt="minimal" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/80 via-neutral-950/30 to-transparent"></div>
<div className="absolute left-6 sm:left-8 bottom-6 sm:bottom-8 max-w-xl">
<p className="text-emerald-300 text-xs sm:text-sm font-medium uppercase">Comunidade</p>
<h3 className="mt-1 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold">Estratégias, reviews e loadouts dos melhores squads.</h3>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-gradient-to-r from-emerald-500 to-lime-400 text-neutral-900 font-medium" href="#">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                      Explorar agora
                    </a>
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-neutral-900/80 border border-white/15 hover:bg-neutral-800/80" href="#">
<i className="w-4 h-4" data-lucide="message-circle"></i>
                      Entrar no Discord
                    </a>
</div>
</div>
</div>
</div>

<button className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 grid place-items-center rounded-full bg-neutral-950/70 border border-white/10 hover:bg-neutral-800/70" id="hero-prev">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 grid place-items-center rounded-full bg-neutral-950/70 border border-white/10 hover:bg-neutral-800/70" id="hero-next">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>

<div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
<button className="h-1.5 w-6 rounded-full bg-emerald-400" data-dot="0"></button>
<button className="h-1.5 w-3 rounded-full bg-white/40 hover:bg-white/60" data-dot="1"></button>
<button className="h-1.5 w-3 rounded-full bg-white/40 hover:bg-white/60" data-dot="2"></button>
</div>
</div>
</div>
</section>

<section className="mt-8">
<div className="-mx-4 sm:-mx-6 lg:-mx-8">
<article className="relative overflow-hidden border-y border-white/10 lg:rounded-2xl lg:border lg:mx-0 bg-neutral-900">
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12 lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-300 text-xs font-medium">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
                  Novo eBook
                </div>
<h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold">Manual Tático de Airsoft</h2>
<p className="mt-3 text-slate-300 text-sm sm:text-base max-w-prose">
                  Estratégia, comunicação, movimentação e drills — um guia prático para evoluir do casual ao operacional.
                  Projetado para elevar a performance do seu squad nas próximas operações.
                </p>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="file-text"></i>
                    140 páginas em PDF
                  </div>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="target"></i>
                    Táticas, cenários e drills
                  </div>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="shield"></i>
                    Regras, segurança e SOPs
                  </div>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="message-square"></i>
                    Comunicação e comando
                  </div>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a aria-label="Ver detalhes do eBook" className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-gradient-to-r from-emerald-500 to-lime-400 text-neutral-900 font-medium shadow-[0_8px_30px_rgba(34,197,94,0.35)] hover:shadow-[0_12px_36px_rgba(34,197,94,0.45)] hover:opacity-95 active:scale-[0.99]" href="/ebook">
<i className="w-5 h-5" data-lucide="book-open"></i>
                    Ver detalhes do eBook
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="lock"></i> Acesso imediato
                    </span>
<span className="opacity-40">•</span>
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="refresh-cw"></i> Atualizações gratuitas
                    </span>
</div>
</div>
</div>

<div className="relative lg:col-span-5">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-l from-neutral-900 via-neutral-900/40 to-transparent lg:bg-gradient-to-l"></div>
<img alt="Operador de airsoft equipado segurando rifle" className="w-full h-64 sm:h-80 lg:h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
</div>
</div>
</article>
</div>
</section>

<section className="mt-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold">Operações</h2>
<p className="text-slate-400 text-sm mt-1">Briefings claros, CTA coerentes e status com melhor contraste.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="h-9 w-9 grid place-items-center rounded-lg bg-neutral-900/70 border border-white/10 hover:bg-neutral-800/70">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i>
</button>
<button className="h-9 w-9 grid place-items-center rounded-lg bg-neutral-900/70 border border-white/10 hover:bg-neutral-800/70">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
</button>
</div>
</div>
<div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<article className="rounded-2xl border border-white/10 bg-neutral-900/60 hover:bg-neutral-900/80 transition">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="avatar" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-sm">
<p className="font-medium">Thiago Misael</p>
<p className="text-slate-400">Operação Especial</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-medium">Ativa</span>
</div>
<div className="mt-4 rounded-lg overflow-hidden relative">
<img alt="banner" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold">OPERAÇÃO PAYDAY</h3>
<p className="text-emerald-300 text-sm mt-1">Goiânia / Brasil</p>
<p className="text-sm text-slate-400 mt-2">A cidade pacata se transforma em palco de tensão e estratégia. Os criminosos liderados por...</p>
<dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="calendar"></i>
<span>09/11/2025</span>
</div>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="timer"></i>
<span>4 horas</span>
</div>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="sun"></i>
<span>Diurna</span>
</div>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin"></i>
<span>Goiânia, GO</span>
</div>
</dl>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-gradient-to-r from-emerald-500 to-lime-400 text-neutral-900 font-medium w-full" href="#">
<i className="w-4 h-4" data-lucide="target"></i>
                  Participar
                </a>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-neutral-900/60 hover:bg-neutral-900/80 transition">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="avatar" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-sm">
<p className="font-medium">@Sebastião Nunis</p>
<p className="text-slate-400">Operação Especial</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10 text-xs font-medium">Agendada</span>
</div>
<div className="mt-4 rounded-lg overflow-hidden relative">
<img alt="banner" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold">Operação Arcano IV</h3>
<p className="text-emerald-300 text-sm mt-1">Goiânia / Brasil</p>
<p className="text-sm text-slate-400 mt-2">O Brasil vive uma das maiores crises de segurança urbana da história recente...</p>
<dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="calendar-range"></i>
<span>20-23/03/2026</span>
</div>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="timer"></i>
<span>16 horas</span>
</div>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="sun"></i>
<span>Diurna</span>
</div>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin"></i>
<span>Goiânia, GO</span>
</div>
</dl>

<div className="mt-4 flex items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg w-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/15 font-medium">
<i className="w-4 h-4" data-lucide="clock"></i>
                  Disponível em breve
                </button>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-neutral-900/60 hover:bg-neutral-900/80 transition">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="avatar" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-sm">
<p className="font-medium">Thiago Misael</p>
<p className="text-slate-400">Operação Especial</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-md bg-red-500/10 text-red-300 border border-red-500/30 text-xs font-medium">Encerrada</span>
</div>
<div className="mt-4 rounded-lg overflow-hidden relative">
<img alt="banner" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold">Operação Sentinela II</h3>
<p className="text-emerald-300 text-sm mt-1">Goiânia / Brasil</p>
<p className="text-sm text-slate-400 mt-2">Contra-ataque Sentinela — missões encadeadas após o ataque...</p>
<dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="calendar"></i>
<span>26-27/09/2025</span>
</div>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="moon"></i>
<span>Noturna</span>
</div>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin"></i>
<span>Goiânia, GO</span>
</div>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="target"></i>
<span>Milsim</span>
</div>
</dl>
<div className="mt-4 flex items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg w-full bg-neutral-900/80 text-slate-300 border border-white/12 hover:bg-neutral-800/80 font-medium">
<i className="w-4 h-4" data-lucide="check-circle"></i>
                  Operação concluída
                </button>
</div>
</div>
</article>
</div>
</section>

<section className="mt-10 mb-14">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold">Cortes</h2>
<a className="text-sm text-slate-400 hover:text-slate-200 inline-flex items-center gap-1" href="#">
            Ver todos
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
<img alt="cut" className="w-full h-48 object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute left-4 right-4 bottom-4">
<p className="text-sm text-slate-300">Flanco perfeito na fase final</p>
<div className="mt-2 flex items-center gap-3 text-xs text-slate-400">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="eye"></i> 2.3k
                </span>
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="thumbs-up"></i> 340
                </span>
</div>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
<img alt="cut" className="w-full h-48 object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute left-4 right-4 bottom-4">
<p className="text-sm text-slate-300">Smoke + avanço sincronizado</p>
<div className="mt-2 flex items-center gap-3 text-xs text-slate-400">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="eye"></i> 1.1k
                </span>
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="thumbs-up"></i> 210
                </span>
</div>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
<img alt="cut" className="w-full h-48 object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute left-4 right-4 bottom-4">
<p className="text-sm text-slate-300">Resgate em baixa visibilidade</p>
<div className="mt-2 flex items-center gap-3 text-xs text-slate-400">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="eye"></i> 3.0k
                </span>
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="thumbs-up"></i> 510
                </span>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-3">
<p className="text-xs text-slate-500">© 2025 SQUAD77. Todos os direitos reservados.</p>
<div className="flex items-center gap-3 text-xs text-slate-400">
<a className="hover:text-slate-200" href="#">Termos</a>
<span className="opacity-40">•</span>
<a className="hover:text-slate-200" href="#">Privacidade</a>
<span className="opacity-40">•</span>
<a className="hover:text-slate-200" href="#">Contato</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
