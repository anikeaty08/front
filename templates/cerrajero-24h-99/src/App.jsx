import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
// Configuración de color: Naranja Fuerte como acento (Brand)
brand: {
50: '#fff7ed',
100: '#ffedd5',
200: '#fed7aa',
300: '#fdba74',
400: '#fb923c',
500: '#f97316', // Naranja principal
600: '#ea580c', // Naranja oscuro hover
700: '#c2410c',
800: '#9a3412',
900: '#7c2d12',
950: '#431407',
},
// Colores personalizados para gris acero y azul oscuro
dark: {
900: '#0f172a', // Slate 900 (Azul oscuro profundo/Mate)
800: '#1e293b', // Slate 800 (Gris oscuro azulado)
}
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 3s infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
}
}
}
}
}



        // Form submission simulation
        document.querySelector('button[type="button"]').addEventListener('click', function(e) {
            const btn = e.target;
            const originalText = btn.innerText;
            btn.innerText = 'Enviando...';
            btn.disabled = true;
            setTimeout(() => {
                btn.innerText = '¡Mensaje Enviado!';
                btn.classList.remove('bg-brand-500');
                btn.classList.add('bg-dark-800');
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.classList.add('bg-brand-500');
                    btn.classList.remove('bg-dark-800');
                    document.querySelector('form').reset();
                }, 3000);
            }, 1500);
        });

        // Mobile Menu Toggle (Simple)
        const menuBtn = document.querySelector('nav button');
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-xl font-medium transform translate-x-full transition-transform duration-300 md:hidden';
        mobileMenu.innerHTML = `
            <a href="#servicios" onclick="closeMenu()">Servicios</a>
            <a href="#zonas" onclick="closeMenu()">Zonas</a>
            <a href="#presupuesto" onclick="closeMenu()">Presupuesto</a>
            <a href="tel:644179781" class="text-brand-600">Llamar: 644 17 97 81</a>
            <button onclick="closeMenu()" class="absolute top-6 right-6 p-2">
                <iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
            </button>
        `;
        document.body.appendChild(mobileMenu);

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
        });

        window.closeMenu = () => {
            mobileMenu.classList.add('translate-x-full');
        };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight text-dark-900 leading-none">Cerrajeros Madrid</span>
<span className="text-xs font-semibold text-brand-600 tracking-wide">CERCA DE MÍ</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#servicios">Servicios</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#zonas">Zonas</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#presupuesto">Presupuesto</a>
<a className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" href="tel:644179781">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    644 17 97 81
                </a>
</div>

<button className="md:hidden p-2 text-slate-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-dark-900">

<div className="absolute inset-0 z-0">

<img alt="Cerrajero profesional trabajando" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-dark-900/30"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/80 border border-slate-700 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-8 animate-fade-in backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                Servicio 24 Horas en Madrid
            </div>
<h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-[1.1] animate-slide-up text-shadow">
                Cerrajero Barato <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">Cerca de Ti</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up" style={{animationDelay: '0.1s'}}>
                Desplazamiento y Visita <strong className="text-white">GRATIS</strong>. Apertura de puertas, cambio de cerraduras y urgencias. Llegamos en 20 minutos.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
<a className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-brand-600 transition-all shadow-xl hover:shadow-brand-500/20 hover:-translate-y-1 group" href="tel:644179781">
<iconify-icon className="text-white group-hover:rotate-12 transition-transform" icon="solar:phone-calling-bold" width="24"></iconify-icon>
                    Llamar: 644 17 97 81
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-slate-400/30 hover:border-white text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/5 transition-all backdrop-blur-sm" href="#presupuesto">
                    Pedir Presupuesto
                </a>
</div>

<div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-90 text-slate-300 animate-fade-in" style={{animationDelay: '0.4s'}}>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Garantía por escrito</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:wallet-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Precio Cerrado</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Llegada en 20 min</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative z-20 -mt-10 rounded-t-[2.5rem] shadow-[0_-20px_40px_rgba(0,0,0,0.15)]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-dark-900 tracking-tight mb-4">¿Por qué elegirnos?</h2>
<p className="text-slate-500 text-lg">Soluciones profesionales en cerrajería urgente e industrial.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-14 h-14 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:tag-price-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-dark-900 mb-3">Cerrajeros Económicos</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                        Ofrecemos atención personalizada para asegurar servicios de calidad al mejor precio. Preferimos un precio justo y sin sorpresas. 
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:key-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-dark-900 mb-3">Apertura de Puertas</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                        Servicio integral urgente. Si te has dejado la llave dentro, la has perdido o te la han robado, abrimos tu puerta sin causar daños.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-500/5 transition-all duration-300">
<div className="w-14 h-14 bg-slate-200 text-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-keyhole-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-dark-900 mb-3">Cambio de Cerraduras</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                        Instalación y sustitución de bombines y cerraduras. Trabajamos con todas las marcas de prestigio para garantizar tu seguridad.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 grid-bg border-y border-slate-200" id="servicios">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative rounded-3xl overflow-hidden shadow-2xl group bg-dark-800">
<div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent z-10"></div>
<img alt="Cerrajero Madrid 24 Horas" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%]" src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-8 left-8 z-20">
<div className="bg-brand-500 text-white px-4 py-2 rounded-lg inline-block mb-2 shadow-lg">
<span className="font-bold text-sm tracking-wide">SERVICIO 24H</span>
</div>
<h3 className="text-white text-2xl font-bold">Urgencias en 20 Minutos</h3>
</div>
</div>
<div className="">
<h2 className="text-3xl md:text-5xl font-bold text-dark-900 tracking-tight mb-6">
                        Servicios de Cerrajería <span className="text-brand-500">Integrales</span>
</h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        En situaciones críticas, contar con un cerrajero de emergencia puede marcar la diferencia. Nuestro equipo técnico está disponible las 24 horas.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0 text-brand-600 mt-1">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-semibold text-dark-900">Urgencias 24 Horas</h4>
<p className="text-slate-500 text-sm mt-1">Atendemos cualquier imprevisto de día o de noche. Aperturas sin rotura.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center shrink-0 text-slate-700 mt-1">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-semibold text-dark-900">Cerrajero Madrid Centro</h4>
<p className="text-slate-500 text-sm mt-1">En el corazón de Madrid, ofrecemos un servicio profesional y cercano.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-700 mt-1">
<iconify-icon icon="solar:chat-round-money-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-semibold text-dark-900">Precios Baratos y Transparentes</h4>
<p className="text-slate-500 text-sm mt-1">Sin sorpresas. Presupuesto previo y visita gratuita.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 bg-dark-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-dark-800 transition-colors" href="tel:644179781">
                            Contactar Ahora
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="zonas">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-brand-600 font-semibold tracking-wide text-sm uppercase">Cobertura Total</span>
<h2 className="text-3xl md:text-4xl font-bold text-dark-900 mt-2 mb-4 tracking-tight">Zonas de Servicio en Madrid</h2>
<p className="text-slate-500">Llegamos a todos los barrios y distritos rápidamente.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200" href="#">
<iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Carabanchel</span>
</a>
<a className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200" href="#">
<iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Alameda de Osuna</span>
</a>
<a className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200" href="#">
<iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Puerta del Ángel</span>
</a>
<a className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200" href="#">
<iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Ventas</span>
</a>
<a className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200" href="#">
<iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Retiro</span>
</a>
<a className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200" href="#">
<iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Vista Alegre</span>
</a>
<a className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200" href="#">
<iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Sanchinarro</span>
</a>
<a className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200" href="#">
<iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Vicálvaro</span>
</a>
<a className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200" href="#">
<iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Almagro</span>
</a>
<a className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200" href="#">
<iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Arganzuela</span>
</a>
<a className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200" href="#">
<iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Barrio del Pilar</span>
</a>
<a className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200" href="#">
<iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Moncloa</span>
</a>
</div>
<div className="mt-8 text-center">
<p className="text-sm text-slate-400">Y muchos más barrios de Madrid...</p>
</div>
</div>
</section>

<section className="py-24 bg-dark-900 text-white relative overflow-hidden" id="presupuesto">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16">

<div className="">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Pide Presupuesto <br/><span className="text-brand-400">Sin Compromiso</span></h2>
<p className="text-slate-300 mb-8 text-lg">
                        Rellena el formulario o llámanos. Te daremos un precio cerrado antes de realizar el trabajo.
                    </p>
<div className="space-y-6 mb-10">
<div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
<div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-white group-hover:bg-brand-600 transition-colors">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wide">Llámanos 24h</p>
<a className="text-xl font-bold text-white hover:text-brand-300 transition-colors" href="tel:644179781">644 17 97 81</a>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:letter-bold" width="24"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-slate-400 uppercase tracking-wide">Email</p>
<a className="text-lg font-medium text-white hover:text-brand-300 transition-colors" href="mailto:info@cerrajerocercademimadrid.es">info@cerrajerocercademimadrid.es</a>
</div>
</div>
</div>

<div className="w-full h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-dark-800">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8485.128881308507!2d-3.7325698000021226!3d40.37872927396485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227002763ad67%3A0x812fbee1b0cc1c3c!2sCERRAJEROS%20MADRID%20ALTAPROTECCION!5e1!3m2!1ses!2ses!4v1745318936702" style={{border: '0', filter: 'grayscale(1) contrast(1.2) invert(92%) hue-rotate(180deg)'}} width="100%"></iframe>
</div>
<p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
<iconify-icon className="" icon="solar:map-point-linear"></iconify-icon> Calle Vicenta Pachón 6, 28019 Madrid
                    </p>
</div>

<div className="bg-white text-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/20">
<form className="space-y-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700">Nombre Completo</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder-slate-400 bg-slate-50" placeholder="Tu nombre" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700">Teléfono</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder-slate-400 bg-slate-50" placeholder="Tu teléfono" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder-slate-400 bg-slate-50" placeholder="tu@email.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700">Mensaje / Consulta</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder-slate-400 bg-slate-50 resize-none" placeholder="Describe tu problema..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3">
<input className="mt-1 w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500" id="privacy" type="checkbox"/>
<label className="text-xs text-slate-500" htmlFor="privacy">
                                He leído y acepto la <a className="text-brand-600 hover:underline" href="#">Política de Privacidad</a>.
                            </label>
</div>
<button className="w-full bg-brand-500 text-white font-bold py-4 rounded-xl hover:bg-brand-600 transition-all shadow-lg hover:shadow-brand-500/30 active:scale-[0.98]" type="button">
                            Enviar Consulta
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" width="18"></iconify-icon>
</div>
<span className="font-bold text-dark-900">Cerrajero Madrid</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Empresa dedicada a la cerrajería en Madrid con servicio 24 horas. Profesionales cualificados para aperturas, reparaciones e instalaciones.
                    </p>
<div className="flex gap-4">

<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-colors" href="#">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="font-bold text-dark-900 mb-4">Enlaces Legales</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className=""><a className="hover:text-brand-600 transition-colors" href="#">Aviso Legal</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Política de Privacidad</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Política de Cookies</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Mapa Web</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-dark-900 mb-4">Contacto</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon>
                            Calle Vicenta Pachón 6, Madrid
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-brand-600" href="tel:644179781">644 17 97 81</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-brand-600" href="mailto:info@cerrajerocercademimadrid.es">info@cerrajerocercademimadrid.es</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 text-center md:text-left">
                    Copyright © 2020-2026 Cerrajero cerca de mi Madrid. Todos los derechos reservados.
                </p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-brand-500"></span>
<span className="text-xs font-medium text-slate-500">Sistema Operativo</span>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 md:hidden z-50 flex items-center gap-2 bg-brand-500 text-white px-5 py-3 rounded-full font-bold shadow-2xl animate-pulse-slow" href="tel:644179781">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
        LLAMAR AHORA
    </a>

<div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-xl font-medium transform translate-x-full transition-transform duration-300 md:hidden">
<a href="#servicios" onclick="closeMenu()">Servicios</a>
<a href="#zonas" onclick="closeMenu()">Zonas</a>
<a href="#presupuesto" onclick="closeMenu()">Presupuesto</a>
<a className="text-brand-600" href="tel:644179781">Llamar: 644 17 97 81</a>
<button className="absolute top-6 right-6 p-2" onclick="closeMenu()">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div><div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-xl font-medium transform translate-x-full transition-transform duration-300 md:hidden">
<a href="#servicios" onclick="closeMenu()">Servicios</a>
<a href="#zonas" onclick="closeMenu()">Zonas</a>
<a href="#presupuesto" onclick="closeMenu()">Presupuesto</a>
<a className="text-brand-600" href="tel:644179781">Llamar: 644 17 97 81</a>
<button className="absolute top-6 right-6 p-2" onclick="closeMenu()">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>

    </>
  );
}
