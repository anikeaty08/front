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
      

<nav className="absolute top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-900/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<div className="bg-orange-500 p-1.5 rounded-lg flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:wrench-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight">David Jimenez</span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-normal text-white hover:text-orange-400 transition-colors" href="#">Inicio</a>
<a className="text-sm font-normal text-white/80 hover:text-white transition-colors" href="#">Empresa</a>
<a className="text-sm font-normal text-white/80 hover:text-white transition-colors" href="#">Calefacción</a>
<a className="text-sm font-normal text-white/80 hover:text-white transition-colors" href="#">Fontanería</a>
<a className="text-sm font-normal text-white/80 hover:text-white transition-colors" href="#">Renovables</a>
<a className="text-sm font-normal text-white/80 hover:text-white transition-colors" href="#">Servicios</a>
</div>
<a className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-normal transition-all flex items-center gap-2" href="tel:661871635">
<iconify-icon className="text-base" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                661 871 635
            </a>
</div>
</nav>

<header className="relative min-h-[850px] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Fontanería en Madrid" className="w-full h-full object-cover" src="https://www.fontaneriacalefaccion.com/cache/8/a/2/5/4/8a254c2c0049b971ff066817232eebbf72cee2f2.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-sky-900/85 to-sky-900/50"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<span className="text-orange-400 font-normal tracking-wide uppercase text-sm">#Instaladores Autorizados</span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Empresa de fontanería y calefacción en Madrid.
                </h1>
<div className="flex flex-col gap-2 pt-4">
<p className="text-xl text-white font-medium tracking-tight">Más de 20 años de experiencia</p>
<p className="text-slate-300 text-sm max-w-md leading-relaxed">Soluciones profesionales para trabajos especializados. Instaladores autorizados por Industria en fontanería, calefacción y gas para particulares y empresas.</p>
</div>
</div>

<div className="glass-panel p-8 md:p-10 rounded-2xl text-white">
<h3 className="text-2xl font-medium tracking-tight mb-2">Solicitar Presupuesto</h3>
<p className="text-slate-300 text-sm mb-8">Rellene el siguiente formulario con sus datos de contacto y le asesoraremos sin compromiso.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-normal text-slate-300">Nombre</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-normal text-slate-300">Apellidos</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-normal text-slate-300">Email</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-normal text-slate-300">Teléfono</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-normal text-slate-300">Asunto del servicio</label>
<select className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm appearance-none text-white">
<option className="text-slate-900">Cambio de caldera</option>
<option className="text-slate-900">Suelo radiante</option>
<option className="text-slate-900">Instalación de radiadores</option>
<option className="text-slate-900">Energía solar térmica</option>
<option className="text-slate-900">Grupos de presión</option>
<option className="text-slate-900">Otro servicio</option>
</select>
</div>
<div className="space-y-1 pt-2">
<label className="text-xs font-normal text-slate-300">Mensaje</label>
<textarea className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm resize-none" rows="2"></textarea>
</div>
<button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-normal py-3 rounded-full mt-4 transition-colors" type="button">
                        Enviar Consulta
                    </button>
</form>
</div>
</div>
</header>

<div className="bg-sky-950 py-6 overflow-hidden whitespace-nowrap">
<div className="flex items-center gap-12 text-white font-medium text-xl md:text-2xl tracking-tight animate-marquee justify-center">
<span>Cambio de caldera</span>
<span className="text-orange-500">•</span>
<span>Suelo radiante</span>
<span className="text-orange-500">•</span>
<span>Instalación de radiadores</span>
<span className="text-orange-500">•</span>
<span>Energía solar térmica</span>
<span className="text-orange-500">•</span>
<span>Grupos de presión</span>
</div>
</div>

<section className="py-20 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-medium text-sky-900 mb-2 tracking-tight">98<span className="text-orange-500 text-2xl align-top">%</span></p>
<p className="text-slate-500 text-sm font-normal">Clientes satisfechos</p>
</div>
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-medium text-sky-900 mb-2 tracking-tight">20<span className="text-orange-500 text-2xl align-top">+</span></p>
<p className="text-slate-500 text-sm font-normal">Años de experiencia</p>
</div>
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-medium text-sky-900 mb-2 tracking-tight">100<span className="text-orange-500 text-2xl align-top">%</span></p>
<p className="text-slate-500 text-sm font-normal">Autorizados por Industria</p>
</div>
<div className="text-center">
<p className="text-4xl md:text-5xl font-medium text-sky-900 mb-2 tracking-tight">24<span className="text-orange-500 text-2xl align-top">h</span></p>
<p className="text-slate-500 text-sm font-normal">Respuesta rápida</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="inline-block bg-sky-100 text-sky-700 text-xs font-normal px-3 py-1 rounded-full mb-6">NUESTRA EMPRESA</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-sky-950 tracking-tight leading-tight mb-8">
                    La experiencia que su hogar e instalación necesitan
                </h2>
<p className="text-slate-500 text-lg leading-relaxed mb-8">
                    Ponemos a su alcance un amplio abanico de servicios de instalación, reparación y mantenimiento, adaptándonos a sus necesidades concretas y a su presupuesto. Trabajamos para particulares, comunidades de vecinos y empresas.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl text-sky-900 font-normal tracking-tight">Instaladores autorizados oficiales</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl text-sky-900 font-normal tracking-tight">Presupuestos ajustados a medida</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl text-sky-900 font-normal tracking-tight">Atención para particulares y empresas</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl text-sky-900 font-normal tracking-tight">Más de dos décadas de dedicación</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Instalación de fontanería" className="w-full h-full object-cover" src="https://www.fontaneriacalefaccion.com/data/2609/galerias/a3b1f0ff9f4abf620ea916cb998df9d648da7ede.jpeg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-normal px-3 py-1 rounded-full mb-4">NUESTROS SERVICIOS</span>
<h2 className="text-3xl md:text-4xl font-medium text-sky-950 tracking-tight mb-4">
                    Especialistas en instalaciones y confort térmico.
                </h2>
<p className="text-lg text-slate-500 leading-relaxed">
                    Simplifique sus necesidades de mantenimiento y reparación con una única empresa capacitada para ofrecer garantías en cada trabajo.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">01.</span>
<div className="mb-6">
<iconify-icon className="text-4xl text-sky-700" icon="solar:wrench-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 tracking-tight group-hover:text-orange-500 transition-colors">Fontanería General</h3>
<p className="text-slate-500 leading-relaxed">Reparación de averías, mantenimiento y nuevas instalaciones para asegurar un flujo de agua óptimo.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">02.</span>
<div className="mb-6">
<iconify-icon className="text-4xl text-sky-700" icon="solar:flame-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 tracking-tight group-hover:text-orange-500 transition-colors">Calderas y Calefacción</h3>
<p className="text-slate-500 leading-relaxed">Instalación y cambio de calderas, y montaje completo de redes de radiadores en viviendas y locales.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">03.</span>
<div className="mb-6">
<iconify-icon className="text-4xl text-sky-700" icon="solar:layers-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 tracking-tight group-hover:text-orange-500 transition-colors">Suelo Radiante</h3>
<p className="text-slate-500 leading-relaxed">Máximo confort y eficiencia energética con la instalación experta de sistemas de calefacción por suelo.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">04.</span>
<div className="mb-6">
<iconify-icon className="text-4xl text-sky-700" icon="solar:sun-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 tracking-tight group-hover:text-orange-500 transition-colors">Energía Solar Térmica</h3>
<p className="text-slate-500 leading-relaxed">Instalación de paneles y sistemas solares térmicos para el ahorro de consumo y cuidado medioambiental.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">05.</span>
<div className="mb-6">
<iconify-icon className="text-4xl text-sky-700" icon="solar:waterdrops-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 tracking-tight group-hover:text-orange-500 transition-colors">Grupos de Presión</h3>
<p className="text-slate-500 leading-relaxed">Soluciones profesionales en instalación y mantenimiento de equipos de presión para comunidades y naves.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">06.</span>
<div className="mb-6">
<iconify-icon className="text-4xl text-sky-700" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 tracking-tight group-hover:text-orange-500 transition-colors">Instalaciones de Gas</h3>
<p className="text-slate-500 leading-relaxed">Como instaladores autorizados, garantizamos trabajos seguros y certificados en su acometida de gas.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-normal px-3 py-1 rounded-full mb-4">GALERÍA</span>
<h2 className="text-3xl md:text-4xl font-medium text-sky-950 tracking-tight mb-4">
                    Imágenes de nuestros trabajos
                </h2>
<p className="text-lg text-slate-500">
                    Descubra la calidad y acabado profesional en nuestras instalaciones recientes por todo Madrid.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Trabajo Fontanería" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://www.fontaneriacalefaccion.com/data/2609/galerias/a3b1f0ff9f4abf620ea916cb998df9d648da7ede.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-xl font-medium text-white mb-2 leading-tight tracking-tight">Instalaciones de Calefacción</h3>
<span className="inline-block text-white/90 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">Ver Detalles</span>
</div>
</div>

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Trabajo Fontanería 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://www.fontaneriacalefaccion.com/data/2609/galerias/ae3d694d2536939b663db3ac0367a0412e2b0256.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-xl font-medium text-white mb-2 leading-tight tracking-tight">Montaje de Suelo Radiante</h3>
<span className="inline-block text-white/90 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">Ver Detalles</span>
</div>
</div>

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Trabajo Fontanería 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://www.fontaneriacalefaccion.com/data/2609/galerias/718a2ca39c572b3e26e66984f6912f00b79257b8.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-xl font-medium text-white mb-2 leading-tight tracking-tight">Cuartos de Caldera</h3>
<span className="inline-block text-white/90 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">Ver Detalles</span>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-8">
<span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
<span className="w-2.5 h-2.5 rounded-full bg-sky-900"></span>
<span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-normal text-slate-500 mb-8 uppercase tracking-wide">Nuestros Colaboradores y Proveedores de Confianza</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">

<div className="flex items-center gap-2 font-medium text-xl tracking-tight"><iconify-icon icon="solar:box-linear"></iconify-icon> Saunier Duval</div>
<div className="flex items-center gap-2 font-medium text-xl tracking-tight"><iconify-icon icon="solar:record-circle-linear"></iconify-icon> Vaillant</div>
<div className="flex items-center gap-2 font-medium text-xl tracking-tight"><iconify-icon icon="solar:danger-triangle-linear"></iconify-icon> Junkers</div>
<div className="flex items-center gap-2 font-medium text-xl tracking-tight"><iconify-icon icon="solar:programming-linear"></iconify-icon> Baxi</div>
</div>
</div>
</section>

<footer className="bg-sky-950 text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-2">
<div className="bg-orange-500 p-1.5 rounded-lg flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:wrench-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight">David Jimenez</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                        Instaladores autorizados por Industria en fontanería, calefacción y gas en Madrid.
                    </p>
</div>

<div>
<h4 className="font-medium text-white mb-6">Enlaces Rápidos</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Inicio</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Empresa</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Calefacción</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Fontanería</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Energías Renovables</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Aviso Legal</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-white mb-6">Contacto</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li className="flex items-center gap-3">
<iconify-icon className="text-base" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:661871635">661 871 635</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-base" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:info@fontaneriacalefaccion.com">info@fontaneriacalefaccion.com</a>
</li>
</ul>
</div>

<div>
<h4 className="font-medium text-white mb-6">Nuestra Ubicación</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                        C/ Zapatera, 13<br/>
                        28950 Moraleja de Enmedio<br/>
                        (Madrid)
                    </p>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">Copyright © David Jimenez Fontaneros. Todos los derechos reservados.</p>
<div className="flex items-center gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
