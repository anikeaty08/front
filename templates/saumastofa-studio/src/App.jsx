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



document.addEventListener("DOMContentLoaded", function() {
// Reveal Animation Observer
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.remove('will-reveal');
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-up, .reveal-left').forEach(el => {
el.classList.add('will-reveal');
observer.observe(el);
});
// Carousel Logic
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.pagination-dot');
const totalSlides = slides.length;
window.updateCarousel = function() {
// Hide all slides
slides.forEach(slide => {
slide.classList.add('hidden');
slide.classList.remove('flex'); // Ensure flex is removed
});
// Show active slide
const activeSlide = slides[currentSlideIndex];
activeSlide.classList.remove('hidden');
activeSlide.classList.add('flex'); // Add flex back for layout
// Update dots
dots.forEach((dot, index) => {
if (index === currentSlideIndex) {
dot.classList.remove('bg-stone-300', 'scale-100');
dot.classList.add('bg-rose-500', 'scale-125');
} else {
dot.classList.remove('bg-rose-500', 'scale-125');
dot.classList.add('bg-stone-300', 'scale-100');
}
});
}
window.nextSlide = function() {
currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
updateCarousel();
}
window.prevSlide = function() {
currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
updateCarousel();
}
// Direct jump via dots
window.goToSlide = function(index) {
currentSlideIndex = index;
updateCarousel();
}
// Initialize first view
updateCarousel();
});



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75, 180]; // Added 180
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
".perspective-flat": { perspective: "3000px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};

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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1dd51843-e4b7-42f0-b26a-c2e1b5fd45ac_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 glass-nav">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex flex-col group" href="#">
<span className="leading-none text-xl text-stone-900 tracking-tighter font-medium">
            SAMSTILLA
          </span>
<span className="text-[0.6rem] uppercase group-hover:text-rose-400 transition-colors text-stone-400 tracking-[0.2em]">
            Tailoring Studio
          </span>
</a>
<div className="flex items-center gap-8">
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#services">
              Usługi
            </a>
<a className="hover:text-stone-900 transition-colors" href="#membership">
              Kurs
            </a>
<a className="hover:text-stone-900 transition-colors" href="#case-studies">
              Realizacje
            </a>
<a className="hover:text-stone-900 transition-colors" href="#cennik">
              Cennik
            </a>
<a className="hover:text-stone-900 transition-colors" href="#o-mnie">
              O mnie
            </a>
</div>
<div className="flex items-center bg-stone-100 rounded-full p-1 border border-stone-200">
<button className="px-3 py-1 text-[0.65rem] font-medium rounded-full text-stone-500 hover:text-stone-900 transition-all">
              IS
            </button>
<button className="px-3 py-1 text-[0.65rem] font-medium rounded-full text-stone-500 hover:text-stone-900 transition-all">
              EN
            </button>
<button className="px-3 py-1 text-[0.65rem] rounded-full bg-white text-stone-900 shadow-sm transition-all font-medium">
              PL
            </button>
</div>
</div>
</div>
</nav>

<section className="min-h-[90vh] flex overflow-hidden pt-20 relative items-center">
<div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-rose-50/50 to-transparent pointer-events-none"></div>
<div className="grid md:grid-cols-2 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-12 items-center relative">
<div className="reveal-left order-2 md:order-1 z-10 relative">
<div className="inline-flex items-center gap-3 mb-8">
<span className="h-px w-12 bg-rose-300"></span>
<span className="text-[11px] uppercase tracking-[0.2em] text-rose-400 font-semibold font-manrope">
              Atelier &amp; Design
            </span>
</div>
<h1 className="md:text-7xl leading-[1.05] text-5xl font-medium text-stone-900 tracking-tight font-playfair mb-8">
            Sztuka
            <span className="text-rose-400 italic font-normal">Krawiectwa</span>
<br/>
<span className="text-stone-800">Perfekcyjnego</span>
</h1>
<p className="leading-relaxed text-lg font-light text-stone-500 font-manrope max-w-md mb-10" style={{}}>
            Kompleksowe rozwiązania krawieckie: od indywidualnego dopasowania
            Twojej garderoby, przez ekspresowe naprawy dla hoteli, aż po obsługę
            firm i instytucji. Terminowość i jakość gwarantowane.
          </p>
<div className="flex flex-wrap gap-4 gap-x-4 gap-y-4 items-center">
<a className="group relative overflow-hidden rounded-full bg-stone-900 px-8 py-4 text-white transition-all hover:bg-stone-800 hover:shadow-lg hover:shadow-stone-200 hover:-translate-y-0.5" href="https://wa.me/">
<span className="relative z-10 flex items-center gap-3 text-sm font-medium tracking-wide">
                Czat na WhatsApp
                <svg aria-hidden="true" className="" data-icon="lucide:message-circle" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</a>
<button className="flex hover:text-stone-500/80 transition-colors text-sm font-medium text-stone-500 pt-4 pr-6 pb-4 pl-6 gap-x-2 gap-y-2 items-center">
              Zobacz usługi
              <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
<div className="reveal-up delay-200 relative z-0 h-full min-h-[500px] flex items-center justify-center order-1 md:order-2 perspective-normal">
<div className="absolute inset-0 bg-rose-50/50 rounded-[2rem] rotate-3 scale-95 opacity-50"></div>
<div className="shadow-stone-200/50 transition-transform duration-700 hover:rotate-0 bg-white w-full h-[600px] rounded-[2px] pt-4 pr-4 pb-4 pl-4 relative shadow-xl rotate-[-2deg]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-rose-100/80 rotate-1 backdrop-blur-sm shadow-sm z-20 opacity-90"></div>
<div className="relative w-full h-full overflow-hidden bg-stone-50">
<img alt="Atelier &amp; Thread Sketch" className="sepia-[0.15] contrast-[0.9] brightness-[1.05] hover:scale-105 transition-transform duration-[2s] opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" role="button" src="https://assets.zyrosite.com/69UcTKTHehXNet89/gemini_generated_image_p4u33hp4u33hp4u3-NIsmnZogwF1b6VsH.png"/>
<div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none bg-cover bg-center bg-[url(default)]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
</div>
<div className="absolute -bottom-8 -right-4 bg-white p-4 rounded-xl shadow-lg border border-stone-100 flex items-center gap-4 animate-bounce duration-[4000ms]">
<div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-400">
<svg aria-hidden="true" data-icon="lucide:pen-tool" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19l7-7l3 3l-7 7l-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586M11 21a2 2 0 1 0 4 0a2 2 0 1 0-4 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="">
<p className="text-xs font-bold text-stone-900 uppercase tracking-wide font-manrope">
                  Hand-Drawn
                </p>
<p className="text-xs text-stone-500 font-serif italic">
                  Original Sketches
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-t pt-32 pb-32 relative" id="services">
<div className="isolate max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="md:flex md:items-end md:justify-between reveal-up z-10 mb-24 relative">
<div className="">
<div className="flex gap-2 mb-4 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
<span className="text-xs font-medium tracking-widest text-rose-500 uppercase">
                EKSPERTYZA
              </span>
</div>
<h2 className="text-4xl md:text-5xl tracking-tighter mb-6 text-stone-900 font-medium">
              Profesjonalne Usługi
            </h2>
<p className="max-w-md font-light text-lg leading-relaxed">
              Dedykowane rozwiązania dla potrzeb masowych i precyzyjnego
              krawiectwa, stworzone dla doskonałości.
            </p>
</div>
<div className="hidden md:flex flex-col items-end justify-end mb-2">
<a className="group flex items-center gap-2 text-sm font-semibold border-b pb-1 hover:border-rose-500 hover:text-rose-500 transition-colors text-stone-900 border-stone-200" href="#contact">
              Zobacz wszystkie usługi
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<style>
          .notebook-card {
            cursor: pointer;
            transform-style: preserve-3d;
            z-index: 20;
            padding-top: 28px;
          }
          .notebook-cover {
            transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
            transform-origin: top;
            transform-style: preserve-3d;
          }
          .notebook-card:hover .notebook-cover:not(.flipped) {
            transform: rotateX(15deg);
          }
          .notebook-cover.flipped {
            transform: rotateX(180deg) !important;
            transition: transform 2s cubic-bezier(0.25, 1, 0.5, 1) !important;
          }

          .binding-row {
            display: flex;
            justify-content: space-between;
            padding: 0 32px;
            width: 100%;
            pointer-events: none;
            box-sizing: border-box;
          }

          .item-wrapper {
            width: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .spiral-binding-layer {
            position: absolute;
            top: 0px;
            left: 0;
            width: 100%;
            z-index: 200;
          }

          /* --- ZMODYFIKOWANA KLASA SPIRAL-WIRE --- */
          .spiral-wire {
            width: 6px;
            height: 34px; /* Zmniejszona wysokość z 56px */
            margin-top: 11px; /* Przesunięcie, aby wyśrodkować sprężynkę względem dziurek */
            background: linear-gradient(to right,
              #44403c 0%,
              #78716c 15%,
              #d6d3d1 35%,
              #f5f5f4 50%,
              #d6d3d1 65%,
              #78716c 85%,
              #44403c 100%);
            border-radius: 3px;
            position: relative;
            box-shadow:
              1px 2px 3px rgba(0,0,0,0.3),
              inset 0 1px 0 rgba(255,255,255,0.4);
          }
          /* -------------------------------------- */

          .spiral-wire::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 100%;
            background: linear-gradient(to right,
              transparent 0%,
              rgba(255,255,255,0.3) 50%,
              transparent 100%);
            border-radius: 2px;
          }

          .punches-layer {
            position: absolute;
            top: 4px;
            left: 0;
            z-index: 20;
          }

          .punches-layer-back {
            position: absolute;
            bottom: 4px;
            left: 0;
            z-index: 20;
          }

          .paper-punch {
            width: 18px;
            height: 18px;
            background: #a8a29e;
            border: 2px solid #d6d3d1;
            border-radius: 50%;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.3),
              inset 0 -1px 2px rgba(255,255,255,0.2),
              0 1px 0 rgba(255,255,255,0.5);
            position: relative;
          }

          .paper-punch::after {
            content: '';
            position: absolute;
            top: 3px;
            left: 3px;
            width: 5px;
            height: 5px;
            background: #78716c;
            border-radius: 50%;
            opacity: 0.5;
          }

          .notebook-inner {
            position: relative;
            width: 100%;
            height: calc(100% - 28px);
            margin-top: 0;
          }
        </style>
<div className="grid md:grid-cols-3 z-20 relative gap-x-12 gap-y-12">

<div className="notebook-card group relative w-full h-[628px] perspective-flat" onclick="this.querySelector('.notebook-cover').classList.toggle('flipped')" onmouseleave="var cover = this.querySelector('.notebook-cover'); if(cover.classList.contains('flipped')) { cover.classList.remove('flipped'); }">

<div className="binding-row spiral-binding-layer">
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
</div>
<div className="notebook-inner">

<div className="transform bg-stone-200 w-full h-full border-stone-300 border rounded-[4px] absolute top-3 left-2 shadow-sm rotate-1"></div>
<div className="absolute top-1.5 left-1 w-full h-full bg-stone-100 rounded-[4px] border border-stone-200 transform -rotate-1 shadow-sm"></div>

<div className="overflow-hidden flex flex-col bg-[#FAFAF9] w-full h-full border-stone-200 border rounded-[4px] pt-8 pr-8 pb-8 pl-8 relative shadow-xl">

<div className="binding-row punches-layer">
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply" style={{backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #78716c 32px)', backgroundSize: '100% 32px'}}></div>

<div className="relative z-10 flex flex-col h-full pl-6 justify-between mt-8">
<div className="">
<h4 className="font-playfair text-2xl font-semibold text-stone-900 mb-4 tracking-tight">
                      Zakres Usług Indywidualnych
                    </h4>
<p className="font-manrope text-stone-700 text-sm leading-8 font-medium mb-4">
                      Nasza pracownia oferuje pełne spektrum usług krawieckich,
                      łącząc tradycyjne rzemiosło z nowoczesnymi technikami.
                      Każde zlecenie traktujemy indywidualnie.
                    </p>
<ul className="space-y-3 text-sm text-stone-800 font-semibold font-manrope list-disc pl-4 marker:text-rose-500">
<li className="">Skracanie spodni, rękawów i marynarek.</li>
<li className="">Taliowanie koszul, sukienek i płaszczy.</li>
<li className="">Wymiana suwaków i podszewek.</li>
<li className="">Artystyczne cerowanie.</li>
</ul>
</div>
<div className="flex gap-4 pt-4 border-t border-stone-400/20">
<a className="flex-1 py-3 bg-stone-900 text-stone-50 text-[11px] font-semibold uppercase tracking-widest hover:bg-rose-500 transition-colors rounded-sm text-center" href="tel:+3547775555" onclick="event.stopPropagation()">
                      Zadzwoń
                    </a>
<a className="flex-1 py-3 border border-stone-900 text-stone-900 text-[11px] font-semibold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors rounded-sm text-center" href="https://wa.me/" onclick="event.stopPropagation()">
                      WhatsApp
                    </a>
</div>
</div>
</div>

<div className="notebook-cover absolute inset-0 w-full h-full origin-top transform-style-preserve-3d z-30 rounded-[4px] shadow-2xl">

<div className="backface-hidden overflow-hidden flex flex-col bg-[#FAFAF9] border-stone-200 border rounded-[4px] pt-8 absolute top-0 right-0 bottom-0 left-0 items-center">

<div className="binding-row punches-layer">
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply" style={{backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #78716c 32px)', backgroundSize: '100% 32px'}}></div>
<div className="relative bg-white/40 p-1 rotate-[-1deg] w-[75%] mt-12 transition-transform hover:rotate-0 hover:scale-[1.02] duration-500 z-10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-rose-400/40 rotate-[1deg] backdrop-blur-[1px] shadow-sm z-20 mix-blend-multiply" style={{maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'}}></div>
<img alt="Watercolor Tailoring Sketch" className="w-full h-auto aspect-square object-contain mix-blend-multiply opacity-90 sepia-[0.2]" onerror="this.src='https://assets.zyrosite.com/69UcTKTHehXNet89/gemini_generated_image_p4u33hp4u33hp4u3-NIsmnZogwF1b6VsH.png'" src="https://assets.zyrosite.com/69UcTKTHehXNet89/gemini_generated_image_p4u33hp4u33hp4u3-NIsmnZogwF1b6VsH.png"/>
</div>
<h3 className="mt-12 font-instrument-serif italic text-3xl text-stone-800 tracking-tight relative z-10">
                    Klient Indywidualny
                  </h3>
</div>

<div className="absolute inset-0 backface-hidden bg-[#FAFAF9] rounded-[4px] border border-stone-200 overflow-hidden shadow-inner" style={{transform: 'rotateX(180deg)'}}>

<div className="binding-row punches-layer-back">
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply" style={{backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #78716c 32px)', backgroundSize: '100% 32px'}}></div>
</div>
</div>
</div>
</div>

<div className="notebook-card group relative w-full h-[628px] perspective-flat" onclick="this.querySelector('.notebook-cover').classList.toggle('flipped')" onmouseleave="var cover = this.querySelector('.notebook-cover'); if(cover.classList.contains('flipped')) { cover.classList.remove('flipped'); }">
<div className="binding-row spiral-binding-layer">
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
</div>
<div className="notebook-inner">
<div className="absolute top-3 left-2 w-full h-full bg-stone-200 rounded-[4px] border border-stone-300 transform rotate-1 shadow-sm"></div>
<div className="absolute top-1.5 left-1 w-full h-full bg-stone-100 rounded-[4px] border border-stone-200 transform -rotate-1 shadow-sm"></div>
<div className="relative w-full h-full bg-[#FAFAF9] rounded-[4px] shadow-xl border border-stone-200 overflow-hidden flex flex-col pt-8 pb-8 px-8">
<div className="binding-row punches-layer">
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply" style={{backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #78716c 32px)', backgroundSize: '100% 32px'}}></div>
<div className="relative z-10 flex flex-col h-full pl-6 justify-between mt-8">
<div className="">
<h4 className="font-playfair text-2xl font-semibold text-stone-900 mb-4 tracking-tight">
                      Oferta dla Biznesu
                    </h4>
<p className="font-manrope text-stone-700 text-sm leading-8 font-medium mb-4">
                      Zapewniamy nienaganny wizerunek Twoich pracowników.
                      Obsługujemy duże kontrakty, oferując elastyczność i
                      terminowość, które są kluczowe w biznesie.
                    </p>
<ul className="space-y-3 text-sm text-stone-800 font-semibold font-manrope list-disc pl-4 marker:text-rose-500">
<li className="">Mundury i odzież korporacyjna.</li>
<li>Personalizacja (haft, logo).</li>
<li className="">Serwis naprawczy (abonament).</li>
<li className="">Obsługa logistyczna.</li>
</ul>
</div>
<div className="flex gap-4 pt-4 border-t border-stone-400/20">
<a className="flex-1 py-3 bg-stone-900 text-stone-50 text-[11px] font-semibold uppercase tracking-widest hover:bg-rose-500 transition-colors rounded-sm text-center" href="mailto:b2b@samstilla.is" onclick="event.stopPropagation()">
                      Oferta B2B
                    </a>
<a className="flex-1 py-3 border border-stone-900 text-stone-900 text-[11px] font-semibold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors rounded-sm text-center" href="https://wa.me/" onclick="event.stopPropagation()">
                      Kontakt
                    </a>
</div>
</div>
</div>
<div className="notebook-cover absolute inset-0 w-full h-full origin-top transform-style-preserve-3d z-30 rounded-[4px] shadow-2xl">
<div className="absolute inset-0 backface-hidden bg-[#FAFAF9] overflow-hidden rounded-[4px] border border-stone-200 flex flex-col items-center pt-8">
<div className="binding-row punches-layer">
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply" style={{backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #78716c 32px)', backgroundSize: '100% 32px'}}></div>
<div className="relative bg-white p-3 shadow-xl shadow-stone-300/50 rotate-[-1deg] w-64 h-auto transition-transform hover:rotate-0 hover:scale-[1.02] duration-500 mt-12 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-rose-400/30 rotate-2 backdrop-blur-sm shadow-sm z-20"></div>
<img alt="Sketch" className="w-full h-full aspect-[4/5] object-cover grayscale-[0.1] sepia-[0.15] border border-stone-100" src="https://assets.zyrosite.com/69UcTKTHehXNet89/gemini_generated_image_p4u33hp4u33hp4u3-NIsmnZogwF1b6VsH.png"/>
</div>
<h3 className="mt-12 font-instrument-serif italic text-3xl text-stone-800 tracking-tight relative z-10">
                    Klient Firmowy
                  </h3>
</div>
<div className="absolute inset-0 backface-hidden bg-[#FAFAF9] rounded-[4px] border border-stone-200 overflow-hidden shadow-inner" style={{transform: 'rotateX(180deg)'}}>
<div className="binding-row punches-layer-back">
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply" style={{backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #78716c 32px)', backgroundSize: '100% 32px'}}></div>
</div>
</div>
</div>
</div>

<div className="notebook-card group relative w-full h-[628px] perspective-flat" onclick="this.querySelector('.notebook-cover').classList.toggle('flipped')" onmouseleave="var cover = this.querySelector('.notebook-cover'); if(cover.classList.contains('flipped')) { cover.classList.remove('flipped'); }">
<div className="binding-row spiral-binding-layer">
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
<div className="item-wrapper"><div className="spiral-wire"></div></div>
</div>
<div className="notebook-inner">
<div className="absolute top-3 left-2 w-full h-full bg-stone-200 rounded-[4px] border border-stone-300 transform rotate-1 shadow-sm"></div>
<div className="absolute top-1.5 left-1 w-full h-full bg-stone-100 rounded-[4px] border border-stone-200 transform -rotate-1 shadow-sm"></div>
<div className="relative w-full h-full bg-[#FAFAF9] rounded-[4px] shadow-xl border border-stone-200 overflow-hidden flex flex-col pt-8 pb-8 px-8">
<div className="binding-row punches-layer">
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply" style={{backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #78716c 32px)', backgroundSize: '100% 32px'}}></div>
<div className="relative z-10 flex flex-col h-full pl-6 justify-between mt-8">
<div className="">
<h4 className="font-playfair text-2xl font-semibold text-stone-900 mb-4 tracking-tight">
                      Fast Track / Concierge
                    </h4>
<p className="font-manrope text-stone-700 text-sm leading-8 font-medium mb-4">
                      Usługa stworzona z myślą o sytuacjach awaryjnych. Działamy
                      szybko i dyskretnie, ratując garderobę gości przed ważnymi
                      wydarzeniami.
                    </p>
<ul className="space-y-3 text-sm text-stone-800 font-semibold font-manrope list-disc pl-4 marker:text-rose-500">
<li className="">Naprawy ekspresowe (do 2h).</li>
<li className="">Pogotowie krawieckie 7 dni.</li>
<li className="">Prasowanie parowe.</li>
<li className="">Dyskretna obsługa room-service.</li>
</ul>
</div>
<div className="flex gap-4 pt-4 border-t border-stone-400/20">
<a className="flex-1 py-3 bg-stone-900 text-stone-50 text-[11px] font-semibold uppercase tracking-widest hover:bg-rose-500 transition-colors rounded-sm text-center" href="mailto:hotels@samstilla.is" onclick="event.stopPropagation()">
                      Wezwij Serwis
                    </a>
</div>
</div>
</div>
<div className="notebook-cover absolute inset-0 w-full h-full origin-top transform-style-preserve-3d z-30 rounded-[4px] shadow-2xl">
<div className="backface-hidden overflow-hidden flex flex-col bg-[#FAFAF9] border-stone-200 border rounded-[4px] pt-8 absolute top-0 right-0 bottom-0 left-0 items-center">
<div className="binding-row punches-layer">
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply" style={{backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #78716c 32px)', backgroundSize: '100% 32px'}}></div>
<div className="relative bg-white p-3 shadow-xl shadow-stone-300/50 rotate-[-1deg] w-64 h-auto transition-transform hover:rotate-0 hover:scale-[1.02] duration-500 mt-12 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-rose-400/30 rotate-2 backdrop-blur-sm shadow-sm z-20"></div>
<img alt="Sketch" className="w-full h-full aspect-[4/5] object-cover grayscale-[0.1] sepia-[0.15] border border-stone-100" src="https://assets.zyrosite.com/69UcTKTHehXNet89/gemini_generated_image_p4u33hp4u33hp4u3-NIsmnZogwF1b6VsH.png"/>
</div>
<h3 className="mt-12 font-instrument-serif italic text-3xl text-stone-800 tracking-tight relative z-10">
                    Obsługa Hotelowa
                  </h3>
</div>
<div className="absolute inset-0 backface-hidden bg-[#FAFAF9] rounded-[4px] border border-stone-200 overflow-hidden shadow-inner" style={{transform: 'rotateX(180deg)'}}>
<div className="binding-row punches-layer-back">
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
<div className="item-wrapper">
<div className="paper-punch"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply" style={{backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #78716c 32px)', backgroundSize: '100% 32px'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-32 pb-32 relative" id="membership">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 40L40 0H20L0 20M40 40V20L20 40\\' stroke=\\'%23000\\' strokeWidth=\\'1\\' fill=\\'none\\' opacity=\\'0.1\\'/%3E%3C/svg%3E\')'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 reveal-up">
<div className="inline-flex items-center gap-3 mb-6">
<span className="w-12 h-[1px] bg-rose-400"></span>
<span className="text-xs font-serif italic text-rose-500 tracking-wider">
                Akademia Samstilla
              </span>
</div>
<h2 className="text-4xl md:text-5xl font-playfair text-stone-900 mb-6 leading-[1.1]">
              Opanuj Sztukę
              <br/>
<span className="italic font-light text-stone-600">
                Pielęgnacji Odzieży
              </span>
</h2>
<p className="text-stone-600 text-lg font-light leading-relaxed mb-10 font-manrope">
              Ekskluzywne poradniki wideo dla członków. Naucz się dbać o
              tkaniny, wykonywać drobne naprawy i zrozumieć anatomię garnituru
              dzięki naszym mistrzowskim kursom.
            </p>
<div className="flex flex-col sm:flex-row gap-5">
<button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-sm hover:bg-stone-800 hover:-translate-y-0.5 transition-all duration-300 font-medium text-sm tracking-wide shadow-lg shadow-stone-200">
<span>
                  Strefa Członkowska
                  <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7"></path>
</svg>
</span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7"></path>
</svg>
</button>
<div className="flex items-center gap-3 px-6 py-4 border border-stone-200 bg-white/60 backdrop-blur-sm rounded-sm">
<svg className="text-stone-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path className="" d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<span className="text-xs font-medium text-stone-500 uppercase tracking-wide">
                  Bezpieczny Dostęp
                </span>
</div>
</div>
</div>
<div className="order-1 md:order-2 relative reveal-left delay-200">
<div className="absolute -top-4 -right-4 w-full h-full border-2 border-stone-200 z-0"></div>
<div className="relative z-10 aspect-[4/3] bg-white shadow-2xl overflow-hidden group cursor-pointer">
<img alt="Tailoring Masterclass" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 sepia-[0.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-stone-900/5 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-20 h-20 bg-white/95 backdrop-blur rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 border border-stone-100">
<svg className="text-stone-900 translate-x-0.5" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
</div>
<div className="absolute bottom-6 left-6 bg-white py-3 px-5 shadow-lg border-l-4 border-rose-400">
<p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 mb-1">
                  ODCINEK 01
                </p>
<p className="text-lg font-serif text-stone-900 italic">
                  Podstawy Tkanin
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 pt-32 pb-32 relative" id="case-studies">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-up will-reveal">
<div className="max-w-lg">
<h2 className="md:text-4xl text-3xl font-medium text-stone-900 tracking-tight mb-4">
              Historie Metamorfoz
            </h2>
<p className="text-stone-500 font-light leading-relaxed">
              Zanurz się w detale naszych realizacji. Najedź na projekt, aby
              zobaczyć efekt "Przed" i "Po" transformacji.
            </p>
</div>
<button className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-900 hover:text-rose-500 transition-colors">
            Zobacz wszystkie
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7"></path>
</svg>
</button>
</div>

<div className="relative w-full">

<button className="absolute -left-4 xl:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-stone-200 bg-white text-stone-400 hover:bg-stone-900 hover:text-white flex items-center justify-center transition-all z-30 shadow-sm" onclick="prevSlide()">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="absolute -right-4 xl:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-stone-200 bg-white text-stone-400 hover:bg-stone-900 hover:text-white flex items-center justify-center transition-all z-30 shadow-sm" onclick="nextSlide()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>

<div className="carousel-slide flex-col lg:flex-row gap-4 h-auto lg:h-[600px] w-full flex" id="slide-0">

<article className="accordion-item group relative flex-1 hover:flex-[4] flex flex-col justify-end overflow-hidden rounded-2xl cursor-pointer min-h-[300px] lg:min-h-0 bg-stone-900 border border-stone-100">
<div className="absolute inset-0 flex w-full h-full">
<div className="before-image-wrapper h-full overflow-hidden relative border-r border-white/50">
<img className="h-full w-full object-cover grayscale brightness-75 sepia-[0.3]" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-stone-900 text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-10">
                    PRZED
                  </span>
</div>
<div className="after-image-wrapper h-full relative">
<img className="h-full w-full object-cover brightness-90" src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-10">
                    PO
                  </span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 pointer-events-none"></div>
<div className="relative z-10 p-6 md:p-8 w-full">
<p className="text-xs font-bold text-rose-300 uppercase tracking-widest mb-1 opacity-80">
                  01
                </p>
<h3 className="text-xl md:text-2xl font-serif text-white font-medium italic mb-2">
                  Renowacja Vintage
                </h3>
<div className="accordion-content h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden text-stone-300 text-sm leading-relaxed border-l-2 border-rose-400 pl-4 mt-2 max-w-lg">
<p className="mb-4">
                    Kompletna wymiana podszewki i wzmocnienie strukturalne.
                  </p>
</div>
</div>
</article>

<article className="accordion-item group relative flex-1 hover:flex-[4] flex flex-col justify-end overflow-hidden rounded-2xl cursor-pointer min-h-[300px] lg:min-h-0 bg-stone-900 border border-stone-100">
<div className="absolute inset-0 flex w-full h-full">
<div className="before-image-wrapper h-full overflow-hidden relative border-r border-white/50">
<img className="h-full w-full object-cover grayscale brightness-90" src="https://images.unsplash.com/photo-1546193430-c2d207739ed7?q=80&amp;w=1546&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-stone-900 text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-10">
                    PRZED
                  </span>
</div>
<div className="after-image-wrapper h-full relative">
<img className="h-full w-full object-cover brightness-95" src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-10">
                    PO
                  </span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 pointer-events-none"></div>
<div className="relative z-10 p-6 md:p-8 w-full">
<p className="text-xs font-bold text-rose-300 uppercase tracking-widest mb-1 opacity-80">
                  02
                </p>
<h3 className="text-xl md:text-2xl font-serif text-white font-medium italic mb-2">
                  Dopasowanie Ślubne
                </h3>
<div className="accordion-content h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden text-stone-300 text-sm leading-relaxed border-l-2 border-rose-400 pl-4 mt-2 max-w-lg">
<p className="mb-4">
                    Perfekcyjne taliowanie i skrócenie wielowarstwowej sukni.
                  </p>
</div>
</div>
</article>

<article className="accordion-item group relative flex-1 hover:flex-[4] flex flex-col justify-end overflow-hidden rounded-2xl cursor-pointer min-h-[300px] lg:min-h-0 bg-stone-900 border border-stone-100">
<div className="absolute inset-0 flex w-full h-full">
<div className="before-image-wrapper h-full overflow-hidden relative border-r border-white/50">
<img className="h-full w-full object-cover grayscale brightness-75" src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&amp;w=1587&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-stone-900 text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-10">
                    PRZED
                  </span>
</div>
<div className="after-image-wrapper h-full relative">
<img className="h-full w-full object-cover brightness-90" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-10">
                    PO
                  </span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 pointer-events-none"></div>
<div className="relative z-10 p-6 md:p-8 w-full">
<p className="text-xs font-bold text-rose-300 uppercase tracking-widest mb-1 opacity-80">
                  03
                </p>
<h3 className="text-xl md:text-2xl font-serif text-white font-medium italic mb-2">
                  Modernizacja
                </h3>
<div className="accordion-content h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden text-stone-300 text-sm leading-relaxed border-l-2 border-rose-400 pl-4 mt-2 max-w-lg">
<p className="mb-4">
                    Zwężanie marynarki i nowoczesne profilowanie ramion.
                  </p>
</div>
</div>
</article>

<article className="accordion-item group relative flex-1 hover:flex-[4] flex flex-col justify-end overflow-hidden rounded-2xl cursor-pointer min-h-[300px] lg:min-h-0 bg-stone-900 border border-stone-100">
<div className="absolute inset-0 flex w-full h-full">
<div className="before-image-wrapper h-full overflow-hidden relative border-r border-white/50">
<img className="h-full w-full object-cover grayscale brightness-75" src="https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-stone-900 text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-10">
                    PRZED
                  </span>
</div>
<div className="after-image-wrapper h-full relative">
<img className="h-full w-full object-cover brightness-90" src="https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&amp;w=2535&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-10">
                    PO
                  </span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 pointer-events-none"></div>
<div className="relative z-10 p-6 md:p-8 w-full">
<p className="text-xs font-bold text-rose-300 uppercase tracking-widest mb-1 opacity-80">
                  04
                </p>
<h3 className="text-xl md:text-2xl font-serif text-white font-medium italic mb-2">
                  Naprawa Jeansu
                </h3>
<div className="accordion-content h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden text-stone-300 text-sm leading-relaxed border-l-2 border-rose-400 pl-4 mt-2 max-w-lg">
<p className="mb-4">
                    Artystyczne cerowanie techniką Sashiko dla unikalnego stylu.
                  </p>
</div>
</div>
</article>
</div>

<div className="carousel-slide hidden flex-col lg:flex-row gap-4 h-auto lg:h-[600px] w-full" id="slide-1">

<article className="accordion-item group relative flex-1 hover:flex-[4] flex flex-col justify-end overflow-hidden rounded-2xl cursor-pointer min-h-[300px] lg:min-h-0 bg-stone-900 border border-stone-100">
<div className="absolute inset-0 flex w-full h-full">
<div className="before-image-wrapper h-full overflow-hidden relative border-r border-white/50">
<img className="h-full w-full object-cover grayscale brightness-75" src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-stone-900 text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-10">
                    PRZED
                  </span>
</div>
<div className="after-image-wrapper h-full relative">
<img className="h-full w-full object-cover brightness-90" src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-10">
                    PO
                  </span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 pointer-events-none"></div>
<div className="relative z-10 p-6 md:p-8 w-full">
<p className="text-xs font-bold text-rose-300 uppercase tracking-widest mb-1 opacity-80">
                  05
                </p>
<h3 className="text-xl md:text-2xl font-serif text-white font-medium italic mb-2">
                  Skórzana Kurtka
                </h3>
<div className="accordion-content h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden text-stone-300 text-sm leading-relaxed border-l-2 border-rose-400 pl-4 mt-2 max-w-lg">
<p className="mb-4">
                    Renowacja koloru i wymiana zamków w kurtce motocyklowej.
                  </p>
</div>
</div>
</article>

<div className="flex-1 flex items-center justify-center bg-stone-100 rounded-2xl border border-stone-200">
<p className="text-stone-400 text-xs font-bold tracking-widest">
                PROJEKT 06
              </p>
</div>
<div className="flex-1 flex items-center justify-center bg-stone-100 rounded-2xl border border-stone-200">
<p className="text-stone-400 text-xs font-bold tracking-widest">
                PROJEKT 07 &lt;/
              </p>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
