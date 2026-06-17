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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
colors: {
ibmex: {
blue: '#003e7e',
blueDark: '#002a55',
red: '#ff140d',
redHover: '#d90e08',
text: '#333333',
gray: '#7F8C8D',
light: '#F4F6F7',
concrete: '#E5E7EB'
}
},
boxShadow: {
'card': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
'float': '0 10px 30px -5px rgba(0, 62, 126, 0.2)',
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
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
      

<nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm h-20 flex items-center transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">

<a className="flex items-center gap-3 group" href="#">
<img alt="IBMEX Aniversario" className="h-14 w-auto object-contain" src="https://ibmex.minegoc.io/medios/Logo_Aniversario_IBMEX.png"/>
<span className="text-xs font-bold text-ibmex-gray uppercase tracking-widest hidden sm:block border-l border-gray-300 pl-3">
          Materiales Industriales
        </span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-semibold text-gray-600 hover:text-ibmex-blue transition-colors" href="#beneficios">Nosotros</a>
<a className="text-sm font-semibold text-gray-600 hover:text-ibmex-blue transition-colors" href="#productos">Productos</a>
<a className="text-sm font-semibold text-gray-600 hover:text-ibmex-blue transition-colors" href="#proceso">Cómo comprar</a>
<a className="bg-ibmex-red hover:bg-ibmex-redHover text-white text-sm font-bold px-6 py-2.5 rounded shadow-lg transition-all hover:-translate-y-0.5 flex items-center gap-2" href="https://whatsform.com" target="_blank">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
          Cotizar Ahora
        </a>
</div>

<button className="md:hidden text-ibmex-blue p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="32"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover grayscale-[30%]" loop="" muted="" playsinline="">
<source src="https://ibmex.minegoc.io/medios/banner_ibmex.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 hero-overlay"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
<div className="animate-fade-in-up">

<div className="flex flex-wrap gap-3 mb-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-400/30 text-blue-100 text-xs font-bold uppercase tracking-wide backdrop-blur-sm">
<iconify-icon icon="solar:buildings-2-linear" width="14"></iconify-icon>
            Solo Empresas y Constructoras
          </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wide backdrop-blur-sm">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
            CDMX y EdoMéx
          </span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
          IBMEX <span className="text-gray-300 font-light">|</span> Block y Morteros Industriales <span className="text-ibmex-red">por Volumen</span>
</h1>
<p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-light leading-relaxed">
          Proveedor industrial para empresas y constructoras. Adquiere block, adhesivos y repellos con calidad certificada. <strong className="text-white font-semibold">Venta por tonelada y entrega a pie de obra.</strong>
</p>

<div className="flex flex-col sm:flex-row gap-4">
<a className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-base font-bold px-8 py-4 rounded shadow-float transition-all hover:-translate-y-1 flex items-center justify-center gap-2" href="https://whatsform.com">
<iconify-icon icon="solar:brand-whatsapp-linear" width="24"></iconify-icon>
            Cotizar por WhatsApp
          </a>
<a className="w-full sm:w-auto bg-white hover:bg-gray-100 text-ibmex-blue text-base font-bold px-8 py-4 rounded shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 border border-transparent" href="#cotizar">
            Solicitar Cotización Formal
          </a>
</div>
<div className="mt-8 flex items-center gap-2 text-sm text-gray-300">
<iconify-icon className="text-ibmex-red" icon="solar:info-circle-linear"></iconify-icon>
<span className="font-medium">Pedido mínimo: 1,000 blocks o 1 Tonelada (40 bultos)</span>
</div>
</div>

<div className="hidden lg:block relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl">
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-lg flex flex-col items-center justify-center text-center h-40">
<span className="text-ibmex-blue font-bold text-4xl mb-1">10+</span>
<span className="text-gray-600 text-xs font-bold uppercase">Años de experiencia</span>
</div>
<div className="bg-ibmex-red p-4 rounded-lg flex flex-col items-center justify-center text-center h-40 text-white">
<iconify-icon className="mb-2" icon="solar:verified-check-linear" width="40"></iconify-icon>
<span className="text-xs font-bold uppercase">Calidad Certificada</span>
</div>
<div className="col-span-2 bg-gray-900 p-6 rounded-lg flex items-center justify-between text-white">
<div>
<p className="text-xs text-gray-400 uppercase font-bold mb-1">Logística Propia</p>
<p className="font-bold text-lg">Entregas Puntuales</p>
</div>
<iconify-icon className="text-ibmex-gray" icon="solar:delivery-linear" width="40"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-gray-100" id="beneficios">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="flex flex-col items-start p-4 hover:bg-gray-50 rounded-xl transition-colors">
<div className="w-12 h-12 bg-ibmex-blue/10 rounded-lg flex items-center justify-center text-ibmex-blue mb-4">
<iconify-icon icon="solar:medal-ribbon-star-linear" width="28"></iconify-icon>
</div>
<h3 className="font-bold text-ibmex-text text-lg mb-2">Productos Certificados</h3>
<p className="text-sm text-gray-500 leading-snug">Alta resistencia y cumplimiento de normas para obras exigentes.</p>
</div>

<div className="flex flex-col items-start p-4 hover:bg-gray-50 rounded-xl transition-colors">
<div className="w-12 h-12 bg-ibmex-blue/10 rounded-lg flex items-center justify-center text-ibmex-blue mb-4">
<iconify-icon icon="solar:box-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="font-bold text-ibmex-text text-lg mb-2">Stock Garantizado</h3>
<p className="text-sm text-gray-500 leading-snug">Disponibilidad inmediata para pedidos de gran volumen.</p>
</div>

<div className="flex flex-col items-start p-4 hover:bg-gray-50 rounded-xl transition-colors">
<div className="w-12 h-12 bg-ibmex-blue/10 rounded-lg flex items-center justify-center text-ibmex-blue mb-4">
<iconify-icon icon="solar:tag-price-linear" width="28"></iconify-icon>
</div>
<h3 className="font-bold text-ibmex-text text-lg mb-2">Precios de Mayoreo</h3>
<p className="text-sm text-gray-500 leading-snug">Costos competitivos directos de fábrica por tonelada.</p>
</div>

<div className="flex flex-col items-start p-4 hover:bg-gray-50 rounded-xl transition-colors">
<div className="w-12 h-12 bg-ibmex-blue/10 rounded-lg flex items-center justify-center text-ibmex-blue mb-4">
<iconify-icon icon="solar:user-hand-up-linear" width="28"></iconify-icon>
</div>
<h3 className="font-bold text-ibmex-text text-lg mb-2">Atención Técnica</h3>
<p className="text-sm text-gray-500 leading-snug">Asesoría especializada para ingenieros y arquitectos.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-ibmex-light bg-grid">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-block px-3 py-1 bg-ibmex-blue text-white text-xs font-bold uppercase tracking-widest mb-4">
            Por qué elegirnos
          </div>
<h2 className="text-3xl md:text-4xl font-extrabold text-ibmex-blueDark mb-6 leading-tight">
            Un proveedor industrial, <br/><span className="text-ibmex-red">no retail.</span>
</h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
            En IBMEX fabricamos y comercializamos block y morteros industriales diseñados específicamente para obras de alto volumen. No vendemos al menudeo; trabajamos exclusivamente con empresas que requieren <strong>calidad constante</strong> y <strong>certeza en tiempos de entrega</strong>.
          </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-ibmex-blue mt-1 flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-gray-700 font-medium">Producción industrial con estricto control de calidad.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-ibmex-blue mt-1 flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-gray-700 font-medium">Venta por volumen (toneladas/millares), no por pieza suelta.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-ibmex-blue mt-1 flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-gray-700 font-medium">Logística preparada para accesos de obra complejos.</span>
</li>
</ul>
<a className="text-ibmex-blue font-bold underline decoration-2 underline-offset-4 hover:text-ibmex-red transition-colors inline-flex items-center gap-2" href="#productos">
            Ver catálogo de productos
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-ibmex-red/10 -z-10 rounded-full blur-xl"></div>
<div className="bg-white p-2 rounded-2xl shadow-card rotate-1">
<img alt="Almacén de materiales" className="rounded-xl w-full h-auto object-cover grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-ibmex-blueDark text-white p-6 rounded-lg shadow-float max-w-xs">
<p className="text-sm font-medium opacity-80 mb-1">Capacidad de entrega</p>
<p className="text-2xl font-bold">+500 Toneladas</p>
<p className="text-xs text-gray-400 mt-1">Suministro mensual promedio</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="productos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-extrabold text-ibmex-blueDark mb-4">
          Nuestros Productos
        </h2>
<p className="text-lg text-gray-600">
          Soluciones constructivas de línea industrial. Selecciona el producto para cotizar por volumen.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col overflow-hidden">
<div className="h-56 overflow-hidden bg-gray-100 relative">
<img alt="Block Liso Hueco" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://ibmex.minegoc.io/general/block_hueco_liso_de_concreto_optimized"/>
<div className="absolute top-4 left-4 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded">Muros de Carga</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-bold text-ibmex-text mb-2">Block Liso Hueco</h3>
<p className="text-sm text-gray-500 mb-4 flex-1">Resistencia estructural y uniformidad garantizada para muros de carga y divisiones.</p>
<div className="bg-ibmex-light rounded p-3 mb-5 border border-gray-200">
<p className="text-xs font-bold text-ibmex-blue uppercase tracking-wide mb-1">Mínimo de compra:</p>
<p className="text-sm font-semibold text-gray-800">1,000 Piezas</p>
</div>
<a className="w-full bg-white border-2 border-ibmex-blue text-ibmex-blue hover:bg-ibmex-blue hover:text-white font-bold py-3 rounded text-center transition-colors" href="https://whatsform.com" target="_blank">
              Cotizar Block
            </a>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col overflow-hidden">
<div className="h-56 overflow-hidden bg-gray-100 relative">
<img alt="Pegamuro" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-bold text-ibmex-text mb-2">Pegamuro</h3>
<p className="text-sm text-gray-500 mb-4 flex-1">Mortero adhesivo industrial de alta adherencia para recubrimientos cerámicos.</p>
<div className="bg-ibmex-light rounded p-3 mb-5 border border-gray-200">
<p className="text-xs font-bold text-ibmex-blue uppercase tracking-wide mb-1">Mínimo de compra:</p>
<p className="text-sm font-semibold text-gray-800">1 Tonelada (40 bultos)</p>
</div>
<a className="w-full bg-white border-2 border-ibmex-blue text-ibmex-blue hover:bg-ibmex-blue hover:text-white font-bold py-3 rounded text-center transition-colors" href="https://whatsform.com" target="_blank">
              Cotizar Pegamuro
            </a>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col overflow-hidden">
<div className="h-56 overflow-hidden bg-gray-100 relative">
<img alt="Pegablock" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-bold text-ibmex-text mb-2">Pegablock</h3>
<p className="text-sm text-gray-500 mb-4 flex-1">Adhesivo cementoso especializado para la unión rápida de block hueco o macizo.</p>
<div className="bg-ibmex-light rounded p-3 mb-5 border border-gray-200">
<p className="text-xs font-bold text-ibmex-blue uppercase tracking-wide mb-1">Mínimo de compra:</p>
<p className="text-sm font-semibold text-gray-800">1 Tonelada (40 bultos)</p>
</div>
<a className="w-full bg-white border-2 border-ibmex-blue text-ibmex-blue hover:bg-ibmex-blue hover:text-white font-bold py-3 rounded text-center transition-colors" href="https://whatsform.com" target="_blank">
              Cotizar Pegablock
            </a>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col overflow-hidden">
<div className="h-56 overflow-hidden bg-gray-100 relative">
<img alt="Seconcreto" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-bold text-ibmex-text mb-2">Seconcreto</h3>
<p className="text-sm text-gray-500 mb-4 flex-1">Concreto seco premezclado listo para usar en colados, dalas y rellenos.</p>
<div className="bg-ibmex-light rounded p-3 mb-5 border border-gray-200">
<p className="text-xs font-bold text-ibmex-blue uppercase tracking-wide mb-1">Mínimo de compra:</p>
<p className="text-sm font-semibold text-gray-800">1 Tonelada (40 bultos)</p>
</div>
<a className="w-full bg-white border-2 border-ibmex-blue text-ibmex-blue hover:bg-ibmex-blue hover:text-white font-bold py-3 rounded text-center transition-colors" href="https://whatsform.com" target="_blank">
              Cotizar Seconcreto
            </a>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col overflow-hidden">
<div className="h-56 overflow-hidden bg-gray-100 relative">
<img alt="Repello Gris" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://ibmex.minegoc.io/general/Repello_Gris_optimized"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-bold text-ibmex-text mb-2">Repello Gris</h3>
<p className="text-sm text-gray-500 mb-4 flex-1">Acabados profesionales con rendimiento controlado para interiores y exteriores.</p>
<div className="bg-ibmex-light rounded p-3 mb-5 border border-gray-200">
<p className="text-xs font-bold text-ibmex-blue uppercase tracking-wide mb-1">Mínimo de compra:</p>
<p className="text-sm font-semibold text-gray-800">1 Tonelada (40 bultos)</p>
</div>
<a className="w-full bg-white border-2 border-ibmex-blue text-ibmex-blue hover:bg-ibmex-blue hover:text-white font-bold py-3 rounded text-center transition-colors" href="https://whatsform.com" target="_blank">
              Cotizar Repello
            </a>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col overflow-hidden">
<div className="h-56 overflow-hidden bg-gray-100 relative">
<img alt="Stonecrete" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://ibmex.minegoc.io/general/Stonecrete_optimized"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-bold text-ibmex-text mb-2">Stonecrete</h3>
<p className="text-sm text-gray-500 mb-4 flex-1">Acabado arquitectónico tipo piedra natural de alta durabilidad.</p>
<div className="bg-ibmex-light rounded p-3 mb-5 border border-gray-200">
<p className="text-xs font-bold text-ibmex-blue uppercase tracking-wide mb-1">Mínimo de compra:</p>
<p className="text-sm font-semibold text-gray-800">1 Tonelada (40 bultos)</p>
</div>
<a className="w-full bg-white border-2 border-ibmex-blue text-ibmex-blue hover:bg-ibmex-blue hover:text-white font-bold py-3 rounded text-center transition-colors" href="https://whatsform.com" target="_blank">
              Cotizar Stonecrete
            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-ibmex-blue text-white" id="proceso">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8 text-center relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-blue-700 -z-10 border-t-2 border-dashed border-blue-400/30"></div>
<div className="flex flex-col items-center">
<div className="w-24 h-24 bg-ibmex-blueDark border-4 border-ibmex-blue rounded-full flex items-center justify-center mb-6 shadow-xl relative">
<span className="absolute -top-2 -right-2 bg-ibmex-red w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-2">Selecciona Producto y Volumen</h3>
<p className="text-blue-200 text-sm max-w-xs">Elige los materiales y la cantidad requerida (mínimo 1 ton).</p>
</div>
<div className="flex flex-col items-center">
<div className="w-24 h-24 bg-ibmex-blueDark border-4 border-ibmex-blue rounded-full flex items-center justify-center mb-6 shadow-xl relative">
<span className="absolute -top-2 -right-2 bg-ibmex-red w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
<iconify-icon icon="solar:document-add-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-2">Solicita tu Cotización</h3>
<p className="text-blue-200 text-sm max-w-xs">Envía tus datos vía formulario o WhatsApp para precio especial.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-24 h-24 bg-ibmex-blueDark border-4 border-ibmex-blue rounded-full flex items-center justify-center mb-6 shadow-xl relative">
<span className="absolute -top-2 -right-2 bg-ibmex-red w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
<iconify-icon icon="solar:delivery-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-2">Logística a Pie de Obra</h3>
<p className="text-blue-200 text-sm max-w-xs">Confirmamos pago y programamos la entrega en tu construcción.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white bg-grid relative" id="cotizar">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">

<div className="lg:col-span-2">
<h2 className="text-3xl font-extrabold text-ibmex-blueDark mb-6">
          Cotización para Empresas
        </h2>
<p className="text-gray-600 mb-8 leading-relaxed">
          IBMEX es proveedor industrial para proyectos que no pueden detenerse. Completa el formulario para recibir una propuesta formal adaptada a tus volúmenes.
        </p>
<div className="bg-ibmex-light p-6 rounded-xl border border-gray-200">
<h4 className="font-bold text-ibmex-text mb-4 flex items-center gap-2">
<iconify-icon className="text-ibmex-blue" icon="solar:shield-check-linear"></iconify-icon>
            Garantía IBMEX
          </h4>
<ul className="space-y-3 text-sm text-gray-600">
<li className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-read-linear"></iconify-icon>
              Facturación inmediata
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-read-linear"></iconify-icon>
              Certificados de calidad disponibles
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-read-linear"></iconify-icon>
              Coordinación logística dedicada
            </li>
</ul>
</div>
</div>

<div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-float border border-gray-100">
<form action="#" className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Empresa / Constructora <span className="text-red-500">*</span></label>
<input className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-ibmex-blue focus:border-ibmex-blue block p-3" placeholder="Nombre Comercial o Razón Social" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Cargo / Puesto</label>
<input className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-ibmex-blue focus:border-ibmex-blue block p-3" placeholder="Ej. Residente de Obra, Compras" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Nombre de contacto</label>
<input className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-ibmex-blue focus:border-ibmex-blue block p-3" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Teléfono / WhatsApp <span className="text-red-500">*</span></label>
<input className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-ibmex-blue focus:border-ibmex-blue block p-3" placeholder="10 dígitos" required="" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Ciudad de Entrega</label>
<select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-ibmex-blue focus:border-ibmex-blue block p-3">
<option>Ciudad de México</option>
<option>Estado de México</option>
<option>Otro (Consultar cobertura)</option>
</select>
</div>
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Producto de Interés</label>
<select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-ibmex-blue focus:border-ibmex-blue block p-3">
<option>Block Liso Hueco</option>
<option>Pegamuro</option>
<option>Pegablock</option>
<option>Seconcreto</option>
<option>Repellos</option>
<option>Varios / Proyecto Completo</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Volumen aproximado requerido</label>
<input className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-ibmex-blue focus:border-ibmex-blue block p-3" placeholder="Ej. 5000 blocks, 10 toneladas..." type="text"/>
</div>
<div className="flex items-start">
<div className="flex items-center h-5">
<input className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 form-checkbox" id="b2b-check" required="" type="checkbox" value=""/>
</div>
<label className="ml-2 text-sm font-medium text-gray-600" htmlFor="b2b-check">Confirmo que represento a una empresa o constructora.</label>
</div>
<button className="w-full text-white bg-ibmex-blue hover:bg-ibmex-blueDark focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-5 py-4 text-center shadow-lg transition-transform hover:-translate-y-0.5" type="submit">
            Solicitar Cotización
          </button>
</form>
</div>
</div>
</section>

<section className="py-20 bg-ibmex-light border-t border-gray-200 text-center">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-extrabold text-ibmex-blueDark mb-4">¿Listo para iniciar tu obra?</h2>
<p className="text-lg text-gray-600 mb-8">Nuestro equipo técnico te asesora y cotiza de forma inmediata vía WhatsApp.</p>
<a className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all hover:scale-105 text-lg" href="https://whatsform.com" target="_blank">
<iconify-icon icon="solar:brand-whatsapp-linear" width="28"></iconify-icon>
        Cotizar ahora por WhatsApp
      </a>
</div>
</section>

<footer className="bg-ibmex-blueDark text-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-gray-700 pb-12">
<div className="md:col-span-1">
<div className="text-white font-black text-2xl italic tracking-tighter mb-4">IBMEX</div>
<p className="text-gray-400 text-sm mb-6">
            Comercialización mayorista de materiales de construcción. Calidad, volumen y entregas puntuales para desarrolladores.
          </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="https://www.facebook.com"><iconify-icon icon="brandico:facebook-rect" width="24"></iconify-icon></a>
<a className="text-gray-400 hover:text-white transition-colors" href="https://www.instagram.com"><iconify-icon icon="brandico:instagram-filled" width="24"></iconify-icon></a>
<a className="text-gray-400 hover:text-white transition-colors" href="https://www.linkedin.com"><iconify-icon icon="brandico:linkedin-rect" width="24"></iconify-icon></a>
</div>
</div>
<div className="md:col-span-2 grid grid-cols-2 gap-8">
<div>
<h4 className="font-bold mb-4 text-gray-200">Productos</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Block Hueco</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pegamuro</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pegablock</a></li>
<li><a className="hover:text-white transition-colors" href="#">Seconcreto</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-gray-200">Empresa</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#beneficios">Nosotros</a></li>
<li><a className="hover:text-white transition-colors" href="#proceso">Logística</a></li>
<li><a className="hover:text-white transition-colors" href="#cotizar">Contacto B2B</a></li>
</ul>
</div>
</div>
<div>
<h4 className="font-bold mb-4 text-gray-200">Contacto</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5" icon="solar:phone-calling-linear"></iconify-icon>
<span>55 0000 0000</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5" icon="solar:letter-linear"></iconify-icon>
<span>ventas@ibmex.com</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>CDMX y Área Metropolitana</span>
</li>
</ul>
</div>
</div>
<div className="text-center text-gray-500 text-xs flex flex-col md:flex-row justify-between items-center">
<p>© 2024 IBMEX. Todos los derechos reservados.</p>
<div className="flex gap-4 mt-2 md:mt-0">
<a className="hover:text-gray-300" href="#">Aviso de Privacidad</a>
<a className="hover:text-gray-300" href="#">Términos y Condiciones</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
