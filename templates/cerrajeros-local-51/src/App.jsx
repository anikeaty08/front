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



        // Data for Neighborhoods
        const cityData = {
            centro: {
                title: "Centro / Gran Vía",
                subtitle: "Alta Disponibilidad",
                time: "10-15 Minutos",
                unit: "Moto (Rápida)"
            },
            monte: {
                title: "Monte del Pilar",
                subtitle: "Zona Residencial",
                time: "15-20 Minutos",
                unit: "Furgoneta Taller"
            },
            carralero: {
                title: "El Carralero",
                subtitle: "Área Comercial",
                time: "12 Minutos",
                unit: "Unidad Móvil 2"
            },
            golf: {
                title: "El Golf / La Florida",
                subtitle: "Acceso Seguridad",
                time: "20-25 Minutos",
                unit: "Unidad Móvil 3"
            },
            norte: {
                title: "Área Norte",
                subtitle: "Nuevos Desarrollos",
                time: "18 Minutos",
                unit: "Furgoneta Taller"
            }
        };

        // Zone Modal Logic
        function showZone(city) {
            const data = cityData[city];
            if(!data) return;

            document.getElementById('zone-tag').innerText = "COBERTURA";
            document.getElementById('zone-title').innerText = data.title;
            document.getElementById('zone-subtitle').innerText = data.subtitle;
            document.getElementById('zone-time').innerText = data.time;
            document.getElementById('zone-unit').innerText = data.unit;

            document.getElementById('zone-modal').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('zone-modal').classList.remove('opacity-0', 'scale-95');
            }, 10);
        }

        function closeZone() {
            document.getElementById('zone-modal').classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
                document.getElementById('zone-modal').classList.add('hidden');
            }, 300);
        }

        // Security Comparison Toggle Logic
        const comparisonData = {
            vulnerable: {
                bumping: { label: "Vulnerable", text: "Cilindros estándar de serreta o puntos básicos. Se abren en 30 segundos con una llave bump sin dejar rastro." },
                snap: { label: "Riesgo Alto", text: "El cilindro sobresale. Con una llave inglesa y fuerza bruta, parten el bombín y entran en menos de 1 minuto." },
                copy: { label: "Copia Libre", text: "Cualquiera a quien prestes tu llave (limpieza, obras) puede hacer un duplicado sin que lo sepas en cualquier ferretería." },
                drill: { label: "Sin Protección", text: "Materiales blandos (latón). Un taladro doméstico perfora los pines en segundos permitiendo el giro." }
            },
            secure: {
                bumping: { label: "Protección Total", text: "Instalamos cilindros que bloquean ataques por percusión. Es el método de robo más común en Majadahonda." },
                snap: { label: "Núcleo de Acero", text: "Si intentan partir el bombín con herramientas pesadas, el núcleo reforzado resiste y bloquea la puerta." },
                copy: { label: "Tarjeta de Propiedad", text: "Nadie puede copiar tu llave en una ferretería sin presentar tu tarjeta de seguridad personal." },
                drill: { label: "Pines de Acero", text: "El primer pin de acero templado rompe la broca del ladrón antes de que pueda dañar el mecanismo." }
            }
        };

        function setMode(mode) {
            const data = comparisonData[mode];
            const btnVuln = document.getElementById('btn-vuln');
            const btnSec = document.getElementById('btn-sec');
            
            if (mode === 'vulnerable') {
                btnVuln.className = "px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all bg-red-500 text-white shadow-md";
                btnSec.className = "px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all text-zinc-400 hover:text-zinc-600";
                
                // Styles for Danger
                document.querySelectorAll('#comparison-grid .w-10').forEach(el => {
                    el.classList.remove('bg-zinc-50', 'text-zinc-900');
                    el.classList.add('bg-red-50', 'text-red-500');
                });
                document.querySelectorAll('#comparison-grid p.font-bold').forEach(el => {
                    el.classList.remove('text-blue-600');
                    el.classList.add('text-red-500');
                });

            } else {
                btnSec.className = "px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all bg-zinc-900 text-white shadow-md";
                btnVuln.className = "px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all text-zinc-400 hover:text-zinc-600";

                 // Styles for Safety
                 document.querySelectorAll('#comparison-grid .w-10').forEach(el => {
                    el.classList.add('bg-zinc-50', 'text-zinc-900');
                    el.classList.remove('bg-red-50', 'text-red-500');
                });
                document.querySelectorAll('#comparison-grid p.font-bold').forEach(el => {
                    el.classList.add('text-blue-600');
                    el.classList.remove('text-red-500');
                });
            }

            // Update Content with Fade Effect
            updateCard('card-bumping', data.bumping, mode);
            updateCard('card-snap', data.snap, mode);
            updateCard('card-copy', data.copy, mode);
            updateCard('card-drill', data.drill, mode);
        }

        function updateCard(id, data, mode) {
            const container = document.getElementById(id);
            const colorClass = mode === 'vulnerable' ? 'text-red-500' : 'text-blue-600';
            
            container.style.opacity = '0';
            setTimeout(() => {
                container.innerHTML = `
                    <p class="text-[10px] font-bold ${colorClass} uppercase tracking-wide mb-1.5">${data.label}</p>
                    <p class="text-xs text-zinc-500 leading-relaxed">${data.text}</p>
                `;
                container.style.opacity = '1';
            }, 200);
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
      

<div className="bg-white border-b border-zinc-200 text-zinc-600 overflow-hidden py-2.5 relative z-50">
<div className="marquee-container group">
<div className="marquee-content text-xs font-medium tracking-wide">
<span className="flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:clock-circle-linear" width="16"></iconify-icon> Llegamos en 20 minutos a cualquier punto de Majadahonda</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:shield-check-linear" width="16"></iconify-icon> Precios cerrados sin sorpresas de última hora</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:lock-keyhole-linear" width="16"></iconify-icon> Aperturas sin rotura (Técnica limpia)</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:card-linear" width="16"></iconify-icon> Aceptamos tarjeta en domicilio</span>

<span className="flex items-center gap-2 ml-12"><iconify-icon className="text-blue-600" icon="solar:clock-circle-linear" width="16"></iconify-icon> Llegamos en 20 minutos a cualquier punto de Majadahonda</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:shield-check-linear" width="16"></iconify-icon> Precios cerrados sin sorpresas de última hora</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:lock-keyhole-linear" width="16"></iconify-icon> Aperturas sin rotura (Técnica limpia)</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:card-linear" width="16"></iconify-icon> Aceptamos tarjeta en domicilio</span>
</div>
<div aria-hidden="true" className="marquee-content text-xs font-medium tracking-wide">
<span className="flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:clock-circle-linear" width="16"></iconify-icon> Llegamos en 20 minutos a cualquier punto de Majadahonda</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:shield-check-linear" width="16"></iconify-icon> Precios cerrados sin sorpresas de última hora</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:lock-keyhole-linear" width="16"></iconify-icon> Aperturas sin rotura (Técnica limpia)</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:card-linear" width="16"></iconify-icon> Aceptamos tarjeta en domicilio</span>
<span className="flex items-center gap-2 ml-12"><iconify-icon className="text-blue-600" icon="solar:clock-circle-linear" width="16"></iconify-icon> Llegamos en 20 minutos a cualquier punto de Majadahonda</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:shield-check-linear" width="16"></iconify-icon> Precios cerrados sin sorpresas de última hora</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:lock-keyhole-linear" width="16"></iconify-icon> Aperturas sin rotura (Técnica limpia)</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:card-linear" width="16"></iconify-icon> Aceptamos tarjeta en domicilio</span>
</div>
</div>
</div>

<nav className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-zinc-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2.5 group" href="#">
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-lg shadow-zinc-200">
<iconify-icon icon="solar:key-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-zinc-900">Majadahonda<span className="text-zinc-400 font-normal">Key</span></span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#filosofia">Filosofía</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#zonas">Zonas de Servicio</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#proceso">Proceso</a>
</div>
<button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2.5 px-5 rounded-full transition-all shadow-md shadow-blue-600/20 flex items-center gap-2 group">
<iconify-icon className="group-hover:animate-pulse" icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span>600 123 456</span>
</button>
</div>
</nav>

<header className="relative pt-8 md:pt-16 pb-24 overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

<div className="w-full lg:w-1/2 relative order-1 lg:order-2">
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] shadow-2xl shadow-zinc-200 border border-white/50">

<img alt="Cerrajero Profesional Majadahonda" className="w-full h-full object-cover grayscale-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 to-transparent"></div>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 max-w-[200px]">
<div className="flex items-center gap-3 mb-1.5">
<div className="w-7 h-7 bg-green-50 rounded-full flex items-center justify-center text-green-600 border border-green-100">
<iconify-icon icon="solar:stopwatch-linear" width="14"></iconify-icon>
</div>
<span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wide">Tiempo Respuesta</span>
</div>
<div className="text-xl font-semibold text-zinc-900 tracking-tight">~20 Minutos</div>
<div className="text-[10px] text-zinc-400 mt-1">Llegamos antes de que te agobies.</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative z-10 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-semibold tracking-widest uppercase mb-8 border border-zinc-200">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                        Servicio Urgente 24H
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl text-zinc-900 mb-6 leading-[1.05] font-medium tracking-tight">
                        No vendemos cerraduras, <span className="text-zinc-400">vendemos calma.</span>
</h1>
<h2 className="text-xl md:text-2xl text-zinc-500 mb-8 leading-relaxed font-light">
                        ¿Te has quedado fuera en Majadahonda? Sin dramas. Sin facturas infladas. Solo un profesional abriendo tu puerta limpiamente.
                    </h2>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-zinc-900 hover:bg-zinc-800 text-white py-3.5 px-8 rounded-full text-sm font-medium shadow-lg shadow-zinc-900/20 flex items-center justify-center gap-2 transition-all">
                            Solicitar Asistencia
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 py-3.5 px-8 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-all">
                            Ver Tarifas
                        </button>
</div>
<div className="mt-12 flex items-center gap-6 text-zinc-400 text-xs">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-900" icon="solar:verified-check-linear"></iconify-icon>
<span>Licencia Oficial</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-900" icon="solar:bill-check-linear"></iconify-icon>
<span>Factura Legal</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-900" icon="solar:home-smile-linear"></iconify-icon>
<span>Local</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white border-y border-zinc-100" id="filosofia">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-blue-600 font-semibold tracking-widest text-[10px] uppercase mb-3 block">Transparencia Radical</span>
<h2 className="text-3xl md:text-4xl text-zinc-900 font-medium tracking-tight">Nosotros vs. "La Pegatina"</h2>
<p className="text-zinc-500 mt-4 max-w-lg mx-auto text-sm">Hay dos tipos de cerrajeros en Madrid: los que quieren solucionar tu problema y los que quieren aprovecharse de él.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">

<div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 opacity-70 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:danger-triangle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-500">El "Chapuzas" Oportunista</h3>
</div>
<ul className="space-y-5">
<li className="flex gap-4 items-start text-zinc-400">
<iconify-icon className="mt-0.5 flex-shrink-0 text-red-300" icon="solar:close-circle-linear" width="18"></iconify-icon>
<p className="text-sm">"Desde 50€"... que se convierten en 400€ al final.</p>
</li>
<li className="flex gap-4 items-start text-zinc-400">
<iconify-icon className="mt-0.5 flex-shrink-0 text-red-300" icon="solar:close-circle-linear" width="18"></iconify-icon>
<p className="text-sm">Te rompe la puerta para venderte una cerradura nueva.</p>
</li>
<li className="flex gap-4 items-start text-zinc-400">
<iconify-icon className="mt-0.5 flex-shrink-0 text-red-300" icon="solar:close-circle-linear" width="18"></iconify-icon>
<p className="text-sm">Sin factura, sin garantía, sin reclamación posible.</p>
</li>
</ul>
</div>

<div className="bg-zinc-900 p-8 rounded-3xl shadow-xl shadow-zinc-200 text-white relative overflow-hidden transform md:-translate-y-4">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="flex items-center gap-4 mb-8 relative z-10">
<div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-900/50">
<iconify-icon icon="solar:medal-star-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white">Cerrajeros Majadahonda</h3>
</div>
<ul className="space-y-5 relative z-10">
<li className="flex gap-4 items-start">
<iconify-icon className="mt-0.5 text-blue-400 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
<p className="text-sm font-light text-zinc-300">Precio cerrado por teléfono. Lo que te decimos, cobramos.</p>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="mt-0.5 text-blue-400 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
<p className="text-sm font-light text-zinc-300">Apertura técnica no destructiva (98% de los casos).</p>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="mt-0.5 text-blue-400 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
<p className="text-sm font-light text-zinc-300">Garantía por escrito y pago seguro con TPV.</p>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="zonas">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12 text-center">
<span className="text-blue-600 font-semibold tracking-widest text-[10px] uppercase mb-3 block">Cobertura Local</span>
<h2 className="text-3xl text-zinc-900 font-medium tracking-tight">Zonas de Intervención</h2>
<p className="text-zinc-500 mt-3 text-sm font-light">Conocemos cada calle de Majadahonda. Haz clic para ver tiempos estimados.</p>
</div>

<div className="relative w-full max-w-5xl mx-auto bg-white rounded-3xl p-3 shadow-sm border border-zinc-200 overflow-hidden">
<div className="relative w-full aspect-[16/9] bg-zinc-100 rounded-2xl overflow-hidden group">

<img alt="Mapa Majadahonda" className="w-full h-full object-cover grayscale contrast-125 opacity-40 mix-blend-multiply pointer-events-none" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>


<div className="map-hotspot" onclick="showZone('centro')" style={{top: '45%', left: '45%', width: '12%', height: '20%'}}>
<span className="hotspot-label">Centro / Gran Vía</span>
</div>

<div className="map-hotspot" onclick="showZone('monte')" style={{top: '65%', left: '30%', width: '15%', height: '20%'}}>
<span className="hotspot-label">Monte del Pilar</span>
</div>

<div className="map-hotspot" onclick="showZone('carralero')" style={{top: '30%', left: '20%', width: '14%', height: '18%'}}>
<span className="hotspot-label">El Carralero</span>
</div>

<div className="map-hotspot" onclick="showZone('golf')" style={{top: '25%', left: '65%', width: '18%', height: '25%'}}>
<span className="hotspot-label">El Golf / La Florida</span>
</div>

<div className="map-hotspot" onclick="showZone('norte')" style={{top: '15%', left: '40%', width: '12%', height: '15%'}}>
<span className="hotspot-label">Área Norte</span>
</div>
</div>

<div className="hidden absolute inset-0 bg-white/90 backdrop-blur-md z-20 flex flex-col justify-center items-center p-8 text-center transition-all duration-300" id="zone-modal">
<button className="absolute top-6 right-6 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-200 text-zinc-500 transition-colors" onclick="closeZone()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
<div className="max-w-md w-full" id="modal-content">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-4" id="zone-tag">
                            Zona
                        </div>
<h3 className="text-2xl font-medium text-zinc-900 mb-1" id="zone-title">Selecciona Zona</h3>
<p className="text-zinc-500 text-sm mb-6" id="zone-subtitle">Detalles de servicio</p>
<div className="grid grid-cols-2 gap-4 text-left">
<div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
<h4 className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Llegada
                                </h4>
<p className="text-sm text-zinc-800 font-medium" id="zone-time">...</p>
</div>
<div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
<h4 className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
<iconify-icon icon="solar:scooter-linear"></iconify-icon> Unidad
                                </h4>
<p className="text-sm text-zinc-800 font-medium" id="zone-unit">...</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 border-t border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col items-center mb-16">
<span className="text-blue-600 font-semibold tracking-widest text-[10px] uppercase mb-3">Tu Seguridad</span>
<h2 className="text-3xl text-zinc-900 font-medium mb-8 text-center tracking-tight">¿Estás realmente protegido?</h2>

<div className="relative bg-zinc-100 rounded-full p-1.5 shadow-inner inline-flex items-center">
<button className="px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all text-zinc-400 hover:text-zinc-600" id="btn-vuln" onclick="setMode('vulnerable')">Lo Estándar</button>
<button className="px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all bg-zinc-900 text-white shadow-sm" id="btn-sec" onclick="setMode('secure')">Nuestra Norma</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="comparison-grid">

<div className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow duration-300">
<div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-900 mb-5 border border-zinc-200">
<iconify-icon icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-3">Anti-Bumping</h3>
<div id="card-bumping">
<p className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-1.5">Protección Total</p>
<p className="text-xs text-zinc-500 leading-relaxed">Instalamos cilindros que bloquean ataques por percusión. Es el método de robo más común en Majadahonda.</p>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow duration-300">
<div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-900 mb-5 border border-zinc-200">
<iconify-icon icon="solar:hammer-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-3">Anti-Rotura</h3>
<div id="card-snap">
<p className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-1.5">Núcleo de Acero</p>
<p className="text-xs text-zinc-500 leading-relaxed">Si intentan partir el bombín con herramientas pesadas, el núcleo reforzado resiste y bloquea la puerta.</p>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow duration-300">
<div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-900 mb-5 border border-zinc-200">
<iconify-icon icon="solar:key-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-3">Control de Copia</h3>
<div id="card-copy">
<p className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-1.5">Tarjeta de Propiedad</p>
<p className="text-xs text-zinc-500 leading-relaxed">Nadie puede copiar tu llave en una ferretería sin presentar tu tarjeta de seguridad personal.</p>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow duration-300">
<div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-900 mb-5 border border-zinc-200">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-3">Anti-Taladro</h3>
<div id="card-drill">
<p className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-1.5">Pines de Acero</p>
<p className="text-xs text-zinc-500 leading-relaxed">El primer pin de acero templado rompe la broca del ladrón antes de que pueda dañar el mecanismo.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200" id="proceso">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl text-zinc-900 font-medium text-center mb-16 tracking-tight">El Proceso de Apertura</h2>
<div className="relative">

<div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-200 md:left-1/2"></div>

<div className="relative flex flex-col md:flex-row items-center gap-8 mb-12 group">
<div className="md:w-1/2 md:text-right order-2 md:order-1 pl-16 md:pl-0">
<h3 className="text-lg font-semibold text-zinc-900 mb-1">Llamada y Diagnóstico</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Nos cuentas qué ha pasado. Te damos un tiempo estimado de llegada real y una horquilla de precio.</p>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center z-10 shadow-sm group-hover:border-blue-500 transition-colors text-zinc-600">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
</div>
<div className="md:w-1/2 order-3 md:order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 mb-12 group">
<div className="md:w-1/2 order-2 md:order-1"></div>
<div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center z-10 shadow-sm group-hover:border-blue-500 transition-colors text-zinc-600">
<iconify-icon icon="solar:clipboard-check-linear" width="18"></iconify-icon>
</div>
<div className="md:w-1/2 pl-16 md:pl-0 order-3 md:order-3">
<h3 className="text-lg font-semibold text-zinc-900 mb-1">Presupuesto Cerrado</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Al llegar, el técnico evalúa la puerta y te da el precio EXACTO antes de tocar nada. Si no aceptas, no pagas nada.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 mb-12 group">
<div className="md:w-1/2 md:text-right order-2 md:order-1 pl-16 md:pl-0">
<h3 className="text-lg font-semibold text-zinc-900 mb-1">Apertura Limpia</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Utilizamos ganzúas eléctricas y herramientas de bypass. Nuestro objetivo es siempre salvar tu cerradura actual.</p>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center z-10 shadow-sm group-hover:border-blue-500 transition-colors text-zinc-600">
<iconify-icon icon="solar:lock-unlocked-linear" width="18"></iconify-icon>
</div>
<div className="md:w-1/2 order-3 md:order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 group">
<div className="md:w-1/2 order-2 md:order-1"></div>
<div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
</div>
<div className="md:w-1/2 pl-16 md:pl-0 order-3 md:order-3">
<h3 className="text-lg font-semibold text-zinc-900 mb-1">Tranquilidad Restaurada</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Entras en casa. Pagas con tarjeta cómodamente y recibes tu factura con garantía de 6 meses en mano de obra.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-900 text-zinc-400 py-16 border-t border-zinc-800">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2.5 mb-4">
<div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-white border border-zinc-700">
<iconify-icon icon="solar:key-minimalistic-linear" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white">MajadahondaKey</span>
</div>
<p className="text-zinc-500 text-xs max-w-xs">Servicios de cerrajería profesional en Majadahonda y zona noroeste. Disponible 24/7 para urgencias.</p>
</div>
<div className="flex gap-4">
<a className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all" href="#">
<iconify-icon icon="brandico:whatsapp" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-800 text-center text-[10px] text-zinc-600">
            © 2024 Cerrajeros Majadahonda. Todos los derechos reservados.
        </div>
</footer>

<a className="fixed bottom-6 right-6 z-50 group" href="#">
<div className="absolute bottom-16 right-0 bg-white p-3 rounded-xl shadow-xl shadow-zinc-900/10 w-48 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto border border-zinc-100">
<p className="text-xs text-zinc-600 font-medium">¿Urgencia? Envíame ubicación y voy para allá.</p>
<div className="absolute bottom-[-5px] right-6 w-2.5 h-2.5 bg-white rotate-45 border-b border-r border-zinc-100"></div>
</div>
<div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
<iconify-icon icon="brandico:whatsapp" width="20"></iconify-icon>
<div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
</div>
</a>


    </>
  );
}
