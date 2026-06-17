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



        // --- 1. Reveal Animation Observer ---
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });

        // --- 2. 3D Tilt & Spotlight Logic ---
        function initTilt() {
            document.addEventListener('mousemove', (e) => {
                // Spotlight Update
                document.querySelectorAll('.spotlight-card').forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });

                // Tilt Update
                document.querySelectorAll('.tilt-card').forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg
                        const rotateY = ((x - centerX) / centerX) * 5;
                        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    } else {
                        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
                    }
                });
            });
            
            // Reset on mouse leave
            document.querySelectorAll('.tilt-card').forEach(card => {
                card.addEventListener('mouseleave', () => {
                    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
                });
            });
        }
        initTilt();

        // --- 3. Slider Control ---
        window.scrollContainer = (id, amount) => {
            const container = document.getElementById(id);
            container.scrollBy({ left: amount, behavior: 'smooth' });
        }

        // --- 4. Matter.js Physics Implementation ---
        window.onload = function() {
            const Engine = Matter.Engine,
                  Render = Matter.Render,
                  Runner = Matter.Runner,
                  Bodies = Matter.Bodies,
                  Composite = Matter.Composite,
                  Mouse = Matter.Mouse,
                  MouseConstraint = Matter.MouseConstraint;

            const container = document.getElementById('physics-container');
            const width = container.offsetWidth;
            const height = container.offsetHeight;

            // Create engine
            const engine = Engine.create();
            const world = engine.world;

            // Create invisible renderer (we only need the engine, we render with DOM)
            // But we need mouse interaction, so we set up a basic runner
            const runner = Runner.create();
            Runner.run(runner, engine);

            // Walls
            const wallOptions = { isStatic: true, render: { visible: false } };
            const ground = Bodies.rectangle(width / 2, height + 30, width, 60, wallOptions);
            const leftWall = Bodies.rectangle(-30, height / 2, 60, height, wallOptions);
            const rightWall = Bodies.rectangle(width + 30, height / 2, 60, height, wallOptions);
            Composite.add(world, [ground, leftWall, rightWall]);

            // DOM Bodies Mapping
            const domElements = document.querySelectorAll('#skill-templates .skill-card');
            const bodies = [];
            const elements = [];

            domElements.forEach((template, index) => {
                // Clone the DOM element
                const el = template.cloneNode(true);
                el.classList.add('physics-item');
                container.appendChild(el);
                elements.push(el);

                // Get dimensions (approximate)
                const elWidth = 140; // Approx based on content
                const elHeight = 40; 
                
                // Create random position
                const x = Math.random() * (width - 100) + 50;
                const y = -Math.random() * 500 - 50; // Start above screen

                const body = Bodies.rectangle(x, y, elWidth, elHeight, {
                    restitution: 0.5, // Bounciness
                    friction: 0.1,
                    chamfer: { radius: 5 } // Rounded corners physics
                });
                bodies.push(body);
            });

            Composite.add(world, bodies);

            // Mouse Control (Invisible but active)
            const mouse = Mouse.create(container);
            const mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: { visible: false }
                }
            });
            Composite.add(world, mouseConstraint);

            // Prevent page scrolling when using mouse inside canvas
            mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
            mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

            // Sync Loop
            function update() {
                bodies.forEach((body, index) => {
                    const el = elements[index];
                    const { x, y } = body.position;
                    const rotation = body.angle;
                    
                    // Apply transforms
                    el.style.transform = `translate(${x - 70}px, ${y - 20}px) rotate(${rotation}rad)`; 
                    // Note: -70 and -20 are roughly half width/height to center the div on the body
                });
                requestAnimationFrame(update);
            }
            update();

            // Resize Handler
            window.addEventListener('resize', () => {
                // Simple reset for demo purposes
                Matter.Body.setPosition(ground, { x: container.offsetWidth / 2, y: container.offsetHeight + 30 });
                Matter.Body.setPosition(rightWall, { x: container.offsetWidth + 30, y: container.offsetHeight / 2 });
            });
        };
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid-pattern"></div>
<div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-blue-400 opacity-5 blur-[120px]"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl transition-all duration-300">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white shadow-sm">
<svg aria-hidden="true" data-icon="lucide:terminal-square" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m7 11l2-2l-2-2m4 6h4M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-semibold tracking-tight uppercase">EKAIN ZALLO</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-500">
<a className="hover:text-black transition-colors" href="#about">Sobre mí</a>
<a className="hover:text-black transition-colors" href="#services">Servicios</a>
<a className="hover:text-black transition-colors" href="#work">Proyectos</a>
<a className="hover:text-black transition-colors" href="#skills">Stack</a>
<a className="hover:text-black transition-colors" href="#faq">FAQ</a>
<a className="hover:text-black transition-colors" href="#contact">Contacto</a>
</div>
<div className="flex items-center gap-4">
<a className="bg-black text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-sm flex items-center gap-2" href="#contact">
<span>Pedir análisis (48h)</span>
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</nav>

<section className="min-h-screen flex flex-col items-center justify-center relative pt-20 px-4 overflow-hidden">
<div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-[10px] uppercase tracking-wider font-medium text-gray-600">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
      PRESENCIA DIGITAL
    </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-black leading-[1.1]">
      CONVIERTO TU WEB<br/>
<span className="text-gray-400">EN UN CANAL DE VENTAS.</span>
</h1>
<p className="text-sm md:text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
      Si tu web está vieja y no te entran leads, no es suerte: es estructura, mensaje y conversión. Diseño y construyo webs informativas claras, rápidas y optimizadas para generar confianza y ventas.
    </p>
<div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-black text-white text-sm px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-sm flex items-center justify-center gap-2" href="#contact">
            Pedir análisis (48h)
        </a>
<a className="w-full sm:w-auto bg-white border border-gray-200 text-gray-700 text-sm px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2" href="#work">
            Ver trabajos
        </a>
</div>

<div className="mt-12 w-full max-w-md bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-xl overflow-hidden text-left mx-auto tilt-card cursor-pointer group" id="hero-terminal" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'}}>
<div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-100 bg-gray-50/50">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
<div className="ml-auto text-[10px] text-gray-400 font-mono">offer_details.json</div>
</div>
<div className="tilt-inner text-xs text-gray-700 font-mono pt-6 pr-6 pb-6 pl-6 space-y-2">
<div className="flex items-center gap-2">
<span className="text-purple-500">const</span>
<span className="text-blue-600">proposal</span>
<span className="text-gray-400">=</span>
<span className="text-gray-600">{</span>
</div>
<div className="pl-4 flex gap-2">
<span className="text-gray-800">diagnostico:</span> <span className="text-green-600">"48h"</span>,
        </div>
<div className="pl-4 flex gap-2">
<span className="text-gray-800">entrega:</span> <span className="text-green-600">"14 días"</span>,
        </div>
<div className="pl-4 flex gap-2">
<span className="text-gray-800">seo_base:</span> <span className="text-blue-500">true</span>,
        </div>
<div className="pl-4 flex gap-2">
<span className="text-gray-800">mantenimiento:</span> <span className="text-green-600">"opcional"</span>
</div>
<div className="text-gray-600">}</div>
<div className="flex items-center gap-2 mt-4">
<span className="text-green-600">➜</span>
<span className="w-2 h-4 bg-black animate-pulse"></span>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-gray-200 bg-white" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center reveal">
<div className="space-y-6">
<h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Sobre mí</h2>
<h3 className="text-3xl font-semibold tracking-tight text-black">
                        Obsesionado con claridad, <br/>confianza y acción.
                    </h3>
<p className="text-sm text-gray-600 leading-relaxed max-w-md">
                        No hago "una web bonita". Hago una web que se entiende rápido, responde objeciones y empuja a contactar. Actúo como socio estratégico: ordeno mensaje, estructura y diseño para que tu presencia digital trabaje por ti.
                    </p>
<div className="grid grid-cols-2 gap-4 pt-4">
<div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
<svg aria-hidden="true" data-icon="lucide:layout-list" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect><path d="M14 4h7"></path><path d="M14 9h7"></path><path d="M14 15h7"></path><path d="M14 20h7"></path></svg>
<div className="text-xs font-semibold mt-2">Estructura que convierte</div>
</div>
<div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
<svg aria-hidden="true" data-icon="lucide:trending-up" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
<div className="text-xs font-semibold mt-2">SEO base + mejora</div>
</div>
</div>
</div>

<div className="relative h-[400px] w-full rounded-2xl overflow-hidden group tilt-card" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'}}>
<img alt="Workspace Clean" className="absolute inset-0 w-full h-[110%] object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&amp;fit=crop&amp;q=80&amp;w=1200" style={{transformOrigin: 'bottom'}}/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-gray-200 bg-white overflow-hidden" id="services">
<div className="max-w-6xl mx-auto px-6 mb-10 flex items-end justify-between">
<div>
<h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Capabilities</h2>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-black">Servicios</h3>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" onclick="scrollContainer('services-slider', -300)">
<svg aria-hidden="true" data-icon="lucide:arrow-left" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" onclick="scrollContainer('services-slider', 300)">
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 no-scrollbar max-w-full" id="services-slider">

<div className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-xl border border-gray-200 snap-center spotlight-card hover:border-gray-300 transition-colors" style={{'--mouse-x': '417px', '--mouse-y': '2484.5px'}}>
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 mb-6 text-black">
<svg aria-hidden="true" data-icon="lucide:layout-template" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<h4 className="text-lg font-semibold mb-2">Web Informativa de Captación</h4>
<p className="text-xs text-gray-500 leading-relaxed">
                    Diseño estratégico enfocado en resultados. Estructura sólida, copy base persuasivo, diseño limpio y llamadas a la acción claras.
                </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>Estructura + Copy</li>
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>Diseño + CTAs</li>
</ul>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-xl border border-gray-200 snap-center spotlight-card hover:border-gray-300 transition-colors" style={{'--mouse-x': '43px', '--mouse-y': '2484.5px'}}>
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 mb-6 text-black">
<svg aria-hidden="true" data-icon="lucide:refresh-ccw" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M3 3v5h5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M16 16h5v5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-lg font-semibold mb-2">Rediseño / Migración</h4>
<p className="text-xs text-gray-500 leading-relaxed">
                    Modernización integral de webs obsoletas. Mejora radical de la experiencia de usuario (UX), adaptación móvil perfecta y optimización de velocidad.
                </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>UX / UI Moderno</li>
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>Mobile First</li>
</ul>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-xl border border-gray-200 snap-center spotlight-card hover:border-gray-300 transition-colors" style={{'--mouse-x': '-331px', '--mouse-y': '2484.5px'}}>
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 mb-6 text-black">
<svg aria-hidden="true" data-icon="lucide:shapes" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
</div>
<h4 className="text-lg font-semibold mb-2">Branding &amp; Identidad</h4>
<p className="text-xs text-gray-500 leading-relaxed">
                    Creación de una identidad visual coherente que transmita los valores de tu negocio. Logotipos memorables, paletas de color y tipografías que diferencian.
                </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>Logo + Manual de Marca</li>
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>Sistema Visual Completo</li>
</ul>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-xl border border-gray-200 snap-center spotlight-card hover:border-gray-300 transition-colors" style={{'--mouse-x': '-705px', '--mouse-y': '2484.5px'}}>
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 mb-6 text-black">
<svg aria-hidden="true" data-icon="lucide:bar-chart-big" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><rect height="7" rx="1" width="4" x="7" y="10"></rect><rect height="12" rx="1" width="4" x="15" y="5"></rect></svg>
</div>
<h4 className="text-lg font-semibold mb-2">SEO Base</h4>
<p className="text-xs text-gray-500 leading-relaxed">
                    Configuración técnica esencial para que Google te encuentre. Optimización de headings, meta-etiquetas, enlazado interno e indexación correcta.
                </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>Técnico + On-page</li>
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>Velocidad de carga</li>
</ul>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-xl border border-gray-200 snap-center spotlight-card hover:border-gray-300 transition-colors" style={{'--mouse-x': '-1079px', '--mouse-y': '2484.5px'}}>
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 mb-6 text-black">
<svg aria-hidden="true" data-icon="lucide:wrench" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-lg font-semibold mb-2">Mantenimiento &amp; Mejora</h4>
<p className="text-xs text-gray-500 leading-relaxed">
                    Tu web no se queda estática. Revisión mensual, pequeños cambios de contenido y ajustes continuos de SEO on-page para seguir creciendo.
                </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>Cambios mensuales</li>
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>Revisión técnica</li>
</ul>
</div>
</div>
</section>

<section className="bg-gray-50 border-t border-gray-200 relative" id="skills">
<div className="absolute top-8 left-0 right-0 text-center z-10 pointer-events-none">
<h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Stack Tecnológico</h2>
<p className="text-xs text-gray-500 mt-2">Tecnología robusta y escalable</p>
</div>

<div className="cursor-grab active:cursor-grabbing" id="physics-container"><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none hover:shadow-md transition-shadow physics-item" style={{transform: 'translate(991.333px, -103.55px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:code-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> React
            </div><div className="skill-card bg-black text-white border border-black shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium select-none physics-item" style={{transform: 'translate(875.371px, -199.035px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:box-select" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 0 0-2 2m16-2a2 2 0 0 1 2 2m0 14a2 2 0 0 1-2 2M5 21a2 2 0 0 1-2-2M9 3h1M9 21h1m4-18h1m-1 18h1M3 9v1m18-1v1M3 14v1m18-1v1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Next.js
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(787.983px, -268.629px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:wind" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Tailwind
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(623.849px, -415.274px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:database" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg> Postgres
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(23.2622px, -277.458px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:cpu" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg> Node.js
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(77.0487px, -249.882px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:type" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> TypeScript
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(310.865px, -394.627px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:cloud" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Vercel
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(932.105px, -320.55px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:layout" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18M9 21V9"></path></g></svg> Figma
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none hover:shadow-md transition-shadow physics-item" style={{transform: 'translate(1031.81px, -275.08px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:code-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> React
            </div><div className="skill-card bg-black text-white border border-black shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium select-none physics-item" style={{transform: 'translate(901.66px, -452.709px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:box-select" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 0 0-2 2m16-2a2 2 0 0 1 2 2m0 14a2 2 0 0 1-2 2M5 21a2 2 0 0 1-2-2M9 3h1M9 21h1m4-18h1m-1 18h1M3 9v1m18-1v1M3 14v1m18-1v1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Next.js
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(-9.06357px, -193.763px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:wind" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Tailwind
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(518.971px, -218.282px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:database" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg> Postgres
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(3.52584px, -465.739px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:cpu" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg> Node.js
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(321.852px, -454.264px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:type" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> TypeScript
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(93.798px, -210.864px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:cloud" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Vercel
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(456.512px, -131.653px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:layout" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18M9 21V9"></path></g></svg> Figma
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none hover:shadow-md transition-shadow physics-item" style={{transform: 'translate(1544.53px, -129.118px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:code-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> React
            </div><div className="skill-card bg-black text-white border border-black shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium select-none physics-item" style={{transform: 'translate(799.647px, -486.377px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:box-select" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 0 0-2 2m16-2a2 2 0 0 1 2 2m0 14a2 2 0 0 1-2 2M5 21a2 2 0 0 1-2-2M9 3h1M9 21h1m4-18h1m-1 18h1M3 9v1m18-1v1M3 14v1m18-1v1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Next.js
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(738.276px, -239.643px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:wind" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Tailwind
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(417.956px, -98.6962px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:database" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg> Postgres
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(134.189px, -393.259px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:cpu" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg> Node.js
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(456.647px, -430.608px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:type" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> TypeScript
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(470.141px, -236.773px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:cloud" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Vercel
            </div><div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none physics-item" style={{transform: 'translate(1540.36px, -183.161px) rotate(0rad)'}}>
<svg aria-hidden="true" data-icon="lucide:layout" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18M9 21V9"></path></g></svg> Figma
            </div></div>

<div className="hidden" id="skill-templates">
<div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none hover:shadow-md transition-shadow">
<svg aria-hidden="true" data-icon="lucide:code-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> React
            </div>
<div className="skill-card bg-black text-white border border-black shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium select-none">
<svg aria-hidden="true" data-icon="lucide:box-select" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 0 0-2 2m16-2a2 2 0 0 1 2 2m0 14a2 2 0 0 1-2 2M5 21a2 2 0 0 1-2-2M9 3h1M9 21h1m4-18h1m-1 18h1M3 9v1m18-1v1M3 14v1m18-1v1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Next.js
            </div>
<div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none">
<svg aria-hidden="true" data-icon="lucide:wind" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Tailwind
            </div>
<div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none">
<svg aria-hidden="true" data-icon="lucide:database" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg> Postgres
            </div>
<div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none">
<svg aria-hidden="true" data-icon="lucide:cpu" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg> Node.js
            </div>
<div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none">
<svg aria-hidden="true" data-icon="lucide:type" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> TypeScript
            </div>
<div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none">
<svg aria-hidden="true" data-icon="lucide:cloud" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Vercel
            </div>
<div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none">
<svg aria-hidden="true" data-icon="lucide:layout" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18M9 21V9"></path></g></svg> Figma
            </div>
</div>
</section>

<section className="py-24 px-6 bg-gray-50" id="work">
<div className="max-w-6xl mx-auto space-y-12">
<div className="flex items-end justify-between reveal">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-black">Proyectos Seleccionados</h3>
<a className="text-xs font-medium text-gray-500 hover:text-black flex items-center gap-1 transition-colors" href="#">
                    Ver Archivo <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-white border border-gray-200 rounded-xl overflow-hidden relative mb-4 tilt-card" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'}}>
<img alt="Fintech Dashboard" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-semibold text-black">Consultoría Financiera</h4>
<p className="text-xs text-gray-500 mt-1">Web corporativa y captación de leads</p>
</div>
<span className="px-2 py-1 rounded border border-gray-200 text-[10px] text-gray-500 bg-white">2023</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-white border border-gray-200 rounded-xl overflow-hidden relative mb-4 tilt-card" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'}}>
<img alt="E-Commerce API" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-semibold text-black">E-Commerce B2B</h4>
<p className="text-xs text-gray-500 mt-1">Rediseño y mejora de conversión</p>
</div>
<span className="px-2 py-1 rounded border border-gray-200 text-[10px] text-gray-500 bg-white">2024</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-gray-200 bg-white overflow-hidden">
<div className="max-w-6xl mx-auto px-6 space-y-12">
<div className="flex items-center justify-between">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Lo que dicen mis clientes</h3>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" onclick="scrollContainer('testimonial-slider', -350)">
<svg aria-hidden="true" data-icon="lucide:arrow-left" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" onclick="scrollContainer('testimonial-slider', 350)">
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 no-scrollbar" id="testimonial-slider">

<div className="min-w-[300px] md:min-w-[400px] p-8 bg-gray-50 rounded-xl border border-gray-100 flex flex-col justify-between snap-center spotlight-card" style={{'--mouse-x': '378px', '--mouse-y': '688.5px'}}>
<div>
<svg aria-hidden="true" data-icon="lucide:quote" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-xs text-gray-700 leading-relaxed font-medium mt-4">
                            "Ekain entendió perfectamente nuestro problema. No solo rediseñó la web, sino que organizó toda la información para que los clientes entendieran qué vendemos en segundos."
                        </p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold">AG</div>
<div>
<div className="text-xs font-semibold">Ana García</div>
<div className="text-[10px] text-gray-500">CEO, Consultora AG</div>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] p-8 bg-gray-50 rounded-xl border border-gray-100 flex flex-col justify-between snap-center spotlight-card" style={{'--mouse-x': '-204.7265625px', '--mouse-y': '688.5px'}}>
<div>
<svg aria-hidden="true" data-icon="lucide:quote" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-xs text-gray-700 leading-relaxed font-medium mt-4">
                            "La comunicación fue fluida y el resultado superó las expectativas. La velocidad de carga mejoró un 200% y empezamos a recibir formularios la primera semana."
                        </p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold">MR</div>
<div>
<div className="text-xs font-semibold">Miguel Ruiz</div>
<div className="text-[10px] text-gray-500">Founder, StartUp Inc</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-gray-200 border-t pt-24 pr-6 pb-24 pl-6" id="faq" style={{animation: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both'}}>
<style>
        @keyframes shake {
            10%, 90% { transform: translate3d(-1px, 0, 0); }
            20%, 80% { transform: translate3d(2px, 0, 0); }
            30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
            40%, 60% { transform: translate3d(4px, 0, 0); }
        }
    </style>
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h3 className="text-2xl font-semibold tracking-tight text-black">Preguntas Frecuentes</h3>
</div>
<div className="space-y-4">

<details className="group bg-white border border-gray-200 rounded-lg open:border-black/10 transition-colors">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-gray-900">¿Cuánto cuesta un proyecto web?</span>
<span className="transition-transform group-open:rotate-180 text-gray-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0">
<p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                        Depende del alcance y la funcionalidad. Proyectos corporativos estándar suelen partir de una base fija, mientras que desarrollos a medida o e-commerce requieren un presupuesto personalizado tras el diagnóstico.
                    </p>
</div>
</details>

<details className="group bg-white border border-gray-200 rounded-lg open:border-black/10 transition-colors">
<summary className="flex cursor-pointer pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<span className="text-sm font-medium text-gray-900">¿Cuánto tiempo se tarda en desarrollar?</span>
<span className="transition-transform group-open:rotate-180 text-gray-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0">
<p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                        Para una web corporativa típica, el proceso dura entre 3 y 5 semanas desde que recibo todo el contenido. Proyectos más complejos pueden extenderse a 6-8 semanas.
                    </p>
</div>
</details>

<details className="group bg-white border border-gray-200 rounded-lg open:border-black/10 transition-colors">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-gray-900">¿La web estará optimizada para SEO?</span>
<span className="transition-transform group-open:rotate-180 text-gray-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0">
<p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                        Sí. Todas mis entregas incluyen SEO Técnico base: estructura semántica, velocidad de carga (Core Web Vitals), meta-etiquetas optimizadas, sitemap y configuración en Google Search Console.
                    </p>
</div>
</details>

<details className="group bg-white border border-gray-200 rounded-lg open:border-black/10 transition-colors">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-gray-900">¿Podré editar los textos yo mismo?</span>
<span className="transition-transform group-open:rotate-180 text-gray-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0">
<p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                        Absolutamente. Implemento un CMS (Gestor de Contenidos) o configuro el código para que puedas cambiar textos, imágenes y crear nuevas entradas de blog sin necesidad de tocar código.
                    </p>
</div>
</details>

<details className="group bg-white border border-gray-200 rounded-lg open:border-black/10 transition-colors">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-gray-900">¿Necesito contratar mantenimiento mensual?</span>
<span className="transition-transform group-open:rotate-180 text-gray-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0">
<p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                        No es obligatorio, la web es tuya al 100%. Sin embargo, ofrezco planes de mantenimiento para actualizaciones de seguridad, pequeños cambios de diseño y monitorización de rendimiento si prefieres despreocuparte.
                    </p>
</div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-50 border-t border-gray-200" id="contact">
<div className="max-w-xl mx-auto reveal">
<div className="text-center mb-10 space-y-2">
<h3 className="text-2xl font-semibold tracking-tight">Hablemos de tu proyecto</h3>
<p className="text-sm text-gray-500">Cuéntame tus objetivos y vemos cómo alcanzarlos.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] font-semibold text-gray-500 uppercase">Nombre</label>
<input className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all" placeholder="Tu nombre" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-gray-500 uppercase">Email</label>
<input className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all" placeholder="hola@ejemplo.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-gray-500 uppercase">Tipo de Proyecto</label>
<select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all text-gray-500">
<option>Web Informativa / Captación</option>
<option>Rediseño / Migración</option>
<option>Branding &amp; Identidad</option>
<option>Consultoría SEO / Técnica</option>
<option>Otro</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-gray-500 uppercase">Mensaje</label>
<textarea className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all" placeholder="Detalles de tu proyecto..." rows="4"></textarea>
</div>
<button className="w-full bg-black text-white text-sm font-medium py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-sm tilt-card" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'}} type="button">
<svg aria-hidden="true" data-icon="lucide:send" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Enviar Mensaje
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
<svg aria-hidden="true" data-icon="lucide:terminal-square" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m7 11l2-2l-2-2m4 6h4M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs font-bold tracking-tight uppercase">EKAIN ZALLO</span>
</div>
<p className="text-[10px] text-gray-500 leading-relaxed max-w-[180px]">
                        Convirtiendo webs en herramientas de venta mediante estructura y diseño.
                    </p>
</div>
<div className="space-y-3">
<h4 className="text-[10px] font-semibold text-gray-900 uppercase">Mapa del sitio</h4>
<ul className="space-y-2 text-[10px] text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Inicio</a></li>
<li><a className="hover:text-black transition-colors" href="#about">Sobre mí</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-[10px] font-semibold text-gray-900 uppercase">Redes</h4>
<ul className="space-y-2 text-[10px] text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-black transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-[10px] font-semibold text-gray-900 uppercase">Legal</h4>
<ul className="space-y-2 text-[10px] text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Privacidad</a></li>
<li><a className="hover:text-black transition-colors" href="#">Términos</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8">
<div className="text-[10px] text-gray-400">© 2024 Ekain Zallo.</div>
<div className="flex items-center gap-2 text-[10px] text-gray-400 mt-2 md:mt-0">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span>Sistemas operativos</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
