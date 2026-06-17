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



        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();

            const slider = document.getElementById('slider');
            const slides = slider.children;
            const totalSlides = slides.length;
            const currentSlideEl = document.getElementById('currentSlide');
            const totalSlidesEl = document.getElementById('totalSlides');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const prevBtnSide = document.getElementById('prevBtnSide');
            const nextBtnSide = document.getElementById('nextBtnSide');
            const bgPattern = document.getElementById('bg-pattern');
            let currentIndex = 0;

            totalSlidesEl.textContent = String(totalSlides).padStart(2, '0');

            // Counter Animation Function
            function runCounters(slide) {
                const counters = slide.querySelectorAll('.count-up');
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 1500; // ms
                    const startTime = performance.now();
                    
                    const updateCount = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        
                        // Ease out quart
                        const ease = 1 - Math.pow(1 - progress, 4);
                        
                        const currentVal = Math.floor(ease * target);
                        counter.innerText = currentVal.toLocaleString();
                        
                        if (progress < 1) {
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.innerText = target.toLocaleString();
                        }
                    };
                    requestAnimationFrame(updateCount);
                });
            }

            function updateSlider() {
                // Remove active class from all slides
                Array.from(slides).forEach(slide => slide.classList.remove('active-slide'));
                
                // Add active class to current slide (triggers CSS animations)
                slides[currentIndex].classList.add('active-slide');
                
                // Trigger JS counters if present
                runCounters(slides[currentIndex]);

                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
                bgPattern.style.backgroundPosition = `-${currentIndex * 30}px 0`;
                currentSlideEl.textContent = String(currentIndex + 1).padStart(2, '0');

                prevBtn.disabled = currentIndex === 0;
                nextBtn.disabled = currentIndex === totalSlides - 1;

                prevBtnSide.style.opacity = currentIndex === 0 ? '0' : '';
                prevBtnSide.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
                
                nextBtnSide.style.opacity = currentIndex === totalSlides - 1 ? '0' : '';
                nextBtnSide.style.pointerEvents = currentIndex === totalSlides - 1 ? 'none' : 'auto';
            }

            function goNext() {
                if (currentIndex < totalSlides - 1) {
                    currentIndex++;
                    updateSlider();
                }
            }

            function goPrev() {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlider();
                }
            }

            nextBtn.addEventListener('click', goNext);
            prevBtn.addEventListener('click', goPrev);
            nextBtnSide.addEventListener('click', goNext);
            prevBtnSide.addEventListener('click', goPrev);

            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') goNext();
                if (e.key === 'ArrowLeft') goPrev();
            });

            document.addEventListener('mousemove', (e) => {
                const x = e.clientX;
                const y = e.clientY;
                
                const cards = document.querySelectorAll('.spotlight-card');
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const cardX = x - rect.left;
                    const cardY = y - rect.top;
                    
                    card.style.setProperty('--cursor-x', `${cardX}px`);
                    card.style.setProperty('--cursor-y', `${cardY}px`);
                });
            });

            // Initial Trigger
            updateSlider();
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
      
<div className="parallax-bg fixed inset-0 z-0 opacity-60" id="bg-pattern"></div>
<header className="fixed z-50 flex w-full pt-4 md:pt-6 px-4 md:px-8 top-0 left-0 items-center justify-between pointer-events-none">
<div className="flex items-center gap-3 pointer-events-auto">
<div className="w-8 h-8 rounded-full bg-[#292524] text-[#e6e4e0] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="gem"></i>
</div>
<span className="font-serif font-semibold text-lg tracking-tight text-[#292524]">Nina Rústika</span>
</div>
<div className="text-[#57534e] text-xs md:text-sm font-medium tracking-wide bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full border border-[#d6d3d1]">
            Estrategia 2024
        </div>
</header>
<main className="w-full h-full overflow-hidden relative z-10 flex items-center justify-center">
<button className="hidden md:flex absolute left-4 z-40 w-12 h-12 items-center justify-center rounded-full border border-[#d6d3d1]/50 text-[#57534e] nav-btn-side cursor-pointer" id="prevBtnSide">
<i className="w-6 h-6" data-lucide="chevron-left"></i>
</button>
<button className="hidden md:flex absolute right-4 z-40 w-12 h-12 items-center justify-center rounded-full border border-[#d6d3d1]/50 text-[#57534e] nav-btn-side cursor-pointer" id="nextBtnSide">
<i className="w-6 h-6" data-lucide="chevron-right"></i>
</button>
<div className="slider-container flex h-full w-full" id="slider">

<section className="min-w-full h-full flex items-center justify-center p-4 md:p-12 active-slide">
<div className="spotlight-card w-full max-w-[1400px] h-full md:h-auto md:aspect-video rounded-2xl md:rounded-3xl shadow-2xl flex flex-col justify-center items-center relative overflow-hidden group">
<div className="clay-texture"></div>
<div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-b from-[#e7e5e4]/40 to-transparent rounded-full blur-3xl -z-10"></div>
<div className="slide-content flex flex-col justify-center items-center w-full relative z-10 text-center px-4 md:px-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 md:mb-8 reveal-anim border-[#d6d3d1] bg-[#f5f5f4]/50">
<span className="w-1.5 h-1.5 rounded-full bg-[#9a3412]"></span>
<span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#57534e]">Línea de Conocimiento</span>
</div>
<h1 className="text-4xl md:text-7xl font-serif font-medium tracking-tight leading-[1.1] mb-6 reveal-anim reveal-delay-1 text-[#292524]">
                            El Legado del <br/><span className="italic text-[#78716c]">Conocimiento</span>
</h1>
<p className="text-base md:text-xl font-light max-w-xl mx-auto mb-8 md:mb-10 reveal-anim reveal-delay-2 leading-relaxed text-[#57534e]">
                            Transformando la experiencia artesanal en un modelo de negocio educativo, sostenible y premium.
                        </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-xs md:text-sm text-[#78716c] reveal-anim reveal-delay-3">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="user"></i> Para: Carolina y Esteban</span>
<span className="hidden md:inline w-px h-4 bg-[#d6d3d1]"></span>
<span className="italic">"El alma de la tierra en la palma de tu mano"</span>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-4 md:p-12">
<div className="spotlight-card w-full max-w-[1400px] h-full md:h-auto md:aspect-video rounded-2xl md:rounded-3xl shadow-xl flex flex-col relative overflow-hidden">
<div className="clay-texture"></div>
<div className="slide-content p-6 md:p-16">
<div className="mb-8 md:mb-10 reveal-anim">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-[#292524]">El Activo Actual</h2>
<p className="text-base md:text-lg text-[#57534e] mt-2">La fuerza de lo construido: Punto de partida.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 reveal-anim reveal-delay-1 pb-20 md:pb-0">

<div className="border rounded-xl p-5 md:p-6 flex flex-row md:flex-col items-center md:items-start justify-between border-[#e7e5e4] bg-[#fafaf9]/50 hover:bg-white transition-colors">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center md:mb-4 bg-[#e7e5e4] text-[#44403c] mr-4 md:mr-0 shrink-0">
<i className="w-5 h-5 md:w-6 md:h-6" data-lucide="users"></i>
</div>
<div>
<div className="text-2xl md:text-3xl font-medium tracking-tight text-[#292524] flex">
<span className="count-up" data-target="7000">0</span>
</div>
<div className="text-sm text-[#78716c] mt-1">Seguidores Orgánicos</div>
</div>
</div>

<div className="border rounded-xl p-5 md:p-6 flex flex-row md:flex-col items-center md:items-start justify-between border-[#e7e5e4] bg-[#fafaf9]/50 hover:bg-white transition-colors">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center md:mb-4 bg-[#e7e5e4] text-[#44403c] mr-4 md:mr-0 shrink-0">
<i className="w-5 h-5 md:w-6 md:h-6" data-lucide="store"></i>
</div>
<div>
<div className="text-xl md:text-2xl font-medium tracking-tight text-[#292524]">B2C + B2B</div>
<div className="text-sm text-[#78716c] mt-1">Mercado Validado</div>
</div>
</div>

<div className="border rounded-xl p-5 md:p-6 flex flex-row md:flex-col items-center md:items-start justify-between border-[#e7e5e4] bg-[#fafaf9]/50 hover:bg-white transition-colors">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center md:mb-4 bg-[#e7e5e4] text-[#44403c] mr-4 md:mr-0 shrink-0">
<i className="w-5 h-5 md:w-6 md:h-6" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-xl md:text-2xl font-medium tracking-tight text-[#292524] flex">
<span className="count-up" data-target="8">0</span><span>+</span> años
                                    </div>
<div className="text-sm text-[#78716c] mt-1">Track Record</div>
</div>
</div>

<div className="border rounded-xl p-5 md:p-6 flex flex-row md:flex-col items-center md:items-start justify-between border-[#e7e5e4] bg-[#fafaf9]/50 hover:bg-white transition-colors">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center md:mb-4 bg-[#e7e5e4] text-[#44403c] mr-4 md:mr-0 shrink-0">
<i className="w-5 h-5 md:w-6 md:h-6" data-lucide="star"></i>
</div>
<div>
<div className="text-xl md:text-2xl font-medium tracking-tight text-[#292524]">Top Tier</div>
<div className="text-sm text-[#78716c] mt-1">Reputación Marca</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-4 md:p-12">
<div className="spotlight-card w-full max-w-[1400px] h-full md:h-auto md:aspect-video rounded-2xl md:rounded-3xl shadow-xl flex flex-col relative overflow-hidden">
<div className="clay-texture"></div>
<div className="slide-content p-6 md:p-16">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 reveal-anim gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-[#292524]">El Diagnóstico</h2>
<p className="text-base md:text-lg text-[#57534e] mt-2 max-w-xl">El sector artesanal suele percibirse como informal.</p>
</div>
<div className="px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold bg-[#f5f5f4] text-[#9a3412] border border-[#e7e5e4]">
                                Problema Central: Informalidad
                            </div>
</div>
<div className="flex flex-col md:flex-row gap-6 md:gap-8 reveal-anim reveal-delay-1 pb-20 md:pb-0">
<div className="flex-1 md:border-l border-l-2 md:pl-6 pl-4 py-2 flex flex-col justify-center relative group/item border-[#d6d3d1]">
<span className="absolute md:left-[-5px] left-[-5px] top-6 md:top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#a8a29e] group-hover/item:bg-[#9a3412] transition-colors"></span>
<i className="w-6 h-6 md:w-8 md:h-8 mb-3 text-[#a8a29e]" data-lucide="frown"></i>
<h3 className="text-lg md:text-xl font-semibold mb-2 text-[#292524]">Barrera 1: Soledad</h3>
<p className="text-sm md:text-base text-[#57534e] leading-relaxed">El paso de "hobby" a "negocio" es confuso y solitario.</p>
</div>
<div className="flex-1 md:border-l border-l-2 md:pl-6 pl-4 py-2 flex flex-col justify-center relative group/item border-[#d6d3d1]">
<span className="absolute md:left-[-5px] left-[-5px] top-6 md:top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#a8a29e] group-hover/item:bg-[#9a3412] transition-colors"></span>
<i className="w-6 h-6 md:w-8 md:h-8 mb-3 text-[#a8a29e]" data-lucide="wrench"></i>
<h3 className="text-lg md:text-xl font-semibold mb-2 text-[#292524]">Barrera 2: Gestión</h3>
<p className="text-sm md:text-base text-[#57534e] leading-relaxed">Falta de herramientas de gestión específicas.</p>
</div>
<div className="flex-1 md:border-l border-l-2 md:pl-6 pl-4 py-2 flex flex-col justify-center relative group/item border-[#d6d3d1]">
<span className="absolute md:left-[-5px] left-[-5px] top-6 md:top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#a8a29e] group-hover/item:bg-[#9a3412] transition-colors"></span>
<i className="w-6 h-6 md:w-8 md:h-8 mb-3 text-[#a8a29e]" data-lucide="hourglass"></i>
<h3 className="text-lg md:text-xl font-semibold mb-2 text-[#292524]">Barrera 3: Tiempo</h3>
<p className="text-sm md:text-base text-[#57534e] leading-relaxed">Tensión constante entre crear y administrar.</p>
</div>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-4 md:p-12">
<div className="spotlight-card w-full max-w-[1400px] h-full md:h-auto md:aspect-video rounded-2xl md:rounded-3xl shadow-xl flex flex-col md:grid md:grid-cols-2 relative overflow-hidden">
<div className="clay-texture"></div>
<div className="slide-content p-6 md:p-16 flex flex-col justify-center relative z-10 order-2 md:order-1">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-6 reveal-anim bg-[#f5f5f4] border border-[#e7e5e4]">
<i className="w-5 h-5 md:w-6 md:h-6 text-[#9a3412]" data-lucide="coins"></i>
</div>
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-6 reveal-anim reveal-delay-1 text-[#292524]">Monetizar el "Know-How"</h2>
<ul className="space-y-4 md:space-y-6 reveal-anim reveal-delay-2 pb-20 md:pb-0">
<li className="flex items-start gap-4">
<i className="w-5 h-5 mt-1 shrink-0 text-[#9a3412]" data-lucide="check-circle-2"></i>
<div>
<h4 className="text-base md:text-lg font-semibold text-[#292524]">Ingresos Desacoplados</h4>
<p className="text-sm md:text-base text-[#57534e]">Generar margen que no dependa del horno.</p>
</div>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 mt-1 shrink-0 text-[#9a3412]" data-lucide="shield-check"></i>
<div>
<h4 className="text-base md:text-lg font-semibold text-[#292524]">Marca Personal</h4>
<p className="text-sm md:text-base text-[#57534e]">Mostrar el ethos eleva el valor percibido.</p>
</div>
</li>
</ul>
</div>

<div className="relative h-[250px] md:h-full w-full flex items-center justify-center overflow-hidden bg-[#e7e5e4]/30 order-1 md:order-2 border-b md:border-b-0 md:border-l border-[#d6d3d1]">
<div className="relative w-48 h-48 md:w-72 md:h-72 reveal-anim reveal-delay-3">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">

<path className="text-[#d6d3d1]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2"></path>

<path className="text-[#9a3412] circle-chart-fill" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" style={{'--target-percent': '85'}}></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-4xl md:text-5xl font-serif font-medium text-[#292524]">85%</span>
<span className="text-[10px] md:text-xs uppercase tracking-widest text-[#78716c] mt-1">Margen Potencial</span>
</div>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-4 md:p-12">
<div className="spotlight-card w-full max-w-[1400px] h-full md:h-auto md:aspect-video rounded-2xl md:rounded-3xl shadow-xl flex flex-col justify-center items-center p-8 md:p-20 text-center relative overflow-hidden">
<div className="clay-texture"></div>
<span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#9a3412] uppercase mb-6 md:mb-8 reveal-anim">Nuestra Promesa</span>
<blockquote className="text-2xl md:text-5xl font-serif leading-tight max-w-4xl reveal-anim reveal-delay-1 text-[#292524]">
                        "Acompañamos a emprendedores artesanales a transformar su oficio en negocios <span className="italic text-[#9a3412]">premium</span>, sostenibles y organizados."
                    </blockquote>
<div className="mt-8 md:mt-10 flex items-center gap-4 text-[#57534e] text-sm md:text-lg reveal-anim reveal-delay-2">
<span className="w-6 md:w-12 h-px bg-[#d6d3d1]"></span>
<span>Metodología Nina Rústika</span>
<span className="w-6 md:w-12 h-px bg-[#d6d3d1]"></span>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-4 md:p-12">
<div className="spotlight-card w-full max-w-[1400px] h-full md:h-auto md:aspect-video rounded-2xl md:rounded-3xl shadow-xl flex flex-col relative overflow-hidden">
<div className="clay-texture"></div>
<div className="slide-content p-6 md:p-16">
<div className="mb-8 md:mb-12 text-center reveal-anim">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-[#292524]">La Escalera de Valor</h2>
<p className="text-base md:text-lg text-[#57534e] mt-2">Un ecosistema diseñado para crecer con el artesano.</p>
</div>
<div className="flex flex-col md:flex-row gap-4 md:gap-6 h-auto md:h-full items-stretch md:items-end justify-center reveal-anim reveal-delay-1 px-0 md:px-10 pb-20 md:pb-0">

<div className="w-full md:w-1/3 rounded-xl md:rounded-t-2xl border p-6 md:p-8 h-auto md:h-[60%] flex flex-col justify-start relative group bg-[#f5f5f4] border-[#e7e5e4] hover:-translate-y-2 transition-transform duration-500">
<div className="hidden md:block absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-[#d6d3d1]"></div>
<div className="flex items-center gap-3 mb-4">
<span className="text-2xl md:text-4xl font-serif text-[#a8a29e] font-bold">01</span>
<h3 className="text-lg md:text-xl font-semibold text-[#292524]">Atracción</h3>
</div>
<p className="mb-2 font-medium text-[#57534e]">Newsletter &amp; Talleres</p>
<p className="text-sm text-[#78716c] leading-relaxed">Foco en comunidad. Substack y eventos.</p>
</div>

<div className="w-full md:w-1/3 rounded-xl md:rounded-t-2xl border p-6 md:p-8 h-auto md:h-[75%] flex flex-col justify-start relative shadow-md z-10 group bg-white border-[#e7e5e4] hover:-translate-y-2 transition-transform duration-500">
<div className="hidden md:block absolute top-0 left-0 w-full h-1 bg-[#57534e] rounded-t-2xl"></div>
<div className="flex items-center gap-3 mb-4">
<span className="text-2xl md:text-4xl font-serif text-[#a8a29e] group-hover:text-[#57534e] transition-colors font-bold">02</span>
<h3 className="text-lg md:text-xl font-semibold text-[#292524]">Estructura</h3>
</div>
<p className="mb-2 font-medium text-[#57534e]">Templates Digitales</p>
<p className="text-sm text-[#78716c] leading-relaxed">Foco en solución operativa. Notion y Guidelines.</p>
</div>

<div className="w-full md:w-1/3 rounded-xl md:rounded-t-2xl border p-6 md:p-8 h-auto md:h-[90%] flex flex-col justify-start relative group bg-[#fff7ed] border-[#fed7aa] hover:-translate-y-2 transition-transform duration-500">
<div className="hidden md:block absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-[#9a3412]"></div>
<div className="flex items-center gap-3 mb-4">
<span className="text-2xl md:text-4xl font-serif text-[#fdba74] group-hover:text-[#9a3412] transition-colors font-bold">03</span>
<h3 className="text-lg md:text-xl font-semibold text-[#9a3412]">Transformación</h3>
</div>
<p className="mb-2 font-medium text-[#7c2d12]">Coaching 1-1</p>
<p className="text-sm text-[#9a3412]/80 leading-relaxed">Foco en estrategia. Mentoría personalizada.</p>
</div>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-4 md:p-12">
<div className="spotlight-card w-full max-w-[1400px] h-full md:h-auto md:aspect-video rounded-2xl md:rounded-3xl shadow-xl flex flex-col relative overflow-hidden">
<div className="clay-texture"></div>
<div className="slide-content p-6 md:p-16">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-10 reveal-anim">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-[#292524]">Arquitectura Financiera</h2>
<div className="flex gap-2 text-xs md:text-sm text-[#78716c] mt-2 md:mt-0 bg-[#f5f5f4] px-2 py-1 rounded">
<i className="w-4 h-4" data-lucide="globe"></i> USD Currency
                            </div>
</div>
<div className="w-full overflow-x-auto rounded-xl border reveal-anim reveal-delay-1 border-[#e7e5e4] bg-white/50">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead>
<tr className="border-b text-[#78716c] text-xs md:text-sm uppercase tracking-wider bg-[#fafaf9] border-[#e7e5e4]">
<th className="p-4 md:p-6 font-medium">Producto</th>
<th className="p-4 md:p-6 font-medium">Formato</th>
<th className="p-4 md:p-6 font-medium text-right">Precio</th>
</tr>
</thead>
<tbody className="divide-y divide-[#e7e5e4] bg-white/80">
<tr className="group hover:bg-[#fff7ed] transition-colors">
<td className="p-4 md:p-6 font-medium flex items-center gap-3 text-[#292524]">
<div className="w-8 h-8 rounded flex items-center justify-center text-[#78716c] bg-[#f5f5f4]"><i className="w-4 h-4" data-lucide="mail"></i></div>
                                            Suscripción
                                        </td>
<td className="p-4 md:p-6 text-[#57534e] text-sm md:text-base">Substack Premium</td>
<td className="p-4 md:p-6 text-right font-serif text-base md:text-lg text-[#292524]">$10 - $50</td>
</tr>
<tr className="group hover:bg-[#fff7ed] transition-colors">
<td className="p-4 md:p-6 font-medium flex items-center gap-3 text-[#292524]">
<div className="w-8 h-8 rounded flex items-center justify-center text-[#78716c] bg-[#f5f5f4]"><i className="w-4 h-4" data-lucide="layout-template"></i></div>
                                            Herramienta
                                        </td>
<td className="p-4 md:p-6 text-[#57534e] text-sm md:text-base">Template Notion</td>
<td className="p-4 md:p-6 text-right font-serif text-base md:text-lg text-[#292524]">$45 - $95</td>
</tr>
<tr className="group hover:bg-[#fff7ed] transition-colors border-l-4 border-l-[#9a3412]">
<td className="p-4 md:p-6 font-medium flex items-center gap-3 text-[#292524]">
<div className="w-8 h-8 rounded flex items-center justify-center text-[#9a3412] bg-[#fff7ed]"><i className="w-4 h-4" data-lucide="crown"></i></div>
                                            Mentoría Premium
                                        </td>
<td className="p-4 md:p-6 text-[#57534e] text-sm md:text-base">Coaching 1-1</td>
<td className="p-4 md:p-6 text-right font-serif text-base md:text-lg text-[#9a3412] font-semibold">$600+</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-4 md:p-12">
<div className="spotlight-card w-full max-w-[1400px] h-full md:h-auto md:aspect-video rounded-2xl md:rounded-3xl shadow-xl flex flex-col relative overflow-hidden">
<div className="clay-texture"></div>
<div className="slide-content p-6 md:p-16 flex flex-col items-center">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-8 md:mb-12 text-center reveal-anim text-[#292524]">Embudo de Conversión</h2>
<div className="w-full max-w-xl mx-auto flex flex-col items-center gap-2 pb-20 md:pb-0">

<div className="funnel-bar w-full h-14 bg-[#fafaf9] border border-[#e7e5e4] rounded-lg flex items-center justify-between px-4" style={{transitionDelay: '0.1s'}}>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#a8a29e]" data-lucide="instagram"></i>
<span className="font-medium text-[#57534e] text-sm">Audiencia</span>
</div>
<span className="font-serif text-lg">7,000</span>
</div>

<div className="h-4 w-px bg-[#d6d3d1]/50 funnel-bar" style={{transitionDelay: '0.3s', transformOrigin: 'top'}}></div>

<div className="funnel-bar w-[80%] h-14 bg-white border border-[#e7e5e4] rounded-lg flex items-center justify-between px-4 shadow-sm" style={{transitionDelay: '0.4s'}}>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#a8a29e]" data-lucide="mails"></i>
<span className="font-medium text-[#57534e] text-sm">Leads</span>
</div>
<span className="font-serif text-lg">350</span>
</div>

<div className="h-4 w-px bg-[#d6d3d1]/50 funnel-bar" style={{transitionDelay: '0.6s', transformOrigin: 'top'}}></div>

<div className="funnel-bar w-[50%] h-14 bg-white border border-[#e7e5e4] rounded-lg flex items-center justify-between px-4 shadow-md" style={{transitionDelay: '0.7s'}}>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#a8a29e]" data-lucide="shopping-bag"></i>
<span className="font-medium text-[#57534e] text-sm">Clientes</span>
</div>
<span className="font-serif text-lg">100</span>
</div>

<div className="h-4 w-px bg-[#d6d3d1]/50 funnel-bar" style={{transitionDelay: '0.9s', transformOrigin: 'top'}}></div>

<div className="funnel-bar w-[30%] h-16 bg-[#292524] border border-[#292524] rounded-lg flex items-center justify-between px-4 shadow-lg text-[#e7e5e4]" style={{transitionDelay: '1.0s'}}>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#fdba74]" data-lucide="gem"></i>
<span className="font-medium text-[#e7e5e4] text-sm">High Ticket</span>
</div>
<span className="font-serif text-lg text-[#fdba74]">10</span>
</div>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-4 md:p-12">
<div className="spotlight-card w-full max-w-[1400px] h-full md:h-auto md:aspect-video rounded-2xl md:rounded-3xl shadow-xl flex flex-col relative overflow-hidden">
<div className="clay-texture"></div>
<div className="slide-content p-6 md:p-16">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 md:mb-16 reveal-anim">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-[#292524]">Proyección Anual</h2>
<div className="text-left md:text-right mt-4 md:mt-0 p-4 bg-[#f5f5f4] rounded-xl border border-[#e7e5e4]">
<div className="text-[10px] uppercase tracking-widest mb-1 text-[#78716c]">Total Estimado</div>
<div className="text-3xl md:text-4xl font-serif text-[#9a3412]">$19,500 <span className="text-lg text-[#78716c]">USD</span></div>
</div>
</div>
<div className="space-y-8 md:space-y-10 w-full reveal-anim reveal-delay-1 pb-20 md:pb-0">

<div className="group">
<div className="flex justify-between text-sm font-semibold mb-3 text-[#57534e]">
<span>Mentoría 1-1</span>
<span>$8,000 (41%)</span>
</div>
<div className="w-full rounded-full h-8 md:h-10 overflow-hidden relative bg-[#e7e5e4]">
<div className="bar-fill absolute top-0 left-0 h-full rounded-full bg-[#292524]" style={{'--target-width': '41%'}}></div>
</div>
<p className="text-xs mt-2 pl-1 text-[#a8a29e]">8 procesos anuales x $1000</p>
</div>

<div className="group">
<div className="flex justify-between text-sm font-semibold mb-3 text-[#57534e]">
<span>Productos Digitales</span>
<span>$7,500 (38%)</span>
</div>
<div className="w-full rounded-full h-8 md:h-10 overflow-hidden relative bg-[#e7e5e4]">
<div className="bar-fill absolute top-0 left-0 h-full rounded-full bg-[#78716c]" style={{'--target-width': '38%', transitionDelay: '0.2s'}}></div>
</div>
</div>

<div className="group">
<div className="flex justify-between text-sm font-semibold mb-3 text-[#57534e]">
<span>Talleres</span>
<span>$4,000 (21%)</span>
</div>
<div className="w-full rounded-full h-8 md:h-10 overflow-hidden relative bg-[#e7e5e4]">
<div className="bar-fill absolute top-0 left-0 h-full rounded-full bg-[#a8a29e]" style={{'--target-width': '21%', transitionDelay: '0.4s'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-4 md:p-12">
<div className="spotlight-card w-full max-w-[1400px] h-full md:h-auto md:aspect-video rounded-2xl md:rounded-3xl shadow-xl flex flex-col relative overflow-hidden">
<div className="clay-texture"></div>
<div className="slide-content p-6 md:p-16">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-12 md:mb-16 reveal-anim text-[#292524]">Hoja de Ruta</h2>
<div className="relative w-full pb-20 md:pb-0">

<svg className="absolute top-[28px] left-0 w-full h-20 -z-10 hidden md:block overflow-visible" preserveaspectratio="none">
<path className="roadmap-line" d="M0,1 L1200,1" fill="none" stroke="#d6d3d1" strokeWidth="2"></path>
</svg>

<div className="md:hidden absolute top-0 left-[19px] h-full w-px -z-10 bg-[#d6d3d1]"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8">

<div className="relative md:pt-10 pl-12 md:pl-0 reveal-anim reveal-delay-1">
<div className="absolute top-0 md:top-0 left-0 md:left-0 md:-translate-y-[50%] w-10 h-10 md:w-4 md:h-4 rounded-full border-4 shadow-sm bg-[#292524] border-[#e6e4e0] md:border-white z-10 flex items-center justify-center text-white md:text-transparent text-xs">1</div>
<div className="hidden md:block text-xs font-bold uppercase tracking-widest mb-2 text-[#a8a29e]">Mes 1</div>
<h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2 text-[#292524]">Migración</h3>
<p className="text-sm text-[#57534e]">Lanzar Substack y comunicar el proceso.</p>
</div>

<div className="relative md:pt-10 pl-12 md:pl-0 reveal-anim reveal-delay-2">
<div className="absolute top-0 md:top-0 left-0 md:left-0 md:-translate-y-[50%] w-10 h-10 md:w-4 md:h-4 rounded-full border-4 md:border-2 bg-white border-[#d6d3d1] z-10 flex items-center justify-center text-[#57534e] md:text-transparent text-xs">2</div>
<div className="hidden md:block text-xs font-bold uppercase tracking-widest mb-2 text-[#a8a29e]">Mes 2</div>
<h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2 text-[#292524]">Validación</h3>
<p className="text-sm text-[#57534e]">Taller presencial para identificar problemas.</p>
</div>

<div className="relative md:pt-10 pl-12 md:pl-0 reveal-anim reveal-delay-3">
<div className="absolute top-0 md:top-0 left-0 md:left-0 md:-translate-y-[50%] w-10 h-10 md:w-4 md:h-4 rounded-full border-4 md:border-2 bg-white border-[#d6d3d1] z-10 flex items-center justify-center text-[#57534e] md:text-transparent text-xs">3</div>
<div className="hidden md:block text-xs font-bold uppercase tracking-widest mb-2 text-[#a8a29e]">Mes 3</div>
<h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2 text-[#292524]">Producto</h3>
<p className="text-sm text-[#57534e]">MVP del Template de Notion.</p>
</div>

<div className="relative md:pt-10 pl-12 md:pl-0 reveal-anim" style={{transitionDelay: '0.4s'}}>
<div className="absolute top-0 md:top-0 left-0 md:left-0 md:-translate-y-[50%] w-10 h-10 md:w-4 md:h-4 rounded-full border-4 md:border-2 bg-white border-[#d6d3d1] z-10 flex items-center justify-center text-[#57534e] md:text-transparent text-xs">4</div>
<div className="hidden md:block text-xs font-bold uppercase tracking-widest mb-2 text-[#a8a29e]">Mes 4</div>
<h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2 text-[#292524]">Escalamiento</h3>
<p className="text-sm text-[#57534e]">Convocatoria Coaching 1-1.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-4 md:p-12">
<div className="spotlight-card w-full max-w-[1400px] h-full md:h-auto md:aspect-video rounded-2xl md:rounded-3xl shadow-xl flex flex-col md:grid md:grid-cols-2 relative overflow-hidden">
<div className="clay-texture"></div>
<div className="slide-content p-6 md:p-16 flex flex-col justify-center">
<div className="mb-8 md:mb-0 reveal-anim">
<div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#f5f5f4] border border-[#e7e5e4]">
<i className="w-8 h-8 md:w-10 md:h-10 text-[#57534e]" data-lucide="help-circle"></i>
</div>
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-4 text-[#292524]">Mesa de Trabajo</h2>
<p className="text-base md:text-lg text-[#57534e]">Puntos críticos por definir.</p>
</div>
</div>
<div className="slide-content p-6 md:p-16 flex flex-col justify-center space-y-4 md:space-y-6 reveal-anim reveal-delay-1 pb-20 md:pb-0 bg-white/30">
<div className="p-5 md:p-6 border rounded-xl transition-colors cursor-default border-[#e7e5e4] bg-white hover:border-[#a8a29e]">
<h3 className="text-base md:text-lg font-semibold mb-1 text-[#292524]">Identidad del Canal</h3>
<p className="text-[#57534e] text-xs md:text-sm">¿Sub-marca de Nina o marca personal?</p>
</div>
<div className="p-5 md:p-6 border rounded-xl transition-colors cursor-default border-[#e7e5e4] bg-white hover:border-[#a8a29e]">
<h3 className="text-base md:text-lg font-semibold mb-1 text-[#292524]">Capacidad Operativa</h3>
<p className="text-[#57534e] text-xs md:text-sm">¿Horas para coaching vs producción?</p>
</div>
<div className="p-5 md:p-6 border rounded-xl transition-colors cursor-default border-[#e7e5e4] bg-white hover:border-[#a8a29e]">
<h3 className="text-base md:text-lg font-semibold mb-1 text-[#292524]">Nicho Específico</h3>
<p className="text-[#57534e] text-xs md:text-sm">¿Principiantes o artesanos caóticos?</p>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-4 md:p-12">
<div className="spotlight-card w-full max-w-[1400px] h-full md:h-auto md:aspect-video rounded-2xl md:rounded-3xl shadow-2xl flex flex-col justify-center items-center relative overflow-hidden text-center p-8">

<div className="absolute inset-0 bg-[#292524]"></div>
<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
<div className="relative z-10 max-w-4xl px-4">
<i className="w-12 h-12 md:w-16 md:h-16 mb-6 md:mb-8 mx-auto block reveal-anim text-[#a8a29e]" data-lucide="mountain-snow"></i>
<h2 className="text-3xl md:text-6xl font-serif tracking-tight leading-tight mb-8 reveal-anim reveal-delay-1 text-[#e7e5e4]">
                            El alma de la tierra,<br />ahora en el conocimiento.
                        </br></h2>
<p className="text-base md:text-xl font-light italic mb-10 md:mb-12 reveal-anim reveal-delay-2 text-[#a8a29e]">
                            "Dignificar el oficio es el mejor marketing para nuestras piezas"
                        </p>
<div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm transition-all cursor-pointer reveal-anim reveal-delay-3 border-[#57534e] bg-[#44403c] text-[#d6d3d1] hover:bg-[#57534e] hover:text-white hover:scale-105">
<span>Comenzar Estrategia</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</section>
</div>
</main>
<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 md:gap-6 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full border shadow-lg bg-white/70 border-[#e7e5e4]">
<button className="p-2 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#e7e5e4] text-[#57534e]" id="prevBtn">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<div className="font-mono text-xs md:text-sm text-[#78716c] tracking-widest">
<span className="font-semibold text-[#292524]" id="currentSlide">01</span> / <span id="totalSlides">12</span>
</div>
<button className="p-2 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#e7e5e4] text-[#57534e]" id="nextBtn">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>


    </>
  );
}
