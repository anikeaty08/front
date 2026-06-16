import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  function nbTab(btn, panelId) {
    document.querySelectorAll('.nb-tab').forEach(function(t){ t.classList.remove('active'); });
    document.querySelectorAll('.nb-panel').forEach(function(p){ p.classList.remove('active'); });
    btn.classList.add('active');
    document.getElementById(panelId).classList.add('active');
  }

  function nbTaller(id) {
    var el = document.getElementById(id);
    el.classList.toggle('open');
  }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="nb-wrap">

<div className="nb-header">
<div className="nb-logo text-[#5c3fbb] text-2xl font-semibold tracking-tighter flex items-center justify-center">UTI</div>
<div className="nb-header-info">
<div className="nb-uni">Universidad Tecnológica Indoamérica · Psicología Clínica</div>
<span className="nb-period">A26</span>
<span className="nb-level">2° Nivel</span>
<div className="nb-title">Neuroanatomía y<br/>Neurofisiología II</div>
<div className="nb-sub">A26-PSCL-2-53106-1643  ·  Presencial · Pregrado</div>
<div className="nb-dates">
<span className="nb-date-chip"><iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon> Inicio: 06 Abr 2026</span>
<span className="nb-date-chip"><iconify-icon icon="solar:flag-linear" strokeWidth="1.5"></iconify-icon> Fin: 27 Sep 2026</span>
</div>
</div>
</div>

<div className="nb-tabs">
<button className="nb-tab active" onclick="nbTab(this,'nb-general')"><iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon> General</button>
<button className="nb-tab" onclick="nbTab(this,'nb-talleres')"><iconify-icon icon="solar:book-linear" strokeWidth="1.5"></iconify-icon> Talleres</button>
<button className="nb-tab" onclick="nbTab(this,'nb-evaluacion')"><iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon> Evaluación</button>
<button className="nb-tab" onclick="nbTab(this,'nb-bibliografia')"><iconify-icon icon="solar:bookmark-circle-linear" strokeWidth="1.5"></iconify-icon> Bibliografía</button>
</div>

<div className="nb-panel active" id="nb-general">
<div className="nb-card">
<div className="nb-card-title"><iconify-icon icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon> Perfil del Docente</div>
<div className="nb-docente">
<div className="nb-avatar">SL</div>
<div>
<div className="nb-doc-name">Stefania del Rocío Llerena Freire</div>
<div className="nb-doc-titles">Psicóloga Clínica · Magíster en Psicología Clínica mención Psicoterapia<br/>Experiencia docente: 3 años</div>
<div className="nb-contacts">
<span className="nb-contact"><iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon> 0992800286</span>
<span className="nb-contact"><iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon> <a href="mailto:stefaniallerena@uti.edu.ec">stefaniallerena@uti.edu.ec</a></span>
</div>
</div>
</div>
</div>
<div className="nb-card">
<div className="nb-card-title"><iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon> Datos del Proyecto Formativo</div>
<div className="nb-info-grid">
<div className="nb-info-item"><div className="nb-info-label">Créditos</div><div className="nb-info-value">2.75</div><div className="nb-info-unit">créditos académicos</div></div>
<div className="nb-info-item"><div className="nb-info-label">Total Horas</div><div className="nb-info-value">132</div><div className="nb-info-unit">horas totales</div></div>
<div className="nb-info-item"><div className="nb-info-label">Nivel</div><div className="nb-info-value">2°</div><div className="nb-info-unit">segundo nivel</div></div>
<div className="nb-info-item"><div className="nb-info-label">Con Docente</div><div className="nb-info-value">72h</div><div className="nb-info-unit">clases asistidas</div></div>
<div className="nb-info-item"><div className="nb-info-label">Autónomo</div><div className="nb-info-value">20h</div><div className="nb-info-unit">aprendizaje</div></div>
<div className="nb-info-item"><div className="nb-info-label">Prácticas</div><div className="nb-info-value">40h</div><div className="nb-info-unit">laboratorio</div></div>
</div>
<div className="nb-bar-wrap"><div className="nb-bar-label"><span>Clases con docente</span><span>72h</span></div><div className="nb-bar-track"><div className="nb-bar-fill nb-bar-purple" style={{width: '54.5%'}}></div></div></div>
<div className="nb-bar-wrap"><div className="nb-bar-label"><span>Aprendizaje autónomo</span><span>20h</span></div><div className="nb-bar-track"><div className="nb-bar-fill nb-bar-mid" style={{width: '15.1%'}}></div></div></div>
<div className="nb-bar-wrap"><div className="nb-bar-label"><span>Prácticas de aplicación</span><span>40h</span></div><div className="nb-bar-track"><div className="nb-bar-fill nb-bar-orange" style={{width: '30.3%'}}></div></div></div>
</div>

<div className="nb-card">
<div className="nb-card-title"><iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon> Horario de Clases y Prácticas</div>
<div className="nb-h-section">
<span style={{background: '#5c3fbb'}}></span>
        Clases asistidas por el docente y aprendizaje colaborativo
      </div>
<div className="nb-h-grid">
<div className="nb-h-item nb-h-purple">
<div className="nb-h-day">Martes</div>
<div className="nb-h-time">10:30 – 11:30</div>
<div className="nb-h-type">Clase con docente</div>
</div>
<div className="nb-h-item nb-h-purple">
<div className="nb-h-day">Martes</div>
<div className="nb-h-time">11:30 – 12:30</div>
<div className="nb-h-type">Clase con docente</div>
</div>
<div className="nb-h-item nb-h-purple">
<div className="nb-h-day">Viernes</div>
<div className="nb-h-time">08:30 – 09:30</div>
<div className="nb-h-type">Clase con docente</div>
</div>
<div className="nb-h-item nb-h-purple">
<div className="nb-h-day">Viernes</div>
<div className="nb-h-time">09:30 – 10:30</div>
<div className="nb-h-type">Clase con docente</div>
</div>
</div>
<div className="nb-h-section" style={{marginTop: '20px'}}>
<span style={{background: '#e8650a'}}></span>
        Prácticas de aplicación y experimentación
      </div>
<div className="nb-h-grid">
<div className="nb-h-item nb-h-orange">
<div className="nb-h-day">Jueves</div>
<div className="nb-h-time">14:30 – 15:30</div>
<div className="nb-h-type">Práctica de aplicación</div>
</div>
<div className="nb-h-item nb-h-orange">
<div className="nb-h-day">Jueves</div>
<div className="nb-h-time">15:30 – 16:30</div>
<div className="nb-h-type">Práctica de aplicación</div>
</div>
</div>
</div>
<div className="nb-card">
<div className="nb-card-title"><iconify-icon icon="solar:target-linear" strokeWidth="1.5"></iconify-icon> Competencias</div>
<div className="nb-comp nb-comp-purple"><div className="nb-comp-label">Competencia específica del proyecto formativo</div>Analiza la organización y funcionamiento del Sistema Nervioso Periférico para fortalecer el desarrollo de la evaluación, diagnóstico e intervención en la salud mental, considerando las bases biológicas de la conducta con ética.</div>
<div className="nb-comp nb-comp-orange"><div className="nb-comp-label">Competencia del perfil de egreso</div>Integra los fundamentos epistemológicos de las diferentes vertientes teóricas de la psicología con los conocimientos prácticos, para el análisis, identificación e intervención en los diferentes campos de aplicación de la Psicología Clínica, promoviendo competencias profesionales y posibilitando el trabajo trans, multi e interdisciplinario.</div>
<div className="nb-comp nb-comp-gold"><div className="nb-comp-label">Competencia genérica</div>Aplica el pensamiento complejo en la resolución de problemas y proyectos para mejorar las condiciones de vida, considerando los retos del entorno y sus procesos de incertidumbre.</div>
</div>
<div className="nb-card">
<div className="nb-card-title"><iconify-icon icon="solar:pin-linear" strokeWidth="1.5"></iconify-icon> Prerrequisito y Correquisitos</div>
<p style={{fontSize: '0.75rem', color: '#6b5aad', fontWeight: '500', marginBottom: '8px'}}>Prerrequisito obligatorio:</p>
<div className="nb-req-grid" style={{marginBottom: '16px'}}>
<div className="nb-req-item nb-req-pre"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Neuroanatomía y Neurofisiología I</div>
</div>
<p style={{fontSize: '0.75rem', color: '#6b5aad', fontWeight: '500', marginBottom: '8px'}}>Correquisitos — cursados en paralelo:</p>
<div className="nb-req-grid">
<div className="nb-req-item"><iconify-icon icon="solar:lightbulb-minimalistic-linear" strokeWidth="1.5"></iconify-icon> Inteligencia Emocional</div>
<div className="nb-req-item"><iconify-icon icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon> Psicofisiología</div>
<div className="nb-req-item"><iconify-icon icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon> Procesos Psicológicos II</div>
<div className="nb-req-item"><iconify-icon icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon> Modelos y Teorías Psicológicas I</div>
<div className="nb-req-item"><iconify-icon icon="solar:chart-linear" strokeWidth="1.5"></iconify-icon> Estadística</div>
<div className="nb-req-item"><iconify-icon icon="solar:pin-linear" strokeWidth="1.5"></iconify-icon> Electiva 2</div>
<div className="nb-req-item"><iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon> Psicología de la Niñez y Adolescencia</div>
<div className="nb-req-item"><iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon> Psicología Social</div>
</div>
</div>
<div className="nb-card nb-card-orange">
<div className="nb-card-title"><iconify-icon icon="solar:flask-linear" strokeWidth="1.5"></iconify-icon> Metodología y Proyecto Final</div>
<p style={{fontSize: '0.875rem', color: '#3a2860', lineHeight: '1.7', marginBottom: '14px'}}>Metodología <strong>basada en problemas</strong> mediante estudio de caso, aprendizaje cooperativo, pensamiento crítico y gamificación. Integración activa de herramientas de <strong style={{color: '#e8650a'}}>IA</strong>: NotebookLM, Gemini, Gamma, Copilot, Canva IA, Orate AI, Prezi IA.</p>
<div className="nb-product"><iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon> Proyecto Final: Compendio de Casos Clínicos — Fundamentos Neuroanatómicos del SNP</div>
<p style={{fontSize: '0.75rem', color: '#6b5aad', lineHeight: '1.6', marginTop: '12px'}}><strong style={{color: '#5c3fbb'}}>Problema central:</strong> Según la PAHO y la OMS (2021), en Ecuador 30 de cada 100 personas sufren algún problema de salud mental. ¿Cómo puede el psicólogo atender de manera integral los diferentes trastornos mentales que aquejan a la población?</p>
</div>
</div>

<div className="nb-panel" id="nb-talleres">

<div className="nb-taller" id="nt1">
<button className="nb-taller-head" onclick="nbTaller('nt1')">
<div className="nb-taller-num">01</div>
<div className="nb-taller-info">
<div className="nb-taller-name">Fibras Nerviosas y Terminaciones Receptoras</div>
<div className="nb-taller-ra">Identifica las estructuras y función básica de las fibras nerviosas y terminaciones receptoras y efectoras mediante análisis de caso clínico</div>
</div>
<span className="nb-taller-arrow"><iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon></span>
</button>
<div className="nb-taller-body">
<div className="nb-product"><iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon> Compendio de Casos Clínicos de Fibras Nerviosas — NeuroCasos con IA</div>
<div className="nb-tags">
<span className="nb-tag-purple">Introducción al módulo</span><span className="nb-tag-purple">Neurona / Sinapsis</span><span className="nb-tag-purple">Fibras nerviosas</span>
<span className="nb-tag-purple">Terminaciones receptoras</span><span className="nb-tag-purple">Terminaciones efectoras</span>
<span className="nb-tag-orange"><iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> NotebookLM</span><span className="nb-tag-orange"><iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> Gemini</span><span className="nb-tag-orange"><iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> Canva IA</span>
</div>
<div className="nb-sessions">
<div className="nb-session"><div className="nb-session-date">07/04/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Bienvenida, inducción del mapa de formación, código de ética y reglamento universitario</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">10/04/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-eva">Evaluación</span>Evaluación diagnóstica</div>
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Proceso de sinapsis</div>
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Lección sobre los tipos de sinapsis</div>
<div className="nb-act"><span className="nb-badge nb-b-pra">Práctica</span>Modelo 3D de sinapsis química y eléctrica</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">14/04/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Nervios periféricos</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">17/04/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Clase magistral: Ganglios y plexos con IA NotebookLM</div>
<div className="nb-act"><span className="nb-badge nb-b-pra">Práctica</span>Mapa de ganglios y plexos</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">21/04/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Fibras nerviosas mielínicas y amielínicas con IA Gemini</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">24/04/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Terminaciones receptoras — Generalidades, clasificación y encapsuladas</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">28/04/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Terminaciones receptoras no encapsuladas</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">05/05/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Exposición: Terminaciones receptoras articulares y husos neuromusculares</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">08/05/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Terminaciones efectoras — Inervación del músculo esquelético</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">12/05/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Inervación del músculo liso y cardíaco con IA Canva</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">15/05/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Inervación segmentaria de la piel y los músculos</div>
<div className="nb-act"><span className="nb-badge nb-b-aut">Autónoma</span>Video resumen con NotebookLM: bases neuroanatómicas del SNP — receptores, vías y efectores</div>
<div className="nb-act"><span className="nb-badge nb-b-pra">Práctica</span>Exploración de terminaciones receptoras y efectoras</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">19/05/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Mesa redonda: Correlaciones clínicas de terminaciones receptoras y efectoras</div>
<div className="nb-act"><span className="nb-badge nb-b-pra">Práctica</span>Compendio de casos clínicos: Fibras nerviosas y terminaciones — NeuroCasos con IA</div>
</div></div>
</div>
</div>
</div>

<div className="nb-taller" id="nt2">
<button className="nb-taller-head" onclick="nbTaller('nt2')">
<div className="nb-taller-num">02</div>
<div className="nb-taller-info">
<div className="nb-taller-name">Nervios Craneales</div>
<div className="nb-taller-ra">Relaciona las estructuras y funciones con las conexiones centrales de los nervios craneales mediante el estudio de casos clínicos</div>
</div>
<span className="nb-taller-arrow"><iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon></span>
</button>
<div className="nb-taller-body">
<div className="nb-product"><iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon> Compendio de Casos Clínicos de Nervios Craneales — De la Función a la Disfunción</div>
<div className="nb-tags">
<span className="nb-tag-purple">I Olfatorio</span><span className="nb-tag-purple">II Óptico</span><span className="nb-tag-purple">III-IV Oculomotor/Troclear</span>
<span className="nb-tag-purple">V Trigémino</span><span className="nb-tag-purple">VI Abducens</span><span className="nb-tag-purple">VII Facial</span>
<span className="nb-tag-purple">VIII Vestibulococlear</span><span className="nb-tag-purple">IX Glosofaríngeo</span>
<span className="nb-tag-purple">X Vago</span><span className="nb-tag-purple">XI Accesorio</span><span className="nb-tag-purple">XII Hipogloso</span>
<span className="nb-tag-orange"><iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> Gemini</span><span className="nb-tag-orange"><iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> Gamma</span><span className="nb-tag-orange"><iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> Copilot</span><span className="nb-tag-orange"><iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> Orate AI</span><span className="nb-tag-orange"><iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> NotebookLM</span>
</div>
<div className="nb-sessions">
<div className="nb-session"><div className="nb-session-date">22/05/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Generalidades y organización de nervios craneales — Par I: Olfatorio (IA Gemini)</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">26/05/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Par II — Nervio óptico (núcleos, componentes, recorrido, alteraciones)</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">29/05/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Pares III y IV — Nervio oculomotor y troclear con IA Gamma</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">02/06/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Par V — Nervio trigémino con IA Gamma (componentes, recorrido, núcleos, alteraciones)</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">05/06/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-eva">Evaluación</span><iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon> Evaluación del Primer Parcial</div>
<div className="nb-act"><span className="nb-badge nb-b-pra">Práctica</span>Exploración de pares craneales: Olfatorio, Óptico, Oculomotor, Troclear</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">09/06/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Exposición estudiantil: Par VI — Nervio abducens con IA Gemini</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">12/06/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Par VII — Nervio facial (componentes, recorrido, núcleos, alteraciones)</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">16/06/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Par VIII — Nervio vestibulococlear con IA Copilot</div>
<div className="nb-act"><span className="nb-badge nb-b-pra">Práctica</span>Exploración de pares craneales: Trigémino, Abducens, Facial, Vestibulococlear</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">19/06/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Par IX — Nervio glosofaríngeo (componentes, recorrido, núcleos, alteraciones)</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">23/06/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Par X — Nervio vago con IA Gamma</div>
<div className="nb-act"><span className="nb-badge nb-b-aut">Autónoma</span>Video animado: NeuroAvatar — Los 12 pares craneales en acción</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">26/06/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Par XI — Nervio accesorio con Orate AI</div>
<div className="nb-act"><span className="nb-badge nb-b-pra">Práctica</span>Exploración de pares craneales: Glosofaríngeo, Vago, Accesorio e Hipogloso</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">30/06/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Par XII — Nervio hipogloso con Orate AI</div>
<div className="nb-act"><span className="nb-badge nb-b-pra">Práctica</span>Compendio de casos clínicos de pares craneales con NotebookLM</div>
</div></div>
</div>
</div>
</div>

<div className="nb-taller" id="nt3">
<button className="nb-taller-head" onclick="nbTaller('nt3')">
<div className="nb-taller-num">03</div>
<div className="nb-taller-info">
<div className="nb-taller-name">Médula Espinal: Estructura y Funciones</div>
<div className="nb-taller-ra">Examina la organización estructural de la médula espinal y las funciones que realiza en el ser humano mediante análisis de caso clínico</div>
</div>
<span className="nb-taller-arrow"><iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon></span>
</button>
<div className="nb-taller-body">
<div className="nb-product"><iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon> Compendio de Casos Clínicos: Arquitectura Funcional de la Médula Espinal con IA</div>
<div className="nb-tags">
<span className="nb-tag-purple">Generalidades ME</span><span className="nb-tag-purple">Sustancia gris</span><span className="nb-tag-purple">Sustancia blanca</span>
<span className="nb-tag-purple">Tractos ascendentes</span><span className="nb-tag-purple">Tractos descendentes</span><span className="nb-tag-purple">Correlaciones clínicas</span>
<span className="nb-tag-orange"><iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> Orate AI</span><span className="nb-tag-orange"><iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> Gemini</span><span className="nb-tag-orange"><iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> Prezi IA</span>
</div>
<div className="nb-sessions">
<div className="nb-session"><div className="nb-session-date">03/07/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Generalidades de la médula espinal — Funciones y meninges con Orate AI</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">07/07/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Vascularización de la médula espinal</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">10/07/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Nervios espinales con uso de Prezi IA</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">14/07/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Estructura de la médula espinal — Sustancia gris con Orate AI</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">17/07/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Clase magistral: Sustancia blanca con IA Gemini</div>
<div className="nb-act"><span className="nb-badge nb-b-pra">Práctica</span>Modelo 3D de la médula espinal</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">21/07/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Exposición estudiantil: Tractos ascendentes — Vías posteriores, espinotalámicos, espinocerebelosos</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">24/07/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Exposición estudiantil: Tractos ascendentes — Espinotectal, espinorreticular, espino-olivar con Orate AI</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">28/07/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Exposición estudiantil: Tractos descendentes — Corticoespinal, corticobulbar, espinorreticular con Orate AI</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">31/07/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Exposición estudiantil: Tractos descendentes — Tectoespinal, rubroespinal, vestibuloespinal con Orate AI</div>
<div className="nb-act"><span className="nb-badge nb-b-aut">Autónoma</span>Página web de la médula espinal: estructuras internas y externas</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">04/08/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-doc">Docente</span>Conferencia: Alteraciones de la médula espinal</div>
<div className="nb-act"><span className="nb-badge nb-b-pra">Práctica</span>Compendio de casos clínicos con IA: Arquitectura funcional de la médula espinal</div>
</div></div>
<div className="nb-session"><div className="nb-session-date">07/08/2026</div><div className="nb-session-acts">
<div className="nb-act"><span className="nb-badge nb-b-eva">Evaluación</span><iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon> Examen Final</div>
</div></div>
</div>
</div>
</div>
</div>

<div className="nb-panel" id="nb-evaluacion">
<div className="nb-card">
<div className="nb-card-title"><iconify-icon icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon> Rúbricas de Evaluación — Compendio de Casos Clínicos</div>
<p style={{fontSize: '0.75rem', color: '#6b5aad', marginBottom: '20px'}}>Los talleres 1 y 2 se evalúan con <strong>4 indicadores</strong>. El Taller 3 y el Proyecto Final incorporan indicador adicional de <strong>Impresión diagnóstica</strong> con ponderación completa.</p>
<div className="nb-rub-title">Talleres 1 y 2 — Indicadores comunes (8 pts)</div>
<table className="nb-table">
<thead><tr><th>Indicador</th><th>Deficiente</th><th>Regular</th><th>Bueno</th><th>Muy Bueno</th><th>Excelente</th></tr></thead>
<tbody>
<tr>
<td>Organización y Contenido<span className="nb-pts">(2 pts)</span></td>
<td>Sin organización alguna<span className="nb-pts">0.20</span></td>
<td>Incompleto, no cumple requisitos<span className="nb-pts">0.50</span></td>
<td>Parcial, poca organización<span className="nb-pts">0.70</span></td>
<td>Con secuencia, cumple parcialmente<span className="nb-pts">1.50</span></td>
<td className="exc">Parcial con poca organización<span className="nb-pts">0.70</span></td>
</tr>
<tr>
<td>Signos y síntomas<span className="nb-pts">(4 pts)</span></td>
<td>Poca precisión, sin info del paciente<span className="nb-pts">0.50</span></td>
<td>Algunos, info poco relevante<span className="nb-pts">0.70</span></td>
<td>Categorizo sin toda la info<span className="nb-pts">1.50</span></td>
<td>Analizo considerando partes<span className="nb-pts">3.00</span></td>
<td className="exc">Categorizo sin toda la info relevante<span className="nb-pts">1.50</span></td>
</tr>
<tr>
<td>Creatividad<span className="nb-pts">(1 pt)</span></td>
<td>Sin citas, no sujeta al tema<span className="nb-pts">0.10</span></td>
<td>Simple, carente de novedad<span className="nb-pts">0.25</span></td>
<td>Ideas típicas, poco novedosas<span className="nb-pts">0.50</span></td>
<td>Novedoso y práctico<span className="nb-pts">0.75</span></td>
<td className="exc">Ideas típicas, poco novedosas<span className="nb-pts">0.50</span></td>
</tr>
<tr>
<td>Uso crítico de IA<span className="nb-pts">(1 pt)</span></td>
<td>Sin análisis propio<span className="nb-pts">0.20</span></td>
<td>Escasas modificaciones<span className="nb-pts">0.50</span></td>
<td>Correcciones básicas con criterio<span className="nb-pts">0.70</span></td>
<td>Argumenta limitaciones IA<span className="nb-pts">0.80</span></td>
<td className="exc">Correcciones básicas fundamentadas<span className="nb-pts">0.70</span></td>
</tr>
</tbody>
</table>
<div className="nb-rub-title">Taller 3 — Indicadores (8 pts, sin impresión diagnóstica en parciales)</div>
<table className="nb-table">
<thead><tr><th>Indicador</th><th>Deficiente</th><th>Regular</th><th>Bueno</th><th>Muy Bueno</th><th>Excelente</th></tr></thead>
<tbody>
<tr>
<td>Organización y Contenido<span className="nb-pts">(2 pts)</span></td>
<td>Sin organización<span className="nb-pts">0.20</span></td>
<td>Incompleto<span className="nb-pts">0.50</span></td>
<td>Parcial<span className="nb-pts">0.70</span></td>
<td>Con secuencia, cumple parcialmente<span className="nb-pts">1.50</span></td>
<td className="exc">Parcial con poca organización<span className="nb-pts">0.70</span></td>
</tr>
<tr>
<td>Signos y síntomas<span className="nb-pts">(4 pts)</span></td>
<td>Poca precisión<span className="nb-pts">0.50</span></td>
<td>Algunos, poco relevante<span className="nb-pts">0.70</span></td>
<td>Categorizo, falta info<span className="nb-pts">1.50</span></td>
<td>Analizo partes de la información<span className="nb-pts">3.00</span></td>
<td className="exc">Categorizo sin toda la info<span className="nb-pts">1.50</span></td>
</tr>
<tr>
<td>Creatividad<span className="nb-pts">(1 pt)</span></td>
<td>Sin citas<span className="nb-pts">0.10</span></td>
<td>Simple<span className="nb-pts">0.25</span></td>
<td>Ideas típicas<span className="nb-pts">0.50</span></td>
<td>Novedoso y práctico<span className="nb-pts">0.75</span></td>
<td className="exc">Ideas típicas<span className="nb-pts">0.50</span></td>
</tr>
<tr>
<td>Uso crítico de IA<span className="nb-pts">(1 pt)</span></td>
<td>Sin análisis<span className="nb-pts">0.20</span></td>
<td>Escasas modificaciones<span className="nb-pts">0.50</span></td>
<td>Correcciones mínimas<span className="nb-pts">0.70</span></td>
<td>Argumenta limitaciones<span className="nb-pts">0.80</span></td>
<td className="exc">Correcciones fundamentadas<span className="nb-pts">0.70</span></td>
</tr>
</tbody>
</table>
<div className="nb-rub-title">Proyecto Final — Ponderación máxima (10 pts)</div>
<table className="nb-table">
<thead><tr><th>Indicador</th><th>Deficiente</th><th>Regular</th><th>Bueno</th><th>Muy Bueno</th><th>Excelente</th></tr></thead>
<tbody>
<tr>
<td>Organización y Contenido<span className="nb-pts">(2 pts)</span></td>
<td>Sin organización<span className="nb-pts">0.20</span></td>
<td>Incompleto<span className="nb-pts">0.50</span></td>
<td>Parcial<span className="nb-pts">0.70</span></td>
<td>Con secuencia, cumple parcialmente<span className="nb-pts">1.50</span></td>
<td className="exc">Compendio completo, secuencia clara, todos los requisitos<span className="nb-pts">2.00</span></td>
</tr>
<tr>
<td>Signos y síntomas<span className="nb-pts">(4 pts)</span></td>
<td>Poca precisión<span className="nb-pts">0.50</span></td>
<td>Algunos, poco relevante<span className="nb-pts">0.70</span></td>
<td>Categorizo, falta info<span className="nb-pts">1.50</span></td>
<td>Analizo partes de la información<span className="nb-pts">3.00</span></td>
<td className="exc">Vinculo con claridad y precisión toda la información<span className="nb-pts">4.00</span></td>
</tr>
<tr>
<td>Impresión diagnóstica<span className="nb-pts">(2 pts)</span></td>
<td>No responde, sin sustento<span className="nb-pts">0.20</span></td>
<td>Parcial<span className="nb-pts">0.50</span></td>
<td>Básica, sustentada parcialmente<span className="nb-pts">0.70</span></td>
<td>Pertinente, sustentada en Neurociencias, contexto total<span className="nb-pts">1.50</span></td>
<td className="exc">Pertinente, responsabilidad social, contexto completo<span className="nb-pts">2.00</span></td>
</tr>
<tr>
<td>Creatividad<span className="nb-pts">(1 pt)</span></td>
<td>Sin citas<span className="nb-pts">0.10</span></td>
<td>Simple<span className="nb-pts">0.25</span></td>
<td>Ideas típicas<span className="nb-pts">0.50</span></td>
<td>Novedoso y práctico<span className="nb-pts">0.75</span></td>
<td className="exc">Ideas propias, socioformación y sostenibilidad<span className="nb-pts">1.00</span></td>
</tr>
<tr>
<td>Uso crítico de IA<span className="nb-pts">(1 pt)</span></td>
<td>Sin análisis<span className="nb-pts">0.20</span></td>
<td>Escasas modificaciones<span className="nb-pts">0.50</span></td>
<td>Correcciones mínimas<span className="nb-pts">0.70</span></td>
<td>Argumenta limitaciones<span className="nb-pts">0.80</span></td>
<td className="exc">Supera creativamente la IA con argumentos bibliográficos<span className="nb-pts">1.00</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="nb-panel" id="nb-bibliografia">
<div className="nb-card">
<div className="nb-card-title"><iconify-icon icon="solar:book-linear" strokeWidth="1.5"></iconify-icon> Fuentes Bibliográficas</div>
<div className="nb-bib"><span className="nb-bib-badge nb-bib-bas">Básica</span><div className="nb-bib-info"><div className="nb-bib-title">Módulo Didáctico: Neuroanatomía</div><div className="nb-bib-author">Castaño Ramírez, S. M.</div><div className="nb-bib-meta"><span>Institución Universitaria de Envigado</span><span>2023</span></div><a className="nb-bib-link" href="https://elibro.net/es/lc/utiec/titulos/283204" target="_blank"><iconify-icon icon="solar:link-linear" strokeWidth="1.5"></iconify-icon> Acceder al recurso</a></div></div>
<div className="nb-bib"><span className="nb-bib-badge nb-bib-bas">Básica</span><div className="nb-bib-info"><div className="nb-bib-title">Neuroanatomía: Fundamentos para Estudiantes de Ciencias de la Salud</div><div className="nb-bib-author">Suazo Galdames, Iván</div><div className="nb-bib-meta"><span>RIL Editores</span><span>2021</span></div><a className="nb-bib-link" href="https://elibro.net/es/lc/utiec/titulos/226456" target="_blank"><iconify-icon icon="solar:link-linear" strokeWidth="1.5"></iconify-icon> Acceder al recurso</a></div></div>
<div className="nb-bib"><span className="nb-bib-badge nb-bib-bas">Básica</span><div className="nb-bib-info"><div className="nb-bib-title">Psicofisiología</div><div className="nb-bib-author">Labre, Verónica · Pérez, Doris</div><div className="nb-bib-meta"><span>Ediciones Indoamérica Digital</span><span>2023</span></div><a className="nb-bib-link" href="https://online.fliphtml5.com/nunmm/oizs/#p=1" target="_blank"><iconify-icon icon="solar:link-linear" strokeWidth="1.5"></iconify-icon> Acceder al recurso</a></div></div>
<div className="nb-bib"><span className="nb-bib-badge nb-bib-bas">Básica</span><div className="nb-bib-info"><div className="nb-bib-title">Overview of CNS Tumors in Children</div><div className="nb-bib-author">Philippa G. y Scott A.</div><div className="nb-bib-meta"><span>DynaMed</span><span>2025</span></div><a className="nb-bib-link" href="https://www-clinicalkeyes.indoamerica.idm.oclc.org/#!/content/clinical_overview/67-s2.0-T1601302374" target="_blank"><iconify-icon icon="solar:link-linear" strokeWidth="1.5"></iconify-icon> Acceder al recurso</a></div></div>
<div className="nb-bib"><span className="nb-bib-badge nb-bib-bas">Básica</span><div className="nb-bib-info"><div className="nb-bib-title">Selenium and Brain Aging: A Comprehensive Review with a Focus on Hippocampal Neurogenesis</div><div className="nb-bib-author">Daneshpour A., Nastarino M., Wagner K. et al.</div><div className="nb-bib-meta"><span>Ageing Research Reviews</span><span>2025</span></div><a className="nb-bib-link" href="https://www-clinicalkeyes.indoamerica.idm.oclc.org/#!/content/journal/1-s2.0-S1568163725002442" target="_blank"><iconify-icon icon="solar:link-linear" strokeWidth="1.5"></iconify-icon> Acceder al recurso</a></div></div>
<div className="nb-bib"><span className="nb-bib-badge nb-bib-bas">Básica</span><div className="nb-bib-info"><div className="nb-bib-title">Neuropsychological Analysis in a Case of Global Aphasia</div><div className="nb-bib-author">Ramos-Galarza, Carlos · Gaibor-Estévez, Jhonny</div><div className="nb-bib-meta"><span>Revista Ecuatoriana de Neurología</span><span>2023</span></div><a className="nb-bib-link" href="https://repositorio.uti.edu.ec/items/a6caf2df-a6a3-4a10-9511-6e73de6b6133" target="_blank"><iconify-icon icon="solar:link-linear" strokeWidth="1.5"></iconify-icon> Acceder al recurso</a></div></div>
<div className="nb-bib"><span className="nb-bib-badge nb-bib-bas">Básica</span><div className="nb-bib-info"><div className="nb-bib-title">Doble Excepcionalidad: Altas Capacidades y Trastornos del Neurodesarrollo</div><div className="nb-bib-author">Vélez-Calvo X., Calle-Calle V., Seade-Mejía C., Peñaherrera-Vélez M. J.</div><div className="nb-bib-meta"><span>Revista CienciaAmérica</span><span>2023</span></div><a className="nb-bib-link" href="https://cienciamerica.edu.ec/index.php/uti/article/view/393" target="_blank"><iconify-icon icon="solar:link-linear" strokeWidth="1.5"></iconify-icon> Acceder al recurso</a></div></div>
<div className="nb-bib"><span className="nb-bib-badge nb-bib-bas">Básica</span><div className="nb-bib-info"><div className="nb-bib-title">Introducción a las Neurociencias (1ª ed.)</div><div className="nb-bib-author">Frausto Rojas, M.</div><div className="nb-bib-meta"><span>Editorial Terracota</span><span>2022</span></div></div></div>
<div className="nb-bib"><span className="nb-bib-badge nb-bib-com">Complementaria</span><div className="nb-bib-info"><div className="nb-bib-title">Biopsicología</div><div className="nb-bib-author">Pinel, John</div><div className="nb-bib-meta"><span>Pearson</span><span>2012</span><span>Físico · Cód. 8912</span></div></div></div>
<div className="nb-bib"><span className="nb-bib-badge nb-bib-com">Complementaria</span><div className="nb-bib-info"><div className="nb-bib-title">Neuroanatomía Clínica</div><div className="nb-bib-author">Snell, Richard</div><div className="nb-bib-meta"><span>Wolters Kluwer</span><span>2014</span><span>Físico · Cód. 5341</span></div></div></div>
<div className="nb-bib"><span className="nb-bib-badge nb-bib-com">Complementaria</span><div className="nb-bib-info"><div className="nb-bib-title">Prácticas de Laboratorio. Módulo 1: Bases Psicobiológicas</div><div className="nb-bib-author">Ríos Cruz, S. G.</div><div className="nb-bib-meta"><span>Universidad Católica de Colombia</span><span>2022</span></div><a className="nb-bib-link" href="https://elibro.net/es/ereader/utiec/256892?page=1" target="_blank"><iconify-icon icon="solar:link-linear" strokeWidth="1.5"></iconify-icon> Acceder al recurso</a></div></div>
</div>
</div>
<div className="nb-footer">
<div className="logo-placeholder tracking-tighter text-xl font-semibold flex items-center justify-center">UTI</div>
    Universidad Tecnológica Indoamérica · Facultad de Ciencias Sociales y Humanas · Período A26<br/>
    Docente: Stefania del Rocío Llerena Freire · Coordinadora: Gabriela Lorena Abril Lucero
  </div>
</div>


    </>
  );
}
