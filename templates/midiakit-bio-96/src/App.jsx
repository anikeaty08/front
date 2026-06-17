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



    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      
<div className="flex-1 bg-gradient-to-b from-violet-950 via-violet-900 to-violet-950">

<header className="w-full">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 lg:py-6 px-4 lg:px-6">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-400 via-violet-400 to-sky-400 flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
<span className="text-xs font-semibold tracking-tight text-slate-950">MK</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-base lg:text-lg font-semibold tracking-tight">MidiaKit.bio</span>
<span className="text-xs lg:text-sm text-violet-100/80">a central de carreira para artistas independentes</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-7 text-sm lg:text-base text-violet-100/80">
<a className="hover:text-white transition-colors" href="#artistas">Artistas</a>
<a className="hover:text-white transition-colors" href="#diferenca">Como funciona</a>
<a className="hover:text-white transition-colors" href="#planos">Planos</a>
<a className="hover:text-white transition-colors" href="#demo">Veja na prática</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden md:inline-flex items-center gap-2 text-xs lg:text-sm text-violet-100/90 hover:text-white transition-colors">
            Entrar
          </button>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-slate-950 text-xs lg:text-sm font-medium tracking-tight px-4 lg:px-5 py-2 shadow-lg shadow-fuchsia-500/40 hover:bg-violet-50 transition-colors" href="#planos">
            Criar Midiakit grátis
          </a>
</div>
</div>
</header>

<main>
<section className="max-w-6xl mx-auto px-4 lg:px-6 pt-8 lg:pt-16 pb-16 lg:pb-20">
<div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-center">

<div className="space-y-7 lg:space-y-8">
<div className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-400/40 px-3 py-1.5">
<span className="text-xs lg:text-sm text-fuchsia-100/90">Agenda e finanças automáticas, 24h por dia.</span>
</div>
<div className="space-y-4 lg:space-y-5">
<h1 className="text-3xl lg:text-5xl xl:text-6xl font-semibold tracking-tight">
                Sua bio deveria
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-violet-200 to-sky-300">
                  vender música, não
                  apenas listar links.
                </span>
</h1>
<p className="text-base lg:text-lg text-violet-100/90 max-w-xl">
                Junte seus shows, músicas, vídeos e links em uma página profissional que converte cliques em oportunidades reais.
              </p>
</div>
<div className="space-y-3">
<p className="text-sm lg:text-base text-violet-100/90">
                Usada por artistas que levam a carreira a sério.
              </p>
<div className="flex flex-wrap items-center gap-4 text-xs lg:text-sm text-violet-100/70">
<span className="inline-flex items-center justify-center rounded-full bg-violet-900/70 border border-violet-500/50 px-3 py-1">
                  Agenda &amp; finanças automáticas
                </span>
<span className="inline-flex items-center justify-center rounded-full bg-violet-900/70 border border-violet-500/50 px-3 py-1">
                  Página de MidiaKit em minutos
                </span>
</div>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 text-slate-950 text-sm lg:text-base font-medium tracking-tight px-6 lg:px-7 py-2.5 shadow-xl shadow-fuchsia-500/40 hover:from-fuchsia-300 hover:via-violet-300 hover:to-sky-300 transition-all" href="#planos">
                Criar página profissional
              </a>
<p className="text-xs lg:text-sm text-violet-100/80">
                Comece grátis. Leva menos de 5 minutos.
              </p>
</div>
</div>

<div className="relative">
<div className="absolute -top-6 -right-8 h-40 w-40 lg:h-56 lg:w-56 bg-fuchsia-500/30 rounded-full blur-3xl"></div>
<div className="absolute -bottom-10 -left-10 h-36 w-36 lg:h-48 lg:w-48 bg-sky-500/20 rounded-full blur-3xl"></div>
<div className="relative rounded-3xl border border-violet-600/60 bg-gradient-to-br from-violet-950/90 via-violet-900/90 to-slate-950/90 backdrop-blur-xl shadow-[0_32px_90px_rgba(15,23,42,0.95)] overflow-hidden">

<div className="flex items-center justify-between px-4 lg:px-5 py-3 border-b border-violet-700/70 bg-violet-950/80">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-rose-500/80"></span>
<span className="h-2 w-2 rounded-full bg-amber-400/80"></span>
<span className="h-2 w-2 rounded-full bg-emerald-400/80"></span>
</div>
<span className="text-xs lg:text-sm text-violet-100/70">midiakit.bio/seuartista</span>
</div>
<div className="flex items-center gap-1.5 text-[0.7rem] lg:text-xs text-fuchsia-100/90">
<span className="inline-flex items-center gap-1 rounded-full bg-fuchsia-500/15 border border-fuchsia-400/50 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
                    Ao vivo
                  </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 p-4 lg:p-5">
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-fuchsia-400 via-violet-400 to-sky-400 flex items-center justify-center text-sm font-medium tracking-tight text-slate-950">
                      MK
                    </div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="text-sm lg:text-base font-medium tracking-tight">Seu Nome Artístico</span>
<span className="text-[0.7rem] lg:text-xs text-violet-100/80 border border-violet-600 rounded-full px-2 py-0.5">
                          Artista &amp; Produtor
                        </span>
</div>
<p className="text-xs lg:text-sm text-violet-100/70">
                        Página de MidiaKit com músicas, vídeos, agenda e links para tudo que importa em um só lugar.
                      </p>
</div>
</div>
<div className="rounded-2xl border border-violet-700 bg-violet-950/70 p-3 space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs lg:text-sm text-violet-100/90">Próximo show</span>
<span className="text-[0.7rem] lg:text-xs text-emerald-300 bg-emerald-500/10 rounded-full px-2 py-0.5">
                        Ingressos à venda
                      </span>
</div>
<div className="flex items-baseline justify-between gap-2">
<div className="flex flex-col">
<span className="text-sm lg:text-base font-medium tracking-tight">São Paulo, SP</span>
<span className="text-xs lg:text-sm text-violet-100/70">Casa Aurora — 25/07 · 21h</span>
</div>
<button className="inline-flex items-center justify-center rounded-full bg-fuchsia-500 text-[0.7rem] lg:text-xs font-medium tracking-tight text-slate-950 px-3 py-1.5 hover:bg-fuchsia-400 transition-colors">
                        Garantir ingresso
                      </button>
</div>
</div>
<div className="rounded-2xl border border-violet-700 bg-violet-950/70 p-3 space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs lg:text-sm text-violet-100/90">Principais links</span>
<span className="text-[0.7rem] lg:text-xs text-violet-100/60">Editáveis em tempo real</span>
</div>
<div className="grid grid-cols-2 gap-2 text-[0.7rem] lg:text-xs">
<button className="rounded-xl bg-violet-900/90 border border-violet-700 text-violet-50 py-2 px-2 text-left hover:bg-violet-800 transition-colors">
                        Novo single · Ouvir agora
                      </button>
<button className="rounded-xl bg-violet-900/90 border border-violet-700 text-violet-50 py-2 px-2 text-left hover:bg-violet-800 transition-colors">
                        Videoclipe oficial
                      </button>
<button className="rounded-xl bg-violet-900/90 border border-violet-700 text-violet-50 py-2 px-2 text-left hover:bg-violet-800 transition-colors">
                        Agenda completa
                      </button>
<button className="rounded-xl bg-violet-900/90 border border-violet-700 text-violet-50 py-2 px-2 text-left hover:bg-violet-800 transition-colors">
                        Contato para shows
                      </button>
</div>
</div>
</div>
<div className="space-y-4">
<div className="rounded-2xl border border-violet-700 bg-violet-950/80 p-3 space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs lg:text-sm text-violet-100/90">Finanças automáticas</span>
<span className="text-[0.7rem] lg:text-xs text-violet-100/70">Últimos 30 dias</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-xl lg:text-2xl font-semibold tracking-tight">R$ 18.700</span>
<span className="text-xs lg:text-sm text-emerald-300">+42%</span>
</div>
<div className="h-16 w-full rounded-xl bg-gradient-to-r from-fuchsia-500/10 via-violet-500/10 to-sky-500/10 relative overflow-hidden">
<div className="absolute inset-0 opacity-90 text-fuchsia-300">
<svg className="w-full h-full" viewbox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
<path d="M0 30 C20 18 30 22 45 15 C60 8 75 14 92 10 C110 6 125 18 140 11 C150 7 155 5 160 8" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
</div>
</div>
<div className="grid grid-cols-3 gap-2 text-[0.7rem] lg:text-xs text-violet-100/80">
<div className="rounded-lg bg-violet-900/80 px-2 py-1.5 flex flex-col gap-0.5">
<span className="text-violet-100/70">Shows</span>
<span className="font-medium tracking-tight">R$ 11.300</span>
</div>
<div className="rounded-lg bg-violet-900/80 px-2 py-1.5 flex flex-col gap-0.5">
<span className="text-violet-100/70">Royalties</span>
<span className="font-medium tracking-tight">R$ 4.200</span>
</div>
<div className="rounded-lg bg-violet-900/80 px-2 py-1.5 flex flex-col gap-0.5">
<span className="text-violet-100/70">Merch</span>
<span className="font-medium tracking-tight">R$ 3.200</span>
</div>
</div>
</div>
<div className="rounded-2xl border border-violet-700 bg-gradient-to-br from-violet-950 via-violet-900 to-slate-950 p-3 space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs lg:text-sm text-violet-50">Agenda inteligente</span>
<span className="text-[0.7rem] lg:text-xs text-violet-100/70">Sincronizada com sua bio</span>
</div>
<div className="space-y-2 text-[0.7rem] lg:text-xs text-violet-100/80">
<div className="flex items-center justify-between">
<span>Quinta · 21h · Live no YouTube</span>
<span className="text-emerald-300">Confirmado</span>
</div>
<div className="flex items-center justify-between">
<span>Sábado · 23h · Festival Aurora</span>
<span className="text-amber-300">Negociando</span>
</div>
<div className="flex items-center justify-between">
<span>Domingo · 18h · Podcast</span>
<span className="text-sky-300">Remoto</span>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-fuchsia-500/10 border border-fuchsia-400/70 text-xs lg:text-sm text-fuchsia-100 py-2 hover:bg-fuchsia-500/20 transition-all">
                      Marcar show pela página
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
<div className="flex items-center justify-between text-[0.7rem] lg:text-xs text-violet-100/70">
<span>Atualizado em tempo real, sem planilhas.</span>
<span>Um único link para tudo.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-violet-950 to-violet-900 border-y border-violet-800/60" id="artistas">
<div className="max-w-6xl mx-auto px-4 lg:px-6 py-10 lg:py-14 space-y-8">
<div className="text-center space-y-2">
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
              Usado por artistas que levam a carreira a sério.
            </h2>
<p className="text-base lg:text-lg text-violet-100/90">
              Quem já transformou a bio em uma vitrine profissional.
            </p>
</div>

<div className="flex flex-wrap items-center justify-center gap-6 text-sm lg:text-base text-violet-100/70">
<span className="px-4 py-1 rounded-full border border-violet-700 bg-violet-900/80">ARRUDA</span>
<span className="px-4 py-1 rounded-full border border-violet-700 bg-violet-900/80">ZATTELI</span>
<span className="px-4 py-1 rounded-full border border-violet-700 bg-violet-900/80">TRIBE</span>
<span className="px-4 py-1 rounded-full border border-violet-700 bg-violet-900/80">ARUÍRA</span>
<span className="px-4 py-1 rounded-full border border-violet-700 bg-violet-900/80">DIGUERA</span>
</div>

<div className="grid md:grid-cols-3 gap-4 lg:gap-5">
<div className="rounded-2xl bg-violet-950/90 border border-violet-700 p-4 space-y-3">
<p className="text-xs lg:text-sm text-violet-50">
                “Tive um aumento imediato de shows fechados. As produtoras finalmente conseguem ver tudo organizado em um só link.”
              </p>
<div className="flex flex-col text-[0.7rem] lg:text-xs text-violet-100/80">
<span className="font-medium tracking-tight">ARRUDA</span>
<span>DJ &amp; Produtor</span>
</div>
</div>
<div className="rounded-2xl bg-violet-950/90 border border-violet-700 p-4 space-y-3">
<p className="text-xs lg:text-sm text-violet-50">
                “O Midiakit salvou minha equipe. Agora nossa bio é praticamente o nosso site oficial, sem precisar programar nada.”
              </p>
<div className="flex flex-col text-[0.7rem] lg:text-xs text-violet-100/80">
<span className="font-medium tracking-tight">ZATTELI</span>
<span>DJ &amp; Produtor</span>
</div>
</div>
<div className="rounded-2xl bg-violet-950/90 border border-violet-700 p-4 space-y-3">
<p className="text-xs lg:text-sm text-violet-50">
                “As casas já chegam sabendo valores, estrutura e contato da equipe. Virou nosso cartão de visita oficial.”
              </p>
<div className="flex flex-col text-[0.7rem] lg:text-xs text-violet-100/80">
<span className="font-medium tracking-tight">TRIBE</span>
<span>DJ &amp; Produtor</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 lg:px-6 py-14 lg:py-20 space-y-10" id="diferenca">
<div className="text-center space-y-2">
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
            A diferença entre o amador e o profissional.
          </h2>
<p className="text-base lg:text-lg text-violet-100/90">
            O mesmo talento, resultados diferentes. O que muda é a forma como você se apresenta.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-4 lg:gap-6">

<div className="rounded-3xl bg-violet-950/80 border border-violet-800 p-4 lg:p-5 space-y-3">
<h3 className="text-lg lg:text-xl font-medium tracking-tight text-violet-50">O Jeito Amador</h3>
<ul className="space-y-2 text-xs lg:text-sm text-violet-100/80">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500"></span>
<span>Links e números soltos no WhatsApp.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500"></span>
<span>PDFs de MidiaKit desatualizados.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500"></span>
<span>Agenda em anotações de celular.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500"></span>
<span>Gestão financeira complicada e espalhada.</span>
</li>
</ul>
</div>

<div className="rounded-3xl bg-violet-950/95 border border-emerald-400/70 p-4 lg:p-5 space-y-3 shadow-[0_24px_60px_rgba(16,185,129,0.35)]">
<h3 className="text-lg lg:text-xl font-medium tracking-tight text-violet-50">O Jeito Profissional</h3>
<ul className="space-y-2 text-xs lg:text-sm text-violet-100/90">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Página de MidiaKit com músicas, vídeos e fotos.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Um endereço único facilmente compartilhável.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Agenda inteligente para shows, lives e conteúdos.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Finanças automáticas e visão clara da carreira.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 lg:px-6 pb-14 lg:pb-20 space-y-10">
<div className="text-center space-y-2">
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
            Profissionalismo em 3 passos.
          </h2>
<p className="text-base lg:text-lg text-violet-100/90">
            Sem planilhas, sem site complicado, sem precisar de equipe.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-4 lg:gap-6">
<div className="rounded-3xl bg-violet-950/90 border border-violet-800 p-4 lg:p-5 flex flex-col gap-3">
<div className="h-10 w-10 rounded-full bg-fuchsia-500/15 border border-fuchsia-400/70 flex items-center justify-center text-sm font-medium tracking-tight">
              1
            </div>
<h3 className="text-sm lg:text-base font-medium tracking-tight">1. Preencha.</h3>
<p className="text-xs lg:text-sm text-violet-100/80">
              Um formulário simples com suas informações principais: perfil, links, fotos, músicas e vídeos.
            </p>
</div>
<div className="rounded-3xl bg-violet-950/90 border border-violet-800 p-4 lg:p-5 flex flex-col gap-3">
<div className="h-10 w-10 rounded-full bg-fuchsia-500/15 border border-fuchsia-400/70 flex items-center justify-center text-sm font-medium tracking-tight">
              2
            </div>
<h3 className="text-sm lg:text-base font-medium tracking-tight">2. Publique.</h3>
<p className="text-xs lg:text-sm text-violet-100/80">
              Com um clique você gera sua página de MidiaKit profissional, pronta para ser usada na bio e nas propostas.
            </p>
</div>
<div className="rounded-3xl bg-violet-950/90 border border-violet-800 p-4 lg:p-5 flex flex-col gap-3">
<div className="h-10 w-10 rounded-full bg-fuchsia-500/15 border border-fuchsia-400/70 flex items-center justify-center text-sm font-medium tracking-tight">
              3
            </div>
<h3 className="text-sm lg:text-base font-medium tracking-tight">3. Conquiste.</h3>
<p className="text-xs lg:text-sm text-violet-100/80">
              Produtoras, casas e marcas conseguem enxergar seu potencial em segundos — e os convites começam a chegar.
            </p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 lg:px-6 pb-16 lg:pb-24 space-y-10" id="planos">
<div className="text-center space-y-2">
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
            Escolha seu plano. Comece de graça.
          </h2>
<p className="text-base lg:text-lg text-violet-100/90">
            Profissional desde o primeiro dia, com planos que crescem junto com a sua carreira.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-4 lg:gap-5">

<div className="rounded-3xl bg-violet-950/85 border border-violet-800 p-4 lg:p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div>
<h3 className="text-sm lg:text-base font-medium tracking-tight">Free</h3>
<p className="text-xs lg:text-sm text-violet-100/80">
                  Perfeito para começar. Teste o poder da página profissional.
                </p>
</div>
</div>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-xl lg:text-2xl font-semibold tracking-tight">R$ 0</span>
<span className="text-xs lg:text-sm text-violet-100/70">/mês</span>
</div>
<ul className="space-y-1.5 text-xs lg:text-sm text-violet-100/90 flex-1">
<li className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
                Página profissional com músicas e vídeos.
              </li>
<li className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
                Links principais destacados na bio.
              </li>
<li className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
                Agenda básica de shows.
              </li>
<li className="flex items-center gap-1.5 line-through text-violet-400/70">
<svg className="w-3.5 h-3.5 text-rose-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
                Controle avançado de finanças.
              </li>
</ul>
<div className="mt-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-violet-900 hover:bg-violet-800 border border-violet-700 text-xs lg:text-sm text-violet-50 py-2.5 transition-all">
                Começar grátis
              </button>
</div>
</div>

<div className="rounded-3xl bg-gradient-to-b from-violet-900 via-violet-950 to-slate-950 border border-fuchsia-400/80 p-4 lg:p-5 flex flex-col shadow-[0_32px_90px_rgba(244,114,182,0.45)] relative">
<span className="absolute -top-3 right-4 rounded-full bg-fuchsia-500 text-[0.7rem] lg:text-xs font-medium tracking-tight text-slate-950 px-3 py-1 shadow-md shadow-fuchsia-500/50">
              Mais popular
            </span>
<div className="flex items-center justify-between mb-3 mt-2">
<div>
<h3 className="text-sm lg:text-base font-medium tracking-tight">Pro</h3>
<p className="text-xs lg:text-sm text-violet-100/90">
                  Para quem vive de música e quer vender mais shows.
                </p>
</div>
</div>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-xl lg:text-2xl font-semibold tracking-tight">R$ 29</span>
<span className="text-xs lg:text-sm text-violet-100/80">/mês</span>
</div>
<ul className="space-y-1.5 text-xs lg:text-sm text-violet-50 flex-1">
<li className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
                Página profissional com músicas e vídeos ilimitados.
              </li>
<li className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
                Agenda de shows com confirmação automática.
              </li>
<li className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
                Dash de shows e insights da carreira.
              </li>
<li className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
                Agenda compartilhada com equipe.
              </li>
<li className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
                Finanças automatizadas por show.
              </li>
</ul>
<div className="mt-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 hover:from-fuchsia-300 hover:via-violet-300 hover:to-sky-300 text-xs lg:text-sm text-slate-950 font-medium tracking-tight py-2.5 transition-all">
                Assinar plano Pro
              </button>
<p className="mt-1 text-[0.7rem] lg:text-xs text-violet-100/80 text-center">
                Teste por 7 dias. Cancele quando quiser.
              </p>
</div>
</div>

<div className="rounded-3xl bg-violet-950/85 border border-violet-800 p-4 lg:p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div>
<h3 className="text-sm lg:text-base font-medium tracking-tight">Business</h3>
<p className="text-xs lg:text-sm text-violet-100/80">
                  Para selos, produtoras e escritórios que cuidam de vários artistas.
                </p>
</div>
</div>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-xl lg:text-2xl font-semibold tracking-tight">R$ 99</span>
<span className="text-xs lg:text-sm text-violet-100/70">/mês</span>
</div>
<ul className="space-y-1.5 text-xs lg:text-sm text-violet-100/90 flex-1">
<li className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
                Sessões multiartista para toda sua base.
              </li>
<li className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
                Acesso da equipe com permissões por função.
              </li>
<li className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
                Relatórios consolidados de agenda e finanças.
              </li>
</ul>
<div className="mt-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-violet-900 hover:bg-violet-800 border border-violet-700 text-xs lg:text-sm text-violet-50 py-2.5 transition-all">
                Agendar demonstração
              </button>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-violet-900 to-violet-950" id="demo">
<div className="max-w-6xl mx-auto px-4 lg:px-6 py-14 lg:py-20 flex flex-col items-center gap-10">
<div className="text-center space-y-2">
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
              Veja na prática.
            </h2>
<p className="text-base lg:text-lg text-violet-100/90">
              Como sua página vai aparecer para quem clicar na sua bio.
            </p>
</div>
<div className="relative">
<div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-fuchsia-500/30 blur-3xl"></div>
<div className="absolute -bottom-10 -right-16 h-40 w-40 rounded-full bg-sky-500/30 blur-3xl"></div>
<div className="relative h-96 w-52 sm:h-[28rem] sm:w-60 rounded-[2.5rem] border border-slate-900 bg-gradient-to-b from-black via-slate-900 to-black shadow-[0_32px_90px_rgba(15,23,42,0.95)] flex flex-col overflow-hidden">
<div className="h-8 flex items-center justify-center text-[0.7rem] text-slate-300">
                Seu MidiaKit ao vivo
              </div>
<div className="flex-1 flex flex-col items-center justify-center gap-3 px-4 text-center">
<div className="h-20 w-20 rounded-full bg-gradient-to-br from-fuchsia-400 via-violet-400 to-sky-400"></div>
<h3 className="text-sm lg:text-base font-medium tracking-tight">Seu Nome Artístico</h3>
<p className="text-xs lg:text-sm text-slate-200">
                  Bio, músicas, vídeos, agenda e contato em uma experiência pensada para quem decide.
                </p>
<button className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-50 text-slate-900 text-xs lg:text-sm font-medium tracking-tight px-4 py-2">
                  Ouvir último lançamento
                </button>
</div>
<div className="h-10 flex items-center justify-center text-[0.7rem] text-slate-500 border-t border-slate-800">
                Scroll para ver agenda, presskit e mais.
              </div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 lg:px-6 py-14 lg:py-20 space-y-10" id="faq">
<div className="text-center space-y-2">
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
            Perguntas Frequentes.
          </h2>
<p className="text-base lg:text-lg text-violet-100/90">
            Tudo o que você precisa saber antes de criar seu Midiakit.
          </p>
</div>
<div className="max-w-2xl mx-auto space-y-3">
<details className="group rounded-2xl bg-violet-950/90 border border-violet-800 p-3 lg:p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-xs lg:text-sm text-violet-50">É difícil configurar?</span>
<span className="ml-3 flex items-center justify-center rounded-full border border-violet-700 h-5 w-5 text-violet-300 text-[0.7rem]">
<span className="group-open:hidden">+</span>
<span className="hidden group-open:inline">−</span>
</span>
</summary>
<p className="mt-2 text-xs lg:text-sm text-violet-100/80">
              Não. Você responde algumas perguntas sobre sua carreira, envia links e arquivos e em poucos minutos sua página de MidiaKit está pronta para usar.
            </p>
</details>
<details className="group rounded-2xl bg-violet-950/90 border border-violet-800 p-3 lg:p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-xs lg:text-sm text-violet-50">O Midiakit substitui meu site?</span>
<span className="ml-3 flex items-center justify-center rounded-full border border-violet-700 h-5 w-5 text-violet-300 text-[0.7rem]">
<span className="group-open:hidden">+</span>
<span className="hidden group-open:inline">−</span>
</span>
</summary>
<p className="mt-2 text-xs lg:text-sm text-violet-100/80">
              Para a maioria dos artistas, sim. Ele concentra tudo que produtores, casas e fãs precisam acessar no dia a dia, sem você se preocupar com hospedagem ou design.
            </p>
</details>
<details className="group rounded-2xl bg-violet-950/90 border border-violet-800 p-3 lg:p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-xs lg:text-sm text-violet-50">Meus dados estão seguros?</span>
<span className="ml-3 flex items-center justify-center rounded-full border border-violet-700 h-5 w-5 text-violet-300 text-[0.7rem]">
<span className="group-open:hidden">+</span>
<span className="hidden group-open:inline">−</span>
</span>
</summary>
<p className="mt-2 text-xs lg:text-sm text-violet-100/80">
              Sim. Utilizamos práticas modernas de segurança e criptografia. Você controla o que é público na sua página e o que fica restrito apenas para sua equipe.
            </p>
</details>
</div>
</section>

<section className="bg-gradient-to-b from-violet-950 to-slate-950 border-t border-violet-900/70">
<div className="max-w-4xl mx-auto px-4 lg:px-6 py-12 lg:py-16 text-center space-y-4">
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
            A gestão profissional da sua carreira está a um clique.
          </h2>
<p className="text-base lg:text-lg text-violet-100/90 max-w-2xl mx-auto">
            Transforme a sua bio em uma plataforma que vende shows, organiza sua agenda e mostra o artista que você é de verdade.
          </p>
<div className="flex flex-col items-center gap-3 mt-3">
<a className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 hover:from-fuchsia-300 hover:via-violet-300 hover:to-sky-300 text-xs lg:text-sm text-slate-950 font-medium tracking-tight px-6 lg:px-7 py-2.5 shadow-xl shadow-fuchsia-500/40 transition-all" href="#planos">
              Criar meu Midiakit grátis
            </a>
<p className="text-xs lg:text-sm text-violet-100/80">
              Leva menos de 5 minutos para ter sua página no ar.
            </p>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-900/80 bg-slate-950/95">
<div className="max-w-6xl mx-auto px-4 lg:px-6 py-8 flex flex-col md:flex-row gap-8 md:gap-10 justify-between">
<div className="space-y-3">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-xl bg-gradient-to-br from-fuchsia-400 via-violet-400 to-sky-400 flex items-center justify-center">
<span className="text-[0.7rem] font-semibold tracking-tight text-slate-950">MK</span>
</div>
<div className="flex flex-col">
<span className="text-sm lg:text-base font-medium tracking-tight text-slate-50">MidiaKit.bio</span>
<span className="text-[0.7rem] lg:text-xs text-slate-400">
                A central de carreira para a nova geração de artistas.
              </span>
</div>
</div>
<p className="text-[0.7rem] lg:text-xs text-slate-500 max-w-xs">
            Sua bio deixa de ser só um monte de links e vira a presença profissional que o seu som merece.
          </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-[0.7rem] lg:text-xs text-slate-400">
<div className="space-y-2">
<h4 className="text-xs lg:text-sm font-medium tracking-tight text-slate-100">Ajuda</h4>
<ul className="space-y-1">
<li><a className="hover:text-slate-100 transition-colors" href="#faq">Suporte</a></li>
<li><a className="hover:text-slate-100 transition-colors" href="#planos">Preços</a></li>
<li><a className="hover:text-slate-100 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div className="space-y-2">
<h4 className="text-xs lg:text-sm font-medium tracking-tight text-slate-100">Produto</h4>
<ul className="space-y-1">
<li><a className="hover:text-slate-100 transition-colors" href="#demo">Como funciona</a></li>
<li><a className="hover:text-slate-100 transition-colors" href="#artistas">Artistas</a></li>
<li><a className="hover:text-slate-100 transition-colors" href="#">Parcerias</a></li>
</ul>
</div>
<div className="space-y-2">
<h4 className="text-xs lg:text-sm font-medium tracking-tight text-slate-100">Legal</h4>
<ul className="space-y-1">
<li><a className="hover:text-slate-100 transition-colors" href="#">Termos de Serviço</a></li>
<li><a className="hover:text-slate-100 transition-colors" href="#">Política de Privacidade</a></li>
<li><a className="hover:text-slate-100 transition-colors" href="#">Uso de Cookies</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-900/80">
<div className="max-w-6xl mx-auto px-4 lg:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
<span className="text-[0.7rem] lg:text-xs text-slate-500">
            © <span id="year"></span> MidiaKit.bio. Todos os direitos reservados.
          </span>
<span className="text-[0.7rem] lg:text-xs text-slate-500">
            Feito para artistas independentes que pensam como empresa.
          </span>
</div>
</div>
</footer>
</div>


    </>
  );
}
