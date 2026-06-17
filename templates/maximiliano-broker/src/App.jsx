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



        // Initialize Icons
        lucide.createIcons();

        // --- 5-Click Secret Login Logic ---
        let logoClicks = 0;
        const logoTrigger = document.getElementById('secret-logo-trigger');
        const publicView = document.getElementById('public-view');
        const adminView = document.getElementById('admin-view');

        logoTrigger.addEventListener('click', () => {
            logoClicks++;
            if (logoClicks === 5) {
                // Transition effect
                publicView.style.opacity = '0';
                setTimeout(() => {
                    publicView.classList.add('hidden');
                    adminView.classList.remove('hidden');
                    // Reset opacity for potential future toggles (though admin is visible now)
                    publicView.style.opacity = '1';
                }, 500);
            }
        });

        // --- Leaflet Map Logic (Public) ---
        let mapInitialized = false;
        function toggleMap() {
            const btnText = document.getElementById('map-btn-text');
            // Logic to scroll to map or expand logic would go here
            // Initializing map for demo purposes
            if (!mapInitialized) {
                const mapContainer = document.getElementById('map');
                mapContainer.innerHTML = ''; // Clear placeholder
                
                // Centered on a generic location in Mexico City for demo
                var map = L.map('map').setView([19.4326, -99.1332], 13);
                
                L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                    subdomains: 'abcd',
                    maxZoom: 20
                }).addTo(map);

                // Mock Pins
                const locations = [
                    {lat: 19.4326, lng: -99.1332, title: "Proyecto Centro"},
                    {lat: 19.4426, lng: -99.1432, title: "Lotes Norte"},
                    {lat: 19.4226, lng: -99.1232, title: "Residencial Sur"}
                ];

                locations.forEach(loc => {
                    L.marker([loc.lat, loc.lng]).addTo(map)
                        .bindPopup(`<b style="font-family: Inter">${loc.title}</b><br>Disponible`)
                        .openPopup();
                });

                mapInitialized = true;
                btnText.textContent = "Mapa Activo";
            }
        }

        // --- Lead Form Handler (Mock) ---
        function handleLeadSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalContent = btn.innerHTML;
            
            btn.innerHTML = 'Enviando...';
            btn.classList.add('opacity-75');
            
            setTimeout(() => {
                btn.innerHTML = '¡Descarga Desbloqueada!';
                btn.classList.remove('bg-stone-900');
                btn.classList.add('bg-emerald-600');
                
                // Simulate download
                const link = document.createElement('a');
                link.href = '#'; // Would be real PDF link
                link.download = 'Reporte_Inmobiliario_2024.pdf';
                link.click();
            }, 1500);
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
      



<div className="w-full relative" id="public-view">

<header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex gap-3 cursor-pointer select-none group gap-x-3 gap-y-3 items-center" id="secret-logo-trigger">
<img alt="MG Logo" className="group-hover:opacity-100 transition-opacity opacity-100 w-20 h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6545a3e6-d3a4-4a28-9457-7a67dff17c52_320w.png"/>
<div className="">
<p className="text-sm font-semibold uppercase tracking-widest text-stone-900">Maximiliano</p>
<p className="text-[10px] uppercase text-[#C5A059] tracking-[0.2em]" style={{}}>BROKER</p>
</div>
</div>
<nav className="hidden md:flex text-sm font-medium text-stone-600 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#C5A059] transition-colors" href="#properties">Propiedades</a>
<a className="hover:text-[#C5A059] transition-colors" href="#about">Broker</a>
<a className="hover:text-[#C5A059] transition-colors" href="#ebook" style={{}}>Ebook</a>
<a className="hover:bg-[#122b25] transition-colors text-white bg-[#C5A059] rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#contact">Agendar Cita</a>
</nav>
</div>
</header>

<section className="min-h-screen flex flex-col overflow-hidden bg-stone-50 pt-32 pr-6 pb-20 pl-6 relative items-center justify-center">
<div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 z-10">
<span className="inline-block uppercase text-xs font-medium text-[#C5A059] tracking-wider border-[#C5A059] border rounded-full pt-1 pr-3 pb-1 pl-3">Luxury Living</span>
<h1 className="lg:text-7xl leading-[1.1] text-5xl text-stone-900 font-serif">
                        Arquitectura que <br/> <span className="italic text-stone-500">define</span> tu legado.
                    </h1>
<p className="text-xl text-stone-500 max-w-lg font-light leading-relaxed">
                        Curaduría exclusiva de propiedades en las ubicaciones más codiciadas. Lujo, privacidad y plusvalía asegurada.
                    </p>
<div className="flex gap-4 gap-x-4 gap-y-4">
<button className="shadow-[#C5A059]/20 hover:bg-[#b08d4b] transition-all text-sm font-medium text-white bg-[#C5A059] rounded-lg pt-4 pr-8 pb-4 pl-8 shadow-xl">
                            Ver Catálogo
                        </button>
</div>
</div>

<div className="relative h-[600px] w-full hidden lg:block">

<div className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-100">
<video autoplay="" className="w-full h-full object-cover opacity-90" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1600596542815-27bf909527a9?auto=format&amp;fit=crop&amp;q=80">

<source src="" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
</div>

<div className="absolute top-10 -left-10 w-48 bg-white p-3 rounded-xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500">
<img className="w-full h-32 object-cover rounded-lg mb-3" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&amp;fit=crop&amp;q=80"/>
<p className="text-xs font-semibold text-stone-900">Residencia Las Lomas</p>
</div>

<div className="absolute bottom-20 -right-8 w-56 bg-white p-3 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
<img className="w-full h-40 object-cover rounded-lg mb-3" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;q=80"/>
<div className="flex justify-between items-center">
<div className="">
<p className="text-xs font-semibold text-stone-900">Penthouse Polanco</p>
</div>
<div className="h-6 w-6 rounded-full bg-[#1A3C34] flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-3 h-3 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="properties">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div className="">
<h2 className="text-3xl font-serif text-stone-900 mb-2">Ubicaciones Privilegiadas</h2>
<p className="text-stone-500">Explora nuestras propiedades en el mapa interactivo.</p>
</div>
<button className="flex items-center gap-2 text-[#C5A059] font-medium hover:text-[#b08d4b] transition-colors" onclick="toggleMap()">
<svg aria-hidden="true" className="lucide lucide-map w-5 h-5" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<span className="" id="map-btn-text">Ver en Mapa</span>
</button>
</div>

<div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-sm border border-stone-200 relative z-0" id="map-container">
<div className="flex bg-stone-100 w-full h-full items-center justify-center" id="map">
<p className="text-stone-400 animate-pulse">Cargando Mapa Interactivo...</p>
</div>
</div>
</div>
</section>

<section className="text-white bg-gray-50 py-24" id="about">
<div className="grid lg:grid-cols-2 gap-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">
<div className="order-2 lg:order-1 relative">
<img alt="Maximiliano Gonzales" className="aspect-[4/5] object-top hover:grayscale-0 transition-all duration-700 w-full object-cover relative shadow-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/><div className="-inset-4 transform bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7bbc1d91-9b50-4605-81cd-8e17ea4f8ffb_1600w.png)] bg-cover border-[#C5A059]/30 border-0 rounded-none absolute translate-x-4 translate-y-4"></div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<h2 className="lg:text-5xl text-4xl font-serif" style={{}}>Más que un Broker, <br/><span className="text-[#C5A059]">su aliado estratégico.</span></h2>
<div className="space-y-6 text-lg text-stone-300 font-light leading-relaxed">
<p className="">Con más de una década redefiniendo el mercado inmobiliario de lujo, mi enfoque combina análisis de datos precisos con un gusto impecable por la arquitectura.</p>
<p className="">
                            No vendemos metros cuadrados; gestionamos patrimonios y curamos estilos de vida.
                        </p>
</div>
</div>
</div>
</section>

<section className="bg-[#1A3C34] pt-24 pb-24" id="ebook">
<div className="overflow-hidden bg-orange-100 max-w-5xl border-stone-100 border rounded-3xl mr-auto ml-auto pr-6 pl-6 shadow-xl">
<div className="grid md:grid-cols-2">
<div className="relative h-96 md:h-auto bg-stone-200">
<img alt="Luxury Real Estate Report 2024" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="flex flex-col bg-center bg-emerald-700 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c80fbc15-287e-4375-afb1-d76e1b6ea343_1600w.png)] bg-cover pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
</div>
</div>
<div className="flex flex-col pt-10 pr-10 pb-10 pl-10 justify-center">
<h3 className="text-2xl font-serif text-stone-900 mb-2">Descarga el Reporte Exclusivo</h3>
<p className="text-stone-500 mb-8 text-sm">Obtén acceso a datos de plusvalía, zonas emergentes y proyecciones fiscales.</p>
<form className="space-y-4" id="lead-form" onsubmit="handleLeadSubmit(event)">
<div className="">
<label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1.5">Nombre Completo</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-[#C5A059] focus:ring-0 outline-none transition-colors text-sm" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1.5">Email Corporativo</label>
<input className="focus:border-[#C5A059] focus:ring-0 outline-none transition-colors text-sm bg-stone-50 w-full border-stone-200 border rounded-lg pt-3 pr-4 pb-3 pl-4" required="" type="email"/>
</div>
<div className="">
<label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1.5">Teléfono</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-[#C5A059] focus:ring-0 outline-none transition-colors text-sm" required="" type="tel"/>
</div>
<button className="w-full py-4 bg-stone-900 text-white font-medium rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2 group" type="submit">
<span className="group-hover:-translate-y-0.5 transition-transform">Desbloquear Descarga</span>
<svg aria-hidden="true" className="lucide lucide-lock w-4 h-4 group-hover:hidden" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<svg aria-hidden="true" className="lucide lucide-unlock w-4 h-4 hidden group-hover:block" data-lucide="unlock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-serif text-stone-900 mb-12">Agenda una Sesión Privada</h2>

<div className="border border-stone-200 rounded-xl p-8 h-[600px] flex items-center justify-center bg-stone-50">
<div className="text-center space-y-4">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
<svg aria-hidden="true" className="lucide lucide-calendar w-8 h-8 text-stone-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<p className="text-stone-500">Widget de Calendly cargando...</p>
</div>
</div>
</div>
</section>
<footer className="text-sm text-stone-400 text-center bg-white border-stone-100 border-t pt-12 pb-12">
<p className="">© 2024 Maximiliano Gonzales Real Estate. Todos los derechos reservados.</p>
</footer>
</div>



<div className="hidden flex h-screen bg-[#FAFAFA] text-[#111827] font-sans overflow-hidden fade-in" id="admin-view">

<aside className="w-72 bg-white border-r border-[#E5E7EB] flex flex-col justify-between flex-shrink-0">
<div>

<div className="h-24 flex flex-col items-center justify-center border-b border-transparent mt-4">
<div className="w-12 h-12 bg-[#0F172A] flex items-center justify-center rounded-sm mb-3">
<img alt="Logo" className="w-8 h-auto invert opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h2 className="text-lg font-serif font-semibold text-center leading-tight">Maximiliano <br/> Gonzales</h2>
<p className="text-[10px] tracking-[0.2em] text-[#C5A059] uppercase mt-1 font-medium">Boutique Real Estate</p>
</div>

<nav className="px-4 py-8 space-y-1">
<a className="flex items-center gap-3 px-4 py-2.5 bg-[#FFF9F0] text-[#B48E43] rounded-lg text-sm font-medium transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                        Dashboard
                    </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-stone-500 hover:bg-stone-50 hover:text-stone-900 rounded-lg text-sm font-medium transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                        Leads
                    </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-stone-500 hover:bg-stone-50 hover:text-stone-900 rounded-lg text-sm font-medium transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-map w-5 h-5" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
                        Inventory
                    </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-stone-500 hover:bg-stone-50 hover:text-stone-900 rounded-lg text-sm font-medium transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
                        Analytics
                    </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-stone-500 hover:bg-stone-50 hover:text-stone-900 rounded-lg text-sm font-medium transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        Settings
                    </a>
</nav>
</div>

<div className="p-4 border-t border-[#E5E7EB]">
<div className="flex items-center gap-3 px-2">
<img className="w-9 h-9 rounded-full object-cover border border-stone-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-stone-900 truncate">M. Gonzales</p>
<p className="text-xs text-stone-500 truncate">Principal Agent</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto">
<div className="px-10 py-8 max-w-[1600px] mx-auto">

<div className="flex items-end justify-between mb-10">
<div>
<h1 className="text-3xl font-serif font-medium text-[#111827] mb-1 tracking-tight">Admin Overview</h1>
<p className="text-stone-500 text-lg">Welcome back. Here is what is happening today.</p>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-stone-600 hover:bg-stone-50 transition-colors">
<svg aria-hidden="true" className="lucide lucide-moon w-5 h-5" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</button>
<button className="h-10 px-4 flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white text-stone-600 text-sm font-medium hover:bg-stone-50 transition-colors">
<svg aria-hidden="true" className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                            Export
                        </button>
<button className="h-10 px-5 flex items-center gap-2 rounded-lg bg-[#C5A059] text-white text-sm font-medium shadow-md shadow-[#C5A059]/20 hover:bg-[#b08d4b] transition-colors">
<svg aria-hidden="true" className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                            Add Lead
                        </button>
</div>
</div>

<div className="grid grid-cols-3 gap-6 mb-10">

<div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm relative overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-[#FFF9F0] flex items-center justify-center text-[#C5A059]">
<svg aria-hidden="true" className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12.5%</span>
</div>
<p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Conversion Rate</p>
<p className="text-3xl font-medium text-stone-900 tracking-tight">24.8%</p>
</div>

<div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600">
<svg aria-hidden="true" className="lucide lucide-calendar-check w-5 h-5" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+4 today</span>
</div>
<p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Appointments</p>
<p className="text-3xl font-medium text-stone-900 tracking-tight">156</p>
</div>

<div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
<svg aria-hidden="true" className="lucide lucide-tag w-5 h-5" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<span className="text-xs font-medium text-stone-400">Active</span>
</div>
<p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Total Inventory</p>
<p className="text-3xl font-medium text-stone-900 tracking-tight">42 Lots</p>
</div>
</div>

<div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm mb-8 overflow-hidden">
<div className="px-8 py-6 border-b border-[#E5E7EB] flex items-center justify-between bg-white">
<h3 className="text-xl font-serif font-medium text-stone-900">Recent Leads</h3>
<div className="relative">
<svg aria-hidden="true" className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="pl-9 pr-4 py-2 w-64 text-sm bg-stone-50 border border-transparent rounded-lg focus:bg-white focus:border-[#C5A059] focus:ring-0 outline-none transition-all placeholder:text-stone-400" placeholder="Search leads..." type="text"/>
</div>
</div>
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-stone-100">
<th className="px-8 py-4 text-[10px] font-semibold text-stone-400 uppercase tracking-wider">Name</th>
<th className="px-8 py-4 text-[10px] font-semibold text-stone-400 uppercase tracking-wider">Phone</th>
<th className="px-8 py-4 text-[10px] font-semibold text-stone-400 uppercase tracking-wider">Email</th>
<th className="px-8 py-4 text-[10px] font-semibold text-stone-400 uppercase tracking-wider">Status</th>
<th className="px-8 py-4 text-[10px] font-semibold text-stone-400 uppercase tracking-wider">Date Added</th>
<th className="px-8 py-4 text-[10px] font-semibold text-stone-400 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-50 text-sm">

<tr className="hover:bg-stone-50/50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#FFF9F0] text-[#C5A059] flex items-center justify-center text-xs font-bold">JR</div>
<div>
<p className="font-medium text-stone-900">Julian Ramirez</p>
</div>
</div>
</td>
<td className="px-8 py-5 text-stone-500 font-mono text-xs">+52 55 1234 5678</td>
<td className="px-8 py-5 text-stone-500">j.ramirez@example.com</td>
<td className="px-8 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                                        Closed
                                    </span>
</td>
<td className="px-8 py-5 text-stone-500">Oct 24, 2023</td>
<td className="px-8 py-5 text-right">
<button className="text-stone-400 hover:text-stone-600"><svg aria-hidden="true" className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</td>
</tr>

<tr className="hover:bg-stone-50/50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">AM</div>
<div>
<p className="font-medium text-stone-900">Andrea Morales</p>
</div>
</div>
</td>
<td className="px-8 py-5 text-stone-500 font-mono text-xs">+52 81 9876 5432</td>
<td className="px-8 py-5 text-stone-500">andrea.m@webmail.com</td>
<td className="px-8 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                        Appointment Set
                                    </span>
</td>
<td className="px-8 py-5 text-stone-500">Oct 26, 2023</td>
<td className="px-8 py-5 text-right">
<button className="text-stone-400 hover:text-stone-600"><svg aria-hidden="true" className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</td>
</tr>

<tr className="hover:bg-stone-50/50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center text-xs font-bold">SV</div>
<div>
<p className="font-medium text-stone-900">Santiago Valdes</p>
</div>
</div>
</td>
<td className="px-8 py-5 text-stone-500 font-mono text-xs">+52 33 5555 4444</td>
<td className="px-8 py-5 text-stone-500">svaldes@invest.mx</td>
<td className="px-8 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600">
                                        Contacted
                                    </span>
</td>
<td className="px-8 py-5 text-stone-500">Oct 27, 2023</td>
<td className="px-8 py-5 text-right">
<button className="text-stone-400 hover:text-stone-600"><svg aria-hidden="true" className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</td>
</tr>

<tr className="hover:bg-stone-50/50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center text-xs font-bold">LG</div>
<div>
<p className="font-medium text-stone-900">Lucia Garcia</p>
</div>
</div>
</td>
<td className="px-8 py-5 text-stone-500 font-mono text-xs">+52 55 2222 3333</td>
<td className="px-8 py-5 text-stone-500">garcia.lucia@domain.com</td>
<td className="px-8 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                        Appointment Set
                                    </span>
</td>
<td className="px-8 py-5 text-stone-500">Oct 28, 2023</td>
<td className="px-8 py-5 text-right">
<button className="text-stone-400 hover:text-stone-600"><svg aria-hidden="true" className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</td>
</tr>
</tbody>
</table>
<div className="px-8 py-4 border-t border-stone-100 flex items-center justify-between">
<p className="text-xs text-stone-400">Showing 1 to 4 of 124 leads</p>
<div className="flex gap-2">
<button className="px-3 py-1 text-xs font-medium text-stone-500 hover:bg-stone-50 border border-stone-200 rounded-md">Previous</button>
<button className="px-3 py-1 text-xs font-medium text-white bg-[#C5A059] border border-[#C5A059] rounded-md">1</button>
<button className="px-3 py-1 text-xs font-medium text-stone-500 hover:bg-stone-50 border border-stone-200 rounded-md">2</button>
<button className="px-3 py-1 text-xs font-medium text-stone-500 hover:bg-stone-50 border border-stone-200 rounded-md">Next</button>
</div>
</div>
</div>

<div className="grid grid-cols-5 gap-8">

<div className="col-span-3 bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-sm">
<h3 className="text-lg font-serif font-medium text-stone-900 mb-8">Monthly Appointments</h3>
<div className="h-48 flex items-end justify-between gap-4 px-2">

<div className="w-full flex flex-col items-center gap-3">
<div className="w-full bg-stone-50 rounded-t-sm h-[40%] hover:bg-stone-100 transition-colors"></div>
<span className="text-[10px] text-stone-400 uppercase">Jun</span>
</div>

<div className="w-full flex flex-col items-center gap-3">
<div className="w-full bg-stone-50 rounded-t-sm h-[65%] hover:bg-stone-100 transition-colors"></div>
<span className="text-[10px] text-stone-400 uppercase">Jul</span>
</div>

<div className="w-full flex flex-col items-center gap-3">
<div className="w-full bg-stone-50 rounded-t-sm h-[55%] hover:bg-stone-100 transition-colors"></div>
<span className="text-[10px] text-stone-400 uppercase">Aug</span>
</div>

<div className="w-full flex flex-col items-center gap-3">
<div className="w-full bg-[#D4AF37] rounded-t-sm h-[90%] shadow-lg shadow-[#C5A059]/20 relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">156</div>
</div>
<span className="text-[10px] text-stone-600 font-bold uppercase">Sep</span>
</div>

<div className="w-full flex flex-col items-center gap-3">
<div className="w-full bg-stone-50 rounded-t-sm h-[75%] hover:bg-stone-100 transition-colors"></div>
<span className="text-[10px] text-stone-400 uppercase">Oct</span>
</div>

<div className="w-full flex flex-col items-center gap-3">
<div className="w-full bg-stone-50 rounded-t-sm h-[80%] hover:bg-stone-100 transition-colors"></div>
<span className="text-[10px] text-stone-400 uppercase">Nov</span>
</div>
</div>
</div>

<div className="col-span-2 bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-sm flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-serif font-medium text-stone-900">Featured Catalog</h3>
<a className="text-xs font-medium text-[#C5A059] hover:text-[#b08d4b]" href="#">View All</a>
</div>
<div className="flex-1 space-y-6">

<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center text-[#B48E43]">
<svg aria-hidden="true" className="lucide lucide-mountain w-6 h-6" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-stone-900 group-hover:text-[#C5A059] transition-colors">Tierra Linda - Sector A</p>
<p className="text-xs text-stone-400">12 Lots Remaining • Premium</p>
</div>
<p className="text-sm font-medium text-stone-900">$1.2M MXN</p>
</div>

<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center text-[#B48E43]">
<svg aria-hidden="true" className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-stone-900 group-hover:text-[#C5A059] transition-colors">Residencial Los Olivos</p>
<p className="text-xs text-stone-400">8 Lots Remaining • Exclusive</p>
</div>
<p className="text-sm font-medium text-stone-900">$2.5M MXN</p>
</div>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
