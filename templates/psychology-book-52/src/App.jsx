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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-slate-200/60">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-900 font-semibold tracking-tight text-base">
<iconify-icon className="text-xl icon-stroke" icon="solar:book-bookmark-linear"></iconify-icon>
<span>SUMMA</span>
</div>
<a className="bg-slate-900 text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-slate-800 transition-colors shadow-sm" href="#comprar">
                Adquirir Manuscrito
            </a>
</div>
</nav>

<header className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
<iconify-icon className="text-sm icon-stroke" icon="solar:star-fall-linear"></iconify-icon>
<span>Nuevo lanzamiento en Hotmart</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                Hacer feliz a tu <br className="hidden md:block"/>
<span className="text-slate-500">niño interior.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                Pasajes hacia la felicidad. Un viaje de integración psicológica, memoria emocional y el descubrimiento de tu destino personal.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-slate-900 text-white text-base font-medium px-6 py-3 rounded-lg hover:bg-slate-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2" href="#comprar">
<iconify-icon className="text-lg icon-stroke" icon="solar:cart-large-linear"></iconify-icon>
                    Obtener Acceso Inmediato
                </a>
<a className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 text-base font-medium px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2" href="#prologo">
<iconify-icon className="text-lg icon-stroke" icon="solar:document-text-linear"></iconify-icon>
                    Leer Prólogo
                </a>
</div>
</div>
</header>

<section className="py-16 bg-white border-y border-slate-200/60" id="prologo">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8 text-center">Prólogo</h2>
<div className="space-y-6 text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
<p>Una de las claves para ser feliz es hacer feliz a tu niño interior. Buscar las herramientas que alguna vez no tuviste. Perseguir esos sueños que en algún momento fueron tan increíbles que parecían imposibles.</p>
<p>Cuando somos niños, el alcance de nuestra imaginación es ilimitado. No existen techos reales, solo posibilidades infinitas. Pero el problema es que en ese entonces no teníamos el poder. No teníamos los recursos, ni la autonomía, ni la capacidad real de transformar nuestro entorno.</p>
<div className="pl-6 border-l-2 border-slate-900 py-2 my-8">
<p className="text-2xl tracking-tight text-slate-900">Hoy sí.<br/>Hoy somos adultos.<br/>Hoy podemos decidir.</p>
</div>
<p>Hoy tenemos la capacidad concreta de cambiar nuestra realidad. Y ahí está el punto central: ahora tenemos el poder de hacer feliz a nuestro niño interior. Eso no es una fantasía, es un hecho.</p>
<p>Esa felicidad está ahí. No desapareció. Solo debemos encontrar la forma de volver a ella desde nuestra adultez consciente.</p>
</div>
</div>
</section>

<section className="py-24 max-w-5xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">No es una metáfora ingenua.</h2>
<p className="text-base text-slate-600 leading-relaxed">
                La infancia no es un periodo que desaparece; es una estructura que permanece. Este manuscrito explora la base científica de la integración psicológica, ampliando su comprensión hacia dimensiones simbólicas y culturales.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-slate-700 icon-stroke" icon="solar:dna-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Teoría del Apego</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                    Cómo las experiencias tempranas generan "modelos internos". Aprende a modificar estos modelos y ofrecer una base segura interna.
                </p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-slate-700 icon-stroke" icon="solar:shield-heart-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Terapia de Esquemas</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                    Identifica y sana las 5 necesidades emocionales nucleares para evitar esquemas desadaptativos mediante la "reparentalización".
                </p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-slate-700 icon-stroke" icon="solar:history-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Memoria Emocional</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                    La neurociencia demuestra que las memorias no son estáticas. Descubre cómo reconsolidarlas evocando recuerdos en contextos seguros.
                </p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-slate-700 icon-stroke" icon="solar:moon-stars-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">El Mundo Onírico</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                    Los sueños como puente hacia el niño interior. Entiende la reorganización simbólica y la comunicación del inconsciente según C. Jung.
                </p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-slate-700 icon-stroke" icon="solar:map-arrow-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Destino y Totalidad</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                    Desde la visión del alma fragmentada medieval hasta el concepto nórdico del 'wyrd'. El niño interior como el hilo inicial de tu destino.
                </p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 shadow-inner flex flex-col justify-center items-center text-center">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Estrategias Prácticas</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Escritura autobiográfica, diálogo compasivo y activación conductual simbólica.
                </p>
<a className="text-sm font-medium text-slate-900 hover:text-slate-600 flex items-center gap-1" href="#comprar">
                    Acceder al material completo <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-slate-300">
<div className="max-w-4xl mx-auto px-6">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-2xl text-slate-400 icon-stroke" icon="solar:book-linear"></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tight text-white">Extracto del Manuscrito</h2>
</div>
<div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 md:p-12 font-serif text-lg leading-relaxed shadow-xl">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-6 font-sans">7. Conclusión: integración como acto de adultez</h3>
<p className="mb-4">Hacer feliz al niño interior no es retroceder.</p>
<p className="mb-4">Es:</p>
<ul className="list-disc pl-6 mb-6 space-y-2 text-slate-400 marker:text-slate-500">
<li>Integrar memoria.</li>
<li>Satisfacer necesidades psicológicas.</li>
<li>Reconsolidar identidad.</li>
<li>Activar motivación intrínseca.</li>
<li>Restaurar coherencia interna.</li>
</ul>
<p className="mb-4">Es un acto de adultez madura.</p>
<p className="text-xl font-medium text-white mt-8 border-l-2 border-slate-500 pl-4 font-sans">No es vivir en la luna.<br/>Es recordar por qué querías mirarla.</p>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6 text-center" id="comprar">

<div className="mb-16 inline-flex flex-col items-center">
<div className="w-20 h-20 rounded-full bg-slate-200 border-4 border-white shadow-md mb-4 flex items-center justify-center overflow-hidden">

<iconify-icon className="text-4xl text-slate-400" icon="solar:user-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Christian M. Romero Cortés</h3>
<p className="text-sm text-slate-500 mb-4">Autor • Psicólogo</p>
<p className="text-sm text-slate-600 max-w-md leading-relaxed">
                "Soy psicólogo de profesión, músico de pasión y entusiasta deportista, con visión de mundo algo taoísta. He escrito este material como el primer paso para cambiar mi presente y futuro, y espero que también transforme el tuyo."
            </p>
</div>
<div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Comienza tu lectura hoy</h2>
<p className="text-base text-slate-600 mb-8">Obtén acceso inmediato al manuscrito completo en formato digital a través de Hotmart.</p>
<a className="block w-full sm:w-auto mx-auto bg-slate-900 text-white text-lg font-medium px-8 py-4 rounded-xl hover:bg-slate-800 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-slate-200" href="#">
                Comprar en Hotmart
            </a>
<div className="mt-6 flex items-center justify-center gap-4 text-xs font-medium text-slate-400">
<span className="flex items-center gap-1"><iconify-icon className="text-base" icon="solar:shield-check-linear"></iconify-icon> Pago Seguro</span>
<span className="flex items-center gap-1"><iconify-icon className="text-base" icon="solar:download-square-linear"></iconify-icon> Acceso Inmediato</span>
</div>
</div>
</section>

<footer className="bg-slate-50 py-12 border-t border-slate-200 mt-auto">
<div className="max-w-4xl mx-auto px-6">
<details className="group">
<summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors list-none">
<span>Ver Referencias Bibliográficas (Formato APA 7)</span>
<iconify-icon className="text-lg transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-xs text-slate-500 space-y-2 leading-relaxed">
<p>Bowlby, J. (1969). Attachment and loss: Vol. 1. Attachment. Basic Books.</p>
<p>Bowlby, J. (1988). A secure base. Basic Books.</p>
<p>Deci, E. L., &amp; Ryan, R. M. (2000). The “what” and “why” of goal pursuits. Psychological Inquiry, 11(4), 227–268.</p>
<p>Jung, C. G. (1964). Man and his symbols. Doubleday.</p>
<p>Masley, S. A., Gillanders, D. T., Simpson, S. G., &amp; Taylor, M. A. (2012). A systematic review of schema therapy outcomes. Clinical Psychology Review, 32(7), 584–593.</p>
<p>McAdams, D. P. (2001). The psychology of life stories. Review of General Psychology, 5(2), 100–122.</p>
<p>Mikulincer, M., &amp; Shaver, P. R. (2007). Attachment in adulthood. Guilford Press.</p>
<p>Nader, K., &amp; Einarsson, E. O. (2010). Memory reconsolidation. Annals of the New York Academy of Sciences, 1191, 27–41.</p>
<p>Pennebaker, J. W., &amp; Chung, C. K. (2011). Expressive writing. In H. Friedman (Ed.), Oxford handbook of health psychology.</p>
<p>Schwartz, R. C. (1995). Internal family systems therapy. Guilford Press.</p>
<p>Walker, M. P., &amp; van der Helm, E. (2009). Overnight therapy? Current Biology, 19(20), R877–R878.</p>
</div>
</details>
<div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
<p>© 2023 Christian M. Romero Cortés. Todos los derechos reservados.</p>
<p>chr.romero55@gmail.com</p>
</div>
</div>
</footer>

    </>
  );
}
