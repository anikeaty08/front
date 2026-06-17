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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Inicializar iconos Lucide
        lucide.createIcons();

        // Navbar Sticky
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('bg-[#141241]/95', 'backdrop-blur-sm', 'border-[#2F3F73]', 'shadow-lg');
                nav.classList.remove('bg-[#141241]', 'border-transparent');
            } else {
                nav.classList.remove('bg-[#141241]/95', 'backdrop-blur-sm', 'border-[#2F3F73]', 'shadow-lg');
                nav.classList.add('bg-[#141241]', 'border-transparent');
            }
        });

        // Animaciones Fade Up al hacer scroll
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach((el) => {
            observer.observe(el);
        });

        // Accordion JS (Actualizado para Iconify)
        function toggleAccordion(id, btn) {
            const content = document.getElementById(id);
            const icon = btn.querySelector('iconify-icon');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.setAttribute('icon', 'solar:minus-circle-linear');
                btn.classList.add('bg-[#2F3F73]/30');
            } else {
                content.classList.add('hidden');
                icon.setAttribute('icon', 'solar:add-circle-linear');
                btn.classList.remove('bg-[#2F3F73]/30');
            }
        }

        // Contador animado
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const duration = 2000;
                        const increment = target / (duration / 16);
                        let current = 0;

                        const updateCounter = () => {
                            current += increment;
                            if (current < target) {
                                counter.innerText = Math.ceil(current);
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.innerText = target;
                            }
                        };
                        updateCounter();
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const metricsContainer = document.getElementById('metrics-container');
        if(metricsContainer) counterObserver.observe(metricsContainer);

    
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#141241] py-4 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
<div className="flex flex-col cursor-pointer">
<span className="text-2xl font-medium tracking-tight text-white font-heading">DIGI EDUCA <span className="font-normal">Systems</span></span>
<span className="text-xs text-[#68DEF1] tracking-wide mt-[-2px]">Sistemas de aprendizaje dirigido</span>
</div>
<div className="hidden lg:flex items-center space-x-8 text-sm lg:text-base">
<a className="text-[#C8C8D8] hover:text-white transition-colors" href="#sistema">El sistema</a>
<a className="text-[#C8C8D8] hover:text-white transition-colors" href="#agentes">Agentes DIGI IA</a>
<a className="text-[#C8C8D8] hover:text-white transition-colors" href="#soluciones">Soluciones</a>
<a className="text-[#C8C8D8] hover:text-white transition-colors" href="#resultados">Resultados</a>
<a className="text-[#C8C8D8] hover:text-white transition-colors" href="#quienes-somos">Quiénes somos</a>
</div>
<div className="hidden md:block">
<a className="bg-[#7CDE65] text-[#141241] px-5 py-2.5 rounded-md text-sm lg:text-base font-medium hover:bg-[#65cc50] transition-colors" href="#diagnostico">
                    Solicita diagnóstico
                </a>
</div>
<button className="lg:hidden text-[#C8C8D8]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="pt-40 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
<div className="max-w-4xl fade-up">
<span className="text-xs text-[#68DEF1] uppercase tracking-widest font-medium mb-6 block">Sistemas de aprendizaje dirigido con IA</span>
<h1 className="text-5xl lg:text-7xl font-heading tracking-tight mb-8 leading-[1.1]">Convertimos formación en aprendizaje que se ejecuta.</h1>
<p className="text-xl lg:text-2xl text-[#C8C8D8] mb-12 max-w-3xl leading-relaxed">
                La formación por sí sola no siempre garantiza resultados. El impacto ocurre cuando el aprendizaje se aplica en el trabajo. DIGI EDUCA cierra esa brecha mediante un sistema de aprendizaje con IA que acompaña al empleado en el momento de acción.
            </p>
</div>
<div className="bg-[#1A1650] border-l-[8px] border-[#68DEF1] p-6 lg:p-8 rounded-r-lg max-w-3xl mb-12 fade-up delay-100">
<p className="text-2xl lg:text-3xl tracking-tight text-white font-heading">El empleado no necesita más contenido. <span className="text-[#C8C8D8]">Necesita saber qué hacer, cómo hacerlo y cuándo aplicarlo.</span></p>
</div>
<div className="flex flex-col sm:flex-row gap-4 mb-20 fade-up delay-200">
<a className="px-6 py-3 border border-[#68DEF1] text-white rounded-md text-base lg:text-lg text-center hover:bg-[#68DEF1]/10 transition-colors" href="#sistema">Conoce el sistema</a>
<a className="px-6 py-3 bg-[#7CDE65] text-[#141241] font-medium rounded-md text-base lg:text-lg text-center hover:bg-[#65cc50] transition-colors" href="#diagnostico">Solicita diagnóstico estratégico</a>
</div>

<div className="flex flex-col lg:flex-row items-center gap-4 w-full fade-up delay-300">
<div className="bg-[#2F3F73] px-6 py-4 rounded-lg w-full lg:w-auto text-center flex-1"><span className="text-sm lg:text-base tracking-widest uppercase text-[#C8C8D8]">Formación</span></div>
<iconify-icon className="text-[#68DEF1] hidden lg:block" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<iconify-icon className="text-[#68DEF1] lg:hidden" icon="solar:arrow-down-linear" width="24"></iconify-icon>
<div className="bg-[#2F3F73] px-6 py-4 rounded-lg w-full lg:w-auto text-center flex-1 border border-[#68DEF1]/30"><span className="text-sm lg:text-base tracking-widest uppercase text-white">Aprendizaje dirigido</span></div>
<iconify-icon className="text-[#68DEF1] hidden lg:block" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<iconify-icon className="text-[#68DEF1] lg:hidden" icon="solar:arrow-down-linear" width="24"></iconify-icon>
<div className="bg-[#2F3F73] px-6 py-4 rounded-lg w-full lg:w-auto text-center flex-1"><span className="text-sm lg:text-base tracking-widest uppercase text-[#C8C8D8]">Acción</span></div>
<iconify-icon className="text-[#68DEF1] hidden lg:block" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<iconify-icon className="text-[#68DEF1] lg:hidden" icon="solar:arrow-down-linear" width="24"></iconify-icon>
<div className="bg-[#7CDE65] px-6 py-4 rounded-lg w-full lg:w-auto text-center flex-1"><span className="text-sm lg:text-base tracking-widest uppercase text-[#141241] font-medium">Resultado</span></div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#1A1650]">
<div className="max-w-7xl mx-auto px-6 lg:px-8 fade-up">
<h2 className="text-3xl lg:text-4xl font-heading tracking-tight mb-12 text-center max-w-3xl mx-auto">¿Por qué la formación no siempre genera los resultados esperados?</h2>
<p className="text-xl lg:text-2xl text-[#C8C8D8] text-center mb-16 max-w-2xl mx-auto">Las empresas invierten en formación. Los equipos completan cursos. Pero en el día a día:</p>
<div className="grid md:grid-cols-3 gap-8 mb-20">
<div className="bg-[#141241] p-8 rounded-lg border border-[#2F3F73]">
<div className="w-12 h-12 rounded-full bg-[#2F3F73] flex items-center justify-center mb-6 text-[#68DEF1]">
<iconify-icon icon="solar:notebook-minimalistic-linear" width="24"></iconify-icon>
</div>
<p className="text-xl text-[#C8C8D8]">El conocimiento no siempre se aplica</p>
</div>
<div className="bg-[#141241] p-8 rounded-lg border border-[#2F3F73]">
<div className="w-12 h-12 rounded-full bg-[#2F3F73] flex items-center justify-center mb-6 text-[#68DEF1]">
<iconify-icon icon="solar:question-circle-linear" width="24"></iconify-icon>
</div>
<p className="text-xl text-[#C8C8D8]">Surgen dudas en la ejecución</p>
</div>
<div className="bg-[#141241] p-8 rounded-lg border border-[#2F3F73]">
<div className="w-12 h-12 rounded-full bg-[#2F3F73] flex items-center justify-center mb-6 text-[#68DEF1]">
<iconify-icon icon="solar:graph-down-linear" width="24"></iconify-icon>
</div>
<p className="text-xl text-[#C8C8D8]">El rendimiento no mejora como debería</p>
</div>
</div>
<div className="text-center">
<p className="text-3xl lg:text-4xl font-heading tracking-tight text-[#68DEF1]">La formación ocurre. <br className="hidden sm:block"/>Pero el aprendizaje no siempre se traduce en acción.</p>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#141241]">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center fade-up">
<h2 className="text-3xl lg:text-4xl font-heading tracking-tight mb-8">El problema no es la formación. Es la desconexión.</h2>
<p className="text-xl lg:text-2xl text-[#C8C8D8] mb-16 max-w-2xl mx-auto">La formación ocurre fuera del trabajo. El desempeño ocurre dentro del trabajo. Y entre ambos existe una brecha.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12">
<div className="bg-[#1A1650] p-10 rounded-xl w-full md:w-1/3 border border-[#2F3F73]">
<h3 className="text-2xl font-heading tracking-tight mb-2">FORMACIÓN</h3>
<p className="text-[#C8C8D8] text-base lg:text-lg">Ocurre en la plataforma</p>
</div>
<div className="flex flex-col items-center">
<span className="text-xs lg:text-sm text-[#68DEF1] uppercase tracking-widest mb-2">Brecha</span>
<div className="w-px h-12 md:w-24 md:h-px bg-gradient-to-b md:bg-gradient-to-r from-[#2F3F73] via-[#68DEF1] to-[#2F3F73]"></div>
</div>
<div className="bg-[#1A1650] p-10 rounded-xl w-full md:w-1/3 border border-[#2F3F73]">
<h3 className="text-2xl font-heading tracking-tight mb-2">DESEMPEÑO</h3>
<p className="text-[#C8C8D8] text-base lg:text-lg">Ocurre en el trabajo</p>
</div>
</div>

<div className="mt-20 lg:mt-24 fade-up delay-100">
<h3 className="text-2xl lg:text-3xl text-white tracking-tight mb-10">El aprendizaje ocurre cuando el empleado necesita:</h3>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
<div className="bg-[#141241] border border-[#2F3F73] rounded-full py-4 px-8 flex items-center justify-center gap-3 w-full sm:w-auto hover:border-[#68DEF1]/50 transition-colors">
<div className="w-2.5 h-2.5 rounded-full bg-[#68DEF1] shrink-0"></div>
<span className="text-lg text-white">Tomar decisiones</span>
</div>
<div className="bg-[#141241] border border-[#2F3F73] rounded-full py-4 px-8 flex items-center justify-center gap-3 w-full sm:w-auto hover:border-[#68DEF1]/50 transition-colors">
<div className="w-2.5 h-2.5 rounded-full bg-[#68DEF1] shrink-0"></div>
<span className="text-lg text-white">Resolver problemas</span>
</div>
<div className="bg-[#141241] border border-[#2F3F73] rounded-full py-4 px-8 flex items-center justify-center gap-3 w-full sm:w-auto hover:border-[#68DEF1]/50 transition-colors">
<div className="w-2.5 h-2.5 rounded-full bg-[#68DEF1] shrink-0"></div>
<span className="text-lg text-white">Ejecutar tareas</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#1A1650]" id="sistema">
<div className="max-w-7xl mx-auto px-6 lg:px-8 fade-up">
<h2 className="text-3xl lg:text-4xl font-heading tracking-tight mb-6">El sistema DIGI EDUCA</h2>
<p className="text-xl lg:text-2xl text-[#C8C8D8] max-w-3xl mb-16">No es una plataforma. No son cursos aislados. Es un sistema que asegura que la formación se convierta en:</p>
<div className="text-center mb-20 text-2xl lg:text-3xl font-heading tracking-tight flex flex-col md:flex-row items-center justify-center gap-4">
<span className="text-[#68DEF1]">aprendizaje</span>
<iconify-icon className="text-[#68DEF1] hidden md:block" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<iconify-icon className="text-[#68DEF1] md:hidden" icon="solar:arrow-down-linear" width="24"></iconify-icon>
<span className="text-white">acción</span>
<iconify-icon className="text-[#7CDE65] hidden md:block" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<iconify-icon className="text-[#7CDE65] md:hidden" icon="solar:arrow-down-linear" width="24"></iconify-icon>
<span className="text-[#7CDE65]">resultado</span>
</div>
<div className="grid lg:grid-cols-4 gap-6">

<div className="group bg-[#141241] p-6 rounded-xl border border-[#2F3F73] transition-all relative">
<span className="text-xs text-[#C8C8D8] uppercase tracking-widest block mb-4">Lo que la empresa ofrece</span>
<h3 className="text-2xl font-heading tracking-tight text-white mb-3">Formación</h3>
<p className="text-base text-[#C8C8D8]">E-learning, microlearning, gamificación, contenido a medida.</p>
<div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:flex w-8 h-8 bg-[#1A1650] rounded-full items-center justify-center z-10 text-[#68DEF1]">
<iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>

<div className="group bg-[#141241] p-6 rounded-xl border-l-[4px] border-[#68DEF1] border-t border-r border-b border-t-[#2F3F73] border-r-[#2F3F73] border-b-[#2F3F73] hover:bg-[#2F3F73]/20 transition-all relative">
<span className="text-xs text-[#68DEF1] uppercase tracking-widest block mb-4">SISTEMA CON AGENTES DIGI IA</span>
<h3 className="text-2xl font-heading tracking-tight text-white mb-3">Aprendizaje dirigido</h3>
<p className="text-base text-[#C8C8D8]">Agentes entrenados que diseccionan y apoyan el aprendizaje para el momento del trabajo diario.</p>
<div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:flex w-8 h-8 bg-[#1A1650] rounded-full items-center justify-center z-10 text-[#7CDE65]">
<iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>

<div className="group bg-[#141241] p-6 rounded-xl border-l-[4px] border-[#7CDE65] border-t border-r border-b border-t-[#2F3F73] border-r-[#2F3F73] border-b-[#2F3F73] hover:bg-[#2F3F73]/20 transition-all relative">
<span className="text-xs text-[#7CDE65] uppercase tracking-widest block mb-4">LO QUE LOGRA EL EMPLEADO</span>
<h3 className="text-2xl font-heading tracking-tight text-white mb-3">Acción</h3>
<p className="text-base text-[#C8C8D8]">Apoyo y dirección para aplicar el conocimiento cuando enfrenta decisiones y problemas reales.</p>
<div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:flex w-8 h-8 bg-[#1A1650] rounded-full items-center justify-center z-10 text-[#7CDE65]">
<iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>

<div className="group bg-[#7CDE65] p-6 rounded-xl relative transition-all shadow-[0_0_20px_rgba(124,222,101,0.1)]">
<span className="text-xs text-[#141241]/70 uppercase tracking-widest block mb-4 font-medium">Lo que la empresa mide</span>
<h3 className="text-2xl font-heading tracking-tight text-[#141241] mb-3">Resultado</h3>
<p className="text-base text-[#141241]/80 font-medium">Mejora de KPIs, reducción de errores, ROI de eficacia y desempeño.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#141241]" id="agentes">
<div className="max-w-7xl mx-auto px-6 lg:px-8 fade-up">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-heading tracking-tight mb-4">4 agentes. Un sistema. Un objetivo: resultados.</h2>
<p className="text-xl text-[#C8C8D8] mb-6">No sustituyen la formación. La hacen funcionar.</p>
<p className="text-lg lg:text-xl text-[#C8C8D8] max-w-3xl mx-auto mb-10 leading-relaxed">
                    Cuatro agentes entrenados específicamente con los datos, procesos y objetivos de tu empresa — diseñados para trabajar juntos con una única misión: dirigir el aprendizaje hacia el momento de acción y garantizar el alcance de resultados reales.
                </p>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm lg:text-base tracking-widest uppercase">
<span className="text-[#68DEF1]">DIGI Route <span className="text-white opacity-50 lowercase ml-1">dirige</span></span>
<span className="text-[#C8C8D8] hidden sm:inline">•</span>
<span className="text-[#68DEF1]">DIGI Copilot <span className="text-white opacity-50 lowercase ml-1">acompaña</span></span>
<span className="text-[#C8C8D8] hidden sm:inline">•</span>
<span className="text-[#7CDE65]">DIGI Compass <span className="text-white opacity-50 lowercase ml-1">orienta</span></span>
<span className="text-[#C8C8D8] hidden sm:inline">•</span>
<span className="text-[#7CDE65]">DIGI Impact <span className="text-white opacity-50 lowercase ml-1">mide</span></span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6 lg:gap-8">

<div className="bg-[#1A1650] p-8 rounded-xl border border-[#2F3F73] hover:border-[#68DEF1]/50 hover:shadow-[0_0_20px_rgba(104,222,241,0.05)] transition-all group">
<div className="flex justify-between items-start mb-6">
<h3 className="text-3xl font-heading tracking-tight text-white flex items-center gap-3">
<iconify-icon className="text-[#68DEF1]" icon="solar:map-linear" width="24"></iconify-icon> DIGI Route
                        </h3>
<span className="text-xs uppercase tracking-widest px-3 py-1 border border-[#68DEF1] text-[#68DEF1] rounded-full">Dirige</span>
</div>
<p className="text-[#C8C8D8] text-lg mb-8 min-h-[80px]">Diagnostica el perfil y necesidad de cada colaborador y genera automáticamente su ruta personalizada. Define dónde está cada persona y hacia dónde necesita ir.</p>
<ul className="space-y-3 text-base text-[#C8C8D8]">
<li className="flex gap-3"><iconify-icon className="text-[#68DEF1] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Diagnóstico de perfil individual</li>
<li className="flex gap-3"><iconify-icon className="text-[#68DEF1] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Ruta de aprendizaje automatizada</li>
<li className="flex gap-3"><iconify-icon className="text-[#68DEF1] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Ajuste dinámico según avance real</li>
<li className="flex gap-3"><iconify-icon className="text-[#68DEF1] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Objetivos alineados al puesto</li>
</ul>
</div>

<div className="bg-[#1A1650] p-8 rounded-xl border border-[#2F3F73] hover:border-[#68DEF1]/50 hover:shadow-[0_0_20px_rgba(104,222,241,0.05)] transition-all group">
<div className="flex justify-between items-start mb-6">
<h3 className="text-3xl font-heading tracking-tight text-white flex items-center gap-3">
<iconify-icon className="text-[#68DEF1]" icon="solar:chat-line-linear" width="24"></iconify-icon> DIGI Copilot
                        </h3>
<span className="text-xs uppercase tracking-widest px-3 py-1 border border-[#68DEF1] text-[#68DEF1] rounded-full">Acompaña</span>
</div>
<p className="text-[#C8C8D8] text-lg mb-8 min-h-[80px]">Vuela junto al colaborador en el momento de acción. Resuelve dudas en tiempo real, guía la ejecución y está disponible 24/7 cuando el empleado más lo necesita.</p>
<ul className="space-y-3 text-base text-[#C8C8D8]">
<li className="flex gap-3"><iconify-icon className="text-[#68DEF1] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Disponible 24/7 en LMS, app o WhatsApp</li>
<li className="flex gap-3"><iconify-icon className="text-[#68DEF1] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Resuelve dudas con ejemplos reales</li>
<li className="flex gap-3"><iconify-icon className="text-[#68DEF1] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Guía la ejecución en tiempo real</li>
<li className="flex gap-3"><iconify-icon className="text-[#68DEF1] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Acompaña en el momento de acción</li>
</ul>
</div>

<div className="bg-[#1A1650] p-8 rounded-xl border border-[#2F3F73] hover:border-[#7CDE65]/50 hover:shadow-[0_0_20px_rgba(124,222,101,0.05)] transition-all group">
<div className="flex justify-between items-start mb-6">
<h3 className="text-3xl font-heading tracking-tight text-white flex items-center gap-3">
<iconify-icon className="text-[#7CDE65]" icon="solar:compass-linear" width="24"></iconify-icon> DIGI Compass
                        </h3>
<span className="text-xs uppercase tracking-widest px-3 py-1 border border-[#7CDE65] text-[#7CDE65] rounded-full">Orienta</span>
</div>
<p className="text-[#C8C8D8] text-lg mb-8 min-h-[80px]">Detecta gaps de conocimiento en tiempo real y dirige al colaborador al contenido correcto en el momento correcto. El colaborador no busca — el Compass apunta el siguiente paso.</p>
<ul className="space-y-3 text-base text-[#C8C8D8]">
<li className="flex gap-3"><iconify-icon className="text-[#7CDE65] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Detección de gaps en tiempo real</li>
<li className="flex gap-3"><iconify-icon className="text-[#7CDE65] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Recomendación de contenido precisa</li>
<li className="flex gap-3"><iconify-icon className="text-[#7CDE65] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> El sistema lleva al colaborador, no al revés</li>
<li className="flex gap-3"><iconify-icon className="text-[#7CDE65] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Notificaciones inteligentes de refuerzo</li>
</ul>
</div>

<div className="bg-[#1A1650] p-8 rounded-xl border border-[#2F3F73] hover:border-[#7CDE65]/50 hover:shadow-[0_0_20px_rgba(124,222,101,0.05)] transition-all group">
<div className="flex justify-between items-start mb-6">
<h3 className="text-3xl font-heading tracking-tight text-white flex items-center gap-3">
<iconify-icon className="text-[#7CDE65]" icon="solar:chart-square-linear" width="24"></iconify-icon> DIGI Impact
                        </h3>
<span className="text-xs uppercase tracking-widest px-3 py-1 border border-[#7CDE65] text-[#7CDE65] rounded-full">Mide</span>
</div>
<p className="text-[#C8C8D8] text-lg mb-8 min-h-[80px]">Mide el impacto real del aprendizaje en el desempeño y los KPIs del negocio. Responde la pregunta: ¿la inversión generó resultado real?</p>
<ul className="space-y-3 text-base text-[#C8C8D8]">
<li className="flex gap-3"><iconify-icon className="text-[#7CDE65] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Mide impacto en KPIs del negocio</li>
<li className="flex gap-3"><iconify-icon className="text-[#7CDE65] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Conecta aprendizaje con desempeño real</li>
<li className="flex gap-3"><iconify-icon className="text-[#7CDE65] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Informes de ROI a 3 y 6 meses</li>
<li className="flex gap-3"><iconify-icon className="text-[#7CDE65] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Cierra el ciclo de la cadena</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#1A1650]" id="soluciones">
<div className="max-w-4xl mx-auto px-6 lg:px-8 fade-up">
<h2 className="text-3xl lg:text-4xl font-heading tracking-tight mb-16 text-center">Aplicación en programas de formación y desarrollo de equipos</h2>
<div className="space-y-4">

<div className="bg-[#141241] rounded-xl border border-[#2F3F73] overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group" onclick="toggleAccordion('acc1', this)">
<h3 className="text-2xl font-heading tracking-tight text-white uppercase">Onboarding Inteligente</h3>
<iconify-icon className="text-[#68DEF1] transition-transform duration-300" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
<div className="hidden px-6 pb-6 pt-2" id="acc1">
<div className="grid md:grid-cols-3 gap-6 text-base">
<div>
<span className="text-xs uppercase tracking-widest text-[#C8C8D8] mb-2 block">Situación</span>
<p className="text-white">Onboarding lento, empleados sin información clara, alta rotación en primeros meses.</p>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-[#68DEF1] mb-2 block">ACTUACIÓN DEL SISTEMA</span>
<ul className="text-[#C8C8D8] space-y-1 list-disc list-inside marker:text-[#68DEF1]">
<li>DIGI Route genera ruta personalizada</li>
<li>DIGI Copilot resuelve dudas en tiempo real</li>
<li>Agente de conocimiento 24/7</li>
</ul>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-[#7CDE65] mb-2 block">Resultado</span>
<ul className="text-white space-y-1 list-disc list-inside marker:text-[#7CDE65]">
<li>Empleado autónomo desde semana 1</li>
<li>RRHH libera tiempo operativo</li>
<li>Cultura transmitida con consistencia</li>
</ul>
</div>
</div>
</div>
</div>

<div className="bg-[#141241] rounded-xl border border-[#2F3F73] overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group" onclick="toggleAccordion('acc2', this)">
<h3 className="text-2xl font-heading tracking-tight text-white uppercase">Academia de Ventas con IA</h3>
<iconify-icon className="text-[#68DEF1] transition-transform duration-300" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
<div className="hidden px-6 pb-6 pt-2" id="acc2">
<div className="grid md:grid-cols-3 gap-6 text-base">
<div>
<span className="text-xs uppercase tracking-widest text-[#C8C8D8] mb-2 block">Situación</span>
<p className="text-white">Equipo que no aplica lo aprendido, nuevos vendedores tardan meses en rendir, conocimiento disperso.</p>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-[#68DEF1] mb-2 block">ACTUACIÓN DEL SISTEMA</span>
<ul className="text-[#C8C8D8] space-y-1 list-disc list-inside marker:text-[#68DEF1]">
<li>DIGI Route crea ruta por perfil</li>
<li>DIGI Copilot como tutor de objeciones</li>
<li>DIGI Compass refuerza en la venta</li>
</ul>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-[#7CDE65] mb-2 block">Resultado</span>
<ul className="text-white space-y-1 list-disc list-inside marker:text-[#7CDE65]">
<li>Reducción del tiempo de rampa</li>
<li>Mejora medible en conversión</li>
<li>Equipo actualizado con producto</li>
</ul>
</div>
</div>
</div>
</div>

<div className="bg-[#141241] rounded-xl border border-[#2F3F73] overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group" onclick="toggleAccordion('acc3', this)">
<h3 className="text-2xl font-heading tracking-tight text-white uppercase">Desarrollo de Liderazgo</h3>
<iconify-icon className="text-[#68DEF1] transition-transform duration-300" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
<div className="hidden px-6 pb-6 pt-2" id="acc3">
<div className="grid md:grid-cols-3 gap-6 text-base">
<div>
<span className="text-xs uppercase tracking-widest text-[#C8C8D8] mb-2 block">Situación</span>
<p className="text-white">Managers sin formación estructurada, habilidades blandas difíciles de desarrollar, sin seguimiento.</p>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-[#68DEF1] mb-2 block">ACTUACIÓN DEL SISTEMA</span>
<ul className="text-[#C8C8D8] space-y-1 list-disc list-inside marker:text-[#68DEF1]">
<li>Itinerario por nivel de liderazgo</li>
<li>DIGI Copilot con feedback continuo</li>
<li>Retos prácticos y evaluación 360</li>
</ul>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-[#7CDE65] mb-2 block">Resultado</span>
<ul className="text-white space-y-1 list-disc list-inside marker:text-[#7CDE65]">
<li>Líderes con habilidades desarrolladas</li>
<li>Mejor clima de equipo</li>
<li>Desarrollo medible y documentado</li>
</ul>
</div>
</div>
</div>
</div>

<div className="bg-[#141241] rounded-xl border border-[#2F3F73] overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group" onclick="toggleAccordion('acc4', this)">
<h3 className="text-2xl font-heading tracking-tight text-white uppercase">Formación Técnica y Compliance</h3>
<iconify-icon className="text-[#68DEF1] transition-transform duration-300" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
<div className="hidden px-6 pb-6 pt-2" id="acc4">
<div className="grid md:grid-cols-3 gap-6 text-base">
<div>
<span className="text-xs uppercase tracking-widest text-[#C8C8D8] mb-2 block">Situación</span>
<p className="text-white">Empleados no recuerdan formaciones, riesgo normativo, baja retención en formatos pasivos.</p>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-[#68DEF1] mb-2 block">ACTUACIÓN DEL SISTEMA</span>
<ul className="text-[#C8C8D8] space-y-1 list-disc list-inside marker:text-[#68DEF1]">
<li>DIGI Copilot para normativa 24/7</li>
<li>Evaluaciones con certificación</li>
<li>DIGI Impact con trazabilidad</li>
</ul>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-[#7CDE65] mb-2 block">Resultado</span>
<ul className="text-white space-y-1 list-disc list-inside marker:text-[#7CDE65]">
<li>Cumplimiento documentado</li>
<li>Actualización en días</li>
<li>Reducción del riesgo operativo</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#141241]" id="resultados">
<div className="max-w-7xl mx-auto px-6 lg:px-8 fade-up">
<h2 className="text-3xl lg:text-4xl font-heading tracking-tight mb-16 text-center">Resultados que se miden</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 text-center" id="metrics-container">
<div>
<div className="text-5xl font-heading tracking-tight text-[#7CDE65] mb-2">+<span className="counter" data-target="60">0</span>%</div>
<h4 className="text-xl text-white font-medium mb-2">Retención del conocimiento</h4>
<p className="text-base text-[#C8C8D8]">Mejora en pruebas a 30 y 90 días post-formación</p>
</div>
<div>
<div className="text-5xl font-heading tracking-tight text-[#7CDE65] mb-2">-<span className="counter" data-target="40">0</span>%</div>
<h4 className="text-xl text-white font-medium mb-2">Tiempo de adaptación</h4>
<p className="text-base text-[#C8C8D8]">Reducción del tiempo hasta rendimiento pleno</p>
</div>
<div>
<div className="text-5xl font-heading tracking-tight text-[#7CDE65] mb-2">+<span className="counter" data-target="35">0</span>%</div>
<h4 className="text-xl text-white font-medium mb-2">Mejora en desempeño</h4>
<p className="text-base text-[#C8C8D8]">Mejora en KPIs del área formada</p>
</div>
<div>
<div className="text-5xl font-heading tracking-tight text-[#7CDE65] mb-2">3x-6x</div>
<h4 className="text-xl text-white font-medium mb-2">ROI del programa</h4>
<p className="text-base text-[#C8C8D8]">Retorno sobre la inversión formativa a 6 meses</p>
</div>
<div>
<div className="text-5xl font-heading tracking-tight text-[#7CDE65] mb-2"><span className="counter" data-target="85">0</span>%+</div>
<h4 className="text-xl text-white font-medium mb-2">Engagement del programa</h4>
<p className="text-base text-[#C8C8D8]">Tasa de finalización real vs. 20-30% del mercado</p>
</div>
<div>
<div className="text-5xl font-heading tracking-tight text-[#7CDE65] mb-2">NPS <span className="counter" data-target="70">0</span>+</div>
<h4 className="text-xl text-white font-medium mb-2">Satisfacción del empleado</h4>
<p className="text-base text-[#C8C8D8]">Índice de recomendación del programa</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#1A1650]" id="quienes-somos">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center fade-up">
<h2 className="text-3xl lg:text-4xl font-heading tracking-tight mb-12">DIGI EDUCA nace de la intersección de:</h2>
<div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-16 text-4xl font-heading tracking-tight">
<span className="text-white">Educación</span>
<span className="hidden md:inline text-[#2F3F73]">+</span>
<span className="text-[#68DEF1]">Estrategia</span>
<span className="hidden md:inline text-[#2F3F73]">+</span>
<span className="text-[#7CDE65]">Tecnología</span>
</div>
<div className="text-xl text-[#C8C8D8] space-y-6 max-w-3xl mx-auto text-left leading-relaxed">
<p>Nacimos en Brasil hace más de 8 años, trabajando en formación digital para empresas en Brasil y LATAM y recién llegados a España.</p>
<p>Durante ese tiempo observamos un patrón que se repetía: las empresas formaban, los equipos aprendían, pero los resultados no siempre cambiaban.</p>
<p>El problema no era la voluntad de formar. Era el modelo.</p>
<p>La formación estaba diseñada para transmitir conocimiento — no para transformar el desempeño.</p>
<p>Eso nos llevó a evolucionar.</p>
<p className="text-white font-medium">Hoy diseñamos sistemas que conectan directamente el aprendizaje con los resultados reales del negocio, con IA integrada desde el origen, y Agentes DIGI IA entrenados con los procesos y la cultura de cada empresa.</p>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#141241]">
<div className="max-w-7xl mx-auto px-6 lg:px-8 fade-up">
<h2 className="text-3xl lg:text-4xl font-heading tracking-tight mb-16 text-center">Cómo trabajamos</h2>
<div className="grid md:grid-cols-4 gap-8 mb-20 relative">
<div className="hidden md:block absolute top-6 left-10 right-10 h-px bg-[#2F3F73] z-0"></div>
<div className="relative z-10 bg-[#141241] pt-2">
<div className="text-5xl font-heading tracking-tight text-[#7CDE65] mb-4">01</div>
<h4 className="text-xl text-white font-medium mb-2">Diagnóstico estratégico</h4>
<p className="text-base text-[#C8C8D8]">Diagnosticamos el problema que la empresa necesita resolver y el resultado que desea alcanzar.</p>
</div>
<div className="relative z-10 bg-[#141241] pt-2">
<div className="text-5xl font-heading tracking-tight text-[#7CDE65] mb-4">02</div>
<h4 className="text-xl text-white font-medium mb-2">Diseño del sistema</h4>
<p className="text-base text-[#C8C8D8]">Diseñamos el contenido y la solución de aprendizaje adecuada para el problema identificado.</p>
</div>
<div className="relative z-10 bg-[#141241] pt-2">
<div className="text-5xl font-heading tracking-tight text-[#7CDE65] mb-4">03</div>
<h4 className="text-xl text-white font-medium mb-2">Implementación con IA</h4>
<p className="text-base text-[#C8C8D8]">Entrenamos e integramos los Agentes DIGI IA para direccionar el aprendizaje hacia el resultado.</p>
</div>
<div className="relative z-10 bg-[#141241] pt-2">
<div className="text-5xl font-heading tracking-tight text-[#7CDE65] mb-4">04</div>
<h4 className="text-xl text-white font-medium mb-2">Medición y evolución</h4>
<p className="text-base text-[#C8C8D8]">Actualizamos, medimos ROI y expandimos el sistema conforme creces.</p>
</div>
</div>
<p className="text-3xl lg:text-4xl font-heading tracking-tight text-white text-center">No se trata de formar más. Se trata de que el aprendizaje funcione en la práctica.</p>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#1A1650]" id="diagnostico">
<div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center fade-up">
<div>
<h2 className="text-3xl lg:text-4xl font-heading tracking-tight mb-8">Solicita tu diagnóstico estratégico gratuito y descubre cómo mejorar el impacto de la formación en tu empresa.</h2>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-lg text-[#C8C8D8]">
<div className="w-2.5 h-2.5 rounded-full bg-[#7CDE65] mt-2 flex-shrink-0"></div>
<span>Identificamos qué está fallando en el aprendizaje de tu equipo.</span>
</li>
<li className="flex items-start gap-3 text-lg text-[#C8C8D8]">
<div className="w-2.5 h-2.5 rounded-full bg-[#7CDE65] mt-2 flex-shrink-0"></div>
<span>Detectamos oportunidades de mejora.</span>
</li>
<li className="flex items-start gap-3 text-lg text-[#C8C8D8]">
<div className="w-2.5 h-2.5 rounded-full bg-[#7CDE65] mt-2 flex-shrink-0"></div>
<span>Diseñamos el sistema que realmente necesitas para impactar en el rendimiento y los resultados del negocio.</span>
</li>
</ul>
</div>
<div className="w-full">
<iframe frameborder="0" height="600" src="https://form.respondi.app/2Ksl9GJZ" style={{border: 'none', borderRadius: '8px', background: 'transparent'}} width="100%"></iframe>
<p className="text-sm text-[#C8C8D8] text-center mt-4">Sin compromiso. Te contactamos en menos de 24 horas.</p>
</div>
</div>
</section>

<footer className="py-8 bg-[#141241] border-t border-[#2F3F73]">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-base text-[#C8C8D8]">
<p>© 2026 DIGI EDUCA Systems · Todos los derechos reservados · España y Brasil</p>
</div>
</footer>


    </>
  );
}
