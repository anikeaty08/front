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
      

<nav className="fixed w-full z-50 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="uppercase text-xl font-medium text-stone-900 tracking-tight" href="#">Efecto Mate</a>

<div className="hidden md:flex items-center space-x-8">
<a className="hover:text-stone-900 transition-colors text-sm text-stone-600" href="#products">Productos</a>
<a className="text-sm text-stone-600 hover:text-stone-900 transition-colors" href="#about">Filosofía</a>
<a className="text-sm text-stone-600 hover:text-stone-900 transition-colors" href="#experience">Experiencia</a>
</div>

<div className="flex items-center space-x-4">
<button className="text-stone-600 hover:text-stone-900 transition-colors">
<iconify-icon className="" height="24" icon="solar:user-linear" strokeWidth="1.5" style={{color: 'rgb(28, 25, 23)'}} width="24"></iconify-icon>
</button>
<button className="relative text-stone-600 hover:text-stone-900 transition-colors">
<iconify-icon className="" icon="solar:bag-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 h-2 w-2 bg-stone-900 rounded-full"></span>
</button>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 mb-6 fade-in-up">
<span className="w-2 h-2 rounded-full bg-green-700"></span>
<span className="uppercase text-xs font-medium text-stone-600 tracking-wide">Nueva Colección 2026</span>
</div>
<h1 className="leading-[1.1] fade-in-up delay-100 lg:text-7xl text-5xl font-semibold text-[#1a5b39] tracking-tight mb-6">
                        Tradición que <br/> <span className="text-stone-500">se comparte.</span>
</h1>
<p className="text-lg text-stone-600 mb-8 max-w-md font-light leading-relaxed fade-in-up delay-200">
                        Mates, termos y accesorios diseñados con la nobleza de los materiales de siempre y la estética de hoy. Para acompañar cada momento.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto fade-in-up delay-300">
<a className="inline-flex justify-center items-center hover:bg-[#4e815b] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium text-white bg-[#1a5b39] rounded-full pt-4 pr-8 pb-4 pl-8" href="#products">
  Ver productos
</a>
<a className="inline-flex justify-center items-center px-8 py-4 bg-white border border-stone-200 text-stone-900 text-sm font-medium rounded-full hover:bg-stone-50 transition-all duration-300" href="#about">
                            Conocer la marca
                        </a>
</div>
</div>

<div className="lg:w-1/2 w-full fade-in-up delay-200">
<div className="relative w-full aspect-[4/5] lg:aspect-square bg-white rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] ring-1 ring-stone-900/5 group">

<img alt="Premium Mate Set" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-sm flex items-center justify-between">
<div className="">
<p className="text-sm font-medium text-stone-900">Kit Matero Completo</p>
<p className="text-xs text-stone-500">Cuero genuino &amp; Alpaca</p>
</div>
<div className="flex text-white bg-[#1a5b39] w-10 h-10 rounded-full items-center justify-center">
<iconify-icon className="" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl font-medium text-stone-900 tracking-tight mb-4">La esencia de Efecto Mate</h2>
<p className="text-stone-500 font-light leading-relaxed text-lg">
                    Creemos que el mate es más que una bebida; es un lenguaje universal de unión. Fusionamos la artesanía argentina con líneas puras y minimalistas, creando objetos que honran el pasado pero viven en el presente.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 bg-stone-50 rounded-2xl hover:bg-[#FDFCF8] hover:shadow-sm transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 text-stone-900 shadow-sm border border-stone-100 group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Materiales de calidad</h3>
<p className="text-sm text-stone-500 font-light">Seleccionamos cuidadosamente calabazas de pared gruesa, cuero de primera y acero inoxidable 304.</p>
</div>

<div className="p-8 bg-stone-50 rounded-2xl hover:bg-[#FDFCF8] hover:shadow-sm transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 text-stone-900 shadow-sm border border-stone-100 group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:ruler-pen-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Diseño Consciente</h3>
<p className="text-sm text-stone-500 font-light">Estética moderna que respeta la ergonomía y la tradición, eliminando lo superfluo.</p>
</div>

<div className="p-8 bg-stone-50 rounded-2xl hover:bg-[#FDFCF8] hover:shadow-sm transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 text-stone-900 shadow-sm border border-stone-100 group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Hecho para durar</h3>
<p className="text-sm text-stone-500 font-light">Productos robustos diseñados para resistir el uso diario y el paso del tiempo.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex mb-12 items-end justify-between">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-stone-900">Colección Destacada</h2>
<p className="font-light text-stone-500 mt-2">Favoritos elegidos por nuestros clientes.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors" href="#">
                    Ver todo <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative bg-white aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-stone-100">
<img alt="Mate Imperial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white/90 backdrop-blur text-stone-900 p-2 rounded-full hover:bg-stone-900 hover:text-white transition-colors">
<iconify-icon className="" icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-1">
<h3 className="text-base font-medium text-stone-900 tracking-tight">Mate Imperial Premium</h3>
<p className="text-xs text-stone-500 line-clamp-1">Calabaza seleccionada, virola de alpaca</p>
<p className="text-sm font-medium text-stone-900 pt-1">$35.000</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-white aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-stone-100">
<img alt="Termo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%]" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white/90 backdrop-blur text-stone-900 p-2 rounded-full hover:bg-stone-900 hover:text-white transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-1">
<h3 className="text-base font-medium text-stone-900 tracking-tight">Termo Raíz 1L</h3>
<p className="text-xs text-stone-500 line-clamp-1">Acero inoxidable, media manija</p>
<p className="text-sm font-medium text-stone-900 pt-1">$58.000</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-white aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-stone-100">
<img alt="Bombilla" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&amp;w=1740&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white/90 backdrop-blur text-stone-900 p-2 rounded-full hover:bg-stone-900 hover:text-white transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-1">
<h3 className="text-base font-medium text-stone-900 tracking-tight">Bombilla Pico de Loro</h3>
<p className="text-xs text-stone-500 line-clamp-1">Acero inoxidable, filtro ranurado</p>
<p className="text-sm font-medium text-stone-900 pt-1">$12.500</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-white aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-stone-100">
<img alt="Bolso Matero" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%]" src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&amp;w=1738&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white/90 backdrop-blur text-stone-900 p-2 rounded-full hover:bg-stone-900 hover:text-white transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-1">
<h3 className="text-base font-medium text-stone-900 tracking-tight">Bolso Matero Clásico</h3>
<p className="text-xs text-stone-500 line-clamp-1">Cuero ecológico premium, rígido</p>
<p className="text-sm font-medium text-stone-900 pt-1">$42.000</p>
</div>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-flex items-center text-sm font-medium text-stone-900 border-b border-stone-900 pb-0.5" href="#">
                    Ver todos los productos <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-16 bg-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">



<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<div className="mb-3 text-stone-800">
<iconify-icon className="" icon="solar:restart-linear" width="28"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-stone-900 mb-1">Cambios Fáciles</h4>
<p className="text-xs text-stone-500 font-light">30 días para enamorarte de tu producto.</p>
</div>

<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<div className="mb-3 text-stone-800">
<iconify-icon icon="solar:chat-round-linear" width="28"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-stone-900 mb-1">Atención Personalizada</h4>
<p className="text-xs font-light text-stone-500">Soporte via Instagram y Whatsapp todos los días.</p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="experience">
<div className="max-w-7xl mx-auto px-6">
<div className="relative bg-stone-900 rounded-3xl overflow-hidden isolate">

<img alt="Lifestyle Mate" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60" src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="relative px-8 py-24 md:px-16 md:py-32 flex flex-col justify-center max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        El mate no es solo una bebida.
                    </h2>
<p className="text-stone-200 text-lg md:text-xl font-light leading-relaxed mb-8">
                        Es un ritual, una pausa necesaria, un encuentro con amigos o con uno mismo. Diseñamos para elevar esa experiencia diaria.
                    </p>
<div className="">
<a className="inline-flex items-center text-white border-b border-white/50 hover:border-white pb-1 transition-all" href="#">
                            Descubre nuestro blog <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-stone-900 tracking-tight">Comentarios</h2>
</div>

<div className="grid md:grid-cols-3 gap-8 mb-20">
<div className="bg-white p-8 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-stone-100">
<div className="flex text-yellow-500 mb-4 space-x-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6">"La calidad del cuero del mate imperial es increíble. Se nota la mano de obra artesanal. Llegó impecable a Córdoba."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">LS</div>
<span className="text-sm font-medium text-stone-900">Lucas S.</span>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-stone-100">
<div className="flex text-yellow-500 mb-4 space-x-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-stone-600 mb-6">"Compré el kit completo para regalar y quedé super bien. El packaging es muy premium, ideal para regalo."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">MJ</div>
<span className="text-sm font-medium text-stone-900">María Julia</span>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-stone-100">
<div className="flex text-yellow-500 mb-4 space-x-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6">"El termo mantiene el agua caliente todo el día de verdad. Muy conforme con la compra y la atención."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">FR</div>
<span className="text-sm font-medium text-stone-900">Facundo R.</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<img alt="IG 1" className="w-full h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="IG 2" className="w-full h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img alt="IG 3" className="w-full h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="w-full h-48 bg-stone-100 rounded-xl flex flex-col items-center justify-center text-stone-500 hover:bg-stone-200 transition-colors cursor-pointer">
<iconify-icon className="mb-2" icon="solar:camera-linear" width="32"></iconify-icon>
<span className="uppercase text-xs font-medium tracking-wide">@efecto.mate</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-stone-900 mb-6">¿Listo para tu próximo mate?</h2>
<p className="text-stone-500 text-lg mb-10 font-light">Elevá tu ritual con productos diseñados para acompañarte siempre.</p>
<a className="inline-flex justify-center items-center hover:bg-[#4e815b] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-base font-medium text-white bg-[#1a5b39] rounded-full pt-5 pr-10 pb-5 pl-10" href="#products">
  Comprar ahora
</a>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">

<div className="md:w-1/3">
<h3 className="text-2xl font-medium tracking-tight text-stone-900 mb-6">Contacto</h3>
<p className="text-stone-500 mb-8 font-light">¿Tenés dudas sobre curado, envíos o ventas mayoristas? Escribinos.</p>
<div className="space-y-6">
<a className="flex items-center gap-3 text-stone-700 hover:text-stone-900 transition-colors" href="#">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-900">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<span className="text-sm">+54 9 11 1234 5678</span>
</a>
<a className="flex items-center gap-3 text-stone-700 hover:text-stone-900 transition-colors" href="#">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-900">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<span className="text-sm">hola@raizmatera.com.ar</span>
</a>
</div>
<div className="mt-10">
<h4 className="text-sm font-medium text-stone-900 mb-4">Seguinos</h4>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon className="" height="24" icon="solar:camera-linear" style={{color: 'rgb(28, 25, 23)'}} width="24"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon></a>
</div>
</div>
</div>

<div className="md:w-2/3 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-stone-500" htmlFor="name">Nombre</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all placeholder:text-stone-300" id="name" placeholder="Tu nombre" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-stone-500" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all placeholder:text-stone-300" id="email" placeholder="tucorreo@ejemplo.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-stone-500" htmlFor="message">Mensaje</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all resize-none placeholder:text-stone-300" id="message" placeholder="¿En qué podemos ayudarte?" rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-stone-900 text-white font-medium py-4 rounded-lg hover:bg-stone-800 transition-colors flex justify-center items-center gap-2" type="button">
                                Enviar Mensaje
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
<div className="mb-8 md:mb-0">
<a className="uppercase text-xl font-medium text-stone-900 tracking-tight" href="#">Efecto Mate</a>
<p className="text-sm font-light text-stone-500 max-w-xs mt-2">Mates que acompañan cada momento.</p>
</div>
<div className="flex flex-wrap gap-8 text-sm text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#">Tienda</a>
<a className="hover:text-stone-900 transition-colors" href="#">Nosotros</a>
<a className="hover:text-stone-900 transition-colors" href="#">Cuidados</a>
<a className="hover:text-stone-900 transition-colors" href="#"></a>
</div>
</div>
<div className="pt-8 border-t border-stone-50 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 gap-4">
<p className="">© 2026 Efecto Mate. Todos los derechos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-stone-600 transition-colors" href="#">Términos</a>
<a className="hover:text-stone-600 transition-colors" href="#">Privacidad</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center" href="#">
<iconify-icon icon="solar:chat-round-dots-bold" width="24"></iconify-icon>
</a>

    </>
  );
}
