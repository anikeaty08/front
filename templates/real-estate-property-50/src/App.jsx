import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function showDetail() {
            document.getElementById('home-view').classList.add('hidden');
            const detailView = document.getElementById('detail-view');
            detailView.classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        function showHome() {
            document.getElementById('detail-view').classList.add('hidden');
            const homeView = document.getElementById('home-view');
            homeView.classList.remove('hidden');
            window.scrollTo(0, 0);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group" onclick="showHome()">
<div className="h-8 w-8 bg-rose-500 rounded-lg flex items-center justify-center text-white group-hover:bg-rose-600 transition-colors shadow-sm shadow-rose-200">
<iconify-icon icon="solar:city-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-black transition-colors">miespacio.mx</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Comprar</a>
<a className="hover:text-slate-900 transition-colors" href="#">Rentar</a>
<a className="hover:text-slate-900 transition-colors" href="#">Desarrollos</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
                    Iniciar Sesión
                </button>
<button className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-sm ring-1 ring-slate-900/10">
                    Publicar propiedad
                </button>
</div>
</div>
</nav>

<main className="flex-grow">

<div className="fade-in" id="home-view">

<div className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center border-b border-slate-100">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
                    Encuentra el espacio <br className="hidden md:block"/>donde quieres estar.
                </h1>

<div className="max-w-3xl mx-auto relative z-10">
<div className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200 flex flex-col md:flex-row gap-2">
<div className="flex-1 flex items-center px-4 py-2 bg-slate-50 rounded-xl border border-transparent focus-within:bg-white focus-within:border-slate-300 transition-all">
<iconify-icon className="text-slate-400 mr-3" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="bg-transparent w-full text-sm outline-none placeholder:text-slate-400 text-slate-900" placeholder="Ubicación, colonia o ciudad..." type="text"/>
</div>
<div className="flex gap-2">
<select className="px-4 py-3 bg-slate-50 rounded-xl text-sm font-medium text-slate-700 outline-none hover:bg-slate-100 border border-transparent focus:border-slate-300 transition-all cursor-pointer appearance-none">
<option>Comprar</option>
<option>Rentar</option>
</select>
<button className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-medium transition-all shadow-lg shadow-rose-500/20 flex items-center gap-2">
                                Buscar
                            </button>
</div>
</div>

<div className="flex items-center justify-center gap-3 mt-6 text-sm overflow-x-auto hide-scrollbar">
<button className="px-4 py-1.5 rounded-full bg-slate-900 text-white font-medium whitespace-nowrap">Casas</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-slate-300 whitespace-nowrap transition-all">Departamentos</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-slate-300 whitespace-nowrap transition-all">Oficinas</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-slate-300 whitespace-nowrap transition-all">Terrenos</button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Propiedades destacadas en CDMX</h2>
<a className="text-sm font-medium text-rose-600 hover:text-rose-700 flex items-center gap-1" href="#">
                        Ver todas
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer flex flex-col h-full" onclick="showDetail()">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-rose-600 flex items-center gap-1 shadow-sm">
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
                                Destacada
                            </div>
<div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur px-2.5 py-1 rounded-lg text-xs font-medium text-white flex items-center gap-1">
<iconify-icon icon="solar:gallery-linear" width="12"></iconify-icon>
                                24
                            </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-semibold text-slate-900 text-lg leading-tight group-hover:text-rose-600 transition-colors">Residencia Lujo Pedregal</h3>
<p className="text-slate-500 text-sm mt-1">Jardines del Pedregal, CDMX</p>
</div>
</div>
<div className="flex items-center gap-4 my-4 text-slate-600 text-sm">
<div className="flex items-center gap-1.5"><iconify-icon className="text-slate-400" icon="solar:bed-linear"></iconify-icon> 4</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-slate-400" icon="solar:bath-linear"></iconify-icon> 4.5</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-slate-400" icon="solar:ruler-angular-linear"></iconify-icon> 450 m²</div>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<div>
<span className="text-xs text-slate-400 block">Renta mensual</span>
<span className="text-lg font-bold text-slate-900">$85,000 MXN</span>
</div>
<button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-500 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer flex flex-col h-full opacity-70 hover:opacity-100">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-semibold text-slate-900 text-lg leading-tight">Departamento Moderno</h3>
<p className="text-slate-500 text-sm mt-1">Polanco IV Sección, CDMX</p>
</div>
</div>
<div className="flex items-center gap-4 my-4 text-slate-600 text-sm">
<div className="flex items-center gap-1.5"><iconify-icon className="text-slate-400" icon="solar:bed-linear"></iconify-icon> 2</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-slate-400" icon="solar:bath-linear"></iconify-icon> 2</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-slate-400" icon="solar:ruler-angular-linear"></iconify-icon> 120 m²</div>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<div>
<span className="text-xs text-slate-400 block">Renta mensual</span>
<span className="text-lg font-bold text-slate-900">$45,000 MXN</span>
</div>
<button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer flex flex-col h-full opacity-70 hover:opacity-100">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-semibold text-slate-900 text-lg leading-tight">Casa en Condominio</h3>
<p className="text-slate-500 text-sm mt-1">Santa Fe, Cuajimalpa</p>
</div>
</div>
<div className="flex items-center gap-4 my-4 text-slate-600 text-sm">
<div className="flex items-center gap-1.5"><iconify-icon className="text-slate-400" icon="solar:bed-linear"></iconify-icon> 3</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-slate-400" icon="solar:bath-linear"></iconify-icon> 3.5</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-slate-400" icon="solar:ruler-angular-linear"></iconify-icon> 280 m²</div>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<div>
<span className="text-xs text-slate-400 block">Renta mensual</span>
<span className="text-lg font-bold text-slate-900">$62,000 MXN</span>
</div>
<button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center">
<h3 className="text-lg font-semibold text-slate-900 mb-2">¿Eres propietario?</h3>
<p className="text-slate-500 text-sm max-w-lg mx-auto mb-4">Publica tu propiedad con nosotros y encuentra al inquilino ideal en tiempo récord con nuestra verificación de identidad.</p>
<button className="px-6 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm">
                        Publicar gratis
                    </button>
</div>
</div>
</div>

<div className="hidden fade-in max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-24" id="detail-view">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<nav className="flex items-center text-sm text-slate-500">
<button className="flex items-center gap-1 hover:text-rose-600 hover:bg-rose-50 px-2 py-1 -ml-2 rounded-lg transition-colors mr-2" onclick="showHome()">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
<span className="font-medium">Volver</span>
</button>
<span className="w-px h-4 bg-slate-200 mx-2"></span>
<a className="hover:text-slate-900 transition-colors hidden sm:block" href="#">CDMX</a>
<iconify-icon className="mx-2 text-slate-400 hidden sm:block" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<a className="hover:text-slate-900 transition-colors hidden sm:block" href="#">Álvaro Obregón</a>
<iconify-icon className="mx-2 text-slate-400 hidden sm:block" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="text-slate-900 font-medium truncate">Casa en Jardines del Pedregal</span>
</nav>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-600 text-sm font-medium transition-colors border border-transparent hover:border-slate-200">
<iconify-icon icon="solar:share-linear" width="18"></iconify-icon>
<span className="hidden sm:inline">Compartir</span>
</button>
<button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-rose-50 text-slate-600 hover:text-rose-600 text-sm font-medium transition-colors border border-transparent hover:border-rose-100 group">
<iconify-icon className="group-hover:hidden" icon="solar:heart-linear" width="18"></iconify-icon>
<iconify-icon className="hidden group-hover:block" icon="solar:heart-bold" width="18"></iconify-icon>
<span className="hidden sm:inline">Guardar</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3 rounded-2xl overflow-hidden mb-8 h-[400px] md:h-[500px] relative group cursor-pointer">

<div className="col-span-1 md:col-span-2 row-span-2 relative">
<img className="w-full h-full object-cover hover:brightness-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-rose-600 flex items-center gap-1 shadow-sm">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
                        Destacada
                    </div>
</div>

<div className="hidden md:block col-span-1 row-span-1">
<img className="w-full h-full object-cover hover:brightness-105 transition-all duration-300" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="hidden md:block col-span-1 row-span-1">
<img className="w-full h-full object-cover hover:brightness-105 transition-all duration-300" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="hidden md:block col-span-1 row-span-1">
<img className="w-full h-full object-cover hover:brightness-105 transition-all duration-300" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="hidden md:block col-span-1 row-span-1 relative">
<img className="w-full h-full object-cover hover:brightness-105 transition-all duration-300" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur hover:bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-medium shadow-lg flex items-center gap-2 transition-all">
<iconify-icon icon="solar:gallery-linear" width="18"></iconify-icon>
                        Ver 24 fotos
                    </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

<div className="lg:col-span-8 space-y-10">

<div className="border-b border-slate-100 pb-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-2">Residencia Lujo en Pedregal</h2>
<div className="flex items-center gap-2 text-slate-500 text-lg">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<span>Jardines del Pedregal, CDMX</span>
</div>
</div>
<div className="text-left sm:text-right">
<p className="text-3xl font-semibold text-slate-900 tracking-tight">$85,000</p>
<p className="text-slate-500 text-sm">MXN / Mensuales</p>
</div>
</div>

<div className="flex flex-wrap gap-4 sm:gap-8 mt-6">
<div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-slate-400" icon="solar:bed-linear" width="24"></iconify-icon>
<div>
<span className="block text-sm font-semibold text-slate-900">4</span>
<span className="block text-xs text-slate-500">Recámaras</span>
</div>
</div>
<div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-slate-400" icon="solar:bath-linear" width="24"></iconify-icon>
<div>
<span className="block text-sm font-semibold text-slate-900">4.5</span>
<span className="block text-xs text-slate-500">Baños</span>
</div>
</div>
<div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-slate-400" icon="solar:garage-linear" width="24"></iconify-icon>
<div>
<span className="block text-sm font-semibold text-slate-900">3</span>
<span className="block text-xs text-slate-500">Estacionamientos</span>
</div>
</div>
<div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-slate-400" icon="solar:ruler-angular-linear" width="24"></iconify-icon>
<div>
<span className="block text-sm font-semibold text-slate-900">450 m²</span>
<span className="block text-xs text-slate-500">Construcción</span>
</div>
</div>
</div>
</div>

<div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100 flex items-start gap-4">
<div className="bg-blue-100 p-2 rounded-full text-blue-600 shrink-0">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Propiedad Verificada</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                                Esta propiedad ha pasado por nuestro proceso de validación legal. La escritura, libertad de gravamen y la identidad del propietario han sido verificadas por miespacio.mx.
                            </p>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Acerca de la propiedad</h3>
<div className="prose prose-slate prose-lg text-slate-600 leading-relaxed">
<p>
                                Espectacular casa en una de las calles más tranquilas de Jardines del Pedregal. Proyecto arquitectónico moderno que aprovecha la luz natural en todos sus espacios. Cuenta con acabados de lujo: pisos de mármol, madera de ingeniería y cocina equipada con electrodomésticos premium.
                            </p>
<p>
                                El jardín privado de 120m² se integra perfectamente con la sala y el comedor a través de ventanales de piso a techo, creando un ambiente ideal para reuniones sociales. La recámara principal cuenta con un amplio vestidor y baño con tina de hidromasaje.
                            </p>
</div>
<button className="text-rose-600 font-medium text-sm flex items-center gap-1 hover:text-rose-700 transition-colors">
                            Leer descripción completa
                            <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>

<div className="border-t border-slate-100 pt-10">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-6">Lo que ofrece este lugar</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
<div className="flex items-center gap-3 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:chef-hat-linear" width="24"></iconify-icon>
<span>Cocina Integral Equipada</span>
</div>
<div className="flex items-center gap-3 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:lock-password-linear" width="24"></iconify-icon>
<span>Seguridad 24/7</span>
</div>
<div className="flex items-center gap-3 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:dumbbell-large-linear" width="24"></iconify-icon>
<span>Gimnasio privado</span>
</div>
<div className="flex items-center gap-3 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:cat-linear" width="24"></iconify-icon>
<span>Pet friendly</span>
</div>
<div className="flex items-center gap-3 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:wifi-linear" width="24"></iconify-icon>
<span>Fibra óptica instalada</span>
</div>
<div className="flex items-center gap-3 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:solar-power-linear" width="24"></iconify-icon>
<span>Paneles solares</span>
</div>
</div>
<button className="mt-6 px-6 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all">
                            Ver las 24 amenidades
                        </button>
</div>

<div className="border-t border-slate-100 pt-10">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Ubicación</h3>
<p className="text-slate-500 mb-6">Jardines del Pedregal, Álvaro Obregón, Ciudad de México</p>
<div className="w-full h-80 bg-slate-100 rounded-2xl overflow-hidden relative">

<div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-99.200,19.330,13,0/800x400?access_token=YOUR_TOKEN')] bg-cover bg-center opacity-80 grayscale-[30%]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-12 w-12 bg-rose-500/20 rounded-full flex items-center justify-center animate-pulse">
<div className="h-4 w-4 bg-rose-500 rounded-full shadow-lg border-2 border-white"></div>
</div>
</div>
<div className="absolute bottom-4 left-4">
<button className="bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium text-slate-700 hover:bg-slate-50">
                                    Ver en Google Maps
                                </button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 relative">
<div className="sticky top-24 space-y-6">

<div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6">
<div className="flex items-center gap-4 mb-6">
<div className="relative">
<img className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
<div className="absolute bottom-0 right-0 h-4 w-4 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 leading-tight">Andrea Gómez</h4>
<p className="text-sm text-slate-500 mb-1">Asesora Certificada</p>
<div className="flex items-center gap-1 text-xs font-medium bg-slate-100 w-fit px-2 py-0.5 rounded text-slate-600">
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
                                        4.9 (84)
                                    </div>
</div>
</div>

<div className="space-y-3 mb-6">
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all" placeholder="Tu nombre" type="text"/>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all" placeholder="Tu correo" type="email"/>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all" placeholder="Tu teléfono" type="tel"/>
<textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all resize-none" placeholder="Hola, me interesa esta propiedad..." rows="3"></textarea>
</div>
<button className="w-full py-3.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-medium shadow-lg shadow-rose-500/20 transition-all mb-3 flex items-center justify-center gap-2">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
                                Enviar mensaje
                            </button>
<div className="grid grid-cols-2 gap-3">
<button className="py-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-sm">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                                    Llamar
                                </button>
<button className="py-3 bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-sm">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
                                    WhatsApp
                                </button>
</div>
</div>

<div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
<div className="flex gap-3">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:info-circle-linear" width="20"></iconify-icon>
<p className="text-xs text-slate-500 leading-relaxed">
<span className="font-semibold text-slate-700">Consejo de seguridad:</span> Nunca transfieras dinero sin haber visitado la propiedad y firmado un contrato físico.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-slate-200 bg-slate-50/50 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-80">
<div className="h-6 w-6 bg-slate-300 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:city-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-700">miespacio.mx</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-900" href="#">Términos</a>
<a className="hover:text-slate-900" href="#">Privacidad</a>
<a className="hover:text-slate-900" href="#">Ayuda</a>
</div>
<p className="text-xs text-slate-400">© 2023 miespacio.mx</p>
</div>
</div>
</footer>



    </>
  );
}
