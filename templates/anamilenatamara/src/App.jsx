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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                (function() {
                    var path = window.location.pathname;
                    if (path === '/obras' || path === '/vendidos' || path.indexOf('/obras/') === 0 || path.indexOf('/vendidos/') === 0) {
                        var nav = document.getElementById('nav-obras');
                        var line = document.getElementById('underline-obras');
                        if (nav) {
                            nav.classList.remove('opacity-60');
                            nav.classList.add('opacity-100');
                        }
                        if (line) {
                            line.classList.remove('w-0');
                            line.classList.add('w-full');
                        }
                    }
                })();
            


      // --- SETUP ---
            gsap.registerPlugin(ScrollTrigger);
    
            // --- LENIS SCROLL ---
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                smooth: true,
            });
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
    
            // --- FLASHLIGHT EFFECT LOGIC ---
            document.querySelectorAll('.flashlight-card').forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });
    
            // --- TEXT SPLITTER ---
            function splitTextToWords(element) {
                const text = element.innerText;
                const words = text.split(' ');
                element.innerHTML = '';
                words.forEach(word => {
                    const wordWrap = document.createElement('span');
                    wordWrap.classList.add('word-wrap');
                    wordWrap.innerHTML = `<span class="word-inner">${word}&nbsp;</span>`;
                    element.appendChild(wordWrap);
                });
            }
            document.querySelectorAll('.split-animate').forEach(el => splitTextToWords(el));
    
            // --- ANIMATIONS ---
            const loadTl = gsap.timeline({
                onComplete: () => {
                    document.body.style.opacity = 1;
                    initAnimations();
                }
            });
    
            // Loader Sequence
            loadTl.to('.loader-bar', { width: '100%', duration: 1.2, ease: 'power2.inOut' })
                  .to('.loader-text', { y: -20, opacity: 0, duration: 0.5 })
                  .to('.loader', { yPercent: -100, duration: 0.8, ease: 'power4.inOut' });
    
            function initAnimations() {
                // Hero
                gsap.to('.hero-text span', { 
                    y: 0, 
                    stagger: 0.15, 
                    duration: 1.8, 
                    ease: 'power4.out',
                    delay: 0.2
                });
                gsap.to('.hero-fade', { opacity: 1, duration: 1, delay: 1 });
                
                // Parallax Hero Image
                gsap.to('.hero-img', {
                    yPercent: 20,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true
                    }
                });
    
                // Text Reveal
                document.querySelectorAll('.split-animate').forEach(el => {
                    const words = el.querySelectorAll('.word-inner');
                    gsap.to(words, {
                        y: "0%",
                        duration: 1,
                        ease: "power3.out",
                        stagger: 0.015,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    });
                });
    
                // Card Stack Effect
                const cards = gsap.utils.toArray('.card-item');
                cards.forEach((card, i) => {
                    const nextCard = cards[i+1];
                    if (nextCard) {
                        gsap.to(card.querySelector('.card-inner'), {
                            scale: 0.92,
                            // opacity and filter removed so cards remain fully colored and visible
                            ease: "none",
                            scrollTrigger: {
                                trigger: nextCard,
                                start: "top bottom",
                                end: "top 10vh",
                                scrub: true
                            }
                        });
                    }
                });
    
                // Footer Reveal Parallax
                gsap.from('.footer-sticky > div', {
                    y: 150,
                    opacity: 0.3,
                    scale: 0.95,
                    scrollTrigger: {
                        trigger: '.footer-sticky',
                        start: 'top bottom',
                        end: 'bottom bottom',
                        scrub: true
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
      

<div className="noise"></div>


<div className="loader" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0%, -100%) translate(0px, -790px)'}}>
<div className="display text-4xl font-medium tracking-tight-custom loader-text" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0%, -50%) translate(0px, -20px)'}}>SYNTHESIS</div>
<div className="loader-bar" style={{width: '100%'}}></div>
</div><nav className="fixed flex text-white bg-slate-50 mix-blend-normal w-full z-50 pt-2 pr-6 pb-3 pl-6 items-center justify-between">
<div className="flex gap-2 items-center cursor-pointer">
<iconify-icon className="" height="24" icon="solar:filters-outline" style={{strokeWidth: '1.5', color: 'rgb(0, 0, 0)'}} width="24"></iconify-icon>
<div className="display cursor-pointer text-lg font-semibold text-slate-950 tracking-tight" onclick="window.location.href='/home'" role="button">amt</div>
</div>
<div className="hidden uppercase md:flex text-xs font-medium text-slate-950 tracking-[0.2em] gap-x-8 items-center">

<div className="group flex h-full pt-2 pb-2 relative gap-x-1 gap-y-1 items-center">
<div className="group/navlink cursor-pointer flex hover:opacity-100 transition-opacity opacity-60 pb-0.5 relative gap-x-1 gap-y-1 items-center" id="nav-obras" onclick="window.location.href='/galeria'" role="button">
  obras
  <iconify-icon className="transition-transform duration-300 group-hover:rotate-180" height="18" icon="lucide:chevron-down" style={{strokeWidth: '1.5', color: 'rgb(0, 0, 0)'}} width="18"></iconify-icon>
<span className="absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-300 ease-out w-0 group-hover/navlink:w-full" id="underline-obras"></span>
</div>

<div className="group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col z-50 bg-[#FAFAFA] opacity-0 invisible w-48 border-black/5 border rounded-sm mt-0 pt-2 pb-2 absolute top-full left-0 shadow-xl gap-x-1 gap-y-1">
<a className="text-[10px] hover:bg-black/5 transition-colors uppercase font-medium text-slate-950 tracking-[0.2em] border-black/5 border-b pt-3 pr-4 pb-3 pl-4" href="/galeria">actuales</a>
<a className="text-[10px] hover:bg-black/5 transition-colors uppercase font-medium text-slate-950 tracking-[0.2em] pt-3 pr-4 pb-3 pl-4" href="/vendidos">vendidos</a>
</div>

</div>
<div className="group/navlink cursor-pointer flex hover:opacity-100 transition-opacity opacity-60 pb-0.5 relative gap-x-1 gap-y-1 items-center" id="nav-bio" onclick="window.location.href='/bio'" role="button">
    bio
    <span className="absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-300 ease-out w-0 group-hover/navlink:w-full" id="underline-obras"></span>
</div>
<div className="group/navlink cursor-pointer flex hover:opacity-100 transition-opacity opacity-60 pb-0.5 relative gap-x-1 gap-y-1 items-center" id="nav-declaración" onclick="window.location.href='/declaracion'" role="button">
    declaración
    <span className="absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-300 ease-out w-0 group-hover/navlink:w-full" id="underline-obras"></span>
</div>
</div>
<button className="md:hidden group -mr-2 focus:outline-none pt-2 pr-2 pb-2 pl-2" onclick="this.classList.toggle('is-open'); document.body.style.overflow = this.classList.contains('is-open') ? 'hidden' : '';">

<svg className="block group-[.is-open]:hidden transition-transform duration-300 w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line className="" x1="4" x2="20" y1="12" y2="12"></line>
<line className="" x1="4" x2="20" y1="6" y2="6"></line>
<line className="" x1="4" x2="20" y1="18" y2="18"></line>
</svg>

<svg className="hidden group-[.is-open]:block text-black transition-transform duration-300 rotate-90 group-[.is-open]:rotate-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>

<div className="fixed inset-0 bg-[#FAFAFA] z-[-1] flex flex-col pt-28 px-6 pb-12 gap-8 transform -translate-y-full group-[.is-open]:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] cursor-default text-left overflow-y-auto w-full h-[100dvh]" onclick="event.stopPropagation()">
<div className="flex flex-col mt-4 border-t border-black/5">

<div className="flex flex-col border-b border-black/5">
<div className="text-3xl font-normal tracking-tight text-[#111111] py-5 flex items-center justify-between w-full cursor-pointer transition-opacity hover:opacity-60" onclick="this.nextElementSibling.classList.toggle('hidden'); this.nextElementSibling.classList.toggle('flex'); this.querySelector('.chevron').classList.toggle('rotate-180'); event.stopPropagation();">
                    Obras
                    <iconify-icon className="text-black/30 chevron transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
<div className="hidden flex-col pl-4 pb-5 gap-4">
<a className="text-2xl font-normal tracking-tight text-gray-500 hover:text-[#111111] transition-colors" href="/obras" onclick="this.closest('button.group').classList.remove('is-open'); document.body.style.overflow = ''; event.stopPropagation();">
                        Actuales
                    </a>
<a className="text-2xl font-normal tracking-tight text-gray-500 hover:text-[#111111] transition-colors" href="/vendidos" onclick="this.closest('button.group').classList.remove('is-open'); document.body.style.overflow = ''; event.stopPropagation();">
                        Vendidos
                    </a>
</div>
</div>
<a className="text-3xl font-normal tracking-tight text-[#111111] hover:opacity-60 transition-opacity py-5 border-b border-black/5 flex items-center justify-between" href="/bio" onclick="this.closest('button').classList.remove('is-open'); document.body.style.overflow = ''; event.stopPropagation();">
                Bio
                <svg className="text-black/30" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="text-3xl font-normal tracking-tight text-[#111111] hover:opacity-60 transition-opacity py-5 border-b border-black/5 flex items-center justify-between" href="/declaracion" onclick="this.closest('button').classList.remove('is-open'); document.body.style.overflow = ''; event.stopPropagation();">
                Declaración
                <svg className="text-black/30" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<div className="mt-auto flex flex-col gap-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
<a className="hover:text-[#111111] transition-colors inline-block w-fit" href="mailto:anamile42@hotmail.com" onclick="this.closest('button').classList.remove('is-open'); document.body.style.overflow = ''; event.stopPropagation();">Correo</a>
<a className="hover:text-[#111111] transition-colors inline-block w-fit" href="https://www.instagram.com/anamitamara/" onclick="this.closest('button').classList.remove('is-open'); document.body.style.overflow = ''; event.stopPropagation();">Instagram</a>
</div>
</div>
</button>
</nav>

<div className="wrapper">

<section className="flex overflow-hidden bg-[#F2F2F2] h-screen relative items-center justify-center">

<div className="absolute inset-0 w-full h-full overflow-hidden">
<img alt="Architecture Hero" className="hero-img brightness-[0.85] object-auto w-full h-full object-cover blur-none saturate-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b90334c-52ba-4e6e-a4dc-4b9dd5552e6b_3840w.jpg" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 22.2559px)'}}/>
</div>

<div className="relative z-10 text-center mix-blend-difference text-[#F2F2F2] flex flex-col items-center">
<div className="overflow-hidden">
<h1 className="display text-[13vw] leading-[0.85] font-medium tracking-tighter hero-text">
<span className="block translate-y-full" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>ANA MILENA</span>
</h1>
</div>
<div className="overflow-hidden">
<h1 className="display text-[13vw] leading-[0.85] font-medium tracking-tighter hero-text">
<span className="block translate-y-full" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>TAMARA</span>
</h1>
</div>
<div className="mt-12 flex items-center gap-4 hero-fade opacity-0" style={{opacity: '1'}}>
<div className="h-px w-12 bg-[#F2F2F2]"></div>
<p className="md:text-sm uppercase text-xs font-medium tracking-[0.4em]">Artista Plástica</p>
<div className="h-px w-12 bg-[#F2F2F2]"></div>
</div>
</div>
</section>

<div className="text-center mr-30 mb-24 ml-30 pr-0 pl-0 gap-x-0 gap-y-2 justify-center">
<div className="leading-relaxed text-pretty columns-1 md:mr-30 md:ml-30 md:mt-10 md:columns-2 md:text-2xl text-sm font-normal text-[#000000] font-bricolage text-justify mt-4 mr-0 ml-0 pt-10 pr-10 pb-0 pl-10 gap-x-8 gap-y-8" style={{fontWeight: '400'}}>Bienvenido a la galería oficial en línea de la artista colombiana de arte abstracto Ana Milena Tamara. Aquí encontrarán pinturas abstractas originales creadas con materiales de calidad profesional y un arte excepcional. Las obras contemporáneas de gran formato están concebidas para realzar y aportar una presencia visual poderosa. Cada pintura original está realizada sobre lienzo de alta calidad, tensado tipo gallery wrap, utilizando acrílicos profesionales. Los lienzos tienen una profundidad de 4cm/1.5in. Si le interesa adquirir una obra de Tamara, nos puede contactar al siguiente correo electrónico: anamile42@hotmail.com.</div><div className="flex gap-4 sm:px-8 md:px-12 text-black/40 w-full max-w-7xl mt-6 mr-auto ml-auto pr-4 pl-4 gap-x-4 gap-y-4 items-center justify-center">
<span className="text-base font-geist">+</span>
<div className="h-px flex-1 bg-black/10"></div>
<span className="text-base font-geist">+</span>
</div><div className="leading-relaxed text-pretty md:text-2xl md:mt-5 text-sm font-normal text-[#000000] font-bricolage text-center max-w-6xl mt-5 mr-auto ml-auto pt-0 pr-10 pb-0 pl-10" style={{fontWeight: '400'}}>La práctica de Ana Milena Tamara se centra en la abstracción como lenguaje emocional, explorando el impulso como energía vital, a veces contenida, a veces desbordada.</div>
</div>

<section className="stack-section bg-[#FAFAFA]">
<div className="px-6 md:px-12 mb-24 flex justify-between items-end max-w-[1600px] mx-auto">
<div className="">
<h2 className="display md:text-6xl text-4xl tracking-tight mb-2">Abstracción Contemporánea</h2>
<p className="font-light text-gray-500 invisible">2017 — 2025</p>
</div>
<div className="hidden md:block">
<iconify-icon height="40" icon="solar:arrow-right-down-linear" width="40"></iconify-icon>
</div>
</div>
<div className="stack-container cursor-pointer max-w-[1400px] mr-auto ml-auto pr-4 pl-4" onclick="window.location.href='/galeria'" role="button">

<div className="card-item group cursor-pointer filter-none" onclick="window.location.href='/galeria'" role="button" style={{filter: 'none', opacity: '1'}}>
<div className="card-inner flashlight-card rounded-xl" style={{filter: 'none', opacity: '1', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
<div className="md:p-16 flex flex-col z-20 cursor-pointer pt-8 pr-8 pb-8 pl-8 relative justify-between" onclick="window.location.href='/galeria'" role="button" style={{filter: 'none', opacity: '1'}}>
<div className="" style={{filter: 'none', opacity: '1'}}>
<div className="flex invisible mb-12 items-start justify-between" style={{filter: 'none', opacity: '1'}}>
<span className="display md:text-6xl text-5xl font-medium opacity-10 invisible" style={{filter: 'none', opacity: '1'}}>01</span>
<iconify-icon className="group-hover:opacity-100 transition-opacity opacity-50" height="28" icon="solar:arrow-right-up-linear" style={{filter: 'none', color: 'rgb(17, 17, 17)', opacity: '1'}} width="28"></iconify-icon>
</div>
<h3 className="display md:text-4xl text-3xl font-medium tracking-tight mb-2" style={{filter: 'none', opacity: '1'}}>
            CONFLUENCIA</h3>
<p className="uppercase text-xs text-gray-400 tracking-widest invisible" style={{filter: 'none', opacity: '1'}}>
            Oslo, Norway</p>
</div>
<div className="space-y-8" style={{filter: 'none', opacity: '1'}}>
<div className="flex gap-4 gap-x-4 gap-y-4" style={{filter: 'none', opacity: '1'}}>
<span className="text-[10px] uppercase tracking-wider invisible border-black/10 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{filter: 'none', opacity: '1'}}>Acrílico</span>
<span className="text-[10px] uppercase tracking-wider invisible border-black/10 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{filter: 'none', opacity: '1'}}>Lienzo</span>
</div>
<p className="leading-relaxed font-light text-gray-600 max-w-sm" style={{filter: 'none', opacity: '1'}}>Acrílico
            sobre lienzo. <br className="" style={{filter: 'none', opacity: '1'}}/>Medidas: 1.23 cm x 1.23 cm</p>
</div>
</div>
<div className="h-full w-full relative overflow-hidden bg-gray-100 card-img-wrap" style={{filter: 'none', opacity: '1'}}>
<img alt="Vortex Museum" className="transition-transform duration-1000 ease-out group-hover:scale-105 cursor-pointer object-repeat w-full h-full object-cover" onclick="window.location.href='/galeria'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a02565c7-2fdf-449b-b238-acf1a2883f2b_1600w.jpg" style={{filter: 'none', opacity: '1'}}/>
</div>
</div>
</div>

<div className="card-item group invisible" style={{filter: 'none', opacity: '1'}}>
<div className="card-inner flashlight-card rounded-xl" style={{filter: 'none', opacity: '1', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
<div className="md:p-16 flex flex-col z-20 pt-8 pr-8 pb-8 pl-8 relative justify-between" style={{filter: 'none', opacity: '1'}}>
<div className="" style={{filter: 'none', opacity: '1'}}>
<div className="flex invisible mb-12 items-start justify-between" style={{filter: 'none', opacity: '1'}}>
<span className="display text-5xl md:text-6xl opacity-10 font-medium" style={{filter: 'none', opacity: '1'}}>02</span>
<iconify-icon className="opacity-50 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{filter: 'none', opacity: '1'}} width="28"></iconify-icon>
</div>
<h3 className="display md:text-4xl text-3xl font-medium tracking-tight mb-2" style={{filter: 'none', opacity: '1'}}>EL
            ECO DE LO QUE PUDO SER</h3>
<p className="uppercase text-xs text-gray-400 tracking-widest invisible" style={{filter: 'none', opacity: '1'}}>
            Kyoto, Japan</p>
</div>
<div className="space-y-8" style={{filter: 'none', opacity: '1'}}>
<p className="leading-relaxed font-light text-gray-600 max-w-sm" style={{filter: 'none', opacity: '1'}}>Acrílico
            sobre lienzo. <br style={{filter: 'none', opacity: '1'}}/>Medida: 76.2 cm x 76.2 cm</p>
<div className="flex gap-4" style={{filter: 'none', opacity: '1'}}>
<span className="text-[10px] uppercase tracking-wider invisible border-black/10 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{filter: 'none', opacity: '1'}}>Mixto</span>
<span className="text-[10px] uppercase tracking-wider invisible border-black/10 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{filter: 'none', opacity: '1'}}>Lienzo</span>
</div>
</div>
</div>
<div className="h-full w-full relative overflow-hidden bg-gray-100 card-img-wrap" style={{filter: 'none', opacity: '1'}}>
<img alt="Oblique Residence" className="transition-transform duration-1000 ease-out group-hover:scale-105 object-auto cursor-pointer w-full h-full object-cover" onclick="window.location.href='/obras'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a194a7bb-c3b2-4a2b-8069-c659685aaabf_1600w.jpg" style={{filter: 'none', opacity: '1'}}/>
</div>
</div>
</div>

<div className="card-item group invisible" style={{filter: 'none', opacity: '1'}}>
<div className="card-inner flashlight-card rounded-xl" style={{'--mouse-x': '1106.6015625px', '--mouse-y': '508.8203125px', filter: 'none', opacity: '1'}}>
<div className="p-8 md:p-16 flex flex-col justify-between relative z-20" style={{filter: 'none', opacity: '1'}}>
<div className="" style={{filter: 'none', opacity: '1'}}>
<div className="flex invisible mb-12 items-start justify-between" style={{filter: 'none', opacity: '1'}}>
<span className="display text-5xl md:text-6xl opacity-10 font-medium" style={{filter: 'none', opacity: '1'}}>03</span>
<iconify-icon className="opacity-50 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{filter: 'none', opacity: '1'}} width="28"></iconify-icon>
</div>
<h3 className="display md:text-4xl text-3xl font-medium tracking-tight mb-2" style={{filter: 'none', opacity: '1'}}>
            LATIDO EN EL UMBRAL </h3>
<p className="uppercase text-xs text-gray-400 tracking-widest invisible" style={{filter: 'none', opacity: '1'}}>
            Vancouver, Canada</p>
</div>
<div className="space-y-8" style={{filter: 'none', opacity: '1'}}>
<p className="leading-relaxed font-light text-gray-600 max-w-sm" style={{filter: 'none', opacity: '1'}}>Acrílico
            sobre lienzo. <br style={{filter: 'none', opacity: '1'}}/>Medidas: 76.2 cm x 76.2 cm</p>
<div className="flex gap-4" style={{filter: 'none', opacity: '1'}}>
<span className="text-[10px] uppercase tracking-wider invisible border-black/10 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{filter: 'none', opacity: '1'}}>Acrílico</span>
<span className="text-[10px] uppercase tracking-wider invisible border-black/10 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{filter: 'none', opacity: '1'}}>Lienzo</span>
</div>
</div>
</div>
<div className="h-full w-full relative overflow-hidden bg-gray-100 card-img-wrap" style={{filter: 'none', opacity: '1'}}>
<img alt="The Glass Apex" className="transition-transform duration-1000 ease-out group-hover:scale-105 object-repeat cursor-pointer w-full h-full object-cover" onclick="window.location.href='/obras'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cafd87a-9517-4b77-b9c1-fab2bbc8b064_1600w.jpg" style={{filter: 'none', opacity: '1'}}/>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col text-center bg-[#F2F2F2] z-10 pt-10 pb-20 relative items-center justify-center">
<h2 className="display md:text-5xl text-3xl tracking-tight invisible mb-8">Espacios de resonancia emocional</h2>
<p className="leading-relaxed text-2xl font-normal text-[#000000] text-center max-w-xl mb-16 pr-6 pl-6">La obra de Ana
      Milena Tamara ha evolucionado desde lo figurativo hacia una abstracción más libre, donde el color y el gesto se
      convierten en protagonistas. Actualmente desarrolla series que integran pintura, dibujo y experimentación con
      soportes contemporáneos.</p>
<div className="w-px bg-gradient-to-b from-black/5 to-black/30 h-24"></div>
</section>
</div> 

<footer className="footer-sticky">
<div className="z-10 flex flex-col text-center w-full pr-6 pl-6 relative items-center">
<div className="uppercase text-base text-gray-400 tracking-[0.3em] text-center mb-8">¿TE INTERESA UNA OBRA?</div>
<a className="group relative inline-block" href="mailto:contact@synthesis.com">
<span className="display text-[10vw] leading-none group-hover:text-gray-300 transition-colors duration-300 text-white">CONTÁCTAME</span>
<span className="absolute -bottom-4 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500 ease-in-out"></span>
</a>
<div className="flex flex-wrap gap-8 md:gap-16 uppercase text-xs text-gray-500 tracking-widest mt-20 gap-x-8 gap-y-8 justify-center">
<a className="hover:text-white transition-colors text-lg" href="https://www.instagram.com/anamitamara/">Instagram</a>
<a className="hover:text-white transition-colors invisible" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors text-lg" href="mailto:anamile42@hotmail.com" id="correo-btn">Correo</a>
<a className="hover:text-white transition-colors invisible" href="#">Behance</a>
</div>
<div className="flex md:px-12 text-[10px] uppercase text-gray-700 tracking-wider w-full pr-8 pl-8 absolute bottom-8 justify-between">
<div className="">© 2026 Ana Milena Tamara</div>
<div className="">Barranquilla, Colombia</div>
</div>
</div>

<div className="pointer-events-none opacity-20 w-full h-full absolute top-0 right-0 bottom-0 left-0">
<img className="w-full h-full object-cover blur-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7439b971-da8b-47d9-a10d-c59eb556e223_3840w.jpg"/>
</div>
</footer>


    </>
  );
}
