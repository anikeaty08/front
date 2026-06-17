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
      

<div className="flex-1 flex flex-col">

<header className="border-b border-slate-800 bg-slate-950/95">
<div className="mx-auto max-w-6xl px-4">
<div className="flex items-center justify-between gap-4 py-3">

<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 border border-slate-800">
<span className="text-xs font-semibold tracking-tight text-slate-100">
                  SG
                </span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50">
                  SAGA SENAI de Inovação
                </span>
<span className="text-xs text-slate-400">
                  Soluções
                </span>
</div>
</div>

<div className="flex flex-1 items-center justify-end gap-4">
<div className="hidden sm:flex flex-1 max-w-md items-center">
<div className="relative w-full">
<input className="w-full rounded-md border border-slate-800 bg-slate-950/70 px-3 py-1.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-slate-300" placeholder="Buscar" type="text"/>

<svg className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="7"></circle>
<path d="m16 16 4 4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-1.5">
<span className="text-xs text-slate-400">Olá,</span>
<span className="text-xs font-semibold tracking-tight text-slate-50">
                    DANIEL
                  </span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-900">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M16 17L21 12L16 7" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M21 12H9" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Sair</span>
</button>
</div>
</div>
</div>

<nav className="flex items-center gap-4 border-t border-slate-900 py-2 text-xs text-slate-400">
<button className="transition hover:text-slate-100">
              Perfil
            </button>
<button className="transition hover:text-slate-100">
              Demandas da indústria
            </button>
<button className="text-slate-100 font-medium border-b border-slate-100 pb-1 -mb-1">
              Soluções
            </button>
<button className="transition hover:text-slate-100">
              Desafios
            </button>
<button className="transition hover:text-slate-100">
              Discussões
            </button>
<button className="transition hover:text-slate-100">
              Pessoas
            </button>
</nav>
</div>
</header>

<main className="flex-1">
<div className="mx-auto max-w-6xl px-4 py-6 md:py-8 space-y-6">

<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-xs text-slate-400">
                Solução cadastrada
              </div>
<h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50">
                Água Jato
              </h1>
<p className="mt-1 text-base text-slate-400">
                Bahia · Solução apresentada no Desafio Senai de Projetos Integradores 2016.
              </p>
</div>

<div className="flex flex-col items-start gap-1.5 sm:items-end">
<span className="text-xs text-slate-400">Fase da solução</span>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5 text-xs text-slate-400">
<span className="h-1.5 w-1.5 rounded-full bg-slate-200"></span>
<span>1</span>
<span className="h-px w-4 bg-slate-700"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-200"></span>
<span>2</span>
<span className="h-px w-4 bg-slate-700"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-700"></span>
<span>3</span>
<span className="h-px w-4 bg-slate-700"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-700"></span>
<span>4</span>
<span className="h-px w-4 bg-slate-700"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-700"></span>
<span>5</span>
</div>
</div>
<span className="text-xs text-slate-300">
                Fase 2 · Validação inicial
              </span>
</div>
</div>

<section className="space-y-4">

<div className="flex flex-wrap items-center gap-4 border-b border-slate-900 text-xs">
<button className="pb-1 border-b border-slate-100 text-slate-100 font-medium">
                Detalhes
              </button>
<button className="pb-1 text-slate-400 hover:text-slate-100">
                Equipe
              </button>
<button className="pb-1 text-slate-400 hover:text-slate-100">
                Comentários
              </button>
<button className="pb-1 text-slate-400 hover:text-slate-100">
                Complementos
              </button>
</div>

<div className="grid gap-6 md:grid-cols-3">

<div className="space-y-4 md:col-span-2">
<div className="space-y-1.5">
<h2 className="text-base font-semibold tracking-tight text-slate-50">
                    Visão geral
                  </h2>
<p className="text-base text-slate-400">
                    Solução desenvolvida para otimizar o uso de água em processos industriais,
                    com foco em eficiência, segurança e sustentabilidade.
                  </p>
</div>
<dl className="grid gap-4 sm:grid-cols-2">
<div className="space-y-1">
<dt className="text-xs text-slate-500">
                      Desenvolvida em um Senai Lab?
                    </dt>
<dd className="text-base text-slate-100">Não</dd>
</div>
<div className="space-y-1">
<dt className="text-xs text-slate-500">
                      Desafio
                    </dt>
<dd className="text-base text-slate-100">
                      Desafio Senai de Projetos Integradores 2016
                    </dd>
</div>
<div className="space-y-1">
<dt className="text-xs text-slate-500">
                      Estado
                    </dt>
<dd className="text-base text-slate-100">Bahia</dd>
</div>
<div className="space-y-1">
<dt className="text-xs text-slate-500">
                      Categoria
                    </dt>
<dd className="text-base text-slate-100">
                      Eficiência operacional · Sustentabilidade
                    </dd>
</div>
</dl>
</div>

<aside className="space-y-4 border border-slate-900 rounded-lg bg-slate-950/60 p-4">
<div className="flex items-center justify-between gap-2">
<span className="text-xs text-slate-400">
                    Nível de maturidade
                  </span>
<span className="text-xs text-slate-200">
                    Em evolução
                  </span>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Progresso</span>
<span>40%</span>
</div>
<div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-900">
<div className="h-full w-2/5 rounded-full bg-slate-200"></div>
</div>
</div>
<div className="space-y-2">
<span className="text-xs text-slate-400">
                    Próximos passos sugeridos
                  </span>
<ul className="space-y-1.5 text-xs text-slate-300">
<li className="flex items-start gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-slate-300"></span>
<span>Validação em ambiente real.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-slate-300"></span>
<span>Coleta de métricas de desempenho.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-slate-300"></span>
<span>Preparar documentação para escala.</span>
</li>
</ul>
</div>
<button className="mt-1 inline-flex w-full items-center justify-between rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 hover:bg-slate-900">
<span>Ver documentação da solução</span>

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M14 2V8H20" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M10 13H14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M10 17H14" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</aside>
</div>
</section>
</div>
</main>

<footer className="border-t border-slate-900 bg-slate-950">
<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row">
<div className="flex items-center gap-2">
<span>© SAGA SENAI de Inovação</span>
<span className="h-1 w-1 rounded-full bg-slate-800"></span>
<button className="hover:text-slate-300">
              Política de privacidade
            </button>
</div>
<div className="flex items-center gap-2 text-xs">

<svg className="h-3.5 w-3.5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C12 22 5 19 5 12V6L12 2L19 6V12C19 19 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Ambiente seguro e monitorado</span>
</div>
</div>
</footer>
</div>

    </>
  );
}
