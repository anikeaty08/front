import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function calcularNota() {
            // Asegurar que los valores no superen 10 en base
            const getVal = (id) => Math.min(10, Math.max(0, parseFloat(document.getElementById(id).value) || 0));
            
            const doc = getVal('sc_doc');
            const pra = getVal('sc_pra');
            const aut = getVal('sc_aut');
            const exa = getVal('sc_exa');

            // Ponderaciones: 30%, 30%, 20%, 20%
            const total = (doc * 0.3) + (pra * 0.3) + (aut * 0.2) + (exa * 0.2);
            
            const resDiv = document.getElementById('resultado');
            const valP = document.getElementById('nota_val');
            const statP = document.getElementById('nota_status');
            const labelP = document.getElementById('res_label');

            resDiv.classList.remove('hidden');
            valP.innerText = total.toFixed(2);

            // Reseteo de clases de Tailwind
            resDiv.className = "mt-6 p-5 rounded-xl border text-center transition-all duration-300";
            
            if (total >= 7.0) {
                resDiv.classList.add('bg-emerald-50/50', 'border-emerald-200', 'text-emerald-900');
                statP.innerText = "Aprobado";
                statP.classList.add('text-emerald-600');
                labelP.classList.add('text-emerald-700');
            } else {
                resDiv.classList.add('bg-red-50/50', 'border-red-200', 'text-red-900');
                statP.innerText = "Reprobado / Recuperación";
                statP.classList.add('text-red-600');
                labelP.classList.add('text-red-700');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200/50">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-900 text-lg" icon="solar:book-bookmark-linear"></iconify-icon>
<span className="font-semibold text-base tracking-tighter text-zinc-900">PORTALACADÉMICO</span>
</div>
<div className="hidden md:flex space-x-6">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#inicio">Inicio</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#organizacion">Aprendizaje</a>
<a className="text-xs font-semibold text-zinc-900" href="#evaluacion">Evaluación</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#asistencia">Asistencia</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#faq">FAQ</a>
</div>
<div className="md:hidden">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors" id="mobile-menu-button">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="pt-40 pb-24 text-center px-6 relative overflow-hidden" id="inicio">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-zinc-50 to-zinc-50"></div>
<div className="max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-zinc-600">Reglamento Vigente 2024</span>
</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6 leading-tight">
                Régimen Académico y Normativas de Grado
            </h1>
<p className="text-base md:text-lg text-zinc-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                Una guía estructurada para comprender tus deberes, derechos y el sistema de evaluación en la modalidad presencial.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto bg-zinc-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm" href="#evaluacion">
                    Explorar Evaluación
                </a>
<a className="w-full sm:w-auto bg-white text-zinc-900 border border-zinc-200 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm" href="#faq">
                    Preguntas Frecuentes
                </a>
</div>
</div>
</header>

<section className="max-w-6xl mx-auto px-6 py-20">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">Modalidad Presencial</h2>
<p className="text-sm text-zinc-500 mb-8 leading-relaxed">
                    Diseñada para maximizar la interacción directa en el campus. Requiere un compromiso continuo con la asistencia y participación activa en los espacios físicos de la institución.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-0.5 text-zinc-400"><iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon></div>
<span className="text-sm text-zinc-700 font-medium">Asistencia y participación obligatoria.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-zinc-400"><iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon></div>
<span className="text-sm text-zinc-700 font-medium">Intercambio de conocimientos en tiempo real.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-zinc-400"><iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon></div>
<span className="text-sm text-zinc-700 font-medium">Desarrollo práctico en laboratorios in situ.</span>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white border border-zinc-200/80 p-5 rounded-2xl shadow-sm hover:border-zinc-300 transition-colors">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 mb-3">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-900">Horarios Fijos</p>
</div>
<div className="bg-white border border-zinc-200/80 p-5 rounded-2xl shadow-sm hover:border-zinc-300 transition-colors">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 mb-3">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-900">Trabajo Grupal</p>
</div>
<div className="bg-white border border-zinc-200/80 p-5 rounded-2xl shadow-sm hover:border-zinc-300 transition-colors">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 mb-3">
<iconify-icon className="text-xl" icon="solar:test-tube-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-900">Laboratorios</p>
</div>
<div className="bg-white border border-zinc-200/80 p-5 rounded-2xl shadow-sm hover:border-zinc-300 transition-colors">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 mb-3">
<iconify-icon className="text-xl" icon="solar:user-speak-rounded-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-900">Tutorías</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100" id="organizacion">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">Organización del Aprendizaje</h2>
<p className="text-sm text-zinc-500">Los tres pilares fundamentales que componen tu carga horaria y evaluación.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 text-left">
<div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-2xl text-zinc-700 mb-4" icon="solar:monitor-linear"></iconify-icon>
<h3 className="font-semibold text-base tracking-tight text-zinc-900 mb-2">Docencia (ACD)</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Clases teóricas, conferencias y tutorías dirigidas y monitoreadas directamente por el docente.</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-2xl text-zinc-700 mb-4" icon="solar:pen-new-square-linear"></iconify-icon>
<h3 className="font-semibold text-base tracking-tight text-zinc-900 mb-2">Prácticas (APE)</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Entornos prácticos y experimentales para la aplicación directa de los conocimientos teóricos adquiridos.</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-2xl text-zinc-700 mb-4" icon="solar:document-add-linear"></iconify-icon>
<h3 className="font-semibold text-base tracking-tight text-zinc-900 mb-2">Autónomo (AA)</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Estudio independiente, lectura crítica e investigación gestionada enteramente por el estudiante.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6" id="evaluacion">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs font-semibold tracking-wide uppercase mb-4 border border-zinc-200/60">
<iconify-icon icon="solar:target-linear"></iconify-icon> Sistema Analítico
                </span>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">Evaluación y Calificaciones</h2>
<p className="text-sm text-zinc-500 mt-3 max-w-xl leading-relaxed">Conoce la distribución de pesos por componente y utiliza el simulador para proyectar tu rendimiento académico.</p>
</div>
</div>
<div className="grid lg:grid-cols-5 gap-8 items-start">

<div className="lg:col-span-3 border border-zinc-200 rounded-3xl bg-white overflow-hidden shadow-sm">
<div className="p-6 border-b border-zinc-100 flex items-center gap-3">
<iconify-icon className="text-xl text-zinc-400" icon="solar:folder-with-files-linear"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-zinc-900">Tabla de Ponderaciones</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-zinc-50/50 border-b border-zinc-100">
<th className="py-3 px-6 text-xs font-medium text-zinc-500 tracking-wide">Componente</th>
<th className="py-3 px-6 text-xs font-medium text-zinc-500 tracking-wide text-right">Puntos (10)</th>
<th className="py-3 px-6 text-xs font-medium text-zinc-500 tracking-wide text-right">Peso (%)</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="py-4 px-6 text-sm text-zinc-700 font-medium">Docencia y Colaborativo</td>
<td className="py-4 px-6 text-sm text-zinc-500 text-right">3.0</td>
<td className="py-4 px-6 text-sm text-zinc-500 text-right">30%</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="py-4 px-6 text-sm text-zinc-700 font-medium">Prácticas y Experimentación</td>
<td className="py-4 px-6 text-sm text-zinc-500 text-right">3.0</td>
<td className="py-4 px-6 text-sm text-zinc-500 text-right">30%</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="py-4 px-6 text-sm text-zinc-700 font-medium">Trabajo Autónomo</td>
<td className="py-4 px-6 text-sm text-zinc-500 text-right">2.0</td>
<td className="py-4 px-6 text-sm text-zinc-500 text-right">20%</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="py-4 px-6 text-sm text-zinc-700 font-medium">Examen / Producto Final</td>
<td className="py-4 px-6 text-sm text-zinc-500 text-right">2.0</td>
<td className="py-4 px-6 text-sm text-zinc-500 text-right">20%</td>
</tr>
</tbody>
<tfoot className="bg-zinc-50/80 border-t border-zinc-200">
<tr>
<td className="py-4 px-6 text-sm text-zinc-900 font-semibold">Total Base</td>
<td className="py-4 px-6 text-sm text-zinc-900 font-semibold text-right">10.0</td>
<td className="py-4 px-6 text-sm text-zinc-900 font-semibold text-right">100%</td>
</tr>
</tfoot>
</table>
</div>
<div className="p-4 m-4 bg-zinc-50 border border-zinc-200 rounded-xl flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-0.5 text-lg" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs text-zinc-600 leading-relaxed">
                        Para aprobar la asignatura se requiere alcanzar una nota mínima final de <span className="font-semibold text-zinc-900">7.0 sobre 10.0</span> puntos en el cómputo global.
                    </p>
</div>
</div>

<div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-zinc-900"></div>
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-xl text-zinc-900" icon="solar:calculator-linear"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-zinc-900">Simulador</h3>
</div>
<div className="space-y-5">
<div>
<div className="flex justify-between mb-1.5">
<label className="text-xs font-medium text-zinc-700">Docencia</label>
<span className="text-xs text-zinc-400">Máx 10</span>
</div>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 focus:bg-white transition-all" id="sc_doc" max="10" min="0" step="0.1" type="number" value="0"/>
</div>
<div>
<div className="flex justify-between mb-1.5">
<label className="text-xs font-medium text-zinc-700">Prácticas</label>
<span className="text-xs text-zinc-400">Máx 10</span>
</div>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 focus:bg-white transition-all" id="sc_pra" max="10" min="0" step="0.1" type="number" value="0"/>
</div>
<div>
<div className="flex justify-between mb-1.5">
<label className="text-xs font-medium text-zinc-700">Autónomo</label>
<span className="text-xs text-zinc-400">Máx 10</span>
</div>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 focus:bg-white transition-all" id="sc_aut" max="10" min="0" step="0.1" type="number" value="0"/>
</div>
<div>
<div className="flex justify-between mb-1.5">
<label className="text-xs font-medium text-zinc-700">Examen Final</label>
<span className="text-xs text-zinc-400">Máx 10</span>
</div>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 focus:bg-white transition-all" id="sc_exa" max="10" min="0" step="0.1" type="number" value="0"/>
</div>
<button className="w-full bg-zinc-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors mt-2" onclick="calcularNota()">
                        Calcular Ponderación
                    </button>
<div className="hidden mt-4 p-4 rounded-xl border text-center transition-all duration-300" id="resultado">
<p className="text-xs font-medium mb-1 opacity-80" id="res_label">Resultado Preliminar</p>
<p className="text-3xl font-semibold tracking-tight" id="nota_val"></p>
<p className="mt-1 text-xs font-semibold uppercase tracking-wider" id="nota_status"></p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100" id="asistencia">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16">

<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700">
<iconify-icon icon="solar:user-check-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900">Registro de Asistencia</h3>
</div>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                    La presencia física y participación en el entorno de aprendizaje es un requisito ineludible para la validación del proceso académico.
                </p>
<div className="bg-red-50/40 border border-red-100 p-6 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-red-400"></div>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-red-500 text-lg" icon="solar:danger-circle-linear"></iconify-icon>
<p className="text-red-800 font-semibold text-sm">Umbral Crítico: 75%</p>
</div>
<p className="text-xs text-red-700/80 leading-relaxed ml-7">
                        Una asistencia inferior al 75% del total de horas planificadas resulta en la reprobación automática de la asignatura por faltas, invalidando el promedio de calificaciones.
                    </p>
</div>
</div>

<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900">Tipología de Matrículas</h3>
</div>
<div className="space-y-3">
<div className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors">
<span className="inline-flex shrink-0 items-center justify-center px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 text-[10px] font-semibold tracking-widest uppercase w-fit">
                            Ordinaria
                        </span>
<span className="text-sm text-zinc-600">Ejecutada dentro de los plazos base establecidos en el calendario.</span>
</div>
<div className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors">
<span className="inline-flex shrink-0 items-center justify-center px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 text-[10px] font-semibold tracking-widest uppercase w-fit">
                            Extraordinaria
                        </span>
<span className="text-sm text-zinc-600">Periodo extendido posterior al cierre ordinario (sujeto a recargos).</span>
</div>
<div className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors">
<span className="inline-flex shrink-0 items-center justify-center px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 text-[10px] font-semibold tracking-widest uppercase w-fit">
                            Especial
                        </span>
<span className="text-sm text-zinc-600">Habilitada únicamente para casos excepcionales y debidamente justificados.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6" id="faq">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">Preguntas Frecuentes</h2>
<p className="text-sm text-zinc-500">Resolución rápida a consultas comunes sobre el reglamento.</p>
</div>
<div className="space-y-3">
<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-zinc-900 hover:bg-zinc-50 transition-colors">
<span>¿Cuáles son las implicaciones de reprobar una asignatura?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-sm text-zinc-500 leading-relaxed border-t border-zinc-100 mt-2 bg-zinc-50/30">
                    Deberá ser cursada obligatoriamente en el siguiente periodo académico en que se oferte. Existen normativas restrictivas respecto al número máximo de veces que se puede tomar una misma materia (segundas y terceras matrículas conllevan condiciones especiales).
                </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-zinc-900 hover:bg-zinc-50 transition-colors">
<span>¿Cuál es el procedimiento para la justificación de inasistencias?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-sm text-zinc-500 leading-relaxed border-t border-zinc-100 mt-2 bg-zinc-50/30">
                    Dispone de un plazo estricto (generalmente 48-72 horas hábiles) para ingresar la solicitud mediante los canales oficiales, adjuntando certificados médicos avalados por la red de salud pública o documentación legal en caso de calamidad doméstica.
                </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-zinc-900 hover:bg-zinc-50 transition-colors">
<span>¿Bajo qué condiciones se habilita el examen de recuperación?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-sm text-zinc-500 leading-relaxed border-t border-zinc-100 mt-2 bg-zinc-50/30">
                    Está destinado a estudiantes que no lograron el mínimo de 7.0 puntos pero alcanzaron una base mínima estipulada en su facultad (usualmente entre 4.0 y 6.9). Este examen evalúa la totalidad de los contenidos del periodo.
                </div>
</details>
</div>
</section>

<footer className="border-t border-zinc-200 bg-white py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:book-bookmark-linear"></iconify-icon>
<span className="font-semibold text-sm tracking-tighter text-zinc-400">PORTALACADÉMICO</span>
</div>
<p className="text-xs text-zinc-400">
                Plataforma informativa simplificada. Para normativas completas consulte los documentos oficiales institucionales.
            </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:earth-linear"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
