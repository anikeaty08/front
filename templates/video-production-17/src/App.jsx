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



        // Process Section Scroll Logic (Sticky Image Changer)
        document.addEventListener('DOMContentLoaded', () => {
            const processSteps = document.querySelectorAll('.process-step');
            const images = [
                document.getElementById('process-img-1'),
                document.getElementById('process-img-2'),
                document.getElementById('process-img-3')
            ];
            const numberEl = document.getElementById('process-number');

            const observerOptions = {
                root: null,
                rootMargin: '-40% 0px -40% 0px',
                threshold: 0
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const step = entry.target.getAttribute('data-step');
                        const index = parseInt(step) - 1;

                        // Update Number
                        numberEl.innerText = `0${step}`;

                        // Update Images
                        images.forEach((img, i) => {
                            if (i === index) {
                                img.classList.add('active');
                                img.classList.remove('inactive');
                            } else {
                                img.classList.remove('active');
                                img.classList.add('inactive');
                            }
                        });
                    }
                });
            }, observerOptions);

            processSteps.forEach(step => observer.observe(step));
        });

        // Draggable Infinite Scroll Logic for Portfolio
        (function() {
            const container = document.getElementById('marquee-container');
            const track = document.getElementById('marquee-track');

            if (!container || !track) return;

            // Clone items for infinite loop
            const originalCards = Array.from(track.children);
            originalCards.forEach(card => track.appendChild(card.cloneNode(true))); // Set 2
            originalCards.forEach(card => track.appendChild(card.cloneNode(true))); // Set 3

            let position = 0;
            const speed = 0.5;
            let isDragging = false;
            let startX = 0;
            let prevTranslate = 0;
            let animationID;

            function animate() {
                if (!isDragging) position += speed;
                const trackWidth = track.scrollWidth;
                const setWidth = trackWidth / 3;

                if (position >= setWidth) {
                    position = 0;
                    if(isDragging) { prevTranslate += setWidth; startX += setWidth; }
                }
                if (position < 0) {
                   position = setWidth - 1;
                   if(isDragging) { prevTranslate -= setWidth; startX -= setWidth; }
                }

                track.style.transform = `translateX(${-position}px)`;
                animationID = requestAnimationFrame(animate);
            }
            animationID = requestAnimationFrame(animate);

            // Drag Events
            const startDrag = (e) => {
                isDragging = true;
                container.classList.add('cursor-grabbing');
                container.classList.remove('cursor-grab');
                startX = e.pageX || e.touches[0].clientX;
                prevTranslate = position;
            }
            const moveDrag = (e) => {
                if (!isDragging) return;
                const currentX = e.pageX || e.touches[0].clientX;
                const diff = startX - currentX;
                position = prevTranslate + diff;
            }
            const endDrag = () => {
                isDragging = false;
                container.classList.add('cursor-grab');
                container.classList.remove('cursor-grabbing');
            }

            container.addEventListener('mousedown', startDrag);
            container.addEventListener('touchstart', startDrag);
            container.addEventListener('mousemove', moveDrag);
            container.addEventListener('touchmove', moveDrag);
            container.addEventListener('mouseup', endDrag);
            container.addEventListener('mouseleave', endDrag);
            container.addEventListener('touchend', endDrag);
        })();
    
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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
<a className="group flex items-center gap-3 pointer-events-auto" href="#">

<svg className="text-amber-500 group-hover:scale-105 transition-transform duration-300" fill="none" height="28" viewbox="0 0 32 32" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2L28.1244 9V23L16 30L3.87564 23V9L16 2Z" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M13 11V21L21 16L13 11Z" fill="currentColor"></path>
</svg>
<span className="text-xl md:text-2xl tracking-tight font-semibold">
          Bee<span className="font-normal text-zinc-300">Production</span>
</span>
</a>

<div className="hidden md:flex items-center gap-8 lg:gap-10 pointer-events-auto">
<a className="text-sm font-medium uppercase tracking-wide hover:text-amber-400 transition-colors" href="#uslugi">Usługi</a>
<a className="text-sm font-medium uppercase tracking-wide hover:text-amber-400 transition-colors" href="#realizacje">Realizacje</a>
<a className="text-sm font-medium uppercase tracking-wide hover:text-amber-400 transition-colors" href="#o-nas">O nas</a>
<a className="px-6 py-2.5 rounded-full border border-white/20 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300 text-sm font-medium uppercase tracking-wide backdrop-blur-sm" href="#kontakt">Skontaktuj się</a>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden bg-black">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16b5c7c1-f196-4707-b5d8-9ba5ecac10bc_1600w.jpg">
<source src="https://spark-labs.org/video/reel.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/20 z-0"></div>
<div className="absolute bottom-0 left-0 w-full px-6 py-16 md:px-12 md:py-24 z-10 flex flex-col md:flex-row justify-between items-end gap-8">
<div className="max-w-4xl fade-in-up">
<div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm rounded-full px-3 py-1 mb-6 tracking-wider uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> Dom Produkcyjny
          </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight font-instrument-serif mb-8 text-white">
            Produkcja wideo na <br/><span className="text-zinc-500 italic">najwyższym poziomie.</span>
</h1>
<div className="flex flex-col sm:flex-row gap-8 sm:items-center text-lg font-light">
<p className="max-w-md leading-relaxed text-zinc-400 text-base md:text-lg">
               Od 2010 roku przekuwamy pomysły w obrazy. Tworzymy reklamy, animacje i filmy korporacyjne, które angażują i realizują cele biznesowe.
             </p>
<div className="flex gap-4">
<a className="px-8 py-4 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors flex items-center gap-2" href="#kontakt">
                   Skontaktuj się z nami
                   <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 md:px-12 bg-zinc-950 relative z-10" id="uslugi">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<h2 className="text-4xl md:text-6xl font-instrument-serif text-white tracking-tight mb-4">Co robimy?</h2>
<p className="text-xl text-zinc-400 font-light max-w-xl">Kompleksowa realizacja projektów audiowizualnych – od pomysłu po finalny render.</p>
</div>
<a className="group flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-amber-500 border-b border-amber-500/30 pb-1 hover:border-amber-500 transition-all" href="#kontakt">
                    Zapytaj o ofertę <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

<div className="glass-panel p-8 md:p-10 rounded-[2rem] hover:bg-zinc-900/40 transition-colors duration-300 group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-amber-500/50 transition-colors text-amber-500">
<iconify-icon icon="solar:video-frame-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Spoty Reklamowe</h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">Kreatywne kampanie wideo do TV i internetu. Tworzymy reklamy, które przyciągają uwagę i zapadają w pamięć.</p>
</div>

<div className="glass-panel p-8 md:p-10 rounded-[2rem] hover:bg-zinc-900/40 transition-colors duration-300 group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-amber-500/50 transition-colors text-amber-500">
<iconify-icon icon="solar:buildings-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Filmy Korporacyjne</h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">Wideo wizerunkowe, employer branding i prezentacje produktów budujące zaufanie do Twojej marki.</p>
</div>

<div className="glass-panel p-8 md:p-10 rounded-[2rem] hover:bg-zinc-900/40 transition-colors duration-300 group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-amber-500/50 transition-colors text-amber-500">
<iconify-icon icon="solar:clapperboard-play-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Animacje 2D i 3D</h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">Od explainer video po zaawansowane modele 3D. Tłumaczymy skomplikowane procesy w prosty sposób.</p>
</div>

<div className="glass-panel p-8 md:p-10 rounded-[2rem] hover:bg-zinc-900/40 transition-colors duration-300 group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-amber-500/50 transition-colors text-amber-500">
<iconify-icon icon="solar:camera-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Sesje Zdjęciowe</h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">Profesjonalna fotografia biznesowa, produktowa i reklamowa. Tworzymy spójny wizualnie content.</p>
</div>

<div className="glass-panel p-8 md:p-10 rounded-[2rem] hover:bg-zinc-900/40 transition-colors duration-300 group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-amber-500/50 transition-colors text-amber-500">
<iconify-icon icon="solar:microphone-3-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Produkcja Podcastów</h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">Zapewniamy pełne wsparcie techniczne, nagrania audio/wideo oraz montaż Twojego podcastu.</p>
</div>

<div className="glass-panel p-8 md:p-10 rounded-[2rem] hover:bg-zinc-900/40 transition-colors duration-300 group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-amber-500/50 transition-colors text-amber-500">
<iconify-icon icon="solar:broadcast-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Streaming i Live</h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">Transmisje na żywo z wydarzeń, konferencji i webinarów w najwyższej jakości obrazu i dźwięku.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden z-10 bg-zinc-950 border-t border-b border-zinc-900/50 py-24 relative" id="realizacje">
<div className="px-6 md:px-12 mb-16">
<h2 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-instrument-serif text-white">
          Wybrane <span className="text-zinc-600 italic">realizacje</span>
</h2>
</div>

<div className="flex w-full overflow-hidden select-none active:cursor-grabbing touch-pan-y" id="marquee-container" style={{maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'}}>
<div className="flex gap-6 md:gap-8 min-w-max px-4 md:px-8 items-stretch will-change-transform" id="marquee-track">

<div className="group relative w-[85vw] md:w-[600px] h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-amber-500/50 transition-colors duration-500 shrink-0 cursor-pointer">
<div className="absolute inset-0 w-full h-full">
<img alt="Kampania TV" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-end">
<div className="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
<div>
<span className="text-xs font-semibold text-amber-400 tracking-widest uppercase mb-2 block">Reklama TV</span>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Nowa Kampania Produktowa</h3>
</div>
</div>
</div>

<div className="group relative w-[85vw] md:w-[600px] h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-amber-500/50 transition-colors duration-500 shrink-0 cursor-pointer">
<div className="absolute inset-0 w-full h-full">
<img alt="Film Korporacyjny" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-end">
<div className="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
<div>
<span className="text-xs font-semibold text-amber-400 tracking-widest uppercase mb-2 block">Film Korporacyjny</span>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Wizerunek Pracodawcy 2024</h3>
</div>
</div>
</div>

<div className="group relative w-[85vw] md:w-[600px] h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-amber-500/50 transition-colors duration-500 shrink-0 cursor-pointer">
<div className="absolute inset-0 w-full h-full">
<img alt="Animacja 3D" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-end">
<div className="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
<div>
<span className="text-xs font-semibold text-amber-400 tracking-widest uppercase mb-2 block">Animacja 3D</span>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Prezentacja Technologii</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-zinc-950 border-b border-zinc-900/50 overflow-hidden">
<div className="mb-8 text-center">
<p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold">Zaufali nam</p>
</div>
<div className="relative w-full" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="logo-ticker-track flex gap-16 md:gap-24 items-center">

<div className="text-2xl font-instrument-serif text-zinc-600 font-bold opacity-50">MARKA ONE</div>
<div className="text-2xl font-instrument-serif text-zinc-600 font-bold opacity-50">TECH CORP</div>
<div className="text-2xl font-instrument-serif text-zinc-600 font-bold opacity-50">STUDIO CO</div>
<div className="text-2xl font-instrument-serif text-zinc-600 font-bold opacity-50">GLOBAL BRAND</div>
<div className="text-2xl font-instrument-serif text-zinc-600 font-bold opacity-50">POLSKA FIRMA</div>

<div className="text-2xl font-instrument-serif text-zinc-600 font-bold opacity-50">MARKA ONE</div>
<div className="text-2xl font-instrument-serif text-zinc-600 font-bold opacity-50">TECH CORP</div>
<div className="text-2xl font-instrument-serif text-zinc-600 font-bold opacity-50">STUDIO CO</div>
<div className="text-2xl font-instrument-serif text-zinc-600 font-bold opacity-50">GLOBAL BRAND</div>
<div className="text-2xl font-instrument-serif text-zinc-600 font-bold opacity-50">POLSKA FIRMA</div>
</div>
</div>
</section>

<section className="relative bg-zinc-950 border-b border-zinc-900/50" id="proces">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="hidden lg:block relative h-full min-h-screen border-r border-zinc-900/50">
<div className="sticky top-0 h-screen w-full flex items-center justify-center p-12 lg:p-16">
<div className="relative w-full h-[85vh] max-h-[800px] flex items-start">

<div className="relative w-3/4 h-full overflow-hidden rounded-2xl border border-zinc-800">

<img alt="Koncepcja" className="process-img w-full h-full object-cover opacity-90" id="process-img-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f36259a7-cc94-4846-8290-2df52026731d_original.gif"/>

<img alt="Produkcja" className="process-img w-full h-full object-cover opacity-90" id="process-img-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebfeb48e-4108-49c6-86a2-a1491f93b564_original.gif"/>

<img alt="Postprodukcja" className="process-img w-full h-full object-cover opacity-90" id="process-img-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
</div>

<div className="absolute -right-4 top-8 z-20">
<span className="font-instrument-serif text-7xl lg:text-8xl text-amber-500/90 tracking-tight transition-all duration-500" id="process-number">01</span>
</div>
</div>
</div>
</div>

<div className="md:px-12 md:py-32 flex flex-col lg:gap-64 pt-24 pr-6 pb-24 pl-6 relative gap-x-32 gap-y-32">

<div className="lg:hidden mb-8">
<div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm rounded-full px-3 py-1 mb-6 tracking-wider uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Proces
                </div>
<h2 className="text-4xl md:text-5xl font-instrument-serif text-white tracking-tight">Jak pracujemy</h2>
</div>

<div className="process-step group flex flex-col justify-center min-h-[40vh]" data-step="1">
<span className="lg:hidden text-6xl font-instrument-serif text-amber-500/50 mb-6 block">01</span>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-zinc-100 tracking-tight mb-8 group-hover:text-white transition-colors">
                   Brief i Koncepcja
                </h3>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg mb-10">
                   Zaczynamy od zrozumienia Twoich potrzeb. Opracowujemy scenariusz, dobieramy lokacje, przygotowujemy moodboardy i szczegółowy plan działania.
                </p>
</div>

<div className="process-step group flex flex-col justify-center min-h-[40vh]" data-step="2">
<span className="lg:hidden text-6xl font-instrument-serif text-amber-500/50 mb-6 block">02</span>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-zinc-100 tracking-tight mb-8 group-hover:text-white transition-colors">
                   Produkcja i Zdjęcia
                </h3>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg mb-10">
                   Wchodzimy na plan. Dysponujemy najwyższej klasy sprzętem filmowym, oświetleniowym oraz doświadczoną ekipą, która dba o każdy detal kadru.
                </p>
</div>

<div className="process-step group flex flex-col justify-center min-h-[40vh]" data-step="3">
<span className="lg:hidden text-6xl font-instrument-serif text-amber-500/50 mb-6 block">03</span>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-zinc-100 tracking-tight mb-8 group-hover:text-white transition-colors">
                   Postprodukcja
                </h3>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg mb-10">
                   Montaż, korekcja barwna, udźwiękowienie i animacje. Nadajemy materiałom ostateczny szlif, dostarczając gotowe pliki zoptymalizowane pod każdą platformę.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-zinc-950 border-b border-zinc-900/50" id="o-nas">
<div className="max-w-[1400px] mx-auto">
<div className="mb-20 max-w-2xl">
<h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight font-instrument-serif mb-6">
              Polska Agencja <br/><span className="text-zinc-600">Produkcyjna.</span>
</h2>
<p className="text-xl text-zinc-400 font-light leading-relaxed">
              Jesteśmy zgranym zespołem twórców, który od lat dostarcza najwyższej jakości rozwiązania audiowizualne dla biznesu.
           </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-5 group relative min-h-[500px] bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] hover:border-zinc-600 transition-all duration-500 overflow-hidden flex flex-col justify-between p-10">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-amber-500" icon="solar:cup-star-linear" width="24"></iconify-icon>
<span className="uppercase text-xs font-bold tracking-[0.2em] text-zinc-500">Doświadczenie</span>
</div>
<h3 className="text-4xl md:text-5xl font-instrument-serif text-white tracking-tight mb-4 leading-[0.95]">Działamy od 2010 roku</h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed max-w-sm">
                Tysiące godzin na planach zdjęciowych, setki zrealizowanych kampanii i projektów korporacyjnych.
              </p>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-6 h-full">

<div className="group relative bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-10 hover:border-zinc-600 transition-all duration-500 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
<div className="relative z-10 flex-1">
<h3 className="md:text-4xl leading-[0.95] text-3xl text-white tracking-tight font-instrument-serif mb-4">Pełne zaplecze sprzętowe</h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed">
                    Dysponujemy własnym sprzętem kinowym, oświetleniem i studiem, co pozwala nam działać szybko i niezależnie.
                  </p>
</div>
<div className="relative w-16 h-16 md:w-24 md:h-24 flex-shrink-0 flex items-center justify-center rounded-full border border-zinc-800/50 bg-zinc-900 text-amber-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:videocamera-record-linear" width="40"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">

<div className="group relative bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-8 md:p-10 hover:border-zinc-600 transition-all duration-500 flex flex-col justify-between min-h-[250px]">
<div>
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight">Kreatywność</h3>
<p className="text-base text-zinc-500 font-light">Szukamy nieszablonowych rozwiązań.</p>
</div>
<iconify-icon className="text-amber-500/30 group-hover:text-amber-500 transition-colors" icon="solar:lightbulb-bolt-linear" width="48"></iconify-icon>
</div>

<div className="group relative bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-8 md:p-10 hover:border-zinc-600 transition-all duration-500 flex flex-col justify-between min-h-[250px]">
<div>
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight">Terminowość</h3>
<p className="text-base text-zinc-500 font-light">Szanujemy Twój czas i deadline'y.</p>
</div>
<iconify-icon className="text-amber-500/30 group-hover:text-amber-500 transition-colors" icon="solar:clock-circle-linear" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-zinc-950 border-b border-zinc-900/50" id="opinie">
<div className="max-w-[1400px] mx-auto">
<h2 className="text-4xl md:text-6xl font-instrument-serif font-normal text-white tracking-tight mb-20">
                Głosy naszych <span className="italic text-zinc-500">klientów</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel p-10 rounded-3xl flex flex-col justify-between hover:border-zinc-700 transition-colors">
<div className="mb-8 text-amber-500">
<iconify-icon icon="solar:quote-left-bold" width="32"></iconify-icon>
</div>
<p className="text-xl text-zinc-300 font-light leading-relaxed mb-8">
                        "Pełen profesjonalizm i świetne zrozumienie naszej marki. Spot reklamowy przerósł nasze oczekiwania i świetnie poradził sobie w kampanii digitalowej."
                    </p>
<div>
<p className="text-white font-medium">Dyrektor Marketingu</p>
<p className="text-sm text-zinc-500">Branża Technologiczna</p>
</div>
</div>

<div className="glass-panel p-10 rounded-3xl flex flex-col justify-between hover:border-zinc-700 transition-colors">
<div className="mb-8 text-amber-500">
<iconify-icon icon="solar:quote-left-bold" width="32"></iconify-icon>
</div>
<p className="text-xl text-zinc-300 font-light leading-relaxed mb-8">
                        "Współpraca z BeeProduction to czysta przyjemność. Terminowość, elastyczność na planie i doskonała jakość montażu. Polecam z czystym sumieniem."
                    </p>
<div>
<p className="text-white font-medium">Head of PR</p>
<p className="text-sm text-zinc-500">Sektor Finansowy</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-black relative overflow-hidden" id="kontakt">

<div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
<div className="">
<div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 border border-zinc-800 bg-zinc-900/50 rounded-full px-3 py-1 mb-8 tracking-wider uppercase">
                Kontakt
             </div>
<h2 className="text-5xl md:text-7xl font-instrument-serif text-white tracking-tight mb-6">Porozmawiajmy o <br/>Twoim wideo.</h2>
<p className="text-xl text-zinc-400 font-light mb-12 max-w-md">
                Potrzebujesz wyceny, masz pomysł lub szukasz inspiracji? Napisz do nas, odezwiemy się najszybciej jak to możliwe.
             </p>
<div className="space-y-8">

<a className="flex items-center gap-5 text-zinc-300 hover:text-white transition-colors group" href="mailto:hello@beeproduction.pl">
<div className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-black transition-all">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-zinc-500 uppercase tracking-widest font-semibold mb-1">E-mail</p>
<span className="text-lg font-medium">hello@beeproduction.pl</span>
</div>
</a>

<a className="flex items-center gap-5 text-zinc-300 hover:text-white transition-colors group" href="tel:+48000000000">
<div className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-black transition-all">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-zinc-500 uppercase tracking-widest font-semibold mb-1">Telefon</p>
<span className="text-lg font-medium">+48 000 000 000</span>
</div>
</a>

<div className="flex items-start gap-5 text-zinc-300 pt-4 border-t border-zinc-800/50">
<div className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-2">
<div>
<p className="text-sm text-zinc-500 uppercase tracking-widest font-semibold mb-2">Warszawa</p>
<p className="text-base text-zinc-300">ul. Chmielna 73</p>
</div>
<div>
<p className="text-sm text-zinc-500 uppercase tracking-widest font-semibold mb-2">Gliwice</p>
<p className="text-base text-zinc-300">ul. Górnych Wałów 37a</p>
</div>
</div>
</div>
</div>
</div>

<form className="glass-panel p-8 md:p-10 rounded-3xl space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase font-semibold tracking-wider text-zinc-500 ml-1">Imię i nazwisko</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" placeholder="Jan Kowalski" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-semibold tracking-wider text-zinc-500 ml-1">E-mail</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" placeholder="jan@firma.pl" type="email"/>
</div>
</div>
<div className="space-y-2 relative">
<label className="text-xs uppercase font-semibold tracking-wider text-zinc-500 ml-1">Rodzaj projektu</label>
<select className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none cursor-pointer">
<option>Produkcja spotu reklamowego</option>
<option>Film korporacyjny / produktowy</option>
<option>Animacja 2D / 3D</option>
<option>Sesja zdjęciowa</option>
<option>Podcast / Streaming</option>
<option>Inne zapytanie</option>
</select>
<iconify-icon className="absolute right-4 top-[38px] text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-semibold tracking-wider text-zinc-500 ml-1">Wiadomość</label>
<textarea className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none" placeholder="Opisz krótko swój projekt..." rows="4"></textarea>
</div>
<button className="hover:bg-amber-400 transition-colors flex gap-2 group font-semibold text-black bg-amber-500 w-full rounded-xl pt-4 pb-4 items-center justify-center mt-4" onclick="event.preventDefault();const b=this;const o=b.innerHTML;b.disabled=true;b.innerHTML='&lt;svg class=\'animate-spin h-5 w-5 text-black mr-2\' xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\'&gt;&lt;circle class=\'opacity-25\' cx=\'12\' cy=\'12\' r=\'10\' stroke=\'currentColor\' strokeWidth=\'4\'&gt;&lt;/circle&gt;&lt;path class=\'opacity-75\' fill=\'currentColor\' d=\'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\'&gt;&lt;/path&gt;&lt;/svg&gt;Wysyłanie...';setTimeout(()=&gt;{b.innerHTML=o;b.disabled=false;const t=document.createElement('div');t.className='fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-6 py-4 bg-white text-zinc-950 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-100 transform translate-y-24 opacity-0 transition-all duration-500 font-medium font-inter tracking-tight';t.innerHTML='&lt;svg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'#10b981\' strokeWidth=\'2.5\' strokeLinecap=\'round\' strokeLinejoin=\'round\'&gt;&lt;polyline points=\'20 6 9 17 4 12\'/&gt;&lt;/svg&gt;&lt;span&gt;Wiadomość wysłana pomyślnie&lt;/span&gt;';document.body.appendChild(t);requestAnimationFrame(()=&gt;t.classList.remove('translate-y-24','opacity-0'));setTimeout(()=&gt;{t.classList.add('translate-y-24','opacity-0');setTimeout(()=&gt;t.remove(),500)},3000);b.closest('form').reset()},1500)" type="submit">
                Wyślij zapytanie
                <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-2-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</section>

<div className="border-t border-zinc-900 bg-black pt-12 pb-8">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
<a className="flex items-center gap-2" href="#">
<svg className="text-zinc-600" fill="none" height="20" viewbox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2L28.1244 9V23L16 30L3.87564 23V9L16 2Z" stroke="currentColor" strokeWidth="2"></path>
<path d="M13 11V21L21 16L13 11Z" fill="currentColor"></path>
</svg>
<span className="text-lg font-medium text-zinc-500">BeeProduction</span>
</a>

<div className="flex gap-8 text-sm font-medium uppercase tracking-wide text-zinc-500">
<a className="hover:text-amber-400 transition-colors" href="#">Vimeo</a>
<a className="hover:text-amber-400 transition-colors" href="#">Instagram</a>
<a className="hover:text-amber-400 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-amber-400 transition-colors" href="#">Facebook</a>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-mono pt-8 border-t border-zinc-900/50">
<span>© 2024 BeeProduction. Wszelkie prawa zastrzeżone.</span>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Polityka prywatności</a>
<a className="hover:text-zinc-400" href="#">Regulamin</a>
</div>
</div>
</div>



    </>
  );
}
