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
      

<header className="sticky z-50 bg-white border-gray-200 border-b top-0 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="text-[#005BC5] font-bold text-3xl tracking-tighter flex items-center gap-1">
<svg aria-hidden="true" className="lucide lucide-calendar-check-2 w-8 h-8 stroke-[2]" data-lucide="calendar-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg>
              AgendaCentral
            </div>
</div>

<nav className="hidden md:flex space-x-8 items-center">
<a className="text-slate-600 hover:text-[#005BC5] font-medium text-sm transition-colors" href="#">
              Inicio
            </a>
<a className="text-slate-600 hover:text-[#005BC5] font-medium text-sm transition-colors" href="#">
              Planes
            </a>
<a className="text-slate-600 hover:text-[#005BC5] font-medium text-sm transition-colors" href="#">
              App Móvil
            </a>
<a className="text-slate-600 hover:text-[#005BC5] font-medium text-sm transition-colors" href="#">
              Soporte
            </a>
</nav>

<div className="hidden md:flex items-center">
<a className="bg-[#EE3124] hover:bg-red-700 text-white text-sm font-semibold py-2 px-6 rounded-full transition-colors" href="#">
              Contratar Ahora
            </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-[#005BC5]">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="overflow-hidden bg-white border-gray-200 border-b relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 sm:px-6 lg:px-8 pt-12 pr-4 pb-12 pl-4 gap-x-12 gap-y-12 items-center">

<div className="z-10 text-center lg:text-left order-2 lg:order-1">
<div className="inline-block mb-4">
<span className="text-[#005BC5] font-semibold tracking-wide text-xs uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Nuevo Servicio Empresarial
              </span>
</div>
<h1 className="text-[#005BC5] text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight italic mb-6">
              AgendaCentral
              <br/>
<span className="not-italic text-[#EE3124]">
                Reduce el ausentismo de tus citas
              </span>
</h1>
<p className="sm:text-xl lg:mx-0 leading-relaxed text-lg font-light text-slate-500 max-w-2xl mr-auto mb-8 ml-auto">
              Envía recordatorios automáticos por WhatsApp, permite que tus
              clientes confirmen con un clic y mantén tu agenda llena sin
              esfuerzo manual.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="bg-[#EE3124] hover:bg-red-700 text-white text-lg font-semibold py-3 px-10 rounded-full transition-colors shadow-lg shadow-red-200" href="#planes">
                Ver Planes
              </a>
<a className="hover:bg-blue-50 flex items-center justify-center gap-2 transition-colors font-medium text-[#005BC5] border-blue-200 border rounded-full pt-3 pr-8 pb-3 pl-8" href="#">
<svg aria-hidden="true" className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Ver demo en vivo
              </a>
</div>
</div>

<div className="flex order-1 lg:order-2 pt-6 pb-6 relative items-center justify-center">

<div className="bg-gradient-to-tr from-blue-50 to-white opacity-50 z-0 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-3xl"></div>

<div className="relative w-[320px] h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden z-10 flex flex-col">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>

<div className="bg-[#075E54] text-white p-4 pt-10 flex items-center gap-3 shadow-md z-10">
<svg aria-hidden="true" className="lucide lucide-chevron-left w-6 h-6" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#075E54]">
<svg aria-hidden="true" className="lucide lucide-building-2 w-6 h-6" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center gap-1">
<h3 className="text-sm font-semibold">Tu Negocio</h3>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3 h-3 text-green-400 fill-green-400 stroke-white" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-[10px] text-green-100">
                    Cuenta de empresa oficial
                  </p>
</div>
<svg aria-hidden="true" className="lucide lucide-video w-5 h-5 opacity-80" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<svg aria-hidden="true" className="lucide lucide-phone w-5 h-5 ml-3 opacity-80" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>

<div className="flex-1 bg-chat-pattern p-4 overflow-y-auto space-y-4">

<div className="flex justify-center mb-4">
<span className="bg-slate-200 text-slate-600 text-[10px] font-medium px-2 py-1 rounded shadow-sm">
                    Hoy
                  </span>
</div>

<div className="flex flex-col items-start max-w-[85%]">
<div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm relative">
<p className="text-xs text-slate-800 leading-relaxed">
                      Hola
                      
                      👋, te recordamos tu cita dental para mañana.
                      
                      
                      📅
                      
                      25 Oct, 2024
                      
                      ⏰
                      
                      10:00 AM
                      
                      📍
                      
                      Centro
                    </p>
<span className="text-[9px] text-slate-400 absolute bottom-1 right-2">
                      09:00 AM
                    </span>
</div>
</div>

<div className="flex flex-col items-start max-w-[85%] -mt-2 space-y-1">
<div className="w-full bg-white rounded-md shadow-sm p-2 text-center border-t border-slate-100 hover:bg-slate-50 cursor-pointer">
<span className="text-[#005BC5] font-semibold text-xs">
                      Confirmar Asistencia
                    </span>
</div>
</div>

<div className="flex justify-end">
<div className="bg-[#DCF8C6] rounded-lg rounded-tr-none p-2 px-3 shadow-sm relative max-w-[80%]">
<p className="text-xs text-slate-800">Confirmar Asistencia</p>
<div className="flex justify-end items-center gap-1 mt-1">
<span className="text-[9px] text-slate-500">09:05 AM</span>
<svg aria-hidden="true" className="lucide lucide-check-check w-3 h-3 text-[#34B7F1]" data-lucide="check-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 7 17l-5-5"></path><path d="m22 10-7.5 7.5L13 16"></path></svg>
</div>
</div>
</div>

<div className="flex flex-col items-start max-w-[85%]">
<div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm relative">
<p className="text-xs text-slate-800 leading-relaxed">
                      ¡Gracias! Tu cita ha sido confirmada ✅.
                      
                      Si necesitas cambiarla, por favor avísanos con 24h de
                      anticipación.
                    </p>
<span className="text-[9px] text-slate-400 absolute bottom-1 right-2">
                      09:05 AM
                    </span>
</div>
</div>
</div>

<div className="bg-slate-100 p-2 px-3 flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-plus w-5 h-5 text-[#005BC5]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<div className="bg-white flex-1 rounded-full h-8 px-3 text-xs flex items-center text-slate-400 shadow-sm">
                  Escribe un mensaje...
                </div>
<svg aria-hidden="true" className="lucide lucide-mic w-5 h-5 text-[#005BC5]" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
</div>

<div className="absolute bottom-20 -right-4 md:-right-12 bg-white p-3 rounded-lg shadow-xl border border-blue-100 max-w-[160px] hidden sm:block animate-bounce">
<div className="flex items-start gap-2">
<div className="bg-green-100 p-1.5 rounded-full">
<svg aria-hidden="true" className="lucide lucide-zap w-4 h-4 text-green-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="">
<p className="text-xs font-bold text-slate-800">
                    100% Automático
                  </p>
<p className="text-[10px] text-slate-500 leading-tight">
                    Sin intervención humana.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-[#005BC5] text-white py-8 text-center px-4">
<h2 className="sm:text-2xl text-xl font-semibold tracking-tight">Al contratar tu Paquete obtienes <span className="text-[#facc15]">Soporte Prioritario</span> incluido </h2>
</div>

<section className="py-16 sm:py-24 bg-slate-50" id="planes">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<h2 className="text-[#005BC5] text-3xl sm:text-5xl font-light mb-4">
            Paquetes AgendaCentral
          </h2>
<div className="inline-block border border-blue-200 bg-white rounded-full px-6 py-2 shadow-sm">
<span className="text-[#005BC5] font-medium text-sm sm:text-base">
              Agenda digital + WhatsApp Premium + App móvil incluido
            </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col bg-white border-gray-100 border rounded-xl shadow-card">
<div className="bg-[#005BC5] py-4 text-center relative overflow-hidden">
<h3 className="text-white text-3xl font-bold italic relative z-10">
                Agenda
                <span className="text-3xl">Start</span>
</h3>
<div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 bg-white opacity-10 rotate-45 transform"></div>
</div>
<div className="bg-[#EE3124] py-3 text-center">
<p className="flex items-center justify-center gap-1 text-2xl font-bold text-white">$449 <span className="text-sm font-normal opacity-90">al mes</span></p>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div className="text-center bg-blue-50 border-blue-100 border rounded-lg mb-6 pt-3 pr-3 pb-3 pl-3">
<span className="text-[#EE3124] font-bold text-xs uppercase block mb-1">
                  PROMOCIÓN
                </span>
<p className="leading-tight text-xs text-[#005BC5]">
                  Primeros 3 meses con
                  <strong className="">Soporte 24/7</strong>
                  sin costo adicional
                </p>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-message-square w-5 h-5 text-[#EE3124]" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="font-semibold text-slate-800">WhatsApp Business</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-clock w-5 h-5 text-[#005BC5]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
<span className="">Agenda 24/7</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-smartphone w-5 h-5 text-[#005BC5]" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span>App móvil</span>
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-center">
<svg aria-hidden="true" className="lucide lucide-bot w-5 h-5 text-slate-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="">Bot de confirmación</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-bell w-5 h-5 text-slate-400" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="">Recordatorios automatizados</span>
</li>
</ul>
<button className="w-full bg-[#EE3124] hover:bg-red-700 text-white font-semibold py-3 rounded shadow-md transition-colors">
                Contratar
              </button>
</div>
</div>

<div className="bg-white rounded-xl shadow-card hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col relative transform lg:-translate-y-4 lg:z-10">
<div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-1 uppercase">
              Más vendido
            </div>
<div className="bg-[#005BC5] py-4 text-center relative overflow-hidden">
<h3 className="text-white text-3xl font-bold italic relative z-10">
                Agenda
                <span className="text-3xl">Pro</span>
</h3>
</div>
<div className="bg-[#EE3124] py-3 text-center">
<p className="flex items-center justify-center gap-1 text-2xl font-bold text-white">$999 <span className="text-sm font-normal opacity-90">al mes</span></p>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div className="border border-blue-100 rounded-lg p-3 bg-blue-50 mb-6 text-center">
<span className="text-[#EE3124] font-bold text-xs uppercase block mb-1">
                  PROMOCIÓN
                </span>
<p className="text-[#005BC5] text-xs leading-tight">
                  ¡Te regalamos una
                  <strong className="">Landing Page</strong>
                  para tu negocio con formulario de contacto!
                </p>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-check-circle w-5 h-5 text-[#EE3124]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="font-semibold text-slate-800">
                    Todo lo del Plan 1
                  </span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-star" data-icon-replaced="true" data-icon-set="lucide" data-lucide="star" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 91, 197)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-semibold">Número Premium</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-zap w-5 h-5 text-[#005BC5]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="">Bot avanzado</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-calendar w-5 h-5 text-[#005BC5]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="">Integración Google Cal</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-layout-template w-5 h-5 text-[#EE3124]" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
<span className="font-semibold text-slate-800">
                    Landing Page + Contacto
                  </span>
</li>
</ul>
<button className="w-full bg-[#EE3124] hover:bg-red-700 text-white font-semibold py-3 rounded shadow-md transition-colors">
                Contratar
              </button>
</div>
</div>
</div>
<div className="text-center mt-10">
<a className="inline-flex items-center gap-2 hover:text-[#005BC5] hover:border-[#005BC5] transition-all text-sm font-medium text-slate-500 bg-white border-slate-300 border rounded-full pt-3 pr-8 pb-3 pl-8" href="#">
  Ver más paquetes empresariales
  <svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<p className="text-[10px] leading-relaxed text-slate-400 text-justify max-w-5xl mt-8 mr-auto ml-auto">*Los precios incluyen IVA. El servicio de WhatsApp Premium requiere una línea activa. Las automatizaciones están sujetas a las políticas de Meta. La integración con Google Calendar se realiza en la configuración inicial. El soporte 24/7 aplica únicamente para fallos críticos del sistema. Para cancelaciones, se requiere un aviso de 30 días. AgendaCentral no se hace responsable por el contenido de los mensajes enviados a través de la plataforma. </p>
</div>
</section>

<section className="bg-white border-gray-200 border-t pt-16 pb-16">
<div className="max-w-5xl mx-auto px-4 text-center">
<h2 className="text-[#005BC5] text-2xl sm:text-3xl font-light mb-10">
          ¿Buscas potenciar tu alcance?
          
          <span className="font-normal text-slate-700">
            Con AgendaCentral obtienes más que una agenda
          </span>
</h2>
<div className="grid grid-cols-2 md:grid-cols-5 hover:grayscale-0 transition-all duration-500 opacity-70 grayscale gap-x-8 gap-y-8 items-center justify-items-center">
<div className="flex flex-col items-center gap-2 group">
<svg aria-hidden="true" className="lucide lucide-message-circle w-12 h-12 text-[#25D366] group-hover:scale-110 transition-transform" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="text-xs font-semibold">WhatsApp</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<svg aria-hidden="true" className="lucide lucide-smartphone w-12 h-12 text-slate-800 group-hover:scale-110 transition-transform" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span className="text-xs font-semibold">App iOS/Android</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<svg aria-hidden="true" className="lucide lucide-bot w-12 h-12 text-[#005BC5] group-hover:scale-110 transition-transform" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="text-xs font-semibold">Bot IA</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<svg aria-hidden="true" className="lucide lucide-bell-ring w-12 h-12 text-[#EE3124] group-hover:scale-110 transition-transform" data-lucide="bell-ring" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path></svg>
<span className="text-xs font-semibold">Alertas SMS</span>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-blue-50/50 pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-center">

<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[#005BC5] text-xs font-semibold tracking-wide uppercase">Sincronización en tiempo real</span>
</div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#001E42] mb-6 leading-tight">
              Lleva el control total 
              <span className="text-[#005BC5]">Web &amp; App en tu movil</span>
</h2>
<p className="text-lg text-slate-600 mb-8 font-light leading-relaxed">
              Ya sea en la oficina o en movimiento, tu agenda viaja contigo. Accede al panel de administración completo desde tu navegador o gestiona citas rápidas desde nuestra App nativa optimizada para iOS y Android.
            </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<div className="bg-blue-100 p-1 rounded mt-0.5">
<svg aria-hidden="true" className="lucide lucide-refresh-cw w-4 h-4 text-[#005BC5]" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
<div>
<p className="text-slate-500 text-xs">Lo que editas en la web aparece al instante en tu celular.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="bg-blue-100 p-1 rounded mt-0.5">
<svg aria-hidden="true" className="lucide lucide-bell w-4 h-4 text-[#005BC5]" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<div>
<p className="text-slate-500 text-xs">Entérate al momento cuando un cliente confirma o cancela.</p>
</div>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-black text-white px-5 py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all group w-full sm:w-auto shadow-lg hover:shadow-xl">
<svg aria-hidden="true" className="lucide lucide-apple w-7 h-7 fill-white group-hover:scale-110 transition-transform" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
<div className="flex flex-col items-start leading-none">
<span className="text-[10px] font-medium opacity-80">Descárgalo en el</span>
<span className="text-base font-bold">App Store</span>
</div>
</button>
<button className="bg-black text-white px-5 py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all group w-full sm:w-auto shadow-lg hover:shadow-xl">
<svg aria-hidden="true" className="lucide lucide-play w-6 h-6 fill-white group-hover:scale-110 transition-transform ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<div className="flex flex-col items-start leading-none">
<span className="text-[10px] font-medium opacity-80">DISPONIBLE EN</span>
<span className="text-base font-bold">Google Play</span>
</div>
</button>
</div>
<p className="mt-4 text-xs text-slate-400">
                Requiere iOS 14+ o Android 10+.
            </p>
</div>

<div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 to-red-100/40 rounded-full blur-3xl -z-10"></div>

<div className="relative w-full max-w-[500px] z-10 lg:-translate-x-12">
<div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">

<div className="bg-slate-100 border-b border-gray-200 px-4 py-2 flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
</div>
<div className="bg-white rounded px-2 py-0.5 text-[10px] text-slate-400 flex-1 text-center mx-4">
                            panel.agendacentral.com
                        </div>
</div>

<div className="flex h-[280px]">

<div className="w-16 bg-[#001E42] flex flex-col items-center py-4 gap-4">
<div className="w-8 h-8 rounded bg-[#EE3124] flex items-center justify-center text-white mb-2 font-bold text-xs">AC</div>
<div className="w-6 h-6 rounded bg-white/10"></div>
<div className="w-6 h-6 rounded bg-white/10"></div>
<div className="w-6 h-6 rounded bg-white/10"></div>
</div>

<div className="flex-1 p-4 bg-slate-50">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold text-slate-700 text-sm">Calendario Semanal</h3>
<button className="bg-[#005BC5] text-white text-[10px] px-2 py-1 rounded">Nueva Cita</button>
</div>

<div className="grid grid-cols-4 gap-2 h-full">
<div className="space-y-2">
<div className="text-[10px] text-slate-400 text-center border-b pb-1">Lun 24</div>
<div className="bg-white p-2 rounded border border-gray-100 shadow-sm border-l-2 border-l-[#005BC5]">
<div className="h-1.5 w-12 bg-slate-200 rounded mb-1"></div>
<div className="h-1 w-8 bg-slate-100 rounded"></div>
</div>
<div className="bg-white p-2 rounded border border-gray-100 shadow-sm border-l-2 border-l-[#EE3124]">
<div className="h-1.5 w-10 bg-slate-200 rounded mb-1"></div>
<div className="h-1 w-6 bg-slate-100 rounded"></div>
</div>
</div>
<div className="space-y-2">
<div className="text-[10px] text-slate-400 text-center border-b pb-1">Mar 25</div>
<div className="bg-white p-2 rounded border border-gray-100 shadow-sm border-l-2 border-l-green-500 mt-8">
<div className="h-1.5 w-14 bg-slate-200 rounded mb-1"></div>
<div className="h-1 w-10 bg-slate-100 rounded"></div>
</div>
</div>
<div className="space-y-2">
<div className="text-[10px] text-slate-400 text-center border-b pb-1">Mié 26</div>
<div className="bg-white p-2 rounded border border-gray-100 shadow-sm border-l-2 border-l-[#005BC5]">
<div className="h-1.5 w-12 bg-slate-200 rounded mb-1"></div>
</div>
</div>
<div className="space-y-2">
<div className="text-[10px] text-slate-400 text-center border-b pb-1">Jue 27</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 right-0 lg:-right-4 w-[180px] h-[360px] bg-white rounded-[2rem] border-[6px] border-slate-800 shadow-2xl z-20 overflow-hidden hidden sm:block">

<div className="bg-[#005BC5] h-12 flex items-center justify-between px-3 pt-4">
<svg aria-hidden="true" className="lucide lucide-menu w-4 h-4 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<span className="text-white text-[10px] font-medium">Agenda</span>
<svg aria-hidden="true" className="lucide lucide-bell w-4 h-4 text-white" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>

<div className="p-3 bg-slate-50 h-full">
<div className="text-[10px] font-bold text-slate-700 mb-2">Próximas Citas</div>
<div className="space-y-2">
<div className="bg-white p-2 rounded shadow-sm border-l-2 border-l-[#005BC5] flex gap-2">
<div className="flex-1">
<div className="h-1.5 w-16 bg-slate-200 rounded mb-1"></div>
<div className="h-1 w-10 bg-slate-100 rounded"></div>
</div>
<div className="text-[8px] text-slate-400">10:00</div>
</div>
<div className="bg-white p-2 rounded shadow-sm border-l-2 border-l-[#EE3124] flex gap-2">
<div className="flex-1">
<div className="h-1.5 w-14 bg-slate-200 rounded mb-1"></div>
<div className="h-1 w-8 bg-slate-100 rounded"></div>
</div>
<div className="text-[8px] text-slate-400">11:30</div>
</div>
<div className="bg-white p-2 rounded shadow-sm border-l-2 border-l-green-500 flex gap-2">
<div className="flex-1">
<div className="h-1.5 w-16 bg-slate-200 rounded mb-1"></div>
<div className="h-1 w-12 bg-slate-100 rounded"></div>
</div>
<div className="text-[8px] text-slate-400">14:00</div>
</div>
</div>

<div className="absolute bottom-6 right-3 w-8 h-8 bg-[#EE3124] rounded-full flex items-center justify-center shadow-lg">
<svg aria-hidden="true" className="lucide lucide-plus w-4 h-4 text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-slate-50 border-y border-gray-200 py-6">
</div>

<section className="py-20 bg-white border-t border-gray-200 relative overflow-hidden" id="landing-offer">

<div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 opacity-60"></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="text-center max-w-4xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 bg-[#EE3124]/10 border border-[#EE3124]/20 rounded-full px-4 py-1.5 mb-6">
<iconify-icon className="text-[#EE3124] text-lg" icon="solar:danger-circle-linear"></iconify-icon>
<span className="text-[#EE3124] text-xs font-semibold tracking-wide uppercase">⚠️ Oferta limitada: solo 100 páginas disponibles</span>
</div>
<h2 className="text-[#005BC5] text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                    Tu página web profesional desde <span className="text-[#EE3124] underline decoration-[#EE3124]/30 decoration-4 underline-offset-4">$99 MXN</span> al mes
                </h2>
<p className="text-lg text-slate-600 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
                    Aprovecha esta oportunidad limitada para aparecer en Google y tener presencia web con una landing profesional creada con inteligencia artificial.
                </p>

<div className="max-w-md mx-auto mb-10 bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-bold text-[#EE3124] uppercase">Solo 100 páginas disponibles</span>
<span className="text-xs font-medium text-slate-500">Quedan 18 de 100</span>
</div>
<div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
<div className="bg-[#EE3124] h-3 rounded-full" style={{width: '82%'}}></div>
</div>
<p className="text-[10px] text-slate-400 mt-2 text-left leading-tight">
                        Este no es un servicio ilimitado. Para garantizar calidad y soporte, solo liberaremos 100 páginas web. Una vez agotadas, la oferta se cerrará.
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-[#EE3124] hover:bg-red-700 text-white text-lg font-semibold py-3 px-8 rounded-full transition-colors shadow-lg shadow-red-200 flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
                        Quiero asegurar mi página
                    </button>
<button className="hover:bg-blue-50 flex items-center justify-center gap-2 transition-colors font-medium text-[#005BC5] border-blue-200 border rounded-full py-3 px-8">
<iconify-icon className="text-xl" icon="solar:chat-round-dots-linear"></iconify-icon>
                        Hablar por WhatsApp
                    </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-gray-100 pb-16">
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#005BC5]">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-800 text-sm">Creada con IA</h4>
<p className="text-xs text-slate-500">Diseño profesional y optimizado al instante.</p>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#005BC5]">
<iconify-icon className="text-2xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-800 text-sm">Presencia en Google</h4>
<p className="text-xs text-slate-500">Ideal para que tus clientes te encuentren fácil.</p>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#005BC5]">
<iconify-icon className="text-2xl" icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-800 text-sm">100% Móvil</h4>
<p className="text-xs text-slate-500">Se ve perfecta en cualquier celular.</p>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#005BC5]">
<iconify-icon className="text-2xl" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-800 text-sm">Hosting Incluido</h4>
<p className="text-xs text-slate-500">Sin complicaciones técnicas ni costos extra.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mr-auto mb-16 ml-auto gap-x-8 gap-y-8">

<div className="hover:shadow-lg transition-shadow overflow-hidden group bg-white border-gray-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="absolute top-0 left-0 w-full h-1 bg-[#005BC5]"></div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Presencia web</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-4xl font-bold tracking-tight text-[#005BC5]">$99</span>
<span className="text-sm font-medium text-slate-500">MXN / mes</span>
</div>
<div className="inline-block bg-red-50 text-[#EE3124] text-[10px] font-bold px-2 py-0.5 rounded mb-6 uppercase">
                        Disponibilidad limitada
                    </div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#005BC5] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Página web tipo landing</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#005BC5] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Subdominio incluido <span className="text-xs text-slate-400 block">(tunegocio.agendacentral.app)</span></span>
</li>
</ul>
<div className="text-[10px] text-slate-400 mb-4 bg-slate-50 p-2 rounded text-center">
                        No incluye dominio propio.
                    </div>
<button className="w-full bg-[#005BC5] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                        Apartar mi página por $99
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

</div>

<div className="bg-slate-50 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto border border-gray-100">
<iconify-icon className="text-4xl text-[#005BC5] mb-4" icon="solar:magnifer-linear"></iconify-icon>
<h3 className="text-2xl font-semibold text-slate-800 mb-4">Si no estás en Google, no existes</h3>
<p className="text-slate-600 leading-relaxed mb-8">
                    Hoy tus clientes buscan en Google antes de llamar o escribir por WhatsApp. Con una landing page profesional puedes mostrar quién eres, qué ofreces y cómo contactarte, las 24 horas del día.
                </p>
<div className="flex flex-col items-center gap-2">
<h4 className="text-xl font-semibold text-[#EE3124]">No te quedes fuera</h4>
<p className="text-sm text-slate-500 mb-4">Asegura hoy tu página web profesional antes de que se agoten.</p>
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
<button className="bg-[#EE3124] hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2">
                            Asegurar mi página ahora
                        </button>
<button className="bg-white border border-gray-300 hover:bg-gray-50 text-slate-700 font-semibold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2">
                            Hablar por WhatsApp
                        </button>
</div>
</div>
</div>
<p className="text-[10px] text-slate-400 text-center mt-8 max-w-2xl mx-auto">
                El plan de $99 MXN utiliza subdominio de AgendaCentral. El plan de $900 MXN incluye dominio propio (.com o .mx sujeto a disponibilidad). Oferta limitada a 100 páginas. Una vez agotadas, no habrá nuevas altas.
            </p>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-center text-[#4A4A4A] text-3xl sm:text-4xl font-light mb-16">
          AgendaCentral está contigo
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition-shadow">
<div className="w-40 h-40 flex-shrink-0 relative">
<div className="w-full h-full rounded-full bg-slate-200 overflow-hidden relative">
<img alt="Profesional" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=300&amp;h=300"/>
</div>
<div className="absolute bottom-0 right-0 bg-[#005BC5] p-2 rounded-full border-4 border-white">
<svg aria-hidden="true" className="lucide lucide-briefcase w-5 h-5 text-white" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
</div>
<div className="text-center md:text-left">
<h3 className="text-[#005BC5] text-2xl font-bold mb-3">
                Profesional Independiente
              </h3>
<p className="text-slate-600 mb-4 leading-relaxed text-sm">
                Administra tus citas, reduce inasistencias y automatiza tu
                comunicación sin aprender software complejo. Ideal para
                doctores, consultores y terapeutas.
              </p>
<a className="text-[#005BC5] font-semibold text-sm hover:underline flex items-center justify-center md:justify-start gap-1" href="#">
                Conoce más
                <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition-shadow">
<div className="w-40 h-40 flex-shrink-0 relative">
<div className="w-full h-full rounded-full bg-slate-200 overflow-hidden relative">
<img alt="Empresa" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=300&amp;h=300"/>
</div>
<div className="absolute bottom-0 right-0 bg-[#005BC5] p-2 rounded-full border-4 border-white">
<svg aria-hidden="true" className="lucide lucide-building-2 w-5 h-5 text-white" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
</div>
<div className="text-center md:text-left">
<h3 className="text-[#005BC5] text-2xl font-bold mb-3">
                Clínicas y Empresas
              </h3>
<p className="leading-relaxed text-sm text-slate-600 mb-4">Conecta agendas, automatiza confirmaciones y administra tu flujo de clientes desde una sola plataforma centralizada y segura.</p>
<a className="text-[#005BC5] font-semibold text-sm hover:underline flex items-center justify-center md:justify-start gap-1" href="#">
                Conoce más
                <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 text-center">
<h2 className="text-3xl sm:text-4xl font-light text-[#005BC5] mb-12">
          Más servicios para tu
          <span className="font-bold">Negocio</span>
</h2>
<div className="flex flex-wrap justify-center gap-12 md:gap-20">
<div className="flex flex-col items-center gap-4 group cursor-pointer">
<div className="w-16 h-16 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:border-[#005BC5] transition-colors">
<svg aria-hidden="true" className="lucide lucide-phone-call w-8 h-8 text-[#005BC5] stroke-1" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<span className="text-slate-600 text-sm group-hover:text-[#005BC5]">
              Número Premium
            </span>
</div>
<div className="flex flex-col items-center gap-4 group cursor-pointer">
<div className="w-16 h-16 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:border-[#005BC5] transition-colors">
<svg aria-hidden="true" className="lucide lucide-bot w-8 h-8 text-[#22c55e] stroke-1" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<span className="text-slate-600 text-sm group-hover:text-[#005BC5]">
              Bots IA
            </span>
</div>
<div className="flex flex-col items-center gap-4 group cursor-pointer">
<div className="w-16 h-16 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:border-[#005BC5] transition-colors">
<svg aria-hidden="true" className="lucide lucide-calendar-days w-8 h-8 text-[#EE3124] stroke-1" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
</div>
<span className="text-slate-600 text-sm group-hover:text-[#005BC5]">
              Agenda Digital
            </span>
</div>
<div className="flex flex-col items-center gap-4 group cursor-pointer">
<div className="w-16 h-16 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:border-[#005BC5] transition-colors">
<svg aria-hidden="true" className="lucide lucide-plug-zap w-8 h-8 text-[#005BC5] stroke-1" data-lucide="plug-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path><path d="m2 22 3-3"></path><path d="M7.5 13.5 10 11"></path><path d="M10.5 16.5 13 14"></path><path d="m18 3-4 4h6l-4 4"></path></svg>
</div>
<span className="text-slate-600 text-sm group-hover:text-[#005BC5]">
              Integraciones
            </span>
</div>
<div className="flex flex-col items-center gap-4 group cursor-pointer">
<div className="w-16 h-16 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:border-[#005BC5] transition-colors">
<svg aria-hidden="true" className="lucide lucide-smartphone w-8 h-8 text-[#005BC5] stroke-1" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<span className="text-slate-600 text-sm group-hover:text-[#005BC5]">
              App Móvil
            </span>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-slate-600 text-lg mb-8">
            Atrae nuevos clientes, obtén mayor productividad e incrementa tus
            ventas.
          </p>
<a className="bg-[#005BC5] hover:bg-blue-700 text-white font-semibold py-3 px-12 rounded-full transition-colors inline-block" href="#planes">
            Ver planes
          </a>
</div>
</div>
</section>

<section className="bg-[#001E42] text-white py-16">
<div className="max-w-7xl mx-auto px-4 text-center">
<h2 className="text-2xl sm:text-3xl font-light mb-12">
          ¡Juntos encontraremos la solución a tus dudas!
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b border-white/10 pb-12">
<div className="flex flex-col items-center gap-4">
<svg aria-hidden="true" className="lucide lucide-search w-10 h-10 text-[#0099FF]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<h3 className="text-lg font-medium">Centro de Ayuda</h3>
<p className="text-sm text-slate-300 max-w-xs">
              Descubre consejos y guías prácticas diseñadas para ti.
            </p>
</div>
<div className="flex flex-col items-center gap-4 border-l-0 md:border-l border-white/10">
<svg aria-hidden="true" className="lucide lucide-book-open w-10 h-10 text-[#0099FF]" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<h3 className="text-lg font-medium">Guías y manuales</h3>
<p className="text-sm text-slate-300 max-w-xs">
              Encuentra manuales, guías, artículos y preguntas frecuentes.
            </p>
</div>
<div className="flex flex-col items-center gap-4 border-l-0 md:border-l border-white/10">
<svg aria-hidden="true" className="lucide lucide-headphones w-10 h-10 text-[#0099FF]" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
<h3 className="text-lg font-medium">Contáctanos</h3>
<p className="text-sm text-slate-300 max-w-xs">
              Nuestros asesores están capacitados para atender tus dudas.
            </p>
</div>
</div>
<p className="text-lg font-light text-[#0099FF] tracking-wide">Miles de negocios confían en AgendaCentral para gestionar su tiempo.</p>
</div>
</section>

<footer className="bg-[#F4F6F9] text-slate-600 pt-12 pb-8 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">

<div className="bg-white p-6 border border-blue-200 rounded-lg flex items-start gap-4 col-span-1 lg:col-span-1">
<svg aria-hidden="true" className="lucide lucide-message-square-quote w-10 h-10 text-[#0099FF] flex-shrink-0" data-lucide="message-square-quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 14a2 2 0 0 0 2-2V8h-2"></path><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path><path d="M8 14a2 2 0 0 0 2-2V8H8"></path></svg>
<div>
<h4 className="text-[#005BC5] font-bold text-sm mb-1">
                Blog AgendaCentral
              </h4>
<p className="text-xs text-slate-500">
                Tips de productividad y gestión de negocios.
              </p>
</div>
</div>

<div className="bg-white p-6 border border-gray-200 rounded-lg col-span-1 lg:col-span-3">
<h4 className="text-[#005BC5] font-bold text-sm mb-2">Newsletter</h4>
<p className="text-xs text-slate-500 mb-4">
              Suscríbete para recibir noticias y actualizaciones.
            </p>
<form className="flex gap-2">
<input className="flex-1 bg-slate-50 border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-[#005BC5]" placeholder="Ingresa tu correo electrónico." type="email"/>
<button className="bg-[#005BC5] text-white px-6 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition-colors" type="button">
                Suscribir
              </button>
</form>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs mb-12">
<div>
<h5 className="font-bold text-slate-800 mb-4">Servicios</h5>
<ul className="space-y-2">
<li><a className="hover:text-[#005BC5]" href="#">Planes</a></li>
<li><a className="hover:text-[#005BC5]" href="#">Negocio</a></li>
</ul>
</div>
<div>
<h5 className="font-bold text-slate-800 mb-4">Ayuda</h5>
<ul className="space-y-2">
<li>
<a className="hover:text-[#005BC5]" href="#">Soporte Técnico</a>
</li>
<li>
<a className="hover:text-[#005BC5]" href="#">
                  Preguntas Frecuentes
                </a>
</li>
</ul>
</div>
<div>
<h5 className="font-bold text-slate-800 mb-4">Legal</h5>
<ul className="space-y-2">
<li>
<a className="hover:text-[#005BC5]" href="#">Aviso de Privacidad</a>
</li>
<li>
<a className="hover:text-[#005BC5]" href="#">
                  Términos y Condiciones
                </a>
</li>
</ul>
</div>
<div>
<h5 className="font-bold text-slate-800 mb-4">Nosotros</h5>
<ul className="space-y-2">
<li>
<a className="hover:text-[#005BC5]" href="#">
                  Acerca de AgendaCentral
                </a>
</li>
<li>
<a className="hover:text-[#005BC5]" href="#">Bolsa de Trabajo</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-slate-700">
              ¡Descarga la App!
            </span>
<button className="bg-black text-white px-3 py-1.5 rounded-md flex items-center gap-2 text-xs hover:bg-slate-800 transition-colors">
<svg aria-hidden="true" className="lucide lucide-play w-4 h-4 fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              Google Play
            </button>
<button className="bg-black text-white px-3 py-1.5 rounded-md flex items-center gap-2 text-xs hover:bg-slate-800 transition-colors">
<svg aria-hidden="true" className="lucide lucide-apple w-4 h-4 fill-white" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
              App Store
            </button>
</div>
<div className="flex items-center gap-4">
<span className="text-sm text-slate-500">Síguenos:</span>
<div className="flex gap-2">
<a className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-[#005BC5] hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-[#005BC5] hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-[#005BC5] hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-[#005BC5] hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
<div className="mt-8 text-[10px] text-slate-400 text-center leading-relaxed max-w-4xl mx-auto">
          Estimado Cliente: Consulte nuestros términos de servicio en el sitio
          agendacentral.com. Las tecnologías y servicios disponibles pueden variar
          según su ubicación.
          <br/>
          © 2025 AgendaCentral. Todos los derechos reservados.
        </div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50">
<button className="bg-[#005BC5] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-message-circle w-8 h-8" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</button>
</div>


    </>
  );
}
