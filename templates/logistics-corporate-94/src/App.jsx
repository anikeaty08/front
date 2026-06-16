import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Inter"', 'sans-serif'],
display: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9', // Primary Blue
600: '#0284c7',
900: '#0c4a6e', // Navy
dark: '#0f172a',
}
},
animation: {
'clip-in': 'clipIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) both',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
clipIn: {
'0%': { clipPath: 'inset(0 100% 0 0)', opacity: '0.8', transform: 'translateX(20px)' },
'100%': { clipPath: 'inset(0 0 0 0)', opacity: '1', transform: 'translateX(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // Flashlight Effect Script
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.flashlight-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Map Interaction Script
        const dots = document.querySelectorAll('.map-dot');
        const listItems = document.querySelectorAll('.group'); // Assuming list items have group class

        dots.forEach((dot, index) => {
            dot.parentElement.addEventListener('mouseenter', () => {
                // Highlight corresponding list item logic could go here
                dot.classList.add('active');
            });
            dot.parentElement.addEventListener('mouseleave', () => {
                dot.classList.remove('active');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-parallax"></div>

<div className="flex overflow-x-auto snap-x snap-mandatory h-screen w-screen no-scrollbar relative z-10">

<section className="w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center p-4 md:p-12 relative">
<div className="flashlight-card w-full max-w-[1600px] aspect-video rounded-[32px] shadow-2xl overflow-hidden relative flex flex-col animate-clip">

<div className="absolute inset-0 z-0">
<img alt="Logistics Background" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
</div>
<div className="relative z-10 flex-1 flex flex-col justify-center px-16 lg:px-24">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 border border-brand-100 text-brand-900 rounded-full text-xs font-semibold uppercase tracking-widest w-fit mb-8">
<span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
                        Presentación Corporativa 2025-1
                    </div>
<h1 className="text-6xl lg:text-8xl font-display font-bold text-slate-900 tracking-tight leading-[0.95] mb-6">
                        SURAMERICANA <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-900">DE TRANSPORTES</span>
</h1>
<p className="text-xl text-slate-500 max-w-xl font-light leading-relaxed mb-12">
                        La nueva cultura del transporte. Excelencia logística y seguridad para su carga masiva y semimasiva en todo el territorio nacional.
                    </p>
<div className="flex items-center gap-6">
<a className="px-8 py-4 bg-brand-900 text-white rounded-full text-sm font-semibold hover:bg-brand-700 transition-colors flex items-center gap-2 group" href="#">
                            Visitar sitio web
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
<iconify-icon className="text-brand-600 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                            322 3458325
                        </div>
</div>
</div>

<div className="absolute top-10 right-10 font-display text-9xl text-slate-100 font-bold -z-10 select-none">01</div>

<div className="relative z-10 px-12 py-6 slide-footer bg-white/50 backdrop-blur-sm flex justify-between items-center text-xs text-slate-400 font-medium uppercase tracking-wider">
<div className="flex gap-6">
<span className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> comercial@suratrans.com</span>
</div>
<span>www.suramericanadetransportes.com</span>
</div>
</div>
</section>

<section className="w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center p-4 md:p-12 relative">
<div className="flashlight-card w-full max-w-[1600px] aspect-video rounded-[32px] shadow-2xl overflow-hidden relative flex flex-col animate-clip bg-white">
<div className="flex-1 grid grid-cols-1 lg:grid-cols-2">

<div className="p-16 lg:p-24 flex flex-col justify-center relative">
<div className="absolute top-16 left-16 w-20 h-20 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-8">
<iconify-icon icon="solar:buildings-2-linear" width="40"></iconify-icon>
</div>
<div className="mt-20">
<div className="flex items-baseline gap-4 mb-6">
<span className="text-7xl font-display font-bold text-slate-900 tracking-tighter">40</span>
<span className="text-2xl text-brand-600 font-medium">Años de <br/>Experiencia</span>
</div>
<h2 className="text-3xl font-display font-semibold text-slate-800 mb-6 leading-tight">
                                "Su carga debe viajar en <span className="text-brand-500">primera clase</span>."
                            </h2>
<div className="space-y-6 text-slate-500 leading-relaxed text-sm lg:text-base">
<p>Somos una compañía con más de (40) cuarenta años de experiencia en el sector del transporte de carga masiva y semimasiva consolidándonos como una de las más importantes del País.</p>
<p>Actualmente realizamos más de <strong className="text-slate-800">25.000 operaciones logísticas anuales</strong> de importación, exportación y distribución nacional ya que contamos con un equipo humano profesional y experimentado.</p>
</div>
</div>
</div>

<div className="relative h-full bg-slate-100 overflow-hidden">
<img alt="Team working" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
<div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur p-6 rounded-2xl border border-white/40">
<div className="flex items-center gap-4">
<div className="p-3 bg-brand-100 text-brand-600 rounded-full">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Equipo Profesional</p>
<p className="text-xs text-slate-500">Personal altamente capacitado</p>
</div>
</div>
</div>
</div>
</div>
<div className="absolute top-10 right-10 font-display text-9xl text-slate-50 font-bold -z-10 select-none">02</div>

<div className="relative z-10 px-12 py-6 slide-footer bg-white flex justify-between items-center text-xs text-slate-400 font-medium uppercase tracking-wider">
<div className="flex gap-6">
<span className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> 322 3458325</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> comercial@suratrans.com</span>
</div>
<span>Perfil Corporativo</span>
</div>
</div>
</section>

<section className="w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center p-4 md:p-12 relative">
<div className="flashlight-card w-full max-w-[1600px] aspect-video rounded-[32px] shadow-2xl overflow-hidden relative flex flex-col animate-clip bg-white">
<div className="flex-1 grid grid-cols-12 gap-0">

<div className="col-span-12 lg:col-span-7 bg-slate-50 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center p-12">

<div className="relative w-[80%] h-[90%] opacity-80">

<img alt="Mapa Colombia" className="w-full h-full object-contain opacity-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Colombia_location_map_blank.svg/866px-Colombia_location_map_blank.svg.png"/>


<div className="absolute top-[52%] left-[43%] flex flex-col items-center group cursor-pointer">
<div className="w-4 h-4 bg-brand-500 border-2 border-white rounded-full map-dot shadow-lg shadow-brand-500/30"></div>
<span className="mt-2 px-2 py-1 bg-white rounded-md text-[10px] font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">Bogotá</span>
</div>

<div className="absolute top-[12%] left-[32%] flex flex-col items-center group cursor-pointer">
<div className="w-4 h-4 bg-brand-500 border-2 border-white rounded-full map-dot shadow-lg shadow-brand-500/30"></div>
<span className="mt-2 px-2 py-1 bg-white rounded-md text-[10px] font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">Cartagena</span>
</div>

<div className="absolute top-[60%] left-[28%] flex flex-col items-center group cursor-pointer">
<div className="w-4 h-4 bg-brand-500 border-2 border-white rounded-full map-dot shadow-lg shadow-brand-500/30"></div>
<span className="mt-2 px-2 py-1 bg-white rounded-md text-[10px] font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">Buenaventura</span>
</div>

<div className="absolute top-[62%] left-[30%] flex flex-col items-center group cursor-pointer">
<div className="w-4 h-4 bg-brand-500 border-2 border-white rounded-full map-dot shadow-lg shadow-brand-500/30"></div>
<span className="mt-2 px-2 py-1 bg-white rounded-md text-[10px] font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">Yumbo</span>
</div>

<div className="absolute top-[54%] left-[38%] flex flex-col items-center group cursor-pointer">
<div className="w-4 h-4 bg-brand-500 border-2 border-white rounded-full map-dot shadow-lg shadow-brand-500/30"></div>
<span className="mt-2 px-2 py-1 bg-white rounded-md text-[10px] font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">Ibagué</span>
</div>

<div className="absolute top-[50%] left-[36%] flex flex-col items-center group cursor-pointer">
<div className="w-4 h-4 bg-brand-500 border-2 border-white rounded-full map-dot shadow-lg shadow-brand-500/30"></div>
<span className="mt-2 px-2 py-1 bg-white rounded-md text-[10px] font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">Pereira</span>
</div>

<div className="absolute top-[68%] left-[29%] flex flex-col items-center group cursor-pointer">
<div className="w-4 h-4 bg-brand-500 border-2 border-white rounded-full map-dot shadow-lg shadow-brand-500/30"></div>
<span className="mt-2 px-2 py-1 bg-white rounded-md text-[10px] font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">Popayán</span>
</div>

<div className="absolute top-[40%] left-[36%] flex flex-col items-center group cursor-pointer">
<div className="w-4 h-4 bg-brand-500 border-2 border-white rounded-full map-dot shadow-lg shadow-brand-500/30"></div>
<span className="mt-2 px-2 py-1 bg-white rounded-md text-[10px] font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">Medellín</span>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 bg-white p-12 overflow-y-auto">
<h2 className="text-3xl font-display font-semibold text-slate-900 mb-2">Nuestras Oficinas</h2>
<p className="text-slate-400 text-sm mb-10">Cobertura nacional estratégica.</p>
<div className="space-y-6">

<div className="group p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-default">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-bold text-slate-800">1. Bogotá</h3>
<span className="text-xs text-brand-600 bg-brand-50 px-2 py-1 rounded">Sede Principal</span>
</div>
<p className="text-xs text-slate-500 mb-1 flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:map-point-linear"></iconify-icon> Calle 17 No 42 A-15</p>
<p className="text-xs text-slate-500 mb-1 flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> 313-8702938</p>
<p className="text-xs text-slate-500 flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> comercial@suratrans.com</p>
</div>

<div className="group p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-default">
<h3 className="text-lg font-bold text-slate-800 mb-2">2. Cartagena</h3>
<p className="text-xs text-slate-500 mb-1 flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:map-point-linear"></iconify-icon> CRA 29 No 28-66</p>
<p className="text-xs text-slate-500 flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> cartagena@suratrans.com</p>
</div>

<div className="group p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-default">
<h3 className="text-lg font-bold text-slate-800 mb-2">3. Buenaventura</h3>
<p className="text-xs text-slate-500 mb-1 flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:map-point-linear"></iconify-icon> Calle 19 no 80 a 97 via alterna</p>
<p className="text-xs text-slate-500 flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> buenaventura@suratrans.com</p>
</div>

<div className="group p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-default">
<h3 className="text-lg font-bold text-slate-800 mb-2">4. Yumbo / Cali</h3>
<p className="text-xs text-slate-500 mb-1 flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:map-point-linear"></iconify-icon> Cencar Bloque A2. Oficina 108-109</p>
<p className="text-xs text-slate-500 flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> cali@suratrans.com</p>
</div>

<div className="group p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-default">
<h3 className="text-lg font-bold text-slate-800 mb-2">5. Medellín</h3>
<p className="text-xs text-slate-500 mb-1 flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:map-point-linear"></iconify-icon> Cra 57 #24-33</p>
<p className="text-xs text-slate-500 flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> medellin@suratrans.com</p>
</div>
</div>
</div>
</div>
<div className="absolute top-10 right-10 font-display text-9xl text-slate-100 font-bold -z-10 select-none">03</div>

<div className="relative z-10 px-12 py-6 slide-footer bg-white flex justify-between items-center text-xs text-slate-400 font-medium uppercase tracking-wider">
<span>Cobertura Nacional</span>
<span>www.suramericanadetransportes.com</span>
</div>
</div>
</section>

<section className="w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center p-4 md:p-12 relative">
<div className="flashlight-card w-full max-w-[1600px] aspect-video rounded-[32px] shadow-2xl overflow-hidden relative flex flex-col animate-clip bg-white">
<div className="px-16 lg:px-24 pt-16 lg:pt-20 pb-8">
<h2 className="text-3xl font-display font-semibold text-slate-900 mb-2">Nuestros Servicios</h2>
<p className="text-slate-500">Soluciones integrales para cada necesidad logística.</p>
</div>
<div className="flex-1 px-16 lg:px-24 pb-12 overflow-y-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:city-linear" width="20"></iconify-icon>
</div>
<h3 className="font-bold text-slate-800 mb-2">Distribución Urbana</h3>
<p className="text-xs text-slate-500 leading-relaxed">Entregas eficientes dentro del perímetro urbano con vehículos adaptados.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="font-bold text-slate-800 mb-2">Carga Semimasiva</h3>
<p className="text-xs text-slate-500 leading-relaxed">Servicio expreso o consolidado para optimizar costos sin sacrificar tiempo.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:delivery-linear" width="20"></iconify-icon>
</div>
<h3 className="font-bold text-slate-800 mb-2">Carga Masiva</h3>
<p className="text-xs text-slate-500 leading-relaxed">Transporte de grandes volúmenes a nivel nacional con flota especializada.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:danger-triangle-linear" width="20"></iconify-icon>
</div>
<h3 className="font-bold text-slate-800 mb-2">Mercancías Peligrosas</h3>
<p className="text-xs text-slate-500 leading-relaxed">Manejo certificado y seguro de materiales peligrosos bajo normativa.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:transfer-horizontal-linear" width="20"></iconify-icon>
</div>
<h3 className="font-bold text-slate-800 mb-2">ITR / Descontenarización</h3>
<p className="text-xs text-slate-500 leading-relaxed">Proceso de traspaso de carga para transporte como carga suelta.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</div>
<h3 className="font-bold text-slate-800 mb-2">OTM / Multimodal</h3>
<p className="text-xs text-slate-500 leading-relaxed">Operación de transporte multimodal y declaración de tránsito aduanero (DTA).</p>
</div>
</div>
</div>
<div className="absolute top-10 right-10 font-display text-9xl text-slate-50 font-bold -z-10 select-none">04</div>
<div className="relative z-10 px-12 py-6 slide-footer bg-white flex justify-between items-center text-xs text-slate-400 font-medium uppercase tracking-wider">
<span>Portafolio de Servicios</span>
<span>www.suramericanadetransportes.com</span>
</div>
</div>
</section>

<section className="w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center p-4 md:p-12 relative">
<div className="flashlight-card w-full max-w-[1600px] aspect-video rounded-[32px] shadow-2xl overflow-hidden relative flex flex-col animate-clip">
<div className="absolute inset-0">
<img alt="Fleet Truck" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
</div>
<div className="relative z-10 flex-1 flex flex-col justify-end p-16 lg:p-24 text-white">
<div className="max-w-3xl">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-1 bg-brand-500"></div>
<span className="text-brand-400 font-semibold uppercase tracking-widest text-sm">Parque Automotor</span>
</div>
<h2 className="text-5xl font-display font-bold mb-6 leading-tight">Flota Propia y Fidelizada</h2>
<p className="text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                            Contamos con una infraestructura robusta que incluye vehículos tipo turbos, sencillos, minimulas y tractomulas, garantizando disponibilidad y flexibilidad.
                        </p>
<div className="flex gap-4">
<div className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur border border-white/20">
<span className="block text-2xl font-bold">25k+</span>
<span className="text-xs text-slate-400 uppercase">Operaciones Anuales</span>
</div>
<div className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur border border-white/20">
<span className="block text-2xl font-bold">100%</span>
<span className="text-xs text-slate-400 uppercase">Rastreo Satelital</span>
</div>
</div>
</div>
</div>
<div className="absolute top-10 right-10 font-display text-9xl text-white/10 font-bold -z-10 select-none">05</div>
<div className="relative z-10 px-12 py-6 slide-footer bg-slate-900/50 backdrop-blur border-t border-white/10 flex justify-between items-center text-xs text-slate-400 font-medium uppercase tracking-wider">
<span>Infraestructura</span>
<span>www.suramericanadetransportes.com</span>
</div>
</div>
</section>

<section className="w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center p-4 md:p-12 relative">
<div className="flashlight-card w-full max-w-[1600px] aspect-video rounded-[32px] shadow-2xl overflow-hidden relative flex flex-col animate-clip bg-white">
<div className="p-16 lg:p-24 flex-1 flex flex-col justify-center">
<div className="text-center mb-16">
<span className="text-brand-600 font-semibold uppercase tracking-widest text-xs mb-2 block">Valor Agregado</span>
<h2 className="text-4xl font-display font-semibold text-slate-900">Características del Servicio</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-14 h-14 rounded-full bg-white border border-slate-100 text-brand-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:satellite-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-800 mb-4">Monitoreo 24/7</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                                Control total en tiempo real sobre los despachos en las diferentes rutas nacionales, garantizando seguridad y cumplimiento.
                            </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-14 h-14 rounded-full bg-white border border-slate-100 text-brand-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-800 mb-4">Trazabilidad Integral</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                                Atención personalizada por el área de Logística. Reportes automáticos y ubicación exacta generada por nuestras herramientas tecnológicas.
                            </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-14 h-14 rounded-full bg-white border border-slate-100 text-brand-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-800 mb-4">Análisis de Riesgos</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                                Asesoría experta en seguridad y prevención para el transporte de mercancías de alto valor y carga crítica.
                            </p>
</div>
</div>
</div>
<div className="absolute top-10 right-10 font-display text-9xl text-slate-50 font-bold -z-10 select-none">06</div>
<div className="relative z-10 px-12 py-6 slide-footer bg-white flex justify-between items-center text-xs text-slate-400 font-medium uppercase tracking-wider">
<span>Tecnología y Seguridad</span>
<span>www.suramericanadetransportes.com</span>
</div>
</div>
</section>

<section className="w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center p-4 md:p-12 relative">
<div className="flashlight-card w-full max-w-[1600px] aspect-video rounded-[32px] shadow-2xl overflow-hidden relative flex flex-col animate-clip bg-white">
<div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
<div className="p-16 lg:p-24 flex flex-col justify-center bg-brand-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="relative z-10">
<h2 className="text-4xl font-display font-semibold mb-6">Pólizas y Certificaciones</h2>
<p className="text-slate-300 mb-12 max-w-md">
                                Nuestra operación se encuentra respaldada por una póliza integral para brindar total tranquilidad a nuestros clientes.
                            </p>
<div className="inline-flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur border border-white/10">
<iconify-icon className="text-brand-400" icon="solar:medal-ribbon-star-linear" width="40"></iconify-icon>
<div>
<p className="font-bold text-lg">Certificación BASC</p>
<p className="text-xs text-slate-300">Norma Internacional v6-2022</p>
</div>
</div>
</div>
</div>
<div className="p-16 lg:p-24 flex flex-col justify-center bg-white">
<h3 className="text-lg font-bold text-slate-900 mb-8 uppercase tracking-wide">Coberturas</h3>
<div className="space-y-4">

<div className="flex justify-between items-center p-4 rounded-lg bg-slate-50 border border-slate-100">
<span className="text-sm font-medium text-slate-600">Transporte de Mercancías</span>
<span className="text-lg font-bold text-slate-900">$1.200 Millones</span>
</div>

<div className="flex justify-between items-center p-4 rounded-lg bg-slate-50 border border-slate-100">
<span className="text-sm font-medium text-slate-600">RCE</span>
<span className="text-lg font-bold text-slate-900">$900 Millones</span>
</div>

<div className="flex justify-between items-center p-4 rounded-lg bg-slate-50 border border-slate-100">
<span className="text-sm font-medium text-slate-600">RC Mercancías Peligrosas</span>
<span className="text-lg font-bold text-slate-900">$2.500 Millones</span>
</div>

<div className="flex justify-between items-center p-4 rounded-lg bg-slate-50 border border-slate-100">
<span className="text-sm font-medium text-slate-600">RC Ambiental</span>
<span className="text-lg font-bold text-slate-900">$3.000 Millones</span>
</div>
</div>
</div>
</div>
<div className="absolute top-10 right-10 font-display text-9xl text-slate-50 font-bold -z-10 select-none mix-blend-multiply">07</div>
<div className="relative z-10 px-12 py-6 slide-footer bg-white flex justify-between items-center text-xs text-slate-400 font-medium uppercase tracking-wider">
<span>Respaldo</span>
<span>www.suramericanadetransportes.com</span>
</div>
</div>
</section>

<section className="w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center p-4 md:p-12 relative">
<div className="flashlight-card w-full max-w-[1600px] aspect-video rounded-[32px] shadow-2xl overflow-hidden relative flex flex-col animate-clip bg-white">
<div className="p-16 lg:p-24 flex-1">
<div className="text-center mb-16">
<h2 className="text-3xl font-display font-semibold text-slate-900">Algunos de Nuestros Clientes</h2>
<p className="text-slate-500 mt-2">Empresas líderes que confían en nosotros.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="aspect-[3/2] flex items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 text-slate-400 font-bold text-xl hover:text-brand-600 hover:border-brand-200 transition-colors">Pfizer</div>
<div className="aspect-[3/2] flex items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 text-slate-400 font-bold text-xl hover:text-brand-600 hover:border-brand-200 transition-colors text-center text-sm">Fed. Nal. Cafeteros</div>
<div className="aspect-[3/2] flex items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 text-slate-400 font-bold text-xl hover:text-brand-600 hover:border-brand-200 transition-colors">DHL</div>
<div className="aspect-[3/2] flex items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 text-slate-400 font-bold text-xl hover:text-brand-600 hover:border-brand-200 transition-colors">BASF</div>
<div className="aspect-[3/2] flex items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 text-slate-400 font-bold text-xl hover:text-brand-600 hover:border-brand-200 transition-colors">Samsung</div>
<div className="aspect-[3/2] flex items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 text-slate-400 font-bold text-xl hover:text-brand-600 hover:border-brand-200 transition-colors">Fedearroz</div>
<div className="aspect-[3/2] flex items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 text-slate-400 font-bold text-xl hover:text-brand-600 hover:border-brand-200 transition-colors">Eternit</div>
<div className="aspect-[3/2] flex items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 text-slate-400 font-bold text-xl hover:text-brand-600 hover:border-brand-200 transition-colors">Amway</div>
</div>
</div>
<div className="absolute top-10 right-10 font-display text-9xl text-slate-50 font-bold -z-10 select-none">08</div>
<div className="relative z-10 px-12 py-6 slide-footer bg-white flex justify-between items-center text-xs text-slate-400 font-medium uppercase tracking-wider">
<span>Experiencia</span>
<span>www.suramericanadetransportes.com</span>
</div>
</div>
</section>

<section className="w-screen h-screen snap-center flex-shrink-0 flex items-center justify-center p-4 md:p-12 relative">
<div className="flashlight-card w-full max-w-[1600px] aspect-video rounded-[32px] shadow-2xl overflow-hidden relative flex flex-col items-center justify-center animate-clip bg-brand-900 text-white">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
<div className="relative z-10 text-center max-w-2xl px-6">
<div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-10 backdrop-blur border border-white/20 text-brand-400">
<iconify-icon icon="solar:check-circle-linear" width="48"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Gracias por su atención</h2>
<p className="text-xl text-slate-300 font-light mb-12">"Para nosotros es fundamental contar con clientes como ustedes."</p>
<div className="inline-block px-8 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
<p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Contáctenos</p>
<p className="text-xl font-semibold">322 3458325</p>
<p className="text-base text-slate-300">dir.comercial@suratrans.com</p>
</div>
<div className="mt-16 pt-8 border-t border-white/10">
<p className="text-sm font-bold tracking-widest uppercase text-brand-500">SURAMERICANA DE TRANSPORTES S.A.</p>
<p className="text-xs text-slate-500 mt-2">La Nueva Cultura del Transporte</p>
</div>
</div>
<div className="absolute bottom-6 w-full text-center text-[10px] text-white/20 uppercase tracking-widest">
                    © 2025 Suramericana de Transportes
                </div>
</div>
</section>
</div>


    </>
  );
}
