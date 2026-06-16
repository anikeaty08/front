import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"DM Sans"', 'sans-serif'],
mono: ['"DM Mono"', 'monospace'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchTab(panelId, btnElement) {
            // Hide all panels
            document.querySelectorAll('.tab-panel').forEach(panel => {
                panel.classList.add('hidden');
                panel.classList.remove('block');
            });
            // Show target panel
            document.getElementById(panelId).classList.remove('hidden');
            document.getElementById(panelId).classList.add('block');

            // Reset all tabs to inactive state
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.className = 'tab-btn bg-[#f3f0ff] border-2 border-[#e0d9ff] text-[#5c3fbb] hover:bg-[#e8e0ff] hover:border-[#5c3fbb] rounded-lg px-4 py-2 text-sm font-medium transition-all flex items-center gap-2';
            });
            
            // Set active state for clicked tab
            btnElement.className = 'tab-btn bg-[#5c3fbb] border-2 border-[#5c3fbb] text-white rounded-lg px-4 py-2 text-sm font-medium transition-all flex items-center gap-2';
        }

        function toggleAccordion(bodyId, iconId) {
            const body = document.getElementById(bodyId);
            const icon = document.getElementById(iconId);
            
            if (body.classList.contains('hidden')) {
                body.classList.remove('hidden');
                body.classList.add('block');
                icon.classList.add('rotate-180');
            } else {
                body.classList.add('hidden');
                body.classList.remove('block');
                icon.classList.remove('rotate-180');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-gradient-to-br from-[#3d2b8e] via-[#5c3fbb] to-[#7c5cfc] rounded-2xl p-6 sm:p-8 mb-6 text-white flex flex-col sm:flex-row gap-6 items-start sm:items-center shadow-lg shadow-[#5c3fbb]/20">

<div className="bg-white text-[#3d2b8e] font-bold text-3xl tracking-tighter rounded-xl w-16 h-16 flex-shrink-0 flex items-center justify-center">
            UTI
        </div>
<div className="flex-1 w-full">
<div className="text-xs tracking-widest uppercase text-white/80 mb-2 font-medium">Universidad Tecnológica Indoamérica · Psicología Clínica</div>
<div className="flex flex-wrap items-center gap-2 mb-2">
<span className="bg-[#e8650a] rounded-full px-3 py-1 text-xs font-medium font-mono">A26</span>
<span className="bg-white/20 rounded-full px-3 py-1 text-xs font-medium font-mono">2° Nivel</span>
</div>
<h1 className="text-2xl sm:text-3xl tracking-tight font-semibold leading-tight mb-2">Neuroanatomía y<br/>Neurofisiología II</h1>
<div className="text-sm text-white/85 mb-4 font-light">A26-PSCL-2-52913-1643  ·  Presencial · Pregrado</div>
<div className="flex flex-wrap gap-2">
<span className="bg-white/10 border border-white/30 rounded-full px-3 py-1.5 text-xs font-mono flex items-center gap-1.5">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon> Inicio: 06 Abr 2026
                </span>
<span className="bg-white/10 border border-white/30 rounded-full px-3 py-1.5 text-xs font-mono flex items-center gap-1.5">
<iconify-icon icon="solar:flag-linear" strokeWidth="1.5"></iconify-icon> Fin: 27 Sep 2026
                </span>
</div>
</div>
</div>

<div className="flex flex-wrap gap-2 mb-6">
<button className="tab-btn bg-[#5c3fbb] border-2 border-[#5c3fbb] text-white rounded-lg px-4 py-2 text-sm font-medium transition-all flex items-center gap-2" onclick="switchTab('panel-general', this)">
<iconify-icon className="text-lg" icon="solar:brain-linear" strokeWidth="1.5"></iconify-icon> General
        </button>
<button className="tab-btn bg-[#f3f0ff] border-2 border-[#e0d9ff] text-[#5c3fbb] hover:bg-[#e8e0ff] hover:border-[#5c3fbb] rounded-lg px-4 py-2 text-sm font-medium transition-all flex items-center gap-2" onclick="switchTab('panel-talleres', this)">
<iconify-icon className="text-lg" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon> Talleres
        </button>
<button className="tab-btn bg-[#f3f0ff] border-2 border-[#e0d9ff] text-[#5c3fbb] hover:bg-[#e8e0ff] hover:border-[#5c3fbb] rounded-lg px-4 py-2 text-sm font-medium transition-all flex items-center gap-2" onclick="switchTab('panel-evaluacion', this)">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon> Evaluación
        </button>
<button className="tab-btn bg-[#f3f0ff] border-2 border-[#e0d9ff] text-[#5c3fbb] hover:bg-[#e8e0ff] hover:border-[#5c3fbb] rounded-lg px-4 py-2 text-sm font-medium transition-all flex items-center gap-2" onclick="switchTab('panel-bibliografia', this)">
<iconify-icon className="text-lg" icon="solar:notebook-linear" strokeWidth="1.5"></iconify-icon> Bibliografía
        </button>
</div>

<div className="tab-panel block" id="panel-general">

<div className="bg-white border border-[#e0d9ff] border-t-[3px] border-t-[#5c3fbb] rounded-2xl p-6 mb-5 shadow-[0_2px_8px_rgba(92,63,187,0.07)]">
<h2 className="text-lg tracking-tight font-semibold text-[#3d2b8e] mb-4 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-xl" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon> Perfil del Docente
            </h2>
<div className="flex flex-wrap sm:flex-nowrap gap-5 items-center">
<div className="w-16 h-16 bg-gradient-to-br from-[#3d2b8e] to-[#7c5cfc] rounded-full border-2 border-[#5c3fbb]/30 flex items-center justify-center text-xl font-semibold text-white flex-shrink-0 tracking-tighter">
                    SL
                </div>
<div>
<div className="text-lg tracking-tight font-semibold text-[#1a0a2e] mb-1">Stefania del Rocío Llerena Freire</div>
<div className="text-xs text-[#6b5aad] leading-relaxed mb-3">Psicóloga Clínica · Magíster en Psicología Clínica mención Psicoterapia<br/>Experiencia docente: 3 años</div>
<div className="flex flex-wrap gap-2">
<span className="bg-[#f3f0ff] border border-[#e0d9ff] rounded-md px-3 py-1.5 text-xs text-[#3d2b8e] font-mono flex items-center gap-1.5">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon> 0992800286
                        </span>
<span className="bg-[#f3f0ff] border border-[#e0d9ff] rounded-md px-3 py-1.5 text-xs text-[#3d2b8e] font-mono flex items-center gap-1.5">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon> sllerena@indoamerica.edu.ec
                        </span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-[#e0d9ff] border-t-[3px] border-t-[#5c3fbb] rounded-2xl p-6 mb-5 shadow-[0_2px_8px_rgba(92,63,187,0.07)]">
<h2 className="text-lg tracking-tight font-semibold text-[#3d2b8e] mb-4 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-xl" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon> Datos del Proyecto Formativo
            </h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3 text-center">
<div className="text-[10px] uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Créditos</div>
<div className="font-mono text-xl text-[#e8650a] font-normal">2.75</div>
<div className="text-[10px] text-[#8878c4] mt-1">créditos académicos</div>
</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3 text-center">
<div className="text-[10px] uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Total Horas</div>
<div className="font-mono text-xl text-[#e8650a] font-normal">132</div>
<div className="text-[10px] text-[#8878c4] mt-1">horas totales</div>
</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3 text-center">
<div className="text-[10px] uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Nivel</div>
<div className="font-mono text-xl text-[#e8650a] font-normal">2°</div>
<div className="text-[10px] text-[#8878c4] mt-1">segundo nivel</div>
</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3 text-center">
<div className="text-[10px] uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Con Docente</div>
<div className="font-mono text-xl text-[#e8650a] font-normal">72h</div>
<div className="text-[10px] text-[#8878c4] mt-1">clases asistidas</div>
</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3 text-center">
<div className="text-[10px] uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Autónomo</div>
<div className="font-mono text-xl text-[#e8650a] font-normal">20h</div>
<div className="text-[10px] text-[#8878c4] mt-1">aprendizaje</div>
</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3 text-center">
<div className="text-[10px] uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Prácticas</div>
<div className="font-mono text-xl text-[#e8650a] font-normal">40h</div>
<div className="text-[10px] text-[#8878c4] mt-1">laboratorio</div>
</div>
</div>

<div className="space-y-3">
<div>
<div className="flex justify-between text-xs text-[#6b5aad] mb-1.5 font-medium"><span>Clases con docente</span><span>72h</span></div>
<div className="h-2 bg-[#f0ecff] rounded-full overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-[#3d2b8e] to-[#7c5cfc]" style={{width: '54.5%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs text-[#6b5aad] mb-1.5 font-medium"><span>Aprendizaje autónomo</span><span>20h</span></div>
<div className="h-2 bg-[#f0ecff] rounded-full overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-[#5c3fbb] to-[#e8650a]" style={{width: '15.1%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs text-[#6b5aad] mb-1.5 font-medium"><span>Prácticas de aplicación</span><span>40h</span></div>
<div className="h-2 bg-[#f0ecff] rounded-full overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-[#e8650a] to-[#f5a623]" style={{width: '30.3%'}}></div></div>
</div>
</div>
</div>

<div className="bg-white border border-[#e0d9ff] border-t-[3px] border-t-[#5c3fbb] rounded-2xl p-6 mb-5 shadow-[0_2px_8px_rgba(92,63,187,0.07)]">
<h2 className="text-lg tracking-tight font-semibold text-[#3d2b8e] mb-2 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon> Horario de Clases y Prácticas
            </h2>
<div className="text-[11px] uppercase tracking-widest text-[#8878c4] font-medium mt-4 mb-3 pb-1.5 border-b border-[#f0ecff] flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#5c3fbb]"></span> Clases asistidas por el docente y aprendizaje colaborativo
            </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
<div className="bg-[#f3f0ff] border-l-[3px] border-[#5c3fbb] rounded-xl p-4">
<div className="text-[10px] uppercase tracking-widest text-[#5c3fbb] mb-1.5 font-semibold">Martes</div>
<div className="font-mono text-lg text-[#1a0a2e] font-normal leading-none">07:30 – 08:30</div>
<div className="font-mono text-sm text-[#8878c4] mt-1">08:30 – 09:30</div>
<div className="text-[10px] font-medium text-[#5c3fbb] mt-2">Clase con docente</div>
</div>
<div className="bg-[#f3f0ff] border-l-[3px] border-[#5c3fbb] rounded-xl p-4">
<div className="text-[10px] uppercase tracking-widest text-[#5c3fbb] mb-1.5 font-semibold">Jueves</div>
<div className="font-mono text-lg text-[#1a0a2e] font-normal leading-none">07:30 – 08:30</div>
<div className="font-mono text-sm text-[#8878c4] mt-1">08:30 – 09:30</div>
<div className="text-[10px] font-medium text-[#5c3fbb] mt-2">Clase con docente</div>
</div>
</div>
<div className="text-[11px] uppercase tracking-widest text-[#8878c4] font-medium mt-6 mb-3 pb-1.5 border-b border-[#f0ecff] flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#e8650a]"></span> Prácticas de aplicación y experimentación
            </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
<div className="bg-[#fff5ee] border-l-[3px] border-[#e8650a] rounded-xl p-4">
<div className="text-[10px] uppercase tracking-widest text-[#e8650a] mb-1.5 font-semibold">Lunes</div>
<div className="font-mono text-lg text-[#1a0a2e] font-normal leading-none">14:30 – 15:30</div>
<div className="font-mono text-sm text-[#8878c4] mt-1">15:30 – 16:30</div>
<div className="text-[10px] font-medium text-[#e8650a] mt-2">Práctica de aplicación</div>
</div>
</div>
</div>

<div className="bg-white border border-[#e0d9ff] border-t-[3px] border-t-[#5c3fbb] rounded-2xl p-6 mb-5 shadow-[0_2px_8px_rgba(92,63,187,0.07)]">
<h2 className="text-lg tracking-tight font-semibold text-[#3d2b8e] mb-4 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon> Competencias
            </h2>
<div className="bg-[#f3f0ff] border border-[#d4caff] border-l-[3px] border-l-[#5c3fbb] rounded-xl p-4 mb-3 text-sm text-[#1a0a2e] leading-relaxed font-light">
<div className="text-[10px] uppercase tracking-widest text-[#5c3fbb] font-semibold mb-2">Competencia específica del proyecto formativo</div>
                Analiza la organización y funcionamiento del Sistema Nervioso Periférico para fortalecer el desarrollo de la evaluación, diagnóstico e intervención en la salud mental, considerando las bases biológicas de la conducta con ética.
            </div>
<div className="bg-[#fff5ee] border border-[#ffd5b5] border-l-[3px] border-l-[#e8650a] rounded-xl p-4 mb-3 text-sm text-[#1a0a2e] leading-relaxed font-light">
<div className="text-[10px] uppercase tracking-widest text-[#e8650a] font-semibold mb-2">Competencia del perfil de egreso</div>
                Integra los fundamentos epistemológicos de las diferentes vertientes teóricas de la psicología con los conocimientos prácticos, para el análisis, identificación e intervención en los diferentes campos de aplicación de la Psicología Clínica, promoviendo competencias profesionales y posibilitando el trabajo trans, multi e interdisciplinario.
            </div>
<div className="bg-[#fffbf0] border border-[#ffe5a0] border-l-[3px] border-l-[#f5a623] rounded-xl p-4 text-sm text-[#1a0a2e] leading-relaxed font-light">
<div className="text-[10px] uppercase tracking-widest text-[#c4900a] font-semibold mb-2">Competencia genérica</div>
                Aplica el pensamiento complejo en la resolución de problemas y proyectos para mejorar las condiciones de vida, considerando los retos del entorno y sus procesos de incertidumbre.
            </div>
</div>

<div className="bg-white border border-[#e0d9ff] border-t-[3px] border-t-[#5c3fbb] rounded-2xl p-6 mb-5 shadow-[0_2px_8px_rgba(92,63,187,0.07)]">
<h2 className="text-lg tracking-tight font-semibold text-[#3d2b8e] mb-4 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-xl" icon="solar:pin-linear" strokeWidth="1.5"></iconify-icon> Prerrequisito y Correquisitos
            </h2>
<p className="text-xs text-[#6b5aad] font-medium mb-2">Prerrequisito obligatorio:</p>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-4">
<div className="bg-[#fff5ee] border border-[#ffd5b5] rounded-lg px-3 py-2 text-xs text-[#7a3000] flex items-center gap-2">
<iconify-icon className="text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> Neuroanatomía y Neurofisiología I
                </div>
</div>
<p className="text-xs text-[#6b5aad] font-medium mb-2">Correquisitos — cursados en paralelo:</p>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon className="text-lg shrink-0" icon="solar:lightbulb-linear"></iconify-icon> Inteligencia Emocional</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon className="text-lg shrink-0" icon="solar:test-tube-linear"></iconify-icon> Psicofisiología</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon className="text-lg shrink-0" icon="solar:settings-linear"></iconify-icon> Procesos Psicológicos II</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon className="text-lg shrink-0" icon="solar:book-bookmark-linear"></iconify-icon> Modelos y Teorías I</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon className="text-lg shrink-0" icon="solar:chart-square-linear"></iconify-icon> Estadística</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon className="text-lg shrink-0" icon="solar:pin-linear"></iconify-icon> Electiva 2</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon className="text-lg shrink-0" icon="solar:users-group-two-rounded-linear"></iconify-icon> Psicol. Niñez y Adolescencia</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon className="text-lg shrink-0" icon="solar:users-group-rounded-linear"></iconify-icon> Psicología Social</div>
</div>
</div>

<div className="bg-white border border-[#e0d9ff] border-t-[3px] border-t-[#e8650a] rounded-2xl p-6 mb-5 shadow-[0_2px_8px_rgba(92,63,187,0.07)]">
<h2 className="text-lg tracking-tight font-semibold text-[#3d2b8e] mb-4 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-xl" icon="solar:flask-linear" strokeWidth="1.5"></iconify-icon> Metodología y Proyecto Final
            </h2>
<p className="text-sm text-[#3a2860] leading-relaxed mb-4 font-light">
                Metodología <strong className="font-medium text-[#1a0a2e]">basada en problemas</strong> mediante estudio de caso, aprendizaje cooperativo, pensamiento crítico y gamificación. Integración activa de herramientas de <strong className="font-medium text-[#e8650a]">IA</strong>: NotebookLM, Gemini, Gamma, Copilot, Canva IA, Orate AI.
            </p>
<div className="inline-flex items-center gap-2 bg-[#fff5ee] border border-[#ffd5b5] rounded-lg px-3 py-2 text-xs text-[#e8650a] font-medium mb-3">
<iconify-icon className="text-base" icon="solar:folder-with-files-linear"></iconify-icon> Proyecto Final: Compendio de Casos Clínicos — Fundamentos Neuroanatómicos del SNP
            </div>
<p className="text-xs text-[#6b5aad] leading-relaxed font-light">
<strong className="font-medium text-[#5c3fbb]">Problema central:</strong> Según la PAHO y la OMS (2021), en Ecuador 30 de cada 100 personas sufren algún problema de salud mental. ¿Cómo puede el psicólogo atender de manera integral los diferentes trastornos mentales que aquejan a la población?
            </p>
</div>
</div>

<div className="tab-panel hidden" id="panel-talleres">

<div className="border border-[#e0d9ff] rounded-2xl overflow-hidden mb-4 bg-white">
<button className="w-full flex items-center gap-4 p-5 bg-[#faf8ff] hover:bg-[#f3f0ff] transition-colors text-left outline-none" onclick="toggleAccordion('taller1-body', 'taller1-icon')">
<div className="w-11 h-11 bg-gradient-to-br from-[#3d2b8e] to-[#7c5cfc] rounded-xl flex items-center justify-center font-mono text-sm font-normal text-white shrink-0">01</div>
<div className="flex-1">
<h3 className="text-base tracking-tight font-semibold text-[#3d2b8e] mb-1">Fibras Nerviosas y Terminaciones Receptoras</h3>
<p className="text-xs text-[#8878c4] leading-relaxed font-light">Identifica las estructuras y función básica de las fibras nerviosas y terminaciones receptoras y efectoras mediante análisis de caso clínico</p>
</div>
<iconify-icon className="text-[#8878c4] text-lg shrink-0 transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="taller1-icon"></iconify-icon>
</button>
<div className="hidden p-5 pt-2 border-t border-[#f0ecff]" id="taller1-body">
<div className="inline-flex items-center gap-2 bg-[#fff5ee] border border-[#ffd5b5] rounded-lg px-3 py-1.5 text-xs text-[#e8650a] font-medium mb-3">
<iconify-icon className="text-sm" icon="solar:folder-with-files-linear"></iconify-icon> Compendio de Casos Clínicos de Fibras Nerviosas — NeuroCasos con IA
                </div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-[11px] text-[#5c3fbb]">Neurona / Sinapsis</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-[11px] text-[#5c3fbb]">Fibras nerviosas</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-[11px] text-[#5c3fbb]">Terminaciones receptoras</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-2.5 py-1 text-[11px] text-[#e8650a] flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> NotebookLM</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-2.5 py-1 text-[11px] text-[#e8650a] flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Gemini</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-2.5 py-1 text-[11px] text-[#e8650a] flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Canva IA</span>
</div>
<div className="space-y-2">
<div className="flex gap-3 p-2.5 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-colors">
<div className="font-mono text-[11px] text-[#e8650a] min-w-[75px] pt-0.5 font-medium">07/04/2026</div>
<div className="flex-1 space-y-1">
<div className="text-xs text-[#3a2860] leading-snug flex items-start gap-2 font-light"><span className="text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide bg-[#ebe6ff] text-[#5c3fbb] shrink-0 mt-0.5">Docente</span> Bienvenida, inducción del mapa de formación, código de ética y reglamento universitario</div>
</div>
</div>
<div className="flex gap-3 p-2.5 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-colors">
<div className="font-mono text-[11px] text-[#e8650a] min-w-[75px] pt-0.5 font-medium">09/04/2026</div>
<div className="flex-1 space-y-1">
<div className="text-xs text-[#3a2860] leading-snug flex items-start gap-2 font-light"><span className="text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide bg-[#ffe0e0] text-[#c43a3a] shrink-0 mt-0.5">Eval</span> Evaluación diagnóstica</div>
<div className="text-xs text-[#3a2860] leading-snug flex items-start gap-2 font-light"><span className="text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide bg-[#ebe6ff] text-[#5c3fbb] shrink-0 mt-0.5">Docente</span> Conferencia: Proceso de sinapsis con uso de IA</div>
<div className="text-xs text-[#3a2860] leading-snug flex items-start gap-2 font-light"><span className="text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide bg-[#fff8e0] text-[#c4900a] shrink-0 mt-0.5">Práctica</span> Modelo 3D de sinapsis química y eléctrica</div>
</div>
</div>
<div className="flex gap-3 p-2.5 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-colors">
<div className="font-mono text-[11px] text-[#e8650a] min-w-[75px] pt-0.5 font-medium">16/04/2026</div>
<div className="flex-1 space-y-1">
<div className="text-xs text-[#3a2860] leading-snug flex items-start gap-2 font-light"><span className="text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide bg-[#ebe6ff] text-[#5c3fbb] shrink-0 mt-0.5">Docente</span> Clase magistral: Ganglios y plexos con IA NotebookLM</div>
</div>
</div>
<div className="flex gap-3 p-2.5 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-colors">
<div className="font-mono text-[11px] text-[#e8650a] min-w-[75px] pt-0.5 font-medium">12/05/2026</div>
<div className="flex-1 space-y-1">
<div className="text-xs text-[#3a2860] leading-snug flex items-start gap-2 font-light"><span className="text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide bg-[#fff0e0] text-[#e8650a] shrink-0 mt-0.5">Autónomo</span> Video resumen con NotebookLM: bases neuroanatómicas del SNP</div>
<div className="text-xs text-[#3a2860] leading-snug flex items-start gap-2 font-light"><span className="text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide bg-[#fff8e0] text-[#c4900a] shrink-0 mt-0.5">Práctica</span> Exploración de terminaciones receptoras y efectoras</div>
</div>
</div>
</div>
</div>
</div>

<div className="border border-[#e0d9ff] rounded-2xl overflow-hidden mb-4 bg-white">
<button className="w-full flex items-center gap-4 p-5 bg-[#faf8ff] hover:bg-[#f3f0ff] transition-colors text-left outline-none" onclick="toggleAccordion('taller2-body', 'taller2-icon')">
<div className="w-11 h-11 bg-gradient-to-br from-[#3d2b8e] to-[#7c5cfc] rounded-xl flex items-center justify-center font-mono text-sm font-normal text-white shrink-0">02</div>
<div className="flex-1">
<h3 className="text-base tracking-tight font-semibold text-[#3d2b8e] mb-1">Nervios Craneales</h3>
<p className="text-xs text-[#8878c4] leading-relaxed font-light">Relaciona las estructuras y funciones con las conexiones centrales de los 12 nervios craneales mediante el estudio de casos clínicos</p>
</div>
<iconify-icon className="text-[#8878c4] text-lg shrink-0 transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="taller2-icon"></iconify-icon>
</button>
<div className="hidden p-5 pt-2 border-t border-[#f0ecff]" id="taller2-body">
<div className="inline-flex items-center gap-2 bg-[#fff5ee] border border-[#ffd5b5] rounded-lg px-3 py-1.5 text-xs text-[#e8650a] font-medium mb-3">
<iconify-icon className="text-sm" icon="solar:folder-with-files-linear"></iconify-icon> Compendio de Casos Clínicos de Nervios Craneales
                </div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-[11px] text-[#5c3fbb]">Pares I a XII</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-2.5 py-1 text-[11px] text-[#e8650a] flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Gamma</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-2.5 py-1 text-[11px] text-[#e8650a] flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Orate AI</span>
</div>
<div className="space-y-2">
<div className="flex gap-3 p-2.5 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-colors">
<div className="font-mono text-[11px] text-[#e8650a] min-w-[75px] pt-0.5 font-medium">19/05/2026</div>
<div className="flex-1 space-y-1">
<div className="text-xs text-[#3a2860] leading-snug flex items-start gap-2 font-light"><span className="text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide bg-[#ebe6ff] text-[#5c3fbb] shrink-0 mt-0.5">Docente</span> Conferencia: Par I Olfatorio e IA Gemini</div>
</div>
</div>
<div className="flex gap-3 p-2.5 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-colors">
<div className="font-mono text-[11px] text-[#e8650a] min-w-[75px] pt-0.5 font-medium">02/06/2026</div>
<div className="flex-1 space-y-1">
<div className="text-xs text-[#3a2860] leading-snug flex items-start gap-2 font-light"><span className="text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide bg-[#ffe0e0] text-[#c43a3a] shrink-0 mt-0.5">Eval</span> ⚠️ Evaluación del Primer Parcial</div>
<div className="text-xs text-[#3a2860] leading-snug flex items-start gap-2 font-light"><span className="text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide bg-[#fff8e0] text-[#c4900a] shrink-0 mt-0.5">Práctica</span> Exploración de pares craneales: Olfatorio a Troclear</div>
</div>
</div>
</div>
</div>
</div>

<div className="border border-[#e0d9ff] rounded-2xl overflow-hidden mb-4 bg-white">
<button className="w-full flex items-center gap-4 p-5 bg-[#faf8ff] hover:bg-[#f3f0ff] transition-colors text-left outline-none" onclick="toggleAccordion('taller3-body', 'taller3-icon')">
<div className="w-11 h-11 bg-gradient-to-br from-[#3d2b8e] to-[#7c5cfc] rounded-xl flex items-center justify-center font-mono text-sm font-normal text-white shrink-0">03</div>
<div className="flex-1">
<h3 className="text-base tracking-tight font-semibold text-[#3d2b8e] mb-1">Médula Espinal: Estructura y Funciones</h3>
<p className="text-xs text-[#8878c4] leading-relaxed font-light">Examina la organización estructural de la médula espinal y las funciones que realiza en el ser humano</p>
</div>
<iconify-icon className="text-[#8878c4] text-lg shrink-0 transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="taller3-icon"></iconify-icon>
</button>
<div className="hidden p-5 pt-2 border-t border-[#f0ecff]" id="taller3-body">
<div className="inline-flex items-center gap-2 bg-[#fff5ee] border border-[#ffd5b5] rounded-lg px-3 py-1.5 text-xs text-[#e8650a] font-medium mb-3">
<iconify-icon className="text-sm" icon="solar:folder-with-files-linear"></iconify-icon> Compendio de Casos: Arquitectura Funcional de la Médula
                </div>
<div className="space-y-2">
<div className="flex gap-3 p-2.5 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-colors">
<div className="font-mono text-[11px] text-[#e8650a] min-w-[75px] pt-0.5 font-medium">30/06/2026</div>
<div className="flex-1 space-y-1">
<div className="text-xs text-[#3a2860] leading-snug flex items-start gap-2 font-light"><span className="text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide bg-[#ebe6ff] text-[#5c3fbb] shrink-0 mt-0.5">Docente</span> Generalidades de la médula espinal con Orate AI</div>
</div>
</div>
<div className="flex gap-3 p-2.5 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-colors">
<div className="font-mono text-[11px] text-[#e8650a] min-w-[75px] pt-0.5 font-medium">06/08/2026</div>
<div className="flex-1 space-y-1">
<div className="text-xs text-[#3a2860] leading-snug flex items-start gap-2 font-light"><span className="text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide bg-[#ffe0e0] text-[#c43a3a] shrink-0 mt-0.5">Eval</span> ⚠️ Examen Final</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-panel hidden" id="panel-evaluacion">
<div className="bg-white border border-[#e0d9ff] border-t-[3px] border-t-[#5c3fbb] rounded-2xl p-6 mb-5 shadow-[0_2px_8px_rgba(92,63,187,0.07)]">
<h2 className="text-lg tracking-tight font-semibold text-[#3d2b8e] mb-2 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon> Rúbricas de Evaluación — Compendio
            </h2>
<p className="text-xs text-[#6b5aad] mb-5 font-light">Los talleres 1, 2 y 3 se evalúan con <strong className="font-medium text-[#3d2b8e]">4 indicadores clínicos</strong>. El Proyecto Final incluye un indicador adicional de <strong className="font-medium text-[#3d2b8e]">Organización y Contenido</strong> con ponderación máxima.</p>
<h3 className="text-sm font-semibold text-[#e8650a] mb-3 pb-2 border-b border-[#ffe0c0]">Indicadores comunes — Talleres 1, 2 y 3</h3>
<div className="overflow-x-auto mb-6">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead>
<tr>
<th className="bg-[#f3f0ff] border border-[#e0d9ff] text-[#5c3fbb] text-[10px] uppercase tracking-wider font-semibold p-3 w-1/5">Indicador</th>
<th className="bg-[#f3f0ff] border border-[#e0d9ff] text-[#5c3fbb] text-[10px] uppercase tracking-wider font-semibold p-3 text-center">Deficiente</th>
<th className="bg-[#f3f0ff] border border-[#e0d9ff] text-[#5c3fbb] text-[10px] uppercase tracking-wider font-semibold p-3 text-center">Regular</th>
<th className="bg-[#f3f0ff] border border-[#e0d9ff] text-[#5c3fbb] text-[10px] uppercase tracking-wider font-semibold p-3 text-center">Bueno</th>
<th className="bg-[#f3f0ff] border border-[#e0d9ff] text-[#5c3fbb] text-[10px] uppercase tracking-wider font-semibold p-3 text-center">Muy Bueno</th>
<th className="bg-[#f3f0ff] border border-[#e0d9ff] text-[#5c3fbb] text-[10px] uppercase tracking-wider font-semibold p-3 text-center">Excelente</th>
</tr>
</thead>
<tbody className="text-[11px] text-[#3a2860] font-light">
<tr className="hover:bg-[#f8f6ff] transition-colors">
<td className="border border-[#f0ecff] p-3 font-medium text-[#1a0a2e] bg-[#faf8ff]">Signos y síntomas<span className="block font-mono text-[10px] text-[#8878c4] mt-1 font-normal">(4 pts)</span></td>
<td className="border border-[#f0ecff] p-3 text-center">Poca precisión<span className="block font-mono text-[10px] text-[#8878c4] mt-1">0.50</span></td>
<td className="border border-[#f0ecff] p-3 text-center">Algunos, poca rel.<span className="block font-mono text-[10px] text-[#8878c4] mt-1">0.70</span></td>
<td className="border border-[#f0ecff] p-3 text-center">Categorizo parcial<span className="block font-mono text-[10px] text-[#8878c4] mt-1">1.50</span></td>
<td className="border border-[#f0ecff] p-3 text-center">Analizo en partes<span className="block font-mono text-[10px] text-[#8878c4] mt-1">3.00</span></td>
<td className="border border-[#f0ecff] p-3 text-center font-medium text-[#e8650a]">Info relevante<span className="block font-mono text-[10px] text-[#8878c4] mt-1">4.00</span></td>
</tr>
<tr className="hover:bg-[#f8f6ff] transition-colors">
<td className="border border-[#f0ecff] p-3 font-medium text-[#1a0a2e] bg-[#faf8ff]">Impresión diag.<span className="block font-mono text-[10px] text-[#8878c4] mt-1 font-normal">(2 pts)</span></td>
<td className="border border-[#f0ecff] p-3 text-center">No responde<span className="block font-mono text-[10px] text-[#8878c4] mt-1">0.20</span></td>
<td className="border border-[#f0ecff] p-3 text-center">Parcial<span className="block font-mono text-[10px] text-[#8878c4] mt-1">0.50</span></td>
<td className="border border-[#f0ecff] p-3 text-center">Básica<span className="block font-mono text-[10px] text-[#8878c4] mt-1">0.70</span></td>
<td className="border border-[#f0ecff] p-3 text-center">Pertinente<span className="block font-mono text-[10px] text-[#8878c4] mt-1">1.50</span></td>
<td className="border border-[#f0ecff] p-3 text-center font-medium text-[#e8650a]">Contexto total<span className="block font-mono text-[10px] text-[#8878c4] mt-1">2.00</span></td>
</tr>
</tbody>
</table>
</div>
<h3 className="text-sm font-semibold text-[#e8650a] mb-3 pb-2 border-b border-[#ffe0c0]">Proyecto Final — Ponderación máxima</h3>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead>
<tr>
<th className="bg-[#f3f0ff] border border-[#e0d9ff] text-[#5c3fbb] text-[10px] uppercase tracking-wider font-semibold p-3 w-1/5">Indicador</th>
<th className="bg-[#f3f0ff] border border-[#e0d9ff] text-[#5c3fbb] text-[10px] uppercase tracking-wider font-semibold p-3 text-center">Deficiente</th>
<th className="bg-[#f3f0ff] border border-[#e0d9ff] text-[#5c3fbb] text-[10px] uppercase tracking-wider font-semibold p-3 text-center">Regular</th>
<th className="bg-[#f3f0ff] border border-[#e0d9ff] text-[#5c3fbb] text-[10px] uppercase tracking-wider font-semibold p-3 text-center">Bueno</th>
<th className="bg-[#f3f0ff] border border-[#e0d9ff] text-[#5c3fbb] text-[10px] uppercase tracking-wider font-semibold p-3 text-center">Muy Bueno</th>
<th className="bg-[#f3f0ff] border border-[#e0d9ff] text-[#5c3fbb] text-[10px] uppercase tracking-wider font-semibold p-3 text-center">Excelente</th>
</tr>
</thead>
<tbody className="text-[11px] text-[#3a2860] font-light">
<tr className="hover:bg-[#f8f6ff] transition-colors">
<td className="border border-[#f0ecff] p-3 font-medium text-[#1a0a2e] bg-[#faf8ff]">Org. y Contenido<span className="block font-mono text-[10px] text-[#8878c4] mt-1 font-normal">(2 pts)</span></td>
<td className="border border-[#f0ecff] p-3 text-center">Sin org.<span className="block font-mono text-[10px] text-[#8878c4] mt-1">0.20</span></td>
<td className="border border-[#f0ecff] p-3 text-center">Incompleto<span className="block font-mono text-[10px] text-[#8878c4] mt-1">0.50</span></td>
<td className="border border-[#f0ecff] p-3 text-center">Parcial<span className="block font-mono text-[10px] text-[#8878c4] mt-1">0.70</span></td>
<td className="border border-[#f0ecff] p-3 text-center">Con secuencia<span className="block font-mono text-[10px] text-[#8878c4] mt-1">1.50</span></td>
<td className="border border-[#f0ecff] p-3 text-center font-medium text-[#e8650a]">Compendio total<span className="block font-mono text-[10px] text-[#8878c4] mt-1">2.00</span></td>
</tr>
<tr className="hover:bg-[#f8f6ff] transition-colors">
<td className="border border-[#f0ecff] p-3 font-medium text-[#1a0a2e] bg-[#faf8ff]">Uso crítico IA<span className="block font-mono text-[10px] text-[#8878c4] mt-1 font-normal">(1 pt)</span></td>
<td className="border border-[#f0ecff] p-3 text-center">Sin análisis<span className="block font-mono text-[10px] text-[#8878c4] mt-1">0.20</span></td>
<td className="border border-[#f0ecff] p-3 text-center">Pocas modif.<span className="block font-mono text-[10px] text-[#8878c4] mt-1">0.50</span></td>
<td className="border border-[#f0ecff] p-3 text-center">Correcciones<span className="block font-mono text-[10px] text-[#8878c4] mt-1">0.70</span></td>
<td className="border border-[#f0ecff] p-3 text-center">Limitaciones<span className="block font-mono text-[10px] text-[#8878c4] mt-1">0.80</span></td>
<td className="border border-[#f0ecff] p-3 text-center font-medium text-[#e8650a]">Supera IA<span className="block font-mono text-[10px] text-[#8878c4] mt-1">1.00</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="tab-panel hidden" id="panel-bibliografia">
<div className="bg-white border border-[#e0d9ff] border-t-[3px] border-t-[#5c3fbb] rounded-2xl p-6 mb-5 shadow-[0_2px_8px_rgba(92,63,187,0.07)]">
<h2 className="text-lg tracking-tight font-semibold text-[#3d2b8e] mb-4 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-xl" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon> Fuentes Bibliográficas
            </h2>
<div className="space-y-3">
<div className="bg-[#faf8ff] border border-transparent hover:border-[#e0d9ff] border-l-[3px] border-l-transparent hover:border-l-[#5c3fbb] rounded-xl p-4 flex gap-4 items-start transition-all">
<span className="text-[9px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-wide bg-[#ebe6ff] text-[#5c3fbb] shrink-0 mt-0.5">Básica</span>
<div className="flex-1">
<div className="text-sm font-semibold text-[#1a0a2e] mb-1 leading-snug">Módulo Didáctico: Neuroanatomía</div>
<div className="text-[11px] text-[#8878c4] mb-1.5 font-medium">Castaño Ramírez, S. M.</div>
<div className="flex flex-wrap gap-3 text-[10px] text-[#8878c4] mb-2 font-light">
<span>Institución Universitaria de Envigado</span><span>2023</span>
</div>
<a className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#5c3fbb] hover:underline" href="#">
<iconify-icon icon="solar:link-linear"></iconify-icon> Acceder al recurso
                        </a>
</div>
</div>
<div className="bg-[#faf8ff] border border-transparent hover:border-[#e0d9ff] border-l-[3px] border-l-transparent hover:border-l-[#5c3fbb] rounded-xl p-4 flex gap-4 items-start transition-all">
<span className="text-[9px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-wide bg-[#ebe6ff] text-[#5c3fbb] shrink-0 mt-0.5">Básica</span>
<div className="flex-1">
<div className="text-sm font-semibold text-[#1a0a2e] mb-1 leading-snug">Neuroanatomía: Fundamentos para Estudiantes de Ciencias de la Salud</div>
<div className="text-[11px] text-[#8878c4] mb-1.5 font-medium">Suazo Galdames, Iván</div>
<div className="flex flex-wrap gap-3 text-[10px] text-[#8878c4] mb-2 font-light">
<span>RIL Editores</span><span>2021</span>
</div>
<a className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#5c3fbb] hover:underline" href="#">
<iconify-icon icon="solar:link-linear"></iconify-icon> Acceder al recurso
                        </a>
</div>
</div>
<div className="bg-[#faf8ff] border border-transparent hover:border-[#e0d9ff] border-l-[3px] border-l-transparent hover:border-l-[#5c3fbb] rounded-xl p-4 flex gap-4 items-start transition-all">
<span className="text-[9px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-wide bg-[#fff0e0] text-[#e8650a] shrink-0 mt-0.5">Comple.</span>
<div className="flex-1">
<div className="text-sm font-semibold text-[#1a0a2e] mb-1 leading-snug">Biopsicología</div>
<div className="text-[11px] text-[#8878c4] mb-1.5 font-medium">Pinel, John</div>
<div className="flex flex-wrap gap-3 text-[10px] text-[#8878c4] font-light">
<span>Pearson</span><span>2012</span><span>Físico · Cód. 8912</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="text-center py-6 border-t border-[#f0ecff] mt-8 text-[11px] text-[#8878c4] font-light flex flex-col items-center gap-2">
<div className="text-[#8878c4]/40 font-bold text-2xl tracking-tighter">UTI</div>
        Universidad Tecnológica Indoamérica · Facultad de Ciencias Sociales y Humanas · Período A26<br/>
        Docente: Stefania del Rocío Llerena Freire · Coordinadora: Gabriela Lorena Abril Lucero
    </div>


    </>
  );
}
