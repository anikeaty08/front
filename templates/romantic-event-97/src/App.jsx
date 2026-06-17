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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        window.addEventListener('load', () => {
            const loadTl = gsap.timeline({
                onComplete: () => {
                    initAnimations();
                }
            });
            loadTl.to('.loader', { yPercent: -100, duration: 1.2, ease: 'power4.inOut', delay: 0.5 });
        });

        function initAnimations() {
            gsap.to('.hero-text span', { y: 0, stagger: 0.1, duration: 1.5, ease: 'power4.out' });
            gsap.to('.hero-fade', { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, delay: 0.5 });
            
            const cards = gsap.utils.toArray('.card-item');
            cards.forEach((card, i) => {
                if (cards[i+1]) {
                    gsap.to(card.querySelector('.card-inner'), {
                        scale: 0.9,
                        opacity: 0.4,
                        filter: "blur(4px)",
                        scrollTrigger: {
                            trigger: cards[i+1],
                            start: "top bottom",
                            end: "top 20%",
                            scrub: true
                        }
                    });
                }
            });

            gsap.from('.footer-sticky > div', {
                y: 100,
                opacity: 0,
                scrollTrigger: {
                    trigger: '.footer-sticky',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: 1
                }
            });
        }
    
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
      
<div className="noise-overlay"></div>
<div className="loader">
<div className="display text-base tracking-[0.4em] text-[var(--c-dark)]">CUCHARA</div>
</div>
<nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="display text-base md:text-lg font-medium tracking-tight">CUCHARA</div>
<div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-normal">
<a className="hover:opacity-60 transition-opacity" href="#problema">Problema</a>
<a className="hover:opacity-60 transition-opacity" href="#propuesta">Propuesta</a>
<a className="hover:opacity-60 transition-opacity" href="#beneficios">Beneficios</a>
<a className="hover:opacity-60 transition-opacity" href="#metodo">Método</a>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] uppercase tracking-widest font-medium">Inscríbete</span>
<iconify-icon className="text-white text-lg" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</nav>
<div className="wrapper">
<section className="h-screen relative flex items-center justify-center overflow-hidden w-full bg-[var(--c-bg)]">
<img alt="Mesa privada de día" className="brightness-[0.6] hero-img w-full h-full object-cover absolute inset-0 scale-110" src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="text-white text-center z-10 px-4 md:px-6 relative w-full">
<div className="mb-6 opacity-0 hero-fade">
<span className="text-[10px] uppercase tracking-[0.4em] font-medium text-white border border-white/30 px-6 py-2 rounded-full backdrop-blur-md">Experiencia Terraza Cuchara</span>
</div>
<h1 className="display text-4xl sm:text-6xl md:text-[7vw] leading-none hero-text overflow-hidden tracking-tight">
<span className="block translate-y-full">CONEXIÓN</span>
</h1>
<h1 className="display text-4xl sm:text-6xl md:text-[7vw] leading-none hero-text overflow-hidden tracking-tight text-white/90">
<span className="block translate-y-full">AUTÉNTICA</span>
</h1>
<p className="text-xs md:text-base font-light tracking-[0.1em] opacity-0 mt-8 max-w-2xl mx-auto hero-fade leading-relaxed">
                    El primer programa gratuito diseñado para unir a personas que buscan algo real, <br className="hidden md:block"/> basándonos en la psicología de la intimidad.
                </p>
<div className="mt-12 opacity-0 hero-fade">
<a className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest font-medium border-b border-white/30 pb-2 hover:border-white transition-colors" href="#metodo">
                        Descubre cómo funciona
                        <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 md:px-20 max-w-full mx-auto bg-[var(--c-bg)]" id="problema">
<div className="max-w-4xl">
<h2 className="display text-2xl md:text-5xl tracking-tight mb-8 text-[var(--c-dark)]">¿POR QUÉ ESTÁS AQUÍ?</h2>
<p className="text-sm md:text-xl font-light text-gray-600 leading-relaxed mb-16">
                    En un mundo de desplazamientos infinitos a la izquierda y conversaciones que mueren en un "hola", la profundidad se ha convertido en un lujo.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6 md:gap-12">
<div className="bg-white p-8 md:p-14 border border-gray-100 rounded-3xl shadow-sm">
<div className="flex items-center gap-4 mb-8 text-[var(--c-accent)]">
<iconify-icon className="text-2xl" icon="solar:shield-warning-linear"></iconify-icon>
<h3 className="text-xs md:text-sm font-medium tracking-widest uppercase">El Fracaso Moderno</h3>
</div>
<ul className="space-y-6 text-gray-600 font-light text-sm md:text-lg">
<li className="flex items-start gap-4">
<span className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent)] mt-2 shrink-0"></span>
<span>Las apps de citas te exponen como un producto, ignorando tu esencia.</span>
</li>
<li className="flex items-start gap-4">
<span className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent)] mt-2 shrink-0"></span>
<span>La falta de contexto romántico en encuentros casuales genera inseguridad.</span>
</li>
<li className="flex items-start gap-4">
<span className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent)] mt-2 shrink-0"></span>
<span>El miedo a la vulnerabilidad impide conectar a un nivel emocional profundo.</span>
</li>
</ul>
</div>
<div className="bg-[var(--c-dark)] text-white p-8 md:p-14 rounded-3xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[var(--c-accent)] rounded-full mix-blend-multiply filter blur-[80px] opacity-10"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-8 text-[var(--c-accent)]">
<iconify-icon className="text-2xl" icon="solar:star-fall-linear"></iconify-icon>
<h3 className="text-xs md:text-sm font-medium tracking-widest uppercase">Lo que pierdes</h3>
</div>
<p className="text-gray-300 font-light text-sm md:text-lg leading-relaxed mb-8">
                            Cada día que no te permites ser visto/a por quien realmente eres, pospones la oportunidad de vivir una complicidad transformadora.
                        </p>
<p className="text-[var(--c-accent)] font-medium text-xs md:text-base italic">
                            "La soledad no es estar solo, es estar rodeado de gente que no te ve."
                        </p>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 md:px-20 max-w-full mx-auto border-t border-gray-200/50 bg-white" id="propuesta">
<div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
<div className="relative h-64 md:h-[70vh] rounded-3xl overflow-hidden group">
<img alt="Encuentro de día" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div>
<div className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-6 font-medium">Ciencia &amp; Amor</div>
<h2 className="display text-2xl md:text-4xl leading-tight tracking-tight mb-8 uppercase">El Experimento de los 4 Minutos</h2>
<div className="text-sm md:text-lg font-light leading-relaxed text-gray-600 space-y-6">
<p>En 1997, el psicólogo Arthur Aron descubrió que era posible acelerar la intimidad mediante 36 preguntas específicas y un contacto visual sostenido.</p>
<div className="h-px w-24 bg-[var(--c-accent)] my-8"></div>
<p className="font-medium text-[var(--c-dark)] text-lg md:text-2xl leading-snug">
                            En Terraza Cuchara hemos adaptado este método para crear citas con propósito a plena luz del día, eliminando el ruido y el miedo al juicio inicial.
                        </p>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[var(--c-bg)] border-y border-gray-100" id="beneficios">
<div className="max-w-full mx-auto px-6 md:px-20">
<div className="text-center mb-20">
<h2 className="display text-2xl md:text-4xl tracking-tight uppercase">Por qué participar</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-20">
<div className="text-center">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
<iconify-icon className="text-2xl text-[var(--c-accent)]" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h4 className="text-xs md:text-sm font-medium tracking-widest uppercase mb-4">Compañía Real</h4>
<p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">Conoce a alguien que ya ha pasado por un filtro de compatibilidad psicológica y de valores.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
<iconify-icon className="text-2xl text-[var(--c-accent)]" icon="solar:heart-lock-linear"></iconify-icon>
</div>
<h4 className="text-xs md:text-sm font-medium tracking-widest uppercase mb-4">Seguridad Total</h4>
<p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">Entorno privado, de día, seguro y gratuito. Sin presiones, solo un encuentro diseñado para fluir.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
<iconify-icon className="text-2xl text-[var(--c-accent)]" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h4 className="text-xs md:text-sm font-medium tracking-widest uppercase mb-4">Inspiración</h4>
<p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">Incluso si no surge el amor, vivirás una experiencia de vulnerabilidad que te hará crecer.</p>
</div>
</div>
</div>
</section>
<section className="stack-section bg-white" id="metodo">
<div className="text-center mb-12 px-6">
<div className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-4">El Proceso</div>
<h2 className="display text-2xl md:text-5xl tracking-tight uppercase">Tu Camino al Encuentro</h2>
</div>
<div className="stack-container w-full">

<div className="card-item">
<div className="card-inner">
<div className="card-content bg-[#FCF9F7]">
<span className="text-4xl md:text-6xl display mb-6 text-[var(--c-accent)]/30">01</span>
<h3 className="text-lg md:text-3xl font-medium tracking-tight uppercase mb-4">El Registro</h3>
<p className="text-sm md:text-lg text-gray-500 font-light leading-relaxed">Completas nuestro formulario detallado. No preguntamos solo tu edad, preguntamos qué hace vibrar tu alma.</p>
<div className="mt-8">
<span className="text-[10px] uppercase tracking-widest border border-[var(--c-accent)] text-[var(--c-accent)] px-4 py-2 rounded-full">100% Gratuito</span>
</div>
</div>
<div className="card-img-wrap">
<img alt="Formulario" className="card-img" src="https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content bg-[#FCF9F7]">
<span className="text-4xl md:text-6xl display mb-6 text-[var(--c-accent)]/30">02</span>
<h3 className="text-lg md:text-3xl font-medium tracking-tight uppercase mb-4">La Entrevista</h3>
<p className="text-sm md:text-lg text-gray-500 font-light leading-relaxed">Si tu perfil encaja con el programa, tendremos una breve charla vía WhatsApp para asegurar la calidad de los participantes.</p>
</div>
<div className="card-img-wrap">
<img alt="Conversación" className="card-img" src="https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content bg-[#FCF9F7]">
<span className="text-4xl md:text-6xl display mb-6 text-[var(--c-accent)]/30">03</span>
<h3 className="text-lg md:text-3xl font-medium tracking-tight uppercase mb-4">El Emparejamiento</h3>
<p className="text-sm md:text-lg text-gray-500 font-light leading-relaxed">Nuestro equipo utiliza tus respuestas para encontrar a la persona más compatible. Buscamos química real, no solo física.</p>
</div>
<div className="card-img-wrap">
<img alt="Destino" className="card-img" src="https://images.unsplash.com/photo-1516589178581-6cd7853282b7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content bg-[#FCF9F7]">
<span className="text-4xl md:text-6xl display mb-6 text-[var(--c-accent)]/30">04</span>
<h3 className="text-lg md:text-3xl font-medium tracking-tight uppercase mb-4">El Encuentro</h3>
<p className="text-sm md:text-lg text-gray-500 font-light leading-relaxed">Te invitamos a una mesa privada en Terraza Cuchara. A plena luz del día, solo tú, tu cita y una guía de 36 preguntas para romper el hielo.</p>
</div>
<div className="card-img-wrap">
<img alt="Mesa de día" className="card-img" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 max-w-4xl mx-auto bg-[var(--c-bg)]">
<h2 className="display text-xl md:text-3xl tracking-tight text-center mb-16 uppercase">Preguntas Frecuentes</h2>
<div className="space-y-4">
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">1. ¿Cuándo se realizará el evento?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">El evento se realizará el 20 de marzo, en un único día y horario previamente asignado a cada participante.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">2. ¿Cómo funciona el proceso para encontrar pareja en el evento?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">Funciona a través de un proceso de ultra selectividad. Cada persona debe completar un formulario, el cual es revisado manualmente por nuestro equipo. Analizamos características, cualidades y gustos para enlazar perfiles que sean lo más compatibles posible. Las citas son semi ciegas: no es al azar, sino basadas en un estudio previo de tu perfil.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">3. ¿Es necesario registrarse o comprar una entrada? ¿Tiene algún costo?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">Sí, el registro es 100% obligatorio. El evento no tiene ningún costo, es totalmente gratuito.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">4. ¿Es un evento solo para personas adultas o hay un rango de edad específico?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">Es para mayores de 18 años. No existe un límite de edad máximo, aunque está más enfocado en personas de edad adulta.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">5. ¿Cómo se garantiza que las personas sean compatibles o se sientan seguras?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">La compatibilidad se garantiza mediante un control de calidad riguroso, donde revisamos manualmente cada formulario antes de aceptar a los participantes.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">6. ¿Habrá actividades específicas para romper el hielo o conocer a otros participantes?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">No habrá dinámicas grupales. Cada encuentro contará con un menú especial con preguntas sugeridas, diseñadas para facilitar la conversación y conocerse mejor.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">7. ¿El evento se realizará solo en este restaurante o habrá ediciones en otras ciudades?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">El evento se realizará únicamente en este restaurante. Por el momento no hay versiones virtuales ni en otras ciudades.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">8. ¿Habrá algún tipo de seguimiento posterior al evento, como citas o grupos de apoyo?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">No. El evento es una experiencia única y no contempla seguimiento posterior, grupos ni citas organizadas después.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">9. ¿Puedo llevar a un amigo/a o es estrictamente individual?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">Sí, puedes asistir con un amigo o conocido. No está prohibido ni restringido.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">10. ¿Cuál es el código de vestimenta recomendado para el evento?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">No hay código de vestimenta. Puedes venir como te sientas más cómodo y representado.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">11. ¿Qué medidas de seguridad se tomarán para garantizar la comodidad de todos?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">Solo podrán asistir personas registradas y previamente filtradas. No se permitirá el ingreso de nadie que no haya pasado por el proceso de inscripción.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">12. ¿Se permitirá el ingreso a personas con discapacidad o habrá accesibilidad especial?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">Sí, no existe ningún inconveniente para que personas con discapacidad puedan asistir.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">13. ¿Habrá un límite de cupos o es un evento con acceso libre?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">Sí, los cupos son limitados y dependen de la disponibilidad y organización interna del evento.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">14. ¿Cómo se manejarán las posibles cancelaciones o cambios de fecha?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">Si una persona cancela, se le ofrecerá la posibilidad de reagendar su horario, siempre que existan cupos disponibles.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">15. ¿Habrá algún tipo de dinámica especial antes de iniciar las conversaciones?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">No habrá dinámicas previas. La experiencia se centra directamente en el encuentro, apoyado por las preguntas sugeridas.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">16. ¿Se podrá pedir comida o bebida durante el evento?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">Sí, se puede pedir comida y bebida normalmente durante el evento.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">17. ¿Habrá algún tipo de matching o contacto post-evento?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">No hay matching posterior ni intercambio automático de contactos. Cualquier vínculo queda a criterio de los participantes.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">18. ¿Hay algún dress code específico o recomendaciones de estilo?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">No. La recomendación es simplemente venir como tú mismo.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">19. ¿Se podrán tomar fotos o habrá algún espacio para recuerdos del evento?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">Sí, se permite tomar fotos para recuerdo, siempre respetando a los demás participantes.</p>
</div>
<div className="faq-item border-b border-gray-200 pb-5 cursor-pointer group">
<div className="flex justify-between items-center gap-4">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest group-hover:text-[var(--c-accent)] transition-colors">20. ¿Cómo puedo contactar al organizador si tengo más inquietudes después del evento?</span>
<iconify-icon className="text-lg text-gray-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</div>
<p className="faq-answer text-xs md:text-sm text-gray-500 font-light leading-relaxed">Todas las consultas se atienden exclusivamente a través de Instagram.</p>
</div>
</div>
</section>
<section className="py-24 bg-[var(--c-dark)] text-white text-center px-6 relative overflow-hidden">
<div className="absolute inset-0 opacity-20">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
<div className="relative z-10">
<h2 className="display text-2xl md:text-5xl mb-8 tracking-tight uppercase">No busques, <br className="md:hidden"/> déjate encontrar</h2>
<p className="text-sm md:text-lg font-light text-gray-400 mb-12 max-w-xl mx-auto">El primer paso para una gran historia es simplemente estar dispuesto a escribirla a plena luz del día.</p>
<a className="inline-flex items-center gap-4 bg-[var(--c-accent)] text-white px-10 md:px-14 py-5 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium hover:scale-105 transition-all rounded-full shadow-2xl" href="#">
                    Solicitar Registro Gratuito
                    <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</section>
</div>
<footer className="footer-sticky px-6 bg-white">
<div className="relative z-10 text-center w-full">
<div className="text-[10px] uppercase tracking-[0.4em] mb-8 text-gray-400 font-medium">Sede Oficial</div>
<a className="display text-[8vw] md:text-[6vw] leading-none hover:text-[var(--c-accent)] transition-colors text-[var(--c-dark)] tracking-tighter" href="#">
                TERRAZA CUCHARA
            </a>
<div className="flex justify-center flex-wrap gap-8 md:gap-12 mt-16 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
<a className="hover:text-[var(--c-dark)] transition-colors" href="#">Instagram</a>
<a className="hover:text-[var(--c-dark)] transition-colors" href="#">Ubicación</a>
<a className="hover:text-[var(--c-dark)] transition-colors" href="#">Privacidad</a>
</div>
<div className="mt-24 text-[9px] text-gray-300 tracking-[0.4em] uppercase font-light">
                © 2025 EL ARTE DE CONECTAR
            </div>
</div>
<img className="absolute inset-0 w-full h-full object-cover opacity-[0.03] grayscale pointer-events-none" src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</footer>


    </>
  );
}
