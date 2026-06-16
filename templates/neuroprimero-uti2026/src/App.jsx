import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Canvas Animation
        const canvas = document.getElementById('neural-bg');
        const ctx = canvas.getContext('2d');
        let width, height;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        const nodes = Array.from({ length: 50 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 1.5 + 0.5,
            isOrange: Math.random() > 0.7
        }));

        function draw() {
            ctx.clearRect(0, 0, width, height);
            
            nodes.forEach(n => {
                n.x += n.vx; n.y += n.vy;
                if (n.x < 0 || n.x > width) n.vx *= -1;
                if (n.y < 0 || n.y > height) n.vy *= -1;
            });

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const d = Math.sqrt(dx*dx + dy*dy);
                    
                    if (d < 150) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        const alpha = 0.15 * (1 - d/150);
                        ctx.strokeStyle = nodes[i].isOrange ? `rgba(249, 115, 22, ${alpha})` : `rgba(139, 92, 246, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            nodes.forEach(n => {
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fillStyle = n.isOrange ? 'rgba(249, 115, 22, 0.4)' : 'rgba(139, 92, 246, 0.4)';
                ctx.fill();
            });

            requestAnimationFrame(draw);
        }
        draw();

        // Tabs Logic
        function switchTab(targetId) {
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelectorAll('.tab-btn').forEach(el => {
                el.classList.remove('bg-slate-800', 'text-white', 'shadow-sm', 'border-slate-700');
                el.classList.add('text-slate-400', 'border-transparent');
            });
            
            document.getElementById(targetId).classList.add('active');
            const activeBtn = document.querySelector(`[data-target="${targetId}"]`);
            activeBtn.classList.remove('text-slate-400', 'border-transparent');
            activeBtn.classList.add('bg-slate-800', 'text-white', 'shadow-sm', 'border-slate-700');
        }

        // Accordion Logic
        function toggleAccordion(id) {
            const body = document.getElementById(id + '-body');
            const icon = document.getElementById(id + '-icon');
            
            if (body.classList.contains('max-h-0')) {
                body.classList.remove('max-h-0', 'opacity-0');
                body.classList.add('max-h-[800px]', 'opacity-100');
                icon.style.transform = 'rotate(180deg)';
            } else {
                body.classList.add('max-h-0', 'opacity-0');
                body.classList.remove('max-h-[800px]', 'opacity-100');
                icon.style.transform = 'rotate(0deg)';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 z-0 opacity-20 pointer-events-none" id="neural-bg"></canvas>
<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">

<header className="text-center mb-12 border-b border-slate-800/60 pb-12">
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
<div className="tracking-tighter text-3xl font-['Playfair_Display'] font-semibold text-white">UTI</div>
<div className="h-8 w-px bg-slate-800 hidden sm:block"></div>
<div className="text-center sm:text-left">
<div className="text-xs font-medium text-slate-400 tracking-widest uppercase mb-1">Universidad Tecnológica Indoamérica</div>
<div className="text-xs text-slate-500 tracking-wide">Facultad de Ciencias Sociales y Humanas · Psicología Clínica</div>
</div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-xs font-medium text-violet-300 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                Período Académico A26
            </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-['Playfair_Display'] font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-violet-100 to-orange-300 leading-tight mb-4">
                Neuroanatomía y<br/>Neurofisiología I
            </h1>
<p className="text-sm sm:text-base text-slate-400 font-light flex items-center justify-center gap-3 flex-wrap">
                Proyecto Formativo A26-PSCL-1-48853-1524
                <span className="inline-flex px-2 py-0.5 rounded border border-orange-500/30 bg-orange-500/10 text-xs font-['DM_Mono'] text-orange-400 font-normal tracking-tight">1° Nivel</span>
</p>
</header>

<nav className="flex justify-center flex-wrap gap-1.5 p-1.5 mx-auto mb-10 bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-xl w-fit">
<button className="tab-btn flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all bg-slate-800 border-slate-700 text-white shadow-sm" data-target="tab-general" onclick="switchTab('tab-general')">
<iconify-icon className="text-lg" icon="solar:brain-linear" strokeWidth="1.5"></iconify-icon> General
            </button>
<button className="tab-btn flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all text-slate-400 border border-transparent hover:text-slate-200 hover:bg-slate-800/50" data-target="tab-talleres" onclick="switchTab('tab-talleres')">
<iconify-icon className="text-lg" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon> Talleres
            </button>
<button className="tab-btn flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all text-slate-400 border border-transparent hover:text-slate-200 hover:bg-slate-800/50" data-target="tab-evaluacion" onclick="switchTab('tab-evaluacion')">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon> Evaluación
            </button>
<button className="tab-btn flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all text-slate-400 border border-transparent hover:text-slate-200 hover:bg-slate-800/50" data-target="tab-bibliografia" onclick="switchTab('tab-bibliografia')">
<iconify-icon className="text-lg" icon="solar:library-linear" strokeWidth="1.5"></iconify-icon> Bibliografía
            </button>
</nav>

<div className="tab-content active" id="tab-general">
<h2 className="text-2xl font-['Playfair_Display'] font-semibold tracking-tight text-violet-300 mb-6 flex items-center gap-4">
                Información General <div className="h-px flex-1 bg-slate-800/60"></div>
</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

<div className="lg:col-span-2 bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
<div className="flex items-center gap-3 text-violet-400 mb-6 font-['Playfair_Display'] text-lg font-medium tracking-tight">
<div className="w-8 h-8 rounded-md bg-violet-500/10 border border-violet-500/20 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon></div>
                        Perfil del Docente
                    </div>
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
<div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-violet-600 to-orange-500 flex items-center justify-center text-xl text-white font-['Playfair_Display'] shadow-lg shadow-violet-900/20 ring-2 ring-slate-900">SL</div>
<div>
<h3 className="font-['Playfair_Display'] text-xl font-semibold text-white tracking-tight mb-1">Stefania del Rocío Llerena Freire</h3>
<p className="text-xs text-slate-400 leading-relaxed mb-4">Psicóloga Clínica · Magíster en Psicología Clínica mención Psicoterapia<br/>Experiencia docente: 3 años</p>
<div className="flex flex-wrap gap-3">
<div className="inline-flex items-center gap-1.5 bg-slate-800/50 border border-slate-700/50 rounded-md px-2.5 py-1 text-xs font-['DM_Mono'] text-slate-300">
<iconify-icon className="text-slate-400" icon="solar:phone-linear"></iconify-icon> 0992800286
                                </div>
<div className="inline-flex items-center gap-1.5 bg-slate-800/50 border border-slate-700/50 rounded-md px-2.5 py-1 text-xs font-['DM_Mono'] text-slate-300">
<iconify-icon className="text-slate-400" icon="solar:letter-linear"></iconify-icon> sllerena@uti.edu.ec
                                </div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl p-6 relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
<div className="flex items-center gap-3 text-orange-400 mb-6 font-['Playfair_Display'] text-lg font-medium tracking-tight">
<div className="w-8 h-8 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon></div>
                        Datos Clave
                    </div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-[#0c0c0e] border border-slate-800/60 rounded-xl p-4 text-center">
<div className="text-[10px] uppercase tracking-widest text-slate-500 mb-1 font-medium">Créditos</div>
<div className="text-2xl font-['DM_Mono'] text-orange-400 tracking-tighter">2.75</div>
</div>
<div className="bg-[#0c0c0e] border border-slate-800/60 rounded-xl p-4 text-center">
<div className="text-[10px] uppercase tracking-widest text-slate-500 mb-1 font-medium">Horas</div>
<div className="text-2xl font-['DM_Mono'] text-orange-400 tracking-tighter">132</div>
</div>
</div>
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs text-slate-400 mb-1.5"><span>Clases con docente</span><span>72h</span></div>
<div className="h-1.5 bg-slate-800/80 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-violet-600 to-violet-400 w-[54.5%]"></div></div>
</div>
<div>
<div className="flex justify-between text-xs text-slate-400 mb-1.5"><span>Prácticas</span><span>40h</span></div>
<div className="h-1.5 bg-slate-800/80 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 w-[30.3%]"></div></div>
</div>
<div>
<div className="flex justify-between text-xs text-slate-400 mb-1.5"><span>Autónomo</span><span>20h</span></div>
<div className="h-1.5 bg-slate-800/80 rounded-full overflow-hidden"><div className="h-full bg-slate-600 w-[15.1%]"></div></div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl p-6 sm:p-8 relative overflow-hidden mb-6">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
<div className="flex items-center gap-3 text-violet-400 mb-6 font-['Playfair_Display'] text-lg font-medium tracking-tight">
<div className="w-8 h-8 rounded-md bg-violet-500/10 border border-violet-500/20 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon></div>
                    Horario de Clases y Prácticas
                </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-800/60 pb-2">
<span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span> Docencia
                        </div>
<div className="grid sm:grid-cols-2 gap-3">
<div className="p-3 rounded-xl border border-slate-800/60 bg-[#0c0c0e] border-l-2 border-l-violet-500 hover:bg-slate-800/30 transition-colors">
<div className="text-[10px] uppercase tracking-wider text-violet-400 font-medium mb-1">Lunes</div>
<div className="text-sm font-['DM_Mono'] text-white">08:30 – 09:30</div>
</div>
<div className="p-3 rounded-xl border border-slate-800/60 bg-[#0c0c0e] border-l-2 border-l-violet-500 hover:bg-slate-800/30 transition-colors">
<div className="text-[10px] uppercase tracking-wider text-violet-400 font-medium mb-1">Lunes</div>
<div className="text-sm font-['DM_Mono'] text-white">09:30 – 10:30</div>
</div>
<div className="p-3 rounded-xl border border-slate-800/60 bg-[#0c0c0e] border-l-2 border-l-violet-500 hover:bg-slate-800/30 transition-colors">
<div className="text-[10px] uppercase tracking-wider text-violet-400 font-medium mb-1">Miércoles</div>
<div className="text-sm font-['DM_Mono'] text-white">08:30 – 09:30</div>
</div>
<div className="p-3 rounded-xl border border-slate-800/60 bg-[#0c0c0e] border-l-2 border-l-violet-500 hover:bg-slate-800/30 transition-colors">
<div className="text-[10px] uppercase tracking-wider text-violet-400 font-medium mb-1">Miércoles</div>
<div className="text-sm font-['DM_Mono'] text-white">09:30 – 10:30</div>
</div>
</div>
</div>
<div>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-800/60 pb-2">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Prácticas
                        </div>
<div className="grid sm:grid-cols-2 gap-3">
<div className="p-3 rounded-xl border border-slate-800/60 bg-[#0c0c0e] border-l-2 border-l-orange-500 hover:bg-slate-800/30 transition-colors">
<div className="text-[10px] uppercase tracking-wider text-orange-400 font-medium mb-1">Lunes</div>
<div className="text-sm font-['DM_Mono'] text-white">10:30 – 11:30</div>
</div>
<div className="p-3 rounded-xl border border-slate-800/60 bg-[#0c0c0e] border-l-2 border-l-orange-500 hover:bg-slate-800/30 transition-colors">
<div className="text-[10px] uppercase tracking-wider text-orange-400 font-medium mb-1">Lunes</div>
<div className="text-sm font-['DM_Mono'] text-white">11:30 – 12:30</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl p-6 relative overflow-hidden">
<div className="flex items-center gap-3 text-slate-200 mb-6 font-['Playfair_Display'] text-lg font-medium tracking-tight">
<div className="w-8 h-8 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon></div>
                        Competencias
                    </div>
<div className="space-y-3">
<div className="p-4 rounded-xl border border-violet-500/10 bg-violet-500/5 text-sm leading-relaxed">
<div className="text-[10px] uppercase tracking-wider text-violet-400 font-medium mb-1.5">Específica del proyecto</div>
                            Analiza la organización y funcionamiento del Sistema Nervioso Central para fortalecer el desarrollo de la evaluación, diagnóstico e intervención en la salud mental.
                        </div>
<div className="p-4 rounded-xl border border-orange-500/10 bg-orange-500/5 text-sm leading-relaxed">
<div className="text-[10px] uppercase tracking-wider text-orange-400 font-medium mb-1.5">Perfil de egreso</div>
                            Integra fundamentos epistemológicos con conocimientos prácticos para identificar e intervenir en campos de Psicología Clínica.
                        </div>
<div className="p-4 rounded-xl border border-slate-700/50 bg-[#0c0c0e] text-sm leading-relaxed">
<div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mb-1.5">Blanda</div>
                            Aplica el pensamiento complejo en la resolución de problemas para mejorar condiciones de vida ante retos del entorno.
                        </div>
</div>
</div>
<div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl p-6 relative overflow-hidden">
<div className="flex items-center gap-3 text-slate-200 mb-6 font-['Playfair_Display'] text-lg font-medium tracking-tight">
<div className="w-8 h-8 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:lightbulb-bolt-linear" strokeWidth="1.5"></iconify-icon></div>
                        Metodología y Proyecto
                    </div>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Se utilizará la metodología <span className="text-slate-200 font-normal">basada en problemas</span> mediante estudio de caso, aprendizaje cooperativo, desarrollo de pensamiento crítico y gamificación.
                    </p>
<div className="p-5 rounded-xl border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent">
<div className="inline-flex items-center gap-1.5 bg-orange-500/10 text-orange-400 text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded mb-3 border border-orange-500/20">Proyecto Final</div>
<h4 className="text-base font-['Playfair_Display'] font-medium text-white tracking-tight mb-2">Guía Ilustrada de Fundamentos Neuroanatómicos de Casos Prácticos</h4>
<p className="text-xs text-slate-400 leading-relaxed">
<span className="text-violet-300 font-medium">Problema central:</span> Según la PAHO y OMS, en Ecuador 30 de cada 100 personas sufren algún problema de salud mental. ¿Cómo puede el psicólogo atender de manera integral los diferentes trastornos?
                        </p>
</div>
</div>
</div>
</div>

<div className="tab-content" id="tab-talleres">
<h2 className="text-2xl font-['Playfair_Display'] font-semibold tracking-tight text-violet-300 mb-6 flex items-center gap-4">
                Talleres y Actividades <div className="h-px flex-1 bg-slate-800/60"></div>
</h2>
<div className="space-y-4">

<div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl overflow-hidden group">
<button className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-slate-800/30 transition-colors" onclick="toggleAccordion('t1')">
<div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-violet-600 to-violet-900 flex items-center justify-center font-['DM_Mono'] text-sm text-white shadow-inner border border-violet-400/20">01</div>
<div className="flex-1 pr-4">
<div className="font-['Playfair_Display'] text-base sm:text-lg font-medium text-white tracking-tight">Introducción al Sistema Nervioso</div>
<div className="text-xs text-slate-500 line-clamp-1 mt-0.5">Describe las generalidades del SN como sustratos neuroanatómicos del comportamiento</div>
</div>
<iconify-icon className="text-slate-500 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="t1-icon"></iconify-icon>
</button>
<div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out" id="t1-body">
<div className="px-5 pb-5 pt-2 border-t border-slate-800/50">
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] px-2 py-0.5 rounded border border-orange-500/20 bg-orange-500/5 text-orange-400">📄 Producto: Guía Ilustrada Histología</span>
<span className="text-[10px] px-2 py-0.5 rounded border border-slate-700 bg-slate-800 text-slate-300">Introducción al SN</span>
<span className="text-[10px] px-2 py-0.5 rounded border border-slate-700 bg-slate-800 text-slate-300">Histología</span>
</div>
<div className="space-y-2">
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-3 rounded-xl bg-[#0c0c0e] border border-slate-800/50 hover:border-violet-500/30 transition-colors">
<div className="font-['DM_Mono'] text-xs text-orange-400 pt-0.5 shrink-0 w-24">06/10/2025</div>
<div className="space-y-1.5 flex-1">
<div className="text-xs text-slate-300 flex items-start gap-2"><span className="shrink-0 text-[9px] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20 mt-0.5">Docente</span> Bienvenida, inducción del mapa de formación y código de ética</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-3 rounded-xl bg-[#0c0c0e] border border-slate-800/50 hover:border-violet-500/30 transition-colors">
<div className="font-['DM_Mono'] text-xs text-orange-400 pt-0.5 shrink-0 w-24">09/10/2025</div>
<div className="space-y-1.5 flex-1">
<div className="text-xs text-slate-300 flex items-start gap-2"><span className="shrink-0 text-[9px] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20 mt-0.5">Docente</span> Evaluación diagnóstica y Antecedentes históricos de las Neurociencias</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-3 rounded-xl bg-[#0c0c0e] border border-slate-800/50 hover:border-violet-500/30 transition-colors">
<div className="font-['DM_Mono'] text-xs text-orange-400 pt-0.5 shrink-0 w-24">16/10/2025</div>
<div className="space-y-1.5 flex-1">
<div className="text-xs text-slate-300 flex items-start gap-2"><span className="shrink-0 text-[9px] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20 mt-0.5">Docente</span> La neurona y sus partes</div>
<div className="text-xs text-slate-300 flex items-start gap-2"><span className="shrink-0 text-[9px] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded bg-slate-700 text-slate-300 border border-slate-600 mt-0.5">Autónoma</span> Infografía sobre la neurona y células de neuroglia</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-3 rounded-xl bg-[#0c0c0e] border border-slate-800/50 hover:border-violet-500/30 transition-colors">
<div className="font-['DM_Mono'] text-xs text-orange-400 pt-0.5 shrink-0 w-24">20/10/2025</div>
<div className="space-y-1.5 flex-1">
<div className="text-xs text-slate-300 flex items-start gap-2"><span className="shrink-0 text-[9px] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 mt-0.5">Práctica</span> Maqueta de las partes de la neurona y células de neuroglia</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl overflow-hidden group">
<button className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-slate-800/30 transition-colors" onclick="toggleAccordion('t2')">
<div className="w-10 h-10 shrink-0 rounded-xl bg-slate-800 flex items-center justify-center font-['DM_Mono'] text-sm text-slate-400 border border-slate-700">02</div>
<div className="flex-1 pr-4">
<div className="font-['Playfair_Display'] text-base sm:text-lg font-medium text-white tracking-tight">Irrigación y Meninges</div>
<div className="text-xs text-slate-500 line-clamp-1 mt-0.5">Describe la irrigación del SN y su influencia en el funcionamiento del sistema nervioso</div>
</div>
<iconify-icon className="text-slate-500 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="t2-icon"></iconify-icon>
</button>
<div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out" id="t2-body">
<div className="px-5 pb-5 pt-2 border-t border-slate-800/50">
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] px-2 py-0.5 rounded border border-orange-500/20 bg-orange-500/5 text-orange-400">📄 Producto: Guía Sistema Irrigatorio</span>
<span className="text-[10px] px-2 py-0.5 rounded border border-slate-700 bg-slate-800 text-slate-300">Desarrollo SN</span>
<span className="text-[10px] px-2 py-0.5 rounded border border-slate-700 bg-slate-800 text-slate-300">Meninges</span>
</div>
<div className="space-y-2">
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-3 rounded-xl bg-[#0c0c0e] border border-slate-800/50 hover:border-violet-500/30 transition-colors">
<div className="font-['DM_Mono'] text-xs text-orange-400 pt-0.5 shrink-0 w-24">30/10/2025</div>
<div className="space-y-1.5 flex-1">
<div className="text-xs text-slate-300 flex items-start gap-2"><span className="shrink-0 text-[9px] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20 mt-0.5">Docente</span> Conferencia: Desarrollo y evolución del SN</div>
<div className="text-xs text-slate-300 flex items-start gap-2"><span className="shrink-0 text-[9px] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 mt-0.5">Práctica</span> Maqueta del desarrollo del SN</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl overflow-hidden group">
<button className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-slate-800/30 transition-colors" onclick="toggleAccordion('t3')">
<div className="w-10 h-10 shrink-0 rounded-xl bg-slate-800 flex items-center justify-center font-['DM_Mono'] text-sm text-slate-400 border border-slate-700">03</div>
<div className="flex-1 pr-4">
<div className="font-['Playfair_Display'] text-base sm:text-lg font-medium text-white tracking-tight">Encéfalo</div>
<div className="text-xs text-slate-500 line-clamp-1 mt-0.5">Comprende las estructuras y funcionamiento del encéfalo y su influencia</div>
</div>
<iconify-icon className="text-slate-500 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="t3-icon"></iconify-icon>
</button>
<div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out" id="t3-body">
<div className="px-5 pb-5 pt-2 border-t border-slate-800/50">
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] px-2 py-0.5 rounded border border-orange-500/20 bg-orange-500/5 text-orange-400">📄 Producto: Guía Encéfalo</span>
<span className="text-[10px] px-2 py-0.5 rounded border border-slate-700 bg-slate-800 text-slate-300">Corteza</span>
<span className="text-[10px] px-2 py-0.5 rounded border border-slate-700 bg-slate-800 text-slate-300">Diencéfalo</span>
</div>
<div className="space-y-2">
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-3 rounded-xl bg-[#0c0c0e] border border-slate-800/50 hover:border-violet-500/30 transition-colors">
<div className="font-['DM_Mono'] text-xs text-orange-400 pt-0.5 shrink-0 w-24">01/12/2025</div>
<div className="space-y-1.5 flex-1">
<div className="text-xs font-medium text-white flex items-start gap-2"><span className="shrink-0 text-[9px] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20 mt-0.5">Examen</span> Examen Parcial</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-3 rounded-xl bg-[#0c0c0e] border border-slate-800/50 hover:border-violet-500/30 transition-colors">
<div className="font-['DM_Mono'] text-xs text-orange-400 pt-0.5 shrink-0 w-24">04/12/2025</div>
<div className="space-y-1.5 flex-1">
<div className="text-xs text-slate-300 flex items-start gap-2"><span className="shrink-0 text-[9px] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 mt-0.5">Práctica</span> Exploración 3D del sistema ventricular con Anatomix</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl overflow-hidden group">
<button className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-slate-800/30 transition-colors" onclick="toggleAccordion('t4')">
<div className="w-10 h-10 shrink-0 rounded-xl bg-slate-800 flex items-center justify-center font-['DM_Mono'] text-sm text-slate-400 border border-slate-700">04</div>
<div className="flex-1 pr-4">
<div className="font-['Playfair_Display'] text-base sm:text-lg font-medium text-white tracking-tight">Órganos de los Sentidos</div>
<div className="text-xs text-slate-500 line-clamp-1 mt-0.5">Relaciona estructuras y funciones de los órganos de los sentidos</div>
</div>
<iconify-icon className="text-slate-500 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="t4-icon"></iconify-icon>
</button>
<div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out" id="t4-body">
<div className="px-5 pb-5 pt-2 border-t border-slate-800/50">
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] px-2 py-0.5 rounded border border-orange-500/20 bg-orange-500/5 text-orange-400">📄 Producto: Guía Sentidos</span>
</div>
<div className="space-y-2">
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-3 rounded-xl bg-[#0c0c0e] border border-slate-800/50 hover:border-violet-500/30 transition-colors">
<div className="font-['DM_Mono'] text-xs text-orange-400 pt-0.5 shrink-0 w-24">19/02/2026</div>
<div className="space-y-1.5 flex-1">
<div className="text-xs font-medium text-white flex items-start gap-2"><span className="shrink-0 text-[9px] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20 mt-0.5">Examen</span> Examen Final</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content" id="tab-evaluacion">
<h2 className="text-2xl font-['Playfair_Display'] font-semibold tracking-tight text-violet-300 mb-6 flex items-center gap-4">
                Matriz de Evaluación <div className="h-px flex-1 bg-slate-800/60"></div>
</h2>
<div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl p-6 sm:p-8 relative overflow-hidden mb-6">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
<div className="flex items-center gap-3 text-slate-200 mb-2 font-['Playfair_Display'] text-lg font-medium tracking-tight">
<div className="w-8 h-8 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:checklist-linear" strokeWidth="1.5"></iconify-icon></div>
                    Rúbricas por Taller
                </div>
<p className="text-xs text-slate-400 mb-8 max-w-2xl">Cada taller se evalúa con los indicadores a continuación. El Proyecto Final tiene ponderación doble (2 puntos por indicador).</p>
<div className="mb-8">
<h3 className="text-xs uppercase tracking-wider text-orange-400 font-medium mb-4 border-b border-slate-800/60 pb-2">Indicadores (Talleres 1 a 4)</h3>
<div className="overflow-x-auto">
<table className="w-full text-left text-xs min-w-[600px]">
<thead>
<tr className="text-slate-500 border-b border-slate-800 bg-[#0c0c0e]">
<th className="p-3 font-medium rounded-tl-lg">Indicador</th>
<th className="p-3 font-medium">Deficiente</th>
<th className="p-3 font-medium">Regular</th>
<th className="p-3 font-medium">Bueno</th>
<th className="p-3 font-medium text-orange-400 rounded-tr-lg">Excelente</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800/50">
<tr className="hover:bg-slate-800/20 transition-colors">
<td className="p-3 font-medium text-white bg-[#0c0c0e]/50">Organización</td>
<td className="p-3 text-slate-400">Sin secuencia lógica (0.10)</td>
<td className="p-3 text-slate-400">Poca organización (0.25)</td>
<td className="p-3 text-slate-400">Secuencia del contenido (0.50)</td>
<td className="p-3 text-orange-300">Clara y secuencial (1.00)</td>
</tr>
<tr className="hover:bg-slate-800/20 transition-colors">
<td className="p-3 font-medium text-white bg-[#0c0c0e]/50">Contenido</td>
<td className="p-3 text-slate-400">Algunos temas (0.10)</td>
<td className="p-3 text-slate-400">Incompleto (0.25)</td>
<td className="p-3 text-slate-400">Parcial (0.75)</td>
<td className="p-3 text-orange-300">Compendio completo (1.00)</td>
</tr>
<tr className="hover:bg-slate-800/20 transition-colors">
<td className="p-3 font-medium text-white bg-[#0c0c0e]/50">Calidad Info.</td>
<td className="p-3 text-slate-400">Sin citas (0.10)</td>
<td className="p-3 text-slate-400">Vaga, 15% similitud (0.50)</td>
<td className="p-3 text-slate-400">Poco sustento (0.50)</td>
<td className="p-3 text-orange-300">Revisión coherente (1.00)</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="tab-content" id="tab-bibliografia">
<h2 className="text-2xl font-['Playfair_Display'] font-semibold tracking-tight text-violet-300 mb-6 flex items-center gap-4">
                Bibliografía <div className="h-px flex-1 bg-slate-800/60"></div>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="p-5 rounded-xl border border-slate-800/60 bg-[#0c0c0e] hover:border-violet-500/30 transition-all flex flex-col h-full group">
<div className="flex justify-between items-start mb-3">
<span className="inline-flex text-[9px] uppercase tracking-wider font-medium px-2 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">Básica</span>
</div>
<h4 className="text-sm font-medium text-slate-200 mb-1 leading-snug group-hover:text-violet-300 transition-colors">Neuroanatomía: Fundamentos para Estudiantes</h4>
<div className="text-xs text-slate-400 mb-4">Suazo Galdames, Iván</div>
<div className="mt-auto pt-4 border-t border-slate-800/50 flex items-center justify-between">
<div className="flex gap-2 text-[10px] font-['DM_Mono'] text-slate-500"><span>RIL Editores</span><span>2021</span></div>
<a className="text-xs font-medium text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors" href="#">
                            Acceder <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="p-5 rounded-xl border border-slate-800/60 bg-[#0c0c0e] hover:border-violet-500/30 transition-all flex flex-col h-full group">
<div className="flex justify-between items-start mb-3">
<span className="inline-flex text-[9px] uppercase tracking-wider font-medium px-2 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">Básica</span>
</div>
<h4 className="text-sm font-medium text-slate-200 mb-1 leading-snug group-hover:text-violet-300 transition-colors">Psicofisiología</h4>
<div className="text-xs text-slate-400 mb-4">Labre, Verónica · Pérez, Doris</div>
<div className="mt-auto pt-4 border-t border-slate-800/50 flex items-center justify-between">
<div className="flex gap-2 text-[10px] font-['DM_Mono'] text-slate-500"><span>UTI</span><span>2023</span></div>
<a className="text-xs font-medium text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors" href="#">
                            Acceder <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="p-5 rounded-xl border border-slate-800/60 bg-[#0c0c0e] hover:border-orange-500/30 transition-all flex flex-col h-full group">
<div className="flex justify-between items-start mb-3">
<span className="inline-flex text-[9px] uppercase tracking-wider font-medium px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">Complementaria</span>
</div>
<h4 className="text-sm font-medium text-slate-200 mb-1 leading-snug group-hover:text-orange-300 transition-colors">Neuroanatomía Clínica</h4>
<div className="text-xs text-slate-400 mb-4">Snell, Richard</div>
<div className="mt-auto pt-4 border-t border-slate-800/50 flex items-center justify-between">
<div className="flex gap-2 text-[10px] font-['DM_Mono'] text-slate-500"><span>Wolters Kluwer</span><span>Físico</span></div>
</div>
</div>
</div>
</div>
</div>

<footer className="relative z-10 border-t border-slate-800/60 py-8 mt-12 text-center">
<div className="tracking-tighter text-lg font-['Playfair_Display'] font-semibold text-slate-600 mb-2">UTI</div>
<div className="text-xs text-slate-500 font-light max-w-md mx-auto leading-relaxed">
            Universidad Tecnológica Indoamérica · Facultad de Ciencias Sociales y Humanas<br/>
            Docente: Stefania del Rocío Llerena Freire
        </div>
</footer>


    </>
  );
}
