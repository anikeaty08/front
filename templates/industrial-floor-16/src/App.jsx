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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Roboto', 'sans-serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
},
colors: {
stone: {
50:  '#F5F1EA',
100: '#EDEAE3',
200: '#D9D4CB',
300: '#BDBDBD',
400: '#A09B93',
500: '#7B7872',
600: '#6B6358',
700: '#574E42',
800: '#40392F',
900: '#302B26',
950: '#221E1A',
},
sand: {
DEFAULT: '#C6B896',
50:  '#F7F3EC',
100: '#EFE8D9',
200: '#E0D4B8',
300: '#D3C5A5',
400: '#C6B896',
500: '#B5A47A',
600: '#9D8B62',
700: '#7D6E4E',
800: '#5C5139',
900: '#3B3425',
}
}
}
}
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {

          // Nav load animation
          setTimeout(() => {
              document.querySelector('header').classList.add('loaded');
          }, 100);

          // Hero text reveal
          setTimeout(() => {
              const heroTitle = document.getElementById('hero-title');
              if (heroTitle) heroTitle.classList.add('reveal-active');
          }, 300);

          // Scroll Observer
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.15
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      if (entry.target.querySelector('.text-reveal-content') ||
                          entry.target.classList.contains('text-reveal-wrapper')) {
                          entry.target.classList.add('reveal-active');
                      }
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur').forEach(el => {
              observer.observe(el);
          });

          document.querySelectorAll('h2').forEach(el => {
              if (el.querySelector('.text-reveal-content')) observer.observe(el);
          });

          // Smooth scroll
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                  const target = document.querySelector(this.getAttribute('href'));
                  if (target) {
                      e.preventDefault();
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
              });
          });
      });

      // Flashlight effect
      function updateFlashlight(event, el) {
          const rect = el.getBoundingClientRect();
          el.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
          el.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
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
      
<div className="w-full relative bg-[#F5F1EA]">

<div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-12 gap-0 z-0 h-full w-full">
<div className="hidden md:block md:col-span-3 border-r border-stone-300/40 h-full"></div>
<div className="hidden md:block md:col-span-6 border-r border-stone-300/40 h-full"></div>
<div className="hidden md:block md:col-span-3 h-full"></div>
</div>

<header className="relative z-50 border-b border-stone-300 sticky top-0 bg-[#F5F1EA]/95 backdrop-blur-md nav-load">
<div className="flex justify-between items-center px-6 md:px-12 py-5">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group cursor-pointer" href="#">
<iconify-icon className="text-xl text-stone-900 group-hover:rotate-180 transition-transform duration-700" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="font-medium tracking-tighter text-lg text-stone-900">
                TERMOȘAPĂ
              </span>
</a>
</div>
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
<a className="text-xs font-medium tracking-widest uppercase hover:text-stone-500 transition-colors text-stone-900" href="#avantaje">
              Avantaje
            </a>
<a className="text-xs font-medium tracking-widest uppercase hover:text-stone-500 transition-colors text-stone-900" href="#etape">
              Etape
            </a>
<a className="text-xs font-medium tracking-widest uppercase hover:text-stone-500 transition-colors text-stone-900" href="#faq">
              Întrebări
            </a>
</div>
<div className="flex items-center">
<a className="btn-beam px-6 py-2.5 bg-stone-900 text-white rounded-full text-xs font-normal hover:bg-stone-700 transition-all flex items-center gap-2 group" href="#contato">
              Cere ofertă
              <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
</div>
</header>

<section className="relative z-10 min-h-[90vh] flex flex-col noise-overlay bg-stone-950">

<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Turnare șapă autonivelantă" className="w-full h-full object-cover object-center animate-zoom opacity-80" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-stone-950/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-stone-950/20"></div>
</div>

<div className="relative z-10 flex-1 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-20 mt-12 gap-12">
<div className="lg:w-1/2 flex flex-col items-start text-left">
<div className="reveal delay-200 mb-6">
<span className="px-4 py-1.5 border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest backdrop-blur-md bg-white/10 text-stone-200 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-sand rounded-full animate-pulse"></span>
                Republica Moldova
              </span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-none mb-6" id="hero-title">
<span className="text-reveal-wrapper block">
<span className="text-reveal-content delay-300">Încălzire mai</span>
</span>
<span className="text-reveal-wrapper block mt-2">
<span className="text-reveal-content delay-500 text-outline-white">
                  uniformă.
                </span>
</span>
<span className="text-reveal-wrapper block mt-2">
<span className="text-reveal-content delay-600">
                  Finisaj simplu.
                </span>
</span>
</h1>
<p className="text-lg md:text-xl text-stone-300 max-w-xl leading-relaxed reveal delay-700 font-normal mb-10">
              TermoȘapă este o șapă autonivelantă din ipsos pentru UFH care îți
              încapsulează perfect țevile (fără goluri de aer) și lasă o
              suprafață plană pentru finisaj.
            </p>
<div className="flex flex-wrap items-center gap-6 reveal delay-700">
<div className="flex items-center gap-2">
<iconify-icon className="text-sand text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-stone-200 font-medium">
                  Aplicare inclusă
                </span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-sand text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-stone-200 font-medium">
                  Consult tehnic
                </span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-sand text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-stone-200 font-medium">
                  Checklist execuție
                </span>
</div>
</div>
</div>
<div className="lg:w-[420px] w-full bg-stone-900/80 backdrop-blur-md p-8 rounded-sm border border-stone-800 reveal delay-500 shadow-2xl">
<h3 className="text-xl font-medium text-white mb-6 tracking-tight">
              Cere ofertă rapidă
            </h3>
<form className="flex flex-col gap-5">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-mono uppercase tracking-widest text-stone-400">
                  Suprafață aprox. (mp)
                </label>
<input className="bg-stone-950/50 border-b border-stone-700 text-sm text-white py-2 focus:outline-none focus:border-sand transition-colors w-full" type="number"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-mono uppercase tracking-widest text-stone-400">
                  Localitate
                </label>
<input className="bg-stone-950/50 border-b border-stone-700 text-sm text-white py-2 focus:outline-none focus:border-sand transition-colors w-full" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-mono uppercase tracking-widest text-stone-400">
                  Telefon
                </label>
<input className="bg-stone-950/50 border-b border-stone-700 text-sm text-white py-2 focus:outline-none focus:border-sand transition-colors w-full" type="tel"/>
</div>
<button className="mt-4 btn-beam bg-white hover:bg-stone-200 text-stone-900 text-xs font-medium tracking-widest uppercase py-4 rounded-sm transition-colors w-full flex justify-center items-center gap-2 group" type="button">
                Obține ofertă
                <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="border-t border-stone-300 grid grid-cols-2 md:grid-cols-4 bg-[#F5F1EA]/95 backdrop-blur-md relative z-10" id="avantaje">
<div className="p-6 md:p-8 border-r border-b md:border-b-0 border-stone-300 reveal delay-400 group hover:bg-sand-50/60 transition-colors">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-lg text-stone-400 group-hover:text-sand-600 transition-colors" icon="solar:ruler-cross-pen-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-stone-500">
                Planeitate
              </span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-stone-900">
              Perfectă
            </h2>
<span className="text-xs text-stone-500 block mt-1">
              Autonivelare superioară
            </span>
</div>
<div className="p-6 md:p-8 border-r border-b md:border-b-0 border-stone-300 reveal delay-500 group hover:bg-sand-50/60 transition-colors">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-lg text-stone-400 group-hover:text-sand-600 transition-colors" icon="solar:fire-square-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-stone-500">
                Eficiență
              </span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-stone-900">
              Maximă
            </h2>
<span className="text-xs text-stone-500 block mt-1">
              Fără goluri de aer la țeavă
            </span>
</div>
<div className="p-6 md:p-8 border-r border-stone-300 reveal delay-600 group hover:bg-sand-50/60 transition-colors">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-lg text-stone-400 group-hover:text-sand-600 transition-colors" icon="solar:air-water-heater-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-stone-500">
                Sisteme
              </span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-stone-900">
              Low-T
            </h2>
<span className="text-xs text-stone-500 block mt-1">
              Ideal pt. pompe de căldură
            </span>
</div>
<div className="p-6 md:p-8 reveal delay-700 group hover:bg-sand-50/60 transition-colors">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-lg text-stone-400 group-hover:text-sand-600 transition-colors" icon="solar:stopwatch-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-stone-500">
                Finisaj
              </span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-stone-900">
              Simplu
            </h2>
<span className="text-xs text-stone-500 block mt-1">
              Suport stabil parchet/LVT
            </span>
</div>
</div>
</section>

<div className="border-b border-stone-300 overflow-hidden py-4 bg-stone-900 relative z-10">
<div className="marquee-container">
<div className="marquee-content">
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">
              TermoȘapă
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">
              •
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">
              Autonivelantă
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">
              •
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">
              Încălzire în pardoseală
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">
              •
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">
              Fără goluri de aer
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">
              •
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">
              Planeitate perfectă
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">
              •
            </span>
</div>
<div className="marquee-content">
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">
              TermoȘapă
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">
              •
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">
              Autonivelantă
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">
              •
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">
              Încălzire în pardoseală
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">
              •
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">
              Fără goluri de aer
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">
              •
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">
              Planeitate perfectă
            </span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">
              •
            </span>
</div>
</div>
</div>

<section className="relative z-10 border-b border-stone-300" id="sobre">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[70vh]">
<div className="md:col-span-5 p-8 md:p-16 border-b md:border-b-0 md:border-r border-stone-300 flex flex-col justify-center reveal-left">
<span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-6">
              Probleme Frecvente
            </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-8 leading-tight">
              Denivelări, goluri de aer și fisuri.
            </h2>
<p className="text-stone-600 text-base leading-relaxed mb-6 font-normal">
              Șapele clasice pot lăsa goluri de aer lângă țeavă, creând zone
              reci și scăzând dramatic eficiența sistemului tău de încălzire în
              pardoseală.
            </p>
<p className="text-stone-500 text-sm leading-relaxed mb-10 font-normal">
              În plus, denivelările complică instalarea parchetului sau
              LVT-ului, iar fisurile pot duce la remedieri costisitoare și
              întârzieri pe șantier. Ai nevoie de un suport perfect plan și
              stabil.
            </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-sand" icon="solar:close-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="text-sm text-stone-700">
                  Risc ridicat de fisuri
                </span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-sand" icon="solar:close-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="text-sm text-stone-700">
                  Zone reci și pierderi termice
                </span>
</div>
</div>
</div>
<div className="md:col-span-7 p-8 md:p-12 flex items-end justify-end relative overflow-hidden flashlight-card min-h-[400px] md:min-h-full" onmousemove="updateFlashlight(event, this)">
<img alt="Aplicare TermoȘapă" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[2s] hover:scale-105" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/10 pointer-events-none"></div>
<div className="relative w-full max-w-sm reveal-scale delay-200 z-10">
<div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-sm border border-stone-200/50 flex flex-col p-8 justify-between transform transition-transform duration-700 ease-out hover:-translate-y-2">
<iconify-icon className="text-4xl text-sand mb-8" icon="solar:check-read-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-2">
                    Soluția: TermoȘapă
                  </h3>
<div className="h-px w-12 bg-sand mb-3"></div>
<p className="text-xs text-stone-500 leading-relaxed font-mono">
                    Șapă fluidă pe bază de ipsos ce asigură încapsularea 100% a
                    țevilor și o suprafață perfect plană.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-b border-stone-300 bg-stone-50/50" id="rezultate">
<div className="p-8 md:p-16 border-b border-stone-300 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="reveal">
<span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-4">
              Execuție Impecabilă
            </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900">
              Rezultate dovedite
            </h2>
</div>
</div>
<div className="grid grid-cols-1">

<div className="group border-b border-stone-300 hover:bg-white transition-colors duration-500 cursor-pointer overflow-hidden animated-border glow-hover flashlight-card" onmousemove="updateFlashlight(event, this)">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[400px]">
<div className="md:col-span-5 p-8 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-stone-300 relative z-10 bg-[#F5F1EA]/80 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-mono text-stone-400">01</span>
<div className="h-px w-8 bg-stone-300"></div>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600">
                    Turnare
                  </span>
</div>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500 text-stone-900">
                  Încapsulare perfectă
                </h3>
<p className="text-stone-500 text-sm leading-relaxed font-normal mb-8">
                  Materialul fluid pătrunde sub și în jurul fiecărei țevi de
                  încălzire, eliminând complet aerul izolat termic și asigurând
                  un transfer de căldură optim pe întreaga suprafață.
                </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1 border border-stone-300 rounded-full text-xs font-mono uppercase text-stone-500">
                    Fără goluri de aer
                  </span>
<span className="px-3 py-1 border border-stone-300 rounded-full text-xs font-mono uppercase text-stone-500">
                    Autonivelant
                  </span>
</div>
</div>
<div className="md:col-span-7 relative overflow-hidden bg-stone-200">
<div className="absolute inset-0 flex items-center justify-center p-0 md:p-12 opacity-90 group-hover:opacity-100 transition-opacity duration-700 bg-stone-200">
<div className="w-full h-full bg-stone-800 rounded-sm transform group-hover:scale-105 transition-transform duration-1000 ease-out shadow-2xl relative overflow-hidden">
<img alt="Încapsulare perfectă a țevilor" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1504307651254-35680f356f58?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-60"></div>
<div className="absolute bottom-8 left-8">
<iconify-icon className="text-4xl text-white/80" icon="solar:city-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group border-b border-stone-300 hover:bg-white transition-colors duration-500 cursor-pointer overflow-hidden animated-border glow-hover flashlight-card" onmousemove="updateFlashlight(event, this)">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[400px]">
<div className="md:col-span-5 p-8 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-stone-300 relative z-10 bg-[#F5F1EA]/80 backdrop-blur-sm md:order-2">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-mono text-stone-400">02</span>
<div className="h-px w-8 bg-stone-300"></div>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600">
                    Finisaj
                  </span>
</div>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500 text-stone-900">
                  Gata de acoperire
                </h3>
<p className="text-stone-500 text-sm leading-relaxed font-normal mb-8">
                  După uscare, suprafața rămâne netedă, dură și perfect plană,
                  pregătită direct pentru aplicarea parchetului, LVT-ului sau
                  gresiei, fără niciun strat adițional de nivelare.
                </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1 bg-stone-900 text-white rounded-full text-xs font-mono uppercase">
                    Planeitate 100%
                  </span>
<span className="px-3 py-1 border border-stone-300 rounded-full text-xs font-mono uppercase text-stone-500">
                    Suport ideal
                  </span>
</div>
</div>
<div className="md:col-span-7 relative overflow-hidden bg-stone-300 md:order-1">
<div className="absolute inset-0 flex items-center justify-center p-0 md:p-12 opacity-90 group-hover:opacity-100 transition-opacity duration-700 bg-stone-300">
<div className="w-full h-full bg-stone-800 rounded-sm transform group-hover:scale-105 transition-transform duration-1000 ease-out shadow-2xl relative overflow-hidden">
<img alt="Finisaj plan" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1516880711640-ef7daf815e92?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-60"></div>
<div className="absolute bottom-8 left-8">
<iconify-icon className="text-4xl text-white/80" icon="solar:smart-home-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-b border-stone-300 bg-white" id="etape">
<div className="p-8 md:p-12 border-b border-stone-300">
<span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-4">
            Procesul nostru
          </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900">
            Cum funcționează
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4">
<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300 flex flex-col items-start reveal group">
<div className="w-14 h-14 rounded-xl border border-stone-200 flex items-center justify-center bg-stone-50 group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-500 mb-8 glow-hover">
<iconify-icon className="text-2xl text-stone-600 group-hover:text-white transition-colors" icon="solar:clipboard-list-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">
              1. Vizită și estimare
            </h4>
<p className="text-xs text-stone-500 leading-relaxed font-normal">
              Ne deplasăm pe șantier pentru a evalua suprafața, sistemul UFH și
              a oferi o estimare precisă a costurilor.
            </p>
</div>
<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300 flex flex-col items-start reveal delay-100 group">
<div className="w-14 h-14 rounded-xl border border-stone-200 flex items-center justify-center bg-stone-50 group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-500 mb-8 glow-hover">
<iconify-icon className="text-2xl text-stone-600 group-hover:text-white transition-colors" icon="solar:calendar-add-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">
              2. Programare lucrare
            </h4>
<p className="text-xs text-stone-500 leading-relaxed font-normal">
              Stabilim data turnării, luând în calcul stadiul șantierului și
              necesarul de materiale TermoȘapă.
            </p>
</div>
<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300 flex flex-col items-start reveal delay-200 group">
<div className="w-14 h-14 rounded-xl border border-stone-200 flex items-center justify-center bg-stone-50 group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-500 mb-8 glow-hover">
<iconify-icon className="text-2xl text-stone-600 group-hover:text-white transition-colors" icon="solar:pump-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">
              3. Aplicare rapidă
            </h4>
<p className="text-xs text-stone-500 leading-relaxed font-normal">
              Turnăm mecanizat șapa, asigurând o aplicare curată, rapidă și
              exact la cota stabilită.
            </p>
</div>
<div className="p-8 md:p-12 flex flex-col items-start reveal delay-300 group bg-stone-50/50">
<div className="w-14 h-14 rounded-xl border border-stone-200 flex items-center justify-center bg-white group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-500 mb-8 glow-hover relative overflow-hidden">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,#C6B896_360deg)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
<div className="absolute inset-[1px] bg-stone-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-2xl text-stone-600 group-hover:text-sand transition-colors relative z-10" icon="solar:document-text-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">
              4. Uscare și instrucțiuni
            </h4>
<p className="text-xs text-stone-500 leading-relaxed font-normal">
              La final, îți oferim checklist-ul pentru pornirea corectă a
              sistemului de încălzire și pregătirea pentru finisaj.
            </p>
</div>
</div>
</section>

<section className="relative z-10 border-b border-stone-300 bg-[#F5F1EA]" id="faq">
<div className="p-8 md:p-16 border-b border-stone-300 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="reveal">
<span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-4">
              Clarificări Tehnice
            </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900">
              Întrebări Frecvente
            </h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3">
<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300 flex flex-col reveal group hover:bg-white transition-colors duration-500">
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-4">
              Ipsos și umiditate?
            </h3>
<p className="text-stone-600 text-sm leading-relaxed mb-10 flex-1 font-normal">
              TermoȘapa pe bază de ipsos este ideală pentru spații interioare
              uscate (camere, living, holuri). În spații umede (băi), este
              necesară aplicarea unei hidroizolații corespunzătoare înainte de
              montajul finisajului.
            </p>
<div className="mt-auto pt-6 border-t border-stone-200">
<h4 className="text-base font-medium text-stone-900 tracking-tight">
                Aplicabilitate
              </h4>
<span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mt-1">
                Spații interioare
              </span>
</div>
</div>
<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300 flex flex-col reveal delay-100 group hover:bg-white transition-colors duration-500">
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-4">
              Cât durează până la finisaj?
            </h3>
<p className="text-stone-600 text-sm leading-relaxed mb-10 flex-1 font-normal">
              Timpul de uscare depinde de grosimea șapei, temperatură și gradul
              de ventilare. Recomandăm respectarea instrucțiunilor tehnice și
              măsurarea umidității reziduale cu aparatul CM înainte de a monta
              parchetul.
            </p>
<div className="mt-auto pt-6 border-t border-stone-200">
<h4 className="text-base font-medium text-stone-900 tracking-tight">
                Timp de uscare
              </h4>
<span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mt-1">
                Măsurare umiditate
              </span>
</div>
</div>
<div className="p-8 md:p-12 flex flex-col reveal delay-200 group hover:bg-white transition-colors duration-500">
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-4">
              De ce nu șapă clasică?
            </h3>
<p className="text-stone-600 text-sm leading-relaxed mb-10 flex-1 font-normal">
              Șapa clasică (semicativă) este poroasă, reține aer în jurul
              țevilor (care este izolator termic) și prezintă inerție mare.
              TermoȘapa se mulează perfect, elimină golurile și transferă
              căldura mult mai eficient.
            </p>
<div className="mt-auto pt-6 border-t border-stone-200">
<h4 className="text-base font-medium text-stone-900 tracking-tight">
                Eficiență
              </h4>
<span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mt-1">
                Transfer termic
              </span>
</div>
</div>
</div>
</section>

<section className="relative z-10 bg-stone-900 text-stone-200 py-24 lg:py-32 border-b border-stone-800" id="contato">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="reveal flex flex-col justify-between h-full">
<div>
<span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-6">
                  [ PROGRAMEAZĂ O VIZITĂ ]
                </span>
<h2 className="text-4xl md:text-5xl tracking-tighter font-medium text-white mb-8 max-w-md">
                  Cere ofertă pentru TermoȘapă.
                </h2>
<p className="text-sm text-stone-400 leading-relaxed max-w-sm font-normal mb-12">
                  Completează formularul pentru a obține o estimare sau
                  contactează-ne direct pentru a stabili o vizită tehnică pe
                  șantier.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-8 border-t border-stone-800 pt-10 mt-8 lg:mt-auto">
<div className="flex flex-col gap-2">
<span className="text-xs font-mono tracking-widest text-stone-500 uppercase font-medium">
                    WhatsApp / Viber
                  </span>
<a className="text-sm font-medium hover:text-sand transition-colors text-stone-200 flex items-center gap-2" href="https://wa.me/37360000000">
<iconify-icon className="text-lg" icon="ic:baseline-whatsapp"></iconify-icon>
                    Mesaj pe WhatsApp
                  </a>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs font-mono tracking-widest text-stone-500 uppercase font-medium">
                    Telefon
                  </span>
<a className="text-sm font-medium hover:text-sand transition-colors text-stone-200" href="tel:+37360000000">
                    +373 60 000 000
                  </a>
</div>
</div>
</div>
<div className="reveal delay-200 bg-stone-950/50 rounded-sm p-8 md:p-10 border border-stone-800 relative z-10">
<form className="flex flex-col gap-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-1">
<label className="text-xs font-mono tracking-widest text-stone-500 uppercase">
                      Nume
                    </label>
<input className="bg-transparent border-b border-stone-700 text-sm text-white py-2 focus:outline-none focus:border-sand transition-colors" type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs font-mono tracking-widest text-stone-500 uppercase">
                      Telefon
                    </label>
<input className="bg-transparent border-b border-stone-700 text-sm text-white py-2 focus:outline-none focus:border-sand transition-colors" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-1">
<label className="text-xs font-mono tracking-widest text-stone-500 uppercase">
                      Localitate
                    </label>
<input className="bg-transparent border-b border-stone-700 text-sm text-white py-2 focus:outline-none focus:border-sand transition-colors" type="text"/>
</div>
<div className="flex flex-col gap-1 relative">
<label className="text-xs font-mono tracking-widest text-stone-500 uppercase">
                      Tip Finisaj
                    </label>
<select className="bg-transparent border-b border-stone-700 text-sm text-white py-2 focus:outline-none focus:border-sand transition-colors appearance-none cursor-pointer rounded-none">
<option className="bg-stone-900 text-stone-400" disabled="" selected="" value="">
                        Selectează...
                      </option>
<option className="bg-stone-900 text-white" value="parchet">
                        Parchet (Laminat/Stratificat)
                      </option>
<option className="bg-stone-900 text-white" value="lvt">
                        LVT / SPC
                      </option>
<option className="bg-stone-900 text-white" value="gresie">
                        Gresie / Ceramică
                      </option>
</select>
<iconify-icon className="absolute right-0 bottom-3 text-stone-500 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-1 mb-2">
<label className="text-xs font-mono tracking-widest text-stone-500 uppercase">
                    Detalii proiect (Mp, stadiu)
                  </label>
<textarea className="bg-transparent border-b border-stone-700 text-sm text-white py-2 focus:outline-none focus:border-sand transition-colors resize-none" rows="2"></textarea>
</div>
<button className="btn-beam bg-white hover:bg-stone-200 text-stone-900 text-xs font-medium tracking-widest uppercase py-4 rounded-sm transition-colors w-full flex justify-center items-center gap-2 group mt-2" type="button">
                  Cere ofertă
                  <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" height="16" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="relative z-10 bg-stone-900 text-stone-200 pt-20 pb-12 overflow-hidden border-t border-stone-800">

<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4 text-white leading-tight">
                Încălzire mai
                <br/>
<span className="text-outline-white">uniformă.</span>
</h2>
<p className="text-sm text-stone-400 font-normal max-w-sm mt-6">
                Sediul Central:
                <br/>
                Chișinău, Republica Moldova
                <br/>
                contact@termosapa.md
              </p>
</div>
<div className="flex flex-col md:items-end justify-end reveal delay-200">
<div className="flex flex-col gap-4 text-left md:text-right">
<a className="text-sm font-medium text-stone-400 hover:text-white transition-colors" href="#avantaje">
                  Avantaje TermoȘapă
                </a>
<a className="text-sm font-medium text-stone-400 hover:text-white transition-colors" href="#rezultate">
                  Rezultate &amp; Studii
                </a>
<a className="text-sm font-medium text-stone-400 hover:text-white transition-colors" href="#faq">
                  Întrebări Frecvente
                </a>
<a className="text-sm font-medium text-stone-400 hover:text-white transition-colors" href="#contato">
                  Cere Ofertă
                </a>
</div>
</div>
</div>
<div className="border-t border-stone-800 w-full mb-10"></div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-sand" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="font-medium tracking-tighter text-lg text-white">
                TERMOȘAPĂ
              </span>
</div>
<span className="text-xs text-stone-600 font-mono tracking-widest uppercase">
              © 2024 TermoȘapă MD.
            </span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.03] transform translate-y-[28%] flex justify-center z-0">
<h1 className="text-center tracking-tighter text-white select-none font-medium whitespace-nowrap" style={{fontSize: '20vw'}}>
            TERMOȘAPĂ
          </h1>
</div>
</footer>
</div>



    </>
  );
}
