import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
mono: ['Space Mono', 'monospace'],
}
}
},
plugins: []
};



      // 1. Scroll Reveal Animation
      const revealElements = document.querySelectorAll('.reveal');

      const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if(entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
      });

      revealElements.forEach(el => revealObserver.observe(el));

      // 2. Parallax Effects
      const parallaxBg = document.querySelector('.parallax-bg');
      const parallaxElements = document.querySelectorAll('.parallax-element');
      const footerText = document.getElementById('footer-text');
      const navbar = document.getElementById('navbar');

      window.addEventListener('scroll', () => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;

          if(scrollY > 50) {
              navbar.classList.add('shadow-sm', 'bg-[#Fdfdfc]/90');
          } else {
              navbar.classList.remove('shadow-sm', 'bg-[#Fdfdfc]/90');
          }

          if (parallaxBg) {
              const speed = parseFloat(parallaxBg.dataset.speed) || 0.1;
              parallaxBg.style.transform = `translateY(${scrollY * speed}px)`;
          }

          parallaxElements.forEach(el => {
              const speed = parseFloat(el.dataset.speed) || -0.05;
              el.style.transform = `translateY(${scrollY * speed}px)`;
          });

          if (footerText) {
              const footerPosition = footerText.getBoundingClientRect().top;
              if (footerPosition < windowHeight) {
                  const move = (windowHeight - footerPosition) * 0.1;
                  footerText.style.transform = `translateX(-${move}px)`;
              }
          }
      });

      window.addEventListener('load', () => {
           document.querySelectorAll('.reveal').forEach((el, index) => {
               if(el.getBoundingClientRect().top < window.innerHeight) {
                   setTimeout(() => {
                       el.classList.add('active');
                   }, index * 100);
               }
           });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 md:py-6 w-full max-w-[1800px] mx-auto bg-[#Fdfdfc]/80 backdrop-blur-md transition-all duration-300 border-b border-transparent" id="navbar">
<div className="text-xl font-bold tracking-tight cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-neutral-900"></span>
        Robik.
      </div>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-black transition-colors" href="#soluciones">
          Soluciones
        </a>
<a className="hover:text-black transition-colors" href="#proceso">
          Proceso
        </a>
<a className="hover:text-black transition-colors" href="#contacto">
          Nosotros
        </a>
</div>
<button className="px-5 py-2.5 bg-neutral-900 text-white rounded-full text-xs font-semibold hover:bg-neutral-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-neutral-200/50">
        Hablemos
      </button>
</nav>
<main className="md:px-8 w-full max-w-[1800px] mt-24 mr-auto ml-auto pr-4 pb-20 pl-4">

<section className="pt-10 md:pt-20 pb-12 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
<div className="lg:col-span-7 reveal active">
<div className="flex items-center gap-2 mb-6">
<span className="px-3 py-1 rounded-full border border-neutral-200 bg-white text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                IA para problemas reales
              </span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold tracking-tighter">
              Soluciones de IA
              <br/>
              para tu negocio.
            </h1>
<p className="text-2xl md:text-3xl text-neutral-400 mt-4 tracking-tight font-light">
              Ordena, automatiza y sé más eficiente.
            </p>
</div>
<div className="lg:col-span-5 flex flex-col items-start lg:items-end lg:pl-10 reveal delay-100 active">
<p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-sm lg:text-right font-medium text-pretty">
              Integramos inteligencia artificial en tus procesos clave para que
              tu operación funcione mejor, más rápido y con menos fricción.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group flex items-center gap-3 pl-6 pr-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-xl shadow-neutral-900/10 hover:shadow-neutral-900/20 hover:-translate-y-1">
<span className="text-sm font-semibold">Conoce las soluciones</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="group flex items-center gap-3 pl-6 pr-6 py-3 bg-white border border-neutral-200 text-neutral-900 rounded-full hover:border-neutral-900 transition-all duration-300">
<span className="text-sm font-semibold">Hablemos</span>
</button>
</div>
</div>
</div>

<div className="reveal delay-200 w-full h-[400px] md:h-[650px] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative border border-neutral-200 shadow-sm group active">
<div className="parallax-bg absolute inset-0 w-full h-[120%] -top-[10%]" data-speed="0.05" style={{transform: 'translateY(0px)'}}>

<img alt="Inteligencia Artificial Neural" className="w-full h-full object-cover opacity-95 saturate-[0.8]" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&amp;w=3264&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

<div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl max-w-sm w-full hidden md:block parallax-element border border-white/50" data-speed="-0.03">
<div className="flex justify-between items-center mb-4 border-b border-neutral-100 pb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-bold text-neutral-900">
                    Robik Assistant
                  </h4>
<p className="text-[10px] text-neutral-500 font-medium">
                    Procesando solicitud...
                  </p>
</div>
</div>
<div className="animate-pulse w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
<div className="space-y-3">
<div className="bg-neutral-50 rounded-lg p-3 rounded-tl-none">
<p className="text-[11px] text-neutral-600 leading-relaxed">
                  He analizado los 45 documentos legales. Se detectaron 3
                  cláusulas pendientes de revisión en el contrato Alpha.
                </p>
</div>
<div className="flex gap-2">
<div className="h-1.5 w-16 bg-neutral-200 rounded-full animate-pulse"></div>
<div className="h-1.5 w-8 bg-neutral-200 rounded-full animate-pulse delay-75"></div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-16 opacity-50"></div>

<section className="rounded-[2rem] md:rounded-[3rem] bg-[#111111] text-white p-8 md:p-16 lg:p-24 overflow-hidden relative reveal">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
<div className="flex flex-col justify-center">
<div className="mb-8 flex items-center gap-2 text-neutral-400 text-sm font-medium tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Robik Intelligence
            </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight mb-8">
              ¿Qué hacemos en Robik?
            </h2>
<p className="text-xl md:text-2xl text-neutral-400 max-w-md leading-relaxed mb-8">
              Creamos soluciones de inteligencia artificial que se integran a tu
              operación real.
            </p>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-neutral-300">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:sort-from-top-to-bottom-linear" width="18"></iconify-icon>
</div>
<span className="font-medium">
                  Ordenar información desestructurada
                </span>
</li>
<li className="flex items-center gap-4 text-neutral-300">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:bolt-linear" width="18"></iconify-icon>
</div>
<span className="font-medium">
                  Automatizar procesos repetitivos
                </span>
</li>
<li className="flex items-center gap-4 text-neutral-300">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
</div>
<span className="font-medium">Reducir carga operativa humana</span>
</li>
<li className="flex items-center gap-4 text-neutral-300">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:graph-up-linear" width="18"></iconify-icon>
</div>
<span className="font-medium">Mejorar la toma de decisiones</span>
</li>
</ul>
</div>

<div className="relative mt-8 lg:mt-0 h-full min-h-[400px] flex items-center justify-center">
<div className="relative w-full aspect-square max-w-md">

<div className="absolute inset-0 m-auto w-32 h-32 bg-gradient-to-br from-neutral-800 to-black rounded-2xl border border-neutral-700 flex items-center justify-center z-20 shadow-2xl">
<iconify-icon className="text-white" icon="solar:cpu-linear" width="48"></iconify-icon>
</div>

<div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-12 h-12 bg-neutral-900 border border-neutral-700 rounded-xl flex items-center justify-center">
<iconify-icon className="text-neutral-400" icon="solar:whatsapp-linear"></iconify-icon>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 w-12 h-12 bg-neutral-900 border border-neutral-700 rounded-xl flex items-center justify-center">
<iconify-icon className="text-neutral-400" icon="solar:database-linear"></iconify-icon>
</div>
<div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-neutral-900 border border-neutral-700 rounded-xl flex items-center justify-center">
<iconify-icon className="text-neutral-400" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 w-12 h-12 bg-neutral-900 border border-neutral-700 rounded-xl flex items-center justify-center">
<iconify-icon className="text-neutral-400" icon="solar:chart-2-linear"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 m-auto w-[80%] h-[80%] border border-dashed border-neutral-800 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 m-auto w-[60%] h-[60%] border border-neutral-800 rounded-full"></div>
</div>
<p className="absolute bottom-0 text-center w-full text-xs text-neutral-600 font-mono">
              Desde asistentes en WhatsApp hasta plataformas de gestión.
            </p>
</div>
</div>
</section>

<div className="w-full h-px bg-neutral-200 my-20"></div>

<section className="mt-20 scroll-mt-24" id="soluciones">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">

<div className="md:pr-24 md:border-r border-neutral-200 sticky top-32 self-start reveal">
<div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Especialización
            </div>
<h3 className="md:text-5xl lg:text-5xl leading-tight text-balance text-4xl font-semibold tracking-tighter mb-8">
              No todas las empresas necesitan lo mismo.
            </h3>
<p className="text-xl text-neutral-600 leading-relaxed mb-12">
              Por eso diseñamos soluciones de IA especializadas por industria.
              Cada herramienta está calibrada para resolver los dolores
              específicos de tu sector.
            </p>
<div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
<div className="flex items-start gap-4">
<iconify-icon className="text-neutral-900 mt-1" icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
<div>
<h4 className="font-bold text-sm mb-1">
                    No vendemos IA genérica
                  </h4>
<p className="text-sm text-neutral-500">
                    Diseñamos soluciones prácticas enfocadas en resultados
                    reales: menos carga, más orden.
                  </p>
</div>
</div>
</div>
</div>

<div className="md:pl-24 flex flex-col justify-start">
<ul className="space-y-12 w-full">

<li className="group reveal delay-100">
<div className="block border-b border-neutral-100 pb-12 hover:border-neutral-900 transition-all duration-300">
<div className="flex flex-col gap-6">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono text-neutral-400">01</span>
</div>
<h3 className="text-3xl font-semibold text-neutral-900">
                      Salud / Aseguradoras
                    </h3>
<p className="text-neutral-600 text-lg">
                      IA para atención, seguimiento y eficiencia operativa.
                    </p>
<div className="pl-4 border-l-2 border-neutral-200 space-y-2 mt-2">
<p className="text-sm text-neutral-500">
                        Automatiza la atención por WhatsApp, seguimiento de
                        casos y captura de info.
                      </p>
<ul className="text-sm text-neutral-600 space-y-1 mt-3">
<li className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                          Atención 24/7 a asegurados
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                          Seguimiento de trámites
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                          Registro estructurado de información
                        </li>
</ul>
</div>
<button className="flex items-center gap-2 text-sm font-bold text-neutral-900 hover:gap-4 transition-all mt-4">
                      Ver solución para Salud
                      <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</li>

<li className="group reveal delay-200">
<div className="block border-b border-neutral-100 pb-12 hover:border-neutral-900 transition-all duration-300">
<div className="flex flex-col gap-6">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono text-neutral-400">02</span>
</div>
<h3 className="text-3xl font-semibold text-neutral-900">
                      Turismo
                    </h3>
<p className="text-neutral-600 text-lg">
                      IA como asistente de agentes de viajes.
                    </p>
<div className="pl-4 border-l-2 border-neutral-200 space-y-2 mt-2">
<p className="text-sm text-neutral-500">
                        Un asistente inteligente que acompaña a tus clientes
                        antes, durante y después del viaje.
                      </p>
<ul className="text-sm text-neutral-600 space-y-1 mt-3">
<li className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                          Atención automática por WhatsApp
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                          Info de destinos y reservas
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                          Soporte continuo sin perder el trato humano
                        </li>
</ul>
</div>
<button className="flex items-center gap-2 text-sm font-bold text-neutral-900 hover:gap-4 transition-all mt-4">
                      Ver solución para Turismo
                      <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</li>

<li className="group reveal delay-300">
<div className="block border-b border-neutral-100 pb-12 hover:border-neutral-900 transition-all duration-300">
<div className="flex flex-col gap-6">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-neutral-100 text-neutral-800 flex items-center justify-center mb-4">
<iconify-icon icon="solar:scale-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono text-neutral-400">03</span>
</div>
<h3 className="text-3xl font-semibold text-neutral-900">
                      Legal
                    </h3>
<p className="text-neutral-600 text-lg">
                      IA para gestión y consulta de documentos.
                    </p>
<div className="pl-4 border-l-2 border-neutral-200 space-y-2 mt-2">
<p className="text-sm text-neutral-500">
                        Plataforma web inteligente que organiza documentos y
                        permite consultas en lenguaje natural.
                      </p>
<ul className="text-sm text-neutral-600 space-y-1 mt-3">
<li className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                          Almacenamiento estructurado
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                          Pregunta a la IA sobre contratos
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                          Ahorro de tiempo en búsquedas
                        </li>
</ul>
</div>
<div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded text-xs text-neutral-600 font-medium">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                      No es solo WhatsApp. Es una plataforma legal.
                    </div>
<button className="flex items-center gap-2 text-sm font-bold text-neutral-900 hover:gap-4 transition-all mt-4">
                      Ver solución Legal
                      <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</li>
</ul>
</div>
</div>
</section>

<div className="w-full h-px bg-neutral-200 my-20"></div>

<section className="py-12 md:py-24 relative reveal" id="proceso">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
<div className="max-w-2xl">
<div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Nuestro Proceso
            </div>
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-neutral-900 tracking-tighter">
              IA adaptada a tu negocio,
              <br/>
              no al revés.
            </h2>
</div>
<p className="text-neutral-500 max-w-sm text-right md:text-left">
            Cada solución se construye según tus reglas, tu industria y tu
            operación.
          </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

<div className="bg-neutral-50 rounded-3xl p-8 flex flex-col min-h-[300px] hover:bg-neutral-100 transition-colors duration-300">
<div className="flex items-center justify-between mb-8">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center">
<span className="font-mono font-bold text-neutral-400">1</span>
</div>
<iconify-icon className="text-neutral-400" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-black tracking-tight mb-4">
              Entendemos tu proceso
            </h3>
<p className="text-neutral-500 leading-relaxed">
              Analizamos a fondo cómo opera tu negocio para identificar dónde la
              IA aporta valor real.
            </p>
</div>

<div className="bg-neutral-900 text-white rounded-3xl p-8 flex flex-col min-h-[300px] shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="flex items-center justify-between mb-8">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
<span className="font-mono font-bold text-white">2</span>
</div>
<iconify-icon className="text-neutral-400" icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white tracking-tight mb-4">
              Diseñamos la solución
            </h3>
<p className="text-neutral-400 leading-relaxed">
              Creamos la arquitectura específica, seleccionando las herramientas
              y canales adecuados.
            </p>
</div>

<div className="bg-neutral-50 rounded-3xl p-8 flex flex-col min-h-[300px] hover:bg-neutral-100 transition-colors duration-300">
<div className="flex items-center justify-between mb-8">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center">
<span className="font-mono font-bold text-neutral-400">3</span>
</div>
<iconify-icon className="text-neutral-400" icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-black tracking-tight mb-4">
              Implementamos y acompañamos
            </h3>
<p className="text-neutral-500 leading-relaxed">
              Desplegamos la solución y nos aseguramos de que tu equipo la
              adopte correctamente.
            </p>
</div>
</div>
</section>

<section className="mb-20" id="contacto">
<div className="relative w-full rounded-[2.5rem] bg-[#111111] overflow-hidden px-8 py-20 md:py-32 text-center reveal">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-800/30 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
<h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-none mb-8">
              Encuentra la solución de IA
              <br/>
              para tu negocio.
            </h2>
<p className="text-neutral-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              Robik es una plataforma de soluciones de IA diseñadas para hacer
              más eficiente la operación de distintos sectores.
            </p>
<div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
<button className="px-10 py-4 bg-white text-black rounded-full text-base font-bold hover:bg-neutral-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] min-w-[200px]">
                Conoce las soluciones
              </button>
<button className="px-10 py-4 bg-transparent border border-neutral-700 text-white rounded-full text-base font-semibold hover:border-white transition-all duration-300 min-w-[200px] flex items-center justify-center gap-2">
                Agenda una llamada
                <iconify-icon icon="solar:calendar-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="mt-20 overflow-hidden border-t border-black pt-12 relative">
<div className="w-full overflow-hidden py-10">
<h1 className="text-[12vw] leading-[0.8] uppercase whitespace-nowrap select-none transition-transform duration-75 will-change-transform font-bold text-black tracking-tighter translate-x-0 opacity-10" id="footer-text" style={{transform: 'translateX(-37.65px)'}}>
            ROBIK SYSTEMS INTELLIGENCE
          </h1>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 gap-6 pb-12 reveal px-6">
<div className="flex gap-4">
<a className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center border border-neutral-200 hover:bg-black hover:text-white hover:border-black transition-all duration-300" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="24"></iconify-icon>
</a>
<a className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center border border-neutral-200 hover:bg-black hover:text-white hover:border-black transition-all duration-300" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="24"></iconify-icon>
</a>
</div>
<div className="flex flex-wrap gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-black relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black hover:after:w-full after:transition-all" href="#">
              Soluciones
            </a>
<a className="hover:text-black relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black hover:after:w-full after:transition-all" href="#">
              Nosotros
            </a>
<a className="hover:text-black relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black hover:after:w-full after:transition-all" href="#">
              Contacto
            </a>
</div>
<div className="text-sm font-medium text-neutral-400">
            © 2024 Robik. Todos los derechos reservados.
          </div>
</div>
</section>
</main>


    </>
  );
}
