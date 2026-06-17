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



        lucide.createIcons();
    
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
      

<header className="fixed top-0 w-full z-50 border-b border-slate-200 bg-slate-50/95 backdrop-blur">
<div className="flex justify-between items-center h-12 px-4 max-w-7xl mx-auto">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-500 rounded-none status-blink"></div>
<span className="font-tech text-[10px] tracking-widest text-slate-500 uppercase">SYS_ONLINE</span>
</div>
<div className="h-4 w-px bg-slate-300"></div>
<span className="font-bold tracking-tighter text-lg uppercase">COLVION</span>
</div>
<div className="hidden md:flex items-center gap-6 font-tech text-[10px] tracking-widest text-slate-400">
<span>// MADRID_ZONE</span>
<span>// STATUS: ACTIVE</span>
</div>
<div className="flex items-center gap-2 border border-slate-200 px-2 py-1 bg-white">
<span className="font-tech text-[10px] uppercase text-slate-600">RobotFlow™ v2.1</span>
</div>
</div>
</header>
<main className="pt-12 bg-grid-pattern min-h-screen">

<section className="relative pt-20 pb-24 px-4 border-b border-slate-300">
<div className="max-w-7xl mx-auto relative z-10">

<div className="flex justify-between items-end mb-6 border-b border-slate-200 pb-2">
<span className="font-tech text-xs text-slate-400 uppercase">[INPUT: HIGH_VALUE_TARGETS]</span>
<span className="font-tech text-xs text-[#FF5C00] uppercase font-bold">LIMITED_AVAILABILITY: 4 ZONES</span>
</div>
<div className="grid lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-7">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold uppercase leading-[0.9] tracking-tighter text-slate-900 mb-8">
                            Tu robot <br/>
                            fresador de <span className="text-slate-400">80.000€</span> <br/>
                            no se compró <br/>
                            para estar <br/>
                            parado.
                        </h1>
<p className="text-xl md:text-2xl text-slate-600 font-medium leading-tight font-label border-l-2 border-slate-900 pl-6 mb-8 max-w-2xl">
                            En 14 días te entregamos 3 oportunidades de intervención técnica de entre <span className="text-slate-900 font-bold">3.000€ y 15.000€</span> cada una, con propietarios particulares en la Comunidad de Madrid que ya tienen un problema estructural real.
                        </p>
<p className="font-tech text-sm text-slate-500 mb-8">
                            // Sin perder tiempo en desatascos de 80€ que no escalan.
                        </p>
</div>
<div className="lg:col-span-5 flex flex-col justify-center h-full pt-4">
<div className="bg-white border border-slate-200 p-8 shadow-sm mb-8 relative">
<div className="absolute top-0 right-0 -mt-3 -mr-3 bg-[#00E0FF] text-slate-900 font-tech text-[10px] font-bold px-2 py-1 uppercase">Methodology</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-green-600 mt-0.5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-label font-medium text-slate-700">Solo tecnología Sin Zanja (CCTV / fresado / packer / manga)</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-green-600 mt-0.5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-label font-medium text-slate-700">Exclusividad: 1 empresa por zona en la Comunidad de Madrid</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-green-600 mt-0.5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-label font-medium text-slate-700">Garantía: 14 días → 3 citas técnicas o devolución 100%</span>
</li>
</ul>
</div>
<div>
<a className="btn-hazard block w-full text-white px-6 py-5 text-lg font-bold uppercase tracking-wide text-center group" href="#audit">
<span className="flex items-center justify-center gap-3">
                                    Reservar mi auditoría de zona (15 min)
                                    <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<div className="mt-3 text-center space-y-2">
<p className="font-tech text-[10px] text-red-500 uppercase tracking-widest font-bold animate-pulse">
                                    ⚠ Quedan 4 zonas disponibles en la Comunidad de Madrid
                                </p>
<p className="font-tech text-[10px] text-slate-400">
                                    Haces clic → respondes 3 preguntas (30s) → eliges hora → confirmación por WhatsApp en menos de 2h
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-white">
<div className="max-w-6xl mx-auto">
<div className="flex items-center gap-4 mb-12">
<div className="bg-slate-900 text-white font-tech text-xs px-2 py-1 uppercase">Operational_Log</div>
<div className="h-px bg-slate-200 flex-grow"></div>
</div>
<div className="grid lg:grid-cols-12 gap-12 mb-16">
<div className="lg:col-span-5">
<div className="bg-slate-900 p-6 font-tech text-xs md:text-sm text-slate-400 leading-relaxed border-l-4 border-[#FF5C00]">
<p className="mb-2"><span className="text-[#00E0FF]">07:00:00</span> [INFO] Iniciando jornada.</p>
<p className="mb-2"><span className="text-slate-500">&gt;&gt;</span> Tu técnico cruza Madrid por un "atasco".</p>
<p className="mb-2"><span className="text-[#00E0FF]">08:30:00</span> [COMPLETE] Intervención finalizada.</p>
<p className="mb-2"><span className="text-green-500">&gt;&gt;</span> 120€ facturados.</p>
<p className="mb-2"><span className="text-red-500">&gt;&gt;</span> El robot fresador sigue parado en la nave.</p>
<div className="my-4 border-t border-slate-700"></div>
<p className="italic text-slate-300">Dices "hay movimiento".</p>
<p className="italic text-slate-300">El Excel dice margen bajo.</p>
</div>
</div>
<div className="lg:col-span-7 flex items-center">
<h2 className="text-4xl md:text-5xl font-semibold uppercase leading-none tracking-tight text-slate-900">
                            Cuando el movimiento <br/>
<span className="text-slate-400">no se traduce en margen</span>
</h2>
</div>
</div>
<div className="grid md:grid-cols-3 gap-0 border border-slate-200">

<div className="group border-b md:border-b-0 md:border-r border-slate-200 p-10 hover:bg-slate-50 transition-colors crosshair-corner">
<div className="flex justify-between mb-8">
<svg className="lucide lucide-battery-low w-8 h-8 text-slate-300 group-hover:text-[#FF5C00] transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" ry="2" width="16" x="2" y="7"></rect><line x1="22" x2="22" y1="11" y2="13"></line><line x1="6" x2="6" y1="11" y2="13"></line></svg>
<span className="font-tech text-xs text-slate-400">01</span>
</div>
<h3 className="text-2xl font-bold uppercase mb-4 tracking-tight">Tecnología infrautilizada</h3>
<p className="text-slate-600 leading-relaxed font-label text-lg">
                            Invertiste en maquinaria de alto nivel, pero trabaja muy por debajo de su capacidad real.
                        </p>
</div>

<div className="group border-b md:border-b-0 md:border-r border-slate-200 p-10 hover:bg-slate-50 transition-colors crosshair-corner">
<div className="flex justify-between mb-8">
<svg className="lucide lucide-volume-2 w-8 h-8 text-slate-300 group-hover:text-[#FF5C00] transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
<span className="font-tech text-xs text-slate-400">02</span>
</div>
<h3 className="text-2xl font-bold uppercase mb-4 tracking-tight">Ruido constante</h3>
<p className="text-slate-600 leading-relaxed font-label text-lg">
                            La mayoría de avisos son problemas simples que no justifican diagnóstico ni obra técnica.
                        </p>
</div>

<div className="group p-10 hover:bg-slate-50 transition-colors crosshair-corner">
<div className="flex justify-between mb-8">
<svg className="lucide lucide-shuffle w-8 h-8 text-slate-300 group-hover:text-[#FF5C00] transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l10.6-14.4c.8-1.1 2-1.7 3.3-1.7H22"></path><path d="M2 5h1.6c1.3 0 2.5.6 3.3 1.7l10.6 14.4c.8 1.1 2 1.7 3.3 1.7H22"></path></svg>
<span className="font-tech text-xs text-slate-400">03</span>
</div>
<h3 className="text-2xl font-bold uppercase mb-4 tracking-tight">Dependencia del azar</h3>
<p className="text-slate-600 leading-relaxed font-label text-lg">
                            Si el teléfono no suena, el mes se cae. No hay control. No hay previsión.
                        </p>
</div>
</div>
<div className="mt-8 text-center">
<p className="font-tech text-sm text-slate-500 uppercase tracking-widest bg-slate-100 inline-block px-4 py-2">
                        Imagina saber el lunes qué obras cerrarás el viernes.
                    </p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-300 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-slate-200 md:block hidden"></div>
<div className="max-w-7xl mx-auto px-4 relative">
<div className="text-center mb-16">
<span className="inline-block border border-[#00E0FF] text-[#00E0FF] bg-[#00E0FF]/5 font-tech font-bold px-3 py-1 text-xs uppercase tracking-widest mb-4">Diagnosis Protocol</span>
<h2 className="text-5xl md:text-6xl font-semibold uppercase text-slate-900 tracking-tighter mb-6">El problema no es la demanda.<br/>Es el filtrado.</h2>
<p className="max-w-2xl mx-auto text-slate-600 text-lg font-label">
                        En la Comunidad de Madrid, aproximadamente el <span className="text-slate-900 font-bold">40% de las urgencias</span> por atasco esconden una patología estructural grave: raíces, roturas, colapsos, tramos antiguos o mal ejecutados.
                    </p>
</div>
<div className="grid md:grid-cols-2 gap-12 lg:gap-24">

<div className="space-y-8 flex flex-col justify-center">
<div className="bg-white border border-slate-200 p-8">
<h4 className="font-bold uppercase text-lg mb-4 text-slate-400">El problema actual:</h4>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-red-500"></div>
<span className="font-label text-lg text-slate-700">El propietario no sabe explicarlo.</span>
</li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-red-500"></div>
<span className="font-label text-lg text-slate-700">El fontanero común no sabe detectarlo.</span>
</li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-red-500"></div>
<span className="font-label text-lg text-slate-700 font-bold">Y la obra acaba en la empresa equivocada.</span>
</li>
</ul>
<p className="mt-6 text-sm font-tech text-slate-500 pt-4 border-t border-slate-100">
                                // RESULT: Esas patologías solo se resuelven con diagnóstico y tecnología Sin Zanja.
                            </p>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="bg-slate-900 text-white p-8 border-l-4 border-[#00E0FF] relative shadow-xl">
<div className="absolute -top-3 left-6 bg-white text-slate-900 px-2 py-0 border border-slate-900 font-tech text-[10px] uppercase font-bold tracking-widest">
                                RobotFlow™ Core
                            </div>
<h3 className="text-2xl font-bold uppercase mb-4 text-[#00E0FF]">Central de Validación RobotFlow™</h3>
<p className="text-slate-300 font-label text-lg mb-6">
                                No nos basamos en suerte. Funciona porque detectamos esas señales antes de que muevas un dedo. Identificamos:
                            </p>
<div className="grid grid-cols-2 gap-4 mb-6 font-tech text-xs text-white uppercase tracking-wider">
<div className="bg-slate-800 p-2 border border-slate-700">Atascos recurrentes</div>
<div className="bg-slate-800 p-2 border border-slate-700">Humedades persistentes</div>
<div className="bg-slate-800 p-2 border border-slate-700">Olores constantes</div>
<div className="bg-slate-800 p-2 border border-slate-700">Hundimientos</div>
</div>
<p className="text-lg font-medium leading-relaxed font-label border-t border-slate-700 pt-4">
                                Cuando esos síntomas se cruzan, el caso deja de ser un desatasco. <span className="text-[#00E0FF]">Se convierte en una oportunidad de intervención técnica.</span>
</p>
<p className="mt-4 text-sm text-slate-400 font-tech">
                                &gt;&gt; Filtramos el ruido. Tú solo mueves el camión cuando la obra lo merece.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-4">
<div className="mb-16">
<h2 className="text-4xl font-semibold uppercase tracking-tight text-slate-900 mb-6">Cómo funciona</h2>
<div className="space-y-0 border-l border-slate-200 ml-4">

<div className="relative pl-12 pb-12">
<div className="absolute -left-[9px] top-1 w-[18px] h-[18px] bg-slate-50 border border-slate-300 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-slate-400"></div>
</div>
<h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900 mb-2">1. Detección</h3>
<p className="text-slate-600 font-label text-xl">Encontramos propietarios en tu zona con síntomas de rotura grave.</p>
</div>

<div className="relative pl-12 pb-12">
<div className="absolute -left-[9px] top-1 w-[18px] h-[18px] bg-white border border-[#00E0FF] flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-[#00E0FF]"></div>
</div>
<h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900 mb-2">2. Filtrado</h3>
<p className="text-slate-600 font-label text-xl">Descartamos todo lo que no requiere tu tecnología.</p>
</div>

<div className="relative pl-12">
<div className="absolute -left-[9px] top-1 w-[18px] h-[18px] bg-white border border-[#FF5C00] flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-[#FF5C00]"></div>
</div>
<h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900 mb-2">3. Entrega</h3>
<p className="text-slate-600 font-label text-xl">Recibes 3 citas listas para presupuestar.</p>
<p className="font-tech text-xs text-slate-400 mt-2 uppercase">&gt;&gt; Filtramos el ruido. Tú solo mueves el camión cuando la obra lo merece.</p>
</div>
</div>
</div>

<div className="bg-slate-900 text-white border border-slate-800 p-10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#00E0FF] opacity-5 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
<div className="flex-1">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-shield-check w-6 h-6 text-[#00E0FF]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-tech text-xs text-[#00E0FF] uppercase tracking-widest">Garantía Total</span>
</div>
<h3 className="text-4xl font-bold uppercase mb-4 text-white">Robot Sprint 14D™</h3>
<p className="text-slate-300 font-label text-lg mb-6 leading-relaxed">
                                En 14 días te entregamos 3 oportunidades de intervención técnica validadas con el Método RobotFlow™.
                            </p>
<ul className="space-y-2 mb-6 font-tech text-xs text-slate-400 uppercase">
<li>✓ Obra potencial: 3.000€ - 15.000€</li>
<li>✓ Garantía: Si no recibes 3 citas, devolución 100%</li>
</ul>
<p className="text-sm font-label text-slate-400 italic border-l-2 border-slate-700 pl-4">
                                "Imagina ser la empresa de tu zona que rechaza desatascos porque tiene la agenda llena de rehabilitaciones."
                            </p>
</div>
<div className="w-full md:w-auto bg-white/5 border border-white/10 p-6 rounded-sm min-w-[280px]">
<h4 className="font-bold uppercase text-sm mb-4 text-[#00E0FF]">Qué recibes en 14 días:</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mt-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-label text-slate-300">3 oportunidades de intervención técnica</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mt-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-label text-slate-300">Cita confirmada con propietario</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mt-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-label text-slate-300">Dirección exacta</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mt-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-label text-slate-300">Lista para diagnosticar y presupuestar</span>
</li>
</ul>
<div className="mt-6 pt-4 border-t border-white/10 text-center">
<span className="text-[10px] font-tech text-slate-500 uppercase">Sin letra pequeña. Sin excusas.</span>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center">
<p className="font-label text-slate-500 text-sm">
                        Solo trabajamos con una empresa por zona. Si saturamos el sistema, deja de funcionar. Preferimos rechazar 10 empresas que fallar a 1.
                     </p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4">
<div className="grid lg:grid-cols-2 gap-12">

<div>
<div className="flex items-center gap-2 mb-8">
<span className="bg-slate-900 text-white font-tech text-xs px-2 py-1 uppercase">Gatekeeper_Protocol</span>
</div>
<h3 className="text-3xl font-semibold uppercase text-slate-900 mb-6">Requisitos para trabajar juntos</h3>
<div className="bg-white border border-slate-200 p-8 space-y-6">
<div className="flex items-center gap-4">
<div className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-sm">
<svg className="lucide lucide-video w-5 h-5 text-slate-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 8-6 4 6 4V8Z"></path><rect height="12" rx="2" ry="2" width="14" x="2" y="6"></rect></svg>
</div>
<span className="font-label text-lg font-medium text-slate-700">Unidad de inspección CCTV</span>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-sm">
<svg className="lucide lucide-wrench w-5 h-5 text-slate-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
<span className="font-label text-lg font-medium text-slate-700">Al menos un sistema de rehabilitación (fresador, packers o manga)</span>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-sm">
<svg className="lucide lucide-activity w-5 h-5 text-slate-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<span className="font-label text-lg font-medium text-slate-700">Capacidad para absorber 10+ obras técnicas al mes</span>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-sm">
<svg className="lucide lucide-euro w-5 h-5 text-slate-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 10h12"></path><path d="M4 14h9"></path><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"></path></svg>
</div>
<span className="font-label text-lg font-medium text-slate-700">Facturación superior a 300.000€</span>
</div>
<p className="font-tech text-xs text-red-500 pt-4 border-t border-slate-100 uppercase">
                                [SYS_MSG] Si no cumples esto, no seguimos adelante.
                            </p>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-8">
<span className="bg-[#00E0FF] text-slate-900 font-tech text-xs px-2 py-1 uppercase font-bold">Free_Audit_Scope</span>
</div>
<h3 className="text-3xl font-semibold uppercase text-slate-900 mb-6">Qué incluye la auditoría gratuita</h3>
<div className="space-y-6">
<div className="border-l-2 border-slate-300 pl-6">
<h4 className="font-bold uppercase text-lg text-slate-900">Mapa de Obras Ocultas</h4>
<p className="text-slate-600 font-label">Volumen real de búsquedas mensuales en tu zona que indican patología estructural.</p>
</div>
<div className="border-l-2 border-slate-300 pl-6">
<h4 className="font-bold uppercase text-lg text-slate-900">Auditoría de Lucro Cesante</h4>
<p className="text-slate-600 font-label">Cuánto dinero estás dejando de facturar por tener maquinaria parada.</p>
</div>
<div className="border-l-2 border-slate-300 pl-6">
<h4 className="font-bold uppercase text-lg text-slate-900">Reporte de Competencia</h4>
<p className="text-slate-600 font-label">Qué empresas están captando mal la demanda y cómo quitarles las obras de alto margen.</p>
</div>
</div>
<p className="mt-8 font-tech text-xs text-slate-500 uppercase">
                            &gt;&gt; Si no hay encaje, te lo decimos. Y te llevas la información igualmente.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-900 relative text-white cut-line" id="audit">
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
<div className="max-w-2xl mx-auto px-4 text-center relative z-10">
<span className="inline-block border border-slate-700 text-slate-400 font-tech text-[10px] uppercase tracking-widest px-3 py-1 mb-6">Urgency_Level: High</span>
<h2 className="text-4xl md:text-5xl font-semibold uppercase mb-6 tracking-tight">Tu competencia ya está mirando esto.</h2>
<p className="text-xl text-slate-300 font-label mb-12">La diferencia es quién agenda primero.</p>
<a className="btn-hazard inline-block w-full md:w-auto text-white px-12 py-6 text-2xl font-bold uppercase tracking-wide shadow-[0_0_40px_rgba(255,92,0,0.3)] hover:shadow-[0_0_60px_rgba(255,92,0,0.5)] transition-shadow" href="#">
                    Reservar mi auditoría de zona
                </a>
<div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 font-tech text-xs text-slate-500 uppercase tracking-widest text-left md:text-center">
<span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600"></div> Respondes 3 preguntas (30s)</span>
<span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600"></div> Eliges hora</span>
<span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600"></div> Confirmación WhatsApp &lt; 2h</span>
</div>
<div className="mt-4 font-tech text-xs text-slate-500 uppercase tracking-widest">
                    15 minutos · Sin compromiso · 1 empresa por zona
                </div>
<div className="mt-16 pt-8 border-t border-slate-800 text-left max-w-lg mx-auto space-y-4">
<p className="text-slate-400 font-label text-sm leading-relaxed">
<span className="text-[#00E0FF] font-bold">P.D.</span> Varias zonas de la Comunidad de Madrid ya están reservadas. Cuando una zona se cierra, no se vuelve a abrir.
                     </p>
<p className="text-slate-400 font-label text-sm leading-relaxed">
<span className="text-[#00E0FF] font-bold">P.P.D.</span> ¿Tienes la tecnología pero dudas si encajas? La auditoría es gratis. En 15 minutos lo sabrás.
                     </p>
</div>
</div>
</section>

<footer className="bg-slate-950 py-6 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
<span className="font-tech text-[10px] text-slate-600 uppercase">COLVION © 2024</span>
<span className="font-tech text-[10px] text-slate-600 uppercase">MADRID_OPS</span>
</div>
</footer>
</main>


    </>
  );
}
