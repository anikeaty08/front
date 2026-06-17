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
      

<nav className="fixed top-0 w-full border-b border-neutral-900/50 bg-neutral-950/80 backdrop-blur-md z-50">
<div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-serif text-lg font-medium tracking-tighter text-white uppercase" href="#">Lycurgo</a>
<div className="hidden lg:flex items-center gap-6">
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition" href="#">Planos</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition" href="#">Conteúdos</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition" href="#">Comunidade</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition" href="#">Pós-Graduação</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition" href="#">Para Empresas</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-neutral-400 hover:text-neutral-200 transition" href="#">Login</a>
<button className="bg-white text-neutral-950 px-4 py-2 rounded-md text-sm font-medium hover:bg-neutral-200 transition">
                    Torne-se Aluno
                </button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/30 via-neutral-950 to-neutral-950 blur-3xl -z-10"></div>
<div className="max-w-5xl mx-auto px-4 text-center">
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-tight">
                Formando líderes intelectualmente <br className="hidden md:block"/> preparados para defender a Verdade.
            </h1>
<p className="text-neutral-400 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
                A Lycurgo Academy é um Instituto de formação cristã que une profundidade bíblica, pensamento conservador e preparo apologético em uma experiência educacional de alto nível.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-neutral-950 px-6 py-3 rounded-md text-sm font-medium flex items-center justify-center gap-2 hover:bg-neutral-200 transition">
                    Começar minha formação
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto border border-neutral-800 bg-neutral-900/50 text-white px-6 py-3 rounded-md text-sm font-medium flex items-center justify-center gap-2 hover:bg-neutral-800 transition">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Assistir aula gratuita
                </button>
</div>

<div className="mt-20 relative w-full aspect-video rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
<iconify-icon className="text-white text-2xl ml-1" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="w-full h-full bg-neutral-800 opacity-50 flex items-center justify-center text-neutral-600 text-sm">
                    [Vídeo Cinematográfico: Tassos, Biblioteca, Auditório]
                </div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    Não é apenas uma plataforma.<br/> É um movimento intelectual.
                </h2>
<div className="space-y-4 text-neutral-400 text-base leading-relaxed">
<p>Vivemos uma geração intelectualmente desarmada.</p>
<p>A Lycurgo Academy nasceu para formar homens e mulheres capazes de pensar com clareza, argumentar com convicção e viver sua fé com profundidade.</p>
<p className="text-white font-medium mt-6">Aqui você não consome conteúdo.</p>
<p className="text-white font-medium">Você constrói fundamentos.</p>
</div>
</div>
<div className="aspect-square rounded-2xl border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-600">
                [Imagem: Alunos reunidos, ambiente acadêmico]
            </div>
</div>
</section>

<section className="py-24 border-t border-neutral-900 bg-neutral-900/20">
<div className="max-w-4xl mx-auto px-4 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 mb-6">
<iconify-icon className="text-white text-xl" icon="solar:routing-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                Por onde você deve começar?
            </h2>
<p className="text-neutral-400 text-base mb-10 max-w-xl mx-auto">
                Cada aluno está em um momento diferente. Responda 5 perguntas e descubra sua trilha personalizada.
            </p>
<div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/50">
<div className="w-full bg-neutral-900 h-1 rounded-full mb-8 overflow-hidden">
<div className="w-1/5 bg-white h-full"></div>
</div>
<h3 className="text-xl text-white font-medium mb-8">Qual o seu principal objetivo ao estudar teologia e apologética?</h3>
<div className="space-y-3 text-left mb-10">
<button className="w-full p-4 rounded-lg border border-neutral-800 hover:border-neutral-600 bg-neutral-900/50 hover:bg-neutral-900 transition flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-neutral-600"></div>
<span className="text-sm text-neutral-300">Defender minha fé em debates intelectuais</span>
</button>
<button className="w-full p-4 rounded-lg border border-neutral-800 hover:border-neutral-600 bg-neutral-900/50 hover:bg-neutral-900 transition flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-neutral-600"></div>
<span className="text-sm text-neutral-300">Aprofundar meu conhecimento bíblico pessoal</span>
</button>
<button className="w-full p-4 rounded-lg border border-neutral-800 hover:border-neutral-600 bg-neutral-900/50 hover:bg-neutral-900 transition flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-neutral-600"></div>
<span className="text-sm text-neutral-300">Ensinar na minha igreja ou comunidade</span>
</button>
</div>
<button className="w-full sm:w-auto bg-white text-neutral-950 px-6 py-3 rounded-md text-sm font-medium flex items-center justify-center gap-2 hover:bg-neutral-200 transition mx-auto">
                    Descobrir minha trilha
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900">
<div className="max-w-5xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                    A Bíblia de Gênesis a Apocalipse
                </h2>
<p className="text-neutral-400 text-base">Estude a Bíblia com Doutor Tassos Lycurgo</p>
</div>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 md:-translate-x-1/2"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
<div className="hidden md:block w-1/2 text-right pr-12">
<div className="aspect-[16/9] w-64 ml-auto rounded-lg border border-neutral-800 bg-neutral-900"></div>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-neutral-950 border-2 border-neutral-700 md:-translate-x-1/2 flex items-center justify-center text-xs font-medium text-white z-10 group-hover:border-white transition">1</div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
<h3 className="text-lg font-medium text-white mb-1">O Princípio e a Fundação</h3>
<p className="text-sm text-neutral-500">(Gênesis a Deuteronômio)</p>
<div className="md:hidden mt-4 aspect-[16/9] w-full max-w-sm rounded-lg border border-neutral-800 bg-neutral-900"></div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
<div className="md:w-1/2 md:text-right md:pr-12 ml-12 md:ml-0 order-2 md:order-1">
<h3 className="text-lg font-medium text-white mb-1">História, Sabedoria e Profecia</h3>
<p className="text-sm text-neutral-500">(Josué a Malaquias)</p>
<div className="md:hidden mt-4 aspect-[16/9] w-full max-w-sm rounded-lg border border-neutral-800 bg-neutral-900"></div>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-neutral-950 border-2 border-neutral-700 md:-translate-x-1/2 flex items-center justify-center text-xs font-medium text-white z-10 group-hover:border-white transition order-1 md:order-2">2</div>
<div className="hidden md:block w-1/2 pl-12 order-3">
<div className="aspect-[16/9] w-64 rounded-lg border border-neutral-800 bg-neutral-900"></div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
<div className="hidden md:block w-1/2 text-right pr-12">
<div className="aspect-[16/9] w-64 ml-auto rounded-lg border border-neutral-800 bg-neutral-900"></div>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-neutral-950 border-2 border-neutral-700 md:-translate-x-1/2 flex items-center justify-center text-xs font-medium text-white z-10 group-hover:border-white transition">3</div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
<h3 className="text-lg font-medium text-white mb-1">Os Evangelhos e a Revelação</h3>
<p className="text-sm text-neutral-500">(Mateus a João)</p>
<div className="md:hidden mt-4 aspect-[16/9] w-full max-w-sm rounded-lg border border-neutral-800 bg-neutral-900"></div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
<div className="md:w-1/2 md:text-right md:pr-12 ml-12 md:ml-0 order-2 md:order-1">
<h3 className="text-lg font-medium text-white mb-1">A Igreja, a Missão e o Fim</h3>
<p className="text-sm text-neutral-500">(Atos a Apocalipse)</p>
<div className="md:hidden mt-4 aspect-[16/9] w-full max-w-sm rounded-lg border border-neutral-800 bg-neutral-900"></div>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-neutral-950 border-2 border-neutral-700 md:-translate-x-1/2 flex items-center justify-center text-xs font-medium text-white z-10 group-hover:border-white transition order-1 md:order-2">4</div>
<div className="hidden md:block w-1/2 pl-12 order-3">
<div className="aspect-[16/9] w-64 rounded-lg border border-neutral-800 bg-neutral-900"></div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
<div className="hidden md:block w-1/2 text-right pr-12">
<div className="aspect-[16/9] w-64 ml-auto rounded-lg border border-neutral-800 bg-neutral-900"></div>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-neutral-950 border-2 border-neutral-700 md:-translate-x-1/2 flex items-center justify-center text-xs font-medium text-white z-10 group-hover:border-white transition">5</div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
<h3 className="text-lg font-medium text-white mb-1">Temas Transversais e Aplicação</h3>
<div className="md:hidden mt-4 aspect-[16/9] w-full max-w-sm rounded-lg border border-neutral-800 bg-neutral-900"></div>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="border border-neutral-800 bg-neutral-900/50 text-white px-6 py-3 rounded-md text-sm font-medium inline-flex items-center gap-2 hover:bg-neutral-800 transition">
                    Ver todos os conteúdos
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white">
                Explore a Lycurgo Academy
            </h2>
</div>

<div className="mb-12">
<div className="max-w-7xl mx-auto px-4 md:px-8 mb-4">
<h3 className="text-lg font-medium text-white">Cursos</h3>
</div>
<div className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide pb-4 snap-x">

<div className="w-[280px] flex-none aspect-[16/9] bg-neutral-900 border border-neutral-800 rounded-lg snap-start relative group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-sm font-medium text-white">Fundamentos da Fé</p>
</div>
</div>
<div className="w-[280px] flex-none aspect-[16/9] bg-neutral-900 border border-neutral-800 rounded-lg snap-start"></div>
<div className="w-[280px] flex-none aspect-[16/9] bg-neutral-900 border border-neutral-800 rounded-lg snap-start"></div>
<div className="w-[280px] flex-none aspect-[16/9] bg-neutral-900 border border-neutral-800 rounded-lg snap-start"></div>
<div className="w-[280px] flex-none aspect-[16/9] bg-neutral-900 border border-neutral-800 rounded-lg snap-start"></div>
</div>
</div>

<div className="mb-12">
<div className="max-w-7xl mx-auto px-4 md:px-8 mb-4">
<h3 className="text-lg font-medium text-white">Lycurgo Séries Especiais</h3>
</div>
<div className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide pb-4 snap-x">

<div className="w-[200px] flex-none aspect-[2/3] bg-neutral-900 border border-neutral-800 rounded-lg snap-start"></div>
<div className="w-[200px] flex-none aspect-[2/3] bg-neutral-900 border border-neutral-800 rounded-lg snap-start"></div>
<div className="w-[200px] flex-none aspect-[2/3] bg-neutral-900 border border-neutral-800 rounded-lg snap-start"></div>
<div className="w-[200px] flex-none aspect-[2/3] bg-neutral-900 border border-neutral-800 rounded-lg snap-start"></div>
<div className="w-[200px] flex-none aspect-[2/3] bg-neutral-900 border border-neutral-800 rounded-lg snap-start"></div>
<div className="w-[200px] flex-none aspect-[2/3] bg-neutral-900 border border-neutral-800 rounded-lg snap-start"></div>
</div>
</div>

<div>
<div className="max-w-7xl mx-auto px-4 md:px-8 mb-4">
<h3 className="text-lg font-medium text-white">Masterclasses &amp; Livros Comentados</h3>
</div>
<div className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide pb-4 snap-x">
<div className="w-[280px] flex-none aspect-[16/9] bg-neutral-900 border border-neutral-800 rounded-lg snap-start"></div>
<div className="w-[280px] flex-none aspect-[16/9] bg-neutral-900 border border-neutral-800 rounded-lg snap-start"></div>
<div className="w-[280px] flex-none aspect-[16/9] bg-neutral-900 border border-neutral-800 rounded-lg snap-start"></div>
<div className="w-[280px] flex-none aspect-[16/9] bg-neutral-900 border border-neutral-800 rounded-lg snap-start"></div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                    Uma experiência educacional completa
                </h2>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 overflow-hidden relative min-h-[400px]">
<div className="relative z-10">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Plataforma Inteligente</h3>
<p className="text-sm text-neutral-400">Design focado no aprendizado profundo, sem distrações.</p>
</div>
<div className="absolute bottom-[-10%] right-[-10%] w-[80%] aspect-[16/10] bg-neutral-950 border border-neutral-800 rounded-tl-xl shadow-2xl"></div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 overflow-hidden relative min-h-[400px]">
<div className="relative z-10">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">App iOS e Android</h3>
<p className="text-sm text-neutral-400">Estude offline, ouça em segundo plano.</p>
</div>
<div className="absolute bottom-[-20%] right-[10%] w-[40%] aspect-[9/19] bg-neutral-950 border border-neutral-800 rounded-t-3xl shadow-2xl border-b-0"></div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">IA Aplicada ao Estudo</h3>
<p className="text-sm text-neutral-400">Revisões inteligentes, testes adaptativos e acompanhamento de progresso.</p>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Comunidade Estruturada</h3>
<p className="text-sm text-neutral-400">Interação moderada e focada no crescimento intelectual.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 aspect-video rounded-2xl border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-600">
                [Imagem: Grupo reunido, networking]
            </div>
<div className="order-1 lg:order-2">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                    Você não estará sozinho.
                </h2>
<p className="text-neutral-400 text-base mb-8">
                    Mais do que alunos, somos uma comunidade de homens e mulheres comprometidos com a Verdade.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Fóruns moderados
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Grupos de estudo
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Networking intelectual
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Eventos presenciais
                    </li>
</ul>
<button className="border border-neutral-800 bg-neutral-900/50 text-white px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-neutral-800 transition">
                    Fazer parte
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 to-neutral-950">
<div className="max-w-4xl mx-auto px-4 text-center">
<span className="inline-block px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs text-neutral-400 mb-6 uppercase tracking-wider">
                Em Breve
            </span>
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                Formação Avançada para quem deseja ir além.
            </h2>
<p className="text-neutral-400 text-base mb-10 max-w-2xl mx-auto">
                Programas estruturados para líderes, educadores e profissionais que desejam aprofundamento acadêmico.
            </p>
<div className="aspect-video max-w-3xl mx-auto rounded-2xl border border-neutral-800 bg-neutral-900 mb-10 flex items-center justify-center text-neutral-600">
                [Imagem: Cenário institucional, Tassos]
            </div>
<button className="bg-white text-neutral-950 px-6 py-3 rounded-md text-sm font-medium hover:bg-neutral-200 transition">
                Conhecer a Pós
            </button>
</div>
</section>

<section className="py-24 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16">
<div>
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                    Formação intelectual para instituições
                </h2>
<p className="text-neutral-400 text-base mb-8">
                    Desenvolvemos programas personalizados para Escolas, Universidades, Empresas e Igrejas.
                </p>
<div className="grid grid-cols-2 gap-4 mb-10">
<div className="p-4 border border-neutral-800 rounded-lg bg-neutral-900/30">
<iconify-icon className="text-xl text-white mb-2" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-1">Licenciamento</h4>
<p className="text-xs text-neutral-500">Acesso em escala</p>
</div>
<div className="p-4 border border-neutral-800 rounded-lg bg-neutral-900/30">
<iconify-icon className="text-xl text-white mb-2" icon="solar:route-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-1">Trilhas Exclusivas</h4>
<p className="text-xs text-neutral-500">Conteúdo adaptado</p>
</div>
<div className="p-4 border border-neutral-800 rounded-lg bg-neutral-900/30">
<iconify-icon className="text-xl text-white mb-2" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-1">Formação de Líderes</h4>
<p className="text-xs text-neutral-500">Capacitação avançada</p>
</div>
<div className="p-4 border border-neutral-800 rounded-lg bg-neutral-900/30">
<iconify-icon className="text-xl text-white mb-2" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-1">In Company</h4>
<p className="text-xs text-neutral-500">Programas internos</p>
</div>
</div>
<div className="flex gap-4">
<button className="bg-white text-neutral-950 px-6 py-3 rounded-md text-sm font-medium hover:bg-neutral-200 transition">
                        Falar com especialista
                    </button>
<button className="border border-neutral-800 bg-neutral-900/50 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-neutral-800 transition">
                        Saiba mais
                    </button>
</div>
</div>
<div className="h-full min-h-[400px] rounded-2xl border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-600">
                [Visual Corporativo / Institucional]
            </div>
</div>
</section>

<section className="py-24 border-t border-neutral-900 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mb-12 text-center">
                Histórias de transformação real
            </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 border border-neutral-800 rounded-2xl bg-neutral-950 flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 mb-4 text-white">
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                            "A profundidade dos conteúdos me deu a base filosófica e histórica que eu precisava para atuar com mais firmeza no meu ambiente de trabalho."
                        </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800"></div>
<div>
<h4 className="text-sm font-medium text-white">João Pedro</h4>
<p className="text-xs text-neutral-500">Médico</p>
</div>
</div>
</div>

<div className="p-6 border border-neutral-800 rounded-2xl bg-neutral-950 flex flex-col justify-between">
<div className="w-full aspect-video bg-neutral-800 rounded-lg mb-4 flex items-center justify-center relative group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center border border-white/20 group-hover:bg-black/70 transition">
<iconify-icon className="text-white text-sm ml-0.5" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-neutral-800"></div>
<div>
<h4 className="text-sm font-medium text-white">Ana Silva</h4>
<p className="text-xs text-neutral-500">Advogada</p>
</div>
</div>
</div>

<div className="p-6 border border-neutral-800 rounded-2xl bg-neutral-950 flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 mb-4 text-white">
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                            "Muda a forma como você lê a Bíblia e entende o mundo. O nível de exigência intelectual é exatamente o que eu buscava."
                        </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800"></div>
<div>
<h4 className="text-sm font-medium text-white">Marcos V.</h4>
<p className="text-xs text-neutral-500">Empresário</p>
</div>
</div>
</div>

<div className="p-6 border border-neutral-800 rounded-2xl bg-neutral-950 flex flex-col justify-between">
<div className="w-full aspect-video bg-neutral-800 rounded-lg mb-4 flex items-center justify-center relative group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center border border-white/20 group-hover:bg-black/70 transition">
<iconify-icon className="text-white text-sm ml-0.5" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-neutral-800"></div>
<div>
<h4 className="text-sm font-medium text-white">Lucas R.</h4>
<p className="text-xs text-neutral-500">Universitário</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
                    Escolha sua jornada
                </h2>
</div>
<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="p-8 border border-neutral-800 rounded-3xl bg-neutral-900/30 flex flex-col mt-4">
<h3 className="text-lg font-medium text-white mb-2">Mensal</h3>
<div className="mb-6">
<span className="text-3xl font-medium text-white">R$ 197,90</span>
<span className="text-sm text-neutral-500">/mês</span>
</div>
<p className="text-xs text-neutral-500 mb-8 h-8">Cobrança mensal com renovação automática. 1 mês de acesso.</p>
<button className="w-full border border-neutral-700 bg-neutral-800 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-neutral-700 transition mb-8">
                        Assinar Mensal
                    </button>
<div className="space-y-4 flex-grow">
<div className="flex items-start gap-3"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-300">Curso Fundamentos da Defesa da Fé</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-300">Curso de Gênesis a Apocalipse</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-300">Séries Exclusivas</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-300">Livros Comentados</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-300">Gravação dos MasterClass</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-300">Materiais de apoio</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-300">Comunidade Apologética</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-300">Descontos Produtos Exclusivos</span></div>
</div>
</div>

<div className="p-8 border border-neutral-600 rounded-3xl bg-neutral-900 relative flex flex-col shadow-2xl shadow-black/50">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-neutral-950 text-xs font-medium px-3 py-1 rounded-full">
                        Mais Popular
                    </div>
<h3 className="text-lg font-medium text-white mb-2">Anual</h3>
<div className="mb-6">
<span className="text-sm text-neutral-500">12x</span>
<span className="text-4xl font-medium text-white tracking-tight">R$ 69,30</span>
</div>
<p className="text-xs text-neutral-400 mb-8 h-8">Ou R$ 693,00 à vista. Cobrança anual. 1 ano de acesso.</p>
<button className="w-full bg-white text-neutral-950 px-4 py-3 rounded-lg text-sm font-medium hover:bg-neutral-200 transition mb-8 shadow-lg shadow-white/10">
                        Assinar Anual
                    </button>
<div className="space-y-4 flex-grow">

<div className="flex items-start gap-3"><iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-200">Curso Fundamentos da Defesa da Fé</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-200">Curso de Gênesis a Apocalipse</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-200">Séries Exclusivas</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-200">Livros Comentados</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-200">Gravação dos MasterClass</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-200">Materiais de apoio</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-200">Comunidade Apologética</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-200">Descontos Produtos Exclusivos</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-white font-medium">Acesso ao App iOS e Android</span></div>
</div>
</div>

<div className="p-8 border border-neutral-800 rounded-3xl bg-neutral-900/30 flex flex-col mt-4">
<h3 className="text-lg font-medium text-white mb-2">Premium (2 anos)</h3>
<div className="mb-6">
<span className="text-sm text-neutral-500">12x</span>
<span className="text-3xl font-medium text-white">R$ 99,70</span>
</div>
<p className="text-xs text-neutral-500 mb-8 h-8">Ou R$ 997,00 à vista. Cobrança a cada 2 anos. 2 anos de acesso.</p>
<button className="w-full border border-neutral-700 bg-neutral-800 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-neutral-700 transition mb-8">
                        Assinar Premium
                    </button>
<div className="space-y-4 flex-grow">
<div className="flex items-start gap-3"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-300">Todos os benefícios do plano Anual</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-300">2 anos de acesso garantido</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="text-sm text-neutral-300">Acesso ao App iOS e Android</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-neutral-900 bg-neutral-900/10">
<div className="max-w-3xl mx-auto px-4 text-center flex flex-col items-center">
<iconify-icon className="text-4xl text-neutral-400 mb-4" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-2xl font-medium text-white mb-2 tracking-tight">7 dias de garantia incondicional</h2>
<p className="text-sm text-neutral-400">Se você entender que não é para você, devolvemos 100% do seu investimento. Sem burocracia.</p>
</div>
</section>

<section className="py-24 border-t border-neutral-900">
<div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
<div className="aspect-[3/4] rounded-2xl border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-600 overflow-hidden">
                 [Imagem Editorial Tassos]
            </div>
<div>
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    Prof. Tassos Lycurgo
                </h2>
<div className="space-y-4 text-neutral-400 text-sm md:text-base leading-relaxed mb-8">
<p className="text-white font-medium text-lg">Pensador cristão, autor, formador de líderes, referência em apologética e cosmovisão.</p>
<p>Atua na defesa intelectual da fé com sólida base filosófica, histórica e científica. Professor universitário, pesquisador internacional e advogado, construiu uma trajetória que une academia, liderança pública e ministério pastoral.</p>
<p>É fundador do Ministério Defesa da Fé, onde dedica-se à formação de uma geração capaz de compreender, viver e defender o Cristianismo de maneira racional, profunda e estratégica.</p>
<p>Reconhecido por sua clareza, erudição e firmeza de princípios, Tassos Lycurgo transita entre o ambiente acadêmico, igrejas e grandes conferências, influenciando líderes, famílias e instituições no Brasil e no exterior.</p>
</div>
<button className="border border-neutral-800 bg-neutral-900/50 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-neutral-800 transition">
                    Conhecer trajetória
                </button>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-neutral-900/40 to-neutral-950">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                Experimente antes de decidir
            </h2>
<p className="text-neutral-400 text-base mb-10">
                Assista gratuitamente a uma aula selecionada e conheça a profundidade do nosso método.
            </p>
<div className="aspect-video w-full rounded-2xl border border-neutral-800 bg-neutral-900 mb-8 relative flex items-center justify-center group cursor-pointer">
<div className="w-16 h-16 rounded-full bg-white text-neutral-950 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl ml-1" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<button className="bg-white text-neutral-950 px-8 py-3 rounded-md text-sm font-medium hover:bg-neutral-200 transition">
                Assistir agora
            </button>
</div>
</section>

<section className="py-24 border-t border-neutral-900">
<div className="max-w-3xl mx-auto px-4">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mb-12 text-center">
                Dúvidas Frequentes
            </h2>
<div className="flex gap-4 overflow-x-auto scrollbar-hide mb-8 border-b border-neutral-800 pb-px">
<button className="text-sm font-medium text-white border-b-2 border-white pb-2 px-2 whitespace-nowrap">Planos &amp; Acesso</button>
<button className="text-sm font-medium text-neutral-500 hover:text-neutral-300 pb-2 px-2 whitespace-nowrap">Pagamento</button>
<button className="text-sm font-medium text-neutral-500 hover:text-neutral-300 pb-2 px-2 whitespace-nowrap">Certificação</button>
</div>
<div className="space-y-4">
<div className="border border-neutral-800 rounded-lg bg-neutral-900/30 p-4 flex justify-between items-center cursor-pointer hover:bg-neutral-900/50 transition">
<span className="text-sm text-white font-medium">Como funciona o acesso à plataforma?</span>
<iconify-icon className="text-neutral-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="border border-neutral-800 rounded-lg bg-neutral-900/30 p-4 flex justify-between items-center cursor-pointer hover:bg-neutral-900/50 transition">
<span className="text-sm text-white font-medium">Os cursos têm certificado?</span>
<iconify-icon className="text-neutral-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="border border-neutral-800 rounded-lg bg-neutral-900/30 p-4 flex justify-between items-center cursor-pointer hover:bg-neutral-900/50 transition">
<span className="text-sm text-white font-medium">Posso acessar pelo celular?</span>
<iconify-icon className="text-neutral-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-neutral-900 bg-neutral-900/20 text-center">
<div className="max-w-xl mx-auto px-4">
<h2 className="text-xl font-medium text-white mb-6">Precisa de ajuda?</h2>
<button className="border border-neutral-700 bg-neutral-800 text-white px-6 py-3 rounded-md text-sm font-medium inline-flex items-center gap-2 hover:bg-neutral-700 transition">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
                Falar no WhatsApp
            </button>
</div>
</section>

<footer className="border-t border-neutral-900 bg-neutral-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-1">
<a className="font-serif text-lg font-medium tracking-tighter text-white uppercase block mb-4" href="#">Lycurgo</a>
<p className="text-xs text-neutral-500 max-w-xs">Formando líderes intelectualmente preparados para defender a Verdade.</p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Plataforma</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-400 hover:text-white transition" href="#">Planos</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition" href="#">Conteúdos</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition" href="#">Comunidade</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition" href="#">Login</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Institucional</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-400 hover:text-white transition" href="#">Sobre o Professor</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition" href="#">Pós-graduação</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition" href="#">Para Empresas</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition" href="#">Universidades</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-400 hover:text-white transition" href="#">Termos de Uso</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition" href="#">Política de Privacidade</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-900 gap-4">
<p className="text-xs text-neutral-600">© 2024 Lycurgo Academy. Todos os direitos reservados.</p>
<div className="flex items-center gap-4">
<a className="text-neutral-500 hover:text-white transition flex items-center gap-2 text-xs" href="#">
<iconify-icon className="text-lg" icon="solar:instagram-linear"></iconify-icon>
                        Tassos
                    </a>
<a className="text-neutral-500 hover:text-white transition flex items-center gap-2 text-xs" href="#">
<iconify-icon className="text-lg" icon="solar:instagram-linear"></iconify-icon>
                        Academy
                    </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
