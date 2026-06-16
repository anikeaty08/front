import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Element-by-element Scroll Animation
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('is-visible');
                        }, index * 50); 
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const scrollElements = document.querySelectorAll('.reveal-on-scroll');
            scrollElements.forEach((el) => observer.observe(el));
        });

        // Testimonial Rotation
        let currentIndex = 0;
        const cards = document.querySelectorAll('.testimonial-card');
        const totalCards = cards.length;

        function updateClasses() {
            cards.forEach((card, index) => {
                card.classList.remove('active');
                
                if (index === currentIndex) {
                    card.classList.add('active');
                }
            });
        }

        window.rotateTestimonial = (direction) => {
            if (direction === 'next') {
                currentIndex = (currentIndex + 1) % totalCards;
            } else {
                currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            }
            updateClasses();
        };

        // Auto rotate
        setInterval(() => {
            rotateTestimonial('next');
        }, 6000);

        updateClasses();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<div className="vertical-lines">
<div></div>
<div></div>
<div></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/[0.03] blur-[100px] rounded-full"></div>
</div>

<nav className="fixed z-50 backdrop-blur-xl border-b bg-[#020202]/80 transition-all duration-300 w-full top-0 border-white/5">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer z-10">
<div className="relative w-8 h-8 flex items-center justify-center">
<iconify-icon height="24" icon="solar:home-angle-linear" style={{strokeWidth: '1.5', color: 'currentColor'}} width="24"></iconify-icon>
</div>
<span className="font-semibold text-slate-50 tracking-tight font-sans" style={{}}>SLJ Cerrajería</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium z-10 text-emerald-400" style={{}}>
<a className="transition-colors hover:text-white font-sans" href="#services" style={{}}>Servicios</a>
<a className="transition-colors hover:text-white font-sans" href="#gallery" style={{}}>Especialidades</a>
<a className="transition-colors hover:text-white font-sans" href="#contact" style={{}}>Contacto</a>
</div>
<a className="hidden md:flex items-center btn-gradient-border group z-10" href="tel:917762688">
<div className="btn-inner group-hover:bg-emerald-900 transition-colors text-xs font-semibold text-white tracking-wide bg-black pt-1.5 pr-4 pb-1.5 pl-4" role="button">
                    Llamar Ahora
                </div>
</a>
<button className="md:hidden z-10 text-white" style={{}}>
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
<div className="relative z-10 max-w-4xl mx-auto text-center">

<div className="clip-animate flex justify-center mb-10">
<div className="inline-flex rounded-full border backdrop-blur-md px-3 py-1 border-white/10 bg-white/5">
<div className="flex items-center gap-2">
<iconify-icon className="text-white" height="14" icon="solar:star-shine-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<span className="text-xs font-medium tracking-wide uppercase text-emerald-300 font-sans" style={{}}>Madrid y Corredor del Henares</span>
</div>
</div>
</div>

<h1 className="clip-animate delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-8 leading-[1.05] drop-shadow-2xl">
<span className="text-gradient font-newsreader font-light" style={{}}>Vaciado de Pisos.</span>
</h1>

<p className="clip-animate delay-200 md:text-xl leading-relaxed text-lg font-normal text-emerald-400 max-w-2xl mr-auto mb-12 ml-auto font-sans" style={{}}>Somos SLJ Cerrajería y Mudanzas. Más de 15 años de experiencia en vaciado de inmuebles, desahucios, mudanzas y cerrajería. Precios finales sin sorpresas, ¡pónganos a prueba!</p>

<div className="clip-animate delay-300 flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="group btn-gradient-border p-[1px] cursor-pointer" href="tel:917762688">
<div className="btn-inner group-hover:shadow-[0_0_40px_-5px_#10b981] group-hover:bg-emerald-100 transition-all duration-300 text-sm font-medium text-black bg-white pt-4 pr-8 pb-4 pl-8 shadow-[0_0_30px_-5px_#10b981]">
                        Contactar
                        <iconify-icon className="ml-2" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</a>
<a className="group btn-gradient-border p-[1px] cursor-pointer" href="#services">
<div className="btn-inner px-8 py-4 text-sm font-medium group-hover:bg-white/10 transition-colors bg-black text-white font-sans" style={{}}>
                        Ver Servicios
                    </div>
</a>
</div>
</div>

<div className="clip-animate delay-500 mt-24 relative w-full max-w-5xl mx-auto h-[300px] md:h-[500px] rounded-3xl z-10 p-[1px] bg-gradient-to-b to-transparent from-white/20">
<div className="w-full h-full rounded-3xl overflow-hidden relative group bg-black">
<img alt="SLJ Cerrajería y Mudanzas" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105 transform" src="https://www.cerrajeriaymudanzas.com/uploads/Z7r96QOr/354x0_555x0/582423-SLJ-servicio-de-lanzamientos-judiciales.jpg"/>
<div className="bg-gradient-to-t from-black/0 via-black/10 to-black/0 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-8 left-8 flex flex-col md:flex-row gap-4">
<div className="backdrop-blur-md border px-4 py-3 rounded-xl flex items-center gap-3 shadow-lg bg-white/5 border-white/10">
<iconify-icon className="text-white" height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-xs font-medium tracking-wide font-sans" style={{}}>15+ Años de Experiencia</span>
</div>
<div className="backdrop-blur-md border px-4 py-3 rounded-xl flex items-center gap-3 shadow-lg bg-white/5 border-white/10">
<iconify-icon className="text-white" height="18" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-xs font-medium tracking-wide font-sans" style={{}}>Precios Sin Sorpresas</span>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-32 pr-6 pb-32 pl-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="max-w-2xl mb-20">
<h2 className="reveal-on-scroll md:text-5xl text-3xl text-white tracking-tight mb-6 font-newsreader font-light" style={{}}>Nuestros Servicios</h2>
<p className="reveal-on-scroll text-lg leading-relaxed text-emerald-400 font-sans" style={{}}>Utilizamos las técnicas, herramientas y maquinarias más innovadoras para una excelente ejecución de todos nuestros proyectos.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="reveal-on-scroll border-gradient rounded-3xl group">
<div className="border-gradient-content p-8">
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 bg-white/5 border-white/5">
<iconify-icon className="text-white" height="24" icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-white font-sans" style={{}}>Vaciado de Inmuebles</h3>
<p className="leading-relaxed text-sm text-emerald-400 font-sans" style={{}}>Realizamos el vaciado completo de pisos, locales, naves y oficinas con rapidez y máxima eficacia en toda la comunidad.</p>
</div>
</div>

<div className="reveal-on-scroll border-gradient rounded-3xl group">
<div className="border-gradient-content p-8">
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 bg-white/5 border-white/5">
<iconify-icon className="text-white" height="24" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-white font-sans" style={{}}>Lanzamientos Judiciales</h3>
<p className="leading-relaxed text-sm text-emerald-400 font-sans" style={{}}>Especialistas en desahucios, actuando con la máxima profesionalidad, rapidez y la discreción que el proceso requiere.</p>
</div>
</div>

<div className="reveal-on-scroll border-gradient rounded-3xl group">
<div className="border-gradient-content p-8">
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 bg-white/5 border-white/5">
<iconify-icon className="text-white" height="24" icon="solar:key-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-white font-sans" style={{}}>Cerrajeros Profesionales</h3>
<p className="leading-relaxed text-sm text-emerald-400 font-sans" style={{}}>Servicios de aperturas, cambios de cerradura y atención personalizada también en nuestra tienda física.</p>
</div>
</div>

<div className="reveal-on-scroll md:col-span-2 border-gradient rounded-3xl group">
<div className="border-gradient-content p-8 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 bg-white/5 border-white/5">
<iconify-icon className="text-white" height="24" icon="solar:box-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-white font-sans" style={{}}>Mudanzas y Guardamuebles</h3>
<p className="leading-relaxed text-sm mb-8 text-emerald-400 font-sans" style={{}}>Traslados seguros de sus pertenencias y soluciones de almacenamiento (trasteros y guardamuebles) a su medida. Fuera de nuestra especialidad judicial, ofrecemos la misma calidad y exigencia.</p>
<a className="text-sm font-medium border-b pb-1 transition-colors inline-flex items-center gap-1 group/link text-white border-white/30 hover:border-white font-sans" href="#gallery" style={{}}>
                                Ver especialidades <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
<div className="w-full md:w-1/2 h-48 md:h-full rounded-xl overflow-hidden relative border border-white/5">
<img alt="Mudanzas y Guardamuebles" className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/276e2d56-e6ef-491d-b4d8-a2c9f056c0d7_800w.jpg"/>
</div>
</div>
</div>

<div className="reveal-on-scroll border-gradient rounded-3xl group">
<div className="border-gradient-content p-8 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 bg-white/5 border-white/5">
<iconify-icon className="text-white" height="24" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-white font-sans" style={{}}>Atención Inmediata</h3>
<p className="leading-relaxed text-sm text-emerald-400 font-sans" style={{}}>Estamos a su disposición en Madrid centro, Corredor del Henares, Madrid sureste y sierra norte. Contáctenos hoy.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 bg-[#020202] pt-32 pr-6 pb-32 pl-6 relative" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end mb-16 justify-between">
<div className="">
<h2 className="reveal-on-scroll md:text-5xl text-3xl text-white tracking-tight mb-4 font-newsreader font-light" style={{}}>Áreas de Actuación</h2>
<p className="reveal-on-scroll text-lg text-emerald-400 font-sans" style={{}}>Dónde prestamos nuestros servicios especializados.</p>
</div>
<div className="reveal-on-scroll flex gap-3 mt-6 md:mt-0">
<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-all border-white/10 hover:bg-white hover:text-black">
<iconify-icon height="16" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-all border-white/10 hover:bg-white hover:text-black">
<iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

<div className="reveal-on-scroll border-gradient rounded-2xl group cursor-pointer aspect-[4/5]">
<div className="border-gradient-content rounded-2xl overflow-hidden relative">
<img alt="Madrid Centro" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9858c7c-f5ac-4970-9d5b-d7dfdfd09923_1600w.png" style={{}}/>
<div className="bg-gradient-to-t via-transparent to-transparent from-black opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[10px] font-bold uppercase tracking-widest mb-2 block text-white/70 font-sans" style={{}}>Servicio Completo</span>
<h3 className="text-xl font-medium text-white font-sans" style={{}}>Madrid Centro</h3>
</div>
</div>
</div>

<div className="reveal-on-scroll border-gradient rounded-2xl group cursor-pointer aspect-[4/5]">
<div className="border-gradient-content rounded-2xl overflow-hidden relative">
<img alt="Corredor del Henares" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e17d7ee1-e0dd-456d-a190-54747753e3af_1600w.png"/>
<div className="bg-gradient-to-t via-transparent to-transparent from-black opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[10px] font-bold uppercase tracking-widest mb-2 block text-white/70 font-sans" style={{}}>Cobertura Total</span>
<h3 className="text-xl font-medium text-white font-sans" style={{}}>Corredor del Henares</h3>
</div>
</div>
</div>

<div className="reveal-on-scroll border-gradient rounded-2xl group cursor-pointer aspect-[4/5]">
<div className="border-gradient-content rounded-2xl overflow-hidden relative">
<img alt="Madrid Sureste y Sierra" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ce227ce-6155-4ff4-8b12-bcf59d1fa6b7_1600w.jpg"/>
<div className="bg-gradient-to-t via-transparent to-transparent from-black opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[10px] font-bold uppercase tracking-widest mb-2 block text-white/70 font-sans" style={{}}>Desplazamiento Rápido</span>
<h3 className="text-xl font-medium text-white font-sans" style={{}}>Sureste y Sierra Norte</h3>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 bg-[#020202] pt-32 pr-6 pb-32 pl-6 relative" id="contact">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="reveal-on-scroll text-3xl md:text-5xl tracking-tight mb-4 text-white font-newsreader font-light" style={{}}>Contacte con Nosotros</h2>
<p className="reveal-on-scroll text-lg text-emerald-400 font-sans" style={{}}>Atención rápida y presupuestos finales sin sorpresas.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-8 gap-y-8 items-start">

<div className="reveal-on-scroll border-gradient rounded-3xl group">
<div className="border-gradient-content pt-8 pr-8 pb-8 pl-8">
<div className="mb-6">
<iconify-icon className="text-white" height="32" icon="solar:phone-bold" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mt-4 font-sans" style={{}}>Líneas Telefónicas</h3>
<p className="text-xs text-emerald-500 h-8 mt-2 font-sans" style={{}}>Disponibles para atención inmediata y urgencias.</p>
</div>
<div className="text-3xl text-white tracking-tight mb-8 font-newsreader font-light" style={{}}>Llámenos</div>
<ul className="space-y-4 mb-8 text-sm text-emerald-300" style={{}}>
<li className="flex items-center gap-3 font-sans" style={{}}>
<iconify-icon className="text-neutral-500" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Oficina: 917 762 688
                            </li>
<li className="flex items-center gap-3 font-sans" style={{}}>
<iconify-icon className="text-neutral-500" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Móvil: 651 684 652
                            </li>
<li className="flex items-center gap-3 font-sans" style={{}}>
<iconify-icon className="text-neutral-500" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Fax: 917 604 983
                            </li>
</ul>
<a className="group btn-gradient-border p-[1px] block text-center" href="tel:917762688">
<div className="btn-inner group-hover:bg-emerald-900 transition-colors text-sm font-medium text-white bg-black pt-3 pb-3 font-sans" style={{}}>Llamar Ahora</div>
</a>
</div>
</div>

<div className="reveal-on-scroll border-gradient rounded-3xl group transform md:-translate-y-4 relative">
<div className="absolute inset-0 bg-gradient-to-b to-transparent rounded-3xl pointer-events-none from-white/10"></div>
<div className="border-gradient-content bg-[#080808] pt-8 pr-8 pb-8 pl-8">
<div className="absolute top-0 right-0 p-5">
<div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" style={{}}></div>
</div>
<div className="mb-6">
<iconify-icon className="text-white" height="32" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-xl font-medium mt-4 text-white font-sans" style={{}}>Nuestras Instalaciones</h3>
<p className="text-xs mt-2 h-8 text-emerald-400 font-sans" style={{}}>Visítenos en nuestras sedes para atención presencial.</p>
</div>
<div className="text-3xl text-white tracking-tight mb-8 font-newsreader font-light" style={{}}>Visítenos</div>
<ul className="space-y-4 mb-8 text-sm text-emerald-300" style={{}}>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start font-sans" style={{}}>
<iconify-icon className="text-emerald-500 mt-1" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5', flexShrink: '0'}} width="16"></iconify-icon>
<span><span className="text-white">Oficinas:</span> Ctra. Rivas del Jarama, km 2,800, 28052, Madrid</span>
</li>
<li className="flex items-start gap-3 font-sans" style={{}}>
<iconify-icon className="text-emerald-500 mt-1" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5', flexShrink: '0'}} width="16"></iconify-icon>
<span><span className="text-white">Tienda Cerrajería:</span> C/ Virgen de las Viñas, 7 local 10, 28031, Madrid</span>
</li>
</ul>
<a className="group btn-gradient-border p-[1px] block text-center mt-auto" href="#">
<div className="btn-inner group-hover:bg-emerald-200 transition-colors text-sm font-medium text-black bg-white pt-3 pb-3 font-sans" style={{}}>Cómo Llegar</div>
</a>
</div>
</div>

<div className="reveal-on-scroll border-gradient rounded-3xl group">
<div className="border-gradient-content p-8">
<div className="mb-6">
<iconify-icon className="text-white" height="32" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-xl font-medium mt-4 text-white font-sans" style={{}}>Vía Email</h3>
<p className="text-emerald-500 text-xs mt-2 h-8 font-sans" style={{}}>Para consultas generales y solicitar presupuestos.</p>
</div>
<div className="text-3xl mb-8 tracking-tight text-white font-newsreader font-light" style={{}}>Escríbanos</div>
<ul className="space-y-4 mb-8 text-sm text-emerald-300" style={{}}>
<li className="flex items-center gap-3 font-sans" style={{}}>
<iconify-icon className="text-neutral-500" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Presupuestos detallados
                            </li>
<li className="flex items-center gap-3 font-sans" style={{}}>
<iconify-icon className="text-neutral-500" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Consultas generales
                            </li>
<li className="flex items-center gap-3 font-sans" style={{}}>
<iconify-icon className="text-neutral-500" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Respuesta rápida
                            </li>
</ul>
<a className="group btn-gradient-border p-[1px] block text-center" href="mailto:slj@cerrajeriaymudanzas.es">
<div className="btn-inner py-3 text-sm font-medium group-hover:bg-emerald-900 transition-colors bg-black text-white font-sans" style={{}}>Enviar Email</div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden py-32 px-6 relative border-y z-10 bg-black/50 border-white/5">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="reveal-on-scroll mb-8">
<iconify-icon className="mx-auto text-white/20" height="40" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<div className="reveal-on-scroll relative h-[300px] w-full flex justify-center items-center">

<div className="testimonial-card active" data-index="0" style={{zIndex: '10'}}>
<h3 className="md:text-4xl text-2xl tracking-tight mb-8 max-w-2xl mx-auto leading-tight text-white font-newsreader font-light" style={{}}>
                        "El vaciado de la nave fue rapidísimo y el trato inmejorable. Muy profesionales y altamente recomendables."
                    </h3>
<div className="flex items-center justify-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold bg-white text-black font-sans" style={{}}>CM</div>
<div className="text-left">
<p className="text-sm font-medium text-white font-sans" style={{}}>Carlos M.</p>
<p className="text-emerald-500 text-xs font-sans" style={{}}>Propietario</p>
</div>
</div>
</div>

<div className="testimonial-card" data-index="1" style={{zIndex: '-1'}}>
<h3 className="md:text-4xl text-2xl tracking-tight mb-8 max-w-2xl mx-auto leading-tight text-white font-newsreader font-light" style={{}}>
                        "Necesitaba un cerrajero de urgencia y acudieron en 20 minutos. El precio final fue exactamente el acordado."
                    </h3>
<div className="flex items-center justify-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold bg-white text-black font-sans" style={{}}>LG</div>
<div className="text-left">
<p className="text-sm font-medium text-white font-sans" style={{}}>Laura G.</p>
<p className="text-emerald-500 text-xs font-sans" style={{}}>Cliente Particular</p>
</div>
</div>
</div>

<div className="testimonial-card" data-index="2" style={{zIndex: '-1'}}>
<h3 className="md:text-4xl text-2xl tracking-tight mb-8 max-w-2xl mx-auto leading-tight text-white font-newsreader font-light" style={{}}>
                        "Hicieron nuestra mudanza al Corredor del Henares. Todo llegó en perfecto estado, fueron puntuales y sin sorpresas."
                    </h3>
<div className="flex items-center justify-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold bg-white text-black font-sans" style={{}}>DS</div>
<div className="text-left">
<p className="text-sm font-medium text-white font-sans" style={{}}>David S.</p>
<p className="text-emerald-500 text-xs font-sans" style={{}}>Cliente Mudanzas</p>
</div>
</div>
</div>
</div>

<div className="reveal-on-scroll flex items-center justify-center gap-4 mt-8">
<button className="group p-2 rounded-full transition-colors hover:bg-white/10" onclick="rotateTestimonial('prev')">
<iconify-icon className="text-white" height="16" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<button className="group p-2 rounded-full transition-colors hover:bg-white/10" onclick="rotateTestimonial('next')">
<iconify-icon className="text-white" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="py-20 px-6 border-t bg-[#020202] relative z-10 border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-white" height="24" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="font-semibold tracking-tight text-xl text-white font-sans" style={{}}>SLJ Cerrajería y Mudanzas</span>
</div>
<p className="text-emerald-500 text-sm leading-relaxed max-w-sm mb-8 font-sans" style={{}}>
                    Especialistas en vaciado de pisos, lanzamientos judiciales, mudanzas y cerrajería en Madrid centro, Corredor del Henares y sierra.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white/5 text-emerald-400 hover:bg-white hover:text-black" href="#" style={{}}>
<iconify-icon height="20" icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white/5 text-emerald-400 hover:bg-white hover:text-black" href="#" style={{}}>
<iconify-icon height="20" icon="solar:twitter-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white/5 text-emerald-400 hover:bg-white hover:text-black" href="#" style={{}}>
<iconify-icon height="20" icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="font-medium mb-6 text-sm text-white font-sans" style={{}}>Nuestros Servicios</h4>
<ul className="space-y-4 text-xs text-emerald-500 font-medium" style={{}}>
<li className=""><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Cerrajeros</a></li>
<li className=""><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Mudanzas</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Lanzamientos Judiciales</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Vaciado de Inmuebles</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Guardamuebles y Trasteros</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6 text-sm text-white font-sans" style={{}}>Empresa</h4>
<ul className="space-y-4 text-xs text-emerald-500 font-medium" style={{}}>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Quiénes somos</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#contact" style={{}}>Contacto</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Aviso Legal</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Política de Privacidad</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-8 border-t text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs border-white/5 text-emerald-600" style={{}}>
<p className="font-sans" style={{}}>© 2025 SLJ Cerrajería y Mudanzas. Todos los derechos reservados.</p>
<p className="font-sans" style={{}}>Designed with precision.</p>
</div>
</footer>


    </>
  );
}
