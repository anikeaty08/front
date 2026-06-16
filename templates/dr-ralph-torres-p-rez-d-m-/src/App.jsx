import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
surface: '#F8FAFC',
surfaceHighlight: '#F1F5F9',
primary: '#0F62FE', // Professional Medical Blue
primaryDark: '#0043CE',
accent: '#3DD6E7', // Cyan accent for hygiene/freshness
dark: '#0F172A',
darkText: '#1E293B',
muted: '#64748B',
border: '#E2E8F0',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Poppins', 'sans-serif'],
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(15, 98, 254, 0.1)',
'lift': '0 20px 40px -15px rgba(15, 98, 254, 0.15)',
}
}
}
}



        // Reveal Animation Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm', 'bg-white/95');
                nav.classList.remove('bg-white/80');
            } else {
                nav.classList.remove('shadow-sm', 'bg-white/95');
                nav.classList.add('bg-white/80');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-border transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:health-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-heading font-bold text-base lg:text-lg leading-tight text-dark">Dr. Ralph Torres Pérez D.M.D</span>
<span className="text-[10px] uppercase tracking-widest text-muted font-medium">Odontología Estética</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
<a className="hover:text-primary transition-colors" href="#inicio">Inicio</a>
<a className="hover:text-primary transition-colors" href="#servicios">Servicios</a>
<a className="hover:text-primary transition-colors" href="#equipo">Equipo</a>
<a className="hover:text-primary transition-colors" href="#contacto">Contacto</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-xs font-semibold text-muted hover:text-dark px-3 py-1 rounded-full border border-border hover:border-dark transition-all" href="index-en.html">
                    EN / ES
                </a>
<a className="bg-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary transition-colors shadow-lg shadow-dark/10 flex items-center gap-2" href="tel:7877896400">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    787.789.6400
                </a>
</div>

<button className="md:hidden text-dark p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white border-b border-border p-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-lg font-medium text-dark" href="#inicio">Inicio</a>
<a className="text-lg font-medium text-dark" href="#servicios">Servicios</a>
<a className="text-lg font-medium text-dark" href="#equipo">Equipo</a>
<a className="bg-primary text-white text-center py-3 rounded-lg font-medium mt-2" href="tel:7877896400">Llamar Ahora</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="inicio">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white -z-10"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-semibold mb-6 tracking-wide uppercase">
<iconify-icon icon="solar:verified-check-linear" width="14"></iconify-icon>
                    Certificado en Puerto Rico
                </div>
<h1 className="font-heading font-semibold text-4xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-dark">
                    Implantes Dentales y <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Odontología Estética</span>
</h1>
<p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
                    Restauramos y rejuvenecemos tu sonrisa por medio de implantes dentales, resinas, coronas dentales, blanqueamiento y todo tipo de procedimientos generales.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-primary text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primaryDark transition-all shadow-soft flex items-center justify-center gap-2 group" href="#contacto">
                        Solicitar Cita 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="bg-white border border-border text-darkText px-8 py-3.5 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all shadow-sm text-center" href="#servicios">
                        Nuestros Servicios
                    </a>
</div>
</div>
<div className="relative reveal delay-100">
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
<img alt="Implantes dentales" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" src="https://www.dentistaralphtorres.com/img/hero-implantes-dentales-dentista-estetico-1200.jpg"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-border flex items-center gap-4 animate-bounce-slow hidden md:flex">
<div className="bg-green-100 text-green-600 p-3 rounded-xl">
<iconify-icon icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-muted uppercase font-bold">Horario</p>
<p className="text-sm font-semibold text-dark">Lunes - Viernes: 8am - 5pm</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="servicios">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
<div className="order-2 lg:order-1 relative reveal">
<img alt="Clínica Dental" className="rounded-2xl shadow-lg w-full object-cover h-[400px]" src="https://www.dentistaralphtorres.com/img/nosotros-bienvenidos.jpg"/>
<div className="absolute -z-10 top-6 left-6 w-full h-full border-2 border-primary/20 rounded-2xl"></div>
</div>
<div className="order-1 lg:order-2 reveal delay-100">
<h2 className="font-heading font-semibold text-3xl lg:text-4xl text-dark mb-6">Bienvenidos a nuestra clínica</h2>
<p className="text-muted leading-relaxed mb-6">
                        En nuestra oficina estamos comprometidos a brindar a cada uno de nuestros pacientes los servicios y el trato de calidad que merecen para conseguir y mantener una salud oral duradera.
                    </p>
<p className="text-muted leading-relaxed">
                        Todos nuestros procedimientos odontológicos, ya sean generales o estéticos, se realizan con materiales de la mejor calidad y con el equipo más preciso y avanzado tecnológicamente.
                    </p>
</div>
</div>

<div className="mb-16">
<h3 className="font-heading font-semibold text-2xl text-center mb-10 text-dark">Las ventajas de nuestra clínica</h3>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-surface border border-transparent hover:border-primary/20 hover:bg-surfaceHighlight transition-all reveal">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary mb-4">
<iconify-icon icon="solar:user-heart-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-dark mb-2">Trato Amable</h4>
<p className="text-sm text-muted">Quedarás complacido con el trato amable y profesional de todo nuestro personal.</p>
</div>

<div className="p-6 rounded-2xl bg-surface border border-transparent hover:border-primary/20 hover:bg-surfaceHighlight transition-all reveal delay-100">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary mb-4">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-dark mb-2">Higiene Estricta</h4>
<p className="text-sm text-muted">Trabajamos bajo los más estrictos estándares de higiene y esterilización.</p>
</div>

<div className="p-6 rounded-2xl bg-surface border border-transparent hover:border-primary/20 hover:bg-surfaceHighlight transition-all reveal delay-200">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary mb-4">
<iconify-icon icon="solar:monitor-camera-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-dark mb-2">Tecnología</h4>
<p className="text-sm text-muted">Contamos con los equipos más al día en la industria dental.</p>
</div>

<div className="p-6 rounded-2xl bg-surface border border-transparent hover:border-primary/20 hover:bg-surfaceHighlight transition-all reveal delay-300">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary mb-4">
<iconify-icon icon="solar:clipboard-check-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-dark mb-2">Evaluación</h4>
<p className="text-sm text-muted">Hacemos una evaluación minuciosa antes de cada rehabilitación oral.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight relative" id="equipo">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Nuestro Equipo</span>
<h2 className="font-heading font-semibold text-3xl lg:text-4xl text-dark">Especialistas en su Sonrisa</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-lift transition-all duration-300 group reveal">
<div className="h-64 overflow-hidden relative">
<img alt="Dr. Ralph Torres" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://www.dentistaralphtorres.com/img/dr-ralph-torres.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<span className="text-white text-sm font-medium">30+ Años de Experiencia</span>
</div>
</div>
<div className="p-6">
<h3 className="font-heading font-bold text-xl text-dark mb-1">Dr. Ralph Torres Pérez D.M.D</h3>
<p className="text-primary text-sm font-medium mb-4">Dentista Estético y Cirujano</p>
<p className="text-sm text-muted leading-relaxed mb-4 line-clamp-4 hover:line-clamp-none transition-all">
                            Graduado de la Escuela de Medicina Dental (UPR) en 1986. Especializado en rehabilitación oral, implantes dentales, resinas y coronas. Miembro del Colegio de Cirujanos Dentistas.
                        </p>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-lift transition-all duration-300 group reveal delay-100">
<div className="h-64 overflow-hidden relative">
<img alt="Dra. Ana Delatorre" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://www.dentistaralphtorres.com/img/dra-ana-de-la-torre.jpg"/>
</div>
<div className="p-6">
<h3 className="font-heading font-bold text-xl text-dark mb-1">Dra. Ana Delatorre</h3>
<p className="text-primary text-sm font-medium mb-4">Odontóloga General</p>
<p className="text-sm text-muted leading-relaxed mb-4 line-clamp-4 hover:line-clamp-none transition-all">
                            Destacada profesional con amplia trayectoria. Doctorado en Odontología General de la UPR. Más de 30 años brindando servicio de excelencia y atención personalizada.
                        </p>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-lift transition-all duration-300 group reveal delay-200">
<div className="h-64 overflow-hidden relative">
<img alt="Dra. Nicole Rivera" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://www.dentistaralphtorres.com/img/dra-nicole-rivera.jpg"/>
</div>
<div className="p-6">
<h3 className="font-heading font-bold text-xl text-dark mb-1">Dra. Nicole Rivera</h3>
<p className="text-primary text-sm font-medium mb-4">Odontóloga General</p>
<p className="text-sm text-muted leading-relaxed mb-4 line-clamp-4 hover:line-clamp-none transition-all">
                            Obtuvo su título de DMD en el Recinto de Ciencias Médicas (UPR) y completó residencia en la Universidad Estatal de Luisiana. Comprometida en servirle a usted y su familia.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-border">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="font-heading font-semibold text-2xl text-dark mb-8">Aceptamos los siguientes planes médicos</h2>
<div className="p-4 rounded-xl border border-border bg-surface inline-block">
<img alt="Planes Medicos" className="max-w-full h-auto mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity" src="https://www.dentistaralphtorres.com/img/planes-medicos-1200.jpg"/>
</div>
</div>
</section>

<section className="py-24 bg-surface relative" id="contacto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12">

<div className="reveal">
<h2 className="font-heading font-semibold text-3xl text-dark mb-4">Contacta nuestra oficina</h2>
<p className="text-muted mb-8">Llámanos para una cita o envíanos un mensaje usando el formulario.</p>
<div className="space-y-6">

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-primary shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-dark">Ubicación</h4>
<p className="text-sm text-muted">Ave. Esmeralda A-1, Esq. Arpegio<br/>Highland Gardens, Guaynabo, PR 00969</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-primary shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-dark">Teléfono</h4>
<a className="text-sm text-muted hover:text-primary transition-colors" href="tel:7877896400">787.789.6400</a>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-primary shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-dark">Horario</h4>
<p className="text-sm text-muted">Lun - Vie: 8:00 AM - 5:00 PM</p>
<p className="text-sm text-muted">Sábados alternos: 8:00 AM - 12:00 MD</p>
</div>
</div>
</div>

<a className="block mt-8 rounded-2xl overflow-hidden border border-border shadow-sm group relative h-48" href="https://www.google.com/maps/place/Dr.+Ralph+Torres+P%C3%A9rez+D.M.D/@18.3729101,-66.1066855,15.81z" target="_blank">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.dentistaralphtorres.com/img/map-1200.jpg"/>
<div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors flex items-center justify-center">
<span className="bg-white text-dark px-4 py-2 rounded-lg text-xs font-bold shadow-lg flex items-center gap-2">
<iconify-icon icon="solar:map-arrow-square-linear" width="16"></iconify-icon> Abrir Google Maps
                            </span>
</div>
</a>
</div>

<div className="bg-white p-8 rounded-3xl shadow-xl shadow-primary/5 border border-border reveal delay-100">
<form className="space-y-6" onsubmit="event.preventDefault(); document.getElementById('success-msg').classList.remove('hidden'); this.classList.add('hidden');">
<div className="grid md:grid-cols-2 gap-6">
<div className="input-group">
<input className="input-field" id="name" name="name" placeholder=" " required="" type="text"/>
<label className="input-label" htmlFor="name">Nombre</label>
</div>
<div className="input-group">
<input className="input-field" id="phone" name="phone" placeholder=" " required="" type="tel"/>
<label className="input-label" htmlFor="phone">Teléfono</label>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="input-group">
<input className="input-field" id="email" name="email" placeholder=" " required="" type="email"/>
<label className="input-label" htmlFor="email">Email</label>
</div>
<div className="input-group">
<input className="input-field" id="zipcode" name="zipcode" placeholder=" " type="text"/>
<label className="input-label" htmlFor="zipcode">Zipcode</label>
</div>
</div>
<div className="input-group">
<textarea className="input-field" id="message" name="message" placeholder=" " required="" rows="4"></textarea>
<label className="input-label" htmlFor="message">Mensaje</label>
</div>
<button className="w-full bg-primary text-white font-medium py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primaryDark transition-all flex items-center justify-center gap-2" type="submit">
                            Enviar Mensaje <iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</button>
</form>

<div className="hidden text-center py-10" id="success-msg">
<div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:check-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-dark">¡Mensaje Enviado!</h3>
<p className="text-muted text-sm mt-2">Gracias por contactarnos. Nos comunicaremos con usted a la brevedad posible.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-dark pt-20 pb-10 text-white/80 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<div className="flex items-center gap-2 mb-8">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:health-linear" width="20"></iconify-icon>
</div>
<span className="font-heading font-semibold text-xl text-white">Dr. Ralph Torres Pérez D.M.D</span>
</div>
<div className="flex gap-6 mb-8">
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors" href="https://www.facebook.com/dentistaralphtorres/" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors" href="https://www.instagram.com/dentistaralphtorres/" target="_blank">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 flex items-center justify-center transition-colors" href="https://wa.me/17879790302" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</a>
</div>
<div className="text-center text-sm text-white/40 border-t border-white/10 pt-8 w-full">
<p>© 2023 Dr. Ralph Torres Pérez D.M.D. Todos los derechos reservados.</p>
<p className="mt-2">Diseño original basado en Garcia Santiago.</p>
</div>
</div>
</footer>


    </>
  );
}
