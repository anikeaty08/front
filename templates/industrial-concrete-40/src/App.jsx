import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
blue: '#0F172A', // Slate 900 - Industrial Dark
accent: '#2563EB', // Royal Blue - Action
gray: '#F8FAFC', // Slate 50
concrete: '#64748B' // Slate 500
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
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
      

<nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<img alt="IBMEX Aniversario" className="h-12 w-auto object-contain" src="https://ibmex.minegoc.io/medios/Logo_Aniversario_IBMEX.png"/>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#beneficios">Beneficios</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#catalogo">Catálogo I-BLOCK</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#proyectos">Proyectos</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#contacto">Contacto</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex group px-5 py-2.5 rounded-none bg-green-600 hover:bg-green-700 text-white text-xs font-bold uppercase tracking-wide transition-all duration-300" href="https://whatsform.com">
<span className="flex items-center gap-2">
<iconify-icon icon="lucide:message-circle" width="16"></iconify-icon>
                        Cotizar WhatsApp
                    </span>
</a>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-60 grayscale" loop="" muted="" playsinline="">
<source src="https://ibmex.minegoc.io/medios/banner.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 hero-overlay"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="flex flex-col md:items-start items-center text-center md:text-left">

<div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-700 text-white text-[10px] font-bold uppercase tracking-widest border border-blue-500/30">
                        Venta Solo Empresas
                    </div>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-slate-300 text-[10px] font-bold uppercase tracking-widest border border-slate-700">
                        Min. 1,000 Pzas
                    </div>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-slate-300 text-[10px] font-bold uppercase tracking-widest border border-slate-700">
                        Entregas CDMX y EdoMex
                    </div>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1] max-w-4xl animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                    BLOCK HUECO <span className="text-slate-400">LISO DE CONCRETO</span>
</h1>
<h2 className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-8 leading-relaxed font-light animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    Resistencia, volumen y entrega garantizada. <br className="hidden md:block"/>
<span className="text-white font-medium">Venta exclusiva por tonelada para constructoras y desarrolladores.</span>
</h2>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up w-full md:w-auto" style={{animationDelay: '0.3s'}}>
<a className="h-14 px-8 bg-green-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-green-700 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 border border-green-500" href="https://whatsform.com">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
                        Cotizar por WhatsApp
                    </a>
<a className="h-14 px-8 bg-transparent border border-white/30 text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all w-full sm:w-auto flex items-center justify-center gap-2" href="#catalogo">
                        Ver Medidas
                        <iconify-icon icon="lucide:arrow-down" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
<span className="text-[10px] uppercase tracking-widest">Scroll</span>
<iconify-icon icon="lucide:arrow-down" width="16"></iconify-icon>
</div>
</section>

<section className="bg-slate-50 border-b border-slate-200 py-12" id="beneficios">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex items-start gap-4">
<div className="text-blue-700 mt-1"><iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon></div>
<div>
<h3 className="font-bold text-slate-900 text-sm uppercase">Alta Resistencia</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Para obras estructurales de alto desempeño.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="text-blue-700 mt-1"><iconify-icon icon="solar:box-minimalistic-linear" width="32"></iconify-icon></div>
<div>
<h3 className="font-bold text-slate-900 text-sm uppercase">Stock Disponible</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Producción constante y controlada.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="text-blue-700 mt-1"><iconify-icon icon="solar:delivery-linear" width="32"></iconify-icon></div>
<div>
<h3 className="font-bold text-slate-900 text-sm uppercase">Entrega a Obra</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Logística propia en CDMX y EdoMex.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="text-blue-700 mt-1"><iconify-icon icon="solar:tag-price-linear" width="32"></iconify-icon></div>
<div>
<h3 className="font-bold text-slate-900 text-sm uppercase">Precio Volumen</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Directo de fábrica, sin intermediarios.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="catalogo">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-100 pb-8">
<div>
<span className="text-blue-700 font-bold tracking-widest text-xs uppercase mb-2 block">Línea I-BLOCK</span>
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Modelos Disponibles</h2>
</div>
<div className="text-right">
<div className="text-sm font-medium text-slate-500">Venta mínima requerida</div>
<div className="text-xl font-bold text-slate-900">1,000 Piezas</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-slate-50 border border-slate-200 hover:border-blue-600 transition-all duration-300 relative flex flex-col">
<div className="h-56 overflow-hidden relative bg-white p-6 flex items-center justify-center">
<img className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold px-2 py-1">10 cm</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-lg font-bold text-slate-900 mb-1">Block Hueco 10</h3>
<div className="text-xs text-slate-500 font-mono mb-4">10 x 20 x 40 cm</div>
<p className="text-slate-600 text-xs leading-relaxed mb-6 border-t border-slate-200 pt-3">
                            Ideal para muros divisorios y cerramientos ligeros. Uniformidad dimensional garantizada.
                        </p>
<a className="mt-auto w-full py-3 bg-white border border-slate-300 hover:border-green-600 hover:text-green-600 text-slate-900 text-xs font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2" href="https://whatsform.com">
                            Cotizar
                            <iconify-icon icon="lucide:message-circle"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-slate-50 border border-slate-200 hover:border-blue-600 transition-all duration-300 relative flex flex-col">
<div className="h-56 overflow-hidden relative bg-white p-6 flex items-center justify-center">
<img className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold px-2 py-1">12 cm</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-lg font-bold text-slate-900 mb-1">Block Hueco 12</h3>
<div className="text-xs text-slate-500 font-mono mb-4">12 x 20 x 40 cm</div>
<p className="text-slate-600 text-xs leading-relaxed mb-6 border-t border-slate-200 pt-3">
                            Muros con refuerzo estructural intermedio. Balance perfecto entre peso y resistencia.
                        </p>
<a className="mt-auto w-full py-3 bg-white border border-slate-300 hover:border-green-600 hover:text-green-600 text-slate-900 text-xs font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2" href="https://whatsform.com">
                            Cotizar
                            <iconify-icon icon="lucide:message-circle"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-slate-50 border border-slate-200 hover:border-blue-600 transition-all duration-300 relative flex flex-col">
<div className="h-56 overflow-hidden relative bg-white p-6 flex items-center justify-center">
<img className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://ibmex.minegoc.io/i-block/block_3_optimized"/>
<div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-1">15 cm</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-lg font-bold text-slate-900 mb-1">Block Hueco 15</h3>
<div className="text-xs text-slate-500 font-mono mb-4">15 x 20 x 40 cm</div>
<p className="text-slate-600 text-xs leading-relaxed mb-6 border-t border-slate-200 pt-3">
                            Estándar para muros de carga en vivienda. Alta capacidad de soporte vertical.
                        </p>
<a className="mt-auto w-full py-3 bg-white border border-slate-300 hover:border-green-600 hover:text-green-600 text-slate-900 text-xs font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2" href="https://whatsform.com">
                            Cotizar
                            <iconify-icon icon="lucide:message-circle"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-slate-50 border border-slate-200 hover:border-blue-600 transition-all duration-300 relative flex flex-col">
<div className="h-56 overflow-hidden relative bg-white p-6 flex items-center justify-center">
<img className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://ibmex.minegoc.io/i-block/5c5990e1-a76e-413e-af1c-e7fd45a6d9d0"/>
<div className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold px-2 py-1">20 cm</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-lg font-bold text-slate-900 mb-1">Block Hueco 20</h3>
<div className="text-xs text-slate-500 font-mono mb-4">20 x 20 x 40 cm</div>
<p className="text-slate-600 text-xs leading-relaxed mb-6 border-t border-slate-200 pt-3">
                            Muros de carga de alta exigencia y contención. Máxima solidez estructural.
                        </p>
<a className="mt-auto w-full py-3 bg-white border border-slate-300 hover:border-green-600 hover:text-green-600 text-slate-900 text-xs font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2" href="https://whatsform.com">
                            Cotizar
                            <iconify-icon icon="lucide:message-circle"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10">
<div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<div className="inline-block px-3 py-1 bg-blue-900 text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-6 border border-blue-800">
                    Logística IBMEX
                </div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    Coordinación directa <br/> a tu obra.
                </h2>
<p className="text-slate-400 mb-8 leading-relaxed text-lg">
                    Entendemos que el tiempo en la construcción es dinero. Coordinamos entregas programadas directamente a tu ubicación, asegurando continuidad en el suministro y cumplimiento de tiempos.
                </p>
<div className="space-y-6">
<div className="flex gap-4 p-4 border border-slate-700 bg-slate-800/50">
<div className="text-blue-500 shrink-0">
<iconify-icon icon="solar:city-linear" width="32"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold">Aplicaciones Versátiles</h4>
<p className="text-sm text-slate-400 mt-1">Ideal para vivienda residencial, naves industriales, edificación vertical y proyectos de infraestructura.</p>
</div>
</div>
<div className="flex gap-4 p-4 border border-slate-700 bg-slate-800/50">
<div className="text-blue-500 shrink-0">
<iconify-icon icon="solar:clipboard-check-linear" width="32"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold">Especificaciones de Venta</h4>
<p className="text-sm text-slate-400 mt-1">Venta por tonelada. Pedido mínimo de 1,000 piezas. Solo empresas y profesionales.</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-800 p-6 border border-slate-700 h-40 flex flex-col justify-between">
<iconify-icon className="text-blue-500" icon="solar:buildings-2-linear" width="32"></iconify-icon>
<span className="font-bold text-sm">Desarrollos<br/>Habitacionales</span>
</div>
<div className="bg-slate-800 p-6 border border-slate-700 h-40 flex flex-col justify-between">
<iconify-icon className="text-blue-500" icon="solar:factory-2-linear" width="32"></iconify-icon>
<span className="font-bold text-sm">Naves<br/>Industriales</span>
</div>
<div className="bg-slate-800 p-6 border border-slate-700 h-40 flex flex-col justify-between">
<iconify-icon className="text-blue-500" icon="solar:wall-linear" width="32"></iconify-icon>
<span className="font-bold text-sm">Muros<br/>Perimetrales</span>
</div>
<div className="bg-slate-800 p-6 border border-slate-700 h-40 flex flex-col justify-between">
<iconify-icon className="text-blue-500" icon="solar:condensed-linear" width="32"></iconify-icon>
<span className="font-bold text-sm">Edificación<br/>Vertical</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="proyectos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-bold text-slate-900 mb-4">Respaldo Industrial que Garantiza tu Obra</h2>
<p className="text-slate-600">
                    IBMEX abastece proyectos de todo tamaño con calidad, volumen y cumplimiento.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
<div className="group relative aspect-[4/3] bg-white shadow-sm border border-slate-200 overflow-hidden">
<img className="w-full h-full object-contain p-8 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://ibmex.minegoc.io/i-block/quiero-casa-Editada"/>
<div className="absolute bottom-0 w-full bg-slate-900 text-white text-[10px] text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity">QUIERO CASA</div>
</div>
<div className="group relative aspect-[4/3] bg-white shadow-sm border border-slate-200 overflow-hidden">
<img className="w-full h-full object-contain p-8 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://ibmex.minegoc.io/i-block/cesvin-1-Editada"/>
<div className="absolute bottom-0 w-full bg-slate-900 text-white text-[10px] text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity">CESVIN</div>
</div>
<div className="group relative aspect-[4/3] bg-white shadow-sm border border-slate-200 overflow-hidden">
<img className="w-full h-full object-contain p-8 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://ibmex.minegoc.io/i-block/migdal-1-Editada"/>
<div className="absolute bottom-0 w-full bg-slate-900 text-white text-[10px] text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity">MIGDAL ARQUITECTOS</div>
</div>
<div className="group relative aspect-[4/3] bg-white shadow-sm border border-slate-200 overflow-hidden">
<img className="w-full h-full object-contain p-8 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://ibmex.minegoc.io/i-block/vinte-1-Editada"/>
<div className="absolute bottom-0 w-full bg-slate-900 text-white text-[10px] text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity">VINTE</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative border-t border-slate-200" id="contacto">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-900 rounded-lg overflow-hidden shadow-2xl relative">
<div className="absolute right-0 top-0 h-full w-2/3 bg-blue-900/20 clip-diagonal hidden md:block"></div>
<div className="grid md:grid-cols-2 gap-12 p-8 md:p-16 relative z-10 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Cotiza Hoy tu Block de Concreto</h2>
<p className="text-slate-300 text-lg mb-8">
                            Obtén precio, disponibilidad y entrega directa a tu obra. 
                            <span className="text-white font-medium block mt-2">Un asesor IBMEX te atiende de inmediato.</span>
</p>
<div className="flex flex-col gap-4">
<a className="w-full md:w-auto h-14 bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-3 rounded-sm" href="https://whatsform.com">
<iconify-icon icon="lucide:message-circle" width="24"></iconify-icon>
                                Cotizar por WhatsApp
                            </a>
<div className="text-slate-400 text-xs text-center md:text-left">
                                *Respuesta promedio: 5 minutos
                            </div>
</div>
</div>

<div className="bg-white p-8 rounded-sm shadow-lg">
<h3 className="text-slate-900 font-bold mb-6 text-lg">Solicita información</h3>
<form className="space-y-4">
<div>
<label className="text-xs font-bold text-slate-700 uppercase mb-1 block">Producto de interés</label>
<select className="w-full h-12 bg-slate-50 border border-slate-200 px-4 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors appearance-none">
<option>Block Hueco Gris (I-BLOCK)</option>
<option>Block 10x20x40</option>
<option>Block 12x20x40</option>
<option>Block 15x20x40</option>
<option>Block 20x20x40</option>
</select>
</div>
<div className="grid grid-cols-2 gap-4">
<input className="w-full h-12 bg-slate-50 border border-slate-200 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors" placeholder="Nombre" type="text"/>
<input className="w-full h-12 bg-slate-50 border border-slate-200 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors" placeholder="Teléfono" type="text"/>
</div>
<input className="w-full h-12 bg-slate-50 border border-slate-200 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors" placeholder="Correo Corporativo" type="email"/>
<button className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2" type="button">
                                Enviar Solicitud
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="mb-6">
<img alt="IBMEX Aniversario" className="h-10 w-auto object-contain" src="https://ibmex.minegoc.io/medios/Logo_Aniversario_IBMEX.png"/>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">
                        Industrial Bloquera Mexicana. Fabricación de materiales de construcción de alto desempeño. Calidad industrial para construir con confianza.
                    </p>
</div>
<div>
<h4 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-wider">Producto</h4>
<ul className="space-y-3">
<li><a className="text-slate-500 hover:text-blue-700 text-sm transition-colors" href="#">Block 10x20x40</a></li>
<li><a className="text-slate-500 hover:text-blue-700 text-sm transition-colors" href="#">Block 12x20x40</a></li>
<li><a className="text-slate-500 hover:text-blue-700 text-sm transition-colors" href="#">Block 15x20x40</a></li>
<li><a className="text-slate-500 hover:text-blue-700 text-sm transition-colors" href="#">Block 20x20x40</a></li>
</ul>
</div>
<div>
<h4 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-wider">Contacto</h4>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-500 text-sm">
<iconify-icon className="text-green-600" icon="lucide:message-circle"></iconify-icon>
<a className="hover:text-slate-900" href="https://whatsform.com">Cotizar por WhatsApp</a>
</li>
<li className="flex items-center gap-3 text-slate-500 text-sm">
<iconify-icon className="text-blue-700" icon="lucide:map-pin"></iconify-icon>
<span>CDMX y Estado de México</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-slate-400 text-xs">
                    © 2024 Industrial Bloquera Mexicana (IBMEX). Todos los derechos reservados.
                </div>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-slate-900" href="#">Aviso de Privacidad</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
