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



      document.getElementById("year-span").textContent = new Date().getFullYear();
    
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

<header className="w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-sky-500/10 border border-sky-500/40 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-sky-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', \'Inter\', sans-serif'}}>
                DS
              </span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-50" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', \'Inter\', sans-serif'}}>
              designstudio
            </span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
<a className="hover:text-slate-50 transition-colors" href="#projetos">
              Projetos
            </a>
<a className="hover:text-slate-50 transition-colors" href="#servicos">
              Serviços
            </a>
<a className="hover:text-slate-50 transition-colors" href="#processo">
              Processo
            </a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-100 hover:border-slate-500 hover:bg-slate-900 transition-colors">
<i className="lucide lucide-play-circle h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
              Ver portfólio
            </button>
<a className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-950 hover:bg-sky-400 transition-colors" href="#contato">
              Falar com o estúdio
              <i className="lucide lucide-arrow-right h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</header>

<main className="flex-1">
<section className="border-b border-slate-900/80">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-[0.7rem] sm:text-xs text-slate-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>+200 projetos entregues</span>
<span className="text-slate-600">•</span>
<span>+4 anos de mercado</span>
</div>
<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', \'Inter\', sans-serif'}}>
                  Sua página atual está
                  <span className="text-sky-400">queimando dinheiro</span>
                  com anúncios?
                </h1>
<p className="text-base sm:text-lg text-slate-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', \'Inter\', sans-serif'}}>
                  Se esse é o seu caso, você precisa de ajuda para criar uma página que realmente conecte com seus leads, e nós estamos aqui para isso.
                </p>
</div>
<div className="space-y-3">
<p className="text-sm sm:text-base text-slate-200 font-medium">
                  O design certo muda como seu mercado te enxerga.
                </p>
<p className="text-sm sm:text-base text-slate-300">
                  Somos um estúdio de design digital focado em conversão e performance. Não criamos páginas bonitas que não vendem. Criamos presença digital estratégica que:
                </p>
<ul className="space-y-1.5 text-sm sm:text-base text-slate-300">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-3 rounded-full bg-sky-400/80"></span>
<span>Reforça sua autoridade, clareia sua oferta e faz seu cliente decidir mais rápido.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-3 rounded-full bg-sky-400/80"></span>
<span>Entrega páginas que não só impressionam. Entrega design que converte.</span>
</li>
</ul>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
<a className="inline-flex justify-center items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-medium text-slate-950 hover:bg-sky-400 transition-colors" href="#contato">
                  Quero uma página que converte
                  <i className="lucide lucide-mouse-pointer-2 h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</a>
<button className="inline-flex justify-center items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-100 hover:border-slate-500 hover:bg-slate-900 transition-colors">
<i className="lucide lucide-sparkles h-4 w-4" style={{strokeWidth: '1.5'}}></i>
                  Ver exemplos de resultados
                </button>
</div>
<div className="flex flex-wrap items-center gap-4 text-[0.7rem] sm:text-xs text-slate-400">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full border border-slate-900 bg-sky-500/70"></div>
<div className="h-6 w-6 rounded-full border border-slate-900 bg-violet-500/70"></div>
<div className="h-6 w-6 rounded-full border border-slate-900 bg-emerald-500/70"></div>
</div>
<span>Infoprodutores, consultorias e negócios digitais</span>
</div>
<div className="h-3 w-[1px] bg-slate-800 hidden sm:block"></div>
<div className="flex items-center gap-1.5">
<i className="lucide lucide-shield-check h-3.5 w-3.5 text-emerald-400" style={{strokeWidth: '1.5'}}></i>
<span>Processo claro. Resultado previsível.</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-sky-500/15 via-purple-500/10 to-emerald-400/10 -z-10"></div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] backdrop-blur-md p-5 sm:p-6 space-y-5">
<header className="space-y-1.5">
<div className="flex items-center gap-2 text-[0.7rem] sm:text-xs text-sky-300">
<i className="lucide lucide-rocket h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
<span>Diagnóstico gratuito de página</span>
</div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', \'Inter\', sans-serif'}}>
                    Descubra o que está travando suas conversões
                  </h2>
<p className="text-sm sm:text-base text-slate-300">
                    Envie sua página atual e receba sugestões práticas de melhoria em copy, estrutura e design.
                  </p>
</header>
<form className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs text-slate-300" htmlFor="nome">Nome</label>
<input className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80" id="nome" placeholder="Como devemos te chamar?" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-slate-300" htmlFor="email">E-mail</label>
<input className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80" id="email" placeholder="seuemail@dominio.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-slate-300" htmlFor="pagina">Link da sua página atual</label>
<input className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80" id="pagina" placeholder="https://sua-pagina.com" type="url"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-slate-300" htmlFor="tipo">O que você vende?</label>
<select className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80" id="tipo">
<option className="bg-slate-900">Infoproduto</option>
<option className="bg-slate-900">Mentoria / Consultoria</option>
<option className="bg-slate-900">Serviço recorrente</option>
<option className="bg-slate-900">E-commerce / Produto físico</option>
<option className="bg-slate-900">Outro</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs text-slate-300" htmlFor="objetivo">Principal objetivo com a nova página</label>
<textarea className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80" id="objetivo" placeholder="Ex: aumentar leads qualificados para meu lançamento de maio..." rows="3"></textarea>
</div>
<button className="w-full inline-flex justify-center items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-medium text-slate-950 hover:bg-sky-400 transition-colors" type="submit">
                    Receber diagnóstico da minha página
                    <i className="lucide lucide-line-chart h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</button>
<p className="text-[0.7rem] text-slate-400 text-center">
                    Sem spam, sem promessa milagrosa. Apenas direcionamento estratégico de quem vive de design para performance.
                  </p>
</form>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80 bg-slate-950" id="projetos">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-8">
<header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="space-y-2">
<p className="text-xs text-sky-300 uppercase tracking-[0.16em]">
                  Projetos que geraram resultado real
                </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', \'Inter\', sans-serif'}}>
                  Projetos que geraram resultado real para quem vende online.
                </h2>
<p className="text-sm sm:text-base text-slate-300 max-w-2xl">
                  Cada projeto que criamos tem dois objetivos: destacar-se e vender. Veja alguns dos materiais visuais que ajudaram infoprodutores e empresas a performar melhor.
                </p>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<i className="lucide lucide-badge-check h-3.5 w-3.5 text-emerald-400" style={{strokeWidth: '1.5'}}></i>
<span>Design focado em resultados, não em achismo estético.</span>
</div>
</header>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

<article className="group rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden flex flex-col">
<div className="relative h-40 sm:h-44 bg-gradient-to-tr from-sky-500/20 via-sky-300/10 to-slate-900">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#38bdf8_0,_transparent_55%)]"></div>
<div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-sky-100">Identidade Visual</span>
<span className="text-sm font-medium text-slate-50 tracking-tight">Vora C.</span>
</div>
<span className="rounded-full border border-sky-300/60 bg-slate-950/70 px-2 py-0.5 text-[0.7rem] text-sky-200">
                      Sistema visual completo
                    </span>
</div>
</div>
<div className="flex-1 p-4 sm:p-5 space-y-2">
<p className="text-sm sm:text-base text-slate-200 font-medium">
                    Identidade Visual – Vora C.
                  </p>
<p className="text-sm sm:text-base text-slate-300">
                    Sistema visual completo que posiciona a Vora como referência em agilidade e transparência no mercado contábil.
                  </p>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden flex flex-col">
<div className="relative h-40 sm:h-44 bg-gradient-to-tr from-emerald-500/20 via-emerald-300/10 to-slate-900">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#34d399_0,_transparent_55%)]"></div>
<div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-emerald-100">Landing Page</span>
<span className="text-sm font-medium text-slate-50 tracking-tight">Ravila Melo</span>
</div>
<span className="rounded-full border border-emerald-300/60 bg-slate-950/70 px-2 py-0.5 text-[0.7rem] text-emerald-100">
                      Captura + obrigado
                    </span>
</div>
</div>
<div className="flex-1 p-4 sm:p-5 space-y-2">
<p className="text-sm sm:text-base text-slate-200 font-medium">
                    Landing Page – Ravila Melo
                  </p>
<p className="text-sm sm:text-base text-slate-300">
                    Página de captura + obrigado que converteu leads qualificados para método de nutrição personalizada.
                  </p>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden flex flex-col">
<div className="relative h-40 sm:h-44 bg-gradient-to-tr from-violet-500/20 via-violet-300/10 to-slate-900">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#a855f7_0,_transparent_55%)]"></div>
<div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-violet-100">Landing Page</span>
<span className="text-sm font-medium text-slate-50 tracking-tight">Gobbi Consultoria</span>
</div>
<span className="rounded-full border border-violet-300/60 bg-slate-950/70 px-2 py-0.5 text-[0.7rem] text-violet-100">
                      Confiança &amp; conversão
                    </span>
</div>
</div>
<div className="flex-1 p-4 sm:p-5 space-y-2">
<p className="text-sm sm:text-base text-slate-200 font-medium">
                    Landing Page – Gobbi Consultoria
                  </p>
<p className="text-sm sm:text-base text-slate-300">
                    Página estratégica para brasileiros investindo em imóveis na Itália, com foco em confiança e conversão.
                  </p>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden flex flex-col">
<div className="relative h-40 sm:h-44 bg-gradient-to-tr from-sky-500/20 via-purple-400/15 to-slate-900">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#4f46e5_0,_transparent_55%)]"></div>
<div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-slate-100">Landing Page</span>
<span className="text-sm font-medium text-slate-50 tracking-tight">Dra Crisandra</span>
</div>
<span className="rounded-full border border-slate-200/70 bg-slate-950/70 px-2 py-0.5 text-[0.7rem] text-slate-100">
                      Alta conversão
                    </span>
</div>
</div>
<div className="flex-1 p-4 sm:p-5 space-y-2">
<p className="text-sm sm:text-base text-slate-200 font-medium">
                    Landing Page – Dra Crisandra
                  </p>
<p className="text-sm sm:text-base text-slate-300">
                    Página de alta conversão para o método “Bebê Dorme e Mamãe Sonha”, validando autoridade da pediatra.
                  </p>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden flex flex-col">
<div className="relative h-40 sm:h-44 bg-gradient-to-tr from-amber-500/20 via-amber-300/10 to-slate-900">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#f59e0b_0,_transparent_55%)]"></div>
<div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-amber-100">Landing Page</span>
<span className="text-sm font-medium text-slate-50 tracking-tight">Dra Ana Paula</span>
</div>
<span className="rounded-full border border-amber-300/70 bg-slate-950/70 px-2 py-0.5 text-[0.7rem] text-amber-100">
                      Consultoria premium
                    </span>
</div>
</div>
<div className="flex-1 p-4 sm:p-5 space-y-2">
<p className="text-sm sm:text-base text-slate-200 font-medium">
                    Landing Page – Dra Ana Paula
                  </p>
<p className="text-sm sm:text-base text-slate-300">
                    Página que posiciona consultoria de carreira premium com mais de 10 anos de mercado.
                  </p>
</div>
</article>

<div className="rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 p-4 sm:p-5 flex flex-col justify-between gap-3">
<div className="space-y-1.5">
<p className="text-xs text-sky-300 uppercase tracking-[0.16em]">
                    Próximo case
                  </p>
<p className="text-sm sm:text-base text-slate-200 font-medium">
                    Seu projeto pode ser o próximo a gerar resultado real.
                  </p>
<p className="text-sm sm:text-base text-slate-300">
                    Vamos entender seu cenário atual e desenhar uma página feita para converter o seu tipo de lead.
                  </p>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-100/95 px-3.5 py-2 text-sm font-medium text-slate-950 hover:bg-white transition-colors" href="#contato">
                  Falar sobre meu projeto
                  <i className="lucide lucide-message-circle h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80 bg-slate-950/95" id="servicos">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10">
<div className="space-y-6">
<div className="space-y-2">
<p className="text-xs text-sky-300 uppercase tracking-[0.16em]">
                  Design que converte
                </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', \'Inter\', sans-serif'}}>
                  Design que não só impressiona. Design que converte.
                </h2>
<p className="text-sm sm:text-base text-slate-300">
                  +200 projetos entregues | +4 anos de mercado
                </p>
</div>
<div className="space-y-4">
<h3 className="text-sm sm:text-base text-slate-200 font-medium">
                  SERVIÇOS:
                </h3>
<div className="grid sm:grid-cols-2 gap-3">
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-3 flex items-start gap-3">
<div className="rounded-lg bg-sky-500/15 border border-sky-500/40 p-1.5">
<i className="lucide lucide-layout-dashboard h-4 w-4 text-sky-300" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="space-y-1">
<p className="text-sm sm:text-base text-slate-100 font-medium">Sites</p>
<p className="text-xs sm:text-sm text-slate-400">
                        Estrutura completa para posicionar sua marca e transformar visitas em contatos.
                      </p>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-3 flex items-start gap-3">
<div className="rounded-lg bg-violet-500/15 border border-violet-500/40 p-1.5">
<i className="lucide lucide-palette h-4 w-4 text-violet-300" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="space-y-1">
<p className="text-sm sm:text-base text-slate-100 font-medium">Identidade Visual</p>
<p className="text-xs sm:text-sm text-slate-400">
                        Sistema visual completo para reforçar autoridade e consistência em todos os pontos de contato.
                      </p>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-3 flex items-start gap-3">
<div className="rounded-lg bg-emerald-500/15 border border-emerald-500/40 p-1.5">
<i className="lucide lucide-sparkles h-4 w-4 text-emerald-300" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="space-y-1">
<p className="text-sm sm:text-base text-slate-100 font-medium">Lançamentos</p>
<p className="text-xs sm:text-sm text-slate-400">
                        Páginas e materiais para PLs, CPLs e eventos online pensados em conversão do funil inteiro.
                      </p>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-3 flex items-start gap-3">
<div className="rounded-lg bg-amber-500/15 border border-amber-500/40 p-1.5">
<i className="lucide lucide-monitor-play h-4 w-4 text-amber-300" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="space-y-1">
<p className="text-sm sm:text-base text-slate-100 font-medium">Criativos</p>
<p className="text-xs sm:text-sm text-slate-400">
                        Criativos para anúncios, social e tráfego pago alinhados com a mesma lógica da sua página.
                      </p>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-3 flex items-start gap-3 sm:col-span-2">
<div className="rounded-lg bg-sky-500/15 border border-sky-500/40 p-1.5">
<i className="lucide lucide-scroll-text h-4 w-4 text-sky-300" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="space-y-1">
<p className="text-sm sm:text-base text-slate-100 font-medium">Landing Page</p>
<p className="text-xs sm:text-sm text-slate-400">
                        Páginas de captura, vendas e obrigado pensadas para clarear sua oferta, reforçar prova e acelerar a decisão do lead.
                      </p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-5">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6 space-y-3">
<div className="flex items-center gap-2 text-xs text-emerald-300">
<i className="lucide lucide-badge-check h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
<span>Presença digital estratégica</span>
</div>
<p className="text-sm sm:text-base text-slate-100 font-medium">
                  Não criamos páginas bonitas que não vendem.
                </p>
<p className="text-sm sm:text-base text-slate-300">
                  Cada entrega é baseada em pesquisa, entendimento de oferta e comportamento do seu público. Menos achismo, mais estratégia.
                </p>
<ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-3 rounded-full bg-emerald-400/80"></span>
<span>Copy e hierarquia pensadas para leitura rápida e escaneável.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-3 rounded-full bg-emerald-400/80"></span>
<span>Design alinhado com tráfego pago e funil de vendas.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-3 rounded-full bg-emerald-400/80"></span>
<span>Entrega organizada para sua equipe executar sem fricção.</span>
</li>
</ul>
</div>
<div className="rounded-2xl border border-slate-800 bg-gradient-to-tr from-sky-500/15 via-slate-950 to-purple-500/10 p-5 sm:p-6 flex flex-col gap-3">
<p className="text-xs text-sky-200 uppercase tracking-[0.16em]">
                  Próximo passo
                </p>
<p className="text-sm sm:text-base text-slate-100 font-medium">
                  Vamos olhar para sua página como um time de performance faria.
                </p>
<p className="text-sm sm:text-base text-slate-300">
                  Em 20 a 30 minutos conseguimos identificar gargalos, oportunidades de crescimento e um plano claro para sua próxima versão.
                </p>
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-3.5 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 transition-colors" href="#contato">
                  Agendar conversa estratégica
                  <i className="lucide lucide-calendar-clock h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80 bg-slate-950" id="processo">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-8">
<header className="space-y-2 max-w-2xl">
<p className="text-xs text-sky-300 uppercase tracking-[0.16em]">
                Como trabalhamos
              </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', \'Inter\', sans-serif'}}>
                Processo claro. Resultado previsível.
              </h2>
<p className="text-sm sm:text-base text-slate-300">
                Trabalhamos com método, sem burocracia, sem surpresas. Cada etapa é transparente, colaborativa e focada no que importa: entregar resultado.
              </p>
</header>
<div className="grid md:grid-cols-3 gap-5">

<article className="relative rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-3">
<div className="absolute -top-2 -left-2">
<span className="inline-flex items-center justify-center rounded-full bg-sky-500 text-slate-950 text-xs h-6 w-6 font-medium">
                    1
                  </span>
</div>
<div className="flex items-center justify-between gap-2">
<div>
<p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
                      Etapa 01
                    </p>
<h3 className="text-sm sm:text-base text-slate-100 font-medium">
                      Imersão Estratégica
                    </h3>
</div>
<i className="lucide lucide-radar h-4 w-4 text-sky-300" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm sm:text-base text-slate-300">
                  Entendemos seu negócio, seu público e seus objetivos para criar algo que realmente funciona.
                </p>
<ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400/80"></span>
<span>Kickoff alinhado</span>
</li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400/80"></span>
<span>Definição de escopo</span>
</li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400/80"></span>
<span>Análise de concorrência</span>
</li>
</ul>
</article>

<article className="relative rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-3">
<div className="absolute -top-2 -left-2">
<span className="inline-flex items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-xs h-6 w-6 font-medium">
                    2
                  </span>
</div>
<div className="flex items-center justify-between gap-2">
<div>
<p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
                      Etapa 02
                    </p>
<h3 className="text-sm sm:text-base text-slate-100 font-medium">
                      Criação Estratégica
                    </h3>
</div>
<i className="lucide lucide-layers h-4 w-4 text-emerald-300" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm sm:text-base text-slate-300">
                  Desenvolvemos identidades, páginas e materiais que posicionam você à frente da concorrência.
                </p>
<ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
<span>Pesquisa e moodboard</span>
</li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
<span>Design aplicado à conversão</span>
</li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
<span>Revisões colaborativas</span>
</li>
</ul>
</article>

<article className="relative rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-3">
<div className="absolute -top-2 -left-2">
<span className="inline-flex items-center justify-center rounded-full bg-violet-500 text-slate-950 text-xs h-6 w-6 font-medium">
                    3
                  </span>
</div>
<div className="flex items-center justify-between gap-2">
<div>
<p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
                      Etapa 03
                    </p>
<h3 className="text-sm sm:text-base text-slate-100 font-medium">
                      Entrega Organizada
                    </h3>
</div>
<i className="lucide lucide-folder-kanban h-4 w-4 text-violet-300" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm sm:text-base text-slate-300">
                  Você recebe tudo estruturado, editável e pronto para usar.
                </p>
<ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-violet-400/80"></span>
<span>Arquivos finais otimizados</span>
</li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-violet-400/80"></span>
<span>Orientação de aplicação</span>
</li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-violet-400/80"></span>
<span>Suporte pós-entrega</span>
</li>
</ul>
</article>
</div>
</div>
</section>

<section className="bg-slate-950" id="contato">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-8">
<div className="rounded-3xl border border-slate-800 bg-gradient-to-tr from-sky-500/10 via-slate-950 to-purple-500/10 p-5 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start lg:items-center">
<div className="space-y-4 flex-1">
<p className="text-xs text-sky-200 uppercase tracking-[0.16em]">
                  Pronto para parar de queimar dinheiro com anúncios?
                </p>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', \'Inter\', sans-serif'}}>
                  Vamos desenhar a página que o seu tráfego merece.
                </h2>
<p className="text-sm sm:text-base text-slate-200">
                  Preencha o formulário ou envie uma mensagem e retornamos com próximos passos em até um dia útil.
                </p>
<div className="flex flex-wrap items-center gap-4 text-[0.7rem] sm:text-xs text-slate-200">
<div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/70 border border-slate-700 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Vagas limitadas por mês</span>
</div>
<div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/70 border border-slate-700 px-2.5 py-1">
<i className="lucide lucide-clock-3 h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
<span>Resposta em até 24h úteis</span>
</div>
</div>
</div>
<div className="w-full lg:max-w-md">
<form className="space-y-3">
<div className="grid sm:grid-cols-2 gap-3">
<div className="space-y-1">
<label className="text-xs text-slate-200" htmlFor="nome-contato">Nome</label>
<input className="w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80" id="nome-contato" placeholder="Seu nome" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-200" htmlFor="whatsapp">WhatsApp</label>
<input className="w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80" id="whatsapp" placeholder="(00) 00000-0000" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-200" htmlFor="email-contato">E-mail</label>
<input className="w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80" id="email-contato" placeholder="seuemail@dominio.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-200" htmlFor="projeto">Que tipo de projeto você precisa?</label>
<select className="w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80" id="projeto">
<option className="bg-slate-950">Landing page</option>
<option className="bg-slate-950">Site institucional</option>
<option className="bg-slate-950">Identidade visual</option>
<option className="bg-slate-950">Lançamento completo</option>
<option className="bg-slate-950">Criativos para tráfego</option>
<option className="bg-slate-950">Outro / Não tenho certeza</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-200" htmlFor="mensagem">Conte rapidamente sobre o momento do seu negócio</label>
<textarea className="w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80" id="mensagem" placeholder="Ticket médio, tipo de oferta, se já roda tráfego, datas de lançamento..." rows="3"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-medium text-slate-950 hover:bg-sky-400 transition-colors" type="submit">
                    Enviar brief inicial
                    <i className="lucide lucide-send h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</button>
<p className="text-[0.7rem] text-slate-300 text-center">
                    Após o envio, entraremos em contato para alinhar prazos, investimento e próximos passos.
                  </p>
</form>
</div>
</div>
<footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-900 pt-4">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="font-medium tracking-tight text-slate-200">designstudio</span>
<span className="text-slate-700">•</span>
<span>Estúdio de design digital focado em conversão e performance.</span>
</div>
<div className="flex items-center gap-4 text-[0.7rem] text-slate-500">
<span>© <span id="year-span"></span> Todos os direitos reservados.</span>
</div>
</footer>
</div>
</section>
</main>
</div>


    </>
  );
}
