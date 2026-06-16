import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
brand: {
50: '#f0fdf4',
500: '#16a34a', // Emerald/Growth Green
600: '#15803d',
900: '#14532d',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        const canvas = document.getElementById('energyCanvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let particles = [];
        const particleCount = 100;
        
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        // Colors suited for High-End Personal Brand (Emerald/White/Zinc)
        const colors = [
            'rgb(255, 255, 255)', // White
            'rgb(200, 200, 200)', // Light Gray
            'rgb(16, 185, 129)',  // Touch of Green (Growth/Money)
            'rgb(5, 150, 105)'    // Darker Green
        ];

        class Particle {
            constructor(reset = false) {
                this.reset(reset);
            }

            reset(initial = false) {
                // Direction: Upward Flow (Growth/Ascension)
                this.x = Math.random() * width; 
                this.y = Math.random() * height;
                
                if (!initial) {
                    this.y = height + 10; // Start from bottom
                    this.x = Math.random() * width;
                }

                this.size = Math.random() * 2 + 0.5;
                this.speed = Math.random() * 2 + 1; // Slower, more elegant flow
                this.color = colors[Math.floor(Math.random() * colors.length)];
                
                // Angle: Mostly up, slight drift
                this.angle = -Math.PI / 2 + (Math.random() * 0.4 - 0.2); 
            }

            update() {
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;

                // Reset if out of bounds
                if (this.y < -20) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(true));
        }

        function animate() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            requestAnimationFrame(animate);
        }

        animate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-tr from-zinc-800 to-zinc-700 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="16" strokeWidth="1.5"></span>
</div>
<span className="text-white font-medium tracking-tighter text-lg">ARLO<span className="text-zinc-500">CREATORS</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#methodology">Metodología</a>
<a className="hover:text-white transition-colors" href="#services">Servicios</a>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center text-xs font-medium border border-white/10 rounded-full p-1 bg-zinc-900/50">
<button className="px-2 py-0.5 rounded-full bg-zinc-700 text-white shadow-sm">ES</button>
<button className="px-2 py-0.5 rounded-full text-zinc-500 hover:text-white transition-colors">EN</button>
</div>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="https://calendly.com/didier-dlengrand/llamada-de-conexion" target="_blank">Trabaja conmigo</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden min-h-[85vh] flex flex-col justify-center">

<canvas className="absolute inset-0 w-full h-full z-0 opacity-60 fade-mask" id="energyCanvas"></canvas>

<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black z-0 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-xs font-medium text-brand-500 mb-8 hover:bg-white/5 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                    Aceptando nuevos fundadores para Q1 &amp; Q2 2026
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-2xl">
                    Transforma tu reputación <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">en un motor de ingresos.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-xl leading-relaxed drop-shadow-md">
                    Ayudando a creadores e infonegocios a vender servicios, productos digitales y crear comunidades reales mediante la construcción de autoridad estratégica y movimientos sociales.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="h-12 px-6 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="https://calendly.com/didier-dlengrand/llamada-de-conexion" target="_blank">
                        Construye tu Autoridad
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="h-12 px-6 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm hover:bg-white/10 transition-colors text-white font-medium flex items-center justify-center" href="#methodology">
                        Ver Metodología
                    </a>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm relative z-20">
<div className="max-w-7xl mx-auto px-6 py-12">

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">€30K+</div>
<div className="text-sm text-zinc-500">Facturación Generada</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">15K+</div>
<div className="text-sm text-zinc-500">Miembros en Comunidad</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">3+</div>
<div className="text-sm text-zinc-500">Masterminds Lanzados</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">La Tríada de Influencia</h2>
<p className="text-zinc-400 max-w-2xl">No solo publicamos contenido. Diseñamos ecosistemas donde tu marca personal se convierte en la autoridad indiscutible, impulsando ingresos escalables.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/50">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-emerald-500" data-icon="lucide:crown" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Autoridad y Estrategia</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Definimos tu propuesta de valor única. Elaboramos la narrativa estratégica que eleva tu percepción de "proveedor" a "líder de la industria".</p>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/50">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-orange-500" data-icon="lucide:users" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Movimientos Sociales</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Creamos "Momentos Sociales" que trascienden los algoritmos. Construimos comunidades genuinas y movimientos, no solo audiencias.</p>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/50">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-blue-500" data-icon="lucide:gem" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Ecosistemas High-Ticket</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Diseño y lanzamiento de servicios premium, masterminds y productos digitales que tu comunidad estará deseando comprar.</p>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="methodology">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-blue-600 rounded-2xl blur opacity-20"></div>
<div className="relative rounded-xl border border-white/10 bg-zinc-900 p-6 shadow-2xl">

<div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-sm font-medium text-white">Flujo de Confianza &amp; Conversión</span>
</div>
<span className="text-xs text-zinc-500 font-mono">CLIENTE: FNDR-01</span>
</div>

<div className="space-y-6">

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-300 flex items-center gap-2"><span className="iconify" data-icon="lucide:wifi" data-width="14"></span> Alcance de Contenido</span>
<span className="text-emerald-400 font-mono">1.2M Vistas</span>
</div>
<div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-[75%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-300 flex items-center gap-2"><span className="iconify" data-icon="lucide:heart-handshake" data-width="14"></span> Fans Reales (Comunidad)</span>
<span className="text-orange-400 font-mono">15,000+</span>
</div>
<div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-orange-500/80 w-[55%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-300 flex items-center gap-2"><span className="iconify" data-icon="lucide:credit-card" data-width="14"></span> Ventas Servicios/Productos</span>
<span className="text-blue-400 font-mono">€125k/mes</span>
</div>
<div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500/80 w-[45%] rounded-full"></div>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-2 gap-4">
<div className="bg-black/40 rounded-lg p-3 border border-white/5">
<span className="text-xs text-zinc-500 block mb-1">Engagement</span>
<span className="text-lg font-mono text-white">+240%</span>
</div>
<div className="bg-black/40 rounded-lg p-3 border border-white/5">
<span className="text-xs text-zinc-500 block mb-1">Valor de Marca</span>
<span className="text-lg font-mono text-white">Alto</span>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Gestión de Proyectos para tu Influencia</h2>
<p className="text-zinc-400 mb-8 leading-relaxed">
                        Construir una marca personal requiere gestionar el caos. Actuamos como los Project Managers de tu imagen pública, orquestando conexiones y estrategias para que puedas concentrarte en tu zona de genio.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
<span className="iconify text-white" data-icon="lucide:check" data-width="12"></span>
</div>
<div>
<strong className="text-white font-medium block text-sm">Conexiones Estratégicas</strong>
<span className="text-sm text-zinc-500">Te conectamos con otras marcas personales de alto nivel para polinizar audiencias y autoridad.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
<span className="iconify text-white" data-icon="lucide:check" data-width="12"></span>
</div>
<div>
<strong className="text-white font-medium block text-sm">Diseño de Experiencias</strong>
<span className="text-sm text-zinc-500">Desde Masterminds hasta cohortes digitales, estructuramos tus ofertas para maximizar la percepción de valor.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
<span className="iconify text-white" data-icon="lucide:check" data-width="12"></span>
</div>
<div>
<strong className="text-white font-medium block text-sm">De Audiencia a Comunidad</strong>
<span className="text-sm text-zinc-500">Convirtiendo seguidores pasivos en un "movimiento social" que promueve activamente tu marca.</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Visualiza tu Potencial</h2>
<p className="text-zinc-400 max-w-2xl mx-auto">Mira cómo el branding estratégico se traduce en métricas reales de negocio.</p>
</div>
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-full">
<div>
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4">
<span className="iconify text-white" data-icon="lucide:calendar" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Agenda una Llamada</h3>
<p className="text-sm text-zinc-400 mb-6">Discutamos cómo podemos estructurar tu marca para escalar.</p>
</div>
<form className="space-y-3" onsubmit="event.preventDefault(); window.open('https://calendly.com/didier-dlengrand/llamada-de-conexion', '_blank');">
<div className="relative">
<input className="w-full bg-black border border-zinc-800 rounded-lg h-10 pl-4 pr-4 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors" placeholder="Tu Web / Red Social" type="text"/>
</div>
<div className="relative">
<input className="w-full bg-black border border-zinc-800 rounded-lg h-10 pl-4 pr-4 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors" placeholder="Correo Electrónico" type="email"/>
</div>
<button className="w-full h-10 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors" type="submit">Solicitar Auditoría</button>
</form>
</div>

<div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 h-full">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-medium text-white">Est. Monetización</h3>
<span className="text-xs bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded border border-emerald-500/20">Proyección</span>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-zinc-400">Tamaño Audiencia Actual</span>
<span className="text-white font-mono">50,000</span>
</div>
<input max="100000" min="1000" type="range" value="50000"/>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
<div>
<span className="text-xs text-zinc-500 block mb-1">Fans Verdaderos</span>
<span className="text-lg font-medium text-white">1,000 <span className="text-sm font-normal text-zinc-500">(2%)</span></span>
</div>
<div>
<span className="text-xs text-zinc-500 block mb-1">Ingresos Anuales Pot.</span>
<span className="text-lg font-medium text-white">€1.2M+</span>
</div>
</div>
<p className="text-xs text-zinc-600 mt-4">
                            *Basado en servicios high-ticket (€5k+) y modelos de conversión mastermind.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">¿Listo para crear tu movimiento?</h2>
<p className="text-zinc-400 text-lg mb-10">Únete a los fundadores y marcas que están dominando su mercado a través del posicionamiento estratégico y la arquitectura de comunidad.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center" href="https://calendly.com/didier-dlengrand/llamada-de-conexion" target="_blank">
                    Empezar Ahora
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="16"></span>
<span className="text-white font-medium tracking-tighter">ARLO CREATORS</span>
</a>
<p className="text-sm text-zinc-500 mb-6">
                    Estrategia de Marca, Gestión de Proyectos y Arquitectura de Comunidades para el fundador moderno.
                </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="https://www.linkedin.com/in/didierlengrand/" target="_blank"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Servicios</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Estrategia de Marca</a></li>
<li><a className="hover:text-white transition-colors" href="#">Creación de Comunidad</a></li>
<li><a className="hover:text-white transition-colors" href="#">Lanzamiento Mastermind</a></li>
<li><a className="hover:text-white transition-colors" href="#">Momentos Sociales</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Compañía</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Sobre Mí</a></li>
<li><a className="hover:text-white transition-colors" href="https://calendly.com/didier-dlengrand/llamada-de-conexion">Aplicar</a></li>
<li><a className="hover:text-white transition-colors" href="#">Newsletter</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Recursos</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Auditoría de Marca</a></li>
<li><a className="hover:text-white transition-colors" href="#">Guía de Movimiento</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacidad</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center md:text-left">
<p className="text-xs text-zinc-600">© 2024 Arlo Creators. Todos los derechos reservados.</p>
</div>
</footer>



    </>
  );
}
