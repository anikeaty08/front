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
      
<canvas className="fixed inset-0 w-full h-full z-0 opacity-35 pointer-events-none" id="neural-bg"></canvas>
<div className="relative z-10">

<header className="pt-12 pb-9 px-4 sm:px-10 text-center border-b border-[#5c3fbb]/20">
<div className="flex items-center justify-center gap-4 sm:gap-6 mb-7 flex-col sm:flex-row">

<div className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-[#a08cff] to-[#e8650a]" style={{filter: 'drop-shadow(0 0 12px rgba(92,63,187,0.4))'}}>UTI</div>
<div className="w-px h-12 bg-[#5c3fbb]/20 hidden sm:block"></div>
<div className="text-center sm:text-left">
<div className="text-xs font-medium text-[#9b91c4] tracking-widest uppercase mb-1">Universidad Tecnológica Indoamérica</div>
<div className="text-xs text-[#9b91c4]">Facultad de Ciencias Sociales y Humanas · Psicología Clínica</div>
</div>
</div>
<div className="inline-flex items-center gap-2 bg-[#5c3fbb]/15 border border-[#5c3fbb]/20 rounded-full py-1.5 px-4 text-xs font-normal tracking-widest uppercase text-[#5c3fbb] mb-5">
<span className="w-1.5 h-1.5 bg-[#e8650a] rounded-full animate-pulse"></span>
      Período Académico A26
    </div>
<h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-[#a08cff] to-[#e8650a] mb-3.5">
      Neuroanatomía y<br/>Neurofisiología I
    </h1>
<p className="text-base text-[#9b91c4] font-light flex items-center justify-center flex-wrap gap-2">
      Proyecto Formativo A26-PSCL-1-51418-1643 
      <span className="inline-block bg-gradient-to-br from-[#e8650a] to-[#f5832e] rounded-md py-0.5 px-3 text-xs font-medium font-['DM_Mono',monospace] text-white">1° Nivel</span>
</p>
<div className="inline-flex flex-wrap justify-center gap-3 sm:gap-4 mt-3 text-xs text-[#9b91c4] font-['DM_Mono',monospace]">
<span className="bg-[#201840] border border-[#5c3fbb]/20 rounded-md py-1.5 px-3 flex items-center gap-1.5"><iconify-icon className="text-sm" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon> Inicio: 06 Abr 2026</span>
<span className="bg-[#201840] border border-[#5c3fbb]/20 rounded-md py-1.5 px-3 flex items-center gap-1.5"><iconify-icon className="text-sm" icon="solar:flag-linear" strokeWidth="1.5"></iconify-icon> Fin: 27 Sep 2026</span>
</div>
</header>

<nav className="flex justify-center gap-2 py-5 px-4 sm:px-10 flex-wrap">
<button className="tab-btn is-active group relative overflow-hidden bg-[#1a1430] border border-[#5c3fbb]/20 [&amp;.is-active]:border-[#5c3fbb] rounded-lg py-2 px-4 text-sm font-normal text-[#9b91c4] [&amp;.is-active]:text-white hover:text-white hover:border-[#5c3fbb] transition-all duration-300" data-tab="general" onclick="showTab(this)">
<div className="tab-bg absolute inset-0 bg-gradient-to-br from-[#3d2b8e] to-[#5c3fbb] opacity-0 group-hover:opacity-15 group-[.is-active]:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:brain-linear" strokeWidth="1.5"></iconify-icon> General</span>
</button>
<button className="tab-btn group relative overflow-hidden bg-[#1a1430] border border-[#5c3fbb]/20 [&amp;.is-active]:border-[#5c3fbb] rounded-lg py-2 px-4 text-sm font-normal text-[#9b91c4] [&amp;.is-active]:text-white hover:text-white hover:border-[#5c3fbb] transition-all duration-300" data-tab="talleres" onclick="showTab(this)">
<div className="tab-bg absolute inset-0 bg-gradient-to-br from-[#3d2b8e] to-[#5c3fbb] opacity-0 group-hover:opacity-15 group-[.is-active]:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon> Talleres</span>
</button>
<button className="tab-btn group relative overflow-hidden bg-[#1a1430] border border-[#5c3fbb]/20 [&amp;.is-active]:border-[#5c3fbb] rounded-lg py-2 px-4 text-sm font-normal text-[#9b91c4] [&amp;.is-active]:text-white hover:text-white hover:border-[#5c3fbb] transition-all duration-300" data-tab="evaluacion" onclick="showTab(this)">
<div className="tab-bg absolute inset-0 bg-gradient-to-br from-[#3d2b8e] to-[#5c3fbb] opacity-0 group-hover:opacity-15 group-[.is-active]:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon> Evaluación</span>
</button>
<button className="tab-btn group relative overflow-hidden bg-[#1a1430] border border-[#5c3fbb]/20 [&amp;.is-active]:border-[#5c3fbb] rounded-lg py-2 px-4 text-sm font-normal text-[#9b91c4] [&amp;.is-active]:text-white hover:text-white hover:border-[#5c3fbb] transition-all duration-300" data-tab="bibliografia" onclick="showTab(this)">
<div className="tab-bg absolute inset-0 bg-gradient-to-br from-[#3d2b8e] to-[#5c3fbb] opacity-0 group-hover:opacity-15 group-[.is-active]:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:notebook-linear" strokeWidth="1.5"></iconify-icon> Bibliografía</span>
</button>
</nav>

<div className="tab-content block animate-fadeIn p-4 sm:p-10 pb-16 max-w-6xl mx-auto" id="tab-general">
<div className="font-['Playfair_Display',serif] text-2xl font-semibold mb-6 flex items-center gap-3 text-[#a08cff] tracking-tight">
      Información General
      <div className="flex-1 h-px bg-[#5c3fbb]/20"></div>
</div>
<div className="bg-[#1a1430] border border-[#5c3fbb]/20 rounded-2xl p-6 sm:p-8 mb-5 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3d2b8e] via-[#5c3fbb] to-[#e8650a]"></div>
<div className="font-['Playfair_Display',serif] text-xl font-semibold mb-5 text-[#a08cff] flex items-center gap-3 tracking-tight">
<div className="w-8 h-8 bg-[#5c3fbb]/15 rounded-lg flex items-center justify-center text-lg"><iconify-icon icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon></div> Perfil del Docente
      </div>
<div className="flex gap-6 items-center flex-wrap">
<div className="w-20 h-20 bg-gradient-to-br from-[#3d2b8e] to-[#5c3fbb] rounded-full flex items-center justify-center text-3xl flex-shrink-0 border-2 border-[#5c3fbb]/40 tracking-tight font-medium">SL</div>
<div className="flex-1">
<div className="font-['Playfair_Display',serif] text-lg font-semibold mb-1.5 tracking-tight">Stefania del Rocío Llerena Freire</div>
<div className="text-xs text-[#9b91c4] leading-relaxed">Psicóloga Clínica · Magíster en Psicología Clínica mención Psicoterapia<br/>Experiencia docente: 3 años</div>
<div className="flex gap-3 mt-3 flex-wrap">
<div className="flex items-center gap-1.5 bg-[#201840] border border-[#5c3fbb]/20 rounded-lg py-1.5 px-3 text-xs font-['DM_Mono',monospace] text-[#9b91c4]"><iconify-icon className="text-sm" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon> 0992800286</div>
<div className="flex items-center gap-1.5 bg-[#201840] border border-[#5c3fbb]/20 rounded-lg py-1.5 px-3 text-xs font-['DM_Mono',monospace] text-[#9b91c4]"><iconify-icon className="text-sm" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon> sllerena@indoamerica.edu.ec</div>
</div>
</div>
</div>
</div>
<div className="bg-[#1a1430] border border-[#5c3fbb]/20 rounded-2xl p-6 sm:p-8 mb-5 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3d2b8e] via-[#5c3fbb] to-[#e8650a]"></div>
<div className="font-['Playfair_Display',serif] text-xl font-semibold mb-5 text-[#a08cff] flex items-center gap-3 tracking-tight">
<div className="w-8 h-8 bg-[#5c3fbb]/15 rounded-lg flex items-center justify-center text-lg"><iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon></div> Datos del Proyecto Formativo
      </div>
<div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3.5 mb-6">
<div className="bg-[#201840] border border-[#5c3fbb]/20 rounded-xl p-4 text-center">
<div className="text-xs uppercase tracking-widest text-[#9b91c4] mb-2 font-normal">Créditos</div>
<div className="font-['DM_Mono',monospace] text-xl text-[#e8650a] font-normal">2.75</div>
<div className="text-xs text-[#9b91c4] mt-1">créditos académicos</div>
</div>
<div className="bg-[#201840] border border-[#5c3fbb]/20 rounded-xl p-4 text-center">
<div className="text-xs uppercase tracking-widest text-[#9b91c4] mb-2 font-normal">Total Horas</div>
<div className="font-['DM_Mono',monospace] text-xl text-[#e8650a] font-normal">132</div>
<div className="text-xs text-[#9b91c4] mt-1">horas totales</div>
</div>
<div className="bg-[#201840] border border-[#5c3fbb]/20 rounded-xl p-4 text-center">
<div className="text-xs uppercase tracking-widest text-[#9b91c4] mb-2 font-normal">Nivel</div>
<div className="font-['DM_Mono',monospace] text-xl text-[#e8650a] font-normal">1°</div>
<div className="text-xs text-[#9b91c4] mt-1">primer nivel</div>
</div>
<div className="bg-[#201840] border border-[#5c3fbb]/20 rounded-xl p-4 text-center">
<div className="text-xs uppercase tracking-widest text-[#9b91c4] mb-2 font-normal">Modalidad</div>
<div className="text-base text-[#e8650a] font-normal pt-1.5">Presencial</div>
<div className="text-xs text-[#9b91c4] mt-1">pregrado</div>
</div>
<div className="bg-[#201840] border border-[#5c3fbb]/20 rounded-xl p-4 text-center">
<div className="text-xs uppercase tracking-widest text-[#9b91c4] mb-2 font-normal">Con docente</div>
<div className="font-['DM_Mono',monospace] text-xl text-[#e8650a] font-normal">72h</div>
<div className="text-xs text-[#9b91c4] mt-1">clases asistidas</div>
</div>
<div className="bg-[#201840] border border-[#5c3fbb]/20 rounded-xl p-4 text-center">
<div className="text-xs uppercase tracking-widest text-[#9b91c4] mb-2 font-normal">Autónomo</div>
<div className="font-['DM_Mono',monospace] text-xl text-[#e8650a] font-normal">20h</div>
<div className="text-xs text-[#9b91c4] mt-1">aprendizaje autónomo</div>
</div>
<div className="bg-[#201840] border border-[#5c3fbb]/20 rounded-xl p-4 text-center">
<div className="text-xs uppercase tracking-widest text-[#9b91c4] mb-2 font-normal">Prácticas</div>
<div className="font-['DM_Mono',monospace] text-xl text-[#e8650a] font-normal">40h</div>
<div className="text-xs text-[#9b91c4] mt-1">aplicación</div>
</div>
</div>
<div className="mb-4">
<div className="flex justify-between text-xs text-[#9b91c4] mb-2"><span>Clases con docente</span><span>72h</span></div>
<div className="h-2 bg-[#201840] rounded-full overflow-hidden"><div className="h-full rounded-full w-[54.5%] bg-gradient-to-r from-[#3d2b8e] to-[#5c3fbb]"></div></div>
</div>
<div className="mb-4">
<div className="flex justify-between text-xs text-[#9b91c4] mb-2"><span>Aprendizaje autónomo</span><span>20h</span></div>
<div className="h-2 bg-[#201840] rounded-full overflow-hidden"><div className="h-full rounded-full w-[15.1%] bg-gradient-to-r from-[#5c3fbb] to-[#e8650a]"></div></div>
</div>
<div className="mb-2">
<div className="flex justify-between text-xs text-[#9b91c4] mb-2"><span>Prácticas de aplicación</span><span>40h</span></div>
<div className="h-2 bg-[#201840] rounded-full overflow-hidden"><div className="h-full rounded-full w-[30.3%] bg-gradient-to-r from-[#e8650a] to-[#f5832e]"></div></div>
</div>
</div>
<div className="bg-[#1a1430] border border-[#5c3fbb]/20 rounded-2xl p-6 sm:p-8 mb-5 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3d2b8e] via-[#5c3fbb] to-[#e8650a]"></div>
<div className="font-['Playfair_Display',serif] text-xl font-semibold mb-5 text-[#a08cff] flex items-center gap-3 tracking-tight">
<div className="w-8 h-8 bg-[#5c3fbb]/15 rounded-lg flex items-center justify-center text-lg"><iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon></div> Horario de Clases y Prácticas
      </div>
<div className="text-xs uppercase tracking-widest text-[#9b91c4] font-medium my-5 pb-2 border-b border-[#5c3fbb]/20 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#5c3fbb]"></span> Clases asistidas por el docente y aprendizaje colaborativo
      </div>
<div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3 mb-2">
<div className="rounded-xl p-4 border-l-4 bg-[#3d2b8e]/25 border-[#5c3fbb]"><div className="text-xs uppercase tracking-widest mb-1.5 font-medium text-[#a08cff]">Lunes</div><div className="font-['DM_Mono',monospace] text-base text-[#f0ecff] font-normal">08:30 – 09:30</div><div className="text-xs mt-1.5 opacity-70 text-[#a08cff]">Clase con docente</div></div>
<div className="rounded-xl p-4 border-l-4 bg-[#3d2b8e]/25 border-[#5c3fbb]"><div className="text-xs uppercase tracking-widest mb-1.5 font-medium text-[#a08cff]">Lunes</div><div className="font-['DM_Mono',monospace] text-base text-[#f0ecff] font-normal">09:30 – 10:30</div><div className="text-xs mt-1.5 opacity-70 text-[#a08cff]">Clase con docente</div></div>
<div className="rounded-xl p-4 border-l-4 bg-[#3d2b8e]/25 border-[#5c3fbb]"><div className="text-xs uppercase tracking-widest mb-1.5 font-medium text-[#a08cff]">Lunes</div><div className="font-['DM_Mono',monospace] text-base text-[#f0ecff] font-normal">10:30 – 11:30</div><div className="text-xs mt-1.5 opacity-70 text-[#a08cff]">Clase con docente</div></div>
<div className="rounded-xl p-4 border-l-4 bg-[#3d2b8e]/25 border-[#5c3fbb]"><div className="text-xs uppercase tracking-widest mb-1.5 font-medium text-[#a08cff]">Lunes</div><div className="font-['DM_Mono',monospace] text-base text-[#f0ecff] font-normal">11:30 – 12:30</div><div className="text-xs mt-1.5 opacity-70 text-[#a08cff]">Clase con docente</div></div>
<div className="rounded-xl p-4 border-l-4 bg-[#3d2b8e]/25 border-[#5c3fbb]"><div className="text-xs uppercase tracking-widest mb-1.5 font-medium text-[#a08cff]">Miércoles</div><div className="font-['DM_Mono',monospace] text-base text-[#f0ecff] font-normal">08:30 – 09:30</div><div className="text-xs mt-1.5 opacity-70 text-[#a08cff]">Clase con docente</div></div>
<div className="rounded-xl p-4 border-l-4 bg-[#3d2b8e]/25 border-[#5c3fbb]"><div className="text-xs uppercase tracking-widest mb-1.5 font-medium text-[#a08cff]">Miércoles</div><div className="font-['DM_Mono',monospace] text-base text-[#f0ecff] font-normal">09:30 – 10:30</div><div className="text-xs mt-1.5 opacity-70 text-[#a08cff]">Clase con docente</div></div>
</div>
<div className="text-xs uppercase tracking-widest text-[#9b91c4] font-medium mt-7 mb-4 pb-2 border-b border-[#5c3fbb]/20 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#e8650a]"></span> Prácticas de aplicación y experimentación
      </div>
<p className="text-xs text-[#9b91c4] italic">Las prácticas se desarrollan integradas en las sesiones del laboratorio de morfofisiología según el cronograma de cada taller.</p>
</div>
<div className="bg-[#1a1430] border border-[#5c3fbb]/20 rounded-2xl p-6 sm:p-8 mb-5 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3d2b8e] via-[#5c3fbb] to-[#e8650a]"></div>
<div className="font-['Playfair_Display',serif] text-xl font-semibold mb-5 text-[#a08cff] flex items-center gap-3 tracking-tight">
<div className="w-8 h-8 bg-[#5c3fbb]/15 rounded-lg flex items-center justify-center text-lg"><iconify-icon icon="solar:target-linear" strokeWidth="1.5"></iconify-icon></div> Competencias
      </div>
<div className="bg-gradient-to-br from-[#3d2b8e]/15 to-[#e8650a]/10 border border-[#5c3fbb]/30 rounded-xl p-5 mb-3.5 text-sm leading-relaxed text-[#f0ecff]">
<div className="text-xs uppercase tracking-widest text-[#a08cff] mb-2.5 font-medium">Competencia específica del proyecto formativo</div>
        Analiza la organización y funcionamiento del Sistema Nervioso Central para fortalecer el desarrollo de la evaluación, diagnóstico e intervención en la salud mental, considerando las bases biológicas de la conducta humana con ética.
      </div>
<div className="bg-gradient-to-br from-[#3d2b8e]/15 to-[#e8650a]/10 border border-[#e8650a]/30 rounded-xl p-5 mb-3.5 text-sm leading-relaxed text-[#f0ecff]">
<div className="text-xs uppercase tracking-widest text-[#f5832e] mb-2.5 font-medium">Competencia del perfil de egreso</div>
        Integra los fundamentos epistemológicos de las diferentes vertientes teóricas de la psicología con los conocimientos prácticos, para el análisis, identificación e intervención en los diferentes campos de aplicación de la Psicología Clínica, promoviendo competencias profesionales y posibilitando el trabajo trans, multi e interdisciplinario.
      </div>
<div className="bg-gradient-to-br from-[#3d2b8e]/15 to-[#e8650a]/10 border border-[#f5a623]/30 rounded-xl p-5 mb-3.5 text-sm leading-relaxed text-[#f0ecff]">
<div className="text-xs uppercase tracking-widest text-[#f5a623] mb-2.5 font-medium">Competencia genérica</div>
        Aplica el pensamiento complejo en la resolución de problemas y proyectos para mejorar las condiciones de vida, considerando los retos del entorno y sus procesos de incertidumbre.
      </div>
</div>
<div className="bg-[#1a1430] border border-[#5c3fbb]/20 rounded-2xl p-6 sm:p-8 mb-5 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3d2b8e] via-[#5c3fbb] to-[#e8650a]"></div>
<div className="font-['Playfair_Display',serif] text-xl font-semibold mb-5 text-[#a08cff] flex items-center gap-3 tracking-tight">
<div className="w-8 h-8 bg-[#5c3fbb]/15 rounded-lg flex items-center justify-center text-lg"><iconify-icon icon="solar:link-linear" strokeWidth="1.5"></iconify-icon></div> Correquisitos
      </div>
<div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-2.5 mt-2.5">
<div className="bg-[#201840] border border-[#5c3fbb]/20 rounded-lg py-2.5 px-3.5 text-xs text-[#9b91c4] flex items-center gap-2"><iconify-icon className="text-lg text-[#a08cff]" icon="solar:monitor-linear" strokeWidth="1.5"></iconify-icon> Cultura y Práctica Digital</div>
<div className="bg-[#201840] border border-[#5c3fbb]/20 rounded-lg py-2.5 px-3.5 text-xs text-[#9b91c4] flex items-center gap-2"><iconify-icon className="text-lg text-[#a08cff]" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon> Comunicación Asertiva</div>
<div className="bg-[#201840] border border-[#5c3fbb]/20 rounded-lg py-2.5 px-3.5 text-xs text-[#9b91c4] flex items-center gap-2"><iconify-icon className="text-lg text-[#a08cff]" icon="solar:calculator-linear" strokeWidth="1.5"></iconify-icon> Matemáticas</div>
<div className="bg-[#201840] border border-[#5c3fbb]/20 rounded-lg py-2.5 px-3.5 text-xs text-[#9b91c4] flex items-center gap-2"><iconify-icon className="text-lg text-[#a08cff]" icon="solar:brain-linear" strokeWidth="1.5"></iconify-icon> Epistemología de la Psicología</div>
<div className="bg-[#201840] border border-[#5c3fbb]/20 rounded-lg py-2.5 px-3.5 text-xs text-[#9b91c4] flex items-center gap-2"><iconify-icon className="text-lg text-[#a08cff]" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon> Psicología General</div>
<div className="bg-[#201840] border border-[#5c3fbb]/20 rounded-lg py-2.5 px-3.5 text-xs text-[#9b91c4] flex items-center gap-2"><iconify-icon className="text-lg text-[#a08cff]" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon> Psicolingüística</div>
<div className="bg-[#201840] border border-[#5c3fbb]/20 rounded-lg py-2.5 px-3.5 text-xs text-[#9b91c4] flex items-center gap-2"><iconify-icon className="text-lg text-[#a08cff]" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon> Procesos Psicológicos I</div>
<div className="bg-[#201840] border border-[#5c3fbb]/20 rounded-lg py-2.5 px-3.5 text-xs text-[#9b91c4] flex items-center gap-2"><iconify-icon className="text-lg text-[#a08cff]" icon="solar:pin-linear" strokeWidth="1.5"></iconify-icon> Electiva 1</div>
</div>
</div>
<div className="bg-[#1a1430] border border-[#5c3fbb]/20 rounded-2xl p-6 sm:p-8 mb-5 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3d2b8e] via-[#5c3fbb] to-[#e8650a]"></div>
<div className="font-['Playfair_Display',serif] text-xl font-semibold mb-5 text-[#a08cff] flex items-center gap-3 tracking-tight">
<div className="w-8 h-8 bg-[#5c3fbb]/15 rounded-lg flex items-center justify-center text-lg"><iconify-icon icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon></div> Metodología y Proyecto Final
      </div>
<p className="text-sm text-[#9b91c4] leading-relaxed mb-4">Metodología <strong className="text-[#f0ecff] font-medium">basada en problemas</strong> mediante estudio de caso, aprendizaje cooperativo, pensamiento crítico y gamificación. <strong className="text-[#e8650a] font-medium">Integración activa de herramientas de IA</strong> (NotebookLM, Gemini, Claude, Copilot, Gamma, Canva IA).</p>
<div className="inline-flex items-center gap-2 bg-[#e8650a]/10 border border-[#e8650a]/25 rounded-lg py-2 px-3.5 text-xs text-[#f5832e] mb-3.5">
<iconify-icon className="text-base" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon> Proyecto Final: Atlas Visual de Fundamentos Neuroanatómicos de Casos Prácticos
      </div>
<p className="text-xs text-[#9b91c4] leading-relaxed"><strong className="text-[#a08cff] font-medium">Problema central:</strong> Según la PAHO y la OMS (2021), en Ecuador 30 de cada 100 personas sufren algún problema de salud mental. ¿Cómo puede el psicólogo atender de manera integral los diferentes trastornos mentales que aquejan a la población?</p>
</div>
</div>

<div className="tab-content hidden p-4 sm:p-10 pb-16 max-w-6xl mx-auto" id="tab-talleres">
<div className="font-['Playfair_Display',serif] text-2xl font-semibold mb-6 flex items-center gap-3 text-[#a08cff] tracking-tight">
      Talleres y Actividades
      <div className="flex-1 h-px bg-[#5c3fbb]/20"></div>
</div>

<div className="taller-card group bg-[#1a1430] border border-[#5c3fbb]/20 rounded-2xl overflow-hidden mb-5">
<div className="flex items-center gap-4 p-5 cursor-pointer hover:bg-[#5c3fbb]/10 transition-colors select-none" onclick="toggleTaller(this)">
<div className="w-11 h-11 bg-gradient-to-br from-[#3d2b8e] to-[#5c3fbb] rounded-xl flex items-center justify-center font-['DM_Mono',monospace] text-sm font-normal flex-shrink-0 text-white">01</div>
<div className="flex-1">
<div className="font-['Playfair_Display',serif] text-lg font-semibold mb-1 tracking-tight">Introducción al Sistema Nervioso</div>
<div className="text-xs text-[#9b91c4] leading-relaxed">Describe las generalidades del SN como sustratos neuroanatómicos y neurofisiológicos del comportamiento humano</div>
</div>
<iconify-icon className="text-[#9b91c4] text-xl transition-transform duration-300 group-[.is-open]:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-[.is-open]:max-h-[2500px]">
<div className="px-6 pb-6">
<div className="inline-flex items-center gap-2 bg-[#e8650a]/10 border border-[#e8650a]/25 rounded-lg py-2 px-3.5 text-xs text-[#f5832e] mb-2">
<iconify-icon className="text-base" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon> Atlas Visual: Fundamentos del Desarrollo e Histología del SN mediante Casos Clínicos
          </div>
<div className="flex flex-wrap gap-2 mt-2">
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Introducción al SN</span>
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Histología</span>
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Neurotransmisores</span>
<span className="bg-[#e8650a]/10 border border-[#e8650a]/25 rounded-md py-1 px-3 text-xs text-[#f5832e] flex items-center gap-1.5"><iconify-icon icon="solar:cpu-linear"></iconify-icon> NotebookLM</span>
<span className="bg-[#e8650a]/10 border border-[#e8650a]/25 rounded-md py-1 px-3 text-xs text-[#f5832e] flex items-center gap-1.5"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Gemini</span>
</div>
<div className="flex flex-col gap-2.5 mt-4">
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">06/04/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Inducción al proyecto formativo</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#ff5050]/15 text-[#ff7070]">Evaluación</span> Evaluación diagnóstica</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#f5a623]/15 text-[#f5a623]">Práctica</span> Identificación y uso de recursos del laboratorio de morfofisiología</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">08/04/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Conferencia: Antecedentes históricos de las Neurociencias con uso de IA</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">13/04/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Conferencia: Planos neuroanatómicos y métodos de estudio del SN</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">15/04/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Conferencia: La neurona y sus partes con uso de IA NotebookLM</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">20/04/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Conferencia: Células de neuroglia con uso de IA Gemini</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#f5a623]/15 text-[#f5a623]">Práctica</span> Maqueta de las partes de la neurona</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">22/04/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Exposición estudiantil: Neurotransmisores — Clasificación y función</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#e8650a]/15 text-[#f5832e]">Autónoma</span> Construcción de guía de estudio multimodal con NotebookLM sobre fundamentos del SN</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">27/04/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Mesa redonda: Temas del Taller 1</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#f5a623]/15 text-[#f5a623]">Práctica</span> Atlas Visual del SN — Neuroimagen creativa con IA</div>
</div></div>
</div>
</div>
</div>
</div>

<div className="taller-card group bg-[#1a1430] border border-[#5c3fbb]/20 rounded-2xl overflow-hidden mb-5">
<div className="flex items-center gap-4 p-5 cursor-pointer hover:bg-[#5c3fbb]/10 transition-colors select-none" onclick="toggleTaller(this)">
<div className="w-11 h-11 bg-gradient-to-br from-[#3d2b8e] to-[#5c3fbb] rounded-xl flex items-center justify-center font-['DM_Mono',monospace] text-sm font-normal flex-shrink-0 text-white">02</div>
<div className="flex-1">
<div className="font-['Playfair_Display',serif] text-lg font-semibold mb-1 tracking-tight">Irrigación y Meninges</div>
<div className="text-xs text-[#9b91c4] leading-relaxed">Describe la irrigación del SN y su influencia en el funcionamiento del sistema nervioso</div>
</div>
<iconify-icon className="text-[#9b91c4] text-xl transition-transform duration-300 group-[.is-open]:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-[.is-open]:max-h-[2500px]">
<div className="px-6 pb-6">
<div className="inline-flex items-center gap-2 bg-[#e8650a]/10 border border-[#e8650a]/25 rounded-lg py-2 px-3.5 text-xs text-[#f5832e] mb-2">
<iconify-icon className="text-base" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon> Atlas Visual: Sistema Irrigatorio del Encéfalo mediante Casos Prácticos
          </div>
<div className="flex flex-wrap gap-2 mt-2">
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Desarrollo del SN</span>
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Meninges</span>
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Vascularización</span>
<span className="bg-[#e8650a]/10 border border-[#e8650a]/25 rounded-md py-1 px-3 text-xs text-[#f5832e] flex items-center gap-1.5"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Gemini</span>
</div>
<div className="flex flex-col gap-2.5 mt-4">
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">29/04/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Conferencia: Desarrollo y evolución del SN con uso de IA Gemini</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">04/05/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Taller: Organización estructural del SN — Meninges</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#f5a623]/15 text-[#f5a623]">Práctica</span> Láminas ilustrativas del desarrollo del SN</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">06/05/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Conferencia: Irrigación del SN</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#e8650a]/15 text-[#f5832e]">Autónoma</span> Escape room neuroanatómico con IA: del desarrollo a la vascularización del SN</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">11/05/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Taller de análisis de casos — Taller 2</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#ff5050]/15 text-[#ff7070]">Evaluación</span> Evaluación Talleres 1 y 2</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#f5a623]/15 text-[#f5a623]">Práctica</span> Atlas Visual: Sistema Irrigatorio del Encéfalo</div>
</div></div>
</div>
</div>
</div>
</div>

<div className="taller-card group bg-[#1a1430] border border-[#5c3fbb]/20 rounded-2xl overflow-hidden mb-5">
<div className="flex items-center gap-4 p-5 cursor-pointer hover:bg-[#5c3fbb]/10 transition-colors select-none" onclick="toggleTaller(this)">
<div className="w-11 h-11 bg-gradient-to-br from-[#3d2b8e] to-[#5c3fbb] rounded-xl flex items-center justify-center font-['DM_Mono',monospace] text-sm font-normal flex-shrink-0 text-white">03</div>
<div className="flex-1">
<div className="font-['Playfair_Display',serif] text-lg font-semibold mb-1 tracking-tight">Encéfalo</div>
<div className="text-xs text-[#9b91c4] leading-relaxed">Comprende las estructuras y funcionamiento del encéfalo y su influencia en el comportamiento humano</div>
</div>
<iconify-icon className="text-[#9b91c4] text-xl transition-transform duration-300 group-[.is-open]:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-[.is-open]:max-h-[2500px]">
<div className="px-6 pb-6">
<div className="inline-flex items-center gap-2 bg-[#e8650a]/10 border border-[#e8650a]/25 rounded-lg py-2 px-3.5 text-xs text-[#f5832e] mb-2">
<iconify-icon className="text-base" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon> Atlas Visual: Fundamentos Neuroanatómicos del Encéfalo aplicados a Casos Prácticos — NeuroMap IA
          </div>
<div className="flex flex-wrap gap-2 mt-2">
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Corteza cerebral</span>
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Prosencéfalo</span>
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Diencéfalo</span>
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Mesencéfalo</span>
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Romboencéfalo</span>
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">SN Autónomo</span>
<span className="bg-[#e8650a]/10 border border-[#e8650a]/25 rounded-md py-1 px-3 text-xs text-[#f5832e] flex items-center gap-1.5"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Claude</span>
<span className="bg-[#e8650a]/10 border border-[#e8650a]/25 rounded-md py-1 px-3 text-xs text-[#f5832e] flex items-center gap-1.5"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Copilot</span>
<span className="bg-[#e8650a]/10 border border-[#e8650a]/25 rounded-md py-1 px-3 text-xs text-[#f5832e] flex items-center gap-1.5"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Gamma</span>
<span className="bg-[#e8650a]/10 border border-[#e8650a]/25 rounded-md py-1 px-3 text-xs text-[#f5832e] flex items-center gap-1.5"><iconify-icon icon="solar:cpu-linear"></iconify-icon> NotebookLM</span>
</div>
<div className="flex flex-col gap-2.5 mt-4">
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">13/05/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Conferencia: Generalidades de la corteza cerebral</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">18/05/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Exposición estudiantil: Áreas de Brodmann 1-23 con uso de IA Claude</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#f5a623]/15 text-[#f5a623]">Práctica</span> Exploración guiada del encéfalo en 3D</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">20/05/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Exposición estudiantil: Áreas de Brodmann 24-48</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Casos clínicos de Áreas de Brodmann</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">27/05/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Conferencia: Cerebro — Hemisferios y lóbulos cerebrales con uso de IA Copilot</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">01/06/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Conferencia: Giros y surcos del cerebro</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#f5a623]/15 text-[#f5a623]">Práctica</span> Estudio de casos clínicos de afectación del cerebro</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">03/06/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#ff5050]/15 text-[#ff7070]">Evaluación</span> <iconify-icon className="text-[#ff7070] text-sm" icon="solar:danger-triangle-linear"></iconify-icon> Examen Parcial</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">08/06/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Clase magistral: Ventrículos cerebrales con uso de IA Gamma</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#f5a623]/15 text-[#f5a623]">Práctica</span> Exploración guiada de los ventrículos cerebrales en 3D</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">10/06/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Exposición estudiantil: Ganglios basales con uso de IA NotebookLM</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">15/06/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Conferencia: Tálamo — Núcleos</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">17/06/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Conferencia: Hipotálamo con uso de IA</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">22/06/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Exposición estudiantil: Epitálamo y subtálamo</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#e8650a]/15 text-[#f5832e]">Autónoma</span> Cartografía cerebral con NotebookLM: Corteza, Prosencéfalo y Diencéfalo</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#f5a623]/15 text-[#f5a623]">Práctica</span> Estudio de casos clínicos del diencéfalo</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">24/06/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Clase magistral: Mesencéfalo — Tectum y Tegmento</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">29/06/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Exposición: Sistema límbico con uso de IA Claude</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">01/07/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Conferencia: Formación reticular</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">06/07/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Clase magistral: Puente de Varolio o Protuberancia con uso de IA Gamma</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#f5a623]/15 text-[#f5a623]">Práctica</span> Mapa inicial del Romboencéfalo</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">08/07/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Exposición estudiantil: Cerebelo con uso de IA Gamma — Retroalimentación</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">13/07/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Exposición estudiantil: Bulbo raquídeo — Retroalimentación</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#e8650a]/15 text-[#f5832e]">Autónoma</span> Explorando el tronco encefálico y el SNA con NotebookLM</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">15/07/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Clase magistral: Sistema Nervioso Autónomo</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#f5a623]/15 text-[#f5a623]">Práctica</span> Disección del cerebro vacuno</div>
</div></div>
<div className="flex gap-3.5 items-start p-3 bg-[#201840] rounded-xl border-l-4 border-transparent hover:border-[#5c3fbb] transition-colors"><div className="font-['DM_Mono',monospace] text-xs text-[#e8650a] min-w-[82px] pt-0.5">20/07/2026</div><div className="flex-1 flex flex-col gap-1">
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#5c3fbb]/20 text-[#a08cff]">Docente</span> Cierre del taller — Estudio de casos</div>
<div className="text-xs text-[#9b91c4] flex items-start gap-2"><span className="text-xs py-0.5 px-2 rounded-full font-medium uppercase tracking-widest whitespace-nowrap mt-px bg-[#f5a623]/15 text-[#f5a623]">Práctica</span> Atlas Visual Neuroanatómico del Encéfalo — NeuroMap IA</div>
</div></div>
</div>
</div>
</div>
</div>

<div className="taller-card group bg-[#1a1430] border border-[#5c3fbb]/20 rounded-2xl overflow-hidden mb-5">
<div className="flex items-center gap-4 p-5 cursor-pointer hover:bg-[#5c3fbb]/10 transition-colors select-none" onclick="toggleTaller(this)">
<div className="w-11 h-11 bg-gradient-to-br from-[#3d2b8e] to-[#5c3fbb] rounded-xl flex items-center justify-center font-['DM_Mono',monospace] text-sm font-normal flex-shrink-0 text-white">04</div>
<div className="flex-1">
<div className="font-['Playfair_Display',serif] text-lg font-semibold mb-1 tracking-tight">Órganos de los Sentidos</div>
<div className="text-xs text-[#9b91c4] leading-relaxed">Relaciona estructuras y funciones de los órganos de los sentidos según los fundamentos de las neurociencias</div>
</div>
<iconify-icon className="text-[#9b91c4] text-xl transition-transform duration-300 group-[.is-open]:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-[.is-open]:max-h-[2500px]">
<div className="px-6 pb-6">
<div className="inline-flex items-center gap-2 bg-[#e8650a]/10 border border-[#e8650a]/25 rounded-lg py-2 px-3.5 text-xs text-[#f5832e] mb-2">
<iconify-icon className="text-base" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon> Atlas Visual: Fundamentos Neuroanatómicos de los Órganos de los Sentidos
          </div>
<div className="flex flex-wrap gap-2 mt-2">
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Visión</span>
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Audición</span>
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Olfato</span>
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Gusto</span>
<span className="bg-[#5c3fbb]/10 border border-[#5c3fbb]/25 rounded-md py-1 px-3 text-xs text-[#a08cff]">Tacto</span>
<span className="bg-[#e8650a]/10 border border-[#e8650a]/25 rounded-md py-1 px-3 text-xs text-[#f5832e] flex items-center gap-1.5"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Gamma</span>
<span className="bg-[#e8650a]/10 border border-[#e8650a]/25 rounded-md py-1 px-3 text-xs text-[#f5832e] flex items-center gap-1.5"></span></div></div></div></div></div></div>
    </>
  );
}
