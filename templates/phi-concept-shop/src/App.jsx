import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    (function () {
      const track = document.querySelector('.carousel-track');
      if (!track) return;

      const slides = Array.from(track.children);
      const prevBtn = document.querySelector('.carousel-prev');
      const nextBtn = document.querySelector('.carousel-next');
      const dots = Array.from(document.querySelectorAll('.carousel-dot'));

      let currentIndex = 0;

      function updateCarousel(index) {
        const clamped = Math.max(0, Math.min(index, slides.length - 1));
        currentIndex = clamped;

        const slideWidth = slides[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 16);
        const offset = -clamped * slideWidth;
        track.style.transform = 'translateX(' + offset + 'px)';

        if (prevBtn) prevBtn.disabled = clamped === 0;
        if (nextBtn) nextBtn.disabled = clamped === slides.length - 1;

        dots.forEach((dot, i) => {
          if (i === clamped) {
            dot.classList.remove('w-1.5', 'bg-neutral-300');
            dot.classList.add('w-4', 'bg-neutral-900');
          } else {
            dot.classList.remove('w-4', 'bg-neutral-900');
            dot.classList.add('w-1.5', 'bg-neutral-300');
          }
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          updateCarousel(currentIndex - 1);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          updateCarousel(currentIndex + 1);
        });
      }

      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => updateCarousel(index));
      });

      let startX = 0;
      let currentX = 0;
      let isDragging = false;

      track.addEventListener('pointerdown', (e) => {
        isDragging = true;
        startX = e.clientX;
        track.style.cursor = 'grabbing';
      });

      window.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        currentX = e.clientX;
      });

      window.addEventListener('pointerup', () => {
        if (!isDragging) return;
        isDragging = false;
        track.style.cursor = 'grab';
        const delta = currentX - startX;
        const threshold = 40;

        if (delta < -threshold) {
          updateCarousel(currentIndex + 1);
        } else if (delta > threshold) {
          updateCarousel(currentIndex - 1);
        }
      });

      updateCarousel(0);
    })();
  


  (function () {
    const track = document.querySelector('.signature-slider-track');
    if (!track) return;

    const slides = Array.from(track.querySelectorAll('.signature-slide'));
    const prev = document.querySelector('.signature-slider-prev');
    const next = document.querySelector('.signature-slider-next');
    const dots = Array(document.querySelectorAll('.signature-dot'));

    let index = 0;
    let autoPlayId;
    let isPointerDown = false;
    let startX = 0;
    let deltaX = 0;
    let baseOffset = 0;

    function getSlideWidth() {
      const first = slides[0];
      if (!first) return 0;
      const rect = first.getBoundingClientRect();
      const style = getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap || 16);
      return rect.width + gap;
    }

    function setActiveSlide(newIndex, withAnimation = true) {
      index = (newIndex + slides.length) % slides.length;
      const offset = -index * getSlideWidth();

      if (!withAnimation) {
        track.style.transitionDuration = '0ms';
      } else {
        track.style.transitionDuration = '500ms';
      }

      track.style.transform = 'translate3d(' offset + 'px, 0, 0)';
      baseOffset = offset;

      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('scale-[1.02]');
        } else {
          slide.classList.remove('scale-[1.02]');
        }
      });

      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.remove('w-1.5', 'bg-neutral-300');
          dot.classList.add('w-4', 'bg-neutral-900');
        } else {
          dot.classList.remove('w-4', 'bg-neutral-900');
          dot.classList.add('w-1.5', 'bg-neutral-300');
        }
      });
    }

    function handleNext() {
      setActiveSlide(index + 1);
      restartAutoPlay();
    }

    function handlePrev() {
      setActiveSlide(index - 1);
      restartAutoPlay();
       function startAutoPlay() {
      autoPlayId = setInterval(() => {
        handleNext();
      }, 5500);
    }

    function stopAutoPlay() {
      if (autoPlayId) clearInterval(autoPlayId);
      autoPlayId = null;
    }

    function restartAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    // Pointer / drag
    track.addEventListener('pointerdown', (e) => {
      isPointerDown = true;
      startX = e.clientX;
      deltaX = 0;
      baseOffset = -index * getSlideWidth();
      track.setPointerCapture(e.pointerId);
      track.style.cursor = 'grabbing';
      track.style.transitionDuration = '0ms';
      stopAutoPlay();
    });

    track.addEventListener('pointermove', (e) => {
      if (!isPointerDown) return;
      deltaX = e.clientX - startX;
      const current = baseOffset + deltaX;
      track.style.transform = 'translate3d(' + current + 'px, 0, 0)';
    });

    track.addEventListener('pointerup', (e) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      track.releasePointerCapture(e.pointerId);
      track.style.cursor = 'grab';

      const threshold = 60;
      if (deltaX <threshold) {
        setActiveSlide(index + 1);
      } else if (deltaX > threshold) {
        setActiveSlide(index - 1);
      } else {
        setActiveSlide(index);
      }

      restartAutoPlay();
    });

    track.addEventListener('pointerleave', (e) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      track.style.cursor = 'grab';
      setActiveSlide(index);
      restartAutoPlay();
    });

    if (next) next.addEventListener('click', handleNext);
    if (prev) prev.addEventListener('click', handlePrev);

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        setActiveSlide(i);
        restartAutoPlay();
      });
    });

    window.addEventListener('resize', () => {
      setActiveSlide(index, false);
    });

    setActiveSlide(0, false);
    startAutoPlay();
  })();



    function scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    document.addEventListener('DOMContentLoaded', function () {
      var y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex-1 flex flex-col bg-white text-neutral-900">

<div className="min-h-screen flex flex-col">

<header className="sticky z-40 bg-white/80 border-neutral-200/60 border-b top-0 backdrop-blur-sm">
<div className="max-w-5xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3">

<a className="inline-flex items-center gap-2 group" href="#home">
<div className="flex w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03fa428f-ecd2-405b-b54f-834e42e6d50c_320w.png)] bg-cover bg-center border-neutral-300/80 border rounded-full items-center justify-center">

</div>
<span className="group-hover:text-neutral-700 transition-colors duration-150 text-sm font-medium text-neutral-900 tracking-tight" style={{}}>Phi conncept</span>
</a>

<nav className="flex items-center text-xs gap-x-10 sm:gap-6 sm:text-sm">
<a className="text-neutral-600 hover:text-neutral-900 transition-colors duration-150" href="#product">
              Spray
            </a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors duration-150" href="#collection">
              Collection
            </a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors duration-150" href="#faq">
              FAQ
            </a>
<button className="hidden sm:inline-flex sm:text-sm px4 hover:bg-neutral-800 transition-colors duration-150 text-xs font-medium text-white tracking-tight bg-neutral-900 rounded-full pt-2 pr-6 pb-2 pl-6 blur-none items-center justify-center" onclick="ToSection('product')">
              Acheter
            </button>
</nav>
</div>
</header>
<main className="flex-1" id="home">

<section className="border-b border-neutral-200/70">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 sm:px-6 lg:px-8 sm:py-16 lg:py-20 max-w-5xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4 gap-x-10 gap-y-10 items-center">


<div className="relative">
<div className="aspect-[4/5] overflow-hidden flex bg-center w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02da0e07-c103-4d0d-ba34-76379717c3de_1600w.jpg)] bg-cover border-neutral-200/80 border rounded-3xl items-center justify-center">
</div>

<div className="hidden sm:flex absolute -bottom-6 left-6 rounded-2xl border border-neutral-200/80 bg-white/90 backdrop-blur-sm shadow-sm shadow-neutral-200/70 px-4 py-3 items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-50/80 flex items-center justify-center">

<svg className="w-4 h-4 text-emerald-600" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4l7 3v5c0 4.5-3 7-7 8-4-1-7-3.5-7-8V7l7-3z"></path>
<path d="M9.5 12.5L11 14l3.5-3.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="space-y-0.5">
<p className="text-xs font-medium text-neutral-900">
                    Protection &amp; soin réunis
                  </p>
<p className="text-xs text-neutral-500">
                    Élimine les germes, nourrit la peau, sans dessécher.
                  </p>
</div>
</div>
</div><div className="space-y-6">
<p className="uppercase text-xs text-neutral-500 tracking-[0.18em]">
                bien-être technologique
              </p>
<h1 className="sm:text-4xl md:text-5xl text-3xl font-semibold text-neutral-900 tracking-tight">
                Un concentré d’innovations pour vos mains.
              </h1>
<p className="text-base sm:text-lg text-neutral-600 max-w-md">
                Créé par nos experts en laboratoire, ce spray hydroalcoolique d’exception marie protection avancée, confort absolu et soin profond de la peau.
              </p>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full border border-white bg-neutral-200"></div>
<div className="h-7 w-7 rounded-full border border-white bg-neutral-200/80"></div>
<div className="h-7 w-7 rounded-full border border-white bg-neutral-100"></div>
</div>
<p className="text-sm text-neutral-500">
                  Déjà adopté dans plus de 2 000 routines de bien-être.
                </p>
</div><div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 gap-x-3 gap-y-3">
<button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-medium tracking-tight px-6 py-3 hover:bg-neutral-800 transition-colors duration-150" onclick="scrollToSection('product')">
                  Découvrir le spray
                </button>
<button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-neutral-300/80 text-neutral-900 text-sm font-medium tracking-tight px-6 py-3 hover:border-neutral-400 hover:bg-neutral-50 transition-colors duration-150" onclick="scrollToSection('benefits')">
                  Comprendre la technologie
                </button>
</div>
</div>
</div>
</section>


<section className="bg-neutral-50/60 border-neutral-200/70 border-b" id="collection">
<div className="sm:px-6 lg:px-8 max-w-5xl mr-auto ml-auto pt-2 pr-4 pb-8 pl-4">
<div className="flex gap-4 mb-4 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-xs tracking-[0.em] uppercase text-neutral-500">
      explorer les signatures
    </p>
<div className="flex items-center gap-2">
<button className="carousel-prev inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/80 bg-white text-neutral-700 hover:bg-neutral-900 hover:text-white transition-colors duration-150 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-neutral-700" disabled="" type="button">
<svg className="w-[14px] h-[14px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '14px', height: '14px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="carousel-next inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/80 bg-white text-neutral-700 hover:bg-neutral-900 hover:text-white transition-colors duration-150 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-neutral-700" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>
<div className="relative">
<div className="overflow-hidden">
<div className="carousel-track flex gap-4 sm:gap-5 transition-transform duration-300 ease-out" style={{transform: 'translateX(0px)', cursor: 'grab'}}>

<article className="min-w-[82%] sm:min-w-[55%] lg:min-w-[32%] flex flex-col rounded-2xl border border-neutral-200/80 bg-white overflow-hidden">
<div className="aspect-[4/5] flex bg-neutral-50 border-neutral-200/70 border-b items-center justify-center">
<div className="aspect-[3/5] flex bg-gradient-to-b from-amber-100 via-white to-neutral-200/80 w-[65%] border-neutral-200 border rounded-2xl items-center justify-center">
<span className="text-xs uppercase tracking-[0.18em] text-neutral-800">
                catalan
              </span>
</div>
</div>
<div className="p-4 sm:p-5 space-y-2">
<h3 className="text-sm font-medium text-neutral-900">
              CATALAN – Ambre épicé
            </h3>
<p className="text-xs text-neutral-500">
              Ambre lumineuse, poivre et bois de gaïac pour une chaleur sophistiquée et enveloppante.
            </p>
<p className="text-xs text-neutral-500">
              Idéal au crépuscule, après une longue journée.
            </p>
</div>
</article>

<article className="min-w-[82%] sm:min-w-[55%] lg:min-w-[32%] flex flex-col rounded-2xl border border-neutral-200/80 bg-white overflow-hidden">
<div className="aspect-[4/5] flex bg-neutral-50 border-neutral-200/70 border-b items-center justify-center">
<div className="w-[70%] h-[35%] rounded-full bg-gradient-to-r from-pink-100 via-rose-100 to-fuchsia-100 border border-neutral-200 flex items-center justify-center">
<span className="text-xs uppercase tracking-[0.18em] text-neutral-800">
                dottie
              </span>
</div>
</div>
<div className="p-4 sm:p-5 space-y-2">
<h3 className="text-sm font-medium text-neutral-900">
              DOTTIE – Gourmand pétillant
            </h3>
<p className="text-xs text-neutral-500">
              Alliance de fruits juteux et de douceur pâtissière, équilibrée par un voile musqué.
            </p>
<p className="text-xs text-neutral-500">
              Parfait pour dynamiser les matinées chargées.
            </p>
</div>
</article>

<article className="min-w-[82%] sm:min-w-[55%] lg:min-w-[32%] flex flex-col rounded-2xl border border-neutral-200/80 bg-white overflow-hidden">
<div className="aspect-[4/5] flex bg-neutral-50 border-neutral-200/70 border-b items-center justify-center">
<div className="w-[55%] aspect-square rounded-full bg-gradient-to-br from-orange-100 via-amber-50 to-pink-100 border border-neutral-200 flex items-center justify-center">
<span className="text-xs uppercase tracking-[0.18em] text-neutral-800">
                khintchine
              </span>
</div>
</div>
<div className="p-4 sm:p-5 space-y-2">
<h3 className="text-sm font-medium text-neutral-900">
              KHINTCHINE – Fruité solaire
            </h3>
<p className="text text-neutral-500">
              Agrumes vifs, fruits solaires et fond vanillé pour une énergie lumineuse.
            </p>
<p className="text-xs text-neutral-500">
              Le compagnon idéal des journées en mouvement.
            </p>
</div>
</article>

<article className="min-w-[82%] sm:min-w-[55%] lg:min-w-[32%] flex flex-col rounded-2xl border border-neutral-200/80 bg-white overflow-hidden">
<div className="aspect-[4/5] flex bg-neutral-50 border-neutral-200/70 border-b items-center justify-center">
<div className="w-[60%] h-[0.18rem] bg-gradient-to-r from-rose-100 via-white to-rose-200 rounded-full"></div>
</div>
<div className="p-4 sm:p-5 space-y-2">
<h3 className="text-sm font-medium text-neutral-900">
              ETHER – Bouquet de roses
            </h3>
<p className="text-xs text-neutral-500">
              Trois variétés de rose pour une impression de pétales frais et de lumière douce.
            </p>
<p className="text-xs text-neutral-500">
              Une signature éthérée pour les moments de calme.
            </p>
</div>
</article>
</div>
</div><div className="flex mt-4 items-center justify-between">
<div className="flex items-center gap-x-2">
<button className="carousel-dot h-1.5 rounded-full w-4 bg-neutral-900"></button>
<button className="carousel-dot h-1.5 rounded-full w-1.5 bg-neutral-300"></button>
<button className="carousel-dot h-1.5 rounded-full w-1.5 bg-neutral-300"></button>
<button className="carousel-dot h-1.5 rounded-full w-1.5 bg-neutral-300"></button>
</div><p className="text-xs text-neutral-500">Glissez pour faire défiler notre collection</p>
</div>
</div>

</div>
</section><section className="border-neutral-200/70 border-b" id="benefits">
<div className="sm:px-6 lg:px-8 sm:py-14 max-w-5xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8 sm:mb-10">
<div className="">
<p className="text-xs tracking-[0.18em] uppercase text-neutral-500">
                  bénéfices clés
                </p>
<h2 className="sm:text-3xl text-2xl font-semibold text-neutral-900 tracking-tight mt-2">
                  Propreté, confort, haute technologie.
                </h2>
</div>
<p className="text-base text-neutral-600 max-w-md">
                Une formule pensée pour protéger, hydrater et laisser vos mains aussi fraîches qu’après un soin en institut.
              </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

<div className="group border border-neutral-200/80 rounded-2xl bg-white hover:bg-neutral-50/60 transition-colors duration-150 p-5 sm:p-6 flex flex-col gap-4">
<div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center">

<svg className="w-4 h-4 text-neutral-700" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="7"></circle>
<path d="M8 8l8 8" strokeLinecap="round"></path>
<path d="M9.5 5.5L8 4M14.5 5.5L16 4M9.5 18.5L8 20M14.5 18.5L16 20" strokeLinecap="round"></path>
</svg>
</div>
<div className="space-y-1">
<h3 className="text-sm font-medium text-neutral-900">
                    Désinfection avancée
                  </h3>
<p className="text-sm text-neutral-600">
                    Une efficacité ciblée contre les germes, inspirée des protocoles de laboratoire les plus exigeants.
                  </p>
</div>
</div>

<div className="group border border-neutral-200/80 rounded-2xl bg-white hover:bg-neutral-50/60 transition-colors duration-150 p-5 sm:p-6 flex flex-col gap-4">
<div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center">

<svg className="w-4 h-4 text-neutral-700" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 13.5V8.8a1.8 1.8 0 1 1 3.6 0V12" strokeLinecap="round"></path>
<path d="M11.6 11V7.8a1.8 1.8 0 1 1 3.6 0v4.7" strokeLinecap="round"></path>
<path d="M7 15.5l3.2 1.6a5 5 0 0 0 4.5.1L19 15" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.5 11.5s-.5 2.5-.5 4.3c0 1.7 1 2.7 2.2 3.2"></path>
</svg>
</div>
<div className="space-y-1">
<h3 className="text-sm font-medium text-neutral-900">
                    Hydratation active
                  </h3>
<p className="text-sm text-neutral-600">
                    Des agents émollients de qualité supérieure nourrissent la peau et préviennent irritations et sécheresse.
                  </p>
</div>
</div>

<div className="group border border-neutral-200/80 rounded-2xl bg-white hover:bg-neutral-50/60 transition-colors duration-150 p-5 sm:p-6 flex flex-col gap-4">
<div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center">

<svg className="w-4 h-4 text-neutral-700" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="1.5" width="6" x="9" y="8"></rect>
<path d="M10 4h4l1.5 2H8.5L10 4z"></path>
<path d="M12 4V2.5" strokeLinecap="round"></path>
<path d="M7 5h10" strokeLinecap="round"></path>
</svg>
</div>
<div className="space-y-1">
<h3 className="text-sm font-medium text-neutral-900">
                    Vaporisateur de précision
                  </h3>
<p className="text-sm text-neutral-600">
                    Une diffusion ultra-fine pour une couverture homogène, sans excès ni gaspillage.
                  </p>
</div>
</div>

<div className="group border border-neutral-200/80 rounded-2xl bg-white hover:bg-neutral-50/60 transition-colors duration-150 p-5 sm:p-6 flex flex-col gap-4">
<div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center">

<svg className="w-4 h-4 text-neutral-700" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="8" x="8" y="3"></rect>
<path d="M11 6h2" strokeLinecap="round"></path>
</svg>
</div>
<div className="space-y-1">
<h3 className="text-sm font-medium text-neutral-900">
                    Format nomade
                  </h3>
<p className="text-sm text-neutral-600">
                    Un design compact, élégant et résistant, qui vous suit du bureau au voyage.
                  </p>
</div>
</div>
</div>
</div>
</section><section className="border-neutral-200/70 border-b" id="product">
<div className="sm:px-6 lg:px-8 sm:py-16 max-w-5xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

<div className="space-y-5">

<div className="aspect-[4/5] rounded-3xl border border-neutral-200/80 bg-neutral-50 overflow-hidden flex items-center justify-center">
<div className="w-[70%] aspect-[2/5] rounded-3xl bg-gradient-to-br from-neutral-100 via-white to-neutral-200/70 flex items-center justify-center border border-neutral-200/80">
<div className="w-[65%] h-full flex flex-col justify-between py-5">
<div className="h-6 rounded-full bg-neutral-900/90 w-[65%] mx-auto"></div>
<div className="border border-neutral-200/80 rounded-2xl h-[55%] bg-white/90 flex items-center justify-center">
<svg className="w-10 h-10 text-neutral-800" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 64 64">
<g>
<path d="M32 6c0 10.5 0 15.8-2.7 19.3C26.6 29 22.5 30.3 12 30.3"></path>
<path d="M32 6c0 10.5 0 15.8 2.7 19.3C37.4 29 41.5 30.3 52 30.3"></path>
<path d="M32 58c0-10.5 0-15.8-2.7-19.3C26.6 35 22.5 33.7 12 33.7"></path>
<path d="M32 58c0-10.5 0-15.8 2.7-19.3C37.4 35 41.5 33.7 52 33.7"></path>
<path d="M6 32c10.5 0 15.8 0 19.3-2.7C29 26.6 30.3 22.5 30.3 12"></path>
<path d="M58 32c-10.5 0-15.8 0-19.3-2.7C35 26.6 33.7 22.5 33.7 12"></path>
<path d="M6 32c10.5 0 15.8 0 19.3 2.7C29 37.4 30.3 41.5 30.3 52"></path>
<path d="M58 32c-10.5 0-15.8 0-19.3 2.7C35 37.4 33.7 41.5 33.7 52"></path>
</g>
</svg>
</div>
<div className="h-[0.09rem] w-full bg-neutral-200/80 rounded-full"></div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3">
<div className="aspect-[4/3] rounded-2xl border border-neutral-200/80 bg-neutral-50 overflow-hidden flex items-center justify-center">
<div className="w-[70%] h-[45%] rounded-full bg-gradient-to-r from-neutral-200/80 via-neutral-100 to-neutral-200/70"></div>
</div>
<div className="aspect-[4/3] rounded-2xl border border-neutral-200/80 bg-neutral-50 overflow-hidden flex items-center justify-center">
<div className="w-[35%] h-[65%] rounded-2xl bg-white border border-neutral-200/90 shadow-sm shadow-neutral-200/70"></div>
</div>
<div className="aspect-[4/3] rounded-2xl border border-neutral-200/80 bg-neutral-50 overflow-hidden flex flex-col items-center justify-center gap-2">
<div className="w-[55%] h-[0.09rem] bg-neutral-200"></div>
<div className="w-[35%] h-[0.09rem] bg-neutral-100"></div>
<div className="w-[45%] h-[0.09rem] bg-neutral-200"></div>
</div>
</div>
</div>

<div className="lg:space-y-8 space-y-6">
<div className="space-y-2">
<p className="text-xs tracking-[0.18em] uppercase text-neutral-500">
                    spray hydroalcoolique
                  </p>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-neutral-900">
                    Rituel 01 – Spray de bien-être technologique
                  </h2>
<p className="text-base text-neutral-600 max-w-md">
                    Un spray ultramoderne qui allie désinfection hautement efficace, hydratation longue durée et expérience sensorielle subtile grâce à des fragrances travaillées.
                  </p>
</div>
<div className="flex items-baseline gap-4">
<p className="text-xl sm:text-2xl tracking-tight font-medium text-neutral-900">
                    19 €
                  </p>
<p className="text-xs text-neutral-500">
                    Livraison neutre en carbone incluse.
                  </p>
</div>
<div className="space-y-3">
<h3 className="text-sm font-medium text-neutral-900">
                    Caractéristiques essentielles
                  </h3>
<ul className="space-y-2">
<li className="flex items-start gap-2">
<div className="mt-[0.15rem] h-1.5 w-1.5 rounded-full bg-neutral-400"></div>
<span className="text-base text-neutral-600">Formule hydroalcoolique exclusive, issue de nos laboratoires, qui neutralise rapidement les germes.</span>
</li>
<li className="flex items-start gap-2">
<div className="mt-[0.15rem] h-1.5 w-1.5 rounded-full bg-neutral-400"></div>
<span className="text-base text-neutral-600">Complexe d’actifs hydratants pour des mains nourries, douces et soyeuses, même après plusieurs utilisations par jour.</span>
</li>
<li className="flex items-start gap-2">
<div className="mt-[0.15rem] h-1.5 w-1.5 rounded-full bg-neutral-400"></div>
<span className="text-base text-neutral-600">Vaporisateur de précision garantissant une diffusion homogène, sans débordement ni gaspillage.</span>
</li>
<li className="flex items-start gap-2">
<div className="mt-[0.15rem] h-1.5 w-1.5 rounded-full bg-neutral-400"></div>
<span className="text-base text-neutral-600">Format compact pensé pour le quotidien : sac, poche, trousse de voyage ou bureau.</span>
</li>
<li className="flex items-start gap-2">
<div className="mt-[0.15rem] h-1.5 w-1.5 rounded-full bg-neutral-400"></div>
<span className="text-base text-neutral-600">Quatre univers olfactifs signatures à découvrir ci‑dessous.</span>
</li>
</ul>
</div>
<div className="space-y-4">
<button className="w-full inline-flex items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-medium tracking-tight px-6 py-3.5 hover:bg-neutral-800 transition-colors duration-150">
                    Ajouter au panier
                  </button>
<p className="text-xs text-neutral-500">
                    Expédition sous 24h • Retour sous 30 jours • Paiement sécurisé.
                  </p>
</div>
</div>
</div>
</div>
</section><section className="border-neutral-200/70 border-b">
<div className="sm:px-6 lg:px-8 sm:py-14 max-w-4xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4 space-y-6">
<p className="text-xs tracking-[0.18em] uppercase text-neutral-500">
              la science au service du confort
            </p>
<div className="space-y-4 text-neutral-700">
<p className="text-base sm:text-lg">
                Notre spray hydroalcoolique est bien plus qu’un simple désinfectant : c’est un bijou technologique conçu dans nos laboratoires, où chaque ingrédient est sélectionné pour sa performance et sa douceur.
              </p>
<p className="text-base sm:text-lg">
                Grâce à une formule exclusive, il élimine efficacement les germes tout en respectant l’équilibre de votre peau. Des actifs nourrissants et hydratants enveloppent vos mains, les laissant souples, douces et sans tiraillements.
              </p>
<p className="text-base sm:text-lg">
                Son vaporisateur de précision délivre la quantité idéale de produit pour une couverture homogène, sans gaspillage. Compact et raffiné, il se glisse dans votre sac, votre poche ou votre trousse de voyage pour vous accompagner partout où l’hygiène est essentielle.
              </p>
<p className="text-base sm:text-lg">
                Faites confiance à notre expertise et rejoignez le mouvement du bien-être technologique : essayez-le dès maintenant et ressentez instantanément la différence.
              </p>
</div>
</div>
</section>



<section className="border-b border-neutral-200/70">
<div className="sm:px-6 lg:px-8 sm:py-16 text-center max-w-3xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<p className="uppercase text-xs text-neutral-500 tracking-[0.18em] mb-4">
              notre philosophie
            </p>
<p className="text-xl sm:text-2xl tracking-tight font-medium text-neutral-900">
              Ne choisissez plus entre efficacité et plaisir. Choisissez un rituel qui protège, apaise et sublime chaque geste du quotidien.
            </p>
</div>
</section>

<section className="border-b border-neutral-200/70">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8 sm:mb-10">
<div className="">
<p className="text-xs tracking-[0.18em] uppercase text-neutral-500">
                  avis clients
                </p>
<h2 className="text-2xl tracking-tight font-semibold text-neutral-900 mt-2">
                  Des mains sereines, partout avec vous.
                </h2>
</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="flex items-center gap-1.5">

<div className="flex items-center gap-0.5">
<svg className="w-3.5 h-3.5 text-amber-500" data-darkreader-inline-fill="" fill="currentColor" style={{-DarkreaderInlineFill: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.75l2.297 4.655 5.138.747-3.717 3.624.878 5.114L12 15.875l-4.596 2.415.878-5.114-3.717-3.624 5.138-.747L12 3.75z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-amber-500" data-darkreader-inline-fill="" fill="currentColor" style={{-DarkreaderInlineFill: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.75l2.297 4.655 5.138.747-3.717 3.624.878 5.114L12 15.875l-4.596 2.415.878-5.114-3.717-3.624 5.138-.747L12 3.75z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-amber-500" data-darkreader-inline-fill="" fill="currentColor" style={{-DarkreaderInlineFill: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.75l2.297 4.655 5.138.747-3.717 3.624.878 5.114L12 15.875l-4.596 2.415.878-5.114-3.717-3.624 5.138-.747L12 3.75z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-amber-500" data-darkreader-inline-fill="" fill="currentColor" style={{-DarkreaderInlineFill: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.75l2.297 4.655 5.138.747-3.717 3.624.878 5.114L12 15.875l-4.596 2.415.878-5.114-3.717-3.624 5.138-.747L12 3.75z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-amber-300" data-darkreader-inline-fill="" fill="currentColor" style={{-DarkreaderInlineFill: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.75l2.297 4.655 5.138.747-3.717 3.624.878 5.114L12 15.875l-4.596 2.415.878-5.114-3.717-3.624 5.138-.747L12 3.75z"></path>
</svg>
</div>
<p className="text-xs text-neutral-600">
                    4,8 / 5 sur 327 avis vérifiés
                  </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<article className="rounded-2xl border border-neutral-200/80 bg-white p-5 sm:p-6 flex flex-col gap-3">
<div className="flex items-center justify-between gap-2">
<p className="text-sm font-medium text-neutral-900">
                    Plus aucune sensation de sécheresse
                  </p>
<div className="flex items-center gap-0.5">
<div className="h-1 w-1 rounded-full bg-emerald-500"></div>
<div className="h-1 w-1 rounded-full bg-emerald-500"></div>
<div className="h-1 w-1 rounded-full bg-emerald-500"></div>
<div className="h-1 w-1 rounded-full bg-emerald-500"></div>
<div className="h-1 w-1 rounded-full bg-emerald-300"></div>
</div>
</div>
<p className="text-base text-neutral-600">
                  Je peux enfin utiliser un spray plusieurs fois par jour sans avoir les mains qui tirent. L’odeur est subtile et très agréable.
                </p>
<p className="text-xs text-neutral-500">
                  Claire, 36 ans
                </p>
</article>
<article className="rounded-2xl border border-neutral-200/80 bg-white p-5 sm:p-6 flex flex-col gap-3">
<div className="flex items-center justify-between gap-2">
<p className="text-sm font-medium text-neutral-900">
                    Parfait au bureau et en voyage
                  </p>
<div className="flex items-center gap-0.5">
<div className="h-1 w-1 rounded-full bg-emerald-500"></div>
<div className="h-1 w-1 rounded-full bg-emerald-500"></div>
<div className="h-1 w-1 rounded-full bg-emerald-500"></div>
<div className="h-1 w-1 rounded-full bg-emerald-500"></div>
<div className="h-1 w-1 rounded-full bg-emerald-500"></div>
</div>
</div>
<p className="text-base text-neutral-600">
                  Le format est idéal, discret et robuste. Le spray est précis, sans gouttes partout. Je ne m’en sépare plus.
                </p>
<p className="text-xs text-neutral-500">
                  Julien, 41 ans
                </p>
</article>
<article className="rounded-2xl border border-neutral-200/80 bg-white p-5 sm:p-6 flex flex-col gap-3">
<div className="flex items-center justify-between gap-2">
<p className="text-sm font-medium text-neutral-900">
                    Une vraie expérience olfactive
                  </p>
<div className="flex items-center gap-0.5">
<div className="h-1 w-1 rounded-full bg-emerald-500"></div>
<div className="h-1 w-1 rounded-full bg-emerald-500"></div>
<div className="h-1 w-1 rounded-full bg-emerald-500"></div>
<div className="h-1 w-1 rounded-full bg-emerald-500"></div>
<div className="h-1 w-1 rounded-full bg-emerald-500"></div>
</div>
</div>
<p className="text-base text-neutral-600">
                  J’ai choisi Ether et c’est presque comme porter un parfum léger pour les mains. Très élégant et moderne.
                </p>
<p className="text-xs text-neutral-500">
                  Amel, 29 ans
                </p>
</article>
</div>
</div>
</section>

<section className="bg-neutral-50/80">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="rounded-3xl border border-neutral-200/80 bg-white/80 backdrop-blur-sm px-6 sm:px-10 py-10 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="space-y-2">
<p className="uppercase text-xs text-neutral-500 tracking-[0.18em]" style={{}}>prêt à découvrir ?</p>
<h2 className="text-2xl tracking-tight font-semibold text-neutral-900">
                  Rejoignez le mouvement du bien-être technologique.
                </h2>
<p className="text-base text-neutral-600 max-w-md">
                  Emportez votre spray hydroalcoolique d’exception partout avec vous et transformez chaque geste d’hygiène en moment de soin.
                </p>
</div>
<div className="w-full sm:w-auto flex flex-col gap-3">
<button className="w-full inline-flex items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-medium tracking-tight px-6 py-3.5 hover:bg-neutral-800 transition-colors duration-150" onclick="scrollToSection('product')">
                  Essayer maintenant
                </button>
<p className="text-xs text-neutral-500 text-center sm:text-right">
                  Retour gratuit sous 30 jours si le rituel ne vous convient pas.
                </p>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-200/70 bg-neutral-50/70" id="faq">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="mb-8 flex items-center justify-between gap-4">
<div>
<p className="text-xs tracking-[0.18em] uppercase text-neutral-500">
                  faq
                </p>
<h2 className="text-2xl tracking-tight font-semibold text-neutral-900 mt-2">
                  Questions fréquentes
                </h2>
</div>
<button className="hidden sm:inline-flex items-center justify-center rounded-full border border-neutral-300/80 text-neutral-900 text-xs font-medium tracking-tight px-4 py-2 hover:border-neutral-400 hover:bg-white transition-colors duration-150" onclick="scrollToSection('contact')">
                Poser une question
              </button>
</div>

<div className="space-y-3">

<details className="group rounded-2xl border border-neutral-200/80 bg-white">
<summary className="list-none cursor-pointer flex items-center justify-between gap-4 py-3.5 sm:py-4 px-4 sm:px-5">
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-neutral-900">
                      Comment fonctionne votre spray hydroalcoolique ?
                    </span>
</div>
<div className="shrink-0">
<svg className="w-4 h-4 text-neutral-500 transition-transform duration-150 group-open:rotate-180" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</summary>
<div className="px-4 sm:px-5 pb-3.5 sm:pb-4">
<p className="text-base text-neutral-600">
                    La base hydroalcoolique élimine rapidement les germes, tandis qu’un complexe d’actifs hydratants et apaisants protège le film hydrolipidique de la peau, même en cas d’utilisations répétées.
                  </p>
</div>
</details>

<details className="group rounded-2xl border border-neutral-200/80 bg-white">
<summary className="list-none cursor-pointer flex items-center justify-between gap-4 py-3.5 sm:py-4 px-4 sm:px-5">
<span className="text-sm font-medium text-neutral-900">
                    Est‑il adapté aux peaux sensibles ?
                  </span>
<svg className="w-4 h-4 text-neutral-500 transition-transform duration-150 group-open:rotate-180" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</summary>
<div className="px-4 sm:px-5 pb-3.5 sm:pb-4">
<p className="text-base text-neutral-600">
                    Oui. La formule a été pensée pour minimiser les risques d’irritation et limiter la sensation de sécheresse après application. Si vous avez une pathologie cutanée, demandez toutefois conseil à un professionnel de santé.
                  </p>
</div>
</details>

<details className="group rounded-2xl border border-neutral-200/80 bg-white">
<summary className="list-none cursor-pointer flex items-center justify-between gap-4 py-3.5 sm:py-4 px-4 sm:px-5">
<span className="text-sm font-medium text-neutral-900">
                    À quelle fréquence puis‑je l’utiliser dans la journée ?
                  </span>
<svg className="w-4 h-4 text-neutral-500 transition-transform duration-150 group-open:rotate-180" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</summary>
<div className="px-4 sm:px-5 pb-3.5 sm:pb-4">
<p className="text-base text-neutral-600">
                    Utilisez‑le à chaque fois que la situation l’exige : après les transports, avant un repas, au bureau… Les agents hydratants vous permettent de le réappliquer plusieurs fois par jour sans sensation d’inconfort.
                  </p>
</div>
</details>

<details className="group rounded-2xl border border-neutral-200/80 bg-white">
<summary className="list-none cursor-pointer flex items-center justify-between gap-4 py-3.5 sm:py-4 px-4 sm:px-5">
<span className="text-sm font-medium text-neutral-900">
                    Quelles sont les conditions de retour ?
                  </span>
<svg className="w-4 h-4 text-neutral-500 transition-transform duration-150 group-open:rotate-180" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</summary>
<div className="px-4 sm:px-5 pb-3.5 sm:pb-4">
<p className="text-base text-neutral-600">
                    Vous disposez de 30 jours pour nous renvoyer le produit s’il ne vous convient pas. Nous vous remboursons dès réception, conformément à notre politique de retour.
                  </p>
</div>
</details>
</div>
</div>
</section>

<section className="border-t border-neutral-200/70 bg-white" id="contact">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="mb-8">
<p className="text-xs tracking-[0.18em] uppercase text-neutral-500">
                contact
              </p>
<h2 className="text-2xl tracking-tight font-semibold text-neutral-900 mt-2">
                Une question sur la formule ou les fragrances ?
              </h2>
<p className="text-base text-neutral-600 mt-3">
                Nos équipes laboratoire et expérience client vous répondent sous 24h en moyenne.
              </p>
</div>

<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-700" htmlFor="name">
                    Nom complet
                  </label>
<input className="w-full rounded-xl border border-neutral-200/80 bg-neutral-50/60 focus:bg-white text-base text-neutral-900 placeholder:text-neutral-400 px-3.5 py-2.5 outline-none focus:border-neutral-900 focus:ring-0 transition-colors duration-150" id="name" placeholder="Votre nom" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-700" htmlFor="email">
                    Adresse e-mail
                  </label>
<input className="w-full rounded-xl border border-neutral-200/80 bg-neutral-50/60 focus:bg-white text-base text-neutral-900 placeholder:text-neutral-400 px-3.5 py-2.5 outline-none focus:border-neutral-900 focus:ring-0 transition-colors duration-150" id="email" placeholder="vous@exemple.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-700" htmlFor="topic">
                  Sujet
                </label>
<input className="w-full rounded-xl border border-neutral-200/80 bg-neutral-50/60 focus:bg-white text-base text-neutral-900 placeholder:text-neutral-400 px-3.5 py-2.5 outline-none focus:border-neutral-900 focus:ring-0 transition-colors duration-150" id="topic" placeholder="À propos de votre commande, du spray, d’une fragrance…" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-700" htmlFor="message">
                  Message
                </label>
<textarea className="w-full rounded-xl border border-neutral-200/80 bg-neutral-50/60 focus:bg-white text-base text-neutral-900 placeholder:text-neutral-400 px-3.5 py-2.5 outline-none focus:border-neutral-900 focus:ring-0 transition-colors duration-150 resize-none" id="message" placeholder="Racontez-nous ce dont vous avez besoin." rows="5"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
<button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-medium tracking-tight px-6 py-3 hover:bg-neutral-800 transition-colors duration-150" type="submit">
                  Envoyer le message
                </button>
<p className="text-xs text-neutral-500">
                  En envoyant ce formulaire, vous acceptez que nous vous répondions par e‑mail.
                </p>
</div>
</form>
</div>
</section>
</main>

<footer className="border-t border-neutral-200/80 bg-neutral-50/70">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">

<div className="space-y-2">
<div className="inline-flex items-center gap-2">
<div className="flex w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03fa428f-ecd2-405b-b54f-834e42e6d50c_320w.png)] bg-cover bg-center border-neutral-300/80 border rounded-full items-center justify-center">
</div>
<span className="text-sm font-medium text-neutral-900 tracking-tight" style={{}}>Phi concept</span>
</div>
<p className="text-base text-neutral-500 max-w-xs">
                Un seul spray, un seul geste, un rituel technologique qui prend soin de vous au quotidien.
              </p>
</div>

<div className="flex flex-col sm:items-end gap-4">
<div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-600">
<a className="hover:text-neutral-900 transition-colors duration-150" href="#product">Spray</a>
<a className="hover:text-neutral-900 transition-colors duration-150" href="#collection">Collection</a>
<a className="hover:text-neutral-900 transition-colors duration-150" href="#faq">FAQ</a>
<a className="hover:text-neutral-900 transition-colors duration-150" href="#contact">Contact</a>
<button className="hover:text-neutral-900 transition-colors duration-150 text-left">
                  Mentions légales
                </button>
<button className="hover:text-neutral-900 transition-colors duration-150 text-left">
                  Politique de retour
                </button>
</div>

<div className="flex items-center gap-3">
<button className="w-7 h-7 rounded-full border border-neutral-200/80 flex items-center justify-center text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 transition-colors duration-150">

<svg className="w-3.5 h-3.5" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="5" width="18" x="3" y="3"></rect>
<circle cx="12" cy="12" r="4"></circle>
<path d="M17.5 6.5h.01" strokeLinecap="round"></path>
</svg>
</button>
<button className="w-7 h-7 rounded-full border border-neutral-200/80 flex items-center justify-center text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 transition-colors duration-150">

<svg className="w-3.5 h-3.5" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5l14 14M19 5L5 19" strokeLinecap="round"></path>
</svg>
</button>
</div>
<p className="text-[0.7rem] text-neutral-500">
                © <span id="year">2025</span> Rituel. Tous droits réservés.
              </p>
</div>
</div>
</div>
</footer>
</div>
</div>



    </>
  );
}
