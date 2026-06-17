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



        // Language Toggle Script
        function toggleLanguage() {
            const html = document.documentElement;
            const current = html.getAttribute('lang');
            const newLang = current === 'en' ? 'es' : 'en';
            html.setAttribute('lang', newLang);
            updateAuthModalText(newLang);
        }
        
        function updateAuthModalText(lang) {
            const modal = document.getElementById('auth-modal');
            const placeholder = lang === 'es' ? 'Introducir contraseña...' : 'Enter password...';
            const input = modal.querySelector('input');
            if(input) input.placeholder = placeholder;
        }

        // Portfolio Overlay Script
        function openPortfolio() {
            const el = document.getElementById('portfolio-index');
            if(el) {
                el.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        }
        function closePortfolio() {
            const el = document.getElementById('portfolio-index');
            if(el) {
                el.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }

        // Auth Modal & Case Study Logic
        window.currentProjectId = null;

        // Project Data for Dynamic Modal
        const projectData = {
            lending: {
                title: "Digital Lending Transformation",
                category: "Fintech · CRO",
                desc: "Redesigned the pre-approved loans experience to optimize conversion and user understanding.",
                content: "Detailed case study content regarding the implementation of a CRO-first strategy in a regulated banking environment. The project focused on reducing friction in the funnel and improving the acceptance rate of pre-approved loans."
            },
            activation: {
                title: "Customer Activation Hub",
                category: "Growth · Strategy",
                desc: "Strategic ecosystem to convert digital-onboarded users into primary customers through gamification.",
                content: "A comprehensive look at the Customer Activation Hub, a system designed to guide new digital users towards primary banking status. By utilizing progressive profiling and gamified incentives, engagement metrics were significantly improved."
            },
            strategy: {
                title: "New App Strategy & Vision",
                category: "Product Strategy",
                desc: "Co-created the 'Guiding Towards Calm' experience vision. A shared strategic framework.",
                content: "This project defined the strategic north star for the new mobile banking application. 'Guiding Towards Calm' became the core design principle, influencing UI decisions, tone of voice, and feature prioritization to reduce financial anxiety."
            },
            albora: {
                title: "Albora / Refugia",
                category: "Social Innovation · Housing",
                desc: "Venture building project focused on affordable housing solutions and social impact metrics.",
                content: "Albora addresses the housing crisis through a social innovation lens. This venture explores new models of shared living and affordable access, validated through rigorous market testing and partnership development."
            },
            bsibles: {
                title: "BSibles",
                category: "Culture Innovation",
                desc: "Internal cultural innovation initiative to foster intrapreneurship and cross-functional collaboration.",
                content: "BSibles is an internal initiative designed to break down silos within the corporate structure. By fostering a culture of intrapreneurship, it enables cross-functional squads to identify and solve business challenges with agility."
            },
            desescalapp: {
                title: "Desescalapp",
                category: "Crisis Response Product",
                desc: "Rapid response digital product designed to assist users during the de-escalation phase.",
                content: "Created during a critical period, Desescalapp provided users with real-time, location-based information regarding regulations and mobility restrictions. The product was launched in record time, demonstrating the ability to execute under pressure."
            }
        };

        function openAuthModal(projectId) {
            window.currentProjectId = projectId;
            
            // Show modal
            const modal = document.getElementById('auth-modal');
            const card = document.getElementById('auth-card');
            const input = document.getElementById('auth-input');
            
            if (modal && card && input) {
                modal.classList.remove('opacity-0', 'pointer-events-none');
                card.classList.remove('scale-95', 'translate-y-4');
                card.classList.add('scale-100', 'translate-y-0');
                input.value = '';
                input.focus();
            }
        };

        function closeAuthModal() {
            const modal = document.getElementById('auth-modal');
            const card = document.getElementById('auth-card');
            
            if (modal && card) {
                modal.classList.add('opacity-0', 'pointer-events-none');
                card.classList.remove('scale-100', 'translate-y-0');
                card.classList.add('scale-95', 'translate-y-4');
           }
       }

       function submitAuth(event) {
           event.preventDefault();
           const input = document.getElementById('auth-input');
           const value = input.value;
           
           // SIMULATED AUTHENTICATION: Any password works for demo
           if (value.length > 0) {
               closeAuthModal();
               
               // Wait for close animation then open specific case study
               setTimeout(() => {
                   if (window.currentProjectId) {
                       openCaseStudy(window.currentProjectId);
                   }
               }, 300);
           } else {
               // Error Animation
               input.classList.add('border-red-500', 'text-red-500', 'shake');
               setTimeout(() => {
                   input.classList.remove('shake');
               }, 400);
           }
       }

       function openCaseStudy(projectId) {
           // Special Layout for Albino Vino
           if (projectId === 'albino') {
               const el = document.getElementById('case-study-albino');
               if (el) {
                   el.classList.remove('hidden');
                   document.body.style.overflow = 'hidden';
               }
               return;
           }

           // Dynamic Layout for other projects
           const data = projectData[projectId];
           if (data) {
               const modal = document.getElementById('case-study-dynamic');
               
               // Populate Dynamic Data
               document.getElementById('dyn-category').innerText = data.category;
               document.getElementById('dyn-title').innerText = data.title;
               document.getElementById('dyn-desc').innerText = data.desc;
               document.getElementById('dyn-content').innerText = data.content;
               
               // Show Modal
               modal.classList.remove('hidden');
               document.body.style.overflow = 'hidden';
           }
       }

       function closeCaseStudy() {
           // Close both types of modals
           const albino = document.getElementById('case-study-albino');
           const dynamic = document.getElementById('case-study-dynamic');
           
           if (albino) albino.classList.add('hidden');
           if (dynamic) dynamic.classList.add('hidden');
           
           // Restore scroll
           document.body.style.overflow = '';
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
      

<div className="fixed top-0 w-full h-screen -z-10 pointer-events-none" style={{background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)'}}></div>

<div className="max-w-[1400px] mx-auto w-full border-x relative bg-[#0A0A0B]/60 min-h-screen flex flex-col border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] transition-opacity duration-500" id="main-portfolio">

<header className="sticky top-0 z-50 border-b glass-panel border-white/10">
<div className="grid grid-cols-1 md:grid-cols-12 h-14 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="col-span-1 md:col-span-3 flex md:justify-start pr-6 pl-6 items-center justify-between">
<a className="uppercase hover:text-white transition-colors flex items-center gap-2 text-xs font-medium text-zinc-300 tracking-widest" href="#">Juan Diego g.r</a>
<div className="flex items-center gap-4 md:hidden">
<button className="text-[10px] font-mono font-medium text-zinc-400 hover:text-white transition-colors border border-white/10 rounded px-2 py-1" onclick="toggleLanguage()">
<span className="lang-en">ES</span>
<span className="lang-es">EN</span>
</button>
<button className="text-zinc-300 flex items-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<nav className="col-span-1 md:col-span-6 flex items-center px-6 space-x-8 hidden md:flex">
<a className="text-[11px] font-medium uppercase tracking-widest transition-colors hover:text-white text-zinc-400" href="#overview">
<span className="lang-en">Overview</span>
<span className="lang-es">Visión</span>
</a>
<a className="text-[11px] font-medium uppercase tracking-widest transition-colors hover:text-white text-zinc-400" href="#expertise">
<span className="lang-en">Expertise</span>
<span className="lang-es">Expertise</span>
</a>
<a className="text-[11px] font-medium uppercase tracking-widest transition-colors hover:text-white text-zinc-400" href="#impact">
<span className="lang-en">Experience</span>
<span className="lang-es">Trayectoria</span>
</a>
<a className="text-[11px] font-medium uppercase tracking-widest transition-colors hover:text-white text-zinc-400" href="#ventures">
<span className="lang-en">Ventures</span>
<span className="lang-es">Ventures</span>
</a>
</nav>

<div className="col-span-1 md:col-span-3 flex items-center px-6 justify-between md:justify-end hidden md:flex gap-6">
<button className="text-[10px] font-mono font-medium text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group" onclick="toggleLanguage()">
<iconify-icon className="group-hover:text-zinc-300" height="14" icon="solar:globe-linear" width="14"></iconify-icon>
<span className="lang-en">ESPAÑOL</span>
<span className="lang-es">ENGLISH</span>
</button>
<div className="text-[10px] font-mono text-zinc-500 flex items-center gap-2 border-l border-white/10 pl-6 h-full">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="lang-en">OPEN TO REMOTE</span>
<span className="lang-es">DISPONIBLE REMOTO</span>
</div>
</div>
</div>
</header>

<main className="flex-grow grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x relative divide-white/10">

<div className="col-span-1 md:col-span-9 divide-y divide-white/10">

<section className="md:p-16 lg:p-24 flex flex-col gap-10 group pt-8 pr-8 pb-8 pl-8 relative" id="overview">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
<iconify-icon className="text-zinc-600" height="24" icon="solar:compass-linear" width="24"></iconify-icon>
</div>
<div className="max-w-3xl space-y-8">
<div className="inline-flex gap-2 border-white/5 border rounded-full pt-1 pr-3 pb-1 pl-3 items-center">
<span className="text-[10px] uppercase text-zinc-400 tracking-wider">
<span className="lang-en">Corporate Innovation &amp; Venture Building</span>
<span className="lang-es">Innovación Corporativa &amp; Venture Building</span>
</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[0.95] text-4xl font-semibold text-zinc-100 tracking-tighter">
<span className="lang-en">Innovation &amp; Product</span>
<span className="lang-es">Líder en Innovación</span>
<span className="text-zinc-500">
<span className="lang-en">Leader.</span>
<span className="lang-es">y Producto.</span>
</span>
</h1>
<h2 className="text-xl md:text-2xl tracking-tight text-zinc-300 font-medium">
<span className="lang-en">Strategic Product Design</span>
<span className="lang-es">Diseño Estratégico de Producto</span>
<span className="text-zinc-600">·</span>
<span className="text-zinc-100">
<span className="lang-en">Corporate Innovation</span>
<span className="lang-es">Innovación Corporativa</span>
</span>
</h2>
<p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed max-w-2xl">
<span className="lang-en">
                    Driving corporate innovation, product strategy, and
                    venture-style experimentation in complex and regulated
                    environments. I translate strategic vision into measurable
                    business and cultural impact by bridging design, data, and
                    cross-functional leadership. Currently leading innovation
                    initiatives at
                </span>
<span className="lang-es">
                    Impulsando la innovación corporativa, estrategia de producto y 
                    experimentación venture en entornos complejos y regulados. 
                    Traduzco la visión estratégica en impacto de negocio y cultural 
                    medible uniendo diseño, datos y liderazgo transversal. 
                    Actualmente liderando iniciativas de innovación en
                </span>
<span className="text-zinc-300">Banco Sabadell</span>.
              </p>
<div className="pt-4 flex gap-4">
<a className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-medium uppercase tracking-wide transition-all bg-zinc-100 text-black hover:bg-zinc-300 rounded-sm" href="mailto:marinerografico@gmail.com">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
<span className="lang-en">Email Me</span>
<span className="lang-es">Contactar</span>
</a>
<button className="inline-flex items-center gap-2 px-5 py-2.5 border text-[11px] font-medium uppercase tracking-wide transition-all border-white/10 text-zinc-400 hover:text-zinc-100 hover:border-white/20 rounded-sm" onclick="openPortfolio()">
                  Portfolio
                </button>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10" id="expertise">
<div className="md:p-10 hover:bg-white/[0.01] transition-colors pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-zinc-100" height="20" icon="solar:target-linear" width="20"></iconify-icon>
<h3 className="text-xs font-medium uppercase tracking-widest text-zinc-300">
<span className="lang-en">Innovation &amp; Strategy</span>
<span className="lang-es">Innovación y Estrategia</span>
</h3>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
<span className="lang-en">
                    Corporate innovation and intrapreneurship portfolio management.
                    Specializing in opportunity discovery, prioritization, and
                    validation frameworks (CRO, pilots, MVPs) driven by data.
                </span>
<span className="lang-es">
                    Gestión de portafolio de innovación corporativa e intraemprendimiento.
                    Especializado en descubrimiento de oportunidades, priorización y
                    marcos de validación (CRO, pilotos, MVPs) impulsados por datos.
                </span>
</p>
</div>
<div className="p-8 md:p-10 hover:bg-white/[0.01] transition-colors">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-zinc-100" height="20" icon="solar:chart-2-linear" width="20"></iconify-icon>
<h3 className="text-xs font-medium uppercase tracking-widest text-zinc-300">
<span className="lang-en">Product &amp; Business</span>
<span className="lang-es">Producto y Negocio</span>
</h3>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
<span className="lang-en">
                    Product strategy, value proposition design, and activation.
                    Framing business cases to optimize funnels, reduce
                    time-to-market, and define OKRs aligned with strategic vision.
                </span>
<span className="lang-es">
                    Estrategia de producto, diseño de propuesta de valor y activación.
                    Definición de casos de negocio para optimizar funnels, reducir
                    el time-to-market y definir OKRs alineados con la visión estratégica.
                </span>
</p>
</div>
<div className="p-8 md:p-10 hover:bg-white/[0.01] transition-colors">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-zinc-100" height="20" icon="solar:layers-linear" width="20"></iconify-icon>
<h3 className="text-xs font-medium uppercase tracking-widest text-zinc-300">
<span className="lang-en">Leadership &amp; Execution</span>
<span className="lang-es">Liderazgo y Ejecución</span>
</h3>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
<span className="lang-en">
                    Cross-functional orchestration (Design, Tech, Legal, Data).
                    Experienced in stakeholder management, committee reporting, and
                    leading agile squad-based delivery teams.
                </span>
<span className="lang-es">
                    Orquestación transversal (Diseño, Tech, Legal, Datos).
                    Experiencia en gestión de stakeholders, reporting a comités y
                    liderazgo de equipos de entrega ágil (squads).
                </span>
</p>
</div>
<div className="p-8 md:p-10 hover:bg-white/[0.01] transition-colors">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-zinc-100" height="20" icon="solar:pen-new-square-linear" width="20"></iconify-icon>
<h3 className="text-xs font-medium uppercase tracking-widest text-zinc-300">
<span className="lang-en">Design as Strategy</span>
<span className="lang-es">Diseño como Estrategia</span>
</h3>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
<span className="lang-en">
                    Using Service Design and UX research as strategic tools.
                    Developing design systems, experience governance, and "guiding
                    towards calm" in complex banking products.
                </span>
<span className="lang-es">
                    Uso de Service Design e investigación UX como herramientas estratégicas.
                    Desarrollo de sistemas de diseño, gobernanza de experiencia y
                    principios de "calma" en productos bancarios complejos.
                </span>
</p>
</div>
</section>

<div className="border-white/10 border-t bg-[#0A0A0B]" id="impact">
<div className="md:p-12 flex border-white/10 border-b pt-8 pr-8 pb-8 pl-8 items-center justify-between bg-zinc-900/20 backdrop-blur-sm">
<div className="flex flex-col gap-1">
<h3 className="text-xs font-medium uppercase tracking-widest text-zinc-100 flex items-center gap-2">
<span className="w-2 h-2 rounded-sm bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
<span className="lang-en">Key Impact · Confidential</span>
<span className="lang-es">Impacto Clave · Confidencial</span>
</h3>
<p className="text-[10px] text-zinc-500 font-mono hidden md:block">
<span className="lang-en">SECURE PROJECT VAULT · BANCO SABADELL</span>
<span className="lang-es">BÓVEDA DE PROYECTOS · BANCO SABADELL</span>
</p>
</div>
<div className="flex items-center gap-4">
<span className="text-[10px] font-mono text-zinc-500 border border-white/5 bg-white/[0.02] px-3 py-1.5 rounded hidden sm:flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear"></iconify-icon>
                    2023 — <span className="lang-en">PRESENT</span><span className="lang-es">ACTUALIDAD</span>
</span>
<div className="flex gap-1">
<button className="p-2 rounded hover:bg-white/5 text-zinc-500 hover:text-zinc-200 transition-colors border border-transparent hover:border-white/5 flex items-center" onclick="document.querySelector('#impact .overflow-x-auto').scrollBy({left: -400, behavior: 'smooth'})">
<iconify-icon height="16" icon="solar:arrow-left-linear" width="16"></iconify-icon>
</button>
<button className="p-2 rounded hover:bg-white/5 text-zinc-500 hover:text-zinc-200 transition-colors border border-transparent hover:border-white/5 flex items-center" onclick="document.querySelector('#impact .overflow-x-auto').scrollBy({left: 400, behavior: 'smooth'})">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="col-span-1 md:col-span-2 w-full relative group/carousel overflow-hidden">
<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:divide-x divide-white/10 h-full w-full bg-[#0A0A0B]/20">

<div className="flex-none md:w-1/2 snap-start flex flex-col md:p-12 p-8 w-[85vw] border-b md:border-b-0 border-white/10 hover:bg-zinc-900/30 transition-all duration-500 cursor-pointer group/card relative" onclick="openAuthModal('lending')">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/[0.03] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex justify-between items-start mb-10 relative z-10">
<div className="p-2.5 rounded-lg bg-zinc-900/80 border border-white/10 text-zinc-400 group-hover/card:text-emerald-400 group-hover/card:border-emerald-500/20 transition-all shadow-xl backdrop-blur-sm">
<iconify-icon height="24" icon="solar:bill-check-linear" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-2 pl-3 pr-2 py-1 rounded-full border border-white/5 bg-black/40 backdrop-blur-md group-hover/card:border-emerald-500/20 transition-all">
<span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 group-hover/card:text-emerald-500/80 transition-colors flex items-center gap-1.5">
<iconify-icon height="12" icon="solar:lock-password-linear" width="12"></iconify-icon>
<span className="lang-en">LOCKED</span>
<span className="lang-es">BLOQUEADO</span>
</span>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 text-zinc-100 group-hover/card:text-white transition-colors relative z-10">
<span className="lang-en">Digital Lending Transformation</span>
<span className="lang-es">Transformación de Préstamos</span>
</h3>
<p className="text-sm text-zinc-500 mb-8 font-light leading-relaxed group-hover/card:text-zinc-400 transition-colors relative z-10">
<span className="lang-en">
                            Redesigned the pre-approved loans experience. Implemented
                            a CRO-first strategy with 3-week validation sprints.
                        </span>
<span className="lang-es">
                            Rediseño de la experiencia de préstamos preconcedidos. 
                            Implementación de estrategia CRO con sprints de 3 semanas.
                        </span>
</p>
<div className="mt-auto relative z-10 pt-6 border-t border-white/5 flex items-center justify-between group-hover/card:border-white/10 transition-colors">
<div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-red-500/50 group-hover/card:bg-emerald-500 transition-colors"></span>
<span className="lang-en">Confidential</span><span className="lang-es">Confidencial</span>
</div>
<span className="text-[11px] font-medium text-zinc-500 group-hover/card:text-zinc-200 transition-colors flex items-center gap-2">
<span className="lang-en">Request Access</span><span className="lang-es">Solicitar Acceso</span>
<iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</div>
</div>

<div className="flex-none md:w-1/2 snap-start flex flex-col md:p-12 p-8 w-[85vw] border-b md:border-b-0 border-white/10 hover:bg-zinc-900/30 transition-all duration-500 cursor-pointer group/card relative" onclick="openAuthModal('activation')">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/[0.03] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex justify-between items-start mb-10 relative z-10">
<div className="p-2.5 rounded-lg bg-zinc-900/80 border border-white/10 text-zinc-400 group-hover/card:text-emerald-400 group-hover/card:border-emerald-500/20 transition-all shadow-xl backdrop-blur-sm">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-2 pl-3 pr-2 py-1 rounded-full border border-white/5 bg-black/40 backdrop-blur-md group-hover/card:border-emerald-500/20 transition-all">
<span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 group-hover/card:text-emerald-500/80 transition-colors flex items-center gap-1.5">
<iconify-icon height="12" icon="solar:lock-password-linear" width="12"></iconify-icon>
<span className="lang-en">LOCKED</span>
<span className="lang-es">BLOQUEADO</span>
</span>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 text-zinc-100 group-hover/card:text-white transition-colors relative z-10">
<span className="lang-en">Customer Activation Hub</span>
<span className="lang-es">Hub de Activación</span>
</h3>
<p className="text-sm text-zinc-500 mb-8 font-light leading-relaxed group-hover/card:text-zinc-400 transition-colors relative z-10">
<span className="lang-en">
                            Strategic ecosystem to convert digital-onboarded users
                            into primary customers. Designed a progressive model.
                        </span>
<span className="lang-es">
                            Ecosistema estratégico para convertir usuarios digitales
                            en clientes principales. Modelo progresivo gamificado.
                        </span>
</p>
<div className="mt-auto relative z-10 pt-6 border-t border-white/5 flex items-center justify-between group-hover/card:border-white/10 transition-colors">
<div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-red-500/50 group-hover/card:bg-emerald-500 transition-colors"></span>
<span className="lang-en">Confidential</span><span className="lang-es">Confidencial</span>
</div>
<span className="text-[11px] font-medium text-zinc-500 group-hover/card:text-zinc-200 transition-colors flex items-center gap-2">
<span className="lang-en">Request Access</span><span className="lang-es">Solicitar Acceso</span>
<iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</div>
</div>

<div className="flex-none md:w-1/2 snap-start flex flex-col md:p-12 p-8 w-[85vw] border-b md:border-b-0 border-white/10 hover:bg-zinc-900/30 transition-all duration-500 cursor-pointer group/card relative" onclick="openAuthModal('strategy')">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/[0.03] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex justify-between items-start mb-10 relative z-10">
<div className="p-2.5 rounded-lg bg-zinc-900/80 border border-white/10 text-zinc-400 group-hover/card:text-emerald-400 group-hover/card:border-emerald-500/20 transition-all shadow-xl backdrop-blur-sm">
<iconify-icon height="24" icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-2 pl-3 pr-2 py-1 rounded-full border border-white/5 bg-black/40 backdrop-blur-md group-hover/card:border-emerald-500/20 transition-all">
<span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 group-hover/card:text-emerald-500/80 transition-colors flex items-center gap-1.5">
<iconify-icon height="12" icon="solar:lock-password-linear" width="12"></iconify-icon>
<span className="lang-en">LOCKED</span>
<span className="lang-es">BLOQUEADO</span>
</span>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 text-zinc-100 group-hover/card:text-white transition-colors relative z-10">
<span className="lang-en">New App Strategy &amp; Vision</span>
<span className="lang-es">Estrategia y Visión App</span>
</h3>
<p className="text-sm text-zinc-500 mb-8 font-light leading-relaxed group-hover/card:text-zinc-400 transition-colors relative z-10">
<span className="lang-en">
                            Co-created the "Guiding Towards Calm" experience vision. A
                            shared strategic framework to align decisions.
                        </span>
<span className="lang-es">
                            Co-creación de la visión "Guiding Towards Calm". Un marco
                            estratégico compartido para alinear decisiones.
                        </span>
</p>
<div className="mt-auto relative z-10 pt-6 border-t border-white/5 flex items-center justify-between group-hover/card:border-white/10 transition-colors">
<div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-red-500/50 group-hover/card:bg-emerald-500 transition-colors"></span>
<span className="lang-en">Confidential</span><span className="lang-es">Confidencial</span>
</div>
<span className="text-[11px] font-medium text-zinc-500 group-hover/card:text-zinc-200 transition-colors flex items-center gap-2">
<span className="lang-en">Request Access</span><span className="lang-es">Solicitar Acceso</span>
<iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="absolute bottom-6 right-8 hidden md:flex gap-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none">
<span className="text-[10px] font-mono text-zinc-500 bg-black/60 px-2 py-1 rounded border border-white/10 backdrop-blur-sm shadow-xl flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="lang-en">SECURE SCROLL</span>
<span className="lang-es">DESPLAZAR</span>
</span>
</div>
</div>
</div>
</div>

<div className="w-full overflow-hidden border-b border-white/10" id="ventures">
<div className="md:p-10 flex pt-8 pr-8 pb-8 pl-8 items-center justify-between">
<h3 className="text-xs font-medium uppercase tracking-widest text-zinc-400">
<span className="lang-en">Venture Building &amp; Culture</span>
<span className="lang-es">Venture Building &amp; Cultura</span>
</h3>
<div className="flex gap-2">
<button className="hover:bg-white/5 hover:text-zinc-200 transition-colors text-zinc-600 rounded pt-2 pr-2 pb-2 pl-2 flex items-center" onclick="document.getElementById('gallery-scroller').scrollBy({left: -300, behavior: 'smooth'})">
<iconify-icon height="16" icon="solar:arrow-left-linear" width="16"></iconify-icon>
</button>
<button className="p-2 rounded hover:bg-white/5 text-zinc-600 hover:text-zinc-200 transition-colors flex items-center" onclick="document.getElementById('gallery-scroller').scrollBy({left: 300, behavior: 'smooth'})">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto pb-10 px-8 hide-scrollbar scroll-smooth [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]" id="gallery-scroller">
<div className="flex gap-6 animate-infinite-scroll hover:[animation-play-state:paused]">

<div className="cursor-pointer min-w-[320px] aspect-[16/10] bg-zinc-900 border border-white/10 relative group overflow-hidden rounded-sm shrink-0" onclick="openAuthModal('albora')">
<img alt="Albora" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=75&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-zinc-100 text-xs font-medium tracking-wide">
                      Albora / Refugia
                    </span>
<span className="text-zinc-500 text-[10px] uppercase tracking-wider mt-1">
<span className="lang-en">Social Innovation · Housing</span>
<span className="lang-es">Innovación Social · Vivienda</span>
</span>
</div>
</div>

<div className="cursor-pointer min-w-[320px] aspect-[16/10] bg-zinc-900 border border-white/10 relative group overflow-hidden rounded-sm shrink-0" onclick="openAuthModal('albino')">
<img alt="Wine" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=75&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-zinc-100 text-xs font-medium tracking-wide">
                      Albino Vino
                    </span>
<span className="text-zinc-500 text-[10px] uppercase tracking-wider mt-1">
<span className="lang-en">Consumer Product &amp; Platform</span>
<span className="lang-es">Producto de Consumo &amp; Plataforma</span>
</span>
</div>
</div>

<div className="cursor-pointer min-w-[320px] aspect-[16/10] bg-zinc-900 border border-white/10 relative group overflow-hidden rounded-sm shrink-0" onclick="openAuthModal('bsibles')">
<img alt="Culture" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=75&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-zinc-100 text-xs font-medium tracking-wide">
                      BSibles
                    </span>
<span className="text-zinc-500 text-[10px] uppercase tracking-wider mt-1">
<span className="lang-en">Culture Innovation (Sabadell)</span>
<span className="lang-es">Innovación Cultural (Sabadell)</span>
</span>
</div>
</div>

<div className="cursor-pointer min-w-[320px] aspect-[16/10] bg-zinc-900 border border-white/10 relative group overflow-hidden rounded-sm shrink-0" onclick="openAuthModal('desescalapp')">
<img alt="Strategy" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=75&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-zinc-100 text-xs font-medium tracking-wide">
                      Desescalapp
                    </span>
<span className="text-zinc-500 text-[10px] uppercase tracking-wider mt-1">
<span className="lang-en">Crisis Response Product</span>
<span className="lang-es">Producto de Respuesta a Crisis</span>
</span>
</div>
</div>
</div>
</div>
</div>

<section className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="col-span-1 md:col-span-4 p-8 md:p-12 bg-white/[0.005]">
<h3 className="text-xs font-medium uppercase tracking-widest mb-8 flex items-center gap-2 text-zinc-400">
<iconify-icon height="20" icon="solar:user-circle-linear" width="20"></iconify-icon>
<span className="lang-en">Profile</span>
<span className="lang-es">Perfil</span>
</h3>
<div className="aspect-square w-full border border-white/10 mb-8 relative overflow-hidden bg-zinc-900/50 grayscale hover:grayscale-0 transition-all duration-700 group">

<div className="absolute inset-0 flex items-center justify-center bg-[#0F0F10]">
<iconify-icon className="text-zinc-800 opacity-50" height="48" icon="solar:user-circle-linear" width="48"></iconify-icon>
</div>
<img alt="Profile" className="group-hover:opacity-90 transition-opacity duration-500 opacity-60 w-full h-full object-cover bg-center absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/823d229f-f4e4-411e-948b-354392b90b0a_320w.jpg"/>
</div>
<div className="flex flex-col gap-2 font-mono text-[10px] text-zinc-600">
<div className="flex justify-between border-b border-white/5 pb-2">
<span>BASE</span>
<span className="text-zinc-400">
<span className="lang-en">MADRID, SPAIN</span>
<span className="lang-es">MADRID, ESPAÑA</span>
</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span>
<span className="lang-en">LANGUAGES</span>
<span className="lang-es">IDIOMAS</span>
</span>
<span className="text-zinc-400">
<span className="lang-en">ES (NATIVE), EN (PROFESSIONAL)</span>
<span className="lang-es">ES (NATIVO), EN (PROFESIONAL)</span>
</span>
</div>
<div className="flex justify-between pb-2">
<span>
<span className="lang-en">FOCUS</span>
<span className="lang-es">FOCO</span>
</span>
<span className="text-zinc-400">
<span className="lang-en">INNOVATION &amp; PRODUCT</span>
<span className="lang-es">INNOVACIÓN Y PRODUCTO</span>
</span>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-8 md:p-16 flex flex-col pt-8 pr-8 pb-8 pl-8 justify-center">
<h3 className="text-2xl md:text-3xl tracking-tight mb-8 text-zinc-100 font-semibold leading-tight">
<span className="lang-en">Navigating ambiguity through rigorous experimentation.</span>
<span className="lang-es">Navegando la ambigüedad a través de una rigurosa experimentación.</span>
</h3>
<div className="space-y-6 text-sm leading-relaxed font-light text-zinc-400 max-w-xl">
<p className="">
<span className="lang-en">
                      My background in strategic design and creative industries has
                      evolved into leading end-to-end innovation initiatives. I
                      operate at the intersection of corporate environments and
                      venture building, validated through work in financial
                      services, digital platforms, and social innovation.
                    </span>
<span className="lang-es">
                      Mi experiencia en diseño estratégico e industrias creativas ha evolucionado
                      hacia el liderazgo de iniciativas de innovación end-to-end. Opero en la
                      intersección entre entornos corporativos y venture building, validado a
                      través de proyectos en servicios financieros, plataformas digitales e
                      innovación social.
                    </span>
</p>
<p className="">
<span className="lang-en">
                      From 2013 to 2019, I built strong foundations in brand
                      strategy and digital communication at agencies like DDB and
                      Wunderman Thompson. Today, I apply that narrative mindset to
                      product innovation, believing that successful products must
                      tell a compelling story while delivering hard business
                      metrics.
                    </span>
<span className="lang-es">
                        De 2013 a 2019, construí bases sólidas en estrategia de marca y comunicación
                        digital en agencias como DDB y Wunderman Thompson. Hoy, aplico esa mentalidad
                        narrativa a la innovación de producto, creyendo que los productos exitosos deben
                        contar una historia convincente mientras entregan métricas de negocio sólidas.
                    </span>
</p>
<p>
<span className="lang-en">
                      I am an advocate for cross-functional teams and have been
                      recognized with 5 Laus Awards and featured in industry thought
                      leadership for my work on the convergence of design, business
                      impact, and purpose.
                    </span>
<span className="lang-es">
                        Defensor de los equipos multifuncionales, he sido reconocido con 5 Premios Laus
                        y destacado en el sector por mi trabajo en la convergencia entre diseño,
                        impacto de negocio y propósito.
                    </span>
</p>
</div>
<div className="mt-10 pt-10 border-t border-white/10 flex gap-10">
<div className="flex flex-col gap-1">
<span className="text-2xl text-zinc-200 font-semibold tracking-tight">
                    5
                  </span>
<span className="text-[10px] uppercase tracking-wider text-zinc-600">
<span className="lang-en">Laus Awards</span>
<span className="lang-es">Premios Laus</span>
</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-2xl text-zinc-200 font-semibold tracking-tight">
                    4
                  </span>
<span className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Drac Novell
                  </span>
</div>
<div className="flex flex-col gap-1">
<span className="text-2xl text-zinc-200 font-semibold tracking-tight">
                    2
                  </span>
<span className="text-[10px] uppercase tracking-wider text-zinc-600">
                    El Sol Fest
                  </span>
</div>
</div>
</div>
</section>
</div>

<div className="col-span-1 md:col-span-3 relative bg-black/20 hidden md:block">
<div className="sticky top-20">
<div className="p-5 border-b flex items-center justify-between border-white/10">
<h3 className="text-[10px] font-medium uppercase tracking-widest text-zinc-400">
<span className="lang-en">Experience</span>
<span className="lang-es">Experiencia</span>
</h3>
<iconify-icon className="text-zinc-600" height="16" icon="solar:history-linear" width="16"></iconify-icon>
</div>
<div className="divide-y divide-white/5">
<div className="p-5 hover:bg-white/[0.02] transition-colors group cursor-default">
<div className="flex items-center justify-between mb-1.5">
<h4 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                    Banco Sabadell
                  </h4>
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
</div>
<p className="text-xs text-zinc-400 mb-2 font-medium">
<span className="lang-en">Innovation &amp; Product Design Lead</span>
<span className="lang-es">Líder de Innovación y Diseño</span>
</p>
<p className="text-[10px] font-mono text-zinc-600">
                  2023 — <span className="lang-en">Present</span><span className="lang-es">Actualidad</span>
</p>
</div>
<div className="p-5 hover:bg-white/[0.02] transition-colors group cursor-default">
<div className="flex items-center justify-between mb-1.5">
<h4 className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    Fjord (Accenture)
                  </h4>
</div>
<p className="text-xs text-zinc-500 mb-2 font-medium">
                  Senior Product Designer
                </p>
<p className="text-[10px] font-mono text-zinc-600">2021 — 2022</p>
</div>
<div className="p-5 hover:bg-white/[0.02] transition-colors group cursor-default">
<div className="flex items-center justify-between mb-1.5">
<h4 className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
<span className="lang-en">Early Career</span>
<span className="lang-es">Inicios</span>
</h4>
</div>
<p className="text-xs text-zinc-500 mb-2 font-medium">
                  DDB, Wunderman, Tribal
                </p>
<p className="text-[10px] font-mono text-zinc-600">2013 — 2019</p>
</div>
</div>
<div className="p-5 mt-10 border-t border-white/5">
<h3 className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 mb-4">
<span className="lang-en">Education</span>
<span className="lang-es">Educación</span>
</h3>
<ul className="space-y-3">
<li className="flex flex-col gap-0.5">
<span className="text-xs text-zinc-400">ESADE LIS</span>
<span className="text-[10px] text-zinc-600 font-mono">
                    Innovation &amp; Social Impact
                  </span>
</li>
<li className="flex flex-col gap-0.5">
<span className="text-xs text-zinc-400">
                    IEBS Business School
                  </span>
<span className="text-[10px] text-zinc-600 font-mono">
                    MBA Digital Business and Entrepeneurship
                  </span>
</li>
<li className="flex flex-col gap-0.5">
<span className="text-xs text-zinc-400">UXER School</span>
<span className="text-[10px] text-zinc-600 font-mono">
                    Service Design Executive
                  </span>
</li>
</ul>
</div>
</div>
</div>
</main>

<footer className="border-t relative overflow-hidden border-white/10 bg-[#080809]">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x relative z-10 divide-white/10">
<div className="col-span-1 md:col-span-9 p-8 md:p-20 flex flex-col justify-center items-start">
<h2 className="text-2xl md:text-3xl tracking-tighter mb-4 text-zinc-100 font-semibold">
<span className="lang-en">Ready to build the future?</span>
<span className="lang-es">¿Listo para construir el futuro?</span>
</h2>
<p className="text-base text-zinc-500 font-light mb-8 max-w-md">
<span className="lang-en">
                    Based in Madrid, open to relocation within Spain and remote
                    international roles. Let's discuss innovation strategy and product
                    leadership.
                </span>
<span className="lang-es">
                    Con base en Madrid, abierto a relocalización en España y roles remotos internacionales. 
                    Hablemos de estrategia de innovación y liderazgo de producto.
                </span>
</p>
<div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
<a className="px-6 py-3 border text-[11px] font-medium uppercase tracking-widest transition-all duration-300 border-zinc-700 bg-zinc-900/50 text-zinc-100 hover:bg-zinc-100 hover:text-black hover:border-zinc-100 text-center" href="mailto:marinerografico@gmail.com">
<span className="lang-en">Start a Conversation</span>
<span className="lang-es">Iniciar Conversación</span>
</a>
</div>
</div>
<div className="col-span-1 md:col-span-3 p-8 md:p-16 flex flex-col justify-end bg-black/40">
<div className="mt-auto font-mono text-[10px] space-y-3 text-zinc-600">
<div className="flex items-center gap-2 text-zinc-500">
<iconify-icon height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>
<span className="lang-en">MADRID, SPAIN</span>
<span className="lang-es">MADRID, ESPAÑA</span>
</span>
</div>
<div className="border-t border-white/5 pt-3 space-y-1">
<span className="block text-zinc-500">40.4168° N</span>
<span className="block text-zinc-500">3.7038° W</span>
</div>
<div className="pt-6 text-zinc-700">© 2024 JUAN DIEGO G.R.</div>
</div>
</div>
</div>
</footer>
</div>

<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300" id="auth-modal">
<div className="bg-[#0A0A0B] border border-white/10 w-full max-w-sm p-6 rounded-lg shadow-2xl transform scale-95 transition-all duration-300 translate-y-4" id="auth-card">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2 text-zinc-100">
<iconify-icon className="text-emerald-500" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-sm font-medium">
<span className="lang-en">Restricted Access</span>
<span className="lang-es">Acceso Restringido</span>
</span>
</div>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center" onclick="closeAuthModal()">
<iconify-icon height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
<p className="text-xs text-zinc-400 leading-relaxed mb-6 font-light">
<span className="lang-en">This case study contains confidential data. Please enter your access code to view the full project details.</span>
<span className="lang-es">Este caso de estudio contiene datos confidenciales. Por favor introduce tu código de acceso.</span>
</p>
<form className="space-y-4" onsubmit="submitAuth(event)">
<div>
<input autocomplete="off" autofocus="" className="w-full bg-zinc-900 border border-white/10 rounded p-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all font-mono" id="auth-input" oninput="this.classList.remove('border-red-500', 'text-red-500'); this.classList.add('border-white/10')" placeholder="Enter password..." type="password"/>
</div>
<button className="w-full bg-zinc-100 hover:bg-white text-black text-xs font-semibold uppercase tracking-wide py-2.5 rounded transition-colors shadow-lg shadow-zinc-900/20" type="submit">
<span className="lang-en">UNLOCK PROJECT</span>
<span className="lang-es">DESBLOQUEAR PROYECTO</span>
</button>
</form>
</div>
</div>

<div className="hidden fixed inset-0 z-[60] bg-[#0A0A0B] text-zinc-400 overflow-y-auto w-full h-full" id="case-study-albino">
<div className="sticky top-0 z-50 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/10 w-full">
<div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 h-16">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-emerald-500 rounded-sm"></div>
<span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
<span className="lang-en">Confidential Case Study</span>
<span className="lang-es">Caso de Estudio Confidencial</span>
</span>
</div>
<button className="group flex items-center gap-2 px-3 py-1.5 rounded hover:bg-white/5 transition-all" onclick="closeCaseStudy()">
<span className="text-xs font-medium uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300">
<span className="lang-en">Close</span>
<span className="lang-es">Cerrar</span>
</span>
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" height="16" icon="solar:close-circle-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="max-w-[1000px] mx-auto px-6 py-12 md:py-20 animate-fade-in">

<div className="mb-16 md:mb-24 border-b border-white/10 pb-12">
<div className="flex items-center gap-3 mb-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] uppercase tracking-wider font-medium">
<iconify-icon height="12" icon="solar:lock-password-linear" width="12"></iconify-icon>
<span className="lang-en">Unlocked</span>
<span className="lang-es">Desbloqueado</span>
</span>
<span className="text-[10px] font-mono text-zinc-600 uppercase">
<span className="lang-en">Consumer Product &amp; Culture</span>
<span className="lang-es">Gran Consumo &amp; Cultura</span>
</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-100 tracking-tight mb-6 leading-[1.1]">
            Albino Vino
          </h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
<span className="lang-en">Building a Cultural Consumer Product: From Concept to Market Validation. Reimagining wine connectivity with new generations.</span>
<span className="lang-es">Construyendo un Producto de Consumo Cultural: Del Concepto a la Validación. Reimaginando la conexión del vino con nuevas generaciones.</span>
</p>
<div className="flex flex-wrap gap-12 mt-12 pt-8 border-t border-white/5">
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold">
<span className="lang-en">Role</span>
<span className="lang-es">Rol</span>
</span>
<span className="text-sm text-zinc-300">Founder &amp; Lead</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold">
<span className="lang-en">Scope</span>
<span className="lang-es">Alcance</span>
</span>
<span className="text-sm text-zinc-300">
<span className="lang-en">End-to-End Venture</span>
<span className="lang-es">Venture End-to-End</span>
</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold">
<span className="lang-en">Status</span>
<span className="lang-es">Estado</span>
</span>
<span className="text-sm text-zinc-300">
<span className="lang-en">Market Validation</span>
<span className="lang-es">Validación de Mercado</span>
</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-8 space-y-20">

<section className="space-y-6">
<h2 className="text-2xl text-zinc-200 font-semibold tracking-tight">
<span className="lang-en">Context &amp; Motivation</span>
<span className="lang-es">Contexto &amp; Motivación</span>
</h2>
<div className="prose prose-invert prose-zinc max-w-none font-light text-zinc-400">
<p>
<span className="lang-en">
                        Albino Vino was born from a personal and strategic question:
                        how can wine connect with new generations without losing
                        authenticity, cultural depth or product quality?
                    </span>
<span className="lang-es">
                        Albino Vino nace de una pregunta personal y estratégica:
                        ¿cómo puede el vino conectar con nuevas generaciones sin perder
                        autenticidad, profundidad cultural ni calidad de producto?
                    </span>
</p>
<p>
<span className="lang-en">
                        Albino Vino explores this intersection: wine as a cultural,
                        accessible and designed product, without renouncing origin or
                        quality.
                    </span>
<span className="lang-es">
                        Albino Vino explora esta intersección: el vino como producto
                        cultural, accesible y diseñado, sin renunciar a origen ni calidad.
                    </span>
</p>
</div>

<div className="grid grid-cols-2 gap-4 mt-8">
<div className="bg-[#0F0F10] border border-white/5 rounded-lg p-6 flex flex-col gap-4">
<span className="text-[10px] font-mono text-zinc-600 uppercase">
<span className="lang-en">Traditional Industry</span>
<span className="lang-es">Industria Tradicional</span>
</span>
<ul className="space-y-2 text-sm text-zinc-400 font-light">
<li className="flex gap-2">
<span className="text-zinc-600">•</span>
<span className="lang-en">Complex &amp; intimidating</span>
<span className="lang-es">Complejo e intimidante</span>
</li>
<li className="flex gap-2">
<span className="text-zinc-600">•</span>
<span className="lang-en">Highly codified</span>
<span className="lang-es">Altamente codificado</span>
</li>
</ul>
</div>
<div className="bg-[#0F0F10] border border-emerald-500/20 rounded-lg p-6 flex flex-col gap-4 relative overflow-hidden">
<div className="absolute top-0 right-0 w-12 h-12 bg-emerald-500/10 blur-xl rounded-full"></div>
<span className="text-[10px] font-mono text-emerald-500 uppercase">
<span className="lang-en">New Generation</span>
<span className="lang-es">Nueva Generación</span>
</span>
<ul className="space-y-2 text-sm text-zinc-300 font-light">
<li className="flex gap-2">
<span className="text-emerald-500">•</span>
<span className="lang-en">Accessibility</span>
<span className="lang-es">Accesibilidad</span>
</li>
<li className="flex gap-2">
<span className="text-emerald-500">•</span>
<span className="lang-en">Meaningful stories</span>
<span className="lang-es">Historias significativas</span>
</li>
</ul>
</div>
</div>
</section>

<section className="space-y-6">
<h2 className="text-2xl text-zinc-200 font-semibold tracking-tight">
<span className="lang-en">My Role</span>
<span className="lang-es">Mi Rol</span>
</h2>
<div className="prose prose-invert prose-zinc max-w-none font-light text-zinc-400">
<p>
<span className="lang-en">
                        I am the founder and product lead of Albino Vino, responsible
                        for the initiative end to end:
                    </span>
<span className="lang-es">
                        Soy fundador y product lead de Albino Vino, responsable de la
                        iniciativa de principio a fin:
                    </span>
</p>
<ul className="list-disc pl-4 space-y-2 marker:text-zinc-600">
<li><span className="lang-en">Opportunity framing and concept definition</span><span className="lang-es">Framing de oportunidad y definición de concepto</span></li>
<li><span className="lang-en">Product strategy and positioning</span><span className="lang-es">Estrategia de producto y posicionamiento</span></li>
<li><span className="lang-en">Narrative and brand conceptualization</span><span className="lang-es">Conceptualización de marca y narrativa</span></li>
</ul>
</div>
</section>
</div>

<div className="lg:col-span-4">
<div className="sticky top-24 space-y-8">

<div className="p-6 border border-white/10 bg-zinc-900/30 rounded-lg backdrop-blur-sm">
<h3 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="lang-en">Current Status</span>
<span className="lang-es">Estado Actual</span>
</h3>
<ul className="space-y-3">
<li className="text-sm text-zinc-300 flex items-center gap-2 font-light">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="lang-en">Narrative Defined</span>
<span className="lang-es">Narrativa Definida</span>
</li>
<li className="text-sm text-zinc-300 flex items-center gap-2 font-light">
<iconify-icon className="text-emerald-500 animate-spin" icon="solar:restart-linear"></iconify-icon>
<span className="lang-en">Product in Production</span>
<span className="lang-es">Producto en Producción</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="mt-24 pt-12 border-t border-white/10 flex justify-between items-center">
<p className="text-[10px] font-mono text-zinc-600">
            CONFIDENTIAL PROJECT — VENTURE LAB
          </p>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 cursor-pointer transition-all" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<iconify-icon height="16" icon="solar:arrow-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-[60] bg-[#0A0A0B] text-zinc-400 overflow-y-auto w-full h-full" id="case-study-dynamic">
<div className="sticky top-0 z-50 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/10 w-full">
<div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 h-16">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-emerald-500 rounded-sm"></div>
<span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
<span className="lang-en">Confidential Case Study</span>
<span className="lang-es">Caso de Estudio Confidencial</span>
</span>
</div>
<button className="group flex items-center gap-2 px-3 py-1.5 rounded hover:bg-white/5 transition-all" onclick="closeCaseStudy()">
<span className="text-xs font-medium uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300">
<span className="lang-en">Close</span>
<span className="lang-es">Cerrar</span>
</span>
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" height="16" icon="solar:close-circle-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="max-w-[1000px] mx-auto px-6 py-12 md:py-20 animate-fade-in">

<div className="mb-16 md:mb-24 border-b border-white/10 pb-12">
<div className="flex items-center gap-3 mb-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] uppercase tracking-wider font-medium">
<iconify-icon height="12" icon="solar:lock-password-linear" width="12"></iconify-icon>
<span className="lang-en">Unlocked</span>
<span className="lang-es">Desbloqueado</span>
</span>
<span className="text-[10px] font-mono text-zinc-600 uppercase" id="dyn-category">
                  CATEGORY
              </span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-100 tracking-tight mb-6 leading-[1.1]" id="dyn-title">
              Project Title
            </h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl leading-relaxed" id="dyn-desc">
              Short description of the project goes here.
            </p>
<div className="flex flex-wrap gap-12 mt-12 pt-8 border-t border-white/5">
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold">
<span className="lang-en">Role</span>
<span className="lang-es">Rol</span>
</span>
<span className="text-sm text-zinc-300">Lead Product Designer</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold">
<span className="lang-en">Scope</span>
<span className="lang-es">Alcance</span>
</span>
<span className="text-sm text-zinc-300">
<span className="lang-en">End-to-End</span>
<span className="lang-es">End-to-End</span>
</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold">
<span className="lang-en">Status</span>
<span className="lang-es">Estado</span>
</span>
<span className="text-sm text-zinc-300">
<span className="lang-en">Delivered</span>
<span className="lang-es">Entregado</span>
</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-8 space-y-20">
<section className="space-y-6">
<h2 className="text-2xl text-zinc-200 font-semibold tracking-tight">
<span className="lang-en">About the Project</span>
<span className="lang-es">Sobre el Proyecto</span>
</h2>
<div className="prose prose-invert prose-zinc max-w-none font-light text-zinc-400" id="dyn-content">

</div>
</section>
</div>

<div className="lg:col-span-4">
<div className="sticky top-24 space-y-8">

<div className="p-6 border border-white/10 bg-zinc-900/30 rounded-lg backdrop-blur-sm">
<h3 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="lang-en">Project Status</span>
<span className="lang-es">Estado del Proyecto</span>
</h3>
<ul className="space-y-3">
<li className="text-sm text-zinc-300 flex items-center gap-2 font-light">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="lang-en">Confidential Data</span>
<span className="lang-es">Datos Confidenciales</span>
</li>
<li className="text-sm text-zinc-300 flex items-center gap-2 font-light">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="lang-en">Review Completed</span>
<span className="lang-es">Revisión Completada</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="mt-24 pt-12 border-t border-white/10 flex justify-between items-center">
<p className="text-[10px] font-mono text-zinc-600">
              CONFIDENTIAL PROJECT
            </p>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 cursor-pointer transition-all" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<iconify-icon height="16" icon="solar:arrow-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-[60] bg-[#0A0A0B] min-h-screen overflow-y-auto transition-opacity duration-500" id="portfolio-index">
<header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0B]/90 backdrop-blur-md">
<div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-zinc-100 font-medium tracking-widest text-xs uppercase">
<div className="w-2 h-2 bg-zinc-100 rounded-sm"></div>
<span className="lang-en">Selected Works</span>
<span className="lang-es">Trabajos Seleccionados</span>
</div>
<button className="group flex items-center gap-2 px-3 py-1.5 rounded hover:bg-white/5 transition-all" onclick="closePortfolio()">
<span className="text-xs font-medium uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300">
<span className="lang-en">Close</span>
<span className="lang-es">Cerrar</span>
</span>
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" height="16" icon="solar:close-circle-linear" width="16"></iconify-icon>
</button>
</div>
</header>
<main className="max-w-[1400px] mx-auto px-6 py-12 md:py-20">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<h1 className="text-4xl md:text-6xl font-semibold text-zinc-100 tracking-tighter">
                    Index
                </h1>
</div>

<div className="w-full">

<div className="project-item group relative border-b border-white/5 hover:border-white/20 transition-colors" data-category="product strategy">
<button className="w-full flex items-center py-6 px-2 text-left focus:outline-none" onclick="openAuthModal('lending')">
<div className="w-1/2 md:w-5/12 pr-4">
<h3 className="text-xl md:text-2xl font-light text-zinc-300 group-hover:text-zinc-100 transition-colors">
<span className="lang-en">Digital Lending</span>
<span className="lang-es">Préstamos Digitales</span>
</h3>
</div>
<div className="hidden md:block md:w-5/12 text-sm text-zinc-500 font-light group-hover:text-zinc-400">
<span className="lang-en">Conversion Rate Optimization · UX Strategy</span>
<span className="lang-es">CRO · Estrategia UX</span>
</div>
<div className="w-1/2 md:w-2/12 text-right font-mono text-xs text-zinc-600 group-hover:text-zinc-400">
                        2023
                      </div>
</button>
</div>

<div className="project-item group relative border-b border-white/5 hover:border-white/20 transition-colors" data-category="venture product">
<button className="w-full flex items-center py-6 px-2 text-left focus:outline-none" onclick="openAuthModal('albino')">
<div className="w-1/2 md:w-5/12 pr-4">
<h3 className="text-xl md:text-2xl font-light text-zinc-300 group-hover:text-zinc-100 transition-colors">
                           Albino Vino
                        </h3>
</div>
<div className="hidden md:block md:w-5/12 text-sm text-zinc-500 font-light group-hover:text-zinc-400">
<span className="lang-en">Consumer Product · Digital Platform</span>
<span className="lang-es">Producto de Consumo · Plataforma Digital</span>
</div>
<div className="w-1/2 md:w-2/12 text-right font-mono text-xs text-zinc-600 group-hover:text-zinc-400">
                        2020
                      </div>
</button>
</div>
</div>
</main>
</div>



    </>
  );
}
