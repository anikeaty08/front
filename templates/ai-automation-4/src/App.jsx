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



        // Inicializar iconos Lucide
        lucide.createIcons();

        function calculateImpact() {
            const hours = parseInt(document.getElementById('hoursSlider').value);
            const useAgents = document.getElementById('aiToggle').checked;
            
            // Mostrar valor del slider
            document.getElementById('hoursDisplay').innerText = hours + 'h';
            
            // Cálculos base: Si usan IA básica ahorran 55% del tiempo. Si usan agentes, ahorran 85%.
            const efficiencyMultiplier = useAgents ? 0.85 : 0.55;
            const savedHours = Math.round(hours * efficiencyMultiplier);
            
            // Asumiendo un costo operativo promedio de $25 USD por hora manual
            const costSavings = savedHours * 25;
            
            // Actualizar el DOM
            document.getElementById('savedHours').innerText = savedHours;
            document.getElementById('savedCost').innerText = '$' + costSavings.toLocaleString();
        }

        // Inicializar cálculos al cargar la página
        document.addEventListener('DOMContentLoaded', calculateImpact);
    
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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-white font-medium text-xl tracking-tight">N X U S</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base font-normal text-zinc-400 hover:text-white transition-colors" href="#soluciones">Soluciones</a>
<a className="text-base font-normal text-zinc-400 hover:text-white transition-colors" href="#portafolio">Portafolio</a>
<a className="text-base font-normal text-zinc-400 hover:text-white transition-colors" href="#metodo">Método</a>
<a className="text-base font-normal text-zinc-400 hover:text-white transition-colors" href="#calculadora">Impacto</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-base font-medium text-white hover:text-zinc-300 transition-colors" href="#login">Ingresar</a>
<a className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-zinc-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)]" href="#contacto">
                    Auditoría
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-32 md:pt-48 md:pb-48 px-6 overflow-hidden min-h-[85vh] flex flex-col items-center justify-center border-b border-white/5">

<div className="absolute inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-[#050505]/75 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-transparent to-[var(--bg-color)] z-10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-color)] via-transparent to-transparent z-10 h-40"></div>

<img alt="AI Interface Abstract Background" className="w-full h-full object-cover opacity-60 mix-blend-lighten grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg"/>
</div>

<div className="glow-bg z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-white/5 rounded-full blur-[100px] z-0 mix-blend-screen" style={{animation: 'pulse-glow 8s ease-in-out infinite'}}></div>

<div className="max-w-4xl mx-auto text-center relative z-20 w-full mt-10 md:mt-0">
<div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm font-medium text-zinc-300 backdrop-blur-md mb-8">
<i className="w-4 h-4 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
<span>El futuro de la automatización operativa</span>
</div>
<h1 className="animate-fade-in delay-100 text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-tight text-balance">
                Multiplica el rendimiento con IA a medida.
            </h1>
<p className="animate-fade-in delay-200 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto text-balance mb-10 font-normal">
                Sistemas inteligentes diseñados exclusivamente para resolver tus desafíos de negocio, automatizar procesos manuales y escalar sin límites técnicos.
            </p>
<div className="animate-fade-in delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-7 py-3.5 bg-white text-black rounded-full text-base font-medium hover:bg-zinc-200 transition-all flex items-center justify-center gap-2" href="#contacto">
                    Cuéntanos tu desafío
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto px-7 py-3.5 rounded-full text-base font-medium text-white border border-white/10 hover:bg-white/10 backdrop-blur-sm bg-white/[0.02] transition-all flex items-center justify-center" href="#portafolio">
                    Ver Portafolio
                </a>
</div>
</div>
</header>

<section className="py-12 border-b border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium tracking-widest text-zinc-500 uppercase mb-8">Empresas que escalan con nuestra tecnología</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
<span className="text-2xl font-medium tracking-tight text-white">L M N A</span>
<span className="text-2xl font-medium tracking-tight text-white">V R T X</span>
<span className="text-2xl font-normal tracking-widest text-white">O R B I T</span>
<span className="text-2xl font-medium tracking-tight text-white">N O V A</span>
<span className="text-2xl font-normal tracking-tight text-white">S Y N T H X</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative" id="soluciones">
<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
                El problema no es la tecnología.<br/>Es la ejecución.
            </h2>
<p className="text-lg text-zinc-400 font-normal text-balance">
                Construimos sistemas que entienden el contexto de tu empresa y se conectan directamente a tu flujo de trabajo. Resultados tangibles desde el primer día.
            </p>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-white" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Eficiencia Extrema</h3>
<p className="text-base text-zinc-400 font-normal leading-relaxed">
                    Automatiza procesos manuales que drenan tiempo y recursos. Nuestra IA ejecuta tareas complejas con precisión, liberando a tu equipo para lo estratégico.
                </p>
</div>
<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-white" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Decisiones Precisas</h3>
<p className="text-base text-zinc-400 font-normal leading-relaxed">
                    Convierte datos dispersos en directrices claras. Obtén análisis predictivos y proyecciones en tiempo real para tomar el control financiero y operativo.
                </p>
</div>
<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-white" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Ventaja Exclusiva</h3>
<p className="text-base text-zinc-400 font-normal leading-relaxed">
                    Mantente por delante de la competencia. Implementamos capacidades exclusivas que transforman la forma en que entregas valor a tus propios clientes.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#030303]" id="portafolio">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">Portafolio de Soluciones</h2>
<p className="text-lg text-zinc-400 font-normal max-w-2xl mx-auto text-balance">
                    Sistemas de inteligencia artificial desarrollados a la medida que han transformado cuellos de botella operativos en ventajas competitivas reales.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel rounded-2xl p-2 border border-white/5 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="overflow-hidden rounded-xl bg-black mb-4 aspect-[4/3] relative border border-white/5">
<img alt="Proyecto Logística" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4 pt-2">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Automatización de Logística</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">Agente predictivo integrado para optimización de rutas y gestión de inventario en tiempo real.</p>
</div>
</div>

<div className="glass-panel rounded-2xl p-2 border border-white/5 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="overflow-hidden rounded-xl bg-black mb-4 aspect-[4/3] relative border border-white/5">
<img alt="Proyecto Análisis" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4 pt-2">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Motor de Análisis Financiero</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">Procesamiento de datos no estructurados para proyecciones precisas y auditorías automatizadas.</p>
</div>
</div>

<div className="glass-panel rounded-2xl p-2 border border-white/5 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="overflow-hidden rounded-xl bg-black mb-4 aspect-[4/3] relative border border-white/5">
<img alt="Proyecto Legal" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4 pt-2">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Asistente Legal Autónomo</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">Análisis de contratos extensos y extracción de cláusulas críticas con un 99.9% de precisión.</p>
</div>
</div>

<div className="glass-panel rounded-2xl p-2 border border-white/5 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="overflow-hidden rounded-xl bg-black mb-4 aspect-[4/3] relative border border-white/5">
<img alt="Proyecto Soporte" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4 pt-2">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Clasificador de Soporte B2B</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">Sistema de triaje inteligente que resuelve tickets técnicos repetitivos de forma completamente autónoma.</p>
</div>
</div>

<div className="glass-panel rounded-2xl p-2 border border-white/5 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="overflow-hidden rounded-xl bg-black mb-4 aspect-[4/3] relative border border-white/5">
<img alt="Proyecto Fintech" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4 pt-2">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Onboarding Inteligente</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">Validación de identidad y documentación mediante visión computacional para instituciones financieras.</p>
</div>
</div>

<div className="glass-panel rounded-2xl p-2 border border-white/5 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="overflow-hidden rounded-xl bg-black mb-4 aspect-[4/3] relative border border-white/5">
<img alt="Proyecto Demanda" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4 pt-2">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Proyección de Demanda</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">Modelos dinámicos que ajustan los niveles de producción basados en cientos de variables macroeconómicas.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-black" id="metodo">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    Integración fluida. <br/>Sin fricción operativa.
                </h2>
<p className="text-lg text-zinc-400 font-normal mb-10">
                    Implementar IA no debería detener tu negocio. Simplificamos el proceso para que pases del concepto al impacto real en semanas, no en meses.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-sm font-medium text-white bg-white/5">1</div>
<div className="w-px h-full bg-gradient-to-b from-white/10 to-transparent mt-2"></div>
</div>
<div className="pb-6">
<h4 className="text-lg font-medium text-white mb-1 tracking-tight">Auditoría Estratégica</h4>
<p className="text-base text-zinc-400 font-normal">Identificamos cuellos de botella exactos donde la IA generará el mayor retorno de inversión.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-sm font-medium text-white bg-white/5">2</div>
<div className="w-px h-full bg-gradient-to-b from-white/10 to-transparent mt-2"></div>
</div>
<div className="pb-6">
<h4 className="text-lg font-medium text-white mb-1 tracking-tight">Desarrollo Clandestino</h4>
<p className="text-base text-zinc-400 font-normal">Construimos la solución en la sombra, adaptándola a tus sistemas sin interrumpir a tu equipo.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center text-sm font-medium text-black bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]">3</div>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1 tracking-tight">Despliegue y Escala</h4>
<p className="text-base text-zinc-400 font-normal">Lanzamos la solución, iteramos sobre el rendimiento y maximizamos la adopción interna para resultados a largo plazo.</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full glass-panel p-6 md:p-10 rounded-3xl relative overflow-hidden group">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>
<h3 className="text-2xl font-medium text-white mb-6 tracking-tight">Impacto Operativo</h3>
<div className="space-y-4 relative z-10">
<div className="bg-black/40 border border-white/5 p-4 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-zinc-400" data-lucide="clock" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300">Tiempo Recuperado</span>
</div>
<span className="text-sm font-medium text-emerald-400">+120h / mes</span>
</div>
<div className="bg-black/40 border border-white/5 p-4 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-zinc-400" data-lucide="wallet" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300">Eficiencia de Costos</span>
</div>
<span className="text-sm font-medium text-emerald-400">+45%</span>
</div>
<div className="bg-black/40 border border-white/5 p-4 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-zinc-400" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300">Precisión de Ejecución</span>
</div>
<span className="text-sm font-medium text-white">99.9%</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6" id="calculadora">
<div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Calcula el impacto en tu empresa</h2>
<p className="text-base text-zinc-400 max-w-2xl mx-auto font-normal">
                    Ajusta los parámetros para estimar cuánto tiempo y dinero puedes ahorrar al automatizar procesos repetitivos con nuestros agentes inteligentes.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

<div className="space-y-10">
<div>
<div className="flex justify-between items-end mb-4">
<div>
<span className="block text-base font-medium text-white mb-1">Volumen de horas manuales</span>
<span className="block text-sm text-zinc-500 font-normal">Tiempo mensual dedicado a tareas repetitivas</span>
</div>
<span className="text-base font-medium text-white bg-white/5 border border-white/10 px-3 py-1 rounded-lg" id="hoursDisplay">400h</span>
</div>
<input className="custom-slider" id="hoursSlider" max="2000" min="50" oninput="calculateImpact()" step="50" type="range" value="400"/>
</div>
<div className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
<div>
<span className="block text-base font-medium text-white mb-1">Agentes Autónomos</span>
<span className="block text-sm text-zinc-500 font-normal">Implementación de IA con capacidad de decisión</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only custom-toggle" id="aiToggle" onchange="calculateImpact()" type="checkbox"/>
<div className="w-11 h-6 bg-white/5 rounded-full transition-colors border border-white/10">
<div className="w-4 h-4 bg-zinc-400 rounded-full mt-0.5 ml-1 transition-transform shadow-sm"></div>
</div>
</label>
</div>
</div>

<div className="bg-black/40 border border-white/5 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between h-full">
<div className="absolute -right-20 -bottom-20 w-48 h-48 bg-white/10 rounded-full blur-[80px]"></div>
<div className="space-y-8 relative z-10 mb-8">
<div>
<p className="text-base text-zinc-400 font-normal mb-2">Horas liberadas estimadas</p>
<div className="flex items-baseline gap-2">
<span className="text-5xl md:text-6xl font-medium tracking-tight text-white" id="savedHours">340</span>
<span className="text-base text-zinc-500 font-normal">h / mes</span>
</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent"></div>
<div>
<p className="text-base text-zinc-400 font-normal mb-2">Ahorro operativo proyectado</p>
<div className="flex items-baseline gap-2">
<span className="text-5xl md:text-6xl font-medium tracking-tight text-emerald-400" id="savedCost">$8,500</span>
<span className="text-base text-zinc-500 font-normal">USD / mes</span>
</div>
</div>
</div>
<div className="relative z-10 bg-white/[0.02] border border-white/5 p-4 rounded-xl mt-auto">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" data-lucide="info" strokeWidth="1.5"></i>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
                                Cálculo estimado basado en una mejora de eficiencia del <strong>55%</strong> con IA estándar y hasta un <strong>85%</strong> al habilitar agentes autónomos. El ahorro proyectado asume un costo operativo promedio de $25 USD por hora de trabajo manual.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden border-t border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02]"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">Inicia tu evolución.</h2>
<p className="text-lg text-zinc-400 font-normal mb-10 max-w-xl mx-auto">Agenda una sesión estratégica gratuita de 30 minutos y descubre el verdadero potencial de tu operación escalada con IA.</p>
<a className="inline-flex px-8 py-4 bg-white text-black rounded-full text-base font-medium hover:bg-zinc-200 transition-all items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#contacto">
                Agendar Sesión Estratégica
                <i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
</a>
</div>
</section>

<footer className="py-10 px-6 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-white font-medium text-xl tracking-tight">N X U S</div>
<div className="flex flex-wrap items-center justify-center gap-8 text-sm font-normal text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Soluciones</a>
<a className="hover:text-zinc-300 transition-colors" href="#portafolio">Portafolio</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Metodología</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacidad</a>
</div>
<p className="text-sm font-normal text-zinc-600">© 2024. Todos los derechos reservados.</p>
</div>
</footer>



    </>
  );
}
