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



        document.addEventListener('DOMContentLoaded', () => {
            // Intersection Observer for fade/slide/blur
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.anim-element').forEach(el => {
                observer.observe(el);
            });

            // Subtle Parallax on Grid
            const grid = document.getElementById('parallax-grid');
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                if(grid) grid.style.transform = `translateY(${scrolled * 0.15}px)`;
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
      

<div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.04] mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center max-w-7xl mx-auto px-6 lg:px-8 w-full opacity-30 transition-transform duration-75 ease-linear" id="parallax-grid">
<div className="w-full flex justify-between h-[150vh] -mt-[25vh]">
<div className="w-px h-full bg-[#1A1A1A]/10 relative overflow-hidden hidden sm:block">
<div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-[#FF5A36]/40 to-transparent" style={{animation: 'lineBeam 7s infinite linear'}}></div>
</div>
<div className="w-px h-full bg-[#1A1A1A]/10 relative overflow-hidden hidden md:block"></div>
<div className="w-px h-full bg-[#1A1A1A]/10 relative overflow-hidden hidden lg:block">
<div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-[#1A1A1A]/40 to-transparent" style={{animation: 'lineBeam 9s infinite linear 2s'}}></div>
</div>
<div className="w-px h-full bg-[#1A1A1A]/10 relative overflow-hidden hidden sm:block"></div>
</div>
</div>

<nav className="absolute top-0 left-0 w-full z-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex justify-between items-center anim-element is-visible">

<a className="flex items-center gap-2.5 group" href="#">
<iconify-icon className="text-[#1A1A1A] group-hover:text-[#FF5A36] transition-colors" height="28" icon="solar:programming-linear" width="28"></iconify-icon>
<div className="text-2xl font-medium tracking-tighter text-[#1A1A1A] mt-1" style={{fontFamily: '\'Inter\', sans-serif'}}>
                    Chicken AI.
                </div>
</a>
<a className="hidden md:inline-flex items-center justify-center text-sm font-medium hover:text-[#FF5A36] transition-colors tracking-tight" href="#contacto">
                Iniciar Diagnóstico →
            </a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-12 max-w-5xl">
<div className="anim-element delay-1 mb-8 flex items-center gap-4">
<span className="inline-flex items-center gap-2 text-[#FF5A36] uppercase tracking-widest text-xs font-semibold">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A36] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5A36]"></span>
</span>
                            Solo 3 empresas nuevas al mes
                        </span>
</div>
<h1 className="anim-element text-[4.5rem] sm:text-7xl lg:text-[7rem] leading-[0.95] tracking-tighter text-[#1A1A1A] font-medium" style={{fontFamily: '\'Lora\', serif'}}>
                        Tu equipo sabe que existe la IA.<br/>Aún no sabe qué hacer con ella.
                    </h1>
<p className="anim-element delay-2 mt-10 text-xl sm:text-2xl text-[#1A1A1A]/70 max-w-3xl leading-relaxed font-light tracking-tight">
                        Formación 100% a la medida. Sin teoría inútil. Sin cursos genéricos.<br/>
                        Solo lo que tu empresa necesita para pasar del "no sé" al "ya lo usamos".
                    </p>
<div className="anim-element delay-3 mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">

<a className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden w-full sm:w-auto" href="#contacto">
<div className="absolute inset-0 bg-gradient-to-r from-[#FF5A36] via-[#FF8A66] to-[#FF5A36] rounded-full opacity-80"></div>
<div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#fff_360deg)] rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{animation: 'borderBeam 2.5s linear infinite'}}></div>
<div className="relative bg-[#0F172A] rounded-full px-10 py-5 w-full h-full flex items-center justify-center gap-3 text-white text-base font-medium transition-colors group-hover:bg-[#1A2438]">
<iconify-icon className="text-[#FF5A36]" height="1.2em" icon="solar:rocket-bold-duotone" width="1.2em"></iconify-icon>
                                Agendar diagnóstico gratuito de 60 min
                            </div>
</a>

<a className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden w-full sm:w-auto" href="#planes">
<div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/20 to-transparent rounded-full"></div>
<div className="relative bg-[#F4F1EA] rounded-full px-8 py-5 w-full h-full flex items-center justify-center text-[#1A1A1A] text-base font-medium transition-colors group-hover:bg-white">
                                Ver planes de formación
                            </div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 sm:py-48 bg-white border-y border-[#1A1A1A]/5 overflow-hidden">

<div className="absolute -top-10 left-0 text-[20rem] leading-none font-medium text-[#1A1A1A]/[0.02] select-none pointer-events-none tracking-tighter" style={{fontFamily: '\'Lora\', serif'}}>01</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="max-w-4xl mb-24 anim-element">
<h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] tracking-tighter text-[#1A1A1A] leading-[1.05] font-medium" style={{fontFamily: '\'Lora\', serif'}}>
                    Las empresas llevan meses<br/>
                    "aprendiendo" IA.<br/>Y no ha cambiado nada.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">

<div className="relative anim-element delay-1 group">
<div className="text-xs font-semibold tracking-widest text-[#FF5A36] mb-6 flex items-center gap-3">
<span className="w-8 h-px bg-[#FF5A36]"></span> DETALLE 01
                    </div>
<iconify-icon className="text-[#1A1A1A]/20 mb-8 group-hover:text-[#FF5A36] transition-colors duration-500" height="48" icon="solar:video-library-bold-duotone" width="48"></iconify-icon>
<h3 className="text-2xl font-medium text-[#1A1A1A] mb-4 tracking-tight">Consumen contenido genérico</h3>
<p className="text-lg text-[#1A1A1A]/60 leading-relaxed font-light">
                        YouTube, newsletters, cursos online. Todo fascinante. Nada aplicable a tu operación real.
                    </p>
</div>

<div className="relative anim-element delay-2 group">
<div className="text-xs font-semibold tracking-widest text-[#FF5A36] mb-6 flex items-center gap-3">
<span className="w-8 h-px bg-[#FF5A36]"></span> DETALLE 02
                    </div>
<iconify-icon className="text-[#1A1A1A]/20 mb-8 group-hover:text-[#FF5A36] transition-colors duration-500" height="48" icon="solar:hourglass-bold-duotone" width="48"></iconify-icon>
<h3 className="text-2xl font-medium text-[#1A1A1A] mb-4 tracking-tight">Pierden tiempo en teoría</h3>
<p className="text-lg text-[#1A1A1A]/60 leading-relaxed font-light">
                        Sus equipos saben qué es un prompt. No saben cómo ahorrar 10 horas semanales con uno.
                    </p>
</div>

<div className="relative anim-element delay-3 group">
<div className="text-xs font-semibold tracking-widest text-[#FF5A36] mb-6 flex items-center gap-3">
<span className="w-8 h-px bg-[#FF5A36]"></span> DETALLE 03
                    </div>
<iconify-icon className="text-[#1A1A1A]/20 mb-8 group-hover:text-[#FF5A36] transition-colors duration-500" height="48" icon="solar:target-bold-duotone" width="48"></iconify-icon>
<h3 className="text-2xl font-medium text-[#1A1A1A] mb-4 tracking-tight">Implementan sin estrategia</h3>
<p className="text-lg text-[#1A1A1A]/60 leading-relaxed font-light">
                        Herramientas sin contexto. Automatizaciones que nadie usa. Dinero y energía en el aire.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative py-32 sm:py-48 bg-[#0F172A] text-white overflow-hidden">

<div className="absolute -top-10 right-0 text-[20rem] leading-none font-medium text-white/[0.02] select-none pointer-events-none tracking-tighter" style={{fontFamily: '\'Lora\', serif'}}>02</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
<div className="anim-element">
<h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] tracking-tighter leading-[1.05] mb-10 font-medium" style={{fontFamily: '\'Lora\', serif'}}>
                        Nos sentamos contigo.<br/>
                        Aprendemos tu negocio.<br/>
                        Construimos desde ahí.
                    </h2>
<p className="text-xl text-white/60 leading-relaxed mb-8 font-light">
                        No traemos un curso prefabricado. Traemos preguntas. Auditamos tus procesos, tus retos, tus herramientas. Y diseñamos un plan de implementación que parte de donde tú estás.
                    </p>
<p className="text-xl text-white/60 leading-relaxed font-light">
                        Sin relleno. Sin diapositivas de más. Solo formación que entra el lunes y se usa el martes.
                    </p>
</div>

<div className="space-y-16 lg:pl-16 lg:border-l border-white/10 relative pt-4">

<div className="hidden lg:flex absolute -left-[17px] top-[10%] w-8 h-8 items-center justify-center">
<div className="absolute inset-0 rounded-full border border-[#FF5A36]" style={{animation: 'sonar 3s infinite cubic-bezier(0.16, 1, 0.3, 1)'}}></div>
<div className="w-2 h-2 bg-[#FF5A36] rounded-full"></div>
</div>
<div className="relative anim-element delay-1 group">
<div className="flex items-baseline gap-6 mb-4">
<span className="text-sm font-medium tracking-widest text-[#FF5A36]">PASO 1</span>
<h3 className="text-3xl font-medium tracking-tight" style={{fontFamily: '\'Lora\', serif'}}>Diagnóstico</h3>
</div>
<p className="text-lg text-white/50 pl-[5.5rem] font-light leading-relaxed">
                            60 minutos. Entendemos tu empresa, tus equipos y dónde la IA puede mover la aguja de verdad.
                        </p>
</div>
<div className="relative anim-element delay-2 group">
<div className="flex items-baseline gap-6 mb-4">
<span className="text-sm font-medium tracking-widest text-[#FF5A36]">PASO 2</span>
<h3 className="text-3xl font-medium tracking-tight" style={{fontFamily: '\'Lora\', serif'}}>Plan a medida</h3>
</div>
<p className="text-lg text-white/50 pl-[5.5rem] font-light leading-relaxed">
                            Diseñamos el programa específico para tus retos. Cero contenido genérico. Cero tiempo desperdiciado.
                        </p>
</div>
<div className="relative anim-element delay-3 group">
<div className="flex items-baseline gap-6 mb-4">
<span className="text-sm font-medium tracking-widest text-[#FF5A36]">PASO 3</span>
<h3 className="text-3xl font-medium tracking-tight" style={{fontFamily: '\'Lora\', serif'}}>Implementación real</h3>
</div>
<p className="text-lg text-white/50 pl-[5.5rem] font-light leading-relaxed">
                            Tu equipo no solo aprende. Sale con flujos, herramientas y procesos ya funcionando.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 sm:py-48 bg-[#F4F1EA] overflow-hidden flex flex-col items-center">
<div className="w-full anim-element mb-32">
<p className="text-center text-sm font-medium tracking-widest text-[#1A1A1A]/40 mb-12 uppercase">Equipos de estas empresas ya integran IA</p>
<div className="relative w-full overflow-hidden no-scrollbar mask-edges">
<div className="flex whitespace-nowrap w-max" style={{animation: 'marquee 35s linear infinite'}}>

<div className="flex items-center gap-20 px-10 text-[#1A1A1A]/30 grayscale opacity-80">
<iconify-icon height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:grab" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:nikon" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:craftsman" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:sony" width="64"></iconify-icon>

<iconify-icon height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:grab" width="64"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center anim-element">
<h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter text-[#1A1A1A] leading-[1.05] mb-10 font-medium" style={{fontFamily: '\'Lora\', serif'}}>
                Solo pagas cuando tu empresa crece.
            </h2>
<p className="text-xl sm:text-2xl text-[#1A1A1A]/60 leading-relaxed max-w-3xl mx-auto mb-16 font-light">
                Operamos bajo un modelo de alineación total.<br/>
                Si tu empresa no crece, Chicken AI no cobra.<br/>
                Sin riesgo. Sin letra pequeña. Sin excusas.
            </p>
<div className="inline-block text-left bg-white shadow-xl shadow-[#1A1A1A]/[0.03] border border-[#1A1A1A]/5 px-10 py-8 rounded-2xl relative">
<iconify-icon className="absolute -top-6 -left-6 text-[#FF5A36]/20" height="48" icon="solar:quote-right-bold-duotone" width="48"></iconify-icon>
<p className="text-2xl text-[#1A1A1A] leading-relaxed italic font-medium tracking-tight" style={{fontFamily: '\'Lora\', serif'}}>
                    "No somos un proveedor de cursos.<br/>
                    Somos tu primer equipo de IA interno."
                </p>
</div>
</div>
</section>

<section className="relative py-32 sm:py-48 bg-white border-t border-[#1A1A1A]/5 overflow-hidden" id="planes">

<div className="absolute -top-10 left-0 text-[20rem] leading-none font-medium text-[#1A1A1A]/[0.02] select-none pointer-events-none tracking-tighter" style={{fontFamily: '\'Lora\', serif'}}>03</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-24 anim-element">
<h2 className="text-5xl sm:text-6xl tracking-tighter text-[#1A1A1A] font-medium leading-[1.05]" style={{fontFamily: '\'Lora\', serif'}}>
                    Una escalera diseñada para tu momento actual.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

<div className="relative p-[1px] rounded-[2rem] overflow-hidden group anim-element">
<div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/10 to-transparent transition-colors duration-500"></div>
<div className="relative bg-white rounded-[calc(2rem-1px)] p-10 h-full flex flex-col hover:bg-[#F4F1EA]/50 transition-colors duration-500">
<iconify-icon className="text-[#1A1A1A]/40 mb-6" height="32" icon="solar:leaf-bold-duotone" width="32"></iconify-icon>
<h3 className="text-2xl font-medium text-[#1A1A1A] mb-2 tracking-tight">AI Foundations</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-5xl tracking-tight text-[#1A1A1A] font-medium" style={{fontFamily: '\'Lora\', serif'}}>$500</span>
<span className="text-base text-[#1A1A1A]/50 font-light">USD</span>
</div>
<p className="text-base text-[#1A1A1A]/60 mb-8 flex-grow font-light leading-relaxed">
                            Para equipos que quieren entender qué es posible y dar el primer paso con herramientas concretas.
                        </p>
<div className="bg-[#F4F1EA] rounded-xl p-5 mb-10 border border-[#1A1A1A]/5">
<p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
<span className="font-semibold text-[#1A1A1A]">Ideal para:</span> equipos de 2–10 personas, primera experiencia con IA aplicada.
                            </p>
</div>

<a className="group/btn relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden w-full mt-auto" href="#">
<div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/20 to-transparent rounded-full"></div>
<div className="relative bg-white rounded-full px-6 py-4 w-full h-full flex items-center justify-center text-[#1A1A1A] text-sm font-medium transition-colors group-hover/btn:bg-[#F4F1EA]">
                                Comenzar ahora
                            </div>
</a>
</div>
</div>

<div className="relative p-[1px] rounded-[2rem] overflow-hidden md:-translate-y-6 shadow-2xl shadow-[#0F172A]/20 anim-element delay-1 z-10 group">
<div className="absolute inset-0 bg-gradient-to-b from-[#FF5A36] to-[#0F172A] opacity-80"></div>

<div className="absolute inset-0 bg-gradient-to-tr from-[#FF5A36]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative bg-[#0F172A] rounded-[calc(2rem-1px)] p-10 h-full flex flex-col">
<div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
<span className="bg-gradient-to-r from-[#FF5A36] to-[#FF8A66] text-white text-xs font-semibold px-5 py-2 rounded-full tracking-widest uppercase shadow-lg">
                                Más Elegido
                            </span>
</div>
<iconify-icon className="text-[#FF5A36] mb-6 mt-4" height="32" icon="solar:bolt-bold-duotone" width="32"></iconify-icon>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">AI Builder</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-5xl tracking-tight text-white font-medium" style={{fontFamily: '\'Lora\', serif'}}>$1,500</span>
<span className="text-base text-white/50 font-light">USD</span>
</div>
<p className="text-base text-white/60 mb-8 flex-grow font-light leading-relaxed">
                            Para empresas listas para automatizar procesos clave y construir flujos de trabajo con IA.
                        </p>
<div className="bg-white/5 rounded-xl p-5 mb-10 border border-white/10 backdrop-blur-sm">
<p className="text-sm text-white/80 leading-relaxed">
<span className="font-semibold text-white">Ideal para:</span> operaciones medianas, áreas de marketing, ventas o atención al cliente.
                            </p>
</div>

<a className="group/btn relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden w-full mt-auto" href="#">
<div className="absolute inset-0 bg-gradient-to-r from-[#FF5A36] via-[#FF8A66] to-[#FF5A36] rounded-full opacity-80"></div>
<div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#fff_360deg)] rounded-full transition-opacity duration-300 opacity-0 group-hover/btn:opacity-100" style={{animation: 'borderBeam 2.5s linear infinite'}}></div>
<div className="relative bg-[#FF5A36] rounded-full px-6 py-4 w-full h-full flex items-center justify-center text-white text-sm font-medium transition-colors group-hover/btn:bg-[#FF8A66]">
                                Seleccionar este plan
                            </div>
</a>
</div>
</div>

<div className="relative p-[1px] rounded-[2rem] overflow-hidden group anim-element delay-2">
<div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/10 to-transparent transition-colors duration-500"></div>
<div className="relative bg-white rounded-[calc(2rem-1px)] p-10 h-full flex flex-col hover:bg-[#F4F1EA]/50 transition-colors duration-500">
<iconify-icon className="text-[#1A1A1A]/40 mb-6" height="32" icon="solar:buildings-bold-duotone" width="32"></iconify-icon>
<h3 className="text-2xl font-medium text-[#1A1A1A] mb-2 tracking-tight">AI Transformation</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-5xl tracking-tight text-[#1A1A1A] font-medium" style={{fontFamily: '\'Lora\', serif'}}>$5,000</span>
<span className="text-base text-[#1A1A1A]/50 font-light">USD</span>
</div>
<p className="text-base text-[#1A1A1A]/60 mb-8 flex-grow font-light leading-relaxed">
                            Para organizaciones que quieren que la IA sea parte central de cómo operan. Cambio estructural real.
                        </p>
<div className="bg-[#F4F1EA] rounded-xl p-5 mb-10 border border-[#1A1A1A]/5">
<p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
<span className="font-semibold text-[#1A1A1A]">Ideal para:</span> empresas con equipos múltiples, liderazgo comprometido con el cambio.
                            </p>
</div>

<a className="group/btn relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden w-full mt-auto" href="#">
<div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/20 to-transparent rounded-full"></div>
<div className="relative bg-white rounded-full px-6 py-4 w-full h-full flex items-center justify-center text-[#1A1A1A] text-sm font-medium transition-colors group-hover/btn:bg-[#F4F1EA]">
                                Hablar con ventas
                            </div>
</a>
</div>
</div>
</div>
<div className="mt-16 text-center anim-element delay-3">
<p className="text-base text-[#1A1A1A]/50 font-light">
                    Todos los planes incluyen el diagnóstico inicial de 60 min ($50 USD, descontable).<br/>
                    Solo trabajamos con 3 empresas nuevas al mes.
                </p>
</div>
</div>
</section>

<section className="py-32 sm:py-48 bg-[#F4F1EA] border-t border-[#1A1A1A]/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="anim-element text-4xl sm:text-5xl tracking-tighter text-[#1A1A1A] text-center mb-24 font-medium" style={{fontFamily: '\'Lora\', serif'}}>
                Empresas que dejaron de picotear.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

<div className="relative p-[1px] rounded-[2rem] overflow-hidden group anim-element">
<div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/10 via-transparent to-transparent"></div>
<div className="relative bg-white p-10 sm:p-12 rounded-[calc(2rem-1px)] h-full flex flex-col">
<iconify-icon className="text-[#FF5A36]/30 mb-8" height="40" icon="solar:chat-round-dots-bold-duotone" width="40"></iconify-icon>
<p className="text-xl text-[#1A1A1A]/80 leading-relaxed mb-10 flex-grow font-light tracking-tight">
                            "En tres semanas, el equipo de ventas redujo en 40% el tiempo de preparación de propuestas. No lo hubiera creído si no lo veo implementado en nuestra propia herramienta."
                        </p>
<div className="flex items-center gap-5 mt-auto">
<img alt="Carlos M." className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
<div>
<p className="text-base font-medium text-[#1A1A1A]">Carlos Mendoza</p>
<p className="text-sm text-[#1A1A1A]/50 font-light">Dir. de Ventas · TechFlow</p>
</div>
</div>
</div>
</div>

<div className="relative p-[1px] rounded-[2rem] overflow-hidden group anim-element delay-1">
<div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/10 via-transparent to-transparent"></div>
<div className="relative bg-white p-10 sm:p-12 rounded-[calc(2rem-1px)] h-full flex flex-col">
<iconify-icon className="text-[#FF5A36]/30 mb-8" height="40" icon="solar:chat-round-dots-bold-duotone" width="40"></iconify-icon>
<p className="text-xl text-[#1A1A1A]/80 leading-relaxed mb-10 flex-grow font-light tracking-tight">
                            "Otros proveedores nos vendieron herramientas genéricas. Chicken AI nos enseñó a pensar diferente y construyó flujos que nuestro equipo usa a diario sin fricción."
                        </p>
<div className="flex items-center gap-5 mt-auto">
<img alt="Laura G." className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
<div>
<p className="text-base font-medium text-[#1A1A1A]">Laura Gómez</p>
<p className="text-sm text-[#1A1A1A]/50 font-light">CEO · Agencia Lumina</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 sm:py-48 bg-[#0F172A] text-white text-center relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20">
<div className="absolute inset-0 rounded-full border border-[#FF5A36]" style={{animation: 'sonar 4s infinite cubic-bezier(0.16, 1, 0.3, 1)'}}></div>
<div className="absolute inset-0 rounded-full border border-[#FF5A36]" style={{animation: 'sonar 4s infinite cubic-bezier(0.16, 1, 0.3, 1) 2s'}}></div>
</div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
<h2 className="anim-element text-5xl sm:text-6xl lg:text-[5.5rem] tracking-tighter leading-[1.05] mb-10 font-medium" style={{fontFamily: '\'Lora\', serif'}}>
                Este mes quedan<br/>
<span className="text-[#FF5A36]">2 cupos</span> disponibles.
            </h2>
<p className="text-xl sm:text-2xl text-white/60 mb-16 max-w-2xl mx-auto leading-relaxed font-light tracking-tight">
                Trabajamos con máximo 3 empresas nuevas por mes. No porque no podamos con más, sino porque así garantizamos el resultado.
            </p>
<div className="anim-element delay-1">

<a className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden w-full sm:w-auto scale-105" href="#contacto">
<div className="absolute inset-0 bg-gradient-to-r from-[#FF5A36] via-[#FF8A66] to-[#FF5A36] rounded-full opacity-90"></div>
<div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#fff_360deg)] rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{animation: 'borderBeam 2.5s linear infinite'}}></div>
<div className="relative bg-[#0F172A] rounded-full px-12 py-6 w-full h-full flex items-center justify-center gap-3 text-white text-lg font-medium transition-colors group-hover:bg-[#1A2438]">
                        Agendar mi diagnóstico de 60 min · $50 USD
                    </div>
</a>
</div>
<p className="mt-8 text-sm text-white/40 font-light anim-element delay-2">
                Descontable si contratas · Sin compromiso · Respuesta en menos de 24h
            </p>
</div>
</section>

<footer className="bg-white py-16 border-t border-[#1A1A1A]/5 relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-10">
<div className="text-center md:text-left flex flex-col items-center md:items-start">
<div className="flex items-center gap-2 mb-2 group">
<iconify-icon className="text-[#1A1A1A] group-hover:text-[#FF5A36] transition-colors" height="24" icon="solar:programming-linear" width="24"></iconify-icon>
<div className="text-xl font-medium tracking-tighter text-[#1A1A1A]" style={{fontFamily: '\'Inter\', sans-serif'}}>
                        Chicken AI.
                    </div>
</div>
<p className="text-sm text-[#1A1A1A]/50 font-light">
                    Formación en inteligencia artificial que sí sirve.
                </p>
</div>
<div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-[#1A1A1A]/70">
<a className="hover:text-[#FF5A36] transition-colors" href="#">Diagnóstico</a>
<a className="hover:text-[#FF5A36] transition-colors" href="#">Planes</a>
<a className="hover:text-[#FF5A36] transition-colors" href="#">Método</a>
<a className="hover:text-[#FF5A36] transition-colors" href="#">Contacto</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-[#1A1A1A]/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#1A1A1A]/40 font-light">
<div>
                © 2025 Chicken AI · <a className="hover:text-[#1A1A1A] transition-colors" href="#">Política de privacidad</a> · <a className="hover:text-[#1A1A1A] transition-colors" href="#">Términos</a>
</div>
<div className="font-medium tracking-widest uppercase">
                Human-First. Siempre.
            </div>
</div>
</footer>



    </>
  );
}
