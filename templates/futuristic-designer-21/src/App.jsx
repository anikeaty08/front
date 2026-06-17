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
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
slate: {
950: '#030305', // Custom deep black
900: '#0A0A0C',
850: '#141416'
},
accent: {
glow: '#4f46e5'
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-display font-medium text-lg tracking-tight text-white flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
                JACK-DSGN
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-slate-400">
<a className="hover:text-white transition-colors" href="#projects">Projetos</a>
<a className="hover:text-white transition-colors" href="#process">Metodologia</a>
<a className="hover:text-white transition-colors" href="#about">Sobre</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-white transition-all group" href="#contact">
                Contato
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden pt-20 pr-6 pl-6 relative items-center justify-center">

<div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-20 pointer-events-none"></div>
<div className="absolute inset-0 hero-glow pointer-events-none"></div>
<div className="text-center max-w-4xl z-10 mr-auto ml-auto relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
<span>Disponível para Novos Projetos</span>
</div>
<h1 className="interactive-title font-display font-medium text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white mb-6 leading-[1.1] pb-2">
                Arquitetando <br/>
                Inteligência Digital
            </h1>
<p className="text-slate-400 text-base md:text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
                Especializado em UI/UX de alta fidelidade e design de produtos digitais escaláveis. Unindo engenharia complexa à interação humana intuitiva.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3.5 bg-white text-slate-950 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" href="#projects">
                    Ver Projetos
                    <iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-3.5 bg-transparent border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/5 transition-colors" href="#contact">
                    Entrar em Contato
                </a>
</div>
</div>

<div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-50">
<iconify-icon className="text-slate-500 animate-bounce" icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</section>

<section className="border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="about">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mr-auto ml-auto gap-x-16 gap-y-16 items-start">
<div className="">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight font-display mb-6">
                    Design não é apenas visual.<br/>É a funcionalidade do futuro.
                </h2>
<div className="space-y-6 text-slate-400 font-light leading-relaxed">
<p className="">
                        Abordo o design com a mentalidade de um engenheiro e o olhar de um artista. Meu foco é criar sistemas de design modulares e escaláveis que servem como base para um crescimento rápido.
                    </p>
<p>
                        Desde startups SaaS em estágio inicial até gigantes de tecnologia estabelecidas, ajudo organizações a transformar dados complexos em interfaces claras e acionáveis.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="glass-card rounded-xl pt-6 pr-6 pb-6 pl-6">
<iconify-icon className="text-indigo-400 mb-4" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium text-lg mb-2">Foco no Usuário</h3>
<p className="text-slate-500 text-sm">Decisões baseadas em dados e psicologia comportamental.</p>
</div>
<div className="glass-card p-6 rounded-xl">
<iconify-icon className="text-indigo-400 mb-4" icon="solar:layers-minimalistic-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium text-lg mb-2">Sistemático</h3>
<p className="text-slate-500 text-sm">Princípios de design atômico para escalabilidade consistente.</p>
</div>
<div className="glass-card p-6 rounded-xl">
<iconify-icon className="text-indigo-400 mb-4" icon="solar:code-circle-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium text-lg mb-2">Técnico</h3>
<p className="text-slate-500 text-sm">Unindo design e código com fluência em desenvolvimento.</p>
</div>
<div className="glass-card p-6 rounded-xl">
<iconify-icon className="text-indigo-400 mb-4" icon="solar:graph-up-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium text-lg mb-2">Crescimento</h3>
<p className="text-slate-500 text-sm">Designs otimizados para conversão e retenção.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900/30" id="projects">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="font-display font-medium text-3xl tracking-tight text-white mb-2">Projetos Selecionados</h2>
<p className="text-slate-400 text-sm font-light">Uma curadoria de produtos e interfaces digitais.</p>
</div>

<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium border border-white/5">Todos</button>
<button className="px-4 py-1.5 rounded-full bg-transparent text-slate-400 hover:text-white text-xs font-medium border border-transparent hover:border-white/10 transition-all">SaaS</button>
<button className="px-4 py-1.5 rounded-full bg-transparent text-slate-400 hover:text-white text-xs font-medium border border-transparent hover:border-white/10 transition-all">Fintech</button>
<button className="px-4 py-1.5 rounded-full bg-transparent text-slate-400 hover:text-white text-xs font-medium border border-transparent hover:border-white/10 transition-all">IA</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card group rounded-2xl overflow-hidden cursor-pointer relative lg:col-span-2 aspect-[16/9] md:aspect-auto">
<div className="absolute inset-0 bg-slate-900 z-0">

<div className="w-full h-full bg-gradient-to-br from-indigo-900/20 to-slate-900 flex items-center justify-center">
<div className="w-3/4 h-3/4 border border-white/5 rounded-lg bg-slate-950/50 backdrop-blur shadow-2xl transform translate-y-8 group-hover:translate-y-6 transition-transform duration-500 p-4">
<div className="flex gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="w-full h-32 bg-white/5 rounded mb-2"></div>
<div className="w-2/3 h-4 bg-white/5 rounded"></div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10">
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl text-white font-medium tracking-tight mb-1">Nexus Analytics</h3>
<p className="text-slate-400 text-sm font-light">Dashboard de Visualização de Dados IA</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="glass-card group rounded-2xl overflow-hidden cursor-pointer relative aspect-square">
<div className="absolute inset-0 bg-slate-900 z-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
<iconify-icon className="text-white/20 group-hover:text-white/40 transition-colors text-6xl relative z-10" icon="solar:card-recieved-linear"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950 to-transparent z-10">
<h3 className="text-lg text-white font-medium tracking-tight">Strype Finance</h3>
<p className="text-slate-400 text-xs font-light">App de Banco Digital</p>
</div>
</div>

<div className="glass-card group rounded-2xl overflow-hidden cursor-pointer relative aspect-square">
<div className="absolute inset-0 bg-slate-900 z-0 flex items-center justify-center">
<div className="grid grid-cols-2 gap-2 transform rotate-12 opacity-30 group-hover:opacity-50 transition-opacity">
<div className="w-12 h-16 border border-white/10 rounded-md"></div>
<div className="w-12 h-16 bg-white/5 rounded-md"></div>
<div className="w-12 h-16 bg-white/5 rounded-md"></div>
<div className="w-12 h-16 border border-white/10 rounded-md"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950 to-transparent z-10">
<h3 className="text-lg text-white font-medium tracking-tight">Vantage Systems</h3>
<p className="text-slate-400 text-xs font-light">Design System para SaaS</p>
</div>
</div>

<div className="glass-card group rounded-2xl overflow-hidden cursor-pointer relative lg:col-span-2 aspect-[16/9] md:aspect-auto">
<div className="absolute inset-0 bg-slate-900 z-0">
<div className="w-full h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950">

<div className="relative w-1/2 aspect-video border border-white/10 bg-black rounded shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:scale-105 transition-transform duration-500 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-6 border-b border-white/10 flex items-center px-2 gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
</div>
<div className="p-4 grid grid-cols-3 gap-2 mt-4">
<div className="h-12 bg-white/5 rounded"></div>
<div className="h-12 bg-white/5 rounded col-span-2"></div>
<div className="h-24 bg-white/5 rounded col-span-3"></div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10">
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl text-white font-medium tracking-tight mb-1">Echo Platform</h3>
<p className="text-slate-400 text-sm font-light">Interface de Trading Web3</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="process">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="font-display font-medium text-3xl tracking-tight text-white mb-2">O Processo</h2>
<p className="text-slate-400 text-sm font-light">Abordagem sistemática para resolução de problemas complexos.</p>
</div>
<div className="relative">

<div className="absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">

<div className="relative group">
<div className="hidden md:flex items-center justify-center w-3 h-3 rounded-full bg-slate-950 border border-white/20 relative z-10 mb-8 group-hover:border-indigo-500 group-hover:scale-125 transition-all mx-auto">
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
<div className="p-6 md:p-0 border-l border-white/10 md:border-none pl-6 md:pl-0 md:text-center">
<span className="text-xs font-mono text-indigo-400 mb-2 block">01</span>
<h3 className="text-white font-medium text-lg mb-2">Descoberta</h3>
<p className="text-slate-500 text-sm font-light leading-relaxed">
                                Entendendo as necessidades essenciais do usuário, objetivos de negócio e restrições técnicas através de pesquisa profunda.
                            </p>
</div>
</div>

<div className="relative group">
<div className="hidden md:flex items-center justify-center w-3 h-3 rounded-full bg-slate-950 border border-white/20 relative z-10 mb-8 group-hover:border-indigo-500 group-hover:scale-125 transition-all mx-auto">
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
<div className="p-6 md:p-0 border-l border-white/10 md:border-none pl-6 md:pl-0 md:text-center">
<span className="text-xs font-mono text-indigo-400 mb-2 block">02</span>
<h3 className="text-white font-medium text-lg mb-2">Estratégia</h3>
<p className="text-slate-500 text-sm font-light leading-relaxed">
                                Estruturando a arquitetura de informação, fluxos de usuário e wireframes para garantir a lógica antes da estética.
                            </p>
</div>
</div>

<div className="relative group">
<div className="hidden md:flex items-center justify-center w-3 h-3 rounded-full bg-slate-950 border border-white/20 relative z-10 mb-8 group-hover:border-indigo-500 group-hover:scale-125 transition-all mx-auto">
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
<div className="p-6 md:p-0 border-l border-white/10 md:border-none pl-6 md:pl-0 md:text-center">
<span className="text-xs font-mono text-indigo-400 mb-2 block">03</span>
<h3 className="text-white font-medium text-lg mb-2">Design</h3>
<p className="text-slate-500 text-sm font-light leading-relaxed">
                                Criando interfaces de alta fidelidade com foco em componentes atômicos, tipografia e microinterações.
                            </p>
</div>
</div>

<div className="relative group">
<div className="hidden md:flex items-center justify-center w-3 h-3 rounded-full bg-slate-950 border border-white/20 relative z-10 mb-8 group-hover:border-indigo-500 group-hover:scale-125 transition-all mx-auto">
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
<div className="p-6 md:p-0 border-l border-white/10 md:border-none pl-6 md:pl-0 md:text-center">
<span className="text-xs font-mono text-indigo-400 mb-2 block">04</span>
<h3 className="text-white font-medium text-lg mb-2">Entrega</h3>
<p className="text-slate-500 text-sm font-light leading-relaxed">
                                Entregando assets prontos para código, documentação limpa e suporte ao processo de QA para o lançamento.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-900/20 border-y border-white/5">
<div className="max-w-5xl mx-auto text-center">
<h2 className="font-display font-medium text-2xl tracking-tight text-white mb-10">Ferramentas &amp; Tecnologias</h2>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

<div className="glass-card p-4 rounded-lg flex flex-col items-center gap-3 hover:bg-white/5 transition-colors">
<iconify-icon className="text-white" icon="solar:figma-file-linear" width="28"></iconify-icon>
<span className="text-xs text-slate-400">Figma</span>
</div>

<div className="glass-card p-4 rounded-lg flex flex-col items-center gap-3 hover:bg-white/5 transition-colors">
<iconify-icon className="text-white" icon="solar:code-square-linear" width="28"></iconify-icon>
<span className="text-xs text-slate-400">React</span>
</div>

<div className="glass-card p-4 rounded-lg flex flex-col items-center gap-3 hover:bg-white/5 transition-colors">
<iconify-icon className="text-white" icon="solar:palette-linear" width="28"></iconify-icon>
<span className="text-xs text-slate-400">Tailwind</span>
</div>

<div className="glass-card p-4 rounded-lg flex flex-col items-center gap-3 hover:bg-white/5 transition-colors">
<iconify-icon className="text-white" icon="solar:magic-stick-3-linear" width="28"></iconify-icon>
<span className="text-xs text-slate-400">Framer</span>
</div>

<div className="glass-card p-4 rounded-lg flex flex-col items-center gap-3 hover:bg-white/5 transition-colors">
<iconify-icon className="text-white" icon="solar:database-linear" width="28"></iconify-icon>
<span className="text-xs text-slate-400">Notion</span>
</div>

<div className="glass-card p-4 rounded-lg flex flex-col items-center gap-3 hover:bg-white/5 transition-colors">
<iconify-icon className="text-white" icon="solar:bolt-linear" width="28"></iconify-icon>
<span className="text-xs text-slate-400">Linear</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="glass-card p-8 rounded-xl relative">
<iconify-icon className="text-indigo-500/20 absolute top-6 right-6" icon="solar:quote-up-linear" width="48"></iconify-icon>
<p className="text-slate-300 font-light italic leading-relaxed mb-6">
                    "A atenção aos detalhes e a habilidade de traduzir requisitos complexos em uma interface intuitiva foi excepcional. Um verdadeiro parceiro na estratégia do produto."
                </p>
<div>
<h4 className="text-white text-sm font-medium">Sarah Jenkins</h4>
<p className="text-slate-500 text-xs">CTO, Nexus Analytics</p>
</div>
</div>
<div className="glass-card p-8 rounded-xl relative">
<iconify-icon className="text-indigo-500/20 absolute top-6 right-6" icon="solar:quote-up-linear" width="48"></iconify-icon>
<p className="text-slate-300 font-light italic leading-relaxed mb-6">
                    "Raramente se encontra um designer que entende de código tão bem. A entrega foi impecável, economizando semanas de desenvolvimento da nossa equipe de engenharia."
                </p>
<div>
<h4 className="text-white text-sm font-medium">David Chen</h4>
<p className="text-slate-500 text-xs">Fundador, Strype Finance</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950/20 pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tighter text-white mb-6">
                Pronto para construir o futuro?
            </h2>
<p className="text-slate-400 font-light mb-10">
                Aceitando novos projetos para o Q4 de 2023. Vamos discutir como elevar seu produto digital.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group px-8 py-4 bg-white text-slate-950 rounded-lg text-sm font-medium hover:bg-slate-200 transition-all flex items-center gap-2" href="mailto:hello@jack.dsgn">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
                    hello@jack.dsgn
                </a>
<a className="px-8 py-4 bg-transparent border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/5 transition-all flex items-center gap-2" href="#">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
                    Conectar no LinkedIn
                </a>
</div>
</div>
</section>

<footer className="py-8 px-6 border-t border-white/5 bg-slate-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-slate-500 text-xs font-light">
                © 2023 JACK-DSGN. Todos os Direitos Reservados.
            </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-dribbble-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
