import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
liv: {
pink: '#e10098',
dark: '#242424',
gray: '#666666',
light: '#f9f9f9',
50: '#fce6f5',
100: '#f6b0df',
200: '#f18ad0',
800: '#7c0054'
}
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
display: ['Montserrat', 'sans-serif'],
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



            document.addEventListener("DOMContentLoaded", () => {
                const sections = [
                    { id: 'desafio', text: 'El Desafío', linkId: 'nav-link-desafio' },
                    { id: 'journey', text: 'Journey Map', linkId: 'nav-link-journey' },
                    { id: 'solucion', text: 'Arquitectura', linkId: 'nav-link-solucion' },
                    { id: 'impacto', text: 'Impacto', linkId: 'nav-link-impacto' }
                ];
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            document.querySelectorAll('.nav-item').forEach(el => {
                                el.classList.remove('bg-white/20', 'font-semibold');
                                el.classList.add('text-white', 'hover:bg-white/10', 'font-medium');
                            });
                            const activeLink = document.getElementById(sections.find(s => s.id === entry.target.id)?.linkId);
                            if (activeLink) {
                                activeLink.classList.remove('hover:bg-white/10', 'font-medium');
                                activeLink.classList.add('text-white', 'bg-white/20', 'font-semibold');
                            }
                        }
                    });
                }, { rootMargin: '-50% 0px -50% 0px' });
                sections.forEach(section => {
                    const el = document.getElementById(section.id);
                    if(el) observer.observe(el);
                });
                document.querySelectorAll('.nav-item').forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const id = link.getAttribute('href').replace('#', '');
                        const element = document.getElementById(id);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                    });
                });

                const translations = {
                    es: {
                        "nav.desafio": "El Desafío",
                        "nav.journey": "Journey",
                        "nav.solucion": "Solución",
                        "nav.impacto": "Impacto",
                        "nav.cta": "Ver Prototipo",
                        "hero.badge": "Case Study · UX/UI Design",
                        "hero.title": "Sistema POS <br><span class='gradient-text'>Omnicanal Liverpool</span>",
                        "hero.subtitle": "Unificando el ecosistema de venta físico y digital en una sola transacción fluida, transformando vendedores en asesores expertos.",
                        "meta.rol": "Rol", "meta.plat": "Plataforma", "meta.dur": "Duración", "meta.imp": "Impacto",
                        "ctx.label": "01. Contexto",
                        "ctx.title": "El Desafío",
                        "ctx.desc": "Liverpool, uno de los retailers más importantes de México, enfrentaba una problemática crítica: su sistema POS fragmentaba la experiencia omnicanal y limitaba severamente las capacidades de sus vendedores.",
                        "prob.title": "El Problema",
                        "prob.desc": "Los vendedores no podían procesar productos físicos y online en una sola transacción. Las ventas mixtas tomaban <span class='text-red-600 font-medium'>~12 minutos</span> y generaban un 60% de abandono. El sistema solo mostraba puntos de lealtad sin historial real del cliente, imposibilitando estrategias de clientelling efectivas.",
                        "opp.title": "La Oportunidad",
                        "opp.desc": "Diseñar un sistema POS omnicanal que unifique <span class='text-amber-600 font-medium'>5 fuentes de inventario</span> (físico local, cross-store, online, marketplace, big ticket) en un carrito inteligente, mientras proporciona datos del cliente en tiempo real para transformar vendedores en asesores personalizados.",
                        "bench.title": "Análisis Competitivo",
                        "method.title": "Metodología de <span class='text-white/70'>Investigación</span>",
                        "method.desc": "Optamos por <span class='font-semibold text-white'>entrevistas en profundidad</span> como técnica principal para obtener datos cualitativos detallados. Definimos perfiles específicos (Junior, Semi-Senior, Senior) para asegurar un análisis representativo de los flujos operativos.",
                        "ins.label": "02. Hallazgos Clave",
                        "ins.title": "Insights de Investigación",
                        "ins.desc": "La investigación reveló tres pain points críticos que estaban generando pérdida de ventas, frustración del cliente y limitando el potencial de los vendedores.",
                        "ins1.title": "Fragmentación Omnicanal",
                        "ins1.desc": "100% de los vendedores no pueden cobrar productos físicos + online en una sola transacción. El proceso actual toma ~12 minutos vs objetivo de 5 minutos, generando 60% de abandono en ventas mixtas.",
                        "ins2.title": "Data Desconectada",
                        "ins2.desc": "El sistema solo muestra puntos y nivel de lealtad. No hay acceso a historial de productos, tallas, wishlist o carrito abandonado. Imposibilita clientelling efectivo y recomendaciones personalizadas.",
                        "ins3.title": "Sistema Lento",
                        "ins3.desc": "20-30 segundos de carga en consultas de inventario. En horas pico con filas de 10-15 personas, la lentitud genera abandono de clientes y frustración extrema en vendedores.",
                        "map.title": "Journey Map Actual",
                        "map.desc": "Mapeo de la experiencia fragmentada del vendedor y cliente en tienda física.",
                        "pers.title": "User Personas",
                        "pers.desc": "Perfiles clave identificados durante la investigación en piso.",
                        "goal.quote": "\"Transformamos el punto de venta en un <span class='text-liv-pink font-semibold'>ecosistema inteligente</span> donde cada vendedor es un asesor personalizado.\"",
                        "goal.stmt": "Diseñar e implementar un sistema POS omnicanal para Liverpool que unifique artículos de múltiples fuentes en un solo carrito y pago, mientras empodera a vendedores con datos del cliente para transformarse en asesores personalizados.",
                        "arch.title": "Arquitectura del Sistema",
                        "wire.title": "Wireflow de Interacción",
                        "wire.desc": "Wireframes de baja fidelidad mostrando el flujo completo del sistema desde login hasta confirmación de venta.",
                        "wire.btn": "Ver Documentación",
                        "imp.title": "Impacto Proyectado",
                        "imp.desc": "Metas a alcanzar en los primeros 12 meses de implementación.",
                        "imp.thanks": "Gracias por tu atención :)",
                        "imp.foot": "© 2024 Liverpool Case Study"
                    },
                    en: {
                        "nav.desafio": "The Challenge",
                        "nav.journey": "Journey Map",
                        "nav.solucion": "Solution",
                        "nav.impacto": "Impact",
                        "nav.cta": "View Prototype",
                        "hero.badge": "Case Study · UX/UI Design",
                        "hero.title": "Liverpool Omnichannel <br><span class='gradient-text'>POS System</span>",
                        "hero.subtitle": "Unifying the physical and digital sales ecosystem into a single fluid transaction, transforming salespeople into expert advisors.",
                        "meta.rol": "Role", "meta.plat": "Platform", "meta.dur": "Duration", "meta.imp": "Impact",
                        "ctx.label": "01. Context",
                        "ctx.title": "The Challenge",
                        "ctx.desc": "Liverpool, one of Mexico's largest retailers, faced a critical issue: its POS system fragmented the omnichannel experience and severely limited its salespeople's capabilities.",
                        "prob.title": "The Problem",
                        "prob.desc": "Salespeople could not process physical and online products in a single transaction. Mixed sales took <span class='text-red-600 font-medium'>~12 minutes</span> and caused 60% abandonment. The system only showed loyalty points without real customer history, making effective clienteling impossible.",
                        "opp.title": "The Opportunity",
                        "opp.desc": "Design an omnichannel POS system that unifies <span class='text-amber-600 font-medium'>5 inventory sources</span> (local physical, cross-store, online, marketplace, big ticket) into a smart cart, while providing real-time customer data to transform salespeople into personalized advisors.",
                        "bench.title": "Competitive Analysis",
                        "method.title": "Research <span class='text-white/70'>Methodology</span>",
                        "method.desc": "We opted for <span class='font-semibold text-white'>in-depth interviews</span> as the main technique to obtain detailed qualitative data. We defined specific profiles (Junior, Semi-Senior, Senior) to ensure a representative analysis of operational flows.",
                        "ins.label": "02. Key Findings",
                        "ins.title": "Research Insights",
                        "ins.desc": "Research revealed three critical pain points that were causing lost sales, customer frustration, and limiting salesperson potential.",
                        "ins1.title": "Omnichannel Fragmentation",
                        "ins1.desc": "100% of salespeople cannot charge for physical + online products in a single transaction. The current process takes ~12 minutes vs 5-minute target, generating 60% abandonment in mixed sales.",
                        "ins2.title": "Disconnected Data",
                        "ins2.desc": "The system only shows points and loyalty level. No access to product history, sizes, wishlist, or abandoned cart. Makes effective clienteling and personalized recommendations impossible.",
                        "ins3.title": "Slow System",
                        "ins3.desc": "20-30 seconds load time on inventory queries. During peak hours with lines of 10-15 people, slowness causes customer abandonment and extreme frustration for salespeople.",
                        "map.title": "Current Journey Map",
                        "map.desc": "Mapping the fragmented experience of the salesperson and customer in the physical store.",
                        "pers.title": "User Personas",
                        "pers.desc": "Key profiles identified during floor research.",
                        "goal.quote": "\"We transform the point of sale into an <span class='text-liv-pink font-semibold'>intelligent ecosystem</span> where every salesperson is a personalized advisor.\"",
                        "goal.stmt": "Design and implement an omnichannel POS system for Liverpool that unifies items from multiple sources into a single cart and payment, while empowering salespeople with customer data to become personalized advisors.",
                        "arch.title": "System Architecture",
                        "wire.title": "Interaction Wireflow",
                        "wire.desc": "Low-fidelity wireframes showing the full system flow from login to sale confirmation.",
                        "wire.btn": "View Documentation",
                        "imp.title": "Projected Impact",
                        "imp.desc": "Goals to be achieved in the first 12 months of implementation.",
                        "imp.thanks": "Thanks for watching :)",
                        "imp.foot": "© 2024 Liverpool Case Study"
                    }
                };
                const langToggleBtn = document.getElementById('lang-toggle-btn');
                const langToggleCircle = document.getElementById('lang-toggle-circle');
                const langTextEs = document.getElementById('lang-text-es');
                const langTextEn = document.getElementById('lang-text-en');
                let currentLang = 'es';
                const updateLanguage = (lang) => {
                    document.querySelectorAll('[data-i18n]').forEach(el => {
                        const key = el.getAttribute('data-i18n');
                        if (translations[lang][key]) el.innerHTML = translations[lang][key];
                    });
                };
                langToggleBtn.addEventListener('click', () => {
                    if (currentLang === 'es') {
                        currentLang = 'en';
                        langToggleCircle.style.transform = 'translateX(100%)';
                        langTextEs.classList.replace('text-white', 'text-white/40');
                        langTextEn.classList.replace('text-white/40', 'text-white');
                    } else {
                        currentLang = 'es';
                        langToggleCircle.style.transform = 'translateX(0)';
                        langTextEn.classList.replace('text-white', 'text-white/40');
                        langTextEs.classList.replace('text-white/40', 'text-white');
                    }
                    updateLanguage(currentLang);
                });
            });
          


                    (function() {
                        const btn = document.getElementById('lang-toggle-btn');
                        const txt = document.getElementById('osvaldo-role-text');
                        if(btn && txt) {
                            btn.addEventListener('click', function() {
                                // Toggle text based on current content detection
                                const isSpanish = txt.textContent.includes('Vendedor');
                                txt.textContent = isSpanish ? 'Semi-Senior Salesperson' : 'Vendedor Semi-Senior';
                            });
                        }
                    })();
                  


      document.addEventListener('DOMContentLoaded', () => {
          const counters = document.querySelectorAll('.counter');

          const animateCounter = (counter) => {
              const target = +counter.getAttribute('data-target');
              const count = +counter.innerText;
              const increment = target / 50; // Speed adjustment

              if (count < target) {
                  counter.innerText = Math.ceil(count + increment);
                  setTimeout(() => animateCounter(counter), 30);
              } else {
                  counter.innerText = target;
              }
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      const counter = entry.target;
                      animateCounter(counter);
                      observer.unobserve(counter);
                  }
              });
          }, { threshold: 0.5 });

          counters.forEach(counter => observer.observe(counter));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed flex transition-all duration-300 z-50 bg-black/5 pt-6 pr-4 pb-6 pl-4 top-0 right-0 left-0 backdrop-blur-md justify-center">
<div className="bg-liv-dark/90 backdrop-blur-xl border border-white/10 rounded-full pl-6 pr-2 py-2.5 w-full max-w-4xl flex items-center justify-between shadow-2xl ring-1 ring-black/5">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-liv-pink to-liv-800 flex items-center justify-center text-white shadow-lg shadow-liv-pink/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="" icon="solar:bag-smile-linear" strokeWidth="2" width="16"></iconify-icon>
</div>
<span className="font-display text-sm font-semibold text-white tracking-tight hidden sm:block" id="nav-logo-text">
            Liverpool POS
          </span>
</a>

<div className="hidden md:flex gap-1 gap-x-1 gap-y-1 items-center">
<a className="nav-item px-4 py-1.5 text-xs rounded-full transition-all text-white" data-i18n="nav.desafio" href="#desafio" id="nav-link-desafio">
            El Desafío
          </a>
<a className="nav-item px-4 py-1.5 text-xs rounded-full transition-all text-white" data-i18n="nav.journey" href="#journey" id="nav-link-journey">
            Journey
          </a>
<a className="nav-item px-4 py-1.5 text-xs rounded-full transition-all text-white" data-i18n="nav.solucion" href="#solucion" id="nav-link-solucion">
            Solución
          </a>
<a className="nav-item px-4 py-1.5 text-xs rounded-full transition-all text-white" data-i18n="nav.impacto" href="#impacto" id="nav-link-impacto">
            Impacto
          </a>

</div>

<div className="flex items-center gap-4">

<div className="flex items-center gap-2 mr-1">
<span className="text-[10px] font-bold text-white transition-colors duration-300" id="lang-text-es">
              ES
            </span>
<button className="w-9 h-5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-liv-pink/50 cursor-pointer shadow-inner" id="lang-toggle-btn">
<div className="absolute left-0.5 top-0.5 w-3.5 h-3.5 bg-liv-pink rounded-full transition-transform duration-300 shadow-sm border border-white/20" id="lang-toggle-circle"></div>
</button>
<span className="text-[10px] font-bold text-white/40 transition-colors duration-300" id="lang-text-en">
              EN
            </span>
</div>
<button className="md:hidden text-gray-300 hover:text-white p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
<button className="hover:bg-[#c90087] transition-all flex gap-2 group text-xs font-semibold text-white border-white/10 border rounded-full pt-2 pr-5 pb-2 pl-5 shadow-[0_0_20px_rgba(225,0,152,0.3)] gap-x-2 gap-y-2 items-center" onclick="window.open('https://www.figma.com/proto/8A9fxAQeHxOUwfTuwMtqNG/Liverpool-POS---Prueba?page-id=0%3A1&amp;node-id=4-151&amp;p=f&amp;viewport=-1090%2C378%2C0.17&amp;t=gBFKqq2ivIz79Y27-1&amp;scaling=scale-down&amp;content-scaling=fixed&amp;starting-point-node-id=1%3A8954', '_blank')">
<span className="" data-i18n="nav.cta" id="nav-cta-text">
              Ver Prototipo
            </span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

<div className="bg-gradient-to-bl from-liv-50 to-transparent opacity-60 w-2/3 h-full rounded-bl-[10rem] absolute top-0 right-0"></div>
<div className="bg-gradient-to-tr from-liv-50 to-transparent opacity-40 w-1/3 h-2/3 rounded-tr-full absolute bottom-0 left-0"></div>
<div className="container z-10 animate-fade-in-up text-center mr-auto ml-auto pt-20 pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-liv-50 text-liv-pink text-xs font-semibold tracking-widest uppercase mb-8 border border-liv-100" data-i18n="hero.badge">
          Case Study · UX/UI Design
        </div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-liv-dark leading-[1.1] mb-8" data-i18n="hero.title">
          Sistema POS
          <br/>
<span className="gradient-text">Omnicanal Liverpool</span>
</h1>
<p className="text-lg md:text-2xl text-liv-gray font-light max-w-3xl mx-auto leading-relaxed mb-12" data-i18n="hero.subtitle">
          Unificando el ecosistema de venta físico y digital en una sola
          transacción fluida, transformando vendedores en asesores expertos.
        </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-gray-100 pt-10">
<div className="text-center">
<p className="text-xs uppercase tracking-widest text-liv-gray mb-2" data-i18n="meta.rol">
              Rol
            </p>
<p className="text-liv-dark font-semibold">Lead Product Designer</p>
</div>
<div className="text-center">
<p className="text-xs uppercase tracking-widest text-liv-gray mb-2" data-i18n="meta.plat">
              Plataforma
            </p>
<p className="text-liv-dark font-semibold">iPad OS / Tablet</p>
</div>
<div className="text-center">
<p className="text-xs uppercase tracking-widest text-liv-gray mb-2" data-i18n="meta.dur">
              Duración
            </p>
<p className="text-liv-dark font-semibold">3 Meses</p>
</div>
<div className="text-center">
<p className="text-xs uppercase tracking-widest text-liv-gray mb-2" data-i18n="meta.imp">
              Impacto
            </p>
<p className="text-liv-pink font-semibold">
              +
              <span className="counter" data-target="25">25</span>
              % Ticket Promedio
            </p>
</div>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-liv-pink opacity-50">
<iconify-icon icon="solar:mouse-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</header>

<section className="pt-24 pb-24" id="desafio">
<div className="container mx-auto px-6 max-w-6xl">
<div className="flex flex-col gap-12 w-full gap-x-12 gap-y-12">

<div className="text-center max-w-4xl mx-auto px-4">
<span className="text-red-600 font-bold tracking-[0.2em] text-xs uppercase mb-6 block" data-i18n="ctx.label">
              01. Contexto
            </span>
<h2 className="font-playfair text-5xl md:text-6xl font-semibold text-gray-900 mb-8 tracking-tight" data-i18n="ctx.title">
              El Desafío
            </h2>
<p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto" data-i18n="ctx.desc">
              Liverpool, uno de los retailers más importantes de México,
              enfrentaba una problemática crítica: su sistema POS fragmentaba la
              experiencia omnicanal y limitaba severamente las capacidades de
              sus vendedores.
            </p>
</div>

<div className="grid md:grid-cols-2 gap-8 w-full mt-4">

<div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group h-full">
<div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="" height="28" icon="lucide:target" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="font-playfair text-3xl font-semibold text-gray-900 mb-5 tracking-tight" data-i18n="prob.title">
                El Problema
              </h3>
<p className="text-gray-500 text-base leading-relaxed" data-i18n="prob.desc">
                Los vendedores no podían procesar productos físicos y online en
                una sola transacción. Las ventas mixtas tomaban
                <span className="text-red-600 font-medium">~12 minutos</span>
                y generaban un 60% de abandono. El sistema solo mostraba puntos
                de lealtad sin historial real del cliente, imposibilitando
                estrategias de clientelling efectivas.
              </p>
</div>

<div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group h-full">
<div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="" height="28" icon="lucide:lightbulb" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="font-playfair text-3xl font-semibold text-gray-900 mb-5 tracking-tight" data-i18n="opp.title">
                La Oportunidad
              </h3>
<p className="text-gray-500 text-base leading-relaxed" data-i18n="opp.desc">
                Diseñar un sistema POS omnicanal que unifique
                <span className="text-amber-600 font-medium">
                  5 fuentes de inventario
                </span>
                (físico local, cross-store, online, marketplace, big ticket) en
                un carrito inteligente, mientras proporciona datos del cliente
                en tiempo real para transformar vendedores en asesores
                personalizados.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white pt-24 pb-24">
<div className="container max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="section-header text-center mb-16">
<span className="text-liv-pink font-semibold tracking-widest text-xs uppercase mb-3 block">
            Benchmarking
          </span>
<h2 className="md:text-4xl text-liv-dark text-3xl font-semibold tracking-tight font-display" data-i18n="bench.title">
            Análisis Competitivo
          </h2>
</div>
<div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-100 mb-12">
<table className="w-full text-left border-collapse min-w-[900px]">
<thead className="">
<tr className="bg-[#d92323] text-white">
<th className="text-sm font-semibold tracking-wide w-1/4 pt-5 pr-5 pb-5 pl-5">
                  Capacidad
                </th>
<th className="p-5 font-semibold text-sm tracking-wide text-center">
                  Liverpool
                </th>
<th className="p-5 font-semibold text-sm tracking-wide text-center">
                  Palacio
                </th>
<th className="p-5 font-semibold text-sm tracking-wide text-center">
                  Suburbia
                </th>
<th className="p-5 font-semibold text-sm tracking-wide text-center">
                  Coppel
                </th>
<th className="text-sm font-semibold tracking-wide text-center pt-5 pr-5 pb-5 pl-5">
                  Amazon MX
                </th>
<th className="text-sm font-semibold tracking-wide text-center pt-5 pr-5 pb-5 pl-5">
                  Zara
                </th>
</tr>
</thead>
<tbody className="text-sm text-liv-dark bg-white">

<tr className="border-b border-gray-100 hover:bg-gray-50">
<td className="font-semibold text-gray-800 pt-5 pr-5 pb-5 pl-5">
                  Carrito Físico+Online Unificado
                </td>
<td className="p-5 text-center">
<iconify-icon className="text-red-600" icon="lucide:x" strokeWidth="3" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-red-600" icon="lucide:x" strokeWidth="3" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-red-600" icon="lucide:x" strokeWidth="3" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-green-500" icon="solar:check-square-bold" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-green-500" icon="solar:check-square-bold" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-green-500" icon="solar:check-square-bold" width="24"></iconify-icon>
</td>
</tr>

<tr className="border-b border-gray-100 hover:bg-gray-50">
<td className="p-5 font-semibold text-gray-800">
                  Inventario en Tiempo Real
                </td>
<td className="p-5 text-center">
<iconify-icon className="text-red-600" icon="lucide:x" strokeWidth="3" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-yellow-400" icon="lucide:alert-triangle" strokeWidth="2.5" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-green-500" icon="solar:check-square-bold" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-green-500" icon="solar:check-square-bold" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-green-500" icon="solar:check-square-bold" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-green-500" icon="solar:check-square-bold" width="24"></iconify-icon>
</td>
</tr>

<tr className="border-b border-gray-100 hover:bg-gray-50">
<td className="p-5 font-semibold text-gray-800">
                  Ve Carrito Abandonado Web
                </td>
<td className="p-5 text-center">
<iconify-icon className="text-red-600" icon="lucide:x" strokeWidth="3" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-red-600" icon="lucide:x" strokeWidth="3" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-red-600" icon="lucide:x" strokeWidth="3" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-yellow-400" icon="lucide:alert-triangle" strokeWidth="2.5" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-green-500" icon="solar:check-square-bold" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-red-600" icon="lucide:x" strokeWidth="3" width="24"></iconify-icon>
</td>
</tr>

<tr className="border-b border-gray-100 hover:bg-gray-50">
<td className="p-5 font-semibold text-gray-800">
                  Recomendaciones IA
                </td>
<td className="p-5 text-center">
<iconify-icon className="text-red-600" icon="lucide:x" strokeWidth="3" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-red-600" icon="lucide:x" strokeWidth="3" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-red-600" icon="lucide:x" strokeWidth="3" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-yellow-400" icon="lucide:alert-triangle" strokeWidth="2.5" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-green-500" icon="solar:check-square-bold" width="24"></iconify-icon>
</td>
<td className="p-5 text-center">
<iconify-icon className="text-green-500" icon="solar:check-square-bold" width="24"></iconify-icon>
</td>
</tr>

<tr className="hover:bg-gray-50">
<td className="p-5 font-semibold text-gray-800">
                  Tiempo de Checkout
                </td>
<td className="p-5 text-center font-medium text-gray-700">
                  6.5min
                </td>
<td className="p-5 text-center font-medium text-gray-700">
                  5-7min
                </td>
<td className="p-5 text-center font-medium text-gray-700">
                  5-6min
                </td>
<td className="p-5 text-center font-medium text-gray-700">
                  4-5min
                </td>
<td className="p-5 text-center font-medium text-gray-700">
                  2-3min
                </td>
<td className="p-5 text-center font-medium text-gray-700">
                  2-3min
                </td>
</tr>
</tbody>
</table>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-yellow-400 hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-yellow-500" icon="lucide:trophy" width="20"></iconify-icon>
<h3 className="text-lg font-bold text-gray-900 tracking-tight">
                Zara (Best-in-Class)
              </h3>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
              RFID 100% de items con inventario 98% preciso en &lt; 1min. IOP
              platform unifica todos los canales. Big Data permite diseño →
              producción en 10-15 días vs 150 días industria.
            </p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-yellow-400 hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-yellow-500" icon="lucide:medal" width="20"></iconify-icon>
<h3 className="text-lg font-bold text-gray-900 tracking-tight">
                Coppel (Líder Nacional)
              </h3>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
              1,800 tiendas con OMS integrado. BanCoppel permite identificación
              de cliente al inicio. CRM robusto con historial de 10+ años.
              Precio único cross-channel.
            </p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-yellow-400 hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-yellow-500" icon="lucide:lightbulb" width="20"></iconify-icon>
<h3 className="text-lg font-bold text-gray-900 tracking-tight">
                Amazon (Digital Benchmark)
              </h3>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
              ML Recommendations generan 35% de ventas. Checkout 2-3 min (3x más
              rápido que Liverpool). UX: cada $1 invertido retorna $100 en
              experiencia.
            </p>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-0">
<div className="container max-w-6xl mr-auto ml-auto pt-24 pr-6 pb-0 pl-6">

<div className="overflow-hidden shadow-pink-900/20 md:p-14 group isolate text-white bg-gradient-to-br from-[#ec4eb5] via-[#ce2d94] to-[#8f1966] ring-white/20 ring-1 rounded-3xl mb-24 pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
<div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-b from-white/20 to-transparent rounded-full blur-3xl pointer-events-none mix-blend-soft-light transition-transform duration-1000 group-hover:scale-105"></div>
<div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

<div className="lg:w-5/12 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-widest text-white/90 backdrop-blur-sm shadow-inner">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
                Discovery Phase
              </div>
<h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-white drop-shadow-sm" data-i18n="method.title">
                Metodología de
                <span className="text-white/70">Investigación</span>
</h2>
<p className="text-lg text-white/90 leading-relaxed font-light font-manrope max-w-lg" data-i18n="method.desc">
                Optamos por
                <span className="font-semibold text-white">
                  entrevistas en profundidad
                </span>
                como técnica principal para obtener datos cualitativos
                detallados. Definimos perfiles específicos (Junior, Semi-Senior,
                Senior) para asegurar un análisis representativo de los flujos
                operativos.
              </p>

<div className="flex flex-wrap gap-3 pt-2">
<div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white/80 flex items-center gap-2">
<iconify-icon className="text-green-400" icon="lucide:check-circle" width="14"></iconify-icon>
                  Guión Estructurado
                </div>
<div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white/80 flex items-center gap-2">
<iconify-icon className="text-green-400" icon="lucide:check-circle" width="14"></iconify-icon>
                  Datos Cualitativos
                </div>
</div>
</div>

<div className="lg:w-7/12 w-full">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="md:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 hover:bg-white/15 transition-all duration-300 shadow-lg group/card relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/card:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
<div className="space-y-2 text-center md:text-left relative z-10">
<span className="font-playfair text-6xl md:text-7xl font-semibold tracking-tighter block bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                      12
                    </span>
<div className="space-y-1">
<p className="text-lg font-semibold text-white">
                        Entrevistas Profundas
                      </p>
<p className="text-sm text-white/60">
                        Vendedores Junior, Semi-Senior y Senior
                      </p>
</div>
</div>
<div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white/90 group-hover/card:scale-110 group-hover/card:-rotate-3 transition-transform duration-500 shadow-inner relative z-10">
<iconify-icon icon="lucide:message-square-dashed" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>

<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 group/card flex flex-col justify-between h-48">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/80">
<iconify-icon icon="lucide:eye" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-white/40 uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded">
                      Field
                    </span>
</div>
<div className="">
<span className="font-playfair text-5xl font-semibold tracking-tighter block mb-1">
                      06
                    </span>
<p className="text-sm font-medium text-white/80 leading-snug">
                      Sesiones de observación en piso
                    </p>
</div>
</div>

<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 group/card flex flex-col justify-between h-48">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/80">
<iconify-icon icon="lucide:layers" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-white/40 uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded">
                      Bench
                    </span>
</div>
<div>
<span className="font-playfair text-5xl font-semibold tracking-tighter block mb-1">
                      05
                    </span>
<p className="text-sm font-medium text-white/80 leading-snug">
                      Sistemas POS competitivos analizados
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</section>
<section className="pt-0 pb-24" id="journey">
<div className="container max-w-6xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">

<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-red-600 font-bold tracking-[0.2em] text-xs uppercase mb-5 block" data-i18n="ins.label">
            02. Hallazgos Clave
          </span>
<h2 className="font-playfair text-4xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight" data-i18n="ins.title">
            Insights de Investigación
          </h2>
<p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto" data-i18n="ins.desc">
            La investigación reveló tres pain points críticos que estaban
            generando pérdida de ventas, frustración del cliente y limitando el
            potencial de los vendedores.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-32">

<div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start">
<span className="inline-block bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-8">
              Crítico
            </span>
<div className="mb-6">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-inner relative flex items-center justify-center">
<div className="absolute top-2 left-3 w-4 h-3 bg-white opacity-20 blur-[2px] rounded-full rotate-45"></div>
</div>
</div>
<h3 className="font-display text-xl font-bold text-gray-900 mb-4 tracking-tight" data-i18n="ins1.title">
              Fragmentación Omnicanal
            </h3>
<p className="text-gray-500 text-sm leading-relaxed" data-i18n="ins1.desc">
              100% de los vendedores no pueden cobrar productos físicos + online
              en una sola transacción. El proceso actual toma ~12 minutos vs
              objetivo de 5 minutos, generando 60% de abandono en ventas mixtas.
            </p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start">
<span className="inline-block bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-8">
              Crítico
            </span>
<div className="mb-6">
<svg className="text-gray-400" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<rect className="" fill="#3b82f6" height="16" rx="1" stroke="none" width="4" x="16" y="4"></rect>
<rect className="" fill="#22c55e" height="10" rx="1" stroke="none" width="4" x="10" y="10"></rect>
<rect fill="#ef4444" height="6" rx="1" stroke="none" width="4" x="4" y="14"></rect>
</svg>
</div>
<h3 className="font-display text-xl font-bold text-gray-900 mb-4 tracking-tight" data-i18n="ins2.title">
              Data Desconectada
            </h3>
<p className="text-gray-500 text-sm leading-relaxed" data-i18n="ins2.desc">
              El sistema solo muestra puntos y nivel de lealtad. No hay acceso a
              historial de productos, tallas, wishlist o carrito abandonado.
              Imposibilita clientelling efectivo y recomendaciones
              personalizadas.
            </p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start">
<span className="inline-block bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-8">
              Crítico
            </span>
<div className="mb-6">
<svg className="text-gray-500" fill="none" height="48" stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<line x1="10" x2="14" y1="2" y2="2"></line>
<line x1="12" x2="15" y1="14" y2="11"></line>
<circle cx="12" cy="14" fill="#f3f4f6" fillOpacity="0.5" r="8"></circle>
</svg>
</div>
<h3 className="font-display text-xl font-bold text-gray-900 mb-4 tracking-tight" data-i18n="ins3.title">
              Sistema Lento
            </h3>
<p className="text-gray-500 text-sm leading-relaxed" data-i18n="ins3.desc">
              20-30 segundos de carga en consultas de inventario. En horas pico
              con filas de 10-15 personas, la lentitud genera abandono de
              clientes y frustración extrema en vendedores.
            </p>
</div>
</div>

<div className="md:px-16 overflow-hidden bg-gray-50 border-gray-100 border rounded-[2.5rem] pt-20 pr-6 pb-24 pl-6 relative shadow-sm">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white rounded-full blur-3xl opacity-60 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white rounded-full blur-3xl opacity-60 pointer-events-none"></div>

<div className="text-center mb-16 relative z-10">
<span className="text-liv-pink font-medium tracking-widest text-xs uppercase mb-3 block">
              Investigación
            </span>
<h2 className="font-display text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tight" data-i18n="map.title">
              Journey Map Actual
            </h2>
<p className="text-gray-500 text-lg font-light max-w-2xl mx-auto" data-i18n="map.desc">
              Mapeo de la experiencia fragmentada del vendedor y cliente en
              tienda física.
            </p>
</div>

<div className="relative mb-32 z-10">

<div className="hidden lg:block absolute top-[2.25rem] left-0 w-full h-[2px] bg-pink-100 -z-10 rounded-full"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 gap-y-12">

<div className="relative group">
<div className="w-20 h-20 bg-white border-4 border-white rounded-full shadow-[0_0_0_1px_rgba(229,231,235,1)] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 z-10 relative">
<svg className="lucide lucide-search" fill="none" height="24" stroke="#e10098" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm h-full relative group-hover:border-pink-200 transition-all">
<div className="absolute -top-3 right-3 text-2xl bg-white rounded-full shadow-sm px-1 py-0.5" title="Neutral">
                    😐
                  </div>
<h4 className="font-semibold text-gray-900 mb-3 text-sm">
                    1. Descubrimiento
                  </h4>
<div className="space-y-3 text-xs leading-relaxed text-gray-500">
<p className="">
                      Entra con intención de compra online en mente.
                    </p>
<p className="">Ciegas total. No sabe historial.</p>
<div className="pt-2 border-t border-gray-100 mt-2">
<span className="text-[10px] uppercase font-semibold text-red-500 tracking-wider">
                        Pain Point
                      </span>
<p className="text-gray-600">Anonimato total.</p>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="w-20 h-20 bg-white border-4 border-white rounded-full shadow-[0_0_0_1px_rgba(229,231,235,1)] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 z-10 relative">
<svg className="lucide lucide-message-circle" fill="none" height="24" stroke="#e10098" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
</svg>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm h-full relative group-hover:border-pink-200 transition-all">
<div className="absolute -top-3 right-3 text-2xl bg-white rounded-full shadow-sm px-1 py-0.5" title="Confundido">
                    😕
                  </div>
<h4 className="font-semibold text-gray-900 mb-3 text-sm">
                    2. Abordaje
                  </h4>
<div className="space-y-3 text-xs leading-relaxed text-gray-500">
<p className="">Repite info que ya dio en web.</p>
<p className="">Toma notas mentales/papel.</p>
<div className="pt-2 border-t border-gray-100 mt-2">
<span className="text-[10px] uppercase font-semibold text-orange-500 tracking-wider">
                        Ineficiencia
                      </span>
<p className="text-gray-600">Duplicidad de esfuerzo.</p>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="w-20 h-20 bg-white border-4 border-white rounded-full shadow-[0_0_0_4px_#e10098] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 z-10 relative">
<svg className="lucide lucide-server" fill="none" height="24" stroke="#e10098" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect className="" height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
</div>
<div className="bg-red-50 p-5 rounded-xl border border-red-100 shadow-sm h-full relative">
<div className="absolute -top-3 right-3 text-2xl bg-white rounded-full shadow-sm px-1 py-0.5" title="Esperando/Lento">
                    ⏳
                  </div>
<h4 className="font-semibold text-gray-900 mb-3 text-sm">
                    3. Consulta
                  </h4>
<div className="space-y-3 text-xs leading-relaxed text-gray-600">
<p className="">Lento (30s). Solo inventario físico.</p>
<p className="">Promete stock fantasma.</p>
<div className="pt-2 border-t border-red-200/60 mt-2">
<span className="text-[10px] uppercase font-semibold text-red-600 tracking-wider">
                        Crítico
                      </span>
<p className="text-gray-700 font-medium">
                        Datos desactualizados (24h).
                      </p>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="w-20 h-20 bg-white border-4 border-white rounded-full shadow-[0_0_0_1px_rgba(229,231,235,1)] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 z-10 relative">
<svg className="lucide lucide-id-card" fill="none" height="24" stroke="#e10098" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10h2"></path>
<path d="M16 14h2"></path>
<path d="M6.17 15a3 3 0 0 1 5.66 0"></path>
<circle cx="9" cy="11" r="2"></circle>
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
</svg>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm h-full relative group-hover:border-pink-200 transition-all">
<div className="absolute -top-3 right-3 text-2xl bg-white rounded-full shadow-sm px-1 py-0.5" title="Frustrado">
                    🙄
                  </div>
<h4 className="font-semibold text-gray-900 mb-3 text-sm">
                    4. Login
                  </h4>
<div className="space-y-3 text-xs leading-relaxed text-gray-500">
<p className="">Solo muestra puntos y nivel.</p>
<p className="">Cero Clientelling.</p>
<div className="pt-2 border-t border-gray-100 mt-2">
<span className="text-[10px] uppercase font-semibold text-orange-500 tracking-wider">
                        Frustración
                      </span>
<p className="text-gray-600">Sin historial de gustos.</p>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="w-20 h-20 bg-white border-4 border-white rounded-full shadow-[0_0_0_1px_rgba(229,231,235,1)] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 z-10 relative">
<svg className="lucide lucide-shopping-cart" fill="none" height="24" stroke="#e10098" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="21" r="1"></circle>
<circle cx="19" cy="21" r="1"></circle>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
</svg>
</div>
<div className="bg-red-50 p-5 rounded-xl border border-red-100 shadow-sm h-full relative">
<div className="-top-3 text-2xl bg-white rounded-full pt-0.5 pr-1 pb-0.5 pl-1 absolute right-3 shadow-sm" title="Enojado">
                    🤨
                  </div>
<h4 className="font-semibold text-gray-900 mb-3 text-sm">
                    5. Checkout
                  </h4>
<div className="leading-relaxed text-xs text-gray-600 space-y-3">
<p className="">No puede mezclar Físico + Online.</p>
<p className="">Debe pagar 2 veces.</p>
<div className="pt-2 border-t border-red-200/60 mt-2">
<span className="text-[10px] uppercase font-semibold text-red-600 tracking-wider">
                        Fricción Máxima
                      </span>
<p className="text-gray-700 font-medium">
                        60% Abandono aquí.
                      </p>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="w-20 h-20 bg-white border-4 border-white rounded-full shadow-[0_0_0_1px_rgba(229,231,235,1)] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 z-10 relative">
<svg className="lucide lucide-frown" fill="none" height="24" stroke="#e10098" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
<line x1="9" x2="9.01" y1="9" y2="9"></line>
<line x1="15" x2="15.01" y1="9" y2="9"></line>
</svg>
</div>
<div className="bg-gray-50/50 p-5 rounded-xl border border-gray-100 shadow-sm h-full relative group-hover:border-gray-300 transition-all">
<div className="absolute -top-3 right-3 text-2xl bg-white rounded-full shadow-sm px-1 py-0.5" title="Decepcionado">
                    😞
                  </div>
<h4 className="font-semibold text-gray-900 mb-3 text-sm">
                    6. Post-Venta
                  </h4>
<div className="space-y-3 text-xs leading-relaxed text-gray-500">
<p>Venta incompleta o perdida.</p>
<p>Impacto negativo.</p>
<div className="pt-2 border-t border-gray-200 mt-2">
<span className="text-[10px] uppercase font-semibold text-gray-500 tracking-wider">
                        Desenlace
                      </span>
<p className="text-gray-700">Cliente insatisfecho.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="z-10 border-gray-200 border-t pt-24 relative">
<div className="text-center mb-16">
<span className="text-liv-pink font-medium tracking-widest text-xs uppercase mb-3 block">
                Arquetipos
              </span>
<h2 className="md:text-5xl text-4xl font-medium text-gray-900 tracking-tight font-display mb-4" data-i18n="pers.title">
                User Personas
              </h2>
<p className="text-gray-500 text-lg font-light max-w-2xl mx-auto" data-i18n="pers.desc">
                Perfiles clave identificados durante la investigación en piso.
              </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300 group">
<div className="h-40 bg-gradient-to-br from-[#7c3aed] to-[#6366f1] p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">

<div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
<svg className="drop-shadow-lg" fill="url(#star-grad-1)" height="48" stroke="none" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="star-grad-1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#d97706', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<h3 className="text-white font-display text-2xl font-bold tracking-tight">
                    Andrea López
                  </h3>
<p className="text-white/90 text-sm font-medium">
                    Vendedora Junior
                  </p>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="grid grid-cols-2 gap-3 mb-8">
<div className="bg-gray-50 p-3 rounded-xl">
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
                        Edad
                      </div>
<div className="text-gray-900 font-semibold">23 años</div>
</div>
<div className="bg-gray-50 p-3 rounded-xl">
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
                        Experiencia
                      </div>
<div className="text-gray-900 font-semibold">8 meses</div>
</div>
<div className="bg-gray-50 p-3 rounded-xl">
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
                        Educación
                      </div>
<div className="text-gray-900 font-semibold">Universidad</div>
</div>
<div className="bg-gray-50 p-3 rounded-xl">
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
                        Tech Comfort
                      </div>
<div className="text-gray-900 font-semibold">8/10</div>
</div>
</div>
<div className="mt-auto">
<div className="flex items-center gap-2 mb-4">
<span className="text-xl">🎯</span>
<h4 className="font-semibold text-gray-900 text-sm">
                        Objetivos Clave
                      </h4>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="text-red-500 mt-1">→</span>
                        Dominar el sistema POS rápidamente
                      </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="text-red-500 mt-1">→</span>
                        Evitar errores que generen devoluciones
                      </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="text-red-500 mt-1">→</span>
                        Construir confianza con clientes regulares
                      </li>
</ul>
</div>
</div>
</div>

<div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300 group">
<div className="flex flex-col overflow-hidden text-center bg-gradient-to-br from-[#ec4899] to-[#f43f5e] h-40 pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">

<div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
<svg className="text-yellow-300 drop-shadow-md" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="8" fill="#fbbf24" r="7" stroke="none"></circle>
<polyline fill="#ef4444" points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" stroke="none"></polyline>
<path d="M12 15l-2-2h4l-2 2z" fill="#b45309" stroke="none"></path>
<path d="M12 8l1 2h2l-1.5 1 1 2-2.5-1.5-2.5 1.5 1-2-1.5-1h2z" fill="#fff" opacity="0.5"></path>
</svg>
</div>
<h3 className="text-white font-display text-2xl font-semibold tracking-tight">
                    Osvaldo Ramírez
                  </h3>
<p className="text-white/90 text-sm font-medium" id="osvaldo-role-text">
                    Vendedor Semi-Senior
                  </p>


</div>
<div className="p-8 flex-1 flex flex-col">
<div className="grid grid-cols-2 gap-3 mb-8">
<div className="bg-gray-50 p-3 rounded-xl">
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
                        Edad
                      </div>
<div className="text-gray-900 font-semibold">32 años</div>
</div>
<div className="bg-gray-50 p-3 rounded-xl">
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
                        Experiencia
                      </div>
<div className="text-gray-900 font-semibold">6 años</div>
</div>
<div className="bg-gray-50 p-3 rounded-xl">
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
                        Educación
                      </div>
<div className="text-gray-900 font-semibold">Ventas</div>
</div>
<div className="bg-gray-50 p-3 rounded-xl">
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
                        Tech Comfort
                      </div>
<div className="text-gray-900 font-semibold">9/10</div>
</div>
</div>
<div className="mt-auto">
<div className="flex items-center gap-2 mb-4">
<span className="text-xl">😤</span>
<h4 className="font-semibold text-gray-900 text-sm">
                        Frustraciones Principales
                      </h4>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="text-red-500 mt-1">→</span>
                        No puede vender productos online desde POS físico
                      </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="text-red-500 mt-1">→</span>
                        Pierde ventas vs competidores como Amazon
                      </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="text-red-500 mt-1">→</span>
                        Sistema tiene mejores capacidades que no están
                        disponibles
                      </li>
</ul>
</div>
</div>
</div>

<div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300 group">
<div className="h-40 bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">

<div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
<svg className="drop-shadow-lg" fill="url(#star-grad-2)" height="48" stroke="none" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="star-grad-2" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#fde047', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<h3 className="text-white font-display text-2xl font-bold tracking-tight">
                    María Antonieta
                  </h3>
<p className="text-white/90 text-sm font-medium">Cajera Senior</p>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="grid grid-cols-2 gap-3 mb-8">
<div className="bg-gray-50 p-3 rounded-xl">
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
                        Edad
                      </div>
<div className="text-gray-900 font-semibold">56 años</div>
</div>
<div className="bg-gray-50 p-3 rounded-xl">
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
                        Experiencia
                      </div>
<div className="text-gray-900 font-semibold">30 años</div>
</div>
<div className="bg-gray-50 p-3 rounded-xl">
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
                        Educación
                      </div>
<div className="text-gray-900 font-semibold">Hotelería</div>
</div>
<div className="bg-gray-50 p-3 rounded-xl">
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
                        Tech Comfort
                      </div>
<div className="text-gray-900 font-semibold">6/10</div>
</div>
</div>
<div className="mt-auto">
<div className="flex items-center gap-2 mb-4">
<span className="text-xl">🚀</span>
<h4 className="font-semibold text-gray-900 text-sm">
                        Necesidades Clave
                      </h4>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="text-red-500 mt-1">→</span>
                        Sistema estable y confiable sin cambios constantes
                      </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="text-red-500 mt-1">→</span>
                        Autocompletado inteligente para facturación
                      </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="text-red-500 mt-1">→</span>
                        Recordar datos de clientes frecuentes automáticamente
                      </li>
</ul>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>


<section className="py-24 bg-liv-dark text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-liv-pink to-transparent opacity-10"></div>
<div className="container z-10 max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center mb-16">
<iconify-icon className="text-liv-pink mb-6 animate-pulse" icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="48"></iconify-icon>
<h2 className="md:text-5xl leading-tight text-3xl font-light tracking-tight font-display" data-i18n="goal.quote">
            "Transformamos el punto de venta en un
            <span className="text-liv-pink font-semibold">
              ecosistema inteligente
            </span>
            donde cada vendedor es un asesor personalizado."
          </h2>
</div>
<div className="border-l-liv-pink shadow-liv-pink/5 overflow-hidden group bg-gradient-to-br from-white/10 to-white/5 border-white/20 border rounded-2xl border-l-4 pt-10 pr-10 pb-10 pl-10 relative shadow-2xl backdrop-blur-md">
<div className="absolute top-0 right-0 w-32 h-32 bg-liv-pink/20 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"></div>
<h4 className="flex items-center gap-4 z-10 text-xl font-bold text-white tracking-tight mb-6 relative">
<div className="w-10 h-10 rounded-lg bg-liv-pink flex items-center justify-center text-white shadow-lg shadow-liv-pink/30 ring-1 ring-white/20">
<svg className="lucide lucide-target" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
</div>
            Goal Statement
          </h4>
<p className="text-white/95 font-medium leading-relaxed text-lg relative z-10 antialiased" data-i18n="goal.stmt">
            Diseñar e implementar un sistema POS omnicanal para Liverpool que
            unifique artículos de múltiples fuentes en un solo carrito y pago,
            mientras empodera a vendedores con datos del cliente para
            transformarse en asesores personalizados.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-12 border-t border-gray-800 pt-12">
<div className="">
<h4 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
<iconify-icon className="text-liv-pink" icon="solar:verified-check-linear"></iconify-icon>
              Diferenciadores Clave
            </h4>
<ul className="space-y-4 text-gray-300 font-light">
<li className="flex gap-3">
<span className="text-liv-pink">•</span>
                Cobro unificado (Físico + Marketplace + Big Ticket).
              </li>
<li className="flex gap-3">
<span className="text-liv-pink">•</span>
                Clientelling proactivo (Historial + Tallas + Gustos).
              </li>
<li className="flex gap-3">
<span className="text-liv-pink">•</span>
                Recomendaciones de IA basadas en inventario real.
              </li>
</ul>
</div>
<div className="">
<h4 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
<iconify-icon className="text-liv-pink" icon="solar:graph-up-linear"></iconify-icon>
              Objetivos de Negocio
            </h4>
<div className="grid grid-cols-2 gap-6">
<div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
<div className="text-2xl font-display font-semibold text-white mb-1">
                  +
                  <span className="counter" data-target="25">25</span>
                  %
                </div>
<div className="text-xs text-gray-400">Ticket Promedio</div>
</div>
<div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
<div className="text-2xl font-display font-semibold text-white mb-1">
                  -
                  <span className="counter" data-target="46">28</span>
                  %
                </div>
<div className="text-xs text-gray-400">Tiempo Checkout</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 bg-liv-light" id="solucion">
<div className="container mx-auto px-6 max-w-6xl">
<div className="flex flex-col items-center mb-16">
<span className="text-liv-pink font-semibold tracking-widest text-xs uppercase mb-3 block">
            Estructura
          </span>
<h2 className="font-display text-3xl md:text-4xl font-semibold text-liv-dark tracking-tight" data-i18n="arch.title">
            Arquitectura del Sistema
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-liv-pink transition-colors duration-300">
<div className="text-liv-pink mb-4 font-display font-bold text-lg">
              01. Login
            </div>
<h4 className="font-semibold text-liv-dark mb-2">Autenticación</h4>
<p className="text-xs text-liv-gray leading-relaxed">
              Acceso seguro biométrico o credenciales para vendedores.
            </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-liv-pink transition-colors duration-300">
<div className="text-liv-pink mb-4 font-display font-bold text-lg">
              02. Dashboard
            </div>
<h4 className="font-semibold text-liv-dark mb-2">Home Vendedor</h4>
<p className="text-xs text-liv-gray leading-relaxed">
              KPIs personales, accesos directos y búsqueda rápida.
            </p>
</div>

<div className="bg-white p-6 rounded-xl border border-liv-pink shadow-md transform -translate-y-2">
<div className="text-liv-pink mb-4 font-display font-bold text-lg">
              03. Perfil 360°
            </div>
<h4 className="font-semibold text-liv-dark mb-2">
              Identificación Cliente
            </h4>
<p className="text-xs text-liv-gray leading-relaxed">
              Historial, tallas, wishlist y recomendaciones IA en un vistazo.
            </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-liv-pink transition-colors duration-300">
<div className="text-liv-pink mb-4 font-display font-bold text-lg">
              04. Catálogo
            </div>
<h4 className="font-semibold text-liv-dark mb-2">Búsqueda Unificada</h4>
<p className="text-xs text-liv-gray leading-relaxed">
              Filtros avanzados, stock real-time (físico + online).
            </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-liv-pink transition-colors duration-300">
<div className="text-liv-pink mb-4 font-display font-bold text-lg">
              05. Carrito
            </div>
<h4 className="font-semibold text-liv-dark mb-2">Checkout Híbrido</h4>
<p className="text-xs text-liv-gray leading-relaxed">
              Múltiples métodos de entrega en una sola orden.
            </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-liv-pink transition-colors duration-300">
<div className="text-liv-pink mb-4 font-display font-bold text-lg">
              06. Pago
            </div>
<h4 className="font-semibold text-liv-dark mb-2">Terminal Integrada</h4>
<p className="text-xs text-liv-gray leading-relaxed">
              Selección de MSI, monedero y métodos mixtos.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="container text-center max-w-5xl mr-auto ml-auto pr-6 pl-6">
<span className="text-liv-pink font-semibold tracking-widest text-xs uppercase mb-3 block">
          Diseño
        </span>
<h2 className="md:text-4xl text-liv-dark text-3xl font-semibold tracking-tight font-display mb-6" data-i18n="wire.title">
          Wireflow de Interacción
        </h2>
<p className="text-liv-gray leading-relaxed text-lg font-light max-w-2xl mr-auto mb-12 ml-auto" data-i18n="wire.desc">
          Wireframes de baja fidelidad mostrando el flujo completo del sistema
          desde login hasta confirmación de venta.
        </p>
<iframe allowfullscreen="" className="" height="450" src="https://embed.figma.com/proto/8A9fxAQeHxOUwfTuwMtqNG/Liverpool-POS---Prueba?page-id=0%3A1&amp;node-id=4-151&amp;p=f&amp;viewport=-1090%2C378%2C0.17&amp;scaling=scale-down&amp;content-scaling=fixed&amp;starting-point-node-id=1%3A8954&amp;embed-host=share" style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width="800"></iframe>



</div>
</section>

<footer className="bg-gradient-to-br from-liv-pink to-liv-800 text-white py-24 text-center relative overflow-hidden" id="impacto">
<div className="opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="container z-10 mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="md:text-6xl text-4xl font-semibold tracking-tight font-display mb-6" data-i18n="imp.title">
          Impacto Proyectado
        </h2>
<p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-16 font-light" data-i18n="imp.desc">
          Metas a alcanzar en los primeros 12 meses de implementación.
        </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mr-auto ml-auto gap-x-8 gap-y-8">
<div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
<div className="text-4xl md:text-5xl font-display font-bold mb-2 flex justify-center">
              +
              <span className="counter" data-target="25">18</span>
              %
            </div>
<div className="text-xs uppercase tracking-widest text-white/80">
              Ticket Promedio
            </div>
</div>
<div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
<div className="text-4xl md:text-5xl font-display font-bold mb-2 flex justify-center">
              -
              <span className="counter" data-target="40">18</span>
              %
            </div>
<div className="text-xs uppercase tracking-widest text-white/80">
              Abandono Ventas
            </div>
</div>
<div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
<div className="text-4xl md:text-5xl font-display font-bold mb-2 flex justify-center">
              -
              <span className="counter" data-target="46">18</span>
              %
            </div>
<div className="text-xs uppercase tracking-widest text-white/80">
              Tiempo Checkout
            </div>
</div>
<div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
<div className="text-4xl md:text-5xl font-display font-bold mb-2 flex justify-center">
              +
              <span className="counter" data-target="94">36</span>
              %
            </div>
<div className="text-xs uppercase tracking-widest text-white/80">
              Cross-selling
            </div>
</div>
</div>
<div className="text-center mt-20">
<div className="overflow-hidden md:p-20 isolate group text-center bg-[#0B0F17] w-full border-white/10 border ring-white/5 ring-1 rounded-3xl pt-16 pr-8 pb-16 pl-8 relative shadow-2xl">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

<div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none opacity-40 mix-blend-screen transition-opacity duration-1000 group-hover:opacity-60"></div>
<div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none opacity-40 mix-blend-screen transition-opacity duration-1000 group-hover:opacity-60"></div>

<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60"></div>
<div className="relative z-10 flex flex-col gap-10 items-center justify-center">

<div className="space-y-6 max-w-2xl mx-auto">
<h3 className="font-display text-4xl md:text-5xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 pb-2" data-i18n="imp.thanks">
                  Gracias por tu atención :)
                </h3>
<p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-lg mx-auto">
                  Transformando la experiencia de compra a través del diseño
                  centrado en el usuario.
                </p>
</div>

<div className="flex gap-5 gap-x-5 gap-y-5 items-center">
<a className="group/icon flex items-center justify-center transition-all duration-500 hover:bg-white/10 hover:text-white hover:border-white/20 hover:-translate-y-1 text-slate-300 bg-white/5 w-12 h-12 border-white/10 border rounded-full relative" href="https://www.linkedin.com/in/santhdz-uxui/" target="_blank">
<span className="absolute inset-0 rounded-full bg-white/5 blur-md opacity-0 transition-opacity duration-500 group-hover/icon:opacity-100"></span>
<iconify-icon className="relative z-10" icon="lucide:linkedin" width="20"></iconify-icon>
</a>
<a className="group/icon relative flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 transition-all duration-500 hover:bg-white/10 hover:text-white hover:border-white/20 hover:-translate-y-1" href="mailto:santhdz26@gmail.com">
<span className="absolute inset-0 rounded-full bg-white/5 blur-md opacity-0 transition-opacity duration-500 group-hover/icon:opacity-100"></span>
<iconify-icon className="relative z-10" icon="lucide:mail" width="20"></iconify-icon>
</a>
<a className="group/icon relative flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 transition-all duration-500 hover:bg-white/10 hover:text-white hover:border-white/20 hover:-translate-y-1" href="https://www.behance.net/" target="_blank">
<span className="transition-opacity duration-500 group-hover/icon:opacity-100 bg-white/5 opacity-0 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-md cursor-pointer" onclick="event.preventDefault(); event.stopPropagation(); window.open('https://www.behance.net/santhdz', '_blank');"></span>
<iconify-icon className="relative z-10" icon="tabler:brand-behance" width="20"></iconify-icon>
</a>
</div>

<div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

<div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-[11px] text-slate-500 font-medium tracking-[0.2em] uppercase">
<span className="hover:text-slate-400 transition-colors duration-300" data-i18n="imp.foot">
                  © 2024 Liverpool Case Study
                </span>
<span className="hidden md:block w-0.5 h-0.5 rounded-full bg-slate-700"></span>
<span className="hover:text-slate-400 transition-colors duration-300">
                  UX/UI Design Portfolio
                </span>
</div>
</div>
</div>
</div>
<div className="mt-12 opacity-60 text-xs">
          © 2023 Liverpool Case Study · Confidential
        </div>
</div>
</footer>



    </>
  );
}
