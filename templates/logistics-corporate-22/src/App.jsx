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



        document.addEventListener('mousemove', e => {
            const cards = document.getElementsByClassName('spotlight-card');
            for(const card of cards) {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }
        });

        const scroller = document.getElementById('scroller');
        const parallaxBg = document.getElementById('parallax-bg');
        
        scroller.addEventListener('scroll', () => {
            const scrollPercentage = scroller.scrollLeft / (scroller.scrollWidth - scroller.clientWidth);
            parallaxBg.style.transform = `translateX(${-50 * scrollPercentage}vw)`;
            updateActiveDot(Math.round(scroller.scrollLeft / scroller.clientWidth));
        });

        function scrollToSlide(index) {
            scroller.scrollTo({ left: scroller.clientWidth * index, behavior: 'smooth' });
        }

        function updateActiveDot(index) {
            const dots = document.querySelectorAll('.fixed.bottom-8 button');
            dots.forEach((dot, i) => {
                if(i === index) {
                    dot.classList.remove('bg-slate-300');
                    dot.classList.add('bg-blue-600', 'scale-125');
                } else {
                    dot.classList.add('bg-slate-300');
                    dot.classList.remove('bg-blue-600', 'scale-125');
                }
            });
        }
        updateActiveDot(0);
    
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
      

<div className="fixed inset-0 w-[150vw] h-full bg-grid-pattern z-0 pointer-events-none transition-transform duration-100 ease-out will-change-transform" id="parallax-bg"></div>

<main className="snap-container flex flex-row w-full h-full overflow-x-auto overflow-y-hidden no-scrollbar relative z-10" id="scroller">

<section className="snap-section min-w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12 relative">
<div className="spotlight-card animate-clip-intro w-full max-w-[1600px] h-[90vh] shadow-2xl shadow-slate-200/50 rounded-[2rem] border border-slate-200 flex flex-col justify-between overflow-hidden relative group">
<div className="spotlight-border"></div>

<div className="absolute inset-0 z-0">
<img alt="Logistics" className="w-full h-full object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-105" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
</div>

<div className="absolute top-8 right-8 text-7xl font-heading font-bold text-white/10 select-none z-10">01</div>
<div className="z-10 flex flex-col h-full justify-center px-12 lg:px-20 max-w-4xl">
<div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-100 text-xs font-bold tracking-widest uppercase animate-fade-up">
                        Presentación Corporativa 2025
                    </div>
<h1 className="text-6xl lg:text-8xl font-heading font-bold text-white tracking-tight leading-[1] mb-8 animate-fade-up delay-100">
                        SURAMERICANA<br/>DE <span className="text-blue-400">TRANSPORTES</span>
</h1>
<p className="text-slate-300 text-xl lg:text-2xl max-w-2xl animate-fade-up delay-200 font-light">
                        Su carga debe viajar en primera clase. Liderazgo y confianza en cada kilómetro.
                    </p>
</div>

<div className="z-10 bg-slate-900/50 backdrop-blur-md border-t border-white/10 p-6 flex justify-between items-center text-slate-300 text-xs lg:text-sm font-medium">
<div className="flex gap-6">
<span className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> dir.comercial@suratrans.com</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon> 322 3458325</span>
</div>
<span className="flex items-center gap-2 text-white">
<iconify-icon icon="solar:globe-linear"></iconify-icon> www.suramericanadetransportes.com
                    </span>
</div>
</div>
</section>

<section className="snap-section min-w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12 relative">
<div className="spotlight-card w-full max-w-[1600px] h-[90vh] shadow-2xl rounded-[2rem] border border-slate-200 flex overflow-hidden relative">
<div className="spotlight-border"></div>
<div className="absolute top-8 right-8 text-6xl font-heading font-bold text-slate-100 select-none z-20">02</div>
<div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">

<div className="relative h-full overflow-hidden">
<img alt="History" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply"></div>
<div className="absolute bottom-12 left-12 text-white">
<div className="flex items-baseline gap-2">
<span className="text-8xl font-bold font-heading tracking-tighter">40</span>
<span className="text-3xl font-medium">Años</span>
</div>
<p className="text-blue-100 mt-2 text-lg">Construyendo el futuro del transporte.</p>
</div>
</div>

<div className="p-12 lg:p-20 flex flex-col justify-center bg-white relative">
<div className="mb-4 text-blue-600 font-bold tracking-widest text-xs uppercase">Perfil Corporativo</div>
<h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                            Consolidándonos como líderes del país
                        </h2>
<div className="space-y-8 text-slate-600 leading-relaxed text-lg">
<p>
                                Somos una compañía con más de cuarenta años de experiencia en el sector del transporte de carga masiva y semimasiva.
                            </p>
<div className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 shrink-0">
<iconify-icon icon="solar:box-linear" width="32"></iconify-icon>
</div>
<div>
<span className="block font-bold text-slate-900 text-3xl mb-1 font-heading">+25.000</span>
<span className="text-sm font-medium">Operaciones logísticas anuales.</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full border-t border-slate-100 p-6 flex justify-between items-center text-slate-400 text-xs font-medium bg-white">
<div className="flex gap-4">
<span className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer"><iconify-icon icon="solar:letter-linear"></iconify-icon> dir.comercial@suratrans.com</span>
<span className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon> 322 3458325</span>
</div>
<span className="hover:text-blue-600 transition-colors cursor-pointer">www.suramericanadetransportes.com</span>
</div>
</div>
</div>
</div>
</section>

<section className="snap-section min-w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12 relative">
<div className="spotlight-card w-full max-w-[1600px] h-[90vh] shadow-2xl rounded-[2rem] border border-slate-200 flex overflow-hidden relative bg-white">
<div className="spotlight-border"></div>
<div className="absolute top-8 right-8 text-6xl font-heading font-bold text-slate-100 select-none z-20">03</div>
<div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">

<div className="relative bg-slate-50 border-r border-slate-100 h-full overflow-hidden flex items-center justify-center group">

<img alt="Map Texture" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-slate-50/50"></div>

<div className="relative w-[300px] h-[450px] lg:w-[400px] lg:h-[600px] select-none">
<img alt="Colombia Map" className="w-full h-full object-contain opacity-20 mix-blend-multiply absolute inset-0 grayscale" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Colombia_relief_location_map.jpg/614px-Colombia_relief_location_map.jpg"/>

<div className="absolute top-[46%] left-[45%] flex flex-col items-center group/pin cursor-pointer hover:z-50">
<div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-500/30 relative z-10 transition-transform group-hover/pin:scale-125">1</div>
<div className="pin-pulse top-3 left-3 -z-0"></div>
<div className="absolute top-10 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">Bogotá</div>
</div>
<div className="absolute top-[35%] left-[32%] flex flex-col items-center group/pin cursor-pointer hover:z-50">
<div className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm shadow-md relative z-10 transition-transform group-hover/pin:scale-125 group-hover/pin:bg-blue-600 group-hover/pin:text-white group-hover/pin:border-blue-600">2</div>
</div>

<div className="absolute top-[12%] left-[30%] flex flex-col items-center group/pin cursor-pointer hover:z-50">
<div className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm shadow-md relative z-10 transition-transform group-hover/pin:scale-125 group-hover/pin:bg-blue-600 group-hover/pin:text-white group-hover/pin:border-blue-600">3</div>
</div>
</div>
</div>

<div className="flex flex-col h-full bg-white relative">
<div className="p-12 lg:pb-0">
<h2 className="text-3xl font-heading font-bold text-slate-900 mb-2">Nuestras Sedes</h2>
<p className="text-slate-500 text-lg">8 Sedes Principales con cobertura nacional</p>
</div>
<div className="flex-1 overflow-y-auto p-12 space-y-4 no-scrollbar">
<div className="flex gap-4 p-4 rounded-xl border border-blue-100 bg-blue-50/50 hover:bg-blue-50 transition-colors">
<div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0 mt-1">1</div>
<div>
<h3 className="font-bold text-slate-900 text-lg">Bogotá (Principal)</h3>
<p className="text-slate-500 text-sm">Calle 17 No 42 A-15</p>
<p className="text-blue-600 text-sm font-mono mt-1">313-8702938</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-colors">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold shrink-0 mt-1">2</div>
<div>
<h3 className="font-bold text-slate-900 text-lg">Medellín</h3>
<p className="text-slate-500 text-sm">Cra 57 #24-33</p>
<p className="text-blue-600 text-sm font-mono mt-1">321-2000758</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-colors">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold shrink-0 mt-1">3</div>
<div>
<h3 className="font-bold text-slate-900 text-lg">Cartagena</h3>
<p className="text-slate-500 text-sm">CRA 29 No 28-66</p>
<p className="text-blue-600 text-sm font-mono mt-1">313-8703427</p>
</div>
</div>
</div>

<div className="w-full border-t border-slate-100 p-6 flex justify-between items-center text-slate-400 text-xs font-medium bg-white shrink-0">
<div className="flex gap-4">
<span className="flex items-center gap-1 hover:text-blue-600 transition-colors"><iconify-icon icon="solar:letter-linear"></iconify-icon> dir.comercial@suratrans.com</span>
<span className="flex items-center gap-1 hover:text-blue-600 transition-colors"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon> 322 3458325</span>
</div>
<span className="hover:text-blue-600 transition-colors">www.suramericanadetransportes.com</span>
</div>
</div>
</div>
</div>
</section>

<section className="snap-section min-w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12 relative">
<div className="spotlight-card w-full max-w-[1600px] h-[90vh] shadow-2xl rounded-[2rem] border border-slate-200 flex overflow-hidden relative">
<div className="spotlight-border"></div>
<div className="absolute top-8 right-8 text-6xl font-heading font-bold text-slate-100 select-none z-20">04</div>
<div className="grid grid-cols-1 lg:grid-cols-5 w-full h-full">

<div className="lg:col-span-2 relative h-full">
<img alt="Services" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1566576912902-1d6db6b8d5cb?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/60"></div>
<div className="absolute bottom-0 left-0 p-12 text-white">
<h2 className="text-4xl font-heading font-bold mb-4">Portafolio de Servicios</h2>
<p className="text-slate-300">Soluciones logísticas integrales diseñadas para cada necesidad.</p>
</div>
</div>

<div className="lg:col-span-3 p-12 bg-white flex flex-col relative">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 content-center flex-grow">

<div className="group p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5 transition-all">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:city-linear" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 text-lg mb-2">Distribución Urbana</h4>
<p className="text-sm text-slate-500">Entrega eficiente y puntual en todas las ciudades principales.</p>
</div>
<div className="group p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5 transition-all">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:truck-linear" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 text-lg mb-2">Carga Masiva</h4>
<p className="text-sm text-slate-500">Transporte de gran volumen con flota especializada.</p>
</div>
<div className="group p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5 transition-all">
<div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:danger-triangle-linear" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 text-lg mb-2">Mercancías Peligrosas</h4>
<p className="text-sm text-slate-500">Manejo certificado con protocolos de seguridad.</p>
</div>
<div className="group p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5 transition-all">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:transfer-horizontal-linear" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 text-lg mb-2">ITR / OTM</h4>
<p className="text-sm text-slate-500">Operaciones de tránsito aduanero y multimodal.</p>
</div>
</div>

<div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center text-slate-400 text-xs font-medium">
<div className="flex gap-4">
<span className="flex items-center gap-1 hover:text-blue-600 transition-colors"><iconify-icon icon="solar:letter-linear"></iconify-icon> dir.comercial@suratrans.com</span>
</div>
<span className="hover:text-blue-600 transition-colors">www.suramericanadetransportes.com</span>
</div>
</div>
</div>
</div>
</section>

<section className="snap-section min-w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12 relative">
<div className="spotlight-card w-full max-w-[1600px] h-[90vh] shadow-2xl rounded-[2rem] border border-slate-200 flex overflow-hidden relative bg-white">
<div className="spotlight-border"></div>
<div className="absolute top-8 right-8 text-6xl font-heading font-bold text-slate-100 select-none z-20">05</div>
<div className="flex flex-col w-full h-full p-12 lg:p-20">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="mb-4 text-blue-600 font-bold tracking-widest text-xs uppercase">Valor Agregado</div>
<h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">Características del Servicio</h2>
<p className="text-slate-500 text-lg">Garantizamos la seguridad y trazabilidad de su mercancía con los más altos estándares.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-grow content-center">

<div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
<iconify-icon icon="solar:satellite-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Monitoreo 24/7</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                                Sala de control equipada con tecnología de punta para seguimiento satelital (GPS) en tiempo real.
                            </p>
</div>

<div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
<iconify-icon icon="solar:shield-check-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Puestos de Control</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                                Red de puestos de control físicos y virtuales en las principales vías nacionales.
                            </p>
</div>

<div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
<iconify-icon icon="solar:user-id-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Personal Calificado</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                                Conductores seleccionados rigurosamente con estudios de seguridad y capacitación constante.
                            </p>
</div>

<div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
<iconify-icon icon="solar:graph-up-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Indicadores de Gestión</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                                Reportes detallados y KPIs de cumplimiento para optimizar su cadena de suministro.
                            </p>
</div>
</div>

<div className="w-full pt-8 border-t border-slate-100 flex justify-between items-center text-slate-400 text-xs font-medium">
<div className="flex gap-4">
<span className="flex items-center gap-1 hover:text-blue-600 transition-colors"><iconify-icon icon="solar:letter-linear"></iconify-icon> dir.comercial@suratrans.com</span>
<span className="flex items-center gap-1 hover:text-blue-600 transition-colors"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon> 322 3458325</span>
</div>
<span className="hover:text-blue-600 transition-colors">www.suramericanadetransportes.com</span>
</div>
</div>
</div>
</section>

<section className="snap-section min-w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12 relative">
<div className="spotlight-card w-full max-w-[1600px] h-[90vh] shadow-2xl rounded-[2rem] border border-slate-200 flex overflow-hidden relative">
<div className="spotlight-border"></div>
<div className="absolute top-8 right-8 text-6xl font-heading font-bold text-slate-100 select-none z-20">06</div>
<div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">

<div className="relative bg-slate-900 h-full flex flex-col justify-center p-12 lg:p-20 overflow-hidden">

<div className="absolute inset-0 opacity-20">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 rounded-full blur-[80px]"></div>
</div>
<div className="relative z-10 text-white mb-12">
<h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Respaldo y<br/><span className="text-blue-400">Cumplimiento</span></h2>
<p className="text-slate-300 text-lg">
                                Operamos bajo estrictas normas de calidad y seguridad, protegiendo su patrimonio en todo momento.
                            </p>
</div>
<div className="relative z-10 grid grid-cols-2 gap-6">

<div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-4xl text-blue-400 mb-3" icon="mdi:certificate-outline"></iconify-icon>
<span className="font-bold text-white tracking-wider">ISO 9001</span>
<span className="text-xs text-slate-400 mt-1">Calidad Certificada</span>
</div>

<div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-4xl text-blue-400 mb-3" icon="mdi:shield-check-outline"></iconify-icon>
<span className="font-bold text-white tracking-wider">BASC</span>
<span className="text-xs text-slate-400 mt-1">Comercio Seguro</span>
</div>
</div>
</div>

<div className="bg-white p-12 lg:p-20 flex flex-col justify-center relative">
<div className="mb-4 text-blue-600 font-bold tracking-widest text-xs uppercase">Pólizas de Seguros</div>
<h3 className="text-3xl font-heading font-bold text-slate-900 mb-8">Cobertura Integral</h3>
<div className="space-y-6">
<div className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:document-add-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900 text-lg">Póliza de Mercancías</h4>
<p className="text-slate-500 text-sm mb-1">Amparo automático hasta $400 Millones por despacho.</p>
<span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">SURA / CHUBB</span>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
<div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:umbrella-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900 text-lg">Responsabilidad Civil (RCE)</h4>
<p className="text-slate-500 text-sm mb-1">Protección ante terceros y daños patrimoniales.</p>
<span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">MAPFRE</span>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
<div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900 text-lg">Póliza de Contenedores</h4>
<p className="text-slate-500 text-sm mb-1">Cobertura específica para unidades de carga y comodatos.</p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full border-t border-slate-100 p-6 flex justify-between items-center text-slate-400 text-xs font-medium">
<div className="flex gap-4">
<span className="flex items-center gap-1 hover:text-blue-600 transition-colors"><iconify-icon icon="solar:letter-linear"></iconify-icon> dir.comercial@suratrans.com</span>
</div>
<span className="hover:text-blue-600 transition-colors">www.suramericanadetransportes.com</span>
</div>
</div>
</div>
</div>
</section>

<section className="snap-section min-w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12 relative">
<div className="spotlight-card w-full max-w-[1600px] h-[90vh] shadow-2xl rounded-[2rem] border border-slate-200 flex overflow-hidden relative">
<div className="spotlight-border"></div>
<div className="absolute top-8 right-8 text-6xl font-heading font-bold text-slate-100 select-none z-20">07</div>
<div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">

<div className="p-12 lg:p-20 flex flex-col justify-center bg-white relative">
<h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">Parque Automotor</h2>
<p className="text-slate-500 text-xl leading-relaxed mb-10">
                            Contamos con flota propia y fidelizada para garantizar la disponibilidad y cumplimiento en cada ruta.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-6 p-4 rounded-xl border border-slate-100 bg-slate-50">
<iconify-icon className="text-4xl text-blue-600" icon="mdi:truck"></iconify-icon>
<div>
<h4 className="font-bold text-slate-900">Tractomulas</h4>
<p className="text-sm text-slate-500">Carga pesada y larga distancia</p>
</div>
</div>
<div className="flex items-center gap-6 p-4 rounded-xl border border-slate-100 bg-slate-50">
<iconify-icon className="text-4xl text-blue-600" icon="mdi:truck-trailer"></iconify-icon>
<div>
<h4 className="font-bold text-slate-900">Minimulas y Sencillos</h4>
<p className="text-sm text-slate-500">Versatilidad para carga media</p>
</div>
</div>
<div className="flex items-center gap-6 p-4 rounded-xl border border-slate-100 bg-slate-50">
<iconify-icon className="text-4xl text-blue-600" icon="solar:satellite-linear"></iconify-icon>
<div>
<h4 className="font-bold text-slate-900">Tecnología GPS 24/7</h4>
<p className="text-sm text-slate-500">Rastreo satelital en tiempo real</p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full border-t border-slate-100 p-6 flex justify-between items-center text-slate-400 text-xs font-medium">
<div className="flex gap-4">
<span className="flex items-center gap-1 hover:text-blue-600 transition-colors"><iconify-icon icon="solar:letter-linear"></iconify-icon> dir.comercial@suratrans.com</span>
</div>
<span className="hover:text-blue-600 transition-colors">www.suramericanadetransportes.com</span>
</div>
</div>

<div className="relative h-full overflow-hidden">
<img alt="Truck Fleet" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="snap-section min-w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12 relative">
<div className="spotlight-card w-full max-w-[1600px] h-[90vh] shadow-2xl rounded-[2rem] border border-slate-200 flex flex-col overflow-hidden relative p-12 lg:p-20 bg-white">
<div className="spotlight-border"></div>
<div className="absolute top-8 right-8 text-6xl font-heading font-bold text-slate-100 select-none z-20">08</div>
<div className="text-center mb-12 relative z-10">
<h2 className="text-4xl font-heading font-bold text-slate-900">Aliados Estratégicos</h2>
<p className="text-slate-500 mt-2 text-lg">Empresas que confían en nuestra excelencia operativa.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 z-10 content-center flex-grow overflow-y-auto no-scrollbar pb-12">
<div className="flex items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100 grayscale hover:grayscale-0 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
<span className="text-2xl font-bold font-heading text-slate-800">Pfizer</span>
</div>
<div className="flex items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100 grayscale hover:grayscale-0 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
<span className="text-xl font-bold font-heading text-slate-800 text-center">Fed. Nal. Cafeteros</span>
</div>
<div className="flex items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100 grayscale hover:grayscale-0 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
<span className="text-2xl font-bold font-heading text-slate-800 italic">DHL</span>
</div>
<div className="flex items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100 grayscale hover:grayscale-0 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
<span className="text-2xl font-bold font-heading text-slate-800">BASF</span>
</div>
<div className="flex items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100 grayscale hover:grayscale-0 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
<span className="text-2xl font-bold font-heading text-slate-800">SAMSUNG</span>
</div>
<div className="flex items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100 grayscale hover:grayscale-0 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
<span className="text-2xl font-bold font-heading text-slate-800">FEDEARROZ</span>
</div>
<div className="flex items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100 grayscale hover:grayscale-0 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
<span className="text-2xl font-bold font-heading text-slate-800">BDP</span>
</div>
<div className="flex items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100 grayscale hover:grayscale-0 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
<span className="text-2xl font-bold font-heading text-slate-800">Amway</span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full border-t border-slate-100 p-6 flex justify-between items-center text-slate-400 text-xs font-medium bg-white">
<div className="flex gap-4">
<span className="flex items-center gap-1 hover:text-blue-600 transition-colors"><iconify-icon icon="solar:letter-linear"></iconify-icon> dir.comercial@suratrans.com</span>
</div>
<span className="hover:text-blue-600 transition-colors">www.suramericanadetransportes.com</span>
</div>
</div>
</section>

<section className="snap-section min-w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12 relative">
<div className="spotlight-card w-full max-w-[1600px] h-[90vh] shadow-2xl rounded-[2rem] border border-slate-200 flex flex-col items-center justify-center text-center overflow-hidden relative group">
<div className="spotlight-border"></div>

<div className="absolute inset-0 z-0">
<img alt="Office" className="w-full h-full object-cover grayscale opacity-20 group-hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
</div>
<div className="z-10 max-w-3xl relative">
<div className="w-24 h-24 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white mx-auto mb-10 shadow-xl shadow-blue-500/30">
<iconify-icon icon="solar:check-read-linear" width="48"></iconify-icon>
</div>
<h2 className="text-5xl lg:text-7xl font-heading font-bold text-slate-900 mb-8 tracking-tight">Gracias</h2>
<p className="text-2xl text-slate-500 mb-12 font-light">
                        "Para nosotros es fundamental contar con clientes como ustedes."
                    </p>
<div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-slate-200 inline-block w-full shadow-lg">
<h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-wider">Suramericana de Transportes S.A.</h3>
<p className="text-blue-600 font-bold mb-8">LA NUEVA CULTURA DEL TRANSPORTE</p>
<div className="flex flex-wrap justify-center gap-8 text-slate-600">
<a className="flex items-center gap-3 hover:text-blue-600 transition-colors" href="tel:3223458325">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:phone-calling-bold"></iconify-icon>
</div>
<span className="font-medium">322 3458325</span>
</a>
<a className="flex items-center gap-3 hover:text-blue-600 transition-colors" href="mailto:dir.comercial@suratrans.com">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:letter-bold"></iconify-icon>
</div>
<span className="font-medium">dir.comercial@suratrans.com</span>
</a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 text-center text-slate-400 text-xs font-medium z-10">
                    www.suramericanadetransportes.com
                </div>
</div>
</section>
</main>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200 shadow-xl flex gap-3">
<button className="w-3 h-3 rounded-full bg-slate-300 hover:bg-blue-600 transition-all" onclick="scrollToSlide(0)"></button>
<button className="w-3 h-3 rounded-full bg-slate-300 hover:bg-blue-600 transition-all" onclick="scrollToSlide(1)"></button>
<button className="w-3 h-3 rounded-full bg-slate-300 hover:bg-blue-600 transition-all" onclick="scrollToSlide(2)"></button>
<button className="w-3 h-3 rounded-full bg-slate-300 hover:bg-blue-600 transition-all" onclick="scrollToSlide(3)"></button>
<button className="w-3 h-3 rounded-full bg-slate-300 hover:bg-blue-600 transition-all" onclick="scrollToSlide(4)"></button>
<button className="w-3 h-3 rounded-full bg-slate-300 hover:bg-blue-600 transition-all" onclick="scrollToSlide(5)"></button>
<button className="w-3 h-3 rounded-full bg-slate-300 hover:bg-blue-600 transition-all" onclick="scrollToSlide(6)"></button>
<button className="w-3 h-3 rounded-full bg-slate-300 hover:bg-blue-600 transition-all" onclick="scrollToSlide(7)"></button>
<button className="w-3 h-3 rounded-full bg-slate-300 hover:bg-blue-600 transition-all" onclick="scrollToSlide(8)"></button>
</div>


    </>
  );
}
