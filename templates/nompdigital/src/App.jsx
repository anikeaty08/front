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
      

<header className="border-b border-neutral-200 sticky top-0 bg-white/80 backdrop-blur-md z-50">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
<a className="display text-xl font-bold tracking-tighter" href="#">NOMP<span className="text-neutral-400">.</span></a>
<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
<a className="hover:text-black" href="#servicios">Servicios</a>
<a className="hover:text-black" href="#estudio">Estudio</a>
<a className="hover:text-black" href="#trabajos">Trabajos</a>
<a className="hover:text-black" href="#faq">FAQ</a>
</nav>
<a className="text-sm bg-black text-white px-5 py-2.5 hover:bg-neutral-800 transition flex items-center gap-2" href="#contacto">
      Hablemos <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</header>

<section className="border-b border-neutral-200">
<div className="max-w-[1400px] mx-auto">
<div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar">

<div className="min-w-full snap-center px-6 lg:px-10 pt-16 pb-20">
<div className="grid lg:grid-cols-12 gap-10 items-end">
<div className="lg:col-span-7">
<div className="flex items-center gap-3 mb-8 text-xs uppercase tracking-widest text-neutral-500">
<span className="w-2 h-2 bg-black"></span> Oferta 01 — Fashion E-commerce
            </div>
<h1 className="display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.9]">
              Diseñamos<br/>
              tiendas que<br/>
<span className="italic font-light">venden moda.</span>
</h1>
<p className="mt-8 text-base text-neutral-600 max-w-xl leading-relaxed">
              Sitios e-commerce sobre Shopify y Tiendanube con identidad editorial. Conversión, velocidad y estética para marcas argentinas con ambición global.
            </p>
<div className="mt-10 flex items-center gap-4">
<a className="bg-black text-white px-6 py-4 text-sm flex items-center gap-3 hover:bg-neutral-800 transition" href="#servicios">
                Empezar proyecto <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="px-6 py-4 text-sm border border-neutral-300 hover:border-black transition" href="#trabajos">
                Ver portfolio
              </a>
</div>
</div>
<div className="lg:col-span-5">
<div className="aspect-[4/5] bg-neutral-100 relative overflow-hidden">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800"/>
<div className="absolute bottom-6 left-6 text-white">
<div className="text-xs uppercase tracking-widest opacity-80">Featured</div>
<div className="display text-2xl mt-1">SS25 Collection</div>
</div>
</div>
</div>
</div>
</div>

<div className="min-w-full snap-center px-6 lg:px-10 pt-16 pb-20">
<div className="grid lg:grid-cols-12 gap-10 items-end">
<div className="lg:col-span-7">
<div className="flex items-center gap-3 mb-8 text-xs uppercase tracking-widest text-neutral-500">
<span className="w-2 h-2 bg-black"></span> Oferta 02 — Performance Ads
            </div>
<h1 className="display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.9]">
              Google &amp;<br/>
              Meta Ads<br/>
<span className="italic font-light">con ROAS real.</span>
</h1>
<p className="mt-8 text-base text-neutral-600 max-w-xl leading-relaxed">
              Estrategias de pauta digital optimizadas por data. Multiplicamos ventas online sin desperdiciar presupuesto.
            </p>
<div className="mt-10 flex items-center gap-4">
<a className="bg-black text-white px-6 py-4 text-sm flex items-center gap-3 hover:bg-neutral-800 transition" href="#servicios">
                Auditoría gratis <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-5">
<div className="aspect-[4/5] bg-neutral-100 relative overflow-hidden">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"/>
</div>
</div>
</div>
</div>

<div className="min-w-full snap-center px-6 lg:px-10 pt-16 pb-20">
<div className="grid lg:grid-cols-12 gap-10 items-end">
<div className="lg:col-span-7">
<div className="flex items-center gap-3 mb-8 text-xs uppercase tracking-widest text-neutral-500">
<span className="w-2 h-2 bg-black"></span> Oferta 03 — AI Content Studio
            </div>
<h1 className="display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.9]">
              Contenido<br/>
              con IA para<br/>
<span className="italic font-light">tu marca.</span>
</h1>
<p className="mt-8 text-base text-neutral-600 max-w-xl leading-relaxed">
              Producción de imagen, video y copywriting potenciada por inteligencia artificial. Escala creativa sin perder identidad.
            </p>
<div className="mt-10 flex items-center gap-4">
<a className="bg-black text-white px-6 py-4 text-sm flex items-center gap-3 hover:bg-neutral-800 transition" href="#servicios">
                Conocer más <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-5">
<div className="aspect-[4/5] bg-neutral-100 relative overflow-hidden">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800"/>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 lg:px-10 pb-8 flex items-center justify-between">
<div className="flex gap-2">
<span className="w-8 h-[2px] bg-black"></span>
<span className="w-8 h-[2px] bg-neutral-300"></span>
<span className="w-8 h-[2px] bg-neutral-300"></span>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 border border-neutral-300 hover:border-black transition flex items-center justify-center">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 border border-neutral-300 hover:border-black transition flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-200" id="estudio">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
<div className="grid lg:grid-cols-12 gap-12 mb-20">
<div className="lg:col-span-4">
<div className="text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2">
<iconify-icon icon="solar:asterisk-linear" width="14"></iconify-icon> Sobre el estudio
        </div>
</div>
<div className="lg:col-span-8">
<h2 className="display text-3xl md:text-5xl font-medium leading-tight tracking-tight">
          NOMP AGENCY es un estudio digital especializado en marcas de moda. Trabajamos en la intersección entre <span className="italic font-light">estética editorial</span> y performance comercial — desde Buenos Aires hacia el mundo.
        </h2>
<p className="mt-8 text-base text-neutral-600 max-w-2xl leading-relaxed">
          Combinamos diseño, tecnología y datos para construir ecosistemas digitales completos: tiendas online, contenido, publicidad y operación. Cada decisión está pensada para que tu marca crezca con coherencia.
        </p>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 border-t border-neutral-200">
<div className="p-8 lg:p-10 border-r border-neutral-200">
<div className="display text-5xl md:text-7xl font-semibold tracking-tight">+120</div>
<div className="mt-4 text-sm text-neutral-600">Marcas impulsadas</div>
</div>
<div className="p-8 lg:p-10 lg:border-r border-neutral-200">
<div className="display text-5xl md:text-7xl font-semibold tracking-tight">8.4×</div>
<div className="mt-4 text-sm text-neutral-600">ROAS promedio anual</div>
</div>
<div className="p-8 lg:p-10 border-r border-t lg:border-t-0 border-neutral-200">
<div className="display text-5xl md:text-7xl font-semibold tracking-tight">USD 14M</div>
<div className="mt-4 text-sm text-neutral-600">Generados para clientes</div>
</div>
<div className="p-8 lg:p-10 border-t lg:border-t-0 border-neutral-200">
<div className="display text-5xl md:text-7xl font-semibold tracking-tight">07</div>
<div className="mt-4 text-sm text-neutral-600">Años en la industria fashion</div>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-200" id="servicios">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<div className="text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2 mb-6">
<iconify-icon icon="solar:asterisk-linear" width="14"></iconify-icon> Servicios
        </div>
<h2 className="display text-4xl md:text-6xl font-semibold tracking-tight">Lo que hacemos<br/>por tu marca.</h2>
</div>
<p className="text-sm text-neutral-600 max-w-sm">Servicios integrados, sin agencias paralelas. Una sola conversación, un solo equipo, resultados medibles.</p>
</div>
<div className="border-t border-neutral-200">

<a className="group flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-200 py-8 hover:bg-neutral-50 transition px-2" href="#">
<div className="flex items-start md:items-center gap-6">
<span className="text-xs text-neutral-400 mt-1 md:mt-0">01</span>
<div>
<h3 className="display text-2xl md:text-3xl font-medium tracking-tight">Desarrollo de sitios web</h3>
<p className="text-sm text-neutral-500 mt-1">Shopify · Tiendanube · Custom</p>
</div>
</div>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<span className="text-sm text-neutral-500 hidden md:inline">Ver detalles</span>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
</a>
<a className="group flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-200 py-8 hover:bg-neutral-50 transition px-2" href="#">
<div className="flex items-start md:items-center gap-6">
<span className="text-xs text-neutral-400 mt-1 md:mt-0">02</span>
<div>
<h3 className="display text-2xl md:text-3xl font-medium tracking-tight">Google Ads</h3>
<p className="text-sm text-neutral-500 mt-1">Search · Shopping · Performance Max</p>
</div>
</div>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</a>
<a className="group flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-200 py-8 hover:bg-neutral-50 transition px-2" href="#">
<div className="flex items-start md:items-center gap-6">
<span className="text-xs text-neutral-400 mt-1 md:mt-0">03</span>
<div>
<h3 className="display text-2xl md:text-3xl font-medium tracking-tight">Meta Ads</h3>
<p className="text-sm text-neutral-500 mt-1">Instagram · Facebook · Advantage+</p>
</div>
</div>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</a>
<a className="group flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-200 py-8 hover:bg-neutral-50 transition px-2" href="#">
<div className="flex items-start md:items-center gap-6">
<span className="text-xs text-neutral-400 mt-1 md:mt-0">04</span>
<div>
<h3 className="display text-2xl md:text-3xl font-medium tracking-tight">Social Media Management</h3>
<p className="text-sm text-neutral-500 mt-1">Estrategia · Creatividad · Comunidad</p>
</div>
</div>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</a>
<a className="group flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-200 py-8 hover:bg-neutral-50 transition px-2" href="#">
<div className="flex items-start md:items-center gap-6">
<span className="text-xs text-neutral-400 mt-1 md:mt-0">05</span>
<div>
<h3 className="display text-2xl md:text-3xl font-medium tracking-tight">Contenido con IA</h3>
<p className="text-sm text-neutral-500 mt-1">Imagen · Video · Copywriting</p>
</div>
</div>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</a>
<a className="group flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-200 py-8 hover:bg-neutral-50 transition px-2" href="#">
<div className="flex items-start md:items-center gap-6">
<span className="text-xs text-neutral-400 mt-1 md:mt-0">06</span>
<div>
<h3 className="display text-2xl md:text-3xl font-medium tracking-tight">Analítica &amp; Data</h3>
<p className="text-sm text-neutral-500 mt-1">GA4 · Looker · Server-side tracking</p>
</div>
</div>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</a>
<a className="group flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-200 py-8 hover:bg-neutral-50 transition px-2" href="#">
<div className="flex items-start md:items-center gap-6">
<span className="text-xs text-neutral-400 mt-1 md:mt-0">07</span>
<div>
<h3 className="display text-2xl md:text-3xl font-medium tracking-tight">CRM &amp; Sistemas de stock</h3>
<p className="text-sm text-neutral-500 mt-1">HubSpot · Klaviyo · Inventario unificado</p>
</div>
</div>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="border-b border-neutral-200 py-12 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-8">
<div className="text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2">
<iconify-icon icon="solar:asterisk-linear" width="14"></iconify-icon> Marcas que confían
    </div>
</div>
<div className="relative">
<div className="flex marquee whitespace-nowrap" style={{width: 'max-content'}}>
<div className="flex items-center gap-16 px-8">
<span className="display text-3xl font-bold tracking-tighter">RAPSODIA</span>
<span className="display text-3xl font-light italic tracking-tight">jazmín chebar</span>
<span className="display text-3xl font-semibold tracking-tighter">PRÜNE</span>
<span className="display text-3xl font-bold tracking-widest">CARDÓN</span>
<span className="display text-3xl font-medium tracking-tight">Vitamina</span>
<span className="display text-3xl font-extrabold tracking-tighter">ÜMA</span>
<span className="display text-3xl font-light tracking-widest">AY NOT DEAD</span>
<span className="display text-3xl font-semibold italic">Kosiuko</span>
</div>
<div className="flex items-center gap-16 px-8">
<span className="display text-3xl font-bold tracking-tighter">RAPSODIA</span>
<span className="display text-3xl font-light italic tracking-tight">jazmín chebar</span>
<span className="display text-3xl font-semibold tracking-tighter">PRÜNE</span>
<span className="display text-3xl font-bold tracking-widest">CARDÓN</span>
<span className="display text-3xl font-medium tracking-tight">Vitamina</span>
<span className="display text-3xl font-extrabold tracking-tighter">ÜMA</span>
<span className="display text-3xl font-light tracking-widest">AY NOT DEAD</span>
<span className="display text-3xl font-semibold italic">Kosiuko</span>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-200" id="trabajos">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<div className="text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2 mb-6">
<iconify-icon icon="solar:asterisk-linear" width="14"></iconify-icon> Selected work
        </div>
<h2 className="display text-4xl md:text-6xl font-semibold tracking-tight">Trabajos<br/>recientes.</h2>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 border border-neutral-300 hover:border-black transition flex items-center justify-center">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 border border-neutral-300 hover:border-black transition flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-6 lg:-mx-10 px-6 lg:px-10 gap-6">

<div className="min-w-full snap-center">
<div className="grid md:grid-cols-3 gap-6">
<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800"/>
</div>
<div className="mt-4 flex justify-between">
<div>
<div className="display text-lg font-medium tracking-tight">Atelier Norte</div>
<div className="text-xs text-neutral-500 mt-1">Shopify · Branding · Ads</div>
</div>
<span className="text-xs text-neutral-400">2024</span>
</div>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800"/>
</div>
<div className="mt-4 flex justify-between">
<div>
<div className="display text-lg font-medium tracking-tight">Mara Studio</div>
<div className="text-xs text-neutral-500 mt-1">Tiendanube · SMM</div>
</div>
<span className="text-xs text-neutral-400">2024</span>
</div>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800"/>
</div>
<div className="mt-4 flex justify-between">
<div>
<div className="display text-lg font-medium tracking-tight">Casa Lupo</div>
<div className="text-xs text-neutral-500 mt-1">E-commerce · CRM</div>
</div>
<span className="text-xs text-neutral-400">2024</span>
</div>
</div>
</div>
</div>

<div className="min-w-full snap-center">
<div className="grid md:grid-cols-3 gap-6">
<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800"/>
</div>
<div className="mt-4 flex justify-between">
<div>
<div className="display text-lg font-medium tracking-tight">Eluvia</div>
<div className="text-xs text-neutral-500 mt-1">Meta Ads · Content</div>
</div>
<span className="text-xs text-neutral-400">2024</span>
</div>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"/>
</div>
<div className="mt-4 flex justify-between">
<div>
<div className="display text-lg font-medium tracking-tight">Forma &amp; Fondo</div>
<div className="text-xs text-neutral-500 mt-1">Shopify · Analytics</div>
</div>
<span className="text-xs text-neutral-400">2023</span>
</div>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800"/>
</div>
<div className="mt-4 flex justify-between">
<div>
<div className="display text-lg font-medium tracking-tight">Notas Salvajes</div>
<div className="text-xs text-neutral-500 mt-1">Branding · Web</div>
</div>
<span className="text-xs text-neutral-400">2023</span>
</div>
</div>
</div>
</div>

<div className="min-w-full snap-center">
<div className="grid md:grid-cols-3 gap-6">
<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800"/>
</div>
<div className="mt-4 flex justify-between">
<div>
<div className="display text-lg font-medium tracking-tight">Belén Capelle</div>
<div className="text-xs text-neutral-500 mt-1">AI Content · Ads</div>
</div>
<span className="text-xs text-neutral-400">2023</span>
</div>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1496217590455-aa63a8350eea?w=800"/>
</div>
<div className="mt-4 flex justify-between">
<div>
<div className="display text-lg font-medium tracking-tight">Sin Fin</div>
<div className="text-xs text-neutral-500 mt-1">Tiendanube · Stock</div>
</div>
<span className="text-xs text-neutral-400">2023</span>
</div>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800"/>
</div>
<div className="mt-4 flex justify-between">
<div>
<div className="display text-lg font-medium tracking-tight">Indómita</div>
<div className="text-xs text-neutral-500 mt-1">E-commerce · CRM</div>
</div>
<span className="text-xs text-neutral-400">2022</span>
</div>
</div>
</div>
</div>
</div>
<div className="flex gap-2 mt-10">
<span className="w-12 h-[2px] bg-black"></span>
<span className="w-12 h-[2px] bg-neutral-300"></span>
<span className="w-12 h-[2px] bg-neutral-300"></span>
</div>
</div>
</section>

<section className="border-b border-neutral-200" id="faq">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<div className="text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2 mb-6">
<iconify-icon icon="solar:asterisk-linear" width="14"></iconify-icon> Preguntas frecuentes
        </div>
<h2 className="display text-4xl md:text-5xl font-semibold tracking-tight">¿Tenés<br/>dudas?</h2>
<p className="mt-6 text-sm text-neutral-600">Respondemos lo más consultado. Si no encontrás tu respuesta, escribinos.</p>
</div>
<div className="lg:col-span-8">
<details className="group border-t border-neutral-200 py-6" open="">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="display text-lg md:text-xl font-medium tracking-tight pr-6">¿Trabajan con marcas fuera de Argentina?</span>
<iconify-icon className="faq-icon shrink-0" icon="solar:add-circle-linear" width="28"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-600 leading-relaxed max-w-2xl">Sí. Operamos para clientes en LATAM, Estados Unidos y Europa. Nuestras integraciones con Shopify y herramientas internacionales permiten escalar desde cualquier mercado.</p>
</details>
<details className="group border-t border-neutral-200 py-6">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="display text-lg md:text-xl font-medium tracking-tight pr-6">¿Cuánto tarda el desarrollo de una tienda online?</span>
<iconify-icon className="faq-icon shrink-0" icon="solar:add-circle-linear" width="28"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-600 leading-relaxed max-w-2xl">Una tienda en Tiendanube se entrega entre 3 y 5 semanas. Un proyecto custom en Shopify, entre 6 y 10 semanas según alcance.</p>
</details>
<details className="group border-t border-neutral-200 py-6">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="display text-lg md:text-xl font-medium tracking-tight pr-6">¿Cómo trabajan el contenido con IA?</span>
<iconify-icon className="faq-icon shrink-0" icon="solar:add-circle-linear" width="28"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-600 leading-relaxed max-w-2xl">Combinamos modelos generativos con dirección creativa humana. Definimos un sistema visual de marca y producimos campañas, lookbooks y videos a escala manteniendo coherencia.</p>
</details>
<details className="group border-t border-neutral-200 py-6">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="display text-lg md:text-xl font-medium tracking-tight pr-6">¿Qué incluye el servicio de Performance Ads?</span>
<iconify-icon className="faq-icon shrink-0" icon="solar:add-circle-linear" width="28"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-600 leading-relaxed max-w-2xl">Estrategia, setup técnico, creatividades, optimización diaria y reporte semanal con KPIs reales: ROAS, CPA, LTV. Nada de métricas vanidosas.</p>
</details>
<details className="group border-t border-b border-neutral-200 py-6">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="display text-lg md:text-xl font-medium tracking-tight pr-6">¿Pueden integrar mi sistema de stock con la tienda?</span>
<iconify-icon className="faq-icon shrink-0" icon="solar:add-circle-linear" width="28"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-600 leading-relaxed max-w-2xl">Sí. Conectamos tu ERP, sistema de inventario y CRM con Shopify o Tiendanube para una operación unificada online y retail.</p>
</details>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-200" id="contacto">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-32">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-8">
<h2 className="display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">
          Construyamos<br/>algo <span className="italic font-light">memorable.</span>
</h2>
</div>
<div className="lg:col-span-4">
<p className="text-sm text-neutral-600 mb-6">Contanos sobre tu marca. Te respondemos en menos de 24h hábiles.</p>
<a className="block bg-black text-white px-6 py-5 text-sm hover:bg-neutral-800 transition" href="mailto:hola@nomp.agency">
<div className="flex items-center justify-between">
<span>hola@nomp.agency</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</a>
<a className="block border border-neutral-300 px-6 py-5 text-sm mt-3 hover:border-black transition" href="#">
<div className="flex items-center justify-between">
<span>Agendar una llamada</span>
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-white">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
<div className="grid md:grid-cols-12 gap-10 mb-16">
<div className="md:col-span-5">
<div className="display text-6xl md:text-8xl font-bold tracking-tighter">NOMP<span className="text-neutral-300">.</span></div>
<p className="mt-6 text-sm text-neutral-600 max-w-sm">Digital agency for fashion brands. Buenos Aires, Argentina.</p>
</div>
<div className="md:col-span-2">
<div className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Estudio</div>
<ul className="space-y-2 text-sm">
<li><a className="hover:underline" href="#">Sobre nosotros</a></li>
<li><a className="hover:underline" href="#">Carreras</a></li>
<li><a className="hover:underline" href="#">Contacto</a></li>
</ul>
</div>
<div className="md:col-span-2">
<div className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Servicios</div>
<ul className="space-y-2 text-sm">
<li><a className="hover:underline" href="#">Web</a></li>
<li><a className="hover:underline" href="#">Ads</a></li>
<li><a className="hover:underline" href="#">SMM</a></li>
<li><a className="hover:underline" href="#">AI Content</a></li>
</ul>
</div>
<div className="md:col-span-3">
<div className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Social</div>
<ul className="space-y-2 text-sm">
<li><a className="hover:underline flex items-center gap-2" href="#">Instagram <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon></a></li>
<li><a className="hover:underline flex items-center gap-2" href="#">LinkedIn <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon></a></li>
<li><a className="hover:underline flex items-center gap-2" href="#">Behance <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon></a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-200 pt-6 flex flex-col md:flex-row justify-between text-xs text-neutral-500 gap-3">
<span>© 2025 NOMP AGENCY. Todos los derechos reservados.</span>
<div className="flex gap-6">
<a className="hover:text-black" href="#">Privacidad</a>
<a className="hover:text-black" href="#">Términos</a>
<a className="hover:text-black" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
