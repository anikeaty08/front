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
      

<div className="bg-[#1C1917] text-[#F5F5F4] text-center py-2.5 px-4 text-xs font-light tracking-wide">
<p>Oferta especial de lanzamiento: 85% de descuento por tiempo limitado.</p>
</div>

<section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-100 via-transparent to-transparent -z-10"></div>
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="z-10 text-center md:text-left">
<span className="text-accent font-medium tracking-widest text-xs uppercase mb-6 block">Diseño &amp; Emprendimiento</span>
<h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-tight mb-8 text-stone-900">
                        Convierte la Cera en <span className="serif italic text-accent">Arte</span> y Negocio Rentable
                    </h1>
<p className="text-lg text-stone-500 font-light mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
                        Descubre el método minimalista y paso a paso para crear velas de lujo que cautivan los sentidos, sin necesidad de experiencia previa.
                    </p>
<div className="flex flex-col items-center md:items-start gap-5">
<a className="pulse-soft bg-[#1C1917] text-white px-8 py-4 rounded-full font-medium text-sm inline-flex items-center gap-3 transition hover:bg-stone-800 hover:scale-[1.02] duration-300" href="https://pay.hotmart.com/K103081177K?checkoutMode=10">
                            COMENZAR MASTERCLASS
                            <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<div className="flex items-center gap-6 mt-3 text-stone-400 text-xs uppercase tracking-widest font-light">
<span className="flex items-center gap-2"><iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="16"></iconify-icon> Pago Seguro</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:bolt-circle-linear" strokeWidth="1.5" width="16"></iconify-icon> Acceso Inmediato</span>
</div>
</div>
</div>
<div className="relative group w-full max-w-md mx-auto">
<div className="absolute -inset-1 bg-stone-200 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500 opacity-50"></div>
<img alt="Vela artesanal de diseño minimalista" className="relative rounded-[2rem] elegant-shadow object-cover aspect-[4/5] w-full border border-stone-100/50" src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl serif font-medium text-center tracking-tight mb-20 text-stone-900">Diseñado para ti si...</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-10 rounded-3xl bg-stone-50/50 hover:bg-stone-50 transition duration-300 group">
<iconify-icon className="text-accent mb-6 block opacity-80 group-hover:opacity-100 transition" icon="solar:palette-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-sm font-light text-stone-600 leading-relaxed">Amas el diseño, la estética y deseas monetizar tu lado creativo con productos premium.</p>
</div>
<div className="p-10 rounded-3xl bg-stone-50/50 hover:bg-stone-50 transition duration-300 group">
<iconify-icon className="text-accent mb-6 block opacity-80 group-hover:opacity-100 transition" icon="solar:home-smile-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-sm font-light text-stone-600 leading-relaxed">Buscas independencia financiera creando un estudio desde la comodidad de tu hogar.</p>
</div>
<div className="p-10 rounded-3xl bg-stone-50/50 hover:bg-stone-50 transition duration-300 group">
<iconify-icon className="text-accent mb-6 block opacity-80 group-hover:opacity-100 transition" icon="solar:wallet-money-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-sm font-light text-stone-600 leading-relaxed">Deseas emprender un negocio rentable con una inversión inicial sumamente inteligente y baja.</p>
</div>
<div className="p-10 rounded-3xl bg-stone-50/50 hover:bg-stone-50 transition duration-300 group">
<iconify-icon className="text-accent mb-6 block opacity-80 group-hover:opacity-100 transition" icon="solar:leaf-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-sm font-light text-stone-600 leading-relaxed">Disfrutas de actividades manuales que aportan calma, enfoque y bienestar personal.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAF9]">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-accent text-xs tracking-widest uppercase font-medium mb-3 block">El Programa</span>
<h2 className="text-3xl md:text-4xl serif font-medium tracking-tight text-stone-900">Curriculum de la Masterclass</h2>
</div>
<div className="space-y-2">

<details className="group border-b border-stone-200 pb-4 transition-all duration-300">
<summary className="flex items-center justify-between py-4 cursor-pointer">
<span className="font-medium text-stone-800 text-base md:text-lg tracking-tight flex items-center gap-4">
<span className="text-stone-400 font-light text-sm w-6">01</span> Fundamentos de la elaboración de velas
                        </span>
<iconify-icon className="text-stone-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</summary>
<div className="pl-10 pr-4 pb-4 text-sm font-light text-stone-500 leading-relaxed">
                        Conoce la historia, los tipos de ceras y los principios básicos para iniciar en el arte de la velería con bases sólidas y seguras.
                    </div>
</details>

<details className="group border-b border-stone-200 pb-4 transition-all duration-300">
<summary className="flex items-center justify-between py-4 cursor-pointer">
<span className="font-medium text-stone-800 text-base md:text-lg tracking-tight flex items-center gap-4">
<span className="text-stone-400 font-light text-sm w-6">02</span> Herramientas y materiales esenciales
                        </span>
<iconify-icon className="text-stone-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</summary>
<div className="pl-10 pr-4 pb-4 text-sm font-light text-stone-500 leading-relaxed">
                        Guía detallada sobre recipientes, termómetros, básculas, pabilos y todo el equipamiento necesario para optimizar tu estudio de trabajo.
                    </div>
</details>

<details className="group border-b border-stone-200 pb-4 transition-all duration-300">
<summary className="flex items-center justify-between py-4 cursor-pointer">
<span className="font-medium text-stone-800 text-base md:text-lg tracking-tight flex items-center gap-4">
<span className="text-stone-400 font-light text-sm w-6">03</span> Técnicas básicas para principiantes
                        </span>
<iconify-icon className="text-stone-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</summary>
<div className="pl-10 pr-4 pb-4 text-sm font-light text-stone-500 leading-relaxed">
                        Aprende a fundir, mezclar y verter la cera correctamente para lograr acabados lisos, profesionales y sin imperfecciones desde tu primer intento.
                    </div>
</details>

<details className="group border-b border-stone-200 pb-4 transition-all duration-300">
<summary className="flex items-center justify-between py-4 cursor-pointer">
<span className="font-medium text-stone-800 text-base md:text-lg tracking-tight flex items-center gap-4">
<span className="text-stone-400 font-light text-sm w-6">04</span> Velas aromáticas paso a paso
                        </span>
<iconify-icon className="text-stone-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</summary>
<div className="pl-10 pr-4 pb-4 text-sm font-light text-stone-500 leading-relaxed">
                        Domina las temperaturas precisas de vertido y las proporciones exactas de fragancias para asegurar una dispersión de aroma excepcional.
                    </div>
</details>

<details className="group border-b border-stone-200 pb-4 transition-all duration-300">
<summary className="flex items-center justify-between py-4 cursor-pointer">
<span className="font-medium text-stone-800 text-base md:text-lg tracking-tight flex items-center gap-4">
<span className="text-stone-400 font-light text-sm w-6">05</span> Velas decorativas y creativas
                        </span>
<iconify-icon className="text-stone-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</summary>
<div className="pl-10 pr-4 pb-4 text-sm font-light text-stone-500 leading-relaxed">
                        Explora técnicas de colorimetría, uso de moldes esculturales y texturas visuales para crear piezas que destaquen por su alta estética.
                    </div>
</details>

<details className="group border-b border-stone-200 pb-4 transition-all duration-300">
<summary className="flex items-center justify-between py-4 cursor-pointer">
<span className="font-medium text-stone-800 text-base md:text-lg tracking-tight flex items-center gap-4">
<span className="text-stone-400 font-light text-sm w-6">06</span> Velas temáticas para ocasiones especiales
                        </span>
<iconify-icon className="text-stone-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</summary>
<div className="pl-10 pr-4 pb-4 text-sm font-light text-stone-500 leading-relaxed">
                        Diseña colecciones específicas para bodas, aniversarios, celebraciones y fechas festivas que conecten emocionalmente con tus clientes.
                    </div>
</details>

<details className="group border-b border-stone-200 pb-4 transition-all duration-300">
<summary className="flex items-center justify-between py-4 cursor-pointer">
<span className="font-medium text-stone-800 text-base md:text-lg tracking-tight flex items-center gap-4">
<span className="text-stone-400 font-light text-sm w-6">07</span> Velas con efectos especiales
                        </span>
<iconify-icon className="text-stone-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</summary>
<div className="pl-10 pr-4 pb-4 text-sm font-light text-stone-500 leading-relaxed">
                        Innova con técnicas avanzadas como velas marmoladas, incrustaciones botánicas, capas geométricas y acabados visualmente sorprendentes.
                    </div>
</details>

<details className="group border-b border-stone-200 pb-4 transition-all duration-300">
<summary className="flex items-center justify-between py-4 cursor-pointer">
<span className="font-medium text-stone-800 text-base md:text-lg tracking-tight flex items-center gap-4">
<span className="text-stone-400 font-light text-sm w-6">08</span> Problemas comunes y soluciones
                        </span>
<iconify-icon className="text-stone-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</summary>
<div className="pl-10 pr-4 pb-4 text-sm font-light text-stone-500 leading-relaxed">
                        Aprende a identificar y corregir defectos frecuentes como el frosting, túneles de quemado, grietas y problemas de adherencia al vidrio.
                    </div>
</details>

<details className="group border-b border-stone-200 pb-4 transition-all duration-300">
<summary className="flex items-center justify-between py-4 cursor-pointer">
<span className="font-medium text-stone-800 text-base md:text-lg tracking-tight flex items-center gap-4">
<span className="text-stone-400 font-light text-sm w-6">09</span> Decoración, presentación y conservación
                        </span>
<iconify-icon className="text-stone-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</summary>
<div className="pl-10 pr-4 pb-4 text-sm font-light text-stone-500 leading-relaxed">
                        Estrategias de empaque premium, diseño de etiquetas elegantes y recomendaciones de cuidado para prolongar la vida útil de tus creaciones.
                    </div>
</details>

<details className="group border-b border-stone-200 pb-4 transition-all duration-300">
<summary className="flex items-center justify-between py-4 cursor-pointer">
<span className="font-medium text-stone-800 text-base md:text-lg tracking-tight flex items-center gap-4">
<span className="text-stone-400 font-light text-sm w-[1.75rem]">10</span> Conclusiones
                        </span>
<iconify-icon className="text-stone-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</summary>
<div className="pl-10 pr-4 pb-4 text-sm font-light text-stone-500 leading-relaxed">
                        Resumen del programa, próximos pasos recomendados y cómo seguir evolucionando y escalando en tu camino como artesano y emprendedor.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl serif font-medium tracking-tight text-stone-900 mb-4">La Experiencia Completa</h2>
<p className="text-stone-500 font-light text-base">Complementos exclusivos incluidos gratuitamente con tu inscripción hoy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="group flex flex-col">
<div className="overflow-hidden rounded-2xl mb-6 bg-stone-100 aspect-[4/3]">
<img alt="Catálogo de Ideas minimalistas" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" src="https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div>
<span className="text-accent text-[10px] tracking-widest uppercase font-medium mb-3 block">Bono 01 — Incluido</span>
<h3 className="text-xl serif font-medium mb-3 tracking-tight text-stone-900">Lookbook de Colecciones</h3>
<p className="text-sm font-light text-stone-500 mb-4 leading-relaxed">Inspiración visual de alta estética con los diseños y paletas más demandados en el mercado actual.</p>
</div>
</div>

<div className="group flex flex-col">
<div className="overflow-hidden rounded-2xl mb-6 bg-stone-100 aspect-[4/3]">
<img alt="Creación de Moldes" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" src="https://images.unsplash.com/photo-1612282130134-4e2a392de4f7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div>
<span className="text-accent text-[10px] tracking-widest uppercase font-medium mb-3 block">Bono 02 — Incluido</span>
<h3 className="text-xl serif font-medium mb-3 tracking-tight text-stone-900">Moldes Esculturales</h3>
<p className="text-sm font-light text-stone-500 mb-4 leading-relaxed">Técnicas para fabricar tus propios moldes de silicona, dándole a tus velas formas arquitectónicas y únicas.</p>
</div>
</div>

<div className="group flex flex-col">
<div className="overflow-hidden rounded-2xl mb-6 bg-stone-100 aspect-[4/3]">
<img alt="Guía de Aromaterapia Botánica" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" src="https://images.unsplash.com/photo-1596433809252-260c3fa4613c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div>
<span className="text-accent text-[10px] tracking-widest uppercase font-medium mb-3 block">Bono 03 — Incluido</span>
<h3 className="text-xl serif font-medium mb-3 tracking-tight text-stone-900">Botánica y Aromaterapia</h3>
<p className="text-sm font-light text-stone-500 mb-4 leading-relaxed">Formulación de blends con aceites esenciales e integración elegante de elementos botánicos secos.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#1C1917] text-[#FAFAF9] overflow-hidden">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl serif font-medium text-center tracking-tight mb-20">Un Enfoque Diferente</h2>
<div className="grid md:grid-cols-2 gap-16 md:gap-24 relative">

<div className="absolute inset-y-0 left-1/2 w-[1px] bg-stone-800 hidden md:block"></div>

<div className="space-y-8">
<h3 className="text-sm font-medium text-stone-500 uppercase tracking-widest">Lo Convencional</h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-sm font-light text-stone-400">
<iconify-icon className="text-stone-600 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Técnicas anticuadas y explicaciones confusas.
                        </li>
<li className="flex items-start gap-4 text-sm font-light text-stone-400">
<iconify-icon className="text-stone-600 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Compra de insumos innecesarios y costosos.
                        </li>
<li className="flex items-start gap-4 text-sm font-light text-stone-400">
<iconify-icon className="text-stone-600 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Velas con imperfecciones estéticas y mal quemado.
                        </li>
<li className="flex items-start gap-4 text-sm font-light text-stone-400">
<iconify-icon className="text-stone-600 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Sin visión ni estrategia comercial de ventas.
                        </li>
</ul>
</div>

<div className="space-y-8">
<h3 className="text-sm font-medium text-[#D6C5B3] uppercase tracking-widest">El Método Premium</h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-sm font-light text-stone-200">
<iconify-icon className="text-[#D6C5B3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Estructura minimalista paso a paso, desde cero.
                        </li>
<li className="flex items-start gap-4 text-sm font-light text-stone-200">
<iconify-icon className="text-[#D6C5B3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Selección inteligente de herramientas esenciales.
                        </li>
<li className="flex items-start gap-4 text-sm font-light text-stone-200">
<iconify-icon className="text-[#D6C5B3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Acabados perfectos, lisos y de calidad de galería.
                        </li>
<li className="flex items-start gap-4 text-sm font-light text-stone-200">
<iconify-icon className="text-[#D6C5B3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Enfoque empresarial y construcción de marca de lujo.
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAF9]">
<div className="max-w-2xl mx-auto px-6 text-center">
<iconify-icon className="text-accent mb-8" icon="solar:shield-star-linear" strokeWidth="1.5" width="48"></iconify-icon>
<h2 className="text-2xl md:text-3xl serif font-medium tracking-tight mb-6 text-stone-900">Garantía de Satisfacción</h2>
<p className="text-stone-500 font-light mb-10 leading-relaxed text-sm md:text-base">
                Confiamos plenamente en el valor y la calidad de nuestra masterclass. Si durante los primeros 7 días sientes que el programa no cumple con tus expectativas de diseño y aprendizaje, te reembolsaremos tu inversión íntegramente.
            </p>
<span className="text-stone-800 text-xs uppercase tracking-widest font-medium border-b border-stone-300 pb-1">Respaldado por 7 Días</span>
</div>
</section>

<section className="py-32 bg-stone-900 text-stone-50 relative overflow-hidden">
<div className="max-w-3xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
<span className="text-[#D6C5B3] text-xs tracking-widest uppercase font-medium mb-6 block">Inscripciones Abiertas</span>
<h2 className="text-4xl md:text-5xl serif font-medium tracking-tight mb-10 text-white">Inicia la Creación de tu Estudio Hoy</h2>
<div className="mb-12 flex flex-col items-center">
<p className="text-stone-500 text-sm line-through mb-2 font-light">Valor regular: $47.00 USD</p>
<div className="flex items-start gap-1">
<span className="text-2xl font-light mt-2">$</span>
<span className="text-7xl md:text-8xl serif font-medium tracking-tighter text-white leading-none">7</span>
<span className="text-sm font-light mt-auto mb-2 uppercase tracking-wide text-stone-400">usd</span>
</div>
</div>
<a className="bg-white text-stone-900 px-10 py-4 rounded-full font-medium text-sm inline-flex items-center gap-3 transition hover:bg-stone-200 duration-300 mb-8 w-full sm:w-auto justify-center" href="https://pay.hotmart.com/K103081177K?checkoutMode=10">
                ACCEDER AL PROGRAMA
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<p className="text-stone-400 text-xs font-light tracking-wide mb-12">Acceso vitalicio · Todas las actualizaciones futuras incluidas</p>
<div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">
<iconify-icon icon="logos:visa" width="40"></iconify-icon>
<iconify-icon icon="logos:mastercard" width="40"></iconify-icon>
<iconify-icon icon="logos:paypal" width="40"></iconify-icon>
</div>
</div>
</section>

<footer className="py-16 bg-[#FAFAF9] text-center px-6 border-t border-stone-200">
<p className="font-medium tracking-widest text-sm mb-6 text-stone-900 uppercase">Studio Velas Artesanales</p>
<p className="text-[10px] text-stone-400 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Copyright © 2026. Todos los derechos reservados.<br/>Este sitio no forma parte de la red de Facebook Inc. No está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
        </p>
<div className="flex justify-center gap-8 text-[11px] text-stone-500 font-light uppercase tracking-wider">
<a className="hover:text-stone-900 transition duration-300" href="#">Privacidad</a>
<a className="hover:text-stone-900 transition duration-300" href="#">Términos</a>
</div>
</footer>

    </>
  );
}
