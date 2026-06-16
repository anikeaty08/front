import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-5xl mx-auto px-4 pb-10 pt-8">

<div className="bg-gradient-to-br from-[#3d2b8e] via-[#5c3fbb] to-[#7c5cfc] rounded-2xl p-8 mb-6 text-white flex gap-6 items-center flex-wrap shadow-sm">
<div className="w-[70px] h-[70px] rounded-lg bg-white text-[#5c3fbb] flex items-center justify-center text-2xl font-bold tracking-tighter shrink-0 shadow-inner">
                UTI
            </div>
<div className="flex-1 min-w-[200px]">
<div className="text-xs tracking-widest uppercase opacity-80 mb-1.5">Universidad Tecnológica Indoamérica · Psicología Clínica</div>
<div className="bg-[#e8650a] rounded-full px-3.5 py-1 text-xs font-medium inline-block mb-2" style={{fontFamily: '\'DM Mono\', monospace'}}>A26</div>
<div className="text-3xl font-semibold tracking-tight leading-tight mb-1.5">Neuroanatomía y<br/>Neurofisiología I</div>
<div className="text-sm opacity-85">A26-PSCL-1-51418-1643  ·  1° Nivel · Presencial</div>
<div className="flex gap-3 mt-3 flex-wrap">
<span className="bg-white/15 border border-white/30 rounded-full px-3.5 py-1 text-xs font-normal flex items-center gap-1.5" style={{fontFamily: '\'DM Mono\', monospace'}}>
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon> Inicio: 06 Abr 2026
                    </span>
<span className="bg-white/15 border border-white/30 rounded-full px-3.5 py-1 text-xs font-normal flex items-center gap-1.5" style={{fontFamily: '\'DM Mono\', monospace'}}>
<iconify-icon icon="solar:flag-linear" strokeWidth="1.5"></iconify-icon> Fin: 27 Sep 2026
                    </span>
</div>
</div>
</div>

<div className="flex gap-2 mb-5 flex-wrap">
<button className="syl-tab bg-[#5c3fbb] border-2 border-[#5c3fbb] rounded-lg px-4 py-2 text-sm font-normal text-white cursor-pointer transition-all duration-200 flex items-center gap-2" onclick="sylTab(this,'syl-general')">
<iconify-icon className="text-lg" icon="solar:brain-linear" strokeWidth="1.5"></iconify-icon> General
            </button>
<button className="syl-tab bg-[#f3f0ff] border-2 border-[#e0d9ff] rounded-lg px-4 py-2 text-sm font-normal text-[#5c3fbb] cursor-pointer transition-all duration-200 hover:bg-[#e8e0ff] hover:border-[#5c3fbb] flex items-center gap-2" onclick="sylTab(this,'syl-talleres')">
<iconify-icon className="text-lg" icon="solar:book-2-linear" strokeWidth="1.5"></iconify-icon> Talleres
            </button>
<button className="syl-tab bg-[#f3f0ff] border-2 border-[#e0d9ff] rounded-lg px-4 py-2 text-sm font-normal text-[#5c3fbb] cursor-pointer transition-all duration-200 hover:bg-[#e8e0ff] hover:border-[#5c3fbb] flex items-center gap-2" onclick="sylTab(this,'syl-evaluacion')">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon> Evaluación
            </button>
<button className="syl-tab bg-[#f3f0ff] border-2 border-[#e0d9ff] rounded-lg px-4 py-2 text-sm font-normal text-[#5c3fbb] cursor-pointer transition-all duration-200 hover:bg-[#e8e0ff] hover:border-[#5c3fbb] flex items-center gap-2" onclick="sylTab(this,'syl-bibliografia')">
<iconify-icon className="text-lg" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon> Bibliografía
            </button>
</div>

<div className="syl-panel block" id="syl-general">
<div className="bg-white border border-[#e0d9ff] rounded-2xl p-6 mb-5 border-t-[3px] border-t-[#5c3fbb] shadow-[0_2px_8px_rgba(92,63,187,0.06)]">
<div className="text-base font-semibold text-[#3d2b8e] mb-4 flex items-center gap-2 pb-3 border-b border-[#f0ecff]">
<iconify-icon className="text-xl" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon> Perfil del Docente
                </div>
<div className="flex gap-5 items-center flex-wrap">
<div className="w-[70px] h-[70px] bg-gradient-to-br from-[#3d2b8e] to-[#7c5cfc] rounded-full flex items-center justify-center text-2xl tracking-tight text-white font-semibold shrink-0">SL</div>
<div>
<div className="text-lg font-semibold tracking-tight text-[#1a1040] mb-1">Stefania del Rocío Llerena Freire</div>
<div className="text-xs text-[#6b5aad] leading-relaxed">Psicóloga Clínica · Magíster en Psicología Clínica mención Psicoterapia<br/>Experiencia docente: 3 años</div>
<div className="flex gap-2.5 mt-2.5 flex-wrap">
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
<div className="bg-white border border-[#e0d9ff] rounded-2xl p-6 mb-5 border-t-[3px] border-t-[#5c3fbb] shadow-[0_2px_8px_rgba(92,63,187,0.06)]">
<div className="text-base font-semibold text-[#3d2b8e] mb-4 flex items-center gap-2 pb-3 border-b border-[#f0ecff]">
<iconify-icon className="text-xl" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon> Datos del Proyecto Formativo
                </div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-5">
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3.5 text-center">
<div className="text-xs uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Créditos</div>
<div className="text-xl text-[#e8650a] font-normal tracking-tight" style={{fontFamily: '\'DM Mono\', monospace'}}>2.75</div>
<div className="text-xs text-[#8878c4] mt-1">créditos</div>
</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3.5 text-center">
<div className="text-xs uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Total Horas</div>
<div className="text-xl text-[#e8650a] font-normal tracking-tight" style={{fontFamily: '\'DM Mono\', monospace'}}>132</div>
<div className="text-xs text-[#8878c4] mt-1">horas totales</div>
</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3.5 text-center">
<div className="text-xs uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Nivel</div>
<div className="text-xl text-[#e8650a] font-normal tracking-tight" style={{fontFamily: '\'DM Mono\', monospace'}}>1°</div>
<div className="text-xs text-[#8878c4] mt-1">primer nivel</div>
</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3.5 text-center">
<div className="text-xs uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Docente</div>
<div className="text-xl text-[#e8650a] font-normal tracking-tight" style={{fontFamily: '\'DM Mono\', monospace'}}>72h</div>
<div className="text-xs text-[#8878c4] mt-1">clases asistidas</div>
</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3.5 text-center">
<div className="text-xs uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Autónomo</div>
<div className="text-xl text-[#e8650a] font-normal tracking-tight" style={{fontFamily: '\'DM Mono\', monospace'}}>20h</div>
<div className="text-xs text-[#8878c4] mt-1">aprendizaje</div>
</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-xl p-3.5 text-center">
<div className="text-xs uppercase tracking-widest text-[#8878c4] mb-1.5 font-medium">Prácticas</div>
<div className="text-xl text-[#e8650a] font-normal tracking-tight" style={{fontFamily: '\'DM Mono\', monospace'}}>40h</div>
<div className="text-xs text-[#8878c4] mt-1">laboratorio</div>
</div>
</div>
<div className="mb-3">
<div className="flex justify-between text-xs text-[#6b5aad] mb-1.5 font-normal"><span>Clases con docente</span><span>72h</span></div>
<div className="h-2 bg-[#f0ecff] rounded-full overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-[#3d2b8e] to-[#7c5cfc]" style={{width: '54.5%'}}></div>
</div>
</div>
<div className="mb-3">
<div className="flex justify-between text-xs text-[#6b5aad] mb-1.5 font-normal"><span>Aprendizaje autónomo</span><span>20h</span></div>
<div className="h-2 bg-[#f0ecff] rounded-full overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-[#5c3fbb] to-[#e8650a]" style={{width: '15.1%'}}></div>
</div>
</div>
<div className="mb-3">
<div className="flex justify-between text-xs text-[#6b5aad] mb-1.5 font-normal"><span>Prácticas de aplicación</span><span>40h</span></div>
<div className="h-2 bg-[#f0ecff] rounded-full overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-[#e8650a] to-[#f5a623]" style={{width: '30.3%'}}></div>
</div>
</div>
</div>
<div className="bg-white border border-[#e0d9ff] rounded-2xl p-6 mb-5 border-t-[3px] border-t-[#5c3fbb] shadow-[0_2px_8px_rgba(92,63,187,0.06)]">
<div className="text-base font-semibold text-[#3d2b8e] mb-4 flex items-center gap-2 pb-3 border-b border-[#f0ecff]">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon> Horario
                </div>
<div className="text-xs uppercase tracking-widest text-[#8878c4] font-medium mt-4 mb-2.5 pb-1.5 border-b border-[#f0ecff]">Clases asistidas por el docente</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-2.5">
<div className="bg-[#f3f0ff] border-l-[3px] border-[#5c3fbb] rounded-xl px-4 py-3.5">
<div className="text-xs uppercase tracking-wider mb-1 font-medium text-[#5c3fbb]">Lunes</div>
<div className="text-base text-[#1a1040] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>08:30 – 09:30</div>
<div className="text-xs mt-1 opacity-70 text-[#5c3fbb]">Clase con docente</div>
</div>
<div className="bg-[#f3f0ff] border-l-[3px] border-[#5c3fbb] rounded-xl px-4 py-3.5">
<div className="text-xs uppercase tracking-wider mb-1 font-medium text-[#5c3fbb]">Lunes</div>
<div className="text-base text-[#1a1040] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>09:30 – 10:30</div>
<div className="text-xs mt-1 opacity-70 text-[#5c3fbb]">Clase con docente</div>
</div>
<div className="bg-[#f3f0ff] border-l-[3px] border-[#5c3fbb] rounded-xl px-4 py-3.5">
<div className="text-xs uppercase tracking-wider mb-1 font-medium text-[#5c3fbb]">Lunes</div>
<div className="text-base text-[#1a1040] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>10:30 – 11:30</div>
<div className="text-xs mt-1 opacity-70 text-[#5c3fbb]">Clase con docente</div>
</div>
<div className="bg-[#f3f0ff] border-l-[3px] border-[#5c3fbb] rounded-xl px-4 py-3.5">
<div className="text-xs uppercase tracking-wider mb-1 font-medium text-[#5c3fbb]">Lunes</div>
<div className="text-base text-[#1a1040] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>11:30 – 12:30</div>
<div className="text-xs mt-1 opacity-70 text-[#5c3fbb]">Clase con docente</div>
</div>
<div className="bg-[#f3f0ff] border-l-[3px] border-[#5c3fbb] rounded-xl px-4 py-3.5">
<div className="text-xs uppercase tracking-wider mb-1 font-medium text-[#5c3fbb]">Miércoles</div>
<div className="text-base text-[#1a1040] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>08:30 – 09:30</div>
<div className="text-xs mt-1 opacity-70 text-[#5c3fbb]">Clase con docente</div>
</div>
<div className="bg-[#f3f0ff] border-l-[3px] border-[#5c3fbb] rounded-xl px-4 py-3.5">
<div className="text-xs uppercase tracking-wider mb-1 font-medium text-[#5c3fbb]">Miércoles</div>
<div className="text-base text-[#1a1040] font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>09:30 – 10:30</div>
<div className="text-xs mt-1 opacity-70 text-[#5c3fbb]">Clase con docente</div>
</div>
</div>
<div className="text-xs uppercase tracking-widest text-[#8878c4] font-medium mt-4 mb-2.5 pb-1.5 border-b border-[#f0ecff]">Prácticas de aplicación y experimentación</div>
<p className="text-xs text-[#8878c4] italic leading-relaxed">Las prácticas se desarrollan integradas en el laboratorio de morfofisiología según cronograma de cada taller.</p>
</div>
<div className="bg-white border border-[#e0d9ff] rounded-2xl p-6 mb-5 border-t-[3px] border-t-[#5c3fbb] shadow-[0_2px_8px_rgba(92,63,187,0.06)]">
<div className="text-base font-semibold text-[#3d2b8e] mb-4 flex items-center gap-2 pb-3 border-b border-[#f0ecff]">
<iconify-icon className="text-xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon> Competencias
                </div>
<div className="bg-[#f3f0ff] border border-[#d4caff] border-l-[3px] border-l-[#5c3fbb] rounded-xl px-5 py-4 mb-3 text-sm leading-relaxed">
<div className="text-xs uppercase tracking-widest font-semibold mb-2 text-[#5c3fbb]">Competencia específica del proyecto formativo</div>
                    Analiza la organización y funcionamiento del Sistema Nervioso Central para fortalecer el desarrollo de la evaluación, diagnóstico e intervención en la salud mental, considerando las bases biológicas de la conducta humana con ética.
                </div>
<div className="bg-[#fff5ee] border border-[#ffd5b5] border-l-[3px] border-l-[#e8650a] rounded-xl px-5 py-4 mb-3 text-sm leading-relaxed">
<div className="text-xs uppercase tracking-widest font-semibold mb-2 text-[#e8650a]">Competencia del perfil de egreso</div>
                    Integra los fundamentos epistemológicos de las diferentes vertientes teóricas de la psicología con los conocimientos prácticos, para el análisis, identificación e intervención en los diferentes campos de aplicación de la Psicología Clínica, promoviendo competencias profesionales y posibilitando el trabajo trans, multi e interdisciplinario.
                </div>
<div className="bg-[#fffbf0] border border-[#ffe5a0] border-l-[3px] border-l-[#f5a623] rounded-xl px-5 py-4 mb-3 text-sm leading-relaxed">
<div className="text-xs uppercase tracking-widest font-semibold mb-2 text-[#d4900a]">Competencia genérica</div>
                    Aplica el pensamiento complejo en la resolución de problemas y proyectos para mejorar las condiciones de vida, considerando los retos del entorno y sus procesos de incertidumbre.
                </div>
</div>
<div className="bg-white border border-[#e0d9ff] rounded-2xl p-6 mb-5 border-t-[3px] border-t-[#5c3fbb] shadow-[0_2px_8px_rgba(92,63,187,0.06)]">
<div className="text-base font-semibold text-[#3d2b8e] mb-4 flex items-center gap-2 pb-3 border-b border-[#f0ecff]">
<iconify-icon className="text-xl" icon="solar:link-circle-linear" strokeWidth="1.5"></iconify-icon> Correquisitos
                </div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-2.5">
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon icon="solar:monitor-linear"></iconify-icon> Cultura y Práctica Digital</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon icon="solar:chat-line-linear"></iconify-icon> Comunicación Asertiva</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon icon="solar:calculator-linear"></iconify-icon> Matemáticas</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon icon="solar:brain-linear"></iconify-icon> Epistemología de la Psicología</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon icon="solar:book-bookmark-linear"></iconify-icon> Psicología General</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon icon="solar:user-speak-linear"></iconify-icon> Psicolingüística</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon icon="solar:settings-linear"></iconify-icon> Procesos Psicológicos I</div>
<div className="bg-[#f8f6ff] border border-[#e0d9ff] rounded-lg px-3 py-2 text-xs text-[#3d2b8e] flex items-center gap-2"><iconify-icon icon="solar:pin-linear"></iconify-icon> Electiva 1</div>
</div>
</div>
<div className="bg-white border border-[#e0d9ff] rounded-2xl p-6 mb-5 border-t-[3px] border-t-[#e8650a] shadow-[0_2px_8px_rgba(92,63,187,0.06)]">
<div className="text-base font-semibold text-[#3d2b8e] mb-4 flex items-center gap-2 pb-3 border-b border-[#f0ecff]">
<iconify-icon className="text-xl" icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon> Metodología y Proyecto Final
                </div>
<p className="text-sm text-[#4a3f7a] leading-relaxed mb-3.5">
                    Metodología <strong className="font-semibold text-[#1a1040]">basada en problemas</strong> mediante estudio de caso, aprendizaje cooperativo, pensamiento crítico y gamificación. <strong className="font-semibold text-[#e8650a]">Integración activa de herramientas de IA</strong>: NotebookLM, Gemini, Claude, Copilot, Gamma y Canva IA.
                </p>
<div className="inline-flex items-center gap-2 bg-[#fff5ee] border border-[#ffd5b5] rounded-lg px-3.5 py-2 text-xs text-[#e8650a] my-3 font-medium">
<iconify-icon icon="solar:map-linear" strokeWidth="1.5"></iconify-icon> Proyecto Final: Atlas Visual de Fundamentos Neuroanatómicos de Casos Prácticos
                </div>
<p className="text-xs text-[#6b5aad] leading-relaxed mt-2.5">
<strong className="font-semibold text-[#1a1040]">Problema central:</strong> Según la PAHO y la OMS (2021), en Ecuador 30 de cada 100 personas sufren algún problema de salud mental. ¿Cómo puede el psicólogo atender de manera integral los diferentes trastornos mentales que aquejan a la población?
                </p>
</div>
</div>

<div className="syl-panel hidden" id="syl-talleres">

<div className="border border-[#e0d9ff] rounded-2xl overflow-hidden mb-4" id="st1">
<button className="flex items-center gap-3.5 p-4 sm:p-5 w-full text-left bg-[#faf8ff] hover:bg-[#f3f0ff] transition-colors cursor-pointer border-none" onclick="sylTaller('st1')">
<div className="w-10 h-10 bg-gradient-to-br from-[#3d2b8e] to-[#7c5cfc] rounded-xl flex items-center justify-center text-sm font-normal text-white shrink-0" style={{fontFamily: '\'DM Mono\', monospace'}}>01</div>
<div className="flex-1">
<div className="text-base font-semibold text-[#3d2b8e] mb-1">Introducción al Sistema Nervioso</div>
<div className="text-xs text-[#8878c4] leading-relaxed">Describe las generalidades del SN como sustratos neuroanatómicos y neurofisiológicos del comportamiento humano</div>
</div>
<iconify-icon className="syl-taller-arrow text-[#8878c4] text-lg transition-transform duration-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="syl-taller-body hidden px-5 pb-5 border-t border-[#f0ecff] pt-4">
<div className="inline-flex items-center gap-2 bg-[#fff5ee] border border-[#ffd5b5] rounded-lg px-3.5 py-2 text-xs text-[#e8650a] mb-3 font-medium">
<iconify-icon icon="solar:map-linear" strokeWidth="1.5"></iconify-icon> Atlas Visual: Fundamentos del Desarrollo e Histología del SN mediante Casos Clínicos
                    </div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Introducción al SN</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Histología</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Neurotransmisores</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-2.5 py-1 text-xs text-[#e8650a] flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> NotebookLM</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-2.5 py-1 text-xs text-[#e8650a] flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Gemini</span>
</div>
<div className="flex flex-col gap-2">
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>06/04/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Inducción al proyecto formativo</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ffe0e0] text-[#c43a3a]">Evaluación</span> Evaluación diagnóstica</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff8e0] text-[#c4900a]">Práctica</span> Identificación y uso de recursos del laboratorio de morfofisiología</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>08/04/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Conferencia: Antecedentes históricos de las Neurociencias con uso de IA</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>13/04/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Conferencia: Planos neuroanatómicos y métodos de estudio del SN</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>15/04/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Conferencia: La neurona y sus partes con uso de IA NotebookLM</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>20/04/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Conferencia: Células de neuroglia con uso de IA Gemini</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff8e0] text-[#c4900a]">Práctica</span> Maqueta de las partes de la neurona</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>22/04/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Exposición estudiantil: Neurotransmisores — Clasificación y función</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff0e0] text-[#e8650a]">Autónoma</span> Guía de estudio multimodal con NotebookLM sobre fundamentos del SN</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>27/04/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Mesa redonda: Temas del Taller 1</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff8e0] text-[#c4900a]">Práctica</span> Atlas Visual del SN — Neuroimagen creativa con IA</div>
</div>
</div>
</div>
</div>
</div>

<div className="border border-[#e0d9ff] rounded-2xl overflow-hidden mb-4" id="st2">
<button className="flex items-center gap-3.5 p-4 sm:p-5 w-full text-left bg-[#faf8ff] hover:bg-[#f3f0ff] transition-colors cursor-pointer border-none" onclick="sylTaller('st2')">
<div className="w-10 h-10 bg-gradient-to-br from-[#3d2b8e] to-[#7c5cfc] rounded-xl flex items-center justify-center text-sm font-normal text-white shrink-0" style={{fontFamily: '\'DM Mono\', monospace'}}>02</div>
<div className="flex-1">
<div className="text-base font-semibold text-[#3d2b8e] mb-1">Irrigación y Meninges</div>
<div className="text-xs text-[#8878c4] leading-relaxed">Describe la irrigación del SN y su influencia en el funcionamiento del sistema nervioso</div>
</div>
<iconify-icon className="syl-taller-arrow text-[#8878c4] text-lg transition-transform duration-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="syl-taller-body hidden px-5 pb-5 border-t border-[#f0ecff] pt-4">
<div className="inline-flex items-center gap-2 bg-[#fff5ee] border border-[#ffd5b5] rounded-lg px-3.5 py-2 text-xs text-[#e8650a] mb-3 font-medium">
<iconify-icon icon="solar:map-linear" strokeWidth="1.5"></iconify-icon> Atlas Visual: Sistema Irrigatorio del Encéfalo mediante Casos Prácticos
                    </div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Desarrollo del SN</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Meninges</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Vascularización</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-2.5 py-1 text-xs text-[#e8650a] flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Gemini</span>
</div>
<div className="flex flex-col gap-2">
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>29/04/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Conferencia: Desarrollo y evolución del SN con uso de IA Gemini</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>04/05/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Taller: Organización estructural del SN — Meninges</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff8e0] text-[#c4900a]">Práctica</span> Láminas ilustrativas del desarrollo del SN</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>06/05/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Conferencia: Irrigación del SN</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff0e0] text-[#e8650a]">Autónoma</span> Escape room neuroanatómico con IA: del desarrollo a la vascularización</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>11/05/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Taller de análisis de casos — Taller 2</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ffe0e0] text-[#c43a3a]">Evaluación</span> Evaluación Talleres 1 y 2</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff8e0] text-[#c4900a]">Práctica</span> Atlas Visual: Sistema Irrigatorio del Encéfalo</div>
</div>
</div>
</div>
</div>
</div>

<div className="border border-[#e0d9ff] rounded-2xl overflow-hidden mb-4" id="st3">
<button className="flex items-center gap-3.5 p-4 sm:p-5 w-full text-left bg-[#faf8ff] hover:bg-[#f3f0ff] transition-colors cursor-pointer border-none" onclick="sylTaller('st3')">
<div className="w-10 h-10 bg-gradient-to-br from-[#3d2b8e] to-[#7c5cfc] rounded-xl flex items-center justify-center text-sm font-normal text-white shrink-0" style={{fontFamily: '\'DM Mono\', monospace'}}>03</div>
<div className="flex-1">
<div className="text-base font-semibold text-[#3d2b8e] mb-1">Encéfalo</div>
<div className="text-xs text-[#8878c4] leading-relaxed">Comprende las estructuras y funcionamiento del encéfalo y su influencia en el comportamiento humano</div>
</div>
<iconify-icon className="syl-taller-arrow text-[#8878c4] text-lg transition-transform duration-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="syl-taller-body hidden px-5 pb-5 border-t border-[#f0ecff] pt-4">
<div className="inline-flex items-center gap-2 bg-[#fff5ee] border border-[#ffd5b5] rounded-lg px-3.5 py-2 text-xs text-[#e8650a] mb-3 font-medium">
<iconify-icon icon="solar:map-linear" strokeWidth="1.5"></iconify-icon> Atlas Visual: Fundamentos Neuroanatómicos del Encéfalo — NeuroMap IA
                    </div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Corteza cerebral</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Prosencéfalo</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Diencéfalo</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Mesencéfalo</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Romboencéfalo</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">SNA</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-2.5 py-1 text-xs text-[#e8650a] flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Claude</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-2.5 py-1 text-xs text-[#e8650a] flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Copilot</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-2.5 py-1 text-xs text-[#e8650a] flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Gamma</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-2.5 py-1 text-xs text-[#e8650a] flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> NotebookLM</span>
</div>
<div className="flex flex-col gap-2">
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>13/05/2026</div>
<div className="flex-1"><div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Conferencia: Generalidades de la corteza cerebral</div></div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>18/05/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Exposición: Áreas de Brodmann 1-23 con IA Claude</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff8e0] text-[#c4900a]">Práctica</span> Exploración guiada del encéfalo en 3D</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>20/05/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Exposición: Áreas de Brodmann 24-48</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Casos clínicos de Áreas de Brodmann</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>27/05/2026</div>
<div className="flex-1"><div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Conferencia: Cerebro — Hemisferios y lóbulos cerebrales con IA Copilot</div></div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>01/06/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Conferencia: Giros y surcos del cerebro</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff8e0] text-[#c4900a]">Práctica</span> Estudio de casos clínicos de afectación del cerebro</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>03/06/2026</div>
<div className="flex-1"><div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ffe0e0] text-[#c43a3a]">Evaluación</span> <iconify-icon className="text-base" icon="solar:danger-triangle-linear"></iconify-icon> Examen Parcial</div></div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>08/06/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Clase magistral: Ventrículos cerebrales con IA Gamma</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff8e0] text-[#c4900a]">Práctica</span> Exploración guiada ventrículos cerebrales en 3D</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>10/06/2026</div>
<div className="flex-1"><div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Exposición: Ganglios basales con IA NotebookLM</div></div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>15/06/2026</div>
<div className="flex-1"><div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Conferencia: Tálamo — Núcleos</div></div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>17/06/2026</div>
<div className="flex-1"><div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Conferencia: Hipotálamo con uso de IA</div></div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>22/06/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Exposición: Epitálamo y subtálamo</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff0e0] text-[#e8650a]">Autónoma</span> Cartografía cerebral con NotebookLM: Corteza, Prosencéfalo y Diencéfalo</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff8e0] text-[#c4900a]">Práctica</span> Casos clínicos del diencéfalo</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>24/06/2026</div>
<div className="flex-1"><div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Clase magistral: Mesencéfalo — Tectum y Tegmento</div></div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>29/06/2026</div>
<div className="flex-1"><div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Exposición: Sistema límbico con IA Claude</div></div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>01/07/2026</div>
<div className="flex-1"><div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Conferencia: Formación reticular</div></div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>06/07/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Clase magistral: Puente de Varolio con IA Gamma</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff8e0] text-[#c4900a]">Práctica</span> Mapa inicial del Romboencéfalo</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>08/07/2026</div>
<div className="flex-1"><div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Exposición: Cerebelo con IA Gamma — Retroalimentación</div></div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>13/07/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Exposición: Bulbo raquídeo — Retroalimentación</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff0e0] text-[#e8650a]">Autónoma</span> Explorando el tronco encefálico y SNA con NotebookLM</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>15/07/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Clase magistral: Sistema Nervioso Autónomo</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff8e0] text-[#c4900a]">Práctica</span> Disección del cerebro vacuno</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>20/07/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Cierre del taller — Estudio de casos</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff8e0] text-[#c4900a]">Práctica</span> Atlas Visual Neuroanatómico del Encéfalo — NeuroMap IA</div>
</div>
</div>
</div>
</div>
</div>

<div className="border border-[#e0d9ff] rounded-2xl overflow-hidden mb-4" id="st4">
<button className="flex items-center gap-3.5 p-4 sm:p-5 w-full text-left bg-[#faf8ff] hover:bg-[#f3f0ff] transition-colors cursor-pointer border-none" onclick="sylTaller('st4')">
<div className="w-10 h-10 bg-gradient-to-br from-[#3d2b8e] to-[#7c5cfc] rounded-xl flex items-center justify-center text-sm font-normal text-white shrink-0" style={{fontFamily: '\'DM Mono\', monospace'}}>04</div>
<div className="flex-1">
<div className="text-base font-semibold text-[#3d2b8e] mb-1">Órganos de los Sentidos</div>
<div className="text-xs text-[#8878c4] leading-relaxed">Relaciona estructuras y funciones de los órganos de los sentidos según los fundamentos de las neurociencias</div>
</div>
<iconify-icon className="syl-taller-arrow text-[#8878c4] text-lg transition-transform duration-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="syl-taller-body hidden px-5 pb-5 border-t border-[#f0ecff] pt-4">
<div className="inline-flex items-center gap-2 bg-[#fff5ee] border border-[#ffd5b5] rounded-lg px-3.5 py-2 text-xs text-[#e8650a] mb-3 font-medium">
<iconify-icon icon="solar:map-linear" strokeWidth="1.5"></iconify-icon> Atlas Visual: Fundamentos Neuroanatómicos de los Órganos de los Sentidos
                    </div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Visión</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Audición</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Olfato</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Gusto</span>
<span className="bg-[#f3f0ff] border border-[#d4caff] rounded-md px-2.5 py-1 text-xs text-[#5c3fbb]">Tacto</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-2.5 py-1 text-xs text-[#e8650a] flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Gamma</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-2.5 py-1 text-xs text-[#e8650a] flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Canva IA</span>
<span className="bg-[#fff5ee] border border-[#ffd5b5] rounded-md px-2.5 py-1 text-xs text-[#e8650a] flex items-center gap-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon> NotebookLM</span>
</div>
<div className="flex flex-col gap-2">
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>22/07/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Conferencia: Generalidades de los sentidos con IA Gamma</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Exposición: Sentido de la vista — Estructura y función</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>27/07/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Exposición: Sentido de la audición — Retroalimentación</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>29/07/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Exposición: Sentido del olfato y gusto con Canva IA — Retroalimentación</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff0e0] text-[#e8650a]">Autónoma</span> Los sentidos bajo la lupa de la IA: exploración neuroanatómica con NotebookLM</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>03/08/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ebe6ff] text-[#5c3fbb]">Docente</span> Exposición: Sentido del tacto</div>
</div>
</div>
<div className="flex gap-3 p-3 bg-[#faf8ff] rounded-xl border-l-[3px] border-transparent hover:border-[#5c3fbb] hover:bg-[#f3f0ff] transition-all">
<div className="text-xs text-[#e8650a] min-w-[80px] pt-0.5 font-normal" style={{fontFamily: '\'DM Mono\', monospace'}}>05/08/2026</div>
<div className="flex-1">
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#ffe0e0] text-[#c43a3a]">Evaluación</span> <iconify-icon className="text-base" icon="solar:danger-triangle-linear"></iconify-icon> Examen Final</div>
<div className="text-sm text-[#4a3f7a] mb-1 flex items-start gap-2 leading-relaxed"><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5 shrink-0 bg-[#fff8e0] text-[#c4900a]">Práctica</span> Atlas Visual: Órganos de los Sentidos</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="syl-panel hidden" id="syl-evaluacion">
<div className="bg-white border border-[#e0d9ff] rounded-2xl p-6 mb-5 border-t-[3px] border-t-[#5c3fbb] shadow-[0_2px_8px_rgba(92,63,187,0.06)]">
<div className="text-base font-semibold text-[#3d2b8e] mb-4 flex items-center gap-2 pb-3 border-b border-[#f0ecff]">
<iconify-icon className="text-xl" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon> Rúbricas — Atlas Visual (10 pts c/u) · Proyecto Final (puntaje superior)
                </div>
<p className="text-xs text-[#6b5aad] mb-4 leading-relaxed">Cada atlas se evalúa con 5 indicadores. Se incorpora el criterio de <strong className="font-semibold text-[#e8650a]">Uso crítico de IA</strong> como indicador específico en todos los talleres.</p>
<div className="text-sm text-[#e8650a] font-medium my-5 pb-2 border-b border-[#ffe0c0]">Indicadores comunes — Talleres 1 a 4</div>
<div className="overflow-x-auto">
<table className="w-full border-collapse text-xs mb-6">
<thead>
<tr>
</tr></thead></table></div></div></div></div>
    </>
  );
}
