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



        // --- ADVANCED SCROLL OBSERVER ---
        const initScrollReveal = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // General Reveal
                        if(entry.target.classList.contains('reveal-up') || 
                           entry.target.classList.contains('reveal-fade') ||
                           entry.target.classList.contains('reveal-img') ||
                           entry.target.classList.contains('stagger-parent')) {
                            entry.target.classList.add('active');
                        }
                        
                        // Specific Line Drawing Logic
                        if(entry.target.id === 'itinerario') {
                            document.getElementById('timeline-line').classList.add('active');
                        }
                    }
                });
            }, {
                threshold: 0.15, 
                rootMargin: "0px 0px -80px 0px"
            });

            // Select all elements to animate
            document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-img, .stagger-parent, #itinerario').forEach(el => observer.observe(el));
        };

        // --- COUNTDOWN ---
        const targetDate = new Date("April 11, 2026 17:00:00").getTime();
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            
            const d = Math.floor(distance / (1000 * 60 * 60 * 24));
            const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distance % (1000 * 60)) / 1000);
            
            if(document.getElementById("days")) {
                document.getElementById("days").innerText = d.toString().padStart(2, '0');
                document.getElementById("hours").innerText = h.toString().padStart(2, '0');
                document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
                document.getElementById("seconds").innerText = s.toString().padStart(2, '0');
            }
        };

        // --- MUSIC ---
        let isPlaying = false;
        const audio = document.getElementById("bg-music");
        const icon = document.querySelector("#music-btn iconify-icon");

        function toggleMusic() {
            if (isPlaying) {
                audio.pause();
                icon.setAttribute("icon", "lucide:music");
                icon.classList.remove("text-stone-900");
                icon.parentElement.classList.remove("scale-105");
            } else {
                audio.play().catch(e => console.log("Audio needs user interaction first"));
                icon.setAttribute("icon", "lucide:pause");
                icon.classList.add("text-stone-900");
                icon.parentElement.classList.add("scale-105");
            }
            isPlaying = !isPlaying;
        }

        // --- INIT ---
        document.addEventListener('DOMContentLoaded', () => {
            initScrollReveal();
            setInterval(updateCountdown, 1000);
            updateCountdown();
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
      

<div className="bg-grain"></div>

<div className="fixed bottom-6 right-6 z-[60]">
<button className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-stone-600 hover:text-stone-900 hover:scale-105 hover:shadow-lg transition-all duration-500 shadow-stone-200/50" id="music-btn" onclick="toggleMusic()">
<iconify-icon className="animate-pulse" icon="lucide:music" width="18"></iconify-icon>
</button>
<audio id="bg-music" loop="">
<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg"/>
</audio>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-heading text-xl tracking-[0.15em] text-stone-800 hover:text-stone-500 transition-colors" href="#">IVON <span className="text-stone-400 font-light">&amp;</span> OSVALDO</a>

<div className="hidden md:flex gap-10 text-[11px] font-body uppercase tracking-[0.2em] text-stone-500 font-medium">
<a className="hover:text-stone-900 transition-colors py-2 relative group" href="#historia">
                    Historia
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-stone-900 transition-colors py-2 relative group" href="#evento">
                    Evento
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-stone-900 transition-colors py-2 relative group" href="#itinerario">
                    Itinerario
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-white bg-stone-800 px-6 py-2 rounded-sm hover:bg-stone-700 hover:shadow-lg hover:shadow-stone-400/20 transition-all transform hover:-translate-y-0.5 duration-300" href="#rsvp">Confirmar</a>
</div>

<button className="md:hidden text-stone-800" onclick="alert('Menu expands')">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20" id="inicio">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-stone-200/30 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-stone-300/20 rounded-full blur-[120px]"></div>
</div>
<div className="relative z-10 flex flex-col items-center text-center px-6">
<p className="reveal-up font-body text-xs uppercase tracking-[0.4em] text-stone-500 mb-6">Nos Casamos</p>
<div className="reveal-up" style={{transitionDelay: '100ms'}}>
<h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-stone-800 tracking-tight leading-[0.9]">
                    Ivon
                    <span className="font-thin text-stone-300 block md:inline md:text-7xl align-middle italic transform -translate-y-2">&amp;</span>
                    Osvaldo
                </h1>
</div>
<div className="flex items-center justify-center gap-6 pt-10 reveal-up" style={{transitionDelay: '200ms'}}>
<div className="h-px w-16 bg-gradient-to-r from-transparent to-stone-400"></div>
<p className="font-body text-lg md:text-xl text-stone-600 tracking-[0.2em] font-light">11 . ABR . 2026</p>
<div className="h-px w-16 bg-gradient-to-l from-transparent to-stone-400"></div>
</div>

<div className="grid grid-cols-4 gap-10 md:gap-20 pt-20 reveal-up" style={{transitionDelay: '300ms'}}>
<div className="text-center group cursor-default">
<span className="font-heading text-4xl md:text-5xl text-stone-800 block mb-2 transition-transform duration-500 group-hover:-translate-y-1" id="days">91</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-stone-400 border-t border-stone-200 pt-2 block w-full">Días</span>
</div>
<div className="text-center group cursor-default">
<span className="font-heading text-4xl md:text-5xl text-stone-800 block mb-2 transition-transform duration-500 group-hover:-translate-y-1" id="hours">22</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-stone-400 border-t border-stone-200 pt-2 block w-full">Hrs</span>
</div>
<div className="text-center group cursor-default">
<span className="font-heading text-4xl md:text-5xl text-stone-800 block mb-2 transition-transform duration-500 group-hover:-translate-y-1" id="minutes">42</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-stone-400 border-t border-stone-200 pt-2 block w-full">Min</span>
</div>
<div className="text-center group cursor-default">
<span className="font-heading text-4xl md:text-5xl text-stone-800 block mb-2 transition-transform duration-500 group-hover:-translate-y-1" id="seconds">51</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-stone-400 border-t border-stone-200 pt-2 block w-full">Seg</span>
</div>
</div>
</div>
<div className="absolute bottom-10 animate-bounce text-stone-400">
<iconify-icon icon="lucide:chevron-down" width="24"></iconify-icon>
</div>
</section>

<section className="w-full relative py-32 overflow-hidden" id="historia">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div className="relative order-2 md:order-1 reveal-img">
<div className="absolute -inset-4 border border-stone-200/60 z-0"></div>
<div className="relative z-10 aspect-[3/4] overflow-hidden bg-stone-200">
<img alt="Couple" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=800&amp;fit=crop"/>
</div>
</div>

<div className="order-1 md:order-2 md:pl-8 text-center md:text-left stagger-parent">
<div className="stagger-child inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-stone-100">
<iconify-icon icon="lucide:heart-handshake" width="14"></iconify-icon> Nuestra Historia
                </div>
<h3 className="stagger-child font-heading text-4xl md:text-5xl text-stone-800 mb-8 leading-tight">
                    Un amor escrito <br/><span className="italic text-stone-400">en el destino</span>
</h3>
<p className="stagger-child font-body text-stone-600 leading-8 font-light text-base mb-6 text-justify">
                    Lo que comenzó como una coincidencia se transformó en la certeza más hermosa de nuestras vidas. Cada día juntos ha sido una página nueva llena de risas, aprendizaje y amor incondicional.
                </p>
<p className="stagger-child font-body text-stone-600 leading-8 font-light text-sm text-justify">
                    Hoy, con el corazón lleno de gratitud, queremos dar el siguiente paso rodeados de las personas que más amamos. Su presencia es el hilo que termina de tejer este momento perfecto.
                </p>
<div className="stagger-child mt-12">
<img alt="Firma" className="h-12 opacity-40 mx-auto md:mx-0 invert" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 bg-stone-100/50 relative" id="evento">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-stone-200 to-transparent"></div>
<div className="max-w-6xl mx-auto space-y-20 relative z-10">
<div className="text-center reveal-up">
<span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold block mb-3">Celebración</span>
<h3 className="font-heading text-4xl text-stone-800">Detalles del Día</h3>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="glass-panel p-12 relative group hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-700 reveal-up">
<div className="absolute top-0 left-0 w-full h-1 bg-stone-200 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<div className="flex justify-between items-start mb-10">
<div className="bg-white p-4 rounded-full text-stone-800 shadow-sm border border-stone-100">
<iconify-icon icon="lucide:church" width="24"></iconify-icon>
</div>
<span className="bg-stone-200/50 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider text-stone-600 font-medium">17:00 Hrs</span>
</div>
<h4 className="font-heading text-2xl text-stone-800 mb-2">Ceremonia Religiosa</h4>
<p className="font-body text-xs text-stone-400 mb-8 uppercase tracking-widest font-medium">Catedral Metropolitana</p>
<p className="font-body text-stone-600 text-sm leading-7 mb-10 font-light border-l-2 border-stone-200 pl-4">
                        Comenzaremos nuestra unión con una solemne ceremonia. Agradecemos su puntualidad para este momento sagrado.
                    </p>
<a className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-stone-800 hover:text-stone-500 transition-colors group-hover:pl-2 duration-300" href="#">
                        Ver Ubicación <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>

<div className="glass-panel p-12 relative group hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-700 reveal-up" style={{transitionDelay: '150ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-stone-200 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<div className="flex justify-between items-start mb-10">
<div className="bg-white p-4 rounded-full text-stone-800 shadow-sm border border-stone-100">
<iconify-icon icon="lucide:wine" width="24"></iconify-icon>
</div>
<span className="bg-stone-200/50 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider text-stone-600 font-medium">18:30 Hrs</span>
</div>
<h4 className="font-heading text-2xl text-stone-800 mb-2">Recepción &amp; Fiesta</h4>
<p className="font-body text-xs text-stone-400 mb-8 uppercase tracking-widest font-medium">Hacienda Santa Cruz</p>
<p className="font-body text-stone-600 text-sm leading-7 mb-10 font-light border-l-2 border-stone-200 pl-4">
                        Continuaremos con un cóctel de bienvenida en los jardines, seguido de cena formal y baile bajo las estrellas.
                    </p>
<a className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-stone-800 hover:text-stone-500 transition-colors group-hover:pl-2 duration-300" href="#">
                        Ver Ubicación <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative" id="itinerario">
<div className="max-w-2xl mx-auto">
<div className="text-center mb-20 reveal-up">
<h3 className="font-heading text-4xl text-stone-800 mb-3">Itinerario</h3>
<p className="text-stone-400 font-body text-sm uppercase tracking-[0.2em]">Sábado 11 de Abril</p>
</div>
<div className="relative">

<div className="absolute left-[19px] top-2 bottom-0 w-px bg-stone-200 h-full"></div>

<div className="absolute left-[19px] top-2 w-px bg-stone-800 draw-line" id="timeline-line"></div>
<div className="space-y-12 relative z-10">

<div className="flex group stagger-parent reveal-up">
<div className="flex flex-col items-center mr-10 relative">
<div className="w-2.5 h-2.5 rounded-full border border-stone-800 bg-white z-10 mt-2 transition-transform duration-500 group-hover:scale-150 group-hover:bg-stone-800"></div>
</div>
<div className="pt-1 transition-transform duration-500 group-hover:translate-x-2">
<span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">17:00 hrs</span>
<h4 className="font-heading text-xl text-stone-800">Ceremonia Religiosa</h4>
<p className="text-sm font-body text-stone-500 font-light mt-2">El momento del "Sí, acepto".</p>
</div>
</div>

<div className="flex group stagger-parent reveal-up">
<div className="flex flex-col items-center mr-10 relative">
<div className="w-2.5 h-2.5 rounded-full border border-stone-800 bg-white z-10 mt-2 transition-transform duration-500 group-hover:scale-150 group-hover:bg-stone-800"></div>
</div>
<div className="pt-1 transition-transform duration-500 group-hover:translate-x-2">
<span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">18:30 hrs</span>
<h4 className="font-heading text-xl text-stone-800">Cóctel de Bienvenida</h4>
<p className="text-sm font-body text-stone-500 font-light mt-2">Música acústica y mixología de autor.</p>
</div>
</div>

<div className="flex group stagger-parent reveal-up">
<div className="flex flex-col items-center mr-10 relative">
<div className="w-2.5 h-2.5 rounded-full border border-stone-800 bg-white z-10 mt-2 transition-transform duration-500 group-hover:scale-150 group-hover:bg-stone-800"></div>
</div>
<div className="pt-1 transition-transform duration-500 group-hover:translate-x-2">
<span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">20:00 hrs</span>
<h4 className="font-heading text-xl text-stone-800">Cena Formal</h4>
<p className="text-sm font-body text-stone-500 font-light mt-2">Menú de 4 tiempos.</p>
</div>
</div>

<div className="flex group stagger-parent reveal-up">
<div className="flex flex-col items-center mr-10 relative">
<div className="w-2.5 h-2.5 rounded-full border border-stone-800 bg-white z-10 mt-2 transition-transform duration-500 group-hover:scale-150 group-hover:bg-stone-800"></div>
</div>
<div className="pt-1 transition-transform duration-500 group-hover:translate-x-2">
<span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">22:00 hrs</span>
<h4 className="font-heading text-xl text-stone-800">Fiesta</h4>
<p className="text-sm font-body text-stone-500 font-light mt-2">¡A celebrar toda la noche!</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100 reveal-up" id="dresscode">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-block p-4 rounded-full bg-stone-50 border border-stone-200 mb-6">
<iconify-icon className="text-stone-600" icon="lucide:shirt" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-3xl text-stone-800 mb-2">Código de Vestimenta</h3>
<p className="font-heading text-lg font-light text-stone-500 mb-12 tracking-wide">Etiqueta Rigurosa • Formal</p>
<div className="flex flex-wrap justify-center gap-12 mb-12 stagger-parent active">
<div className="text-center w-24 stagger-child hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 mx-auto rounded-full bg-[#1a1a1a] shadow-lg mb-4"></div>
<span className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Negro</span>
</div>
<div className="text-center w-24 stagger-child hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 mx-auto rounded-full bg-[#1e293b] shadow-lg mb-4"></div>
<span className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Azul Noche</span>
</div>
<div className="text-center w-24 stagger-child hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 mx-auto rounded-full bg-[#78716c] shadow-lg mb-4"></div>
<span className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Taupe</span>
</div>
<div className="text-center w-24 stagger-child hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 mx-auto rounded-full bg-[#e5e7eb] border border-stone-200 shadow-lg mb-4"></div>
<span className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Plata</span>
</div>
</div>
<p className="text-xs text-stone-400 uppercase tracking-widest max-w-lg mx-auto leading-6 italic">
                Reservamos el color blanco exclusivamente para la novia.
            </p>
</div>
</section>

<section className="py-32 px-6" id="hospedaje">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal-up">
<div>
<span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold block mb-2">Estancia</span>
<h3 className="font-heading text-3xl text-stone-800">Sugerencia de Hotel</h3>
</div>
<div className="w-full md:w-auto h-px bg-stone-200 flex-1 mx-8 hidden md:block"></div>
</div>
<div className="glass-panel rounded-none flex flex-col md:flex-row shadow-xl shadow-stone-200/40 reveal-up">
<div className="md:w-5/12 h-64 md:h-auto relative overflow-hidden group">
<img alt="Hotel" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-[10px] uppercase tracking-wider text-stone-800 shadow-sm">Sede</div>
</div>
<div className="p-10 md:p-14 flex-1 flex flex-col justify-center bg-white">
<h4 className="font-heading text-2xl text-stone-800 mb-4">Grand Hotel Ciudad</h4>
<p className="text-sm text-stone-500 mb-8 font-light leading-7">
                        Disfruta de una estancia inolvidable. Ubicado a solo 10 minutos del lugar de la recepción. Incluye desayuno buffet y transporte al evento para tu comodidad.
                    </p>
<div className="grid grid-cols-2 gap-8 mb-10 border-y border-stone-100 py-6">
<div>
<span className="block text-[10px] uppercase text-stone-400 tracking-wider mb-1 font-bold">Código</span>
<span className="text-stone-800 font-mono text-sm tracking-wider">BODAIO26</span>
</div>
<div>
<span className="block text-[10px] uppercase text-stone-400 tracking-wider mb-1 font-bold">Reservaciones</span>
<span className="text-stone-600 text-sm hover:text-stone-900 transition-colors cursor-pointer decoration-stone-300 underline underline-offset-4">+52 555 123 4567</span>
</div>
</div>
<a className="w-fit bg-stone-900 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-stone-700 transition-all shadow-lg shadow-stone-400/20" href="#">
                        Reservar Ahora
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 reveal-up" id="regalos">
<div className="max-w-2xl mx-auto text-center">
<h3 className="font-heading text-3xl uppercase tracking-widest text-stone-800 mb-10">Mesa de Regalos</h3>
<div className="bg-white p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-100 space-y-10 relative overflow-hidden">

<div className="absolute top-0 right-0 w-20 h-20 bg-stone-50 rounded-bl-full opacity-50"></div>
<p className="font-body text-stone-600 font-light text-sm leading-7">
                    Lo más importante para nosotros es su presencia. Sin embargo, si desean tener un detalle, hemos preparado algunas opciones:
                </p>
<div className="grid sm:grid-cols-2 gap-6">
<a className="py-6 bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200 hover:border-stone-300 uppercase tracking-[0.15em] text-[10px] transition-all flex flex-col items-center justify-center gap-3 group h-36 relative overflow-hidden" href="#">
<div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-0"></div>
<iconify-icon className="text-stone-400 group-hover:text-stone-800 z-10 transition-colors" icon="lucide:gift" width="24"></iconify-icon>
<span className="z-10 relative font-medium">Liverpool</span>
<span className="text-[9px] text-stone-400 z-10">Evento #98223</span>
</a>
<a className="py-6 bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200 hover:border-stone-300 uppercase tracking-[0.15em] text-[10px] transition-all flex flex-col items-center justify-center gap-3 group h-36 relative overflow-hidden" href="#">
<div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-0"></div>
<iconify-icon className="text-stone-400 group-hover:text-stone-800 z-10 transition-colors" icon="lucide:credit-card" width="24"></iconify-icon>
<span className="z-10 relative font-medium">Transferencia</span>
<span className="text-[9px] text-stone-400 z-10">Ver Datos</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative reveal-up" id="rsvp">
<div className="max-w-xl mx-auto relative z-10 bg-white p-10 md:p-16 shadow-2xl shadow-stone-300/20 border border-stone-100">
<div className="text-center mb-12">
<iconify-icon className="text-stone-400 mb-4" icon="lucide:mail-open" width="24"></iconify-icon>
<h3 className="font-heading text-3xl uppercase tracking-widest text-stone-800">R.S.V.P.</h3>
<p className="font-body text-xs uppercase tracking-widest text-stone-400 mt-4 font-medium">Favor de confirmar antes del 1 de Marzo</p>
</div>
<form className="space-y-8">
<div className="space-y-3 group">
<label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold group-focus-within:text-stone-800 transition-colors">Nombre Completo</label>
<input className="w-full bg-stone-50 border-b border-stone-200 p-3 text-stone-800 focus:outline-none focus:border-stone-800 focus:bg-transparent transition-all font-body text-sm placeholder-stone-400/50" placeholder="Ej. Juan Pérez" type="text"/>
</div>
<div className="space-y-3">
<label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Asistencia</label>
<div className="grid grid-cols-2 gap-5">
<label className="cursor-pointer border border-stone-200 bg-white p-4 hover:border-stone-400 transition-all flex items-center justify-center gap-3 group relative overflow-hidden">
<input className="accent-stone-900 scale-110 z-10" name="attendance" type="radio"/>
<span className="text-sm text-stone-600 group-hover:text-stone-900 z-10">Sí, asistiré</span>
</label>
<label className="cursor-pointer border border-stone-200 bg-white p-4 hover:border-stone-400 transition-all flex items-center justify-center gap-3 group">
<input className="accent-stone-900 scale-110" name="attendance" type="radio"/>
<span className="text-sm text-stone-600 group-hover:text-stone-900">No podré</span>
</label>
</div>
</div>
<div className="space-y-3 group">
<label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold group-focus-within:text-stone-800 transition-colors">Mensaje (Opcional)</label>
<textarea className="w-full bg-stone-50 border-b border-stone-200 p-3 text-stone-800 focus:outline-none focus:border-stone-800 focus:bg-transparent transition-all font-body text-sm placeholder-stone-400/50 resize-none" placeholder="Restricciones alimentarias..." rows="2"></textarea>
</div>
<button className="w-full bg-stone-900 text-white py-5 font-heading uppercase tracking-[0.2em] text-xs font-bold mt-4 hover:bg-stone-800 transition-all transform hover:-translate-y-1 shadow-xl shadow-stone-400/20" type="submit">
                    Enviar Confirmación
                </button>
</form>
</div>
</section>

<footer className="py-20 text-center border-t border-stone-200 bg-stone-100 relative z-10">
<h2 className="font-heading text-2xl uppercase tracking-[0.3em] mb-8 text-stone-800">Ivon <span className="text-stone-400">&amp;</span> Osvaldo</h2>
<div className="flex justify-center gap-8 text-[10px] tracking-[0.2em] uppercase text-stone-500 font-medium mb-10">
<a className="hover:text-stone-900 transition-colors" href="#">Inicio</a>
<a className="hover:text-stone-900 transition-colors" href="#">Ubicación</a>
<a className="hover:text-stone-900 transition-colors" href="#">Contacto</a>
</div>
<div className="text-[9px] text-stone-400 tracking-widest">
            DISEÑADO CON AMOR • 2026
        </div>
</footer>



    </>
  );
}
