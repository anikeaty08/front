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
},
colors: {
background: '#0a0a0a',
surface: '#171717',
border: '#262626',
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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tight text-lg flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">A</div>
                ALEX.DEV
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#projects">Projetos</a>
<a className="hover:text-white transition-colors" href="#services">Serviços</a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-200 transition-colors" href="#contact">
                Contrate-me
                <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="14"></span>
</a>

<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Disponível para novos projetos
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Construindo produtos digitais com <br className="hidden md:block"/> <span className="gradient-text">precisão e propósito.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Desenvolvedor Full Stack &amp; UI Designer. Especializado em criar experiências web performáticas, acessíveis e visualmente refinadas para startups e empresas visionárias.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3 bg-white text-black rounded-lg font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2" href="#contact">
                    Iniciar Projeto
                </a>
<a className="w-full md:w-auto px-8 py-3 bg-surface border border-white/10 text-white rounded-lg font-medium text-sm hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group" href="#projects">
                    Ver Portfolio
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-down" data-strokeWidth="1.5" data-width="16"></span>
</a>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-white/[0.02]" id="stack">
<div className="max-w-6xl mx-auto px-6 py-12">
<p className="text-center text-xs font-medium uppercase tracking-widest text-neutral-500 mb-8">Tecnologias que domino</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<span className="text-white" data-icon="lucide:figma" data-width="24"></span>
<span className="text-sm font-medium">Figma</span>
</div>
<div className="flex items-center gap-2">
<span className="text-white" data-icon="lucide:layout-template" data-width="24"></span> 
<span className="text-sm font-medium">Next.js</span>
</div>
<div className="flex items-center gap-2">
<span className="text-white" data-icon="lucide:wind" data-width="24"></span>
<span className="text-sm font-medium">Tailwind</span>
</div>
<div className="flex items-center gap-2">
<span className="text-white" data-icon="lucide:database" data-width="24"></span>
<span className="text-sm font-medium">PostgreSQL</span>
</div>
<div className="flex items-center gap-2">
<span className="text-white" data-icon="lucide:box" data-width="24"></span>
<span className="text-sm font-medium">TypeScript</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="projects">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">Trabalhos Selecionados</h2>
<p className="text-neutral-500">Projetos recentes que combinam design e código.</p>
</div>
<a className="text-sm text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors" href="#">Ver todos os projetos</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-video bg-neutral-900 rounded-xl border border-white/10 overflow-hidden mb-5">
<div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700 ease-out">

<div className="w-full h-full flex items-center justify-center text-neutral-700">
<span className="iconify" data-icon="lucide:image" data-strokeWidth="1" data-width="48"></span>
</div>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-white/80 transition-colors">Fintech Dashboard</h3>
<p className="text-sm text-neutral-500">UX Design, Frontend Development</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-neutral-900 rounded-xl border border-white/10 overflow-hidden mb-5">
<div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="w-full h-full flex items-center justify-center text-neutral-700">
<span className="iconify" data-icon="lucide:layout" data-strokeWidth="1" data-width="48"></span>
</div>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-white/80 transition-colors">E-commerce Moda</h3>
<p className="text-sm text-neutral-500">Shopify Headless, Design System</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-neutral-900 rounded-xl border border-white/10 overflow-hidden mb-5">
<div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="w-full h-full flex items-center justify-center text-neutral-700">
<span className="iconify" data-icon="lucide:smartphone" data-strokeWidth="1" data-width="48"></span>
</div>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-white/80 transition-colors">SaaS Analytics App</h3>
<p className="text-sm text-neutral-500">Product Design, React</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-neutral-900 rounded-xl border border-white/10 overflow-hidden mb-5">
<div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="w-full h-full flex items-center justify-center text-neutral-700">
<span className="iconify" data-icon="lucide:globe" data-strokeWidth="1" data-width="48"></span>
</div>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-white/80 transition-colors">Corporate Portfolio</h3>
<p className="text-sm text-neutral-500">Webflow Development</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-surface/30 border-y border-white/5" id="services">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-16 max-w-xl">
                Soluções completas para levar sua ideia do conceito ao lançamento.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-xl bg-background border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:palette" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">UI/UX Design</h3>
<p className="text-sm leading-relaxed text-neutral-500">Interfaces intuitivas e limpas focadas na experiência do usuário. Wireframing, prototipagem e design systems.</p>
</div>

<div className="p-8 rounded-xl bg-background border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:code-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Desenvolvimento Web</h3>
<p className="text-sm leading-relaxed text-neutral-500">Sites e aplicações web rápidas usando React, Next.js e Tailwind. Código limpo, SEO otimizado e acessível.</p>
</div>

<div className="p-8 rounded-xl bg-background border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Otimização &amp; Performance</h3>
<p className="text-sm leading-relaxed text-neutral-500">Auditoria técnica, melhoria de Core Web Vitals e refatoração de código para máxima velocidade.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="contact">
<div className="max-w-2xl mx-auto relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Vamos trabalhar juntos?</h2>
<p className="text-neutral-500">Conte-me sobre seu projeto. Responderei em até 24 horas.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1" htmlFor="name">Nome</label>
<input className="w-full bg-surface border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all placeholder:text-neutral-700" id="name" placeholder="Seu nome" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1" htmlFor="email">Email</label>
<input className="w-full bg-surface border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all placeholder:text-neutral-700" id="email" placeholder="seu@email.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1">Tipo de Projeto</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2">

<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-xs text-center py-2.5 rounded-md border border-neutral-800 bg-surface text-neutral-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:border-neutral-600">
                                Website
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-xs text-center py-2.5 rounded-md border border-neutral-800 bg-surface text-neutral-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:border-neutral-600">
                                App
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-xs text-center py-2.5 rounded-md border border-neutral-800 bg-surface text-neutral-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:border-neutral-600">
                                Design
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-xs text-center py-2.5 rounded-md border border-neutral-800 bg-surface text-neutral-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:border-neutral-600">
                                Outro
                            </div>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1" htmlFor="message">Mensagem</label>
<textarea className="w-full bg-surface border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all placeholder:text-neutral-700" id="message" placeholder="Detalhes sobre sua ideia..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 mt-4" type="submit">
                    Enviar Mensagem
                    <span className="iconify" data-icon="lucide:send" data-width="14"></span>
</button>
</form>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-neutral-600 text-xs">
                © 2024 Alex Dev. Todos os direitos reservados.
            </div>
<div className="flex items-center gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-strokeWidth="1.5" data-width="20"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="20"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-strokeWidth="1.5" data-width="20"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:mail" data-strokeWidth="1.5" data-width="20"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
