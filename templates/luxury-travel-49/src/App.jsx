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
            // Initial Entry Animations
            setTimeout(() => {
                const header = document.getElementById('nav-header');
                header.classList.remove('opacity-0', '-translate-y-4');
                header.classList.add('opacity-100', 'translate-y-0');

                const elementsToAnimate = ['hero-title', 'hero-subtitle', 'hero-cta'];
                elementsToAnimate.forEach(id => {
                    const el = document.getElementById(id);
                    if(el) {
                        el.classList.remove('opacity-0', 'translate-y-8');
                        el.classList.add('opacity-100', 'translate-y-0');
                    }
                });
            }, 150);

            // Automatic Background Slider Logic
            const slides = document.querySelectorAll('.slide');
            let currentSlide = 0;

            setInterval(() => {
                // Fade out current slide
                slides[currentSlide].classList.remove('opacity-100');
                slides[currentSlide].classList.add('opacity-0');

                // Calculate next slide index
                currentSlide = (currentSlide + 1) % slides.length;

                // Fade in next slide
                slides[currentSlide].classList.remove('opacity-0');
                slides[currentSlide].classList.add('opacity-100');
            }, 6000); // Change image every 6 seconds
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
      

<div className="relative min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-2rem)] w-full bg-zinc-900 rounded-3xl sm:rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden flex flex-col items-center justify-start pt-4 sm:pt-6 pb-16 md:pb-20">

<div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black" id="slider-container">

<img alt="Majestic Mountain View" className="slide absolute inset-0 w-full h-full object-cover object-center animate-bg opacity-100" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&amp;w=3506&amp;auto=format&amp;fit=crop"/>

<img alt="Lake View" className="slide absolute inset-0 w-full h-full object-cover object-center animate-bg opacity-0" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&amp;w=3540&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-black/20 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
</div>

<header className="relative z-50 w-full max-w-[1400px] px-4 sm:px-6 md:px-10 flex items-center justify-between opacity-0 -translate-y-4 transition-all duration-1000 ease-out" id="nav-header">

<div className="flex items-center gap-6 md:gap-8">
<a className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white hover:opacity-80 transition-opacity" href="#">
                    VOYAGE
                </a>

<div className="hidden lg:flex items-center bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-full">
<button className="px-5 py-1.5 rounded-full bg-white text-black text-base font-medium shadow-sm transition-all">
                        Групповые
                    </button>
<button className="px-5 py-1.5 rounded-full text-white text-base font-medium hover:text-white/80 transition-all">
                        Частные
                    </button>
</div>
</div>

<nav className="hidden xl:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
<a className="text-base font-medium text-white/90 hover:text-white transition-colors" href="#">Компания</a>
<a className="text-base font-medium text-white/90 hover:text-white transition-colors" href="#">Направления</a>
<a className="text-base font-medium text-white/90 hover:text-white transition-colors" href="#">Журнал</a>
<a className="text-base font-medium text-white/90 hover:text-white transition-colors" href="#">Медиа</a>
</nav>

<div className="flex items-center gap-2 sm:gap-4">

<div className="hidden md:flex items-center bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-full">
<button className="w-10 h-8 rounded-full text-white text-sm font-medium hover:text-white/80 transition-all flex items-center justify-center">
                        EN
                    </button>
<button className="w-10 h-8 rounded-full bg-white text-black text-sm font-medium shadow-sm transition-all flex items-center justify-center">
                        RU
                    </button>
</div>
<button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-all">
                    Войти
                </button>

<button className="xl:hidden text-white p-1.5 sm:p-2 flex items-center justify-center hover:opacity-80 transition-opacity">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<main className="relative z-10 flex-grow flex flex-col items-center justify-center w-full max-w-5xl px-4 sm:px-6 md:px-8 mt-12 sm:mt-16 md:mt-24 text-center">
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] md:leading-[1.1] font-medium tracking-tight text-white mb-4 sm:mb-6 md:mb-8 opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out" id="hero-title">
                Безупречные путешествия,<br className="hidden sm:block"/> Безграничные эмоции.
            </h1>
<p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-white/90 max-w-3xl mb-8 sm:mb-10 md:mb-14 opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-out leading-relaxed" id="hero-subtitle">
                Создано для истинных ценителей. Voyage берет на себя все заботы, чтобы вы наслаждались каждым моментом вашего отдыха.
            </p>

<button className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 flex items-center gap-2 sm:gap-3 opacity-0 translate-y-8 ease-out hover:scale-105 shadow-xl shadow-black/20" id="hero-cta" style={{transitionDelay: '500ms', transitionDuration: '700ms'}}>
                Начать путешествие
                <iconify-icon className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</main>

<div className="absolute bottom-0 w-full h-32 md:h-40 bg-gradient-to-t from-black/40 to-transparent z-0"></div>
</div>


    </>
  );
}
