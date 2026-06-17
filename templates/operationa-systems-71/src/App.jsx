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
theme: {
extend: {
colors: {
brand: {
black: '#050505',
green: '#25E0B7',
darkGreen: '#0F2E26',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['Space Mono', 'monospace'],
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scan': 'scan 4s linear infinite',
},
keyframes: {
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
}
}
}
}
}



        const canvas = document.getElementById('networkCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        const particleCount = 60; // Density
        const connectionDistance = 150;
        const mouseDistance = 200;

        let mouse = { x: null, y: null };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5; // Slow movement
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 1.5 + 0.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction (Antigravity/Repel)
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseDistance) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouseDistance - distance) / mouseDistance;
                        const directionX = forceDirectionX * force * 2; // Strength
                        const directionY = forceDirectionY * force * 2;

                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = '#25E0B7';
                ctx.fill();
            }
        }

        function init() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Draw connections
                for (let j = i; j < particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx*dx + dy*dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        let opacity = 1 - (distance / connectionDistance);
                        ctx.strokeStyle = 'rgba(37, 224, 183, ' + (opacity * 0.2) + ')'; // Brand green low opacity
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        }

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            init();
        }

        resize();
        animate();

        // Initialize Lucide icons
        lucide.createIcons();
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<canvas className="fixed inset-0 z-0 opacity-40 pointer-events-none" height="868" id="networkCanvas" width="1440"></canvas>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
<span className="font-display font-semibold tracking-tight text-lg text-white">PROCESSIA</span>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-mono text-brand-green border border-brand-green/30 px-4 py-2 hover:bg-brand-green/10 transition-all duration-300 rounded-sm uppercase tracking-wider" href="#diagnostico">
<span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                Solicitar Diagnóstico
            </a>
</div>
</header>
<main className="relative z-10 pt-20">

<section className="min-h-[90vh] flex flex-col border-white/5 border-b pr-6 pl-6 relative items-center justify-center">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
<div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mx-auto mb-4">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
</span>
<span className="text-xs font-mono text-gray-300 tracking-wide uppercase">System Operational</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.1]">
                    El sistema que pone <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">orden en tu empresa.</span>
</h1>
<p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Visión real. Bloqueos visibles. Decisiones claras.
                </p>
<div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="group relative px-8 py-4 bg-brand-green text-brand-black font-semibold tracking-tight hover:bg-white transition-all duration-300 clip-path-polygon" href="#diagnostico">
<span className="group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 bg-transparent w-full h-full border-white/20 border absolute top-0 right-0 bottom-0 left-0 translate-x-1 translate-y-1"></span>
                        Activar Diagnóstico
                        <svg className="lucide lucide-arrow-right inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="pt-12 flex flex-wrap justify-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-wider">
<div className="flex items-center gap-2 px-3 py-1.5 border border-white/5 rounded bg-black/40">
<svg className="lucide lucide-building-2 w-3 h-3 text-brand-green" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
                        Pymes 10-50 Empleados
                    </div>
<div className="flex items-center gap-2 px-3 py-1.5 border border-white/5 rounded bg-black/40">
<svg className="lucide lucide-cpu w-3 h-3 text-brand-green" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
                        Implantación Real
                    </div>
<div className="flex items-center gap-2 px-3 py-1.5 border border-white/5 rounded bg-black/40">
<svg className="lucide lucide-x-circle w-3 h-3 text-red-500" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                        No SaaS
                    </div>
<div className="flex items-center gap-2 px-3 py-1.5 border border-white/5 rounded bg-black/40">
<svg className="lucide lucide-shield-check w-3 h-3 text-brand-green" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                        Sin Licencias
                    </div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-green/50 to-transparent"></div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-6xl mx-auto">
<div className="mb-16 md:flex justify-between items-end border-l-2 border-brand-green/30 pl-6">
<h2 className="font-display text-3xl md:text-5xl font-medium max-w-2xl leading-tight">
                        Tu empresa no está desordenada por falta de ganas. 
                        <span className="text-gray-500">Está desordenada por falta de sistema.</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 group hover:border-brand-green/40 transition-colors duration-300">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-6 text-brand-green group-hover:text-white transition-colors">
<svg className="lucide lucide-file-warning w-5 h-5" data-lucide="file-warning" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<h3 className="text-lg font-medium mb-3 text-white">Tareas Perdidas</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                            Proyectos que se diluyen en el día a día. Información dispersa en correos y chats que nadie encuentra cuando se necesita.
                        </p>
</div>

<div className="glass-panel p-8 group hover:border-brand-green/40 transition-colors duration-300">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-6 text-brand-green group-hover:text-white transition-colors">
<svg className="lucide lucide-user-x w-5 h-5" data-lucide="user-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="17" x2="22" y1="8" y2="13"></line><line x1="22" x2="17" y1="8" y2="13"></line></svg>
</div>
<h3 className="text-lg font-medium mb-3 text-white">Dependencia de Personas</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                            El conocimiento está en las cabezas, no en la empresa. Si una persona clave falta, el sistema se detiene.
                        </p>
</div>

<div className="glass-panel p-8 group hover:border-brand-green/40 transition-colors duration-300">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-6 text-brand-green group-hover:text-white transition-colors">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-lg font-medium mb-3 text-white">Gestión Reactiva</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                            El gerente persiguiendo al equipo. Apagando fuegos constantes en lugar de dirigir la estrategia. Bloqueos ocultos.
                        </p>
</div>
</div>
</div>
</section>

<section className="border-y bg-black/50 border-white/5 pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="text-brand-green font-mono text-xs uppercase tracking-widest mb-4">Core Operating System</div>
<h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-8">
                            Lo que no se ve,
                            <span className="glow-text">no se puede controlar.</span>
</h2>
<p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Transformamos la opacidad operativa en un dashboard claro. Eliminamos el ruido para que solo quede la señal.
                        </p>
<div className="grid grid-cols-2 gap-4">
<div className="border border-white/10 p-4 bg-[#0A0A0A]">
<div className="text-2xl font-display font-bold text-white mb-1">100%</div>
<div className="text-xs font-mono text-gray-500 uppercase">Visibilidad</div>
</div>
<div className="border border-white/10 p-4 bg-[#0A0A0A]">
<div className="text-2xl font-display font-bold text-white mb-1">0%</div>
<div className="text-xs font-mono text-gray-500 uppercase">Cajas Negras</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-brand-green/10 blur-[100px] rounded-full opacity-20"></div>
<div className="relative grid gap-4">
<div className="glass-panel p-6 flex items-center justify-between border-l-4 border-l-brand-green">
<span className="font-mono text-sm text-gray-300">CONTROL</span>
<svg className="lucide lucide-crosshair text-brand-green w-5 h-5" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
<div className="glass-panel flex border-l-white/10 opacity-70 border-l-4 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span className="font-mono text-sm text-gray-300">BLOQUEOS</span>
<svg className="lucide lucide-alert-triangle text-gray-500 w-5 h-5" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<div className="glass-panel p-6 flex items-center justify-between border-l-4 border-l-white/10 opacity-50">
<span className="font-mono text-sm text-gray-300">DEPENDENCIA</span>
<svg className="lucide lucide-users text-gray-600 w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="glass-panel p-6 flex items-center justify-between border-l-4 border-l-brand-green">
<span className="font-mono text-sm text-gray-300">DECISIONES</span>
<svg className="lucide lucide-zap text-brand-green w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-display text-3xl md:text-5xl font-medium">No somos un software.</h2>
<p className="mt-4 text-xl text-brand-green">Somos una implantación de orden.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 md:gap-12">

<div className="space-y-6">
<h3 className="font-mono text-sm text-red-400 uppercase tracking-widest border-b border-red-500/20 pb-2">Out of Scope</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-gray-400 group">
<svg className="lucide lucide-x w-5 h-5 text-red-500/50 mt-0.5 group-hover:text-red-500 transition-colors" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span>Una herramienta suelta más</span>
</li>
<li className="flex items-start gap-3 text-gray-400 group">
<svg className="lucide lucide-x w-5 h-5 text-red-500/50 mt-0.5 group-hover:text-red-500 transition-colors" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span>Automatizaciones sin estrategia</span>
</li>
<li className="flex items-start gap-3 text-gray-400 group">
<svg className="lucide lucide-x w-5 h-5 text-red-500/50 mt-0.5 group-hover:text-red-500 transition-colors" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span>Venta de licencias mensuales</span>
</li>
<li className="flex items-start gap-3 text-gray-400 group">
<svg className="lucide lucide-x w-5 h-5 text-red-500/50 mt-0.5 group-hover:text-red-500 transition-colors" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span>SaaS genérico "talla única"</span>
</li>
</ul>
</div>

<div className="space-y-6">
<h3 className="font-mono text-sm text-brand-green uppercase tracking-widest border-b border-brand-green/20 pb-2">Core Service</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-white group">
<svg className="lucide lucide-check w-5 h-5 text-brand-green mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Diagnóstico operativo profundo</span>
</li>
<li className="flex items-start gap-3 text-white group">
<svg className="lucide lucide-check w-5 h-5 text-brand-green mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Estructura operativa a medida</span>
</li>
<li className="flex items-start gap-3 text-white group">
<svg className="lucide lucide-check w-5 h-5 text-brand-green mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Sistema propio adaptado a tu realidad</span>
</li>
<li className="flex items-start gap-3 text-white group">
<svg className="lucide lucide-check w-5 h-5 text-brand-green mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Acompañamiento e implantación in-house</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<h2 className="font-display text-3xl font-medium">Metodología de Implantación</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">

<div className="glass-panel tech-border hover:bg-white/5 transition-colors pt-6 pr-6 pb-6 pl-6">
<div className="text-4xl font-display font-bold text-white/20 mb-4">01</div>
<h3 className="text-lg font-medium text-white mb-2">Diagnóstico</h3>
<p className="text-sm text-gray-400">Auditoría completa de flujos, cuellos de botella y pérdidas de eficiencia.</p>
</div>

<div className="glass-panel p-6 tech-border hover:bg-white/5 transition-colors">
<div className="text-4xl font-display font-bold text-white/20 mb-4">02</div>
<h3 className="text-lg font-medium text-white mb-2">Diseño</h3>
<p className="text-sm text-gray-400">Arquitectura del sistema operativo adaptado a tu lógica de negocio.</p>
</div>

<div className="glass-panel p-6 tech-border hover:bg-white/5 transition-colors">
<div className="text-4xl font-display font-bold text-white/20 mb-4">03</div>
<h3 className="text-lg font-medium text-white mb-2">Implantación</h3>
<p className="text-sm text-gray-400">Despliegue técnico y migración de datos. Puesta en marcha real.</p>
</div>

<div className="glass-panel p-6 tech-border hover:bg-white/5 transition-colors">
<div className="text-4xl font-display font-bold text-white/20 mb-4">04</div>
<h3 className="text-lg font-medium text-white mb-2">Soporte</h3>
<p className="text-sm text-gray-400">Formación de equipo y acompañamiento hasta la autonomía total.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="font-display text-4xl font-medium tracking-tight">¿A quién va dirigido?</h2>
<p className="text-gray-500 mt-2">Filtro de compatibilidad operativa</p>
</div>
<div className="grid md:grid-cols-2 gap-4">

<div className="border border-brand-green/20 bg-brand-green/5 p-8 rounded-sm">
<div className="flex items-center gap-2 mb-6 border-b border-brand-green/20 pb-4">
<div className="w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_#25E0B7]"></div>
<span className="font-mono text-brand-green tracking-wider text-sm uppercase">Perfil Compatible</span>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-white">Pymes de 10 a 50 empleados</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-white">Empresas con clientes activos</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-white">Equipos que requieren coordinación</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-white">Dependencia actual de personas clave</span>
</li>
</ul>
</div>

<div className="border border-white/5 bg-white/[0.02] p-8 rounded-sm grayscale opacity-70 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
<div className="w-2 h-2 bg-gray-600 rounded-full"></div>
<span className="font-mono text-gray-400 tracking-wider text-sm uppercase">No Compatible</span>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-gray-500 flex-shrink-0" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-gray-400">Autónomos / Solopreneurs</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-gray-500 flex-shrink-0" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-gray-400">Microempresas (&lt;5 empleados)</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-gray-500 flex-shrink-0" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-gray-400">Startups en fase idea / Pre-revenue</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-gray-500 flex-shrink-0" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-gray-400">Búsqueda de "software barato"</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative border-t border-white/10 bg-gradient-to-b from-[#050505] to-[#0A0A0A]" id="diagnostico">
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="font-mono text-brand-green text-sm mb-4 bg-brand-green/10 inline-block px-4 py-1 rounded border border-brand-green/20">
                    CAPACIDAD LIMITADA
                </div>
<h2 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight">
                    PROCESSIA solo se implanta en un número limitado de empresas al mes.
                </h2>
<p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Si encajas en el perfil, lo veremos en el diagnóstico. Sin compromiso.
                </p>
<div className="pt-8">
<button className="group relative inline-flex items-center justify-center px-8 py-5 text-base font-semibold text-brand-black transition-all duration-200 bg-brand-green font-display hover:bg-white hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green ring-offset-[#050505]">
                        SOLICITAR DIAGNÓSTICO INTERNO
                        <svg className="lucide lucide-chevron-right ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<p className="mt-4 text-xs text-gray-600 font-mono">Respuesta en menos de 24h laborables.</p>
</div>
</div>
<footer className="mt-32 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-xs text-gray-600 font-mono">
<div>© 2024 PROCESSIA SYSTEMS.</div>
<div className="flex gap-6 mt-4 md:mt-0">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span>SYSTEM STATUS: ONLINE</span>
</div>
</footer>
</section>
</main>



    </>
  );
}
