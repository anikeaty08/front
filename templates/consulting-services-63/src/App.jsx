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
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
brand: {
50: '#f0f4f8',
100: '#dce5f0',
200: '#bed0e3',
300: '#94b3d1',
400: '#6491bb',
500: '#4375a3',
600: '#325d86',
700: '#284b6d',
800: '#23405c',
900: '#041C3B', // Brand Navy
950: '#021024',
},
corp: {
orange: '#F56200',
gold: '#F5A623',
dark: '#111111'
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-white/5 glass-nav bg-white/80 dark:bg-brand-950/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-brand-900 dark:bg-brand-600 rounded flex items-center justify-center text-white border border-brand-700">
<iconify-icon className="text-corp-gold" icon="lucide:triangle" strokeWidth="2" width="18"></iconify-icon>
</div>
<div className="flex flex-col leading-none">
<span className="text-xs font-bold tracking-tight text-brand-900 dark:text-white uppercase">Estrategia Global</span>
<span className="text-[0.6rem] font-medium text-slate-500 dark:text-brand-300 uppercase tracking-widest">Expertos Consultores</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
<a className="hover:text-brand-900 dark:hover:text-brand-300 transition-colors" href="#about">Nosotros</a>
<a className="hover:text-brand-900 dark:hover:text-brand-300 transition-colors" href="#expertise">Servicios</a>
<a className="hover:text-brand-900 dark:hover:text-brand-300 transition-colors" href="#methodology">Metodología</a>
<a className="hover:text-brand-900 dark:hover:text-brand-300 transition-colors" href="#contact">Contacto</a>
</div>
<div className="flex items-center gap-4">
<button aria-label="Cambiar Tema" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 transition-colors" onclick="document.documentElement.classList.toggle('dark')">
<iconify-icon className="hidden dark:block" icon="lucide:sun" width="18"></iconify-icon>
<iconify-icon className="dark:hidden" icon="lucide:moon" width="18"></iconify-icon>
</button>
<a className="hidden md:flex items-center gap-2 bg-brand-900 hover:bg-brand-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-brand-950 px-4 py-2 rounded text-xs font-semibold transition-all border border-transparent dark:border-slate-200 shadow-sm" href="#contact">
                    Agendar Cita
                    <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-corp-gold"></span>
<span className="text-xs font-medium text-slate-600 dark:text-brand-200 tracking-wide uppercase">Portafolio Corporativo</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]">
                Precisión Estratégica.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-corp-gold">Estándares Globales.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed mb-10 font-light">
                Mitigamos riesgos y maximizamos valor a través de auditoría especializada, talento de élite y cumplimiento normativo. Elevamos el rendimiento corporativo con visión integral.
            </p>
<div className="flex flex-col md:flex-row gap-4">
<a className="inline-flex h-12 items-center justify-center rounded bg-brand-900 px-8 text-sm font-medium text-white transition-colors hover:bg-brand-800 dark:bg-brand-600 dark:hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-brand-950 shadow-lg shadow-brand-900/10" href="#expertise">
                    Ver Soluciones
                </a>
<a className="inline-flex h-12 items-center justify-center rounded border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-8 text-sm font-medium text-slate-900 dark:text-white transition-colors hover:bg-slate-50 dark:hover:bg-white/10 focus:outline-none" href="#methodology">
                    Nuestra Metodología
                </a>
</div>
</div>

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-corp-gold/10 rounded-full blur-3xl pointer-events-none"></div>
</section>

<section className="py-20 border-y border-slate-200 dark:border-white/5 bg-white/50 dark:bg-brand-950/30 backdrop-blur-sm" id="trajectory">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="flex flex-col gap-2">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 dark:text-white">20+</span>
<span className="text-sm text-slate-500 dark:text-slate-400">Años de Experiencia</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 dark:text-white">NIIF</span>
<span className="text-sm text-slate-500 dark:text-slate-400">Cumplimiento Normativo</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 dark:text-white">98%</span>
<span className="text-sm text-slate-500 dark:text-slate-400">Tasa de Éxito</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 dark:text-white">ISO</span>
<span className="text-sm text-slate-500 dark:text-slate-400">Alineación Estándar</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="about">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative order-2 md:order-1">
<div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-800 to-brand-950 border border-brand-700/50 relative overflow-hidden flex items-center justify-center shadow-2xl">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
<div className="relative z-10 text-center p-8">
<iconify-icon className="text-corp-gold mb-4" icon="lucide:shield-check" width="64"></iconify-icon>
<h3 className="text-2xl font-semibold text-white tracking-tight">Expertos Consultores</h3>
<p className="text-brand-200 mt-2 text-sm">Protegiendo el futuro de su empresa</p>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6">Identidad Corporativa</h2>
<p className="text-slate-500 dark:text-slate-400 text-lg font-light mb-6 leading-relaxed">
                        En Estrategia Global, no solo consultamos; construimos los cimientos del éxito empresarial sostenible. Somos un equipo multidisciplinario dedicado a la excelencia operativa.
                    </p>
<p className="text-slate-500 dark:text-slate-400 mb-8">
                        Nuestra firma integra conocimientos profundos en normativa fiscal, psicología organizacional e ingeniería de seguridad para ofrecer soluciones 360° que blindan a su organización ante la incertidumbre del mercado.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-corp-gold mt-1" icon="lucide:check-circle-2"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-slate-900 dark:text-white">Visión Integral</h4>
<p className="text-xs text-slate-500 dark:text-slate-400">Analizamos el impacto financiero y humano de cada decisión.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-corp-gold mt-1" icon="lucide:check-circle-2"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-slate-900 dark:text-white">Adaptabilidad</h4>
<p className="text-xs text-slate-500 dark:text-slate-400">Soluciones a medida para PYMEs y grandes corporativos.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/80 dark:bg-brand-900/10 border-y border-slate-200 dark:border-white/5 backdrop-blur-sm" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">Nuestros Pilares</h2>
<p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    Soluciones especializadas diseñadas para la optimización integral de su negocio.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl border-t-4 border-corp-orange bg-white dark:bg-brand-950/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 dark:border-x dark:border-b dark:border-white/5">
<div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-corp-orange/10 rounded-full blur-xl group-hover:bg-corp-orange/20 transition-colors"></div>
<div className="w-12 h-12 bg-corp-orange/10 rounded-lg flex items-center justify-center text-corp-orange mb-6">
<iconify-icon icon="lucide:file-bar-chart-2" strokeWidth="2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Contabilidad y Auditoría</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                        Gestión financiera rigurosa bajo normas internacionales. Auditoría forense y control fiscal para garantizar transparencia.
                    </p>
<a className="text-xs font-semibold text-corp-orange hover:text-orange-700 flex items-center gap-1 transition-colors" href="#contact">
                        Saber más <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>

<div className="group relative overflow-hidden rounded-2xl border-t-4 border-corp-gold bg-white dark:bg-brand-950/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 dark:border-x dark:border-b dark:border-white/5">
<div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-corp-gold/10 rounded-full blur-xl group-hover:bg-corp-gold/20 transition-colors"></div>
<div className="w-12 h-12 bg-corp-gold/10 rounded-lg flex items-center justify-center text-yellow-600 dark:text-yellow-500 mb-6">
<iconify-icon icon="lucide:users" strokeWidth="2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Reclutamiento y Selección</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                        Headhunting estratégico y evaluación de competencias. Encontramos el capital humano que impulsa su crecimiento.
                    </p>
<a className="text-xs font-semibold text-yellow-600 dark:text-yellow-500 hover:text-yellow-700 flex items-center gap-1 transition-colors" href="#contact">
                        Saber más <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>

<div className="group relative overflow-hidden rounded-2xl border-t-4 border-slate-900 dark:border-slate-100 bg-white dark:bg-brand-950/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 dark:border-x dark:border-b dark:border-white/5">
<div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-slate-900/5 dark:bg-white/5 rounded-full blur-xl group-hover:bg-slate-900/10 dark:group-hover:bg-white/10 transition-colors"></div>
<div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-900 dark:text-white mb-6">
<iconify-icon icon="lucide:hard-hat" strokeWidth="2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Salud y Seguridad (SSO)</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                        Prevención de riesgos laborales y cumplimiento legal. Protegemos la integridad de sus equipos y operaciones.
                    </p>
<a className="text-xs font-semibold text-slate-900 dark:text-white hover:opacity-70 flex items-center gap-1 transition-colors" href="#contact">
                        Saber más <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="methodology">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">Metodología de Trabajo</h2>
<p className="text-slate-500 dark:text-slate-400 font-light">Nuestro enfoque estructurado para una transformación sostenible.</p>
</div>
</div>
<div className="relative">
<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-slate-200 dark:bg-white/10 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative z-10 group">
<div className="w-24 h-24 rounded-full border bg-white dark:bg-brand-950 border-slate-200 dark:border-brand-700 flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0 group-hover:border-brand-500 transition-colors">
<span className="text-2xl font-semibold text-slate-300 dark:text-brand-600 group-hover:text-brand-500">01</span>
</div>
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2 text-center md:text-left">Diagnóstico</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-center md:text-left">
                            Análisis profundo de operaciones financieras y marcos de seguridad para identificar vulnerabilidades.
                        </p>
</div>

<div className="relative z-10 group">
<div className="w-24 h-24 rounded-full border bg-white dark:bg-brand-950 border-slate-200 dark:border-brand-700 flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0 group-hover:border-corp-orange transition-colors">
<span className="text-2xl font-semibold text-slate-300 dark:text-brand-600 group-hover:text-corp-orange">02</span>
</div>
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2 text-center md:text-left">Estrategia</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-center md:text-left">
                            Diseño de protocolos personalizados alineados con normas NIIF e ISO específicos al riesgo.
                        </p>
</div>

<div className="relative z-10 group">
<div className="w-24 h-24 rounded-full border bg-white dark:bg-brand-950 border-slate-200 dark:border-brand-700 flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0 group-hover:border-corp-gold transition-colors">
<span className="text-2xl font-semibold text-slate-300 dark:text-brand-600 group-hover:text-corp-gold">03</span>
</div>
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2 text-center md:text-left">Ejecución</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-center md:text-left">
                            Implementación de estructuras de talento y sistemas contables con mínima interrupción.
                        </p>
</div>

<div className="relative z-10 group">
<div className="w-24 h-24 rounded-full border bg-slate-50 dark:bg-brand-800/50 border-slate-200 dark:border-brand-700 flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0 group-hover:bg-brand-50 dark:group-hover:bg-brand-800 transition-colors">
<iconify-icon className="text-brand-600 dark:text-brand-400" icon="lucide:flag" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2 text-center md:text-left">Validación</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-center md:text-left">
                            Monitoreo continuo para asegurar eficiencia a largo plazo, confidencialidad y retorno de inversión.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 dark:bg-black/80 backdrop-blur-sm text-white border-y border-transparent dark:border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 border-b border-slate-800 pb-8 flex flex-col md:flex-row justify-between items-end gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Industrias que Atendemos</h2>
<p className="text-slate-400 font-light">Experiencia probada en diversos sectores económicos.</p>
</div>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-corp-orange"></span>
<span className="w-2 h-2 rounded-full bg-corp-gold"></span>
<span className="w-2 h-2 rounded-full bg-brand-500"></span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-brand-500 transition-all group">
<iconify-icon className="text-slate-400 group-hover:text-brand-400 mb-4 transition-colors" icon="lucide:factory" width="32"></iconify-icon>
<h4 className="font-medium text-lg mb-1">Manufactura</h4>
<p className="text-xs text-slate-500">Optimización de procesos y seguridad industrial.</p>
</div>
<div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-corp-gold transition-all group">
<iconify-icon className="text-slate-400 group-hover:text-corp-gold mb-4 transition-colors" icon="lucide:building-2" width="32"></iconify-icon>
<h4 className="font-medium text-lg mb-1">Construcción</h4>
<p className="text-xs text-slate-500">Gestión de nómina y cumplimiento normativo.</p>
</div>
<div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-corp-orange transition-all group">
<iconify-icon className="text-slate-400 group-hover:text-corp-orange mb-4 transition-colors" icon="lucide:shopping-bag" width="32"></iconify-icon>
<h4 className="font-medium text-lg mb-1">Retail</h4>
<p className="text-xs text-slate-500">Reclutamiento masivo y auditoría de inventarios.</p>
</div>
<div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-white transition-all group">
<iconify-icon className="text-slate-400 group-hover:text-white mb-4 transition-colors" icon="lucide:laptop" width="32"></iconify-icon>
<h4 className="font-medium text-lg mb-1">Tecnología</h4>
<p className="text-xs text-slate-500">Estrategia fiscal para startups y expansión.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="rounded-3xl bg-brand-900 dark:bg-brand-950/90 overflow-hidden relative border border-brand-800 dark:border-brand-700/50 shadow-2xl">

<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 32 32\\' width=\\'32\\' height=\\'32\\' fill=\\'none\\' stroke=\\'%23ffffff\\'%3e%3cpath d=\\'M0 .5H31.5V32\\'/%3e%3c/svg%3e\')'}}></div>
<div className="relative p-10 md:p-20 grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Impacto Tangible</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded bg-brand-700 flex items-center justify-center text-brand-300 shrink-0">
<iconify-icon icon="lucide:lock"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Confidencialidad Absoluta</h4>
<p className="text-brand-200 text-sm">Protocolos de protección de datos para información sensible.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded bg-brand-700 flex items-center justify-center text-brand-300 shrink-0">
<iconify-icon icon="lucide:trending-up"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Eficiencia Operativa</h4>
<p className="text-brand-200 text-sm">Procesos optimizados reduciendo costos operativos hasta un 30%.</p>
</div>
</div>
</div>
</div>
<div className="h-full w-full bg-gradient-to-br from-brand-700 to-brand-800 rounded-2xl p-8 flex flex-col justify-between shadow-xl border border-brand-600/50 backdrop-blur-md">
<div className="text-brand-300 text-xs uppercase tracking-wider mb-8 flex justify-between">
<span>Caso de Éxito</span>
<iconify-icon className="text-brand-500" icon="lucide:quote"></iconify-icon>
</div>
<div>
<p className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
                                "Estrategia Global no solo auditó nuestros libros; reestructuraron todo nuestro marco de cumplimiento, permitiendo nuestra expansión a tres nuevos mercados."
                            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/20">
<span className="font-semibold text-xs">CEO</span>
</div>
<div>
<div className="text-white font-medium text-sm">Logística Multinacional S.A.</div>
<div className="text-brand-300 text-xs">Cliente desde 2019</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-brand-950/80 backdrop-blur-sm" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">Comience su Transformación</h2>
<p className="text-slate-500 dark:text-slate-400 mb-12">Conecte con nuestros consultores senior para una evaluación confidencial.</p>
<form className="space-y-4 text-left">
<div className="grid md:grid-cols-2 gap-4">
<div className="relative">
<label className="sr-only" htmlFor="name">Nombre</label>
<input className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-brand-700 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all placeholder:text-slate-400 text-sm text-slate-900 dark:text-white" id="name" placeholder="Nombre Completo" type="text"/>
</div>
<div className="relative">
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-brand-700 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all placeholder:text-slate-400 text-sm text-slate-900 dark:text-white" id="email" placeholder="Correo Corporativo" type="email"/>
</div>
</div>
<div className="relative">
<label className="sr-only" htmlFor="service">Servicio de Interés</label>
<div className="relative group">
<select className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-brand-700 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-slate-500 dark:text-slate-400 text-sm cursor-pointer" id="service">
<option>Interés Estratégico...</option>
<option>Contabilidad y Auditoría</option>
<option>Reclutamiento y Selección</option>
<option>Salud y Seguridad (SSO)</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-brand-500 transition-colors" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<button className="w-full h-12 rounded-lg bg-brand-900 dark:bg-white text-white dark:text-brand-950 font-semibold text-sm hover:bg-brand-800 dark:hover:bg-slate-200 transition-all shadow-lg shadow-brand-900/10 hover:shadow-xl" type="button">
                    Solicitar Consultoría
                </button>
</form>
</div>
</section>

<footer className="py-12 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-brand-950/80 backdrop-blur-sm relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-slate-100 dark:bg-brand-800 rounded flex items-center justify-center text-slate-900 dark:text-white border border-slate-200 dark:border-brand-700">
<iconify-icon className="text-corp-gold" icon="lucide:triangle" width="12"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-tight text-slate-900 dark:text-white uppercase">Estrategia Global</span>
</div>
<div className="text-xs text-slate-500 dark:text-slate-400">
                © 2024 Estrategia Global Consultores. Todos los derechos reservados.
            </div>
</div>
</footer>

    </>
  );
}
