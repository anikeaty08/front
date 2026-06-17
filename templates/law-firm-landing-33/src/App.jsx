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
      

<nav className="glass-nav fixed w-full z-50 top-0 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-serif italic font-semibold text-lg">J</span>
</div>
<span className="text-slate-900 font-semibold tracking-tight text-lg">JUSTICIA &amp; ESTRATEGIA</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#inicio">Inicio</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#nosotros">Quiénes Somos</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#areas">Áreas de Práctica</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#equipo">Equipo</a>
<a className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all shadow-sm hover:shadow-md flex items-center gap-2" href="#contacto">
<span>Consulta Gratuita</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-900 hover:text-slate-600 focus:outline-none">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="inicio">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-700 tracking-wide uppercase">Disponibles 24/7 en Santiago</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Defensa Penal experta para proteger tus derechos y libertad.
                </h1>
<p className="text-lg text-slate-500 mb-8 max-w-2xl leading-relaxed">
                    Representación legal estratégica y ética en situaciones críticas. Especialistas en delitos económicos, defensa corporativa y litigación compleja en Chile.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-6 py-3.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20" href="#contacto">
                        Hablar con un Abogado
                    </a>
<a className="inline-flex justify-center items-center px-6 py-3.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all hover:border-slate-300" href="https://wa.me/56900000000">
<iconify-icon className="mr-2" icon="lucide:message-circle" strokeWidth="1.5" width="18"></iconify-icon>
                        WhatsApp Urgente
                    </a>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-[0.03] pointer-events-none hidden lg:block">
<svg className="w-full h-full fill-slate-900" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 0 L100 0 L100 100 L50 100 Q0 100 0 50 Z"></path>
</svg>
</div>
</section>

<div className="border-y border-slate-200 bg-white/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Reconocimientos y Prensa</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">

<div className="flex items-center gap-2 font-serif font-bold text-xl text-slate-800">EL MERCURIO</div>
<div className="flex items-center gap-2 font-sans font-black text-xl text-slate-800 tracking-tighter">LA TERCERA</div>
<div className="flex items-center gap-2 font-serif font-semibold text-xl text-slate-800">DiarioConstitucional</div>
<div className="flex items-center gap-2 font-mono font-bold text-xl text-slate-800">CNN CHILE</div>
</div>
</div>
</div>

<section className="py-24 bg-white" id="nosotros">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Excelencia jurídica con enfoque humano.</h2>
<div className="space-y-4 text-slate-600 leading-relaxed">
<p>
                            En <span className="font-medium text-slate-900">Justicia &amp; Estrategia</span>, entendemos que enfrentar un proceso penal es una de las situaciones más estresantes en la vida de una persona. Nuestra misión es brindar una defensa técnica impecable, combinada con una contención real para nuestros clientes.
                        </p>
<p>
                            Con sede en Santiago y alcance nacional, nuestro equipo de ex fiscales y defensores públicos combina décadas de experiencia en el sistema procesal penal chileno. No solo conocemos la ley; conocemos a los jueces, los fiscales y las estrategias que funcionan.
                        </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-6">
<div className="border-l-2 border-slate-900 pl-4">
<span className="block text-3xl font-semibold text-slate-900 tracking-tight">+15</span>
<span className="text-sm text-slate-500">Años de experiencia</span>
</div>
<div className="border-l-2 border-slate-900 pl-4">
<span className="block text-3xl font-semibold text-slate-900 tracking-tight">98%</span>
<span className="text-sm text-slate-500">Casos favorables</span>
</div>
</div>
</div>
<div className="relative h-96 lg:h-auto bg-slate-100 rounded-2xl overflow-hidden">

<div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
<iconify-icon icon="lucide:scale" strokeWidth="1" width="64"></iconify-icon>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="areas">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Áreas de Práctica</h2>
<p className="text-slate-600">Especialización focalizada para garantizar la mejor defensa técnica posible en tribunales de garantía y orales.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:briefcase" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Delitos Económicos</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Defensa en casos de fraude, estafa, apropiación indebida y delitos tributarios. Asesoría preventiva para empresas (Compliance).</p>
<a className="text-sm font-medium text-slate-900 hover:text-slate-700 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Saber más <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>

<div className="group p-8 bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:shield-alert" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Delitos Violentos</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Representación experta en homicidios, lesiones graves y robos. Estrategias de defensa basadas en peritajes forenses.</p>
<a className="text-sm font-medium text-slate-900 hover:text-slate-700 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Saber más <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>

<div className="group p-8 bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:lock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Ley 20.000 (Drogas)</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Defensa especializada en infracciones a la ley de drogas. Cuestionamiento de pruebas y legalidad de detenciones.</p>
<a className="text-sm font-medium text-slate-900 hover:text-slate-700 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Saber más <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>

<div className="group p-8 bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Delitos Sexuales</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Manejo confidencial y riguroso. Análisis de peritajes psicológicos y declaraciones. Protección de la presunción de inocencia.</p>
<a className="text-sm font-medium text-slate-900 hover:text-slate-700 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Saber más <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>

<div className="group p-8 bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:monitor" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Ciberdelitos</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Sabotaje informático, espionaje y delitos contra la privacidad. Litigación con evidencia digital compleja.</p>
<a className="text-sm font-medium text-slate-900 hover:text-slate-700 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Saber más <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>

<div className="group p-8 bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:file-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Recursos de Nulidad</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Instancias superiores ante Cortes de Apelaciones y Corte Suprema para revertir sentencias injustas.</p>
<a className="text-sm font-medium text-slate-900 hover:text-slate-700 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Saber más <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="equipo">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Nuestro Equipo</h2>
<p className="text-slate-600">Abogados litigantes con trayectorias destacadas en el Ministerio Público y la Defensoría Penal.</p>
</div>
<a className="hidden md:inline-flex items-center text-sm font-medium text-slate-900 border-b border-slate-300 hover:border-slate-900 pb-0.5 transition-colors" href="#">Ver todos los perfiles</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="flex flex-col">
<div className="bg-slate-100 rounded-xl aspect-[4/5] mb-4 relative overflow-hidden group">

<div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
<iconify-icon icon="lucide:user" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Dr. Ricardo Silva</h3>
<p className="text-sm font-medium text-slate-500 mb-2">Socio Fundador</p>
<p className="text-sm text-slate-500 leading-relaxed">Magíster en Derecho Penal, Universidad de Chile. Ex Fiscal con más de 15 años de experiencia en delitos de alta complejidad.</p>
</div>

<div className="flex flex-col">
<div className="bg-slate-100 rounded-xl aspect-[4/5] mb-4 relative overflow-hidden group">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
<iconify-icon icon="lucide:user" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Dra. Camila Vargas</h3>
<p className="text-sm font-medium text-slate-500 mb-2">Socia Área Litigación</p>
<p className="text-sm text-slate-500 leading-relaxed">Especialista en responsabilidad penal adolescente y delitos sexuales. Destacada por su capacidad estratégica en juicios orales.</p>
</div>

<div className="flex flex-col">
<div className="bg-slate-100 rounded-xl aspect-[4/5] mb-4 relative overflow-hidden group">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
<iconify-icon icon="lucide:user" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Dr. Felipe Morandé</h3>
<p className="text-sm font-medium text-slate-500 mb-2">Asociado Senior</p>
<p className="text-sm text-slate-500 leading-relaxed">Diplomado en Criminología. Experto en recursos de nulidad ante la Corte Suprema y Tribunal Constitucional.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center gap-2 mb-8 text-slate-400">
<iconify-icon icon="lucide:quote" width="24"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-widest">Testimonios</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<blockquote className="space-y-6">
<p className="text-xl md:text-2xl font-medium leading-relaxed text-slate-100">"En un momento crítico para mi familia, el equipo demostró un profesionalismo absoluto. Lograron probar mi inocencia en un caso muy complejo. Su comunicación fue siempre clara y honesta."</p>
<footer className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs">JP</div>
<div>
<cite className="not-italic font-semibold text-white block">Jorge P.</cite>
<span className="text-sm text-slate-400">Caso Delitos Económicos</span>
</div>
</footer>
</blockquote>
<blockquote className="space-y-6 hidden md:block">
<p className="text-xl md:text-2xl font-medium leading-relaxed text-slate-100">"Excelente capacidad de respuesta. Me explicaron cada paso del proceso legal y lograron una salida alternativa que protegió mis antecedentes. Totalmente recomendados."</p>
<footer className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs">MV</div>
<div>
<cite className="not-italic font-semibold text-white block">María V.</cite>
<span className="text-sm text-slate-400">Caso Ley de Tránsito</span>
</div>
</footer>
</blockquote>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12">Actualidad Legal y Consejos</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<article className="flex flex-col group cursor-pointer">
<div className="bg-white rounded-xl overflow-hidden mb-4 border border-slate-200 aspect-video shadow-sm">
<div className="w-full h-full bg-slate-100 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<span className="text-xs font-semibold text-emerald-600 mb-2 uppercase tracking-wide">Consejos Legales</span>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">¿Qué hacer ante una detención policial?</h3>
<p className="text-sm text-slate-500 line-clamp-3">Guía práctica sobre tus derechos fundamentales al momento de ser detenido por Carabineros o PDI. La importancia de guardar silencio.</p>
</article>
<article className="flex flex-col group cursor-pointer">
<div className="bg-white rounded-xl overflow-hidden mb-4 border border-slate-200 aspect-video shadow-sm">
<div className="w-full h-full bg-slate-100 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<span className="text-xs font-semibold text-emerald-600 mb-2 uppercase tracking-wide">Reformas</span>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">Nueva Ley de Delitos Económicos en Chile</h3>
<p className="text-sm text-slate-500 line-clamp-3">Análisis de los cambios recientes en la legislación penal para empresas y altos ejecutivos. Impacto en la responsabilidad penal jurídica.</p>
</article>
<article className="flex flex-col group cursor-pointer">
<div className="bg-white rounded-xl overflow-hidden mb-4 border border-slate-200 aspect-video shadow-sm">
<div className="w-full h-full bg-slate-100 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<span className="text-xs font-semibold text-emerald-600 mb-2 uppercase tracking-wide">Casos de Éxito</span>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">Absolución en juicio oral por falta de pruebas</h3>
<p className="text-sm text-slate-500 line-clamp-3">Cómo nuestra firma logró desacreditar la evidencia de la fiscalía en un caso de alta connotación pública.</p>
</article>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contacto">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Agenda una consulta inicial</h2>
<p className="text-slate-600 mb-10">Evaluamos tu caso con estricta confidencialidad. Contáctanos hoy mismo para diseñar tu estrategia de defensa.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Oficina Santiago</h4>
<p className="text-sm text-slate-500">Av. Apoquindo 4000, Oficina 1205<br/>Las Condes, Santiago, Chile</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Teléfono &amp; Emergencias</h4>
<p className="text-sm text-slate-500">+56 2 2999 9999<br/>+56 9 8888 8888 (24/7)</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Correo Electrónico</h4>
<p className="text-sm text-slate-500">contacto@justiciaestrategia.cl</p>
</div>
</div>
</div>

<div className="mt-10 w-full h-48 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 relative">
<div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm font-medium">
<span className="flex items-center gap-2"><iconify-icon icon="lucide:map" width="16"></iconify-icon> Mapa de Google</span>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="name">Nombre Completo</label>
<input className="custom-input w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm placeholder:text-slate-400 outline-none" id="name" placeholder="Juan Pérez" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="phone">Teléfono</label>
<input className="custom-input w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm placeholder:text-slate-400 outline-none" id="phone" placeholder="+56 9..." type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="email">Email</label>
<input className="custom-input w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm placeholder:text-slate-400 outline-none" id="email" placeholder="nombre@correo.cl" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="materia">Materia</label>
<div className="relative">
<select className="custom-input w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-700 outline-none appearance-none" id="materia">
<option>Delito Económico</option>
<option>Delito Violento</option>
<option>Ley de Drogas</option>
<option>Citación Fiscalía</option>
<option>Otro</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="message">Breve descripción del caso</label>
<textarea className="custom-input w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm placeholder:text-slate-400 outline-none resize-none" id="message" placeholder="Cuéntenos brevemente su situación..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3.5 rounded-lg hover:bg-slate-800 transition-all shadow-sm flex justify-center items-center gap-2" type="button">
                            Enviar Mensaje <iconify-icon icon="lucide:send" width="16"></iconify-icon>
</button>
<p className="text-xs text-center text-slate-400 mt-4">Respondemos usualmente en menos de 2 horas.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-white font-semibold tracking-tight text-lg block mb-4">JUSTICIA &amp; ESTRATEGIA</span>
<p className="text-sm leading-relaxed">Defensa penal de excelencia en Santiago de Chile. Compromiso ético y rigor técnico.</p>
</div>
<div>
<h5 className="text-white font-medium mb-4">Servicios</h5>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Delitos Económicos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Defensa Penal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Recursos de Amparo</a></li>
<li><a className="hover:text-white transition-colors" href="#">Compliance</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Firma</h5>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#nosotros">Quiénes Somos</a></li>
<li><a className="hover:text-white transition-colors" href="#equipo">Equipo</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog Legal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Prensa</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Legal</h5>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Política de Privacidad</a></li>
<li><a className="hover:text-white transition-colors" href="#">Términos de Uso</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
<p>© 2023 Justicia &amp; Estrategia SpA. Todos los derechos reservados.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-110 flex items-center justify-center" href="https://wa.me/56900000000">
<iconify-icon icon="lucide:message-circle" strokeWidth="2" width="28"></iconify-icon>
</a>

    </>
  );
}
