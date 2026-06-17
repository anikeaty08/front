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



    // Language Toggle Functionality
    function setLang(lang) {
      document.documentElement.lang = lang;
      const btnEs = document.getElementById('btn-lang-es');
      const btnEn = document.getElementById('btn-lang-en');
      
      if (lang === 'es') {
        btnEs.classList.add('text-indigo-400', 'bg-white/5');
        btnEs.classList.remove('text-neutral-500', 'bg-transparent');
        btnEn.classList.remove('text-indigo-400', 'bg-white/5');
        btnEn.classList.add('text-neutral-500', 'bg-transparent');
      } else {
        btnEn.classList.add('text-indigo-400', 'bg-white/5');
        btnEn.classList.remove('text-neutral-500', 'bg-transparent');
        btnEs.classList.remove('text-indigo-400', 'bg-white/5');
        btnEs.classList.add('text-neutral-500', 'bg-transparent');
      }
    }

    // View Navigation (Home <-> Client Portal)
    function toggleView(viewId) {
      const homeView = document.getElementById('view-home');
      const portalView = document.getElementById('view-portal');
      const navLinks = document.getElementById('nav-links');
      
      if (viewId === 'portal') {
        homeView.classList.add('hidden');
        homeView.classList.remove('block');
        portalView.classList.remove('hidden');
        portalView.classList.add('block');
        navLinks.classList.add('hidden');
        navLinks.classList.remove('md:flex');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        portalView.classList.add('hidden');
        portalView.classList.remove('block');
        homeView.classList.remove('hidden');
        homeView.classList.add('block');
        navLinks.classList.remove('hidden');
        navLinks.classList.add('md:flex');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    // Scroll Progress Bar Logic
    window.addEventListener('scroll', () => {
      const scrollProgress = document.getElementById('scroll-progress');
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      scrollProgress.style.transform = `scaleX(${scroll})`;
    });

    // Intersection Observer for Scroll Animations
    document.addEventListener("DOMContentLoaded", function() {
      // Set default language visual state
      setLang(document.documentElement.lang || 'es');

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, observerOptions);

      document.querySelectorAll('.reveal-on-scroll, .kinetic-heading').forEach((el) => {
        observer.observe(el);
      });
    });
  


    document.addEventListener("DOMContentLoaded", function () {
      if (window.UnicornStudio) {
        UnicornStudio.init();
      }
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
      
<div className="fixed top-0 left-0 h-[2px] w-full z-[70] bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 pointer-events-none" id="scroll-progress"></div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute inset-0 vertical-streaks opacity-80"></div>
<div className="absolute inset-0 crt-scanlines opacity-40"></div>
</div>

<div className="overflow-hidden" style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', pointerEvents: 'none', zIndex: '5'}}>
<div className="absolute inset-0 falling-light-lines"></div>
</div>

<nav className="fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-white/5">
<div className="md:px-10 lg:px-16 flex w-full h-20 md:h-24 px-6 items-center">
<div className="flex items-center gap-4 cursor-pointer" onclick="toggleView('home')">
<div className="w-2 h-2 bg-indigo-500 animate-pulse"></div>
<a className="font-orbitron text-xs md:text-sm uppercase tracking-[0.3em] text-white/90 hover:text-indigo-400 transition-colors">DEEPFOREX</a>
</div>
<div className="ml-auto flex items-center gap-6 md:gap-10">
<div className="hidden md:flex items-center gap-12" id="nav-links">
<a className="text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-500 hover:text-indigo-400 transition-colors nav-item" href="#about">
<span className="lang-es">Tecnología</span><span className="lang-en">Technology</span>
</a>
<a className="text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-500 hover:text-indigo-400 transition-colors nav-item" href="#results">
<span className="lang-es">Rendimiento</span><span className="lang-en">Performance</span>
</a>
<a className="text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-500 hover:text-indigo-400 transition-colors nav-item" href="#pricing">
<span className="lang-es">Licencias</span><span className="lang-en">Licenses</span>
</a>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center gap-2 text-xs font-orbitron text-neutral-500 border border-white/10 px-3 py-1.5 bg-white/5">
<button className="text-indigo-400 hover:text-indigo-300 transition-colors bg-white/5" id="btn-lang-es" onclick="setLang('es')">ES</button>
<span className="text-white/20">|</span>
<button className="hover:text-indigo-400 transition-colors text-neutral-500 bg-transparent" id="btn-lang-en" onclick="setLang('en')">EN</button>
</div>
<button className="hidden sm:block font-orbitron text-xs uppercase tracking-[0.2em] border border-indigo-500/30 text-indigo-400 bg-indigo-500/5 px-8 py-3 hover:bg-indigo-400 hover:text-black hover:border-indigo-400 transition-all duration-300 relative group overflow-hidden rounded-none" onclick="toggleView('portal')">
<div className="absolute inset-0 w-full h-full bg-indigo-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
<span className="relative z-10"><span className="lang-es">Portal Cliente</span><span className="lang-en">Client Portal</span></span>
</button>
</div>
</div>
</div>
</nav>

<main className="relative z-10 w-full block" id="view-home">

<section className="overflow-hidden flex w-full h-screen border-white/5 border-b relative items-center" data-parallax-root="" id="home">

<div className="absolute inset-0 w-full h-full z-0 pointer-events-none" data-us-project="q0JSwb0l42Yf6m79xfW9" style={{width: '100%', height: '100%'}}></div>
<div className="absolute bottom-12 left-6 md:left-12 lg:left-16 z-20 pointer-events-none w-full max-w-4xl animate-hero-rise">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-orbitron tracking-[0.4em] text-indigo-500 uppercase">
<span className="lang-es">Sistema en Línea</span><span className="lang-en">System Online</span>
</span>
<span className="w-12 h-[1px] bg-indigo-500/50"></span>
</div>
<h1 className="font-orbitron text-white uppercase leading-[1.1] tracking-tight text-4xl md:text-6xl lg:text-7xl drop-shadow-[0_0_30px_rgba(99,102,241,0.15)] kinetic-heading in-view font-normal">
<span className="lang-es">Trading Algorítmico<br/></span>
<span className="lang-en">AI-Powered Algorithmic<br/></span>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white/50">
<span className="lang-es">con IA para MT5.</span><span className="lang-en">Trading for MT5.</span>
</span>
</h1>
<p className="mt-8 text-sm md:text-base text-neutral-400 font-light tracking-wide max-w-xl border-l border-indigo-500/30 pl-4 py-1">
<span className="lang-es">Asesores Expertos Avanzados y sistemas de IA adaptables construidos para cuentas reales y desafíos de fondeo de prop firms.</span>
<span className="lang-en">Advanced Expert Advisors and Adaptive AI systems built for real accounts and proprietary funding challenges.</span>
</p>
<div className="mt-10 flex flex-col sm:flex-row items-start gap-4 pointer-events-auto">
<a className="group relative inline-flex items-center gap-3 border border-indigo-400 bg-indigo-400/10 text-indigo-400 font-orbitron font-normal text-xs uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 hover:bg-indigo-400 hover:text-black hover:shadow-[0_0_40px_rgba(129,140,248,0.4)] rounded-none" href="#pricing">
<span className=""><span className="lang-es">Empezar Ahora</span><span className="lang-en">Start Now</span></span>
<iconify-icon height="18" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 group-hover:border-black/50"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 group-hover:border-black/50">
</div>
</a>
<a className="group relative inline-flex items-center gap-3 border border-white/10 bg-transparent text-white font-orbitron font-normal text-xs uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 hover:border-white/30 hover:bg-white/5 rounded-none" href="#results">
<span className=""><span className="lang-es">Ver Resultados Verificados</span><span className="lang-en">View Verified Results</span></span>
<iconify-icon height="18" icon="solar:graph-up-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="absolute bottom-12 right-6 lg:right-16 z-30 flex flex-col items-end gap-2 text-right pointer-events-none reveal-on-scroll">
<p className="font-orbitron text-xs tracking-[0.3em] text-neutral-600 uppercase">
<span className="lang-es">Arquitectura</span><span className="lang-en">Architecture</span>
</p>
<div className="flex gap-4 text-xs font-mono text-indigo-500/70 mt-2">
<span>[ MT5 ]</span>
<span>[ AI CORE ]</span>
<span>[ LOW DD ]</span>
</div>
</div>
</section>

<div className="relative w-full z-10">

<div className="absolute inset-0 z-0 pointer-events-none" style={{clipPath: 'inset(0)'}}>
<div className="sticky top-0 w-full h-screen">
<div className="absolute w-full h-full left-0 top-0" data-us-project="8dH3WnYdxsenOolYGHB0"></div>
</div>
</div>

<section className="md:py-36 md:px-12 lg:px-24 overflow-hidden bg-neutral-950/30 w-full border-white/5 border-b pt-24 pr-6 pb-24 pl-6 relative z-10" id="about">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10">
<div className="w-full lg:w-1/2 space-y-8">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-indigo-500 flex items-center gap-3 reveal-on-scroll">
<span className="w-8 h-[1px] bg-indigo-500"></span> 01 // <span className="lang-es">Tecnología</span><span className="lang-en">Technology</span>
</p>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white font-orbitron uppercase leading-[1.1] reveal-on-scroll">
<span className="lang-es">Precisión.<br/>Control de Riesgo.<br/>Rendimiento.</span>
<span className="lang-en">Precision.<br/>Risk Control.<br/>Performance.</span>
</h2>
<div className="space-y-6 text-sm text-neutral-400 font-light leading-relaxed border-l border-white/10 pl-6 reveal-on-scroll">
<p className="">
<span className="lang-es">DeepForex desarrolla Asesores Expertos (EAs) y sistemas de trading algorítmico impulsados por IA para MetaTrader 5.</span>
<span className="lang-en">DeepForex develops advanced AI-powered Expert Advisors (EAs) and algorithmic trading systems for MetaTrader 5.</span>
</p>
<p className="">
<span className="lang-es">Nuestros sistemas están estrictamente diseñados para ofrecer estabilidad institucional, listos para operar en cuentas reales, desafíos de prop firms y cuentas fondeadas.</span>
<span className="lang-en">Our systems are strictly engineered for institutional-grade stability, designed to operate on real trading accounts, proprietary firm challenges, and funded accounts.</span>
</p>
<p className="">
<span className="lang-es">Evitamos sistemas tradicionales de martingala o grillas, enfocándonos en un refinamiento continuo impulsado por análisis de datos neuronales y backtests verificados.</span>
<span className="lang-en">We bypass traditional grid and martingale systems, focusing instead on continuous strategy refinement driven by neural data analysis and verified backtesting.</span>
</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 reveal-on-scroll">
<div className="border border-white/10 bg-[rgba(0,0,0,0.75)] p-4">
<p className="text-[10px] font-orbitron uppercase tracking-[0.2em] text-neutral-500">Drawdown</p>
<p className="mt-3 text-2xl font-orbitron text-indigo-400 font-light">&lt; 5%</p>
</div>
<div className="border border-white/10 bg-[rgba(0,0,0,0.75)] p-4">
<p className="text-[10px] font-orbitron uppercase tracking-[0.2em] text-neutral-500">
<span className="lang-es">Ratio Riesgo:Beneficio</span><span className="lang-en">Avg Risk:Reward</span>
</p>
<p className="mt-3 text-2xl font-orbitron text-indigo-400 font-light">1:3</p>
</div>
<div className="border border-white/10 bg-[rgba(0,0,0,0.75)] p-4">
<p className="text-[10px] font-orbitron uppercase tracking-[0.2em] text-neutral-500">
<span className="lang-es">Adaptación</span><span className="lang-en">Adaptation</span>
</p>
<p className="mt-3 text-2xl font-orbitron text-indigo-400 font-light">
<span className="lang-es">Dinámica</span><span className="lang-en">Dynamic</span>
</p>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 relative bg-[rgba(0,0,0,0.75)] border border-white/10 p-8 md:p-12 reveal-on-scroll">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent"></div>
<h3 className="text-xs font-orbitron tracking-[0.3em] uppercase text-neutral-500 mb-8 flex items-center justify-between">
<span className=""><span className="lang-es">Parámetros Lógicos</span><span className="lang-en">Logic Parameters</span></span>
<span className="text-indigo-500 animate-pulse">ACTIVE</span>
</h3>
<div className="space-y-8">
<div className="">
<div className="flex justify-between text-xs font-orbitron text-indigo-400 mb-2 tracking-widest uppercase">
<span className=""><span className="lang-es">IA de Patrones</span><span className="lang-en">Pattern Recognition AI</span></span>
<span className=""><span className="lang-es">Optimizado</span><span className="lang-en">Optimized</span></span>
</div>
<div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-indigo-400 w-[92%] shadow-[0_0_10px_rgba(129,140,248,0.5)]"></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-xs font-orbitron text-indigo-400 mb-2 tracking-widest uppercase">
<span className=""><span className="lang-es">Cumplimiento Prop Firms</span><span className="lang-en">Prop Firm Compliance</span></span>
<span className="">100% Strict</span>
</div>
<div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-indigo-500 w-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-xs font-orbitron text-indigo-400 mb-2 tracking-widest uppercase">
<span className=""><span className="lang-es">Latencia de Ejecución</span><span className="lang-en">Execution Latency</span></span>
<span className=""><span className="lang-es">Sub-milisegundo</span><span className="lang-en">Sub-millisecond</span></span>
</div>
<div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-indigo-300 w-[98%] shadow-[0_0_10px_rgba(129,140,248,0.5)]"></div>
</div>
</div>
</div>
<div className="mt-10 border-t border-white/10 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
<div className="border border-white/10 p-4 bg-neutral-950/40">
<p className="font-orbitron uppercase tracking-[0.2em] text-neutral-500">Core Matrix</p>
<ul className="mt-2 text-neutral-400 space-y-1">
<li className="">• <span className="lang-es">Estructuras de bajo DD</span><span className="lang-en">Low drawdown structures</span></li>
<li className="">• <span className="lang-es">Modelos de alto R:R</span><span className="lang-en">High R:R models</span></li>
</ul>
</div>
<div className="border border-white/10 p-4 bg-neutral-950/40">
<p className="font-orbitron uppercase tracking-[0.2em] text-neutral-500">
<span className="lang-es">Protección</span><span className="lang-en">Protection</span>
</p>
<ul className="mt-2 text-neutral-400 space-y-1">
<li className="">• <span className="lang-es">Stop Loss duro forzado</span><span className="lang-en">Hard Stop Loss enforced</span></li>
<li className="">• <span className="lang-es">Filtro de noticias integrado</span><span className="lang-en">News filter integration</span></li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-black/40 relative overflow-hidden z-10" id="results">
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8 reveal-on-scroll">
<div className="">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-indigo-500 mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-indigo-500"></span> 02 // Analytics
              </p>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white font-orbitron uppercase">
<span className="lang-es">Rendimiento Verificado</span><span className="lang-en">Verified Performance</span>
</h2>
</div>
<p className="text-neutral-500 text-xs font-orbitron tracking-[0.2em] uppercase max-w-xs text-right">
<span className="lang-es">Datos transparentes mapeados directamente desde servidores MT5.</span>
<span className="lang-en">Transparent data mapped directly from MT5 servers.</span>
</p>
</div>
<div className="mb-20 reveal-on-scroll">
<h3 className="text-sm font-orbitron tracking-[0.3em] text-indigo-400 uppercase mb-8 border-l-2 border-indigo-500 pl-4">
<span className="lang-es">Resumen Cuantitativo</span><span className="lang-en">Quantitative Performance Overview</span>
</h3>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="border border-white/10 bg-[rgba(10,10,10,0.75)] p-4 relative overflow-hidden group">
<div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
<p className="text-[10px] font-orbitron tracking-[0.2em] text-neutral-500 uppercase"><span className="lang-es">Años Operando</span><span className="lang-en">Years Operating</span></p>
<p className="mt-2 text-2xl font-orbitron text-white font-light group-hover:text-indigo-400 transition-colors">5 <span className="text-xs text-neutral-500">YRS</span></p>
</div>
<div className="border border-white/10 bg-[rgba(10,10,10,0.75)] p-4 relative overflow-hidden group">
<div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
<p className="text-[10px] font-orbitron tracking-[0.2em] text-neutral-500 uppercase"><span className="lang-es">Clientes Activos</span><span className="lang-en">Active Clients</span></p>
<p className="mt-2 text-2xl font-orbitron text-white font-light group-hover:text-indigo-400 transition-colors">60+</p>
</div>
<div className="border border-white/10 bg-[rgba(10,10,10,0.75)] p-4 relative overflow-hidden group">
<div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
<p className="text-[10px] font-orbitron tracking-[0.2em] text-neutral-500 uppercase"><span className="lang-es">Drawdown Histórico Promedio</span><span className="lang-en">Avg Historical Drawdown</span></p>
<p className="mt-2 text-2xl font-orbitron text-white font-light group-hover:text-indigo-400 transition-colors">3.5%</p>
</div>
<div className="border border-white/10 bg-[rgba(10,10,10,0.75)] p-4 relative overflow-hidden group">
<div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
<p className="text-[10px] font-orbitron tracking-[0.2em] text-neutral-500 uppercase"><span className="lang-es">Rendimiento Mensual Promedio</span><span className="lang-en">Avg Monthly Performance</span></p>
<p className="mt-2 text-2xl font-orbitron text-white font-light group-hover:text-indigo-400 transition-colors">6%</p>
</div>
<div className="border border-white/10 bg-[rgba(10,10,10,0.75)] p-4 relative overflow-hidden group">
<div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
<p className="text-[10px] font-orbitron tracking-[0.2em] text-neutral-500 uppercase"><span className="lang-es">Exposición de Capital</span><span className="lang-en">Capital Exposure</span></p>
<p className="mt-2 text-xl font-orbitron text-white font-light group-hover:text-indigo-400 transition-colors">+$400k</p>
</div>
<div className="border border-white/10 bg-[rgba(10,10,10,0.75)] p-4 relative overflow-hidden group">
<div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
<p className="text-[10px] font-orbitron tracking-[0.2em] text-neutral-500 uppercase"><span className="lang-es">Optimización IA</span><span className="lang-en">AI Optimization</span></p>
<div className="mt-2 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
<p className="text-sm font-orbitron text-white font-light uppercase"><span className="lang-es">Continua</span><span className="lang-en">Continuous</span></p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group relative bg-[rgba(10,10,10,0.75)] border border-white/10 hover:border-indigo-500/50 transition-colors duration-500 p-6 flex flex-col justify-between min-h-[320px] rounded-none overflow-hidden cursor-crosshair reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden"><div className="h-full w-1/3 bg-indigo-400 animate-scan-line hidden group-hover:block"></div></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-12">
<div className="w-10 h-10 border border-white/10 bg-[rgba(0,0,0,0.75)] flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-500 rounded-none">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-orbitron tracking-[0.2em] text-neutral-600 border border-white/5 px-2 py-1 uppercase"><span className="lang-es">Historial</span><span className="lang-en">Track Record</span></span>
</div>
<h3 className="text-xl font-normal tracking-tight mb-2 text-white font-orbitron uppercase group-hover:text-indigo-300 transition-colors">MyFXBook <span className="lang-es">Verificado</span><span className="lang-en">Verified</span></h3>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
<span className="lang-es">Monitoreo en vivo de nuestras cuentas maestras principales que muestran ganancia absoluta, crecimiento de equidad y métricas de drawdown en tiempo real.</span>
<span className="lang-en">Live monitoring of our primary master accounts showing absolute gain, equity growth, and real-time drawdown metrics.</span>
</p>
</div>
<a className="relative z-10 flex items-center gap-2 text-indigo-500 text-xs font-orbitron tracking-[0.2em] uppercase mt-8 opacity-50 group-hover:opacity-100 transition-opacity" href="#">
<span className="lang-es">Ver Estadísticas Completas</span><span className="lang-en">See Full Statistics</span> <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="group relative bg-[rgba(10,10,10,0.75)] border border-white/10 hover:border-indigo-500/50 transition-colors duration-500 p-6 flex flex-col justify-between min-h-[320px] rounded-none overflow-hidden cursor-crosshair reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden"><div className="h-full w-1/3 bg-indigo-400 animate-scan-line hidden group-hover:block"></div></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-12">
<div className="w-10 h-10 border border-white/10 bg-[rgba(0,0,0,0.75)] flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-500 rounded-none">
<iconify-icon icon="solar:history-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-orbitron tracking-[0.2em] text-neutral-600 border border-white/5 px-2 py-1 uppercase"><span className="lang-es">Modelo de Datos</span><span className="lang-en">Data Model</span></span>
</div>
<h3 className="text-xl font-normal tracking-tight mb-2 text-white font-orbitron uppercase group-hover:text-indigo-300 transition-colors"><span className="lang-es">Reportes de Backtest</span><span className="lang-en">Backtesting Reports</span></h3>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
<span className="lang-es">Backtests con datos de ticks de 10 años y 99.9% de calidad de modelado, demostrando la resiliencia de la estrategia en diversas condiciones de mercado.</span>
<span className="lang-en">10-year tick-data backtests with 99.9% modeling quality demonstrating strategy resilience across various market conditions.</span>
</p>
</div>
<a className="relative z-10 flex items-center gap-2 text-indigo-500 text-xs font-orbitron tracking-[0.2em] uppercase mt-8 opacity-50 group-hover:opacity-100 transition-opacity" href="#">
<span className="lang-es">Ver Reportes</span><span className="lang-en">View Reports</span> <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="group relative bg-[rgba(10,10,10,0.75)] border border-white/10 hover:border-indigo-500/50 transition-colors duration-500 p-6 flex flex-col justify-between min-h-[320px] rounded-none overflow-hidden cursor-crosshair reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden"><div className="h-full w-1/3 bg-indigo-400 animate-scan-line hidden group-hover:block"></div></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-12">
<div className="w-10 h-10 border border-white/10 bg-[rgba(0,0,0,0.75)] flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-500 rounded-none">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-orbitron tracking-[0.2em] text-neutral-600 border border-white/5 px-2 py-1 uppercase">Prop Firms</span>
</div>
<h3 className="text-xl font-normal tracking-tight mb-2 text-white font-orbitron uppercase group-hover:text-indigo-300 transition-colors"><span className="lang-es">Panel de Métricas de Riesgo</span><span className="lang-en">Risk Metrics Dashboard</span></h3>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
<span className="lang-es">Capturas y certificados de desafíos exitosos en prop firms, probando el cumplimiento de strictos límites de pérdida diaria.</span>
<span className="lang-en">Screenshots and certificates from successful proprietary firm challenges, proving adherence to strict daily loss limits.</span>
</p>
</div>
<a className="relative z-10 flex items-center gap-2 text-indigo-500 text-xs font-orbitron tracking-[0.2em] uppercase mt-8 opacity-50 group-hover:opacity-100 transition-opacity" href="#">
<span className="lang-es">Verificar Datos</span><span className="lang-en">Verify Data</span> <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-neutral-950/30 relative z-10 overflow-hidden" id="process">
<div className="max-w-7xl mx-auto relative z-10">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-indigo-500 mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-indigo-500"></span> 03 // <span className="lang-es">Despliegue</span><span className="lang-en">Deployment</span>
</p>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white font-orbitron uppercase mb-12">
<span className="lang-es">Integración del Sistema</span><span className="lang-en">System Integration</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="border border-white/10 p-6 bg-[rgba(0,0,0,0.75)] relative overflow-hidden group">
<div className="absolute top-0 left-0 w-[2px] h-0 bg-indigo-500 group-hover:h-full transition-all duration-500 ease-out"></div>
<p className="text-indigo-400 text-xs font-orbitron uppercase tracking-[0.2em]"><span className="lang-es">Paso</span><span className="lang-en">Step</span> 01</p>
<p className="text-sm text-white mt-4 font-orbitron uppercase"><span className="lang-es">Adquirir Licencia</span><span className="lang-en">Purchase License</span></p>
<p className="text-xs text-neutral-500 mt-2"><span className="lang-es">Selecciona la duración que se ajuste a tus objetivos de capital.</span><span className="lang-en">Select the duration that fits your trading capital goals.</span></p>
</div>
<div className="border border-white/10 p-6 bg-[rgba(0,0,0,0.75)] relative overflow-hidden group">
<div className="absolute top-0 left-0 w-[2px] h-0 bg-indigo-500 group-hover:h-full transition-all duration-500 ease-out"></div>
<p className="text-indigo-400 text-xs font-orbitron uppercase tracking-[0.2em]"><span className="lang-es">Paso</span><span className="lang-en">Step</span> 02</p>
<p className="text-sm text-white mt-4 font-orbitron uppercase"><span className="lang-es">Instalar en MT5</span><span className="lang-en">Install on MT5</span></p>
<p className="text-xs text-neutral-500 mt-2"><span className="lang-es">Despliega el archivo EA en tu terminal MetaTrader 5.</span><span className="lang-en">Deploy the EA file onto your MetaTrader 5 terminal.</span></p>
</div>
<div className="border border-white/10 p-6 bg-[rgba(0,0,0,0.75)] relative overflow-hidden group">
<div className="absolute top-0 left-0 w-[2px] h-0 bg-indigo-500 group-hover:h-full transition-all duration-500 ease-out"></div>
<p className="text-indigo-400 text-xs font-orbitron uppercase tracking-[0.2em]"><span className="lang-es">Paso</span><span className="lang-en">Step</span> 03</p>
<p className="text-sm text-white mt-4 font-orbitron uppercase"><span className="lang-es">Conectar API</span><span className="lang-en">Connect API</span></p>
<p className="text-xs text-neutral-500 mt-2"><span className="lang-es">Vincula tu cuenta a los servidores de Optimización de IA.</span><span className="lang-en">Link your account to DeepForex AI Optimization servers.</span></p>
</div>
<div className="border border-white/10 p-6 bg-[rgba(0,0,0,0.75)] relative overflow-hidden group">
<div className="absolute top-0 left-0 w-[2px] h-0 bg-indigo-500 group-hover:h-full transition-all duration-500 ease-out"></div>
<p className="text-indigo-400 text-xs font-orbitron uppercase tracking-[0.2em]"><span className="lang-es">Paso</span><span className="lang-en">Step</span> 04</p>
<p className="text-sm text-white mt-4 font-orbitron uppercase"><span className="lang-es">Ejecución Automática</span><span className="lang-en">Automated Execution</span></p>
<p className="text-xs text-neutral-500 mt-2"><span className="lang-es">Deja que el sistema opere con riesgo estrictamente controlado.</span><span className="lang-en">Let the system trade with strictly controlled risk parameters.</span></p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-black/40 relative z-10 overflow-hidden" id="pricing">
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-20 flex flex-col items-center text-center reveal-on-scroll">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-indigo-500 mb-4 flex items-center justify-center gap-3">
               04 // <span className="lang-es">Adquisición</span><span className="lang-en">Acquisition</span>
</p>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white font-orbitron uppercase">
<span className="lang-es">Elige tu Ventaja Competitiva</span><span className="lang-en">Choose Your Trading Edge</span>
</h2>
<p className="mt-6 text-sm text-neutral-400 font-light tracking-wide max-w-xl">
<span className="lang-es">Adquiere instancias de computación dedicadas y acceso al algoritmo para integrarlo en tu portafolio.</span>
<span className="lang-en">Acquire dedicated computing instances and algorithm access to integrate our EA directly into your portfolio.</span>
</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
<div className="border border-white/10 bg-neutral-950/50 p-8 flex flex-col h-full hover:border-white/30 transition-colors reveal-on-scroll">
<div className="mb-8">
<h3 className="text-xs font-orbitron tracking-[0.3em] uppercase text-neutral-500 mb-4">Starter</h3>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-3xl font-orbitron font-normal text-white">$150</span>
<span className="text-xs text-neutral-500 tracking-widest uppercase">/ 1 <span className="lang-es">Mes</span><span className="lang-en">Month</span></span>
</div>
<p className="text-xs text-neutral-400 font-light"><span className="lang-es">Acceso a corto plazo para evaluación o pasar fases iniciales.</span><span className="lang-en">Short-term access for evaluation or passing initial phases.</span></p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-white/30 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span><span className="lang-es">EA Compatible con MT5</span><span className="lang-en">MT5 Compatible EA</span></span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-white/30 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span><span className="lang-es">Estrategia Adaptativa IA</span><span className="lang-en">AI Adaptive Strategy</span></span>
</li>
</ul>
<a className="w-full text-center border border-white/10 bg-white/5 hover:bg-white/10 text-white font-orbitron text-xs uppercase tracking-[0.2em] py-4 transition-colors" href="#">
<span className="lang-es">Comprar Ahora</span><span className="lang-en">Buy Now</span>
</a>
</div>
<div className="border border-indigo-500/50 bg-[rgba(0,0,0,0.75)] p-8 flex flex-col h-full relative shadow-[0_0_30px_rgba(99,102,241,0.05)] lg:-translate-y-4 reveal-on-scroll">
<div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
<div className="absolute -top-3 right-6 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-orbitron uppercase tracking-[0.2em] px-3 py-1 backdrop-blur-md">
<span className="lang-es">Más Popular</span><span className="lang-en">Most Popular</span>
</div>
<div className="mb-8 mt-2">
<h3 className="text-xs font-orbitron tracking-[0.3em] uppercase text-indigo-400 mb-4">Professional</h3>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-4xl font-orbitron font-normal text-white">$350</span>
<span className="text-xs text-neutral-500 tracking-widest uppercase">/ 3 <span className="lang-es">Meses</span><span className="lang-en">Months</span></span>
</div>
<p className="text-xs text-neutral-400 font-light"><span className="lang-es">Óptimo para desafíos de fondeo completos y escalado en real.</span><span className="lang-en">Optimal for full funding challenges and real account scaling.</span></p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-indigo-500 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span><span className="lang-es">Todo en Starter</span><span className="lang-en">Everything in Starter</span></span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-indigo-500 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span><span className="lang-es">Optimizado para Pruebas de Fondeo</span><span className="lang-en">Optimized for Funding Challenges</span></span>
</li>
</ul>
<a className="w-full text-center border border-indigo-500 bg-indigo-500/10 hover:bg-indigo-500 hover:text-black text-indigo-400 font-orbitron text-xs uppercase tracking-[0.2em] py-4 transition-all duration-300 group" href="#">
<span className="relative z-10 flex justify-center items-center gap-2"><span className="lang-es">Comprar Ahora</span><span className="lang-en">Buy Now</span> <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</a>
</div>
<div className="border border-white/10 bg-neutral-950/50 p-8 flex flex-col h-full hover:border-white/30 transition-colors reveal-on-scroll">
<div className="mb-8">
<h3 className="text-xs font-orbitron tracking-[0.3em] uppercase text-neutral-500 mb-4">Institutional</h3>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-3xl font-orbitron font-normal text-white">$800</span>
<span className="text-xs text-neutral-500 tracking-widest uppercase">/ 1 <span className="lang-es">Año</span><span className="lang-en">Year</span></span>
</div>
<p className="text-xs text-neutral-400 font-light"><span className="lang-es">Despliegue a largo plazo para gestión de capital seria.</span><span className="lang-en">Long-term deployment for serious capital management.</span></p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-white/30 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span><span className="lang-es">Tamaño de Lotes Ilimitado</span><span className="lang-en">Unrestricted Lot Sizes</span></span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-white/30 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span><span className="lang-es">Actualizaciones de Versión Gratuitas</span><span className="lang-en">Free Version Updates</span></span>
</li>
</ul>
<a className="w-full text-center border border-white/10 bg-transparent hover:bg-white/5 text-white font-orbitron text-xs uppercase tracking-[0.2em] py-4 transition-colors" href="#">
<span className="lang-es">Comprar Ahora</span><span className="lang-en">Buy Now</span>
</a>
</div>
</div>
<div className="mt-16 border-t border-white/10 pt-8 flex flex-col items-center reveal-on-scroll">
<p className="font-orbitron text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-6"><span className="lang-es">Métodos de Pago Aceptados</span><span className="lang-en">Accepted Payment Methods</span></p>
<div className="flex flex-wrap justify-center items-center gap-4 text-[10px] font-orbitron text-neutral-400 uppercase tracking-widest">
<span className="border border-white/5 bg-white/5 px-4 py-2 hover:border-indigo-500/50 transition-colors flex items-center gap-2"><iconify-icon icon="solar:wallet-linear" width="14"></iconify-icon> BTC</span>
<span className="border border-white/5 bg-white/5 px-4 py-2 hover:border-indigo-500/50 transition-colors flex items-center gap-2"><iconify-icon icon="solar:wallet-linear" width="14"></iconify-icon> ETH</span>
<span className="border border-white/5 bg-white/5 px-4 py-2 hover:border-indigo-500/50 transition-colors flex items-center gap-2"><iconify-icon icon="solar:wallet-linear" width="14"></iconify-icon> USDT</span>
<span className="border border-white/5 bg-white/5 px-4 py-2 hover:border-indigo-500/50 transition-colors flex items-center gap-2"><iconify-icon icon="solar:card-linear" width="14"></iconify-icon> PayPal</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-neutral-950/30 relative z-10 overflow-hidden" id="social-proof">
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-20 reveal-on-scroll">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-indigo-500 mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-indigo-500"></span> 05 // Network
            </p>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white font-orbitron uppercase">
<span className="lang-es">Confiado por Traders Serios</span><span className="lang-en">Trusted by Serious Traders</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
<div className="bg-[rgba(0,0,0,0.75)] border border-white/10 p-8 relative group hover:border-indigo-500/30 transition-colors duration-500 reveal-on-scroll">
<iconify-icon className="text-white/10 absolute top-6 right-6" icon="solar:quote-left-linear" width="24"></iconify-icon>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8 relative z-10">
<span className="lang-es">"Pasé mi desafío de 100k en menos de 3 semanas. La lógica de gestión de riesgo integrada en este EA es diferente a cualquier otra en el mercado. Previene físicamente drawdowns catastróficos."</span>
<span className="lang-en">"Passed my 100k challenge in under 3 weeks. The risk management logic built into this EA is unlike anything else on the market. It physically prevents catastrophic drawdowns."</span>
</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
<div className="w-10 h-10 border border-white/10 bg-[rgba(23,23,23,0.75)] flex items-center justify-center">
<iconify-icon className="text-indigo-500/50" icon="solar:user-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-orbitron text-xs tracking-[0.1em] text-white uppercase">Client.A84</p>
<p className="text-xs text-indigo-500 tracking-[0.2em] font-orbitron uppercase mt-1"><span className="lang-es">Trader Fondeado</span><span className="lang-en">Funded Trader</span></p>
</div>
</div>
</div>
<div className="bg-[rgba(0,0,0,0.75)] border border-white/10 p-8 relative group hover:border-indigo-500/30 transition-colors duration-500 reveal-on-scroll">
<iconify-icon className="text-white/10 absolute top-6 right-6" icon="solar:quote-left-linear" width="24"></iconify-icon>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8 relative z-10">
<span className="lang-es">"Corriendo DeepForex en mi portafolio en vivo por 6 meses. Estable, consistente, y requiere cero intervención diaria. Verdadera ventaja algorítmica."</span>
<span className="lang-en">"Running DeepForex on my live portfolio for 6 months now. Stable, consistent, and requires zero daily intervention. True algorithmic edge."</span>
</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
<div className="w-10 h-10 border border-indigo-500/30 bg-indigo-500/5 flex items-center justify-center">
<iconify-icon className="text-indigo-400" icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-orbitron text-xs tracking-[0.1em] text-white uppercase">Client.T12</p>
<p className="text-xs text-indigo-500 tracking-[0.2em] font-orbitron uppercase mt-1"><span className="lang-es">Inversor Privado</span><span className="lang-en">Private Investor</span></p>
</div>
</div>
</div>
<div className="flex flex-col justify-center border border-white/10 bg-[rgba(0,0,0,0.75)] p-8 reveal-on-scroll">
<h3 className="font-orbitron text-sm uppercase tracking-[0.2em] text-white mb-6 text-center"><span className="lang-es">Únete a la Comunidad</span><span className="lang-en">Join The Community</span></h3>
<div className="grid grid-cols-2 gap-4">
<a className="flex flex-col items-center justify-center gap-2 p-4 border border-white/5 bg-white/5 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors" href="#">
<iconify-icon icon="mdi:instagram" width="24"></iconify-icon>
<span className="text-[10px] font-orbitron uppercase tracking-widest">Instagram</span>
</a>
<a className="flex flex-col items-center justify-center gap-2 p-4 border border-white/5 bg-white/5 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors" href="#">
<iconify-icon icon="ic:baseline-tiktok" width="24"></iconify-icon>
<span className="text-[10px] font-orbitron uppercase tracking-widest">TikTok</span>
</a>
<a className="flex flex-col items-center justify-center gap-2 p-4 border border-white/5 bg-white/5 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors" href="#">
<iconify-icon icon="mdi:facebook" width="24"></iconify-icon>
<span className="text-[10px] font-orbitron uppercase tracking-widest">Facebook</span>
</a>
<a className="flex flex-col items-center justify-center gap-2 p-4 border border-white/5 bg-white/5 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors" href="https://t.me/thedeepforex" target="_blank">
<iconify-icon icon="mdi:telegram" width="24"></iconify-icon>
<span className="text-[10px] font-orbitron uppercase tracking-widest">Telegram</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-black/40 relative overflow-hidden z-10" id="investors">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(129,140,248,0.05),_transparent_50%)] z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 relative z-10">
<div className="w-full md:w-1/2">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-indigo-500 mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-indigo-500"></span> Institutional
            </p>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white font-orbitron uppercase mb-6">
<span className="lang-es">Capital Estratégico &amp; Alianzas</span><span className="lang-en">Strategic Capital &amp; Partnerships</span>
</h2>
<p className="text-sm text-neutral-400 font-light mb-8 leading-relaxed">
<span className="lang-es">Estamos abiertos a alianzas estratégicas y oportunidades de escalado de capital. Explora nuestros marcos institucionales diseñados para gestores de fondos y oficinas familiares.</span>
<span className="lang-en">We are open to strategic partnerships and capital scaling opportunities. Explore our institutional frameworks designed for fund managers and family offices.</span>
</p>
<ul className="space-y-4 mb-10 text-sm text-neutral-300">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-indigo-500"></div> <span className="lang-es">Alianzas para escalado de capital</span><span className="lang-en">Capital scaling partnerships</span></li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-indigo-500"></div> <span className="lang-es">Colaboración tecnológica estratégica</span><span className="lang-en">Strategic technology collaboration</span></li>
</ul>
</div>
<div className="w-full md:w-1/2">
<form className="bg-neutral-950/50 border border-white/10 p-8 space-y-4">
<h3 className="font-orbitron text-sm uppercase tracking-[0.2em] text-white mb-6 border-b border-white/5 pb-4"><span className="lang-es">Solicitud Institucional</span><span className="lang-en">Institutional Inquiry</span></h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<input placeholder="Name / Nombre" required="" type="text"/>
<input placeholder="Company / Empresa" required="" type="text"/>
</div>
<div>
<select className="appearance-none cursor-pointer" required="">
<option disabled="" selected="" value=""><span className="lang-es">Rango de Capital de Interés...</span><span className="lang-en">Capital Interest Range...</span></option>
<option value="50k-250k">$50,000 - $250,000</option>
<option value="250k-1M">$250,000 - $1,000,000</option>
<option value="1M+">$1,000,000+</option>
</select>
</div>
<div>
<input placeholder="Corporate Email / Correo" required="" type="email"/>
</div>
<div>
<textarea placeholder="Message / Mensaje" required="" rows="3"></textarea>
</div>
<button className="w-full border border-white/20 bg-white/5 text-white font-orbitron font-normal text-xs uppercase tracking-[0.2em] py-4 transition-all hover:bg-white hover:text-black mt-2" type="submit">
<span className="lang-es">Solicitar Deck de Inversores</span><span className="lang-en">Request Investor Deck</span>
</button>
</form>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-neutral-950/30 relative z-10 overflow-hidden" id="faq">
<div className="max-w-3xl mx-auto relative z-10">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-indigo-500 mb-4 text-center">06 // Database Queries</p>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white font-orbitron uppercase mb-16 text-center">FAQ</h2>
<div className="space-y-6">
<div className="border border-white/10 bg-[rgba(0,0,0,0.75)] p-6">
<h3 className="text-white font-orbitron uppercase tracking-[0.1em] text-sm"><span className="lang-es">¿Está garantizado el beneficio?</span><span className="lang-en">Is this guaranteed profit?</span></h3>
<p className="text-neutral-500 mt-2 text-sm leading-relaxed"><span className="lang-es">Ningún sistema de trading puede garantizar beneficios futuros. Nuestro EA se basa en probabilidades históricas y estricta gestión de riesgo. El trading implica riesgo significativo.</span><span className="lang-en">No trading system can guarantee future profits. Our EA is based on historical probabilities and strict risk management. Trading involves significant risk.</span></p>
</div>
<div className="border border-white/10 bg-[rgba(0,0,0,0.75)] p-6">
<h3 className="text-white font-orbitron uppercase tracking-[0.1em] text-sm"><span className="lang-es">¿Cuál es el drawdown promedio?</span><span className="lang-en">What is the average drawdown?</span></h3>
<p className="text-neutral-500 mt-2 text-sm leading-relaxed"><span className="lang-es">Nuestros sistemas están diseñados para mantener un perfil de drawdown estricto, operando típicamente por debajo del 5% para cumplir con los requisitos de prop firms.</span><span className="lang-en">Our systems are engineered to maintain a strict drawdown profile, typically operating below 5% to comply with stringent proprietary firm requirements.</span></p>
</div>
<div className="border border-white/10 bg-[rgba(0,0,0,0.75)] p-6">
<h3 className="text-white font-orbitron uppercase tracking-[0.1em] text-sm"><span className="lang-es">¿Funciona para FTMO / empresas de fondeo?</span><span className="lang-en">Does it work for FTMO / funding firms?</span></h3>
<p className="text-neutral-500 mt-2 text-sm leading-relaxed"><span className="lang-es">Sí. La lógica está diseñada específicamente para adherirse a los límites de pérdida diaria, drawdowns máximos y reglas de consistencia de las principales empresas de fondeo.</span><span className="lang-en">Yes. The logic is specifically designed to adhere to the daily loss limits, maximum drawdowns, and consistency rules of major proprietary trading firms.</span></p>
</div>
<div className="border border-white/10 bg-[rgba(0,0,0,0.75)] p-6">
<h3 className="text-white font-orbitron uppercase tracking-[0.1em] text-sm"><span className="lang-es">¿Necesito experiencia en trading?</span><span className="lang-en">Do I need trading experience?</span></h3>
<p className="text-neutral-500 mt-2 text-sm leading-relaxed"><span className="lang-es">Aunque el conocimiento básico de MT5 ayuda, el EA opera de forma autónoma. Se proporcionan guías de configuración detalladas para usuarios de todos los niveles.</span><span className="lang-en">While basic MT5 knowledge helps with installation, the EA operates autonomously. Detailed setup guides are provided for users of all experience levels.</span></p>
</div>
<div className="border border-white/10 bg-[rgba(0,0,0,0.75)] p-6">
<h3 className="text-white font-orbitron uppercase tracking-[0.1em] text-sm"><span className="lang-es">¿El soporte está incluido?</span><span className="lang-en">Is support included?</span></h3>
<p className="text-neutral-500 mt-2 text-sm leading-relaxed"><span className="lang-es">Sí, todas las licencias incluyen acceso a canales de soporte estándar. Los niveles Profesional e Institucional otorgan acceso prioritario.</span><span className="lang-en">Yes, all licenses include access to our standard support channels. Professional and Institutional tiers grant access to priority direct communication lines.</span></p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-24 w-full bg-black/40 relative overflow-hidden border-b border-white/5 z-10" id="contact">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-30 pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto relative z-10 reveal-on-scroll">
<p className="font-orbitron text-xs uppercase tracking-[0.5em] text-indigo-500 mb-6 text-center md:text-left">07 // Uplink</p>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white font-orbitron uppercase mb-16 text-center md:text-left">
<span className="lang-es">Inicializar <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white/30">Contacto.</span></span>
<span className="lang-en">Initialize <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white/30">Contact.</span></span>
</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
<div className="space-y-12">
<div>
<h3 className="font-orbitron text-sm uppercase tracking-[0.2em] text-indigo-400 mb-6 border-b border-white/5 pb-2">
<span className="lang-es">Consultas Comerciales</span><span className="lang-en">Commercial Inquiries</span>
</h3>
<p className="text-sm text-neutral-400 font-light mb-6">
<span className="lang-es">Nuevos clientes, asociaciones y licencias.</span><span className="lang-en">New clients, partnerships, licensing.</span>
</p>
<div className="space-y-4">
<p className="flex items-center gap-4 text-sm text-white"><iconify-icon className="text-indigo-500" icon="solar:letter-linear" width="20"></iconify-icon> Thedeepforex@outlook.com</p>
<p className="flex items-center gap-4 text-sm text-white"><iconify-icon className="text-indigo-500" icon="solar:phone-linear" width="20"></iconify-icon> <span className="text-neutral-500 text-xs font-orbitron tracking-widest uppercase mr-2">[ES]</span> +34 650 874 516</p>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-4 p-4 border border-white/10 bg-white/5 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-colors group" href="https://wa.me/34650874516">
<iconify-icon className="text-indigo-500" icon="mdi:whatsapp" width="24"></iconify-icon>
<span className="font-orbitron text-xs uppercase tracking-widest text-white group-hover:text-indigo-400 transition-colors">WhatsApp Direct</span>
</a>
</div>
</div>
<div>
<h3 className="font-orbitron text-sm uppercase tracking-[0.2em] text-indigo-400 mb-6 border-b border-white/5 pb-2">
<span className="lang-es">Sede Central</span><span className="lang-en">Company Address</span>
</h3>
<address className="not-italic text-sm text-neutral-400 font-light leading-relaxed">
                  DeepForex<br/>
                  Calle Vista Linda, Urbanización Panorama 2, Casa 17<br/>
                  29790 Chilches<br/>
                  Málaga<br/>
                  Spain
                </address>
</div>
</div>
<div className="bg-neutral-950/50 border border-white/10 p-8">
<h3 className="font-orbitron text-sm uppercase tracking-[0.2em] text-indigo-400 mb-6 flex justify-between items-center border-b border-white/5 pb-2">
<span><span className="lang-es">Soporte Técnico</span><span className="lang-en">Technical Support</span></span>
<span className="text-[10px] tracking-widest text-white bg-indigo-500/20 px-2 py-1 border border-indigo-500/30">24/7</span>
</h3>
<p className="flex items-center gap-4 text-sm text-white mb-8"><iconify-icon className="text-indigo-500" icon="solar:phone-linear" width="20"></iconify-icon> <span className="text-neutral-500 text-xs font-orbitron tracking-widest uppercase mr-2">[LATAM]</span> +51 970492256</p>
<form className="space-y-4 mb-8">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<input placeholder="Name / Nombre" required="" type="text"/>
<input placeholder="Email Address / Correo" required="" type="email"/>
</div>
<div>
<input placeholder="License ID / ID de Licencia" required="" type="text"/>
</div>
<div>
<textarea placeholder="Message / Mensaje" required="" rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-orbitron font-normal text-sm uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 hover:bg-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] rounded-none" type="submit">
<span className="lang-es">Transmitir</span><span className="lang-en">Transmit</span> <iconify-icon className="inline-block ml-2" icon="solar:plain-linear" width="16"></iconify-icon>
</button>
</form>
<div className="border-t border-white/10 pt-6">
<p className="text-[10px] font-orbitron text-neutral-500 uppercase tracking-widest mb-4"><span className="lang-es">Acceso a Soporte Privado Incluido</span><span className="lang-en">Private Support Access Included</span></p>
<a className="flex items-center justify-center gap-4 p-4 border border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-500/10 transition-colors w-full group" href="https://t.me/thedeepforex" target="_blank">
<iconify-icon className="text-indigo-400" icon="mdi:telegram" width="24"></iconify-icon>
<span className="font-orbitron text-xs uppercase tracking-widest text-indigo-400 transition-colors">Telegram Support</span>
</a>
</div>
</div>
</div>
</div>
</section>
</div>
</main>

<section className="hidden relative z-10 w-full min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden" id="view-portal">

<div className="absolute inset-0 z-0 pointer-events-none" style={{clipPath: 'inset(0)'}}>
<div className="sticky top-0 w-full h-screen">
<div className="absolute w-full h-full left-0 top-0" data-us-project="8dH3WnYdxsenOolYGHB0"></div>
</div>
</div>
<div className="max-w-7xl mx-auto relative z-10">

<button className="mb-12 flex items-center gap-3 text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-500 hover:text-indigo-400 transition-colors group" onclick="toggleView('home')">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" width="18"></iconify-icon>
<span className="lang-es">Volver al Inicio</span><span className="lang-en">Back to Home</span>
</button>

<div className="border-b border-white/10 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<div className="font-orbitron text-xs uppercase tracking-[0.4em] text-indigo-500 mb-3 flex items-center gap-3">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            System Active
          </div>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white font-orbitron uppercase">
<span className="lang-es">Panel de Control</span><span className="lang-en">Control Panel</span>
</h2>
</div>
<div className="text-left md:text-right bg-black/40 border border-white/5 p-4">
<p className="text-[10px] font-orbitron uppercase tracking-[0.3em] text-neutral-500 mb-1">Client ID</p>
<p className="text-lg font-mono text-indigo-300">DFX-8992-K</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-neutral-950/80 border border-white/10 p-8 flex flex-col relative overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-indigo-500 to-transparent"></div>
<h3 className="text-xs font-orbitron tracking-[0.2em] uppercase text-neutral-400 mb-8 flex justify-between items-center">
<span className="lang-es">Licencia Actual</span><span className="lang-en">Current License</span>
<iconify-icon className="text-indigo-500" icon="solar:key-minimalistic-square-linear" width="24"></iconify-icon>
</h3>
<p className="text-3xl font-orbitron text-white mb-2 tracking-tight">Professional</p>
<p className="text-xs text-green-400 font-mono mb-10 flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Status: Valid (68 Days)
          </p>
<button className="mt-auto w-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 py-4 text-xs font-orbitron uppercase tracking-widest hover:bg-indigo-500 hover:text-black transition-all duration-300">
<span className="lang-es">Renovar / Actualizar</span><span className="lang-en">Renew / Upgrade</span>
</button>
</div>

<div className="bg-neutral-950/80 border border-white/10 p-8 flex flex-col relative overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500">
<h3 className="text-xs font-orbitron tracking-[0.2em] uppercase text-neutral-400 mb-8 flex justify-between items-center">
<span className="lang-es">Centro de Descargas</span><span className="lang-en">Download Center</span>
<iconify-icon className="text-indigo-500" icon="solar:download-square-linear" width="24"></iconify-icon>
</h3>
<div className="space-y-4 mb-8">
<a className="flex items-center justify-between border border-white/5 bg-black/40 p-4 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all group/link" href="#">
<span className="text-[11px] text-white font-mono group-hover/link:text-indigo-300 transition-colors">DeepForex_EA_v3.2.ex5</span>
<iconify-icon className="text-neutral-500 group-hover/link:text-indigo-400 transition-colors" icon="solar:download-minimalistic-linear" width="18"></iconify-icon>
</a>
<a className="flex items-center justify-between border border-white/5 bg-black/40 p-4 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all group/link" href="#">
<span className="text-[11px] text-white font-mono group-hover/link:text-indigo-300 transition-colors">Setup_Guide_MT5.pdf</span>
<iconify-icon className="text-neutral-500 group-hover/link:text-indigo-400 transition-colors" icon="solar:document-text-linear" width="18"></iconify-icon>
</a>
</div>
<p className="text-[10px] text-neutral-500 mt-auto leading-relaxed border-t border-white/5 pt-4">
<span className="lang-es">Última actualización: v3.2 (Optimización de latencia mejorada).</span><span className="lang-en">Latest update: v3.2 (Improved latency optimization).</span>
</p>
</div>

<div className="bg-neutral-950/80 border border-white/10 p-8 flex flex-col relative overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500 lg:col-span-1 md:col-span-2">
<h3 className="text-xs font-orbitron tracking-[0.2em] uppercase text-neutral-400 mb-8 flex justify-between items-center">
<span className="lang-es">Conexión API</span><span className="lang-en">API Connection</span>
<iconify-icon className="text-indigo-500" icon="solar:server-square-linear" width="24"></iconify-icon>
</h3>
<div className="mb-8">
<p className="text-[10px] uppercase font-orbitron text-neutral-500 tracking-widest mb-3">Auth Token</p>
<div className="flex items-stretch h-12">
<input className="bg-black/80 border border-white/10 border-r-0 text-xs font-mono px-4 w-full text-indigo-200 cursor-text focus:border-indigo-500/50 outline-none h-full rounded-none" readonly="" type="password" value="dfx_live_9f8a7b6c5d4e3f2g1h"/>
<button className="px-5 border border-white/10 bg-white/5 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-colors text-white flex items-center justify-center h-full">
<iconify-icon icon="solar:copy-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<p className="text-[10px] text-neutral-400 mt-auto leading-relaxed border-l-2 border-indigo-500 pl-3">
<span className="lang-es">Mantén tu token seguro. Se requiere ingresarlo en los parámetros de entrada de MT5 para activar el núcleo de IA.</span><span className="lang-en">Keep your token secure. Required in MT5 input parameters to activate the AI core.</span>
</p>
</div>
</div>
</div>
</section>

<footer className="w-full border-t border-white/5 bg-black z-20 relative overflow-hidden">
<div className="absolute inset-0 trading-line-bg opacity-10 pointer-events-none mix-blend-screen"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10">
<div className="flex flex-col items-center lg:items-start gap-4">
<div className="flex items-center gap-4">
<div className="w-2 h-2 bg-indigo-500 animate-pulse"></div>
<span className="font-orbitron text-sm uppercase tracking-[0.3em] text-white/80">DEEPFOREX</span>
</div>
<p className="text-[10px] text-neutral-600 font-mono">SYSTEM.CORE.ONLINE // V.3.2.0</p>
</div>
<div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] font-orbitron uppercase tracking-[0.2em] text-neutral-500">
<a className="hover:text-indigo-400 transition-colors" href="#"><span className="lang-es">Términos</span><span className="lang-en">Terms</span></a>
<a className="hover:text-indigo-400 transition-colors" href="#"><span className="lang-es">Privacidad</span><span className="lang-en">Privacy</span></a>
<a className="hover:text-indigo-400 transition-colors" href="#"><span className="lang-es">Riesgos</span><span className="lang-en">Risk Disclosure</span></a>
<a className="hover:text-indigo-400 transition-colors" href="#"><span className="lang-es">Reembolsos</span><span className="lang-en">Refunds</span></a>
</div>
<div className="text-[10px] text-neutral-600 tracking-widest font-orbitron text-center lg:text-right">
        © 2024 DEEPFOREX.<br/> ALL RIGHTS RESERVED.
      </div>
</div>
</footer>





    </>
  );
}
