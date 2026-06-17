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



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#B8A89A', // Soft nude brown
secondary: '#EFE9E4', // Beige cream
accent: '#D6C6B8', // Pinkish nude
background: '#FAF8F6', // Off-white
surface: '#FFFFFF',
text: {
main: '#52525B', // Zinc 600 - Soft gray
dark: '#27272A',  // Zinc 800 - Deep gray (not black)
light: '#A1A1AA'  // Zinc 400
}
},
fontFamily: {
'display': ['Playfair Display', 'serif'],
'body': ['Plus Jakarta Sans', 'sans-serif']
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.15em'
},
boxShadow: {
'soft': '0 10px 40px -10px rgba(184, 168, 154, 0.15)',
'hover': '0 20px 40px -10px rgba(184, 168, 154, 0.25)'
}
}
}
}



        // Navbar Scroll Effect - Adapted for Light Theme
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('glass-nav');
                nav.classList.remove('border-transparent');
            } else {
                nav.classList.remove('glass-nav');
                nav.classList.add('border-transparent');
            }
        });

        // Hide Loader
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            loader.classList.add('opacity-0');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 700);
        });
    
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
      

<div className="fixed inset-0 bg-secondary z-[60] flex items-center justify-center transition-opacity duration-700 opacity-0" id="loader" style={{display: 'none'}}>
<div className="text-center">
<div className="mb-6 relative flex justify-center">
<div className="w-16 h-16 border-t-2 border-b-2 border-primary rounded-full animate-spin opacity-50"></div>
<div className="absolute inset-0 flex items-center justify-center font-display text-primary text-2xl italic">D</div>
</div>
<p className="text-text-main text-xs tracking-widest uppercase animate-pulse font-light">Divanna Beauty Center</p>
</div>
</div>

<header className="fixed top-0 w-full z-50 transition-all duration-300 border-b" id="navbar">
<div className="flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="flex flex-col">
<span className="font-display text-2xl tracking-tight leading-none text-text-dark group-hover:text-primary transition-colors">Divanna</span>
<span className="text-[9px] tracking-[0.2em] uppercase text-primary leading-none mt-1.5 ml-0.5">Beauty Center</span>
</div>
</a>
<nav className="hidden lg:flex items-center gap-10">
<a className="text-sm font-light text-text-main hover:text-primary transition-colors" href="#inicio">Inicio</a>
<a className="text-text-main hover:text-primary transition-colors text-sm font-light" href="#nosotros">Nosotros</a>
<a className="text-sm font-light text-text-main hover:text-primary transition-colors" href="#tratamientos">Tratamientos</a>
<a className="text-sm font-light text-text-main hover:text-primary transition-colors" href="#filosofia">Filosofía</a>
<a className="text-sm font-light text-text-main hover:text-primary transition-colors" href="#testimonios">Testimonios</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-6 py-3 bg-primary hover:bg-accent text-surface text-xs font-medium tracking-widest uppercase transition-all rounded-full shadow-soft hover:shadow-hover" href="https://wa.me/5219980000000?text=Hola,%20quiero%20agendar%20una%20valoraci%C3%B3n%20en%20Divanna%20Beauty%20Center." target="_blank">
<span className="">Agenda Tu Cita</span>
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="lg:hidden text-text-dark hover:text-primary transition-colors" onclick="document.getElementById('mobileMenu').classList.remove('translate-x-full')">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed inset-0 z-[70] bg-background transform translate-x-full transition-transform duration-500" id="mobileMenu">
<div className="flex justify-end p-8">
<button className="text-text-dark hover:text-primary" onclick="document.getElementById('mobileMenu').classList.add('translate-x-full')">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
</div>
<nav className="flex flex-col items-center justify-center h-[70vh] gap-8">
<a className="font-display text-3xl text-text-dark hover:text-primary italic" href="#nosotros" onclick="document.getElementById('mobileMenu').classList.add('translate-x-full')">Nosotros</a>
<a className="font-display text-3xl text-text-dark hover:text-primary italic" href="#tratamientos" onclick="document.getElementById('mobileMenu').classList.add('translate-x-full')">Tratamientos</a>
<a className="font-display text-3xl text-text-dark hover:text-primary italic" href="#testimonios" onclick="document.getElementById('mobileMenu').classList.add('translate-x-full')">Testimonios</a>
<a className="font-display text-3xl text-text-dark hover:text-primary italic" href="#contacto" onclick="document.getElementById('mobileMenu').classList.add('translate-x-full')">Ubicación</a>
<a className="mt-8 px-8 py-4 bg-primary text-surface font-medium uppercase tracking-widest rounded-full shadow-lg" href="https://wa.me/5219980000000" target="_blank">Agenda por WhatsApp</a>
</nav>
</div>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="inicio">
<div className="absolute inset-0 z-0">

<img alt="Piel luminosa y sana" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>

<div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
</div>
<div className="z-10 grid md:grid-cols-2 w-full max-w-7xl pr-6 pl-6 relative">
<div className="text-left mt-10 md:mt-0">
<div className="inline-flex items-center gap-3 mb-8 animate-fade-in-up border border-primary/20 bg-surface/50 backdrop-blur-sm px-4 py-2 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest text-text-dark font-medium">Atención personalizada • Protocolos médicos</span>
</div>
<h1 className="md:text-6xl lg:text-7xl text-text-dark leading-[1.1] animate-fade-in-up delay-100 text-5xl tracking-tighter font-display mb-8">
                    Medicina estética <br/> <span className="text-primary italic pr-2">boutique</span> en Cancún
                </h1>
<p className="text-text-main text-base md:text-lg font-light max-w-lg mb-12 leading-relaxed animate-fade-in-up delay-200">
                    Tratamientos de alta precisión para una belleza natural, luminosa y saludable. Donde la ciencia médica se encuentra con el cuidado consciente.
                </p>
<div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up delay-300">
<a className="px-8 py-4 bg-primary hover:bg-primary/90 text-surface text-xs font-medium tracking-widest uppercase transition-all rounded-full w-full sm:w-auto text-center shadow-soft hover:shadow-hover" href="https://wa.me/5219980000000" target="_blank">
                        Agenda tu valoración
                    </a>
<a className="border-primary/30 hover:border-primary text-text-dark hover:text-primary uppercase transition-all sm:w-auto text-xs font-medium tracking-widest text-center w-full border rounded-full pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm" href="#tratamientos">
                        Explorar tratamientos
                    </a>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-32 pb-32 relative" id="nosotros">
<div className="absolute -left-20 top-40 w-96 h-96 bg-secondary/50 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-x-20 gap-y-20 items-center">
<div className="relative order-2 lg:order-1">
<div className="relative rounded-2xl overflow-hidden shadow-soft">
<img alt="Tratamiento profesional de labios y cuidado estético en paciente relajada" className="aspect-[4/5] hover:scale-105 transition-transform duration-1000 object-cover mr-4 ml-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/950fc1fd-1af5-4855-b585-e8e67d71d3b4_1600w.jpg"/>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full -z-10"></div>
</div>
<div className="order-1 lg:order-2">
<span className="text-primary text-xs font-medium tracking-widest uppercase mb-6 block">Sobre Nosotros</span>
<h2 className="font-display text-4xl md:text-5xl text-text-dark tracking-tight mb-8">Excelencia estética con <span className="italic text-primary">enfoque médico</span></h2>
<p className="text-text-main font-light leading-relaxed mb-6">
                        Divanna Beauty Center nace desde la visión de que la medicina estética debe respetar la esencia de cada persona. Nos alejamos de las transformaciones artificiales.
                    </p>
<p className="text-text-main font-light leading-relaxed mb-12">
                        Creamos planes personalizados donde la ciencia, la tecnología y el cuidado consciente se unen para realzar tu belleza natural, priorizando siempre la salud de tu piel.
                    </p>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-display text-lg text-text-dark mb-1">Seguridad Médica</h4>
<p className="text-sm text-text-main font-light">Protocolos estrictos y productos certificados de alta gama.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-display text-lg text-text-dark mb-1">Resultados Orgánicos</h4>
<p className="text-sm text-text-main font-light">Mejoras sutiles que armonizan con tu anatomía natural.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
<iconify-icon icon="solar:star-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-display text-lg text-text-dark mb-1">Atención Boutique</h4>
<p className="text-sm text-text-main font-light">Tiempo dedicado exclusivamente a ti, sin prisas.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-secondary/30" id="tratamientos">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="">
<span className="text-primary text-xs font-medium tracking-widest uppercase mb-4 block">Nuestros Servicios</span>
<h2 className="font-display text-4xl text-text-dark tracking-tight">Tratamientos <span className="italic text-primary">Destacados</span></h2>
</div>
<p className="text-text-main font-light text-sm max-w-sm">
                    Procedimientos mínimamente invasivos diseñados para restaurar, revitalizar y proteger tu piel.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-surface rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500">
<div className="relative overflow-hidden aspect-[4/3]">
<img alt="PRP" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3094ab9d-9b15-4a18-b823-e671ac4f9c19_800w.png" style={{}}/>
</div>
<div className="p-8">
<h3 className="font-display text-xl text-text-dark mb-2">Rejuvenecimiento con PRP</h3>
<p className="text-text-main text-sm font-light mb-6 leading-relaxed">
                            Estimula la regeneración celular utilizando los factores de crecimiento de tu propio cuerpo.
                        </p>
<a className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-widest hover:gap-3 transition-all font-medium" href="https://wa.me/5219980000000?text=Info%20sobre%20PRP" target="_blank">
                            Agendar Valoración <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-surface rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500">
<div className="relative overflow-hidden aspect-[4/3]">
<img alt="Hollywood Peel" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a9f12ba-82c8-42c3-9810-46f91fa9c5d6_800w.png" style={{}}/>
</div>
<div className="p-8">
<h3 className="font-display text-xl text-text-dark mb-2">Hollywood Peel</h3>
<p className="text-text-main text-sm font-light mb-6 leading-relaxed">
                            Láser de carbón activo para cerrar poros, iluminar la piel y unificar el tono al instante.
                        </p>
<a className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-widest hover:gap-3 transition-all font-medium" href="https://wa.me/5219980000000?text=Info%20sobre%20Hollywood%20Peel" target="_blank">
                            Agendar Valoración <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-surface rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500">
<div className="relative overflow-hidden aspect-[4/3]">
<img alt="PDRN Salmón" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3baefbc-2e26-4499-8b83-4bcfb481720b_800w.png" style={{}}/>
<div className="absolute top-4 left-4 bg-secondary text-text-dark px-3 py-1 text-[10px] font-medium uppercase tracking-widest rounded-full">Trending</div>
</div>
<div className="p-8">
<h3 className="font-display text-xl text-text-dark mb-2">PDRN de Salmón</h3>
<p className="text-text-main text-sm font-light mb-6 leading-relaxed">
                            ADN de alta pureza para reparación profunda de tejidos, hidratación y elasticidad superior.
                        </p>
<a className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-widest hover:gap-3 transition-all font-medium" href="https://wa.me/5219980000000?text=Info%20sobre%20PDRN" target="_blank">
                            Agendar Valoración <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-surface rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500">
<div className="relative overflow-hidden aspect-[4/3]">
<img alt="Aqua Peel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/61702f64-8ee9-41cc-b846-fe46f02d865a_800w.png" style={{}}/>
</div>
<div className="p-8">
<h3 className="font-display text-xl text-text-dark mb-2">Aqua Peel / Limpieza</h3>
<p className="text-text-main text-sm font-light mb-6 leading-relaxed">
                            Hidrodermoabrasión que limpia profundamente, exfolia e hidrata en un solo paso.
                        </p>
<a className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-widest hover:gap-3 transition-all font-medium" href="https://wa.me/5219980000000?text=Info%20sobre%20Aqua%20Peel" target="_blank">
                            Agendar Valoración <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-surface rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500">
<div className="relative overflow-hidden aspect-[4/3]">
<img alt="Dermaplaning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ea4e2f1-42d1-4eac-91d7-aea61c93f4a1_800w.png" style={{}}/>
</div>
<div className="p-8">
<h3 className="font-display text-xl text-text-dark mb-2">Dermaplaning</h3>
<p className="text-text-main text-sm font-light mb-6 leading-relaxed">
                            Exfoliación física que elimina células muertas y vello facial para una piel de seda.
                        </p>
<a className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-widest hover:gap-3 transition-all font-medium" href="https://wa.me/5219980000000?text=Info%20sobre%20Dermaplaning" target="_blank">
                            Agendar Valoración <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-surface rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500">
<div className="relative overflow-hidden aspect-[4/3]">
<img alt="Láser Capilar" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4da7cecc-5e56-4f3f-abe2-0e954a1107d6_800w.png" style={{}}/>
</div>
<div className="p-8">
<h3 className="font-display text-xl text-text-dark mb-2">Láser Capilar</h3>
<p className="text-text-main text-sm font-light mb-6 leading-relaxed">
                            Tecnología avanzada para fortalecer el folículo y estimular el crecimiento del cabello.
                        </p>
<a className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-widest hover:gap-3 transition-all font-medium" href="https://wa.me/5219980000000?text=Info%20sobre%20Laser%20Capilar" target="_blank">
                            Agendar Valoración <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-secondary border-y border-white/50" id="filosofia">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-primary mb-6 animate-pulse" icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
<h2 className="font-display text-4xl md:text-6xl text-text-dark italic leading-tight mb-8">
                “Belleza que trasciende el tiempo”
            </h2>
<p className="text-text-main font-light text-lg leading-relaxed max-w-2xl mx-auto">
                No buscamos cambios drásticos. Activamos los procesos naturales de la piel para lograr resultados armónicos, saludables y duraderos.
            </p>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<span className="text-primary text-xs font-medium tracking-widest uppercase mb-4 block">Resultados</span>
<h2 className="font-display text-4xl text-text-dark tracking-tight mb-6">Resultados naturales, sin perder tu <span className="text-primary italic">esencia</span>.</h2>
<p className="text-text-main font-light leading-relaxed mb-8">
                        Cada rostro cuenta una historia única. Nuestros tratamientos están diseñados para refrescar y rejuvenecer, manteniendo la expresividad que te hace ser tú.
                    </p>
<div className="inline-block px-4 py-2 bg-secondary/50 rounded-lg text-xs text-text-main font-medium uppercase tracking-wider">
                        * Cada tratamiento es 100% personalizado
                    </div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="Piel Textura" className="w-full h-64 object-cover rounded-2xl shadow-soft translate-y-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef060480-7497-4cf0-b0d9-9c22383b1fb9_800w.png"/>
<img alt="Piel Sana" className="w-full h-64 object-cover rounded-2xl shadow-soft" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd748917-e2d7-4d01-a986-4831e83943b0_800w.png" style={{}}/>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="testimonios">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-primary text-xs font-medium tracking-widest uppercase mb-4 block">Experiencias</span>
<h2 className="font-display text-4xl text-text-dark tracking-tight">Lo que dicen nuestras <span className="italic text-primary">pacientes</span></h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-background p-8 rounded-2xl shadow-sm border border-secondary/50">
<div className="flex text-primary mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-text-main font-light italic mb-6">"La atención es inigualable. Me encantó que se tomaron el tiempo de explicarme todo. Mi piel nunca se había visto tan luminosa."</p>
<p className="text-text-dark text-xs font-medium uppercase tracking-wider">— Mariana G.</p>
</div>
<div className="bg-background p-8 rounded-2xl shadow-sm border border-secondary/50">
<div className="flex text-primary mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-text-main font-light italic mb-6">"Buscaba algo sutil para mejorar la textura de mi rostro y el resultado fue perfecto. Un lugar elegante y súper profesional."</p>
<p className="text-text-dark text-xs font-medium uppercase tracking-wider">— Andrea L.</p>
</div>
<div className="bg-background p-8 rounded-2xl shadow-sm border border-secondary/50">
<div className="flex text-primary mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-text-main font-light italic mb-6">"Divanna es mi santuario. Los tratamientos faciales son increíbles y el ambiente te relaja desde que entras."</p>
<p className="text-text-dark text-xs font-medium uppercase tracking-wider">— Sofia R.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background relative" id="contacto">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-surface p-10 md:p-16 rounded-3xl shadow-soft relative overflow-hidden border border-secondary">
<div className="absolute top-0 right-0 w-64 h-64 bg-secondary/30 blur-3xl rounded-full pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
<div>
<span className="text-primary text-xs font-medium tracking-widest uppercase mb-4 block">Contacto</span>
<h2 className="font-display text-4xl text-text-dark tracking-tight mb-6">Agenda tu cita</h2>
<p className="text-text-main font-light mb-8">
                            Estamos listos para asesorarte. Escríbenos por WhatsApp para una atención inmediata.
                        </p>
<div className="space-y-6 mb-10">
<div className="flex gap-4 items-start">
<div className="mt-1 text-primary"><iconify-icon icon="solar:map-point-linear" width="22"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-text-dark uppercase tracking-wide mb-1">Ubicación</h4>
<p className="text-text-main text-sm font-light">Av. Bonampak, Edificio Diomeda, Piso 4, Local 402, Cancún</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 text-primary"><iconify-icon icon="solar:clock-circle-linear" width="22"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-text-dark uppercase tracking-wide mb-1">Horarios</h4>
<p className="text-text-main text-sm font-light">L–V 9:00–19:00 · Sábados 10:00–14:00</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col justify-center items-center text-center space-y-6">
<a className="w-full py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium uppercase tracking-widest text-sm rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3" href="https://wa.me/5219980000000?text=Hola,%20quiero%20agendar%20una%20valoraci%C3%B3n%20en%20Divanna%20Beauty%20Center." target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="2" width="24"></iconify-icon>
                            Agenda por WhatsApp
                        </a>
<p className="text-xs text-text-light font-light">Respuesta rápida garantizada</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-surface border-t border-primary/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex flex-col mb-6">
<span className="font-display text-2xl tracking-tight text-text-dark">Divanna</span>
<span className="text-[9px] tracking-[0.2em] uppercase text-primary">Beauty Center</span>
</div>
<p className="text-text-main text-sm font-light leading-relaxed max-w-xs">
                        Medicina estética y bienestar integral en Cancún. Belleza consciente y resultados naturales.
                    </p>
</div>
<div>
<h4 className="text-text-dark text-xs font-medium uppercase tracking-widest mb-6">Explorar</h4>
<ul className="space-y-3 text-sm font-light text-text-main">
<li><a className="hover:text-primary transition-colors" href="#inicio">Inicio</a></li>
<li><a className="hover:text-primary transition-colors" href="#nosotros">Nosotros</a></li>
<li><a className="hover:text-primary transition-colors" href="#tratamientos">Tratamientos</a></li>
<li><a className="hover:text-primary transition-colors" href="#testimonios">Testimonios</a></li>
</ul>
</div>
<div>
<h4 className="text-text-dark text-xs font-medium uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-3 text-sm font-light text-text-main">
<li><a className="hover:text-primary transition-colors" href="#">Aviso de Privacidad</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Términos y Condiciones</a></li>
</ul>
</div>
</div>
<div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-text-light uppercase tracking-wider">© 2024 Divanna Beauty Center. Todos los derechos reservados.</p>
<div className="flex gap-6">
<a className="text-text-light hover:text-primary transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-text-light hover:text-primary transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
