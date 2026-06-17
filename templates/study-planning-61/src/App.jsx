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


document.write(new Date().getFullYear())


        gsap.registerPlugin(ScrollTrigger);

        // 1. Initial Staggered Reveal
        gsap.utils.toArray('.gsap-reveal').forEach(elem => {
            gsap.fromTo(elem,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: { 
                        trigger: elem, 
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // 2. SVG Background Line Drawing
        const path1 = document.querySelector('.gsap-path');
        const path2 = document.querySelector('.gsap-path-2');
        
        if (path1 && path2) {
            const length1 = path1.getTotalLength();
            const length2 = path2.getTotalLength();

            gsap.set(path1, { strokeDasharray: length1, strokeDashoffset: length1 });
            gsap.set(path2, { strokeDasharray: length2, strokeDashoffset: length2 });

            // Animate lines drawing based on scroll
            gsap.to(path1, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.5
                }
            });

            gsap.to(path2, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1
                }
            });
        }

        // 3. Central Timeline Line Indicator (Desktop Features section)
        const indicator = document.querySelector('.gsap-scroll-indicator');
        if(indicator) {
             gsap.to(indicator, {
                y: () => document.querySelector('.flex.flex-col.gap-32').offsetHeight - 128,
                ease: "none",
                scrollTrigger: {
                    trigger: ".flex.flex-col.gap-32",
                    start: "top center",
                    end: "bottom center",
                    scrub: true
                }
            });
        }

        // 4. Glow Node color transition trigger
        const glowNode = document.querySelector('.gsap-glow-node');
        if(glowNode) {
            ScrollTrigger.create({
                trigger: glowNode,
                start: "top center",
                onEnter: () => glowNode.classList.replace('bg-zinc-600', 'bg-orange-500'),
                onLeaveBack: () => glowNode.classList.replace('bg-orange-500', 'bg-zinc-600')
            });
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">

<div className="absolute top-0 right-[10%] w-[40vw] h-[40vw] bg-orange-600/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[5%] w-[50vw] h-[50vw] bg-orange-500/5 rounded-full blur-[150px]"></div>

<svg className="absolute w-[200vw] h-[200vh] lg:w-[120vw] lg:h-[120vh] opacity-40" preserveaspectratio="xMidYMid slice" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter height="200%" id="neon-glow" width="200%" x="-50%" y="-50%">
<fegaussianblur result="coloredBlur" stddeviation="6"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<lineargradient id="line-grad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="50%" stop-color="#f97316" stop-opacity="0.6"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>

<path className="gsap-path" d="M -100,800 C 300,700 400,200 700,400 C 900,533 1100,100 1200,300" fill="none" filter="url(#neon-glow)" stroke="url(#line-grad)" strokeWidth="1.5"></path>
<path className="gsap-path-2" d="M 1200,800 C 900,900 700,400 400,600 C 200,733 -100,300 -200,500" fill="none" stroke="rgba(249,115,22,0.15)" strokeWidth="1"></path>
<path className="gsap-path-3" d="M 200,1200 C 300,900 100,500 500,300 C 800,150 700,-100 900,-200" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2"></path>
</svg>
</div>

<div className="relative z-10 selection:bg-orange-500/20 selection:text-orange-200">

<header className="w-full bg-[#050505]/60 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-1">
<span className="text-zinc-100 font-semibold tracking-tighter text-lg">MEU<span className="text-orange-500">PLANEJAMENTO</span></span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-200 transition-colors" href="#">Método</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-200 transition-colors" href="#">Sistema</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-200 transition-colors" href="#">Resultados</a>
</nav>
<a className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-zinc-950 px-4 py-2 rounded-full font-medium text-sm transition-all" href="#">
                    Acessar
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 pt-24 pb-20 lg:pt-32 lg:pb-28 relative">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-between">

<div className="flex-1 flex flex-col items-start gap-8 z-10 w-full max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium tracking-wide gsap-reveal">
<iconify-icon height="14" icon="solar:rocket-linear" width="14"></iconify-icon>
                        A NOVA ERA DO ESTUDO PARA CONCURSOS
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-zinc-100 tracking-tight leading-none gsap-reveal delay-100">
                        Converta esforço em <span className="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-700 bg-clip-text text-transparent">aprovação.</span>
</h1>
<p className="text-lg text-zinc-400 leading-relaxed max-w-lg gsap-reveal delay-200">
                        Tenha clareza milimétrica sobre o que estudar, quando revisar e como evoluir. Uma infraestrutura inteligente para concurseiros de alta performance.
                    </p>
<div className="flex flex-wrap items-center gap-4 gsap-reveal delay-300">
<a className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]" href="#">
                            Inicie sua jornada
                            <iconify-icon height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-zinc-300 px-6 py-3 rounded-full font-medium text-sm transition-all" href="#">
                            Como funciona
                        </a>
</div>
</div>

<div className="flex-1 w-full lg:w-auto relative gsap-reveal delay-400">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>

<div className="relative z-10 grid grid-cols-2 gap-4 rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">

<div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-4 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500 tracking-tight">PROGRESSO</span>
<iconify-icon className="text-orange-500" height="16" icon="solar:chart-square-linear" width="16"></iconify-icon>
</div>
<div className="flex items-end gap-2 h-16">
<div className="w-full bg-zinc-800 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-orange-500/40 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-orange-500/80 rounded-t-sm h-[90%] shadow-[0_0_12px_rgba(249,115,22,0.4)] relative">
<div className="absolute top-0 left-0 w-full h-px bg-orange-300"></div>
</div>
<div className="w-full bg-zinc-800 rounded-t-sm h-[60%]"></div>
</div>
</div>

<div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-4 transform translate-y-6">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500 tracking-tight">REVISÃO</span>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
</div>
<div className="flex flex-col gap-2">
<div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-[85%] h-full bg-zinc-400 rounded-full"></div>
</div>
<div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-[45%] h-full bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.6)]"></div>
</div>
<div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-[60%] h-full bg-zinc-600 rounded-full"></div>
</div>
</div>
</div>

<div className="col-span-2 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex items-center justify-between mt-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
<iconify-icon className="text-orange-500" height="20" icon="solar:target-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-zinc-200">Direito Administrativo</div>
<div className="text-xs text-zinc-500">Próximo ciclo em 2h</div>
</div>
</div>
<div className="text-lg font-semibold text-zinc-300 tracking-tight">89%</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
<div className="mb-12 gsap-reveal">
<h2 className="text-3xl font-semibold text-zinc-100 tracking-tight">Seus Números de <span className="text-orange-500">Sucesso</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-fr">

<div className="md:col-span-2 bg-[#0a0a0c]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group gsap-reveal">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-[60px] group-hover:bg-orange-500/20 transition-colors duration-700"></div>
<div className="relative z-10 flex items-start justify-between mb-16">
<span className="text-sm font-medium text-zinc-500 tracking-wide uppercase">Acerto Global</span>
<iconify-icon className="text-zinc-600 group-hover:text-orange-500 transition-colors" height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div className="relative z-10">
<div className="text-6xl lg:text-8xl font-semibold text-zinc-100 tracking-tighter leading-none mb-4">85.4<span className="text-3xl lg:text-5xl text-orange-500">%</span></div>
<p className="text-sm text-zinc-500">Média consolidada entre todas as disciplinas ativas na plataforma.</p>
</div>
</div>

<div className="bg-[#0a0a0c]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col justify-between gsap-reveal">
<div className="flex items-start justify-between mb-8">
<span className="text-sm font-medium text-zinc-500 tracking-wide uppercase">Questões</span>
<iconify-icon className="text-zinc-600" height="20" icon="solar:checklist-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-4xl lg:text-5xl font-semibold text-zinc-100 tracking-tighter mb-2">1.380+</div>
<p className="text-xs text-zinc-500">Exercícios resolvidos para praticar.</p>
</div>
</div>

<div className="bg-[#0a0a0c]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col justify-between gsap-reveal">
<div className="flex items-start justify-between mb-8">
<span className="text-sm font-medium text-zinc-500 tracking-wide uppercase">Destaque</span>
<iconify-icon className="text-orange-500" height="20" icon="solar:crown-star-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xl lg:text-2xl font-semibold text-zinc-200 tracking-tight mb-1">Direito Penal</div>
<div className="text-3xl font-semibold text-orange-500 tracking-tighter mb-2">89%</div>
<p className="text-xs text-zinc-500">Sua melhor matéria.</p>
</div>
</div>

<div className="md:col-span-2 bg-[#0a0a0c]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 flex items-end justify-between relative overflow-hidden gsap-reveal">

<svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveaspectratio="none">
<path d="M 0,100 C 150,150 200,50 400,80" fill="none" stroke="#f97316" strokeWidth="2"></path>
</svg>
<div className="relative z-10">
<div className="text-sm font-medium text-zinc-500 tracking-wide uppercase mb-6">Foco Necessário</div>
<div className="text-2xl font-semibold text-zinc-200 tracking-tight mb-1">Contabilidade</div>
<p className="text-sm text-zinc-500 max-w-xs">Área de atenção que requer revisão intensificada neste ciclo.</p>
</div>
<div className="relative z-10 text-5xl lg:text-6xl font-semibold text-zinc-600 tracking-tighter">58%</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32 relative">
<div className="text-center mb-24 gsap-reveal">
<h2 className="text-3xl font-semibold text-zinc-100 tracking-tight">Arquitetura de <span className="text-orange-500">Alta Performance</span></h2>
<p className="text-base text-zinc-500 mt-4 max-w-xl mx-auto">Não é apenas um cronograma. É um ecossistema projetado para identificar lacunas e otimizar sua retenção de conteúdo.</p>
</div>

<div className="hidden lg:block absolute left-1/2 top-[20%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2">
<div className="gsap-scroll-indicator w-full h-32 bg-gradient-to-b from-transparent via-orange-500/80 to-transparent"></div>
</div>
<div className="flex flex-col gap-32 relative">

<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
<div className="flex-1 lg:text-right gsap-reveal">
<span className="text-xs font-semibold text-orange-500 tracking-wide uppercase mb-3 block">Módulo Inteligente</span>
<h3 className="text-3xl lg:text-4xl font-semibold text-zinc-100 tracking-tight leading-tight mb-6">
                            Planejamento<br/>Baseado em Dados
                        </h3>
<p className="text-base text-zinc-400 mb-8 max-w-md lg:ml-auto">
                            O algoritmo calcula o peso exato de cada disciplina no seu edital cruzado com sua disponibilidade de horas semanais.
                        </p>
<ul className="flex flex-col gap-3 text-sm text-zinc-400 lg:items-end">
<li className="flex items-center gap-3 flex-row-reverse lg:flex-row">
                                Peso de cada disciplina
                                <iconify-icon className="text-orange-500" height="18" icon="solar:pie-chart-2-linear" width="18"></iconify-icon>
</li>
<li className="flex items-center gap-3 flex-row-reverse lg:flex-row">
                                Carga horária otimizada
                                <iconify-icon className="text-orange-500" height="18" icon="solar:clock-circle-linear" width="18"></iconify-icon>
</li>
</ul>
</div>

<div className="hidden lg:flex w-12 h-12 absolute left-1/2 -translate-x-1/2 bg-[#050505] border border-white/10 rounded-full items-center justify-center z-20 shadow-[0_0_20px_rgba(0,0,0,1)]">
<div className="w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
</div>
<div className="flex-1 w-full gsap-reveal">

<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="space-y-4">
<div className="h-4 w-3/4 bg-zinc-800 rounded"></div>
<div className="h-4 w-1/2 bg-zinc-800 rounded"></div>
<div className="h-4 w-full bg-zinc-800 rounded"></div>
<div className="flex gap-4 pt-4">
<div className="h-16 flex-1 bg-zinc-800/50 rounded flex items-end p-2 border border-white/5">
<div className="h-1/2 w-full bg-orange-500/40 rounded-sm"></div>
</div>
<div className="h-16 flex-1 bg-zinc-800/50 rounded flex items-end p-2 border border-white/5 relative">
<div className="absolute inset-0 border border-orange-500/30 rounded"></div>
<div className="h-[80%] w-full bg-orange-500/80 rounded-sm shadow-[0_0_15px_rgba(249,115,22,0.3)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24 relative z-10">
<div className="flex-1 gsap-reveal">
<span className="text-xs font-semibold text-orange-500 tracking-wide uppercase mb-3 block">Mapeamento Contínuo</span>
<h3 className="text-3xl lg:text-4xl font-semibold text-zinc-100 tracking-tight leading-tight mb-6">
                            Monitoramento<br/>de Desempenho
                        </h3>
<p className="text-base text-zinc-400 mb-8 max-w-md">
                            Rastreie sua evolução semana a semana. O sistema ajusta dinamicamente suas revisões focando onde seus acertos estão mais baixos.
                        </p>
<ul className="flex flex-col gap-3 text-sm text-zinc-400">
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" height="18" icon="solar:radar-linear" width="18"></iconify-icon>
                                Identificação de pontos fracos
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" height="18" icon="solar:history-linear" width="18"></iconify-icon>
                                Controle dinâmico de revisões
                            </li>
</ul>
</div>

<div className="hidden lg:flex w-12 h-12 absolute left-1/2 -translate-x-1/2 bg-[#050505] border border-white/10 rounded-full items-center justify-center z-20 shadow-[0_0_20px_rgba(0,0,0,1)]">
<div className="w-3 h-3 bg-zinc-600 rounded-full transition-colors duration-500 gsap-glow-node"></div>
</div>
<div className="flex-1 w-full gsap-reveal">

<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 h-64 relative overflow-hidden flex items-end justify-between gap-2 group">

<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none">
<path d="M 0,200 C 100,200 150,100 250,150 C 350,200 400,50 500,80 L 500,300 L 0,300 Z" fill="rgba(249,115,22,0.05)"></path>
<path d="M 0,200 C 100,200 150,100 250,150 C 350,200 400,50 500,80" fill="none" stroke="rgba(249,115,22,0.4)" strokeWidth="2"></path>
</svg>

<div className="w-full bg-zinc-800/30 rounded-t h-[30%] z-10 border-t border-white/5"></div>
<div className="w-full bg-zinc-800/30 rounded-t h-[50%] z-10 border-t border-white/5"></div>
<div className="w-full bg-zinc-800/30 rounded-t h-[40%] z-10 border-t border-white/5"></div>
<div className="w-full bg-orange-500/20 rounded-t h-[70%] z-10 border-t border-orange-500/50 relative">
<div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
</div>
<div className="w-full bg-zinc-800/30 rounded-t h-[60%] z-10 border-t border-white/5"></div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
<div className="mb-20 gsap-reveal flex flex-col items-center text-center">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-400 mb-6">O Processo</span>
<h2 className="text-3xl font-semibold text-zinc-100 tracking-tight">Evolução <span className="text-orange-500">Milimétrica</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">

<div className="hidden lg:block absolute top-[40%] left-[10%] right-[10%] h-px bg-white/5 z-0"></div>

<div className="bg-[#050505] border border-white/5 rounded-2xl p-6 relative z-10 mt-0 lg:-mt-6 hover:border-white/10 transition-colors gsap-reveal">
<span className="text-xs font-medium text-zinc-600 mb-4 block">Fase 01</span>
<iconify-icon className="text-zinc-300 mb-6" height="28" icon="solar:stopwatch-linear" width="28"></iconify-icon>
<h4 className="text-lg font-semibold text-zinc-200 tracking-tight mb-2">Cronometre</h4>
<p className="text-xs text-zinc-500">Registre cada minuto estudado com precisão cirúrgica no sistema.</p>
</div>

<div className="bg-[#050505] border border-white/5 rounded-2xl p-6 relative z-10 mt-0 lg:mt-6 hover:border-white/10 transition-colors gsap-reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent rounded-2xl pointer-events-none"></div>
<span className="text-xs font-medium text-zinc-600 mb-4 block">Fase 02</span>
<iconify-icon className="text-orange-500 mb-6 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" height="28" icon="solar:layers-linear" width="28"></iconify-icon>
<h4 className="text-lg font-semibold text-zinc-200 tracking-tight mb-2">Controle</h4>
<p className="text-xs text-zinc-500">O sistema agenda automaticamente quando rever cada tópico.</p>
</div>

<div className="bg-[#050505] border border-white/5 rounded-2xl p-6 relative z-10 mt-0 lg:-mt-6 hover:border-white/10 transition-colors gsap-reveal delay-200">
<span className="text-xs font-medium text-zinc-600 mb-4 block">Fase 03</span>
<iconify-icon className="text-zinc-300 mb-6" height="28" icon="solar:refresh-circle-linear" width="28"></iconify-icon>
<h4 className="text-lg font-semibold text-zinc-200 tracking-tight mb-2">Cicle</h4>
<p className="text-xs text-zinc-500">Alterne as matérias fluidamente, mantendo alta retenção.</p>
</div>

<div className="bg-[#050505] border border-white/5 rounded-2xl p-6 relative z-10 mt-0 lg:mt-6 hover:border-orange-500/30 transition-colors gsap-reveal delay-300 group">
<span className="text-xs font-medium text-zinc-600 mb-4 block">Fase Final</span>
<iconify-icon className="text-zinc-300 group-hover:text-orange-500 transition-colors mb-6" height="28" icon="solar:cup-star-linear" width="28"></iconify-icon>
<h4 className="text-lg font-semibold text-zinc-200 tracking-tight mb-2">Aprovação</h4>
<p className="text-xs text-zinc-500">Atingir métricas de corte significa que você está preparado.</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 relative z-10">
<div className="relative bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-16 text-center overflow-hidden gsap-reveal group">

<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-orange-500/40 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 opacity-60 group-hover:opacity-100"></div>

<div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-50"></div>
<div className="relative z-10">
<h2 className="text-3xl lg:text-4xl font-semibold text-zinc-100 mb-8 tracking-tight">Profissionalize seu estudo.</h2>
<div className="flex flex-col items-center justify-center gap-1 mb-8">
<span className="text-sm text-zinc-500 font-medium">Investimento</span>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-zinc-400">12x</span>
<span className="text-6xl font-semibold text-white tracking-tighter">R$ 19,96</span>
</div>
<span className="text-xs text-zinc-600 mt-2">Ou R$ 193,00 à vista no PIX.</span>
</div>
<a className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full md:w-auto" href="#">
<iconify-icon height="18" icon="solar:lock-password-linear" width="18"></iconify-icon>
                        Garantir Acesso
                    </a>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 py-24 relative z-10 gsap-reveal">
<div className="mb-12 text-center">
<h2 className="text-2xl font-semibold text-zinc-100 tracking-tight">Dúvidas Frequentes</h2>
</div>
<div className="flex flex-col gap-2">

<details className="group bg-zinc-900/30 border border-white/5 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-zinc-300 hover:text-white transition-colors">
                        Por quanto tempo terei acesso à plataforma?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-zinc-500">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-zinc-500 p-5 pt-0 text-sm leading-relaxed border-t border-white/5 mt-2">
                        O acesso à plataforma é válido por 12 meses (1 ano) a partir da data de confirmação do pagamento.
                    </div>
</details>

<details className="group bg-zinc-900/30 border border-white/5 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-zinc-300 hover:text-white transition-colors">
                        E se a plataforma não atender às minhas necessidades?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-zinc-500">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-zinc-500 p-5 pt-0 text-sm leading-relaxed border-t border-white/5 mt-2">
                        Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu investimento.
                    </div>
</details>

<details className="group bg-zinc-900/30 border border-white/5 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-zinc-300 hover:text-white transition-colors">
                        Funciona em celular e tablet?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-zinc-500">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-zinc-500 p-5 pt-0 text-sm leading-relaxed border-t border-white/5 mt-2">
                        Sim, a interface é adaptável e pode ser acessada perfeitamente de qualquer dispositivo.
                    </div>
</details>
</div>
</section>

<footer className="w-full border-t border-white/5 bg-[#050505] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

<div className="flex items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
<span className="text-zinc-100 font-semibold tracking-tighter text-sm">MEU<span className="text-orange-500">PLANEJAMENTO</span></span>
</div>
<p className="text-xs text-zinc-600">
                    ©  Meu Planejamento.
                </p>
<div className="flex gap-4 text-zinc-600">
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon></a>
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon height="20" icon="solar:shield-warning-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>
</div>



    </>
  );
}
