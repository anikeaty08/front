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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple Intersection Observer for Fade-in animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Add animation classes to elements
        document.querySelectorAll('section h2, section p, .group').forEach(el => {
            el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(el);
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
      
<div className="fixed top-0 z-40 w-full bg-black">

<nav className="w-full mix-blend-difference text-white px-6 py-6 flex justify-between items-center transition-all duration-300">
<a className="text-xl tracking-[0.2em] font-light uppercase z-50" href="#">
                INK<span className="font-semibold">STUDIO</span>
</a>
<div className="hidden md:flex space-x-12 text-xs tracking-widest uppercase font-medium">
<a className="hover:text-[#D1B6A1] transition-colors" href="#process">Proceso</a>
<a className="hover:text-[#D1B6A1] transition-colors" href="#gallery">Galería</a>
<a className="hover:text-[#D1B6A1] transition-colors" href="#artists">Artistas</a>
<a className="hover:text-[#D1B6A1] transition-colors" href="#contact">Contacto</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 group duration-1000 opacity-100 translate-y-0" href="https://wa.me/?text=Hola%20InkStudio,%20quiero%20reservar.">
                Book Now
                <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<button className="md:hidden z-50">
<svg className="lucide lucide-menu w-6 h-6 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<div className="text-[10px] md:text-xs uppercase flex font-bold text-[#0E0E0E] tracking-[0.2em] text-center bg-[#D1B6A1] z-50 pt-3 pr-6 pb-3 pl-6 relative gap-x-4 gap-y-4 items-center justify-center">
<span className=""><span className="bg-black text-white px-2 py-0.5 rounded mr-2">EVENTO</span> GUEST ARTIST: MARCO POLO •
            15-20 OCT</span>
<a className="underline decoration-1 underline-offset-2 hover:no-underline" href="#contact">Agendar turno</a>
<button className="absolute right-4 md:right-6 hover:opacity-50" onclick="this.parentElement.style.display='none'">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<header className="relative w-full h-screen flex flex-col justify-end pb-12 md:pb-24 overflow-hidden">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Tattoo Model Back" className="image-cover opacity-60 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="container z-10 mr-auto ml-auto px-6 relative top-24">
<div className="flex flex-col md:flex-row items-end justify-between gap-8 border-t border-white/20 pt-8">
<div className="max-w-4xl">
<p className="text-[#D1B6A1] text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">Arte Permanente • Diseño Propio</p>
<h1 className="font-serif text-5xl md:text-7xl lg:text-9xl leading-[0.9] md:leading-[0.8] tracking-tighter font-light mb-2">
                        TATUAJES HECHOS <br/>
<span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">PARA CONTAR TU HISTORIA.</span>
</h1>
</div>
<div className="w-full md:w-auto flex flex-col items-start md:items-end gap-6">
<p className="text-gray-400 text-sm md:text-base max-w-xs font-light leading-relaxed md:text-right">
                        Minimalismo y precisión. Un santuario para el expresionismo moderno a través de la tinta.
                    </p>
<a className="bg-white text-black px-8 py-4 rounded-none md:rounded-full w-full md:w-auto text-center text-sm tracking-widest uppercase font-bold hover:bg-[#D1B6A1] transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="https://wa.me/?text=Hola,%20me%20interesa%20reservar%20un%20turno.">
<svg className="lucide lucide-message-circle w-4 h-4 stroke-[2]" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                        Reservar
                    </a>
</div>
</div>
</div>
</header>

<section className="py-16 border-b border-white/5 bg-[#0E0E0E]" id="process">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group transition-all duration-1000 opacity-0 translate-y-10">
<span className="block text-4xl font-serif text-[#D1B6A1] mb-2 opacity-50 group-hover:opacity-100 transition-opacity">01</span>
<h3 className="text-sm font-bold uppercase tracking-widest mb-2">Seleccioná Artista</h3>
<p className="text-xs text-gray-400 leading-relaxed transition-all duration-1000 opacity-0 translate-y-10">Conocé a nuestro equipo residente y artistas invitados. Encontrá tu match artístico.</p>
</div>

<div className="group transition-all duration-1000 opacity-0 translate-y-10">
<span className="block text-4xl font-serif text-[#D1B6A1] mb-2 opacity-50 group-hover:opacity-100 transition-opacity">02</span>
<h3 className="text-sm font-bold uppercase tracking-widest mb-2">Contanos tu Idea</h3>
<p className="text-xs text-gray-400 leading-relaxed transition-all duration-1000 opacity-0 translate-y-10">Envianos referencias, zona y tamaño aproximado para cotizar tu diseño.</p>
</div>

<div className="group transition-all duration-1000 opacity-0 translate-y-10">
<span className="block text-4xl font-serif text-[#D1B6A1] mb-2 opacity-50 group-hover:opacity-100 transition-opacity">03</span>
<h3 className="text-sm font-bold uppercase tracking-widest mb-2">Coordinamos</h3>
<p className="text-xs text-gray-400 leading-relaxed transition-all duration-1000 opacity-0 translate-y-10">Respuesta en menos de 24hs. Aseguramos tu fecha con una seña.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0E0E0E]" id="gallery">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight transition-all duration-1000 opacity-0 translate-y-10">GALERÍA</h2>


</div>
<a className="hidden md:block mt-6 md:mt-0 text-[#D1B6A1] text-xs tracking-[0.2em] uppercase border border-[#D1B6A1]/30 px-6 py-3 rounded-full hover:bg-[#D1B6A1] hover:text-black transition-all" href="#contact">
                    Ver Portfolio
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 h-auto">

<div className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] md:translate-y-12 transition-all duration-1000 opacity-0 translate-y-10">
<img alt="Arm Tattoo" className="image-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>

</div>

<div className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] transition-all duration-1000 opacity-0 translate-y-10">
<img alt="Back Piece" className="image-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>

</div>

<div className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] md:translate-y-24 transition-all duration-1000 opacity-0 translate-y-10">
<img alt="Detailed Tattoo" className="image-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>

</div>
</div>
</div>
</section>

<section className="bg-white text-black py-24" id="artists">
<div className="container mx-auto px-6">
<div className="mb-16 max-w-2xl">
<span className="block text-[#D1B6A1] text-xs font-bold tracking-[0.2em] uppercase mb-4">El Equipo</span>
<h2 className="font-serif text-5xl md:text-7xl leading-none tracking-tighter mb-6 transition-all duration-1000 opacity-0 translate-y-10">
                    MAESTROS <br/><i className="font-light text-gray-500">DE la AGUJA</i>
</h2>
<p className="text-gray-600 font-light text-lg transition-all duration-1000 opacity-0 translate-y-10">
                    Cada artista en nuestro estudio posee una visión única. Seleccioná con quién querés tatuarte para comenzar tu consulta personalizada.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="group cursor-pointer transition-all duration-1000 opacity-0 translate-y-10">
<div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6 relative">
<img className="image-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-serif font-bold">Alex Void</h3>
<p className="text-xs uppercase tracking-widest text-gray-500 mt-1 mb-4 transition-all duration-1000 opacity-0 translate-y-10">Blackwork &amp; Geometric</p>
<div className="flex gap-3">
<a className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="flex-1 border border-black px-4 py-2 rounded-full text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors" href="https://wa.me/?text=Hola%20Alex,%20te%20escribo%20desde%20InkStudio%20para%20consultar...">
                            Escribir a Alex <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<div className="group cursor-pointer transition-all duration-1000 opacity-0 translate-y-10">
<div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6 relative">
<img className="image-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-serif font-bold">Sarah Line</h3>
<p className="text-xs uppercase tracking-widest text-gray-500 mt-1 mb-4 transition-all duration-1000 opacity-0 translate-y-10">Fine Line &amp; Floral</p>
<div className="flex gap-3">
<a className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="flex-1 border border-black px-4 py-2 rounded-full text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors" href="https://wa.me/?text=Hola%20Sarah,%20te%20escribo%20desde%20InkStudio%20para%20consultar...">
                            Escribir a Sarah <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<div className="group cursor-pointer transition-all duration-1000 opacity-0 translate-y-10">
<div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6 relative">
<img className="image-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black text-white text-[10px] uppercase font-bold px-3 py-1 tracking-widest">
                            Guest Artist
                        </div>
</div>
<h3 className="text-2xl font-serif font-bold">Marco Polo</h3>
<p className="text-xs uppercase tracking-widest text-gray-500 mt-1 mb-4 transition-all duration-1000 opacity-0 translate-y-10">Realism &amp; Portrait</p>
<div className="flex gap-3">
<a className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="flex-1 bg-black text-white border border-black px-4 py-2 rounded-full text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-[#D1B6A1] hover:border-[#D1B6A1] hover:text-black transition-colors" href="https://wa.me/?text=Hola%20Marco,%20te%20escribo%20desde%20InkStudio%20para%20consultar...">
                            Agendar Cita <svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0E0E0E] border-t border-white/10">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="flex flex-col justify-center">
<div className="grid grid-cols-2 gap-8 mb-12">
<div className="border-l border-[#D1B6A1] pl-6">
<h4 className="text-4xl font-serif">+1.5k</h4>
<p className="text-xs uppercase tracking-widest text-gray-500 mt-1 transition-all duration-1000 opacity-0 translate-y-10">Tatuajes Realizados</p>
</div>
<div className="border-l border-[#D1B6A1] pl-6">
<h4 className="text-4xl font-serif">8+</h4>
<p className="text-xs uppercase tracking-widest text-gray-500 mt-1 transition-all duration-1000 opacity-0 translate-y-10">Años de Experiencia</p>
</div>
</div>
<p className="font-serif text-2xl italic leading-snug text-gray-300 transition-all duration-1000 opacity-0 translate-y-10">"La atención al detalle es inigualable. Más que una cita de tatuaje, se sintió como una comisión de arte privada."</p>
<div className="flex items-center gap-4 mt-6">
<div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-widest text-white">Sarah Jenkins</span>
<span className="text-[10px] text-gray-500">Fine Line · Cicatrizado</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white text-black py-24" id="contact">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-8">
<h2 className="font-serif text-5xl tracking-tighter transition-all duration-1000 opacity-0 translate-y-10">UBICACIÓN <br/> &amp; CONTACTO</h2>
<div className="space-y-4 text-sm font-light text-gray-600">
<p className="flex items-center gap-3 transition-all duration-1000 opacity-0 translate-y-10">
<svg className="lucide lucide-map-pin w-4 h-4 text-black" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Av. Santa Fe 1234, Palermo, Buenos Aires
                        </p>
<p className="flex items-center gap-3 transition-all duration-1000 opacity-0 translate-y-10">
<svg className="lucide lucide-mail w-4 h-4 text-black" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                            contacto@inkstudio.com
                        </p>
<p className="flex items-center gap-3 transition-all duration-1000 opacity-0 translate-y-10">
<svg className="lucide lucide-clock w-4 h-4 text-black" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                            Lun - Sab: 11:00 - 20:00 (Cita Previa)
                        </p>
</div>

<div className="w-full h-64 bg-gray-100 grayscale relative overflow-hidden">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878894506!2d-58.38157032477148!3d-34.60373445749764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1sen!2sar!4v1700000000000!5m2!1sen!2sar" style={{border: '0'}} width="100%"></iframe>
</div>
<a className="inline-block text-xs uppercase font-bold tracking-widest border-b border-black pb-1 hover:text-[#D1B6A1] hover:border-[#D1B6A1] transition-colors" href="https://maps.google.com" target="_blank">
                        Abrir en Google Maps
                    </a>
</div>

<div className="bg-gray-50 p-8 md:p-12">
<h3 className="text-xl font-serif font-bold mb-6">Iniciar Consulta</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Nombre</label>
<input className="w-full bg-white border-b border-gray-300 p-2 focus:outline-none focus:border-black transition-colors" placeholder="Tu nombre" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Estilo Preferido</label>
<select className="w-full bg-white border-b border-gray-300 p-2 focus:outline-none focus:border-black transition-colors text-gray-700">
<option>Seleccionar Estilo...</option>
<option>Blackwork</option>
<option>Fine Line</option>
<option>Realismo</option>
<option>Tradicional</option>
</select>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Idea / Zona</label>
<textarea className="w-full bg-white border-b border-gray-300 p-2 focus:outline-none focus:border-black transition-colors h-24 resize-none" placeholder="Describe brevemente tu idea y la zona del cuerpo..."></textarea>
</div>
<button className="w-full bg-[#0E0E0E] text-white py-4 text-xs uppercase font-bold tracking-widest hover:bg-[#D1B6A1] hover:text-black transition-all duration-300" type="button">
                            Enviar Consulta
                        </button>
<p className="text-center text-[10px] text-gray-400 transition-all duration-1000 opacity-0 translate-y-10">O contactanos directamente por WhatsApp para una respuesta más rápida.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="py-12 bg-[#0E0E0E] border-t border-white/10 text-center">
<div className="container mx-auto px-6">
<h2 className="font-serif text-3xl md:text-5xl tracking-tighter mb-8 text-white">
                INK<span className="font-bold">STUDIO</span>
</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-8 text-xs text-gray-500 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">TikTok</a>
<a className="hover:text-white transition-colors" href="#">Email</a>
</div>
<p className="text-[10px] text-gray-700 mt-8 uppercase tracking-widest">© 2024 Ink Studio. All rights reserved.</p>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group transition-all duration-1000 opacity-100 translate-y-0" href="https://wa.me/?text=Hola%20InkStudio,%20quiero%20hacer%20una%20consulta." target="_blank">
<span className="hidden md:block bg-white text-black text-xs font-bold py-2 px-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ¿Consultas? Hablemos
        </span>
<div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform whatsapp-pulse">
<svg className="lucide lucide-message-circle w-8 h-8 text-white fill-white stroke-none" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
</a>


    </>
  );
}
