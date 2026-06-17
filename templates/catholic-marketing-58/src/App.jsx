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
      

<header className="fixed top-0 w-full z-50 border-b border-black/5 bg-[#FAF8F5]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="tracking-[0.4em] text-xs uppercase text-[#0A0A0A] font-normal">A S S I S I</span>
</div>
<nav className="hidden md:flex items-center gap-12 text-xs uppercase tracking-widest text-black/50">
<a className="hover:text-[#C5A059] transition-colors duration-500" href="#manifiesto">Manifiesto</a>
<a className="hover:text-[#C5A059] transition-colors duration-500" href="#ecosistema">Ingeniería</a>
<a className="hover:text-[#C5A059] transition-colors duration-500" href="#alianza">Alianza</a>
</nav>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] border-b border-transparent hover:border-[#C5A059] pb-1 transition-all duration-500" href="#aplicar">
<span>Aplicar</span>
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="1.2em"></iconify-icon>
</a>
</div>
</header>
<main>

<section className="min-h-screen pt-32 pb-32 flex flex-col justify-center relative overflow-hidden">

<div className="absolute inset-0 pointer-events-none opacity-20">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#C5A059]/30 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-12 gap-6 relative z-10 mt-12">
<div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 text-center">
<div className="mb-12 flex justify-center">
<span className="inline-block border border-black/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#C5A059] bg-black/5 backdrop-blur-sm">
                            Arquitectura de la Verdad
                        </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter font-normal text-[#0A0A0A] leading-[1.1] mb-12">
                        Tu misión merece la <br className="hidden md:block"/>
<span className="italic font-light text-black/70">excelencia</span> de una Catedral.
                    </h1>
<p className="text-lg md:text-xl text-black/60 font-light leading-relaxed max-w-2xl mx-auto mb-16 tracking-wide">
                        No solo gestionamos redes; construimos catedrales digitales. Elevamos el mensaje del Evangelio con la precisión técnica y el minimalismo estético que la Verdad merece.
                    </p>
<a className="inline-flex items-center justify-center border border-[#C5A059] text-[#C5A059] px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#C5A059] hover:text-[#FAF8F5] transition-all duration-700 font-normal" href="#aplicar">
                        Iniciar mi Reconstrucción Digital
                    </a>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 w-full mt-32">
<div className="relative aspect-[21/9] bg-white border border-black/10 group cursor-pointer flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] to-transparent opacity-80"></div>

<div className="absolute inset-0 opacity-20 flex items-center justify-center">
<div className="w-full h-[1px] bg-black/20 absolute top-1/2"></div>
<div className="h-full w-[1px] bg-black/20 absolute left-1/2"></div>
<div className="w-[60%] h-[60%] border border-black/20 rounded-full absolute"></div>
</div>
<div className="relative z-10 w-24 h-24 rounded-full border border-black/10 flex items-center justify-center bg-white/50 backdrop-blur-md group-hover:scale-110 group-hover:border-[#C5A059]/50 transition-all duration-700 shadow-sm">
<iconify-icon className="text-black/80 group-hover:text-[#C5A059] transition-colors duration-700 ml-2" icon="solar:play-linear" style={{strokeWidth: '1px'}} width="2em"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-black/5 bg-[#F2EFE9]" id="manifiesto">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-12 gap-12 lg:gap-24">
<div className="col-span-12 lg:col-span-4 flex flex-col justify-between">
<div>
<h2 className="text-3xl md:text-5xl tracking-tight font-normal font-serif text-[#0A0A0A] mb-6">
                                Aliados en la Nueva Evangelización.
                            </h2>
<p className="text-base text-black/50 font-light leading-relaxed">
                                Aquellos que ya han confiado en la estética de Assisi para amplificar su mensaje y transformar corazones.
                            </p>
</div>

<div className="grid grid-cols-2 gap-8 mt-16 opacity-40 grayscale">

<div className="h-12 border-b border-black/20 flex items-end pb-2">
<span className="font-serif text-lg tracking-widest uppercase">Diocesis</span>
</div>
<div className="h-12 border-b border-black/20 flex items-end pb-2">
<span className="font-serif text-lg tracking-widest uppercase">Opus</span>
</div>
<div className="h-12 border-b border-black/20 flex items-end pb-2">
<span className="font-serif text-lg tracking-widest uppercase">Caritas</span>
</div>
<div className="h-12 border-b border-black/20 flex items-end pb-2">
<span className="font-serif text-lg tracking-widest uppercase">Vox</span>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-8 lg:border-l lg:border-black/5 lg:pl-24">
<div className="mb-24">
<span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] block mb-6">Nuestra Identidad</span>
<h3 className="text-3xl md:text-4xl tracking-tight font-normal font-serif text-[#0A0A0A] mb-8">
                                El Estándar Assisi: Belleza que convierte y misión que trasciende.
                            </h3>
<h4 className="text-xl text-black/70 font-light italic mb-12 font-serif">
                                No decoramos redes sociales; construimos ecosistemas de conversión con alma.
                            </h4>
<div className="space-y-8 text-base text-black/60 font-light leading-relaxed">
<p>
                                    En Assisi Catholic Marketing, no nacimos de una oportunidad de mercado, sino de un llamado: <span className="text-black/90 italic">"Ve y reconstruye mi Iglesia"</span>. Inspirados por el carisma de San Francisco, entendemos que el mundo digital es la nueva plaza pública donde muchos se sienten heridos o ignorados.
                                </p>
<p>
                                    Somos arquitectos y artesanos digitales. Nuestra misión es humanizar la técnica y dotar a la Iglesia de las mejores herramientas de comunicación del siglo XXI. Creemos que la excelencia no es un lujo, sino un deber para quien comunica la Verdad.
                                </p>
<p>
                                    Vamos más allá del algoritmo para alcanzar al que está distante, ofreciendo un refugio visual que no solo atrae la mirada, sino que sana el corazón. Evangelizamos a través de la belleza, la acogida, la excelencia técnica y las estrategias más actuales en Marketing Digital e IA.
                                </p>
</div>
</div>

<div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] block mb-12">No solo "Bonito"</span>
<div className="space-y-16">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-4 text-sm tracking-widest uppercase text-black/80 font-normal">
                                        01 / Empresas
                                    </div>
<div className="md:col-span-8 text-black/60 font-light leading-relaxed text-sm md:text-base">
                                        Entendemos que una empresa católica debe ser rentable para ser sostenible. Transformamos seguidores en clientes reales y clics en ingresos. Aplicamos gatillos mentales éticos y embudos de venta de alta conversión que respetan tus valores mientras multiplican tus resultados financieros.
                                    </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-black/5 pt-12">
<div className="md:col-span-4 text-sm tracking-widest uppercase text-black/80 font-normal">
                                        02 / Parroquias
                                    </div>
<div className="md:col-span-8 text-black/60 font-light leading-relaxed text-sm md:text-base">
                                        La "conversión" aquí se mide en almas y participación. Optimizamos tu alcance para que el mensaje del Evangelio rompa la burbuja digital. Aumentamos la asistencia a sacramentos, la captación de donativos y la creación de una comunidad viva y comprometida.
                                    </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-black/5 pt-12">
<div className="md:col-span-4 text-sm tracking-widest uppercase text-black/80 font-normal">
                                        03 / Influencers
                                    </div>
<div className="md:col-span-8 text-black/60 font-light leading-relaxed text-sm md:text-base">
                                        Elevamos tu autoridad percibida. Te ayudamos a monetizar tu influencia de forma coherente con tu fe, profesionalizando tu marca personal para que tu voz llegue más lejos y con mayor impacto.
                                    </div>
</div>
</div>
<div className="mt-24 border-t border-black/10 pt-16 flex flex-col md:flex-row items-center justify-between gap-8">
<p className="text-lg md:text-xl font-serif font-light text-[#0A0A0A] max-w-lg">
                                    Estética de vanguardia + Estrategia de crecimiento = <span className="italic text-[#C5A059]">Resultados que se pueden medir.</span>
</p>
<a className="inline-flex items-center justify-center bg-[#0A0A0A] text-[#FAF8F5] px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#C5A059] transition-all duration-700 font-normal w-full md:w-auto text-center" href="#aplicar">
                                    Quiero Trabajar con Assisi
                                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32" id="ecosistema">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-12 gap-6 mb-24">
<div className="col-span-12 md:col-span-8">
<span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] block mb-6">Ingeniería Digital</span>
<h2 className="text-4xl md:text-6xl tracking-tighter font-normal font-serif text-[#0A0A0A] mb-8 leading-tight">
                            Ecosistema de Soluciones al Servicio de la Iglesia.
                        </h2>
<p className="text-lg md:text-xl text-black/60 font-light max-w-2xl leading-relaxed">
                            Herramientas de vanguardia diseñadas para quienes no aceptan el ruido, sino que buscan la Verdad.
                        </p>
</div>
</div>

<div className="border-t border-black/10">

<div className="grid grid-cols-12 gap-6 md:gap-12 py-16 border-b border-black/10 group hover:bg-black/[0.02] transition-colors duration-700">
<div className="col-span-12 md:col-span-2 flex items-start">
<span className="text-2xl font-serif text-black/20 group-hover:text-[#C5A059] transition-colors duration-500">01</span>
</div>
<div className="col-span-12 md:col-span-4">
<h3 className="text-3xl tracking-tight font-serif font-normal text-[#0A0A0A]">Branding Católico</h3>
</div>
<div className="col-span-12 md:col-span-6 flex items-center">
<p className="text-base text-black/60 font-light leading-relaxed">
                                Revelamos el alma de tu misión con identidades visuales de alta gama que proyectan autoridad y sacralidad desde el primer contacto.
                            </p>
</div>
</div>

<div className="grid grid-cols-12 gap-6 md:gap-12 py-16 border-b border-black/10 group hover:bg-black/[0.02] transition-colors duration-700">
<div className="col-span-12 md:col-span-2 flex items-start">
<span className="text-2xl font-serif text-black/20 group-hover:text-[#C5A059] transition-colors duration-500">02</span>
</div>
<div className="col-span-12 md:col-span-4">
<h3 className="text-3xl tracking-tight font-serif font-normal text-[#0A0A0A]">Gestión de Social Media</h3>
</div>
<div className="col-span-12 md:col-span-6 flex items-center">
<p className="text-base text-black/60 font-light leading-relaxed">
                                Transformamos tus redes en una comunidad viva con estrategias operativas mensuales que liberan tu tiempo y cuidan tu mensaje.
                            </p>
</div>
</div>

<div className="grid grid-cols-12 gap-6 md:gap-12 py-16 border-b border-black/10 group hover:bg-black/[0.02] transition-colors duration-700">
<div className="col-span-12 md:col-span-2 flex items-start">
<span className="text-2xl font-serif text-black/20 group-hover:text-[#C5A059] transition-colors duration-500">03</span>
</div>
<div className="col-span-12 md:col-span-4">
<h3 className="text-3xl tracking-tight font-serif font-normal text-[#0A0A0A]">Producción e IA</h3>
</div>
<div className="col-span-12 md:col-span-6 flex items-center">
<p className="text-base text-black/60 font-light leading-relaxed">
                                Contenido cinematográfico y piezas con Inteligencia Artificial diseñadas para detener el scroll y sanar el ojo de tu audiencia.
                            </p>
</div>
</div>

<div className="grid grid-cols-12 gap-6 md:gap-12 py-16 border-b border-black/10 group hover:bg-black/[0.02] transition-colors duration-700">
<div className="col-span-12 md:col-span-2 flex items-start">
<span className="text-2xl font-serif text-black/20 group-hover:text-[#C5A059] transition-colors duration-500">04</span>
</div>
<div className="col-span-12 md:col-span-4">
<h3 className="text-3xl tracking-tight font-serif font-normal text-[#0A0A0A]">Desarrollo Web</h3>
</div>
<div className="col-span-12 md:col-span-6 flex items-center">
<p className="text-base text-black/60 font-light leading-relaxed">
                                Construimos tu "Catedral Digital": sitios web y tiendas online fluidas, elegantes y optimizadas para convertir visitantes en miembros activos.
                            </p>
</div>
</div>

<div className="grid grid-cols-12 gap-6 md:gap-12 py-16 border-b border-black/10 group hover:bg-black/[0.02] transition-colors duration-700">
<div className="col-span-12 md:col-span-2 flex items-start">
<span className="text-2xl font-serif text-black/20 group-hover:text-[#C5A059] transition-colors duration-500">05</span>
</div>
<div className="col-span-12 md:col-span-4">
<h3 className="text-3xl tracking-tight font-serif font-normal text-[#0A0A0A]">Campañas Digitales</h3>
</div>
<div className="col-span-12 md:col-span-6 flex items-center">
<p className="text-base text-black/60 font-light leading-relaxed">
                                Alcance estratégico con contenido inspirador y segmentación inteligente para transformar clics en resultados financieros y pastorales reales.
                            </p>
</div>
</div>

<div className="grid grid-cols-12 gap-6 md:gap-12 py-16 border-b border-black/10 group hover:bg-black/[0.02] transition-colors duration-700">
<div className="col-span-12 md:col-span-2 flex items-start">
<span className="text-2xl font-serif text-black/20 group-hover:text-[#C5A059] transition-colors duration-500">06</span>
</div>
<div className="col-span-12 md:col-span-4">
<h3 className="text-3xl tracking-tight font-serif font-normal text-[#0A0A0A]">Consultoría &amp; Growth</h3>
</div>
<div className="col-span-12 md:col-span-6 flex items-center">
<p className="text-base text-black/60 font-light leading-relaxed">
                                Clarificamos tu misión y escalamos tu impacto con pautas digitales (Ads) y métricas con propósito, asegurando coherencia espiritual y rentabilidad.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#EBE7DF]/60 border-y border-black/5 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-transparent to-[#FAF8F5] opacity-80 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<iconify-icon className="text-[#C5A059] mb-12" icon="solar:star-fall-linear" style={{strokeWidth: '1px'}} width="2em"></iconify-icon>
<h2 className="text-4xl md:text-6xl tracking-tighter font-normal font-serif text-[#0A0A0A] mb-12 leading-tight">
                    Nacidos en el Kairós <br className="hidden md:block"/>
<span className="italic font-light">del Jubileo.</span>
</h2>
<p className="text-lg md:text-xl text-black/60 font-light leading-relaxed mb-8">
                    Assisi Catholic Marketing nace bajo la inspiración del Año Jubilar de San Francisco (2026). Al igual que el Poverello recibió el encargo de <span className="text-black/90 italic">"reparar su Iglesia"</span>, nosotros asumimos el reto de sanar y reconstruir la comunicación católica contemporánea.
                </p>
<p className="text-lg md:text-xl text-[#C5A059] font-light leading-relaxed mb-16 font-serif italic">
                    No es coincidencia. Es Providencia. <br className="hidden md:block"/>
<span className="text-black/60 font-sans not-italic text-base mt-4 block">Aprovechamos la energía de este jubileo para lanzar proyectos que no solo comuniquen, sino que perduren por décadas.</span>
</p>
<a className="inline-flex items-center justify-center border border-black/20 text-black/80 px-8 py-4 text-xs tracking-widest uppercase hover:bg-black/5 transition-all duration-700 font-normal" href="#aplicar">
                    Quiero que mi proyecto sea parte
                </a>
</div>
</section>

<section className="py-32" id="alianza">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-12 gap-12 lg:gap-24 items-center">
<div className="col-span-12 lg:col-span-6">
<span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] block mb-6">El Compromiso</span>
<h2 className="text-4xl md:text-5xl tracking-tighter font-normal font-serif text-[#0A0A0A] mb-8 leading-tight">
                            La alianza estratégica que tu carisma estaba esperando.
                        </h2>
<p className="text-lg text-black/60 font-light leading-relaxed mb-12">
                            Unimos la sabiduría de la tradición con la potencia del algoritmo. Somos el socio tecnológico que entiende que tu éxito es una forma de evangelización.
                        </p>
</div>
<div className="col-span-12 lg:col-span-5 lg:col-start-8 space-y-12">
<div className="pl-8 border-l border-[#C5A059]/30 relative">
<div className="absolute w-1.5 h-1.5 bg-[#C5A059] -left-[3.5px] top-2 rounded-full shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
<h4 className="text-lg font-serif tracking-tight text-[#0A0A0A] mb-3">Exclusividad Numérica</h4>
<p className="text-sm text-black/60 font-light leading-relaxed">Limitar nuestro número de socios anuales para garantizar un nivel de detalle artesanal en cada estrategia.</p>
</div>
<div className="pl-8 border-l border-[#C5A059]/30 relative">
<div className="absolute w-1.5 h-1.5 bg-[#C5A059] -left-[3.5px] top-2 rounded-full shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
<h4 className="text-lg font-serif tracking-tight text-[#0A0A0A] mb-3">Gobernanza de Datos</h4>
<p className="text-sm text-black/60 font-light leading-relaxed">Utilizamos inteligencia de datos y herramientas de vanguardia para una transparencia total en la gestión.</p>
</div>
<div className="pl-8 border-l border-[#C5A059]/30 relative">
<div className="absolute w-1.5 h-1.5 bg-[#C5A059] -left-[3.5px] top-2 rounded-full shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
<h4 className="text-lg font-serif tracking-tight text-[#0A0A0A] mb-3">Estética como Argumento</h4>
<p className="text-sm text-black/60 font-light leading-relaxed">En un mundo saturado de ruido, nuestra limpieza visual actúa como un oasis espiritual, generando confianza inmediata en tu audiencia.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F2EFE9] border-t border-black/5" id="aplicar">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl tracking-tight font-normal font-serif text-[#0A0A0A] mb-6">
                        Comienza la reconstrucción de tu presencia digital.
                    </h2>
<p className="text-base md:text-lg text-black/60 font-light leading-relaxed max-w-2xl mx-auto">
                        Buscamos socios, no solo clientes. Si tu misión es grande, tu comunicación debe estar a la altura. Aplicamos un proceso de selección para asegurar que cada proyecto reciba la excelencia que la Iglesia demanda.
                    </p>
</div>

<form className="space-y-12 bg-white p-8 md:p-16 border border-black/5 relative shadow-2xl shadow-black/5">

<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black/20"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black/20"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black/20"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black/20"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="relative group">
<label className="block text-xs tracking-[0.1em] uppercase text-black/50 mb-3 font-normal">Nombre / Institución</label>
<input className="w-full bg-transparent border-b border-black/10 py-2 text-[#0A0A0A] text-base font-light focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-black/30" placeholder="Su nombre o misión" type="text"/>
</div>
<div className="relative group">
<label className="block text-xs tracking-[0.1em] uppercase text-black/50 mb-3 font-normal">Email</label>
<input className="w-full bg-transparent border-b border-black/10 py-2 text-[#0A0A0A] text-base font-light focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-black/30" placeholder="correo@institucion.com" type="email"/>
</div>
</div>
<div className="relative group">
<label className="block text-xs tracking-[0.1em] uppercase text-black/50 mb-3 font-normal">WhatsApp / Teléfono</label>
<input className="w-full bg-transparent border-b border-black/10 py-2 text-[#0A0A0A] text-base font-light focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-black/30" placeholder="+00 0000 0000" type="tel"/>
</div>
<div className="relative group">
<label className="block text-xs tracking-[0.1em] uppercase text-black/50 mb-3 font-normal">¿Cuál es el "leproso" que buscas abrazar en el mundo digital? (Tu mayor desafío)</label>
<textarea className="w-full bg-transparent border-b border-black/10 py-2 text-[#0A0A0A] text-base font-light focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-black/30 resize-none" placeholder="Describa brevemente su reto actual..." rows="3"></textarea>
</div>
<div className="relative group">
<label className="block text-xs tracking-[0.1em] uppercase text-black/50 mb-4 font-normal">Presupuesto estimado de inversión</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<label className="cursor-pointer">
<input className="peer sr-only" name="budget" type="radio"/>
<div className="border border-black/10 text-black/50 py-3 text-center text-xs font-light tracking-wide peer-checked:border-[#C5A059] peer-checked:text-[#C5A059] peer-checked:bg-[#C5A059]/5 transition-all">
                                    Inicio
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="budget" type="radio"/>
<div className="border border-black/10 text-black/50 py-3 text-center text-xs font-light tracking-wide peer-checked:border-[#C5A059] peer-checked:text-[#C5A059] peer-checked:bg-[#C5A059]/5 transition-all">
                                    Crecimiento
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="budget" type="radio"/>
<div className="border border-black/10 text-black/50 py-3 text-center text-xs font-light tracking-wide peer-checked:border-[#C5A059] peer-checked:text-[#C5A059] peer-checked:bg-[#C5A059]/5 transition-all">
                                    Escala
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="budget" type="radio"/>
<div className="border border-black/10 text-black/50 py-3 text-center text-xs font-light tracking-wide peer-checked:border-[#C5A059] peer-checked:text-[#C5A059] peer-checked:bg-[#C5A059]/5 transition-all">
                                    Institucional
                                </div>
</label>
</div>
</div>
<div className="pt-8">
<button className="w-full bg-[#0A0A0A] text-[#FAF8F5] py-5 text-sm tracking-widest uppercase hover:bg-[#C5A059] transition-colors duration-500 font-normal flex justify-center items-center gap-3" type="button">
<span>Aplicar mi proyecto</span>
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="1.2em"></iconify-icon>
</button>
<p className="text-center text-[10px] uppercase tracking-widest text-black/40 mt-6">
                            La excelencia requiere selección. Cupos limitados anualmente.
                        </p>
</div>
</form>
</div>
</section>
</main>

<footer className="py-12 border-t border-black/5 bg-[#FAF8F5]">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="tracking-[0.4em] text-xs uppercase text-black/40 font-normal">A S S I S I</span>
<div className="text-xs text-black/40 font-light tracking-wider">
                © 2024 Assisi Catholic Marketing. La Arquitectura de la Verdad.
            </div>
<div className="flex gap-6">
<a className="text-black/40 hover:text-[#C5A059] transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5px'}} width="1.2rem"></iconify-icon>
</a>
<a className="text-black/40 hover:text-[#C5A059] transition-colors" href="#">
<iconify-icon icon="solar:global-linear" style={{strokeWidth: '1.5px'}} width="1.2rem"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
