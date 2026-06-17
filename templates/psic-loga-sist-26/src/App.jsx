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



        // Scroll Reveal Animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-element').forEach((el) => {
            observer.observe(el);
        });

        // Modal Logic
        const modal = document.getElementById('serviceModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDesc = document.getElementById('modalDesc');

        function openModal(title, desc) {
            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeModal() {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }

        // Close modal on click outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
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
      

<nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
<div className="glass-nav flex transition-all duration-300 w-full max-w-5xl rounded-[2rem] pt-3 pr-6 pb-3 pl-6 shadow-sm items-center justify-between">
<a className="text-xl tracking-tighter font-serif text-stone-900 z-50 relative" href="index.html">
                KH.
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="index.html">Inicio</a>
<a className="hover:text-stone-900 transition-colors" href="#sobre-mi">Sobre Mí</a>
<a className="hover:text-stone-900 transition-colors" href="#servicios">Servicios</a>
<a className="hover:text-stone-900 transition-colors" href="testimonios.html">Resultados</a>
<a className="hover:text-stone-900 transition-colors" href="#faq">FAQ</a>
</div>

<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-[#222222] text-white text-xs font-semibold tracking-wide uppercase rounded-full hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="contacto.html">
                Conversa Conmigo
            </a>

<button className="md:hidden text-stone-800 p-1">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center reveal-element is-visible" id="inicio">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-50 border border-stone-100 text-xs font-medium text-stone-500">
<span className="w-2 h-2 rounded-full bg-[#FBC2D1]"></span>
                    Psicología Sistémica &amp; Bienestar
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-stone-900 leading-[1.1] tracking-tight">
                    Transforma tus <span className="italic text-[#dcafb7] font-serif">relaciones</span> y recupera tu calma.
                </h1>
<p className="text-lg md:text-xl font-light text-stone-500 max-w-md leading-relaxed">
                    Un espacio seguro para entender tus emociones, sanar vínculos y construir la vida que mereces vivir.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#FBC2D1] text-stone-900 text-sm font-medium rounded-full hover:bg-[#ffcfdc] transition-all shadow-[0_10px_30px_-10px_rgba(251,194,209,0.6)]" href="contacto.html">
                        Reserva una Sesión
                        <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white border border-stone-200 text-stone-600 text-sm font-medium rounded-full hover:bg-stone-50 transition-all" href="#metodologia">
                        Cómo trabajo
                    </a>
</div>

<div className="pt-8 flex items-center gap-4 text-xs font-medium text-stone-400">
<div className="flex -space-x-2">
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<span>Unidas a más de 150 pacientes</span>
</div>
</div>

<div className="relative order-1 lg:order-2">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-200/50 relative z-10 transition-transform duration-700 hover:scale-[1.02]">
<img alt="Karina Higa Psicóloga" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-[1.5rem] flex items-center gap-4 shadow-lg border border-white/50">
<div className="bg-green-100 p-2 rounded-full text-green-700">
<svg aria-hidden="true" data-icon="lucide:check-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
</div>
<div>
<p className="text-sm font-serif font-medium text-stone-900">Sesiones Online &amp; Presenciales</p>
<p className="text-xs text-stone-500">Agenda flexible</p>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-64 h-64 bg-[#FBC2D1]/20 rounded-full blur-3xl -z-0"></div>
</div>
</div>
</header>

<section className="py-20 bg-stone-50 reveal-element" id="sobre-mi">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
<div className="flex-1 space-y-6">
<span className="uppercase tracking-widest text-xs font-semibold text-stone-400">Sobre Karina Higa</span>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">Más que terapia, un camino hacia tu autodescubrimiento.</h2>
<p className="text-stone-500 font-light leading-relaxed">
                        Con un enfoque sistémico, no solo miro el síntoma, sino todo el contexto que te rodea. Mi objetivo es brindarte herramientas prácticas y profundas para que puedas navegar tus desafíos con claridad y confianza.
                    </p>
<a className="text-stone-900 font-medium text-sm border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors inline-block" href="sobre-mi.html">Conoce mi trayectoria</a>
</div>
<div className="flex-1 w-full grid grid-cols-2 gap-6">
<div className="bg-[#faf7f8] p-8 rounded-[2rem] text-center border border-stone-100">
<span className="block text-5xl font-serif text-[#dcafb7] mb-2">12+</span>
<span className="text-sm font-medium text-stone-600">Años de experiencia</span>
</div>
<div className="bg-[#faf7f8] p-8 rounded-[2rem] text-center border border-stone-100">
<span className="block text-5xl font-serif text-[#dcafb7] mb-2">150+</span>
<span className="text-sm font-medium text-stone-600">Pacientes ayudados</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 max-w-7xl mx-auto reveal-element">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 mb-4 tracking-tight">¿Te identificas con esto?</h2>
<p className="text-stone-500 font-light">
                No tienes que enfrentar estos desafíos en soledad. Identificar el problema es el primer paso para sanar.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

<div className="group bg-white border border-stone-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-stone-100 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-[#FFF0F5] rounded-full flex items-center justify-center text-[#B86E8A] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:message-circle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-serif font-medium text-stone-900 mb-3">Problemas de Comunicación</h3>
<p className="text-sm text-stone-500 leading-relaxed">Dificultad para expresar lo que sientes o entender a tu pareja y familia, creando barreras invisibles.</p>
</div>
<div className="group bg-white border border-stone-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-stone-100 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-[#FFF0F5] rounded-full flex items-center justify-center text-[#B86E8A] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-serif font-medium text-stone-900 mb-3">Estrés y Ansiedad</h3>
<p className="text-sm text-stone-500 leading-relaxed">Sentimiento de agobio constante, pensamientos intrusivos o insomnio que no te dejan descansar.</p>
</div>


<div className="md:col-span-2 group bg-white border border-stone-100 p-8 md:p-10 rounded-[2rem] hover:shadow-xl hover:shadow-stone-100 transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row items-center gap-6">
<div className="flex-shrink-0 w-12 h-12 bg-[#FFF0F5] rounded-full flex items-center justify-center text-[#B86E8A] group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:home" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
<div>
<h3 className="text-lg font-serif font-medium text-stone-900 mb-2">Tensión Familiar Constante</h3>
<p className="text-sm text-stone-500 leading-relaxed max-w-2xl">Conflictos repetitivos que desgastan la armonía en el hogar. Sientes que caminas sobre cáscaras de huevo para evitar la próxima discusión.</p>
</div>
</div>
<div className="md:col-span-2 group bg-white border border-stone-100 p-8 md:p-10 rounded-[2rem] hover:shadow-xl hover:shadow-stone-100 transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row items-center gap-6">
<div className="flex-shrink-0 w-12 h-12 bg-[#FFF0F5] rounded-full flex items-center justify-center text-[#B86E8A] group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:heart-crack" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15"></path><path d="M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677a.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z"></path></g></svg>
</div>
<div>
<h3 className="text-lg font-serif font-medium text-stone-900 mb-2">Crisis de Vida &amp; Duelos</h3>
<p className="text-sm text-stone-500 leading-relaxed max-w-2xl">Momentos de cambio profundo, separaciones o pérdidas que te hacen sentir estancado y sin un norte claro.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-stone-50 rounded-[3rem] reveal-element" id="servicios">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 px-4">
<div>
<span className="uppercase tracking-widest text-xs font-semibold text-stone-400">Mis Servicios</span>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 mt-2 tracking-tight">Áreas de Atención</h2>
</div>
<p className="text-xs text-stone-400 mt-2 md:mt-0 font-light flex items-center gap-1">
<svg aria-hidden="true" data-icon="lucide:mouse-pointer-click" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1L12 6M5.1 8l-2.9-.8M6 12l-1.9 2M7.2 2.2L8 5.1m1.037 4.59a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Haz click en las tarjetas para ver detalles
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-min">

<button className="md:row-span-2 bg-white p-8 rounded-[2rem] flex flex-col justify-between text-left h-full min-h-[320px] hover:bg-[#FBC2D1] transition-all duration-500 group cursor-pointer hover:scale-[1.01] shadow-sm" onclick="openModal('Terapia Individual', 'Un espacio dedicado exclusivamente a ti. Trabajaremos en tu autoconocimiento, gestión emocional y patrones de conducta que deseas transformar. Ideal para ansiedad, autoestima y crecimiento personal.')">
<div className="w-full">
<div className="flex justify-between items-start mb-6">
<div className="bg-stone-50 p-3 rounded-full text-stone-400 group-hover:bg-white/30 group-hover:text-stone-900 transition-colors">
<svg aria-hidden="true" data-icon="lucide:user" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
<svg aria-hidden="true" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-2xl font-serif font-medium text-stone-900 group-hover:text-stone-900 mb-2">Terapia Individual</h3>
<p className="text-sm text-stone-500 group-hover:text-stone-800/80 transition-colors leading-relaxed">Exploración profunda de tu mundo interior para sanar heridas y potenciar tu bienestar.</p>
</div>
<span className="mt-8 text-xs font-semibold uppercase tracking-wide text-stone-400 group-hover:text-stone-900">Ver detalles</span>
</button>

<button className="md:col-span-2 bg-white p-8 rounded-[2rem] flex flex-col md:flex-row justify-between text-left items-start md:items-center min-h-[220px] hover:bg-[#FBC2D1] transition-all duration-500 group cursor-pointer hover:scale-[1.01] shadow-sm" onclick="openModal('Terapia de Pareja', 'Restauramos la conexión y la confianza. A través de técnicas sistémicas, aprenderán a comunicarse efectivamente, resolver conflictos sin herirse y alinear sus proyectos de vida.')">
<div className="flex-1 pr-6">
<div className="flex items-center gap-4 mb-4">
<div className="bg-stone-50 p-3 rounded-full text-stone-400 group-hover:bg-white/30 group-hover:text-stone-900 transition-colors">
<svg aria-hidden="true" data-icon="lucide:users" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-2xl font-serif font-medium text-stone-900 group-hover:text-stone-900">Terapia de Pareja</h3>
</div>
<p className="text-sm text-stone-500 group-hover:text-stone-800/80 transition-colors leading-relaxed">Reconstruye la confianza, mejora la comunicación y fortalece el vínculo afectivo.</p>
</div>
<svg aria-hidden="true" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>

<button className="bg-white p-8 rounded-[2rem] flex flex-col justify-between text-left min-h-[240px] hover:bg-[#FBC2D1] transition-all duration-500 group cursor-pointer hover:scale-[1.01] shadow-sm" onclick="openModal('Duelo y Pérdida', 'El dolor de la pérdida necesita ser validado. Te acompaño en el proceso de duelo para que puedas integrar la experiencia y encontrar un nuevo significado en tu vida.')">
<div>
<div className="flex justify-between items-start mb-4">
<div className="bg-stone-50 p-3 rounded-full text-stone-400 group-hover:bg-white/30 group-hover:text-stone-900 transition-colors">
<svg aria-hidden="true" data-icon="lucide:cloud-sun" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2m-7.07.93l1.41 1.41M20 12h2m-2.93-7.07l-1.41 1.41m-1.713 6.31a4 4 0 0 0-5.925-4.128M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<svg aria-hidden="true" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 group-hover:text-stone-900 mb-2">Duelo y Pérdida</h3>
<p className="text-xs text-stone-500 group-hover:text-stone-800/80 transition-colors">Acompañamiento compasivo para transitar el dolor.</p>
</div>
</button>

<button className="bg-white p-8 rounded-[2rem] flex flex-col justify-between text-left min-h-[240px] hover:bg-[#FBC2D1] transition-all duration-500 group cursor-pointer hover:scale-[1.01] shadow-sm" onclick="openModal('Trastornos Clínicos', 'Abordaje profesional para depresión, ansiedad generalizada, estrés postraumático y otros desafíos de salud mental, siempre desde una mirada humana y científica.')">
<div>
<div className="flex justify-between items-start mb-4">
<div className="bg-stone-50 p-3 rounded-full text-stone-400 group-hover:bg-white/30 group-hover:text-stone-900 transition-colors">
<svg aria-hidden="true" data-icon="lucide:brain-circuit" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
</div>
<svg aria-hidden="true" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 group-hover:text-stone-900 mb-2">Trastornos</h3>
<p className="text-xs text-stone-500 group-hover:text-stone-800/80 transition-colors">Abordaje clínico para ansiedad y desafíos de salud mental.</p>
</div>
</button>
</div>
</section>

<section className="py-24 px-4 md:px-8 max-w-7xl mx-auto reveal-element" id="metodologia">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="aspect-square rounded-[2.5rem] overflow-hidden">
<img alt="Ambiente de terapia" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&amp;w=2064&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-[#FBC2D1] p-8 rounded-[2rem] text-stone-900 max-w-xs shadow-xl hidden md:block">
<svg aria-hidden="true" data-icon="lucide:sparkles" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<p className="text-sm font-medium leading-relaxed">"Un ambiente libre de juicios donde puedes ser tú mismo."</p>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<div>
<span className="uppercase tracking-widest text-xs font-semibold text-stone-400">Metodología</span>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 mt-2 tracking-tight">Claro, Empático y Sin Juicios</h2>
</div>
<p className="text-stone-500 font-light text-lg leading-relaxed">
                    Mi consultorio es un santuario para tu mente. Trabajo bajo estrictos códigos de ética y confidencialidad.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<div className="bg-stone-50 p-2 rounded-xl text-[#B86E8A]">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<h4 className="font-medium text-stone-900">Espacio Seguro</h4>
<p className="text-sm text-stone-500 mt-1 font-light">Confidencialidad absoluta garantizada.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-white border-y border-stone-100 reveal-element" id="testimonios">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">Resultados Reales</h2>
<a className="mt-4 md:mt-0 inline-flex items-center text-sm font-medium text-stone-900 hover:text-[#B86E8A] transition-colors border-b border-stone-200 pb-0.5 hover:border-[#B86E8A]" href="testimonios.html">
                    Ver más testimonios <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#FFF8FA] p-8 rounded-[2rem] border border-[#fcecee]">
<div className="flex text-[#FBC2D1] mb-4 space-x-1">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 italic mb-6 text-sm leading-relaxed">"Karina me ayudó a ver patrones en mi familia que nunca había notado. Gracias a ella, hoy tengo una relación mucho más sana con mis padres."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm font-bold text-[#B86E8A]">LM</div>
<div>
<p className="text-sm font-semibold text-stone-900">Laura Méndez</p>
<p className="text-xs text-stone-400">28 años, Terapia Individual</p>
</div>
</div>
</div>

<div className="bg-[#FFF8FA] p-8 rounded-[2rem] border border-[#fcecee]">
<div className="flex text-[#FBC2D1] mb-4 space-x-1">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 italic mb-6 text-sm leading-relaxed">"Llegamos al borde del divorcio. La terapia nos dio las herramientas para comunicarnos. Eternamente agradecidos."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm font-bold text-[#B86E8A]">CR</div>
<div>
<p className="text-sm font-semibold text-stone-900">Carlos &amp; Rosa</p>
<p className="text-xs text-stone-400">Terapia de Pareja</p>
</div>
</div>
</div>

<div className="bg-[#FFF8FA] p-8 rounded-[2rem] border border-[#fcecee]">
<div className="flex text-[#FBC2D1] mb-4 space-x-1">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 italic mb-6 text-sm leading-relaxed">"Me sentí validado desde el primer momento. Su enfoque sistémico es muy potente y transformador."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm font-bold text-[#B86E8A]">JP</div>
<div>
<p className="text-sm font-semibold text-stone-900">Javier P.</p>
<p className="text-xs text-stone-400">35 años, Ansiedad</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 max-w-3xl mx-auto reveal-element" id="faq">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-stone-900 tracking-tight">Preguntas Frecuentes</h2>
</div>
<div className="space-y-4 mb-12">
<details className="group bg-stone-50 rounded-[2rem] p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer transition-colors hover:bg-[#FDF2F5]">
<summary className="flex items-center justify-between font-medium text-stone-900">
                    ¿Cómo sé si necesito terapia?
                    <svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="text-stone-500 text-sm mt-4 font-light leading-relaxed">
                    Si sientes que tus emociones te desbordan, tienes dificultades en tus relaciones, o simplemente quieres conocerte mejor, la terapia es una excelente herramienta. No necesitas tener una crisis grave para empezar.
                </div>
</details>
<details className="group bg-stone-50 rounded-[2rem] p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer transition-colors hover:bg-[#FDF2F5]">
<summary className="flex items-center justify-between font-medium text-stone-900">
                    ¿Cuál es la duración de las sesiones?
                    <svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="text-stone-500 text-sm mt-4 font-light leading-relaxed">
                    Las sesiones tienen una duración aproximada de 50 a 60 minutos. La frecuencia suele ser semanal al principio y se ajusta según tu progreso.
                </div>
</details>
<details className="group bg-stone-50 rounded-[2rem] p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer transition-colors hover:bg-[#FDF2F5]">
<summary className="flex items-center justify-between font-medium text-stone-900">
                    ¿Atiendes de forma online?
                    <svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="text-stone-500 text-sm mt-4 font-light leading-relaxed">
                    Sí, ofrezco terapia online a través de videollamada segura, permitiéndote tomar las sesiones desde la comodidad de tu hogar sin importar dónde te encuentres.
                </div>
</details>
</div>

<div className="bg-[#FFF0F5] rounded-[2.5rem] p-10 text-center border border-[#FBC2D1]/30">
<h3 className="text-2xl font-serif text-stone-900 mb-4">¿Te quedan dudas?</h3>
<p className="text-stone-500 font-light mb-8 max-w-md mx-auto">Estoy aquí para responder tus preguntas antes de iniciar tu proceso.</p>
<a className="inline-flex items-center justify-center px-8 py-3 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1" href="contacto.html">
                Ir a Contacto
            </a>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-stone-100 reveal-element">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="space-y-4">
<span className="text-2xl font-serif text-stone-900 font-medium">KH.</span>
<p className="text-stone-400 text-sm font-light leading-relaxed">
                        Psicología sistémica enfocada en el bienestar integral y la salud de tus relaciones.
                    </p>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Navegación</h4>
<ul className="space-y-2 text-sm text-stone-500 font-light">
<li><a className="hover:text-[#B86E8A] transition-colors" href="index.html">Inicio</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-stone-500 font-light">
<li><a className="hover:text-[#B86E8A] transition-colors" href="#">Política de Privacidad</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Contacto Directo</h4>
<a className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-[#B86E8A] transition-colors font-light" href="contacto.html">
<svg aria-hidden="true" data-icon="lucide:message-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Enviar Mensaje
                    </a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 text-xs text-stone-400 font-light">
<p>© 2023 Karina Higa Psicología. Todos los derechos reservados.</p>
<p className="mt-2 md:mt-0">Diseñado con empatía.</p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm hidden flex items-center justify-center p-4" id="serviceModal">
<div className="modal-content bg-white w-full max-w-lg rounded-[2.5rem] p-8 md:p-12 relative shadow-2xl border border-white/50">
<button className="absolute top-6 right-6 p-2 bg-stone-50 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors" onclick="closeModal()">
<svg aria-hidden="true" data-icon="lucide:x" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="mb-6">
<span className="inline-block p-3 rounded-2xl bg-[#FFF0F5] text-[#B86E8A] mb-4">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</span>
<h3 className="text-3xl font-serif text-stone-900 font-medium" id="modalTitle"></h3>
</div>
<p className="text-stone-500 font-light leading-relaxed mb-8 text-lg" id="modalDesc"></p>
<a className="inline-flex items-center justify-center w-full px-6 py-4 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-800 transition-all shadow-lg" href="contacto.html">
                Agendar este servicio
            </a>
</div>
</div>



    </>
  );
}
