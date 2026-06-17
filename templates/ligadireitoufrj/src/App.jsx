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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#fdf2f2',
100: '#fbe8e8',
500: '#eb5757',
600: '#c81e1e',
800: '#9b1c1c',
900: '#771d1d', /* UFRJ Inspired Dark Red */
},
zinc: {
50: '#fafafa',
100: '#f4f4f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
800: '#27272a',
900: '#18181b',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="w-full max-w-[1400px] h-[95vh] sm:h-[90vh] bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border border-zinc-200 flex flex-col overflow-hidden relative animate-rotate-sequence perspective-distant">

<div className="h-14 sm:h-12 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between px-4 sm:px-6 shrink-0 z-30">
<div className="flex items-center gap-4">

<div className="hidden sm:flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80"></div>
</div>

<div className="flex sm:hidden items-center gap-2">
<div className="w-7 h-7 bg-brand-900 rounded-md flex items-center justify-center text-white">
<iconify-icon height="14" icon="solar:bank-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="font-heading font-medium text-sm tracking-tight text-zinc-900">LAD UFRJ</span>
</div>
</div>

<div className="flex-1 max-w-2xl bg-white border border-zinc-200 rounded-md h-8 flex items-center justify-center text-xs text-zinc-400 font-sans tracking-wide mx-4 hidden sm:flex">
<iconify-icon className="mr-2 opacity-50" height="12" icon="solar:lock-password-linear" strokeWidth="1.5" width="12"></iconify-icon>
                lad.ufrj.br/noticias
            </div>

<label className="sm:hidden p-2 text-zinc-600 hover:bg-zinc-200 rounded-md cursor-pointer flex items-center justify-center" htmlFor="mobile-menu-toggle">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="20"></iconify-icon>
</label>

<div className="w-10 hidden sm:block"></div>
</div>

<div className="flex-1 flex overflow-hidden relative">

<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>
<div className="mobile-menu-overlay fixed inset-0 bg-zinc-900/20 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-300 sm:hidden"></div>
<div className="mobile-menu-content fixed inset-y-0 left-0 w-64 bg-white z-50 transform -translate-x-full transition-transform duration-300 shadow-2xl sm:hidden flex flex-col p-6 border-r border-zinc-200">
<label className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-900 flex items-center justify-center" htmlFor="mobile-menu-toggle">
<iconify-icon height="20" icon="solar:close-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</label>

<div className="mt-8 space-y-2">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-brand-50 border border-brand-100 text-brand-900" href="#">
<iconify-icon height="18" icon="solar:home-smile-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-heading text-sm tracking-tight">Início</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-500 hover:bg-zinc-100" href="#">
<iconify-icon height="18" icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-heading text-sm tracking-tight">Páginas do Blog</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-500 hover:bg-zinc-100" href="#">
<iconify-icon height="18" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-heading text-sm tracking-tight">Sobre Nós &amp; Contato</span>
</a>
</div>
</div>

<aside className="w-64 bg-zinc-50/50 border-r border-zinc-200 flex flex-col py-8 px-6 backdrop-blur-sm z-10 hidden md:flex">
<div>

<div className="flex items-center gap-2 mb-10">
<div className="w-8 h-8 bg-brand-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon height="18" icon="solar:bank-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-heading font-medium text-lg tracking-tight text-zinc-900">Direito UFRJ</span>
</div>

<div className="mb-8">
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-zinc-400" height="16" icon="solar:magnifer-linear" strokeWidth="1.5" width="16"></iconify-icon>
<input className="w-full bg-white border border-zinc-200 rounded-lg pl-9 pr-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-all font-heading shadow-sm" placeholder="Pesquisar..." type="text"/>
</div>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white border border-zinc-200 shadow-sm text-brand-900 transition-all group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" height="18" icon="solar:home-smile-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-heading text-sm tracking-tight">Início</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors group" href="#blog-pages">
<iconify-icon className="group-hover:scale-110 transition-transform" height="18" icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-heading text-sm tracking-tight">Páginas do Blog</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors group" href="#contact">
<iconify-icon className="group-hover:scale-110 transition-transform" height="18" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-heading text-sm tracking-tight">Sobre Nós &amp; Contato</span>
</a>
</nav>

<div className="mt-10">
<p className="px-3 text-xs font-heading font-medium text-zinc-400 uppercase tracking-widest mb-4">Categorias</p>
<div className="space-y-1 pl-3 border-l border-zinc-200 ml-3">
<a className="block px-3 py-1.5 text-zinc-600 hover:text-brand-900 text-sm hover:translate-x-1 transition-transform" href="#">Eventos</a>
<a className="block px-3 py-1.5 text-zinc-600 hover:text-brand-900 text-sm hover:translate-x-1 transition-transform" href="#">Artigos Acadêmicos</a>
<a className="block px-3 py-1.5 text-zinc-600 hover:text-brand-900 text-sm hover:translate-x-1 transition-transform" href="#">Comunicados</a>
<a className="block px-3 py-1.5 text-zinc-600 hover:text-brand-900 text-sm hover:translate-x-1 transition-transform" href="#">Projetos de Extensão</a>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-zinc-100 scroll-smooth w-full">
<div className="max-w-5xl mx-auto px-6 py-8 md:px-12 md:py-16 animate-rotate-sequence">

<header className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<span className="font-heading text-xs font-medium tracking-[0.2em] text-brand-900 uppercase mb-3 block">Portal Oficial da UFRJ</span>
<h1 className="font-heading text-3xl sm:text-4xl tracking-tight font-medium text-zinc-900 leading-none">
                                Atualizações Institucionais &amp; <br className="hidden sm:block"/> Insights Acadêmicos
                            </h1>
</div>
<div className="hidden sm:block">
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-zinc-200 shadow-sm text-sm text-zinc-500 font-heading cursor-pointer hover:bg-zinc-50 transition-colors">
<span>Mais Recentes</span>
<iconify-icon height="14" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</header>

<div className="mb-6 flex items-center gap-2">
<iconify-icon className="text-brand-900" icon="solar:star-fall-linear" strokeWidth="1.5" width="20"></iconify-icon>
<h2 className="font-heading text-xl font-medium tracking-tight text-zinc-900">Publicação Mais Recente</h2>
</div>
<article className="group relative bg-white rounded-xl overflow-hidden shadow-[0_2px_40px_-12px_rgba(0,0,0,0.08)] border border-zinc-100 mb-16 hover-rotate-card cursor-pointer">
<div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-zinc-100 relative">
<div className="absolute inset-0 bg-brand-900/10 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
<img alt="Balança da Justiça" className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out opacity-90 hover:opacity-100 transform hover:scale-105" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 md:p-10 relative z-20">
<div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6 text-xs font-heading text-zinc-400 uppercase tracking-widest">
<span className="text-brand-900 font-medium border border-brand-900/20 bg-brand-50 px-2 py-0.5 rounded">Comunicado</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span>12 Out, 2024</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span>Pela Diretoria</span>
</div>
<h2 className="font-heading text-2xl md:text-3xl tracking-tight font-medium text-zinc-900 mb-3 md:mb-4 leading-tight group-hover:text-brand-900 transition-colors">
                                O Futuro do Direito Constitucional no Ensino Superior Brasileiro
                            </h2>
<p className="font-body text-base md:text-xl text-zinc-600 leading-relaxed max-w-2xl mb-6 md:mb-8">
                                Uma análise abrangente sobre as futuras mudanças curriculares e como a Liga Acadêmica de Direito está preparando os alunos para a modernização do sistema judiciário.
                            </p>
<div className="flex items-center gap-2 text-zinc-900 font-heading font-medium text-sm border-b border-zinc-900 pb-0.5 w-max group-hover:border-brand-900 group-hover:text-brand-900 transition-colors">
                                Ler Relatório Completo
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</article>

<div className="pt-4 scroll-mt-8" id="blog-pages">
<div className="mb-8 flex items-center justify-between">
<h3 className="font-heading text-2xl tracking-tight font-medium text-zinc-900">Páginas do Blog</h3>
<a className="text-sm font-heading text-zinc-500 hover:text-brand-900 transition-colors hidden sm:block" href="#">Ver todos os artigos</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16">

<article className="bg-transparent group cursor-pointer hover:bg-white p-4 -m-4 rounded-xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-zinc-200">
<div className="mb-5 overflow-hidden rounded-lg aspect-[3/2] bg-zinc-100 relative">
<img alt="Campus Universitário" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 mb-3 text-xs font-heading text-zinc-400 uppercase tracking-widest">
<span className="text-zinc-600">Artigos</span>
<span className="w-px h-3 bg-zinc-200"></span>
<span>28 Set</span>
</div>
<h4 className="font-heading text-xl md:text-2xl tracking-tight font-medium text-zinc-900 mb-2 leading-snug">
                                    Debate sobre Direitos Civis: Perspectivas Modernas
                                </h4>
<p className="font-body text-base text-zinc-500 leading-relaxed mb-4 line-clamp-2">
                                    Avaliando o status atual dos direitos civis digitais e as leis de privacidade de dados no marco legislativo brasileiro.
                                </p>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-zinc-200 text-zinc-400 group-hover:bg-brand-900 group-hover:border-brand-900 group-hover:text-white transition-all">
<iconify-icon height="14" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</article>

<article className="bg-transparent group cursor-pointer hover:bg-white p-4 -m-4 rounded-xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-zinc-200">
<div className="mb-5 overflow-hidden rounded-lg aspect-[3/2] bg-zinc-100 relative">
<img alt="Reunião" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 mb-3 text-xs font-heading text-zinc-400 uppercase tracking-widest">
<span className="text-zinc-600">Projetos</span>
<span className="w-px h-3 bg-zinc-200"></span>
<span>15 Set</span>
</div>
<h4 className="font-heading text-xl md:text-2xl tracking-tight font-medium text-zinc-900 mb-2 leading-snug">
                                    Extensão de Assistência Jurídica Comunitária
                                </h4>
<p className="font-body text-base text-zinc-500 leading-relaxed mb-4 line-clamp-2">
                                    Apresentando o novo programa de extensão universitária que oferece aconselhamento jurídico gratuito para comunidades carentes no Rio de Janeiro.
                                </p>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-zinc-200 text-zinc-400 group-hover:bg-brand-900 group-hover:border-brand-900 group-hover:text-white transition-all">
<iconify-icon height="14" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</article>

<article className="bg-transparent group cursor-pointer hover:bg-white p-4 -m-4 rounded-xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-zinc-200">
<div className="mb-5 overflow-hidden rounded-lg aspect-[3/2] bg-zinc-100 relative">
<img alt="Documentos Legais" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 mb-3 text-xs font-heading text-zinc-400 uppercase tracking-widest">
<span className="text-zinc-600">Eventos</span>
<span className="w-px h-3 bg-zinc-200"></span>
<span>10 Set</span>
</div>
<h4 className="font-heading text-xl md:text-2xl tracking-tight font-medium text-zinc-900 mb-2 leading-snug">
                                    Simpósio de Reforma Tributária 2024
                                </h4>
<p className="font-body text-base text-zinc-500 leading-relaxed mb-4 line-clamp-2">
                                    Discussão com especialistas sobre os impactos econômicos e legais das recentes aprovações de emendas fiscais no congresso nacional.
                                </p>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-zinc-200 text-zinc-400 group-hover:bg-brand-900 group-hover:border-brand-900 group-hover:text-white transition-all">
<iconify-icon height="14" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</article>

<article className="bg-transparent group cursor-pointer hover:bg-white p-4 -m-4 rounded-xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-zinc-200">
<div className="mb-5 overflow-hidden rounded-lg aspect-[3/2] bg-zinc-100 relative">
<img alt="Prédio e Sustentabilidade" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 mb-3 text-xs font-heading text-zinc-400 uppercase tracking-widest">
<span className="text-zinc-600">Artigos</span>
<span className="w-px h-3 bg-zinc-200"></span>
<span>02 Set</span>
</div>
<h4 className="font-heading text-xl md:text-2xl tracking-tight font-medium text-zinc-900 mb-2 leading-snug">
                                    Direito Ambiental: Novas Jurisprudências
                                </h4>
<p className="font-body text-base text-zinc-500 leading-relaxed mb-4 line-clamp-2">
                                    Como as decisões recentes do STF estão moldando a responsabilidade corporativa em relação ao desenvolvimento sustentável.
                                </p>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-zinc-200 text-zinc-400 group-hover:bg-brand-900 group-hover:border-brand-900 group-hover:text-white transition-all">
<iconify-icon height="14" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</article>
</div>
</div>

<section className="mb-12 md:mb-20 pt-8 border-t border-zinc-200">
<div className="flex items-center justify-between mb-6">
<h3 className="font-heading text-xl md:text-2xl tracking-tight font-medium text-zinc-900">Próximos Eventos</h3>
<a className="text-sm font-heading text-brand-900 hover:text-brand-800 flex items-center gap-1 transition-colors" href="#">
                                Ver Calendário <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="space-y-4">

<div className="group flex flex-col sm:flex-row gap-4 sm:items-center p-4 bg-white rounded-xl border border-zinc-200 hover:border-brand-900/30 transition-colors cursor-pointer shadow-sm hover:shadow-md">
<div className="w-14 h-14 shrink-0 rounded-lg bg-brand-50 text-brand-900 flex flex-col items-center justify-center font-heading leading-none border border-brand-100">
<span className="text-xs uppercase font-medium mb-1">Out</span>
<span className="text-lg font-medium">24</span>
</div>
<div className="flex-1">
<h4 className="font-heading text-base tracking-tight text-zinc-900 group-hover:text-brand-900 transition-colors">Simpósio sobre Direito Digital e Privacidade</h4>
<p className="font-body text-sm text-zinc-500 mt-1">Faculdade Nacional de Direito (FND) - Auditório Principal</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs font-heading text-zinc-400 bg-zinc-50 px-3 py-1.5 rounded-md">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="14"></iconify-icon> 14:00 - 18:00
                                </div>
</div>

<div className="group flex flex-col sm:flex-row gap-4 sm:items-center p-4 bg-white rounded-xl border border-zinc-200 hover:border-brand-900/30 transition-colors cursor-pointer shadow-sm hover:shadow-md">
<div className="w-14 h-14 shrink-0 rounded-lg bg-zinc-50 text-zinc-600 flex flex-col items-center justify-center font-heading leading-none border border-zinc-200">
<span className="text-xs uppercase font-medium mb-1">Nov</span>
<span className="text-lg font-medium">05</span>
</div>
<div className="flex-1">
<h4 className="font-heading text-base tracking-tight text-zinc-900 group-hover:text-brand-900 transition-colors">Grupo de Estudos: Reformas Constitucionais</h4>
<p className="font-body text-sm text-zinc-500 mt-1">Online via Zoom / Sala Virtual B</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs font-heading text-zinc-400 bg-zinc-50 px-3 py-1.5 rounded-md">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="14"></iconify-icon> 10:00 - 12:00
                                </div>
</div>
</div>
</section>

<div className="bg-brand-900 rounded-xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group scroll-mt-8" id="contact">

<div className="absolute -right-10 -top-10 w-64 h-64 bg-brand-800 rounded-full blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
<div className="relative z-10 w-full md:max-w-md text-center md:text-left">
<h3 className="font-heading text-xl md:text-2xl tracking-tight font-medium text-white mb-3">Sobre Nós &amp; Contato</h3>
<p className="font-body text-sm md:text-base text-brand-100/80 leading-relaxed mb-6">
                                Fomentando a excelência acadêmica, pesquisa jurídica e pensamento crítico na Universidade Federal do Rio de Janeiro. Junte-se à nossa comunidade para atualizações institucionais e materiais exclusivos.
                            </p>
<a className="inline-flex items-center gap-2 text-sm font-heading font-medium text-white border-b border-white/30 pb-1 hover:border-white transition-colors" href="#">
                                Ler nossa Missão <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<form className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-3">
<input className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-brand-100/50 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all font-body w-full sm:w-64 text-sm shadow-inner" placeholder="E-mail institucional..." type="email"/>
<button className="bg-white text-brand-900 px-6 py-3 rounded-lg font-heading font-medium text-sm hover:bg-brand-50 transition-colors whitespace-nowrap w-full sm:w-auto shadow-md" type="button">
                                Inscrever-se
                            </button>
</form>
</div>

<footer className="mt-16 md:mt-20 pt-10 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-zinc-400 text-xs md:text-sm gap-4 text-center md:text-left">
<span className="font-body">© 2024 Liga Acadêmica de Direito - UFRJ. Rio de Janeiro, Brasil.</span>
<div className="flex gap-6 font-heading">
<a className="hover:text-brand-900 transition-colors" href="#">Contato</a>
<a className="hover:text-brand-900 transition-colors" href="#">Instagram</a>
<a className="hover:text-brand-900 transition-colors" href="#">LinkedIn</a>
</div>
</footer>
</div>
</main>
</div>
</div>

    </>
  );
}
