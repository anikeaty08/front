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
maru: {
yellow: '#F2C94C',
cream: '#FDF8EE',
lavender: '#2A2238',
purple: '#7B6FD4',
green: '#4A7C59',
coral: '#E8866A',
surface: '#F7F2E8'
}
},
fontFamily: {
sans: ['DM Sans', 'sans-serif'],
serif: ['Fraunces', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        let currentSlide = 1;
        const totalSlides = 16;
        const slides = document.querySelectorAll('.slide');
        const counter = document.getElementById('slide-counter');
        const btnPrev = document.getElementById('btn-prev');
        const btnNext = document.getElementById('btn-next');

        function updateSlide() {
            slides.forEach(slide => {
                slide.classList.remove('active');
                if(parseInt(slide.dataset.index) === currentSlide) {
                    slide.classList.add('active');
                }
            });
            
            // Update Counter
            counter.innerText = `${String(currentSlide).padStart(2, '0')} / ${totalSlides}`;
            
            // Update Buttons
            btnPrev.disabled = currentSlide === 1;
            btnPrev.style.opacity = currentSlide === 1 ? '0.3' : '1';
            
            // Optional: Hide next button on last slide or change text
            if(currentSlide === totalSlides) {
                btnNext.innerHTML = '<iconify-icon icon="solar:restart-linear" class="text-xl"></iconify-icon>';
            } else {
                btnNext.innerHTML = '<iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon>';
            }
        }

        function nextSlide() {
            if (currentSlide < totalSlides) {
                currentSlide++;
            } else {
                currentSlide = 1; // Loop back to start
            }
            updateSlide();
        }

        function prevSlide() {
            if (currentSlide > 1) {
                currentSlide--;
                updateSlide();
            }
        }

        // Keyboard Navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        });

        // Initialize
        updateSlide();
    
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
      

<nav className="fixed flex text-maru-lavender/60 uppercase text-sm font-medium tracking-widest w-full z-50 pt-6 pr-6 pb-6 pl-6 top-0 left-0 items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-maru-purple" icon="solar:sun-2-linear"></iconify-icon>
<span>Casa Marú</span>
</div>
<div className="" id="slide-counter">01 / 16</div>
</nav>

<div className="fixed bottom-8 right-8 z-50 flex gap-2">
<button className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white transition-colors text-maru-lavender disabled:opacity-30" disabled="" id="btn-prev" onclick="prevSlide()">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-maru-purple text-white shadow-lg shadow-maru-purple/20 flex items-center justify-center hover:bg-maru-purple/90 transition-transform active:scale-95" id="btn-next" onclick="nextSlide()"><iconify-icon className="text-xl" height="20" icon="solar:arrow-right-linear" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon></button>
</div>

<main className="w-full h-full relative max-w-7xl mx-auto">

<div className="slide active" data-index="1">
<div className="text-center max-w-4xl">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border border-maru-lavender/5 mb-8 shadow-sm">
<iconify-icon className="text-3xl text-maru-purple" icon="solar:sun-fog-linear"></iconify-icon>
</div>
<h1 className="font-serif text-6xl md:text-8xl font-medium tracking-tighter text-maru-lavender mb-6">
                    Casa Marú
                </h1>
<p className="text-xl md:text-2xl text-maru-lavender/60 font-serif italic mb-12">
                    Ludoteca Taller
                </p>
<div className="flex flex-wrap justify-center gap-3 text-xs font-medium uppercase tracking-widest text-maru-lavender/50">
<span className="px-3 py-1 border border-maru-lavender/10 rounded-full">Manizales, Colombia</span>
<span className="px-3 py-1 border border-maru-lavender/10 rounded-full">Primera Infancia</span>
<span className="px-3 py-1 border border-maru-lavender/10 rounded-full">Juego Libre</span>
<span className="px-3 py-1 border border-maru-lavender/10 rounded-full">Arte</span>
</div>
</div>
</div>

<div className="slide" data-index="2">
<div className="max-w-3xl w-full">
<span className="text-xs font-semibold tracking-widest uppercase text-maru-coral mb-6 block">El Desafío</span>
<h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight text-maru-lavender mb-8">
                    Los niños de hoy son evaluados, monitoreados y calificados casi desde que nacen.
                </h2>
<div className="bg-white p-8 rounded-3xl border border-maru-lavender/5 shadow-sm">
<p className="text-lg text-maru-lavender/70 leading-relaxed">
                        El sistema escolar mide lo que saben, lo que producen, lo que demuestran. <br/>
<span className="text-maru-purple font-medium">Y empieza cada vez más temprano.</span>
</p>
</div>
</div>
</div>

<div className="slide" data-index="3">
<div className="max-w-4xl text-center">
<h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-maru-lavender mb-12">
                    Una observación <span className="italic text-maru-green font-light">contraintuitiva</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-white/50 border border-maru-lavender/5">
<iconify-icon className="text-4xl text-maru-lavender/30 mb-4" icon="solar:walking-round-linear"></iconify-icon>
<p className="text-lg text-maru-lavender/80">Nadie le enseña a un niño a <span className="font-medium text-maru-lavender">caminar</span>.</p>
</div>
<div className="p-6 rounded-2xl bg-white/50 border border-maru-lavender/5">
<iconify-icon className="text-4xl text-maru-lavender/30 mb-4" icon="solar:chat-round-linear"></iconify-icon>
<p className="text-lg text-maru-lavender/80">Nadie le enseña a <span className="font-medium text-maru-lavender">hablar</span>.</p>
</div>
<div className="p-6 rounded-2xl bg-white/50 border border-maru-lavender/5">
<iconify-icon className="text-4xl text-maru-lavender/30 mb-4" icon="solar:gamepad-linear"></iconify-icon>
<p className="text-lg text-maru-lavender/80">Nadie le enseña a <span className="font-medium text-maru-lavender">jugar</span>.</p>
</div>
</div>
</div>
</div>

<div className="slide" data-index="4">
<div className="max-w-3xl text-center relative">
<iconify-icon className="absolute -top-12 -left-12 text-6xl text-maru-purple/10" icon="solar:quote-up-square-linear"></iconify-icon>
<h3 className="font-serif text-3xl md:text-5xl font-medium leading-tight text-maru-lavender mb-8">
                    Lo que necesitan es que los adultos <span className="text-maru-purple italic">confiemos</span> en ellos mientras lo hacen.
                </h3>
<div className="flex flex-col items-center gap-4">
<div className="h-px w-16 bg-maru-lavender/20"></div>
<p className="text-sm uppercase tracking-widest text-maru-lavender/50">Desarrollo Fisiológico · Emmi Pikler</p>
<p className="text-maru-lavender/70 max-w-lg">El niño aprende porque su naturaleza tiene su propia inteligencia.</p>
</div>
</div>
</div>

<div className="slide" data-index="5">
<div className="flex flex-col items-center">
<div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 border-4 border-white shadow-xl shadow-maru-lavender/5">
<img alt="Ángela Valencia" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h2 className="font-serif text-4xl font-medium text-maru-lavender mb-2">Ángela Valencia</h2>
<div className="flex gap-3 text-sm font-medium uppercase tracking-widest text-maru-purple/80">
<span>Pedagoga</span>
<span>·</span>
<span>Lectora</span>
<span>·</span>
<span>Fundadora</span>
</div>
</div>
</div>

<div className="slide" data-index="6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl items-center">
<div>
<span className="text-xs font-semibold tracking-widest uppercase text-maru-lavender/40 mb-4 block">La Historia</span>
<p className="text-xl text-maru-lavender/80 leading-relaxed mb-8">
                        Ángela pasó años investigando cómo aprenden los niños fuera del sistema — en veredas, parques y con familias hispanohablantes en Nueva York.
                    </p>
<div className="border-l-2 border-maru-purple pl-6 py-2 mb-8">
<p className="font-serif italic text-2xl text-maru-lavender">
                            "Cuando a un niño se le da tiempo, espacio y libertad real, suceden cosas extraordinarias."
                        </p>
</div>
</div>
<div className="bg-white p-8 rounded-[2rem] border border-maru-lavender/5 shadow-lg shadow-maru-lavender/5">
<div className="flex items-start gap-4 mb-4">
<div className="bg-maru-surface p-2 rounded-full text-maru-lavender">
<iconify-icon className="text-xl" icon="solar:calendar-linear"></iconify-icon>
</div>
<div>
<span className="block text-sm font-bold text-maru-lavender">29 de Julio, 2024</span>
<span className="text-sm text-maru-lavender/60">Apertura oficial</span>
</div>
</div>
<div className="flex items-start gap-4 mb-4">
<div className="bg-maru-surface p-2 rounded-full text-maru-lavender">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<span className="block text-sm font-bold text-maru-lavender">15 Familias</span>
<span className="text-sm text-maru-lavender/60">Grupo inicial</span>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-maru-surface p-2 rounded-full text-maru-lavender">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<span className="block text-sm font-bold text-maru-lavender">Barrio Palermo</span>
<span className="text-sm text-maru-lavender/60">Manizales, Colombia</span>
</div>
</div>
</div>
</div>
</div>

<div className="slide" data-index="7">
<div className="max-w-6xl w-full">
<div className="text-center mb-12">
<h2 className="font-serif text-4xl font-medium text-maru-lavender">No es un jardín. No es un taller.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-maru-lavender/5">
<iconify-icon className="text-3xl text-maru-green mb-4" icon="solar:home-smile-linear"></iconify-icon>
<h3 className="font-serif text-xl mb-3">Un Espacio</h3>
<p className="text-sm text-maru-lavender/70 leading-relaxed">
                            Físico, pensado con intención. Cada rincón dice: aquí eres bienvenido, aquí eres capaz.
                        </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-maru-lavender/5">
<iconify-icon className="text-3xl text-maru-yellow mb-4" icon="solar:book-2-linear"></iconify-icon>
<h3 className="font-serif text-xl mb-3">Una Pedagogía</h3>
<p className="text-sm text-maru-lavender/70 leading-relaxed">
                            Reggio Emilia y movimiento libre Pikler. El niño como protagonista de su propio proceso.
                        </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-maru-lavender/5">
<iconify-icon className="text-3xl text-maru-coral mb-4" icon="solar:heart-linear"></iconify-icon>
<h3 className="font-serif text-xl mb-3">Una Comunidad</h3>
<p className="text-sm text-maru-lavender/70 leading-relaxed">
                            Para niños (1-7 años), padres y abuelos. Porque ningún niño crece bien en soledad.
                        </p>
</div>
</div>
</div>
</div>

<div className="slide" data-index="8">
<div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h2 className="font-serif text-5xl font-medium text-maru-lavender mb-6">Las Bases <br/>de Casa Marú</h2>
<p className="text-maru-lavender/60">Cuatro lenguajes. Una misma convicción.</p>
</div>
<div className="space-y-6">
<div className="flex items-baseline gap-4 group">
<span className="text-maru-yellow font-serif text-2xl font-bold">01</span>
<div>
<h3 className="font-bold text-maru-lavender mb-1">Movimiento Libre</h3>
<p className="text-sm text-maru-lavender/70">El cuerpo aprende desde adentro. Sin que lo enseñen.</p>
</div>
</div>
<div className="flex items-baseline gap-4 group">
<span className="text-maru-yellow font-serif text-2xl font-bold">02</span>
<div>
<h3 className="font-bold text-maru-lavender mb-1">Lectura Afectiva</h3>
<p className="text-sm text-maru-lavender/70">Los libros como puentes, no como instrumentos.</p>
</div>
</div>
<div className="flex items-baseline gap-4 group">
<span className="text-maru-yellow font-serif text-2xl font-bold">03</span>
<div>
<h3 className="font-bold text-maru-lavender mb-1">Arte Expresivo</h3>
<p className="text-sm text-maru-lavender/70">Explorar materiales sin resultado prescrito.</p>
</div>
</div>
<div className="flex items-baseline gap-4 group">
<span className="text-maru-yellow font-serif text-2xl font-bold">04</span>
<div>
<h3 className="font-bold text-maru-lavender mb-1">Juego Libre</h3>
<p className="text-sm text-maru-lavender/70">Los niños eligen. Los adultos observan.</p>
</div>
</div>
</div>
</div>
</div>

<div className="slide" data-index="9">
<div className="max-w-4xl text-center bg-white p-16 rounded-[3rem] shadow-sm border border-maru-lavender/5">
<p className="font-serif text-3xl md:text-4xl leading-relaxed text-maru-lavender mb-8">
                    "Nos han dicho que hay que leer para que los niños sean más inteligentes. En Casa Marú leemos para que se sientan <span className="bg-maru-yellow/30 px-1 rounded-md">amados</span>."
                </p>
<div className="flex items-center justify-center gap-3">
<span className="w-2 h-2 rounded-full bg-maru-purple"></span>
<span className="text-sm font-medium uppercase tracking-widest text-maru-lavender/50">Ángela Valencia, Fundadora</span>
</div>
</div>
</div>

<div className="slide" data-index="10">
<div className="max-w-6xl w-full">
<div className="text-center mb-8">
<h2 className="font-serif text-3xl font-medium text-maru-lavender">Dos enfoques de la infancia</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 rounded-3xl border border-maru-lavender/10 opacity-60">
<h3 className="font-semibold text-lg uppercase tracking-widest mb-6 text-maru-lavender/50">Educación Convencional</h3>
<ul className="space-y-4 text-maru-lavender/70">
<li className="flex gap-3"><iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon> El adulto diseña la actividad</li>
<li className="flex gap-3"><iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon> El resultado importa más que el proceso</li>
<li className="flex gap-3"><iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon> Leer = aprender a leer</li>
<li className="flex gap-3"><iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon> Evaluar el progreso</li>
</ul>
</div>

<div className="p-8 rounded-3xl bg-white border border-maru-purple/20 shadow-xl shadow-maru-purple/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-maru-purple"></div>
<h3 className="font-semibold text-lg uppercase tracking-widest mb-6 text-maru-purple">Pedagogía Marú</h3>
<ul className="space-y-4 text-maru-lavender">
<li className="flex gap-3 items-center"><iconify-icon className="text-xl text-maru-purple" icon="solar:check-circle-linear"></iconify-icon> El niño lidera su exploración</li>
<li className="flex gap-3 items-center"><iconify-icon className="text-xl text-maru-purple" icon="solar:check-circle-linear"></iconify-icon> El proceso es el aprendizaje</li>
<li className="flex gap-3 items-center"><iconify-icon className="text-xl text-maru-purple" icon="solar:check-circle-linear"></iconify-icon> Leer = sentirse amado</li>
<li className="flex gap-3 items-center"><iconify-icon className="text-xl text-maru-purple" icon="solar:check-circle-linear"></iconify-icon> Confiar en el ritmo natural</li>
</ul>
</div>
</div>
</div>
</div>

<div className="slide" data-index="11">
<div className="max-w-4xl text-center">
<span className="text-xs font-semibold tracking-widest uppercase text-maru-green mb-4 block">Reggio Emilia</span>
<h2 className="font-serif text-4xl font-medium text-maru-lavender mb-8">El ambiente como tercer maestro</h2>
<div className="flex flex-wrap justify-center gap-4 mb-12">
<span className="px-6 py-3 bg-white rounded-full border border-maru-lavender/10 text-maru-lavender shadow-sm">
                        ◯ Luz natural sin filtros
                    </span>
<span className="px-6 py-3 bg-white rounded-full border border-maru-lavender/10 text-maru-lavender shadow-sm">
                        ◯ Materiales a su altura
                    </span>
<span className="px-6 py-3 bg-white rounded-full border border-maru-lavender/10 text-maru-lavender shadow-sm">
                        ◯ Sin pantallas. Sin ruido.
                    </span>
</div>
<p className="font-serif italic text-xl text-maru-lavender/60">
                    "Cada rincón de Casa Marú fue pensado para decirle al niño: <br/> aquí eres bienvenido, aquí eres capaz."
                </p>
</div>
</div>

<div className="slide" data-index="12">
<div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 h-3/4">

<div className="bg-maru-surface rounded-3xl p-10 flex flex-col justify-center border border-maru-lavender/5">
<iconify-icon className="text-4xl text-maru-coral mb-6" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="font-serif text-3xl text-maru-lavender mb-2">Familias</h3>
<p className="text-sm text-maru-lavender/60 mb-8">Padres, abuelos, cuidadores. Niños 1-7 años.</p>
<ul className="space-y-3 text-sm font-medium text-maru-lavender/80">
<li className="flex gap-2"><span className="text-maru-coral">•</span> Talleres mensuales</li>
<li className="flex gap-2"><span className="text-maru-coral">•</span> Hora del Cuento</li>
<li className="flex gap-2"><span className="text-maru-coral">•</span> Asesoría Pedagógica</li>
<li className="flex gap-2"><span className="text-maru-coral">•</span> La Salida del Puerto</li>
</ul>
</div>

<div className="bg-white rounded-3xl p-10 flex flex-col justify-center border border-maru-lavender/5">
<iconify-icon className="text-4xl text-maru-purple mb-6" icon="solar:buildings-2-linear"></iconify-icon>
<h3 className="font-serif text-3xl text-maru-lavender mb-2">Instituciones</h3>
<p className="text-sm text-maru-lavender/60 mb-8">Colegios, jardines y bibliotecas.</p>
<ul className="space-y-3 text-sm font-medium text-maru-lavender/80">
<li className="flex gap-2"><span className="text-maru-purple">•</span> Formación lectura voz alta</li>
<li className="flex gap-2"><span className="text-maru-purple">•</span> Narración oral · Kamishibai</li>
<li className="flex gap-2"><span className="text-maru-purple">•</span> Curaduría de libros</li>
<li className="flex gap-2"><span className="text-maru-purple">•</span> Talleres y conferencias</li>
</ul>
</div>
</div>
</div>

<div className="slide" data-index="13">
<div className="max-w-6xl w-full">
<h2 className="font-serif text-4xl mb-8 text-center text-maru-lavender">Nuestras Experiencias</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="col-span-2 p-6 rounded-3xl bg-maru-green/10 flex flex-col justify-between h-64">
<div>
<span className="text-xs font-bold uppercase tracking-widest text-maru-green">Talleres</span>
<h3 className="font-serif text-2xl mt-2 mb-1">Ciclo Mensual</h3>
<p className="text-sm opacity-70">Arte, sonido y materiales.</p>
</div>
<span className="font-medium">$85K – $240K</span>
</div>

<div className="col-span-2 md:col-span-1 p-6 rounded-3xl bg-maru-yellow/20 flex flex-col justify-between h-64">
<div>
<span className="text-xs font-bold uppercase tracking-widest text-maru-lavender/60">Sábados</span>
<h3 className="font-serif text-xl mt-2 mb-1">Hora del Cuento</h3>
</div>
<span className="font-medium">$30.000</span>
</div>

<div className="col-span-2 md:col-span-1 p-6 rounded-3xl bg-white border border-maru-lavender/10 flex flex-col justify-between h-64">
<div>
<span className="text-xs font-bold uppercase tracking-widest text-maru-purple">1 a 1</span>
<h3 className="font-serif text-xl mt-2 mb-1">Asesoría</h3>
<p className="text-sm opacity-70">Crianza y jardín.</p>
</div>
<iconify-icon className="self-end text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="col-span-2 md:col-span-4 p-6 rounded-3xl bg-maru-purple text-white flex items-center justify-between">
<div className="flex items-center gap-4">
<iconify-icon className="text-3xl text-maru-yellow" icon="solar:star-fall-linear"></iconify-icon>
<div>
<h3 className="font-serif text-xl">La Salida del Puerto</h3>
<p className="text-sm opacity-80">Acompañamiento premium de 6 semanas.</p>
</div>
</div>
<span className="text-sm font-bold bg-white/20 px-4 py-2 rounded-full">Ver más →</span>
</div>
</div>
</div>
</div>

<div className="slide" data-index="14">
<div className="max-w-4xl bg-maru-purple rounded-[3rem] p-12 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<span className="inline-block px-3 py-1 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest mb-6">Programa Premium</span>
<h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 relative z-10">La Salida del Puerto</h2>
<p className="text-xl text-white/80 mb-10 max-w-2xl relative z-10">
                    Un acompañamiento de 6 semanas para que la transición al jardín sea el comienzo de una aventura — no el final de la seguridad.
                </p>
<div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
<div className="flex items-center gap-3 text-sm font-medium">
<iconify-icon className="text-maru-yellow" icon="solar:check-circle-bold"></iconify-icon> Evaluación inicial
                    </div>
<div className="flex items-center gap-3 text-sm font-medium">
<iconify-icon className="text-maru-yellow" icon="solar:check-circle-bold"></iconify-icon> Sesiones familiares
                    </div>
<div className="flex items-center gap-3 text-sm font-medium">
<iconify-icon className="text-maru-yellow" icon="solar:check-circle-bold"></iconify-icon> Guía de jardín
                    </div>
<div className="flex items-center gap-3 text-sm font-medium">
<iconify-icon className="text-maru-yellow" icon="solar:check-circle-bold"></iconify-icon> Protocolo adaptación
                    </div>
<div className="flex items-center gap-3 text-sm font-medium col-span-2">
<iconify-icon className="text-maru-yellow" icon="solar:star-bold"></iconify-icon> Solo 2 familias por mes
                    </div>
</div>
</div>
</div>

<div className="slide" data-index="15">
<div className="text-center mb-12">
<h2 className="font-serif text-3xl font-medium text-maru-lavender">Un año. Muchas historias.</h2>
<p className="text-sm uppercase tracking-widest text-maru-lavender/50 mt-2">Desde Julio 2024</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl w-full">
<div className="text-center p-6 border-r border-maru-lavender/10 last:border-0">
<span className="block text-5xl font-serif text-maru-purple mb-2">500+</span>
<span className="text-xs font-bold uppercase tracking-widest text-maru-lavender/40">Familias</span>
</div>
<div className="text-center p-6 border-r border-maru-lavender/10 last:border-0 md:border-r">
<span className="block text-5xl font-serif text-maru-green mb-2">1k+</span>
<span className="text-xs font-bold uppercase tracking-widest text-maru-lavender/40">Niños</span>
</div>
<div className="text-center p-6 border-r border-maru-lavender/10 last:border-0">
<span className="block text-5xl font-serif text-maru-coral mb-2">100+</span>
<span className="text-xs font-bold uppercase tracking-widest text-maru-lavender/40">Talleres</span>
</div>
<div className="text-center p-6">
<span className="block text-5xl font-serif text-maru-yellow mb-2">15</span>
<span className="text-xs font-bold uppercase tracking-widest text-maru-lavender/40">Familias Fundadoras</span>
</div>
</div>
</div>

<div className="slide" data-index="16">
<div className="text-center max-w-3xl">
<div className="w-20 h-20 bg-maru-surface rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
<iconify-icon className="text-4xl text-maru-purple" icon="solar:map-point-wave-linear"></iconify-icon>
</div>
<h2 className="font-serif text-6xl md:text-7xl font-medium tracking-tighter text-maru-lavender mb-12">
                    ¿Listos para explorar?
                </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="px-8 py-4 bg-maru-purple text-white rounded-full font-bold hover:bg-maru-purple/90 transition-transform hover:-translate-y-1 shadow-lg shadow-maru-purple/20 flex items-center gap-2" href="#">
<iconify-icon className="text-xl" icon="solar:chat-round-dots-linear"></iconify-icon>
                        WhatsApp
                    </a>
<a className="px-8 py-4 bg-white text-maru-lavender border border-maru-lavender/10 rounded-full font-bold hover:bg-gray-50 transition-colors flex items-center gap-2" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
                        @casamaru
                    </a>
</div>
<p className="text-sm font-medium uppercase tracking-widest text-maru-lavender/40">
                    Barrio Palermo, Manizales · Colombia
                </p>
</div>
</div>
</main>



    </>
  );
}
