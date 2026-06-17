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



        document.addEventListener('DOMContentLoaded', () => {
            // Scroll Reveal Logic
            const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        
                        const lines = entry.target.querySelectorAll('[data-grow-line]');
                        lines.forEach(line => {
                            line.style.height = '100%';
                        });
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
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
      

<nav :className="isScrolled || mobileMenuOpen ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'" className="fixed w-full z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-5 md:px-6 flex justify-between items-center relative z-50">
<div className="flex items-center gap-2 font-medium text-xl md:text-2xl tracking-tight text-white">
                Lusitech
            </div>

<div className="hidden md:flex items-center space-x-8 text-sm font-normal h-full text-zinc-400">
<div @mouseenter="open = true" @mouseleave="open = false" className="group relative cursor-pointer flex items-center gap-1 hover:text-white transition-colors h-10" x-data="{ open: false }">
<span x-show="lang === 'en'">Solutions</span>
<span x-cloak="" x-show="lang === 'pt'">Soluções</span>
<iconify-icon :className="open ? 'rotate-180' : ''" className="transition-transform duration-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>

<div className="fixed left-0 top-full w-full bg-zinc-950 border-b border-white/5 backdrop-blur-3xl overflow-hidden transition-all duration-300 origin-top" style={{display: 'none'}} x-show="open" x-transition:enter="transition ease-out duration-200" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 -translate-y-2" x-transition:leave="transition ease-in duration-150" x-transition:leave-end="opacity-0 -translate-y-2" x-transition:leave-start="opacity-100 translate-y-0">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-12 gap-12">
<div className="col-span-4 space-y-8">
<div>
<h3 className="text-zinc-500 text-xs font-medium uppercase tracking-widest mb-4">
<span x-show="lang === 'en'">Core Capabilities</span>
<span x-cloak="" x-show="lang === 'pt'">Capacidades Principais</span>
</h3>
<ul className="space-y-4">
<li>
<a className="group flex items-center gap-3 hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors" href="#">
<div className="w-8 h-8 rounded-md border border-white/10 bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-purple-500/30 transition-colors">
<iconify-icon icon="solar:lightbulb-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-white font-normal text-sm">
<span x-show="lang === 'en'">AI Lead Sourcing</span>
<span x-cloak="" x-show="lang === 'pt'">Captação de Leads com IA</span>
</div>
<div className="text-xs text-zinc-500">
<span x-show="lang === 'en'">Find intent-driven prospects</span>
<span x-cloak="" x-show="lang === 'pt'">Encontre prospects com intenção de compra</span>
</div>
</div>
</a>
</li>
<li>
<a className="group flex items-center gap-3 hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors" href="#">
<div className="w-8 h-8 rounded-md border border-white/10 bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-purple-500/30 transition-colors">
<iconify-icon icon="solar:smart-speaker-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-white font-normal text-sm">
<span x-show="lang === 'en'">Autonomous Agents</span>
<span x-cloak="" x-show="lang === 'pt'">Agentes Autônomos</span>
</div>
<div className="text-xs text-zinc-500">
<span x-show="lang === 'en'">24/7 personalized outreach</span>
<span x-cloak="" x-show="lang === 'pt'">Abordagem personalizada 24/7</span>
</div>
</div>
</a>
</li>
</ul>
</div>
</div>
<div className="col-span-4 space-y-8">
<div>
<h3 className="text-zinc-500 text-xs font-medium uppercase tracking-widest mb-4">
<span x-show="lang === 'en'">Use Cases</span>
<span x-cloak="" x-show="lang === 'pt'">Casos de Uso</span>
</h3>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors flex items-center gap-2 group" href="#">
<span x-show="lang === 'en'">B2B SaaS Growth</span>
<span x-cloak="" x-show="lang === 'pt'">Crescimento de SaaS B2B</span>
<iconify-icon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></a>
</li>
<li><a className="hover:text-white transition-colors flex items-center gap-2 group" href="#">
<span x-show="lang === 'en'">Agency Lead Generation</span>
<span x-cloak="" x-show="lang === 'pt'">Geração de Leads para Agências</span>
<iconify-icon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></a>
</li>
</ul>
</div>
</div>
<div className="col-span-4">
<div className="bg-zinc-900 rounded-xl overflow-hidden border border-white/5 relative group cursor-pointer h-full min-h-[200px] flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1)_0%,transparent_100%)]"></div>
<div className="w-16 h-16 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all shadow-xl relative z-10">
<iconify-icon className="text-2xl" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<a className="hover:text-white transition-colors" href="#how-it-works">
<span x-show="lang === 'en'">How It Works</span>
<span x-cloak="" x-show="lang === 'pt'">Como Funciona</span>
</a>
<a className="hover:text-white transition-colors" href="#roi-calculator">
<span x-show="lang === 'en'">ROI Calculator</span>
<span x-cloak="" x-show="lang === 'pt'">Calculadora de ROI</span>
</a>
<a className="hover:text-white transition-colors" href="#case-studies">
<span x-show="lang === 'en'">Case Studies</span>
<span x-cloak="" x-show="lang === 'pt'">Casos de Sucesso</span>
</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="hidden md:flex items-center space-x-4">

<div className="flex items-center gap-1 bg-zinc-900/50 border border-white/10 rounded-full p-1 mr-2">
<button :className="lang === 'en' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'" @click="lang = 'en'" className="px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors">EN</button>
<button :className="lang === 'pt' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'" @click="lang = 'pt'" className="px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors">PT</button>
</div>
<a className="bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-zinc-200 transition-all" href="#audit">
<span x-show="lang === 'en'">Get My Free AI Audit</span>
<span x-cloak="" x-show="lang === 'pt'">Auditoria de IA Gratuita</span>
</a>
</div>

<div className="md:hidden">
<button @click="mobileMenuOpen = !mobileMenuOpen" className="p-2 text-white active:scale-90 transition-transform">
<iconify-icon :icon="mobileMenuOpen ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'" className="text-2xl" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div :className="mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'" className="fixed inset-0 bg-zinc-950 z-40 transition-all duration-300 ease-out md:hidden flex flex-col pt-24 px-5">

<div className="flex items-center gap-2 mb-8 bg-zinc-900/50 p-1.5 rounded-full w-max border border-white/10">
<button :className="lang === 'en' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'" @click="lang = 'en'" className="px-4 py-1.5 rounded-full text-xs font-medium transition-colors">English</button>
<button :className="lang === 'pt' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'" @click="lang = 'pt'" className="px-4 py-1.5 rounded-full text-xs font-medium transition-colors">Português</button>
</div>
<div className="flex flex-col space-y-6 text-2xl font-normal tracking-tight">
<a @click="mobileMenuOpen = false" className="border-b border-white/10 pb-4 hover:text-white text-zinc-400 transition-colors flex justify-between group" href="#">
<span x-show="lang === 'en'">Solutions</span><span x-cloak="" x-show="lang === 'pt'">Soluções</span>
<span className="text-white/20 group-hover:text-purple-400">→</span></a>
<a @click="mobileMenuOpen = false" className="border-b border-white/10 pb-4 hover:text-white text-zinc-400 transition-colors flex justify-between group" href="#how-it-works">
<span x-show="lang === 'en'">How It Works</span><span x-cloak="" x-show="lang === 'pt'">Como Funciona</span>
<span className="text-white/20 group-hover:text-purple-400">→</span></a>
<a @click="mobileMenuOpen = false" className="border-b border-white/10 pb-4 hover:text-white text-zinc-400 transition-colors flex justify-between group" href="#roi-calculator">
<span x-show="lang === 'en'">ROI Calculator</span><span x-cloak="" x-show="lang === 'pt'">Calculadora de ROI</span>
<span className="text-white/20 group-hover:text-purple-400">→</span></a>
<a @click="mobileMenuOpen = false" className="border-b border-white/10 pb-4 hover:text-white text-zinc-400 transition-colors flex justify-between group" href="#case-studies">
<span x-show="lang === 'en'">Case Studies</span><span x-cloak="" x-show="lang === 'pt'">Casos de Sucesso</span>
<span className="text-white/20 group-hover:text-purple-400">→</span></a>
<a @click="mobileMenuOpen = false" className="pb-4 hover:text-white text-zinc-400 transition-colors flex justify-between group" href="#faq">
                    FAQ
                    <span className="text-white/20 group-hover:text-purple-400">→</span></a>
</div>
</div>
</nav>
<main>

<section className="relative h-[100dvh] min-h-[600px] flex flex-col justify-center items-center text-center overflow-hidden bg-black" id="hero">

<div className="absolute inset-0 z-0">
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]"></div>
</div>

<div className="relative z-10 max-w-5xl mx-auto px-5 md:px-6 w-full flex flex-col items-center justify-center h-full pb-20 md:pb-0" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-normal mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-purple-400" style={{animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></span>
<span x-show="lang === 'en'">Lusitech Engine v2.0 Live</span>
<span x-cloak="" x-show="lang === 'pt'">Lusitech Engine v2.0 Online</span>
</div>
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 md:mb-8 text-white leading-[1.1]">
<span x-show="lang === 'en'">Stop Chasing Leads.<br/><span className="text-zinc-500">Let AI Build Pipeline.</span></span>
<span x-cloak="" x-show="lang === 'pt'">Pare de buscar leads.<br/><span className="text-zinc-500">Deixe a IA gerar seu funil.</span></span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-12 font-normal leading-relaxed px-2">
<span x-show="lang === 'en'">We deploy custom AI agents that find your ideal prospects, send personalized outreach, and handle initial objections—so your sales team only talks to "ready-to-buy" customers.</span>
<span x-cloak="" x-show="lang === 'pt'">Implementamos agentes de IA personalizados que encontram seus prospects ideais, enviam abordagens personalizadas e lidam com objeções iniciais — para que sua equipe de vendas converse apenas com clientes prontos para fechar.</span>
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-white text-black font-medium px-8 py-3.5 rounded-full hover:bg-zinc-200 transition-colors text-center text-sm" href="#audit">
<span x-show="lang === 'en'">Get My Free AI Audit</span>
<span x-cloak="" x-show="lang === 'pt'">Receber Auditoria de IA</span>
</a>
<a className="w-full sm:w-auto bg-transparent border border-white/10 text-white font-normal px-8 py-3.5 rounded-full hover:bg-white/5 transition-colors text-center text-sm" href="#how-it-works">
<span x-show="lang === 'en'">See How It Works</span>
<span x-cloak="" x-show="lang === 'pt'">Veja Como Funciona</span>
</a>
</div>
</div>
</section>

<section className="bg-black border-y border-white/5 py-12 relative overflow-hidden">
<div className="flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
<div className="flex animate-marquee whitespace-nowrap group min-w-[200%]">
<template x-htmlFor="i in 4">
<div className="flex">
<div className="mx-16 flex items-center gap-3 opacity-40 group-hover:opacity-100 transition-opacity duration-500 cursor-default">
<iconify-icon className="text-3xl text-zinc-500 group-hover:text-purple-400 transition-colors" icon="solar:planet-linear" strokeWidth="1.5"></iconify-icon><span className="text-xl font-medium tracking-tight text-white">NEBULA</span>
</div>
<div className="mx-16 flex items-center gap-3 opacity-40 group-hover:opacity-100 transition-opacity duration-500 cursor-default">
<iconify-icon className="text-3xl text-zinc-500 group-hover:text-purple-400 transition-colors" icon="solar:atom-linear" strokeWidth="1.5"></iconify-icon><span className="text-xl font-medium tracking-tight text-white">QUANTA</span>
</div>
<div className="mx-16 flex items-center gap-3 opacity-40 group-hover:opacity-100 transition-opacity duration-500 cursor-default">
<iconify-icon className="text-3xl text-zinc-500 group-hover:text-purple-400 transition-colors" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon><span className="text-xl font-medium tracking-tight text-white">ACEX</span>
</div>
<div className="mx-16 flex items-center gap-3 opacity-40 group-hover:opacity-100 transition-opacity duration-500 cursor-default">
<iconify-icon className="text-3xl text-zinc-500 group-hover:text-purple-400 transition-colors" icon="solar:earth-linear" strokeWidth="1.5"></iconify-icon><span className="text-xl font-medium tracking-tight text-white">ORBIT</span>
</div>
<div className="mx-16 flex items-center gap-3 opacity-40 group-hover:opacity-100 transition-opacity duration-500 cursor-default">
<iconify-icon className="text-3xl text-zinc-500 group-hover:text-purple-400 transition-colors" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon><span className="text-xl font-medium tracking-tight text-white">SYNTH</span>
</div>
</div>
</template>
</div>
</div>
</section>

<section className="bg-black py-16 md:py-24" id="roi-calculator">
<div className="max-w-7xl mx-auto px-5 md:px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out'}}>
<div className="max-w-xs">
<p className="text-2xl font-light tracking-tight leading-snug text-white">
<span x-show="lang === 'en'">Generate new pipeline, <br/><span className="text-zinc-500">automatically.</span></span>
<span x-cloak="" x-show="lang === 'pt'">Gere um novo funil, <br/><span className="text-zinc-500">automaticamente.</span></span>
</p>
</div>
<div className="flex flex-row flex-wrap gap-x-12 gap-y-6 md:gap-24 w-full md:w-auto">
<div>
<p className="text-xs text-zinc-500 mb-2 font-medium uppercase tracking-widest">
<span x-show="lang === 'en'">Total pipeline generated</span>
<span x-cloak="" x-show="lang === 'pt'">Total de funil gerado</span>
</p>
<p className="text-4xl md:text-5xl font-light tracking-tight text-white">$54m+</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-2 font-medium uppercase tracking-widest">
<span x-show="lang === 'en'">Avg. meeting show rate</span>
<span x-cloak="" x-show="lang === 'pt'">Taxa de comparecimento</span>
</p>
<p className="text-4xl md:text-5xl font-light tracking-tight text-white">82%</p>
</div>
</div>
</div>
</section>

<section className="bg-black py-24 relative overflow-hidden" id="features">
<div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
<div className="mb-20 md:flex md:justify-between md:items-end" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out'}}>
<div className="max-w-2xl">
<span className="text-purple-500 text-xs tracking-widest mb-4 block uppercase font-medium">
<span x-show="lang === 'en'">System Architecture</span>
<span x-cloak="" x-show="lang === 'pt'">Arquitetura do Sistema</span>
</span>
<h2 className="text-4xl md:text-5xl font-light text-white leading-[1.1] tracking-tight">
<span x-show="lang === 'en'">Intelligence, <span className="text-zinc-500">embedded.</span></span>
<span x-cloak="" x-show="lang === 'pt'">Inteligência, <span className="text-zinc-500">incorporada.</span></span>
</h2>
</div>
<p className="text-zinc-400 max-w-sm text-sm mt-6 md:mt-0 leading-relaxed text-right md:text-left font-normal">
<span x-show="lang === 'en'">Lusitech bridges the gap between raw data and closed deals. We build end-to-end infrastructure using Large Language Models to create a self-sustaining sales machine.</span>
<span x-cloak="" x-show="lang === 'pt'">A Lusitech preenche a lacuna entre dados brutos e negócios fechados. Construímos uma infraestrutura completa usando IA para criar uma máquina de vendas autossustentável.</span>
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 grid-rows-auto gap-4">

<div className="md:col-span-4 lg:col-span-2 row-span-2 group relative overflow-hidden rounded-2xl bg-zinc-950 border border-white/5 transition-all duration-500 hover:border-white/10" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out', transitionDelay: '100ms'}}>
<div className="relative z-20 p-8 h-full flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-8">
<div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center bg-zinc-900">
<iconify-icon className="text-purple-400 text-lg" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500" style={{animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></span>
<span className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
<span x-show="lang === 'en'">System Active</span>
<span x-cloak="" x-show="lang === 'pt'">Sistema Ativo</span>
</span>
</div>
</div>
<h3 className="text-2xl font-normal text-white mb-2 tracking-tight">
<span x-show="lang === 'en'">Predictable Revenue</span>
<span x-cloak="" x-show="lang === 'pt'">Receita Previsível</span>
</h3>
<p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
<span x-show="lang === 'en'">A measurable, scalable outbound system that consistently drives qualified meetings.</span>
<span x-cloak="" x-show="lang === 'pt'">Um sistema de prospecção mensurável e escalável que gera reuniões qualificadas de forma consistente.</span>
</p>
</div>
<div className="mt-12 w-full h-40 relative border-t border-white/5 pt-6 flex items-end justify-between gap-2 px-2">
<div className="w-full bg-zinc-900 rounded-t-sm h-[40%] group-hover:bg-purple-900/40 transition-colors duration-500"></div>
<div className="w-full bg-zinc-900 rounded-t-sm h-[70%] group-hover:bg-purple-800/50 transition-colors duration-500"></div>
<div className="w-full bg-zinc-900 rounded-t-sm h-[55%] group-hover:bg-purple-700/60 transition-colors duration-500"></div>
<div className="w-full bg-zinc-900 rounded-t-sm h-[90%] group-hover:bg-purple-600/70 transition-colors duration-500"></div>
<div className="w-full bg-zinc-900 rounded-t-sm h-[65%] group-hover:bg-purple-500/80 transition-colors duration-500"></div>
<div className="absolute top-8 left-4 bg-zinc-950 border border-white/10 px-3 py-1.5 rounded-md text-xs text-zinc-300 shadow-xl">
<span x-show="lang === 'en'">Pipeline Forecast:</span><span x-cloak="" x-show="lang === 'pt'">Previsão de Funil:</span> <span className="text-purple-400">+42%</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-1 row-span-1 group relative overflow-hidden rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-all duration-500" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out', transitionDelay: '200ms'}}>
<div className="p-8 relative z-10">
<div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center bg-zinc-900 mb-6">
<iconify-icon className="text-white text-lg" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-white mb-2 tracking-tight">
<span x-show="lang === 'en'">24/7 Availability</span>
<span x-cloak="" x-show="lang === 'pt'">Disponibilidade 24/7</span>
</h3>
<p className="text-zinc-500 text-xs leading-relaxed mb-6">
<span x-show="lang === 'en'">60-second response times. Engage prospects the moment they reply.</span>
<span x-cloak="" x-show="lang === 'pt'">Tempo de resposta de 60 segundos. Engaje os prospects no momento em que eles responderem.</span>
</p>
<div className="bg-zinc-900 border border-white/5 rounded-lg p-3 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-600 flex items-center justify-center text-white font-medium text-xs">AI</div>
<div className="flex-1 min-w-0">
<div className="h-1.5 w-16 bg-white/20 rounded-full mb-1.5"></div>
<div className="h-1.5 w-10 bg-white/10 rounded-full"></div>
</div>
<div className="text-[10px] text-purple-400 uppercase tracking-widest">
<span x-show="lang === 'en'">Replying</span>
<span x-cloak="" x-show="lang === 'pt'">Respondendo</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-1 row-span-1 group relative overflow-hidden rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-all duration-500" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out', transitionDelay: '300ms'}}>
<div className="p-8 relative z-10">
<div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center bg-zinc-900 mb-6">
<iconify-icon className="text-white text-lg" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-white mb-2 tracking-tight">
<span x-show="lang === 'en'">Zero Manual Prospecting</span>
<span x-cloak="" x-show="lang === 'pt'">Zero Prospecção Manual</span>
</h3>
<p className="text-zinc-500 text-xs leading-relaxed">
<span x-show="lang === 'en'">Save 20+ hours a week per rep by automating the research and outreach phases completely.</span>
<span x-cloak="" x-show="lang === 'pt'">Economize mais de 20 horas por semana por representante automatizando as fases de pesquisa e abordagem.</span>
</p>
</div>
</div>

<div className="md:col-span-6 lg:col-span-2 row-span-1 group relative overflow-hidden rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col md:flex-row items-center" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out', transitionDelay: '400ms'}}>
<div className="p-8 flex-1 relative z-10">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-purple-400" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-zinc-500 uppercase tracking-widest">
<span x-show="lang === 'en'">Dynamic Context</span>
<span x-cloak="" x-show="lang === 'pt'">Contexto Dinâmico</span>
</span>
</div>
<h3 className="text-2xl font-normal text-white mb-2 tracking-tight">
<span x-show="lang === 'en'">Hyper-Personalization</span>
<span x-cloak="" x-show="lang === 'pt'">Hiper-Personalização</span>
</h3>
<p className="text-zinc-500 text-sm max-w-xs">
<span x-show="lang === 'en'">Messages tailored to real-time prospect news, funding rounds, and social intent signals.</span>
<span x-cloak="" x-show="lang === 'pt'">Mensagens adaptadas a notícias dos prospects em tempo real, rodadas de investimento e sinais de intenção.</span>
</p>
</div>
<div className="w-full md:w-1/2 h-full min-h-[160px] relative overflow-hidden bg-black/50 md:border-l border-white/5 flex items-center justify-center">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-purple-500/30 rounded-full" style={{animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite'}}></div>
<div className="w-2 h-2 bg-purple-400 rounded-full absolute" style={{animation: 'pulse 2s infinite'}}></div>
</div>
</div>

<div className="md:col-span-6 lg:col-span-2 row-span-1 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/5 hover:border-purple-500/30 transition-all duration-500" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out', transitionDelay: '500ms'}}>
<div className="p-8 h-full flex flex-col justify-center relative z-10">
<h3 className="text-4xl font-light text-white mb-2 tracking-tight">$54,203,000+</h3>
<p className="text-sm text-zinc-500 mb-6">
<span x-show="lang === 'en'">Pipeline generated autonomously</span>
<span x-cloak="" x-show="lang === 'pt'">Funil gerado de forma autônoma</span>
</p>
<div className="flex items-center gap-4 text-xs text-zinc-400">
<span className="flex items-center gap-1.5"><iconify-icon className="text-purple-400" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon> <span x-show="lang === 'en'">99.9% Uptime</span><span x-cloak="" x-show="lang === 'pt'">99.9% Uptime</span></span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-zinc-600" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon> <span x-show="lang === 'en'">Latency: 24ms</span><span x-cloak="" x-show="lang === 'pt'">Latência: 24ms</span></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-black overflow-hidden border-t border-white/5" id="how-it-works">
<div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
<div className="mb-32 max-w-3xl" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out'}}>
<span className="text-purple-500 text-xs tracking-widest mb-4 block uppercase font-medium">
<span x-show="lang === 'en'">Process Flow</span>
<span x-cloak="" x-show="lang === 'pt'">Fluxo de Processos</span>
</span>
<h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-[1.1] tracking-tight">
<span x-show="lang === 'en'">From cold outreach to <br/><span className="text-zinc-500">closed-won deals.</span></span>
<span x-cloak="" x-show="lang === 'pt'">Do contato frio a <br/><span className="text-zinc-500">negócios fechados.</span></span>
</h2>
<p className="text-zinc-400 text-lg max-w-xl font-normal">
<span x-show="lang === 'en'">We build a comprehensive sales machine that learns and adapts to your most profitable buyers.</span>
<span x-cloak="" x-show="lang === 'pt'">Construímos uma máquina de vendas completa que aprende e se adapta aos seus compradores mais lucrativos.</span>
</p>
</div>

<div className="space-y-24 lg:space-y-32">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 group relative" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out'}}>
<div className="lg:col-span-5 flex flex-col justify-center">
<div className="flex items-center gap-4 mb-6">
<span className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 text-sm font-medium text-purple-400">01</span>
<span className="text-purple-500 text-xs tracking-widest uppercase font-medium">
<span x-show="lang === 'en'">Discovery</span>
<span x-cloak="" x-show="lang === 'pt'">Descoberta</span>
</span>
</div>
<h3 className="text-3xl lg:text-4xl font-light text-white mb-6 leading-[1.1] tracking-tight">
<span x-show="lang === 'en'">The Lead Mapping.</span>
<span x-cloak="" x-show="lang === 'pt'">O Mapeamento de Leads.</span>
</h3>
<p className="text-zinc-400 leading-relaxed text-sm lg:text-base border-l border-white/10 pl-6">
<span x-show="lang === 'en'">We identify your "Golden Goose" customer profile using AI-driven market analysis, pinpointing exact firmographics and decision-maker criteria.</span>
<span x-cloak="" x-show="lang === 'pt'">Identificamos seu perfil de cliente ideal usando análise de mercado guiada por IA, definindo a demografia exata e os critérios do tomador de decisão.</span>
</p>
</div>
<div className="hidden lg:flex lg:col-span-1 justify-center relative">
<div className="h-full w-px bg-white/5 relative">
<div className="absolute top-0 left-0 w-full bg-purple-500" data-grow-line="" style={{height: '0', transition: 'height 1.5s ease-out'}}></div>
</div>
</div>
<div className="lg:col-span-6">
<div className="h-[300px] md:h-[400px] bg-zinc-950 border border-white/5 rounded-2xl relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-64 bg-zinc-900 border border-white/10 rounded-xl p-6 flex flex-col items-center shadow-2xl">
<div className="w-16 h-16 rounded-full bg-black border border-white/5 mb-6 flex items-center justify-center">
<iconify-icon className="text-3xl text-zinc-600" icon="solar:user-circle-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="w-full space-y-4 text-xs">
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="text-zinc-500"><span x-show="lang === 'en'">Industry</span><span x-cloak="" x-show="lang === 'pt'">Setor</span></span><span className="text-white">B2B SaaS</span></div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="text-zinc-500"><span x-show="lang === 'en'">Company Size</span><span x-cloak="" x-show="lang === 'pt'">Tamanho</span></span><span className="text-white">50-200</span></div>
<div className="flex justify-between">
<span className="text-zinc-500"><span x-show="lang === 'en'">Decision Maker</span><span x-cloak="" x-show="lang === 'pt'">Decisor</span></span><span className="text-purple-400">VP of Sales</span></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 group relative" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out'}}>
<div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-3">
<div className="flex items-center gap-4 mb-6">
<span className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 text-sm font-medium text-purple-400">02</span>
<span className="text-purple-500 text-xs tracking-widest uppercase font-medium">
<span x-show="lang === 'en'">Foundation</span>
<span x-cloak="" x-show="lang === 'pt'">Fundação</span>
</span>
</div>
<h3 className="text-3xl lg:text-4xl font-light text-white mb-6 leading-[1.1] tracking-tight">
<span x-show="lang === 'en'">Infrastructure Build.</span>
<span x-cloak="" x-show="lang === 'pt'">Construção da Infraestrutura.</span>
</h3>
<p className="text-zinc-400 leading-relaxed text-sm lg:text-base border-l border-white/10 pl-6">
<span x-show="lang === 'en'">We set up high-deliverability email domains and AI-trained outreach sequences to ensure your messages bypass spam filters and hit primary inboxes.</span>
<span x-cloak="" x-show="lang === 'pt'">Configuramos domínios de e-mail de alta entregabilidade e sequências treinadas por IA para garantir que suas mensagens ignorem filtros de spam.</span>
</p>
</div>
<div className="hidden lg:flex lg:col-span-1 justify-center relative order-2">
<div className="h-full w-px bg-white/5 relative">
<div className="absolute top-0 left-0 w-full bg-purple-500" data-grow-line="" style={{height: '0', transition: 'height 1.5s ease-out'}}></div>
</div>
</div>
<div className="lg:col-span-6 order-3 lg:order-1">
<div className="h-[300px] md:h-[400px] bg-zinc-950 border border-white/5 rounded-2xl relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)]"></div>
<div className="text-center relative z-10">
<div className="text-6xl md:text-7xl font-light tracking-tight text-white mb-4">99.8%</div>
<div className="text-purple-400 uppercase text-[10px] tracking-widest font-medium">
<span x-show="lang === 'en'">Inbox Placement Rate</span>
<span x-cloak="" x-show="lang === 'pt'">Taxa de Entrada na Caixa Principal</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 group relative" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out'}}>
<div className="lg:col-span-5 flex flex-col justify-center">
<div className="flex items-center gap-4 mb-6">
<span className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 text-sm font-medium text-purple-400">03</span>
<span className="text-purple-500 text-xs tracking-widest uppercase font-medium">
<span x-show="lang === 'en'">Execution</span>
<span x-cloak="" x-show="lang === 'pt'">Execução</span>
</span>
</div>
<h3 className="text-3xl lg:text-4xl font-light text-white mb-6 leading-[1.1] tracking-tight">
<span x-show="lang === 'en'">Autonomous Prospecting.</span>
<span x-cloak="" x-show="lang === 'pt'">Prospecção Autônoma.</span>
</h3>
<p className="text-zinc-400 leading-relaxed text-sm lg:text-base border-l border-white/10 pl-6">
<span x-show="lang === 'en'">Our AI agents scan the web for 'intent signals' and launch personalized conversations with decision-makers, fully autonomously.</span>
<span x-cloak="" x-show="lang === 'pt'">Nossos agentes de IA buscam sinais de intenção na web e iniciam conversas personalizadas com tomadores de decisão, de forma totalmente autônoma.</span>
</p>
</div>
<div className="hidden lg:flex lg:col-span-1 justify-center relative">
<div className="h-full w-px bg-white/5 relative">
<div className="absolute top-0 left-0 w-full bg-purple-500" data-grow-line="" style={{height: '0', transition: 'height 1.5s ease-out'}}></div>
</div>
</div>
<div className="lg:col-span-6">
<div className="h-[300px] md:h-[400px] bg-zinc-950 border border-white/5 rounded-2xl relative overflow-hidden flex items-center justify-center">
<div className="bg-zinc-900 border border-white/10 p-5 rounded-xl w-3/4 max-w-sm shadow-2xl">
<div className="flex gap-3 mb-5 items-center border-b border-white/5 pb-4">
<div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-medium text-xs">AI</div>
<div className="text-xs text-zinc-400">
<span x-show="lang === 'en'">Drafting personalized message...</span>
<span x-cloak="" x-show="lang === 'pt'">Escrevendo mensagem personalizada...</span>
</div>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-white/10 rounded-full"></div>
<div className="h-2 w-5/6 bg-white/10 rounded-full"></div>
<div className="h-2 w-4/6 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black py-24" id="case-studies" x-data="{ activeTab: 'SaaS' }">
<div className="max-w-7xl mx-auto px-5 md:px-6">
<div className="mb-12" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out'}}>
<span className="text-purple-500 text-xs font-medium uppercase tracking-widest mb-4 block">
<span x-show="lang === 'en'">Proven Results</span>
<span x-cloak="" x-show="lang === 'pt'">Resultados Comprovados</span>
</span>
<h2 className="text-3xl md:text-5xl font-light tracking-tight text-white max-w-2xl mb-10 leading-[1.1]">
<span x-show="lang === 'en'">Systems that generate actual pipeline.</span>
<span x-cloak="" x-show="lang === 'pt'">Sistemas que geram resultados reais.</span>
</h2>
<div className="flex space-x-8 border-b border-white/10 overflow-x-auto hide-scrollbar pb-1">
<button :className="activeTab === 'SaaS' ? 'text-white' : 'text-zinc-500'" @click="activeTab = 'SaaS'" className="pb-4 text-sm font-normal transition-colors relative">B2B SaaS 
                            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-purple-500" x-show="activeTab === 'SaaS'"></div>
</button>
<button :className="activeTab === 'Agencies' ? 'text-white' : 'text-zinc-500'" @click="activeTab = 'Agencies'" className="pb-4 text-sm font-normal transition-colors relative">
<span x-show="lang === 'en'">Agencies</span>
<span x-cloak="" x-show="lang === 'pt'">Agências</span>
<div className="absolute bottom-0 left-0 right-0 h-[1px] bg-purple-500" x-show="activeTab === 'Agencies'"></div>
</button>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/5 min-h-[400px]" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out', transitionDelay: '200ms'}}>

<div className="absolute inset-0 transition-opacity duration-500" x-show="activeTab === 'SaaS'">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(147,51,234,0.1)_0%,transparent_60%)]"></div>
<div className="relative z-10 p-6 md:p-12 h-full flex flex-col md:flex-row items-center justify-between gap-12">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:max-w-md order-2 md:order-1">
<div className="bg-black/50 backdrop-blur-md p-6 rounded-xl border border-white/5">
<div className="text-white text-4xl font-light tracking-tight mb-2">45+</div>
<div className="text-[10px] uppercase tracking-widest text-zinc-500">
<span x-show="lang === 'en'">Meetings / Month</span>
<span x-cloak="" x-show="lang === 'pt'">Reuniões / Mês</span>
</div>
</div>
<div className="bg-black/50 backdrop-blur-md p-6 rounded-xl border border-white/5">
<div className="text-white text-4xl font-light tracking-tight mb-2">3.2x</div>
<div className="text-[10px] uppercase tracking-widest text-zinc-500">
<span x-show="lang === 'en'">Pipeline Growth</span>
<span x-cloak="" x-show="lang === 'pt'">Crescimento do Funil</span>
</div>
</div>
</div>
<div className="bg-zinc-900/80 backdrop-blur-xl p-8 rounded-xl border border-white/5 w-full md:max-w-md ml-auto order-1 md:order-2">
<p className="text-lg md:text-xl font-normal text-white mb-8 leading-relaxed">
<span x-show="lang === 'en'">"Lusitech fully automated our SDR process. Our reps now just show up and close."</span>
<span x-cloak="" x-show="lang === 'pt'">"A Lusitech automatizou totalmente nosso processo de pré-vendas. Nossos representantes agora apenas aparecem e fecham negócio."</span>
</p>
<div className="font-medium text-white text-sm">Alec Paterson</div>
<div className="text-xs text-zinc-500 mt-1">VP of Sales, CloudSync</div>
</div>
</div>
</div>

<div className="absolute inset-0 transition-opacity duration-500" style={{display: 'none'}} x-show="activeTab === 'Agencies'">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(147,51,234,0.1)_0%,transparent_60%)]"></div>
<div className="relative z-10 p-6 md:p-12 h-full flex flex-col md:flex-row items-center justify-between gap-12">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:max-w-md order-2 md:order-1">
<div className="bg-black/50 backdrop-blur-md p-6 rounded-xl border border-white/5">
<div className="text-white text-4xl font-light tracking-tight mb-2">$1.2M</div>
<div className="text-[10px] uppercase tracking-widest text-zinc-500">
<span x-show="lang === 'en'">New ARR Closed</span>
<span x-cloak="" x-show="lang === 'pt'">Novo ARR Fechado</span>
</div>
</div>
</div>
<div className="bg-zinc-900/80 backdrop-blur-xl p-8 rounded-xl border border-white/5 w-full md:max-w-md ml-auto order-1 md:order-2">
<p className="text-lg md:text-xl font-normal text-white mb-8 leading-relaxed">
<span x-show="lang === 'en'">"We scaled our agency from $1M to $2M+ without hiring a single prospector."</span>
<span x-cloak="" x-show="lang === 'pt'">"Escalamos nossa agência de US$ 1M para mais de US$ 2M sem contratar um único prospector."</span>
</p>
<div className="font-medium text-white text-sm">Michael Chen</div>
<div className="text-xs text-zinc-500 mt-1">Founder, Aura Media</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black py-24 md:py-32 relative overflow-hidden" id="audit">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-5 md:px-6 relative z-10">
<div className="text-center mb-16" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out'}}>
<span className="text-purple-500 text-xs tracking-widest mb-4 block uppercase font-medium">
<span x-show="lang === 'en'">Initiate Systems</span>
<span x-cloak="" x-show="lang === 'pt'">Iniciar Sistemas</span>
</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-[1.1]">
<span x-show="lang === 'en'">Ready to Scale Sales Without Scaling Headcount?</span>
<span x-cloak="" x-show="lang === 'pt'">Pronto para escalar vendas sem aumentar a equipe?</span>
</h2>
<p className="text-zinc-400 text-lg">
<span x-show="lang === 'en'">Get a custom AI Lead Gen Roadmap designed for your specific industry.</span>
<span x-cloak="" x-show="lang === 'pt'">Receba um Mapa de Geração de Leads por IA personalizado para o seu setor.</span>
</p>
</div>
<form className="bg-zinc-950 border border-white/10 hover:border-white/20 transition-colors duration-500 rounded-2xl p-8 md:p-12 space-y-6" data-animate="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s ease-out', transitionDelay: '200ms'}}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-zinc-400 font-medium uppercase tracking-wider ml-1">
<span x-show="lang === 'en'">Full Name</span>
<span x-cloak="" x-show="lang === 'pt'">Nome Completo</span>
</label>
<input :placeholder="lang === 'en' ? 'John Doe' : 'João Silva'" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-colors text-sm" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-400 font-medium uppercase tracking-wider ml-1">
<span x-show="lang === 'en'">Work Email</span>
<span x-cloak="" x-show="lang === 'pt'">E-mail Corporativo</span>
</label>
<input :placeholder="lang === 'en' ? 'john@company.com' : 'joao@empresa.com'" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-colors text-sm" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-400 font-medium uppercase tracking-wider ml-1">
<span x-show="lang === 'en'">Company Website</span>
<span x-cloak="" x-show="lang === 'pt'">Site da Empresa</span>
</label>
<input :placeholder="lang === 'en' ? 'https://yourcompany.com' : 'https://suaempresa.com.br'" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-colors text-sm" required="" type="url"/>
</div>
<div className="pt-6">
<button className="w-full bg-white text-black py-4 rounded-lg font-medium text-sm hover:bg-zinc-200 transition-colors" type="submit">
<span x-show="lang === 'en'">Book My AI Audit</span>
<span x-cloak="" x-show="lang === 'pt'">Agendar Minha Auditoria de IA</span>
</button>
</div>
</form>
</div>
</section>
</main>

<footer className="bg-black pt-24 pb-12 relative border-t border-white/5" id="faq" x-data="{ openFaq: null }">
<div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">

<div className="mb-32 max-w-4xl mx-auto">
<div className="text-center mb-16">
<span className="text-purple-500 text-xs tracking-widest mb-4 block uppercase font-medium">
<span x-show="lang === 'en'">Knowledge Base</span>
<span x-cloak="" x-show="lang === 'pt'">Base de Conhecimento</span>
</span>
<h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-[1.1]">
<span x-show="lang === 'en'">Common queries.</span>
<span x-cloak="" x-show="lang === 'pt'">Dúvidas comuns.</span>
</h2>
</div>
<div className="border-t border-white/5">
<div className="group border-b border-white/5">
<button @click="openFaq === 0 ? openFaq = null : openFaq = 0" className="w-full py-6 flex justify-between items-center text-left hover:px-2 transition-all">
<span :className="openFaq === 0 ? 'text-white' : 'text-zinc-400'" className="text-base md:text-lg font-normal tracking-tight">
<span x-show="lang === 'en'">How is this different from a standard lead gen agency?</span>
<span x-cloak="" x-show="lang === 'pt'">Como isso é diferente de uma agência padrão de geração de leads?</span>
</span>
<span :className="openFaq === 0 ? 'rotate-180 text-white' : ''" className="text-zinc-600 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</button>
<div x-collapse="" x-show="openFaq === 0">
<div className="pb-8 text-zinc-500 text-sm leading-relaxed px-2">
<span x-show="lang === 'en'">Unlike traditional agencies that blast generic templates to bought lists, we build a dedicated, autonomous infrastructure for you. Our AI researches prospects, personalizes outreach based on real-time data, and manages conversations organically.</span>
<span x-cloak="" x-show="lang === 'pt'">Ao contrário das agências tradicionais que enviam modelos genéricos para listas compradas, nós construímos uma infraestrutura dedicada e autônoma para você. Nossa IA pesquisa os prospects, personaliza a abordagem e gerencia as conversas organicamente.</span>
</div>
</div>
</div>
<div className="group border-b border-white/5">
<button @click="openFaq === 1 ? openFaq = null : openFaq = 1" className="w-full py-6 flex justify-between items-center text-left hover:px-2 transition-all">
<span :className="openFaq === 1 ? 'text-white' : 'text-zinc-400'" className="text-base md:text-lg font-normal tracking-tight">
<span x-show="lang === 'en'">Do I need to buy additional software?</span>
<span x-cloak="" x-show="lang === 'pt'">Preciso comprar software adicional?</span>
</span>
<span :className="openFaq === 1 ? 'rotate-180 text-white' : ''" className="text-zinc-600 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</button>
<div x-collapse="" x-show="openFaq === 1">
<div className="pb-8 text-zinc-500 text-sm leading-relaxed px-2">
<span x-show="lang === 'en'">No. We handle the entire tech stack, including data scraping tools, LLM APIs, sending domains, and warmup software. You get the end result: booked meetings on your calendar.</span>
<span x-cloak="" x-show="lang === 'pt'">Não. Cuidamos de toda a estrutura tecnológica, incluindo ferramentas de dados, APIs, domínios de envio e software de aquecimento. Você obtém o resultado final: reuniões agendadas no seu calendário.</span>
</div>
</div>
</div>
<div className="group border-b border-white/5">
<button @click="openFaq === 2 ? openFaq = null : openFaq = 2" className="w-full py-6 flex justify-between items-center text-left hover:px-2 transition-all">
<span :className="openFaq === 2 ? 'text-white' : 'text-zinc-400'" className="text-base md:text-lg font-normal tracking-tight">
<span x-show="lang === 'en'">Is this safe for my main email domain?</span>
<span x-cloak="" x-show="lang === 'pt'">Isso é seguro para meu domínio de e-mail principal?</span>
</span>
<span :className="openFaq === 2 ? 'rotate-180 text-white' : ''" className="text-zinc-600 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</button>
<div x-collapse="" x-show="openFaq === 2">
<div className="pb-8 text-zinc-500 text-sm leading-relaxed px-2">
<span x-show="lang === 'en'">100%. We never use your primary company domain for outbound campaigns. We purchase and warm up lookalike domains that protect your main domain's reputation while still representing your brand seamlessly.</span>
<span x-cloak="" x-show="lang === 'pt'">100%. Nunca usamos seu domínio corporativo principal para campanhas ativas. Compramos e aquecemos domínios semelhantes que protegem a reputação da sua marca perfeitamente.</span>
</div>
</div>
</div>
<div className="group border-b border-white/5">
<button @click="openFaq === 3 ? openFaq = null : openFaq = 3" className="w-full py-6 flex justify-between items-center text-left hover:px-2 transition-all">
<span :className="openFaq === 3 ? 'text-white' : 'text-zinc-400'" className="text-base md:text-lg font-normal tracking-tight">
<span x-show="lang === 'en'">What is the timeline to launch?</span>
<span x-cloak="" x-show="lang === 'pt'">Qual é o prazo para o lançamento?</span>
</span>
<span :className="openFaq === 3 ? 'rotate-180 text-white' : ''" className="text-zinc-600 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</button>
<div x-collapse="" x-show="openFaq === 3">
<div className="pb-8 text-zinc-500 text-sm leading-relaxed px-2">
<span x-show="lang === 'en'">After our initial kickoff, it takes 14-21 days to complete domain setup, warmup protocols, market mapping, and AI agent training. You'll start seeing live campaigns and responses by week 3.</span>
<span x-cloak="" x-show="lang === 'pt'">Após nossa reunião inicial, leva de 14 a 21 dias para concluir a configuração, mapeamento de mercado e treinamento da IA. Você começará a ver campanhas ao vivo na semana 3.</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
<div className="md:col-span-4">
<h2 className="text-xl font-medium tracking-tight text-white mb-4">Lusitech</h2>
<p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
<span x-show="lang === 'en'">Autonomous lead generation systems that scale your pipeline without scaling headcount.</span>
<span x-cloak="" x-show="lang === 'pt'">Sistemas autônomos de geração de leads que escalam seu funil sem aumentar a equipe.</span>
</p>
</div>
<div className="md:col-span-8 grid grid-cols-2 gap-8 md:flex md:justify-end md:gap-24">
<div>
<h4 className="text-white font-medium text-sm mb-6 tracking-tight">
<span x-show="lang === 'en'">Platform</span>
<span x-cloak="" x-show="lang === 'pt'">Plataforma</span>
</h4>
<ul className="space-y-3 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#how-it-works">
<span x-show="lang === 'en'">How It Works</span><span x-cloak="" x-show="lang === 'pt'">Como Funciona</span>
</a></li>
<li><a className="hover:text-white transition-colors" href="#roi-calculator">
<span x-show="lang === 'en'">ROI Calculator</span><span x-cloak="" x-show="lang === 'pt'">Calculadora de ROI</span>
</a></li>
<li><a className="hover:text-white transition-colors" href="#case-studies">
<span x-show="lang === 'en'">Case Studies</span><span x-cloak="" x-show="lang === 'pt'">Casos de Sucesso</span>
</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-6 tracking-tight">
<span x-show="lang === 'en'">Company</span>
<span x-cloak="" x-show="lang === 'pt'">Empresa</span>
</h4>
<ul className="space-y-3 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">
<span x-show="lang === 'en'">About</span><span x-cloak="" x-show="lang === 'pt'">Sobre</span>
</a></li>
<li><a className="hover:text-white transition-colors" href="#faq">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#audit">
<span x-show="lang === 'en'">Contact</span><span x-cloak="" x-show="lang === 'pt'">Contato</span>
</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 flex justify-between items-center text-[10px] text-zinc-600 tracking-wider uppercase">
<span>© 2024 Lusitech. <span x-show="lang === 'en'">All rights reserved.</span><span x-cloak="" x-show="lang === 'pt'">Todos os direitos reservados.</span></span>
</div>
</div>
</footer>



    </>
  );
}
