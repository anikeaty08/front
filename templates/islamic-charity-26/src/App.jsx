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



        // Sticky Scroll Logic for Process Section
        document.addEventListener('DOMContentLoaded', () => {
            if (window.innerWidth >= 1024) { // Only run observer on desktop
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
            }
        });

        // Dynamic Time/Location
        (function() {
            const timeElement = document.getElementById('dynamic-time');
            
            function updateClock() {
                const now = new Date();
                timeElement.textContent = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
            }
            updateClock();
            setInterval(updateClock, 1000);
        })();

        // Draggable Infinite Scroll Logic
        (function() {
            const container = document.getElementById('marquee-container');
            const track = document.getElementById('marquee-track');

            if (!container || !track) return;

            // Clone items for infinite loop
            const originalCards = Array.from(track.children);
            originalCards.forEach(card => track.appendChild(card.cloneNode(true))); 

            let position = 0;
            const speed = 0.4;
            let isDragging = false;
            let startX = 0;
            let prevTranslate = 0;
            let animationID;

            function animate() {
                if (!isDragging) position += speed;
                const trackWidth = track.scrollWidth;
                const setWidth = trackWidth / 2; 

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
      

<div className="fixed top-0 left-0 w-full h-screen -z-50 bg-slate-900 overflow-hidden">

<video autoplay="" className="w-full h-full object-cover opacity-80 scale-105" loop="" muted="" playsinline="">
<source src="https://www.dropbox.com/scl/fi/xio9ktg3nz26swapp5rx0/Design-sans-titre.mp4?rlkey=jpuhcbcnh7250z7l7m3oje28o&amp;st=jzys138y&amp;raw=1" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-black/20"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 px-5 py-4 md:px-12 md:py-6 flex justify-between items-center transition-all duration-300 bg-white/0 md:bg-transparent">

<a className="group flex items-center gap-3 pointer-events-auto relative z-50" href="#">

<div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
<svg className="w-full h-full text-[#D4AF37] drop-shadow-md" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 100 100">
<path d="M50 15 L85 32.5 V67.5 L50 85 L15 67.5 V32.5 Z"></path>
<path d="M15 32.5 L50 50 L85 32.5"></path>
<path d="M50 50 V60"></path>
<path d="M50 82 C 50 82 32 70 32 60 C 32 54 36 51 40 51 C 44 51 47 53 50 56 C 53 53 56 51 60 51 C 64 51 68 54 68 60 C 68 70 50 82 50 82 Z" fill="#D4AF37" stroke="none"></path>
</svg>
</div>
<div className="flex flex-col justify-center">
<span className="text-xl md:text-2xl tracking-tight font-bold text-white group-hover:text-[#D4AF37] transition-colors drop-shadow-md">HASSANATY</span>
<span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-white/90 font-medium ml-0.5 drop-shadow-sm">Un Seul Cœur, Une Seule Oumma</span>
</div>
</a>

<div className="hidden md:flex items-center gap-2 pointer-events-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-2 py-2 shadow-lg">
<a className="px-6 py-2 rounded-full text-sm font-semibold text-white hover:text-[#D4AF37] hover:bg-white transition-all" href="#projets">Nos Projets</a>
<a className="px-6 py-2 rounded-full text-sm font-semibold text-white hover:text-[#D4AF37] hover:bg-white transition-all" href="#process">Transparence</a>
<a className="px-6 py-2 rounded-full text-sm font-semibold text-white hover:text-[#D4AF37] hover:bg-white transition-all" href="#contact">Contact</a>
<a className="ml-2 px-8 py-3 rounded-full bg-[#D4AF37] hover:bg-[#C5A028] text-white transition-all duration-300 text-sm font-bold tracking-wide shadow-[0_4px_20px_rgba(212,175,55,0.3)] flex items-center gap-2" href="#donate">
<iconify-icon className="text-lg" icon="solar:heart-angle-bold"></iconify-icon>
                Faire un Don
            </a>
</div>

<a className="md:hidden w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shadow-lg shadow-[#D4AF37]/40 z-50" href="#donate">
<iconify-icon className="text-xl" icon="solar:heart-angle-bold"></iconify-icon>
</a>
</nav>

<header className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end">

<div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-black/30 z-0"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAFAFA]/10 z-0"></div>
<div className="w-full px-5 py-12 md:px-12 md:py-24 flex flex-col md:flex-row justify-between items-end z-10 safe-pb">
<div className="max-w-4xl fade-in-up">
<div className="flex items-center gap-3 mb-4 md:mb-6 opacity-90">
<div className="h-[1px] w-8 md:w-12 bg-[#D4AF37]"></div>
<span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-xs md:text-sm drop-shadow-md">Œuvre Humanitaire</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1] tracking-tight font-bold text-white mb-5 md:mb-6 drop-shadow-lg shadow-black/10">
                    UN SEUL CŒUR,
                    <span className="text-[#D4AF37] font-serif italic font-normal">UNE SEULE OUMMA.</span>
</h1>
<div className="flex flex-col md:flex-row gap-6 md:items-center text-slate-200 mt-4 md:mt-8">
<p className="max-w-xs md:max-w-md leading-relaxed font-medium text-white/90 font-serif text-xl md:text-2xl italic drop-shadow-md">
                        "Multipliez vos Hassanates, illuminez des vies."
                    </p>
<a className="group flex items-center gap-3 text-white border-b border-white/40 pb-2 hover:border-[#D4AF37] transition-all w-fit" href="#projets">
<span className="uppercase tracking-wider text-xs md:text-sm font-bold">Découvrir nos actions</span>
<iconify-icon className="text-lg md:text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#D4AF37]" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</header>

<section className="overflow-hidden z-20 bg-[#FAFAFA] pt-16 pb-16 md:pt-24 md:pb-24 relative rounded-t-[3rem]" id="projets">
<div className="px-5 md:px-12 mb-10 md:mb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-end">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-bold text-slate-900">
                    Vos Hassanates,<br/>
<span className="text-[#D4AF37] font-serif italic font-normal">Leur Espoir</span>
</h2>
<div className="lg:pl-12">
<p className="text-base md:text-lg text-slate-500 leading-relaxed font-light">
                        Chaque don est une graine plantée pour l'au-delà. Avec Hassanaty, nous transformons votre générosité en projets durables : eau, éducation, et soutien aux orphelins.
                    </p>
</div>
</div>
</div>

<div className="flex w-full overflow-hidden select-none active:cursor-grabbing touch-pan-y" id="marquee-container">
<div className="flex gap-4 md:gap-8 min-w-max px-5 md:px-8 items-stretch will-change-transform py-6 md:py-10" id="marquee-track">

<div className="group relative w-[80vw] sm:w-[350px] md:w-[450px] h-[450px] md:h-[550px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-700 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Quran" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-all duration-1000 ease-out" draggable="false" src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
</div>
<div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-serif text-4xl md:text-5xl text-[#D4AF37]">01</span>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#D4AF37] shadow-sm">
<iconify-icon className="text-xl md:text-2xl" icon="solar:book-2-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 md:mb-3">Distribution du Coran</h3>
<p className="text-slate-600 text-sm leading-relaxed max-w-[95%] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 font-medium">
                                Offrez la lumière de la guidée. Distribution de Mushaf dans les madrasas reculées et les mosquées.
                            </p>
</div>
</div>
</div>

<div className="group relative w-[80vw] sm:w-[350px] md:w-[450px] h-[450px] md:h-[550px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-700 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Water" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-all duration-1000 ease-out" draggable="false" src="https://images.unsplash.com/photo-1541447271487-09612b3f49f7?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
</div>
<div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-serif text-4xl md:text-5xl text-[#D4AF37]">02</span>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#D4AF37] shadow-sm">
<iconify-icon className="text-xl md:text-2xl" icon="solar:drop-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 md:mb-3">Puits &amp; Eau</h3>
<p className="text-slate-600 text-sm leading-relaxed max-w-[95%] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 font-medium">
                                La meilleure des aumônes. Construction de puits artésiens pour abreuver des villages entiers durablement.
                            </p>
</div>
</div>
</div>

<div className="group relative w-[80vw] sm:w-[350px] md:w-[450px] h-[450px] md:h-[550px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-700 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Food" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-all duration-1000 ease-out" draggable="false" src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
</div>
<div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-serif text-4xl md:text-5xl text-[#D4AF37]">03</span>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#D4AF37] shadow-sm">
<iconify-icon className="text-xl md:text-2xl" icon="solar:chef-hat-heart-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 md:mb-3">Colis Alimentaires</h3>
<p className="text-slate-600 text-sm leading-relaxed max-w-[95%] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 font-medium">
                                Nourrir l'espoir. Distribution de kits alimentaires complets pour les familles démunies toute l'année.
                            </p>
</div>
</div>
</div>

<div className="group relative w-[80vw] sm:w-[350px] md:w-[450px] h-[450px] md:h-[550px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-700 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Orphans" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-all duration-1000 ease-out" draggable="false" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
</div>
<div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-serif text-4xl md:text-5xl text-[#D4AF37]">04</span>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#D4AF37] shadow-sm">
<iconify-icon className="text-xl md:text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 md:mb-3">Parrainage</h3>
<p className="text-slate-600 text-sm leading-relaxed max-w-[95%] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 font-medium">
                                Prenez soin d'un enfant comme le Prophète (sws) l'a recommandé. Éducation, santé et logement.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-white border-b border-slate-100 z-20" id="process">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="hidden lg:block relative h-full min-h-screen border-r border-slate-100">
<div className="sticky top-0 h-screen w-full flex items-center justify-center p-12 lg:p-16">
<div className="relative w-full h-[80vh] max-h-[700px] flex items-start">
<div className="relative w-full h-full overflow-hidden rounded-[3rem] shadow-2xl shadow-slate-200">

<img alt="Niyyah" className="process-img w-full h-full object-cover" id="process-img-1" src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<img alt="Action" className="process-img w-full h-full object-cover" id="process-img-2" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<img alt="Impact" className="process-img w-full h-full object-cover" id="process-img-3" src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-overlay"></div>
</div>

<div className="absolute -right-6 top-10 z-20">
<span className="font-serif text-8xl text-white drop-shadow-md tracking-tight transition-all duration-500" id="process-number">01</span>
</div>
</div>
</div>
</div>

<div className="px-5 py-16 md:px-12 md:py-32 flex flex-col lg:gap-64 relative gap-y-16">
<div className="mb-2 lg:mb-8">
<div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 tracking-widest uppercase">
<span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#D4AF37]"></span> Méthode Hassanaty
                        </div>
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Le chemin de votre don</h2>
</div>

<div className="process-step group flex flex-col justify-center min-h-0 lg:min-h-[40vh]" data-step="1">

<div className="lg:hidden w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-6 relative shadow-lg">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 font-serif text-4xl text-white/90 drop-shadow-md">01</div>
</div>
<span className="hidden lg:block text-6xl font-serif text-[#D4AF37]/30 mb-6">01</span>
<h3 className="text-2xl md:text-5xl font-bold text-slate-800 tracking-tight mb-4 md:mb-6">
                            Niyyah (L'Intention) &amp;
                            <span className="text-[#D4AF37] font-serif font-normal italic">Transparence</span>
</h3>
<p className="text-base md:text-xl text-slate-500 font-light leading-relaxed max-w-lg mb-6 md:mb-8">
                            Vous choisissez le projet qui fait vibrer votre cœur. Nous garantissons que 100% de votre don est alloué au projet choisi, avec une transparence totale sur les coûts opérationnels.
                        </p>
<a className="text-xs md:text-sm uppercase tracking-widest font-bold text-[#D4AF37] border-b border-[#D4AF37]/30 pb-1 w-fit hover:border-[#D4AF37] transition-all" href="#donate">
                            Faire un don
                        </a>
</div>

<div className="process-step group flex flex-col justify-center min-h-0 lg:min-h-[40vh]" data-step="2">

<div className="lg:hidden w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-6 relative shadow-lg">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 font-serif text-4xl text-white/90 drop-shadow-md">02</div>
</div>
<span className="hidden lg:block text-6xl font-serif text-[#D4AF37]/30 mb-6">02</span>
<h3 className="text-2xl md:text-5xl font-bold text-slate-800 tracking-tight mb-4 md:mb-6">
                            Action sur
                            <span className="text-[#D4AF37] font-serif font-normal italic">le Terrain</span>
</h3>
<p className="text-base md:text-xl text-slate-500 font-light leading-relaxed max-w-lg mb-8">
                            Nos équipes locales identifient les bénéficiaires les plus vulnérables. Nous achetons les ressources localement pour soutenir l'économie de la communauté.
                        </p>
</div>

<div className="process-step group flex flex-col justify-center min-h-0 lg:min-h-[40vh]" data-step="3">

<div className="lg:hidden w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-6 relative shadow-lg">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 font-serif text-4xl text-white/90 drop-shadow-md">03</div>
</div>
<span className="hidden lg:block text-6xl font-serif text-[#D4AF37]/30 mb-6">03</span>
<h3 className="text-2xl md:text-5xl font-bold text-slate-800 tracking-tight mb-4 md:mb-6">
                            Impact &amp;
                            <span className="text-[#D4AF37] font-serif font-normal italic">Suivi Vidéo</span>
</h3>
<p className="text-base md:text-xl text-slate-500 font-light leading-relaxed max-w-lg mb-8">
                            La confiance se mérite. Vous recevez un rapport vidéo personnalisé montrant l'impact exact de votre Sadaqa sur les bénéficiaires.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-5 md:px-12 bg-[#FAFAFA] z-20 relative" id="valeurs">
<div className="max-w-[1400px] mx-auto">
<div className="mb-12 md:mb-20 max-w-2xl">
<h2 className="text-3xl md:text-7xl font-bold text-slate-900 tracking-tight mb-4 md:mb-6">
                    L'Excellence <br/><span className="text-[#D4AF37] font-serif italic font-normal">(Ihsan)</span> comme standard.
                </h2>
<p className="text-base md:text-xl text-slate-500 font-light leading-relaxed">
                    Chez Hassanaty, nous ne cherchons pas seulement à aider, mais à le faire avec la plus grande dignité et excellence.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">

<div className="lg:col-span-5 group relative min-h-[450px] md:min-h-[600px] bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden flex flex-col p-6 md:p-10 shadow-lg shadow-slate-100">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="uppercase text-xs font-bold tracking-[0.2em] text-[#D4AF37]">Amana</span>
</div>
<h3 className="text-3xl md:text-4xl font-serif text-slate-900 tracking-tight mb-4">Confiance Absolue</h3>
<p className="text-base md:text-lg text-slate-500 font-light leading-relaxed">
                            Chaque centime est tracé. Nos rapports financiers sont publics et audités trimestriellement.
                        </p>
</div>
<div className="absolute bottom-0 right-0 w-full h-3/4 opacity-10 pointer-events-none">
<svg className="w-full h-full text-[#D4AF37]" fill="currentColor" viewbox="0 0 100 100">
<path d="M50 0 L100 50 L50 100 L0 50 Z"></path>
</svg>
</div>
<div className="mt-auto relative z-10 bg-[#FAFAFA] rounded-2xl p-6 border border-slate-100">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-semibold text-slate-600">Dons reversés</span>
<span className="text-sm font-bold text-[#D4AF37]">100%</span>
</div>
<div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
<div className="h-full bg-[#D4AF37] w-[100%] rounded-full"></div>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-5 md:gap-6 h-full">

<div className="group relative bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-lg shadow-slate-100">
<div className="relative z-10 flex-1 order-2 md:order-1">
<h3 className="text-3xl md:text-4xl font-serif text-slate-900 tracking-tight mb-4">Sakina (Sérénité)</h3>
<p className="text-base md:text-lg text-slate-500 font-light leading-relaxed">
                                Apporter la paix aux cœurs des donateurs et des bénéficiaires. Une approche douce, sans images choquantes.
                            </p>
</div>
<div className="relative w-full md:w-48 h-48 flex-shrink-0 rounded-2xl md:rounded-full overflow-hidden border-4 border-[#D4AF37]/10 order-1 md:order-2">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 h-full">
<div className="bg-gradient-to-br from-[#D4AF37] to-[#B5952F] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-between text-white shadow-xl shadow-[#D4AF37]/20 min-h-[250px]">
<iconify-icon className="text-4xl md:text-5xl opacity-80 mb-6" icon="solar:globe-linear"></iconify-icon>
<div>
<span className="text-4xl md:text-5xl font-bold tracking-tighter">12+</span>
<p className="text-white/80 font-medium mt-2">Pays d'intervention</p>
</div>
</div>
<div className="bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-between hover:shadow-lg transition-all min-h-[250px]">
<iconify-icon className="text-4xl md:text-5xl text-[#D4AF37] mb-6" icon="solar:smile-circle-linear"></iconify-icon>
<div>
<span className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900">50k</span>
<p className="text-slate-500 font-medium mt-2">Sourires rendus</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-32 px-5 md:px-12 bg-slate-900 relative overflow-hidden z-20" id="contact">

<div className="absolute inset-0 z-0 opacity-20">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-0"></div>
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
<div>
<div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/30 bg-[#D4AF37]/10 rounded-full px-4 py-2 mb-6 md:mb-8 tracking-widest uppercase">
                    Agir Maintenant
                </div>
<h2 className="text-4xl md:text-7xl font-serif text-white tracking-tight mb-4 md:mb-6">Semer une graine <br/>d'éternité.</h2>
<p className="text-lg md:text-xl text-slate-400 font-light mb-8 md:mb-12 max-w-md">
                    "Jamais une aumône n'a diminué une richesse." Rejoignez le mouvement Hassanaty et laissez votre empreinte.
                </p>
<div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-0">
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center text-[#D4AF37]">
<iconify-icon className="text-lg md:text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<span className="text-base md:text-lg">+33 1 23 45 67 89</span>
</div>
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center text-[#D4AF37]">
<iconify-icon className="text-lg md:text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<span className="text-base md:text-lg">salam@hassanaty.org</span>
</div>
</div>
</div>

<form className="glass-panel p-6 md:p-12 rounded-[2rem] space-y-5 md:space-y-6 bg-white/5 border-white/10 backdrop-blur-2xl" id="donate">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
<div className="space-y-2">
<label className="text-xs uppercase font-bold tracking-wider text-slate-400 ml-1">Nom Complet</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 md:py-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="Votre nom" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-bold tracking-wider text-slate-400 ml-1">Email</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 md:py-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="votre@email.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-bold tracking-wider text-slate-400 ml-1">Type de Don</label>
<div className="grid grid-cols-3 gap-3">
<button className="border border-slate-600 rounded-xl py-3 text-xs md:text-sm text-slate-300 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all focus:bg-[#D4AF37] focus:text-white focus:border-[#D4AF37]" type="button">Mensuel</button>
<button className="border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl py-3 text-xs md:text-sm font-medium" type="button">Ponctuel</button>
<button className="border border-slate-600 rounded-xl py-3 text-xs md:text-sm text-slate-300 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all focus:bg-[#D4AF37] focus:text-white focus:border-[#D4AF37]" type="button">Zakat</button>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-bold tracking-wider text-slate-400 ml-1">Montant</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 md:py-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-lg md:text-xl font-medium" placeholder="100 €" type="number"/>
</div>
<button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-white font-bold rounded-xl py-4 md:py-5 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 group text-sm md:text-base" type="submit">
                    VALIDER MON DON
                    <iconify-icon className="text-lg md:text-xl group-hover:scale-110 transition-transform" icon="solar:heart-angle-bold"></iconify-icon>
</button>
</form>
</div>
</section>

<div className="bg-white border-t border-slate-100 pt-12 pb-6 md:pt-12 relative z-20">
<div className="max-w-[1800px] mx-auto px-5 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-500 text-xs md:text-sm font-mono">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span id="dynamic-time">12:12</span>
<span className="text-slate-300">|</span>
<span id="dynamic-location">Mecca Live</span>
</div>
<div className="flex gap-6 md:gap-8 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400">
<a className="hover:text-[#D4AF37] transition-colors" href="#">Instagram</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#">Twitter</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#">Youtube</a>
</div>
</div>
<div className="relative w-full overflow-hidden select-none opacity-10">
<div className="marquee-container-text">
<div className="flex items-center whitespace-nowrap">
<span className="text-[15vw] md:text-[12vw] leading-none font-serif text-slate-900 px-4 md:px-8">HASSANATY</span>
<span className="text-[15vw] md:text-[12vw] leading-none font-serif text-slate-900 px-4 md:px-8">HASSANATY</span>
</div>
<div aria-hidden="true" className="flex items-center whitespace-nowrap">
<span className="text-[15vw] md:text-[12vw] leading-none font-serif text-slate-900 px-4 md:px-8">HASSANATY</span>
<span className="text-[15vw] md:text-[12vw] leading-none font-serif text-slate-900 px-4 md:px-8">HASSANATY</span>
</div>
</div>
</div>
<div className="text-center mt-8 text-[10px] md:text-xs text-slate-400 font-medium uppercase tracking-wider">
            © 2024 Hassanaty. Tous droits réservés.
        </div>
</div>



    </>
  );
}
