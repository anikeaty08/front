import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Set dynamic year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Header Scroll Effect
        const mainNav = document.getElementById('main-nav');
        const navContainer = document.getElementById('nav-container');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Scrolled state
                mainNav.classList.replace('bg-white/95', 'bg-white/50');
                mainNav.classList.add('backdrop-blur-md', 'shadow-sm', 'border-transparent');
                mainNav.classList.remove('border-slate-200/60');
                navContainer.classList.replace('h-20', 'h-16');
            } else {
                // Top state
                mainNav.classList.replace('bg-white/50', 'bg-white/95');
                mainNav.classList.remove('backdrop-blur-md', 'shadow-sm', 'border-transparent');
                mainNav.classList.add('border-slate-200/60');
                navContainer.classList.replace('h-16', 'h-20');
            }
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(element => {
            observer.observe(element);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/95 border-b border-slate-200/60 animate-fade-in-load transition-all duration-300" id="main-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between transition-all duration-300" id="nav-container">

<a className="flex items-center gap-2 group" href="#inicio">
<div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white transition-transform group-hover:scale-105">
<iconify-icon className="text-xl" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tighter text-slate-900">DR. MÁRQUEZ</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#inicio">Inicio</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#sobre">Sobre mí</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#servicios">Servicios</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#opiniones">Opiniones</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#contacto">Contacto</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contacto">
                    Reservar turno
                </a>
<button className="md:hidden text-slate-900 p-2 focus:outline-none" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-slate-200/60 px-6 py-4 flex-col gap-4" id="mobile-menu">
<a className="mobile-link text-sm font-medium text-slate-600 block py-2" href="#inicio">Inicio</a>
<a className="mobile-link text-sm font-medium text-slate-600 block py-2" href="#sobre">Sobre mí</a>
<a className="mobile-link text-sm font-medium text-slate-600 block py-2" href="#servicios">Servicios</a>
<a className="mobile-link text-sm font-medium text-slate-600 block py-2" href="#opiniones">Opiniones</a>
<a className="mobile-link text-sm font-medium text-slate-600 block py-2" href="#contacto">Contacto</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-screen flex items-center" id="inicio">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative w-full">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm mb-8 animate-fade-up-load">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Especialista en Cirugía General</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6 animate-fade-up-load delay-100">
                        Precisión, experiencia y cuidado en cada intervención.
                    </h1>
<p className="text-base md:text-lg text-slate-500 mb-10 leading-relaxed animate-fade-up-load delay-200 max-w-xl">
                        Más de 15 años brindando soluciones médicas de alta complejidad. Un enfoque integral centrado en la seguridad, recuperación y el bienestar humano de cada paciente.
                    </p>

<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up-load delay-300">
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-slate-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" href="#contacto">
                            Reservar turno
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-100 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-emerald-100 transition-colors duration-300 group" href="https://wa.me/1234567890?text=Hola,%20quiero%20solicitar%20un%20turno" target="_blank">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                            Consultar por WhatsApp
                        </a>
</div>

<div className="mt-14 pt-8 border-t border-slate-200/60 grid grid-cols-3 gap-6 animate-fade-up-load delay-400">
<div className="flex flex-col gap-1">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">+15</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Años de exp.</span>
</div>
<div className="flex flex-col gap-1 border-l border-slate-200/60 pl-6">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">4k</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Pacientes</span>
</div>
<div className="flex flex-col gap-1 border-l border-slate-200/60 pl-6">
<div className="flex items-center gap-1 text-yellow-400 mb-1">
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Excelencia</span>
</div>
</div>
</div>

<div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none animate-fade-in-load delay-200">
<div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-2xl shadow-slate-200/50">
<img alt="Dr. Márquez en consultorio" className="absolute inset-0 w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
</div>

<div className="absolute -left-6 lg:-left-12 bottom-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-white flex items-center gap-4 animate-fade-up-load delay-400">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 tracking-tight">Atención Premium</p>
<p className="text-xs text-slate-500 mt-0.5">Certificación Nacional</p>
</div>
</div>
<div className="absolute -right-4 top-12 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-lg shadow-slate-200/50 border border-white flex items-center gap-3 animate-fade-up-load delay-300">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
</span>
<p className="text-xs font-medium text-slate-700">Turnos disponibles esta semana</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="sobre">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 relative rounded-[2rem] overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] reveal">
<img alt="Dr. Márquez operando" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-slate-900/10 rounded-[2rem]"></div>
</div>

<div className="order-1 lg:order-2 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Compromiso absoluto con la salud y bienestar.</h2>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
                        Soy el Dr. Alejandro Márquez, médico cirujano especializado en procedimientos mínimamente invasivos. Mi filosofía de trabajo se basa en combinar la más alta precisión técnica con una profunda empatía humana.
                    </p>
<p className="text-base text-slate-500 mb-10 leading-relaxed">
                        Cada paciente recibe una evaluación detallada, honesta y personalizada, asegurando que comprendan cada etapa de su tratamiento. Mi objetivo no es solo curar, sino acompañar en el proceso de recuperación con el mayor nivel de cuidado y respeto.
                    </p>

<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
<iconify-icon className="text-blue-600 text-lg" icon="solar:diploma-verified-linear" strokeWidth="1.5"></iconify-icon>
</div>
                            Jefe de Cirugía, Hospital Universitario (2018-Actual)
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
<iconify-icon className="text-blue-600 text-lg" icon="solar:medal-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
                            Especialización en Cirugía Laparoscópica Avanzada
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
<iconify-icon className="text-blue-600 text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
                            Miembro activo de la Asociación Argentina de Cirugía
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="servicios">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-sm font-semibold text-blue-600 tracking-tight uppercase">Áreas de Especialidad</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mt-3 mb-4">Servicios Médicos</h2>
<p className="text-base text-slate-500">Prácticas quirúrgicas y clínicas de vanguardia enfocadas en una recuperación rápida, segura y efectiva.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 reveal">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-3xl" icon="solar:stethoscope-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Consultas Clínicas</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Evaluación integral pre-quirúrgica, diagnóstico preciso y planificación detallada del tratamiento a seguir.
                    </p>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 reveal">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-3xl" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Cirugías Programadas</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Intervenciones quirúrgicas generales, con énfasis en técnicas laparoscópicas y mínimamente invasivas.
                    </p>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 reveal">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-3xl" icon="solar:clipboard-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Control y Seguimiento</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Acompañamiento cercano durante todo el proceso post-operatorio garantizando una recuperación óptima.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative border-y border-slate-100" id="opiniones">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Lo que dicen mis pacientes.</h2>
<p className="text-base text-slate-500">Historias reales de confianza, profesionalismo y recuperación exitosa.</p>
</div>
<div className="flex items-center gap-1 text-slate-900 font-semibold text-lg">
                    4.9/5 <iconify-icon className="text-yellow-400 ml-1" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/60 reveal">
<div className="flex items-center gap-1 text-yellow-400 mb-6">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-base text-slate-700 leading-relaxed mb-6">
                        "El doctor me transmitió muchísima tranquilidad desde la primera consulta. La operación de vesícula fue un éxito y la recuperación mucho más rápida de lo que esperaba. Excelente profesional."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-semibold text-sm">
                            MR
                        </div>
<div>
<p className="text-sm font-semibold text-slate-900">María Rodríguez</p>
<p className="text-xs text-slate-500">Paciente quirúrgico</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/60 reveal">
<div className="flex items-center gap-1 text-yellow-400 mb-6">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-base text-slate-700 leading-relaxed mb-6">
                        "Destaco la calidad humana del Dr. Márquez. Me explicó todo el procedimiento de mi hernia con dibujos y paciencia. Me sentí contenido en todo momento y el seguimiento post-operatorio fue de 10."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-semibold text-sm">
                            JP
                        </div>
<div>
<p className="text-sm font-semibold text-slate-900">Javier Pérez</p>
<p className="text-xs text-slate-500">Paciente quirúrgico</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/60 reveal">
<div className="flex items-center gap-1 text-yellow-400 mb-6">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-base text-slate-700 leading-relaxed mb-6">
                        "Fui por una segunda opinión y decidí operarme con él. Instalaciones impecables, equipo médico de primer nivel y un resultado estético en la incisión que casi no se nota. Muy agradecida."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-semibold text-sm">
                            LG
                        </div>
<div>
<p className="text-sm font-semibold text-slate-900">Lucía Gómez</p>
<p className="text-xs text-slate-500">Paciente quirúrgico</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative">
<div className="max-w-3xl mx-auto px-6 reveal">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight text-center mb-12">Preguntas Frecuentes</h2>
<div className="space-y-4">

<details className="group bg-white border border-slate-200/60 rounded-2xl overflow-hidden cursor-pointer">
<summary className="flex items-center justify-between p-6 text-sm font-medium text-slate-900 outline-none select-none">
                        ¿Atienden con obras sociales o prepagas?
                        <iconify-icon className="faq-icon text-xl text-slate-400 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                        Sí, trabajamos con la mayoría de las prepagas y obras sociales de primera línea. Te recomendamos contactarnos por WhatsApp con una foto de tu credencial para verificar la cobertura exacta.
                    </div>
</details>

<details className="group bg-white border border-slate-200/60 rounded-2xl overflow-hidden cursor-pointer">
<summary className="flex items-center justify-between p-6 text-sm font-medium text-slate-900 outline-none select-none">
                        ¿Cómo es el proceso de recuperación de una cirugía laparoscópica?
                        <iconify-icon className="faq-icon text-xl text-slate-400 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                        Al ser mínimamente invasiva, la recuperación suele ser mucho más rápida. La mayoría de los pacientes reciben el alta en 24 horas y pueden retomar sus actividades cotidianas ligeras en una semana. El seguimiento es continuo y personalizado.
                    </div>
</details>

<details className="group bg-white border border-slate-200/60 rounded-2xl overflow-hidden cursor-pointer">
<summary className="flex items-center justify-between p-6 text-sm font-medium text-slate-900 outline-none select-none">
                        ¿Puedo tener una videoconsulta previa?
                        <iconify-icon className="faq-icon text-xl text-slate-400 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                        Sí, ofrecemos videoconsultas para primeras evaluaciones, revisión de estudios médicos o pacientes que se encuentran lejos. Sin embargo, antes de cualquier intervención quirúrgica se requiere al menos una cita presencial.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contacto">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative shadow-2xl reveal">

<div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-16 relative z-10">

<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Iniciá tu camino hacia una mejor salud.</h2>
<p className="text-base text-slate-400 mb-10 leading-relaxed max-w-md">
                            Completá el formulario para solicitar un turno o comunicate directamente a través de nuestro canal de WhatsApp para una respuesta inmediata.
                        </p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-slate-300">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Consultorio Médico Premium</p>
<p className="text-sm">Av. del Libertador 1234, Piso 5, CABA</p>
</div>
</div>
<div className="flex items-center gap-4 text-slate-300">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Línea directa</p>
<p className="text-sm">+54 11 1234-5678</p>
</div>
</div>
</div>
<a className="mt-12 w-full inline-flex justify-center items-center gap-2 bg-emerald-500 text-white px-7 py-4 rounded-2xl text-sm font-medium hover:bg-emerald-400 transition-colors duration-300 group" href="https://wa.me/1234567890?text=Hola,%20quiero%20solicitar%20un%20turno" target="_blank">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:whatsapp-linear"></iconify-icon>
                            Solicitar turno por WhatsApp
                        </a>
</div>

<div className="bg-white rounded-3xl p-8">
<form className="space-y-5 flex flex-col h-full justify-between" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Nombre completo</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-3.5 outline-none transition-all" placeholder="Ej. Juan Pérez" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Teléfono</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-3.5 outline-none transition-all" placeholder="Código de área + número" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Mensaje o Motivo de consulta</label>
<textarea className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-3.5 outline-none transition-all resize-none" placeholder="Cuentame brevemente el motivo de tu consulta..." rows="3"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-medium text-sm rounded-xl px-5 py-4 hover:bg-slate-800 transition-colors mt-2" type="submit">
                                Enviar solicitud
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200/60">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">

<div className="md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#inicio">
<div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-white">
<iconify-icon className="text-sm" icon="solar:health-linear"></iconify-icon>
</div>
<span className="font-semibold text-base tracking-tighter text-slate-900">DR. MÁRQUEZ</span>
</a>
<p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                        Comprometidos con brindar atención médica de excelencia, segura y centrada en el paciente. 
                    </p>
</div>

<div>
<h4 className="font-semibold text-sm text-slate-900 mb-4 tracking-tight">Navegación</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#inicio">Inicio</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#sobre">Sobre mí</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#servicios">Servicios</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#opiniones">Opiniones</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-sm text-slate-900 mb-4 tracking-tight">Legal</h4>
<ul className="space-y-3 mb-6">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacidad</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Términos</a></li>
</ul>
<div className="flex items-center gap-3">
<a className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-200/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">
                    © <span id="year"></span> Dr. Alejandro Márquez. Todos los derechos reservados.
                </p>
<p className="text-xs text-slate-400">
                    M.N. 123456 | M.P. 654321
                </p>
</div>
</div>
</footer>



    </>
  );
}
