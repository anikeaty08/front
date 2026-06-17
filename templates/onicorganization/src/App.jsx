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
      

<header className="sticky top-0 z-50 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#1A1A1A]/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-serif text-3xl font-semibold tracking-tighter text-[#1A1A1A] hover:opacity-80 transition-opacity flex items-center gap-3" href="#">
<span className="text-[#C0392B] text-4xl leading-none">•</span>
                ONIC
            </a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-[#1A1A1A] hover:text-[#C0392B] transition-colors relative group" href="#">
                    Inicio
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C0392B] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-[#1A1A1A]/70 hover:text-[#C0392B] transition-colors" href="#noticias">Noticias</a>
<a className="text-sm font-medium text-[#1A1A1A]/70 hover:text-[#C0392B] transition-colors" href="#comunicados">Comunicados</a>
<a className="text-sm font-medium text-[#1A1A1A]/70 hover:text-[#C0392B] transition-colors" href="#pueblos">Pueblos</a>
<a className="text-sm font-medium text-[#1A1A1A]/70 hover:text-[#C0392B] transition-colors" href="#">Mediateca</a>
<a className="text-sm font-medium text-[#1A1A1A]/70 hover:text-[#C0392B] transition-colors" href="#">Nosotros</a>
</nav>

<div className="hidden md:flex items-center gap-6">

<a className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C0392B]/20 bg-[#C0392B]/5 hover:bg-[#C0392B]/10 transition-colors group" href="#">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C0392B] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#C0392B]"></span>
</span>
<span className="text-xs font-medium text-[#C0392B] tracking-wide uppercase">En Vivo</span>
</a>
<button aria-label="Buscar" className="text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors">
<iconify-icon height="20" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="flex items-center gap-2 text-xs font-medium text-[#1A1A1A]/50 border-l border-[#1A1A1A]/10 pl-6">
<button className="text-[#1A1A1A] hover:text-[#C0392B] transition-colors">ES</button>
<span>/</span>
<button className="hover:text-[#1A1A1A] transition-colors">EN</button>
</div>
</div>

<button aria-label="Menu" className="lg:hidden text-[#1A1A1A] p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow">

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

<div className="group relative rounded-2xl overflow-hidden cursor-pointer">
<div className="aspect-[16/10] md:aspect-[21/9] w-full bg-[#1A1A1A]">
<img alt="Paisaje territorio indígena" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent"></div>

<div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
<div className="max-w-3xl">
<span className="inline-block px-3 py-1 bg-[#C0392B] text-white text-xs font-medium tracking-wide rounded-full mb-4">Territorio y Paz</span>
<h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight mb-4 group-hover:text-[#F0EDE8] transition-colors">
                            La defensa de la Amazonía: un llamado urgente desde el corazón de la selva
                        </h1>
<p className="text-[#FAFAF8]/80 text-base md:text-lg max-w-2xl leading-relaxed hidden sm:block">
                            Líderes de 14 pueblos indígenas se reúnen para establecer nuevos acuerdos de protección territorial frente al avance de la deforestación.
                        </p>
<div className="mt-6 flex items-center gap-4 text-xs text-[#FAFAF8]/60">
<span>Hace 2 horas</span>
<span className="w-1 h-1 rounded-full bg-white/30"></span>
<span>Por Prensa ONIC</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

<article className="group cursor-pointer">
<div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-4">
<img alt="Cultura" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://onic.org.co/images/noticias/2021/10/photo_2021-10-25-11.54.12-880x660.jpeg"/>
</div>
<span className="text-xs font-medium text-[#D4A017] tracking-wide uppercase mb-2 block">Cultura</span>
<h3 className="font-serif text-xl font-semibold tracking-tight text-[#1A1A1A] leading-snug group-hover:text-[#C0392B] transition-colors">
                        El renacer de las lenguas nativas en el Cauca
                    </h3>
</article>

<article className="group cursor-pointer">
<div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-4">
<img alt="Derechos Humanos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://onic.org.co/images/noticias/2021/07/Berta-Caceres.jpg"/>
</div>
<span className="text-xs font-medium text-[#2D5016] tracking-wide uppercase mb-2 block">Derechos Humanos</span>
<h3 className="font-serif text-xl font-semibold tracking-tight text-[#1A1A1A] leading-snug group-hover:text-[#C0392B] transition-colors">
                        Minga Nacional exige cumplimiento de los acuerdos de paz
                    </h3>
</article>

<article className="group cursor-pointer">
<div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-4">
<img alt="Internacional" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://onic.org.co/images/noticias/2021/05/Captura_de_Pantalla_2021-05-08_a_las_8.07.37_a.png"/>
</div>
<span className="text-xs font-medium text-[#1A1A1A]/50 tracking-wide uppercase mb-2 block">Internacional</span>
<h3 className="font-serif text-xl font-semibold tracking-tight text-[#1A1A1A] leading-snug group-hover:text-[#C0392B] transition-colors">
                        Participación de ONIC en la Cumbre Climática de Ginebra
                    </h3>
</article>
</div>
</section>

<section className="bg-[#F0EDE8] py-24 mt-12 border-y border-[#1A1A1A]/5">
<div className="max-w-5xl mx-auto px-6 text-center">
<iconify-icon className="text-[#8B6914]/20 mb-6" height="48" icon="solar:quote-left-linear" width="48"></iconify-icon>
<h2 className="font-serif text-2xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] leading-relaxed max-w-4xl mx-auto">
                    "Nuestra palabra es el río que no se detiene, nuestra memoria es la montaña que nos sostiene. Seguiremos tejiendo la vida desde el corazón de la tierra."
                </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
<div>
<div className="font-serif text-4xl md:text-5xl font-semibold text-[#8B6914] mb-2">115</div>
<div className="text-xs text-[#1A1A1A]/70 uppercase tracking-widest font-medium">Pueblos<br/>Indígenas</div>
</div>
<div>
<div className="font-serif text-4xl md:text-5xl font-semibold text-[#8B6914] mb-2">50</div>
<div className="text-xs text-[#1A1A1A]/70 uppercase tracking-widest font-medium">Organizaciones<br/>Regionales</div>
</div>
<div>
<div className="font-serif text-4xl md:text-5xl font-semibold text-[#8B6914] mb-2">65</div>
<div className="text-xs text-[#1A1A1A]/70 uppercase tracking-widest font-medium">Lenguas<br/>Nativas</div>
</div>
<div>
<div className="font-serif text-4xl md:text-5xl font-semibold text-[#8B6914] mb-2">41</div>
<div className="text-xs text-[#1A1A1A]/70 uppercase tracking-widest font-medium">Años de<br/>Resistencia</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-24" id="noticias">
<div className="flex items-end justify-between mb-12 border-b border-[#1A1A1A]/10 pb-6">
<div>
<h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A]">Actualidad y Territorio</h2>
<p className="text-sm text-[#1A1A1A]/60 mt-2">Las voces de nuestros pueblos en tiempo real.</p>
</div>
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#C0392B] hover:text-[#1A1A1A] transition-colors group" href="#">
                    Ver todas
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">

<article className="md:col-span-2 md:row-span-2 group cursor-pointer flex flex-col">
<div className="aspect-news-large rounded-xl overflow-hidden bg-gray-100 mb-5 relative">
<img alt="Mujer indígena tejiendo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-[#FAFAF8]/90 backdrop-blur text-[#D4A017] text-xs font-medium tracking-wide rounded-full">Mujer y Familia</span>
</div>
</div>
<div className="flex flex-col flex-grow justify-between">
<div>
<h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#C0392B] transition-colors">
                                El arte del tejido: preservando la memoria ancestral de la Sierra Nevada
                            </h3>
<p className="text-[#1A1A1A]/70 text-sm md:text-base leading-relaxed mb-4">
                                Las mayoras de la comunidad Arhuaca comparten sus saberes sobre el tejido de mochilas, una práctica que va más allá de lo artesanal, representando la estructura del universo y el pensamiento colectivo.
                            </p>
</div>
<time className="text-xs text-[#1A1A1A]/50">12 de Octubre, 2023</time>
</div>
</article>

<article className="md:col-span-1 group cursor-pointer flex flex-col">
<div className="aspect-news-small rounded-xl overflow-hidden bg-gray-100 mb-4">
<img alt="Protesta pacífica" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1533514114760-4389f572ae26?q=80&amp;w=2012&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-medium text-[#2D5016] tracking-wide mb-2 block">Justicia</span>
<h3 className="font-serif text-lg font-semibold tracking-tight text-[#1A1A1A] leading-snug mb-2 group-hover:text-[#C0392B] transition-colors">
                        Corte Constitucional falla a favor de la autonomía territorial en el Chocó
                    </h3>
<time className="text-xs text-[#1A1A1A]/50 mt-auto">11 de Octubre, 2023</time>
</article>

<article className="md:col-span-1 group cursor-pointer flex flex-col">
<div className="aspect-news-small rounded-xl overflow-hidden bg-gray-100 mb-4">
<img alt="Naturaleza selva" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=2013&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-medium text-[#8B6914] tracking-wide mb-2 block">Medio Ambiente</span>
<h3 className="font-serif text-lg font-semibold tracking-tight text-[#1A1A1A] leading-snug mb-2 group-hover:text-[#C0392B] transition-colors">
                        Guardia Indígena refuerza monitoreo contra minería ilegal
                    </h3>
<time className="text-xs text-[#1A1A1A]/50 mt-auto">10 de Octubre, 2023</time>
</article>

<div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
<article className="group cursor-pointer">
<span className="text-xs font-medium text-[#1A1A1A]/50 tracking-wide mb-1 block">Salud</span>
<h3 className="font-serif text-base font-semibold tracking-tight text-[#1A1A1A] leading-snug group-hover:text-[#C0392B] transition-colors mb-2">
                            Brigada de medicina tradicional llega al Guaviare para atención comunitaria
                        </h3>
<time className="text-xs text-[#1A1A1A]/40">9 de Octubre</time>
</article>
<article className="group cursor-pointer">
<span className="text-xs font-medium text-[#C0392B] tracking-wide mb-1 block">Alerta</span>
<h3 className="font-serif text-base font-semibold tracking-tight text-[#1A1A1A] leading-snug group-hover:text-[#C0392B] transition-colors mb-2">
                            Denunciamos confinamiento de comunidades Embera en el occidente
                        </h3>
<time className="text-xs text-[#1A1A1A]/40">8 de Octubre</time>
</article>
<article className="group cursor-pointer">
<span className="text-xs font-medium text-[#D4A017] tracking-wide mb-1 block">Educación</span>
<h3 className="font-serif text-base font-semibold tracking-tight text-[#1A1A1A] leading-snug group-hover:text-[#C0392B] transition-colors mb-2">
                            Apertura de la nueva Universidad Autónoma Indígena UAIIN
                        </h3>
<time className="text-xs text-[#1A1A1A]/40">7 de Octubre</time>
</article>
<article className="group cursor-pointer">
<span className="text-xs font-medium text-[#2D5016] tracking-wide mb-1 block">Economía Propia</span>
<h3 className="font-serif text-base font-semibold tracking-tight text-[#1A1A1A] leading-snug group-hover:text-[#C0392B] transition-colors mb-2">
                            Mercado campesino e indígena reúne saberes y productos en Bogotá
                        </h3>
<time className="text-xs text-[#1A1A1A]/40">6 de Octubre</time>
</article>
</div>
</div>
<div className="mt-8 text-center sm:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#C0392B] border border-[#C0392B] px-6 py-2 rounded-full" href="#">
                    Ver todas las noticias
                </a>
</div>
</section>

<section className="bg-white py-24 border-t border-[#1A1A1A]/5" id="comunicados">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A]">Comunicados Oficiales</h2>
<p className="text-sm text-[#1A1A1A]/60 mt-3 max-w-xl mx-auto">Pronunciamientos, denuncias y declaraciones de la Organización Nacional y sus filiales.</p>
</div>

<div className="flex flex-wrap items-center justify-center gap-2 mb-10 border-b border-[#1A1A1A]/10 pb-4">
<button className="px-4 py-2 text-sm font-medium text-[#C0392B] border-b-2 border-[#C0392B]">Nacionales (ONIC)</button>
<button className="px-4 py-2 text-sm font-medium text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors">Regionales</button>
<button className="px-4 py-2 text-sm font-medium text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors">Internacionales</button>
<button className="px-4 py-2 text-sm font-medium text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors">Otros Sectores</button>
</div>

<div className="flex flex-col">

<a className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 border-b border-[#1A1A1A]/5 hover:bg-[#FAFAF8] transition-colors px-2 -mx-2 rounded-lg" href="#">
<time className="text-xs text-[#1A1A1A]/40 font-mono w-24 shrink-0">Oct 12, 2023</time>
<div className="flex-grow">
<h3 className="font-serif text-lg font-semibold tracking-tight text-[#1A1A1A] group-hover:text-[#C0392B] transition-colors">
                                Comunicado a la opinión pública frente a los recientes hechos de violencia en el Norte del Cauca
                            </h3>
<div className="mt-2 flex gap-2">
<span className="px-2 py-0.5 bg-[#1A1A1A]/5 text-[#1A1A1A]/70 text-[10px] font-medium rounded uppercase tracking-wider">Derechos Humanos</span>
<span className="px-2 py-0.5 bg-[#C0392B]/10 text-[#C0392B] text-[10px] font-medium rounded uppercase tracking-wider">Urgente</span>
</div>
</div>
<iconify-icon className="text-[#1A1A1A]/30 group-hover:text-[#C0392B] hidden sm:block shrink-0" icon="solar:download-linear"></iconify-icon>
</a>

<a className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 border-b border-[#1A1A1A]/5 hover:bg-[#FAFAF8] transition-colors px-2 -mx-2 rounded-lg" href="#">
<time className="text-xs text-[#1A1A1A]/40 font-mono w-24 shrink-0">Oct 05, 2023</time>
<div className="flex-grow">
<h3 className="font-serif text-lg font-semibold tracking-tight text-[#1A1A1A] group-hover:text-[#C0392B] transition-colors">
                                Declaración final de la Asamblea Nacional de Autoridades Indígenas
                            </h3>
<div className="mt-2 flex gap-2">
<span className="px-2 py-0.5 bg-[#1A1A1A]/5 text-[#1A1A1A]/70 text-[10px] font-medium rounded uppercase tracking-wider">Política Organizativa</span>
</div>
</div>
<iconify-icon className="text-[#1A1A1A]/30 group-hover:text-[#C0392B] hidden sm:block shrink-0" icon="solar:download-linear"></iconify-icon>
</a>

<a className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 border-b border-[#1A1A1A]/5 hover:bg-[#FAFAF8] transition-colors px-2 -mx-2 rounded-lg" href="#">
<time className="text-xs text-[#1A1A1A]/40 font-mono w-24 shrink-0">Sep 28, 2023</time>
<div className="flex-grow">
<h3 className="font-serif text-lg font-semibold tracking-tight text-[#1A1A1A] group-hover:text-[#C0392B] transition-colors">
                                Pronunciamiento conjunto sobre la reforma agraria y los territorios colectivos
                            </h3>
<div className="mt-2 flex gap-2">
<span className="px-2 py-0.5 bg-[#1A1A1A]/5 text-[#1A1A1A]/70 text-[10px] font-medium rounded uppercase tracking-wider">Territorio</span>
</div>
</div>
<iconify-icon className="text-[#1A1A1A]/30 group-hover:text-[#C0392B] hidden sm:block shrink-0" icon="solar:download-linear"></iconify-icon>
</a>

<a className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 hover:bg-[#FAFAF8] transition-colors px-2 -mx-2 rounded-lg" href="#">
<time className="text-xs text-[#1A1A1A]/40 font-mono w-24 shrink-0">Sep 15, 2023</time>
<div className="flex-grow">
<h3 className="font-serif text-lg font-semibold tracking-tight text-[#1A1A1A] group-hover:text-[#C0392B] transition-colors">
                                Rechazo a la estigmatización de la Guardia Indígena Nacional
                            </h3>
<div className="mt-2 flex gap-2">
<span className="px-2 py-0.5 bg-[#1A1A1A]/5 text-[#1A1A1A]/70 text-[10px] font-medium rounded uppercase tracking-wider">Autonomía</span>
</div>
</div>
<iconify-icon className="text-[#1A1A1A]/30 group-hover:text-[#C0392B] hidden sm:block shrink-0" icon="solar:download-linear"></iconify-icon>
</a>
</div>
<div className="mt-10 flex justify-center">
<button className="px-6 py-3 border border-[#1A1A1A]/20 rounded-full text-sm font-medium hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all">
                        Cargar más comunicados
                    </button>
</div>
</div>
</section>

<section className="bg-[#C0392B] py-16 text-white border-b-4 border-[#8B6914]">
<div className="max-w-4xl mx-auto px-6 text-center">
<h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4">Únete a nuestra voz</h3>
<p className="text-white/80 text-sm mb-8 max-w-lg mx-auto">Suscríbete para recibir nuestros boletines informativos, alertas urgentes y resúmenes de prensa directamente en tu correo.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative">
<input className="flex-grow bg-white/10 border border-white/20 rounded-full px-6 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white focus:bg-white/20 transition-all" placeholder="Tu correo electrónico" type="email"/>
<button className="bg-white text-[#C0392B] px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#FAFAF8] hover:shadow-lg transition-all" type="submit">
                        Suscribirse
                    </button>
</form>
</div>
</section>
</main>

<footer className="bg-[#1A1A1A] pt-20 pb-10 text-[#FAFAF8]/70">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="md:col-span-4">
<a className="font-serif text-4xl font-semibold tracking-tighter text-white flex items-center gap-3 mb-6" href="#">
<span className="text-[#C0392B]">•</span>
                        ONIC
                    </a>
<p className="text-sm leading-relaxed mb-6">
                        Organización Nacional Indígena de Colombia.<br/>
                        Autoridad Nacional de Gobierno Indígena.<br/>
                        En defensa de la vida, el territorio y la autonomía.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:hashtag-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-2 md:col-start-7">
<h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">Organización</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Quiénes Somos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Historia</a></li>
<li><a className="hover:text-white transition-colors" href="#">Estructura</a></li>
<li><a className="hover:text-white transition-colors" href="#">Consejería Mayor</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pueblos Indígenas</a></li>
</ul>
</div>

<div className="md:col-span-2">
<h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">Información</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Noticias</a></li>
<li><a className="hover:text-white transition-colors" href="#">Comunicados</a></li>
<li><a className="hover:text-white transition-colors" href="#">Informes DDHH</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mediateca</a></li>
<li><a className="hover:text-white transition-colors" href="#">Transparencia</a></li>
</ul>
</div>

<div className="md:col-span-2">
<h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">Contacto</h4>
<ul className="space-y-4 text-sm">
<li>Calle 12b # 4-38<br/>Bogotá, Colombia</li>
<li>+57 (601) 284 2168</li>
<li>contacto@onic.org.co</li>
</ul>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
<p>© 2026 Organización Nacional Indígena de Colombia. Todos los derechos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Políticas de Privacidad</a>
<a className="hover:text-white transition-colors" href="#">Términos de Uso</a>
<a className="hover:text-white transition-colors" href="#">Intranet</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
