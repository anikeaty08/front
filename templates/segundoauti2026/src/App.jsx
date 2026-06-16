import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchTab(panelId, btn) {
            // Hide all panels
            document.querySelectorAll('.tab-panel').forEach(p => {
                p.classList.remove('block');
                p.classList.add('hidden');
            });
            // Show selected panel
            document.getElementById(panelId).classList.remove('hidden');
            document.getElementById(panelId).classList.add('block');
            
            // Reset all buttons
            document.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.remove('bg-[#5c3fbb]', 'text-white', 'border-[#5c3fbb]', 'font-medium');
                b.classList.add('bg-[#f3f0ff]', 'text-[#5c3fbb]', 'border-[#e0d9ff]', 'font-normal');
            });
            // Style active button
            btn.classList.remove('bg-[#f3f0ff]', 'text-[#5c3fbb]', 'border-[#e0d9ff]', 'font-normal');
            btn.classList.add('bg-[#5c3fbb]', 'text-white', 'border-[#5c3fbb]', 'font-medium');
        }

        function toggleAcc(id) {
            const body = document.getElementById(id + '-body');
            const arrow = document.getElementById(id + '-arrow');
            if(body.classList.contains('hidden')) {
                body.classList.remove('hidden');
                arrow.classList.add('rotate-180');
            } else {
                body.classList.add('hidden');
                arrow.classList.remove('rotate-180');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-5xl mx-auto px-4 py-10">

<div className="bg-gradient-to-br from-[#3d2b8e] via-[#5c3fbb] to-[#7c5cfc] rounded-2xl p-6 sm:p-8 mb-6 text-white flex flex-col sm:flex-row gap-6 items-start sm:items-center shadow-sm">
<div className="bg-white text-[#5c3fbb] tracking-tighter rounded-xl p-2 flex shrink-0 items-center justify-center w-16 h-16 text-2xl font-semibold shadow-sm">
                UTI
            </div>
<div className="flex-1 min-w-0">
<div className="text-xs tracking-widest uppercase text-white/80 mb-2 font-medium">
                    Universidad Tecnológica Indoamérica · Psicología Clínica
                </div>
<div className="mb-2 flex flex-wrap gap-2">
<span className="bg-[#e8650a] rounded-full px-3.5 py-1 text-xs font-medium" style={{fontFamily: '\'DM Mono\', monospace'}}>A26</span>
<span className="bg-white/20 rounded-full px-3.5 py-1 text-xs font-medium" style={{fontFamily: '\'DM Mono\', monospace'}}>2° Nivel — Grupo A</span>
</div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight mb-2">
                    Neuroanatomía y<br/>Neurofisiología II
                </h1>
<div className="text-sm text-white/85 mb-4 font-light">
                    A26-PSCL-2-52913-1643  ·  Presencial · Pregrado
                </div>
<div className="flex flex-wrap gap-2.5">
<span className="bg-white/15 border border-white/30 rounded-full px-3.5 py-1.5 text-xs flex items-center gap-2" style={{fontFamily: '\'DM Mono\', monospace'}}>
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon> Inicio: 06 Abr 2026
                    </span>
<span className="bg-white/15 border border-white/30 rounded-full px-3.5 py-1.5 text-xs flex items-center gap-2" style={{fontFamily: '\'DM Mono\', monospace'}}>
<iconify-icon icon="solar:flag-linear" strokeWidth="1.5"></iconify-icon> Fin: 27 Sep 2026
                    </span>
</div>
</div>
</div>

<div className="flex flex-wrap gap-2 mb-6">
<button className="tab-btn active bg-[#5c3fbb] text-white border border-[#5c3fbb] rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2" onclick="switchTab('panel-general', this)">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon> General
            </button>
<button className="tab-btn bg-[#f3f0ff] text-[#5c3fbb] border border-[#e0d9ff] rounded-lg px-4 py-2 text-sm font-normal hover:bg-[#e8e0ff] hover:border-[#5c3fbb] transition-colors flex items-center gap-2" onclick="switchTab('panel-talleres', this)">
<iconify-icon icon="solar:notebook-square-linear" strokeWidth="1.5"></iconify-icon> Talleres
            </button>
<button className="tab-btn bg-[#f3f0ff] text-[#5c3fbb] border border-[#e0d9ff] rounded-lg px-4 py-2 text-sm font-normal hover:bg-[#e8e0ff] hover:border-[#5c3fbb] transition-colors flex items-center gap-2" onclick="switchTab('panel-evaluacion', this)">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon> Evaluación
            </button>
<button className="tab-btn bg-[#f3f0ff] text-[#5c3fbb] border border-[#e0d9ff] rounded-lg px-4 py-2 text-sm font-normal hover:bg-[#e8e0ff] hover:border-[#5c3fbb] transition-colors flex items-center gap-2" onclick="switchTab('panel-bibliografia', this)">
<iconify-icon icon="solar:bookmark-opened-linear" strokeWidth="1.5"></iconify-icon> Bibliografía
            </button>
</div>

<div className="relative">

<div className="tab-panel block" id="panel-general">

<div className="bg-white border border-[#e0d9ff] rounded-xl p-6 mb-5 border-t-[3px] border-t-[#5c3fbb] shadow-sm hover:shadow-md transition-shadow">
<div className="text-base font-semibold text-[#3d2b8e] mb-5 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-lg" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon> Perfil del Docente
                    </div>
<div className="flex gap-5 items-center flex-wrap">
<div className="w-16 h-16 bg-gradient-to-br from-[#3d2b8e] to-[#7c5cfc] rounded-full flex items-center justify-center text-xl font-semibold text-white shrink-0 border-2 border-[#5c3fbb]/20">
                            SL
                        </div>
<div>
<div className="text-lg font-semibold text-[#1a0a2e] mb-1">Stefania del Rocío Llerena Freire</div>
<div className="text-xs text-[#6b5aad] leading-relaxed mb-3 font-light">
                                Psicóloga Clínica · Magíster en Psicología Clínica mención Psicoterapia<br/>
                                Experiencia docente: 3 años
                            </div>
<div className="flex gap-2.5 flex-wrap">
<span className="bg-[#f3f0ff] border border-[#e0d9ff] rounded-md px-3 py-1.5 text-xs text-[#3d2b8e] flex items-center gap-1.5" style={{fontFamily: '\'DM Mono\', monospace'}}>
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon> 0992800286
                                </span>
<span className="bg-[#f3f0ff] border border-[#e0d9ff] rounded-md px-3 py-1.5 text-xs text-[#3d2b8e] flex items-center gap-1.5" style={{fontFamily: '\'DM Mono\', monospace'}}>
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon> sllerena@indoamerica.edu.ec
                                </span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-[#e0d9ff] rounded-xl p-6 mb-5 border-t-[3px] border-t-[#5c3fbb] shadow-sm hover:shadow-md transition-shadow">
<div className="text-base font-semibold text-[#3d2b8e] mb-5 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-lg" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon> Datos del Proyecto Formativo
                    </div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-6">
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3.5 text-center">
<div className="text-xs uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Créditos</div>
<div className="text-xl text-[#e8650a] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>2.75</div>
<div className="text-xs text-[#8878c4] mt-1 font-light">créditos acad.</div>
</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3.5 text-center">
<div className="text-xs uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Total</div>
<div className="text-xl text-[#e8650a] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>132</div>
<div className="text-xs text-[#8878c4] mt-1 font-light">horas totales</div>
</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3.5 text-center">
<div className="text-xs uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Nivel</div>
<div className="text-xl text-[#e8650a] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>2°</div>
<div className="text-xs text-[#8878c4] mt-1 font-light">segundo nivel</div>
</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3.5 text-center">
<div className="text-xs uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Docente</div>
<div className="text-xl text-[#e8650a] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>72h</div>
<div className="text-xs text-[#8878c4] mt-1 font-light">clases asistidas</div>
</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3.5 text-center">
<div className="text-xs uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Autónomo</div>
<div className="text-xl text-[#e8650a] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>20h</div>
<div className="text-xs text-[#8878c4] mt-1 font-light">aprendizaje</div>
</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3.5 text-center">
<div className="text-xs uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Prácticas</div>
<div className="text-xl text-[#e8650a] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>40h</div>
<div className="text-xs text-[#8878c4] mt-1 font-light">laboratorio</div>
</div>
</div>
<div className="mb-3">
<div className="flex justify-between text-xs text-[#6b5aad] mb-1.5 font-medium"><span>Clases con docente</span><span>72h</span></div>
<div className="h-2 bg-[#f0ecff] rounded-full overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-[#3d2b8e] to-[#7c5cfc]" style={{width: '54.5%'}}></div></div>
</div>
<div className="mb-3">
<div className="flex justify-between text-xs text-[#6b5aad] mb-1.5 font-medium"><span>Aprendizaje autónomo</span><span>20h</span></div>
<div className="h-2 bg-[#f0ecff] rounded-full overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-[#5c3fbb] to-[#e8650a]" style={{width: '15.1%'}}></div></div>
</div>
<div className="mb-3">
<div className="flex justify-between text-xs text-[#6b5aad] mb-1.5 font-medium"><span>Prácticas de aplicación</span><span>40h</span></div>
<div className="h-2 bg-[#f0ecff] rounded-full overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-[#e8650a] to-[#f5a623]" style={{width: '30.3%'}}></div></div>
</div>
</div>

<div className="bg-white border border-[#e0d9ff] rounded-xl p-6 mb-5 border-t-[3px] border-t-[#5c3fbb] shadow-sm hover:shadow-md transition-shadow">
<div className="text-base font-semibold text-[#3d2b8e] mb-2 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon> Horario de Clases y Prácticas
                    </div>
<div className="text-xs uppercase tracking-widest text-[#8878c4] font-medium mt-4 mb-3 pb-2 border-b border-[#f0ecff] flex items-center gap-2.5">
<span className="w-2 h-2 rounded-full bg-[#5c3fbb] shrink-0"></span> Clases asistidas por el docente
                    </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-4">
<div className="bg-[#f3f0ff] rounded-xl p-4 border-l-[3px] border-l-[#5c3fbb]">
<div className="text-xs uppercase tracking-widest mb-1.5 font-semibold text-[#5c3fbb]">Martes</div>
<div className="text-base text-[#1a0a2e] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>07:30 – 08:30</div>
<div className="text-xs mt-1.5 font-medium text-[#5c3fbb]">Clase con docente</div>
</div>
<div className="bg-[#f3f0ff] rounded-xl p-4 border-l-[3px] border-l-[#5c3fbb]">
<div className="text-xs uppercase tracking-widest mb-1.5 font-semibold text-[#5c3fbb]">Martes</div>
<div className="text-base text-[#1a0a2e] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>08:30 – 09:30</div>
<div className="text-xs mt-1.5 font-medium text-[#5c3fbb]">Clase con docente</div>
</div>
<div className="bg-[#f3f0ff] rounded-xl p-4 border-l-[3px] border-l-[#5c3fbb]">
<div className="text-xs uppercase tracking-widest mb-1.5 font-semibold text-[#5c3fbb]">Jueves</div>
<div className="text-base text-[#1a0a2e] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>07:30 – 08:30</div>
<div className="text-xs mt-1.5 font-medium text-[#5c3fbb]">Clase con docente</div>
</div>
<div className="bg-[#f3f0ff] rounded-xl p-4 border-l-[3px] border-l-[#5c3fbb]">
<div className="text-xs uppercase tracking-widest mb-1.5 font-semibold text-[#5c3fbb]">Jueves</div>
<div className="text-base text-[#1a0a2e] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>08:30 – 09:30</div>
<div className="text-xs mt-1.5 font-medium text-[#5c3fbb]">Clase con docente</div>
</div>
</div>
<div className="text-xs uppercase tracking-widest text-[#8878c4] font-medium mt-6 mb-3 pb-2 border-b border-[#f0ecff] flex items-center gap-2.5">
<span className="w-2 h-2 rounded-full bg-[#e8650a] shrink-0"></span> Prácticas de aplicación
                    </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
<div className="bg-[#fff5ee] rounded-xl p-4 border-l-[3px] border-l-[#e8650a]">
<div className="text-xs uppercase tracking-widest mb-1.5 font-semibold text-[#e8650a]">Lunes</div>
<div className="text-base text-[#1a0a2e] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>14:30 – 15:30</div>
<div className="text-xs mt-1.5 font-medium text-[#e8650a]">Práctica de aplicación</div>
</div>
<div className="bg-[#fff5ee] rounded-xl p-4 border-l-[3px] border-l-[#e8650a]">
<div className="text-xs uppercase tracking-widest mb-1.5 font-semibold text-[#e8650a]">Lunes</div>
<div className="text-base text-[#1a0a2e] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>15:30 – 16:30</div>
<div className="text-xs mt-1.5 font-medium text-[#e8650a]">Práctica de aplicación</div>
</div>
</div>
</div>

<div className="bg-white border border-[#e0d9ff] rounded-xl p-6 mb-5 border-t-[3px] border-t-[#5c3fbb] shadow-sm hover:shadow-md transition-shadow">
<div className="text-base font-semibold text-[#3d2b8e] mb-4 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-lg" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon> Competencias
                    </div>
<div className="bg-[#f3f0ff] border border-[#d4caff] border-l-[3px] border-l-[#5c3fbb] rounded-lg p-4 mb-3 text-sm leading-relaxed text-[#1a0a2e] font-light">
<div className="text-xs uppercase tracking-widest font-semibold mb-2 text-[#5c3fbb]">Competencia específica del proyecto formativo</div>
                        Analiza la organización y funcionamiento del Sistema Nervioso Periférico para fortalecer el desarrollo de la evaluación, diagnóstico e intervención en la salud mental, considerando las bases biológicas de la conducta con ética.
                    </div>
<div className="bg-[#fff5ee] border border-[#ffd5b5] border-l-[3px] border-l-[#e8650a] rounded-lg p-4 mb-3 text-sm leading-relaxed text-[#1a0a2e] font-light">
<div className="text-xs uppercase tracking-widest font-semibold mb-2 text-[#e8650a]">Competencia del perfil de egreso</div>
                        Integra los fundamentos epistemológicos de las diferentes vertientes teóricas de la psicología con los conocimientos prácticos, para el análisis, identificación e intervención en los diferentes campos de aplicación de la Psicología Clínica, promoviendo competencias profesionales y posibilitando el trabajo trans, multi e interdisciplinario.
                    </div>
<div className="bg-[#fffbf0] border border-[#ffe5a0] border-l-[3px] border-l-[#f5a623] rounded-lg p-4 text-sm leading-relaxed text-[#1a0a2e] font-light">
<div className="text-xs uppercase tracking-widest font-semibold mb-2 text-[#c4900a]">Competencia genérica</div>
                        Aplica el pensamiento complejo en la resolución de problemas y proyectos para mejorar las condiciones de vida, considerando los retos del entorno y sus procesos de incertidumbre.
                    </div>
</div>

<div className="bg-white border border-[#e0d9ff] rounded-xl p-6 mb-5 border-t-[3px] border-t-[#5c3fbb] shadow-sm hover:shadow-md transition-shadow">
<div className="text-base font-semibold text-[#3d2b8e] mb-4 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-lg" icon="solar:pin-linear" strokeWidth="1.5"></iconify-icon> Prerrequisito y Correquisitos
                    </div>
<div className="text-xs text-[#6b5aad] font-medium mb-2.5">Prerrequisito obligatorio:</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 mb-5">
<div className="bg-[#fff5ee] border border-[#ffd5b5] rounded-lg px-3.5 py-2.5 text-xs text-[#7a3000] flex items-center gap-2 font-medium">
<iconify-icon className="text-sm" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Neuroanatomía y Neurofisiología I
                        </div>
</div>
<div className="text-xs text-[#6b5aad] font-medium mb-2.5">Correquisitos — cursados en paralelo:</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3.5 py-2.5 text-xs text-[#3d2b8e] flex items-center gap-2 font-light">
<iconify-icon icon="solar:lightbulb-linear" strokeWidth="1.5"></iconify-icon> Inteligencia Emocional
                        </div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3.5 py-2.5 text-xs text-[#3d2b8e] flex items-center gap-2 font-light">
<iconify-icon icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon> Psicofisiología
                        </div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3.5 py-2.5 text-xs text-[#3d2b8e] flex items-center gap-2 font-light">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon> Procesos Psicológicos II
                        </div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3.5 py-2.5 text-xs text-[#3d2b8e] flex items-center gap-2 font-light">
<iconify-icon icon="solar:book-linear" strokeWidth="1.5"></iconify-icon> Modelos Psicológicos I
                        </div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3.5 py-2.5 text-xs text-[#3d2b8e] flex items-center gap-2 font-light">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon> Estadística
                        </div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3.5 py-2.5 text-xs text-[#3d2b8e] flex items-center gap-2 font-light">
<iconify-icon icon="solar:pin-linear" strokeWidth="1.5"></iconify-icon> Electiva 2
                        </div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3.5 py-2.5 text-xs text-[#3d2b8e] flex items-center gap-2 font-light">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon> Psico. Niñez y Adolescencia
                        </div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3.5 py-2.5 text-xs text-[#3d2b8e] flex items-center gap-2 font-light">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon> Psicología Social
                        </div>
</div>
</div>

<div className="bg-white border border-[#e0d9ff] rounded-xl p-6 border-t-[3px] border-t-[#e8650a] shadow-sm hover:shadow-md transition-shadow">
<div className="text-base font-semibold text-[#3d2b8e] mb-3 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-lg" icon="solar:flask-linear" strokeWidth="1.5"></iconify-icon> Metodología y Proyecto Final
                    </div>
<p className="text-sm text-[#3a2860] leading-relaxed mb-4 font-light">
                        Metodología <strong className="font-medium text-[#1a0a2e]">basada en problemas</strong> mediante estudio de caso, aprendizaje cooperativo, pensamiento crítico y gamificación. Integración activa de herramientas de <strong className="font-medium text-[#e8650a]">IA</strong>: NotebookLM, Gemini, Gamma, Copilot, Canva IA, Orate AI.
                    </p>
<div className="inline-flex items-center gap-2 bg-[#fff5ee] border border-[#ffd5b5] rounded-lg px-3.5 py-2 text-xs text-[#e8650a] font-medium mb-4">
<iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon> Proyecto Final: Compendio de Casos Clínicos — Fundamentos Neuroanatómicos del SNP
                    </div>
<p className="text-xs text-[#6b5aad] leading-relaxed font-light">
<strong className="font-medium text-[#5c3fbb]">Problema central:</strong> Según la PAHO y la OMS (2021), en Ecuador 30 de cada 100 personas sufren algún problema de salud mental. ¿Cómo puede el psicólogo atender de manera integral los diferentes trastornos mentales que aquejan a la población?
                    </p>
</div>
</div>

<div className="tab-panel hidden" id="panel-talleres">

<div className="border border-[#e0d9ff] rounded-xl overflow-hidden mb-4 shadow-sm bg-white">
<button className="w-full flex items-center gap-4 p-5 bg-[#faf8ff] text-left hover:bg-[#f3f0ff] transition-colors" onclick="toggleAcc('acc1')">
<div className="w-10 h-10 bg-gradient-to-br from-[#3d2b8e] to-[#7c5cfc] rounded-lg flex items-center justify-center font-normal text-sm text-white shrink-0" style={{fontFamily: '\'DM Mono\', monospace'}}>
                            01
                        </div>
<div className="flex-1">
<div className="text-base font-semibold text-[#3d2b8e] mb-1">Fibras Nerviosas y Terminaciones Receptoras</div>
<div className="text-xs text-[#8878c4] leading-relaxed font-light">Identifica las estructuras y función básica de las fibras nerviosas y terminaciones receptoras y efectoras mediante análisis de caso clínico</div>
</div>
<iconify-icon className="text-xl text-[#8878c4] transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="acc1-arrow" strokeWidth="1.5"></iconify-icon>
</button>
<div className="hidden px-5 pb-5 pt-1 border-t border-[#f0ecff]" id="acc1-body">
<div className="inline-flex items-center gap-2 bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-3 py-1.5 text-xs text-[#e8650a] font-medium my-4">
<iconify-icon icon="solar:folder-with-files-linear"></iconify-icon> Compendio de Casos Clínicos de Fibras Nerviosas — NeuroCasos con IA
                        </div>
<div className="flex flex-wrap gap-2 mb-5">
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded px-2.5 py-1 text-xs text-[#5c3fbb] font-light">Introducción al módulo</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded px-2.5 py-1 text-xs text-[#5c3fbb] font-light">Neurona / Sinapsis</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded px-2.5 py-1 text-xs text-[#5c3fbb] font-light">Fibras nerviosas</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded px-2.5 py-1 text-xs text-[#e8650a] font-light flex items-center gap-1"><iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> NotebookLM</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded px-2.5 py-1 text-xs text-[#e8650a] font-light flex items-center gap-1"><iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Gemini</span>
</div>
<div className="flex flex-col gap-2">
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-lg border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>07/04/2026</div>
<div className="flex-1 flex flex-col gap-1.5">
<div className="text-sm text-[#3a2860] flex items-start gap-2 leading-relaxed font-light">
<span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider bg-[#ebe6ff] text-[#5c3fbb] shrink-0 mt-0.5">Docente</span>
                                        Bienvenida, inducción del mapa de formación, código de ética y reglamento universitario
                                    </div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-lg border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>09/04/2026</div>
<div className="flex-1 flex flex-col gap-1.5">
<div className="text-sm text-[#3a2860] flex items-start gap-2 leading-relaxed font-light">
<span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider bg-[#ffe0e0] text-[#c43a3a] shrink-0 mt-0.5">Eval</span>
                                        Evaluación diagnóstica
                                    </div>
<div className="text-sm text-[#3a2860] flex items-start gap-2 leading-relaxed font-light">
<span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider bg-[#ebe6ff] text-[#5c3fbb] shrink-0 mt-0.5">Docente</span>
                                        Conferencia: Proceso de sinapsis con uso de IA
                                    </div>
<div className="text-sm text-[#3a2860] flex items-start gap-2 leading-relaxed font-light">
<span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider bg-[#fff8e0] text-[#c4900a] shrink-0 mt-0.5">Práctica</span>
                                        Modelo 3D de sinapsis química y eléctrica
                                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="border border-[#e0d9ff] rounded-xl overflow-hidden mb-4 shadow-sm bg-white">
<button className="w-full flex items-center gap-4 p-5 bg-[#faf8ff] text-left hover:bg-[#f3f0ff] transition-colors" onclick="toggleAcc('acc2')">
<div className="w-10 h-10 bg-gradient-to-br from-[#3d2b8e] to-[#7c5cfc] rounded-lg flex items-center justify-center font-normal text-sm text-white shrink-0" style={{fontFamily: '\'DM Mono\', monospace'}}>
                            02
                        </div>
<div className="flex-1">
<div className="text-base font-semibold text-[#3d2b8e] mb-1">Nervios Craneales</div>
<div className="text-xs text-[#8878c4] leading-relaxed font-light">Relaciona las estructuras y funciones con las conexiones centrales de los nervios craneales mediante el estudio de casos clínicos</div>
</div>
<iconify-icon className="text-xl text-[#8878c4] transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="acc2-arrow" strokeWidth="1.5"></iconify-icon>
</button>
<div className="hidden px-5 pb-5 pt-1 border-t border-[#f0ecff]" id="acc2-body">
<div className="inline-flex items-center gap-2 bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-3 py-1.5 text-xs text-[#e8650a] font-medium my-4">
<iconify-icon icon="solar:folder-with-files-linear"></iconify-icon> Compendio de Casos: Nervios Craneales
                        </div>
<div className="flex flex-wrap gap-2 mb-5">
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded px-2.5 py-1 text-xs text-[#5c3fbb] font-light">I Olfatorio</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded px-2.5 py-1 text-xs text-[#5c3fbb] font-light">II Óptico</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded px-2.5 py-1 text-xs text-[#5c3fbb] font-light">V Trigémino</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded px-2.5 py-1 text-xs text-[#e8650a] font-light flex items-center gap-1"><iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Copilot</span>
</div>
<div className="flex flex-col gap-2">
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-lg border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>19/05/2026</div>
<div className="flex-1 flex flex-col gap-1.5">
<div className="text-sm text-[#3a2860] flex items-start gap-2 leading-relaxed font-light">
<span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider bg-[#ebe6ff] text-[#5c3fbb] shrink-0 mt-0.5">Docente</span>
                                        Conferencia: Generalidades y organización — Par I: Olfatorio (IA Gemini)
                                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="border border-[#e0d9ff] rounded-xl overflow-hidden shadow-sm bg-white">
<button className="w-full flex items-center gap-4 p-5 bg-[#faf8ff] text-left hover:bg-[#f3f0ff] transition-colors" onclick="toggleAcc('acc3')">
<div className="w-10 h-10 bg-gradient-to-br from-[#3d2b8e] to-[#7c5cfc] rounded-lg flex items-center justify-center font-normal text-sm text-white shrink-0" style={{fontFamily: '\'DM Mono\', monospace'}}>
                            03
                        </div>
<div className="flex-1">
<div className="text-base font-semibold text-[#3d2b8e] mb-1">Médula Espinal: Estructura y Funciones</div>
<div className="text-xs text-[#8878c4] leading-relaxed font-light">Examina la organización estructural de la médula espinal y sus funciones</div>
</div>
<iconify-icon className="text-xl text-[#8878c4] transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="acc3-arrow" strokeWidth="1.5"></iconify-icon>
</button>
<div className="hidden px-5 pb-5 pt-1 border-t border-[#f0ecff]" id="acc3-body">
<div className="inline-flex items-center gap-2 bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-3 py-1.5 text-xs text-[#e8650a] font-medium my-4">
<iconify-icon icon="solar:folder-with-files-linear"></iconify-icon> Casos: Arquitectura de la Médula Espinal
                        </div>
<div className="flex flex-wrap gap-2 mb-5">
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded px-2.5 py-1 text-xs text-[#5c3fbb] font-light">Sustancia gris</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded px-2.5 py-1 text-xs text-[#5c3fbb] font-light">Tractos ascendentes</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded px-2.5 py-1 text-xs text-[#e8650a] font-light flex items-center gap-1"><iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Orate AI</span>
</div>
<div className="flex flex-col gap-2">
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-lg border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>06/08/2026</div>
<div className="flex-1 flex flex-col gap-1.5">
<div className="text-sm text-[#3a2860] flex items-start gap-2 leading-relaxed font-light">
<span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider bg-[#ffe0e0] text-[#c43a3a] shrink-0 mt-0.5">Eval</span>
                                        Examen Final del Módulo
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-panel hidden" id="panel-evaluacion">
<div className="bg-white border border-[#e0d9ff] rounded-xl p-6 mb-5 border-t-[3px] border-t-[#5c3fbb] shadow-sm hover:shadow-md transition-shadow">
<div className="text-base font-semibold text-[#3d2b8e] mb-2 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-lg" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon> Rúbricas de Evaluación — Compendio
                    </div>
<p className="text-xs text-[#6b5aad] mb-6 font-light leading-relaxed">
                        Los <strong className="font-medium text-[#3d2b8e]">Talleres 1, 2 y 3</strong> incluyen los indicadores de Signos y síntomas, Impresión diagnóstica, Creatividad y Uso crítico de IA. El <strong className="font-medium text-[#3d2b8e]">Proyecto Final</strong> agrega Organización y Contenido con ponderación máxima.
                    </p>
<div className="text-sm text-[#e8650a] font-medium mt-6 mb-3 pb-2 border-b border-[#ffe0c0]">
                        Talleres 1, 2 y 3 — Indicadores comunes
                    </div>
<div className="overflow-x-auto mb-8 rounded-lg border border-[#e0d9ff]">
<table className="w-full border-collapse text-left text-xs whitespace-nowrap md:whitespace-normal">
<thead>
<tr className="bg-[#f3f0ff] text-[#5c3fbb] uppercase tracking-wider font-semibold">
<th className="p-3 border-b border-r border-[#e0d9ff] min-w-[140px]">Indicador</th>
<th className="p-3 border-b border-r border-[#e0d9ff] text-center">Deficiente</th>
<th className="p-3 border-b border-r border-[#e0d9ff] text-center">Regular</th>
<th className="p-3 border-b border-r border-[#e0d9ff] text-center">Bueno</th>
<th className="p-3 border-b border-r border-[#e0d9ff] text-center">Muy Bueno</th>
<th className="p-3 border-b border-[#e0d9ff] text-center">Excelente</th>
</tr>
</thead>
<tr className="hover:bg-[#f8f6ff] transition-colors border-b border-[#f0ecff]">
<td className="p-3 border-r border-[#f0ecff] text-[#1a0a2e] font-medium bg-[#faf8ff]">Signos y síntomas<span className="block mt-1 text-[10px] font-normal text-[#8878c4]" style={{fontFamily: '\'DM Mono\', monospace'}}>(4 pts)</span></td>
<td className="p-3 border-r border-[#f0ecff] text-[#3a2860] font-light">Poca precisión<span className="block mt-1 text-[10px] font-normal text-[#8878c4]" style={{fontFamily: '\'DM Mono\', monospace'}}>0.50</span></td>
<td className="p-3 border-r border-[#f0ecff] text-[#3a2860] font-light">Algunos, poco rev.<span className="block mt-1 text-[10px] font-normal text-[#8878c4]" style={{fontFamily: '\'DM Mono\', monospace'}}>0.70</span></td>
<td className="p-3 border-r border-[#f0ecff] text-[#3a2860] font-light">Categorizo parcial<span className="block mt-1 text-[10px] font-normal text-[#8878c4]" style={{fontFamily: '\'DM Mono\', monospace'}}>1.50</span></td>
<td className="p-3 border-r border-[#f0ecff] text-[#3a2860] font-light">Analizo por partes<span className="block mt-1 text-[10px] font-normal text-[#8878c4]" style={{fontFamily: '\'DM Mono\', monospace'}}>3.00</span></td>
<td className="p-3 text-[#e8650a] font-medium">Categorizo todo<span className="block mt-1 text-[10px] font-normal text-[#8878c4]" style={{fontFamily: '\'DM Mono\', monospace'}}>4.00</span></td>
</tr>
<tr className="hover:bg-[#f8f6ff] transition-colors">
<td className="p-3 border-r border-[#f0ecff] text-[#1a0a2e] font-medium bg-[#faf8ff]">Creatividad<span className="block mt-1 text-[10px] font-normal text-[#8878c4]" style={{fontFamily: '\'DM Mono\', monospace'}}>(1 pt)</span></td>
<td className="p-3 border-r border-[#f0ecff] text-[#3a2860] font-light">Sin citas<span className="block mt-1 text-[10px] font-normal text-[#8878c4]" style={{fontFamily: '\'DM Mono\', monospace'}}>0.10</span></td>
<td className="p-3 border-r border-[#f0ecff] text-[#3a2860] font-light">Simple<span className="block mt-1 text-[10px] font-normal text-[#8878c4]" style={{fontFamily: '\'DM Mono\', monospace'}}>0.25</span></td>
<td className="p-3 border-r border-[#f0ecff] text-[#3a2860] font-light">Ideas típicas<span className="block mt-1 text-[10px] font-normal text-[#8878c4]" style={{fontFamily: '\'DM Mono\', monospace'}}>0.50</span></td>
<td className="p-3 border-r border-[#f0ecff] text-[#3a2860] font-light">Novedoso<span className="block mt-1 text-[10px] font-normal text-[#8878c4]" style={{fontFamily: '\'DM Mono\', monospace'}}>0.75</span></td>
<td className="p-3 text-[#e8650a] font-medium">Extraordinario<span className="block mt-1 text-[10px] font-normal text-[#8878c4]" style={{fontFamily: '\'DM Mono\', monospace'}}>1.00</span></td>
</tr>
</table>
</div>
</div>
</div>

<div className="tab-panel hidden" id="panel-bibliografia">
<div className="bg-white border border-[#e0d9ff] rounded-xl p-6 mb-5 border-t-[3px] border-t-[#5c3fbb] shadow-sm hover:shadow-md transition-shadow">
<div className="text-base font-semibold text-[#3d2b8e] mb-5 flex items-center gap-2 pb-3 border-b border-[#f3f0ff]">
<iconify-icon className="text-lg" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon> Fuentes Bibliográficas
                    </div>
<div className="bg-[#faf8ff] rounded-xl p-4 mb-3 flex gap-3.5 items-start border-l-[3px] border-transparent hover:border-[#5c3fbb] transition-colors">
<span className="text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider bg-[#ebe6ff] text-[#5c3fbb] mt-0.5 shrink-0">Básica</span>
<div className="flex-1">
<div className="text-sm font-medium text-[#1a0a2e] mb-1">Módulo Didáctico: Neuroanatomía</div>
<div className="text-xs text-[#8878c4] mb-2 font-light">Castaño Ramírez, S. M.</div>
<div className="flex gap-3 text-[10px] text-[#8878c4] flex-wrap mb-1">
<span>Institución Universitaria de Envigado</span><span>2023</span>
</div>
<a className="text-xs text-[#5c3fbb] font-medium flex items-center gap-1.5 hover:underline mt-2" href="#">
<iconify-icon icon="solar:link-linear"></iconify-icon> Acceder al recurso
                            </a>
</div>
</div>
<div className="bg-[#faf8ff] rounded-xl p-4 mb-3 flex gap-3.5 items-start border-l-[3px] border-transparent hover:border-[#5c3fbb] transition-colors">
<span className="text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider bg-[#ebe6ff] text-[#5c3fbb] mt-0.5 shrink-0">Básica</span>
<div className="flex-1">
<div className="text-sm font-medium text-[#1a0a2e] mb-1">Psicofisiología</div>
<div className="text-xs text-[#8878c4] mb-2 font-light">Labre, Verónica · Pérez, Doris</div>
<div className="flex gap-3 text-[10px] text-[#8878c4] flex-wrap mb-1">
<span>Ediciones Indoamérica Digital</span><span>2023</span>
</div>
<a className="text-xs text-[#5c3fbb] font-medium flex items-center gap-1.5 hover:underline mt-2" href="#">
<iconify-icon icon="solar:link-linear"></iconify-icon> Acceder al recurso
                            </a>
</div>
</div>
<div className="bg-[#faf8ff] rounded-xl p-4 flex gap-3.5 items-start border-l-[3px] border-transparent hover:border-[#e8650a] transition-colors">
<span className="text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider bg-[#fff0e0] text-[#e8650a] mt-0.5 shrink-0">Compl</span>
<div className="flex-1">
<div className="text-sm font-medium text-[#1a0a2e] mb-1">Biopsicología</div>
<div className="text-xs text-[#8878c4] mb-2 font-light">Pinel, John</div>
<div className="flex gap-3 text-[10px] text-[#8878c4] flex-wrap">
<span>Pearson</span><span>2012</span><span>Físico · Cód. 8912</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="text-center py-8 text-xs text-[#8878c4] border-t border-[#f0ecff] mt-8 font-light">
<div className="text-[#8878c4]/40 font-bold tracking-tighter text-3xl mb-3 flex justify-center">UTI</div>
            Universidad Tecnológica Indoamérica · Facultad de Ciencias Sociales y Humanas · Período A26<br/>
            Docente: Stefania del Rocío Llerena Freire · Coordinadora: Gabriela Lorena Abril Lucero
        </div>
</div>


    </>
  );
}
