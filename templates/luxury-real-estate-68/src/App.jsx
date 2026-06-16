import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
colors: {
slate: {
850: '#151b2e',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200 transition-all duration-300 supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
<iconify-icon icon="solar:compass-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter uppercase text-slate-900">Oriente</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Comprar</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Arrendar</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Proyectos</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Tasación IA</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium border border-slate-200 rounded-full px-4 py-2 hover:bg-slate-50 transition-colors bg-white">
<span>Entrar</span>
</button>
<button className="bg-slate-900 text-white text-sm font-medium rounded-full px-5 py-2 hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-slate-900/20 transform hover:-translate-y-0.5 flex items-center gap-2">
<span>Publicar</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="md:hidden text-slate-900 p-2">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 px-6 overflow-hidden bg-slate-50/80 border-b border-slate-200">

<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
</div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="animate-fade-in-up space-y-8">
<div className="inline-flex gap-2 text-xs font-semibold text-slate-700 bg-white border-slate-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm gap-x-2 gap-y-2 items-center">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Mercado en tiempo real 2026
                </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.05] text-balance">
                    Vivir en el <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400">Sector Oriente.</span>
</h1>
<p className="text-lg text-slate-600 max-w-lg leading-relaxed font-normal">
                    Descubre propiedades exclusivas impulsadas por analítica geoespacial. Fusionamos el lujo inmobiliario con datos precisos para el inversor moderno.
                </p>

<div className="bg-white p-2 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-200/60 ring-4 ring-slate-100/50 max-w-xl transition-all hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:ring-slate-200/50">
<div className="grid grid-cols-[1fr,auto] gap-2">
<div className="relative flex items-center h-14 bg-slate-50 rounded-xl px-4 group focus-within:ring-2 focus-within:ring-slate-900/5 focus-within:bg-white transition-all border border-slate-100">
<iconify-icon className="text-slate-400 mr-3 transition-colors group-focus-within:text-slate-900" icon="solar:map-point-linear" strokeWidth="1.5" width="22"></iconify-icon>
<input className="bg-transparent border-none outline-none w-full text-base text-slate-900 placeholder:text-slate-400 h-full font-medium" placeholder="Buscar por comuna, calle o ID..." type="text"/>
</div>
<button className="h-14 w-14 bg-slate-900 rounded-xl flex items-center justify-center text-white hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="flex gap-4 mt-4 px-2 pb-2 overflow-x-auto no-scrollbar items-center">
<label className="flex items-center gap-2 cursor-pointer group select-none">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded-[6px] peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-colors flex items-center justify-center bg-white shadow-sm">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transform scale-75" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">Comprar</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group select-none">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded-[6px] peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-colors flex items-center justify-center bg-white shadow-sm">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transform scale-75" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">Arrendar</span>
</label>
<div className="h-4 w-px bg-slate-200 mx-1"></div>
<button className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 hover:text-slate-900 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 transition-all hover:bg-white hover:shadow-sm">
                            Precio
                            <iconify-icon icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</button>
<button className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 hover:text-slate-900 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 transition-all hover:bg-white hover:shadow-sm">
                            Dormitorios
                            <iconify-icon icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 group perspective-1000 border border-white/50 ring-1 ring-slate-200/50">
<img alt="Luxury Home" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/30 p-6 rounded-2xl text-white animate-float shadow-xl shadow-black/20">
<div className="flex justify-between items-end">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded bg-white text-slate-900 text-[10px] font-bold uppercase tracking-wider shadow-sm">Destacado</span>
<span className="flex items-center gap-1 text-[10px] text-white/90 uppercase tracking-wider font-semibold">
<iconify-icon icon="solar:map-point-linear" width="10"></iconify-icon> Vitacura
                                </span>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Residencia Lo Curro</h3>
<div className="flex items-center gap-3 mt-2 text-sm text-white/90 font-medium">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 5</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear"></iconify-icon> 6</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:ruler-linear"></iconify-icon> 850m²</span>
</div>
</div>
<div className="text-right">
<p className="text-2xl font-semibold tracking-tight">UF 45.000</p>
<button className="mt-2 w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-100 transition-colors ml-auto shadow-lg hover:scale-110 duration-200">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-b border-slate-100 bg-white py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex items-center gap-2 font-bold tracking-tight text-lg text-slate-900">
<iconify-icon icon="solar:buildings-2-linear" width="24"></iconify-icon> INMOBILIA
             </div>
<div className="flex items-center gap-2 font-bold tracking-tight text-lg text-slate-900">
<iconify-icon icon="solar:city-linear" width="24"></iconify-icon> URBANIST
             </div>
<div className="flex items-center gap-2 font-bold tracking-tight text-lg text-slate-900">
<iconify-icon icon="solar:home-wifi-linear" width="24"></iconify-icon> SMARTLIVING
             </div>
<div className="flex items-center gap-2 font-bold tracking-tight text-lg text-slate-900">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon> CAPITAL
             </div>
<div className="flex items-center gap-2 font-bold tracking-tight text-lg text-slate-900">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon> INDEX
             </div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50/50">
<div className="max-w-7xl mx-auto space-y-12">
<div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900">Portafolio Curado</h2>
<p className="text-slate-500 mt-2 font-normal text-lg">Propiedades seleccionadas bajo estrictos estándares de calidad.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-900 border border-slate-200 bg-white rounded-full px-5 py-2 hover:bg-slate-50 transition-all hover:shadow-md hover:border-slate-300" href="#">
                    Ver todo el listado
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[450px]">

<div className="md:col-span-2 group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
<img alt="Property" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute top-6 left-6 flex gap-2">
<span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase">Recién Llegado</span>
</div>
<div className="absolute bottom-8 left-8 right-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-3xl font-medium text-white tracking-tighter mb-2">Santa María de Manquehue</h3>
<p className="text-white/80 text-sm font-medium mb-6">Vitacura • Vistas Panorámicas • Jardín Privado</p>
<div className="flex items-center justify-between border-t border-white/20 pt-4">
<span className="text-2xl text-white font-semibold tracking-tight">UF 62.000</span>
<div className="flex gap-4 text-white/90 text-sm font-semibold">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:bed-linear"></iconify-icon> 5 Dorm</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:ruler-linear"></iconify-icon> 850m²</span>
</div>
</div>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden bg-white border border-slate-200 cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col hover:-translate-y-1">
<div className="h-[55%] overflow-hidden relative">
<img alt="Property" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 z-10">
<button className="w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-slate-900 hover:text-red-500 transition-colors shadow-sm">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-6 flex flex-col justify-between flex-1 bg-white relative z-10">
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-xl font-bold text-slate-900 tracking-tight">La Dehesa Golf</h3>
</div>
<p className="text-slate-500 text-sm font-medium">Lo Barnechea, Santiago</p>
</div>
<div className="space-y-5">
<div className="flex gap-4 text-xs text-slate-600 font-bold">
<span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-100"><iconify-icon icon="solar:bed-linear"></iconify-icon> 4</span>
<span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-100"><iconify-icon icon="solar:bath-linear"></iconify-icon> 3</span>
<span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-100"><iconify-icon icon="solar:ruler-linear"></iconify-icon> 240m²</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<span className="text-xl font-bold text-slate-900 tracking-tight">UF 28.500</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden bg-white border border-slate-200 cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col hover:-translate-y-1">
<div className="h-[55%] overflow-hidden relative">
<img alt="Property" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-slate-900/90 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-md">Vendido</span>
</div>
</div>
<div className="p-6 flex flex-col justify-between flex-1 bg-white relative z-10">
<div>
<h3 className="text-xl font-bold text-slate-900 tracking-tight">Penthouse El Golf</h3>
<p className="text-slate-500 text-sm mt-1 font-medium">Las Condes, Santiago</p>
</div>
<div className="space-y-5">
<div className="flex gap-4 text-xs text-slate-600 font-bold">
<span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-100"><iconify-icon icon="solar:bed-linear"></iconify-icon> 3</span>
<span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-100"><iconify-icon icon="solar:bath-linear"></iconify-icon> 3</span>
<span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-100"><iconify-icon icon="solar:ruler-linear"></iconify-icon> 180m²</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<span className="text-xl font-bold text-slate-900 tracking-tight">UF 32.000</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 md:col-start-2 group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
<img alt="Property" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&amp;w=2584&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute top-6 left-6">
<span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase">Exclusivo</span>
</div>
<div className="absolute bottom-8 left-8 right-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-3xl font-medium text-white tracking-tighter mb-2">San Carlos de Apoquindo</h3>
<p className="text-white/80 text-sm font-medium mb-6">Las Condes • Arquitectura Moderna • Domótica Integral</p>
<div className="flex items-center justify-between border-t border-white/20 pt-4">
<span className="text-2xl text-white font-semibold tracking-tight">UF 38.900</span>
<div className="flex gap-4 text-white/90 text-sm font-semibold">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:bed-linear"></iconify-icon> 6 Dorm</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:ruler-linear"></iconify-icon> 450m²</span>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center md:hidden">
<button className="px-6 py-3 border border-slate-200 bg-white rounded-full text-sm font-semibold hover:bg-slate-50 transition-colors w-full shadow-sm">Ver todas las propiedades</button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0B0F19] text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-emerald-400 mb-8 backdrop-blur-sm">
<iconify-icon icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
                    Motor de Inteligencia Oriente AI
                </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 leading-[1.1]">Decisiones de inversión <br/> respaldadas por datos.</h2>
<p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
                    Nuestra plataforma patentada de GEO-Inteligencia analiza más de 50 puntos de datos, incluyendo planes reguladores, patrones de tráfico y exposición solar para valorar propiedades con una precisión del 99.8%.
                </p>
<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div>
<div className="text-4xl font-semibold mb-2 text-white tracking-tight">98%</div>
<p className="text-sm text-slate-500 font-medium">Precisión en Tasación</p>
</div>
<div>
<div className="text-4xl font-semibold mb-2 text-white tracking-tight">2.4x</div>
<p className="text-sm text-slate-500 font-medium">Velocidad de Venta</p>
</div>
</div>
<div className="mt-12">
<button className="group bg-white text-slate-900 rounded-full px-7 py-3.5 text-sm font-bold hover:bg-slate-100 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Obtener Tasación Gratuita
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:chart-square-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="relative bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700 group">

<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
</div>
<div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">análisis_plusvalía_v2.0</div>
</div>
<div className="space-y-6">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Crecimiento Proyectado (2025-2028)</p>
<div className="flex items-baseline gap-2">
<p className="text-3xl font-semibold text-emerald-400 tracking-tight">+12.5%</p>
<span className="text-xs text-emerald-400/90 font-medium bg-emerald-400/10 px-1.5 py-0.5 rounded">Alta Confianza</span>
</div>
</div>
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:graph-new-linear" width="24"></iconify-icon>
</div>
</div>

<div className="h-40 w-full flex items-end justify-between px-2 gap-3">
<div className="w-full bg-slate-700/50 h-[30%] rounded-t-sm relative group-hover:h-[40%] transition-all duration-700 delay-75"></div>
<div className="w-full bg-slate-700/50 h-[50%] rounded-t-sm relative group-hover:h-[55%] transition-all duration-700 delay-100"></div>
<div className="w-full bg-slate-700/50 h-[45%] rounded-t-sm relative group-hover:h-[50%] transition-all duration-700 delay-150"></div>
<div className="w-full bg-slate-700/50 h-[60%] rounded-t-sm relative group-hover:h-[75%] transition-all duration-700 delay-200"></div>
<div className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 h-[80%] rounded-t-sm shadow-[0_0_20px_rgba(52,211,153,0.3)] relative group-hover:h-[90%] transition-all duration-700 delay-300">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-xs py-1 px-2 rounded border border-slate-700 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                Hoy
                            </div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-2">
<div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
<p className="text-[10px] text-slate-400 mb-2 uppercase tracking-wider font-bold">Índice Seguridad</p>
<div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-emerald-400 w-[96%] h-full rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
</div>
</div>
<div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
<p className="text-[10px] text-slate-400 mb-2 uppercase tracking-wider font-bold">Conectividad</p>
<div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-blue-400 w-[88%] h-full rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900">Por qué el sector oriente nos elige</h2>
<p className="text-slate-500 mt-4 text-lg font-light">Redefiniendo el estándar del corretaje de lujo a través de tecnología y servicio concierge personalizado.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-10 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 border border-slate-100 hover:border-slate-200 transition-all duration-500">
<div className="w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-8 text-slate-900 shadow-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Acceso Exclusivo</h3>
<p className="text-sm text-slate-500 leading-relaxed font-normal">
                        Accede a propiedades "off-market" y ventas privadas en La Dehesa y Vitacura antes de que lleguen a los portales públicos.
                    </p>
</div>

<div className="group p-10 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 border border-slate-100 hover:border-slate-200 transition-all duration-500">
<div className="w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-8 text-slate-900 shadow-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:camera-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Presentación Cinemática</h3>
<p className="text-sm text-slate-500 leading-relaxed font-normal">
                        Tours de drones 4K, recorridos Matterport 3D y fotografía arquitectónica que captura el alma de tu hogar.
                    </p>
</div>

<div className="group p-10 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 border border-slate-100 hover:border-slate-200 transition-all duration-500">
<div className="w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-8 text-slate-900 shadow-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Soporte Concierge</h3>
<p className="text-sm text-slate-500 leading-relaxed font-normal">
                        Desde trámites legales hasta referidos de diseño interior, nuestro equipo maneja la complejidad para que disfrutes la transición.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-6">Adelántate al mercado</h2>
<p className="text-slate-500 mb-10 text-lg font-light">Únete a más de 12,000 inversores que reciben nuestra curaduría semanal de las mejores propiedades de Santiago.</p>
<form className="flex flex-col md:flex-row gap-3 max-w-md mx-auto relative">
<input className="flex-1 bg-white border border-slate-200 rounded-xl px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all shadow-sm font-medium" placeholder="tu@email.com" required="" type="email"/>
<button className="bg-slate-900 text-white font-medium rounded-xl px-8 py-4 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 hover:-translate-y-0.5 active:translate-y-0" type="submit">
                    Suscribirse
                </button>
</form>
<p className="text-xs text-slate-400 mt-6 font-medium">Sin spam. Date de baja en cualquier momento.</p>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-7 h-7 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:compass-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tighter uppercase text-slate-900">Oriente</span>
</a>
<p className="text-slate-500 text-sm max-w-xs mb-8 font-normal leading-relaxed">
                    Elevando la experiencia inmobiliaria en Santiago a través del diseño, la tecnología y la integridad absoluta.
                </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 p-2 rounded-full hover:bg-slate-100 border border-slate-100" href="#"><iconify-icon icon="brandico:instagram-filled" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 p-2 rounded-full hover:bg-slate-100 border border-slate-100" href="#"><iconify-icon icon="brandico:linkedin-rect" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-6 text-sm tracking-tight">Descubrir</h4>
<ul className="space-y-4 text-sm text-slate-500 font-medium">
<li><a className="hover:text-slate-900 transition-colors" href="#">Venta</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Arriendo</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Nuevos Proyectos</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Oportunidades de Inversión</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-6 text-sm tracking-tight">Empresa</h4>
<ul className="space-y-4 text-sm text-slate-500 font-medium">
<li><a className="hover:text-slate-900 transition-colors" href="#">Nosotros</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Equipo</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Carreras</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-6 text-sm tracking-tight">Legal</h4>
<ul className="space-y-4 text-sm text-slate-500 font-medium">
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacidad</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Términos</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 font-medium">© 2024 Oriente Property SpA. Todos los derechos reservados.</p>
<div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs text-emerald-700 font-bold">Sistemas Operativos</span>
</div>
</div>
</footer>

    </>
  );
}
