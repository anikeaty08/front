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
      

<div className="bg-zinc-900 px-4 py-2 text-center text-xs font-medium text-zinc-300">
<span className="mr-2 text-white">Novo:</span> Formação executiva em Business Agility com vagas abertas. <a className="ml-1 underline decoration-zinc-600 underline-offset-2 hover:text-white" href="#">Saiba mais →</a>
</div>

<header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-xl">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
<div className="flex items-center gap-12">
<a className="flex items-center gap-2 group" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded bg-zinc-900 text-white font-bold tracking-tight transition-transform group-hover:scale-95">K</div>
<span className="text-xl font-semibold tracking-tight text-zinc-900">K21</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Para Você</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Para Empresas</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Consultoria</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Agenda</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:flex text-sm font-medium text-zinc-600 hover:text-zinc-900">Login</button>
<button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-all shadow-sm">
                    Ver Treinamentos
                </button>
</div>
</div>
</header>
<main>

<section className="relative overflow-hidden border-b border-zinc-100 pt-20 pb-24 lg:pt-32 lg:pb-32">
<div className="mx-auto max-w-7xl px-6 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600 uppercase tracking-wider">Referência Global em Agilidade</span>
</div>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-zinc-900 lg:text-7xl">
                    Não é apenas um certificado.<br/>
<span className="text-zinc-400">É autoridade para sua carreira.</span>
</h1>
<p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-500 leading-relaxed">
                    Junte-se a mais de 70.000 profissionais formados pelos pioneiros da Agilidade no Brasil. Conecte-se com a elite do mercado e transforme a forma como o mundo trabalha.
                </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="h-12 rounded-lg bg-orange-600 px-8 text-sm font-medium text-white shadow-lg shadow-orange-200 hover:bg-orange-700 hover:shadow-orange-300 transition-all w-full sm:w-auto">
                        Encontrar meu curso
                    </button>
<button className="h-12 rounded-lg border border-zinc-200 bg-white px-8 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                        Falar com consultor <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="mt-20 border-t border-zinc-100 pt-10">
<p className="text-sm font-medium text-zinc-400 mb-6">Empresas transformadas pela K21</p>
<div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 grayscale opacity-60">

<span className="text-xl font-bold text-zinc-400 tracking-tighter">ITAU</span>
<span className="text-xl font-bold text-zinc-400 tracking-tighter">GLOBO</span>
<span className="text-xl font-bold text-zinc-400 tracking-tighter">PAGSEGURO</span>
<span className="text-xl font-bold text-zinc-400 tracking-tighter">NUBANK</span>
<span className="text-xl font-bold text-zinc-400 tracking-tighter">MAGALU</span>
</div>
</div>
</div>

<div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-orange-50/50 to-transparent blur-3xl opacity-60"></div>
</section>

<section className="bg-zinc-50/50 py-24 px-6">
<div className="mx-auto max-w-7xl">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Por que escolher a K21?</h2>
<p className="mt-4 text-lg text-zinc-500">
                            No mercado de tecnologia e gestão, quem ensina faz toda a diferença. Entregamos a experiência real de quem lidera transformações globais.
                        </p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700" href="#">
                        Conheça nossa metodologia <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-shadow hover:shadow-xl hover:shadow-zinc-200/40">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
<i className="h-6 w-6" data-lucide="award"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900">Certificação de Peso</h3>
<p className="mt-2 text-zinc-500 leading-relaxed">
                            Somos parceiros oficiais Scrum Alliance e Kanban University. Seu certificado K21 é reconhecido e respeitado em qualquer lugar do mundo.
                        </p>
</div>

<div className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-shadow hover:shadow-xl hover:shadow-zinc-200/40">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
<i className="h-6 w-6" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900">Trainers de Elite (CSTs)</h3>
<p className="mt-2 text-zinc-500 leading-relaxed">
                            Aprenda com Certified Scrum Trainers e especialistas que vivenciam os desafios do mercado. Nada de teoria vazia, aqui é prática real.
                        </p>
</div>

<div className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-shadow hover:shadow-xl hover:shadow-zinc-200/40">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
<i className="h-6 w-6" data-lucide="trending-up"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900">Networking Estratégico</h3>
<p className="mt-2 text-zinc-500 leading-relaxed">
                            Entre para uma comunidade exclusiva de ex-alunos que hoje lideram as maiores empresas de tecnologia do Brasil e do mundo.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="mx-auto max-w-7xl">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Escolha sua jornada de evolução</h2>
<p className="mt-4 text-zinc-500">Trilhas de conhecimento desenhadas para cada momento da sua carreira.</p>
</div>
<div className="grid gap-8 lg:grid-cols-2">

<div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 p-8 lg:p-12 text-white">
<div className="relative z-10">
<div className="mb-6 inline-flex rounded-lg bg-zinc-800 p-3 ring-1 ring-zinc-700">
<i className="h-6 w-6 text-orange-400" data-lucide="box"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Gestão de Produtos</h3>
<p className="mt-4 max-w-md text-zinc-400">
                                Do CSPO ao Advanced Product Owner. Domine a arte de maximizar valor, priorizar backlogs e liderar o desenvolvimento de produtos digitais de sucesso.
                            </p>
<div className="mt-8 flex flex-wrap gap-3">
<span className="rounded-full bg-zinc-800 border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300">CSPO®</span>
<span className="rounded-full bg-zinc-800 border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300">A-CSPO®</span>
<span className="rounded-full bg-zinc-800 border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300">Product Discovery</span>
</div>
<button className="mt-8 text-sm font-medium text-white hover:text-orange-400 flex items-center gap-2 transition-colors">
                                Ver trilha de Produto <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-orange-500/10 to-transparent"></div>
</div>

<div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
<div className="relative z-10">
<div className="mb-6 inline-flex rounded-lg bg-white p-3 shadow-sm ring-1 ring-zinc-200">
<i className="h-6 w-6 text-zinc-900" data-lucide="compass"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900">Liderança Ágil &amp; Scrum Master</h3>
<p className="mt-4 max-w-md text-zinc-500">
                                Torne-se um facilitador de alta performance. Aprenda a remover impedimentos, desenvolver times auto-organizáveis e escalar a agilidade.
                            </p>
<div className="mt-8 flex flex-wrap gap-3">
<span className="rounded-full bg-white border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600">CSM®</span>
<span className="rounded-full bg-white border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600">A-CSM®</span>
<span className="rounded-full bg-white border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600">Management 3.0</span>
</div>
<button className="mt-8 text-sm font-medium text-zinc-900 hover:text-orange-600 flex items-center gap-2 transition-colors">
                                Ver trilha de Liderança <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
<div className="mt-8 grid gap-8 lg:grid-cols-3">

<div className="rounded-2xl border border-zinc-200 bg-white p-6 hover:border-zinc-300 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
<i className="h-5 w-5" data-lucide="trello"></i>
</div>
<h4 className="font-semibold text-zinc-900">Kanban University</h4>
</div>
<p className="mt-3 text-sm text-zinc-500">Melhore o fluxo de trabalho e reduza gargalos com o método Kanban oficial.</p>
</div>

<div className="rounded-2xl border border-zinc-200 bg-white p-6 hover:border-zinc-300 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
<i className="h-5 w-5" data-lucide="briefcase"></i>
</div>
<h4 className="font-semibold text-zinc-900">Business Agility</h4>
</div>
<p className="mt-3 text-sm text-zinc-500">Agilidade além da TI. Estratégia, OKRs e inovação corporativa.</p>
</div>

<div className="rounded-2xl border border-zinc-200 bg-white p-6 hover:border-zinc-300 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-50 text-pink-600">
<i className="h-5 w-5" data-lucide="mic"></i>
</div>
<h4 className="font-semibold text-zinc-900">Agile Coaching</h4>
</div>
<p className="mt-3 text-sm text-zinc-500">Desenvolva as competências para mentorear transformações organizacionais.</p>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-200 bg-zinc-50 py-16">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
<div>
<div className="text-4xl font-bold tracking-tight text-zinc-900">12+</div>
<div className="mt-1 text-sm font-medium text-zinc-500">Anos de Pioneirismo</div>
</div>
<div>
<div className="text-4xl font-bold tracking-tight text-zinc-900">70k+</div>
<div className="mt-1 text-sm font-medium text-zinc-500">Alunos Certificados</div>
</div>
<div>
<div className="text-4xl font-bold tracking-tight text-zinc-900">98%</div>
<div className="mt-1 text-sm font-medium text-zinc-500">Índice de Aprovação</div>
</div>
<div>
<div className="text-4xl font-bold tracking-tight text-zinc-900">Global</div>
<div className="mt-1 text-sm font-medium text-zinc-500">Atuação Internacional</div>
</div>
</div>
</div>
</section>

<section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-4xl font-semibold tracking-tight text-zinc-900">Pronto para liderar o futuro?</h2>
<p className="mx-auto mt-6 max-w-xl text-lg text-zinc-500">
                    A próxima turma da K21 pode ser o ponto de virada na sua carreira. Garanta sua vaga com quem é referência.
                </p>
<div className="mt-10 flex items-center justify-center gap-x-6">
<button className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 transition-colors">
                        Ver calendário de cursos
                    </button>
<a className="text-sm font-medium leading-6 text-zinc-900 flex items-center gap-2 hover:text-orange-600 transition-colors" href="#">
                        Para equipes corporativas <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<footer className="border-t border-zinc-200 bg-zinc-50 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="xl:grid xl:grid-cols-3 xl:gap-8">
<div className="space-y-8">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded bg-zinc-900 text-white font-bold tracking-tight">K</div>
<span className="text-xl font-semibold tracking-tight text-zinc-900">K21</span>
</div>
<p className="text-sm leading-6 text-zinc-500">
                            Transformando o mundo através da agilidade organizacional e liderança moderna.
                        </p>
<div className="flex space-x-6">
<a className="text-zinc-400 hover:text-zinc-500" href="#">
<i className="h-5 w-5" data-lucide="instagram"></i>
</a>
<a className="text-zinc-400 hover:text-zinc-500" href="#">
<i className="h-5 w-5" data-lucide="linkedin"></i>
</a>
<a className="text-zinc-400 hover:text-zinc-500" href="#">
<i className="h-5 w-5" data-lucide="youtube"></i>
</a>
</div>
</div>
<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
<div className="md:grid md:grid-cols-2 md:gap-8">
<div>
<h3 className="text-sm font-semibold leading-6 text-zinc-900">Treinamentos</h3>
<ul className="mt-6 space-y-4" role="list">
<li><a className="text-sm leading-6 text-zinc-500 hover:text-zinc-900" href="#">Scrum Master (CSM)</a></li>
<li><a className="text-sm leading-6 text-zinc-500 hover:text-zinc-900" href="#">Product Owner (CSPO)</a></li>
<li><a className="text-sm leading-6 text-zinc-500 hover:text-zinc-900" href="#">Kanban (KMP)</a></li>
<li><a className="text-sm leading-6 text-zinc-500 hover:text-zinc-900" href="#">Liderança Ágil</a></li>
</ul>
</div>
<div className="mt-10 md:mt-0">
<h3 className="text-sm font-semibold leading-6 text-zinc-900">Institucional</h3>
<ul className="mt-6 space-y-4" role="list">
<li><a className="text-sm leading-6 text-zinc-500 hover:text-zinc-900" href="#">Sobre a K21</a></li>
<li><a className="text-sm leading-6 text-zinc-500 hover:text-zinc-900" href="#">Nossos Trainers</a></li>
<li><a className="text-sm leading-6 text-zinc-500 hover:text-zinc-900" href="#">Carreiras</a></li>
<li><a className="text-sm leading-6 text-zinc-500 hover:text-zinc-900" href="#">Blog</a></li>
</ul>
</div>
</div>
<div className="md:grid md:grid-cols-2 md:gap-8">
<div>
<h3 className="text-sm font-semibold leading-6 text-zinc-900">Legal</h3>
<ul className="mt-6 space-y-4" role="list">
<li><a className="text-sm leading-6 text-zinc-500 hover:text-zinc-900" href="#">Privacidade</a></li>
<li><a className="text-sm leading-6 text-zinc-500 hover:text-zinc-900" href="#">Termos de Uso</a></li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-16 border-t border-zinc-200 pt-8 sm:mt-20 lg:mt-24">
<p className="text-xs leading-5 text-zinc-500">© 2024 K21 Treinamentos e Consultoria. Todos os direitos reservados.</p>
</div>
</div>
</footer>
</main>


    </>
  );
}
