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



        document.addEventListener('DOMContentLoaded', () => {
            const track = document.getElementById('slider-track');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const indicatorsContainer = document.getElementById('indicators');
            const slides = track.children;
            const totalSlides = slides.length;
            let currentIndex = 0;

            // 1. Generate Indicators Dynamically (UX Fix: Exact number of dots)
            indicatorsContainer.innerHTML = ''; // Ensure empty before filling
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('button');
                dot.className = `h-1.5 rounded-full transition-all duration-300 ${i === 0 ? 'bg-[#D4654F] w-6' : 'bg-[#2C5F5D]/20 w-1.5 hover:bg-[#2C5F5D]/40'}`;
                dot.setAttribute('aria-label', `Ir a diapositiva ${i + 1}`);
                dot.addEventListener('click', () => goToSlide(i));
                indicatorsContainer.appendChild(dot);
            }

            const updateCarousel = () => {
                const percentage = currentIndex * 100;
                track.style.transform = `translateX(-${percentage}%)`;
                
                // Update Button States (UX: Visual feedback for disabled states)
                prevBtn.disabled = currentIndex === 0;
                prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
                prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';

                nextBtn.disabled = currentIndex === totalSlides - 1;
                nextBtn.style.opacity = currentIndex === totalSlides - 1 ? '0.5' : '1';
                nextBtn.style.cursor = currentIndex === totalSlides - 1 ? 'not-allowed' : 'pointer';

                // Update Indicators
                const dots = indicatorsContainer.children;
                Array.from(dots).forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.className = 'h-1.5 rounded-full transition-all duration-300 bg-[#D4654F] w-6';
                    } else {
                        dot.className = 'h-1.5 rounded-full transition-all duration-300 bg-[#2C5F5D]/20 w-1.5 hover:bg-[#2C5F5D]/40';
                    }
                });
            };

            const goToSlide = (index) => {
                if (index < 0) return;
                if (index >= totalSlides) return;
                currentIndex = index;
                updateCarousel();
            };

            // Listeners
            prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
            nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

            // Keyboard Nav
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
                if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
            });

            // Touch Swipe Support (Mobile UX)
            let touchStartX = 0;
            let touchEndX = 0;
            const sliderArea = document.getElementById('carousel-container');

            sliderArea.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, {passive: true});

            sliderArea.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, {passive: true});

            const handleSwipe = () => {
                const swipeThreshold = 50;
                if (touchStartX - touchEndX > swipeThreshold) {
                    goToSlide(currentIndex + 1);
                }
                if (touchEndX - touchStartX > swipeThreshold) {
                    goToSlide(currentIndex - 1);
                }
            };

            updateCarousel();
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
      
<section className="overflow-hidden w-full pt-16 pb-20 relative">
<div className="max-w-2xl mx-auto px-6">


<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-6">
<div className="text-left">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2B2B2B] mb-2">
                        Transformaciones
                    </h2>
<p className="text-base text-[#2B2B2B]/60 tracking-tight font-medium max-w-xs">
                        Resultados reales en piscinas de Miami.
                    </p>
</div>

<div className="flex gap-3 self-start sm:self-end">
<button className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#2C5F5D]/10 bg-white text-[#2C5F5D] hover:border-[#D4654F] hover:text-[#D4654F] transition-all duration-200 shadow-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="prevBtn" style={{cursor: 'not-allowed'}}>
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#2C5F5D]/10 bg-white text-[#2C5F5D] hover:border-[#D4654F] hover:text-[#D4654F] transition-all duration-200 shadow-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" id="nextBtn" style={{cursor: 'pointer'}}>
<iconify-icon className="" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="relative w-full group" id="carousel-container">
<div className="overflow-hidden rounded-3xl border border-[#2C5F5D]/10 bg-white shadow-sm relative z-10">
<div className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" id="slider-track">

<div className="w-full flex-shrink-0">
<div className="flex flex-col h-full">
<div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100 group-hover:scale-[1.01] transition-transform duration-700">
<img alt="Kendall Pool" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a6cd12d-3fa2-46ee-a67d-56d02b72e11e_800w.png"/>

<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#2B2B2B] shadow-sm">
                                        Antes
                                    </div>
<div className="absolute top-3 right-3 bg-[#2C5F5D]/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm">
                                        Después
                                    </div>
</div>
<div className="p-6 sm:p-8">
<div className="grid grid-cols-2 gap-y-6 gap-x-4">
<div className="flex flex-col gap-1">
<div className="flex gap-2 text-[#2C5F5D] items-center">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="uppercase text-[10px] font-semibold text-[#2C5F5D]/70 tracking-wider">Ubicación</span>
</div>
<span className="text-sm font-medium pl-6">Kendall</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-[#2C5F5D]">
<iconify-icon className="" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-semibold text-[#2C5F5D]/70">Tiempo</span>
</div>
<span className="text-sm font-medium pl-6">6 horas</span>
</div>
<div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
<div className="flex gap-2 text-[#2C5F5D] items-center">
<iconify-icon icon="solar:paint-roller-outline" width="16"></iconify-icon>
<span className="uppercase text-[10px] font-semibold text-[#2C5F5D]/70 tracking-wider">Servicio</span>
</div>
<span className="leading-snug text-sm font-medium pl-6">Limpieza profunda</span>
</div>
<div className="flex flex-col gap-1 justify-end">
<div className="flex items-center gap-2 text-[#2C5F5D]">
<iconify-icon icon="solar:dollar-minimalistic-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-semibold text-[#2C5F5D]/70">Inversión</span>
</div>
<span className="text-lg font-semibold text-[#D4654F] pl-6">$450</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full flex-shrink-0">
<div className="flex flex-col h-full">
<div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100 group-hover:scale-[1.01] transition-transform duration-700">
<img alt="Coral Gables Pool" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e31a0364-f8a3-4097-a234-7ff5f9dec901_800w.png"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#2B2B2B] shadow-sm">
                                        Antes
                                    </div>
<div className="absolute top-3 right-3 bg-[#2C5F5D]/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm">
                                        Después
                                    </div>
</div>
<div className="p-6 sm:p-8">
<div className="grid grid-cols-2 gap-y-6 gap-x-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-[#2C5F5D]">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-semibold text-[#2C5F5D]/70">Ubicación</span>
</div>
<span className="text-sm font-medium pl-6">Coral Gables</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-[#2C5F5D]">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-semibold text-[#2C5F5D]/70">Tiempo</span>
</div>
<span className="text-sm font-medium pl-6">3 días</span>
</div>
<div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
<div className="flex gap-2 text-[#2C5F5D] items-center">
<iconify-icon icon="solar:paint-roller-outline" width="16"></iconify-icon>
<span className="uppercase text-[10px] font-semibold text-[#2C5F5D]/70 tracking-wider">Servicio</span>
</div>
<span className="text-sm font-medium pl-6 leading-snug">Renovación de superficie (Diamond Brite)</span>
</div>
<div className="flex flex-col gap-1 justify-end">
<div className="flex items-center gap-2 text-[#2C5F5D]">
<iconify-icon icon="solar:dollar-minimalistic-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-semibold text-[#2C5F5D]/70">Inversión</span>
</div>
<span className="text-lg font-semibold text-[#D4654F] pl-6">$4,200</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full flex-shrink-0">
<div className="flex flex-col h-full">
<div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100 group-hover:scale-[1.01] transition-transform duration-700">
<img alt="Green to Clean Pool" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80cef16d-bfeb-4c91-9b7e-e69713dc11c0_800w.png"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#2B2B2B] shadow-sm">
                                        Antes
                                    </div>
<div className="absolute top-3 right-3 bg-[#2C5F5D]/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm">
                                        Después
                                    </div>
</div>
<div className="p-6 sm:p-8">
<div className="grid grid-cols-2 gap-y-6 gap-x-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-[#2C5F5D]">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-semibold text-[#2C5F5D]/70">Ubicación</span>
</div>
<span className="text-sm font-medium pl-6">Miami Gardens</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-[#2C5F5D]">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-semibold text-[#2C5F5D]/70">Tiempo</span>
</div>
<span className="text-sm font-medium pl-6">48 horas</span>
</div>
<div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
<div className="flex gap-2 text-[#2C5F5D] items-center">
<iconify-icon icon="solar:water-outline" width="16"></iconify-icon>
<span className="uppercase text-[10px] font-semibold text-[#2C5F5D]/70 tracking-wider">Servicio</span>
</div>
<span className="text-sm font-medium pl-6 leading-snug">Tratamiento de Choque (Green-to-Clean)</span>
</div>
<div className="flex flex-col gap-1 justify-end">
<div className="flex items-center gap-2 text-[#2C5F5D]">
<iconify-icon icon="solar:dollar-minimalistic-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-semibold text-[#2C5F5D]/70">Inversión</span>
</div>
<span className="text-lg font-semibold text-[#D4654F] pl-6">$650</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full flex-shrink-0">
<div className="flex flex-col h-full">
<div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100 group-hover:scale-[1.01] transition-transform duration-700">
<img alt="Acid Wash Pool" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1808024b-962b-44af-9e81-c9335edb08d6_800w.png"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#2B2B2B] shadow-sm">
                                        Antes
                                    </div>
<div className="absolute top-3 right-3 bg-[#2C5F5D]/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm">
                                        Después
                                    </div>
</div>
<div className="p-6 sm:p-8">
<div className="grid grid-cols-2 gap-y-6 gap-x-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-[#2C5F5D]">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-semibold text-[#2C5F5D]/70">Ubicación</span>
</div>
<span className="text-sm font-medium pl-6">Key Biscayne</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-[#2C5F5D]">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-semibold text-[#2C5F5D]/70">Tiempo</span>
</div>
<span className="text-sm font-medium pl-6">1 día</span>
</div>
<div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
<div className="flex gap-2 text-[#2C5F5D] items-center">
<iconify-icon icon="solar:filters-outline" width="16"></iconify-icon>
<span className="uppercase text-[10px] font-semibold text-[#2C5F5D]/70 tracking-wider">Servicio</span>
</div>
<span className="text-sm font-medium pl-6 leading-snug">Lavado Ácido y Remoción de Manchas</span>
</div>
<div className="flex flex-col gap-1 justify-end">
<div className="flex items-center gap-2 text-[#2C5F5D]">
<iconify-icon icon="solar:dollar-minimalistic-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-semibold text-[#2C5F5D]/70">Inversión</span>
</div>
<span className="text-lg font-semibold text-[#D4654F] pl-6">$850</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full flex-shrink-0">
<div className="flex flex-col h-full">
<div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100 group-hover:scale-[1.01] transition-transform duration-700">
<img alt="Pump Repair" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e0fe1fd-99c6-4af7-8ae7-0ef93196c742_800w.png"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#2B2B2B] shadow-sm">
                                        Antes
                                    </div>
<div className="absolute top-3 right-3 bg-[#2C5F5D]/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm">
                                        Después
                                    </div>
</div>
<div className="p-6 sm:p-8">
<div className="grid grid-cols-2 gap-y-6 gap-x-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-[#2C5F5D]">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-semibold text-[#2C5F5D]/70">Ubicación</span>
</div>
<span className="text-sm font-medium pl-6">Pinecrest</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-[#2C5F5D]">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-semibold text-[#2C5F5D]/70">Tiempo</span>
</div>
<span className="text-sm font-medium pl-6">4 horas</span>
</div>
<div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
<div className="flex gap-2 text-[#2C5F5D] items-center">
<iconify-icon icon="solar:settings-minimalistic-linear" width="16"></iconify-icon>
<span className="uppercase text-[10px] font-semibold text-[#2C5F5D]/70 tracking-wider">Servicio</span>
</div>
<span className="text-sm font-medium pl-6 leading-snug">Instalación de Bomba de Velocidad Variable</span>
</div>
<div className="flex flex-col gap-1 justify-end">
<div className="flex items-center gap-2 text-[#2C5F5D]">
<iconify-icon icon="solar:dollar-minimalistic-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-semibold text-[#2C5F5D]/70">Inversión</span>
</div>
<span className="text-lg font-semibold text-[#D4654F] pl-6">$1,250</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-6" id="indicators"><button aria-label="Ir a diapositiva 1" className="h-1.5 rounded-full transition-all duration-300 bg-[#D4654F] w-6"></button><button aria-label="Ir a diapositiva 2" className="h-1.5 rounded-full transition-all duration-300 bg-[#2C5F5D]/20 w-1.5 hover:bg-[#2C5F5D]/40"></button><button aria-label="Ir a diapositiva 3" className="h-1.5 rounded-full transition-all duration-300 bg-[#2C5F5D]/20 w-1.5 hover:bg-[#2C5F5D]/40"></button><button aria-label="Ir a diapositiva 4" className="h-1.5 rounded-full transition-all duration-300 bg-[#2C5F5D]/20 w-1.5 hover:bg-[#2C5F5D]/40"></button><button aria-label="Ir a diapositiva 5" className="h-1.5 rounded-full transition-all duration-300 bg-[#2C5F5D]/20 w-1.5 hover:bg-[#2C5F5D]/40"></button></div>
</div>
</div>
</section>


    </>
  );
}
