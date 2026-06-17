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
'tj-bg': '#FAFAF8',
'tj-text': '#0D0D0B',
'tj-gold': '#C8A96E',
'tj-navy': '#1A3A5C',
'tj-neutral-1': '#E8E5DF',
'tj-neutral-2': '#7A7670',
'tj-bg-alt': '#F2EFE8',
'tj-navy-light': '#A0B8CC',
},
fontFamily: {
'display': ['"Playfair Display"', 'serif'],
'condensed': ['"Barlow Condensed"', 'sans-serif'],
'body': ['"Lora"', 'serif'],
'mono': ['"Roboto Mono"', 'monospace'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Setup initial classes
            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => {
                el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000', 'ease-out');
            });

            // Intersection Observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        observer.unobserve(entry.target);
                    }
                });
            }, { 
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px" 
            });

            revealElements.forEach(el => {
                observer.observe(el);
            });

            // Subtle Navbar effect on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('py-3');
                    navbar.classList.remove('py-4');
                } else {
                    navbar.classList.add('py-4');
                    navbar.classList.remove('py-3');
                }
            });
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
      

<nav className="fixed w-full top-0 z-50 bg-tj-bg/90 backdrop-blur-sm border-b border-tj-neutral-1 px-6 py-4 flex justify-between items-center transition-transform duration-300" id="navbar">
<div className="font-display font-extrabold text-xl tracking-tighter">Tipografia Jurídica.</div>
<div className="hidden md:flex gap-8 font-condensed uppercase tracking-widest text-sm text-tj-neutral-2">
<a className="hover:text-tj-text transition-colors" href="#metodo">Método</a>
<a className="hover:text-tj-text transition-colors" href="#consultor">Consultor</a>
<a className="hover:text-tj-text transition-colors" href="#cursos">Cursos</a>
<a className="hover:text-tj-text transition-colors" href="#servicos">Serviços</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden px-6 md:px-12 lg:px-24">

<div className="absolute -top-12 -left-12 font-display text-9xl scale-[3] md:scale-[5] text-tj-neutral-1 opacity-40 select-none z-0 tracking-tighter">01</div>
<div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10 items-center">

<div className="lg:col-span-7 reveal">
<span className="font-mono text-xs uppercase text-tj-gold tracking-widest block mb-4">Tipografia Jurídica</span>
<div className="h-px w-12 bg-tj-gold mb-8"></div>
<h1 className="font-display font-extrabold text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] text-tj-text mb-8">
                    A melhor<br/>comunicação<br/>em documentos jurídicos.
                </h1>
<p className="font-sans text-xl text-tj-neutral-2 max-w-lg mb-12 leading-relaxed">
                    Aprenda a transformar documentos em instrumentos de credibilidade e persuasão.
                </p>
<div className="flex flex-wrap gap-8 items-center">
<a className="group flex items-center gap-2 font-condensed uppercase tracking-widest text-base font-medium text-tj-text hover:text-tj-gold transition-colors" href="#cursos">
                        Conheça os cursos <span className="group-hover:translate-x-1 transition-transform">→</span>
</a>
<a className="font-sans text-base text-tj-neutral-2 hover:text-tj-text underline decoration-1 underline-offset-4 decoration-transparent hover:decoration-tj-text transition-all" href="#servicos">
                        Consultoria para escritórios
                    </a>
</div>
</div>

<div className="lg:col-span-5 relative mt-12 lg:mt-0 reveal delay-200">
<div className="relative w-full max-w-md mx-auto aspect-[3/4]">

<img alt="Júlio Xavier" className="w-full h-full object-cover grayscale contrast-125 object-center" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute -bottom-8 -left-8 w-3/4 aspect-[1/1.414] bg-white border border-tj-neutral-1 p-6 -rotate-[3deg] shadow-sm flex flex-col gap-3 z-20">
<div className="h-2 w-1/3 bg-tj-neutral-1/50 rounded-sm"></div>
<div className="h-1 w-full bg-tj-neutral-1/30 mt-4 rounded-sm"></div>
<div className="h-1 w-5/6 bg-tj-neutral-1/30 rounded-sm"></div>
<div className="h-1 w-full bg-tj-neutral-1/30 rounded-sm"></div>
<div className="h-1 w-4/5 bg-tj-neutral-1/30 rounded-sm"></div>
<div className="h-px w-full bg-tj-gold/30 my-4"></div>
<div className="h-1 w-full bg-tj-neutral-1/30 rounded-sm"></div>
<div className="h-1 w-3/4 bg-tj-neutral-1/30 rounded-sm"></div>
</div>
</div>
<p className="font-mono text-xs text-tj-neutral-2 mt-12 text-center lg:text-left uppercase tracking-wider">Júlio Xavier — Consultor em Tipografia Jurídica</p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative border-t border-tj-neutral-1" id="metodo">
<span className="absolute top-8 left-6 md:left-12 lg:left-24 font-mono text-sm text-tj-gold">I</span>
<div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

<div className="lg:col-span-4 lg:col-start-2 reveal">
<h2 className="font-condensed uppercase tracking-widest text-sm text-tj-neutral-2 mb-6">O Método</h2>
<h3 className="font-display font-extrabold text-4xl md:text-5xl tracking-tighter leading-tight text-tj-text">
                    Documentos que se destacam vencem.
                </h3>
<div className="h-px w-full bg-tj-gold mt-8"></div>
</div>

<div className="lg:col-span-7 reveal delay-200">
<div className="space-y-8 text-tj-text text-lg leading-loose">
<p>
                        O documento jurídico é o principal veículo de comunicação do advogado. Sua qualidade visual comunica competência antes mesmo de ser lido.
                    </p>
<blockquote className="border-l-2 border-tj-gold pl-8 md:pl-10 py-2 my-12 font-display italic text-2xl md:text-3xl tracking-tight text-tj-text">
                        "O documento fala antes de você. Faça com que ele fale bem."
                    </blockquote>
<p>
                        Tipografia Jurídica é a ciência e disciplina de formatar documentos com precisão, consistência e intenção — aplicando princípios do design gráfico ao universo do direito.
                    </p>
<p>
                        Mais de 10.000 advogados e instituições já aplicam esse método nos seus escritórios, transformando o padrão visual de petições, contratos e pareceres em todo o país.
                    </p>
</div>
<div className="mt-16 pt-6 border-t border-tj-neutral-1">
<p className="font-sans font-medium text-tj-text">10.000+ profissionais formados</p>
</div>
</div>
</div>
</section>

<section className="bg-tj-bg-alt py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden" id="consultor">
<span className="absolute top-8 left-6 md:left-12 lg:left-24 font-mono text-sm text-tj-gold">II</span>
<div className="w-full max-w-[860px] mx-auto flex flex-col items-center reveal">
<h2 className="font-condensed uppercase tracking-widest text-sm text-tj-neutral-2 mb-4 text-center">Consultor</h2>
<h3 className="font-display font-extrabold text-5xl md:text-6xl tracking-tighter leading-none text-tj-text text-center mb-8">
                Júlio Xavier
            </h3>
<div className="flex flex-wrap justify-center gap-3 mb-16">
<span className="border border-tj-text px-4 py-1.5 text-xs font-condensed uppercase tracking-widest text-tj-text rounded-none">Tipografia Jurídica</span>
<span className="border border-tj-text px-4 py-1.5 text-xs font-condensed uppercase tracking-widest text-tj-text rounded-none">Palestra</span>
<span className="border border-tj-text px-4 py-1.5 text-xs font-condensed uppercase tracking-widest text-tj-text rounded-none">Consultoria</span>
</div>
<div className="max-w-[640px] text-center space-y-6 text-lg leading-loose text-tj-text mb-16">
<p>
                    Com uma trajetória que une o rigor da prática jurídica à precisão do design editorial, Júlio Xavier desenvolveu um método multidisciplinar inédito no Brasil.
                </p>
<p>
                    Seu trabalho desmistifica a formatação, provando que a estética de uma peça não é mero adorno, mas ferramenta fundamental de persuasão e clareza argumentativa perante magistrados e clientes.
                </p>
</div>

<div className="relative w-full max-w-[320px] translate-x-0 md:translate-x-6 lg:translate-x-12 mb-20">
<img alt="Júlio Xavier" className="w-full aspect-[3/4] object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute -right-12 bottom-12 origin-bottom-left -rotate-90 hidden md:block">
<p className="font-mono text-xs text-tj-neutral-2 tracking-[0.2em] whitespace-nowrap">CONSULTOR · PROFESSOR · PALESTRANTE</p>
</div>
</div>

<div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-tj-neutral-1 pt-8 gap-8 md:gap-0">
<div className="text-center md:text-left">
<div className="font-display font-extrabold text-3xl md:text-4xl text-tj-gold mb-1">10.000+</div>
<div className="font-sans text-sm text-tj-neutral-2">alunos</div>
</div>
<div className="hidden md:block h-12 w-px bg-tj-neutral-1"></div>
<div className="text-center">
<div className="font-display font-extrabold text-3xl md:text-4xl text-tj-gold mb-1">Presença</div>
<div className="font-sans text-sm text-tj-neutral-2">nacional</div>
</div>
<div className="hidden md:block h-12 w-px bg-tj-neutral-1"></div>
<div className="text-center md:text-right">
<div className="font-display font-extrabold text-3xl md:text-4xl text-tj-gold mb-1">Exclusivo</div>
<div className="font-sans text-sm text-tj-neutral-2">método</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative bg-tj-bg" id="cursos">
<span className="absolute top-8 left-6 md:left-12 lg:left-24 font-mono text-sm text-tj-gold">III</span>
<div className="w-full max-w-7xl mx-auto">
<h2 className="font-condensed uppercase tracking-widest text-sm text-tj-neutral-2 mb-6 reveal">Cursos On-line</h2>
<h3 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight text-tj-text max-w-2xl mb-20 reveal delay-100">
                Soluções de aprendizado para a carreira do advogado.
            </h3>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-tj-neutral-1 border-t border-b border-tj-neutral-1 reveal delay-200">

<div className="group p-8 md:p-12 transition-transform duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-full bg-tj-bg">
<div className="font-mono text-4xl text-tj-gold mb-8">01</div>
<h4 className="font-display font-extrabold text-2xl tracking-tight text-tj-text mb-4 leading-snug">
                        Masterclass Formatando com Excelência
                    </h4>
<p className="font-sans text-base text-tj-neutral-2 mb-12 flex-grow">
                        Aprenda os fundamentos da diagramação jurídica e pare de lutar contra o editor de texto.
                    </p>
<div className="inline-flex items-center gap-2 font-condensed uppercase tracking-widest text-sm text-tj-text group-hover:text-tj-gold transition-colors w-max relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-tj-gold after:scale-x-0 after:origin-right group-hover:after:scale-x-100 group-hover:after:origin-left after:transition-transform after:duration-300">
                        Saiba mais <span>→</span>
</div>
</div>

<div className="group p-8 md:p-12 transition-transform duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-full bg-tj-bg">
<div className="font-mono text-4xl text-tj-gold mb-8">02</div>
<h4 className="font-display font-extrabold text-2xl tracking-tight text-tj-text mb-4 leading-snug">
                        Masterclass Peças que Conquistam
                    </h4>
<p className="font-sans text-base text-tj-neutral-2 mb-12 flex-grow">
                        Estratégias avançadas de hierarquia visual para destacar argumentos centrais.
                    </p>
<div className="inline-flex items-center gap-2 font-condensed uppercase tracking-widest text-sm text-tj-text group-hover:text-tj-gold transition-colors w-max relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-tj-gold after:scale-x-0 after:origin-right group-hover:after:scale-x-100 group-hover:after:origin-left after:transition-transform after:duration-300">
                        Saiba mais <span>→</span>
</div>
</div>

<div className="group p-8 md:p-12 transition-transform duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-full bg-tj-bg relative overflow-hidden">
<div className="flex justify-between items-start mb-8">
<div className="font-mono text-4xl text-tj-gold">03</div>
<span className="font-mono text-[10px] tracking-widest uppercase text-tj-bg bg-tj-gold px-2 py-1">Mais Completo</span>
</div>
<h4 className="font-display font-extrabold text-2xl tracking-tight text-tj-text mb-4 leading-snug">
                        Formação Tipografia Jurídica — O Curso
                    </h4>
<p className="font-sans text-base text-tj-neutral-2 mb-12 flex-grow">
                        O método integral do básico ao avançado. Transforme definitivamente a comunicação do seu escritório.
                    </p>
<div className="inline-flex items-center gap-2 font-condensed uppercase tracking-widest text-sm text-tj-text group-hover:text-tj-gold transition-colors w-max relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-tj-gold after:scale-x-0 after:origin-right group-hover:after:scale-x-100 group-hover:after:origin-left after:transition-transform after:duration-300">
                        Saiba mais <span>→</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative border-t border-tj-neutral-1" id="servicos">
<span className="absolute top-8 left-6 md:left-12 lg:left-24 font-mono text-sm text-tj-gold">IV</span>
<div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

<div className="lg:col-span-5 reveal">
<h2 className="font-condensed uppercase tracking-widest text-sm text-tj-neutral-2 mb-6">Serviços</h2>
<h3 className="font-display font-extrabold text-4xl md:text-5xl tracking-tighter leading-tight text-tj-text mb-8">
                    Consultoria de reformulação documental para escritórios.
                </h3>
<p className="font-sans text-base text-tj-neutral-2 mb-10 max-w-md leading-relaxed">
                    Alinhamos a identidade visual dos seus documentos ao prestígio da sua banca, criando padrões eficientes e esteticamente impecáveis.
                </p>
<a className="inline-flex items-center gap-2 font-condensed uppercase tracking-widest text-base font-medium text-tj-text hover:text-tj-gold transition-colors" href="#">
                    Fale com a equipe <span>→</span>
</a>
</div>

<div className="lg:col-span-7 flex flex-col justify-center reveal delay-200">
<div className="group border-b border-tj-neutral-1 py-8 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 cursor-pointer">
<span className="font-mono text-sm text-tj-gold shrink-0 w-8">01</span>
<div className="flex-grow">
<h4 className="font-sans text-xl font-medium text-tj-text mb-2 transition-colors">Palestras e Treinamentos</h4>
<p className="font-sans text-base text-tj-neutral-2 max-w-lg">Soluções in-company para conscientização e nivelamento técnico de toda a equipe jurídica.</p>
</div>
<span className="text-tj-neutral-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block">→</span>
</div>
<div className="group border-b border-tj-neutral-1 py-8 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 cursor-pointer">
<span className="font-mono text-sm text-tj-gold shrink-0 w-8">02</span>
<div className="flex-grow">
<h4 className="font-sans text-xl font-medium text-tj-text mb-2 transition-colors">Consultoria Individualizada</h4>
<p className="font-sans text-base text-tj-neutral-2 max-w-lg">Atendimento direto com os sócios para diagnóstico e criação de um novo manual de identidade tipográfica.</p>
</div>
<span className="text-tj-neutral-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block">→</span>
</div>
<div className="group py-8 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 cursor-pointer">
<span className="font-mono text-sm text-tj-gold shrink-0 w-8">03</span>
<div className="flex-grow">
<h4 className="font-sans text-xl font-medium text-tj-text mb-2 transition-colors">Auditoria de Peças</h4>
<p className="font-sans text-base text-tj-neutral-2 max-w-lg">Revisão técnica de memoriais e recursos importantes para maximizar impacto em instâncias superiores.</p>
</div>
<span className="text-tj-neutral-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block">→</span>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-tj-bg-alt relative">
<span className="absolute top-8 left-6 md:left-12 lg:left-24 font-mono text-sm text-tj-gold">V</span>
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center reveal">
<h2 className="font-condensed uppercase tracking-widest text-sm text-tj-neutral-2 mb-6">Nossos Clientes</h2>
<h3 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-tight text-tj-text max-w-3xl mx-auto mb-20">
                Escritórios e instituições que confiam no método.
            </h3>
</div>

<div className="relative w-full flex overflow-hidden bg-white py-12 border-y border-tj-neutral-1 reveal delay-100">
<div className="flex whitespace-nowrap animate-scroll items-center">

<div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
<span className="font-display font-extrabold text-2xl tracking-tighter text-tj-text grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">Vernalha Pereira</span>
<span className="font-condensed uppercase tracking-widest text-xl text-tj-text grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default border border-tj-text px-3 py-1">ADVOCEF</span>
<span className="font-serif italic text-2xl text-tj-text grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">Júpiter Federal</span>
<span className="font-mono text-xl tracking-widest text-tj-text grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">MPSC</span>
<span className="font-sans font-extrabold text-2xl tracking-tight text-tj-text grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">SESC</span>
<span className="font-display font-medium text-2xl text-tj-text grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">João Domingos</span>
<span className="font-condensed text-xl uppercase tracking-wider text-tj-text grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">Stabile Passare</span>
</div>

<div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
<span className="font-display font-extrabold text-2xl tracking-tighter text-tj-text grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">Vernalha Pereira</span>
<span className="font-condensed uppercase tracking-widest text-xl text-tj-text grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default border border-tj-text px-3 py-1">ADVOCEF</span>
<span className="font-serif italic text-2xl text-tj-text grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">Júpiter Federal</span>
<span className="font-mono text-xl tracking-widest text-tj-text grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">MPSC</span>
<span className="font-sans font-extrabold text-2xl tracking-tight text-tj-text grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">SESC</span>
<span className="font-display font-medium text-2xl text-tj-text grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">João Domingos</span>
<span className="font-condensed text-xl uppercase tracking-wider text-tj-text grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">Stabile Passare</span>
</div>
</div>
</div>
<div className="max-w-3xl mx-auto px-6 mt-20 reveal delay-200">
<blockquote className="border-l-2 border-tj-gold pl-6 py-1 font-body italic text-xl md:text-2xl text-tj-text leading-relaxed">
                "A reestruturação dos nossos templates mudou a forma como os desembargadores recebem nossos memoriais. A leitura tornou-se fluida e os argumentos ganharam o destaque devido. É um investimento com retorno jurídico imediato."
            </blockquote>
<p className="mt-6 font-sans text-sm font-medium text-tj-neutral-2 uppercase tracking-wide">
                — Sócio Administrador, Banca de São Paulo
            </p>
</div>
</section>

<section className="bg-tj-navy text-tj-bg py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
<span className="absolute top-8 left-6 md:left-12 lg:left-24 font-mono text-sm text-tj-gold">VI</span>
<div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="reveal relative z-10">
<h2 className="font-mono uppercase tracking-widest text-sm text-tj-gold mb-6">Material Gratuito</h2>
<h3 className="font-display font-extrabold text-4xl md:text-5xl tracking-tighter leading-tight text-white mb-6">
                    7 Erros de Formatação que Comprometem sua Peça.
                </h3>
<p className="font-sans text-lg text-tj-navy-light mb-12 max-w-md leading-relaxed">
                    Baixe gratuitamente o e-book e descubra como a tipografia impacta silenciosamente a percepção de autoridade do seu trabalho.
                </p>
<form className="flex flex-col sm:flex-row gap-0 max-w-lg w-full">
<input className="flex-grow bg-tj-bg text-tj-text placeholder-tj-neutral-2 font-sans px-5 py-4 border border-tj-neutral-1 rounded-none focus:outline-none focus:ring-1 focus:ring-tj-gold" placeholder="Seu melhor e-mail institucional" required="" type="email"/>
<button className="bg-tj-gold text-tj-navy font-sans font-semibold px-8 py-4 uppercase tracking-wider text-sm hover:bg-white transition-colors rounded-none whitespace-nowrap" type="submit">
                        Receber agora →
                    </button>
</form>
<p className="font-sans text-xs text-tj-navy-light mt-4 opacity-70">
                    Oditamos spam. Cancele a inscrição quando quiser.
                </p>
</div>

<div className="relative flex justify-center lg:justify-end reveal delay-200">

<div className="relative w-[280px] md:w-[340px] aspect-[1/1.4] bg-tj-bg shadow-2xl rotate-[5deg] origin-bottom-right transition-transform hover:rotate-0 duration-500 ease-out border border-tj-neutral-1/20 p-8 flex flex-col justify-between z-10">
<div>
<div className="font-mono text-xs uppercase tracking-widest text-tj-gold mb-4">E-book Exclusivo</div>
<div className="font-display font-extrabold text-3xl tracking-tighter text-tj-text leading-none mb-2">7 Erros de</div>
<div className="font-display font-extrabold text-3xl tracking-tighter text-tj-text leading-none mb-6">Formatação</div>
<div className="h-px w-8 bg-tj-text mb-6"></div>
<div className="h-2 w-full bg-tj-neutral-1 mt-4"></div>
<div className="h-2 w-5/6 bg-tj-neutral-1 mt-3"></div>
<div className="h-2 w-4/6 bg-tj-neutral-1 mt-3"></div>
</div>
<div className="font-sans text-xs uppercase tracking-widest text-tj-neutral-2">Tipografia Jurídica</div>

<div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-r from-tj-neutral-1 to-tj-bg border-r border-black/5"></div>
</div>

<div className="absolute inset-0 bg-white opacity-5 mix-blend-overlay pointer-events-none transform -skew-y-12 scale-150 z-0"></div>
</div>
</div>
</section>

<footer className="bg-tj-bg border-t border-tj-neutral-1 py-12 px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-display font-extrabold text-lg tracking-tight text-tj-text">Tipografia Jurídica.</div>
<div className="font-sans text-xs text-tj-neutral-2 tracking-wide">
            © 2024 Júlio Xavier. Todos os direitos reservados.
        </div>
</footer>



    </>
  );
}
