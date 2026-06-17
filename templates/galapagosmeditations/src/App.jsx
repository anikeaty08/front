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
      

<div className="fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 via-sky-500/20 to-fuchsia-500/10 blur-3xl"></div>
<div className="absolute top-32 -right-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tl from-emerald-400/20 via-cyan-400/10 to-violet-500/30 blur-3xl"></div>
<div className="absolute bottom-0 left-1/2 h-64 w-[36rem] -translate-x-1/2 bg-gradient-to-t from-yellow-400/10 via-amber-300/5 to-transparent blur-3xl"></div>
</div>

<div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pt-6">


<header className="sticky top-0 z-30 mb-6 backdrop-blur-xl">
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between shadow-lg shadow-indigo-500/10">

<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 shadow-md shadow-purple-500/40">
<span className="text-xs font-semibold tracking-tight text-slate-950">101</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50">101 Meditações</span>
<span className="text-[0.7rem] font-normal text-slate-400">Spa digital para sua mente</span>
</div>
</div>


<a className="inline-flex items-center gap-1 rounded-full border border-slate-500/60 bg-slate-900/40 px-3 py-1 text-[0.75rem] font-medium text-slate-100 shadow-sm shadow-cyan-400/20 transition hover:border-cyan-400/70 hover:bg-slate-900/80" href="#area-membros">
<span>Área de Membros</span>
</a>
</div>
</header>


<main className="flex-1">
<section className="relative mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-center">

<div className="relative z-10 max-w-xl">

<div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-slate-950/70 px-3 py-1 text-[0.7rem] font-medium text-indigo-200/90 shadow shadow-indigo-500/30">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(45,212,191,0.9)]"></span>
<span>Reset mental em menos de 5 minutos</span>
</div>


<h1 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
            101 Meditações.<br/>
<span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
              Ative sua mente em 5 minutos.
            </span>
</h1>

<p className="mb-4 text-base sm:text-lg font-normal text-slate-300">
            O pack definitivo de áudios guiados para eliminar a ansiedade, aumentar sua inteligência emocional,
            aliviar a insônia e estabilizar suas emoções com uma abordagem prática e nada mística.
          </p>

<div className="mb-5 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
<div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/70 px-3 py-1 border border-slate-700/80">

<svg className="h-3.5 w-3.5 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.75 9.47 8.87l-5.22.76 3.78 3.68-.89 5.19L12 16.77l4.86 2.56-.89-5.19 3.78-3.68-5.22-.76L12 3.75Z"></path>
</svg>
<span className="font-medium">4.9/5 estrelas</span>
</div>
<span className="h-[1px] w-6 bg-slate-600/60"></span>
<span className="text-slate-400">+10.000 mentes transformadas</span>
</div>


<div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-8 py-3 text-sm sm:text-base font-semibold text-slate-950 shadow-[0_0_24px_rgba(129,140,248,0.75)] transition hover:shadow-[0_0_40px_rgba(129,140,248,0.95)]" href="https://pay.kiwify.com.br/Zfyn2Er">
              QUERO ACESSAR AGORA
              <svg className="ml-2 h-4 w-4 stroke-slate-950 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>


<a className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-950/40 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 hover:border-cyan-400/60 hover:bg-slate-900/80 transition" href="#como-funciona">
              Ver como funciona
            </a>
</div>

<p className="text-[0.75rem] sm:text-xs text-slate-400">
            Acesso vitalício • Comece hoje e sinta sua mente renovar em até 7 dias.
          </p>
</div>


<div className="relative mx-auto mt-4 flex max-w-sm flex-1 justify-center lg:mt-0">

<div className="absolute inset-0 -top-6 -z-10 translate-y-4 blur-3xl">
<div className="mx-auto h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-cyan-400/40 opacity-70"></div>
</div>

<div className="relative aspect-[9/18] w-56 sm:w-64 rounded-[2rem] border border-slate-600/80 bg-slate-950/80 p-2 shadow-[0_25px_60px_rgba(15,23,42,0.9)]">
<div className="h-full w-full rounded-[1.6rem] border border-slate-700/70 bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-slate-950/95 p-3 flex flex-col">

<div className="mb-3 flex items-center justify-between text-[0.7rem] text-slate-400">
<span className="rounded-full bg-slate-800/80 px-2 py-0.5">Guiada</span>
<span>01:45 • Mind Reset</span>
</div>

<div className="mb-3 flex-1">
<div className="relative h-full w-full overflow-hidden rounded-2xl border border-indigo-400/30 bg-gradient-to-br from-slate-900 via-indigo-900/80 to-slate-950">
<div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.35),_transparent_45%)]"></div>
<div className="relative flex h-full flex-col items-center justify-center">
<span className="mb-1 text-xs font-medium tracking-tight text-cyan-100/90">Faixa 01</span>
<p className="mb-1 text-sm font-semibold tracking-tight text-slate-50">Ansiedade Zero</p>
<p className="text-[0.65rem] text-slate-300/90">
                      Respiração guiada + gatilhos auditivos calmantes
                    </p>
</div>
</div>
</div>

<div className="mt-auto space-y-3">

<div className="flex flex-col gap-1">
<div className="relative h-1.5 w-full rounded-full bg-slate-800/90">
<div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 shadow-[0_0_10px_rgba(45,212,191,0.7)]"></div>
<div className="absolute -top-1.5 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.9)] ring-2 ring-cyan-400/90"></div>
</div>
<div className="flex justify-between text-[0.6rem] text-slate-400">
<span>01:45</span>
<span>05:10</span>
</div>
</div>

<div className="flex items-center justify-between">

<button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 text-slate-200 hover:text-cyan-300" type="button">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 19 2 12l9-7v14Z"></path>
<path d="m22 19-9-7 9-7v14Z"></path>
</svg>
</button>

<button className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-400 via-cyan-400 to-indigo-400 text-slate-950 shadow-[0_0_20px_rgba(34,197,235,0.85)]" type="button">
<svg className="ml-0.5 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 4v16l13-8L7 4Z"></path>
</svg>
</button>

<button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 text-slate-200 hover:text-cyan-300" type="button">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m13 5 9 7-9 7V5Z"></path>
<path d="M2 5v14l9-7L2 5Z"></path>
</svg>
</button>
</div>

<div className="flex flex-wrap gap-1.5 text-[0.6rem]">
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-emerald-300">Ansiedade</span>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-cyan-300">Sono leve</span>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-violet-300">Clareza mental</span>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="mb-10">
<div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/95 px-4 py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center shadow-[0_0_16px_rgba(34,197,235,0.9)]">
<span className="text-[0.65rem] font-semibold text-slate-950 tracking-tight">7D</span>
</div>
<p className="text-xs sm:text-sm text-slate-200">
              Teste o <span className="text-emerald-300">reset mental em 7 dias</span> com garantia total.
            </p>
</div>
<a className="mt-1 inline-flex items-center justify-center rounded-full bg-slate-100/90 px-4 py-1.5 text-[0.75rem] font-semibold text-slate-950 shadow-sm shadow-emerald-400/40 transition hover:bg-white sm:mt-0" href="#oferta">
            Ver oferta completa
          </a>
</div>
</section>


<section className="mb-12" id="dor">


<div className="mb-5 flex flex-col gap-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
            Você sente que sua mente<br className="hidden sm:block"/>
            está <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-amber-200 bg-clip-text text-transparent">sempre cansada?</span>
</h2>
<p className="text-base sm:text-lg text-slate-300">
            Se qualquer uma dessas situações parece a sua rotina, sua mente está em <span className="text-emerald-300">modo alerta permanente</span> — e isso é exaustivo.
          </p>
</div>

<div className="flex gap-3 overflow-x-auto pb-3 scrollbar-none">

<article className="min-w-[12rem] max-w-[14rem] flex-1 rounded-2xl border border-slate-700/80 bg-slate-950/70 bg-clip-padding p-4 backdrop-blur-xl shadow-md shadow-slate-950/70">
<div className="mb-3 flex items-center gap-2">

<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 text-cyan-300">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6c-1.1-2-4.5-2-5.5 0C4 6 3 7 3 8.5S4 11 5 11c-1.5 1-1.5 3 0 4-1 0-2 1-2 2.5S4 20 5.5 20C7 22 9.5 22 11 20c1.1 2 4.5 2 5.5 0C20 20 21 19 21 17.5S20 15 19 15c1.5-1 1.5-3 0-4 1 0 2-1 2-2.5S20 4 18.5 4C17 2 14.5 2 13 4"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Mente que não desliga</h3>
</div>
<p className="text-sm text-slate-300">
              Overthinking, diálogos mentais infinitos e dificuldade de relaxar até nos poucos minutos livres.
            </p>
</article>

<article className="min-w-[12rem] max-w-[14rem] flex-1 rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4 backdrop-blur-xl shadow-md shadow-slate-950/70">
<div className="mb-3 flex items-center gap-2">

<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 text-rose-300">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14.5 12 21l-7-6.5a4.5 4.5 0 0 1 0-6.4 4.59 4.59 0 0 1 6.49 0L12 8l.51-.51a4.59 4.59 0 0 1 6.49 0 4.5 4.5 0 0 1 0 6.4Z"></path>
<path d="M12 8 10.5 9.5 12 12l-1.5 2.5L12 16"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Conflitos &amp; mágoas</h3>
</div>
<p className="text-sm text-slate-300">
              Replays de discussões, ressentimentos antigos e peso emocional que não vai embora.
            </p>
</article>

<article className="min-w-[12rem] max-w-[14rem] flex-1 rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4 backdrop-blur-xl shadow-md shadow-slate-950/70">
<div className="mb-3 flex items-center gap-2">

<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 text-indigo-300">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Insônia &amp; cansaço crônico</h3>
</div>
<p className="text-sm text-slate-300">
              Corpo exausto, mente ligada no máximo. Você acorda cansado e vive no modo sobrevivência.
            </p>
</article>

<article className="min-w-[12rem] max-w-[14rem] flex-1 rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4 backdrop-blur-xl shadow-md shadow-slate-950/70">
<div className="mb-3 flex items-center gap-2">

<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 text-amber-300">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v12"></path>
<path d="M17 9H9.5a2.5 2.5 0 0 0 0 5H14a2.5 2.5 0 0 1 0 5H6"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Estresse financeiro</h3>
</div>
<p className="text-sm text-slate-300">
              Preocupação constante com dinheiro, bloqueios criativos e medo de não dar conta.
            </p>
</article>

<article className="min-w-[12rem] max-w-[14rem] flex-1 rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4 backdrop-blur-xl shadow-md shadow-slate-950/70">
<div className="mb-3 flex items-center gap-2">

<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 text-rose-300">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12" y1="16" y2="16"></line>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Ansiedade &amp; medos</h3>
</div>
<p className="text-sm text-slate-300">
              Taquicardia, sudorese, medo de falhar e sensação constante de estar atrasado na vida.
            </p>
</article>
</div>
</section>


<section className="mb-12">
<div className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-slate-800/90 bg-slate-950/80 px-4 py-4 sm:flex-row sm:items-center">
<p className="text-sm sm:text-base text-slate-200">
            Não precisa mudar sua rotina. Comece com <span className="text-emerald-300">apenas 5 minutos</span> antes de dormir.
          </p>
<a className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 px-5 py-2 text-xs sm:text-sm font-semibold text-slate-950 shadow-[0_0_18px_rgba(34,197,235,0.75)] hover:shadow-[0_0_26px_rgba(34,197,235,0.95)] transition" href="#solucao">
            Ver como as 101 meditações vão te ajudar
          </a>
</div>
</section>

<section className="mb-14" id="solucao">
<div className="grid gap-8 lg:grid-cols-[1.2fr,1fr] lg:items-start">

<div>
<h2 className="mb-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
              O “Spotify da Cura Emocional”<br className="hidden sm:block"/>
              em formato simples e guiado.
            </h2>
<p className="mb-4 text-base sm:text-lg text-slate-300">
              O <span className="text-emerald-300">101 Meditações</span> é um pack completo de áudios que atuam diretamente na sua
              biologia cerebral: combinando respiração guiada, sugestões mentais e trilhas binaurais específicas
              para reduzir cortisol, aumentar foco e criar novos padrões emocionais.
            </p>


<div className="mb-5 rounded-2xl border border-indigo-500/50 bg-slate-950/80 p-4 shadow-[0_0_30px_rgba(79,70,229,0.35)]">
<h3 className="mb-3 text-sm sm:text-base font-semibold tracking-tight text-indigo-100">
                Dentro do 101 Meditações, você encontra:
              </h3>
<ul className="space-y-3 text-sm sm:text-base text-slate-200">
<li className="flex items-start gap-2">
<div className="mt-0.5 rounded-full bg-slate-900/90 p-1 text-cyan-300">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5Z"></path>
<path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5Z"></path>
</svg>
</div>
<div>
<p className="font-medium text-slate-50">🎧 101 Áudios Guiados</p>
<p className="text-xs sm:text-sm text-slate-300">
                      Sessões curtas e médias para ansiedade, foco, autoestima, relacionamentos, sono, medos
                      e muito mais.
                    </p>
</div>
</li>
<li className="flex items-start gap-2">
<div className="mt-0.5 rounded-full bg-slate-900/90 p-1 text-violet-300">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9a10 10 0 0 1 4.5-4"></path>
<path d="M2 15a10 10 0 0 0 4.5 4"></path>
<path d="M22 9a10 10 0 0 0-4.5-4"></path>
<path d="M22 15a10 10 0 0 1-4.5 4"></path>
<path d="M8.5 8.5a5 5 0 0 1 7 0"></path>
<path d="M8.5 15.5a5 5 0 0 0 7 0"></path>
</svg>
</div>
<div>
<p className="font-medium text-slate-50">🌌 Reprogramação Mental</p>
<p className="text-xs sm:text-sm text-slate-300">
                      Trilhas binaurais para foco, produtividade, calma, criatividade e resiliência emocional.
                    </p>
</div>
</li>
<li className="flex items-start gap-2">
<div className="mt-0.5 rounded-full bg-slate-900/90 p-1 text-emerald-300">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20c-1.5-1-3.5-1.5-6-1.5-1 0-2 .17-3 .5V5c1-.33 2-.5 3-.5 2.5 0 4.5.5 6 1.5"></path>
<path d="M12 20c1.5-1 3.5-1.5 6-1.5 1 0 2 .17 3 .5V5c-1-.33-2-.5-3-.5-2.5 0-4.5.5-6 1.5"></path>
</svg>
</div>
<div>
<p className="font-medium text-slate-50">📚 Bônus Premium</p>
<p className="text-xs sm:text-sm text-slate-300">
                      Audiobooks de desenvolvimento pessoal e áudios extras para disciplina, prosperidade e
                      clareza mental.
                    </p>
</div>
</li>
</ul>
</div>


<a className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-2 text-xs sm:text-sm font-medium text-slate-100 hover:border-emerald-400/70 hover:bg-slate-900/80 transition" href="#beneficios">
              Ver os benefícios práticos no seu dia
              <svg className="h-3.5 w-3.5 stroke-emerald-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>


<div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 backdrop-blur-xl shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
<div className="mb-3 flex items-center justify-between">
<div>
<p className="text-xs font-medium tracking-tight text-slate-400">Demo visual</p>
<p className="text-sm font-semibold tracking-tight text-slate-50">Faixa 01 — Ansiedade Zero</p>
</div>
<span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[0.7rem] text-emerald-300 border border-emerald-400/40">
                Reset rápido
              </span>
</div>
<div className="relative mb-4 overflow-hidden rounded-xl border border-slate-700/80 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 p-4">
<div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.7),_transparent_62%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.6),_transparent_55%)]"></div>
<div className="relative">
<p className="mb-1 text-xs font-medium text-indigo-200">Modo: Respiração + Sugestões</p>
<p className="mb-2 text-sm font-semibold tracking-tight text-slate-50">
                  Você vai aprender a desligar o modo “alerta” do seu cérebro em poucos minutos.
                </p>
<p className="text-xs text-slate-200">
                  Ideal para: crises de ansiedade leves, pressão no peito, pensamentos acelerados antes de dormir.
                </p>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between text-[0.7rem] text-slate-400">
<span>Duração: 7 min</span>
<span>Nível: Iniciante</span>
</div>
<div className="flex flex-wrap gap-1.5 text-[0.65rem]">
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-emerald-300">Ansiedade</span>
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-cyan-300">Respiração</span>
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-violet-300">Reprogramação</span>
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-amber-300">Sono</span>
</div>
</div>
</div>
</div>
</section>

<section className="mb-14" id="beneficios">
<div className="mb-5 flex flex-col gap-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
            Resultados que você <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-amber-200 bg-clip-text text-transparent">sente no corpo</span>
            e percebe na rotina.
          </h2>
<p className="text-base sm:text-lg text-slate-300">
            Em poucos dias, seu sistema nervoso aprende um novo padrão: de alerta constante para <span className="text-emerald-300">calma ativa</span>.
          </p>
</div>

<div className="grid gap-4 sm:grid-cols-2">

<article className="relative overflow-hidden rounded-2xl border border-emerald-400/40 bg-gradient-to-br from-slate-950 via-slate-950/95 to-slate-900/95 p-4 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
<div className="absolute -top-10 -right-8 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl"></div>
<div className="relative flex items-start gap-3">
<div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-300/60">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8h7a2 2 0 1 0-2-2"></path>
<path d="M13 16H4a2 2 0 1 0 2 2"></path>
<path d="M18 12H9a2 2 0 1 1 2-2"></path>
<path d="M19 16a2 2 0 1 1-2 2"></path>
</svg>
</div>
<div>
<h3 className="mb-1 text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                  Detox de Ansiedade
                </h3>
<p className="text-sm text-slate-200">
                  Sinta o alívio imediato da pressão no peito, da mente acelerada e da sensação de estar sempre devendo algo ao mundo.
                </p>
</div>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl border border-indigo-400/40 bg-gradient-to-br from-slate-950 via-slate-950/95 to-slate-900/95 p-4 shadow-[0_0_30px_rgba(79,70,229,0.35)]">
<div className="absolute -top-10 -right-8 h-24 w-24 rounded-full bg-indigo-400/10 blur-2xl"></div>
<div className="relative flex items-start gap-3">
<div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-400/10 text-indigo-300 border border-indigo-300/60">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
<path d="M17 4a2 2 0 0 1 2 2"></path>
<path d="M19 4 17 2"></path>
<path d="M19 4 21 2"></path>
</svg>
</div>
<div>
<h3 className="mb-1 text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                  Sono REM Profundo
                </h3>
<p className="text-sm text-slate-200">
                  Durma mais rápido, acorde renovado e reduza os despertares noturnos que esgotam sua energia e imunidade.
                </p>
</div>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-slate-950 via-slate-950/95 to-slate-900/95 p-4 shadow-[0_0_30px_rgba(34,197,235,0.35)]">
<div className="absolute -top-10 -right-8 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl"></div>
<div className="relative flex items-start gap-3">
<div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-300/60">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
</svg>
</div>
<div>
<h3 className="mb-1 text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                  Blindagem Emocional
                </h3>
<p className="text-sm text-slate-200">
                  Pare de reagir no impulso. Crie um espaço interno entre o que acontece e como você responde — com sabedoria.
                </p>
</div>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl border border-amber-400/40 bg-gradient-to-br from-slate-950 via-slate-950/95 to-slate-900/95 p-4 shadow-[0_0_30px_rgba(245,158,11,0.35)]">
<div className="absolute -top-10 -right-8 h-24 w-24 rounded-full bg-amber-400/10 blur-2xl"></div>
<div className="relative flex items-start gap-3">
<div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/10 text-amber-300 border border-amber-300/60">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
</div>
<div>
<h3 className="mb-1 text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                  Foco &amp; Confiança
                </h3>
<p className="text-sm text-slate-200">
                  Produza mais em menos tempo, sem se sabotar. A mente calma é a mente que executa com clareza e consistência.
                </p>
</div>
</div>
</article>
</div>
</section>


<section className="mb-14">
<div className="flex flex-col gap-3 rounded-2xl border border-slate-800/90 bg-slate-950/90 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<p className="text-sm sm:text-base text-slate-200">
              Não é mais um curso teórico. É só <span className="text-cyan-300">dar play</span> e seguir a voz.
            </p>
<p className="text-xs sm:text-sm text-slate-400">
              Ideal para quem está cansado demais para pensar em “mais uma coisa para fazer”.
            </p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-slate-100/95 px-5 py-2 text-xs sm:text-sm font-semibold text-slate-900 shadow-sm shadow-slate-50/40 hover:bg-white" href="#como-funciona">
            Ver o passo a passo
          </a>
</div>
</section>


<section className="mb-14" id="como-funciona">
<div className="mb-5">
<h2 className="mb-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
            Como o reset mental acontece<br className="hidden sm:block"/>
            em <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-amber-200 bg-clip-text text-transparent">3 passos simples</span>.
          </h2>
<p className="text-base sm:text-lg text-slate-300">
            Você não precisa acreditar, precisa apenas seguir o processo. Seu cérebro faz o resto.
          </p>
</div>

<ol className="relative space-y-6">
<div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-emerald-400/60 via-cyan-400/40 to-indigo-400/60 sm:block"></div>

<li className="relative flex gap-4">
<div className="hidden sm:flex">
<div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 border border-emerald-400/70 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.7)]">
<span className="text-xs font-semibold">1</span>
</div>
</div>
<div className="flex-1 rounded-2xl border border-slate-800/90 bg-slate-950/85 p-4">
<div className="mb-2 flex items-center gap-2 sm:hidden">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border border-emerald-400/70 text-emerald-300">
<span className="text-[0.7rem] font-semibold">1</span>
</div>
<span className="text-xs font-medium text-emerald-200">Escolha seu humor</span>
</div>
<h3 className="mb-1 text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                1. Escolha o seu humor do momento
              </h3>
<p className="mb-2 text-sm text-slate-200">
                Abra o 101 Meditações e selecione um áudio baseado em como você está se sentindo: ansioso,
                sem foco, magoado, exausto, inseguro ou travado.
              </p>
<p className="text-xs sm:text-sm text-slate-400">
                Você não precisa saber qual técnica usar. Basta nomear o que você sente e escolher a faixa
                recomendada.
              </p>
</div>
</li>

<li className="relative flex gap-4">
<div className="hidden sm:flex">
<div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 border border-cyan-400/70 text-cyan-300 shadow-[0_0_12px_rgba(34,197,235,0.7)]">
<span className="text-xs font-semibold">2</span>
</div>
</div>
<div className="flex-1 rounded-2xl border border-slate-800/90 bg-slate-950/85 p-4">
<div className="mb-2 flex items-center gap-2 sm:hidden">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border border-cyan-400/70 text-cyan-300">
<span className="text-[0.7rem] font-semibold">2</span>
</div>
<span className="text-xs font-medium text-cyan-200">Dê o play</span>
</div>
<h3 className="mb-1 text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                2. Coloque os fones e dê o play
              </h3>
<p className="mb-2 text-sm text-slate-200">
                Deite, sente ou até use enquanto está no transporte. A voz guia tudo: respiração, foco,
                imagens mentais e relaxamento muscular.
              </p>
<p className="text-xs sm:text-sm text-slate-400">
                Mesmo se você “não conseguir meditar”, o áudio conduz seu corpo e sua mente passo a passo.
              </p>
</div>
</li>

<li className="relative flex gap-4">
<div className="hidden sm:flex">
<div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 border border-amber-400/70 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.7)]">
<span className="text-xs font-semibold">3</span>
</div>
</div>
<div className="flex-1 rounded-2xl border border-slate-800/90 bg-slate-950/85 p-4">
<div className="mb-2 flex items-center gap-2 sm:hidden">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border border-amber-400/70 text-amber-300">
<span className="text-[0.7rem] font-semibold">3</span>
</div>
<span className="text-xs font-medium text-amber-200">Reset Mental</span>
</div>
<h3 className="mb-1 text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                3. Sinta o reset químico acontecer
              </h3>
<p className="mb-2 text-sm text-slate-200">
                Em poucos minutos, sua respiração desacelera, seus músculos soltam a tensão e sua mente entra
                em ondas cerebrais de relaxamento profundo.
              </p>
<p className="text-xs sm:text-sm text-slate-400">
                Você volta para o seu dia com outra energia: mais calmo, mais leve e com decisões muito mais
                claras.
              </p>
</div>
</li>
</ol>
</section>

<section className="mb-14" id="depoimentos">
<div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="mb-1 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
              Pessoas reais, <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-amber-200 bg-clip-text text-transparent">resultados concretos</span>.
            </h2>
<p className="text-base sm:text-lg text-slate-300">
              Depoimentos de quem decidiu cuidar da mente com um método direto e prático.
            </p>
</div>
<p className="text-xs sm:text-sm text-slate-400">
            Dados internos: 87% relatam melhora em sono, foco ou ansiedade nos primeiros 10 dias.
          </p>
</div>
<div className="grid gap-4 sm:grid-cols-3">

<article className="flex flex-col rounded-2xl border border-slate-800/90 bg-slate-950/85 p-4">
<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 text-slate-950 text-xs font-semibold tracking-tight">
                  L
                </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-50">Letícia, 27 anos</span>
<span className="text-[0.65rem] text-slate-400">Designer • Burnout Digital</span>
</div>
</div>
<div className="flex items-center gap-0.5 text-amber-300">
<svg className="h-3 w-3" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.75 9.47 8.87l-5.22.76 3.78 3.68-.89 5.19L12 16.77l4.86 2.56-.89-5.19 3.78-3.68-5.22-.76L12 3.75Z"></path>
</svg>
<span className="text-[0.7rem] font-medium">4.9</span>
</div>
</div>
<p className="mb-2 text-sm text-slate-200">
              “Na primeira noite que usei eu chorei de alívio. A sensação de nó no peito diminuiu
              <span className="text-emerald-300">em menos de 10 minutos</span>. Hoje uso toda vez que sinto que vou surtar.”
            </p>
<p className="mt-auto text-[0.7rem] text-slate-400">
              Faixas favoritas: Ansiedade Zero, Descompressão depois do trabalho.
            </p>
</article>

<article className="flex flex-col rounded-2xl border border-slate-800/90 bg-slate-950/85 p-4">
<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-sky-400 text-slate-950 text-xs font-semibold tracking-tight">
                  R
                </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-50">Rafael, 34 anos</span>
<span className="text-[0.65rem] text-slate-400">Empreendedor • Insônia</span>
</div>
</div>
<div className="flex items-center gap-0.5 text-amber-300">
<svg className="h-3 w-3" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.75 9.47 8.87l-5.22.76 3.78 3.68-.89 5.19L12 16.77l4.86 2.56-.89-5.19 3.78-3.68-5.22-.76L12 3.75Z"></path>
</svg>
<span className="text-[0.7rem] font-medium">5.0</span>
</div>
</div>
<p className="mb-2 text-sm text-slate-200">
              “Eu demorava mais de 1h para pegar no sono. Hoje,
              <span className="text-emerald-300">não chego na metade do áudio</span>. Acordo com a sensação de ter dormido de verdade.”
            </p>
<p className="mt-auto text-[0.7rem] text-slate-400">
              Faixas favoritas: Sono Profundo, Desligar o Pensamento Noturno.
            </p>
</article>

<article className="flex flex-col rounded-2xl border border-slate-800/90 bg-slate-950/85 p-4">
<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-rose-400 text-slate-950 text-xs font-semibold tracking-tight">
                  C
                </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-50">Camila, 22 anos</span>
<span className="text-[0.65rem] text-slate-400">Estudante • Ansiedade</span>
</div>
</div>
<div className="flex items-center gap-0.5 text-amber-300">
<svg className="h-3 w-3" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.75 9.47 8.87l-5.22.76 3.78 3.68-.89 5.19L12 16.77l4.86 2.56-.89-5.19 3.78-3.68-5.22-.76L12 3.75Z"></path>
</svg>
<span className="text-[0.7rem] font-medium">4.8</span>
</div>
</div>
<p className="mb-2 text-sm text-slate-200">
              “Sempre achei meditação algo ‘místico demais’. Aqui é
              <span className="text-emerald-300">simples, direto e científico</span>. Parece que alguém segura minha mão na hora da crise.”
            </p>
<p className="mt-auto text-[0.7rem] text-slate-400">
              Faixas favoritas: Acalmar antes da prova, Segurança Interna.
            </p>
</article>
</div>
</section>


<section className="mb-14">
<div className="relative overflow-hidden rounded-2xl border border-amber-400/40 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-4 py-4 shadow-[0_0_30px_rgba(245,158,11,0.35)]">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_rgba(253,224,71,0.5),_transparent_55%)]"></div>
<div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<p className="text-sm sm:text-base font-semibold tracking-tight text-amber-100">
                Agora é a melhor hora para cuidar da sua mente.
              </p>
<p className="text-xs sm:text-sm text-slate-200">
                Oferta especial por tempo limitado para novos membros do 101 Meditações.
              </p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-2 text-xs sm:text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(250,204,21,0.9)] hover:bg-amber-200" href="#oferta">
              Ver oferta irresistível agora
            </a>
</div>
</div>
</section>

<section className="mb-14" id="oferta">
<div className="relative overflow-hidden rounded-3xl border border-amber-400/40 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 px-5 py-6 shadow-[0_0_44px_rgba(250,204,21,0.35)]">

<div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.75),_transparent_60%)] opacity-70 blur-3xl"></div>
<div className="relative grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">

<div>
<h2 className="mb-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Acesso vitalício ao <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-emerald-200 bg-clip-text text-transparent">101 Meditações</span>.
              </h2>
<p className="mb-4 text-base sm:text-lg text-slate-200">
                Uma única decisão hoje para ter, para sempre, um painel de controle emocional no bolso.
              </p>

<div className="mb-4">
<div className="mb-1 flex items-end gap-2">
<span className="text-xs text-rose-300/80 line-through">De: R$ 97,90</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl sm:text-4xl font-semibold tracking-tight text-amber-300">
                    12x de R$ 4,70
                  </span>
<span className="text-xs sm:text-sm text-amber-100/90">
                    ou R$ 47,00 à vista
                  </span>
</div>
<p className="mt-1 text-xs sm:text-sm text-slate-200">
                  Menos do que um café por semana para ter uma mente mais leve, focada e em paz.
                </p>
</div>

<div className="mb-4 grid gap-2 text-sm sm:text-base text-slate-100">

<div className="flex items-start gap-2">
<span className="mt-0.5 rounded-full bg-emerald-400/20 p-0.5 text-emerald-300">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span>101 meditações guiadas para ansiedade, sono, foco, relacionamentos e autoestima.</span>
</div>
<div className="flex items-start gap-2">
<span className="mt-0.5 rounded-full bg-emerald-400/20 p-0.5 text-emerald-300">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span>Atualizações futuras inclusas, sem custo extra.</span>
</div>
<div className="flex items-start gap-2">
<span className="mt-0.5 rounded-full bg-emerald-400/20 p-0.5 text-emerald-300">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span>Acesso vitalício em qualquer dispositivo com internet.</span>
</div>
<div className="flex items-start gap-2">
<span className="mt-0.5 rounded-full bg-emerald-400/20 p-0.5 text-emerald-300">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span>Bônus: Audiobooks e sessões especiais para prosperidade, disciplina e clareza.</span>
</div>
</div>

<div className="mb-4 flex flex-wrap items-center gap-3">

<div className="flex items-center gap-2 rounded-full border border-amber-300/60 bg-slate-950/90 px-3 py-1">
<div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-yellow-400 text-slate-950 shadow-[0_0_16px_rgba(250,204,21,0.9)]">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
<path d="M9 12.5 11 14l4-4"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-[0.75rem] font-semibold tracking-tight text-amber-100">Risco Zero - 7 Dias</span>
<span className="text-[0.65rem] text-amber-100/80">Se não amar, devolvemos 100% do valor.</span>
</div>
</div>
</div>


<a className="group inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-yellow-300 to-emerald-300 px-8 py-3 text-sm sm:text-base font-semibold text-slate-950 shadow-[0_0_32px_rgba(250,204,21,0.95)] transition hover:shadow-[0_0_44px_rgba(250,204,21,1)]" href="https://pay.kiwify.com.br/Zfyn2Er">
                QUERO MEU ACESSO IMEDIATO
                <svg className="ml-2 h-4 w-4 stroke-slate-950 group-hover:translate-x-0.5 transition-transform" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<p className="mt-2 text-[0.7rem] text-slate-200">
                Pagamento 100% seguro • Acesso enviado automaticamente para o seu e-mail.
              </p>
</div>

<div className="rounded-2xl border border-slate-800/90 bg-slate-950/90 p-4">
<p className="mb-2 text-xs font-medium tracking-tight text-slate-400">
                Em menos de 2 minutos:
              </p>
<ol className="mb-3 space-y-2 text-xs sm:text-sm text-slate-100">
<li className="flex gap-2">
<span className="mt-0.5 h-4 w-4 rounded-full bg-slate-800 text-[0.65rem] flex items-center justify-center text-slate-200">1</span>
<span>Você preenche seus dados e confirma o pagamento.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 h-4 w-4 rounded-full bg-slate-800 text-[0.65rem] flex items-center justify-center text-slate-200">2</span>
<span>Recebe um e-mail com login e senha da área de membros.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 h-4 w-4 rounded-full bg-slate-800 text-[0.65rem] flex items-center justify-center text-slate-200">3</span>
<span>Dá play na primeira meditação e sente o efeito na prática.</span>
</li>
</ol>
<div className="mt-3 rounded-xl border border-emerald-400/40 bg-emerald-400/5 px-3 py-2 text-[0.7rem] text-emerald-100">
<span className="font-medium">Importante:</span> se em até 7 dias você sentir que não é para você,
                basta enviar um e-mail e devolvemos 100% do valor. Sem perguntas.
              </div>
</div>
</div>
</div>
</section>

<section className="mb-10" id="faq">
<div className="mb-5">
<h2 className="mb-1 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
            Dúvidas frequentes
          </h2>
<p className="text-base sm:text-lg text-slate-300">
            Tudo o que você precisa saber antes de dizer sim à sua mente.
          </p>
</div>

<div className="space-y-3">

<details className="group rounded-2xl border border-slate-800/90 bg-slate-950/85 p-3">
<summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm sm:text-base font-medium text-slate-100">
<span>Não tenho tempo. Quanto tempo eu preciso por dia?</span>
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-slate-300 group-open:bg-emerald-400 group-open:text-slate-950">
<svg className="h-3 w-3 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="mt-2 text-sm text-slate-300">
              Comece com <span className="text-emerald-300">5 a 10 minutos</span> por dia. Você pode usar:
              antes de dormir, ao acordar ou em pausas rápidas no dia. Não é um curso longo, é um botão de
              reset para momentos estratégicos.
            </div>
</details>

<details className="group rounded-2xl border border-slate-800/90 bg-slate-950/85 p-3">
<summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm sm:text-base font-medium text-slate-100">
<span>E se eu não conseguir “meditar direito”?</span>
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-slate-300 group-open:bg-emerald-400 group-open:text-slate-950">
<svg className="h-3 w-3 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="mt-2 text-sm text-slate-300">
              O 101 Meditações foi feito <span className="text-emerald-300">para quem não consegue meditar</span>. A condução é guiada
              passo a passo, com foco em respiração e percepção corporal. Não existe “certo ou errado”, existe
              apenas seguir a voz e deixar o processo agir.
            </div>
</details>

<details className="group rounded-2xl border border-slate-800/90 bg-slate-950/85 p-3">
<summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm sm:text-base font-medium text-slate-100">
<span>Como eu recebo o acesso? É um app?</span>
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-slate-300 group-open:bg-emerald-400 group-open:text-slate-950">
<svg className="h-3 w-3 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="mt-2 text-sm text-slate-300">
              Após a confirmação do pagamento, você recebe um e-mail com
              <span className="text-emerald-300">login e senha da área de membros</span>. Lá você acessa todos os áudios pela internet,
              em qualquer dispositivo (celular, tablet, computador).
            </div>
</details>

<details className="group rounded-2xl border border-slate-800/90 bg-slate-950/85 p-3">
<summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm sm:text-base font-medium text-slate-100">
<span>Em quanto tempo começo a sentir diferença?</span>
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-slate-300 group-open:bg-emerald-400 group-open:text-slate-950">
<svg className="h-3 w-3 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="mt-2 text-sm text-slate-300">
              Muitos alunos relatam alívio de ansiedade e melhora no sono
              <span className="text-emerald-300">logo nas primeiras sessões</span>. Para resultados profundos de foco, autoestima e
              estabilidade emocional, recomendamos usar de 7 a 21 dias seguidos.
            </div>
</details>

<details className="group rounded-2xl border border-slate-800/90 bg-slate-950/85 p-3">
<summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm sm:text-base font-medium text-slate-100">
<span>E se eu não gostar do conteúdo?</span>
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-slate-300 group-open:bg-emerald-400 group-open:text-slate-950">
<svg className="h-3 w-3 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="mt-2 text-sm text-slate-300">
              Você tem <span className="text-emerald-300">7 dias de garantia incondicional</span>. Se sentir que não é para você, basta
              enviar um e-mail e devolvemos 100% do valor. Simples, direto e sem burocracia.
            </div>
</details>
</div>
</section>

<footer className="mt-6 border-t border-slate-800/80 pt-4">
<div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
<div className="flex items-center gap-2 text-[0.7rem] text-slate-500">
<span className="font-semibold tracking-tight text-slate-300">101 Meditações</span>
<span className="h-[1px] w-5 bg-slate-700"></span>
<span>Sua mente merece descanso.</span>
</div>
<a className="inline-flex items-center justify-center rounded-full border border-slate-700/90 bg-slate-950/90 px-4 py-1.5 text-[0.75rem] font-semibold text-slate-100 hover:border-emerald-400/80 hover:bg-slate-900/90 transition" href="https://pay.kiwify.com.br/Zfyn2Er">
            Fazer meu primeiro reset mental hoje
          </a>
</div>
</footer>
</main>
</div>

    </>
  );
}
