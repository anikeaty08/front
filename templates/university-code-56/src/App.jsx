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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function showTab(tabId) {
            const sections = document.querySelectorAll('.content-section');
            const buttons = document.querySelectorAll('.tab-btn');
            
            sections.forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('animate-fade-in');
            });
            
            buttons.forEach(btn => {
                btn.classList.remove('border-blue-600', 'text-blue-600');
                btn.classList.add('border-transparent', 'text-gray-500');
            });
            
            const selectedSection = document.getElementById('tab-' + tabId);
            selectedSection.classList.remove('hidden');
            
            // Trigger reflow to restart animation
            void selectedSection.offsetWidth;
            selectedSection.classList.add('animate-fade-in');
            
            const selectedBtn = document.getElementById('btn-' + tabId);
            selectedBtn.classList.remove('border-transparent', 'text-gray-500');
            selectedBtn.classList.add('border-blue-600', 'text-blue-600');
        }
    
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
      

<header className="relative bg-gradient-to-b from-blue-950 to-blue-900 text-white pt-24 pb-20 px-6 text-center overflow-hidden border-b border-blue-950">

<div className="absolute top-6 left-6 text-sm font-medium tracking-tighter text-white/70">
            INDOAMÉRICA
        </div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-blue-500/10 blur-[120px] pointer-events-none" style={{borderRadius: '50%'}}></div>
<div className="relative max-w-3xl mx-auto flex flex-col items-center">
<div className="mb-8 inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-blue-200">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Comunidad Universitaria S25
            </div>
<h1 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight text-white">Código de Ética</h1>
<p className="text-lg text-blue-200/80 font-light max-w-xl">Guía de integridad, valores y normas para una convivencia estudiantil de excelencia.</p>
</div>
</header>

<nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/80">
<div className="max-w-5xl mx-auto flex overflow-x-auto no-scrollbar px-4 sm:px-6">
<button className="tab-btn flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap border-b-[2px] border-blue-600 text-blue-600 transition-colors duration-200" id="btn-principios" onclick="showTab('principios')">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Principios y Valores
            </button>
<button className="tab-btn flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap border-b-[2px] border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300 transition-colors duration-200" id="btn-conducta" onclick="showTab('conducta')">
<iconify-icon icon="solar:shield-user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Normas de Conducta
            </button>
<button className="tab-btn flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap border-b-[2px] border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300 transition-colors duration-200" id="btn-sanciones" onclick="showTab('sanciones')">
<iconify-icon icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Sanciones
            </button>
<button className="tab-btn flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap border-b-[2px] border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300 transition-colors duration-200" id="btn-faq" onclick="showTab('faq')">
<iconify-icon icon="solar:question-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Preguntas Frecuentes
            </button>
</div>
</nav>
<main className="max-w-5xl mx-auto px-6 py-12 md:py-16 min-h-[50vh]">

<section className="content-section space-y-10 animate-fade-in" id="tab-principios">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Nuestros Pilares Éticos</h2>
<p className="text-gray-500 font-light text-base leading-relaxed">"La formación integral de profesionales competentes y éticos es nuestra misión fundamental dentro de la institución."</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:-translate-y-1 transition-transform duration-300 group">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight text-gray-900 mb-2 text-lg">Integridad</h3>
<p className="text-sm text-gray-500 leading-relaxed">Actuar con honestidad y transparencia en cada actividad académica y personal dentro de la institución.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:-translate-y-1 transition-transform duration-300 group">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight text-gray-900 mb-2 text-lg">Respeto</h3>
<p className="text-sm text-gray-500 leading-relaxed">Valorar la diversidad y la dignidad de cada miembro de la comunidad educativa, fomentando un entorno sin discriminación.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:-translate-y-1 transition-transform duration-300 group">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight text-gray-900 mb-2 text-lg">Responsabilidad</h3>
<p className="text-sm text-gray-500 leading-relaxed">Asumir las consecuencias de nuestras acciones y cumplir con los deberes institucionales de manera consciente.</p>
</div>
</div>
</section>

<section className="content-section hidden space-y-8 animate-fade-in" id="tab-conducta">
<div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
<div className="bg-gray-50/50 border-b border-gray-200/80 px-6 md:px-8 py-5">
<h3 className="text-lg tracking-tight font-medium text-gray-900">Artículos y Numerales Relevantes</h3>
</div>
<div className="divide-y divide-gray-100">
<div className="px-6 md:px-8 py-6 group hover:bg-gray-50/50 transition-colors">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium uppercase tracking-widest mb-3">
                            Artículo 15
                        </span>
<h4 className="text-lg tracking-tight font-medium text-gray-900 mb-2">Honestidad Académica</h4>
<p className="text-sm text-gray-500 leading-relaxed max-w-3xl">Se prohíbe explícitamente el fraude en evaluaciones, el plagio en trabajos de titulación o investigación, y la suplantación de identidad en cualquier contexto universitario.</p>
</div>
<div className="px-6 md:px-8 py-6 group hover:bg-gray-50/50 transition-colors">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-medium uppercase tracking-widest mb-3">
                            Artículo 12
                        </span>
<h4 className="text-lg tracking-tight font-medium text-gray-900 mb-2">Convivencia y Acoso Escolar</h4>
<p className="text-sm text-gray-500 leading-relaxed max-w-3xl">Prohibición estricta de acoso, violencia verbal o física, exclusión deliberada (bullying) y cualquier acto que vulnere la integridad psicológica de otros estudiantes o personal.</p>
</div>
<div className="px-6 md:px-8 py-6 group hover:bg-gray-50/50 transition-colors">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50 text-teal-700 text-xs font-medium uppercase tracking-widest mb-3">
                            Numeral 5
                        </span>
<h4 className="text-lg tracking-tight font-medium text-gray-900 mb-2">Uso de Bienes Institucionales</h4>
<p className="text-sm text-gray-500 leading-relaxed max-w-3xl">El mobiliario, laboratorios e infraestructura deben usarse exclusivamente para fines académicos y con el debido cuidado y preservación.</p>
</div>
</div>
</div>
</section>

<section className="content-section hidden space-y-6 animate-fade-in" id="tab-sanciones">
<div className="bg-amber-50/50 border border-amber-200/60 p-4 rounded-xl flex gap-3 items-start">
<iconify-icon className="text-amber-600 mt-0.5 text-lg" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-amber-800 text-sm leading-relaxed">
<span className="font-medium">Aviso importante:</span> El desconocimiento de estas normativas no exime de responsabilidad a ningún miembro de la comunidad estudiantil.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<h4 className="text-lg font-medium tracking-tight text-gray-900">Faltas Leves / Medias</h4>
<span className="bg-orange-50 text-orange-700 text-xs px-2.5 py-1 rounded-md font-medium uppercase tracking-widest">Amonestación</span>
</div>
<ul className="text-sm text-gray-500 space-y-4 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-400 mt-0.5 text-base" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Amonestación escrita privada y registro en el expediente.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-400 mt-0.5 text-base" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Pérdida de puntos en la evaluación correspondiente (en casos probados de deshonestidad).</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-400 mt-0.5 text-base" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Suspensión temporal de servicios específicos o uso de laboratorios.</span>
</li>
</ul>
</div>

<div className="bg-white p-6 md:p-8 rounded-2xl border border-red-100 shadow-sm flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<h4 className="text-lg font-medium tracking-tight text-gray-900">Faltas Graves</h4>
<span className="bg-red-50 text-red-600 text-xs px-2.5 py-1 rounded-md font-medium uppercase tracking-widest">Expulsión</span>
</div>
<ul className="text-sm text-gray-500 space-y-4 flex-grow relative z-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 text-base" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Pérdida inmediata de la matrícula o semestre en curso.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 text-base" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Suspensión definitiva de la universidad (Expulsión oficial).</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 text-base" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Remisión del caso para acciones legales civiles o penales externas según la gravedad.</span>
</li>
</ul>
</div>
</div>
<div className="bg-gray-50 border border-gray-200/50 p-6 md:p-8 rounded-2xl">
<h4 className="font-medium tracking-tight text-gray-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Consideraciones de Agravantes
                </h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-500">
<p className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-gray-300"></span> La reincidencia continua en faltas.
                    </p>
<p className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-gray-300"></span> El nivel de perjuicio causado a terceros.
                    </p>
<p className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-gray-300"></span> Actos de deshonestidad en procesos de titulación.
                    </p>
<p className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-gray-300"></span> Cometer faltas bajo efectos de sustancias.
                    </p>
</div>
</div>
</section>

<section className="content-section hidden space-y-4 animate-fade-in max-w-3xl mx-auto" id="tab-faq">
<div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200/60">
<h4 className="text-base font-medium tracking-tight text-gray-900 mb-2">¿Qué hago si presencio un acto de acoso escolar o exclusión?</h4>
<p className="text-sm text-gray-500 leading-relaxed">Debes informar inmediatamente a tu tutor de carrera o al departamento de bienestar universitario. El Código de Ética cuenta con mecanismos para proteger tu anonimato ante denuncias fundamentadas.</p>
</div>
<div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200/60">
<h4 className="text-base font-medium tracking-tight text-gray-900 mb-2">¿Cómo se garantiza mi derecho a la defensa ante una acusación?</h4>
<p className="text-sm text-gray-500 leading-relaxed">Todo proceso disciplinario se adhiere rigurosamente al <span className="font-medium text-gray-700">Capítulo IV</span> del código institucional, garantizando en todo momento tu derecho a la presunción de inocencia, a ser escuchado y a presentar las pruebas de descargo correspondientes.</p>
</div>
<div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200/60">
<h4 className="text-base font-medium tracking-tight text-gray-900 mb-2">¿El uso de Inteligencia Artificial se considera deshonestidad académica?</h4>
<p className="text-sm text-gray-500 leading-relaxed">Si las herramientas de IA se utilizan para suplantar la autoría propia de un trabajo, o para generar textos sin declarar transparentemente la fuente, será sancionado de acuerdo a lo estipulado en el <span className="font-medium text-gray-700">Artículo 15</span> de deshonestidad.</p>
</div>
</section>

<div className="mt-24 border-t border-gray-200/60 pt-16 text-center">
<h3 className="text-xl tracking-tight font-medium text-gray-900 mb-3">Para más detalles, consulta el documento oficial</h3>
<p className="text-sm text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">El contenido aquí presentado es una guía resumida para facilitar su socialización. El reglamento legal completo contiene toda la fundamentación administrativa.</p>
<a className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-sm hover:shadow-md focus:ring-4 focus:ring-gray-200" href="https://www.indoamerica.edu.ec/legal-indoamerica/" rel="noopener noreferrer" target="_blank">
                Ver Código de Ética Completo
                <iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<div className="mt-16 text-xs font-medium text-gray-400 tracking-widest uppercase">
                © 2025 Universidad Tecnológica Indoamérica
            </div>
</div>
</main>


    </>
  );
}
