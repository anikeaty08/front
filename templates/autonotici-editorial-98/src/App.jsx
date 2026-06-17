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



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2.5 group" href="#">

<div className="w-8 h-8 bg-blue-900/30 rounded-[6px] flex items-center justify-center shrink-0 border border-blue-500/20">
<i className="w-4 h-4 text-blue-400" data-lucide="newspaper"></i>
</div>
<div className="flex flex-col justify-center leading-none">
<span className="text-sm font-semibold tracking-tight text-white">Autonoticia</span>
<span className="text-[10px] font-medium tracking-[0.2em] text-[#A0A0A0] uppercase">Platform</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-normal text-gray-400 hover:text-white transition-colors" href="#features">Funcionalidades</a>
<a className="text-xs font-normal text-gray-400 hover:text-white transition-colors" href="#workflow">Cómo funciona</a>
<a className="text-xs font-normal text-gray-400 hover:text-white transition-colors" href="#pricing">Precios</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-normal text-gray-400 hover:text-white transition-colors" href="#">Entrar</a>
<a className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300" href="#pricing">
                    Empezar ahora
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-glow pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">

<div className="animate-fade-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
<i className="w-3.5 h-3.5 text-blue-400" data-lucide="sparkles"></i>
<span className="text-xs font-medium text-blue-300 tracking-wide uppercase">Inteligencia Artificial para Medios</span>
</div>
</div>

<h1 className="animate-fade-up text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]" style={{animationDelay: '0.2s'}}>
                    Orquesta la fuerza editorial <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">de tu medio digital.</span>
</h1>

<p className="animate-fade-up text-lg md:text-xl text-gray-400 font-light max-w-2xl mb-10 leading-relaxed" style={{animationDelay: '0.3s'}}>
                    Autonoticia usa IA para encontrar noticias relevantes, convertirlas en propuestas de posts y prepararlas para publicación multicuenta.
                </p>

<div className="animate-fade-up flex flex-col sm:flex-row items-center gap-4" style={{animationDelay: '0.4s'}}>
<button className="h-12 px-8 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 group">
                        Probar Autonoticia
                        <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/5 hover:border-white/20 transition-all">
                        Ver demo
                    </button>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 mt-20 animate-fade-up" style={{animationDelay: '0.6s'}}>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden aspect-[16/9] md:aspect-[21/9] shadow-2xl shadow-blue-900/10">

<div className="border-b border-white/5 bg-white/5 p-4 flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
<div className="h-2 w-32 bg-white/5 rounded-full"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="grid grid-cols-3 gap-12 md:gap-32 relative z-10">

<div className="w-20 h-20 rounded-2xl bg-[#111] border border-white/10 flex flex-col items-center justify-center shadow-lg shadow-blue-500/5 relative group">
<i className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors mb-1" data-lucide="rss"></i>
<div className="absolute -bottom-8 text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Fuentes</div>
</div>

<div className="w-24 h-24 rounded-2xl bg-[#111] border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/20 relative">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-xl"></div>
<div className="flex flex-col items-center">
<i className="w-8 h-8 text-blue-400" data-lucide="bot"></i>
</div>
<div className="absolute -bottom-8 text-[10px] text-blue-400 uppercase tracking-wider font-semibold">Agente IA</div>

<div className="absolute top-1/2 -left-32 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-blue-500/50"></div>
<div className="absolute top-1/2 -right-32 w-32 h-[1px] bg-gradient-to-l from-transparent via-white/20 to-blue-500/50"></div>

<div className="absolute -top-12 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300 whitespace-nowrap">
                                Analizando noticia...
                            </div>
</div>

<div className="w-20 h-20 rounded-2xl bg-[#111] border border-white/10 flex flex-col items-center justify-center shadow-lg shadow-blue-500/5 relative group">
<div className="flex gap-1 mb-1">
<i className="w-3 h-3 text-gray-400" data-lucide="instagram"></i>
<i className="w-3 h-3 text-gray-400" data-lucide="twitter"></i>
<i className="w-3 h-3 text-gray-400" data-lucide="facebook"></i>
</div>
<i className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" data-lucide="send"></i>
<div className="absolute -bottom-8 text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Publicación</div>
</div>
</div>

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-[10px] font-semibold text-gray-500 mb-8 uppercase tracking-widest">Potenciando redacciones modernas en</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-semibold tracking-tighter text-white">Diario<span className="font-light text-gray-400">Digital</span></span>
<span className="text-lg font-bold tracking-tighter text-white italic">LaVoz</span>
<span className="text-xl font-medium tracking-tight text-white">N<span className="text-blue-500">e</span>ws24</span>
<span className="text-lg font-semibold tracking-widest text-white">GLOBAL</span>
<span className="text-lg font-light tracking-tighter text-white">El Cronista</span>
</div>
</div>
</section>

<section className="py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Redacción aumentada.</h2>
<p className="text-lg text-gray-400 font-light max-w-2xl">Automatiza la búsqueda, curación y distribución de contenido sin perder el control editorial humano.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-white" data-lucide="scan-search"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Agente de IA para noticias</h3>
<p className="text-sm text-gray-400 font-light max-w-md">Detecta y propone las noticias más relevantes para tu audiencia basándose en tus criterios editoriales y tendencias en tiempo real.</p>
</div>
<div className="flex items-center gap-3 mt-8">
<div className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs text-gray-300 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                                Política
                            </div>
<div className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs text-gray-300 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                Economía
                            </div>
<div className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs text-gray-300 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                                Deportes
                            </div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors md:row-span-2">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-950/20 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-white" data-lucide="layout-dashboard"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Dashboard editorial unificado</h3>
<p className="text-sm text-gray-400 font-light mb-8">Recibe y revisa todas las propuestas en un solo lugar.</p>
<div className="mt-auto space-y-3">

<div className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-gray-500 uppercase">Hace 5 min</span>
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
</div>
<p className="font-medium line-clamp-1">Mercados cierran al alza tras anuncio...</p>
</div>

<div className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-gray-500 uppercase">Hace 12 min</span>
<span className="w-2 h-2 rounded-full bg-yellow-500"></span>
</div>
<p className="font-medium line-clamp-1">Resultados finales del campeonato local...</p>
</div>

<div className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300 opacity-60">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-gray-500 uppercase">Hace 20 min</span>
<span className="w-2 h-2 rounded-full bg-gray-500"></span>
</div>
<p className="font-medium line-clamp-1">Nueva ley de tecnología aprobada en...</p>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-white" data-lucide="share-2"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Publicación multicuenta</h3>
<p className="text-sm text-gray-400 font-light">Publica en Instagram, X y Facebook desde el mismo flujo de aprobación sin cambiar de pestañas.</p>
<div className="flex gap-4 mt-6 opacity-50">
<i className="w-5 h-5" data-lucide="instagram"></i>
<i className="w-5 h-5" data-lucide="twitter"></i>
<i className="w-5 h-5" data-lucide="facebook"></i>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-white" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Analítica para medios</h3>
<p className="text-sm text-gray-400 font-light">Ve qué noticias generan más impacto en redes con métricas unificadas de engagement.</p>
<div className="flex items-end gap-1 h-8 mt-6">
<div className="w-2 h-full bg-white/10 rounded-t-sm"></div>
<div className="w-2 h-2/3 bg-white/10 rounded-t-sm"></div>
<div className="w-2 h-3/4 bg-blue-500 rounded-t-sm"></div>
<div className="w-2 h-1/2 bg-white/10 rounded-t-sm"></div>
<div className="w-2 h-full bg-white/10 rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#080808]" id="workflow">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-lg">
                    Del caos informativo <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">al orden autónomo.</span>
</h2>
<p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Workflow</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-white/5 via-white/20 to-white/5 z-0"></div>

<div className="relative z-10">
<div className="w-24 h-24 bg-[#080808] border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-black group hover:border-blue-500/50 transition-colors">
<i className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" data-lucide="link"></i>
</div>
<h4 className="text-lg font-medium text-white mb-3">1. Conecta</h4>
<p className="text-sm text-gray-400 leading-relaxed">Conecta tus cuentas sociales de Instagram, X y Facebook al sistema seguro.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 bg-[#080808] border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-black group hover:border-blue-500/50 transition-colors">
<i className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" data-lucide="file-text"></i>
</div>
<h4 className="text-lg font-medium text-white mb-3">2. Describe</h4>
<p className="text-sm text-gray-400 leading-relaxed">Describe tu medio y los temas que cubres (por ejemplo: deportes, política, economía, espectáculos).</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 bg-[#080808] border border-blue-500/30 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-blue-900/10">
<i className="w-8 h-8 text-blue-400 animate-pulse" data-lucide="bot"></i>
</div>
<h4 className="text-lg font-medium text-white mb-3">3. Búsqueda IA</h4>
<p className="text-sm text-gray-400 leading-relaxed">El agente de IA busca periódicamente noticias relevantes, las resume y las envía al dashboard.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 bg-[#080808] border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-black group hover:border-blue-500/50 transition-colors">
<i className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" data-lucide="check-circle"></i>
</div>
<h4 className="text-lg font-medium text-white mb-3">4. Publica</h4>
<p className="text-sm text-gray-400 leading-relaxed">Revisa y aprueba las propuestas con un clic, publícalas en tus redes y analiza los resultados.</p>
</div>
</div>
</div>
</section>

<section className="py-32" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Planes flexibles</h2>
<p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">Elige la potencia editorial que tu medio necesita.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-3xl p-8 flex flex-col h-full hover:border-white/10 transition-all duration-300">
<div className="mb-8">
<h3 className="text-lg font-medium text-gray-300 mb-2">Plan Local</h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-white">$29</span>
<span className="text-sm text-gray-500">/ mes</span>
</div>
<p className="text-xs text-gray-500 mt-4 leading-relaxed">Para blogs y pequeños medios locales que inician.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-400">1 Cuenta de usuario</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-400">3 Perfiles sociales</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-400">10 Noticias diarias</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-400">Soporte básico</span>
</li>
</ul>
<div className="pt-6 border-t border-white/5 space-y-4">
<button className="w-full h-10 rounded-full border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition-colors">
                            Comenzar Local
                        </button>
</div>
</div>

<div className="glass-card-highlight rounded-3xl p-8 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
<div className="mb-8 relative z-10">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-blue-200">Plan Editorial</h3>
<span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-semibold text-blue-400 uppercase tracking-wide">Popular</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-white">$99</span>
<span className="text-sm text-gray-500">/ mes</span>
</div>
<p className="text-xs text-gray-400 mt-4 leading-relaxed">Para periódicos digitales y revistas en crecimiento.</p>
</div>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-300">5 Cuentas de usuario</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-300">Redes ilimitadas</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-300">IA de curación avanzada</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-300">Plantillas visuales custom</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-300">Dashboard de métricas</span>
</li>
</ul>
<div className="pt-6 border-t border-white/10 space-y-4 relative z-10">
<button className="w-full h-10 rounded-full bg-white text-black text-xs font-medium hover:bg-gray-200 transition-colors">
                            Elegir Editorial
                        </button>
</div>
</div>

<div className="glass-card rounded-3xl p-8 flex flex-col h-full hover:border-white/10 transition-all duration-300">
<div className="mb-8">
<h3 className="text-lg font-medium text-gray-300 mb-2">Plan Enterprise</h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-white">Custom</span>
</div>
<p className="text-xs text-gray-500 mt-4 leading-relaxed">Infraestructura completa para grandes grupos de medios.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-400">Usuarios ilimitados</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-400">Integración con CMS propio</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-400">Entrenamiento IA a medida</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-400">SLA Garantizado</span>
</li>
</ul>
<div className="pt-6 border-t border-white/5 space-y-4">
<button className="w-full h-10 rounded-full border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition-colors">
                            Contactar Ventas
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030303] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
<div className="col-span-2 md:col-span-2">
<a className="flex items-center gap-2.5 mb-6" href="#">
<div className="w-6 h-6 bg-blue-900/30 rounded-[4px] flex items-center justify-center shrink-0 border border-blue-500/20">
<i className="w-3.5 h-3.5 text-blue-400" data-lucide="newspaper"></i>
</div>
<div className="flex flex-col justify-center leading-none">
<span className="text-sm font-semibold tracking-tight text-white">Autonoticia</span>
<span className="text-[9px] font-medium tracking-[0.2em] text-[#A0A0A0] uppercase">Platform</span>
</div>
</a>
<p className="text-xs text-gray-500 max-w-xs leading-relaxed mb-4">
                        Plataforma de inteligencia artificial para la automatización editorial.<br/>
                        Maximizando el alcance de tu medio digital.
                    </p>
<a className="text-xs font-medium text-white hover:text-blue-400 transition-colors" href="mailto:hola@autonoticia.com">hola@autonoticia.com</a>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Producto</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Agente IA</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Integraciones</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Analítica</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Compañía</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Nosotros</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Empleo</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Privacidad</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Términos</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Síguenos</h4>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-white transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="text-gray-500 hover:text-white transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-gray-600">© 2024 Autonoticia. Todos los derechos reservados.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] text-gray-500">Sistemas operativos</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
