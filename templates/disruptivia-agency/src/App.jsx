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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Uncomment below if you want animation to happen only once
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal, .reveal-blur');
            revealElements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 ring-1 ring-white/5">
<div className="flex h-14 pt-2 pr-2 pb-2 pl-6 items-center justify-between">

<a className="flex items-center gap-2 text-white font-bold tracking-tight text-sm hover:opacity-80 transition-opacity select-none" href="#">
<svg aria-hidden="true" data-icon="lucide:cpu" data-strokeWidth="2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
                DISRUPTIVIA
            </a>

<div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#services">Serviços</a>
<a className="hover:text-white transition-colors duration-200" href="#clones">Clones</a>
<a className="hover:text-white transition-colors duration-200" href="#agents">Agentes</a>
<a className="hover:text-white transition-colors duration-200" href="#portfolio">Portfólio</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Planos</a>
</div>

<div className="flex items-center gap-2">

<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 border border-white/5 backdrop-blur-sm mr-1">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-semibold text-emerald-500 tracking-wider">ONLINE</span>
</div>

<a className="bg-white text-black text-xs font-semibold py-2.5 px-5 rounded-full hover:bg-neutral-200 transition-colors shadow-sm" href="#contact">
                    Contratar
                </a>

<button className="md:hidden ml-2 text-white p-2">
<svg aria-hidden="true" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-32">

<div className="absolute inset-0 z-0 opacity-40">
<img alt="AI Abstract Background" className="w-full h-full object-cover object-center grayscale mix-blend-screen" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto space-y-8">
<div className="reveal delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A84FF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A84FF]"></span>
</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-300 font-medium">Futuro do Marketing</span>
</div>
<h1 className="reveal-blur delay-200 text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[1.1]">
                A nova era do <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#4CC9FF] to-[#0A84FF] text-gradient-animate">marketing começa aqui.</span>
</h1>
<p className="reveal delay-300 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                A DISRUPTIVIA cria campanhas, marcas e experiências completas usando inteligência artificial de última geração. Transformamos ideias em presença, autoridade e vendas.
            </p>
<div className="reveal delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 font-semibold py-3 px-8 rounded-full transition-all text-sm" href="#contact">
                    Quero transformar meu marketing
                </a>
<a className="w-full sm:w-auto border border-white/20 hover:border-white/50 text-white font-medium py-3 px-8 rounded-full transition-all text-sm flex items-center justify-center gap-2 group" href="#portfolio">
                    Ver portfólio
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 bg-black">
<div className="max-w-4xl mx-auto">
<div className="border-l-2 border-[#0A84FF] pl-8 md:pl-12">
<h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight leading-tight space-y-2">

<span className="block reveal delay-100">Marketing criado por máquinas.</span>
<span className="block reveal delay-300 text-neutral-500">Estratégia guiada por humanos brilhantes.</span>
<span className="block reveal delay-500 text-transparent bg-clip-text bg-gradient-to-r from-[#4CC9FF] to-[#0A84FF]">Resultados que ninguém espera.</span>
</h2>
<p className="reveal delay-700 text-neutral-400 text-lg md:text-xl leading-relaxed">
                    A DISRUPTIVIA nasceu para romper o padrão. Aqui inteligência artificial não é ferramenta, é protagonista. Criamos clones digitais, agentes estratégicos e campanhas que desafiam a lógica tradicional. Você traz o problema. A gente traz a solução mais ousada que já existiu.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#050505]" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Arquitetura de Soluções</h2>
<span className="text-neutral-500 text-sm mt-4 md:mt-0 font-mono">SYSTEM_SERVICES_V.2.0</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all group reveal delay-100">
<div className="h-10 w-10 rounded-lg bg-[#0A84FF]/10 flex items-center justify-center mb-6 text-[#0A84FF]">
<svg aria-hidden="true" data-icon="lucide:megaphone" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"></path></g></svg>
</div>
<h3 className="text-white font-semibold text-lg mb-2">Campanhas com IA</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Do conceito ao anúncio final. Criativos gerados por dados para máxima conversão.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all group border-t border-[#4CC9FF]/30 reveal delay-200">
<div className="h-10 w-10 rounded-lg bg-[#4CC9FF]/10 flex items-center justify-center mb-6 text-[#4CC9FF]">
<svg aria-hidden="true" data-icon="lucide:user-check" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-white font-semibold text-lg mb-2">Clones Digitais</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Avatares hiper-realistas que falam por você. Presença onipresente.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all group reveal delay-300">
<div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400">
<svg aria-hidden="true" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<h3 className="text-white font-semibold text-lg mb-2">Agentes de IA</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Assistentes autônomos para vendas, suporte e triagem de leads 24/7.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all group reveal delay-100">
<div className="h-10 w-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 text-pink-400">
<svg aria-hidden="true" data-icon="lucide:share-2" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"></path></g></svg>
</div>
<h3 className="text-white font-semibold text-lg mb-2">Social Media IA</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Automação inteligente e estratégia de conteúdo preditiva.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all group reveal delay-200">
<div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400">
<svg aria-hidden="true" data-icon="lucide:camera" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg>
</div>
<h3 className="text-white font-semibold text-lg mb-2">Ensaios &amp; Produto</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Fotografia cinematográfica e packshots de produtos gerados sem câmera física.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all group reveal delay-300">
<div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-6 text-amber-400">
<svg aria-hidden="true" data-icon="lucide:brain-circuit" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
</div>
<h3 className="text-white font-semibold text-lg mb-2">Consultoria Estratégica</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Implementação de fluxos de IA dentro da sua operação de marketing.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-black border-y border-neutral-900">
<div className="max-w-7xl mx-auto">
<h2 className="reveal text-2xl font-semibold text-white mb-12 text-center tracking-tight">Por que escolher a DISRUPTIVIA?</h2>
<div className="flex flex-wrap justify-center gap-8 md:gap-16">
<div className="reveal delay-100 flex items-center gap-3 text-neutral-300">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-medium text-sm">Velocidade fora da curva</span>
</div>
<div className="reveal delay-200 flex items-center gap-3 text-neutral-300">
<svg aria-hidden="true" data-icon="lucide:cpu" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
<span className="font-medium text-sm">IA de ponta (SOTA)</span>
</div>
<div className="reveal delay-300 flex items-center gap-3 text-neutral-300">
<svg aria-hidden="true" data-icon="lucide:infinity" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-medium text-sm">Criatividade ilimitada</span>
</div>
<div className="reveal delay-400 flex items-center gap-3 text-neutral-300">
<svg aria-hidden="true" data-icon="lucide:crosshair" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"></path></g></svg>
<span className="font-medium text-sm">Precisão estratégica</span>
</div>
<div className="reveal delay-500 flex items-center gap-3 text-neutral-300">
<svg aria-hidden="true" data-icon="lucide:trending-up" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
<span className="font-medium text-sm">Custo eficiente</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#080808]">
<div className="max-w-7xl mx-auto">
<h2 className="reveal text-3xl font-semibold text-white mb-16 tracking-tight">Seu projeto nasce assim</h2>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-neutral-800 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">

<div className="reveal delay-100 bg-[#080808] md:p-4 text-center md:text-left">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 text-white flex items-center justify-center text-xs font-bold mb-4 mx-auto md:mx-0">1</div>
<h4 className="text-white font-medium mb-1">Briefing</h4>
<p className="text-xs text-neutral-500">Alinhamento de visão.</p>
</div>

<div className="reveal delay-200 bg-[#080808] md:p-4 text-center md:text-left">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 text-white flex items-center justify-center text-xs font-bold mb-4 mx-auto md:mx-0">2</div>
<h4 className="text-white font-medium mb-1">Arquitetura</h4>
<p className="text-xs text-neutral-500">Desenho da solução.</p>
</div>

<div className="reveal delay-300 bg-[#080808] md:p-4 text-center md:text-left">
<div className="w-8 h-8 rounded-full bg-[#0A84FF]/20 border border-[#0A84FF] text-[#0A84FF] flex items-center justify-center text-xs font-bold mb-4 mx-auto md:mx-0 shadow-[0_0_10px_rgba(10,132,255,0.4)]">3</div>
<h4 className="text-white font-medium mb-1">Execução IA</h4>
<p className="text-xs text-neutral-500">Geração e refino.</p>
</div>

<div className="reveal delay-400 bg-[#080808] md:p-4 text-center md:text-left">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 text-white flex items-center justify-center text-xs font-bold mb-4 mx-auto md:mx-0">4</div>
<h4 className="text-white font-medium mb-1">Validação</h4>
<p className="text-xs text-neutral-500">Ajustes finais.</p>
</div>

<div className="reveal delay-500 bg-[#080808] md:p-4 text-center md:text-left">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 text-white flex items-center justify-center text-xs font-bold mb-4 mx-auto md:mx-0">5</div>
<h4 className="text-white font-medium mb-1">Entrega</h4>
<p className="text-xs text-neutral-500">Launch day.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black overflow-hidden" id="clones">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-[#0A84FF] to-[#4CC9FF] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square">
<img alt="Digital Clone AI" className="w-full h-full object-cover hover:scale-105 transition duration-700 filter brightness-90 contrast-125" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
</div>
</div>
<div className="space-y-6">
<div className="reveal delay-200 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#4CC9FF]/30 bg-[#4CC9FF]/5">
<svg aria-hidden="true" data-icon="lucide:scan-face" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m5-3s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] uppercase tracking-widest text-[#4CC9FF] font-semibold">Avatar System</span>
</div>
<h2 className="reveal delay-300 text-4xl lg:text-5xl font-semibold text-white tracking-tight">Sua voz. Sua imagem.<br/>Tempo infinito.</h2>
<p className="reveal delay-400 text-neutral-400 text-lg leading-relaxed">
                    Seu clone digital grava vídeos, ministra aulas e cria conteúdos para redes sociais sem você precisar ligar a câmera, se arrumar ou configurar luzes. Escalabilidade pessoal absoluta.
                </p>
<div className="reveal delay-500 pt-4">
<a className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-neutral-200 transition-colors" href="#contact">
                        Criar meu clone digital
                        <svg aria-hidden="true" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#050505]" id="agents">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6 order-2 lg:order-1">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A84FF]/30 bg-[#0A84FF]/5">
<svg aria-hidden="true" data-icon="lucide:bot" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
<span className="text-[10px] uppercase tracking-widest text-[#0A84FF] font-semibold">Autonomous Agents</span>
</div>
<h2 className="reveal delay-200 text-4xl lg:text-5xl font-semibold text-white tracking-tight">Agentes inteligentes que trabalham enquanto você dorme.</h2>
<p className="reveal delay-300 text-neutral-400 text-lg leading-relaxed">
                    Planejamento, Produção, Vendas e Suporte escaláveis. Nossos agentes de IA não tiram folga, não esquecem scripts e atendem milhares de clientes simultaneamente com empatia programada.
                </p>
<div className="reveal delay-400 pt-4">
<a className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors" href="#contact">
                        Quero meu agente de IA
                    </a>
</div>
</div>
<div className="reveal delay-200 relative group order-1 lg:order-2">
<div className="absolute -inset-1 bg-gradient-to-l from-[#0A84FF] to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative rounded-2xl overflow-hidden aspect-video">
<img alt="AI Agents Interface" className="w-full h-full object-cover opacity-80 hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-4 left-4 right-4 flex justify-between">
<div className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] text-green-400 font-mono border border-green-500/30">Active: 99.9%</div>
<div className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] text-blue-400 font-mono border border-blue-500/30">Processing...</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Projetos que mostram <br/> o futuro acontecendo agora.</h2>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors mt-6 md:mt-0" href="#">Ver tudo -&gt;</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">

<div className="reveal delay-100 lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer">
<img alt="Cyberpunk Girl" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100"></div>
<div className="absolute bottom-6 left-6">
<span className="text-[#0A84FF] text-xs font-semibold tracking-wider uppercase mb-1 block">Campanha Global</span>
<h3 className="text-white text-xl font-medium">Cyber Fashion Week</h3>
</div>
</div>

<div className="reveal delay-200 rounded-2xl overflow-hidden relative group cursor-pointer">
<img alt="Abstract Data" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<span className="text-neutral-400 text-xs uppercase mb-1 block">Branding</span>
<h3 className="text-white text-lg font-medium">Nexus Identity</h3>
</div>
</div>

<div className="reveal delay-300 rounded-2xl overflow-hidden relative group cursor-pointer">
<img alt="Product Shot" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<span className="text-neutral-400 text-xs uppercase mb-1 block">Foto de Produto</span>
<h3 className="text-white text-lg font-medium">Lumina Drink</h3>
</div>
</div>

<div className="reveal delay-400 lg:col-span-2 rounded-2xl overflow-hidden relative group cursor-pointer">
<img alt="Tech Setup" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<span className="text-neutral-400 text-xs uppercase mb-1 block">Consultoria</span>
<h3 className="text-white text-lg font-medium">TechCorp Transformation</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#050505]" id="pricing">
<div className="max-w-7xl mx-auto">
<h2 className="reveal text-3xl font-semibold text-white mb-16 text-center tracking-tight">Investimento em Futuro</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="reveal delay-100 bg-[#111216] border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition-colors">
<h3 className="text-xl font-semibold text-white mb-2">Start</h3>
<p className="text-neutral-500 text-sm mb-6">Para começar a revolução.</p>
<ul className="space-y-4 mb-8 text-neutral-400 text-sm">
<li className="flex items-center gap-3"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Ensaio Fotográfico IA</li>
<li className="flex items-center gap-3"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Branding Básico IA</li>
<li className="flex items-center gap-3"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 5 Artes Redes Sociais</li>
</ul>
<a className="block w-full py-3 border border-neutral-700 rounded-lg text-center text-white text-sm hover:bg-neutral-800 transition-colors" href="#contact">Solicitar orçamento</a>
</div>

<div className="reveal delay-200 bg-[#111216] border border-[#0A84FF] rounded-2xl p-8 relative shadow-[0_0_30px_rgba(10,132,255,0.15)] md:-mt-4 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A84FF] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Mais Popular</div>
<h3 className="text-xl font-semibold text-white mb-2">Growth</h3>
<p className="text-blue-200/60 text-sm mb-6">Para marcas em expansão.</p>
<ul className="space-y-4 mb-8 text-neutral-300 text-sm">
<li className="flex items-center gap-3"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Pack Fotos &amp; Vídeos IA</li>
<li className="flex items-center gap-3"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Gestão Social Media</li>
<li className="flex items-center gap-3"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Copywriting Persuasivo</li>
</ul>
<a className="block w-full py-3 bg-[#0A84FF] rounded-lg text-center text-white text-sm hover:bg-[#0066CC] font-semibold transition-colors shadow-lg shadow-blue-900/50" href="#contact">Solicitar orçamento</a>
</div>

<div className="reveal delay-300 bg-[#111216] border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition-colors">
<h3 className="text-xl font-semibold text-white mb-2">Scale</h3>
<p className="text-neutral-500 text-sm mb-6">Domínio total do mercado.</p>
<ul className="space-y-4 mb-8 text-neutral-400 text-sm">
<li className="flex items-center gap-3"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Clone Digital Profissional</li>
<li className="flex items-center gap-3"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Agentes de IA (Vendas/Suporte)</li>
<li className="flex items-center gap-3"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Consultoria Full-Service</li>
</ul>
<a className="block w-full py-3 border border-neutral-700 rounded-lg text-center text-white text-sm hover:bg-neutral-800 transition-colors" href="#contact">Solicitar orçamento</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black text-center">
<div className="max-w-2xl mx-auto">
<h2 className="reveal text-3xl font-semibold text-white mb-6 tracking-tight">A inteligência que está mudando o jogo.</h2>
<p className="reveal delay-100 text-neutral-400 text-lg mb-8">
                Criada por Lucas Vieira. Unimos visão estratégica e estética futurista. Não seguimos tendências, nós as programamos. Somos feitos para quem quer dominar, não apenas competir.
            </p>
<div className="reveal delay-200 w-16 h-1 bg-[#0A84FF] mx-auto rounded-full"></div>
</div>
</section>

<section className="py-24 px-6 bg-[#080808]">
<div className="max-w-3xl mx-auto">
<h2 className="reveal text-2xl font-semibold text-white mb-10 text-center tracking-tight">Perguntas Frequentes</h2>
<div className="space-y-4">
<details className="reveal delay-100 group bg-[#111216] rounded-lg overflow-hidden border border-white/5 open:border-white/10 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 text-neutral-200 font-medium select-none">
                        A DISRUPTIVIA cria imagens sem sessão presencial?
                        <svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        Sim, 100% IA. Treinamos modelos com poucas fotos de referência e geramos cenários, roupas e iluminação perfeitos digitalmente.
                    </div>
</details>
<details className="reveal delay-200 group bg-[#111216] rounded-lg overflow-hidden border border-white/5 open:border-white/10 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 text-neutral-200 font-medium select-none">
                        O clone digital parece real?
                        <svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        Absolutamente. Utilizamos tecnologia hiper-realista que clona voz, micro-expressões faciais e trejeitos. É indistinguível para a maioria do público.
                    </div>
</details>
<details className="reveal delay-300 group bg-[#111216] rounded-lg overflow-hidden border border-white/5 open:border-white/10 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 text-neutral-200 font-medium select-none">
                        Quanto tempo leva?
                        <svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        Nossa velocidade é superior à de agências tradicionais. Campanhas que levariam semanas são entregues em dias, graças ao processamento de IA.
                    </div>
</details>
<details className="reveal delay-400 group bg-[#111216] rounded-lg overflow-hidden border border-white/5 open:border-white/10 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 text-neutral-200 font-medium select-none">
                        Empresas podem usar agentes?
                        <svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        Sim. Nossos agentes são configurados para qualquer nicho, treinados com seus dados específicos para responder exatamente como sua melhor equipe faria.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0A84FF]/10 to-transparent blur-3xl pointer-events-none"></div>
<div className="max-w-xl mx-auto relative z-10">
<h2 className="reveal text-3xl font-semibold text-white mb-4 text-center tracking-tight">Pronto para levar sua marca para o futuro?</h2>
<p className="reveal delay-100 text-neutral-500 text-center mb-10">Preencha os dados abaixo. Nossa IA analisará seu perfil.</p>
<form className="space-y-5 reveal delay-200">
<div className="space-y-1">
<label className="text-xs font-semibold text-neutral-400 uppercase tracking-wide ml-1">Nome</label>
<input className="w-full bg-[#111216] border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-[#0A84FF] transition-colors placeholder-neutral-700 text-sm" placeholder="Seu nome completo" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-neutral-400 uppercase tracking-wide ml-1">E-mail</label>
<input className="w-full bg-[#111216] border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-[#0A84FF] transition-colors placeholder-neutral-700 text-sm" placeholder="seu@email.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-neutral-400 uppercase tracking-wide ml-1">Instagram</label>
<input className="w-full bg-[#111216] border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-[#0A84FF] transition-colors placeholder-neutral-700 text-sm" placeholder="@suamarca" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-neutral-400 uppercase tracking-wide ml-1">Sobre o Projeto</label>
<textarea className="w-full bg-[#111216] border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-[#0A84FF] transition-colors placeholder-neutral-700 text-sm h-32 resize-none" placeholder="Conte brevemente o que você busca..."></textarea>
</div>
<button className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-neutral-200 transition-all mt-4 shadow-[0_0_20px_rgba(255,255,255,0.2)]" type="button">
                    Começar agora
                </button>
</form>
</div>
</section>

<footer className="py-12 px-6 bg-black border-t border-neutral-900">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-white font-semibold tracking-tighter flex items-center gap-2" href="#">
<svg aria-hidden="true" data-icon="lucide:cpu" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
                DISRUPTIVIA
            </a>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
<p className="text-neutral-600 text-xs">
                © 2024 DISRUPTIVIA - Inteligência Artificial para Marketing.
            </p>
</div>
</footer>



    </>
  );
}
